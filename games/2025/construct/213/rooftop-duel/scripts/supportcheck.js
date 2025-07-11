"use strict";
! function() {
    var e = !!document.querySelector('script[src*="kaspersky"]'),
        t = [];
    if (!!document.createElement("canvas").getContext("webgl") || t.push("WebGL"), "undefined" == typeof WebAssembly && t.push("WebAssembly"), "noModule" in HTMLScriptElement.prototype || t.push("JavaScript Modules"), window["Intl"] && window["Intl"]["Segmenter"] || t.push("Internationalization support (Intl.Segmenter)"), window["C3_ModernJSSupport_OK"] || t.push("Modern JavaScript support"), 0 !== t.length || e) {
        var r = document.createElement("div");
        r.id = "notSupportedWrap", document.body.appendChild(r);
        var n = document.createElement("h2");
        n.id = "notSupportedTitle", n.textContent = e ? "Kaspersky Internet Security broke this export" : "Software update needed", r.appendChild(n);
        var o = document.createElement("p");
        o.className = "notSupportedMessage";
        var a = "This content is not supported because your device's software appears to be out-of-date. ",
            s = navigator.userAgent;
        /android/i.test(s) ? a += '<br><br>On Android, fix this by making sure the <a href="https://play.google.com/store/apps/details?id=com.google.android.webview">Android System Webview</a> app has updates enabled and is up-to-date.' : /iphone|ipad|ipod/i.test(s) ? a += "Alternatively if <strong>Lockdown mode</strong> is enabled, try turning it off to view this content." : /msie/i.test(s) || /trident/i.test(s) || /edge\//i.test(s) ? a += "<br><br>Note: <strong>Internet Explorer</strong> and the <strong>legacy Edge browser</strong> are not supported. Try using <a href='https://www.google.com/chrome'>Chrome</a> or <a href='https://www.mozilla.org/firefox'>Firefox</a> instead." : e ? a = "It appears a script was added to this export by Kaspersky software. This prevents the exported project from working. Try disabling Kaspersky and exporting again." : a += "Try installing any available software updates. Alternatively try on a different device.", a += "<br><br><em>Missing features: " + t.join(", ") + "<br>User agent: " + navigator.userAgent + "</em>", o.innerHTML = a, r.appendChild(o), document.addEventListener("deviceready", (() => {
            navigator["splashscreen"] && navigator["splashscreen"]["hide"] && navigator["splashscreen"]["hide"]()
        }))
    } else window["C3_Is_Supported"] = !0
}();