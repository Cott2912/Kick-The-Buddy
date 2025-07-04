"use strict";
const OFFLINE_DATA_FILE = "offline.json",
    CACHE_NAME_PREFIX = "c3offline",
    BROADCASTCHANNEL_NAME = "offline",
    CONSOLE_PREFIX = "[SW] ",
    LAZYLOAD_KEYNAME = "",
    broadcastChannel = "undefined" == typeof BroadcastChannel ? null : new BroadcastChannel(BROADCASTCHANNEL_NAME);
class PromiseThrottle {
    constructor(e) {
        this._maxParallel = e, this._queue = [], this._activeCount = 0
    }
    Add(a) {
        return new Promise((e, t) => {
            this._queue.push({
                func: a,
                resolve: e,
                reject: t
            }), this._MaybeStartNext()
        })
    }
    async _MaybeStartNext() {
        if (this._queue.length && !(this._activeCount >= this._maxParallel)) {
            this._activeCount++;
            const t = this._queue.shift();
            try {
                const e = await t.func();
                t.resolve(e)
            } catch (e) {
                t.reject(e)
            }
            this._activeCount--, this._MaybeStartNext()
        }
    }
}
const networkThrottle = new PromiseThrottle(20);

function PostBroadcastMessage(e) {
    broadcastChannel && setTimeout(() => broadcastChannel.postMessage(e), 3e3)
}

function Broadcast(e) {
    PostBroadcastMessage({
        "type": e
    })
}

function BroadcastDownloadingUpdate(e) {
    PostBroadcastMessage({
        "type": "downloading-update",
        "version": e
    })
}

function BroadcastUpdateReady(e) {
    PostBroadcastMessage({
        "type": "update-ready",
        "version": e
    })
}

function IsUrlInLazyLoadList(e, t) {
    if (t) try {
        for (const a of t)
            if (new RegExp(a).test(e)) return !0
    } catch (e) {
        console.error(CONSOLE_PREFIX + "Error matching in lazy-load list: ", e)
    }
    return !1
}

function WriteLazyLoadListToStorage(e) {
    return "undefined" == typeof localforage ? Promise.resolve() : localforage.setItem(LAZYLOAD_KEYNAME, e)
}

function ReadLazyLoadListFromStorage() {
    return "undefined" == typeof localforage ? Promise.resolve([]) : localforage.getItem(LAZYLOAD_KEYNAME)
}

function GetCacheBaseName() {
    return CACHE_NAME_PREFIX + "-" + self.registration.scope
}

function GetCacheVersionName(e) {
    return GetCacheBaseName() + "-v" + e
}
async function GetAvailableCacheNames() {
    const e = await caches.keys(),
        t = GetCacheBaseName();
    return e.filter(e => e.startsWith(t))
}
async function IsUpdatePending() {
    const e = await GetAvailableCacheNames();
    return 2 <= e.length
}
async function GetMainPageUrl() {
    const e = await clients.matchAll({
        includeUncontrolled: !0,
        type: "window"
    });
    for (const t of e) {
        let e = t.url;
        if ((e = e.startsWith(self.registration.scope) ? e.substring(self.registration.scope.length) : e) && "/" !== e) return e = e.startsWith("?") ? "/" + e : e
    }
    return ""
}

function fetchWithBypass(e, t) {
    return "string" == typeof e && (e = new Request(e)), t ? fetch(e.url, {
        headers: e.headers,
        mode: e.mode,
        credentials: e.credentials,
        redirect: e.redirect,
        cache: "no-store"
    }) : fetch(e)
}
async function CreateCacheFromFileList(t, a, o) {
    const e = await Promise.all(a.map(e => networkThrottle.Add(() => fetchWithBypass(e, o))));
    let s = !0;
    for (const r of e) r.ok || (s = !1, console.error(CONSOLE_PREFIX + "Error fetching '" + r.url + "' (" + r.status + " " + r.statusText + ")"));
    if (!s) throw new Error("not all resources were fetched successfully");
    const n = await caches.open(t);
    try {
        return await Promise.all(e.map((e, t) => n.put(a[t], e)))
    } catch (e) {
        throw console.error(CONSOLE_PREFIX + "Error writing cache entries: ", e), caches.delete(t), e
    }
}
async function UpdateCheck(e) {
    try {
        const t = await fetchWithBypass(OFFLINE_DATA_FILE, !0);
        if (!t.ok) throw new Error(OFFLINE_DATA_FILE + " responded with " + t.status + " " + t.statusText);
        const a = await t.json(),
            o = a.version,
            s = a.fileList,
            n = a.lazyLoad,
            r = GetCacheVersionName(o),
            i = await caches.has(r);
        if (i) {
            const c = await IsUpdatePending();
            void (c ? (console.log(CONSOLE_PREFIX + "Update pending"), Broadcast("update-pending")) : (console.log(CONSOLE_PREFIX + "Up to date"), Broadcast("up-to-date")))
        } else {
            const l = await GetMainPageUrl(),
                d = (s.unshift("/"), l && -1 === s.indexOf(l) && s.unshift(l), console.log(CONSOLE_PREFIX + "Caching " + s.length + " files for offline use"), e ? Broadcast("downloading") : BroadcastDownloadingUpdate(o), n && await WriteLazyLoadListToStorage(n), await CreateCacheFromFileList(r, s, !e), await IsUpdatePending());
            d ? (console.log(CONSOLE_PREFIX + "All resources saved, update ready"), BroadcastUpdateReady(o)) : (console.log(CONSOLE_PREFIX + "All resources saved, offline support ready"), Broadcast("offline-ready"))
        }
    } catch (e) {
        console.warn(CONSOLE_PREFIX + "Update check failed: ", e)
    }
}
async function GetCacheNameToUse(e, t) {
    if (1 === e.length || !t) return e[0];
    const a = await clients.matchAll();
    if (1 < a.length) return e[0];
    const o = e[e.length - 1];
    return console.log(CONSOLE_PREFIX + "Updating to new version"), await Promise.all(e.slice(0, -1).map(e => caches.delete(e))), o
}
async function HandleFetch(t, e) {
    const a = await GetAvailableCacheNames();
    if (!a.length) return fetch(t.request);
    const o = await GetCacheNameToUse(a, e),
        s = await caches.open(o),
        n = await s.match(t.request);
    if (n) return n;
    const r = await Promise.all([fetch(t.request), ReadLazyLoadListFromStorage()]),
        i = r[0],
        c = r[1];
    if (IsUrlInLazyLoadList(t.request.url, c)) try {
        await s.put(t.request, i.clone())
    } catch (e) {
        console.warn(CONSOLE_PREFIX + "Error caching '" + t.request.url + "': ", e)
    }
    return i
}
self.addEventListener("install", e => {
    e.waitUntil(UpdateCheck(!0).catch(() => null))
}), self.addEventListener("fetch", e => {
    if (new URL(e.request.url).origin === location.origin) {
        const t = "navigate" === e.request.mode,
            a = HandleFetch(e, t);
        t && e.waitUntil(a.then(() => UpdateCheck(!1))), e.respondWith(a)
    }
});