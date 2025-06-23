var U8 = Object.defineProperty;
var $8 = (e, i, r) => i in e ? U8(e, i, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[i] = r;
var it = (e, i, r) => $8(e, typeof i != "symbol" ? i + "" : i, r);
(function () {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) a(l);
    new MutationObserver(l => {
        for (const c of l)
            if (c.type === "childList")
                for (const d of c.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && a(d)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function r(l) {
        const c = {};
        return l.integrity && (c.integrity = l.integrity), l.referrerPolicy && (c.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? c.credentials = "include" : l.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c
    }

    function a(l) {
        if (l.ep) return;
        l.ep = !0;
        const c = r(l);
        fetch(l.href, c)
    }
})();
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
/*! #__NO_SIDE_EFFECTS__ */
function Rt(e) {
    const i = Object.create(null);
    for (const r of e.split(",")) i[r] = 1;
    return r => r in i
}
const B1 = {},
    W2 = [],
    U4 = () => { },
    j8 = () => !1,
    y5 = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    Dt = e => e.startsWith("onUpdate:"),
    a4 = Object.assign,
    Nt = (e, i) => {
        const r = e.indexOf(i);
        r > -1 && e.splice(r, 1)
    },
    W8 = Object.prototype.hasOwnProperty,
    R1 = (e, i) => W8.call(e, i),
    m1 = Array.isArray,
    K2 = e => _5(e) === "[object Map]",
    e7 = e => _5(e) === "[object Set]",
    g1 = e => typeof e == "function",
    J1 = e => typeof e == "string",
    p2 = e => typeof e == "symbol",
    U1 = e => e !== null && typeof e == "object",
    n7 = e => (U1(e) || g1(e)) && g1(e.then) && g1(e.catch),
    i7 = Object.prototype.toString,
    _5 = e => i7.call(e),
    K8 = e => _5(e).slice(8, -1),
    o7 = e => _5(e) === "[object Object]",
    Bt = e => J1(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    _3 = Rt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    v5 = e => {
        const i = Object.create(null);
        return r => i[r] || (i[r] = e(r))
    },
    V8 = /-(\w)/g,
    L4 = v5(e => e.replace(V8, (i, r) => r ? r.toUpperCase() : "")),
    q8 = /\B([A-Z])/g,
    C2 = v5(e => e.replace(q8, "-$1").toLowerCase()),
    x5 = v5(e => e.charAt(0).toUpperCase() + e.slice(1)),
    ot = v5(e => e ? `on${x5(e)}` : ""),
    f2 = (e, i) => !Object.is(e, i),
    i5 = (e, ...i) => {
        for (let r = 0; r < e.length; r++) e[r](...i)
    },
    r7 = (e, i, r, a = !1) => {
        Object.defineProperty(e, i, {
            configurable: !0,
            enumerable: !1,
            writable: a,
            value: r
        })
    },
    yt = e => {
        const i = parseFloat(e);
        return isNaN(i) ? e : i
    };
let n6;
const b5 = () => n6 || (n6 = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function t3(e) {
    if (m1(e)) {
        const i = {};
        for (let r = 0; r < e.length; r++) {
            const a = e[r],
                l = J1(a) ? Q8(a) : t3(a);
            if (l)
                for (const c in l) i[c] = l[c]
        }
        return i
    } else if (J1(e) || U1(e)) return e
}
const J8 = /;(?![^(]*\))/g,
    Y8 = /:([^]+)/,
    X8 = /\/\*[^]*?\*\//g;

function Q8(e) {
    const i = {};
    return e.replace(X8, "").split(J8).forEach(r => {
        if (r) {
            const a = r.split(Y8);
            a.length > 1 && (i[a[0].trim()] = a[1].trim())
        }
    }), i
}

function T4(e) {
    let i = "";
    if (J1(e)) i = e;
    else if (m1(e))
        for (let r = 0; r < e.length; r++) {
            const a = T4(e[r]);
            a && (i += a + " ")
        } else if (U1(e))
        for (const r in e) e[r] && (i += r + " ");
    return i.trim()
}
const t0 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    e0 = Rt(t0);

function s7(e) {
    return !!e || e === ""
}
const a7 = e => !!(e && e.__v_isRef === !0),
    L1 = e => J1(e) ? e : e == null ? "" : m1(e) || U1(e) && (e.toString === i7 || !g1(e.toString)) ? a7(e) ? L1(e.value) : JSON.stringify(e, l7, 2) : String(e),
    l7 = (e, i) => a7(i) ? l7(e, i.value) : K2(i) ? {
        [`Map(${i.size})`]: [...i.entries()].reduce((r, [a, l], c) => (r[rt(a, c) + " =>"] = l, r), {})
    } : e7(i) ? {
        [`Set(${i.size})`]: [...i.values()].map(r => rt(r))
    } : p2(i) ? rt(i) : U1(i) && !m1(i) && !o7(i) ? String(i) : i,
    rt = (e, i = "") => {
        var r;
        return p2(e) ? `Symbol(${(r = e.description) != null ? r : i})` : e
    };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let g4;
class n0 {
    constructor(i = !1) {
        this.detached = i, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = g4, !i && g4 && (this.index = (g4.scopes || (g4.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let i, r;
            if (this.scopes)
                for (i = 0, r = this.scopes.length; i < r; i++) this.scopes[i].pause();
            for (i = 0, r = this.effects.length; i < r; i++) this.effects[i].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let i, r;
            if (this.scopes)
                for (i = 0, r = this.scopes.length; i < r; i++) this.scopes[i].resume();
            for (i = 0, r = this.effects.length; i < r; i++) this.effects[i].resume()
        }
    }
    run(i) {
        if (this._active) {
            const r = g4;
            try {
                return g4 = this, i()
            } finally {
                g4 = r
            }
        }
    }
    on() {
        g4 = this
    }
    off() {
        g4 = this.parent
    }
    stop(i) {
        if (this._active) {
            this._active = !1;
            let r, a;
            for (r = 0, a = this.effects.length; r < a; r++) this.effects[r].stop();
            for (this.effects.length = 0, r = 0, a = this.cleanups.length; r < a; r++) this.cleanups[r]();
            if (this.cleanups.length = 0, this.scopes) {
                for (r = 0, a = this.scopes.length; r < a; r++) this.scopes[r].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !i) {
                const l = this.parent.scopes.pop();
                l && l !== this && (this.parent.scopes[this.index] = l, l.index = this.index)
            }
            this.parent = void 0
        }
    }
}

function i0() {
    return g4
}
let H1;
const st = new WeakSet;
class u7 {
    constructor(i) {
        this.fn = i, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, g4 && g4.active && g4.effects.push(this)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65, st.has(this) && (st.delete(this), this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || d7(this)
    }
    run() {
        if (!(this.flags & 1)) return this.fn();
        this.flags |= 2, i6(this), h7(this);
        const i = H1,
            r = k4;
        H1 = this, k4 = !0;
        try {
            return this.fn()
        } finally {
            f7(this), H1 = i, k4 = r, this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let i = this.deps; i; i = i.nextDep) Zt(i);
            this.deps = this.depsTail = void 0, i6(this), this.onStop && this.onStop(), this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? st.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        _t(this) && this.run()
    }
    get dirty() {
        return _t(this)
    }
}
let c7 = 0,
    v3, x3;

function d7(e, i = !1) {
    if (e.flags |= 8, i) {
        e.next = x3, x3 = e;
        return
    }
    e.next = v3, v3 = e
}

function Gt() {
    c7++
}

function zt() {
    if (--c7 > 0) return;
    if (x3) {
        let i = x3;
        for (x3 = void 0; i;) {
            const r = i.next;
            i.next = void 0, i.flags &= -9, i = r
        }
    }
    let e;
    for (; v3;) {
        let i = v3;
        for (v3 = void 0; i;) {
            const r = i.next;
            if (i.next = void 0, i.flags &= -9, i.flags & 1) try {
                i.trigger()
            } catch (a) {
                e || (e = a)
            }
            i = r
        }
    }
    if (e) throw e
}

function h7(e) {
    for (let i = e.deps; i; i = i.nextDep) i.version = -1, i.prevActiveLink = i.dep.activeLink, i.dep.activeLink = i
}

function f7(e) {
    let i, r = e.depsTail,
        a = r;
    for (; a;) {
        const l = a.prevDep;
        a.version === -1 ? (a === r && (r = l), Zt(a), o0(a)) : i = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l
    }
    e.deps = i, e.depsTail = r
}

function _t(e) {
    for (let i = e.deps; i; i = i.nextDep)
        if (i.dep.version !== i.version || i.dep.computed && (p7(i.dep.computed) || i.dep.version !== i.version)) return !0;
    return !!e._dirty
}

function p7(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === T3)) return;
    e.globalVersion = T3;
    const i = e.dep;
    if (e.flags |= 2, i.version > 0 && !e.isSSR && e.deps && !_t(e)) {
        e.flags &= -3;
        return
    }
    const r = H1,
        a = k4;
    H1 = e, k4 = !0;
    try {
        h7(e);
        const l = e.fn(e._value);
        (i.version === 0 || f2(l, e._value)) && (e._value = l, i.version++)
    } catch (l) {
        throw i.version++, l
    } finally {
        H1 = r, k4 = a, f7(e), e.flags &= -3
    }
}

function Zt(e, i = !1) {
    const {
        dep: r,
        prevSub: a,
        nextSub: l
    } = e;
    if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), r.subs === e && (r.subs = a, !a && r.computed)) {
        r.computed.flags &= -5;
        for (let c = r.computed.deps; c; c = c.nextDep) Zt(c, !0)
    } !i && !--r.sc && r.map && r.map.delete(r.key)
}

function o0(e) {
    const {
        prevDep: i,
        nextDep: r
    } = e;
    i && (i.nextDep = r, e.prevDep = void 0), r && (r.prevDep = i, e.nextDep = void 0)
}
let k4 = !0;
const m7 = [];

function m2() {
    m7.push(k4), k4 = !1
}

function g2() {
    const e = m7.pop();
    k4 = e === void 0 ? !0 : e
}

function i6(e) {
    const {
        cleanup: i
    } = e;
    if (e.cleanup = void 0, i) {
        const r = H1;
        H1 = void 0;
        try {
            i()
        } finally {
            H1 = r
        }
    }
}
let T3 = 0;
class r0 {
    constructor(i, r) {
        this.sub = i, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
class Ht {
    constructor(i) {
        this.computed = i, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0
    }
    track(i) {
        if (!H1 || !k4 || H1 === this.computed) return;
        let r = this.activeLink;
        if (r === void 0 || r.sub !== H1) r = this.activeLink = new r0(H1, this), H1.deps ? (r.prevDep = H1.depsTail, H1.depsTail.nextDep = r, H1.depsTail = r) : H1.deps = H1.depsTail = r, g7(r);
        else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
            const a = r.nextDep;
            a.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = a), r.prevDep = H1.depsTail, r.nextDep = void 0, H1.depsTail.nextDep = r, H1.depsTail = r, H1.deps === r && (H1.deps = a)
        }
        return r
    }
    trigger(i) {
        this.version++, T3++, this.notify(i)
    }
    notify(i) {
        Gt();
        try {
            for (let r = this.subs; r; r = r.prevSub) r.sub.notify() && r.sub.dep.notify()
        } finally {
            zt()
        }
    }
}

function g7(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
        const i = e.dep.computed;
        if (i && !e.dep.subs) {
            i.flags |= 20;
            for (let a = i.deps; a; a = a.nextDep) g7(a)
        }
        const r = e.dep.subs;
        r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e
    }
}
const vt = new WeakMap,
    T2 = Symbol(""),
    xt = Symbol(""),
    E3 = Symbol("");

function i4(e, i, r) {
    if (k4 && H1) {
        let a = vt.get(e);
        a || vt.set(e, a = new Map);
        let l = a.get(r);
        l || (a.set(r, l = new Ht), l.map = a, l.key = r), l.track()
    }
}

function t2(e, i, r, a, l, c) {
    const d = vt.get(e);
    if (!d) {
        T3++;
        return
    }
    const p = f => {
        f && f.trigger()
    };
    if (Gt(), i === "clear") d.forEach(p);
    else {
        const f = m1(e),
            m = f && Bt(r);
        if (f && r === "length") {
            const g = Number(a);
            d.forEach((_, x) => {
                (x === "length" || x === E3 || !p2(x) && x >= g) && p(_)
            })
        } else switch ((r !== void 0 || d.has(void 0)) && p(d.get(r)), m && p(d.get(E3)), i) {
            case "add":
                f ? m && p(d.get("length")) : (p(d.get(T2)), K2(e) && p(d.get(xt)));
                break;
            case "delete":
                f || (p(d.get(T2)), K2(e) && p(d.get(xt)));
                break;
            case "set":
                K2(e) && p(d.get(T2));
                break
        }
    }
    zt()
}

function Z2(e) {
    const i = O1(e);
    return i === e ? i : (i4(i, "iterate", E3), E4(e) ? i : i.map(o4))
}

function w5(e) {
    return i4(e = O1(e), "iterate", E3), e
}
const s0 = {
    __proto__: null,
    [Symbol.iterator]() {
        return at(this, Symbol.iterator, o4)
    },
    concat(...e) {
        return Z2(this).concat(...e.map(i => m1(i) ? Z2(i) : i))
    },
    entries() {
        return at(this, "entries", e => (e[1] = o4(e[1]), e))
    },
    every(e, i) {
        return Y4(this, "every", e, i, void 0, arguments)
    },
    filter(e, i) {
        return Y4(this, "filter", e, i, r => r.map(o4), arguments)
    },
    find(e, i) {
        return Y4(this, "find", e, i, o4, arguments)
    },
    findIndex(e, i) {
        return Y4(this, "findIndex", e, i, void 0, arguments)
    },
    findLast(e, i) {
        return Y4(this, "findLast", e, i, o4, arguments)
    },
    findLastIndex(e, i) {
        return Y4(this, "findLastIndex", e, i, void 0, arguments)
    },
    forEach(e, i) {
        return Y4(this, "forEach", e, i, void 0, arguments)
    },
    includes(...e) {
        return lt(this, "includes", e)
    },
    indexOf(...e) {
        return lt(this, "indexOf", e)
    },
    join(e) {
        return Z2(this).join(e)
    },
    lastIndexOf(...e) {
        return lt(this, "lastIndexOf", e)
    },
    map(e, i) {
        return Y4(this, "map", e, i, void 0, arguments)
    },
    pop() {
        return f3(this, "pop")
    },
    push(...e) {
        return f3(this, "push", e)
    },
    reduce(e, ...i) {
        return o6(this, "reduce", e, i)
    },
    reduceRight(e, ...i) {
        return o6(this, "reduceRight", e, i)
    },
    shift() {
        return f3(this, "shift")
    },
    some(e, i) {
        return Y4(this, "some", e, i, void 0, arguments)
    },
    splice(...e) {
        return f3(this, "splice", e)
    },
    toReversed() {
        return Z2(this).toReversed()
    },
    toSorted(e) {
        return Z2(this).toSorted(e)
    },
    toSpliced(...e) {
        return Z2(this).toSpliced(...e)
    },
    unshift(...e) {
        return f3(this, "unshift", e)
    },
    values() {
        return at(this, "values", o4)
    }
};

function at(e, i, r) {
    const a = w5(e),
        l = a[i]();
    return a !== e && !E4(e) && (l._next = l.next, l.next = () => {
        const c = l._next();
        return c.value && (c.value = r(c.value)), c
    }), l
}
const a0 = Array.prototype;

function Y4(e, i, r, a, l, c) {
    const d = w5(e),
        p = d !== e && !E4(e),
        f = d[i];
    if (f !== a0[i]) {
        const _ = f.apply(e, c);
        return p ? o4(_) : _
    }
    let m = r;
    d !== e && (p ? m = function (_, x) {
        return r.call(this, o4(_), x, e)
    } : r.length > 2 && (m = function (_, x) {
        return r.call(this, _, x, e)
    }));
    const g = f.call(d, m, a);
    return p && l ? l(g) : g
}

function o6(e, i, r, a) {
    const l = w5(e);
    let c = r;
    return l !== e && (E4(e) ? r.length > 3 && (c = function (d, p, f) {
        return r.call(this, d, p, f, e)
    }) : c = function (d, p, f) {
        return r.call(this, d, o4(p), f, e)
    }), l[i](c, ...a)
}

function lt(e, i, r) {
    const a = O1(e);
    i4(a, "iterate", E3);
    const l = a[i](...r);
    return (l === -1 || l === !1) && jt(r[0]) ? (r[0] = O1(r[0]), a[i](...r)) : l
}

function f3(e, i, r = []) {
    m2(), Gt();
    const a = O1(e)[i].apply(e, r);
    return zt(), g2(), a
}
const l0 = Rt("__proto__,__v_isRef,__isVue"),
    y7 = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(p2));

function u0(e) {
    p2(e) || (e = String(e));
    const i = O1(this);
    return i4(i, "has", e), i.hasOwnProperty(e)
}
class _7 {
    constructor(i = !1, r = !1) {
        this._isReadonly = i, this._isShallow = r
    }
    get(i, r, a) {
        if (r === "__v_skip") return i.__v_skip;
        const l = this._isReadonly,
            c = this._isShallow;
        if (r === "__v_isReactive") return !l;
        if (r === "__v_isReadonly") return l;
        if (r === "__v_isShallow") return c;
        if (r === "__v_raw") return a === (l ? c ? v0 : w7 : c ? b7 : x7).get(i) || Object.getPrototypeOf(i) === Object.getPrototypeOf(a) ? i : void 0;
        const d = m1(i);
        if (!l) {
            let f;
            if (d && (f = s0[r])) return f;
            if (r === "hasOwnProperty") return u0
        }
        const p = Reflect.get(i, r, s4(i) ? i : a);
        return (p2(r) ? y7.has(r) : l0(r)) || (l || i4(i, "get", r), c) ? p : s4(p) ? d && Bt(r) ? p : p.value : U1(p) ? l ? M7(p) : W4(p) : p
    }
}
class v7 extends _7 {
    constructor(i = !1) {
        super(!1, i)
    }
    set(i, r, a, l) {
        let c = i[r];
        if (!this._isShallow) {
            const f = E2(c);
            if (!E4(a) && !E2(a) && (c = O1(c), a = O1(a)), !m1(i) && s4(c) && !s4(a)) return f ? !1 : (c.value = a, !0)
        }
        const d = m1(i) && Bt(r) ? Number(r) < i.length : R1(i, r),
            p = Reflect.set(i, r, a, s4(i) ? i : l);
        return i === O1(l) && (d ? f2(a, c) && t2(i, "set", r, a) : t2(i, "add", r, a)), p
    }
    deleteProperty(i, r) {
        const a = R1(i, r);
        i[r];
        const l = Reflect.deleteProperty(i, r);
        return l && a && t2(i, "delete", r, void 0), l
    }
    has(i, r) {
        const a = Reflect.has(i, r);
        return (!p2(r) || !y7.has(r)) && i4(i, "has", r), a
    }
    ownKeys(i) {
        return i4(i, "iterate", m1(i) ? "length" : T2), Reflect.ownKeys(i)
    }
}
class c0 extends _7 {
    constructor(i = !1) {
        super(!0, i)
    }
    set(i, r) {
        return !0
    }
    deleteProperty(i, r) {
        return !0
    }
}
const d0 = new v7,
    h0 = new c0,
    f0 = new v7(!0);
const bt = e => e,
    t5 = e => Reflect.getPrototypeOf(e);

function p0(e, i, r) {
    return function (...a) {
        const l = this.__v_raw,
            c = O1(l),
            d = K2(c),
            p = e === "entries" || e === Symbol.iterator && d,
            f = e === "keys" && d,
            m = l[e](...a),
            g = r ? bt : i ? wt : o4;
        return !i && i4(c, "iterate", f ? xt : T2), {
            next() {
                const {
                    value: _,
                    done: x
                } = m.next();
                return x ? {
                    value: _,
                    done: x
                } : {
                    value: p ? [g(_[0]), g(_[1])] : g(_),
                    done: x
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}

function e5(e) {
    return function (...i) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}

function m0(e, i) {
    const r = {
        get(l) {
            const c = this.__v_raw,
                d = O1(c),
                p = O1(l);
            e || (f2(l, p) && i4(d, "get", l), i4(d, "get", p));
            const {
                has: f
            } = t5(d), m = i ? bt : e ? wt : o4;
            if (f.call(d, l)) return m(c.get(l));
            if (f.call(d, p)) return m(c.get(p));
            c !== d && c.get(l)
        },
        get size() {
            const l = this.__v_raw;
            return !e && i4(O1(l), "iterate", T2), Reflect.get(l, "size", l)
        },
        has(l) {
            const c = this.__v_raw,
                d = O1(c),
                p = O1(l);
            return e || (f2(l, p) && i4(d, "has", l), i4(d, "has", p)), l === p ? c.has(l) : c.has(l) || c.has(p)
        },
        forEach(l, c) {
            const d = this,
                p = d.__v_raw,
                f = O1(p),
                m = i ? bt : e ? wt : o4;
            return !e && i4(f, "iterate", T2), p.forEach((g, _) => l.call(c, m(g), m(_), d))
        }
    };
    return a4(r, e ? {
        add: e5("add"),
        set: e5("set"),
        delete: e5("delete"),
        clear: e5("clear")
    } : {
        add(l) {
            !i && !E4(l) && !E2(l) && (l = O1(l));
            const c = O1(this);
            return t5(c).has.call(c, l) || (c.add(l), t2(c, "add", l, l)), this
        },
        set(l, c) {
            !i && !E4(c) && !E2(c) && (c = O1(c));
            const d = O1(this),
                {
                    has: p,
                    get: f
                } = t5(d);
            let m = p.call(d, l);
            m || (l = O1(l), m = p.call(d, l));
            const g = f.call(d, l);
            return d.set(l, c), m ? f2(c, g) && t2(d, "set", l, c) : t2(d, "add", l, c), this
        },
        delete(l) {
            const c = O1(this),
                {
                    has: d,
                    get: p
                } = t5(c);
            let f = d.call(c, l);
            f || (l = O1(l), f = d.call(c, l)), p && p.call(c, l);
            const m = c.delete(l);
            return f && t2(c, "delete", l, void 0), m
        },
        clear() {
            const l = O1(this),
                c = l.size !== 0,
                d = l.clear();
            return c && t2(l, "clear", void 0, void 0), d
        }
    }), ["keys", "values", "entries", Symbol.iterator].forEach(l => {
        r[l] = p0(l, e, i)
    }), r
}

function Ut(e, i) {
    const r = m0(e, i);
    return (a, l, c) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(R1(r, l) && l in a ? r : a, l, c)
}
const g0 = {
    get: Ut(!1, !1)
},
    y0 = {
        get: Ut(!1, !0)
    },
    _0 = {
        get: Ut(!0, !1)
    };
const x7 = new WeakMap,
    b7 = new WeakMap,
    w7 = new WeakMap,
    v0 = new WeakMap;

function x0(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}

function b0(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : x0(K8(e))
}

function W4(e) {
    return E2(e) ? e : $t(e, !1, d0, g0, x7)
}

function P7(e) {
    return $t(e, !1, f0, y0, b7)
}

function M7(e) {
    return $t(e, !0, h0, _0, w7)
}

function $t(e, i, r, a, l) {
    if (!U1(e) || e.__v_raw && !(i && e.__v_isReactive)) return e;
    const c = l.get(e);
    if (c) return c;
    const d = b0(e);
    if (d === 0) return e;
    const p = new Proxy(e, d === 2 ? a : r);
    return l.set(e, p), p
}

function V2(e) {
    return E2(e) ? V2(e.__v_raw) : !!(e && e.__v_isReactive)
}

function E2(e) {
    return !!(e && e.__v_isReadonly)
}

function E4(e) {
    return !!(e && e.__v_isShallow)
}

function jt(e) {
    return e ? !!e.__v_raw : !1
}

function O1(e) {
    const i = e && e.__v_raw;
    return i ? O1(i) : e
}

function w0(e) {
    return !R1(e, "__v_skip") && Object.isExtensible(e) && r7(e, "__v_skip", !0), e
}
const o4 = e => U1(e) ? W4(e) : e,
    wt = e => U1(e) ? M7(e) : e;

function s4(e) {
    return e ? e.__v_isRef === !0 : !1
}

function o1(e) {
    return S7(e, !1)
}

function P0(e) {
    return S7(e, !0)
}

function S7(e, i) {
    return s4(e) ? e : new M0(e, i)
}
class M0 {
    constructor(i, r) {
        this.dep = new Ht, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? i : O1(i), this._value = r ? i : o4(i), this.__v_isShallow = r
    }
    get value() {
        return this.dep.track(), this._value
    }
    set value(i) {
        const r = this._rawValue,
            a = this.__v_isShallow || E4(i) || E2(i);
        i = a ? i : O1(i), f2(i, r) && (this._rawValue = i, this._value = a ? i : o4(i), this.dep.trigger())
    }
}

function h1(e) {
    return s4(e) ? e.value : e
}
const S0 = {
    get: (e, i, r) => i === "__v_raw" ? e : h1(Reflect.get(e, i, r)),
    set: (e, i, r, a) => {
        const l = e[i];
        return s4(l) && !s4(r) ? (l.value = r, !0) : Reflect.set(e, i, r, a)
    }
};

function T7(e) {
    return V2(e) ? e : new Proxy(e, S0)
}
class T0 {
    constructor(i, r, a) {
        this.fn = i, this.setter = r, this._value = void 0, this.dep = new Ht(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = T3 - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = a
    }
    notify() {
        if (this.flags |= 16, !(this.flags & 8) && H1 !== this) return d7(this, !0), !0
    }
    get value() {
        const i = this.dep.track();
        return p7(this), i && (i.version = this.dep.version), this._value
    }
    set value(i) {
        this.setter && this.setter(i)
    }
}

function E0(e, i, r = !1) {
    let a, l;
    return g1(e) ? a = e : (a = e.get, l = e.set), new T0(a, l, r)
}
const n5 = {},
    l5 = new WeakMap;
let S2;

function L0(e, i = !1, r = S2) {
    if (r) {
        let a = l5.get(r);
        a || l5.set(r, a = []), a.push(e)
    }
}

function C0(e, i, r = B1) {
    const {
        immediate: a,
        deep: l,
        once: c,
        scheduler: d,
        augmentJob: p,
        call: f
    } = r, m = j => l ? j : E4(j) || l === !1 || l === 0 ? e2(j, 1) : e2(j);
    let g, _, x, P, E = !1,
        C = !1;
    if (s4(e) ? (_ = () => e.value, E = E4(e)) : V2(e) ? (_ = () => m(e), E = !0) : m1(e) ? (C = !0, E = e.some(j => V2(j) || E4(j)), _ = () => e.map(j => {
        if (s4(j)) return j.value;
        if (V2(j)) return m(j);
        if (g1(j)) return f ? f(j, 2) : j()
    })) : g1(e) ? i ? _ = f ? () => f(e, 2) : e : _ = () => {
        if (x) {
            m2();
            try {
                x()
            } finally {
                g2()
            }
        }
        const j = S2;
        S2 = g;
        try {
            return f ? f(e, 3, [P]) : e(P)
        } finally {
            S2 = j
        }
    } : _ = U4, i && l) {
        const j = _,
            l1 = l === !0 ? 1 / 0 : l;
        _ = () => e2(j(), l1)
    }
    const G = i0(),
        K = () => {
            g.stop(), G && G.active && Nt(G.effects, g)
        };
    if (c && i) {
        const j = i;
        i = (...l1) => {
            j(...l1), K()
        }
    }
    let z = C ? new Array(e.length).fill(n5) : n5;
    const Z = j => {
        if (!(!(g.flags & 1) || !g.dirty && !j))
            if (i) {
                const l1 = g.run();
                if (l || E || (C ? l1.some((e1, r1) => f2(e1, z[r1])) : f2(l1, z))) {
                    x && x();
                    const e1 = S2;
                    S2 = g;
                    try {
                        const r1 = [l1, z === n5 ? void 0 : C && z[0] === n5 ? [] : z, P];
                        f ? f(i, 3, r1) : i(...r1), z = l1
                    } finally {
                        S2 = e1
                    }
                }
            } else g.run()
    };
    return p && p(Z), g = new u7(_), g.scheduler = d ? () => d(Z, !1) : Z, P = j => L0(j, !1, g), x = g.onStop = () => {
        const j = l5.get(g);
        if (j) {
            if (f) f(j, 4);
            else
                for (const l1 of j) l1();
            l5.delete(g)
        }
    }, i ? a ? Z(!0) : z = g.run() : d ? d(Z.bind(null, !0), !0) : g.run(), K.pause = g.pause.bind(g), K.resume = g.resume.bind(g), K.stop = K, K
}

function e2(e, i = 1 / 0, r) {
    if (i <= 0 || !U1(e) || e.__v_skip || (r = r || new Set, r.has(e))) return e;
    if (r.add(e), i--, s4(e)) e2(e.value, i, r);
    else if (m1(e))
        for (let a = 0; a < e.length; a++) e2(e[a], i, r);
    else if (e7(e) || K2(e)) e.forEach(a => {
        e2(a, i, r)
    });
    else if (o7(e)) {
        for (const a in e) e2(e[a], i, r);
        for (const a of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, a) && e2(e[a], i, r)
    }
    return e
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function F3(e, i, r, a) {
    try {
        return a ? e(...a) : e()
    } catch (l) {
        P5(l, i, r)
    }
}

function j4(e, i, r, a) {
    if (g1(e)) {
        const l = F3(e, i, r, a);
        return l && n7(l) && l.catch(c => {
            P5(c, i, r)
        }), l
    }
    if (m1(e)) {
        const l = [];
        for (let c = 0; c < e.length; c++) l.push(j4(e[c], i, r, a));
        return l
    }
}

function P5(e, i, r, a = !0) {
    const l = i ? i.vnode : null,
        {
            errorHandler: c,
            throwUnhandledErrorInProduction: d
        } = i && i.appContext.config || B1;
    if (i) {
        let p = i.parent;
        const f = i.proxy,
            m = `https://vuejs.org/error-reference/#runtime-${r}`;
        for (; p;) {
            const g = p.ec;
            if (g) {
                for (let _ = 0; _ < g.length; _++)
                    if (g[_](e, f, m) === !1) return
            }
            p = p.parent
        }
        if (c) {
            m2(), F3(c, null, 10, [e, f, m]), g2();
            return
        }
    }
    I0(e, r, l, a, d)
}

function I0(e, i, r, a = !0, l = !1) {
    if (l) throw e;
    console.error(e)
}
const d4 = [];
let z4 = -1;
const q2 = [];
let c2 = null,
    H2 = 0;
const E7 = Promise.resolve();
let u5 = null;

function Wt(e) {
    const i = u5 || E7;
    return e ? i.then(this ? e.bind(this) : e) : i
}

function k0(e) {
    let i = z4 + 1,
        r = d4.length;
    for (; i < r;) {
        const a = i + r >>> 1,
            l = d4[a],
            c = L3(l);
        c < e || c === e && l.flags & 2 ? i = a + 1 : r = a
    }
    return i
}

function Kt(e) {
    if (!(e.flags & 1)) {
        const i = L3(e),
            r = d4[d4.length - 1];
        !r || !(e.flags & 2) && i >= L3(r) ? d4.push(e) : d4.splice(k0(i), 0, e), e.flags |= 1, L7()
    }
}

function L7() {
    u5 || (u5 = E7.then(I7))
}

function A0(e) {
    m1(e) ? q2.push(...e) : c2 && e.id === -1 ? c2.splice(H2 + 1, 0, e) : e.flags & 1 || (q2.push(e), e.flags |= 1), L7()
}

function r6(e, i, r = z4 + 1) {
    for (; r < d4.length; r++) {
        const a = d4[r];
        if (a && a.flags & 2) {
            if (e && a.id !== e.uid) continue;
            d4.splice(r, 1), r--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2)
        }
    }
}

function C7(e) {
    if (q2.length) {
        const i = [...new Set(q2)].sort((r, a) => L3(r) - L3(a));
        if (q2.length = 0, c2) {
            c2.push(...i);
            return
        }
        for (c2 = i, H2 = 0; H2 < c2.length; H2++) {
            const r = c2[H2];
            r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2
        }
        c2 = null, H2 = 0
    }
}
const L3 = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;

function I7(e) {
    try {
        for (z4 = 0; z4 < d4.length; z4++) {
            const i = d4[z4];
            i && !(i.flags & 8) && (i.flags & 4 && (i.flags &= -2), F3(i, i.i, i.i ? 15 : 14), i.flags & 4 || (i.flags &= -2))
        }
    } finally {
        for (; z4 < d4.length; z4++) {
            const i = d4[z4];
            i && (i.flags &= -2)
        }
        z4 = -1, d4.length = 0, C7(), u5 = null, (d4.length || q2.length) && I7()
    }
}
let _4 = null,
    k7 = null;

function c5(e) {
    const i = _4;
    return _4 = e, k7 = e && e.type.__scopeId || null, i
}

function F0(e, i = _4, r) {
    if (!i || e._n) return e;
    const a = (...l) => {
        a._d && m6(-1);
        const c = c5(i);
        let d;
        try {
            d = e(...l)
        } finally {
            c5(c), a._d && m6(1)
        }
        return d
    };
    return a._n = !0, a._c = !0, a._d = !0, a
}

function O0(e, i) {
    if (_4 === null) return e;
    const r = E5(_4),
        a = e.dirs || (e.dirs = []);
    for (let l = 0; l < i.length; l++) {
        let [c, d, p, f = B1] = i[l];
        c && (g1(c) && (c = {
            mounted: c,
            updated: c
        }), c.deep && e2(d), a.push({
            dir: c,
            instance: r,
            value: d,
            oldValue: void 0,
            arg: p,
            modifiers: f
        }))
    }
    return e
}

function P2(e, i, r, a) {
    const l = e.dirs,
        c = i && i.dirs;
    for (let d = 0; d < l.length; d++) {
        const p = l[d];
        c && (p.oldValue = c[d].value);
        let f = p.dir[a];
        f && (m2(), j4(f, r, 8, [e.el, p, e, i]), g2())
    }
}
const R0 = Symbol("_vte"),
    D0 = e => e.__isTeleport;

function Vt(e, i) {
    e.shapeFlag & 6 && e.component ? (e.transition = i, Vt(e.component.subTree, i)) : e.shapeFlag & 128 ? (e.ssContent.transition = i.clone(e.ssContent), e.ssFallback.transition = i.clone(e.ssFallback)) : e.transition = i
} /*! #__NO_SIDE_EFFECTS__ */
function qt(e, i) {
    return g1(e) ? a4({
        name: e.name
    }, i, {
        setup: e
    }) : e
}

function A7(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}

function d5(e, i, r, a, l = !1) {
    if (m1(e)) {
        e.forEach((E, C) => d5(E, i && (m1(i) ? i[C] : i), r, a, l));
        return
    }
    if (b3(a) && !l) {
        a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && d5(e, i, r, a.component.subTree);
        return
    }
    const c = a.shapeFlag & 4 ? E5(a.component) : a.el,
        d = l ? null : c,
        {
            i: p,
            r: f
        } = e,
        m = i && i.r,
        g = p.refs === B1 ? p.refs = {} : p.refs,
        _ = p.setupState,
        x = O1(_),
        P = _ === B1 ? () => !1 : E => R1(x, E);
    if (m != null && m !== f && (J1(m) ? (g[m] = null, P(m) && (_[m] = null)) : s4(m) && (m.value = null)), g1(f)) F3(f, p, 12, [d, g]);
    else {
        const E = J1(f),
            C = s4(f);
        if (E || C) {
            const G = () => {
                if (e.f) {
                    const K = E ? P(f) ? _[f] : g[f] : f.value;
                    l ? m1(K) && Nt(K, c) : m1(K) ? K.includes(c) || K.push(c) : E ? (g[f] = [c], P(f) && (_[f] = g[f])) : (f.value = [c], e.k && (g[e.k] = f.value))
                } else E ? (g[f] = d, P(f) && (_[f] = d)) : C && (f.value = d, e.k && (g[e.k] = d))
            };
            d ? (G.id = -1, m4(G, r)) : G()
        }
    }
}
b5().requestIdleCallback;
b5().cancelIdleCallback;
const b3 = e => !!e.type.__asyncLoader,
    F7 = e => e.type.__isKeepAlive;

function N0(e, i) {
    O7(e, "a", i)
}

function B0(e, i) {
    O7(e, "da", i)
}

function O7(e, i, r = r4) {
    const a = e.__wdc || (e.__wdc = () => {
        let l = r;
        for (; l;) {
            if (l.isDeactivated) return;
            l = l.parent
        }
        return e()
    });
    if (M5(i, a, r), r) {
        let l = r.parent;
        for (; l && l.parent;) F7(l.parent.vnode) && G0(a, i, r, l), l = l.parent
    }
}

function G0(e, i, r, a) {
    const l = M5(i, e, a, !0);
    O3(() => {
        Nt(a[i], l)
    }, r)
}

function M5(e, i, r = r4, a = !1) {
    if (r) {
        const l = r[e] || (r[e] = []),
            c = i.__weh || (i.__weh = (...d) => {
                m2();
                const p = R3(r),
                    f = j4(i, r, e, d);
                return p(), g2(), f
            });
        return a ? l.unshift(c) : l.push(c), c
    }
}
const i2 = e => (i, r = r4) => {
    (!I3 || e === "sp") && M5(e, (...a) => i(...a), r)
},
    z0 = i2("bm"),
    O4 = i2("m"),
    Z0 = i2("bu"),
    H0 = i2("u"),
    Jt = i2("bum"),
    O3 = i2("um"),
    U0 = i2("sp"),
    $0 = i2("rtg"),
    j0 = i2("rtc");

function W0(e, i = r4) {
    M5("ec", e, i)
}
const K0 = "components";

function V0(e, i) {
    return J0(K0, e, !0, i) || e
}
const q0 = Symbol.for("v-ndc");

function J0(e, i, r = !0, a = !1) {
    const l = _4 || r4;
    if (l) {
        const c = l.type; {
            const p = Nn(c, !1);
            if (p && (p === i || p === L4(i) || p === x5(L4(i)))) return c
        }
        const d = s6(l[e] || c[e], i) || s6(l.appContext[e], i);
        return !d && a ? c : d
    }
}

function s6(e, i) {
    return e && (e[i] || e[L4(i)] || e[x5(L4(i))])
}

function Pt(e, i, r, a) {
    let l;
    const c = r,
        d = m1(e);
    if (d || J1(e)) {
        const p = d && V2(e);
        let f = !1;
        p && (f = !E4(e), e = w5(e)), l = new Array(e.length);
        for (let m = 0, g = e.length; m < g; m++) l[m] = i(f ? o4(e[m]) : e[m], m, void 0, c)
    } else if (typeof e == "number") {
        l = new Array(e);
        for (let p = 0; p < e; p++) l[p] = i(p + 1, p, void 0, c)
    } else if (U1(e))
        if (e[Symbol.iterator]) l = Array.from(e, (p, f) => i(p, f, void 0, c));
        else {
            const p = Object.keys(e);
            l = new Array(p.length);
            for (let f = 0, m = p.length; f < m; f++) {
                const g = p[f];
                l[f] = i(e[g], g, f, c)
            }
        }
    else l = [];
    return l
}
const Mt = e => e ? i9(e) ? E5(e) : Mt(e.parent) : null,
    w3 = a4(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => Mt(e.parent),
        $root: e => Mt(e.root),
        $host: e => e.ce,
        $emit: e => e.emit,
        $options: e => D7(e),
        $forceUpdate: e => e.f || (e.f = () => {
            Kt(e.update)
        }),
        $nextTick: e => e.n || (e.n = Wt.bind(e.proxy)),
        $watch: e => _n.bind(e)
    }),
    ut = (e, i) => e !== B1 && !e.__isScriptSetup && R1(e, i),
    Y0 = {
        get({
            _: e
        }, i) {
            if (i === "__v_skip") return !0;
            const {
                ctx: r,
                setupState: a,
                data: l,
                props: c,
                accessCache: d,
                type: p,
                appContext: f
            } = e;
            let m;
            if (i[0] !== "$") {
                const P = d[i];
                if (P !== void 0) switch (P) {
                    case 1:
                        return a[i];
                    case 2:
                        return l[i];
                    case 4:
                        return r[i];
                    case 3:
                        return c[i]
                } else {
                    if (ut(a, i)) return d[i] = 1, a[i];
                    if (l !== B1 && R1(l, i)) return d[i] = 2, l[i];
                    if ((m = e.propsOptions[0]) && R1(m, i)) return d[i] = 3, c[i];
                    if (r !== B1 && R1(r, i)) return d[i] = 4, r[i];
                    St && (d[i] = 0)
                }
            }
            const g = w3[i];
            let _, x;
            if (g) return i === "$attrs" && i4(e.attrs, "get", ""), g(e);
            if ((_ = p.__cssModules) && (_ = _[i])) return _;
            if (r !== B1 && R1(r, i)) return d[i] = 4, r[i];
            if (x = f.config.globalProperties, R1(x, i)) return x[i]
        },
        set({
            _: e
        }, i, r) {
            const {
                data: a,
                setupState: l,
                ctx: c
            } = e;
            return ut(l, i) ? (l[i] = r, !0) : a !== B1 && R1(a, i) ? (a[i] = r, !0) : R1(e.props, i) || i[0] === "$" && i.slice(1) in e ? !1 : (c[i] = r, !0)
        },
        has({
            _: {
                data: e,
                setupState: i,
                accessCache: r,
                ctx: a,
                appContext: l,
                propsOptions: c
            }
        }, d) {
            let p;
            return !!r[d] || e !== B1 && R1(e, d) || ut(i, d) || (p = c[0]) && R1(p, d) || R1(a, d) || R1(w3, d) || R1(l.config.globalProperties, d)
        },
        defineProperty(e, i, r) {
            return r.get != null ? e._.accessCache[i] = 0 : R1(r, "value") && this.set(e, i, r.value, null), Reflect.defineProperty(e, i, r)
        }
    };

function a6(e) {
    return m1(e) ? e.reduce((i, r) => (i[r] = null, i), {}) : e
}
let St = !0;

function X0(e) {
    const i = D7(e),
        r = e.proxy,
        a = e.ctx;
    St = !1, i.beforeCreate && l6(i.beforeCreate, e, "bc");
    const {
        data: l,
        computed: c,
        methods: d,
        watch: p,
        provide: f,
        inject: m,
        created: g,
        beforeMount: _,
        mounted: x,
        beforeUpdate: P,
        updated: E,
        activated: C,
        deactivated: G,
        beforeDestroy: K,
        beforeUnmount: z,
        destroyed: Z,
        unmounted: j,
        render: l1,
        renderTracked: e1,
        renderTriggered: r1,
        errorCaptured: f1,
        serverPrefetch: N1,
        expose: $1,
        inheritAttrs: v1,
        components: T1,
        directives: K1,
        filters: Y1
    } = i;
    if (m && Q0(m, a, null), d)
        for (const Y in d) {
            const k = d[Y];
            g1(k) && (a[Y] = k.bind(r))
        }
    if (l) {
        const Y = l.call(r, r);
        U1(Y) && (e.data = W4(Y))
    }
    if (St = !0, c)
        for (const Y in c) {
            const k = c[Y],
                z1 = g1(k) ? k.bind(r, r) : g1(k.get) ? k.get.bind(r, r) : U4,
                J = !g1(k) && g1(k.set) ? k.set.bind(r) : U4,
                y1 = h4({
                    get: z1,
                    set: J
                });
            Object.defineProperty(a, Y, {
                enumerable: !0,
                configurable: !0,
                get: () => y1.value,
                set: b1 => y1.value = b1
            })
        }
    if (p)
        for (const Y in p) R7(p[Y], a, r, Y);
    if (f) {
        const Y = g1(f) ? f.call(r) : f;
        Reflect.ownKeys(Y).forEach(k => {
            o5(k, Y[k])
        })
    }
    g && l6(g, e, "c");

    function M1(Y, k) {
        m1(k) ? k.forEach(z1 => Y(z1.bind(r))) : k && Y(k.bind(r))
    }
    if (M1(z0, _), M1(O4, x), M1(Z0, P), M1(H0, E), M1(N0, C), M1(B0, G), M1(W0, f1), M1(j0, e1), M1($0, r1), M1(Jt, z), M1(O3, j), M1(U0, N1), m1($1))
        if ($1.length) {
            const Y = e.exposed || (e.exposed = {});
            $1.forEach(k => {
                Object.defineProperty(Y, k, {
                    get: () => r[k],
                    set: z1 => r[k] = z1
                })
            })
        } else e.exposed || (e.exposed = {});
    l1 && e.render === U4 && (e.render = l1), v1 != null && (e.inheritAttrs = v1), T1 && (e.components = T1), K1 && (e.directives = K1), N1 && A7(e)
}

function Q0(e, i, r = U4) {
    m1(e) && (e = Tt(e));
    for (const a in e) {
        const l = e[a];
        let c;
        U1(l) ? "default" in l ? c = A4(l.from || a, l.default, !0) : c = A4(l.from || a) : c = A4(l), s4(c) ? Object.defineProperty(i, a, {
            enumerable: !0,
            configurable: !0,
            get: () => c.value,
            set: d => c.value = d
        }) : i[a] = c
    }
}

function l6(e, i, r) {
    j4(m1(e) ? e.map(a => a.bind(i.proxy)) : e.bind(i.proxy), i, r)
}

function R7(e, i, r, a) {
    let l = a.includes(".") ? J7(r, a) : () => r[a];
    if (J1(e)) {
        const c = i[e];
        g1(c) && n2(l, c)
    } else if (g1(e)) n2(l, e.bind(r));
    else if (U1(e))
        if (m1(e)) e.forEach(c => R7(c, i, r, a));
        else {
            const c = g1(e.handler) ? e.handler.bind(r) : i[e.handler];
            g1(c) && n2(l, c, e)
        }
}

function D7(e) {
    const i = e.type,
        {
            mixins: r,
            extends: a
        } = i,
        {
            mixins: l,
            optionsCache: c,
            config: {
                optionMergeStrategies: d
            }
        } = e.appContext,
        p = c.get(i);
    let f;
    return p ? f = p : !l.length && !r && !a ? f = i : (f = {}, l.length && l.forEach(m => h5(f, m, d, !0)), h5(f, i, d)), U1(i) && c.set(i, f), f
}

function h5(e, i, r, a = !1) {
    const {
        mixins: l,
        extends: c
    } = i;
    c && h5(e, c, r, !0), l && l.forEach(d => h5(e, d, r, !0));
    for (const d in i)
        if (!(a && d === "expose")) {
            const p = tn[d] || r && r[d];
            e[d] = p ? p(e[d], i[d]) : i[d]
        }
    return e
}
const tn = {
    data: u6,
    props: c6,
    emits: c6,
    methods: g3,
    computed: g3,
    beforeCreate: c4,
    created: c4,
    beforeMount: c4,
    mounted: c4,
    beforeUpdate: c4,
    updated: c4,
    beforeDestroy: c4,
    beforeUnmount: c4,
    destroyed: c4,
    unmounted: c4,
    activated: c4,
    deactivated: c4,
    errorCaptured: c4,
    serverPrefetch: c4,
    components: g3,
    directives: g3,
    watch: nn,
    provide: u6,
    inject: en
};

function u6(e, i) {
    return i ? e ? function () {
        return a4(g1(e) ? e.call(this, this) : e, g1(i) ? i.call(this, this) : i)
    } : i : e
}

function en(e, i) {
    return g3(Tt(e), Tt(i))
}

function Tt(e) {
    if (m1(e)) {
        const i = {};
        for (let r = 0; r < e.length; r++) i[e[r]] = e[r];
        return i
    }
    return e
}

function c4(e, i) {
    return e ? [...new Set([].concat(e, i))] : i
}

function g3(e, i) {
    return e ? a4(Object.create(null), e, i) : i
}

function c6(e, i) {
    return e ? m1(e) && m1(i) ? [...new Set([...e, ...i])] : a4(Object.create(null), a6(e), a6(i ? ? {})) : i
}

function nn(e, i) {
    if (!e) return i;
    if (!i) return e;
    const r = a4(Object.create(null), e);
    for (const a in i) r[a] = c4(e[a], i[a]);
    return r
}

function N7() {
    return {
        app: null,
        config: {
            isNativeTag: j8,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let on = 0;

function rn(e, i) {
    return function (a, l = null) {
        g1(a) || (a = a4({}, a)), l != null && !U1(l) && (l = null);
        const c = N7(),
            d = new WeakSet,
            p = [];
        let f = !1;
        const m = c.app = {
            _uid: on++,
            _component: a,
            _props: l,
            _container: null,
            _context: c,
            _instance: null,
            version: Gn,
            get config() {
                return c.config
            },
            set config(g) { },
            use(g, ..._) {
                return d.has(g) || (g && g1(g.install) ? (d.add(g), g.install(m, ..._)) : g1(g) && (d.add(g), g(m, ..._))), m
            },
            mixin(g) {
                return c.mixins.includes(g) || c.mixins.push(g), m
            },
            component(g, _) {
                return _ ? (c.components[g] = _, m) : c.components[g]
            },
            directive(g, _) {
                return _ ? (c.directives[g] = _, m) : c.directives[g]
            },
            mount(g, _, x) {
                if (!f) {
                    const P = m._ceVNode || G1(a, l);
                    return P.appContext = c, x === !0 ? x = "svg" : x === !1 && (x = void 0), e(P, g, x), f = !0, m._container = g, g.__vue_app__ = m, E5(P.component)
                }
            },
            onUnmount(g) {
                p.push(g)
            },
            unmount() {
                f && (j4(p, m._instance, 16), e(null, m._container), delete m._container.__vue_app__)
            },
            provide(g, _) {
                return c.provides[g] = _, m
            },
            runWithContext(g) {
                const _ = J2;
                J2 = m;
                try {
                    return g()
                } finally {
                    J2 = _
                }
            }
        };
        return m
    }
}
let J2 = null;

function o5(e, i) {
    if (r4) {
        let r = r4.provides;
        const a = r4.parent && r4.parent.provides;
        a === r && (r = r4.provides = Object.create(a)), r[e] = i
    }
}

function A4(e, i, r = !1) {
    const a = r4 || _4;
    if (a || J2) {
        const l = J2 ? J2._context.provides : a ? a.parent == null ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
        if (l && e in l) return l[e];
        if (arguments.length > 1) return r && g1(i) ? i.call(a && a.proxy) : i
    }
}
const B7 = {},
    G7 = () => Object.create(B7),
    z7 = e => Object.getPrototypeOf(e) === B7;

function sn(e, i, r, a = !1) {
    const l = {},
        c = G7();
    e.propsDefaults = Object.create(null), Z7(e, i, l, c);
    for (const d in e.propsOptions[0]) d in l || (l[d] = void 0);
    r ? e.props = a ? l : P7(l) : e.type.props ? e.props = l : e.props = c, e.attrs = c
}

function an(e, i, r, a) {
    const {
        props: l,
        attrs: c,
        vnode: {
            patchFlag: d
        }
    } = e, p = O1(l), [f] = e.propsOptions;
    let m = !1;
    if ((a || d > 0) && !(d & 16)) {
        if (d & 8) {
            const g = e.vnode.dynamicProps;
            for (let _ = 0; _ < g.length; _++) {
                let x = g[_];
                if (S5(e.emitsOptions, x)) continue;
                const P = i[x];
                if (f)
                    if (R1(c, x)) P !== c[x] && (c[x] = P, m = !0);
                    else {
                        const E = L4(x);
                        l[E] = Et(f, p, E, P, e, !1)
                    }
                else P !== c[x] && (c[x] = P, m = !0)
            }
        }
    } else {
        Z7(e, i, l, c) && (m = !0);
        let g;
        for (const _ in p) (!i || !R1(i, _) && ((g = C2(_)) === _ || !R1(i, g))) && (f ? r && (r[_] !== void 0 || r[g] !== void 0) && (l[_] = Et(f, p, _, void 0, e, !0)) : delete l[_]);
        if (c !== p)
            for (const _ in c) (!i || !R1(i, _)) && (delete c[_], m = !0)
    }
    m && t2(e.attrs, "set", "")
}

function Z7(e, i, r, a) {
    const [l, c] = e.propsOptions;
    let d = !1,
        p;
    if (i)
        for (let f in i) {
            if (_3(f)) continue;
            const m = i[f];
            let g;
            l && R1(l, g = L4(f)) ? !c || !c.includes(g) ? r[g] = m : (p || (p = {}))[g] = m : S5(e.emitsOptions, f) || (!(f in a) || m !== a[f]) && (a[f] = m, d = !0)
        }
    if (c) {
        const f = O1(r),
            m = p || B1;
        for (let g = 0; g < c.length; g++) {
            const _ = c[g];
            r[_] = Et(l, f, _, m[_], e, !R1(m, _))
        }
    }
    return d
}

function Et(e, i, r, a, l, c) {
    const d = e[r];
    if (d != null) {
        const p = R1(d, "default");
        if (p && a === void 0) {
            const f = d.default;
            if (d.type !== Function && !d.skipFactory && g1(f)) {
                const {
                    propsDefaults: m
                } = l;
                if (r in m) a = m[r];
                else {
                    const g = R3(l);
                    a = m[r] = f.call(null, i), g()
                }
            } else a = f;
            l.ce && l.ce._setProp(r, a)
        }
        d[0] && (c && !p ? a = !1 : d[1] && (a === "" || a === C2(r)) && (a = !0))
    }
    return a
}
const ln = new WeakMap;

function H7(e, i, r = !1) {
    const a = r ? ln : i.propsCache,
        l = a.get(e);
    if (l) return l;
    const c = e.props,
        d = {},
        p = [];
    let f = !1;
    if (!g1(e)) {
        const g = _ => {
            f = !0;
            const [x, P] = H7(_, i, !0);
            a4(d, x), P && p.push(...P)
        };
        !r && i.mixins.length && i.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g)
    }
    if (!c && !f) return U1(e) && a.set(e, W2), W2;
    if (m1(c))
        for (let g = 0; g < c.length; g++) {
            const _ = L4(c[g]);
            d6(_) && (d[_] = B1)
        } else if (c)
        for (const g in c) {
            const _ = L4(g);
            if (d6(_)) {
                const x = c[g],
                    P = d[_] = m1(x) || g1(x) ? {
                        type: x
                    } : a4({}, x),
                    E = P.type;
                let C = !1,
                    G = !0;
                if (m1(E))
                    for (let K = 0; K < E.length; ++K) {
                        const z = E[K],
                            Z = g1(z) && z.name;
                        if (Z === "Boolean") {
                            C = !0;
                            break
                        } else Z === "String" && (G = !1)
                    } else C = g1(E) && E.name === "Boolean";
                P[0] = C, P[1] = G, (C || R1(P, "default")) && p.push(_)
            }
        }
    const m = [d, p];
    return U1(e) && a.set(e, m), m
}

function d6(e) {
    return e[0] !== "$" && !_3(e)
}
const U7 = e => e[0] === "_" || e === "$stable",
    Yt = e => m1(e) ? e.map(H4) : [H4(e)],
    un = (e, i, r) => {
        if (i._n) return i;
        const a = F0((...l) => Yt(i(...l)), r);
        return a._c = !1, a
    },
    $7 = (e, i, r) => {
        const a = e._ctx;
        for (const l in e) {
            if (U7(l)) continue;
            const c = e[l];
            if (g1(c)) i[l] = un(l, c, a);
            else if (c != null) {
                const d = Yt(c);
                i[l] = () => d
            }
        }
    },
    j7 = (e, i) => {
        const r = Yt(i);
        e.slots.default = () => r
    },
    W7 = (e, i, r) => {
        for (const a in i) (r || a !== "_") && (e[a] = i[a])
    },
    cn = (e, i, r) => {
        const a = e.slots = G7();
        if (e.vnode.shapeFlag & 32) {
            const l = i._;
            l ? (W7(a, i, r), r && r7(a, "_", l, !0)) : $7(i, a)
        } else i && j7(e, i)
    },
    dn = (e, i, r) => {
        const {
            vnode: a,
            slots: l
        } = e;
        let c = !0,
            d = B1;
        if (a.shapeFlag & 32) {
            const p = i._;
            p ? r && p === 1 ? c = !1 : W7(l, i, r) : (c = !i.$stable, $7(i, l)), d = i
        } else i && (j7(e, i), d = {
            default: 1
        });
        if (c)
            for (const p in l) !U7(p) && d[p] == null && delete l[p]
    },
    m4 = Sn;

function hn(e) {
    return fn(e)
}

function fn(e, i) {
    const r = b5();
    r.__VUE__ = !0;
    const {
        insert: a,
        remove: l,
        patchProp: c,
        createElement: d,
        createText: p,
        createComment: f,
        setText: m,
        setElementText: g,
        parentNode: _,
        nextSibling: x,
        setScopeId: P = U4,
        insertStaticContent: E
    } = e, C = (y, v, M, F = null, R = null, O = null, W = void 0, U = null, $ = !!v.dynamicChildren) => {
        if (y === v) return;
        y && !p3(y, v) && (F = A(y), b1(y, R, O, !0), y = null), v.patchFlag === -2 && ($ = !1, v.dynamicChildren = null);
        const {
            type: B,
            ref: a1,
            shapeFlag: V
        } = v;
        switch (B) {
            case T5:
                G(y, v, M, F);
                break;
            case L2:
                K(y, v, M, F);
                break;
            case r5:
                y == null && z(v, M, F, W);
                break;
            case y4:
                T1(y, v, M, F, R, O, W, U, $);
                break;
            default:
                V & 1 ? l1(y, v, M, F, R, O, W, U, $) : V & 6 ? K1(y, v, M, F, R, O, W, U, $) : (V & 64 || V & 128) && B.process(y, v, M, F, R, O, W, U, $, H)
        }
        a1 != null && R && d5(a1, y && y.ref, O, v || y, !v)
    }, G = (y, v, M, F) => {
        if (y == null) a(v.el = p(v.children), M, F);
        else {
            const R = v.el = y.el;
            v.children !== y.children && m(R, v.children)
        }
    }, K = (y, v, M, F) => {
        y == null ? a(v.el = f(v.children || ""), M, F) : v.el = y.el
    }, z = (y, v, M, F) => {
        [y.el, y.anchor] = E(y.children, v, M, F, y.el, y.anchor)
    }, Z = ({
        el: y,
        anchor: v
    }, M, F) => {
        let R;
        for (; y && y !== v;) R = x(y), a(y, M, F), y = R;
        a(v, M, F)
    }, j = ({
        el: y,
        anchor: v
    }) => {
        let M;
        for (; y && y !== v;) M = x(y), l(y), y = M;
        l(v)
    }, l1 = (y, v, M, F, R, O, W, U, $) => {
        v.type === "svg" ? W = "svg" : v.type === "math" && (W = "mathml"), y == null ? e1(v, M, F, R, O, W, U, $) : N1(y, v, R, O, W, U, $)
    }, e1 = (y, v, M, F, R, O, W, U) => {
        let $, B;
        const {
            props: a1,
            shapeFlag: V,
            transition: i1,
            dirs: d1
        } = y;
        if ($ = y.el = d(y.type, O, a1 && a1.is, a1), V & 8 ? g($, y.children) : V & 16 && f1(y.children, $, null, F, R, ct(y, O), W, U), d1 && P2(y, null, F, "created"), r1($, y, y.scopeId, W, F), a1) {
            for (const D1 in a1) D1 !== "value" && !_3(D1) && c($, D1, null, a1[D1], O, F);
            "value" in a1 && c($, "value", null, a1.value, O), (B = a1.onVnodeBeforeMount) && G4(B, F, y)
        }
        d1 && P2(y, null, F, "beforeMount");
        const w1 = pn(R, i1);
        w1 && i1.beforeEnter($), a($, v, M), ((B = a1 && a1.onVnodeMounted) || w1 || d1) && m4(() => {
            B && G4(B, F, y), w1 && i1.enter($), d1 && P2(y, null, F, "mounted")
        }, R)
    }, r1 = (y, v, M, F, R) => {
        if (M && P(y, M), F)
            for (let O = 0; O < F.length; O++) P(y, F[O]);
        if (R) {
            let O = R.subTree;
            if (v === O || X7(O.type) && (O.ssContent === v || O.ssFallback === v)) {
                const W = R.vnode;
                r1(y, W, W.scopeId, W.slotScopeIds, R.parent)
            }
        }
    }, f1 = (y, v, M, F, R, O, W, U, $ = 0) => {
        for (let B = $; B < y.length; B++) {
            const a1 = y[B] = U ? d2(y[B]) : H4(y[B]);
            C(null, a1, v, M, F, R, O, W, U)
        }
    }, N1 = (y, v, M, F, R, O, W) => {
        const U = v.el = y.el;
        let {
            patchFlag: $,
            dynamicChildren: B,
            dirs: a1
        } = v;
        $ |= y.patchFlag & 16;
        const V = y.props || B1,
            i1 = v.props || B1;
        let d1;
        if (M && M2(M, !1), (d1 = i1.onVnodeBeforeUpdate) && G4(d1, M, v, y), a1 && P2(v, y, M, "beforeUpdate"), M && M2(M, !0), (V.innerHTML && i1.innerHTML == null || V.textContent && i1.textContent == null) && g(U, ""), B ? $1(y.dynamicChildren, B, U, M, F, ct(v, R), O) : W || k(y, v, U, null, M, F, ct(v, R), O, !1), $ > 0) {
            if ($ & 16) v1(U, V, i1, M, R);
            else if ($ & 2 && V.class !== i1.class && c(U, "class", null, i1.class, R), $ & 4 && c(U, "style", V.style, i1.style, R), $ & 8) {
                const w1 = v.dynamicProps;
                for (let D1 = 0; D1 < w1.length; D1++) {
                    const C1 = w1[D1],
                        l4 = V[C1],
                        Q1 = i1[C1];
                    (Q1 !== l4 || C1 === "value") && c(U, C1, l4, Q1, R, M)
                }
            }
            $ & 1 && y.children !== v.children && g(U, v.children)
        } else !W && B == null && v1(U, V, i1, M, R);
        ((d1 = i1.onVnodeUpdated) || a1) && m4(() => {
            d1 && G4(d1, M, v, y), a1 && P2(v, y, M, "updated")
        }, F)
    }, $1 = (y, v, M, F, R, O, W) => {
        for (let U = 0; U < v.length; U++) {
            const $ = y[U],
                B = v[U],
                a1 = $.el && ($.type === y4 || !p3($, B) || $.shapeFlag & 70) ? _($.el) : M;
            C($, B, a1, null, F, R, O, W, !0)
        }
    }, v1 = (y, v, M, F, R) => {
        if (v !== M) {
            if (v !== B1)
                for (const O in v) !_3(O) && !(O in M) && c(y, O, v[O], null, R, F);
            for (const O in M) {
                if (_3(O)) continue;
                const W = M[O],
                    U = v[O];
                W !== U && O !== "value" && c(y, O, U, W, R, F)
            }
            "value" in M && c(y, "value", v.value, M.value, R)
        }
    }, T1 = (y, v, M, F, R, O, W, U, $) => {
        const B = v.el = y ? y.el : p(""),
            a1 = v.anchor = y ? y.anchor : p("");
        let {
            patchFlag: V,
            dynamicChildren: i1,
            slotScopeIds: d1
        } = v;
        d1 && (U = U ? U.concat(d1) : d1), y == null ? (a(B, M, F), a(a1, M, F), f1(v.children || [], M, a1, R, O, W, U, $)) : V > 0 && V & 64 && i1 && y.dynamicChildren ? ($1(y.dynamicChildren, i1, M, R, O, W, U), (v.key != null || R && v === R.subTree) && K7(y, v, !0)) : k(y, v, M, a1, R, O, W, U, $)
    }, K1 = (y, v, M, F, R, O, W, U, $) => {
        v.slotScopeIds = U, y == null ? v.shapeFlag & 512 ? R.ctx.activate(v, M, F, W, $) : Y1(v, M, F, R, O, W, $) : x4(y, v, $)
    }, Y1 = (y, v, M, F, R, O, W) => {
        const U = y.component = An(y, F, R);
        if (F7(y) && (U.ctx.renderer = H), Fn(U, !1, W), U.asyncDep) {
            if (R && R.registerDep(U, M1, W), !y.el) {
                const $ = U.subTree = G1(L2);
                K(null, $, v, M)
            }
        } else M1(U, y, v, M, R, O, W)
    }, x4 = (y, v, M) => {
        const F = v.component = y.component;
        if (Pn(y, v, M))
            if (F.asyncDep && !F.asyncResolved) {
                Y(F, v, M);
                return
            } else F.next = v, F.update();
        else v.el = y.el, F.vnode = v
    }, M1 = (y, v, M, F, R, O, W) => {
        const U = () => {
            if (y.isMounted) {
                let {
                    next: V,
                    bu: i1,
                    u: d1,
                    parent: w1,
                    vnode: D1
                } = y; {
                    const b4 = V7(y);
                    if (b4) {
                        V && (V.el = D1.el, Y(y, V, W)), b4.asyncDep.then(() => {
                            y.isUnmounted || U()
                        });
                        return
                    }
                }
                let C1 = V,
                    l4;
                M2(y, !1), V ? (V.el = D1.el, Y(y, V, W)) : V = D1, i1 && i5(i1), (l4 = V.props && V.props.onVnodeBeforeUpdate) && G4(l4, w1, V, D1), M2(y, !0);
                const Q1 = f6(y),
                    p4 = y.subTree;
                y.subTree = Q1, C(p4, Q1, _(p4.el), A(p4), y, R, O), V.el = Q1.el, C1 === null && Mn(y, Q1.el), d1 && m4(d1, R), (l4 = V.props && V.props.onVnodeUpdated) && m4(() => G4(l4, w1, V, D1), R)
            } else {
                let V;
                const {
                    el: i1,
                    props: d1
                } = v, {
                    bm: w1,
                    m: D1,
                    parent: C1,
                    root: l4,
                    type: Q1
                } = y, p4 = b3(v);
                M2(y, !1), w1 && i5(w1), !p4 && (V = d1 && d1.onVnodeBeforeMount) && G4(V, C1, v), M2(y, !0); {
                    l4.ce && l4.ce._injectChildStyle(Q1);
                    const b4 = y.subTree = f6(y);
                    C(null, b4, M, F, y, R, O), v.el = b4.el
                }
                if (D1 && m4(D1, R), !p4 && (V = d1 && d1.onVnodeMounted)) {
                    const b4 = v;
                    m4(() => G4(V, C1, b4), R)
                } (v.shapeFlag & 256 || C1 && b3(C1.vnode) && C1.vnode.shapeFlag & 256) && y.a && m4(y.a, R), y.isMounted = !0, v = M = F = null
            }
        };
        y.scope.on();
        const $ = y.effect = new u7(U);
        y.scope.off();
        const B = y.update = $.run.bind($),
            a1 = y.job = $.runIfDirty.bind($);
        a1.i = y, a1.id = y.uid, $.scheduler = () => Kt(a1), M2(y, !0), B()
    }, Y = (y, v, M) => {
        v.component = y;
        const F = y.vnode.props;
        y.vnode = v, y.next = null, an(y, v.props, F, M), dn(y, v.children, M), m2(), r6(y), g2()
    }, k = (y, v, M, F, R, O, W, U, $ = !1) => {
        const B = y && y.children,
            a1 = y ? y.shapeFlag : 0,
            V = v.children,
            {
                patchFlag: i1,
                shapeFlag: d1
            } = v;
        if (i1 > 0) {
            if (i1 & 128) {
                J(B, V, M, F, R, O, W, U, $);
                return
            } else if (i1 & 256) {
                z1(B, V, M, F, R, O, W, U, $);
                return
            }
        }
        d1 & 8 ? (a1 & 16 && u1(B, R, O), V !== B && g(M, V)) : a1 & 16 ? d1 & 16 ? J(B, V, M, F, R, O, W, U, $) : u1(B, R, O, !0) : (a1 & 8 && g(M, ""), d1 & 16 && f1(V, M, F, R, O, W, U, $))
    }, z1 = (y, v, M, F, R, O, W, U, $) => {
        y = y || W2, v = v || W2;
        const B = y.length,
            a1 = v.length,
            V = Math.min(B, a1);
        let i1;
        for (i1 = 0; i1 < V; i1++) {
            const d1 = v[i1] = $ ? d2(v[i1]) : H4(v[i1]);
            C(y[i1], d1, M, null, R, O, W, U, $)
        }
        B > a1 ? u1(y, R, O, !0, !1, V) : f1(v, M, F, R, O, W, U, $, V)
    }, J = (y, v, M, F, R, O, W, U, $) => {
        let B = 0;
        const a1 = v.length;
        let V = y.length - 1,
            i1 = a1 - 1;
        for (; B <= V && B <= i1;) {
            const d1 = y[B],
                w1 = v[B] = $ ? d2(v[B]) : H4(v[B]);
            if (p3(d1, w1)) C(d1, w1, M, null, R, O, W, U, $);
            else break;
            B++
        }
        for (; B <= V && B <= i1;) {
            const d1 = y[V],
                w1 = v[i1] = $ ? d2(v[i1]) : H4(v[i1]);
            if (p3(d1, w1)) C(d1, w1, M, null, R, O, W, U, $);
            else break;
            V--, i1--
        }
        if (B > V) {
            if (B <= i1) {
                const d1 = i1 + 1,
                    w1 = d1 < a1 ? v[d1].el : F;
                for (; B <= i1;) C(null, v[B] = $ ? d2(v[B]) : H4(v[B]), M, w1, R, O, W, U, $), B++
            }
        } else if (B > i1)
            for (; B <= V;) b1(y[B], R, O, !0), B++;
        else {
            const d1 = B,
                w1 = B,
                D1 = new Map;
            for (B = w1; B <= i1; B++) {
                const e4 = v[B] = $ ? d2(v[B]) : H4(v[B]);
                e4.key != null && D1.set(e4.key, B)
            }
            let C1, l4 = 0;
            const Q1 = i1 - w1 + 1;
            let p4 = !1,
                b4 = 0;
            const r2 = new Array(Q1);
            for (B = 0; B < Q1; B++) r2[B] = 0;
            for (B = d1; B <= V; B++) {
                const e4 = y[B];
                if (l4 >= Q1) {
                    b1(e4, R, O, !0);
                    continue
                }
                let w4;
                if (e4.key != null) w4 = D1.get(e4.key);
                else
                    for (C1 = w1; C1 <= i1; C1++)
                        if (r2[C1 - w1] === 0 && p3(e4, v[C1])) {
                            w4 = C1;
                            break
                        }
                w4 === void 0 ? b1(e4, R, O, !0) : (r2[w4 - w1] = B + 1, w4 >= b4 ? b4 = w4 : p4 = !0, C(e4, v[w4], M, null, R, O, W, U, $), l4++)
            }
            const k2 = p4 ? mn(r2) : W2;
            for (C1 = k2.length - 1, B = Q1 - 1; B >= 0; B--) {
                const e4 = w1 + B,
                    w4 = v[e4],
                    s2 = e4 + 1 < a1 ? v[e4 + 1].el : F;
                r2[B] === 0 ? C(null, w4, M, s2, R, O, W, U, $) : p4 && (C1 < 0 || B !== k2[C1] ? y1(w4, M, s2, 2) : C1--)
            }
        }
    }, y1 = (y, v, M, F, R = null) => {
        const {
            el: O,
            type: W,
            transition: U,
            children: $,
            shapeFlag: B
        } = y;
        if (B & 6) {
            y1(y.component.subTree, v, M, F);
            return
        }
        if (B & 128) {
            y.suspense.move(v, M, F);
            return
        }
        if (B & 64) {
            W.move(y, v, M, H);
            return
        }
        if (W === y4) {
            a(O, v, M);
            for (let V = 0; V < $.length; V++) y1($[V], v, M, F);
            a(y.anchor, v, M);
            return
        }
        if (W === r5) {
            Z(y, v, M);
            return
        }
        if (F !== 2 && B & 1 && U)
            if (F === 0) U.beforeEnter(O), a(O, v, M), m4(() => U.enter(O), R);
            else {
                const {
                    leave: V,
                    delayLeave: i1,
                    afterLeave: d1
                } = U, w1 = () => a(O, v, M), D1 = () => {
                    V(O, () => {
                        w1(), d1 && d1()
                    })
                };
                i1 ? i1(O, w1, D1) : D1()
            }
        else a(O, v, M)
    }, b1 = (y, v, M, F = !1, R = !1) => {
        const {
            type: O,
            props: W,
            ref: U,
            children: $,
            dynamicChildren: B,
            shapeFlag: a1,
            patchFlag: V,
            dirs: i1,
            cacheIndex: d1
        } = y;
        if (V === -2 && (R = !1), U != null && d5(U, null, M, y, !0), d1 != null && (v.renderCache[d1] = void 0), a1 & 256) {
            v.ctx.deactivate(y);
            return
        }
        const w1 = a1 & 1 && i1,
            D1 = !b3(y);
        let C1;
        if (D1 && (C1 = W && W.onVnodeBeforeUnmount) && G4(C1, v, y), a1 & 6) s1(y.component, M, F);
        else {
            if (a1 & 128) {
                y.suspense.unmount(M, F);
                return
            }
            w1 && P2(y, null, v, "beforeUnmount"), a1 & 64 ? y.type.remove(y, v, M, H, F) : B && !B.hasOnce && (O !== y4 || V > 0 && V & 64) ? u1(B, v, M, !1, !0) : (O === y4 && V & 384 || !R && a1 & 16) && u1($, v, M), F && A1(y)
        } (D1 && (C1 = W && W.onVnodeUnmounted) || w1) && m4(() => {
            C1 && G4(C1, v, y), w1 && P2(y, null, v, "unmounted")
        }, M)
    }, A1 = y => {
        const {
            type: v,
            el: M,
            anchor: F,
            transition: R
        } = y;
        if (v === y4) {
            p1(M, F);
            return
        }
        if (v === r5) {
            j(y);
            return
        }
        const O = () => {
            l(M), R && !R.persisted && R.afterLeave && R.afterLeave()
        };
        if (y.shapeFlag & 1 && R && !R.persisted) {
            const {
                leave: W,
                delayLeave: U
            } = R, $ = () => W(M, O);
            U ? U(y.el, O, $) : $()
        } else O()
    }, p1 = (y, v) => {
        let M;
        for (; y !== v;) M = x(y), l(y), y = M;
        l(v)
    }, s1 = (y, v, M) => {
        const {
            bum: F,
            scope: R,
            job: O,
            subTree: W,
            um: U,
            m: $,
            a: B
        } = y;
        h6($), h6(B), F && i5(F), R.stop(), O && (O.flags |= 8, b1(W, y, v, M)), U && m4(U, v), m4(() => {
            y.isUnmounted = !0
        }, v), v && v.pendingBranch && !v.isUnmounted && y.asyncDep && !y.asyncResolved && y.suspenseId === v.pendingId && (v.deps--, v.deps === 0 && v.resolve())
    }, u1 = (y, v, M, F = !1, R = !1, O = 0) => {
        for (let W = O; W < y.length; W++) b1(y[W], v, M, F, R)
    }, A = y => {
        if (y.shapeFlag & 6) return A(y.component.subTree);
        if (y.shapeFlag & 128) return y.suspense.next();
        const v = x(y.anchor || y.el),
            M = v && v[R0];
        return M ? x(M) : v
    };
    let D = !1;
    const I = (y, v, M) => {
        y == null ? v._vnode && b1(v._vnode, null, null, !0) : C(v._vnode || null, y, v, null, null, null, M), v._vnode = y, D || (D = !0, r6(), C7(), D = !1)
    },
        H = {
            p: C,
            um: b1,
            m: y1,
            r: A1,
            mt: Y1,
            mc: f1,
            pc: k,
            pbc: $1,
            n: A,
            o: e
        };
    return {
        render: I,
        hydrate: void 0,
        createApp: rn(I)
    }
}

function ct({
    type: e,
    props: i
}, r) {
    return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && i && i.encoding && i.encoding.includes("html") ? void 0 : r
}

function M2({
    effect: e,
    job: i
}, r) {
    r ? (e.flags |= 32, i.flags |= 4) : (e.flags &= -33, i.flags &= -5)
}

function pn(e, i) {
    return (!e || e && !e.pendingBranch) && i && !i.persisted
}

function K7(e, i, r = !1) {
    const a = e.children,
        l = i.children;
    if (m1(a) && m1(l))
        for (let c = 0; c < a.length; c++) {
            const d = a[c];
            let p = l[c];
            p.shapeFlag & 1 && !p.dynamicChildren && ((p.patchFlag <= 0 || p.patchFlag === 32) && (p = l[c] = d2(l[c]), p.el = d.el), !r && p.patchFlag !== -2 && K7(d, p)), p.type === T5 && (p.el = d.el)
        }
}

function mn(e) {
    const i = e.slice(),
        r = [0];
    let a, l, c, d, p;
    const f = e.length;
    for (a = 0; a < f; a++) {
        const m = e[a];
        if (m !== 0) {
            if (l = r[r.length - 1], e[l] < m) {
                i[a] = l, r.push(a);
                continue
            }
            for (c = 0, d = r.length - 1; c < d;) p = c + d >> 1, e[r[p]] < m ? c = p + 1 : d = p;
            m < e[r[c]] && (c > 0 && (i[a] = r[c - 1]), r[c] = a)
        }
    }
    for (c = r.length, d = r[c - 1]; c-- > 0;) r[c] = d, d = i[d];
    return r
}

function V7(e) {
    const i = e.subTree.component;
    if (i) return i.asyncDep && !i.asyncResolved ? i : V7(i)
}

function h6(e) {
    if (e)
        for (let i = 0; i < e.length; i++) e[i].flags |= 8
}
const gn = Symbol.for("v-scx"),
    yn = () => A4(gn);

function n2(e, i, r) {
    return q7(e, i, r)
}

function q7(e, i, r = B1) {
    const {
        immediate: a,
        deep: l,
        flush: c,
        once: d
    } = r, p = a4({}, r), f = i && a || !i && c !== "post";
    let m;
    if (I3) {
        if (c === "sync") {
            const P = yn();
            m = P.__watcherHandles || (P.__watcherHandles = [])
        } else if (!f) {
            const P = () => { };
            return P.stop = U4, P.resume = U4, P.pause = U4, P
        }
    }
    const g = r4;
    p.call = (P, E, C) => j4(P, g, E, C);
    let _ = !1;
    c === "post" ? p.scheduler = P => {
        m4(P, g && g.suspense)
    } : c !== "sync" && (_ = !0, p.scheduler = (P, E) => {
        E ? P() : Kt(P)
    }), p.augmentJob = P => {
        i && (P.flags |= 4), _ && (P.flags |= 2, g && (P.id = g.uid, P.i = g))
    };
    const x = C0(e, i, p);
    return I3 && (m ? m.push(x) : f && x()), x
}

function _n(e, i, r) {
    const a = this.proxy,
        l = J1(e) ? e.includes(".") ? J7(a, e) : () => a[e] : e.bind(a, a);
    let c;
    g1(i) ? c = i : (c = i.handler, r = i);
    const d = R3(this),
        p = q7(l, c.bind(a), r);
    return d(), p
}

function J7(e, i) {
    const r = i.split(".");
    return () => {
        let a = e;
        for (let l = 0; l < r.length && a; l++) a = a[r[l]];
        return a
    }
}
const vn = (e, i) => i === "modelValue" || i === "model-value" ? e.modelModifiers : e[`${i}Modifiers`] || e[`${L4(i)}Modifiers`] || e[`${C2(i)}Modifiers`];

function xn(e, i, ...r) {
    if (e.isUnmounted) return;
    const a = e.vnode.props || B1;
    let l = r;
    const c = i.startsWith("update:"),
        d = c && vn(a, i.slice(7));
    d && (d.trim && (l = r.map(g => J1(g) ? g.trim() : g)), d.number && (l = r.map(yt)));
    let p, f = a[p = ot(i)] || a[p = ot(L4(i))];
    !f && c && (f = a[p = ot(C2(i))]), f && j4(f, e, 6, l);
    const m = a[p + "Once"];
    if (m) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[p]) return;
        e.emitted[p] = !0, j4(m, e, 6, l)
    }
}

function Y7(e, i, r = !1) {
    const a = i.emitsCache,
        l = a.get(e);
    if (l !== void 0) return l;
    const c = e.emits;
    let d = {},
        p = !1;
    if (!g1(e)) {
        const f = m => {
            const g = Y7(m, i, !0);
            g && (p = !0, a4(d, g))
        };
        !r && i.mixins.length && i.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f)
    }
    return !c && !p ? (U1(e) && a.set(e, null), null) : (m1(c) ? c.forEach(f => d[f] = null) : a4(d, c), U1(e) && a.set(e, d), d)
}

function S5(e, i) {
    return !e || !y5(i) ? !1 : (i = i.slice(2).replace(/Once$/, ""), R1(e, i[0].toLowerCase() + i.slice(1)) || R1(e, C2(i)) || R1(e, i))
}

function f6(e) {
    const {
        type: i,
        vnode: r,
        proxy: a,
        withProxy: l,
        propsOptions: [c],
        slots: d,
        attrs: p,
        emit: f,
        render: m,
        renderCache: g,
        props: _,
        data: x,
        setupState: P,
        ctx: E,
        inheritAttrs: C
    } = e, G = c5(e);
    let K, z;
    try {
        if (r.shapeFlag & 4) {
            const j = l || a,
                l1 = j;
            K = H4(m.call(l1, j, g, _, P, x, E)), z = p
        } else {
            const j = i;
            K = H4(j.length > 1 ? j(_, {
                attrs: p,
                slots: d,
                emit: f
            }) : j(_, null)), z = i.props ? p : bn(p)
        }
    } catch (j) {
        P3.length = 0, P5(j, e, 1), K = G1(L2)
    }
    let Z = K;
    if (z && C !== !1) {
        const j = Object.keys(z),
            {
                shapeFlag: l1
            } = Z;
        j.length && l1 & 7 && (c && j.some(Dt) && (z = wn(z, c)), Z = Y2(Z, z, !1, !0))
    }
    return r.dirs && (Z = Y2(Z, null, !1, !0), Z.dirs = Z.dirs ? Z.dirs.concat(r.dirs) : r.dirs), r.transition && Vt(Z, r.transition), K = Z, c5(G), K
}
const bn = e => {
    let i;
    for (const r in e) (r === "class" || r === "style" || y5(r)) && ((i || (i = {}))[r] = e[r]);
    return i
},
    wn = (e, i) => {
        const r = {};
        for (const a in e) (!Dt(a) || !(a.slice(9) in i)) && (r[a] = e[a]);
        return r
    };

function Pn(e, i, r) {
    const {
        props: a,
        children: l,
        component: c
    } = e, {
        props: d,
        children: p,
        patchFlag: f
    } = i, m = c.emitsOptions;
    if (i.dirs || i.transition) return !0;
    if (r && f >= 0) {
        if (f & 1024) return !0;
        if (f & 16) return a ? p6(a, d, m) : !!d;
        if (f & 8) {
            const g = i.dynamicProps;
            for (let _ = 0; _ < g.length; _++) {
                const x = g[_];
                if (d[x] !== a[x] && !S5(m, x)) return !0
            }
        }
    } else return (l || p) && (!p || !p.$stable) ? !0 : a === d ? !1 : a ? d ? p6(a, d, m) : !0 : !!d;
    return !1
}

function p6(e, i, r) {
    const a = Object.keys(i);
    if (a.length !== Object.keys(e).length) return !0;
    for (let l = 0; l < a.length; l++) {
        const c = a[l];
        if (i[c] !== e[c] && !S5(r, c)) return !0
    }
    return !1
}

function Mn({
    vnode: e,
    parent: i
}, r) {
    for (; i;) {
        const a = i.subTree;
        if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e) (e = i.vnode).el = r, i = i.parent;
        else break
    }
}
const X7 = e => e.__isSuspense;

function Sn(e, i) {
    i && i.pendingBranch ? m1(e) ? i.effects.push(...e) : i.effects.push(e) : A0(e)
}
const y4 = Symbol.for("v-fgt"),
    T5 = Symbol.for("v-txt"),
    L2 = Symbol.for("v-cmt"),
    r5 = Symbol.for("v-stc"),
    P3 = [];
let v4 = null;

function X(e = !1) {
    P3.push(v4 = e ? null : [])
}

function Tn() {
    P3.pop(), v4 = P3[P3.length - 1] || null
}
let C3 = 1;

function m6(e, i = !1) {
    C3 += e, e < 0 && v4 && i && (v4.hasOnce = !0)
}

function Q7(e) {
    return e.dynamicChildren = C3 > 0 ? v4 || W2 : null, Tn(), C3 > 0 && v4 && v4.push(e), e
}

function Q(e, i, r, a, l, c) {
    return Q7(w(e, i, r, a, l, c, !0))
}

function t9(e, i, r, a, l) {
    return Q7(G1(e, i, r, a, l, !0))
}

function f5(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function p3(e, i) {
    return e.type === i.type && e.key === i.key
}
const e9 = ({
    key: e
}) => e ? ? null,
    s5 = ({
        ref: e,
        ref_key: i,
        ref_for: r
    }) => (typeof e == "number" && (e = "" + e), e != null ? J1(e) || s4(e) || g1(e) ? {
        i: _4,
        r: e,
        k: i,
        f: !!r
    } : e : null);

function w(e, i = null, r = null, a = 0, l = null, c = e === y4 ? 0 : 1, d = !1, p = !1) {
    const f = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: i,
        key: i && e9(i),
        ref: i && s5(i),
        scopeId: k7,
        slotScopeIds: null,
        children: r,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: c,
        patchFlag: a,
        dynamicProps: l,
        dynamicChildren: null,
        appContext: null,
        ctx: _4
    };
    return p ? (Xt(f, r), c & 128 && e.normalize(f)) : r && (f.shapeFlag |= J1(r) ? 8 : 16), C3 > 0 && !d && v4 && (f.patchFlag > 0 || c & 6) && f.patchFlag !== 32 && v4.push(f), f
}
const G1 = En;

function En(e, i = null, r = null, a = 0, l = null, c = !1) {
    if ((!e || e === q0) && (e = L2), f5(e)) {
        const p = Y2(e, i, !0);
        return r && Xt(p, r), C3 > 0 && !c && v4 && (p.shapeFlag & 6 ? v4[v4.indexOf(e)] = p : v4.push(p)), p.patchFlag = -2, p
    }
    if (Bn(e) && (e = e.__vccOpts), i) {
        i = Ln(i);
        let {
            class: p,
            style: f
        } = i;
        p && !J1(p) && (i.class = T4(p)), U1(f) && (jt(f) && !m1(f) && (f = a4({}, f)), i.style = t3(f))
    }
    const d = J1(e) ? 1 : X7(e) ? 128 : D0(e) ? 64 : U1(e) ? 4 : g1(e) ? 2 : 0;
    return w(e, i, r, a, l, d, c, !0)
}

function Ln(e) {
    return e ? jt(e) || z7(e) ? a4({}, e) : e : null
}

function Y2(e, i, r = !1, a = !1) {
    const {
        props: l,
        ref: c,
        patchFlag: d,
        children: p,
        transition: f
    } = e, m = i ? n9(l || {}, i) : l, g = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: m,
        key: m && e9(m),
        ref: i && i.ref ? r && c ? m1(c) ? c.concat(s5(i)) : [c, s5(i)] : s5(i) : c,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: p,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: i && e.type !== y4 ? d === -1 ? 16 : d | 16 : d,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: f,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Y2(e.ssContent),
        ssFallback: e.ssFallback && Y2(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return f && a && Vt(g, f.clone(g)), g
}

function k1(e = " ", i = 0) {
    return G1(T5, null, e, i)
}

function Cn(e, i) {
    const r = G1(r5, null, e);
    return r.staticCount = i, r
}

function E1(e = "", i = !1) {
    return i ? (X(), t9(L2, null, e)) : G1(L2, null, e)
}

function H4(e) {
    return e == null || typeof e == "boolean" ? G1(L2) : m1(e) ? G1(y4, null, e.slice()) : f5(e) ? d2(e) : G1(T5, null, String(e))
}

function d2(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Y2(e)
}

function Xt(e, i) {
    let r = 0;
    const {
        shapeFlag: a
    } = e;
    if (i == null) i = null;
    else if (m1(i)) r = 16;
    else if (typeof i == "object")
        if (a & 65) {
            const l = i.default;
            l && (l._c && (l._d = !1), Xt(e, l()), l._c && (l._d = !0));
            return
        } else {
            r = 32;
            const l = i._;
            !l && !z7(i) ? i._ctx = _4 : l === 3 && _4 && (_4.slots._ === 1 ? i._ = 1 : (i._ = 2, e.patchFlag |= 1024))
        }
    else g1(i) ? (i = {
        default: i,
        _ctx: _4
    }, r = 32) : (i = String(i), a & 64 ? (r = 16, i = [k1(i)]) : r = 8);
    e.children = i, e.shapeFlag |= r
}

function n9(...e) {
    const i = {};
    for (let r = 0; r < e.length; r++) {
        const a = e[r];
        for (const l in a)
            if (l === "class") i.class !== a.class && (i.class = T4([i.class, a.class]));
            else if (l === "style") i.style = t3([i.style, a.style]);
            else if (y5(l)) {
                const c = i[l],
                    d = a[l];
                d && c !== d && !(m1(c) && c.includes(d)) && (i[l] = c ? [].concat(c, d) : d)
            } else l !== "" && (i[l] = a[l])
    }
    return i
}

function G4(e, i, r, a = null) {
    j4(e, i, 7, [r, a])
}
const In = N7();
let kn = 0;

function An(e, i, r) {
    const a = e.type,
        l = (i ? i.appContext : e.appContext) || In,
        c = {
            uid: kn++,
            vnode: e,
            type: a,
            parent: i,
            appContext: l,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            job: null,
            scope: new n0(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: i ? i.provides : Object.create(l.provides),
            ids: i ? i.ids : ["", 0, 0],
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: H7(a, l),
            emitsOptions: Y7(a, l),
            emit: null,
            emitted: null,
            propsDefaults: B1,
            inheritAttrs: a.inheritAttrs,
            ctx: B1,
            data: B1,
            props: B1,
            attrs: B1,
            slots: B1,
            refs: B1,
            setupState: B1,
            setupContext: null,
            suspense: r,
            suspenseId: r ? r.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
    return c.ctx = {
        _: c
    }, c.root = i ? i.root : c, c.emit = xn.bind(null, c), e.ce && e.ce(c), c
}
let r4 = null,
    p5, Lt; {
    const e = b5(),
        i = (r, a) => {
            let l;
            return (l = e[r]) || (l = e[r] = []), l.push(a), c => {
                l.length > 1 ? l.forEach(d => d(c)) : l[0](c)
            }
        };
    p5 = i("__VUE_INSTANCE_SETTERS__", r => r4 = r), Lt = i("__VUE_SSR_SETTERS__", r => I3 = r)
}
const R3 = e => {
    const i = r4;
    return p5(e), e.scope.on(), () => {
        e.scope.off(), p5(i)
    }
},
    g6 = () => {
        r4 && r4.scope.off(), p5(null)
    };

function i9(e) {
    return e.vnode.shapeFlag & 4
}
let I3 = !1;

function Fn(e, i = !1, r = !1) {
    i && Lt(i);
    const {
        props: a,
        children: l
    } = e.vnode, c = i9(e);
    sn(e, a, c, i), cn(e, l, r);
    const d = c ? On(e, i) : void 0;
    return i && Lt(!1), d
}

function On(e, i) {
    const r = e.type;
    e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, Y0);
    const {
        setup: a
    } = r;
    if (a) {
        m2();
        const l = e.setupContext = a.length > 1 ? Dn(e) : null,
            c = R3(e),
            d = F3(a, e, 0, [e.props, l]),
            p = n7(d);
        if (g2(), c(), (p || e.sp) && !b3(e) && A7(e), p) {
            if (d.then(g6, g6), i) return d.then(f => {
                y6(e, f)
            }).catch(f => {
                P5(f, e, 0)
            });
            e.asyncDep = d
        } else y6(e, d)
    } else o9(e)
}

function y6(e, i, r) {
    g1(i) ? e.type.__ssrInlineRender ? e.ssrRender = i : e.render = i : U1(i) && (e.setupState = T7(i)), o9(e)
}

function o9(e, i, r) {
    const a = e.type;
    e.render || (e.render = a.render || U4); {
        const l = R3(e);
        m2();
        try {
            X0(e)
        } finally {
            g2(), l()
        }
    }
}
const Rn = {
    get(e, i) {
        return i4(e, "get", ""), e[i]
    }
};

function Dn(e) {
    const i = r => {
        e.exposed = r || {}
    };
    return {
        attrs: new Proxy(e.attrs, Rn),
        slots: e.slots,
        emit: e.emit,
        expose: i
    }
}

function E5(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(T7(w0(e.exposed)), {
        get(i, r) {
            if (r in i) return i[r];
            if (r in w3) return w3[r](e)
        },
        has(i, r) {
            return r in i || r in w3
        }
    })) : e.proxy
}

function Nn(e, i = !0) {
    return g1(e) ? e.displayName || e.name : e.name || i && e.__name
}

function Bn(e) {
    return g1(e) && "__vccOpts" in e
}
const h4 = (e, i) => E0(e, i, I3);

function r9(e, i, r) {
    const a = arguments.length;
    return a === 2 ? U1(i) && !m1(i) ? f5(i) ? G1(e, null, [i]) : G1(e, i) : G1(e, null, i) : (a > 3 ? r = Array.prototype.slice.call(arguments, 2) : a === 3 && f5(r) && (r = [r]), G1(e, i, r))
}
const Gn = "3.5.13";
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let Ct;
const _6 = typeof window < "u" && window.trustedTypes;
if (_6) try {
    Ct = _6.createPolicy("vue", {
        createHTML: e => e
    })
} catch { }
const s9 = Ct ? e => Ct.createHTML(e) : e => e,
    zn = "http://www.w3.org/2000/svg",
    Zn = "http://www.w3.org/1998/Math/MathML",
    Q4 = typeof document < "u" ? document : null,
    v6 = Q4 && Q4.createElement("template"),
    Hn = {
        insert: (e, i, r) => {
            i.insertBefore(e, r || null)
        },
        remove: e => {
            const i = e.parentNode;
            i && i.removeChild(e)
        },
        createElement: (e, i, r, a) => {
            const l = i === "svg" ? Q4.createElementNS(zn, e) : i === "mathml" ? Q4.createElementNS(Zn, e) : r ? Q4.createElement(e, {
                is: r
            }) : Q4.createElement(e);
            return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l
        },
        createText: e => Q4.createTextNode(e),
        createComment: e => Q4.createComment(e),
        setText: (e, i) => {
            e.nodeValue = i
        },
        setElementText: (e, i) => {
            e.textContent = i
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => Q4.querySelector(e),
        setScopeId(e, i) {
            e.setAttribute(i, "")
        },
        insertStaticContent(e, i, r, a, l, c) {
            const d = r ? r.previousSibling : i.lastChild;
            if (l && (l === c || l.nextSibling))
                for (; i.insertBefore(l.cloneNode(!0), r), !(l === c || !(l = l.nextSibling)););
            else {
                v6.innerHTML = s9(a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e);
                const p = v6.content;
                if (a === "svg" || a === "mathml") {
                    const f = p.firstChild;
                    for (; f.firstChild;) p.appendChild(f.firstChild);
                    p.removeChild(f)
                }
                i.insertBefore(p, r)
            }
            return [d ? d.nextSibling : i.firstChild, r ? r.previousSibling : i.lastChild]
        }
    },
    Un = Symbol("_vtc");

function $n(e, i, r) {
    const a = e[Un];
    a && (i = (i ? [i, ...a] : [...a]).join(" ")), i == null ? e.removeAttribute("class") : r ? e.setAttribute("class", i) : e.className = i
}
const x6 = Symbol("_vod"),
    jn = Symbol("_vsh"),
    Wn = Symbol(""),
    Kn = /(^|;)\s*display\s*:/;

function Vn(e, i, r) {
    const a = e.style,
        l = J1(r);
    let c = !1;
    if (r && !l) {
        if (i)
            if (J1(i))
                for (const d of i.split(";")) {
                    const p = d.slice(0, d.indexOf(":")).trim();
                    r[p] == null && a5(a, p, "")
                } else
                for (const d in i) r[d] == null && a5(a, d, "");
        for (const d in r) d === "display" && (c = !0), a5(a, d, r[d])
    } else if (l) {
        if (i !== r) {
            const d = a[Wn];
            d && (r += ";" + d), a.cssText = r, c = Kn.test(r)
        }
    } else i && e.removeAttribute("style");
    x6 in e && (e[x6] = c ? a.display : "", e[jn] && (a.display = "none"))
}
const b6 = /\s*!important$/;

function a5(e, i, r) {
    if (m1(r)) r.forEach(a => a5(e, i, a));
    else if (r == null && (r = ""), i.startsWith("--")) e.setProperty(i, r);
    else {
        const a = qn(e, i);
        b6.test(r) ? e.setProperty(C2(a), r.replace(b6, ""), "important") : e[a] = r
    }
}
const w6 = ["Webkit", "Moz", "ms"],
    dt = {};

function qn(e, i) {
    const r = dt[i];
    if (r) return r;
    let a = L4(i);
    if (a !== "filter" && a in e) return dt[i] = a;
    a = x5(a);
    for (let l = 0; l < w6.length; l++) {
        const c = w6[l] + a;
        if (c in e) return dt[i] = c
    }
    return i
}
const P6 = "http://www.w3.org/1999/xlink";

function M6(e, i, r, a, l, c = e0(i)) {
    a && i.startsWith("xlink:") ? r == null ? e.removeAttributeNS(P6, i.slice(6, i.length)) : e.setAttributeNS(P6, i, r) : r == null || c && !s7(r) ? e.removeAttribute(i) : e.setAttribute(i, c ? "" : p2(r) ? String(r) : r)
}

function S6(e, i, r, a, l) {
    if (i === "innerHTML" || i === "textContent") {
        r != null && (e[i] = i === "innerHTML" ? s9(r) : r);
        return
    }
    const c = e.tagName;
    if (i === "value" && c !== "PROGRESS" && !c.includes("-")) {
        const p = c === "OPTION" ? e.getAttribute("value") || "" : e.value,
            f = r == null ? e.type === "checkbox" ? "on" : "" : String(r);
        (p !== f || !("_value" in e)) && (e.value = f), r == null && e.removeAttribute(i), e._value = r;
        return
    }
    let d = !1;
    if (r === "" || r == null) {
        const p = typeof e[i];
        p === "boolean" ? r = s7(r) : r == null && p === "string" ? (r = "", d = !0) : p === "number" && (r = 0, d = !0)
    }
    try {
        e[i] = r
    } catch { }
    d && e.removeAttribute(l || i)
}

function U2(e, i, r, a) {
    e.addEventListener(i, r, a)
}

function Jn(e, i, r, a) {
    e.removeEventListener(i, r, a)
}
const T6 = Symbol("_vei");

function Yn(e, i, r, a, l = null) {
    const c = e[T6] || (e[T6] = {}),
        d = c[i];
    if (a && d) d.value = a;
    else {
        const [p, f] = Xn(i);
        if (a) {
            const m = c[i] = ei(a, l);
            U2(e, p, m, f)
        } else d && (Jn(e, p, d, f), c[i] = void 0)
    }
}
const E6 = /(?:Once|Passive|Capture)$/;

function Xn(e) {
    let i;
    if (E6.test(e)) {
        i = {};
        let a;
        for (; a = e.match(E6);) e = e.slice(0, e.length - a[0].length), i[a[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : C2(e.slice(2)), i]
}
let ht = 0;
const Qn = Promise.resolve(),
    ti = () => ht || (Qn.then(() => ht = 0), ht = Date.now());

function ei(e, i) {
    const r = a => {
        if (!a._vts) a._vts = Date.now();
        else if (a._vts <= r.attached) return;
        j4(ni(a, r.value), i, 5, [a])
    };
    return r.value = e, r.attached = ti(), r
}

function ni(e, i) {
    if (m1(i)) {
        const r = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            r.call(e), e._stopped = !0
        }, i.map(a => l => !l._stopped && a && a(l))
    } else return i
}
const L6 = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
    ii = (e, i, r, a, l, c) => {
        const d = l === "svg";
        i === "class" ? $n(e, a, d) : i === "style" ? Vn(e, r, a) : y5(i) ? Dt(i) || Yn(e, i, r, a, c) : (i[0] === "." ? (i = i.slice(1), !0) : i[0] === "^" ? (i = i.slice(1), !1) : oi(e, i, a, d)) ? (S6(e, i, a), !e.tagName.includes("-") && (i === "value" || i === "checked" || i === "selected") && M6(e, i, a, d, c, i !== "value")) : e._isVueCE && (/[A-Z]/.test(i) || !J1(a)) ? S6(e, L4(i), a, c, i) : (i === "true-value" ? e._trueValue = a : i === "false-value" && (e._falseValue = a), M6(e, i, a, d))
    };

function oi(e, i, r, a) {
    if (a) return !!(i === "innerHTML" || i === "textContent" || i in e && L6(i) && g1(r));
    if (i === "spellcheck" || i === "draggable" || i === "translate" || i === "form" || i === "list" && e.tagName === "INPUT" || i === "type" && e.tagName === "TEXTAREA") return !1;
    if (i === "width" || i === "height") {
        const l = e.tagName;
        if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE") return !1
    }
    return L6(i) && J1(r) ? !1 : i in e
}
const C6 = e => {
    const i = e.props["onUpdate:modelValue"] || !1;
    return m1(i) ? r => i5(i, r) : i
};

function ri(e) {
    e.target.composing = !0
}

function I6(e) {
    const i = e.target;
    i.composing && (i.composing = !1, i.dispatchEvent(new Event("input")))
}
const ft = Symbol("_assign"),
    si = {
        created(e, {
            modifiers: {
                lazy: i,
                trim: r,
                number: a
            }
        }, l) {
            e[ft] = C6(l);
            const c = a || l.props && l.props.type === "number";
            U2(e, i ? "change" : "input", d => {
                if (d.target.composing) return;
                let p = e.value;
                r && (p = p.trim()), c && (p = yt(p)), e[ft](p)
            }), r && U2(e, "change", () => {
                e.value = e.value.trim()
            }), i || (U2(e, "compositionstart", ri), U2(e, "compositionend", I6), U2(e, "change", I6))
        },
        mounted(e, {
            value: i
        }) {
            e.value = i ? ? ""
        },
        beforeUpdate(e, {
            value: i,
            oldValue: r,
            modifiers: {
                lazy: a,
                trim: l,
                number: c
            }
        }, d) {
            if (e[ft] = C6(d), e.composing) return;
            const p = (c || e.type === "number") && !/^0\d/.test(e.value) ? yt(e.value) : e.value,
                f = i ? ? "";
            p !== f && (document.activeElement === e && e.type !== "range" && (a && i === r || l && e.value.trim() === f) || (e.value = f))
        }
    },
    ai = a4({
        patchProp: ii
    }, Hn);
let k6;

function li() {
    return k6 || (k6 = hn(ai))
}
const ui = (...e) => {
    const i = li().createApp(...e),
        {
            mount: r
        } = i;
    return i.mount = a => {
        const l = di(a);
        if (!l) return;
        const c = i._component;
        !g1(c) && !c.render && !c.template && (c.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
        const d = r(l, !1, ci(l));
        return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), d
    }, i
};

function ci(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function di(e) {
    return J1(e) ? document.querySelector(e) : e
}
/*!
 * vue-router v4.5.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */
const $2 = typeof document < "u";

function a9(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function hi(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && a9(e.default)
}
const F1 = Object.assign;

function pt(e, i) {
    const r = {};
    for (const a in i) {
        const l = i[a];
        r[a] = F4(l) ? l.map(e) : e(l)
    }
    return r
}
const M3 = () => { },
    F4 = Array.isArray,
    l9 = /#/g,
    fi = /&/g,
    pi = /\//g,
    mi = /=/g,
    gi = /\?/g,
    u9 = /\+/g,
    yi = /%5B/g,
    _i = /%5D/g,
    c9 = /%5E/g,
    vi = /%60/g,
    d9 = /%7B/g,
    xi = /%7C/g,
    h9 = /%7D/g,
    bi = /%20/g;

function Qt(e) {
    return encodeURI("" + e).replace(xi, "|").replace(yi, "[").replace(_i, "]")
}

function wi(e) {
    return Qt(e).replace(d9, "{").replace(h9, "}").replace(c9, "^")
}

function It(e) {
    return Qt(e).replace(u9, "%2B").replace(bi, "+").replace(l9, "%23").replace(fi, "%26").replace(vi, "`").replace(d9, "{").replace(h9, "}").replace(c9, "^")
}

function Pi(e) {
    return It(e).replace(mi, "%3D")
}

function Mi(e) {
    return Qt(e).replace(l9, "%23").replace(gi, "%3F")
}

function Si(e) {
    return e == null ? "" : Mi(e).replace(pi, "%2F")
}

function k3(e) {
    try {
        return decodeURIComponent("" + e)
    } catch { }
    return "" + e
}
const Ti = /\/$/,
    Ei = e => e.replace(Ti, "");

function mt(e, i, r = "/") {
    let a, l = {},
        c = "",
        d = "";
    const p = i.indexOf("#");
    let f = i.indexOf("?");
    return p < f && p >= 0 && (f = -1), f > -1 && (a = i.slice(0, f), c = i.slice(f + 1, p > -1 ? p : i.length), l = e(c)), p > -1 && (a = a || i.slice(0, p), d = i.slice(p, i.length)), a = ki(a ? ? i, r), {
        fullPath: a + (c && "?") + c + d,
        path: a,
        query: l,
        hash: k3(d)
    }
}

function Li(e, i) {
    const r = i.query ? e(i.query) : "";
    return i.path + (r && "?") + r + (i.hash || "")
}

function A6(e, i) {
    return !i || !e.toLowerCase().startsWith(i.toLowerCase()) ? e : e.slice(i.length) || "/"
}

function Ci(e, i, r) {
    const a = i.matched.length - 1,
        l = r.matched.length - 1;
    return a > -1 && a === l && X2(i.matched[a], r.matched[l]) && f9(i.params, r.params) && e(i.query) === e(r.query) && i.hash === r.hash
}

function X2(e, i) {
    return (e.aliasOf || e) === (i.aliasOf || i)
}

function f9(e, i) {
    if (Object.keys(e).length !== Object.keys(i).length) return !1;
    for (const r in e)
        if (!Ii(e[r], i[r])) return !1;
    return !0
}

function Ii(e, i) {
    return F4(e) ? F6(e, i) : F4(i) ? F6(i, e) : e === i
}

function F6(e, i) {
    return F4(i) ? e.length === i.length && e.every((r, a) => r === i[a]) : e.length === 1 && e[0] === i
}

function ki(e, i) {
    if (e.startsWith("/")) return e;
    if (!e) return i;
    const r = i.split("/"),
        a = e.split("/"),
        l = a[a.length - 1];
    (l === ".." || l === ".") && a.push("");
    let c = r.length - 1,
        d, p;
    for (d = 0; d < a.length; d++)
        if (p = a[d], p !== ".")
            if (p === "..") c > 1 && c--;
            else break;
    return r.slice(0, c).join("/") + "/" + a.slice(d).join("/")
}
const u2 = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
};
var A3;
(function (e) {
    e.pop = "pop", e.push = "push"
})(A3 || (A3 = {}));
var S3;
(function (e) {
    e.back = "back", e.forward = "forward", e.unknown = ""
})(S3 || (S3 = {}));

function Ai(e) {
    if (!e)
        if ($2) {
            const i = document.querySelector("base");
            e = i && i.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Ei(e)
}
const Fi = /^[^#]+#/;

function Oi(e, i) {
    return e.replace(Fi, "#") + i
}

function Ri(e, i) {
    const r = document.documentElement.getBoundingClientRect(),
        a = e.getBoundingClientRect();
    return {
        behavior: i.behavior,
        left: a.left - r.left - (i.left || 0),
        top: a.top - r.top - (i.top || 0)
    }
}
const L5 = () => ({
    left: window.scrollX,
    top: window.scrollY
});

function Di(e) {
    let i;
    if ("el" in e) {
        const r = e.el,
            a = typeof r == "string" && r.startsWith("#"),
            l = typeof r == "string" ? a ? document.getElementById(r.slice(1)) : document.querySelector(r) : r;
        if (!l) return;
        i = Ri(l, e)
    } else i = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(i) : window.scrollTo(i.left != null ? i.left : window.scrollX, i.top != null ? i.top : window.scrollY)
}

function O6(e, i) {
    return (history.state ? history.state.position - i : -1) + e
}
const kt = new Map;

function Ni(e, i) {
    kt.set(e, i)
}

function Bi(e) {
    const i = kt.get(e);
    return kt.delete(e), i
}
let Gi = () => location.protocol + "//" + location.host;

function p9(e, i) {
    const {
        pathname: r,
        search: a,
        hash: l
    } = i, c = e.indexOf("#");
    if (c > -1) {
        let p = l.includes(e.slice(c)) ? e.slice(c).length : 1,
            f = l.slice(p);
        return f[0] !== "/" && (f = "/" + f), A6(f, "")
    }
    return A6(r, e) + a + l
}

function zi(e, i, r, a) {
    let l = [],
        c = [],
        d = null;
    const p = ({
        state: x
    }) => {
        const P = p9(e, location),
            E = r.value,
            C = i.value;
        let G = 0;
        if (x) {
            if (r.value = P, i.value = x, d && d === E) {
                d = null;
                return
            }
            G = C ? x.position - C.position : 0
        } else a(P);
        l.forEach(K => {
            K(r.value, E, {
                delta: G,
                type: A3.pop,
                direction: G ? G > 0 ? S3.forward : S3.back : S3.unknown
            })
        })
    };

    function f() {
        d = r.value
    }

    function m(x) {
        l.push(x);
        const P = () => {
            const E = l.indexOf(x);
            E > -1 && l.splice(E, 1)
        };
        return c.push(P), P
    }

    function g() {
        const {
            history: x
        } = window;
        x.state && x.replaceState(F1({}, x.state, {
            scroll: L5()
        }), "")
    }

    function _() {
        for (const x of c) x();
        c = [], window.removeEventListener("popstate", p), window.removeEventListener("beforeunload", g)
    }
    return window.addEventListener("popstate", p), window.addEventListener("beforeunload", g, {
        passive: !0
    }), {
        pauseListeners: f,
        listen: m,
        destroy: _
    }
}

function R6(e, i, r, a = !1, l = !1) {
    return {
        back: e,
        current: i,
        forward: r,
        replaced: a,
        position: window.history.length,
        scroll: l ? L5() : null
    }
}

function Zi(e) {
    const {
        history: i,
        location: r
    } = window, a = {
        value: p9(e, r)
    }, l = {
        value: i.state
    };
    l.value || c(a.value, {
        back: null,
        current: a.value,
        forward: null,
        position: i.length - 1,
        replaced: !0,
        scroll: null
    }, !0);

    function c(f, m, g) {
        const _ = e.indexOf("#"),
            x = _ > -1 ? (r.host && document.querySelector("base") ? e : e.slice(_)) + f : Gi() + e + f;
        try {
            i[g ? "replaceState" : "pushState"](m, "", x), l.value = m
        } catch (P) {
            console.error(P), r[g ? "replace" : "assign"](x)
        }
    }

    function d(f, m) {
        const g = F1({}, i.state, R6(l.value.back, f, l.value.forward, !0), m, {
            position: l.value.position
        });
        c(f, g, !0), a.value = f
    }

    function p(f, m) {
        const g = F1({}, l.value, i.state, {
            forward: f,
            scroll: L5()
        });
        c(g.current, g, !0);
        const _ = F1({}, R6(a.value, f, null), {
            position: g.position + 1
        }, m);
        c(f, _, !1), a.value = f
    }
    return {
        location: a,
        state: l,
        push: p,
        replace: d
    }
}

function Hi(e) {
    e = Ai(e);
    const i = Zi(e),
        r = zi(e, i.state, i.location, i.replace);

    function a(c, d = !0) {
        d || r.pauseListeners(), history.go(c)
    }
    const l = F1({
        location: "",
        base: e,
        go: a,
        createHref: Oi.bind(null, e)
    }, i, r);
    return Object.defineProperty(l, "location", {
        enumerable: !0,
        get: () => i.location.value
    }), Object.defineProperty(l, "state", {
        enumerable: !0,
        get: () => i.state.value
    }), l
}

function Ui(e) {
    return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), Hi(e)
}

function $i(e) {
    return typeof e == "string" || e && typeof e == "object"
}

function m9(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const g9 = Symbol("");
var D6;
(function (e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated"
})(D6 || (D6 = {}));

function Q2(e, i) {
    return F1(new Error, {
        type: e,
        [g9]: !0
    }, i)
}

function X4(e, i) {
    return e instanceof Error && g9 in e && (i == null || !!(e.type & i))
}
const N6 = "[^/]+?",
    ji = {
        sensitive: !1,
        strict: !1,
        start: !0,
        end: !0
    },
    Wi = /[.+*?^${}()[\]/\\]/g;

function Ki(e, i) {
    const r = F1({}, ji, i),
        a = [];
    let l = r.start ? "^" : "";
    const c = [];
    for (const m of e) {
        const g = m.length ? [] : [90];
        r.strict && !m.length && (l += "/");
        for (let _ = 0; _ < m.length; _++) {
            const x = m[_];
            let P = 40 + (r.sensitive ? .25 : 0);
            if (x.type === 0) _ || (l += "/"), l += x.value.replace(Wi, "\\$&"), P += 40;
            else if (x.type === 1) {
                const {
                    value: E,
                    repeatable: C,
                    optional: G,
                    regexp: K
                } = x;
                c.push({
                    name: E,
                    repeatable: C,
                    optional: G
                });
                const z = K || N6;
                if (z !== N6) {
                    P += 10;
                    try {
                        new RegExp(`(${z})`)
                    } catch (j) {
                        throw new Error(`Invalid custom RegExp for param "${E}" (${z}): ` + j.message)
                    }
                }
                let Z = C ? `((?:${z})(?:/(?:${z}))*)` : `(${z})`;
                _ || (Z = G && m.length < 2 ? `(?:/${Z})` : "/" + Z), G && (Z += "?"), l += Z, P += 20, G && (P += -8), C && (P += -20), z === ".*" && (P += -50)
            }
            g.push(P)
        }
        a.push(g)
    }
    if (r.strict && r.end) {
        const m = a.length - 1;
        a[m][a[m].length - 1] += .7000000000000001
    }
    r.strict || (l += "/?"), r.end ? l += "$" : r.strict && !l.endsWith("/") && (l += "(?:/|$)");
    const d = new RegExp(l, r.sensitive ? "" : "i");

    function p(m) {
        const g = m.match(d),
            _ = {};
        if (!g) return null;
        for (let x = 1; x < g.length; x++) {
            const P = g[x] || "",
                E = c[x - 1];
            _[E.name] = P && E.repeatable ? P.split("/") : P
        }
        return _
    }

    function f(m) {
        let g = "",
            _ = !1;
        for (const x of e) {
            (!_ || !g.endsWith("/")) && (g += "/"), _ = !1;
            for (const P of x)
                if (P.type === 0) g += P.value;
                else if (P.type === 1) {
                    const {
                        value: E,
                        repeatable: C,
                        optional: G
                    } = P, K = E in m ? m[E] : "";
                    if (F4(K) && !C) throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);
                    const z = F4(K) ? K.join("/") : K;
                    if (!z)
                        if (G) x.length < 2 && (g.endsWith("/") ? g = g.slice(0, -1) : _ = !0);
                        else throw new Error(`Missing required param "${E}"`);
                    g += z
                }
        }
        return g || "/"
    }
    return {
        re: d,
        score: a,
        keys: c,
        parse: p,
        stringify: f
    }
}

function Vi(e, i) {
    let r = 0;
    for (; r < e.length && r < i.length;) {
        const a = i[r] - e[r];
        if (a) return a;
        r++
    }
    return e.length < i.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > i.length ? i.length === 1 && i[0] === 80 ? 1 : -1 : 0
}

function y9(e, i) {
    let r = 0;
    const a = e.score,
        l = i.score;
    for (; r < a.length && r < l.length;) {
        const c = Vi(a[r], l[r]);
        if (c) return c;
        r++
    }
    if (Math.abs(l.length - a.length) === 1) {
        if (B6(a)) return 1;
        if (B6(l)) return -1
    }
    return l.length - a.length
}

function B6(e) {
    const i = e[e.length - 1];
    return e.length > 0 && i[i.length - 1] < 0
}
const qi = {
    type: 0,
    value: ""
},
    Ji = /[a-zA-Z0-9_]/;

function Yi(e) {
    if (!e) return [
        []
    ];
    if (e === "/") return [
        [qi]
    ];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

    function i(P) {
        throw new Error(`ERR (${r})/"${m}": ${P}`)
    }
    let r = 0,
        a = r;
    const l = [];
    let c;

    function d() {
        c && l.push(c), c = []
    }
    let p = 0,
        f, m = "",
        g = "";

    function _() {
        m && (r === 0 ? c.push({
            type: 0,
            value: m
        }) : r === 1 || r === 2 || r === 3 ? (c.length > 1 && (f === "*" || f === "+") && i(`A repeatable param (${m}) must be alone in its segment. eg: '/:ids+.`), c.push({
            type: 1,
            value: m,
            regexp: g,
            repeatable: f === "*" || f === "+",
            optional: f === "*" || f === "?"
        })) : i("Invalid state to consume buffer"), m = "")
    }

    function x() {
        m += f
    }
    for (; p < e.length;) {
        if (f = e[p++], f === "\\" && r !== 2) {
            a = r, r = 4;
            continue
        }
        switch (r) {
            case 0:
                f === "/" ? (m && _(), d()) : f === ":" ? (_(), r = 1) : x();
                break;
            case 4:
                x(), r = a;
                break;
            case 1:
                f === "(" ? r = 2 : Ji.test(f) ? x() : (_(), r = 0, f !== "*" && f !== "?" && f !== "+" && p--);
                break;
            case 2:
                f === ")" ? g[g.length - 1] == "\\" ? g = g.slice(0, -1) + f : r = 3 : g += f;
                break;
            case 3:
                _(), r = 0, f !== "*" && f !== "?" && f !== "+" && p--, g = "";
                break;
            default:
                i("Unknown state");
                break
        }
    }
    return r === 2 && i(`Unfinished custom RegExp for param "${m}"`), _(), d(), l
}

function Xi(e, i, r) {
    const a = Ki(Yi(e.path), r),
        l = F1(a, {
            record: e,
            parent: i,
            children: [],
            alias: []
        });
    return i && !l.record.aliasOf == !i.record.aliasOf && i.children.push(l), l
}

function Qi(e, i) {
    const r = [],
        a = new Map;
    i = H6({
        strict: !1,
        end: !0,
        sensitive: !1
    }, i);

    function l(_) {
        return a.get(_)
    }

    function c(_, x, P) {
        const E = !P,
            C = z6(_);
        C.aliasOf = P && P.record;
        const G = H6(i, _),
            K = [C];
        if ("alias" in _) {
            const j = typeof _.alias == "string" ? [_.alias] : _.alias;
            for (const l1 of j) K.push(z6(F1({}, C, {
                components: P ? P.record.components : C.components,
                path: l1,
                aliasOf: P ? P.record : C
            })))
        }
        let z, Z;
        for (const j of K) {
            const {
                path: l1
            } = j;
            if (x && l1[0] !== "/") {
                const e1 = x.record.path,
                    r1 = e1[e1.length - 1] === "/" ? "" : "/";
                j.path = x.record.path + (l1 && r1 + l1)
            }
            if (z = Xi(j, x, G), P ? P.alias.push(z) : (Z = Z || z, Z !== z && Z.alias.push(z), E && _.name && !Z6(z) && d(_.name)), _9(z) && f(z), C.children) {
                const e1 = C.children;
                for (let r1 = 0; r1 < e1.length; r1++) c(e1[r1], z, P && P.children[r1])
            }
            P = P || z
        }
        return Z ? () => {
            d(Z)
        } : M3
    }

    function d(_) {
        if (m9(_)) {
            const x = a.get(_);
            x && (a.delete(_), r.splice(r.indexOf(x), 1), x.children.forEach(d), x.alias.forEach(d))
        } else {
            const x = r.indexOf(_);
            x > -1 && (r.splice(x, 1), _.record.name && a.delete(_.record.name), _.children.forEach(d), _.alias.forEach(d))
        }
    }

    function p() {
        return r
    }

    function f(_) {
        const x = no(_, r);
        r.splice(x, 0, _), _.record.name && !Z6(_) && a.set(_.record.name, _)
    }

    function m(_, x) {
        let P, E = {},
            C, G;
        if ("name" in _ && _.name) {
            if (P = a.get(_.name), !P) throw Q2(1, {
                location: _
            });
            G = P.record.name, E = F1(G6(x.params, P.keys.filter(Z => !Z.optional).concat(P.parent ? P.parent.keys.filter(Z => Z.optional) : []).map(Z => Z.name)), _.params && G6(_.params, P.keys.map(Z => Z.name))), C = P.stringify(E)
        } else if (_.path != null) C = _.path, P = r.find(Z => Z.re.test(C)), P && (E = P.parse(C), G = P.record.name);
        else {
            if (P = x.name ? a.get(x.name) : r.find(Z => Z.re.test(x.path)), !P) throw Q2(1, {
                location: _,
                currentLocation: x
            });
            G = P.record.name, E = F1({}, x.params, _.params), C = P.stringify(E)
        }
        const K = [];
        let z = P;
        for (; z;) K.unshift(z.record), z = z.parent;
        return {
            name: G,
            path: C,
            params: E,
            matched: K,
            meta: eo(K)
        }
    }
    e.forEach(_ => c(_));

    function g() {
        r.length = 0, a.clear()
    }
    return {
        addRoute: c,
        resolve: m,
        removeRoute: d,
        clearRoutes: g,
        getRoutes: p,
        getRecordMatcher: l
    }
}

function G6(e, i) {
    const r = {};
    for (const a of i) a in e && (r[a] = e[a]);
    return r
}

function z6(e) {
    const i = {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: e.aliasOf,
        beforeEnter: e.beforeEnter,
        props: to(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components" in e ? e.components || null : e.component && {
            default: e.component
        }
    };
    return Object.defineProperty(i, "mods", {
        value: {}
    }), i
}

function to(e) {
    const i = {},
        r = e.props || !1;
    if ("component" in e) i.default = r;
    else
        for (const a in e.components) i[a] = typeof r == "object" ? r[a] : r;
    return i
}

function Z6(e) {
    for (; e;) {
        if (e.record.aliasOf) return !0;
        e = e.parent
    }
    return !1
}

function eo(e) {
    return e.reduce((i, r) => F1(i, r.meta), {})
}

function H6(e, i) {
    const r = {};
    for (const a in e) r[a] = a in i ? i[a] : e[a];
    return r
}

function no(e, i) {
    let r = 0,
        a = i.length;
    for (; r !== a;) {
        const c = r + a >> 1;
        y9(e, i[c]) < 0 ? a = c : r = c + 1
    }
    const l = io(e);
    return l && (a = i.lastIndexOf(l, a - 1)), a
}

function io(e) {
    let i = e;
    for (; i = i.parent;)
        if (_9(i) && y9(e, i) === 0) return i
}

function _9({
    record: e
}) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
}

function oo(e) {
    const i = {};
    if (e === "" || e === "?") return i;
    const a = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let l = 0; l < a.length; ++l) {
        const c = a[l].replace(u9, " "),
            d = c.indexOf("="),
            p = k3(d < 0 ? c : c.slice(0, d)),
            f = d < 0 ? null : k3(c.slice(d + 1));
        if (p in i) {
            let m = i[p];
            F4(m) || (m = i[p] = [m]), m.push(f)
        } else i[p] = f
    }
    return i
}

function U6(e) {
    let i = "";
    for (let r in e) {
        const a = e[r];
        if (r = Pi(r), a == null) {
            a !== void 0 && (i += (i.length ? "&" : "") + r);
            continue
        } (F4(a) ? a.map(c => c && It(c)) : [a && It(a)]).forEach(c => {
            c !== void 0 && (i += (i.length ? "&" : "") + r, c != null && (i += "=" + c))
        })
    }
    return i
}

function ro(e) {
    const i = {};
    for (const r in e) {
        const a = e[r];
        a !== void 0 && (i[r] = F4(a) ? a.map(l => l == null ? null : "" + l) : a == null ? a : "" + a)
    }
    return i
}
const so = Symbol(""),
    $6 = Symbol(""),
    C5 = Symbol(""),
    te = Symbol(""),
    At = Symbol("");

function m3() {
    let e = [];

    function i(a) {
        return e.push(a), () => {
            const l = e.indexOf(a);
            l > -1 && e.splice(l, 1)
        }
    }

    function r() {
        e = []
    }
    return {
        add: i,
        list: () => e.slice(),
        reset: r
    }
}

function h2(e, i, r, a, l, c = d => d()) {
    const d = a && (a.enterCallbacks[l] = a.enterCallbacks[l] || []);
    return () => new Promise((p, f) => {
        const m = x => {
            x === !1 ? f(Q2(4, {
                from: r,
                to: i
            })) : x instanceof Error ? f(x) : $i(x) ? f(Q2(2, {
                from: i,
                to: x
            })) : (d && a.enterCallbacks[l] === d && typeof x == "function" && d.push(x), p())
        },
            g = c(() => e.call(a && a.instances[l], i, r, m));
        let _ = Promise.resolve(g);
        e.length < 3 && (_ = _.then(m)), _.catch(x => f(x))
    })
}

function gt(e, i, r, a, l = c => c()) {
    const c = [];
    for (const d of e)
        for (const p in d.components) {
            let f = d.components[p];
            if (!(i !== "beforeRouteEnter" && !d.instances[p]))
                if (a9(f)) {
                    const g = (f.__vccOpts || f)[i];
                    g && c.push(h2(g, r, a, d, p, l))
                } else {
                    let m = f();
                    c.push(() => m.then(g => {
                        if (!g) throw new Error(`Couldn't resolve component "${p}" at "${d.path}"`);
                        const _ = hi(g) ? g.default : g;
                        d.mods[p] = g, d.components[p] = _;
                        const P = (_.__vccOpts || _)[i];
                        return P && h2(P, r, a, d, p, l)()
                    }))
                }
        }
    return c
}

function j6(e) {
    const i = A4(C5),
        r = A4(te),
        a = h4(() => {
            const f = h1(e.to);
            return i.resolve(f)
        }),
        l = h4(() => {
            const {
                matched: f
            } = a.value, {
                length: m
            } = f, g = f[m - 1], _ = r.matched;
            if (!g || !_.length) return -1;
            const x = _.findIndex(X2.bind(null, g));
            if (x > -1) return x;
            const P = W6(f[m - 2]);
            return m > 1 && W6(g) === P && _[_.length - 1].path !== P ? _.findIndex(X2.bind(null, f[m - 2])) : x
        }),
        c = h4(() => l.value > -1 && ho(r.params, a.value.params)),
        d = h4(() => l.value > -1 && l.value === r.matched.length - 1 && f9(r.params, a.value.params));

    function p(f = {}) {
        if (co(f)) {
            const m = i[h1(e.replace) ? "replace" : "push"](h1(e.to)).catch(M3);
            return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => m), m
        }
        return Promise.resolve()
    }
    return {
        route: a,
        href: h4(() => a.value.href),
        isActive: c,
        isExactActive: d,
        navigate: p
    }
}

function ao(e) {
    return e.length === 1 ? e[0] : e
}
const lo = qt({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        }
    },
    useLink: j6,
    setup(e, {
        slots: i
    }) {
        const r = W4(j6(e)),
            {
                options: a
            } = A4(C5),
            l = h4(() => ({
                [K6(e.activeClass, a.linkActiveClass, "router-link-active")]: r.isActive,
                [K6(e.exactActiveClass, a.linkExactActiveClass, "router-link-exact-active")]: r.isExactActive
            }));
        return () => {
            const c = i.default && ao(i.default(r));
            return e.custom ? c : r9("a", {
                "aria-current": r.isExactActive ? e.ariaCurrentValue : null,
                href: r.href,
                onClick: r.navigate,
                class: l.value
            }, c)
        }
    }
}),
    uo = lo;

function co(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const i = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(i)) return
        }
        return e.preventDefault && e.preventDefault(), !0
    }
}

function ho(e, i) {
    for (const r in i) {
        const a = i[r],
            l = e[r];
        if (typeof a == "string") {
            if (a !== l) return !1
        } else if (!F4(l) || l.length !== a.length || a.some((c, d) => c !== l[d])) return !1
    }
    return !0
}

function W6(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const K6 = (e, i, r) => e ? ? i ? ? r,
    fo = qt({
        name: "RouterView",
        inheritAttrs: !1,
        props: {
            name: {
                type: String,
                default: "default"
            },
            route: Object
        },
        compatConfig: {
            MODE: 3
        },
        setup(e, {
            attrs: i,
            slots: r
        }) {
            const a = A4(At),
                l = h4(() => e.route || a.value),
                c = A4($6, 0),
                d = h4(() => {
                    let m = h1(c);
                    const {
                        matched: g
                    } = l.value;
                    let _;
                    for (;
                        (_ = g[m]) && !_.components;) m++;
                    return m
                }),
                p = h4(() => l.value.matched[d.value]);
            o5($6, h4(() => d.value + 1)), o5(so, p), o5(At, l);
            const f = o1();
            return n2(() => [f.value, p.value, e.name], ([m, g, _], [x, P, E]) => {
                g && (g.instances[_] = m, P && P !== g && m && m === x && (g.leaveGuards.size || (g.leaveGuards = P.leaveGuards), g.updateGuards.size || (g.updateGuards = P.updateGuards))), m && g && (!P || !X2(g, P) || !x) && (g.enterCallbacks[_] || []).forEach(C => C(m))
            }, {
                flush: "post"
            }), () => {
                const m = l.value,
                    g = e.name,
                    _ = p.value,
                    x = _ && _.components[g];
                if (!x) return V6(r.default, {
                    Component: x,
                    route: m
                });
                const P = _.props[g],
                    E = P ? P === !0 ? m.params : typeof P == "function" ? P(m) : P : null,
                    G = r9(x, F1({}, E, i, {
                        onVnodeUnmounted: K => {
                            K.component.isUnmounted && (_.instances[g] = null)
                        },
                        ref: f
                    }));
                return V6(r.default, {
                    Component: G,
                    route: m
                }) || G
            }
        }
    });

function V6(e, i) {
    if (!e) return null;
    const r = e(i);
    return r.length === 1 ? r[0] : r
}
const po = fo;

function mo(e) {
    const i = Qi(e.routes, e),
        r = e.parseQuery || oo,
        a = e.stringifyQuery || U6,
        l = e.history,
        c = m3(),
        d = m3(),
        p = m3(),
        f = P0(u2);
    let m = u2;
    $2 && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const g = pt.bind(null, A => "" + A),
        _ = pt.bind(null, Si),
        x = pt.bind(null, k3);

    function P(A, D) {
        let I, H;
        return m9(A) ? (I = i.getRecordMatcher(A), H = D) : H = A, i.addRoute(H, I)
    }

    function E(A) {
        const D = i.getRecordMatcher(A);
        D && i.removeRoute(D)
    }

    function C() {
        return i.getRoutes().map(A => A.record)
    }

    function G(A) {
        return !!i.getRecordMatcher(A)
    }

    function K(A, D) {
        if (D = F1({}, D || f.value), typeof A == "string") {
            const M = mt(r, A, D.path),
                F = i.resolve({
                    path: M.path
                }, D),
                R = l.createHref(M.fullPath);
            return F1(M, F, {
                params: x(F.params),
                hash: k3(M.hash),
                redirectedFrom: void 0,
                href: R
            })
        }
        let I;
        if (A.path != null) I = F1({}, A, {
            path: mt(r, A.path, D.path).path
        });
        else {
            const M = F1({}, A.params);
            for (const F in M) M[F] == null && delete M[F];
            I = F1({}, A, {
                params: _(M)
            }), D.params = _(D.params)
        }
        const H = i.resolve(I, D),
            n1 = A.hash || "";
        H.params = g(x(H.params));
        const y = Li(a, F1({}, A, {
            hash: wi(n1),
            path: H.path
        })),
            v = l.createHref(y);
        return F1({
            fullPath: y,
            hash: n1,
            query: a === U6 ? ro(A.query) : A.query || {}
        }, H, {
            redirectedFrom: void 0,
            href: v
        })
    }

    function z(A) {
        return typeof A == "string" ? mt(r, A, f.value.path) : F1({}, A)
    }

    function Z(A, D) {
        if (m !== A) return Q2(8, {
            from: D,
            to: A
        })
    }

    function j(A) {
        return r1(A)
    }

    function l1(A) {
        return j(F1(z(A), {
            replace: !0
        }))
    }

    function e1(A) {
        const D = A.matched[A.matched.length - 1];
        if (D && D.redirect) {
            const {
                redirect: I
            } = D;
            let H = typeof I == "function" ? I(A) : I;
            return typeof H == "string" && (H = H.includes("?") || H.includes("#") ? H = z(H) : {
                path: H
            }, H.params = {}), F1({
                query: A.query,
                hash: A.hash,
                params: H.path != null ? {} : A.params
            }, H)
        }
    }

    function r1(A, D) {
        const I = m = K(A),
            H = f.value,
            n1 = A.state,
            y = A.force,
            v = A.replace === !0,
            M = e1(I);
        if (M) return r1(F1(z(M), {
            state: typeof M == "object" ? F1({}, n1, M.state) : n1,
            force: y,
            replace: v
        }), D || I);
        const F = I;
        F.redirectedFrom = D;
        let R;
        return !y && Ci(a, H, I) && (R = Q2(16, {
            to: F,
            from: H
        }), y1(H, H, !0, !1)), (R ? Promise.resolve(R) : $1(F, H)).catch(O => X4(O) ? X4(O, 2) ? O : J(O) : k(O, F, H)).then(O => {
            if (O) {
                if (X4(O, 2)) return r1(F1({
                    replace: v
                }, z(O.to), {
                    state: typeof O.to == "object" ? F1({}, n1, O.to.state) : n1,
                    force: y
                }), D || F)
            } else O = T1(F, H, !0, v, n1);
            return v1(F, H, O), O
        })
    }

    function f1(A, D) {
        const I = Z(A, D);
        return I ? Promise.reject(I) : Promise.resolve()
    }

    function N1(A) {
        const D = p1.values().next().value;
        return D && typeof D.runWithContext == "function" ? D.runWithContext(A) : A()
    }

    function $1(A, D) {
        let I;
        const [H, n1, y] = go(A, D);
        I = gt(H.reverse(), "beforeRouteLeave", A, D);
        for (const M of H) M.leaveGuards.forEach(F => {
            I.push(h2(F, A, D))
        });
        const v = f1.bind(null, A, D);
        return I.push(v), u1(I).then(() => {
            I = [];
            for (const M of c.list()) I.push(h2(M, A, D));
            return I.push(v), u1(I)
        }).then(() => {
            I = gt(n1, "beforeRouteUpdate", A, D);
            for (const M of n1) M.updateGuards.forEach(F => {
                I.push(h2(F, A, D))
            });
            return I.push(v), u1(I)
        }).then(() => {
            I = [];
            for (const M of y)
                if (M.beforeEnter)
                    if (F4(M.beforeEnter))
                        for (const F of M.beforeEnter) I.push(h2(F, A, D));
                    else I.push(h2(M.beforeEnter, A, D));
            return I.push(v), u1(I)
        }).then(() => (A.matched.forEach(M => M.enterCallbacks = {}), I = gt(y, "beforeRouteEnter", A, D, N1), I.push(v), u1(I))).then(() => {
            I = [];
            for (const M of d.list()) I.push(h2(M, A, D));
            return I.push(v), u1(I)
        }).catch(M => X4(M, 8) ? M : Promise.reject(M))
    }

    function v1(A, D, I) {
        p.list().forEach(H => N1(() => H(A, D, I)))
    }

    function T1(A, D, I, H, n1) {
        const y = Z(A, D);
        if (y) return y;
        const v = D === u2,
            M = $2 ? history.state : {};
        I && (H || v ? l.replace(A.fullPath, F1({
            scroll: v && M && M.scroll
        }, n1)) : l.push(A.fullPath, n1)), f.value = A, y1(A, D, I, v), J()
    }
    let K1;

    function Y1() {
        K1 || (K1 = l.listen((A, D, I) => {
            if (!s1.listening) return;
            const H = K(A),
                n1 = e1(H);
            if (n1) {
                r1(F1(n1, {
                    replace: !0,
                    force: !0
                }), H).catch(M3);
                return
            }
            m = H;
            const y = f.value;
            $2 && Ni(O6(y.fullPath, I.delta), L5()), $1(H, y).catch(v => X4(v, 12) ? v : X4(v, 2) ? (r1(F1(z(v.to), {
                force: !0
            }), H).then(M => {
                X4(M, 20) && !I.delta && I.type === A3.pop && l.go(-1, !1)
            }).catch(M3), Promise.reject()) : (I.delta && l.go(-I.delta, !1), k(v, H, y))).then(v => {
                v = v || T1(H, y, !1), v && (I.delta && !X4(v, 8) ? l.go(-I.delta, !1) : I.type === A3.pop && X4(v, 20) && l.go(-1, !1)), v1(H, y, v)
            }).catch(M3)
        }))
    }
    let x4 = m3(),
        M1 = m3(),
        Y;

    function k(A, D, I) {
        J(A);
        const H = M1.list();
        return H.length ? H.forEach(n1 => n1(A, D, I)) : console.error(A), Promise.reject(A)
    }

    function z1() {
        return Y && f.value !== u2 ? Promise.resolve() : new Promise((A, D) => {
            x4.add([A, D])
        })
    }

    function J(A) {
        return Y || (Y = !A, Y1(), x4.list().forEach(([D, I]) => A ? I(A) : D()), x4.reset()), A
    }

    function y1(A, D, I, H) {
        const {
            scrollBehavior: n1
        } = e;
        if (!$2 || !n1) return Promise.resolve();
        const y = !I && Bi(O6(A.fullPath, 0)) || (H || !I) && history.state && history.state.scroll || null;
        return Wt().then(() => n1(A, D, y)).then(v => v && Di(v)).catch(v => k(v, A, D))
    }
    const b1 = A => l.go(A);
    let A1;
    const p1 = new Set,
        s1 = {
            currentRoute: f,
            listening: !0,
            addRoute: P,
            removeRoute: E,
            clearRoutes: i.clearRoutes,
            hasRoute: G,
            getRoutes: C,
            resolve: K,
            options: e,
            push: j,
            replace: l1,
            go: b1,
            back: () => b1(-1),
            forward: () => b1(1),
            beforeEach: c.add,
            beforeResolve: d.add,
            afterEach: p.add,
            onError: M1.add,
            isReady: z1,
            install(A) {
                const D = this;
                A.component("RouterLink", uo), A.component("RouterView", po), A.config.globalProperties.$router = D, Object.defineProperty(A.config.globalProperties, "$route", {
                    enumerable: !0,
                    get: () => h1(f)
                }), $2 && !A1 && f.value === u2 && (A1 = !0, j(l.location).catch(n1 => { }));
                const I = {};
                for (const n1 in u2) Object.defineProperty(I, n1, {
                    get: () => f.value[n1],
                    enumerable: !0
                });
                A.provide(C5, D), A.provide(te, P7(I)), A.provide(At, f);
                const H = A.unmount;
                p1.add(A), A.unmount = function () {
                    p1.delete(A), p1.size < 1 && (m = u2, K1 && K1(), K1 = null, f.value = u2, A1 = !1, Y = !1), H()
                }
            }
        };

    function u1(A) {
        return A.reduce((D, I) => D.then(() => N1(I)), Promise.resolve())
    }
    return s1
}

function go(e, i) {
    const r = [],
        a = [],
        l = [],
        c = Math.max(i.matched.length, e.matched.length);
    for (let d = 0; d < c; d++) {
        const p = i.matched[d];
        p && (e.matched.find(m => X2(m, p)) ? a.push(p) : r.push(p));
        const f = e.matched[d];
        f && (i.matched.find(m => X2(m, f)) || l.push(f))
    }
    return [r, a, l]
}

function o2() {
    return A4(C5)
}

function v9(e) {
    return A4(te)
}
const $4 = () => {
    const e = localStorage.getItem("playerName");
    localStorage.clear(), e !== null && localStorage.setItem("playerName", e)
},
    yo = {
        class: ""
    },
    _o = {
        __name: "App",
        setup(e) {
            const i = o2();
            O4(() => {
                window.addEventListener("beforeunload", r)
            }), O3(() => {
                window.removeEventListener("beforeunload", r)
            });

            function r(a) {
                if (performance.navigation.type === 1) return;
                console.log("Tab closing detected, clearing localStorage.");
                const l = Number(localStorage.getItem("mapType"));
                setTimeout(() => {
                    $4(), localStorage.setItem("mapType", l), i.push("/")
                }, 0)
            }
            return (a, l) => {
                const c = V0("router-view");
                return X(), Q("div", yo, [G1(c)])
            }
        }
    },
    vo = {
        class: "relative z-[999999]"
    },
    xo = {
        class: "overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    },
    bo = {
        class: "relative p-4 w-full max-w-md max-h-full"
    },
    wo = {
        class: "relative bg-white rounded-lg shadow-sm"
    },
    Po = {
        class: "flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600 border-gray-200"
    },
    Mo = {
        class: "p-4 md:p-5 space-y-4"
    },
    So = {
        class: "flex items-center gap-4"
    },
    To = ["value"],
    Eo = {
        class: "pb-4 px-4 md:pb-5 flex items-center gap-2"
    },
    Lo = ["disabled"],
    Co = {
        key: 0,
        class: "pi pi-verified animate__animated animate__heartBeat"
    },
    Io = {
        __name: "Settings",
        props: {
            updateSettingsState: Function,
            mapType: Number
        },
        setup(e, {
            emit: i
        }) {
            const r = e,
                a = o1(localStorage.getItem("playerName") || ""),
                l = o1(!1),
                c = () => {
                    a.value.trim() && (localStorage.setItem("playerName", a.value), l.value = !0, setTimeout(() => l.value = !1, 3e3))
                },
                d = i,
                p = f => {
                    const m = Number(f.target.value);
                    d("update-map-type", m), localStorage.setItem("mapType", m)
                };
            return (f, m) => (X(), Q("div", vo, [w("div", xo, [w("div", bo, [w("div", wo, [w("div", Po, [m[3] || (m[3] = w("h3", {
                class: "text-lg font-semibold text-dark-black"
            }, " Settings ", -1)), w("button", {
                type: "button",
                onClick: m[0] || (m[0] = (...g) => e.updateSettingsState && e.updateSettingsState(...g)),
                class: "bg-transparent hover:scale-110 transition-all duration-300 ms-auto inline-flex justify-center items-center"
            }, m[2] || (m[2] = [w("svg", {
                class: "w-3 h-3",
                "aria-hidden": "true",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 14 14"
            }, [w("path", {
                stroke: "currentColor",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            })], -1)]))]), w("div", Mo, [w("div", So, [m[5] || (m[5] = w("label", {
                for: "map-type",
                class: "whitespace-nowrap text-sm font-medium text-dark-black"
            }, " Map Type: ", -1)), w("select", {
                id: "map-type",
                onChange: p,
                value: r.mapType,
                class: "flex-grow bg-gray-50 border border-gray-300 text-dark-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
            }, m[4] || (m[4] = [w("option", {
                value: "1"
            }, "Google map", -1), w("option", {
                value: "2"
            }, "OpenStreet map", -1)]), 40, To)])]), w("div", Eo, [O0(w("input", {
                type: "text",
                "onUpdate:modelValue": m[1] || (m[1] = g => a.value = g),
                placeholder: "Enter your name",
                class: "border p-2 rounded-md"
            }, null, 512), [
                [si, a.value]
            ]), w("button", {
                class: "flex items-center gap-2 mt-0 cursor-pointer bg-single-player-btn-bg text-white px-5 py-2 text-center rounded-md disabled:opacity-50",
                disabled: !a.value.trim(),
                onClick: c
            }, [m[6] || (m[6] = k1(" Add ")), l.value ? (X(), Q("i", Co)) : E1("", !0)], 8, Lo)])])])])]))
        }
    },
    q6 = JSON.parse(`[{"name":"United States","slug":"united-states","longDescription":"Explore the United States in GlobalGuessr! From the bustling cities to the stunning national parks, discover the diverse landscapes and cultures of this vast country.","shortDescription":"Explore the USA's 50 states and over 400 national parks!","maxDist":6000,"countryCode":"US","extent":[-124.848974,24.396308,-66.885444,49.384358],"created_by_name":"GlobalGuessr","official":true,"countryMap":"US","description_short":"Explore the USA's 50 states and over 400 national parks!"},{"name":"United Kingdom","slug":"united-kingdom","longDescription":"Explore the United Kingdom in GlobalGuessr! Discover the historic cities, beautiful countryside, and rich cultural heritage of England, Scotland, Wales, and Northern Ireland.","shortDescription":"Explore the UK's 4 nations and over 32 UNESCO World Heritage sites!","maxDist":1400,"countryCode":"GB","extent":[-8.6175,49.959999,1.749444,60.845001],"created_by_name":"GlobalGuessr","official":true,"countryMap":"GB","description_short":"Explore the UK's 4 nations and over 32 UNESCO World Heritage sites!"},{"name":"Australia","slug":"australia","longDescription":"Explore Australia in GlobalGuessr! Travel through the Outback, visit the iconic Sydney Opera House, and experience the unique wildlife of this vast island continent.","shortDescription":"Explore Australia's 8 states and territories!","maxDist":4600.556,"countryCode":"AU","extent":[113.338953,-43.634597,153.569469,-10.668185],"created_by_name":"GlobalGuessr","official":true,"countryMap":"AU","description_short":"Explore Australia's 8 states and territories!"},{"name":"Canada","slug":"canada","longDescription":"Explore Canada in GlobalGuessr! From the Rocky Mountains to the French-speaking province of Quebec, explore the vast and diverse landscapes of Canada.","shortDescription":"Explore Canada's 10 provinces and 3 territories!","maxDist":5656.416,"countryCode":"CA","extent":[-141,41.676555,-52.619408,83.113881],"created_by_name":"GlobalGuessr","official":true,"countryMap":"CA","description_short":"Explore Canada's 10 provinces and 3 territories!"},{"name":"Spain","slug":"spain","longDescription":"Explore Spain in GlobalGuessr! Discover the historic cities, beautiful beaches, and rich cultural heritage of this Southern European country.","shortDescription":"Explore Spain's 17 autonomous communities and over 47 UNESCO World Heritage sites!","maxDist":2607.001,"countryCode":"ES","extent":[-18.1675,27.6375,4.3275,43.791667],"created_by_name":"GlobalGuessr","official":true,"countryMap":"ES","description_short":"Explore Spain's 17 autonomous communities and over 47 UNESCO World Heritage sites!"},{"name":"Japan","slug":"japan","longDescription":"Explore Japan in GlobalGuessr! Discover the blend of ancient traditions and modern technology in the Land of the Rising Sun.","shortDescription":"Explore Japan's 47 prefectures and over 6,800 islands!","maxDist":3020.565,"countryCode":"JP","extent":[122.93457,24.396308,153.986672,45.551483],"created_by_name":"GlobalGuessr","official":true,"countryMap":"JP","description_short":"Explore Japan's 47 prefectures and over 6,800 islands!"},{"name":"Philippines","slug":"philippines","longDescription":"Explore the Philippines in GlobalGuessr! Discover the stunning beaches, vibrant cities, and rich culture of this Southeast Asian archipelago.","shortDescription":"Explore the Philippines' 7,641 islands and over 175 languages!","maxDist":1976.332,"countryCode":"PH","extent":[116.928,4.64,126.6,21.1],"created_by_name":"GlobalGuessr","official":true,"countryMap":"PH","description_short":"Explore the Philippines' 7,641 islands and over 175 languages!"},{"name":"Brazil","slug":"brazil","longDescription":"Explore Brazil in GlobalGuessr! From the Amazon rainforest to the vibrant city of Rio de Janeiro, immerse yourself in the diverse culture and natural beauty of Brazil.","shortDescription":"Explore Brazil's 26 states and the world's largest rainforest!","maxDist":4670.419,"countryCode":"BR","extent":[-73.987235,-33.768378,-34.729993,5.244486],"created_by_name":"GlobalGuessr","official":true,"countryMap":"BR","description_short":"Explore Brazil's 26 states and the world's largest rainforest!"},{"name":"India","slug":"india","longDescription":"Explore India in GlobalGuessr! From the Himalayas to the bustling streets of Delhi, experience the diverse culture, languages, and landscapes of India.","shortDescription":"Explore India's 28 states and over 1,600 languages spoken!","maxDist":3828.242,"countryCode":"IN","extent":[68.111378,6.754892,97.395358,35.504475],"created_by_name":"GlobalGuessr","official":true,"countryMap":"IN","description_short":"Explore India's 28 states and over 1,600 languages spoken!"},{"name":"Germany","slug":"germany","longDescription":"Explore Germany in GlobalGuessr! From the Black Forest to Berlin, discover the rich history, culture, and landscapes of Germany.","shortDescription":"Explore Germany's 16 states and 300+ types of bread!","maxDist":906.917,"countryCode":"DE","extent":[5.866315,47.302487,15.041896,55.058142],"created_by_name":"GlobalGuessr","official":true,"countryMap":"DE","description_short":"Explore Germany's 16 states and 300+ types of bread!"},{"name":"France","slug":"france","longDescription":"Explore France in GlobalGuessr! Discover the Eiffel Tower, the French Riviera, and the diverse culture and landscapes of France.","shortDescription":"Explore France's 18 regions and 1,200+ cheeses!","maxDist":1400,"countryCode":"FR","extent":[-5.142222,41.333738,9.560016,51.124199],"created_by_name":"GlobalGuessr","official":true,"countryMap":"FR","description_short":"Explore France's 18 regions and 1,200+ cheeses!"},{"name":"Sweden","slug":"sweden","longDescription":"Explore Sweden in GlobalGuessr! Discover the stunning landscapes, vibrant cities, and rich cultural heritage of this Scandinavian country.","shortDescription":"Explore Sweden's 21 counties and over 100,000 lakes!","maxDist":1592.015,"countryCode":"SE","extent":[11.1475,55.34,24.1675,69.06],"created_by_name":"GlobalGuessr","official":true,"countryMap":"SE","description_short":"Explore Sweden's 21 counties and over 100,000 lakes!"},{"name":"Russia","slug":"russia","longDescription":"Explore Russia in GlobalGuessr! From the historic cities of Moscow and St. Petersburg to the vast wilderness of Siberia, discover the diverse landscapes and culture of Russia.","shortDescription":"Explore Russia's 85 federal subjects and the largest country in the world!","maxDist":8224.333,"countryCode":"RU","extent":[19.638306,41.185219,169.05,81.8575],"created_by_name":"GlobalGuessr","official":true,"countryMap":"RU","description_short":"Explore Russia's 85 federal subjects and the largest country in the world!"},{"name":"Indonesia","slug":"indonesia","longDescription":"Explore Indonesia in GlobalGuessr! Discover the stunning islands, active volcanoes, and rich culture of this Southeast Asian archipelago.","shortDescription":"Explore Indonesia's 17,000+ islands and 300+ ethnic groups!","maxDist":5642.759,"countryCode":"ID","extent":[95.008,-11.005,141.007,6],"created_by_name":"GlobalGuessr","official":true,"countryMap":"ID","description_short":"Explore Indonesia's 17,000+ islands and 300+ ethnic groups!"},{"name":"Chile","slug":"chile","longDescription":"Explore Chile in GlobalGuessr! From the Atacama Desert to the fjords of Patagonia, discover the diverse and stunning landscapes of Chile.","shortDescription":"Explore Chile's 16 regions and the world's driest desert!","maxDist":4815.36,"countryCode":"CL","extent":[-75.644711,-55.61183,-66.95992,-17.507144],"created_by_name":"GlobalGuessr","official":true,"countryMap":"CL","description_short":"Explore Chile's 16 regions and the world's driest desert!"},{"name":"Argentina","slug":"argentina","longDescription":"Explore Argentina in GlobalGuessr! From the bustling streets of Buenos Aires to the breathtaking landscapes of Patagonia, discover the vast beauty and culture of this South American gem.","shortDescription":"Explore Argentina's 23 provinces and diverse landscapes!","maxDist":3720.101,"countryCode":"AR","extent":[-73.415436,-55.25,-53.65054,-21.83231],"created_by_name":"GlobalGuessr","official":true,"countryMap":"AR","description_short":"Explore Argentina's 23 provinces and diverse landscapes!"},{"name":"Mexico","slug":"mexico","longDescription":"Explore Mexico in GlobalGuessr! Discover the rich history, vibrant culture, and diverse landscapes of this North American country.","shortDescription":"Explore Mexico's 32 states and over 60 indigenous languages!","maxDist":3493.148,"countryCode":"MX","extent":[-118.404,14.538,-86.703,32.718],"created_by_name":"GlobalGuessr","official":true,"countryMap":"MX","description_short":"Explore Mexico's 32 states and over 60 indigenous languages!"},{"name":"New Zealand","slug":"new-zealand","longDescription":"Explore New Zealand in GlobalGuessr! Discover the stunning landscapes, from mountains to beaches, in this beautiful island nation.","shortDescription":"Explore New Zealand's 2 main islands and over 600 smaller islands!","maxDist":2473.615,"countryCode":"NZ","extent":[166.509144,-47.271812,178.517094,-34.4507],"created_by_name":"GlobalGuessr","official":true,"countryMap":"NZ","description_short":"Explore New Zealand's 2 main islands and over 600 smaller islands!"},{"name":"Colombia","slug":"colombia","longDescription":"Explore Colombia in GlobalGuessr! Discover the vibrant cities, lush rainforests, and rich culture of this South American country.","shortDescription":"Explore Colombia's 32 departments and diverse ecosystems!","maxDist":2352.2,"countryCode":"CO","extent":[-79,-4.231687,-66.876325,12.437303],"created_by_name":"GlobalGuessr","official":true,"countryMap":"CO","description_short":"Explore Colombia's 32 departments and diverse ecosystems!"},{"name":"Malaysia","slug":"malaysia","longDescription":"Explore Malaysia in GlobalGuessr! Discover the vibrant cities, stunning beaches, and rich cultural diversity of this Southeast Asian country.","shortDescription":"Explore Malaysia's 13 states and 3 federal territories!","maxDist":2239.742,"countryCode":"MY","extent":[99.6433,0.8554,119.5108,7.3634],"created_by_name":"GlobalGuessr","official":true,"countryMap":"MY","description_short":"Explore Malaysia's 13 states and 3 federal territories!"},{"name":"Peru","slug":"peru","longDescription":"Explore Peru in GlobalGuessr! From the ancient ruins of Machu Picchu to the vibrant city of Lima, discover the rich history and culture of Peru.","shortDescription":"Explore Peru's 25 regions and the world's largest rainforest!","maxDist":2114.034,"countryCode":"PE","extent":[-81.326,-18.349,-68.673,-0.038],"created_by_name":"GlobalGuessr","official":true,"countryMap":"PE","description_short":"Explore Peru's 25 regions and the world's largest rainforest!"},{"name":"Norway","slug":"norway","longDescription":"Explore Norway in GlobalGuessr! Discover the stunning fjords, Northern Lights, and rich cultural heritage of this Scandinavian country.","shortDescription":"Explore Norway's 11 counties and over 1,000 fjords!","maxDist":1942.584,"countryCode":"NO","extent":[4.630834,57.9775,31.078056,71.188333],"created_by_name":"GlobalGuessr","official":true,"countryMap":"NO","description_short":"Explore Norway's 11 counties and over 1,000 fjords!"},{"name":"South Africa","slug":"south-africa","longDescription":"Explore South Africa in GlobalGuessr! Discover the diverse cultures, stunning landscapes, and vibrant cities of this southernmost African country.","shortDescription":"Explore South Africa's 9 provinces and 11 official languages!","maxDist":1905.569,"countryCode":"ZA","extent":[16.344976,-34.8335,32.891667,-22.125069],"created_by_name":"GlobalGuessr","official":true,"countryMap":"ZA","description_short":"Explore South Africa's 9 provinces and 11 official languages!"},{"name":"Portugal","slug":"portugal","longDescription":"Explore Portugal in GlobalGuessr! Discover the historic cities, beautiful beaches, and rich cultural heritage of this Southern European country.","shortDescription":"Explore Portugal's 18 districts and 800 km of coastline!","maxDist":1837.279,"countryCode":"PT","extent":[-31.266667,32.638889,-6.189167,42.154167],"created_by_name":"GlobalGuessr","official":true,"countryMap":"PT","description_short":"Explore Portugal's 18 districts and 800 km of coastline!"},{"name":"Turkey","slug":"turkey","longDescription":"Explore Turkey in GlobalGuessr! Discover the rich history, vibrant cities, and diverse landscapes of this transcontinental country.","shortDescription":"Explore Turkey's 81 provinces and over 2,000 years of history!","maxDist":1696.647,"countryCode":"TR","extent":[25.668056,35.808333,44.793056,42.1075],"created_by_name":"GlobalGuessr","official":true,"countryMap":"TR","description_short":"Explore Turkey's 81 provinces and over 2,000 years of history!"},{"name":"Thailand","slug":"thailand","longDescription":"Explore Thailand in GlobalGuessr! Discover the stunning beaches, vibrant cities, and rich cultural heritage of this Southeast Asian country.","shortDescription":"Explore Thailand's 77 provinces and the world's longest reign by a monarch!","maxDist":1657.708,"countryCode":"TH","extent":[97.345,5.61,105.639,20.464],"created_by_name":"GlobalGuessr","official":true,"countryMap":"TH","description_short":"Explore Thailand's 77 provinces and the world's longest reign by a monarch!"},{"name":"Nigeria","slug":"nigeria","longDescription":"Explore Nigeria in GlobalGuessr! Discover the diverse culture, vibrant cities, and rich history of Africa's most populous country.","shortDescription":"Explore Nigeria's 36 states and over 500 ethnic groups!","maxDist":1470.5,"countryCode":"NG","extent":[3.3375,4.2775,14.6775,13.8925],"created_by_name":"GlobalGuessr","official":true,"countryMap":"NG","description_short":"Explore Nigeria's 36 states and over 500 ethnic groups!"},{"name":"Italy","slug":"italy","longDescription":"Explore Italy in GlobalGuessr! From the ruins of Rome to the canals of Venice, experience the rich history, culture, and cuisine of Italy.","shortDescription":"Explore Italy's 20 regions and 55 UNESCO World Heritage sites!","maxDist":1317.252,"countryCode":"IT","extent":[6.627265,36.649647,18.520244,47.094649],"created_by_name":"GlobalGuessr","official":true,"countryMap":"IT","description_short":"Explore Italy's 20 regions and 55 UNESCO World Heritage sites!"},{"name":"Finland","slug":"finland","longDescription":"Explore Finland in GlobalGuessr! From the Northern Lights to the thousands of lakes, immerse yourself in the natural beauty and unique culture of Finland.","shortDescription":"Explore Finland's 19 regions and over 188,000 lakes!","maxDist":1266.549,"countryCode":"FI","extent":[20.556335,59.846373,31.516092,70.092295],"created_by_name":"GlobalGuessr","official":true,"countryMap":"FI","description_short":"Explore Finland's 19 regions and over 188,000 lakes!"},{"name":"Kenya","slug":"kenya","longDescription":"Explore Kenya in GlobalGuessr! From the savannas to the bustling city of Nairobi, discover the diverse wildlife and landscapes of Kenya.","shortDescription":"Explore Kenya's 47 counties and the Great Rift Valley!","maxDist":1208.97,"countryCode":"KE","extent":[33.908859,-4.67677,41.899975,4.6225],"created_by_name":"GlobalGuessr","official":true,"countryMap":"KE","description_short":"Explore Kenya's 47 counties and the Great Rift Valley!"},{"name":"Greece","slug":"greece","longDescription":"Explore Greece in GlobalGuessr! Discover the ancient ruins, beautiful islands, and rich culture of this Mediterranean country.","shortDescription":"Explore Greece's 13 regions and 6,000+ islands!","maxDist":1005.522,"countryCode":"GR","extent":[19.3736,34.802144,28.217753,41.748306],"created_by_name":"GlobalGuessr","official":true,"countryMap":"GR","description_short":"Explore Greece's 13 regions and 6,000+ islands!"},{"name":"Ghana","slug":"ghana","longDescription":"Explore Ghana in GlobalGuessr! From the historical sites of Cape Coast to the colorful markets of Accra, experience the warmth and hospitality of this West African nation.","shortDescription":"Discover the vibrant culture and history of Ghana!","maxDist":854.901,"countryCode":"GH","extent":[-3.255,4.736,1.199,11.173],"created_by_name":"GlobalGuessr","official":true,"countryMap":"GH","description_short":"Discover the vibrant culture and history of Ghana!"},{"name":"Poland","slug":"poland","longDescription":"Explore Poland in GlobalGuessr! Discover the historic cities, beautiful countryside, and rich cultural heritage of this Central European country.","shortDescription":"Explore Poland's 16 voivodeships and over 100 castles!","maxDist":827.137,"countryCode":"PL","extent":[14.122592,49.002494,24.145815,54.836582],"created_by_name":"GlobalGuessr","official":true,"countryMap":"PL","description_short":"Explore Poland's 16 voivodeships and over 100 castles!"},{"name":"Bangladesh","slug":"bangladesh","longDescription":"Explore Bangladesh in GlobalGuessr! From the lush landscapes of the Sundarbans to the vibrant streets of Dhaka, discover the rich culture and natural beauty of this South Asian gem.","shortDescription":"Discover the beauty of Bangladesh's diverse landscapes!","maxDist":809.854,"countryCode":"BD","extent":[88.028,20.743,92.673,26.631],"created_by_name":"GlobalGuessr","official":true,"countryMap":"BD","description_short":"Discover the beauty of Bangladesh's diverse landscapes!"},{"name":"Romania","slug":"romania","longDescription":"Explore Romania in GlobalGuessr! Discover the historic castles, beautiful mountains, and rich culture of this Eastern European country.","shortDescription":"Explore Romania's 41 counties and the legend of Dracula!","maxDist":770.108,"countryCode":"RO","extent":[20.261111,43.6275,29.691111,48.265],"created_by_name":"GlobalGuessr","official":true,"countryMap":"RO","description_short":"Explore Romania's 41 counties and the legend of Dracula!"},{"name":"South Korea","slug":"south-korea","longDescription":"Explore South Korea in GlobalGuessr! Discover the blend of ancient traditions and modern technology in this East Asian country.","shortDescription":"Explore South Korea's 9 provinces and over 5,000 years of history!","maxDist":683,"countryCode":"KR","extent":[124.6137,33.0041,131.8725,38.6125],"created_by_name":"GlobalGuessr","official":true,"countryMap":"KR","description_short":"Explore South Korea's 9 provinces and over 5,000 years of history!"},{"name":"Panama","slug":"panama","longDescription":"Explore Panama in GlobalGuessr! From the iconic Panama Canal to the lush rainforests, discover the diverse ecosystems and vibrant culture of this Central American country.","shortDescription":"Experience the wonders of Panama's natural beauty!","maxDist":655.405,"countryCode":"PA","extent":[-83.051,7.206,-77.174,9.634],"created_by_name":"GlobalGuessr","official":true,"countryMap":"PA","description_short":"Experience the wonders of Panama's natural beauty!"},{"name":"Bulgaria","slug":"bulgaria","longDescription":"Explore Bulgaria in GlobalGuessr! Discover the rich history, beautiful mountains, and cultural diversity of this Eastern European country.","shortDescription":"Explore Bulgaria's 28 provinces and rich history!","maxDist":582.029,"countryCode":"BG","extent":[22.345023,41.238104,28.603526,44.228434],"created_by_name":"GlobalGuessr","official":true,"countryMap":"BG","description_short":"Explore Bulgaria's 28 provinces and rich history!"},{"name":"Austria","slug":"austria","longDescription":"Explore Austria in GlobalGuessr! From the Alps to the historic cities like Vienna, discover the rich cultural heritage and stunning landscapes of Austria.","shortDescription":"Explore Austria's 9 federal states!","maxDist":577.829,"countryCode":"AT","extent":[9.530952,46.372276,16.979667,49.039074],"created_by_name":"GlobalGuessr","official":true,"countryMap":"AT","description_short":"Explore Austria's 9 federal states!"},{"name":"Ireland","slug":"ireland","longDescription":"Explore Ireland in GlobalGuessr! Discover the lush green landscapes, historic castles, and vibrant culture of the Emerald Isle.","shortDescription":"Explore Ireland's 4 provinces and over 30,000 castles!","maxDist":570.923,"countryCode":"IE","extent":[-10.478097,51.447548,-6.032985,55.387635],"created_by_name":"GlobalGuessr","official":true,"countryMap":"IE","description_short":"Explore Ireland's 4 provinces and over 30,000 castles!"},{"name":"Croatia","slug":"croatia","longDescription":"Explore Croatia in GlobalGuessr! From the historic cities of Dubrovnik to the beautiful Plitvice Lakes, discover the rich culture and stunning landscapes of this Mediterranean country.","shortDescription":"Experience the beauty and history of Croatia!","maxDist":537.169,"countryCode":"HR","extent":[13.493,42.393,19.426,46.554],"created_by_name":"GlobalGuessr","official":true,"countryMap":"HR","description_short":"Experience the beauty and history of Croatia!"},{"name":"Latvia","slug":"latvia","longDescription":"Explore Latvia in GlobalGuessr! From the picturesque streets of Riga to the stunning coastline, experience the beauty and culture of this Baltic state.","shortDescription":"Discover the enchanting landscapes of Latvia!","maxDist":532.265,"countryCode":"LV","extent":[20.974,55.675,28.241,58.085],"created_by_name":"GlobalGuessr","official":true,"countryMap":"LV","description_short":"Discover the enchanting landscapes of Latvia!"},{"name":"Hungary","slug":"hungary","longDescription":"Explore Hungary in GlobalGuessr! Discover the historic cities, thermal baths, and rich cultural heritage of this Central European country.","shortDescription":"Explore Hungary's 19 counties and 1,500+ thermal springs!","maxDist":525.881,"countryCode":"HU","extent":[16.113889,45.737128,22.896748,48.585258],"created_by_name":"GlobalGuessr","official":true,"countryMap":"HU","description_short":"Explore Hungary's 19 counties and 1,500+ thermal springs!"},{"name":"Denmark","slug":"denmark","longDescription":"Explore Denmark in GlobalGuessr! From the historic city of Copenhagen to the scenic coastal landscapes, discover the charm of this Scandinavian country.","shortDescription":"Explore Denmark's 5 regions and over 400 islands!","maxDist":518.274,"countryCode":"DK","extent":[8.089977,54.800014,15.151377,57.748417],"created_by_name":"GlobalGuessr","official":true,"countryMap":"DK","description_short":"Explore Denmark's 5 regions and over 400 islands!"},{"name":"Sri Lanka","slug":"sri-lanka","longDescription":"Explore Sri Lanka in GlobalGuessr! From the ancient cities to the lush tea plantations, experience the island's rich history and natural beauty.","shortDescription":"Discover the diverse landscapes of Sri Lanka!","maxDist":505.193,"countryCode":"LK","extent":[79.652,5.917,81.88,9.835],"created_by_name":"GlobalGuessr","official":true,"countryMap":"LK","description_short":"Discover the diverse landscapes of Sri Lanka!"},{"name":"Czech Republic","slug":"czech-republic","longDescription":"Explore the Czech Republic in GlobalGuessr! Discover the historic castles, charming towns, and vibrant culture of this Central European country.","shortDescription":"Explore the Czech Republic's 14 regions and over 2,000 castles!","maxDist":490.955,"countryCode":"CZ","extent":[12.09024,48.551808,18.859216,51.055703],"created_by_name":"GlobalGuessr","official":true,"countryMap":"CZ","description_short":"Explore the Czech Republic's 14 regions and over 2,000 castles!"},{"name":"Israel","slug":"israel","longDescription":"Explore Israel in GlobalGuessr! Discover the ancient cities, religious sites, and diverse culture of this Middle Eastern country.","shortDescription":"Explore Israel's 6 districts and the Dead Sea, the lowest point on Earth!","maxDist":439.764,"countryCode":"IL","extent":[34.265433,29.501326,35.836396,33.277426],"created_by_name":"GlobalGuessr","official":true,"countryMap":"IL","description_short":"Explore Israel's 6 districts and the Dead Sea, the lowest point on Earth!"},{"name":"Slovakia","slug":"slovakia","longDescription":"Explore Slovakia in GlobalGuessr! From the majestic Tatra Mountains to the historic castles, discover the rich history and stunning landscapes of this Central European country.","shortDescription":"Experience Slovakia's beautiful nature and history!","maxDist":427.884,"countryCode":"SK","extent":[16.833,47.758,22.558,49.603],"created_by_name":"GlobalGuessr","official":true,"countryMap":"SK","description_short":"Experience Slovakia's beautiful nature and history!"},{"name":"Lithuania","slug":"lithuania","longDescription":"Explore Lithuania in GlobalGuessr! From the historic capital of Vilnius to the beautiful Curonian Spit, discover the rich heritage and nature of this Baltic nation.","shortDescription":"Experience the charm of Lithuania's cities and landscapes!","maxDist":395.23,"countryCode":"LT","extent":[20.941,53.896,26.835,56.452],"created_by_name":"GlobalGuessr","official":true,"countryMap":"LT","description_short":"Experience the charm of Lithuania's cities and landscapes!"},{"name":"Switzerland","slug":"switzerland","longDescription":"Explore Switzerland in GlobalGuessr! Discover the stunning Alps, charming cities, and rich cultural heritage of this Central European country.","shortDescription":"Explore Switzerland's 26 cantons and over 7,000 lakes!","maxDist":358.077,"countryCode":"CH","extent":[5.955,45.8175,10.491667,47.808333],"created_by_name":"GlobalGuessr","official":true,"countryMap":"CH","description_short":"Explore Switzerland's 26 cantons and over 7,000 lakes!"},{"name":"Belgium","slug":"belgium","longDescription":"Explore Belgium in GlobalGuessr! Discover the medieval towns, vibrant cities, and rich cultural heritage in the heart of Europe.","shortDescription":"Explore Belgium's 3 regions and over 800 types of beer!","maxDist":344.702,"countryCode":"BE","extent":[2.513573,49.529484,6.156658,51.475024],"created_by_name":"GlobalGuessr","official":true,"countryMap":"BE","description_short":"Explore Belgium's 3 regions and over 800 types of beer!"},{"name":"Bhutan","slug":"bhutan","longDescription":"Explore Bhutan in GlobalGuessr! From the stunning monasteries perched on cliffs to the vibrant festivals, discover the spiritual beauty and culture of the 'Land of the Thunder Dragon'.","shortDescription":"Experience Bhutan's unique culture and landscapes!","maxDist":336.05,"countryCode":"BT","extent":[88.745,26.702,92.125,28.325],"created_by_name":"GlobalGuessr","official":true,"countryMap":"BT","description_short":"Experience Bhutan's unique culture and landscapes!"},{"name":"Netherlands","slug":"netherlands","longDescription":"Explore the Netherlands in GlobalGuessr! Discover the iconic windmills, tulip fields, and vibrant cities of this European country.","shortDescription":"Explore the Netherlands' 12 provinces and over 4,000 km of canals!","maxDist":300,"countryCode":"NL","extent":[3.314971,50.803721,7.092053,53.510403],"created_by_name":"GlobalGuessr","official":true,"countryMap":"NL","description_short":"Explore the Netherlands' 12 provinces and over 4,000 km of canals!"},{"name":"Slovenia","slug":"slovenia","longDescription":"Explore Slovenia in GlobalGuessr! From the stunning Lake Bled to the charming streets of Ljubljana, experience the natural beauty and cultural heritage of this picturesque country.","shortDescription":"Discover Slovenia's enchanting landscapes and cities!","maxDist":262.014,"countryCode":"SI","extent":[13.375,45.421,16.6,46.876],"created_by_name":"GlobalGuessr","official":true,"countryMap":"SI","description_short":"Discover Slovenia's enchanting landscapes and cities!"},{"name":"Lesotho","slug":"lesotho","longDescription":"Explore Lesotho in GlobalGuessr! Known as the 'Kingdom in the Sky', experience its breathtaking mountain scenery and vibrant culture.","shortDescription":"Discover the unique beauty of Lesotho's highlands!","maxDist":242.916,"countryCode":"LS","extent":[27.011,-30.659,29.455,-28.57],"created_by_name":"GlobalGuessr","official":true,"countryMap":"LS","description_short":"Discover the unique beauty of Lesotho's highlands!"},{"name":"Montenegro","slug":"montenegro","longDescription":"Explore Montenegro in GlobalGuessr! From the stunning fjords of Kotor to the beautiful beaches, experience the breathtaking landscapes and rich history of this Balkan nation.","shortDescription":"Discover the scenic beauty of Montenegro!","maxDist":193.061,"countryCode":"ME","extent":[18.433,41.848,20.358,43.558],"created_by_name":"GlobalGuessr","official":true,"countryMap":"ME","description_short":"Discover the scenic beauty of Montenegro!"},{"name":"Singapore","slug":"singapore","longDescription":"Explore Singapore in GlobalGuessr! From the iconic skyline to the lush gardens, experience the vibrant culture and modern attractions of this city-state.","shortDescription":"Discover the dynamic city of Singapore!","maxDist":63.278,"countryCode":"SG","extent":[103.638,1.257,104.082,1.47],"created_by_name":"GlobalGuessr","official":true,"countryMap":"SG","description_short":"Discover the dynamic city of Singapore!"}]`),
    y2 = {
        loadingTimer: 5,
        roundTimer: 60,
        multiPlayerModalTimeout: 4,
        multiPlayerGuessTimeout: 4,
        multiPlayerNextRoundTimeout: 5,
        simulateAIMoves: 5,
        communityMap: .2,
        minDelay: 2,
        maxDelay: 6
    },
    I2 = (e, i) => {
        const r = e.__vccOpts || e;
        for (const [a, l] of i) r[a] = l;
        return r
    },
    ko = {
        class: "w-[98%] h-[100vh] bg-dark-gray py-5 px-8"
    },
    Ao = {
        class: "flex justify-center items-center my-5"
    },
    Fo = {
        class: "p-[1.5px] bg-white rounded-md"
    },
    Oo = {
        class: "w-[300px] md:w-[500px] lg:w-[700px] rounded-md p-2 border-2 border-white border-transparent focus-within:border-dark-gray"
    },
    Ro = {
        key: 0,
        class: "flex items-center justify-center h-[50vh]"
    },
    Do = {
        key: 1,
        class: "flex items-center justify-center flex-col"
    },
    No = {
        class: "p-4 bg-teal-700 rounded-md w-[100%] md:w-[80%]"
    },
    Bo = {
        class: "p-3 flex gap-5 cursor-pointer custom-scrollbar overflow-x-auto"
    },
    Go = {
        class: "flex gap-5"
    },
    zo = ["onClick"],
    Zo = {
        class: "text-white font-jockey_one ml-3 text-2xl bg-dark-gray inline-block px-2 py-1 rounded-md"
    },
    Ho = {
        __name: "CommunityMap",
        props: {
            communityMapStateFn: Function
        },
        setup(e) {
            const i = e,
                r = o2(),
                a = o1(!0),
                l = o1([]);
            JSON.parse(localStorage.getItem("countrySlug"));
            const c = q6.reduce((m, g, _) => {
                const x = Math.floor(_ / 3);
                return m[x] || (m[x] = []), m[x].push(g), m
            }, []),
                d = m => {
                    const g = m.target.value.toLowerCase(),
                        x = q6.filter(P => P.name.toLowerCase().includes(g)).reduce((P, E, C) => {
                            const G = Math.floor(C / 3);
                            return P[G] || (P[G] = []), P[G].push(E), P
                        }, []);
                    l.value = x
                },
                p = m => {
                    const g = m.slug;
                    r.push(`/community-map/${g}`), localStorage.setItem("countrySlug", JSON.stringify(m))
                },
                f = () => {
                    i.communityMapStateFn()
                };
            return O4(() => {
                l.value = c, setTimeout(() => {
                    a.value = !1
                }, y2.communityMap * 1e3)
            }), (m, g) => (X(), Q("div", ko, [w("div", {
                class: "w-full h-[200x] bg-white rounded-lg p-5 flex justify-between items-center relative"
            }, [w("div", null, [w("button", {
                class: "cartoon-button font-jockey_one bg-white rounded-lg shadow-lg py-2 px- w-[100px] text-2xl",
                onClick: f
            }, "Close")]), g[1] || (g[1] = w("div", {
                class: "text-dark-gray font-jockey_one text-4xl"
            }, " Maps ", -1)), g[2] || (g[2] = w("div", null, null, -1)), w("div", {
                class: "bg-white/10 backdrop-blur-md p-[4px] fixed right-[35px] top-[10px] cursor-pointer rounded-md border border-white/20 shadow-lg",
                onClick: f
            }, g[0] || (g[0] = [w("i", {
                class: "pi pi-times text-1xl text-white"
            }, null, -1)]))]), w("div", Ao, [w("div", Fo, [w("div", Oo, [w("input", {
                type: "text",
                placeholder: "Search for maps",
                class: "w-full placeholder-dark-gray placeholder:font-jocky_one text-2xl bg-transparent outline-none",
                onInput: d
            }, null, 32)])])]), a.value ? (X(), Q("div", Ro, g[3] || (g[3] = [w("p", {
                class: "text-4xl text-white flex items-center gap-16"
            }, [k1("Loading "), w("span", {
                class: "loader"
            })], -1)]))) : (X(), Q("div", Do, [w("div", No, [g[4] || (g[4] = w("div", {
                class: "text-white text-4xl font-jockey_one text-center"
            }, [w("p", null, "Official Country Maps")], -1)), w("div", Bo, [w("div", Go, [(X(!0), Q(y4, null, Pt(l.value, (_, x) => (X(), Q("div", {
                key: x,
                class: "flex flex-col gap-5"
            }, [(X(!0), Q(y4, null, Pt(_, (P, E) => (X(), Q("div", {
                key: E,
                class: "min-w-[250px] h-[80px] rounded-md bg-cover bg-center flex items-center transition-all duration-300 hover:scale-110",
                style: t3({
                    backgroundImage: `url(/countryImages/${P.countryMap.toLowerCase()}.png)`
                }),
                onClick: C => p(P)
            }, [w("p", Zo, L1(P.name), 1)], 12, zo))), 128))]))), 128))])])])]))]))
        }
    },
    ee = I2(Ho, [
        ["__scopeId", "data-v-3f6b5e0e"]
    ]),
    Uo = {
        key: 0,
        class: "z-[999999] flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 justify-center items-center w-full md:inset-0 h-full max-h-full"
    },
    $o = {
        key: 1,
        class: "z-[999999] flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 justify-center items-center w-full md:inset-0 h-full max-h-full"
    },
    jo = {
        __name: "Home",
        props: {},
        setup(e) {
            const i = o1(!1),
                r = o1(!1),
                a = o1(Number(localStorage.getItem("mapType")) || 1);
            n2(a, P => {
                a.value = P, localStorage.setItem("mapType", P)
            });
            const l = () => {
                Ot.push("/street-view"), localStorage.setItem("rounds", 1), localStorage.setItem("mapType", a.value), localStorage.setItem("singlePlayer", !0)
            },
                c = () => {
                    i.value = !i.value
                },
                d = () => {
                    r.value = !r.value
                },
                p = () => {
                    localStorage.setItem("rounds", 1), localStorage.setItem("mapType", a.value), localStorage.setItem("multiPlayer", !0), Ot.push("/multiplayerGame")
                },
                f = [new URL("" + new URL("3d-fantasy-scene-DnHnnu3F.jpg",
                    import.meta.url).href,
                    import.meta.url).href, new URL("" + new URL("concept-polygonal-cave-illustration-BEuOSqaM.jpg",
                        import.meta.url).href,
                        import.meta.url).href, new URL("" + new URL("40484395_8848672-BUkELxlR.jpg",
                            import.meta.url).href,
                            import.meta.url).href],
                m = o1(0),
                g = h4(() => f[m.value]);
            let _;
            return O4(() => {
                _ = setInterval(() => {
                    m.value = (m.value + 1) % f.length
                }, 5e3)
            }), Jt(() => clearInterval(_)), (P, E) => (X(), Q("div", {
                class: "home fixed w-full h-[100vh] top-0 bottom-0",
                style: t3({
                    backgroundImage: `url(${g.value})`
                })
            }, [E[9] || (E[9] = w("div", {
                class: "overlay w-full h-full absolute top-0 left-0"
            }, null, -1)), w("div", {
                class: "relative z-[99999] flex justify-center items-center flex-col gap-[15px] md:gap-[45px] lg:gap-[45px] h-[80%]"
            }, [E[5] || (E[5] = w("div", null, [w("h1", {
                class: "text-white text-6xl md:text-8xl lg:text-8xl mb-3 font-jockey_one"
            }, "GlobalGuesser")], -1)), w("div", {
                class: "text-white flex flex-col sm:flex-col md:flex-col lg:flex-row gap-[15px] items-center justify-center"
            }, [w("div", null, [w("button", {
                onClick: l,
                class: "cartoon-button text-shadow px-[6rem] py-[1rem] md:px-[6rem] md:py-[2.25rem] lg:px-[5rem] lg:py-[2.25rem] bg-single-player-btn-bg hover:bg-single-player-btn-hover-bg transition-all duration-300 rounded-md text-2xl font-jockey_one flex items-center gap-2"
            }, E[1] || (E[1] = [w("i", {
                class: "pi pi-user"
            }, null, -1), k1(" Singleplayer ")]))]), w("div", null, [w("button", {
                onClick: p,
                class: "cartoon-button text-shadow px-[6rem] py-[1rem] md:px-[6rem] md:py-[2.25rem] lg:px-[5rem] lg:py-[2.25rem] bg-single-player-btn-bg hover:bg-single-player-btn-hover-bg transition-all duration-300 rounded-md text-2xl font-jockey_one flex items-center gap-2"
            }, E[2] || (E[2] = [w("i", {
                class: "pi pi-users"
            }, null, -1), k1(" Multiplayer ")]))])]), w("div", {
                class: "flex flex-col sm:flex-col md:flex-col lg:flex-row gap-[15px]"
            }, [w("button", {
                class: "cartoon-button p-3 font-jockey_one text-shadow flex items-center gap-2",
                onClick: d
            }, E[3] || (E[3] = [w("i", {
                class: "pi pi-map"
            }, null, -1), k1(" Community Maps ")])), E[4] || (E[4] = w("a", {
                class: "cartoon-button p-3 font-jockey_one text-shadow flex items-center text-center gap-2",
                href: "https://freezenova.com",
                target: "_blank"
            }, [w("i", {
                class: "pi pi-external-link"
            }), k1(" More Games ")], -1))])]), w("div", {
                class: "fixed bottom-[10px] z-[99999] px-5 w-full"
            }, [w("div", {
                class: "flex items-end justify-between px-4 gap-5"
            }, [w("div", {
                onClick: c,
                class: "cursor-pointer px-4 py-2 md:p-4 lg:p-4 rounded-lg w-[70px] h-[50px] md:w-[100px] md:h-[80px] lg:w-[100px] lg:h-[80px] bg-icon-bg hover:bg-icon-hover-bg flex items-center justify-center"
            }, E[6] || (E[6] = [w("i", {
                class: "pi pi-spin pi-cog text-white text-4xl"
            }, null, -1)])), E[7] || (E[7] = w("p", {
                class: "text-white text-2xl"
            }, [w("a", {
                href: "mailto:contact@kickthebuddy.lol"
            }, " contact@kickthebuddy.lol ")], -1))])]), i.value ? (X(), Q("div", Uo, [E[8] || (E[8] = w("div", {
                class: "overlay absolute top-0 left-0 right-0 bottom-0 bg-dark-gray opacity-50"
            }, null, -1)), G1(Io, {
                updateSettingsState: c,
                "map-type": a.value,
                onUpdateMapType: E[0] || (E[0] = C => a.value = C)
            }, null, 8, ["map-type"])])) : E1("", !0), r.value ? (X(), Q("div", $o, [G1(ee, {
                communityMapStateFn: d
            })])) : E1("", !0)], 4))
        }
    },
    J6 = I2(jo, [
        ["__scopeId", "data-v-553f7581"]
    ]),
    Y6 = ["AR", "AU", "AT", "BE", "BR", "BG", "CA", "CL", "CO", "CZ", "DK", "FI", "FR", "DE", "GR", "HU", "IN", "ID", "IE", "IL", "IT", "JP", "KE", "MY", "MX", "NL", "NZ", "NG", "NO", "PE", "PH", "PL", "PT", "RO", "RU", "ZA", "ES", "SE", "CH", "TH", "TR", "GB", "US", "KR", "BD", "GH", "SI", "SK", "LS", "BT", "LK", "LT", "LV", "PA", "ME", "HR", "SG"],
    Wo = "FeatureCollection",
    Ko = JSON.parse(`[{"type":"Feature","properties":{"code":"AX","name":"Åland Islands","country":"Finland"},"geometry":{"type":"MultiPolygon","coordinates":[[[[19.082,60.192],[20.51,59.155],[21.355,59.675],[21.025,60.121],[21.082,60.202],[21.151,60.546],[20.967,60.715],[19.234,60.614],[19.082,60.192]]]]}},{"type":"Feature","properties":{"code":"AF","name":"Afghanistan"},"geometry":{"type":"MultiPolygon","coordinates":[[[[70.615,38.348],[70.604,38.28],[70.547,38.245],[70.49,38.125],[70.172,37.933],[70.186,37.843],[70.277,37.813],[70.282,37.667],[70.15,37.525],[69.96,37.566],[69.934,37.614],[69.844,37.606],[69.8,37.575],[69.519,37.584],[69.45,37.487],[69.366,37.405],[69.45,37.233],[69.395,37.168],[69.252,37.094],[69.033,37.252],[68.964,37.326],[68.882,37.334],[68.912,37.267],[68.809,37.325],[68.814,37.239],[68.68,37.279],[68.619,37.198],[68.419,37.139],[68.412,37.104],[68.293,37.106],[68.276,37.01],[68.185,37.021],[68.022,36.919],[67.879,37.059],[67.78,37.09],[67.783,37.183],[67.519,37.261],[67.258,37.172],[67.222,37.245],[67.13,37.272],[67.082,37.355],[66.956,37.402],[66.647,37.33],[66.557,37.354],[66.31,37.324],[65.723,37.554],[65.641,37.451],[65.643,37.344],[65.518,37.239],[64.979,37.219],[64.611,36.635],[64.625,36.443],[64.573,36.344],[64.433,36.244],[64.054,36.104],[63.985,36.038],[63.565,35.951],[63.535,35.909],[63.296,35.86],[63.123,35.862],[63.103,35.818],[63.233,35.675],[63.101,35.63],[63.123,35.532],[63.09,35.431],[62.909,35.371],[62.741,35.254],[62.623,35.221],[62.48,35.288],[62.299,35.133],[62.292,35.26],[62.159,35.333],[62.057,35.438],[61.977,35.46],[61.777,35.413],[61.587,35.438],[61.274,35.615],[61.182,35.302],[61.099,35.278],[61.128,35.099],[61.069,34.821],[61.002,34.706],[60.999,34.631],[60.723,34.529],[60.913,34.304],[60.665,34.315],[60.502,34.14],[60.584,33.808],[60.548,33.734],[60.578,33.598],[60.696,33.561],[60.911,33.556],[60.889,33.502],[60.565,33.129],[60.862,32.226],[60.845,31.496],[61.709,31.374],[61.806,31.162],[61.81,31.126],[61.833,31.045],[61.834,30.977],[61.783,30.927],[61.808,30.842],[60.872,29.865],[62.478,29.408],[63.588,29.505],[64.13,29.392],[64.198,29.504],[64.621,29.589],[65.04,29.54],[66.242,29.852],[66.36,29.958],[66.236,30.063],[66.349,30.404],[66.284,30.57],[66.392,30.941],[66.426,30.953],[66.582,30.975],[66.682,31.076],[66.726,31.205],[66.833,31.269],[67.041,31.316],[67.033,31.245],[67.3,31.196],[67.789,31.332],[67.775,31.419],[67.624,31.405],[67.583,31.528],[67.721,31.523],[67.869,31.635],[68.001,31.656],[68.165,31.827],[68.256,31.804],[68.276,31.759],[68.442,31.764],[68.575,31.832],[68.696,31.757],[68.8,31.617],[68.911,31.597],[68.96,31.648],[69.009,31.622],[69.115,31.708],[69.206,31.86],[69.323,31.932],[69.27,32.141],[69.279,32.291],[69.236,32.459],[69.287,32.539],[69.382,32.566],[69.447,32.668],[69.436,32.73],[69.38,32.766],[69.471,32.858],[69.544,32.877],[69.499,32.888],[69.49,33.015],[69.577,33.099],[69.715,33.099],[69.798,33.132],[69.853,33.095],[70.026,33.143],[70.074,33.226],[70.137,33.211],[70.328,33.345],[70.171,33.535],[70.201,33.644],[70.148,33.655],[70.142,33.717],[70.005,33.735],[69.857,33.937],[69.873,33.969],[69.902,34.042],[70.543,33.946],[70.881,33.979],[71.073,34.062],[71.069,34.106],[71.093,34.12],[71.095,34.135],[71.131,34.165],[71.128,34.266],[71.177,34.368],[71.024,34.448],[71.009,34.546],[71.116,34.63],[71.087,34.69],[71.284,34.809],[71.295,34.877],[71.503,34.973],[71.499,35.005],[71.553,35.026],[71.529,35.09],[71.675,35.213],[71.554,35.288],[71.543,35.31],[71.654,35.448],[71.499,35.627],[71.553,35.715],[71.38,35.959],[71.195,36.041],[71.605,36.394],[71.803,36.499],[72.181,36.718],[72.632,36.846],[73.827,36.914],[74.049,36.826],[74.434,37.01],[74.537,36.962],[74.565,37.03],[74.5,37.245],[74.806,37.216],[74.889,37.233],[74.829,37.343],[74.684,37.395],[74.562,37.377],[74.411,37.395],[74.233,37.411],[74.203,37.342],[73.856,37.262],[73.826,37.227],[73.65,37.236],[73.611,37.275],[73.766,37.339],[73.772,37.442],[73.296,37.465],[73.069,37.317],[72.797,37.222],[72.664,37.02],[72.541,37],[72.317,36.981],[71.832,36.681],[71.671,36.673],[71.572,36.749],[71.515,36.891],[71.485,36.932],[71.469,36.999],[71.456,37.031],[71.431,37.059],[71.441,37.119],[71.449,37.181],[71.456,37.214],[71.474,37.227],[71.483,37.239],[71.482,37.249],[71.485,37.26],[71.507,37.315],[71.498,37.32],[71.486,37.334],[71.477,37.403],[71.496,37.428],[71.526,37.48],[71.506,37.507],[71.497,37.535],[71.507,37.609],[71.52,37.619],[71.542,37.697],[71.552,37.732],[71.531,37.765],[71.543,37.771],[71.558,37.787],[71.593,37.8],[71.588,37.924],[71.516,37.953],[71.329,37.886],[71.296,37.934],[71.281,37.92],[71.25,37.93],[71.273,37.965],[71.276,37.999],[71.289,38.013],[71.299,38.044],[71.364,38.154],[71.378,38.256],[71.339,38.273],[71.331,38.303],[71.213,38.328],[71.145,38.401],[71.11,38.407],[71.106,38.421],[71.095,38.425],[71.056,38.402],[71.035,38.448],[70.987,38.489],[70.927,38.43],[70.887,38.468],[70.844,38.447],[70.825,38.454],[70.817,38.445],[70.805,38.444],[70.798,38.449],[70.787,38.45],[70.786,38.455],[70.771,38.455],[70.755,38.425],[70.725,38.413],[70.698,38.419],[70.674,38.406],[70.676,38.391],[70.692,38.37],[70.65,38.35],[70.615,38.348]]]]}},{"type":"Feature","properties":{"code":"US","name":"Alaska","country":"United States"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-154.709,55.937],[-133.929,54.623],[-130.619,54.708],[-130.645,54.769],[-130.442,54.854],[-130.272,54.972],[-130.188,55.077],[-130.08,55.216],[-129.975,55.28],[-130.154,55.749],[-130.009,55.913],[-130.001,56.003],[-130.102,56.122],[-130.34,56.108],[-130.778,56.362],[-131.827,56.622],[-133.385,58.428],[-133.846,58.735],[-134.272,58.863],[-134.481,59.132],[-134.557,59.13],[-134.705,59.246],[-135.003,59.287],[-135.031,59.562],[-135.48,59.799],[-136.316,59.591],[-136.224,59.555],[-136.337,59.445],[-136.473,59.466],[-136.524,59.168],[-136.826,59.162],[-137.493,58.894],[-137.606,59.245],[-138.621,59.764],[-138.711,59.907],[-139.054,59.997],[-139.206,60.089],[-139.058,60.352],[-139.69,60.337],[-139.98,60.18],[-140.456,60.309],[-140.523,60.221],[-141.001,60.306],[-140.993,71.036],[-153.523,71.266],[-154.709,55.937]]]]}},{"type":"Feature","properties":{"code":"AL","name":"Albania"},"geometry":{"type":"MultiPolygon","coordinates":[[[[20.078,42.556],[20.018,42.546],[20.008,42.511],[19.932,42.517],[19.823,42.466],[19.765,42.502],[19.747,42.574],[19.774,42.585],[19.732,42.663],[19.66,42.628],[19.484,42.408],[19.424,42.365],[19.42,42.33],[19.286,42.177],[19.407,42.1],[19.375,42.068],[19.369,42.026],[19.377,41.97],[19.346,41.957],[19.338,41.907],[19.382,41.885],[19.371,41.844],[19.204,40.344],[19.959,39.829],[19.976,39.787],[19.925,39.695],[19.98,39.65],[20.01,39.692],[20.052,39.691],[20.13,39.658],[20.16,39.652],[20.224,39.645],[20.227,39.675],[20.274,39.699],[20.32,39.728],[20.292,39.804],[20.308,39.816],[20.386,39.785],[20.415,39.814],[20.415,39.828],[20.311,39.994],[20.379,39.991],[20.424,40.068],[20.485,40.063],[20.513,40.082],[20.556,40.065],[20.611,40.079],[20.626,40.09],[20.672,40.094],[20.718,40.277],[20.782,40.358],[20.791,40.427],[20.837,40.479],[20.949,40.466],[20.969,40.515],[21.039,40.563],[21.058,40.666],[20.981,40.76],[20.958,40.77],[20.984,40.791],[20.979,40.855],[20.977,40.901],[20.943,40.924],[20.837,40.928],[20.816,40.897],[20.735,40.908],[20.716,40.918],[20.656,41.08],[20.635,41.089],[20.598,41.091],[20.585,41.112],[20.597,41.136],[20.511,41.232],[20.494,41.337],[20.521,41.344],[20.56,41.409],[20.513,41.442],[20.49,41.493],[20.453,41.514],[20.458,41.555],[20.521,41.565],[20.555,41.581],[20.518,41.66],[20.529,41.693],[20.513,41.724],[20.534,41.781],[20.571,41.79],[20.56,41.871],[20.595,41.882],[20.579,41.916],[20.631,41.949],[20.594,42.039],[20.556,42.082],[20.57,42.121],[20.489,42.254],[20.382,42.303],[20.345,42.327],[20.244,42.322],[20.218,42.412],[20.171,42.505],[20.078,42.556]]]]}},{"type":"Feature","properties":{"code":"GG","name":"Alderney","country":"United Kingdom"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-2.444,49.67],[-2.068,49.65],[-2.051,49.77],[-2.457,49.78],[-2.444,49.67]]]]}},{"type":"Feature","properties":{"code":"DZ","name":"Algeria"},"geometry":{"type":"MultiPolygon","coordinates":[[[[8.379,37.314],[1.659,37.108],[-2.277,35.351],[-2.212,35.085],[-2.214,35.044],[-2.047,34.932],[-1.978,34.932],[-1.975,34.886],[-1.737,34.742],[-1.846,34.619],[-1.698,34.481],[-1.78,34.39],[-1.647,34.104],[-1.735,33.717],[-1.595,33.599],[-1.671,33.271],[-1.462,33.05],[-1.542,32.955],[-1.378,32.736],[-0.991,32.525],[-1.25,32.33],[-1.245,32.192],[-1.157,32.121],[-1.228,32.078],[-2.462,32.166],[-2.939,32.066],[-2.828,31.795],[-3.663,31.634],[-3.664,31.392],[-3.776,31.319],[-3.771,31.15],[-3.549,31.05],[-3.654,30.856],[-3.647,30.675],[-4.318,30.532],[-4.606,30.283],[-5.217,29.953],[-5.588,29.481],[-5.721,29.523],[-5.756,29.614],[-6.7,29.516],[-6.784,29.446],[-6.958,29.509],[-7.616,29.363],[-8.671,28.712],[-8.669,27.667],[-8.667,27.316],[-4.834,24.999],[1.157,21.128],[1.21,20.735],[3.246,19.817],[3.125,19.137],[3.361,18.974],[4.267,19.142],[5.815,19.451],[7.384,20.792],[7.483,20.873],[11.969,23.517],[11.625,24.267],[11.411,24.215],[10.853,24.559],[10.332,24.547],[10.024,24.981],[10.031,25.356],[9.388,26.193],[9.517,26.391],[9.896,26.577],[9.781,29.41],[9.388,30.167],[9.555,30.24],[9.075,32.079],[8.36,32.501],[8.319,32.835],[8.118,33.051],[8.114,33.102],[7.83,33.189],[7.737,33.421],[7.541,33.773],[7.529,34.065],[7.662,34.202],[7.742,34.165],[7.812,34.218],[7.863,34.399],[8.205,34.576],[8.297,34.728],[8.252,34.92],[8.307,34.954],[8.355,35.1],[8.473,35.234],[8.303,35.299],[8.361,35.478],[8.354,35.664],[8.265,35.737],[8.263,35.917],[8.407,36.422],[8.189,36.449],[8.162,36.488],[8.476,36.666],[8.465,36.771],[8.576,36.781],[8.677,36.836],[8.63,36.865],[8.64,36.94],[8.379,37.314]]]]}},{"type":"Feature","properties":{"code":"IN","name":"Andaman and Nicobar Islands","country":"India"},"geometry":{"type":"MultiPolygon","coordinates":[[[[94.4,5.928],[93.746,13.772],[91.539,13.657],[91.972,8.37],[94.4,5.928]]]]}},{"type":"Feature","properties":{"code":"AD","name":"Andorra"},"geometry":{"type":"MultiPolygon","coordinates":[[[[1.725,42.503],[1.737,42.555],[1.786,42.577],[1.726,42.591],[1.735,42.615],[1.683,42.625],[1.663,42.62],[1.635,42.63],[1.601,42.627],[1.554,42.657],[1.509,42.645],[1.48,42.652],[1.467,42.633],[1.48,42.613],[1.442,42.602],[1.425,42.583],[1.445,42.567],[1.423,42.56],[1.412,42.535],[1.448,42.544],[1.467,42.509],[1.416,42.483],[1.438,42.478],[1.445,42.437],[1.513,42.43],[1.551,42.433],[1.559,42.458],[1.58,42.45],[1.589,42.463],[1.657,42.471],[1.668,42.508],[1.706,42.489],[1.725,42.503]]]]}},{"type":"Feature","properties":{"code":"AO","name":"Angola"},"geometry":{"type":"MultiPolygon","coordinates":[[[[16.555,-5.856],[13.044,-5.871],[12.422,-6.076],[11.958,-5.947],[12.204,-5.763],[12.266,-5.74],[12.523,-5.744],[12.523,-5.175],[12.536,-5.162],[12.536,-5.147],[12.516,-5.133],[12.498,-5.141],[12.463,-5.094],[12.603,-5.017],[12.635,-4.946],[12.709,-4.955],[12.873,-4.743],[13.112,-4.677],[13.096,-4.637],[12.915,-4.479],[12.871,-4.403],[12.768,-4.387],[12.648,-4.559],[12.41,-4.606],[12.323,-4.784],[12.256,-4.794],[12.209,-4.756],[12.161,-4.901],[12.009,-5.026],[11.585,-5.944],[11.451,-16.812],[11.751,-17.25],[12.071,-17.152],[12.521,-17.245],[12.971,-16.986],[13.362,-16.98],[13.959,-17.431],[14.287,-17.388],[18.392,-17.389],[18.842,-17.804],[21.143,-17.943],[21.427,-18.028],[23.475,-17.629],[23.2,-17.476],[22.172,-16.503],[22.003,-16.18],[21.98,-13.001],[24.033,-12.991],[23.909,-12.844],[24.067,-12.291],[23.988,-12.131],[24.026,-11.154],[24,-10.894],[23.869,-11.029],[23.456,-10.946],[23.166,-11.106],[22.542,-11.058],[22.26,-11.249],[22.18,-10.859],[22.326,-10.763],[22.19,-9.946],[21.849,-9.599],[21.798,-7.296],[20.563,-7.286],[20.617,-6.909],[20.318,-6.92],[20.302,-6.99],[19.547,-7.002],[19.337,-7.997],[18.336,-8.001],[17.583,-8.138],[16.963,-7.218],[16.555,-5.856]]]]}},{"type":"Feature","properties":{"code":"AI","name":"Anguilla"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-63.79,19.112],[-63.36,18.06],[-62.627,18.262],[-63.79,19.112]]]]}},{"type":"Feature","properties":{"code":"AQ","name":"Antarctica"},"geometry":{"type":"MultiPolygon","coordinates":[[[[180,-60],[-180,-60],[-180,-90],[180,-90],[180,-60]]]]}},{"type":"Feature","properties":{"code":"AG","name":"Antigua and Barbuda"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-61.67,18.678],[-62.583,16.689],[-62.102,16.973],[-61.231,16.625],[-61.67,18.678]]]]}},{"type":"Feature","properties":{"code":"AR","name":"Argentina"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-72.313,-50.584],[-72.339,-51.6],[-71.999,-51.98],[-69.978,-52.008],[-68.417,-52.335],[-68.607,-52.658],[-68.607,-54.913],[-68.014,-54.875],[-67.462,-54.922],[-67.11,-54.942],[-66.073,-55.196],[-63.485,-54.784],[-68.181,-52.469],[-62.446,-41.492],[-55.283,-36.739],[-57.931,-34.513],[-58.318,-34.15],[-58.444,-33.84],[-58.405,-33.118],[-58.122,-32.988],[-58.224,-32.524],[-58.1,-32.253],[-58.203,-31.87],[-58.001,-31.65],[-58.002,-31.531],[-58.076,-31.449],[-57.981,-31.387],[-57.991,-31.349],[-57.867,-31.064],[-57.895,-30.96],[-57.802,-30.772],[-57.891,-30.496],[-57.649,-30.351],[-57.615,-30.252],[-57.651,-30.192],[-57.094,-29.742],[-56.813,-29.482],[-56.628,-29.181],[-56.573,-29.114],[-56.542,-29.114],[-56.053,-28.627],[-56.005,-28.604],[-56.017,-28.512],[-55.654,-28.183],[-55.626,-28.171],[-55.333,-27.947],[-55.169,-27.862],[-55.135,-27.898],[-54.908,-27.731],[-54.902,-27.631],[-54.677,-27.572],[-54.504,-27.482],[-54.419,-27.409],[-54.193,-27.308],[-54.191,-27.276],[-54.16,-27.289],[-53.801,-27.098],[-53.734,-26.613],[-53.683,-26.334],[-53.645,-26.281],[-53.642,-26.26],[-53.646,-26.248],[-53.639,-26.251],[-53.637,-26.25],[-53.652,-26.233],[-53.65,-26.195],[-53.74,-26.1],[-53.734,-26.07],[-53.726,-26.066],[-53.731,-26.058],[-53.735,-26.042],[-53.837,-25.948],[-53.908,-25.555],[-54.529,-25.628],[-54.55,-25.589],[-54.594,-25.592],[-54.621,-25.912],[-54.607,-25.969],[-54.674,-25.986],[-54.693,-26.377],[-54.707,-26.451],[-54.809,-26.557],[-55.006,-26.788],[-55.064,-26.802],[-55.169,-26.961],[-55.252,-26.938],[-55.396,-26.977],[-55.623,-27.194],[-55.591,-27.324],[-55.745,-27.445],[-55.892,-27.347],[-56.183,-27.299],[-56.853,-27.517],[-58.042,-27.239],[-58.595,-27.3],[-58.653,-27.14],[-58.32,-26.834],[-58.119,-26.167],[-57.872,-25.936],[-57.574,-25.473],[-57.808,-25.139],[-58.255,-24.925],[-58.331,-24.971],[-59.339,-24.499],[-59.455,-24.348],[-60.034,-24.007],[-60.282,-24.044],[-60.998,-23.809],[-61.078,-23.629],[-61.976,-23.051],[-62.228,-22.558],[-62.518,-22.377],[-62.645,-22.251],[-62.808,-22.125],[-62.811,-21.999],[-63.665,-21.999],[-63.681,-22.054],[-63.71,-21.999],[-63.933,-21.999],[-64.229,-22.558],[-64.315,-22.888],[-64.351,-22.733],[-64.418,-22.677],[-64.589,-22.25],[-64.672,-22.19],[-64.9,-22.121],[-64.995,-22.083],[-65.474,-22.089],[-65.577,-22.077],[-65.587,-22.098],[-65.612,-22.095],[-65.747,-22.101],[-65.926,-21.933],[-66.048,-21.919],[-66.038,-21.848],[-66.241,-21.778],[-66.297,-22.087],[-66.73,-22.236],[-67.184,-22.815],[-66.996,-22.998],[-67.336,-24.042],[-68.248,-24.426],[-68.569,-24.698],[-68.384,-25.086],[-68.576,-25.325],[-68.384,-26.154],[-68.569,-26.281],[-68.59,-26.499],[-68.277,-26.906],[-68.434,-27.084],[-68.776,-27.16],[-69.225,-27.95],[-69.667,-28.441],[-69.81,-29.072],[-69.995,-29.284],[-69.86,-30.261],[-70.145,-30.366],[-70.558,-31.516],[-69.881,-33.345],[-69.874,-34.133],[-70.494,-35.241],[-70.38,-36.024],[-70.95,-36.432],[-71.243,-37.203],[-70.895,-38.692],[-71.378,-38.915],[-71.927,-40.727],[-71.749,-42.117],[-72.155,-42.159],[-72.148,-42.853],[-71.642,-43.648],[-71.813,-44.381],[-71.164,-44.462],[-71.264,-44.757],[-72.07,-44.818],[-71.357,-45.221],[-71.756,-45.616],[-71.686,-46.554],[-71.942,-47.136],[-72.505,-47.806],[-72.277,-48.287],[-72.54,-48.524],[-72.569,-48.811],[-73.097,-49.143],[-72.979,-49.787],[-73.452,-49.795],[-73.553,-49.925],[-73.158,-50.783],[-72.313,-50.584]]]]}},{"type":"Feature","properties":{"code":"AM","name":"Armenia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[45.013,41.297],[44.935,41.257],[44.814,41.304],[44.801,41.259],[44.817,41.235],[44.844,41.231],[44.899,41.214],[44.879,41.202],[44.821,41.215],[44.728,41.203],[44.615,41.24],[44.593,41.193],[44.468,41.182],[44.344,41.238],[44.343,41.203],[44.321,41.208],[44.181,41.246],[44.166,41.191],[43.848,41.163],[43.747,41.112],[43.677,41.134],[43.472,41.126],[43.45,41.099],[43.473,41.023],[43.587,40.99],[43.677,40.931],[43.677,40.848],[43.749,40.736],[43.742,40.668],[43.637,40.542],[43.548,40.474],[43.609,40.433],[43.599,40.34],[43.711,40.167],[43.652,40.149],[43.657,40.112],[43.923,40.018],[44.106,40.036],[44.178,40.028],[44.27,40.049],[44.466,39.977],[44.618,39.828],[44.758,39.715],[44.884,39.744],[44.929,39.722],[45.066,39.793],[45.186,39.678],[45.175,39.586],[45.218,39.581],[45.235,39.614],[45.304,39.614],[45.296,39.577],[45.47,39.499],[45.705,39.602],[45.808,39.567],[45.83,39.465],[45.792,39.37],[45.998,39.289],[46.023,39.1],[46.07,39.074],[46.148,38.842],[46.206,38.853],[46.341,38.921],[46.535,38.865],[46.518,38.95],[46.543,39.071],[46.44,39.196],[46.526,39.189],[46.541,39.159],[46.58,39.212],[46.635,39.23],[46.565,39.249],[46.501,39.337],[46.432,39.352],[46.378,39.42],[46.401,39.454],[46.531,39.478],[46.51,39.524],[46.577,39.544],[46.571,39.567],[46.521,39.587],[46.425,39.575],[46.403,39.637],[46.185,39.605],[45.965,39.789],[45.825,39.829],[45.783,39.947],[45.609,39.977],[45.598,40.013],[45.786,40.032],[45.838,39.989],[45.979,40.181],[45.956,40.278],[45.651,40.377],[45.43,40.538],[45.455,40.577],[45.354,40.66],[45.421,40.742],[45.559,40.784],[45.606,40.874],[45.408,40.979],[45.441,41.017],[45.397,41.026],[45.357,40.998],[45.289,41.038],[45.262,41.023],[45.259,41.003],[45.199,41.045],[45.165,41.051],[45.163,41.081],[45.131,41.094],[45.129,41.061],[45.068,41.054],[45.08,41.109],[45.199,41.133],[45.197,41.168],[45.118,41.2],[45.052,41.192],[45.029,41.21],[45.055,41.246],[45.013,41.297]],[[45.213,40.982],[45.212,40.99],[45.205,40.993],[45.193,40.99],[45.184,41.007],[45.206,41.015],[45.235,41.002],[45.231,40.978],[45.213,40.982]],[[45.009,41.034],[44.99,41.057],[44.96,41.063],[44.954,41.076],[44.972,41.092],[45.009,41.094],[45.034,41.079],[45.045,41.067],[45.038,41.039],[45.009,41.034]]],[[[45.503,40.584],[45.561,40.648],[45.518,40.674],[45.479,40.65],[45.503,40.584]]]]}},{"type":"Feature","properties":{"code":"AW","name":"Aruba","country":"Netherlands"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-69.968,12.697],[-70.173,12.57],[-69.819,12.345],[-69.968,12.697]]]]}},{"type":"Feature","properties":{"code":"RU","name":"Asian Russia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[59.998,51.983],[60.199,51.992],[60.489,52.152],[60.726,52.155],[60.782,52.221],[61.054,52.351],[60.98,52.501],[60.847,52.522],[60.841,52.639],[60.717,52.662],[60.72,52.759],[61.058,52.922],[61.235,53.032],[62.042,52.961],[62.128,52.991],[62.146,53.096],[61.19,53.305],[61.143,53.415],[61.291,53.51],[61.38,53.459],[61.572,53.501],[61.557,53.571],[60.906,53.629],[61.226,53.803],[61.143,53.901],[60.998,53.937],[61.269,53.928],[61.371,54.085],[61.476,54.08],[61.569,53.957],[61.653,54.024],[62.039,53.948],[62.01,54.041],[62.385,54.04],[62.459,53.907],[62.569,53.94],[62.587,54.059],[63.806,54.271],[63.912,54.2],[64.027,54.227],[63.977,54.298],[64.972,54.421],[65.11,54.33],[65.247,54.357],[65.202,54.552],[68.213,54.986],[68.267,55.092],[68.192,55.188],[68.909,55.381],[69.342,55.363],[69.749,55.355],[70.192,55.148],[70.765,55.303],[70.96,55.106],[71.083,54.713],[71.242,54.65],[71.087,54.334],[71.104,54.133],[71.961,54.177],[72.175,54.363],[72.434,53.927],[72.71,54.116],[73.38,53.961],[73.748,54.072],[73.689,53.865],[73.254,53.615],[73.392,53.446],[75.074,53.808],[75.434,53.987],[75.367,54.074],[76.911,54.468],[76.823,54.18],[76.441,54.16],[76.542,53.993],[77.904,53.298],[79.113,52.012],[80.081,50.777],[80.413,50.956],[80.448,51.209],[80.803,51.283],[81.17,51.157],[81.061,50.948],[81.412,50.975],[81.466,50.777],[81.95,50.793],[82.554,50.754],[83.146,51.008],[83.844,50.874],[84.294,50.273],[84.992,50.068],[85.24,49.602],[86.187,49.503],[86.637,49.801],[86.791,49.748],[86.613,49.602],[86.826,49.518],[87.031,49.251],[87.315,49.236],[87.284,49.116],[87.478,49.074],[87.813,49.174],[87.99,49.181],[88.155,49.303],[88.172,49.469],[88.424,49.488],[88.825,49.448],[89.707,49.725],[89.597,49.909],[91.86,50.737],[92.072,50.696],[92.447,50.788],[93.011,50.79],[92.996,50.632],[94.308,50.575],[94.393,50.222],[94.495,50.178],[94.612,50.042],[94.972,50.047],[95.025,49.969],[95.748,49.979],[95.801,50.042],[96.974,49.884],[97.246,49.747],[97.568,49.843],[97.564,49.928],[97.769,49.999],[97.852,49.913],[98.295,50.336],[98.314,50.5],[98.064,50.613],[97.969,50.78],[98.015,50.867],[97.833,51.002],[98.053,51.467],[98.221,51.466],[98.332,51.718],[98.741,51.864],[98.878,52.146],[99.279,51.969],[99.756,51.901],[99.892,51.749],[100.611,51.73],[101.391,51.458],[101.504,51.505],[102.14,51.356],[102.322,50.68],[102.712,50.389],[103.703,50.14],[105.325,50.465],[106.056,50.406],[106.079,50.335],[106.472,50.319],[106.496,50.324],[106.511,50.344],[106.584,50.34],[106.803,50.302],[107,50.198],[107.117,50.042],[107.364,49.976],[107.961,49.932],[107.954,49.667],[108.279,49.532],[108.54,49.323],[109.18,49.347],[109.513,49.229],[110.244,49.167],[110.399,49.251],[110.645,49.182],[113.026,49.608],[113.202,49.834],[114.325,50.281],[114.97,50.193],[115.261,49.974],[115.736,49.877],[116.224,50.045],[116.625,49.929],[116.712,49.838],[117.276,49.625],[117.482,49.623],[117.823,49.527],[118.616,49.938],[119.11,50.003],[119.28,50.133],[119.386,50.352],[119.136,50.374],[120.11,51.671],[120.659,51.935],[120.773,52.208],[120.613,52.324],[120.717,52.541],[120.465,52.638],[120.04,52.588],[120.045,52.736],[120.856,53.285],[121.392,53.319],[122.351,53.496],[122.86,53.474],[123.27,53.548],[123.862,53.494],[124.461,53.219],[125.175,53.202],[125.613,53.072],[126.558,52.137],[126.446,51.983],[126.683,51.706],[126.904,51.324],[126.931,51.084],[127.146,50.912],[127.282,50.721],[127.363,50.583],[127.288,50.466],[127.36,50.438],[127.374,50.284],[127.605,50.235],[127.493,50.013],[127.535,49.843],[127.835,49.575],[128.729,49.587],[129.112,49.368],[129.232,49.404],[129.353,49.348],[129.404,49.442],[129.507,49.424],[129.676,49.296],[129.854,49.111],[130.236,48.867],[130.432,48.908],[130.669,48.883],[130.521,48.617],[130.845,48.309],[130.651,48.101],[130.909,47.906],[130.96,47.696],[131.099,47.685],[131.263,47.733],[131.904,47.68],[132.573,47.717],[132.67,47.965],[134.495,48.429],[134.753,48.368],[134.671,48.156],[134.555,47.987],[134.767,47.721],[134.509,47.481],[134.2,47.335],[134.035,46.757],[133.841,46.467],[133.915,46.427],[133.881,46.251],[133.68,46.147],[133.727,46.056],[133.676,45.976],[133.604,45.901],[133.485,45.862],[133.411,45.577],[133.194,45.519],[133.093,45.257],[133.123,45.133],[132.964,45.021],[132.84,45.059],[131.994,45.257],[131.869,45.336],[131.765,45.226],[131.669,45.22],[131.685,45.124],[131.484,44.995],[130.956,44.852],[131.111,44.703],[131.304,44.043],[131.255,44.031],[131.236,43.961],[131.262,43.94],[131.211,43.824],[131.195,43.53],[131.294,43.467],[131.303,43.395],[131.19,43.214],[131.204,43.137],[131.103,43.047],[131.135,42.941],[131.027,42.912],[131.024,42.865],[130.665,42.848],[130.444,42.762],[130.402,42.708],[130.566,42.689],[130.621,42.584],[130.551,42.522],[130.568,42.433],[130.608,42.432],[130.642,42.414],[130.664,42.38],[130.65,42.323],[130.754,42.259],[133.001,42.098],[140.918,45.929],[143.239,45.522],[145.629306,44.260937],[145.283194,43.794889],[146.098932,43.229195],[182.814622,62.124436],[191.733449,66.071546],[175.43751,70.78691],[120.761863,74.307353],[106.349937,78.061989],[68.024515,73.82482],[64.19,69.943],[66.171,67.613],[61.98,65.722],[60.744,64.958],[59.639,64.784],[59.806,64.139],[59.248,63.019],[59.614,62.449],[59.362,61.388],[59.507,60.912],[58.385,59.487],[59.156,59.147],[59.404,58.458],[58.711,58.075],[58.814,57.716],[58.138,57.681],[58.076,57.083],[57.28,56.879],[57.515,56.087],[59.284,56.157],[59.49,55.605],[58.818,55.034],[57.251,55.263],[57.148,54.842],[57.952,54.397],[59.952,54.859],[59.705,54.148],[58.943,53.953],[58.796,52.434],[59.224,52.284],[59.25,52.468],[60.175,52.395],[60.173,52.258],[59.913,52.069],[59.998,51.983]]]]}},{"type":"Feature","properties":{"code":"AU","name":"Australia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[114.587,-36.191],[129.88,-32.981],[141.921,-39.156],[150.337,-39.147],[156.313,-25.165],[143.979,-9.568],[143.298,-9.34],[142.487,-9.368],[142.192,-9.154],[141.889,-9.361],[135.49,-9.228],[122.15,-11.525],[111.182,-21.861],[114.587,-36.191]]]]}},{"type":"Feature","properties":{"code":"AT","name":"Austria"},"geometry":{"type":"MultiPolygon","coordinates":[[[[15.348,48.984],[15.283,48.988],[15.262,48.958],[15.164,48.943],[15.155,48.991],[14.999,49.014],[14.976,48.97],[14.989,48.901],[14.951,48.791],[14.98,48.78],[14.978,48.777],[14.981,48.775],[14.976,48.769],[14.956,48.759],[14.948,48.763],[14.815,48.787],[14.808,48.777],[14.806,48.735],[14.728,48.695],[14.718,48.598],[14.668,48.582],[14.608,48.629],[14.561,48.604],[14.459,48.647],[14.431,48.589],[14.339,48.559],[14.207,48.59],[14.091,48.594],[14.015,48.638],[14.062,48.669],[13.84,48.77],[13.823,48.755],[13.819,48.733],[13.793,48.714],[13.818,48.698],[13.813,48.684],[13.819,48.676],[13.826,48.623],[13.8,48.595],[13.805,48.58],[13.769,48.553],[13.751,48.562],[13.748,48.531],[13.728,48.512],[13.661,48.536],[13.652,48.551],[13.625,48.555],[13.597,48.57],[13.575,48.559],[13.513,48.59],[13.501,48.581],[13.507,48.575],[13.47,48.552],[13.452,48.565],[13.437,48.558],[13.457,48.511],[13.425,48.457],[13.439,48.434],[13.407,48.373],[13.309,48.316],[13.26,48.294],[13.181,48.296],[13.126,48.279],[13.085,48.277],[13.021,48.257],[12.953,48.206],[12.871,48.203],[12.845,48.166],[12.836,48.165],[12.836,48.159],[12.827,48.152],[12.807,48.15],[12.786,48.124],[12.762,48.128],[12.75,48.109],[12.761,48.074],[12.855,48.011],[12.875,47.962],[12.917,47.956],[12.921,47.951],[12.92,47.941],[12.927,47.939],[12.934,47.941],[12.936,47.944],[12.939,47.94],[12.942,47.929],[13.006,47.844],[12.985,47.829],[12.963,47.8],[12.932,47.773],[12.944,47.763],[12.935,47.748],[12.917,47.74],[12.903,47.725],[12.913,47.718],[12.93,47.711],[12.986,47.708],[13.014,47.721],[13.077,47.688],[13.096,47.633],[13.064,47.601],[13.066,47.586],[13.045,47.582],[13.054,47.563],[13.033,47.534],[13.045,47.494],[13,47.463],[12.983,47.487],[12.962,47.475],[12.853,47.527],[12.847,47.546],[12.807,47.545],[12.774,47.58],[12.821,47.615],[12.765,47.645],[12.778,47.667],[12.736,47.679],[12.607,47.674],[12.574,47.632],[12.538,47.636],[12.501,47.623],[12.441,47.674],[12.439,47.698],[12.372,47.684],[12.336,47.695],[12.28,47.688],[12.26,47.677],[12.24,47.695],[12.262,47.735],[12.254,47.743],[12.226,47.718],[12.183,47.701],[12.162,47.701],[12.168,47.682],[12.183,47.667],[12.185,47.66],[12.199,47.641],[12.208,47.611],[12.204,47.607],[12.186,47.605],[12.177,47.601],[12.181,47.61],[12.178,47.615],[12.137,47.606],[12.058,47.617],[12.023,47.61],[12.009,47.625],[11.856,47.602],[11.841,47.584],[11.639,47.592],[11.607,47.579],[11.588,47.555],[11.586,47.523],[11.526,47.509],[11.436,47.514],[11.381,47.475],[11.418,47.446],[11.338,47.449],[11.296,47.426],[11.278,47.4],[11.22,47.396],[11.252,47.433],[11.205,47.432],[11.125,47.412],[11.118,47.397],[10.971,47.396],[10.971,47.416],[10.985,47.429],[10.924,47.47],[10.938,47.48],[10.909,47.486],[10.871,47.479],[10.869,47.502],[10.913,47.513],[10.888,47.537],[10.776,47.517],[10.76,47.532],[10.697,47.543],[10.688,47.558],[10.635,47.559],[10.603,47.568],[10.569,47.536],[10.488,47.541],[10.473,47.586],[10.435,47.584],[10.45,47.552],[10.432,47.501],[10.443,47.485],[10.463,47.479],[10.474,47.433],[10.436,47.412],[10.432,47.385],[10.399,47.376],[10.334,47.308],[10.233,47.271],[10.175,47.272],[10.176,47.291],[10.215,47.31],[10.2,47.328],[10.238,47.376],[10.228,47.389],[10.213,47.38],[10.176,47.389],[10.164,47.367],[10.118,47.372],[10.098,47.357],[10.069,47.407],[10.105,47.432],[10.09,47.46],[10.071,47.455],[10.039,47.489],[10,47.482],[9.96,47.539],[9.924,47.531],[9.877,47.547],[9.875,47.53],[9.819,47.547],[9.826,47.582],[9.803,47.594],[9.767,47.593],[9.727,47.535],[9.551,47.536],[9.563,47.495],[9.582,47.483],[9.595,47.463],[9.602,47.462],[9.605,47.464],[9.608,47.472],[9.622,47.459],[9.625,47.457],[9.642,47.456],[9.657,47.454],[9.659,47.448],[9.645,47.438],[9.645,47.432],[9.65,47.419],[9.651,47.405],[9.663,47.396],[9.673,47.392],[9.674,47.384],[9.671,47.378],[9.662,47.371],[9.654,47.368],[9.625,47.366],[9.6,47.347],[9.585,47.313],[9.559,47.299],[9.548,47.281],[9.531,47.27],[9.568,47.243],[9.552,47.226],[9.57,47.219],[9.583,47.207],[9.565,47.171],[9.626,47.147],[9.634,47.084],[9.612,47.077],[9.607,47.061],[9.879,47.013],[9.883,46.933],[9.981,46.914],[10.107,46.843],[10.227,46.869],[10.241,46.931],[10.3,46.921],[10.369,47.002],[10.484,46.939],[10.472,46.857],[10.548,46.845],[10.664,46.876],[10.758,46.823],[10.73,46.79],[11.008,46.769],[11.106,46.93],[11.334,46.999],[11.507,47.006],[11.748,46.985],[12.193,47.093],[12.218,47.04],[12.117,47.012],[12.201,46.889],[12.276,46.887],[12.387,46.715],[12.6,46.66],[12.944,46.604],[13.276,46.561],[13.641,46.534],[13.715,46.522],[13.898,46.523],[14.004,46.485],[14.04,46.491],[14.121,46.477],[14.16,46.433],[14.283,46.443],[14.314,46.433],[14.426,46.446],[14.459,46.417],[14.522,46.426],[14.565,46.372],[14.594,46.434],[14.669,46.449],[14.722,46.5],[14.818,46.51],[14.835,46.566],[14.864,46.594],[14.871,46.61],[14.923,46.608],[14.96,46.635],[14.98,46.601],[15.015,46.641],[15.142,46.661],[15.237,46.64],[15.412,46.656],[15.455,46.637],[15.469,46.613],[15.544,46.631],[15.553,46.65],[15.545,46.67],[15.598,46.689],[15.623,46.679],[15.633,46.681],[15.636,46.689],[15.654,46.692],[15.654,46.706],[15.674,46.707],[15.695,46.698],[15.723,46.695],[15.738,46.7],[15.768,46.699],[15.785,46.707],[15.816,46.719],[15.877,46.721],[15.949,46.688],[15.985,46.685],[16,46.679],[16.04,46.655],[16.043,46.687],[16.028,46.711],[15.998,46.727],[15.984,46.75],[15.991,46.782],[15.991,46.828],[16.058,46.839],[16.11,46.867],[16.199,46.941],[16.224,46.939],[16.276,46.964],[16.282,47.002],[16.514,47.001],[16.439,47.035],[16.522,47.057],[16.461,47.094],[16.529,47.14],[16.449,47.144],[16.464,47.168],[16.452,47.188],[16.428,47.184],[16.417,47.206],[16.437,47.211],[16.441,47.251],[16.478,47.259],[16.451,47.412],[16.499,47.394],[16.524,47.41],[16.572,47.409],[16.672,47.461],[16.648,47.502],[16.711,47.527],[16.642,47.631],[16.587,47.618],[16.422,47.665],[16.551,47.723],[16.535,47.738],[16.548,47.751],[16.612,47.762],[16.657,47.742],[16.721,47.735],[16.751,47.679],[16.829,47.684],[16.865,47.723],[16.875,47.689],[17.089,47.709],[17.05,47.794],[17.07,47.811],[17.01,47.862],[17.083,47.877],[17.11,47.925],[17.098,47.973],[17.16,48.006],[17.07,48.032],[17.092,48.094],[17.057,48.142],[17.029,48.14],[16.977,48.174],[16.895,48.313],[16.909,48.325],[16.842,48.353],[16.833,48.381],[16.836,48.384],[16.85,48.383],[16.852,48.45],[16.946,48.536],[16.94,48.604],[16.904,48.715],[16.798,48.71],[16.719,48.738],[16.685,48.728],[16.67,48.777],[16.461,48.809],[16.409,48.746],[16.373,48.729],[16.06,48.754],[15.844,48.869],[15.781,48.876],[15.753,48.852],[15.692,48.86],[15.616,48.895],[15.514,48.915],[15.48,48.945],[15.348,48.984]]]]}},{"type":"Feature","properties":{"code":"AZ","name":"Azerbaijan"},"geometry":{"type":"MultiPolygon","coordinates":[[[[46.427,41.913],[46.398,41.844],[46.309,41.791],[46.24,41.758],[46.205,41.772],[46.179,41.721],[46.198,41.623],[46.244,41.599],[46.265,41.633],[46.282,41.601],[46.325,41.609],[46.34,41.595],[46.341,41.575],[46.298,41.572],[46.339,41.496],[46.403,41.485],[46.467,41.433],[46.637,41.377],[46.724,41.286],[46.661,41.205],[46.64,41.095],[46.551,41.11],[46.486,41.058],[46.456,41.1],[46.377,41.108],[46.277,41.19],[46.132,41.195],[45.958,41.18],[45.808,41.223],[45.699,41.295],[45.757,41.352],[45.71,41.362],[45.684,41.354],[45.46,41.459],[45.401,41.424],[45.314,41.472],[45.263,41.464],[45.18,41.422],[45.099,41.341],[45.013,41.297],[45.055,41.246],[45.029,41.21],[45.052,41.192],[45.118,41.2],[45.197,41.168],[45.199,41.133],[45.08,41.109],[45.068,41.054],[45.129,41.061],[45.131,41.094],[45.163,41.081],[45.165,41.051],[45.199,41.045],[45.259,41.003],[45.262,41.023],[45.289,41.038],[45.357,40.998],[45.397,41.026],[45.441,41.017],[45.408,40.979],[45.606,40.874],[45.559,40.784],[45.421,40.742],[45.354,40.66],[45.455,40.577],[45.43,40.538],[45.651,40.377],[45.956,40.278],[45.979,40.181],[45.838,39.989],[45.786,40.032],[45.598,40.013],[45.609,39.977],[45.783,39.947],[45.825,39.829],[45.965,39.789],[46.185,39.605],[46.403,39.637],[46.425,39.575],[46.521,39.587],[46.571,39.567],[46.577,39.544],[46.51,39.524],[46.531,39.478],[46.401,39.454],[46.378,39.42],[46.432,39.352],[46.501,39.337],[46.565,39.249],[46.635,39.23],[46.58,39.212],[46.541,39.159],[46.526,39.189],[46.44,39.196],[46.543,39.071],[46.518,38.95],[46.535,38.865],[46.758,39.032],[46.838,39.131],[46.925,39.166],[46.953,39.135],[47.058,39.201],[47.059,39.248],[47.313,39.375],[47.39,39.46],[47.501,39.496],[47.848,39.663],[47.99,39.71],[48.343,39.429],[48.374,39.376],[48.16,39.3],[48.124,39.252],[48.154,39.194],[48.312,39.093],[48.339,39.03],[48.284,38.972],[48.086,38.944],[48.077,38.916],[48.014,38.903],[48.026,38.827],[48.248,38.719],[48.315,38.6],[48.451,38.61],[48.588,38.451],[48.622,38.402],[48.7,38.406],[48.79,38.45],[48.811,38.449],[48.85,38.45],[48.883,38.44],[51.095,40.244],[48.81,41.954],[48.587,41.843],[48.551,41.779],[48.423,41.654],[48.403,41.604],[48.288,41.562],[48.221,41.515],[48.076,41.5],[47.88,41.218],[47.758,41.195],[47.623,41.23],[47.545,41.203],[47.49,41.264],[47.346,41.279],[47.108,41.59],[47.038,41.554],[46.996,41.597],[47.01,41.636],[46.813,41.763],[46.753,41.862],[46.589,41.805],[46.533,41.874],[46.427,41.913]],[[45.503,40.584],[45.479,40.65],[45.518,40.674],[45.561,40.648],[45.503,40.584]]],[[[45.009,41.034],[45.038,41.039],[45.045,41.067],[45.034,41.079],[45.009,41.094],[44.972,41.092],[44.954,41.076],[44.96,41.063],[44.99,41.057],[45.009,41.034]]],[[[45.213,40.982],[45.231,40.978],[45.235,41.002],[45.206,41.015],[45.184,41.007],[45.193,40.99],[45.205,40.993],[45.212,40.99],[45.213,40.982]]],[[[45.47,39.499],[45.296,39.577],[45.304,39.614],[45.235,39.614],[45.218,39.581],[45.175,39.586],[45.186,39.678],[45.066,39.793],[44.929,39.722],[44.884,39.744],[44.758,39.715],[44.81,39.658],[44.81,39.627],[44.889,39.597],[44.967,39.43],[45.059,39.364],[45.088,39.351],[45.162,39.22],[45.305,39.183],[45.401,39.09],[45.405,39.072],[45.448,39.049],[45.45,38.992],[45.613,38.964],[45.615,38.943],[45.652,38.952],[45.839,38.908],[45.903,38.877],[45.946,38.891],[46.002,38.874],[46.068,38.879],[46.148,38.842],[46.07,39.074],[46.023,39.1],[45.998,39.289],[45.792,39.37],[45.83,39.465],[45.808,39.567],[45.705,39.602],[45.47,39.499]]]]}},{"type":"Feature","properties":{"code":"PT","name":"Azores","country":"Portugal"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-24.977,37.831],[-27.279,38.912],[-27.51,38.705],[-25.464,37.547],[-24.977,37.831]]]]}},{"type":"Feature","properties":{"code":"BH","name":"Bahrain"},"geometry":{"type":"MultiPolygon","coordinates":[[[[50.939,26.308],[50.718,26.731],[50.382,26.54],[50.269,26.082],[50.302,25.876],[50.571,25.579],[50.808,25.546],[50.78,25.595],[50.861,25.697],[50.813,25.889],[50.939,26.308]]]]}},{"type":"Feature","properties":{"code":"ES","name":"Balearic Islands","country":"Spain"},"geometry":{"type":"MultiPolygon","coordinates":[[[[0.948,39.002],[1.541,38.383],[4.735,39.922],[3.576,40.33],[0.948,39.002]]]]}},{"type":"Feature","properties":{"code":"BD","name":"Bangladesh"},"geometry":{"type":"MultiPolygon","coordinates":[[[[89.159,26.137],[89.089,26.388],[88.956,26.456],[88.924,26.407],[88.913,26.38],[89.053,26.247],[88.85,26.232],[88.79,26.311],[88.678,26.263],[88.695,26.384],[88.621,26.468],[88.43,26.545],[88.412,26.638],[88.331,26.489],[88.352,26.452],[88.369,26.487],[88.487,26.459],[88.516,26.359],[88.352,26.291],[88.348,26.222],[88.184,26.144],[88.166,26.024],[88.088,25.913],[88.131,25.788],[88.242,25.808],[88.451,25.662],[88.456,25.592],[88.677,25.47],[88.813,25.515],[88.853,25.347],[89.011,25.303],[89.005,25.266],[88.941,25.185],[88.448,25.201],[88.463,25.075],[88.339,24.868],[88.273,24.888],[88.218,24.966],[88.14,24.935],[88.155,24.858],[88.007,24.665],[88.088,24.632],[88.123,24.513],[88.509,24.325],[88.688,24.315],[88.748,24.196],[88.698,24.147],[88.737,23.918],[88.662,23.876],[88.581,23.871],[88.565,23.64],[88.748,23.474],[88.794,23.505],[88.793,23.46],[88.711,23.249],[88.991,23.211],[88.864,23.088],[88.883,23.039],[88.871,22.952],[88.967,22.833],[88.915,22.752],[88.946,22.669],[88.937,22.585],[89.071,22.153],[89.08,21.419],[92.474,20.387],[92.261,21.057],[92.178,21.174],[92.201,21.337],[92.379,21.478],[92.432,21.37],[92.551,21.386],[92.602,21.246],[92.682,21.285],[92.598,21.609],[92.622,21.87],[92.609,21.976],[92.566,22.136],[92.6,22.152],[92.518,22.714],[92.377,22.944],[92.382,23.287],[92.265,23.704],[92.154,23.734],[92.047,23.642],[91.951,23.733],[91.956,23.474],[91.848,23.422],[91.764,23.266],[91.816,23.08],[91.732,23],[91.616,22.939],[91.55,23.011],[91.466,23.233],[91.403,23.275],[91.408,23.071],[91.365,23.066],[91.283,23.375],[91.156,23.66],[91.252,23.835],[91.223,23.896],[91.296,24.004],[91.357,23.991],[91.374,24.107],[91.555,24.087],[91.638,24.113],[91.653,24.221],[91.733,24.147],[91.76,24.238],[91.826,24.223],[91.893,24.147],[91.966,24.38],[92.117,24.39],[92.158,24.544],[92.259,24.919],[92.386,24.861],[92.499,24.888],[92.391,25.015],[92.34,25.076],[92.032,25.183],[91.636,25.128],[91.255,25.207],[90.874,25.158],[90.65,25.178],[90.4,25.153],[90.115,25.227],[89.905,25.31],[89.876,25.283],[89.834,25.295],[89.841,25.319],[89.812,25.372],[89.861,25.617],[89.844,25.7],[89.806,25.825],[89.866,25.931],[89.777,26.043],[89.779,26.084],[89.736,26.158],[89.702,26.151],[89.64,26.226],[89.571,25.968],[89.535,26.004],[89.36,26.008],[89.159,26.137]]]]}},{"type":"Feature","properties":{"code":"BB","name":"Barbados"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-58.564,13.245],[-59.807,13.876],[-59.829,12.706],[-58.564,13.245]]]]}},{"type":"Feature","properties":{"code":"BY","name":"Belarus"},"geometry":{"type":"MultiPolygon","coordinates":[[[[28.152,56.17],[27.979,56.118],[27.631,55.897],[27.617,55.786],[27.354,55.809],[27.278,55.783],[27.156,55.85],[26.972,55.81],[26.874,55.717],[26.769,55.677],[26.718,55.706],[26.649,55.705],[26.632,55.68],[26.632,55.579],[26.551,55.509],[26.552,55.403],[26.449,55.348],[26.571,55.326],[26.671,55.339],[26.809,55.316],[26.833,55.304],[26.835,55.282],[26.73,55.242],[26.73,55.218],[26.681,55.198],[26.692,55.167],[26.548,55.142],[26.515,55.161],[26.462,55.128],[26.351,55.153],[26.306,55.125],[26.232,55.104],[26.269,55.08],[26.204,54.997],[26.134,54.989],[26.059,54.946],[25.991,54.957],[25.895,54.934],[25.741,54.801],[25.76,54.573],[25.68,54.532],[25.648,54.487],[25.622,54.466],[25.634,54.421],[25.538,54.332],[25.554,54.316],[25.685,54.317],[25.786,54.233],[25.786,54.157],[25.711,54.167],[25.649,54.126],[25.547,54.149],[25.515,54.178],[25.568,54.252],[25.509,54.303],[25.356,54.265],[25.227,54.263],[25.192,54.219],[25.073,54.134],[24.991,54.142],[24.969,54.176],[24.771,54.111],[24.853,54.029],[24.743,53.967],[24.692,53.965],[24.697,54.019],[24.623,54.002],[24.444,53.901],[24.341,53.901],[24.196,53.964],[23.988,53.926],[23.951,53.961],[23.813,53.942],[23.805,53.896],[23.717,53.934],[23.617,53.927],[23.513,53.951],[23.62,53.609],[23.82,53.241],[23.857,53.229],[23.914,53.165],[23.875,53.083],[23.922,53.021],[23.947,52.959],[23.918,52.94],[23.938,52.713],[23.736,52.615],[23.583,52.599],[23.451,52.538],[23.341,52.448],[23.182,52.288],[23.201,52.228],[23.479,52.182],[23.543,52.121],[23.61,52.113],[23.641,52.076],[23.687,51.991],[23.615,51.921],[23.627,51.782],[23.532,51.743],[23.571,51.559],[23.562,51.537],[23.628,51.505],[23.674,51.503],[23.609,51.621],[23.777,51.668],[23.911,51.633],[23.874,51.597],[23.999,51.584],[24.131,51.67],[24.316,51.751],[24.29,51.808],[24.371,51.882],[24.988,51.913],[25.202,51.971],[25.462,51.922],[25.737,51.92],[25.806,51.946],[25.832,51.926],[26.004,51.93],[26.191,51.868],[26.394,51.873],[26.47,51.805],[26.698,51.823],[26.8,51.758],[26.949,51.738],[26.994,51.769],[27.206,51.773],[27.209,51.667],[27.266,51.66],[27.248,51.602],[27.472,51.612],[27.511,51.585],[27.557,51.635],[27.719,51.607],[27.671,51.509],[27.761,51.476],[27.853,51.623],[27.918,51.62],[27.958,51.561],[28.107,51.579],[28.235,51.67],[28.376,51.545],[28.471,51.597],[28.644,51.566],[28.692,51.447],[28.731,51.462],[28.756,51.414],[28.782,51.453],[28.76,51.488],[28.818,51.556],[28.955,51.592],[28.991,51.568],[29.119,51.659],[29.164,51.647],[29.207,51.569],[29.256,51.571],[29.252,51.498],[29.329,51.378],[29.424,51.419],[29.498,51.398],[29.544,51.484],[29.741,51.534],[29.774,51.446],[30.179,51.51],[30.346,51.426],[30.362,51.34],[30.562,51.257],[30.65,51.35],[30.519,51.596],[30.688,51.828],[30.764,51.897],[30.909,52.007],[30.956,52.078],[31.133,52.1],[31.251,52.041],[31.383,52.13],[31.782,52.114],[31.779,52.186],[31.689,52.197],[31.707,52.267],[31.58,52.321],[31.621,52.338],[31.614,52.488],[31.563,52.515],[31.639,52.554],[31.504,52.697],[31.573,52.716],[31.592,52.79],[31.357,52.979],[31.241,53.031],[31.323,53.041],[31.335,53.088],[31.392,53.097],[31.364,53.135],[31.405,53.214],[31.563,53.194],[31.625,53.229],[31.787,53.18],[31.824,53.1],[32.154,53.076],[32.408,53.189],[32.517,53.284],[32.733,53.335],[32.75,53.456],[32.478,53.555],[32.405,53.666],[32.501,53.686],[32.457,53.74],[32.367,53.717],[32.126,53.816],[31.891,53.781],[31.77,53.8],[31.85,53.918],[31.887,54.037],[31.896,54.084],[31.57,54.145],[31.308,54.253],[31.318,54.341],[31.229,54.466],[31.085,54.504],[31.214,54.631],[31.193,54.669],[30.992,54.67],[30.982,54.689],[31.026,54.707],[30.971,54.72],[30.955,54.743],[30.752,54.807],[30.826,54.901],[30.818,54.941],[30.931,54.959],[30.958,54.986],[30.908,55.022],[30.942,55.04],[31.01,55.028],[31.021,55.062],[30.974,55.171],[30.879,55.282],[30.819,55.279],[30.826,55.331],[30.931,55.391],[30.901,55.466],[30.952,55.507],[30.934,55.618],[30.86,55.632],[30.785,55.585],[30.73,55.663],[30.675,55.642],[30.633,55.731],[30.51,55.766],[30.513,55.79],[30.483,55.811],[30.31,55.836],[30.278,55.868],[30.121,55.836],[29.98,55.873],[29.807,55.796],[29.614,55.777],[29.513,55.703],[29.36,55.759],[29.447,55.96],[29.217,55.99],[29.083,56.034],[28.734,55.971],[28.637,56.073],[28.683,56.102],[28.553,56.117],[28.431,56.094],[28.38,56.114],[28.369,56.058],[28.306,56.06],[28.152,56.17]]]]}},{"type":"Feature","properties":{"code":"BE","name":"Belgium"},"geometry":{"type":"MultiPolygon","coordinates":[[[[4.933,51.449],[4.939,51.446],[4.952,51.45],[4.952,51.452],[4.933,51.449]]],[[[4.915,51.435],[4.927,51.433],[4.93,51.43],[4.94,51.431],[4.943,51.44],[4.935,51.439],[4.934,51.442],[4.94,51.442],[4.935,51.446],[4.929,51.442],[4.928,51.439],[4.926,51.443],[4.928,51.444],[4.923,51.447],[4.918,51.446],[4.922,51.443],[4.919,51.436],[4.915,51.435]]],[[[4.829,51.421],[4.824,51.447],[4.841,51.48],[4.788,51.503],[4.773,51.505],[4.746,51.489],[4.729,51.484],[4.654,51.424],[4.575,51.432],[4.535,51.424],[4.528,51.45],[4.547,51.473],[4.539,51.482],[4.477,51.478],[4.381,51.449],[4.397,51.433],[4.381,51.42],[4.438,51.37],[4.393,51.355],[4.341,51.357],[4.333,51.377],[4.219,51.374],[4.24,51.354],[4.167,51.293],[4.052,51.242],[4.02,51.245],[3.979,51.225],[3.901,51.204],[3.788,51.215],[3.79,51.258],[3.589,51.301],[3.515,51.287],[3.527,51.246],[3.435,51.241],[3.417,51.259],[3.383,51.273],[3.358,51.316],[3.387,51.334],[3.363,51.371],[2.566,51.853],[2.185,51.521],[2.559,51.07],[2.576,51.003],[2.631,50.947],[2.591,50.918],[2.633,50.815],[2.712,50.813],[2.811,50.718],[2.848,50.723],[2.87,50.703],[2.879,50.703],[2.885,50.707],[2.901,50.693],[2.91,50.694],[2.909,50.702],[2.95,50.751],[2.968,50.752],[3.005,50.766],[3.043,50.777],[3.092,50.777],[3.106,50.783],[3.112,50.794],[3.12,50.792],[3.126,50.786],[3.15,50.79],[3.165,50.768],[3.183,50.75],[3.188,50.74],[3.201,50.735],[3.19,50.726],[3.208,50.717],[3.22,50.71],[3.246,50.714],[3.261,50.701],[3.261,50.692],[3.254,50.69],[3.264,50.677],[3.24,50.658],[3.273,50.607],[3.286,50.527],[3.377,50.495],[3.446,50.51],[3.474,50.534],[3.516,50.526],[3.495,50.489],[3.568,50.502],[3.584,50.49],[3.61,50.496],[3.644,50.463],[3.662,50.452],[3.675,50.402],[3.673,50.387],[3.657,50.369],[3.67,50.346],[3.71,50.303],[3.71,50.319],[3.739,50.348],[3.843,50.352],[3.908,50.328],[3.968,50.35],[4.027,50.358],[4.069,50.325],[4.102,50.312],[4.11,50.302],[4.12,50.304],[4.137,50.256],[4.168,50.258],[4.155,50.283],[4.173,50.288],[4.179,50.274],[4.207,50.273],[4.219,50.255],[4.155,50.211],[4.16,50.192],[4.136,50.131],[4.201,50.135],[4.231,50.069],[4.163,50.047],[4.135,50.02],[4.142,49.98],[4.205,49.958],[4.32,49.97],[4.351,49.953],[4.435,49.941],[4.511,49.947],[4.541,49.969],[4.687,49.997],[4.701,50.094],[4.752,50.113],[4.824,50.169],[4.833,50.153],[4.886,50.152],[4.838,50.067],[4.788,49.956],[4.885,49.924],[4.851,49.865],[4.87,49.823],[4.855,49.79],[4.967,49.799],[5.092,49.762],[5.145,49.703],[5.262,49.695],[5.315,49.668],[5.33,49.656],[5.302,49.631],[5.314,49.612],[5.339,49.616],[5.348,49.629],[5.397,49.616],[5.437,49.571],[5.467,49.526],[5.465,49.498],[5.55,49.527],[5.609,49.512],[5.645,49.551],[5.756,49.543],[5.758,49.559],[5.774,49.563],[5.792,49.552],[5.818,49.548],[5.841,49.553],[5.847,49.557],[5.842,49.561],[5.873,49.575],[5.87,49.588],[5.85,49.587],[5.848,49.597],[5.876,49.609],[5.876,49.62],[5.884,49.628],[5.886,49.635],[5.906,49.639],[5.902,49.651],[5.907,49.664],[5.862,49.679],[5.865,49.693],[5.887,49.71],[5.865,49.727],[5.842,49.722],[5.826,49.724],[5.831,49.747],[5.822,49.75],[5.789,49.796],[5.754,49.792],[5.75,49.814],[5.744,49.821],[5.748,49.824],[5.74,49.835],[5.741,49.838],[5.75,49.839],[5.75,49.847],[5.759,49.848],[5.746,49.854],[5.759,49.856],[5.753,49.871],[5.784,49.879],[5.736,49.898],[5.773,49.936],[5.773,49.961],[5.808,49.965],[5.812,49.971],[5.835,49.978],[5.84,49.989],[5.823,49.997],[5.819,50.013],[5.855,50.027],[5.869,50.046],[5.855,50.063],[5.886,50.078],[5.895,50.115],[5.959,50.133],[5.965,50.173],[6.025,50.183],[6.031,50.164],[6.064,50.153],[6.086,50.172],[6.12,50.164],[6.114,50.137],[6.138,50.13],[6.153,50.141],[6.141,50.15],[6.146,50.171],[6.187,50.182],[6.184,50.208],[6.169,50.223],[6.208,50.252],[6.288,50.275],[6.299,50.309],[6.325,50.323],[6.357,50.311],[6.406,50.324],[6.408,50.336],[6.369,50.359],[6.344,50.38],[6.369,50.408],[6.372,50.454],[6.34,50.461],[6.346,50.488],[6.308,50.501],[6.266,50.503],[6.223,50.496],[6.206,50.521],[6.192,50.521],[6.187,50.527],[6.196,50.531],[6.197,50.536],[6.178,50.542],[6.177,50.559],[6.203,50.57],[6.226,50.591],[6.24,50.587],[6.249,50.599],[6.248,50.604],[6.27,50.624],[6.179,50.624],[6.117,50.722],[6.044,50.729],[6.041,50.718],[6.033,50.726],[6.039,50.746],[6.02,50.754],[5.975,50.754],[5.959,50.762],[5.891,50.751],[5.891,50.751],[5.887,50.771],[5.849,50.754],[5.845,50.765],[5.807,50.756],[5.775,50.783],[5.765,50.782],[5.744,50.769],[5.739,50.757],[5.722,50.764],[5.695,50.755],[5.681,50.758],[5.701,50.783],[5.69,50.796],[5.701,50.808],[5.653,50.823],[5.64,50.847],[5.645,50.871],[5.679,50.881],[5.699,50.91],[5.716,50.908],[5.726,50.912],[5.725,50.923],[5.746,50.947],[5.759,50.956],[5.748,50.962],[5.729,50.954],[5.719,50.961],[5.762,50.997],[5.777,51.025],[5.76,51.031],[5.773,51.062],[5.798,51.058],[5.799,51.094],[5.829,51.093],[5.832,51.106],[5.811,51.109],[5.808,51.117],[5.855,51.144],[5.826,51.168],[5.777,51.152],[5.777,51.178],[5.746,51.189],[5.703,51.183],[5.655,51.187],[5.651,51.198],[5.56,51.222],[5.557,51.265],[5.515,51.295],[5.485,51.301],[5.465,51.285],[5.441,51.282],[5.417,51.262],[5.347,51.275],[5.339,51.263],[5.297,51.261],[5.265,51.267],[5.238,51.261],[5.225,51.269],[5.242,51.305],[5.2,51.322],[5.162,51.31],[5.134,51.316],[5.131,51.348],[5.071,51.395],[5.105,51.432],[5.079,51.471],[5.048,51.47],[5.033,51.487],[5.011,51.472],[5.004,51.444],[4.922,51.395],[4.9,51.414],[4.85,51.415],[4.789,51.411],[4.772,51.413],[4.766,51.43],[4.783,51.433],[4.829,51.421]]]]}},{"type":"Feature","properties":{"code":"BZ","name":"Belize"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-88.327,18.49],[-88.482,18.492],[-88.715,18.071],[-88.872,17.895],[-89.038,18.007],[-89.151,17.951],[-89.15,17.816],[-89.15,17.048],[-89.227,15.886],[-89.174,15.909],[-89.024,15.906],[-88.954,15.887],[-88.408,16.096],[-86.924,17.615],[-87.848,18.185],[-87.857,18.183],[-87.867,18.2],[-87.876,18.183],[-87.907,18.152],[-88.032,18.167],[-88.032,18.418],[-88.266,18.476],[-88.299,18.476],[-88.327,18.49]]]]}},{"type":"Feature","properties":{"code":"BJ","name":"Benin"},"geometry":{"type":"MultiPolygon","coordinates":[[[[3.594,11.703],[3.482,11.861],[3.316,11.885],[3.254,12.015],[2.84,12.406],[2.659,12.306],[2.378,12.248],[2.397,12.11],[2.458,11.987],[2.397,11.895],[2.3,11.683],[2.01,11.422],[1.428,11.468],[1.034,11.047],[0.981,11.089],[0.912,10.996],[0.88,10.803],[0.804,10.715],[0.777,10.377],[1.355,9.995],[1.366,9.595],[1.337,9.548],[1.417,9.323],[1.565,9.169],[1.618,9.053],[1.642,6.996],[1.559,6.997],[1.618,6.748],[1.581,6.686],[1.769,6.432],[1.798,6.282],[1.629,6.241],[1.673,6.027],[2.742,6.133],[2.706,6.38],[2.705,6.508],[2.743,6.573],[2.732,6.641],[2.782,6.705],[2.788,6.764],[2.734,6.785],[2.74,6.928],[2.717,6.957],[2.77,7.135],[2.745,7.426],[2.794,7.435],[2.787,7.512],[2.734,7.542],[2.731,7.776],[2.675,7.878],[2.779,9.069],[3.08,9.1],[3.141,9.284],[3.139,9.472],[3.251,9.616],[3.347,9.707],[3.321,9.78],[3.354,9.836],[3.544,9.877],[3.669,10.181],[3.573,10.272],[3.684,10.464],[3.783,10.405],[3.842,10.593],[3.715,11.13],[3.492,11.298],[3.594,11.703]]]]}},{"type":"Feature","properties":{"code":"BM","name":"Bermuda","country":"United Kingdom"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-63.21,32.695],[-65.315,32.684],[-65.64,31.434],[-63.21,32.695]]]]}},{"type":"Feature","properties":{"code":"BT","name":"Bhutan"},"geometry":{"type":"MultiPolygon","coordinates":[[[[91.647,27.764],[91.563,27.848],[91.49,27.939],[91.463,28.006],[91.258,28.075],[91.2,27.987],[90.699,28.078],[90.588,28.028],[90.134,28.192],[89.798,28.24],[89.595,28.164],[89.128,27.625],[89.058,27.61],[88.972,27.517],[88.954,27.411],[89.002,27.325],[88.969,27.303],[88.937,27.338],[88.919,27.325],[88.742,27.144],[88.87,27.109],[88.871,26.975],[88.923,26.993],[88.958,26.927],[89.096,26.891],[89.128,26.817],[89.193,26.813],[89.379,26.862],[89.383,26.86],[89.39,26.842],[89.423,26.837],[89.634,26.744],[89.861,26.733],[90.045,26.724],[90.304,26.851],[90.393,26.907],[90.485,26.859],[90.677,26.772],[91.501,26.792],[91.832,26.873],[92.055,26.869],[92.119,26.893],[92.035,27.073],[92.047,27.269],[92.12,27.278],[92.011,27.474],[91.65,27.483],[91.558,27.614],[91.647,27.764]]]]}},{"type":"Feature","properties":{"code":"BO","name":"Bolivia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-63.902,-12.525],[-64.225,-12.453],[-64.307,-12.464],[-64.998,-11.986],[-65.3,-11.487],[-65.281,-10.863],[-65.354,-10.787],[-65.379,-10.351],[-65.29,-9.863],[-65.406,-9.639],[-65.562,-9.843],[-65.683,-9.753],[-66.596,-9.912],[-67.178,-10.34],[-68.715,-11.147],[-68.765,-11.05],[-68.752,-11.037],[-68.753,-11.024],[-68.748,-11.009],[-69.428,-10.935],[-69.478,-10.953],[-69.572,-10.946],[-68.981,-11.898],[-68.65,-12.507],[-68.856,-12.878],[-68.886,-13.408],[-69.053,-13.685],[-68.881,-14.186],[-69.363,-14.946],[-69.149,-15.235],[-69.403,-15.614],[-69.203,-16.167],[-69.1,-16.227],[-68.962,-16.194],[-68.795,-16.333],[-68.984,-16.422],[-69.04,-16.572],[-69.009,-16.668],[-69.169,-16.722],[-69.629,-17.281],[-69.469,-17.375],[-69.469,-17.499],[-69.466,-17.605],[-69.341,-17.728],[-69.287,-17.948],[-69.075,-18.037],[-69.148,-18.169],[-69.074,-18.283],[-68.95,-18.933],[-68.871,-19.06],[-68.806,-19.084],[-68.62,-19.276],[-68.412,-19.405],[-68.668,-19.721],[-68.546,-19.847],[-68.571,-20.031],[-68.743,-20.088],[-68.728,-20.462],[-68.44,-20.627],[-68.554,-20.735],[-68.54,-20.915],[-68.404,-20.946],[-68.188,-21.286],[-67.851,-22.871],[-67.543,-22.898],[-67.184,-22.815],[-66.73,-22.236],[-66.297,-22.087],[-66.241,-21.778],[-66.038,-21.848],[-66.048,-21.919],[-65.926,-21.933],[-65.747,-22.101],[-65.612,-22.095],[-65.587,-22.098],[-65.577,-22.077],[-65.474,-22.089],[-64.995,-22.083],[-64.9,-22.121],[-64.672,-22.19],[-64.589,-22.25],[-64.418,-22.677],[-64.351,-22.733],[-64.315,-22.888],[-64.229,-22.558],[-63.933,-21.999],[-63.71,-21.999],[-63.681,-22.054],[-63.665,-21.999],[-62.811,-21.999],[-62.808,-22.125],[-62.645,-22.251],[-62.276,-21.067],[-62.269,-20.553],[-61.939,-20.101],[-61.737,-19.64],[-60.006,-19.298],[-59.07,-19.291],[-58.232,-19.801],[-58.162,-20.162],[-57.85,-19.983],[-58.142,-19.763],[-57.785,-19.033],[-57.711,-19.032],[-57.691,-19.005],[-57.72,-18.975],[-57.72,-18.896],[-57.768,-18.901],[-57.568,-18.257],[-57.482,-18.242],[-57.699,-17.843],[-57.739,-17.561],[-57.901,-17.446],[-57.997,-17.527],[-58.329,-17.282],[-58.506,-16.81],[-58.309,-16.37],[-58.324,-16.259],[-58.415,-16.326],[-60.161,-16.265],[-60.238,-15.503],[-60.582,-15.099],[-60.24,-15.095],[-60.279,-14.63],[-60.46,-14.225],[-60.481,-13.78],[-61.055,-13.501],[-61.812,-13.496],[-63.763,-12.43],[-63.902,-12.525]]]]}},{"type":"Feature","properties":{"code":"NL","name":"Bonaire","country":"Netherlands"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-68.203,12.316],[-68.474,12.329],[-68.335,12.002],[-68.145,12.016],[-68.203,12.316]]]]}},{"type":"Feature","properties":{"code":"BA","name":"Bosnia and Herzegovina"},"geometry":{"type":"MultiPolygon","coordinates":[[[[17.848,45.045],[17.666,45.134],[17.591,45.108],[17.515,45.108],[17.476,45.127],[17.456,45.125],[17.45,45.161],[17.412,45.133],[17.336,45.145],[17.321,45.162],[17.268,45.184],[17.251,45.15],[17.243,45.146],[17.184,45.148],[17.041,45.208],[16.939,45.227],[16.924,45.276],[16.838,45.19],[16.811,45.184],[16.782,45.19],[16.748,45.204],[16.65,45.207],[16.602,45.23],[16.566,45.223],[16.55,45.221],[16.53,45.227],[16.492,45.212],[16.463,45.145],[16.4,45.115],[16.383,45.06],[16.382,45.051],[16.375,45.052],[16.359,45.035],[16.354,45.002],[16.29,44.997],[16.122,45.096],[15.984,45.231],[15.835,45.225],[15.764,45.165],[15.788,45.115],[15.746,45.064],[15.786,44.974],[15.747,44.968],[15.761,44.87],[15.795,44.846],[15.726,44.823],[15.825,44.715],[15.893,44.75],[16.058,44.615],[16.009,44.586],[16.03,44.556],[16.106,44.526],[16.168,44.407],[16.13,44.383],[16.213,44.352],[16.187,44.27],[16.369,44.083],[16.437,44.075],[16.436,44.028],[16.505,44.024],[16.555,43.953],[16.709,43.849],[16.753,43.772],[16.807,43.76],[17.006,43.58],[17.158,43.494],[17.244,43.494],[17.297,43.445],[17.256,43.404],[17.286,43.331],[17.47,43.166],[17.643,43.086],[17.709,42.972],[17.539,42.928],[17.644,42.886],[17.682,42.927],[17.795,42.896],[17.809,42.918],[17.882,42.837],[18.243,42.611],[18.362,42.614],[18.437,42.559],[18.498,42.584],[18.538,42.574],[18.555,42.584],[18.522,42.623],[18.574,42.644],[18.548,42.683],[18.546,42.692],[18.552,42.69],[18.568,42.721],[18.473,42.75],[18.459,42.817],[18.476,42.858],[18.494,42.864],[18.497,42.893],[18.491,42.956],[18.522,43.015],[18.663,43.039],[18.647,43.148],[18.666,43.206],[18.717,43.229],[18.698,43.252],[18.765,43.298],[18.853,43.324],[18.848,43.337],[18.839,43.348],[18.909,43.364],[18.958,43.329],[18.95,43.293],[19.008,43.25],[19.042,43.3],[19.082,43.297],[19.087,43.315],[19.041,43.397],[19.011,43.439],[18.961,43.45],[18.955,43.494],[18.914,43.503],[19.011,43.558],[19.049,43.504],[19.139,43.528],[19.157,43.539],[19.228,43.526],[19.248,43.531],[19.255,43.594],[19.334,43.588],[19.367,43.609],[19.419,43.541],[19.427,43.58],[19.505,43.584],[19.518,43.714],[19.399,43.797],[19.235,43.988],[19.244,44.015],[19.384,43.966],[19.525,43.956],[19.565,43.999],[19.618,44.015],[19.62,44.053],[19.575,44.047],[19.56,44.069],[19.512,44.082],[19.473,44.119],[19.484,44.143],[19.473,44.15],[19.439,44.131],[19.409,44.167],[19.359,44.184],[19.348,44.232],[19.325,44.272],[19.269,44.27],[19.233,44.261],[19.205,44.292],[19.183,44.284],[19.167,44.286],[19.133,44.315],[19.136,44.338],[19.115,44.342],[19.108,44.356],[19.119,44.367],[19.103,44.369],[19.104,44.378],[19.107,44.382],[19.107,44.394],[19.118,44.403],[19.147,44.415],[19.148,44.453],[19.123,44.501],[19.134,44.525],[19.167,44.522],[19.264,44.654],[19.325,44.741],[19.367,44.882],[19.182,44.921],[19.02,44.855],[18.87,44.851],[18.763,44.907],[18.764,44.937],[18.807,44.936],[18.784,44.977],[18.657,45.075],[18.479,45.059],[18.419,45.111],[18.321,45.102],[18.244,45.137],[18.162,45.077],[18.031,45.126],[18.016,45.152],[17.995,45.15],[17.978,45.138],[17.973,45.122],[17.937,45.08],[17.871,45.046],[17.848,45.045]]]]}},{"type":"Feature","properties":{"code":"BW","name":"Botswana"},"geometry":{"type":"MultiPolygon","coordinates":[[[[25.264,-17.796],[25.169,-17.783],[25.059,-17.845],[24.956,-17.797],[24.734,-17.893],[24.719,-17.922],[24.63,-17.986],[24.575,-18.072],[24.406,-17.957],[24.194,-18.019],[23.611,-18.488],[23.296,-17.999],[23.1,-18.001],[21.456,-18.318],[20.999,-18.317],[20.998,-22],[19.999,-22],[19.998,-24.768],[20.028,-24.787],[20.037,-24.81],[20.298,-24.949],[20.648,-25.478],[20.861,-26.149],[20.618,-26.469],[20.633,-26.782],[20.686,-26.904],[20.87,-26.8],[21.134,-26.867],[21.379,-26.821],[21.693,-26.862],[21.785,-26.792],[21.771,-26.69],[21.833,-26.66],[21.907,-26.668],[22.062,-26.619],[22.212,-26.377],[22.419,-26.231],[22.564,-26.197],[22.708,-25.992],[22.86,-25.506],[23.035,-25.3],[23.476,-25.3],[23.924,-25.643],[24.183,-25.629],[24.365,-25.773],[24.447,-25.73],[24.673,-25.817],[24.895,-25.807],[25.017,-25.725],[25.123,-25.759],[25.331,-25.766],[25.585,-25.634],[25.664,-25.449],[25.697,-25.293],[25.727,-25.255],[25.886,-24.878],[25.843,-24.787],[25.852,-24.757],[26.394,-24.635],[26.463,-24.604],[26.517,-24.472],[26.842,-24.249],[26.997,-23.655],[27.338,-23.409],[27.524,-23.38],[27.607,-23.219],[27.742,-23.214],[27.935,-23.049],[27.937,-22.962],[28.048,-22.902],[28.046,-22.839],[28.349,-22.569],[28.633,-22.559],[28.919,-22.443],[29.015,-22.229],[29.109,-22.212],[29.153,-22.214],[29.19,-22.186],[29.22,-22.178],[29.377,-22.196],[29.353,-22.184],[29.246,-22.06],[29.197,-22.075],[29.145,-22.073],[29.085,-22.049],[29.041,-22.006],[29.022,-21.957],[29.022,-21.906],[29.04,-21.859],[29.078,-21.819],[28.581,-21.635],[28.499,-21.666],[28.294,-21.59],[28.017,-21.576],[27.914,-21.316],[27.692,-21.084],[27.73,-20.517],[27.694,-20.485],[27.289,-20.499],[27.298,-20.289],[27.213,-20.082],[26.722,-19.927],[26.172,-19.537],[25.962,-19.082],[25.998,-19.029],[25.943,-18.904],[25.824,-18.828],[25.792,-18.636],[25.689,-18.562],[25.535,-18.39],[25.4,-18.127],[25.318,-18.071],[25.239,-17.908],[25.264,-17.796]]]]}},{"type":"Feature","properties":{"code":"BR","name":"Brazil"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-59.694,4.341],[-59.789,4.456],[-60.16,4.535],[-60.042,4.698],[-59.981,5.071],[-60.209,5.288],[-60.324,5.213],[-60.732,5.209],[-60.58,4.943],[-60.865,4.705],[-60.983,4.542],[-61.157,4.498],[-61.315,4.542],[-61.297,4.442],[-61.486,4.431],[-61.546,4.282],[-62.131,4.083],[-62.448,4.186],[-62.577,4.048],[-62.744,4.033],[-62.766,3.731],[-62.983,3.599],[-63.211,3.962],[-63.446,3.969],[-63.422,3.9],[-63.506,3.836],[-63.671,4.017],[-63.702,3.914],[-63.861,3.948],[-63.992,3.902],[-64.145,4.129],[-64.576,4.126],[-64.73,4.289],[-64.84,4.247],[-64.484,3.788],[-64.029,2.798],[-64.026,2.482],[-63.391,2.432],[-63.398,2.161],[-64.061,1.947],[-64.083,1.648],[-64.347,1.356],[-64.389,1.512],[-65.117,1.12],[-65.573,0.629],[-65.502,0.921],[-65.673,1.014],[-66.285,0.746],[-66.858,1.23],[-67.082,1.174],[-67.158,1.804],[-67.299,1.875],[-67.405,2.223],[-67.929,1.825],[-68.186,2.001],[-68.267,1.835],[-68.181,1.729],[-69.386,1.709],[-69.537,1.764],[-69.835,1.694],[-69.83,1.079],[-69.26,1.069],[-69.144,0.842],[-69.21,0.58],[-69.477,0.711],[-70.042,0.554],[-70.037,-0.197],[-69.603,-0.519],[-69.598,-0.751],[-69.421,-1.019],[-69.434,-1.422],[-69.933,-4.22],[-69.949,-4.228],[-69.951,-4.285],[-70.024,-4.363],[-70.113,-4.273],[-70.196,-4.361],[-70.332,-4.152],[-70.776,-4.157],[-70.968,-4.369],[-71.87,-4.517],[-72.644,-5.039],[-72.84,-5.148],[-73.246,-6.058],[-73.13,-6.439],[-73.74,-6.879],[-73.77,-7.289],[-73.969,-7.585],[-73.655,-7.779],[-73.766,-7.899],[-72.929,-9.041],[-73.215,-9.409],[-72.722,-9.414],[-72.319,-9.518],[-72.147,-9.98],[-71.234,-9.967],[-70.534,-9.426],[-70.585,-9.583],[-70.554,-9.767],[-70.625,-9.807],[-70.641,-11.011],[-70.514,-10.922],[-70.388,-11.071],[-69.909,-10.927],[-69.578,-10.941],[-69.572,-10.946],[-69.478,-10.953],[-69.428,-10.935],[-68.748,-11.009],[-68.753,-11.024],[-68.752,-11.037],[-68.765,-11.05],[-68.715,-11.147],[-67.178,-10.34],[-66.596,-9.912],[-65.683,-9.753],[-65.562,-9.843],[-65.406,-9.639],[-65.29,-9.863],[-65.379,-10.351],[-65.354,-10.787],[-65.281,-10.863],[-65.3,-11.487],[-64.998,-11.986],[-64.307,-12.464],[-64.225,-12.453],[-63.902,-12.525],[-63.763,-12.43],[-61.812,-13.496],[-61.055,-13.501],[-60.481,-13.78],[-60.46,-14.225],[-60.279,-14.63],[-60.24,-15.095],[-60.582,-15.099],[-60.238,-15.503],[-60.161,-16.265],[-58.415,-16.326],[-58.324,-16.259],[-58.309,-16.37],[-58.506,-16.81],[-58.329,-17.282],[-57.997,-17.527],[-57.901,-17.446],[-57.739,-17.561],[-57.699,-17.843],[-57.482,-18.242],[-57.568,-18.257],[-57.768,-18.901],[-57.72,-18.896],[-57.72,-18.975],[-57.691,-19.005],[-57.711,-19.032],[-57.785,-19.033],[-58.142,-19.763],[-57.85,-19.983],[-58.162,-20.162],[-57.845,-20.932],[-57.935,-21.655],[-57.882,-21.687],[-57.946,-21.738],[-57.986,-22.092],[-56.651,-22.284],[-56.521,-22.116],[-56.459,-22.081],[-56.232,-22.253],[-55.833,-22.29],[-55.749,-22.464],[-55.741,-22.52],[-55.724,-22.552],[-55.699,-22.563],[-55.687,-22.584],[-55.625,-22.628],[-55.638,-22.951],[-55.545,-23.228],[-55.523,-23.259],[-55.556,-23.282],[-55.436,-23.872],[-55.441,-23.919],[-55.418,-23.966],[-55.123,-23.997],[-55.052,-23.987],[-55.027,-23.973],[-54.624,-23.831],[-54.328,-24.019],[-54.282,-24.073],[-54.442,-25.134],[-54.62,-25.46],[-54.602,-25.484],[-54.595,-25.537],[-54.594,-25.592],[-54.55,-25.589],[-54.529,-25.628],[-53.908,-25.555],[-53.837,-25.948],[-53.735,-26.042],[-53.731,-26.058],[-53.726,-26.066],[-53.734,-26.07],[-53.74,-26.1],[-53.65,-26.195],[-53.652,-26.233],[-53.637,-26.25],[-53.639,-26.251],[-53.646,-26.248],[-53.642,-26.26],[-53.645,-26.281],[-53.683,-26.334],[-53.734,-26.613],[-53.801,-27.098],[-54.16,-27.289],[-54.191,-27.276],[-54.193,-27.308],[-54.419,-27.409],[-54.504,-27.482],[-54.677,-27.572],[-54.902,-27.631],[-54.908,-27.731],[-55.135,-27.898],[-55.169,-27.862],[-55.333,-27.947],[-55.626,-28.171],[-55.654,-28.183],[-56.017,-28.512],[-56.005,-28.604],[-56.053,-28.627],[-56.542,-29.114],[-56.573,-29.114],[-56.628,-29.181],[-56.813,-29.482],[-57.094,-29.742],[-57.651,-30.192],[-57.225,-30.261],[-56.902,-30.026],[-56.493,-30.395],[-56.48,-30.39],[-56.462,-30.385],[-55.874,-31.051],[-55.589,-30.841],[-55.563,-30.869],[-55.554,-30.873],[-55.552,-30.882],[-55.546,-30.891],[-55.534,-30.897],[-55.533,-30.902],[-55.527,-30.9],[-55.519,-30.898],[-55.508,-30.903],[-55.508,-30.913],[-54.174,-31.862],[-53.76,-32.075],[-53.396,-32.586],[-53.377,-32.57],[-53.111,-32.711],[-53.535,-33.168],[-53.528,-33.689],[-53.44,-33.693],[-53.396,-33.752],[-53.371,-33.743],[-53.223,-33.818],[-39.76,-21.197],[-31.989,-3.574],[-51.638,4.514],[-51.62,4.146],[-51.796,3.893],[-51.823,3.858],[-51.856,3.834],[-52.318,3.179],[-52.691,2.373],[-52.965,2.188],[-53.787,2.344],[-54.163,2.108],[-54.608,2.329],[-55.019,2.564],[-55.715,2.403],[-55.963,2.532],[-56.131,2.277],[-55.922,2.052],[-55.899,1.899],[-55.993,1.831],[-56.47,1.951],[-56.766,1.895],[-57.071,1.953],[-57.091,2.019],[-57.24,1.958],[-57.351,1.983],[-57.557,1.696],[-57.773,1.733],[-57.973,1.646],[-58.019,1.52],[-58.339,1.58],[-58.486,1.484],[-58.536,1.292],[-58.842,1.177],[-58.921,1.313],[-59.256,1.406],[-59.741,1.876],[-59.726,2.275],[-59.912,2.368],[-59.997,2.923],[-59.798,3.372],[-59.869,3.571],[-59.52,3.92],[-59.734,4.204],[-59.694,4.341]]]]}},{"type":"Feature","properties":{"code":"GB","name":"British Indian Ocean Territory","country":"United Kingdom"},"geometry":{"type":"MultiPolygon","coordinates":[[[[70.873,-6.888],[72.669,-7.684],[72.605,-5.322],[71.721,-4.853],[70.873,-6.888]]]]}},{"type":"Feature","properties":{"code":"VG","name":"British Virgin Islands","country":"United Kingdom"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-64.629,18.285],[-64.324,18.465],[-64.255,18.727],[-64.384,18.783],[-64.886,18.444],[-64.866,18.402],[-64.647,18.365],[-64.629,18.285]]]]}},{"type":"Feature","properties":{"code":"BN","name":"Brunei"},"geometry":{"type":"MultiPolygon","coordinates":[[[[115.162,5.01],[115.025,5.35],[114.102,4.761],[114.074,4.584],[114.158,4.57],[114.269,4.499],[114.322,4.349],[114.322,4.255],[114.442,4.276],[114.499,4.131],[114.642,4.007],[114.785,4.122],[114.88,4.426],[114.832,4.424],[114.773,4.729],[114.827,4.751],[114.888,4.819],[114.97,4.811],[114.994,4.882],[115.05,4.903],[115.03,4.821],[115.023,4.741],[115.041,4.637],[115.077,4.534],[115.1,4.391],[115.313,4.308],[115.363,4.336],[115.285,4.423],[115.278,4.637],[115.207,4.826],[115.151,4.876],[115.162,5.01]]]]}},{"type":"Feature","properties":{"code":"BG","name":"Bulgaria"},"geometry":{"type":"MultiPolygon","coordinates":[[[[23.053,43.795],[22.853,43.845],[22.838,43.881],[22.879,43.984],[23.017,44.019],[23.05,44.077],[22.672,44.216],[22.617,44.169],[22.617,44.065],[22.414,44.005],[22.356,43.813],[22.41,43.696],[22.476,43.656],[22.534,43.472],[22.82,43.337],[22.897,43.224],[23.008,43.193],[22.981,43.112],[22.895,43.036],[22.784,42.983],[22.748,42.887],[22.543,42.878],[22.433,42.821],[22.5,42.741],[22.44,42.569],[22.557,42.501],[22.52,42.399],[22.475,42.392],[22.459,42.338],[22.348,42.317],[22.381,42.303],[22.473,42.204],[22.503,42.195],[22.512,42.155],[22.677,42.066],[22.867,42.023],[22.903,41.876],[22.967,41.771],[23.012,41.765],[23.033,41.71],[22.955,41.633],[22.963,41.358],[22.933,41.341],[23.183,41.318],[23.22,41.338],[23.228,41.371],[23.313,41.405],[23.336,41.363],[23.404,41.4],[23.525,41.403],[23.632,41.376],[23.676,41.411],[23.765,41.402],[23.801,41.439],[23.896,41.453],[23.915,41.48],[23.97,41.441],[24.069,41.461],[24.063,41.532],[24.101,41.548],[24.181,41.517],[24.271,41.577],[24.305,41.513],[24.526,41.568],[24.611,41.423],[24.715,41.419],[24.804,41.349],[24.825,41.404],[24.861,41.393],[24.909,41.409],[24.942,41.387],[25.116,41.342],[25.283,41.234],[25.482,41.285],[25.524,41.28],[25.551,41.317],[25.61,41.306],[25.662,41.313],[25.705,41.292],[25.827,41.346],[25.879,41.305],[26.129,41.359],[26.165,41.423],[26.203,41.439],[26.148,41.475],[26.176,41.501],[26.18,41.554],[26.143,41.555],[26.151,41.608],[26.071,41.646],[26.061,41.703],[26.168,41.749],[26.213,41.732],[26.229,41.741],[26.265,41.715],[26.303,41.709],[26.36,41.711],[26.33,41.736],[26.336,41.768],[26.37,41.823],[26.54,41.827],[26.58,41.9],[26.561,41.93],[26.63,41.976],[26.791,41.974],[26.956,42.007],[27.033,42.081],[27.085,42.087],[27.193,42.06],[27.224,42.102],[27.274,42.104],[27.455,41.966],[27.524,41.938],[27.552,41.909],[27.699,41.975],[27.812,41.948],[27.835,41.997],[27.915,41.979],[28.03,41.981],[28.323,41.984],[29.243,43.709],[28.233,43.76],[27.996,43.842],[27.92,44.008],[27.735,43.953],[27.645,44.05],[27.608,44.012],[27.398,44.014],[27.268,44.126],[26.951,44.136],[26.627,44.057],[26.388,44.044],[26.101,43.969],[26.056,43.909],[25.949,43.857],[25.728,43.693],[25.395,43.619],[25.171,43.703],[25.107,43.683],[24.967,43.727],[24.735,43.685],[24.623,43.741],[24.503,43.763],[24.354,43.702],[24.181,43.682],[23.74,43.806],[23.617,43.793],[23.451,43.849],[23.268,43.848],[23.053,43.795]]]]}},{"type":"Feature","properties":{"code":"BF","name":"Burkina Faso"},"geometry":{"type":"MultiPolygon","coordinates":[[[[0.239,15.001],[0.066,14.97],[-0.247,15.078],[-0.72,15.087],[-1.059,14.792],[-1.322,14.728],[-1.681,14.5],[-1.979,14.477],[-1.999,14.19],[-2.102,14.149],[-2.476,14.297],[-2.662,14.147],[-2.847,14.055],[-2.908,13.812],[-2.882,13.649],[-3.264,13.707],[-3.284,13.542],[-3.236,13.29],[-3.435,13.273],[-3.431,13.159],[-3.545,13.178],[-3.791,13.367],[-3.963,13.382],[-3.906,13.444],[-3.965,13.498],[-4.345,13.129],[-4.218,12.957],[-4.238,12.715],[-4.474,12.713],[-4.414,12.319],[-4.577,12.199],[-4.548,12.139],[-4.625,12.132],[-4.63,12.065],[-4.707,12.067],[-4.729,12.016],[-5.079,11.979],[-5.264,11.848],[-5.403,11.833],[-5.264,11.757],[-5.293,11.617],[-5.229,11.604],[-5.207,11.438],[-5.255,11.369],[-5.259,11.248],[-5.326,11.216],[-5.33,11.134],[-5.493,11.075],[-5.416,10.846],[-5.471,10.753],[-5.466,10.561],[-5.511,10.432],[-5.396,10.293],[-5.125,10.298],[-4.965,9.999],[-4.966,9.891],[-4.643,9.707],[-4.314,9.601],[-4.26,9.76],[-3.697,9.943],[-3.318,9.911],[-3.272,9.85],[-3.193,9.938],[-3.166,9.851],[-3.008,9.74],[-2.93,9.574],[-2.765,9.408],[-2.688,9.493],[-2.765,9.566],[-2.742,9.832],[-2.831,10.403],[-2.942,10.643],[-2.834,11.007],[-0.671,10.998],[-0.619,10.913],[-0.443,11.043],[-0.424,11.117],[-0.382,11.126],[-0.36,11.078],[-0.286,11.127],[-0.274,11.172],[-0.135,11.141],[0.504,11.01],[0.489,10.986],[0.505,10.98],[0.496,10.933],[0.661,11],[0.912,10.996],[0.981,11.089],[1.034,11.047],[1.428,11.468],[2.01,11.422],[2.3,11.683],[2.397,11.895],[2.058,12.355],[2.263,12.419],[0.992,13.107],[0.993,13.375],[1.189,13.318],[1.212,13.379],[1.245,13.34],[1.285,13.355],[1.244,13.394],[1.201,13.39],[1.028,13.466],[0.995,13.567],[0.776,13.644],[0.774,13.687],[0.619,13.685],[0.381,14.056],[0.169,14.517],[0.239,15.001]]]]}},{"type":"Feature","properties":{"code":"BI","name":"Burundi"},"geometry":{"type":"MultiPolygon","coordinates":[[[[30.545,-2.414],[30.429,-2.311],[30.14,-2.436],[29.959,-2.333],[29.882,-2.751],[29.368,-2.829],[29.322,-2.648],[29.056,-2.586],[29.041,-2.742],[29.002,-2.785],[29.004,-2.82],[29.05,-2.818],[29.091,-2.879],[29.098,-2.919],[29.16,-2.955],[29.173,-2.994],[29.256,-3.055],[29.215,-3.351],[29.237,-3.759],[29.437,-4.448],[29.638,-4.447],[29.751,-4.458],[29.773,-4.417],[29.829,-4.362],[29.882,-4.357],[30.033,-4.266],[30.22,-4.017],[30.459,-3.565],[30.842,-3.252],[30.838,-2.978],[30.668,-2.99],[30.579,-2.898],[30.499,-2.957],[30.407,-2.862],[30.527,-2.658],[30.418,-2.663],[30.545,-2.414]]]]}},{"type":"Feature","properties":{"code":"KH","name":"Cambodia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[105.873,11.56],[105.816,11.569],[105.809,11.605],[105.851,11.666],[105.89,11.679],[105.952,11.637],[106.008,11.72],[106.02,11.775],[106.067,11.778],[106.132,11.733],[106.185,11.752],[106.265,11.721],[106.305,11.675],[106.372,11.698],[106.447,11.668],[106.452,11.686],[106.416,11.77],[106.445,11.828],[106.441,11.863],[106.469,11.868],[106.411,11.974],[106.707,11.97],[106.794,12.081],[106.923,12.065],[107,12.09],[107.158,12.275],[107.345,12.333],[107.429,12.247],[107.446,12.294],[107.551,12.368],[107.576,12.522],[107.56,12.798],[107.496,12.889],[107.491,13.012],[107.628,13.367],[107.619,13.526],[107.535,13.739],[107.453,13.789],[107.465,13.916],[107.443,13.998],[107.382,13.991],[107.358,14.023],[107.372,14.079],[107.336,14.118],[107.404,14.245],[107.395,14.327],[107.449,14.416],[107.485,14.403],[107.526,14.547],[107.521,14.59],[107.554,14.628],[107.544,14.691],[107.472,14.615],[107.444,14.528],[107.379,14.544],[107.328,14.588],[107.298,14.59],[107.265,14.543],[107.256,14.487],[107.212,14.487],[107.17,14.418],[107.097,14.394],[107.04,14.451],[107.046,14.418],[106.988,14.368],[106.965,14.32],[106.906,14.336],[106.85,14.294],[106.808,14.312],[106.738,14.427],[106.633,14.442],[106.599,14.51],[106.571,14.505],[106.541,14.596],[106.507,14.59],[106.459,14.55],[106.478,14.51],[106.439,14.52],[106.409,14.452],[106.324,14.44],[106.252,14.484],[106.213,14.362],[106.001,14.37],[105.995,14.327],[106.023,14.306],[106.048,14.204],[106.109,14.184],[106.12,14.113],[106.187,14.063],[106.166,14.018],[106.101,13.985],[106.104,13.914],[105.908,13.929],[105.782,14.022],[105.783,14.084],[105.556,14.157],[105.449,14.107],[105.368,14.099],[105.276,14.175],[105.209,14.35],[105.177,14.344],[105.14,14.239],[105.084,14.204],[105.028,14.237],[104.977,14.388],[104.693,14.427],[104.55,14.361],[104.276,14.399],[103.938,14.34],[103.702,14.381],[103.711,14.435],[103.535,14.426],[103.394,14.356],[103.165,14.331],[102.933,14.19],[102.913,14.015],[102.779,13.934],[102.727,13.778],[102.568,13.694],[102.548,13.659],[102.586,13.629],[102.625,13.609],[102.576,13.605],[102.536,13.569],[102.446,13.564],[102.369,13.575],[102.338,13.556],[102.361,13.506],[102.356,13.473],[102.357,13.383],[102.346,13.356],[102.36,13.311],[102.361,13.26],[102.434,13.091],[102.46,13.081],[102.523,12.998],[102.487,12.975],[102.493,12.927],[102.531,12.775],[102.499,12.717],[102.52,12.661],[102.576,12.654],[102.78,12.438],[102.781,12.403],[102.731,12.371],[102.702,12.169],[102.77,12.068],[102.784,11.987],[102.84,11.852],[102.91,11.756],[102.914,11.655],[102.524,11.253],[102.476,9.662],[103.992,10.484],[104.438,10.424],[104.48,10.43],[104.499,10.406],[104.59,10.531],[104.879,10.528],[104.951,10.64],[105.096,10.727],[105.027,10.892],[105.083,10.957],[105.114,10.963],[105.34,10.862],[105.429,10.969],[105.5,10.946],[105.778,11.037],[105.864,10.898],[105.846,10.859],[105.934,10.839],[105.945,10.917],[106.067,10.81],[106.185,10.795],[106.143,10.982],[106.201,10.978],[106.176,11.073],[106.153,11.105],[106.104,11.079],[105.868,11.283],[105.89,11.436],[105.873,11.56]]]]}},{"type":"Feature","properties":{"code":"CM","name":"Cameroon"},"geometry":{"type":"MultiPolygon","coordinates":[[[[14.833,12.63],[14.551,12.783],[14.561,12.91],[14.469,13.083],[14.083,13.08],[14.202,12.534],[14.175,12.419],[14.222,12.365],[14.484,12.352],[14.647,12.175],[14.616,11.78],[14.552,11.72],[14.646,11.662],[14.612,11.513],[14.178,11.238],[13.975,11.303],[13.789,11.002],[13.74,11.006],[13.708,10.945],[13.734,10.925],[13.55,10.612],[13.57,10.532],[13.436,10.133],[13.341,10.123],[13.25,10.036],[13.253,10.001],[13.286,9.982],[13.274,9.932],[13.241,9.91],[13.25,9.86],[13.299,9.83],[13.255,9.768],[13.226,9.573],[13.024,9.493],[12.856,9.367],[12.92,9.339],[12.9,9.114],[12.811,8.92],[12.79,8.754],[12.717,8.759],[12.687,8.659],[12.441,8.615],[12.449,8.525],[12.261,8.437],[12.248,8.179],[12.193,8.108],[12.209,7.976],[11.999,7.673],[12.018,7.53],[11.932,7.478],[11.849,7.261],[11.874,7.094],[11.631,6.99],[11.558,6.862],[11.578,6.741],[11.515,6.609],[11.423,6.588],[11.42,6.538],[11.095,6.517],[11.096,6.684],[10.943,6.693],[10.818,6.834],[10.837,6.936],[10.608,7.069],[10.597,7.147],[10.572,7.163],[10.536,6.934],[10.215,6.89],[10.151,7.038],[9.863,6.778],[9.778,6.791],[9.707,6.517],[9.518,6.439],[8.842,5.826],[8.882,5.789],[8.837,5.685],[8.92,5.584],[8.78,5.124],[8.603,4.874],[8.344,4.307],[9.22,3.721],[9.812,2.338],[9.821,2.351],[9.838,2.324],[9.832,2.291],[9.847,2.247],[9.89,2.205],[9.907,2.2],[9.991,2.166],[11.356,2.172],[11.371,2.3],[13.285,2.257],[13.295,2.161],[14.611,2.179],[15.01,1.989],[15.226,2.032],[15.348,1.913],[15.489,1.983],[16.03,1.765],[16.026,1.656],[16.146,1.703],[16.053,1.981],[16.086,2.197],[16.156,2.19],[16.194,2.215],[16.083,2.457],[16.054,3.023],[15.777,3.268],[15.735,3.243],[15.077,4.018],[15.175,4.051],[15.106,4.136],[15.086,4.303],[15.008,4.415],[14.734,4.614],[14.655,5.213],[14.571,5.24],[14.527,5.283],[14.625,5.514],[14.59,5.598],[14.624,5.705],[14.61,5.918],[14.495,5.917],[14.429,6.005],[14.431,6.089],[14.561,6.189],[14.742,6.264],[14.801,6.349],[14.8,6.39],[14.963,6.757],[15.047,6.771],[15.234,7.251],[15.497,7.522],[15.57,7.589],[15.593,7.77],[15.507,7.793],[15.204,8.509],[15.095,8.66],[14.836,8.806],[14.357,9.196],[14.371,9.295],[13.975,9.636],[14.018,9.732],[14.132,9.824],[14.204,10.001],[14.467,10.003],[14.801,9.938],[14.957,9.979],[15.06,9.948],[15.14,9.992],[15.246,9.992],[15.414,9.929],[15.688,9.993],[15.505,10.11],[15.309,10.311],[15.237,10.478],[15.149,10.539],[15.155,10.628],[15.067,10.809],[15.091,10.874],[15.05,11.023],[15.1,11.041],[15.059,11.405],[15.131,11.554],[15.066,11.711],[15.116,11.793],[15.048,11.873],[15.058,12.061],[15.035,12.107],[15.001,12.122],[14.97,12.092],[14.89,12.166],[14.908,12.327],[14.833,12.63]]]]}},{"type":"Feature","properties":{"code":"CA","name":"Canada"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-67.203,45.172],[-67.196,45.168],[-67.16,45.162],[-67.113,45.112],[-67.022,44.953],[-66.968,44.91],[-66.982,44.871],[-66.968,44.831],[-66.934,44.826],[-67.445,43.293],[-58.787,43.174],[-56.275,47.397],[-55.601,46.168],[-51.156,46.59],[-59.169,67.671],[-77.53,77.234],[-68.218,80.486],[-55.299,83.525],[-92.549,83.45],[-140.993,71.856],[-141.001,60.306],[-140.523,60.221],[-140.456,60.309],[-139.98,60.18],[-139.69,60.337],[-139.058,60.352],[-139.206,60.089],[-139.054,59.997],[-138.711,59.907],[-138.621,59.764],[-137.606,59.245],[-137.493,58.894],[-136.826,59.162],[-136.524,59.168],[-136.473,59.466],[-136.337,59.445],[-136.224,59.555],[-136.316,59.591],[-135.48,59.799],[-135.031,59.562],[-135.003,59.287],[-134.705,59.246],[-134.557,59.13],[-134.481,59.132],[-134.272,58.863],[-133.846,58.735],[-133.385,58.428],[-131.827,56.622],[-130.778,56.362],[-130.34,56.108],[-130.102,56.122],[-130.001,56.003],[-130.009,55.913],[-130.154,55.749],[-129.975,55.28],[-130.08,55.216],[-130.188,55.077],[-130.272,54.972],[-130.442,54.854],[-130.645,54.769],[-130.619,54.708],[-133.929,54.623],[-132.759,51.632],[-125.038,48.533],[-123.5,48.212],[-123.156,48.354],[-123.266,48.696],[-123.009,48.766],[-123.009,48.832],[-123.322,49.004],[-95.154,49],[-95.154,49.384],[-95.129,49.371],[-95.058,49.353],[-95.014,49.356],[-94.995,49.366],[-94.957,49.37],[-94.854,49.325],[-94.816,49.323],[-94.825,49.295],[-94.774,49.12],[-94.75,49.099],[-94.687,48.841],[-94.701,48.834],[-94.705,48.824],[-94.697,48.809],[-94.693,48.779],[-94.589,48.718],[-94.549,48.715],[-94.538,48.702],[-94.443,48.692],[-94.417,48.71],[-94.272,48.702],[-94.252,48.684],[-94.251,48.657],[-94.232,48.652],[-93.858,48.633],[-93.833,48.627],[-93.807,48.582],[-93.809,48.524],[-93.793,48.516],[-93.664,48.518],[-93.47,48.544],[-93.445,48.591],[-93.407,48.609],[-93.398,48.604],[-93.371,48.606],[-93.339,48.628],[-93.254,48.643],[-92.95,48.609],[-92.729,48.54],[-92.634,48.541],[-92.627,48.503],[-92.699,48.496],[-92.713,48.461],[-92.656,48.435],[-92.507,48.449],[-92.456,48.406],[-92.481,48.366],[-92.372,48.223],[-92.272,48.25],[-92.309,48.313],[-92.267,48.357],[-92.202,48.353],[-92.147,48.366],[-92.053,48.36],[-91.989,48.254],[-91.861,48.213],[-91.712,48.199],[-91.705,48.118],[-91.556,48.106],[-91.58,48.043],[-91.458,48.075],[-91.432,48.049],[-91.25,48.085],[-91.08,48.181],[-90.876,48.248],[-90.75,48.091],[-90.564,48.122],[-90.563,48.095],[-90.074,48.11],[-89.9,47.981],[-89.772,48.026],[-89.58,48],[-89.488,48.014],[-88.37,48.306],[-84.859,46.889],[-84.556,46.46],[-84.476,46.452],[-84.448,46.49],[-84.421,46.499],[-84.342,46.507],[-84.299,46.491],[-84.264,46.495],[-84.226,46.533],[-84.195,46.541],[-84.177,46.528],[-84.129,46.531],[-84.112,46.502],[-84.135,46.392],[-84.113,46.323],[-84.116,46.268],[-84.098,46.255],[-84.11,46.24],[-83.954,46.056],[-83.905,46.059],[-83.833,46.122],[-83.57,46.105],[-83.437,45.997],[-83.596,45.821],[-82.484,45.302],[-82.425,42.992],[-82.415,42.976],[-82.425,42.954],[-82.453,42.931],[-82.483,42.807],[-82.466,42.766],[-82.511,42.66],[-82.519,42.611],[-82.576,42.572],[-82.589,42.55],[-82.642,42.556],[-82.83,42.374],[-83.023,42.33],[-83.078,42.31],[-83.098,42.289],[-83.127,42.238],[-83.15,42.041],[-83.112,41.957],[-82.679,41.676],[-78.937,42.829],[-78.907,42.897],[-78.909,42.93],[-78.932,42.952],[-78.963,42.955],[-78.981,42.97],[-79.021,42.984],[-79.024,43.02],[-78.999,43.056],[-79.011,43.067],[-79.075,43.078],[-79.057,43.109],[-79.069,43.12],[-79.043,43.139],[-79.047,43.164],[-79.054,43.174],[-79.05,43.201],[-79.055,43.212],[-79.055,43.254],[-79.069,43.262],[-79.258,43.541],[-76.797,43.631],[-76.439,44.094],[-76.353,44.135],[-76.312,44.199],[-76.244,44.196],[-76.166,44.231],[-76.163,44.283],[-76,44.349],[-75.959,44.345],[-75.822,44.432],[-75.768,44.515],[-75.414,44.766],[-75.219,44.878],[-75.014,44.956],[-74.991,44.981],[-74.845,45.006],[-74.667,45.006],[-74.327,44.99],[-73.35,45.009],[-71.501,45.014],[-71.487,45.078],[-71.428,45.126],[-71.404,45.214],[-71.443,45.236],[-71.371,45.246],[-71.294,45.3],[-71.223,45.252],[-71.197,45.254],[-71.146,45.241],[-71.084,45.306],[-71.019,45.316],[-71.011,45.348],[-70.952,45.339],[-70.912,45.298],[-70.899,45.24],[-70.848,45.227],[-70.802,45.374],[-70.826,45.398],[-70.784,45.433],[-70.654,45.376],[-70.625,45.423],[-70.727,45.498],[-70.685,45.57],[-70.54,45.673],[-70.389,45.732],[-70.415,45.795],[-70.26,45.897],[-70.247,45.951],[-70.31,45.964],[-70.239,46.145],[-70.291,46.188],[-70.185,46.354],[-70.058,46.418],[-70,46.695],[-69.221,47.465],[-69.051,47.42],[-69.051,47.301],[-69.05,47.246],[-68.892,47.181],[-68.701,47.244],[-68.606,47.247],[-68.579,47.284],[-68.383,47.287],[-68.375,47.359],[-68.232,47.357],[-67.948,47.193],[-67.88,47.104],[-67.786,47.065],[-67.781,45.939],[-67.752,45.918],[-67.81,45.875],[-67.757,45.823],[-67.807,45.8],[-67.807,45.695],[-67.605,45.607],[-67.438,45.592],[-67.421,45.506],[-67.506,45.49],[-67.424,45.38],[-67.482,45.274],[-67.349,45.122],[-67.298,45.149],[-67.297,45.182],[-67.27,45.193],[-67.228,45.163],[-67.203,45.172]]]]}},{"type":"Feature","properties":{"code":"ES","name":"Canary Islands","country":"Spain"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-12.777,29.636],[-18.434,29.109],[-18.36,27.335],[-14.439,27.03],[-12.777,29.636]]]]}},{"type":"Feature","properties":{"code":"CV","name":"Cape Verde"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-26.246,15.935],[-23.967,13.966],[-21.755,16.43],[-24.903,17.862],[-26.246,15.935]]]]}},{"type":"Feature","properties":{"code":"KY","name":"Cayman Islands","country":"United Kingdom"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-81.686,19.397],[-81.247,19.135],[-79.484,19.773],[-79.829,19.824],[-81.686,19.397]]]]}},{"type":"Feature","properties":{"code":"CF","name":"Central African Republic"},"geometry":{"type":"MultiPolygon","coordinates":[[[[22.878,10.919],[22.459,11.002],[21.721,10.641],[21.715,10.299],[21.636,10.217],[21.528,10.21],[21.349,9.959],[21.263,9.976],[20.83,9.447],[20.367,9.11],[19.064,9.004],[18.864,8.88],[19.11,8.682],[18.798,8.259],[18.675,8.222],[18.626,8.142],[18.642,8.087],[18.608,8.05],[18.027,8.011],[17.939,7.959],[17.673,7.989],[16.814,7.54],[16.667,7.673],[16.658,7.754],[16.594,7.764],[16.583,7.887],[16.416,7.78],[16.407,7.688],[15.799,7.441],[15.731,7.52],[15.497,7.522],[15.234,7.251],[15.047,6.771],[14.963,6.757],[14.8,6.39],[14.801,6.349],[14.742,6.264],[14.561,6.189],[14.431,6.089],[14.429,6.005],[14.495,5.917],[14.61,5.918],[14.624,5.705],[14.59,5.598],[14.625,5.514],[14.527,5.283],[14.571,5.24],[14.655,5.213],[14.734,4.614],[15.008,4.415],[15.086,4.303],[15.106,4.136],[15.175,4.051],[15.077,4.018],[15.735,3.243],[15.777,3.268],[16.054,3.023],[16.083,2.457],[16.194,2.215],[16.501,2.847],[16.467,2.925],[16.576,3.48],[16.683,3.543],[17.017,3.551],[17.356,3.63],[17.469,3.705],[17.61,3.637],[17.834,3.611],[17.858,3.534],[18.057,3.569],[18.149,3.545],[18.173,3.477],[18.241,3.503],[18.272,3.58],[18.396,3.582],[18.492,3.639],[18.587,3.494],[18.628,3.476],[18.586,3.777],[18.663,4.008],[18.548,4.322],[18.773,4.41],[19.075,4.91],[19.38,5.088],[19.679,5.146],[20.091,4.921],[20.602,4.424],[20.904,4.449],[21.088,4.396],[21.112,4.339],[21.213,4.293],[21.257,4.337],[21.559,4.256],[21.64,4.317],[22.107,4.207],[22.277,4.113],[22.455,4.13],[22.543,4.22],[22.609,4.488],[22.693,4.473],[22.785,4.714],[22.847,4.699],[22.891,4.793],[22.948,4.824],[23.388,4.6],[24.467,5.091],[24.718,4.905],[25.313,5.037],[25.346,5.291],[25.533,5.374],[25.861,5.195],[26.134,5.256],[26.486,5.05],[26.746,5.107],[26.856,5.039],[26.931,5.135],[27.096,5.223],[27.44,5.073],[27.269,5.259],[27.23,5.372],[27.286,5.564],[27.227,5.629],[27.227,5.713],[26.517,6.097],[26.583,6.199],[26.327,6.363],[26.38,6.635],[25.901,7.095],[25.375,7.33],[25.353,7.426],[25.203,7.503],[25.206,7.611],[25.292,7.667],[25.253,7.849],[24.989,7.966],[24.852,8.169],[24.36,8.262],[24.132,8.37],[24.257,8.693],[23.519,8.717],[23.591,8.997],[23.447,8.991],[23.485,9.17],[23.563,9.194],[23.644,9.286],[23.65,9.443],[23.622,9.538],[23.692,9.676],[23.672,9.869],[23.313,10.452],[23.022,10.692],[22.878,10.919]]]]}},{"type":"Feature","properties":{"code":"ES","name":"Ceuta","country":"Spain"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-5.385,35.926],[-5.373,35.884],[-5.358,35.874],[-5.344,35.871],[-5.212,35.901],[-5.385,35.926]]]]}},{"type":"Feature","properties":{"code":"TD","name":"Chad"},"geometry":{"type":"MultiPolygon","coordinates":[[[[23.995,19.499],[15.996,23.496],[14.998,23.005],[15.197,21.993],[15.202,21.494],[15.283,21.446],[15.625,20.954],[15.572,20.921],[15.554,20.865],[15.56,20.795],[15.598,20.74],[15.672,20.701],[15.996,20.354],[15.751,19.93],[15.603,18.774],[15.504,16.896],[14.374,15.726],[13.863,15.04],[13.79,14.875],[13.809,14.729],[13.679,14.64],[13.686,14.553],[13.483,14.467],[13.476,14.409],[13.63,13.711],[14.083,13.08],[14.469,13.083],[14.561,12.91],[14.551,12.783],[14.833,12.63],[14.908,12.327],[14.89,12.166],[14.97,12.092],[15.001,12.122],[15.035,12.107],[15.058,12.061],[15.048,11.873],[15.116,11.793],[15.066,11.711],[15.131,11.554],[15.059,11.405],[15.1,11.041],[15.05,11.023],[15.091,10.874],[15.067,10.809],[15.155,10.628],[15.149,10.539],[15.237,10.478],[15.309,10.311],[15.505,10.11],[15.688,9.993],[15.414,9.929],[15.246,9.992],[15.14,9.992],[15.06,9.948],[14.957,9.979],[14.801,9.938],[14.467,10.003],[14.204,10.001],[14.132,9.824],[14.018,9.732],[13.975,9.636],[14.371,9.295],[14.357,9.196],[14.836,8.806],[15.095,8.66],[15.204,8.509],[15.507,7.793],[15.593,7.77],[15.57,7.589],[15.497,7.522],[15.731,7.52],[15.799,7.441],[16.407,7.688],[16.416,7.78],[16.583,7.887],[16.594,7.764],[16.658,7.754],[16.667,7.673],[16.814,7.54],[17.673,7.989],[17.939,7.959],[18.027,8.011],[18.608,8.05],[18.642,8.087],[18.626,8.142],[18.675,8.222],[18.798,8.259],[19.11,8.682],[18.864,8.88],[19.064,9.004],[20.367,9.11],[20.83,9.447],[21.263,9.976],[21.349,9.959],[21.528,10.21],[21.636,10.217],[21.715,10.299],[21.721,10.641],[22.459,11.002],[22.878,10.919],[22.972,11.22],[22.931,11.416],[22.8,11.404],[22.549,11.644],[22.641,12.075],[22.484,12.028],[22.505,12.168],[22.389,12.455],[22.463,12.619],[22.227,12.747],[22.157,12.666],[21.987,12.633],[21.894,12.68],[21.814,12.814],[21.948,13.056],[22.029,13.14],[22.16,13.193],[22.297,13.373],[22.087,13.779],[22.23,13.968],[22.555,14.117],[22.56,14.23],[22.449,14.25],[22.386,14.589],[22.705,14.691],[22.661,14.863],[22.996,15.23],[22.996,15.401],[22.926,15.47],[22.932,15.551],[23.108,15.713],[23.388,15.696],[23.628,15.78],[24,15.696],[23.995,19.499]]]]}},{"type":"Feature","properties":{"code":"NZ","name":"Chatham Islands","country":"New Zealand"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-179.932,-45.184],[-172.47,-45.179],[-176.31,-41.384],[-179.932,-45.184]]]]}},{"type":"Feature","properties":{"code":"CL","name":"Chile"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-68.607,-52.658],[-68.417,-52.335],[-69.978,-52.008],[-71.999,-51.98],[-72.339,-51.6],[-72.313,-50.584],[-73.158,-50.783],[-73.553,-49.925],[-73.452,-49.795],[-72.979,-49.787],[-73.097,-49.143],[-72.569,-48.811],[-72.54,-48.524],[-72.277,-48.287],[-72.505,-47.806],[-71.942,-47.136],[-71.686,-46.554],[-71.756,-45.616],[-71.357,-45.221],[-72.07,-44.818],[-71.264,-44.757],[-71.164,-44.462],[-71.813,-44.381],[-71.642,-43.648],[-72.148,-42.853],[-72.155,-42.159],[-71.749,-42.117],[-71.927,-40.727],[-71.378,-38.915],[-70.895,-38.692],[-71.243,-37.203],[-70.95,-36.432],[-70.38,-36.024],[-70.494,-35.241],[-69.874,-34.133],[-69.881,-33.345],[-70.558,-31.516],[-70.145,-30.366],[-69.86,-30.261],[-69.995,-29.284],[-69.81,-29.072],[-69.667,-28.441],[-69.225,-27.95],[-68.776,-27.16],[-68.434,-27.084],[-68.277,-26.906],[-68.59,-26.499],[-68.569,-26.281],[-68.384,-26.154],[-68.576,-25.325],[-68.384,-25.086],[-68.569,-24.698],[-68.248,-24.426],[-67.336,-24.042],[-66.996,-22.998],[-67.184,-22.815],[-67.543,-22.898],[-67.851,-22.871],[-68.188,-21.286],[-68.404,-20.946],[-68.54,-20.915],[-68.554,-20.735],[-68.44,-20.627],[-68.728,-20.462],[-68.743,-20.088],[-68.571,-20.031],[-68.546,-19.847],[-68.668,-19.721],[-68.412,-19.405],[-68.62,-19.276],[-68.806,-19.084],[-68.871,-19.06],[-68.95,-18.933],[-69.074,-18.283],[-69.148,-18.169],[-69.075,-18.037],[-69.287,-17.948],[-69.341,-17.728],[-69.466,-17.605],[-69.469,-17.499],[-69.665,-17.651],[-69.791,-17.656],[-69.829,-17.72],[-69.753,-17.946],[-69.816,-18.126],[-69.967,-18.26],[-70.164,-18.317],[-70.313,-18.313],[-70.378,-18.349],[-70.591,-18.351],[-76.729,-50.022],[-73.729,-54.508],[-66.899,-56.418],[-66.073,-55.196],[-67.11,-54.942],[-67.462,-54.922],[-68.014,-54.875],[-68.607,-54.913],[-68.607,-52.658]]]]}},{"type":"Feature","properties":{"code":"CN","name":"China"},"geometry":{"type":"MultiPolygon","coordinates":[[[[125.613,53.072],[125.175,53.202],[124.461,53.219],[123.862,53.494],[123.27,53.548],[122.86,53.474],[122.351,53.496],[121.392,53.319],[120.856,53.285],[120.045,52.736],[120.04,52.588],[120.465,52.638],[120.717,52.541],[120.613,52.324],[120.773,52.208],[120.659,51.935],[120.11,51.671],[119.136,50.374],[119.386,50.352],[119.28,50.133],[119.11,50.003],[118.616,49.938],[117.823,49.527],[117.482,49.623],[117.276,49.625],[116.712,49.838],[116.038,48.87],[116.066,48.817],[115.789,48.518],[115.811,48.257],[115.521,48.154],[115.571,47.92],[115.943,47.677],[116.219,47.885],[116.447,47.837],[116.674,47.89],[116.972,47.873],[117.379,47.636],[117.502,47.772],[117.802,48.017],[118.037,48.01],[118.11,48.04],[118.227,48.039],[118.297,48.002],[118.558,47.993],[118.756,47.769],[119.123,47.665],[119.14,47.54],[119.359,47.481],[119.32,47.426],[119.549,47.295],[119.56,47.249],[119.624,47.246],[119.712,47.192],[119.855,46.922],[119.912,46.901],[119.893,46.664],[119.805,46.676],[119.774,46.629],[119.681,46.59],[119.653,46.623],[119.428,46.638],[119.328,46.614],[119.25,46.648],[119.104,46.655],[119.005,46.743],[118.926,46.728],[118.9,46.771],[118.834,46.777],[118.787,46.687],[118.305,46.735],[117.696,46.51],[117.607,46.598],[117.418,46.579],[117.366,46.363],[116.832,46.386],[116.756,46.331],[116.586,46.302],[116.267,45.965],[116.24,45.878],[116.274,45.786],[116.17,45.686],[115.603,45.447],[114.945,45.374],[114.746,45.436],[114.548,45.383],[114.517,45.272],[113.709,44.729],[112.747,44.863],[112.416,45.069],[111.987,45.091],[111.763,44.98],[111.405,44.346],[111.963,43.816],[111.938,43.687],[111.798,43.664],[111.591,43.512],[111.015,43.329],[110.433,42.783],[110.084,42.641],[109.894,42.631],[109.452,42.448],[109.007,42.453],[108.845,42.402],[107.573,42.409],[107.497,42.462],[107.298,42.414],[107.248,42.361],[106.765,42.287],[105.012,41.632],[104.517,41.661],[104.523,41.871],[103.928,41.782],[102.724,42.147],[102.076,42.225],[101.805,42.501],[100.85,42.671],[100.333,42.682],[99.507,42.565],[97.178,42.796],[96.379,42.721],[96.357,42.904],[95.895,43.253],[95.526,43.994],[95.329,44.024],[95.398,44.281],[95.012,44.253],[94.72,44.353],[94.1,44.71],[93.512,44.96],[91.64,45.074],[90.892,45.197],[90.651,45.493],[90.709,45.734],[91.03,46.042],[90.997,46.142],[90.896,46.307],[91.077,46.573],[91.015,46.582],[91.036,46.729],[90.84,46.995],[90.761,46.994],[90.485,47.304],[90.489,47.418],[90.336,47.683],[90.109,47.737],[90.065,47.882],[89.766,47.827],[89.555,48.042],[89.071,47.985],[88.932,48.103],[88.801,48.113],[88.583,48.219],[88.589,48.345],[87.964,48.585],[88.079,48.714],[87.738,48.896],[87.882,48.959],[87.813,49.174],[87.49,49.138],[87.478,49.074],[87.284,49.116],[86.872,49.124],[86.736,48.999],[86.753,48.703],[86.381,48.461],[85.736,48.394],[85.517,48.055],[85.611,47.498],[85.697,47.29],[85.543,47.062],[85.224,47.048],[84.94,46.874],[84.731,47.014],[83.922,46.989],[83.046,47.191],[82.218,45.566],[82.585,45.4],[82.514,45.175],[81.733,45.35],[80.112,45.034],[79.899,44.9],[80.384,44.631],[80.402,44.233],[80.4,44.11],[80.752,43.449],[80.697,43.326],[80.778,43.301],[80.788,43.142],[80.629,43.141],[80.374,43.016],[80.59,42.901],[80.382,42.831],[80.269,42.837],[80.169,42.611],[80.268,42.238],[80.178,42.212],[80.178,42.032],[79.93,42.041],[78.373,41.396],[78.158,41.386],[78.129,41.231],[77.813,41.143],[77.762,41.016],[77.527,41.002],[77.369,41.038],[77.28,41.003],[76.993,41.07],[76.757,40.954],[76.526,40.461],[76.337,40.348],[75.962,40.381],[75.914,40.295],[75.697,40.286],[75.585,40.669],[75.228,40.454],[75.082,40.439],[74.82,40.522],[74.782,40.449],[74.86,40.329],[74.699,40.347],[74.351,40.097],[74.255,40.132],[73.97,40.044],[73.83,39.761],[73.905,39.751],[73.924,39.696],[73.947,39.607],[73.87,39.479],[73.598,39.464],[73.592,39.408],[73.5,39.384],[73.554,39.354],[73.546,39.276],[73.606,39.245],[73.758,39.023],[73.817,39.04],[73.83,38.915],[73.745,38.939],[73.703,38.848],[73.807,38.664],[73.798,38.611],[73.979,38.529],[74.17,38.655],[74.512,38.47],[74.696,38.429],[74.699,38.222],[74.803,38.199],[74.827,38.074],[74.906,38.03],[74.924,37.834],[75.009,37.775],[74.891,37.676],[74.943,37.555],[75.06,37.528],[75.159,37.414],[75.097,37.373],[75.123,37.318],[74.889,37.233],[74.806,37.216],[74.5,37.245],[74.565,37.03],[75.138,37.026],[75.405,36.954],[75.456,36.72],[75.727,36.753],[75.924,36.57],[76.032,36.412],[76.009,36.175],[75.93,36.131],[76.153,35.926],[76.149,35.828],[76.335,35.843],[76.51,35.891],[76.773,35.661],[76.845,35.674],[76.966,35.593],[77.443,35.461],[77.702,35.462],[77.805,35.521],[78.117,35.48],[78.035,35.379],[78,35.24],[78.227,34.888],[78.184,34.8],[78.278,34.615],[78.55,34.573],[78.565,34.508],[78.745,34.452],[79.054,34.325],[78.998,34.303],[78.918,34.155],[78.662,34.089],[78.657,34.032],[78.734,34.011],[78.773,33.739],[78.676,33.664],[78.736,33.565],[79.153,33.172],[79.14,33.025],[79.466,32.697],[79.268,32.533],[79.132,32.478],[79.098,32.381],[78.993,32.379],[78.967,32.337],[78.783,32.469],[78.739,32.694],[78.389,32.539],[78.465,32.454],[78.496,32.276],[78.688,32.103],[78.744,32.004],[78.78,31.995],[78.699,31.787],[78.845,31.606],[78.71,31.502],[78.779,31.312],[78.893,31.305],[79.019,31.428],[79.14,31.434],[79.307,31.174],[79.599,30.939],[79.933,30.883],[80.207,30.585],[80.545,30.449],[80.833,30.32],[81.04,30.201],[81.128,30.014],[81.244,30.013],[81.29,30.088],[81.262,30.146],[81.334,30.153],[81.399,30.219],[81.41,30.422],[81.546,30.377],[81.62,30.447],[81.991,30.334],[82.101,30.354],[82.108,30.237],[82.195,30.169],[82.17,30.069],[82.386,30.026],[82.534,29.974],[82.73,29.817],[83.071,29.62],[83.281,29.568],[83.448,29.305],[83.632,29.162],[83.823,29.305],[83.976,29.331],[84.181,29.235],[84.248,29.028],[84.223,28.896],[84.475,28.74],[84.623,28.739],[84.855,28.58],[85.061,28.686],[85.191,28.628],[85.187,28.541],[85.107,28.341],[85.381,28.283],[85.423,28.33],[85.598,28.305],[85.609,28.25],[85.691,28.385],[85.719,28.381],[85.749,28.231],[85.847,28.182],[85.907,28.051],[85.978,27.99],[85.949,27.94],[86.063,27.9],[86.121,27.93],[86.083,28.021],[86.088,28.093],[86.186,28.174],[86.23,27.979],[86.427,27.911],[86.516,27.966],[86.563,28.096],[86.742,28.106],[86.756,28.042],[87.038,27.948],[87.117,27.841],[87.57,27.845],[87.727,27.809],[87.827,27.952],[88.134,27.88],[88.128,27.954],[88.253,27.948],[88.549,28.061],[88.632,28.124],[88.836,28.019],[88.881,27.852],[88.775,27.454],[88.83,27.388],[88.919,27.325],[88.937,27.338],[88.969,27.303],[89.002,27.325],[88.954,27.411],[88.972,27.517],[89.058,27.61],[89.128,27.625],[89.595,28.164],[89.798,28.24],[90.134,28.192],[90.588,28.028],[90.699,28.078],[91.2,27.987],[91.258,28.075],[91.463,28.006],[91.49,27.939],[91.563,27.848],[91.647,27.764],[91.847,27.763],[91.871,27.72],[92.274,27.891],[92.321,27.794],[92.425,27.801],[92.728,27.987],[92.73,28.058],[92.655,28.076],[92.675,28.15],[92.931,28.257],[93.146,28.37],[93.181,28.503],[93.446,28.672],[93.728,28.688],[94.359,29.02],[94.275,29.117],[94.693,29.317],[94.814,29.178],[95.098,29.144],[95.113,29.095],[95.221,29.107],[95.261,29.077],[95.304,29.138],[95.411,29.13],[95.508,29.135],[95.721,29.208],[95.751,29.321],[95.849,29.315],[96.054,29.382],[96.313,29.186],[96.187,29.111],[96.205,29.023],[96.363,29.106],[96.614,28.727],[96.409,28.515],[96.489,28.43],[96.645,28.617],[96.856,28.488],[96.884,28.395],[96.989,28.326],[97.129,28.362],[97.345,28.214],[97.417,28.298],[97.471,28.269],[97.505,28.497],[97.568,28.556],[97.707,28.506],[97.796,28.332],[97.901,28.378],[98.153,28.121],[98.14,27.948],[98.326,27.514],[98.425,27.554],[98.434,27.671],[98.696,27.565],[98.733,26.856],[98.775,26.62],[98.727,26.362],[98.678,26.245],[98.733,26.172],[98.669,26.092],[98.631,26.155],[98.571,26.115],[98.608,26.015],[98.708,25.862],[98.631,25.799],[98.541,25.851],[98.406,25.611],[98.313,25.553],[98.258,25.605],[98.168,25.627],[98.181,25.563],[98.126,25.507],[98.149,25.415],[97.925,25.208],[97.836,25.271],[97.77,25.115],[97.722,25.085],[97.729,24.913],[97.799,24.857],[97.765,24.829],[97.731,24.83],[97.702,24.846],[97.644,24.792],[97.566,24.765],[97.564,24.755],[97.554,24.749],[97.547,24.742],[97.565,24.728],[97.563,24.545],[97.528,24.437],[97.6,24.44],[97.67,24.453],[97.71,24.357],[97.656,24.338],[97.667,24.3],[97.719,24.297],[97.768,24.264],[97.73,24.23],[97.728,24.189],[97.753,24.169],[97.729,24.126],[97.624,24.005],[97.525,23.94],[97.647,23.846],[97.723,23.893],[97.795,23.948],[97.794,23.957],[97.843,23.976],[97.865,23.977],[97.888,23.974],[97.895,23.978],[97.897,23.979],[97.897,23.984],[97.888,23.986],[97.884,23.994],[97.886,24.005],[97.91,24.021],[97.94,24.02],[97.987,24.039],[97.996,24.049],[98.047,24.076],[98.053,24.074],[98.057,24.08],[98.061,24.078],[98.067,24.08],[98.078,24.08],[98.207,24.114],[98.545,24.131],[98.593,24.084],[98.853,24.13],[98.88,24.156],[98.896,24.106],[98.678,23.964],[98.682,23.805],[98.796,23.779],[98.829,23.729],[98.818,23.694],[98.884,23.596],[98.803,23.535],[98.829,23.479],[98.877,23.49],[98.921,23.369],[98.876,23.33],[98.94,23.314],[98.925,23.295],[98.886,23.187],[99.06,23.164],[99.046,23.122],[99.257,23.09],[99.341,23.131],[99.522,23.082],[99.542,22.9],[99.435,22.941],[99.457,22.857],[99.312,22.739],[99.382,22.575],[99.38,22.502],[99.288,22.41],[99.173,22.18],[99.192,22.17],[99.155,22.159],[99.332,22.097],[99.476,22.133],[99.854,22.042],[99.966,22.06],[99.991,21.971],[99.94,21.828],[99.987,21.711],[100.05,21.668],[100.127,21.705],[100.175,21.653],[100.108,21.599],[100.125,21.504],[100.162,21.487],[100.184,21.519],[100.259,21.47],[100.352,21.532],[100.429,21.543],[100.481,21.461],[100.579,21.456],[100.721,21.519],[100.873,21.674],[101.117,21.777],[101.152,21.561],[101.212,21.564],[101.193,21.42],[101.269,21.365],[101.223,21.233],[101.293,21.173],[101.546,21.257],[101.607,21.233],[101.595,21.186],[101.609,21.179],[101.67,21.2],[101.705,21.149],[101.762,21.148],[101.793,21.19],[101.767,21.216],[101.839,21.21],[101.844,21.253],[101.74,21.31],[101.742,21.483],[101.773,21.518],[101.748,21.587],[101.8,21.575],[101.833,21.616],[101.746,21.729],[101.779,21.83],[101.626,21.966],[101.575,22.13],[101.607,22.135],[101.536,22.248],[101.568,22.289],[101.613,22.275],[101.69,22.468],[101.769,22.503],[101.868,22.384],[101.907,22.387],[101.913,22.444],[101.985,22.428],[102.036,22.462],[102.124,22.434],[102.141,22.401],[102.166,22.433],[102.264,22.413],[102.253,22.461],[102.411,22.642],[102.384,22.679],[102.426,22.692],[102.467,22.771],[102.518,22.78],[102.571,22.704],[102.607,22.734],[102.864,22.607],[102.932,22.487],[103.072,22.448],[103.078,22.501],[103.18,22.557],[103.158,22.599],[103.189,22.645],[103.281,22.681],[103.323,22.813],[103.432,22.758],[103.436,22.706],[103.527,22.592],[103.578,22.658],[103.563,22.695],[103.645,22.8],[103.879,22.567],[103.933,22.527],[103.945,22.526],[103.952,22.513],[103.964,22.506],[103.968,22.512],[103.974,22.506],[103.992,22.52],[104.011,22.518],[104.037,22.729],[104.114,22.804],[104.271,22.846],[104.257,22.765],[104.356,22.694],[104.472,22.758],[104.581,22.856],[104.605,22.818],[104.653,22.834],[104.728,22.82],[104.771,22.9],[104.849,22.936],[104.868,22.952],[104.833,23.015],[104.795,23.129],[104.874,23.129],[104.88,23.171],[104.914,23.187],[104.949,23.172],[104.965,23.205],[104.987,23.192],[105.07,23.262],[105.117,23.252],[105.173,23.287],[105.226,23.272],[105.324,23.397],[105.408,23.281],[105.428,23.308],[105.5,23.207],[105.56,23.168],[105.576,23.075],[105.724,23.066],[105.873,22.928],[105.901,22.942],[105.996,22.942],[106.002,22.99],[106.197,22.985],[106.27,22.877],[106.35,22.867],[106.497,22.912],[106.513,22.949],[106.56,22.923],[106.602,22.929],[106.652,22.869],[106.673,22.896],[106.714,22.883],[106.711,22.86],[106.784,22.815],[106.813,22.823],[106.837,22.81],[106.824,22.788],[106.763,22.735],[106.723,22.636],[106.717,22.584],[106.653,22.576],[106.613,22.603],[106.584,22.474],[106.557,22.465],[106.572,22.37],[106.56,22.348],[106.652,22.34],[106.7,22.223],[106.675,22.189],[106.698,22.151],[106.701,22.024],[106.683,21.998],[106.693,21.96],[106.726,21.979],[106.743,22.01],[106.81,21.979],[106.918,21.974],[106.927,21.935],[106.972,21.926],[106.993,21.952],[107.056,21.923],[107.061,21.89],[107.01,21.859],[107.026,21.82],[107.108,21.799],[107.207,21.715],[107.246,21.708],[107.293,21.747],[107.358,21.667],[107.36,21.601],[107.386,21.598],[107.416,21.648],[107.472,21.667],[107.495,21.63],[107.491,21.598],[107.54,21.593],[107.565,21.619],[107.67,21.608],[107.804,21.661],[107.861,21.651],[107.9,21.59],[107.927,21.589],[107.952,21.539],[107.968,21.536],[107.971,21.541],[107.974,21.54],[107.979,21.545],[108.029,21.55],[108.057,21.536],[108.1,21.473],[108.004,17.982],[110.259,17.623],[118.414,24.068],[118.117,24.397],[118.282,24.512],[118.353,24.516],[118.425,24.546],[118.564,24.493],[119.932,25.423],[119.806,26.229],[123.475,30.24],[122.805,33.306],[124.175,39.823],[124.232,39.925],[124.35,39.956],[124.371,40.03],[124.332,40.056],[124.386,40.11],[124.407,40.137],[124.869,40.454],[125.712,40.852],[125.769,40.879],[126.003,40.928],[126.242,41.155],[126.532,41.352],[126.606,41.656],[126.907,41.8],[127.178,41.597],[127.297,41.495],[127.929,41.443],[128.026,41.421],[128.033,41.392],[128.13,41.379],[128.185,41.413],[128.201,41.409],[128.307,41.603],[128.151,41.746],[128.045,42.018],[128.94,42.035],[128.961,42.067],[129.152,42.172],[129.223,42.265],[129.224,42.355],[129.285,42.416],[129.429,42.447],[129.547,42.373],[129.605,42.445],[129.725,42.437],[129.753,42.594],[129.772,42.694],[129.784,42.765],[129.807,42.792],[129.833,42.867],[129.853,42.965],[129.887,43.004],[129.951,43.011],[129.964,42.973],[130.13,42.984],[130.098,42.914],[130.261,42.903],[130.231,42.801],[130.238,42.711],[130.418,42.601],[130.444,42.548],[130.501,42.616],[130.551,42.522],[130.621,42.584],[130.566,42.689],[130.402,42.708],[130.444,42.762],[130.665,42.848],[131.024,42.865],[131.027,42.912],[131.135,42.941],[131.103,43.047],[131.204,43.137],[131.19,43.214],[131.303,43.395],[131.294,43.467],[131.195,43.53],[131.211,43.824],[131.262,43.94],[131.236,43.961],[131.255,44.031],[131.304,44.043],[131.111,44.703],[130.956,44.852],[131.484,44.995],[131.685,45.124],[131.669,45.22],[131.765,45.226],[131.869,45.336],[131.994,45.257],[132.84,45.059],[132.964,45.021],[133.123,45.133],[133.093,45.257],[133.194,45.519],[133.411,45.577],[133.485,45.862],[133.604,45.901],[133.676,45.976],[133.727,46.056],[133.68,46.147],[133.881,46.251],[133.915,46.427],[133.841,46.467],[134.035,46.757],[134.2,47.335],[134.509,47.481],[134.767,47.721],[134.555,47.987],[134.671,48.156],[134.753,48.368],[134.495,48.429],[132.67,47.965],[132.573,47.717],[131.904,47.68],[131.263,47.733],[131.099,47.685],[130.96,47.696],[130.909,47.906],[130.651,48.101],[130.845,48.309],[130.521,48.617],[130.669,48.883],[130.432,48.908],[130.236,48.867],[129.854,49.111],[129.676,49.296],[129.507,49.424],[129.404,49.442],[129.353,49.348],[129.232,49.404],[129.112,49.368],[128.729,49.587],[127.835,49.575],[127.535,49.843],[127.493,50.013],[127.605,50.235],[127.374,50.284],[127.36,50.438],[127.288,50.466],[127.363,50.583],[127.282,50.721],[127.146,50.912],[126.931,51.084],[126.904,51.324],[126.683,51.706],[126.446,51.983],[126.558,52.137],[125.613,53.072]],[[113.569,22.21],[113.571,22.204],[113.605,22.205],[113.63,22.108],[113.572,22.077],[113.548,22.109],[113.549,22.145],[113.541,22.155],[113.527,22.183],[113.536,22.206],[113.533,22.212],[113.536,22.214],[113.541,22.213],[113.543,22.217],[113.551,22.217],[113.569,22.21]],[[114.501,22.15],[113.922,22.139],[113.833,22.183],[113.816,22.216],[113.868,22.43],[114.031,22.506],[114.054,22.503],[114.057,22.511],[114.063,22.516],[114.073,22.519],[114.078,22.53],[114.086,22.533],[114.09,22.537],[114.097,22.534],[114.103,22.535],[114.112,22.529],[114.117,22.534],[114.127,22.54],[114.138,22.543],[114.148,22.541],[114.151,22.552],[114.16,22.56],[114.172,22.559],[114.183,22.554],[114.207,22.557],[114.222,22.553],[114.229,22.544],[114.252,22.56],[114.45,22.56],[114.501,22.15]]]]}},{"type":"Feature","properties":{"code":"CX","name":"Christmas Island","country":"Australia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[105.656,-10.164],[105.353,-10.636],[105.919,-10.636],[105.656,-10.164]]]]}},{"type":"Feature","properties":{"code":"CC","name":"Cocos (Keeling) Islands","country":"Australia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[96.795,-11.636],[96.578,-12.335],[97.287,-12.276],[96.795,-11.636]]]]}},{"type":"Feature","properties":{"code":"CO","name":"Colombia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-71.198,12.658],[-81.414,13.574],[-81.939,12.437],[-78.793,9.938],[-77.583,9.223],[-77.324,8.812],[-77.451,8.5],[-77.173,7.974],[-77.572,7.511],[-77.725,7.723],[-77.722,7.476],[-77.814,7.483],[-77.892,7.227],[-77.607,3.733],[-79.231,1.754],[-78.709,1.357],[-78.661,1.323],[-78.618,1.248],[-78.548,1.241],[-78.427,1.154],[-78.311,1.183],[-78.195,0.948],[-77.857,0.802],[-77.715,0.85],[-77.686,0.83],[-77.664,0.816],[-77.678,0.739],[-77.5,0.645],[-77.52,0.408],[-76.892,0.247],[-76.409,0.24],[-76.412,0.382],[-76.234,0.423],[-75.829,0.096],[-75.258,-0.119],[-75.185,-0.031],[-74.427,-0.502],[-74.267,-0.972],[-73.653,-1.262],[-72.926,-2.445],[-71.752,-2.151],[-70.944,-2.231],[-70.046,-2.739],[-70.714,-3.792],[-70.524,-3.876],[-70.337,-3.795],[-69.949,-4.228],[-69.933,-4.22],[-69.434,-1.422],[-69.421,-1.019],[-69.598,-0.751],[-69.603,-0.519],[-70.037,-0.197],[-70.042,0.554],[-69.477,0.711],[-69.21,0.58],[-69.144,0.842],[-69.26,1.069],[-69.83,1.079],[-69.835,1.694],[-69.537,1.764],[-69.386,1.709],[-68.181,1.729],[-68.267,1.835],[-68.186,2.001],[-67.929,1.825],[-67.405,2.223],[-67.299,1.875],[-67.158,1.804],[-67.082,1.174],[-66.858,1.23],[-67.22,2.358],[-67.657,2.817],[-67.859,2.792],[-67.859,2.867],[-67.309,3.384],[-67.501,3.758],[-67.627,3.743],[-67.854,4.532],[-67.833,5.311],[-67.591,5.537],[-67.639,5.65],[-67.586,5.845],[-67.435,5.988],[-67.463,6.206],[-67.607,6.289],[-69.418,6.107],[-70.107,6.965],[-70.76,7.098],[-71.039,6.982],[-71.372,7.016],[-71.422,7.039],[-71.441,7.021],[-71.824,7.043],[-72.049,7.038],[-72.194,7.37],[-72.431,7.4],[-72.474,7.489],[-72.453,7.572],[-72.478,7.656],[-72.468,7.795],[-72.445,7.86],[-72.462,7.907],[-72.458,7.911],[-72.47,7.923],[-72.482,7.929],[-72.488,7.943],[-72.472,7.961],[-72.391,8.035],[-72.352,8.012],[-72.37,8.2],[-72.404,8.365],[-72.655,8.614],[-72.774,9.102],[-72.941,9.107],[-73.021,9.276],[-73.369,9.166],[-72.981,9.853],[-72.88,10.443],[-72.477,11.112],[-72.25,11.141],[-71.968,11.655],[-71.328,11.85],[-70.926,11.963],[-71.198,12.658]]]]}},{"type":"Feature","properties":{"code":"KM","name":"Comoros"},"geometry":{"type":"MultiPolygon","coordinates":[[[[42.946,-11.081],[43.495,-13.235],[44.984,-12.082],[42.946,-11.081]]]]}},{"type":"Feature","properties":{"code":"CK","name":"Cook Islands"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-168.151,-10.27],[-156.456,-31.755],[-156.486,-15.528],[-156.509,-7.497],[-168.151,-10.27]]]]}},{"type":"Feature","properties":{"code":"FR","name":"Corsica"},"geometry":{"type":"Polygon","coordinates":[[[9.561,43.208],[8.347,42.407],[8.676,41.223],[9.666,41.375],[9.561,43.208]]]}},{"type":"Feature","properties":{"code":"CR","name":"Costa Rica"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-83.683,11.016],[-83.666,10.799],[-83.908,10.712],[-84.682,11.076],[-84.924,10.95],[-85.605,11.226],[-85.712,11.069],[-86.145,11.091],[-87.418,5.024],[-82.945,7.939],[-82.9,8.041],[-82.891,8.058],[-82.886,8.102],[-82.939,8.266],[-83.052,8.334],[-82.931,8.435],[-82.868,8.44],[-82.838,8.481],[-82.833,8.525],[-82.84,8.548],[-82.827,8.602],[-82.879,8.698],[-82.921,8.748],[-82.914,8.774],[-82.883,8.833],[-82.721,8.971],[-82.935,9.077],[-82.935,9.467],[-82.849,9.497],[-82.879,9.626],[-82.772,9.596],[-82.667,9.497],[-82.613,9.499],[-82.565,9.573],[-82.51,9.654],[-83.54,10.968],[-83.683,11.016]]]]}},{"type":"Feature","properties":{"code":"RU","name":"Crimea"},"geometry":{"type":"MultiPolygon","coordinates":[[[[33.629,44.182],[36.488,45.049],[36.475,45.241],[36.505,45.314],[36.654,45.342],[36.664,45.451],[35.05,45.768],[34.96,45.756],[34.799,45.81],[34.801,45.901],[34.755,45.907],[34.667,45.971],[34.609,45.993],[34.559,45.993],[34.52,45.951],[34.487,45.943],[34.441,45.96],[34.412,46.002],[34.339,46.061],[34.251,46.053],[34.181,46.068],[34.129,46.105],[34.073,46.118],[34.053,46.108],[33.916,46.159],[33.852,46.199],[33.797,46.205],[33.74,46.185],[33.646,46.23],[33.615,46.226],[33.639,46.142],[33.615,46.136],[33.54,46.012],[32.272,45.464],[33.629,44.182]]]]}},{"type":"Feature","properties":{"code":"HR","name":"Croatia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[17.644,42.886],[17.539,42.928],[17.709,42.972],[17.643,43.086],[17.47,43.166],[17.286,43.331],[17.256,43.404],[17.297,43.445],[17.244,43.494],[17.158,43.494],[17.006,43.58],[16.807,43.76],[16.753,43.772],[16.709,43.849],[16.555,43.953],[16.505,44.024],[16.436,44.028],[16.437,44.075],[16.369,44.083],[16.187,44.27],[16.213,44.352],[16.13,44.383],[16.168,44.407],[16.106,44.526],[16.03,44.556],[16.009,44.586],[16.058,44.615],[15.893,44.75],[15.825,44.715],[15.726,44.823],[15.795,44.846],[15.761,44.87],[15.747,44.968],[15.786,44.974],[15.746,45.064],[15.788,45.115],[15.764,45.165],[15.835,45.225],[15.984,45.231],[16.122,45.096],[16.29,44.997],[16.354,45.002],[16.359,45.035],[16.375,45.052],[16.382,45.051],[16.383,45.06],[16.4,45.115],[16.463,45.145],[16.492,45.212],[16.53,45.227],[16.55,45.221],[16.566,45.223],[16.602,45.23],[16.65,45.207],[16.748,45.204],[16.782,45.19],[16.811,45.184],[16.838,45.19],[16.924,45.276],[16.939,45.227],[17.041,45.208],[17.184,45.148],[17.243,45.146],[17.251,45.15],[17.268,45.184],[17.321,45.162],[17.336,45.145],[17.412,45.133],[17.45,45.161],[17.456,45.125],[17.476,45.127],[17.515,45.108],[17.591,45.108],[17.666,45.134],[17.848,45.045],[17.871,45.046],[17.937,45.08],[17.973,45.122],[17.978,45.138],[17.995,45.15],[18.016,45.152],[18.031,45.126],[18.162,45.077],[18.244,45.137],[18.321,45.102],[18.419,45.111],[18.479,45.059],[18.657,45.075],[18.784,44.977],[18.807,44.936],[18.764,44.937],[18.763,44.907],[18.87,44.851],[19.02,44.855],[18.99,44.906],[19.029,44.925],[19.069,44.899],[19.156,44.954],[19.052,44.977],[19.101,45.012],[19.08,45.147],[19.141,45.13],[19.191,45.179],[19.436,45.171],[19.419,45.235],[19.282,45.238],[19.108,45.295],[18.974,45.375],[18.999,45.493],[19.084,45.488],[19.075,45.531],[18.946,45.537],[18.888,45.573],[18.967,45.667],[18.903,45.719],[18.858,45.855],[18.814,45.913],[18.802,45.88],[18.679,45.921],[18.575,45.808],[18.444,45.74],[18.124,45.789],[18.089,45.765],[17.998,45.797],[17.874,45.785],[17.665,45.842],[17.568,45.937],[17.357,45.952],[17.146,46.167],[16.89,46.281],[16.854,46.363],[16.715,46.395],[16.664,46.452],[16.595,46.475],[16.526,46.478],[16.501,46.496],[16.44,46.517],[16.388,46.536],[16.372,46.55],[16.298,46.512],[16.267,46.515],[16.268,46.506],[16.24,46.497],[16.251,46.481],[16.274,46.429],[16.273,46.415],[16.302,46.404],[16.302,46.378],[16.188,46.383],[16.149,46.405],[16.053,46.391],[16.051,46.383],[16.073,46.365],[16.076,46.346],[15.98,46.307],[15.793,46.258],[15.788,46.217],[15.755,46.203],[15.754,46.22],[15.674,46.225],[15.643,46.214],[15.649,46.192],[15.599,46.148],[15.608,46.12],[15.623,46.091],[15.73,46.047],[15.712,46.012],[15.703,46],[15.706,45.921],[15.68,45.905],[15.684,45.889],[15.682,45.868],[15.704,45.846],[15.667,45.841],[15.642,45.829],[15.58,45.85],[15.522,45.822],[15.473,45.825],[15.475,45.798],[15.408,45.795],[15.254,45.723],[15.309,45.69],[15.349,45.716],[15.406,45.647],[15.39,45.637],[15.342,45.647],[15.347,45.634],[15.31,45.63],[15.277,45.605],[15.298,45.584],[15.302,45.532],[15.382,45.488],[15.331,45.453],[15.278,45.467],[15.169,45.423],[15.052,45.491],[15.024,45.485],[14.923,45.528],[14.906,45.478],[14.82,45.459],[14.801,45.495],[14.717,45.534],[14.686,45.53],[14.697,45.574],[14.596,45.628],[14.61,45.664],[14.574,45.672],[14.538,45.62],[14.501,45.609],[14.498,45.544],[14.367,45.486],[14.325,45.471],[14.277,45.49],[14.266,45.482],[14.242,45.506],[14.224,45.504],[14.203,45.469],[14.071,45.488],[14.006,45.524],[13.961,45.508],[13.995,45.476],[13.973,45.453],[13.908,45.451],[13.881,45.426],[13.817,45.437],[13.778,45.468],[13.674,45.444],[13.655,45.452],[13.64,45.459],[13.609,45.466],[13.517,45.539],[13.429,45.494],[13.465,44.975],[16.177,42.344],[18.55,42.379],[18.522,42.423],[18.436,42.486],[18.443,42.511],[18.437,42.559],[18.362,42.614],[18.243,42.611],[17.882,42.837],[17.809,42.918],[17.795,42.896],[17.682,42.927],[17.644,42.886]]]]}},{"type":"Feature","properties":{"code":"CU","name":"Cuba"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-73.623,20.694],[-82.022,24.231],[-85.779,21.927],[-74.812,18.822],[-73.623,20.694]]]]}},{"type":"Feature","properties":{"code":"CW","name":"Curaçao","country":"Netherlands"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-69.148,12.437],[-69.216,12.242],[-68.671,11.935],[-68.605,11.999],[-69.148,12.437]]]]}},{"type":"Feature","properties":{"code":"CZ","name":"Czechia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[14.828,50.87],[14.791,50.814],[14.707,50.841],[14.62,50.86],[14.634,50.888],[14.653,50.905],[14.648,50.932],[14.58,50.914],[14.564,50.922],[14.597,50.961],[14.599,50.987],[14.582,50.993],[14.564,51.01],[14.534,51.004],[14.533,51.017],[14.499,51.022],[14.508,51.043],[14.5,51.047],[14.492,51.044],[14.492,51.023],[14.458,51.037],[14.413,51.021],[14.301,51.055],[14.257,50.989],[14.288,50.977],[14.324,50.986],[14.328,50.974],[14.303,50.966],[14.314,50.952],[14.398,50.939],[14.387,50.899],[14.301,50.884],[14.271,50.894],[14.243,50.888],[14.223,50.86],[14.03,50.807],[13.989,50.818],[13.891,50.785],[13.894,50.741],[13.829,50.725],[13.763,50.735],[13.702,50.718],[13.66,50.731],[13.525,50.704],[13.537,50.677],[13.523,50.647],[13.497,50.631],[13.464,50.601],[13.422,50.612],[13.375,50.649],[13.378,50.627],[13.323,50.603],[13.326,50.58],[13.295,50.579],[13.252,50.593],[13.19,50.502],[13.134,50.517],[13.083,50.501],[13.031,50.509],[13.02,50.473],[13.021,50.448],[12.984,50.42],[12.941,50.409],[12.825,50.457],[12.735,50.432],[12.73,50.423],[12.707,50.399],[12.673,50.419],[12.514,50.397],[12.487,50.373],[12.492,50.352],[12.483,50.348],[12.466,50.355],[12.437,50.338],[12.434,50.325],[12.399,50.323],[12.402,50.295],[12.366,50.283],[12.354,50.24],[12.333,50.244],[12.324,50.204],[12.338,50.194],[12.326,50.171],[12.292,50.175],[12.281,50.195],[12.288,50.224],[12.239,50.246],[12.248,50.255],[12.27,50.252],[12.251,50.271],[12.208,50.273],[12.18,50.321],[12.109,50.32],[12.137,50.274],[12.093,50.25],[12.193,50.2],[12.215,50.164],[12.192,50.134],[12.207,50.103],[12.237,50.102],[12.274,50.077],[12.261,50.063],[12.308,50.057],[12.499,49.973],[12.473,49.942],[12.552,49.921],[12.483,49.836],[12.466,49.789],[12.405,49.763],[12.446,49.702],[12.526,49.684],[12.535,49.619],[12.562,49.615],[12.602,49.529],[12.648,49.526],[12.641,49.476],[12.669,49.429],[12.712,49.424],[12.759,49.399],[12.782,49.346],[12.884,49.335],[12.882,49.355],[12.949,49.341],[13.036,49.304],[13.03,49.274],[13.059,49.263],[13.177,49.167],[13.17,49.143],[13.204,49.123],[13.237,49.114],[13.282,49.123],[13.395,49.048],[13.408,48.989],[13.502,48.938],[13.506,48.974],[13.583,48.969],[13.616,48.946],[13.677,48.879],[13.739,48.885],[13.77,48.835],[13.79,48.833],[13.81,48.779],[13.84,48.77],[14.062,48.669],[14.015,48.638],[14.091,48.594],[14.207,48.59],[14.339,48.559],[14.431,48.589],[14.459,48.647],[14.561,48.604],[14.608,48.629],[14.668,48.582],[14.718,48.598],[14.728,48.695],[14.806,48.735],[14.808,48.777],[14.815,48.787],[14.948,48.763],[14.956,48.759],[14.976,48.769],[14.981,48.775],[14.978,48.777],[14.98,48.78],[14.951,48.791],[14.989,48.901],[14.976,48.97],[14.999,49.014],[15.155,48.991],[15.164,48.943],[15.262,48.958],[15.283,48.988],[15.348,48.984],[15.48,48.945],[15.514,48.915],[15.616,48.895],[15.692,48.86],[15.753,48.852],[15.781,48.876],[15.844,48.869],[16.06,48.754],[16.373,48.729],[16.409,48.746],[16.461,48.809],[16.67,48.777],[16.685,48.728],[16.719,48.738],[16.798,48.71],[16.904,48.715],[16.94,48.604],[17.002,48.709],[17.112,48.829],[17.194,48.876],[17.291,48.855],[17.385,48.809],[17.457,48.85],[17.529,48.811],[17.709,48.867],[17.731,48.879],[17.779,48.923],[17.878,48.927],[17.918,49.018],[18.069,49.032],[18.11,49.086],[18.15,49.245],[18.185,49.289],[18.364,49.327],[18.414,49.365],[18.408,49.4],[18.447,49.395],[18.548,49.471],[18.531,49.49],[18.572,49.512],[18.614,49.498],[18.678,49.509],[18.748,49.492],[18.845,49.517],[18.848,49.545],[18.805,49.681],[18.728,49.682],[18.698,49.705],[18.627,49.72],[18.629,49.746],[18.626,49.75],[18.614,49.754],[18.613,49.762],[18.572,49.833],[18.603,49.863],[18.57,49.878],[18.577,49.916],[18.543,49.925],[18.545,49.908],[18.534,49.899],[18.416,49.935],[18.336,49.947],[18.333,49.924],[18.319,49.916],[18.278,49.939],[18.271,49.968],[18.218,49.973],[18.202,50],[18.106,50.002],[18.079,50.045],[18.032,50.066],[18.004,50.05],[18.046,50.033],[18.046,50.012],[18.002,50.017],[17.869,49.975],[17.777,50.023],[17.751,50.079],[17.689,50.12],[17.667,50.103],[17.594,50.164],[17.705,50.188],[17.763,50.234],[17.722,50.257],[17.746,50.3],[17.693,50.329],[17.678,50.29],[17.589,50.278],[17.37,50.281],[17.345,50.263],[17.343,50.329],[17.277,50.322],[17.2,50.365],[17.196,50.388],[17.145,50.381],[17.122,50.395],[16.892,50.451],[16.859,50.411],[16.909,50.386],[16.944,50.313],[16.998,50.303],[17.021,50.278],[16.998,50.258],[17.028,50.231],[17.004,50.214],[16.98,50.242],[16.846,50.208],[16.701,50.097],[16.631,50.114],[16.554,50.166],[16.564,50.21],[16.427,50.325],[16.394,50.321],[16.362,50.349],[16.365,50.377],[16.303,50.383],[16.281,50.369],[16.228,50.411],[16.216,50.406],[16.195,50.433],[16.314,50.503],[16.346,50.496],[16.446,50.58],[16.336,50.666],[16.232,50.671],[16.208,50.631],[16.103,50.664],[16.024,50.6],[15.983,50.615],[16.017,50.63],[15.972,50.698],[15.873,50.672],[15.817,50.757],[15.732,50.739],[15.438,50.808],[15.38,50.772],[15.367,50.84],[15.277,50.891],[15.27,50.977],[15.236,50.999],[15.174,50.983],[15.167,51.02],[15.119,50.99],[15.102,51.011],[15.062,51.023],[15.039,51.012],[15.024,51.024],[14.964,50.991],[15.011,50.98],[14.999,50.868],[14.828,50.87]]]]}},{"type":"Feature","properties":{"code":"CI","name":"Côte d'Ivoire"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-7.528,3.711],[-3.34,4.175],[-3.107,5.085],[-3.111,5.127],[-3.063,5.137],[-2.966,5.104],[-2.953,5.125],[-2.755,5.107],[-2.731,5.136],[-2.776,5.346],[-2.727,5.348],[-2.766,5.61],[-2.854,5.652],[-2.931,5.621],[-2.967,5.641],[-2.953,5.719],[-3.019,5.717],[-3.26,6.625],[-3.22,6.744],[-3.233,6.817],[-2.954,7.237],[-2.978,7.272],[-2.923,7.608],[-2.795,7.86],[-2.784,7.95],[-2.748,7.926],[-2.678,8.021],[-2.612,8.026],[-2.629,8.115],[-2.49,8.209],[-2.582,8.779],[-2.664,9.018],[-2.778,9.049],[-2.698,9.227],[-2.688,9.493],[-2.765,9.408],[-2.93,9.574],[-3.008,9.74],[-3.166,9.851],[-3.193,9.938],[-3.272,9.85],[-3.318,9.911],[-3.697,9.943],[-4.26,9.76],[-4.314,9.601],[-4.643,9.707],[-4.966,9.891],[-4.965,9.999],[-5.125,10.298],[-5.396,10.293],[-5.511,10.432],[-5.651,10.468],[-5.781,10.44],[-5.995,10.197],[-6.189,10.242],[-6.173,10.47],[-6.248,10.742],[-6.325,10.686],[-6.406,10.699],[-6.428,10.569],[-6.53,10.591],[-6.635,10.669],[-6.682,10.351],[-6.939,10.353],[-7.012,10.251],[-6.974,10.216],[-7.01,10.158],[-7.06,10.147],[-7.133,10.249],[-7.371,10.247],[-7.446,10.446],[-7.523,10.466],[-7.545,10.409],[-7.63,10.463],[-7.921,10.156],[-7.98,10.171],[-8.012,10.102],[-8.119,10.046],[-8.157,9.943],[-8.094,9.869],[-8.147,9.551],[-8.035,9.396],[-7.851,9.418],[-7.908,9.205],[-7.739,9.084],[-7.925,8.993],[-7.955,8.811],[-7.699,8.661],[-7.657,8.369],[-7.925,8.507],[-8.23,8.484],[-8.241,8.242],[-8.062,8.161],[-7.987,8.201],[-7.999,8.11],[-7.947,8.009],[-8.064,8.05],[-8.134,7.88],[-8.099,7.786],[-8.214,7.545],[-8.4,7.628],[-8.471,7.557],[-8.419,7.512],[-8.375,7.258],[-8.292,7.169],[-8.317,6.828],[-8.595,6.506],[-8.487,6.438],[-8.457,6.5],[-8.385,6.359],[-8.33,6.364],[-8.176,6.282],[-8.006,6.317],[-7.907,6.277],[-7.835,6.203],[-7.85,6.089],[-7.797,6.077],[-7.783,5.99],[-7.703,5.906],[-7.673,5.943],[-7.482,5.81],[-7.462,5.849],[-7.437,5.847],[-7.439,5.748],[-7.372,5.612],[-7.434,5.424],[-7.365,5.329],[-7.462,5.263],[-7.489,5.141],[-7.554,5.087],[-7.539,4.943],[-7.593,4.891],[-7.533,4.351],[-7.528,3.711]]]]}},{"type":"Feature","properties":{"code":"CD","name":"Democratic Republic of the Congo"},"geometry":{"type":"MultiPolygon","coordinates":[[[[27.44,5.073],[27.096,5.223],[26.931,5.135],[26.856,5.039],[26.746,5.107],[26.486,5.05],[26.134,5.256],[25.861,5.195],[25.533,5.374],[25.346,5.291],[25.313,5.037],[24.718,4.905],[24.467,5.091],[23.388,4.6],[22.948,4.824],[22.891,4.793],[22.847,4.699],[22.785,4.714],[22.693,4.473],[22.609,4.488],[22.543,4.22],[22.455,4.13],[22.277,4.113],[22.107,4.207],[21.64,4.317],[21.559,4.256],[21.257,4.337],[21.213,4.293],[21.112,4.339],[21.088,4.396],[20.904,4.449],[20.602,4.424],[20.091,4.921],[19.679,5.146],[19.38,5.088],[19.075,4.91],[18.773,4.41],[18.548,4.322],[18.663,4.008],[18.586,3.777],[18.628,3.476],[18.639,3.193],[18.107,2.269],[18.08,1.586],[17.859,1.043],[17.87,0.589],[17.953,0.481],[17.939,0.324],[17.812,0.239],[17.661,-0.265],[17.721,-0.527],[17.324,-0.993],[16.98,-1.128],[16.707,-1.458],[16.503,-1.879],[16.162,-2.166],[16.228,-2.595],[16.175,-3.25],[16.214,-3.297],[15.894,-3.951],[15.531,-4.042],[15.481,-4.221],[15.418,-4.284],[15.327,-4.273],[15.254,-4.311],[15.198,-4.324],[14.831,-4.808],[14.679,-4.921],[14.506,-4.85],[14.415,-4.883],[14.374,-4.561],[14.473,-4.429],[14.396,-4.366],[14.407,-4.284],[13.911,-4.509],[13.812,-4.418],[13.718,-4.449],[13.704,-4.726],[13.503,-4.778],[13.418,-4.899],[13.112,-4.594],[13.096,-4.637],[13.112,-4.677],[12.873,-4.743],[12.709,-4.955],[12.635,-4.946],[12.603,-5.017],[12.463,-5.094],[12.498,-5.141],[12.516,-5.133],[12.536,-5.147],[12.536,-5.162],[12.523,-5.175],[12.523,-5.744],[12.266,-5.74],[12.204,-5.763],[11.958,-5.947],[12.422,-6.076],[13.044,-5.871],[16.555,-5.856],[16.963,-7.218],[17.583,-8.138],[18.336,-8.001],[19.337,-7.997],[19.547,-7.002],[20.302,-6.99],[20.318,-6.92],[20.617,-6.909],[20.563,-7.286],[21.798,-7.296],[21.849,-9.599],[22.19,-9.946],[22.326,-10.763],[22.18,-10.859],[22.26,-11.249],[22.542,-11.058],[23.166,-11.106],[23.456,-10.946],[23.869,-11.029],[24,-10.894],[24.345,-11.068],[24.426,-11.45],[25.341,-11.197],[25.331,-11.658],[26.018,-11.915],[26.887,-12.019],[27.044,-11.613],[27.225,-11.603],[27.21,-11.762],[27.599,-12.221],[28.332,-12.414],[29.019,-13.414],[29.605,-13.217],[29.651,-13.418],[29.816,-13.447],[29.814,-12.149],[29.484,-12.236],[29.499,-12.438],[29.186,-12.379],[28.484,-11.875],[28.372,-11.578],[28.65,-10.651],[28.628,-9.929],[28.685,-9.78],[28.562,-9.491],[28.516,-9.447],[28.526,-9.354],[28.366,-9.301],[28.385,-9.234],[28.971,-8.669],[28.889,-8.483],[30.792,-8.274],[30.257,-7.141],[29.526,-6.273],[29.437,-4.448],[29.237,-3.759],[29.215,-3.351],[29.256,-3.055],[29.173,-2.994],[29.16,-2.955],[29.098,-2.919],[29.091,-2.879],[29.05,-2.818],[29.004,-2.82],[29.002,-2.785],[29.041,-2.742],[29.004,-2.706],[28.943,-2.691],[28.898,-2.661],[28.902,-2.624],[28.893,-2.558],[28.879,-2.552],[28.862,-2.532],[28.862,-2.523],[28.875,-2.509],[28.888,-2.505],[28.893,-2.49],[28.891,-2.476],[28.868,-2.449],[28.868,-2.419],[28.896,-2.373],[28.956,-2.373],[29.001,-2.29],[29.105,-2.27],[29.176,-2.123],[29.118,-1.906],[29.245,-1.697],[29.243,-1.668],[29.363,-1.509],[29.45,-1.505],[29.531,-1.405],[29.591,-1.39],[29.584,-0.898],[29.63,-0.9],[29.627,-0.711],[29.672,-0.557],[29.675,-0.48],[29.651,-0.468],[29.727,-0.081],[29.722,0.073],[29.775,0.167],[29.819,0.168],[29.873,0.392],[29.974,0.521],[29.955,0.645],[29.983,0.843],[30.148,0.898],[30.221,0.996],[30.247,1.15],[30.485,1.217],[31.301,2.11],[31.28,2.179],[31.201,2.222],[31.198,2.295],[31.121,2.277],[31.079,2.302],[31.066,2.359],[30.969,2.411],[30.911,2.333],[30.831,2.426],[30.743,2.436],[30.756,2.586],[30.886,2.839],[30.857,2.951],[30.771,3.049],[30.843,3.269],[30.935,3.407],[30.941,3.508],[30.852,3.489],[30.86,3.574],[30.807,3.605],[30.785,3.671],[30.563,3.627],[30.574,3.746],[30.554,3.845],[30.477,3.834],[30.277,3.957],[30.224,3.939],[30.162,4.106],[30.07,4.132],[29.797,4.378],[29.821,4.562],[29.497,4.701],[29.433,4.501],[29.222,4.343],[29.031,4.488],[28.813,4.488],[28.665,4.426],[28.207,4.356],[27.796,4.6],[27.765,4.793],[27.655,4.894],[27.567,4.894],[27.44,5.073]]]]}},{"type":"Feature","properties":{"code":"DK","name":"Denmark"},"geometry":{"type":"MultiPolygon","coordinates":[[[[10.87,57.925],[7.712,56.969],[8.025,55.096],[8.457,55.067],[8.558,54.918],[8.64,54.911],[8.764,54.895],[8.812,54.905],[8.928,54.905],[9.046,54.872],[9.143,54.874],[9.206,54.858],[9.246,54.847],[9.234,54.834],[9.247,54.811],[9.328,54.806],[9.338,54.802],[9.365,54.817],[9.385,54.84],[9.412,54.843],[9.432,54.826],[9.466,54.831],[9.589,54.888],[9.627,54.881],[9.612,54.855],[9.736,54.825],[9.893,54.842],[10.168,54.739],[10.311,54.66],[11.003,54.637],[11.997,54.502],[13.432,54.833],[15.156,54.927],[15.419,55.179],[14.694,55.43],[14.284,55.155],[12.844,55.133],[12.603,55.427],[12.885,55.634],[12.637,55.914],[12.653,56.043],[12.075,56.295],[10.87,57.925]]]]}},{"type":"Feature","properties":{"code":"DJ","name":"Djibouti"},"geometry":{"type":"MultiPolygon","coordinates":[[[[43.907,12.382],[43.907,12.382],[43.329,12.597],[43.291,12.792],[42.862,12.587],[42.8,12.426],[42.696,12.362],[42.469,12.527],[42.404,12.465],[41.955,11.812],[41.829,11.724],[41.777,11.499],[41.81,11.336],[41.801,10.971],[42.063,10.926],[42.137,10.976],[42.427,10.985],[42.63,11.097],[42.751,11.07],[42.79,10.985],[42.958,10.985],[43.907,12.382]]]]}},{"type":"Feature","properties":{"code":"DM","name":"Dominica"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-61.325,14.914],[-60.867,15.826],[-61.956,15.509],[-61.325,14.914]]]]}},{"type":"Feature","properties":{"code":"DO","name":"Dominican Republic"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-68.25,18.776],[-69.876,19.821],[-71.911,20.053],[-71.774,19.731],[-71.759,19.702],[-71.743,19.584],[-71.714,19.554],[-71.713,19.534],[-71.68,19.45],[-71.694,19.379],[-71.778,19.338],[-71.732,19.267],[-71.626,19.212],[-71.653,19.118],[-71.699,19.109],[-71.711,19.084],[-71.741,19.044],[-71.881,18.95],[-71.778,18.95],[-71.726,18.878],[-71.719,18.784],[-71.826,18.626],[-71.954,18.649],[-72.002,18.623],[-71.881,18.501],[-71.909,18.458],[-71.7,18.341],[-71.783,18.183],[-71.755,18.144],[-71.75,18.111],[-71.738,18.072],[-71.757,18.035],[-71.717,17.438],[-68.357,18.015],[-68.25,18.776]]]]}},{"type":"Feature","properties":{"code":"TL","name":"East Timor"},"geometry":{"type":"MultiPolygon","coordinates":[[[[124.467,-9.13],[124.94,-8.856],[124.977,-9.081],[125.118,-8.964],[125.186,-9.031],[125.189,-9.164],[125.094,-9.197],[125.04,-9.171],[124.979,-9.193],[125.09,-9.464],[125.681,-9.852],[127.552,-9.051],[127.421,-8.225],[125.877,-8.318],[125.585,-7.953],[124.923,-8.759],[124.335,-9.114],[124.046,-9.227],[124.043,-9.342],[124.105,-9.412],[124.145,-9.423],[124.212,-9.369],[124.281,-9.422],[124.281,-9.505],[124.353,-9.485],[124.353,-9.43],[124.386,-9.358],[124.46,-9.303],[124.467,-9.13]]]]}},{"type":"Feature","properties":{"code":"EC","name":"Ecuador"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-81.024,-2.263],[-80.306,-3.391],[-80.206,-3.431],[-80.241,-3.461],[-80.246,-3.487],[-80.237,-3.487],[-80.226,-3.501],[-80.205,-3.517],[-80.216,-3.589],[-80.198,-3.592],[-80.187,-3.64],[-80.199,-3.689],[-80.132,-3.903],[-80.464,-4.013],[-80.482,-4.055],[-80.45,-4.209],[-80.321,-4.213],[-80.464,-4.415],[-80.393,-4.483],[-80.139,-4.298],[-79.797,-4.476],[-79.594,-4.468],[-79.262,-4.952],[-79.116,-4.978],[-79.017,-5.015],[-78.851,-4.668],[-78.684,-4.608],[-78.344,-3.386],[-78.246,-3.399],[-78.226,-3.511],[-78.143,-3.477],[-78.194,-3.364],[-77.941,-3.055],[-76.632,-2.584],[-76.052,-2.122],[-75.574,-1.56],[-75.387,-0.937],[-75.229,-0.956],[-75.229,-0.6],[-75.536,-0.192],[-75.602,-0.187],[-75.62,-0.1],[-75.402,-0.172],[-75.258,-0.119],[-75.829,0.096],[-76.234,0.423],[-76.412,0.382],[-76.409,0.24],[-76.892,0.247],[-77.52,0.408],[-77.5,0.645],[-77.678,0.739],[-77.664,0.816],[-77.686,0.83],[-77.715,0.85],[-77.857,0.802],[-78.427,1.154],[-78.871,1.475],[-80.14,0.862],[-80.986,-1.027],[-81.024,-2.263]]]]}},{"type":"Feature","properties":{"code":"EG","name":"Egypt"},"geometry":{"type":"MultiPolygon","coordinates":[[[[25.739,32.26],[24.846,31.399],[25.011,30.739],[24.711,30.174],[25,29.246],[24.999,21.995],[33.176,22.004],[34.077,22.005],[37.856,22.009],[34.445,27.915],[34.881,29.369],[34.923,29.453],[34.267,31.22],[34.24,31.296],[34.236,31.297],[34.219,31.324],[34.052,31.466],[25.739,32.26]]]]}},{"type":"Feature","properties":{"code":"SV","name":"El Salvador"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-89.348,14.43],[-89.39,14.446],[-89.574,14.416],[-89.588,14.332],[-89.506,14.261],[-89.524,14.226],[-89.618,14.219],[-89.708,14.154],[-89.756,14.071],[-89.733,14.041],[-89.761,14.029],[-89.818,14.071],[-89.889,14.04],[-90.105,13.851],[-90.113,13.737],[-90.553,12.887],[-88.114,12.633],[-87.735,13.132],[-87.551,13.125],[-87.698,13.252],[-87.737,13.327],[-87.802,13.357],[-87.847,13.411],[-87.835,13.447],[-87.774,13.458],[-87.738,13.442],[-87.721,13.461],[-87.717,13.506],[-87.781,13.529],[-87.731,13.754],[-87.688,13.808],[-87.797,13.914],[-88.003,13.869],[-88.076,13.984],[-88.23,13.999],[-88.258,13.911],[-88.49,13.865],[-88.497,13.972],[-88.707,14.043],[-88.732,14.109],[-88.815,14.117],[-88.858,14.178],[-88.946,14.202],[-89.042,14.336],[-89.348,14.43]]]]}},{"type":"Feature","properties":{"code":"GB","name":"England","country":"United Kingdom"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-6.039,51.132],[-6.746,49.454],[1.174,50.742],[2.185,51.521],[2,52.793],[-1.803,55.949],[-2.306,55.627],[-2.171,55.459],[-2.61,55.285],[-2.635,55.195],[-3.029,55.046],[-3.094,54.949],[-3.384,54.943],[-4.182,54.579],[-3.508,53.543],[-3.082,53.255],[-3.037,53.251],[-2.923,53.194],[-2.92,53.177],[-2.986,53.156],[-2.906,53.11],[-2.875,53.123],[-2.891,53.094],[-2.831,52.992],[-2.725,52.984],[-2.722,52.93],[-2.805,52.894],[-2.859,52.945],[-2.924,52.938],[-2.972,52.965],[-3.136,52.895],[-3.157,52.849],[-3.161,52.796],[-3.087,52.775],[-3.01,52.766],[-2.956,52.718],[-3.017,52.721],[-3.044,52.654],[-3.136,52.582],[-3.129,52.529],[-3.097,52.531],[-3.087,52.548],[-3.009,52.578],[-2.997,52.551],[-3.036,52.5],[-3.134,52.492],[-3.23,52.453],[-3.228,52.425],[-3.047,52.345],[-2.954,52.35],[-2.997,52.323],[-3.008,52.275],[-3.093,52.205],[-3.126,52.081],[-2.971,51.905],[-2.882,51.932],[-2.787,51.888],[-2.743,51.844],[-2.662,51.836],[-2.663,51.595],[-3.206,51.316],[-6.039,51.132]]]]}},{"type":"Feature","properties":{"code":"GQ","name":"Equatorial Guinea"},"geometry":{"type":"MultiPolygon","coordinates":[[[[9.22,3.721],[8.344,4.307],[7.718,0.667],[4.655,-2.213],[9.664,1.067],[9.751,1.068],[9.796,1.002],[11.353,1.003],[11.356,2.172],[9.991,2.166],[9.907,2.2],[9.89,2.205],[9.847,2.247],[9.832,2.291],[9.838,2.324],[9.821,2.351],[9.812,2.338],[9.22,3.721]]]]}},{"type":"Feature","properties":{"code":"ER","name":"Eritrea"},"geometry":{"type":"MultiPolygon","coordinates":[[[[40.992,15.817],[39.638,18.373],[38.577,17.981],[38.459,17.872],[38.371,17.663],[38.134,17.539],[37.51,17.322],[37.427,17.04],[36.998,17.072],[36.922,16.235],[36.764,15.808],[36.698,15.753],[36.543,15.235],[36.443,15.15],[36.544,14.256],[36.565,14.262],[36.557,14.282],[36.634,14.312],[36.858,14.322],[37.016,14.256],[37.095,14.272],[37.132,14.407],[37.311,14.447],[37.473,14.215],[37.528,14.184],[37.913,14.894],[38.036,14.727],[38.256,14.673],[38.353,14.513],[38.457,14.414],[38.783,14.475],[38.981,14.549],[39.028,14.637],[39.161,14.652],[39.148,14.618],[39.195,14.57],[39.239,14.564],[39.269,14.488],[39.23,14.446],[39.252,14.404],[39.377,14.544],[39.528,14.49],[39.506,14.557],[39.582,14.61],[39.766,14.543],[39.944,14.41],[40.072,14.543],[40.146,14.54],[40.211,14.393],[40.257,14.414],[40.917,14.112],[41.251,13.608],[41.629,13.386],[42.058,12.809],[42.215,12.758],[42.28,12.636],[42.404,12.465],[42.469,12.527],[42.696,12.362],[42.8,12.426],[42.862,12.587],[43.291,12.792],[40.992,15.817]]]]}},{"type":"Feature","properties":{"code":"EE","name":"Estonia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[26.329,60.001],[20.51,59.155],[19.849,57.579],[22.805,57.878],[23.201,57.567],[24.262,57.918],[24.358,57.875],[25.195,58.083],[25.282,57.985],[25.296,58.083],[25.735,57.902],[26.059,57.847],[26.032,57.79],[26.025,57.783],[26.027,57.782],[26.027,57.774],[26.021,57.772],[26.024,57.769],[26.033,57.772],[26.054,57.761],[26.081,57.766],[26.203,57.721],[26.187,57.685],[26.293,57.592],[26.465,57.569],[26.547,57.518],[26.904,57.628],[27.347,57.522],[27.319,57.577],[27.404,57.621],[27.375,57.668],[27.526,57.728],[27.502,57.788],[27.567,57.834],[27.785,57.84],[27.818,57.892],[27.673,57.926],[27.624,58.095],[27.485,58.226],[27.555,58.395],[27.364,58.784],[27.744,58.984],[27.805,59.112],[27.88,59.181],[27.909,59.244],[28.007,59.284],[28.142,59.289],[28.193,59.358],[28.205,59.365],[28.211,59.381],[28.191,59.4],[28.042,59.47],[27.856,59.585],[26.9,59.638],[26.329,60.001]]]]}},{"type":"Feature","properties":{"code":"SZ","name":"Eswatini"},"geometry":{"type":"MultiPolygon","coordinates":[[[[31.869,-26],[31.418,-25.719],[31.312,-25.743],[31.131,-25.916],[30.958,-26.263],[30.789,-26.483],[30.811,-26.847],[30.888,-26.796],[30.978,-26.927],[30.961,-27.024],[31.15,-27.202],[31.498,-27.315],[31.976,-27.317],[31.975,-27.111],[32.009,-26.81],[32.097,-26.807],[32.133,-26.843],[32.134,-26.532],[32.074,-26.402],[32.104,-26.157],[32.086,-26.01],[32.009,-25.999],[31.974,-25.954],[31.869,-26]]]]}},{"type":"Feature","properties":{"code":"ET","name":"Ethiopia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[42.404,12.465],[42.28,12.636],[42.215,12.758],[42.058,12.809],[41.629,13.386],[41.251,13.608],[40.917,14.112],[40.257,14.414],[40.211,14.393],[40.146,14.54],[40.072,14.543],[39.944,14.41],[39.766,14.543],[39.582,14.61],[39.506,14.557],[39.528,14.49],[39.377,14.544],[39.252,14.404],[39.23,14.446],[39.269,14.488],[39.239,14.564],[39.195,14.57],[39.148,14.618],[39.161,14.652],[39.028,14.637],[38.981,14.549],[38.783,14.475],[38.457,14.414],[38.353,14.513],[38.256,14.673],[38.036,14.727],[37.913,14.894],[37.528,14.184],[37.473,14.215],[37.311,14.447],[37.132,14.407],[37.095,14.272],[37.016,14.256],[36.858,14.322],[36.634,14.312],[36.557,14.282],[36.565,14.262],[36.544,14.256],[36.447,13.957],[36.488,13.84],[36.39,13.565],[36.245,13.368],[36.134,12.927],[36.167,12.88],[36.143,12.709],[36.015,12.725],[35.705,12.671],[35.243,11.911],[35.115,11.852],[35.058,11.712],[35.096,11.563],[34.957,11.244],[35.012,11.196],[34.932,10.959],[34.978,10.916],[34.975,10.861],[34.869,10.788],[34.866,10.746],[34.775,10.69],[34.774,10.746],[34.591,10.891],[34.437,10.781],[34.282,10.535],[34.348,10.239],[34.321,10.116],[34.227,10.025],[34.205,9.903],[34.132,9.749],[34.087,9.552],[34.102,9.502],[34.143,9.047],[34.145,8.602],[34.013,8.5],[33.896,8.484],[33.872,8.419],[33.714,8.368],[33.669,8.444],[33.546,8.471],[33.312,8.455],[33.197,8.403],[33.185,8.293],[33.181,8.13],[33.084,8.058],[33.001,7.903],[33.049,7.79],[33.246,7.779],[33.325,7.713],[33.447,7.754],[33.714,7.66],[33.876,7.549],[34.03,7.364],[34.039,7.274],[34.015,7.257],[34.194,7.128],[34.194,7.044],[34.358,6.92],[34.477,6.911],[34.539,6.828],[34.538,6.748],[34.651,6.726],[34.775,6.596],[34.877,6.602],[35.017,6.47],[34.962,6.264],[35.005,5.894],[35.126,5.689],[35.131,5.621],[35.312,5.501],[35.299,5.34],[35.508,5.424],[35.858,5.334],[35.82,5.108],[35.821,4.774],[35.942,4.619],[35.954,4.532],[36.039,4.444],[36.845,4.445],[37.077,4.335],[38.142,3.625],[38.458,3.604],[38.523,3.626],[38.919,3.512],[39.077,3.527],[39.2,3.478],[39.494,3.455],[39.516,3.409],[39.551,3.396],[39.583,3.474],[39.768,3.671],[39.86,3.87],[40.775,4.277],[41.175,3.941],[41.895,3.974],[42.076,4.177],[42.559,4.205],[42.845,4.284],[42.977,4.44],[43.042,4.579],[43.403,4.793],[44.024,4.945],[44.981,4.918],[47.979,8.001],[47.925,8.001],[46.993,7.999],[44.192,8.93],[43.326,9.592],[43.235,9.846],[43.094,9.906],[42.876,10.184],[42.695,10.627],[42.958,10.985],[42.79,10.985],[42.751,11.07],[42.63,11.097],[42.427,10.985],[42.137,10.976],[42.063,10.926],[41.801,10.971],[41.81,11.336],[41.777,11.499],[41.829,11.724],[41.955,11.812],[42.404,12.465]]]]}},{"type":"Feature","properties":{"code":"CL","name":"Easter Island"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-110.279,-26.175],[-109.862,-28.44],[-103.98,-26.239],[-110.279,-26.175]]]]}},{"type":"Feature","properties":{"code":"RU","name":"European Russia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[19.643,54.454],[19.804,54.442],[20.639,54.371],[21.411,54.324],[22.797,54.363],[22.725,54.417],[22.702,54.453],[22.678,54.532],[22.713,54.565],[22.68,54.585],[22.752,54.635],[22.742,54.643],[22.755,54.648],[22.734,54.666],[22.736,54.73],[22.873,54.795],[22.851,54.887],[22.764,54.925],[22.687,54.981],[22.655,54.97],[22.601,55.019],[22.589,55.071],[22.477,55.044],[22.316,55.066],[22.143,55.053],[22.117,55.021],[22.061,55.029],[22.026,55.051],[22.04,55.079],[21.995,55.087],[21.965,55.074],[21.855,55.095],[21.65,55.179],[21.556,55.203],[21.511,55.185],[21.468,55.211],[21.384,55.293],[21.355,55.284],[21.264,55.245],[20.952,55.28],[20.605,55.41],[19.759,55.015],[19.643,54.454]]],[[[27.856,59.585],[28.042,59.47],[28.191,59.4],[28.211,59.381],[28.205,59.365],[28.193,59.358],[28.142,59.289],[28.007,59.284],[27.909,59.244],[27.88,59.181],[27.805,59.112],[27.744,58.984],[27.364,58.784],[27.555,58.395],[27.485,58.226],[27.624,58.095],[27.673,57.926],[27.818,57.892],[27.785,57.84],[27.567,57.834],[27.502,57.788],[27.526,57.728],[27.375,57.668],[27.404,57.621],[27.319,57.577],[27.347,57.522],[27.568,57.537],[27.525,57.428],[27.861,57.294],[27.665,56.839],[27.861,56.882],[28.048,56.59],[28.135,56.58],[28.101,56.524],[28.191,56.446],[28.166,56.378],[28.237,56.276],[28.152,56.17],[28.306,56.06],[28.369,56.058],[28.38,56.114],[28.431,56.094],[28.553,56.117],[28.683,56.102],[28.637,56.073],[28.734,55.971],[29.083,56.034],[29.217,55.99],[29.447,55.96],[29.36,55.759],[29.513,55.703],[29.614,55.777],[29.807,55.796],[29.98,55.873],[30.121,55.836],[30.278,55.868],[30.31,55.836],[30.483,55.811],[30.513,55.79],[30.51,55.766],[30.633,55.731],[30.675,55.642],[30.73,55.663],[30.785,55.585],[30.86,55.632],[30.934,55.618],[30.952,55.507],[30.901,55.466],[30.931,55.391],[30.826,55.331],[30.819,55.279],[30.879,55.282],[30.974,55.171],[31.021,55.062],[31.01,55.028],[30.942,55.04],[30.908,55.022],[30.958,54.986],[30.931,54.959],[30.818,54.941],[30.826,54.901],[30.752,54.807],[30.955,54.743],[30.971,54.72],[31.026,54.707],[30.982,54.689],[30.992,54.67],[31.193,54.669],[31.214,54.631],[31.085,54.504],[31.229,54.466],[31.318,54.341],[31.308,54.253],[31.57,54.145],[31.896,54.084],[31.887,54.037],[31.85,53.918],[31.77,53.8],[31.891,53.781],[32.126,53.816],[32.367,53.717],[32.457,53.74],[32.501,53.686],[32.405,53.666],[32.478,53.555],[32.75,53.456],[32.733,53.335],[32.517,53.284],[32.408,53.189],[32.154,53.076],[31.824,53.1],[31.787,53.18],[31.625,53.229],[31.563,53.194],[31.405,53.214],[31.364,53.135],[31.392,53.097],[31.335,53.088],[31.323,53.041],[31.241,53.031],[31.357,52.979],[31.592,52.79],[31.573,52.716],[31.504,52.697],[31.639,52.554],[31.563,52.515],[31.614,52.488],[31.621,52.338],[31.58,52.321],[31.707,52.267],[31.689,52.197],[31.779,52.186],[31.782,52.114],[31.817,52.1],[31.85,52.113],[31.961,52.08],[31.922,52.051],[32.088,52.033],[32.233,52.081],[32.278,52.103],[32.34,52.143],[32.331,52.237],[32.39,52.249],[32.353,52.328],[32.548,52.324],[32.695,52.255],[32.854,52.279],[32.899,52.246],[33.189,52.375],[33.513,52.358],[33.48,52.315],[33.557,52.303],[33.788,52.372],[34.052,52.201],[34.112,52.141],[34.094,52.008],[34.411,51.828],[34.429,51.729],[34.078,51.671],[34.176,51.633],[34.306,51.52],[34.22,51.419],[34.334,51.363],[34.23,51.264],[34.317,51.239],[34.388,51.275],[34.661,51.251],[34.687,51.18],[34.825,51.175],[34.973,51.234],[35.141,51.232],[35.127,51.162],[35.204,51.047],[35.318,51.084],[35.408,51.041],[35.326,50.945],[35.393,50.921],[35.414,50.802],[35.477,50.773],[35.481,50.664],[35.395,50.648],[35.475,50.492],[35.58,50.451],[35.617,50.357],[35.737,50.355],[35.804,50.414],[35.893,50.438],[36.069,50.452],[36.208,50.394],[36.301,50.291],[36.478,50.315],[36.584,50.286],[36.567,50.241],[36.646,50.218],[36.694,50.27],[36.918,50.35],[37.085,50.349],[37.482,50.461],[37.472,50.363],[37.625,50.3],[37.629,50.245],[37.611,50.22],[37.758,50.079],[37.795,50.084],[37.908,50.042],[38.03,49.945],[38.03,49.906],[38.217,49.981],[38.185,50.082],[38.325,50.089],[38.354,50.007],[38.657,49.972],[38.687,50.009],[38.733,49.902],[38.905,49.868],[38.939,49.795],[39.181,49.889],[39.28,49.76],[39.445,49.761],[39.591,49.738],[39.65,49.618],[39.845,49.561],[40.132,49.617],[40.167,49.569],[40.036,49.523],[40.031,49.455],[40.114,49.388],[40.149,49.377],[40.183,49.35],[40.222,49.257],[40.02,49.176],[39.934,49.057],[39.684,49.051],[39.668,48.995],[39.714,48.99],[39.726,48.975],[39.749,48.987],[39.784,48.916],[39.99,48.869],[40.036,48.92],[40.082,48.874],[39.972,48.794],[39.795,48.837],[39.731,48.733],[39.718,48.687],[39.672,48.594],[39.798,48.587],[39.845,48.578],[39.862,48.466],[39.888,48.442],[39.948,48.351],[39.841,48.333],[39.843,48.309],[39.9,48.305],[39.915,48.267],[39.952,48.3],[39.969,48.299],[39.973,48.314],[39.992,48.318],[40.008,48.224],[39.948,48.228],[39.837,48.065],[39.883,48.045],[39.775,48.042],[39.822,47.964],[39.739,47.829],[38.88,47.877],[38.796,47.811],[38.764,47.693],[38.351,47.616],[38.287,47.536],[38.29,47.393],[38.222,47.308],[38.331,47.305],[38.321,47.258],[38.23,47.232],[38.23,47.121],[38.334,46.984],[37.656,46.687],[36.509,45.132],[40.004,43.344],[40.009,43.406],[40.016,43.42],[40.01,43.424],[40.033,43.443],[40.044,43.478],[40.107,43.573],[40.66,43.562],[41.649,43.223],[42.406,43.232],[42.667,43.139],[42.759,43.197],[43.033,43.089],[43.042,43.024],[43.815,42.743],[43.731,42.62],[43.955,42.554],[44.542,42.757],[44.7,42.747],[44.809,42.613],[44.888,42.749],[45.153,42.706],[45.365,42.553],[45.787,42.484],[45.617,42.208],[46.427,41.913],[46.533,41.874],[46.589,41.805],[46.753,41.862],[46.813,41.763],[47.01,41.636],[46.996,41.597],[47.038,41.554],[47.108,41.59],[47.346,41.279],[47.49,41.264],[47.545,41.203],[47.623,41.23],[47.758,41.195],[47.88,41.218],[48.076,41.5],[48.221,41.515],[48.288,41.562],[48.403,41.604],[48.423,41.654],[48.551,41.779],[48.587,41.843],[49.889,46.046],[49.323,46.269],[49.165,46.385],[48.55,46.563],[48.511,46.693],[49.011,46.727],[48.523,47.41],[48.452,47.408],[48.153,47.745],[47.65,47.766],[47.417,47.837],[47.387,47.682],[47.121,47.837],[47.115,48.272],[46.49,48.43],[46.784,48.954],[47.009,49.049],[47.047,49.198],[46.784,49.34],[46.908,49.867],[47.183,49.937],[47.346,50.093],[47.304,50.309],[47.586,50.479],[48.1,50.092],[48.245,49.861],[48.426,49.823],[48.684,49.895],[48.908,50.023],[48.579,50.633],[48.869,50.616],[49.127,50.786],[49.42,50.859],[49.39,51.094],[49.769,51.111],[49.973,51.24],[50.269,51.287],[50.597,51.619],[51.263,51.685],[51.301,51.488],[51.774,51.495],[51.825,51.679],[52.361,51.742],[52.543,51.484],[53.462,51.494],[53.693,51.235],[54.122,51.115],[54.463,50.856],[54.419,50.612],[54.558,50.52],[54.715,50.612],[54.567,51.02],[54.721,51.033],[55.678,50.545],[56.114,50.747],[56.179,50.932],[57.173,51.113],[57.442,50.884],[57.75,50.93],[57.756,51.139],[58.321,51.152],[58.88,50.709],[59.489,50.642],[59.519,50.499],[59.812,50.545],[60.013,50.816],[60.173,50.833],[60.319,50.677],[60.818,50.663],[61.443,50.807],[61.569,51.237],[61.681,51.257],[61.551,51.327],[61.507,51.407],[60.957,51.486],[60.924,51.611],[60.542,51.617],[60.368,51.668],[60.51,51.796],[60.099,51.871],[59.998,51.983],[59.913,52.069],[60.173,52.258],[60.175,52.395],[59.25,52.468],[59.224,52.284],[58.796,52.434],[58.943,53.953],[59.705,54.148],[59.952,54.859],[57.952,54.397],[57.148,54.842],[57.251,55.263],[58.818,55.034],[59.49,55.605],[59.284,56.157],[57.515,56.087],[57.28,56.879],[58.076,57.083],[58.138,57.681],[58.814,57.716],[58.711,58.075],[59.404,58.458],[59.156,59.147],[58.385,59.487],[59.507,60.912],[59.362,61.388],[59.614,62.449],[59.248,63.019],[59.806,64.139],[59.639,64.784],[60.744,64.958],[61.98,65.722],[66.171,67.613],[64.19,69.943],[31.599,70.166],[30.841,69.806],[30.95,69.547],[30.527,69.547],[30.164,69.652],[29.972,69.416],[29.276,69.281],[29.266,69.138],[29.044,69.012],[28.917,69.048],[28.46,68.914],[28.782,68.867],[28.439,68.534],[28.63,68.198],[29.342,68.067],[29.67,67.799],[30.02,67.675],[29.912,67.515],[28.984,66.941],[29.912,66.139],[30.164,65.669],[29.972,65.703],[29.74,65.64],[29.841,65.569],[29.69,65.318],[29.619,65.238],[29.881,65.221],[29.841,65.111],[29.619,65.06],[29.69,64.808],[30.053,64.791],[30.123,64.649],[30.012,64.575],[30.063,64.358],[30.476,64.257],[30.557,64.09],[30.254,63.834],[29.982,63.758],[30.496,63.467],[31.232,63.222],[31.293,63.09],[31.585,62.916],[31.384,62.663],[31.101,62.43],[29.018,61.174],[28.828,61.123],[28.48,60.934],[27.774,60.527],[27.712,60.389],[27.856,59.585]]]]}},{"type":"Feature","properties":{"code":"FK","name":"Falkland Islands","country":"United Kingdom"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-61.699,-52.882],[-55.524,-51.687],[-61.267,-50.639],[-61.699,-52.882]]]]}},{"type":"Feature","properties":{"code":"FO","name":"Faroe Islands","country":"Denmark"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-8.518,62.353],[-6.511,60.953],[-5.701,62.772],[-8.518,62.353]]]]}},{"type":"Feature","properties":{"code":"FM","name":"Federated States of Micronesia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[138.206,13.378],[136.271,6.737],[156.882,-1.392],[165.197,6.225],[138.206,13.378]]]]}},{"type":"Feature","properties":{"code":"FJ","name":"Fiji"},"geometry":{"type":"MultiPolygon","coordinates":[[[[176.265,-20.283],[180,-22.5],[180,-11.5],[176.089,-11.5],[176.265,-20.283]]],[[[-176.768,-14.952],[-180,-14.96],[-180,-21.708],[-176.749,-21.708],[-176.768,-14.952]]]]}},{"type":"Feature","properties":{"code":"FI","name":"Finland"},"geometry":{"type":"MultiPolygon","coordinates":[[[[29.127,69.692],[28.369,69.817],[28.328,69.886],[27.976,69.997],[27.955,70.097],[27.572,70.062],[27.058,69.921],[26.645,69.966],[26.403,69.914],[25.969,69.684],[25.697,69.27],[25.757,68.994],[25.616,68.896],[25.425,68.903],[25.122,68.787],[25.102,68.633],[24.93,68.611],[24.9,68.556],[24.749,68.651],[24.184,68.739],[24.023,68.816],[23.781,68.845],[23.68,68.703],[23.131,68.647],[22.533,68.744],[22.384,68.716],[22.273,68.895],[21.638,69.275],[21.278,69.313],[21.007,69.228],[20.986,69.188],[21.111,69.103],[21.058,69.036],[20.722,69.119],[20.553,69.061],[20.788,69.031],[20.917,68.968],[20.851,68.931],[20.906,68.897],[21.03,68.89],[22.004,68.507],[22.73,68.409],[23.103,68.266],[23.154,68.148],[23.265,68.151],[23.401,68.055],[23.658,67.95],[23.456,67.853],[23.547,67.593],[23.396,67.47],[23.754,67.437],[23.754,67.299],[23.547,67.254],[23.587,67.208],[23.562,67.17],[23.986,66.841],[23.981,66.796],[23.895,66.772],[23.86,66.564],[23.638,66.436],[23.676,66.386],[23.65,66.306],[23.713,66.213],[23.905,66.158],[24.158,65.854],[24.148,65.835],[24.151,65.814],[24.141,65.397],[20.159,63.066],[19.234,60.614],[20.967,60.715],[21.151,60.546],[21.082,60.202],[21.025,60.121],[21.355,59.675],[20.51,59.155],[26.329,60.001],[27.45,60.228],[27.712,60.389],[27.774,60.527],[28.48,60.934],[28.828,61.123],[29.018,61.174],[31.101,62.43],[31.384,62.663],[31.585,62.916],[31.293,63.09],[31.232,63.222],[30.496,63.467],[29.982,63.758],[30.254,63.834],[30.557,64.09],[30.476,64.257],[30.063,64.358],[30.012,64.575],[30.123,64.649],[30.053,64.791],[29.69,64.808],[29.619,65.06],[29.841,65.111],[29.881,65.221],[29.619,65.238],[29.69,65.318],[29.841,65.569],[29.74,65.64],[29.972,65.703],[30.164,65.669],[29.912,66.139],[28.984,66.941],[29.912,67.515],[30.02,67.675],[29.67,67.799],[29.342,68.067],[28.63,68.198],[28.439,68.534],[28.782,68.867],[28.46,68.914],[28.917,69.048],[28.812,69.12],[28.863,69.224],[29.317,69.48],[29.127,69.692]]]]}},{"type":"Feature","properties":{"code":"FR","name":"France"},"geometry":{"type":"MultiPolygon","coordinates":[[[[2.559,51.07],[2.185,51.521],[1.174,50.742],[-2.03,49.919],[-2.095,49.463],[-1.894,49.28],[-2.09,49.06],[-2.427,49.228],[-5.884,48.472],[-1.362,45.768],[-1.773,43.39],[-1.793,43.375],[-1.783,43.364],[-1.787,43.355],[-1.771,43.344],[-1.753,43.341],[-1.751,43.332],[-1.74,43.33],[-1.731,43.295],[-1.694,43.314],[-1.625,43.307],[-1.631,43.286],[-1.613,43.253],[-1.577,43.253],[-1.56,43.288],[-1.51,43.295],[-1.453,43.27],[-1.409,43.273],[-1.376,43.245],[-1.416,43.128],[-1.476,43.084],[-1.441,43.047],[-1.353,43.027],[-1.344,43.097],[-1.322,43.113],[-1.271,43.12],[-1.301,43.096],[-1.305,43.069],[-1.252,43.042],[-1.229,43.055],[-1.103,43.006],[-1.01,42.993],[-0.971,42.962],[-0.817,42.952],[-0.755,42.969],[-0.72,42.925],[-0.734,42.912],[-0.726,42.893],[-0.698,42.879],[-0.676,42.883],[-0.555,42.778],[-0.509,42.827],[-0.443,42.799],[-0.413,42.808],[-0.388,42.801],[-0.312,42.848],[-0.179,42.79],[-0.161,42.795],[-0.105,42.728],[-0.025,42.685],[0.176,42.734],[0.253,42.717],[0.294,42.674],[0.363,42.723],[0.402,42.698],[0.679,42.695],[0.654,42.759],[0.661,42.84],[0.711,42.864],[0.931,42.792],[0.962,42.806],[0.983,42.788],[1.08,42.786],[1.159,42.714],[1.356,42.719],[1.442,42.602],[1.48,42.613],[1.467,42.633],[1.48,42.652],[1.509,42.645],[1.554,42.657],[1.601,42.627],[1.635,42.63],[1.663,42.62],[1.683,42.625],[1.735,42.615],[1.726,42.591],[1.786,42.577],[1.737,42.555],[1.725,42.503],[1.763,42.489],[1.83,42.484],[1.889,42.45],[1.937,42.454],[1.943,42.443],[1.941,42.433],[1.941,42.43],[1.957,42.424],[1.965,42.378],[2.005,42.354],[2.062,42.359],[2.116,42.384],[2.128,42.413],[2.166,42.423],[2.206,42.416],[2.256,42.438],[2.385,42.4],[2.433,42.394],[2.435,42.376],[2.485,42.339],[2.544,42.334],[2.555,42.354],[2.579,42.358],[2.675,42.34],[2.653,42.388],[2.721,42.423],[2.755,42.426],[2.775,42.41],[2.843,42.457],[2.857,42.454],[2.87,42.468],[2.884,42.459],[2.921,42.457],[2.943,42.482],[2.965,42.467],[3.037,42.474],[3.082,42.427],[3.1,42.426],[3.114,42.436],[3.172,42.435],[6.548,42.944],[7.424,43.722],[7.409,43.73],[7.411,43.732],[7.413,43.732],[7.413,43.733],[7.412,43.734],[7.421,43.74],[7.423,43.742],[7.424,43.741],[7.428,43.744],[7.43,43.749],[7.436,43.75],[7.437,43.752],[7.439,43.752],[7.438,43.75],[7.478,43.733],[7.53,43.784],[7.504,43.843],[7.494,43.866],[7.512,43.883],[7.561,43.899],[7.569,43.945],[7.608,43.958],[7.653,43.976],[7.668,43.999],[7.66,44.03],[7.725,44.076],[7.669,44.128],[7.687,44.175],[7.632,44.179],[7.622,44.149],[7.364,44.119],[7.345,44.144],[7.278,44.146],[7.169,44.204],[7.008,44.237],[6.982,44.283],[6.892,44.366],[6.888,44.42],[6.945,44.431],[6.862,44.498],[6.855,44.531],[6.96,44.621],[6.951,44.663],[7.006,44.694],[7.075,44.681],[7.004,44.788],[7.022,44.825],[6.935,44.866],[6.908,44.843],[6.755,44.899],[6.745,44.937],[6.748,45.019],[6.67,45.023],[6.628,45.112],[6.77,45.16],[6.851,45.132],[6.967,45.208],[7.071,45.212],[7.131,45.254],[7.106,45.329],[7.18,45.401],[7,45.509],[6.989,45.639],[6.808,45.719],[6.808,45.833],[6.953,45.852],[7.042,45.924],[7.009,45.994],[6.939,46.065],[6.879,46.039],[6.893,46.125],[6.79,46.141],[6.861,46.285],[6.772,46.348],[6.802,46.392],[6.823,46.427],[6.534,46.454],[6.254,46.363],[6.22,46.313],[6.248,46.302],[6.251,46.29],[6.238,46.278],[6.25,46.263],[6.267,46.247],[6.295,46.262],[6.31,46.244],[6.297,46.227],[6.277,46.216],[6.26,46.212],[6.248,46.205],[6.239,46.205],[6.235,46.207],[6.222,46.2],[6.222,46.199],[6.218,46.198],[6.216,46.195],[6.213,46.194],[6.211,46.193],[6.205,46.192],[6.198,46.184],[6.196,46.184],[6.187,46.18],[6.189,46.166],[6.181,46.162],[6.153,46.152],[6.134,46.141],[6.099,46.144],[6.092,46.152],[6.075,46.149],[6.052,46.152],[6.046,46.14],[6.036,46.137],[6.018,46.142],[5.987,46.145],[5.979,46.133],[5.958,46.129],[5.964,46.144],[5.975,46.159],[5.982,46.174],[5.988,46.17],[5.996,46.186],[5.965,46.196],[5.975,46.215],[6.025,46.233],[6.033,46.238],[6.046,46.231],[6.05,46.235],[6.063,46.246],[6.071,46.241],[6.086,46.247],[6.101,46.238],[6.124,46.251],[6.119,46.263],[6.101,46.285],[6.117,46.295],[6.12,46.312],[6.139,46.338],[6.157,46.349],[6.17,46.368],[6.16,46.377],[6.15,46.378],[6.099,46.408],[6.064,46.417],[6.084,46.443],[6.073,46.462],[6.157,46.544],[6.111,46.576],[6.271,46.683],[6.384,46.732],[6.452,46.775],[6.432,46.803],[6.465,46.889],[6.433,46.927],[6.715,47.049],[6.688,47.066],[6.768,47.121],[6.849,47.159],[6.951,47.243],[6.951,47.264],[6.943,47.287],[7.053,47.333],[7.056,47.351],[7.031,47.37],[6.88,47.353],[6.885,47.373],[6.937,47.407],[6.94,47.434],[7.002,47.453],[6.984,47.494],[7.023,47.505],[7.074,47.489],[7.128,47.504],[7.162,47.49],[7.196,47.495],[7.17,47.443],[7.247,47.42],[7.335,47.442],[7.356,47.434],[7.403,47.436],[7.431,47.458],[7.446,47.463],[7.458,47.472],[7.429,47.486],[7.434,47.497],[7.475,47.479],[7.511,47.497],[7.498,47.518],[7.523,47.516],[7.532,47.528],[7.519,47.535],[7.506,47.529],[7.497,47.538],[7.509,47.545],[7.517,47.546],[7.528,47.553],[7.536,47.556],[7.557,47.568],[7.557,47.572],[7.565,47.576],[7.567,47.578],[7.584,47.575],[7.589,47.59],[7.593,47.601],[7.589,47.608],[7.574,47.616],[7.559,47.638],[7.534,47.651],[7.521,47.664],[7.519,47.683],[7.513,47.702],[7.537,47.716],[7.548,47.729],[7.529,47.777],[7.557,47.874],[7.623,47.979],[7.57,48.033],[7.571,48.123],[7.665,48.222],[7.69,48.3],[7.746,48.327],[7.731,48.392],[7.768,48.489],[7.806,48.512],[7.802,48.548],[7.801,48.586],[7.841,48.642],[7.89,48.663],[7.968,48.725],[7.97,48.756],[8.015,48.761],[8.033,48.79],[8.068,48.79],[8.103,48.818],[8.128,48.88],[8.2,48.958],[8.2,48.959],[8.226,48.974],[8.142,48.978],[7.978,49.032],[7.936,49.055],[7.864,49.035],[7.796,49.066],[7.759,49.046],[7.636,49.054],[7.626,49.077],[7.564,49.081],[7.53,49.098],[7.492,49.139],[7.495,49.17],[7.445,49.168],[7.441,49.184],[7.366,49.173],[7.36,49.144],[7.319,49.142],[7.295,49.114],[7.235,49.13],[7.159,49.12],[7.136,49.128],[7.125,49.143],[7.104,49.138],[7.107,49.156],[7.079,49.15],[7.09,49.131],[7.072,49.126],[7.066,49.114],[7.055,49.112],[7.048,49.114],[7.044,49.121],[7.047,49.137],[7.032,49.157],[7.027,49.17],[7.035,49.191],[7.013,49.19],[6.973,49.21],[6.96,49.203],[6.94,49.216],[6.938,49.222],[6.919,49.223],[6.893,49.209],[6.859,49.224],[6.836,49.212],[6.851,49.2],[6.85,49.194],[6.862,49.182],[6.847,49.157],[6.834,49.152],[6.783,49.168],[6.738,49.164],[6.711,49.188],[6.733,49.205],[6.718,49.221],[6.693,49.217],[6.666,49.281],[6.602,49.311],[6.572,49.35],[6.588,49.354],[6.601,49.369],[6.533,49.407],[6.554,49.425],[6.424,49.477],[6.403,49.465],[6.392,49.467],[6.384,49.465],[6.368,49.469],[6.369,49.459],[6.288,49.485],[6.279,49.503],[6.25,49.506],[6.241,49.514],[6.195,49.505],[6.174,49.509],[6.154,49.502],[6.161,49.493],[6.143,49.488],[6.128,49.494],[6.123,49.474],[6.103,49.471],[6.098,49.464],[6.101,49.453],[6.084,49.456],[6.079,49.464],[6.056,49.467],[6.042,49.448],[6.027,49.448],[6.026,49.455],[5.977,49.455],[5.969,49.491],[5.942,49.496],[5.941,49.5],[5.866,49.5],[5.834,49.522],[5.835,49.527],[5.845,49.53],[5.836,49.542],[5.817,49.538],[5.809,49.542],[5.818,49.548],[5.792,49.552],[5.774,49.563],[5.758,49.559],[5.756,49.543],[5.645,49.551],[5.609,49.512],[5.55,49.527],[5.465,49.498],[5.467,49.526],[5.437,49.571],[5.397,49.616],[5.348,49.629],[5.339,49.616],[5.314,49.612],[5.302,49.631],[5.33,49.656],[5.315,49.668],[5.262,49.695],[5.145,49.703],[5.092,49.762],[4.967,49.799],[4.855,49.79],[4.87,49.823],[4.851,49.865],[4.885,49.924],[4.788,49.956],[4.838,50.067],[4.886,50.152],[4.833,50.153],[4.824,50.169],[4.752,50.113],[4.701,50.094],[4.687,49.997],[4.541,49.969],[4.511,49.947],[4.435,49.941],[4.351,49.953],[4.32,49.97],[4.205,49.958],[4.142,49.98],[4.135,50.02],[4.163,50.047],[4.231,50.069],[4.201,50.135],[4.136,50.131],[4.16,50.192],[4.155,50.211],[4.219,50.255],[4.207,50.273],[4.179,50.274],[4.173,50.288],[4.155,50.283],[4.168,50.258],[4.137,50.256],[4.12,50.304],[4.11,50.302],[4.102,50.312],[4.069,50.325],[4.027,50.358],[3.968,50.35],[3.908,50.328],[3.843,50.352],[3.739,50.348],[3.71,50.319],[3.71,50.303],[3.67,50.346],[3.657,50.369],[3.673,50.387],[3.675,50.402],[3.662,50.452],[3.644,50.463],[3.61,50.496],[3.584,50.49],[3.568,50.502],[3.495,50.489],[3.516,50.526],[3.474,50.534],[3.446,50.51],[3.377,50.495],[3.286,50.527],[3.273,50.607],[3.24,50.658],[3.264,50.677],[3.254,50.69],[3.261,50.692],[3.261,50.701],[3.246,50.714],[3.22,50.71],[3.208,50.717],[3.19,50.726],[3.201,50.735],[3.188,50.74],[3.183,50.75],[3.165,50.768],[3.15,50.79],[3.126,50.786],[3.12,50.792],[3.112,50.794],[3.106,50.783],[3.092,50.777],[3.043,50.777],[3.005,50.766],[2.968,50.752],[2.95,50.751],[2.909,50.702],[2.91,50.694],[2.901,50.693],[2.885,50.707],[2.879,50.703],[2.87,50.703],[2.848,50.723],[2.811,50.718],[2.712,50.813],[2.633,50.815],[2.591,50.918],[2.631,50.947],[2.576,51.003],[2.559,51.07]],[[1.998,42.447],[1.984,42.447],[1.961,42.454],[1.956,42.458],[1.962,42.479],[1.97,42.481],[1.972,42.485],[1.977,42.486],[1.98,42.496],[1.989,42.494],[1.998,42.486],[1.986,42.475],[1.992,42.462],[2.016,42.452],[1.998,42.447]]]]}},{"type":"Feature","properties":{"code":"GF","name":"French Guiana","country":"France"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-52.538,5.536],[-53.935,5.824],[-54.011,5.688],[-54.019,5.528],[-54.269,5.269],[-54.472,4.92],[-54.384,4.132],[-54.194,3.844],[-54.051,3.636],[-53.989,3.627],[-53.985,3.587],[-54.285,2.678],[-54.429,2.424],[-54.608,2.329],[-54.163,2.108],[-53.787,2.344],[-52.965,2.188],[-52.691,2.373],[-52.318,3.179],[-51.856,3.834],[-51.823,3.858],[-51.796,3.893],[-51.62,4.146],[-51.638,4.514],[-52.538,5.536]]]]}},{"type":"Feature","properties":{"code":"PF","name":"French Polynesia","country":"France"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-135.597,-4.705],[-156.486,-15.528],[-156.456,-31.755],[-133.595,-28.471],[-135.597,-4.705]]]]}},{"type":"Feature","properties":{"code":"GA","name":"Gabon"},"geometry":{"type":"MultiPolygon","coordinates":[[[[13.295,2.161],[13.285,2.257],[11.371,2.3],[11.356,2.172],[11.353,1.003],[9.796,1.002],[9.751,1.068],[9.664,1.067],[9.277,0.794],[8.443,-1.088],[10.97,-4.06],[11.199,-3.983],[11.254,-3.712],[11.35,-3.601],[11.451,-3.584],[11.523,-3.518],[11.703,-3.675],[11.882,-3.75],[11.947,-3.624],[11.883,-3.538],[12.049,-3.345],[11.702,-3.175],[11.706,-3.077],[11.804,-3.004],[11.648,-2.811],[11.536,-2.857],[11.645,-2.619],[11.576,-2.334],[11.746,-2.399],[11.969,-2.336],[12.049,-2.417],[12.479,-2.326],[12.447,-1.92],[12.613,-1.813],[12.822,-1.911],[13.028,-2.331],[13.48,-2.432],[13.759,-2.093],[13.921,-2.356],[13.858,-2.469],[14.104,-2.493],[14.238,-2.337],[14.162,-2.239],[14.235,-2.157],[14.259,-1.976],[14.418,-1.894],[14.526,-0.578],[14.419,-0.448],[14.216,-0.383],[14.069,-0.208],[13.906,-0.229],[13.886,0.267],[14.109,0.586],[14.261,0.573],[14.482,0.915],[14.252,1.398],[13.896,1.426],[13.155,1.234],[13.254,1.323],[13.135,1.572],[13.295,2.161]]]]}},{"type":"Feature","properties":{"code":"EC","name":"Galápagos Islands","country":"Ecuador"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-92,1.56],[-91.604,-2.266],[-87.734,-1.085],[-92,1.56]]]]}},{"type":"Feature","properties":{"code":"PS","name":"Gaza Strip"},"geometry":{"type":"MultiPolygon","coordinates":[[[[34.052,31.466],[34.219,31.324],[34.236,31.297],[34.24,31.296],[34.267,31.22],[34.294,31.242],[34.365,31.29],[34.374,31.306],[34.365,31.364],[34.401,31.409],[34.489,31.484],[34.568,31.542],[34.487,31.597],[34.293,31.704],[34.052,31.466]]]]}},{"type":"Feature","properties":{"code":"GE","name":"Georgia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[46.427,41.913],[45.617,42.208],[45.787,42.484],[45.365,42.553],[45.153,42.706],[44.888,42.749],[44.809,42.613],[44.7,42.747],[44.542,42.757],[43.955,42.554],[43.731,42.62],[43.815,42.743],[43.042,43.024],[43.033,43.089],[42.759,43.197],[42.667,43.139],[42.406,43.232],[41.649,43.223],[40.66,43.562],[40.107,43.573],[40.044,43.478],[40.033,43.443],[40.01,43.424],[40.016,43.42],[40.009,43.406],[40.007,43.331],[41.544,41.522],[41.65,41.486],[41.715,41.493],[41.712,41.474],[41.819,41.436],[41.951,41.525],[42.264,41.493],[42.518,41.436],[42.592,41.582],[42.728,41.597],[42.845,41.589],[42.79,41.501],[42.849,41.473],[42.879,41.505],[43.03,41.379],[43.217,41.303],[43.134,41.255],[43.194,41.252],[43.231,41.175],[43.361,41.203],[43.45,41.177],[43.472,41.126],[43.677,41.134],[43.747,41.112],[43.848,41.163],[44.166,41.191],[44.181,41.246],[44.321,41.208],[44.343,41.203],[44.344,41.238],[44.468,41.182],[44.593,41.193],[44.615,41.24],[44.728,41.203],[44.821,41.215],[44.879,41.202],[44.899,41.214],[44.844,41.231],[44.817,41.235],[44.801,41.259],[44.814,41.304],[44.935,41.257],[45.013,41.297],[45.099,41.341],[45.18,41.422],[45.263,41.464],[45.314,41.472],[45.401,41.424],[45.46,41.459],[45.684,41.354],[45.71,41.362],[45.757,41.352],[45.699,41.295],[45.808,41.223],[45.958,41.18],[46.132,41.195],[46.277,41.19],[46.377,41.108],[46.456,41.1],[46.486,41.058],[46.551,41.11],[46.64,41.095],[46.661,41.205],[46.724,41.286],[46.637,41.377],[46.467,41.433],[46.403,41.485],[46.339,41.496],[46.298,41.572],[46.341,41.575],[46.34,41.595],[46.325,41.609],[46.282,41.601],[46.265,41.633],[46.244,41.599],[46.198,41.623],[46.179,41.721],[46.205,41.772],[46.24,41.758],[46.309,41.791],[46.398,41.844],[46.427,41.913]]]]}},{"type":"Feature","properties":{"code":"DE","name":"Germany"},"geometry":{"type":"MultiPolygon","coordinates":[[[[8.708,47.689],[8.718,47.691],[8.702,47.715],[8.664,47.714],[8.675,47.698],[8.658,47.689],[8.668,47.684],[8.69,47.696],[8.708,47.689]]],[[[8.726,47.697],[8.728,47.693],[8.759,47.69],[8.795,47.675],[8.8,47.702],[8.77,47.708],[8.773,47.721],[8.807,47.738],[8.82,47.715],[8.87,47.705],[8.851,47.682],[8.874,47.67],[8.876,47.654],[8.899,47.648],[8.941,47.656],[9.021,47.687],[9.099,47.678],[9.138,47.664],[9.152,47.669],[9.171,47.655],[9.175,47.656],[9.176,47.654],[9.182,47.656],[9.256,47.659],[9.551,47.536],[9.727,47.535],[9.767,47.593],[9.803,47.594],[9.826,47.582],[9.819,47.547],[9.875,47.53],[9.877,47.547],[9.924,47.531],[9.96,47.539],[10,47.482],[10.039,47.489],[10.071,47.455],[10.09,47.46],[10.105,47.432],[10.069,47.407],[10.098,47.357],[10.118,47.372],[10.164,47.367],[10.176,47.389],[10.213,47.38],[10.228,47.389],[10.238,47.376],[10.2,47.328],[10.215,47.31],[10.176,47.291],[10.175,47.272],[10.233,47.271],[10.334,47.308],[10.399,47.376],[10.432,47.385],[10.436,47.412],[10.474,47.433],[10.463,47.479],[10.443,47.485],[10.432,47.501],[10.45,47.552],[10.435,47.584],[10.473,47.586],[10.488,47.541],[10.569,47.536],[10.603,47.568],[10.635,47.559],[10.688,47.558],[10.697,47.543],[10.76,47.532],[10.776,47.517],[10.888,47.537],[10.913,47.513],[10.869,47.502],[10.871,47.479],[10.909,47.486],[10.938,47.48],[10.924,47.47],[10.985,47.429],[10.971,47.416],[10.971,47.396],[11.118,47.397],[11.125,47.412],[11.205,47.432],[11.252,47.433],[11.22,47.396],[11.278,47.4],[11.296,47.426],[11.338,47.449],[11.418,47.446],[11.381,47.475],[11.436,47.514],[11.526,47.509],[11.586,47.523],[11.588,47.555],[11.607,47.579],[11.639,47.592],[11.841,47.584],[11.856,47.602],[12.009,47.625],[12.023,47.61],[12.058,47.617],[12.137,47.606],[12.178,47.615],[12.181,47.61],[12.177,47.601],[12.186,47.605],[12.204,47.607],[12.208,47.611],[12.199,47.641],[12.185,47.66],[12.183,47.667],[12.168,47.682],[12.162,47.701],[12.183,47.701],[12.226,47.718],[12.254,47.743],[12.262,47.735],[12.24,47.695],[12.26,47.677],[12.28,47.688],[12.336,47.695],[12.372,47.684],[12.439,47.698],[12.441,47.674],[12.501,47.623],[12.538,47.636],[12.574,47.632],[12.607,47.674],[12.736,47.679],[12.778,47.667],[12.765,47.645],[12.821,47.615],[12.774,47.58],[12.807,47.545],[12.847,47.546],[12.853,47.527],[12.962,47.475],[12.983,47.487],[13,47.463],[13.045,47.494],[13.033,47.534],[13.054,47.563],[13.045,47.582],[13.066,47.586],[13.064,47.601],[13.096,47.633],[13.077,47.688],[13.014,47.721],[12.986,47.708],[12.93,47.711],[12.913,47.718],[12.903,47.725],[12.917,47.74],[12.935,47.748],[12.944,47.763],[12.932,47.773],[12.963,47.8],[12.985,47.829],[13.006,47.844],[12.942,47.929],[12.939,47.94],[12.936,47.944],[12.934,47.941],[12.927,47.939],[12.92,47.941],[12.921,47.951],[12.917,47.956],[12.875,47.962],[12.855,48.011],[12.761,48.074],[12.75,48.109],[12.762,48.128],[12.786,48.124],[12.807,48.15],[12.827,48.152],[12.836,48.159],[12.836,48.165],[12.845,48.166],[12.871,48.203],[12.953,48.206],[13.021,48.257],[13.085,48.277],[13.126,48.279],[13.181,48.296],[13.26,48.294],[13.309,48.316],[13.407,48.373],[13.439,48.434],[13.425,48.457],[13.457,48.511],[13.437,48.558],[13.452,48.565],[13.47,48.552],[13.507,48.575],[13.501,48.581],[13.513,48.59],[13.575,48.559],[13.597,48.57],[13.625,48.555],[13.652,48.551],[13.661,48.536],[13.728,48.512],[13.748,48.531],[13.751,48.562],[13.769,48.553],[13.805,48.58],[13.8,48.595],[13.826,48.623],[13.819,48.676],[13.813,48.684],[13.818,48.698],[13.793,48.714],[13.819,48.733],[13.823,48.755],[13.84,48.77],[13.81,48.779],[13.79,48.833],[13.77,48.835],[13.739,48.885],[13.677,48.879],[13.616,48.946],[13.583,48.969],[13.506,48.974],[13.502,48.938],[13.408,48.989],[13.395,49.048],[13.282,49.123],[13.237,49.114],[13.204,49.123],[13.17,49.143],[13.177,49.167],[13.059,49.263],[13.03,49.274],[13.036,49.304],[12.949,49.341],[12.882,49.355],[12.884,49.335],[12.782,49.346],[12.759,49.399],[12.712,49.424],[12.669,49.429],[12.641,49.476],[12.648,49.526],[12.602,49.529],[12.562,49.615],[12.535,49.619],[12.526,49.684],[12.446,49.702],[12.405,49.763],[12.466,49.789],[12.483,49.836],[12.552,49.921],[12.473,49.942],[12.499,49.973],[12.308,50.057],[12.261,50.063],[12.274,50.077],[12.237,50.102],[12.207,50.103],[12.192,50.134],[12.215,50.164],[12.193,50.2],[12.093,50.25],[12.137,50.274],[12.109,50.32],[12.18,50.321],[12.208,50.273],[12.251,50.271],[12.27,50.252],[12.248,50.255],[12.239,50.246],[12.288,50.224],[12.281,50.195],[12.292,50.175],[12.326,50.171],[12.338,50.194],[12.324,50.204],[12.333,50.244],[12.354,50.24],[12.366,50.283],[12.402,50.295],[12.399,50.323],[12.434,50.325],[12.437,50.338],[12.466,50.355],[12.483,50.348],[12.492,50.352],[12.487,50.373],[12.514,50.397],[12.673,50.419],[12.707,50.399],[12.73,50.423],[12.735,50.432],[12.825,50.457],[12.941,50.409],[12.984,50.42],[13.021,50.448],[13.02,50.473],[13.031,50.509],[13.083,50.501],[13.134,50.517],[13.19,50.502],[13.252,50.593],[13.295,50.579],[13.326,50.58],[13.323,50.603],[13.378,50.627],[13.375,50.649],[13.422,50.612],[13.464,50.601],[13.497,50.631],[13.523,50.647],[13.537,50.677],[13.525,50.704],[13.66,50.731],[13.702,50.718],[13.763,50.735],[13.829,50.725],[13.894,50.741],[13.891,50.785],[13.989,50.818],[14.03,50.807],[14.223,50.86],[14.243,50.888],[14.271,50.894],[14.301,50.884],[14.387,50.899],[14.398,50.939],[14.314,50.952],[14.303,50.966],[14.328,50.974],[14.324,50.986],[14.288,50.977],[14.257,50.989],[14.301,51.055],[14.413,51.021],[14.458,51.037],[14.492,51.023],[14.492,51.044],[14.5,51.047],[14.508,51.043],[14.499,51.022],[14.533,51.017],[14.534,51.004],[14.564,51.01],[14.582,50.993],[14.599,50.987],[14.597,50.961],[14.564,50.922],[14.58,50.914],[14.648,50.932],[14.653,50.905],[14.634,50.888],[14.62,50.86],[14.707,50.841],[14.791,50.814],[14.828,50.87],[14.817,50.881],[14.897,50.942],[14.893,50.95],[14.929,50.997],[14.955,51.046],[14.979,51.077],[14.982,51.114],[14.997,51.122],[14.991,51.143],[14.996,51.144],[15.001,51.15],[14.994,51.158],[14.993,51.162],[15.005,51.169],[15.012,51.213],[15.043,51.284],[14.98,51.334],[14.969,51.384],[14.965,51.448],[14.947,51.472],[14.732,51.529],[14.727,51.539],[14.73,51.546],[14.711,51.562],[14.773,51.613],[14.758,51.623],[14.754,51.674],[14.691,51.708],[14.664,51.733],[14.646,51.795],[14.605,51.805],[14.591,51.833],[14.659,51.884],[14.693,51.904],[14.706,51.929],[14.718,51.94],[14.722,51.952],[14.718,51.956],[14.714,51.956],[14.705,51.977],[14.713,52.003],[14.76,52.066],[14.73,52.092],[14.692,52.103],[14.677,52.139],[14.706,52.169],[14.683,52.196],[14.713,52.221],[14.701,52.25],[14.581,52.28],[14.564,52.338],[14.552,52.353],[14.544,52.426],[14.631,52.49],[14.601,52.531],[14.629,52.571],[14.611,52.598],[14.221,52.812],[14.138,52.824],[14.123,52.843],[14.159,52.877],[14.141,52.958],[14.26,53.003],[14.35,53.058],[14.387,53.137],[14.367,53.164],[14.379,53.204],[14.407,53.211],[14.451,53.262],[14.441,53.274],[14.421,53.277],[14.352,53.495],[14.327,53.506],[14.304,53.555],[14.319,53.616],[14.285,53.634],[14.285,53.66],[14.271,53.666],[14.284,53.677],[14.268,53.699],[14.272,53.745],[14.213,53.866],[14.208,53.908],[14.185,53.913],[14.206,53.917],[14.226,53.929],[14.208,54.128],[13.432,54.833],[11.903,54.385],[11.003,54.637],[10.311,54.66],[10.168,54.739],[9.893,54.842],[9.736,54.825],[9.612,54.855],[9.627,54.881],[9.589,54.888],[9.466,54.831],[9.432,54.826],[9.412,54.843],[9.385,54.84],[9.365,54.817],[9.338,54.802],[9.328,54.806],[9.247,54.811],[9.234,54.834],[9.246,54.847],[9.206,54.858],[9.143,54.874],[9.046,54.872],[8.928,54.905],[8.812,54.905],[8.764,54.895],[8.64,54.911],[8.558,54.918],[8.457,55.067],[8.339,55.075],[6.514,53.65],[6.91,53.442],[7.002,53.327],[7.191,53.319],[7.217,53.201],[7.227,53.182],[7.179,53.138],[7.217,53.007],[7.073,52.811],[7.046,52.633],[6.773,52.654],[6.716,52.629],[6.695,52.488],[6.943,52.436],[6.99,52.472],[7.034,52.402],[7.07,52.378],[7.027,52.279],[7.064,52.238],[7.037,52.227],[6.99,52.227],[6.972,52.203],[6.84,52.117],[6.761,52.119],[6.681,52.051],[6.83,51.99],[6.824,51.967],[6.723,51.895],[6.684,51.919],[6.586,51.894],[6.502,51.863],[6.472,51.854],[6.388,51.873],[6.407,51.828],[6.306,51.85],[6.299,51.868],[6.214,51.868],[6.153,51.904],[6.116,51.898],[6.169,51.841],[6.103,51.848],[6.067,51.861],[5.998,51.832],[5.946,51.828],[5.987,51.769],[5.95,51.749],[6.041,51.718],[6.028,51.674],[6.118,51.656],[6.091,51.606],[6.18,51.541],[6.217,51.486],[6.207,51.4],[6.226,51.399],[6.227,51.361],[6.17,51.332],[6.079,51.244],[6.079,51.17],[6.174,51.196],[6.167,51.157],[5.983,51.075],[5.954,51.035],[5.913,51.067],[5.867,51.052],[5.878,51.02],[5.905,51.002],[5.903,50.974],[5.953,50.987],[6.027,50.983],[6.016,50.934],[6.093,50.921],[6.075,50.893],[6.088,50.872],[6.077,50.86],[6.074,50.847],[6.057,50.852],[6.056,50.857],[6.019,50.844],[6.023,50.817],[6.005,50.801],[5.984,50.81],[5.975,50.8],[6.026,50.775],[6.02,50.754],[6.039,50.746],[6.033,50.726],[6.041,50.718],[6.044,50.729],[6.117,50.722],[6.179,50.624],[6.27,50.624],[6.248,50.604],[6.249,50.599],[6.24,50.587],[6.226,50.591],[6.203,50.57],[6.177,50.559],[6.178,50.542],[6.197,50.536],[6.196,50.531],[6.187,50.527],[6.192,50.521],[6.206,50.521],[6.223,50.496],[6.266,50.503],[6.308,50.501],[6.346,50.488],[6.34,50.461],[6.372,50.454],[6.369,50.408],[6.344,50.38],[6.369,50.359],[6.408,50.336],[6.406,50.324],[6.357,50.311],[6.325,50.323],[6.299,50.309],[6.288,50.275],[6.208,50.252],[6.169,50.223],[6.184,50.208],[6.187,50.182],[6.146,50.171],[6.141,50.15],[6.153,50.141],[6.138,50.13],[6.121,50.092],[6.113,50.059],[6.135,50.041],[6.13,50.029],[6.147,50.022],[6.138,50.015],[6.133,50.02],[6.13,50.018],[6.138,50.011],[6.149,50.009],[6.141,49.996],[6.17,49.985],[6.165,49.971],[6.179,49.954],[6.186,49.956],[6.18,49.966],[6.191,49.97],[6.199,49.951],[6.221,49.95],[6.226,49.929],[6.219,49.924],[6.229,49.921],[6.235,49.9],[6.261,49.882],[6.289,49.876],[6.297,49.867],[6.31,49.87],[6.323,49.851],[6.321,49.837],[6.336,49.838],[6.343,49.85],[6.366,49.85],[6.4,49.82],[6.425,49.816],[6.429,49.811],[6.441,49.814],[6.454,49.812],[6.471,49.823],[6.487,49.813],[6.506,49.809],[6.512,49.801],[6.521,49.813],[6.531,49.807],[6.522,49.798],[6.505,49.79],[6.517,49.783],[6.511,49.775],[6.518,49.769],[6.516,49.76],[6.502,49.753],[6.502,49.733],[6.518,49.724],[6.514,49.721],[6.503,49.727],[6.495,49.726],[6.497,49.722],[6.504,49.718],[6.506,49.714],[6.498,49.711],[6.48,49.698],[6.46,49.691],[6.447,49.678],[6.429,49.669],[6.427,49.661],[6.438,49.66],[6.441,49.657],[6.419,49.617],[6.398,49.601],[6.385,49.599],[6.375,49.589],[6.383,49.58],[6.38,49.576],[6.367,49.578],[6.358,49.571],[6.382,49.559],[6.381,49.552],[6.357,49.529],[6.368,49.504],[6.369,49.489],[6.368,49.469],[6.384,49.465],[6.392,49.467],[6.403,49.465],[6.424,49.477],[6.554,49.425],[6.533,49.407],[6.601,49.369],[6.588,49.354],[6.572,49.35],[6.602,49.311],[6.666,49.281],[6.693,49.217],[6.718,49.221],[6.733,49.205],[6.711,49.188],[6.738,49.164],[6.783,49.168],[6.834,49.152],[6.847,49.157],[6.862,49.182],[6.85,49.194],[6.851,49.2],[6.836,49.212],[6.859,49.224],[6.893,49.209],[6.919,49.223],[6.938,49.222],[6.94,49.216],[6.96,49.203],[6.973,49.21],[7.013,49.19],[7.035,49.191],[7.027,49.17],[7.032,49.157],[7.047,49.137],[7.044,49.121],[7.048,49.114],[7.055,49.112],[7.066,49.114],[7.072,49.126],[7.09,49.131],[7.079,49.15],[7.107,49.156],[7.104,49.138],[7.125,49.143],[7.136,49.128],[7.159,49.12],[7.235,49.13],[7.295,49.114],[7.319,49.142],[7.36,49.144],[7.366,49.173],[7.441,49.184],[7.445,49.168],[7.495,49.17],[7.492,49.139],[7.53,49.098],[7.564,49.081],[7.626,49.077],[7.636,49.054],[7.759,49.046],[7.796,49.066],[7.864,49.035],[7.936,49.055],[7.978,49.032],[8.142,48.978],[8.226,48.974],[8.2,48.959],[8.2,48.958],[8.128,48.88],[8.103,48.818],[8.068,48.79],[8.033,48.79],[8.015,48.761],[7.97,48.756],[7.968,48.725],[7.89,48.663],[7.841,48.642],[7.801,48.586],[7.802,48.548],[7.806,48.512],[7.768,48.489],[7.731,48.392],[7.746,48.327],[7.69,48.3],[7.665,48.222],[7.571,48.123],[7.57,48.033],[7.623,47.979],[7.557,47.874],[7.529,47.777],[7.548,47.729],[7.537,47.716],[7.513,47.702],[7.519,47.683],[7.521,47.664],[7.534,47.651],[7.559,47.638],[7.574,47.616],[7.589,47.608],[7.593,47.601],[7.589,47.59],[7.605,47.585],[7.605,47.579],[7.619,47.577],[7.643,47.592],[7.642,47.594],[7.646,47.597],[7.674,47.592],[7.682,47.599],[7.694,47.601],[7.685,47.596],[7.671,47.587],[7.689,47.571],[7.677,47.564],[7.633,47.563],[7.651,47.547],[7.662,47.546],[7.666,47.538],[7.681,47.532],[7.696,47.533],[7.72,47.542],[7.753,47.546],[7.795,47.557],[7.819,47.588],[7.844,47.584],[7.887,47.589],[7.907,47.577],[7.913,47.55],[7.945,47.545],[7.957,47.558],[7.976,47.555],[8.001,47.556],[8.021,47.551],[8.044,47.554],[8.067,47.564],[8.086,47.558],[8.1,47.565],[8.104,47.579],[8.115,47.584],[8.137,47.584],[8.138,47.591],[8.149,47.596],[8.165,47.594],[8.194,47.616],[8.206,47.621],[8.22,47.618],[8.226,47.604],[8.238,47.612],[8.259,47.616],[8.263,47.61],[8.282,47.612],[8.297,47.606],[8.295,47.592],[8.303,47.586],[8.327,47.571],[8.355,47.57],[8.383,47.566],[8.395,47.578],[8.432,47.566],[8.494,47.581],[8.489,47.588],[8.466,47.584],[8.456,47.601],[8.507,47.619],[8.517,47.635],[8.558,47.624],[8.576,47.595],[8.603,47.612],[8.595,47.643],[8.607,47.653],[8.615,47.645],[8.604,47.637],[8.62,47.638],[8.629,47.651],[8.611,47.663],[8.605,47.673],[8.577,47.662],[8.561,47.671],[8.528,47.661],[8.532,47.647],[8.497,47.647],[8.466,47.641],[8.467,47.657],[8.447,47.654],[8.423,47.667],[8.413,47.667],[8.405,47.675],[8.421,47.684],[8.406,47.699],[8.448,47.724],[8.458,47.749],[8.489,47.772],[8.568,47.78],[8.564,47.806],[8.617,47.8],[8.624,47.763],[8.644,47.764],[8.653,47.801],[8.68,47.786],[8.69,47.757],[8.718,47.766],[8.743,47.752],[8.705,47.731],[8.737,47.717],[8.726,47.697]]]]}},{"type":"Feature","properties":{"code":"GH","name":"Ghana"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-0.135,11.141],[-0.274,11.172],[-0.286,11.127],[-0.36,11.078],[-0.382,11.126],[-0.424,11.117],[-0.443,11.043],[-0.619,10.913],[-0.671,10.998],[-2.834,11.007],[-2.942,10.643],[-2.831,10.403],[-2.742,9.832],[-2.765,9.566],[-2.688,9.493],[-2.698,9.227],[-2.778,9.049],[-2.664,9.018],[-2.582,8.779],[-2.49,8.209],[-2.629,8.115],[-2.612,8.026],[-2.678,8.021],[-2.748,7.926],[-2.784,7.95],[-2.795,7.86],[-2.923,7.608],[-2.978,7.272],[-2.954,7.237],[-3.233,6.817],[-3.22,6.744],[-3.26,6.625],[-3.019,5.717],[-2.953,5.719],[-2.967,5.641],[-2.931,5.621],[-2.854,5.652],[-2.766,5.61],[-2.727,5.348],[-2.776,5.346],[-2.731,5.136],[-2.755,5.107],[-2.953,5.125],[-2.966,5.104],[-3.063,5.137],[-3.111,5.127],[-3.107,5.085],[-3.34,4.175],[1.07,5.157],[1.276,5.936],[1.198,6.115],[1.2,6.171],[1.092,6.171],[1.06,6.23],[1.031,6.241],[0.997,6.338],[0.893,6.338],[0.71,6.531],[0.749,6.565],[0.637,6.639],[0.65,6.737],[0.582,6.76],[0.574,6.803],[0.529,6.829],[0.565,6.93],[0.521,6.944],[0.522,6.972],[0.596,7.013],[0.653,7.316],[0.629,7.411],[0.572,7.393],[0.525,7.454],[0.52,7.587],[0.583,7.624],[0.629,7.858],[0.589,8.128],[0.606,8.14],[0.612,8.183],[0.591,8.196],[0.639,8.259],[0.734,8.295],[0.647,8.489],[0.472,8.599],[0.373,8.753],[0.525,8.877],[0.454,9.046],[0.564,9.407],[0.491,9.483],[0.365,9.497],[0.331,9.448],[0.258,9.427],[0.225,9.479],[0.312,9.503],[0.304,9.521],[0.241,9.523],[0.239,9.574],[0.382,9.587],[0.36,9.626],[0.293,9.594],[0.267,9.664],[0.283,9.69],[0.323,9.649],[0.348,9.669],[0.348,9.716],[0.321,9.728],[0.364,10.033],[0.413,10.02],[0.414,10.064],[0.353,10.094],[0.396,10.311],[0.33,10.304],[0.295,10.415],[0.188,10.41],[0.129,10.531],[-0.059,10.635],[-0.091,10.715],[-0.073,10.718],[-0.072,10.768],[-0.023,10.819],[-0.027,10.878],[-0.009,10.916],[-0.006,10.964],[0.034,10.981],[0.024,11.062],[0.003,11.083],[-0.005,11.108],[-0.028,11.112],[-0.057,11.086],[-0.145,11.108],[-0.135,11.141]]]]}},{"type":"Feature","properties":{"code":"GI","name":"Gibraltar","country":"United Kingdom"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-5.341,36.037],[-5.278,36.149],[-5.338,36.153],[-5.345,36.155],[-5.405,36.155],[-5.341,36.037]]]]}},{"type":"Feature","properties":{"code":"GR","name":"Greece"},"geometry":{"type":"MultiPolygon","coordinates":[[[[26.035,40.731],[26.075,40.728],[26.086,40.732],[26.125,40.743],[26.129,40.773],[26.157,40.807],[26.214,40.833],[26.209,40.86],[26.262,40.917],[26.294,40.891],[26.286,40.93],[26.323,40.94],[26.359,40.943],[26.333,40.984],[26.361,41.02],[26.319,41.074],[26.323,41.249],[26.399,41.251],[26.521,41.34],[26.584,41.321],[26.63,41.346],[26.618,41.423],[26.597,41.481],[26.592,41.605],[26.521,41.626],[26.48,41.67],[26.36,41.711],[26.303,41.709],[26.265,41.715],[26.229,41.741],[26.213,41.732],[26.168,41.749],[26.061,41.703],[26.071,41.646],[26.151,41.608],[26.143,41.555],[26.18,41.554],[26.176,41.501],[26.148,41.475],[26.203,41.439],[26.165,41.423],[26.129,41.359],[25.879,41.305],[25.827,41.346],[25.705,41.292],[25.662,41.313],[25.61,41.306],[25.551,41.317],[25.524,41.28],[25.482,41.285],[25.283,41.234],[25.116,41.342],[24.942,41.387],[24.909,41.409],[24.861,41.393],[24.825,41.404],[24.804,41.349],[24.715,41.419],[24.611,41.423],[24.526,41.568],[24.305,41.513],[24.271,41.577],[24.181,41.517],[24.101,41.548],[24.063,41.532],[24.069,41.461],[23.97,41.441],[23.915,41.48],[23.896,41.453],[23.801,41.439],[23.765,41.402],[23.676,41.411],[23.632,41.376],[23.525,41.403],[23.404,41.4],[23.336,41.363],[23.313,41.405],[23.228,41.371],[23.22,41.338],[23.183,41.318],[22.933,41.341],[22.812,41.34],[22.764,41.322],[22.745,41.163],[22.713,41.139],[22.653,41.182],[22.629,41.144],[22.583,41.116],[22.555,41.131],[22.423,41.119],[22.267,41.164],[22.176,41.16],[22.142,41.124],[22.065,41.156],[21.909,41.092],[21.911,41.048],[21.756,40.925],[21.696,40.943],[21.574,40.861],[21.53,40.908],[21.416,40.917],[21.356,40.876],[21.258,40.862],[21.211,40.886],[21.153,40.855],[20.979,40.855],[20.984,40.791],[20.958,40.77],[20.981,40.76],[21.058,40.666],[21.039,40.563],[20.969,40.515],[20.949,40.466],[20.837,40.479],[20.791,40.427],[20.782,40.358],[20.718,40.277],[20.672,40.094],[20.626,40.09],[20.611,40.079],[20.556,40.065],[20.513,40.082],[20.485,40.063],[20.424,40.068],[20.379,39.991],[20.311,39.994],[20.415,39.828],[20.415,39.814],[20.386,39.785],[20.308,39.816],[20.292,39.804],[20.32,39.728],[20.274,39.699],[20.227,39.675],[20.224,39.645],[20.16,39.652],[20.13,39.658],[20.052,39.691],[20.01,39.692],[19.98,39.65],[19.925,39.695],[19.976,39.787],[19.655,39.959],[19.284,39.876],[20.399,37.544],[24.417,34.253],[29.699,36.089],[29.618,36.142],[29.61,36.173],[29.482,36.184],[29.308,36.01],[28.237,36.568],[27.95,36.462],[27.895,36.699],[27.461,36.538],[27.246,36.716],[27.456,36.901],[27.203,36.946],[27.148,37.32],[26.956,37.65],[26.994,37.69],[27.164,37.723],[27.055,37.913],[26.211,38.176],[26.242,38.447],[26.322,38.487],[26.211,38.654],[26.618,38.814],[26.708,39.031],[26.434,39.431],[25.943,39.394],[25.613,40.172],[26.043,40.396],[25.948,40.728],[26.035,40.731]]]]}},{"type":"Feature","properties":{"code":"GL","name":"Greenland"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-59.776,82.6],[-68.218,80.486],[-77.53,77.234],[-46.376,57.325],[-21.369,68.794],[-7.133,81.491],[-30.674,84.241],[-59.776,82.6]]]]}},{"type":"Feature","properties":{"code":"GD","name":"Grenada"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-62.64,12.7],[-61.779,11.365],[-59.941,12.34],[-62.64,12.7]]]]}},{"type":"Feature","properties":{"code":"GP","name":"Guadeloupe","country":"France"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-60.032,16.113],[-61.603,16.731],[-63.005,15.262],[-60.032,16.113]]]]}},{"type":"Feature","properties":{"code":"GU","name":"Guam","country":"United States"},"geometry":{"type":"MultiPolygon","coordinates":[[[[146.259,13.859],[143.825,13.923],[144.616,12.825],[146.259,13.859]]]]}},{"type":"Feature","properties":{"code":"GT","name":"Guatemala"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-89.15,17.816],[-90.987,17.817],[-90.992,17.252],[-91.438,17.254],[-91.044,16.922],[-90.691,16.707],[-90.612,16.498],[-90.405,16.405],[-90.446,16.076],[-91.732,16.074],[-92.21,15.261],[-92.062,15.074],[-92.145,14.981],[-92.142,14.886],[-92.182,14.841],[-92.145,14.68],[-92.226,14.534],[-92.372,14.393],[-90.553,12.887],[-90.113,13.737],[-90.105,13.851],[-89.889,14.04],[-89.818,14.071],[-89.761,14.029],[-89.733,14.041],[-89.756,14.071],[-89.708,14.154],[-89.618,14.219],[-89.524,14.226],[-89.506,14.261],[-89.588,14.332],[-89.574,14.416],[-89.39,14.446],[-89.348,14.43],[-89.352,14.476],[-89.237,14.58],[-89.157,14.578],[-89.131,14.716],[-89.235,14.856],[-89.151,14.978],[-89.18,15],[-89.151,15.074],[-88.973,15.14],[-88.325,15.637],[-88.315,15.669],[-88.24,15.692],[-88.226,15.723],[-88.204,16.039],[-88.408,16.096],[-88.954,15.887],[-89.024,15.906],[-89.174,15.909],[-89.227,15.886],[-89.15,17.048],[-89.15,17.816]]]]}},{"type":"Feature","properties":{"code":"GG","name":"Guernsey","country":"United Kingdom"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-2.388,49.537],[-2.747,49.505],[-2.656,49.361],[-2.284,49.39],[-2.388,49.537]]]]}},{"type":"Feature","properties":{"code":"GN","name":"Guinea"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-11.375,12.408],[-11.463,12.446],[-11.913,12.42],[-12.354,12.328],[-12.873,12.519],[-13.066,12.493],[-13.053,12.64],[-13.705,12.68],[-13.704,12.603],[-13.651,12.495],[-13.642,12.428],[-13.709,12.25],[-13.927,12.241],[-13.946,12.169],[-13.704,12.009],[-13.704,11.702],[-14.098,11.636],[-14.266,11.675],[-14.315,11.607],[-14.512,11.497],[-14.667,11.512],[-14.778,11.363],[-14.96,10.992],[-15.072,10.896],[-15.967,10.162],[-14.362,8.641],[-13.299,9.042],[-13.186,9.092],[-13.09,9.041],[-12.941,9.263],[-12.768,9.313],[-12.473,9.868],[-12.243,9.924],[-12.126,9.872],[-11.91,9.939],[-11.896,9.998],[-11.212,10.001],[-10.653,9.299],[-10.745,9.08],[-10.578,9.064],[-10.562,8.812],[-10.477,8.677],[-10.614,8.531],[-10.706,8.292],[-10.639,8.353],[-10.549,8.312],[-10.373,8.489],[-10.276,8.487],[-10.203,8.48],[-10.146,8.527],[-10.054,8.507],[-10.059,8.426],[-9.778,8.546],[-9.474,8.352],[-9.509,8.185],[-9.414,8.024],[-9.449,7.928],[-9.357,7.741],[-9.375,7.62],[-9.482,7.371],[-9.419,7.418],[-9.305,7.421],[-9.208,7.381],[-9.183,7.305],[-9.091,7.199],[-8.934,7.282],[-8.857,7.26],[-8.845,7.351],[-8.728,7.514],[-8.678,7.694],[-8.559,7.702],[-8.559,7.625],[-8.471,7.557],[-8.4,7.628],[-8.214,7.545],[-8.099,7.786],[-8.134,7.88],[-8.064,8.05],[-7.947,8.009],[-7.999,8.11],[-7.987,8.201],[-8.062,8.161],[-8.241,8.242],[-8.23,8.484],[-7.925,8.507],[-7.657,8.369],[-7.699,8.661],[-7.955,8.811],[-7.925,8.993],[-7.739,9.084],[-7.908,9.205],[-7.851,9.418],[-8.035,9.396],[-8.147,9.551],[-8.094,9.869],[-8.157,9.943],[-8.119,10.046],[-8.012,10.102],[-7.98,10.171],[-7.958,10.27],[-8.102,10.446],[-8.227,10.417],[-8.326,10.693],[-8.267,10.918],[-8.351,11.062],[-8.669,10.994],[-8.401,11.375],[-8.809,11.667],[-8.948,12.348],[-9.137,12.509],[-9.381,12.484],[-9.321,12.29],[-9.639,12.183],[-9.714,12.023],[-10.306,12.246],[-10.719,11.916],[-10.804,12.105],[-10.998,12.246],[-11.241,12.013],[-11.5,12.178],[-11.375,12.408]]]]}},{"type":"Feature","properties":{"code":"GW","name":"Guinea-Bissau"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-14.315,11.607],[-14.266,11.675],[-14.098,11.636],[-13.704,11.702],[-13.704,12.009],[-13.946,12.169],[-13.927,12.241],[-13.709,12.25],[-13.642,12.428],[-13.651,12.495],[-13.704,12.603],[-13.705,12.68],[-15.176,12.685],[-15.673,12.43],[-16.206,12.462],[-16.382,12.364],[-16.706,12.348],[-17.462,11.924],[-15.967,10.162],[-15.072,10.896],[-14.96,10.992],[-14.778,11.363],[-14.667,11.512],[-14.512,11.497],[-14.315,11.607]]]]}},{"type":"Feature","properties":{"code":"GY","name":"Guyana"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-57.061,6.097],[-59.117,8.203],[-59.985,8.53],[-59.856,8.352],[-59.807,8.289],[-59.832,8.233],[-59.971,8.208],[-60.024,8.046],[-60.381,7.83],[-60.52,7.834],[-60.648,7.569],[-60.719,7.558],[-60.598,7.332],[-60.634,7.251],[-60.541,7.148],[-60.441,7.208],[-60.281,7.116],[-60.394,6.948],[-60.549,6.863],[-61.136,6.709],[-61.208,6.582],[-61.151,6.196],[-61.404,5.953],[-60.732,5.209],[-60.324,5.213],[-60.209,5.288],[-59.981,5.071],[-60.042,4.698],[-60.16,4.535],[-59.789,4.456],[-59.694,4.341],[-59.734,4.204],[-59.52,3.92],[-59.869,3.571],[-59.798,3.372],[-59.997,2.923],[-59.912,2.368],[-59.726,2.275],[-59.741,1.876],[-59.256,1.406],[-58.921,1.313],[-58.842,1.177],[-58.536,1.292],[-58.486,1.484],[-58.339,1.58],[-58.019,1.52],[-57.973,1.646],[-57.773,1.733],[-57.557,1.696],[-57.351,1.983],[-57.24,1.958],[-57.091,2.019],[-57.071,1.953],[-56.766,1.895],[-56.47,1.951],[-56.554,2.02],[-56.705,2.03],[-57.359,3.321],[-58.031,3.955],[-57.87,4.894],[-57.374,5.021],[-57.225,5.156],[-57.316,5.337],[-57.061,6.097]]]]}},{"type":"Feature","properties":{"code":"HT","name":"Haiti"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-71.719,18.784],[-71.726,18.878],[-71.778,18.95],[-71.881,18.95],[-71.741,19.044],[-71.711,19.084],[-71.699,19.109],[-71.653,19.118],[-71.626,19.212],[-71.732,19.267],[-71.778,19.338],[-71.694,19.379],[-71.68,19.45],[-71.713,19.534],[-71.714,19.554],[-71.743,19.584],[-71.759,19.702],[-71.774,19.731],[-72.389,20.271],[-73.373,20.432],[-74.729,18.71],[-74.765,18.063],[-72.295,17.48],[-71.757,18.035],[-71.738,18.072],[-71.75,18.111],[-71.755,18.144],[-71.783,18.183],[-71.7,18.341],[-71.909,18.458],[-71.881,18.501],[-72.002,18.623],[-71.954,18.649],[-71.826,18.626],[-71.719,18.784]]]]}},{"type":"Feature","properties":{"code":"US","name":"Hawaii","country":"United States"},"geometry":{"type":"Polygon","coordinates":[[[-156.692505,20.463043],[-159.927979,22.004175],[-159.559937,22.334833],[-157.928467,21.739091],[-155.923462,20.833144],[-154.703979,19.497664],[-155.621338,18.859509],[-156.016846,19.051734],[-156.692505,20.463043]]]}},{"type":"Feature","properties":{"code":"HM","name":"Heard Island and McDonald Islands","country":"Australia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[71.087,-53.877],[75.442,-53.998],[72.87,-51.483],[71.087,-53.877]]]]}},{"type":"Feature","properties":{"code":"HN","name":"Honduras"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-83.861,17.737],[-88.204,16.039],[-88.226,15.723],[-88.24,15.692],[-88.315,15.669],[-88.325,15.637],[-88.973,15.14],[-89.151,15.074],[-89.18,15],[-89.151,14.978],[-89.235,14.856],[-89.131,14.716],[-89.157,14.578],[-89.237,14.58],[-89.352,14.476],[-89.348,14.43],[-89.042,14.336],[-88.946,14.202],[-88.858,14.178],[-88.815,14.117],[-88.732,14.109],[-88.707,14.043],[-88.497,13.972],[-88.49,13.865],[-88.258,13.911],[-88.23,13.999],[-88.076,13.984],[-88.003,13.869],[-87.797,13.914],[-87.688,13.808],[-87.731,13.754],[-87.781,13.529],[-87.717,13.506],[-87.721,13.461],[-87.738,13.442],[-87.774,13.458],[-87.835,13.447],[-87.847,13.411],[-87.802,13.357],[-87.737,13.327],[-87.698,13.252],[-87.551,13.125],[-87.371,12.986],[-87.063,13.009],[-87.038,12.987],[-86.932,13.053],[-86.934,13.187],[-86.871,13.306],[-86.713,13.303],[-86.768,13.796],[-86.352,13.772],[-86.148,14.043],[-86.007,14.085],[-86.035,13.992],[-85.755,13.85],[-85.74,13.97],[-85.458,14.113],[-85.321,14.256],[-85.186,14.249],[-85.157,14.539],[-84.901,14.805],[-84.826,14.822],[-84.701,14.681],[-84.484,14.632],[-84.106,14.764],[-83.896,14.767],[-83.621,14.894],[-83.493,15.012],[-83.137,15],[-83.048,15.033],[-82.07,14.494],[-81.587,18.003],[-83.861,17.737]]]]}},{"type":"Feature","properties":{"code":"HK","name":"Hong Kong"},"geometry":{"type":"MultiPolygon","coordinates":[[[[113.922,22.139],[114.501,22.15],[114.45,22.56],[114.252,22.56],[114.229,22.544],[114.222,22.553],[114.207,22.557],[114.183,22.554],[114.172,22.559],[114.16,22.56],[114.151,22.552],[114.148,22.541],[114.138,22.543],[114.127,22.54],[114.117,22.534],[114.112,22.529],[114.103,22.535],[114.097,22.534],[114.09,22.537],[114.086,22.533],[114.078,22.53],[114.073,22.519],[114.063,22.516],[114.057,22.511],[114.054,22.503],[114.031,22.506],[113.868,22.43],[113.816,22.216],[113.833,22.183],[113.922,22.139]]]]}},{"type":"Feature","properties":{"code":"HU","name":"Hungary"},"geometry":{"type":"MultiPolygon","coordinates":[[[[21.725,48.346],[21.671,48.399],[21.607,48.504],[21.441,48.585],[21.115,48.495],[20.832,48.582],[20.521,48.533],[20.299,48.261],[20.243,48.278],[19.925,48.128],[19.633,48.25],[19.525,48.198],[19.48,48.094],[19.282,48.083],[19.239,48.059],[19.02,48.071],[18.822,48.042],[18.761,47.975],[18.768,47.875],[18.851,47.823],[18.741,47.816],[18.665,47.768],[18.565,47.766],[18.293,47.735],[18.029,47.757],[17.712,47.755],[17.237,48.021],[17.16,48.006],[17.098,47.973],[17.11,47.925],[17.083,47.877],[17.01,47.862],[17.07,47.811],[17.05,47.794],[17.089,47.709],[16.875,47.689],[16.865,47.723],[16.829,47.684],[16.751,47.679],[16.721,47.735],[16.657,47.742],[16.612,47.762],[16.548,47.751],[16.535,47.738],[16.551,47.723],[16.422,47.665],[16.587,47.618],[16.642,47.631],[16.711,47.527],[16.648,47.502],[16.672,47.461],[16.572,47.409],[16.524,47.41],[16.499,47.394],[16.451,47.412],[16.478,47.259],[16.441,47.251],[16.437,47.211],[16.417,47.206],[16.428,47.184],[16.452,47.188],[16.464,47.168],[16.449,47.144],[16.529,47.14],[16.461,47.094],[16.522,47.057],[16.439,47.035],[16.514,47.001],[16.282,47.002],[16.276,46.964],[16.224,46.939],[16.199,46.941],[16.11,46.867],[16.144,46.855],[16.157,46.854],[16.219,46.87],[16.236,46.878],[16.294,46.871],[16.345,46.838],[16.341,46.806],[16.313,46.798],[16.31,46.779],[16.378,46.7],[16.426,46.692],[16.419,46.662],[16.386,46.655],[16.392,46.637],[16.501,46.567],[16.529,46.533],[16.526,46.505],[16.595,46.475],[16.664,46.452],[16.715,46.395],[16.854,46.363],[16.89,46.281],[17.146,46.167],[17.357,45.952],[17.568,45.937],[17.665,45.842],[17.874,45.785],[17.998,45.797],[18.089,45.765],[18.124,45.789],[18.444,45.74],[18.575,45.808],[18.679,45.921],[18.802,45.88],[18.814,45.913],[18.997,45.935],[19.013,45.965],[19.079,45.965],[19.104,46.04],[19.145,46],[19.288,45.997],[19.525,46.117],[19.561,46.168],[19.66,46.19],[19.815,46.131],[19.935,46.176],[20.018,46.177],[20.035,46.145],[20.097,46.173],[20.261,46.123],[20.283,46.144],[20.356,46.166],[20.454,46.144],[20.497,46.187],[20.639,46.127],[20.761,46.21],[20.746,46.255],[20.868,46.289],[21.066,46.249],[21.169,46.301],[21.281,46.449],[21.269,46.499],[21.332,46.63],[21.439,46.651],[21.515,46.721],[21.489,46.758],[21.52,46.841],[21.593,46.869],[21.596,46.916],[21.686,46.996],[21.648,47.039],[21.784,47.111],[21.945,47.38],[22.011,47.378],[22.034,47.425],[22.009,47.505],[22.318,47.761],[22.42,47.739],[22.466,47.766],[22.672,47.787],[22.766,47.842],[22.78,47.872],[22.898,47.959],[22.843,47.986],[22.878,48.047],[22.818,48.114],[22.734,48.12],[22.668,48.092],[22.587,48.108],[22.59,48.151],[22.498,48.252],[22.381,48.237],[22.208,48.425],[22.147,48.401],[21.833,48.362],[21.828,48.333],[21.725,48.346]]]]}},{"type":"Feature","properties":{"code":"IS","name":"Iceland"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-23.643,62.995],[-12.997,63.5],[-13.052,66.775],[-25.642,66.526],[-23.643,62.995]]]]}},{"type":"Feature","properties":{"code":"IN","name":"India"},"geometry":{"type":"MultiPolygon","coordinates":[[[[89.08,21.419],[89.071,22.153],[88.937,22.585],[88.946,22.669],[88.915,22.752],[88.967,22.833],[88.871,22.952],[88.883,23.039],[88.864,23.088],[88.991,23.211],[88.711,23.249],[88.793,23.46],[88.794,23.505],[88.748,23.474],[88.565,23.64],[88.581,23.871],[88.662,23.876],[88.737,23.918],[88.698,24.147],[88.748,24.196],[88.688,24.315],[88.509,24.325],[88.123,24.513],[88.088,24.632],[88.007,24.665],[88.155,24.858],[88.14,24.935],[88.218,24.966],[88.273,24.888],[88.339,24.868],[88.463,25.075],[88.448,25.201],[88.941,25.185],[89.005,25.266],[89.011,25.303],[88.853,25.347],[88.813,25.515],[88.677,25.47],[88.456,25.592],[88.451,25.662],[88.242,25.808],[88.131,25.788],[88.088,25.913],[88.166,26.024],[88.184,26.144],[88.348,26.222],[88.352,26.291],[88.516,26.359],[88.487,26.459],[88.369,26.487],[88.352,26.452],[88.331,26.489],[88.412,26.638],[88.43,26.545],[88.621,26.468],[88.695,26.384],[88.678,26.263],[88.79,26.311],[88.85,26.232],[89.053,26.247],[88.913,26.38],[88.924,26.407],[88.956,26.456],[89.089,26.388],[89.159,26.137],[89.36,26.008],[89.535,26.004],[89.571,25.968],[89.64,26.226],[89.702,26.151],[89.736,26.158],[89.779,26.084],[89.777,26.043],[89.866,25.931],[89.806,25.825],[89.844,25.7],[89.861,25.617],[89.812,25.372],[89.841,25.319],[89.834,25.295],[89.876,25.283],[89.905,25.31],[90.115,25.227],[90.4,25.153],[90.65,25.178],[90.874,25.158],[91.255,25.207],[91.636,25.128],[92.032,25.183],[92.34,25.076],[92.391,25.015],[92.499,24.888],[92.386,24.861],[92.259,24.919],[92.158,24.544],[92.117,24.39],[91.966,24.38],[91.893,24.147],[91.826,24.223],[91.76,24.238],[91.733,24.147],[91.653,24.221],[91.638,24.113],[91.555,24.087],[91.374,24.107],[91.357,23.991],[91.296,24.004],[91.223,23.896],[91.252,23.835],[91.156,23.66],[91.283,23.375],[91.365,23.066],[91.408,23.071],[91.403,23.275],[91.466,23.233],[91.55,23.011],[91.616,22.939],[91.732,23],[91.816,23.08],[91.764,23.266],[91.848,23.422],[91.956,23.474],[91.951,23.733],[92.047,23.642],[92.154,23.734],[92.265,23.704],[92.382,23.287],[92.377,22.944],[92.518,22.714],[92.6,22.152],[92.566,22.136],[92.609,21.976],[92.675,22.035],[92.704,22.16],[92.862,22.055],[92.895,21.951],[92.939,22.027],[92.998,21.99],[92.993,22.06],[93.049,22.206],[93.157,22.187],[93.142,22.245],[93.2,22.254],[93.182,22.437],[93.135,22.459],[93.115,22.544],[93.134,22.596],[93.094,22.695],[93.134,22.925],[93.13,23.058],[93.288,23.005],[93.385,23.137],[93.369,23.354],[93.388,23.361],[93.4,23.388],[93.388,23.473],[93.435,23.683],[93.391,23.762],[93.391,23.929],[93.361,23.932],[93.324,24.045],[93.347,24.102],[93.414,24.079],[93.466,23.971],[93.506,23.944],[93.629,24.009],[93.76,24],[93.803,23.925],[93.921,23.958],[94.141,23.833],[94.302,24.238],[94.324,24.277],[94.453,24.567],[94.507,24.593],[94.553,24.708],[94.602,24.709],[94.739,25.005],[94.742,25.136],[94.575,25.203],[94.68,25.47],[94.801,25.494],[95.186,26.073],[95.114,26.102],[95.128,26.384],[95.058,26.454],[95.235,26.685],[95.303,26.654],[95.437,26.708],[95.816,27.013],[95.93,27.041],[96.049,27.194],[96.156,27.246],[96.408,27.298],[96.558,27.299],[96.739,27.366],[96.884,27.25],[96.853,27.206],[96.891,27.175],[97.147,27.09],[97.174,27.141],[96.914,27.458],[96.901,27.621],[97.299,27.922],[97.358,27.873],[97.388,28.013],[97.354,28.067],[97.313,28.068],[97.345,28.214],[97.129,28.362],[96.989,28.326],[96.884,28.395],[96.856,28.488],[96.645,28.617],[96.489,28.43],[96.409,28.515],[96.614,28.727],[96.363,29.106],[96.205,29.023],[96.187,29.111],[96.313,29.186],[96.054,29.382],[95.849,29.315],[95.751,29.321],[95.721,29.208],[95.508,29.135],[95.411,29.13],[95.304,29.138],[95.261,29.077],[95.221,29.107],[95.113,29.095],[95.098,29.144],[94.814,29.178],[94.693,29.317],[94.275,29.117],[94.359,29.02],[93.728,28.688],[93.446,28.672],[93.181,28.503],[93.146,28.37],[92.931,28.257],[92.675,28.15],[92.655,28.076],[92.73,28.058],[92.728,27.987],[92.425,27.801],[92.321,27.794],[92.274,27.891],[91.871,27.72],[91.847,27.763],[91.647,27.764],[91.558,27.614],[91.65,27.483],[92.011,27.474],[92.12,27.278],[92.047,27.269],[92.035,27.073],[92.119,26.893],[92.055,26.869],[91.832,26.873],[91.501,26.792],[90.677,26.772],[90.485,26.859],[90.393,26.907],[90.304,26.851],[90.045,26.724],[89.861,26.733],[89.634,26.744],[89.423,26.837],[89.39,26.842],[89.383,26.86],[89.379,26.862],[89.193,26.813],[89.128,26.817],[89.096,26.891],[88.958,26.927],[88.923,26.993],[88.871,26.975],[88.87,27.109],[88.742,27.144],[88.919,27.325],[88.83,27.388],[88.775,27.454],[88.881,27.852],[88.836,28.019],[88.632,28.124],[88.549,28.061],[88.253,27.948],[88.128,27.954],[88.134,27.88],[88.197,27.851],[88.191,27.793],[88.04,27.492],[88.073,27.43],[88.016,27.216],[88.016,27.214],[87.989,27.11],[88.117,26.988],[88.134,26.987],[88.123,26.953],[88.191,26.755],[88.166,26.682],[88.165,26.641],[88.1,26.542],[88.094,26.437],[88.009,26.36],[87.901,26.449],[87.891,26.486],[87.842,26.437],[87.792,26.467],[87.76,26.407],[87.679,26.435],[87.668,26.403],[87.592,26.383],[87.553,26.406],[87.516,26.431],[87.466,26.441],[87.373,26.408],[87.346,26.348],[87.266,26.373],[87.266,26.406],[87.247,26.414],[87.189,26.406],[87.148,26.405],[87.091,26.45],[87.071,26.586],[87.047,26.587],[87.016,26.532],[86.959,26.521],[86.945,26.521],[86.829,26.439],[86.768,26.459],[86.74,26.424],[86.691,26.452],[86.627,26.469],[86.613,26.487],[86.571,26.498],[86.543,26.538],[86.497,26.542],[86.316,26.619],[86.262,26.619],[86.225,26.589],[86.136,26.607],[86.027,26.668],[85.849,26.567],[85.851,26.609],[85.831,26.611],[85.769,26.631],[85.723,26.675],[85.735,26.796],[85.662,26.848],[85.616,26.867],[85.595,26.852],[85.576,26.86],[85.565,26.841],[85.478,26.793],[85.343,26.75],[85.212,26.759],[85.18,26.805],[85.193,26.869],[85.159,26.87],[85.026,26.854],[85.056,26.89],[85.005,26.895],[84.972,26.915],[84.967,26.956],[84.858,26.99],[84.829,27.02],[84.793,26.997],[84.645,27.047],[84.692,27.213],[84.622,27.339],[84.293,27.39],[84.257,27.449],[84.214,27.452],[84.108,27.524],[84.022,27.438],[83.933,27.449],[83.862,27.424],[83.856,27.358],[83.613,27.47],[83.395,27.48],[83.389,27.393],[83.351,27.339],[83.3,27.328],[83.267,27.362],[83.272,27.383],[83.194,27.456],[82.949,27.46],[82.933,27.503],[82.741,27.498],[82.704,27.721],[82.464,27.672],[82.066,27.922],[81.972,27.933],[81.912,27.85],[81.479,28.083],[81.482,28.121],[81.387,28.176],[81.329,28.135],[81.198,28.363],[81.035,28.401],[80.551,28.692],[80.506,28.671],[80.524,28.549],[80.445,28.631],[80.372,28.634],[80.121,28.823],[80.07,28.828],[80.057,28.915],[80.181,29.136],[80.232,29.116],[80.266,29.139],[80.241,29.214],[80.286,29.203],[80.314,29.308],[80.243,29.443],[80.379,29.571],[80.419,29.636],[80.384,29.685],[80.368,29.739],[80.416,29.795],[80.435,29.805],[80.49,29.796],[80.562,29.867],[80.572,29.914],[80.602,29.957],[80.671,29.957],[80.878,30.134],[80.867,30.173],[80.911,30.222],[80.925,30.172],[81.04,30.201],[80.833,30.32],[80.545,30.449],[80.207,30.585],[79.933,30.883],[79.599,30.939],[79.307,31.174],[79.14,31.434],[79.019,31.428],[78.893,31.305],[78.779,31.312],[78.71,31.502],[78.845,31.606],[78.699,31.787],[78.78,31.995],[78.744,32.004],[78.688,32.103],[78.496,32.276],[78.465,32.454],[78.389,32.539],[78.739,32.694],[78.783,32.469],[78.967,32.337],[78.993,32.379],[79.098,32.381],[79.132,32.478],[79.268,32.533],[79.466,32.697],[79.14,33.025],[79.153,33.172],[78.736,33.565],[78.676,33.664],[78.773,33.739],[78.734,34.011],[78.657,34.032],[78.662,34.089],[78.918,34.155],[78.998,34.303],[79.054,34.325],[78.745,34.452],[78.565,34.508],[78.55,34.573],[78.278,34.615],[78.184,34.8],[78.227,34.888],[78,35.24],[78.035,35.379],[78.117,35.48],[77.805,35.521],[77.702,35.462],[77.443,35.461],[76.966,35.593],[76.845,35.674],[76.773,35.661],[76.755,35.526],[76.851,35.398],[76.935,35.399],[77.118,35.054],[76.993,34.933],[76.872,34.969],[76.745,34.925],[76.744,34.84],[76.676,34.764],[76.472,34.79],[76.155,34.643],[76.046,34.676],[75.754,34.518],[75.38,34.55],[75.015,34.646],[74.666,34.703],[74.581,34.774],[74.312,34.796],[74.129,34.701],[73.964,34.682],[73.934,34.634],[73.94,34.572],[73.894,34.546],[73.887,34.489],[73.75,34.378],[73.749,34.342],[73.847,34.329],[73.905,34.353],[73.982,34.252],[73.907,34.105],[73.887,34.051],[73.913,34.012],[74.216,34.039],[74.253,34.016],[74.261,33.922],[74.14,33.83],[74.059,33.821],[74.009,33.754],[73.964,33.731],[73.99,33.662],[73.974,33.641],[74.036,33.567],[74.101,33.564],[74.181,33.474],[74.18,33.368],[74.088,33.262],[74.014,33.252],[74.021,33.189],[74.154,33.135],[74.176,33.075],[74.319,33.029],[74.349,32.978],[74.312,32.928],[74.415,32.906],[74.453,32.778],[74.629,32.756],[74.647,32.826],[74.711,32.842],[74.653,32.712],[74.695,32.668],[74.644,32.61],[74.653,32.564],[74.674,32.567],[74.684,32.493],[74.847,32.491],[74.976,32.454],[75.033,32.495],[75.283,32.366],[75.38,32.268],[75.256,32.102],[75.008,32.038],[74.927,32.066],[74.862,32.045],[74.799,31.96],[74.589,31.878],[74.478,31.722],[74.575,31.604],[74.615,31.557],[74.593,31.502],[74.647,31.456],[74.598,31.414],[74.532,31.303],[74.516,31.138],[74.56,31.083],[74.603,31.104],[74.6,31.137],[74.685,31.128],[74.68,31.055],[74.562,31.042],[73.89,30.363],[73.957,30.285],[73.972,30.198],[73.803,30.07],[73.587,30.018],[73.396,29.947],[73.281,29.566],[73.059,29.188],[73.013,29.164],[72.943,29.025],[72.404,28.783],[72.295,28.664],[72.203,28.387],[71.924,28.116],[71.899,27.96],[70.791,27.684],[70.609,28.022],[70.373,28.012],[70.125,27.806],[70.031,27.566],[69.585,27.181],[69.509,26.749],[69.886,26.568],[70.056,26.604],[70.175,26.554],[70.175,26.241],[70.082,26.081],[70.099,25.932],[70.269,25.712],[70.374,25.674],[70.536,25.689],[70.604,25.719],[70.674,25.682],[70.667,25.393],[70.891,25.151],[70.94,24.928],[71.094,24.69],[70.976,24.609],[71.003,24.46],[71.128,24.427],[71.045,24.347],[70.95,24.379],[70.858,24.309],[70.884,24.274],[70.715,24.235],[70.579,24.278],[70.567,24.438],[70.117,24.309],[70.034,24.172],[69.733,24.17],[69.596,24.298],[69.298,24.287],[69.193,24.256],[69.078,24.298],[68.978,24.26],[68.909,24.332],[68.742,24.319],[68.746,23.97],[68.393,23.968],[68.208,23.858],[68.113,23.539],[72.85,8.124],[77.596,7.967],[79.497,9.12],[79.443,9.568],[89.08,21.419]]]]}},{"type":"Feature","properties":{"code":"IR","name":"Iran"},"geometry":{"type":"MultiPolygon","coordinates":[[[[44.967,39.43],[44.889,39.597],[44.81,39.627],[44.718,39.711],[44.654,39.722],[44.614,39.784],[44.473,39.688],[44.481,39.616],[44.418,39.567],[44.428,39.413],[44.379,39.413],[44.298,39.378],[44.225,39.417],[44.037,39.392],[44.104,39.198],[44.209,39.14],[44.189,38.939],[44.303,38.816],[44.262,38.714],[44.281,38.647],[44.321,38.628],[44.321,38.498],[44.312,38.379],[44.383,38.361],[44.444,38.383],[44.501,38.339],[44.425,38.258],[44.225,37.889],[44.388,37.854],[44.459,37.771],[44.555,37.783],[44.621,37.72],[44.569,37.643],[44.614,37.602],[44.584,37.45],[44.81,37.291],[44.76,37.215],[44.787,37.166],[44.783,37.143],[44.752,37.12],[44.816,37.044],[44.899,37.019],[44.912,36.915],[44.902,36.861],[44.835,36.814],[44.847,36.776],[45.015,36.751],[45.07,36.681],[45.07,36.626],[45.008,36.54],[45.118,36.408],[45.24,36.433],[45.274,36.358],[45.263,36.3],[45.3,36.278],[45.322,36.174],[45.373,36.099],[45.377,36.062],[45.339,35.994],[45.383,35.972],[45.466,36],[45.552,35.999],[45.6,35.961],[45.664,35.929],[45.761,35.799],[45.814,35.821],[45.898,35.837],[45.947,35.822],[46.083,35.858],[46.172,35.801],[46.329,35.827],[46.342,35.784],[46.237,35.714],[46.016,35.691],[46.012,35.651],[45.995,35.636],[46.017,35.615],[46.013,35.598],[46.03,35.574],[45.976,35.581],[46.015,35.52],[45.985,35.498],[46.054,35.386],[46.132,35.325],[46.155,35.288],[46.114,35.237],[46.185,35.226],[46.197,35.185],[46.162,35.17],[46.156,35.127],[46.191,35.111],[46.118,35.076],[46.077,35.084],[46.065,35.037],[45.948,35.092],[45.931,35.081],[45.922,35.095],[45.922,35.047],[45.879,35.034],[45.895,34.958],[45.865,34.899],[45.789,34.911],[45.797,34.851],[45.736,34.84],[45.7,34.823],[45.683,34.766],[45.657,34.722],[45.7,34.693],[45.739,34.544],[45.602,34.551],[45.591,34.556],[45.532,34.604],[45.519,34.477],[45.439,34.459],[45.467,34.382],[45.492,34.344],[45.536,34.351],[45.587,34.301],[45.562,34.151],[45.473,34.031],[45.411,33.974],[45.428,33.946],[45.503,33.95],[45.778,33.609],[45.898,33.637],[45.962,33.558],[45.867,33.493],[45.999,33.508],[46.206,33.204],[46.119,33.119],[46.054,33.131],[46.04,33.096],[46.152,33.072],[46.091,32.984],[46.172,32.956],[46.323,32.973],[46.468,32.92],[47.172,32.454],[47.375,32.478],[47.571,32.206],[47.525,32.16],[47.648,32.077],[47.863,31.784],[47.68,31.391],[47.682,31],[48.032,30.997],[48.024,30.479],[48.146,30.441],[48.183,30.397],[48.194,30.328],[48.213,30.316],[48.244,30.338],[48.264,30.341],[48.411,30.198],[48.417,30.173],[48.387,30.135],[48.389,30.111],[48.434,30.082],[48.449,30.045],[48.448,30.001],[48.51,29.962],[48.614,29.937],[48.839,29.786],[49.989,27.878],[50.377,27.892],[54.398,25.684],[55.141,25.626],[55.818,26.188],[56.264,26.586],[56.69,26.766],[56.792,26.412],[56.826,25.771],[56.863,25.039],[61.467,24.579],[61.643,25.275],[61.683,25.666],[61.84,25.754],[61.838,26.072],[61.894,26.263],[62.051,26.316],[62.213,26.266],[62.315,26.528],[62.774,26.641],[63.189,26.651],[63.187,26.838],[63.25,26.842],[63.25,27.087],[63.323,27.144],[63.196,27.257],[62.806,27.224],[62.797,27.344],[62.849,27.476],[62.764,28.03],[62.794,28.281],[62.595,28.248],[62.403,28.427],[61.936,28.553],[61.66,28.779],[61.538,29.005],[61.315,29.389],[60.872,29.865],[61.808,30.842],[61.783,30.927],[61.834,30.977],[61.833,31.045],[61.81,31.126],[61.806,31.162],[61.709,31.374],[60.845,31.496],[60.862,32.226],[60.565,33.129],[60.889,33.502],[60.911,33.556],[60.696,33.561],[60.578,33.598],[60.548,33.734],[60.584,33.808],[60.502,34.14],[60.665,34.315],[60.913,34.304],[60.723,34.529],[60.999,34.631],[61.002,34.706],[61.069,34.821],[61.128,35.099],[61.099,35.278],[61.182,35.302],[61.274,35.615],[61.227,35.67],[61.262,35.807],[61.224,35.929],[61.12,35.96],[61.227,36.128],[61.139,36.388],[61.182,36.553],[61.145,36.646],[60.348,36.632],[60.008,37.041],[59.747,37.125],[59.552,37.136],[59.394,37.343],[59.398,37.479],[59.335,37.531],[59.229,37.512],[58.934,37.674],[58.692,37.645],[58.548,37.705],[58.478,37.643],[58.4,37.631],[58.23,37.686],[58.214,37.773],[57.795,37.893],[57.35,37.985],[57.372,38.093],[57.212,38.29],[57.035,38.187],[56.739,38.279],[56.623,38.24],[56.433,38.261],[56.325,38.185],[56.333,38.081],[55.978,38.08],[55.766,38.122],[55.442,38.086],[55.134,37.947],[54.851,37.757],[54.777,37.623],[54.818,37.613],[54.778,37.516],[54.672,37.435],[54.587,37.458],[54.362,37.349],[54.246,37.32],[53.897,37.346],[48.883,38.44],[48.85,38.45],[48.811,38.449],[48.79,38.45],[48.7,38.406],[48.622,38.402],[48.588,38.451],[48.451,38.61],[48.315,38.6],[48.248,38.719],[48.026,38.827],[48.014,38.903],[48.077,38.916],[48.086,38.944],[48.284,38.972],[48.339,39.03],[48.312,39.093],[48.154,39.194],[48.124,39.252],[48.16,39.3],[48.374,39.376],[48.343,39.429],[47.99,39.71],[47.848,39.663],[47.501,39.496],[47.39,39.46],[47.313,39.375],[47.059,39.248],[47.058,39.201],[46.953,39.135],[46.925,39.166],[46.838,39.131],[46.758,39.032],[46.535,38.865],[46.341,38.921],[46.206,38.853],[46.148,38.842],[46.068,38.879],[46.002,38.874],[45.946,38.891],[45.903,38.877],[45.839,38.908],[45.652,38.952],[45.615,38.943],[45.613,38.964],[45.45,38.992],[45.448,39.049],[45.405,39.072],[45.401,39.09],[45.305,39.183],[45.162,39.22],[45.088,39.351],[45.059,39.364],[44.967,39.43]]]]}},{"type":"Feature","properties":{"code":"IQ","name":"Iraq"},"geometry":{"type":"MultiPolygon","coordinates":[[[[42.789,37.386],[42.567,37.149],[42.357,37.11],[42.367,37.063],[41.817,36.588],[41.401,36.525],[41.289,36.354],[41.256,36.06],[41.37,35.841],[41.382,35.625],[41.266,35.427],[41.217,35.151],[41.234,34.8],[41.124,34.657],[40.977,34.398],[40.643,34.316],[38.792,33.373],[39.082,32.503],[38.988,32.477],[39.043,32.302],[39.262,32.356],[39.299,32.233],[40.015,32.057],[42.976,30.722],[42.978,30.483],[44.723,29.197],[46.424,29.059],[46.553,29.103],[46.897,29.506],[47.152,30.01],[47.372,30.104],[47.709,30.105],[48.011,29.989],[48.068,30.029],[48.173,30.024],[48.405,29.858],[48.595,29.668],[48.839,29.786],[48.614,29.937],[48.51,29.962],[48.448,30.001],[48.449,30.045],[48.434,30.082],[48.389,30.111],[48.387,30.135],[48.417,30.173],[48.411,30.198],[48.264,30.341],[48.244,30.338],[48.213,30.316],[48.194,30.328],[48.183,30.397],[48.146,30.441],[48.024,30.479],[48.032,30.997],[47.682,31],[47.68,31.391],[47.863,31.784],[47.648,32.077],[47.525,32.16],[47.571,32.206],[47.375,32.478],[47.172,32.454],[46.468,32.92],[46.323,32.973],[46.172,32.956],[46.091,32.984],[46.152,33.072],[46.04,33.096],[46.054,33.131],[46.119,33.119],[46.206,33.204],[45.999,33.508],[45.867,33.493],[45.962,33.558],[45.898,33.637],[45.778,33.609],[45.503,33.95],[45.428,33.946],[45.411,33.974],[45.473,34.031],[45.562,34.151],[45.587,34.301],[45.536,34.351],[45.492,34.344],[45.467,34.382],[45.439,34.459],[45.519,34.477],[45.532,34.604],[45.591,34.556],[45.602,34.551],[45.739,34.544],[45.7,34.693],[45.657,34.722],[45.683,34.766],[45.7,34.823],[45.736,34.84],[45.797,34.851],[45.789,34.911],[45.865,34.899],[45.895,34.958],[45.879,35.034],[45.922,35.047],[45.922,35.095],[45.931,35.081],[45.948,35.092],[46.065,35.037],[46.077,35.084],[46.118,35.076],[46.191,35.111],[46.156,35.127],[46.162,35.17],[46.197,35.185],[46.185,35.226],[46.114,35.237],[46.155,35.288],[46.132,35.325],[46.054,35.386],[45.985,35.498],[46.015,35.52],[45.976,35.581],[46.03,35.574],[46.013,35.598],[46.017,35.615],[45.995,35.636],[46.012,35.651],[46.016,35.691],[46.237,35.714],[46.342,35.784],[46.329,35.827],[46.172,35.801],[46.083,35.858],[45.947,35.822],[45.898,35.837],[45.814,35.821],[45.761,35.799],[45.664,35.929],[45.6,35.961],[45.552,35.999],[45.466,36],[45.383,35.972],[45.339,35.994],[45.377,36.062],[45.373,36.099],[45.322,36.174],[45.3,36.278],[45.263,36.3],[45.274,36.358],[45.24,36.433],[45.118,36.408],[45.008,36.54],[45.07,36.626],[45.07,36.681],[45.015,36.751],[44.847,36.776],[44.835,36.814],[44.902,36.861],[44.912,36.915],[44.899,37.019],[44.816,37.044],[44.752,37.12],[44.783,37.143],[44.767,37.162],[44.632,37.192],[44.426,37.058],[44.381,37.058],[44.353,37.05],[44.359,37.028],[44.306,36.974],[44.26,36.981],[44.185,37.096],[44.222,37.158],[44.28,37.165],[44.261,37.251],[44.135,37.325],[44.02,37.332],[43.909,37.225],[43.849,37.222],[43.827,37.195],[43.805,37.228],[43.701,37.237],[43.631,37.22],[43.567,37.257],[43.508,37.244],[43.335,37.331],[43.301,37.306],[43.114,37.374],[42.937,37.32],[42.789,37.386]]]]}},{"type":"Feature","properties":{"code":"IE","name":"Ireland"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-6.262,54.098],[-6.29,54.113],[-6.327,54.093],[-6.363,54.112],[-6.366,54.072],[-6.478,54.069],[-6.628,54.035],[-6.663,54.067],[-6.638,54.171],[-6.702,54.202],[-6.746,54.188],[-6.816,54.228],[-6.852,54.292],[-6.878,54.347],[-7.02,54.421],[-7.191,54.313],[-7.149,54.227],[-7.25,54.201],[-7.263,54.139],[-7.295,54.12],[-7.297,54.135],[-7.28,54.167],[-7.292,54.172],[-7.34,54.147],[-7.306,54.119],[-7.328,54.115],[-7.446,54.154],[-7.48,54.122],[-7.558,54.122],[-7.695,54.207],[-7.814,54.202],[-7.86,54.218],[-7.871,54.293],[-8.046,54.363],[-8.179,54.468],[-8.045,54.489],[-7.998,54.544],[-7.86,54.537],[-7.703,54.621],[-7.933,54.666],[-7.834,54.739],[-7.75,54.71],[-7.644,54.753],[-7.547,54.746],[-7.545,54.794],[-7.476,54.831],[-7.447,54.87],[-7.444,54.94],[-7.4,54.945],[-7.403,55.004],[-7.345,55.047],[-7.247,55.069],[-6.348,55.492],[-8.55,55.541],[-10.858,54.366],[-10.657,51.055],[-6.262,51.897],[-5.373,53.633],[-6.262,54.098]]]]}},{"type":"Feature","properties":{"code":"IM","name":"Isle of Man","country":"United Kingdom"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-4.695,53.962],[-4.208,54.289],[-4.404,54.463],[-5.017,54.111],[-4.695,53.962]]]]}},{"type":"Feature","properties":{"code":"IL","name":"Israel"},"geometry":{"type":"MultiPolygon","coordinates":[[[[34.293,31.704],[34.487,31.597],[34.568,31.542],[34.489,31.484],[34.401,31.409],[34.365,31.364],[34.374,31.306],[34.365,31.29],[34.294,31.242],[34.267,31.22],[34.923,29.453],[34.977,29.543],[34.982,29.581],[35.021,29.663],[35.141,30.074],[35.192,30.346],[35.162,30.435],[35.196,30.503],[35.214,30.604],[35.293,30.714],[35.335,30.812],[35.34,30.88],[35.414,30.956],[35.437,31.124],[35.403,31.255],[35.477,31.496],[35.397,31.496],[35.229,31.374],[35.13,31.355],[35.025,31.36],[34.926,31.343],[34.889,31.371],[34.878,31.393],[34.898,31.439],[34.933,31.478],[34.944,31.507],[34.941,31.556],[34.952,31.598],[35.009,31.654],[35.082,31.691],[35.108,31.716],[35.119,31.715],[35.129,31.733],[35.139,31.73],[35.151,31.736],[35.155,31.734],[35.165,31.732],[35.18,31.721],[35.205,31.724],[35.219,31.716],[35.224,31.719],[35.24,31.709],[35.243,31.712],[35.244,31.72],[35.25,31.725],[35.252,31.739],[35.263,31.748],[35.252,31.768],[35.261,31.791],[35.256,31.814],[35.264,31.826],[35.251,31.831],[35.258,31.839],[35.248,31.846],[35.23,31.842],[35.225,31.854],[35.228,31.864],[35.226,31.867],[35.223,31.879],[35.22,31.883],[35.214,31.882],[35.213,31.882],[35.21,31.882],[35.209,31.881],[35.208,31.882],[35.207,31.882],[35.204,31.867],[35.211,31.863],[35.216,31.839],[35.215,31.818],[35.195,31.827],[35.182,31.825],[35.186,31.809],[35.142,31.813],[35.077,31.856],[35.056,31.857],[35.02,31.829],[34.972,31.834],[34.997,31.856],[35.035,31.859],[35.04,31.893],[35.035,31.924],[35.001,31.933],[34.987,31.969],[35.003,32.027],[34.986,32.096],[34.994,32.11],[34.985,32.126],[34.99,32.146],[34.96,32.175],[34.957,32.195],[34.989,32.208],[35.018,32.24],[35.029,32.267],[35.011,32.287],[35.018,32.339],[35.042,32.35],[35.051,32.367],[35.042,32.382],[35.053,32.402],[35.054,32.418],[35.071,32.459],[35.086,32.469],[35.092,32.476],[35.1,32.479],[35.109,32.476],[35.159,32.505],[35.224,32.553],[35.25,32.525],[35.293,32.509],[35.307,32.51],[35.352,32.52],[35.402,32.501],[35.42,32.46],[35.416,32.456],[35.41,32.437],[35.421,32.416],[35.558,32.387],[35.555,32.427],[35.575,32.487],[35.566,32.644],[35.598,32.652],[35.617,32.68],[35.665,32.681],[35.685,32.707],[35.76,32.748],[35.787,32.779],[35.838,32.828],[35.84,32.873],[35.87,32.92],[35.893,32.946],[35.872,32.98],[35.848,33.103],[35.819,33.111],[35.819,33.134],[35.843,33.167],[35.838,33.194],[35.816,33.203],[35.813,33.248],[35.775,33.273],[35.813,33.317],[35.775,33.336],[35.62,33.273],[35.623,33.242],[35.585,33.267],[35.583,33.284],[35.565,33.29],[35.556,33.258],[35.545,33.255],[35.548,33.236],[35.536,33.232],[35.542,33.199],[35.526,33.119],[35.503,33.114],[35.503,33.091],[35.448,33.093],[35.431,33.067],[35.352,33.056],[35.314,33.105],[35.192,33.087],[35.106,33.093],[34.785,33.204],[34.293,31.704]]]]}},{"type":"Feature","properties":{"code":"IT","name":"Italy"},"geometry":{"type":"MultiPolygon","coordinates":[[[[8.959,45.965],[8.976,45.962],[8.977,45.983],[8.967,45.984],[8.959,45.965]]],[[[9.33,44.024],[12.406,35.261],[14.354,36.456],[15.271,36.567],[18.839,40.063],[16.153,42.185],[12.838,44.088],[12.618,45.286],[13.456,45.595],[13.608,45.648],[13.72,45.594],[13.746,45.598],[13.784,45.583],[13.841,45.582],[13.868,45.599],[13.87,45.608],[13.919,45.632],[13.879,45.652],[13.834,45.687],[13.833,45.709],[13.823,45.718],[13.67,45.8],[13.598,45.807],[13.589,45.835],[13.576,45.843],[13.586,45.882],[13.596,45.894],[13.609,45.899],[13.619,45.918],[13.638,45.936],[13.633,45.949],[13.643,45.983],[13.635,45.989],[13.621,45.984],[13.589,45.99],[13.568,45.97],[13.53,45.966],[13.501,45.981],[13.475,46.005],[13.497,46.018],[13.51,46.045],[13.496,46.048],[13.501,46.06],[13.571,46.09],[13.641,46.136],[13.665,46.174],[13.645,46.19],[13.567,46.187],[13.561,46.205],[13.476,46.227],[13.422,46.208],[13.377,46.297],[13.448,46.335],[13.434,46.36],[13.47,46.362],[13.576,46.409],[13.576,46.426],[13.598,46.441],[13.687,46.439],[13.715,46.522],[13.641,46.534],[13.276,46.561],[12.944,46.604],[12.6,46.66],[12.387,46.715],[12.276,46.887],[12.201,46.889],[12.117,47.012],[12.218,47.04],[12.193,47.093],[11.748,46.985],[11.507,47.006],[11.334,46.999],[11.106,46.93],[11.008,46.769],[10.73,46.79],[10.758,46.823],[10.664,46.876],[10.548,46.845],[10.472,46.857],[10.387,46.678],[10.405,46.637],[10.447,46.642],[10.494,46.62],[10.461,46.532],[10.253,46.574],[10.237,46.635],[10.103,46.61],[10.037,46.445],[10.165,46.411],[10.105,46.337],[10.179,46.256],[10.144,46.23],[10.071,46.217],[9.952,46.38],[9.731,46.351],[9.713,46.293],[9.57,46.296],[9.461,46.375],[9.459,46.509],[9.405,46.466],[9.361,46.508],[9.281,46.497],[9.255,46.437],[9.292,46.327],[9.245,46.236],[9.016,46.049],[8.993,45.97],[9.091,45.899],[9.066,45.876],[9.045,45.85],[9.041,45.846],[9.035,45.84],[9.038,45.835],[9.033,45.829],[9.03,45.821],[9.003,45.821],[8.997,45.835],[8.962,45.837],[8.947,45.843],[8.911,45.839],[8.935,45.862],[8.944,45.866],[8.936,45.868],[8.889,45.955],[8.867,45.961],[8.851,45.972],[8.832,45.988],[8.794,45.992],[8.786,45.99],[8.794,46.009],[8.856,46.075],[8.808,46.101],[8.757,46.104],[8.622,46.121],[8.45,46.269],[8.463,46.437],[8.425,46.464],[8.306,46.416],[8.312,46.38],[8.088,46.267],[8.169,46.178],[8.114,46.116],[8.029,46.103],[7.989,45.999],[7.905,45.999],[7.859,45.915],[7.563,45.974],[7.107,45.857],[7.042,45.924],[6.953,45.852],[6.808,45.833],[6.808,45.719],[6.989,45.639],[7,45.509],[7.18,45.401],[7.106,45.329],[7.131,45.254],[7.071,45.212],[6.967,45.208],[6.851,45.132],[6.77,45.16],[6.628,45.112],[6.67,45.023],[6.748,45.019],[6.745,44.937],[6.755,44.899],[6.908,44.843],[6.935,44.866],[7.022,44.825],[7.004,44.788],[7.075,44.681],[7.006,44.694],[6.951,44.663],[6.96,44.621],[6.855,44.531],[6.862,44.498],[6.945,44.431],[6.888,44.42],[6.892,44.366],[6.982,44.283],[7.008,44.237],[7.169,44.204],[7.278,44.146],[7.345,44.144],[7.364,44.119],[7.622,44.149],[7.632,44.179],[7.687,44.175],[7.669,44.128],[7.725,44.076],[7.66,44.03],[7.668,43.999],[7.653,43.976],[7.608,43.958],[7.569,43.945],[7.561,43.899],[7.512,43.883],[7.494,43.866],[7.504,43.843],[7.553,43.736],[9.33,44.024]],[[12.452,41.901],[12.448,41.901],[12.446,41.902],[12.448,41.903],[12.45,41.905],[12.451,41.906],[12.455,41.907],[12.456,41.906],[12.458,41.906],[12.458,41.903],[12.458,41.903],[12.458,41.902],[12.458,41.901],[12.457,41.901],[12.456,41.902],[12.454,41.901],[12.454,41.9],[12.452,41.901]],[[12.456,43.894],[12.442,43.905],[12.416,43.9],[12.409,43.902],[12.412,43.91],[12.407,43.924],[12.416,43.93],[12.412,43.938],[12.405,43.943],[12.404,43.955],[12.414,43.953],[12.42,43.958],[12.437,43.957],[12.447,43.966],[12.462,43.975],[12.479,43.981],[12.494,43.985],[12.507,43.991],[12.515,43.991],[12.515,43.985],[12.511,43.982],[12.511,43.972],[12.506,43.971],[12.509,43.962],[12.507,43.958],[12.514,43.949],[12.516,43.941],[12.505,43.93],[12.503,43.924],[12.497,43.922],[12.492,43.918],[12.494,43.91],[12.488,43.897],[12.456,43.894]]]]}},{"type":"Feature","properties":{"code":"JM","name":"Jamaica"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-75.729,17.932],[-77.503,18.802],[-78.709,18.327],[-77.41,17.623],[-75.729,17.932]]]]}},{"type":"Feature","properties":{"code":"NO","name":"Jan Mayen","country":"Norway"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-8.459,71.487],[-9.756,70.671],[-6.844,70.873],[-8.459,71.487]]]]}},{"type":"Feature","properties":{"code":"JP","name":"Japan"},"geometry":{"type":"MultiPolygon","coordinates":[[[[125.30292271377053,24.62062855382798],[124.458618,24.462151],[123.914795,24.061512],[123.75,24.001308],[123.14007658766528,24.384242359669784],[122.810669,24.377121],[122.832642,24.532132],[123.085327,24.567108],[123.52179651600963,24.48159845148605],[124.085083,24.527135],[124.29154000454255,24.706690638590022],[125.19085814765108,24.98063597248669],[125.380096,24.917577],[125.52880285485503,24.709142050973885],[125.30292271377053,24.62062855382798]]],[[[131.114273,25.794018],[131.249886,26.037967],[131.423264,25.985515],[131.289368,25.730014],[131.114273,25.794018]]],[[[142.032108,26.52465],[142.104721,27.228379],[142.326164,27.212045],[142.262821,26.499766],[142.032108,26.52465]]],[[[126.639404,26.327884],[126.650391,26.529565],[127.06886627023104,26.469114357357917],[127.20228384687489,26.665521765483454],[127.5778984877398,26.553720625473538],[127.91297649904664,27.186119163982532],[128.3080040946176,27.345811170702707],[128.737793,27.882784],[129.14708753343686,28.35579307285407],[129.682617,28.714679],[130.094604,28.536275],[130.127563,28.396233],[129.924316,28.125283],[129.42444733458245,28.07002842924953],[129.100342,27.522887],[128.787231,27.264396],[128.463135,26.716174],[128.287354,26.382028],[127.79530870462128,26.002437184346075],[127.19996569711185,26.05987027448229],[126.639404,26.327884]]],[[[129.044037,34.092473],[129.326935,34.772076],[129.60434,34.700977],[129.321442,34.009412],[129.044037,34.092473]]],[[[129.342041,33.431441],[129.539795,33.539105],[129.609833,33.508194],[129.640045,33.448631],[129.72025006252457,33.5160727000208],[129.611206,33.664925],[129.561768,33.83392],[129.71177243893115,33.89172729062637],[129.885864,33.83392],[129.935303,33.683211],[130.089111,33.696923],[130.33871098708093,33.88532080638205],[130.737305,34.061761],[130.731812,34.347971],[130.858154,34.479392],[131.171265,34.479392],[131.363525,34.524661],[131.75354,34.782228],[131.989746,34.935482],[132.209473,35.092945],[132.352295,35.191767],[132.456665,35.398006],[132.808228,35.532226],[132.9676838515283,35.70331324604838],[132.835693,36.08906],[132.91654819497492,36.210950854741576],[133.15979,36.412442],[133.51437050704396,36.41642322016495],[133.4729,36.191092],[133.220215,36.066862],[133.1238800388185,35.85857969412853],[133.13968560538953,35.688437418687414],[133.599243,35.585852],[134.181519,35.657296],[134.631958,35.746512],[135.357056,35.822267],[135.411987,35.657296],[135.752563,35.670685],[135.983276,35.808904],[135.906372,35.986896],[136.054688,36.257563],[136.241455,36.390335],[136.483154,36.602299],[136.609497,37.077093],[136.653442,37.4138],[136.796265,37.540222],[137.37854,37.627284],[137.532349,37.448697],[137.224731,37.199706],[137.131348,36.831272],[137.351074,36.971838],[137.91687,37.169072],[138.339844,37.309014],[138.45003637539935,37.59995218021704],[138.191528,37.72728],[138.14209,37.779399],[138.18956412483442,38.03835327211592],[138.224487,38.195022],[138.317871,38.333039],[138.510132,38.414862],[138.652954,38.285625],[138.6899090915953,37.89932820585692],[138.867188,37.952861],[139.147339,38.108628],[139.268188,38.272689],[139.284668,38.367502],[139.17276333947368,38.397697476804325],[139.185791,38.492294],[139.21875,38.556757],[139.378052,38.453589],[139.520874,38.681222],[139.74641243208114,39.25956572453063],[139.87793,39.516755],[139.87936513911987,39.710489241410095],[139.66366564238575,39.74860854902257],[139.62089763872297,39.99498943968869],[139.68969834026748,40.06007118439294],[139.850464,40.149488],[139.7863912181138,40.30831155347916],[139.729614,40.634799],[139.839478,40.834593],[140.158081,40.975751],[140.114136,41.3397],[139.938354,41.413896],[139.872437,41.599013],[139.927368,41.849105],[139.916382,41.99216],[139.828491,42.122673],[139.696655,42.179688],[139.586792,42.05745],[139.432983,42.000325],[139.334106,42.045213],[139.361572,42.204107],[139.669189,42.455888],[139.822998,42.678397],[140.059204,42.827639],[140.289917,42.912183],[140.377808,43.004647],[140.377808,43.076913],[140.29541,43.165123],[140.267944,43.281204],[140.460205,43.424999],[140.630493,43.333169],[140.93811,43.253205],[141.201782,43.2932],[141.2677,43.377105],[141.278687,43.544567],[141.28418,43.767127],[141.37207,43.866218],[141.509399,43.945372],[141.580811,44.091531],[141.59729,44.370987],[141.448975,44.370987],[141.240234,44.406316],[141.333618,44.48083],[141.668701,44.492587],[141.685181,44.6413],[141.657715,44.774036],[141.624756,44.953137],[141.38855,45.061882],[141.190796,45.0774],[140.949097,45.205263],[140.877686,45.383019],[140.998535,45.514046],[141.525879,45.444717],[141.800537,45.556372],[142.009277,45.598666],[142.223511,45.448571],[142.602539,45.092914],[142.833252,44.774036],[143.415527,44.390617],[143.811035,44.217647],[144.085693,44.21371],[144.651489,44.016521],[144.84375,44.052064],[145.101929,44.304196],[145.338135,44.374913],[145.4983021638224,44.25458963058189],[145.22867779290473,43.799017417652124],[145.55873521247634,43.47732765097113],[145.81999193050345,43.51451721937357],[145.8767060223171,43.363899467343714],[145.5782597358876,43.15563788429011],[145.332642,43.060861],[145.036011,42.916206],[144.656982,42.88804],[144.39510848238476,42.91901925532971],[144.272461,42.956423],[144.1008460224006,42.916694907304574],[143.816528,42.730874],[143.569336,42.504503],[143.426514,42.297627],[143.338623,41.918629],[143.22549655612835,41.898630472288026],[142.932129,41.95132],[142.651978,42.081917],[141.849976,42.419401],[141.685181,42.5207],[141.432495,42.496403],[141.152344,42.285437],[140.855713,42.187829],[140.987549,42.041134],[141.2564541809708,41.86001724071997],[141.2247558847777,41.54207548522947],[141.56280325068616,41.46115911960349],[141.503906,41.273678],[141.509399,40.971604],[141.652222,40.705628],[141.866455,40.543026],[142.025757,40.250184],[142.064209,40.019201],[142.091675,39.639538],[141.998291,39.108751],[141.663208,38.801189],[141.624756,38.561053],[141.723633,38.212288],[141.443481,38.212288],[141.328125,38.294248],[141.174316,38.294248],[140.998535,38.11295],[140.998535,37.983175],[141.053467,37.892196],[141.102905,37.640335],[141.097412,37.470498],[141.091919,37.339592],[141.086426,37.103384],[140.976563,36.892801],[140.83374,36.774092],[140.663452,36.315125],[140.685425,36.120128],[140.921631,35.688533],[140.7608160189575,35.67216698251098],[140.5585977407693,35.58198227913509],[140.482178,35.393528],[140.493164,35.236646],[140.3098925020784,35.11106936923947],[140.125122,35.034494],[140.119629,34.867905],[139.6081718332851,34.77380647078992],[139.6095664421002,34.4581600089743],[139.90545594570182,33.11515172004148],[139.8420012446155,32.394603832244435],[139.70532958073656,32.37693878725328],[139.5635443512023,33.77108273273936],[139.10192883340702,34.11578354486942],[138.911133,34.569906],[138.493652,34.547287],[137.76574831679383,34.53553174385346],[137.246704,34.497503],[136.91405413987744,34.26854067766708],[136.373291,33.906896],[135.950317,33.325939],[135.576782,33.403931],[135.164795,33.646636],[134.796753,33.765449],[134.725342,33.674069],[134.384766,33.491017],[134.27658465754112,33.120450652451886],[134.033203,33.307577],[133.775024,33.426857],[133.577271,33.390173],[133.154297,32.971804],[133.115845,32.713355],[132.95105,32.560704],[132.528076,32.630123],[132.456665,32.745703],[132.225952,32.948759],[132.039185,32.787275],[131.885376,32.62087],[131.621704,32.087229],[131.605225,31.723495],[131.418457,31.264466],[131.02670333007916,30.117603357451102],[130.30507694479823,30.151429594261163],[129.91075783955995,29.728345374765844],[129.75264580841,29.825211416540064],[130.03124782829025,30.410743738414563],[129.76348293579247,30.799374728220375],[130.0406172751924,31.25539495924354],[129.61937335823285,31.55525270600056],[129.633179,31.774878],[129.825439,31.952162],[129.786987,32.212801],[129.737549,32.310349],[129.682617,32.407792],[129.60022,32.519026],[129.611206,32.699489],[129.517822,32.939539],[129.375,32.898038],[128.77238093786667,32.36505555796438],[128.556519,32.639375],[128.578491,32.764181],[129.04541,33.312168],[129.111328,33.361503],[129.28618969058073,33.36312827562721],[129.342041,33.431441]]]]}},{"type":"Feature","properties":{"code":"ID","name":"Java","country":"Indonesia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[109.17,-4.074],[106.385,-5.167],[106.323,-5.501],[102.925,-8.171],[116.225,-10.492],[114.396,-8.289],[114.422,-8.098],[114.929,-7.493],[116.34,-7.562],[116.584,-5.304],[109.17,-4.074]]]]}},{"type":"Feature","properties":{"code":"JE","name":"Jersey","country":"United Kingdom"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-2.09,49.06],[-1.894,49.28],[-1.99,49.368],[-2.427,49.228],[-2.09,49.06]]]]}},{"type":"Feature","properties":{"code":"JO","name":"Jordan"},"geometry":{"type":"MultiPolygon","coordinates":[[[[39.043,32.302],[38.988,32.477],[39.082,32.503],[38.792,33.373],[36.839,32.313],[36.41,32.379],[36.239,32.501],[36.209,32.495],[36.204,32.528],[36.081,32.515],[36.022,32.659],[35.966,32.662],[35.933,32.72],[35.884,32.713],[35.76,32.748],[35.685,32.707],[35.665,32.681],[35.617,32.68],[35.598,32.652],[35.566,32.644],[35.575,32.487],[35.555,32.427],[35.558,32.387],[35.571,32.219],[35.52,32.041],[35.544,31.966],[35.528,31.913],[35.559,31.765],[35.477,31.496],[35.403,31.255],[35.437,31.124],[35.414,30.956],[35.34,30.88],[35.335,30.812],[35.293,30.714],[35.214,30.604],[35.196,30.503],[35.162,30.435],[35.192,30.346],[35.141,30.074],[35.021,29.663],[34.982,29.581],[34.977,29.543],[34.923,29.453],[34.881,29.369],[36.071,29.185],[36.5,29.497],[36.751,29.869],[37.497,29.999],[37.664,30.332],[37.994,30.5],[36.998,31.501],[38.992,31.997],[39.299,32.233],[39.262,32.356],[39.043,32.302]]]]}},{"type":"Feature","properties":{"code":"ID","name":"Kalimantan","country":"Indonesia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[120.025,2.837],[118.065,4.166],[117.676,4.165],[117.473,4.189],[117.258,4.351],[115.902,4.377],[115.583,3.935],[115.537,3.148],[115.113,2.829],[115.172,2.497],[114.807,2.217],[114.807,1.924],[114.579,1.5],[114.038,1.448],[113.647,1.239],[113.014,1.428],[113.021,1.578],[112.486,1.565],[112.213,1.441],[112.157,1.17],[111.946,1.12],[111.828,0.993],[111.554,0.979],[111.23,1.083],[110.624,0.873],[110.492,0.881],[110.354,0.989],[109.664,1.604],[109.664,1.8],[109.579,1.806],[109.538,1.918],[109.626,1.992],[109.828,2.868],[107.948,1.069],[108.509,-2.011],[109.396,-2.073],[109.17,-4.074],[116.584,-5.304],[120.025,2.837]]]]}},{"type":"Feature","properties":{"code":"KZ","name":"Kazakhstan"},"geometry":{"type":"MultiPolygon","coordinates":[[[[68.909,55.381],[68.192,55.188],[68.267,55.092],[68.213,54.986],[65.202,54.552],[65.247,54.357],[65.11,54.33],[64.972,54.421],[63.977,54.298],[64.027,54.227],[63.912,54.2],[63.806,54.271],[62.587,54.059],[62.569,53.94],[62.459,53.907],[62.385,54.04],[62.01,54.041],[62.039,53.948],[61.653,54.024],[61.569,53.957],[61.476,54.08],[61.371,54.085],[61.269,53.928],[60.998,53.937],[61.143,53.901],[61.226,53.803],[60.906,53.629],[61.557,53.571],[61.572,53.501],[61.38,53.459],[61.291,53.51],[61.143,53.415],[61.19,53.305],[62.146,53.096],[62.128,52.991],[62.042,52.961],[61.235,53.032],[61.058,52.922],[60.72,52.759],[60.717,52.662],[60.841,52.639],[60.847,52.522],[60.98,52.501],[61.054,52.351],[60.782,52.221],[60.726,52.155],[60.489,52.152],[60.199,51.992],[59.998,51.983],[60.099,51.871],[60.51,51.796],[60.368,51.668],[60.542,51.617],[60.924,51.611],[60.957,51.486],[61.507,51.407],[61.551,51.327],[61.681,51.257],[61.569,51.237],[61.443,50.807],[60.818,50.663],[60.319,50.677],[60.173,50.833],[60.013,50.816],[59.812,50.545],[59.519,50.499],[59.489,50.642],[58.88,50.709],[58.321,51.152],[57.756,51.139],[57.75,50.93],[57.442,50.884],[57.173,51.113],[56.179,50.932],[56.114,50.747],[55.678,50.545],[54.721,51.033],[54.567,51.02],[54.715,50.612],[54.558,50.52],[54.419,50.612],[54.463,50.856],[54.122,51.115],[53.693,51.235],[53.462,51.494],[52.543,51.484],[52.361,51.742],[51.825,51.679],[51.774,51.495],[51.301,51.488],[51.263,51.685],[50.597,51.619],[50.269,51.287],[49.973,51.24],[49.769,51.111],[49.39,51.094],[49.42,50.859],[49.127,50.786],[48.869,50.616],[48.579,50.633],[48.908,50.023],[48.684,49.895],[48.426,49.823],[48.245,49.861],[48.1,50.092],[47.586,50.479],[47.304,50.309],[47.346,50.093],[47.183,49.937],[46.908,49.867],[46.784,49.34],[47.047,49.198],[47.009,49.049],[46.784,48.954],[46.49,48.43],[47.115,48.272],[47.121,47.837],[47.387,47.682],[47.417,47.837],[47.65,47.766],[48.153,47.745],[48.452,47.408],[48.523,47.41],[49.011,46.727],[48.511,46.693],[48.55,46.563],[49.165,46.385],[49.323,46.269],[49.889,46.046],[49.213,44.85],[52.26,41.692],[52.479,41.78],[52.976,42.131],[54.206,42.385],[54.952,41.924],[55.455,41.256],[56.003,41.326],[55.976,44.993],[55.976,44.993],[55.976,44.993],[55.976,44.993],[55.976,44.993],[55.976,44.994],[55.976,44.994],[55.976,44.994],[55.976,44.994],[55.976,44.994],[55.976,44.994],[55.976,44.994],[55.976,44.994],[55.976,44.994],[55.976,44.994],[55.976,44.994],[55.976,44.994],[55.976,44.994],[55.976,44.994],[55.976,44.994],[55.976,44.995],[55.976,44.995],[55.976,44.995],[55.976,44.995],[55.976,44.995],[55.976,44.995],[55.976,44.995],[55.976,44.995],[55.976,44.995],[55.976,44.995],[55.976,44.995],[55.976,44.995],[55.976,44.995],[55.976,44.995],[55.976,44.995],[55.976,44.995],[55.977,44.995],[55.977,44.995],[55.977,44.995],[55.977,44.996],[55.977,44.996],[55.977,44.996],[55.977,44.996],[55.977,44.996],[55.977,44.996],[55.977,44.996],[55.977,44.996],[55.977,44.996],[55.977,44.996],[55.977,44.996],[55.978,44.996],[55.978,44.996],[55.978,44.996],[55.978,44.996],[55.978,44.996],[55.978,44.996],[55.978,44.996],[55.978,44.996],[55.978,44.996],[55.978,44.996],[55.978,44.996],[58.597,45.587],[61.015,44.414],[62.017,43.51],[63.347,43.64],[64.539,43.569],[64.965,43.747],[65.187,43.488],[65.533,43.319],[65.852,42.855],[66.095,42.934],[66.005,41.945],[66.533,41.874],[66.691,41.131],[67.964,41.146],[67.985,41.028],[68.083,41.081],[68.127,41.032],[67.967,40.838],[68.5,40.564],[68.63,40.594],[68.584,40.914],[68.5,40.997],[68.622,41.03],[68.657,40.939],[68.739,40.97],[68.722,41.05],[69.013,41.228],[69.05,41.362],[69.151,41.431],[69.177,41.438],[69.185,41.452],[69.204,41.454],[69.227,41.463],[69.233,41.458],[69.251,41.467],[69.298,41.437],[69.356,41.472],[69.375,41.466],[69.451,41.462],[69.395,41.515],[69.458,41.569],[69.495,41.545],[70.945,42.262],[70.86,42.302],[70.977,42.501],[71.152,42.605],[71.178,42.674],[71.228,42.692],[71.272,42.779],[71.533,42.801],[71.624,42.766],[71.888,42.836],[73.444,42.431],[73.51,42.824],[73.556,43.031],[74.225,43.247],[74.575,43.137],[74.646,43.059],[74.703,43.025],[74.75,42.99],[74.888,42.986],[75.226,42.855],[75.3,42.862],[75.722,42.797],[75.828,42.948],[78.485,42.896],[78.915,42.768],[79.198,42.804],[79.529,42.448],[79.974,42.428],[80.178,42.212],[80.268,42.238],[80.169,42.611],[80.269,42.837],[80.382,42.831],[80.59,42.901],[80.374,43.016],[80.629,43.141],[80.788,43.142],[80.778,43.301],[80.697,43.326],[80.752,43.449],[80.4,44.11],[80.402,44.233],[80.384,44.631],[79.899,44.9],[80.112,45.034],[81.733,45.35],[82.514,45.175],[82.585,45.4],[82.218,45.566],[83.046,47.191],[83.922,46.989],[84.731,47.014],[84.94,46.874],[85.224,47.048],[85.543,47.062],[85.697,47.29],[85.611,47.498],[85.517,48.055],[85.736,48.394],[86.381,48.461],[86.753,48.703],[86.736,48.999],[86.872,49.124],[87.284,49.116],[87.315,49.236],[87.031,49.251],[86.826,49.518],[86.613,49.602],[86.791,49.748],[86.637,49.801],[86.187,49.503],[85.24,49.602],[84.992,50.068],[84.294,50.273],[83.844,50.874],[83.146,51.008],[82.554,50.754],[81.95,50.793],[81.466,50.777],[81.412,50.975],[81.061,50.948],[81.17,51.157],[80.803,51.283],[80.448,51.209],[80.413,50.956],[80.081,50.777],[79.113,52.012],[77.904,53.298],[76.542,53.993],[76.441,54.16],[76.823,54.18],[76.911,54.468],[75.367,54.074],[75.434,53.987],[75.074,53.808],[73.392,53.446],[73.254,53.615],[73.689,53.865],[73.748,54.072],[73.38,53.961],[72.71,54.116],[72.434,53.927],[72.175,54.363],[71.961,54.177],[71.104,54.133],[71.087,54.334],[71.242,54.65],[71.083,54.713],[70.96,55.106],[70.765,55.303],[70.192,55.148],[69.749,55.355],[69.342,55.363],[68.909,55.381]]]]}},{"type":"Feature","properties":{"code":"KE","name":"Kenya"},"geometry":{"type":"MultiPolygon","coordinates":[[[[35.942,4.619],[35.514,4.616],[35.424,4.77],[35.478,4.919],[35.31,4.904],[35.342,5.024],[34.476,4.722],[33.987,4.233],[34.06,4.152],[34.154,3.805],[34.458,3.674],[34.449,3.516],[34.391,3.488],[34.418,3.443],[34.4,3.379],[34.458,3.183],[34.562,3.115],[34.601,2.93],[34.658,2.875],[34.74,2.854],[34.781,2.762],[34.772,2.703],[34.953,2.472],[34.909,2.424],[34.987,1.973],[34.99,1.667],[34.927,1.561],[34.878,1.56],[34.792,1.368],[34.826,1.309],[34.826,1.266],[34.802,1.228],[34.676,1.213],[34.58,1.147],[34.574,1.099],[34.524,1.107],[34.433,0.853],[34.4,0.803],[34.315,0.757],[34.273,0.632],[34.202,0.623],[34.135,0.581],[34.114,0.489],[34.087,0.447],[34.101,0.364],[33.909,0.106],[33.984,-0.131],[33.926,-0.542],[33.931,-0.993],[34.023,-1.008],[34.031,-1.051],[34.082,-1.023],[37.672,-3.062],[37.717,-3.304],[37.59,-3.427],[37.631,-3.507],[37.75,-3.542],[37.813,-3.692],[39.216,-4.678],[39.443,-4.939],[39.621,-4.681],[41.755,-1.853],[41.564,-1.664],[41.56,-1.598],[41.001,-0.831],[40.988,2.83],[41.314,3.143],[41.895,3.974],[41.175,3.941],[40.775,4.277],[39.86,3.87],[39.768,3.671],[39.583,3.474],[39.551,3.396],[39.516,3.409],[39.494,3.455],[39.2,3.478],[39.077,3.527],[38.919,3.512],[38.523,3.626],[38.458,3.604],[38.142,3.625],[37.077,4.335],[36.845,4.445],[36.039,4.444],[35.954,4.532],[35.942,4.619]]]]}},{"type":"Feature","properties":{"code":"FR","name":"Kerguelen Islands","country":"France"},"geometry":{"type":"MultiPolygon","coordinates":[[[[49.2,-45.333],[49.504,-47.532],[71.895,-51.179],[70.827,-47.617],[49.2,-45.333]]]]}},{"type":"Feature","properties":{"code":"KI","name":"Kiribati"},"geometry":{"type":"MultiPolygon","coordinates":[[[[169,3.9],[169,-3.5],[178,-3.5],[178,3.9],[169,3.9]]],[[[-162.444,8.668],[-162.93,-1.734],[-175.335,-1.406],[-175.318,-7.548],[-156.509,-7.497],[-156.486,-15.528],[-147.085,-8.32],[-162.444,8.668]]]]}},{"type":"Feature","properties":{"code":"XK","name":"Kosovo"},"geometry":{"type":"MultiPolygon","coordinates":[[[[21.39,42.749],[21.44,42.873],[21.369,42.874],[21.33,42.904],[21.272,42.899],[21.235,42.955],[21.239,43.008],[21.204,43.023],[21.167,42.997],[21.145,43.111],[21.09,43.135],[21.054,43.107],[21.007,43.14],[20.963,43.124],[20.837,43.178],[20.887,43.217],[20.821,43.268],[20.738,43.251],[20.687,43.213],[20.599,43.205],[20.695,43.096],[20.646,43.008],[20.599,43.011],[20.487,42.932],[20.535,42.889],[20.437,42.832],[20.406,42.849],[20.357,42.834],[20.279,42.819],[20.254,42.762],[20.049,42.777],[20.021,42.748],[20.029,42.711],[20.097,42.656],[20.078,42.556],[20.171,42.505],[20.218,42.412],[20.244,42.322],[20.345,42.327],[20.382,42.303],[20.489,42.254],[20.57,42.121],[20.556,42.082],[20.594,42.039],[20.631,41.949],[20.579,41.916],[20.595,41.882],[20.685,41.853],[20.768,41.918],[20.755,42.052],[21.115,42.208],[21.166,42.198],[21.227,42.089],[21.32,42.11],[21.299,42.14],[21.305,42.142],[21.384,42.245],[21.439,42.236],[21.439,42.279],[21.508,42.272],[21.521,42.245],[21.59,42.259],[21.568,42.309],[21.526,42.336],[21.535,42.368],[21.57,42.365],[21.59,42.38],[21.629,42.377],[21.642,42.411],[21.626,42.451],[21.703,42.519],[21.705,42.542],[21.733,42.55],[21.757,42.627],[21.794,42.659],[21.75,42.701],[21.663,42.678],[21.588,42.704],[21.592,42.726],[21.475,42.747],[21.39,42.749]]]]}},{"type":"Feature","properties":{"code":"KW","name":"Kuwait"},"geometry":{"type":"MultiPolygon","coordinates":[[[[49.004,28.815],[48.595,29.668],[48.405,29.858],[48.173,30.024],[48.068,30.029],[48.011,29.989],[47.709,30.105],[47.372,30.104],[47.152,30.01],[46.897,29.506],[46.553,29.103],[47.462,29.001],[47.584,28.834],[47.599,28.668],[47.706,28.522],[48.43,28.536],[49.004,28.815]]]]}},{"type":"Feature","properties":{"code":"KG","name":"Kyrgyzstan"},"geometry":{"type":"MultiPolygon","coordinates":[[[[74.888,42.986],[74.75,42.99],[74.703,43.025],[74.646,43.059],[74.575,43.137],[74.225,43.247],[73.556,43.031],[73.51,42.824],[73.444,42.431],[71.888,42.836],[71.624,42.766],[71.533,42.801],[71.272,42.779],[71.228,42.692],[71.178,42.674],[71.152,42.605],[70.977,42.501],[70.86,42.302],[70.945,42.262],[71.133,42.284],[71.287,42.18],[70.698,41.926],[70.177,41.545],[70.489,41.403],[70.676,41.48],[70.786,41.364],[70.779,41.248],[70.863,41.238],[70.962,41.164],[71.022,41.195],[71.118,41.154],[71.258,41.188],[71.272,41.11],[71.349,41.168],[71.402,41.094],[71.461,41.14],[71.438,41.196],[71.467,41.319],[71.572,41.292],[71.679,41.421],[71.659,41.496],[71.731,41.547],[71.711,41.43],[71.766,41.447],[71.839,41.355],[71.915,41.298],[71.86,41.191],[72.072,41.117],[72.107,41.155],[72.164,41.165],[72.176,41.155],[72.149,41.134],[72.179,41.106],[72.211,41.056],[72.176,41.024],[72.183,40.996],[72.324,41.034],[72.34,41.045],[72.348,41.061],[72.361,41.044],[72.385,41.028],[72.452,41.03],[72.487,40.971],[72.551,40.96],[72.591,40.869],[72.682,40.849],[72.843,40.855],[72.945,40.809],[73.019,40.847],[73.133,40.835],[73.134,40.791],[73.061,40.767],[72.991,40.765],[72.933,40.731],[72.872,40.711],[72.854,40.712],[72.848,40.672],[72.801,40.679],[72.749,40.609],[72.749,40.596],[72.76,40.573],[72.749,40.571],[72.748,40.581],[72.74,40.584],[72.696,40.598],[72.667,40.591],[72.667,40.522],[72.478,40.553],[72.405,40.619],[72.344,40.601],[72.417,40.557],[72.384,40.515],[72.415,40.509],[72.442,40.482],[72.403,40.401],[72.244,40.461],[72.186,40.499],[71.964,40.319],[72.055,40.276],[71.85,40.256],[71.826,40.219],[71.731,40.148],[71.717,40.179],[71.696,40.185],[71.706,40.204],[71.684,40.27],[71.619,40.268],[71.617,40.206],[71.515,40.23],[71.512,40.269],[71.425,40.286],[71.367,40.316],[71.13,40.341],[71.059,40.288],[70.958,40.288],[70.982,40.224],[70.805,40.168],[70.793,40.128],[70.658,40.098],[70.659,39.988],[70.589,39.952],[70.55,39.966],[70.476,39.932],[70.574,39.994],[70.583,40.009],[70.013,40.233],[69.67,40.106],[69.647,40.122],[69.576,40.105],[69.556,40.123],[69.538,40.118],[69.539,40.089],[69.506,40.033],[69.536,39.94],[69.436,39.929],[69.431,39.984],[69.356,40.02],[69.269,39.813],[69.359,39.525],[69.687,39.593],[69.875,39.539],[70.111,39.582],[70.287,39.531],[70.448,39.601],[70.641,39.588],[70.785,39.389],[71.064,39.416],[71.088,39.507],[71.498,39.614],[71.559,39.576],[71.552,39.457],[71.627,39.441],[71.768,39.455],[71.802,39.406],[71.752,39.32],[71.792,39.274],[71.906,39.277],[72.041,39.367],[72.097,39.268],[72.172,39.266],[72.238,39.172],[72.332,39.331],[72.62,39.397],[72.859,39.351],[73.185,39.355],[73.319,39.386],[73.451,39.467],[73.598,39.464],[73.87,39.479],[73.947,39.607],[73.924,39.696],[73.905,39.751],[73.83,39.761],[73.97,40.044],[74.255,40.132],[74.351,40.097],[74.699,40.347],[74.86,40.329],[74.782,40.449],[74.82,40.522],[75.082,40.439],[75.228,40.454],[75.585,40.669],[75.697,40.286],[75.914,40.295],[75.962,40.381],[76.337,40.348],[76.526,40.461],[76.757,40.954],[76.993,41.07],[77.28,41.003],[77.369,41.038],[77.527,41.002],[77.762,41.016],[77.813,41.143],[78.129,41.231],[78.158,41.386],[78.373,41.396],[79.93,42.041],[80.178,42.032],[80.178,42.212],[79.974,42.428],[79.529,42.448],[79.198,42.804],[78.915,42.768],[78.485,42.896],[75.828,42.948],[75.722,42.797],[75.3,42.862],[75.226,42.855],[74.888,42.986]],[[70.742,39.863],[70.631,39.779],[70.597,39.835],[70.55,39.851],[70.526,39.87],[70.537,39.892],[70.742,39.863]],[[71.865,39.986],[71.843,39.956],[71.75,39.937],[71.715,39.963],[71.788,40.014],[71.865,39.986]],[[71.211,40.034],[71.143,39.95],[71.231,39.936],[71.161,39.884],[71.105,39.914],[71.05,39.898],[71.105,39.956],[71.091,39.99],[71.117,39.993],[71.11,40.02],[71.01,40.055],[71.002,40.182],[71.063,40.177],[71.122,40.031],[71.211,40.034]]]]}},{"type":"Feature","properties":{"code":"LA","name":"Laos"},"geometry":{"type":"MultiPolygon","coordinates":[[[[102.124,22.434],[102.036,22.462],[101.985,22.428],[101.913,22.444],[101.907,22.387],[101.868,22.384],[101.769,22.503],[101.69,22.468],[101.613,22.275],[101.568,22.289],[101.536,22.248],[101.607,22.135],[101.575,22.13],[101.626,21.966],[101.779,21.83],[101.746,21.729],[101.833,21.616],[101.8,21.575],[101.748,21.587],[101.773,21.518],[101.742,21.483],[101.74,21.31],[101.844,21.253],[101.839,21.21],[101.767,21.216],[101.793,21.19],[101.762,21.148],[101.705,21.149],[101.67,21.2],[101.609,21.179],[101.595,21.186],[101.607,21.233],[101.546,21.257],[101.293,21.173],[101.223,21.233],[101.269,21.365],[101.193,21.42],[101.212,21.564],[101.152,21.561],[101.162,21.528],[101.002,21.396],[100.802,21.293],[100.727,21.318],[100.636,21.056],[100.553,21.028],[100.51,20.886],[100.646,20.883],[100.601,20.835],[100.511,20.822],[100.364,20.828],[100.196,20.682],[100.084,20.366],[100.1,20.316],[100.093,20.263],[100.118,20.248],[100.171,20.243],[100.167,20.299],[100.221,20.316],[100.258,20.399],[100.334,20.403],[100.374,20.352],[100.415,20.256],[100.45,20.236],[100.454,20.2],[100.476,20.191],[100.511,20.149],[100.552,20.177],[100.588,20.158],[100.509,19.879],[100.398,19.75],[100.496,19.535],[100.582,19.492],[100.646,19.559],[100.772,19.483],[100.903,19.619],[101.089,19.597],[101.265,19.592],[101.27,19.483],[101.213,19.462],[101.206,19.353],[101.249,19.333],[101.261,19.127],[101.356,19.047],[101.258,18.895],[101.228,18.734],[101.276,18.689],[101.06,18.432],[101.182,18.344],[101.151,18.256],[101.191,18.212],[101.179,18.054],[101.022,17.876],[100.965,17.579],[101.151,17.476],[101.447,17.739],[101.723,17.929],[101.781,18.076],[101.885,18.025],[102.114,18.215],[102.455,17.971],[102.592,17.961],[102.61,17.954],[102.614,17.923],[102.59,17.849],[102.595,17.835],[102.682,17.802],[102.699,17.817],[102.675,17.845],[102.685,17.867],[102.76,17.896],[102.79,17.936],[102.82,17.942],[102.863,17.975],[102.958,18.005],[102.991,17.995],[103.02,17.971],[103.057,18.001],[103.078,18.038],[103.073,18.124],[103.149,18.178],[103.15,18.232],[103.171,18.262],[103.298,18.305],[103.238,18.349],[103.248,18.378],[103.31,18.434],[103.41,18.449],[103.478,18.428],[103.61,18.405],[103.699,18.341],[103.824,18.34],[103.856,18.287],[103.939,18.339],[103.977,18.336],[104.065,18.217],[104.109,18.108],[104.218,17.993],[104.276,17.861],[104.354,17.829],[104.454,17.668],[104.699,17.53],[104.801,17.394],[104.807,17.19],[104.737,17.014],[104.737,16.911],[104.764,16.848],[104.74,16.81],[104.761,16.693],[104.733,16.565],[104.881,16.373],[105.003,16.256],[105.062,16.098],[105.42,16.007],[105.385,15.987],[105.341,15.927],[105.38,15.841],[105.423,15.77],[105.466,15.747],[105.618,15.688],[105.604,15.533],[105.582,15.41],[105.476,15.38],[105.469,15.337],[105.507,15.321],[105.58,15.327],[105.467,15.131],[105.612,15],[105.512,14.808],[105.539,14.557],[105.438,14.439],[105.209,14.35],[105.276,14.175],[105.368,14.099],[105.449,14.107],[105.556,14.157],[105.783,14.084],[105.782,14.022],[105.908,13.929],[106.104,13.914],[106.101,13.985],[106.166,14.018],[106.187,14.063],[106.12,14.113],[106.109,14.184],[106.048,14.204],[106.023,14.306],[105.995,14.327],[106.001,14.37],[106.213,14.362],[106.252,14.484],[106.324,14.44],[106.409,14.452],[106.439,14.52],[106.478,14.51],[106.459,14.55],[106.507,14.59],[106.541,14.596],[106.571,14.505],[106.599,14.51],[106.633,14.442],[106.738,14.427],[106.808,14.312],[106.85,14.294],[106.906,14.336],[106.965,14.32],[106.988,14.368],[107.046,14.418],[107.04,14.451],[107.097,14.394],[107.17,14.418],[107.212,14.487],[107.256,14.487],[107.265,14.543],[107.298,14.59],[107.328,14.588],[107.379,14.544],[107.444,14.528],[107.472,14.615],[107.544,14.691],[107.516,14.793],[107.593,14.878],[107.483,14.938],[107.465,15.01],[107.615,15.057],[107.619,15.139],[107.588,15.201],[107.626,15.227],[107.606,15.375],[107.624,15.422],[107.533,15.405],[107.507,15.488],[107.382,15.498],[107.344,15.623],[107.276,15.628],[107.271,15.715],[107.219,15.746],[107.214,15.837],[107.342,15.895],[107.395,15.888],[107.463,16.011],[107.45,16.085],[107.34,16.055],[107.258,16.136],[107.146,16.178],[107.15,16.263],[107.091,16.309],[107.026,16.311],[106.974,16.302],[106.966,16.349],[106.881,16.436],[106.887,16.527],[106.841,16.554],[106.744,16.419],[106.658,16.478],[106.661,16.569],[106.615,16.607],[106.583,16.601],[106.59,16.623],[106.555,16.687],[106.553,16.868],[106.522,16.879],[106.52,16.921],[106.548,16.927],[106.55,17.003],[106.509,16.967],[106.436,17.014],[106.319,17.205],[106.293,17.302],[106.244,17.247],[106.19,17.282],[106.09,17.364],[105.857,17.632],[105.766,17.671],[105.604,17.894],[105.648,17.967],[105.463,18.22],[105.384,18.153],[105.159,18.387],[105.104,18.435],[105.133,18.584],[105.197,18.642],[105.128,18.705],[104.646,18.857],[104.536,18.977],[103.871,19.319],[104.061,19.435],[104.108,19.516],[104.056,19.617],[104.065,19.669],[104.232,19.702],[104.413,19.7],[104.532,19.617],[104.648,19.624],[104.684,19.727],[104.835,19.804],[104.847,19.918],[104.987,20.096],[104.917,20.156],[104.869,20.141],[104.613,20.245],[104.622,20.366],[104.721,20.406],[104.662,20.478],[104.479,20.375],[104.406,20.385],[104.382,20.472],[104.64,20.665],[104.274,20.914],[104.111,20.968],[103.98,20.915],[103.823,20.873],[103.735,20.667],[103.686,20.663],[103.457,20.824],[103.38,20.795],[103.215,20.898],[103.121,20.9],[103.035,21.058],[102.977,21.058],[102.898,21.247],[102.808,21.257],[102.889,21.311],[102.942,21.46],[102.863,21.425],[102.988,21.589],[102.98,21.741],[102.861,21.712],[102.856,21.845],[102.819,21.839],[102.821,21.737],[102.742,21.667],[102.671,21.659],[102.623,21.914],[102.491,21.99],[102.517,22.027],[102.187,22.304],[102.141,22.401],[102.124,22.434]]]]}},{"type":"Feature","properties":{"code":"LV","name":"Latvia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[27.347,57.522],[26.904,57.628],[26.547,57.518],[26.465,57.569],[26.293,57.592],[26.187,57.685],[26.203,57.721],[26.081,57.766],[26.054,57.761],[26.033,57.772],[26.024,57.769],[26.021,57.772],[26.027,57.774],[26.027,57.782],[26.025,57.783],[26.032,57.79],[26.059,57.847],[25.735,57.902],[25.296,58.083],[25.282,57.985],[25.195,58.083],[24.358,57.875],[24.262,57.918],[23.201,57.567],[22.805,57.878],[19.849,57.579],[19.648,57.065],[20.684,56.041],[21.15,56.078],[21.246,56.169],[21.497,56.291],[21.579,56.314],[21.746,56.332],[22.005,56.415],[22.097,56.429],[22.336,56.402],[22.564,56.393],[22.694,56.363],[22.83,56.367],[22.97,56.412],[23.095,56.305],[23.173,56.368],[23.316,56.383],[23.405,56.377],[23.498,56.343],[23.757,56.373],[24.027,56.323],[24.131,56.249],[24.323,56.302],[24.427,56.265],[24.581,56.291],[24.574,56.315],[24.7,56.405],[24.837,56.416],[24.89,56.467],[25.058,56.267],[25.093,56.188],[25.231,56.191],[25.398,56.157],[25.536,56.167],[25.686,56.147],[25.692,56.089],[25.818,56.054],[25.859,56.002],[25.9,56.001],[26.038,55.959],[26.185,55.868],[26.396,55.712],[26.467,55.704],[26.582,55.675],[26.632,55.68],[26.649,55.705],[26.718,55.706],[26.769,55.677],[26.874,55.717],[26.972,55.81],[27.156,55.85],[27.278,55.783],[27.354,55.809],[27.617,55.786],[27.631,55.897],[27.979,56.118],[28.152,56.17],[28.237,56.276],[28.166,56.378],[28.191,56.446],[28.101,56.524],[28.135,56.58],[28.048,56.59],[27.861,56.882],[27.665,56.839],[27.861,57.294],[27.525,57.428],[27.568,57.537],[27.347,57.522]]]]}},{"type":"Feature","properties":{"code":"LB","name":"Lebanon"},"geometry":{"type":"MultiPolygon","coordinates":[[[[35.948,33.479],[35.945,33.528],[36.057,33.579],[35.934,33.66],[36.068,33.829],[36.145,33.851],[36.397,33.834],[36.383,33.866],[36.286,33.92],[36.411,34.053],[36.506,34.06],[36.513,34.099],[36.625,34.203],[36.592,34.232],[36.587,34.277],[36.608,34.31],[36.566,34.319],[36.53,34.38],[36.559,34.416],[36.462,34.465],[36.444,34.502],[36.347,34.5],[36.337,34.526],[36.398,34.557],[36.414,34.612],[36.453,34.594],[36.46,34.638],[36.429,34.625],[36.354,34.654],[36.351,34.685],[36.324,34.693],[36.292,34.63],[35.987,34.65],[35.974,34.633],[35.485,34.709],[34.785,33.204],[35.106,33.093],[35.192,33.087],[35.314,33.105],[35.352,33.056],[35.431,33.067],[35.448,33.093],[35.503,33.091],[35.503,33.114],[35.526,33.119],[35.542,33.199],[35.536,33.232],[35.548,33.236],[35.545,33.255],[35.556,33.258],[35.565,33.29],[35.583,33.284],[35.585,33.267],[35.623,33.242],[35.62,33.273],[35.775,33.336],[35.813,33.364],[35.826,33.405],[35.887,33.432],[35.948,33.479]]]]}},{"type":"Feature","properties":{"code":"LS","name":"Lesotho"},"geometry":{"type":"MultiPolygon","coordinates":[[[[29.332,-29.456],[29.449,-29.377],[29.405,-29.212],[28.68,-28.587],[28.651,-28.57],[28.406,-28.622],[28.305,-28.695],[28.235,-28.695],[28.132,-28.729],[28.025,-28.86],[27.987,-28.879],[27.939,-28.849],[27.889,-28.882],[27.891,-28.916],[27.755,-28.898],[27.56,-29.19],[27.516,-29.226],[27.543,-29.256],[27.487,-29.293],[27.451,-29.297],[27.473,-29.32],[27.436,-29.335],[27.335,-29.482],[27.01,-29.654],[27.095,-29.728],[27.227,-30.007],[27.296,-30.055],[27.326,-30.148],[27.408,-30.146],[27.373,-30.194],[27.366,-30.272],[27.381,-30.335],[27.455,-30.322],[27.569,-30.425],[27.568,-30.446],[27.621,-30.505],[27.652,-30.517],[27.678,-30.534],[27.695,-30.559],[27.748,-30.606],[28.121,-30.681],[28.232,-30.285],[28.399,-30.159],[28.686,-30.129],[28.802,-30.106],[28.934,-30.051],[29.165,-29.917],[29.126,-29.763],[29.285,-29.585],[29.332,-29.456]]]]}},{"type":"Feature","properties":{"code":"ID","name":"Lesser Sunda Islands","country":"Indonesia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[116.97,-8.015],[114.929,-7.493],[114.422,-8.098],[114.396,-8.289],[116.225,-10.492],[122.15,-11.525],[125.681,-9.852],[125.09,-9.464],[124.979,-9.193],[125.04,-9.171],[125.094,-9.197],[125.189,-9.164],[125.186,-9.031],[125.118,-8.964],[124.977,-9.081],[124.94,-8.856],[124.467,-9.13],[124.46,-9.303],[124.386,-9.358],[124.353,-9.43],[124.353,-9.485],[124.281,-9.505],[124.281,-9.422],[124.212,-9.369],[124.145,-9.423],[124.105,-9.412],[124.043,-9.342],[124.046,-9.227],[124.335,-9.114],[124.923,-8.759],[125.877,-7.499],[116.97,-8.015]]]]}},{"type":"Feature","properties":{"code":"LR","name":"Liberia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-8.471,7.557],[-8.559,7.625],[-8.559,7.702],[-8.678,7.694],[-8.728,7.514],[-8.845,7.351],[-8.857,7.26],[-8.934,7.282],[-9.091,7.199],[-9.183,7.305],[-9.208,7.381],[-9.305,7.421],[-9.419,7.418],[-9.482,7.371],[-9.375,7.62],[-9.357,7.741],[-9.449,7.928],[-9.414,8.024],[-9.509,8.185],[-9.474,8.352],[-9.778,8.546],[-10.059,8.426],[-10.054,8.507],[-10.146,8.527],[-10.203,8.48],[-10.276,8.487],[-10.301,8.3],[-10.316,8.286],[-10.298,8.213],[-10.352,8.152],[-10.45,8.156],[-10.516,8.139],[-10.575,8.048],[-10.605,8.041],[-10.604,7.774],[-11.294,7.216],[-11.403,6.977],[-11.504,6.927],[-12.15,6.16],[-7.528,3.711],[-7.533,4.351],[-7.593,4.891],[-7.539,4.943],[-7.554,5.087],[-7.489,5.141],[-7.462,5.263],[-7.365,5.329],[-7.434,5.424],[-7.372,5.612],[-7.439,5.748],[-7.437,5.847],[-7.462,5.849],[-7.482,5.81],[-7.673,5.943],[-7.703,5.906],[-7.783,5.99],[-7.797,6.077],[-7.85,6.089],[-7.835,6.203],[-7.907,6.277],[-8.006,6.317],[-8.176,6.282],[-8.33,6.364],[-8.385,6.359],[-8.457,6.5],[-8.487,6.438],[-8.595,6.506],[-8.317,6.828],[-8.292,7.169],[-8.375,7.258],[-8.419,7.512],[-8.471,7.557]]]]}},{"type":"Feature","properties":{"code":"LY","name":"Libya"},"geometry":{"type":"MultiPolygon","coordinates":[[[[11.589,33.369],[11.559,33.141],[11.515,33.098],[11.46,32.631],[11.578,32.48],[11.539,32.414],[11.042,32.215],[10.732,31.972],[10.628,31.966],[10.485,31.73],[10.314,31.726],[10.122,31.421],[10.295,30.903],[9.882,30.341],[9.768,30.344],[9.555,30.24],[9.388,30.167],[9.781,29.41],[9.896,26.577],[9.517,26.391],[9.388,26.193],[10.031,25.356],[10.024,24.981],[10.332,24.547],[10.853,24.559],[11.411,24.215],[11.625,24.267],[11.969,23.517],[13.563,23.166],[14.229,22.617],[14.998,23.005],[15.996,23.496],[23.995,19.499],[23.997,20],[24.998,19.997],[24.999,21.995],[25,29.246],[24.711,30.174],[25.011,30.739],[24.846,31.399],[25.739,32.26],[22.258,33.387],[11.589,33.369]]]]}},{"type":"Feature","properties":{"code":"LI","name":"Liechtenstein"},"geometry":{"type":"MultiPolygon","coordinates":[[[[9.607,47.061],[9.612,47.077],[9.634,47.084],[9.626,47.147],[9.565,47.171],[9.583,47.207],[9.57,47.219],[9.552,47.226],[9.568,47.243],[9.531,47.27],[9.524,47.25],[9.503,47.222],[9.489,47.193],[9.488,47.174],[9.51,47.137],[9.521,47.1],[9.514,47.085],[9.471,47.064],[9.475,47.053],[9.54,47.065],[9.557,47.048],[9.607,47.061]]]]}},{"type":"Feature","properties":{"code":"LT","name":"Lithuania"},"geometry":{"type":"MultiPolygon","coordinates":[[[[24.89,56.467],[24.837,56.416],[24.7,56.405],[24.574,56.315],[24.581,56.291],[24.427,56.265],[24.323,56.302],[24.131,56.249],[24.027,56.323],[23.757,56.373],[23.498,56.343],[23.405,56.377],[23.316,56.383],[23.173,56.368],[23.095,56.305],[22.97,56.412],[22.83,56.367],[22.694,56.363],[22.564,56.393],[22.336,56.402],[22.097,56.429],[22.005,56.415],[21.746,56.332],[21.579,56.314],[21.497,56.291],[21.246,56.169],[21.15,56.078],[20.684,56.041],[20.605,55.41],[20.952,55.28],[21.264,55.245],[21.355,55.284],[21.384,55.293],[21.468,55.211],[21.511,55.185],[21.556,55.203],[21.65,55.179],[21.855,55.095],[21.965,55.074],[21.995,55.087],[22.04,55.079],[22.026,55.051],[22.061,55.029],[22.117,55.021],[22.143,55.053],[22.316,55.066],[22.477,55.044],[22.589,55.071],[22.601,55.019],[22.655,54.97],[22.687,54.981],[22.764,54.925],[22.851,54.887],[22.873,54.795],[22.736,54.73],[22.734,54.666],[22.755,54.648],[22.742,54.643],[22.752,54.635],[22.68,54.585],[22.713,54.565],[22.678,54.532],[22.702,54.453],[22.725,54.417],[22.797,54.363],[22.838,54.408],[23.006,54.385],[22.996,54.359],[23.057,54.346],[23.043,54.316],[23.104,54.298],[23.139,54.316],[23.155,54.311],[23.159,54.299],[23.247,54.257],[23.349,54.252],[23.395,54.217],[23.424,54.179],[23.452,54.178],[23.492,54.148],[23.527,54.046],[23.483,53.989],[23.513,53.951],[23.617,53.927],[23.717,53.934],[23.805,53.896],[23.813,53.942],[23.951,53.961],[23.988,53.926],[24.196,53.964],[24.341,53.901],[24.444,53.901],[24.623,54.002],[24.697,54.019],[24.692,53.965],[24.743,53.967],[24.853,54.029],[24.771,54.111],[24.969,54.176],[24.991,54.142],[25.073,54.134],[25.192,54.219],[25.227,54.263],[25.356,54.265],[25.509,54.303],[25.568,54.252],[25.515,54.178],[25.547,54.149],[25.649,54.126],[25.711,54.167],[25.786,54.157],[25.786,54.233],[25.685,54.317],[25.554,54.316],[25.538,54.332],[25.634,54.421],[25.622,54.466],[25.648,54.487],[25.68,54.532],[25.76,54.573],[25.741,54.801],[25.895,54.934],[25.991,54.957],[26.059,54.946],[26.134,54.989],[26.204,54.997],[26.269,55.08],[26.232,55.104],[26.306,55.125],[26.351,55.153],[26.462,55.128],[26.515,55.161],[26.548,55.142],[26.692,55.167],[26.681,55.198],[26.73,55.218],[26.73,55.242],[26.835,55.282],[26.833,55.304],[26.809,55.316],[26.671,55.339],[26.571,55.326],[26.449,55.348],[26.552,55.403],[26.551,55.509],[26.632,55.579],[26.632,55.68],[26.582,55.675],[26.467,55.704],[26.396,55.712],[26.185,55.868],[26.038,55.959],[25.9,56.001],[25.859,56.002],[25.818,56.054],[25.692,56.089],[25.686,56.147],[25.536,56.167],[25.398,56.157],[25.231,56.191],[25.093,56.188],[25.058,56.267],[24.89,56.467]]]]}},{"type":"Feature","properties":{"code":"LU","name":"Luxembourg"},"geometry":{"type":"MultiPolygon","coordinates":[[[[6.138,50.13],[6.114,50.137],[6.12,50.164],[6.086,50.172],[6.064,50.153],[6.031,50.164],[6.025,50.183],[5.965,50.173],[5.959,50.133],[5.895,50.115],[5.886,50.078],[5.855,50.063],[5.869,50.046],[5.855,50.027],[5.819,50.013],[5.823,49.997],[5.84,49.989],[5.835,49.978],[5.812,49.971],[5.808,49.965],[5.773,49.961],[5.773,49.936],[5.736,49.898],[5.784,49.879],[5.753,49.871],[5.759,49.856],[5.746,49.854],[5.759,49.848],[5.75,49.847],[5.75,49.839],[5.741,49.838],[5.74,49.835],[5.748,49.824],[5.744,49.821],[5.75,49.814],[5.754,49.792],[5.789,49.796],[5.822,49.75],[5.831,49.747],[5.826,49.724],[5.842,49.722],[5.865,49.727],[5.887,49.71],[5.865,49.693],[5.862,49.679],[5.907,49.664],[5.902,49.651],[5.906,49.639],[5.886,49.635],[5.884,49.628],[5.876,49.62],[5.876,49.609],[5.848,49.597],[5.85,49.587],[5.87,49.588],[5.873,49.575],[5.842,49.561],[5.847,49.557],[5.841,49.553],[5.818,49.548],[5.809,49.542],[5.817,49.538],[5.836,49.542],[5.845,49.53],[5.835,49.527],[5.834,49.522],[5.866,49.5],[5.941,49.5],[5.942,49.496],[5.969,49.491],[5.977,49.455],[6.026,49.455],[6.027,49.448],[6.042,49.448],[6.056,49.467],[6.079,49.464],[6.084,49.456],[6.101,49.453],[6.098,49.464],[6.103,49.471],[6.123,49.474],[6.128,49.494],[6.143,49.488],[6.161,49.493],[6.154,49.502],[6.174,49.509],[6.195,49.505],[6.241,49.514],[6.25,49.506],[6.279,49.503],[6.288,49.485],[6.369,49.459],[6.368,49.469],[6.369,49.489],[6.368,49.504],[6.357,49.529],[6.381,49.552],[6.382,49.559],[6.358,49.571],[6.367,49.578],[6.38,49.576],[6.383,49.58],[6.375,49.589],[6.385,49.599],[6.398,49.601],[6.419,49.617],[6.441,49.657],[6.438,49.66],[6.427,49.661],[6.429,49.669],[6.447,49.678],[6.46,49.691],[6.48,49.698],[6.498,49.711],[6.506,49.714],[6.504,49.718],[6.497,49.722],[6.495,49.726],[6.503,49.727],[6.514,49.721],[6.518,49.724],[6.502,49.733],[6.502,49.753],[6.516,49.76],[6.518,49.769],[6.511,49.775],[6.517,49.783],[6.505,49.79],[6.522,49.798],[6.531,49.807],[6.521,49.813],[6.512,49.801],[6.506,49.809],[6.487,49.813],[6.471,49.823],[6.454,49.812],[6.441,49.814],[6.429,49.811],[6.425,49.816],[6.4,49.82],[6.366,49.85],[6.343,49.85],[6.336,49.838],[6.321,49.837],[6.323,49.851],[6.31,49.87],[6.297,49.867],[6.289,49.876],[6.261,49.882],[6.235,49.9],[6.229,49.921],[6.219,49.924],[6.226,49.929],[6.221,49.95],[6.199,49.951],[6.191,49.97],[6.18,49.966],[6.186,49.956],[6.179,49.954],[6.165,49.971],[6.17,49.985],[6.141,49.996],[6.149,50.009],[6.138,50.011],[6.13,50.018],[6.133,50.02],[6.138,50.015],[6.147,50.022],[6.13,50.029],[6.135,50.041],[6.113,50.059],[6.121,50.092],[6.138,50.13]]]]}},{"type":"Feature","properties":{"code":"MO","name":"Macau"},"geometry":{"type":"MultiPolygon","coordinates":[[[[113.549,22.145],[113.548,22.109],[113.572,22.077],[113.63,22.108],[113.605,22.205],[113.571,22.204],[113.569,22.21],[113.551,22.217],[113.543,22.217],[113.541,22.213],[113.536,22.214],[113.533,22.212],[113.536,22.206],[113.527,22.183],[113.541,22.155],[113.549,22.145]]]]}},{"type":"Feature","properties":{"code":"MG","name":"Madagascar"},"geometry":{"type":"MultiPolygon","coordinates":[[[[51.573,-12.258],[46.615,-11.362],[42.147,-19.633],[43.784,-25.818],[47.946,-25.682],[51.573,-12.258]]]]}},{"type":"Feature","properties":{"code":"PT","name":"Madeira","country":"Portugal"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-17.342,32.901],[-17.35,32.615],[-16.631,32.594],[-16.646,32.901],[-17.342,32.901]]]]}},{"type":"Feature","properties":{"code":"MW","name":"Malawi"},"geometry":{"type":"MultiPolygon","coordinates":[[[[33.481,-9.624],[33.316,-9.486],[33.149,-9.493],[32.994,-9.367],[32.954,-9.401],[33.005,-9.513],[33.003,-9.631],[33.055,-9.613],[33.102,-9.665],[33.121,-9.589],[33.209,-9.611],[33.315,-9.824],[33.366,-9.811],[33.379,-9.91],[33.313,-10.051],[33.539,-10.201],[33.548,-10.361],[33.707,-10.569],[33.476,-10.785],[33.28,-10.844],[33.26,-10.889],[33.397,-11.153],[33.293,-11.379],[33.293,-11.435],[33.237,-11.406],[33.243,-11.593],[33.327,-11.592],[33.339,-11.913],[33.26,-12.142],[33.37,-12.349],[33.476,-12.325],[33.545,-12.36],[33.375,-12.541],[33.282,-12.547],[33.188,-12.614],[33.059,-12.596],[32.944,-12.769],[32.967,-12.883],[33.022,-12.887],[32.983,-13.127],[33.008,-13.195],[32.861,-13.473],[32.842,-13.528],[32.737,-13.577],[32.684,-13.558],[32.665,-13.6],[32.687,-13.643],[32.783,-13.648],[32.845,-13.716],[32.77,-13.772],[32.79,-13.808],[32.89,-13.83],[32.99,-13.957],[33.03,-14.05],[33.076,-13.984],[33.167,-13.94],[33.242,-14],[33.667,-14.613],[33.725,-14.499],[33.885,-14.517],[33.929,-14.479],[34.086,-14.489],[34.187,-14.438],[34.224,-14.436],[34.345,-14.399],[34.358,-14.387],[34.393,-14.395],[34.419,-14.432],[34.446,-14.477],[34.451,-14.499],[34.476,-14.534],[34.489,-14.536],[34.496,-14.551],[34.524,-14.567],[34.54,-14.598],[34.551,-14.645],[34.535,-14.678],[34.521,-14.683],[34.545,-14.747],[34.567,-14.773],[34.615,-14.996],[34.575,-15.306],[34.431,-15.448],[34.45,-15.609],[34.252,-15.903],[34.431,-16.047],[34.403,-16.209],[35.048,-16.832],[35.138,-16.817],[35.17,-16.935],[35.048,-17],[35.092,-17.132],[35.306,-17.124],[35.271,-16.938],[35.309,-16.829],[35.272,-16.694],[35.142,-16.568],[35.258,-16.479],[35.302,-16.221],[35.434,-16.114],[35.524,-16.154],[35.701,-16.101],[35.805,-16.039],[35.853,-15.419],[35.788,-15.174],[35.918,-14.895],[35.872,-14.895],[35.869,-14.675],[35.53,-14.277],[35.48,-14.156],[34.862,-13.49],[34.603,-13.485],[34.378,-12.174],[34.461,-12.017],[34.707,-12.157],[34.829,-12.048],[34.579,-11.878],[34.642,-11.575],[34.963,-11.574],[34.912,-11.398],[34.794,-11.322],[34.633,-11.117],[34.612,-11.016],[34.67,-10.938],[34.659,-10.683],[34.576,-10.563],[34.519,-10.123],[34.545,-10.068],[34.039,-9.494],[33.958,-9.541],[33.964,-9.622],[33.933,-9.716],[33.767,-9.585],[33.481,-9.624]]]]}},{"type":"Feature","properties":{"code":"MY","name":"Malay Peninsula"},"geometry":{"type":"MultiPolygon","coordinates":[[[[102.463,7.225],[102.091,6.235],[102.081,6.227],[102.077,6.193],[102.092,6.142],[102.018,6.054],[101.992,6.041],[101.971,6.02],[101.971,6.006],[101.947,5.984],[101.928,5.855],[101.918,5.843],[101.892,5.839],[101.801,5.745],[101.751,5.791],[101.698,5.759],[101.58,5.935],[101.255,5.786],[101.258,5.711],[101.141,5.616],[100.988,5.795],[101.027,5.91],[101.087,5.919],[101.124,6.114],[101.062,6.142],[101.126,6.194],[101.103,6.256],[100.859,6.249],[100.81,6.451],[100.748,6.462],[100.744,6.508],[100.67,6.451],[100.43,6.524],[100.424,6.518],[100.418,6.519],[100.412,6.523],[100.354,6.549],[100.319,6.654],[100.326,6.659],[100.327,6.665],[100.319,6.664],[100.316,6.668],[100.308,6.665],[100.297,6.684],[100.195,6.726],[100.12,6.421],[100.076,6.404],[99.919,6.502],[99.501,6.445],[99.319,5.999],[99.758,3.865],[103.037,1.304],[103.566,1.197],[103.627,1.353],[103.675,1.432],[103.722,1.461],[103.742,1.45],[103.764,1.452],[103.812,1.48],[103.864,1.463],[103.896,1.428],[103.934,1.429],[104.001,1.424],[104.023,1.444],[104.046,1.447],[104.073,1.433],[104.089,1.42],[104.092,1.397],[104.081,1.36],[104.123,1.277],[104.347,1.335],[104.567,1.443],[105.014,3.249],[102.463,7.225]]]]}},{"type":"Feature","properties":{"code":"MY","name":"Malaysian Borneo"},"geometry":{"type":"MultiPolygon","coordinates":[[[[109.626,1.992],[109.538,1.918],[109.579,1.806],[109.664,1.8],[109.664,1.604],[110.354,0.989],[110.492,0.881],[110.624,0.873],[111.23,1.083],[111.554,0.979],[111.828,0.993],[111.946,1.12],[112.157,1.17],[112.213,1.441],[112.486,1.565],[113.021,1.578],[113.014,1.428],[113.647,1.239],[114.038,1.448],[114.579,1.5],[114.807,1.924],[114.807,2.217],[115.172,2.497],[115.113,2.829],[115.537,3.148],[115.583,3.935],[115.902,4.377],[117.258,4.351],[117.473,4.189],[117.676,4.165],[118.065,4.166],[118.939,4.09],[119.529,5.357],[117.985,6.275],[117.939,6.898],[117.177,7.528],[116.795,7.439],[115.025,5.35],[115.162,5.01],[115.151,4.876],[115.207,4.826],[115.278,4.637],[115.285,4.423],[115.363,4.336],[115.313,4.308],[115.1,4.391],[115.077,4.534],[115.041,4.637],[115.023,4.741],[115.03,4.821],[115.05,4.903],[114.994,4.882],[114.97,4.811],[114.888,4.819],[114.827,4.751],[114.773,4.729],[114.832,4.424],[114.88,4.426],[114.785,4.122],[114.642,4.007],[114.499,4.131],[114.442,4.276],[114.322,4.255],[114.322,4.349],[114.269,4.499],[114.158,4.57],[114.074,4.584],[114.102,4.761],[109.626,1.992]]]]}},{"type":"Feature","properties":{"code":"MV","name":"Maldives"},"geometry":{"type":"MultiPolygon","coordinates":[[[[71.978,7.406],[72.919,-0.972],[73.795,-0.478],[74.302,7.045],[71.978,7.406]]]]}},{"type":"Feature","properties":{"code":"ML","name":"Mali"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-4.834,24.999],[-6.572,25],[-5.607,16.499],[-5.334,16.334],[-5.502,15.501],[-9.33,15.5],[-9.311,15.694],[-9.333,15.704],[-9.447,15.606],[-9.404,15.44],[-10.717,15.422],[-10.909,15.11],[-11.435,15.623],[-11.707,15.516],[-11.949,14.761],[-12.239,14.763],[-11.93,13.845],[-12.069,13.71],[-11.833,13.333],[-11.63,13.392],[-11.399,12.978],[-11.375,12.408],[-11.5,12.178],[-11.241,12.013],[-10.998,12.246],[-10.804,12.105],[-10.719,11.916],[-10.306,12.246],[-9.714,12.023],[-9.639,12.183],[-9.321,12.29],[-9.381,12.484],[-9.137,12.509],[-8.948,12.348],[-8.809,11.667],[-8.401,11.375],[-8.669,10.994],[-8.351,11.062],[-8.267,10.918],[-8.326,10.693],[-8.227,10.417],[-8.102,10.446],[-7.958,10.27],[-7.98,10.171],[-7.921,10.156],[-7.63,10.463],[-7.545,10.409],[-7.523,10.466],[-7.446,10.446],[-7.371,10.247],[-7.133,10.249],[-7.06,10.147],[-7.01,10.158],[-6.974,10.216],[-7.012,10.251],[-6.939,10.353],[-6.682,10.351],[-6.635,10.669],[-6.53,10.591],[-6.428,10.569],[-6.406,10.699],[-6.325,10.686],[-6.248,10.742],[-6.173,10.47],[-6.189,10.242],[-5.995,10.197],[-5.781,10.44],[-5.651,10.468],[-5.511,10.432],[-5.466,10.561],[-5.471,10.753],[-5.416,10.846],[-5.493,11.075],[-5.33,11.134],[-5.326,11.216],[-5.259,11.248],[-5.255,11.369],[-5.207,11.438],[-5.229,11.604],[-5.293,11.617],[-5.264,11.757],[-5.403,11.833],[-5.264,11.848],[-5.079,11.979],[-4.729,12.016],[-4.707,12.067],[-4.63,12.065],[-4.625,12.132],[-4.548,12.139],[-4.577,12.199],[-4.414,12.319],[-4.474,12.713],[-4.238,12.715],[-4.218,12.957],[-4.345,13.129],[-3.965,13.498],[-3.906,13.444],[-3.963,13.382],[-3.791,13.367],[-3.545,13.178],[-3.431,13.159],[-3.435,13.273],[-3.236,13.29],[-3.284,13.542],[-3.264,13.707],[-2.882,13.649],[-2.908,13.812],[-2.847,14.055],[-2.662,14.147],[-2.476,14.297],[-2.102,14.149],[-1.999,14.19],[-1.979,14.477],[-1.681,14.5],[-1.322,14.728],[-1.059,14.792],[-0.72,15.087],[-0.247,15.078],[0.066,14.97],[0.239,15.001],[0.726,14.959],[0.967,14.983],[1.313,15.28],[3.018,15.346],[3.031,15.422],[3.504,15.359],[4.199,16.399],[4.218,17.001],[4.268,17.004],[4.267,19.142],[3.361,18.974],[3.125,19.137],[3.246,19.817],[1.21,20.735],[1.157,21.128],[-4.834,24.999]]]]}},{"type":"Feature","properties":{"code":"MT","name":"Malta"},"geometry":{"type":"MultiPolygon","coordinates":[[[[14.859,35.793],[14.145,36.218],[14.098,35.74],[14.859,35.793]]]]}},{"type":"Feature","properties":{"code":"ID","name":"Maluku Islands","country":"Indonesia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[129.632,2.214],[128.343,3.903],[123.79,-0.868],[125.877,-7.499],[125.585,-7.953],[125.877,-8.318],[127.421,-8.225],[127.552,-9.051],[135.49,-9.228],[135.355,-5.014],[132.831,-4.703],[130.847,-2.611],[128.406,-2.303],[129.715,-0.247],[129.632,2.214]]]]}},{"type":"Feature","properties":{"code":"MH","name":"Marshall Islands"},"geometry":{"type":"MultiPolygon","coordinates":[[[[169,3.9],[173.537,5.707],[169.291,15.771],[159.047,10.591],[169,3.9]]]]}},{"type":"Feature","properties":{"code":"MQ","name":"Martinique","country":"France"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-59.96,14.203],[-61.078,15.251],[-61.693,14.265],[-59.96,14.203]]]]}},{"type":"Feature","properties":{"code":"MR","name":"Mauritania"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-5.607,16.499],[-6.572,25],[-4.834,24.999],[-8.667,27.316],[-8.667,25.999],[-12,25.999],[-12.003,23.454],[-12.15,23.419],[-12.362,23.319],[-12.574,23.29],[-13.004,23.023],[-13.108,22.895],[-13.153,22.756],[-13.084,22.539],[-13.015,21.333],[-16.955,21.34],[-16.998,21.121],[-17.036,21.054],[-17.04,20.996],[-17.068,20.927],[-17.07,20.857],[-17.047,20.764],[-16.509,16.09],[-16.49,16.05],[-16.448,16.098],[-16.443,16.206],[-16.27,16.516],[-15.651,16.503],[-15.006,16.65],[-14.321,16.615],[-13.801,16.14],[-13.431,16.09],[-13.11,15.521],[-12.239,14.763],[-11.949,14.761],[-11.707,15.516],[-11.435,15.623],[-10.909,15.11],[-10.717,15.422],[-9.404,15.44],[-9.447,15.606],[-9.333,15.704],[-9.311,15.694],[-9.33,15.5],[-5.502,15.501],[-5.334,16.334],[-5.607,16.499]]]]}},{"type":"Feature","properties":{"code":"MU","name":"Mauritius"},"geometry":{"type":"MultiPolygon","coordinates":[[[[56.7,-19.525],[56.801,-21.15],[65.621,-19.477],[56.7,-19.525]]]]}},{"type":"Feature","properties":{"code":"YT","name":"Mayotte"},"geometry":{"type":"MultiPolygon","coordinates":[[[[44.591,-12.839],[45.548,-13.224],[45.22,-12.404],[44.591,-12.839]]]]}},{"type":"Feature","properties":{"code":"ES","name":"Melilla","country":"Spain"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-2.919,35.339],[-2.96,35.316],[-2.966,35.305],[-2.97,35.295],[-2.97,35.289],[-2.965,35.288],[-2.968,35.283],[-2.965,35.28],[-2.954,35.273],[-2.951,35.266],[-2.939,35.267],[-2.923,35.275],[-2.919,35.339]]]]}},{"type":"Feature","properties":{"code":"MX","name":"Mexico"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-117.124,32.534],[-117.386,32.547],[-118.923,28.966],[-103.601,17.267],[-92.372,14.393],[-92.226,14.534],[-92.145,14.68],[-92.182,14.841],[-92.142,14.886],[-92.145,14.981],[-92.062,15.074],[-92.21,15.261],[-91.732,16.074],[-90.446,16.076],[-90.405,16.405],[-90.612,16.498],[-90.691,16.707],[-91.044,16.922],[-91.438,17.254],[-90.992,17.252],[-90.987,17.817],[-89.15,17.816],[-89.151,17.951],[-89.038,18.007],[-88.872,17.895],[-88.715,18.071],[-88.482,18.492],[-88.327,18.49],[-88.299,18.476],[-88.266,18.476],[-88.032,18.418],[-88.032,18.167],[-87.907,18.152],[-87.876,18.183],[-87.867,18.2],[-87.857,18.183],[-87.848,18.185],[-86.924,17.615],[-86.446,22.027],[-90.428,21.279],[-93.933,18.49],[-97.603,22.147],[-97.097,25.967],[-97.359,25.922],[-97.373,25.839],[-97.425,25.84],[-97.457,25.869],[-97.498,25.899],[-97.52,25.885],[-97.665,26.017],[-97.952,26.063],[-97.97,26.052],[-98.246,26.072],[-98.271,26.095],[-98.305,26.105],[-98.351,26.151],[-99.005,26.392],[-99.031,26.412],[-99.085,26.398],[-99.536,27.309],[-99.497,27.437],[-99.482,27.471],[-99.48,27.49],[-99.502,27.5],[-99.53,27.497],[-99.515,27.558],[-99.554,27.613],[-100.5,28.661],[-100.512,28.707],[-100.507,28.741],[-100.523,28.756],[-100.598,28.882],[-100.637,28.908],[-100.673,29.097],[-100.797,29.247],[-100.88,29.296],[-100.941,29.334],[-100.946,29.345],[-100.967,29.348],[-101.011,29.369],[-101.057,29.447],[-101.473,29.774],[-102.606,29.819],[-103.158,28.939],[-104.378,29.543],[-104.394,29.554],[-104.397,29.571],[-104.517,29.647],[-104.777,30.424],[-106.004,31.392],[-106.09,31.406],[-106.203,31.463],[-106.237,31.513],[-106.246,31.542],[-106.281,31.562],[-106.303,31.622],[-106.334,31.663],[-106.349,31.697],[-106.372,31.712],[-106.38,31.732],[-106.418,31.752],[-106.434,31.755],[-106.452,31.765],[-106.467,31.76],[-106.473,31.751],[-106.488,31.748],[-106.501,31.757],[-106.51,31.762],[-106.513,31.769],[-106.523,31.775],[-106.529,31.784],[-108.209,31.785],[-108.21,31.333],[-111.075,31.332],[-114.82,32.496],[-114.795,32.557],[-114.811,32.555],[-114.806,32.62],[-114.767,32.641],[-114.719,32.719],[-115.881,32.636],[-117.124,32.534]]]]}},{"type":"Feature","properties":{"code":"US","name":"Midway Atoll","country":"United States"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-177.229,28.268],[-177.481,28.302],[-177.402,28.138],[-177.229,28.268]]]]}},{"type":"Feature","properties":{"code":"MD","name":"Moldova"},"geometry":{"type":"MultiPolygon","coordinates":[[[[27.744,48.459],[27.666,48.44],[27.59,48.463],[27.589,48.492],[27.469,48.454],[27.443,48.412],[27.377,48.41],[27.376,48.444],[27.322,48.443],[27.279,48.375],[27.134,48.373],[27.081,48.432],[27.023,48.425],[27.038,48.377],[26.934,48.366],[26.856,48.411],[26.713,48.404],[26.828,48.316],[26.792,48.291],[26.684,48.358],[26.628,48.258],[26.812,48.25],[26.877,48.199],[26.943,48.197],[26.98,48.158],[26.961,48.13],[27.041,48.125],[27.03,48.091],[27.156,47.985],[27.162,47.924],[27.291,47.737],[27.255,47.714],[27.322,47.64],[27.398,47.595],[27.479,47.481],[27.557,47.466],[27.603,47.325],[27.687,47.29],[27.732,47.292],[27.819,47.138],[28.091,46.976],[28.122,46.823],[28.248,46.643],[28.223,46.505],[28.258,46.433],[28.189,46.353],[28.199,46.319],[28.109,46.229],[28.137,46.181],[28.086,46.011],[28.131,45.928],[28.166,45.642],[28.089,45.605],[28.187,45.474],[28.211,45.469],[28.302,45.547],[28.418,45.517],[28.431,45.485],[28.514,45.5],[28.493,45.567],[28.542,45.581],[28.516,45.661],[28.479,45.67],[28.528,45.738],[28.704,45.78],[28.699,45.818],[28.785,45.835],[28.744,45.967],[28.98,46.004],[29.006,46.05],[28.946,46.092],[29.067,46.197],[28.95,46.259],[28.985,46.318],[29.004,46.315],[28.931,46.457],[29.012,46.462],[29.024,46.496],[29.235,46.554],[29.249,46.379],[29.354,46.495],[29.499,46.459],[29.594,46.355],[29.676,46.36],[29.664,46.422],[29.745,46.456],[29.883,46.359],[29.941,46.401],[30.091,46.387],[30.168,46.41],[30.025,46.451],[29.889,46.543],[29.944,46.56],[29.974,46.753],[29.945,46.801],[29.988,46.824],[29.874,46.882],[29.755,46.86],[29.73,46.922],[29.571,46.948],[29.621,47.051],[29.61,47.099],[29.53,47.079],[29.497,47.129],[29.577,47.136],[29.55,47.25],[29.597,47.255],[29.573,47.365],[29.487,47.36],[29.479,47.304],[29.399,47.302],[29.326,47.447],[29.186,47.434],[29.117,47.55],[29.224,47.6],[29.222,47.736],[29.273,47.8],[29.207,47.804],[29.278,47.889],[29.198,47.893],[29.172,47.99],[28.931,47.963],[28.841,48.034],[28.852,48.125],[28.699,48.131],[28.539,48.175],[28.484,48.074],[28.425,48.12],[28.437,48.158],[28.387,48.176],[28.34,48.131],[28.306,48.14],[28.306,48.16],[28.349,48.179],[28.37,48.205],[28.355,48.25],[28.325,48.234],[28.286,48.232],[28.193,48.207],[28.177,48.26],[28.075,48.235],[28.099,48.312],[28.045,48.327],[27.959,48.324],[27.884,48.367],[27.875,48.404],[27.819,48.419],[27.792,48.442],[27.744,48.459]]]]}},{"type":"Feature","properties":{"code":"MC","name":"Monaco"},"geometry":{"type":"MultiPolygon","coordinates":[[[[7.478,43.733],[7.438,43.75],[7.439,43.752],[7.437,43.752],[7.436,43.75],[7.43,43.749],[7.428,43.744],[7.424,43.741],[7.423,43.742],[7.421,43.74],[7.412,43.734],[7.413,43.733],[7.413,43.732],[7.411,43.732],[7.409,43.73],[7.424,43.722],[7.478,43.733]]]]}},{"type":"Feature","properties":{"code":"MN","name":"Mongolia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[102.14,51.356],[101.504,51.505],[101.391,51.458],[100.611,51.73],[99.892,51.749],[99.756,51.901],[99.279,51.969],[98.878,52.146],[98.741,51.864],[98.332,51.718],[98.221,51.466],[98.053,51.467],[97.833,51.002],[98.015,50.867],[97.969,50.78],[98.064,50.613],[98.314,50.5],[98.295,50.336],[97.852,49.913],[97.769,49.999],[97.564,49.928],[97.568,49.843],[97.246,49.747],[96.974,49.884],[95.801,50.042],[95.748,49.979],[95.025,49.969],[94.972,50.047],[94.612,50.042],[94.495,50.178],[94.393,50.222],[94.308,50.575],[92.996,50.632],[93.011,50.79],[92.447,50.788],[92.072,50.696],[91.86,50.737],[89.597,49.909],[89.707,49.725],[88.825,49.448],[88.424,49.488],[88.172,49.469],[88.155,49.303],[87.99,49.181],[87.813,49.174],[87.882,48.959],[87.738,48.896],[88.079,48.714],[87.964,48.585],[88.589,48.345],[88.583,48.219],[88.801,48.113],[88.932,48.103],[89.071,47.985],[89.555,48.042],[89.766,47.827],[90.065,47.882],[90.109,47.737],[90.336,47.683],[90.489,47.418],[90.485,47.304],[90.761,46.994],[90.84,46.995],[91.036,46.729],[91.015,46.582],[91.077,46.573],[90.896,46.307],[90.997,46.142],[91.03,46.042],[90.709,45.734],[90.651,45.493],[90.892,45.197],[91.64,45.074],[93.512,44.96],[94.1,44.71],[94.72,44.353],[95.012,44.253],[95.398,44.281],[95.329,44.024],[95.526,43.994],[95.895,43.253],[96.357,42.904],[96.379,42.721],[97.178,42.796],[99.507,42.565],[100.333,42.682],[100.85,42.671],[101.805,42.501],[102.076,42.225],[102.724,42.147],[103.928,41.782],[104.523,41.871],[104.517,41.661],[105.012,41.632],[106.765,42.287],[107.248,42.361],[107.298,42.414],[107.497,42.462],[107.573,42.409],[108.845,42.402],[109.007,42.453],[109.452,42.448],[109.894,42.631],[110.084,42.641],[110.433,42.783],[111.015,43.329],[111.591,43.512],[111.798,43.664],[111.938,43.687],[111.963,43.816],[111.405,44.346],[111.763,44.98],[111.987,45.091],[112.416,45.069],[112.747,44.863],[113.709,44.729],[114.517,45.272],[114.548,45.383],[114.746,45.436],[114.945,45.374],[115.603,45.447],[116.17,45.686],[116.274,45.786],[116.24,45.878],[116.267,45.965],[116.586,46.302],[116.756,46.331],[116.832,46.386],[117.366,46.363],[117.418,46.579],[117.607,46.598],[117.696,46.51],[118.305,46.735],[118.787,46.687],[118.834,46.777],[118.9,46.771],[118.926,46.728],[119.005,46.743],[119.104,46.655],[119.25,46.648],[119.328,46.614],[119.428,46.638],[119.653,46.623],[119.681,46.59],[119.774,46.629],[119.805,46.676],[119.893,46.664],[119.912,46.901],[119.855,46.922],[119.712,47.192],[119.624,47.246],[119.56,47.249],[119.549,47.295],[119.32,47.426],[119.359,47.481],[119.14,47.54],[119.123,47.665],[118.756,47.769],[118.558,47.993],[118.297,48.002],[118.227,48.039],[118.11,48.04],[118.037,48.01],[117.802,48.017],[117.502,47.772],[117.379,47.636],[116.972,47.873],[116.674,47.89],[116.447,47.837],[116.219,47.885],[115.943,47.677],[115.571,47.92],[115.521,48.154],[115.811,48.257],[115.789,48.518],[116.066,48.817],[116.038,48.87],[116.712,49.838],[116.625,49.929],[116.224,50.045],[115.736,49.877],[115.261,49.974],[114.97,50.193],[114.325,50.281],[113.202,49.834],[113.026,49.608],[110.645,49.182],[110.399,49.251],[110.244,49.167],[109.513,49.229],[109.18,49.347],[108.54,49.323],[108.279,49.532],[107.954,49.667],[107.961,49.932],[107.364,49.976],[107.117,50.042],[107,50.198],[106.803,50.302],[106.584,50.34],[106.511,50.344],[106.496,50.324],[106.472,50.319],[106.079,50.335],[106.056,50.406],[105.325,50.465],[103.703,50.14],[102.712,50.389],[102.322,50.68],[102.14,51.356]]]]}},{"type":"Feature","properties":{"code":"ME","name":"Montenegro"},"geometry":{"type":"MultiPolygon","coordinates":[[[[19.228,43.526],[19.157,43.539],[19.139,43.528],[19.049,43.504],[19.011,43.558],[18.914,43.503],[18.955,43.494],[18.961,43.45],[19.011,43.439],[19.041,43.397],[19.087,43.315],[19.082,43.297],[19.042,43.3],[19.008,43.25],[18.95,43.293],[18.958,43.329],[18.909,43.364],[18.839,43.348],[18.848,43.337],[18.853,43.324],[18.765,43.298],[18.698,43.252],[18.717,43.229],[18.666,43.206],[18.647,43.148],[18.663,43.039],[18.522,43.015],[18.491,42.956],[18.497,42.893],[18.494,42.864],[18.476,42.858],[18.459,42.817],[18.473,42.75],[18.568,42.721],[18.552,42.69],[18.546,42.692],[18.548,42.683],[18.574,42.644],[18.522,42.623],[18.555,42.584],[18.538,42.574],[18.498,42.584],[18.437,42.559],[18.443,42.511],[18.436,42.486],[18.522,42.423],[18.541,42.392],[19.155,41.919],[19.371,41.844],[19.382,41.885],[19.338,41.907],[19.346,41.957],[19.377,41.97],[19.369,42.026],[19.375,42.068],[19.407,42.1],[19.286,42.177],[19.42,42.33],[19.424,42.365],[19.484,42.408],[19.66,42.628],[19.732,42.663],[19.774,42.585],[19.747,42.574],[19.765,42.502],[19.823,42.466],[19.932,42.517],[20.008,42.511],[20.018,42.546],[20.078,42.556],[20.097,42.656],[20.029,42.711],[20.021,42.748],[20.049,42.777],[20.254,42.762],[20.279,42.819],[20.357,42.834],[20.345,42.907],[20.164,42.972],[20.149,42.991],[20.123,42.962],[20.054,42.996],[20.047,43.027],[19.989,43.054],[19.965,43.111],[19.926,43.085],[19.793,43.12],[19.769,43.16],[19.641,43.19],[19.627,43.229],[19.546,43.252],[19.53,43.316],[19.482,43.326],[19.443,43.388],[19.222,43.479],[19.228,43.526]]]]}},{"type":"Feature","properties":{"code":"MS","name":"Montserrat","country":"United Kingdom"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-61.915,16.512],[-62.102,16.973],[-62.583,16.689],[-61.915,16.512]]]]}},{"type":"Feature","properties":{"code":"MA","name":"Morocco"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-2.277,35.351],[-5.109,36.052],[-7.272,35.733],[-14.439,27.03],[-17.273,21.935],[-17.215,21.342],[-17.027,21.34],[-16.998,21.362],[-16.443,21.397],[-14.785,21.366],[-14.473,21.638],[-14.481,22.009],[-14.129,22.416],[-14.104,22.755],[-13.756,23.772],[-13.006,24.019],[-12.921,24.395],[-12.123,25.137],[-12.06,26.044],[-11.621,26.052],[-11.386,26.611],[-11.236,26.72],[-11.357,26.851],[-10.684,26.91],[-9.82,26.714],[-9.57,26.9],[-9.087,26.986],[-8.718,26.99],[-8.775,27.667],[-8.669,27.667],[-8.671,28.712],[-7.616,29.363],[-6.958,29.509],[-6.784,29.446],[-6.7,29.516],[-5.756,29.614],[-5.721,29.523],[-5.588,29.481],[-5.217,29.953],[-4.606,30.283],[-4.318,30.532],[-3.647,30.675],[-3.654,30.856],[-3.549,31.05],[-3.771,31.15],[-3.776,31.319],[-3.664,31.392],[-3.663,31.634],[-2.828,31.795],[-2.939,32.066],[-2.462,32.166],[-1.228,32.078],[-1.157,32.121],[-1.245,32.192],[-1.25,32.33],[-0.991,32.525],[-1.378,32.736],[-1.542,32.955],[-1.462,33.05],[-1.671,33.271],[-1.595,33.599],[-1.735,33.717],[-1.647,34.104],[-1.78,34.39],[-1.698,34.481],[-1.846,34.619],[-1.737,34.742],[-1.975,34.886],[-1.978,34.932],[-2.047,34.932],[-2.214,35.044],[-2.212,35.085],[-2.277,35.351]],[[-2.919,35.339],[-2.923,35.275],[-2.939,35.267],[-2.951,35.266],[-2.954,35.273],[-2.965,35.28],[-2.968,35.283],[-2.965,35.288],[-2.97,35.289],[-2.97,35.295],[-2.966,35.305],[-2.96,35.316],[-2.919,35.339]],[[-3.906,35.215],[-3.893,35.227],[-3.884,35.208],[-3.906,35.215]],[[-4.302,35.174],[-4.294,35.171],[-4.301,35.171],[-4.302,35.174]],[[-2.403,35.169],[-2.46,35.165],[-2.433,35.207],[-2.403,35.169]],[[-5.385,35.926],[-5.212,35.901],[-5.344,35.871],[-5.358,35.874],[-5.373,35.884],[-5.385,35.926]]]]}},{"type":"Feature","properties":{"code":"MZ","name":"Mozambique"},"geometry":{"type":"MultiPolygon","coordinates":[[[[40.742,-10.257],[40.443,-10.462],[40.003,-10.803],[39.582,-10.96],[39.244,-11.174],[38.89,-11.17],[38.473,-11.42],[38.216,-11.273],[37.936,-11.262],[37.839,-11.312],[37.766,-11.534],[37.394,-11.689],[36.803,-11.568],[36.621,-11.729],[36.191,-11.7],[36.191,-11.576],[35.828,-11.411],[35.636,-11.559],[34.963,-11.574],[34.642,-11.575],[34.579,-11.878],[34.829,-12.048],[34.707,-12.157],[34.461,-12.017],[34.378,-12.174],[34.603,-13.485],[34.862,-13.49],[35.48,-14.156],[35.53,-14.277],[35.869,-14.675],[35.872,-14.895],[35.918,-14.895],[35.788,-15.174],[35.853,-15.419],[35.805,-16.039],[35.701,-16.101],[35.524,-16.154],[35.434,-16.114],[35.302,-16.221],[35.258,-16.479],[35.142,-16.568],[35.272,-16.694],[35.309,-16.829],[35.271,-16.938],[35.306,-17.124],[35.092,-17.132],[35.048,-17],[35.17,-16.935],[35.138,-16.817],[35.048,-16.832],[34.403,-16.209],[34.431,-16.047],[34.252,-15.903],[34.45,-15.609],[34.431,-15.448],[34.575,-15.306],[34.615,-14.996],[34.567,-14.773],[34.545,-14.747],[34.521,-14.683],[34.535,-14.678],[34.551,-14.645],[34.54,-14.598],[34.524,-14.567],[34.496,-14.551],[34.489,-14.536],[34.476,-14.534],[34.451,-14.499],[34.446,-14.477],[34.419,-14.432],[34.393,-14.395],[34.358,-14.387],[34.345,-14.399],[34.224,-14.436],[34.187,-14.438],[34.086,-14.489],[33.929,-14.479],[33.885,-14.517],[33.725,-14.499],[33.667,-14.613],[33.242,-14],[30.221,-14.994],[30.419,-15.623],[30.426,-15.996],[30.916,-15.999],[30.978,-16.058],[31.132,-15.98],[31.306,-16.012],[31.425,-16.152],[31.68,-16.196],[31.902,-16.344],[31.913,-16.416],[32.028,-16.439],[32.285,-16.439],[32.428,-16.473],[32.71,-16.599],[32.699,-16.669],[32.789,-16.703],[32.977,-16.707],[32.911,-16.894],[32.841,-16.923],[32.966,-17.12],[33.005,-17.305],[33.043,-17.347],[32.966,-17.49],[32.985,-17.559],[33.049,-17.603],[32.941,-17.997],[33.032,-18.351],[33.023,-18.47],[32.886,-18.513],[32.886,-18.58],[32.95,-18.691],[32.902,-18.799],[32.825,-18.774],[32.701,-18.847],[32.734,-18.926],[32.699,-18.943],[32.721,-19.022],[32.84,-19.026],[32.871,-19.093],[32.851,-19.292],[32.78,-19.361],[32.783,-19.475],[32.844,-19.483],[32.847,-19.685],[32.95,-19.672],[33.065,-19.778],[33.012,-20.02],[32.93,-20.039],[32.86,-20.167],[32.86,-20.278],[32.662,-20.561],[32.552,-20.563],[32.481,-20.633],[32.516,-20.919],[32.371,-21.133],[32.482,-21.329],[32.412,-21.312],[31.383,-22.369],[31.306,-22.422],[31.558,-23.176],[31.565,-23.473],[31.679,-23.609],[31.702,-23.727],[31.774,-23.901],[31.877,-23.953],[31.904,-24.189],[31.983,-24.3],[32.032,-25.108],[32.017,-25.381],[31.979,-25.464],[32.006,-25.65],[31.926,-25.842],[31.974,-25.954],[32.009,-25.999],[32.086,-26.01],[32.104,-26.157],[32.074,-26.402],[32.134,-26.532],[32.133,-26.843],[32.194,-26.84],[32.223,-26.841],[32.296,-26.852],[32.352,-26.86],[33.028,-26.878],[35.409,-24.627],[41.396,-14.775],[40.742,-10.257]]]]}},{"type":"Feature","properties":{"code":"MM","name":"Myanmar"},"geometry":{"type":"MultiPolygon","coordinates":[[[[92.622,21.87],[92.598,21.609],[92.682,21.285],[92.602,21.246],[92.551,21.386],[92.432,21.37],[92.379,21.478],[92.201,21.337],[92.178,21.174],[92.261,21.057],[92.474,20.387],[93.977,15.94],[97.635,9.609],[98.126,9.441],[98.331,9.92],[98.473,9.958],[98.523,9.924],[98.552,9.928],[98.739,10.315],[98.819,10.528],[98.773,10.625],[98.785,10.684],[98.868,10.783],[99.007,10.855],[98.997,10.93],[99.023,10.972],[99.069,10.949],[99.328,11.285],[99.316,11.321],[99.395,11.393],[99.476,11.624],[99.567,11.627],[99.641,11.789],[99.649,11.827],[99.534,12.023],[99.564,12.148],[99.475,12.135],[99.409,12.606],[99.293,12.689],[99.189,12.848],[99.187,12.99],[99.106,13.058],[99.122,13.198],[99.206,13.206],[99.167,13.726],[98.974,14.049],[98.568,14.377],[98.249,14.83],[98.188,15.131],[98.22,15.213],[98.304,15.307],[98.405,15.253],[98.419,15.271],[98.394,15.342],[98.487,15.392],[98.56,15.335],[98.586,15.468],[98.541,15.654],[98.599,15.872],[98.57,16.046],[98.696,16.134],[98.838,16.117],[98.927,16.364],[98.845,16.424],[98.681,16.271],[98.638,16.474],[98.579,16.56],[98.57,16.628],[98.511,16.645],[98.518,16.676],[98.515,16.685],[98.516,16.694],[98.51,16.701],[98.497,16.69],[98.503,16.714],[98.47,16.736],[98.538,16.819],[98.496,16.845],[98.526,16.9],[98.394,17.063],[98.346,17.048],[98.104,17.338],[98.112,17.368],[97.918,17.545],[97.764,17.716],[97.668,17.88],[97.737,17.979],[97.608,18.238],[97.641,18.298],[97.562,18.339],[97.504,18.268],[97.345,18.546],[97.364,18.571],[97.526,18.494],[97.768,18.581],[97.738,18.885],[97.665,18.937],[97.737,18.981],[97.738,19.043],[97.835,19.1],[97.84,19.222],[97.786,19.268],[97.842,19.295],[97.788,19.394],[97.884,19.504],[97.847,19.558],[98.044,19.658],[98.033,19.809],[98.138,19.785],[98.249,19.679],[98.512,19.713],[98.561,19.678],[98.837,19.809],[98.987,19.742],[99.073,20.103],[99.203,20.129],[99.416,20.086],[99.529,20.148],[99.557,20.207],[99.461,20.362],[99.46,20.397],[99.683,20.321],[99.811,20.337],[99.864,20.444],[99.882,20.445],[99.885,20.446],[99.892,20.445],[99.893,20.443],[99.897,20.448],[99.905,20.449],[99.916,20.45],[99.957,20.463],[100.084,20.366],[100.196,20.682],[100.364,20.828],[100.511,20.822],[100.601,20.835],[100.646,20.883],[100.51,20.886],[100.553,21.028],[100.636,21.056],[100.727,21.318],[100.802,21.293],[101.002,21.396],[101.162,21.528],[101.152,21.561],[101.117,21.777],[100.873,21.674],[100.721,21.519],[100.579,21.456],[100.481,21.461],[100.429,21.543],[100.352,21.532],[100.259,21.47],[100.184,21.519],[100.162,21.487],[100.125,21.504],[100.108,21.599],[100.175,21.653],[100.127,21.705],[100.05,21.668],[99.987,21.711],[99.94,21.828],[99.991,21.971],[99.966,22.06],[99.854,22.042],[99.476,22.133],[99.332,22.097],[99.155,22.159],[99.192,22.17],[99.173,22.18],[99.288,22.41],[99.38,22.502],[99.382,22.575],[99.312,22.739],[99.457,22.857],[99.435,22.941],[99.542,22.9],[99.522,23.082],[99.341,23.131],[99.257,23.09],[99.046,23.122],[99.06,23.164],[98.886,23.187],[98.925,23.295],[98.94,23.314],[98.876,23.33],[98.921,23.369],[98.877,23.49],[98.829,23.479],[98.803,23.535],[98.884,23.596],[98.818,23.694],[98.829,23.729],[98.796,23.779],[98.682,23.805],[98.678,23.964],[98.896,24.106],[98.88,24.156],[98.853,24.13],[98.593,24.084],[98.545,24.131],[98.207,24.114],[98.078,24.08],[98.067,24.08],[98.061,24.078],[98.057,24.08],[98.053,24.074],[98.047,24.076],[97.996,24.049],[97.987,24.039],[97.94,24.02],[97.91,24.021],[97.886,24.005],[97.884,23.994],[97.888,23.986],[97.897,23.984],[97.897,23.979],[97.895,23.978],[97.888,23.974],[97.865,23.977],[97.843,23.976],[97.794,23.957],[97.795,23.948],[97.723,23.893],[97.647,23.846],[97.525,23.94],[97.624,24.005],[97.729,24.126],[97.753,24.169],[97.728,24.189],[97.73,24.23],[97.768,24.264],[97.719,24.297],[97.667,24.3],[97.656,24.338],[97.71,24.357],[97.67,24.453],[97.6,24.44],[97.528,24.437],[97.563,24.545],[97.565,24.728],[97.547,24.742],[97.554,24.749],[97.564,24.755],[97.566,24.765],[97.644,24.792],[97.702,24.846],[97.731,24.83],[97.765,24.829],[97.799,24.857],[97.729,24.913],[97.722,25.085],[97.77,25.115],[97.836,25.271],[97.925,25.208],[98.149,25.415],[98.126,25.507],[98.181,25.563],[98.168,25.627],[98.258,25.605],[98.313,25.553],[98.406,25.611],[98.541,25.851],[98.631,25.799],[98.708,25.862],[98.608,26.015],[98.571,26.115],[98.631,26.155],[98.669,26.092],[98.733,26.172],[98.678,26.245],[98.727,26.362],[98.775,26.62],[98.733,26.856],[98.696,27.565],[98.434,27.671],[98.425,27.554],[98.326,27.514],[98.14,27.948],[98.153,28.121],[97.901,28.378],[97.796,28.332],[97.707,28.506],[97.568,28.556],[97.505,28.497],[97.471,28.269],[97.417,28.298],[97.345,28.214],[97.313,28.068],[97.354,28.067],[97.388,28.013],[97.358,27.873],[97.299,27.922],[96.901,27.621],[96.914,27.458],[97.174,27.141],[97.147,27.09],[96.891,27.175],[96.853,27.206],[96.884,27.25],[96.739,27.366],[96.558,27.299],[96.408,27.298],[96.156,27.246],[96.049,27.194],[95.93,27.041],[95.816,27.013],[95.437,26.708],[95.303,26.654],[95.235,26.685],[95.058,26.454],[95.128,26.384],[95.114,26.102],[95.186,26.073],[94.801,25.494],[94.68,25.47],[94.575,25.203],[94.742,25.136],[94.739,25.005],[94.602,24.709],[94.553,24.708],[94.507,24.593],[94.453,24.567],[94.324,24.277],[94.302,24.238],[94.141,23.833],[93.921,23.958],[93.803,23.925],[93.76,24],[93.629,24.009],[93.506,23.944],[93.466,23.971],[93.414,24.079],[93.347,24.102],[93.324,24.045],[93.361,23.932],[93.391,23.929],[93.391,23.762],[93.435,23.683],[93.388,23.473],[93.4,23.388],[93.388,23.361],[93.369,23.354],[93.385,23.137],[93.288,23.005],[93.13,23.058],[93.134,22.925],[93.094,22.695],[93.134,22.596],[93.115,22.544],[93.135,22.459],[93.182,22.437],[93.2,22.254],[93.142,22.245],[93.157,22.187],[93.049,22.206],[92.993,22.06],[92.998,21.99],[92.939,22.027],[92.895,21.951],[92.862,22.055],[92.704,22.16],[92.675,22.035],[92.609,21.976],[92.622,21.87]]]]}},{"type":"Feature","properties":{"code":"NA","name":"Namibia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[14.287,-17.388],[13.959,-17.431],[13.362,-16.98],[12.971,-16.986],[12.521,-17.245],[12.071,-17.152],[11.751,-17.25],[11.621,-17.906],[15.381,-28.009],[16.449,-28.651],[16.466,-28.571],[16.599,-28.532],[16.904,-28.057],[17.154,-28.086],[17.458,-28.687],[18.999,-28.892],[19.999,-28.426],[19.998,-24.768],[19.999,-22],[20.998,-22],[20.999,-18.317],[21.456,-18.318],[23.1,-18.001],[23.296,-17.999],[23.611,-18.488],[24.194,-18.019],[24.406,-17.957],[24.575,-18.072],[24.63,-17.986],[24.719,-17.922],[24.734,-17.893],[24.956,-17.797],[25.059,-17.845],[25.169,-17.783],[25.264,-17.796],[25.002,-17.582],[24.709,-17.495],[24.562,-17.53],[24.387,-17.468],[24.328,-17.491],[24.236,-17.475],[23.475,-17.629],[21.427,-18.028],[21.143,-17.943],[18.842,-17.804],[18.392,-17.389],[14.287,-17.388]]]]}},{"type":"Feature","properties":{"code":"NR","name":"Nauru"},"geometry":{"type":"MultiPolygon","coordinates":[[[[166.952,0.148],[166.218,-0.798],[167.6,-0.883],[166.952,0.148]]]]}},{"type":"Feature","properties":{"code":"NP","name":"Nepal"},"geometry":{"type":"MultiPolygon","coordinates":[[[[88.134,27.88],[87.827,27.952],[87.727,27.809],[87.57,27.845],[87.117,27.841],[87.038,27.948],[86.756,28.042],[86.742,28.106],[86.563,28.096],[86.516,27.966],[86.427,27.911],[86.23,27.979],[86.186,28.174],[86.088,28.093],[86.083,28.021],[86.121,27.93],[86.063,27.9],[85.949,27.94],[85.978,27.99],[85.907,28.051],[85.847,28.182],[85.749,28.231],[85.719,28.381],[85.691,28.385],[85.609,28.25],[85.598,28.305],[85.423,28.33],[85.381,28.283],[85.107,28.341],[85.187,28.541],[85.191,28.628],[85.061,28.686],[84.855,28.58],[84.623,28.739],[84.475,28.74],[84.223,28.896],[84.248,29.028],[84.181,29.235],[83.976,29.331],[83.823,29.305],[83.632,29.162],[83.448,29.305],[83.281,29.568],[83.071,29.62],[82.73,29.817],[82.534,29.974],[82.386,30.026],[82.17,30.069],[82.195,30.169],[82.108,30.237],[82.101,30.354],[81.991,30.334],[81.62,30.447],[81.546,30.377],[81.41,30.422],[81.399,30.219],[81.334,30.153],[81.262,30.146],[81.29,30.088],[81.244,30.013],[81.128,30.014],[81.04,30.201],[80.925,30.172],[80.911,30.222],[80.867,30.173],[80.878,30.134],[80.671,29.957],[80.602,29.957],[80.572,29.914],[80.562,29.867],[80.49,29.796],[80.435,29.805],[80.416,29.795],[80.368,29.739],[80.384,29.685],[80.419,29.636],[80.379,29.571],[80.243,29.443],[80.314,29.308],[80.286,29.203],[80.241,29.214],[80.266,29.139],[80.232,29.116],[80.181,29.136],[80.057,28.915],[80.07,28.828],[80.121,28.823],[80.372,28.634],[80.445,28.631],[80.524,28.549],[80.506,28.671],[80.551,28.692],[81.035,28.401],[81.198,28.363],[81.329,28.135],[81.387,28.176],[81.482,28.121],[81.479,28.083],[81.912,27.85],[81.972,27.933],[82.066,27.922],[82.464,27.672],[82.704,27.721],[82.741,27.498],[82.933,27.503],[82.949,27.46],[83.194,27.456],[83.272,27.383],[83.267,27.362],[83.3,27.328],[83.351,27.339],[83.389,27.393],[83.395,27.48],[83.613,27.47],[83.856,27.358],[83.862,27.424],[83.933,27.449],[84.022,27.438],[84.108,27.524],[84.214,27.452],[84.257,27.449],[84.293,27.39],[84.622,27.339],[84.692,27.213],[84.645,27.047],[84.793,26.997],[84.829,27.02],[84.858,26.99],[84.967,26.956],[84.972,26.915],[85.005,26.895],[85.056,26.89],[85.026,26.854],[85.159,26.87],[85.193,26.869],[85.18,26.805],[85.212,26.759],[85.343,26.75],[85.478,26.793],[85.565,26.841],[85.576,26.86],[85.595,26.852],[85.616,26.867],[85.662,26.848],[85.735,26.796],[85.723,26.675],[85.769,26.631],[85.831,26.611],[85.851,26.609],[85.849,26.567],[86.027,26.668],[86.136,26.607],[86.225,26.589],[86.262,26.619],[86.316,26.619],[86.497,26.542],[86.543,26.538],[86.571,26.498],[86.613,26.487],[86.627,26.469],[86.691,26.452],[86.74,26.424],[86.768,26.459],[86.829,26.439],[86.945,26.521],[86.959,26.521],[87.016,26.532],[87.047,26.587],[87.071,26.586],[87.091,26.45],[87.148,26.405],[87.189,26.406],[87.247,26.414],[87.266,26.406],[87.266,26.373],[87.346,26.348],[87.373,26.408],[87.466,26.441],[87.516,26.431],[87.553,26.406],[87.592,26.383],[87.668,26.403],[87.679,26.435],[87.76,26.407],[87.792,26.467],[87.842,26.437],[87.891,26.486],[87.901,26.449],[88.009,26.36],[88.094,26.437],[88.1,26.542],[88.165,26.641],[88.166,26.682],[88.191,26.755],[88.123,26.953],[88.134,26.987],[88.117,26.988],[87.989,27.11],[88.016,27.214],[88.016,27.216],[88.073,27.43],[88.04,27.492],[88.191,27.793],[88.197,27.851],[88.134,27.88]]]]}},{"type":"Feature","properties":{"code":"NL","name":"Netherlands"},"geometry":{"type":"MultiPolygon","coordinates":[[[[5.452,54.2],[2.566,51.853],[3.363,51.371],[3.387,51.334],[3.358,51.316],[3.383,51.273],[3.417,51.259],[3.435,51.241],[3.527,51.246],[3.515,51.287],[3.589,51.301],[3.79,51.258],[3.788,51.215],[3.901,51.204],[3.979,51.225],[4.02,51.245],[4.052,51.242],[4.167,51.293],[4.24,51.354],[4.219,51.374],[4.333,51.377],[4.341,51.357],[4.393,51.355],[4.438,51.37],[4.381,51.42],[4.397,51.433],[4.381,51.449],[4.477,51.478],[4.539,51.482],[4.547,51.473],[4.528,51.45],[4.535,51.424],[4.575,51.432],[4.654,51.424],[4.729,51.484],[4.746,51.489],[4.773,51.505],[4.788,51.503],[4.841,51.48],[4.824,51.447],[4.829,51.421],[4.783,51.433],[4.766,51.43],[4.772,51.413],[4.789,51.411],[4.85,51.415],[4.9,51.414],[4.922,51.395],[5.004,51.444],[5.011,51.472],[5.033,51.487],[5.048,51.47],[5.079,51.471],[5.105,51.432],[5.071,51.395],[5.131,51.348],[5.134,51.316],[5.162,51.31],[5.2,51.322],[5.242,51.305],[5.225,51.269],[5.238,51.261],[5.265,51.267],[5.297,51.261],[5.339,51.263],[5.347,51.275],[5.417,51.262],[5.441,51.282],[5.465,51.285],[5.485,51.301],[5.515,51.295],[5.557,51.265],[5.56,51.222],[5.651,51.198],[5.655,51.187],[5.703,51.183],[5.746,51.189],[5.777,51.178],[5.777,51.152],[5.826,51.168],[5.855,51.144],[5.808,51.117],[5.811,51.109],[5.832,51.106],[5.829,51.093],[5.799,51.094],[5.798,51.058],[5.773,51.062],[5.76,51.031],[5.777,51.025],[5.762,50.997],[5.719,50.961],[5.729,50.954],[5.748,50.962],[5.759,50.956],[5.746,50.947],[5.725,50.923],[5.726,50.912],[5.716,50.908],[5.699,50.91],[5.679,50.881],[5.645,50.871],[5.64,50.847],[5.653,50.823],[5.701,50.808],[5.69,50.796],[5.701,50.783],[5.681,50.758],[5.695,50.755],[5.722,50.764],[5.739,50.757],[5.744,50.769],[5.765,50.782],[5.775,50.783],[5.807,50.756],[5.845,50.765],[5.849,50.754],[5.887,50.771],[5.891,50.751],[5.891,50.751],[5.959,50.762],[5.975,50.754],[6.02,50.754],[6.026,50.775],[5.975,50.8],[5.984,50.81],[6.005,50.801],[6.023,50.817],[6.019,50.844],[6.056,50.857],[6.057,50.852],[6.074,50.847],[6.077,50.86],[6.088,50.872],[6.075,50.893],[6.093,50.921],[6.016,50.934],[6.027,50.983],[5.953,50.987],[5.903,50.974],[5.905,51.002],[5.878,51.02],[5.867,51.052],[5.913,51.067],[5.954,51.035],[5.983,51.075],[6.167,51.157],[6.174,51.196],[6.079,51.17],[6.079,51.244],[6.17,51.332],[6.227,51.361],[6.226,51.399],[6.207,51.4],[6.217,51.486],[6.18,51.541],[6.091,51.606],[6.118,51.656],[6.028,51.674],[6.041,51.718],[5.95,51.749],[5.987,51.769],[5.946,51.828],[5.998,51.832],[6.067,51.861],[6.103,51.848],[6.169,51.841],[6.116,51.898],[6.153,51.904],[6.214,51.868],[6.299,51.868],[6.306,51.85],[6.407,51.828],[6.388,51.873],[6.472,51.854],[6.502,51.863],[6.586,51.894],[6.684,51.919],[6.723,51.895],[6.824,51.967],[6.83,51.99],[6.681,52.051],[6.761,52.119],[6.84,52.117],[6.972,52.203],[6.99,52.227],[7.037,52.227],[7.064,52.238],[7.027,52.279],[7.07,52.378],[7.034,52.402],[6.99,52.472],[6.943,52.436],[6.695,52.488],[6.716,52.629],[6.773,52.654],[7.046,52.633],[7.073,52.811],[7.217,53.007],[7.179,53.138],[7.227,53.182],[7.217,53.201],[7.191,53.319],[7.002,53.327],[6.91,53.442],[5.452,54.2]],[[4.933,51.449],[4.952,51.452],[4.952,51.45],[4.939,51.446],[4.933,51.449]],[[4.915,51.435],[4.919,51.436],[4.922,51.443],[4.918,51.446],[4.923,51.447],[4.928,51.444],[4.926,51.443],[4.928,51.439],[4.929,51.442],[4.935,51.446],[4.94,51.442],[4.934,51.442],[4.935,51.439],[4.943,51.44],[4.94,51.431],[4.93,51.43],[4.927,51.433],[4.915,51.435]]]]}},{"type":"Feature","properties":{"code":"NC","name":"New Caledonia","country":"France"},"geometry":{"type":"MultiPolygon","coordinates":[[[[163.345,-24.006],[171.841,-22.032],[162.852,-17.591],[163.345,-24.006]]]]}},{"type":"Feature","properties":{"code":"NZ","name":"New Zealand"},"geometry":{"type":"MultiPolygon","coordinates":[[[[179.758,-38.065],[171.914,-32.898],[165.718,-46.521],[168.157,-48.034],[179.758,-38.065]]]]}},{"type":"Feature","properties":{"code":"NZ","name":"New Zealand Subantarctic Islands","country":"New Zealand"},"geometry":{"type":"MultiPolygon","coordinates":[[[[165.975,-49.17],[163.817,-54.368],[180.308,-49.618],[184.878,-42.86],[165.975,-49.17]]]]}},{"type":"Feature","properties":{"code":"NI","name":"Nicaragua"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-83.137,15],[-83.493,15.012],[-83.621,14.894],[-83.896,14.767],[-84.106,14.764],[-84.484,14.632],[-84.701,14.681],[-84.826,14.822],[-84.901,14.805],[-85.157,14.539],[-85.186,14.249],[-85.321,14.256],[-85.458,14.113],[-85.74,13.97],[-85.755,13.85],[-86.035,13.992],[-86.007,14.085],[-86.148,14.043],[-86.352,13.772],[-86.768,13.796],[-86.713,13.303],[-86.871,13.306],[-86.934,13.187],[-86.932,13.053],[-87.038,12.987],[-87.063,13.009],[-87.371,12.986],[-87.551,13.125],[-87.735,13.132],[-88.114,12.633],[-86.145,11.091],[-85.712,11.069],[-85.605,11.226],[-84.924,10.95],[-84.682,11.076],[-83.908,10.712],[-83.666,10.799],[-83.683,11.016],[-82.561,11.918],[-82.07,14.494],[-83.048,15.033],[-83.137,15]]]]}},{"type":"Feature","properties":{"code":"NE","name":"Niger"},"geometry":{"type":"MultiPolygon","coordinates":[[[[14.229,22.617],[13.563,23.166],[11.969,23.517],[7.483,20.873],[7.384,20.792],[5.815,19.451],[4.267,19.142],[4.268,17.004],[4.218,17.001],[4.199,16.399],[3.504,15.359],[3.031,15.422],[3.018,15.346],[1.313,15.28],[0.967,14.983],[0.726,14.959],[0.239,15.001],[0.169,14.517],[0.381,14.056],[0.619,13.685],[0.774,13.687],[0.776,13.644],[0.995,13.567],[1.028,13.466],[1.201,13.39],[1.244,13.394],[1.285,13.355],[1.245,13.34],[1.212,13.379],[1.189,13.318],[0.993,13.375],[0.992,13.107],[2.263,12.419],[2.058,12.355],[2.397,11.895],[2.458,11.987],[2.397,12.11],[2.378,12.248],[2.659,12.306],[2.84,12.406],[3.254,12.015],[3.316,11.885],[3.482,11.861],[3.594,11.703],[3.611,11.692],[3.68,11.754],[3.671,11.809],[3.631,11.83],[3.62,11.918],[3.678,11.976],[3.631,12.118],[3.664,12.259],[3.651,12.522],[3.943,12.75],[4.1,12.989],[4.144,13.172],[4.142,13.476],[4.235,13.477],[4.467,13.683],[4.874,13.78],[4.937,13.735],[5.074,13.751],[5.21,13.736],[5.278,13.755],[5.354,13.836],[5.53,13.884],[6.158,13.646],[6.274,13.678],[6.431,13.601],[6.696,13.341],[6.944,12.998],[7.052,13.001],[7.127,13.024],[7.224,13.129],[7.392,13.097],[7.811,13.349],[8.08,13.308],[8.252,13.204],[8.419,13.062],[8.495,13.075],[8.604,13.018],[8.643,12.94],[8.974,12.837],[9.66,12.806],[10.004,13.182],[10.2,13.271],[10.467,13.288],[10.66,13.364],[11.454,13.378],[11.882,13.253],[12.042,13.145],[12.162,13.101],[12.193,13.124],[12.471,13.067],[12.58,13.278],[12.679,13.292],[12.874,13.489],[13.051,13.54],[13.198,13.528],[13.332,13.712],[13.63,13.711],[13.476,14.409],[13.483,14.467],[13.686,14.553],[13.679,14.64],[13.809,14.729],[13.79,14.875],[13.863,15.04],[14.374,15.726],[15.504,16.896],[15.603,18.774],[15.751,19.93],[15.996,20.354],[15.672,20.701],[15.598,20.74],[15.56,20.795],[15.554,20.865],[15.572,20.921],[15.625,20.954],[15.283,21.446],[15.202,21.494],[15.197,21.993],[14.998,23.005],[14.229,22.617]]]]}},{"type":"Feature","properties":{"code":"NG","name":"Nigeria"},"geometry":{"type":"MultiPolygon","coordinates":[[[[6.158,13.646],[5.53,13.884],[5.354,13.836],[5.278,13.755],[5.21,13.736],[5.074,13.751],[4.937,13.735],[4.874,13.78],[4.467,13.683],[4.235,13.477],[4.142,13.476],[4.144,13.172],[4.1,12.989],[3.943,12.75],[3.651,12.522],[3.664,12.259],[3.631,12.118],[3.678,11.976],[3.62,11.918],[3.631,11.83],[3.671,11.809],[3.68,11.754],[3.611,11.692],[3.594,11.703],[3.492,11.298],[3.715,11.13],[3.842,10.593],[3.783,10.405],[3.684,10.464],[3.573,10.272],[3.669,10.181],[3.544,9.877],[3.354,9.836],[3.321,9.78],[3.347,9.707],[3.251,9.616],[3.139,9.472],[3.141,9.284],[3.08,9.1],[2.779,9.069],[2.675,7.878],[2.731,7.776],[2.734,7.542],[2.787,7.512],[2.794,7.435],[2.745,7.426],[2.77,7.135],[2.717,6.957],[2.74,6.928],[2.734,6.785],[2.788,6.764],[2.782,6.705],[2.732,6.641],[2.743,6.573],[2.705,6.508],[2.706,6.38],[2.742,6.133],[5.871,3.785],[8.344,4.307],[8.603,4.874],[8.78,5.124],[8.92,5.584],[8.837,5.685],[8.882,5.789],[8.842,5.826],[9.518,6.439],[9.707,6.517],[9.778,6.791],[9.863,6.778],[10.151,7.038],[10.215,6.89],[10.536,6.934],[10.572,7.163],[10.597,7.147],[10.608,7.069],[10.837,6.936],[10.818,6.834],[10.943,6.693],[11.096,6.684],[11.095,6.517],[11.42,6.538],[11.423,6.588],[11.515,6.609],[11.578,6.741],[11.558,6.862],[11.631,6.99],[11.874,7.094],[11.849,7.261],[11.932,7.478],[12.018,7.53],[11.999,7.673],[12.209,7.976],[12.193,8.108],[12.248,8.179],[12.261,8.437],[12.449,8.525],[12.441,8.615],[12.687,8.659],[12.717,8.759],[12.79,8.754],[12.811,8.92],[12.9,9.114],[12.92,9.339],[12.856,9.367],[13.024,9.493],[13.226,9.573],[13.255,9.768],[13.299,9.83],[13.25,9.86],[13.241,9.91],[13.274,9.932],[13.286,9.982],[13.253,10.001],[13.25,10.036],[13.341,10.123],[13.436,10.133],[13.57,10.532],[13.55,10.612],[13.734,10.925],[13.708,10.945],[13.74,11.006],[13.789,11.002],[13.975,11.303],[14.178,11.238],[14.612,11.513],[14.646,11.662],[14.552,11.72],[14.616,11.78],[14.647,12.175],[14.484,12.352],[14.222,12.365],[14.175,12.419],[14.202,12.534],[14.083,13.08],[13.63,13.711],[13.332,13.712],[13.198,13.528],[13.051,13.54],[12.874,13.489],[12.679,13.292],[12.58,13.278],[12.471,13.067],[12.193,13.124],[12.162,13.101],[12.042,13.145],[11.882,13.253],[11.454,13.378],[10.66,13.364],[10.467,13.288],[10.2,13.271],[10.004,13.182],[9.66,12.806],[8.974,12.837],[8.643,12.94],[8.604,13.018],[8.495,13.075],[8.419,13.062],[8.252,13.204],[8.08,13.308],[7.811,13.349],[7.392,13.097],[7.224,13.129],[7.127,13.024],[7.052,13.001],[6.944,12.998],[6.696,13.341],[6.431,13.601],[6.274,13.678],[6.158,13.646]]]]}},{"type":"Feature","properties":{"code":"NU","name":"Niue"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-170.839,-18.534],[-170.823,-20.444],[-168.631,-18.605],[-170.839,-18.534]]]]}},{"type":"Feature","properties":{"code":"NF","name":"Norfolk Island","country":"Australia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[169.823,-28.167],[166.295,-28.292],[167.941,-30.607],[169.823,-28.167]]]]}},{"type":"Feature","properties":{"code":"KP","name":"North Korea"},"geometry":{"type":"MultiPolygon","coordinates":[[[[130.261,42.903],[130.098,42.914],[130.13,42.984],[129.964,42.973],[129.951,43.011],[129.887,43.004],[129.853,42.965],[129.833,42.867],[129.807,42.792],[129.784,42.765],[129.772,42.694],[129.753,42.594],[129.725,42.437],[129.605,42.445],[129.547,42.373],[129.429,42.447],[129.285,42.416],[129.224,42.355],[129.223,42.265],[129.152,42.172],[128.961,42.067],[128.94,42.035],[128.045,42.018],[128.151,41.746],[128.307,41.603],[128.201,41.409],[128.185,41.413],[128.13,41.379],[128.033,41.392],[128.026,41.421],[127.929,41.443],[127.297,41.495],[127.178,41.597],[126.907,41.8],[126.606,41.656],[126.532,41.352],[126.242,41.155],[126.003,40.928],[125.769,40.879],[125.712,40.852],[124.869,40.454],[124.407,40.137],[124.386,40.11],[124.332,40.056],[124.371,40.03],[124.35,39.956],[124.232,39.925],[124.175,39.823],[123.905,38.799],[123.856,37.491],[124.677,38.057],[124.842,37.977],[124.879,37.808],[125.064,37.663],[125.371,37.626],[125.812,37.729],[126.131,37.705],[126.188,37.747],[126.191,37.815],[126.244,37.831],[126.432,37.841],[126.468,37.809],[126.567,37.769],[126.599,37.764],[126.661,37.79],[126.688,37.837],[126.688,37.917],[126.67,37.959],[126.85,38.034],[126.881,38.102],[126.959,38.135],[126.953,38.177],[127.045,38.255],[127.157,38.307],[127.387,38.332],[127.497,38.306],[127.55,38.323],[128.029,38.319],[128.277,38.417],[128.311,38.585],[128.375,38.623],[128.657,38.619],[131.95,41.544],[130.65,42.323],[130.664,42.38],[130.642,42.414],[130.608,42.432],[130.568,42.433],[130.551,42.522],[130.501,42.616],[130.444,42.548],[130.418,42.601],[130.238,42.711],[130.231,42.801],[130.261,42.903]]]]}},{"type":"Feature","properties":{"code":"MK","name":"North Macedonia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[22.348,42.317],[22.293,42.349],[22.296,42.375],[22.164,42.321],[22.029,42.298],[21.944,42.347],[21.916,42.304],[21.847,42.325],[21.772,42.265],[21.701,42.238],[21.59,42.259],[21.521,42.245],[21.508,42.272],[21.439,42.279],[21.439,42.236],[21.384,42.245],[21.305,42.142],[21.299,42.14],[21.32,42.11],[21.227,42.089],[21.166,42.198],[21.115,42.208],[20.755,42.052],[20.768,41.918],[20.685,41.853],[20.595,41.882],[20.56,41.871],[20.571,41.79],[20.534,41.781],[20.513,41.724],[20.529,41.693],[20.518,41.66],[20.555,41.581],[20.521,41.565],[20.458,41.555],[20.453,41.514],[20.49,41.493],[20.513,41.442],[20.56,41.409],[20.521,41.344],[20.494,41.337],[20.511,41.232],[20.597,41.136],[20.585,41.112],[20.598,41.091],[20.635,41.089],[20.656,41.08],[20.716,40.918],[20.735,40.908],[20.816,40.897],[20.837,40.928],[20.943,40.924],[20.977,40.901],[20.979,40.855],[21.153,40.855],[21.211,40.886],[21.258,40.862],[21.356,40.876],[21.416,40.917],[21.53,40.908],[21.574,40.861],[21.696,40.943],[21.756,40.925],[21.911,41.048],[21.909,41.092],[22.065,41.156],[22.142,41.124],[22.176,41.16],[22.267,41.164],[22.423,41.119],[22.555,41.131],[22.583,41.116],[22.629,41.144],[22.653,41.182],[22.713,41.139],[22.745,41.163],[22.764,41.322],[22.812,41.34],[22.933,41.341],[22.963,41.358],[22.955,41.633],[23.033,41.71],[23.012,41.765],[22.967,41.771],[22.903,41.876],[22.867,42.023],[22.677,42.066],[22.512,42.155],[22.503,42.195],[22.473,42.204],[22.381,42.303],[22.348,42.317]]]]}},{"type":"Feature","properties":{"code":"CY","name":"Northern Cyprus"},"geometry":{"type":"MultiPolygon","coordinates":[[[[33.677,35.039],[33.677,35.06],[33.685,35.066],[33.691,35.062],[33.709,35.076],[33.716,35.073],[33.702,35.049],[33.715,35.037],[33.738,35.053],[33.761,35.043],[33.786,35.051],[33.821,35.078],[33.842,35.068],[33.854,35.072],[33.875,35.089],[33.871,35.094],[33.876,35.105],[33.872,35.123],[33.886,35.124],[33.889,35.12],[33.887,35.114],[33.899,35.114],[33.918,35.087],[33.913,35.076],[33.902,35.077],[33.895,35.069],[33.884,35.079],[33.853,35.057],[33.836,35.058],[33.821,35.067],[33.801,35.048],[33.815,35.042],[33.831,35.029],[33.829,35.017],[33.84,35.006],[33.852,35.006],[33.859,35.001],[33.856,34.99],[33.835,34.981],[33.848,34.971],[33.864,34.976],[33.901,34.966],[34.097,34.903],[34.802,35.793],[32.519,35.361],[32.604,35.166],[32.649,35.2],[32.709,35.183],[32.708,35.141],[32.857,35.077],[32.864,35.104],[32.945,35.094],[33.012,35.156],[33.082,35.173],[33.111,35.156],[33.151,35.195],[33.271,35.168],[33.307,35.168],[33.32,35.181],[33.351,35.183],[33.35,35.178],[33.356,35.179],[33.356,35.174],[33.366,35.175],[33.372,35.179],[33.372,35.187],[33.386,35.202],[33.408,35.201],[33.417,35.163],[33.468,35.106],[33.481,35.064],[33.478,35.041],[33.452,35.021],[33.453,35.003],[33.477,35.007],[33.489,35.066],[33.54,35.082],[33.575,35.06],[33.567,35.048],[33.597,35.036],[33.612,35.053],[33.638,35.039],[33.677,35.039]]]]}},{"type":"Feature","properties":{"code":"GB","name":"Northern Ireland","country":"United Kingdom"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-6.348,55.492],[-7.247,55.069],[-7.345,55.047],[-7.403,55.004],[-7.4,54.945],[-7.444,54.94],[-7.447,54.87],[-7.476,54.831],[-7.545,54.794],[-7.547,54.746],[-7.644,54.753],[-7.75,54.71],[-7.834,54.739],[-7.933,54.666],[-7.703,54.621],[-7.86,54.537],[-7.998,54.544],[-8.045,54.489],[-8.179,54.468],[-8.046,54.363],[-7.871,54.293],[-7.86,54.218],[-7.814,54.202],[-7.695,54.207],[-7.558,54.122],[-7.48,54.122],[-7.446,54.154],[-7.328,54.115],[-7.306,54.119],[-7.34,54.147],[-7.292,54.172],[-7.28,54.167],[-7.297,54.135],[-7.295,54.12],[-7.263,54.139],[-7.25,54.201],[-7.149,54.227],[-7.191,54.313],[-7.02,54.421],[-6.878,54.347],[-6.852,54.292],[-6.816,54.228],[-6.746,54.188],[-6.702,54.202],[-6.638,54.171],[-6.663,54.067],[-6.628,54.035],[-6.478,54.069],[-6.366,54.072],[-6.363,54.112],[-6.327,54.093],[-6.29,54.113],[-6.262,54.098],[-5.835,53.877],[-4.69,54.363],[-6.348,55.492]]]]}},{"type":"Feature","properties":{"code":"MP","name":"Northern Mariana Islands","country":"United States"},"geometry":{"type":"MultiPolygon","coordinates":[[[[145.004,13.933],[146.063,14.211],[146.261,18.516],[144.789,20.9],[145.004,13.933]]]]}},{"type":"Feature","properties":{"code":"NO","name":"Norway"},"geometry":{"type":"MultiPolygon","coordinates":[[[[10.739,58.913],[11.089,58.987],[11.154,59.079],[11.345,59.117],[11.46,58.99],[11.452,58.896],[11.657,58.902],[11.821,59.25],[11.693,59.594],[11.921,59.695],[11.871,59.86],[12.156,59.893],[12.363,59.993],[12.52,60.138],[12.591,60.506],[12.228,61.024],[12.691,61.066],[12.869,61.354],[12.577,61.565],[12.406,61.572],[12.147,61.715],[12.292,62.257],[12.071,62.63],[12.199,63.001],[11.985,63.275],[12.199,63.479],[12.149,63.594],[12.741,64.022],[13.234,64.091],[13.982,64.01],[14.161,64.187],[14.111,64.467],[13.643,64.584],[14.509,65.318],[14.538,66.124],[15.051,66.156],[15.493,66.285],[15.372,66.482],[16.356,67.064],[16.392,67.217],[16.099,67.436],[16.128,67.521],[16.384,67.529],[16.741,67.91],[17.304,68.116],[17.908,67.965],[18.138,68.209],[18.124,68.537],[18.395,68.587],[18.63,68.508],[18.973,68.524],[19.935,68.359],[20.22,68.488],[19.956,68.555],[20.22,68.672],[20.334,68.802],[20.284,68.933],[20.07,69.045],[20.553,69.061],[20.722,69.119],[21.058,69.036],[21.111,69.103],[20.986,69.188],[21.007,69.228],[21.278,69.313],[21.638,69.275],[22.273,68.895],[22.384,68.716],[22.533,68.744],[23.131,68.647],[23.68,68.703],[23.781,68.845],[24.023,68.816],[24.184,68.739],[24.749,68.651],[24.9,68.556],[24.93,68.611],[25.102,68.633],[25.122,68.787],[25.425,68.903],[25.616,68.896],[25.757,68.994],[25.697,69.27],[25.969,69.684],[26.403,69.914],[26.645,69.966],[27.058,69.921],[27.572,70.062],[27.955,70.097],[27.976,69.997],[28.328,69.886],[28.369,69.817],[29.127,69.692],[29.317,69.48],[28.863,69.224],[28.812,69.12],[28.917,69.048],[29.044,69.012],[29.266,69.138],[29.276,69.281],[29.972,69.416],[30.164,69.652],[30.527,69.547],[30.95,69.547],[30.841,69.806],[31.599,70.166],[32.078,72.01],[16.109,70.547],[3.943686211285562,61.63428019566024],[4.807280287271586,59.253118132140266],[5.4,58.301],[7.515,57.687],[10.739,58.913]]]]}},{"type":"Feature","properties":{"code":"OM","name":"Oman"},"geometry":{"type":"MultiPolygon","coordinates":[[[[56.826,25.771],[56.792,26.412],[56.69,26.766],[56.264,26.586],[55.818,26.188],[56.087,26.05],[56.155,26.068],[56.193,25.98],[56.14,25.828],[56.174,25.772],[56.136,25.735],[56.148,25.664],[56.184,25.655],[56.205,25.611],[56.254,25.602],[56.266,25.606],[56.253,25.614],[56.265,25.628],[56.826,25.771]]],[[[56.261,25.331],[56.234,25.313],[56.25,25.288],[56.245,25.275],[56.208,25.257],[56.209,25.241],[56.243,25.229],[56.276,25.234],[56.344,25.267],[56.352,25.307],[56.311,25.301],[56.3,25.318],[56.261,25.331]],[[56.284,25.263],[56.271,25.261],[56.272,25.279],[56.281,25.285],[56.294,25.275],[56.284,25.263]]],[[[60.282,22.726],[56.863,25.039],[56.323,24.973],[56.349,24.932],[56.303,24.883],[56.206,24.851],[56.201,24.786],[56.137,24.737],[56.061,24.745],[56.035,24.812],[55.978,24.877],[55.975,24.896],[56.051,24.875],[56.057,24.957],[55.963,25.009],[55.908,24.968],[55.851,24.969],[55.811,24.912],[55.813,24.801],[55.834,24.779],[55.833,24.686],[55.765,24.529],[55.833,24.415],[55.834,24.328],[55.807,24.311],[55.791,24.279],[55.768,24.262],[55.759,24.261],[55.754,24.247],[55.753,24.235],[55.766,24.232],[55.777,24.235],[55.834,24.202],[55.955,24.217],[56.018,24.074],[55.831,24.016],[55.733,24.06],[55.487,23.949],[55.574,23.669],[55.226,23.104],[55.214,22.711],[55.665,21.997],[54.998,20.001],[52.003,19.001],[52.78,17.351],[52.743,17.295],[52.812,17.286],[53.304,16.341],[57.645,17.529],[60.282,22.726]]]]}},{"type":"Feature","properties":{"code":"PK","name":"Pakistan"},"geometry":{"type":"MultiPolygon","coordinates":[[[[75.727,36.753],[75.456,36.72],[75.405,36.954],[75.138,37.026],[74.565,37.03],[74.537,36.962],[74.434,37.01],[74.049,36.826],[73.827,36.914],[72.632,36.846],[72.181,36.718],[71.803,36.499],[71.605,36.394],[71.195,36.041],[71.38,35.959],[71.553,35.715],[71.499,35.627],[71.654,35.448],[71.543,35.31],[71.554,35.288],[71.675,35.213],[71.529,35.09],[71.553,35.026],[71.499,35.005],[71.503,34.973],[71.295,34.877],[71.284,34.809],[71.087,34.69],[71.116,34.63],[71.009,34.546],[71.024,34.448],[71.177,34.368],[71.128,34.266],[71.131,34.165],[71.095,34.135],[71.093,34.12],[71.069,34.106],[71.073,34.062],[70.881,33.979],[70.543,33.946],[69.902,34.042],[69.873,33.969],[69.857,33.937],[70.005,33.735],[70.142,33.717],[70.148,33.655],[70.201,33.644],[70.171,33.535],[70.328,33.345],[70.137,33.211],[70.074,33.226],[70.026,33.143],[69.853,33.095],[69.798,33.132],[69.715,33.099],[69.577,33.099],[69.49,33.015],[69.499,32.888],[69.544,32.877],[69.471,32.858],[69.38,32.766],[69.436,32.73],[69.447,32.668],[69.382,32.566],[69.287,32.539],[69.236,32.459],[69.279,32.291],[69.27,32.141],[69.323,31.932],[69.206,31.86],[69.115,31.708],[69.009,31.622],[68.96,31.648],[68.911,31.597],[68.8,31.617],[68.696,31.757],[68.575,31.832],[68.442,31.764],[68.276,31.759],[68.256,31.804],[68.165,31.827],[68.001,31.656],[67.869,31.635],[67.721,31.523],[67.583,31.528],[67.624,31.405],[67.775,31.419],[67.789,31.332],[67.3,31.196],[67.033,31.245],[67.041,31.316],[66.833,31.269],[66.726,31.205],[66.682,31.076],[66.582,30.975],[66.426,30.953],[66.392,30.941],[66.284,30.57],[66.349,30.404],[66.236,30.063],[66.36,29.958],[66.242,29.852],[65.04,29.54],[64.621,29.589],[64.198,29.504],[64.13,29.392],[63.588,29.505],[62.478,29.408],[60.872,29.865],[61.315,29.389],[61.538,29.005],[61.66,28.779],[61.936,28.553],[62.403,28.427],[62.595,28.248],[62.794,28.281],[62.764,28.03],[62.849,27.476],[62.797,27.344],[62.806,27.224],[63.196,27.257],[63.323,27.144],[63.25,27.087],[63.25,26.842],[63.187,26.838],[63.189,26.651],[62.774,26.641],[62.315,26.528],[62.213,26.266],[62.051,26.316],[61.894,26.263],[61.838,26.072],[61.84,25.754],[61.683,25.666],[61.643,25.275],[61.467,24.579],[68.113,23.539],[68.208,23.858],[68.393,23.968],[68.746,23.97],[68.742,24.319],[68.909,24.332],[68.978,24.26],[69.078,24.298],[69.193,24.256],[69.298,24.287],[69.596,24.298],[69.733,24.17],[70.034,24.172],[70.117,24.309],[70.567,24.438],[70.579,24.278],[70.715,24.235],[70.884,24.274],[70.858,24.309],[70.95,24.379],[71.045,24.347],[71.128,24.427],[71.003,24.46],[70.976,24.609],[71.094,24.69],[70.94,24.928],[70.891,25.151],[70.667,25.393],[70.674,25.682],[70.604,25.719],[70.536,25.689],[70.374,25.674],[70.269,25.712],[70.099,25.932],[70.082,26.081],[70.175,26.241],[70.175,26.554],[70.056,26.604],[69.886,26.568],[69.509,26.749],[69.585,27.181],[70.031,27.566],[70.125,27.806],[70.373,28.012],[70.609,28.022],[70.791,27.684],[71.899,27.96],[71.924,28.116],[72.203,28.387],[72.295,28.664],[72.404,28.783],[72.943,29.025],[73.013,29.164],[73.059,29.188],[73.281,29.566],[73.396,29.947],[73.587,30.018],[73.803,30.07],[73.972,30.198],[73.957,30.285],[73.89,30.363],[74.562,31.042],[74.68,31.055],[74.685,31.128],[74.6,31.137],[74.603,31.104],[74.56,31.083],[74.516,31.138],[74.532,31.303],[74.598,31.414],[74.647,31.456],[74.593,31.502],[74.615,31.557],[74.575,31.604],[74.478,31.722],[74.589,31.878],[74.799,31.96],[74.862,32.045],[74.927,32.066],[75.008,32.038],[75.256,32.102],[75.38,32.268],[75.283,32.366],[75.033,32.495],[74.976,32.454],[74.847,32.491],[74.684,32.493],[74.674,32.567],[74.653,32.564],[74.644,32.61],[74.695,32.668],[74.653,32.712],[74.711,32.842],[74.647,32.826],[74.629,32.756],[74.453,32.778],[74.415,32.906],[74.312,32.928],[74.349,32.978],[74.319,33.029],[74.176,33.075],[74.154,33.135],[74.021,33.189],[74.014,33.252],[74.088,33.262],[74.18,33.368],[74.181,33.474],[74.101,33.564],[74.036,33.567],[73.974,33.641],[73.99,33.662],[73.964,33.731],[74.009,33.754],[74.059,33.821],[74.14,33.83],[74.261,33.922],[74.253,34.016],[74.216,34.039],[73.913,34.012],[73.887,34.051],[73.907,34.105],[73.982,34.252],[73.905,34.353],[73.847,34.329],[73.749,34.342],[73.75,34.378],[73.887,34.489],[73.894,34.546],[73.94,34.572],[73.934,34.634],[73.964,34.682],[74.129,34.701],[74.312,34.796],[74.581,34.774],[74.666,34.703],[75.015,34.646],[75.38,34.55],[75.754,34.518],[76.046,34.676],[76.155,34.643],[76.472,34.79],[76.676,34.764],[76.744,34.84],[76.745,34.925],[76.872,34.969],[76.993,34.933],[77.118,35.054],[76.935,35.399],[76.851,35.398],[76.755,35.526],[76.773,35.661],[76.51,35.891],[76.335,35.843],[76.149,35.828],[76.153,35.926],[75.93,36.131],[76.009,36.175],[76.032,36.412],[75.924,36.57],[75.727,36.753]]]]}},{"type":"Feature","properties":{"code":"PW","name":"Palau"},"geometry":{"type":"MultiPolygon","coordinates":[[[[133.932,6.7],[134.841,7.313],[134.725,8.285],[133.932,6.7]]]]}},{"type":"Feature","properties":{"code":"PA","name":"Panama"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-77.324,8.812],[-77.583,9.223],[-78.793,9.938],[-82.51,9.654],[-82.565,9.573],[-82.613,9.499],[-82.667,9.497],[-82.772,9.596],[-82.879,9.626],[-82.849,9.497],[-82.935,9.467],[-82.935,9.077],[-82.721,8.971],[-82.883,8.833],[-82.914,8.774],[-82.921,8.748],[-82.879,8.698],[-82.827,8.602],[-82.84,8.548],[-82.833,8.525],[-82.838,8.481],[-82.868,8.44],[-82.931,8.435],[-83.052,8.334],[-82.939,8.266],[-82.886,8.102],[-82.891,8.058],[-82.9,8.041],[-82.945,7.939],[-82.138,6.973],[-78.062,7.078],[-77.892,7.227],[-77.814,7.483],[-77.722,7.476],[-77.725,7.723],[-77.572,7.511],[-77.173,7.974],[-77.451,8.5],[-77.324,8.812]]]]}},{"type":"Feature","properties":{"code":"PG","name":"Papua New Guinea"},"geometry":{"type":"MultiPolygon","coordinates":[[[[141.032,2.128],[140.998,-6.323],[140.853,-6.73],[140.904,-6.85],[141.018,-6.902],[141.018,-9.351],[141.889,-9.361],[142.192,-9.154],[142.487,-9.368],[143.298,-9.34],[143.874,-9.024],[145.286,-9.625],[156.738,-14.505],[154.748,-7.333],[155.607,-6.923],[155.698,-6.927],[155.926,-6.847],[156.04,-6.657],[156.033,-6.555],[160.438,-4.18],[141.032,2.128]]]]}},{"type":"Feature","properties":{"code":"PY","name":"Paraguay"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-58.162,-20.162],[-58.232,-19.801],[-59.07,-19.291],[-60.006,-19.298],[-61.737,-19.64],[-61.939,-20.101],[-62.269,-20.553],[-62.276,-21.067],[-62.645,-22.251],[-62.518,-22.377],[-62.228,-22.558],[-61.976,-23.051],[-61.078,-23.629],[-60.998,-23.809],[-60.282,-24.044],[-60.034,-24.007],[-59.455,-24.348],[-59.339,-24.499],[-58.331,-24.971],[-58.255,-24.925],[-57.808,-25.139],[-57.574,-25.473],[-57.872,-25.936],[-58.119,-26.167],[-58.32,-26.834],[-58.653,-27.14],[-58.595,-27.3],[-58.042,-27.239],[-56.853,-27.517],[-56.183,-27.299],[-55.892,-27.347],[-55.745,-27.445],[-55.591,-27.324],[-55.623,-27.194],[-55.396,-26.977],[-55.252,-26.938],[-55.169,-26.961],[-55.064,-26.802],[-55.006,-26.788],[-54.809,-26.557],[-54.707,-26.451],[-54.693,-26.377],[-54.674,-25.986],[-54.607,-25.969],[-54.621,-25.912],[-54.594,-25.592],[-54.595,-25.537],[-54.602,-25.484],[-54.62,-25.46],[-54.442,-25.134],[-54.282,-24.073],[-54.328,-24.019],[-54.624,-23.831],[-55.027,-23.973],[-55.052,-23.987],[-55.123,-23.997],[-55.418,-23.966],[-55.441,-23.919],[-55.436,-23.872],[-55.556,-23.282],[-55.523,-23.259],[-55.545,-23.228],[-55.638,-22.951],[-55.625,-22.628],[-55.687,-22.584],[-55.699,-22.563],[-55.724,-22.552],[-55.741,-22.52],[-55.749,-22.464],[-55.833,-22.29],[-56.232,-22.253],[-56.459,-22.081],[-56.521,-22.116],[-56.651,-22.284],[-57.986,-22.092],[-57.946,-21.738],[-57.882,-21.687],[-57.935,-21.655],[-57.845,-20.932],[-58.162,-20.162]]]]}},{"type":"Feature","properties":{"code":"PE","name":"Peru"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-74.267,-0.972],[-74.427,-0.502],[-75.185,-0.031],[-75.258,-0.119],[-75.402,-0.172],[-75.62,-0.1],[-75.602,-0.187],[-75.536,-0.192],[-75.229,-0.6],[-75.229,-0.956],[-75.387,-0.937],[-75.574,-1.56],[-76.052,-2.122],[-76.632,-2.584],[-77.941,-3.055],[-78.194,-3.364],[-78.143,-3.477],[-78.226,-3.511],[-78.246,-3.399],[-78.344,-3.386],[-78.684,-4.608],[-78.851,-4.668],[-79.017,-5.015],[-79.116,-4.978],[-79.262,-4.952],[-79.594,-4.468],[-79.797,-4.476],[-80.139,-4.298],[-80.393,-4.483],[-80.464,-4.415],[-80.321,-4.213],[-80.45,-4.209],[-80.482,-4.055],[-80.464,-4.013],[-80.132,-3.903],[-80.199,-3.689],[-80.187,-3.64],[-80.198,-3.592],[-80.216,-3.589],[-80.205,-3.517],[-80.226,-3.501],[-80.237,-3.487],[-80.246,-3.487],[-80.241,-3.461],[-80.206,-3.431],[-80.306,-3.391],[-81.725,-4.042],[-81.343,-5.966],[-75.959,-15.305],[-70.591,-18.351],[-70.378,-18.349],[-70.313,-18.313],[-70.164,-18.317],[-69.967,-18.26],[-69.816,-18.126],[-69.753,-17.946],[-69.829,-17.72],[-69.791,-17.656],[-69.665,-17.651],[-69.469,-17.499],[-69.469,-17.375],[-69.629,-17.281],[-69.169,-16.722],[-69.009,-16.668],[-69.04,-16.572],[-68.984,-16.422],[-68.795,-16.333],[-68.962,-16.194],[-69.1,-16.227],[-69.203,-16.167],[-69.403,-15.614],[-69.149,-15.235],[-69.363,-14.946],[-68.881,-14.186],[-69.053,-13.685],[-68.886,-13.408],[-68.856,-12.878],[-68.65,-12.507],[-68.981,-11.898],[-69.572,-10.946],[-69.578,-10.941],[-69.909,-10.927],[-70.388,-11.071],[-70.514,-10.922],[-70.641,-11.011],[-70.625,-9.807],[-70.554,-9.767],[-70.585,-9.583],[-70.534,-9.426],[-71.234,-9.967],[-72.147,-9.98],[-72.319,-9.518],[-72.722,-9.414],[-73.215,-9.409],[-72.929,-9.041],[-73.766,-7.899],[-73.655,-7.779],[-73.969,-7.585],[-73.77,-7.289],[-73.74,-6.879],[-73.13,-6.439],[-73.246,-6.058],[-72.84,-5.148],[-72.644,-5.039],[-71.87,-4.517],[-70.968,-4.369],[-70.776,-4.157],[-70.332,-4.152],[-70.196,-4.361],[-70.113,-4.273],[-70.024,-4.363],[-69.951,-4.285],[-69.949,-4.228],[-70.337,-3.795],[-70.524,-3.876],[-70.714,-3.792],[-70.046,-2.739],[-70.944,-2.231],[-71.752,-2.151],[-72.926,-2.445],[-73.653,-1.262],[-74.267,-0.972]]]]}},{"type":"Feature","properties":{"code":"PH","name":"Philippines"},"geometry":{"type":"MultiPolygon","coordinates":[[[[128.011,7.003],[121.811,21.777],[116.145,9.065],[117.177,7.528],[117.939,6.898],[117.985,6.275],[119.529,5.357],[119.006,4.233],[125.488,5.215],[128.011,7.003]]]]}},{"type":"Feature","properties":{"code":"PN","name":"Pitcairn Islands","country":"United Kingdom"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-130.199,-26.244],[-123.453,-24.757],[-131.045,-23.246],[-130.199,-26.244]]]]}},{"type":"Feature","properties":{"code":"PL","name":"Poland"},"geometry":{"type":"MultiPolygon","coordinates":[[[[18.579,55.253],[14.208,54.128],[14.226,53.929],[14.206,53.917],[14.185,53.913],[14.208,53.908],[14.213,53.866],[14.272,53.745],[14.268,53.699],[14.284,53.677],[14.271,53.666],[14.285,53.66],[14.285,53.634],[14.319,53.616],[14.304,53.555],[14.327,53.506],[14.352,53.495],[14.421,53.277],[14.441,53.274],[14.451,53.262],[14.407,53.211],[14.379,53.204],[14.367,53.164],[14.387,53.137],[14.35,53.058],[14.26,53.003],[14.141,52.958],[14.159,52.877],[14.123,52.843],[14.138,52.824],[14.221,52.812],[14.611,52.598],[14.629,52.571],[14.601,52.531],[14.631,52.49],[14.544,52.426],[14.552,52.353],[14.564,52.338],[14.581,52.28],[14.701,52.25],[14.713,52.221],[14.683,52.196],[14.706,52.169],[14.677,52.139],[14.692,52.103],[14.73,52.092],[14.76,52.066],[14.713,52.003],[14.705,51.977],[14.714,51.956],[14.718,51.956],[14.722,51.952],[14.718,51.94],[14.706,51.929],[14.693,51.904],[14.659,51.884],[14.591,51.833],[14.605,51.805],[14.646,51.795],[14.664,51.733],[14.691,51.708],[14.754,51.674],[14.758,51.623],[14.773,51.613],[14.711,51.562],[14.73,51.546],[14.727,51.539],[14.732,51.529],[14.947,51.472],[14.965,51.448],[14.969,51.384],[14.98,51.334],[15.043,51.284],[15.012,51.213],[15.005,51.169],[14.993,51.162],[14.994,51.158],[15.001,51.15],[14.996,51.144],[14.991,51.143],[14.997,51.122],[14.982,51.114],[14.979,51.077],[14.955,51.046],[14.929,50.997],[14.893,50.95],[14.897,50.942],[14.817,50.881],[14.828,50.87],[14.999,50.868],[15.011,50.98],[14.964,50.991],[15.024,51.024],[15.039,51.012],[15.062,51.023],[15.102,51.011],[15.119,50.99],[15.167,51.02],[15.174,50.983],[15.236,50.999],[15.27,50.977],[15.277,50.891],[15.367,50.84],[15.38,50.772],[15.438,50.808],[15.732,50.739],[15.817,50.757],[15.873,50.672],[15.972,50.698],[16.017,50.63],[15.983,50.615],[16.024,50.6],[16.103,50.664],[16.208,50.631],[16.232,50.671],[16.336,50.666],[16.446,50.58],[16.346,50.496],[16.314,50.503],[16.195,50.433],[16.216,50.406],[16.228,50.411],[16.281,50.369],[16.303,50.383],[16.365,50.377],[16.362,50.349],[16.394,50.321],[16.427,50.325],[16.564,50.21],[16.554,50.166],[16.631,50.114],[16.701,50.097],[16.846,50.208],[16.98,50.242],[17.004,50.214],[17.028,50.231],[16.998,50.258],[17.021,50.278],[16.998,50.303],[16.944,50.313],[16.909,50.386],[16.859,50.411],[16.892,50.451],[17.122,50.395],[17.145,50.381],[17.196,50.388],[17.2,50.365],[17.277,50.322],[17.343,50.329],[17.345,50.263],[17.37,50.281],[17.589,50.278],[17.678,50.29],[17.693,50.329],[17.746,50.3],[17.722,50.257],[17.763,50.234],[17.705,50.188],[17.594,50.164],[17.667,50.103],[17.689,50.12],[17.751,50.079],[17.777,50.023],[17.869,49.975],[18.002,50.017],[18.046,50.012],[18.046,50.033],[18.004,50.05],[18.032,50.066],[18.079,50.045],[18.106,50.002],[18.202,50],[18.218,49.973],[18.271,49.968],[18.278,49.939],[18.319,49.916],[18.333,49.924],[18.336,49.947],[18.416,49.935],[18.534,49.899],[18.545,49.908],[18.543,49.925],[18.577,49.916],[18.57,49.878],[18.603,49.863],[18.572,49.833],[18.613,49.762],[18.614,49.754],[18.626,49.75],[18.629,49.746],[18.627,49.72],[18.698,49.705],[18.728,49.682],[18.805,49.681],[18.848,49.545],[18.845,49.517],[18.945,49.521],[18.973,49.499],[18.974,49.396],[19.18,49.412],[19.254,49.534],[19.36,49.537],[19.378,49.574],[19.453,49.616],[19.526,49.573],[19.533,49.529],[19.578,49.461],[19.642,49.452],[19.637,49.409],[19.721,49.393],[19.786,49.417],[19.822,49.278],[19.753,49.208],[19.864,49.193],[19.905,49.235],[19.985,49.229],[20.082,49.181],[20.137,49.317],[20.22,49.353],[20.315,49.348],[20.317,49.399],[20.399,49.39],[20.464,49.416],[20.563,49.375],[20.617,49.418],[20.723,49.418],[20.78,49.354],[20.923,49.296],[20.987,49.308],[21.098,49.372],[21.041,49.418],[21.125,49.437],[21.198,49.405],[21.279,49.46],[21.434,49.414],[21.623,49.445],[21.78,49.354],[21.829,49.395],[21.964,49.344],[22.044,49.221],[22.562,49.089],[22.891,49.007],[22.863,49.105],[22.72,49.203],[22.748,49.328],[22.694,49.494],[22.645,49.531],[22.783,49.655],[22.803,49.691],[22.832,49.699],[22.993,49.842],[23.282,50.096],[23.676,50.334],[23.714,50.382],[23.794,50.405],[23.996,50.413],[24.037,50.445],[24.07,50.507],[24.1,50.608],[24.059,50.716],[23.959,50.793],[23.993,50.838],[24.095,50.833],[24.145,50.861],[24.046,50.902],[23.922,51.008],[23.904,51.077],[23.807,51.184],[23.639,51.322],[23.699,51.409],[23.628,51.505],[23.562,51.537],[23.571,51.559],[23.532,51.743],[23.627,51.782],[23.615,51.921],[23.687,51.991],[23.641,52.076],[23.61,52.113],[23.543,52.121],[23.479,52.182],[23.201,52.228],[23.182,52.288],[23.341,52.448],[23.451,52.538],[23.583,52.599],[23.736,52.615],[23.938,52.713],[23.918,52.94],[23.947,52.959],[23.922,53.021],[23.875,53.083],[23.914,53.165],[23.857,53.229],[23.82,53.241],[23.62,53.609],[23.513,53.951],[23.483,53.989],[23.527,54.046],[23.492,54.148],[23.452,54.178],[23.424,54.179],[23.395,54.217],[23.349,54.252],[23.247,54.257],[23.159,54.299],[23.155,54.311],[23.139,54.316],[23.104,54.298],[23.043,54.316],[23.057,54.346],[22.996,54.359],[23.006,54.385],[22.838,54.408],[22.797,54.363],[21.411,54.324],[20.639,54.371],[19.804,54.442],[19.643,54.454],[18.579,55.253]]]]}},{"type":"Feature","properties":{"code":"PT","name":"Portugal"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-9.053,36.816],[-7.373,36.969],[-7.398,37.169],[-7.411,37.203],[-7.419,37.238],[-7.432,37.252],[-7.44,37.389],[-7.469,37.471],[-7.518,37.561],[-7.42,37.757],[-7.334,37.812],[-7.273,37.901],[-7.245,37.989],[-7.126,38.003],[-7.104,38.044],[-7.06,38.02],[-7.004,38.019],[-6.934,38.215],[-7.094,38.172],[-7.156,38.276],[-7.325,38.443],[-7.265,38.617],[-7.262,38.721],[-7.038,38.872],[-7.051,38.907],[-6.952,39.024],[-6.97,39.076],[-7.04,39.119],[-7.107,39.103],[-7.149,39.113],[-7.128,39.171],[-7.236,39.201],[-7.234,39.276],[-7.315,39.349],[-7.293,39.458],[-7.495,39.588],[-7.541,39.667],[-7.335,39.646],[-7.247,39.666],[-7.016,39.669],[-6.975,39.815],[-6.915,39.866],[-6.867,40.02],[-6.942,40.107],[-7.006,40.121],[-7.025,40.186],[-7.004,40.232],[-6.861,40.268],[-6.861,40.298],[-6.802,40.332],[-6.784,40.365],[-6.846,40.422],[-6.849,40.464],[-6.797,40.517],[-6.802,40.551],[-6.843,40.568],[-6.796,40.66],[-6.828,40.746],[-6.823,40.845],[-6.799,40.848],[-6.807,40.88],[-6.843,40.898],[-6.853,40.94],[-6.936,41.029],[-6.913,41.039],[-6.888,41.03],[-6.848,41.027],[-6.809,41.036],[-6.792,41.054],[-6.757,41.102],[-6.773,41.13],[-6.697,41.186],[-6.683,41.216],[-6.65,41.247],[-6.559,41.244],[-6.386,41.353],[-6.386,41.387],[-6.331,41.377],[-6.268,41.488],[-6.191,41.576],[-6.299,41.664],[-6.442,41.683],[-6.499,41.658],[-6.546,41.686],[-6.564,41.742],[-6.514,41.876],[-6.568,41.884],[-6.545,41.944],[-6.585,41.967],[-6.62,41.94],[-6.75,41.941],[-6.77,41.987],[-6.812,41.991],[-6.822,41.945],[-6.944,41.944],[-6.955,41.966],[-6.981,41.973],[-7.011,41.95],[-7.076,41.95],[-7.086,41.974],[-7.141,41.989],[-7.185,41.975],[-7.187,41.888],[-7.324,41.841],[-7.371,41.85],[-7.429,41.806],[-7.429,41.833],[-7.448,41.845],[-7.456,41.865],[-7.498,41.871],[-7.527,41.839],[-7.622,41.831],[-7.586,41.879],[-7.658,41.883],[-7.698,41.91],[-7.842,41.881],[-7.881,41.846],[-7.888,41.926],[-7.907,41.924],[-7.923,41.876],[-7.98,41.873],[-8.011,41.835],[-8.096,41.81],[-8.165,41.818],[-8.169,41.879],[-8.196,41.875],[-8.219,41.912],[-8.162,41.983],[-8.088,42.014],[-8.088,42.058],[-8.117,42.085],[-8.182,42.064],[-8.194,42.121],[-8.189,42.139],[-8.199,42.154],[-8.224,42.133],[-8.247,42.14],[-8.273,42.124],[-8.298,42.106],[-8.322,42.102],[-8.339,42.084],[-8.364,42.091],[-8.383,42.077],[-8.401,42.081],[-8.425,42.072],[-8.441,42.082],[-8.482,42.081],[-8.528,42.077],[-8.525,42.063],[-8.546,42.054],[-8.581,42.051],[-8.595,42.057],[-8.638,42.047],[-8.646,42.037],[-8.658,42.03],[-8.66,42.007],[-8.67,41.998],[-8.691,41.989],[-8.737,41.971],[-8.748,41.963],[-8.748,41.942],[-8.768,41.928],[-8.818,41.904],[-8.876,41.863],[-9.789,38.797],[-9.053,36.816]]]]}},{"type":"Feature","properties":{"code":"PR","name":"Puerto Rico","country":"United States"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-65.169,18.075],[-65.193,18.49],[-67.475,18.566],[-68.041,18.047],[-66.489,17.791],[-65.169,18.075]]]]}},{"type":"Feature","properties":{"code":"QA","name":"Qatar"},"geometry":{"type":"MultiPolygon","coordinates":[[[[50.93,24.544],[51.096,24.469],[51.3,24.507],[51.395,24.628],[51.588,24.666],[51.831,24.717],[51.837,26.702],[50.939,26.308],[50.813,25.889],[50.861,25.697],[50.78,25.595],[50.808,25.546],[50.571,25.579],[50.813,24.74],[50.93,24.544]]]]}},{"type":"Feature","properties":{"code":"CY","name":"Republic of Cyprus"},"geometry":{"type":"MultiPolygon","coordinates":[[[[32.219,35.122],[32.29,34.724],[32.753,34.613],[32.761,34.683],[32.794,34.679],[32.827,34.706],[32.86,34.706],[32.862,34.687],[32.907,34.661],[32.914,34.673],[32.93,34.671],[32.928,34.667],[32.934,34.662],[32.937,34.67],[32.944,34.671],[32.947,34.679],[32.955,34.685],[32.991,34.681],[32.987,34.673],[32.99,34.655],[32.977,34.653],[32.971,34.661],[32.953,34.665],[32.948,34.659],[32.95,34.652],[32.955,34.645],[32.953,34.641],[32.959,34.629],[32.967,34.634],[32.97,34.64],[33.014,34.644],[33.602,34.762],[33.706,34.979],[33.706,34.993],[33.715,35.003],[33.697,35.018],[33.699,35.031],[33.677,35.039],[33.638,35.039],[33.612,35.053],[33.597,35.036],[33.567,35.048],[33.575,35.06],[33.54,35.082],[33.489,35.066],[33.477,35.007],[33.453,35.003],[33.452,35.021],[33.478,35.041],[33.481,35.064],[33.468,35.106],[33.417,35.163],[33.408,35.201],[33.386,35.202],[33.372,35.187],[33.372,35.179],[33.366,35.175],[33.356,35.174],[33.356,35.179],[33.35,35.178],[33.351,35.183],[33.32,35.181],[33.307,35.168],[33.271,35.168],[33.151,35.195],[33.111,35.156],[33.082,35.173],[33.012,35.156],[32.945,35.094],[32.864,35.104],[32.857,35.077],[32.708,35.141],[32.709,35.183],[32.649,35.2],[32.604,35.166],[32.519,35.361],[32.219,35.122]]],[[[33.741,35.011],[33.749,35.013],[33.75,35.023],[33.743,35.023],[33.738,35.022],[33.734,35.012],[33.741,35.011]]],[[[33.773,34.998],[33.76,35.001],[33.757,34.999],[33.766,34.995],[33.767,34.992],[33.778,34.99],[33.778,34.988],[33.781,34.989],[33.783,34.987],[33.786,34.99],[33.789,34.989],[33.792,34.989],[33.785,34.996],[33.776,34.995],[33.773,34.998]]]]}},{"type":"Feature","properties":{"code":"CG","name":"Republic of the Congo"},"geometry":{"type":"MultiPolygon","coordinates":[[[[18.628,3.476],[18.587,3.494],[18.492,3.639],[18.396,3.582],[18.272,3.58],[18.241,3.503],[18.173,3.477],[18.149,3.545],[18.057,3.569],[17.858,3.534],[17.834,3.611],[17.61,3.637],[17.469,3.705],[17.356,3.63],[17.017,3.551],[16.683,3.543],[16.576,3.48],[16.467,2.925],[16.501,2.847],[16.194,2.215],[16.156,2.19],[16.086,2.197],[16.053,1.981],[16.146,1.703],[16.026,1.656],[16.03,1.765],[15.489,1.983],[15.348,1.913],[15.226,2.032],[15.01,1.989],[14.611,2.179],[13.295,2.161],[13.135,1.572],[13.254,1.323],[13.155,1.234],[13.896,1.426],[14.252,1.398],[14.482,0.915],[14.261,0.573],[14.109,0.586],[13.886,0.267],[13.906,-0.229],[14.069,-0.208],[14.216,-0.383],[14.419,-0.448],[14.526,-0.578],[14.418,-1.894],[14.259,-1.976],[14.235,-2.157],[14.162,-2.239],[14.238,-2.337],[14.104,-2.493],[13.858,-2.469],[13.921,-2.356],[13.759,-2.093],[13.48,-2.432],[13.028,-2.331],[12.822,-1.911],[12.613,-1.813],[12.447,-1.92],[12.479,-2.326],[12.049,-2.417],[11.969,-2.336],[11.746,-2.399],[11.576,-2.334],[11.645,-2.619],[11.536,-2.857],[11.648,-2.811],[11.804,-3.004],[11.706,-3.077],[11.702,-3.175],[12.049,-3.345],[11.883,-3.538],[11.947,-3.624],[11.882,-3.75],[11.703,-3.675],[11.523,-3.518],[11.451,-3.584],[11.35,-3.601],[11.254,-3.712],[11.199,-3.983],[11.451,-4.494],[12.009,-5.026],[12.161,-4.901],[12.209,-4.756],[12.256,-4.794],[12.323,-4.784],[12.41,-4.606],[12.648,-4.559],[12.768,-4.387],[12.871,-4.403],[12.915,-4.479],[13.096,-4.637],[13.112,-4.594],[13.418,-4.899],[13.503,-4.778],[13.704,-4.726],[13.718,-4.449],[13.812,-4.418],[13.911,-4.509],[14.407,-4.284],[14.396,-4.366],[14.473,-4.429],[14.374,-4.561],[14.415,-4.883],[14.506,-4.85],[14.679,-4.921],[14.831,-4.808],[15.198,-4.324],[15.254,-4.311],[15.327,-4.273],[15.418,-4.284],[15.481,-4.221],[15.531,-4.042],[15.894,-3.951],[16.214,-3.297],[16.175,-3.25],[16.228,-2.595],[16.162,-2.166],[16.503,-1.879],[16.707,-1.458],[16.98,-1.128],[17.324,-0.993],[17.721,-0.527],[17.661,-0.265],[17.812,0.239],[17.939,0.324],[17.953,0.481],[17.87,0.589],[17.859,1.043],[18.08,1.586],[18.107,2.269],[18.639,3.193],[18.628,3.476]]]]}},{"type":"Feature","properties":{"code":"RO","name":"Romania"},"geometry":{"type":"MultiPolygon","coordinates":[[[[27.156,47.985],[27.03,48.091],[27.041,48.125],[26.961,48.13],[26.98,48.158],[26.943,48.197],[26.877,48.199],[26.812,48.25],[26.628,48.258],[26.552,48.224],[26.335,48.184],[26.177,47.992],[26.059,47.99],[25.777,47.939],[25.639,47.949],[25.238,47.894],[25.111,47.752],[24.889,47.723],[24.819,47.82],[24.706,47.844],[24.62,47.951],[24.436,47.971],[24.349,47.924],[24.226,47.902],[24.113,47.915],[24.065,47.953],[24.03,47.951],[24.008,47.968],[23.986,47.961],[23.963,47.967],[23.942,47.949],[23.894,47.945],[23.86,47.933],[23.809,47.981],[23.752,47.997],[23.663,47.988],[23.639,48.003],[23.565,48.005],[23.528,48.018],[23.498,47.969],[23.336,48.024],[23.274,48.082],[23.16,48.122],[23.113,48.081],[23.089,48.007],[23.016,47.993],[22.922,48.02],[22.943,47.967],[22.898,47.959],[22.78,47.872],[22.766,47.842],[22.672,47.787],[22.466,47.766],[22.42,47.739],[22.318,47.761],[22.009,47.505],[22.034,47.425],[22.011,47.378],[21.945,47.38],[21.784,47.111],[21.648,47.039],[21.686,46.996],[21.596,46.916],[21.593,46.869],[21.52,46.841],[21.489,46.758],[21.515,46.721],[21.439,46.651],[21.332,46.63],[21.269,46.499],[21.281,46.449],[21.169,46.301],[21.066,46.249],[20.868,46.289],[20.746,46.255],[20.761,46.21],[20.639,46.127],[20.497,46.187],[20.454,46.144],[20.356,46.166],[20.283,46.144],[20.261,46.123],[20.359,45.994],[20.548,45.899],[20.656,45.828],[20.701,45.749],[20.774,45.756],[20.784,45.785],[20.824,45.777],[20.804,45.659],[20.768,45.61],[20.833,45.536],[20.772,45.498],[20.86,45.473],[20.879,45.427],[21.099,45.301],[21.176,45.326],[21.204,45.268],[21.294,45.241],[21.483,45.196],[21.513,45.153],[21.451,45.043],[21.359,45.019],[21.549,44.933],[21.563,44.895],[21.482,44.872],[21.44,44.876],[21.356,44.864],[21.388,44.781],[21.55,44.773],[21.6,44.752],[21.619,44.671],[21.675,44.671],[21.717,44.653],[21.779,44.662],[21.994,44.634],[22.08,44.498],[22.132,44.474],[22.183,44.482],[22.308,44.662],[22.453,44.719],[22.619,44.615],[22.692,44.616],[22.767,44.544],[22.71,44.519],[22.614,44.557],[22.565,44.534],[22.54,44.478],[22.454,44.473],[22.56,44.307],[22.682,44.282],[22.672,44.216],[23.05,44.077],[23.017,44.019],[22.879,43.984],[22.838,43.881],[22.853,43.845],[23.053,43.795],[23.268,43.848],[23.451,43.849],[23.617,43.793],[23.74,43.806],[24.181,43.682],[24.354,43.702],[24.503,43.763],[24.623,43.741],[24.735,43.685],[24.967,43.727],[25.107,43.683],[25.171,43.703],[25.395,43.619],[25.728,43.693],[25.949,43.857],[26.056,43.909],[26.101,43.969],[26.388,44.044],[26.627,44.057],[26.951,44.136],[27.268,44.126],[27.398,44.014],[27.608,44.012],[27.645,44.05],[27.735,43.953],[27.92,44.008],[27.996,43.842],[28.233,43.76],[29.243,43.709],[30.044,45.085],[29.693,45.192],[29.654,45.256],[29.682,45.269],[29.598,45.389],[29.426,45.445],[29.248,45.434],[28.961,45.332],[28.943,45.28],[28.814,45.338],[28.789,45.242],[28.714,45.226],[28.573,45.248],[28.346,45.321],[28.285,45.439],[28.211,45.469],[28.187,45.474],[28.089,45.605],[28.166,45.642],[28.131,45.928],[28.086,46.011],[28.137,46.181],[28.109,46.229],[28.199,46.319],[28.189,46.353],[28.258,46.433],[28.223,46.505],[28.248,46.643],[28.122,46.823],[28.091,46.976],[27.819,47.138],[27.732,47.292],[27.687,47.29],[27.603,47.325],[27.557,47.466],[27.479,47.481],[27.398,47.595],[27.322,47.64],[27.255,47.714],[27.291,47.737],[27.162,47.924],[27.156,47.985]]]]}},{"type":"Feature","properties":{"code":"RW","name":"Rwanda"},"geometry":{"type":"MultiPolygon","coordinates":[[[[30.472,-1.056],[30.352,-1.069],[30.164,-1.343],[29.912,-1.483],[29.827,-1.312],[29.591,-1.39],[29.531,-1.405],[29.45,-1.505],[29.363,-1.509],[29.243,-1.668],[29.245,-1.697],[29.118,-1.906],[29.176,-2.123],[29.105,-2.27],[29.001,-2.29],[28.956,-2.373],[28.896,-2.373],[28.868,-2.419],[28.868,-2.449],[28.891,-2.476],[28.893,-2.49],[28.888,-2.505],[28.875,-2.509],[28.862,-2.523],[28.862,-2.532],[28.879,-2.552],[28.893,-2.558],[28.902,-2.624],[28.898,-2.661],[28.943,-2.691],[29.004,-2.706],[29.041,-2.742],[29.056,-2.586],[29.322,-2.648],[29.368,-2.829],[29.882,-2.751],[29.959,-2.333],[30.14,-2.436],[30.429,-2.311],[30.545,-2.414],[30.839,-2.358],[30.893,-2.082],[30.808,-1.915],[30.841,-1.647],[30.72,-1.432],[30.571,-1.333],[30.509,-1.164],[30.451,-1.106],[30.472,-1.056]]]]}},{"type":"Feature","properties":{"code":"RE","name":"Réunion","country":"France"},"geometry":{"type":"MultiPolygon","coordinates":[[[[54.943,-21.433],[56.223,-21.474],[55.371,-20.391],[54.943,-21.433]]]]}},{"type":"Feature","properties":{"code":"NL","name":"Saba","country":"Netherlands"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-63.077,17.797],[-63.813,17.95],[-63.229,17.326],[-63.077,17.797]]]]}},{"type":"Feature","properties":{"code":"SH","name":"Saint Helena","country":"United Kingdom"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-6.614,-15.274],[-5.823,-17.078],[-4.493,-15.464],[-6.614,-15.274]]]]}},{"type":"Feature","properties":{"code":"PM","name":"Saint Pierre and Miquelon","country":"France"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-56.73,46.656],[-55.908,46.622],[-56.275,47.397],[-56.73,46.656]]]]}},{"type":"Feature","properties":{"code":"BL","name":"Saint-Barthélemy","country":"France"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-62.627,18.262],[-63.105,17.867],[-62.344,17.492],[-62.627,18.262]]]]}},{"type":"Feature","properties":{"code":"MF","name":"Saint-Martin","country":"France"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-62.939,18.029],[-62.627,18.262],[-63.36,18.06],[-63.331,17.962],[-63.135,18.054],[-63.11,18.053],[-63.097,18.046],[-63.078,18.049],[-63.058,18.066],[-63.04,18.056],[-63.023,18.058],[-62.939,18.029]]]]}},{"type":"Feature","properties":{"code":"WS","name":"Samoa"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-173.167,-13.694],[-171.255,-14.339],[-170.999,-10.771],[-173.167,-13.694]]]]}},{"type":"Feature","properties":{"code":"SM","name":"San Marino"},"geometry":{"type":"MultiPolygon","coordinates":[[[[12.456,43.894],[12.488,43.897],[12.494,43.91],[12.492,43.918],[12.497,43.922],[12.503,43.924],[12.505,43.93],[12.516,43.941],[12.514,43.949],[12.507,43.958],[12.509,43.962],[12.506,43.971],[12.511,43.972],[12.511,43.982],[12.515,43.985],[12.515,43.991],[12.507,43.991],[12.494,43.985],[12.479,43.981],[12.462,43.975],[12.447,43.966],[12.437,43.957],[12.42,43.958],[12.414,43.953],[12.404,43.955],[12.405,43.943],[12.412,43.938],[12.416,43.93],[12.407,43.924],[12.412,43.91],[12.409,43.902],[12.416,43.9],[12.442,43.905],[12.456,43.894]]]]}},{"type":"Feature","properties":{"code":"SA","name":"Saudi Arabia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[40.015,32.057],[39.299,32.233],[38.992,31.997],[36.998,31.501],[37.994,30.5],[37.664,30.332],[37.497,29.999],[36.751,29.869],[36.5,29.497],[36.071,29.185],[34.881,29.369],[34.445,27.915],[37.856,22.009],[39.638,18.373],[40.992,15.817],[42.152,16.402],[42.768,16.404],[42.946,16.397],[42.944,16.495],[42.972,16.511],[43.116,16.532],[43.153,16.672],[43.221,16.652],[43.213,16.744],[43.259,16.753],[43.263,16.795],[43.248,16.806],[43.23,16.806],[43.22,16.839],[43.183,16.849],[43.14,16.907],[43.193,16.947],[43.181,16.984],[43.182,17.027],[43.24,17.034],[43.178,17.147],[43.202,17.259],[43.327,17.312],[43.225,17.383],[43.292,17.532],[43.43,17.561],[43.706,17.358],[44.501,17.475],[46.31,17.205],[46.765,17.292],[47.006,16.948],[47.482,17.108],[47.584,17.504],[48.2,18.206],[49.049,18.599],[52.003,19.001],[54.998,20.001],[55.665,21.997],[55.214,22.711],[55.136,22.633],[52.566,22.943],[51.596,24.12],[51.589,24.273],[51.416,24.396],[51.588,24.666],[51.395,24.628],[51.3,24.507],[51.096,24.469],[50.93,24.544],[50.813,24.74],[50.571,25.579],[50.302,25.876],[50.269,26.082],[50.382,26.54],[50.718,26.731],[50.377,27.892],[49.989,27.878],[49.004,28.815],[48.43,28.536],[47.706,28.522],[47.599,28.668],[47.584,28.834],[47.462,29.001],[46.553,29.103],[46.424,29.059],[44.723,29.197],[42.978,30.483],[42.976,30.722],[40.015,32.057]]]]}},{"type":"Feature","properties":{"code":"GB","name":"Scotland","country":"United Kingdom"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-1.241,57.645],[-0.375,61.322],[-9.454,57.722],[-6.348,55.492],[-4.69,54.363],[-3.384,54.943],[-3.094,54.949],[-3.029,55.046],[-2.635,55.195],[-2.61,55.285],[-2.171,55.459],[-2.306,55.627],[-2.004,55.82],[-1.241,57.645]]]]}},{"type":"Feature","properties":{"code":"SN","name":"Senegal"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-14.321,16.615],[-15.006,16.65],[-15.651,16.503],[-16.27,16.516],[-16.443,16.206],[-16.448,16.098],[-16.49,16.05],[-16.502,16.076],[-17.65,14.722],[-16.705,13.591],[-15.479,13.588],[-15.365,13.793],[-14.937,13.802],[-14.347,13.466],[-13.896,13.591],[-13.794,13.345],[-14.368,13.23],[-15.149,13.58],[-15.269,13.378],[-15.805,13.348],[-15.804,13.167],[-16.693,13.168],[-16.747,13.06],[-17.44,13.046],[-17.462,11.924],[-16.706,12.348],[-16.382,12.364],[-16.206,12.462],[-15.673,12.43],[-15.176,12.685],[-13.705,12.68],[-13.053,12.64],[-13.066,12.493],[-12.873,12.519],[-12.354,12.328],[-11.913,12.42],[-11.463,12.446],[-11.375,12.408],[-11.399,12.978],[-11.63,13.392],[-11.833,13.333],[-12.069,13.71],[-11.93,13.845],[-12.239,14.763],[-13.11,15.521],[-13.431,16.09],[-13.801,16.14],[-14.321,16.615]]]]}},{"type":"Feature","properties":{"code":"RS","name":"Serbia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[19.66,46.19],[19.561,46.168],[19.525,46.117],[19.288,45.997],[19.145,46],[19.104,46.04],[19.079,45.965],[19.013,45.965],[18.997,45.935],[18.814,45.913],[18.858,45.855],[18.903,45.719],[18.967,45.667],[18.888,45.573],[18.946,45.537],[19.075,45.531],[19.084,45.488],[18.999,45.493],[18.974,45.375],[19.108,45.295],[19.282,45.238],[19.419,45.235],[19.436,45.171],[19.191,45.179],[19.141,45.13],[19.08,45.147],[19.101,45.012],[19.052,44.977],[19.156,44.954],[19.069,44.899],[19.029,44.925],[18.99,44.906],[19.02,44.855],[19.182,44.921],[19.367,44.882],[19.325,44.741],[19.264,44.654],[19.167,44.522],[19.134,44.525],[19.123,44.501],[19.148,44.453],[19.147,44.415],[19.118,44.403],[19.107,44.394],[19.107,44.382],[19.104,44.378],[19.103,44.369],[19.119,44.367],[19.108,44.356],[19.115,44.342],[19.136,44.338],[19.133,44.315],[19.167,44.286],[19.183,44.284],[19.205,44.292],[19.233,44.261],[19.269,44.27],[19.325,44.272],[19.348,44.232],[19.359,44.184],[19.409,44.167],[19.439,44.131],[19.473,44.15],[19.484,44.143],[19.473,44.119],[19.512,44.082],[19.56,44.069],[19.575,44.047],[19.62,44.053],[19.618,44.015],[19.565,43.999],[19.525,43.956],[19.384,43.966],[19.244,44.015],[19.235,43.988],[19.399,43.797],[19.518,43.714],[19.505,43.584],[19.427,43.58],[19.419,43.541],[19.367,43.609],[19.334,43.588],[19.255,43.594],[19.248,43.531],[19.228,43.526],[19.222,43.479],[19.443,43.388],[19.482,43.326],[19.53,43.316],[19.546,43.252],[19.627,43.229],[19.641,43.19],[19.769,43.16],[19.793,43.12],[19.926,43.085],[19.965,43.111],[19.989,43.054],[20.047,43.027],[20.054,42.996],[20.123,42.962],[20.149,42.991],[20.164,42.972],[20.345,42.907],[20.357,42.834],[20.406,42.849],[20.437,42.832],[20.535,42.889],[20.487,42.932],[20.599,43.011],[20.646,43.008],[20.695,43.096],[20.599,43.205],[20.687,43.213],[20.738,43.251],[20.821,43.268],[20.887,43.217],[20.837,43.178],[20.963,43.124],[21.007,43.14],[21.054,43.107],[21.09,43.135],[21.145,43.111],[21.167,42.997],[21.204,43.023],[21.239,43.008],[21.235,42.955],[21.272,42.899],[21.33,42.904],[21.369,42.874],[21.44,42.873],[21.39,42.749],[21.475,42.747],[21.592,42.726],[21.588,42.704],[21.663,42.678],[21.75,42.701],[21.794,42.659],[21.757,42.627],[21.733,42.55],[21.705,42.542],[21.703,42.519],[21.626,42.451],[21.642,42.411],[21.629,42.377],[21.59,42.38],[21.57,42.365],[21.535,42.368],[21.526,42.336],[21.568,42.309],[21.59,42.259],[21.701,42.238],[21.772,42.265],[21.847,42.325],[21.916,42.304],[21.944,42.347],[22.029,42.298],[22.164,42.321],[22.296,42.375],[22.293,42.349],[22.348,42.317],[22.459,42.338],[22.475,42.392],[22.52,42.399],[22.557,42.501],[22.44,42.569],[22.5,42.741],[22.433,42.821],[22.543,42.878],[22.748,42.887],[22.784,42.983],[22.895,43.036],[22.981,43.112],[23.008,43.193],[22.897,43.224],[22.82,43.337],[22.534,43.472],[22.476,43.656],[22.41,43.696],[22.356,43.813],[22.414,44.005],[22.617,44.065],[22.617,44.169],[22.672,44.216],[22.682,44.282],[22.56,44.307],[22.454,44.473],[22.54,44.478],[22.565,44.534],[22.614,44.557],[22.71,44.519],[22.767,44.544],[22.692,44.616],[22.619,44.615],[22.453,44.719],[22.308,44.662],[22.183,44.482],[22.132,44.474],[22.08,44.498],[21.994,44.634],[21.779,44.662],[21.717,44.653],[21.675,44.671],[21.619,44.671],[21.6,44.752],[21.55,44.773],[21.388,44.781],[21.356,44.864],[21.44,44.876],[21.482,44.872],[21.563,44.895],[21.549,44.933],[21.359,45.019],[21.451,45.043],[21.513,45.153],[21.483,45.196],[21.294,45.241],[21.204,45.268],[21.176,45.326],[21.099,45.301],[20.879,45.427],[20.86,45.473],[20.772,45.498],[20.833,45.536],[20.768,45.61],[20.804,45.659],[20.824,45.777],[20.784,45.785],[20.774,45.756],[20.701,45.749],[20.656,45.828],[20.548,45.899],[20.359,45.994],[20.261,46.123],[20.097,46.173],[20.035,46.145],[20.018,46.177],[19.935,46.176],[19.815,46.131],[19.66,46.19]]]]}},{"type":"Feature","properties":{"code":"SC","name":"Seychelles"},"geometry":{"type":"MultiPolygon","coordinates":[[[[43.751,-10.389],[54.832,-10.936],[57.189,-1.994],[43.751,-10.389]]]]}},{"type":"Feature","properties":{"code":"SL","name":"Sierra Leone"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-10.276,8.487],[-10.373,8.489],[-10.549,8.312],[-10.639,8.353],[-10.706,8.292],[-10.614,8.531],[-10.477,8.677],[-10.562,8.812],[-10.578,9.064],[-10.745,9.08],[-10.653,9.299],[-11.212,10.001],[-11.896,9.998],[-11.91,9.939],[-12.126,9.872],[-12.243,9.924],[-12.473,9.868],[-12.768,9.313],[-12.941,9.263],[-13.09,9.041],[-13.186,9.092],[-13.299,9.042],[-14.362,8.641],[-12.15,6.16],[-11.504,6.927],[-11.403,6.977],[-11.294,7.216],[-10.604,7.774],[-10.605,8.041],[-10.575,8.048],[-10.516,8.139],[-10.45,8.156],[-10.352,8.152],[-10.298,8.213],[-10.316,8.286],[-10.301,8.3],[-10.276,8.487]]]]}},{"type":"Feature","properties":{"code":"SG","name":"Singapore"},"geometry":{"type":"MultiPolygon","coordinates":[[[[104.001,1.424],[103.934,1.429],[103.896,1.428],[103.864,1.463],[103.812,1.48],[103.764,1.452],[103.742,1.45],[103.722,1.461],[103.675,1.432],[103.627,1.353],[103.566,1.197],[103.66,1.188],[103.741,1.129],[104.031,1.27],[104.123,1.277],[104.081,1.36],[104.092,1.397],[104.089,1.42],[104.073,1.433],[104.046,1.447],[104.023,1.444],[104.001,1.424]]]]}},{"type":"Feature","properties":{"code":"NL","name":"Sint Eustatius","country":"Netherlands"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-63.077,17.797],[-63.35,16.942],[-62.767,17.644],[-63.077,17.797]]]]}},{"type":"Feature","properties":{"code":"SX","name":"Sint Maarten","country":"Netherlands"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-63.331,17.962],[-63.105,17.867],[-62.939,18.029],[-63.023,18.058],[-63.04,18.056],[-63.058,18.066],[-63.078,18.049],[-63.097,18.046],[-63.11,18.053],[-63.135,18.054],[-63.331,17.962]]]]}},{"type":"Feature","properties":{"code":"SK","name":"Slovakia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[19.822,49.278],[19.786,49.417],[19.721,49.393],[19.637,49.409],[19.642,49.452],[19.578,49.461],[19.533,49.529],[19.526,49.573],[19.453,49.616],[19.378,49.574],[19.36,49.537],[19.254,49.534],[19.18,49.412],[18.974,49.396],[18.973,49.499],[18.945,49.521],[18.845,49.517],[18.748,49.492],[18.678,49.509],[18.614,49.498],[18.572,49.512],[18.531,49.49],[18.548,49.471],[18.447,49.395],[18.408,49.4],[18.414,49.365],[18.364,49.327],[18.185,49.289],[18.15,49.245],[18.11,49.086],[18.069,49.032],[17.918,49.018],[17.878,48.927],[17.779,48.923],[17.731,48.879],[17.709,48.867],[17.529,48.811],[17.457,48.85],[17.385,48.809],[17.291,48.855],[17.194,48.876],[17.112,48.829],[17.002,48.709],[16.94,48.604],[16.946,48.536],[16.852,48.45],[16.85,48.383],[16.836,48.384],[16.833,48.381],[16.842,48.353],[16.909,48.325],[16.895,48.313],[16.977,48.174],[17.029,48.14],[17.057,48.142],[17.092,48.094],[17.07,48.032],[17.16,48.006],[17.237,48.021],[17.712,47.755],[18.029,47.757],[18.293,47.735],[18.565,47.766],[18.665,47.768],[18.741,47.816],[18.851,47.823],[18.768,47.875],[18.761,47.975],[18.822,48.042],[19.02,48.071],[19.239,48.059],[19.282,48.083],[19.48,48.094],[19.525,48.198],[19.633,48.25],[19.925,48.128],[20.243,48.278],[20.299,48.261],[20.521,48.533],[20.832,48.582],[21.115,48.495],[21.441,48.585],[21.607,48.504],[21.671,48.399],[21.725,48.346],[21.828,48.333],[21.833,48.362],[22.147,48.401],[22.16,48.565],[22.214,48.622],[22.342,48.689],[22.429,48.929],[22.483,48.992],[22.543,49.014],[22.562,49.089],[22.044,49.221],[21.964,49.344],[21.829,49.395],[21.78,49.354],[21.623,49.445],[21.434,49.414],[21.279,49.46],[21.198,49.405],[21.125,49.437],[21.041,49.418],[21.098,49.372],[20.987,49.308],[20.923,49.296],[20.78,49.354],[20.723,49.418],[20.617,49.418],[20.563,49.375],[20.464,49.416],[20.399,49.39],[20.317,49.399],[20.315,49.348],[20.22,49.353],[20.137,49.317],[20.082,49.181],[19.985,49.229],[19.905,49.235],[19.864,49.193],[19.753,49.208],[19.822,49.278]]]]}},{"type":"Feature","properties":{"code":"SI","name":"Slovenia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[16.501,46.567],[16.392,46.637],[16.386,46.655],[16.419,46.662],[16.426,46.692],[16.378,46.7],[16.31,46.779],[16.313,46.798],[16.341,46.806],[16.345,46.838],[16.294,46.871],[16.236,46.878],[16.219,46.87],[16.157,46.854],[16.144,46.855],[16.11,46.867],[16.058,46.839],[15.991,46.828],[15.991,46.782],[15.984,46.75],[15.998,46.727],[16.028,46.711],[16.043,46.687],[16.04,46.655],[16,46.679],[15.985,46.685],[15.949,46.688],[15.877,46.721],[15.816,46.719],[15.785,46.707],[15.768,46.699],[15.738,46.7],[15.723,46.695],[15.695,46.698],[15.674,46.707],[15.654,46.706],[15.654,46.692],[15.636,46.689],[15.633,46.681],[15.623,46.679],[15.598,46.689],[15.545,46.67],[15.553,46.65],[15.544,46.631],[15.469,46.613],[15.455,46.637],[15.412,46.656],[15.237,46.64],[15.142,46.661],[15.015,46.641],[14.98,46.601],[14.96,46.635],[14.923,46.608],[14.871,46.61],[14.864,46.594],[14.835,46.566],[14.818,46.51],[14.722,46.5],[14.669,46.449],[14.594,46.434],[14.565,46.372],[14.522,46.426],[14.459,46.417],[14.426,46.446],[14.314,46.433],[14.283,46.443],[14.16,46.433],[14.121,46.477],[14.04,46.491],[14.004,46.485],[13.898,46.523],[13.715,46.522],[13.687,46.439],[13.598,46.441],[13.576,46.426],[13.576,46.409],[13.47,46.362],[13.434,46.36],[13.448,46.335],[13.377,46.297],[13.422,46.208],[13.476,46.227],[13.561,46.205],[13.567,46.187],[13.645,46.19],[13.665,46.174],[13.641,46.136],[13.571,46.09],[13.501,46.06],[13.496,46.048],[13.51,46.045],[13.497,46.018],[13.475,46.005],[13.501,45.981],[13.53,45.966],[13.568,45.97],[13.589,45.99],[13.621,45.984],[13.635,45.989],[13.643,45.983],[13.633,45.949],[13.638,45.936],[13.619,45.918],[13.609,45.899],[13.596,45.894],[13.586,45.882],[13.576,45.843],[13.589,45.835],[13.598,45.807],[13.67,45.8],[13.823,45.718],[13.833,45.709],[13.834,45.687],[13.879,45.652],[13.919,45.632],[13.87,45.608],[13.868,45.599],[13.841,45.582],[13.784,45.583],[13.746,45.598],[13.72,45.594],[13.608,45.648],[13.456,45.595],[13.57,45.489],[13.629,45.459],[13.674,45.444],[13.778,45.468],[13.817,45.437],[13.881,45.426],[13.908,45.451],[13.973,45.453],[13.995,45.476],[13.961,45.508],[14.006,45.524],[14.071,45.488],[14.203,45.469],[14.224,45.504],[14.242,45.506],[14.266,45.482],[14.277,45.49],[14.325,45.471],[14.367,45.486],[14.498,45.544],[14.501,45.609],[14.538,45.62],[14.574,45.672],[14.61,45.664],[14.596,45.628],[14.697,45.574],[14.686,45.53],[14.717,45.534],[14.801,45.495],[14.82,45.459],[14.906,45.478],[14.923,45.528],[15.024,45.485],[15.052,45.491],[15.169,45.423],[15.278,45.467],[15.331,45.453],[15.382,45.488],[15.302,45.532],[15.298,45.584],[15.277,45.605],[15.31,45.63],[15.347,45.634],[15.342,45.647],[15.39,45.637],[15.406,45.647],[15.349,45.716],[15.309,45.69],[15.254,45.723],[15.408,45.795],[15.475,45.798],[15.473,45.825],[15.522,45.822],[15.58,45.85],[15.642,45.829],[15.667,45.841],[15.704,45.846],[15.682,45.868],[15.684,45.889],[15.68,45.905],[15.706,45.921],[15.703,46],[15.712,46.012],[15.73,46.047],[15.623,46.091],[15.608,46.12],[15.599,46.148],[15.649,46.192],[15.643,46.214],[15.674,46.225],[15.754,46.22],[15.755,46.203],[15.788,46.217],[15.793,46.258],[15.98,46.307],[16.076,46.346],[16.073,46.365],[16.051,46.383],[16.053,46.391],[16.149,46.405],[16.188,46.383],[16.302,46.378],[16.302,46.404],[16.273,46.415],[16.274,46.429],[16.251,46.481],[16.24,46.497],[16.268,46.506],[16.267,46.515],[16.298,46.512],[16.372,46.55],[16.388,46.536],[16.44,46.517],[16.501,46.496],[16.526,46.478],[16.595,46.475],[16.526,46.505],[16.529,46.533],[16.501,46.567]]]]}},{"type":"Feature","properties":{"code":"SB","name":"Solomon Islands"},"geometry":{"type":"MultiPolygon","coordinates":[[[[169.244,-12.415],[168.458,-10.243],[157.628,-5.696],[156.033,-6.555],[156.04,-6.657],[155.926,-6.847],[155.698,-6.927],[155.607,-6.923],[154.748,-7.333],[160.148,-12.329],[169.244,-12.415]]]]}},{"type":"Feature","properties":{"code":"SO","name":"Somalia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[51.36,12.405],[43.482,11.758],[42.958,10.985],[42.695,10.627],[42.876,10.184],[43.094,9.906],[43.235,9.846],[43.326,9.592],[44.192,8.93],[46.993,7.999],[47.925,8.001],[47.979,8.001],[44.981,4.918],[44.024,4.945],[43.403,4.793],[43.042,4.579],[42.977,4.44],[42.845,4.284],[42.559,4.205],[42.076,4.177],[41.895,3.974],[41.314,3.143],[40.988,2.83],[41.001,-0.831],[41.56,-1.598],[41.564,-1.664],[41.755,-1.853],[48.142,3.338],[52.031,10.531],[51.36,12.405]]]]}},{"type":"Feature","properties":{"code":"ZA","name":"South Africa"},"geometry":{"type":"MultiPolygon","coordinates":[[[[31.306,-22.422],[31.163,-22.326],[31.089,-22.349],[30.867,-22.289],[30.629,-22.326],[30.487,-22.314],[30.386,-22.345],[30.284,-22.356],[30.227,-22.296],[30.131,-22.308],[29.922,-22.194],[29.768,-22.141],[29.646,-22.129],[29.377,-22.196],[29.22,-22.178],[29.19,-22.186],[29.153,-22.214],[29.109,-22.212],[29.015,-22.229],[28.919,-22.443],[28.633,-22.559],[28.349,-22.569],[28.046,-22.839],[28.048,-22.902],[27.937,-22.962],[27.935,-23.049],[27.742,-23.214],[27.607,-23.219],[27.524,-23.38],[27.338,-23.409],[26.997,-23.655],[26.842,-24.249],[26.517,-24.472],[26.463,-24.604],[26.394,-24.635],[25.852,-24.757],[25.843,-24.787],[25.886,-24.878],[25.727,-25.255],[25.697,-25.293],[25.664,-25.449],[25.585,-25.634],[25.331,-25.766],[25.123,-25.759],[25.017,-25.725],[24.895,-25.807],[24.673,-25.817],[24.447,-25.73],[24.365,-25.773],[24.183,-25.629],[23.924,-25.643],[23.476,-25.3],[23.035,-25.3],[22.86,-25.506],[22.708,-25.992],[22.564,-26.197],[22.419,-26.231],[22.212,-26.377],[22.062,-26.619],[21.907,-26.668],[21.833,-26.66],[21.771,-26.69],[21.785,-26.792],[21.693,-26.862],[21.379,-26.821],[21.134,-26.867],[20.87,-26.8],[20.686,-26.904],[20.633,-26.782],[20.618,-26.469],[20.861,-26.149],[20.648,-25.478],[20.298,-24.949],[20.037,-24.81],[20.028,-24.787],[19.998,-24.768],[19.999,-28.426],[18.999,-28.892],[17.458,-28.687],[17.154,-28.086],[16.904,-28.057],[16.599,-28.532],[16.466,-28.571],[16.449,-28.651],[18.369,-35.299],[28.367,-33.797],[32.761,-28.488],[33.028,-26.878],[32.352,-26.86],[32.296,-26.852],[32.223,-26.841],[32.194,-26.84],[32.133,-26.843],[32.097,-26.807],[32.009,-26.81],[31.975,-27.111],[31.976,-27.317],[31.498,-27.315],[31.15,-27.202],[30.961,-27.024],[30.978,-26.927],[30.888,-26.796],[30.811,-26.847],[30.789,-26.483],[30.958,-26.263],[31.131,-25.916],[31.312,-25.743],[31.418,-25.719],[31.869,-26],[31.974,-25.954],[31.926,-25.842],[32.006,-25.65],[31.979,-25.464],[32.017,-25.381],[32.032,-25.108],[31.983,-24.3],[31.904,-24.189],[31.877,-23.953],[31.774,-23.901],[31.702,-23.727],[31.679,-23.609],[31.565,-23.473],[31.558,-23.176],[31.306,-22.422]],[[29.332,-29.456],[29.285,-29.585],[29.126,-29.763],[29.165,-29.917],[28.934,-30.051],[28.802,-30.106],[28.686,-30.129],[28.399,-30.159],[28.232,-30.285],[28.121,-30.681],[27.748,-30.606],[27.695,-30.559],[27.678,-30.534],[27.652,-30.517],[27.621,-30.505],[27.568,-30.446],[27.569,-30.425],[27.455,-30.322],[27.381,-30.335],[27.366,-30.272],[27.373,-30.194],[27.408,-30.146],[27.326,-30.148],[27.296,-30.055],[27.227,-30.007],[27.095,-29.728],[27.01,-29.654],[27.335,-29.482],[27.436,-29.335],[27.473,-29.32],[27.451,-29.297],[27.487,-29.293],[27.543,-29.256],[27.516,-29.226],[27.56,-29.19],[27.755,-28.898],[27.891,-28.916],[27.889,-28.882],[27.939,-28.849],[27.987,-28.879],[28.025,-28.86],[28.132,-28.729],[28.235,-28.695],[28.305,-28.695],[28.406,-28.622],[28.651,-28.57],[28.68,-28.587],[29.405,-29.212],[29.449,-29.377],[29.332,-29.456]]]]}},{"type":"Feature","properties":{"code":"GS","name":"South Georgia and South Sandwich","country":"United Kingdom"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-36.552,-53.087],[-39.386,-54.521],[-34.926,-55.204],[-36.552,-53.087]]]]}},{"type":"Feature","properties":{"code":"KR","name":"South Korea"},"geometry":{"type":"MultiPolygon","coordinates":[[[[131.11009210487347,37.56178752207644],[128.657,38.619],[128.375,38.623],[128.311,38.585],[128.277,38.417],[128.029,38.319],[127.55,38.323],[127.497,38.306],[127.387,38.332],[127.157,38.307],[127.045,38.255],[126.953,38.177],[126.959,38.135],[126.881,38.102],[126.85,38.034],[126.67,37.959],[126.688,37.917],[126.688,37.837],[126.661,37.79],[126.599,37.764],[126.567,37.769],[126.468,37.809],[126.432,37.841],[126.244,37.831],[126.191,37.815],[126.188,37.747],[126.131,37.705],[125.812,37.729],[125.371,37.626],[125.064,37.663],[124.879,37.808],[124.842,37.977],[124.677,38.057],[124.56419137799635,37.97922765390567],[124.54882720233734,37.76423242416224],[125.81043174487411,36.0433930727154],[124.78744434074001,34.181925010683834],[126.38392569976395,32.87827203425858],[129.4123989317896,34.92424684255882],[131.11009210487347,37.56178752207644]]]]}},{"type":"Feature","properties":{"code":"SS","name":"South Sudan"},"geometry":{"type":"MultiPolygon","coordinates":[[[[34.102,9.502],[33.88,9.499],[33.908,9.762],[33.963,9.81],[33.992,9.996],[33.97,10.154],[33.902,10.172],[33.809,10.33],[33.666,10.443],[33.523,10.644],[33.246,10.779],[33.27,10.836],[33.14,11.432],[33.259,12.221],[32.739,12.228],[32.739,11.952],[32.101,11.952],[32.396,11.702],[32.394,11.182],[32.47,11.047],[31.992,10.651],[31.775,10.289],[31.285,9.753],[30.846,9.75],[30.829,9.715],[30.53,9.96],[30.004,10.286],[29.946,10.292],[29.54,10.079],[29.538,9.751],[29.07,9.748],[29,9.672],[27.907,9.613],[27.144,9.629],[26.707,9.487],[26.358,9.579],[26.213,9.915],[25.932,10.179],[25.932,10.382],[25.781,10.426],[25.092,10.337],[25.057,10.068],[24.977,9.908],[24.847,9.806],[24.494,9.8],[24.127,9.738],[24.093,9.666],[23.692,9.676],[23.622,9.538],[23.65,9.443],[23.644,9.286],[23.563,9.194],[23.485,9.17],[23.447,8.991],[23.591,8.997],[23.519,8.717],[24.257,8.693],[24.132,8.37],[24.36,8.262],[24.852,8.169],[24.989,7.966],[25.253,7.849],[25.292,7.667],[25.206,7.611],[25.203,7.503],[25.353,7.426],[25.375,7.33],[25.901,7.095],[26.38,6.635],[26.327,6.363],[26.583,6.199],[26.517,6.097],[27.227,5.713],[27.227,5.629],[27.286,5.564],[27.23,5.372],[27.269,5.259],[27.44,5.073],[27.567,4.894],[27.655,4.894],[27.765,4.793],[27.796,4.6],[28.207,4.356],[28.665,4.426],[28.813,4.488],[29.031,4.488],[29.222,4.343],[29.433,4.501],[29.497,4.701],[29.821,4.562],[29.797,4.378],[30.07,4.132],[30.162,4.106],[30.224,3.939],[30.277,3.957],[30.477,3.834],[30.554,3.845],[30.574,3.746],[30.563,3.627],[30.785,3.671],[30.807,3.605],[30.86,3.574],[30.852,3.489],[30.976,3.693],[31.167,3.799],[31.295,3.801],[31.505,3.678],[31.508,3.637],[31.721,3.744],[31.815,3.821],[31.868,3.787],[31.962,3.65],[31.959,3.574],[32.052,3.589],[32.085,3.563],[32.089,3.535],[32.199,3.509],[32.208,3.605],[32.413,3.748],[32.72,3.773],[32.897,3.813],[33.029,3.893],[33.184,3.778],[33.513,3.751],[33.987,4.233],[34.476,4.722],[35.342,5.024],[35.31,4.904],[35.478,4.919],[35.424,4.77],[35.514,4.616],[35.942,4.619],[35.821,4.774],[35.82,5.108],[35.858,5.334],[35.508,5.424],[35.299,5.34],[35.312,5.501],[35.131,5.621],[35.126,5.689],[35.005,5.894],[34.962,6.264],[35.017,6.47],[34.877,6.602],[34.775,6.596],[34.651,6.726],[34.538,6.748],[34.539,6.828],[34.477,6.911],[34.358,6.92],[34.194,7.044],[34.194,7.128],[34.015,7.257],[34.039,7.274],[34.03,7.364],[33.876,7.549],[33.714,7.66],[33.447,7.754],[33.325,7.713],[33.246,7.779],[33.049,7.79],[33.001,7.903],[33.084,8.058],[33.181,8.13],[33.185,8.293],[33.197,8.403],[33.312,8.455],[33.546,8.471],[33.669,8.444],[33.714,8.368],[33.872,8.419],[33.896,8.484],[34.013,8.5],[34.145,8.602],[34.143,9.047],[34.102,9.502]]]]}},{"type":"Feature","properties":{"code":"ES","name":"Spain"},"geometry":{"type":"MultiPolygon","coordinates":[[[[3.754,42.334],[3.172,42.435],[3.114,42.436],[3.1,42.426],[3.082,42.427],[3.037,42.474],[2.965,42.467],[2.943,42.482],[2.921,42.457],[2.884,42.459],[2.87,42.468],[2.857,42.454],[2.843,42.457],[2.775,42.41],[2.755,42.426],[2.721,42.423],[2.653,42.388],[2.675,42.34],[2.579,42.358],[2.555,42.354],[2.544,42.334],[2.485,42.339],[2.435,42.376],[2.433,42.394],[2.385,42.4],[2.256,42.438],[2.206,42.416],[2.166,42.423],[2.128,42.413],[2.116,42.384],[2.062,42.359],[2.005,42.354],[1.965,42.378],[1.957,42.424],[1.941,42.43],[1.941,42.433],[1.943,42.443],[1.937,42.454],[1.889,42.45],[1.83,42.484],[1.763,42.489],[1.725,42.503],[1.706,42.489],[1.668,42.508],[1.657,42.471],[1.589,42.463],[1.58,42.45],[1.559,42.458],[1.551,42.433],[1.513,42.43],[1.445,42.437],[1.438,42.478],[1.416,42.483],[1.467,42.509],[1.448,42.544],[1.412,42.535],[1.423,42.56],[1.445,42.567],[1.425,42.583],[1.442,42.602],[1.356,42.719],[1.159,42.714],[1.08,42.786],[0.983,42.788],[0.962,42.806],[0.931,42.792],[0.711,42.864],[0.661,42.84],[0.654,42.759],[0.679,42.695],[0.402,42.698],[0.363,42.723],[0.294,42.674],[0.253,42.717],[0.176,42.734],[-0.025,42.685],[-0.105,42.728],[-0.161,42.795],[-0.179,42.79],[-0.312,42.848],[-0.388,42.801],[-0.413,42.808],[-0.443,42.799],[-0.509,42.827],[-0.555,42.778],[-0.676,42.883],[-0.698,42.879],[-0.726,42.893],[-0.734,42.912],[-0.72,42.925],[-0.755,42.969],[-0.817,42.952],[-0.971,42.962],[-1.01,42.993],[-1.103,43.006],[-1.229,43.055],[-1.252,43.042],[-1.305,43.069],[-1.301,43.096],[-1.271,43.12],[-1.322,43.113],[-1.344,43.097],[-1.353,43.027],[-1.441,43.047],[-1.476,43.084],[-1.416,43.128],[-1.376,43.245],[-1.409,43.273],[-1.453,43.27],[-1.51,43.295],[-1.56,43.288],[-1.577,43.253],[-1.613,43.253],[-1.631,43.286],[-1.625,43.307],[-1.694,43.314],[-1.731,43.295],[-1.74,43.33],[-1.751,43.332],[-1.753,43.341],[-1.771,43.344],[-1.787,43.355],[-1.783,43.364],[-1.793,43.375],[-1.773,43.39],[-1.79,43.484],[-7.916,43.874],[-9.492,43.177],[-8.876,41.863],[-8.818,41.904],[-8.768,41.928],[-8.748,41.942],[-8.748,41.963],[-8.737,41.971],[-8.691,41.989],[-8.67,41.998],[-8.66,42.007],[-8.658,42.03],[-8.646,42.037],[-8.638,42.047],[-8.595,42.057],[-8.581,42.051],[-8.546,42.054],[-8.525,42.063],[-8.528,42.077],[-8.482,42.081],[-8.441,42.082],[-8.425,42.072],[-8.401,42.081],[-8.383,42.077],[-8.364,42.091],[-8.339,42.084],[-8.322,42.102],[-8.298,42.106],[-8.273,42.124],[-8.247,42.14],[-8.224,42.133],[-8.199,42.154],[-8.189,42.139],[-8.194,42.121],[-8.182,42.064],[-8.117,42.085],[-8.088,42.058],[-8.088,42.014],[-8.162,41.983],[-8.219,41.912],[-8.196,41.875],[-8.169,41.879],[-8.165,41.818],[-8.096,41.81],[-8.011,41.835],[-7.98,41.873],[-7.923,41.876],[-7.907,41.924],[-7.888,41.926],[-7.881,41.846],[-7.842,41.881],[-7.698,41.91],[-7.658,41.883],[-7.586,41.879],[-7.622,41.831],[-7.527,41.839],[-7.498,41.871],[-7.456,41.865],[-7.448,41.845],[-7.429,41.833],[-7.429,41.806],[-7.371,41.85],[-7.324,41.841],[-7.187,41.888],[-7.185,41.975],[-7.141,41.989],[-7.086,41.974],[-7.076,41.95],[-7.011,41.95],[-6.981,41.973],[-6.955,41.966],[-6.944,41.944],[-6.822,41.945],[-6.812,41.991],[-6.77,41.987],[-6.75,41.941],[-6.62,41.94],[-6.585,41.967],[-6.545,41.944],[-6.568,41.884],[-6.514,41.876],[-6.564,41.742],[-6.546,41.686],[-6.499,41.658],[-6.442,41.683],[-6.299,41.664],[-6.191,41.576],[-6.268,41.488],[-6.331,41.377],[-6.386,41.387],[-6.386,41.353],[-6.559,41.244],[-6.65,41.247],[-6.683,41.216],[-6.697,41.186],[-6.773,41.13],[-6.757,41.102],[-6.792,41.054],[-6.809,41.036],[-6.848,41.027],[-6.888,41.03],[-6.913,41.039],[-6.936,41.029],[-6.853,40.94],[-6.843,40.898],[-6.807,40.88],[-6.799,40.848],[-6.823,40.845],[-6.828,40.746],[-6.796,40.66],[-6.843,40.568],[-6.802,40.551],[-6.797,40.517],[-6.849,40.464],[-6.846,40.422],[-6.784,40.365],[-6.802,40.332],[-6.861,40.298],[-6.861,40.268],[-7.004,40.232],[-7.025,40.186],[-7.006,40.121],[-6.942,40.107],[-6.867,40.02],[-6.915,39.866],[-6.975,39.815],[-7.016,39.669],[-7.247,39.666],[-7.335,39.646],[-7.541,39.667],[-7.495,39.588],[-7.293,39.458],[-7.315,39.349],[-7.234,39.276],[-7.236,39.201],[-7.128,39.171],[-7.149,39.113],[-7.107,39.103],[-7.04,39.119],[-6.97,39.076],[-6.952,39.024],[-7.051,38.907],[-7.038,38.872],[-7.262,38.721],[-7.265,38.617],[-7.325,38.443],[-7.156,38.276],[-7.094,38.172],[-6.934,38.215],[-7.004,38.019],[-7.06,38.02],[-7.104,38.044],[-7.126,38.003],[-7.245,37.989],[-7.273,37.901],[-7.334,37.812],[-7.42,37.757],[-7.518,37.561],[-7.469,37.471],[-7.44,37.389],[-7.432,37.252],[-7.419,37.238],[-7.411,37.203],[-7.398,37.169],[-5.787,35.952],[-5.109,36.052],[-1.197,36.651],[3.754,42.334]],[[-5.278,36.149],[-5.341,36.037],[-5.405,36.155],[-5.345,36.155],[-5.338,36.153],[-5.278,36.149]]],[[[1.998,42.447],[2.016,42.452],[1.992,42.462],[1.986,42.475],[1.998,42.486],[1.989,42.494],[1.98,42.496],[1.977,42.486],[1.972,42.485],[1.97,42.481],[1.962,42.479],[1.956,42.458],[1.961,42.454],[1.984,42.447],[1.998,42.447]]]]}},{"type":"Feature","properties":{"code":"LK","name":"Sri Lanka"},"geometry":{"type":"MultiPolygon","coordinates":[[[[79.906,5.706],[82.018,6.255],[81.903,8.108],[80.484,10.208],[79.443,9.568],[79.906,5.706]]]]}},{"type":"Feature","properties":{"code":"KN","name":"St. Kitts and Nevis"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-62.293,17.432],[-62.767,17.644],[-63.097,17.214],[-62.638,16.654],[-62.293,17.432]]]]}},{"type":"Feature","properties":{"code":"LC","name":"St. Lucia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-59.96,14.203],[-61.693,14.265],[-59.941,12.34],[-59.96,14.203]]]]}},{"type":"Feature","properties":{"code":"VC","name":"St. Vincent and the Grenadines"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-62.64,12.7],[-59.941,12.34],[-61.693,14.265],[-62.64,12.7]]]]}},{"type":"Feature","properties":{"code":"SD","name":"Sudan"},"geometry":{"type":"MultiPolygon","coordinates":[[[[37.856,22.009],[34.077,22.005],[33.997,21.768],[33.573,21.724],[33.176,22.004],[24.999,21.995],[24.998,19.997],[23.997,20],[23.995,19.499],[24,15.696],[23.628,15.78],[23.388,15.696],[23.108,15.713],[22.932,15.551],[22.926,15.47],[22.996,15.401],[22.996,15.23],[22.661,14.863],[22.705,14.691],[22.386,14.589],[22.449,14.25],[22.56,14.23],[22.555,14.117],[22.23,13.968],[22.087,13.779],[22.297,13.373],[22.16,13.193],[22.029,13.14],[21.948,13.056],[21.814,12.814],[21.894,12.68],[21.987,12.633],[22.157,12.666],[22.227,12.747],[22.463,12.619],[22.389,12.455],[22.505,12.168],[22.484,12.028],[22.641,12.075],[22.549,11.644],[22.8,11.404],[22.931,11.416],[22.972,11.22],[22.878,10.919],[23.022,10.692],[23.313,10.452],[23.672,9.869],[23.692,9.676],[24.093,9.666],[24.127,9.738],[24.494,9.8],[24.847,9.806],[24.977,9.908],[25.057,10.068],[25.092,10.337],[25.781,10.426],[25.932,10.382],[25.932,10.179],[26.213,9.915],[26.358,9.579],[26.707,9.487],[27.144,9.629],[27.907,9.613],[29,9.672],[29.07,9.748],[29.538,9.751],[29.54,10.079],[29.946,10.292],[30.004,10.286],[30.53,9.96],[30.829,9.715],[30.846,9.75],[31.285,9.753],[31.775,10.289],[31.992,10.651],[32.47,11.047],[32.394,11.182],[32.396,11.702],[32.101,11.952],[32.739,11.952],[32.739,12.228],[33.259,12.221],[33.14,11.432],[33.27,10.836],[33.246,10.779],[33.523,10.644],[33.666,10.443],[33.809,10.33],[33.902,10.172],[33.97,10.154],[33.992,9.996],[33.963,9.81],[33.908,9.762],[33.88,9.499],[34.102,9.502],[34.087,9.552],[34.132,9.749],[34.205,9.903],[34.227,10.025],[34.321,10.116],[34.348,10.239],[34.282,10.535],[34.437,10.781],[34.591,10.891],[34.774,10.746],[34.775,10.69],[34.866,10.746],[34.869,10.788],[34.975,10.861],[34.978,10.916],[34.932,10.959],[35.012,11.196],[34.957,11.244],[35.096,11.563],[35.058,11.712],[35.115,11.852],[35.243,11.911],[35.705,12.671],[36.015,12.725],[36.143,12.709],[36.167,12.88],[36.134,12.927],[36.245,13.368],[36.39,13.565],[36.488,13.84],[36.447,13.957],[36.544,14.256],[36.443,15.15],[36.543,15.235],[36.698,15.753],[36.764,15.808],[36.922,16.235],[36.998,17.072],[37.427,17.04],[37.51,17.322],[38.134,17.539],[38.371,17.663],[38.459,17.872],[38.577,17.981],[39.638,18.373],[37.856,22.009]]]]}},{"type":"Feature","properties":{"code":"ID","name":"Sulawesi","country":"Indonesia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[128.343,3.903],[126.694,6.027],[119.565,0.908],[116.584,-5.304],[116.34,-7.562],[116.97,-8.015],[125.877,-7.499],[123.79,-0.868],[128.343,3.903]]]]}},{"type":"Feature","properties":{"code":"ID","name":"Sumatra","country":"Indonesia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[109.828,2.868],[108.151,5.531],[105.014,3.249],[104.567,1.443],[104.347,1.335],[104.123,1.277],[104.031,1.27],[103.741,1.129],[103.66,1.188],[103.566,1.197],[103.037,1.304],[96.112,6.698],[92.218,4.943],[102.925,-8.171],[106.323,-5.501],[106.385,-5.167],[109.17,-4.074],[109.396,-2.073],[108.509,-2.011],[107.948,1.069],[109.828,2.868]]]]}},{"type":"Feature","properties":{"code":"SR","name":"Suriname"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-54.269,5.269],[-54.019,5.528],[-54.011,5.688],[-53.935,5.824],[-54.962,6.165],[-57.082,6.037],[-57.316,5.337],[-57.225,5.156],[-57.374,5.021],[-57.87,4.894],[-58.031,3.955],[-57.359,3.321],[-56.705,2.03],[-56.554,2.02],[-56.47,1.951],[-55.993,1.831],[-55.899,1.899],[-55.922,2.052],[-56.131,2.277],[-55.963,2.532],[-55.715,2.403],[-55.019,2.564],[-54.608,2.329],[-54.429,2.424],[-54.285,2.678],[-53.985,3.587],[-53.989,3.627],[-54.051,3.636],[-54.194,3.844],[-54.384,4.132],[-54.472,4.92],[-54.269,5.269]]]]}},{"type":"Feature","properties":{"code":"SJ","name":"Svalbard","country":"Norway"},"geometry":{"type":"MultiPolygon","coordinates":[[[[20.61,80.991],[6.108,79.501],[18.989,73.938],[28.037,76.95],[34.83,80.514],[20.61,80.991]]]]}},{"type":"Feature","properties":{"code":"SE","name":"Sweden"},"geometry":{"type":"MultiPolygon","coordinates":[[[[24.158,65.854],[23.905,66.158],[23.713,66.213],[23.65,66.306],[23.676,66.386],[23.638,66.436],[23.86,66.564],[23.895,66.772],[23.981,66.796],[23.986,66.841],[23.562,67.17],[23.587,67.208],[23.547,67.254],[23.754,67.299],[23.754,67.437],[23.396,67.47],[23.547,67.593],[23.456,67.853],[23.658,67.95],[23.401,68.055],[23.265,68.151],[23.154,68.148],[23.103,68.266],[22.73,68.409],[22.004,68.507],[21.03,68.89],[20.906,68.897],[20.851,68.931],[20.917,68.968],[20.788,69.031],[20.553,69.061],[20.07,69.045],[20.284,68.933],[20.334,68.802],[20.22,68.672],[19.956,68.555],[20.22,68.488],[19.935,68.359],[18.973,68.524],[18.63,68.508],[18.395,68.587],[18.124,68.537],[18.138,68.209],[17.908,67.965],[17.304,68.116],[16.741,67.91],[16.384,67.529],[16.128,67.521],[16.099,67.436],[16.392,67.217],[16.356,67.064],[15.372,66.482],[15.493,66.285],[15.051,66.156],[14.538,66.124],[14.509,65.318],[13.643,64.584],[14.111,64.467],[14.161,64.187],[13.982,64.01],[13.234,64.091],[12.741,64.022],[12.149,63.594],[12.199,63.479],[11.985,63.275],[12.199,63.001],[12.071,62.63],[12.292,62.257],[12.147,61.715],[12.406,61.572],[12.577,61.565],[12.869,61.354],[12.691,61.066],[12.228,61.024],[12.591,60.506],[12.52,60.138],[12.363,59.993],[12.156,59.893],[11.871,59.86],[11.921,59.695],[11.693,59.594],[11.821,59.25],[11.657,58.902],[11.452,58.896],[11.46,58.99],[11.345,59.117],[11.154,59.079],[11.089,58.987],[10.739,58.913],[12.297,56.198],[12.653,56.043],[12.637,55.914],[12.885,55.634],[12.603,55.427],[13.336,55.14],[14.694,55.43],[19.203,56.892],[19.709,58.211],[19.082,60.192],[19.234,60.614],[20.159,63.066],[24.141,65.397],[24.151,65.814],[24.148,65.835],[24.158,65.854]]]]}},{"type":"Feature","properties":{"code":"CH","name":"Switzerland"},"geometry":{"type":"MultiPolygon","coordinates":[[[[8.728,47.693],[8.726,47.697],[8.737,47.717],[8.705,47.731],[8.743,47.752],[8.718,47.766],[8.69,47.757],[8.68,47.786],[8.653,47.801],[8.644,47.764],[8.624,47.763],[8.617,47.8],[8.564,47.806],[8.568,47.78],[8.489,47.772],[8.458,47.749],[8.448,47.724],[8.406,47.699],[8.421,47.684],[8.405,47.675],[8.413,47.667],[8.423,47.667],[8.447,47.654],[8.467,47.657],[8.466,47.641],[8.497,47.647],[8.532,47.647],[8.528,47.661],[8.561,47.671],[8.577,47.662],[8.605,47.673],[8.611,47.663],[8.629,47.651],[8.62,47.638],[8.604,47.637],[8.615,47.645],[8.607,47.653],[8.595,47.643],[8.603,47.612],[8.576,47.595],[8.558,47.624],[8.517,47.635],[8.507,47.619],[8.456,47.601],[8.466,47.584],[8.489,47.588],[8.494,47.581],[8.432,47.566],[8.395,47.578],[8.383,47.566],[8.327,47.571],[8.303,47.586],[8.295,47.592],[8.297,47.606],[8.282,47.612],[8.263,47.61],[8.259,47.616],[8.238,47.612],[8.226,47.604],[8.22,47.618],[8.206,47.621],[8.194,47.616],[8.165,47.594],[8.149,47.596],[8.138,47.591],[8.137,47.584],[8.115,47.584],[8.104,47.579],[8.1,47.565],[8.086,47.558],[8.067,47.564],[8.044,47.554],[8.021,47.551],[8.001,47.556],[7.976,47.555],[7.957,47.558],[7.945,47.545],[7.913,47.55],[7.907,47.577],[7.887,47.589],[7.844,47.584],[7.819,47.588],[7.795,47.557],[7.753,47.546],[7.72,47.542],[7.696,47.533],[7.681,47.532],[7.666,47.538],[7.662,47.546],[7.651,47.547],[7.633,47.563],[7.677,47.564],[7.689,47.571],[7.671,47.587],[7.685,47.596],[7.694,47.601],[7.682,47.599],[7.674,47.592],[7.646,47.597],[7.642,47.594],[7.643,47.592],[7.619,47.577],[7.605,47.579],[7.605,47.585],[7.589,47.59],[7.584,47.575],[7.567,47.578],[7.565,47.576],[7.557,47.572],[7.557,47.568],[7.536,47.556],[7.528,47.553],[7.517,47.546],[7.509,47.545],[7.497,47.538],[7.506,47.529],[7.519,47.535],[7.532,47.528],[7.523,47.516],[7.498,47.518],[7.511,47.497],[7.475,47.479],[7.434,47.497],[7.429,47.486],[7.458,47.472],[7.446,47.463],[7.431,47.458],[7.403,47.436],[7.356,47.434],[7.335,47.442],[7.247,47.42],[7.17,47.443],[7.196,47.495],[7.162,47.49],[7.128,47.504],[7.074,47.489],[7.023,47.505],[6.984,47.494],[7.002,47.453],[6.94,47.434],[6.937,47.407],[6.885,47.373],[6.88,47.353],[7.031,47.37],[7.056,47.351],[7.053,47.333],[6.943,47.287],[6.951,47.264],[6.951,47.243],[6.849,47.159],[6.768,47.121],[6.688,47.066],[6.715,47.049],[6.433,46.927],[6.465,46.889],[6.432,46.803],[6.452,46.775],[6.384,46.732],[6.271,46.683],[6.111,46.576],[6.157,46.544],[6.073,46.462],[6.084,46.443],[6.064,46.417],[6.099,46.408],[6.15,46.378],[6.16,46.377],[6.17,46.368],[6.157,46.349],[6.139,46.338],[6.12,46.312],[6.117,46.295],[6.101,46.285],[6.119,46.263],[6.124,46.251],[6.101,46.238],[6.086,46.247],[6.071,46.241],[6.063,46.246],[6.05,46.235],[6.046,46.231],[6.033,46.238],[6.025,46.233],[5.975,46.215],[5.965,46.196],[5.996,46.186],[5.988,46.17],[5.982,46.174],[5.975,46.159],[5.964,46.144],[5.958,46.129],[5.979,46.133],[5.987,46.145],[6.018,46.142],[6.036,46.137],[6.046,46.14],[6.052,46.152],[6.075,46.149],[6.092,46.152],[6.099,46.144],[6.134,46.141],[6.153,46.152],[6.181,46.162],[6.189,46.166],[6.187,46.18],[6.196,46.184],[6.198,46.184],[6.205,46.192],[6.211,46.193],[6.213,46.194],[6.216,46.195],[6.218,46.198],[6.222,46.199],[6.222,46.2],[6.235,46.207],[6.239,46.205],[6.248,46.205],[6.26,46.212],[6.277,46.216],[6.297,46.227],[6.31,46.244],[6.295,46.262],[6.267,46.247],[6.25,46.263],[6.238,46.278],[6.251,46.29],[6.248,46.302],[6.22,46.313],[6.254,46.363],[6.534,46.454],[6.823,46.427],[6.802,46.392],[6.772,46.348],[6.861,46.285],[6.79,46.141],[6.893,46.125],[6.879,46.039],[6.939,46.065],[7.009,45.994],[7.042,45.924],[7.107,45.857],[7.563,45.974],[7.859,45.915],[7.905,45.999],[7.989,45.999],[8.029,46.103],[8.114,46.116],[8.169,46.178],[8.088,46.267],[8.312,46.38],[8.306,46.416],[8.425,46.464],[8.463,46.437],[8.45,46.269],[8.622,46.121],[8.757,46.104],[8.808,46.101],[8.856,46.075],[8.794,46.009],[8.786,45.99],[8.794,45.992],[8.832,45.988],[8.851,45.972],[8.867,45.961],[8.889,45.955],[8.936,45.868],[8.944,45.866],[8.935,45.862],[8.911,45.839],[8.947,45.843],[8.962,45.837],[8.997,45.835],[9.003,45.821],[9.03,45.821],[9.033,45.829],[9.038,45.835],[9.035,45.84],[9.041,45.846],[9.045,45.85],[9.066,45.876],[9.091,45.899],[8.993,45.97],[9.016,46.049],[9.245,46.236],[9.292,46.327],[9.255,46.437],[9.281,46.497],[9.361,46.508],[9.405,46.466],[9.459,46.509],[9.461,46.375],[9.57,46.296],[9.713,46.293],[9.731,46.351],[9.952,46.38],[10.071,46.217],[10.144,46.23],[10.179,46.256],[10.105,46.337],[10.165,46.411],[10.037,46.445],[10.103,46.61],[10.237,46.635],[10.253,46.574],[10.461,46.532],[10.494,46.62],[10.447,46.642],[10.405,46.637],[10.387,46.678],[10.472,46.857],[10.484,46.939],[10.369,47.002],[10.3,46.921],[10.241,46.931],[10.227,46.869],[10.107,46.843],[9.981,46.914],[9.883,46.933],[9.879,47.013],[9.607,47.061],[9.557,47.048],[9.54,47.065],[9.475,47.053],[9.471,47.064],[9.514,47.085],[9.521,47.1],[9.51,47.137],[9.488,47.174],[9.489,47.193],[9.503,47.222],[9.524,47.25],[9.531,47.27],[9.548,47.281],[9.559,47.299],[9.585,47.313],[9.6,47.347],[9.625,47.366],[9.654,47.368],[9.662,47.371],[9.671,47.378],[9.674,47.384],[9.673,47.392],[9.663,47.396],[9.651,47.405],[9.65,47.419],[9.645,47.432],[9.645,47.438],[9.659,47.448],[9.657,47.454],[9.642,47.456],[9.625,47.457],[9.622,47.459],[9.608,47.472],[9.605,47.464],[9.602,47.462],[9.595,47.463],[9.582,47.483],[9.563,47.495],[9.551,47.536],[9.256,47.659],[9.182,47.656],[9.176,47.654],[9.175,47.656],[9.171,47.655],[9.152,47.669],[9.138,47.664],[9.099,47.678],[9.021,47.687],[8.941,47.656],[8.899,47.648],[8.876,47.654],[8.874,47.67],[8.851,47.682],[8.87,47.705],[8.82,47.715],[8.807,47.738],[8.773,47.721],[8.77,47.708],[8.8,47.702],[8.795,47.675],[8.759,47.69],[8.728,47.693]],[[8.959,45.965],[8.967,45.984],[8.977,45.983],[8.976,45.962],[8.959,45.965]],[[8.708,47.689],[8.69,47.696],[8.668,47.684],[8.658,47.689],[8.675,47.698],[8.664,47.714],[8.702,47.715],[8.718,47.691],[8.708,47.689]]]]}},{"type":"Feature","properties":{"code":"SY","name":"Syria"},"geometry":{"type":"MultiPolygon","coordinates":[[[[42.237,37.286],[42.215,37.28],[42.205,37.287],[42.224,37.302],[42.223,37.314],[42.211,37.325],[42.193,37.313],[42.182,37.286],[42.009,37.172],[41.515,37.081],[41.219,37.077],[40.909,37.131],[40.691,37.1],[39.816,36.755],[39.215,36.668],[39.032,36.709],[38.74,36.706],[38.559,36.844],[38.389,36.901],[38.211,36.918],[37.82,36.761],[37.68,36.751],[37.491,36.669],[37.473,36.632],[37.22,36.674],[37.162,36.661],[37.109,36.67],[37.083,36.635],[37.021,36.664],[37.016,36.695],[37.046,36.711],[37.044,36.735],[36.999,36.74],[36.996,36.76],[36.667,36.829],[36.616,36.746],[36.627,36.712],[36.574,36.652],[36.588,36.583],[36.542,36.495],[36.608,36.338],[36.657,36.339],[36.687,36.237],[36.612,36.226],[36.505,36.242],[36.462,36.205],[36.392,36.221],[36.375,36.012],[36.34,35.987],[36.301,36.01],[36.283,36.003],[36.298,35.961],[36.277,35.948],[36.254,35.963],[36.2,35.952],[36.174,35.921],[36.162,35.809],[36.14,35.81],[36.139,35.837],[36.118,35.859],[35.998,35.882],[36.018,35.924],[36.005,35.941],[35.985,35.941],[35.931,35.921],[35.512,36.11],[35.485,34.709],[35.974,34.633],[35.987,34.65],[36.292,34.63],[36.324,34.693],[36.351,34.685],[36.354,34.654],[36.429,34.625],[36.46,34.638],[36.453,34.594],[36.414,34.612],[36.398,34.557],[36.337,34.526],[36.347,34.5],[36.444,34.502],[36.462,34.465],[36.559,34.416],[36.53,34.38],[36.566,34.319],[36.608,34.31],[36.587,34.277],[36.592,34.232],[36.625,34.203],[36.513,34.099],[36.506,34.06],[36.411,34.053],[36.286,33.92],[36.383,33.866],[36.397,33.834],[36.145,33.851],[36.068,33.829],[35.934,33.66],[36.057,33.579],[35.945,33.528],[35.948,33.479],[35.887,33.432],[35.826,33.405],[35.813,33.364],[35.775,33.336],[35.813,33.317],[35.775,33.273],[35.813,33.248],[35.816,33.203],[35.838,33.194],[35.843,33.167],[35.819,33.134],[35.819,33.111],[35.848,33.103],[35.872,32.98],[35.893,32.946],[35.87,32.92],[35.84,32.873],[35.838,32.828],[35.787,32.779],[35.76,32.748],[35.884,32.713],[35.933,32.72],[35.966,32.662],[36.022,32.659],[36.081,32.515],[36.204,32.528],[36.209,32.495],[36.239,32.501],[36.41,32.379],[36.839,32.313],[38.792,33.373],[40.643,34.316],[40.977,34.398],[41.124,34.657],[41.234,34.8],[41.217,35.151],[41.266,35.427],[41.382,35.625],[41.37,35.841],[41.256,36.06],[41.289,36.354],[41.401,36.525],[41.817,36.588],[42.367,37.063],[42.357,37.11],[42.323,37.178],[42.347,37.225],[42.282,37.28],[42.26,37.27],[42.237,37.286]]]]}},{"type":"Feature","properties":{"code":"ST","name":"São Tomé and Principe"},"geometry":{"type":"MultiPolygon","coordinates":[[[[6.014,0.321],[6.651,-0.286],[7.916,2.339],[6.014,0.321]]]]}},{"type":"Feature","properties":{"code":"TW","name":"Taiwan"},"geometry":{"type":"MultiPolygon","coordinates":[[[[121.811,21.777],[122.283,25.632],[120.394,26.493],[119.912,26.245],[119.869,25.951],[120.492,25.229],[118.564,24.493],[118.425,24.546],[118.353,24.516],[118.282,24.512],[118.117,24.397],[120.692,21.523],[121.811,21.777]]]]}},{"type":"Feature","properties":{"code":"TJ","name":"Tajikistan"},"geometry":{"type":"MultiPolygon","coordinates":[[[[70.453,41.044],[70.38,41.02],[70.367,40.903],[69.694,40.626],[69.594,40.702],[69.53,40.776],[69.383,40.792],[69.328,40.702],[69.346,40.58],[69.264,40.575],[69.211,40.545],[69.271,40.493],[69.285,40.419],[69.308,40.361],[69.338,40.348],[69.328,40.298],[69.308,40.282],[69.248,40.304],[69.252,40.264],[69.301,40.245],[69.304,40.188],[69.207,40.215],[69.157,40.216],[69.045,40.229],[68.858,40.209],[68.844,40.186],[68.793,40.176],[68.779,40.205],[68.533,40.148],[68.528,40.117],[68.628,40.078],[69.015,40.158],[69.019,40.115],[68.966,40.069],[68.849,40.05],[68.937,39.912],[68.889,39.872],[68.631,39.853],[68.62,39.689],[68.542,39.539],[68.121,39.563],[67.71,39.662],[67.629,39.602],[67.449,39.578],[67.465,39.536],[67.397,39.525],[67.468,39.461],[67.46,39.315],[67.365,39.313],[67.332,39.237],[67.678,39.145],[67.689,39.008],[68.097,39.026],[68.197,38.86],[68.069,38.821],[68.129,38.737],[68.056,38.716],[68.081,38.641],[68.059,38.561],[68.114,38.472],[68.063,38.394],[68.133,38.408],[68.403,38.195],[68.272,37.915],[68.126,37.93],[67.816,37.431],[67.847,37.316],[67.783,37.183],[67.78,37.09],[67.879,37.059],[68.022,36.919],[68.185,37.021],[68.276,37.01],[68.293,37.106],[68.412,37.104],[68.419,37.139],[68.619,37.198],[68.68,37.279],[68.814,37.239],[68.809,37.325],[68.912,37.267],[68.882,37.334],[68.964,37.326],[69.033,37.252],[69.252,37.094],[69.395,37.168],[69.45,37.233],[69.366,37.405],[69.45,37.487],[69.519,37.584],[69.8,37.575],[69.844,37.606],[69.934,37.614],[69.96,37.566],[70.15,37.525],[70.282,37.667],[70.277,37.813],[70.186,37.843],[70.172,37.933],[70.49,38.125],[70.547,38.245],[70.604,38.28],[70.615,38.348],[70.65,38.35],[70.692,38.37],[70.676,38.391],[70.674,38.406],[70.698,38.419],[70.725,38.413],[70.755,38.425],[70.771,38.455],[70.786,38.455],[70.787,38.45],[70.798,38.449],[70.805,38.444],[70.817,38.445],[70.825,38.454],[70.844,38.447],[70.887,38.468],[70.927,38.43],[70.987,38.489],[71.035,38.448],[71.056,38.402],[71.095,38.425],[71.106,38.421],[71.11,38.407],[71.145,38.401],[71.213,38.328],[71.331,38.303],[71.339,38.273],[71.378,38.256],[71.364,38.154],[71.299,38.044],[71.289,38.013],[71.276,37.999],[71.273,37.965],[71.25,37.93],[71.281,37.92],[71.296,37.934],[71.329,37.886],[71.516,37.953],[71.588,37.924],[71.593,37.8],[71.558,37.787],[71.543,37.771],[71.531,37.765],[71.552,37.732],[71.542,37.697],[71.52,37.619],[71.507,37.609],[71.497,37.535],[71.506,37.507],[71.526,37.48],[71.496,37.428],[71.477,37.403],[71.486,37.334],[71.498,37.32],[71.507,37.315],[71.485,37.26],[71.482,37.249],[71.483,37.239],[71.474,37.227],[71.456,37.214],[71.449,37.181],[71.441,37.119],[71.431,37.059],[71.456,37.031],[71.469,36.999],[71.485,36.932],[71.515,36.891],[71.572,36.749],[71.671,36.673],[71.832,36.681],[72.317,36.981],[72.541,37],[72.664,37.02],[72.797,37.222],[73.069,37.317],[73.296,37.465],[73.772,37.442],[73.766,37.339],[73.611,37.275],[73.65,37.236],[73.826,37.227],[73.856,37.262],[74.203,37.342],[74.233,37.411],[74.411,37.395],[74.562,37.377],[74.684,37.395],[74.829,37.343],[74.889,37.233],[75.123,37.318],[75.097,37.373],[75.159,37.414],[75.06,37.528],[74.943,37.555],[74.891,37.676],[75.009,37.775],[74.924,37.834],[74.906,38.03],[74.827,38.074],[74.803,38.199],[74.699,38.222],[74.696,38.429],[74.512,38.47],[74.17,38.655],[73.979,38.529],[73.798,38.611],[73.807,38.664],[73.703,38.848],[73.745,38.939],[73.83,38.915],[73.817,39.04],[73.758,39.023],[73.606,39.245],[73.546,39.276],[73.554,39.354],[73.5,39.384],[73.592,39.408],[73.598,39.464],[73.451,39.467],[73.319,39.386],[73.185,39.355],[72.859,39.351],[72.62,39.397],[72.332,39.331],[72.238,39.172],[72.172,39.266],[72.097,39.268],[72.041,39.367],[71.906,39.277],[71.792,39.274],[71.752,39.32],[71.802,39.406],[71.768,39.455],[71.627,39.441],[71.552,39.457],[71.559,39.576],[71.498,39.614],[71.088,39.507],[71.064,39.416],[70.785,39.389],[70.641,39.588],[70.448,39.601],[70.287,39.531],[70.111,39.582],[69.875,39.539],[69.687,39.593],[69.359,39.525],[69.269,39.813],[69.356,40.02],[69.431,39.984],[69.436,39.929],[69.536,39.94],[69.506,40.033],[69.539,40.089],[69.538,40.118],[69.556,40.123],[69.576,40.105],[69.647,40.122],[69.67,40.106],[70.013,40.233],[70.583,40.009],[70.574,39.994],[70.476,39.932],[70.55,39.966],[70.589,39.952],[70.659,39.988],[70.658,40.098],[70.793,40.128],[70.805,40.168],[70.982,40.224],[70.861,40.217],[70.623,40.174],[70.564,40.264],[70.571,40.344],[70.375,40.386],[70.326,40.452],[70.499,40.525],[70.8,40.728],[70.453,41.044]]],[[[70.681,40.906],[70.616,40.977],[70.561,41.006],[70.542,40.988],[70.575,40.989],[70.672,40.906],[70.681,40.906]]],[[[70.742,39.863],[70.537,39.892],[70.526,39.87],[70.55,39.851],[70.597,39.835],[70.631,39.779],[70.742,39.863]]]]}},{"type":"Feature","properties":{"code":"TZ","name":"Tanzania"},"geometry":{"type":"MultiPolygon","coordinates":[[[[30.804,-0.999],[30.766,-0.985],[30.706,-1.012],[30.642,-1.066],[30.472,-1.056],[30.451,-1.106],[30.509,-1.164],[30.571,-1.333],[30.72,-1.432],[30.841,-1.647],[30.808,-1.915],[30.893,-2.082],[30.839,-2.358],[30.545,-2.414],[30.418,-2.663],[30.527,-2.658],[30.407,-2.862],[30.499,-2.957],[30.579,-2.898],[30.668,-2.99],[30.838,-2.978],[30.842,-3.252],[30.459,-3.565],[30.22,-4.017],[30.033,-4.266],[29.882,-4.357],[29.829,-4.362],[29.773,-4.417],[29.751,-4.458],[29.638,-4.447],[29.437,-4.448],[29.526,-6.273],[30.257,-7.141],[30.792,-8.274],[31.008,-8.586],[31.375,-8.608],[31.571,-8.706],[31.571,-8.814],[31.712,-8.914],[31.816,-8.886],[31.947,-8.938],[31.942,-9.023],[31.989,-9.071],[32.082,-9.046],[32.161,-9.06],[32.255,-9.134],[32.435,-9.12],[32.491,-9.148],[32.537,-9.243],[32.756,-9.286],[32.762,-9.32],[32.954,-9.401],[32.994,-9.367],[33.149,-9.493],[33.316,-9.486],[33.481,-9.624],[33.767,-9.585],[33.933,-9.716],[33.964,-9.622],[33.958,-9.541],[34.039,-9.494],[34.545,-10.068],[34.519,-10.123],[34.576,-10.563],[34.659,-10.683],[34.67,-10.938],[34.612,-11.016],[34.633,-11.117],[34.794,-11.322],[34.912,-11.398],[34.963,-11.574],[35.636,-11.559],[35.828,-11.411],[36.191,-11.576],[36.191,-11.7],[36.621,-11.729],[36.803,-11.568],[37.394,-11.689],[37.766,-11.534],[37.839,-11.312],[37.936,-11.262],[38.216,-11.273],[38.473,-11.42],[38.89,-11.17],[39.244,-11.174],[39.582,-10.96],[40.003,-10.803],[40.443,-10.462],[40.742,-10.257],[40.143,-4.642],[39.621,-4.681],[39.443,-4.939],[39.216,-4.678],[37.813,-3.692],[37.75,-3.542],[37.631,-3.507],[37.59,-3.427],[37.717,-3.304],[37.672,-3.062],[34.082,-1.023],[34.031,-1.051],[34.023,-1.008],[33.931,-0.993],[30.804,-0.999]]]]}},{"type":"Feature","properties":{"code":"AU","name":"Tasmania","country":"Australia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[141.943,-39.47],[147.371,-45.783],[150.052,-39.487],[141.943,-39.47]]]]}},{"type":"Feature","properties":{"code":"TH","name":"Thailand"},"geometry":{"type":"MultiPolygon","coordinates":[[[[100.084,20.366],[99.957,20.463],[99.916,20.45],[99.905,20.449],[99.897,20.448],[99.893,20.443],[99.892,20.445],[99.885,20.446],[99.882,20.445],[99.864,20.444],[99.811,20.337],[99.683,20.321],[99.46,20.397],[99.461,20.362],[99.557,20.207],[99.529,20.148],[99.416,20.086],[99.203,20.129],[99.073,20.103],[98.987,19.742],[98.837,19.809],[98.561,19.678],[98.512,19.713],[98.249,19.679],[98.138,19.785],[98.033,19.809],[98.044,19.658],[97.847,19.558],[97.884,19.504],[97.788,19.394],[97.842,19.295],[97.786,19.268],[97.84,19.222],[97.835,19.1],[97.738,19.043],[97.737,18.981],[97.665,18.937],[97.738,18.885],[97.768,18.581],[97.526,18.494],[97.364,18.571],[97.345,18.546],[97.504,18.268],[97.562,18.339],[97.641,18.298],[97.608,18.238],[97.737,17.979],[97.668,17.88],[97.764,17.716],[97.918,17.545],[98.112,17.368],[98.104,17.338],[98.346,17.048],[98.394,17.063],[98.526,16.9],[98.496,16.845],[98.538,16.819],[98.47,16.736],[98.503,16.714],[98.497,16.69],[98.51,16.701],[98.516,16.694],[98.515,16.685],[98.518,16.676],[98.511,16.645],[98.57,16.628],[98.579,16.56],[98.638,16.474],[98.681,16.271],[98.845,16.424],[98.927,16.364],[98.838,16.117],[98.696,16.134],[98.57,16.046],[98.599,15.872],[98.541,15.654],[98.586,15.468],[98.56,15.335],[98.487,15.392],[98.394,15.342],[98.419,15.271],[98.405,15.253],[98.304,15.307],[98.22,15.213],[98.188,15.131],[98.249,14.83],[98.568,14.377],[98.974,14.049],[99.167,13.726],[99.206,13.206],[99.122,13.198],[99.106,13.058],[99.187,12.99],[99.189,12.848],[99.293,12.689],[99.409,12.606],[99.475,12.135],[99.564,12.148],[99.534,12.023],[99.649,11.827],[99.641,11.789],[99.567,11.627],[99.476,11.624],[99.395,11.393],[99.316,11.321],[99.328,11.285],[99.069,10.949],[99.023,10.972],[98.997,10.93],[99.007,10.855],[98.868,10.783],[98.785,10.684],[98.773,10.625],[98.819,10.528],[98.739,10.315],[98.552,9.928],[98.523,9.924],[98.473,9.958],[98.331,9.92],[98.126,9.441],[97.635,9.609],[97.198,8.189],[99.319,5.999],[99.501,6.445],[99.919,6.502],[100.076,6.404],[100.12,6.421],[100.195,6.726],[100.297,6.684],[100.308,6.665],[100.316,6.668],[100.319,6.664],[100.327,6.665],[100.326,6.659],[100.319,6.654],[100.354,6.549],[100.412,6.523],[100.418,6.519],[100.424,6.518],[100.43,6.524],[100.67,6.451],[100.744,6.508],[100.748,6.462],[100.81,6.451],[100.859,6.249],[101.103,6.256],[101.126,6.194],[101.062,6.142],[101.124,6.114],[101.087,5.919],[101.027,5.91],[100.988,5.795],[101.141,5.616],[101.258,5.711],[101.255,5.786],[101.58,5.935],[101.698,5.759],[101.751,5.791],[101.801,5.745],[101.892,5.839],[101.918,5.843],[101.928,5.855],[101.947,5.984],[101.971,6.006],[101.971,6.02],[101.992,6.041],[102.018,6.054],[102.092,6.142],[102.077,6.193],[102.081,6.227],[102.091,6.235],[102.463,7.225],[102.476,9.662],[102.524,11.253],[102.914,11.655],[102.91,11.756],[102.84,11.852],[102.784,11.987],[102.77,12.068],[102.702,12.169],[102.731,12.371],[102.781,12.403],[102.78,12.438],[102.576,12.654],[102.52,12.661],[102.499,12.717],[102.531,12.775],[102.493,12.927],[102.487,12.975],[102.523,12.998],[102.46,13.081],[102.434,13.091],[102.361,13.26],[102.36,13.311],[102.346,13.356],[102.357,13.383],[102.356,13.473],[102.361,13.506],[102.338,13.556],[102.369,13.575],[102.446,13.564],[102.536,13.569],[102.576,13.605],[102.625,13.609],[102.586,13.629],[102.548,13.659],[102.568,13.694],[102.727,13.778],[102.779,13.934],[102.913,14.015],[102.933,14.19],[103.165,14.331],[103.394,14.356],[103.535,14.426],[103.711,14.435],[103.702,14.381],[103.938,14.34],[104.276,14.399],[104.55,14.361],[104.693,14.427],[104.977,14.388],[105.028,14.237],[105.084,14.204],[105.14,14.239],[105.177,14.344],[105.209,14.35],[105.438,14.439],[105.539,14.557],[105.512,14.808],[105.612,15],[105.467,15.131],[105.58,15.327],[105.507,15.321],[105.469,15.337],[105.476,15.38],[105.582,15.41],[105.604,15.533],[105.618,15.688],[105.466,15.747],[105.423,15.77],[105.38,15.841],[105.341,15.927],[105.385,15.987],[105.42,16.007],[105.062,16.098],[105.003,16.256],[104.881,16.373],[104.733,16.565],[104.761,16.693],[104.74,16.81],[104.764,16.848],[104.737,16.911],[104.737,17.014],[104.807,17.19],[104.801,17.394],[104.699,17.53],[104.454,17.668],[104.354,17.829],[104.276,17.861],[104.218,17.993],[104.109,18.108],[104.065,18.217],[103.977,18.336],[103.939,18.339],[103.856,18.287],[103.824,18.34],[103.699,18.341],[103.61,18.405],[103.478,18.428],[103.41,18.449],[103.31,18.434],[103.248,18.378],[103.238,18.349],[103.298,18.305],[103.171,18.262],[103.15,18.232],[103.149,18.178],[103.073,18.124],[103.078,18.038],[103.057,18.001],[103.02,17.971],[102.991,17.995],[102.958,18.005],[102.863,17.975],[102.82,17.942],[102.79,17.936],[102.76,17.896],[102.685,17.867],[102.675,17.845],[102.699,17.817],[102.682,17.802],[102.595,17.835],[102.59,17.849],[102.614,17.923],[102.61,17.954],[102.592,17.961],[102.455,17.971],[102.114,18.215],[101.885,18.025],[101.781,18.076],[101.723,17.929],[101.447,17.739],[101.151,17.476],[100.965,17.579],[101.022,17.876],[101.179,18.054],[101.191,18.212],[101.151,18.256],[101.182,18.344],[101.06,18.432],[101.276,18.689],[101.228,18.734],[101.258,18.895],[101.356,19.047],[101.261,19.127],[101.249,19.333],[101.206,19.353],[101.213,19.462],[101.27,19.483],[101.265,19.592],[101.089,19.597],[100.903,19.619],[100.772,19.483],[100.646,19.559],[100.582,19.492],[100.496,19.535],[100.398,19.75],[100.509,19.879],[100.588,20.158],[100.552,20.177],[100.511,20.149],[100.476,20.191],[100.454,20.2],[100.45,20.236],[100.415,20.256],[100.374,20.352],[100.334,20.403],[100.258,20.399],[100.221,20.316],[100.167,20.299],[100.171,20.243],[100.118,20.248],[100.093,20.263],[100.1,20.316],[100.084,20.366]]]]}},{"type":"Feature","properties":{"code":"BS","name":"The Bahamas"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-72.984,20.48],[-71.701,25.764],[-78.912,27.766],[-80.657,23.72],[-72.984,20.48]]]]}},{"type":"Feature","properties":{"code":"GM","name":"The Gambia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-15.149,13.58],[-14.368,13.23],[-13.794,13.345],[-13.896,13.591],[-14.347,13.466],[-14.937,13.802],[-15.365,13.793],[-15.479,13.588],[-17.436,13.593],[-17.44,13.046],[-16.747,13.06],[-16.693,13.168],[-15.804,13.167],[-15.805,13.348],[-15.269,13.378],[-15.149,13.58]]]]}},{"type":"Feature","properties":{"code":"TG","name":"Togo"},"geometry":{"type":"MultiPolygon","coordinates":[[[[0.504,11.01],[-0.135,11.141],[-0.145,11.108],[-0.057,11.086],[-0.028,11.112],[-0.005,11.108],[0.003,11.083],[0.024,11.062],[0.034,10.981],[-0.006,10.964],[-0.009,10.916],[-0.027,10.878],[-0.023,10.819],[-0.072,10.768],[-0.073,10.718],[-0.091,10.715],[-0.059,10.635],[0.129,10.531],[0.188,10.41],[0.295,10.415],[0.33,10.304],[0.396,10.311],[0.353,10.094],[0.414,10.064],[0.413,10.02],[0.364,10.033],[0.321,9.728],[0.348,9.716],[0.348,9.669],[0.323,9.649],[0.283,9.69],[0.267,9.664],[0.293,9.594],[0.36,9.626],[0.382,9.587],[0.239,9.574],[0.241,9.523],[0.304,9.521],[0.312,9.503],[0.225,9.479],[0.258,9.427],[0.331,9.448],[0.365,9.497],[0.491,9.483],[0.564,9.407],[0.454,9.046],[0.525,8.877],[0.373,8.753],[0.472,8.599],[0.647,8.489],[0.734,8.295],[0.639,8.259],[0.591,8.196],[0.612,8.183],[0.606,8.14],[0.589,8.128],[0.629,7.858],[0.583,7.624],[0.52,7.587],[0.525,7.454],[0.572,7.393],[0.629,7.411],[0.653,7.316],[0.596,7.013],[0.522,6.972],[0.521,6.944],[0.565,6.93],[0.529,6.829],[0.574,6.803],[0.582,6.76],[0.65,6.737],[0.637,6.639],[0.749,6.565],[0.71,6.531],[0.893,6.338],[0.997,6.338],[1.031,6.241],[1.06,6.23],[1.092,6.171],[1.2,6.171],[1.198,6.115],[1.276,5.936],[1.673,6.027],[1.629,6.241],[1.798,6.282],[1.769,6.432],[1.581,6.686],[1.618,6.748],[1.559,6.997],[1.642,6.996],[1.618,9.053],[1.565,9.169],[1.417,9.323],[1.337,9.548],[1.366,9.595],[1.355,9.995],[0.777,10.377],[0.804,10.715],[0.88,10.803],[0.912,10.996],[0.661,11],[0.496,10.933],[0.505,10.98],[0.489,10.986],[0.504,11.01]]]]}},{"type":"Feature","properties":{"code":"TK","name":"Tokelau","country":"New Zealand"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-170.307,-9.468],[-173.268,-7.744],[-171.913,-9.871],[-170.307,-9.468]]]]}},{"type":"Feature","properties":{"code":"TO","name":"Tonga"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-176.749,-21.708],[-173.115,-21.678],[-173.134,-14.942],[-176.768,-14.952],[-176.749,-21.708]]]]}},{"type":"Feature","properties":{"code":"TT","name":"Trinidad and Tobago"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-61.625,11.19],[-62.087,10.044],[-60.9,9.814],[-60.072,11.777],[-61.625,11.19]]]]}},{"type":"Feature","properties":{"code":"TA","name":"Tristan da Cunha","country":"United Kingdom"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-12.244,-36.805],[-13.2,-37.497],[-11.761,-37.527],[-12.244,-36.805]]]]}},{"type":"Feature","properties":{"code":"TN","name":"Tunisia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[11.312,37.138],[8.811,37.662],[8.591,37.143],[8.64,36.94],[8.63,36.865],[8.677,36.836],[8.576,36.781],[8.465,36.771],[8.476,36.666],[8.162,36.488],[8.189,36.449],[8.407,36.422],[8.263,35.917],[8.265,35.737],[8.354,35.664],[8.361,35.478],[8.303,35.299],[8.473,35.234],[8.355,35.1],[8.307,34.954],[8.252,34.92],[8.297,34.728],[8.205,34.576],[7.863,34.399],[7.812,34.218],[7.742,34.165],[7.662,34.202],[7.529,34.065],[7.541,33.773],[7.737,33.421],[7.83,33.189],[8.114,33.102],[8.118,33.051],[8.319,32.835],[8.36,32.501],[9.075,32.079],[9.555,30.24],[9.768,30.344],[9.882,30.341],[10.295,30.903],[10.122,31.421],[10.314,31.726],[10.485,31.73],[10.628,31.966],[10.732,31.972],[11.042,32.215],[11.539,32.414],[11.578,32.48],[11.46,32.631],[11.515,33.098],[11.559,33.141],[11.589,33.369],[11.312,37.138]]]]}},{"type":"Feature","properties":{"code":"TR","name":"Turkey"},"geometry":{"type":"MultiPolygon","coordinates":[[[[41.544,41.522],[40.892,41.725],[34.831,42.458],[28.323,41.984],[28.03,41.981],[27.915,41.979],[27.835,41.997],[27.812,41.948],[27.699,41.975],[27.552,41.909],[27.524,41.938],[27.455,41.966],[27.274,42.104],[27.224,42.102],[27.193,42.06],[27.085,42.087],[27.033,42.081],[26.956,42.007],[26.791,41.974],[26.63,41.976],[26.561,41.93],[26.58,41.9],[26.54,41.827],[26.37,41.823],[26.336,41.768],[26.33,41.736],[26.36,41.711],[26.48,41.67],[26.521,41.626],[26.592,41.605],[26.597,41.481],[26.618,41.423],[26.63,41.346],[26.584,41.321],[26.521,41.34],[26.399,41.251],[26.323,41.249],[26.319,41.074],[26.361,41.02],[26.333,40.984],[26.359,40.943],[26.323,40.94],[26.286,40.93],[26.294,40.891],[26.262,40.917],[26.209,40.86],[26.214,40.833],[26.157,40.807],[26.129,40.773],[26.125,40.743],[26.086,40.732],[26.075,40.728],[26.035,40.731],[25.948,40.728],[26.043,40.396],[25.613,40.172],[25.943,39.394],[26.434,39.431],[26.708,39.031],[26.618,38.814],[26.211,38.654],[26.322,38.487],[26.242,38.447],[26.211,38.176],[27.055,37.913],[27.164,37.723],[26.994,37.69],[26.956,37.65],[27.148,37.32],[27.203,36.946],[27.456,36.901],[27.246,36.716],[27.461,36.538],[27.895,36.699],[27.95,36.462],[28.237,36.568],[29.308,36.01],[29.482,36.184],[29.61,36.173],[29.618,36.142],[29.699,36.089],[32.829,35.91],[35.512,36.11],[35.931,35.921],[35.985,35.941],[36.005,35.941],[36.018,35.924],[35.998,35.882],[36.118,35.859],[36.139,35.837],[36.14,35.81],[36.162,35.809],[36.174,35.921],[36.2,35.952],[36.254,35.963],[36.277,35.948],[36.298,35.961],[36.283,36.003],[36.301,36.01],[36.34,35.987],[36.375,36.012],[36.392,36.221],[36.462,36.205],[36.505,36.242],[36.612,36.226],[36.687,36.237],[36.657,36.339],[36.608,36.338],[36.542,36.495],[36.588,36.583],[36.574,36.652],[36.627,36.712],[36.616,36.746],[36.667,36.829],[36.996,36.76],[36.999,36.74],[37.044,36.735],[37.046,36.711],[37.016,36.695],[37.021,36.664],[37.083,36.635],[37.109,36.67],[37.162,36.661],[37.22,36.674],[37.473,36.632],[37.491,36.669],[37.68,36.751],[37.82,36.761],[38.211,36.918],[38.389,36.901],[38.559,36.844],[38.74,36.706],[39.032,36.709],[39.215,36.668],[39.816,36.755],[40.691,37.1],[40.909,37.131],[41.219,37.077],[41.515,37.081],[42.009,37.172],[42.182,37.286],[42.193,37.313],[42.211,37.325],[42.223,37.314],[42.224,37.302],[42.205,37.287],[42.215,37.28],[42.237,37.286],[42.26,37.27],[42.282,37.28],[42.347,37.225],[42.323,37.178],[42.357,37.11],[42.567,37.149],[42.789,37.386],[42.937,37.32],[43.114,37.374],[43.301,37.306],[43.335,37.331],[43.508,37.244],[43.567,37.257],[43.631,37.22],[43.701,37.237],[43.805,37.228],[43.827,37.195],[43.849,37.222],[43.909,37.225],[44.02,37.332],[44.135,37.325],[44.261,37.251],[44.28,37.165],[44.222,37.158],[44.185,37.096],[44.26,36.981],[44.306,36.974],[44.359,37.028],[44.353,37.05],[44.381,37.058],[44.426,37.058],[44.632,37.192],[44.767,37.162],[44.783,37.143],[44.787,37.166],[44.76,37.215],[44.81,37.291],[44.584,37.45],[44.614,37.602],[44.569,37.643],[44.621,37.72],[44.555,37.783],[44.459,37.771],[44.388,37.854],[44.225,37.889],[44.425,38.258],[44.501,38.339],[44.444,38.383],[44.383,38.361],[44.312,38.379],[44.321,38.498],[44.321,38.628],[44.281,38.647],[44.262,38.714],[44.303,38.816],[44.189,38.939],[44.209,39.14],[44.104,39.198],[44.037,39.392],[44.225,39.417],[44.298,39.378],[44.379,39.413],[44.428,39.413],[44.418,39.567],[44.481,39.616],[44.473,39.688],[44.614,39.784],[44.654,39.722],[44.718,39.711],[44.81,39.627],[44.81,39.658],[44.758,39.715],[44.618,39.828],[44.466,39.977],[44.27,40.049],[44.178,40.028],[44.106,40.036],[43.923,40.018],[43.657,40.112],[43.652,40.149],[43.711,40.167],[43.599,40.34],[43.609,40.433],[43.548,40.474],[43.637,40.542],[43.742,40.668],[43.749,40.736],[43.677,40.848],[43.677,40.931],[43.587,40.99],[43.473,41.023],[43.45,41.099],[43.472,41.126],[43.45,41.177],[43.361,41.203],[43.231,41.175],[43.194,41.252],[43.134,41.255],[43.217,41.303],[43.03,41.379],[42.879,41.505],[42.849,41.473],[42.79,41.501],[42.845,41.589],[42.728,41.597],[42.592,41.582],[42.518,41.436],[42.264,41.493],[41.951,41.525],[41.819,41.436],[41.712,41.474],[41.715,41.493],[41.544,41.522]]]]}},{"type":"Feature","properties":{"code":"TM","name":"Turkmenistan"},"geometry":{"type":"MultiPolygon","coordinates":[[[[60.508,41.217],[60.066,41.436],[60.181,41.601],[60.06,41.763],[60.085,41.81],[60.332,41.751],[59.95,41.98],[60.036,42.01],[60.047,42.09],[59.964,42.143],[60.005,42.212],[59.946,42.277],[59.434,42.297],[59.295,42.371],[59.173,42.522],[58.934,42.541],[58.627,42.793],[58.58,42.65],[58.275,42.696],[58.143,42.622],[58.294,42.565],[58.517,42.303],[58.407,42.295],[58.349,42.433],[57.992,42.5],[57.91,42.437],[57.929,42.24],[57.849,42.186],[57.63,42.165],[57.303,42.141],[57.036,41.92],[56.962,41.804],[57.034,41.418],[57.138,41.366],[57.034,41.254],[56.003,41.326],[55.455,41.256],[54.952,41.924],[54.206,42.385],[52.976,42.131],[52.479,41.78],[52.26,41.692],[51.771,40.292],[53.897,37.346],[54.246,37.32],[54.362,37.349],[54.587,37.458],[54.672,37.435],[54.778,37.516],[54.818,37.613],[54.777,37.623],[54.851,37.757],[55.134,37.947],[55.442,38.086],[55.766,38.122],[55.978,38.08],[56.333,38.081],[56.325,38.185],[56.433,38.261],[56.623,38.24],[56.739,38.279],[57.035,38.187],[57.212,38.29],[57.372,38.093],[57.35,37.985],[57.795,37.893],[58.214,37.773],[58.23,37.686],[58.4,37.631],[58.478,37.643],[58.548,37.705],[58.692,37.645],[58.934,37.674],[59.229,37.512],[59.335,37.531],[59.398,37.479],[59.394,37.343],[59.552,37.136],[59.747,37.125],[60.008,37.041],[60.348,36.632],[61.145,36.646],[61.182,36.553],[61.139,36.388],[61.227,36.128],[61.12,35.96],[61.224,35.929],[61.262,35.807],[61.227,35.67],[61.274,35.615],[61.587,35.438],[61.777,35.413],[61.977,35.46],[62.057,35.438],[62.159,35.333],[62.292,35.26],[62.299,35.133],[62.48,35.288],[62.623,35.221],[62.741,35.254],[62.909,35.371],[63.09,35.431],[63.123,35.532],[63.101,35.63],[63.233,35.675],[63.103,35.818],[63.123,35.862],[63.296,35.86],[63.535,35.909],[63.565,35.951],[63.985,36.038],[64.054,36.104],[64.433,36.244],[64.573,36.344],[64.625,36.443],[64.611,36.635],[64.979,37.219],[65.518,37.239],[65.643,37.344],[65.641,37.451],[65.723,37.554],[66.31,37.324],[66.557,37.354],[66.523,37.398],[66.658,37.455],[66.529,37.586],[66.537,37.801],[66.677,37.968],[66.567,38.044],[66.41,38.024],[66.24,38.162],[65.839,38.257],[65.559,38.291],[64.326,38.987],[64.191,38.956],[63.708,39.223],[63.691,39.277],[62.433,39.985],[62.343,40.432],[62.118,40.582],[61.879,41.123],[61.445,41.294],[61.397,41.199],[61.332,41.149],[61.222,41.149],[61.033,41.257],[60.508,41.217]]]]}},{"type":"Feature","properties":{"code":"TC","name":"Turks and Caicos Islands","country":"United Kingdom"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-71.701,25.764],[-72.984,20.48],[-69.807,21.36],[-71.701,25.764]]]]}},{"type":"Feature","properties":{"code":"TV","name":"Tuvalu"},"geometry":{"type":"MultiPolygon","coordinates":[[[[175.715,-5],[176.067,-11.5],[180,-11.5],[180,-5],[175.715,-5]]]]}},{"type":"Feature","properties":{"code":"VI","name":"US Virgin Islands","country":"United States"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-64.906,17.653],[-64.548,17.723],[-64.647,18.365],[-65.01,18.425],[-65.104,18.369],[-64.906,17.653]]]]}},{"type":"Feature","properties":{"code":"UG","name":"Uganda"},"geometry":{"type":"MultiPolygon","coordinates":[[[[33.931,-0.993],[33.926,-0.542],[33.984,-0.131],[33.909,0.106],[34.101,0.364],[34.087,0.447],[34.114,0.489],[34.135,0.581],[34.202,0.623],[34.273,0.632],[34.315,0.757],[34.4,0.803],[34.433,0.853],[34.524,1.107],[34.574,1.099],[34.58,1.147],[34.676,1.213],[34.802,1.228],[34.826,1.266],[34.826,1.309],[34.792,1.368],[34.878,1.56],[34.927,1.561],[34.99,1.667],[34.987,1.973],[34.909,2.424],[34.953,2.472],[34.772,2.703],[34.781,2.762],[34.74,2.854],[34.658,2.875],[34.601,2.93],[34.562,3.115],[34.458,3.183],[34.4,3.379],[34.418,3.443],[34.391,3.488],[34.449,3.516],[34.458,3.674],[34.154,3.805],[34.06,4.152],[33.987,4.233],[33.513,3.751],[33.184,3.778],[33.029,3.893],[32.897,3.813],[32.72,3.773],[32.413,3.748],[32.208,3.605],[32.199,3.509],[32.089,3.535],[32.085,3.563],[32.052,3.589],[31.959,3.574],[31.962,3.65],[31.868,3.787],[31.815,3.821],[31.721,3.744],[31.508,3.637],[31.505,3.678],[31.295,3.801],[31.167,3.799],[30.976,3.693],[30.852,3.489],[30.941,3.508],[30.935,3.407],[30.843,3.269],[30.771,3.049],[30.857,2.951],[30.886,2.839],[30.756,2.586],[30.743,2.436],[30.831,2.426],[30.911,2.333],[30.969,2.411],[31.066,2.359],[31.079,2.302],[31.121,2.277],[31.198,2.295],[31.201,2.222],[31.28,2.179],[31.301,2.11],[30.485,1.217],[30.247,1.15],[30.221,0.996],[30.148,0.898],[29.983,0.843],[29.955,0.645],[29.974,0.521],[29.873,0.392],[29.819,0.168],[29.775,0.167],[29.722,0.073],[29.727,-0.081],[29.651,-0.468],[29.675,-0.48],[29.672,-0.557],[29.627,-0.711],[29.63,-0.9],[29.584,-0.898],[29.591,-1.39],[29.827,-1.312],[29.912,-1.483],[30.164,-1.343],[30.352,-1.069],[30.472,-1.056],[30.642,-1.066],[30.706,-1.012],[30.766,-0.985],[30.804,-0.999],[33.931,-0.993]]]]}},{"type":"Feature","properties":{"code":"UA","name":"Ukraine"},"geometry":{"type":"MultiPolygon","coordinates":[[[[33.615,46.136],[33.639,46.141],[33.615,46.226],[33.646,46.23],[33.74,46.186],[33.797,46.205],[33.852,46.199],[33.915,46.159],[34.053,46.108],[34.073,46.118],[34.129,46.105],[34.181,46.068],[34.251,46.053],[34.339,46.061],[34.412,46.002],[34.442,45.96],[34.487,45.943],[34.52,45.951],[34.559,45.993],[34.609,45.993],[34.667,45.971],[34.755,45.907],[34.802,45.9],[34.799,45.81],[34.96,45.756],[38.338,46.981],[38.23,47.121],[38.23,47.232],[38.321,47.258],[38.331,47.305],[38.222,47.308],[38.29,47.393],[38.287,47.536],[38.351,47.616],[38.764,47.693],[38.796,47.811],[38.88,47.877],[39.739,47.829],[39.822,47.964],[39.775,48.042],[39.883,48.045],[39.837,48.065],[39.948,48.228],[40.008,48.224],[39.992,48.318],[39.973,48.314],[39.969,48.299],[39.952,48.3],[39.915,48.267],[39.9,48.305],[39.843,48.309],[39.841,48.333],[39.948,48.351],[39.888,48.442],[39.862,48.466],[39.845,48.578],[39.798,48.587],[39.672,48.594],[39.718,48.687],[39.731,48.733],[39.795,48.837],[39.972,48.794],[40.082,48.874],[40.036,48.92],[39.99,48.869],[39.784,48.916],[39.749,48.987],[39.726,48.975],[39.714,48.99],[39.668,48.995],[39.684,49.051],[39.934,49.057],[40.02,49.176],[40.222,49.257],[40.183,49.35],[40.149,49.377],[40.114,49.388],[40.031,49.455],[40.036,49.523],[40.167,49.569],[40.132,49.617],[39.845,49.561],[39.65,49.618],[39.591,49.738],[39.445,49.761],[39.28,49.76],[39.181,49.889],[38.939,49.795],[38.905,49.868],[38.733,49.902],[38.687,50.009],[38.657,49.972],[38.354,50.007],[38.325,50.089],[38.185,50.082],[38.217,49.981],[38.03,49.906],[38.03,49.945],[37.908,50.042],[37.795,50.084],[37.758,50.079],[37.611,50.22],[37.629,50.245],[37.625,50.3],[37.472,50.363],[37.482,50.461],[37.085,50.349],[36.918,50.35],[36.694,50.27],[36.646,50.218],[36.567,50.241],[36.584,50.286],[36.478,50.315],[36.301,50.291],[36.208,50.394],[36.069,50.452],[35.893,50.438],[35.804,50.414],[35.737,50.355],[35.617,50.357],[35.58,50.451],[35.475,50.492],[35.395,50.648],[35.481,50.664],[35.477,50.773],[35.414,50.802],[35.393,50.921],[35.326,50.945],[35.408,51.041],[35.318,51.084],[35.204,51.047],[35.127,51.162],[35.141,51.232],[34.973,51.234],[34.825,51.175],[34.687,51.18],[34.661,51.251],[34.388,51.275],[34.317,51.239],[34.23,51.264],[34.334,51.363],[34.22,51.419],[34.306,51.52],[34.176,51.633],[34.078,51.671],[34.429,51.729],[34.411,51.828],[34.094,52.008],[34.112,52.141],[34.052,52.201],[33.788,52.372],[33.557,52.303],[33.48,52.315],[33.513,52.358],[33.189,52.375],[32.899,52.246],[32.854,52.279],[32.695,52.255],[32.548,52.324],[32.353,52.328],[32.39,52.249],[32.331,52.237],[32.34,52.143],[32.278,52.103],[32.233,52.081],[32.088,52.033],[31.922,52.051],[31.961,52.08],[31.85,52.113],[31.817,52.1],[31.782,52.114],[31.383,52.13],[31.251,52.041],[31.133,52.1],[30.956,52.078],[30.909,52.007],[30.764,51.897],[30.688,51.828],[30.519,51.596],[30.65,51.35],[30.562,51.257],[30.362,51.34],[30.346,51.426],[30.179,51.51],[29.774,51.446],[29.741,51.534],[29.544,51.484],[29.498,51.398],[29.424,51.419],[29.329,51.378],[29.252,51.498],[29.256,51.571],[29.207,51.569],[29.164,51.647],[29.119,51.659],[28.991,51.568],[28.955,51.592],[28.818,51.556],[28.76,51.488],[28.782,51.453],[28.756,51.414],[28.731,51.462],[28.692,51.447],[28.644,51.566],[28.471,51.597],[28.376,51.545],[28.235,51.67],[28.107,51.579],[27.958,51.561],[27.918,51.62],[27.853,51.623],[27.761,51.476],[27.671,51.509],[27.719,51.607],[27.557,51.635],[27.511,51.585],[27.472,51.612],[27.248,51.602],[27.266,51.66],[27.209,51.667],[27.206,51.773],[26.994,51.769],[26.949,51.738],[26.8,51.758],[26.698,51.823],[26.47,51.805],[26.394,51.873],[26.191,51.868],[26.004,51.93],[25.832,51.926],[25.806,51.946],[25.737,51.92],[25.462,51.922],[25.202,51.971],[24.988,51.913],[24.371,51.882],[24.29,51.808],[24.316,51.751],[24.131,51.67],[23.999,51.584],[23.874,51.597],[23.911,51.633],[23.777,51.668],[23.609,51.621],[23.674,51.503],[23.628,51.505],[23.699,51.409],[23.639,51.322],[23.807,51.184],[23.904,51.077],[23.922,51.008],[24.046,50.902],[24.145,50.861],[24.095,50.833],[23.993,50.838],[23.959,50.793],[24.059,50.716],[24.1,50.608],[24.07,50.507],[24.037,50.445],[23.996,50.413],[23.794,50.405],[23.714,50.382],[23.676,50.334],[23.282,50.096],[22.993,49.842],[22.832,49.699],[22.803,49.691],[22.783,49.655],[22.645,49.531],[22.694,49.494],[22.748,49.328],[22.72,49.203],[22.863,49.105],[22.891,49.007],[22.562,49.089],[22.543,49.014],[22.483,48.992],[22.429,48.929],[22.342,48.689],[22.214,48.622],[22.16,48.565],[22.147,48.401],[22.208,48.425],[22.381,48.237],[22.498,48.252],[22.59,48.151],[22.587,48.108],[22.668,48.092],[22.734,48.12],[22.818,48.114],[22.878,48.047],[22.843,47.986],[22.898,47.959],[22.943,47.967],[22.922,48.02],[23.016,47.993],[23.089,48.007],[23.113,48.081],[23.16,48.122],[23.274,48.082],[23.336,48.024],[23.498,47.969],[23.528,48.018],[23.565,48.005],[23.639,48.003],[23.663,47.988],[23.752,47.997],[23.809,47.981],[23.86,47.933],[23.894,47.945],[23.942,47.949],[23.963,47.967],[23.986,47.961],[24.008,47.968],[24.03,47.951],[24.065,47.953],[24.113,47.915],[24.226,47.902],[24.349,47.924],[24.436,47.971],[24.62,47.951],[24.706,47.844],[24.819,47.82],[24.889,47.723],[25.111,47.752],[25.238,47.894],[25.639,47.949],[25.777,47.939],[26.059,47.99],[26.177,47.992],[26.335,48.184],[26.552,48.224],[26.628,48.258],[26.684,48.358],[26.792,48.291],[26.828,48.316],[26.713,48.404],[26.856,48.411],[26.934,48.366],[27.038,48.377],[27.023,48.425],[27.081,48.432],[27.134,48.373],[27.279,48.375],[27.322,48.443],[27.376,48.444],[27.377,48.41],[27.443,48.412],[27.469,48.454],[27.589,48.492],[27.59,48.463],[27.666,48.44],[27.744,48.459],[27.792,48.442],[27.819,48.419],[27.875,48.404],[27.884,48.367],[27.959,48.324],[28.045,48.327],[28.099,48.312],[28.075,48.235],[28.177,48.26],[28.193,48.207],[28.286,48.232],[28.325,48.234],[28.355,48.25],[28.37,48.205],[28.349,48.179],[28.306,48.16],[28.306,48.14],[28.34,48.131],[28.387,48.176],[28.437,48.158],[28.425,48.12],[28.484,48.074],[28.539,48.175],[28.699,48.131],[28.852,48.125],[28.841,48.034],[28.931,47.963],[29.172,47.99],[29.198,47.893],[29.278,47.889],[29.207,47.804],[29.273,47.8],[29.222,47.736],[29.224,47.6],[29.117,47.55],[29.186,47.434],[29.326,47.447],[29.399,47.302],[29.479,47.304],[29.487,47.36],[29.573,47.365],[29.597,47.255],[29.55,47.25],[29.577,47.136],[29.497,47.129],[29.53,47.079],[29.61,47.099],[29.621,47.051],[29.571,46.948],[29.73,46.922],[29.755,46.86],[29.874,46.882],[29.988,46.824],[29.945,46.801],[29.974,46.753],[29.944,46.56],[29.889,46.543],[30.025,46.451],[30.168,46.41],[30.091,46.387],[29.941,46.401],[29.883,46.359],[29.745,46.456],[29.664,46.422],[29.676,46.36],[29.594,46.355],[29.499,46.459],[29.354,46.495],[29.249,46.379],[29.235,46.554],[29.024,46.496],[29.012,46.462],[28.931,46.457],[29.004,46.315],[28.985,46.318],[28.95,46.259],[29.067,46.197],[28.946,46.092],[29.006,46.05],[28.98,46.004],[28.744,45.967],[28.785,45.835],[28.699,45.818],[28.704,45.78],[28.528,45.738],[28.479,45.67],[28.516,45.661],[28.542,45.581],[28.493,45.567],[28.514,45.5],[28.431,45.485],[28.418,45.517],[28.302,45.547],[28.211,45.469],[28.285,45.439],[28.346,45.321],[28.573,45.248],[28.714,45.226],[28.789,45.242],[28.814,45.338],[28.943,45.28],[28.961,45.332],[29.248,45.434],[29.426,45.445],[29.598,45.389],[29.682,45.269],[29.654,45.256],[29.693,45.192],[33.54,46.012],[33.615,46.136]]]]}},{"type":"Feature","properties":{"code":"AE","name":"United Arab Emirates"},"geometry":{"type":"MultiPolygon","coordinates":[[[[56.265,25.628],[56.253,25.614],[56.266,25.606],[56.254,25.602],[56.205,25.611],[56.184,25.655],[56.148,25.664],[56.136,25.735],[56.174,25.772],[56.14,25.828],[56.193,25.98],[56.155,26.068],[56.087,26.05],[55.818,26.188],[55.141,25.626],[53.979,24.644],[52.823,25.517],[52.355,25.004],[52.023,24.756],[51.831,24.717],[51.588,24.666],[51.416,24.396],[51.589,24.273],[51.596,24.12],[52.566,22.943],[55.136,22.633],[55.214,22.711],[55.226,23.104],[55.574,23.669],[55.487,23.949],[55.733,24.06],[55.831,24.016],[56.018,24.074],[55.955,24.217],[55.834,24.202],[55.777,24.235],[55.766,24.232],[55.753,24.235],[55.754,24.247],[55.759,24.261],[55.768,24.262],[55.791,24.279],[55.807,24.311],[55.834,24.328],[55.833,24.415],[55.765,24.529],[55.833,24.686],[55.834,24.779],[55.813,24.801],[55.811,24.912],[55.851,24.969],[55.908,24.968],[55.963,25.009],[56.057,24.957],[56.051,24.875],[55.975,24.896],[55.978,24.877],[56.035,24.812],[56.061,24.745],[56.137,24.737],[56.201,24.786],[56.206,24.851],[56.303,24.883],[56.349,24.932],[56.323,24.973],[56.863,25.039],[56.826,25.771],[56.265,25.628]],[[56.261,25.331],[56.3,25.318],[56.311,25.301],[56.352,25.307],[56.344,25.267],[56.276,25.234],[56.243,25.229],[56.209,25.241],[56.208,25.257],[56.245,25.275],[56.25,25.288],[56.234,25.313],[56.261,25.331]]],[[[56.284,25.263],[56.294,25.275],[56.281,25.285],[56.272,25.279],[56.271,25.261],[56.284,25.263]]]]}},{"type":"Feature","properties":{"code":"US","name":"United States"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-97.139,25.966],[-96.174,27.761],[-84.375,29.344],[-82.022,24.231],[-80.57,24.056],[-78.912,27.766],[-70.796,40.179],[-67.161,44.201],[-66.934,44.826],[-66.968,44.831],[-66.982,44.871],[-66.968,44.91],[-67.022,44.953],[-67.113,45.112],[-67.16,45.162],[-67.196,45.168],[-67.203,45.172],[-67.228,45.163],[-67.27,45.193],[-67.297,45.182],[-67.298,45.149],[-67.349,45.122],[-67.482,45.274],[-67.424,45.38],[-67.506,45.49],[-67.421,45.506],[-67.438,45.592],[-67.605,45.607],[-67.807,45.695],[-67.807,45.8],[-67.757,45.823],[-67.81,45.875],[-67.752,45.918],[-67.781,45.939],[-67.786,47.065],[-67.88,47.104],[-67.948,47.193],[-68.232,47.357],[-68.375,47.359],[-68.383,47.287],[-68.579,47.284],[-68.606,47.247],[-68.701,47.244],[-68.892,47.181],[-69.05,47.246],[-69.051,47.301],[-69.051,47.42],[-69.221,47.465],[-70,46.695],[-70.058,46.418],[-70.185,46.354],[-70.291,46.188],[-70.239,46.145],[-70.31,45.964],[-70.247,45.951],[-70.26,45.897],[-70.415,45.795],[-70.389,45.732],[-70.54,45.673],[-70.685,45.57],[-70.727,45.498],[-70.625,45.423],[-70.654,45.376],[-70.784,45.433],[-70.826,45.398],[-70.802,45.374],[-70.848,45.227],[-70.899,45.24],[-70.912,45.298],[-70.952,45.339],[-71.011,45.348],[-71.019,45.316],[-71.084,45.306],[-71.146,45.241],[-71.197,45.254],[-71.223,45.252],[-71.294,45.3],[-71.371,45.246],[-71.443,45.236],[-71.404,45.214],[-71.428,45.126],[-71.487,45.078],[-71.501,45.014],[-73.35,45.009],[-74.327,44.99],[-74.667,45.006],[-74.845,45.006],[-74.991,44.981],[-75.014,44.956],[-75.219,44.878],[-75.414,44.766],[-75.768,44.515],[-75.822,44.432],[-75.959,44.345],[-76,44.349],[-76.163,44.283],[-76.166,44.231],[-76.244,44.196],[-76.312,44.199],[-76.353,44.135],[-76.439,44.094],[-76.797,43.631],[-79.258,43.541],[-79.069,43.262],[-79.055,43.254],[-79.055,43.212],[-79.05,43.201],[-79.054,43.174],[-79.047,43.164],[-79.043,43.139],[-79.069,43.12],[-79.057,43.109],[-79.075,43.078],[-79.011,43.067],[-78.999,43.056],[-79.024,43.02],[-79.021,42.984],[-78.981,42.97],[-78.963,42.955],[-78.932,42.952],[-78.909,42.93],[-78.907,42.897],[-78.937,42.829],[-82.679,41.676],[-83.112,41.957],[-83.15,42.041],[-83.127,42.238],[-83.098,42.289],[-83.078,42.31],[-83.023,42.33],[-82.83,42.374],[-82.642,42.556],[-82.589,42.55],[-82.576,42.572],[-82.519,42.611],[-82.511,42.66],[-82.466,42.766],[-82.483,42.807],[-82.453,42.931],[-82.425,42.954],[-82.415,42.976],[-82.425,42.992],[-82.484,45.302],[-83.596,45.821],[-83.437,45.997],[-83.57,46.105],[-83.833,46.122],[-83.905,46.059],[-83.954,46.056],[-84.11,46.24],[-84.098,46.255],[-84.116,46.268],[-84.113,46.323],[-84.135,46.392],[-84.112,46.502],[-84.129,46.531],[-84.177,46.528],[-84.195,46.541],[-84.226,46.533],[-84.264,46.495],[-84.299,46.491],[-84.342,46.507],[-84.421,46.499],[-84.448,46.49],[-84.476,46.452],[-84.556,46.46],[-84.859,46.889],[-88.37,48.306],[-89.488,48.014],[-89.58,48],[-89.772,48.026],[-89.9,47.981],[-90.074,48.11],[-90.563,48.095],[-90.564,48.122],[-90.75,48.091],[-90.876,48.248],[-91.08,48.181],[-91.25,48.085],[-91.432,48.049],[-91.458,48.075],[-91.58,48.043],[-91.556,48.106],[-91.705,48.118],[-91.712,48.199],[-91.861,48.213],[-91.989,48.254],[-92.053,48.36],[-92.147,48.366],[-92.202,48.353],[-92.267,48.357],[-92.309,48.313],[-92.272,48.25],[-92.372,48.223],[-92.481,48.366],[-92.456,48.406],[-92.507,48.449],[-92.656,48.435],[-92.713,48.461],[-92.699,48.496],[-92.627,48.503],[-92.634,48.541],[-92.729,48.54],[-92.95,48.609],[-93.254,48.643],[-93.339,48.628],[-93.371,48.606],[-93.398,48.604],[-93.407,48.609],[-93.445,48.591],[-93.47,48.544],[-93.664,48.518],[-93.793,48.516],[-93.809,48.524],[-93.807,48.582],[-93.833,48.627],[-93.858,48.633],[-94.232,48.652],[-94.251,48.657],[-94.252,48.684],[-94.272,48.702],[-94.417,48.71],[-94.443,48.692],[-94.538,48.702],[-94.549,48.715],[-94.589,48.718],[-94.693,48.779],[-94.697,48.809],[-94.705,48.824],[-94.701,48.834],[-94.687,48.841],[-94.75,49.099],[-94.774,49.12],[-94.825,49.295],[-94.816,49.323],[-94.854,49.325],[-94.957,49.37],[-94.995,49.366],[-95.014,49.356],[-95.058,49.353],[-95.129,49.371],[-95.154,49.384],[-95.154,49],[-123.322,49.004],[-123.009,48.832],[-123.009,48.766],[-123.266,48.696],[-123.156,48.354],[-123.5,48.212],[-125.038,48.533],[-125.508,39.69],[-120.904,33.477],[-118.481,32.599],[-117.124,32.534],[-115.881,32.636],[-114.719,32.719],[-114.767,32.641],[-114.806,32.62],[-114.811,32.555],[-114.795,32.557],[-114.82,32.496],[-111.075,31.332],[-108.21,31.333],[-108.209,31.785],[-106.529,31.784],[-106.523,31.775],[-106.513,31.769],[-106.51,31.762],[-106.501,31.757],[-106.488,31.748],[-106.473,31.751],[-106.467,31.76],[-106.452,31.765],[-106.434,31.755],[-106.418,31.752],[-106.38,31.732],[-106.372,31.712],[-106.349,31.697],[-106.334,31.663],[-106.303,31.622],[-106.281,31.562],[-106.246,31.542],[-106.237,31.513],[-106.203,31.463],[-106.09,31.406],[-106.004,31.392],[-104.777,30.424],[-104.517,29.647],[-104.397,29.571],[-104.394,29.554],[-104.378,29.543],[-103.158,28.939],[-102.606,29.819],[-101.473,29.774],[-101.057,29.447],[-101.011,29.369],[-100.967,29.348],[-100.946,29.345],[-100.941,29.334],[-100.88,29.296],[-100.797,29.247],[-100.673,29.097],[-100.637,28.908],[-100.598,28.882],[-100.523,28.756],[-100.507,28.741],[-100.512,28.707],[-100.5,28.661],[-99.554,27.613],[-99.515,27.558],[-99.53,27.497],[-99.502,27.5],[-99.48,27.49],[-99.482,27.471],[-99.497,27.437],[-99.536,27.309],[-99.085,26.398],[-99.031,26.412],[-99.005,26.392],[-98.351,26.151],[-98.305,26.105],[-98.271,26.095],[-98.246,26.072],[-97.97,26.052],[-97.952,26.063],[-97.665,26.017],[-97.52,25.885],[-97.498,25.899],[-97.457,25.869],[-97.425,25.84],[-97.373,25.839],[-97.359,25.922],[-97.139,25.966]]]]}},{"type":"Feature","properties":{"code":"UY","name":"Uruguay"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-57.651,-30.192],[-57.615,-30.252],[-57.649,-30.351],[-57.891,-30.496],[-57.802,-30.772],[-57.895,-30.96],[-57.867,-31.064],[-57.991,-31.349],[-57.981,-31.387],[-58.076,-31.449],[-58.002,-31.531],[-58.001,-31.65],[-58.203,-31.87],[-58.1,-32.253],[-58.224,-32.524],[-58.122,-32.988],[-58.405,-33.118],[-58.444,-33.84],[-58.318,-34.15],[-57.931,-34.513],[-55.399,-35.207],[-53.679,-34.624],[-53.371,-33.743],[-53.396,-33.752],[-53.44,-33.693],[-53.528,-33.689],[-53.535,-33.168],[-53.111,-32.711],[-53.377,-32.57],[-53.396,-32.586],[-53.76,-32.075],[-54.174,-31.862],[-55.508,-30.913],[-55.508,-30.903],[-55.519,-30.898],[-55.527,-30.9],[-55.533,-30.902],[-55.534,-30.897],[-55.546,-30.891],[-55.552,-30.882],[-55.554,-30.873],[-55.563,-30.869],[-55.589,-30.841],[-55.874,-31.051],[-56.462,-30.385],[-56.48,-30.39],[-56.493,-30.395],[-56.902,-30.026],[-57.225,-30.261],[-57.651,-30.192]]]]}},{"type":"Feature","properties":{"code":"UZ","name":"Uzbekistan"},"geometry":{"type":"MultiPolygon","coordinates":[[[[65.852,42.855],[65.533,43.319],[65.187,43.488],[64.965,43.747],[64.539,43.569],[63.347,43.64],[62.017,43.51],[61.015,44.414],[58.597,45.587],[55.978,44.996],[55.978,44.996],[55.978,44.996],[55.978,44.996],[55.978,44.996],[55.978,44.996],[55.978,44.996],[55.978,44.996],[55.978,44.996],[55.978,44.996],[55.978,44.996],[55.977,44.996],[55.977,44.996],[55.977,44.996],[55.977,44.996],[55.977,44.996],[55.977,44.996],[55.977,44.996],[55.977,44.996],[55.977,44.996],[55.977,44.996],[55.977,44.996],[55.977,44.995],[55.977,44.995],[55.977,44.995],[55.976,44.995],[55.976,44.995],[55.976,44.995],[55.976,44.995],[55.976,44.995],[55.976,44.995],[55.976,44.995],[55.976,44.995],[55.976,44.995],[55.976,44.995],[55.976,44.995],[55.976,44.995],[55.976,44.995],[55.976,44.995],[55.976,44.995],[55.976,44.995],[55.976,44.994],[55.976,44.994],[55.976,44.994],[55.976,44.994],[55.976,44.994],[55.976,44.994],[55.976,44.994],[55.976,44.994],[55.976,44.994],[55.976,44.994],[55.976,44.994],[55.976,44.994],[55.976,44.994],[55.976,44.994],[55.976,44.994],[55.976,44.993],[55.976,44.993],[55.976,44.993],[55.976,44.993],[55.976,44.993],[56.003,41.326],[57.034,41.254],[57.138,41.366],[57.034,41.418],[56.962,41.804],[57.036,41.92],[57.303,42.141],[57.63,42.165],[57.849,42.186],[57.929,42.24],[57.91,42.437],[57.992,42.5],[58.349,42.433],[58.407,42.295],[58.517,42.303],[58.294,42.565],[58.143,42.622],[58.275,42.696],[58.58,42.65],[58.627,42.793],[58.934,42.541],[59.173,42.522],[59.295,42.371],[59.434,42.297],[59.946,42.277],[60.005,42.212],[59.964,42.143],[60.047,42.09],[60.036,42.01],[59.95,41.98],[60.332,41.751],[60.085,41.81],[60.06,41.763],[60.181,41.601],[60.066,41.436],[60.508,41.217],[61.033,41.257],[61.222,41.149],[61.332,41.149],[61.397,41.199],[61.445,41.294],[61.879,41.123],[62.118,40.582],[62.343,40.432],[62.433,39.985],[63.691,39.277],[63.708,39.223],[64.191,38.956],[64.326,38.987],[65.559,38.291],[65.839,38.257],[66.24,38.162],[66.41,38.024],[66.567,38.044],[66.677,37.968],[66.537,37.801],[66.529,37.586],[66.658,37.455],[66.523,37.398],[66.557,37.354],[66.647,37.33],[66.956,37.402],[67.082,37.355],[67.13,37.272],[67.222,37.245],[67.258,37.172],[67.519,37.261],[67.783,37.183],[67.847,37.316],[67.816,37.431],[68.126,37.93],[68.272,37.915],[68.403,38.195],[68.133,38.408],[68.063,38.394],[68.114,38.472],[68.059,38.561],[68.081,38.641],[68.056,38.716],[68.129,38.737],[68.069,38.821],[68.197,38.86],[68.097,39.026],[67.689,39.008],[67.678,39.145],[67.332,39.237],[67.365,39.313],[67.46,39.315],[67.468,39.461],[67.397,39.525],[67.465,39.536],[67.449,39.578],[67.629,39.602],[67.71,39.662],[68.121,39.563],[68.542,39.539],[68.62,39.689],[68.631,39.853],[68.889,39.872],[68.937,39.912],[68.849,40.05],[68.966,40.069],[69.019,40.115],[69.015,40.158],[68.628,40.078],[68.528,40.117],[68.533,40.148],[68.779,40.205],[68.793,40.176],[68.844,40.186],[68.858,40.209],[69.045,40.229],[69.157,40.216],[69.207,40.215],[69.304,40.188],[69.301,40.245],[69.252,40.264],[69.248,40.304],[69.308,40.282],[69.328,40.298],[69.338,40.348],[69.308,40.361],[69.285,40.419],[69.271,40.493],[69.211,40.545],[69.264,40.575],[69.346,40.58],[69.328,40.702],[69.383,40.792],[69.53,40.776],[69.594,40.702],[69.694,40.626],[70.367,40.903],[70.38,41.02],[70.453,41.044],[70.8,40.728],[70.499,40.525],[70.326,40.452],[70.375,40.386],[70.571,40.344],[70.564,40.264],[70.623,40.174],[70.861,40.217],[70.982,40.224],[70.958,40.288],[71.059,40.288],[71.13,40.341],[71.367,40.316],[71.425,40.286],[71.512,40.269],[71.515,40.23],[71.617,40.206],[71.619,40.268],[71.684,40.27],[71.706,40.204],[71.696,40.185],[71.717,40.179],[71.731,40.148],[71.826,40.219],[71.85,40.256],[72.055,40.276],[71.964,40.319],[72.186,40.499],[72.244,40.461],[72.403,40.401],[72.442,40.482],[72.415,40.509],[72.384,40.515],[72.417,40.557],[72.344,40.601],[72.405,40.619],[72.478,40.553],[72.667,40.522],[72.667,40.591],[72.696,40.598],[72.74,40.584],[72.748,40.581],[72.749,40.571],[72.76,40.573],[72.749,40.596],[72.749,40.609],[72.801,40.679],[72.848,40.672],[72.854,40.712],[72.872,40.711],[72.933,40.731],[72.991,40.765],[73.061,40.767],[73.134,40.791],[73.133,40.835],[73.019,40.847],[72.945,40.809],[72.843,40.855],[72.682,40.849],[72.591,40.869],[72.551,40.96],[72.487,40.971],[72.452,41.03],[72.385,41.028],[72.361,41.044],[72.348,41.061],[72.34,41.045],[72.324,41.034],[72.183,40.996],[72.176,41.024],[72.211,41.056],[72.179,41.106],[72.149,41.134],[72.176,41.155],[72.164,41.165],[72.107,41.155],[72.072,41.117],[71.86,41.191],[71.915,41.298],[71.839,41.355],[71.766,41.447],[71.711,41.43],[71.731,41.547],[71.659,41.496],[71.679,41.421],[71.572,41.292],[71.467,41.319],[71.438,41.196],[71.461,41.14],[71.402,41.094],[71.349,41.168],[71.272,41.11],[71.258,41.188],[71.118,41.154],[71.022,41.195],[70.962,41.164],[70.863,41.238],[70.779,41.248],[70.786,41.364],[70.676,41.48],[70.489,41.403],[70.177,41.545],[70.698,41.926],[71.287,42.18],[71.133,42.284],[70.945,42.262],[69.495,41.545],[69.458,41.569],[69.395,41.515],[69.451,41.462],[69.375,41.466],[69.356,41.472],[69.298,41.437],[69.251,41.467],[69.233,41.458],[69.227,41.463],[69.204,41.454],[69.185,41.452],[69.177,41.438],[69.151,41.431],[69.05,41.362],[69.013,41.228],[68.722,41.05],[68.739,40.97],[68.657,40.939],[68.622,41.03],[68.5,40.997],[68.584,40.914],[68.63,40.594],[68.5,40.564],[67.967,40.838],[68.127,41.032],[68.083,41.081],[67.985,41.028],[67.964,41.146],[66.691,41.131],[66.533,41.874],[66.005,41.945],[66.095,42.934],[65.852,42.855]],[[70.681,40.906],[70.672,40.906],[70.575,40.989],[70.542,40.988],[70.561,41.006],[70.616,40.977],[70.681,40.906]]],[[[71.211,40.034],[71.122,40.031],[71.063,40.177],[71.002,40.182],[71.01,40.055],[71.11,40.02],[71.117,39.993],[71.091,39.99],[71.105,39.956],[71.05,39.898],[71.105,39.914],[71.161,39.884],[71.231,39.936],[71.143,39.95],[71.211,40.034]]],[[[71.865,39.986],[71.788,40.014],[71.715,39.963],[71.75,39.937],[71.843,39.956],[71.865,39.986]]]]}},{"type":"Feature","properties":{"code":"VU","name":"Vanuatu"},"geometry":{"type":"MultiPolygon","coordinates":[[[[164.119,-13.357],[168.561,-20.425],[170.771,-20.499],[169.318,-12.545],[164.119,-13.357]]]]}},{"type":"Feature","properties":{"code":"VA","name":"Vatican City"},"geometry":{"type":"MultiPolygon","coordinates":[[[[12.452,41.901],[12.454,41.9],[12.454,41.901],[12.456,41.902],[12.457,41.901],[12.458,41.901],[12.458,41.902],[12.458,41.903],[12.458,41.903],[12.458,41.906],[12.456,41.906],[12.455,41.907],[12.451,41.906],[12.45,41.905],[12.448,41.903],[12.446,41.902],[12.448,41.901],[12.452,41.901]]]]}},{"type":"Feature","properties":{"code":"VE","name":"Venezuela"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-69.938,12.308],[-70.926,11.963],[-71.328,11.85],[-71.968,11.655],[-72.25,11.141],[-72.477,11.112],[-72.88,10.443],[-72.981,9.853],[-73.369,9.166],[-73.021,9.276],[-72.941,9.107],[-72.774,9.102],[-72.655,8.614],[-72.404,8.365],[-72.37,8.2],[-72.352,8.012],[-72.391,8.035],[-72.472,7.961],[-72.488,7.943],[-72.482,7.929],[-72.47,7.923],[-72.458,7.911],[-72.462,7.907],[-72.445,7.86],[-72.468,7.795],[-72.478,7.656],[-72.453,7.572],[-72.474,7.489],[-72.431,7.4],[-72.194,7.37],[-72.049,7.038],[-71.824,7.043],[-71.441,7.021],[-71.422,7.039],[-71.372,7.016],[-71.039,6.982],[-70.76,7.098],[-70.107,6.965],[-69.418,6.107],[-67.607,6.289],[-67.463,6.206],[-67.435,5.988],[-67.586,5.845],[-67.639,5.65],[-67.591,5.537],[-67.833,5.311],[-67.854,4.532],[-67.627,3.743],[-67.501,3.758],[-67.309,3.384],[-67.859,2.867],[-67.859,2.792],[-67.657,2.817],[-67.22,2.358],[-66.858,1.23],[-66.285,0.746],[-65.673,1.014],[-65.502,0.921],[-65.573,0.629],[-65.117,1.12],[-64.389,1.512],[-64.347,1.356],[-64.083,1.648],[-64.061,1.947],[-63.398,2.161],[-63.391,2.432],[-64.026,2.482],[-64.029,2.798],[-64.484,3.788],[-64.84,4.247],[-64.73,4.289],[-64.576,4.126],[-64.145,4.129],[-63.992,3.902],[-63.861,3.948],[-63.702,3.914],[-63.671,4.017],[-63.506,3.836],[-63.422,3.9],[-63.446,3.969],[-63.211,3.962],[-62.983,3.599],[-62.766,3.731],[-62.744,4.033],[-62.577,4.048],[-62.448,4.186],[-62.131,4.083],[-61.546,4.282],[-61.486,4.431],[-61.297,4.442],[-61.315,4.542],[-61.157,4.498],[-60.983,4.542],[-60.865,4.705],[-60.58,4.943],[-60.732,5.209],[-61.404,5.953],[-61.151,6.196],[-61.208,6.582],[-61.136,6.709],[-60.549,6.863],[-60.394,6.948],[-60.281,7.116],[-60.441,7.208],[-60.541,7.148],[-60.634,7.251],[-60.598,7.332],[-60.719,7.558],[-60.648,7.569],[-60.52,7.834],[-60.381,7.83],[-60.024,8.046],[-59.971,8.208],[-59.832,8.233],[-59.807,8.289],[-59.856,8.352],[-59.985,8.53],[-60.9,9.814],[-62.087,10.044],[-61.747,10.887],[-63.739,11.926],[-67.892,12.412],[-68.014,11.777],[-68.335,11.782],[-68.996,11.79],[-69.938,12.308]]]]}},{"type":"Feature","properties":{"code":"VN","name":"Vietnam"},"geometry":{"type":"MultiPolygon","coordinates":[[[[108.1,21.473],[108.057,21.536],[108.029,21.55],[107.979,21.545],[107.974,21.54],[107.971,21.541],[107.968,21.536],[107.952,21.539],[107.927,21.589],[107.9,21.59],[107.861,21.651],[107.804,21.661],[107.67,21.608],[107.565,21.619],[107.54,21.593],[107.491,21.598],[107.495,21.63],[107.472,21.667],[107.416,21.648],[107.386,21.598],[107.36,21.601],[107.358,21.667],[107.293,21.747],[107.246,21.708],[107.207,21.715],[107.108,21.799],[107.026,21.82],[107.01,21.859],[107.061,21.89],[107.056,21.923],[106.993,21.952],[106.972,21.926],[106.927,21.935],[106.918,21.974],[106.81,21.979],[106.743,22.01],[106.726,21.979],[106.693,21.96],[106.683,21.998],[106.701,22.024],[106.698,22.151],[106.675,22.189],[106.7,22.223],[106.652,22.34],[106.56,22.348],[106.572,22.37],[106.557,22.465],[106.584,22.474],[106.613,22.603],[106.653,22.576],[106.717,22.584],[106.723,22.636],[106.763,22.735],[106.824,22.788],[106.837,22.81],[106.813,22.823],[106.784,22.815],[106.711,22.86],[106.714,22.883],[106.673,22.896],[106.652,22.869],[106.602,22.929],[106.56,22.923],[106.513,22.949],[106.497,22.912],[106.35,22.867],[106.27,22.877],[106.197,22.985],[106.002,22.99],[105.996,22.942],[105.901,22.942],[105.873,22.928],[105.724,23.066],[105.576,23.075],[105.56,23.168],[105.5,23.207],[105.428,23.308],[105.408,23.281],[105.324,23.397],[105.226,23.272],[105.173,23.287],[105.117,23.252],[105.07,23.262],[104.987,23.192],[104.965,23.205],[104.949,23.172],[104.914,23.187],[104.88,23.171],[104.874,23.129],[104.795,23.129],[104.833,23.015],[104.868,22.952],[104.849,22.936],[104.771,22.9],[104.728,22.82],[104.653,22.834],[104.605,22.818],[104.581,22.856],[104.472,22.758],[104.356,22.694],[104.257,22.765],[104.271,22.846],[104.114,22.804],[104.037,22.729],[104.011,22.518],[103.992,22.52],[103.974,22.506],[103.968,22.512],[103.964,22.506],[103.952,22.513],[103.945,22.526],[103.933,22.527],[103.879,22.567],[103.645,22.8],[103.563,22.695],[103.578,22.658],[103.527,22.592],[103.436,22.706],[103.432,22.758],[103.323,22.813],[103.281,22.681],[103.189,22.645],[103.158,22.599],[103.18,22.557],[103.078,22.501],[103.072,22.448],[102.932,22.487],[102.864,22.607],[102.607,22.734],[102.571,22.704],[102.518,22.78],[102.467,22.771],[102.426,22.692],[102.384,22.679],[102.411,22.642],[102.253,22.461],[102.264,22.413],[102.166,22.433],[102.141,22.401],[102.187,22.304],[102.517,22.027],[102.491,21.99],[102.623,21.914],[102.671,21.659],[102.742,21.667],[102.821,21.737],[102.819,21.839],[102.856,21.845],[102.861,21.712],[102.98,21.741],[102.988,21.589],[102.863,21.425],[102.942,21.46],[102.889,21.311],[102.808,21.257],[102.898,21.247],[102.977,21.058],[103.035,21.058],[103.121,20.9],[103.215,20.898],[103.38,20.795],[103.457,20.824],[103.686,20.663],[103.735,20.667],[103.823,20.873],[103.98,20.915],[104.111,20.968],[104.274,20.914],[104.64,20.665],[104.382,20.472],[104.406,20.385],[104.479,20.375],[104.662,20.478],[104.721,20.406],[104.622,20.366],[104.613,20.245],[104.869,20.141],[104.917,20.156],[104.987,20.096],[104.847,19.918],[104.835,19.804],[104.684,19.727],[104.648,19.624],[104.532,19.617],[104.413,19.7],[104.232,19.702],[104.065,19.669],[104.056,19.617],[104.108,19.516],[104.061,19.435],[103.871,19.319],[104.536,18.977],[104.646,18.857],[105.128,18.705],[105.197,18.642],[105.133,18.584],[105.104,18.435],[105.159,18.387],[105.384,18.153],[105.463,18.22],[105.648,17.967],[105.604,17.894],[105.766,17.671],[105.857,17.632],[106.09,17.364],[106.19,17.282],[106.244,17.247],[106.293,17.302],[106.319,17.205],[106.436,17.014],[106.509,16.967],[106.55,17.003],[106.548,16.927],[106.52,16.921],[106.522,16.879],[106.553,16.868],[106.555,16.687],[106.59,16.623],[106.583,16.601],[106.615,16.607],[106.661,16.569],[106.658,16.478],[106.744,16.419],[106.841,16.554],[106.887,16.527],[106.881,16.436],[106.966,16.349],[106.974,16.302],[107.026,16.311],[107.091,16.309],[107.15,16.263],[107.146,16.178],[107.258,16.136],[107.34,16.055],[107.45,16.085],[107.463,16.011],[107.395,15.888],[107.342,15.895],[107.214,15.837],[107.219,15.746],[107.271,15.715],[107.276,15.628],[107.344,15.623],[107.382,15.498],[107.507,15.488],[107.533,15.405],[107.624,15.422],[107.606,15.375],[107.626,15.227],[107.588,15.201],[107.619,15.139],[107.615,15.057],[107.465,15.01],[107.483,14.938],[107.593,14.878],[107.516,14.793],[107.544,14.691],[107.554,14.628],[107.521,14.59],[107.526,14.547],[107.485,14.403],[107.449,14.416],[107.395,14.327],[107.404,14.245],[107.336,14.118],[107.372,14.079],[107.358,14.023],[107.382,13.991],[107.443,13.998],[107.465,13.916],[107.453,13.789],[107.535,13.739],[107.619,13.526],[107.628,13.367],[107.491,13.012],[107.496,12.889],[107.56,12.798],[107.576,12.522],[107.551,12.368],[107.446,12.294],[107.429,12.247],[107.345,12.333],[107.158,12.275],[107,12.09],[106.923,12.065],[106.794,12.081],[106.707,11.97],[106.411,11.974],[106.469,11.868],[106.441,11.863],[106.445,11.828],[106.416,11.77],[106.452,11.686],[106.447,11.668],[106.372,11.698],[106.305,11.675],[106.265,11.721],[106.185,11.752],[106.132,11.733],[106.067,11.778],[106.02,11.775],[106.008,11.72],[105.952,11.637],[105.89,11.679],[105.851,11.666],[105.809,11.605],[105.816,11.569],[105.873,11.56],[105.89,11.436],[105.868,11.283],[106.104,11.079],[106.153,11.105],[106.176,11.073],[106.201,10.978],[106.143,10.982],[106.185,10.795],[106.067,10.81],[105.945,10.917],[105.934,10.839],[105.846,10.859],[105.864,10.898],[105.778,11.037],[105.5,10.946],[105.429,10.969],[105.34,10.862],[105.114,10.963],[105.083,10.957],[105.027,10.892],[105.096,10.727],[104.951,10.64],[104.879,10.528],[104.59,10.531],[104.499,10.406],[104.48,10.43],[104.438,10.424],[103.992,10.484],[102.476,9.662],[104.816,8.031],[109.555,8.1],[111.605,13.571],[108.004,17.982],[108.1,21.473]]]]}},{"type":"Feature","properties":{"code":"US","name":"Wake Island","country":"United States"},"geometry":{"type":"MultiPolygon","coordinates":[[[[167.348,18.977],[166.68,20.148],[165.825,18.977],[167.348,18.977]]]]}},{"type":"Feature","properties":{"code":"GB","name":"Wales","country":"United Kingdom"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-3.508,53.543],[-5.373,53.633],[-6.039,51.132],[-3.206,51.316],[-2.663,51.595],[-2.662,51.836],[-2.743,51.844],[-2.787,51.888],[-2.882,51.932],[-2.971,51.905],[-3.126,52.081],[-3.093,52.205],[-3.008,52.275],[-2.997,52.323],[-2.954,52.35],[-3.047,52.345],[-3.228,52.425],[-3.23,52.453],[-3.134,52.492],[-3.036,52.5],[-2.997,52.551],[-3.009,52.578],[-3.087,52.548],[-3.097,52.531],[-3.129,52.529],[-3.136,52.582],[-3.044,52.654],[-3.017,52.721],[-2.956,52.718],[-3.01,52.766],[-3.087,52.775],[-3.161,52.796],[-3.157,52.849],[-3.136,52.895],[-2.972,52.965],[-2.924,52.938],[-2.859,52.945],[-2.805,52.894],[-2.722,52.93],[-2.725,52.984],[-2.831,52.992],[-2.891,53.094],[-2.875,53.123],[-2.906,53.11],[-2.986,53.156],[-2.92,53.177],[-2.923,53.194],[-3.037,53.251],[-3.082,53.255],[-3.508,53.543]]]]}},{"type":"Feature","properties":{"code":"WF","name":"Wallis and Futuna"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-178.666,-14.325],[-176.768,-14.952],[-175.598,-12.615],[-178.666,-14.325]]]]}},{"type":"Feature","properties":{"code":"PS","name":"West Bank"},"geometry":{"type":"MultiPolygon","coordinates":[[[[35.477,31.496],[35.559,31.765],[35.528,31.913],[35.544,31.966],[35.52,32.041],[35.571,32.219],[35.558,32.387],[35.421,32.416],[35.41,32.437],[35.416,32.456],[35.42,32.46],[35.402,32.501],[35.352,32.52],[35.307,32.51],[35.293,32.509],[35.25,32.525],[35.224,32.553],[35.159,32.505],[35.109,32.476],[35.1,32.479],[35.092,32.476],[35.086,32.469],[35.071,32.459],[35.054,32.418],[35.053,32.402],[35.042,32.382],[35.051,32.367],[35.042,32.35],[35.018,32.339],[35.011,32.287],[35.029,32.267],[35.018,32.24],[34.989,32.208],[34.957,32.195],[34.96,32.175],[34.99,32.146],[34.985,32.126],[34.994,32.11],[34.986,32.096],[35.003,32.027],[34.987,31.969],[35.001,31.933],[35.035,31.924],[35.04,31.893],[35.035,31.859],[34.997,31.856],[34.972,31.834],[35.02,31.829],[35.056,31.857],[35.077,31.856],[35.142,31.813],[35.186,31.809],[35.182,31.825],[35.195,31.827],[35.215,31.818],[35.216,31.839],[35.211,31.863],[35.204,31.867],[35.207,31.882],[35.208,31.882],[35.209,31.881],[35.21,31.882],[35.213,31.882],[35.214,31.882],[35.22,31.883],[35.223,31.879],[35.226,31.867],[35.228,31.864],[35.225,31.854],[35.23,31.842],[35.248,31.846],[35.258,31.839],[35.251,31.831],[35.264,31.826],[35.256,31.814],[35.261,31.791],[35.252,31.768],[35.263,31.748],[35.252,31.739],[35.25,31.725],[35.244,31.72],[35.243,31.712],[35.24,31.709],[35.224,31.719],[35.219,31.716],[35.205,31.724],[35.18,31.721],[35.165,31.732],[35.155,31.734],[35.151,31.736],[35.139,31.73],[35.129,31.733],[35.119,31.715],[35.108,31.716],[35.082,31.691],[35.009,31.654],[34.952,31.598],[34.941,31.556],[34.944,31.507],[34.933,31.478],[34.898,31.439],[34.878,31.393],[34.889,31.371],[34.926,31.343],[35.025,31.36],[35.13,31.355],[35.229,31.374],[35.397,31.496],[35.477,31.496]]]]}},{"type":"Feature","properties":{"code":"ID","name":"Western New Guinea","country":"Indonesia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.49,-9.228],[141.018,-9.351],[141.018,-6.902],[140.904,-6.85],[140.853,-6.73],[140.998,-6.323],[141.024,0.09],[129.632,2.214],[129.715,-0.247],[128.406,-2.303],[130.847,-2.611],[132.831,-4.703],[135.355,-5.014],[135.49,-9.228]]]]}},{"type":"Feature","properties":{"code":"EH","name":"Western Sahara"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-8.669,27.667],[-8.775,27.667],[-8.718,26.99],[-9.087,26.986],[-9.57,26.9],[-9.82,26.714],[-10.684,26.91],[-11.357,26.851],[-11.236,26.72],[-11.386,26.611],[-11.621,26.052],[-12.06,26.044],[-12.123,25.137],[-12.921,24.395],[-13.006,24.019],[-13.756,23.772],[-14.104,22.755],[-14.129,22.416],[-14.481,22.009],[-14.473,21.638],[-14.785,21.366],[-16.443,21.397],[-16.998,21.362],[-17.027,21.34],[-17.215,21.342],[-17.356,20.805],[-17.047,20.764],[-17.07,20.857],[-17.068,20.927],[-17.04,20.996],[-17.036,21.054],[-16.998,21.121],[-16.955,21.34],[-13.015,21.333],[-13.084,22.539],[-13.153,22.756],[-13.108,22.895],[-13.004,23.023],[-12.574,23.29],[-12.362,23.319],[-12.15,23.419],[-12.003,23.454],[-12,25.999],[-8.667,25.999],[-8.667,27.316],[-8.669,27.667]]]]}},{"type":"Feature","properties":{"code":"YE","name":"Yemen"},"geometry":{"type":"MultiPolygon","coordinates":[[[[56.043,11.007],[52.812,17.286],[52.743,17.295],[52.78,17.351],[52.003,19.001],[49.049,18.599],[48.2,18.206],[47.584,17.504],[47.482,17.108],[47.006,16.948],[46.765,17.292],[46.31,17.205],[44.501,17.475],[43.706,17.358],[43.43,17.561],[43.292,17.532],[43.225,17.383],[43.327,17.312],[43.202,17.259],[43.178,17.147],[43.24,17.034],[43.182,17.027],[43.181,16.984],[43.193,16.947],[43.14,16.907],[43.183,16.849],[43.22,16.839],[43.23,16.806],[43.248,16.806],[43.263,16.795],[43.259,16.753],[43.213,16.744],[43.221,16.652],[43.153,16.672],[43.116,16.532],[42.972,16.511],[42.944,16.495],[42.946,16.397],[42.768,16.404],[42.152,16.402],[41.444,15.225],[43.291,12.792],[43.329,12.597],[43.907,12.382],[49.68,13.71],[51.681,12.184],[56.043,11.007]]]]}},{"type":"Feature","properties":{"code":"ZM","name":"Zambia"},"geometry":{"type":"MultiPolygon","coordinates":[[[[32.954,-9.401],[32.762,-9.32],[32.756,-9.286],[32.537,-9.243],[32.491,-9.148],[32.435,-9.12],[32.255,-9.134],[32.161,-9.06],[32.082,-9.046],[31.989,-9.071],[31.942,-9.023],[31.947,-8.938],[31.816,-8.886],[31.712,-8.914],[31.571,-8.814],[31.571,-8.706],[31.375,-8.608],[31.008,-8.586],[30.792,-8.274],[28.889,-8.483],[28.971,-8.669],[28.385,-9.234],[28.366,-9.301],[28.526,-9.354],[28.516,-9.447],[28.562,-9.491],[28.685,-9.78],[28.628,-9.929],[28.65,-10.651],[28.372,-11.578],[28.484,-11.875],[29.186,-12.379],[29.499,-12.438],[29.484,-12.236],[29.814,-12.149],[29.816,-13.447],[29.651,-13.418],[29.605,-13.217],[29.019,-13.414],[28.332,-12.414],[27.599,-12.221],[27.21,-11.762],[27.225,-11.603],[27.044,-11.613],[26.887,-12.019],[26.018,-11.915],[25.331,-11.658],[25.341,-11.197],[24.426,-11.45],[24.345,-11.068],[24,-10.894],[24.026,-11.154],[23.988,-12.131],[24.067,-12.291],[23.909,-12.844],[24.033,-12.991],[21.98,-13.001],[22.003,-16.18],[22.172,-16.503],[23.2,-17.476],[23.475,-17.629],[24.236,-17.475],[24.328,-17.491],[24.387,-17.468],[24.562,-17.53],[24.709,-17.495],[25.002,-17.582],[25.264,-17.796],[25.516,-17.862],[25.683,-17.82],[25.857,-17.914],[25.859,-17.977],[26.089,-17.982],[26.091,-17.93],[26.216,-17.886],[26.559,-17.996],[26.684,-18.074],[26.743,-18.02],[26.899,-17.988],[27.142,-17.814],[27.307,-17.605],[27.614,-17.344],[27.628,-17.244],[27.831,-16.963],[28.737,-16.553],[28.762,-16.516],[28.815,-16.486],[28.85,-16.045],[28.924,-15.94],[29.013,-15.938],[29.22,-15.766],[29.444,-15.687],[29.832,-15.613],[30.356,-15.651],[30.419,-15.623],[30.221,-14.994],[33.242,-14],[33.167,-13.94],[33.076,-13.984],[33.03,-14.05],[32.99,-13.957],[32.89,-13.83],[32.79,-13.808],[32.77,-13.772],[32.845,-13.716],[32.783,-13.648],[32.687,-13.643],[32.665,-13.6],[32.684,-13.558],[32.737,-13.577],[32.842,-13.528],[32.861,-13.473],[33.008,-13.195],[32.983,-13.127],[33.022,-12.887],[32.967,-12.883],[32.944,-12.769],[33.059,-12.596],[33.188,-12.614],[33.282,-12.547],[33.375,-12.541],[33.545,-12.36],[33.476,-12.325],[33.37,-12.349],[33.26,-12.142],[33.339,-11.913],[33.327,-11.592],[33.243,-11.593],[33.237,-11.406],[33.293,-11.435],[33.293,-11.379],[33.397,-11.153],[33.26,-10.889],[33.28,-10.844],[33.476,-10.785],[33.707,-10.569],[33.548,-10.361],[33.539,-10.201],[33.313,-10.051],[33.379,-9.91],[33.366,-9.811],[33.315,-9.824],[33.209,-9.611],[33.121,-9.589],[33.102,-9.665],[33.055,-9.613],[33.003,-9.631],[33.005,-9.513],[32.954,-9.401]]]]}},{"type":"Feature","properties":{"code":"ZW","name":"Zimbabwe"},"geometry":{"type":"MultiPolygon","coordinates":[[[[30.419,-15.623],[30.356,-15.651],[29.832,-15.613],[29.444,-15.687],[29.22,-15.766],[29.013,-15.938],[28.924,-15.94],[28.85,-16.045],[28.815,-16.486],[28.762,-16.516],[28.737,-16.553],[27.831,-16.963],[27.628,-17.244],[27.614,-17.344],[27.307,-17.605],[27.142,-17.814],[26.899,-17.988],[26.743,-18.02],[26.684,-18.074],[26.559,-17.996],[26.216,-17.886],[26.091,-17.93],[26.089,-17.982],[25.859,-17.977],[25.857,-17.914],[25.683,-17.82],[25.516,-17.862],[25.264,-17.796],[25.239,-17.908],[25.318,-18.071],[25.4,-18.127],[25.535,-18.39],[25.689,-18.562],[25.792,-18.636],[25.824,-18.828],[25.943,-18.904],[25.998,-19.029],[25.962,-19.082],[26.172,-19.537],[26.722,-19.927],[27.213,-20.082],[27.298,-20.289],[27.289,-20.499],[27.694,-20.485],[27.73,-20.517],[27.692,-21.084],[27.914,-21.316],[28.017,-21.576],[28.294,-21.59],[28.499,-21.666],[28.581,-21.635],[29.078,-21.819],[29.04,-21.859],[29.022,-21.906],[29.022,-21.957],[29.041,-22.006],[29.085,-22.049],[29.145,-22.073],[29.197,-22.075],[29.246,-22.06],[29.353,-22.184],[29.377,-22.196],[29.646,-22.129],[29.768,-22.141],[29.922,-22.194],[30.131,-22.308],[30.227,-22.296],[30.284,-22.356],[30.386,-22.345],[30.487,-22.314],[30.629,-22.326],[30.867,-22.289],[31.089,-22.349],[31.163,-22.326],[31.306,-22.422],[31.383,-22.369],[32.412,-21.312],[32.482,-21.329],[32.371,-21.133],[32.516,-20.919],[32.481,-20.633],[32.552,-20.563],[32.662,-20.561],[32.86,-20.278],[32.86,-20.167],[32.93,-20.039],[33.012,-20.02],[33.065,-19.778],[32.95,-19.672],[32.847,-19.685],[32.844,-19.483],[32.783,-19.475],[32.78,-19.361],[32.851,-19.292],[32.871,-19.093],[32.84,-19.026],[32.721,-19.022],[32.699,-18.943],[32.734,-18.926],[32.701,-18.847],[32.825,-18.774],[32.902,-18.799],[32.95,-18.691],[32.886,-18.58],[32.886,-18.513],[33.023,-18.47],[33.032,-18.351],[32.941,-17.997],[33.049,-17.603],[32.985,-17.559],[32.966,-17.49],[33.043,-17.347],[33.005,-17.305],[32.966,-17.12],[32.841,-16.923],[32.911,-16.894],[32.977,-16.707],[32.789,-16.703],[32.699,-16.669],[32.71,-16.599],[32.428,-16.473],[32.285,-16.439],[32.028,-16.439],[31.913,-16.416],[31.902,-16.344],[31.68,-16.196],[31.425,-16.152],[31.306,-16.012],[31.132,-15.98],[30.978,-16.058],[30.916,-15.999],[30.426,-15.996],[30.419,-15.623]]]]}}]`),
    Vo = {
        type: Wo,
        features: Ko
    },
    X6 = "" + new URL("loader-CAI9inMe.gif",
        import.meta.url).href,
    qo = {
        class: "navbar-header relative z-[9999] px-4 py-2 text-white"
    },
    Jo = {
        class: "gap-4 items-center justify-end lg:justify-between flex"
    },
    Yo = {
        class: "items-center gap-3 hidden sm:hidden md:hidden lg:flex"
    },
    Xo = {
        class: "cartoon-button bg-icon-bg hover:bg-icon-hover-bg transition-all duration-300 text-2xl rounded-xl px-3 py-1 cursor-not-allowed"
    },
    Qo = {
        class: "login font-jockey_one"
    },
    tr = {
        class: ""
    },
    er = {
        class: "flex items-center justify-end mt-2 lg:mt-0"
    },
    nr = {
        class: "p-3 round rounded-lg font-jockey_one text-3xl",
        style: {
            "background-color": "rgba(42, 44, 71, 0.5)"
        }
    },
    ir = {
        class: ""
    },
    or = {
        class: "relative z-[99999] flex justify-center items-center flex-col gap-[15px] md:gap-[45px] lg:gap-[45px] h-[80%]"
    },
    rr = {
        class: "text-white flex gap-[15px] items-center justify-center"
    },
    sr = {
        key: 0,
        class: "text-white"
    },
    ar = {
        class: "text-white text-4xl md:text-6xl lg:text-6xl mb-3 font-jockey_one"
    },
    lr = {
        key: 1,
        class: "text-white"
    },
    ur = {
        key: 2,
        class: "flex items-center gap-3"
    },
    cr = ["src"],
    dr = {
        key: 3,
        class: "flex items-center gap-3"
    },
    hr = ["src"],
    fr = {
        __name: "Loading",
        props: {
            restoreLoadingChange: Function
        },
        setup(e) {
            const i = o2(),
                r = o1(y2.loadingTimer);
            let a = null;
            const l = () => {
                a || (a = setInterval(() => {
                    r.value > 0 ? r.value = parseFloat((r.value - .1).toFixed(1)) : (clearInterval(a), r.value = 0)
                }, 100))
            },
                c = Number(localStorage.getItem("rounds")),
                d = Number(localStorage.getItem("points")),
                p = JSON.parse(localStorage.getItem("countrySlug")),
                f = Number(localStorage.getItem("mapType")),
                m = localStorage.getItem("multiPlayer") === "true",
                g = Number(localStorage.getItem("rounds")),
                _ = () => {
                    const K = localStorage.getItem("playerName");
                    $4(), localStorage.setItem("mapType", f), m && K && localStorage.setItem("playerName", K), i.push("/")
                },
                x = [new URL("" + new URL("3d-fantasy-scene-DnHnnu3F.jpg",
                    import.meta.url).href,
                    import.meta.url).href, new URL("" + new URL("concept-polygonal-cave-illustration-BEuOSqaM.jpg",
                        import.meta.url).href,
                        import.meta.url).href, new URL("" + new URL("40484395_8848672-BUkELxlR.jpg",
                            import.meta.url).href,
                            import.meta.url).href],
                P = o1(0),
                E = h4(() => x[P.value]);
            let C;
            const G = () => {
                C = setInterval(() => {
                    P.value = (P.value + 1) % x.length
                }, 5e3)
            };
            return O4(() => {
                G(), m && l()
            }), O3(() => {
                clearInterval(a), a = null
            }), Jt(() => clearInterval(C)), (K, z) => (X(), Q("div", {
                class: "loading w-full h-[100vh] relative",
                style: t3({
                    backgroundImage: `url(${E.value})`
                })
            }, [z[9] || (z[9] = w("div", {
                class: "overlay w-full h-full fixed top-0 left-0"
            }, null, -1)), w("div", qo, [w("div", Jo, [w("div", Yo, [z[1] || (z[1] = w("p", {
                class: "text-3xl font-jockey_one inline-block"
            }, "GlobalGuesser", -1)), w("button", {
                class: "cartoon-button back-button font-jockey_one bg-single-player-btn-bg px-[20px] py-[10px] rounded-2xl text-2xl",
                onClick: z[0] || (z[0] = Z => {
                    _(), e.restoreLoadingChange()
                })
            }, "Back")]), w("button", Xo, [w("div", Qo, [z[2] || (z[2] = w("i", {
                class: "pi pi-pencil text-white text-1xl mr-2"
            }, null, -1)), w("span", tr, L1(h1(p) ? h1(p).name : "World"), 1)])])]), w("div", er, [w("div", nr, [w("p", ir, [z[3] || (z[3] = k1("Round # ")), w("span", null, L1(h1(c)) + " / 5", 1), z[4] || (z[4] = k1(" - ")), w("span", null, L1(h1(d)), 1), z[5] || (z[5] = k1(" Points"))])])])]), w("div", or, [w("div", rr, [m && r.value > 0 && h1(g) === 1 ? (X(), Q("div", sr, [w("h1", ar, " Game starting in " + L1(r.value) + "s ", 1)])) : E1("", !0), m && r.value === 0 && h1(g) === 1 ? (X(), Q("div", lr, z[6] || (z[6] = [w("h1", {
                class: "text-white text-4xl md:text-6xl lg:text-6xl mb-3 font-jockey_one"
            }, " Game starting now! ", -1)]))) : E1("", !0), m && h1(g) > 1 ? (X(), Q("div", ur, [z[7] || (z[7] = w("h1", {
                class: "text-white text-4xl md:text-6xl lg:text-6xl mb-3 font-jockey_one"
            }, "Loading...", -1)), w("img", {
                class: "w-[150px]",
                src: h1(X6),
                alt: "loader"
            }, null, 8, cr)])) : E1("", !0), !m && r.value > 0 ? (X(), Q("div", dr, [z[8] || (z[8] = w("h1", {
                class: "text-white text-4xl md:text-6xl lg:text-6xl mb-3 font-jockey_one"
            }, "Loading...", -1)), w("img", {
                class: "w-[150px]",
                src: h1(X6),
                alt: "loader"
            }, null, 8, hr)])) : E1("", !0)])])], 4))
        }
    },
    pr = I2(fr, [
        ["__scopeId", "data-v-0081b4a5"]
    ]);

function mr(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var y3 = {
    exports: {}
};
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
var gr = y3.exports,
    Q6;

function yr() {
    return Q6 || (Q6 = 1, function (e, i) {
        (function (r, a) {
            a(i)
        })(gr, function (r) {
            var a = "1.9.4";

            function l(t) {
                var n, o, s, u;
                for (o = 1, s = arguments.length; o < s; o++) {
                    u = arguments[o];
                    for (n in u) t[n] = u[n]
                }
                return t
            }
            var c = Object.create || function () {
                function t() { }
                return function (n) {
                    return t.prototype = n, new t
                }
            }();

            function d(t, n) {
                var o = Array.prototype.slice;
                if (t.bind) return t.bind.apply(t, o.call(arguments, 1));
                var s = o.call(arguments, 2);
                return function () {
                    return t.apply(n, s.length ? s.concat(o.call(arguments)) : arguments)
                }
            }
            var p = 0;

            function f(t) {
                return "_leaflet_id" in t || (t._leaflet_id = ++p), t._leaflet_id
            }

            function m(t, n, o) {
                var s, u, h, b;
                return b = function () {
                    s = !1, u && (h.apply(o, u), u = !1)
                }, h = function () {
                    s ? u = arguments : (t.apply(o, arguments), setTimeout(b, n), s = !0)
                }, h
            }

            function g(t, n, o) {
                var s = n[1],
                    u = n[0],
                    h = s - u;
                return t === s && o ? t : ((t - u) % h + h) % h + u
            }

            function _() {
                return !1
            }

            function x(t, n) {
                if (n === !1) return t;
                var o = Math.pow(10, n === void 0 ? 6 : n);
                return Math.round(t * o) / o
            }

            function P(t) {
                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
            }

            function E(t) {
                return P(t).split(/\s+/)
            }

            function C(t, n) {
                Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? c(t.options) : {});
                for (var o in n) t.options[o] = n[o];
                return t.options
            }

            function G(t, n, o) {
                var s = [];
                for (var u in t) s.push(encodeURIComponent(o ? u.toUpperCase() : u) + "=" + encodeURIComponent(t[u]));
                return (!n || n.indexOf("?") === -1 ? "?" : "&") + s.join("&")
            }
            var K = /\{ *([\w_ -]+) *\}/g;

            function z(t, n) {
                return t.replace(K, function (o, s) {
                    var u = n[s];
                    if (u === void 0) throw new Error("No value provided for variable " + o);
                    return typeof u == "function" && (u = u(n)), u
                })
            }
            var Z = Array.isArray || function (t) {
                return Object.prototype.toString.call(t) === "[object Array]"
            };

            function j(t, n) {
                for (var o = 0; o < t.length; o++)
                    if (t[o] === n) return o;
                return -1
            }
            var l1 = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

            function e1(t) {
                return window["webkit" + t] || window["moz" + t] || window["ms" + t]
            }
            var r1 = 0;

            function f1(t) {
                var n = +new Date,
                    o = Math.max(0, 16 - (n - r1));
                return r1 = n + o, window.setTimeout(t, o)
            }
            var N1 = window.requestAnimationFrame || e1("RequestAnimationFrame") || f1,
                $1 = window.cancelAnimationFrame || e1("CancelAnimationFrame") || e1("CancelRequestAnimationFrame") || function (t) {
                    window.clearTimeout(t)
                };

            function v1(t, n, o) {
                if (o && N1 === f1) t.call(n);
                else return N1.call(window, d(t, n))
            }

            function T1(t) {
                t && $1.call(window, t)
            }
            var K1 = {
                __proto__: null,
                extend: l,
                create: c,
                bind: d,
                get lastId() {
                    return p
                },
                stamp: f,
                throttle: m,
                wrapNum: g,
                falseFn: _,
                formatNum: x,
                trim: P,
                splitWords: E,
                setOptions: C,
                getParamString: G,
                template: z,
                isArray: Z,
                indexOf: j,
                emptyImageUrl: l1,
                requestFn: N1,
                cancelFn: $1,
                requestAnimFrame: v1,
                cancelAnimFrame: T1
            };

            function Y1() { }
            Y1.extend = function (t) {
                var n = function () {
                    C(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks()
                },
                    o = n.__super__ = this.prototype,
                    s = c(o);
                s.constructor = n, n.prototype = s;
                for (var u in this) Object.prototype.hasOwnProperty.call(this, u) && u !== "prototype" && u !== "__super__" && (n[u] = this[u]);
                return t.statics && l(n, t.statics), t.includes && (x4(t.includes), l.apply(null, [s].concat(t.includes))), l(s, t), delete s.statics, delete s.includes, s.options && (s.options = o.options ? c(o.options) : {}, l(s.options, t.options)), s._initHooks = [], s.callInitHooks = function () {
                    if (!this._initHooksCalled) {
                        o.callInitHooks && o.callInitHooks.call(this), this._initHooksCalled = !0;
                        for (var h = 0, b = s._initHooks.length; h < b; h++) s._initHooks[h].call(this)
                    }
                }, n
            }, Y1.include = function (t) {
                var n = this.prototype.options;
                return l(this.prototype, t), t.options && (this.prototype.options = n, this.mergeOptions(t.options)), this
            }, Y1.mergeOptions = function (t) {
                return l(this.prototype.options, t), this
            }, Y1.addInitHook = function (t) {
                var n = Array.prototype.slice.call(arguments, 1),
                    o = typeof t == "function" ? t : function () {
                        this[t].apply(this, n)
                    };
                return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(o), this
            };

            function x4(t) {
                if (!(typeof L > "u" || !L || !L.Mixin)) {
                    t = Z(t) ? t : [t];
                    for (var n = 0; n < t.length; n++) t[n] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack)
                }
            }
            var M1 = {
                on: function (t, n, o) {
                    if (typeof t == "object")
                        for (var s in t) this._on(s, t[s], n);
                    else {
                        t = E(t);
                        for (var u = 0, h = t.length; u < h; u++) this._on(t[u], n, o)
                    }
                    return this
                },
                off: function (t, n, o) {
                    if (!arguments.length) delete this._events;
                    else if (typeof t == "object")
                        for (var s in t) this._off(s, t[s], n);
                    else {
                        t = E(t);
                        for (var u = arguments.length === 1, h = 0, b = t.length; h < b; h++) u ? this._off(t[h]) : this._off(t[h], n, o)
                    }
                    return this
                },
                _on: function (t, n, o, s) {
                    if (typeof n != "function") {
                        console.warn("wrong listener type: " + typeof n);
                        return
                    }
                    if (this._listens(t, n, o) === !1) {
                        o === this && (o = void 0);
                        var u = {
                            fn: n,
                            ctx: o
                        };
                        s && (u.once = !0), this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push(u)
                    }
                },
                _off: function (t, n, o) {
                    var s, u, h;
                    if (this._events && (s = this._events[t], !!s)) {
                        if (arguments.length === 1) {
                            if (this._firingCount)
                                for (u = 0, h = s.length; u < h; u++) s[u].fn = _;
                            delete this._events[t];
                            return
                        }
                        if (typeof n != "function") {
                            console.warn("wrong listener type: " + typeof n);
                            return
                        }
                        var b = this._listens(t, n, o);
                        if (b !== !1) {
                            var S = s[b];
                            this._firingCount && (S.fn = _, this._events[t] = s = s.slice()), s.splice(b, 1)
                        }
                    }
                },
                fire: function (t, n, o) {
                    if (!this.listens(t, o)) return this;
                    var s = l({}, n, {
                        type: t,
                        target: this,
                        sourceTarget: n && n.sourceTarget || this
                    });
                    if (this._events) {
                        var u = this._events[t];
                        if (u) {
                            this._firingCount = this._firingCount + 1 || 1;
                            for (var h = 0, b = u.length; h < b; h++) {
                                var S = u[h],
                                    T = S.fn;
                                S.once && this.off(t, T, S.ctx), T.call(S.ctx || this, s)
                            }
                            this._firingCount--
                        }
                    }
                    return o && this._propagateEvent(s), this
                },
                listens: function (t, n, o, s) {
                    typeof t != "string" && console.warn('"string" type argument expected');
                    var u = n;
                    typeof n != "function" && (s = !!n, u = void 0, o = void 0);
                    var h = this._events && this._events[t];
                    if (h && h.length && this._listens(t, u, o) !== !1) return !0;
                    if (s) {
                        for (var b in this._eventParents)
                            if (this._eventParents[b].listens(t, n, o, s)) return !0
                    }
                    return !1
                },
                _listens: function (t, n, o) {
                    if (!this._events) return !1;
                    var s = this._events[t] || [];
                    if (!n) return !!s.length;
                    o === this && (o = void 0);
                    for (var u = 0, h = s.length; u < h; u++)
                        if (s[u].fn === n && s[u].ctx === o) return u;
                    return !1
                },
                once: function (t, n, o) {
                    if (typeof t == "object")
                        for (var s in t) this._on(s, t[s], n, !0);
                    else {
                        t = E(t);
                        for (var u = 0, h = t.length; u < h; u++) this._on(t[u], n, o, !0)
                    }
                    return this
                },
                addEventParent: function (t) {
                    return this._eventParents = this._eventParents || {}, this._eventParents[f(t)] = t, this
                },
                removeEventParent: function (t) {
                    return this._eventParents && delete this._eventParents[f(t)], this
                },
                _propagateEvent: function (t) {
                    for (var n in this._eventParents) this._eventParents[n].fire(t.type, l({
                        layer: t.target,
                        propagatedFrom: t.target
                    }, t), !0)
                }
            };
            M1.addEventListener = M1.on, M1.removeEventListener = M1.clearAllEventListeners = M1.off, M1.addOneTimeEventListener = M1.once, M1.fireEvent = M1.fire, M1.hasEventListeners = M1.listens;
            var Y = Y1.extend(M1);

            function k(t, n, o) {
                this.x = o ? Math.round(t) : t, this.y = o ? Math.round(n) : n
            }
            var z1 = Math.trunc || function (t) {
                return t > 0 ? Math.floor(t) : Math.ceil(t)
            };
            k.prototype = {
                clone: function () {
                    return new k(this.x, this.y)
                },
                add: function (t) {
                    return this.clone()._add(J(t))
                },
                _add: function (t) {
                    return this.x += t.x, this.y += t.y, this
                },
                subtract: function (t) {
                    return this.clone()._subtract(J(t))
                },
                _subtract: function (t) {
                    return this.x -= t.x, this.y -= t.y, this
                },
                divideBy: function (t) {
                    return this.clone()._divideBy(t)
                },
                _divideBy: function (t) {
                    return this.x /= t, this.y /= t, this
                },
                multiplyBy: function (t) {
                    return this.clone()._multiplyBy(t)
                },
                _multiplyBy: function (t) {
                    return this.x *= t, this.y *= t, this
                },
                scaleBy: function (t) {
                    return new k(this.x * t.x, this.y * t.y)
                },
                unscaleBy: function (t) {
                    return new k(this.x / t.x, this.y / t.y)
                },
                round: function () {
                    return this.clone()._round()
                },
                _round: function () {
                    return this.x = Math.round(this.x), this.y = Math.round(this.y), this
                },
                floor: function () {
                    return this.clone()._floor()
                },
                _floor: function () {
                    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
                },
                ceil: function () {
                    return this.clone()._ceil()
                },
                _ceil: function () {
                    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
                },
                trunc: function () {
                    return this.clone()._trunc()
                },
                _trunc: function () {
                    return this.x = z1(this.x), this.y = z1(this.y), this
                },
                distanceTo: function (t) {
                    t = J(t);
                    var n = t.x - this.x,
                        o = t.y - this.y;
                    return Math.sqrt(n * n + o * o)
                },
                equals: function (t) {
                    return t = J(t), t.x === this.x && t.y === this.y
                },
                contains: function (t) {
                    return t = J(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
                },
                toString: function () {
                    return "Point(" + x(this.x) + ", " + x(this.y) + ")"
                }
            };

            function J(t, n, o) {
                return t instanceof k ? t : Z(t) ? new k(t[0], t[1]) : t == null ? t : typeof t == "object" && "x" in t && "y" in t ? new k(t.x, t.y) : new k(t, n, o)
            }

            function y1(t, n) {
                if (t)
                    for (var o = n ? [t, n] : t, s = 0, u = o.length; s < u; s++) this.extend(o[s])
            }
            y1.prototype = {
                extend: function (t) {
                    var n, o;
                    if (!t) return this;
                    if (t instanceof k || typeof t[0] == "number" || "x" in t) n = o = J(t);
                    else if (t = b1(t), n = t.min, o = t.max, !n || !o) return this;
                    return !this.min && !this.max ? (this.min = n.clone(), this.max = o.clone()) : (this.min.x = Math.min(n.x, this.min.x), this.max.x = Math.max(o.x, this.max.x), this.min.y = Math.min(n.y, this.min.y), this.max.y = Math.max(o.y, this.max.y)), this
                },
                getCenter: function (t) {
                    return J((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
                },
                getBottomLeft: function () {
                    return J(this.min.x, this.max.y)
                },
                getTopRight: function () {
                    return J(this.max.x, this.min.y)
                },
                getTopLeft: function () {
                    return this.min
                },
                getBottomRight: function () {
                    return this.max
                },
                getSize: function () {
                    return this.max.subtract(this.min)
                },
                contains: function (t) {
                    var n, o;
                    return typeof t[0] == "number" || t instanceof k ? t = J(t) : t = b1(t), t instanceof y1 ? (n = t.min, o = t.max) : n = o = t, n.x >= this.min.x && o.x <= this.max.x && n.y >= this.min.y && o.y <= this.max.y
                },
                intersects: function (t) {
                    t = b1(t);
                    var n = this.min,
                        o = this.max,
                        s = t.min,
                        u = t.max,
                        h = u.x >= n.x && s.x <= o.x,
                        b = u.y >= n.y && s.y <= o.y;
                    return h && b
                },
                overlaps: function (t) {
                    t = b1(t);
                    var n = this.min,
                        o = this.max,
                        s = t.min,
                        u = t.max,
                        h = u.x > n.x && s.x < o.x,
                        b = u.y > n.y && s.y < o.y;
                    return h && b
                },
                isValid: function () {
                    return !!(this.min && this.max)
                },
                pad: function (t) {
                    var n = this.min,
                        o = this.max,
                        s = Math.abs(n.x - o.x) * t,
                        u = Math.abs(n.y - o.y) * t;
                    return b1(J(n.x - s, n.y - u), J(o.x + s, o.y + u))
                },
                equals: function (t) {
                    return t ? (t = b1(t), this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight())) : !1
                }
            };

            function b1(t, n) {
                return !t || t instanceof y1 ? t : new y1(t, n)
            }

            function A1(t, n) {
                if (t)
                    for (var o = n ? [t, n] : t, s = 0, u = o.length; s < u; s++) this.extend(o[s])
            }
            A1.prototype = {
                extend: function (t) {
                    var n = this._southWest,
                        o = this._northEast,
                        s, u;
                    if (t instanceof s1) s = t, u = t;
                    else if (t instanceof A1) {
                        if (s = t._southWest, u = t._northEast, !s || !u) return this
                    } else return t ? this.extend(u1(t) || p1(t)) : this;
                    return !n && !o ? (this._southWest = new s1(s.lat, s.lng), this._northEast = new s1(u.lat, u.lng)) : (n.lat = Math.min(s.lat, n.lat), n.lng = Math.min(s.lng, n.lng), o.lat = Math.max(u.lat, o.lat), o.lng = Math.max(u.lng, o.lng)), this
                },
                pad: function (t) {
                    var n = this._southWest,
                        o = this._northEast,
                        s = Math.abs(n.lat - o.lat) * t,
                        u = Math.abs(n.lng - o.lng) * t;
                    return new A1(new s1(n.lat - s, n.lng - u), new s1(o.lat + s, o.lng + u))
                },
                getCenter: function () {
                    return new s1((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
                },
                getSouthWest: function () {
                    return this._southWest
                },
                getNorthEast: function () {
                    return this._northEast
                },
                getNorthWest: function () {
                    return new s1(this.getNorth(), this.getWest())
                },
                getSouthEast: function () {
                    return new s1(this.getSouth(), this.getEast())
                },
                getWest: function () {
                    return this._southWest.lng
                },
                getSouth: function () {
                    return this._southWest.lat
                },
                getEast: function () {
                    return this._northEast.lng
                },
                getNorth: function () {
                    return this._northEast.lat
                },
                contains: function (t) {
                    typeof t[0] == "number" || t instanceof s1 || "lat" in t ? t = u1(t) : t = p1(t);
                    var n = this._southWest,
                        o = this._northEast,
                        s, u;
                    return t instanceof A1 ? (s = t.getSouthWest(), u = t.getNorthEast()) : s = u = t, s.lat >= n.lat && u.lat <= o.lat && s.lng >= n.lng && u.lng <= o.lng
                },
                intersects: function (t) {
                    t = p1(t);
                    var n = this._southWest,
                        o = this._northEast,
                        s = t.getSouthWest(),
                        u = t.getNorthEast(),
                        h = u.lat >= n.lat && s.lat <= o.lat,
                        b = u.lng >= n.lng && s.lng <= o.lng;
                    return h && b
                },
                overlaps: function (t) {
                    t = p1(t);
                    var n = this._southWest,
                        o = this._northEast,
                        s = t.getSouthWest(),
                        u = t.getNorthEast(),
                        h = u.lat > n.lat && s.lat < o.lat,
                        b = u.lng > n.lng && s.lng < o.lng;
                    return h && b
                },
                toBBoxString: function () {
                    return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
                },
                equals: function (t, n) {
                    return t ? (t = p1(t), this._southWest.equals(t.getSouthWest(), n) && this._northEast.equals(t.getNorthEast(), n)) : !1
                },
                isValid: function () {
                    return !!(this._southWest && this._northEast)
                }
            };

            function p1(t, n) {
                return t instanceof A1 ? t : new A1(t, n)
            }

            function s1(t, n, o) {
                if (isNaN(t) || isNaN(n)) throw new Error("Invalid LatLng object: (" + t + ", " + n + ")");
                this.lat = +t, this.lng = +n, o !== void 0 && (this.alt = +o)
            }
            s1.prototype = {
                equals: function (t, n) {
                    if (!t) return !1;
                    t = u1(t);
                    var o = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
                    return o <= (n === void 0 ? 1e-9 : n)
                },
                toString: function (t) {
                    return "LatLng(" + x(this.lat, t) + ", " + x(this.lng, t) + ")"
                },
                distanceTo: function (t) {
                    return D.distance(this, u1(t))
                },
                wrap: function () {
                    return D.wrapLatLng(this)
                },
                toBounds: function (t) {
                    var n = 180 * t / 40075017,
                        o = n / Math.cos(Math.PI / 180 * this.lat);
                    return p1([this.lat - n, this.lng - o], [this.lat + n, this.lng + o])
                },
                clone: function () {
                    return new s1(this.lat, this.lng, this.alt)
                }
            };

            function u1(t, n, o) {
                return t instanceof s1 ? t : Z(t) && typeof t[0] != "object" ? t.length === 3 ? new s1(t[0], t[1], t[2]) : t.length === 2 ? new s1(t[0], t[1]) : null : t == null ? t : typeof t == "object" && "lat" in t ? new s1(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : n === void 0 ? null : new s1(t, n, o)
            }
            var A = {
                latLngToPoint: function (t, n) {
                    var o = this.projection.project(t),
                        s = this.scale(n);
                    return this.transformation._transform(o, s)
                },
                pointToLatLng: function (t, n) {
                    var o = this.scale(n),
                        s = this.transformation.untransform(t, o);
                    return this.projection.unproject(s)
                },
                project: function (t) {
                    return this.projection.project(t)
                },
                unproject: function (t) {
                    return this.projection.unproject(t)
                },
                scale: function (t) {
                    return 256 * Math.pow(2, t)
                },
                zoom: function (t) {
                    return Math.log(t / 256) / Math.LN2
                },
                getProjectedBounds: function (t) {
                    if (this.infinite) return null;
                    var n = this.projection.bounds,
                        o = this.scale(t),
                        s = this.transformation.transform(n.min, o),
                        u = this.transformation.transform(n.max, o);
                    return new y1(s, u)
                },
                infinite: !1,
                wrapLatLng: function (t) {
                    var n = this.wrapLng ? g(t.lng, this.wrapLng, !0) : t.lng,
                        o = this.wrapLat ? g(t.lat, this.wrapLat, !0) : t.lat,
                        s = t.alt;
                    return new s1(o, n, s)
                },
                wrapLatLngBounds: function (t) {
                    var n = t.getCenter(),
                        o = this.wrapLatLng(n),
                        s = n.lat - o.lat,
                        u = n.lng - o.lng;
                    if (s === 0 && u === 0) return t;
                    var h = t.getSouthWest(),
                        b = t.getNorthEast(),
                        S = new s1(h.lat - s, h.lng - u),
                        T = new s1(b.lat - s, b.lng - u);
                    return new A1(S, T)
                }
            },
                D = l({}, A, {
                    wrapLng: [-180, 180],
                    R: 6371e3,
                    distance: function (t, n) {
                        var o = Math.PI / 180,
                            s = t.lat * o,
                            u = n.lat * o,
                            h = Math.sin((n.lat - t.lat) * o / 2),
                            b = Math.sin((n.lng - t.lng) * o / 2),
                            S = h * h + Math.cos(s) * Math.cos(u) * b * b,
                            T = 2 * Math.atan2(Math.sqrt(S), Math.sqrt(1 - S));
                        return this.R * T
                    }
                }),
                I = 6378137,
                H = {
                    R: I,
                    MAX_LATITUDE: 85.0511287798,
                    project: function (t) {
                        var n = Math.PI / 180,
                            o = this.MAX_LATITUDE,
                            s = Math.max(Math.min(o, t.lat), -o),
                            u = Math.sin(s * n);
                        return new k(this.R * t.lng * n, this.R * Math.log((1 + u) / (1 - u)) / 2)
                    },
                    unproject: function (t) {
                        var n = 180 / Math.PI;
                        return new s1((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * n, t.x * n / this.R)
                    },
                    bounds: function () {
                        var t = I * Math.PI;
                        return new y1([-t, -t], [t, t])
                    }()
                };

            function n1(t, n, o, s) {
                if (Z(t)) {
                    this._a = t[0], this._b = t[1], this._c = t[2], this._d = t[3];
                    return
                }
                this._a = t, this._b = n, this._c = o, this._d = s
            }
            n1.prototype = {
                transform: function (t, n) {
                    return this._transform(t.clone(), n)
                },
                _transform: function (t, n) {
                    return n = n || 1, t.x = n * (this._a * t.x + this._b), t.y = n * (this._c * t.y + this._d), t
                },
                untransform: function (t, n) {
                    return n = n || 1, new k((t.x / n - this._b) / this._a, (t.y / n - this._d) / this._c)
                }
            };

            function y(t, n, o, s) {
                return new n1(t, n, o, s)
            }
            var v = l({}, D, {
                code: "EPSG:3857",
                projection: H,
                transformation: function () {
                    var t = .5 / (Math.PI * H.R);
                    return y(t, .5, -t, .5)
                }()
            }),
                M = l({}, v, {
                    code: "EPSG:900913"
                });

            function F(t) {
                return document.createElementNS("http://www.w3.org/2000/svg", t)
            }

            function R(t, n) {
                var o = "",
                    s, u, h, b, S, T;
                for (s = 0, h = t.length; s < h; s++) {
                    for (S = t[s], u = 0, b = S.length; u < b; u++) T = S[u], o += (u ? "L" : "M") + T.x + " " + T.y;
                    o += n ? t1.svg ? "z" : "x" : ""
                }
                return o || "M0 0"
            }
            var O = document.documentElement.style,
                W = "ActiveXObject" in window,
                U = W && !document.addEventListener,
                $ = "msLaunchUri" in navigator && !("documentMode" in document),
                B = R4("webkit"),
                a1 = R4("android"),
                V = R4("android 2") || R4("android 3"),
                i1 = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
                d1 = a1 && R4("Google") && i1 < 537 && !("AudioNode" in window),
                w1 = !!window.opera,
                D1 = !$ && R4("chrome"),
                C1 = R4("gecko") && !B && !w1 && !W,
                l4 = !D1 && R4("safari"),
                Q1 = R4("phantom"),
                p4 = "OTransition" in O,
                b4 = navigator.platform.indexOf("Win") === 0,
                r2 = W && "transition" in O,
                k2 = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !V,
                e4 = "MozPerspective" in O,
                w4 = !window.L_DISABLE_3D && (r2 || k2 || e4) && !p4 && !Q1,
                s2 = typeof orientation < "u" || R4("mobile"),
                T9 = s2 && B,
                E9 = s2 && k2,
                oe = !window.PointerEvent && window.MSPointerEvent,
                re = !!(window.PointerEvent || oe),
                se = "ontouchstart" in window || !!window.TouchEvent,
                L9 = !window.L_NO_TOUCH && (se || re),
                C9 = s2 && w1,
                I9 = s2 && C1,
                k9 = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
                A9 = function () {
                    var t = !1;
                    try {
                        var n = Object.defineProperty({}, "passive", {
                            get: function () {
                                t = !0
                            }
                        });
                        window.addEventListener("testPassiveEventSupport", _, n), window.removeEventListener("testPassiveEventSupport", _, n)
                    } catch { }
                    return t
                }(),
                F9 = function () {
                    return !!document.createElement("canvas").getContext
                }(),
                I5 = !!(document.createElementNS && F("svg").createSVGRect),
                O9 = !!I5 && function () {
                    var t = document.createElement("div");
                    return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) === "http://www.w3.org/2000/svg"
                }(),
                R9 = !I5 && function () {
                    try {
                        var t = document.createElement("div");
                        t.innerHTML = '<v:shape adj="1"/>';
                        var n = t.firstChild;
                        return n.style.behavior = "url(#default#VML)", n && typeof n.adj == "object"
                    } catch {
                        return !1
                    }
                }(),
                D9 = navigator.platform.indexOf("Mac") === 0,
                N9 = navigator.platform.indexOf("Linux") === 0;

            function R4(t) {
                return navigator.userAgent.toLowerCase().indexOf(t) >= 0
            }
            var t1 = {
                ie: W,
                ielt9: U,
                edge: $,
                webkit: B,
                android: a1,
                android23: V,
                androidStock: d1,
                opera: w1,
                chrome: D1,
                gecko: C1,
                safari: l4,
                phantom: Q1,
                opera12: p4,
                win: b4,
                ie3d: r2,
                webkit3d: k2,
                gecko3d: e4,
                any3d: w4,
                mobile: s2,
                mobileWebkit: T9,
                mobileWebkit3d: E9,
                msPointer: oe,
                pointer: re,
                touch: L9,
                touchNative: se,
                mobileOpera: C9,
                mobileGecko: I9,
                retina: k9,
                passiveEvents: A9,
                canvas: F9,
                svg: I5,
                vml: R9,
                inlineSvg: O9,
                mac: D9,
                linux: N9
            },
                ae = t1.msPointer ? "MSPointerDown" : "pointerdown",
                le = t1.msPointer ? "MSPointerMove" : "pointermove",
                ue = t1.msPointer ? "MSPointerUp" : "pointerup",
                ce = t1.msPointer ? "MSPointerCancel" : "pointercancel",
                k5 = {
                    touchstart: ae,
                    touchmove: le,
                    touchend: ue,
                    touchcancel: ce
                },
                de = {
                    touchstart: U9,
                    touchmove: D3,
                    touchend: D3,
                    touchcancel: D3
                },
                A2 = {},
                he = !1;

            function B9(t, n, o) {
                return n === "touchstart" && H9(), de[n] ? (o = de[n].bind(this, o), t.addEventListener(k5[n], o, !1), o) : (console.warn("wrong event specified:", n), _)
            }

            function G9(t, n, o) {
                if (!k5[n]) {
                    console.warn("wrong event specified:", n);
                    return
                }
                t.removeEventListener(k5[n], o, !1)
            }

            function z9(t) {
                A2[t.pointerId] = t
            }

            function Z9(t) {
                A2[t.pointerId] && (A2[t.pointerId] = t)
            }

            function fe(t) {
                delete A2[t.pointerId]
            }

            function H9() {
                he || (document.addEventListener(ae, z9, !0), document.addEventListener(le, Z9, !0), document.addEventListener(ue, fe, !0), document.addEventListener(ce, fe, !0), he = !0)
            }

            function D3(t, n) {
                if (n.pointerType !== (n.MSPOINTER_TYPE_MOUSE || "mouse")) {
                    n.touches = [];
                    for (var o in A2) n.touches.push(A2[o]);
                    n.changedTouches = [n], t(n)
                }
            }

            function U9(t, n) {
                n.MSPOINTER_TYPE_TOUCH && n.pointerType === n.MSPOINTER_TYPE_TOUCH && t4(n), D3(t, n)
            }

            function $9(t) {
                var n = {},
                    o, s;
                for (s in t) o = t[s], n[s] = o && o.bind ? o.bind(t) : o;
                return t = n, n.type = "dblclick", n.detail = 2, n.isTrusted = !1, n._simulated = !0, n
            }
            var j9 = 200;

            function W9(t, n) {
                t.addEventListener("dblclick", n);
                var o = 0,
                    s;

                function u(h) {
                    if (h.detail !== 1) {
                        s = h.detail;
                        return
                    }
                    if (!(h.pointerType === "mouse" || h.sourceCapabilities && !h.sourceCapabilities.firesTouchEvents)) {
                        var b = _e(h);
                        if (!(b.some(function (T) {
                            return T instanceof HTMLLabelElement && T.attributes.for
                        }) && !b.some(function (T) {
                            return T instanceof HTMLInputElement || T instanceof HTMLSelectElement
                        }))) {
                            var S = Date.now();
                            S - o <= j9 ? (s++, s === 2 && n($9(h))) : s = 1, o = S
                        }
                    }
                }
                return t.addEventListener("click", u), {
                    dblclick: n,
                    simDblclick: u
                }
            }

            function K9(t, n) {
                t.removeEventListener("dblclick", n.dblclick), t.removeEventListener("click", n.simDblclick)
            }
            var A5 = G3(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
                e3 = G3(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
                pe = e3 === "webkitTransition" || e3 === "OTransition" ? e3 + "End" : "transitionend";

            function me(t) {
                return typeof t == "string" ? document.getElementById(t) : t
            }

            function n3(t, n) {
                var o = t.style[n] || t.currentStyle && t.currentStyle[n];
                if ((!o || o === "auto") && document.defaultView) {
                    var s = document.defaultView.getComputedStyle(t, null);
                    o = s ? s[n] : null
                }
                return o === "auto" ? null : o
            }

            function I1(t, n, o) {
                var s = document.createElement(t);
                return s.className = n || "", o && o.appendChild(s), s
            }

            function j1(t) {
                var n = t.parentNode;
                n && n.removeChild(t)
            }

            function N3(t) {
                for (; t.firstChild;) t.removeChild(t.firstChild)
            }

            function F2(t) {
                var n = t.parentNode;
                n && n.lastChild !== t && n.appendChild(t)
            }

            function O2(t) {
                var n = t.parentNode;
                n && n.firstChild !== t && n.insertBefore(t, n.firstChild)
            }

            function F5(t, n) {
                if (t.classList !== void 0) return t.classList.contains(n);
                var o = B3(t);
                return o.length > 0 && new RegExp("(^|\\s)" + n + "(\\s|$)").test(o)
            }

            function x1(t, n) {
                if (t.classList !== void 0)
                    for (var o = E(n), s = 0, u = o.length; s < u; s++) t.classList.add(o[s]);
                else if (!F5(t, n)) {
                    var h = B3(t);
                    O5(t, (h ? h + " " : "") + n)
                }
            }

            function W1(t, n) {
                t.classList !== void 0 ? t.classList.remove(n) : O5(t, P((" " + B3(t) + " ").replace(" " + n + " ", " ")))
            }

            function O5(t, n) {
                t.className.baseVal === void 0 ? t.className = n : t.className.baseVal = n
            }

            function B3(t) {
                return t.correspondingElement && (t = t.correspondingElement), t.className.baseVal === void 0 ? t.className : t.className.baseVal
            }

            function P4(t, n) {
                "opacity" in t.style ? t.style.opacity = n : "filter" in t.style && V9(t, n)
            }

            function V9(t, n) {
                var o = !1,
                    s = "DXImageTransform.Microsoft.Alpha";
                try {
                    o = t.filters.item(s)
                } catch {
                    if (n === 1) return
                }
                n = Math.round(n * 100), o ? (o.Enabled = n !== 100, o.Opacity = n) : t.style.filter += " progid:" + s + "(opacity=" + n + ")"
            }

            function G3(t) {
                for (var n = document.documentElement.style, o = 0; o < t.length; o++)
                    if (t[o] in n) return t[o];
                return !1
            }

            function _2(t, n, o) {
                var s = n || new k(0, 0);
                t.style[A5] = (t1.ie3d ? "translate(" + s.x + "px," + s.y + "px)" : "translate3d(" + s.x + "px," + s.y + "px,0)") + (o ? " scale(" + o + ")" : "")
            }

            function V1(t, n) {
                t._leaflet_pos = n, t1.any3d ? _2(t, n) : (t.style.left = n.x + "px", t.style.top = n.y + "px")
            }

            function v2(t) {
                return t._leaflet_pos || new k(0, 0)
            }
            var i3, o3, R5;
            if ("onselectstart" in document) i3 = function () {
                _1(window, "selectstart", t4)
            }, o3 = function () {
                Z1(window, "selectstart", t4)
            };
            else {
                var r3 = G3(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
                i3 = function () {
                    if (r3) {
                        var t = document.documentElement.style;
                        R5 = t[r3], t[r3] = "none"
                    }
                }, o3 = function () {
                    r3 && (document.documentElement.style[r3] = R5, R5 = void 0)
                }
            }

            function D5() {
                _1(window, "dragstart", t4)
            }

            function N5() {
                Z1(window, "dragstart", t4)
            }
            var z3, B5;

            function G5(t) {
                for (; t.tabIndex === -1;) t = t.parentNode;
                t.style && (Z3(), z3 = t, B5 = t.style.outlineStyle, t.style.outlineStyle = "none", _1(window, "keydown", Z3))
            }

            function Z3() {
                z3 && (z3.style.outlineStyle = B5, z3 = void 0, B5 = void 0, Z1(window, "keydown", Z3))
            }

            function ge(t) {
                do t = t.parentNode; while ((!t.offsetWidth || !t.offsetHeight) && t !== document.body);
                return t
            }

            function z5(t) {
                var n = t.getBoundingClientRect();
                return {
                    x: n.width / t.offsetWidth || 1,
                    y: n.height / t.offsetHeight || 1,
                    boundingClientRect: n
                }
            }
            var q9 = {
                __proto__: null,
                TRANSFORM: A5,
                TRANSITION: e3,
                TRANSITION_END: pe,
                get: me,
                getStyle: n3,
                create: I1,
                remove: j1,
                empty: N3,
                toFront: F2,
                toBack: O2,
                hasClass: F5,
                addClass: x1,
                removeClass: W1,
                setClass: O5,
                getClass: B3,
                setOpacity: P4,
                testProp: G3,
                setTransform: _2,
                setPosition: V1,
                getPosition: v2,
                get disableTextSelection() {
                    return i3
                },
                get enableTextSelection() {
                    return o3
                },
                disableImageDrag: D5,
                enableImageDrag: N5,
                preventOutline: G5,
                restoreOutline: Z3,
                getSizedParentNode: ge,
                getScale: z5
            };

            function _1(t, n, o, s) {
                if (n && typeof n == "object")
                    for (var u in n) H5(t, u, n[u], o);
                else {
                    n = E(n);
                    for (var h = 0, b = n.length; h < b; h++) H5(t, n[h], o, s)
                }
                return this
            }
            var D4 = "_leaflet_events";

            function Z1(t, n, o, s) {
                if (arguments.length === 1) ye(t), delete t[D4];
                else if (n && typeof n == "object")
                    for (var u in n) U5(t, u, n[u], o);
                else if (n = E(n), arguments.length === 2) ye(t, function (S) {
                    return j(n, S) !== -1
                });
                else
                    for (var h = 0, b = n.length; h < b; h++) U5(t, n[h], o, s);
                return this
            }

            function ye(t, n) {
                for (var o in t[D4]) {
                    var s = o.split(/\d/)[0];
                    (!n || n(s)) && U5(t, s, null, null, o)
                }
            }
            var Z5 = {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                wheel: !("onwheel" in window) && "mousewheel"
            };

            function H5(t, n, o, s) {
                var u = n + f(o) + (s ? "_" + f(s) : "");
                if (t[D4] && t[D4][u]) return this;
                var h = function (S) {
                    return o.call(s || t, S || window.event)
                },
                    b = h;
                !t1.touchNative && t1.pointer && n.indexOf("touch") === 0 ? h = B9(t, n, h) : t1.touch && n === "dblclick" ? h = W9(t, h) : "addEventListener" in t ? n === "touchstart" || n === "touchmove" || n === "wheel" || n === "mousewheel" ? t.addEventListener(Z5[n] || n, h, t1.passiveEvents ? {
                    passive: !1
                } : !1) : n === "mouseenter" || n === "mouseleave" ? (h = function (S) {
                    S = S || window.event, j5(t, S) && b(S)
                }, t.addEventListener(Z5[n], h, !1)) : t.addEventListener(n, b, !1) : t.attachEvent("on" + n, h), t[D4] = t[D4] || {}, t[D4][u] = h
            }

            function U5(t, n, o, s, u) {
                u = u || n + f(o) + (s ? "_" + f(s) : "");
                var h = t[D4] && t[D4][u];
                if (!h) return this;
                !t1.touchNative && t1.pointer && n.indexOf("touch") === 0 ? G9(t, n, h) : t1.touch && n === "dblclick" ? K9(t, h) : "removeEventListener" in t ? t.removeEventListener(Z5[n] || n, h, !1) : t.detachEvent("on" + n, h), t[D4][u] = null
            }

            function x2(t) {
                return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, this
            }

            function $5(t) {
                return H5(t, "wheel", x2), this
            }

            function s3(t) {
                return _1(t, "mousedown touchstart dblclick contextmenu", x2), t._leaflet_disable_click = !0, this
            }

            function t4(t) {
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
            }

            function b2(t) {
                return t4(t), x2(t), this
            }

            function _e(t) {
                if (t.composedPath) return t.composedPath();
                for (var n = [], o = t.target; o;) n.push(o), o = o.parentNode;
                return n
            }

            function ve(t, n) {
                if (!n) return new k(t.clientX, t.clientY);
                var o = z5(n),
                    s = o.boundingClientRect;
                return new k((t.clientX - s.left) / o.x - n.clientLeft, (t.clientY - s.top) / o.y - n.clientTop)
            }
            var J9 = t1.linux && t1.chrome ? window.devicePixelRatio : t1.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;

            function xe(t) {
                return t1.edge ? t.wheelDeltaY / 2 : t.deltaY && t.deltaMode === 0 ? -t.deltaY / J9 : t.deltaY && t.deltaMode === 1 ? -t.deltaY * 20 : t.deltaY && t.deltaMode === 2 ? -t.deltaY * 60 : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? -t.detail * 20 : t.detail ? t.detail / -32765 * 60 : 0
            }

            function j5(t, n) {
                var o = n.relatedTarget;
                if (!o) return !0;
                try {
                    for (; o && o !== t;) o = o.parentNode
                } catch {
                    return !1
                }
                return o !== t
            }
            var Y9 = {
                __proto__: null,
                on: _1,
                off: Z1,
                stopPropagation: x2,
                disableScrollPropagation: $5,
                disableClickPropagation: s3,
                preventDefault: t4,
                stop: b2,
                getPropagationPath: _e,
                getMousePosition: ve,
                getWheelDelta: xe,
                isExternalTarget: j5,
                addListener: _1,
                removeListener: Z1
            },
                be = Y.extend({
                    run: function (t, n, o, s) {
                        this.stop(), this._el = t, this._inProgress = !0, this._duration = o || .25, this._easeOutPower = 1 / Math.max(s || .5, .2), this._startPos = v2(t), this._offset = n.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
                    },
                    stop: function () {
                        this._inProgress && (this._step(!0), this._complete())
                    },
                    _animate: function () {
                        this._animId = v1(this._animate, this), this._step()
                    },
                    _step: function (t) {
                        var n = +new Date - this._startTime,
                            o = this._duration * 1e3;
                        n < o ? this._runFrame(this._easeOut(n / o), t) : (this._runFrame(1), this._complete())
                    },
                    _runFrame: function (t, n) {
                        var o = this._startPos.add(this._offset.multiplyBy(t));
                        n && o._round(), V1(this._el, o), this.fire("step")
                    },
                    _complete: function () {
                        T1(this._animId), this._inProgress = !1, this.fire("end")
                    },
                    _easeOut: function (t) {
                        return 1 - Math.pow(1 - t, this._easeOutPower)
                    }
                }),
                S1 = Y.extend({
                    options: {
                        crs: v,
                        center: void 0,
                        zoom: void 0,
                        minZoom: void 0,
                        maxZoom: void 0,
                        layers: [],
                        maxBounds: void 0,
                        renderer: void 0,
                        zoomAnimation: !0,
                        zoomAnimationThreshold: 4,
                        fadeAnimation: !0,
                        markerZoomAnimation: !0,
                        transform3DLimit: 8388608,
                        zoomSnap: 1,
                        zoomDelta: 1,
                        trackResize: !0
                    },
                    initialize: function (t, n) {
                        n = C(this, n), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = d(this._onResize, this), this._initEvents(), n.maxBounds && this.setMaxBounds(n.maxBounds), n.zoom !== void 0 && (this._zoom = this._limitZoom(n.zoom)), n.center && n.zoom !== void 0 && this.setView(u1(n.center), n.zoom, {
                            reset: !0
                        }), this.callInitHooks(), this._zoomAnimated = e3 && t1.any3d && !t1.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), _1(this._proxy, pe, this._catchTransitionEnd, this)), this._addLayers(this.options.layers)
                    },
                    setView: function (t, n, o) {
                        if (n = n === void 0 ? this._zoom : this._limitZoom(n), t = this._limitCenter(u1(t), n, this.options.maxBounds), o = o || {}, this._stop(), this._loaded && !o.reset && o !== !0) {
                            o.animate !== void 0 && (o.zoom = l({
                                animate: o.animate
                            }, o.zoom), o.pan = l({
                                animate: o.animate,
                                duration: o.duration
                            }, o.pan));
                            var s = this._zoom !== n ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, n, o.zoom) : this._tryAnimatedPan(t, o.pan);
                            if (s) return clearTimeout(this._sizeTimer), this
                        }
                        return this._resetView(t, n, o.pan && o.pan.noMoveStart), this
                    },
                    setZoom: function (t, n) {
                        return this._loaded ? this.setView(this.getCenter(), t, {
                            zoom: n
                        }) : (this._zoom = t, this)
                    },
                    zoomIn: function (t, n) {
                        return t = t || (t1.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, n)
                    },
                    zoomOut: function (t, n) {
                        return t = t || (t1.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, n)
                    },
                    setZoomAround: function (t, n, o) {
                        var s = this.getZoomScale(n),
                            u = this.getSize().divideBy(2),
                            h = t instanceof k ? t : this.latLngToContainerPoint(t),
                            b = h.subtract(u).multiplyBy(1 - 1 / s),
                            S = this.containerPointToLatLng(u.add(b));
                        return this.setView(S, n, {
                            zoom: o
                        })
                    },
                    _getBoundsCenterZoom: function (t, n) {
                        n = n || {}, t = t.getBounds ? t.getBounds() : p1(t);
                        var o = J(n.paddingTopLeft || n.padding || [0, 0]),
                            s = J(n.paddingBottomRight || n.padding || [0, 0]),
                            u = this.getBoundsZoom(t, !1, o.add(s));
                        if (u = typeof n.maxZoom == "number" ? Math.min(n.maxZoom, u) : u, u === 1 / 0) return {
                            center: t.getCenter(),
                            zoom: u
                        };
                        var h = s.subtract(o).divideBy(2),
                            b = this.project(t.getSouthWest(), u),
                            S = this.project(t.getNorthEast(), u),
                            T = this.unproject(b.add(S).divideBy(2).add(h), u);
                        return {
                            center: T,
                            zoom: u
                        }
                    },
                    fitBounds: function (t, n) {
                        if (t = p1(t), !t.isValid()) throw new Error("Bounds are not valid.");
                        var o = this._getBoundsCenterZoom(t, n);
                        return this.setView(o.center, o.zoom, n)
                    },
                    fitWorld: function (t) {
                        return this.fitBounds([
                            [-90, -180],
                            [90, 180]
                        ], t)
                    },
                    panTo: function (t, n) {
                        return this.setView(t, this._zoom, {
                            pan: n
                        })
                    },
                    panBy: function (t, n) {
                        if (t = J(t).round(), n = n || {}, !t.x && !t.y) return this.fire("moveend");
                        if (n.animate !== !0 && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
                        if (this._panAnim || (this._panAnim = new be, this._panAnim.on({
                            step: this._onPanTransitionStep,
                            end: this._onPanTransitionEnd
                        }, this)), n.noMoveStart || this.fire("movestart"), n.animate !== !1) {
                            x1(this._mapPane, "leaflet-pan-anim");
                            var o = this._getMapPanePos().subtract(t).round();
                            this._panAnim.run(this._mapPane, o, n.duration || .25, n.easeLinearity)
                        } else this._rawPanBy(t), this.fire("move").fire("moveend");
                        return this
                    },
                    flyTo: function (t, n, o) {
                        if (o = o || {}, o.animate === !1 || !t1.any3d) return this.setView(t, n, o);
                        this._stop();
                        var s = this.project(this.getCenter()),
                            u = this.project(t),
                            h = this.getSize(),
                            b = this._zoom;
                        t = u1(t), n = n === void 0 ? b : n;
                        var S = Math.max(h.x, h.y),
                            T = S * this.getZoomScale(b, n),
                            N = u.distanceTo(s) || 1,
                            q = 1.42,
                            c1 = q * q;

                        function P1(q1) {
                            var Q3 = q1 ? -1 : 1,
                                G8 = q1 ? T : S,
                                z8 = T * T - S * S + Q3 * c1 * c1 * N * N,
                                Z8 = 2 * G8 * c1 * N,
                                nt = z8 / Z8,
                                e6 = Math.sqrt(nt * nt + 1) - nt,
                                H8 = e6 < 1e-9 ? -18 : Math.log(e6);
                            return H8
                        }

                        function u4(q1) {
                            return (Math.exp(q1) - Math.exp(-q1)) / 2
                        }

                        function X1(q1) {
                            return (Math.exp(q1) + Math.exp(-q1)) / 2
                        }

                        function S4(q1) {
                            return u4(q1) / X1(q1)
                        }
                        var f4 = P1(0);

                        function z2(q1) {
                            return S * (X1(f4) / X1(f4 + q * q1))
                        }

                        function R8(q1) {
                            return S * (X1(f4) * S4(f4 + q * q1) - u4(f4)) / c1
                        }

                        function D8(q1) {
                            return 1 - Math.pow(1 - q1, 1.5)
                        }
                        var N8 = Date.now(),
                            Qe = (P1(1) - f4) / q,
                            B8 = o.duration ? 1e3 * o.duration : 1e3 * Qe * .8;

                        function t6() {
                            var q1 = (Date.now() - N8) / B8,
                                Q3 = D8(q1) * Qe;
                            q1 <= 1 ? (this._flyToFrame = v1(t6, this), this._move(this.unproject(s.add(u.subtract(s).multiplyBy(R8(Q3) / N)), b), this.getScaleZoom(S / z2(Q3), b), {
                                flyTo: !0
                            })) : this._move(t, n)._moveEnd(!0)
                        }
                        return this._moveStart(!0, o.noMoveStart), t6.call(this), this
                    },
                    flyToBounds: function (t, n) {
                        var o = this._getBoundsCenterZoom(t, n);
                        return this.flyTo(o.center, o.zoom, n)
                    },
                    setMaxBounds: function (t) {
                        return t = p1(t), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), t.isValid() ? (this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this)
                    },
                    setMinZoom: function (t) {
                        var n = this.options.minZoom;
                        return this.options.minZoom = t, this._loaded && n !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
                    },
                    setMaxZoom: function (t) {
                        var n = this.options.maxZoom;
                        return this.options.maxZoom = t, this._loaded && n !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
                    },
                    panInsideBounds: function (t, n) {
                        this._enforcingBounds = !0;
                        var o = this.getCenter(),
                            s = this._limitCenter(o, this._zoom, p1(t));
                        return o.equals(s) || this.panTo(s, n), this._enforcingBounds = !1, this
                    },
                    panInside: function (t, n) {
                        n = n || {};
                        var o = J(n.paddingTopLeft || n.padding || [0, 0]),
                            s = J(n.paddingBottomRight || n.padding || [0, 0]),
                            u = this.project(this.getCenter()),
                            h = this.project(t),
                            b = this.getPixelBounds(),
                            S = b1([b.min.add(o), b.max.subtract(s)]),
                            T = S.getSize();
                        if (!S.contains(h)) {
                            this._enforcingBounds = !0;
                            var N = h.subtract(S.getCenter()),
                                q = S.extend(h).getSize().subtract(T);
                            u.x += N.x < 0 ? -q.x : q.x, u.y += N.y < 0 ? -q.y : q.y, this.panTo(this.unproject(u), n), this._enforcingBounds = !1
                        }
                        return this
                    },
                    invalidateSize: function (t) {
                        if (!this._loaded) return this;
                        t = l({
                            animate: !1,
                            pan: !0
                        }, t === !0 ? {
                            animate: !0
                        } : t);
                        var n = this.getSize();
                        this._sizeChanged = !0, this._lastCenter = null;
                        var o = this.getSize(),
                            s = n.divideBy(2).round(),
                            u = o.divideBy(2).round(),
                            h = s.subtract(u);
                        return !h.x && !h.y ? this : (t.animate && t.pan ? this.panBy(h) : (t.pan && this._rawPanBy(h), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(d(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                            oldSize: n,
                            newSize: o
                        }))
                    },
                    stop: function () {
                        return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop()
                    },
                    locate: function (t) {
                        if (t = this._locateOptions = l({
                            timeout: 1e4,
                            watch: !1
                        }, t), !("geolocation" in navigator)) return this._handleGeolocationError({
                            code: 0,
                            message: "Geolocation not supported."
                        }), this;
                        var n = d(this._handleGeolocationResponse, this),
                            o = d(this._handleGeolocationError, this);
                        return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(n, o, t) : navigator.geolocation.getCurrentPosition(n, o, t), this
                    },
                    stopLocate: function () {
                        return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
                    },
                    _handleGeolocationError: function (t) {
                        if (this._container._leaflet_id) {
                            var n = t.code,
                                o = t.message || (n === 1 ? "permission denied" : n === 2 ? "position unavailable" : "timeout");
                            this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                                code: n,
                                message: "Geolocation error: " + o + "."
                            })
                        }
                    },
                    _handleGeolocationResponse: function (t) {
                        if (this._container._leaflet_id) {
                            var n = t.coords.latitude,
                                o = t.coords.longitude,
                                s = new s1(n, o),
                                u = s.toBounds(t.coords.accuracy * 2),
                                h = this._locateOptions;
                            if (h.setView) {
                                var b = this.getBoundsZoom(u);
                                this.setView(s, h.maxZoom ? Math.min(b, h.maxZoom) : b)
                            }
                            var S = {
                                latlng: s,
                                bounds: u,
                                timestamp: t.timestamp
                            };
                            for (var T in t.coords) typeof t.coords[T] == "number" && (S[T] = t.coords[T]);
                            this.fire("locationfound", S)
                        }
                    },
                    addHandler: function (t, n) {
                        if (!n) return this;
                        var o = this[t] = new n(this);
                        return this._handlers.push(o), this.options[t] && o.enable(), this
                    },
                    remove: function () {
                        if (this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
                        try {
                            delete this._container._leaflet_id, delete this._containerId
                        } catch {
                            this._container._leaflet_id = void 0, this._containerId = void 0
                        }
                        this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), j1(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (T1(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
                        var t;
                        for (t in this._layers) this._layers[t].remove();
                        for (t in this._panes) j1(this._panes[t]);
                        return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this
                    },
                    createPane: function (t, n) {
                        var o = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""),
                            s = I1("div", o, n || this._mapPane);
                        return t && (this._panes[t] = s), s
                    },
                    getCenter: function () {
                        return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint())
                    },
                    getZoom: function () {
                        return this._zoom
                    },
                    getBounds: function () {
                        var t = this.getPixelBounds(),
                            n = this.unproject(t.getBottomLeft()),
                            o = this.unproject(t.getTopRight());
                        return new A1(n, o)
                    },
                    getMinZoom: function () {
                        return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom
                    },
                    getMaxZoom: function () {
                        return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
                    },
                    getBoundsZoom: function (t, n, o) {
                        t = p1(t), o = J(o || [0, 0]);
                        var s = this.getZoom() || 0,
                            u = this.getMinZoom(),
                            h = this.getMaxZoom(),
                            b = t.getNorthWest(),
                            S = t.getSouthEast(),
                            T = this.getSize().subtract(o),
                            N = b1(this.project(S, s), this.project(b, s)).getSize(),
                            q = t1.any3d ? this.options.zoomSnap : 1,
                            c1 = T.x / N.x,
                            P1 = T.y / N.y,
                            u4 = n ? Math.max(c1, P1) : Math.min(c1, P1);
                        return s = this.getScaleZoom(u4, s), q && (s = Math.round(s / (q / 100)) * (q / 100), s = n ? Math.ceil(s / q) * q : Math.floor(s / q) * q), Math.max(u, Math.min(h, s))
                    },
                    getSize: function () {
                        return (!this._size || this._sizeChanged) && (this._size = new k(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone()
                    },
                    getPixelBounds: function (t, n) {
                        var o = this._getTopLeftPoint(t, n);
                        return new y1(o, o.add(this.getSize()))
                    },
                    getPixelOrigin: function () {
                        return this._checkIfLoaded(), this._pixelOrigin
                    },
                    getPixelWorldBounds: function (t) {
                        return this.options.crs.getProjectedBounds(t === void 0 ? this.getZoom() : t)
                    },
                    getPane: function (t) {
                        return typeof t == "string" ? this._panes[t] : t
                    },
                    getPanes: function () {
                        return this._panes
                    },
                    getContainer: function () {
                        return this._container
                    },
                    getZoomScale: function (t, n) {
                        var o = this.options.crs;
                        return n = n === void 0 ? this._zoom : n, o.scale(t) / o.scale(n)
                    },
                    getScaleZoom: function (t, n) {
                        var o = this.options.crs;
                        n = n === void 0 ? this._zoom : n;
                        var s = o.zoom(t * o.scale(n));
                        return isNaN(s) ? 1 / 0 : s
                    },
                    project: function (t, n) {
                        return n = n === void 0 ? this._zoom : n, this.options.crs.latLngToPoint(u1(t), n)
                    },
                    unproject: function (t, n) {
                        return n = n === void 0 ? this._zoom : n, this.options.crs.pointToLatLng(J(t), n)
                    },
                    layerPointToLatLng: function (t) {
                        var n = J(t).add(this.getPixelOrigin());
                        return this.unproject(n)
                    },
                    latLngToLayerPoint: function (t) {
                        var n = this.project(u1(t))._round();
                        return n._subtract(this.getPixelOrigin())
                    },
                    wrapLatLng: function (t) {
                        return this.options.crs.wrapLatLng(u1(t))
                    },
                    wrapLatLngBounds: function (t) {
                        return this.options.crs.wrapLatLngBounds(p1(t))
                    },
                    distance: function (t, n) {
                        return this.options.crs.distance(u1(t), u1(n))
                    },
                    containerPointToLayerPoint: function (t) {
                        return J(t).subtract(this._getMapPanePos())
                    },
                    layerPointToContainerPoint: function (t) {
                        return J(t).add(this._getMapPanePos())
                    },
                    containerPointToLatLng: function (t) {
                        var n = this.containerPointToLayerPoint(J(t));
                        return this.layerPointToLatLng(n)
                    },
                    latLngToContainerPoint: function (t) {
                        return this.layerPointToContainerPoint(this.latLngToLayerPoint(u1(t)))
                    },
                    mouseEventToContainerPoint: function (t) {
                        return ve(t, this._container)
                    },
                    mouseEventToLayerPoint: function (t) {
                        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
                    },
                    mouseEventToLatLng: function (t) {
                        return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
                    },
                    _initContainer: function (t) {
                        var n = this._container = me(t);
                        if (n) {
                            if (n._leaflet_id) throw new Error("Map container is already initialized.")
                        } else throw new Error("Map container not found.");
                        _1(n, "scroll", this._onScroll, this), this._containerId = f(n)
                    },
                    _initLayout: function () {
                        var t = this._container;
                        this._fadeAnimated = this.options.fadeAnimation && t1.any3d, x1(t, "leaflet-container" + (t1.touch ? " leaflet-touch" : "") + (t1.retina ? " leaflet-retina" : "") + (t1.ielt9 ? " leaflet-oldie" : "") + (t1.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
                        var n = n3(t, "position");
                        n !== "absolute" && n !== "relative" && n !== "fixed" && n !== "sticky" && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
                    },
                    _initPanes: function () {
                        var t = this._panes = {};
                        this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), V1(this._mapPane, new k(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (x1(t.markerPane, "leaflet-zoom-hide"), x1(t.shadowPane, "leaflet-zoom-hide"))
                    },
                    _resetView: function (t, n, o) {
                        V1(this._mapPane, new k(0, 0));
                        var s = !this._loaded;
                        this._loaded = !0, n = this._limitZoom(n), this.fire("viewprereset");
                        var u = this._zoom !== n;
                        this._moveStart(u, o)._move(t, n)._moveEnd(u), this.fire("viewreset"), s && this.fire("load")
                    },
                    _moveStart: function (t, n) {
                        return t && this.fire("zoomstart"), n || this.fire("movestart"), this
                    },
                    _move: function (t, n, o, s) {
                        n === void 0 && (n = this._zoom);
                        var u = this._zoom !== n;
                        return this._zoom = n, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), s ? o && o.pinch && this.fire("zoom", o) : ((u || o && o.pinch) && this.fire("zoom", o), this.fire("move", o)), this
                    },
                    _moveEnd: function (t) {
                        return t && this.fire("zoomend"), this.fire("moveend")
                    },
                    _stop: function () {
                        return T1(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
                    },
                    _rawPanBy: function (t) {
                        V1(this._mapPane, this._getMapPanePos().subtract(t))
                    },
                    _getZoomSpan: function () {
                        return this.getMaxZoom() - this.getMinZoom()
                    },
                    _panInsideMaxBounds: function () {
                        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
                    },
                    _checkIfLoaded: function () {
                        if (!this._loaded) throw new Error("Set map center and zoom first.")
                    },
                    _initEvents: function (t) {
                        this._targets = {}, this._targets[f(this._container)] = this;
                        var n = t ? Z1 : _1;
                        n(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && n(window, "resize", this._onResize, this), t1.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
                    },
                    _onResize: function () {
                        T1(this._resizeRequest), this._resizeRequest = v1(function () {
                            this.invalidateSize({
                                debounceMoveend: !0
                            })
                        }, this)
                    },
                    _onScroll: function () {
                        this._container.scrollTop = 0, this._container.scrollLeft = 0
                    },
                    _onMoveEnd: function () {
                        var t = this._getMapPanePos();
                        Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
                    },
                    _findEventTargets: function (t, n) {
                        for (var o = [], s, u = n === "mouseout" || n === "mouseover", h = t.target || t.srcElement, b = !1; h;) {
                            if (s = this._targets[f(h)], s && (n === "click" || n === "preclick") && this._draggableMoved(s)) {
                                b = !0;
                                break
                            }
                            if (s && s.listens(n, !0) && (u && !j5(h, t) || (o.push(s), u)) || h === this._container) break;
                            h = h.parentNode
                        }
                        return !o.length && !b && !u && this.listens(n, !0) && (o = [this]), o
                    },
                    _isClickDisabled: function (t) {
                        for (; t && t !== this._container;) {
                            if (t._leaflet_disable_click) return !0;
                            t = t.parentNode
                        }
                    },
                    _handleDOMEvent: function (t) {
                        var n = t.target || t.srcElement;
                        if (!(!this._loaded || n._leaflet_disable_events || t.type === "click" && this._isClickDisabled(n))) {
                            var o = t.type;
                            o === "mousedown" && G5(n), this._fireDOMEvent(t, o)
                        }
                    },
                    _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
                    _fireDOMEvent: function (t, n, o) {
                        if (t.type === "click") {
                            var s = l({}, t);
                            s.type = "preclick", this._fireDOMEvent(s, s.type, o)
                        }
                        var u = this._findEventTargets(t, n);
                        if (o) {
                            for (var h = [], b = 0; b < o.length; b++) o[b].listens(n, !0) && h.push(o[b]);
                            u = h.concat(u)
                        }
                        if (u.length) {
                            n === "contextmenu" && t4(t);
                            var S = u[0],
                                T = {
                                    originalEvent: t
                                };
                            if (t.type !== "keypress" && t.type !== "keydown" && t.type !== "keyup") {
                                var N = S.getLatLng && (!S._radius || S._radius <= 10);
                                T.containerPoint = N ? this.latLngToContainerPoint(S.getLatLng()) : this.mouseEventToContainerPoint(t), T.layerPoint = this.containerPointToLayerPoint(T.containerPoint), T.latlng = N ? S.getLatLng() : this.layerPointToLatLng(T.layerPoint)
                            }
                            for (b = 0; b < u.length; b++)
                                if (u[b].fire(n, T, !0), T.originalEvent._stopped || u[b].options.bubblingMouseEvents === !1 && j(this._mouseEvents, n) !== -1) return
                        }
                    },
                    _draggableMoved: function (t) {
                        return t = t.dragging && t.dragging.enabled() ? t : this, t.dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
                    },
                    _clearHandlers: function () {
                        for (var t = 0, n = this._handlers.length; t < n; t++) this._handlers[t].disable()
                    },
                    whenReady: function (t, n) {
                        return this._loaded ? t.call(n || this, {
                            target: this
                        }) : this.on("load", t, n), this
                    },
                    _getMapPanePos: function () {
                        return v2(this._mapPane) || new k(0, 0)
                    },
                    _moved: function () {
                        var t = this._getMapPanePos();
                        return t && !t.equals([0, 0])
                    },
                    _getTopLeftPoint: function (t, n) {
                        var o = t && n !== void 0 ? this._getNewPixelOrigin(t, n) : this.getPixelOrigin();
                        return o.subtract(this._getMapPanePos())
                    },
                    _getNewPixelOrigin: function (t, n) {
                        var o = this.getSize()._divideBy(2);
                        return this.project(t, n)._subtract(o)._add(this._getMapPanePos())._round()
                    },
                    _latLngToNewLayerPoint: function (t, n, o) {
                        var s = this._getNewPixelOrigin(o, n);
                        return this.project(t, n)._subtract(s)
                    },
                    _latLngBoundsToNewLayerBounds: function (t, n, o) {
                        var s = this._getNewPixelOrigin(o, n);
                        return b1([this.project(t.getSouthWest(), n)._subtract(s), this.project(t.getNorthWest(), n)._subtract(s), this.project(t.getSouthEast(), n)._subtract(s), this.project(t.getNorthEast(), n)._subtract(s)])
                    },
                    _getCenterLayerPoint: function () {
                        return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
                    },
                    _getCenterOffset: function (t) {
                        return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
                    },
                    _limitCenter: function (t, n, o) {
                        if (!o) return t;
                        var s = this.project(t, n),
                            u = this.getSize().divideBy(2),
                            h = new y1(s.subtract(u), s.add(u)),
                            b = this._getBoundsOffset(h, o, n);
                        return Math.abs(b.x) <= 1 && Math.abs(b.y) <= 1 ? t : this.unproject(s.add(b), n)
                    },
                    _limitOffset: function (t, n) {
                        if (!n) return t;
                        var o = this.getPixelBounds(),
                            s = new y1(o.min.add(t), o.max.add(t));
                        return t.add(this._getBoundsOffset(s, n))
                    },
                    _getBoundsOffset: function (t, n, o) {
                        var s = b1(this.project(n.getNorthEast(), o), this.project(n.getSouthWest(), o)),
                            u = s.min.subtract(t.min),
                            h = s.max.subtract(t.max),
                            b = this._rebound(u.x, -h.x),
                            S = this._rebound(u.y, -h.y);
                        return new k(b, S)
                    },
                    _rebound: function (t, n) {
                        return t + n > 0 ? Math.round(t - n) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(n))
                    },
                    _limitZoom: function (t) {
                        var n = this.getMinZoom(),
                            o = this.getMaxZoom(),
                            s = t1.any3d ? this.options.zoomSnap : 1;
                        return s && (t = Math.round(t / s) * s), Math.max(n, Math.min(o, t))
                    },
                    _onPanTransitionStep: function () {
                        this.fire("move")
                    },
                    _onPanTransitionEnd: function () {
                        W1(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
                    },
                    _tryAnimatedPan: function (t, n) {
                        var o = this._getCenterOffset(t)._trunc();
                        return (n && n.animate) !== !0 && !this.getSize().contains(o) ? !1 : (this.panBy(o, n), !0)
                    },
                    _createAnimProxy: function () {
                        var t = this._proxy = I1("div", "leaflet-proxy leaflet-zoom-animated");
                        this._panes.mapPane.appendChild(t), this.on("zoomanim", function (n) {
                            var o = A5,
                                s = this._proxy.style[o];
                            _2(this._proxy, this.project(n.center, n.zoom), this.getZoomScale(n.zoom, 1)), s === this._proxy.style[o] && this._animatingZoom && this._onZoomTransitionEnd()
                        }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this)
                    },
                    _destroyAnimProxy: function () {
                        j1(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy
                    },
                    _animMoveEnd: function () {
                        var t = this.getCenter(),
                            n = this.getZoom();
                        _2(this._proxy, this.project(t, n), this.getZoomScale(n, 1))
                    },
                    _catchTransitionEnd: function (t) {
                        this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
                    },
                    _nothingToAnimate: function () {
                        return !this._container.getElementsByClassName("leaflet-zoom-animated").length
                    },
                    _tryAnimatedZoom: function (t, n, o) {
                        if (this._animatingZoom) return !0;
                        if (o = o || {}, !this._zoomAnimated || o.animate === !1 || this._nothingToAnimate() || Math.abs(n - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                        var s = this.getZoomScale(n),
                            u = this._getCenterOffset(t)._divideBy(1 - 1 / s);
                        return o.animate !== !0 && !this.getSize().contains(u) ? !1 : (v1(function () {
                            this._moveStart(!0, o.noMoveStart || !1)._animateZoom(t, n, !0)
                        }, this), !0)
                    },
                    _animateZoom: function (t, n, o, s) {
                        this._mapPane && (o && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = n, x1(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
                            center: t,
                            zoom: n,
                            noUpdate: s
                        }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(d(this._onZoomTransitionEnd, this), 250))
                    },
                    _onZoomTransitionEnd: function () {
                        this._animatingZoom && (this._mapPane && W1(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0))
                    }
                });

            function X9(t, n) {
                return new S1(t, n)
            }
            var C4 = Y1.extend({
                options: {
                    position: "topright"
                },
                initialize: function (t) {
                    C(this, t)
                },
                getPosition: function () {
                    return this.options.position
                },
                setPosition: function (t) {
                    var n = this._map;
                    return n && n.removeControl(this), this.options.position = t, n && n.addControl(this), this
                },
                getContainer: function () {
                    return this._container
                },
                addTo: function (t) {
                    this.remove(), this._map = t;
                    var n = this._container = this.onAdd(t),
                        o = this.getPosition(),
                        s = t._controlCorners[o];
                    return x1(n, "leaflet-control"), o.indexOf("bottom") !== -1 ? s.insertBefore(n, s.firstChild) : s.appendChild(n), this._map.on("unload", this.remove, this), this
                },
                remove: function () {
                    return this._map ? (j1(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this
                },
                _refocusOnMap: function (t) {
                    this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus()
                }
            }),
                a3 = function (t) {
                    return new C4(t)
                };
            S1.include({
                addControl: function (t) {
                    return t.addTo(this), this
                },
                removeControl: function (t) {
                    return t.remove(), this
                },
                _initControlPos: function () {
                    var t = this._controlCorners = {},
                        n = "leaflet-",
                        o = this._controlContainer = I1("div", n + "control-container", this._container);

                    function s(u, h) {
                        var b = n + u + " " + n + h;
                        t[u + h] = I1("div", b, o)
                    }
                    s("top", "left"), s("top", "right"), s("bottom", "left"), s("bottom", "right")
                },
                _clearControlPos: function () {
                    for (var t in this._controlCorners) j1(this._controlCorners[t]);
                    j1(this._controlContainer), delete this._controlCorners, delete this._controlContainer
                }
            });
            var we = C4.extend({
                options: {
                    collapsed: !0,
                    position: "topright",
                    autoZIndex: !0,
                    hideSingleBase: !1,
                    sortLayers: !1,
                    sortFunction: function (t, n, o, s) {
                        return o < s ? -1 : s < o ? 1 : 0
                    }
                },
                initialize: function (t, n, o) {
                    C(this, o), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1;
                    for (var s in t) this._addLayer(t[s], s);
                    for (s in n) this._addLayer(n[s], s, !0)
                },
                onAdd: function (t) {
                    this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
                    for (var n = 0; n < this._layers.length; n++) this._layers[n].layer.on("add remove", this._onLayerChange, this);
                    return this._container
                },
                addTo: function (t) {
                    return C4.prototype.addTo.call(this, t), this._expandIfNotCollapsed()
                },
                onRemove: function () {
                    this._map.off("zoomend", this._checkDisabledLayers, this);
                    for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this)
                },
                addBaseLayer: function (t, n) {
                    return this._addLayer(t, n), this._map ? this._update() : this
                },
                addOverlay: function (t, n) {
                    return this._addLayer(t, n, !0), this._map ? this._update() : this
                },
                removeLayer: function (t) {
                    t.off("add remove", this._onLayerChange, this);
                    var n = this._getLayer(f(t));
                    return n && this._layers.splice(this._layers.indexOf(n), 1), this._map ? this._update() : this
                },
                expand: function () {
                    x1(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
                    var t = this._map.getSize().y - (this._container.offsetTop + 50);
                    return t < this._section.clientHeight ? (x1(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : W1(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this
                },
                collapse: function () {
                    return W1(this._container, "leaflet-control-layers-expanded"), this
                },
                _initLayout: function () {
                    var t = "leaflet-control-layers",
                        n = this._container = I1("div", t),
                        o = this.options.collapsed;
                    n.setAttribute("aria-haspopup", !0), s3(n), $5(n);
                    var s = this._section = I1("section", t + "-list");
                    o && (this._map.on("click", this.collapse, this), _1(n, {
                        mouseenter: this._expandSafely,
                        mouseleave: this.collapse
                    }, this));
                    var u = this._layersLink = I1("a", t + "-toggle", n);
                    u.href = "#", u.title = "Layers", u.setAttribute("role", "button"), _1(u, {
                        keydown: function (h) {
                            h.keyCode === 13 && this._expandSafely()
                        },
                        click: function (h) {
                            t4(h), this._expandSafely()
                        }
                    }, this), o || this.expand(), this._baseLayersList = I1("div", t + "-base", s), this._separator = I1("div", t + "-separator", s), this._overlaysList = I1("div", t + "-overlays", s), n.appendChild(s)
                },
                _getLayer: function (t) {
                    for (var n = 0; n < this._layers.length; n++)
                        if (this._layers[n] && f(this._layers[n].layer) === t) return this._layers[n]
                },
                _addLayer: function (t, n, o) {
                    this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
                        layer: t,
                        name: n,
                        overlay: o
                    }), this.options.sortLayers && this._layers.sort(d(function (s, u) {
                        return this.options.sortFunction(s.layer, u.layer, s.name, u.name)
                    }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed()
                },
                _update: function () {
                    if (!this._container) return this;
                    N3(this._baseLayersList), N3(this._overlaysList), this._layerControlInputs = [];
                    var t, n, o, s, u = 0;
                    for (o = 0; o < this._layers.length; o++) s = this._layers[o], this._addItem(s), n = n || s.overlay, t = t || !s.overlay, u += s.overlay ? 0 : 1;
                    return this.options.hideSingleBase && (t = t && u > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = n && t ? "" : "none", this
                },
                _onLayerChange: function (t) {
                    this._handlingClick || this._update();
                    var n = this._getLayer(f(t.target)),
                        o = n.overlay ? t.type === "add" ? "overlayadd" : "overlayremove" : t.type === "add" ? "baselayerchange" : null;
                    o && this._map.fire(o, n)
                },
                _createRadioElement: function (t, n) {
                    var o = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (n ? ' checked="checked"' : "") + "/>",
                        s = document.createElement("div");
                    return s.innerHTML = o, s.firstChild
                },
                _addItem: function (t) {
                    var n = document.createElement("label"),
                        o = this._map.hasLayer(t.layer),
                        s;
                    t.overlay ? (s = document.createElement("input"), s.type = "checkbox", s.className = "leaflet-control-layers-selector", s.defaultChecked = o) : s = this._createRadioElement("leaflet-base-layers_" + f(this), o), this._layerControlInputs.push(s), s.layerId = f(t.layer), _1(s, "click", this._onInputClick, this);
                    var u = document.createElement("span");
                    u.innerHTML = " " + t.name;
                    var h = document.createElement("span");
                    n.appendChild(h), h.appendChild(s), h.appendChild(u);
                    var b = t.overlay ? this._overlaysList : this._baseLayersList;
                    return b.appendChild(n), this._checkDisabledLayers(), n
                },
                _onInputClick: function () {
                    if (!this._preventClick) {
                        var t = this._layerControlInputs,
                            n, o, s = [],
                            u = [];
                        this._handlingClick = !0;
                        for (var h = t.length - 1; h >= 0; h--) n = t[h], o = this._getLayer(n.layerId).layer, n.checked ? s.push(o) : n.checked || u.push(o);
                        for (h = 0; h < u.length; h++) this._map.hasLayer(u[h]) && this._map.removeLayer(u[h]);
                        for (h = 0; h < s.length; h++) this._map.hasLayer(s[h]) || this._map.addLayer(s[h]);
                        this._handlingClick = !1, this._refocusOnMap()
                    }
                },
                _checkDisabledLayers: function () {
                    for (var t = this._layerControlInputs, n, o, s = this._map.getZoom(), u = t.length - 1; u >= 0; u--) n = t[u], o = this._getLayer(n.layerId).layer, n.disabled = o.options.minZoom !== void 0 && s < o.options.minZoom || o.options.maxZoom !== void 0 && s > o.options.maxZoom
                },
                _expandIfNotCollapsed: function () {
                    return this._map && !this.options.collapsed && this.expand(), this
                },
                _expandSafely: function () {
                    var t = this._section;
                    this._preventClick = !0, _1(t, "click", t4), this.expand();
                    var n = this;
                    setTimeout(function () {
                        Z1(t, "click", t4), n._preventClick = !1
                    })
                }
            }),
                Q9 = function (t, n, o) {
                    return new we(t, n, o)
                },
                W5 = C4.extend({
                    options: {
                        position: "topleft",
                        zoomInText: '<span aria-hidden="true">+</span>',
                        zoomInTitle: "Zoom in",
                        zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
                        zoomOutTitle: "Zoom out"
                    },
                    onAdd: function (t) {
                        var n = "leaflet-control-zoom",
                            o = I1("div", n + " leaflet-bar"),
                            s = this.options;
                        return this._zoomInButton = this._createButton(s.zoomInText, s.zoomInTitle, n + "-in", o, this._zoomIn), this._zoomOutButton = this._createButton(s.zoomOutText, s.zoomOutTitle, n + "-out", o, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), o
                    },
                    onRemove: function (t) {
                        t.off("zoomend zoomlevelschange", this._updateDisabled, this)
                    },
                    disable: function () {
                        return this._disabled = !0, this._updateDisabled(), this
                    },
                    enable: function () {
                        return this._disabled = !1, this._updateDisabled(), this
                    },
                    _zoomIn: function (t) {
                        !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
                    },
                    _zoomOut: function (t) {
                        !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
                    },
                    _createButton: function (t, n, o, s, u) {
                        var h = I1("a", o, s);
                        return h.innerHTML = t, h.href = "#", h.title = n, h.setAttribute("role", "button"), h.setAttribute("aria-label", n), s3(h), _1(h, "click", b2), _1(h, "click", u, this), _1(h, "click", this._refocusOnMap, this), h
                    },
                    _updateDisabled: function () {
                        var t = this._map,
                            n = "leaflet-disabled";
                        W1(this._zoomInButton, n), W1(this._zoomOutButton, n), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || t._zoom === t.getMinZoom()) && (x1(this._zoomOutButton, n), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || t._zoom === t.getMaxZoom()) && (x1(this._zoomInButton, n), this._zoomInButton.setAttribute("aria-disabled", "true"))
                    }
                });
            S1.mergeOptions({
                zoomControl: !0
            }), S1.addInitHook(function () {
                this.options.zoomControl && (this.zoomControl = new W5, this.addControl(this.zoomControl))
            });
            var t8 = function (t) {
                return new W5(t)
            },
                Pe = C4.extend({
                    options: {
                        position: "bottomleft",
                        maxWidth: 100,
                        metric: !0,
                        imperial: !0
                    },
                    onAdd: function (t) {
                        var n = "leaflet-control-scale",
                            o = I1("div", n),
                            s = this.options;
                        return this._addScales(s, n + "-line", o), t.on(s.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), o
                    },
                    onRemove: function (t) {
                        t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
                    },
                    _addScales: function (t, n, o) {
                        t.metric && (this._mScale = I1("div", n, o)), t.imperial && (this._iScale = I1("div", n, o))
                    },
                    _update: function () {
                        var t = this._map,
                            n = t.getSize().y / 2,
                            o = t.distance(t.containerPointToLatLng([0, n]), t.containerPointToLatLng([this.options.maxWidth, n]));
                        this._updateScales(o)
                    },
                    _updateScales: function (t) {
                        this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t)
                    },
                    _updateMetric: function (t) {
                        var n = this._getRoundNum(t),
                            o = n < 1e3 ? n + " m" : n / 1e3 + " km";
                        this._updateScale(this._mScale, o, n / t)
                    },
                    _updateImperial: function (t) {
                        var n = t * 3.2808399,
                            o, s, u;
                        n > 5280 ? (o = n / 5280, s = this._getRoundNum(o), this._updateScale(this._iScale, s + " mi", s / o)) : (u = this._getRoundNum(n), this._updateScale(this._iScale, u + " ft", u / n))
                    },
                    _updateScale: function (t, n, o) {
                        t.style.width = Math.round(this.options.maxWidth * o) + "px", t.innerHTML = n
                    },
                    _getRoundNum: function (t) {
                        var n = Math.pow(10, (Math.floor(t) + "").length - 1),
                            o = t / n;
                        return o = o >= 10 ? 10 : o >= 5 ? 5 : o >= 3 ? 3 : o >= 2 ? 2 : 1, n * o
                    }
                }),
                e8 = function (t) {
                    return new Pe(t)
                },
                n8 = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',
                K5 = C4.extend({
                    options: {
                        position: "bottomright",
                        prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (t1.inlineSvg ? n8 + " " : "") + "Leaflet</a>"
                    },
                    initialize: function (t) {
                        C(this, t), this._attributions = {}
                    },
                    onAdd: function (t) {
                        t.attributionControl = this, this._container = I1("div", "leaflet-control-attribution"), s3(this._container);
                        for (var n in t._layers) t._layers[n].getAttribution && this.addAttribution(t._layers[n].getAttribution());
                        return this._update(), t.on("layeradd", this._addAttribution, this), this._container
                    },
                    onRemove: function (t) {
                        t.off("layeradd", this._addAttribution, this)
                    },
                    _addAttribution: function (t) {
                        t.layer.getAttribution && (this.addAttribution(t.layer.getAttribution()), t.layer.once("remove", function () {
                            this.removeAttribution(t.layer.getAttribution())
                        }, this))
                    },
                    setPrefix: function (t) {
                        return this.options.prefix = t, this._update(), this
                    },
                    addAttribution: function (t) {
                        return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this
                    },
                    removeAttribution: function (t) {
                        return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this
                    },
                    _update: function () {
                        if (this._map) {
                            var t = [];
                            for (var n in this._attributions) this._attributions[n] && t.push(n);
                            var o = [];
                            this.options.prefix && o.push(this.options.prefix), t.length && o.push(t.join(", ")), this._container.innerHTML = o.join(' <span aria-hidden="true">|</span> ')
                        }
                    }
                });
            S1.mergeOptions({
                attributionControl: !0
            }), S1.addInitHook(function () {
                this.options.attributionControl && new K5().addTo(this)
            });
            var i8 = function (t) {
                return new K5(t)
            };
            C4.Layers = we, C4.Zoom = W5, C4.Scale = Pe, C4.Attribution = K5, a3.layers = Q9, a3.zoom = t8, a3.scale = e8, a3.attribution = i8;
            var N4 = Y1.extend({
                initialize: function (t) {
                    this._map = t
                },
                enable: function () {
                    return this._enabled ? this : (this._enabled = !0, this.addHooks(), this)
                },
                disable: function () {
                    return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this
                },
                enabled: function () {
                    return !!this._enabled
                }
            });
            N4.addTo = function (t, n) {
                return t.addHandler(n, this), this
            };
            var o8 = {
                Events: M1
            },
                Me = t1.touch ? "touchstart mousedown" : "mousedown",
                a2 = Y.extend({
                    options: {
                        clickTolerance: 3
                    },
                    initialize: function (t, n, o, s) {
                        C(this, s), this._element = t, this._dragStartTarget = n || t, this._preventOutline = o
                    },
                    enable: function () {
                        this._enabled || (_1(this._dragStartTarget, Me, this._onDown, this), this._enabled = !0)
                    },
                    disable: function () {
                        this._enabled && (a2._dragging === this && this.finishDrag(!0), Z1(this._dragStartTarget, Me, this._onDown, this), this._enabled = !1, this._moved = !1)
                    },
                    _onDown: function (t) {
                        if (this._enabled && (this._moved = !1, !F5(this._element, "leaflet-zoom-anim"))) {
                            if (t.touches && t.touches.length !== 1) {
                                a2._dragging === this && this.finishDrag();
                                return
                            }
                            if (!(a2._dragging || t.shiftKey || t.which !== 1 && t.button !== 1 && !t.touches) && (a2._dragging = this, this._preventOutline && G5(this._element), D5(), i3(), !this._moving)) {
                                this.fire("down");
                                var n = t.touches ? t.touches[0] : t,
                                    o = ge(this._element);
                                this._startPoint = new k(n.clientX, n.clientY), this._startPos = v2(this._element), this._parentScale = z5(o);
                                var s = t.type === "mousedown";
                                _1(document, s ? "mousemove" : "touchmove", this._onMove, this), _1(document, s ? "mouseup" : "touchend touchcancel", this._onUp, this)
                            }
                        }
                    },
                    _onMove: function (t) {
                        if (this._enabled) {
                            if (t.touches && t.touches.length > 1) {
                                this._moved = !0;
                                return
                            }
                            var n = t.touches && t.touches.length === 1 ? t.touches[0] : t,
                                o = new k(n.clientX, n.clientY)._subtract(this._startPoint);
                            !o.x && !o.y || Math.abs(o.x) + Math.abs(o.y) < this.options.clickTolerance || (o.x /= this._parentScale.x, o.y /= this._parentScale.y, t4(t), this._moved || (this.fire("dragstart"), this._moved = !0, x1(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), x1(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(o), this._moving = !0, this._lastEvent = t, this._updatePosition())
                        }
                    },
                    _updatePosition: function () {
                        var t = {
                            originalEvent: this._lastEvent
                        };
                        this.fire("predrag", t), V1(this._element, this._newPos), this.fire("drag", t)
                    },
                    _onUp: function () {
                        this._enabled && this.finishDrag()
                    },
                    finishDrag: function (t) {
                        W1(document.body, "leaflet-dragging"), this._lastTarget && (W1(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), Z1(document, "mousemove touchmove", this._onMove, this), Z1(document, "mouseup touchend touchcancel", this._onUp, this), N5(), o3();
                        var n = this._moved && this._moving;
                        this._moving = !1, a2._dragging = !1, n && this.fire("dragend", {
                            noInertia: t,
                            distance: this._newPos.distanceTo(this._startPos)
                        })
                    }
                });

            function Se(t, n, o) {
                var s, u = [1, 4, 2, 8],
                    h, b, S, T, N, q, c1, P1;
                for (h = 0, q = t.length; h < q; h++) t[h]._code = w2(t[h], n);
                for (S = 0; S < 4; S++) {
                    for (c1 = u[S], s = [], h = 0, q = t.length, b = q - 1; h < q; b = h++) T = t[h], N = t[b], T._code & c1 ? N._code & c1 || (P1 = H3(N, T, c1, n, o), P1._code = w2(P1, n), s.push(P1)) : (N._code & c1 && (P1 = H3(N, T, c1, n, o), P1._code = w2(P1, n), s.push(P1)), s.push(T));
                    t = s
                }
                return t
            }

            function Te(t, n) {
                var o, s, u, h, b, S, T, N, q;
                if (!t || t.length === 0) throw new Error("latlngs not passed");
                M4(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
                var c1 = u1([0, 0]),
                    P1 = p1(t),
                    u4 = P1.getNorthWest().distanceTo(P1.getSouthWest()) * P1.getNorthEast().distanceTo(P1.getNorthWest());
                u4 < 1700 && (c1 = V5(t));
                var X1 = t.length,
                    S4 = [];
                for (o = 0; o < X1; o++) {
                    var f4 = u1(t[o]);
                    S4.push(n.project(u1([f4.lat - c1.lat, f4.lng - c1.lng])))
                }
                for (S = T = N = 0, o = 0, s = X1 - 1; o < X1; s = o++) u = S4[o], h = S4[s], b = u.y * h.x - h.y * u.x, T += (u.x + h.x) * b, N += (u.y + h.y) * b, S += b * 3;
                S === 0 ? q = S4[0] : q = [T / S, N / S];
                var z2 = n.unproject(J(q));
                return u1([z2.lat + c1.lat, z2.lng + c1.lng])
            }

            function V5(t) {
                for (var n = 0, o = 0, s = 0, u = 0; u < t.length; u++) {
                    var h = u1(t[u]);
                    n += h.lat, o += h.lng, s++
                }
                return u1([n / s, o / s])
            }
            var r8 = {
                __proto__: null,
                clipPolygon: Se,
                polygonCenter: Te,
                centroid: V5
            };

            function Ee(t, n) {
                if (!n || !t.length) return t.slice();
                var o = n * n;
                return t = l8(t, o), t = a8(t, o), t
            }

            function Le(t, n, o) {
                return Math.sqrt(l3(t, n, o, !0))
            }

            function s8(t, n, o) {
                return l3(t, n, o)
            }

            function a8(t, n) {
                var o = t.length,
                    s = typeof Uint8Array < "u" ? Uint8Array : Array,
                    u = new s(o);
                u[0] = u[o - 1] = 1, q5(t, u, n, 0, o - 1);
                var h, b = [];
                for (h = 0; h < o; h++) u[h] && b.push(t[h]);
                return b
            }

            function q5(t, n, o, s, u) {
                var h = 0,
                    b, S, T;
                for (S = s + 1; S <= u - 1; S++) T = l3(t[S], t[s], t[u], !0), T > h && (b = S, h = T);
                h > o && (n[b] = 1, q5(t, n, o, s, b), q5(t, n, o, b, u))
            }

            function l8(t, n) {
                for (var o = [t[0]], s = 1, u = 0, h = t.length; s < h; s++) u8(t[s], t[u]) > n && (o.push(t[s]), u = s);
                return u < h - 1 && o.push(t[h - 1]), o
            }
            var Ce;

            function Ie(t, n, o, s, u) {
                var h = s ? Ce : w2(t, o),
                    b = w2(n, o),
                    S, T, N;
                for (Ce = b; ;) {
                    if (!(h | b)) return [t, n];
                    if (h & b) return !1;
                    S = h || b, T = H3(t, n, S, o, u), N = w2(T, o), S === h ? (t = T, h = N) : (n = T, b = N)
                }
            }

            function H3(t, n, o, s, u) {
                var h = n.x - t.x,
                    b = n.y - t.y,
                    S = s.min,
                    T = s.max,
                    N, q;
                return o & 8 ? (N = t.x + h * (T.y - t.y) / b, q = T.y) : o & 4 ? (N = t.x + h * (S.y - t.y) / b, q = S.y) : o & 2 ? (N = T.x, q = t.y + b * (T.x - t.x) / h) : o & 1 && (N = S.x, q = t.y + b * (S.x - t.x) / h), new k(N, q, u)
            }

            function w2(t, n) {
                var o = 0;
                return t.x < n.min.x ? o |= 1 : t.x > n.max.x && (o |= 2), t.y < n.min.y ? o |= 4 : t.y > n.max.y && (o |= 8), o
            }

            function u8(t, n) {
                var o = n.x - t.x,
                    s = n.y - t.y;
                return o * o + s * s
            }

            function l3(t, n, o, s) {
                var u = n.x,
                    h = n.y,
                    b = o.x - u,
                    S = o.y - h,
                    T = b * b + S * S,
                    N;
                return T > 0 && (N = ((t.x - u) * b + (t.y - h) * S) / T, N > 1 ? (u = o.x, h = o.y) : N > 0 && (u += b * N, h += S * N)), b = t.x - u, S = t.y - h, s ? b * b + S * S : new k(u, h)
            }

            function M4(t) {
                return !Z(t[0]) || typeof t[0][0] != "object" && typeof t[0][0] < "u"
            }

            function ke(t) {
                return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), M4(t)
            }

            function Ae(t, n) {
                var o, s, u, h, b, S, T, N;
                if (!t || t.length === 0) throw new Error("latlngs not passed");
                M4(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
                var q = u1([0, 0]),
                    c1 = p1(t),
                    P1 = c1.getNorthWest().distanceTo(c1.getSouthWest()) * c1.getNorthEast().distanceTo(c1.getNorthWest());
                P1 < 1700 && (q = V5(t));
                var u4 = t.length,
                    X1 = [];
                for (o = 0; o < u4; o++) {
                    var S4 = u1(t[o]);
                    X1.push(n.project(u1([S4.lat - q.lat, S4.lng - q.lng])))
                }
                for (o = 0, s = 0; o < u4 - 1; o++) s += X1[o].distanceTo(X1[o + 1]) / 2;
                if (s === 0) N = X1[0];
                else
                    for (o = 0, h = 0; o < u4 - 1; o++)
                        if (b = X1[o], S = X1[o + 1], u = b.distanceTo(S), h += u, h > s) {
                            T = (h - s) / u, N = [S.x - T * (S.x - b.x), S.y - T * (S.y - b.y)];
                            break
                        } var f4 = n.unproject(J(N));
                return u1([f4.lat + q.lat, f4.lng + q.lng])
            }
            var c8 = {
                __proto__: null,
                simplify: Ee,
                pointToSegmentDistance: Le,
                closestPointOnSegment: s8,
                clipSegment: Ie,
                _getEdgeIntersection: H3,
                _getBitCode: w2,
                _sqClosestPointOnSegment: l3,
                isFlat: M4,
                _flat: ke,
                polylineCenter: Ae
            },
                J5 = {
                    project: function (t) {
                        return new k(t.lng, t.lat)
                    },
                    unproject: function (t) {
                        return new s1(t.y, t.x)
                    },
                    bounds: new y1([-180, -90], [180, 90])
                },
                Y5 = {
                    R: 6378137,
                    R_MINOR: 6356752314245179e-9,
                    bounds: new y1([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
                    project: function (t) {
                        var n = Math.PI / 180,
                            o = this.R,
                            s = t.lat * n,
                            u = this.R_MINOR / o,
                            h = Math.sqrt(1 - u * u),
                            b = h * Math.sin(s),
                            S = Math.tan(Math.PI / 4 - s / 2) / Math.pow((1 - b) / (1 + b), h / 2);
                        return s = -o * Math.log(Math.max(S, 1e-10)), new k(t.lng * n * o, s)
                    },
                    unproject: function (t) {
                        for (var n = 180 / Math.PI, o = this.R, s = this.R_MINOR / o, u = Math.sqrt(1 - s * s), h = Math.exp(-t.y / o), b = Math.PI / 2 - 2 * Math.atan(h), S = 0, T = .1, N; S < 15 && Math.abs(T) > 1e-7; S++) N = u * Math.sin(b), N = Math.pow((1 - N) / (1 + N), u / 2), T = Math.PI / 2 - 2 * Math.atan(h * N) - b, b += T;
                        return new s1(b * n, t.x * n / o)
                    }
                },
                d8 = {
                    __proto__: null,
                    LonLat: J5,
                    Mercator: Y5,
                    SphericalMercator: H
                },
                h8 = l({}, D, {
                    code: "EPSG:3395",
                    projection: Y5,
                    transformation: function () {
                        var t = .5 / (Math.PI * Y5.R);
                        return y(t, .5, -t, .5)
                    }()
                }),
                Fe = l({}, D, {
                    code: "EPSG:4326",
                    projection: J5,
                    transformation: y(1 / 180, 1, -1 / 180, .5)
                }),
                f8 = l({}, A, {
                    projection: J5,
                    transformation: y(1, 0, -1, 0),
                    scale: function (t) {
                        return Math.pow(2, t)
                    },
                    zoom: function (t) {
                        return Math.log(t) / Math.LN2
                    },
                    distance: function (t, n) {
                        var o = n.lng - t.lng,
                            s = n.lat - t.lat;
                        return Math.sqrt(o * o + s * s)
                    },
                    infinite: !0
                });
            A.Earth = D, A.EPSG3395 = h8, A.EPSG3857 = v, A.EPSG900913 = M, A.EPSG4326 = Fe, A.Simple = f8;
            var I4 = Y.extend({
                options: {
                    pane: "overlayPane",
                    attribution: null,
                    bubblingMouseEvents: !0
                },
                addTo: function (t) {
                    return t.addLayer(this), this
                },
                remove: function () {
                    return this.removeFrom(this._map || this._mapToAdd)
                },
                removeFrom: function (t) {
                    return t && t.removeLayer(this), this
                },
                getPane: function (t) {
                    return this._map.getPane(t ? this.options[t] || t : this.options.pane)
                },
                addInteractiveTarget: function (t) {
                    return this._map._targets[f(t)] = this, this
                },
                removeInteractiveTarget: function (t) {
                    return delete this._map._targets[f(t)], this
                },
                getAttribution: function () {
                    return this.options.attribution
                },
                _layerAdd: function (t) {
                    var n = t.target;
                    if (n.hasLayer(this)) {
                        if (this._map = n, this._zoomAnimated = n._zoomAnimated, this.getEvents) {
                            var o = this.getEvents();
                            n.on(o, this), this.once("remove", function () {
                                n.off(o, this)
                            }, this)
                        }
                        this.onAdd(n), this.fire("add"), n.fire("layeradd", {
                            layer: this
                        })
                    }
                }
            });
            S1.include({
                addLayer: function (t) {
                    if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
                    var n = f(t);
                    return this._layers[n] ? this : (this._layers[n] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this)
                },
                removeLayer: function (t) {
                    var n = f(t);
                    return this._layers[n] ? (this._loaded && t.onRemove(this), delete this._layers[n], this._loaded && (this.fire("layerremove", {
                        layer: t
                    }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this
                },
                hasLayer: function (t) {
                    return f(t) in this._layers
                },
                eachLayer: function (t, n) {
                    for (var o in this._layers) t.call(n, this._layers[o]);
                    return this
                },
                _addLayers: function (t) {
                    t = t ? Z(t) ? t : [t] : [];
                    for (var n = 0, o = t.length; n < o; n++) this.addLayer(t[n])
                },
                _addZoomLimit: function (t) {
                    (!isNaN(t.options.maxZoom) || !isNaN(t.options.minZoom)) && (this._zoomBoundLayers[f(t)] = t, this._updateZoomLevels())
                },
                _removeZoomLimit: function (t) {
                    var n = f(t);
                    this._zoomBoundLayers[n] && (delete this._zoomBoundLayers[n], this._updateZoomLevels())
                },
                _updateZoomLevels: function () {
                    var t = 1 / 0,
                        n = -1 / 0,
                        o = this._getZoomSpan();
                    for (var s in this._zoomBoundLayers) {
                        var u = this._zoomBoundLayers[s].options;
                        t = u.minZoom === void 0 ? t : Math.min(t, u.minZoom), n = u.maxZoom === void 0 ? n : Math.max(n, u.maxZoom)
                    }
                    this._layersMaxZoom = n === -1 / 0 ? void 0 : n, this._layersMinZoom = t === 1 / 0 ? void 0 : t, o !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
                }
            });
            var R2 = I4.extend({
                initialize: function (t, n) {
                    C(this, n), this._layers = {};
                    var o, s;
                    if (t)
                        for (o = 0, s = t.length; o < s; o++) this.addLayer(t[o])
                },
                addLayer: function (t) {
                    var n = this.getLayerId(t);
                    return this._layers[n] = t, this._map && this._map.addLayer(t), this
                },
                removeLayer: function (t) {
                    var n = t in this._layers ? t : this.getLayerId(t);
                    return this._map && this._layers[n] && this._map.removeLayer(this._layers[n]), delete this._layers[n], this
                },
                hasLayer: function (t) {
                    var n = typeof t == "number" ? t : this.getLayerId(t);
                    return n in this._layers
                },
                clearLayers: function () {
                    return this.eachLayer(this.removeLayer, this)
                },
                invoke: function (t) {
                    var n = Array.prototype.slice.call(arguments, 1),
                        o, s;
                    for (o in this._layers) s = this._layers[o], s[t] && s[t].apply(s, n);
                    return this
                },
                onAdd: function (t) {
                    this.eachLayer(t.addLayer, t)
                },
                onRemove: function (t) {
                    this.eachLayer(t.removeLayer, t)
                },
                eachLayer: function (t, n) {
                    for (var o in this._layers) t.call(n, this._layers[o]);
                    return this
                },
                getLayer: function (t) {
                    return this._layers[t]
                },
                getLayers: function () {
                    var t = [];
                    return this.eachLayer(t.push, t), t
                },
                setZIndex: function (t) {
                    return this.invoke("setZIndex", t)
                },
                getLayerId: function (t) {
                    return f(t)
                }
            }),
                p8 = function (t, n) {
                    return new R2(t, n)
                },
                K4 = R2.extend({
                    addLayer: function (t) {
                        return this.hasLayer(t) ? this : (t.addEventParent(this), R2.prototype.addLayer.call(this, t), this.fire("layeradd", {
                            layer: t
                        }))
                    },
                    removeLayer: function (t) {
                        return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), R2.prototype.removeLayer.call(this, t), this.fire("layerremove", {
                            layer: t
                        })) : this
                    },
                    setStyle: function (t) {
                        return this.invoke("setStyle", t)
                    },
                    bringToFront: function () {
                        return this.invoke("bringToFront")
                    },
                    bringToBack: function () {
                        return this.invoke("bringToBack")
                    },
                    getBounds: function () {
                        var t = new A1;
                        for (var n in this._layers) {
                            var o = this._layers[n];
                            t.extend(o.getBounds ? o.getBounds() : o.getLatLng())
                        }
                        return t
                    }
                }),
                m8 = function (t, n) {
                    return new K4(t, n)
                },
                D2 = Y1.extend({
                    options: {
                        popupAnchor: [0, 0],
                        tooltipAnchor: [0, 0],
                        crossOrigin: !1
                    },
                    initialize: function (t) {
                        C(this, t)
                    },
                    createIcon: function (t) {
                        return this._createIcon("icon", t)
                    },
                    createShadow: function (t) {
                        return this._createIcon("shadow", t)
                    },
                    _createIcon: function (t, n) {
                        var o = this._getIconUrl(t);
                        if (!o) {
                            if (t === "icon") throw new Error("iconUrl not set in Icon options (see the docs).");
                            return null
                        }
                        var s = this._createImg(o, n && n.tagName === "IMG" ? n : null);
                        return this._setIconStyles(s, t), (this.options.crossOrigin || this.options.crossOrigin === "") && (s.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), s
                    },
                    _setIconStyles: function (t, n) {
                        var o = this.options,
                            s = o[n + "Size"];
                        typeof s == "number" && (s = [s, s]);
                        var u = J(s),
                            h = J(n === "shadow" && o.shadowAnchor || o.iconAnchor || u && u.divideBy(2, !0));
                        t.className = "leaflet-marker-" + n + " " + (o.className || ""), h && (t.style.marginLeft = -h.x + "px", t.style.marginTop = -h.y + "px"), u && (t.style.width = u.x + "px", t.style.height = u.y + "px")
                    },
                    _createImg: function (t, n) {
                        return n = n || document.createElement("img"), n.src = t, n
                    },
                    _getIconUrl: function (t) {
                        return t1.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
                    }
                });

            function g8(t) {
                return new D2(t)
            }
            var u3 = D2.extend({
                options: {
                    iconUrl: "marker-icon.png",
                    iconRetinaUrl: "marker-icon-2x.png",
                    shadowUrl: "marker-shadow.png",
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    tooltipAnchor: [16, -28],
                    shadowSize: [41, 41]
                },
                _getIconUrl: function (t) {
                    return typeof u3.imagePath != "string" && (u3.imagePath = this._detectIconPath()), (this.options.imagePath || u3.imagePath) + D2.prototype._getIconUrl.call(this, t)
                },
                _stripUrl: function (t) {
                    var n = function (o, s, u) {
                        var h = s.exec(o);
                        return h && h[u]
                    };
                    return t = n(t, /^url\((['"])?(.+)\1\)$/, 2), t && n(t, /^(.*)marker-icon\.png$/, 1)
                },
                _detectIconPath: function () {
                    var t = I1("div", "leaflet-default-icon-path", document.body),
                        n = n3(t, "background-image") || n3(t, "backgroundImage");
                    if (document.body.removeChild(t), n = this._stripUrl(n), n) return n;
                    var o = document.querySelector('link[href$="leaflet.css"]');
                    return o ? o.href.substring(0, o.href.length - 11 - 1) : ""
                }
            }),
                Oe = N4.extend({
                    initialize: function (t) {
                        this._marker = t
                    },
                    addHooks: function () {
                        var t = this._marker._icon;
                        this._draggable || (this._draggable = new a2(t, t, !0)), this._draggable.on({
                            dragstart: this._onDragStart,
                            predrag: this._onPreDrag,
                            drag: this._onDrag,
                            dragend: this._onDragEnd
                        }, this).enable(), x1(t, "leaflet-marker-draggable")
                    },
                    removeHooks: function () {
                        this._draggable.off({
                            dragstart: this._onDragStart,
                            predrag: this._onPreDrag,
                            drag: this._onDrag,
                            dragend: this._onDragEnd
                        }, this).disable(), this._marker._icon && W1(this._marker._icon, "leaflet-marker-draggable")
                    },
                    moved: function () {
                        return this._draggable && this._draggable._moved
                    },
                    _adjustPan: function (t) {
                        var n = this._marker,
                            o = n._map,
                            s = this._marker.options.autoPanSpeed,
                            u = this._marker.options.autoPanPadding,
                            h = v2(n._icon),
                            b = o.getPixelBounds(),
                            S = o.getPixelOrigin(),
                            T = b1(b.min._subtract(S).add(u), b.max._subtract(S).subtract(u));
                        if (!T.contains(h)) {
                            var N = J((Math.max(T.max.x, h.x) - T.max.x) / (b.max.x - T.max.x) - (Math.min(T.min.x, h.x) - T.min.x) / (b.min.x - T.min.x), (Math.max(T.max.y, h.y) - T.max.y) / (b.max.y - T.max.y) - (Math.min(T.min.y, h.y) - T.min.y) / (b.min.y - T.min.y)).multiplyBy(s);
                            o.panBy(N, {
                                animate: !1
                            }), this._draggable._newPos._add(N), this._draggable._startPos._add(N), V1(n._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = v1(this._adjustPan.bind(this, t))
                        }
                    },
                    _onDragStart: function () {
                        this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart")
                    },
                    _onPreDrag: function (t) {
                        this._marker.options.autoPan && (T1(this._panRequest), this._panRequest = v1(this._adjustPan.bind(this, t)))
                    },
                    _onDrag: function (t) {
                        var n = this._marker,
                            o = n._shadow,
                            s = v2(n._icon),
                            u = n._map.layerPointToLatLng(s);
                        o && V1(o, s), n._latlng = u, t.latlng = u, t.oldLatLng = this._oldLatLng, n.fire("move", t).fire("drag", t)
                    },
                    _onDragEnd: function (t) {
                        T1(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t)
                    }
                }),
                U3 = I4.extend({
                    options: {
                        icon: new u3,
                        interactive: !0,
                        keyboard: !0,
                        title: "",
                        alt: "Marker",
                        zIndexOffset: 0,
                        opacity: 1,
                        riseOnHover: !1,
                        riseOffset: 250,
                        pane: "markerPane",
                        shadowPane: "shadowPane",
                        bubblingMouseEvents: !1,
                        autoPanOnFocus: !0,
                        draggable: !1,
                        autoPan: !1,
                        autoPanPadding: [50, 50],
                        autoPanSpeed: 10
                    },
                    initialize: function (t, n) {
                        C(this, n), this._latlng = u1(t)
                    },
                    onAdd: function (t) {
                        this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update()
                    },
                    onRemove: function (t) {
                        this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow()
                    },
                    getEvents: function () {
                        return {
                            zoom: this.update,
                            viewreset: this.update
                        }
                    },
                    getLatLng: function () {
                        return this._latlng
                    },
                    setLatLng: function (t) {
                        var n = this._latlng;
                        return this._latlng = u1(t), this.update(), this.fire("move", {
                            oldLatLng: n,
                            latlng: this._latlng
                        })
                    },
                    setZIndexOffset: function (t) {
                        return this.options.zIndexOffset = t, this.update()
                    },
                    getIcon: function () {
                        return this.options.icon
                    },
                    setIcon: function (t) {
                        return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this
                    },
                    getElement: function () {
                        return this._icon
                    },
                    update: function () {
                        if (this._icon && this._map) {
                            var t = this._map.latLngToLayerPoint(this._latlng).round();
                            this._setPos(t)
                        }
                        return this
                    },
                    _initIcon: function () {
                        var t = this.options,
                            n = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                            o = t.icon.createIcon(this._icon),
                            s = !1;
                        o !== this._icon && (this._icon && this._removeIcon(), s = !0, t.title && (o.title = t.title), o.tagName === "IMG" && (o.alt = t.alt || "")), x1(o, n), t.keyboard && (o.tabIndex = "0", o.setAttribute("role", "button")), this._icon = o, t.riseOnHover && this.on({
                            mouseover: this._bringToFront,
                            mouseout: this._resetZIndex
                        }), this.options.autoPanOnFocus && _1(o, "focus", this._panOnFocus, this);
                        var u = t.icon.createShadow(this._shadow),
                            h = !1;
                        u !== this._shadow && (this._removeShadow(), h = !0), u && (x1(u, n), u.alt = ""), this._shadow = u, t.opacity < 1 && this._updateOpacity(), s && this.getPane().appendChild(this._icon), this._initInteraction(), u && h && this.getPane(t.shadowPane).appendChild(this._shadow)
                    },
                    _removeIcon: function () {
                        this.options.riseOnHover && this.off({
                            mouseover: this._bringToFront,
                            mouseout: this._resetZIndex
                        }), this.options.autoPanOnFocus && Z1(this._icon, "focus", this._panOnFocus, this), j1(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null
                    },
                    _removeShadow: function () {
                        this._shadow && j1(this._shadow), this._shadow = null
                    },
                    _setPos: function (t) {
                        this._icon && V1(this._icon, t), this._shadow && V1(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
                    },
                    _updateZIndex: function (t) {
                        this._icon && (this._icon.style.zIndex = this._zIndex + t)
                    },
                    _animateZoom: function (t) {
                        var n = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                        this._setPos(n)
                    },
                    _initInteraction: function () {
                        if (this.options.interactive && (x1(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Oe)) {
                            var t = this.options.draggable;
                            this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Oe(this), t && this.dragging.enable()
                        }
                    },
                    setOpacity: function (t) {
                        return this.options.opacity = t, this._map && this._updateOpacity(), this
                    },
                    _updateOpacity: function () {
                        var t = this.options.opacity;
                        this._icon && P4(this._icon, t), this._shadow && P4(this._shadow, t)
                    },
                    _bringToFront: function () {
                        this._updateZIndex(this.options.riseOffset)
                    },
                    _resetZIndex: function () {
                        this._updateZIndex(0)
                    },
                    _panOnFocus: function () {
                        var t = this._map;
                        if (t) {
                            var n = this.options.icon.options,
                                o = n.iconSize ? J(n.iconSize) : J(0, 0),
                                s = n.iconAnchor ? J(n.iconAnchor) : J(0, 0);
                            t.panInside(this._latlng, {
                                paddingTopLeft: s,
                                paddingBottomRight: o.subtract(s)
                            })
                        }
                    },
                    _getPopupAnchor: function () {
                        return this.options.icon.options.popupAnchor
                    },
                    _getTooltipAnchor: function () {
                        return this.options.icon.options.tooltipAnchor
                    }
                });

            function y8(t, n) {
                return new U3(t, n)
            }
            var l2 = I4.extend({
                options: {
                    stroke: !0,
                    color: "#3388ff",
                    weight: 3,
                    opacity: 1,
                    lineCap: "round",
                    lineJoin: "round",
                    dashArray: null,
                    dashOffset: null,
                    fill: !1,
                    fillColor: null,
                    fillOpacity: .2,
                    fillRule: "evenodd",
                    interactive: !0,
                    bubblingMouseEvents: !0
                },
                beforeAdd: function (t) {
                    this._renderer = t.getRenderer(this)
                },
                onAdd: function () {
                    this._renderer._initPath(this), this._reset(), this._renderer._addPath(this)
                },
                onRemove: function () {
                    this._renderer._removePath(this)
                },
                redraw: function () {
                    return this._map && this._renderer._updatePath(this), this
                },
                setStyle: function (t) {
                    return C(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this
                },
                bringToFront: function () {
                    return this._renderer && this._renderer._bringToFront(this), this
                },
                bringToBack: function () {
                    return this._renderer && this._renderer._bringToBack(this), this
                },
                getElement: function () {
                    return this._path
                },
                _reset: function () {
                    this._project(), this._update()
                },
                _clickTolerance: function () {
                    return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0)
                }
            }),
                $3 = l2.extend({
                    options: {
                        fill: !0,
                        radius: 10
                    },
                    initialize: function (t, n) {
                        C(this, n), this._latlng = u1(t), this._radius = this.options.radius
                    },
                    setLatLng: function (t) {
                        var n = this._latlng;
                        return this._latlng = u1(t), this.redraw(), this.fire("move", {
                            oldLatLng: n,
                            latlng: this._latlng
                        })
                    },
                    getLatLng: function () {
                        return this._latlng
                    },
                    setRadius: function (t) {
                        return this.options.radius = this._radius = t, this.redraw()
                    },
                    getRadius: function () {
                        return this._radius
                    },
                    setStyle: function (t) {
                        var n = t && t.radius || this._radius;
                        return l2.prototype.setStyle.call(this, t), this.setRadius(n), this
                    },
                    _project: function () {
                        this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds()
                    },
                    _updateBounds: function () {
                        var t = this._radius,
                            n = this._radiusY || t,
                            o = this._clickTolerance(),
                            s = [t + o, n + o];
                        this._pxBounds = new y1(this._point.subtract(s), this._point.add(s))
                    },
                    _update: function () {
                        this._map && this._updatePath()
                    },
                    _updatePath: function () {
                        this._renderer._updateCircle(this)
                    },
                    _empty: function () {
                        return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
                    },
                    _containsPoint: function (t) {
                        return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
                    }
                });

            function _8(t, n) {
                return new $3(t, n)
            }
            var X5 = $3.extend({
                initialize: function (t, n, o) {
                    if (typeof n == "number" && (n = l({}, o, {
                        radius: n
                    })), C(this, n), this._latlng = u1(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
                    this._mRadius = this.options.radius
                },
                setRadius: function (t) {
                    return this._mRadius = t, this.redraw()
                },
                getRadius: function () {
                    return this._mRadius
                },
                getBounds: function () {
                    var t = [this._radius, this._radiusY || this._radius];
                    return new A1(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
                },
                setStyle: l2.prototype.setStyle,
                _project: function () {
                    var t = this._latlng.lng,
                        n = this._latlng.lat,
                        o = this._map,
                        s = o.options.crs;
                    if (s.distance === D.distance) {
                        var u = Math.PI / 180,
                            h = this._mRadius / D.R / u,
                            b = o.project([n + h, t]),
                            S = o.project([n - h, t]),
                            T = b.add(S).divideBy(2),
                            N = o.unproject(T).lat,
                            q = Math.acos((Math.cos(h * u) - Math.sin(n * u) * Math.sin(N * u)) / (Math.cos(n * u) * Math.cos(N * u))) / u;
                        (isNaN(q) || q === 0) && (q = h / Math.cos(Math.PI / 180 * n)), this._point = T.subtract(o.getPixelOrigin()), this._radius = isNaN(q) ? 0 : T.x - o.project([N, t - q]).x, this._radiusY = T.y - b.y
                    } else {
                        var c1 = s.unproject(s.project(this._latlng).subtract([this._mRadius, 0]));
                        this._point = o.latLngToLayerPoint(this._latlng), this._radius = this._point.x - o.latLngToLayerPoint(c1).x
                    }
                    this._updateBounds()
                }
            });

            function v8(t, n, o) {
                return new X5(t, n, o)
            }
            var V4 = l2.extend({
                options: {
                    smoothFactor: 1,
                    noClip: !1
                },
                initialize: function (t, n) {
                    C(this, n), this._setLatLngs(t)
                },
                getLatLngs: function () {
                    return this._latlngs
                },
                setLatLngs: function (t) {
                    return this._setLatLngs(t), this.redraw()
                },
                isEmpty: function () {
                    return !this._latlngs.length
                },
                closestLayerPoint: function (t) {
                    for (var n = 1 / 0, o = null, s = l3, u, h, b = 0, S = this._parts.length; b < S; b++)
                        for (var T = this._parts[b], N = 1, q = T.length; N < q; N++) {
                            u = T[N - 1], h = T[N];
                            var c1 = s(t, u, h, !0);
                            c1 < n && (n = c1, o = s(t, u, h))
                        }
                    return o && (o.distance = Math.sqrt(n)), o
                },
                getCenter: function () {
                    if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                    return Ae(this._defaultShape(), this._map.options.crs)
                },
                getBounds: function () {
                    return this._bounds
                },
                addLatLng: function (t, n) {
                    return n = n || this._defaultShape(), t = u1(t), n.push(t), this._bounds.extend(t), this.redraw()
                },
                _setLatLngs: function (t) {
                    this._bounds = new A1, this._latlngs = this._convertLatLngs(t)
                },
                _defaultShape: function () {
                    return M4(this._latlngs) ? this._latlngs : this._latlngs[0]
                },
                _convertLatLngs: function (t) {
                    for (var n = [], o = M4(t), s = 0, u = t.length; s < u; s++) o ? (n[s] = u1(t[s]), this._bounds.extend(n[s])) : n[s] = this._convertLatLngs(t[s]);
                    return n
                },
                _project: function () {
                    var t = new y1;
                    this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds())
                },
                _updateBounds: function () {
                    var t = this._clickTolerance(),
                        n = new k(t, t);
                    this._rawPxBounds && (this._pxBounds = new y1([this._rawPxBounds.min.subtract(n), this._rawPxBounds.max.add(n)]))
                },
                _projectLatlngs: function (t, n, o) {
                    var s = t[0] instanceof s1,
                        u = t.length,
                        h, b;
                    if (s) {
                        for (b = [], h = 0; h < u; h++) b[h] = this._map.latLngToLayerPoint(t[h]), o.extend(b[h]);
                        n.push(b)
                    } else
                        for (h = 0; h < u; h++) this._projectLatlngs(t[h], n, o)
                },
                _clipPoints: function () {
                    var t = this._renderer._bounds;
                    if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
                        if (this.options.noClip) {
                            this._parts = this._rings;
                            return
                        }
                        var n = this._parts,
                            o, s, u, h, b, S, T;
                        for (o = 0, u = 0, h = this._rings.length; o < h; o++)
                            for (T = this._rings[o], s = 0, b = T.length; s < b - 1; s++) S = Ie(T[s], T[s + 1], t, s, !0), S && (n[u] = n[u] || [], n[u].push(S[0]), (S[1] !== T[s + 1] || s === b - 2) && (n[u].push(S[1]), u++))
                    }
                },
                _simplifyPoints: function () {
                    for (var t = this._parts, n = this.options.smoothFactor, o = 0, s = t.length; o < s; o++) t[o] = Ee(t[o], n)
                },
                _update: function () {
                    this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
                },
                _updatePath: function () {
                    this._renderer._updatePoly(this)
                },
                _containsPoint: function (t, n) {
                    var o, s, u, h, b, S, T = this._clickTolerance();
                    if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                    for (o = 0, h = this._parts.length; o < h; o++)
                        for (S = this._parts[o], s = 0, b = S.length, u = b - 1; s < b; u = s++)
                            if (!(!n && s === 0) && Le(t, S[u], S[s]) <= T) return !0;
                    return !1
                }
            });

            function x8(t, n) {
                return new V4(t, n)
            }
            V4._flat = ke;
            var N2 = V4.extend({
                options: {
                    fill: !0
                },
                isEmpty: function () {
                    return !this._latlngs.length || !this._latlngs[0].length
                },
                getCenter: function () {
                    if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                    return Te(this._defaultShape(), this._map.options.crs)
                },
                _convertLatLngs: function (t) {
                    var n = V4.prototype._convertLatLngs.call(this, t),
                        o = n.length;
                    return o >= 2 && n[0] instanceof s1 && n[0].equals(n[o - 1]) && n.pop(), n
                },
                _setLatLngs: function (t) {
                    V4.prototype._setLatLngs.call(this, t), M4(this._latlngs) && (this._latlngs = [this._latlngs])
                },
                _defaultShape: function () {
                    return M4(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
                },
                _clipPoints: function () {
                    var t = this._renderer._bounds,
                        n = this.options.weight,
                        o = new k(n, n);
                    if (t = new y1(t.min.subtract(o), t.max.add(o)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
                        if (this.options.noClip) {
                            this._parts = this._rings;
                            return
                        }
                        for (var s = 0, u = this._rings.length, h; s < u; s++) h = Se(this._rings[s], t, !0), h.length && this._parts.push(h)
                    }
                },
                _updatePath: function () {
                    this._renderer._updatePoly(this, !0)
                },
                _containsPoint: function (t) {
                    var n = !1,
                        o, s, u, h, b, S, T, N;
                    if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                    for (h = 0, T = this._parts.length; h < T; h++)
                        for (o = this._parts[h], b = 0, N = o.length, S = N - 1; b < N; S = b++) s = o[b], u = o[S], s.y > t.y != u.y > t.y && t.x < (u.x - s.x) * (t.y - s.y) / (u.y - s.y) + s.x && (n = !n);
                    return n || V4.prototype._containsPoint.call(this, t, !0)
                }
            });

            function b8(t, n) {
                return new N2(t, n)
            }
            var q4 = K4.extend({
                initialize: function (t, n) {
                    C(this, n), this._layers = {}, t && this.addData(t)
                },
                addData: function (t) {
                    var n = Z(t) ? t : t.features,
                        o, s, u;
                    if (n) {
                        for (o = 0, s = n.length; o < s; o++) u = n[o], (u.geometries || u.geometry || u.features || u.coordinates) && this.addData(u);
                        return this
                    }
                    var h = this.options;
                    if (h.filter && !h.filter(t)) return this;
                    var b = j3(t, h);
                    return b ? (b.feature = V3(t), b.defaultOptions = b.options, this.resetStyle(b), h.onEachFeature && h.onEachFeature(t, b), this.addLayer(b)) : this
                },
                resetStyle: function (t) {
                    return t === void 0 ? this.eachLayer(this.resetStyle, this) : (t.options = l({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this)
                },
                setStyle: function (t) {
                    return this.eachLayer(function (n) {
                        this._setLayerStyle(n, t)
                    }, this)
                },
                _setLayerStyle: function (t, n) {
                    t.setStyle && (typeof n == "function" && (n = n(t.feature)), t.setStyle(n))
                }
            });

            function j3(t, n) {
                var o = t.type === "Feature" ? t.geometry : t,
                    s = o ? o.coordinates : null,
                    u = [],
                    h = n && n.pointToLayer,
                    b = n && n.coordsToLatLng || Q5,
                    S, T, N, q;
                if (!s && !o) return null;
                switch (o.type) {
                    case "Point":
                        return S = b(s), Re(h, t, S, n);
                    case "MultiPoint":
                        for (N = 0, q = s.length; N < q; N++) S = b(s[N]), u.push(Re(h, t, S, n));
                        return new K4(u);
                    case "LineString":
                    case "MultiLineString":
                        return T = W3(s, o.type === "LineString" ? 0 : 1, b), new V4(T, n);
                    case "Polygon":
                    case "MultiPolygon":
                        return T = W3(s, o.type === "Polygon" ? 1 : 2, b), new N2(T, n);
                    case "GeometryCollection":
                        for (N = 0, q = o.geometries.length; N < q; N++) {
                            var c1 = j3({
                                geometry: o.geometries[N],
                                type: "Feature",
                                properties: t.properties
                            }, n);
                            c1 && u.push(c1)
                        }
                        return new K4(u);
                    case "FeatureCollection":
                        for (N = 0, q = o.features.length; N < q; N++) {
                            var P1 = j3(o.features[N], n);
                            P1 && u.push(P1)
                        }
                        return new K4(u);
                    default:
                        throw new Error("Invalid GeoJSON object.")
                }
            }

            function Re(t, n, o, s) {
                return t ? t(n, o) : new U3(o, s && s.markersInheritOptions && s)
            }

            function Q5(t) {
                return new s1(t[1], t[0], t[2])
            }

            function W3(t, n, o) {
                for (var s = [], u = 0, h = t.length, b; u < h; u++) b = n ? W3(t[u], n - 1, o) : (o || Q5)(t[u]), s.push(b);
                return s
            }

            function tt(t, n) {
                return t = u1(t), t.alt !== void 0 ? [x(t.lng, n), x(t.lat, n), x(t.alt, n)] : [x(t.lng, n), x(t.lat, n)]
            }

            function K3(t, n, o, s) {
                for (var u = [], h = 0, b = t.length; h < b; h++) u.push(n ? K3(t[h], M4(t[h]) ? 0 : n - 1, o, s) : tt(t[h], s));
                return !n && o && u.length > 0 && u.push(u[0].slice()), u
            }

            function B2(t, n) {
                return t.feature ? l({}, t.feature, {
                    geometry: n
                }) : V3(n)
            }

            function V3(t) {
                return t.type === "Feature" || t.type === "FeatureCollection" ? t : {
                    type: "Feature",
                    properties: {},
                    geometry: t
                }
            }
            var et = {
                toGeoJSON: function (t) {
                    return B2(this, {
                        type: "Point",
                        coordinates: tt(this.getLatLng(), t)
                    })
                }
            };
            U3.include(et), X5.include(et), $3.include(et), V4.include({
                toGeoJSON: function (t) {
                    var n = !M4(this._latlngs),
                        o = K3(this._latlngs, n ? 1 : 0, !1, t);
                    return B2(this, {
                        type: (n ? "Multi" : "") + "LineString",
                        coordinates: o
                    })
                }
            }), N2.include({
                toGeoJSON: function (t) {
                    var n = !M4(this._latlngs),
                        o = n && !M4(this._latlngs[0]),
                        s = K3(this._latlngs, o ? 2 : n ? 1 : 0, !0, t);
                    return n || (s = [s]), B2(this, {
                        type: (o ? "Multi" : "") + "Polygon",
                        coordinates: s
                    })
                }
            }), R2.include({
                toMultiPoint: function (t) {
                    var n = [];
                    return this.eachLayer(function (o) {
                        n.push(o.toGeoJSON(t).geometry.coordinates)
                    }), B2(this, {
                        type: "MultiPoint",
                        coordinates: n
                    })
                },
                toGeoJSON: function (t) {
                    var n = this.feature && this.feature.geometry && this.feature.geometry.type;
                    if (n === "MultiPoint") return this.toMultiPoint(t);
                    var o = n === "GeometryCollection",
                        s = [];
                    return this.eachLayer(function (u) {
                        if (u.toGeoJSON) {
                            var h = u.toGeoJSON(t);
                            if (o) s.push(h.geometry);
                            else {
                                var b = V3(h);
                                b.type === "FeatureCollection" ? s.push.apply(s, b.features) : s.push(b)
                            }
                        }
                    }), o ? B2(this, {
                        geometries: s,
                        type: "GeometryCollection"
                    }) : {
                            type: "FeatureCollection",
                            features: s
                        }
                }
            });

            function De(t, n) {
                return new q4(t, n)
            }
            var w8 = De,
                q3 = I4.extend({
                    options: {
                        opacity: 1,
                        alt: "",
                        interactive: !1,
                        crossOrigin: !1,
                        errorOverlayUrl: "",
                        zIndex: 1,
                        className: ""
                    },
                    initialize: function (t, n, o) {
                        this._url = t, this._bounds = p1(n), C(this, o)
                    },
                    onAdd: function () {
                        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (x1(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset()
                    },
                    onRemove: function () {
                        j1(this._image), this.options.interactive && this.removeInteractiveTarget(this._image)
                    },
                    setOpacity: function (t) {
                        return this.options.opacity = t, this._image && this._updateOpacity(), this
                    },
                    setStyle: function (t) {
                        return t.opacity && this.setOpacity(t.opacity), this
                    },
                    bringToFront: function () {
                        return this._map && F2(this._image), this
                    },
                    bringToBack: function () {
                        return this._map && O2(this._image), this
                    },
                    setUrl: function (t) {
                        return this._url = t, this._image && (this._image.src = t), this
                    },
                    setBounds: function (t) {
                        return this._bounds = p1(t), this._map && this._reset(), this
                    },
                    getEvents: function () {
                        var t = {
                            zoom: this._reset,
                            viewreset: this._reset
                        };
                        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
                    },
                    setZIndex: function (t) {
                        return this.options.zIndex = t, this._updateZIndex(), this
                    },
                    getBounds: function () {
                        return this._bounds
                    },
                    getElement: function () {
                        return this._image
                    },
                    _initImage: function () {
                        var t = this._url.tagName === "IMG",
                            n = this._image = t ? this._url : I1("img");
                        if (x1(n, "leaflet-image-layer"), this._zoomAnimated && x1(n, "leaflet-zoom-animated"), this.options.className && x1(n, this.options.className), n.onselectstart = _, n.onmousemove = _, n.onload = d(this.fire, this, "load"), n.onerror = d(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (n.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t) {
                            this._url = n.src;
                            return
                        }
                        n.src = this._url, n.alt = this.options.alt
                    },
                    _animateZoom: function (t) {
                        var n = this._map.getZoomScale(t.zoom),
                            o = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
                        _2(this._image, o, n)
                    },
                    _reset: function () {
                        var t = this._image,
                            n = new y1(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
                            o = n.getSize();
                        V1(t, n.min), t.style.width = o.x + "px", t.style.height = o.y + "px"
                    },
                    _updateOpacity: function () {
                        P4(this._image, this.options.opacity)
                    },
                    _updateZIndex: function () {
                        this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex)
                    },
                    _overlayOnError: function () {
                        this.fire("error");
                        var t = this.options.errorOverlayUrl;
                        t && this._url !== t && (this._url = t, this._image.src = t)
                    },
                    getCenter: function () {
                        return this._bounds.getCenter()
                    }
                }),
                P8 = function (t, n, o) {
                    return new q3(t, n, o)
                },
                Ne = q3.extend({
                    options: {
                        autoplay: !0,
                        loop: !0,
                        keepAspectRatio: !0,
                        muted: !1,
                        playsInline: !0
                    },
                    _initImage: function () {
                        var t = this._url.tagName === "VIDEO",
                            n = this._image = t ? this._url : I1("video");
                        if (x1(n, "leaflet-image-layer"), this._zoomAnimated && x1(n, "leaflet-zoom-animated"), this.options.className && x1(n, this.options.className), n.onselectstart = _, n.onmousemove = _, n.onloadeddata = d(this.fire, this, "load"), t) {
                            for (var o = n.getElementsByTagName("source"), s = [], u = 0; u < o.length; u++) s.push(o[u].src);
                            this._url = o.length > 0 ? s : [n.src];
                            return
                        }
                        Z(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(n.style, "objectFit") && (n.style.objectFit = "fill"), n.autoplay = !!this.options.autoplay, n.loop = !!this.options.loop, n.muted = !!this.options.muted, n.playsInline = !!this.options.playsInline;
                        for (var h = 0; h < this._url.length; h++) {
                            var b = I1("source");
                            b.src = this._url[h], n.appendChild(b)
                        }
                    }
                });

            function M8(t, n, o) {
                return new Ne(t, n, o)
            }
            var Be = q3.extend({
                _initImage: function () {
                    var t = this._image = this._url;
                    x1(t, "leaflet-image-layer"), this._zoomAnimated && x1(t, "leaflet-zoom-animated"), this.options.className && x1(t, this.options.className), t.onselectstart = _, t.onmousemove = _
                }
            });

            function S8(t, n, o) {
                return new Be(t, n, o)
            }
            var B4 = I4.extend({
                options: {
                    interactive: !1,
                    offset: [0, 0],
                    className: "",
                    pane: void 0,
                    content: ""
                },
                initialize: function (t, n) {
                    t && (t instanceof s1 || Z(t)) ? (this._latlng = u1(t), C(this, n)) : (C(this, t), this._source = n), this.options.content && (this._content = this.options.content)
                },
                openOn: function (t) {
                    return t = arguments.length ? t : this._source._map, t.hasLayer(this) || t.addLayer(this), this
                },
                close: function () {
                    return this._map && this._map.removeLayer(this), this
                },
                toggle: function (t) {
                    return this._map ? this.close() : (arguments.length ? this._source = t : t = this._source, this._prepareOpen(), this.openOn(t._map)), this
                },
                onAdd: function (t) {
                    this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && P4(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && P4(this._container, 1), this.bringToFront(), this.options.interactive && (x1(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container))
                },
                onRemove: function (t) {
                    t._fadeAnimated ? (P4(this._container, 0), this._removeTimeout = setTimeout(d(j1, void 0, this._container), 200)) : j1(this._container), this.options.interactive && (W1(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container))
                },
                getLatLng: function () {
                    return this._latlng
                },
                setLatLng: function (t) {
                    return this._latlng = u1(t), this._map && (this._updatePosition(), this._adjustPan()), this
                },
                getContent: function () {
                    return this._content
                },
                setContent: function (t) {
                    return this._content = t, this.update(), this
                },
                getElement: function () {
                    return this._container
                },
                update: function () {
                    this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
                },
                getEvents: function () {
                    var t = {
                        zoom: this._updatePosition,
                        viewreset: this._updatePosition
                    };
                    return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
                },
                isOpen: function () {
                    return !!this._map && this._map.hasLayer(this)
                },
                bringToFront: function () {
                    return this._map && F2(this._container), this
                },
                bringToBack: function () {
                    return this._map && O2(this._container), this
                },
                _prepareOpen: function (t) {
                    var n = this._source;
                    if (!n._map) return !1;
                    if (n instanceof K4) {
                        n = null;
                        var o = this._source._layers;
                        for (var s in o)
                            if (o[s]._map) {
                                n = o[s];
                                break
                            }
                        if (!n) return !1;
                        this._source = n
                    }
                    if (!t)
                        if (n.getCenter) t = n.getCenter();
                        else if (n.getLatLng) t = n.getLatLng();
                        else if (n.getBounds) t = n.getBounds().getCenter();
                        else throw new Error("Unable to get source layer LatLng.");
                    return this.setLatLng(t), this._map && this.update(), !0
                },
                _updateContent: function () {
                    if (this._content) {
                        var t = this._contentNode,
                            n = typeof this._content == "function" ? this._content(this._source || this) : this._content;
                        if (typeof n == "string") t.innerHTML = n;
                        else {
                            for (; t.hasChildNodes();) t.removeChild(t.firstChild);
                            t.appendChild(n)
                        }
                        this.fire("contentupdate")
                    }
                },
                _updatePosition: function () {
                    if (this._map) {
                        var t = this._map.latLngToLayerPoint(this._latlng),
                            n = J(this.options.offset),
                            o = this._getAnchor();
                        this._zoomAnimated ? V1(this._container, t.add(o)) : n = n.add(t).add(o);
                        var s = this._containerBottom = -n.y,
                            u = this._containerLeft = -Math.round(this._containerWidth / 2) + n.x;
                        this._container.style.bottom = s + "px", this._container.style.left = u + "px"
                    }
                },
                _getAnchor: function () {
                    return [0, 0]
                }
            });
            S1.include({
                _initOverlay: function (t, n, o, s) {
                    var u = n;
                    return u instanceof t || (u = new t(s).setContent(n)), o && u.setLatLng(o), u
                }
            }), I4.include({
                _initOverlay: function (t, n, o, s) {
                    var u = o;
                    return u instanceof t ? (C(u, s), u._source = this) : (u = n && !s ? n : new t(s, this), u.setContent(o)), u
                }
            });
            var J3 = B4.extend({
                options: {
                    pane: "popupPane",
                    offset: [0, 7],
                    maxWidth: 300,
                    minWidth: 50,
                    maxHeight: null,
                    autoPan: !0,
                    autoPanPaddingTopLeft: null,
                    autoPanPaddingBottomRight: null,
                    autoPanPadding: [5, 5],
                    keepInView: !1,
                    closeButton: !0,
                    autoClose: !0,
                    closeOnEscapeKey: !0,
                    className: ""
                },
                openOn: function (t) {
                    return t = arguments.length ? t : this._source._map, !t.hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup), t._popup = this, B4.prototype.openOn.call(this, t)
                },
                onAdd: function (t) {
                    B4.prototype.onAdd.call(this, t), t.fire("popupopen", {
                        popup: this
                    }), this._source && (this._source.fire("popupopen", {
                        popup: this
                    }, !0), this._source instanceof l2 || this._source.on("preclick", x2))
                },
                onRemove: function (t) {
                    B4.prototype.onRemove.call(this, t), t.fire("popupclose", {
                        popup: this
                    }), this._source && (this._source.fire("popupclose", {
                        popup: this
                    }, !0), this._source instanceof l2 || this._source.off("preclick", x2))
                },
                getEvents: function () {
                    var t = B4.prototype.getEvents.call(this);
                    return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close), this.options.keepInView && (t.moveend = this._adjustPan), t
                },
                _initLayout: function () {
                    var t = "leaflet-popup",
                        n = this._container = I1("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
                        o = this._wrapper = I1("div", t + "-content-wrapper", n);
                    if (this._contentNode = I1("div", t + "-content", o), s3(n), $5(this._contentNode), _1(n, "contextmenu", x2), this._tipContainer = I1("div", t + "-tip-container", n), this._tip = I1("div", t + "-tip", this._tipContainer), this.options.closeButton) {
                        var s = this._closeButton = I1("a", t + "-close-button", n);
                        s.setAttribute("role", "button"), s.setAttribute("aria-label", "Close popup"), s.href = "#close", s.innerHTML = '<span aria-hidden="true">&#215;</span>', _1(s, "click", function (u) {
                            t4(u), this.close()
                        }, this)
                    }
                },
                _updateLayout: function () {
                    var t = this._contentNode,
                        n = t.style;
                    n.width = "", n.whiteSpace = "nowrap";
                    var o = t.offsetWidth;
                    o = Math.min(o, this.options.maxWidth), o = Math.max(o, this.options.minWidth), n.width = o + 1 + "px", n.whiteSpace = "", n.height = "";
                    var s = t.offsetHeight,
                        u = this.options.maxHeight,
                        h = "leaflet-popup-scrolled";
                    u && s > u ? (n.height = u + "px", x1(t, h)) : W1(t, h), this._containerWidth = this._container.offsetWidth
                },
                _animateZoom: function (t) {
                    var n = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
                        o = this._getAnchor();
                    V1(this._container, n.add(o))
                },
                _adjustPan: function () {
                    if (this.options.autoPan) {
                        if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
                            this._autopanning = !1;
                            return
                        }
                        var t = this._map,
                            n = parseInt(n3(this._container, "marginBottom"), 10) || 0,
                            o = this._container.offsetHeight + n,
                            s = this._containerWidth,
                            u = new k(this._containerLeft, -o - this._containerBottom);
                        u._add(v2(this._container));
                        var h = t.layerPointToContainerPoint(u),
                            b = J(this.options.autoPanPadding),
                            S = J(this.options.autoPanPaddingTopLeft || b),
                            T = J(this.options.autoPanPaddingBottomRight || b),
                            N = t.getSize(),
                            q = 0,
                            c1 = 0;
                        h.x + s + T.x > N.x && (q = h.x + s - N.x + T.x), h.x - q - S.x < 0 && (q = h.x - S.x), h.y + o + T.y > N.y && (c1 = h.y + o - N.y + T.y), h.y - c1 - S.y < 0 && (c1 = h.y - S.y), (q || c1) && (this.options.keepInView && (this._autopanning = !0), t.fire("autopanstart").panBy([q, c1]))
                    }
                },
                _getAnchor: function () {
                    return J(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
                }
            }),
                T8 = function (t, n) {
                    return new J3(t, n)
                };
            S1.mergeOptions({
                closePopupOnClick: !0
            }), S1.include({
                openPopup: function (t, n, o) {
                    return this._initOverlay(J3, t, n, o).openOn(this), this
                },
                closePopup: function (t) {
                    return t = arguments.length ? t : this._popup, t && t.close(), this
                }
            }), I4.include({
                bindPopup: function (t, n) {
                    return this._popup = this._initOverlay(J3, this._popup, t, n), this._popupHandlersAdded || (this.on({
                        click: this._openPopup,
                        keypress: this._onKeyPress,
                        remove: this.closePopup,
                        move: this._movePopup
                    }), this._popupHandlersAdded = !0), this
                },
                unbindPopup: function () {
                    return this._popup && (this.off({
                        click: this._openPopup,
                        keypress: this._onKeyPress,
                        remove: this.closePopup,
                        move: this._movePopup
                    }), this._popupHandlersAdded = !1, this._popup = null), this
                },
                openPopup: function (t) {
                    return this._popup && (this instanceof K4 || (this._popup._source = this), this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)), this
                },
                closePopup: function () {
                    return this._popup && this._popup.close(), this
                },
                togglePopup: function () {
                    return this._popup && this._popup.toggle(this), this
                },
                isPopupOpen: function () {
                    return this._popup ? this._popup.isOpen() : !1
                },
                setPopupContent: function (t) {
                    return this._popup && this._popup.setContent(t), this
                },
                getPopup: function () {
                    return this._popup
                },
                _openPopup: function (t) {
                    if (!(!this._popup || !this._map)) {
                        b2(t);
                        var n = t.layer || t.target;
                        if (this._popup._source === n && !(n instanceof l2)) {
                            this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t.latlng);
                            return
                        }
                        this._popup._source = n, this.openPopup(t.latlng)
                    }
                },
                _movePopup: function (t) {
                    this._popup.setLatLng(t.latlng)
                },
                _onKeyPress: function (t) {
                    t.originalEvent.keyCode === 13 && this._openPopup(t)
                }
            });
            var Y3 = B4.extend({
                options: {
                    pane: "tooltipPane",
                    offset: [0, 0],
                    direction: "auto",
                    permanent: !1,
                    sticky: !1,
                    opacity: .9
                },
                onAdd: function (t) {
                    B4.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
                        tooltip: this
                    }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", {
                        tooltip: this
                    }, !0))
                },
                onRemove: function (t) {
                    B4.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
                        tooltip: this
                    }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", {
                        tooltip: this
                    }, !0))
                },
                getEvents: function () {
                    var t = B4.prototype.getEvents.call(this);
                    return this.options.permanent || (t.preclick = this.close), t
                },
                _initLayout: function () {
                    var t = "leaflet-tooltip",
                        n = t + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
                    this._contentNode = this._container = I1("div", n), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + f(this))
                },
                _updateLayout: function () { },
                _adjustPan: function () { },
                _setPosition: function (t) {
                    var n, o, s = this._map,
                        u = this._container,
                        h = s.latLngToContainerPoint(s.getCenter()),
                        b = s.layerPointToContainerPoint(t),
                        S = this.options.direction,
                        T = u.offsetWidth,
                        N = u.offsetHeight,
                        q = J(this.options.offset),
                        c1 = this._getAnchor();
                    S === "top" ? (n = T / 2, o = N) : S === "bottom" ? (n = T / 2, o = 0) : S === "center" ? (n = T / 2, o = N / 2) : S === "right" ? (n = 0, o = N / 2) : S === "left" ? (n = T, o = N / 2) : b.x < h.x ? (S = "right", n = 0, o = N / 2) : (S = "left", n = T + (q.x + c1.x) * 2, o = N / 2), t = t.subtract(J(n, o, !0)).add(q).add(c1), W1(u, "leaflet-tooltip-right"), W1(u, "leaflet-tooltip-left"), W1(u, "leaflet-tooltip-top"), W1(u, "leaflet-tooltip-bottom"), x1(u, "leaflet-tooltip-" + S), V1(u, t)
                },
                _updatePosition: function () {
                    var t = this._map.latLngToLayerPoint(this._latlng);
                    this._setPosition(t)
                },
                setOpacity: function (t) {
                    this.options.opacity = t, this._container && P4(this._container, t)
                },
                _animateZoom: function (t) {
                    var n = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
                    this._setPosition(n)
                },
                _getAnchor: function () {
                    return J(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
                }
            }),
                E8 = function (t, n) {
                    return new Y3(t, n)
                };
            S1.include({
                openTooltip: function (t, n, o) {
                    return this._initOverlay(Y3, t, n, o).openOn(this), this
                },
                closeTooltip: function (t) {
                    return t.close(), this
                }
            }), I4.include({
                bindTooltip: function (t, n) {
                    return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(Y3, this._tooltip, t, n), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this
                },
                unbindTooltip: function () {
                    return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this
                },
                _initTooltipInteractions: function (t) {
                    if (!(!t && this._tooltipHandlersAdded)) {
                        var n = t ? "off" : "on",
                            o = {
                                remove: this.closeTooltip,
                                move: this._moveTooltip
                            };
                        this._tooltip.options.permanent ? o.add = this._openTooltip : (o.mouseover = this._openTooltip, o.mouseout = this.closeTooltip, o.click = this._openTooltip, this._map ? this._addFocusListeners() : o.add = this._addFocusListeners), this._tooltip.options.sticky && (o.mousemove = this._moveTooltip), this[n](o), this._tooltipHandlersAdded = !t
                    }
                },
                openTooltip: function (t) {
                    return this._tooltip && (this instanceof K4 || (this._tooltip._source = this), this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this
                },
                closeTooltip: function () {
                    if (this._tooltip) return this._tooltip.close()
                },
                toggleTooltip: function () {
                    return this._tooltip && this._tooltip.toggle(this), this
                },
                isTooltipOpen: function () {
                    return this._tooltip.isOpen()
                },
                setTooltipContent: function (t) {
                    return this._tooltip && this._tooltip.setContent(t), this
                },
                getTooltip: function () {
                    return this._tooltip
                },
                _addFocusListeners: function () {
                    this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this)
                },
                _addFocusListenersOnLayer: function (t) {
                    var n = typeof t.getElement == "function" && t.getElement();
                    n && (_1(n, "focus", function () {
                        this._tooltip._source = t, this.openTooltip()
                    }, this), _1(n, "blur", this.closeTooltip, this))
                },
                _setAriaDescribedByOnLayer: function (t) {
                    var n = typeof t.getElement == "function" && t.getElement();
                    n && n.setAttribute("aria-describedby", this._tooltip._container.id)
                },
                _openTooltip: function (t) {
                    if (!(!this._tooltip || !this._map)) {
                        if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
                            this._openOnceFlag = !0;
                            var n = this;
                            this._map.once("moveend", function () {
                                n._openOnceFlag = !1, n._openTooltip(t)
                            });
                            return
                        }
                        this._tooltip._source = t.layer || t.target, this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0)
                    }
                },
                _moveTooltip: function (t) {
                    var n = t.latlng,
                        o, s;
                    this._tooltip.options.sticky && t.originalEvent && (o = this._map.mouseEventToContainerPoint(t.originalEvent), s = this._map.containerPointToLayerPoint(o), n = this._map.layerPointToLatLng(s)), this._tooltip.setLatLng(n)
                }
            });
            var Ge = D2.extend({
                options: {
                    iconSize: [12, 12],
                    html: !1,
                    bgPos: null,
                    className: "leaflet-div-icon"
                },
                createIcon: function (t) {
                    var n = t && t.tagName === "DIV" ? t : document.createElement("div"),
                        o = this.options;
                    if (o.html instanceof Element ? (N3(n), n.appendChild(o.html)) : n.innerHTML = o.html !== !1 ? o.html : "", o.bgPos) {
                        var s = J(o.bgPos);
                        n.style.backgroundPosition = -s.x + "px " + -s.y + "px"
                    }
                    return this._setIconStyles(n, "icon"), n
                },
                createShadow: function () {
                    return null
                }
            });

            function L8(t) {
                return new Ge(t)
            }
            D2.Default = u3;
            var c3 = I4.extend({
                options: {
                    tileSize: 256,
                    opacity: 1,
                    updateWhenIdle: t1.mobile,
                    updateWhenZooming: !0,
                    updateInterval: 200,
                    zIndex: 1,
                    bounds: null,
                    minZoom: 0,
                    maxZoom: void 0,
                    maxNativeZoom: void 0,
                    minNativeZoom: void 0,
                    noWrap: !1,
                    pane: "tilePane",
                    className: "",
                    keepBuffer: 2
                },
                initialize: function (t) {
                    C(this, t)
                },
                onAdd: function () {
                    this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView()
                },
                beforeAdd: function (t) {
                    t._addZoomLimit(this)
                },
                onRemove: function (t) {
                    this._removeAllTiles(), j1(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0
                },
                bringToFront: function () {
                    return this._map && (F2(this._container), this._setAutoZIndex(Math.max)), this
                },
                bringToBack: function () {
                    return this._map && (O2(this._container), this._setAutoZIndex(Math.min)), this
                },
                getContainer: function () {
                    return this._container
                },
                setOpacity: function (t) {
                    return this.options.opacity = t, this._updateOpacity(), this
                },
                setZIndex: function (t) {
                    return this.options.zIndex = t, this._updateZIndex(), this
                },
                isLoading: function () {
                    return this._loading
                },
                redraw: function () {
                    if (this._map) {
                        this._removeAllTiles();
                        var t = this._clampZoom(this._map.getZoom());
                        t !== this._tileZoom && (this._tileZoom = t, this._updateLevels()), this._update()
                    }
                    return this
                },
                getEvents: function () {
                    var t = {
                        viewprereset: this._invalidateAll,
                        viewreset: this._resetView,
                        zoom: this._resetView,
                        moveend: this._onMoveEnd
                    };
                    return this.options.updateWhenIdle || (this._onMove || (this._onMove = m(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t
                },
                createTile: function () {
                    return document.createElement("div")
                },
                getTileSize: function () {
                    var t = this.options.tileSize;
                    return t instanceof k ? t : new k(t, t)
                },
                _updateZIndex: function () {
                    this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex)
                },
                _setAutoZIndex: function (t) {
                    for (var n = this.getPane().children, o = -t(-1 / 0, 1 / 0), s = 0, u = n.length, h; s < u; s++) h = n[s].style.zIndex, n[s] !== this._container && h && (o = t(o, +h));
                    isFinite(o) && (this.options.zIndex = o + t(-1, 1), this._updateZIndex())
                },
                _updateOpacity: function () {
                    if (this._map && !t1.ielt9) {
                        P4(this._container, this.options.opacity);
                        var t = +new Date,
                            n = !1,
                            o = !1;
                        for (var s in this._tiles) {
                            var u = this._tiles[s];
                            if (!(!u.current || !u.loaded)) {
                                var h = Math.min(1, (t - u.loaded) / 200);
                                P4(u.el, h), h < 1 ? n = !0 : (u.active ? o = !0 : this._onOpaqueTile(u), u.active = !0)
                            }
                        }
                        o && !this._noPrune && this._pruneTiles(), n && (T1(this._fadeFrame), this._fadeFrame = v1(this._updateOpacity, this))
                    }
                },
                _onOpaqueTile: _,
                _initContainer: function () {
                    this._container || (this._container = I1("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container))
                },
                _updateLevels: function () {
                    var t = this._tileZoom,
                        n = this.options.maxZoom;
                    if (t !== void 0) {
                        for (var o in this._levels) o = Number(o), this._levels[o].el.children.length || o === t ? (this._levels[o].el.style.zIndex = n - Math.abs(t - o), this._onUpdateLevel(o)) : (j1(this._levels[o].el), this._removeTilesAtZoom(o), this._onRemoveLevel(o), delete this._levels[o]);
                        var s = this._levels[t],
                            u = this._map;
                        return s || (s = this._levels[t] = {}, s.el = I1("div", "leaflet-tile-container leaflet-zoom-animated", this._container), s.el.style.zIndex = n, s.origin = u.project(u.unproject(u.getPixelOrigin()), t).round(), s.zoom = t, this._setZoomTransform(s, u.getCenter(), u.getZoom()), _(s.el.offsetWidth), this._onCreateLevel(s)), this._level = s, s
                    }
                },
                _onUpdateLevel: _,
                _onRemoveLevel: _,
                _onCreateLevel: _,
                _pruneTiles: function () {
                    if (this._map) {
                        var t, n, o = this._map.getZoom();
                        if (o > this.options.maxZoom || o < this.options.minZoom) {
                            this._removeAllTiles();
                            return
                        }
                        for (t in this._tiles) n = this._tiles[t], n.retain = n.current;
                        for (t in this._tiles)
                            if (n = this._tiles[t], n.current && !n.active) {
                                var s = n.coords;
                                this._retainParent(s.x, s.y, s.z, s.z - 5) || this._retainChildren(s.x, s.y, s.z, s.z + 2)
                            }
                        for (t in this._tiles) this._tiles[t].retain || this._removeTile(t)
                    }
                },
                _removeTilesAtZoom: function (t) {
                    for (var n in this._tiles) this._tiles[n].coords.z === t && this._removeTile(n)
                },
                _removeAllTiles: function () {
                    for (var t in this._tiles) this._removeTile(t)
                },
                _invalidateAll: function () {
                    for (var t in this._levels) j1(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
                    this._removeAllTiles(), this._tileZoom = void 0
                },
                _retainParent: function (t, n, o, s) {
                    var u = Math.floor(t / 2),
                        h = Math.floor(n / 2),
                        b = o - 1,
                        S = new k(+u, +h);
                    S.z = +b;
                    var T = this._tileCoordsToKey(S),
                        N = this._tiles[T];
                    return N && N.active ? (N.retain = !0, !0) : (N && N.loaded && (N.retain = !0), b > s ? this._retainParent(u, h, b, s) : !1)
                },
                _retainChildren: function (t, n, o, s) {
                    for (var u = 2 * t; u < 2 * t + 2; u++)
                        for (var h = 2 * n; h < 2 * n + 2; h++) {
                            var b = new k(u, h);
                            b.z = o + 1;
                            var S = this._tileCoordsToKey(b),
                                T = this._tiles[S];
                            if (T && T.active) {
                                T.retain = !0;
                                continue
                            } else T && T.loaded && (T.retain = !0);
                            o + 1 < s && this._retainChildren(u, h, o + 1, s)
                        }
                },
                _resetView: function (t) {
                    var n = t && (t.pinch || t.flyTo);
                    this._setView(this._map.getCenter(), this._map.getZoom(), n, n)
                },
                _animateZoom: function (t) {
                    this._setView(t.center, t.zoom, !0, t.noUpdate)
                },
                _clampZoom: function (t) {
                    var n = this.options;
                    return n.minNativeZoom !== void 0 && t < n.minNativeZoom ? n.minNativeZoom : n.maxNativeZoom !== void 0 && n.maxNativeZoom < t ? n.maxNativeZoom : t
                },
                _setView: function (t, n, o, s) {
                    var u = Math.round(n);
                    this.options.maxZoom !== void 0 && u > this.options.maxZoom || this.options.minZoom !== void 0 && u < this.options.minZoom ? u = void 0 : u = this._clampZoom(u);
                    var h = this.options.updateWhenZooming && u !== this._tileZoom;
                    (!s || h) && (this._tileZoom = u, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), u !== void 0 && this._update(t), o || this._pruneTiles(), this._noPrune = !!o), this._setZoomTransforms(t, n)
                },
                _setZoomTransforms: function (t, n) {
                    for (var o in this._levels) this._setZoomTransform(this._levels[o], t, n)
                },
                _setZoomTransform: function (t, n, o) {
                    var s = this._map.getZoomScale(o, t.zoom),
                        u = t.origin.multiplyBy(s).subtract(this._map._getNewPixelOrigin(n, o)).round();
                    t1.any3d ? _2(t.el, u, s) : V1(t.el, u)
                },
                _resetGrid: function () {
                    var t = this._map,
                        n = t.options.crs,
                        o = this._tileSize = this.getTileSize(),
                        s = this._tileZoom,
                        u = this._map.getPixelWorldBounds(this._tileZoom);
                    u && (this._globalTileRange = this._pxBoundsToTileRange(u)), this._wrapX = n.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, n.wrapLng[0]], s).x / o.x), Math.ceil(t.project([0, n.wrapLng[1]], s).x / o.y)], this._wrapY = n.wrapLat && !this.options.noWrap && [Math.floor(t.project([n.wrapLat[0], 0], s).y / o.x), Math.ceil(t.project([n.wrapLat[1], 0], s).y / o.y)]
                },
                _onMoveEnd: function () {
                    !this._map || this._map._animatingZoom || this._update()
                },
                _getTiledPixelBounds: function (t) {
                    var n = this._map,
                        o = n._animatingZoom ? Math.max(n._animateToZoom, n.getZoom()) : n.getZoom(),
                        s = n.getZoomScale(o, this._tileZoom),
                        u = n.project(t, this._tileZoom).floor(),
                        h = n.getSize().divideBy(s * 2);
                    return new y1(u.subtract(h), u.add(h))
                },
                _update: function (t) {
                    var n = this._map;
                    if (n) {
                        var o = this._clampZoom(n.getZoom());
                        if (t === void 0 && (t = n.getCenter()), this._tileZoom !== void 0) {
                            var s = this._getTiledPixelBounds(t),
                                u = this._pxBoundsToTileRange(s),
                                h = u.getCenter(),
                                b = [],
                                S = this.options.keepBuffer,
                                T = new y1(u.getBottomLeft().subtract([S, -S]), u.getTopRight().add([S, -S]));
                            if (!(isFinite(u.min.x) && isFinite(u.min.y) && isFinite(u.max.x) && isFinite(u.max.y))) throw new Error("Attempted to load an infinite number of tiles");
                            for (var N in this._tiles) {
                                var q = this._tiles[N].coords;
                                (q.z !== this._tileZoom || !T.contains(new k(q.x, q.y))) && (this._tiles[N].current = !1)
                            }
                            if (Math.abs(o - this._tileZoom) > 1) {
                                this._setView(t, o);
                                return
                            }
                            for (var c1 = u.min.y; c1 <= u.max.y; c1++)
                                for (var P1 = u.min.x; P1 <= u.max.x; P1++) {
                                    var u4 = new k(P1, c1);
                                    if (u4.z = this._tileZoom, !!this._isValidTile(u4)) {
                                        var X1 = this._tiles[this._tileCoordsToKey(u4)];
                                        X1 ? X1.current = !0 : b.push(u4)
                                    }
                                }
                            if (b.sort(function (f4, z2) {
                                return f4.distanceTo(h) - z2.distanceTo(h)
                            }), b.length !== 0) {
                                this._loading || (this._loading = !0, this.fire("loading"));
                                var S4 = document.createDocumentFragment();
                                for (P1 = 0; P1 < b.length; P1++) this._addTile(b[P1], S4);
                                this._level.el.appendChild(S4)
                            }
                        }
                    }
                },
                _isValidTile: function (t) {
                    var n = this._map.options.crs;
                    if (!n.infinite) {
                        var o = this._globalTileRange;
                        if (!n.wrapLng && (t.x < o.min.x || t.x > o.max.x) || !n.wrapLat && (t.y < o.min.y || t.y > o.max.y)) return !1
                    }
                    if (!this.options.bounds) return !0;
                    var s = this._tileCoordsToBounds(t);
                    return p1(this.options.bounds).overlaps(s)
                },
                _keyToBounds: function (t) {
                    return this._tileCoordsToBounds(this._keyToTileCoords(t))
                },
                _tileCoordsToNwSe: function (t) {
                    var n = this._map,
                        o = this.getTileSize(),
                        s = t.scaleBy(o),
                        u = s.add(o),
                        h = n.unproject(s, t.z),
                        b = n.unproject(u, t.z);
                    return [h, b]
                },
                _tileCoordsToBounds: function (t) {
                    var n = this._tileCoordsToNwSe(t),
                        o = new A1(n[0], n[1]);
                    return this.options.noWrap || (o = this._map.wrapLatLngBounds(o)), o
                },
                _tileCoordsToKey: function (t) {
                    return t.x + ":" + t.y + ":" + t.z
                },
                _keyToTileCoords: function (t) {
                    var n = t.split(":"),
                        o = new k(+n[0], +n[1]);
                    return o.z = +n[2], o
                },
                _removeTile: function (t) {
                    var n = this._tiles[t];
                    n && (j1(n.el), delete this._tiles[t], this.fire("tileunload", {
                        tile: n.el,
                        coords: this._keyToTileCoords(t)
                    }))
                },
                _initTile: function (t) {
                    x1(t, "leaflet-tile");
                    var n = this.getTileSize();
                    t.style.width = n.x + "px", t.style.height = n.y + "px", t.onselectstart = _, t.onmousemove = _, t1.ielt9 && this.options.opacity < 1 && P4(t, this.options.opacity)
                },
                _addTile: function (t, n) {
                    var o = this._getTilePos(t),
                        s = this._tileCoordsToKey(t),
                        u = this.createTile(this._wrapCoords(t), d(this._tileReady, this, t));
                    this._initTile(u), this.createTile.length < 2 && v1(d(this._tileReady, this, t, null, u)), V1(u, o), this._tiles[s] = {
                        el: u,
                        coords: t,
                        current: !0
                    }, n.appendChild(u), this.fire("tileloadstart", {
                        tile: u,
                        coords: t
                    })
                },
                _tileReady: function (t, n, o) {
                    n && this.fire("tileerror", {
                        error: n,
                        tile: o,
                        coords: t
                    });
                    var s = this._tileCoordsToKey(t);
                    o = this._tiles[s], o && (o.loaded = +new Date, this._map._fadeAnimated ? (P4(o.el, 0), T1(this._fadeFrame), this._fadeFrame = v1(this._updateOpacity, this)) : (o.active = !0, this._pruneTiles()), n || (x1(o.el, "leaflet-tile-loaded"), this.fire("tileload", {
                        tile: o.el,
                        coords: t
                    })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), t1.ielt9 || !this._map._fadeAnimated ? v1(this._pruneTiles, this) : setTimeout(d(this._pruneTiles, this), 250)))
                },
                _getTilePos: function (t) {
                    return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
                },
                _wrapCoords: function (t) {
                    var n = new k(this._wrapX ? g(t.x, this._wrapX) : t.x, this._wrapY ? g(t.y, this._wrapY) : t.y);
                    return n.z = t.z, n
                },
                _pxBoundsToTileRange: function (t) {
                    var n = this.getTileSize();
                    return new y1(t.min.unscaleBy(n).floor(), t.max.unscaleBy(n).ceil().subtract([1, 1]))
                },
                _noTilesToLoad: function () {
                    for (var t in this._tiles)
                        if (!this._tiles[t].loaded) return !1;
                    return !0
                }
            });

            function C8(t) {
                return new c3(t)
            }
            var G2 = c3.extend({
                options: {
                    minZoom: 0,
                    maxZoom: 18,
                    subdomains: "abc",
                    errorTileUrl: "",
                    zoomOffset: 0,
                    tms: !1,
                    zoomReverse: !1,
                    detectRetina: !1,
                    crossOrigin: !1,
                    referrerPolicy: !1
                },
                initialize: function (t, n) {
                    this._url = t, n = C(this, n), n.detectRetina && t1.retina && n.maxZoom > 0 ? (n.tileSize = Math.floor(n.tileSize / 2), n.zoomReverse ? (n.zoomOffset--, n.minZoom = Math.min(n.maxZoom, n.minZoom + 1)) : (n.zoomOffset++, n.maxZoom = Math.max(n.minZoom, n.maxZoom - 1)), n.minZoom = Math.max(0, n.minZoom)) : n.zoomReverse ? n.minZoom = Math.min(n.maxZoom, n.minZoom) : n.maxZoom = Math.max(n.minZoom, n.maxZoom), typeof n.subdomains == "string" && (n.subdomains = n.subdomains.split("")), this.on("tileunload", this._onTileRemove)
                },
                setUrl: function (t, n) {
                    return this._url === t && n === void 0 && (n = !0), this._url = t, n || this.redraw(), this
                },
                createTile: function (t, n) {
                    var o = document.createElement("img");
                    return _1(o, "load", d(this._tileOnLoad, this, n, o)), _1(o, "error", d(this._tileOnError, this, n, o)), (this.options.crossOrigin || this.options.crossOrigin === "") && (o.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (o.referrerPolicy = this.options.referrerPolicy), o.alt = "", o.src = this.getTileUrl(t), o
                },
                getTileUrl: function (t) {
                    var n = {
                        r: t1.retina ? "@2x" : "",
                        s: this._getSubdomain(t),
                        x: t.x,
                        y: t.y,
                        z: this._getZoomForUrl()
                    };
                    if (this._map && !this._map.options.crs.infinite) {
                        var o = this._globalTileRange.max.y - t.y;
                        this.options.tms && (n.y = o), n["-y"] = o
                    }
                    return z(this._url, l(n, this.options))
                },
                _tileOnLoad: function (t, n) {
                    t1.ielt9 ? setTimeout(d(t, this, null, n), 0) : t(null, n)
                },
                _tileOnError: function (t, n, o) {
                    var s = this.options.errorTileUrl;
                    s && n.getAttribute("src") !== s && (n.src = s), t(o, n)
                },
                _onTileRemove: function (t) {
                    t.tile.onload = null
                },
                _getZoomForUrl: function () {
                    var t = this._tileZoom,
                        n = this.options.maxZoom,
                        o = this.options.zoomReverse,
                        s = this.options.zoomOffset;
                    return o && (t = n - t), t + s
                },
                _getSubdomain: function (t) {
                    var n = Math.abs(t.x + t.y) % this.options.subdomains.length;
                    return this.options.subdomains[n]
                },
                _abortLoading: function () {
                    var t, n;
                    for (t in this._tiles)
                        if (this._tiles[t].coords.z !== this._tileZoom && (n = this._tiles[t].el, n.onload = _, n.onerror = _, !n.complete)) {
                            n.src = l1;
                            var o = this._tiles[t].coords;
                            j1(n), delete this._tiles[t], this.fire("tileabort", {
                                tile: n,
                                coords: o
                            })
                        }
                },
                _removeTile: function (t) {
                    var n = this._tiles[t];
                    if (n) return n.el.setAttribute("src", l1), c3.prototype._removeTile.call(this, t)
                },
                _tileReady: function (t, n, o) {
                    if (!(!this._map || o && o.getAttribute("src") === l1)) return c3.prototype._tileReady.call(this, t, n, o)
                }
            });

            function ze(t, n) {
                return new G2(t, n)
            }
            var Ze = G2.extend({
                defaultWmsParams: {
                    service: "WMS",
                    request: "GetMap",
                    layers: "",
                    styles: "",
                    format: "image/jpeg",
                    transparent: !1,
                    version: "1.1.1"
                },
                options: {
                    crs: null,
                    uppercase: !1
                },
                initialize: function (t, n) {
                    this._url = t;
                    var o = l({}, this.defaultWmsParams);
                    for (var s in n) s in this.options || (o[s] = n[s]);
                    n = C(this, n);
                    var u = n.detectRetina && t1.retina ? 2 : 1,
                        h = this.getTileSize();
                    o.width = h.x * u, o.height = h.y * u, this.wmsParams = o
                },
                onAdd: function (t) {
                    this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
                    var n = this._wmsVersion >= 1.3 ? "crs" : "srs";
                    this.wmsParams[n] = this._crs.code, G2.prototype.onAdd.call(this, t)
                },
                getTileUrl: function (t) {
                    var n = this._tileCoordsToNwSe(t),
                        o = this._crs,
                        s = b1(o.project(n[0]), o.project(n[1])),
                        u = s.min,
                        h = s.max,
                        b = (this._wmsVersion >= 1.3 && this._crs === Fe ? [u.y, u.x, h.y, h.x] : [u.x, u.y, h.x, h.y]).join(","),
                        S = G2.prototype.getTileUrl.call(this, t);
                    return S + G(this.wmsParams, S, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + b
                },
                setParams: function (t, n) {
                    return l(this.wmsParams, t), n || this.redraw(), this
                }
            });

            function I8(t, n) {
                return new Ze(t, n)
            }
            G2.WMS = Ze, ze.wms = I8;
            var J4 = I4.extend({
                options: {
                    padding: .1
                },
                initialize: function (t) {
                    C(this, t), f(this), this._layers = this._layers || {}
                },
                onAdd: function () {
                    this._container || (this._initContainer(), x1(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this)
                },
                onRemove: function () {
                    this.off("update", this._updatePaths, this), this._destroyContainer()
                },
                getEvents: function () {
                    var t = {
                        viewreset: this._reset,
                        zoom: this._onZoom,
                        moveend: this._update,
                        zoomend: this._onZoomEnd
                    };
                    return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t
                },
                _onAnimZoom: function (t) {
                    this._updateTransform(t.center, t.zoom)
                },
                _onZoom: function () {
                    this._updateTransform(this._map.getCenter(), this._map.getZoom())
                },
                _updateTransform: function (t, n) {
                    var o = this._map.getZoomScale(n, this._zoom),
                        s = this._map.getSize().multiplyBy(.5 + this.options.padding),
                        u = this._map.project(this._center, n),
                        h = s.multiplyBy(-o).add(u).subtract(this._map._getNewPixelOrigin(t, n));
                    t1.any3d ? _2(this._container, h, o) : V1(this._container, h)
                },
                _reset: function () {
                    this._update(), this._updateTransform(this._center, this._zoom);
                    for (var t in this._layers) this._layers[t]._reset()
                },
                _onZoomEnd: function () {
                    for (var t in this._layers) this._layers[t]._project()
                },
                _updatePaths: function () {
                    for (var t in this._layers) this._layers[t]._update()
                },
                _update: function () {
                    var t = this.options.padding,
                        n = this._map.getSize(),
                        o = this._map.containerPointToLayerPoint(n.multiplyBy(-t)).round();
                    this._bounds = new y1(o, o.add(n.multiplyBy(1 + t * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom()
                }
            }),
                He = J4.extend({
                    options: {
                        tolerance: 0
                    },
                    getEvents: function () {
                        var t = J4.prototype.getEvents.call(this);
                        return t.viewprereset = this._onViewPreReset, t
                    },
                    _onViewPreReset: function () {
                        this._postponeUpdatePaths = !0
                    },
                    onAdd: function () {
                        J4.prototype.onAdd.call(this), this._draw()
                    },
                    _initContainer: function () {
                        var t = this._container = document.createElement("canvas");
                        _1(t, "mousemove", this._onMouseMove, this), _1(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), _1(t, "mouseout", this._handleMouseOut, this), t._leaflet_disable_events = !0, this._ctx = t.getContext("2d")
                    },
                    _destroyContainer: function () {
                        T1(this._redrawRequest), delete this._ctx, j1(this._container), Z1(this._container), delete this._container
                    },
                    _updatePaths: function () {
                        if (!this._postponeUpdatePaths) {
                            var t;
                            this._redrawBounds = null;
                            for (var n in this._layers) t = this._layers[n], t._update();
                            this._redraw()
                        }
                    },
                    _update: function () {
                        if (!(this._map._animatingZoom && this._bounds)) {
                            J4.prototype._update.call(this);
                            var t = this._bounds,
                                n = this._container,
                                o = t.getSize(),
                                s = t1.retina ? 2 : 1;
                            V1(n, t.min), n.width = s * o.x, n.height = s * o.y, n.style.width = o.x + "px", n.style.height = o.y + "px", t1.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update")
                        }
                    },
                    _reset: function () {
                        J4.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths())
                    },
                    _initPath: function (t) {
                        this._updateDashArray(t), this._layers[f(t)] = t;
                        var n = t._order = {
                            layer: t,
                            prev: this._drawLast,
                            next: null
                        };
                        this._drawLast && (this._drawLast.next = n), this._drawLast = n, this._drawFirst = this._drawFirst || this._drawLast
                    },
                    _addPath: function (t) {
                        this._requestRedraw(t)
                    },
                    _removePath: function (t) {
                        var n = t._order,
                            o = n.next,
                            s = n.prev;
                        o ? o.prev = s : this._drawLast = s, s ? s.next = o : this._drawFirst = o, delete t._order, delete this._layers[f(t)], this._requestRedraw(t)
                    },
                    _updatePath: function (t) {
                        this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t)
                    },
                    _updateStyle: function (t) {
                        this._updateDashArray(t), this._requestRedraw(t)
                    },
                    _updateDashArray: function (t) {
                        if (typeof t.options.dashArray == "string") {
                            var n = t.options.dashArray.split(/[, ]+/),
                                o = [],
                                s, u;
                            for (u = 0; u < n.length; u++) {
                                if (s = Number(n[u]), isNaN(s)) return;
                                o.push(s)
                            }
                            t.options._dashArray = o
                        } else t.options._dashArray = t.options.dashArray
                    },
                    _requestRedraw: function (t) {
                        this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || v1(this._redraw, this))
                    },
                    _extendRedrawBounds: function (t) {
                        if (t._pxBounds) {
                            var n = (t.options.weight || 0) + 1;
                            this._redrawBounds = this._redrawBounds || new y1, this._redrawBounds.extend(t._pxBounds.min.subtract([n, n])), this._redrawBounds.extend(t._pxBounds.max.add([n, n]))
                        }
                    },
                    _redraw: function () {
                        this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null
                    },
                    _clear: function () {
                        var t = this._redrawBounds;
                        if (t) {
                            var n = t.getSize();
                            this._ctx.clearRect(t.min.x, t.min.y, n.x, n.y)
                        } else this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore()
                    },
                    _draw: function () {
                        var t, n = this._redrawBounds;
                        if (this._ctx.save(), n) {
                            var o = n.getSize();
                            this._ctx.beginPath(), this._ctx.rect(n.min.x, n.min.y, o.x, o.y), this._ctx.clip()
                        }
                        this._drawing = !0;
                        for (var s = this._drawFirst; s; s = s.next) t = s.layer, (!n || t._pxBounds && t._pxBounds.intersects(n)) && t._updatePath();
                        this._drawing = !1, this._ctx.restore()
                    },
                    _updatePoly: function (t, n) {
                        if (this._drawing) {
                            var o, s, u, h, b = t._parts,
                                S = b.length,
                                T = this._ctx;
                            if (S) {
                                for (T.beginPath(), o = 0; o < S; o++) {
                                    for (s = 0, u = b[o].length; s < u; s++) h = b[o][s], T[s ? "lineTo" : "moveTo"](h.x, h.y);
                                    n && T.closePath()
                                }
                                this._fillStroke(T, t)
                            }
                        }
                    },
                    _updateCircle: function (t) {
                        if (!(!this._drawing || t._empty())) {
                            var n = t._point,
                                o = this._ctx,
                                s = Math.max(Math.round(t._radius), 1),
                                u = (Math.max(Math.round(t._radiusY), 1) || s) / s;
                            u !== 1 && (o.save(), o.scale(1, u)), o.beginPath(), o.arc(n.x, n.y / u, s, 0, Math.PI * 2, !1), u !== 1 && o.restore(), this._fillStroke(o, t)
                        }
                    },
                    _fillStroke: function (t, n) {
                        var o = n.options;
                        o.fill && (t.globalAlpha = o.fillOpacity, t.fillStyle = o.fillColor || o.color, t.fill(o.fillRule || "evenodd")), o.stroke && o.weight !== 0 && (t.setLineDash && t.setLineDash(n.options && n.options._dashArray || []), t.globalAlpha = o.opacity, t.lineWidth = o.weight, t.strokeStyle = o.color, t.lineCap = o.lineCap, t.lineJoin = o.lineJoin, t.stroke())
                    },
                    _onClick: function (t) {
                        for (var n = this._map.mouseEventToLayerPoint(t), o, s, u = this._drawFirst; u; u = u.next) o = u.layer, o.options.interactive && o._containsPoint(n) && (!(t.type === "click" || t.type === "preclick") || !this._map._draggableMoved(o)) && (s = o);
                        this._fireEvent(s ? [s] : !1, t)
                    },
                    _onMouseMove: function (t) {
                        if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
                            var n = this._map.mouseEventToLayerPoint(t);
                            this._handleMouseHover(t, n)
                        }
                    },
                    _handleMouseOut: function (t) {
                        var n = this._hoveredLayer;
                        n && (W1(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1)
                    },
                    _handleMouseHover: function (t, n) {
                        if (!this._mouseHoverThrottled) {
                            for (var o, s, u = this._drawFirst; u; u = u.next) o = u.layer, o.options.interactive && o._containsPoint(n) && (s = o);
                            s !== this._hoveredLayer && (this._handleMouseOut(t), s && (x1(this._container, "leaflet-interactive"), this._fireEvent([s], t, "mouseover"), this._hoveredLayer = s)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, t), this._mouseHoverThrottled = !0, setTimeout(d(function () {
                                this._mouseHoverThrottled = !1
                            }, this), 32)
                        }
                    },
                    _fireEvent: function (t, n, o) {
                        this._map._fireDOMEvent(n, o || n.type, t)
                    },
                    _bringToFront: function (t) {
                        var n = t._order;
                        if (n) {
                            var o = n.next,
                                s = n.prev;
                            if (o) o.prev = s;
                            else return;
                            s ? s.next = o : o && (this._drawFirst = o), n.prev = this._drawLast, this._drawLast.next = n, n.next = null, this._drawLast = n, this._requestRedraw(t)
                        }
                    },
                    _bringToBack: function (t) {
                        var n = t._order;
                        if (n) {
                            var o = n.next,
                                s = n.prev;
                            if (s) s.next = o;
                            else return;
                            o ? o.prev = s : s && (this._drawLast = s), n.prev = null, n.next = this._drawFirst, this._drawFirst.prev = n, this._drawFirst = n, this._requestRedraw(t)
                        }
                    }
                });

            function Ue(t) {
                return t1.canvas ? new He(t) : null
            }
            var d3 = function () {
                try {
                    return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                        function (t) {
                            return document.createElement("<lvml:" + t + ' class="lvml">')
                        }
                } catch { }
                return function (t) {
                    return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                }
            }(),
                k8 = {
                    _initContainer: function () {
                        this._container = I1("div", "leaflet-vml-container")
                    },
                    _update: function () {
                        this._map._animatingZoom || (J4.prototype._update.call(this), this.fire("update"))
                    },
                    _initPath: function (t) {
                        var n = t._container = d3("shape");
                        x1(n, "leaflet-vml-shape " + (this.options.className || "")), n.coordsize = "1 1", t._path = d3("path"), n.appendChild(t._path), this._updateStyle(t), this._layers[f(t)] = t
                    },
                    _addPath: function (t) {
                        var n = t._container;
                        this._container.appendChild(n), t.options.interactive && t.addInteractiveTarget(n)
                    },
                    _removePath: function (t) {
                        var n = t._container;
                        j1(n), t.removeInteractiveTarget(n), delete this._layers[f(t)]
                    },
                    _updateStyle: function (t) {
                        var n = t._stroke,
                            o = t._fill,
                            s = t.options,
                            u = t._container;
                        u.stroked = !!s.stroke, u.filled = !!s.fill, s.stroke ? (n || (n = t._stroke = d3("stroke")), u.appendChild(n), n.weight = s.weight + "px", n.color = s.color, n.opacity = s.opacity, s.dashArray ? n.dashStyle = Z(s.dashArray) ? s.dashArray.join(" ") : s.dashArray.replace(/( *, *)/g, " ") : n.dashStyle = "", n.endcap = s.lineCap.replace("butt", "flat"), n.joinstyle = s.lineJoin) : n && (u.removeChild(n), t._stroke = null), s.fill ? (o || (o = t._fill = d3("fill")), u.appendChild(o), o.color = s.fillColor || s.color, o.opacity = s.fillOpacity) : o && (u.removeChild(o), t._fill = null)
                    },
                    _updateCircle: function (t) {
                        var n = t._point.round(),
                            o = Math.round(t._radius),
                            s = Math.round(t._radiusY || o);
                        this._setPath(t, t._empty() ? "M0 0" : "AL " + n.x + "," + n.y + " " + o + "," + s + " 0," + 65535 * 360)
                    },
                    _setPath: function (t, n) {
                        t._path.v = n
                    },
                    _bringToFront: function (t) {
                        F2(t._container)
                    },
                    _bringToBack: function (t) {
                        O2(t._container)
                    }
                },
                X3 = t1.vml ? d3 : F,
                h3 = J4.extend({
                    _initContainer: function () {
                        this._container = X3("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = X3("g"), this._container.appendChild(this._rootGroup)
                    },
                    _destroyContainer: function () {
                        j1(this._container), Z1(this._container), delete this._container, delete this._rootGroup, delete this._svgSize
                    },
                    _update: function () {
                        if (!(this._map._animatingZoom && this._bounds)) {
                            J4.prototype._update.call(this);
                            var t = this._bounds,
                                n = t.getSize(),
                                o = this._container;
                            (!this._svgSize || !this._svgSize.equals(n)) && (this._svgSize = n, o.setAttribute("width", n.x), o.setAttribute("height", n.y)), V1(o, t.min), o.setAttribute("viewBox", [t.min.x, t.min.y, n.x, n.y].join(" ")), this.fire("update")
                        }
                    },
                    _initPath: function (t) {
                        var n = t._path = X3("path");
                        t.options.className && x1(n, t.options.className), t.options.interactive && x1(n, "leaflet-interactive"), this._updateStyle(t), this._layers[f(t)] = t
                    },
                    _addPath: function (t) {
                        this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path)
                    },
                    _removePath: function (t) {
                        j1(t._path), t.removeInteractiveTarget(t._path), delete this._layers[f(t)]
                    },
                    _updatePath: function (t) {
                        t._project(), t._update()
                    },
                    _updateStyle: function (t) {
                        var n = t._path,
                            o = t.options;
                        n && (o.stroke ? (n.setAttribute("stroke", o.color), n.setAttribute("stroke-opacity", o.opacity), n.setAttribute("stroke-width", o.weight), n.setAttribute("stroke-linecap", o.lineCap), n.setAttribute("stroke-linejoin", o.lineJoin), o.dashArray ? n.setAttribute("stroke-dasharray", o.dashArray) : n.removeAttribute("stroke-dasharray"), o.dashOffset ? n.setAttribute("stroke-dashoffset", o.dashOffset) : n.removeAttribute("stroke-dashoffset")) : n.setAttribute("stroke", "none"), o.fill ? (n.setAttribute("fill", o.fillColor || o.color), n.setAttribute("fill-opacity", o.fillOpacity), n.setAttribute("fill-rule", o.fillRule || "evenodd")) : n.setAttribute("fill", "none"))
                    },
                    _updatePoly: function (t, n) {
                        this._setPath(t, R(t._parts, n))
                    },
                    _updateCircle: function (t) {
                        var n = t._point,
                            o = Math.max(Math.round(t._radius), 1),
                            s = Math.max(Math.round(t._radiusY), 1) || o,
                            u = "a" + o + "," + s + " 0 1,0 ",
                            h = t._empty() ? "M0 0" : "M" + (n.x - o) + "," + n.y + u + o * 2 + ",0 " + u + -o * 2 + ",0 ";
                        this._setPath(t, h)
                    },
                    _setPath: function (t, n) {
                        t._path.setAttribute("d", n)
                    },
                    _bringToFront: function (t) {
                        F2(t._path)
                    },
                    _bringToBack: function (t) {
                        O2(t._path)
                    }
                });
            t1.vml && h3.include(k8);

            function $e(t) {
                return t1.svg || t1.vml ? new h3(t) : null
            }
            S1.include({
                getRenderer: function (t) {
                    var n = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
                    return n || (n = this._renderer = this._createRenderer()), this.hasLayer(n) || this.addLayer(n), n
                },
                _getPaneRenderer: function (t) {
                    if (t === "overlayPane" || t === void 0) return !1;
                    var n = this._paneRenderers[t];
                    return n === void 0 && (n = this._createRenderer({
                        pane: t
                    }), this._paneRenderers[t] = n), n
                },
                _createRenderer: function (t) {
                    return this.options.preferCanvas && Ue(t) || $e(t)
                }
            });
            var je = N2.extend({
                initialize: function (t, n) {
                    N2.prototype.initialize.call(this, this._boundsToLatLngs(t), n)
                },
                setBounds: function (t) {
                    return this.setLatLngs(this._boundsToLatLngs(t))
                },
                _boundsToLatLngs: function (t) {
                    return t = p1(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
                }
            });

            function A8(t, n) {
                return new je(t, n)
            }
            h3.create = X3, h3.pointsToPath = R, q4.geometryToLayer = j3, q4.coordsToLatLng = Q5, q4.coordsToLatLngs = W3, q4.latLngToCoords = tt, q4.latLngsToCoords = K3, q4.getFeature = B2, q4.asFeature = V3, S1.mergeOptions({
                boxZoom: !0
            });
            var We = N4.extend({
                initialize: function (t) {
                    this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this)
                },
                addHooks: function () {
                    _1(this._container, "mousedown", this._onMouseDown, this)
                },
                removeHooks: function () {
                    Z1(this._container, "mousedown", this._onMouseDown, this)
                },
                moved: function () {
                    return this._moved
                },
                _destroy: function () {
                    j1(this._pane), delete this._pane
                },
                _resetState: function () {
                    this._resetStateTimeout = 0, this._moved = !1
                },
                _clearDeferredResetState: function () {
                    this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0)
                },
                _onMouseDown: function (t) {
                    if (!t.shiftKey || t.which !== 1 && t.button !== 1) return !1;
                    this._clearDeferredResetState(), this._resetState(), i3(), D5(), this._startPoint = this._map.mouseEventToContainerPoint(t), _1(document, {
                        contextmenu: b2,
                        mousemove: this._onMouseMove,
                        mouseup: this._onMouseUp,
                        keydown: this._onKeyDown
                    }, this)
                },
                _onMouseMove: function (t) {
                    this._moved || (this._moved = !0, this._box = I1("div", "leaflet-zoom-box", this._container), x1(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
                    var n = new y1(this._point, this._startPoint),
                        o = n.getSize();
                    V1(this._box, n.min), this._box.style.width = o.x + "px", this._box.style.height = o.y + "px"
                },
                _finish: function () {
                    this._moved && (j1(this._box), W1(this._container, "leaflet-crosshair")), o3(), N5(), Z1(document, {
                        contextmenu: b2,
                        mousemove: this._onMouseMove,
                        mouseup: this._onMouseUp,
                        keydown: this._onKeyDown
                    }, this)
                },
                _onMouseUp: function (t) {
                    if (!(t.which !== 1 && t.button !== 1) && (this._finish(), !!this._moved)) {
                        this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(d(this._resetState, this), 0);
                        var n = new A1(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
                        this._map.fitBounds(n).fire("boxzoomend", {
                            boxZoomBounds: n
                        })
                    }
                },
                _onKeyDown: function (t) {
                    t.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState())
                }
            });
            S1.addInitHook("addHandler", "boxZoom", We), S1.mergeOptions({
                doubleClickZoom: !0
            });
            var Ke = N4.extend({
                addHooks: function () {
                    this._map.on("dblclick", this._onDoubleClick, this)
                },
                removeHooks: function () {
                    this._map.off("dblclick", this._onDoubleClick, this)
                },
                _onDoubleClick: function (t) {
                    var n = this._map,
                        o = n.getZoom(),
                        s = n.options.zoomDelta,
                        u = t.originalEvent.shiftKey ? o - s : o + s;
                    n.options.doubleClickZoom === "center" ? n.setZoom(u) : n.setZoomAround(t.containerPoint, u)
                }
            });
            S1.addInitHook("addHandler", "doubleClickZoom", Ke), S1.mergeOptions({
                dragging: !0,
                inertia: !0,
                inertiaDeceleration: 3400,
                inertiaMaxSpeed: 1 / 0,
                easeLinearity: .2,
                worldCopyJump: !1,
                maxBoundsViscosity: 0
            });
            var Ve = N4.extend({
                addHooks: function () {
                    if (!this._draggable) {
                        var t = this._map;
                        this._draggable = new a2(t._mapPane, t._container), this._draggable.on({
                            dragstart: this._onDragStart,
                            drag: this._onDrag,
                            dragend: this._onDragEnd
                        }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))
                    }
                    x1(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = []
                },
                removeHooks: function () {
                    W1(this._map._container, "leaflet-grab"), W1(this._map._container, "leaflet-touch-drag"), this._draggable.disable()
                },
                moved: function () {
                    return this._draggable && this._draggable._moved
                },
                moving: function () {
                    return this._draggable && this._draggable._moving
                },
                _onDragStart: function () {
                    var t = this._map;
                    if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
                        var n = p1(this._map.options.maxBounds);
                        this._offsetLimit = b1(this._map.latLngToContainerPoint(n.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(n.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
                    } else this._offsetLimit = null;
                    t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
                },
                _onDrag: function (t) {
                    if (this._map.options.inertia) {
                        var n = this._lastTime = +new Date,
                            o = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                        this._positions.push(o), this._times.push(n), this._prunePositions(n)
                    }
                    this._map.fire("move", t).fire("drag", t)
                },
                _prunePositions: function (t) {
                    for (; this._positions.length > 1 && t - this._times[0] > 50;) this._positions.shift(), this._times.shift()
                },
                _onZoomEnd: function () {
                    var t = this._map.getSize().divideBy(2),
                        n = this._map.latLngToLayerPoint([0, 0]);
                    this._initialWorldOffset = n.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x
                },
                _viscousLimit: function (t, n) {
                    return t - (t - n) * this._viscosity
                },
                _onPreDragLimit: function () {
                    if (!(!this._viscosity || !this._offsetLimit)) {
                        var t = this._draggable._newPos.subtract(this._draggable._startPos),
                            n = this._offsetLimit;
                        t.x < n.min.x && (t.x = this._viscousLimit(t.x, n.min.x)), t.y < n.min.y && (t.y = this._viscousLimit(t.y, n.min.y)), t.x > n.max.x && (t.x = this._viscousLimit(t.x, n.max.x)), t.y > n.max.y && (t.y = this._viscousLimit(t.y, n.max.y)), this._draggable._newPos = this._draggable._startPos.add(t)
                    }
                },
                _onPreDragWrap: function () {
                    var t = this._worldWidth,
                        n = Math.round(t / 2),
                        o = this._initialWorldOffset,
                        s = this._draggable._newPos.x,
                        u = (s - n + o) % t + n - o,
                        h = (s + n + o) % t - n - o,
                        b = Math.abs(u + o) < Math.abs(h + o) ? u : h;
                    this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = b
                },
                _onDragEnd: function (t) {
                    var n = this._map,
                        o = n.options,
                        s = !o.inertia || t.noInertia || this._times.length < 2;
                    if (n.fire("dragend", t), s) n.fire("moveend");
                    else {
                        this._prunePositions(+new Date);
                        var u = this._lastPos.subtract(this._positions[0]),
                            h = (this._lastTime - this._times[0]) / 1e3,
                            b = o.easeLinearity,
                            S = u.multiplyBy(b / h),
                            T = S.distanceTo([0, 0]),
                            N = Math.min(o.inertiaMaxSpeed, T),
                            q = S.multiplyBy(N / T),
                            c1 = N / (o.inertiaDeceleration * b),
                            P1 = q.multiplyBy(-c1 / 2).round();
                        !P1.x && !P1.y ? n.fire("moveend") : (P1 = n._limitOffset(P1, n.options.maxBounds), v1(function () {
                            n.panBy(P1, {
                                duration: c1,
                                easeLinearity: b,
                                noMoveStart: !0,
                                animate: !0
                            })
                        }))
                    }
                }
            });
            S1.addInitHook("addHandler", "dragging", Ve), S1.mergeOptions({
                keyboard: !0,
                keyboardPanDelta: 80
            });
            var qe = N4.extend({
                keyCodes: {
                    left: [37],
                    right: [39],
                    down: [40],
                    up: [38],
                    zoomIn: [187, 107, 61, 171],
                    zoomOut: [189, 109, 54, 173]
                },
                initialize: function (t) {
                    this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta)
                },
                addHooks: function () {
                    var t = this._map._container;
                    t.tabIndex <= 0 && (t.tabIndex = "0"), _1(t, {
                        focus: this._onFocus,
                        blur: this._onBlur,
                        mousedown: this._onMouseDown
                    }, this), this._map.on({
                        focus: this._addHooks,
                        blur: this._removeHooks
                    }, this)
                },
                removeHooks: function () {
                    this._removeHooks(), Z1(this._map._container, {
                        focus: this._onFocus,
                        blur: this._onBlur,
                        mousedown: this._onMouseDown
                    }, this), this._map.off({
                        focus: this._addHooks,
                        blur: this._removeHooks
                    }, this)
                },
                _onMouseDown: function () {
                    if (!this._focused) {
                        var t = document.body,
                            n = document.documentElement,
                            o = t.scrollTop || n.scrollTop,
                            s = t.scrollLeft || n.scrollLeft;
                        this._map._container.focus(), window.scrollTo(s, o)
                    }
                },
                _onFocus: function () {
                    this._focused = !0, this._map.fire("focus")
                },
                _onBlur: function () {
                    this._focused = !1, this._map.fire("blur")
                },
                _setPanDelta: function (t) {
                    var n = this._panKeys = {},
                        o = this.keyCodes,
                        s, u;
                    for (s = 0, u = o.left.length; s < u; s++) n[o.left[s]] = [-1 * t, 0];
                    for (s = 0, u = o.right.length; s < u; s++) n[o.right[s]] = [t, 0];
                    for (s = 0, u = o.down.length; s < u; s++) n[o.down[s]] = [0, t];
                    for (s = 0, u = o.up.length; s < u; s++) n[o.up[s]] = [0, -1 * t]
                },
                _setZoomDelta: function (t) {
                    var n = this._zoomKeys = {},
                        o = this.keyCodes,
                        s, u;
                    for (s = 0, u = o.zoomIn.length; s < u; s++) n[o.zoomIn[s]] = t;
                    for (s = 0, u = o.zoomOut.length; s < u; s++) n[o.zoomOut[s]] = -t
                },
                _addHooks: function () {
                    _1(document, "keydown", this._onKeyDown, this)
                },
                _removeHooks: function () {
                    Z1(document, "keydown", this._onKeyDown, this)
                },
                _onKeyDown: function (t) {
                    if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                        var n = t.keyCode,
                            o = this._map,
                            s;
                        if (n in this._panKeys) {
                            if (!o._panAnim || !o._panAnim._inProgress)
                                if (s = this._panKeys[n], t.shiftKey && (s = J(s).multiplyBy(3)), o.options.maxBounds && (s = o._limitOffset(J(s), o.options.maxBounds)), o.options.worldCopyJump) {
                                    var u = o.wrapLatLng(o.unproject(o.project(o.getCenter()).add(s)));
                                    o.panTo(u)
                                } else o.panBy(s)
                        } else if (n in this._zoomKeys) o.setZoom(o.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[n]);
                        else if (n === 27 && o._popup && o._popup.options.closeOnEscapeKey) o.closePopup();
                        else return;
                        b2(t)
                    }
                }
            });
            S1.addInitHook("addHandler", "keyboard", qe), S1.mergeOptions({
                scrollWheelZoom: !0,
                wheelDebounceTime: 40,
                wheelPxPerZoomLevel: 60
            });
            var Je = N4.extend({
                addHooks: function () {
                    _1(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0
                },
                removeHooks: function () {
                    Z1(this._map._container, "wheel", this._onWheelScroll, this)
                },
                _onWheelScroll: function (t) {
                    var n = xe(t),
                        o = this._map.options.wheelDebounceTime;
                    this._delta += n, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
                    var s = Math.max(o - (+new Date - this._startTime), 0);
                    clearTimeout(this._timer), this._timer = setTimeout(d(this._performZoom, this), s), b2(t)
                },
                _performZoom: function () {
                    var t = this._map,
                        n = t.getZoom(),
                        o = this._map.options.zoomSnap || 0;
                    t._stop();
                    var s = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
                        u = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(s)))) / Math.LN2,
                        h = o ? Math.ceil(u / o) * o : u,
                        b = t._limitZoom(n + (this._delta > 0 ? h : -h)) - n;
                    this._delta = 0, this._startTime = null, b && (t.options.scrollWheelZoom === "center" ? t.setZoom(n + b) : t.setZoomAround(this._lastMousePos, n + b))
                }
            });
            S1.addInitHook("addHandler", "scrollWheelZoom", Je);
            var F8 = 600;
            S1.mergeOptions({
                tapHold: t1.touchNative && t1.safari && t1.mobile,
                tapTolerance: 15
            });
            var Ye = N4.extend({
                addHooks: function () {
                    _1(this._map._container, "touchstart", this._onDown, this)
                },
                removeHooks: function () {
                    Z1(this._map._container, "touchstart", this._onDown, this)
                },
                _onDown: function (t) {
                    if (clearTimeout(this._holdTimeout), t.touches.length === 1) {
                        var n = t.touches[0];
                        this._startPos = this._newPos = new k(n.clientX, n.clientY), this._holdTimeout = setTimeout(d(function () {
                            this._cancel(), this._isTapValid() && (_1(document, "touchend", t4), _1(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", n))
                        }, this), F8), _1(document, "touchend touchcancel contextmenu", this._cancel, this), _1(document, "touchmove", this._onMove, this)
                    }
                },
                _cancelClickPrevent: function t() {
                    Z1(document, "touchend", t4), Z1(document, "touchend touchcancel", t)
                },
                _cancel: function () {
                    clearTimeout(this._holdTimeout), Z1(document, "touchend touchcancel contextmenu", this._cancel, this), Z1(document, "touchmove", this._onMove, this)
                },
                _onMove: function (t) {
                    var n = t.touches[0];
                    this._newPos = new k(n.clientX, n.clientY)
                },
                _isTapValid: function () {
                    return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
                },
                _simulateEvent: function (t, n) {
                    var o = new MouseEvent(t, {
                        bubbles: !0,
                        cancelable: !0,
                        view: window,
                        screenX: n.screenX,
                        screenY: n.screenY,
                        clientX: n.clientX,
                        clientY: n.clientY
                    });
                    o._simulated = !0, n.target.dispatchEvent(o)
                }
            });
            S1.addInitHook("addHandler", "tapHold", Ye), S1.mergeOptions({
                touchZoom: t1.touch,
                bounceAtZoomLimits: !0
            });
            var Xe = N4.extend({
                addHooks: function () {
                    x1(this._map._container, "leaflet-touch-zoom"), _1(this._map._container, "touchstart", this._onTouchStart, this)
                },
                removeHooks: function () {
                    W1(this._map._container, "leaflet-touch-zoom"), Z1(this._map._container, "touchstart", this._onTouchStart, this)
                },
                _onTouchStart: function (t) {
                    var n = this._map;
                    if (!(!t.touches || t.touches.length !== 2 || n._animatingZoom || this._zooming)) {
                        var o = n.mouseEventToContainerPoint(t.touches[0]),
                            s = n.mouseEventToContainerPoint(t.touches[1]);
                        this._centerPoint = n.getSize()._divideBy(2), this._startLatLng = n.containerPointToLatLng(this._centerPoint), n.options.touchZoom !== "center" && (this._pinchStartLatLng = n.containerPointToLatLng(o.add(s)._divideBy(2))), this._startDist = o.distanceTo(s), this._startZoom = n.getZoom(), this._moved = !1, this._zooming = !0, n._stop(), _1(document, "touchmove", this._onTouchMove, this), _1(document, "touchend touchcancel", this._onTouchEnd, this), t4(t)
                    }
                },
                _onTouchMove: function (t) {
                    if (!(!t.touches || t.touches.length !== 2 || !this._zooming)) {
                        var n = this._map,
                            o = n.mouseEventToContainerPoint(t.touches[0]),
                            s = n.mouseEventToContainerPoint(t.touches[1]),
                            u = o.distanceTo(s) / this._startDist;
                        if (this._zoom = n.getScaleZoom(u, this._startZoom), !n.options.bounceAtZoomLimits && (this._zoom < n.getMinZoom() && u < 1 || this._zoom > n.getMaxZoom() && u > 1) && (this._zoom = n._limitZoom(this._zoom)), n.options.touchZoom === "center") {
                            if (this._center = this._startLatLng, u === 1) return
                        } else {
                            var h = o._add(s)._divideBy(2)._subtract(this._centerPoint);
                            if (u === 1 && h.x === 0 && h.y === 0) return;
                            this._center = n.unproject(n.project(this._pinchStartLatLng, this._zoom).subtract(h), this._zoom)
                        }
                        this._moved || (n._moveStart(!0, !1), this._moved = !0), T1(this._animRequest);
                        var b = d(n._move, n, this._center, this._zoom, {
                            pinch: !0,
                            round: !1
                        }, void 0);
                        this._animRequest = v1(b, this, !0), t4(t)
                    }
                },
                _onTouchEnd: function () {
                    if (!this._moved || !this._zooming) {
                        this._zooming = !1;
                        return
                    }
                    this._zooming = !1, T1(this._animRequest), Z1(document, "touchmove", this._onTouchMove, this), Z1(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))
                }
            });
            S1.addInitHook("addHandler", "touchZoom", Xe), S1.BoxZoom = We, S1.DoubleClickZoom = Ke, S1.Drag = Ve, S1.Keyboard = qe, S1.ScrollWheelZoom = Je, S1.TapHold = Ye, S1.TouchZoom = Xe, r.Bounds = y1, r.Browser = t1, r.CRS = A, r.Canvas = He, r.Circle = X5, r.CircleMarker = $3, r.Class = Y1, r.Control = C4, r.DivIcon = Ge, r.DivOverlay = B4, r.DomEvent = Y9, r.DomUtil = q9, r.Draggable = a2, r.Evented = Y, r.FeatureGroup = K4, r.GeoJSON = q4, r.GridLayer = c3, r.Handler = N4, r.Icon = D2, r.ImageOverlay = q3, r.LatLng = s1, r.LatLngBounds = A1, r.Layer = I4, r.LayerGroup = R2, r.LineUtil = c8, r.Map = S1, r.Marker = U3, r.Mixin = o8, r.Path = l2, r.Point = k, r.PolyUtil = r8, r.Polygon = N2, r.Polyline = V4, r.Popup = J3, r.PosAnimation = be, r.Projection = d8, r.Rectangle = je, r.Renderer = J4, r.SVG = h3, r.SVGOverlay = Be, r.TileLayer = G2, r.Tooltip = Y3, r.Transformation = n1, r.Util = K1, r.VideoOverlay = Ne, r.bind = d, r.bounds = b1, r.canvas = Ue, r.circle = v8, r.circleMarker = _8, r.control = a3, r.divIcon = L8, r.extend = l, r.featureGroup = m8, r.geoJSON = De, r.geoJson = w8, r.gridLayer = C8, r.icon = g8, r.imageOverlay = P8, r.latLng = u1, r.latLngBounds = p1, r.layerGroup = p8, r.map = X9, r.marker = y8, r.point = J, r.polygon = b8, r.polyline = x8, r.popup = T8, r.rectangle = A8, r.setOptions = C, r.stamp = f, r.svg = $e, r.svgOverlay = S8, r.tileLayer = ze, r.tooltip = E8, r.transformation = y, r.version = a, r.videoOverlay = M8;
            var O8 = window.L;
            r.noConflict = function () {
                return window.L = O8, this
            }, window.L = r
        })
    }(y3, y3.exports)), y3.exports
}
var _r = yr();
const n4 = mr(_r),
    x9 = "" + new URL("blue-mark-BH8Hk_p7.png",
        import.meta.url).href,
    vr = {
        class: "relative w-full h-full"
    },
    xr = {
        class: "flex absolute w-full z-[999999]"
    },
    br = ["disabled"],
    wr = {
        __name: "MiniMap",
        props: {
            toggleMiniMapBtnState: Function,
            minimapRef: Object
        },
        setup(e, {
            emit: i
        }) {
            const r = o2(),
                a = i,
                l = o1(2),
                c = o1([47.41322, -1.219482]),
                d = o1(!1),
                p = o1(!0),
                f = o1(!1),
                m = JSON.parse(localStorage.getItem("streetView-location")),
                g = Number(localStorage.getItem("mapType")),
                _ = localStorage.getItem("multiPlayer") === "true",
                x = JSON.parse(localStorage.getItem("countrySlug"));
            let P = null,
                E = null,
                C = null;
            const G = o1({
                latitude: null,
                longitude: null
            }),
                K = () => {
                    _ && (p.value = !0, f.value = !0);
                    const Z = {
                        lat: Number(G.value.latitude),
                        lng: Number(G.value.longitude)
                    };
                    localStorage.setItem("guess-location", JSON.stringify(Z)), localStorage.setItem("use-hint", d.value), x && x.countryCode ? r.push(`/full-view/${x.countryCode}`) : _ ? setTimeout(() => {
                        r.push({
                            path: "/full-view"
                        })
                    }, y2.multiPlayerGuessTimeout * 1e3) : r.push({
                        path: "/full-view"
                    })
                },
                z = () => {
                    P && !C && (d.value = !0, C = n4.circle([m.lat, m.lng], {
                        color: "#C4D9FF",
                        fillColor: "#024CAA",
                        fillOpacity: .2,
                        radius: 25e5
                    }).addTo(P))
                };
            return O4(() => {
                P = n4.map("map", {
                    attributionControl: !1,
                    zoomControl: !0
                }).setView(c.value, l.value);
                const Z = {
                    1: {
                        url: "https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&hl=en",
                        options: {
                            subdomains: ["mt0", "mt1", "mt2", "mt3"],
                            attribution: ""
                        }
                    },
                    2: {
                        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                        options: {
                            attribution: '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                        }
                    }
                };
                Z[g] && n4.tileLayer(Z[g].url, Z[g].options).addTo(P), P.setMaxZoom(10), P.setMinZoom(1);
                const j = n4.icon({
                    iconUrl: x9,
                    iconSize: [25, 35],
                    iconAnchor: [16, 32],
                    popupAnchor: [0, -32]
                });
                P.on("click", e1 => {
                    p.value = !1, G.value.latitude = e1.latlng.lat, G.value.longitude = e1.latlng.lng, E ? (E.setLatLng(e1.latlng), E.openTooltip()) : E = n4.marker(e1.latlng, {
                        icon: j
                    }).addTo(P).bindTooltip("Your Guess", {
                        permanent: !0,
                        direction: "right"
                    }).openTooltip()
                }), a("mapInitialized", P), document.querySelector(".minimap").addEventListener("transitionend", () => {
                    P.invalidateSize()
                })
            }), (Z, j) => (X(), Q("div", vr, [j[2] || (j[2] = w("div", {
                class: "w-full h-full",
                id: "map"
            }, null, -1)), w("div", xr, [w("button", {
                class: T4(["bg-bg-dard w-full rounded-[5px] text-white text-2xl font-jockey_one", p.value ? "cursor-not-allowed" : ""]),
                onClick: K,
                disabled: p.value
            }, L1(_ && f.value ? "Waiting for other players" : "Guess"), 11, br), w("button", {
                class: "bg-bg-green w-[200px] rounded-[5px] text-white text-2xl font-jockey_one",
                onClick: z
            }, "Hint"), w("button", {
                class: "cartoon-button rounded-[5px] text-white text-2xl block lg:hidden",
                onClick: j[0] || (j[0] = (...l1) => e.toggleMiniMapBtnState && e.toggleMiniMapBtnState(...l1))
            }, j[1] || (j[1] = [w("i", {
                class: "pi pi-map text-2xl p-2 px-4"
            }, null, -1)]))])]))
        }
    },
    Pr = "" + new URL("red-mark-yQpXqhhB.png",
        import.meta.url).href,
    Mr = "" + new URL("green-mark-DOostFXc.png",
        import.meta.url).href,
    b9 = "" + new URL("trophy-BioVpPYw.png",
        import.meta.url).href,
    Sr = {
        class: "relative bg-white text-center font-jockey_one p-5 rounded-lg"
    },
    Tr = {
        class: "flex gap-3 items-center justify-center my-5"
    },
    Er = ["src"],
    Lr = {
        class: "text-2xl"
    },
    Cr = {
        class: "flex flex-col gap-3"
    },
    Ir = {
        class: ""
    },
    kr = {
        class: "text-2xl"
    },
    Ar = {
        class: "border-b-2 border-blue"
    },
    Fr = {
        class: "text-2xl"
    },
    Or = {
        class: "border-b-2 border-blue"
    },
    Rr = {
        class: "text-2xl"
    },
    Dr = {
        class: "border-b-2 border-blue"
    },
    Nr = {
        class: "text-2xl"
    },
    Br = {
        class: "border-b-2 border-blue"
    },
    Gr = {
        class: "text-2xl"
    },
    zr = {
        class: "border-b-2 border-blue"
    },
    Zr = {
        class: "mt-[30px]"
    },
    w9 = {
        __name: "ViewResult",
        props: {
            sinlgePlayerPlayAgain: Function()
        },
        setup(e) {
            const i = o2(),
                r = Number(localStorage.getItem("round1Point")),
                a = Number(localStorage.getItem("round2Point")),
                l = Number(localStorage.getItem("round3Point")),
                c = Number(localStorage.getItem("round4Point")),
                d = Number(localStorage.getItem("round5Point")),
                p = Number(localStorage.getItem("points")),
                f = JSON.parse(localStorage.getItem("countrySlug")),
                m = o1(Number(localStorage.getItem("mapType")) || 1);
            n2(m, _ => {
                console.log("Map Type Changed to:", _), m.value = _, localStorage.setItem("mapType", _)
            });
            const g = () => {
                $4(), localStorage.setItem("rounds", 1), localStorage.setItem("mapType", m.value), f && f.countryCode ? (i.push(`/street-view/${f.countryCode}`), localStorage.setItem("countrySlug", JSON.stringify(f))) : i.push({
                    path: "/street-view"
                })
            };
            return (_, x) => (X(), Q("div", Sr, [x[10] || (x[10] = Cn('<div class="mb-5"><h1 class="text-6xl">Round Over!</h1><div class="flex gap-3 justify-center items-center text-4xl my-5"><p><i class="pi pi-star-fill text-bg-light-gray"></i></p><p><i class="pi pi-star-fill text-bg-light-gray"></i></p><p><i class="pi pi-star-fill text-bg-light-gray"></i></p><p><i class="pi pi-star-fill text-bg-light-gray"></i></p></div></div>', 1)), w("div", Tr, [w("img", {
                src: h1(b9),
                alt: "trophy",
                class: "w-[30px]"
            }, null, 8, Er), w("div", Lr, [w("p", null, [x[1] || (x[1] = k1("Points: ")), w("span", null, L1(h1(p)), 1), x[2] || (x[2] = k1(" / ")), x[3] || (x[3] = w("span", null, "25000", -1))])])]), w("div", Cr, [x[9] || (x[9] = w("h2", {
                class: "text-3xl"
            }, "History", -1)), w("div", Ir, [w("p", kr, [w("span", Ar, [x[4] || (x[4] = k1(" #1 - Points: ")), w("span", null, L1(h1(r)), 1)])]), w("p", Fr, [w("span", Or, [x[5] || (x[5] = k1(" #2 - Points: ")), w("span", null, L1(h1(a)), 1)])]), w("p", Rr, [w("span", Dr, [x[6] || (x[6] = k1(" #3 - Points: ")), w("span", null, L1(h1(l)), 1)])]), w("p", Nr, [w("span", Br, [x[7] || (x[7] = k1(" #4 - Points: ")), w("span", null, L1(h1(c)), 1)])]), w("p", Gr, [w("span", zr, [x[8] || (x[8] = k1(" #5 - Points: ")), w("span", null, L1(h1(d)), 1)])])])]), w("div", Zr, [w("button", {
                class: "bg-blue-min-light px-[20px] py-[15px] rounded-lg text-white text-2xl",
                onClick: x[0] || (x[0] = P => (g(), e.sinlgePlayerPlayAgain()))
            }, "Play Again")])]))
        }
    },
    Hr = {
        class: "multi-player-result"
    },
    Ur = {
        class: "flex justify-between"
    },
    $r = {
        class: "flex gap-4"
    },
    jr = ["src"],
    Wr = {
        class: "text-2xl font-jockey_one font-bold text-[#4f5a63]"
    },
    Kr = {
        key: 0
    },
    Vr = {
        key: 0,
        class: "flex justify-center mt-3"
    },
    qr = {
        __name: "MulitPlayerViewResult",
        setup(e) {
            const i = o2(),
                r = v9(),
                a = o1([]),
                l = o1([]),
                c = o1(!1),
                d = o1(Number(localStorage.getItem("mapType")) || 1),
                p = localStorage.getItem("playerName"),
                f = JSON.parse(localStorage.getItem("guess-location")),
                m = JSON.parse(localStorage.getItem("streetView-location")),
                g = Number(localStorage.getItem("points")) || 0,
                _ = Number(localStorage.getItem("currentPoints")) || 0,
                x = Number(localStorage.getItem("rounds")),
                P = JSON.parse(localStorage.getItem(`AIGuess-round-${x}`)),
                E = JSON.parse(localStorage.getItem("multiPlayer-result")) || [];

            function C(e1) {
                return e1 * Math.PI / 180
            }

            function G(e1, r1, f1, N1) {
                const v1 = C(f1 - e1),
                    T1 = C(N1 - r1),
                    K1 = Math.sin(v1 / 2) * Math.sin(v1 / 2) + Math.cos(C(e1)) * Math.cos(C(f1)) * Math.sin(T1 / 2) * Math.sin(T1 / 2);
                return 6371 * (2 * Math.atan2(Math.sqrt(K1), Math.sqrt(1 - K1)))
            }

            function K({
                lat: e1,
                lon: r1,
                guessLat: f1,
                guessLon: N1,
                maxDist: $1
            }) {
                const v1 = G(e1, r1, f1, N1);
                let T1 = 5e3 * Math.E ** (-5 * (v1 / $1));
                return T1 > 4997 && (T1 = 5e3), T1 < 0 && (T1 = 0), Math.round(T1)
            }
            const z = () => {
                const e1 = [];
                P.forEach(r1 => {
                    const f1 = K({
                        lat: m.lat,
                        lon: m.lng,
                        guessLat: r1.guess.lat,
                        guessLon: r1.guess.lng,
                        maxDist: 1e4
                    });
                    e1.push({
                        name: r1.name,
                        points: f1
                    })
                }), e1.push({
                    name: p + " (You)",
                    points: f ? _ : 0,
                    isRealPlayer: !0
                }), a.value = e1, E.push({
                    aiPlayerResult: e1
                }), localStorage.setItem("multiPlayer-result", JSON.stringify(E)), Z(), a.value = l.value.map(r1 => {
                    const f1 = e1.find(N1 => N1.name === r1.name);
                    return {
                        ...r1,
                        points: f1 ? f1.points : 0,
                        isRealPlayer: r1.name === p + " (You)"
                    }
                })
            },
                Z = () => {
                    const e1 = {};
                    E.forEach(r1 => {
                        r1.aiPlayerResult.forEach(f1 => {
                            e1[f1.name] || (e1[f1.name] = 0), e1[f1.name] += f1.points
                        })
                    }), e1[p + " (You)"] !== void 0 && (e1[p + " (You)"] = g), l.value = Object.entries(e1).map(([r1, f1]) => ({
                        name: r1,
                        points: f1
                    })), l.value.sort((r1, f1) => f1.points - r1.points)
                },
                j = () => {
                    const e1 = x + 1;
                    localStorage.setItem("rounds", e1), localStorage.removeItem("guess-location"), i.push("/multiplayerGame")
                },
                l1 = () => {
                    $4(), localStorage.setItem("multiPlayer", !0), localStorage.setItem("rounds", 1), localStorage.setItem("mapType", d.value), localStorage.setItem("playerName", p), i.push("/multiplayerGame")
                };
            return O4(() => {
                z(), x === 5 ? c.value = !0 : setTimeout(() => {
                    r.path === "/full-view" && j()
                }, y2.multiPlayerNextRoundTimeout * 1e3)
            }), (e1, r1) => (X(), Q("div", Hr, [w("h1", {
                class: T4(["text-center font-jockey_one text-6xl", c.value ? "text-single-player-btn-bg" : "text-white"])
            }, L1(c.value ? "Game Over" : "Leaderboard"), 3), (X(!0), Q(y4, null, Pt(a.value, (f1, N1) => {
                var $1;
                return X(), Q("div", {
                    key: N1,
                    class: "bg-[#f6f7f7] p-4 rounded-md mt-3"
                }, [w("div", Ur, [w("h2", {
                    class: T4(["text-2xl font-jockey_one font-bold", f1.isRealPlayer ? "text-[#00BCD4]" : "text-[#cd6063]"])
                }, " #" + L1(N1 + 1) + " - " + L1(f1.name), 3), w("div", $r, [c.value && N1 === 0 ? (X(), Q("img", {
                    key: 0,
                    src: h1(b9),
                    alt: "Winner Trophy",
                    class: "w-8 h-8 ml-2"
                }, null, 8, jr)) : E1("", !0), w("h2", Wr, [k1(L1((($1 = l.value.find(v1 => v1.name === f1.name)) == null ? void 0 : $1.points) || 0) + " ", 1), c.value ? E1("", !0) : (X(), Q("span", Kr, " ( " + L1(f1.points) + " )", 1))])])])])
            }), 128)), c.value ? (X(), Q("div", Vr, [w("button", {
                onClick: l1,
                class: "cartoon-button playAgain-button px-[40px] py-1"
            }, "Play Again")])) : E1("", !0)]))
        }
    },
    Jr = I2(qr, [
        ["__scopeId", "data-v-ff3a1d14"]
    ]),
    Yr = {
        class: "relative w-full h-full flex justify-center"
    },
    Xr = {
        key: 0,
        class: "fixed top-0 navbar-header w-full z-[9999999] px-4 py-2 text-white"
    },
    Qr = {
        class: "flex gap-4 items-center justify-between"
    },
    ts = {
        class: "flex gap-1 items-center"
    },
    es = {
        key: 1,
        class: "text-4xl font-bold"
    },
    ns = {
        class: "login font-jockey_one"
    },
    is = {
        class: ""
    },
    os = {
        key: 0,
        class: "flex items-center justify-end mt-2 lg:mt-0 gap-2 ml-auto"
    },
    rs = {
        class: "p-3 round rounded-lg font-jockey_one text-3xl",
        style: {
            "background-color": "rgba(42, 44, 71, 0.5)"
        }
    },
    ss = {
        class: ""
    },
    as = {
        class: "fixed bottom-0 z-[9999] px-4 py-3 text-center my-2 mx-auto w-full sm:w-[500px] md:w-[500px] lg:w-[500px] rounded-md bg-bg-light-gray backdrop-blur-[10px] text-white font-jockey_one"
    },
    ls = {
        key: 0,
        class: "mb-3"
    },
    us = {
        class: "text-3xl md:text-4xl lg:text-4xl mb-3"
    },
    cs = {
        class: "text-2xl md:text-3xl lg:text-3xl"
    },
    ds = {
        key: 1,
        class: "mb-3"
    },
    hs = {
        key: 2,
        class: "mb-3"
    },
    fs = {
        key: 3,
        class: "flex gap-3 justify-center items-center mt-5"
    },
    ps = {
        key: 1,
        id: "default-modal",
        class: "z-[999999] flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 justify-center items-center w-full md:inset-0 h-full max-h-full"
    },
    ms = {
        class: "relative p-4 w-full max-w-2xl max-h-full"
    },
    gs = {
        class: "relative bg-white rounded-lg shadow dark:bg-gray-700"
    },
    ys = {
        key: 2,
        id: "multi-player-modal",
        class: "z-[999999] flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 justify-center items-center w-full md:inset-0 h-full max-h-full"
    },
    _s = {
        class: "relative p-4 w-full max-w-2xl max-h-full"
    },
    vs = {
        key: 3,
        class: "z-[999999] flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 justify-center items-center w-full md:inset-0 h-full max-h-full"
    },
    xs = {
        __name: "FullGoogleMap",
        props: {},
        setup(e) {
            const i = o2(),
                r = o1(2),
                a = o1([47.41322, -1.219482]),
                l = o1(null),
                c = o1(null),
                d = o1(0),
                p = o1(!1),
                f = o1(!1),
                m = o1(!1),
                g = Number(localStorage.getItem("round1Point")) || 0,
                _ = Number(localStorage.getItem("round2Point")) || 0,
                x = Number(localStorage.getItem("round3Point")) || 0,
                P = Number(localStorage.getItem("round4Point")) || 0,
                E = Number(localStorage.getItem("rounds")),
                C = JSON.parse(localStorage.getItem("guess-location")),
                G = JSON.parse(localStorage.getItem("streetView-location")),
                K = Number(localStorage.getItem("mapType")),
                z = localStorage.getItem("use-hint"),
                Z = JSON.parse(localStorage.getItem("countrySlug")),
                j = o1([]),
                l1 = localStorage.getItem("multiPlayer") === "true";
            JSON.parse(localStorage.getItem("AIGuess"));
            const e1 = () => {
                const Y = localStorage.getItem("fakePlayers");
                try {
                    j.value = Y ? JSON.parse(Y) : [], Array.isArray(j.value) || (j.value = [])
                } catch (k) {
                    console.error("Error parsing fakePlayers from localStorage:", k), j.value = []
                }
            };
            let r1 = 0;
            l1 && (r1 = h4(() => j.value.length + 1));

            function f1(Y) {
                return Y * Math.PI / 180
            }

            function N1(Y, k, z1, J) {
                const b1 = f1(z1 - Y),
                    A1 = f1(J - k),
                    p1 = Math.sin(b1 / 2) * Math.sin(b1 / 2) + Math.cos(f1(Y)) * Math.cos(f1(z1)) * Math.sin(A1 / 2) * Math.sin(A1 / 2);
                return 6371 * (2 * Math.atan2(Math.sqrt(p1), Math.sqrt(1 - p1)))
            }

            function $1({
                lat: Y,
                lon: k,
                guessLat: z1,
                guessLon: J,
                usedHint: y1,
                maxDist: b1
            }) {
                const A1 = N1(Y, k, z1, J);
                let p1 = 5e3 * Math.E ** (-5 * (A1 / b1));
                return y1 && (p1 -= 500), p1 > 4997 && (p1 = 5e3), p1 < 0 && (p1 = 0), Math.round(p1)
            }
            if (C && G && !isNaN(C.lat) && !isNaN(C.lng) && !isNaN(G.lat) && !isNaN(G.lng)) {
                const Y = N1(C.lat, C.lng, G.lat, G.lng);
                l.value = Math.floor(Y);
                const k = $1({
                    lat: G.lat,
                    lon: G.lng,
                    guessLat: C.lat,
                    guessLon: C.lng,
                    usedHint: z,
                    maxDist: 1e4
                });
                c.value = k, d.value = g + _ + x + P + k, E === 1 ? localStorage.setItem("round1Point", c.value) : E === 2 ? localStorage.setItem("round2Point", c.value) : E === 3 ? localStorage.setItem("round3Point", c.value) : E === 4 ? localStorage.setItem("round4Point", c.value) : localStorage.setItem("round5Point", c.value), localStorage.setItem("points", d.value), localStorage.setItem("currentPoints", k), localStorage.setItem("distanceResult", Math.floor(Y))
            } else console.error("Invalid coordinates: Ensure valid lat/lng values in localStorage.");
            const v1 = () => {
                const Y = localStorage.getItem("playerName");
                $4(), i.push({
                    path: "/"
                }), localStorage.setItem("mapType", K), l1 && Y && localStorage.setItem("playerName", Y)
            },
                T1 = () => {
                    window.location.reload()
                },
                K1 = () => {
                    m.value = !m.value, localStorage.setItem("communityMapPlayState", !0), localStorage.setItem("fullViewState", !0)
                },
                Y1 = () => {
                    const Y = E + 1;
                    localStorage.setItem("rounds", Y), localStorage.removeItem("guess-location"), localStorage.removeItem("communityMapPlayState"), Z && Z.countryCode ? i.push(`/street-view/${Z.countryCode}`) : i.push({
                        path: "/street-view"
                    })
                },
                x4 = () => {
                    i.push({
                        path: "/street-view"
                    }), localStorage.setItem("streetViewState", !0)
                },
                M1 = () => {
                    p.value = !0
                };
            return O4(() => {
                let Y = [];
                try {
                    Y = JSON.parse(localStorage.getItem(`AIGuess-round-${E}`)) || [], Array.isArray(Y) || (Y = [])
                } catch (s1) {
                    console.error("Error parsing AIGuess from localStorage:", s1), Y = []
                }
                const k = n4.map("map", {
                    center: a.value,
                    zoom: r.value,
                    zoomControl: !1,
                    attributionControl: !1
                }),
                    z1 = {
                        1: {
                            url: "https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&hl=en",
                            options: {
                                subdomains: ["mt0", "mt1", "mt2", "mt3"],
                                attribution: ""
                            }
                        },
                        2: {
                            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                            options: {
                                attribution: '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                            }
                        }
                    };
                z1[K] && n4.tileLayer(z1[K].url, z1[K].options).addTo(k), n4.control.zoom({
                    position: "bottomleft"
                }).addTo(k);
                const y1 = new n4.Icon({
                    iconUrl: x9,
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34]
                }),
                    b1 = new n4.Icon({
                        iconUrl: Pr,
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34]
                    }),
                    A1 = new n4.Icon({
                        iconUrl: Mr,
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34]
                    });
                C && C.lat !== void 0 && C.lng !== void 0 ? n4.marker([C.lat, C.lng], {
                    icon: y1
                }).addTo(k).bindPopup("Your Guess").bindTooltip("Your Guess", {
                    permanent: !0,
                    className: "custom-tooltip",
                    direction: "right"
                }) : console.warn("No guess was made, skipping guess marker."), G && G.lat !== void 0 && G.lng !== void 0 ? n4.marker([G.lat, G.lng], {
                    icon: b1
                }).addTo(k).bindPopup("Actual Location") : console.warn("Missing actual location marker."), C && G && C.lat !== void 0 && C.lng !== void 0 && G.lat !== void 0 && G.lng !== void 0 && n4.polyline([
                    [C.lat, C.lng],
                    [G.lat, G.lng]
                ], {
                    color: "#34A7D3",
                    weight: 4
                }).addTo(k), l1 === !0 && Y.length > 0 ? Y.forEach((s1, u1) => {
                    s1.guess && s1.guess.lat !== void 0 && s1.guess.lng !== void 0 && (n4.marker([s1.guess.lat, s1.guess.lng], {
                        icon: A1
                    }).addTo(k).bindPopup(`Fake Player ${u1 + 1}'s Guess`).bindTooltip(`${s1.name}`, {
                        permanent: !0,
                        className: "custom-tooltip",
                        direction: "right"
                    }), G && G.lat !== void 0 && G.lng !== void 0 && n4.polyline([
                        [s1.guess.lat, s1.guess.lng],
                        [G.lat, G.lng]
                    ], {
                        color: "#43C44D",
                        weight: 4
                    }).addTo(k))
                }) : console.log("Single-player mode detected, skipping AI guesses.");
                const p1 = [];
                C && C.lat !== void 0 && p1.push([C.lat, C.lng]), G && G.lat !== void 0 && p1.push([G.lat, G.lng]), Y.length > 0 && Y.forEach(s1 => {
                    s1.guess && s1.guess.lat !== void 0 && p1.push([s1.guess.lat, s1.guess.lng])
                }), p1.length > 0 ? k.fitBounds(p1) : console.warn("Skipping map.fitBounds due to missing valid locations."), e1(), l1 && setTimeout(() => {
                    f.value = !0
                }, y2.multiPlayerModalTimeout * 1e3)
            }), (Y, k) => {
                var z1, J;
                return X(), Q("div", Yr, [k[15] || (k[15] = w("div", {
                    class: "w-full h-[100vh]",
                    id: "map"
                }, null, -1)), m.value ? E1("", !0) : (X(), Q("div", Xr, [w("div", Qr, [w("div", ts, [k[3] || (k[3] = w("p", {
                    class: "text-3xl hidden lg:inline-block font-jockey_one"
                }, "GlobalGuesser", -1)), k[4] || (k[4] = w("p", {
                    class: "text-3xl font-jockey_one block lg:hidden"
                }, "GG", -1)), w("button", {
                    class: "cartoon-button back-button hidden lg:block font-jockey_one bg-single-player-btn-bg px-[20px] py-[10px] rounded-2xl text-2xl",
                    onClick: v1
                }, "Back"), w("button", {
                    class: "cartoon-button font-jockey_one bg-single-player-btn-bg px-[16px] py-[5px] rounded-2xl text-2xl inline-block sm:inline-block md:hidden lg:hidden",
                    onClick: v1
                }, k[0] || (k[0] = [w("i", {
                    class: "pi pi-arrow-left"
                }, null, -1)])), l1 ? E1("", !0) : (X(), Q("button", {
                    key: 0,
                    class: "bg-blue px-[16px] py-[5px] text-2xl lg:px-[20px] lg:py-[10px] rounded-2xl",
                    onClick: T1
                }, k[1] || (k[1] = [w("i", {
                    class: "pi pi-replay"
                }, null, -1)]))), h1(r1) > 0 ? (X(), Q("p", es, [k[2] || (k[2] = w("i", {
                    class: "pi pi-user font-bold"
                }, null, -1)), k1(" " + L1(h1(r1)), 1)])) : E1("", !0)]), !h1(r1) > 0 ? (X(), Q("button", {
                    key: 0,
                    class: "cartoon-button bg-icon-bg hover:bg-icon-hover-bg transition-all duration-300 text-2xl rounded-xl px-3 py-1",
                    onClick: K1
                }, [w("div", ns, [k[5] || (k[5] = w("i", {
                    class: "pi pi-pencil text-white text-1xl mr-2"
                }, null, -1)), w("span", is, L1(h1(Z) ? h1(Z).name : "World"), 1)])])) : E1("", !0)]), !h1(r1) > 0 ? (X(), Q("div", os, [w("div", rs, [w("p", ss, [k[6] || (k[6] = k1("Round # ")), w("span", null, L1(h1(E)) + " / 5", 1), k[7] || (k[7] = k1(" - ")), w("span", null, L1(d.value), 1), k[8] || (k[8] = k1(" Points"))])])])) : E1("", !0)])), w("div", as, [l.value !== null && c.value !== null ? (X(), Q("div", ls, [w("h1", us, [k[9] || (k[9] = k1(" Your guess was ")), w("span", null, L1(l.value), 1), k[10] || (k[10] = k1(" Km away "))]), w("p", cs, "You got " + L1(c.value) + " points", 1)])) : l1 ? (X(), Q("div", ds, k[11] || (k[11] = [w("h1", {
                    class: "text-3xl md:text-4xl lg:text-4xl mb-3"
                }, "You didn't guess!", -1)]))) : E1("", !0), ((z1 = l.value) == null ? void 0 : z1.value) === null && ((J = c.value) == null ? void 0 : J.value) === null && l1 ? (X(), Q("div", hs, k[12] || (k[12] = [w("h1", {
                    class: "text-3xl md:text-4xl lg:text-4xl mb-3"
                }, "You didn't guess!", -1)]))) : E1("", !0), l1 ? E1("", !0) : (X(), Q("div", fs, [w("div", null, [h1(E) === 5 ? (X(), Q("button", {
                    key: 0,
                    class: "bg-dark-gray py-2 px-3 rounded-md",
                    onClick: M1,
                    "data-modal-target": "default-modal",
                    "data-modal-toggle": "default-modal"
                }, "View Result")) : (X(), Q("button", {
                    key: 1,
                    class: "bg-dark-gray py-2 px-3 rounded-md",
                    onClick: Y1
                }, "Next Round"))]), w("button", {
                    class: "bg-dark-gray py-2 px-3 rounded-md",
                    onClick: x4
                }, "Show Street View")]))]), p.value ? (X(), Q("div", ps, [k[13] || (k[13] = w("div", {
                    class: "overlay absolute top-0 left-0 right-0 bottom-0 bg-dark-gray opacity-50"
                }, null, -1)), w("div", ms, [w("div", gs, [G1(w9)])])])) : E1("", !0), f.value ? (X(), Q("div", ys, [k[14] || (k[14] = w("div", {
                    class: "overlay absolute top-0 left-0 right-0 bottom-0 bg-teal-700 opacity-50"
                }, null, -1)), w("div", _s, [G1(Jr)])])) : E1("", !0), m.value ? (X(), Q("div", vs, [G1(ee, {
                    communityMapStateFn: K1
                })])) : E1("", !0)])
            }
        }
    },
    t7 = I2(xs, [
        ["__scopeId", "data-v-95e2ff06"]
    ]),
    bs = {
        class: "bg-dark-gray w-full h-[100vh] overflow-y-auto"
    },
    ws = {
        class: "w-full h-full py-[30px] px-[32px] max-w-[1200px] m-auto"
    },
    Ps = {
        class: "text-white"
    },
    Ms = {
        key: 0,
        class: "flex items-center justify-center h-[50vh]"
    },
    Ss = {
        key: 1
    },
    Ts = {
        class: "mt-5"
    },
    Es = {
        class: "rounded-lg w-full h-[300px] relative bg-cover bg-center"
    },
    Ls = ["src"],
    Cs = {
        class: "country-name w-full p-5 absolute bottom-0 rounded-lg"
    },
    Is = {
        class: "text-4xl font-serif"
    },
    ks = {
        class: "text-xl font-serif"
    },
    As = {
        class: "text-white text-3xl font-jockey_one w-full inline-block mt-5"
    },
    Fs = {
        class: "mt-5"
    },
    Os = {
        class: "text-1xl font-serif"
    },
    Rs = {
        __name: "PlayCommunityMap",
        props: {
            country: String
        },
        setup(e) {
            const i = o2();
            v9();
            const r = o1(!0),
                a = JSON.parse(localStorage.getItem("countrySlug")),
                l = o1(Number(localStorage.getItem("mapType")) || 1),
                c = o1(localStorage.getItem("streetViewState") === "true"),
                d = o1(localStorage.getItem("fullViewState") === "true"),
                p = o1(localStorage.getItem("singlePlayer") === "true"),
                f = o1(localStorage.getItem("communityMapPlayState") === "true");
            n2(l, _ => {
                l.value = _, localStorage.setItem("mapType", _)
            });
            const m = _ => {
                $4(), localStorage.setItem("rounds", 1), localStorage.setItem("mapType", l.value), localStorage.setItem("countrySlug", JSON.stringify(a)), i.push(`/street-view/${_}`)
            },
                g = () => {
                    c.value || f.value || d.value ? (localStorage.removeItem("streetViewState"), localStorage.removeItem("fullViewState"), p.value && localStorage.removeItem("countrySlug", a), c.value ? i.push("/street-view") : d.value && i.push("/full-view")) : (i.push("/"), $4())
                };
            return O4(() => {
                setTimeout(() => {
                    r.value = !1
                }, y2.communityMap * 1e3)
            }), (_, x) => {
                var P;
                return X(), Q("div", bs, [w("div", ws, [w("div", Ps, [w("div", {
                    class: "flex justify-center items-center flex-col"
                }, [x[2] || (x[2] = w("h1", {
                    class: "text-6xl"
                }, "GlobalGuesser", -1)), w("button", {
                    class: "flex items-center gap-2 !text-[17px] px-3 py-2 mt-3 bg-icon-bg rounded-xl",
                    onClick: g
                }, x[1] || (x[1] = [w("i", {
                    class: "pi pi-arrow-left"
                }, null, -1), k1(" Back to Game ")]))]), x[6] || (x[6] = w("div", {
                    class: "border-b-2 border-white mt-5"
                }, null, -1)), r.value ? (X(), Q("div", Ms, x[3] || (x[3] = [w("p", {
                    class: "text-4xl text-white flex items-center gap-16"
                }, [k1("Loading "), w("span", {
                    class: "loader"
                })], -1)]))) : (X(), Q("div", Ss, [w("div", Ts, [w("div", Es, [w("img", {
                    src: `/countryImages/${(P = h1(a).countryMap) == null ? void 0 : P.toLowerCase()}.png`,
                    alt: "Country Flag",
                    class: "w-full h-full object-cover rounded-2xl"
                }, null, 8, Ls), w("div", Cs, [w("h3", Is, L1(h1(a).name), 1), w("p", ks, L1(h1(a).shortDescription), 1)])]), w("div", As, [w("button", {
                    class: "bg-icon-bg rounded-lg w-full p-3 text-center",
                    onClick: x[0] || (x[0] = E => m(h1(a).countryMap))
                }, "Play")])]), w("div", Fs, [x[4] || (x[4] = w("h5", {
                    class: "text-2xl font-serif"
                }, "About this map", -1)), w("p", Os, L1(h1(a).longDescription), 1)]), x[5] || (x[5] = w("div", {
                    class: "mt-5 text-2xl"
                }, [w("p", {
                    class: "font-serif"
                }, [k1("Created by "), w("span", {
                    class: "bold font-jockey_one"
                }, "GlobalGuesser")])], -1))]))])])])
            }
        }
    },
    Ds = I2(Rs, [
        ["__scopeId", "data-v-c1d6176e"]
    ]),
    Ns = {
        key: 0,
        class: "relative"
    },
    Bs = {
        class: "fixed top-0 navbar-header w-full z-[9999] px-4 py-2 text-white"
    },
    Gs = {
        class: "flex gap-4 items-center justify-between lg:flex"
    },
    zs = {
        class: "flex gap-1 lg:gap-3 items-center"
    },
    Zs = {
        key: 1,
        class: "text-4xl font-bold"
    },
    Hs = {
        class: "login font-jockey_one"
    },
    Us = {
        class: ""
    },
    $s = {
        class: "p-3 round rounded-lg font-jockey_one text-3xl",
        style: {
            "background-color": "rgba(42, 44, 71, 0.5)"
        }
    },
    js = {
        class: ""
    },
    Ws = {
        class: "w-full h-full"
    },
    Ks = {
        key: 1,
        class: "fixed bottom-0 left-1/2 transform -translate-x-1/2 z-[9999] px-4 py-3 text-center my-2 mx-auto w-full sm:w-[500px] md:w-[500px] lg:w-[500px] rounded-md bg-bg-light-gray backdrop-blur-[10px] text-white font-jockey_one"
    },
    Vs = {
        key: 0,
        class: "mb-3"
    },
    qs = {
        class: "text-3xl md:text-4xl lg:text-4xl mb-3"
    },
    Js = {
        class: "text-2xl md:text-3xl lg:text-3xl"
    },
    Ys = {
        class: "flex gap-3 justify-center items-center mt-5"
    },
    Xs = {
        key: 2,
        id: "street-view"
    },
    Qs = ["src"],
    ta = {
        key: 3,
        id: "default-modal",
        class: "z-[999999] flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 justify-center items-center w-full md:inset-0 h-full max-h-full"
    },
    ea = {
        class: "relative p-4 w-full max-w-2xl max-h-full"
    },
    na = {
        class: "relative bg-white rounded-lg shadow dark:bg-gray-700"
    },
    ia = {
        key: 1
    },
    oa = {
        key: 2,
        class: "z-[999999] flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 justify-center items-center w-full md:inset-0 h-full max-h-full"
    },
    ra = {
        __name: "StreetMapIframe",
        props: {
            country: String
        },
        setup(e) {
            const i = o2(),
                r = JSON.parse(localStorage.getItem("streetView-location")) || {},
                a = Number(localStorage.getItem("currentPoints")),
                l = Number(localStorage.getItem("distanceResult")),
                c = o1(localStorage.getItem("streetViewState") === "true"),
                d = o1(localStorage.getItem("communityMapPlayState") === "true"),
                p = o1(""),
                f = o1(!0),
                m = o1(!1),
                g = o1(!1),
                _ = o1(!1),
                x = o1(!1),
                P = o1(!1),
                E = o1([]),
                C = o1(y2.roundTimer);
            let G = null;
            const K = o1(Number(localStorage.getItem("rounds"))),
                z = o1(Number(localStorage.getItem("points"))),
                Z = JSON.parse(localStorage.getItem("countrySlug")),
                j = Number(localStorage.getItem("mapType")),
                l1 = localStorage.getItem("multiPlayer") === "true",
                e1 = {
                    Europe: ["AT", "BE", "BG", "CZ", "DK", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "NL", "NO", "PL", "PT", "RO", "RU", "ES", "SE", "CH", "SI", "SK", "LT", "LV", "HR", "ME", "GB"],
                    Asia: ["IN", "ID", "IL", "JP", "MY", "TH", "TR", "KR", "BD", "BT", "LK", "SG"],
                    "North America": ["CA", "US", "MX"],
                    "South America": ["AR", "BR", "CL", "CO", "PE", "PA"],
                    Africa: ["KE", "NG", "ZA", "GH", "LS"],
                    Oceania: ["AU", "NZ"]
                },
                r1 = {
                    Europe: .2,
                    Asia: .2,
                    "North America": .15,
                    "South America": .15,
                    Africa: .15,
                    Oceania: .15
                },
                f1 = () => {
                    f.value = !1
                },
                N1 = () => {
                    P.value = !P.value
                },
                $1 = () => {
                    const D = localStorage.getItem("fakePlayers");
                    try {
                        E.value = D ? JSON.parse(D) : [], Array.isArray(E.value) || (E.value = [])
                    } catch (I) {
                        console.error("Error parsing fakePlayers from localStorage:", I), E.value = []
                    }
                };
            let v1 = 0;
            l1 && (v1 = h4(() => E.value.length + 1));
            const T1 = () => {
                G = setInterval(() => {
                    C.value > 0 ? C.value = parseFloat((C.value - .1).toFixed(1)) : (clearInterval(G), C.value = 0, i.push("/full-view"))
                }, 100)
            },
                K1 = async D => {
                    try {
                        const I = `/json-countries/${D}.json`,
                            H = await fetch(I);
                        if (!H.ok) throw new Error(`Failed to fetch ${I}`);
                        const n1 = await H.json();
                        return !n1.locations || n1.locations.length === 0 ? (console.error("No locations found in JSON for", D), null) : n1.locations[Math.floor(Math.random() * n1.locations.length)]
                    } catch (I) {
                        return console.error("Error fetching JSON:", I), null
                    }
                },
                x4 = (D => {
                    const I = {};
                    return D.features.forEach(H => {
                        const n1 = H.properties.code;
                        let y = H.geometry.coordinates;
                        Array.isArray(y) && (Array.isArray(y[0]) ? y = y.flat(2) : y = [y]);
                        const v = y.map(U => U[1]),
                            M = y.map(U => U[0]),
                            F = Math.min(...v),
                            R = Math.max(...v),
                            O = Math.min(...M),
                            W = Math.max(...M);
                        I[n1] = {
                            minLat: F,
                            maxLat: R,
                            minLng: O,
                            maxLng: W
                        }
                    }), I
                })(Vo),
                M1 = async () => {
                    try {
                        const D = Y6[Math.floor(Math.random() * Y6.length)];
                        await new Promise(y => setTimeout(y, 500));
                        const I = await fetch(`/json-countries/${D}.json`);
                        if (!I.ok) throw new Error("Failed to fetch country data");
                        const H = await I.json();
                        if (!H.locations || H.locations.length === 0) throw new Error("No locations found in the selected JSON file");
                        const n1 = H.locations[Math.floor(Math.random() * H.locations.length)];
                        return {
                            lat: n1.lat,
                            lng: n1.lng
                        }
                    } catch (D) {
                        return console.error("Error fetching random location:", D), null
                    }
                },
                Y = () => {
                    const D = Math.random();
                    let I = 0;
                    for (const [H, n1] of Object.entries(r1))
                        if (I += n1, D < I) return H;
                    return "Europe"
                },
                k = () => {
                    const D = Y(),
                        I = e1[D];
                    return I[Math.floor(Math.random() * I.length)]
                },
                z1 = D => {
                    const I = x4[D];
                    if (I) {
                        const H = Number(Math.random() * (I.maxLat - I.minLat) + I.minLat),
                            n1 = Number(Math.random() * (I.maxLng - I.minLng) + I.minLng),
                            y = (Math.random() - .5) * .2,
                            v = (Math.random() - .5) * .2;
                        return {
                            lat: H + y,
                            lng: n1 + v
                        }
                    }
                    return null
                },
                J = async D => {
                    let I = !1,
                        H = null;
                    if (Object.keys(r).length > 0 && c.value === !0 || d.value === !0) I = !0, H = r;
                    else
                        for (; !I;) {
                            let n1;
                            if (Z && Z.countryCode) {
                                n1 = await K1(Z.countryCode), H = n1;
                                const y = {
                                    lat: Number(n1.lat),
                                    lng: Number(n1.lng)
                                };
                                localStorage.setItem("streetView-location", JSON.stringify(y))
                            } else {
                                const y = await M1();
                                y ? H = y : (n1 = k(), H = z1(n1))
                            }
                            if (H) {
                                const {
                                    lat: y,
                                    lng: v
                                } = H;
                                I = (await (await fetch(`https://maps.googleapis.com/maps/api/streetview/metadata?location=${y},${v}&key=AIzaSyBqsm5i9iQJzPu5hf4rIEzmS3kgy71ES_U`)).json()).status === "OK", localStorage.setItem("streetView-location", JSON.stringify({
                                    lat: Number(y),
                                    lng: Number(v)
                                }))
                            }
                            if (I) f1();
                            else if (D && D.currentRoute.value.path == "/") {
                                console.log("No Street View " + D.currentRoute.value.path);
                                break
                            } else console.log("No Street View at generated location, retrying... "), await new Promise(y => setTimeout(y, 500))
                        }
                    if (H) {
                        const {
                            lat: n1,
                            lng: y
                        } = H;
                        p.value = `https://www.google.com/maps/embed/v1/streetview?location=${n1},${y}&key=AIzaSyBqsm5i9iQJzPu5hf4rIEzmS3kgy71ES_U&fov=90&language=iw`, f.value = !1
                    }
                },
                y1 = () => {
                    const D = localStorage.getItem("playerName");
                    $4(), i.push({
                        path: "/"
                    }), localStorage.setItem("mapType", j), l1 && D && localStorage.setItem("playerName", D)
                },
                b1 = () => {
                    $4(), localStorage.setItem("rounds", 1), localStorage.setItem("mapType", j), localStorage.setItem("countrySlug", JSON.stringify(Z)), window.location.reload()
                },
                A1 = () => {
                    g.value = !g.value, localStorage.setItem("communityMapPlayState", !0), localStorage.setItem("streetViewState", !0)
                },
                p1 = () => {
                    localStorage.setItem("streetViewState", !1), Z && Z.countryCode ? i.push(`/full-view/${Z.countryCode}`) : i.push({
                        path: "/full-view"
                    })
                },
                s1 = () => {
                    const D = K.value + 1;
                    localStorage.setItem("rounds", D), localStorage.removeItem("guess-location"), localStorage.removeItem("streetView-location"), K.value = D, c.value = !1, f.value = !0, J(i)
                },
                u1 = () => {
                    m.value = !0
                },
                A = () => {
                    $4(), localStorage.setItem("rounds", 1), localStorage.setItem("mapType", j), c.value = !1, m.value = !1, z.value = 0, K.value = 1, f.value = !0, J(i)
                };
            return n2(c, D => {
                localStorage.setItem("streetViewState", D)
            }), O4(async () => {
                await Wt(), $1(), J(i), l1 && T1()
            }), O3(() => {
                clearInterval(G)
            }), (D, I) => (X(), Q(y4, null, [f.value ? E1("", !0) : (X(), Q("div", Ns, [w("div", Bs, [w("div", Gs, [w("div", zs, [I[5] || (I[5] = w("p", {
                class: "text-3xl font-jockey_one hidden sm:hidden md:inline-block lg:inline-block"
            }, "GlobalGuesser ", -1)), I[6] || (I[6] = w("p", {
                class: "text-3xl font-jockey_one block lg:hidden"
            }, "GG", -1)), w("button", {
                class: "cartoon-button font-jockey_one bg-single-player-btn-bg px-[16px] py-[5px] rounded-2xl text-2xl inline-block sm:inline-block md:hidden lg:hidden",
                onClick: y1
            }, I[2] || (I[2] = [w("i", {
                class: "pi pi-arrow-left"
            }, null, -1)])), w("button", {
                class: "cartoon-button back-button font-jockey_one bg-single-player-btn-bg px-[16px] py-[5px] lg:px-[20px] lg:py-[10px] rounded-2xl text-2xl hidden sm:hidden md:inline-block lg:inline-block",
                onClick: y1
            }, "Back"), l1 ? E1("", !0) : (X(), Q("button", {
                key: 0,
                class: "bg-blue px-[16px] py-[5px] text-2xl lg:px-[20px] lg:py-[10px] rounded-2xl",
                onClick: b1
            }, I[3] || (I[3] = [w("i", {
                class: "pi pi-replay"
            }, null, -1)]))), h1(v1) > 0 ? (X(), Q("p", Zs, [I[4] || (I[4] = w("i", {
                class: "pi pi-user font-bold"
            }, null, -1)), k1(" " + L1(h1(v1)), 1)])) : E1("", !0)]), !h1(v1) > 0 ? (X(), Q("button", {
                key: 0,
                class: "cartoon-button bg-icon-bg hover:bg-icon-hover-bg transition-all duration-300 text-2xl rounded-xl px-3 py-1",
                onClick: A1
            }, [w("div", Hs, [I[7] || (I[7] = w("i", {
                class: "pi pi-pencil text-white text-1xl mr-2"
            }, null, -1)), w("span", Us, L1(h1(Z) ? h1(Z).name : "World"), 1)])])) : E1("", !0)]), w("div", {
                class: T4(["flex items-center", !h1(v1) > 0 ? "justify-end" : "justify-center", "mt-2 lg:mt-0"])
            }, [w("div", $s, [w("p", js, [I[8] || (I[8] = k1("Round # ")), w("span", null, L1(K.value) + " / 5", 1), I[9] || (I[9] = k1(" - ")), w("span", null, L1(h1(v1) > 0 ? C.value + " seconds" : z.value + " Points"), 1)])])], 2)]), w("button", {
                class: T4(["cartoon-button z-[999999] text-white block lg:hidden fixed right-[10px] bottom-[30px]", [P.value ? "hidden" : "block"]]),
                onClick: N1
            }, I[10] || (I[10] = [w("i", {
                class: "pi pi-map text-3xl p-2 px-4"
            }, null, -1)]), 2), c.value ? E1("", !0) : (X(), Q("div", {
                key: 0,
                ref: "minimapRef",
                class: T4(["minimap fixed z-[999999] transition-all duration-300 group right-0", [P.value ? "block" : "hidden lg:block", _.value ? x.value ? "h-[450px] w-[70%] bottom-[80px] opacity-[1]" : "h-[400px] w-[50%] bottom-[80px] opacity-[1]" : x.value ? "h-[250px] w-[30%] hover:h-[450px] hover:w-[70%] bottom-[80px] opacity-[1]" : "w-full h-[400px] md:w-full md:h-[500px] lg:h-[250px] lg:w-[30%] lg:hover:w-[50%] lg:hover:h-[400px] opacity-[1] md:opacity-[1] lg:hover:opacity-[1] lg:opacity-[0.5] bottom-[46px] md:bottom-[46px] lg:bottom-[50px] hover:bottom-[80px]"]])
            }, [w("div", {
                class: T4(["group-hover:hideen sm:group-hover:hidden md:group-hover:hidden lg:group-hover:flex", [_.value ? "flex font-semibold" : "hidden", P.value ? "hidden" : ""]])
            }, [w("button", {
                onClick: I[0] || (I[0] = H => x.value = !x.value),
                class: "p-3 bg-teal rounded-md text-white"
            }, [w("i", {
                class: T4(x.value ? "pi pi-window-minimize" : "pi pi-expand")
            }, null, 2)]), w("button", {
                onClick: I[1] || (I[1] = H => _.value = !_.value),
                class: "p-3 bg-teal rounded-md text-white"
            }, [w("i", {
                class: T4(["pi pi-thumbtack", _.value ? "transform rotate-90 transition-all duration-300" : "transform rotate-0 transition-all duration-300"])
            }, null, 2)])], 2), w("div", Ws, [G1(wr, {
                toggleMiniMapBtnState: N1,
                roundTimer: C.value
            }, null, 8, ["roundTimer"])])], 2)), c.value ? (X(), Q("div", Ks, [h1(l) !== null && h1(a) !== null ? (X(), Q("div", Vs, [w("h1", qs, [I[11] || (I[11] = k1(" Your guess was ")), w("span", null, L1(h1(l)), 1), I[12] || (I[12] = k1(" Km away "))]), w("p", Js, "You got " + L1(h1(a)) + " points", 1)])) : E1("", !0), w("div", Ys, [w("div", null, [K.value === 5 ? (X(), Q("button", {
                key: 0,
                class: "bg-dark-gray py-2 px-3 rounded-md",
                onClick: u1,
                "data-modal-target": "default-modal",
                "data-modal-toggle": "default-modal"
            }, "View Result")) : (X(), Q("button", {
                key: 1,
                class: "bg-dark-gray py-2 px-3 rounded-md",
                onClick: s1
            }, "Next Round"))]), w("button", {
                class: "bg-dark-gray py-2 px-3 rounded-md",
                onClick: p1
            }, "Show Map")])])) : E1("", !0), f.value ? E1("", !0) : (X(), Q("div", Xs, [p.value ? (X(), Q("iframe", {
                key: 0,
                src: p.value,
                style: {
                    width: "100vw",
                    height: "calc(100dvh + 300px)",
                    zIndex: 100,
                    transform: "translateY(-285px)",
                    position: "fixed !important"
                }
            }, null, 8, Qs)) : E1("", !0)])), m.value ? (X(), Q("div", ta, [I[13] || (I[13] = w("div", {
                class: "overlay absolute top-0 left-0 right-0 bottom-0 bg-dark-gray opacity-50"
            }, null, -1)), w("div", ea, [w("div", na, [G1(w9, {
                sinlgePlayerPlayAgain: A
            })])])])) : E1("", !0)])), f.value ? (X(), Q("div", ia, [G1(pr, {
                restoreLoadingChange: f1
            })])) : E1("", !0), g.value ? (X(), Q("div", oa, [G1(ee, {
                communityMapStateFn: A1
            })])) : E1("", !0)], 64))
        }
    },
    Ft = I2(ra, [
        ["__scopeId", "data-v-32f25a1f"]
    ]),
    Z4 = class Z4 {
        constructor(i) {
            this.id = i, this.name = this.generateRandomName(), this.rating = this.generateRandomRating(), this.moveTime = this.calculateMoveTime(), this.previousGuesses = [], this.tier = this.assignPlayerTier(), this.bias = Math.random() * .4 - .2, Z4.playerCount++
        }
        generatePlayerNumberName() {
            return `Player${Math.floor(Math.random() * 8999 + 1e3)}`
        }
        generatePresetName() {
            const i = ["Brave", "Clever", "Mighty", "Swift", "Wise", "Fierce"],
                r = ["Lion", "Eagle", "Shark", "Tiger", "Wolf", "Falcon"],
                a = ["Jack", "Lionz", "Ghost", "Rogue", "Storm", "Alpha", "Nova", "Max"];
            if (Math.random() < .5) {
                const l = i[Math.floor(Math.random() * i.length)],
                    c = r[Math.floor(Math.random() * r.length)];
                return `${l}${c}`
            } else return a[Math.floor(Math.random() * a.length)]
        }
        generateRandomName() {
            let i = "";
            do Math.random() < .6 ? i = this.generatePlayerNumberName() : i = this.generatePresetName(); while (Z4.usedNames.has(i));
            return Z4.usedNames.add(i), i
        }
        generateRandomRating() {
            if (this.tier) switch (this.tier) {
                case 1:
                    return Math.floor(Math.random() * 20) + 1;
                case 2:
                    return Math.floor(Math.random() * 20) + 21;
                case 3:
                    return Math.floor(Math.random() * 30) + 41;
                case 4:
                    return Math.floor(Math.random() * 30) + 71
            }
            return Math.floor(Math.random() * 100) + 1
        }
        assignPlayerTier() {
            return Z4.playerCount < 4 ? Z4.playerCount + 1 : (Z4.playerCount - 4) % 4 + 1
        }
        calculateMoveTime() {
            if (this.tier) switch (this.tier) {
                case 1:
                    return Math.floor(Math.random() * 1e3) + 4e3;
                case 2:
                    return Math.floor(Math.random() * 1e3) + 3e3;
                case 3:
                    return Math.floor(Math.random() * 1e3) + 2e3;
                case 4:
                    return Math.floor(Math.random() * 1e3) + 1e3
            }
            return Math.max(2e3 - this.rating * 15, 500)
        }
        generateRandomPoint(i, r, a) {
            const l = a / 111,
                c = Math.random(),
                d = Math.random(),
                p = l * Math.sqrt(c),
                f = 2 * Math.PI * (d + Math.random() * .2 - .1),
                m = p * Math.cos(f),
                g = p * Math.sin(f),
                _ = m / Math.cos(i * Math.PI / 180),
                x = i + g,
                P = r + _;
            return {
                lat: x,
                lng: P
            }
        }
        makeGuess(i, r, a) {
            if (!i || !r) return console.error("Invalid Street View coordinates:", i, r), null;
            let l, c, d, p;
            switch (this.tier) {
                case 1:
                    d = 400, p = 2500;
                    break;
                case 2:
                    d = 200, p = 1900;
                    break;
                case 3:
                    d = 100, p = 1200;
                    break;
                case 4:
                    d = 50, p = 850;
                    break
            }
            const f = Math.random() * .2 + .9;
            d *= f, p *= f, 1 - this.rating / 100;
            let m = this.getGaussianRandom(d, p) * (1 + this.bias);
            const _ = Math.random() * 360 * (Math.PI / 180);
            switch (this.tier) {
                case 1:
                    Math.random() < .3 + this.bias && (m *= 2);
                    break;
                case 2:
                    a && Math.random() < .5 + this.bias && (i = i * .7 + a.lat * .3, r = r * .7 + a.lng * .3);
                    break;
                case 3:
                    if (this.previousGuesses.length > 0) {
                        const E = this.previousGuesses[this.previousGuesses.length - 1];
                        this.calculateDistance(E.lat, E.lng, i, r) > p / 2 && (m *= .75)
                    }
                    break;
                case 4:
                    Math.random() < .2 + this.bias && (m *= .3), this.previousGuesses.length > 1 && (m *= .9 - this.previousGuesses.length * .05, m = Math.max(m, 10));
                    break
            }
            if (this.previousGuesses.length > 0) {
                const E = this.previousGuesses[this.previousGuesses.length - 1];
                this.calculateDistance(E.lat, E.lng, i, r) > p / 2 && (m *= .6), this.rating > 80 && (m *= .7)
            }
            a && a.lat && a.lng && Math.random() < .4 && (i = (i + a.lat) / 2, r = (r + a.lng) / 2);
            const x = this.generateRandomPointWithAngle(i, r, m, _);
            if (l = x.lat, c = x.lng, Math.random() < .05) return {
                lat: i + (Math.random() * 10 - 5),
                lng: r + (Math.random() * 10 - 5),
                timeTaken: this.moveTime,
                tier: this.tier
            };
            const P = {
                lat: l,
                lng: c,
                timeTaken: this.moveTime,
                tier: this.tier
            };
            return this.previousGuesses.push(P), P
        }
        getGaussianRandom(i, r) {
            let a = 0,
                l = 0;
            for (; a === 0;) a = Math.random();
            for (; l === 0;) l = Math.random();
            let c = Math.sqrt(-2 * Math.log(a)) * Math.cos(2 * Math.PI * l);
            return c = c / 10 + .5, c = c * (r - i) + i, Math.min(Math.max(c, i), r)
        }
        calculateDistance(i, r, a, l) {
            const d = (a - i) * Math.PI / 180,
                p = (l - r) * Math.PI / 180,
                f = Math.sin(d / 2) * Math.sin(d / 2) + Math.cos(i * Math.PI / 180) * Math.cos(a * Math.PI / 180) * Math.sin(p / 2) * Math.sin(p / 2);
            return 6371 * (2 * Math.atan2(Math.sqrt(f), Math.sqrt(1 - f)))
        }
        generateRandomPointWithAngle(i, r, a, l) {
            const c = a / 111,
                d = c * Math.cos(l),
                p = c * Math.sin(l),
                f = d / Math.cos(i * Math.PI / 180),
                m = i + p,
                g = r + f;
            return {
                lat: m,
                lng: g
            }
        }
    };
it(Z4, "usedNames", new Set), it(Z4, "playerCount", 0);
let j2 = Z4;
const sa = {
    __name: "MultiplayerGame",
    setup(e) {
        const i = o1([]),
            r = o1(Number(localStorage.getItem("rounds")) || 1);
        o1(JSON.parse(localStorage.getItem("fakePlayers")) || []);
        const a = localStorage.getItem("playerName");
        let l = o1(JSON.parse(localStorage.getItem("streetView-location")) || {});
        const c = () => {
            const m = Math.floor(Math.random() * 5) + 2,
                g = [];
            for (let _ = 0; _ < m; _++) g.push(new j2(_));
            localStorage.setItem("fakePlayers", JSON.stringify(g)), i.value = g
        },
            d = (m, g) => {
                if ((!m || m.length === 0) && (m = JSON.parse(localStorage.getItem("fakePlayers")) || [], m = m.map(E => Object.assign(new j2(E.id), E))), !m || m.length === 0) return;
                let _ = JSON.parse(localStorage.getItem(`AIGuess-round-${g}`)) || [],
                    x = JSON.parse(localStorage.getItem("guess-location")) || {};
                (!x.lat || !x.lng) && (x.lat = Math.random() * 180 - 90, x.lng = Math.random() * 360 - 180);
                let P = g === 1 ? [] : [..._];
                m.forEach(E => {
                    setTimeout(() => {
                        const C = E.makeGuess(l.value.lat, l.value.lng, x);
                        P.findIndex(K => K.playerId === E.id) === -1 && P.push({
                            playerId: E.id,
                            name: E.name,
                            guess: {
                                ...C
                            },
                            moveTime: E.moveTime,
                            round: g
                        }), P.length === m.length && localStorage.setItem(`AIGuess-round-${g}`, JSON.stringify(P))
                    }, E.moveTime)
                })
            };
        n2(r, m => {
            i.value.length === 0 && (i.value = JSON.parse(localStorage.getItem("fakePlayers")) || [], i.value = i.value.map(g => Object.assign(new j2(g.id), g))), r.value !== 1 && d(i.value, m)
        });
        const p = () => {
            let m = localStorage.getItem("playerName");
            return m || (m = f(), localStorage.setItem("playerName", m)), m
        },
            f = () => `Player${Math.floor(Math.random() * 8999 + 1e3)}`;
        return O4(() => {
            const m = JSON.parse(localStorage.getItem("fakePlayers")) || [];
            m.length > 0 ? i.value = m.map(g => Object.assign(new j2(g.id), g)) : c(), a || p(), setTimeout(() => {
                l.value = JSON.parse(localStorage.getItem("streetView-location")), d(i.value, r.value)
            }, y2.simulateAIMoves * 1e3)
        }), (m, g) => (X(), t9(Ft))
    }
},
    aa = [{
        path: "/",
        component: J6
    }, {
        path: "/index.html",
        component: J6
    }, {
        path: "/street-view",
        component: Ft
    }, {
        path: "/street-view/:country",
        component: Ft,
        props: !0
    }, {
        path: "/full-view",
        component: t7
    }, {
        path: "/full-view/:country",
        component: t7,
        props: !0
    }, {
        path: "/community-map/:country",
        component: Ds
    }, {
        path: "/multiplayerGame",
        component: sa
    }],
    Ot = mo({
        history: Ui(),
        routes: aa
    }),
    P9 = {
        TOP_LEFT: "top-left",
        TOP_RIGHT: "top-right",
        TOP_CENTER: "top-center",
        BOTTOM_LEFT: "bottom-left",
        BOTTOM_RIGHT: "bottom-right",
        BOTTOM_CENTER: "bottom-center"
    },
    m5 = {
        LIGHT: "light",
        DARK: "dark",
        COLORED: "colored",
        AUTO: "auto"
    },
    ne = {
        INFO: "info",
        SUCCESS: "success",
        WARNING: "warning",
        ERROR: "error",
        DEFAULT: "default"
    },
    M9 = {
        dangerouslyHTMLString: !1,
        multiple: !0,
        position: P9.TOP_RIGHT,
        autoClose: 5e3,
        transition: "bounce",
        hideProgressBar: !1,
        pauseOnHover: !0,
        pauseOnFocusLoss: !0,
        closeOnClick: !0,
        className: "",
        bodyClassName: "",
        style: {},
        progressClassName: "",
        progressStyle: {},
        role: "alert",
        theme: "light"
    },
    la = {
        rtl: !1,
        newestOnTop: !1,
        toastClassName: ""
    },
    ua = {
        ...M9,
        ...la
    };
({
    ...M9,
    type: ne.DEFAULT
});
var g5 = (e => (e[e.COLLAPSE_DURATION = 300] = "COLLAPSE_DURATION", e[e.DEBOUNCE_DURATION = 50] = "DEBOUNCE_DURATION", e.CSS_NAMESPACE = "Toastify", e))(g5 || {});
W4({});
W4({});
W4({
    items: []
});
const ca = W4({
    useHandler: void 0
}),
    da = W4({});
W4({});

function ha(...e) {
    return n9(...e)
}

function fa(e = {}) {
    da[`${g5.CSS_NAMESPACE}-default-options`] = e
}
P9.TOP_LEFT, m5.AUTO, ne.DEFAULT;
ne.DEFAULT, m5.AUTO;
m5.AUTO, m5.LIGHT;
const S9 = {
    install(e, i = {}) {
        ca.useHandler = i.useHandler || (() => { }), pa(i)
    }
};
typeof window < "u" && (window.Vue3Toastify = S9);

function pa(e = {}) {
    const i = ha(ua, e);
    fa(i)
}
const ie = ui(_o);
ie.use(Ot);
ie.component("ToastContainer", S9);
ie.mount("#app");