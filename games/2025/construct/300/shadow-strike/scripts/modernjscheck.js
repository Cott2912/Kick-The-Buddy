"use strict";
! function() {
    let p = !0,
        r = new class {#
            prop = "pass";
            getProp() {
                return this.#prop
            }
        };
    (p = "pass" !== r.getProp() ? !1 : p) && (window["C3_ModernJSSupport_OK"] = !0)
}();