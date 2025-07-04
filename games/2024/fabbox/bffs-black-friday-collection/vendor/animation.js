window.SpinePlugin = function(t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var r = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    return n.m = t, n.c = e, n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) n.d(i, r, function(e) {
                return t[e]
            }.bind(null, r));
        return i
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 32)
}([function(t, e) {
    function n(t, e, n) {
        var i = n ? t[e] : Object.getOwnPropertyDescriptor(t, e);
        return !n && i.value && "object" == typeof i.value && (i = i.value), !(!i || ! function(t) {
            return !!t.get && "function" == typeof t.get || !!t.set && "function" == typeof t.set
        }(i)) && (void 0 === i.enumerable && (i.enumerable = !0), void 0 === i.configurable && (i.configurable = !0), i)
    }

    function i(t, e) {
        var n = Object.getOwnPropertyDescriptor(t, e);
        return !!n && (n.value && "object" == typeof n.value && (n = n.value), !1 === n.configurable)
    }

    function r(t, e, r, s) {
        for (var a in e)
            if (e.hasOwnProperty(a)) {
                var h = n(e, a, r);
                if (!1 !== h) {
                    if (i((s || t).prototype, a)) {
                        if (o.ignoreFinals) continue;
                        throw new Error("cannot override final property '" + a + "', set Class.ignoreFinals = true to skip")
                    }
                    Object.defineProperty(t.prototype, a, h)
                } else t.prototype[a] = e[a]
            }
    }

    function s(t, e) {
        if (e) {
            Array.isArray(e) || (e = [e]);
            for (var n = 0; n < e.length; n++) r(t, e[n].prototype || e[n])
        }
    }

    function o(t) {
        var e, n;
        if (t || (t = {}), t.initialize) {
            if ("function" != typeof t.initialize) throw new Error("initialize must be a function");
            e = t.initialize, delete t.initialize
        } else if (t.Extends) {
            var i = t.Extends;
            e = function() {
                i.apply(this, arguments)
            }
        } else e = function() {};
        t.Extends ? (e.prototype = Object.create(t.Extends.prototype), e.prototype.constructor = e, n = t.Extends, delete t.Extends) : e.prototype.constructor = e;
        var o = null;
        return t.Mixins && (o = t.Mixins, delete t.Mixins), s(e, o), r(e, t, !0, n), e
    }
    o.extend = r, o.mixin = s, o.ignoreFinals = !1, t.exports = o
}, function(t, e) {
    var n = {
        PI2: 2 * Math.PI,
        TAU: .5 * Math.PI,
        EPSILON: 1e-6,
        DEG_TO_RAD: Math.PI / 180,
        RAD_TO_DEG: 180 / Math.PI,
        RND: null
    };
    t.exports = n
}, function(t, e) {
    t.exports = function(t) {
        if ("object" != typeof t || t.nodeType || t === t.window) return !1;
        try {
            if (t.constructor && !{}.hasOwnProperty.call(t.constructor.prototype, "isPrototypeOf")) return !1
        } catch (t) {
            return !1
        }
        return !0
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        var i = n - e;
        return e + ((t - e) % i + i) % i
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        var i = typeof t;
        return t && "number" !== i && "string" !== i && t.hasOwnProperty(e) && void 0 !== t[e] ? t[e] : n
    }
}, function(t, e, n) {
    var i = n(1);
    t.exports = function(t) {
        return t > Math.PI && (t -= i.PI2), Math.abs(((t + i.TAU) % i.PI2 - i.PI2) % i.PI2)
    }
}, function(t, e, n) {
    var i = n(1);
    t.exports = function(t) {
        return t * i.RAD_TO_DEG
    }
}, function(t, e, n) {
    var i = new(n(0))({
        initialize: function(t, e) {
            this.x = 0, this.y = 0, "object" == typeof t ? (this.x = t.x || 0, this.y = t.y || 0) : (void 0 === e && (e = t), this.x = t || 0, this.y = e || 0)
        },
        clone: function() {
            return new i(this.x, this.y)
        },
        copy: function(t) {
            return this.x = t.x || 0, this.y = t.y || 0, this
        },
        setFromObject: function(t) {
            return this.x = t.x || 0, this.y = t.y || 0, this
        },
        set: function(t, e) {
            return void 0 === e && (e = t), this.x = t, this.y = e, this
        },
        setTo: function(t, e) {
            return this.set(t, e)
        },
        setToPolar: function(t, e) {
            return null == e && (e = 1), this.x = Math.cos(t) * e, this.y = Math.sin(t) * e, this
        },
        equals: function(t) {
            return this.x === t.x && this.y === t.y
        },
        angle: function() {
            var t = Math.atan2(this.y, this.x);
            return t < 0 && (t += 2 * Math.PI), t
        },
        add: function(t) {
            return this.x += t.x, this.y += t.y, this
        },
        subtract: function(t) {
            return this.x -= t.x, this.y -= t.y, this
        },
        multiply: function(t) {
            return this.x *= t.x, this.y *= t.y, this
        },
        scale: function(t) {
            return isFinite(t) ? (this.x *= t, this.y *= t) : (this.x = 0, this.y = 0), this
        },
        divide: function(t) {
            return this.x /= t.x, this.y /= t.y, this
        },
        negate: function() {
            return this.x = -this.x, this.y = -this.y, this
        },
        distance: function(t) {
            var e = t.x - this.x,
                n = t.y - this.y;
            return Math.sqrt(e * e + n * n)
        },
        distanceSq: function(t) {
            var e = t.x - this.x,
                n = t.y - this.y;
            return e * e + n * n
        },
        length: function() {
            var t = this.x,
                e = this.y;
            return Math.sqrt(t * t + e * e)
        },
        lengthSq: function() {
            var t = this.x,
                e = this.y;
            return t * t + e * e
        },
        normalize: function() {
            var t = this.x,
                e = this.y,
                n = t * t + e * e;
            return n > 0 && (n = 1 / Math.sqrt(n), this.x = t * n, this.y = e * n), this
        },
        normalizeRightHand: function() {
            var t = this.x;
            return this.x = -1 * this.y, this.y = t, this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y
        },
        cross: function(t) {
            return this.x * t.y - this.y * t.x
        },
        lerp: function(t, e) {
            void 0 === e && (e = 0);
            var n = this.x,
                i = this.y;
            return this.x = n + e * (t.x - n), this.y = i + e * (t.y - i), this
        },
        transformMat3: function(t) {
            var e = this.x,
                n = this.y,
                i = t.val;
            return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this
        },
        transformMat4: function(t) {
            var e = this.x,
                n = this.y,
                i = t.val;
            return this.x = i[0] * e + i[4] * n + i[12], this.y = i[1] * e + i[5] * n + i[13], this
        },
        reset: function() {
            return this.x = 0, this.y = 0, this
        }
    });
    i.ZERO = new i, i.RIGHT = new i(1, 0), i.LEFT = new i(-1, 0), i.UP = new i(0, -1), i.DOWN = new i(0, 1), i.ONE = new i(1, 1), t.exports = i
}, function(t, e) {
    t.exports = {
        LOADER_IDLE: 0,
        LOADER_LOADING: 1,
        LOADER_PROCESSING: 2,
        LOADER_COMPLETE: 3,
        LOADER_SHUTDOWN: 4,
        LOADER_DESTROYED: 5,
        FILE_PENDING: 10,
        FILE_LOADING: 11,
        FILE_LOADED: 12,
        FILE_FAILED: 13,
        FILE_PROCESSING: 14,
        FILE_ERRORED: 16,
        FILE_COMPLETE: 17,
        FILE_DESTROYED: 18,
        FILE_POPULATED: 19
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        return Math.max(e, Math.min(n, t))
    }
}, function(t, e, n) {
    var i = new(n(0))({
        initialize: function(t, e, n) {
            this.x = 0, this.y = 0, this.z = 0, "object" == typeof t ? (this.x = t.x || 0, this.y = t.y || 0, this.z = t.z || 0) : (this.x = t || 0, this.y = e || 0, this.z = n || 0)
        },
        up: function() {
            return this.x = 0, this.y = 1, this.z = 0, this
        },
        clone: function() {
            return new i(this.x, this.y, this.z)
        },
        crossVectors: function(t, e) {
            var n = t.x,
                i = t.y,
                r = t.z,
                s = e.x,
                o = e.y,
                a = e.z;
            return this.x = i * a - r * o, this.y = r * s - n * a, this.z = n * o - i * s, this
        },
        equals: function(t) {
            return this.x === t.x && this.y === t.y && this.z === t.z
        },
        copy: function(t) {
            return this.x = t.x, this.y = t.y, this.z = t.z || 0, this
        },
        set: function(t, e, n) {
            return "object" == typeof t ? (this.x = t.x || 0, this.y = t.y || 0, this.z = t.z || 0) : (this.x = t || 0, this.y = e || 0, this.z = n || 0), this
        },
        add: function(t) {
            return this.x += t.x, this.y += t.y, this.z += t.z || 0, this
        },
        subtract: function(t) {
            return this.x -= t.x, this.y -= t.y, this.z -= t.z || 0, this
        },
        multiply: function(t) {
            return this.x *= t.x, this.y *= t.y, this.z *= t.z || 1, this
        },
        scale: function(t) {
            return isFinite(t) ? (this.x *= t, this.y *= t, this.z *= t) : (this.x = 0, this.y = 0, this.z = 0), this
        },
        divide: function(t) {
            return this.x /= t.x, this.y /= t.y, this.z /= t.z || 1, this
        },
        negate: function() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
        },
        distance: function(t) {
            var e = t.x - this.x,
                n = t.y - this.y,
                i = t.z - this.z || 0;
            return Math.sqrt(e * e + n * n + i * i)
        },
        distanceSq: function(t) {
            var e = t.x - this.x,
                n = t.y - this.y,
                i = t.z - this.z || 0;
            return e * e + n * n + i * i
        },
        length: function() {
            var t = this.x,
                e = this.y,
                n = this.z;
            return Math.sqrt(t * t + e * e + n * n)
        },
        lengthSq: function() {
            var t = this.x,
                e = this.y,
                n = this.z;
            return t * t + e * e + n * n
        },
        normalize: function() {
            var t = this.x,
                e = this.y,
                n = this.z,
                i = t * t + e * e + n * n;
            return i > 0 && (i = 1 / Math.sqrt(i), this.x = t * i, this.y = e * i, this.z = n * i), this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        },
        cross: function(t) {
            var e = this.x,
                n = this.y,
                i = this.z,
                r = t.x,
                s = t.y,
                o = t.z;
            return this.x = n * o - i * s, this.y = i * r - e * o, this.z = e * s - n * r, this
        },
        lerp: function(t, e) {
            void 0 === e && (e = 0);
            var n = this.x,
                i = this.y,
                r = this.z;
            return this.x = n + e * (t.x - n), this.y = i + e * (t.y - i), this.z = r + e * (t.z - r), this
        },
        transformMat3: function(t) {
            var e = this.x,
                n = this.y,
                i = this.z,
                r = t.val;
            return this.x = e * r[0] + n * r[3] + i * r[6], this.y = e * r[1] + n * r[4] + i * r[7], this.z = e * r[2] + n * r[5] + i * r[8], this
        },
        transformMat4: function(t) {
            var e = this.x,
                n = this.y,
                i = this.z,
                r = t.val;
            return this.x = r[0] * e + r[4] * n + r[8] * i + r[12], this.y = r[1] * e + r[5] * n + r[9] * i + r[13], this.z = r[2] * e + r[6] * n + r[10] * i + r[14], this
        },
        transformCoordinates: function(t) {
            var e = this.x,
                n = this.y,
                i = this.z,
                r = t.val,
                s = e * r[0] + n * r[4] + i * r[8] + r[12],
                o = e * r[1] + n * r[5] + i * r[9] + r[13],
                a = e * r[2] + n * r[6] + i * r[10] + r[14],
                h = e * r[3] + n * r[7] + i * r[11] + r[15];
            return this.x = s / h, this.y = o / h, this.z = a / h, this
        },
        transformQuat: function(t) {
            var e = this.x,
                n = this.y,
                i = this.z,
                r = t.x,
                s = t.y,
                o = t.z,
                a = t.w,
                h = a * e + s * i - o * n,
                l = a * n + o * e - r * i,
                u = a * i + r * n - s * e,
                c = -r * e - s * n - o * i;
            return this.x = h * a + c * -r + l * -o - u * -s, this.y = l * a + c * -s + u * -r - h * -o, this.z = u * a + c * -o + h * -s - l * -r, this
        },
        project: function(t) {
            var e = this.x,
                n = this.y,
                i = this.z,
                r = t.val,
                s = r[0],
                o = r[1],
                a = r[2],
                h = r[3],
                l = r[4],
                u = r[5],
                c = r[6],
                f = r[7],
                d = r[8],
                p = r[9],
                v = r[10],
                g = r[11],
                m = r[12],
                M = r[13],
                x = r[14],
                y = 1 / (e * h + n * f + i * g + r[15]);
            return this.x = (e * s + n * l + i * d + m) * y, this.y = (e * o + n * u + i * p + M) * y, this.z = (e * a + n * c + i * v + x) * y, this
        },
        unproject: function(t, e) {
            var n = t.x,
                i = t.y,
                r = t.z,
                s = t.w,
                o = this.x - n,
                a = s - this.y - 1 - i,
                h = this.z;
            return this.x = 2 * o / r - 1, this.y = 2 * a / s - 1, this.z = 2 * h - 1, this.project(e)
        },
        reset: function() {
            return this.x = 0, this.y = 0, this.z = 0, this
        }
    });
    i.ZERO = new i, i.RIGHT = new i(1, 0, 0), i.LEFT = new i(-1, 0, 0), i.UP = new i(0, -1, 0), i.DOWN = new i(0, 1, 0), i.FORWARD = new i(0, 0, 1), i.BACK = new i(0, 0, -1), i.ONE = new i(1, 1, 1), t.exports = i
}, function(t, e) {
    t.exports = function(t, e, n) {
        if (t && "number" != typeof t) {
            if (t.hasOwnProperty(e)) return t[e];
            if (-1 !== e.indexOf(".")) {
                for (var i = e.split("."), r = t, s = n, o = 0; o < i.length; o++) {
                    if (!r.hasOwnProperty(i[o])) {
                        s = n;
                        break
                    }
                    s = r[i[o]], r = r[i[o]]
                }
                return s
            }
            return n
        }
        return n
    }
}, function(t, e, n) {
    var i = n(0),
        r = n(8),
        s = n(169),
        o = n(4),
        a = n(180),
        h = n(29),
        l = n(181),
        u = n(30),
        c = new i({
            initialize: function(t, e) {
                this.loader = t, this.cache = o(e, "cache", !1), this.type = o(e, "type", !1), this.key = o(e, "key", !1);
                var n = this.key;
                if (t.prefix && "" !== t.prefix && (this.key = t.prefix + n), !this.type || !this.key) throw new Error("Error calling 'Loader." + this.type + "' invalid key provided.");
                this.url = o(e, "url"), void 0 === this.url ? this.url = t.path + n + "." + o(e, "extension", "") : "function" != typeof this.url && (this.url = t.path + this.url), this.src = "", this.xhrSettings = u(o(e, "responseType", void 0)), o(e, "xhrSettings", !1) && (this.xhrSettings = h(this.xhrSettings, o(e, "xhrSettings", {}))), this.xhrLoader = null, this.state = "function" == typeof this.url ? r.FILE_POPULATED : r.FILE_PENDING, this.bytesTotal = 0, this.bytesLoaded = -1, this.percentComplete = -1, this.crossOrigin = void 0, this.data = void 0, this.config = o(e, "config", {}), this.multiFile, this.linkFile
            },
            setLink: function(t) {
                this.linkFile = t, t.linkFile = this
            },
            resetXHR: function() {
                this.xhrLoader && (this.xhrLoader.onload = void 0, this.xhrLoader.onerror = void 0, this.xhrLoader.onprogress = void 0)
            },
            load: function() {
                this.state === r.FILE_POPULATED ? this.loader.nextFile(this, !0) : (this.src = a(this, this.loader.baseURL), 0 === this.src.indexOf("data:") ? console.warn("Local data URIs are not supported: " + this.key) : this.xhrLoader = l(this, this.loader.xhr))
            },
            onLoad: function(t, e) {
                var n = t.responseURL && 0 === t.responseURL.indexOf("file://") && 0 === e.target.status,
                    i = !(e.target && 200 !== e.target.status) || n;
                4 === t.readyState && t.status >= 400 && t.status <= 599 && (i = !1), this.resetXHR(), this.loader.nextFile(this, i)
            },
            onError: function() {
                this.resetXHR(), this.loader.nextFile(this, !1)
            },
            onProgress: function(t) {
                t.lengthComputable && (this.bytesLoaded = t.loaded, this.bytesTotal = t.total, this.percentComplete = Math.min(this.bytesLoaded / this.bytesTotal, 1), this.loader.emit(s.FILE_PROGRESS, this, this.percentComplete))
            },
            onProcess: function() {
                this.state = r.FILE_PROCESSING, this.onProcessComplete()
            },
            onProcessComplete: function() {
                this.state = r.FILE_COMPLETE, this.multiFile && this.multiFile.onFileComplete(this), this.loader.fileProcessComplete(this)
            },
            onProcessError: function() {
                this.state = r.FILE_ERRORED, this.multiFile && this.multiFile.onFileFailed(this), this.loader.fileProcessComplete(this)
            },
            hasCacheConflict: function() {
                return this.cache && this.cache.exists(this.key)
            },
            addToCache: function() {
                this.cache && this.cache.add(this.key, this.data), this.pendingDestroy()
            },
            pendingDestroy: function(t) {
                void 0 === t && (t = this.data);
                var e = this.key,
                    n = this.type;
                this.loader.emit(s.FILE_COMPLETE, e, n, t), this.loader.emit(s.FILE_KEY_COMPLETE + n + "-" + e, e, n, t), this.loader.flagForRemoval(this)
            },
            destroy: function() {
                this.loader = null, this.cache = null, this.xhrSettings = null, this.multiFile = null, this.linkFile = null, this.data = null
            }
        });
    c.createObjectURL = function(t, e, n) {
        if ("function" == typeof URL) t.src = URL.createObjectURL(e);
        else {
            var i = new FileReader;
            i.onload = function() {
                t.removeAttribute("crossOrigin"), t.src = "data:" + (e.type || n) + ";base64," + i.result.split(",")[1]
            }, i.onerror = t.onerror, i.readAsDataURL(e)
        }
    }, c.revokeObjectURL = function(t) {
        "function" == typeof URL && URL.revokeObjectURL(t.src)
    }, t.exports = c
}, function(t, e) {
    var n = {},
        i = {
            install: function(t) {
                for (var e in n) t[e] = n[e]
            },
            register: function(t, e) {
                n[t] = e
            },
            destroy: function() {
                n = {}
            }
        };
    t.exports = i
}, function(t, e, n) {
    var i = n(2),
        r = function() {
            var t, e, n, s, o, a, h = arguments[0] || {},
                l = 1,
                u = arguments.length,
                c = !1;
            for ("boolean" == typeof h && (c = h, h = arguments[1] || {}, l = 2), u === l && (h = this, --l); l < u; l++)
                if (null != (t = arguments[l]))
                    for (e in t) n = h[e], h !== (s = t[e]) && (c && s && (i(s) || (o = Array.isArray(s))) ? (o ? (o = !1, a = n && Array.isArray(n) ? n : []) : a = n && i(n) ? n : {}, h[e] = r(c, a, s)) : void 0 !== s && (h[e] = s));
            return h
        };
    t.exports = r
}, function(t, e) {
    t.exports = function(t, e, n, i) {
        return Math.atan2(i - e, n - t)
    }
}, function(t, e) {
    t.exports = function(t) {
        return (t %= 2 * Math.PI) >= 0 ? t : t + 2 * Math.PI
    }
}, function(t, e, n) {
    var i = n(3);
    t.exports = function(t) {
        return i(t, -Math.PI, Math.PI)
    }
}, function(t, e, n) {
    var i = n(3);
    t.exports = function(t) {
        return i(t, -180, 180)
    }
}, function(t, e, n) {
    var i = n(20);
    t.exports = function(t, e) {
        return i(t) / i(e) / i(t - e)
    }
}, function(t, e) {
    t.exports = function(t) {
        if (0 === t) return 1;
        for (var e = t; --t;) e *= t;
        return e
    }
}, function(t, e) {
    t.exports = function(t, e, n, i, r) {
        var s = .5 * (i - e),
            o = .5 * (r - n),
            a = t * t;
        return (2 * n - 2 * i + s + o) * (t * a) + (-3 * n + 3 * i - 2 * s - o) * a + s * t + n
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        return (e - t) * n + t
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t)
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        return (t = Math.max(0, Math.min(1, (t - e) / (n - e)))) * t * t * (t * (6 * t - 15) + 10)
    }
}, function(t, e, n) {
    var i = n(1);
    t.exports = function(t) {
        return t * i.DEG_TO_RAD
    }
}, function(t, e, n) {
    var i = new(n(0))({
        initialize: function(t) {
            this.val = new Float32Array(9), t ? this.copy(t) : this.identity()
        },
        clone: function() {
            return new i(this)
        },
        set: function(t) {
            return this.copy(t)
        },
        copy: function(t) {
            var e = this.val,
                n = t.val;
            return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this
        },
        fromMat4: function(t) {
            var e = t.val,
                n = this.val;
            return n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[4], n[4] = e[5], n[5] = e[6], n[6] = e[8], n[7] = e[9], n[8] = e[10], this
        },
        fromArray: function(t) {
            var e = this.val;
            return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], this
        },
        identity: function() {
            var t = this.val;
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, this
        },
        transpose: function() {
            var t = this.val,
                e = t[1],
                n = t[2],
                i = t[5];
            return t[1] = t[3], t[2] = t[6], t[3] = e, t[5] = t[7], t[6] = n, t[7] = i, this
        },
        invert: function() {
            var t = this.val,
                e = t[0],
                n = t[1],
                i = t[2],
                r = t[3],
                s = t[4],
                o = t[5],
                a = t[6],
                h = t[7],
                l = t[8],
                u = l * s - o * h,
                c = -l * r + o * a,
                f = h * r - s * a,
                d = e * u + n * c + i * f;
            return d ? (d = 1 / d, t[0] = u * d, t[1] = (-l * n + i * h) * d, t[2] = (o * n - i * s) * d, t[3] = c * d, t[4] = (l * e - i * a) * d, t[5] = (-o * e + i * r) * d, t[6] = f * d, t[7] = (-h * e + n * a) * d, t[8] = (s * e - n * r) * d, this) : null
        },
        adjoint: function() {
            var t = this.val,
                e = t[0],
                n = t[1],
                i = t[2],
                r = t[3],
                s = t[4],
                o = t[5],
                a = t[6],
                h = t[7],
                l = t[8];
            return t[0] = s * l - o * h, t[1] = i * h - n * l, t[2] = n * o - i * s, t[3] = o * a - r * l, t[4] = e * l - i * a, t[5] = i * r - e * o, t[6] = r * h - s * a, t[7] = n * a - e * h, t[8] = e * s - n * r, this
        },
        determinant: function() {
            var t = this.val,
                e = t[0],
                n = t[1],
                i = t[2],
                r = t[3],
                s = t[4],
                o = t[5],
                a = t[6],
                h = t[7],
                l = t[8];
            return e * (l * s - o * h) + n * (-l * r + o * a) + i * (h * r - s * a)
        },
        multiply: function(t) {
            var e = this.val,
                n = e[0],
                i = e[1],
                r = e[2],
                s = e[3],
                o = e[4],
                a = e[5],
                h = e[6],
                l = e[7],
                u = e[8],
                c = t.val,
                f = c[0],
                d = c[1],
                p = c[2],
                v = c[3],
                g = c[4],
                m = c[5],
                M = c[6],
                x = c[7],
                y = c[8];
            return e[0] = f * n + d * s + p * h, e[1] = f * i + d * o + p * l, e[2] = f * r + d * a + p * u, e[3] = v * n + g * s + m * h, e[4] = v * i + g * o + m * l, e[5] = v * r + g * a + m * u, e[6] = M * n + x * s + y * h, e[7] = M * i + x * o + y * l, e[8] = M * r + x * a + y * u, this
        },
        translate: function(t) {
            var e = this.val,
                n = t.x,
                i = t.y;
            return e[6] = n * e[0] + i * e[3] + e[6], e[7] = n * e[1] + i * e[4] + e[7], e[8] = n * e[2] + i * e[5] + e[8], this
        },
        rotate: function(t) {
            var e = this.val,
                n = e[0],
                i = e[1],
                r = e[2],
                s = e[3],
                o = e[4],
                a = e[5],
                h = Math.sin(t),
                l = Math.cos(t);
            return e[0] = l * n + h * s, e[1] = l * i + h * o, e[2] = l * r + h * a, e[3] = l * s - h * n, e[4] = l * o - h * i, e[5] = l * a - h * r, this
        },
        scale: function(t) {
            var e = this.val,
                n = t.x,
                i = t.y;
            return e[0] = n * e[0], e[1] = n * e[1], e[2] = n * e[2], e[3] = i * e[3], e[4] = i * e[4], e[5] = i * e[5], this
        },
        fromQuat: function(t) {
            var e = t.x,
                n = t.y,
                i = t.z,
                r = t.w,
                s = e + e,
                o = n + n,
                a = i + i,
                h = e * s,
                l = e * o,
                u = e * a,
                c = n * o,
                f = n * a,
                d = i * a,
                p = r * s,
                v = r * o,
                g = r * a,
                m = this.val;
            return m[0] = 1 - (c + d), m[3] = l + g, m[6] = u - v, m[1] = l - g, m[4] = 1 - (h + d), m[7] = f + p, m[2] = u + v, m[5] = f - p, m[8] = 1 - (h + c), this
        },
        normalFromMat4: function(t) {
            var e = t.val,
                n = this.val,
                i = e[0],
                r = e[1],
                s = e[2],
                o = e[3],
                a = e[4],
                h = e[5],
                l = e[6],
                u = e[7],
                c = e[8],
                f = e[9],
                d = e[10],
                p = e[11],
                v = e[12],
                g = e[13],
                m = e[14],
                M = e[15],
                x = i * h - r * a,
                y = i * l - s * a,
                w = i * u - o * a,
                b = r * l - s * h,
                E = r * u - o * h,
                T = s * u - o * l,
                A = c * g - f * v,
                R = c * m - d * v,
                S = c * M - p * v,
                I = f * m - d * g,
                C = f * M - p * g,
                P = d * M - p * m,
                L = x * P - y * C + w * I + b * S - E * R + T * A;
            return L ? (L = 1 / L, n[0] = (h * P - l * C + u * I) * L, n[1] = (l * S - a * P - u * R) * L, n[2] = (a * C - h * S + u * A) * L, n[3] = (s * C - r * P - o * I) * L, n[4] = (i * P - s * S + o * R) * L, n[5] = (r * S - i * C - o * A) * L, n[6] = (g * T - m * E + M * b) * L, n[7] = (m * w - v * T - M * y) * L, n[8] = (v * E - g * w + M * x) * L, this) : null
        }
    });
    t.exports = i
}, function(t, e, n) {
    var i = new(n(0))({
            initialize: function(t) {
                this.val = new Float32Array(16), t ? this.copy(t) : this.identity()
            },
            clone: function() {
                return new i(this)
            },
            set: function(t) {
                return this.copy(t)
            },
            copy: function(t) {
                var e = this.val,
                    n = t.val;
                return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this
            },
            fromArray: function(t) {
                var e = this.val;
                return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], this
            },
            zero: function() {
                var t = this.val;
                return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 0, this
            },
            xyz: function(t, e, n) {
                this.identity();
                var i = this.val;
                return i[12] = t, i[13] = e, i[14] = n, this
            },
            scaling: function(t, e, n) {
                this.zero();
                var i = this.val;
                return i[0] = t, i[5] = e, i[10] = n, i[15] = 1, this
            },
            identity: function() {
                var t = this.val;
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
            },
            transpose: function() {
                var t = this.val,
                    e = t[1],
                    n = t[2],
                    i = t[3],
                    r = t[6],
                    s = t[7],
                    o = t[11];
                return t[1] = t[4], t[2] = t[8], t[3] = t[12], t[4] = e, t[6] = t[9], t[7] = t[13], t[8] = n, t[9] = r, t[11] = t[14], t[12] = i, t[13] = s, t[14] = o, this
            },
            invert: function() {
                var t = this.val,
                    e = t[0],
                    n = t[1],
                    i = t[2],
                    r = t[3],
                    s = t[4],
                    o = t[5],
                    a = t[6],
                    h = t[7],
                    l = t[8],
                    u = t[9],
                    c = t[10],
                    f = t[11],
                    d = t[12],
                    p = t[13],
                    v = t[14],
                    g = t[15],
                    m = e * o - n * s,
                    M = e * a - i * s,
                    x = e * h - r * s,
                    y = n * a - i * o,
                    w = n * h - r * o,
                    b = i * h - r * a,
                    E = l * p - u * d,
                    T = l * v - c * d,
                    A = l * g - f * d,
                    R = u * v - c * p,
                    S = u * g - f * p,
                    I = c * g - f * v,
                    C = m * I - M * S + x * R + y * A - w * T + b * E;
                return C ? (C = 1 / C, t[0] = (o * I - a * S + h * R) * C, t[1] = (i * S - n * I - r * R) * C, t[2] = (p * b - v * w + g * y) * C, t[3] = (c * w - u * b - f * y) * C, t[4] = (a * A - s * I - h * T) * C, t[5] = (e * I - i * A + r * T) * C, t[6] = (v * x - d * b - g * M) * C, t[7] = (l * b - c * x + f * M) * C, t[8] = (s * S - o * A + h * E) * C, t[9] = (n * A - e * S - r * E) * C, t[10] = (d * w - p * x + g * m) * C, t[11] = (u * x - l * w - f * m) * C, t[12] = (o * T - s * R - a * E) * C, t[13] = (e * R - n * T + i * E) * C, t[14] = (p * M - d * y - v * m) * C, t[15] = (l * y - u * M + c * m) * C, this) : null
            },
            adjoint: function() {
                var t = this.val,
                    e = t[0],
                    n = t[1],
                    i = t[2],
                    r = t[3],
                    s = t[4],
                    o = t[5],
                    a = t[6],
                    h = t[7],
                    l = t[8],
                    u = t[9],
                    c = t[10],
                    f = t[11],
                    d = t[12],
                    p = t[13],
                    v = t[14],
                    g = t[15];
                return t[0] = o * (c * g - f * v) - u * (a * g - h * v) + p * (a * f - h * c), t[1] = -(n * (c * g - f * v) - u * (i * g - r * v) + p * (i * f - r * c)), t[2] = n * (a * g - h * v) - o * (i * g - r * v) + p * (i * h - r * a), t[3] = -(n * (a * f - h * c) - o * (i * f - r * c) + u * (i * h - r * a)), t[4] = -(s * (c * g - f * v) - l * (a * g - h * v) + d * (a * f - h * c)), t[5] = e * (c * g - f * v) - l * (i * g - r * v) + d * (i * f - r * c), t[6] = -(e * (a * g - h * v) - s * (i * g - r * v) + d * (i * h - r * a)), t[7] = e * (a * f - h * c) - s * (i * f - r * c) + l * (i * h - r * a), t[8] = s * (u * g - f * p) - l * (o * g - h * p) + d * (o * f - h * u), t[9] = -(e * (u * g - f * p) - l * (n * g - r * p) + d * (n * f - r * u)), t[10] = e * (o * g - h * p) - s * (n * g - r * p) + d * (n * h - r * o), t[11] = -(e * (o * f - h * u) - s * (n * f - r * u) + l * (n * h - r * o)), t[12] = -(s * (u * v - c * p) - l * (o * v - a * p) + d * (o * c - a * u)), t[13] = e * (u * v - c * p) - l * (n * v - i * p) + d * (n * c - i * u), t[14] = -(e * (o * v - a * p) - s * (n * v - i * p) + d * (n * a - i * o)), t[15] = e * (o * c - a * u) - s * (n * c - i * u) + l * (n * a - i * o), this
            },
            determinant: function() {
                var t = this.val,
                    e = t[0],
                    n = t[1],
                    i = t[2],
                    r = t[3],
                    s = t[4],
                    o = t[5],
                    a = t[6],
                    h = t[7],
                    l = t[8],
                    u = t[9],
                    c = t[10],
                    f = t[11],
                    d = t[12],
                    p = t[13],
                    v = t[14],
                    g = t[15];
                return (e * o - n * s) * (c * g - f * v) - (e * a - i * s) * (u * g - f * p) + (e * h - r * s) * (u * v - c * p) + (n * a - i * o) * (l * g - f * d) - (n * h - r * o) * (l * v - c * d) + (i * h - r * a) * (l * p - u * d)
            },
            multiply: function(t) {
                var e = this.val,
                    n = e[0],
                    i = e[1],
                    r = e[2],
                    s = e[3],
                    o = e[4],
                    a = e[5],
                    h = e[6],
                    l = e[7],
                    u = e[8],
                    c = e[9],
                    f = e[10],
                    d = e[11],
                    p = e[12],
                    v = e[13],
                    g = e[14],
                    m = e[15],
                    M = t.val,
                    x = M[0],
                    y = M[1],
                    w = M[2],
                    b = M[3];
                return e[0] = x * n + y * o + w * u + b * p, e[1] = x * i + y * a + w * c + b * v, e[2] = x * r + y * h + w * f + b * g, e[3] = x * s + y * l + w * d + b * m, x = M[4], y = M[5], w = M[6], b = M[7], e[4] = x * n + y * o + w * u + b * p, e[5] = x * i + y * a + w * c + b * v, e[6] = x * r + y * h + w * f + b * g, e[7] = x * s + y * l + w * d + b * m, x = M[8], y = M[9], w = M[10], b = M[11], e[8] = x * n + y * o + w * u + b * p, e[9] = x * i + y * a + w * c + b * v, e[10] = x * r + y * h + w * f + b * g, e[11] = x * s + y * l + w * d + b * m, x = M[12], y = M[13], w = M[14], b = M[15], e[12] = x * n + y * o + w * u + b * p, e[13] = x * i + y * a + w * c + b * v, e[14] = x * r + y * h + w * f + b * g, e[15] = x * s + y * l + w * d + b * m, this
            },
            multiplyLocal: function(t) {
                var e = [],
                    n = this.val,
                    i = t.val;
                return e[0] = n[0] * i[0] + n[1] * i[4] + n[2] * i[8] + n[3] * i[12], e[1] = n[0] * i[1] + n[1] * i[5] + n[2] * i[9] + n[3] * i[13], e[2] = n[0] * i[2] + n[1] * i[6] + n[2] * i[10] + n[3] * i[14], e[3] = n[0] * i[3] + n[1] * i[7] + n[2] * i[11] + n[3] * i[15], e[4] = n[4] * i[0] + n[5] * i[4] + n[6] * i[8] + n[7] * i[12], e[5] = n[4] * i[1] + n[5] * i[5] + n[6] * i[9] + n[7] * i[13], e[6] = n[4] * i[2] + n[5] * i[6] + n[6] * i[10] + n[7] * i[14], e[7] = n[4] * i[3] + n[5] * i[7] + n[6] * i[11] + n[7] * i[15], e[8] = n[8] * i[0] + n[9] * i[4] + n[10] * i[8] + n[11] * i[12], e[9] = n[8] * i[1] + n[9] * i[5] + n[10] * i[9] + n[11] * i[13], e[10] = n[8] * i[2] + n[9] * i[6] + n[10] * i[10] + n[11] * i[14], e[11] = n[8] * i[3] + n[9] * i[7] + n[10] * i[11] + n[11] * i[15], e[12] = n[12] * i[0] + n[13] * i[4] + n[14] * i[8] + n[15] * i[12], e[13] = n[12] * i[1] + n[13] * i[5] + n[14] * i[9] + n[15] * i[13], e[14] = n[12] * i[2] + n[13] * i[6] + n[14] * i[10] + n[15] * i[14], e[15] = n[12] * i[3] + n[13] * i[7] + n[14] * i[11] + n[15] * i[15], this.fromArray(e)
            },
            translate: function(t) {
                var e = t.x,
                    n = t.y,
                    i = t.z,
                    r = this.val;
                return r[12] = r[0] * e + r[4] * n + r[8] * i + r[12], r[13] = r[1] * e + r[5] * n + r[9] * i + r[13], r[14] = r[2] * e + r[6] * n + r[10] * i + r[14], r[15] = r[3] * e + r[7] * n + r[11] * i + r[15], this
            },
            translateXYZ: function(t, e, n) {
                var i = this.val;
                return i[12] = i[0] * t + i[4] * e + i[8] * n + i[12], i[13] = i[1] * t + i[5] * e + i[9] * n + i[13], i[14] = i[2] * t + i[6] * e + i[10] * n + i[14], i[15] = i[3] * t + i[7] * e + i[11] * n + i[15], this
            },
            scale: function(t) {
                var e = t.x,
                    n = t.y,
                    i = t.z,
                    r = this.val;
                return r[0] = r[0] * e, r[1] = r[1] * e, r[2] = r[2] * e, r[3] = r[3] * e, r[4] = r[4] * n, r[5] = r[5] * n, r[6] = r[6] * n, r[7] = r[7] * n, r[8] = r[8] * i, r[9] = r[9] * i, r[10] = r[10] * i, r[11] = r[11] * i, this
            },
            scaleXYZ: function(t, e, n) {
                var i = this.val;
                return i[0] = i[0] * t, i[1] = i[1] * t, i[2] = i[2] * t, i[3] = i[3] * t, i[4] = i[4] * e, i[5] = i[5] * e, i[6] = i[6] * e, i[7] = i[7] * e, i[8] = i[8] * n, i[9] = i[9] * n, i[10] = i[10] * n, i[11] = i[11] * n, this
            },
            makeRotationAxis: function(t, e) {
                var n = Math.cos(e),
                    i = Math.sin(e),
                    r = 1 - n,
                    s = t.x,
                    o = t.y,
                    a = t.z,
                    h = r * s,
                    l = r * o;
                return this.fromArray([h * s + n, h * o - i * a, h * a + i * o, 0, h * o + i * a, l * o + n, l * a - i * s, 0, h * a - i * o, l * a + i * s, r * a * a + n, 0, 0, 0, 0, 1]), this
            },
            rotate: function(t, e) {
                var n = this.val,
                    i = e.x,
                    r = e.y,
                    s = e.z,
                    o = Math.sqrt(i * i + r * r + s * s);
                if (Math.abs(o) < 1e-6) return null;
                i *= o = 1 / o, r *= o, s *= o;
                var a = Math.sin(t),
                    h = Math.cos(t),
                    l = 1 - h,
                    u = n[0],
                    c = n[1],
                    f = n[2],
                    d = n[3],
                    p = n[4],
                    v = n[5],
                    g = n[6],
                    m = n[7],
                    M = n[8],
                    x = n[9],
                    y = n[10],
                    w = n[11],
                    b = i * i * l + h,
                    E = r * i * l + s * a,
                    T = s * i * l - r * a,
                    A = i * r * l - s * a,
                    R = r * r * l + h,
                    S = s * r * l + i * a,
                    I = i * s * l + r * a,
                    C = r * s * l - i * a,
                    P = s * s * l + h;
                return n[0] = u * b + p * E + M * T, n[1] = c * b + v * E + x * T, n[2] = f * b + g * E + y * T, n[3] = d * b + m * E + w * T, n[4] = u * A + p * R + M * S, n[5] = c * A + v * R + x * S, n[6] = f * A + g * R + y * S, n[7] = d * A + m * R + w * S, n[8] = u * I + p * C + M * P, n[9] = c * I + v * C + x * P, n[10] = f * I + g * C + y * P, n[11] = d * I + m * C + w * P, this
            },
            rotateX: function(t) {
                var e = this.val,
                    n = Math.sin(t),
                    i = Math.cos(t),
                    r = e[4],
                    s = e[5],
                    o = e[6],
                    a = e[7],
                    h = e[8],
                    l = e[9],
                    u = e[10],
                    c = e[11];
                return e[4] = r * i + h * n, e[5] = s * i + l * n, e[6] = o * i + u * n, e[7] = a * i + c * n, e[8] = h * i - r * n, e[9] = l * i - s * n, e[10] = u * i - o * n, e[11] = c * i - a * n, this
            },
            rotateY: function(t) {
                var e = this.val,
                    n = Math.sin(t),
                    i = Math.cos(t),
                    r = e[0],
                    s = e[1],
                    o = e[2],
                    a = e[3],
                    h = e[8],
                    l = e[9],
                    u = e[10],
                    c = e[11];
                return e[0] = r * i - h * n, e[1] = s * i - l * n, e[2] = o * i - u * n, e[3] = a * i - c * n, e[8] = r * n + h * i, e[9] = s * n + l * i, e[10] = o * n + u * i, e[11] = a * n + c * i, this
            },
            rotateZ: function(t) {
                var e = this.val,
                    n = Math.sin(t),
                    i = Math.cos(t),
                    r = e[0],
                    s = e[1],
                    o = e[2],
                    a = e[3],
                    h = e[4],
                    l = e[5],
                    u = e[6],
                    c = e[7];
                return e[0] = r * i + h * n, e[1] = s * i + l * n, e[2] = o * i + u * n, e[3] = a * i + c * n, e[4] = h * i - r * n, e[5] = l * i - s * n, e[6] = u * i - o * n, e[7] = c * i - a * n, this
            },
            fromRotationTranslation: function(t, e) {
                var n = this.val,
                    i = t.x,
                    r = t.y,
                    s = t.z,
                    o = t.w,
                    a = i + i,
                    h = r + r,
                    l = s + s,
                    u = i * a,
                    c = i * h,
                    f = i * l,
                    d = r * h,
                    p = r * l,
                    v = s * l,
                    g = o * a,
                    m = o * h,
                    M = o * l;
                return n[0] = 1 - (d + v), n[1] = c + M, n[2] = f - m, n[3] = 0, n[4] = c - M, n[5] = 1 - (u + v), n[6] = p + g, n[7] = 0, n[8] = f + m, n[9] = p - g, n[10] = 1 - (u + d), n[11] = 0, n[12] = e.x, n[13] = e.y, n[14] = e.z, n[15] = 1, this
            },
            fromQuat: function(t) {
                var e = this.val,
                    n = t.x,
                    i = t.y,
                    r = t.z,
                    s = t.w,
                    o = n + n,
                    a = i + i,
                    h = r + r,
                    l = n * o,
                    u = n * a,
                    c = n * h,
                    f = i * a,
                    d = i * h,
                    p = r * h,
                    v = s * o,
                    g = s * a,
                    m = s * h;
                return e[0] = 1 - (f + p), e[1] = u + m, e[2] = c - g, e[3] = 0, e[4] = u - m, e[5] = 1 - (l + p), e[6] = d + v, e[7] = 0, e[8] = c + g, e[9] = d - v, e[10] = 1 - (l + f), e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
            },
            frustum: function(t, e, n, i, r, s) {
                var o = this.val,
                    a = 1 / (e - t),
                    h = 1 / (i - n),
                    l = 1 / (r - s);
                return o[0] = 2 * r * a, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = 2 * r * h, o[6] = 0, o[7] = 0, o[8] = (e + t) * a, o[9] = (i + n) * h, o[10] = (s + r) * l, o[11] = -1, o[12] = 0, o[13] = 0, o[14] = s * r * 2 * l, o[15] = 0, this
            },
            perspective: function(t, e, n, i) {
                var r = this.val,
                    s = 1 / Math.tan(t / 2),
                    o = 1 / (n - i);
                return r[0] = s / e, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = s, r[6] = 0, r[7] = 0, r[8] = 0, r[9] = 0, r[10] = (i + n) * o, r[11] = -1, r[12] = 0, r[13] = 0, r[14] = 2 * i * n * o, r[15] = 0, this
            },
            perspectiveLH: function(t, e, n, i) {
                var r = this.val;
                return r[0] = 2 * n / t, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = 2 * n / e, r[6] = 0, r[7] = 0, r[8] = 0, r[9] = 0, r[10] = -i / (n - i), r[11] = 1, r[12] = 0, r[13] = 0, r[14] = n * i / (n - i), r[15] = 0, this
            },
            ortho: function(t, e, n, i, r, s) {
                var o = this.val,
                    a = t - e,
                    h = n - i,
                    l = r - s;
                return a = 0 === a ? a : 1 / a, h = 0 === h ? h : 1 / h, l = 0 === l ? l : 1 / l, o[0] = -2 * a, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = -2 * h, o[6] = 0, o[7] = 0, o[8] = 0, o[9] = 0, o[10] = 2 * l, o[11] = 0, o[12] = (t + e) * a, o[13] = (i + n) * h, o[14] = (s + r) * l, o[15] = 1, this
            },
            lookAt: function(t, e, n) {
                var i = this.val,
                    r = t.x,
                    s = t.y,
                    o = t.z,
                    a = n.x,
                    h = n.y,
                    l = n.z,
                    u = e.x,
                    c = e.y,
                    f = e.z;
                if (Math.abs(r - u) < 1e-6 && Math.abs(s - c) < 1e-6 && Math.abs(o - f) < 1e-6) return this.identity();
                var d = r - u,
                    p = s - c,
                    v = o - f,
                    g = 1 / Math.sqrt(d * d + p * p + v * v),
                    m = h * (v *= g) - l * (p *= g),
                    M = l * (d *= g) - a * v,
                    x = a * p - h * d;
                (g = Math.sqrt(m * m + M * M + x * x)) ? (m *= g = 1 / g, M *= g, x *= g) : (m = 0, M = 0, x = 0);
                var y = p * x - v * M,
                    w = v * m - d * x,
                    b = d * M - p * m;
                return (g = Math.sqrt(y * y + w * w + b * b)) ? (y *= g = 1 / g, w *= g, b *= g) : (y = 0, w = 0, b = 0), i[0] = m, i[1] = y, i[2] = d, i[3] = 0, i[4] = M, i[5] = w, i[6] = p, i[7] = 0, i[8] = x, i[9] = b, i[10] = v, i[11] = 0, i[12] = -(m * r + M * s + x * o), i[13] = -(y * r + w * s + b * o), i[14] = -(d * r + p * s + v * o), i[15] = 1, this
            },
            yawPitchRoll: function(t, e, n) {
                this.zero(), r.zero(), s.zero();
                var i = this.val,
                    o = r.val,
                    a = s.val,
                    h = Math.sin(n),
                    l = Math.cos(n);
                return i[10] = 1, i[15] = 1, i[0] = l, i[1] = h, i[4] = -h, i[5] = l, h = Math.sin(e), l = Math.cos(e), o[0] = 1, o[15] = 1, o[5] = l, o[10] = l, o[9] = -h, o[6] = h, h = Math.sin(t), l = Math.cos(t), a[5] = 1, a[15] = 1, a[0] = l, a[2] = -h, a[8] = h, a[10] = l, this.multiplyLocal(r), this.multiplyLocal(s), this
            },
            setWorldMatrix: function(t, e, n, i, o) {
                return this.yawPitchRoll(t.y, t.x, t.z), r.scaling(n.x, n.y, n.z), s.xyz(e.x, e.y, e.z), this.multiplyLocal(r), this.multiplyLocal(s), void 0 !== i && this.multiplyLocal(i), void 0 !== o && this.multiplyLocal(o), this
            }
        }),
        r = new i,
        s = new i;
    t.exports = i
}, function(t, e, n) {
    var i = n(0),
        r = n(10),
        s = n(26),
        o = new Int8Array([1, 2, 0]),
        a = new Float32Array([0, 0, 0]),
        h = new r(1, 0, 0),
        l = new r(0, 1, 0),
        u = new r,
        c = new s,
        f = new i({
            initialize: function(t, e, n, i) {
                "object" == typeof t ? (this.x = t.x || 0, this.y = t.y || 0, this.z = t.z || 0, this.w = t.w || 0) : (this.x = t || 0, this.y = e || 0, this.z = n || 0, this.w = i || 0)
            },
            copy: function(t) {
                return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w, this
            },
            set: function(t, e, n, i) {
                return "object" == typeof t ? (this.x = t.x || 0, this.y = t.y || 0, this.z = t.z || 0, this.w = t.w || 0) : (this.x = t || 0, this.y = e || 0, this.z = n || 0, this.w = i || 0), this
            },
            add: function(t) {
                return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this
            },
            subtract: function(t) {
                return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this
            },
            scale: function(t) {
                return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
            },
            length: function() {
                var t = this.x,
                    e = this.y,
                    n = this.z,
                    i = this.w;
                return Math.sqrt(t * t + e * e + n * n + i * i)
            },
            lengthSq: function() {
                var t = this.x,
                    e = this.y,
                    n = this.z,
                    i = this.w;
                return t * t + e * e + n * n + i * i
            },
            normalize: function() {
                var t = this.x,
                    e = this.y,
                    n = this.z,
                    i = this.w,
                    r = t * t + e * e + n * n + i * i;
                return r > 0 && (r = 1 / Math.sqrt(r), this.x = t * r, this.y = e * r, this.z = n * r, this.w = i * r), this
            },
            dot: function(t) {
                return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
            },
            lerp: function(t, e) {
                void 0 === e && (e = 0);
                var n = this.x,
                    i = this.y,
                    r = this.z,
                    s = this.w;
                return this.x = n + e * (t.x - n), this.y = i + e * (t.y - i), this.z = r + e * (t.z - r), this.w = s + e * (t.w - s), this
            },
            rotationTo: function(t, e) {
                var n = t.x * e.x + t.y * e.y + t.z * e.z;
                return n < -.999999 ? (u.copy(h).cross(t).length() < 1e-6 && u.copy(l).cross(t), u.normalize(), this.setAxisAngle(u, Math.PI)) : n > .999999 ? (this.x = 0, this.y = 0, this.z = 0, this.w = 1, this) : (u.copy(t).cross(e), this.x = u.x, this.y = u.y, this.z = u.z, this.w = 1 + n, this.normalize())
            },
            setAxes: function(t, e, n) {
                var i = c.val;
                return i[0] = e.x, i[3] = e.y, i[6] = e.z, i[1] = n.x, i[4] = n.y, i[7] = n.z, i[2] = -t.x, i[5] = -t.y, i[8] = -t.z, this.fromMat3(c).normalize()
            },
            identity: function() {
                return this.x = 0, this.y = 0, this.z = 0, this.w = 1, this
            },
            setAxisAngle: function(t, e) {
                e *= .5;
                var n = Math.sin(e);
                return this.x = n * t.x, this.y = n * t.y, this.z = n * t.z, this.w = Math.cos(e), this
            },
            multiply: function(t) {
                var e = this.x,
                    n = this.y,
                    i = this.z,
                    r = this.w,
                    s = t.x,
                    o = t.y,
                    a = t.z,
                    h = t.w;
                return this.x = e * h + r * s + n * a - i * o, this.y = n * h + r * o + i * s - e * a, this.z = i * h + r * a + e * o - n * s, this.w = r * h - e * s - n * o - i * a, this
            },
            slerp: function(t, e) {
                var n = this.x,
                    i = this.y,
                    r = this.z,
                    s = this.w,
                    o = t.x,
                    a = t.y,
                    h = t.z,
                    l = t.w,
                    u = n * o + i * a + r * h + s * l;
                u < 0 && (u = -u, o = -o, a = -a, h = -h, l = -l);
                var c = 1 - e,
                    f = e;
                if (1 - u > 1e-6) {
                    var d = Math.acos(u),
                        p = Math.sin(d);
                    c = Math.sin((1 - e) * d) / p, f = Math.sin(e * d) / p
                }
                return this.x = c * n + f * o, this.y = c * i + f * a, this.z = c * r + f * h, this.w = c * s + f * l, this
            },
            invert: function() {
                var t = this.x,
                    e = this.y,
                    n = this.z,
                    i = this.w,
                    r = t * t + e * e + n * n + i * i,
                    s = r ? 1 / r : 0;
                return this.x = -t * s, this.y = -e * s, this.z = -n * s, this.w = i * s, this
            },
            conjugate: function() {
                return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
            },
            rotateX: function(t) {
                t *= .5;
                var e = this.x,
                    n = this.y,
                    i = this.z,
                    r = this.w,
                    s = Math.sin(t),
                    o = Math.cos(t);
                return this.x = e * o + r * s, this.y = n * o + i * s, this.z = i * o - n * s, this.w = r * o - e * s, this
            },
            rotateY: function(t) {
                t *= .5;
                var e = this.x,
                    n = this.y,
                    i = this.z,
                    r = this.w,
                    s = Math.sin(t),
                    o = Math.cos(t);
                return this.x = e * o - i * s, this.y = n * o + r * s, this.z = i * o + e * s, this.w = r * o - n * s, this
            },
            rotateZ: function(t) {
                t *= .5;
                var e = this.x,
                    n = this.y,
                    i = this.z,
                    r = this.w,
                    s = Math.sin(t),
                    o = Math.cos(t);
                return this.x = e * o + n * s, this.y = n * o - e * s, this.z = i * o + r * s, this.w = r * o - i * s, this
            },
            calculateW: function() {
                var t = this.x,
                    e = this.y,
                    n = this.z;
                return this.w = -Math.sqrt(1 - t * t - e * e - n * n), this
            },
            fromMat3: function(t) {
                var e, n = t.val,
                    i = n[0] + n[4] + n[8];
                if (i > 0) e = Math.sqrt(i + 1), this.w = .5 * e, e = .5 / e, this.x = (n[7] - n[5]) * e, this.y = (n[2] - n[6]) * e, this.z = (n[3] - n[1]) * e;
                else {
                    var r = 0;
                    n[4] > n[0] && (r = 1), n[8] > n[3 * r + r] && (r = 2);
                    var s = o[r],
                        h = o[s];
                    e = Math.sqrt(n[3 * r + r] - n[3 * s + s] - n[3 * h + h] + 1), a[r] = .5 * e, e = .5 / e, a[s] = (n[3 * s + r] + n[3 * r + s]) * e, a[h] = (n[3 * h + r] + n[3 * r + h]) * e, this.x = a[0], this.y = a[1], this.z = a[2], this.w = (n[3 * h + s] - n[3 * s + h]) * e
                }
                return this
            }
        });
    t.exports = f
}, function(t, e, n) {
    var i = n(14),
        r = n(30);
    t.exports = function(t, e) {
        var n = void 0 === t ? r() : i({}, t);
        if (e)
            for (var s in e) void 0 !== e[s] && (n[s] = e[s]);
        return n
    }
}, function(t, e) {
    t.exports = function(t, e, n, i, r) {
        return void 0 === t && (t = ""), void 0 === e && (e = !0), void 0 === n && (n = ""), void 0 === i && (i = ""), void 0 === r && (r = 0), {
            responseType: t,
            async: e,
            user: n,
            password: i,
            timeout: r,
            header: void 0,
            headerValue: void 0,
            requestedWith: !1,
            overrideMimeType: void 0
        }
    }
}, function(t, e) {
    t.exports = function() {}
}, function(t, e, n) {
    var i = n(33),
        r = n(0),
        s = n(11),
        o = n(143),
        a = n(144),
        h = n(166),
        l = n(167),
        u = n(185),
        c = new r({
            Extends: a,
            initialize: function(t, e) {
                a.call(this, t, e);
                var n = e.game;
                this.isWebGL = 2 === n.config.renderType, this.cache = n.cache.addCustom("spine"), this.spineTextures = n.cache.addCustom("spineTextures"), this.json = n.cache.json, this.textures = n.textures, this.drawDebug = !1, this.gl, this.renderer, this.sceneRenderer, this.skeletonRenderer, this.skeletonDebugRenderer, this.plugin = h, this.temp1, this.temp2, this.isWebGL ? (this.runtime = h.webgl, this.renderer = n.renderer, this.gl = n.renderer.gl, this.getAtlas = this.getAtlasWebGL) : (this.runtime = h.canvas, this.renderer = n.renderer, this.getAtlas = this.getAtlasCanvas);
                var r = this;
                e.registerFileType("spine", this.spineFileCallback, t), e.registerGameObject("spine", function(t, e, n, i, s) {
                    var o = new u(this.scene, r, t, e, n, i, s);
                    return this.displayList.add(o), this.updateList.add(o), o
                }, function(t, e) {
                    void 0 === t && (t = {});
                    var n = s(t, "key", null),
                        o = s(t, "animationName", null),
                        a = s(t, "loop", !1),
                        h = new u(this.scene, r, 0, 0, n, o, a);
                    void 0 !== e && (t.add = e), i(this.scene, h, t);
                    var l = s(t, "skinName", !1);
                    l && h.setSkinByName(l);
                    var c = s(t, "slotName", !1),
                        f = s(t, "attachmentName", null);
                    return c && h.setAttachment(c, f), h.refresh()
                })
            },
            boot: function() {
                this.isWebGL ? (this.bootWebGL(), this.onResize(), this.game.scale.on(o, this.onResize, this)) : this.bootCanvas();
                var t = this.systems.events;
                t.once("shutdown", this.shutdown, this), t.once("destroy", this.destroy, this)
            },
            bootCanvas: function() {
                this.skeletonRenderer = new h.canvas.SkeletonRenderer(this.scene.sys.context)
            },
            bootWebGL: function() {
                this.sceneRenderer = new h.webgl.SceneRenderer(this.renderer.canvas, this.gl, !0);
                var t = function(t, e) {
                    if (t !== this.srcBlend || e !== this.dstBlend) {
                        var n = this.context.gl;
                        this.srcBlend = t, this.dstBlend = e, this.isDrawing && (this.flush(), n.blendFunc(this.srcBlend, this.dstBlend))
                    }
                };
                this.sceneRenderer.batcher.setBlendMode = t, this.sceneRenderer.shapes.setBlendMode = t, this.skeletonRenderer = this.sceneRenderer.skeletonRenderer, this.skeletonDebugRenderer = this.sceneRenderer.skeletonDebugRenderer, this.temp1 = new h.webgl.Vector3(0, 0, 0), this.temp2 = new h.webgl.Vector3(0, 0, 0)
            },
            getAtlasCanvas: function(t) {
                var e = this.cache.get(t);
                if (e) {
                    var n, i = this.spineTextures;
                    if (i.has(t)) n = i.get(t);
                    else {
                        var r = this.textures;
                        n = new h.TextureAtlas(e.data, function(t) {
                            return new h.canvas.CanvasTexture(r.get(t).getSourceImage())
                        })
                    }
                    return n
                }
                console.warn("No atlas data for: " + t)
            },
            getAtlasWebGL: function(t) {
                var e = this.cache.get(t);
                if (e) {
                    var n, i = this.spineTextures;
                    if (i.has(t)) n = i.get(t);
                    else {
                        var r = this.textures,
                            s = this.sceneRenderer.context.gl;
                        s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), n = new h.TextureAtlas(e.data, function(t) {
                            return new h.webgl.GLTexture(s, r.get(t).getSourceImage(), !1)
                        })
                    }
                    return n
                }
                console.warn("No atlas data for: " + t)
            },
            spineFileCallback: function(t, e, n, i, r, s) {
                var o;
                if (Array.isArray(t))
                    for (var a = 0; a < t.length; a++) o = new l(this, t[a]), this.addFile(o.files);
                else o = new l(this, t, e, n, i, r, s), this.addFile(o.files);
                return this
            },
            worldToLocal: function(t, e, n, i) {
                var r = this.temp1,
                    s = this.temp2,
                    o = this.sceneRenderer.camera;
                r.set(t + n.x, e - n.y, 0);
                var a = o.viewportWidth,
                    l = o.viewportHeight;
                return o.screenToWorld(r, a, l), i && null !== i.parent ? (i.parent.worldToLocal(s.set(r.x - n.x, r.y - n.y, 0)), new h.Vector2(s.x, s.y)) : i ? new h.Vector2(r.x - n.x, r.y - n.y) : new h.Vector2(r.x, r.y)
            },
            getVector2: function(t, e) {
                return new h.Vector2(t, e)
            },
            getVector3: function(t, e, n) {
                return new h.webgl.Vector3(t, e, n)
            },
            setDebugBones: function(t) {
                return void 0 === t && (t = !0), this.skeletonDebugRenderer.drawBones = t, this
            },
            setDebugRegionAttachments: function(t) {
                return void 0 === t && (t = !0), this.skeletonDebugRenderer.drawRegionAttachments = t, this
            },
            setDebugBoundingBoxes: function(t) {
                return void 0 === t && (t = !0), this.skeletonDebugRenderer.drawBoundingBoxes = t, this
            },
            setDebugMeshHull: function(t) {
                return void 0 === t && (t = !0), this.skeletonDebugRenderer.drawMeshHull = t, this
            },
            setDebugMeshTriangles: function(t) {
                return void 0 === t && (t = !0), this.skeletonDebugRenderer.drawMeshTriangles = t, this
            },
            setDebugPaths: function(t) {
                return void 0 === t && (t = !0), this.skeletonDebugRenderer.drawPaths = t, this
            },
            setDebugSkeletonXY: function(t) {
                return void 0 === t && (t = !0), this.skeletonDebugRenderer.drawSkeletonXY = t, this
            },
            setDebugClipping: function(t) {
                return void 0 === t && (t = !0), this.skeletonDebugRenderer.drawClipping = t, this
            },
            setEffect: function(t) {
                return this.sceneRenderer.skeletonRenderer.vertexEffect = t, this
            },
            createSkeleton: function(t, e) {
                var n = t,
                    i = t,
                    r = -1 !== t.indexOf(".");
                if (r) {
                    var o = t.split(".");
                    n = o.shift(), i = o.join(".")
                }
                var a = this.cache.get(n),
                    l = this.getAtlas(n);
                if (!l) return null;
                this.spineTextures.has(n) || this.spineTextures.add(n, l);
                var u, c = a.preMultipliedAlpha,
                    f = new h.AtlasAttachmentLoader(l),
                    d = new h.SkeletonJson(f);
                if (e) u = e;
                else {
                    var p = this.json.get(n);
                    u = r ? s(p, i) : p
                }
                if (u) {
                    var v = d.readSkeletonData(u);
                    return {
                        skeletonData: v,
                        skeleton: new h.Skeleton(v),
                        preMultipliedAlpha: c
                    }
                }
                return null
            },
            createAnimationState: function(t) {
                var e = new h.AnimationStateData(t.data);
                return {
                    stateData: e,
                    state: new h.AnimationState(e)
                }
            },
            getBounds: function(t) {
                var e = new h.Vector2,
                    n = new h.Vector2;
                return t.getBounds(e, n, []), {
                    offset: e,
                    size: n
                }
            },
            onResize: function() {
                var t = this.renderer,
                    e = this.sceneRenderer,
                    n = t.width,
                    i = t.height;
                e.camera.position.x = n / 2, e.camera.position.y = i / 2, e.camera.viewportWidth = n, e.camera.viewportHeight = i
            },
            shutdown: function() {
                this.systems.events.off("shutdown", this.shutdown, this)
            },
            destroy: function() {
                this.shutdown(), this.sceneRenderer && this.sceneRenderer.dispose(), this.pluginManager.removeGameObject("spine", !0, !0), this.pluginManager = null, this.game = null, this.scene = null, this.systems = null, this.cache = null, this.spineTextures = null, this.json = null, this.textures = null, this.sceneRenderer = null, this.skeletonRenderer = null, this.gl = null
            }
        });
    t.exports = c
}, function(t, e, n) {
    var i = n(34),
        r = n(35);
    t.exports = function(t, e, n) {
        e.x = r(n, "x", 0), e.y = r(n, "y", 0), e.depth = r(n, "depth", 0), e.flipX = r(n, "flipX", !1), e.flipY = r(n, "flipY", !1);
        var s = r(n, "scale", null);
        "number" == typeof s ? e.setScale(s) : null !== s && (e.scaleX = r(s, "x", 1), e.scaleY = r(s, "y", 1));
        var o = r(n, "scrollFactor", null);
        "number" == typeof o ? e.setScrollFactor(o) : null !== o && (e.scrollFactorX = r(o, "x", 1), e.scrollFactorY = r(o, "y", 1)), e.rotation = r(n, "rotation", 0);
        var a = r(n, "angle", null);
        null !== a && (e.angle = a), e.alpha = r(n, "alpha", 1);
        var h = r(n, "origin", null);
        if ("number" == typeof h) e.setOrigin(h);
        else if (null !== h) {
            var l = r(h, "x", .5),
                u = r(h, "y", .5);
            e.setOrigin(l, u)
        }
        return e.blendMode = r(n, "blendMode", i.NORMAL), e.visible = r(n, "visible", !0), r(n, "add", !0) && t.sys.displayList.add(e), e.preUpdate && t.sys.updateList.add(e), e
    }
}, function(t, e) {
    t.exports = {
        SKIP_CHECK: -1,
        NORMAL: 0,
        ADD: 1,
        MULTIPLY: 2,
        SCREEN: 3,
        OVERLAY: 4,
        DARKEN: 5,
        LIGHTEN: 6,
        COLOR_DODGE: 7,
        COLOR_BURN: 8,
        HARD_LIGHT: 9,
        SOFT_LIGHT: 10,
        DIFFERENCE: 11,
        EXCLUSION: 12,
        HUE: 13,
        SATURATION: 14,
        COLOR: 15,
        LUMINOSITY: 16,
        ERASE: 17,
        SOURCE_IN: 18,
        SOURCE_OUT: 19,
        SOURCE_ATOP: 20,
        DESTINATION_OVER: 21,
        DESTINATION_IN: 22,
        DESTINATION_OUT: 23,
        DESTINATION_ATOP: 24,
        LIGHTER: 25,
        COPY: 26,
        XOR: 27
    }
}, function(t, e, n) {
    var i = n(36),
        r = n(11);
    t.exports = function(t, e, n) {
        var s = r(t, e, null);
        if (null === s) return n;
        if (Array.isArray(s)) return i.RND.pick(s);
        if ("object" == typeof s) {
            if (s.hasOwnProperty("randInt")) return i.RND.integerInRange(s.randInt[0], s.randInt[1]);
            if (s.hasOwnProperty("randFloat")) return i.RND.realInRange(s.randFloat[0], s.randFloat[1])
        } else if ("function" == typeof s) return s(e);
        return s
    }
}, function(t, e, n) {
    var i = n(1),
        r = n(14),
        s = {
            Angle: n(37),
            Distance: n(44),
            Easing: n(48),
            Fuzzy: n(93),
            Interpolation: n(99),
            Pow2: n(107),
            Snap: n(111),
            RandomDataGenerator: n(115),
            Average: n(116),
            Bernstein: n(19),
            Between: n(117),
            CatmullRom: n(21),
            CeilTo: n(118),
            Clamp: n(9),
            DegToRad: n(25),
            Difference: n(119),
            Factorial: n(20),
            FloatBetween: n(120),
            FloorTo: n(121),
            FromPercent: n(122),
            GetSpeed: n(123),
            IsEven: n(124),
            IsEvenStrict: n(125),
            Linear: n(22),
            MaxAdd: n(126),
            MinSub: n(127),
            Percent: n(128),
            RadToDeg: n(6),
            RandomXY: n(129),
            RandomXYZ: n(130),
            RandomXYZW: n(131),
            Rotate: n(132),
            RotateAround: n(133),
            RotateAroundDistance: n(134),
            RoundAwayFromZero: n(135),
            RoundTo: n(136),
            SinCosTableGenerator: n(137),
            SmootherStep: n(24),
            SmoothStep: n(23),
            ToXY: n(138),
            TransformXY: n(139),
            Within: n(140),
            Wrap: n(3),
            Vector2: n(7),
            Vector3: n(10),
            Vector4: n(141),
            Matrix3: n(26),
            Matrix4: n(27),
            Quaternion: n(28),
            RotateVec3: n(142)
        };
    s = r(!1, s, i), t.exports = s
}, function(t, e, n) {
    t.exports = {
        Between: n(15),
        BetweenPoints: n(38),
        BetweenPointsY: n(39),
        BetweenY: n(40),
        CounterClockwise: n(5),
        Normalize: n(16),
        Reverse: n(41),
        RotateTo: n(42),
        ShortestBetween: n(43),
        Wrap: n(17),
        WrapDegrees: n(18)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return Math.atan2(e.y - t.y, e.x - t.x)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return Math.atan2(e.x - t.x, e.y - t.y)
    }
}, function(t, e) {
    t.exports = function(t, e, n, i) {
        return Math.atan2(n - t, i - e)
    }
}, function(t, e, n) {
    var i = n(16);
    t.exports = function(t) {
        return i(t + Math.PI)
    }
}, function(t, e, n) {
    var i = n(1);
    t.exports = function(t, e, n) {
        return void 0 === n && (n = .05), t === e ? t : (Math.abs(e - t) <= n || Math.abs(e - t) >= i.PI2 - n ? t = e : (Math.abs(e - t) > Math.PI && (e < t ? e += i.PI2 : e -= i.PI2), e > t ? t += n : e < t && (t -= n)), t)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        var n = e - t;
        return 0 === n ? 0 : n - 360 * Math.floor((n - -180) / 360)
    }
}, function(t, e, n) {
    t.exports = {
        Between: n(45),
        Power: n(46),
        Squared: n(47)
    }
}, function(t, e) {
    t.exports = function(t, e, n, i) {
        var r = t - n,
            s = e - i;
        return Math.sqrt(r * r + s * s)
    }
}, function(t, e) {
    t.exports = function(t, e, n, i, r) {
        return void 0 === r && (r = 2), Math.sqrt(Math.pow(n - t, r) + Math.pow(i - e, r))
    }
}, function(t, e) {
    t.exports = function(t, e, n, i) {
        var r = t - n,
            s = e - i;
        return r * r + s * s
    }
}, function(t, e, n) {
    t.exports = {
        Back: n(49),
        Bounce: n(53),
        Circular: n(57),
        Cubic: n(61),
        Elastic: n(65),
        Expo: n(69),
        Linear: n(73),
        Quadratic: n(75),
        Quartic: n(79),
        Quintic: n(83),
        Sine: n(87),
        Stepped: n(91)
    }
}, function(t, e, n) {
    t.exports = {
        In: n(50),
        Out: n(51),
        InOut: n(52)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return void 0 === e && (e = 1.70158), t * t * ((e + 1) * t - e)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return void 0 === e && (e = 1.70158), --t * t * ((e + 1) * t + e) + 1
    }
}, function(t, e) {
    t.exports = function(t, e) {
        void 0 === e && (e = 1.70158);
        var n = 1.525 * e;
        return (t *= 2) < 1 ? t * t * ((n + 1) * t - n) * .5 : .5 * ((t -= 2) * t * ((n + 1) * t + n) + 2)
    }
}, function(t, e, n) {
    t.exports = {
        In: n(54),
        Out: n(55),
        InOut: n(56)
    }
}, function(t, e) {
    t.exports = function(t) {
        return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
    }
}, function(t, e) {
    t.exports = function(t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = !1;
        return t < .5 ? (t = 1 - 2 * t, e = !0) : t = 2 * t - 1, t < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
    }
}, function(t, e, n) {
    t.exports = {
        In: n(58),
        Out: n(59),
        InOut: n(60)
    }
}, function(t, e) {
    t.exports = function(t) {
        return 1 - Math.sqrt(1 - t * t)
    }
}, function(t, e) {
    t.exports = function(t) {
        return Math.sqrt(1 - --t * t)
    }
}, function(t, e) {
    t.exports = function(t) {
        return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
    }
}, function(t, e, n) {
    t.exports = {
        In: n(62),
        Out: n(63),
        InOut: n(64)
    }
}, function(t, e) {
    t.exports = function(t) {
        return t * t * t
    }
}, function(t, e) {
    t.exports = function(t) {
        return --t * t * t + 1
    }
}, function(t, e) {
    t.exports = function(t) {
        return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
    }
}, function(t, e, n) {
    t.exports = {
        In: n(66),
        Out: n(67),
        InOut: n(68)
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        if (void 0 === e && (e = .1), void 0 === n && (n = .1), 0 === t) return 0;
        if (1 === t) return 1;
        var i = n / 4;
        return e < 1 ? e = 1 : i = n * Math.asin(1 / e) / (2 * Math.PI), -e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - i) * (2 * Math.PI) / n)
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        if (void 0 === e && (e = .1), void 0 === n && (n = .1), 0 === t) return 0;
        if (1 === t) return 1;
        var i = n / 4;
        return e < 1 ? e = 1 : i = n * Math.asin(1 / e) / (2 * Math.PI), e * Math.pow(2, -10 * t) * Math.sin((t - i) * (2 * Math.PI) / n) + 1
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        if (void 0 === e && (e = .1), void 0 === n && (n = .1), 0 === t) return 0;
        if (1 === t) return 1;
        var i = n / 4;
        return e < 1 ? e = 1 : i = n * Math.asin(1 / e) / (2 * Math.PI), (t *= 2) < 1 ? e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - i) * (2 * Math.PI) / n) * -.5 : e * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - i) * (2 * Math.PI) / n) * .5 + 1
    }
}, function(t, e, n) {
    t.exports = {
        In: n(70),
        Out: n(71),
        InOut: n(72)
    }
}, function(t, e) {
    t.exports = function(t) {
        return Math.pow(2, 10 * (t - 1)) - .001
    }
}, function(t, e) {
    t.exports = function(t) {
        return 1 - Math.pow(2, -10 * t)
    }
}, function(t, e) {
    t.exports = function(t) {
        return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
    }
}, function(t, e, n) {
    t.exports = n(74)
}, function(t, e) {
    t.exports = function(t) {
        return t
    }
}, function(t, e, n) {
    t.exports = {
        In: n(76),
        Out: n(77),
        InOut: n(78)
    }
}, function(t, e) {
    t.exports = function(t) {
        return t * t
    }
}, function(t, e) {
    t.exports = function(t) {
        return t * (2 - t)
    }
}, function(t, e) {
    t.exports = function(t) {
        return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
    }
}, function(t, e, n) {
    t.exports = {
        In: n(80),
        Out: n(81),
        InOut: n(82)
    }
}, function(t, e) {
    t.exports = function(t) {
        return t * t * t * t
    }
}, function(t, e) {
    t.exports = function(t) {
        return 1 - --t * t * t * t
    }
}, function(t, e) {
    t.exports = function(t) {
        return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
    }
}, function(t, e, n) {
    t.exports = {
        In: n(84),
        Out: n(85),
        InOut: n(86)
    }
}, function(t, e) {
    t.exports = function(t) {
        return t * t * t * t * t
    }
}, function(t, e) {
    t.exports = function(t) {
        return --t * t * t * t * t + 1
    }
}, function(t, e) {
    t.exports = function(t) {
        return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
    }
}, function(t, e, n) {
    t.exports = {
        In: n(88),
        Out: n(89),
        InOut: n(90)
    }
}, function(t, e) {
    t.exports = function(t) {
        return 0 === t ? 0 : 1 === t ? 1 : 1 - Math.cos(t * Math.PI / 2)
    }
}, function(t, e) {
    t.exports = function(t) {
        return 0 === t ? 0 : 1 === t ? 1 : Math.sin(t * Math.PI / 2)
    }
}, function(t, e) {
    t.exports = function(t) {
        return 0 === t ? 0 : 1 === t ? 1 : .5 * (1 - Math.cos(Math.PI * t))
    }
}, function(t, e, n) {
    t.exports = n(92)
}, function(t, e) {
    t.exports = function(t, e) {
        return void 0 === e && (e = 1), t <= 0 ? 0 : t >= 1 ? 1 : 1 / e * (1 + (e * t | 0))
    }
}, function(t, e, n) {
    t.exports = {
        Ceil: n(94),
        Equal: n(95),
        Floor: n(96),
        GreaterThan: n(97),
        LessThan: n(98)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return void 0 === e && (e = 1e-4), Math.ceil(t - e)
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        return void 0 === n && (n = 1e-4), Math.abs(t - e) < n
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return void 0 === e && (e = 1e-4), Math.floor(t + e)
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        return void 0 === n && (n = 1e-4), t > e - n
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        return void 0 === n && (n = 1e-4), t < e + n
    }
}, function(t, e, n) {
    t.exports = {
        Bezier: n(100),
        CatmullRom: n(101),
        CubicBezier: n(102),
        Linear: n(103),
        QuadraticBezier: n(104),
        SmoothStep: n(105),
        SmootherStep: n(106)
    }
}, function(t, e, n) {
    var i = n(19);
    t.exports = function(t, e) {
        for (var n = 0, r = t.length - 1, s = 0; s <= r; s++) n += Math.pow(1 - e, r - s) * Math.pow(e, s) * t[s] * i(r, s);
        return n
    }
}, function(t, e, n) {
    var i = n(21);
    t.exports = function(t, e) {
        var n = t.length - 1,
            r = n * e,
            s = Math.floor(r);
        return t[0] === t[n] ? (e < 0 && (s = Math.floor(r = n * (1 + e))), i(r - s, t[(s - 1 + n) % n], t[s], t[(s + 1) % n], t[(s + 2) % n])) : e < 0 ? t[0] - (i(-r, t[0], t[0], t[1], t[1]) - t[0]) : e > 1 ? t[n] - (i(r - n, t[n], t[n], t[n - 1], t[n - 1]) - t[n]) : i(r - s, t[s ? s - 1 : 0], t[s], t[n < s + 1 ? n : s + 1], t[n < s + 2 ? n : s + 2])
    }
}, function(t, e) {
    t.exports = function(t, e, n, i, r) {
        return function(t, e) {
            var n = 1 - t;
            return n * n * n * e
        }(t, e) + function(t, e) {
            var n = 1 - t;
            return 3 * n * n * t * e
        }(t, n) + function(t, e) {
            return 3 * (1 - t) * t * t * e
        }(t, i) + function(t, e) {
            return t * t * t * e
        }(t, r)
    }
}, function(t, e, n) {
    var i = n(22);
    t.exports = function(t, e) {
        var n = t.length - 1,
            r = n * e,
            s = Math.floor(r);
        return e < 0 ? i(t[0], t[1], r) : e > 1 ? i(t[n], t[n - 1], n - r) : i(t[s], t[s + 1 > n ? n : s + 1], r - s)
    }
}, function(t, e) {
    t.exports = function(t, e, n, i) {
        return function(t, e) {
            var n = 1 - t;
            return n * n * e
        }(t, e) + function(t, e) {
            return 2 * (1 - t) * t * e
        }(t, n) + function(t, e) {
            return t * t * e
        }(t, i)
    }
}, function(t, e, n) {
    var i = n(23);
    t.exports = function(t, e, n) {
        return e + (n - e) * i(t, 0, 1)
    }
}, function(t, e, n) {
    var i = n(24);
    t.exports = function(t, e, n) {
        return e + (n - e) * i(t, 0, 1)
    }
}, function(t, e, n) {
    t.exports = {
        GetNext: n(108),
        IsSize: n(109),
        IsValue: n(110)
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = Math.log(t) / .6931471805599453;
        return 1 << Math.ceil(e)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return t > 0 && 0 == (t & t - 1) && e > 0 && 0 == (e & e - 1)
    }
}, function(t, e) {
    t.exports = function(t) {
        return t > 0 && 0 == (t & t - 1)
    }
}, function(t, e, n) {
    t.exports = {
        Ceil: n(112),
        Floor: n(113),
        To: n(114)
    }
}, function(t, e) {
    t.exports = function(t, e, n, i) {
        return void 0 === n && (n = 0), 0 === e ? t : (t -= n, t = e * Math.ceil(t / e), i ? (n + t) / e : n + t)
    }
}, function(t, e) {
    t.exports = function(t, e, n, i) {
        return void 0 === n && (n = 0), 0 === e ? t : (t -= n, t = e * Math.floor(t / e), i ? (n + t) / e : n + t)
    }
}, function(t, e) {
    t.exports = function(t, e, n, i) {
        return void 0 === n && (n = 0), 0 === e ? t : (t -= n, t = e * Math.round(t / e), i ? (n + t) / e : n + t)
    }
}, function(t, e, n) {
    var i = new(n(0))({
        initialize: function(t) {
            void 0 === t && (t = [(Date.now() * Math.random()).toString()]), this.c = 1, this.s0 = 0, this.s1 = 0, this.s2 = 0, this.n = 0, this.signs = [-1, 1], t && this.init(t)
        },
        rnd: function() {
            var t = 2091639 * this.s0 + 2.3283064365386963e-10 * this.c;
            return this.c = 0 | t, this.s0 = this.s1, this.s1 = this.s2, this.s2 = t - this.c, this.s2
        },
        hash: function(t) {
            var e, n = this.n;
            t = t.toString();
            for (var i = 0; i < t.length; i++) e = .02519603282416938 * (n += t.charCodeAt(i)), e -= n = e >>> 0, n = (e *= n) >>> 0, n += 4294967296 * (e -= n);
            return this.n = n, 2.3283064365386963e-10 * (n >>> 0)
        },
        init: function(t) {
            "string" == typeof t ? this.state(t) : this.sow(t)
        },
        sow: function(t) {
            if (this.n = 4022871197, this.s0 = this.hash(" "), this.s1 = this.hash(" "), this.s2 = this.hash(" "), this.c = 1, t)
                for (var e = 0; e < t.length && null != t[e]; e++) {
                    var n = t[e];
                    this.s0 -= this.hash(n), this.s0 += ~~(this.s0 < 0), this.s1 -= this.hash(n), this.s1 += ~~(this.s1 < 0), this.s2 -= this.hash(n), this.s2 += ~~(this.s2 < 0)
                }
        },
        integer: function() {
            return 4294967296 * this.rnd()
        },
        frac: function() {
            return this.rnd() + 1.1102230246251565e-16 * (2097152 * this.rnd() | 0)
        },
        real: function() {
            return this.integer() + this.frac()
        },
        integerInRange: function(t, e) {
            return Math.floor(this.realInRange(0, e - t + 1) + t)
        },
        between: function(t, e) {
            return Math.floor(this.realInRange(0, e - t + 1) + t)
        },
        realInRange: function(t, e) {
            return this.frac() * (e - t) + t
        },
        normal: function() {
            return 1 - 2 * this.frac()
        },
        uuid: function() {
            var t = "",
                e = "";
            for (e = t = ""; t++ < 36; e += ~t % 5 | 3 * t & 4 ? (15 ^ t ? 8 ^ this.frac() * (20 ^ t ? 16 : 4) : 4).toString(16) : "-");
            return e
        },
        pick: function(t) {
            return t[this.integerInRange(0, t.length - 1)]
        },
        sign: function() {
            return this.pick(this.signs)
        },
        weightedPick: function(t) {
            return t[~~(Math.pow(this.frac(), 2) * (t.length - 1) + .5)]
        },
        timestamp: function(t, e) {
            return this.realInRange(t || 9466848e5, e || 1577862e6)
        },
        angle: function() {
            return this.integerInRange(-180, 180)
        },
        rotation: function() {
            return this.realInRange(-3.1415926, 3.1415926)
        },
        state: function(t) {
            return "string" == typeof t && t.match(/^!rnd/) && (t = t.split(","), this.c = parseFloat(t[1]), this.s0 = parseFloat(t[2]), this.s1 = parseFloat(t[3]), this.s2 = parseFloat(t[4])), ["!rnd", this.c, this.s0, this.s1, this.s2].join(",")
        },
        shuffle: function(t) {
            for (var e = t.length - 1; e > 0; e--) {
                var n = Math.floor(this.frac() * (e + 1)),
                    i = t[n];
                t[n] = t[e], t[e] = i
            }
            return t
        }
    });
    t.exports = i
}, function(t, e) {
    t.exports = function(t) {
        for (var e = 0, n = 0; n < t.length; n++) e += +t[n];
        return e / t.length
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return Math.floor(Math.random() * (e - t + 1) + t)
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        void 0 === e && (e = 0), void 0 === n && (n = 10);
        var i = Math.pow(n, -e);
        return Math.ceil(t * i) / i
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return Math.abs(t - e)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return Math.random() * (e - t) + t
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        void 0 === e && (e = 0), void 0 === n && (n = 10);
        var i = Math.pow(n, -e);
        return Math.floor(t * i) / i
    }
}, function(t, e, n) {
    var i = n(9);
    t.exports = function(t, e, n) {
        return (n - e) * (t = i(t, 0, 1))
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return t / e / 1e3
    }
}, function(t, e) {
    t.exports = function(t) {
        return t == parseFloat(t) ? !(t % 2) : void 0
    }
}, function(t, e) {
    t.exports = function(t) {
        return t === parseFloat(t) ? !(t % 2) : void 0
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        return Math.min(t + e, n)
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        return Math.max(t - e, n)
    }
}, function(t, e) {
    t.exports = function(t, e, n, i) {
        void 0 === n && (n = e + 1);
        var r = (t - e) / (n - e);
        return r > 1 ? void 0 !== i ? (r = (i - t) / (i - n)) < 0 && (r = 0) : r = 1 : r < 0 && (r = 0), r
    }
}, function(t, e) {
    t.exports = function(t, e) {
        void 0 === e && (e = 1);
        var n = 2 * Math.random() * Math.PI;
        return t.x = Math.cos(n) * e, t.y = Math.sin(n) * e, t
    }
}, function(t, e) {
    t.exports = function(t, e) {
        void 0 === e && (e = 1);
        var n = 2 * Math.random() * Math.PI,
            i = 2 * Math.random() - 1,
            r = Math.sqrt(1 - i * i) * e;
        return t.x = Math.cos(n) * r, t.y = Math.sin(n) * r, t.z = i * e, t
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return void 0 === e && (e = 1), t.x = (2 * Math.random() - 1) * e, t.y = (2 * Math.random() - 1) * e, t.z = (2 * Math.random() - 1) * e, t.w = (2 * Math.random() - 1) * e, t
    }
}, function(t, e) {
    t.exports = function(t, e) {
        var n = t.x,
            i = t.y;
        return t.x = n * Math.cos(e) - i * Math.sin(e), t.y = n * Math.sin(e) + i * Math.cos(e), t
    }
}, function(t, e) {
    t.exports = function(t, e, n, i) {
        var r = Math.cos(i),
            s = Math.sin(i),
            o = t.x - e,
            a = t.y - n;
        return t.x = o * r - a * s + e, t.y = o * s + a * r + n, t
    }
}, function(t, e) {
    t.exports = function(t, e, n, i, r) {
        var s = i + Math.atan2(t.y - n, t.x - e);
        return t.x = e + r * Math.cos(s), t.y = n + r * Math.sin(s), t
    }
}, function(t, e) {
    t.exports = function(t) {
        return t > 0 ? Math.ceil(t) : Math.floor(t)
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        void 0 === e && (e = 0), void 0 === n && (n = 10);
        var i = Math.pow(n, -e);
        return Math.round(t * i) / i
    }
}, function(t, e) {
    t.exports = function(t, e, n, i) {
        void 0 === e && (e = 1), void 0 === n && (n = 1), void 0 === i && (i = 1), i *= Math.PI / t;
        for (var r = [], s = [], o = 0; o < t; o++) e += (n -= e * i) * i, r[o] = n, s[o] = e;
        return {
            sin: s,
            cos: r,
            length: t
        }
    }
}, function(t, e, n) {
    var i = n(7);
    t.exports = function(t, e, n, r) {
        void 0 === r && (r = new i);
        var s = 0,
            o = 0;
        return t > 0 && t <= e * n && (s = t > e - 1 ? t - (o = Math.floor(t / e)) * e : t, r.set(s, o)), r
    }
}, function(t, e, n) {
    var i = n(7);
    t.exports = function(t, e, n, r, s, o, a, h) {
        void 0 === h && (h = new i);
        var l = Math.sin(s),
            u = Math.cos(s),
            c = u * o,
            f = l * o,
            d = -l * a,
            p = u * a,
            v = 1 / (c * p + d * -f);
        return h.x = p * v * t + -d * v * e + (r * d - n * p) * v, h.y = c * v * e + -f * v * t + (-r * c + n * f) * v, h
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        return Math.abs(t - e) <= n
    }
}, function(t, e, n) {
    var i = new(n(0))({
        initialize: function(t, e, n, i) {
            this.x = 0, this.y = 0, this.z = 0, this.w = 0, "object" == typeof t ? (this.x = t.x || 0, this.y = t.y || 0, this.z = t.z || 0, this.w = t.w || 0) : (this.x = t || 0, this.y = e || 0, this.z = n || 0, this.w = i || 0)
        },
        clone: function() {
            return new i(this.x, this.y, this.z, this.w)
        },
        copy: function(t) {
            return this.x = t.x, this.y = t.y, this.z = t.z || 0, this.w = t.w || 0, this
        },
        equals: function(t) {
            return this.x === t.x && this.y === t.y && this.z === t.z && this.w === t.w
        },
        set: function(t, e, n, i) {
            return "object" == typeof t ? (this.x = t.x || 0, this.y = t.y || 0, this.z = t.z || 0, this.w = t.w || 0) : (this.x = t || 0, this.y = e || 0, this.z = n || 0, this.w = i || 0), this
        },
        add: function(t) {
            return this.x += t.x, this.y += t.y, this.z += t.z || 0, this.w += t.w || 0, this
        },
        subtract: function(t) {
            return this.x -= t.x, this.y -= t.y, this.z -= t.z || 0, this.w -= t.w || 0, this
        },
        scale: function(t) {
            return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
        },
        length: function() {
            var t = this.x,
                e = this.y,
                n = this.z,
                i = this.w;
            return Math.sqrt(t * t + e * e + n * n + i * i)
        },
        lengthSq: function() {
            var t = this.x,
                e = this.y,
                n = this.z,
                i = this.w;
            return t * t + e * e + n * n + i * i
        },
        normalize: function() {
            var t = this.x,
                e = this.y,
                n = this.z,
                i = this.w,
                r = t * t + e * e + n * n + i * i;
            return r > 0 && (r = 1 / Math.sqrt(r), this.x = t * r, this.y = e * r, this.z = n * r, this.w = i * r), this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
        },
        lerp: function(t, e) {
            void 0 === e && (e = 0);
            var n = this.x,
                i = this.y,
                r = this.z,
                s = this.w;
            return this.x = n + e * (t.x - n), this.y = i + e * (t.y - i), this.z = r + e * (t.z - r), this.w = s + e * (t.w - s), this
        },
        multiply: function(t) {
            return this.x *= t.x, this.y *= t.y, this.z *= t.z || 1, this.w *= t.w || 1, this
        },
        divide: function(t) {
            return this.x /= t.x, this.y /= t.y, this.z /= t.z || 1, this.w /= t.w || 1, this
        },
        distance: function(t) {
            var e = t.x - this.x,
                n = t.y - this.y,
                i = t.z - this.z || 0,
                r = t.w - this.w || 0;
            return Math.sqrt(e * e + n * n + i * i + r * r)
        },
        distanceSq: function(t) {
            var e = t.x - this.x,
                n = t.y - this.y,
                i = t.z - this.z || 0,
                r = t.w - this.w || 0;
            return e * e + n * n + i * i + r * r
        },
        negate: function() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
        },
        transformMat4: function(t) {
            var e = this.x,
                n = this.y,
                i = this.z,
                r = this.w,
                s = t.val;
            return this.x = s[0] * e + s[4] * n + s[8] * i + s[12] * r, this.y = s[1] * e + s[5] * n + s[9] * i + s[13] * r, this.z = s[2] * e + s[6] * n + s[10] * i + s[14] * r, this.w = s[3] * e + s[7] * n + s[11] * i + s[15] * r, this
        },
        transformQuat: function(t) {
            var e = this.x,
                n = this.y,
                i = this.z,
                r = t.x,
                s = t.y,
                o = t.z,
                a = t.w,
                h = a * e + s * i - o * n,
                l = a * n + o * e - r * i,
                u = a * i + r * n - s * e,
                c = -r * e - s * n - o * i;
            return this.x = h * a + c * -r + l * -o - u * -s, this.y = l * a + c * -s + u * -r - h * -o, this.z = u * a + c * -o + h * -s - l * -r, this
        },
        reset: function() {
            return this.x = 0, this.y = 0, this.z = 0, this.w = 0, this
        }
    });
    i.prototype.sub = i.prototype.subtract, i.prototype.mul = i.prototype.multiply, i.prototype.div = i.prototype.divide, i.prototype.dist = i.prototype.distance, i.prototype.distSq = i.prototype.distanceSq, i.prototype.len = i.prototype.length, i.prototype.lenSq = i.prototype.lengthSq, t.exports = i
}, function(t, e, n) {
    var i = n(10),
        r = n(27),
        s = n(28),
        o = new r,
        a = new s,
        h = new i;
    t.exports = function(t, e, n) {
        return a.setAxisAngle(e, n), o.fromRotationTranslation(a, h.set(0, 0, 0)), t.transformMat4(o)
    }
}, function(t, e) {
    t.exports = "resize"
}, function(t, e, n) {
    var i = n(145),
        r = n(0),
        s = n(146),
        o = new r({
            Extends: i,
            initialize: function(t, e) {
                i.call(this, e), this.scene = t, this.systems = t.sys, t.sys.events.once(s.BOOT, this.boot, this)
            },
            boot: function() {},
            destroy: function() {
                this.pluginManager = null, this.game = null, this.scene = null, this.systems = null
            }
        });
    t.exports = o
}, function(t, e, n) {
    var i = new(n(0))({
        initialize: function(t) {
            this.pluginManager = t, this.game = t.game
        },
        init: function() {},
        start: function() {},
        stop: function() {},
        destroy: function() {
            this.pluginManager = null, this.game = null, this.scene = null, this.systems = null
        }
    });
    t.exports = i
}, function(t, e, n) {
    t.exports = {
        BOOT: n(147),
        CREATE: n(148),
        DESTROY: n(149),
        PAUSE: n(150),
        POST_UPDATE: n(151),
        PRE_UPDATE: n(152),
        READY: n(153),
        RENDER: n(154),
        RESUME: n(155),
        SHUTDOWN: n(156),
        SLEEP: n(157),
        START: n(158),
        TRANSITION_COMPLETE: n(159),
        TRANSITION_INIT: n(160),
        TRANSITION_OUT: n(161),
        TRANSITION_START: n(162),
        TRANSITION_WAKE: n(163),
        UPDATE: n(164),
        WAKE: n(165)
    }
}, function(t, e) {
    t.exports = "boot"
}, function(t, e) {
    t.exports = "create"
}, function(t, e) {
    t.exports = "destroy"
}, function(t, e) {
    t.exports = "pause"
}, function(t, e) {
    t.exports = "postupdate"
}, function(t, e) {
    t.exports = "preupdate"
}, function(t, e) {
    t.exports = "ready"
}, function(t, e) {
    t.exports = "render"
}, function(t, e) {
    t.exports = "resume"
}, function(t, e) {
    t.exports = "shutdown"
}, function(t, e) {
    t.exports = "sleep"
}, function(t, e) {
    t.exports = "start"
}, function(t, e) {
    t.exports = "transitioncomplete"
}, function(t, e) {
    t.exports = "transitioninit"
}, function(t, e) {
    t.exports = "transitionout"
}, function(t, e) {
    t.exports = "transitionstart"
}, function(t, e) {
    t.exports = "transitionwake"
}, function(t, e) {
    t.exports = "update"
}, function(t, e) {
    t.exports = "wake"
}, function(t, e) {
    (function() {
        var e, n, i, r = this && this.__extends || (e = function(t, n) {
            return (e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, n)
        }, function(t, n) {
            function i() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
        });
        ! function(t) {
            var e, n, i, s = function() {
                function t(t, e, n) {
                    if (null == t) throw new Error("name cannot be null.");
                    if (null == e) throw new Error("timelines cannot be null.");
                    this.name = t, this.timelines = e, this.timelineIds = [];
                    for (var i = 0; i < e.length; i++) this.timelineIds[e[i].getPropertyId()] = !0;
                    this.duration = n
                }
                return t.prototype.hasTimeline = function(t) {
                    return 1 == this.timelineIds[t]
                }, t.prototype.apply = function(t, e, n, i, r, s, o, a) {
                    if (null == t) throw new Error("skeleton cannot be null.");
                    i && 0 != this.duration && (n %= this.duration, e > 0 && (e %= this.duration));
                    for (var h = this.timelines, l = 0, u = h.length; l < u; l++) h[l].apply(t, e, n, r, s, o, a)
                }, t.binarySearch = function(t, e, n) {
                    void 0 === n && (n = 1);
                    var i = 0,
                        r = t.length / n - 2;
                    if (0 == r) return n;
                    for (var s = r >>> 1;;) {
                        if (t[(s + 1) * n] <= e ? i = s + 1 : r = s, i == r) return (i + 1) * n;
                        s = i + r >>> 1
                    }
                }, t.linearSearch = function(t, e, n) {
                    for (var i = 0, r = t.length - n; i <= r; i += n)
                        if (t[i] > e) return i;
                    return -1
                }, t
            }();
            t.Animation = s,
                function(t) {
                    t[t.setup = 0] = "setup", t[t.first = 1] = "first", t[t.replace = 2] = "replace", t[t.add = 3] = "add"
                }(e = t.MixBlend || (t.MixBlend = {})),
                function(t) {
                    t[t.mixIn = 0] = "mixIn", t[t.mixOut = 1] = "mixOut"
                }(n = t.MixDirection || (t.MixDirection = {})),
                function(t) {
                    t[t.rotate = 0] = "rotate", t[t.translate = 1] = "translate", t[t.scale = 2] = "scale", t[t.shear = 3] = "shear", t[t.attachment = 4] = "attachment", t[t.color = 5] = "color", t[t.deform = 6] = "deform", t[t.event = 7] = "event", t[t.drawOrder = 8] = "drawOrder", t[t.ikConstraint = 9] = "ikConstraint", t[t.transformConstraint = 10] = "transformConstraint", t[t.pathConstraintPosition = 11] = "pathConstraintPosition", t[t.pathConstraintSpacing = 12] = "pathConstraintSpacing", t[t.pathConstraintMix = 13] = "pathConstraintMix", t[t.twoColor = 14] = "twoColor"
                }(i = t.TimelineType || (t.TimelineType = {}));
            var o = function() {
                function e(n) {
                    if (n <= 0) throw new Error("frameCount must be > 0: " + n);
                    this.curves = t.Utils.newFloatArray((n - 1) * e.BEZIER_SIZE)
                }
                return e.prototype.getFrameCount = function() {
                    return this.curves.length / e.BEZIER_SIZE + 1
                }, e.prototype.setLinear = function(t) {
                    this.curves[t * e.BEZIER_SIZE] = e.LINEAR
                }, e.prototype.setStepped = function(t) {
                    this.curves[t * e.BEZIER_SIZE] = e.STEPPED
                }, e.prototype.getCurveType = function(t) {
                    var n = t * e.BEZIER_SIZE;
                    if (n == this.curves.length) return e.LINEAR;
                    var i = this.curves[n];
                    return i == e.LINEAR ? e.LINEAR : i == e.STEPPED ? e.STEPPED : e.BEZIER
                }, e.prototype.setCurve = function(t, n, i, r, s) {
                    var o = .03 * (2 * -n + r),
                        a = .03 * (2 * -i + s),
                        h = .006 * (3 * (n - r) + 1),
                        l = .006 * (3 * (i - s) + 1),
                        u = 2 * o + h,
                        c = 2 * a + l,
                        f = .3 * n + o + .16666667 * h,
                        d = .3 * i + a + .16666667 * l,
                        p = t * e.BEZIER_SIZE,
                        v = this.curves;
                    v[p++] = e.BEZIER;
                    for (var g = f, m = d, M = p + e.BEZIER_SIZE - 1; p < M; p += 2) v[p] = g, v[p + 1] = m, f += u, d += c, u += h, c += l, g += f, m += d
                }, e.prototype.getCurvePercent = function(n, i) {
                    i = t.MathUtils.clamp(i, 0, 1);
                    var r = this.curves,
                        s = n * e.BEZIER_SIZE,
                        o = r[s];
                    if (o == e.LINEAR) return i;
                    if (o == e.STEPPED) return 0;
                    for (var a = 0, h = ++s, l = s + e.BEZIER_SIZE - 1; s < l; s += 2)
                        if ((a = r[s]) >= i) {
                            var u = void 0,
                                c = void 0;
                            return s == h ? (u = 0, c = 0) : (u = r[s - 2], c = r[s - 1]), c + (r[s + 1] - c) * (i - u) / (a - u)
                        }
                    var f = r[s - 1];
                    return f + (1 - f) * (i - a) / (1 - a)
                }, e.LINEAR = 0, e.STEPPED = 1, e.BEZIER = 2, e.BEZIER_SIZE = 19, e
            }();
            t.CurveTimeline = o;
            var a = function(n) {
                function o(e) {
                    var i = n.call(this, e) || this;
                    return i.frames = t.Utils.newFloatArray(e << 1), i
                }
                return r(o, n), o.prototype.getPropertyId = function() {
                    return (i.rotate << 24) + this.boneIndex
                }, o.prototype.setFrame = function(t, e, n) {
                    t <<= 1, this.frames[t] = e, this.frames[t + o.ROTATION] = n
                }, o.prototype.apply = function(t, n, i, r, a, h, l) {
                    var u = this.frames,
                        c = t.bones[this.boneIndex];
                    if (c.active)
                        if (i < u[0]) switch (h) {
                            case e.setup:
                                return void(c.rotation = c.data.rotation);
                            case e.first:
                                var f = c.data.rotation - c.rotation;
                                c.rotation += (f - 360 * (16384 - (16384.499999999996 - f / 360 | 0))) * a
                        } else if (i >= u[u.length - o.ENTRIES]) {
                            var d = u[u.length + o.PREV_ROTATION];
                            switch (h) {
                                case e.setup:
                                    c.rotation = c.data.rotation + d * a;
                                    break;
                                case e.first:
                                case e.replace:
                                    d += c.data.rotation - c.rotation, d -= 360 * (16384 - (16384.499999999996 - d / 360 | 0));
                                case e.add:
                                    c.rotation += d * a
                            }
                        } else {
                            var p = s.binarySearch(u, i, o.ENTRIES),
                                v = u[p + o.PREV_ROTATION],
                                g = u[p],
                                m = this.getCurvePercent((p >> 1) - 1, 1 - (i - g) / (u[p + o.PREV_TIME] - g)),
                                M = u[p + o.ROTATION] - v;
                            switch (M = v + (M - 360 * (16384 - (16384.499999999996 - M / 360 | 0))) * m, h) {
                                case e.setup:
                                    c.rotation = c.data.rotation + (M - 360 * (16384 - (16384.499999999996 - M / 360 | 0))) * a;
                                    break;
                                case e.first:
                                case e.replace:
                                    M += c.data.rotation - c.rotation;
                                case e.add:
                                    c.rotation += (M - 360 * (16384 - (16384.499999999996 - M / 360 | 0))) * a
                            }
                        }
                }, o.ENTRIES = 2, o.PREV_TIME = -2, o.PREV_ROTATION = -1, o.ROTATION = 1, o
            }(o);
            t.RotateTimeline = a;
            var h = function(n) {
                function o(e) {
                    var i = n.call(this, e) || this;
                    return i.frames = t.Utils.newFloatArray(e * o.ENTRIES), i
                }
                return r(o, n), o.prototype.getPropertyId = function() {
                    return (i.translate << 24) + this.boneIndex
                }, o.prototype.setFrame = function(t, e, n, i) {
                    t *= o.ENTRIES, this.frames[t] = e, this.frames[t + o.X] = n, this.frames[t + o.Y] = i
                }, o.prototype.apply = function(t, n, i, r, a, h, l) {
                    var u = this.frames,
                        c = t.bones[this.boneIndex];
                    if (c.active)
                        if (i < u[0]) switch (h) {
                            case e.setup:
                                return c.x = c.data.x, void(c.y = c.data.y);
                            case e.first:
                                c.x += (c.data.x - c.x) * a, c.y += (c.data.y - c.y) * a
                        } else {
                            var f = 0,
                                d = 0;
                            if (i >= u[u.length - o.ENTRIES]) f = u[u.length + o.PREV_X], d = u[u.length + o.PREV_Y];
                            else {
                                var p = s.binarySearch(u, i, o.ENTRIES);
                                f = u[p + o.PREV_X], d = u[p + o.PREV_Y];
                                var v = u[p],
                                    g = this.getCurvePercent(p / o.ENTRIES - 1, 1 - (i - v) / (u[p + o.PREV_TIME] - v));
                                f += (u[p + o.X] - f) * g, d += (u[p + o.Y] - d) * g
                            }
                            switch (h) {
                                case e.setup:
                                    c.x = c.data.x + f * a, c.y = c.data.y + d * a;
                                    break;
                                case e.first:
                                case e.replace:
                                    c.x += (c.data.x + f - c.x) * a, c.y += (c.data.y + d - c.y) * a;
                                    break;
                                case e.add:
                                    c.x += f * a, c.y += d * a
                            }
                        }
                }, o.ENTRIES = 3, o.PREV_TIME = -3, o.PREV_X = -2, o.PREV_Y = -1, o.X = 1, o.Y = 2, o
            }(o);
            t.TranslateTimeline = h;
            var l = function(o) {
                function a(t) {
                    return o.call(this, t) || this
                }
                return r(a, o), a.prototype.getPropertyId = function() {
                    return (i.scale << 24) + this.boneIndex
                }, a.prototype.apply = function(i, r, o, h, l, u, c) {
                    var f = this.frames,
                        d = i.bones[this.boneIndex];
                    if (d.active)
                        if (o < f[0]) switch (u) {
                            case e.setup:
                                return d.scaleX = d.data.scaleX, void(d.scaleY = d.data.scaleY);
                            case e.first:
                                d.scaleX += (d.data.scaleX - d.scaleX) * l, d.scaleY += (d.data.scaleY - d.scaleY) * l
                        } else {
                            var p = 0,
                                v = 0;
                            if (o >= f[f.length - a.ENTRIES]) p = f[f.length + a.PREV_X] * d.data.scaleX, v = f[f.length + a.PREV_Y] * d.data.scaleY;
                            else {
                                var g = s.binarySearch(f, o, a.ENTRIES);
                                p = f[g + a.PREV_X], v = f[g + a.PREV_Y];
                                var m = f[g],
                                    M = this.getCurvePercent(g / a.ENTRIES - 1, 1 - (o - m) / (f[g + a.PREV_TIME] - m));
                                p = (p + (f[g + a.X] - p) * M) * d.data.scaleX, v = (v + (f[g + a.Y] - v) * M) * d.data.scaleY
                            }
                            if (1 == l) u == e.add ? (d.scaleX += p - d.data.scaleX, d.scaleY += v - d.data.scaleY) : (d.scaleX = p, d.scaleY = v);
                            else {
                                var x = 0,
                                    y = 0;
                                if (c == n.mixOut) switch (u) {
                                    case e.setup:
                                        x = d.data.scaleX, y = d.data.scaleY, d.scaleX = x + (Math.abs(p) * t.MathUtils.signum(x) - x) * l, d.scaleY = y + (Math.abs(v) * t.MathUtils.signum(y) - y) * l;
                                        break;
                                    case e.first:
                                    case e.replace:
                                        x = d.scaleX, y = d.scaleY, d.scaleX = x + (Math.abs(p) * t.MathUtils.signum(x) - x) * l, d.scaleY = y + (Math.abs(v) * t.MathUtils.signum(y) - y) * l;
                                        break;
                                    case e.add:
                                        x = d.scaleX, y = d.scaleY, d.scaleX = x + (Math.abs(p) * t.MathUtils.signum(x) - d.data.scaleX) * l, d.scaleY = y + (Math.abs(v) * t.MathUtils.signum(y) - d.data.scaleY) * l
                                } else switch (u) {
                                    case e.setup:
                                        x = Math.abs(d.data.scaleX) * t.MathUtils.signum(p), y = Math.abs(d.data.scaleY) * t.MathUtils.signum(v), d.scaleX = x + (p - x) * l, d.scaleY = y + (v - y) * l;
                                        break;
                                    case e.first:
                                    case e.replace:
                                        x = Math.abs(d.scaleX) * t.MathUtils.signum(p), y = Math.abs(d.scaleY) * t.MathUtils.signum(v), d.scaleX = x + (p - x) * l, d.scaleY = y + (v - y) * l;
                                        break;
                                    case e.add:
                                        x = t.MathUtils.signum(p), y = t.MathUtils.signum(v), d.scaleX = Math.abs(d.scaleX) * x + (p - Math.abs(d.data.scaleX) * x) * l, d.scaleY = Math.abs(d.scaleY) * y + (v - Math.abs(d.data.scaleY) * y) * l
                                }
                            }
                        }
                }, a
            }(h);
            t.ScaleTimeline = l;
            var u = function(t) {
                function n(e) {
                    return t.call(this, e) || this
                }
                return r(n, t), n.prototype.getPropertyId = function() {
                    return (i.shear << 24) + this.boneIndex
                }, n.prototype.apply = function(t, i, r, o, a, h, l) {
                    var u = this.frames,
                        c = t.bones[this.boneIndex];
                    if (c.active)
                        if (r < u[0]) switch (h) {
                            case e.setup:
                                return c.shearX = c.data.shearX, void(c.shearY = c.data.shearY);
                            case e.first:
                                c.shearX += (c.data.shearX - c.shearX) * a, c.shearY += (c.data.shearY - c.shearY) * a
                        } else {
                            var f = 0,
                                d = 0;
                            if (r >= u[u.length - n.ENTRIES]) f = u[u.length + n.PREV_X], d = u[u.length + n.PREV_Y];
                            else {
                                var p = s.binarySearch(u, r, n.ENTRIES);
                                f = u[p + n.PREV_X], d = u[p + n.PREV_Y];
                                var v = u[p],
                                    g = this.getCurvePercent(p / n.ENTRIES - 1, 1 - (r - v) / (u[p + n.PREV_TIME] - v));
                                f += (u[p + n.X] - f) * g, d += (u[p + n.Y] - d) * g
                            }
                            switch (h) {
                                case e.setup:
                                    c.shearX = c.data.shearX + f * a, c.shearY = c.data.shearY + d * a;
                                    break;
                                case e.first:
                                case e.replace:
                                    c.shearX += (c.data.shearX + f - c.shearX) * a, c.shearY += (c.data.shearY + d - c.shearY) * a;
                                    break;
                                case e.add:
                                    c.shearX += f * a, c.shearY += d * a
                            }
                        }
                }, n
            }(h);
            t.ShearTimeline = u;
            var c = function(n) {
                function o(e) {
                    var i = n.call(this, e) || this;
                    return i.frames = t.Utils.newFloatArray(e * o.ENTRIES), i
                }
                return r(o, n), o.prototype.getPropertyId = function() {
                    return (i.color << 24) + this.slotIndex
                }, o.prototype.setFrame = function(t, e, n, i, r, s) {
                    t *= o.ENTRIES, this.frames[t] = e, this.frames[t + o.R] = n, this.frames[t + o.G] = i, this.frames[t + o.B] = r, this.frames[t + o.A] = s
                }, o.prototype.apply = function(t, n, i, r, a, h, l) {
                    var u = t.slots[this.slotIndex];
                    if (u.bone.active) {
                        var c = this.frames;
                        if (i < c[0]) switch (h) {
                            case e.setup:
                                return void u.color.setFromColor(u.data.color);
                            case e.first:
                                var f = u.color,
                                    d = u.data.color;
                                f.add((d.r - f.r) * a, (d.g - f.g) * a, (d.b - f.b) * a, (d.a - f.a) * a)
                        } else {
                            var p = 0,
                                v = 0,
                                g = 0,
                                m = 0;
                            if (i >= c[c.length - o.ENTRIES]) {
                                var M = c.length;
                                p = c[M + o.PREV_R], v = c[M + o.PREV_G], g = c[M + o.PREV_B], m = c[M + o.PREV_A]
                            } else {
                                var x = s.binarySearch(c, i, o.ENTRIES);
                                p = c[x + o.PREV_R], v = c[x + o.PREV_G], g = c[x + o.PREV_B], m = c[x + o.PREV_A];
                                var y = c[x],
                                    w = this.getCurvePercent(x / o.ENTRIES - 1, 1 - (i - y) / (c[x + o.PREV_TIME] - y));
                                p += (c[x + o.R] - p) * w, v += (c[x + o.G] - v) * w, g += (c[x + o.B] - g) * w, m += (c[x + o.A] - m) * w
                            }
                            if (1 == a) u.color.set(p, v, g, m);
                            else {
                                f = u.color;
                                h == e.setup && f.setFromColor(u.data.color), f.add((p - f.r) * a, (v - f.g) * a, (g - f.b) * a, (m - f.a) * a)
                            }
                        }
                    }
                }, o.ENTRIES = 5, o.PREV_TIME = -5, o.PREV_R = -4, o.PREV_G = -3, o.PREV_B = -2, o.PREV_A = -1, o.R = 1, o.G = 2, o.B = 3, o.A = 4, o
            }(o);
            t.ColorTimeline = c;
            var f = function(n) {
                function o(e) {
                    var i = n.call(this, e) || this;
                    return i.frames = t.Utils.newFloatArray(e * o.ENTRIES), i
                }
                return r(o, n), o.prototype.getPropertyId = function() {
                    return (i.twoColor << 24) + this.slotIndex
                }, o.prototype.setFrame = function(t, e, n, i, r, s, a, h, l) {
                    t *= o.ENTRIES, this.frames[t] = e, this.frames[t + o.R] = n, this.frames[t + o.G] = i, this.frames[t + o.B] = r, this.frames[t + o.A] = s, this.frames[t + o.R2] = a, this.frames[t + o.G2] = h, this.frames[t + o.B2] = l
                }, o.prototype.apply = function(t, n, i, r, a, h, l) {
                    var u = t.slots[this.slotIndex];
                    if (u.bone.active) {
                        var c = this.frames;
                        if (i < c[0]) switch (h) {
                            case e.setup:
                                return u.color.setFromColor(u.data.color), void u.darkColor.setFromColor(u.data.darkColor);
                            case e.first:
                                var f = u.color,
                                    d = u.darkColor,
                                    p = u.data.color,
                                    v = u.data.darkColor;
                                f.add((p.r - f.r) * a, (p.g - f.g) * a, (p.b - f.b) * a, (p.a - f.a) * a), d.add((v.r - d.r) * a, (v.g - d.g) * a, (v.b - d.b) * a, 0)
                        } else {
                            var g = 0,
                                m = 0,
                                M = 0,
                                x = 0,
                                y = 0,
                                w = 0,
                                b = 0;
                            if (i >= c[c.length - o.ENTRIES]) {
                                var E = c.length;
                                g = c[E + o.PREV_R], m = c[E + o.PREV_G], M = c[E + o.PREV_B], x = c[E + o.PREV_A], y = c[E + o.PREV_R2], w = c[E + o.PREV_G2], b = c[E + o.PREV_B2]
                            } else {
                                var T = s.binarySearch(c, i, o.ENTRIES);
                                g = c[T + o.PREV_R], m = c[T + o.PREV_G], M = c[T + o.PREV_B], x = c[T + o.PREV_A], y = c[T + o.PREV_R2], w = c[T + o.PREV_G2], b = c[T + o.PREV_B2];
                                var A = c[T],
                                    R = this.getCurvePercent(T / o.ENTRIES - 1, 1 - (i - A) / (c[T + o.PREV_TIME] - A));
                                g += (c[T + o.R] - g) * R, m += (c[T + o.G] - m) * R, M += (c[T + o.B] - M) * R, x += (c[T + o.A] - x) * R, y += (c[T + o.R2] - y) * R, w += (c[T + o.G2] - w) * R, b += (c[T + o.B2] - b) * R
                            }
                            if (1 == a) u.color.set(g, m, M, x), u.darkColor.set(y, w, b, 1);
                            else {
                                f = u.color, d = u.darkColor;
                                h == e.setup && (f.setFromColor(u.data.color), d.setFromColor(u.data.darkColor)), f.add((g - f.r) * a, (m - f.g) * a, (M - f.b) * a, (x - f.a) * a), d.add((y - d.r) * a, (w - d.g) * a, (b - d.b) * a, 0)
                            }
                        }
                    }
                }, o.ENTRIES = 8, o.PREV_TIME = -8, o.PREV_R = -7, o.PREV_G = -6, o.PREV_B = -5, o.PREV_A = -4, o.PREV_R2 = -3, o.PREV_G2 = -2, o.PREV_B2 = -1, o.R = 1, o.G = 2, o.B = 3, o.A = 4, o.R2 = 5, o.G2 = 6, o.B2 = 7, o
            }(o);
            t.TwoColorTimeline = f;
            var d = function() {
                function r(e) {
                    this.frames = t.Utils.newFloatArray(e), this.attachmentNames = new Array(e)
                }
                return r.prototype.getPropertyId = function() {
                    return (i.attachment << 24) + this.slotIndex
                }, r.prototype.getFrameCount = function() {
                    return this.frames.length
                }, r.prototype.setFrame = function(t, e, n) {
                    this.frames[t] = e, this.attachmentNames[t] = n
                }, r.prototype.apply = function(t, i, r, o, a, h, l) {
                    var u = t.slots[this.slotIndex];
                    if (u.bone.active)
                        if (l != n.mixOut || h != e.setup) {
                            var c = this.frames;
                            if (r < c[0]) {
                                if (h == e.setup || h == e.first) {
                                    var f = u.data.attachmentName;
                                    u.setAttachment(null == f ? null : t.getAttachment(this.slotIndex, f))
                                }
                            } else {
                                var d = 0;
                                d = r >= c[c.length - 1] ? c.length - 1 : s.binarySearch(c, r, 1) - 1;
                                var p = this.attachmentNames[d];
                                t.slots[this.slotIndex].setAttachment(null == p ? null : t.getAttachment(this.slotIndex, p))
                            }
                        } else {
                            var v = u.data.attachmentName;
                            u.setAttachment(null == v ? null : t.getAttachment(this.slotIndex, v))
                        }
                }, r
            }();
            t.AttachmentTimeline = d;
            var p = null,
                v = function(n) {
                    function o(e) {
                        var i = n.call(this, e) || this;
                        return i.frames = t.Utils.newFloatArray(e), i.frameVertices = new Array(e), null == p && (p = t.Utils.newFloatArray(64)), i
                    }
                    return r(o, n), o.prototype.getPropertyId = function() {
                        return (i.deform << 27) + +this.attachment.id + this.slotIndex
                    }, o.prototype.setFrame = function(t, e, n) {
                        this.frames[t] = e, this.frameVertices[t] = n
                    }, o.prototype.apply = function(n, i, r, o, a, h, l) {
                        var u = n.slots[this.slotIndex];
                        if (u.bone.active) {
                            var c = u.getAttachment();
                            if (c instanceof t.VertexAttachment && c.deformAttachment == this.attachment) {
                                var f = u.deform;
                                0 == f.length && (h = e.setup);
                                var d = this.frameVertices,
                                    p = d[0].length,
                                    v = this.frames;
                                if (r < v[0]) {
                                    var g = c;
                                    switch (h) {
                                        case e.setup:
                                            return void(f.length = 0);
                                        case e.first:
                                            if (1 == a) {
                                                f.length = 0;
                                                break
                                            }
                                            var m = t.Utils.setArraySize(f, p);
                                            if (null == g.bones)
                                                for (var M = g.vertices, x = 0; x < p; x++) m[x] += (M[x] - m[x]) * a;
                                            else {
                                                a = 1 - a;
                                                for (x = 0; x < p; x++) m[x] *= a
                                            }
                                    }
                                } else {
                                    var y = t.Utils.setArraySize(f, p);
                                    if (r >= v[v.length - 1]) {
                                        var w = d[v.length - 1];
                                        if (1 == a)
                                            if (h == e.add)
                                                if (null == (g = c).bones) {
                                                    M = g.vertices;
                                                    for (var b = 0; b < p; b++) y[b] += w[b] - M[b]
                                                } else
                                                    for (var E = 0; E < p; E++) y[E] += w[E];
                                        else t.Utils.arrayCopy(w, 0, y, 0, p);
                                        else switch (h) {
                                            case e.setup:
                                                var T = c;
                                                if (null == T.bones) {
                                                    M = T.vertices;
                                                    for (var A = 0; A < p; A++) {
                                                        var R = M[A];
                                                        y[A] = R + (w[A] - R) * a
                                                    }
                                                } else
                                                    for (var S = 0; S < p; S++) y[S] = w[S] * a;
                                                break;
                                            case e.first:
                                            case e.replace:
                                                for (var I = 0; I < p; I++) y[I] += (w[I] - y[I]) * a;
                                            case e.add:
                                                if (null == (g = c).bones) {
                                                    M = g.vertices;
                                                    for (var C = 0; C < p; C++) y[C] += (w[C] - M[C]) * a
                                                } else
                                                    for (var P = 0; P < p; P++) y[P] += w[P] * a
                                        }
                                    } else {
                                        var L = s.binarySearch(v, r),
                                            k = d[L - 1],
                                            _ = d[L],
                                            F = v[L],
                                            V = this.getCurvePercent(L - 1, 1 - (r - F) / (v[L - 1] - F));
                                        if (1 == a)
                                            if (h == e.add)
                                                if (null == (g = c).bones) {
                                                    M = g.vertices;
                                                    for (var O = 0; O < p; O++) {
                                                        var D = k[O];
                                                        y[O] += D + (_[O] - D) * V - M[O]
                                                    }
                                                } else
                                                    for (var N = 0; N < p; N++) {
                                                        D = k[N];
                                                        y[N] += D + (_[N] - D) * V
                                                    } else
                                                        for (var U = 0; U < p; U++) {
                                                            D = k[U];
                                                            y[U] = D + (_[U] - D) * V
                                                        } else switch (h) {
                                                            case e.setup:
                                                                var X = c;
                                                                if (null == X.bones) {
                                                                    M = X.vertices;
                                                                    for (var B = 0; B < p; B++) {
                                                                        D = k[B], R = M[B];
                                                                        y[B] = R + (D + (_[B] - D) * V - R) * a
                                                                    }
                                                                } else
                                                                    for (var Y = 0; Y < p; Y++) {
                                                                        D = k[Y];
                                                                        y[Y] = (D + (_[Y] - D) * V) * a
                                                                    }
                                                                break;
                                                            case e.first:
                                                            case e.replace:
                                                                for (var z = 0; z < p; z++) {
                                                                    D = k[z];
                                                                    y[z] += (D + (_[z] - D) * V - y[z]) * a
                                                                }
                                                                break;
                                                            case e.add:
                                                                if (null == (g = c).bones) {
                                                                    M = g.vertices;
                                                                    for (var W = 0; W < p; W++) {
                                                                        D = k[W];
                                                                        y[W] += (D + (_[W] - D) * V - M[W]) * a
                                                                    }
                                                                } else
                                                                    for (var q = 0; q < p; q++) {
                                                                        D = k[q];
                                                                        y[q] += (D + (_[q] - D) * V) * a
                                                                    }
                                                        }
                                    }
                                }
                            }
                        }
                    }, o
                }(o);
            t.DeformTimeline = v;
            var g = function() {
                function e(e) {
                    this.frames = t.Utils.newFloatArray(e), this.events = new Array(e)
                }
                return e.prototype.getPropertyId = function() {
                    return i.event << 24
                }, e.prototype.getFrameCount = function() {
                    return this.frames.length
                }, e.prototype.setFrame = function(t, e) {
                    this.frames[t] = e.time, this.events[t] = e
                }, e.prototype.apply = function(t, e, n, i, r, o, a) {
                    if (null != i) {
                        var h = this.frames,
                            l = this.frames.length;
                        if (e > n) this.apply(t, e, Number.MAX_VALUE, i, r, o, a), e = -1;
                        else if (e >= h[l - 1]) return;
                        if (!(n < h[0])) {
                            var u = 0;
                            if (e < h[0]) u = 0;
                            else
                                for (var c = h[u = s.binarySearch(h, e)]; u > 0 && h[u - 1] == c;) u--;
                            for (; u < l && n >= h[u]; u++) i.push(this.events[u])
                        }
                    }
                }, e
            }();
            t.EventTimeline = g;
            var m = function() {
                function r(e) {
                    this.frames = t.Utils.newFloatArray(e), this.drawOrders = new Array(e)
                }
                return r.prototype.getPropertyId = function() {
                    return i.drawOrder << 24
                }, r.prototype.getFrameCount = function() {
                    return this.frames.length
                }, r.prototype.setFrame = function(t, e, n) {
                    this.frames[t] = e, this.drawOrders[t] = n
                }, r.prototype.apply = function(i, r, o, a, h, l, u) {
                    var c = i.drawOrder,
                        f = i.slots;
                    if (u != n.mixOut || l != e.setup) {
                        var d = this.frames;
                        if (o < d[0]) l != e.setup && l != e.first || t.Utils.arrayCopy(i.slots, 0, i.drawOrder, 0, i.slots.length);
                        else {
                            var p = 0;
                            p = o >= d[d.length - 1] ? d.length - 1 : s.binarySearch(d, o) - 1;
                            var v = this.drawOrders[p];
                            if (null == v) t.Utils.arrayCopy(f, 0, c, 0, f.length);
                            else
                                for (var g = 0, m = v.length; g < m; g++) c[g] = f[v[g]]
                        }
                    } else t.Utils.arrayCopy(i.slots, 0, i.drawOrder, 0, i.slots.length)
                }, r
            }();
            t.DrawOrderTimeline = m;
            var M = function(o) {
                function a(e) {
                    var n = o.call(this, e) || this;
                    return n.frames = t.Utils.newFloatArray(e * a.ENTRIES), n
                }
                return r(a, o), a.prototype.getPropertyId = function() {
                    return (i.ikConstraint << 24) + this.ikConstraintIndex
                }, a.prototype.setFrame = function(t, e, n, i, r, s, o) {
                    t *= a.ENTRIES, this.frames[t] = e, this.frames[t + a.MIX] = n, this.frames[t + a.SOFTNESS] = i, this.frames[t + a.BEND_DIRECTION] = r, this.frames[t + a.COMPRESS] = s ? 1 : 0, this.frames[t + a.STRETCH] = o ? 1 : 0
                }, a.prototype.apply = function(t, i, r, o, h, l, u) {
                    var c = this.frames,
                        f = t.ikConstraints[this.ikConstraintIndex];
                    if (f.active)
                        if (r < c[0]) switch (l) {
                                case e.setup:
                                    return f.mix = f.data.mix, f.softness = f.data.softness, f.bendDirection = f.data.bendDirection, f.compress = f.data.compress, void(f.stretch = f.data.stretch);
                                case e.first:
                                    f.mix += (f.data.mix - f.mix) * h, f.softness += (f.data.softness - f.softness) * h, f.bendDirection = f.data.bendDirection, f.compress = f.data.compress, f.stretch = f.data.stretch
                            } else if (r >= c[c.length - a.ENTRIES]) l == e.setup ? (f.mix = f.data.mix + (c[c.length + a.PREV_MIX] - f.data.mix) * h, f.softness = f.data.softness + (c[c.length + a.PREV_SOFTNESS] - f.data.softness) * h, u == n.mixOut ? (f.bendDirection = f.data.bendDirection, f.compress = f.data.compress, f.stretch = f.data.stretch) : (f.bendDirection = c[c.length + a.PREV_BEND_DIRECTION], f.compress = 0 != c[c.length + a.PREV_COMPRESS], f.stretch = 0 != c[c.length + a.PREV_STRETCH])) : (f.mix += (c[c.length + a.PREV_MIX] - f.mix) * h, f.softness += (c[c.length + a.PREV_SOFTNESS] - f.softness) * h, u == n.mixIn && (f.bendDirection = c[c.length + a.PREV_BEND_DIRECTION], f.compress = 0 != c[c.length + a.PREV_COMPRESS], f.stretch = 0 != c[c.length + a.PREV_STRETCH]));
                            else {
                                var d = s.binarySearch(c, r, a.ENTRIES),
                                    p = c[d + a.PREV_MIX],
                                    v = c[d + a.PREV_SOFTNESS],
                                    g = c[d],
                                    m = this.getCurvePercent(d / a.ENTRIES - 1, 1 - (r - g) / (c[d + a.PREV_TIME] - g));
                                l == e.setup ? (f.mix = f.data.mix + (p + (c[d + a.MIX] - p) * m - f.data.mix) * h, f.softness = f.data.softness + (v + (c[d + a.SOFTNESS] - v) * m - f.data.softness) * h, u == n.mixOut ? (f.bendDirection = f.data.bendDirection, f.compress = f.data.compress, f.stretch = f.data.stretch) : (f.bendDirection = c[d + a.PREV_BEND_DIRECTION], f.compress = 0 != c[d + a.PREV_COMPRESS], f.stretch = 0 != c[d + a.PREV_STRETCH])) : (f.mix += (p + (c[d + a.MIX] - p) * m - f.mix) * h, f.softness += (v + (c[d + a.SOFTNESS] - v) * m - f.softness) * h, u == n.mixIn && (f.bendDirection = c[d + a.PREV_BEND_DIRECTION], f.compress = 0 != c[d + a.PREV_COMPRESS], f.stretch = 0 != c[d + a.PREV_STRETCH]))
                            }
                }, a.ENTRIES = 6, a.PREV_TIME = -6, a.PREV_MIX = -5, a.PREV_SOFTNESS = -4, a.PREV_BEND_DIRECTION = -3, a.PREV_COMPRESS = -2, a.PREV_STRETCH = -1, a.MIX = 1, a.SOFTNESS = 2, a.BEND_DIRECTION = 3, a.COMPRESS = 4, a.STRETCH = 5, a
            }(o);
            t.IkConstraintTimeline = M;
            var x = function(n) {
                function o(e) {
                    var i = n.call(this, e) || this;
                    return i.frames = t.Utils.newFloatArray(e * o.ENTRIES), i
                }
                return r(o, n), o.prototype.getPropertyId = function() {
                    return (i.transformConstraint << 24) + this.transformConstraintIndex
                }, o.prototype.setFrame = function(t, e, n, i, r, s) {
                    t *= o.ENTRIES, this.frames[t] = e, this.frames[t + o.ROTATE] = n, this.frames[t + o.TRANSLATE] = i, this.frames[t + o.SCALE] = r, this.frames[t + o.SHEAR] = s
                }, o.prototype.apply = function(t, n, i, r, a, h, l) {
                    var u = this.frames,
                        c = t.transformConstraints[this.transformConstraintIndex];
                    if (c.active)
                        if (i < u[0]) {
                            var f = c.data;
                            switch (h) {
                                case e.setup:
                                    return c.rotateMix = f.rotateMix, c.translateMix = f.translateMix, c.scaleMix = f.scaleMix, void(c.shearMix = f.shearMix);
                                case e.first:
                                    c.rotateMix += (f.rotateMix - c.rotateMix) * a, c.translateMix += (f.translateMix - c.translateMix) * a, c.scaleMix += (f.scaleMix - c.scaleMix) * a, c.shearMix += (f.shearMix - c.shearMix) * a
                            }
                        } else {
                            var d = 0,
                                p = 0,
                                v = 0,
                                g = 0;
                            if (i >= u[u.length - o.ENTRIES]) {
                                var m = u.length;
                                d = u[m + o.PREV_ROTATE], p = u[m + o.PREV_TRANSLATE], v = u[m + o.PREV_SCALE], g = u[m + o.PREV_SHEAR]
                            } else {
                                var M = s.binarySearch(u, i, o.ENTRIES);
                                d = u[M + o.PREV_ROTATE], p = u[M + o.PREV_TRANSLATE], v = u[M + o.PREV_SCALE], g = u[M + o.PREV_SHEAR];
                                var x = u[M],
                                    y = this.getCurvePercent(M / o.ENTRIES - 1, 1 - (i - x) / (u[M + o.PREV_TIME] - x));
                                d += (u[M + o.ROTATE] - d) * y, p += (u[M + o.TRANSLATE] - p) * y, v += (u[M + o.SCALE] - v) * y, g += (u[M + o.SHEAR] - g) * y
                            }
                            if (h == e.setup) {
                                f = c.data;
                                c.rotateMix = f.rotateMix + (d - f.rotateMix) * a, c.translateMix = f.translateMix + (p - f.translateMix) * a, c.scaleMix = f.scaleMix + (v - f.scaleMix) * a, c.shearMix = f.shearMix + (g - f.shearMix) * a
                            } else c.rotateMix += (d - c.rotateMix) * a, c.translateMix += (p - c.translateMix) * a, c.scaleMix += (v - c.scaleMix) * a, c.shearMix += (g - c.shearMix) * a
                        }
                }, o.ENTRIES = 5, o.PREV_TIME = -5, o.PREV_ROTATE = -4, o.PREV_TRANSLATE = -3, o.PREV_SCALE = -2, o.PREV_SHEAR = -1, o.ROTATE = 1, o.TRANSLATE = 2, o.SCALE = 3, o.SHEAR = 4, o
            }(o);
            t.TransformConstraintTimeline = x;
            var y = function(n) {
                function o(e) {
                    var i = n.call(this, e) || this;
                    return i.frames = t.Utils.newFloatArray(e * o.ENTRIES), i
                }
                return r(o, n), o.prototype.getPropertyId = function() {
                    return (i.pathConstraintPosition << 24) + this.pathConstraintIndex
                }, o.prototype.setFrame = function(t, e, n) {
                    t *= o.ENTRIES, this.frames[t] = e, this.frames[t + o.VALUE] = n
                }, o.prototype.apply = function(t, n, i, r, a, h, l) {
                    var u = this.frames,
                        c = t.pathConstraints[this.pathConstraintIndex];
                    if (c.active)
                        if (i < u[0]) switch (h) {
                            case e.setup:
                                return void(c.position = c.data.position);
                            case e.first:
                                c.position += (c.data.position - c.position) * a
                        } else {
                            var f = 0;
                            if (i >= u[u.length - o.ENTRIES]) f = u[u.length + o.PREV_VALUE];
                            else {
                                var d = s.binarySearch(u, i, o.ENTRIES);
                                f = u[d + o.PREV_VALUE];
                                var p = u[d],
                                    v = this.getCurvePercent(d / o.ENTRIES - 1, 1 - (i - p) / (u[d + o.PREV_TIME] - p));
                                f += (u[d + o.VALUE] - f) * v
                            }
                            h == e.setup ? c.position = c.data.position + (f - c.data.position) * a : c.position += (f - c.position) * a
                        }
                }, o.ENTRIES = 2, o.PREV_TIME = -2, o.PREV_VALUE = -1, o.VALUE = 1, o
            }(o);
            t.PathConstraintPositionTimeline = y;
            var w = function(t) {
                function n(e) {
                    return t.call(this, e) || this
                }
                return r(n, t), n.prototype.getPropertyId = function() {
                    return (i.pathConstraintSpacing << 24) + this.pathConstraintIndex
                }, n.prototype.apply = function(t, i, r, o, a, h, l) {
                    var u = this.frames,
                        c = t.pathConstraints[this.pathConstraintIndex];
                    if (c.active)
                        if (r < u[0]) switch (h) {
                            case e.setup:
                                return void(c.spacing = c.data.spacing);
                            case e.first:
                                c.spacing += (c.data.spacing - c.spacing) * a
                        } else {
                            var f = 0;
                            if (r >= u[u.length - n.ENTRIES]) f = u[u.length + n.PREV_VALUE];
                            else {
                                var d = s.binarySearch(u, r, n.ENTRIES);
                                f = u[d + n.PREV_VALUE];
                                var p = u[d],
                                    v = this.getCurvePercent(d / n.ENTRIES - 1, 1 - (r - p) / (u[d + n.PREV_TIME] - p));
                                f += (u[d + n.VALUE] - f) * v
                            }
                            h == e.setup ? c.spacing = c.data.spacing + (f - c.data.spacing) * a : c.spacing += (f - c.spacing) * a
                        }
                }, n
            }(y);
            t.PathConstraintSpacingTimeline = w;
            var b = function(n) {
                function o(e) {
                    var i = n.call(this, e) || this;
                    return i.frames = t.Utils.newFloatArray(e * o.ENTRIES), i
                }
                return r(o, n), o.prototype.getPropertyId = function() {
                    return (i.pathConstraintMix << 24) + this.pathConstraintIndex
                }, o.prototype.setFrame = function(t, e, n, i) {
                    t *= o.ENTRIES, this.frames[t] = e, this.frames[t + o.ROTATE] = n, this.frames[t + o.TRANSLATE] = i
                }, o.prototype.apply = function(t, n, i, r, a, h, l) {
                    var u = this.frames,
                        c = t.pathConstraints[this.pathConstraintIndex];
                    if (c.active)
                        if (i < u[0]) switch (h) {
                            case e.setup:
                                return c.rotateMix = c.data.rotateMix, void(c.translateMix = c.data.translateMix);
                            case e.first:
                                c.rotateMix += (c.data.rotateMix - c.rotateMix) * a, c.translateMix += (c.data.translateMix - c.translateMix) * a
                        } else {
                            var f = 0,
                                d = 0;
                            if (i >= u[u.length - o.ENTRIES]) f = u[u.length + o.PREV_ROTATE], d = u[u.length + o.PREV_TRANSLATE];
                            else {
                                var p = s.binarySearch(u, i, o.ENTRIES);
                                f = u[p + o.PREV_ROTATE], d = u[p + o.PREV_TRANSLATE];
                                var v = u[p],
                                    g = this.getCurvePercent(p / o.ENTRIES - 1, 1 - (i - v) / (u[p + o.PREV_TIME] - v));
                                f += (u[p + o.ROTATE] - f) * g, d += (u[p + o.TRANSLATE] - d) * g
                            }
                            h == e.setup ? (c.rotateMix = c.data.rotateMix + (f - c.data.rotateMix) * a, c.translateMix = c.data.translateMix + (d - c.data.translateMix) * a) : (c.rotateMix += (f - c.rotateMix) * a, c.translateMix += (d - c.translateMix) * a)
                        }
                }, o.ENTRIES = 3, o.PREV_TIME = -3, o.PREV_ROTATE = -2, o.PREV_TRANSLATE = -1, o.ROTATE = 1, o.TRANSLATE = 2, o
            }(o);
            t.PathConstraintMixTimeline = b
        }(i || (i = {})),
        function(t) {
            var e = function() {
                function e(e) {
                    this.tracks = new Array, this.timeScale = 1, this.events = new Array, this.listeners = new Array, this.queue = new r(this), this.propertyIDs = new t.IntSet, this.animationsChanged = !1, this.trackEntryPool = new t.Pool(function() {
                        return new n
                    }), this.data = e
                }
                return e.prototype.update = function(t) {
                    t *= this.timeScale;
                    for (var e = this.tracks, n = 0, i = e.length; n < i; n++) {
                        var r = e[n];
                        if (null != r) {
                            r.animationLast = r.nextAnimationLast, r.trackLast = r.nextTrackLast;
                            var s = t * r.timeScale;
                            if (r.delay > 0) {
                                if (r.delay -= s, r.delay > 0) continue;
                                s = -r.delay, r.delay = 0
                            }
                            var o = r.next;
                            if (null != o) {
                                var a = r.trackLast - o.delay;
                                if (a >= 0) {
                                    for (o.delay = 0, o.trackTime += 0 == r.timeScale ? 0 : (a / r.timeScale + t) * o.timeScale, r.trackTime += s, this.setCurrent(n, o, !0); null != o.mixingFrom;) o.mixTime += t, o = o.mixingFrom;
                                    continue
                                }
                            } else if (r.trackLast >= r.trackEnd && null == r.mixingFrom) {
                                e[n] = null, this.queue.end(r), this.disposeNext(r);
                                continue
                            }
                            if (null != r.mixingFrom && this.updateMixingFrom(r, t)) {
                                var h = r.mixingFrom;
                                for (r.mixingFrom = null, null != h && (h.mixingTo = null); null != h;) this.queue.end(h), h = h.mixingFrom
                            }
                            r.trackTime += s
                        }
                    }
                    this.queue.drain()
                }, e.prototype.updateMixingFrom = function(t, e) {
                    var n = t.mixingFrom;
                    if (null == n) return !0;
                    var i = this.updateMixingFrom(n, e);
                    return n.animationLast = n.nextAnimationLast, n.trackLast = n.nextTrackLast, t.mixTime > 0 && t.mixTime >= t.mixDuration ? (0 != n.totalAlpha && 0 != t.mixDuration || (t.mixingFrom = n.mixingFrom, null != n.mixingFrom && (n.mixingFrom.mixingTo = t), t.interruptAlpha = n.interruptAlpha, this.queue.end(n)), i) : (n.trackTime += e * n.timeScale, t.mixTime += e, !1)
                }, e.prototype.apply = function(n) {
                    if (null == n) throw new Error("skeleton cannot be null.");
                    this.animationsChanged && this._animationsChanged();
                    for (var i = this.events, r = this.tracks, s = !1, o = 0, a = r.length; o < a; o++) {
                        var h = r[o];
                        if (!(null == h || h.delay > 0)) {
                            s = !0;
                            var l = 0 == o ? t.MixBlend.first : h.mixBlend,
                                u = h.alpha;
                            null != h.mixingFrom ? u *= this.applyMixingFrom(h, n, l) : h.trackTime >= h.trackEnd && null == h.next && (u = 0);
                            var c = h.animationLast,
                                f = h.getAnimationTime(),
                                d = h.animation.timelines.length,
                                p = h.animation.timelines;
                            if (0 == o && 1 == u || l == t.MixBlend.add)
                                for (var v = 0; v < d; v++) t.Utils.webkit602BugfixHelper(u, l), p[v].apply(n, c, f, i, u, l, t.MixDirection.mixIn);
                            else {
                                var g = h.timelineMode,
                                    m = 0 == h.timelinesRotation.length;
                                m && t.Utils.setArraySize(h.timelinesRotation, d << 1, null);
                                var M = h.timelinesRotation;
                                for (v = 0; v < d; v++) {
                                    var x = p[v],
                                        y = (g[v] & e.NOT_LAST - 1) == e.SUBSEQUENT ? l : t.MixBlend.setup;
                                    x instanceof t.RotateTimeline ? this.applyRotateTimeline(x, n, f, u, y, M, v << 1, m) : (t.Utils.webkit602BugfixHelper(u, l), x.apply(n, c, f, i, u, y, t.MixDirection.mixIn))
                                }
                            }
                            this.queueEvents(h, f), i.length = 0, h.nextAnimationLast = f, h.nextTrackLast = h.trackTime
                        }
                    }
                    return this.queue.drain(), s
                }, e.prototype.applyMixingFrom = function(n, i, r) {
                    var s = n.mixingFrom;
                    null != s.mixingFrom && this.applyMixingFrom(s, i, r);
                    var o = 0;
                    0 == n.mixDuration ? (o = 1, r == t.MixBlend.first && (r = t.MixBlend.setup)) : ((o = n.mixTime / n.mixDuration) > 1 && (o = 1), r != t.MixBlend.first && (r = s.mixBlend));
                    var a = o < s.eventThreshold ? this.events : null,
                        h = o < s.attachmentThreshold,
                        l = o < s.drawOrderThreshold,
                        u = s.animationLast,
                        c = s.getAnimationTime(),
                        f = s.animation.timelines.length,
                        d = s.animation.timelines,
                        p = s.alpha * n.interruptAlpha,
                        v = p * (1 - o);
                    if (r == t.MixBlend.add)
                        for (var g = 0; g < f; g++) d[g].apply(i, u, c, a, v, r, t.MixDirection.mixOut);
                    else {
                        var m = s.timelineMode,
                            M = s.timelineHoldMix,
                            x = 0 == s.timelinesRotation.length;
                        x && t.Utils.setArraySize(s.timelinesRotation, f << 1, null);
                        var y = s.timelinesRotation;
                        s.totalAlpha = 0;
                        for (g = 0; g < f; g++) {
                            var w = d[g],
                                b = t.MixDirection.mixOut,
                                E = void 0,
                                T = 0;
                            switch (m[g] & e.NOT_LAST - 1) {
                                case e.SUBSEQUENT:
                                    if (E = r, !h && w instanceof t.AttachmentTimeline) {
                                        if ((m[g] & e.NOT_LAST) == e.NOT_LAST) continue;
                                        E = t.MixBlend.setup
                                    }
                                    if (!l && w instanceof t.DrawOrderTimeline) continue;
                                    T = v;
                                    break;
                                case e.FIRST:
                                    E = t.MixBlend.setup, T = v;
                                    break;
                                case e.HOLD:
                                    E = t.MixBlend.setup, T = p;
                                    break;
                                default:
                                    E = t.MixBlend.setup;
                                    var A = M[g];
                                    T = p * Math.max(0, 1 - A.mixTime / A.mixDuration)
                            }
                            s.totalAlpha += T, w instanceof t.RotateTimeline ? this.applyRotateTimeline(w, i, c, T, E, y, g << 1, x) : (t.Utils.webkit602BugfixHelper(T, r), E == t.MixBlend.setup && (w instanceof t.AttachmentTimeline ? (h || (m[g] & e.NOT_LAST) == e.NOT_LAST) && (b = t.MixDirection.mixIn) : w instanceof t.DrawOrderTimeline && l && (b = t.MixDirection.mixIn)), w.apply(i, u, c, a, T, E, b))
                        }
                    }
                    return n.mixDuration > 0 && this.queueEvents(s, c), this.events.length = 0, s.nextAnimationLast = c, s.nextTrackLast = s.trackTime, o
                }, e.prototype.applyRotateTimeline = function(e, n, i, r, s, o, a, h) {
                    if (h && (o[a] = 0), 1 != r) {
                        var l = e,
                            u = l.frames,
                            c = n.bones[l.boneIndex];
                        if (c.active) {
                            var f = 0,
                                d = 0;
                            if (i < u[0]) switch (s) {
                                    case t.MixBlend.setup:
                                        c.rotation = c.data.rotation;
                                    default:
                                        return;
                                    case t.MixBlend.first:
                                        f = c.rotation, d = c.data.rotation
                                } else if (f = s == t.MixBlend.setup ? c.data.rotation : c.rotation, i >= u[u.length - t.RotateTimeline.ENTRIES]) d = c.data.rotation + u[u.length + t.RotateTimeline.PREV_ROTATION];
                                else {
                                    var p = t.Animation.binarySearch(u, i, t.RotateTimeline.ENTRIES),
                                        v = u[p + t.RotateTimeline.PREV_ROTATION],
                                        g = u[p],
                                        m = l.getCurvePercent((p >> 1) - 1, 1 - (i - g) / (u[p + t.RotateTimeline.PREV_TIME] - g));
                                    d = u[p + t.RotateTimeline.ROTATION] - v, d = v + (d -= 360 * (16384 - (16384.499999999996 - d / 360 | 0))) * m + c.data.rotation, d -= 360 * (16384 - (16384.499999999996 - d / 360 | 0))
                                }
                            var M = 0,
                                x = d - f;
                            if (0 == (x -= 360 * (16384 - (16384.499999999996 - x / 360 | 0)))) M = o[a];
                            else {
                                var y = 0,
                                    w = 0;
                                h ? (y = 0, w = x) : (y = o[a], w = o[a + 1]);
                                var b = x > 0,
                                    E = y >= 0;
                                t.MathUtils.signum(w) != t.MathUtils.signum(x) && Math.abs(w) <= 90 && (Math.abs(y) > 180 && (y += 360 * t.MathUtils.signum(y)), E = b), M = x + y - y % 360, E != b && (M += 360 * t.MathUtils.signum(y)), o[a] = M
                            }
                            o[a + 1] = x, f += M * r, c.rotation = f - 360 * (16384 - (16384.499999999996 - f / 360 | 0))
                        }
                    } else e.apply(n, 0, i, null, 1, s, t.MixDirection.mixIn)
                }, e.prototype.queueEvents = function(t, e) {
                    for (var n = t.animationStart, i = t.animationEnd, r = i - n, s = t.trackLast % r, o = this.events, a = 0, h = o.length; a < h; a++) {
                        var l = o[a];
                        if (l.time < s) break;
                        l.time > i || this.queue.event(t, l)
                    }
                    for ((t.loop ? 0 == r || s > t.trackTime % r : e >= i && t.animationLast < i) && this.queue.complete(t); a < h; a++) {
                        o[a].time < n || this.queue.event(t, o[a])
                    }
                }, e.prototype.clearTracks = function() {
                    var t = this.queue.drainDisabled;
                    this.queue.drainDisabled = !0;
                    for (var e = 0, n = this.tracks.length; e < n; e++) this.clearTrack(e);
                    this.tracks.length = 0, this.queue.drainDisabled = t, this.queue.drain()
                }, e.prototype.clearTrack = function(t) {
                    if (!(t >= this.tracks.length)) {
                        var e = this.tracks[t];
                        if (null != e) {
                            this.queue.end(e), this.disposeNext(e);
                            for (var n = e;;) {
                                var i = n.mixingFrom;
                                if (null == i) break;
                                this.queue.end(i), n.mixingFrom = null, n.mixingTo = null, n = i
                            }
                            this.tracks[e.trackIndex] = null, this.queue.drain()
                        }
                    }
                }, e.prototype.setCurrent = function(t, e, n) {
                    var i = this.expandToIndex(t);
                    this.tracks[t] = e, null != i && (n && this.queue.interrupt(i), e.mixingFrom = i, i.mixingTo = e, e.mixTime = 0, null != i.mixingFrom && i.mixDuration > 0 && (e.interruptAlpha *= Math.min(1, i.mixTime / i.mixDuration)), i.timelinesRotation.length = 0), this.queue.start(e)
                }, e.prototype.setAnimation = function(t, e, n) {
                    var i = this.data.skeletonData.findAnimation(e);
                    if (null == i) throw new Error("Animation not found: " + e);
                    return this.setAnimationWith(t, i, n)
                }, e.prototype.setAnimationWith = function(t, e, n) {
                    if (null == e) throw new Error("animation cannot be null.");
                    var i = !0,
                        r = this.expandToIndex(t);
                    null != r && (-1 == r.nextTrackLast ? (this.tracks[t] = r.mixingFrom, this.queue.interrupt(r), this.queue.end(r), this.disposeNext(r), r = r.mixingFrom, i = !1) : this.disposeNext(r));
                    var s = this.trackEntry(t, e, n, r);
                    return this.setCurrent(t, s, i), this.queue.drain(), s
                }, e.prototype.addAnimation = function(t, e, n, i) {
                    var r = this.data.skeletonData.findAnimation(e);
                    if (null == r) throw new Error("Animation not found: " + e);
                    return this.addAnimationWith(t, r, n, i)
                }, e.prototype.addAnimationWith = function(t, e, n, i) {
                    if (null == e) throw new Error("animation cannot be null.");
                    var r = this.expandToIndex(t);
                    if (null != r)
                        for (; null != r.next;) r = r.next;
                    var s = this.trackEntry(t, e, n, r);
                    if (null == r) this.setCurrent(t, s, !0), this.queue.drain();
                    else if (r.next = s, i <= 0) {
                        var o = r.animationEnd - r.animationStart;
                        0 != o ? (r.loop ? i += o * (1 + (r.trackTime / o | 0)) : i += Math.max(o, r.trackTime), i -= this.data.getMix(r.animation, e)) : i = r.trackTime
                    }
                    return s.delay = i, s
                }, e.prototype.setEmptyAnimation = function(t, n) {
                    var i = this.setAnimationWith(t, e.emptyAnimation, !1);
                    return i.mixDuration = n, i.trackEnd = n, i
                }, e.prototype.addEmptyAnimation = function(t, n, i) {
                    i <= 0 && (i -= n);
                    var r = this.addAnimationWith(t, e.emptyAnimation, !1, i);
                    return r.mixDuration = n, r.trackEnd = n, r
                }, e.prototype.setEmptyAnimations = function(t) {
                    var e = this.queue.drainDisabled;
                    this.queue.drainDisabled = !0;
                    for (var n = 0, i = this.tracks.length; n < i; n++) {
                        var r = this.tracks[n];
                        null != r && this.setEmptyAnimation(r.trackIndex, t)
                    }
                    this.queue.drainDisabled = e, this.queue.drain()
                }, e.prototype.expandToIndex = function(e) {
                    return e < this.tracks.length ? this.tracks[e] : (t.Utils.ensureArrayCapacity(this.tracks, e + 1, null), this.tracks.length = e + 1, null)
                }, e.prototype.trackEntry = function(t, e, n, i) {
                    var r = this.trackEntryPool.obtain();
                    return r.trackIndex = t, r.animation = e, r.loop = n, r.holdPrevious = !1, r.eventThreshold = 0, r.attachmentThreshold = 0, r.drawOrderThreshold = 0, r.animationStart = 0, r.animationEnd = e.duration, r.animationLast = -1, r.nextAnimationLast = -1, r.delay = 0, r.trackTime = 0, r.trackLast = -1, r.nextTrackLast = -1, r.trackEnd = Number.MAX_VALUE, r.timeScale = 1, r.alpha = 1, r.interruptAlpha = 1, r.mixTime = 0, r.mixDuration = null == i ? 0 : this.data.getMix(i.animation, e), r
                }, e.prototype.disposeNext = function(t) {
                    for (var e = t.next; null != e;) this.queue.dispose(e), e = e.next;
                    t.next = null
                }, e.prototype._animationsChanged = function() {
                    this.animationsChanged = !1, this.propertyIDs.clear();
                    for (var e = 0, n = this.tracks.length; e < n; e++) {
                        if (null != (i = this.tracks[e])) {
                            for (; null != i.mixingFrom;) i = i.mixingFrom;
                            do {
                                null != i.mixingFrom && i.mixBlend == t.MixBlend.add || this.computeHold(i), i = i.mixingTo
                            } while (null != i)
                        }
                    }
                    this.propertyIDs.clear();
                    for (e = this.tracks.length - 1; e >= 0; e--)
                        for (var i = this.tracks[e]; null != i;) this.computeNotLast(i), i = i.mixingFrom
                }, e.prototype.computeHold = function(n) {
                    var i = n.mixingTo,
                        r = n.animation.timelines,
                        s = n.animation.timelines.length,
                        o = t.Utils.setArraySize(n.timelineMode, s);
                    n.timelineHoldMix.length = 0;
                    var a = t.Utils.setArraySize(n.timelineHoldMix, s),
                        h = this.propertyIDs;
                    if (null != i && i.holdPrevious)
                        for (var l = 0; l < s; l++) h.add(r[l].getPropertyId()), o[l] = e.HOLD;
                    else t: for (l = 0; l < s; l++) {
                        var u = r[l],
                            c = u.getPropertyId();
                        if (h.add(c))
                            if (null == i || u instanceof t.AttachmentTimeline || u instanceof t.DrawOrderTimeline || u instanceof t.EventTimeline || !i.animation.hasTimeline(c)) o[l] = e.FIRST;
                            else {
                                for (var f = i.mixingTo; null != f; f = f.mixingTo)
                                    if (!f.animation.hasTimeline(c)) {
                                        if (n.mixDuration > 0) {
                                            o[l] = e.HOLD_MIX, a[l] = f;
                                            continue t
                                        }
                                        break
                                    }
                                o[l] = e.HOLD
                            }
                        else o[l] = e.SUBSEQUENT
                    }
                }, e.prototype.computeNotLast = function(n) {
                    for (var i = n.animation.timelines, r = n.animation.timelines.length, s = n.timelineMode, o = this.propertyIDs, a = 0; a < r; a++)
                        if (i[a] instanceof t.AttachmentTimeline) {
                            var h = i[a];
                            o.add(h.slotIndex) || (s[a] |= e.NOT_LAST)
                        }
                }, e.prototype.getCurrent = function(t) {
                    return t >= this.tracks.length ? null : this.tracks[t]
                }, e.prototype.addListener = function(t) {
                    if (null == t) throw new Error("listener cannot be null.");
                    this.listeners.push(t)
                }, e.prototype.removeListener = function(t) {
                    var e = this.listeners.indexOf(t);
                    e >= 0 && this.listeners.splice(e, 1)
                }, e.prototype.clearListeners = function() {
                    this.listeners.length = 0
                }, e.prototype.clearListenerNotifications = function() {
                    this.queue.clear()
                }, e.emptyAnimation = new t.Animation("<empty>", [], 0), e.SUBSEQUENT = 0, e.FIRST = 1, e.HOLD = 2, e.HOLD_MIX = 3, e.NOT_LAST = 4, e
            }();
            t.AnimationState = e;
            var n = function() {
                function e() {
                    this.mixBlend = t.MixBlend.replace, this.timelineMode = new Array, this.timelineHoldMix = new Array, this.timelinesRotation = new Array
                }
                return e.prototype.reset = function() {
                    this.next = null, this.mixingFrom = null, this.mixingTo = null, this.animation = null, this.listener = null, this.timelineMode.length = 0, this.timelineHoldMix.length = 0, this.timelinesRotation.length = 0
                }, e.prototype.getAnimationTime = function() {
                    if (this.loop) {
                        var t = this.animationEnd - this.animationStart;
                        return 0 == t ? this.animationStart : this.trackTime % t + this.animationStart
                    }
                    return Math.min(this.trackTime + this.animationStart, this.animationEnd)
                }, e.prototype.setAnimationLast = function(t) {
                    this.animationLast = t, this.nextAnimationLast = t
                }, e.prototype.isComplete = function() {
                    return this.trackTime >= this.animationEnd - this.animationStart
                }, e.prototype.resetRotationDirections = function() {
                    this.timelinesRotation.length = 0
                }, e
            }();
            t.TrackEntry = n;
            var i, r = function() {
                function t(t) {
                    this.objects = [], this.drainDisabled = !1, this.animState = t
                }
                return t.prototype.start = function(t) {
                    this.objects.push(i.start), this.objects.push(t), this.animState.animationsChanged = !0
                }, t.prototype.interrupt = function(t) {
                    this.objects.push(i.interrupt), this.objects.push(t)
                }, t.prototype.end = function(t) {
                    this.objects.push(i.end), this.objects.push(t), this.animState.animationsChanged = !0
                }, t.prototype.dispose = function(t) {
                    this.objects.push(i.dispose), this.objects.push(t)
                }, t.prototype.complete = function(t) {
                    this.objects.push(i.complete), this.objects.push(t)
                }, t.prototype.event = function(t, e) {
                    this.objects.push(i.event), this.objects.push(t), this.objects.push(e)
                }, t.prototype.drain = function() {
                    if (!this.drainDisabled) {
                        this.drainDisabled = !0;
                        for (var t = this.objects, e = this.animState.listeners, n = 0; n < t.length; n += 2) {
                            var r = t[n],
                                s = t[n + 1];
                            switch (r) {
                                case i.start:
                                    null != s.listener && s.listener.start && s.listener.start(s);
                                    for (var o = 0; o < e.length; o++) e[o].start && e[o].start(s);
                                    break;
                                case i.interrupt:
                                    null != s.listener && s.listener.interrupt && s.listener.interrupt(s);
                                    for (o = 0; o < e.length; o++) e[o].interrupt && e[o].interrupt(s);
                                    break;
                                case i.end:
                                    null != s.listener && s.listener.end && s.listener.end(s);
                                    for (o = 0; o < e.length; o++) e[o].end && e[o].end(s);
                                case i.dispose:
                                    null != s.listener && s.listener.dispose && s.listener.dispose(s);
                                    for (o = 0; o < e.length; o++) e[o].dispose && e[o].dispose(s);
                                    this.animState.trackEntryPool.free(s);
                                    break;
                                case i.complete:
                                    null != s.listener && s.listener.complete && s.listener.complete(s);
                                    for (o = 0; o < e.length; o++) e[o].complete && e[o].complete(s);
                                    break;
                                case i.event:
                                    var a = t[2 + n++];
                                    null != s.listener && s.listener.event && s.listener.event(s, a);
                                    for (o = 0; o < e.length; o++) e[o].event && e[o].event(s, a)
                            }
                        }
                        this.clear(), this.drainDisabled = !1
                    }
                }, t.prototype.clear = function() {
                    this.objects.length = 0
                }, t
            }();
            t.EventQueue = r,
                function(t) {
                    t[t.start = 0] = "start", t[t.interrupt = 1] = "interrupt", t[t.end = 2] = "end", t[t.dispose = 3] = "dispose", t[t.complete = 4] = "complete", t[t.event = 5] = "event"
                }(i = t.EventType || (t.EventType = {}));
            var s = function() {
                function t() {}
                return t.prototype.start = function(t) {}, t.prototype.interrupt = function(t) {}, t.prototype.end = function(t) {}, t.prototype.dispose = function(t) {}, t.prototype.complete = function(t) {}, t.prototype.event = function(t, e) {}, t
            }();
            t.AnimationStateAdapter = s
        }(i || (i = {})),
        function(t) {
            var e = function() {
                function t(t) {
                    if (this.animationToMixTime = {}, this.defaultMix = 0, null == t) throw new Error("skeletonData cannot be null.");
                    this.skeletonData = t
                }
                return t.prototype.setMix = function(t, e, n) {
                    var i = this.skeletonData.findAnimation(t);
                    if (null == i) throw new Error("Animation not found: " + t);
                    var r = this.skeletonData.findAnimation(e);
                    if (null == r) throw new Error("Animation not found: " + e);
                    this.setMixWith(i, r, n)
                }, t.prototype.setMixWith = function(t, e, n) {
                    if (null == t) throw new Error("from cannot be null.");
                    if (null == e) throw new Error("to cannot be null.");
                    var i = t.name + "." + e.name;
                    this.animationToMixTime[i] = n
                }, t.prototype.getMix = function(t, e) {
                    var n = t.name + "." + e.name,
                        i = this.animationToMixTime[n];
                    return void 0 === i ? this.defaultMix : i
                }, t
            }();
            t.AnimationStateData = e
        }(i || (i = {})),
        function(t) {
            var e = function() {
                function e(t, e) {
                    void 0 === e && (e = ""), this.assets = {}, this.errors = {}, this.toLoad = 0, this.loaded = 0, this.textureLoader = t, this.pathPrefix = e
                }
                return e.downloadText = function(t, e, n) {
                    var i = new XMLHttpRequest;
                    i.open("GET", t, !0), i.onload = function() {
                        200 == i.status ? e(i.responseText) : n(i.status, i.responseText)
                    }, i.onerror = function() {
                        n(i.status, i.responseText)
                    }, i.send()
                }, e.downloadBinary = function(t, e, n) {
                    var i = new XMLHttpRequest;
                    i.open("GET", t, !0), i.responseType = "arraybuffer", i.onload = function() {
                        200 == i.status ? e(new Uint8Array(i.response)) : n(i.status, i.responseText)
                    }, i.onerror = function() {
                        n(i.status, i.responseText)
                    }, i.send()
                }, e.prototype.loadBinary = function(t, n, i) {
                    var r = this;
                    void 0 === n && (n = null), void 0 === i && (i = null), t = this.pathPrefix + t, this.toLoad++, e.downloadBinary(t, function(e) {
                        r.assets[t] = e, n && n(t, e), r.toLoad--, r.loaded++
                    }, function(e, n) {
                        r.errors[t] = "Couldn't load binary " + t + ": status " + status + ", " + n, i && i(t, "Couldn't load binary " + t + ": status " + status + ", " + n), r.toLoad--, r.loaded++
                    })
                }, e.prototype.loadText = function(t, n, i) {
                    var r = this;
                    void 0 === n && (n = null), void 0 === i && (i = null), t = this.pathPrefix + t, this.toLoad++, e.downloadText(t, function(e) {
                        r.assets[t] = e, n && n(t, e), r.toLoad--, r.loaded++
                    }, function(e, n) {
                        r.errors[t] = "Couldn't load text " + t + ": status " + status + ", " + n, i && i(t, "Couldn't load text " + t + ": status " + status + ", " + n), r.toLoad--, r.loaded++
                    })
                }, e.prototype.loadTexture = function(t, e, n) {
                    var i = this;
                    void 0 === e && (e = null), void 0 === n && (n = null), t = this.pathPrefix + t, this.toLoad++;
                    var r = new Image;
                    r.crossOrigin = "anonymous", r.onload = function(n) {
                        var s = i.textureLoader(r);
                        i.assets[t] = s, i.toLoad--, i.loaded++, e && e(t, r)
                    }, r.onerror = function(e) {
                        i.errors[t] = "Couldn't load image " + t, i.toLoad--, i.loaded++, n && n(t, "Couldn't load image " + t)
                    }, r.src = t
                }, e.prototype.loadTextureData = function(t, e, n, i) {
                    var r = this;
                    void 0 === n && (n = null), void 0 === i && (i = null), t = this.pathPrefix + t, this.toLoad++;
                    var s = new Image;
                    s.onload = function(e) {
                        var i = r.textureLoader(s);
                        r.assets[t] = i, r.toLoad--, r.loaded++, n && n(t, s)
                    }, s.onerror = function(e) {
                        r.errors[t] = "Couldn't load image " + t, r.toLoad--, r.loaded++, i && i(t, "Couldn't load image " + t)
                    }, s.src = e
                }, e.prototype.loadTextureAtlas = function(n, i, r) {
                    var s = this;
                    void 0 === i && (i = null), void 0 === r && (r = null);
                    var o = n.lastIndexOf("/") >= 0 ? n.substring(0, n.lastIndexOf("/")) : "";
                    n = this.pathPrefix + n, this.toLoad++, e.downloadText(n, function(e) {
                        var a = {
                                count: 0
                            },
                            h = new Array;
                        try {
                            new t.TextureAtlas(e, function(e) {
                                h.push(o + "/" + e);
                                var n = document.createElement("img");
                                return n.width = 16, n.height = 16, new t.FakeTexture(n)
                            })
                        } catch (t) {
                            var l = t;
                            return s.errors[n] = "Couldn't load texture atlas " + n + ": " + l.message, r && r(n, "Couldn't load texture atlas " + n + ": " + l.message), s.toLoad--, void s.loaded++
                        }
                        for (var u = function(l) {
                                var u = !1;
                                s.loadTexture(l, function(l, c) {
                                    if (a.count++, a.count == h.length)
                                        if (u) s.errors[n] = "Couldn't load texture atlas page " + l + "} of atlas " + n, r && r(n, "Couldn't load texture atlas page " + l + " of atlas " + n), s.toLoad--, s.loaded++;
                                        else try {
                                            var f = new t.TextureAtlas(e, function(t) {
                                                return s.get(o + "/" + t)
                                            });
                                            s.assets[n] = f, i && i(n, f), s.toLoad--, s.loaded++
                                        } catch (t) {
                                            var d = t;
                                            s.errors[n] = "Couldn't load texture atlas " + n + ": " + d.message, r && r(n, "Couldn't load texture atlas " + n + ": " + d.message), s.toLoad--, s.loaded++
                                        }
                                }, function(t, e) {
                                    u = !0, a.count++, a.count == h.length && (s.errors[n] = "Couldn't load texture atlas page " + t + "} of atlas " + n, r && r(n, "Couldn't load texture atlas page " + t + " of atlas " + n), s.toLoad--, s.loaded++)
                                })
                            }, c = 0, f = h; c < f.length; c++) {
                            u(f[c])
                        }
                    }, function(t, e) {
                        s.errors[n] = "Couldn't load texture atlas " + n + ": status " + status + ", " + e, r && r(n, "Couldn't load texture atlas " + n + ": status " + status + ", " + e), s.toLoad--, s.loaded++
                    })
                }, e.prototype.get = function(t) {
                    return t = this.pathPrefix + t, this.assets[t]
                }, e.prototype.remove = function(t) {
                    t = this.pathPrefix + t;
                    var e = this.assets[t];
                    e.dispose && e.dispose(), this.assets[t] = null
                }, e.prototype.removeAll = function() {
                    for (var t in this.assets) {
                        var e = this.assets[t];
                        e.dispose && e.dispose()
                    }
                    this.assets = {}
                }, e.prototype.isLoadingComplete = function() {
                    return 0 == this.toLoad
                }, e.prototype.getToLoad = function() {
                    return this.toLoad
                }, e.prototype.getLoaded = function() {
                    return this.loaded
                }, e.prototype.dispose = function() {
                    this.removeAll()
                }, e.prototype.hasErrors = function() {
                    return Object.keys(this.errors).length > 0
                }, e.prototype.getErrors = function() {
                    return this.errors
                }, e
            }();
            t.AssetManager = e
        }(i || (i = {})),
        function(t) {
            var e = function() {
                function e(t) {
                    this.atlas = t
                }
                return e.prototype.newRegionAttachment = function(e, n, i) {
                    var r = this.atlas.findRegion(i);
                    if (null == r) throw new Error("Region not found in atlas: " + i + " (region attachment: " + n + ")");
                    r.renderObject = r;
                    var s = new t.RegionAttachment(n);
                    return s.setRegion(r), s
                }, e.prototype.newMeshAttachment = function(e, n, i) {
                    var r = this.atlas.findRegion(i);
                    if (null == r) throw new Error("Region not found in atlas: " + i + " (mesh attachment: " + n + ")");
                    r.renderObject = r;
                    var s = new t.MeshAttachment(n);
                    return s.region = r, s
                }, e.prototype.newBoundingBoxAttachment = function(e, n) {
                    return new t.BoundingBoxAttachment(n)
                }, e.prototype.newPathAttachment = function(e, n) {
                    return new t.PathAttachment(n)
                }, e.prototype.newPointAttachment = function(e, n) {
                    return new t.PointAttachment(n)
                }, e.prototype.newClippingAttachment = function(e, n) {
                    return new t.ClippingAttachment(n)
                }, e
            }();
            t.AtlasAttachmentLoader = e
        }(i || (i = {})),
        function(t) {
            ! function(t) {
                t[t.Normal = 0] = "Normal", t[t.Additive = 1] = "Additive", t[t.Multiply = 2] = "Multiply", t[t.Screen = 3] = "Screen"
            }(t.BlendMode || (t.BlendMode = {}))
        }(i || (i = {})),
        function(t) {
            var e = function() {
                function e(t, e, n) {
                    if (this.children = new Array, this.x = 0, this.y = 0, this.rotation = 0, this.scaleX = 0, this.scaleY = 0, this.shearX = 0, this.shearY = 0, this.ax = 0, this.ay = 0, this.arotation = 0, this.ascaleX = 0, this.ascaleY = 0, this.ashearX = 0, this.ashearY = 0, this.appliedValid = !1, this.a = 0, this.b = 0, this.c = 0, this.d = 0, this.worldY = 0, this.worldX = 0, this.sorted = !1, this.active = !1, null == t) throw new Error("data cannot be null.");
                    if (null == e) throw new Error("skeleton cannot be null.");
                    this.data = t, this.skeleton = e, this.parent = n, this.setToSetupPose()
                }
                return e.prototype.isActive = function() {
                    return this.active
                }, e.prototype.update = function() {
                    this.updateWorldTransformWith(this.x, this.y, this.rotation, this.scaleX, this.scaleY, this.shearX, this.shearY)
                }, e.prototype.updateWorldTransform = function() {
                    this.updateWorldTransformWith(this.x, this.y, this.rotation, this.scaleX, this.scaleY, this.shearX, this.shearY)
                }, e.prototype.updateWorldTransformWith = function(e, n, i, r, s, o, a) {
                    this.ax = e, this.ay = n, this.arotation = i, this.ascaleX = r, this.ascaleY = s, this.ashearX = o, this.ashearY = a, this.appliedValid = !0;
                    var h = this.parent;
                    if (null == h) {
                        var l = this.skeleton,
                            u = i + 90 + a,
                            c = l.scaleX,
                            f = l.scaleY;
                        return this.a = t.MathUtils.cosDeg(i + o) * r * c, this.b = t.MathUtils.cosDeg(u) * s * c, this.c = t.MathUtils.sinDeg(i + o) * r * f, this.d = t.MathUtils.sinDeg(u) * s * f, this.worldX = e * c + l.x, void(this.worldY = n * f + l.y)
                    }
                    var d = h.a,
                        p = h.b,
                        v = h.c,
                        g = h.d;
                    switch (this.worldX = d * e + p * n + h.worldX, this.worldY = v * e + g * n + h.worldY, this.data.transformMode) {
                        case t.TransformMode.Normal:
                            u = i + 90 + a;
                            var m = t.MathUtils.cosDeg(i + o) * r,
                                M = t.MathUtils.cosDeg(u) * s,
                                x = t.MathUtils.sinDeg(i + o) * r,
                                y = t.MathUtils.sinDeg(u) * s;
                            return this.a = d * m + p * x, this.b = d * M + p * y, this.c = v * m + g * x, void(this.d = v * M + g * y);
                        case t.TransformMode.OnlyTranslation:
                            u = i + 90 + a;
                            this.a = t.MathUtils.cosDeg(i + o) * r, this.b = t.MathUtils.cosDeg(u) * s, this.c = t.MathUtils.sinDeg(i + o) * r, this.d = t.MathUtils.sinDeg(u) * s;
                            break;
                        case t.TransformMode.NoRotationOrReflection:
                            var w = 0;
                            (T = d * d + v * v) > 1e-4 ? (p = v * (T = Math.abs(d * g - p * v) / T), g = d * T, w = Math.atan2(v, d) * t.MathUtils.radDeg) : (d = 0, v = 0, w = 90 - Math.atan2(g, p) * t.MathUtils.radDeg);
                            var b = i + o - w,
                                E = i + a - w + 90;
                            m = t.MathUtils.cosDeg(b) * r, M = t.MathUtils.cosDeg(E) * s, x = t.MathUtils.sinDeg(b) * r, y = t.MathUtils.sinDeg(E) * s;
                            this.a = d * m - p * x, this.b = d * M - p * y, this.c = v * m + g * x, this.d = v * M + g * y;
                            break;
                        case t.TransformMode.NoScale:
                        case t.TransformMode.NoScaleOrReflection:
                            var T, A = t.MathUtils.cosDeg(i),
                                R = t.MathUtils.sinDeg(i),
                                S = (d * A + p * R) / this.skeleton.scaleX,
                                I = (v * A + g * R) / this.skeleton.scaleY;
                            (T = Math.sqrt(S * S + I * I)) > 1e-5 && (T = 1 / T), S *= T, I *= T, T = Math.sqrt(S * S + I * I), this.data.transformMode == t.TransformMode.NoScale && d * g - p * v < 0 != (this.skeleton.scaleX < 0 != this.skeleton.scaleY < 0) && (T = -T);
                            var C = Math.PI / 2 + Math.atan2(I, S),
                                P = Math.cos(C) * T,
                                L = Math.sin(C) * T;
                            m = t.MathUtils.cosDeg(o) * r, M = t.MathUtils.cosDeg(90 + a) * s, x = t.MathUtils.sinDeg(o) * r, y = t.MathUtils.sinDeg(90 + a) * s;
                            this.a = S * m + P * x, this.b = S * M + P * y, this.c = I * m + L * x, this.d = I * M + L * y
                    }
                    this.a *= this.skeleton.scaleX, this.b *= this.skeleton.scaleX, this.c *= this.skeleton.scaleY, this.d *= this.skeleton.scaleY
                }, e.prototype.setToSetupPose = function() {
                    var t = this.data;
                    this.x = t.x, this.y = t.y, this.rotation = t.rotation, this.scaleX = t.scaleX, this.scaleY = t.scaleY, this.shearX = t.shearX, this.shearY = t.shearY
                }, e.prototype.getWorldRotationX = function() {
                    return Math.atan2(this.c, this.a) * t.MathUtils.radDeg
                }, e.prototype.getWorldRotationY = function() {
                    return Math.atan2(this.d, this.b) * t.MathUtils.radDeg
                }, e.prototype.getWorldScaleX = function() {
                    return Math.sqrt(this.a * this.a + this.c * this.c)
                }, e.prototype.getWorldScaleY = function() {
                    return Math.sqrt(this.b * this.b + this.d * this.d)
                }, e.prototype.updateAppliedTransform = function() {
                    this.appliedValid = !0;
                    var e = this.parent;
                    if (null == e) return this.ax = this.worldX, this.ay = this.worldY, this.arotation = Math.atan2(this.c, this.a) * t.MathUtils.radDeg, this.ascaleX = Math.sqrt(this.a * this.a + this.c * this.c), this.ascaleY = Math.sqrt(this.b * this.b + this.d * this.d), this.ashearX = 0, void(this.ashearY = Math.atan2(this.a * this.b + this.c * this.d, this.a * this.d - this.b * this.c) * t.MathUtils.radDeg);
                    var n = e.a,
                        i = e.b,
                        r = e.c,
                        s = e.d,
                        o = 1 / (n * s - i * r),
                        a = this.worldX - e.worldX,
                        h = this.worldY - e.worldY;
                    this.ax = a * s * o - h * i * o, this.ay = h * n * o - a * r * o;
                    var l = o * s,
                        u = o * n,
                        c = o * i,
                        f = o * r,
                        d = l * this.a - c * this.c,
                        p = l * this.b - c * this.d,
                        v = u * this.c - f * this.a,
                        g = u * this.d - f * this.b;
                    if (this.ashearX = 0, this.ascaleX = Math.sqrt(d * d + v * v), this.ascaleX > 1e-4) {
                        var m = d * g - p * v;
                        this.ascaleY = m / this.ascaleX, this.ashearY = Math.atan2(d * p + v * g, m) * t.MathUtils.radDeg, this.arotation = Math.atan2(v, d) * t.MathUtils.radDeg
                    } else this.ascaleX = 0, this.ascaleY = Math.sqrt(p * p + g * g), this.ashearY = 0, this.arotation = 90 - Math.atan2(g, p) * t.MathUtils.radDeg
                }, e.prototype.worldToLocal = function(t) {
                    var e = this.a,
                        n = this.b,
                        i = this.c,
                        r = this.d,
                        s = 1 / (e * r - n * i),
                        o = t.x - this.worldX,
                        a = t.y - this.worldY;
                    return t.x = o * r * s - a * n * s, t.y = a * e * s - o * i * s, t
                }, e.prototype.localToWorld = function(t) {
                    var e = t.x,
                        n = t.y;
                    return t.x = e * this.a + n * this.b + this.worldX, t.y = e * this.c + n * this.d + this.worldY, t
                }, e.prototype.worldToLocalRotation = function(e) {
                    var n = t.MathUtils.sinDeg(e),
                        i = t.MathUtils.cosDeg(e);
                    return Math.atan2(this.a * n - this.c * i, this.d * i - this.b * n) * t.MathUtils.radDeg + this.rotation - this.shearX
                }, e.prototype.localToWorldRotation = function(e) {
                    e -= this.rotation - this.shearX;
                    var n = t.MathUtils.sinDeg(e),
                        i = t.MathUtils.cosDeg(e);
                    return Math.atan2(i * this.c + n * this.d, i * this.a + n * this.b) * t.MathUtils.radDeg
                }, e.prototype.rotateWorld = function(e) {
                    var n = this.a,
                        i = this.b,
                        r = this.c,
                        s = this.d,
                        o = t.MathUtils.cosDeg(e),
                        a = t.MathUtils.sinDeg(e);
                    this.a = o * n - a * r, this.b = o * i - a * s, this.c = a * n + o * r, this.d = a * i + o * s, this.appliedValid = !1
                }, e
            }();
            t.Bone = e
        }(i || (i = {})),
        function(t) {
            var e, n = function() {
                return function(n, i, r) {
                    if (this.x = 0, this.y = 0, this.rotation = 0, this.scaleX = 1, this.scaleY = 1, this.shearX = 0, this.shearY = 0, this.transformMode = e.Normal, this.skinRequired = !1, this.color = new t.Color, n < 0) throw new Error("index must be >= 0.");
                    if (null == i) throw new Error("name cannot be null.");
                    this.index = n, this.name = i, this.parent = r
                }
            }();
            t.BoneData = n,
                function(t) {
                    t[t.Normal = 0] = "Normal", t[t.OnlyTranslation = 1] = "OnlyTranslation", t[t.NoRotationOrReflection = 2] = "NoRotationOrReflection", t[t.NoScale = 3] = "NoScale", t[t.NoScaleOrReflection = 4] = "NoScaleOrReflection"
                }(e = t.TransformMode || (t.TransformMode = {}))
        }(i || (i = {})),
        function(t) {
            var e = function() {
                return function(t, e, n) {
                    this.name = t, this.order = e, this.skinRequired = n
                }
            }();
            t.ConstraintData = e
        }(i || (i = {})),
        function(t) {
            var e = function() {
                return function(t, e) {
                    if (null == e) throw new Error("data cannot be null.");
                    this.time = t, this.data = e
                }
            }();
            t.Event = e
        }(i || (i = {})),
        function(t) {
            var e = function() {
                return function(t) {
                    this.name = t
                }
            }();
            t.EventData = e
        }(i || (i = {})),
        function(t) {
            var e = function() {
                function e(t, e) {
                    if (this.bendDirection = 0, this.compress = !1, this.stretch = !1, this.mix = 1, this.softness = 0, this.active = !1, null == t) throw new Error("data cannot be null.");
                    if (null == e) throw new Error("skeleton cannot be null.");
                    this.data = t, this.mix = t.mix, this.softness = t.softness, this.bendDirection = t.bendDirection, this.compress = t.compress, this.stretch = t.stretch, this.bones = new Array;
                    for (var n = 0; n < t.bones.length; n++) this.bones.push(e.findBone(t.bones[n].name));
                    this.target = e.findBone(t.target.name)
                }
                return e.prototype.isActive = function() {
                    return this.active
                }, e.prototype.apply = function() {
                    this.update()
                }, e.prototype.update = function() {
                    var t = this.target,
                        e = this.bones;
                    switch (e.length) {
                        case 1:
                            this.apply1(e[0], t.worldX, t.worldY, this.compress, this.stretch, this.data.uniform, this.mix);
                            break;
                        case 2:
                            this.apply2(e[0], e[1], t.worldX, t.worldY, this.bendDirection, this.stretch, this.softness, this.mix)
                    }
                }, e.prototype.apply1 = function(e, n, i, r, s, o, a) {
                    e.appliedValid || e.updateAppliedTransform();
                    var h = e.parent,
                        l = 1 / (h.a * h.d - h.b * h.c),
                        u = n - h.worldX,
                        c = i - h.worldY,
                        f = (u * h.d - c * h.b) * l - e.ax,
                        d = (c * h.a - u * h.c) * l - e.ay,
                        p = Math.atan2(d, f) * t.MathUtils.radDeg - e.ashearX - e.arotation;
                    e.ascaleX < 0 && (p += 180), p > 180 ? p -= 360 : p < -180 && (p += 360);
                    var v = e.ascaleX,
                        g = e.ascaleY;
                    if (r || s) {
                        var m = e.data.length * v,
                            M = Math.sqrt(f * f + d * d);
                        if (r && M < m || s && M > m && m > 1e-4) {
                            var x = (M / m - 1) * a + 1;
                            v *= x, o && (g *= x)
                        }
                    }
                    e.updateWorldTransformWith(e.ax, e.ay, e.arotation + p * a, v, g, e.ashearX, e.ashearY)
                }, e.prototype.apply2 = function(e, n, i, r, s, o, a, h) {
                    if (0 != h) {
                        e.appliedValid || e.updateAppliedTransform(), n.appliedValid || n.updateAppliedTransform();
                        var l = e.ax,
                            u = e.ay,
                            c = e.ascaleX,
                            f = c,
                            d = e.ascaleY,
                            p = n.ascaleX,
                            v = 0,
                            g = 0,
                            m = 0;
                        c < 0 ? (c = -c, v = 180, m = -1) : (v = 0, m = 1), d < 0 && (d = -d, m = -m), p < 0 ? (p = -p, g = 180) : g = 0;
                        var M = n.ax,
                            x = 0,
                            y = 0,
                            w = 0,
                            b = e.a,
                            E = e.b,
                            T = e.c,
                            A = e.d,
                            R = Math.abs(c - d) <= 1e-4;
                        R ? (y = b * M + E * (x = n.ay) + e.worldX, w = T * M + A * x + e.worldY) : (x = 0, y = b * M + e.worldX, w = T * M + e.worldY);
                        var S = e.parent;
                        b = S.a, E = S.b, T = S.c;
                        var I, C, P = 1 / (b * (A = S.d) - E * T),
                            L = y - S.worldX,
                            k = w - S.worldY,
                            _ = (L * A - k * E) * P - l,
                            F = (k * b - L * T) * P - u,
                            V = Math.sqrt(_ * _ + F * F),
                            O = n.data.length * p;
                        if (V < 1e-4) return this.apply1(e, i, r, !1, o, !1, h), void n.updateWorldTransformWith(M, x, 0, n.ascaleX, n.ascaleY, n.ashearX, n.ashearY);
                        var D = ((L = i - S.worldX) * A - (k = r - S.worldY) * E) * P - l,
                            N = (k * b - L * T) * P - u,
                            U = D * D + N * N;
                        if (0 != a) {
                            a *= c * (p + 1) / 2;
                            var X = Math.sqrt(U),
                                B = X - V - O * c + a;
                            if (B > 0) {
                                var Y = Math.min(1, B / (2 * a)) - 1;
                                U = (D -= (Y = (B - a * (1 - Y * Y)) / X) * D) * D + (N -= Y * N) * N
                            }
                        }
                        t: if (R) {
                            var z = (U - V * V - (O *= c) * O) / (2 * V * O);
                            z < -1 ? z = -1 : z > 1 && (z = 1, o && (f *= (Math.sqrt(U) / (V + O) - 1) * h + 1)), C = Math.acos(z) * s, b = V + O * z, E = O * Math.sin(C), I = Math.atan2(N * b - D * E, D * b + N * E)
                        } else {
                            var W = (b = c * O) * b,
                                q = (E = d * O) * E,
                                G = Math.atan2(N, D),
                                H = -2 * q * V,
                                j = q - W;
                            if ((A = H * H - 4 * j * (T = q * V * V + W * U - W * q)) >= 0) {
                                var Z = Math.sqrt(A);
                                H < 0 && (Z = -Z);
                                var K = (Z = -(H + Z) / 2) / j,
                                    Q = T / Z,
                                    J = Math.abs(K) < Math.abs(Q) ? K : Q;
                                if (J * J <= U) {
                                    k = Math.sqrt(U - J * J) * s, I = G - Math.atan2(k, J), C = Math.atan2(k / d, (J - V) / c);
                                    break t
                                }
                            }
                            var $ = t.MathUtils.PI,
                                tt = V - b,
                                et = tt * tt,
                                nt = 0,
                                it = 0,
                                rt = V + b,
                                st = rt * rt,
                                ot = 0;
                            (T = -b * V / (W - q)) >= -1 && T <= 1 && (T = Math.acos(T), (A = (L = b * Math.cos(T) + V) * L + (k = E * Math.sin(T)) * k) < et && ($ = T, et = A, tt = L, nt = k), A > st && (it = T, st = A, rt = L, ot = k)), U <= (et + st) / 2 ? (I = G - Math.atan2(nt * s, tt), C = $ * s) : (I = G - Math.atan2(ot * s, rt), C = it * s)
                        }
                        var at = Math.atan2(x, M) * m,
                            ht = e.arotation;
                        (I = (I - at) * t.MathUtils.radDeg + v - ht) > 180 ? I -= 360 : I < -180 && (I += 360), e.updateWorldTransformWith(l, u, ht + I * h, f, e.ascaleY, 0, 0), ht = n.arotation, (C = ((C + at) * t.MathUtils.radDeg - n.ashearX) * m + g - ht) > 180 ? C -= 360 : C < -180 && (C += 360), n.updateWorldTransformWith(M, x, ht + C * h, n.ascaleX, n.ascaleY, n.ashearX, n.ashearY)
                    } else n.updateWorldTransform()
                }, e
            }();
            t.IkConstraint = e
        }(i || (i = {})),
        function(t) {
            var e = function(t) {
                function e(e) {
                    var n = t.call(this, e, 0, !1) || this;
                    return n.bones = new Array, n.bendDirection = 1, n.compress = !1, n.stretch = !1, n.uniform = !1, n.mix = 1, n.softness = 0, n
                }
                return r(e, t), e
            }(t.ConstraintData);
            t.IkConstraintData = e
        }(i || (i = {})),
        function(t) {
            var e = function() {
                function e(t, e) {
                    if (this.position = 0, this.spacing = 0, this.rotateMix = 0, this.translateMix = 0, this.spaces = new Array, this.positions = new Array, this.world = new Array, this.curves = new Array, this.lengths = new Array, this.segments = new Array, this.active = !1, null == t) throw new Error("data cannot be null.");
                    if (null == e) throw new Error("skeleton cannot be null.");
                    this.data = t, this.bones = new Array;
                    for (var n = 0, i = t.bones.length; n < i; n++) this.bones.push(e.findBone(t.bones[n].name));
                    this.target = e.findSlot(t.target.name), this.position = t.position, this.spacing = t.spacing, this.rotateMix = t.rotateMix, this.translateMix = t.translateMix
                }
                return e.prototype.isActive = function() {
                    return this.active
                }, e.prototype.apply = function() {
                    this.update()
                }, e.prototype.update = function() {
                    var n = this.target.getAttachment();
                    if (n instanceof t.PathAttachment) {
                        var i = this.rotateMix,
                            r = this.translateMix,
                            s = i > 0;
                        if (r > 0 || s) {
                            var o = this.data,
                                a = o.spacingMode == t.SpacingMode.Percent,
                                h = o.rotateMode,
                                l = h == t.RotateMode.Tangent,
                                u = h == t.RotateMode.ChainScale,
                                c = this.bones.length,
                                f = l ? c : c + 1,
                                d = this.bones,
                                p = t.Utils.setArraySize(this.spaces, f),
                                v = null,
                                g = this.spacing;
                            if (u || !a) {
                                u && (v = t.Utils.setArraySize(this.lengths, c));
                                for (var m = o.spacingMode == t.SpacingMode.Length, M = 0, x = f - 1; M < x;) {
                                    var y = (L = d[M]).data.length;
                                    if (y < e.epsilon) u && (v[M] = 0), p[++M] = 0;
                                    else if (a) {
                                        if (u) {
                                            var w = y * L.a,
                                                b = y * L.c,
                                                E = Math.sqrt(w * w + b * b);
                                            v[M] = E
                                        }
                                        p[++M] = g
                                    } else {
                                        w = y * L.a, b = y * L.c;
                                        var T = Math.sqrt(w * w + b * b);
                                        u && (v[M] = T), p[++M] = (m ? y + g : g) * T / y
                                    }
                                }
                            } else
                                for (M = 1; M < f; M++) p[M] = g;
                            var A = this.computeWorldPositions(n, f, l, o.positionMode == t.PositionMode.Percent, a),
                                R = A[0],
                                S = A[1],
                                I = o.offsetRotation,
                                C = !1;
                            if (0 == I) C = h == t.RotateMode.Chain;
                            else C = !1, I *= (P = this.target.bone).a * P.d - P.b * P.c > 0 ? t.MathUtils.degRad : -t.MathUtils.degRad;
                            M = 0;
                            for (var P = 3; M < c; M++, P += 3) {
                                var L;
                                (L = d[M]).worldX += (R - L.worldX) * r, L.worldY += (S - L.worldY) * r;
                                var k = (w = A[P]) - R,
                                    _ = (b = A[P + 1]) - S;
                                if (u) {
                                    var F = v[M];
                                    if (0 != F) {
                                        var V = (Math.sqrt(k * k + _ * _) / F - 1) * i + 1;
                                        L.a *= V, L.c *= V
                                    }
                                }
                                if (R = w, S = b, s) {
                                    var O = L.a,
                                        D = L.b,
                                        N = L.c,
                                        U = L.d,
                                        X = 0,
                                        B = 0,
                                        Y = 0;
                                    if (X = l ? A[P - 1] : 0 == p[M + 1] ? A[P + 2] : Math.atan2(_, k), X -= Math.atan2(N, O), C) {
                                        B = Math.cos(X), Y = Math.sin(X);
                                        var z = L.data.length;
                                        R += (z * (B * O - Y * N) - k) * i, S += (z * (Y * O + B * N) - _) * i
                                    } else X += I;
                                    X > t.MathUtils.PI ? X -= t.MathUtils.PI2 : X < -t.MathUtils.PI && (X += t.MathUtils.PI2), X *= i, B = Math.cos(X), Y = Math.sin(X), L.a = B * O - Y * N, L.b = B * D - Y * U, L.c = Y * O + B * N, L.d = Y * D + B * U
                                }
                                L.appliedValid = !1
                            }
                        }
                    }
                }, e.prototype.computeWorldPositions = function(n, i, r, s, o) {
                    var a = this.target,
                        h = this.position,
                        l = this.spaces,
                        u = t.Utils.setArraySize(this.positions, 3 * i + 2),
                        c = null,
                        f = n.closed,
                        d = n.worldVerticesLength,
                        p = d / 6,
                        v = e.NONE;
                    if (!n.constantSpeed) {
                        var g = n.lengths,
                            m = g[p -= f ? 1 : 2];
                        if (s && (h *= m), o)
                            for (var M = 1; M < i; M++) l[M] *= m;
                        c = t.Utils.setArraySize(this.world, 8);
                        M = 0;
                        for (var x = 0, y = 0; M < i; M++, x += 3) {
                            var w = h += q = l[M];
                            if (f)(w %= m) < 0 && (w += m), y = 0;
                            else {
                                if (w < 0) {
                                    v != e.BEFORE && (v = e.BEFORE, n.computeWorldVertices(a, 2, 4, c, 0, 2)), this.addBeforePosition(w, c, 0, u, x);
                                    continue
                                }
                                if (w > m) {
                                    v != e.AFTER && (v = e.AFTER, n.computeWorldVertices(a, d - 6, 4, c, 0, 2)), this.addAfterPosition(w - m, c, 0, u, x);
                                    continue
                                }
                            }
                            for (;; y++) {
                                var b = g[y];
                                if (!(w > b)) {
                                    if (0 == y) w /= b;
                                    else w = (w - (Z = g[y - 1])) / (b - Z);
                                    break
                                }
                            }
                            y != v && (v = y, f && y == p ? (n.computeWorldVertices(a, d - 4, 4, c, 0, 2), n.computeWorldVertices(a, 0, 4, c, 4, 2)) : n.computeWorldVertices(a, 6 * y + 2, 8, c, 0, 2)), this.addCurvePosition(w, c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], u, x, r || M > 0 && 0 == q)
                        }
                        return u
                    }
                    f ? (d += 2, c = t.Utils.setArraySize(this.world, d), n.computeWorldVertices(a, 2, d - 4, c, 0, 2), n.computeWorldVertices(a, 0, 2, c, d - 4, 2), c[d - 2] = c[0], c[d - 1] = c[1]) : (p--, d -= 4, c = t.Utils.setArraySize(this.world, d), n.computeWorldVertices(a, 2, d, c, 0, 2));
                    for (var E = t.Utils.setArraySize(this.curves, p), T = 0, A = c[0], R = c[1], S = 0, I = 0, C = 0, P = 0, L = 0, k = 0, _ = 0, F = 0, V = 0, O = 0, D = 0, N = 0, U = 0, X = 0, B = (M = 0, 2); M < p; M++, B += 6) S = c[B], I = c[B + 1], C = c[B + 2], P = c[B + 3], L = c[B + 4], k = c[B + 5], D = 2 * (_ = .1875 * (A - 2 * S + C)) + (V = .09375 * (3 * (S - C) - A + L)), N = 2 * (F = .1875 * (R - 2 * I + P)) + (O = .09375 * (3 * (I - P) - R + k)), U = .75 * (S - A) + _ + .16666667 * V, X = .75 * (I - R) + F + .16666667 * O, T += Math.sqrt(U * U + X * X), U += D, X += N, D += V, N += O, T += Math.sqrt(U * U + X * X), U += D, X += N, T += Math.sqrt(U * U + X * X), U += D + V, X += N + O, T += Math.sqrt(U * U + X * X), E[M] = T, A = L, R = k;
                    if (h *= s ? T : T / n.lengths[p - 1], o)
                        for (M = 1; M < i; M++) l[M] *= T;
                    for (var Y = this.segments, z = 0, W = (M = 0, x = 0, y = 0, 0); M < i; M++, x += 3) {
                        var q;
                        w = h += q = l[M];
                        if (f)(w %= T) < 0 && (w += T), y = 0;
                        else {
                            if (w < 0) {
                                this.addBeforePosition(w, c, 0, u, x);
                                continue
                            }
                            if (w > T) {
                                this.addAfterPosition(w - T, c, d - 4, u, x);
                                continue
                            }
                        }
                        for (;; y++) {
                            var G = E[y];
                            if (!(w > G)) {
                                if (0 == y) w /= G;
                                else w = (w - (Z = E[y - 1])) / (G - Z);
                                break
                            }
                        }
                        if (y != v) {
                            v = y;
                            var H = 6 * y;
                            for (A = c[H], R = c[H + 1], S = c[H + 2], I = c[H + 3], C = c[H + 4], P = c[H + 5], L = c[H + 6], k = c[H + 7], D = 2 * (_ = .03 * (A - 2 * S + C)) + (V = .006 * (3 * (S - C) - A + L)), N = 2 * (F = .03 * (R - 2 * I + P)) + (O = .006 * (3 * (I - P) - R + k)), U = .3 * (S - A) + _ + .16666667 * V, X = .3 * (I - R) + F + .16666667 * O, z = Math.sqrt(U * U + X * X), Y[0] = z, H = 1; H < 8; H++) U += D, X += N, D += V, N += O, z += Math.sqrt(U * U + X * X), Y[H] = z;
                            U += D, X += N, z += Math.sqrt(U * U + X * X), Y[8] = z, U += D + V, X += N + O, z += Math.sqrt(U * U + X * X), Y[9] = z, W = 0
                        }
                        for (w *= z;; W++) {
                            var j = Y[W];
                            if (!(w > j)) {
                                var Z;
                                if (0 == W) w /= j;
                                else w = W + (w - (Z = Y[W - 1])) / (j - Z);
                                break
                            }
                        }
                        this.addCurvePosition(.1 * w, A, R, S, I, C, P, L, k, u, x, r || M > 0 && 0 == q)
                    }
                    return u
                }, e.prototype.addBeforePosition = function(t, e, n, i, r) {
                    var s = e[n],
                        o = e[n + 1],
                        a = e[n + 2] - s,
                        h = e[n + 3] - o,
                        l = Math.atan2(h, a);
                    i[r] = s + t * Math.cos(l), i[r + 1] = o + t * Math.sin(l), i[r + 2] = l
                }, e.prototype.addAfterPosition = function(t, e, n, i, r) {
                    var s = e[n + 2],
                        o = e[n + 3],
                        a = s - e[n],
                        h = o - e[n + 1],
                        l = Math.atan2(h, a);
                    i[r] = s + t * Math.cos(l), i[r + 1] = o + t * Math.sin(l), i[r + 2] = l
                }, e.prototype.addCurvePosition = function(t, e, n, i, r, s, o, a, h, l, u, c) {
                    if (0 == t || isNaN(t)) return l[u] = e, l[u + 1] = n, void(l[u + 2] = Math.atan2(r - n, i - e));
                    var f = t * t,
                        d = f * t,
                        p = 1 - t,
                        v = p * p,
                        g = v * p,
                        m = p * t,
                        M = 3 * m,
                        x = p * M,
                        y = M * t,
                        w = e * g + i * x + s * y + a * d,
                        b = n * g + r * x + o * y + h * d;
                    l[u] = w, l[u + 1] = b, c && (l[u + 2] = t < .001 ? Math.atan2(r - n, i - e) : Math.atan2(b - (n * v + r * m * 2 + o * f), w - (e * v + i * m * 2 + s * f)))
                }, e.NONE = -1, e.BEFORE = -2, e.AFTER = -3, e.epsilon = 1e-5, e
            }();
            t.PathConstraint = e
        }(i || (i = {})),
        function(t) {
            var e = function(t) {
                function e(e) {
                    var n = t.call(this, e, 0, !1) || this;
                    return n.bones = new Array, n
                }
                return r(e, t), e
            }(t.ConstraintData);
            t.PathConstraintData = e,
                function(t) {
                    t[t.Fixed = 0] = "Fixed", t[t.Percent = 1] = "Percent"
                }(t.PositionMode || (t.PositionMode = {})),
                function(t) {
                    t[t.Length = 0] = "Length", t[t.Fixed = 1] = "Fixed", t[t.Percent = 2] = "Percent"
                }(t.SpacingMode || (t.SpacingMode = {})),
                function(t) {
                    t[t.Tangent = 0] = "Tangent", t[t.Chain = 1] = "Chain", t[t.ChainScale = 2] = "ChainScale"
                }(t.RotateMode || (t.RotateMode = {}))
        }(i || (i = {})),
        function(t) {
            var e = function() {
                    function t(t) {
                        this.toLoad = new Array, this.assets = {}, this.clientId = t
                    }
                    return t.prototype.loaded = function() {
                        var t = 0;
                        for (var e in this.assets) t++;
                        return t
                    }, t
                }(),
                n = function() {
                    function t(t) {
                        void 0 === t && (t = ""), this.clientAssets = {}, this.queuedAssets = {}, this.rawAssets = {}, this.errors = {}, this.pathPrefix = t
                    }
                    return t.prototype.queueAsset = function(t, n, i) {
                        var r = this.clientAssets[t];
                        return null !== r && void 0 !== r || (r = new e(t), this.clientAssets[t] = r), null !== n && (r.textureLoader = n), r.toLoad.push(i), this.queuedAssets[i] !== i && (this.queuedAssets[i] = i, !0)
                    }, t.prototype.loadText = function(t, e) {
                        var n = this;
                        if (e = this.pathPrefix + e, this.queueAsset(t, null, e)) {
                            var i = new XMLHttpRequest;
                            i.onreadystatechange = function() {
                                i.readyState == XMLHttpRequest.DONE && (i.status >= 200 && i.status < 300 ? n.rawAssets[e] = i.responseText : n.errors[e] = "Couldn't load text " + e + ": status " + i.status + ", " + i.responseText)
                            }, i.open("GET", e, !0), i.send()
                        }
                    }, t.prototype.loadJson = function(t, e) {
                        var n = this;
                        if (e = this.pathPrefix + e, this.queueAsset(t, null, e)) {
                            var i = new XMLHttpRequest;
                            i.onreadystatechange = function() {
                                i.readyState == XMLHttpRequest.DONE && (i.status >= 200 && i.status < 300 ? n.rawAssets[e] = JSON.parse(i.responseText) : n.errors[e] = "Couldn't load text " + e + ": status " + i.status + ", " + i.responseText)
                            }, i.open("GET", e, !0), i.send()
                        }
                    }, t.prototype.loadTexture = function(t, e, n) {
                        var i = this;
                        if (n = this.pathPrefix + n, this.queueAsset(t, e, n)) {
                            var r = new Image;
                            r.src = n, r.crossOrigin = "anonymous", r.onload = function(t) {
                                i.rawAssets[n] = r
                            }, r.onerror = function(t) {
                                i.errors[n] = "Couldn't load image " + n
                            }
                        }
                    }, t.prototype.get = function(t, e) {
                        e = this.pathPrefix + e;
                        var n = this.clientAssets[t];
                        return null === n || void 0 === n || n.assets[e]
                    }, t.prototype.updateClientAssets = function(t) {
                        for (var e = 0; e < t.toLoad.length; e++) {
                            var n = t.toLoad[e],
                                i = t.assets[n];
                            if (null === i || void 0 === i) {
                                var r = this.rawAssets[n];
                                if (null === r || void 0 === r) continue;
                                r instanceof HTMLImageElement ? t.assets[n] = t.textureLoader(r) : t.assets[n] = r
                            }
                        }
                    }, t.prototype.isLoadingComplete = function(t) {
                        var e = this.clientAssets[t];
                        return null === e || void 0 === e || (this.updateClientAssets(e), e.toLoad.length == e.loaded())
                    }, t.prototype.dispose = function() {}, t.prototype.hasErrors = function() {
                        return Object.keys(this.errors).length > 0
                    }, t.prototype.getErrors = function() {
                        return this.errors
                    }, t
                }();
            t.SharedAssetManager = n
        }(i || (i = {})),
        function(t) {
            var e = function() {
                function e(e) {
                    if (this._updateCache = new Array, this.updateCacheReset = new Array, this.time = 0, this.scaleX = 1, this.scaleY = 1, this.x = 0, this.y = 0, null == e) throw new Error("data cannot be null.");
                    this.data = e, this.bones = new Array;
                    for (var n = 0; n < e.bones.length; n++) {
                        var i = e.bones[n],
                            r = void 0;
                        if (null == i.parent) r = new t.Bone(i, this, null);
                        else {
                            var s = this.bones[i.parent.index];
                            r = new t.Bone(i, this, s), s.children.push(r)
                        }
                        this.bones.push(r)
                    }
                    this.slots = new Array, this.drawOrder = new Array;
                    for (n = 0; n < e.slots.length; n++) {
                        var o = e.slots[n],
                            a = (r = this.bones[o.boneData.index], new t.Slot(o, r));
                        this.slots.push(a), this.drawOrder.push(a)
                    }
                    this.ikConstraints = new Array;
                    for (n = 0; n < e.ikConstraints.length; n++) {
                        var h = e.ikConstraints[n];
                        this.ikConstraints.push(new t.IkConstraint(h, this))
                    }
                    this.transformConstraints = new Array;
                    for (n = 0; n < e.transformConstraints.length; n++) {
                        var l = e.transformConstraints[n];
                        this.transformConstraints.push(new t.TransformConstraint(l, this))
                    }
                    this.pathConstraints = new Array;
                    for (n = 0; n < e.pathConstraints.length; n++) {
                        var u = e.pathConstraints[n];
                        this.pathConstraints.push(new t.PathConstraint(u, this))
                    }
                    this.color = new t.Color(1, 1, 1, 1), this.updateCache()
                }
                return e.prototype.updateCache = function() {
                    this._updateCache.length = 0, this.updateCacheReset.length = 0;
                    for (var t = this.bones, e = 0, n = t.length; e < n; e++) {
                        (r = t[e]).sorted = r.data.skinRequired, r.active = !r.sorted
                    }
                    if (null != this.skin) {
                        var i = this.skin.bones;
                        for (e = 0, n = this.skin.bones.length; e < n; e++) {
                            var r = this.bones[i[e].index];
                            do {
                                r.sorted = !1, r.active = !0, r = r.parent
                            } while (null != r)
                        }
                    }
                    var s = this.ikConstraints,
                        o = this.transformConstraints,
                        a = this.pathConstraints,
                        h = s.length,
                        l = o.length,
                        u = a.length,
                        c = h + l + u;
                    t: for (e = 0; e < c; e++) {
                        for (var f = 0; f < h; f++) {
                            if ((d = s[f]).data.order == e) {
                                this.sortIkConstraint(d);
                                continue t
                            }
                        }
                        for (f = 0; f < l; f++) {
                            if ((d = o[f]).data.order == e) {
                                this.sortTransformConstraint(d);
                                continue t
                            }
                        }
                        for (f = 0; f < u; f++) {
                            var d;
                            if ((d = a[f]).data.order == e) {
                                this.sortPathConstraint(d);
                                continue t
                            }
                        }
                    }
                    for (e = 0, n = t.length; e < n; e++) this.sortBone(t[e])
                }, e.prototype.sortIkConstraint = function(e) {
                    if (e.active = e.target.isActive() && (!e.data.skinRequired || null != this.skin && t.Utils.contains(this.skin.constraints, e.data, !0)), e.active) {
                        var n = e.target;
                        this.sortBone(n);
                        var i = e.bones,
                            r = i[0];
                        if (this.sortBone(r), i.length > 1) {
                            var s = i[i.length - 1];
                            this._updateCache.indexOf(s) > -1 || this.updateCacheReset.push(s)
                        }
                        this._updateCache.push(e), this.sortReset(r.children), i[i.length - 1].sorted = !0
                    }
                }, e.prototype.sortPathConstraint = function(e) {
                    if (e.active = e.target.bone.isActive() && (!e.data.skinRequired || null != this.skin && t.Utils.contains(this.skin.constraints, e.data, !0)), e.active) {
                        var n = e.target,
                            i = n.data.index,
                            r = n.bone;
                        null != this.skin && this.sortPathConstraintAttachment(this.skin, i, r), null != this.data.defaultSkin && this.data.defaultSkin != this.skin && this.sortPathConstraintAttachment(this.data.defaultSkin, i, r);
                        for (var s = 0, o = this.data.skins.length; s < o; s++) this.sortPathConstraintAttachment(this.data.skins[s], i, r);
                        var a = n.getAttachment();
                        a instanceof t.PathAttachment && this.sortPathConstraintAttachmentWith(a, r);
                        var h = e.bones,
                            l = h.length;
                        for (s = 0; s < l; s++) this.sortBone(h[s]);
                        this._updateCache.push(e);
                        for (s = 0; s < l; s++) this.sortReset(h[s].children);
                        for (s = 0; s < l; s++) h[s].sorted = !0
                    }
                }, e.prototype.sortTransformConstraint = function(e) {
                    if (e.active = e.target.isActive() && (!e.data.skinRequired || null != this.skin && t.Utils.contains(this.skin.constraints, e.data, !0)), e.active) {
                        this.sortBone(e.target);
                        var n = e.bones,
                            i = n.length;
                        if (e.data.local)
                            for (var r = 0; r < i; r++) {
                                var s = n[r];
                                this.sortBone(s.parent), this._updateCache.indexOf(s) > -1 || this.updateCacheReset.push(s)
                            } else
                                for (r = 0; r < i; r++) this.sortBone(n[r]);
                        this._updateCache.push(e);
                        for (var o = 0; o < i; o++) this.sortReset(n[o].children);
                        for (o = 0; o < i; o++) n[o].sorted = !0
                    }
                }, e.prototype.sortPathConstraintAttachment = function(t, e, n) {
                    var i = t.attachments[e];
                    if (i)
                        for (var r in i) this.sortPathConstraintAttachmentWith(i[r], n)
                }, e.prototype.sortPathConstraintAttachmentWith = function(e, n) {
                    if (e instanceof t.PathAttachment) {
                        var i = e.bones;
                        if (null == i) this.sortBone(n);
                        else
                            for (var r = this.bones, s = 0; s < i.length;)
                                for (var o = i[s++], a = s + o; s < a; s++) {
                                    var h = i[s];
                                    this.sortBone(r[h])
                                }
                    }
                }, e.prototype.sortBone = function(t) {
                    if (!t.sorted) {
                        var e = t.parent;
                        null != e && this.sortBone(e), t.sorted = !0, this._updateCache.push(t)
                    }
                }, e.prototype.sortReset = function(t) {
                    for (var e = 0, n = t.length; e < n; e++) {
                        var i = t[e];
                        i.active && (i.sorted && this.sortReset(i.children), i.sorted = !1)
                    }
                }, e.prototype.updateWorldTransform = function() {
                    for (var t = this.updateCacheReset, e = 0, n = t.length; e < n; e++) {
                        var i = t[e];
                        i.ax = i.x, i.ay = i.y, i.arotation = i.rotation, i.ascaleX = i.scaleX, i.ascaleY = i.scaleY, i.ashearX = i.shearX, i.ashearY = i.shearY, i.appliedValid = !0
                    }
                    var r = this._updateCache;
                    for (e = 0, n = r.length; e < n; e++) r[e].update()
                }, e.prototype.setToSetupPose = function() {
                    this.setBonesToSetupPose(), this.setSlotsToSetupPose()
                }, e.prototype.setBonesToSetupPose = function() {
                    for (var t = this.bones, e = 0, n = t.length; e < n; e++) t[e].setToSetupPose();
                    var i = this.ikConstraints;
                    for (e = 0, n = i.length; e < n; e++) {
                        (a = i[e]).mix = a.data.mix, a.softness = a.data.softness, a.bendDirection = a.data.bendDirection, a.compress = a.data.compress, a.stretch = a.data.stretch
                    }
                    var r = this.transformConstraints;
                    for (e = 0, n = r.length; e < n; e++) {
                        var s = (a = r[e]).data;
                        a.rotateMix = s.rotateMix, a.translateMix = s.translateMix, a.scaleMix = s.scaleMix, a.shearMix = s.shearMix
                    }
                    var o = this.pathConstraints;
                    for (e = 0, n = o.length; e < n; e++) {
                        var a;
                        s = (a = o[e]).data;
                        a.position = s.position, a.spacing = s.spacing, a.rotateMix = s.rotateMix, a.translateMix = s.translateMix
                    }
                }, e.prototype.setSlotsToSetupPose = function() {
                    var e = this.slots;
                    t.Utils.arrayCopy(e, 0, this.drawOrder, 0, e.length);
                    for (var n = 0, i = e.length; n < i; n++) e[n].setToSetupPose()
                }, e.prototype.getRootBone = function() {
                    return 0 == this.bones.length ? null : this.bones[0]
                }, e.prototype.findBone = function(t) {
                    if (null == t) throw new Error("boneName cannot be null.");
                    for (var e = this.bones, n = 0, i = e.length; n < i; n++) {
                        var r = e[n];
                        if (r.data.name == t) return r
                    }
                    return null
                }, e.prototype.findBoneIndex = function(t) {
                    if (null == t) throw new Error("boneName cannot be null.");
                    for (var e = this.bones, n = 0, i = e.length; n < i; n++)
                        if (e[n].data.name == t) return n;
                    return -1
                }, e.prototype.findSlot = function(t) {
                    if (null == t) throw new Error("slotName cannot be null.");
                    for (var e = this.slots, n = 0, i = e.length; n < i; n++) {
                        var r = e[n];
                        if (r.data.name == t) return r
                    }
                    return null
                }, e.prototype.findSlotIndex = function(t) {
                    if (null == t) throw new Error("slotName cannot be null.");
                    for (var e = this.slots, n = 0, i = e.length; n < i; n++)
                        if (e[n].data.name == t) return n;
                    return -1
                }, e.prototype.setSkinByName = function(t) {
                    var e = this.data.findSkin(t);
                    if (null == e) throw new Error("Skin not found: " + t);
                    this.setSkin(e)
                }, e.prototype.setSkin = function(t) {
                    if (t != this.skin) {
                        if (null != t)
                            if (null != this.skin) t.attachAll(this, this.skin);
                            else
                                for (var e = this.slots, n = 0, i = e.length; n < i; n++) {
                                    var r = e[n],
                                        s = r.data.attachmentName;
                                    if (null != s) {
                                        var o = t.getAttachment(n, s);
                                        null != o && r.setAttachment(o)
                                    }
                                }
                        this.skin = t, this.updateCache()
                    }
                }, e.prototype.getAttachmentByName = function(t, e) {
                    return this.getAttachment(this.data.findSlotIndex(t), e)
                }, e.prototype.getAttachment = function(t, e) {
                    if (null == e) throw new Error("attachmentName cannot be null.");
                    if (null != this.skin) {
                        var n = this.skin.getAttachment(t, e);
                        if (null != n) return n
                    }
                    return null != this.data.defaultSkin ? this.data.defaultSkin.getAttachment(t, e) : null
                }, e.prototype.setAttachment = function(t, e) {
                    if (null == t) throw new Error("slotName cannot be null.");
                    for (var n = this.slots, i = 0, r = n.length; i < r; i++) {
                        var s = n[i];
                        if (s.data.name == t) {
                            var o = null;
                            if (null != e && null == (o = this.getAttachment(i, e))) throw new Error("Attachment not found: " + e + ", for slot: " + t);
                            return void s.setAttachment(o)
                        }
                    }
                    throw new Error("Slot not found: " + t)
                }, e.prototype.findIkConstraint = function(t) {
                    if (null == t) throw new Error("constraintName cannot be null.");
                    for (var e = this.ikConstraints, n = 0, i = e.length; n < i; n++) {
                        var r = e[n];
                        if (r.data.name == t) return r
                    }
                    return null
                }, e.prototype.findTransformConstraint = function(t) {
                    if (null == t) throw new Error("constraintName cannot be null.");
                    for (var e = this.transformConstraints, n = 0, i = e.length; n < i; n++) {
                        var r = e[n];
                        if (r.data.name == t) return r
                    }
                    return null
                }, e.prototype.findPathConstraint = function(t) {
                    if (null == t) throw new Error("constraintName cannot be null.");
                    for (var e = this.pathConstraints, n = 0, i = e.length; n < i; n++) {
                        var r = e[n];
                        if (r.data.name == t) return r
                    }
                    return null
                }, e.prototype.getBounds = function(e, n, i) {
                    if (void 0 === i && (i = new Array(2)), null == e) throw new Error("offset cannot be null.");
                    if (null == n) throw new Error("size cannot be null.");
                    for (var r = this.drawOrder, s = Number.POSITIVE_INFINITY, o = Number.POSITIVE_INFINITY, a = Number.NEGATIVE_INFINITY, h = Number.NEGATIVE_INFINITY, l = 0, u = r.length; l < u; l++) {
                        var c = r[l];
                        if (c.bone.active) {
                            var f = 0,
                                d = null,
                                p = c.getAttachment();
                            if (p instanceof t.RegionAttachment) f = 8, d = t.Utils.setArraySize(i, f, 0), p.computeWorldVertices(c.bone, d, 0, 2);
                            else if (p instanceof t.MeshAttachment) {
                                var v = p;
                                f = v.worldVerticesLength, d = t.Utils.setArraySize(i, f, 0), v.computeWorldVertices(c, 0, f, d, 0, 2)
                            }
                            if (null != d)
                                for (var g = 0, m = d.length; g < m; g += 2) {
                                    var M = d[g],
                                        x = d[g + 1];
                                    s = Math.min(s, M), o = Math.min(o, x), a = Math.max(a, M), h = Math.max(h, x)
                                }
                        }
                    }
                    e.set(s, o), n.set(a - s, h - o)
                }, e.prototype.update = function(t) {
                    this.time += t
                }, e
            }();
            t.Skeleton = e
        }(i || (i = {})),
        function(t) {
            var e = function() {
                function e(t) {
                    this.scale = 1, this.linkedMeshes = new Array, this.attachmentLoader = t
                }
                return e.prototype.readSkeletonData = function(i) {
                    var r = this.scale,
                        s = new t.SkeletonData;
                    s.name = "";
                    var o = new n(i);
                    s.hash = o.readString(), s.version = o.readString(), s.x = o.readFloat(), s.y = o.readFloat(), s.width = o.readFloat(), s.height = o.readFloat();
                    var a = o.readBoolean();
                    a && (s.fps = o.readFloat(), s.imagesPath = o.readString(), s.audioPath = o.readString());
                    var h = 0;
                    h = o.readInt(!0);
                    for (var l = 0; l < h; l++) o.strings.push(o.readString());
                    h = o.readInt(!0);
                    for (l = 0; l < h; l++) {
                        var u = o.readString(),
                            c = 0 == l ? null : s.bones[o.readInt(!0)];
                        (p = new t.BoneData(l, u, c)).rotation = o.readFloat(), p.x = o.readFloat() * r, p.y = o.readFloat() * r, p.scaleX = o.readFloat(), p.scaleY = o.readFloat(), p.shearX = o.readFloat(), p.shearY = o.readFloat(), p.length = o.readFloat() * r, p.transformMode = e.TransformModeValues[o.readInt(!0)], p.skinRequired = o.readBoolean(), a && t.Color.rgba8888ToColor(p.color, o.readInt32()), s.bones.push(p)
                    }
                    h = o.readInt(!0);
                    for (l = 0; l < h; l++) {
                        var f = o.readString(),
                            d = s.bones[o.readInt(!0)],
                            p = new t.SlotData(l, f, d);
                        t.Color.rgba8888ToColor(p.color, o.readInt32());
                        var v = o.readInt32(); - 1 != v && t.Color.rgb888ToColor(p.darkColor = new t.Color, v), p.attachmentName = o.readStringRef(), p.blendMode = e.BlendModeValues[o.readInt(!0)], s.slots.push(p)
                    }
                    h = o.readInt(!0);
                    l = 0;
                    for (var g = void 0; l < h; l++) {
                        (p = new t.IkConstraintData(o.readString())).order = o.readInt(!0), p.skinRequired = o.readBoolean(), g = o.readInt(!0);
                        for (var m = 0; m < g; m++) p.bones.push(s.bones[o.readInt(!0)]);
                        p.target = s.bones[o.readInt(!0)], p.mix = o.readFloat(), p.softness = o.readFloat() * r, p.bendDirection = o.readByte(), p.compress = o.readBoolean(), p.stretch = o.readBoolean(), p.uniform = o.readBoolean(), s.ikConstraints.push(p)
                    }
                    h = o.readInt(!0);
                    for (l = 0, g = void 0; l < h; l++) {
                        (p = new t.TransformConstraintData(o.readString())).order = o.readInt(!0), p.skinRequired = o.readBoolean(), g = o.readInt(!0);
                        for (m = 0; m < g; m++) p.bones.push(s.bones[o.readInt(!0)]);
                        p.target = s.bones[o.readInt(!0)], p.local = o.readBoolean(), p.relative = o.readBoolean(), p.offsetRotation = o.readFloat(), p.offsetX = o.readFloat() * r, p.offsetY = o.readFloat() * r, p.offsetScaleX = o.readFloat(), p.offsetScaleY = o.readFloat(), p.offsetShearY = o.readFloat(), p.rotateMix = o.readFloat(), p.translateMix = o.readFloat(), p.scaleMix = o.readFloat(), p.shearMix = o.readFloat(), s.transformConstraints.push(p)
                    }
                    h = o.readInt(!0);
                    for (l = 0, g = void 0; l < h; l++) {
                        (p = new t.PathConstraintData(o.readString())).order = o.readInt(!0), p.skinRequired = o.readBoolean(), g = o.readInt(!0);
                        for (m = 0; m < g; m++) p.bones.push(s.bones[o.readInt(!0)]);
                        p.target = s.slots[o.readInt(!0)], p.positionMode = e.PositionModeValues[o.readInt(!0)], p.spacingMode = e.SpacingModeValues[o.readInt(!0)], p.rotateMode = e.RotateModeValues[o.readInt(!0)], p.offsetRotation = o.readFloat(), p.position = o.readFloat(), p.positionMode == t.PositionMode.Fixed && (p.position *= r), p.spacing = o.readFloat(), p.spacingMode != t.SpacingMode.Length && p.spacingMode != t.SpacingMode.Fixed || (p.spacing *= r), p.rotateMix = o.readFloat(), p.translateMix = o.readFloat(), s.pathConstraints.push(p)
                    }
                    var M = this.readSkin(o, s, !0, a);
                    null != M && (s.defaultSkin = M, s.skins.push(M));
                    l = s.skins.length;
                    for (t.Utils.setArraySize(s.skins, h = l + o.readInt(!0)); l < h; l++) s.skins[l] = this.readSkin(o, s, !1, a);
                    h = this.linkedMeshes.length;
                    for (l = 0; l < h; l++) {
                        var x = this.linkedMeshes[l],
                            y = null == x.skin ? s.defaultSkin : s.findSkin(x.skin);
                        if (null == y) throw new Error("Skin not found: " + x.skin);
                        var w = y.getAttachment(x.slotIndex, x.parent);
                        if (null == w) throw new Error("Parent mesh not found: " + x.parent);
                        x.mesh.deformAttachment = x.inheritDeform ? w : x.mesh, x.mesh.setParentMesh(w), x.mesh.updateUVs()
                    }
                    this.linkedMeshes.length = 0, h = o.readInt(!0);
                    for (l = 0; l < h; l++) {
                        (p = new t.EventData(o.readStringRef())).intValue = o.readInt(!1), p.floatValue = o.readFloat(), p.stringValue = o.readString(), p.audioPath = o.readString(), null != p.audioPath && (p.volume = o.readFloat(), p.balance = o.readFloat()), s.events.push(p)
                    }
                    h = o.readInt(!0);
                    for (l = 0; l < h; l++) s.animations.push(this.readAnimation(o, o.readString(), s));
                    return s
                }, e.prototype.readSkin = function(e, n, i, r) {
                    var s = null,
                        o = 0;
                    if (i) {
                        if (0 == (o = e.readInt(!0))) return null;
                        s = new t.Skin("default")
                    } else {
                        (s = new t.Skin(e.readStringRef())).bones.length = e.readInt(!0);
                        for (var a = 0, h = s.bones.length; a < h; a++) s.bones[a] = n.bones[e.readInt(!0)];
                        for (a = 0, h = e.readInt(!0); a < h; a++) s.constraints.push(n.ikConstraints[e.readInt(!0)]);
                        for (a = 0, h = e.readInt(!0); a < h; a++) s.constraints.push(n.transformConstraints[e.readInt(!0)]);
                        for (a = 0, h = e.readInt(!0); a < h; a++) s.constraints.push(n.pathConstraints[e.readInt(!0)]);
                        o = e.readInt(!0)
                    }
                    for (a = 0; a < o; a++)
                        for (var l = e.readInt(!0), u = 0, c = e.readInt(!0); u < c; u++) {
                            var f = e.readStringRef(),
                                d = this.readAttachment(e, n, s, l, f, r);
                            null != d && s.setAttachment(l, f, d)
                        }
                    return s
                }, e.prototype.readAttachment = function(n, r, s, o, a, h) {
                    var l = this.scale,
                        u = n.readStringRef();
                    null == u && (u = a);
                    var c = n.readByte();
                    switch (e.AttachmentTypeValues[c]) {
                        case t.AttachmentType.Region:
                            var f = n.readStringRef(),
                                d = n.readFloat(),
                                p = n.readFloat(),
                                v = n.readFloat(),
                                g = n.readFloat(),
                                m = n.readFloat(),
                                M = n.readFloat(),
                                x = n.readFloat(),
                                y = n.readInt32();
                            null == f && (f = u);
                            var w = this.attachmentLoader.newRegionAttachment(s, u, f);
                            return null == w ? null : (w.path = f, w.x = p * l, w.y = v * l, w.scaleX = g, w.scaleY = m, w.rotation = d, w.width = M * l, w.height = x * l, t.Color.rgba8888ToColor(w.color, y), w.updateOffset(), w);
                        case t.AttachmentType.BoundingBox:
                            var b = n.readInt(!0),
                                E = this.readVertices(n, b),
                                T = (y = h ? n.readInt32() : 0, this.attachmentLoader.newBoundingBoxAttachment(s, u));
                            return null == T ? null : (T.worldVerticesLength = b << 1, T.vertices = E.vertices, T.bones = E.bones, h && t.Color.rgba8888ToColor(T.color, y), T);
                        case t.AttachmentType.Mesh:
                            f = n.readStringRef(), y = n.readInt32(), b = n.readInt(!0);
                            var A = this.readFloatArray(n, b << 1, 1),
                                R = this.readShortArray(n),
                                S = (E = this.readVertices(n, b), n.readInt(!0)),
                                I = null;
                            M = 0, x = 0;
                            return h && (I = this.readShortArray(n), M = n.readFloat(), x = n.readFloat()), null == f && (f = u), null == (C = this.attachmentLoader.newMeshAttachment(s, u, f)) ? null : (C.path = f, t.Color.rgba8888ToColor(C.color, y), C.bones = E.bones, C.vertices = E.vertices, C.worldVerticesLength = b << 1, C.triangles = R, C.regionUVs = A, C.updateUVs(), C.hullLength = S << 1, h && (C.edges = I, C.width = M * l, C.height = x * l), C);
                        case t.AttachmentType.LinkedMesh:
                            f = n.readStringRef(), y = n.readInt32();
                            var C, P = n.readStringRef(),
                                L = n.readStringRef(),
                                k = n.readBoolean();
                            M = 0, x = 0;
                            return h && (M = n.readFloat(), x = n.readFloat()), null == f && (f = u), null == (C = this.attachmentLoader.newMeshAttachment(s, u, f)) ? null : (C.path = f, t.Color.rgba8888ToColor(C.color, y), h && (C.width = M * l, C.height = x * l), this.linkedMeshes.push(new i(C, P, o, L, k)), C);
                        case t.AttachmentType.Path:
                            for (var _ = n.readBoolean(), F = n.readBoolean(), V = (b = n.readInt(!0), E = this.readVertices(n, b), t.Utils.newArray(b / 3, 0)), O = 0, D = V.length; O < D; O++) V[O] = n.readFloat() * l;
                            y = h ? n.readInt32() : 0;
                            return null == (f = this.attachmentLoader.newPathAttachment(s, u)) ? null : (f.closed = _, f.constantSpeed = F, f.worldVerticesLength = b << 1, f.vertices = E.vertices, f.bones = E.bones, f.lengths = V, h && t.Color.rgba8888ToColor(f.color, y), f);
                        case t.AttachmentType.Point:
                            d = n.readFloat(), p = n.readFloat(), v = n.readFloat(), y = h ? n.readInt32() : 0;
                            var N = this.attachmentLoader.newPointAttachment(s, u);
                            return null == N ? null : (N.x = p * l, N.y = v * l, N.rotation = d, h && t.Color.rgba8888ToColor(N.color, y), N);
                        case t.AttachmentType.Clipping:
                            var U = n.readInt(!0),
                                X = (b = n.readInt(!0), E = this.readVertices(n, b), y = h ? n.readInt32() : 0, this.attachmentLoader.newClippingAttachment(s, u));
                            return null == X ? null : (X.endSlot = r.slots[U], X.worldVerticesLength = b << 1, X.vertices = E.vertices, X.bones = E.bones, h && t.Color.rgba8888ToColor(X.color, y), X)
                    }
                    return null
                }, e.prototype.readVertices = function(e, n) {
                    var i = n << 1,
                        s = new r,
                        o = this.scale;
                    if (!e.readBoolean()) return s.vertices = this.readFloatArray(e, i, o), s;
                    for (var a = new Array, h = new Array, l = 0; l < n; l++) {
                        var u = e.readInt(!0);
                        h.push(u);
                        for (var c = 0; c < u; c++) h.push(e.readInt(!0)), a.push(e.readFloat() * o), a.push(e.readFloat() * o), a.push(e.readFloat())
                    }
                    return s.vertices = t.Utils.toFloatArray(a), s.bones = h, s
                }, e.prototype.readFloatArray = function(t, e, n) {
                    var i = new Array(e);
                    if (1 == n)
                        for (var r = 0; r < e; r++) i[r] = t.readFloat();
                    else
                        for (r = 0; r < e; r++) i[r] = t.readFloat() * n;
                    return i
                }, e.prototype.readShortArray = function(t) {
                    for (var e = t.readInt(!0), n = new Array(e), i = 0; i < e; i++) n[i] = t.readShort();
                    return n
                }, e.prototype.readAnimation = function(n, i, r) {
                    for (var s = new Array, o = this.scale, a = 0, h = new t.Color, l = new t.Color, u = 0, c = n.readInt(!0); u < c; u++)
                        for (var f = n.readInt(!0), d = 0, p = n.readInt(!0); d < p; d++) {
                            var v = n.readByte(),
                                g = n.readInt(!0);
                            switch (v) {
                                case e.SLOT_ATTACHMENT:
                                    (y = new t.AttachmentTimeline(g)).slotIndex = f;
                                    for (var m = 0; m < g; m++) y.setFrame(m, n.readFloat(), n.readStringRef());
                                    s.push(y), a = Math.max(a, y.frames[g - 1]);
                                    break;
                                case e.SLOT_COLOR:
                                    (y = new t.ColorTimeline(g)).slotIndex = f;
                                    for (m = 0; m < g; m++) {
                                        var M = n.readFloat();
                                        t.Color.rgba8888ToColor(h, n.readInt32()), y.setFrame(m, M, h.r, h.g, h.b, h.a), m < g - 1 && this.readCurve(n, m, y)
                                    }
                                    s.push(y), a = Math.max(a, y.frames[(g - 1) * t.ColorTimeline.ENTRIES]);
                                    break;
                                case e.SLOT_TWO_COLOR:
                                    (y = new t.TwoColorTimeline(g)).slotIndex = f;
                                    for (m = 0; m < g; m++) {
                                        M = n.readFloat();
                                        t.Color.rgba8888ToColor(h, n.readInt32()), t.Color.rgb888ToColor(l, n.readInt32()), y.setFrame(m, M, h.r, h.g, h.b, h.a, l.r, l.g, l.b), m < g - 1 && this.readCurve(n, m, y)
                                    }
                                    s.push(y), a = Math.max(a, y.frames[(g - 1) * t.TwoColorTimeline.ENTRIES])
                            }
                        }
                    for (u = 0, c = n.readInt(!0); u < c; u++) {
                        var x = n.readInt(!0);
                        for (d = 0, p = n.readInt(!0); d < p; d++) {
                            v = n.readByte(), g = n.readInt(!0);
                            switch (v) {
                                case e.BONE_ROTATE:
                                    (y = new t.RotateTimeline(g)).boneIndex = x;
                                    for (m = 0; m < g; m++) y.setFrame(m, n.readFloat(), n.readFloat()), m < g - 1 && this.readCurve(n, m, y);
                                    s.push(y), a = Math.max(a, y.frames[(g - 1) * t.RotateTimeline.ENTRIES]);
                                    break;
                                case e.BONE_TRANSLATE:
                                case e.BONE_SCALE:
                                case e.BONE_SHEAR:
                                    var y = void 0,
                                        w = 1;
                                    v == e.BONE_SCALE ? y = new t.ScaleTimeline(g) : v == e.BONE_SHEAR ? y = new t.ShearTimeline(g) : (y = new t.TranslateTimeline(g), w = o), y.boneIndex = x;
                                    for (m = 0; m < g; m++) y.setFrame(m, n.readFloat(), n.readFloat() * w, n.readFloat() * w), m < g - 1 && this.readCurve(n, m, y);
                                    s.push(y), a = Math.max(a, y.frames[(g - 1) * t.TranslateTimeline.ENTRIES])
                            }
                        }
                    }
                    for (u = 0, c = n.readInt(!0); u < c; u++) {
                        var b = n.readInt(!0);
                        g = n.readInt(!0);
                        (y = new t.IkConstraintTimeline(g)).ikConstraintIndex = b;
                        for (m = 0; m < g; m++) y.setFrame(m, n.readFloat(), n.readFloat(), n.readFloat() * o, n.readByte(), n.readBoolean(), n.readBoolean()), m < g - 1 && this.readCurve(n, m, y);
                        s.push(y), a = Math.max(a, y.frames[(g - 1) * t.IkConstraintTimeline.ENTRIES])
                    }
                    for (u = 0, c = n.readInt(!0); u < c; u++) {
                        b = n.readInt(!0), g = n.readInt(!0);
                        (y = new t.TransformConstraintTimeline(g)).transformConstraintIndex = b;
                        for (m = 0; m < g; m++) y.setFrame(m, n.readFloat(), n.readFloat(), n.readFloat(), n.readFloat(), n.readFloat()), m < g - 1 && this.readCurve(n, m, y);
                        s.push(y), a = Math.max(a, y.frames[(g - 1) * t.TransformConstraintTimeline.ENTRIES])
                    }
                    for (u = 0, c = n.readInt(!0); u < c; u++) {
                        b = n.readInt(!0);
                        var E = r.pathConstraints[b];
                        for (d = 0, p = n.readInt(!0); d < p; d++) {
                            v = n.readByte(), g = n.readInt(!0);
                            switch (v) {
                                case e.PATH_POSITION:
                                case e.PATH_SPACING:
                                    y = void 0, w = 1;
                                    v == e.PATH_SPACING ? (y = new t.PathConstraintSpacingTimeline(g), E.spacingMode != t.SpacingMode.Length && E.spacingMode != t.SpacingMode.Fixed || (w = o)) : (y = new t.PathConstraintPositionTimeline(g), E.positionMode == t.PositionMode.Fixed && (w = o)), y.pathConstraintIndex = b;
                                    for (m = 0; m < g; m++) y.setFrame(m, n.readFloat(), n.readFloat() * w), m < g - 1 && this.readCurve(n, m, y);
                                    s.push(y), a = Math.max(a, y.frames[(g - 1) * t.PathConstraintPositionTimeline.ENTRIES]);
                                    break;
                                case e.PATH_MIX:
                                    (y = new t.PathConstraintMixTimeline(g)).pathConstraintIndex = b;
                                    for (m = 0; m < g; m++) y.setFrame(m, n.readFloat(), n.readFloat(), n.readFloat()), m < g - 1 && this.readCurve(n, m, y);
                                    s.push(y), a = Math.max(a, y.frames[(g - 1) * t.PathConstraintMixTimeline.ENTRIES])
                            }
                        }
                    }
                    for (u = 0, c = n.readInt(!0); u < c; u++) {
                        var T = r.skins[n.readInt(!0)];
                        for (d = 0, p = n.readInt(!0); d < p; d++) {
                            f = n.readInt(!0);
                            for (var A = 0, R = n.readInt(!0); A < R; A++) {
                                var S = T.getAttachment(f, n.readStringRef()),
                                    I = null != S.bones,
                                    C = S.vertices,
                                    P = I ? C.length / 3 * 2 : C.length;
                                g = n.readInt(!0);
                                (y = new t.DeformTimeline(g)).slotIndex = f, y.attachment = S;
                                for (m = 0; m < g; m++) {
                                    M = n.readFloat();
                                    var L = void 0,
                                        k = n.readInt(!0);
                                    if (0 == k) L = I ? t.Utils.newFloatArray(P) : C;
                                    else {
                                        L = t.Utils.newFloatArray(P);
                                        var _ = n.readInt(!0);
                                        if (k += _, 1 == o)
                                            for (var F = _; F < k; F++) L[F] = n.readFloat();
                                        else
                                            for (F = _; F < k; F++) L[F] = n.readFloat() * o;
                                        if (!I) {
                                            F = 0;
                                            for (var V = L.length; F < V; F++) L[F] += C[F]
                                        }
                                    }
                                    y.setFrame(m, M, L), m < g - 1 && this.readCurve(n, m, y)
                                }
                                s.push(y), a = Math.max(a, y.frames[g - 1])
                            }
                        }
                    }
                    var O = n.readInt(!0);
                    if (O > 0) {
                        y = new t.DrawOrderTimeline(O);
                        var D = r.slots.length;
                        for (u = 0; u < O; u++) {
                            M = n.readFloat();
                            var N = n.readInt(!0),
                                U = t.Utils.newArray(D, 0);
                            for (d = D - 1; d >= 0; d--) U[d] = -1;
                            var X = t.Utils.newArray(D - N, 0),
                                B = 0,
                                Y = 0;
                            for (d = 0; d < N; d++) {
                                for (f = n.readInt(!0); B != f;) X[Y++] = B++;
                                U[B + n.readInt(!0)] = B++
                            }
                            for (; B < D;) X[Y++] = B++;
                            for (d = D - 1; d >= 0; d--) - 1 == U[d] && (U[d] = X[--Y]);
                            y.setFrame(u, M, U)
                        }
                        s.push(y), a = Math.max(a, y.frames[O - 1])
                    }
                    var z = n.readInt(!0);
                    if (z > 0) {
                        for (y = new t.EventTimeline(z), u = 0; u < z; u++) {
                            M = n.readFloat();
                            var W = r.events[n.readInt(!0)],
                                q = new t.Event(M, W);
                            q.intValue = n.readInt(!1), q.floatValue = n.readFloat(), q.stringValue = n.readBoolean() ? n.readString() : W.stringValue, null != q.data.audioPath && (q.volume = n.readFloat(), q.balance = n.readFloat()), y.setFrame(u, q)
                        }
                        s.push(y), a = Math.max(a, y.frames[z - 1])
                    }
                    return new t.Animation(i, s, a)
                }, e.prototype.readCurve = function(t, n, i) {
                    switch (t.readByte()) {
                        case e.CURVE_STEPPED:
                            i.setStepped(n);
                            break;
                        case e.CURVE_BEZIER:
                            this.setCurve(i, n, t.readFloat(), t.readFloat(), t.readFloat(), t.readFloat())
                    }
                }, e.prototype.setCurve = function(t, e, n, i, r, s) {
                    t.setCurve(e, n, i, r, s)
                }, e.AttachmentTypeValues = [0, 1, 2, 3, 4, 5, 6], e.TransformModeValues = [t.TransformMode.Normal, t.TransformMode.OnlyTranslation, t.TransformMode.NoRotationOrReflection, t.TransformMode.NoScale, t.TransformMode.NoScaleOrReflection], e.PositionModeValues = [t.PositionMode.Fixed, t.PositionMode.Percent], e.SpacingModeValues = [t.SpacingMode.Length, t.SpacingMode.Fixed, t.SpacingMode.Percent], e.RotateModeValues = [t.RotateMode.Tangent, t.RotateMode.Chain, t.RotateMode.ChainScale], e.BlendModeValues = [t.BlendMode.Normal, t.BlendMode.Additive, t.BlendMode.Multiply, t.BlendMode.Screen], e.BONE_ROTATE = 0, e.BONE_TRANSLATE = 1, e.BONE_SCALE = 2, e.BONE_SHEAR = 3, e.SLOT_ATTACHMENT = 0, e.SLOT_COLOR = 1, e.SLOT_TWO_COLOR = 2, e.PATH_POSITION = 0, e.PATH_SPACING = 1, e.PATH_MIX = 2, e.CURVE_LINEAR = 0, e.CURVE_STEPPED = 1, e.CURVE_BEZIER = 2, e
            }();
            t.SkeletonBinary = e;
            var n = function() {
                    function t(t, e, n, i) {
                        void 0 === e && (e = new Array), void 0 === n && (n = 0), void 0 === i && (i = new DataView(t.buffer)), this.strings = e, this.index = n, this.buffer = i
                    }
                    return t.prototype.readByte = function() {
                        return this.buffer.getInt8(this.index++)
                    }, t.prototype.readShort = function() {
                        var t = this.buffer.getInt16(this.index);
                        return this.index += 2, t
                    }, t.prototype.readInt32 = function() {
                        var t = this.buffer.getInt32(this.index);
                        return this.index += 4, t
                    }, t.prototype.readInt = function(t) {
                        var e = this.readByte(),
                            n = 127 & e;
                        return 0 != (128 & e) && (n |= (127 & (e = this.readByte())) << 7, 0 != (128 & e) && (n |= (127 & (e = this.readByte())) << 14, 0 != (128 & e) && (n |= (127 & (e = this.readByte())) << 21, 0 != (128 & e) && (n |= (127 & (e = this.readByte())) << 28)))), t ? n : n >>> 1 ^ -(1 & n)
                    }, t.prototype.readStringRef = function() {
                        var t = this.readInt(!0);
                        return 0 == t ? null : this.strings[t - 1]
                    }, t.prototype.readString = function() {
                        var t = this.readInt(!0);
                        switch (t) {
                            case 0:
                                return null;
                            case 1:
                                return ""
                        }
                        t--;
                        for (var e = "", n = 0; n < t;) {
                            var i = this.readByte();
                            switch (i >> 4) {
                                case 12:
                                case 13:
                                    e += String.fromCharCode((31 & i) << 6 | 63 & this.readByte()), n += 2;
                                    break;
                                case 14:
                                    e += String.fromCharCode((15 & i) << 12 | (63 & this.readByte()) << 6 | 63 & this.readByte()), n += 3;
                                    break;
                                default:
                                    e += String.fromCharCode(i), n++
                            }
                        }
                        return e
                    }, t.prototype.readFloat = function() {
                        var t = this.buffer.getFloat32(this.index);
                        return this.index += 4, t
                    }, t.prototype.readBoolean = function() {
                        return 0 != this.readByte()
                    }, t
                }(),
                i = function() {
                    return function(t, e, n, i, r) {
                        this.mesh = t, this.skin = e, this.slotIndex = n, this.parent = i, this.inheritDeform = r
                    }
                }(),
                r = function() {
                    return function(t, e) {
                        void 0 === t && (t = null), void 0 === e && (e = null), this.bones = t, this.vertices = e
                    }
                }()
        }(i || (i = {})),
        function(t) {
            var e = function() {
                function e() {
                    this.minX = 0, this.minY = 0, this.maxX = 0, this.maxY = 0, this.boundingBoxes = new Array, this.polygons = new Array, this.polygonPool = new t.Pool(function() {
                        return t.Utils.newFloatArray(16)
                    })
                }
                return e.prototype.update = function(e, n) {
                    if (null == e) throw new Error("skeleton cannot be null.");
                    var i = this.boundingBoxes,
                        r = this.polygons,
                        s = this.polygonPool,
                        o = e.slots,
                        a = o.length;
                    i.length = 0, s.freeAll(r), r.length = 0;
                    for (var h = 0; h < a; h++) {
                        var l = o[h];
                        if (l.bone.active) {
                            var u = l.getAttachment();
                            if (u instanceof t.BoundingBoxAttachment) {
                                var c = u;
                                i.push(c);
                                var f = s.obtain();
                                f.length != c.worldVerticesLength && (f = t.Utils.newFloatArray(c.worldVerticesLength)), r.push(f), c.computeWorldVertices(l, 0, c.worldVerticesLength, f, 0, 2)
                            }
                        }
                    }
                    n ? this.aabbCompute() : (this.minX = Number.POSITIVE_INFINITY, this.minY = Number.POSITIVE_INFINITY, this.maxX = Number.NEGATIVE_INFINITY, this.maxY = Number.NEGATIVE_INFINITY)
                }, e.prototype.aabbCompute = function() {
                    for (var t = Number.POSITIVE_INFINITY, e = Number.POSITIVE_INFINITY, n = Number.NEGATIVE_INFINITY, i = Number.NEGATIVE_INFINITY, r = this.polygons, s = 0, o = r.length; s < o; s++)
                        for (var a = r[s], h = a, l = 0, u = a.length; l < u; l += 2) {
                            var c = h[l],
                                f = h[l + 1];
                            t = Math.min(t, c), e = Math.min(e, f), n = Math.max(n, c), i = Math.max(i, f)
                        }
                    this.minX = t, this.minY = e, this.maxX = n, this.maxY = i
                }, e.prototype.aabbContainsPoint = function(t, e) {
                    return t >= this.minX && t <= this.maxX && e >= this.minY && e <= this.maxY
                }, e.prototype.aabbIntersectsSegment = function(t, e, n, i) {
                    var r = this.minX,
                        s = this.minY,
                        o = this.maxX,
                        a = this.maxY;
                    if (t <= r && n <= r || e <= s && i <= s || t >= o && n >= o || e >= a && i >= a) return !1;
                    var h = (i - e) / (n - t),
                        l = h * (r - t) + e;
                    if (l > s && l < a) return !0;
                    if ((l = h * (o - t) + e) > s && l < a) return !0;
                    var u = (s - e) / h + t;
                    return u > r && u < o || (u = (a - e) / h + t) > r && u < o
                }, e.prototype.aabbIntersectsSkeleton = function(t) {
                    return this.minX < t.maxX && this.maxX > t.minX && this.minY < t.maxY && this.maxY > t.minY
                }, e.prototype.containsPoint = function(t, e) {
                    for (var n = this.polygons, i = 0, r = n.length; i < r; i++)
                        if (this.containsPointPolygon(n[i], t, e)) return this.boundingBoxes[i];
                    return null
                }, e.prototype.containsPointPolygon = function(t, e, n) {
                    for (var i = t, r = t.length, s = r - 2, o = !1, a = 0; a < r; a += 2) {
                        var h = i[a + 1],
                            l = i[s + 1];
                        if (h < n && l >= n || l < n && h >= n) {
                            var u = i[a];
                            u + (n - h) / (l - h) * (i[s] - u) < e && (o = !o)
                        }
                        s = a
                    }
                    return o
                }, e.prototype.intersectsSegment = function(t, e, n, i) {
                    for (var r = this.polygons, s = 0, o = r.length; s < o; s++)
                        if (this.intersectsSegmentPolygon(r[s], t, e, n, i)) return this.boundingBoxes[s];
                    return null
                }, e.prototype.intersectsSegmentPolygon = function(t, e, n, i, r) {
                    for (var s = t, o = t.length, a = e - i, h = n - r, l = e * r - n * i, u = s[o - 2], c = s[o - 1], f = 0; f < o; f += 2) {
                        var d = s[f],
                            p = s[f + 1],
                            v = u * p - c * d,
                            g = u - d,
                            m = c - p,
                            M = a * m - h * g,
                            x = (l * g - a * v) / M;
                        if ((x >= u && x <= d || x >= d && x <= u) && (x >= e && x <= i || x >= i && x <= e)) {
                            var y = (l * m - h * v) / M;
                            if ((y >= c && y <= p || y >= p && y <= c) && (y >= n && y <= r || y >= r && y <= n)) return !0
                        }
                        u = d, c = p
                    }
                    return !1
                }, e.prototype.getPolygon = function(t) {
                    if (null == t) throw new Error("boundingBox cannot be null.");
                    var e = this.boundingBoxes.indexOf(t);
                    return -1 == e ? null : this.polygons[e]
                }, e.prototype.getWidth = function() {
                    return this.maxX - this.minX
                }, e.prototype.getHeight = function() {
                    return this.maxY - this.minY
                }, e
            }();
            t.SkeletonBounds = e
        }(i || (i = {})),
        function(t) {
            var e = function() {
                function e() {
                    this.triangulator = new t.Triangulator, this.clippingPolygon = new Array, this.clipOutput = new Array, this.clippedVertices = new Array, this.clippedTriangles = new Array, this.scratch = new Array
                }
                return e.prototype.clipStart = function(n, i) {
                    if (null != this.clipAttachment) return 0;
                    this.clipAttachment = i;
                    var r = i.worldVerticesLength,
                        s = t.Utils.setArraySize(this.clippingPolygon, r);
                    i.computeWorldVertices(n, 0, r, s, 0, 2);
                    var o = this.clippingPolygon;
                    e.makeClockwise(o);
                    for (var a = this.clippingPolygons = this.triangulator.decompose(o, this.triangulator.triangulate(o)), h = 0, l = a.length; h < l; h++) {
                        var u = a[h];
                        e.makeClockwise(u), u.push(u[0]), u.push(u[1])
                    }
                    return a.length
                }, e.prototype.clipEndWithSlot = function(t) {
                    null != this.clipAttachment && this.clipAttachment.endSlot == t.data && this.clipEnd()
                }, e.prototype.clipEnd = function() {
                    null != this.clipAttachment && (this.clipAttachment = null, this.clippingPolygons = null, this.clippedVertices.length = 0, this.clippedTriangles.length = 0, this.clippingPolygon.length = 0)
                }, e.prototype.isClipping = function() {
                    return null != this.clipAttachment
                }, e.prototype.clipTriangles = function(e, n, i, r, s, o, a, h) {
                    var l = this.clipOutput,
                        u = this.clippedVertices,
                        c = this.clippedTriangles,
                        f = this.clippingPolygons,
                        d = this.clippingPolygons.length,
                        p = h ? 12 : 8,
                        v = 0;
                    u.length = 0, c.length = 0;
                    t: for (var g = 0; g < r; g += 3)
                        for (var m = i[g] << 1, M = e[m], x = e[m + 1], y = s[m], w = s[m + 1], b = e[m = i[g + 1] << 1], E = e[m + 1], T = s[m], A = s[m + 1], R = e[m = i[g + 2] << 1], S = e[m + 1], I = s[m], C = s[m + 1], P = 0; P < d; P++) {
                            var L = u.length;
                            if (!this.clip(M, x, b, E, R, S, f[P], l)) {
                                (X = t.Utils.setArraySize(u, L + 3 * p))[L] = M, X[L + 1] = x, X[L + 2] = o.r, X[L + 3] = o.g, X[L + 4] = o.b, X[L + 5] = o.a, h ? (X[L + 6] = y, X[L + 7] = w, X[L + 8] = a.r, X[L + 9] = a.g, X[L + 10] = a.b, X[L + 11] = a.a, X[L + 12] = b, X[L + 13] = E, X[L + 14] = o.r, X[L + 15] = o.g, X[L + 16] = o.b, X[L + 17] = o.a, X[L + 18] = T, X[L + 19] = A, X[L + 20] = a.r, X[L + 21] = a.g, X[L + 22] = a.b, X[L + 23] = a.a, X[L + 24] = R, X[L + 25] = S, X[L + 26] = o.r, X[L + 27] = o.g, X[L + 28] = o.b, X[L + 29] = o.a, X[L + 30] = I, X[L + 31] = C, X[L + 32] = a.r, X[L + 33] = a.g, X[L + 34] = a.b, X[L + 35] = a.a) : (X[L + 6] = y, X[L + 7] = w, X[L + 8] = b, X[L + 9] = E, X[L + 10] = o.r, X[L + 11] = o.g, X[L + 12] = o.b, X[L + 13] = o.a, X[L + 14] = T, X[L + 15] = A, X[L + 16] = R, X[L + 17] = S, X[L + 18] = o.r, X[L + 19] = o.g, X[L + 20] = o.b, X[L + 21] = o.a, X[L + 22] = I, X[L + 23] = C), L = c.length, (Z = t.Utils.setArraySize(c, L + 3))[L] = v, Z[L + 1] = v + 1, Z[L + 2] = v + 2, v += 3;
                                continue t
                            }
                            var k = l.length;
                            if (0 != k) {
                                for (var _ = E - S, F = R - b, V = M - R, O = S - x, D = 1 / (_ * V + F * (x - S)), N = k >> 1, U = this.clipOutput, X = t.Utils.setArraySize(u, L + N * p), B = 0; B < k; B += 2) {
                                    var Y = U[B],
                                        z = U[B + 1];
                                    X[L] = Y, X[L + 1] = z, X[L + 2] = o.r, X[L + 3] = o.g, X[L + 4] = o.b, X[L + 5] = o.a;
                                    var W = Y - R,
                                        q = z - S,
                                        G = (_ * W + F * q) * D,
                                        H = (O * W + V * q) * D,
                                        j = 1 - G - H;
                                    X[L + 6] = y * G + T * H + I * j, X[L + 7] = w * G + A * H + C * j, h && (X[L + 8] = a.r, X[L + 9] = a.g, X[L + 10] = a.b, X[L + 11] = a.a), L += p
                                }
                                L = c.length;
                                var Z = t.Utils.setArraySize(c, L + 3 * (N - 2));
                                N--;
                                for (B = 1; B < N; B++) Z[L] = v, Z[L + 1] = v + B, Z[L + 2] = v + B + 1, L += 3;
                                v += N + 1
                            }
                        }
                }, e.prototype.clip = function(t, e, n, i, r, s, o, a) {
                    var h = a,
                        l = !1,
                        u = null;
                    o.length % 4 >= 2 ? (u = a, a = this.scratch) : u = this.scratch, u.length = 0, u.push(t), u.push(e), u.push(n), u.push(i), u.push(r), u.push(s), u.push(t), u.push(e), a.length = 0;
                    for (var c = o, f = o.length - 4, d = 0;; d += 2) {
                        for (var p = c[d], v = c[d + 1], g = c[d + 2], m = c[d + 3], M = p - g, x = v - m, y = u, w = u.length - 2, b = a.length, E = 0; E < w; E += 2) {
                            var T = y[E],
                                A = y[E + 1],
                                R = y[E + 2],
                                S = y[E + 3],
                                I = M * (S - m) - x * (R - g) > 0;
                            if (M * (A - m) - x * (T - g) > 0) {
                                if (I) {
                                    a.push(R), a.push(S);
                                    continue
                                }
                                var C = (L = S - A) * (g - p) - (k = R - T) * (m - v);
                                if (Math.abs(C) > 1e-6) {
                                    var P = (k * (v - A) - L * (p - T)) / C;
                                    a.push(p + (g - p) * P), a.push(v + (m - v) * P)
                                } else a.push(p), a.push(v)
                            } else if (I) {
                                var L, k;
                                C = (L = S - A) * (g - p) - (k = R - T) * (m - v);
                                if (Math.abs(C) > 1e-6) {
                                    P = (k * (v - A) - L * (p - T)) / C;
                                    a.push(p + (g - p) * P), a.push(v + (m - v) * P)
                                } else a.push(p), a.push(v);
                                a.push(R), a.push(S)
                            }
                            l = !0
                        }
                        if (b == a.length) return h.length = 0, !0;
                        if (a.push(a[0]), a.push(a[1]), d == f) break;
                        var _ = a;
                        (a = u).length = 0, u = _
                    }
                    if (h != a) {
                        h.length = 0;
                        d = 0;
                        for (var F = a.length - 2; d < F; d++) h[d] = a[d]
                    } else h.length = h.length - 2;
                    return l
                }, e.makeClockwise = function(t) {
                    for (var e = t, n = t.length, i = e[n - 2] * e[1] - e[0] * e[n - 1], r = 0, s = 0, o = 0, a = 0, h = n - 3; a < h; a += 2) r = e[a], s = e[a + 1], o = e[a + 2], i += r * e[a + 3] - o * s;
                    if (!(i < 0)) {
                        a = 0;
                        var l = n - 2;
                        for (h = n >> 1; a < h; a += 2) {
                            var u = e[a],
                                c = e[a + 1],
                                f = l - a;
                            e[a] = e[f], e[a + 1] = e[f + 1], e[f] = u, e[f + 1] = c
                        }
                    }
                }, e
            }();
            t.SkeletonClipping = e
        }(i || (i = {})),
        function(t) {
            var e = function() {
                function t() {
                    this.bones = new Array, this.slots = new Array, this.skins = new Array, this.events = new Array, this.animations = new Array, this.ikConstraints = new Array, this.transformConstraints = new Array, this.pathConstraints = new Array, this.fps = 0
                }
                return t.prototype.findBone = function(t) {
                    if (null == t) throw new Error("boneName cannot be null.");
                    for (var e = this.bones, n = 0, i = e.length; n < i; n++) {
                        var r = e[n];
                        if (r.name == t) return r
                    }
                    return null
                }, t.prototype.findBoneIndex = function(t) {
                    if (null == t) throw new Error("boneName cannot be null.");
                    for (var e = this.bones, n = 0, i = e.length; n < i; n++)
                        if (e[n].name == t) return n;
                    return -1
                }, t.prototype.findSlot = function(t) {
                    if (null == t) throw new Error("slotName cannot be null.");
                    for (var e = this.slots, n = 0, i = e.length; n < i; n++) {
                        var r = e[n];
                        if (r.name == t) return r
                    }
                    return null
                }, t.prototype.findSlotIndex = function(t) {
                    if (null == t) throw new Error("slotName cannot be null.");
                    for (var e = this.slots, n = 0, i = e.length; n < i; n++)
                        if (e[n].name == t) return n;
                    return -1
                }, t.prototype.findSkin = function(t) {
                    if (null == t) throw new Error("skinName cannot be null.");
                    for (var e = this.skins, n = 0, i = e.length; n < i; n++) {
                        var r = e[n];
                        if (r.name == t) return r
                    }
                    return null
                }, t.prototype.findEvent = function(t) {
                    if (null == t) throw new Error("eventDataName cannot be null.");
                    for (var e = this.events, n = 0, i = e.length; n < i; n++) {
                        var r = e[n];
                        if (r.name == t) return r
                    }
                    return null
                }, t.prototype.findAnimation = function(t) {
                    if (null == t) throw new Error("animationName cannot be null.");
                    for (var e = this.animations, n = 0, i = e.length; n < i; n++) {
                        var r = e[n];
                        if (r.name == t) return r
                    }
                    return null
                }, t.prototype.findIkConstraint = function(t) {
                    if (null == t) throw new Error("constraintName cannot be null.");
                    for (var e = this.ikConstraints, n = 0, i = e.length; n < i; n++) {
                        var r = e[n];
                        if (r.name == t) return r
                    }
                    return null
                }, t.prototype.findTransformConstraint = function(t) {
                    if (null == t) throw new Error("constraintName cannot be null.");
                    for (var e = this.transformConstraints, n = 0, i = e.length; n < i; n++) {
                        var r = e[n];
                        if (r.name == t) return r
                    }
                    return null
                }, t.prototype.findPathConstraint = function(t) {
                    if (null == t) throw new Error("constraintName cannot be null.");
                    for (var e = this.pathConstraints, n = 0, i = e.length; n < i; n++) {
                        var r = e[n];
                        if (r.name == t) return r
                    }
                    return null
                }, t.prototype.findPathConstraintIndex = function(t) {
                    if (null == t) throw new Error("pathConstraintName cannot be null.");
                    for (var e = this.pathConstraints, n = 0, i = e.length; n < i; n++)
                        if (e[n].name == t) return n;
                    return -1
                }, t
            }();
            t.SkeletonData = e
        }(i || (i = {})),
        function(t) {
            var e = function() {
                function e(t) {
                    this.scale = 1, this.linkedMeshes = new Array, this.attachmentLoader = t
                }
                return e.prototype.readSkeletonData = function(n) {
                    var i = this.scale,
                        r = new t.SkeletonData,
                        s = "string" == typeof n ? JSON.parse(n) : n,
                        o = s.skeleton;
                    if (null != o && (r.hash = o.hash, r.version = o.spine, r.x = o.x, r.y = o.y, r.width = o.width, r.height = o.height, r.fps = o.fps, r.imagesPath = o.images), s.bones)
                        for (var a = 0; a < s.bones.length; a++) {
                            var h = s.bones[a],
                                l = null,
                                u = this.getValue(h, "parent", null);
                            if (null != u && null == (l = r.findBone(u))) throw new Error("Parent bone not found: " + u);
                            (p = new t.BoneData(r.bones.length, h.name, l)).length = this.getValue(h, "length", 0) * i, p.x = this.getValue(h, "x", 0) * i, p.y = this.getValue(h, "y", 0) * i, p.rotation = this.getValue(h, "rotation", 0), p.scaleX = this.getValue(h, "scaleX", 1), p.scaleY = this.getValue(h, "scaleY", 1), p.shearX = this.getValue(h, "shearX", 0), p.shearY = this.getValue(h, "shearY", 0), p.transformMode = e.transformModeFromString(this.getValue(h, "transform", "normal")), p.skinRequired = this.getValue(h, "skin", !1), r.bones.push(p)
                        }
                    if (s.slots)
                        for (a = 0; a < s.slots.length; a++) {
                            var c = (R = s.slots[a]).name,
                                f = R.bone,
                                d = r.findBone(f);
                            if (null == d) throw new Error("Slot bone not found: " + f);
                            var p = new t.SlotData(r.slots.length, c, d),
                                v = this.getValue(R, "color", null);
                            null != v && p.color.setFromString(v);
                            var g = this.getValue(R, "dark", null);
                            null != g && (p.darkColor = new t.Color(1, 1, 1, 1), p.darkColor.setFromString(g)), p.attachmentName = this.getValue(R, "attachment", null), p.blendMode = e.blendModeFromString(this.getValue(R, "blend", "normal")), r.slots.push(p)
                        }
                    if (s.ik)
                        for (a = 0; a < s.ik.length; a++) {
                            var m = s.ik[a];
                            (p = new t.IkConstraintData(m.name)).order = this.getValue(m, "order", 0), p.skinRequired = this.getValue(m, "skin", !1);
                            for (var M = 0; M < m.bones.length; M++) {
                                f = m.bones[M];
                                if (null == (E = r.findBone(f))) throw new Error("IK bone not found: " + f);
                                p.bones.push(E)
                            }
                            var x = m.target;
                            if (p.target = r.findBone(x), null == p.target) throw new Error("IK target bone not found: " + x);
                            p.mix = this.getValue(m, "mix", 1), p.softness = this.getValue(m, "softness", 0) * i, p.bendDirection = this.getValue(m, "bendPositive", !0) ? 1 : -1, p.compress = this.getValue(m, "compress", !1), p.stretch = this.getValue(m, "stretch", !1), p.uniform = this.getValue(m, "uniform", !1), r.ikConstraints.push(p)
                        }
                    if (s.transform)
                        for (a = 0; a < s.transform.length; a++) {
                            m = s.transform[a];
                            (p = new t.TransformConstraintData(m.name)).order = this.getValue(m, "order", 0), p.skinRequired = this.getValue(m, "skin", !1);
                            for (M = 0; M < m.bones.length; M++) {
                                f = m.bones[M];
                                if (null == (E = r.findBone(f))) throw new Error("Transform constraint bone not found: " + f);
                                p.bones.push(E)
                            }
                            x = m.target;
                            if (p.target = r.findBone(x), null == p.target) throw new Error("Transform constraint target bone not found: " + x);
                            p.local = this.getValue(m, "local", !1), p.relative = this.getValue(m, "relative", !1), p.offsetRotation = this.getValue(m, "rotation", 0), p.offsetX = this.getValue(m, "x", 0) * i, p.offsetY = this.getValue(m, "y", 0) * i, p.offsetScaleX = this.getValue(m, "scaleX", 0), p.offsetScaleY = this.getValue(m, "scaleY", 0), p.offsetShearY = this.getValue(m, "shearY", 0), p.rotateMix = this.getValue(m, "rotateMix", 1), p.translateMix = this.getValue(m, "translateMix", 1), p.scaleMix = this.getValue(m, "scaleMix", 1), p.shearMix = this.getValue(m, "shearMix", 1), r.transformConstraints.push(p)
                        }
                    if (s.path)
                        for (a = 0; a < s.path.length; a++) {
                            m = s.path[a];
                            (p = new t.PathConstraintData(m.name)).order = this.getValue(m, "order", 0), p.skinRequired = this.getValue(m, "skin", !1);
                            for (M = 0; M < m.bones.length; M++) {
                                f = m.bones[M];
                                if (null == (E = r.findBone(f))) throw new Error("Transform constraint bone not found: " + f);
                                p.bones.push(E)
                            }
                            x = m.target;
                            if (p.target = r.findSlot(x), null == p.target) throw new Error("Path target slot not found: " + x);
                            p.positionMode = e.positionModeFromString(this.getValue(m, "positionMode", "percent")), p.spacingMode = e.spacingModeFromString(this.getValue(m, "spacingMode", "length")), p.rotateMode = e.rotateModeFromString(this.getValue(m, "rotateMode", "tangent")), p.offsetRotation = this.getValue(m, "rotation", 0), p.position = this.getValue(m, "position", 0), p.positionMode == t.PositionMode.Fixed && (p.position *= i), p.spacing = this.getValue(m, "spacing", 0), p.spacingMode != t.SpacingMode.Length && p.spacingMode != t.SpacingMode.Fixed || (p.spacing *= i), p.rotateMix = this.getValue(m, "rotateMix", 1), p.translateMix = this.getValue(m, "translateMix", 1), r.pathConstraints.push(p)
                        }
                    if (s.skins)
                        for (a = 0; a < s.skins.length; a++) {
                            var y = s.skins[a],
                                w = new t.Skin(y.name);
                            if (y.bones)
                                for (var b = 0; b < y.bones.length; b++) {
                                    var E;
                                    if (null == (E = r.findBone(y.bones[b]))) throw new Error("Skin bone not found: " + y.bones[a]);
                                    w.bones.push(E)
                                }
                            if (y.ik)
                                for (b = 0; b < y.ik.length; b++) {
                                    if (null == (T = r.findIkConstraint(y.ik[b]))) throw new Error("Skin IK constraint not found: " + y.ik[a]);
                                    w.constraints.push(T)
                                }
                            if (y.transform)
                                for (b = 0; b < y.transform.length; b++) {
                                    if (null == (T = r.findTransformConstraint(y.transform[b]))) throw new Error("Skin transform constraint not found: " + y.transform[a]);
                                    w.constraints.push(T)
                                }
                            if (y.path)
                                for (b = 0; b < y.path.length; b++) {
                                    var T;
                                    if (null == (T = r.findPathConstraint(y.path[b]))) throw new Error("Skin path constraint not found: " + y.path[a]);
                                    w.constraints.push(T)
                                }
                            for (var c in y.attachments) {
                                var A = r.findSlot(c);
                                if (null == A) throw new Error("Slot not found: " + c);
                                var R = y.attachments[c];
                                for (var S in R) {
                                    var I = this.readAttachment(R[S], w, A.index, S, r);
                                    null != I && w.setAttachment(A.index, S, I)
                                }
                            }
                            r.skins.push(w), "default" == w.name && (r.defaultSkin = w)
                        }
                    a = 0;
                    for (var C = this.linkedMeshes.length; a < C; a++) {
                        var P = this.linkedMeshes[a];
                        if (null == (w = null == P.skin ? r.defaultSkin : r.findSkin(P.skin))) throw new Error("Skin not found: " + P.skin);
                        var L = w.getAttachment(P.slotIndex, P.parent);
                        if (null == L) throw new Error("Parent mesh not found: " + P.parent);
                        P.mesh.deformAttachment = P.inheritDeform ? L : P.mesh, P.mesh.setParentMesh(L), P.mesh.updateUVs()
                    }
                    if (this.linkedMeshes.length = 0, s.events)
                        for (var k in s.events) {
                            var _ = s.events[k];
                            (p = new t.EventData(k)).intValue = this.getValue(_, "int", 0), p.floatValue = this.getValue(_, "float", 0), p.stringValue = this.getValue(_, "string", ""), p.audioPath = this.getValue(_, "audio", null), null != p.audioPath && (p.volume = this.getValue(_, "volume", 1), p.balance = this.getValue(_, "balance", 0)), r.events.push(p)
                        }
                    if (s.animations)
                        for (var F in s.animations) {
                            var V = s.animations[F];
                            this.readAnimation(V, F, r)
                        }
                    return r
                }, e.prototype.readAttachment = function(e, i, r, s, o) {
                    var a = this.scale;
                    switch (s = this.getValue(e, "name", s), this.getValue(e, "type", "region")) {
                        case "region":
                            var h = this.getValue(e, "path", s),
                                l = this.attachmentLoader.newRegionAttachment(i, s, h);
                            return null == l ? null : (l.path = h, l.x = this.getValue(e, "x", 0) * a, l.y = this.getValue(e, "y", 0) * a, l.scaleX = this.getValue(e, "scaleX", 1), l.scaleY = this.getValue(e, "scaleY", 1), l.rotation = this.getValue(e, "rotation", 0), l.width = e.width * a, l.height = e.height * a, null != (w = this.getValue(e, "color", null)) && l.color.setFromString(w), l.updateOffset(), l);
                        case "boundingbox":
                            var u = this.attachmentLoader.newBoundingBoxAttachment(i, s);
                            return null == u ? null : (this.readVertices(e, u, e.vertexCount << 1), null != (w = this.getValue(e, "color", null)) && u.color.setFromString(w), u);
                        case "mesh":
                        case "linkedmesh":
                            h = this.getValue(e, "path", s);
                            var c = this.attachmentLoader.newMeshAttachment(i, s, h);
                            if (null == c) return null;
                            c.path = h, null != (w = this.getValue(e, "color", null)) && c.color.setFromString(w), c.width = this.getValue(e, "width", 0) * a, c.height = this.getValue(e, "height", 0) * a;
                            var f = this.getValue(e, "parent", null);
                            if (null != f) return this.linkedMeshes.push(new n(c, this.getValue(e, "skin", null), r, f, this.getValue(e, "deform", !0))), c;
                            var d = e.uvs;
                            return this.readVertices(e, c, d.length), c.triangles = e.triangles, c.regionUVs = d, c.updateUVs(), c.edges = this.getValue(e, "edges", null), c.hullLength = 2 * this.getValue(e, "hull", 0), c;
                        case "path":
                            if (null == (h = this.attachmentLoader.newPathAttachment(i, s))) return null;
                            h.closed = this.getValue(e, "closed", !1), h.constantSpeed = this.getValue(e, "constantSpeed", !0);
                            var p = e.vertexCount;
                            this.readVertices(e, h, p << 1);
                            for (var v = t.Utils.newArray(p / 3, 0), g = 0; g < e.lengths.length; g++) v[g] = e.lengths[g] * a;
                            return h.lengths = v, null != (w = this.getValue(e, "color", null)) && h.color.setFromString(w), h;
                        case "point":
                            var m = this.attachmentLoader.newPointAttachment(i, s);
                            return null == m ? null : (m.x = this.getValue(e, "x", 0) * a, m.y = this.getValue(e, "y", 0) * a, m.rotation = this.getValue(e, "rotation", 0), null != (w = this.getValue(e, "color", null)) && m.color.setFromString(w), m);
                        case "clipping":
                            var M = this.attachmentLoader.newClippingAttachment(i, s);
                            if (null == M) return null;
                            var x = this.getValue(e, "end", null);
                            if (null != x) {
                                var y = o.findSlot(x);
                                if (null == y) throw new Error("Clipping end slot not found: " + x);
                                M.endSlot = y
                            }
                            var w;
                            p = e.vertexCount;
                            return this.readVertices(e, M, p << 1), null != (w = this.getValue(e, "color", null)) && M.color.setFromString(w), M
                    }
                    return null
                }, e.prototype.readVertices = function(e, n, i) {
                    var r = this.scale;
                    n.worldVerticesLength = i;
                    var s = e.vertices;
                    if (i != s.length) {
                        var o = new Array,
                            a = new Array;
                        for (c = 0, f = s.length; c < f;) {
                            var h = s[c++];
                            a.push(h);
                            for (var l = c + 4 * h; c < l; c += 4) a.push(s[c]), o.push(s[c + 1] * r), o.push(s[c + 2] * r), o.push(s[c + 3])
                        }
                        n.bones = a, n.vertices = t.Utils.toFloatArray(o)
                    } else {
                        var u = t.Utils.toFloatArray(s);
                        if (1 != r)
                            for (var c = 0, f = s.length; c < f; c++) u[c] *= r;
                        n.vertices = u
                    }
                }, e.prototype.readAnimation = function(e, n, i) {
                    var r = this.scale,
                        s = new Array,
                        o = 0;
                    if (e.slots)
                        for (var a in e.slots) {
                            var h = e.slots[a];
                            if (-1 == (K = i.findSlotIndex(a))) throw new Error("Slot not found: " + a);
                            for (var l in h) {
                                var u = h[l];
                                if ("attachment" == l) {
                                    (y = new t.AttachmentTimeline(u.length)).slotIndex = K;
                                    for (var c = 0, f = 0; f < u.length; f++) {
                                        var d = u[f];
                                        y.setFrame(c++, this.getValue(d, "time", 0), d.name)
                                    }
                                    s.push(y), o = Math.max(o, y.frames[y.getFrameCount() - 1])
                                } else if ("color" == l) {
                                    (y = new t.ColorTimeline(u.length)).slotIndex = K;
                                    for (c = 0, f = 0; f < u.length; f++) {
                                        d = u[f];
                                        var p = new t.Color;
                                        p.setFromString(d.color), y.setFrame(c, this.getValue(d, "time", 0), p.r, p.g, p.b, p.a), this.readCurve(d, y, c), c++
                                    }
                                    s.push(y), o = Math.max(o, y.frames[(y.getFrameCount() - 1) * t.ColorTimeline.ENTRIES])
                                } else {
                                    if ("twoColor" != l) throw new Error("Invalid timeline type for a slot: " + l + " (" + a + ")");
                                    (y = new t.TwoColorTimeline(u.length)).slotIndex = K;
                                    for (c = 0, f = 0; f < u.length; f++) {
                                        d = u[f];
                                        var v = new t.Color,
                                            g = new t.Color;
                                        v.setFromString(d.light), g.setFromString(d.dark), y.setFrame(c, this.getValue(d, "time", 0), v.r, v.g, v.b, v.a, g.r, g.g, g.b), this.readCurve(d, y, c), c++
                                    }
                                    s.push(y), o = Math.max(o, y.frames[(y.getFrameCount() - 1) * t.TwoColorTimeline.ENTRIES])
                                }
                            }
                        }
                    if (e.bones)
                        for (var m in e.bones) {
                            var M = e.bones[m],
                                x = i.findBoneIndex(m);
                            if (-1 == x) throw new Error("Bone not found: " + m);
                            for (var l in M) {
                                u = M[l];
                                if ("rotate" === l) {
                                    (y = new t.RotateTimeline(u.length)).boneIndex = x;
                                    for (c = 0, f = 0; f < u.length; f++) {
                                        d = u[f];
                                        y.setFrame(c, this.getValue(d, "time", 0), this.getValue(d, "angle", 0)), this.readCurve(d, y, c), c++
                                    }
                                    s.push(y), o = Math.max(o, y.frames[(y.getFrameCount() - 1) * t.RotateTimeline.ENTRIES])
                                } else {
                                    if ("translate" !== l && "scale" !== l && "shear" !== l) throw new Error("Invalid timeline type for a bone: " + l + " (" + m + ")");
                                    var y = null,
                                        w = 1,
                                        b = 0;
                                    "scale" === l ? (y = new t.ScaleTimeline(u.length), b = 1) : "shear" === l ? y = new t.ShearTimeline(u.length) : (y = new t.TranslateTimeline(u.length), w = r), y.boneIndex = x;
                                    for (c = 0, f = 0; f < u.length; f++) {
                                        d = u[f];
                                        var E = this.getValue(d, "x", b),
                                            T = this.getValue(d, "y", b);
                                        y.setFrame(c, this.getValue(d, "time", 0), E * w, T * w), this.readCurve(d, y, c), c++
                                    }
                                    s.push(y), o = Math.max(o, y.frames[(y.getFrameCount() - 1) * t.TranslateTimeline.ENTRIES])
                                }
                            }
                        }
                    if (e.ik)
                        for (var A in e.ik) {
                            var R = e.ik[A],
                                S = i.findIkConstraint(A);
                            (y = new t.IkConstraintTimeline(R.length)).ikConstraintIndex = i.ikConstraints.indexOf(S);
                            for (c = 0, f = 0; f < R.length; f++) {
                                d = R[f];
                                y.setFrame(c, this.getValue(d, "time", 0), this.getValue(d, "mix", 1), this.getValue(d, "softness", 0) * r, this.getValue(d, "bendPositive", !0) ? 1 : -1, this.getValue(d, "compress", !1), this.getValue(d, "stretch", !1)), this.readCurve(d, y, c), c++
                            }
                            s.push(y), o = Math.max(o, y.frames[(y.getFrameCount() - 1) * t.IkConstraintTimeline.ENTRIES])
                        }
                    if (e.transform)
                        for (var A in e.transform) {
                            R = e.transform[A], S = i.findTransformConstraint(A);
                            (y = new t.TransformConstraintTimeline(R.length)).transformConstraintIndex = i.transformConstraints.indexOf(S);
                            for (c = 0, f = 0; f < R.length; f++) {
                                d = R[f];
                                y.setFrame(c, this.getValue(d, "time", 0), this.getValue(d, "rotateMix", 1), this.getValue(d, "translateMix", 1), this.getValue(d, "scaleMix", 1), this.getValue(d, "shearMix", 1)), this.readCurve(d, y, c), c++
                            }
                            s.push(y), o = Math.max(o, y.frames[(y.getFrameCount() - 1) * t.TransformConstraintTimeline.ENTRIES])
                        }
                    if (e.path)
                        for (var A in e.path) {
                            R = e.path[A];
                            var I = i.findPathConstraintIndex(A);
                            if (-1 == I) throw new Error("Path constraint not found: " + A);
                            var C = i.pathConstraints[I];
                            for (var l in R) {
                                u = R[l];
                                if ("position" === l || "spacing" === l) {
                                    y = null, w = 1;
                                    "spacing" === l ? (y = new t.PathConstraintSpacingTimeline(u.length), C.spacingMode != t.SpacingMode.Length && C.spacingMode != t.SpacingMode.Fixed || (w = r)) : (y = new t.PathConstraintPositionTimeline(u.length), C.positionMode == t.PositionMode.Fixed && (w = r)), y.pathConstraintIndex = I;
                                    for (c = 0, f = 0; f < u.length; f++) {
                                        d = u[f];
                                        y.setFrame(c, this.getValue(d, "time", 0), this.getValue(d, l, 0) * w), this.readCurve(d, y, c), c++
                                    }
                                    s.push(y), o = Math.max(o, y.frames[(y.getFrameCount() - 1) * t.PathConstraintPositionTimeline.ENTRIES])
                                } else if ("mix" === l) {
                                    (y = new t.PathConstraintMixTimeline(u.length)).pathConstraintIndex = I;
                                    for (c = 0, f = 0; f < u.length; f++) {
                                        d = u[f];
                                        y.setFrame(c, this.getValue(d, "time", 0), this.getValue(d, "rotateMix", 1), this.getValue(d, "translateMix", 1)), this.readCurve(d, y, c), c++
                                    }
                                    s.push(y), o = Math.max(o, y.frames[(y.getFrameCount() - 1) * t.PathConstraintMixTimeline.ENTRIES])
                                }
                            }
                        }
                    if (e.deform)
                        for (var P in e.deform) {
                            var L = e.deform[P],
                                k = i.findSkin(P);
                            if (null == k) throw new Error("Skin not found: " + P);
                            for (var a in L) {
                                h = L[a];
                                if (-1 == (K = i.findSlotIndex(a))) throw new Error("Slot not found: " + h.name);
                                for (var l in h) {
                                    u = h[l];
                                    var _ = k.getAttachment(K, l);
                                    if (null == _) throw new Error("Deform attachment not found: " + u.name);
                                    var F = null != _.bones,
                                        V = _.vertices,
                                        O = F ? V.length / 3 * 2 : V.length;
                                    (y = new t.DeformTimeline(u.length)).slotIndex = K, y.attachment = _;
                                    c = 0;
                                    for (var D = 0; D < u.length; D++) {
                                        d = u[D];
                                        var N = void 0,
                                            U = this.getValue(d, "vertices", null);
                                        if (null == U) N = F ? t.Utils.newFloatArray(O) : V;
                                        else {
                                            N = t.Utils.newFloatArray(O);
                                            var X = this.getValue(d, "offset", 0);
                                            if (t.Utils.arrayCopy(U, 0, N, X, U.length), 1 != r)
                                                for (var B = (f = X) + U.length; f < B; f++) N[f] *= r;
                                            if (!F)
                                                for (f = 0; f < O; f++) N[f] += V[f]
                                        }
                                        y.setFrame(c, this.getValue(d, "time", 0), N), this.readCurve(d, y, c), c++
                                    }
                                    s.push(y), o = Math.max(o, y.frames[y.getFrameCount() - 1])
                                }
                            }
                        }
                    var Y = e.drawOrder;
                    if (null == Y && (Y = e.draworder), null != Y) {
                        y = new t.DrawOrderTimeline(Y.length);
                        var z = i.slots.length;
                        for (c = 0, D = 0; D < Y.length; D++) {
                            var W = Y[D],
                                q = null,
                                G = this.getValue(W, "offsets", null);
                            if (null != G) {
                                q = t.Utils.newArray(z, -1);
                                var H = t.Utils.newArray(z - G.length, 0),
                                    j = 0,
                                    Z = 0;
                                for (f = 0; f < G.length; f++) {
                                    var K, Q = G[f];
                                    if (-1 == (K = i.findSlotIndex(Q.slot))) throw new Error("Slot not found: " + Q.slot);
                                    for (; j != K;) H[Z++] = j++;
                                    q[j + Q.offset] = j++
                                }
                                for (; j < z;) H[Z++] = j++;
                                for (f = z - 1; f >= 0; f--) - 1 == q[f] && (q[f] = H[--Z])
                            }
                            y.setFrame(c++, this.getValue(W, "time", 0), q)
                        }
                        s.push(y), o = Math.max(o, y.frames[y.getFrameCount() - 1])
                    }
                    if (e.events) {
                        for (y = new t.EventTimeline(e.events.length), c = 0, f = 0; f < e.events.length; f++) {
                            var J = e.events[f],
                                $ = i.findEvent(J.name);
                            if (null == $) throw new Error("Event not found: " + J.name);
                            var tt = new t.Event(t.Utils.toSinglePrecision(this.getValue(J, "time", 0)), $);
                            tt.intValue = this.getValue(J, "int", $.intValue), tt.floatValue = this.getValue(J, "float", $.floatValue), tt.stringValue = this.getValue(J, "string", $.stringValue), null != tt.data.audioPath && (tt.volume = this.getValue(J, "volume", 1), tt.balance = this.getValue(J, "balance", 0)), y.setFrame(c++, tt)
                        }
                        s.push(y), o = Math.max(o, y.frames[y.getFrameCount() - 1])
                    }
                    if (isNaN(o)) throw new Error("Error while parsing animation, duration is NaN");
                    i.animations.push(new t.Animation(n, s, o))
                }, e.prototype.readCurve = function(t, e, n) {
                    if (t.curve)
                        if ("stepped" == t.curve) e.setStepped(n);
                        else {
                            var i = t.curve;
                            e.setCurve(n, i, this.getValue(t, "c2", 0), this.getValue(t, "c3", 1), this.getValue(t, "c4", 1))
                        }
                }, e.prototype.getValue = function(t, e, n) {
                    return void 0 !== t[e] ? t[e] : n
                }, e.blendModeFromString = function(e) {
                    if ("normal" == (e = e.toLowerCase())) return t.BlendMode.Normal;
                    if ("additive" == e) return t.BlendMode.Additive;
                    if ("multiply" == e) return t.BlendMode.Multiply;
                    if ("screen" == e) return t.BlendMode.Screen;
                    throw new Error("Unknown blend mode: " + e)
                }, e.positionModeFromString = function(e) {
                    if ("fixed" == (e = e.toLowerCase())) return t.PositionMode.Fixed;
                    if ("percent" == e) return t.PositionMode.Percent;
                    throw new Error("Unknown position mode: " + e)
                }, e.spacingModeFromString = function(e) {
                    if ("length" == (e = e.toLowerCase())) return t.SpacingMode.Length;
                    if ("fixed" == e) return t.SpacingMode.Fixed;
                    if ("percent" == e) return t.SpacingMode.Percent;
                    throw new Error("Unknown position mode: " + e)
                }, e.rotateModeFromString = function(e) {
                    if ("tangent" == (e = e.toLowerCase())) return t.RotateMode.Tangent;
                    if ("chain" == e) return t.RotateMode.Chain;
                    if ("chainscale" == e) return t.RotateMode.ChainScale;
                    throw new Error("Unknown rotate mode: " + e)
                }, e.transformModeFromString = function(e) {
                    if ("normal" == (e = e.toLowerCase())) return t.TransformMode.Normal;
                    if ("onlytranslation" == e) return t.TransformMode.OnlyTranslation;
                    if ("norotationorreflection" == e) return t.TransformMode.NoRotationOrReflection;
                    if ("noscale" == e) return t.TransformMode.NoScale;
                    if ("noscaleorreflection" == e) return t.TransformMode.NoScaleOrReflection;
                    throw new Error("Unknown transform mode: " + e)
                }, e
            }();
            t.SkeletonJson = e;
            var n = function() {
                return function(t, e, n, i, r) {
                    this.mesh = t, this.skin = e, this.slotIndex = n, this.parent = i, this.inheritDeform = r
                }
            }()
        }(i || (i = {})),
        function(t) {
            var e = function() {
                return function(t, e, n) {
                    this.slotIndex = t, this.name = e, this.attachment = n
                }
            }();
            t.SkinEntry = e;
            var n = function() {
                function n(t) {
                    if (this.attachments = new Array, this.bones = Array(), this.constraints = new Array, null == t) throw new Error("name cannot be null.");
                    this.name = t
                }
                return n.prototype.setAttachment = function(t, e, n) {
                    if (null == n) throw new Error("attachment cannot be null.");
                    var i = this.attachments;
                    t >= i.length && (i.length = t + 1), i[t] || (i[t] = {}), i[t][e] = n
                }, n.prototype.addSkin = function(t) {
                    for (var e = 0; e < t.bones.length; e++) {
                        for (var n = t.bones[e], i = !1, r = 0; r < this.bones.length; r++)
                            if (this.bones[r] == n) {
                                i = !0;
                                break
                            }
                        i || this.bones.push(n)
                    }
                    for (e = 0; e < t.constraints.length; e++) {
                        var s = t.constraints[e];
                        for (i = !1, r = 0; r < this.constraints.length; r++)
                            if (this.constraints[r] == s) {
                                i = !0;
                                break
                            }
                        i || this.constraints.push(s)
                    }
                    var o = t.getAttachments();
                    for (e = 0; e < o.length; e++) {
                        var a = o[e];
                        this.setAttachment(a.slotIndex, a.name, a.attachment)
                    }
                }, n.prototype.copySkin = function(e) {
                    for (var n = 0; n < e.bones.length; n++) {
                        for (var i = e.bones[n], r = !1, s = 0; s < this.bones.length; s++)
                            if (this.bones[s] == i) {
                                r = !0;
                                break
                            }
                        r || this.bones.push(i)
                    }
                    for (n = 0; n < e.constraints.length; n++) {
                        var o = e.constraints[n];
                        for (r = !1, s = 0; s < this.constraints.length; s++)
                            if (this.constraints[s] == o) {
                                r = !0;
                                break
                            }
                        r || this.constraints.push(o)
                    }
                    var a = e.getAttachments();
                    for (n = 0; n < a.length; n++) {
                        var h = a[n];
                        null != h.attachment && (h.attachment instanceof t.MeshAttachment ? (h.attachment = h.attachment.newLinkedMesh(), this.setAttachment(h.slotIndex, h.name, h.attachment)) : (h.attachment = h.attachment.copy(), this.setAttachment(h.slotIndex, h.name, h.attachment)))
                    }
                }, n.prototype.getAttachment = function(t, e) {
                    var n = this.attachments[t];
                    return n ? n[e] : null
                }, n.prototype.removeAttachment = function(t, e) {
                    var n = this.attachments[t];
                    n && (n[e] = null)
                }, n.prototype.getAttachments = function() {
                    for (var t = new Array, n = 0; n < this.attachments.length; n++) {
                        var i = this.attachments[n];
                        if (i)
                            for (var r in i) {
                                var s = i[r];
                                s && t.push(new e(n, r, s))
                            }
                    }
                    return t
                }, n.prototype.getAttachmentsForSlot = function(t, n) {
                    var i = this.attachments[t];
                    if (i)
                        for (var r in i) {
                            var s = i[r];
                            s && n.push(new e(t, r, s))
                        }
                }, n.prototype.clear = function() {
                    this.attachments.length = 0, this.bones.length = 0, this.constraints.length = 0
                }, n.prototype.attachAll = function(t, e) {
                    for (var n = 0, i = 0; i < t.slots.length; i++) {
                        var r = t.slots[i],
                            s = r.getAttachment();
                        if (s && n < e.attachments.length) {
                            var o = e.attachments[n];
                            for (var a in o) {
                                if (s == o[a]) {
                                    var h = this.getAttachment(n, a);
                                    null != h && r.setAttachment(h);
                                    break
                                }
                            }
                        }
                        n++
                    }
                }, n
            }();
            t.Skin = n
        }(i || (i = {})),
        function(t) {
            var e = function() {
                function e(e, n) {
                    if (this.deform = new Array, null == e) throw new Error("data cannot be null.");
                    if (null == n) throw new Error("bone cannot be null.");
                    this.data = e, this.bone = n, this.color = new t.Color, this.darkColor = null == e.darkColor ? null : new t.Color, this.setToSetupPose()
                }
                return e.prototype.getSkeleton = function() {
                    return this.bone.skeleton
                }, e.prototype.getAttachment = function() {
                    return this.attachment
                }, e.prototype.setAttachment = function(t) {
                    this.attachment != t && (this.attachment = t, this.attachmentTime = this.bone.skeleton.time, this.deform.length = 0)
                }, e.prototype.setAttachmentTime = function(t) {
                    this.attachmentTime = this.bone.skeleton.time - t
                }, e.prototype.getAttachmentTime = function() {
                    return this.bone.skeleton.time - this.attachmentTime
                }, e.prototype.setToSetupPose = function() {
                    this.color.setFromColor(this.data.color), null != this.darkColor && this.darkColor.setFromColor(this.data.darkColor), null == this.data.attachmentName ? this.attachment = null : (this.attachment = null, this.setAttachment(this.bone.skeleton.getAttachment(this.data.index, this.data.attachmentName)))
                }, e
            }();
            t.Slot = e
        }(i || (i = {})),
        function(t) {
            var e = function() {
                return function(e, n, i) {
                    if (this.color = new t.Color(1, 1, 1, 1), e < 0) throw new Error("index must be >= 0.");
                    if (null == n) throw new Error("name cannot be null.");
                    if (null == i) throw new Error("boneData cannot be null.");
                    this.index = e, this.name = n, this.boneData = i
                }
            }();
            t.SlotData = e
        }(i || (i = {})),
        function(t) {
            var e, n, i = function() {
                function t(t) {
                    this._image = t
                }
                return t.prototype.getImage = function() {
                    return this._image
                }, t.filterFromString = function(t) {
                    switch (t.toLowerCase()) {
                        case "nearest":
                            return e.Nearest;
                        case "linear":
                            return e.Linear;
                        case "mipmap":
                            return e.MipMap;
                        case "mipmapnearestnearest":
                            return e.MipMapNearestNearest;
                        case "mipmaplinearnearest":
                            return e.MipMapLinearNearest;
                        case "mipmapnearestlinear":
                            return e.MipMapNearestLinear;
                        case "mipmaplinearlinear":
                            return e.MipMapLinearLinear;
                        default:
                            throw new Error("Unknown texture filter " + t)
                    }
                }, t.wrapFromString = function(t) {
                    switch (t.toLowerCase()) {
                        case "mirroredtepeat":
                            return n.MirroredRepeat;
                        case "clamptoedge":
                            return n.ClampToEdge;
                        case "repeat":
                            return n.Repeat;
                        default:
                            throw new Error("Unknown texture wrap " + t)
                    }
                }, t
            }();
            t.Texture = i,
                function(t) {
                    t[t.Nearest = 9728] = "Nearest", t[t.Linear = 9729] = "Linear", t[t.MipMap = 9987] = "MipMap", t[t.MipMapNearestNearest = 9984] = "MipMapNearestNearest", t[t.MipMapLinearNearest = 9985] = "MipMapLinearNearest", t[t.MipMapNearestLinear = 9986] = "MipMapNearestLinear", t[t.MipMapLinearLinear = 9987] = "MipMapLinearLinear"
                }(e = t.TextureFilter || (t.TextureFilter = {})),
                function(t) {
                    t[t.MirroredRepeat = 33648] = "MirroredRepeat", t[t.ClampToEdge = 33071] = "ClampToEdge", t[t.Repeat = 10497] = "Repeat"
                }(n = t.TextureWrap || (t.TextureWrap = {}));
            var s = function() {
                return function() {
                    this.u = 0, this.v = 0, this.u2 = 0, this.v2 = 0, this.width = 0, this.height = 0, this.rotate = !1, this.offsetX = 0, this.offsetY = 0, this.originalWidth = 0, this.originalHeight = 0
                }
            }();
            t.TextureRegion = s;
            var o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return r(e, t), e.prototype.setFilters = function(t, e) {}, e.prototype.setWraps = function(t, e) {}, e.prototype.dispose = function() {}, e
            }(i);
            t.FakeTexture = o
        }(i || (i = {})),
        function(t) {
            var e = function() {
                function e(t, e) {
                    this.pages = new Array, this.regions = new Array, this.load(t, e)
                }
                return e.prototype.load = function(e, r) {
                    if (null == r) throw new Error("textureLoader cannot be null.");
                    for (var o = new n(e), a = new Array(4), h = null;;) {
                        var l = o.readLine();
                        if (null == l) break;
                        if (0 == (l = l.trim()).length) h = null;
                        else if (h) {
                            var u = new s;
                            u.name = l, u.page = h;
                            var c = o.readValue();
                            "true" == c.toLocaleLowerCase() ? u.degrees = 90 : "false" == c.toLocaleLowerCase() ? u.degrees = 0 : u.degrees = parseFloat(c), u.rotate = 90 == u.degrees, o.readTuple(a);
                            var f = parseInt(a[0]),
                                d = parseInt(a[1]);
                            o.readTuple(a);
                            var p = parseInt(a[0]),
                                v = parseInt(a[1]);
                            u.u = f / h.width, u.v = d / h.height, u.rotate ? (u.u2 = (f + v) / h.width, u.v2 = (d + p) / h.height) : (u.u2 = (f + p) / h.width, u.v2 = (d + v) / h.height), u.x = f, u.y = d, u.width = Math.abs(p), u.height = Math.abs(v), 4 == o.readTuple(a) && 4 == o.readTuple(a) && o.readTuple(a), u.originalWidth = parseInt(a[0]), u.originalHeight = parseInt(a[1]), o.readTuple(a), u.offsetX = parseInt(a[0]), u.offsetY = parseInt(a[1]), u.index = parseInt(o.readValue()), u.texture = h.texture, this.regions.push(u)
                        } else {
                            (h = new i).name = l, 2 == o.readTuple(a) && (h.width = parseInt(a[0]), h.height = parseInt(a[1]), o.readTuple(a)), o.readTuple(a), h.minFilter = t.Texture.filterFromString(a[0]), h.magFilter = t.Texture.filterFromString(a[1]);
                            var g = o.readValue();
                            h.uWrap = t.TextureWrap.ClampToEdge, h.vWrap = t.TextureWrap.ClampToEdge, "x" == g ? h.uWrap = t.TextureWrap.Repeat : "y" == g ? h.vWrap = t.TextureWrap.Repeat : "xy" == g && (h.uWrap = h.vWrap = t.TextureWrap.Repeat), h.texture = r(l), h.texture.setFilters(h.minFilter, h.magFilter), h.texture.setWraps(h.uWrap, h.vWrap), h.width = h.texture.getImage().width, h.height = h.texture.getImage().height, this.pages.push(h)
                        }
                    }
                }, e.prototype.findRegion = function(t) {
                    for (var e = 0; e < this.regions.length; e++)
                        if (this.regions[e].name == t) return this.regions[e];
                    return null
                }, e.prototype.dispose = function() {
                    for (var t = 0; t < this.pages.length; t++) this.pages[t].texture.dispose()
                }, e
            }();
            t.TextureAtlas = e;
            var n = function() {
                    function t(t) {
                        this.index = 0, this.lines = t.split(/\r\n|\r|\n/)
                    }
                    return t.prototype.readLine = function() {
                        return this.index >= this.lines.length ? null : this.lines[this.index++]
                    }, t.prototype.readValue = function() {
                        var t = this.readLine(),
                            e = t.indexOf(":");
                        if (-1 == e) throw new Error("Invalid line: " + t);
                        return t.substring(e + 1).trim()
                    }, t.prototype.readTuple = function(t) {
                        var e = this.readLine(),
                            n = e.indexOf(":");
                        if (-1 == n) throw new Error("Invalid line: " + e);
                        for (var i = 0, r = n + 1; i < 3; i++) {
                            var s = e.indexOf(",", r);
                            if (-1 == s) break;
                            t[i] = e.substr(r, s - r).trim(), r = s + 1
                        }
                        return t[i] = e.substring(r).trim(), i + 1
                    }, t
                }(),
                i = function() {
                    return function() {}
                }();
            t.TextureAtlasPage = i;
            var s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return r(e, t), e
            }(t.TextureRegion);
            t.TextureAtlasRegion = s
        }(i || (i = {})),
        function(t) {
            var e = function() {
                function e(e, n) {
                    if (this.rotateMix = 0, this.translateMix = 0, this.scaleMix = 0, this.shearMix = 0, this.temp = new t.Vector2, this.active = !1, null == e) throw new Error("data cannot be null.");
                    if (null == n) throw new Error("skeleton cannot be null.");
                    this.data = e, this.rotateMix = e.rotateMix, this.translateMix = e.translateMix, this.scaleMix = e.scaleMix, this.shearMix = e.shearMix, this.bones = new Array;
                    for (var i = 0; i < e.bones.length; i++) this.bones.push(n.findBone(e.bones[i].name));
                    this.target = n.findBone(e.target.name)
                }
                return e.prototype.isActive = function() {
                    return this.active
                }, e.prototype.apply = function() {
                    this.update()
                }, e.prototype.update = function() {
                    this.data.local ? this.data.relative ? this.applyRelativeLocal() : this.applyAbsoluteLocal() : this.data.relative ? this.applyRelativeWorld() : this.applyAbsoluteWorld()
                }, e.prototype.applyAbsoluteWorld = function() {
                    for (var e = this.rotateMix, n = this.translateMix, i = this.scaleMix, r = this.shearMix, s = this.target, o = s.a, a = s.b, h = s.c, l = s.d, u = o * l - a * h > 0 ? t.MathUtils.degRad : -t.MathUtils.degRad, c = this.data.offsetRotation * u, f = this.data.offsetShearY * u, d = this.bones, p = 0, v = d.length; p < v; p++) {
                        var g = d[p],
                            m = !1;
                        if (0 != e) {
                            var M = g.a,
                                x = g.b,
                                y = g.c,
                                w = g.d;
                            (S = Math.atan2(h, o) - Math.atan2(y, M) + c) > t.MathUtils.PI ? S -= t.MathUtils.PI2 : S < -t.MathUtils.PI && (S += t.MathUtils.PI2), S *= e;
                            var b = Math.cos(S),
                                E = Math.sin(S);
                            g.a = b * M - E * y, g.b = b * x - E * w, g.c = E * M + b * y, g.d = E * x + b * w, m = !0
                        }
                        if (0 != n) {
                            var T = this.temp;
                            s.localToWorld(T.set(this.data.offsetX, this.data.offsetY)), g.worldX += (T.x - g.worldX) * n, g.worldY += (T.y - g.worldY) * n, m = !0
                        }
                        if (i > 0) {
                            var A = Math.sqrt(g.a * g.a + g.c * g.c),
                                R = Math.sqrt(o * o + h * h);
                            A > 1e-5 && (A = (A + (R - A + this.data.offsetScaleX) * i) / A), g.a *= A, g.c *= A, A = Math.sqrt(g.b * g.b + g.d * g.d), R = Math.sqrt(a * a + l * l), A > 1e-5 && (A = (A + (R - A + this.data.offsetScaleY) * i) / A), g.b *= A, g.d *= A, m = !0
                        }
                        if (r > 0) {
                            x = g.b, w = g.d;
                            var S, I = Math.atan2(w, x);
                            (S = Math.atan2(l, a) - Math.atan2(h, o) - (I - Math.atan2(g.c, g.a))) > t.MathUtils.PI ? S -= t.MathUtils.PI2 : S < -t.MathUtils.PI && (S += t.MathUtils.PI2), S = I + (S + f) * r;
                            A = Math.sqrt(x * x + w * w);
                            g.b = Math.cos(S) * A, g.d = Math.sin(S) * A, m = !0
                        }
                        m && (g.appliedValid = !1)
                    }
                }, e.prototype.applyRelativeWorld = function() {
                    for (var e = this.rotateMix, n = this.translateMix, i = this.scaleMix, r = this.shearMix, s = this.target, o = s.a, a = s.b, h = s.c, l = s.d, u = o * l - a * h > 0 ? t.MathUtils.degRad : -t.MathUtils.degRad, c = this.data.offsetRotation * u, f = this.data.offsetShearY * u, d = this.bones, p = 0, v = d.length; p < v; p++) {
                        var g = d[p],
                            m = !1;
                        if (0 != e) {
                            var M = g.a,
                                x = g.b,
                                y = g.c,
                                w = g.d;
                            (R = Math.atan2(h, o) + c) > t.MathUtils.PI ? R -= t.MathUtils.PI2 : R < -t.MathUtils.PI && (R += t.MathUtils.PI2), R *= e;
                            var b = Math.cos(R),
                                E = Math.sin(R);
                            g.a = b * M - E * y, g.b = b * x - E * w, g.c = E * M + b * y, g.d = E * x + b * w, m = !0
                        }
                        if (0 != n) {
                            var T = this.temp;
                            s.localToWorld(T.set(this.data.offsetX, this.data.offsetY)), g.worldX += T.x * n, g.worldY += T.y * n, m = !0
                        }
                        if (i > 0) {
                            var A = (Math.sqrt(o * o + h * h) - 1 + this.data.offsetScaleX) * i + 1;
                            g.a *= A, g.c *= A, A = (Math.sqrt(a * a + l * l) - 1 + this.data.offsetScaleY) * i + 1, g.b *= A, g.d *= A, m = !0
                        }
                        if (r > 0) {
                            var R;
                            (R = Math.atan2(l, a) - Math.atan2(h, o)) > t.MathUtils.PI ? R -= t.MathUtils.PI2 : R < -t.MathUtils.PI && (R += t.MathUtils.PI2);
                            x = g.b, w = g.d;
                            R = Math.atan2(w, x) + (R - t.MathUtils.PI / 2 + f) * r;
                            A = Math.sqrt(x * x + w * w);
                            g.b = Math.cos(R) * A, g.d = Math.sin(R) * A, m = !0
                        }
                        m && (g.appliedValid = !1)
                    }
                }, e.prototype.applyAbsoluteLocal = function() {
                    var t = this.rotateMix,
                        e = this.translateMix,
                        n = this.scaleMix,
                        i = this.shearMix,
                        r = this.target;
                    r.appliedValid || r.updateAppliedTransform();
                    for (var s = this.bones, o = 0, a = s.length; o < a; o++) {
                        var h = s[o];
                        h.appliedValid || h.updateAppliedTransform();
                        var l = h.arotation;
                        if (0 != t) {
                            var u = r.arotation - l + this.data.offsetRotation;
                            l += (u -= 360 * (16384 - (16384.499999999996 - u / 360 | 0))) * t
                        }
                        var c = h.ax,
                            f = h.ay;
                        0 != e && (c += (r.ax - c + this.data.offsetX) * e, f += (r.ay - f + this.data.offsetY) * e);
                        var d = h.ascaleX,
                            p = h.ascaleY;
                        0 != n && (d > 1e-5 && (d = (d + (r.ascaleX - d + this.data.offsetScaleX) * n) / d), p > 1e-5 && (p = (p + (r.ascaleY - p + this.data.offsetScaleY) * n) / p));
                        var v = h.ashearY;
                        if (0 != i) {
                            u = r.ashearY - v + this.data.offsetShearY;
                            u -= 360 * (16384 - (16384.499999999996 - u / 360 | 0)), h.shearY += u * i
                        }
                        h.updateWorldTransformWith(c, f, l, d, p, h.ashearX, v)
                    }
                }, e.prototype.applyRelativeLocal = function() {
                    var t = this.rotateMix,
                        e = this.translateMix,
                        n = this.scaleMix,
                        i = this.shearMix,
                        r = this.target;
                    r.appliedValid || r.updateAppliedTransform();
                    for (var s = this.bones, o = 0, a = s.length; o < a; o++) {
                        var h = s[o];
                        h.appliedValid || h.updateAppliedTransform();
                        var l = h.arotation;
                        0 != t && (l += (r.arotation + this.data.offsetRotation) * t);
                        var u = h.ax,
                            c = h.ay;
                        0 != e && (u += (r.ax + this.data.offsetX) * e, c += (r.ay + this.data.offsetY) * e);
                        var f = h.ascaleX,
                            d = h.ascaleY;
                        0 != n && (f > 1e-5 && (f *= (r.ascaleX - 1 + this.data.offsetScaleX) * n + 1), d > 1e-5 && (d *= (r.ascaleY - 1 + this.data.offsetScaleY) * n + 1));
                        var p = h.ashearY;
                        0 != i && (p += (r.ashearY + this.data.offsetShearY) * i), h.updateWorldTransformWith(u, c, l, f, d, h.ashearX, p)
                    }
                }, e
            }();
            t.TransformConstraint = e
        }(i || (i = {})),
        function(t) {
            var e = function(t) {
                function e(e) {
                    var n = t.call(this, e, 0, !1) || this;
                    return n.bones = new Array, n.rotateMix = 0, n.translateMix = 0, n.scaleMix = 0, n.shearMix = 0, n.offsetRotation = 0, n.offsetX = 0, n.offsetY = 0, n.offsetScaleX = 0, n.offsetScaleY = 0, n.offsetShearY = 0, n.relative = !1, n.local = !1, n
                }
                return r(e, t), e
            }(t.ConstraintData);
            t.TransformConstraintData = e
        }(i || (i = {})),
        function(t) {
            var e = function() {
                function e() {
                    this.convexPolygons = new Array, this.convexPolygonsIndices = new Array, this.indicesArray = new Array, this.isConcaveArray = new Array, this.triangles = new Array, this.polygonPool = new t.Pool(function() {
                        return new Array
                    }), this.polygonIndicesPool = new t.Pool(function() {
                        return new Array
                    })
                }
                return e.prototype.triangulate = function(t) {
                    var n = t,
                        i = t.length >> 1,
                        r = this.indicesArray;
                    r.length = 0;
                    for (var s = 0; s < i; s++) r[s] = s;
                    var o = this.isConcaveArray;
                    o.length = 0;
                    s = 0;
                    for (var a = i; s < a; ++s) o[s] = e.isConcave(s, i, n, r);
                    var h = this.triangles;
                    for (h.length = 0; i > 3;) {
                        for (var l = i - 1, u = (s = 0, 1);;) {
                            t: if (!o[s]) {
                                for (var c = r[l] << 1, f = r[s] << 1, d = r[u] << 1, p = n[c], v = n[c + 1], g = n[f], m = n[f + 1], M = n[d], x = n[d + 1], y = (u + 1) % i; y != l; y = (y + 1) % i)
                                    if (o[y]) {
                                        var w = r[y] << 1,
                                            b = n[w],
                                            E = n[w + 1];
                                        if (e.positiveArea(M, x, p, v, b, E) && e.positiveArea(p, v, g, m, b, E) && e.positiveArea(g, m, M, x, b, E)) break t
                                    }
                                break
                            }if (0 == u) {
                                do {
                                    if (!o[s]) break;
                                    s--
                                } while (s > 0);
                                break
                            }
                            l = s,
                            s = u,
                            u = (u + 1) % i
                        }
                        h.push(r[(i + s - 1) % i]), h.push(r[s]), h.push(r[(s + 1) % i]), r.splice(s, 1), o.splice(s, 1);
                        var T = (--i + s - 1) % i,
                            A = s == i ? 0 : s;
                        o[T] = e.isConcave(T, i, n, r), o[A] = e.isConcave(A, i, n, r)
                    }
                    return 3 == i && (h.push(r[2]), h.push(r[0]), h.push(r[1])), h
                }, e.prototype.decompose = function(t, n) {
                    var i = t,
                        r = this.convexPolygons;
                    this.polygonPool.freeAll(r), r.length = 0;
                    var s = this.convexPolygonsIndices;
                    this.polygonIndicesPool.freeAll(s), s.length = 0;
                    var o = this.polygonIndicesPool.obtain();
                    o.length = 0;
                    var a = this.polygonPool.obtain();
                    a.length = 0;
                    for (var h = -1, l = 0, u = 0, c = n.length; u < c; u += 3) {
                        var f = n[u] << 1,
                            d = n[u + 1] << 1,
                            p = n[u + 2] << 1,
                            v = i[f],
                            g = i[f + 1],
                            m = i[d],
                            M = i[d + 1],
                            x = i[p],
                            y = i[p + 1],
                            w = !1;
                        if (h == f) {
                            var b = a.length - 4,
                                E = e.winding(a[b], a[b + 1], a[b + 2], a[b + 3], x, y),
                                T = e.winding(x, y, a[0], a[1], a[2], a[3]);
                            E == l && T == l && (a.push(x), a.push(y), o.push(p), w = !0)
                        }
                        w || (a.length > 0 ? (r.push(a), s.push(o)) : (this.polygonPool.free(a), this.polygonIndicesPool.free(o)), (a = this.polygonPool.obtain()).length = 0, a.push(v), a.push(g), a.push(m), a.push(M), a.push(x), a.push(y), (o = this.polygonIndicesPool.obtain()).length = 0, o.push(f), o.push(d), o.push(p), l = e.winding(v, g, m, M, x, y), h = f)
                    }
                    a.length > 0 && (r.push(a), s.push(o));
                    for (u = 0, c = r.length; u < c; u++)
                        if (0 != (o = s[u]).length)
                            for (var A = o[0], R = o[o.length - 1], S = (a = r[u])[b = a.length - 4], I = a[b + 1], C = a[b + 2], P = a[b + 3], L = a[0], k = a[1], _ = a[2], F = a[3], V = e.winding(S, I, C, P, L, k), O = 0; O < c; O++)
                                if (O != u) {
                                    var D = s[O];
                                    if (3 == D.length) {
                                        var N = D[0],
                                            U = D[1],
                                            X = D[2],
                                            B = r[O];
                                        x = B[B.length - 2], y = B[B.length - 1];
                                        if (N == A && U == R) {
                                            E = e.winding(S, I, C, P, x, y), T = e.winding(x, y, L, k, _, F);
                                            E == V && T == V && (B.length = 0, D.length = 0, a.push(x), a.push(y), o.push(X), S = C, I = P, C = x, P = y, O = 0)
                                        }
                                    }
                                }
                    for (u = r.length - 1; u >= 0; u--) 0 == (a = r[u]).length && (r.splice(u, 1), this.polygonPool.free(a), o = s[u], s.splice(u, 1), this.polygonIndicesPool.free(o));
                    return r
                }, e.isConcave = function(t, e, n, i) {
                    var r = i[(e + t - 1) % e] << 1,
                        s = i[t] << 1,
                        o = i[(t + 1) % e] << 1;
                    return !this.positiveArea(n[r], n[r + 1], n[s], n[s + 1], n[o], n[o + 1])
                }, e.positiveArea = function(t, e, n, i, r, s) {
                    return t * (s - i) + n * (e - s) + r * (i - e) >= 0
                }, e.winding = function(t, e, n, i, r, s) {
                    var o = n - t,
                        a = i - e;
                    return r * a - s * o + o * e - t * a >= 0 ? 1 : -1
                }, e
            }();
            t.Triangulator = e
        }(i || (i = {})),
        function(t) {
            var e = function() {
                function t() {
                    this.array = new Array
                }
                return t.prototype.add = function(t) {
                    var e = this.contains(t);
                    return this.array[0 | t] = 0 | t, !e
                }, t.prototype.contains = function(t) {
                    return void 0 != this.array[0 | t]
                }, t.prototype.remove = function(t) {
                    this.array[0 | t] = void 0
                }, t.prototype.clear = function() {
                    this.array.length = 0
                }, t
            }();
            t.IntSet = e;
            var n = function() {
                function t(t, e, n, i) {
                    void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === i && (i = 0), this.r = t, this.g = e, this.b = n, this.a = i
                }
                return t.prototype.set = function(t, e, n, i) {
                    return this.r = t, this.g = e, this.b = n, this.a = i, this.clamp(), this
                }, t.prototype.setFromColor = function(t) {
                    return this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this
                }, t.prototype.setFromString = function(t) {
                    return t = "#" == t.charAt(0) ? t.substr(1) : t, this.r = parseInt(t.substr(0, 2), 16) / 255, this.g = parseInt(t.substr(2, 2), 16) / 255, this.b = parseInt(t.substr(4, 2), 16) / 255, this.a = (8 != t.length ? 255 : parseInt(t.substr(6, 2), 16)) / 255, this
                }, t.prototype.add = function(t, e, n, i) {
                    return this.r += t, this.g += e, this.b += n, this.a += i, this.clamp(), this
                }, t.prototype.clamp = function() {
                    return this.r < 0 ? this.r = 0 : this.r > 1 && (this.r = 1), this.g < 0 ? this.g = 0 : this.g > 1 && (this.g = 1), this.b < 0 ? this.b = 0 : this.b > 1 && (this.b = 1), this.a < 0 ? this.a = 0 : this.a > 1 && (this.a = 1), this
                }, t.rgba8888ToColor = function(t, e) {
                    t.r = ((4278190080 & e) >>> 24) / 255, t.g = ((16711680 & e) >>> 16) / 255, t.b = ((65280 & e) >>> 8) / 255, t.a = (255 & e) / 255
                }, t.rgb888ToColor = function(t, e) {
                    t.r = ((16711680 & e) >>> 16) / 255, t.g = ((65280 & e) >>> 8) / 255, t.b = (255 & e) / 255
                }, t.WHITE = new t(1, 1, 1, 1), t.RED = new t(1, 0, 0, 1), t.GREEN = new t(0, 1, 0, 1), t.BLUE = new t(0, 0, 1, 1), t.MAGENTA = new t(1, 0, 1, 1), t
            }();
            t.Color = n;
            var i = function() {
                function t() {}
                return t.clamp = function(t, e, n) {
                    return t < e ? e : t > n ? n : t
                }, t.cosDeg = function(e) {
                    return Math.cos(e * t.degRad)
                }, t.sinDeg = function(e) {
                    return Math.sin(e * t.degRad)
                }, t.signum = function(t) {
                    return t > 0 ? 1 : t < 0 ? -1 : 0
                }, t.toInt = function(t) {
                    return t > 0 ? Math.floor(t) : Math.ceil(t)
                }, t.cbrt = function(t) {
                    var e = Math.pow(Math.abs(t), 1 / 3);
                    return t < 0 ? -e : e
                }, t.randomTriangular = function(e, n) {
                    return t.randomTriangularWith(e, n, .5 * (e + n))
                }, t.randomTriangularWith = function(t, e, n) {
                    var i = Math.random(),
                        r = e - t;
                    return i <= (n - t) / r ? t + Math.sqrt(i * r * (n - t)) : e - Math.sqrt((1 - i) * r * (e - n))
                }, t.PI = 3.1415927, t.PI2 = 2 * t.PI, t.radiansToDegrees = 180 / t.PI, t.radDeg = t.radiansToDegrees, t.degreesToRadians = t.PI / 180, t.degRad = t.degreesToRadians, t
            }();
            t.MathUtils = i;
            var s = function() {
                function t() {}
                return t.prototype.apply = function(t, e, n) {
                    return t + (e - t) * this.applyInternal(n)
                }, t
            }();
            t.Interpolation = s;
            var o = function(t) {
                function e(e) {
                    var n = t.call(this) || this;
                    return n.power = 2, n.power = e, n
                }
                return r(e, t), e.prototype.applyInternal = function(t) {
                    return t <= .5 ? Math.pow(2 * t, this.power) / 2 : Math.pow(2 * (t - 1), this.power) / (this.power % 2 == 0 ? -2 : 2) + 1
                }, e
            }(s);
            t.Pow = o;
            var a = function(t) {
                function e(e) {
                    return t.call(this, e) || this
                }
                return r(e, t), e.prototype.applyInternal = function(t) {
                    return Math.pow(t - 1, this.power) * (this.power % 2 == 0 ? -1 : 1) + 1
                }, e
            }(o);
            t.PowOut = a;
            var h = function() {
                function t() {}
                return t.arrayCopy = function(t, e, n, i, r) {
                    for (var s = e, o = i; s < e + r; s++, o++) n[o] = t[s]
                }, t.setArraySize = function(t, e, n) {
                    void 0 === n && (n = 0);
                    var i = t.length;
                    if (i == e) return t;
                    if (t.length = e, i < e)
                        for (var r = i; r < e; r++) t[r] = n;
                    return t
                }, t.ensureArrayCapacity = function(e, n, i) {
                    return void 0 === i && (i = 0), e.length >= n ? e : t.setArraySize(e, n, i)
                }, t.newArray = function(t, e) {
                    for (var n = new Array(t), i = 0; i < t; i++) n[i] = e;
                    return n
                }, t.newFloatArray = function(e) {
                    if (t.SUPPORTS_TYPED_ARRAYS) return new Float32Array(e);
                    for (var n = new Array(e), i = 0; i < n.length; i++) n[i] = 0;
                    return n
                }, t.newShortArray = function(e) {
                    if (t.SUPPORTS_TYPED_ARRAYS) return new Int16Array(e);
                    for (var n = new Array(e), i = 0; i < n.length; i++) n[i] = 0;
                    return n
                }, t.toFloatArray = function(e) {
                    return t.SUPPORTS_TYPED_ARRAYS ? new Float32Array(e) : e
                }, t.toSinglePrecision = function(e) {
                    return t.SUPPORTS_TYPED_ARRAYS ? Math.fround(e) : e
                }, t.webkit602BugfixHelper = function(t, e) {}, t.contains = function(t, e, n) {
                    void 0 === n && (n = !0);
                    for (var i = 0; i < t.length; i++)
                        if (t[i] == e) return !0;
                    return !1
                }, t.SUPPORTS_TYPED_ARRAYS = "undefined" != typeof Float32Array, t
            }();
            t.Utils = h;
            var l = function() {
                function t() {}
                return t.logBones = function(t) {
                    for (var e = 0; e < t.bones.length; e++) {
                        var n = t.bones[e];
                        console.log(n.data.name + ", " + n.a + ", " + n.b + ", " + n.c + ", " + n.d + ", " + n.worldX + ", " + n.worldY)
                    }
                }, t
            }();
            t.DebugUtils = l;
            var u = function() {
                function t(t) {
                    this.items = new Array, this.instantiator = t
                }
                return t.prototype.obtain = function() {
                    return this.items.length > 0 ? this.items.pop() : this.instantiator()
                }, t.prototype.free = function(t) {
                    t.reset && t.reset(), this.items.push(t)
                }, t.prototype.freeAll = function(t) {
                    for (var e = 0; e < t.length; e++) t[e].reset && t[e].reset(), this.items[e] = t[e]
                }, t.prototype.clear = function() {
                    this.items.length = 0
                }, t
            }();
            t.Pool = u;
            var c = function() {
                function t(t, e) {
                    void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = t, this.y = e
                }
                return t.prototype.set = function(t, e) {
                    return this.x = t, this.y = e, this
                }, t.prototype.length = function() {
                    var t = this.x,
                        e = this.y;
                    return Math.sqrt(t * t + e * e)
                }, t.prototype.normalize = function() {
                    var t = this.length();
                    return 0 != t && (this.x /= t, this.y /= t), this
                }, t
            }();
            t.Vector2 = c;
            var f = function() {
                function t() {
                    this.maxDelta = .064, this.framesPerSecond = 0, this.delta = 0, this.totalTime = 0, this.lastTime = Date.now() / 1e3, this.frameCount = 0, this.frameTime = 0
                }
                return t.prototype.update = function() {
                    var t = Date.now() / 1e3;
                    this.delta = t - this.lastTime, this.frameTime += this.delta, this.totalTime += this.delta, this.delta > this.maxDelta && (this.delta = this.maxDelta), this.lastTime = t, this.frameCount++, this.frameTime > 1 && (this.framesPerSecond = this.frameCount / this.frameTime, this.frameTime = 0, this.frameCount = 0)
                }, t
            }();
            t.TimeKeeper = f;
            var d = function() {
                function t(t) {
                    void 0 === t && (t = 32), this.addedValues = 0, this.lastValue = 0, this.mean = 0, this.dirty = !0, this.values = new Array(t)
                }
                return t.prototype.hasEnoughData = function() {
                    return this.addedValues >= this.values.length
                }, t.prototype.addValue = function(t) {
                    this.addedValues < this.values.length && this.addedValues++, this.values[this.lastValue++] = t, this.lastValue > this.values.length - 1 && (this.lastValue = 0), this.dirty = !0
                }, t.prototype.getMean = function() {
                    if (this.hasEnoughData()) {
                        if (this.dirty) {
                            for (var t = 0, e = 0; e < this.values.length; e++) t += this.values[e];
                            this.mean = t / this.values.length, this.dirty = !1
                        }
                        return this.mean
                    }
                    return 0
                }, t
            }();
            t.WindowedMean = d
        }(i || (i = {})), Math.fround || (Math.fround = (n = new Float32Array(1), function(t) {
                return n[0] = t, n[0]
            })),
            function(t) {
                var e = function() {
                    return function(t) {
                        if (null == t) throw new Error("name cannot be null.");
                        this.name = t
                    }
                }();
                t.Attachment = e;
                var n = function(e) {
                    function n(t) {
                        var i = e.call(this, t) || this;
                        return i.id = (65535 & n.nextID++) << 11, i.worldVerticesLength = 0, i.deformAttachment = i, i
                    }
                    return r(n, e), n.prototype.computeWorldVertices = function(t, e, n, i, r, s) {
                        n = r + (n >> 1) * s;
                        var o = t.bone.skeleton,
                            a = t.deform,
                            h = this.vertices,
                            l = this.bones;
                        if (null != l) {
                            for (var u = 0, c = 0, f = 0; f < e; f += 2) {
                                u += (g = l[u]) + 1, c += g
                            }
                            var d = o.bones;
                            if (0 == a.length)
                                for (I = r, T = 3 * c; I < n; I += s) {
                                    var p = 0,
                                        v = 0,
                                        g = l[u++];
                                    for (g += u; u < g; u++, T += 3) {
                                        y = d[l[u]], C = h[T], P = h[T + 1];
                                        var m = h[T + 2];
                                        p += (C * y.a + P * y.b + y.worldX) * m, v += (C * y.c + P * y.d + y.worldY) * m
                                    }
                                    i[I] = p, i[I + 1] = v
                                } else
                                    for (var M = a, x = (I = r, T = 3 * c, c << 1); I < n; I += s) {
                                        p = 0, v = 0, g = l[u++];
                                        for (g += u; u < g; u++, T += 3, x += 2) {
                                            y = d[l[u]], C = h[T] + M[x], P = h[T + 1] + M[x + 1], m = h[T + 2];
                                            p += (C * y.a + P * y.b + y.worldX) * m, v += (C * y.c + P * y.d + y.worldY) * m
                                        }
                                        i[I] = p, i[I + 1] = v
                                    }
                        } else {
                            a.length > 0 && (h = a);
                            for (var y, w = (y = t.bone).worldX, b = y.worldY, E = y.a, T = y.b, A = y.c, R = y.d, S = e, I = r; I < n; S += 2, I += s) {
                                var C = h[S],
                                    P = h[S + 1];
                                i[I] = C * E + P * T + w, i[I + 1] = C * A + P * R + b
                            }
                        }
                    }, n.prototype.copyTo = function(e) {
                        null != this.bones ? (e.bones = new Array(this.bones.length), t.Utils.arrayCopy(this.bones, 0, e.bones, 0, this.bones.length)) : e.bones = null, null != this.vertices ? (e.vertices = t.Utils.newFloatArray(this.vertices.length), t.Utils.arrayCopy(this.vertices, 0, e.vertices, 0, this.vertices.length)) : e.vertices = null, e.worldVerticesLength = this.worldVerticesLength, e.deformAttachment = this.deformAttachment
                    }, n.nextID = 0, n
                }(e);
                t.VertexAttachment = n
            }(i || (i = {})),
            function(t) {
                ! function(t) {
                    t[t.Region = 0] = "Region", t[t.BoundingBox = 1] = "BoundingBox", t[t.Mesh = 2] = "Mesh", t[t.LinkedMesh = 3] = "LinkedMesh", t[t.Path = 4] = "Path", t[t.Point = 5] = "Point", t[t.Clipping = 6] = "Clipping"
                }(t.AttachmentType || (t.AttachmentType = {}))
            }(i || (i = {})),
            function(t) {
                var e = function(e) {
                    function n(n) {
                        var i = e.call(this, n) || this;
                        return i.color = new t.Color(1, 1, 1, 1), i
                    }
                    return r(n, e), n.prototype.copy = function() {
                        var t = new n(name);
                        return this.copyTo(t), t.color.setFromColor(this.color), t
                    }, n
                }(t.VertexAttachment);
                t.BoundingBoxAttachment = e
            }(i || (i = {})),
            function(t) {
                var e = function(e) {
                    function n(n) {
                        var i = e.call(this, n) || this;
                        return i.color = new t.Color(.2275, .2275, .8078, 1), i
                    }
                    return r(n, e), n.prototype.copy = function() {
                        var t = new n(name);
                        return this.copyTo(t), t.endSlot = this.endSlot, t.color.setFromColor(this.color), t
                    }, n
                }(t.VertexAttachment);
                t.ClippingAttachment = e
            }(i || (i = {})),
            function(t) {
                var e = function(e) {
                    function n(n) {
                        var i = e.call(this, n) || this;
                        return i.color = new t.Color(1, 1, 1, 1), i.tempColor = new t.Color(0, 0, 0, 0), i
                    }
                    return r(n, e), n.prototype.updateUVs = function() {
                        var e = this.regionUVs;
                        null != this.uvs && this.uvs.length == e.length || (this.uvs = t.Utils.newFloatArray(e.length));
                        var n = this.uvs,
                            i = this.uvs.length,
                            r = this.region.u,
                            s = this.region.v,
                            o = 0,
                            a = 0;
                        if (this.region instanceof t.TextureAtlasRegion) {
                            var h = this.region,
                                l = h.texture.getImage().width,
                                u = h.texture.getImage().height;
                            switch (h.degrees) {
                                case 90:
                                    r -= (h.originalHeight - h.offsetY - h.height) / l, s -= (h.originalWidth - h.offsetX - h.width) / u, o = h.originalHeight / l, a = h.originalWidth / u;
                                    for (var c = 0; c < i; c += 2) n[c] = r + e[c + 1] * o, n[c + 1] = s + (1 - e[c]) * a;
                                    return;
                                case 180:
                                    r -= (h.originalWidth - h.offsetX - h.width) / l, s -= h.offsetY / u, o = h.originalWidth / l, a = h.originalHeight / u;
                                    for (c = 0; c < i; c += 2) n[c] = r + (1 - e[c]) * o, n[c + 1] = s + (1 - e[c + 1]) * a;
                                    return;
                                case 270:
                                    r -= h.offsetY / l, s -= h.offsetX / u, o = h.originalHeight / l, a = h.originalWidth / u;
                                    for (c = 0; c < i; c += 2) n[c] = r + (1 - e[c + 1]) * o, n[c + 1] = s + e[c] * a;
                                    return
                            }
                            r -= h.offsetX / l, s -= (h.originalHeight - h.offsetY - h.height) / u, o = h.originalWidth / l, a = h.originalHeight / u
                        } else null == this.region ? (r = s = 0, o = a = 1) : (o = this.region.u2 - r, a = this.region.v2 - s);
                        for (c = 0; c < i; c += 2) n[c] = r + e[c] * o, n[c + 1] = s + e[c + 1] * a
                    }, n.prototype.getParentMesh = function() {
                        return this.parentMesh
                    }, n.prototype.setParentMesh = function(t) {
                        this.parentMesh = t, null != t && (this.bones = t.bones, this.vertices = t.vertices, this.worldVerticesLength = t.worldVerticesLength, this.regionUVs = t.regionUVs, this.triangles = t.triangles, this.hullLength = t.hullLength, this.worldVerticesLength = t.worldVerticesLength)
                    }, n.prototype.copy = function() {
                        if (null != this.parentMesh) return this.newLinkedMesh();
                        var e = new n(this.name);
                        return e.region = this.region, e.path = this.path, e.color.setFromColor(this.color), this.copyTo(e), e.regionUVs = new Array(this.regionUVs.length), t.Utils.arrayCopy(this.regionUVs, 0, e.regionUVs, 0, this.regionUVs.length), e.uvs = new Array(this.uvs.length), t.Utils.arrayCopy(this.uvs, 0, e.uvs, 0, this.uvs.length), e.triangles = new Array(this.triangles.length), t.Utils.arrayCopy(this.triangles, 0, e.triangles, 0, this.triangles.length), e.hullLength = this.hullLength, null != this.edges && (e.edges = new Array(this.edges.length), t.Utils.arrayCopy(this.edges, 0, e.edges, 0, this.edges.length)), e.width = this.width, e.height = this.height, e
                    }, n.prototype.newLinkedMesh = function() {
                        var t = new n(this.name);
                        return t.region = this.region, t.path = this.path, t.color.setFromColor(this.color), t.deformAttachment = this.deformAttachment, t.setParentMesh(null != this.parentMesh ? this.parentMesh : this), t.updateUVs(), t
                    }, n
                }(t.VertexAttachment);
                t.MeshAttachment = e
            }(i || (i = {})),
            function(t) {
                var e = function(e) {
                    function n(n) {
                        var i = e.call(this, n) || this;
                        return i.closed = !1, i.constantSpeed = !1, i.color = new t.Color(1, 1, 1, 1), i
                    }
                    return r(n, e), n.prototype.copy = function() {
                        var e = new n(name);
                        return this.copyTo(e), e.lengths = new Array(this.lengths.length), t.Utils.arrayCopy(this.lengths, 0, e.lengths, 0, this.lengths.length), e.closed = closed, e.constantSpeed = this.constantSpeed, e.color.setFromColor(this.color), e
                    }, n
                }(t.VertexAttachment);
                t.PathAttachment = e
            }(i || (i = {})),
            function(t) {
                var e = function(e) {
                    function n(n) {
                        var i = e.call(this, n) || this;
                        return i.color = new t.Color(.38, .94, 0, 1), i
                    }
                    return r(n, e), n.prototype.computeWorldPosition = function(t, e) {
                        return e.x = this.x * t.a + this.y * t.b + t.worldX, e.y = this.x * t.c + this.y * t.d + t.worldY, e
                    }, n.prototype.computeWorldRotation = function(e) {
                        var n = t.MathUtils.cosDeg(this.rotation),
                            i = t.MathUtils.sinDeg(this.rotation),
                            r = n * e.a + i * e.b,
                            s = n * e.c + i * e.d;
                        return Math.atan2(s, r) * t.MathUtils.radDeg
                    }, n.prototype.copy = function() {
                        var t = new n(name);
                        return t.x = this.x, t.y = this.y, t.rotation = this.rotation, t.color.setFromColor(this.color), t
                    }, n
                }(t.VertexAttachment);
                t.PointAttachment = e
            }(i || (i = {})),
            function(t) {
                var e = function(e) {
                    function n(n) {
                        var i = e.call(this, n) || this;
                        return i.x = 0, i.y = 0, i.scaleX = 1, i.scaleY = 1, i.rotation = 0, i.width = 0, i.height = 0, i.color = new t.Color(1, 1, 1, 1), i.offset = t.Utils.newFloatArray(8), i.uvs = t.Utils.newFloatArray(8), i.tempColor = new t.Color(1, 1, 1, 1), i
                    }
                    return r(n, e), n.prototype.updateOffset = function() {
                        var t = this.width / this.region.originalWidth * this.scaleX,
                            e = this.height / this.region.originalHeight * this.scaleY,
                            i = -this.width / 2 * this.scaleX + this.region.offsetX * t,
                            r = -this.height / 2 * this.scaleY + this.region.offsetY * e,
                            s = i + this.region.width * t,
                            o = r + this.region.height * e,
                            a = this.rotation * Math.PI / 180,
                            h = Math.cos(a),
                            l = Math.sin(a),
                            u = i * h + this.x,
                            c = i * l,
                            f = r * h + this.y,
                            d = r * l,
                            p = s * h + this.x,
                            v = s * l,
                            g = o * h + this.y,
                            m = o * l,
                            M = this.offset;
                        M[n.OX1] = u - d, M[n.OY1] = f + c, M[n.OX2] = u - m, M[n.OY2] = g + c, M[n.OX3] = p - m, M[n.OY3] = g + v, M[n.OX4] = p - d, M[n.OY4] = f + v
                    }, n.prototype.setRegion = function(t) {
                        this.region = t;
                        var e = this.uvs;
                        t.rotate ? (e[2] = t.u, e[3] = t.v2, e[4] = t.u, e[5] = t.v, e[6] = t.u2, e[7] = t.v, e[0] = t.u2, e[1] = t.v2) : (e[0] = t.u, e[1] = t.v2, e[2] = t.u, e[3] = t.v, e[4] = t.u2, e[5] = t.v, e[6] = t.u2, e[7] = t.v2)
                    }, n.prototype.computeWorldVertices = function(t, e, i, r) {
                        var s = this.offset,
                            o = t.worldX,
                            a = t.worldY,
                            h = t.a,
                            l = t.b,
                            u = t.c,
                            c = t.d,
                            f = 0,
                            d = 0;
                        f = s[n.OX1], d = s[n.OY1], e[i] = f * h + d * l + o, e[i + 1] = f * u + d * c + a, i += r, f = s[n.OX2], d = s[n.OY2], e[i] = f * h + d * l + o, e[i + 1] = f * u + d * c + a, i += r, f = s[n.OX3], d = s[n.OY3], e[i] = f * h + d * l + o, e[i + 1] = f * u + d * c + a, i += r, f = s[n.OX4], d = s[n.OY4], e[i] = f * h + d * l + o, e[i + 1] = f * u + d * c + a
                    }, n.prototype.copy = function() {
                        var e = new n(name);
                        return e.region = this.region, e.rendererObject = this.rendererObject, e.path = this.path, e.x = this.x, e.y = this.y, e.scaleX = this.scaleX, e.scaleY = this.scaleY, e.rotation = this.rotation, e.width = this.width, e.height = this.height, t.Utils.arrayCopy(this.uvs, 0, e.uvs, 0, 8), t.Utils.arrayCopy(this.offset, 0, e.offset, 0, 8), e.color.setFromColor(this.color), e
                    }, n.OX1 = 0, n.OY1 = 1, n.OX2 = 2, n.OY2 = 3, n.OX3 = 4, n.OY3 = 5, n.OX4 = 6, n.OY4 = 7, n.X1 = 0, n.Y1 = 1, n.C1R = 2, n.C1G = 3, n.C1B = 4, n.C1A = 5, n.U1 = 6, n.V1 = 7, n.X2 = 8, n.Y2 = 9, n.C2R = 10, n.C2G = 11, n.C2B = 12, n.C2A = 13, n.U2 = 14, n.V2 = 15, n.X3 = 16, n.Y3 = 17, n.C3R = 18, n.C3G = 19, n.C3B = 20, n.C3A = 21, n.U3 = 22, n.V3 = 23, n.X4 = 24, n.Y4 = 25, n.C4R = 26, n.C4G = 27, n.C4B = 28, n.C4A = 29, n.U4 = 30, n.V4 = 31, n
                }(t.Attachment);
                t.RegionAttachment = e
            }(i || (i = {})),
            function(t) {
                var e = function() {
                    function e(t, e) {
                        this.jitterX = 0, this.jitterY = 0, this.jitterX = t, this.jitterY = e
                    }
                    return e.prototype.begin = function(t) {}, e.prototype.transform = function(e, n, i, r) {
                        e.x += t.MathUtils.randomTriangular(-this.jitterX, this.jitterY), e.y += t.MathUtils.randomTriangular(-this.jitterX, this.jitterY)
                    }, e.prototype.end = function() {}, e
                }();
                t.JitterEffect = e
            }(i || (i = {})),
            function(t) {
                var e = function() {
                    function e(t) {
                        this.centerX = 0, this.centerY = 0, this.radius = 0, this.angle = 0, this.worldX = 0, this.worldY = 0, this.radius = t
                    }
                    return e.prototype.begin = function(t) {
                        this.worldX = t.x + this.centerX, this.worldY = t.y + this.centerY
                    }, e.prototype.transform = function(n, i, r, s) {
                        var o = this.angle * t.MathUtils.degreesToRadians,
                            a = n.x - this.worldX,
                            h = n.y - this.worldY,
                            l = Math.sqrt(a * a + h * h);
                        if (l < this.radius) {
                            var u = e.interpolation.apply(0, o, (this.radius - l) / this.radius),
                                c = Math.cos(u),
                                f = Math.sin(u);
                            n.x = c * a - f * h + this.worldX, n.y = f * a + c * h + this.worldY
                        }
                    }, e.prototype.end = function() {}, e.interpolation = new t.PowOut(2), e
                }();
                t.SwirlEffect = e
            }(i || (i = {})),
            function(t) {
                ! function(e) {
                    var n = function(e) {
                        function n(n) {
                            return void 0 === n && (n = ""), e.call(this, function(e) {
                                return new t.canvas.CanvasTexture(e)
                            }, n) || this
                        }
                        return r(n, e), n
                    }(t.AssetManager);
                    e.AssetManager = n
                }(t.canvas || (t.canvas = {}))
            }(i || (i = {})),
            function(t) {
                ! function(e) {
                    var n = function(t) {
                        function e(e) {
                            return t.call(this, e) || this
                        }
                        return r(e, t), e.prototype.setFilters = function(t, e) {}, e.prototype.setWraps = function(t, e) {}, e.prototype.dispose = function() {}, e
                    }(t.Texture);
                    e.CanvasTexture = n
                }(t.canvas || (t.canvas = {}))
            }(i || (i = {})),
            function(t) {
                ! function(e) {
                    var n = function() {
                        function e(e) {
                            this.triangleRendering = !1, this.debugRendering = !1, this.vertices = t.Utils.newFloatArray(8192), this.tempColor = new t.Color, this.ctx = e
                        }
                        return e.prototype.draw = function(t) {
                            this.triangleRendering ? this.drawTriangles(t) : this.drawImages(t)
                        }, e.prototype.drawImages = function(e) {
                            var n = this.ctx,
                                i = e.drawOrder;
                            this.debugRendering && (n.strokeStyle = "green"), n.save();
                            for (var r = 0, s = i.length; r < s; r++) {
                                var o = i[r];
                                if (o.bone.active) {
                                    var a = o.getAttachment(),
                                        h = null,
                                        l = null,
                                        u = null;
                                    if (a instanceof t.RegionAttachment) {
                                        u = (l = (h = a).region).texture.getImage();
                                        var c = o.bone.skeleton.color,
                                            f = o.color,
                                            d = h.color,
                                            p = c.a * f.a * d.a,
                                            v = this.tempColor;
                                        v.set(c.r * f.r * d.r, c.g * f.g * d.g, c.b * f.b * d.b, p);
                                        var g = a,
                                            m = o.bone,
                                            M = l.width,
                                            x = l.height;
                                        n.save(), n.transform(m.a, m.c, m.b, m.d, m.worldX, m.worldY), n.translate(a.offset[0], a.offset[1]), n.rotate(a.rotation * Math.PI / 180);
                                        var y = g.width / M;
                                        if (n.scale(y * a.scaleX, y * a.scaleY), n.translate(M / 2, x / 2), a.region.rotate) {
                                            var w = M;
                                            M = x, x = w, n.rotate(-Math.PI / 2)
                                        }
                                        n.scale(1, -1), n.translate(-M / 2, -x / 2), 1 == v.r && 1 == v.g && 1 == v.b && 1 == v.a || (n.globalAlpha = v.a), n.drawImage(u, l.x, l.y, M, x, 0, 0, M, x), this.debugRendering && n.strokeRect(0, 0, M, x), n.restore()
                                    }
                                }
                            }
                            n.restore()
                        }, e.prototype.drawTriangles = function(n) {
                            for (var i = null, r = this.vertices, s = null, o = n.drawOrder, a = 0, h = o.length; a < h; a++) {
                                var l = o[a],
                                    u = l.getAttachment(),
                                    c = null;
                                if (u instanceof t.RegionAttachment) {
                                    var f = u;
                                    r = this.computeRegionVertices(l, f, !1), s = e.QUAD_TRIANGLES, c = f.region.texture.getImage()
                                } else {
                                    if (!(u instanceof t.MeshAttachment)) continue;
                                    var d = u;
                                    r = this.computeMeshVertices(l, d, !1), s = d.triangles, c = d.region.renderObject.texture.getImage()
                                }
                                if (null != c) {
                                    var p = l.data.blendMode;
                                    p != i && (i = p);
                                    var v = l.bone.skeleton.color,
                                        g = l.color,
                                        m = u.color,
                                        M = v.a * g.a * m.a,
                                        x = this.tempColor;
                                    x.set(v.r * g.r * m.r, v.g * g.g * m.g, v.b * g.b * m.b, M);
                                    var y = this.ctx;
                                    1 == x.r && 1 == x.g && 1 == x.b && 1 == x.a || (y.globalAlpha = x.a);
                                    for (var w = 0; w < s.length; w += 3) {
                                        var b = 8 * s[w],
                                            E = 8 * s[w + 1],
                                            T = 8 * s[w + 2],
                                            A = r[b],
                                            R = r[b + 1],
                                            S = r[b + 6],
                                            I = r[b + 7],
                                            C = r[E],
                                            P = r[E + 1],
                                            L = r[E + 6],
                                            k = r[E + 7],
                                            _ = r[T],
                                            F = r[T + 1],
                                            V = r[T + 6],
                                            O = r[T + 7];
                                        this.drawTriangle(c, A, R, S, I, C, P, L, k, _, F, V, O), this.debugRendering && (y.strokeStyle = "green", y.beginPath(), y.moveTo(A, R), y.lineTo(C, P), y.lineTo(_, F), y.lineTo(A, R), y.stroke())
                                    }
                                }
                            }
                            this.ctx.globalAlpha = 1
                        }, e.prototype.drawTriangle = function(t, e, n, i, r, s, o, a, h, l, u, c, f) {
                            var d = this.ctx;
                            i *= t.width, r *= t.height, a *= t.width, h *= t.height, c *= t.width, f *= t.height, d.beginPath(), d.moveTo(e, n), d.lineTo(s, o), d.lineTo(l, u), d.closePath();
                            var p = 1 / ((a -= i) * (f -= r) - (c -= i) * (h -= r)),
                                v = (f * (s -= e) - h * (l -= e)) * p,
                                g = (f * (o -= n) - h * (u -= n)) * p,
                                m = (a * l - c * s) * p,
                                M = (a * u - c * o) * p,
                                x = e - v * i - m * r,
                                y = n - g * i - M * r;
                            d.save(), d.transform(v, g, m, M, x, y), d.clip(), d.drawImage(t, 0, 0), d.restore()
                        }, e.prototype.computeRegionVertices = function(n, i, r) {
                            var s = n.bone.skeleton.color,
                                o = n.color,
                                a = i.color,
                                h = s.a * o.a * a.a,
                                l = r ? h : 1,
                                u = this.tempColor;
                            u.set(s.r * o.r * a.r * l, s.g * o.g * a.g * l, s.b * o.b * a.b * l, h), i.computeWorldVertices(n.bone, this.vertices, 0, e.VERTEX_SIZE);
                            var c = this.vertices,
                                f = i.uvs;
                            return c[t.RegionAttachment.C1R] = u.r, c[t.RegionAttachment.C1G] = u.g, c[t.RegionAttachment.C1B] = u.b, c[t.RegionAttachment.C1A] = u.a, c[t.RegionAttachment.U1] = f[0], c[t.RegionAttachment.V1] = f[1], c[t.RegionAttachment.C2R] = u.r, c[t.RegionAttachment.C2G] = u.g, c[t.RegionAttachment.C2B] = u.b, c[t.RegionAttachment.C2A] = u.a, c[t.RegionAttachment.U2] = f[2], c[t.RegionAttachment.V2] = f[3], c[t.RegionAttachment.C3R] = u.r, c[t.RegionAttachment.C3G] = u.g, c[t.RegionAttachment.C3B] = u.b, c[t.RegionAttachment.C3A] = u.a, c[t.RegionAttachment.U3] = f[4], c[t.RegionAttachment.V3] = f[5], c[t.RegionAttachment.C4R] = u.r, c[t.RegionAttachment.C4G] = u.g, c[t.RegionAttachment.C4B] = u.b, c[t.RegionAttachment.C4A] = u.a, c[t.RegionAttachment.U4] = f[6], c[t.RegionAttachment.V4] = f[7], c
                        }, e.prototype.computeMeshVertices = function(n, i, r) {
                            var s = n.bone.skeleton.color,
                                o = n.color,
                                a = i.color,
                                h = s.a * o.a * a.a,
                                l = r ? h : 1,
                                u = this.tempColor;
                            u.set(s.r * o.r * a.r * l, s.g * o.g * a.g * l, s.b * o.b * a.b * l, h);
                            var c = i.worldVerticesLength / 2;
                            this.vertices.length < i.worldVerticesLength && (this.vertices = t.Utils.newFloatArray(i.worldVerticesLength));
                            var f = this.vertices;
                            i.computeWorldVertices(n, 0, i.worldVerticesLength, f, 0, e.VERTEX_SIZE);
                            for (var d = i.uvs, p = 0, v = c, g = 0, m = 2; p < v; p++) f[m++] = u.r, f[m++] = u.g, f[m++] = u.b, f[m++] = u.a, f[m++] = d[g++], f[m++] = d[g++], m += 2;
                            return f
                        }, e.QUAD_TRIANGLES = [0, 1, 2, 2, 3, 0], e.VERTEX_SIZE = 8, e
                    }();
                    e.SkeletonRenderer = n
                }(t.canvas || (t.canvas = {}))
            }(i || (i = {})),
            function(t) {
                ! function(e) {
                    var n = function(e) {
                        function n(n, i) {
                            return void 0 === i && (i = ""), e.call(this, function(e) {
                                return new t.webgl.GLTexture(n, e)
                            }, i) || this
                        }
                        return r(n, e), n
                    }(t.AssetManager);
                    e.AssetManager = n
                }(t.webgl || (t.webgl = {}))
            }(i || (i = {})),
            function(t) {
                ! function(t) {
                    var e = function() {
                        function e(e, n) {
                            this.position = new t.Vector3(0, 0, 0), this.direction = new t.Vector3(0, 0, -1), this.up = new t.Vector3(0, 1, 0), this.near = 0, this.far = 100, this.zoom = 1, this.viewportWidth = 0, this.viewportHeight = 0, this.projectionView = new t.Matrix4, this.inverseProjectionView = new t.Matrix4, this.projection = new t.Matrix4, this.view = new t.Matrix4, this.tmp = new t.Vector3, this.viewportWidth = e, this.viewportHeight = n, this.update()
                        }
                        return e.prototype.update = function() {
                            var t = this.projection,
                                e = this.view,
                                n = this.projectionView,
                                i = this.inverseProjectionView,
                                r = this.zoom,
                                s = this.viewportWidth,
                                o = this.viewportHeight;
                            t.ortho(r * (-s / 2), r * (s / 2), r * (-o / 2), r * (o / 2), this.near, this.far), e.lookAt(this.position, this.direction, this.up), n.set(t.values), n.multiply(e), i.set(n.values).invert()
                        }, e.prototype.screenToWorld = function(t, e, n) {
                            var i = t.x,
                                r = n - t.y - 1,
                                s = this.tmp;
                            return s.x = 2 * i / e - 1, s.y = 2 * r / n - 1, s.z = 2 * t.z - 1, s.project(this.inverseProjectionView), t.set(s.x, s.y, s.z), t
                        }, e.prototype.setViewport = function(t, e) {
                            this.viewportWidth = t, this.viewportHeight = e
                        }, e
                    }();
                    t.OrthoCamera = e
                }(t.webgl || (t.webgl = {}))
            }(i || (i = {})),
            function(t) {
                ! function(e) {
                    var n = function(n) {
                        function i(t, i, r) {
                            void 0 === r && (r = !1);
                            var s = n.call(this, i) || this;
                            return s.texture = null, s.boundUnit = 0, s.useMipMaps = !1, s.context = t instanceof e.ManagedWebGLRenderingContext ? t : new e.ManagedWebGLRenderingContext(t), s.useMipMaps = r, s.restore(), s.context.addRestorable(s), s
                        }
                        return r(i, n), i.prototype.setFilters = function(t, e) {
                            var n = this.context.gl;
                            this.bind(), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, t), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, i.validateMagFilter(e))
                        }, i.validateMagFilter = function(e) {
                            switch (e) {
                                case t.TextureFilter.MipMap:
                                case t.TextureFilter.MipMapLinearLinear:
                                case t.TextureFilter.MipMapLinearNearest:
                                case t.TextureFilter.MipMapNearestLinear:
                                case t.TextureFilter.MipMapNearestNearest:
                                    return t.TextureFilter.Linear;
                                default:
                                    return e
                            }
                        }, i.prototype.setWraps = function(t, e) {
                            var n = this.context.gl;
                            this.bind(), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, t), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, e)
                        }, i.prototype.update = function(t) {
                            var e = this.context.gl;
                            this.texture || (this.texture = this.context.gl.createTexture()), this.bind(), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, this._image), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t ? e.LINEAR_MIPMAP_LINEAR : e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), t && e.generateMipmap(e.TEXTURE_2D)
                        }, i.prototype.restore = function() {
                            this.texture = null, this.update(this.useMipMaps)
                        }, i.prototype.bind = function(t) {
                            void 0 === t && (t = 0);
                            var e = this.context.gl;
                            this.boundUnit = t, e.activeTexture(e.TEXTURE0 + t), e.bindTexture(e.TEXTURE_2D, this.texture)
                        }, i.prototype.unbind = function() {
                            var t = this.context.gl;
                            t.activeTexture(t.TEXTURE0 + this.boundUnit), t.bindTexture(t.TEXTURE_2D, null)
                        }, i.prototype.dispose = function() {
                            this.context.removeRestorable(this), this.context.gl.deleteTexture(this.texture)
                        }, i
                    }(t.Texture);
                    e.GLTexture = n
                }(t.webgl || (t.webgl = {}))
            }(i || (i = {})),
            function(t) {
                ! function(t) {
                    t.M00 = 0, t.M01 = 4, t.M02 = 8, t.M03 = 12, t.M10 = 1, t.M11 = 5, t.M12 = 9, t.M13 = 13, t.M20 = 2, t.M21 = 6, t.M22 = 10, t.M23 = 14, t.M30 = 3, t.M31 = 7, t.M32 = 11, t.M33 = 15;
                    var e = function() {
                        function e() {
                            this.temp = new Float32Array(16), this.values = new Float32Array(16);
                            var e = this.values;
                            e[t.M00] = 1, e[t.M11] = 1, e[t.M22] = 1, e[t.M33] = 1
                        }
                        return e.prototype.set = function(t) {
                            return this.values.set(t), this
                        }, e.prototype.transpose = function() {
                            var e = this.temp,
                                n = this.values;
                            return e[t.M00] = n[t.M00], e[t.M01] = n[t.M10], e[t.M02] = n[t.M20], e[t.M03] = n[t.M30], e[t.M10] = n[t.M01], e[t.M11] = n[t.M11], e[t.M12] = n[t.M21], e[t.M13] = n[t.M31], e[t.M20] = n[t.M02], e[t.M21] = n[t.M12], e[t.M22] = n[t.M22], e[t.M23] = n[t.M32], e[t.M30] = n[t.M03], e[t.M31] = n[t.M13], e[t.M32] = n[t.M23], e[t.M33] = n[t.M33], this.set(e)
                        }, e.prototype.identity = function() {
                            var e = this.values;
                            return e[t.M00] = 1, e[t.M01] = 0, e[t.M02] = 0, e[t.M03] = 0, e[t.M10] = 0, e[t.M11] = 1, e[t.M12] = 0, e[t.M13] = 0, e[t.M20] = 0, e[t.M21] = 0, e[t.M22] = 1, e[t.M23] = 0, e[t.M30] = 0, e[t.M31] = 0, e[t.M32] = 0, e[t.M33] = 1, this
                        }, e.prototype.invert = function() {
                            var e = this.values,
                                n = this.temp,
                                i = e[t.M30] * e[t.M21] * e[t.M12] * e[t.M03] - e[t.M20] * e[t.M31] * e[t.M12] * e[t.M03] - e[t.M30] * e[t.M11] * e[t.M22] * e[t.M03] + e[t.M10] * e[t.M31] * e[t.M22] * e[t.M03] + e[t.M20] * e[t.M11] * e[t.M32] * e[t.M03] - e[t.M10] * e[t.M21] * e[t.M32] * e[t.M03] - e[t.M30] * e[t.M21] * e[t.M02] * e[t.M13] + e[t.M20] * e[t.M31] * e[t.M02] * e[t.M13] + e[t.M30] * e[t.M01] * e[t.M22] * e[t.M13] - e[t.M00] * e[t.M31] * e[t.M22] * e[t.M13] - e[t.M20] * e[t.M01] * e[t.M32] * e[t.M13] + e[t.M00] * e[t.M21] * e[t.M32] * e[t.M13] + e[t.M30] * e[t.M11] * e[t.M02] * e[t.M23] - e[t.M10] * e[t.M31] * e[t.M02] * e[t.M23] - e[t.M30] * e[t.M01] * e[t.M12] * e[t.M23] + e[t.M00] * e[t.M31] * e[t.M12] * e[t.M23] + e[t.M10] * e[t.M01] * e[t.M32] * e[t.M23] - e[t.M00] * e[t.M11] * e[t.M32] * e[t.M23] - e[t.M20] * e[t.M11] * e[t.M02] * e[t.M33] + e[t.M10] * e[t.M21] * e[t.M02] * e[t.M33] + e[t.M20] * e[t.M01] * e[t.M12] * e[t.M33] - e[t.M00] * e[t.M21] * e[t.M12] * e[t.M33] - e[t.M10] * e[t.M01] * e[t.M22] * e[t.M33] + e[t.M00] * e[t.M11] * e[t.M22] * e[t.M33];
                            if (0 == i) throw new Error("non-invertible matrix");
                            var r = 1 / i;
                            return n[t.M00] = e[t.M12] * e[t.M23] * e[t.M31] - e[t.M13] * e[t.M22] * e[t.M31] + e[t.M13] * e[t.M21] * e[t.M32] - e[t.M11] * e[t.M23] * e[t.M32] - e[t.M12] * e[t.M21] * e[t.M33] + e[t.M11] * e[t.M22] * e[t.M33], n[t.M01] = e[t.M03] * e[t.M22] * e[t.M31] - e[t.M02] * e[t.M23] * e[t.M31] - e[t.M03] * e[t.M21] * e[t.M32] + e[t.M01] * e[t.M23] * e[t.M32] + e[t.M02] * e[t.M21] * e[t.M33] - e[t.M01] * e[t.M22] * e[t.M33], n[t.M02] = e[t.M02] * e[t.M13] * e[t.M31] - e[t.M03] * e[t.M12] * e[t.M31] + e[t.M03] * e[t.M11] * e[t.M32] - e[t.M01] * e[t.M13] * e[t.M32] - e[t.M02] * e[t.M11] * e[t.M33] + e[t.M01] * e[t.M12] * e[t.M33], n[t.M03] = e[t.M03] * e[t.M12] * e[t.M21] - e[t.M02] * e[t.M13] * e[t.M21] - e[t.M03] * e[t.M11] * e[t.M22] + e[t.M01] * e[t.M13] * e[t.M22] + e[t.M02] * e[t.M11] * e[t.M23] - e[t.M01] * e[t.M12] * e[t.M23], n[t.M10] = e[t.M13] * e[t.M22] * e[t.M30] - e[t.M12] * e[t.M23] * e[t.M30] - e[t.M13] * e[t.M20] * e[t.M32] + e[t.M10] * e[t.M23] * e[t.M32] + e[t.M12] * e[t.M20] * e[t.M33] - e[t.M10] * e[t.M22] * e[t.M33], n[t.M11] = e[t.M02] * e[t.M23] * e[t.M30] - e[t.M03] * e[t.M22] * e[t.M30] + e[t.M03] * e[t.M20] * e[t.M32] - e[t.M00] * e[t.M23] * e[t.M32] - e[t.M02] * e[t.M20] * e[t.M33] + e[t.M00] * e[t.M22] * e[t.M33], n[t.M12] = e[t.M03] * e[t.M12] * e[t.M30] - e[t.M02] * e[t.M13] * e[t.M30] - e[t.M03] * e[t.M10] * e[t.M32] + e[t.M00] * e[t.M13] * e[t.M32] + e[t.M02] * e[t.M10] * e[t.M33] - e[t.M00] * e[t.M12] * e[t.M33], n[t.M13] = e[t.M02] * e[t.M13] * e[t.M20] - e[t.M03] * e[t.M12] * e[t.M20] + e[t.M03] * e[t.M10] * e[t.M22] - e[t.M00] * e[t.M13] * e[t.M22] - e[t.M02] * e[t.M10] * e[t.M23] + e[t.M00] * e[t.M12] * e[t.M23], n[t.M20] = e[t.M11] * e[t.M23] * e[t.M30] - e[t.M13] * e[t.M21] * e[t.M30] + e[t.M13] * e[t.M20] * e[t.M31] - e[t.M10] * e[t.M23] * e[t.M31] - e[t.M11] * e[t.M20] * e[t.M33] + e[t.M10] * e[t.M21] * e[t.M33], n[t.M21] = e[t.M03] * e[t.M21] * e[t.M30] - e[t.M01] * e[t.M23] * e[t.M30] - e[t.M03] * e[t.M20] * e[t.M31] + e[t.M00] * e[t.M23] * e[t.M31] + e[t.M01] * e[t.M20] * e[t.M33] - e[t.M00] * e[t.M21] * e[t.M33], n[t.M22] = e[t.M01] * e[t.M13] * e[t.M30] - e[t.M03] * e[t.M11] * e[t.M30] + e[t.M03] * e[t.M10] * e[t.M31] - e[t.M00] * e[t.M13] * e[t.M31] - e[t.M01] * e[t.M10] * e[t.M33] + e[t.M00] * e[t.M11] * e[t.M33], n[t.M23] = e[t.M03] * e[t.M11] * e[t.M20] - e[t.M01] * e[t.M13] * e[t.M20] - e[t.M03] * e[t.M10] * e[t.M21] + e[t.M00] * e[t.M13] * e[t.M21] + e[t.M01] * e[t.M10] * e[t.M23] - e[t.M00] * e[t.M11] * e[t.M23], n[t.M30] = e[t.M12] * e[t.M21] * e[t.M30] - e[t.M11] * e[t.M22] * e[t.M30] - e[t.M12] * e[t.M20] * e[t.M31] + e[t.M10] * e[t.M22] * e[t.M31] + e[t.M11] * e[t.M20] * e[t.M32] - e[t.M10] * e[t.M21] * e[t.M32], n[t.M31] = e[t.M01] * e[t.M22] * e[t.M30] - e[t.M02] * e[t.M21] * e[t.M30] + e[t.M02] * e[t.M20] * e[t.M31] - e[t.M00] * e[t.M22] * e[t.M31] - e[t.M01] * e[t.M20] * e[t.M32] + e[t.M00] * e[t.M21] * e[t.M32], n[t.M32] = e[t.M02] * e[t.M11] * e[t.M30] - e[t.M01] * e[t.M12] * e[t.M30] - e[t.M02] * e[t.M10] * e[t.M31] + e[t.M00] * e[t.M12] * e[t.M31] + e[t.M01] * e[t.M10] * e[t.M32] - e[t.M00] * e[t.M11] * e[t.M32], n[t.M33] = e[t.M01] * e[t.M12] * e[t.M20] - e[t.M02] * e[t.M11] * e[t.M20] + e[t.M02] * e[t.M10] * e[t.M21] - e[t.M00] * e[t.M12] * e[t.M21] - e[t.M01] * e[t.M10] * e[t.M22] + e[t.M00] * e[t.M11] * e[t.M22], e[t.M00] = n[t.M00] * r, e[t.M01] = n[t.M01] * r, e[t.M02] = n[t.M02] * r, e[t.M03] = n[t.M03] * r, e[t.M10] = n[t.M10] * r, e[t.M11] = n[t.M11] * r, e[t.M12] = n[t.M12] * r, e[t.M13] = n[t.M13] * r, e[t.M20] = n[t.M20] * r, e[t.M21] = n[t.M21] * r, e[t.M22] = n[t.M22] * r, e[t.M23] = n[t.M23] * r, e[t.M30] = n[t.M30] * r, e[t.M31] = n[t.M31] * r, e[t.M32] = n[t.M32] * r, e[t.M33] = n[t.M33] * r, this
                        }, e.prototype.determinant = function() {
                            var e = this.values;
                            return e[t.M30] * e[t.M21] * e[t.M12] * e[t.M03] - e[t.M20] * e[t.M31] * e[t.M12] * e[t.M03] - e[t.M30] * e[t.M11] * e[t.M22] * e[t.M03] + e[t.M10] * e[t.M31] * e[t.M22] * e[t.M03] + e[t.M20] * e[t.M11] * e[t.M32] * e[t.M03] - e[t.M10] * e[t.M21] * e[t.M32] * e[t.M03] - e[t.M30] * e[t.M21] * e[t.M02] * e[t.M13] + e[t.M20] * e[t.M31] * e[t.M02] * e[t.M13] + e[t.M30] * e[t.M01] * e[t.M22] * e[t.M13] - e[t.M00] * e[t.M31] * e[t.M22] * e[t.M13] - e[t.M20] * e[t.M01] * e[t.M32] * e[t.M13] + e[t.M00] * e[t.M21] * e[t.M32] * e[t.M13] + e[t.M30] * e[t.M11] * e[t.M02] * e[t.M23] - e[t.M10] * e[t.M31] * e[t.M02] * e[t.M23] - e[t.M30] * e[t.M01] * e[t.M12] * e[t.M23] + e[t.M00] * e[t.M31] * e[t.M12] * e[t.M23] + e[t.M10] * e[t.M01] * e[t.M32] * e[t.M23] - e[t.M00] * e[t.M11] * e[t.M32] * e[t.M23] - e[t.M20] * e[t.M11] * e[t.M02] * e[t.M33] + e[t.M10] * e[t.M21] * e[t.M02] * e[t.M33] + e[t.M20] * e[t.M01] * e[t.M12] * e[t.M33] - e[t.M00] * e[t.M21] * e[t.M12] * e[t.M33] - e[t.M10] * e[t.M01] * e[t.M22] * e[t.M33] + e[t.M00] * e[t.M11] * e[t.M22] * e[t.M33]
                        }, e.prototype.translate = function(e, n, i) {
                            var r = this.values;
                            return r[t.M03] += e, r[t.M13] += n, r[t.M23] += i, this
                        }, e.prototype.copy = function() {
                            return (new e).set(this.values)
                        }, e.prototype.projection = function(e, n, i, r) {
                            this.identity();
                            var s = 1 / Math.tan(i * (Math.PI / 180) / 2),
                                o = (n + e) / (e - n),
                                a = 2 * n * e / (e - n),
                                h = this.values;
                            return h[t.M00] = s / r, h[t.M10] = 0, h[t.M20] = 0, h[t.M30] = 0, h[t.M01] = 0, h[t.M11] = s, h[t.M21] = 0, h[t.M31] = 0, h[t.M02] = 0, h[t.M12] = 0, h[t.M22] = o, h[t.M32] = -1, h[t.M03] = 0, h[t.M13] = 0, h[t.M23] = a, h[t.M33] = 0, this
                        }, e.prototype.ortho2d = function(t, e, n, i) {
                            return this.ortho(t, t + n, e, e + i, 0, 1)
                        }, e.prototype.ortho = function(e, n, i, r, s, o) {
                            this.identity();
                            var a = 2 / (n - e),
                                h = 2 / (r - i),
                                l = -2 / (o - s),
                                u = -(n + e) / (n - e),
                                c = -(r + i) / (r - i),
                                f = -(o + s) / (o - s),
                                d = this.values;
                            return d[t.M00] = a, d[t.M10] = 0, d[t.M20] = 0, d[t.M30] = 0, d[t.M01] = 0, d[t.M11] = h, d[t.M21] = 0, d[t.M31] = 0, d[t.M02] = 0, d[t.M12] = 0, d[t.M22] = l, d[t.M32] = 0, d[t.M03] = u, d[t.M13] = c, d[t.M23] = f, d[t.M33] = 1, this
                        }, e.prototype.multiply = function(e) {
                            var n = this.temp,
                                i = this.values,
                                r = e.values;
                            return n[t.M00] = i[t.M00] * r[t.M00] + i[t.M01] * r[t.M10] + i[t.M02] * r[t.M20] + i[t.M03] * r[t.M30], n[t.M01] = i[t.M00] * r[t.M01] + i[t.M01] * r[t.M11] + i[t.M02] * r[t.M21] + i[t.M03] * r[t.M31], n[t.M02] = i[t.M00] * r[t.M02] + i[t.M01] * r[t.M12] + i[t.M02] * r[t.M22] + i[t.M03] * r[t.M32], n[t.M03] = i[t.M00] * r[t.M03] + i[t.M01] * r[t.M13] + i[t.M02] * r[t.M23] + i[t.M03] * r[t.M33], n[t.M10] = i[t.M10] * r[t.M00] + i[t.M11] * r[t.M10] + i[t.M12] * r[t.M20] + i[t.M13] * r[t.M30], n[t.M11] = i[t.M10] * r[t.M01] + i[t.M11] * r[t.M11] + i[t.M12] * r[t.M21] + i[t.M13] * r[t.M31], n[t.M12] = i[t.M10] * r[t.M02] + i[t.M11] * r[t.M12] + i[t.M12] * r[t.M22] + i[t.M13] * r[t.M32], n[t.M13] = i[t.M10] * r[t.M03] + i[t.M11] * r[t.M13] + i[t.M12] * r[t.M23] + i[t.M13] * r[t.M33], n[t.M20] = i[t.M20] * r[t.M00] + i[t.M21] * r[t.M10] + i[t.M22] * r[t.M20] + i[t.M23] * r[t.M30], n[t.M21] = i[t.M20] * r[t.M01] + i[t.M21] * r[t.M11] + i[t.M22] * r[t.M21] + i[t.M23] * r[t.M31], n[t.M22] = i[t.M20] * r[t.M02] + i[t.M21] * r[t.M12] + i[t.M22] * r[t.M22] + i[t.M23] * r[t.M32], n[t.M23] = i[t.M20] * r[t.M03] + i[t.M21] * r[t.M13] + i[t.M22] * r[t.M23] + i[t.M23] * r[t.M33], n[t.M30] = i[t.M30] * r[t.M00] + i[t.M31] * r[t.M10] + i[t.M32] * r[t.M20] + i[t.M33] * r[t.M30], n[t.M31] = i[t.M30] * r[t.M01] + i[t.M31] * r[t.M11] + i[t.M32] * r[t.M21] + i[t.M33] * r[t.M31], n[t.M32] = i[t.M30] * r[t.M02] + i[t.M31] * r[t.M12] + i[t.M32] * r[t.M22] + i[t.M33] * r[t.M32], n[t.M33] = i[t.M30] * r[t.M03] + i[t.M31] * r[t.M13] + i[t.M32] * r[t.M23] + i[t.M33] * r[t.M33], this.set(this.temp)
                        }, e.prototype.multiplyLeft = function(e) {
                            var n = this.temp,
                                i = this.values,
                                r = e.values;
                            return n[t.M00] = r[t.M00] * i[t.M00] + r[t.M01] * i[t.M10] + r[t.M02] * i[t.M20] + r[t.M03] * i[t.M30], n[t.M01] = r[t.M00] * i[t.M01] + r[t.M01] * i[t.M11] + r[t.M02] * i[t.M21] + r[t.M03] * i[t.M31], n[t.M02] = r[t.M00] * i[t.M02] + r[t.M01] * i[t.M12] + r[t.M02] * i[t.M22] + r[t.M03] * i[t.M32], n[t.M03] = r[t.M00] * i[t.M03] + r[t.M01] * i[t.M13] + r[t.M02] * i[t.M23] + r[t.M03] * i[t.M33], n[t.M10] = r[t.M10] * i[t.M00] + r[t.M11] * i[t.M10] + r[t.M12] * i[t.M20] + r[t.M13] * i[t.M30], n[t.M11] = r[t.M10] * i[t.M01] + r[t.M11] * i[t.M11] + r[t.M12] * i[t.M21] + r[t.M13] * i[t.M31], n[t.M12] = r[t.M10] * i[t.M02] + r[t.M11] * i[t.M12] + r[t.M12] * i[t.M22] + r[t.M13] * i[t.M32], n[t.M13] = r[t.M10] * i[t.M03] + r[t.M11] * i[t.M13] + r[t.M12] * i[t.M23] + r[t.M13] * i[t.M33], n[t.M20] = r[t.M20] * i[t.M00] + r[t.M21] * i[t.M10] + r[t.M22] * i[t.M20] + r[t.M23] * i[t.M30], n[t.M21] = r[t.M20] * i[t.M01] + r[t.M21] * i[t.M11] + r[t.M22] * i[t.M21] + r[t.M23] * i[t.M31], n[t.M22] = r[t.M20] * i[t.M02] + r[t.M21] * i[t.M12] + r[t.M22] * i[t.M22] + r[t.M23] * i[t.M32], n[t.M23] = r[t.M20] * i[t.M03] + r[t.M21] * i[t.M13] + r[t.M22] * i[t.M23] + r[t.M23] * i[t.M33], n[t.M30] = r[t.M30] * i[t.M00] + r[t.M31] * i[t.M10] + r[t.M32] * i[t.M20] + r[t.M33] * i[t.M30], n[t.M31] = r[t.M30] * i[t.M01] + r[t.M31] * i[t.M11] + r[t.M32] * i[t.M21] + r[t.M33] * i[t.M31], n[t.M32] = r[t.M30] * i[t.M02] + r[t.M31] * i[t.M12] + r[t.M32] * i[t.M22] + r[t.M33] * i[t.M32], n[t.M33] = r[t.M30] * i[t.M03] + r[t.M31] * i[t.M13] + r[t.M32] * i[t.M23] + r[t.M33] * i[t.M33], this.set(this.temp)
                        }, e.prototype.lookAt = function(n, i, r) {
                            e.initTemps();
                            var s = e.xAxis,
                                o = e.yAxis,
                                a = e.zAxis;
                            a.setFrom(i).normalize(), s.setFrom(i).normalize(), s.cross(r).normalize(), o.setFrom(s).cross(a).normalize(), this.identity();
                            var h = this.values;
                            return h[t.M00] = s.x, h[t.M01] = s.y, h[t.M02] = s.z, h[t.M10] = o.x, h[t.M11] = o.y, h[t.M12] = o.z, h[t.M20] = -a.x, h[t.M21] = -a.y, h[t.M22] = -a.z, e.tmpMatrix.identity(), e.tmpMatrix.values[t.M03] = -n.x, e.tmpMatrix.values[t.M13] = -n.y, e.tmpMatrix.values[t.M23] = -n.z, this.multiply(e.tmpMatrix), this
                        }, e.initTemps = function() {
                            null === e.xAxis && (e.xAxis = new t.Vector3), null === e.yAxis && (e.yAxis = new t.Vector3), null === e.zAxis && (e.zAxis = new t.Vector3)
                        }, e.xAxis = null, e.yAxis = null, e.zAxis = null, e.tmpMatrix = new e, e
                    }();
                    t.Matrix4 = e
                }(t.webgl || (t.webgl = {}))
            }(i || (i = {})),
            function(t) {
                ! function(t) {
                    var e = function() {
                        function e(e, n, i, r) {
                            this.attributes = n, this.verticesLength = 0, this.dirtyVertices = !1, this.indicesLength = 0, this.dirtyIndices = !1, this.elementsPerVertex = 0, this.context = e instanceof t.ManagedWebGLRenderingContext ? e : new t.ManagedWebGLRenderingContext(e), this.elementsPerVertex = 0;
                            for (var s = 0; s < n.length; s++) this.elementsPerVertex += n[s].numElements;
                            this.vertices = new Float32Array(i * this.elementsPerVertex), this.indices = new Uint16Array(r), this.context.addRestorable(this)
                        }
                        return e.prototype.getAttributes = function() {
                            return this.attributes
                        }, e.prototype.maxVertices = function() {
                            return this.vertices.length / this.elementsPerVertex
                        }, e.prototype.numVertices = function() {
                            return this.verticesLength / this.elementsPerVertex
                        }, e.prototype.setVerticesLength = function(t) {
                            this.dirtyVertices = !0, this.verticesLength = t
                        }, e.prototype.getVertices = function() {
                            return this.vertices
                        }, e.prototype.maxIndices = function() {
                            return this.indices.length
                        }, e.prototype.numIndices = function() {
                            return this.indicesLength
                        }, e.prototype.setIndicesLength = function(t) {
                            this.dirtyIndices = !0, this.indicesLength = t
                        }, e.prototype.getIndices = function() {
                            return this.indices
                        }, e.prototype.getVertexSizeInFloats = function() {
                            for (var t = 0, e = 0; e < this.attributes.length; e++) {
                                t += this.attributes[e].numElements
                            }
                            return t
                        }, e.prototype.setVertices = function(t) {
                            if (this.dirtyVertices = !0, t.length > this.vertices.length) throw Error("Mesh can't store more than " + this.maxVertices() + " vertices");
                            this.vertices.set(t, 0), this.verticesLength = t.length
                        }, e.prototype.setIndices = function(t) {
                            if (this.dirtyIndices = !0, t.length > this.indices.length) throw Error("Mesh can't store more than " + this.maxIndices() + " indices");
                            this.indices.set(t, 0), this.indicesLength = t.length
                        }, e.prototype.draw = function(t, e) {
                            this.drawWithOffset(t, e, 0, this.indicesLength > 0 ? this.indicesLength : this.verticesLength / this.elementsPerVertex)
                        }, e.prototype.drawWithOffset = function(t, e, n, i) {
                            var r = this.context.gl;
                            (this.dirtyVertices || this.dirtyIndices) && this.update(), this.bind(t), this.indicesLength > 0 ? r.drawElements(e, i, r.UNSIGNED_SHORT, 2 * n) : r.drawArrays(e, n, i), this.unbind(t)
                        }, e.prototype.bind = function(t) {
                            var e = this.context.gl;
                            e.bindBuffer(e.ARRAY_BUFFER, this.verticesBuffer);
                            for (var n = 0, i = 0; i < this.attributes.length; i++) {
                                var r = this.attributes[i],
                                    s = t.getAttributeLocation(r.name);
                                e.enableVertexAttribArray(s), e.vertexAttribPointer(s, r.numElements, e.FLOAT, !1, 4 * this.elementsPerVertex, 4 * n), n += r.numElements
                            }
                            this.indicesLength > 0 && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indicesBuffer)
                        }, e.prototype.unbind = function(t) {
                            for (var e = this.context.gl, n = 0; n < this.attributes.length; n++) {
                                var i = this.attributes[n],
                                    r = t.getAttributeLocation(i.name);
                                e.disableVertexAttribArray(r)
                            }
                            e.bindBuffer(e.ARRAY_BUFFER, null), this.indicesLength > 0 && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null)
                        }, e.prototype.update = function() {
                            var t = this.context.gl;
                            this.dirtyVertices && (this.verticesBuffer || (this.verticesBuffer = t.createBuffer()), t.bindBuffer(t.ARRAY_BUFFER, this.verticesBuffer), t.bufferData(t.ARRAY_BUFFER, this.vertices.subarray(0, this.verticesLength), t.DYNAMIC_DRAW), this.dirtyVertices = !1), this.dirtyIndices && (this.indicesBuffer || (this.indicesBuffer = t.createBuffer()), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indicesBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices.subarray(0, this.indicesLength), t.DYNAMIC_DRAW), this.dirtyIndices = !1)
                        }, e.prototype.restore = function() {
                            this.verticesBuffer = null, this.indicesBuffer = null, this.update()
                        }, e.prototype.dispose = function() {
                            this.context.removeRestorable(this);
                            var t = this.context.gl;
                            t.deleteBuffer(this.verticesBuffer), t.deleteBuffer(this.indicesBuffer)
                        }, e
                    }();
                    t.Mesh = e;
                    var n = function() {
                        return function(t, e, n) {
                            this.name = t, this.type = e, this.numElements = n
                        }
                    }();
                    t.VertexAttribute = n;
                    var i = function(e) {
                        function n() {
                            return e.call(this, t.Shader.POSITION, h.Float, 2) || this
                        }
                        return r(n, e), n
                    }(n);
                    t.Position2Attribute = i;
                    var s = function(e) {
                        function n() {
                            return e.call(this, t.Shader.POSITION, h.Float, 3) || this
                        }
                        return r(n, e), n
                    }(n);
                    t.Position3Attribute = s;
                    var o = function(e) {
                        function n(n) {
                            return void 0 === n && (n = 0), e.call(this, t.Shader.TEXCOORDS + (0 == n ? "" : n), h.Float, 2) || this
                        }
                        return r(n, e), n
                    }(n);
                    t.TexCoordAttribute = o;
                    var a = function(e) {
                        function n() {
                            return e.call(this, t.Shader.COLOR, h.Float, 4) || this
                        }
                        return r(n, e), n
                    }(n);
                    t.ColorAttribute = a;
                    var h, l = function(e) {
                        function n() {
                            return e.call(this, t.Shader.COLOR2, h.Float, 4) || this
                        }
                        return r(n, e), n
                    }(n);
                    t.Color2Attribute = l,
                        function(t) {
                            t[t.Float = 0] = "Float"
                        }(h = t.VertexAttributeType || (t.VertexAttributeType = {}))
                }(t.webgl || (t.webgl = {}))
            }(i || (i = {})),
            function(t) {
                ! function(t) {
                    var e = function() {
                        function e(e, n, i) {
                            if (void 0 === n && (n = !0), void 0 === i && (i = 10920), this.isDrawing = !1, this.shader = null, this.lastTexture = null, this.verticesLength = 0, this.indicesLength = 0, i > 10920) throw new Error("Can't have more than 10920 triangles per batch: " + i);
                            this.context = e instanceof t.ManagedWebGLRenderingContext ? e : new t.ManagedWebGLRenderingContext(e);
                            var r = n ? [new t.Position2Attribute, new t.ColorAttribute, new t.TexCoordAttribute, new t.Color2Attribute] : [new t.Position2Attribute, new t.ColorAttribute, new t.TexCoordAttribute];
                            this.mesh = new t.Mesh(e, r, i, 3 * i), this.srcBlend = this.context.gl.SRC_ALPHA, this.dstBlend = this.context.gl.ONE_MINUS_SRC_ALPHA
                        }
                        return e.prototype.begin = function(t) {
                            var e = this.context.gl;
                            if (this.isDrawing) throw new Error("PolygonBatch is already drawing. Call PolygonBatch.end() before calling PolygonBatch.begin()");
                            this.drawCalls = 0, this.shader = t, this.lastTexture = null, this.isDrawing = !0, e.enable(e.BLEND), e.blendFunc(this.srcBlend, this.dstBlend)
                        }, e.prototype.setBlendMode = function(t, e) {
                            var n = this.context.gl;
                            this.srcBlend = t, this.dstBlend = e, this.isDrawing && (this.flush(), n.blendFunc(this.srcBlend, this.dstBlend))
                        }, e.prototype.draw = function(t, e, n) {
                            t != this.lastTexture ? (this.flush(), this.lastTexture = t) : (this.verticesLength + e.length > this.mesh.getVertices().length || this.indicesLength + n.length > this.mesh.getIndices().length) && this.flush();
                            var i = this.mesh.numVertices();
                            this.mesh.getVertices().set(e, this.verticesLength), this.verticesLength += e.length, this.mesh.setVerticesLength(this.verticesLength);
                            for (var r = this.mesh.getIndices(), s = this.indicesLength, o = 0; o < n.length; s++, o++) r[s] = n[o] + i;
                            this.indicesLength += n.length, this.mesh.setIndicesLength(this.indicesLength)
                        }, e.prototype.flush = function() {
                            var t = this.context.gl;
                            0 != this.verticesLength && (this.lastTexture.bind(), this.mesh.draw(this.shader, t.TRIANGLES), this.verticesLength = 0, this.indicesLength = 0, this.mesh.setVerticesLength(0), this.mesh.setIndicesLength(0), this.drawCalls++)
                        }, e.prototype.end = function() {
                            var t = this.context.gl;
                            if (!this.isDrawing) throw new Error("PolygonBatch is not drawing. Call PolygonBatch.begin() before calling PolygonBatch.end()");
                            (this.verticesLength > 0 || this.indicesLength > 0) && this.flush(), this.shader = null, this.lastTexture = null, this.isDrawing = !1, t.disable(t.BLEND)
                        }, e.prototype.getDrawCalls = function() {
                            return this.drawCalls
                        }, e.prototype.dispose = function() {
                            this.mesh.dispose()
                        }, e
                    }();
                    t.PolygonBatcher = e
                }(t.webgl || (t.webgl = {}))
            }(i || (i = {})),
            function(t) {
                ! function(e) {
                    var n, i = function() {
                        function i(n, i, r) {
                            void 0 === r && (r = !0), this.twoColorTint = !1, this.activeRenderer = null, this.QUAD = [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0], this.QUAD_TRIANGLES = [0, 1, 2, 2, 3, 0], this.WHITE = new t.Color(1, 1, 1, 1), this.canvas = n, this.context = i instanceof e.ManagedWebGLRenderingContext ? i : new e.ManagedWebGLRenderingContext(i), this.twoColorTint = r, this.camera = new e.OrthoCamera(n.width, n.height), this.batcherShader = r ? e.Shader.newTwoColoredTextured(this.context) : e.Shader.newColoredTextured(this.context), this.batcher = new e.PolygonBatcher(this.context, r), this.shapesShader = e.Shader.newColored(this.context), this.shapes = new e.ShapeRenderer(this.context), this.skeletonRenderer = new e.SkeletonRenderer(this.context, r), this.skeletonDebugRenderer = new e.SkeletonDebugRenderer(this.context)
                        }
                        return i.prototype.begin = function() {
                            this.camera.update(), this.enableRenderer(this.batcher)
                        }, i.prototype.drawSkeleton = function(t, e, n, i) {
                            void 0 === e && (e = !1), void 0 === n && (n = -1), void 0 === i && (i = -1), this.enableRenderer(this.batcher), this.skeletonRenderer.premultipliedAlpha = e, this.skeletonRenderer.draw(this.batcher, t, n, i)
                        }, i.prototype.drawSkeletonDebug = function(t, e, n) {
                            void 0 === e && (e = !1), void 0 === n && (n = null), this.enableRenderer(this.shapes), this.skeletonDebugRenderer.premultipliedAlpha = e, this.skeletonDebugRenderer.draw(this.shapes, t, n)
                        }, i.prototype.drawTexture = function(t, e, n, i, r, s) {
                            void 0 === s && (s = null), this.enableRenderer(this.batcher), null === s && (s = this.WHITE);
                            var o = this.QUAD,
                                a = 0;
                            o[a++] = e, o[a++] = n, o[a++] = s.r, o[a++] = s.g, o[a++] = s.b, o[a++] = s.a, o[a++] = 0, o[a++] = 1, this.twoColorTint && (o[a++] = 0, o[a++] = 0, o[a++] = 0, o[a++] = 0), o[a++] = e + i, o[a++] = n, o[a++] = s.r, o[a++] = s.g, o[a++] = s.b, o[a++] = s.a, o[a++] = 1, o[a++] = 1, this.twoColorTint && (o[a++] = 0, o[a++] = 0, o[a++] = 0, o[a++] = 0), o[a++] = e + i, o[a++] = n + r, o[a++] = s.r, o[a++] = s.g, o[a++] = s.b, o[a++] = s.a, o[a++] = 1, o[a++] = 0, this.twoColorTint && (o[a++] = 0, o[a++] = 0, o[a++] = 0, o[a++] = 0), o[a++] = e, o[a++] = n + r, o[a++] = s.r, o[a++] = s.g, o[a++] = s.b, o[a++] = s.a, o[a++] = 0, o[a++] = 0, this.twoColorTint && (o[a++] = 0, o[a++] = 0, o[a++] = 0, o[a++] = 0), this.batcher.draw(t, o, this.QUAD_TRIANGLES)
                        }, i.prototype.drawTextureUV = function(t, e, n, i, r, s, o, a, h, l) {
                            void 0 === l && (l = null), this.enableRenderer(this.batcher), null === l && (l = this.WHITE);
                            var u = this.QUAD,
                                c = 0;
                            u[c++] = e, u[c++] = n, u[c++] = l.r, u[c++] = l.g, u[c++] = l.b, u[c++] = l.a, u[c++] = s, u[c++] = o, this.twoColorTint && (u[c++] = 0, u[c++] = 0, u[c++] = 0, u[c++] = 0), u[c++] = e + i, u[c++] = n, u[c++] = l.r, u[c++] = l.g, u[c++] = l.b, u[c++] = l.a, u[c++] = a, u[c++] = o, this.twoColorTint && (u[c++] = 0, u[c++] = 0, u[c++] = 0, u[c++] = 0), u[c++] = e + i, u[c++] = n + r, u[c++] = l.r, u[c++] = l.g, u[c++] = l.b, u[c++] = l.a, u[c++] = a, u[c++] = h, this.twoColorTint && (u[c++] = 0, u[c++] = 0, u[c++] = 0, u[c++] = 0), u[c++] = e, u[c++] = n + r, u[c++] = l.r, u[c++] = l.g, u[c++] = l.b, u[c++] = l.a, u[c++] = s, u[c++] = h, this.twoColorTint && (u[c++] = 0, u[c++] = 0, u[c++] = 0, u[c++] = 0), this.batcher.draw(t, u, this.QUAD_TRIANGLES)
                        }, i.prototype.drawTextureRotated = function(e, n, i, r, s, o, a, h, l, u) {
                            void 0 === l && (l = null), void 0 === u && (u = !1), this.enableRenderer(this.batcher), null === l && (l = this.WHITE);
                            var c = this.QUAD,
                                f = n + o,
                                d = i + a,
                                p = -o,
                                v = -a,
                                g = r - o,
                                m = s - a,
                                M = p,
                                x = v,
                                y = p,
                                w = m,
                                b = g,
                                E = m,
                                T = g,
                                A = v,
                                R = 0,
                                S = 0,
                                I = 0,
                                C = 0,
                                P = 0,
                                L = 0,
                                k = 0,
                                _ = 0;
                            if (0 != h) {
                                var F = t.MathUtils.cosDeg(h),
                                    V = t.MathUtils.sinDeg(h);
                                I = (P = F * b - V * E) + ((R = F * M - V * x) - (k = F * y - V * w)), C = (L = V * b + F * E) + ((S = V * M + F * x) - (_ = V * y + F * w))
                            } else R = M, S = x, k = y, _ = w, P = b, L = E, I = T, C = A;
                            R += f, S += d, I += f, C += d, P += f, L += d, k += f, _ += d;
                            var O = 0;
                            c[O++] = R, c[O++] = S, c[O++] = l.r, c[O++] = l.g, c[O++] = l.b, c[O++] = l.a, c[O++] = 0, c[O++] = 1, this.twoColorTint && (c[O++] = 0, c[O++] = 0, c[O++] = 0, c[O++] = 0), c[O++] = I, c[O++] = C, c[O++] = l.r, c[O++] = l.g, c[O++] = l.b, c[O++] = l.a, c[O++] = 1, c[O++] = 1, this.twoColorTint && (c[O++] = 0, c[O++] = 0, c[O++] = 0, c[O++] = 0), c[O++] = P, c[O++] = L, c[O++] = l.r, c[O++] = l.g, c[O++] = l.b, c[O++] = l.a, c[O++] = 1, c[O++] = 0, this.twoColorTint && (c[O++] = 0, c[O++] = 0, c[O++] = 0, c[O++] = 0), c[O++] = k, c[O++] = _, c[O++] = l.r, c[O++] = l.g, c[O++] = l.b, c[O++] = l.a, c[O++] = 0, c[O++] = 0, this.twoColorTint && (c[O++] = 0, c[O++] = 0, c[O++] = 0, c[O++] = 0), this.batcher.draw(e, c, this.QUAD_TRIANGLES)
                        }, i.prototype.drawRegion = function(t, e, n, i, r, s, o) {
                            void 0 === s && (s = null), void 0 === o && (o = !1), this.enableRenderer(this.batcher), null === s && (s = this.WHITE);
                            var a = this.QUAD,
                                h = 0;
                            a[h++] = e, a[h++] = n, a[h++] = s.r, a[h++] = s.g, a[h++] = s.b, a[h++] = s.a, a[h++] = t.u, a[h++] = t.v2, this.twoColorTint && (a[h++] = 0, a[h++] = 0, a[h++] = 0, a[h++] = 0), a[h++] = e + i, a[h++] = n, a[h++] = s.r, a[h++] = s.g, a[h++] = s.b, a[h++] = s.a, a[h++] = t.u2, a[h++] = t.v2, this.twoColorTint && (a[h++] = 0, a[h++] = 0, a[h++] = 0, a[h++] = 0), a[h++] = e + i, a[h++] = n + r, a[h++] = s.r, a[h++] = s.g, a[h++] = s.b, a[h++] = s.a, a[h++] = t.u2, a[h++] = t.v, this.twoColorTint && (a[h++] = 0, a[h++] = 0, a[h++] = 0, a[h++] = 0), a[h++] = e, a[h++] = n + r, a[h++] = s.r, a[h++] = s.g, a[h++] = s.b, a[h++] = s.a, a[h++] = t.u, a[h++] = t.v, this.twoColorTint && (a[h++] = 0, a[h++] = 0, a[h++] = 0, a[h++] = 0), this.batcher.draw(t.texture, a, this.QUAD_TRIANGLES)
                        }, i.prototype.line = function(t, e, n, i, r, s) {
                            void 0 === r && (r = null), void 0 === s && (s = null), this.enableRenderer(this.shapes), this.shapes.line(t, e, n, i, r)
                        }, i.prototype.triangle = function(t, e, n, i, r, s, o, a, h, l) {
                            void 0 === a && (a = null), void 0 === h && (h = null), void 0 === l && (l = null), this.enableRenderer(this.shapes), this.shapes.triangle(t, e, n, i, r, s, o, a, h, l)
                        }, i.prototype.quad = function(t, e, n, i, r, s, o, a, h, l, u, c, f) {
                            void 0 === l && (l = null), void 0 === u && (u = null), void 0 === c && (c = null), void 0 === f && (f = null), this.enableRenderer(this.shapes), this.shapes.quad(t, e, n, i, r, s, o, a, h, l, u, c, f)
                        }, i.prototype.rect = function(t, e, n, i, r, s) {
                            void 0 === s && (s = null), this.enableRenderer(this.shapes), this.shapes.rect(t, e, n, i, r, s)
                        }, i.prototype.rectLine = function(t, e, n, i, r, s, o) {
                            void 0 === o && (o = null), this.enableRenderer(this.shapes), this.shapes.rectLine(t, e, n, i, r, s, o)
                        }, i.prototype.polygon = function(t, e, n, i) {
                            void 0 === i && (i = null), this.enableRenderer(this.shapes), this.shapes.polygon(t, e, n, i)
                        }, i.prototype.circle = function(t, e, n, i, r, s) {
                            void 0 === r && (r = null), void 0 === s && (s = 0), this.enableRenderer(this.shapes), this.shapes.circle(t, e, n, i, r, s)
                        }, i.prototype.curve = function(t, e, n, i, r, s, o, a, h, l) {
                            void 0 === l && (l = null), this.enableRenderer(this.shapes), this.shapes.curve(t, e, n, i, r, s, o, a, h, l)
                        }, i.prototype.end = function() {
                            this.activeRenderer === this.batcher ? this.batcher.end() : this.activeRenderer === this.shapes && this.shapes.end(), this.activeRenderer = null
                        }, i.prototype.resize = function(t) {
                            var e = this.canvas,
                                i = e.clientWidth,
                                r = e.clientHeight;
                            if (e.width == i && e.height == r || (e.width = i, e.height = r), this.context.gl.viewport(0, 0, e.width, e.height), t === n.Stretch);
                            else if (t === n.Expand) this.camera.setViewport(i, r);
                            else if (t === n.Fit) {
                                var s = e.width,
                                    o = e.height,
                                    a = this.camera.viewportWidth,
                                    h = this.camera.viewportHeight,
                                    l = h / a < o / s ? a / s : h / o;
                                this.camera.viewportWidth = s * l, this.camera.viewportHeight = o * l
                            }
                            this.camera.update()
                        }, i.prototype.enableRenderer = function(t) {
                            this.activeRenderer !== t && (this.end(), t instanceof e.PolygonBatcher ? (this.batcherShader.bind(), this.batcherShader.setUniform4x4f(e.Shader.MVP_MATRIX, this.camera.projectionView.values), this.batcherShader.setUniformi("u_texture", 0), this.batcher.begin(this.batcherShader), this.activeRenderer = this.batcher) : t instanceof e.ShapeRenderer ? (this.shapesShader.bind(), this.shapesShader.setUniform4x4f(e.Shader.MVP_MATRIX, this.camera.projectionView.values), this.shapes.begin(this.shapesShader), this.activeRenderer = this.shapes) : this.activeRenderer = this.skeletonDebugRenderer)
                        }, i.prototype.dispose = function() {
                            this.batcher.dispose(), this.batcherShader.dispose(), this.shapes.dispose(), this.shapesShader.dispose(), this.skeletonDebugRenderer.dispose()
                        }, i
                    }();
                    e.SceneRenderer = i,
                        function(t) {
                            t[t.Stretch = 0] = "Stretch", t[t.Expand = 1] = "Expand", t[t.Fit = 2] = "Fit"
                        }(n = e.ResizeMode || (e.ResizeMode = {}))
                }(t.webgl || (t.webgl = {}))
            }(i || (i = {})),
            function(t) {
                ! function(t) {
                    var e = function() {
                        function e(e, n, i) {
                            this.vertexShader = n, this.fragmentShader = i, this.vs = null, this.fs = null, this.program = null, this.tmp2x2 = new Float32Array(4), this.tmp3x3 = new Float32Array(9), this.tmp4x4 = new Float32Array(16), this.vsSource = n, this.fsSource = i, this.context = e instanceof t.ManagedWebGLRenderingContext ? e : new t.ManagedWebGLRenderingContext(e), this.context.addRestorable(this), this.compile()
                        }
                        return e.prototype.getProgram = function() {
                            return this.program
                        }, e.prototype.getVertexShader = function() {
                            return this.vertexShader
                        }, e.prototype.getFragmentShader = function() {
                            return this.fragmentShader
                        }, e.prototype.getVertexShaderSource = function() {
                            return this.vsSource
                        }, e.prototype.getFragmentSource = function() {
                            return this.fsSource
                        }, e.prototype.compile = function() {
                            var t = this.context.gl;
                            try {
                                this.vs = this.compileShader(t.VERTEX_SHADER, this.vertexShader), this.fs = this.compileShader(t.FRAGMENT_SHADER, this.fragmentShader), this.program = this.compileProgram(this.vs, this.fs)
                            } catch (t) {
                                throw this.dispose(), t
                            }
                        }, e.prototype.compileShader = function(t, e) {
                            var n = this.context.gl,
                                i = n.createShader(t);
                            if (n.shaderSource(i, e), n.compileShader(i), !n.getShaderParameter(i, n.COMPILE_STATUS)) {
                                var r = "Couldn't compile shader: " + n.getShaderInfoLog(i);
                                if (n.deleteShader(i), !n.isContextLost()) throw new Error(r)
                            }
                            return i
                        }, e.prototype.compileProgram = function(t, e) {
                            var n = this.context.gl,
                                i = n.createProgram();
                            if (n.attachShader(i, t), n.attachShader(i, e), n.linkProgram(i), !n.getProgramParameter(i, n.LINK_STATUS)) {
                                var r = "Couldn't compile shader program: " + n.getProgramInfoLog(i);
                                if (n.deleteProgram(i), !n.isContextLost()) throw new Error(r)
                            }
                            return i
                        }, e.prototype.restore = function() {
                            this.compile()
                        }, e.prototype.bind = function() {
                            this.context.gl.useProgram(this.program)
                        }, e.prototype.unbind = function() {
                            this.context.gl.useProgram(null)
                        }, e.prototype.setUniformi = function(t, e) {
                            this.context.gl.uniform1i(this.getUniformLocation(t), e)
                        }, e.prototype.setUniformf = function(t, e) {
                            this.context.gl.uniform1f(this.getUniformLocation(t), e)
                        }, e.prototype.setUniform2f = function(t, e, n) {
                            this.context.gl.uniform2f(this.getUniformLocation(t), e, n)
                        }, e.prototype.setUniform3f = function(t, e, n, i) {
                            this.context.gl.uniform3f(this.getUniformLocation(t), e, n, i)
                        }, e.prototype.setUniform4f = function(t, e, n, i, r) {
                            this.context.gl.uniform4f(this.getUniformLocation(t), e, n, i, r)
                        }, e.prototype.setUniform2x2f = function(t, e) {
                            var n = this.context.gl;
                            this.tmp2x2.set(e), n.uniformMatrix2fv(this.getUniformLocation(t), !1, this.tmp2x2)
                        }, e.prototype.setUniform3x3f = function(t, e) {
                            var n = this.context.gl;
                            this.tmp3x3.set(e), n.uniformMatrix3fv(this.getUniformLocation(t), !1, this.tmp3x3)
                        }, e.prototype.setUniform4x4f = function(t, e) {
                            var n = this.context.gl;
                            this.tmp4x4.set(e), n.uniformMatrix4fv(this.getUniformLocation(t), !1, this.tmp4x4)
                        }, e.prototype.getUniformLocation = function(t) {
                            var e = this.context.gl,
                                n = e.getUniformLocation(this.program, t);
                            if (!n && !e.isContextLost()) throw new Error("Couldn't find location for uniform " + t);
                            return n
                        }, e.prototype.getAttributeLocation = function(t) {
                            var e = this.context.gl,
                                n = e.getAttribLocation(this.program, t);
                            if (-1 == n && !e.isContextLost()) throw new Error("Couldn't find location for attribute " + t);
                            return n
                        }, e.prototype.dispose = function() {
                            this.context.removeRestorable(this);
                            var t = this.context.gl;
                            this.vs && (t.deleteShader(this.vs), this.vs = null), this.fs && (t.deleteShader(this.fs), this.fs = null), this.program && (t.deleteProgram(this.program), this.program = null)
                        }, e.newColoredTextured = function(t) {
                            return new e(t, "\n\t\t\t\tattribute vec4 " + e.POSITION + ";\n\t\t\t\tattribute vec4 " + e.COLOR + ";\n\t\t\t\tattribute vec2 " + e.TEXCOORDS + ";\n\t\t\t\tuniform mat4 " + e.MVP_MATRIX + ";\n\t\t\t\tvarying vec4 v_color;\n\t\t\t\tvarying vec2 v_texCoords;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tv_color = " + e.COLOR + ";\n\t\t\t\t\tv_texCoords = " + e.TEXCOORDS + ";\n\t\t\t\t\tgl_Position = " + e.MVP_MATRIX + " * " + e.POSITION + ";\n\t\t\t\t}\n\t\t\t", "\n\t\t\t\t#ifdef GL_ES\n\t\t\t\t\t#define LOWP lowp\n\t\t\t\t\tprecision mediump float;\n\t\t\t\t#else\n\t\t\t\t\t#define LOWP\n\t\t\t\t#endif\n\t\t\t\tvarying LOWP vec4 v_color;\n\t\t\t\tvarying vec2 v_texCoords;\n\t\t\t\tuniform sampler2D u_texture;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tgl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n\t\t\t\t}\n\t\t\t")
                        }, e.newTwoColoredTextured = function(t) {
                            return new e(t, "\n\t\t\t\tattribute vec4 " + e.POSITION + ";\n\t\t\t\tattribute vec4 " + e.COLOR + ";\n\t\t\t\tattribute vec4 " + e.COLOR2 + ";\n\t\t\t\tattribute vec2 " + e.TEXCOORDS + ";\n\t\t\t\tuniform mat4 " + e.MVP_MATRIX + ";\n\t\t\t\tvarying vec4 v_light;\n\t\t\t\tvarying vec4 v_dark;\n\t\t\t\tvarying vec2 v_texCoords;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tv_light = " + e.COLOR + ";\n\t\t\t\t\tv_dark = " + e.COLOR2 + ";\n\t\t\t\t\tv_texCoords = " + e.TEXCOORDS + ";\n\t\t\t\t\tgl_Position = " + e.MVP_MATRIX + " * " + e.POSITION + ";\n\t\t\t\t}\n\t\t\t", "\n\t\t\t\t#ifdef GL_ES\n\t\t\t\t\t#define LOWP lowp\n\t\t\t\t\tprecision mediump float;\n\t\t\t\t#else\n\t\t\t\t\t#define LOWP\n\t\t\t\t#endif\n\t\t\t\tvarying LOWP vec4 v_light;\n\t\t\t\tvarying LOWP vec4 v_dark;\n\t\t\t\tvarying vec2 v_texCoords;\n\t\t\t\tuniform sampler2D u_texture;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tvec4 texColor = texture2D(u_texture, v_texCoords);\n\t\t\t\t\tgl_FragColor.a = texColor.a * v_light.a;\n\t\t\t\t\tgl_FragColor.rgb = ((texColor.a - 1.0) * v_dark.a + 1.0 - texColor.rgb) * v_dark.rgb + texColor.rgb * v_light.rgb;\n\t\t\t\t}\n\t\t\t")
                        }, e.newColored = function(t) {
                            return new e(t, "\n\t\t\t\tattribute vec4 " + e.POSITION + ";\n\t\t\t\tattribute vec4 " + e.COLOR + ";\n\t\t\t\tuniform mat4 " + e.MVP_MATRIX + ";\n\t\t\t\tvarying vec4 v_color;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tv_color = " + e.COLOR + ";\n\t\t\t\t\tgl_Position = " + e.MVP_MATRIX + " * " + e.POSITION + ";\n\t\t\t\t}\n\t\t\t", "\n\t\t\t\t#ifdef GL_ES\n\t\t\t\t\t#define LOWP lowp\n\t\t\t\t\tprecision mediump float;\n\t\t\t\t#else\n\t\t\t\t\t#define LOWP\n\t\t\t\t#endif\n\t\t\t\tvarying LOWP vec4 v_color;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tgl_FragColor = v_color;\n\t\t\t\t}\n\t\t\t")
                        }, e.MVP_MATRIX = "u_projTrans", e.POSITION = "a_position", e.COLOR = "a_color", e.COLOR2 = "a_color2", e.TEXCOORDS = "a_texCoords", e.SAMPLER = "u_texture", e
                    }();
                    t.Shader = e
                }(t.webgl || (t.webgl = {}))
            }(i || (i = {})),
            function(t) {
                ! function(e) {
                    var n, i = function() {
                        function i(i, r) {
                            if (void 0 === r && (r = 10920), this.isDrawing = !1, this.shapeType = n.Filled, this.color = new t.Color(1, 1, 1, 1), this.vertexIndex = 0, this.tmp = new t.Vector2, r > 10920) throw new Error("Can't have more than 10920 triangles per batch: " + r);
                            this.context = i instanceof e.ManagedWebGLRenderingContext ? i : new e.ManagedWebGLRenderingContext(i), this.mesh = new e.Mesh(i, [new e.Position2Attribute, new e.ColorAttribute], r, 0), this.srcBlend = this.context.gl.SRC_ALPHA, this.dstBlend = this.context.gl.ONE_MINUS_SRC_ALPHA
                        }
                        return i.prototype.begin = function(t) {
                            if (this.isDrawing) throw new Error("ShapeRenderer.begin() has already been called");
                            this.shader = t, this.vertexIndex = 0, this.isDrawing = !0;
                            var e = this.context.gl;
                            e.enable(e.BLEND), e.blendFunc(this.srcBlend, this.dstBlend)
                        }, i.prototype.setBlendMode = function(t, e) {
                            var n = this.context.gl;
                            this.srcBlend = t, this.dstBlend = e, this.isDrawing && (this.flush(), n.blendFunc(this.srcBlend, this.dstBlend))
                        }, i.prototype.setColor = function(t) {
                            this.color.setFromColor(t)
                        }, i.prototype.setColorWith = function(t, e, n, i) {
                            this.color.set(t, e, n, i)
                        }, i.prototype.point = function(t, e, i) {
                            void 0 === i && (i = null), this.check(n.Point, 1), null === i && (i = this.color), this.vertex(t, e, i)
                        }, i.prototype.line = function(t, e, i, r, s) {
                            void 0 === s && (s = null), this.check(n.Line, 2);
                            this.mesh.getVertices(), this.vertexIndex;
                            null === s && (s = this.color), this.vertex(t, e, s), this.vertex(i, r, s)
                        }, i.prototype.triangle = function(t, e, i, r, s, o, a, h, l, u) {
                            void 0 === h && (h = null), void 0 === l && (l = null), void 0 === u && (u = null), this.check(t ? n.Filled : n.Line, 3);
                            this.mesh.getVertices(), this.vertexIndex;
                            null === h && (h = this.color), null === l && (l = this.color), null === u && (u = this.color), t ? (this.vertex(e, i, h), this.vertex(r, s, l), this.vertex(o, a, u)) : (this.vertex(e, i, h), this.vertex(r, s, l), this.vertex(r, s, h), this.vertex(o, a, l), this.vertex(o, a, h), this.vertex(e, i, l))
                        }, i.prototype.quad = function(t, e, i, r, s, o, a, h, l, u, c, f, d) {
                            void 0 === u && (u = null), void 0 === c && (c = null), void 0 === f && (f = null), void 0 === d && (d = null), this.check(t ? n.Filled : n.Line, 3);
                            this.mesh.getVertices(), this.vertexIndex;
                            null === u && (u = this.color), null === c && (c = this.color), null === f && (f = this.color), null === d && (d = this.color), t ? (this.vertex(e, i, u), this.vertex(r, s, c), this.vertex(o, a, f), this.vertex(o, a, f), this.vertex(h, l, d), this.vertex(e, i, u)) : (this.vertex(e, i, u), this.vertex(r, s, c), this.vertex(r, s, c), this.vertex(o, a, f), this.vertex(o, a, f), this.vertex(h, l, d), this.vertex(h, l, d), this.vertex(e, i, u))
                        }, i.prototype.rect = function(t, e, n, i, r, s) {
                            void 0 === s && (s = null), this.quad(t, e, n, e + i, n, e + i, n + r, e, n + r, s, s, s, s)
                        }, i.prototype.rectLine = function(t, e, i, r, s, o, a) {
                            void 0 === a && (a = null), this.check(t ? n.Filled : n.Line, 8), null === a && (a = this.color);
                            var h = this.tmp.set(s - i, e - r);
                            h.normalize(), o *= .5;
                            var l = h.x * o,
                                u = h.y * o;
                            t ? (this.vertex(e + l, i + u, a), this.vertex(e - l, i - u, a), this.vertex(r + l, s + u, a), this.vertex(r - l, s - u, a), this.vertex(r + l, s + u, a), this.vertex(e - l, i - u, a)) : (this.vertex(e + l, i + u, a), this.vertex(e - l, i - u, a), this.vertex(r + l, s + u, a), this.vertex(r - l, s - u, a), this.vertex(r + l, s + u, a), this.vertex(e + l, i + u, a), this.vertex(r - l, s - u, a), this.vertex(e - l, i - u, a))
                        }, i.prototype.x = function(t, e, n) {
                            this.line(t - n, e - n, t + n, e + n), this.line(t - n, e + n, t + n, e - n)
                        }, i.prototype.polygon = function(t, e, i, r) {
                            if (void 0 === r && (r = null), i < 3) throw new Error("Polygon must contain at least 3 vertices");
                            this.check(n.Line, 2 * i), null === r && (r = this.color);
                            this.mesh.getVertices(), this.vertexIndex;
                            i <<= 1;
                            for (var s = t[e <<= 1], o = t[e + 1], a = e + i, h = e, l = e + i - 2; h < l; h += 2) {
                                var u = t[h],
                                    c = t[h + 1],
                                    f = 0,
                                    d = 0;
                                h + 2 >= a ? (f = s, d = o) : (f = t[h + 2], d = t[h + 3]), this.vertex(u, c, r), this.vertex(f, d, r)
                            }
                        }, i.prototype.circle = function(e, i, r, s, o, a) {
                            if (void 0 === o && (o = null), void 0 === a && (a = 0), 0 === a && (a = Math.max(1, 6 * t.MathUtils.cbrt(s) | 0)), a <= 0) throw new Error("segments must be > 0.");
                            null === o && (o = this.color);
                            var h = 2 * t.MathUtils.PI / a,
                                l = Math.cos(h),
                                u = Math.sin(h),
                                c = s,
                                f = 0;
                            if (e) {
                                this.check(n.Filled, 3 * a + 3), a--;
                                for (p = 0; p < a; p++) {
                                    this.vertex(i, r, o), this.vertex(i + c, r + f, o);
                                    var d = c;
                                    c = l * c - u * f, f = u * d + l * f, this.vertex(i + c, r + f, o)
                                }
                                this.vertex(i, r, o), this.vertex(i + c, r + f, o)
                            } else {
                                this.check(n.Line, 2 * a + 2);
                                for (var p = 0; p < a; p++) {
                                    this.vertex(i + c, r + f, o);
                                    var v = c;
                                    c = l * c - u * f, f = u * v + l * f, this.vertex(i + c, r + f, o)
                                }
                                this.vertex(i + c, r + f, o)
                            }
                            c = s, f = 0, this.vertex(i + c, r + f, o)
                        }, i.prototype.curve = function(t, e, i, r, s, o, a, h, l, u) {
                            void 0 === u && (u = null), this.check(n.Line, 2 * l + 2), null === u && (u = this.color);
                            for (var c = 1 / l, f = c * c, d = c * c * c, p = 3 * c, v = 3 * f, g = 6 * f, m = 6 * d, M = t - 2 * i + s, x = e - 2 * r + o, y = 3 * (i - s) - t + a, w = 3 * (r - o) - e + h, b = t, E = e, T = (i - t) * p + M * v + y * d, A = (r - e) * p + x * v + w * d, R = M * g + y * m, S = x * g + w * m, I = y * m, C = w * m; l-- > 0;) this.vertex(b, E, u), b += T, E += A, T += R, A += S, R += I, S += C, this.vertex(b, E, u);
                            this.vertex(b, E, u), this.vertex(a, h, u)
                        }, i.prototype.vertex = function(t, e, n) {
                            var i = this.vertexIndex,
                                r = this.mesh.getVertices();
                            r[i++] = t, r[i++] = e, r[i++] = n.r, r[i++] = n.g, r[i++] = n.b, r[i++] = n.a, this.vertexIndex = i
                        }, i.prototype.end = function() {
                            if (!this.isDrawing) throw new Error("ShapeRenderer.begin() has not been called");
                            this.flush(), this.context.gl.disable(this.context.gl.BLEND), this.isDrawing = !1
                        }, i.prototype.flush = function() {
                            0 != this.vertexIndex && (this.mesh.setVerticesLength(this.vertexIndex), this.mesh.draw(this.shader, this.shapeType), this.vertexIndex = 0)
                        }, i.prototype.check = function(t, e) {
                            if (!this.isDrawing) throw new Error("ShapeRenderer.begin() has not been called");
                            if (this.shapeType == t) {
                                if (!(this.mesh.maxVertices() - this.mesh.numVertices() < e)) return;
                                this.flush()
                            } else this.flush(), this.shapeType = t
                        }, i.prototype.dispose = function() {
                            this.mesh.dispose()
                        }, i
                    }();
                    e.ShapeRenderer = i,
                        function(t) {
                            t[t.Point = 0] = "Point", t[t.Line = 1] = "Line", t[t.Filled = 4] = "Filled"
                        }(n = e.ShapeType || (e.ShapeType = {}))
                }(t.webgl || (t.webgl = {}))
            }(i || (i = {})),
            function(t) {
                ! function(e) {
                    var n = function() {
                        function n(n) {
                            this.boneLineColor = new t.Color(1, 0, 0, 1), this.boneOriginColor = new t.Color(0, 1, 0, 1), this.attachmentLineColor = new t.Color(0, 0, 1, .5), this.triangleLineColor = new t.Color(1, .64, 0, .5), this.pathColor = (new t.Color).setFromString("FF7F00"), this.clipColor = new t.Color(.8, 0, 0, 2), this.aabbColor = new t.Color(0, 1, 0, .5), this.drawBones = !0, this.drawRegionAttachments = !0, this.drawBoundingBoxes = !0, this.drawMeshHull = !0, this.drawMeshTriangles = !0, this.drawPaths = !0, this.drawSkeletonXY = !1, this.drawClipping = !0, this.premultipliedAlpha = !1, this.scale = 1, this.boneWidth = 2, this.bounds = new t.SkeletonBounds, this.temp = new Array, this.vertices = t.Utils.newFloatArray(2048), this.context = n instanceof e.ManagedWebGLRenderingContext ? n : new e.ManagedWebGLRenderingContext(n)
                        }
                        return n.prototype.draw = function(e, i, r) {
                            void 0 === r && (r = null);
                            var s = i.x,
                                o = i.y,
                                a = this.context.gl,
                                h = this.premultipliedAlpha ? a.ONE : a.SRC_ALPHA;
                            e.setBlendMode(h, a.ONE_MINUS_SRC_ALPHA);
                            var l = i.bones;
                            if (this.drawBones) {
                                e.setColor(this.boneLineColor);
                                for (var u = 0, c = l.length; u < c; u++) {
                                    var f = l[u];
                                    if (!(r && r.indexOf(f.data.name) > -1) && null != f.parent) {
                                        var d = s + f.data.length * f.a + f.worldX,
                                            p = o + f.data.length * f.c + f.worldY;
                                        e.rectLine(!0, s + f.worldX, o + f.worldY, d, p, this.boneWidth * this.scale)
                                    }
                                }
                                this.drawSkeletonXY && e.x(s, o, 4 * this.scale)
                            }
                            if (this.drawRegionAttachments) {
                                e.setColor(this.attachmentLineColor);
                                for (u = 0, c = (Y = i.slots).length; u < c; u++) {
                                    if ((W = (z = Y[u]).getAttachment()) instanceof t.RegionAttachment) {
                                        var v = W,
                                            g = this.vertices;
                                        v.computeWorldVertices(z.bone, g, 0, 2), e.line(g[0], g[1], g[2], g[3]), e.line(g[2], g[3], g[4], g[5]), e.line(g[4], g[5], g[6], g[7]), e.line(g[6], g[7], g[0], g[1])
                                    }
                                }
                            }
                            if (this.drawMeshHull || this.drawMeshTriangles)
                                for (u = 0, c = (Y = i.slots).length; u < c; u++) {
                                    if ((z = Y[u]).bone.active)
                                        if ((W = z.getAttachment()) instanceof t.MeshAttachment) {
                                            var m = W;
                                            g = this.vertices;
                                            m.computeWorldVertices(z, 0, m.worldVerticesLength, g, 0, 2);
                                            var M = m.triangles,
                                                x = m.hullLength;
                                            if (this.drawMeshTriangles) {
                                                e.setColor(this.triangleLineColor);
                                                for (var y = 0, w = M.length; y < w; y += 3) {
                                                    var b = 2 * M[y],
                                                        E = 2 * M[y + 1],
                                                        T = 2 * M[y + 2];
                                                    e.triangle(!1, g[b], g[b + 1], g[E], g[E + 1], g[T], g[T + 1])
                                                }
                                            }
                                            if (this.drawMeshHull && x > 0) {
                                                e.setColor(this.attachmentLineColor);
                                                var A = g[(x = 2 * (x >> 1)) - 2],
                                                    R = g[x - 1];
                                                for (y = 0, w = x; y < w; y += 2) {
                                                    d = g[y], p = g[y + 1];
                                                    e.line(d, p, A, R), A = d, R = p
                                                }
                                            }
                                        }
                                }
                            if (this.drawBoundingBoxes) {
                                var S = this.bounds;
                                S.update(i, !0), e.setColor(this.aabbColor), e.rect(!1, S.minX, S.minY, S.getWidth(), S.getHeight());
                                var I = S.polygons,
                                    C = S.boundingBoxes;
                                for (u = 0, c = I.length; u < c; u++) {
                                    var P = I[u];
                                    e.setColor(C[u].color), e.polygon(P, 0, P.length)
                                }
                            }
                            if (this.drawPaths)
                                for (u = 0, c = (Y = i.slots).length; u < c; u++) {
                                    if ((z = Y[u]).bone.active)
                                        if ((W = z.getAttachment()) instanceof t.PathAttachment) {
                                            var L = W,
                                                k = (w = L.worldVerticesLength, this.temp = t.Utils.setArraySize(this.temp, w, 0));
                                            L.computeWorldVertices(z, 0, w, k, 0, 2);
                                            var _ = this.pathColor,
                                                F = k[2],
                                                V = k[3],
                                                O = 0,
                                                D = 0;
                                            if (L.closed) {
                                                e.setColor(_);
                                                var N = k[0],
                                                    U = k[1],
                                                    X = k[w - 2],
                                                    B = k[w - 1];
                                                O = k[w - 4], D = k[w - 3], e.curve(F, V, N, U, X, B, O, D, 32), e.setColor(n.LIGHT_GRAY), e.line(F, V, N, U), e.line(O, D, X, B)
                                            }
                                            w -= 4;
                                            for (y = 4; y < w; y += 6) {
                                                N = k[y], U = k[y + 1], X = k[y + 2], B = k[y + 3];
                                                O = k[y + 4], D = k[y + 5], e.setColor(_), e.curve(F, V, N, U, X, B, O, D, 32), e.setColor(n.LIGHT_GRAY), e.line(F, V, N, U), e.line(O, D, X, B), F = O, V = D
                                            }
                                        }
                                }
                            if (this.drawBones) {
                                e.setColor(this.boneOriginColor);
                                for (u = 0, c = l.length; u < c; u++) {
                                    f = l[u];
                                    r && r.indexOf(f.data.name) > -1 || e.circle(!0, s + f.worldX, o + f.worldY, 3 * this.scale, n.GREEN, 8)
                                }
                            }
                            if (this.drawClipping) {
                                var Y = i.slots;
                                e.setColor(this.clipColor);
                                for (u = 0, c = Y.length; u < c; u++) {
                                    var z, W;
                                    if ((z = Y[u]).bone.active)
                                        if ((W = z.getAttachment()) instanceof t.ClippingAttachment) {
                                            var q = W;
                                            w = q.worldVerticesLength, k = this.temp = t.Utils.setArraySize(this.temp, w, 0);
                                            q.computeWorldVertices(z, 0, w, k, 0, 2);
                                            for (var G = 0, H = k.length; G < H; G += 2) {
                                                d = k[G], p = k[G + 1], O = k[(G + 2) % k.length], D = k[(G + 3) % k.length];
                                                e.line(d, p, O, D)
                                            }
                                        }
                                }
                            }
                        }, n.prototype.dispose = function() {}, n.LIGHT_GRAY = new t.Color(192 / 255, 192 / 255, 192 / 255, 1), n.GREEN = new t.Color(0, 1, 0, 1), n
                    }();
                    e.SkeletonDebugRenderer = n
                }(t.webgl || (t.webgl = {}))
            }(i || (i = {})),
            function(t) {
                ! function(e) {
                    var n = function() {
                            return function(t, e, n) {
                                this.vertices = t, this.numVertices = e, this.numFloats = n
                            }
                        }(),
                        i = function() {
                            function i(e, i) {
                                void 0 === i && (i = !0), this.premultipliedAlpha = !1, this.vertexEffect = null, this.tempColor = new t.Color, this.tempColor2 = new t.Color, this.vertexSize = 8, this.twoColorTint = !1, this.renderable = new n(null, 0, 0), this.clipper = new t.SkeletonClipping, this.temp = new t.Vector2, this.temp2 = new t.Vector2, this.temp3 = new t.Color, this.temp4 = new t.Color, this.twoColorTint = i, i && (this.vertexSize += 4), this.vertices = t.Utils.newFloatArray(1024 * this.vertexSize)
                            }
                            return i.prototype.draw = function(n, r, s, o) {
                                void 0 === s && (s = -1), void 0 === o && (o = -1);
                                var a = this.clipper,
                                    h = this.premultipliedAlpha,
                                    l = this.twoColorTint,
                                    u = null,
                                    c = this.temp,
                                    f = this.temp2,
                                    d = this.temp3,
                                    p = this.temp4,
                                    v = this.renderable,
                                    g = null,
                                    m = null,
                                    M = r.drawOrder,
                                    x = null,
                                    y = r.color,
                                    w = l ? 12 : 8,
                                    b = !1; - 1 == s && (b = !0);
                                for (var E = 0, T = M.length; E < T; E++) {
                                    var A = a.isClipping() ? 2 : w,
                                        R = M[E];
                                    if (R.bone.active)
                                        if (s >= 0 && s == R.data.index && (b = !0), b) {
                                            o >= 0 && o == R.data.index && (b = !1);
                                            var S = R.getAttachment(),
                                                I = null;
                                            if (S instanceof t.RegionAttachment) {
                                                var C = S;
                                                v.vertices = this.vertices, v.numVertices = 4, v.numFloats = A << 2, C.computeWorldVertices(R.bone, v.vertices, 0, A), m = i.QUAD_TRIANGLES, g = C.uvs, I = C.region.renderObject.texture, x = C.color
                                            } else {
                                                if (!(S instanceof t.MeshAttachment)) {
                                                    if (S instanceof t.ClippingAttachment) {
                                                        var P = S;
                                                        a.clipStart(R, P);
                                                        continue
                                                    }
                                                    a.clipEndWithSlot(R);
                                                    continue
                                                }
                                                var L = S;
                                                v.vertices = this.vertices, v.numVertices = L.worldVerticesLength >> 1, v.numFloats = v.numVertices * A, v.numFloats > v.vertices.length && (v.vertices = this.vertices = t.Utils.newFloatArray(v.numFloats)), L.computeWorldVertices(R, 0, L.worldVerticesLength, v.vertices, 0, A), m = L.triangles, I = L.region.renderObject.texture, g = L.uvs, x = L.color
                                            }
                                            if (null != I) {
                                                var k = R.color,
                                                    _ = this.tempColor;
                                                _.r = y.r * k.r * x.r, _.g = y.g * k.g * x.g, _.b = y.b * k.b * x.b, _.a = y.a * k.a * x.a, h && (_.r *= _.a, _.g *= _.a, _.b *= _.a);
                                                var F = this.tempColor2;
                                                null == R.darkColor ? F.set(0, 0, 0, 1) : (h ? (F.r = R.darkColor.r * _.a, F.g = R.darkColor.g * _.a, F.b = R.darkColor.b * _.a) : F.setFromColor(R.darkColor), F.a = h ? 1 : 0);
                                                var V = R.data.blendMode;
                                                if (V != u && (u = V, n.setBlendMode(e.WebGLBlendModeConverter.getSourceGLBlendMode(u, h), e.WebGLBlendModeConverter.getDestGLBlendMode(u))), a.isClipping()) {
                                                    a.clipTriangles(v.vertices, v.numFloats, m, m.length, g, _, F, l);
                                                    var O = new Float32Array(a.clippedVertices),
                                                        D = a.clippedTriangles;
                                                    if (null != this.vertexEffect) {
                                                        var N = this.vertexEffect,
                                                            U = O;
                                                        if (l) {
                                                            B = 0;
                                                            for (var X = O.length; B < X; B += w) c.x = U[B], c.y = U[B + 1], d.set(U[B + 2], U[B + 3], U[B + 4], U[B + 5]), f.x = U[B + 6], f.y = U[B + 7], p.set(U[B + 8], U[B + 9], U[B + 10], U[B + 11]), N.transform(c, f, d, p), U[B] = c.x, U[B + 1] = c.y, U[B + 2] = d.r, U[B + 3] = d.g, U[B + 4] = d.b, U[B + 5] = d.a, U[B + 6] = f.x, U[B + 7] = f.y, U[B + 8] = p.r, U[B + 9] = p.g, U[B + 10] = p.b, U[B + 11] = p.a
                                                        } else
                                                            for (var B = 0, Y = O.length; B < Y; B += w) c.x = U[B], c.y = U[B + 1], d.set(U[B + 2], U[B + 3], U[B + 4], U[B + 5]), f.x = U[B + 6], f.y = U[B + 7], p.set(0, 0, 0, 0), N.transform(c, f, d, p), U[B] = c.x, U[B + 1] = c.y, U[B + 2] = d.r, U[B + 3] = d.g, U[B + 4] = d.b, U[B + 5] = d.a, U[B + 6] = f.x, U[B + 7] = f.y
                                                    }
                                                    n.draw(I, O, D)
                                                } else {
                                                    U = v.vertices;
                                                    if (null != this.vertexEffect) {
                                                        N = this.vertexEffect;
                                                        if (l) {
                                                            B = 0, W = 0;
                                                            for (var z = v.numFloats; B < z; B += w, W += 2) c.x = U[B], c.y = U[B + 1], f.x = g[W], f.y = g[W + 1], d.setFromColor(_), p.setFromColor(F), N.transform(c, f, d, p), U[B] = c.x, U[B + 1] = c.y, U[B + 2] = d.r, U[B + 3] = d.g, U[B + 4] = d.b, U[B + 5] = d.a, U[B + 6] = f.x, U[B + 7] = f.y, U[B + 8] = p.r, U[B + 9] = p.g, U[B + 10] = p.b, U[B + 11] = p.a
                                                        } else
                                                            for (var B = 0, W = 0, q = v.numFloats; B < q; B += w, W += 2) c.x = U[B], c.y = U[B + 1], f.x = g[W], f.y = g[W + 1], d.setFromColor(_), p.set(0, 0, 0, 0), N.transform(c, f, d, p), U[B] = c.x, U[B + 1] = c.y, U[B + 2] = d.r, U[B + 3] = d.g, U[B + 4] = d.b, U[B + 5] = d.a, U[B + 6] = f.x, U[B + 7] = f.y
                                                    } else if (l) {
                                                        B = 2, W = 0;
                                                        for (var G = v.numFloats; B < G; B += w, W += 2) U[B] = _.r, U[B + 1] = _.g, U[B + 2] = _.b, U[B + 3] = _.a, U[B + 4] = g[W], U[B + 5] = g[W + 1], U[B + 6] = F.r, U[B + 7] = F.g, U[B + 8] = F.b, U[B + 9] = F.a
                                                    } else {
                                                        B = 2;
                                                        for (var W = 0, H = v.numFloats; B < H; B += w, W += 2) U[B] = _.r, U[B + 1] = _.g, U[B + 2] = _.b, U[B + 3] = _.a, U[B + 4] = g[W], U[B + 5] = g[W + 1]
                                                    }
                                                    var j = v.vertices.subarray(0, v.numFloats);
                                                    n.draw(I, j, m)
                                                }
                                            }
                                            a.clipEndWithSlot(R)
                                        } else a.clipEndWithSlot(R);
                                    else a.clipEndWithSlot(R)
                                }
                                a.clipEnd()
                            }, i.QUAD_TRIANGLES = [0, 1, 2, 2, 3, 0], i
                        }();
                    e.SkeletonRenderer = i
                }(t.webgl || (t.webgl = {}))
            }(i || (i = {})),
            function(t) {
                ! function(t) {
                    var e = function() {
                        function e(t, e, n) {
                            void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === n && (n = 0), this.x = 0, this.y = 0, this.z = 0, this.x = t, this.y = e, this.z = n
                        }
                        return e.prototype.setFrom = function(t) {
                            return this.x = t.x, this.y = t.y, this.z = t.z, this
                        }, e.prototype.set = function(t, e, n) {
                            return this.x = t, this.y = e, this.z = n, this
                        }, e.prototype.add = function(t) {
                            return this.x += t.x, this.y += t.y, this.z += t.z, this
                        }, e.prototype.sub = function(t) {
                            return this.x -= t.x, this.y -= t.y, this.z -= t.z, this
                        }, e.prototype.scale = function(t) {
                            return this.x *= t, this.y *= t, this.z *= t, this
                        }, e.prototype.normalize = function() {
                            var t = this.length();
                            return 0 == t ? this : (t = 1 / t, this.x *= t, this.y *= t, this.z *= t, this)
                        }, e.prototype.cross = function(t) {
                            return this.set(this.y * t.z - this.z * t.y, this.z * t.x - this.x * t.z, this.x * t.y - this.y * t.x)
                        }, e.prototype.multiply = function(e) {
                            var n = e.values;
                            return this.set(this.x * n[t.M00] + this.y * n[t.M01] + this.z * n[t.M02] + n[t.M03], this.x * n[t.M10] + this.y * n[t.M11] + this.z * n[t.M12] + n[t.M13], this.x * n[t.M20] + this.y * n[t.M21] + this.z * n[t.M22] + n[t.M23])
                        }, e.prototype.project = function(e) {
                            var n = e.values,
                                i = 1 / (this.x * n[t.M30] + this.y * n[t.M31] + this.z * n[t.M32] + n[t.M33]);
                            return this.set((this.x * n[t.M00] + this.y * n[t.M01] + this.z * n[t.M02] + n[t.M03]) * i, (this.x * n[t.M10] + this.y * n[t.M11] + this.z * n[t.M12] + n[t.M13]) * i, (this.x * n[t.M20] + this.y * n[t.M21] + this.z * n[t.M22] + n[t.M23]) * i)
                        }, e.prototype.dot = function(t) {
                            return this.x * t.x + this.y * t.y + this.z * t.z
                        }, e.prototype.length = function() {
                            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
                        }, e.prototype.distance = function(t) {
                            var e = t.x - this.x,
                                n = t.y - this.y,
                                i = t.z - this.z;
                            return Math.sqrt(e * e + n * n + i * i)
                        }, e
                    }();
                    t.Vector3 = e
                }(t.webgl || (t.webgl = {}))
            }(i || (i = {})),
            function(t) {
                ! function(e) {
                    var n = function() {
                        function t(t, e) {
                            var n = this;
                            if (void 0 === e && (e = {
                                    alpha: "true"
                                }), this.restorables = new Array, t instanceof HTMLCanvasElement) {
                                var i = t;
                                this.gl = i.getContext("webgl2", e) || i.getContext("webgl", e), this.canvas = i, i.addEventListener("webglcontextlost", function(t) {
                                    t && t.preventDefault()
                                }), i.addEventListener("webglcontextrestored", function(t) {
                                    for (var e = 0, i = n.restorables.length; e < i; e++) n.restorables[e].restore()
                                })
                            } else this.gl = t, this.canvas = this.gl.canvas
                        }
                        return t.prototype.addRestorable = function(t) {
                            this.restorables.push(t)
                        }, t.prototype.removeRestorable = function(t) {
                            var e = this.restorables.indexOf(t);
                            e > -1 && this.restorables.splice(e, 1)
                        }, t
                    }();
                    e.ManagedWebGLRenderingContext = n;
                    var i = function() {
                        function e() {}
                        return e.getDestGLBlendMode = function(n) {
                            switch (n) {
                                case t.BlendMode.Normal:
                                    return e.ONE_MINUS_SRC_ALPHA;
                                case t.BlendMode.Additive:
                                    return e.ONE;
                                case t.BlendMode.Multiply:
                                case t.BlendMode.Screen:
                                    return e.ONE_MINUS_SRC_ALPHA;
                                default:
                                    throw new Error("Unknown blend mode: " + n)
                            }
                        }, e.getSourceGLBlendMode = function(n, i) {
                            switch (void 0 === i && (i = !1), n) {
                                case t.BlendMode.Normal:
                                case t.BlendMode.Additive:
                                    return i ? e.ONE : e.SRC_ALPHA;
                                case t.BlendMode.Multiply:
                                    return e.DST_COLOR;
                                case t.BlendMode.Screen:
                                    return e.ONE;
                                default:
                                    throw new Error("Unknown blend mode: " + n)
                            }
                        }, e.ZERO = 0, e.ONE = 1, e.SRC_COLOR = 768, e.ONE_MINUS_SRC_COLOR = 769, e.SRC_ALPHA = 770, e.ONE_MINUS_SRC_ALPHA = 771, e.DST_ALPHA = 772, e.ONE_MINUS_DST_ALPHA = 773, e.DST_COLOR = 774, e
                    }();
                    e.WebGLBlendModeConverter = i
                }(t.webgl || (t.webgl = {}))
            }(i || (i = {})), t.exports = i
    }).call(window)
}, function(t, e, n) {
    var i = n(0),
        r = n(4),
        s = n(168),
        o = n(2),
        a = n(182),
        h = n(183),
        l = n(184),
        u = new i({
            Extends: h,
            initialize: function(t, e, n, i, s, u, c) {
                var f, d, p, v = [],
                    g = t.cacheManager.custom.spine;
                if (o(e)) {
                    var m = e;
                    for (e = r(m, "key"), d = new a(t, {
                            key: e,
                            url: r(m, "jsonURL"),
                            extension: r(m, "jsonExtension", "json"),
                            xhrSettings: r(m, "jsonXhrSettings")
                        }), i = r(m, "atlasURL"), s = r(m, "preMultipliedAlpha"), Array.isArray(i) || (i = [i]), f = 0; f < i.length; f++)(p = new l(t, {
                        key: e,
                        url: i[f],
                        extension: r(m, "atlasExtension", "atlas"),
                        xhrSettings: r(m, "atlasXhrSettings")
                    })).cache = g, v.push(p)
                } else
                    for (d = new a(t, e, n, u), Array.isArray(i) || (i = [i]), f = 0; f < i.length; f++)(p = new l(t, e + "_" + f, i[f], c)).cache = g, v.push(p);
                v.unshift(d), h.call(this, t, "spine", e, v), this.config.preMultipliedAlpha = s
            },
            onFileComplete: function(t) {
                if (-1 !== this.files.indexOf(t) && (this.pending--, "text" === t.type)) {
                    for (var e = t.data.split("\n"), n = [], i = 0; i < e.length; i++) {
                        var o = e[i];
                        "" === o.trim() && i < e.length - 1 && (o = e[i + 1], n.push(o))
                    }
                    var a = this.config,
                        h = this.loader,
                        l = h.baseURL,
                        u = h.path,
                        c = h.prefix,
                        f = r(a, "baseURL", this.baseURL),
                        d = r(a, "path", this.path),
                        p = r(a, "prefix", this.prefix),
                        v = r(a, "textureXhrSettings");
                    h.setBaseURL(f), h.setPath(d), h.setPrefix(p);
                    for (var g = 0; g < n.length; g++) {
                        var m = n[g],
                            M = "SP" + this.multiKeyIndex + "_" + m,
                            x = new s(h, M, m, v);
                        this.addToMultiFile(x), h.addFile(x)
                    }
                    h.setBaseURL(l), h.setPath(u), h.setPrefix(c)
                }
            },
            addToCache: function() {
                if (this.isReadyToProcess()) {
                    var t;
                    this.files[0].addToCache();
                    for (var e = "", n = "", i = !!this.config.preMultipliedAlpha, r = 1; r < this.files.length; r++) {
                        var s = this.files[r];
                        if ("text" === s.type) e = s.key.substr(0, s.key.length - 2), t = s.cache, n = n.concat(s.data);
                        else {
                            var o = s.key.trim(),
                                a = o.indexOf("_"),
                                h = o.substr(a + 1);
                            this.loader.textureManager.addImage(h, s.data)
                        }
                        s.pendingDestroy()
                    }
                    t.add(e, {
                        preMultipliedAlpha: i,
                        data: n
                    }), this.complete = !0
                }
            }
        });
    t.exports = u
}, function(t, e, n) {
    var i = n(0),
        r = n(8),
        s = n(12),
        o = n(13),
        a = n(4),
        h = n(2),
        l = new i({
            Extends: s,
            initialize: function t(e, n, i, r, o) {
                var l, u = "png";
                if (h(n)) {
                    var c = n;
                    n = a(c, "key"), i = a(c, "url"), l = a(c, "normalMap"), r = a(c, "xhrSettings"), u = a(c, "extension", u), o = a(c, "frameConfig")
                }
                Array.isArray(i) && (l = i[1], i = i[0]);
                var f = {
                    type: "image",
                    cache: e.textureManager,
                    extension: u,
                    responseType: "blob",
                    key: n,
                    url: i,
                    xhrSettings: r,
                    config: o
                };
                if (s.call(this, e, f), l) {
                    var d = new t(e, this.key, l, r, o);
                    d.type = "normalMap", this.setLink(d), e.addFile(d)
                }
            },
            onProcess: function() {
                this.state = r.FILE_PROCESSING, this.data = new Image, this.data.crossOrigin = this.crossOrigin;
                var t = this;
                this.data.onload = function() {
                    s.revokeObjectURL(t.data), t.onProcessComplete()
                }, this.data.onerror = function() {
                    s.revokeObjectURL(t.data), t.onProcessError()
                }, s.createObjectURL(this.data, this.xhrLoader.response, "image/png")
            },
            addToCache: function() {
                var t, e = this.linkFile;
                e && e.state === r.FILE_COMPLETE ? (t = "image" === this.type ? this.cache.addImage(this.key, this.data, e.data) : this.cache.addImage(e.key, e.data, this.data), this.pendingDestroy(t), e.pendingDestroy(t)) : e || (t = this.cache.addImage(this.key, this.data), this.pendingDestroy(t))
            }
        });
    o.register("image", function(t, e, n) {
        if (Array.isArray(t))
            for (var i = 0; i < t.length; i++) this.addFile(new l(this, t[i]));
        else this.addFile(new l(this, t, e, n));
        return this
    }), t.exports = l
}, function(t, e, n) {
    t.exports = {
        ADD: n(170),
        COMPLETE: n(171),
        FILE_COMPLETE: n(172),
        FILE_KEY_COMPLETE: n(173),
        FILE_LOAD_ERROR: n(174),
        FILE_LOAD: n(175),
        FILE_PROGRESS: n(176),
        POST_PROCESS: n(177),
        PROGRESS: n(178),
        START: n(179)
    }
}, function(t, e) {
    t.exports = "addfile"
}, function(t, e) {
    t.exports = "complete"
}, function(t, e) {
    t.exports = "filecomplete"
}, function(t, e) {
    t.exports = "filecomplete-"
}, function(t, e) {
    t.exports = "loaderror"
}, function(t, e) {
    t.exports = "load"
}, function(t, e) {
    t.exports = "fileprogress"
}, function(t, e) {
    t.exports = "postprocess"
}, function(t, e) {
    t.exports = "progress"
}, function(t, e) {
    t.exports = "start"
}, function(t, e) {
    t.exports = function(t, e) {
        return !!t.url && (t.url.match(/^(?:blob:|data:|http:\/\/|https:\/\/|\/\/)/) ? t.url : e + t.url)
    }
}, function(t, e, n) {
    var i = n(29);
    t.exports = function(t, e) {
        var n = i(e, t.xhrSettings),
            r = new XMLHttpRequest;
        return r.open("GET", t.src, n.async, n.user, n.password), r.responseType = t.xhrSettings.responseType, r.timeout = n.timeout, n.header && n.headerValue && r.setRequestHeader(n.header, n.headerValue), n.requestedWith && r.setRequestHeader("X-Requested-With", n.requestedWith), n.overrideMimeType && r.overrideMimeType(n.overrideMimeType), r.onload = t.onLoad.bind(t, r), r.onerror = t.onError.bind(t, r), r.onprogress = t.onProgress.bind(t), r.send(), r
    }
}, function(t, e, n) {
    var i = n(0),
        r = n(8),
        s = n(12),
        o = n(13),
        a = n(4),
        h = n(11),
        l = n(2),
        u = new i({
            Extends: s,
            initialize: function(t, e, n, i, o) {
                var u = "json";
                if (l(e)) {
                    var c = e;
                    e = a(c, "key"), n = a(c, "url"), i = a(c, "xhrSettings"), u = a(c, "extension", u), o = a(c, "dataKey", o)
                }
                var f = {
                    type: "json",
                    cache: t.cacheManager.json,
                    extension: u,
                    responseType: "text",
                    key: e,
                    url: n,
                    xhrSettings: i,
                    config: o
                };
                s.call(this, t, f), l(n) && (this.data = o ? h(n, o) : n, this.state = r.FILE_POPULATED)
            },
            onProcess: function() {
                if (this.state !== r.FILE_POPULATED) {
                    this.state = r.FILE_PROCESSING;
                    var t = JSON.parse(this.xhrLoader.responseText),
                        e = this.config;
                    this.data = "string" == typeof e ? h(t, e, t) : t
                }
                this.onProcessComplete()
            }
        });
    o.register("json", function(t, e, n, i) {
        if (Array.isArray(t))
            for (var r = 0; r < t.length; r++) this.addFile(new u(this, t[r]));
        else this.addFile(new u(this, t, e, i, n));
        return this
    }), t.exports = u
}, function(t, e, n) {
    var i = new(n(0))({
        initialize: function(t, e, n, i) {
            this.loader = t, this.type = e, this.key = n, this.multiKeyIndex = t.multiKeyIndex++, this.files = i, this.complete = !1, this.pending = i.length, this.failed = 0, this.config = {}, this.baseURL = t.baseURL, this.path = t.path, this.prefix = t.prefix;
            for (var r = 0; r < i.length; r++) i[r].multiFile = this
        },
        isReadyToProcess: function() {
            return 0 === this.pending && 0 === this.failed && !this.complete
        },
        addToMultiFile: function(t) {
            return this.files.push(t), t.multiFile = this, this.pending++, this.complete = !1, this
        },
        onFileComplete: function(t) {
            -1 !== this.files.indexOf(t) && this.pending--
        },
        onFileFailed: function(t) {
            -1 !== this.files.indexOf(t) && this.failed++
        }
    });
    t.exports = i
}, function(t, e, n) {
    var i = n(0),
        r = n(8),
        s = n(12),
        o = n(13),
        a = n(4),
        h = n(2),
        l = new i({
            Extends: s,
            initialize: function(t, e, n, i) {
                var r = "txt";
                if (h(e)) {
                    var o = e;
                    e = a(o, "key"), n = a(o, "url"), i = a(o, "xhrSettings"), r = a(o, "extension", r)
                }
                var l = {
                    type: "text",
                    cache: t.cacheManager.text,
                    extension: r,
                    responseType: "text",
                    key: e,
                    url: n,
                    xhrSettings: i
                };
                s.call(this, t, l)
            },
            onProcess: function() {
                this.state = r.FILE_PROCESSING, this.data = this.xhrLoader.responseText, this.onProcessComplete()
            }
        });
    o.register("text", function(t, e, n) {
        if (Array.isArray(t))
            for (var i = 0; i < t.length; i++) this.addFile(new l(this, t[i]));
        else this.addFile(new l(this, t, e, n));
        return this
    }), t.exports = l
}, function(t, e, n) {
    var i = n(15),
        r = n(9),
        s = n(0),
        o = n(186),
        a = n(187),
        h = n(188),
        l = n(189),
        u = n(190),
        c = n(192),
        f = n(5),
        d = n(25),
        p = n(193),
        v = n(6),
        g = n(214),
        m = n(221),
        M = new s({
            Extends: p,
            Mixins: [o, a, h, l, u, c, m],
            initialize: function(t, e, n, i, r, s, o) {
                p.call(this, t, "Spine"), this.plugin = e, this.skeleton = null, this.skeletonData = null, this.state = null, this.stateData = null, this.root = null, this.bounds = null, this.drawDebug = !1, this.timeScale = 1, this.displayOriginX = 0, this.displayOriginY = 0, this.preMultipliedAlpha = !1, this.blendMode = 0, this.setPosition(n, i), r && this.setSkeleton(r, s, o)
            },
            willRender: function() {
                return !0
            },
            setAlpha: function(t, e) {
                if (void 0 === t && (t = 1), e) {
                    var n = this.findSlot(e);
                    n && (n.color.a = r(t, 0, 1))
                } else this.alpha = t;
                return this
            },
            alpha: {
                get: function() {
                    return this.skeleton.color.a
                },
                set: function(t) {
                    var e = r(t, 0, 1);
                    this.skeleton && (this.skeleton.color.a = e), 0 === e ? this.renderFlags &= -3 : this.renderFlags |= 2
                }
            },
            red: {
                get: function() {
                    return this.skeleton.color.r
                },
                set: function(t) {
                    var e = r(t, 0, 1);
                    this.skeleton && (this.skeleton.color.r = e)
                }
            },
            green: {
                get: function() {
                    return this.skeleton.color.g
                },
                set: function(t) {
                    var e = r(t, 0, 1);
                    this.skeleton && (this.skeleton.color.g = e)
                }
            },
            blue: {
                get: function() {
                    return this.skeleton.color.b
                },
                set: function(t) {
                    var e = r(t, 0, 1);
                    this.skeleton && (this.skeleton.color.b = e)
                }
            },
            setColor: function(t, e) {
                void 0 === t && (t = 16777215);
                var n = (t >> 16 & 255) / 255,
                    i = (t >> 8 & 255) / 255,
                    r = (255 & t) / 255,
                    s = t > 16777215 ? (t >>> 24) / 255 : null,
                    o = this.skeleton;
                if (e) {
                    var a = this.findSlot(e);
                    a && (o = a)
                }
                return o.color.r = n, o.color.g = i, o.color.b = r, null !== s && (o.color.a = s), this
            },
            setSkeletonFromJSON: function(t, e, n, i) {
                return this.setSkeleton(t, e, n, i)
            },
            setSkeleton: function(t, e, n, i) {
                this.state && (this.state.clearListeners(), this.state.clearListenerNotifications());
                var r = this.plugin.createSkeleton(t, i);
                this.skeletonData = r.skeletonData, this.preMultipliedAlpha = r.preMultipliedAlpha;
                var s = r.skeleton;
                return s.setSkin(), s.setToSetupPose(), this.skeleton = s, r = this.plugin.createAnimationState(s), this.state && (this.state.clearListeners(), this.state.clearListenerNotifications()), this.state = r.state, this.stateData = r.stateData, this.state.addListener({
                    event: this.onEvent.bind(this),
                    complete: this.onComplete.bind(this),
                    start: this.onStart.bind(this),
                    end: this.onEnd.bind(this),
                    dispose: this.onDispose.bind(this),
                    interrupted: this.onInterrupted.bind(this)
                }), e && this.setAnimation(0, e, n), this.root = this.getRootBone(), this.root && (this.root.rotation = v(f(this.rotation)) + 90), this.state.apply(s), s.updateCache(), this.updateSize()
            },
            onComplete: function(t) {
                this.emit(g.COMPLETE, t)
            },
            onDispose: function(t) {
                this.emit(g.DISPOSE, t)
            },
            onEnd: function(t) {
                this.emit(g.END, t)
            },
            onEvent: function(t, e) {
                this.emit(g.EVENT, t, e)
            },
            onInterrupted: function(t) {
                this.emit(g.INTERRUPTED, t)
            },
            onStart: function(t) {
                this.emit(g.START, t)
            },
            refresh: function() {
                return this.root && (this.root.rotation = v(f(this.rotation)) + 90), this.updateSize(), this.skeleton.updateCache(), this
            },
            setSize: function(t, e, n, i) {
                var r = this.skeleton;
                return void 0 === t && (t = r.data.width), void 0 === e && (e = r.data.height), void 0 === n && (n = 0), void 0 === i && (i = 0), this.width = t, this.height = e, this.displayOriginX = r.x - n, this.displayOriginY = r.y - i, this
            },
            setOffset: function(t, e) {
                var n = this.skeleton;
                return void 0 === t && (t = 0), void 0 === e && (e = 0), this.displayOriginX = n.x - t, this.displayOriginY = n.y - e, this
            },
            updateSize: function() {
                var t = this.skeleton,
                    e = this.plugin.renderer.height,
                    n = this.scaleX,
                    i = this.scaleY;
                t.x = this.x, t.y = e - this.y, t.scaleX = 1, t.scaleY = 1, t.updateWorldTransform();
                var r = this.getBounds();
                return this.width = r.size.x, this.height = r.size.y, this.displayOriginX = this.x - r.offset.x, this.displayOriginY = this.y - (e - (this.height + r.offset.y)), t.scaleX = n, t.scaleY = i, t.updateWorldTransform(), this
            },
            scaleX: {
                get: function() {
                    return this._scaleX
                },
                set: function(t) {
                    this._scaleX = t, this.refresh()
                }
            },
            scaleY: {
                get: function() {
                    return this._scaleY
                },
                set: function(t) {
                    this._scaleY = t, this.refresh()
                }
            },
            getBoneList: function() {
                var t = [],
                    e = this.skeletonData;
                if (e)
                    for (var n = 0; n < e.bones.length; n++) t.push(e.bones[n].name);
                return t
            },
            getSkinList: function() {
                var t = [],
                    e = this.skeletonData;
                if (e)
                    for (var n = 0; n < e.skins.length; n++) t.push(e.skins[n].name);
                return t
            },
            getSlotList: function() {
                for (var t = [], e = this.skeleton, n = 0; n < e.slots.length; n++) t.push(e.slots[n].data.name);
                return t
            },
            getAnimationList: function() {
                var t = [],
                    e = this.skeletonData;
                if (e)
                    for (var n = 0; n < e.animations.length; n++) t.push(e.animations[n].name);
                return t
            },
            getCurrentAnimation: function(t) {
                void 0 === t && (t = 0);
                var e = this.state.getCurrent(t);
                if (e) return e.animation
            },
            play: function(t, e, n) {
                return this.setAnimation(0, t, e, n), this
            },
            setAnimation: function(t, e, n, i) {
                if (void 0 === n && (n = !1), void 0 === i && (i = !1), i && this.state) {
                    var r = this.state.getCurrent(0);
                    if (r && r.animation.name === e && !r.isComplete()) return
                }
                if (this.findAnimation(e)) return this.state.setAnimation(t, e, n)
            },
            addAnimation: function(t, e, n, i) {
                return this.state.addAnimation(t, e, n, i)
            },
            setEmptyAnimation: function(t, e) {
                return this.state.setEmptyAnimation(t, e)
            },
            clearTrack: function(t) {
                return this.state.clearTrack(t), this
            },
            clearTracks: function() {
                return this.state.clearTracks(), this
            },
            setSkinByName: function(t) {
                var e = this.skeleton;
                return e.setSkinByName(t), e.setSlotsToSetupPose(), this.state.apply(e), this
            },
            setSkin: function(t) {
                var e = this.skeleton;
                return e.setSkin(t), e.setSlotsToSetupPose(), this.state.apply(e), this
            },
            setMix: function(t, e, n) {
                return this.stateData.setMix(t, e, n), this
            },
            getAttachment: function(t, e) {
                return this.skeleton.getAttachment(t, e)
            },
            getAttachmentByName: function(t, e) {
                return this.skeleton.getAttachmentByName(t, e)
            },
            setAttachment: function(t, e) {
                if (Array.isArray(t) && Array.isArray(e) && t.length === e.length)
                    for (var n = 0; n < t.length; n++) this.skeleton.setAttachment(t[n], e[n]);
                else this.skeleton.setAttachment(t, e);
                return this
            },
            setToSetupPose: function() {
                return this.skeleton.setToSetupPose(), this
            },
            setSlotsToSetupPose: function() {
                return this.skeleton.setSlotsToSetupPose(), this
            },
            setBonesToSetupPose: function() {
                return this.skeleton.setBonesToSetupPose(), this
            },
            getRootBone: function() {
                return this.skeleton.getRootBone()
            },
            angleBoneToXY: function(t, e, n, s, o, a) {
                void 0 === s && (s = 0), void 0 === o && (o = 0), void 0 === a && (a = 360);
                var h = this.plugin.renderer.height,
                    l = f(i(t.worldX, h - t.worldY, e, n) + d(s));
                return t.rotation = r(v(l), o, a), this
            },
            findBone: function(t) {
                return this.skeleton.findBone(t)
            },
            findBoneIndex: function(t) {
                return this.skeleton.findBoneIndex(t)
            },
            findSlot: function(t) {
                return this.skeleton.findSlot(t)
            },
            findSlotIndex: function(t) {
                return this.skeleton.findSlotIndex(t)
            },
            findSkin: function(t) {
                return this.skeletonData.findSkin(t)
            },
            findEvent: function(t) {
                return this.skeletonData.findEvent(t)
            },
            findAnimation: function(t) {
                return this.skeletonData.findAnimation(t)
            },
            findIkConstraint: function(t) {
                return this.skeletonData.findIkConstraint(t)
            },
            findTransformConstraint: function(t) {
                return this.skeletonData.findTransformConstraint(t)
            },
            findPathConstraint: function(t) {
                return this.skeletonData.findPathConstraint(t)
            },
            findPathConstraintIndex: function(t) {
                return this.skeletonData.findPathConstraintIndex(t)
            },
            getBounds: function() {
                return this.plugin.getBounds(this.skeleton)
            },
            preUpdate: function(t, e) {
                var n = this.skeleton;
                this.state.update(e / 1e3 * this.timeScale), this.state.apply(n)
            },
            preDestroy: function() {
                this.state && (this.state.clearListeners(), this.state.clearListenerNotifications()), this.plugin = null, this.skeleton = null, this.skeletonData = null, this.state = null, this.stateData = null
            }
        });
    t.exports = M
}, function(t, e) {
    t.exports = {
        width: 0,
        height: 0,
        displayWidth: {
            get: function() {
                return this.scaleX * this.width
            },
            set: function(t) {
                this.scaleX = t / this.width
            }
        },
        displayHeight: {
            get: function() {
                return this.scaleY * this.height
            },
            set: function(t) {
                this.scaleY = t / this.height
            }
        },
        setSize: function(t, e) {
            return this.width = t, this.height = e, this
        },
        setDisplaySize: function(t, e) {
            return this.displayWidth = t, this.displayHeight = e, this
        }
    }
}, function(t, e) {
    var n = {
        _depth: 0,
        depth: {
            get: function() {
                return this._depth
            },
            set: function(t) {
                this.scene.sys.queueDepthSort(), this._depth = t
            }
        },
        setDepth: function(t) {
            return void 0 === t && (t = 0), this.depth = t, this
        }
    };
    t.exports = n
}, function(t, e) {
    t.exports = {
        flipX: !1,
        flipY: !1,
        toggleFlipX: function() {
            return this.flipX = !this.flipX, this
        },
        toggleFlipY: function() {
            return this.flipY = !this.flipY, this
        },
        setFlipX: function(t) {
            return this.flipX = t, this
        },
        setFlipY: function(t) {
            return this.flipY = t, this
        },
        setFlip: function(t, e) {
            return this.flipX = t, this.flipY = e, this
        },
        resetFlip: function() {
            return this.flipX = !1, this.flipY = !1, this
        }
    }
}, function(t, e) {
    var n = {
        scrollFactorX: 1,
        scrollFactorY: 1,
        setScrollFactor: function(t, e) {
            return void 0 === e && (e = t), this.scrollFactorX = t, this.scrollFactorY = e, this
        }
    };
    t.exports = n
}, function(t, e, n) {
    var i = n(1),
        r = n(191),
        s = n(17),
        o = n(18),
        a = {
            _scaleX: 1,
            _scaleY: 1,
            _rotation: 0,
            x: 0,
            y: 0,
            z: 0,
            w: 0,
            scale: {
                get: function() {
                    return (this._scaleX + this._scaleY) / 2
                },
                set: function(t) {
                    this._scaleX = t, this._scaleY = t, 0 === t ? this.renderFlags &= -5 : this.renderFlags |= 4
                }
            },
            scaleX: {
                get: function() {
                    return this._scaleX
                },
                set: function(t) {
                    this._scaleX = t, 0 === t ? this.renderFlags &= -5 : this.renderFlags |= 4
                }
            },
            scaleY: {
                get: function() {
                    return this._scaleY
                },
                set: function(t) {
                    this._scaleY = t, 0 === t ? this.renderFlags &= -5 : this.renderFlags |= 4
                }
            },
            angle: {
                get: function() {
                    return o(this._rotation * i.RAD_TO_DEG)
                },
                set: function(t) {
                    this.rotation = o(t) * i.DEG_TO_RAD
                }
            },
            rotation: {
                get: function() {
                    return this._rotation
                },
                set: function(t) {
                    this._rotation = s(t)
                }
            },
            setPosition: function(t, e, n, i) {
                return void 0 === t && (t = 0), void 0 === e && (e = t), void 0 === n && (n = 0), void 0 === i && (i = 0), this.x = t, this.y = e, this.z = n, this.w = i, this
            },
            setRandomPosition: function(t, e, n, i) {
                return void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === n && (n = this.scene.sys.scale.width), void 0 === i && (i = this.scene.sys.scale.height), this.x = t + Math.random() * n, this.y = e + Math.random() * i, this
            },
            setRotation: function(t) {
                return void 0 === t && (t = 0), this.rotation = t, this
            },
            setAngle: function(t) {
                return void 0 === t && (t = 0), this.angle = t, this
            },
            setScale: function(t, e) {
                return void 0 === t && (t = 1), void 0 === e && (e = t), this.scaleX = t, this.scaleY = e, this
            },
            setX: function(t) {
                return void 0 === t && (t = 0), this.x = t, this
            },
            setY: function(t) {
                return void 0 === t && (t = 0), this.y = t, this
            },
            setZ: function(t) {
                return void 0 === t && (t = 0), this.z = t, this
            },
            setW: function(t) {
                return void 0 === t && (t = 0), this.w = t, this
            },
            getLocalTransformMatrix: function(t) {
                return void 0 === t && (t = new r), t.applyITRS(this.x, this.y, this._rotation, this._scaleX, this._scaleY)
            },
            getWorldTransformMatrix: function(t, e) {
                void 0 === t && (t = new r), void 0 === e && (e = new r);
                var n = this.parentContainer;
                if (!n) return this.getLocalTransformMatrix(t);
                for (t.applyITRS(this.x, this.y, this._rotation, this._scaleX, this._scaleY); n;) e.applyITRS(n.x, n.y, n._rotation, n._scaleX, n._scaleY), e.multiply(t, t), n = n.parentContainer;
                return t
            },
            getParentRotation: function() {
                for (var t = 0, e = this.parentContainer; e;) t += e.rotation, e = e.parentContainer;
                return t
            }
        };
    t.exports = a
}, function(t, e, n) {
    var i = n(0),
        r = n(1),
        s = n(7),
        o = new i({
            initialize: function(t, e, n, i, r, s) {
                void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === i && (i = 1), void 0 === r && (r = 0), void 0 === s && (s = 0), this.matrix = new Float32Array([t, e, n, i, r, s, 0, 0, 1]), this.decomposedMatrix = {
                    translateX: 0,
                    translateY: 0,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 0
                }
            },
            a: {
                get: function() {
                    return this.matrix[0]
                },
                set: function(t) {
                    this.matrix[0] = t
                }
            },
            b: {
                get: function() {
                    return this.matrix[1]
                },
                set: function(t) {
                    this.matrix[1] = t
                }
            },
            c: {
                get: function() {
                    return this.matrix[2]
                },
                set: function(t) {
                    this.matrix[2] = t
                }
            },
            d: {
                get: function() {
                    return this.matrix[3]
                },
                set: function(t) {
                    this.matrix[3] = t
                }
            },
            e: {
                get: function() {
                    return this.matrix[4]
                },
                set: function(t) {
                    this.matrix[4] = t
                }
            },
            f: {
                get: function() {
                    return this.matrix[5]
                },
                set: function(t) {
                    this.matrix[5] = t
                }
            },
            tx: {
                get: function() {
                    return this.matrix[4]
                },
                set: function(t) {
                    this.matrix[4] = t
                }
            },
            ty: {
                get: function() {
                    return this.matrix[5]
                },
                set: function(t) {
                    this.matrix[5] = t
                }
            },
            rotation: {
                get: function() {
                    return Math.acos(this.a / this.scaleX) * (Math.atan(-this.c / this.a) < 0 ? -1 : 1)
                }
            },
            rotationNormalized: {
                get: function() {
                    var t = this.matrix,
                        e = t[0],
                        n = t[1],
                        i = t[2],
                        s = t[3];
                    return e || n ? n > 0 ? Math.acos(e / this.scaleX) : -Math.acos(e / this.scaleX) : i || s ? r.TAU - (s > 0 ? Math.acos(-i / this.scaleY) : -Math.acos(i / this.scaleY)) : 0
                }
            },
            scaleX: {
                get: function() {
                    return Math.sqrt(this.a * this.a + this.b * this.b)
                }
            },
            scaleY: {
                get: function() {
                    return Math.sqrt(this.c * this.c + this.d * this.d)
                }
            },
            loadIdentity: function() {
                var t = this.matrix;
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, this
            },
            translate: function(t, e) {
                var n = this.matrix;
                return n[4] = n[0] * t + n[2] * e + n[4], n[5] = n[1] * t + n[3] * e + n[5], this
            },
            scale: function(t, e) {
                var n = this.matrix;
                return n[0] *= t, n[1] *= t, n[2] *= e, n[3] *= e, this
            },
            rotate: function(t) {
                var e = Math.sin(t),
                    n = Math.cos(t),
                    i = this.matrix,
                    r = i[0],
                    s = i[1],
                    o = i[2],
                    a = i[3];
                return i[0] = r * n + o * e, i[1] = s * n + a * e, i[2] = r * -e + o * n, i[3] = s * -e + a * n, this
            },
            multiply: function(t, e) {
                var n = this.matrix,
                    i = t.matrix,
                    r = n[0],
                    s = n[1],
                    o = n[2],
                    a = n[3],
                    h = n[4],
                    l = n[5],
                    u = i[0],
                    c = i[1],
                    f = i[2],
                    d = i[3],
                    p = i[4],
                    v = i[5],
                    g = void 0 === e ? this : e;
                return g.a = u * r + c * o, g.b = u * s + c * a, g.c = f * r + d * o, g.d = f * s + d * a, g.e = p * r + v * o + h, g.f = p * s + v * a + l, g
            },
            multiplyWithOffset: function(t, e, n) {
                var i = this.matrix,
                    r = t.matrix,
                    s = i[0],
                    o = i[1],
                    a = i[2],
                    h = i[3],
                    l = e * s + n * a + i[4],
                    u = e * o + n * h + i[5],
                    c = r[0],
                    f = r[1],
                    d = r[2],
                    p = r[3],
                    v = r[4],
                    g = r[5];
                return i[0] = c * s + f * a, i[1] = c * o + f * h, i[2] = d * s + p * a, i[3] = d * o + p * h, i[4] = v * s + g * a + l, i[5] = v * o + g * h + u, this
            },
            transform: function(t, e, n, i, r, s) {
                var o = this.matrix,
                    a = o[0],
                    h = o[1],
                    l = o[2],
                    u = o[3],
                    c = o[4],
                    f = o[5];
                return o[0] = t * a + e * l, o[1] = t * h + e * u, o[2] = n * a + i * l, o[3] = n * h + i * u, o[4] = r * a + s * l + c, o[5] = r * h + s * u + f, this
            },
            transformPoint: function(t, e, n) {
                void 0 === n && (n = {
                    x: 0,
                    y: 0
                });
                var i = this.matrix,
                    r = i[0],
                    s = i[1],
                    o = i[2],
                    a = i[3],
                    h = i[4],
                    l = i[5];
                return n.x = t * r + e * o + h, n.y = t * s + e * a + l, n
            },
            invert: function() {
                var t = this.matrix,
                    e = t[0],
                    n = t[1],
                    i = t[2],
                    r = t[3],
                    s = t[4],
                    o = t[5],
                    a = e * r - n * i;
                return t[0] = r / a, t[1] = -n / a, t[2] = -i / a, t[3] = e / a, t[4] = (i * o - r * s) / a, t[5] = -(e * o - n * s) / a, this
            },
            copyFrom: function(t) {
                var e = this.matrix;
                return e[0] = t.a, e[1] = t.b, e[2] = t.c, e[3] = t.d, e[4] = t.e, e[5] = t.f, this
            },
            copyFromArray: function(t) {
                var e = this.matrix;
                return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], this
            },
            copyToContext: function(t) {
                var e = this.matrix;
                return t.transform(e[0], e[1], e[2], e[3], e[4], e[5]), t
            },
            setToContext: function(t) {
                var e = this.matrix;
                return t.setTransform(e[0], e[1], e[2], e[3], e[4], e[5]), t
            },
            copyToArray: function(t) {
                var e = this.matrix;
                return void 0 === t ? t = [e[0], e[1], e[2], e[3], e[4], e[5]] : (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5]), t
            },
            setTransform: function(t, e, n, i, r, s) {
                var o = this.matrix;
                return o[0] = t, o[1] = e, o[2] = n, o[3] = i, o[4] = r, o[5] = s, this
            },
            decomposeMatrix: function() {
                var t = this.decomposedMatrix,
                    e = this.matrix,
                    n = e[0],
                    i = e[1],
                    r = e[2],
                    s = e[3],
                    o = n * s - i * r;
                if (t.translateX = e[4], t.translateY = e[5], n || i) {
                    var a = Math.sqrt(n * n + i * i);
                    t.rotation = i > 0 ? Math.acos(n / a) : -Math.acos(n / a), t.scaleX = a, t.scaleY = o / a
                } else if (r || s) {
                    var h = Math.sqrt(r * r + s * s);
                    t.rotation = .5 * Math.PI - (s > 0 ? Math.acos(-r / h) : -Math.acos(r / h)), t.scaleX = o / h, t.scaleY = h
                } else t.rotation = 0, t.scaleX = 0, t.scaleY = 0;
                return t
            },
            applyITRS: function(t, e, n, i, r) {
                var s = this.matrix,
                    o = Math.sin(n),
                    a = Math.cos(n);
                return s[4] = t, s[5] = e, s[0] = a * i, s[1] = o * i, s[2] = -o * r, s[3] = a * r, this
            },
            applyInverse: function(t, e, n) {
                void 0 === n && (n = new s);
                var i = this.matrix,
                    r = i[0],
                    o = i[1],
                    a = i[2],
                    h = i[3],
                    l = i[4],
                    u = i[5],
                    c = 1 / (r * h + a * -o);
                return n.x = h * c * t + -a * c * e + (u * a - l * h) * c, n.y = r * c * e + -o * c * t + (-u * r + l * o) * c, n
            },
            getX: function(t, e) {
                return t * this.a + e * this.c + this.e
            },
            getY: function(t, e) {
                return t * this.b + e * this.d + this.f
            },
            getCSSMatrix: function() {
                var t = this.matrix;
                return "matrix(" + t[0] + "," + t[1] + "," + t[2] + "," + t[3] + "," + t[4] + "," + t[5] + ")"
            },
            destroy: function() {
                this.matrix = null, this.decomposedMatrix = null
            }
        });
    t.exports = o
}, function(t, e) {
    var n = {
        _visible: !0,
        visible: {
            get: function() {
                return this._visible
            },
            set: function(t) {
                t ? (this._visible = !0, this.renderFlags |= 1) : (this._visible = !1, this.renderFlags &= -2)
            }
        },
        setVisible: function(t) {
            return this.visible = t, this
        }
    };
    t.exports = n
}, function(t, e, n) {
    var i = n(0),
        r = n(194),
        s = n(195),
        o = n(201),
        a = n(202),
        h = new i({
            Extends: o,
            initialize: function(t, e) {
                o.call(this), this.scene = t, this.type = e, this.state = 0, this.parentContainer = null, this.name = "", this.active = !0, this.tabIndex = -1, this.data = null, this.renderFlags = 15, this.cameraFilter = 0, this.input = null, this.body = null, this.ignoreDestroy = !1, t.sys.queueDepthSort()
            },
            setActive: function(t) {
                return this.active = t, this
            },
            setName: function(t) {
                return this.name = t, this
            },
            setState: function(t) {
                return this.state = t, this
            },
            setDataEnabled: function() {
                return this.data || (this.data = new s(this)), this
            },
            setData: function(t, e) {
                return this.data || (this.data = new s(this)), this.data.set(t, e), this
            },
            getData: function(t) {
                return this.data || (this.data = new s(this)), this.data.get(t)
            },
            setInteractive: function(t, e, n) {
                return this.scene.sys.input.enable(this, t, e, n), this
            },
            disableInteractive: function() {
                return this.input && (this.input.enabled = !1), this
            },
            removeInteractive: function() {
                return this.scene.sys.input.clear(this), this.input = void 0, this
            },
            update: function() {},
            toJSON: function() {
                return r(this)
            },
            willRender: function(t) {
                return !(h.RENDER_MASK !== this.renderFlags || 0 !== this.cameraFilter && this.cameraFilter & t.id)
            },
            getIndexList: function() {
                for (var t = this, e = this.parentContainer, n = []; e && (n.unshift(e.getIndex(t)), t = e, e.parentContainer);) e = e.parentContainer;
                return n.unshift(this.scene.sys.displayList.getIndex(t)), n
            },
            destroy: function(t) {
                if (void 0 === t && (t = !1), this.scene && !this.ignoreDestroy) {
                    this.preDestroy && this.preDestroy.call(this), this.emit(a.DESTROY, this);
                    var e = this.scene.sys;
                    t || (e.displayList.remove(this), e.updateList.remove(this)), this.input && (e.input.clear(this), this.input = void 0), this.data && (this.data.destroy(), this.data = void 0), this.body && (this.body.destroy(), this.body = void 0), t || e.queueDepthSort(), this.active = !1, this.visible = !1, this.scene = void 0, this.parentContainer = void 0, this.removeAllListeners()
                }
            }
        });
    h.RENDER_MASK = 15, t.exports = h
}, function(t, e) {
    t.exports = function(t) {
        var e = {
            name: t.name,
            type: t.type,
            x: t.x,
            y: t.y,
            depth: t.depth,
            scale: {
                x: t.scaleX,
                y: t.scaleY
            },
            origin: {
                x: t.originX,
                y: t.originY
            },
            flipX: t.flipX,
            flipY: t.flipY,
            rotation: t.rotation,
            alpha: t.alpha,
            visible: t.visible,
            blendMode: t.blendMode,
            textureKey: "",
            frameKey: "",
            data: {}
        };
        return t.texture && (e.textureKey = t.texture.key, e.frameKey = t.frame.name), e
    }
}, function(t, e, n) {
    var i = n(0),
        r = n(196),
        s = new i({
            initialize: function(t, e) {
                this.parent = t, this.events = e, e || (this.events = t.events ? t.events : t), this.list = {}, this.values = {}, this._frozen = !1, !t.hasOwnProperty("sys") && this.events && this.events.once("destroy", this.destroy, this)
            },
            get: function(t) {
                var e = this.list;
                if (Array.isArray(t)) {
                    for (var n = [], i = 0; i < t.length; i++) n.push(e[t[i]]);
                    return n
                }
                return e[t]
            },
            getAll: function() {
                var t = {};
                for (var e in this.list) this.list.hasOwnProperty(e) && (t[e] = this.list[e]);
                return t
            },
            query: function(t) {
                var e = {};
                for (var n in this.list) this.list.hasOwnProperty(n) && n.match(t) && (e[n] = this.list[n]);
                return e
            },
            set: function(t, e) {
                if (this._frozen) return this;
                if ("string" == typeof t) return this.setValue(t, e);
                for (var n in t) this.setValue(n, t[n]);
                return this
            },
            setValue: function(t, e) {
                if (this._frozen) return this;
                if (this.has(t)) this.values[t] = e;
                else {
                    var n = this,
                        i = this.list,
                        s = this.events,
                        o = this.parent;
                    Object.defineProperty(this.values, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            return i[t]
                        },
                        set: function(e) {
                            if (!n._frozen) {
                                var a = i[t];
                                i[t] = e, s.emit(r.CHANGE_DATA, o, t, e, a), s.emit(r.CHANGE_DATA_KEY + t, o, e, a)
                            }
                        }
                    }), i[t] = e, s.emit(r.SET_DATA, o, t, e)
                }
                return this
            },
            each: function(t, e) {
                for (var n = [this.parent, null, void 0], i = 1; i < arguments.length; i++) n.push(arguments[i]);
                for (var r in this.list) n[1] = r, n[2] = this.list[r], t.apply(e, n);
                return this
            },
            merge: function(t, e) {
                for (var n in void 0 === e && (e = !0), t) t.hasOwnProperty(n) && (e || !e && !this.has(n)) && this.setValue(n, t[n]);
                return this
            },
            remove: function(t) {
                if (this._frozen) return this;
                if (!Array.isArray(t)) return this.removeValue(t);
                for (var e = 0; e < t.length; e++) this.removeValue(t[e]);
                return this
            },
            removeValue: function(t) {
                if (this.has(t)) {
                    var e = this.list[t];
                    delete this.list[t], delete this.values[t], this.events.emit(r.REMOVE_DATA, this.parent, t, e)
                }
                return this
            },
            pop: function(t) {
                var e = void 0;
                return !this._frozen && this.has(t) && (e = this.list[t], delete this.list[t], delete this.values[t], this.events.emit(r.REMOVE_DATA, this.parent, t, e)), e
            },
            has: function(t) {
                return this.list.hasOwnProperty(t)
            },
            setFreeze: function(t) {
                return this._frozen = t, this
            },
            reset: function() {
                for (var t in this.list) delete this.list[t], delete this.values[t];
                return this._frozen = !1, this
            },
            destroy: function() {
                this.reset(), this.events.off(r.CHANGE_DATA), this.events.off(r.SET_DATA), this.events.off(r.REMOVE_DATA), this.parent = null
            },
            freeze: {
                get: function() {
                    return this._frozen
                },
                set: function(t) {
                    this._frozen = !!t
                }
            },
            count: {
                get: function() {
                    var t = 0;
                    for (var e in this.list) void 0 !== this.list[e] && t++;
                    return t
                }
            }
        });
    t.exports = s
}, function(t, e, n) {
    t.exports = {
        CHANGE_DATA: n(197),
        CHANGE_DATA_KEY: n(198),
        REMOVE_DATA: n(199),
        SET_DATA: n(200)
    }
}, function(t, e) {
    t.exports = "changedata"
}, function(t, e) {
    t.exports = "changedata-"
}, function(t, e) {
    t.exports = "removedata"
}, function(t, e) {
    t.exports = "setdata"
}, function(t, e, n) {
    "use strict";
    var i = Object.prototype.hasOwnProperty,
        r = "~";

    function s() {}

    function o(t, e, n, i, s) {
        if ("function" != typeof n) throw new TypeError("The listener must be a function");
        var o = new function(t, e, n) {
                this.fn = t, this.context = e, this.once = n || !1
            }(n, i || t, s),
            a = r ? r + e : e;
        return t._events[a] ? t._events[a].fn ? t._events[a] = [t._events[a], o] : t._events[a].push(o) : (t._events[a] = o, t._eventsCount++), t
    }

    function a(t, e) {
        0 == --t._eventsCount ? t._events = new s : delete t._events[e]
    }

    function h() {
        this._events = new s, this._eventsCount = 0
    }
    Object.create && (s.prototype = Object.create(null), (new s).__proto__ || (r = !1)), h.prototype.eventNames = function() {
        var t, e, n = [];
        if (0 === this._eventsCount) return n;
        for (e in t = this._events) i.call(t, e) && n.push(r ? e.slice(1) : e);
        return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n
    }, h.prototype.listeners = function(t) {
        var e = r ? r + t : t,
            n = this._events[e];
        if (!n) return [];
        if (n.fn) return [n.fn];
        for (var i = 0, s = n.length, o = new Array(s); i < s; i++) o[i] = n[i].fn;
        return o
    }, h.prototype.listenerCount = function(t) {
        var e = r ? r + t : t,
            n = this._events[e];
        return n ? n.fn ? 1 : n.length : 0
    }, h.prototype.emit = function(t, e, n, i, s, o) {
        var a = r ? r + t : t;
        if (!this._events[a]) return !1;
        var h, l, u = this._events[a],
            c = arguments.length;
        if (u.fn) {
            switch (u.once && this.removeListener(t, u.fn, void 0, !0), c) {
                case 1:
                    return u.fn.call(u.context), !0;
                case 2:
                    return u.fn.call(u.context, e), !0;
                case 3:
                    return u.fn.call(u.context, e, n), !0;
                case 4:
                    return u.fn.call(u.context, e, n, i), !0;
                case 5:
                    return u.fn.call(u.context, e, n, i, s), !0;
                case 6:
                    return u.fn.call(u.context, e, n, i, s, o), !0
            }
            for (l = 1, h = new Array(c - 1); l < c; l++) h[l - 1] = arguments[l];
            u.fn.apply(u.context, h)
        } else {
            var f, d = u.length;
            for (l = 0; l < d; l++) switch (u[l].once && this.removeListener(t, u[l].fn, void 0, !0), c) {
                case 1:
                    u[l].fn.call(u[l].context);
                    break;
                case 2:
                    u[l].fn.call(u[l].context, e);
                    break;
                case 3:
                    u[l].fn.call(u[l].context, e, n);
                    break;
                case 4:
                    u[l].fn.call(u[l].context, e, n, i);
                    break;
                default:
                    if (!h)
                        for (f = 1, h = new Array(c - 1); f < c; f++) h[f - 1] = arguments[f];
                    u[l].fn.apply(u[l].context, h)
            }
        }
        return !0
    }, h.prototype.on = function(t, e, n) {
        return o(this, t, e, n, !1)
    }, h.prototype.once = function(t, e, n) {
        return o(this, t, e, n, !0)
    }, h.prototype.removeListener = function(t, e, n, i) {
        var s = r ? r + t : t;
        if (!this._events[s]) return this;
        if (!e) return a(this, s), this;
        var o = this._events[s];
        if (o.fn) o.fn !== e || i && !o.once || n && o.context !== n || a(this, s);
        else {
            for (var h = 0, l = [], u = o.length; h < u; h++)(o[h].fn !== e || i && !o[h].once || n && o[h].context !== n) && l.push(o[h]);
            l.length ? this._events[s] = 1 === l.length ? l[0] : l : a(this, s)
        }
        return this
    }, h.prototype.removeAllListeners = function(t) {
        var e;
        return t ? (e = r ? r + t : t, this._events[e] && a(this, e)) : (this._events = new s, this._eventsCount = 0), this
    }, h.prototype.off = h.prototype.removeListener, h.prototype.addListener = h.prototype.on, h.prefixed = r, h.EventEmitter = h, t.exports = h
}, function(t, e, n) {
    t.exports = {
        DESTROY: n(203),
        VIDEO_COMPLETE: n(204),
        VIDEO_CREATED: n(205),
        VIDEO_ERROR: n(206),
        VIDEO_LOOP: n(207),
        VIDEO_PLAY: n(208),
        VIDEO_SEEKED: n(209),
        VIDEO_SEEKING: n(210),
        VIDEO_STOP: n(211),
        VIDEO_TIMEOUT: n(212),
        VIDEO_UNLOCKED: n(213)
    }
}, function(t, e) {
    t.exports = "destroy"
}, function(t, e) {
    t.exports = "complete"
}, function(t, e) {
    t.exports = "created"
}, function(t, e) {
    t.exports = "error"
}, function(t, e) {
    t.exports = "loop"
}, function(t, e) {
    t.exports = "play"
}, function(t, e) {
    t.exports = "seeked"
}, function(t, e) {
    t.exports = "seeking"
}, function(t, e) {
    t.exports = "stop"
}, function(t, e) {
    t.exports = "timeout"
}, function(t, e) {
    t.exports = "unlocked"
}, function(t, e, n) {
    t.exports = {
        COMPLETE: n(215),
        DISPOSE: n(216),
        END: n(217),
        EVENT: n(218),
        INTERRUPTED: n(219),
        START: n(220)
    }
}, function(t, e) {
    t.exports = "complete"
}, function(t, e) {
    t.exports = "dispose"
}, function(t, e) {
    t.exports = "end"
}, function(t, e) {
    t.exports = "event"
}, function(t, e) {
    t.exports = "interrupted"
}, function(t, e) {
    t.exports = "start"
}, function(t, e, n) {
    var i = n(31),
        r = n(31);
    i = n(222), r = n(223), t.exports = {
        renderWebGL: i,
        renderCanvas: r
    }
}, function(t, e, n) {
    var i = n(5),
        r = n(6),
        s = n(3);
    t.exports = function(t, e, n, o, a) {
        var h = e.plugin,
            l = e.skeleton,
            u = h.sceneRenderer,
            c = !(15 !== e.renderFlags || 0 !== e.cameraFilter && e.cameraFilter & o.id);
        if (!l || !c) return t.currentType = "", void(t.nextTypeMatch || (u.end(), t.rebindPipeline(t.pipelines.TextureTintPipeline)));
        t.newType && t.clearPipeline();
        var f = t._tempMatrix1,
            d = t._tempMatrix2,
            p = t._tempMatrix3;
        d.applyITRS(e.x, e.y, e.rotation, Math.abs(e.scaleX), Math.abs(e.scaleY)), f.copyFrom(o.matrix), a ? (f.multiplyWithOffset(a, -o.scrollX * e.scrollFactorX, -o.scrollY * e.scrollFactorY), d.e = e.x, d.f = e.y, f.multiply(d, p)) : (d.e -= o.scrollX * e.scrollFactorX, d.f -= o.scrollY * e.scrollFactorY, f.multiply(d, p));
        var v = t.height;
        if (l.x = p.tx, l.y = v - p.ty, l.scaleX = p.scaleX, l.scaleY = p.scaleY, e.scaleX < 0 ? (l.scaleX *= -1, e.root.rotation = r(p.rotationNormalized)) : e.root.rotation = s(r(i(p.rotationNormalized)) + 90, 0, 360), e.scaleY < 0 && (l.scaleY *= -1, e.scaleX < 0 ? e.root.rotation -= 2 * r(p.rotationNormalized) : e.root.rotation += 2 * r(p.rotationNormalized)), o.renderToTexture && (l.y = p.ty, l.scaleY *= -1), l.updateWorldTransform(), t.newType && u.begin(), u.drawSkeleton(l, e.preMultipliedAlpha), h.drawDebug || e.drawDebug) {
            var g = l.x,
                m = l.y;
            l.x = 0, l.y = 0, u.drawSkeletonDebug(l, e.preMultipliedAlpha), l.x = g, l.y = m
        }
        t.nextTypeMatch || (u.end(), t.rebindPipeline(t.pipelines.TextureTintPipeline))
    }
}, function(t, e, n) {
    var i = n(5),
        r = n(6),
        s = n(3);
    t.exports = function(t, e, n, o, a) {
        var h = t.currentContext,
            l = e.plugin,
            u = e.skeleton,
            c = l.skeletonRenderer,
            f = !(15 !== e.renderFlags || 0 !== e.cameraFilter && e.cameraFilter & o.id);
        if (u && f) {
            var d = t._tempMatrix1,
                p = t._tempMatrix2,
                v = t._tempMatrix3;
            p.applyITRS(e.x, e.y, e.rotation, Math.abs(e.scaleX), Math.abs(e.scaleY)), d.copyFrom(o.matrix), a ? (d.multiplyWithOffset(a, -o.scrollX * e.scrollFactorX, -o.scrollY * e.scrollFactorY), p.e = e.x, p.f = e.y, d.multiply(p, v)) : (p.e -= o.scrollX * e.scrollFactorX, p.f -= o.scrollY * e.scrollFactorY, d.multiply(p, v)), u.x = v.tx, u.y = v.ty, u.scaleX = v.scaleX, u.scaleY = -1 * v.scaleY, e.scaleX < 0 ? (u.scaleX *= -1, e.root.rotation = r(v.rotationNormalized)) : e.root.rotation = s(r(i(v.rotationNormalized)) + 90, 0, 360), e.scaleY < 0 && (u.scaleY *= -1, e.scaleX < 0 ? e.root.rotation -= 2 * r(v.rotationNormalized) : e.root.rotation += 2 * r(v.rotationNormalized)), o.renderToTexture && (u.y = v.ty, u.scaleY *= -1), u.updateWorldTransform(), c.ctx = h, c.debugRendering = l.drawDebug || e.drawDebug, h.save(), c.draw(u), h.restore()
        }
    }
}]);