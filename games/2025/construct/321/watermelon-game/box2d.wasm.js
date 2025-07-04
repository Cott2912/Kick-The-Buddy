self.Box2DWasmModule = function (Box2D) {
    Box2D = Box2D || {};
    var Module = Box2D;

    var b;
    b || (b = eval("(function() { try { return Box2D || {} } catch(e) { return {} } })()"));
    var aa = {},
        ba;
    for (ba in b) b.hasOwnProperty(ba) && (aa[ba] = b[ba]);
    var ca = !1,
        da = !1,
        ea = !1,
        fa = !1;
    if (b.ENVIRONMENT)
        if ("WEB" === b.ENVIRONMENT) ca = !0;
        else if ("WORKER" === b.ENVIRONMENT) da = !0;
        else if ("NODE" === b.ENVIRONMENT) ea = !0;
        else if ("SHELL" === b.ENVIRONMENT) fa = !0;
        else throw Error("The provided Module['ENVIRONMENT'] value is not valid. It must be one of: WEB|WORKER|NODE|SHELL.");
    else ca = "object" === typeof window, da = "function" === typeof importScripts, ea = "object" === typeof process && "function" === typeof require && !ca && !da, fa = !ca && !ea && !da;
    if (ea) {
        b.print || (b.print = console.log);
        b.printErr || (b.printErr = console.warn);
        var ga, ha;
        b.read = function (a, c) {
            ga || (ga = require("fs"));
            ha || (ha = require("path"));
            a = ha.normalize(a);
            var d = ga.readFileSync(a);
            return c ? d : d.toString()
        };
        b.readBinary = function (a) {
            a = b.read(a, !0);
            a.buffer || (a = new Uint8Array(a));
            assert(a.buffer);
            return a
        };
        b.load = function (a) {
            ia(read(a))
        };
        b.thisProgram || (b.thisProgram = 1 < process.argv.length ? process.argv[1].replace(/\\/g, "/") : "unknown-program");
        b.arguments = process.argv.slice(2);
        "undefined" !==
            typeof module && (module.exports = b);
        process.on("uncaughtException", function (a) {
            if (!(a instanceof ja)) throw a;
        });
        b.inspect = function () {
            return "[Emscripten Module object]"
        }
    } else if (fa) b.print || (b.print = print), "undefined" != typeof printErr && (b.printErr = printErr), b.read = "undefined" != typeof read ? read : function () {
        throw "no read() available";
    }, b.readBinary = function (a) {
        if ("function" === typeof readbuffer) return new Uint8Array(readbuffer(a));
        a = read(a, "binary");
        assert("object" === typeof a);
        return a
    }, "undefined" != typeof scriptArgs ?
            b.arguments = scriptArgs : "undefined" != typeof arguments && (b.arguments = arguments), "function" === typeof quit && (b.quit = function (a) {
                quit(a)
            }), eval("if (typeof gc === 'function' && gc.toString().indexOf('[native code]') > 0) var gc = undefined");
    else if (ca || da) b.read = function (a) {
        var c = new XMLHttpRequest;
        c.open("GET", a, !1);
        c.send(null);
        return c.responseText
    }, da && (b.readBinary = function (a) {
        var c = new XMLHttpRequest;
        c.open("GET", a, !1);
        c.responseType = "arraybuffer";
        c.send(null);
        return new Uint8Array(c.response)
    }),
        b.readAsync = function (a, c, d) {
            var e = new XMLHttpRequest;
            e.open("GET", a, !0);
            e.responseType = "arraybuffer";
            e.onload = function () {
                200 == e.status || 0 == e.status && e.response ? c(e.response) : d()
            };
            e.onerror = d;
            e.send(null)
        }, "undefined" != typeof arguments && (b.arguments = arguments), "undefined" !== typeof console ? (b.print || (b.print = function (a) {
            console.log(a)
        }), b.printErr || (b.printErr = function (a) {
            console.warn(a)
        })) : b.print || (b.print = function () { }), da && (b.load = importScripts), "undefined" === typeof b.setWindowTitle && (b.setWindowTitle =
            function (a) {
                document.title = a
            });
    else throw "Unknown runtime environment. Where are we?";

    function ia(a) {
        eval.call(null, a)
    } !b.load && b.read && (b.load = function (a) {
        ia(b.read(a))
    });
    b.print || (b.print = function () { });
    b.printErr || (b.printErr = b.print);
    b.arguments || (b.arguments = []);
    b.thisProgram || (b.thisProgram = "/this.program");
    b.quit || (b.quit = function (a, c) {
        throw c;
    });
    b.print = b.print;
    b.h = b.printErr;
    b.preRun = [];
    b.postRun = [];
    for (ba in aa) aa.hasOwnProperty(ba) && (b[ba] = aa[ba]);
    var aa = void 0,
        f = {
            f: function (a) {
                return tempRet0 = a
            },
            H: function () {
                return tempRet0
            },
            L: function () {
                return ka
            },
            K: function (a) {
                ka = a
            },
            s: function (a) {
                switch (a) {
                    case "i1":
                    case "i8":
                        return 1;
                    case "i16":
                        return 2;
                    case "i32":
                        return 4;
                    case "i64":
                        return 8;
                    case "float":
                        return 4;
                    case "double":
                        return 8;
                    default:
                        return "*" === a[a.length - 1] ? f.j : "i" === a[0] ? (a = parseInt(a.substr(1)), assert(0 === a % 8), a / 8) : 0
                }
            },
            F: function (a) {
                return Math.max(f.s(a), f.j)
            },
            M: 16,
            aa: function (a, c) {
                "double" === c || "i64" === c ? a & 7 && (assert(4 === (a & 7)), a += 4) : assert(0 ===
                    (a & 3));
                return a
            },
            U: function (a, c, d) {
                return d || "i64" != a && "double" != a ? a ? Math.min(c || (a ? f.F(a) : 0), f.j) : Math.min(c, 8) : 8
            },
            l: function (a, c, d) {
                return d && d.length ? b["dynCall_" + a].apply(null, [c].concat(d)) : b["dynCall_" + a].call(null, c)
            },
            d: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            v: function (a) {
                for (var c = 0; c < f.d.length; c++)
                    if (!f.d[c]) return f.d[c] = a, 2 * (1 + c);
                throw "Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.";
            },
            J: function (a) {
                f.d[(a - 2) / 2] = null
            },
            g: function (a) {
                f.g.n || (f.g.n = {});
                f.g.n[a] || (f.g.n[a] = 1, b.h(a))
            },
            m: {},
            W: function (a, c) {
                assert(c);
                f.m[c] || (f.m[c] = {});
                var d = f.m[c];
                d[a] || (d[a] = 1 === c.length ? function () {
                    return f.l(c, a)
                } : 2 === c.length ? function (d) {
                    return f.l(c, a, [d])
                } : function () {
                    return f.l(c, a, Array.prototype.slice.call(arguments))
                });
                return d[a]
            },
            V: function () {
                throw "You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work";
            },
            t: function (a) {
                var c =
                    ka;
                ka = ka + a | 0;
                ka = ka + 15 & -16;
                return c
            },
            u: function (a) {
                var c = la;
                la = la + a | 0;
                la = la + 15 & -16;
                return c
            },
            D: function (a) {
                var c = ma[oa >> 2];
                a = (c + a + 15 | 0) & -16;
                ma[oa >> 2] = a;
                return a >= pa && !qa() ? (ma[oa >> 2] = c, 0) : c
            },
            p: function (a, c) {
                return Math.ceil(a / (c ? c : 16)) * (c ? c : 16)
            },
            $: function (a, c, d) {
                return d ? +(a >>> 0) + 4294967296 * +(c >>> 0) : +(a >>> 0) + 4294967296 * +(c | 0)
            },
            i: 1024,
            j: 4,
            N: 0
        };
    f.addFunction = f.v;
    f.removeFunction = f.J;
    var ra = 0;

    function assert(a, c) {
        a || ta("Assertion failed: " + c)
    }

    function ua(a) {
        var c;
        c = "i32";
        "*" === c.charAt(c.length - 1) && (c = "i32");
        switch (c) {
            case "i1":
                return va[a >> 0];
            case "i8":
                return va[a >> 0];
            case "i16":
                return ya[a >> 1];
            case "i32":
                return ma[a >> 2];
            case "i64":
                return ma[a >> 2];
            case "float":
                return za[a >> 2];
            case "double":
                return Aa[a >> 3];
            default:
                ta("invalid type for setValue: " + c)
        }
        return null
    }

    function Ba(a, c, d) {
        var e, g, l;
        "number" === typeof a ? (g = !0, l = a) : (g = !1, l = a.length);
        var m = "string" === typeof c ? c : null,
            D;
        4 == d ? D = e : D = ["function" === typeof Ca ? Ca : f.u, f.t, f.u, f.D][void 0 === d ? 2 : d](Math.max(l, m ? 1 : c.length));
        if (g) {
            e = D;
            assert(0 == (D & 3));
            for (a = D + (l & -4); e < a; e += 4) ma[e >> 2] = 0;
            for (a = D + l; e < a;) va[e++ >> 0] = 0;
            return D
        }
        if ("i8" === m) return a.subarray || a.slice ? Da.set(a, D) : Da.set(new Uint8Array(a), D), D;
        e = 0;
        for (var na, wa; e < l;) {
            var G = a[e];
            "function" === typeof G && (G = f.X(G));
            d = m || c[e];
            if (0 === d) e++;
            else {
                "i64" == d && (d = "i32");
                g = D + e;
                var Ga = d,
                    Ga = Ga || "i8";
                "*" === Ga.charAt(Ga.length - 1) && (Ga = "i32");
                switch (Ga) {
                    case "i1":
                        va[g >> 0] = G;
                        break;
                    case "i8":
                        va[g >> 0] = G;
                        break;
                    case "i16":
                        ya[g >> 1] = G;
                        break;
                    case "i32":
                        ma[g >> 2] = G;
                        break;
                    case "i64":
                        tempI64 = [G >>> 0, (tempDouble = G, 1 <= +Ea(tempDouble) ? 0 < tempDouble ? (Fa(+Ha(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Ia((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)];
                        ma[g >> 2] = tempI64[0];
                        ma[g + 4 >> 2] = tempI64[1];
                        break;
                    case "float":
                        za[g >> 2] = G;
                        break;
                    case "double":
                        Aa[g >> 3] = G;
                        break;
                    default:
                        ta("invalid type for setValue: " +
                            Ga)
                }
                wa !== d && (na = f.s(d), wa = d);
                e += na
            }
        }
        return D
    }

    function Ja(a) {
        var c;
        if (0 === c || !a) return "";
        for (var d = 0, e, g = 0; ;) {
            e = Da[a + g >> 0];
            d |= e;
            if (0 == e && !c) break;
            g++;
            if (c && g == c) break
        }
        c || (c = g);
        e = "";
        if (128 > d) {
            for (; 0 < c;) d = String.fromCharCode.apply(String, Da.subarray(a, a + Math.min(c, 1024))), e = e ? e + d : d, a += 1024, c -= 1024;
            return e
        }
        return b.UTF8ToString(a)
    }
    var Ka = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;

    function La(a, c, d, e) {
        if (0 < e) {
            e = d + e - 1;
            for (var g = 0; g < a.length; ++g) {
                var l = a.charCodeAt(g);
                55296 <= l && 57343 >= l && (l = 65536 + ((l & 1023) << 10) | a.charCodeAt(++g) & 1023);
                if (127 >= l) {
                    if (d >= e) break;
                    c[d++] = l
                } else {
                    if (2047 >= l) {
                        if (d + 1 >= e) break;
                        c[d++] = 192 | l >> 6
                    } else {
                        if (65535 >= l) {
                            if (d + 2 >= e) break;
                            c[d++] = 224 | l >> 12
                        } else {
                            if (2097151 >= l) {
                                if (d + 3 >= e) break;
                                c[d++] = 240 | l >> 18
                            } else {
                                if (67108863 >= l) {
                                    if (d + 4 >= e) break;
                                    c[d++] = 248 | l >> 24
                                } else {
                                    if (d + 5 >= e) break;
                                    c[d++] = 252 | l >> 30;
                                    c[d++] = 128 | l >> 24 & 63
                                }
                                c[d++] = 128 | l >> 18 & 63
                            }
                            c[d++] = 128 | l >> 12 & 63
                        }
                        c[d++] =
                            128 | l >> 6 & 63
                    }
                    c[d++] = 128 | l & 63
                }
            }
            c[d] = 0
        }
    }

    function Oa(a) {
        for (var c = 0, d = 0; d < a.length; ++d) {
            var e = a.charCodeAt(d);
            55296 <= e && 57343 >= e && (e = 65536 + ((e & 1023) << 10) | a.charCodeAt(++d) & 1023);
            127 >= e ? ++c : c = 2047 >= e ? c + 2 : 65535 >= e ? c + 3 : 2097151 >= e ? c + 4 : 67108863 >= e ? c + 5 : c + 6
        }
        return c
    }
    "undefined" !== typeof TextDecoder && new TextDecoder("utf-16le");

    function Pa(a) {
        return a.replace(/__Z[\w\d_]+/g, function (a) {
            var d;
            a: {
                var e = b.___cxa_demangle || b.__cxa_demangle;
                if (e) try {
                    var g = a.substr(1),
                        l = Oa(g) + 1,
                        m = Ca(l);
                    La(g, Da, m, l);
                    var D = Ca(4),
                        na = e(m, 0, 0, D);
                    if (0 === ua(D) && na) {
                        d = Ja(na);
                        break a
                    }
                } catch (wa) { } finally {
                        m && Qa(m), D && Qa(D), na && Qa(na)
                    } else f.g("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling"); d = a
            }
            return a === d ? a : a + " [" + d + "]"
        })
    }

    function Ra() {
        var a;
        a: {
            a = Error();
            if (!a.stack) {
                try {
                    throw Error(0);
                } catch (c) {
                    a = c
                }
                if (!a.stack) {
                    a = "(no stack trace available)";
                    break a
                }
            }
            a = a.stack.toString()
        }
        b.extraStackTrace && (a += "\n" + b.extraStackTrace());
        return Pa(a)
    }
    var Sa = 65536,
        Ua = 16777216,
        Va = 16777216;

    function Wa(a, c) {
        0 < a % c && (a += c - a % c);
        return a
    }
    var buffer, va, Da, ya, Xa, ma, Ya, za, Aa;

    function Za() {
        b.HEAP8 = va = new Int8Array(buffer);
        b.HEAP16 = ya = new Int16Array(buffer);
        b.HEAP32 = ma = new Int32Array(buffer);
        b.HEAPU8 = Da = new Uint8Array(buffer);
        b.HEAPU16 = Xa = new Uint16Array(buffer);
        b.HEAPU32 = Ya = new Uint32Array(buffer);
        b.HEAPF32 = za = new Float32Array(buffer);
        b.HEAPF64 = Aa = new Float64Array(buffer)
    }
    var $a, la, ab, ka, bb, cb, oa;
    $a = la = ab = ka = bb = cb = oa = 0;
    b.reallocBuffer || (b.reallocBuffer = function (a) {
        var c;
        try {
            if (ArrayBuffer.e) c = ArrayBuffer.e(buffer, a);
            else {
                var d = va;
                c = new ArrayBuffer(a);
                (new Int8Array(c)).set(d)
            }
        } catch (e) {
            return !1
        }
        return db(c) ? c : !1
    });

    function qa() {
        var a = b.usingWasm ? Sa : Ua,
            c = 2147483648 - a;
        if (ma[oa >> 2] > c) return !1;
        var d = pa;
        for (pa = Math.max(pa, Va); pa < ma[oa >> 2];) 536870912 >= pa ? pa = Wa(2 * pa, a) : pa = Math.min(Wa((3 * pa + 2147483648) / 4, a), c);
        a = b.reallocBuffer(pa);
        if (!a || a.byteLength != pa) return pa = d, !1;
        b.buffer = buffer = a;
        Za();
        return !0
    }
    var eb;
    try {
        eb = Function.prototype.call.bind(Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get), eb(new ArrayBuffer(4))
    } catch (fb) {
        eb = function (a) {
            return a.byteLength
        }
    }
    var gb = b.TOTAL_STACK || 5242880,
        pa = b.TOTAL_MEMORY || 16777216;
    pa < gb && b.h("TOTAL_MEMORY should be larger than TOTAL_STACK, was " + pa + "! (TOTAL_STACK=" + gb + ")");
    b.buffer ? buffer = b.buffer : "object" === typeof WebAssembly && "function" === typeof WebAssembly.Memory ? (b.wasmMemory = new WebAssembly.Memory({
        initial: pa / Sa
    }), buffer = b.wasmMemory.buffer) : buffer = new ArrayBuffer(pa);
    Za();
    ma[0] = 1668509029;
    ya[1] = 25459;
    if (115 !== Da[2] || 99 !== Da[3]) throw "Runtime error: expected the system to be little-endian!";
    b.HEAP = void 0;
    b.buffer = buffer;
    b.HEAP8 = va;
    b.HEAP16 = ya;
    b.HEAP32 = ma;
    b.HEAPU8 = Da;
    b.HEAPU16 = Xa;
    b.HEAPU32 = Ya;
    b.HEAPF32 = za;
    b.HEAPF64 = Aa;

    function hb(a) {
        for (; 0 < a.length;) {
            var c = a.shift();
            if ("function" == typeof c) c();
            else {
                var d = c.T;
                "number" === typeof d ? void 0 === c.k ? b.dynCall_v(d) : b.dynCall_vi(d, c.k) : d(void 0 === c.k ? null : c.k)
            }
        }
    }
    var ib = [],
        jb = [],
        kb = [],
        nb = [],
        ob = [],
        pb = !1;

    function qb() {
        var a = b.preRun.shift();
        ib.unshift(a)
    }

    function rb(a) {
        var c = Array(Oa(a) + 1);
        La(a, c, 0, c.length);
        return c
    }
    Math.imul && -5 === Math.imul(4294967295, 5) || (Math.imul = function (a, c) {
        var d = a & 65535,
            e = c & 65535;
        return d * e + ((a >>> 16) * e + d * (c >>> 16) << 16) | 0
    });
    Math.Y = Math.imul;
    if (!Math.fround) {
        var sb = new Float32Array(1);
        Math.fround = function (a) {
            sb[0] = a;
            return sb[0]
        }
    }
    Math.S = Math.fround;
    Math.clz32 || (Math.clz32 = function (a) {
        a = a >>> 0;
        for (var c = 0; 32 > c; c++)
            if (a & 1 << 31 - c) return c;
        return 32
    });
    Math.P = Math.clz32;
    Math.trunc || (Math.trunc = function (a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a)
    });
    Math.trunc = Math.trunc;
    var Ea = Math.abs,
        Ia = Math.ceil,
        Ha = Math.floor,
        Fa = Math.min,
        tb = 0,
        vb = null,
        wb = null;

    function xb() {
        tb++;
        b.monitorRunDependencies && b.monitorRunDependencies(tb)
    }

    function yb() {
        tb--;
        b.monitorRunDependencies && b.monitorRunDependencies(tb);
        if (0 == tb && (null !== vb && (clearInterval(vb), vb = null), wb)) {
            var a = wb;
            wb = null;
            a()
        }
    }
    b.preloadedImages = {};
    b.preloadedAudios = {};
    var zb = null;
    (function (a) {
        function c(c) {
            c = Wa(c, a.usingWasm ? Sa : Ua);
            var d = a.buffer,
                e = d.byteLength;
            if (a.usingWasm) try {
                return -1 !== a.wasmMemory.grow((c - e) / 65536) ? a.buffer = a.wasmMemory.buffer : null
            } catch (g) {
                return null
            } else return lb.__growWasmMemory((c - e) / 65536), a.buffer !== d ? a.buffer : null
        }

        function d(a, c) {
            var d = Ta;
            if (0 > a.indexOf(".")) d = (d || {})[a];
            else var e = a.split("."),
                d = (d || {})[e[0]],
                d = (d || {})[e[1]];
            c && (d = (d || {})[c]);
            void 0 === d && ta("bad lookupImport to (" + a + ")." + c);
            return d
        }

        function e(c) {
            var d = a.buffer;
            c.byteLength <
                d.byteLength && a.printErr("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");
            var d = new Int8Array(d),
                e = new Int8Array(c);
            zb || d.set(e.subarray(a.STATIC_BASE, a.STATIC_BASE + a.STATIC_BUMP), a.STATIC_BASE);
            e.set(d);
            b.buffer = buffer = c;
            Za()
        }

        function g() {
            try {
                var c;
                if (a.wasmBinary) c = a.wasmBinary, c = new Uint8Array(c);
                else if (a.readBinary) c = a.readBinary(G);
                else throw "on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";
                return c
            } catch (d) {
                ta(d)
            }
        }

        function l() {
            return a.wasmBinary || "function" !== typeof fetch ? new Promise(function (a) {
                a(g())
            }) : fetch(G, {
                Q: "same-origin"
            }).then(function (a) {
                if (!a.ok) throw "failed to load wasm binary file at '" + G + "'";
                return a.arrayBuffer()
            })
        }

        function m(c, d, e) {
            if ("function" !== typeof a.asm || a.asm === Ma) a.asmPreload ? a.asm = a.asmPreload : eval(a.read(Ga));
            return "function" !== typeof a.asm ? (a.printErr("asm evalling did not set the module properly"), !1) : a.asm(c, d, e)
        }

        function D(c, d) {
            function g(c) {
                lb = c.exports;
                lb.memory && e(lb.memory);
                a.asm = lb;
                a.usingWasm = !0;
                yb()
            }
            if ("object" !== typeof WebAssembly) return a.printErr("no native wasm support detected"), !1;
            if (!(a.wasmMemory instanceof WebAssembly.Memory)) return a.printErr("no native wasm Memory in use"), !1;
            d.memory = a.wasmMemory;
            Ta.global = {
                NaN: NaN,
                Infinity: Infinity
            };
            Ta["global.Math"] = c.Math;
            Ta.env = d;
            xb();
            if (a.instantiateWasm) try {
                return a.instantiateWasm(Ta, g)
            } catch (m) {
                return a.printErr("Module.instantiateWasm callback failed with error: " + m), !1
            }
            l().then(function (a) {
                return WebAssembly.instantiate(a,
                    Ta)
            }).then(function (a) {
                g(a.instance)
            }).catch(function (c) {
                a.printErr("failed to asynchronously prepare wasm: " + c);
                ta(c)
            });
            return {}
        }
        var na = a.wasmJSMethod || "native-wasm";
        a.wasmJSMethod = na;
        var wa = a.wasmTextFile || "Box2D_v2.3.1_min.wasm.wast",
            G = a.wasmBinaryFile || "Box2D_v2.3.1_min.wasm.wasm",
            Ga = a.asmjsCodeFile || "Box2D_v2.3.1_min.wasm.temp.asm.js";
        "function" === typeof a.locateFile && (wa = a.locateFile(wa), G = a.locateFile(G), Ga = a.locateFile(Ga));
        var Ta = {
            global: null,
            env: null,
            asm2wasm: {
                "f64-rem": function (a, c) {
                    return a %
                        c
                },
                "f64-to-int": function (a) {
                    return a | 0
                },
                "i32s-div": function (a, c) {
                    return (a | 0) / (c | 0) | 0
                },
                "i32u-div": function (a, c) {
                    return (a >>> 0) / (c >>> 0) >>> 0
                },
                "i32s-rem": function (a, c) {
                    return (a | 0) % (c | 0) | 0
                },
                "i32u-rem": function (a, c) {
                    return (a >>> 0) % (c >>> 0) >>> 0
                },
                "debugger": function () {
                    debugger
                }
            },
            parent: a
        },
            lb = null;
        a.asmPreload = a.asm;
        var ub = a.reallocBuffer;
        a.reallocBuffer = function (a) {
            return "asmjs" === qc ? ub(a) : c(a)
        };
        var qc = "";
        a.asm = function (c, l, G) {
            if (!l.table) {
                var Ma = a.wasmTableSize;
                void 0 === Ma && (Ma = 1024);
                var mb = a.wasmMaxTableSize;
                l.table = "object" === typeof WebAssembly && "function" === typeof WebAssembly.Table ? void 0 !== mb ? new WebAssembly.Table({
                    initial: Ma,
                    maximum: mb,
                    element: "anyfunc"
                }) : new WebAssembly.Table({
                    initial: Ma,
                    element: "anyfunc"
                }) : Array(Ma);
                a.wasmTable = l.table
            }
            l.memoryBase || (l.memoryBase = a.STATIC_BASE);
            l.tableBase || (l.tableBase = 0);
            for (var V, Ma = na.split(","), mb = 0; mb < Ma.length; mb++) {
                var sa = Ma[mb];
                qc = sa;
                if ("native-wasm" === sa) {
                    if (V = D(c, l)) break
                } else if ("asmjs" === sa) {
                    if (V = m(c, l, G)) break
                } else if ("interpret-asm2wasm" === sa || "interpret-s-expr" ===
                    sa || "interpret-binary" === sa) {
                    var Na = c,
                        xa = l,
                        ub = G;
                    if ("function" !== typeof WasmJS) a.printErr("WasmJS not detected - polyfill not bundled?"), sa = !1;
                    else {
                        V = WasmJS({});
                        V.outside = a;
                        V.info = Ta;
                        V.lookupImport = d;
                        assert(ub === a.buffer);
                        Ta.global = Na;
                        Ta.env = xa;
                        assert(ub === a.buffer);
                        xa.memory = ub;
                        assert(xa.memory instanceof ArrayBuffer);
                        V.providedTotalMemory = a.buffer.byteLength;
                        Na = void 0;
                        Na = "interpret-binary" === sa ? g() : a.read("interpret-asm2wasm" == sa ? Ga : wa);
                        xa = void 0;
                        if ("interpret-asm2wasm" == sa) xa = V._malloc(Na.length +
                            1), V.writeAsciiToMemory(Na, xa), V._load_asm2wasm(xa);
                        else if ("interpret-s-expr" === sa) xa = V._malloc(Na.length + 1), V.writeAsciiToMemory(Na, xa), V._load_s_expr2wasm(xa);
                        else if ("interpret-binary" === sa) xa = V._malloc(Na.length), V.HEAPU8.set(Na, xa), V._load_binary2wasm(xa, Na.length);
                        else throw "what? " + sa;
                        V._free(xa);
                        V._instantiate(xa);
                        a.newBuffer && (e(a.newBuffer), a.newBuffer = null);
                        sa = lb = V.asmExports
                    }
                    if (V = sa) break
                } else ta("bad method: " + sa)
            }
            if (!V) throw "no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods";
            return V
        };
        var Ma = a.asm
    })(b);
    var Ab = [function (a, c) {
        var d = b.getCache(b.JSDestructionListener)[a];
        if (!d.hasOwnProperty("SayGoodbyeJoint")) throw "a JSImplementation must implement all functions, you forgot JSDestructionListener::SayGoodbyeJoint.";
        d.SayGoodbyeJoint(c)
    }, function (a, c) {
        var d = b.getCache(b.JSDestructionListener)[a];
        if (!d.hasOwnProperty("SayGoodbyeFixture")) throw "a JSImplementation must implement all functions, you forgot JSDestructionListener::SayGoodbyeFixture.";
        d.SayGoodbyeFixture(c)
    }, function (a, c) {
        var d = b.getCache(b.JSQueryCallback)[a];
        if (!d.hasOwnProperty("ReportFixture")) throw "a JSImplementation must implement all functions, you forgot JSQueryCallback::ReportFixture.";
        return d.ReportFixture(c)
    }, function (a, c, d, e, g) {
        a = b.getCache(b.JSRayCastCallback)[a];
        if (!a.hasOwnProperty("ReportFixture")) throw "a JSImplementation must implement all functions, you forgot JSRayCastCallback::ReportFixture.";
        return a.ReportFixture(c, d, e, g)
    }, function (a, c) {
        var d = b.getCache(b.JSContactListener)[a];
        if (!d.hasOwnProperty("BeginContact")) throw "a JSImplementation must implement all functions, you forgot JSContactListener::BeginContact.";
        d.BeginContact(c)
    }, function (a, c) {
        var d = b.getCache(b.JSContactListener)[a];
        if (!d.hasOwnProperty("EndContact")) throw "a JSImplementation must implement all functions, you forgot JSContactListener::EndContact.";
        d.EndContact(c)
    }, function (a, c, d) {
        a = b.getCache(b.JSContactListener)[a];
        if (!a.hasOwnProperty("PreSolve")) throw "a JSImplementation must implement all functions, you forgot JSContactListener::PreSolve.";
        a.PreSolve(c, d)
    }, function (a, c, d) {
        a = b.getCache(b.JSContactListener)[a];
        if (!a.hasOwnProperty("PostSolve")) throw "a JSImplementation must implement all functions, you forgot JSContactListener::PostSolve.";
        a.PostSolve(c, d)
    }, function (a, c, d) {
        a = b.getCache(b.JSContactFilter)[a];
        if (!a.hasOwnProperty("ShouldCollide")) throw "a JSImplementation must implement all functions, you forgot JSContactFilter::ShouldCollide.";
        return a.ShouldCollide(c, d)
    }, function (a, c, d, e) {
        a = b.getCache(b.JSDraw)[a];
        if (!a.hasOwnProperty("DrawPolygon")) throw "a JSImplementation must implement all functions, you forgot JSDraw::DrawPolygon.";
        a.DrawPolygon(c, d, e)
    }, function (a, c, d, e) {
        a = b.getCache(b.JSDraw)[a];
        if (!a.hasOwnProperty("DrawSolidPolygon")) throw "a JSImplementation must implement all functions, you forgot JSDraw::DrawSolidPolygon.";
        a.DrawSolidPolygon(c, d, e)
    }, function (a, c, d, e) {
        a = b.getCache(b.JSDraw)[a];
        if (!a.hasOwnProperty("DrawCircle")) throw "a JSImplementation must implement all functions, you forgot JSDraw::DrawCircle.";
        a.DrawCircle(c, d, e)
    }, function (a, c, d, e, g) {
        a = b.getCache(b.JSDraw)[a];
        if (!a.hasOwnProperty("DrawSolidCircle")) throw "a JSImplementation must implement all functions, you forgot JSDraw::DrawSolidCircle.";
        a.DrawSolidCircle(c, d, e, g)
    }, function (a, c, d, e) {
        a = b.getCache(b.JSDraw)[a];
        if (!a.hasOwnProperty("DrawSegment")) throw "a JSImplementation must implement all functions, you forgot JSDraw::DrawSegment.";
        a.DrawSegment(c, d, e)
    }, function (a, c) {
        var d = b.getCache(b.JSDraw)[a];
        if (!d.hasOwnProperty("DrawTransform")) throw "a JSImplementation must implement all functions, you forgot JSDraw::DrawTransform.";
        d.DrawTransform(c)
    }];
    $a = f.i;
    la = $a + 23264;
    jb.push();
    zb = 0 <= b.wasmJSMethod.indexOf("asmjs") || 0 <= b.wasmJSMethod.indexOf("interpret-asm2wasm") ? "Box2D_v2.3.1_min.wasm.js.mem" : null;
    b.STATIC_BASE = $a;
    b.STATIC_BUMP = 23264;
    var Bb = la;
    la += 16;
    b._memset = Cb;

    function Db() {
        return !!Db.e
    }
    var Eb = 0,
        Fb = [],
        Gb = {};

    function Hb(a, c) {
        Hb.e || (Hb.e = {});
        a in Hb.e || (b.dynCall_v(c), Hb.e[a] = 1)
    }
    b._memcpy = Ib;
    var Jb = 0;

    function Kb() {
        Jb += 4;
        return ma[Jb - 4 >> 2]
    }
    var Lb = {},
        Mb = {};
    b._sbrk = Nb;
    var Ob = 1;

    function Pb() {
        var a = Eb;
        if (!a) return (f.f(0), 0) | 0;
        var c = Gb[a],
            d = c.type;
        if (!d) return (f.f(0), a) | 0;
        var e = Array.prototype.slice.call(arguments);
        b.___cxa_is_pointer_type(d);
        Pb.buffer || (Pb.buffer = Ca(4));
        ma[Pb.buffer >> 2] = a;
        for (var a = Pb.buffer, g = 0; g < e.length; g++)
            if (e[g] && b.___cxa_can_catch(e[g], d, a)) return a = ma[a >> 2], c.w = a, (f.f(e[g]), a) | 0;
        a = ma[a >> 2];
        return (f.f(d), a) | 0
    }
    b._llvm_bswap_i32 = Qb;

    function Rb(a, c) {
        Jb = c;
        try {
            var d = Kb(),
                e = Kb(),
                g = Kb(),
                l = 0;
            Rb.buffer || (Rb.e = [null, [],
                []
            ], Rb.q = function (a, c) {
                var d = Rb.e[a];
                assert(d);
                if (0 === c || 10 === c) {
                    var e = 1 === a ? b.print : b.printErr,
                        g;
                    a: {
                        for (var l = g = 0; d[l];) ++l;
                        if (16 < l - g && d.subarray && Ka) g = Ka.decode(d.subarray(g, l));
                        else
                            for (var m, D, G, na, wa, V, l = ""; ;) {
                                m = d[g++];
                                if (!m) {
                                    g = l;
                                    break a
                                }
                                m & 128 ? (D = d[g++] & 63, 192 == (m & 224) ? l += String.fromCharCode((m & 31) << 6 | D) : (G = d[g++] & 63, 224 == (m & 240) ? m = (m & 15) << 12 | D << 6 | G : (na = d[g++] & 63, 240 == (m & 248) ? m = (m & 7) << 18 | D << 12 | G << 6 | na : (wa = d[g++] &
                                    63, 248 == (m & 252) ? m = (m & 3) << 24 | D << 18 | G << 12 | na << 6 | wa : (V = d[g++] & 63, m = (m & 1) << 30 | D << 24 | G << 18 | na << 12 | wa << 6 | V))), 65536 > m ? l += String.fromCharCode(m) : (m -= 65536, l += String.fromCharCode(55296 | m >> 10, 56320 | m & 1023)))) : l += String.fromCharCode(m)
                            }
                    }
                    e(g);
                    d.length = 0
                } else d.push(c)
            });
            for (var m = 0; m < g; m++) {
                for (var D = ma[e + 8 * m >> 2], na = ma[e + (8 * m + 4) >> 2], wa = 0; wa < na; wa++) Rb.q(d, Da[D + wa]);
                l += na
            }
            return l
        } catch (G) {
            return "undefined" !== typeof FS && G instanceof FS.o || ta(G), -G.r
        }
    }
    nb.push(function () {
        var a = b._fflush;
        a && a(0);
        if (a = Rb.q) {
            var c = Rb.e;
            c[1].length && a(1, 10);
            c[2].length && a(2, 10)
        }
    });
    oa = Ba(1, "i32", 2);
    ab = ka = f.p(la);
    bb = ab + gb;
    cb = f.p(bb);
    ma[oa >> 2] = cb;
    b.wasmTableSize = 1152;
    b.wasmMaxTableSize = 1152;
    b.A = {
        Math: Math,
        Int8Array: Int8Array,
        Int16Array: Int16Array,
        Int32Array: Int32Array,
        Uint8Array: Uint8Array,
        Uint16Array: Uint16Array,
        Uint32Array: Uint32Array,
        Float32Array: Float32Array,
        Float64Array: Float64Array,
        NaN: NaN,
        Infinity: Infinity,
        byteLength: eb
    };
    b.B = {
        abort: ta,
        assert: assert,
        enlargeMemory: qa,
        getTotalMemory: function () {
            return pa
        },
        abortOnCannotGrowMemory: function () {
            ta("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value " + pa + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")
        },
        invoke_iiii: function (a, c, d, e) {
            try {
                return b.dynCall_iiii(a, c, d, e)
            } catch (g) {
                if ("number" !==
                    typeof g && "longjmp" !== g) throw g;
                b.setThrew(1, 0)
            }
        },
        jsCall_iiii: function (a, c, d, e) {
            return f.d[a](c, d, e)
        },
        invoke_viifii: function (a, c, d, e, g, l) {
            try {
                b.dynCall_viifii(a, c, d, e, g, l)
            } catch (m) {
                if ("number" !== typeof m && "longjmp" !== m) throw m;
                b.setThrew(1, 0)
            }
        },
        jsCall_viifii: function (a, c, d, e, g, l) {
            f.d[a](c, d, e, g, l)
        },
        invoke_viiiii: function (a, c, d, e, g, l) {
            try {
                b.dynCall_viiiii(a, c, d, e, g, l)
            } catch (m) {
                if ("number" !== typeof m && "longjmp" !== m) throw m;
                b.setThrew(1, 0)
            }
        },
        jsCall_viiiii: function (a, c, d, e, g, l) {
            f.d[a](c, d, e, g, l)
        },
        invoke_vi: function (a,
            c) {
            try {
                b.dynCall_vi(a, c)
            } catch (d) {
                if ("number" !== typeof d && "longjmp" !== d) throw d;
                b.setThrew(1, 0)
            }
        },
        jsCall_vi: function (a, c) {
            f.d[a](c)
        },
        invoke_vii: function (a, c, d) {
            try {
                b.dynCall_vii(a, c, d)
            } catch (e) {
                if ("number" !== typeof e && "longjmp" !== e) throw e;
                b.setThrew(1, 0)
            }
        },
        jsCall_vii: function (a, c, d) {
            f.d[a](c, d)
        },
        invoke_ii: function (a, c) {
            try {
                return b.dynCall_ii(a, c)
            } catch (d) {
                if ("number" !== typeof d && "longjmp" !== d) throw d;
                b.setThrew(1, 0)
            }
        },
        jsCall_ii: function (a, c) {
            return f.d[a](c)
        },
        invoke_fif: function (a, c, d) {
            try {
                return b.dynCall_fif(a,
                    c, d)
            } catch (e) {
                if ("number" !== typeof e && "longjmp" !== e) throw e;
                b.setThrew(1, 0)
            }
        },
        jsCall_fif: function (a, c, d) {
            return f.d[a](c, d)
        },
        invoke_viii: function (a, c, d, e) {
            try {
                b.dynCall_viii(a, c, d, e)
            } catch (g) {
                if ("number" !== typeof g && "longjmp" !== g) throw g;
                b.setThrew(1, 0)
            }
        },
        jsCall_viii: function (a, c, d, e) {
            f.d[a](c, d, e)
        },
        invoke_viifi: function (a, c, d, e, g) {
            try {
                b.dynCall_viifi(a, c, d, e, g)
            } catch (l) {
                if ("number" !== typeof l && "longjmp" !== l) throw l;
                b.setThrew(1, 0)
            }
        },
        jsCall_viifi: function (a, c, d, e, g) {
            f.d[a](c, d, e, g)
        },
        invoke_v: function (a) {
            try {
                b.dynCall_v(a)
            } catch (c) {
                if ("number" !==
                    typeof c && "longjmp" !== c) throw c;
                b.setThrew(1, 0)
            }
        },
        jsCall_v: function (a) {
            f.d[a]()
        },
        invoke_viif: function (a, c, d, e) {
            try {
                b.dynCall_viif(a, c, d, e)
            } catch (g) {
                if ("number" !== typeof g && "longjmp" !== g) throw g;
                b.setThrew(1, 0)
            }
        },
        jsCall_viif: function (a, c, d, e) {
            f.d[a](c, d, e)
        },
        invoke_viiiiii: function (a, c, d, e, g, l, m) {
            try {
                b.dynCall_viiiiii(a, c, d, e, g, l, m)
            } catch (D) {
                if ("number" !== typeof D && "longjmp" !== D) throw D;
                b.setThrew(1, 0)
            }
        },
        jsCall_viiiiii: function (a, c, d, e, g, l, m) {
            f.d[a](c, d, e, g, l, m)
        },
        invoke_iii: function (a, c, d) {
            try {
                return b.dynCall_iii(a,
                    c, d)
            } catch (e) {
                if ("number" !== typeof e && "longjmp" !== e) throw e;
                b.setThrew(1, 0)
            }
        },
        jsCall_iii: function (a, c, d) {
            return f.d[a](c, d)
        },
        invoke_iiiiii: function (a, c, d, e, g, l) {
            try {
                return b.dynCall_iiiiii(a, c, d, e, g, l)
            } catch (m) {
                if ("number" !== typeof m && "longjmp" !== m) throw m;
                b.setThrew(1, 0)
            }
        },
        jsCall_iiiiii: function (a, c, d, e, g, l) {
            return f.d[a](c, d, e, g, l)
        },
        invoke_fiiiif: function (a, c, d, e, g, l) {
            try {
                return b.dynCall_fiiiif(a, c, d, e, g, l)
            } catch (m) {
                if ("number" !== typeof m && "longjmp" !== m) throw m;
                b.setThrew(1, 0)
            }
        },
        jsCall_fiiiif: function (a,
            c, d, e, g, l) {
            return f.d[a](c, d, e, g, l)
        },
        invoke_viiii: function (a, c, d, e, g) {
            try {
                b.dynCall_viiii(a, c, d, e, g)
            } catch (l) {
                if ("number" !== typeof l && "longjmp" !== l) throw l;
                b.setThrew(1, 0)
            }
        },
        jsCall_viiii: function (a, c, d, e, g) {
            f.d[a](c, d, e, g)
        },
        _emscripten_asm_const_iiiii: function (a, c, d, e, g) {
            return Ab[a](c, d, e, g)
        },
        _emscripten_asm_const_diiiid: function (a, c, d, e, g, l) {
            return Ab[a](c, d, e, g, l)
        },
        _pthread_key_create: function (a) {
            if (0 == a) return 22;
            ma[a >> 2] = Ob;
            Mb[Ob] = 0;
            Ob++;
            return 0
        },
        _abort: function () {
            b.abort()
        },
        ___gxx_personality_v0: function () { },
        _emscripten_asm_const_iiidii: function (a, c, d, e, g, l) {
            return Ab[a](c, d, e, g, l)
        },
        ___assert_fail: function (a, c, d, e) {
            ra = !0;
            throw "Assertion failed: " + Ja(a) + ", at: " + [c ? Ja(c) : "unknown filename", d, e ? Ja(e) : "unknown function"] + " at " + Ra();
        },
        __ZSt18uncaught_exceptionv: Db,
        ___setErrNo: function (a) {
            b.___errno_location && (ma[b.___errno_location() >> 2] = a);
            return a
        },
        ___cxa_begin_catch: function (a) {
            var c = Gb[a];
            c && !c.C && (c.C = !0, Db.e--);
            c && (c.da = !1);
            Fb.push(a);
            a: {
                if (a && !Gb[a])
                    for (var d in Gb)
                        if (Gb[d].w === a) {
                            c = d;
                            break a
                        }
                c = a
            }
            c &&
                Gb[c].ba++;
            return a
        },
        _emscripten_memcpy_big: function (a, c, d) {
            Da.set(Da.subarray(c, c + d), a);
            return a
        },
        ___resumeException: function (a) {
            Eb || (Eb = a);
            throw a + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.";
        },
        ___cxa_find_matching_catch: Pb,
        _pthread_getspecific: function (a) {
            return Mb[a] || 0
        },
        _pthread_once: Hb,
        ___syscall54: function (a, c) {
            Jb = c;
            return 0
        },
        _emscripten_asm_const_iii: function (a, c, d) {
            return Ab[a](c,
                d)
        },
        _emscripten_asm_const_iiidi: function (a, c, d, e, g) {
            return Ab[a](c, d, e, g)
        },
        _pthread_setspecific: function (a, c) {
            if (!(a in Mb)) return 22;
            Mb[a] = c;
            return 0
        },
        _emscripten_asm_const_iiii: function (a, c, d, e) {
            return Ab[a](c, d, e)
        },
        ___syscall6: function (a, c) {
            Jb = c;
            try {
                var d = Lb.G();
                FS.close(d);
                return 0
            } catch (e) {
                return "undefined" !== typeof FS && e instanceof FS.o || ta(e), -e.r
            }
        },
        ___syscall140: function (a, c) {
            Jb = c;
            try {
                var d = Lb.G();
                Kb();
                var e = Kb(),
                    g = Kb(),
                    l = Kb();
                FS.Z(d, e, l);
                ma[g >> 2] = d.position;
                d.I && 0 === e && 0 === l && (d.I = null);
                return 0
            } catch (m) {
                return "undefined" !== typeof FS && m instanceof FS.o || ta(m), -m.r
            }
        },
        ___cxa_pure_virtual: function () {
            ra = !0;
            throw "Pure virtual function called!";
        },
        ___syscall146: Rb,
        DYNAMICTOP_PTR: oa,
        tempDoublePtr: Bb,
        ABORT: ra,
        STACKTOP: ka,
        STACK_MAX: bb
    };
    var Sb = b.asm(b.A, b.B, buffer);
    b.asm = Sb;
    var Tb = b._emscripten_bind_b2WheelJoint_GetSpringDampingRatio_0 = function () {
        return b.asm._emscripten_bind_b2WheelJoint_GetSpringDampingRatio_0.apply(null, arguments)
    },
        Ub = b._emscripten_bind_b2ContactEdge_set_next_1 = function () {
            return b.asm._emscripten_bind_b2ContactEdge_set_next_1.apply(null, arguments)
        },
        Vb = b._emscripten_bind_b2ChainShape_get_m_count_0 = function () {
            return b.asm._emscripten_bind_b2ChainShape_get_m_count_0.apply(null, arguments)
        },
        Wb = b._emscripten_bind_b2PrismaticJointDef_get_motorSpeed_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_get_motorSpeed_0.apply(null,
                arguments)
        },
        Xb = b._emscripten_bind_b2PulleyJoint_SetUserData_1 = function () {
            return b.asm._emscripten_bind_b2PulleyJoint_SetUserData_1.apply(null, arguments)
        },
        Yb = b._emscripten_bind_b2Shape_ComputeAABB_3 = function () {
            return b.asm._emscripten_bind_b2Shape_ComputeAABB_3.apply(null, arguments)
        },
        Zb = b._emscripten_bind_b2FrictionJointDef_set_userData_1 = function () {
            return b.asm._emscripten_bind_b2FrictionJointDef_set_userData_1.apply(null, arguments)
        },
        $b = b._emscripten_bind_b2MouseJoint_IsActive_0 = function () {
            return b.asm._emscripten_bind_b2MouseJoint_IsActive_0.apply(null,
                arguments)
        },
        ac = b._emscripten_bind_b2World_IsLocked_0 = function () {
            return b.asm._emscripten_bind_b2World_IsLocked_0.apply(null, arguments)
        },
        bc = b._emscripten_bind_b2Draw_GetFlags_0 = function () {
            return b.asm._emscripten_bind_b2Draw_GetFlags_0.apply(null, arguments)
        },
        cc = b._emscripten_bind_b2FrictionJoint_IsActive_0 = function () {
            return b.asm._emscripten_bind_b2FrictionJoint_IsActive_0.apply(null, arguments)
        },
        dc = b._emscripten_bind_b2Color_set_g_1 = function () {
            return b.asm._emscripten_bind_b2Color_set_g_1.apply(null,
                arguments)
        },
        ec = b._emscripten_bind_b2PolygonShape_RayCast_4 = function () {
            return b.asm._emscripten_bind_b2PolygonShape_RayCast_4.apply(null, arguments)
        },
        fc = b._emscripten_bind_b2World_GetTreeBalance_0 = function () {
            return b.asm._emscripten_bind_b2World_GetTreeBalance_0.apply(null, arguments)
        },
        gc = b._emscripten_bind_b2ChainShape_get_m_vertices_0 = function () {
            return b.asm._emscripten_bind_b2ChainShape_get_m_vertices_0.apply(null, arguments)
        },
        hc = b._emscripten_bind_JSDraw_DrawSolidCircle_4 = function () {
            return b.asm._emscripten_bind_JSDraw_DrawSolidCircle_4.apply(null,
                arguments)
        },
        ic = b._emscripten_bind_b2RevoluteJoint_GetLocalAnchorA_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJoint_GetLocalAnchorA_0.apply(null, arguments)
        },
        jc = b._emscripten_bind_b2FixtureDef_get_filter_0 = function () {
            return b.asm._emscripten_bind_b2FixtureDef_get_filter_0.apply(null, arguments)
        },
        kc = b._emscripten_bind_b2FrictionJointDef_get_type_0 = function () {
            return b.asm._emscripten_bind_b2FrictionJointDef_get_type_0.apply(null, arguments)
        },
        lc = b._emscripten_bind_b2MotorJointDef_set_type_1 = function () {
            return b.asm._emscripten_bind_b2MotorJointDef_set_type_1.apply(null,
                arguments)
        },
        mc = b._emscripten_bind_b2FixtureDef_set_userData_1 = function () {
            return b.asm._emscripten_bind_b2FixtureDef_set_userData_1.apply(null, arguments)
        },
        nc = b._emscripten_bind_b2EdgeShape_set_m_hasVertex3_1 = function () {
            return b.asm._emscripten_bind_b2EdgeShape_set_m_hasVertex3_1.apply(null, arguments)
        },
        oc = b._emscripten_bind_b2JointEdge_set_joint_1 = function () {
            return b.asm._emscripten_bind_b2JointEdge_set_joint_1.apply(null, arguments)
        },
        pc = b._emscripten_bind_b2Fixture___destroy___0 = function () {
            return b.asm._emscripten_bind_b2Fixture___destroy___0.apply(null,
                arguments)
        },
        rc = b._emscripten_bind_b2World_SetWarmStarting_1 = function () {
            return b.asm._emscripten_bind_b2World_SetWarmStarting_1.apply(null, arguments)
        },
        sc = b._emscripten_bind_JSDraw_DrawCircle_3 = function () {
            return b.asm._emscripten_bind_JSDraw_DrawCircle_3.apply(null, arguments)
        },
        tc = b._emscripten_bind_b2WeldJoint_IsActive_0 = function () {
            return b.asm._emscripten_bind_b2WeldJoint_IsActive_0.apply(null, arguments)
        },
        uc = b._emscripten_bind_b2DestructionListener___destroy___0 = function () {
            return b.asm._emscripten_bind_b2DestructionListener___destroy___0.apply(null,
                arguments)
        },
        vc = b._emscripten_bind_b2BodyDef_set_type_1 = function () {
            return b.asm._emscripten_bind_b2BodyDef_set_type_1.apply(null, arguments)
        },
        wc = b._emscripten_bind_b2ChainShape_ComputeAABB_3 = function () {
            return b.asm._emscripten_bind_b2ChainShape_ComputeAABB_3.apply(null, arguments)
        },
        xc = b._emscripten_bind_b2PulleyJoint_GetUserData_0 = function () {
            return b.asm._emscripten_bind_b2PulleyJoint_GetUserData_0.apply(null, arguments)
        },
        yc = b._emscripten_bind_b2WeldJoint_GetReactionTorque_1 = function () {
            return b.asm._emscripten_bind_b2WeldJoint_GetReactionTorque_1.apply(null,
                arguments)
        },
        zc = b._emscripten_bind_b2MotorJointDef_get_maxForce_0 = function () {
            return b.asm._emscripten_bind_b2MotorJointDef_get_maxForce_0.apply(null, arguments)
        },
        Ac = b._emscripten_bind_b2DistanceJointDef_get_userData_0 = function () {
            return b.asm._emscripten_bind_b2DistanceJointDef_get_userData_0.apply(null, arguments)
        },
        Bc = b._emscripten_bind_b2BodyDef_get_position_0 = function () {
            return b.asm._emscripten_bind_b2BodyDef_get_position_0.apply(null, arguments)
        },
        Cc = b._emscripten_bind_b2RevoluteJointDef_set_userData_1 =
            function () {
                return b.asm._emscripten_bind_b2RevoluteJointDef_set_userData_1.apply(null, arguments)
            },
        Dc = b._emscripten_bind_b2WorldManifold_b2WorldManifold_0 = function () {
            return b.asm._emscripten_bind_b2WorldManifold_b2WorldManifold_0.apply(null, arguments)
        },
        Ec = b._emscripten_bind_b2WheelJointDef_get_collideConnected_0 = function () {
            return b.asm._emscripten_bind_b2WheelJointDef_get_collideConnected_0.apply(null, arguments)
        },
        Fc = b._emscripten_bind_b2MouseJointDef_set_userData_1 = function () {
            return b.asm._emscripten_bind_b2MouseJointDef_set_userData_1.apply(null,
                arguments)
        };
    b.stackSave = function () {
        return b.asm.stackSave.apply(null, arguments)
    };
    var Gc = b._emscripten_bind_b2FixtureDef_set_restitution_1 = function () {
        return b.asm._emscripten_bind_b2FixtureDef_set_restitution_1.apply(null, arguments)
    },
        Hc = b._emscripten_bind_b2RevoluteJoint_GetUserData_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJoint_GetUserData_0.apply(null, arguments)
        },
        Ic = b._emscripten_bind_b2Mat33_get_ey_0 = function () {
            return b.asm._emscripten_bind_b2Mat33_get_ey_0.apply(null, arguments)
        },
        Jc = b._emscripten_bind_b2MouseJoint_GetCollideConnected_0 = function () {
            return b.asm._emscripten_bind_b2MouseJoint_GetCollideConnected_0.apply(null,
                arguments)
        },
        Kc = b._emscripten_bind_b2World_GetGravity_0 = function () {
            return b.asm._emscripten_bind_b2World_GetGravity_0.apply(null, arguments)
        },
        Lc = b._emscripten_bind_b2Mat33_set_ey_1 = function () {
            return b.asm._emscripten_bind_b2Mat33_set_ey_1.apply(null, arguments)
        },
        Mc = b._emscripten_bind_b2Profile_get_broadphase_0 = function () {
            return b.asm._emscripten_bind_b2Profile_get_broadphase_0.apply(null, arguments)
        },
        Nc = b._emscripten_bind_b2PulleyJointDef_get_bodyA_0 = function () {
            return b.asm._emscripten_bind_b2PulleyJointDef_get_bodyA_0.apply(null,
                arguments)
        },
        Oc = b._emscripten_bind_b2PrismaticJoint_SetLimits_2 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint_SetLimits_2.apply(null, arguments)
        },
        Pc = b._emscripten_bind_b2PulleyJointDef_get_localAnchorA_0 = function () {
            return b.asm._emscripten_bind_b2PulleyJointDef_get_localAnchorA_0.apply(null, arguments)
        },
        Qc = b._emscripten_bind_b2DistanceJoint_GetAnchorA_0 = function () {
            return b.asm._emscripten_bind_b2DistanceJoint_GetAnchorA_0.apply(null, arguments)
        },
        Rc = b._emscripten_bind_b2DistanceJointDef_set_userData_1 =
            function () {
                return b.asm._emscripten_bind_b2DistanceJointDef_set_userData_1.apply(null, arguments)
            },
        Sc = b._emscripten_bind_b2DistanceJointDef_set_dampingRatio_1 = function () {
            return b.asm._emscripten_bind_b2DistanceJointDef_set_dampingRatio_1.apply(null, arguments)
        },
        Tc = b._emscripten_bind_b2RopeJointDef_set_collideConnected_1 = function () {
            return b.asm._emscripten_bind_b2RopeJointDef_set_collideConnected_1.apply(null, arguments)
        },
        Uc = b._emscripten_bind_b2ChainShape_set_m_nextVertex_1 = function () {
            return b.asm._emscripten_bind_b2ChainShape_set_m_nextVertex_1.apply(null,
                arguments)
        },
        Vc = b._emscripten_bind_JSContactListener_EndContact_1 = function () {
            return b.asm._emscripten_bind_JSContactListener_EndContact_1.apply(null, arguments)
        },
        Wc = b._emscripten_bind_b2MassData_set_mass_1 = function () {
            return b.asm._emscripten_bind_b2MassData_set_mass_1.apply(null, arguments)
        },
        Xc = b._emscripten_bind_b2Vec3_get_x_0 = function () {
            return b.asm._emscripten_bind_b2Vec3_get_x_0.apply(null, arguments)
        },
        Yc = b._emscripten_bind_b2ChainShape_CreateChain_2 = function () {
            return b.asm._emscripten_bind_b2ChainShape_CreateChain_2.apply(null,
                arguments)
        },
        Zc = b._emscripten_bind_b2RopeJoint_GetUserData_0 = function () {
            return b.asm._emscripten_bind_b2RopeJoint_GetUserData_0.apply(null, arguments)
        },
        $c = b._emscripten_bind_b2World_DestroyBody_1 = function () {
            return b.asm._emscripten_bind_b2World_DestroyBody_1.apply(null, arguments)
        },
        ad = b._emscripten_bind_b2Profile_get_solvePosition_0 = function () {
            return b.asm._emscripten_bind_b2Profile_get_solvePosition_0.apply(null, arguments)
        },
        bd = b._emscripten_bind_b2Shape_RayCast_4 = function () {
            return b.asm._emscripten_bind_b2Shape_RayCast_4.apply(null,
                arguments)
        },
        cd = b._emscripten_bind_b2PulleyJoint_GetGroundAnchorA_0 = function () {
            return b.asm._emscripten_bind_b2PulleyJoint_GetGroundAnchorA_0.apply(null, arguments)
        },
        dd = b._emscripten_bind_b2Mat33___destroy___0 = function () {
            return b.asm._emscripten_bind_b2Mat33___destroy___0.apply(null, arguments)
        },
        ed = b._emscripten_bind_b2GearJoint_GetReactionTorque_1 = function () {
            return b.asm._emscripten_bind_b2GearJoint_GetReactionTorque_1.apply(null, arguments)
        },
        fd = b._emscripten_bind_b2WeldJointDef_set_collideConnected_1 =
            function () {
                return b.asm._emscripten_bind_b2WeldJointDef_set_collideConnected_1.apply(null, arguments)
            },
        gd = b._emscripten_bind_b2JointDef_get_collideConnected_0 = function () {
            return b.asm._emscripten_bind_b2JointDef_get_collideConnected_0.apply(null, arguments)
        };
    b.getTempRet0 = function () {
        return b.asm.getTempRet0.apply(null, arguments)
    };
    var hd = b._emscripten_bind_b2FrictionJointDef_get_maxTorque_0 = function () {
        return b.asm._emscripten_bind_b2FrictionJointDef_get_maxTorque_0.apply(null, arguments)
    },
        id = b._emscripten_bind_JSQueryCallback_JSQueryCallback_0 = function () {
            return b.asm._emscripten_bind_JSQueryCallback_JSQueryCallback_0.apply(null, arguments)
        },
        jd = b._emscripten_bind_b2World_SetAutoClearForces_1 = function () {
            return b.asm._emscripten_bind_b2World_SetAutoClearForces_1.apply(null, arguments)
        },
        kd = b._emscripten_bind_b2PrismaticJointDef_set_lowerTranslation_1 =
            function () {
                return b.asm._emscripten_bind_b2PrismaticJointDef_set_lowerTranslation_1.apply(null, arguments)
            },
        ld = b._emscripten_bind_b2Contact_GetTangentSpeed_0 = function () {
            return b.asm._emscripten_bind_b2Contact_GetTangentSpeed_0.apply(null, arguments)
        },
        md = b._emscripten_bind_b2BodyDef_set_position_1 = function () {
            return b.asm._emscripten_bind_b2BodyDef_set_position_1.apply(null, arguments)
        },
        nd = b._emscripten_bind_b2Transform_get_q_0 = function () {
            return b.asm._emscripten_bind_b2Transform_get_q_0.apply(null, arguments)
        },
        od = b._emscripten_bind_b2PolygonShape_set_m_count_1 = function () {
            return b.asm._emscripten_bind_b2PolygonShape_set_m_count_1.apply(null, arguments)
        },
        pd = b._emscripten_bind_b2Contact_GetNext_0 = function () {
            return b.asm._emscripten_bind_b2Contact_GetNext_0.apply(null, arguments)
        },
        qd = b._emscripten_bind_b2MotorJointDef_set_userData_1 = function () {
            return b.asm._emscripten_bind_b2MotorJointDef_set_userData_1.apply(null, arguments)
        },
        rd = b._emscripten_bind_b2GearJoint_GetJoint1_0 = function () {
            return b.asm._emscripten_bind_b2GearJoint_GetJoint1_0.apply(null,
                arguments)
        },
        sd = b._emscripten_bind_b2World_GetProxyCount_0 = function () {
            return b.asm._emscripten_bind_b2World_GetProxyCount_0.apply(null, arguments)
        },
        td = b._emscripten_bind_b2MotorJoint_SetMaxTorque_1 = function () {
            return b.asm._emscripten_bind_b2MotorJoint_SetMaxTorque_1.apply(null, arguments)
        },
        ud = b._emscripten_bind_b2GearJoint_GetAnchorA_0 = function () {
            return b.asm._emscripten_bind_b2GearJoint_GetAnchorA_0.apply(null, arguments)
        },
        vd = b._emscripten_bind_b2MouseJointDef_set_bodyA_1 = function () {
            return b.asm._emscripten_bind_b2MouseJointDef_set_bodyA_1.apply(null,
                arguments)
        },
        wd = b._emscripten_bind_b2World_SetContactListener_1 = function () {
            return b.asm._emscripten_bind_b2World_SetContactListener_1.apply(null, arguments)
        },
        xd = b._emscripten_bind_b2Body_IsAwake_0 = function () {
            return b.asm._emscripten_bind_b2Body_IsAwake_0.apply(null, arguments)
        },
        yd = b._emscripten_bind_b2JointEdge_set_other_1 = function () {
            return b.asm._emscripten_bind_b2JointEdge_set_other_1.apply(null, arguments)
        },
        zd = b._emscripten_bind_b2MouseJointDef_set_target_1 = function () {
            return b.asm._emscripten_bind_b2MouseJointDef_set_target_1.apply(null,
                arguments)
        },
        db = b._emscripten_replace_memory = function () {
            return b.asm._emscripten_replace_memory.apply(null, arguments)
        },
        Ad = b._emscripten_bind_b2MotorJoint_SetCorrectionFactor_1 = function () {
            return b.asm._emscripten_bind_b2MotorJoint_SetCorrectionFactor_1.apply(null, arguments)
        },
        Bd = b._emscripten_bind_b2FixtureDef_get_density_0 = function () {
            return b.asm._emscripten_bind_b2FixtureDef_get_density_0.apply(null, arguments)
        },
        Cd = b._emscripten_bind_b2GearJoint_GetRatio_0 = function () {
            return b.asm._emscripten_bind_b2GearJoint_GetRatio_0.apply(null,
                arguments)
        },
        Dd = b._emscripten_bind_b2PrismaticJointDef_get_upperTranslation_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_get_upperTranslation_0.apply(null, arguments)
        },
        Ed = b._emscripten_bind_b2RevoluteJoint_GetReferenceAngle_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJoint_GetReferenceAngle_0.apply(null, arguments)
        },
        Fd = b._emscripten_bind_b2MotorJointDef_get_collideConnected_0 = function () {
            return b.asm._emscripten_bind_b2MotorJointDef_get_collideConnected_0.apply(null, arguments)
        },
        Gd = b._emscripten_enum_b2ManifoldType_e_circles = function () {
            return b.asm._emscripten_enum_b2ManifoldType_e_circles.apply(null, arguments)
        },
        Hd = b._emscripten_bind_b2PulleyJointDef_set_localAnchorB_1 = function () {
            return b.asm._emscripten_bind_b2PulleyJointDef_set_localAnchorB_1.apply(null, arguments)
        },
        Id = b._emscripten_bind_b2RevoluteJointDef_Initialize_3 = function () {
            return b.asm._emscripten_bind_b2RevoluteJointDef_Initialize_3.apply(null, arguments)
        },
        Jd = b._emscripten_bind_b2FixtureDef_get_userData_0 = function () {
            return b.asm._emscripten_bind_b2FixtureDef_get_userData_0.apply(null,
                arguments)
        },
        Kd = b._emscripten_bind_b2DistanceJoint_GetUserData_0 = function () {
            return b.asm._emscripten_bind_b2DistanceJoint_GetUserData_0.apply(null, arguments)
        },
        Ld = b._emscripten_bind_b2FrictionJointDef_set_collideConnected_1 = function () {
            return b.asm._emscripten_bind_b2FrictionJointDef_set_collideConnected_1.apply(null, arguments)
        },
        Md = b._emscripten_bind_b2PrismaticJointDef_get_lowerTranslation_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_get_lowerTranslation_0.apply(null, arguments)
        },
        Nd =
            b._emscripten_bind_b2GearJoint_GetCollideConnected_0 = function () {
                return b.asm._emscripten_bind_b2GearJoint_GetCollideConnected_0.apply(null, arguments)
            },
        Od = b._emscripten_bind_b2Filter_b2Filter_0 = function () {
            return b.asm._emscripten_bind_b2Filter_b2Filter_0.apply(null, arguments)
        },
        Pd = b._emscripten_bind_b2MouseJointDef_set_type_1 = function () {
            return b.asm._emscripten_bind_b2MouseJointDef_set_type_1.apply(null, arguments)
        },
        Qd = b._emscripten_bind_b2Body_ApplyAngularImpulse_2 = function () {
            return b.asm._emscripten_bind_b2Body_ApplyAngularImpulse_2.apply(null,
                arguments)
        },
        Rd = b._emscripten_enum_b2JointType_e_frictionJoint = function () {
            return b.asm._emscripten_enum_b2JointType_e_frictionJoint.apply(null, arguments)
        },
        Sd = b._emscripten_bind_b2RayCastOutput_set_fraction_1 = function () {
            return b.asm._emscripten_bind_b2RayCastOutput_set_fraction_1.apply(null, arguments)
        },
        Td = b._emscripten_bind_b2Color_set_r_1 = function () {
            return b.asm._emscripten_bind_b2Color_set_r_1.apply(null, arguments)
        },
        Ud = b._emscripten_bind_b2DistanceJointDef_get_length_0 = function () {
            return b.asm._emscripten_bind_b2DistanceJointDef_get_length_0.apply(null,
                arguments)
        },
        Vd = b._emscripten_bind_b2PulleyJoint_GetBodyB_0 = function () {
            return b.asm._emscripten_bind_b2PulleyJoint_GetBodyB_0.apply(null, arguments)
        },
        Wd = b._emscripten_bind_b2WheelJointDef_set_type_1 = function () {
            return b.asm._emscripten_bind_b2WheelJointDef_set_type_1.apply(null, arguments)
        },
        Xd = b._emscripten_bind_b2World_GetTreeQuality_0 = function () {
            return b.asm._emscripten_bind_b2World_GetTreeQuality_0.apply(null, arguments)
        },
        Yd = b._emscripten_bind_b2BodyDef_set_gravityScale_1 = function () {
            return b.asm._emscripten_bind_b2BodyDef_set_gravityScale_1.apply(null,
                arguments)
        },
        Zd = b._emscripten_bind_b2RopeJointDef_set_bodyB_1 = function () {
            return b.asm._emscripten_bind_b2RopeJointDef_set_bodyB_1.apply(null, arguments)
        },
        $d = b._emscripten_bind_b2PrismaticJoint_GetLowerLimit_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint_GetLowerLimit_0.apply(null, arguments)
        },
        ae = b._emscripten_bind_b2AABB_get_lowerBound_0 = function () {
            return b.asm._emscripten_bind_b2AABB_get_lowerBound_0.apply(null, arguments)
        },
        be = b._emscripten_bind_b2WheelJoint_SetMotorSpeed_1 = function () {
            return b.asm._emscripten_bind_b2WheelJoint_SetMotorSpeed_1.apply(null,
                arguments)
        },
        ce = b._emscripten_bind_b2PrismaticJointDef_get_referenceAngle_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_get_referenceAngle_0.apply(null, arguments)
        },
        de = b._emscripten_bind_b2Body_SetMassData_1 = function () {
            return b.asm._emscripten_bind_b2Body_SetMassData_1.apply(null, arguments)
        },
        ee = b._emscripten_bind_b2BodyDef_get_angularVelocity_0 = function () {
            return b.asm._emscripten_bind_b2BodyDef_get_angularVelocity_0.apply(null, arguments)
        },
        fe = b._emscripten_bind_b2WeldJoint_SetDampingRatio_1 =
            function () {
                return b.asm._emscripten_bind_b2WeldJoint_SetDampingRatio_1.apply(null, arguments)
            },
        ge = b._emscripten_bind_b2PrismaticJointDef___destroy___0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef___destroy___0.apply(null, arguments)
        },
        he = b._emscripten_bind_b2Contact_IsTouching_0 = function () {
            return b.asm._emscripten_bind_b2Contact_IsTouching_0.apply(null, arguments)
        },
        ie = b._emscripten_bind_b2Draw_SetFlags_1 = function () {
            return b.asm._emscripten_bind_b2Draw_SetFlags_1.apply(null, arguments)
        },
        je = b._emscripten_bind_b2AABB_Contains_1 = function () {
            return b.asm._emscripten_bind_b2AABB_Contains_1.apply(null, arguments)
        },
        ke = b._emscripten_bind_b2DistanceJoint_GetNext_0 = function () {
            return b.asm._emscripten_bind_b2DistanceJoint_GetNext_0.apply(null, arguments)
        },
        le = b._emscripten_bind_b2EdgeShape_set_m_radius_1 = function () {
            return b.asm._emscripten_bind_b2EdgeShape_set_m_radius_1.apply(null, arguments)
        },
        me = b._emscripten_bind_b2DistanceJointDef_get_dampingRatio_0 = function () {
            return b.asm._emscripten_bind_b2DistanceJointDef_get_dampingRatio_0.apply(null,
                arguments)
        },
        ne = b._emscripten_bind_b2DistanceJoint_GetLocalAnchorA_0 = function () {
            return b.asm._emscripten_bind_b2DistanceJoint_GetLocalAnchorA_0.apply(null, arguments)
        },
        oe = b._emscripten_bind_b2PrismaticJoint_GetType_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint_GetType_0.apply(null, arguments)
        },
        pe = b._emscripten_bind_b2Fixture_GetRestitution_0 = function () {
            return b.asm._emscripten_bind_b2Fixture_GetRestitution_0.apply(null, arguments)
        },
        qe = b._emscripten_bind_b2Transform_set_q_1 = function () {
            return b.asm._emscripten_bind_b2Transform_set_q_1.apply(null,
                arguments)
        },
        re = b._emscripten_bind_b2PolygonShape___destroy___0 = function () {
            return b.asm._emscripten_bind_b2PolygonShape___destroy___0.apply(null, arguments)
        },
        se = b._emscripten_bind_b2AABB_get_upperBound_0 = function () {
            return b.asm._emscripten_bind_b2AABB_get_upperBound_0.apply(null, arguments)
        },
        te = b._emscripten_bind_b2Transform___destroy___0 = function () {
            return b.asm._emscripten_bind_b2Transform___destroy___0.apply(null, arguments)
        },
        ue = b._emscripten_bind_b2Body_GetLinearVelocity_0 = function () {
            return b.asm._emscripten_bind_b2Body_GetLinearVelocity_0.apply(null,
                arguments)
        },
        ve = b._emscripten_bind_b2CircleShape_set_m_radius_1 = function () {
            return b.asm._emscripten_bind_b2CircleShape_set_m_radius_1.apply(null, arguments)
        },
        we = b._emscripten_bind_b2EdgeShape_set_m_hasVertex0_1 = function () {
            return b.asm._emscripten_bind_b2EdgeShape_set_m_hasVertex0_1.apply(null, arguments)
        },
        xe = b._emscripten_bind_b2Contact_GetWorldManifold_1 = function () {
            return b.asm._emscripten_bind_b2Contact_GetWorldManifold_1.apply(null, arguments)
        },
        ye = b._emscripten_bind_b2RopeJoint_GetMaxLength_0 = function () {
            return b.asm._emscripten_bind_b2RopeJoint_GetMaxLength_0.apply(null,
                arguments)
        },
        ze = b._emscripten_bind_b2GearJoint_GetUserData_0 = function () {
            return b.asm._emscripten_bind_b2GearJoint_GetUserData_0.apply(null, arguments)
        },
        Ae = b._emscripten_bind_b2MotorJoint_GetCollideConnected_0 = function () {
            return b.asm._emscripten_bind_b2MotorJoint_GetCollideConnected_0.apply(null, arguments)
        },
        Be = b._emscripten_bind_b2GearJointDef_set_type_1 = function () {
            return b.asm._emscripten_bind_b2GearJointDef_set_type_1.apply(null, arguments)
        },
        Ce = b._emscripten_bind_b2DistanceJoint_SetDampingRatio_1 = function () {
            return b.asm._emscripten_bind_b2DistanceJoint_SetDampingRatio_1.apply(null,
                arguments)
        },
        De = b._emscripten_bind_b2Contact_GetFixtureA_0 = function () {
            return b.asm._emscripten_bind_b2Contact_GetFixtureA_0.apply(null, arguments)
        },
        Ee = b._emscripten_bind_b2PulleyJointDef_get_ratio_0 = function () {
            return b.asm._emscripten_bind_b2PulleyJointDef_get_ratio_0.apply(null, arguments)
        },
        Fe = b._emscripten_bind_b2PrismaticJointDef_get_localAnchorB_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_get_localAnchorB_0.apply(null, arguments)
        },
        Ge = b._emscripten_bind_b2CircleShape_set_m_type_1 =
            function () {
                return b.asm._emscripten_bind_b2CircleShape_set_m_type_1.apply(null, arguments)
            },
        He = b._emscripten_bind_b2DistanceJointDef_set_localAnchorA_1 = function () {
            return b.asm._emscripten_bind_b2DistanceJointDef_set_localAnchorA_1.apply(null, arguments)
        },
        Ie = b._emscripten_bind_b2RopeJoint_GetAnchorB_0 = function () {
            return b.asm._emscripten_bind_b2RopeJoint_GetAnchorB_0.apply(null, arguments)
        },
        Je = b._emscripten_bind_b2AABB_set_upperBound_1 = function () {
            return b.asm._emscripten_bind_b2AABB_set_upperBound_1.apply(null,
                arguments)
        },
        Ke = b._emscripten_bind_JSRayCastCallback_ReportFixture_4 = function () {
            return b.asm._emscripten_bind_JSRayCastCallback_ReportFixture_4.apply(null, arguments)
        },
        Le = b._emscripten_bind_b2ContactImpulse___destroy___0 = function () {
            return b.asm._emscripten_bind_b2ContactImpulse___destroy___0.apply(null, arguments)
        },
        Me = b._emscripten_bind_b2FrictionJointDef_get_localAnchorB_0 = function () {
            return b.asm._emscripten_bind_b2FrictionJointDef_get_localAnchorB_0.apply(null, arguments)
        },
        Ne = b._emscripten_bind_b2PulleyJointDef_set_lengthB_1 =
            function () {
                return b.asm._emscripten_bind_b2PulleyJointDef_set_lengthB_1.apply(null, arguments)
            },
        Oe = b._emscripten_bind_b2RayCastInput___destroy___0 = function () {
            return b.asm._emscripten_bind_b2RayCastInput___destroy___0.apply(null, arguments)
        },
        Pe = b._emscripten_bind_b2Body_ApplyForceToCenter_2 = function () {
            return b.asm._emscripten_bind_b2Body_ApplyForceToCenter_2.apply(null, arguments)
        },
        Qe = b._emscripten_bind_JSDestructionListener_JSDestructionListener_0 = function () {
            return b.asm._emscripten_bind_JSDestructionListener_JSDestructionListener_0.apply(null,
                arguments)
        },
        Re = b._emscripten_bind_b2WheelJointDef_set_localAnchorA_1 = function () {
            return b.asm._emscripten_bind_b2WheelJointDef_set_localAnchorA_1.apply(null, arguments)
        },
        Se = b._emscripten_bind_b2FrictionJoint_GetBodyB_0 = function () {
            return b.asm._emscripten_bind_b2FrictionJoint_GetBodyB_0.apply(null, arguments)
        },
        Te = b._emscripten_bind_b2WeldJointDef_set_bodyA_1 = function () {
            return b.asm._emscripten_bind_b2WeldJointDef_set_bodyA_1.apply(null, arguments)
        },
        Ue = b._emscripten_bind_b2DistanceJoint_GetBodyB_0 = function () {
            return b.asm._emscripten_bind_b2DistanceJoint_GetBodyB_0.apply(null,
                arguments)
        },
        Ve = b._emscripten_enum_b2JointType_e_wheelJoint = function () {
            return b.asm._emscripten_enum_b2JointType_e_wheelJoint.apply(null, arguments)
        },
        We = b._emscripten_bind_b2JointDef___destroy___0 = function () {
            return b.asm._emscripten_bind_b2JointDef___destroy___0.apply(null, arguments)
        },
        Xe = b._emscripten_bind_b2ContactEdge___destroy___0 = function () {
            return b.asm._emscripten_bind_b2ContactEdge___destroy___0.apply(null, arguments)
        },
        Ye = b._emscripten_bind_b2Filter_get_groupIndex_0 = function () {
            return b.asm._emscripten_bind_b2Filter_get_groupIndex_0.apply(null,
                arguments)
        },
        Ze = b._emscripten_bind_b2FrictionJointDef_get_localAnchorA_0 = function () {
            return b.asm._emscripten_bind_b2FrictionJointDef_get_localAnchorA_0.apply(null, arguments)
        },
        $e = b._emscripten_bind_b2CircleShape_GetChildCount_0 = function () {
            return b.asm._emscripten_bind_b2CircleShape_GetChildCount_0.apply(null, arguments)
        },
        af = b._emscripten_bind_b2BodyDef_get_bullet_0 = function () {
            return b.asm._emscripten_bind_b2BodyDef_get_bullet_0.apply(null, arguments)
        },
        bf = b._emscripten_bind_b2Color_set_b_1 = function () {
            return b.asm._emscripten_bind_b2Color_set_b_1.apply(null,
                arguments)
        },
        cf = b._emscripten_bind_b2Mat33_get_ez_0 = function () {
            return b.asm._emscripten_bind_b2Mat33_get_ez_0.apply(null, arguments)
        },
        df = b._emscripten_bind_b2MassData_get_center_0 = function () {
            return b.asm._emscripten_bind_b2MassData_get_center_0.apply(null, arguments)
        },
        ef = b._emscripten_bind_b2WeldJoint_GetBodyB_0 = function () {
            return b.asm._emscripten_bind_b2WeldJoint_GetBodyB_0.apply(null, arguments)
        },
        ff = b._emscripten_bind_b2WheelJoint_GetReactionForce_1 = function () {
            return b.asm._emscripten_bind_b2WheelJoint_GetReactionForce_1.apply(null,
                arguments)
        },
        gf = b._emscripten_bind_b2World_SetSubStepping_1 = function () {
            return b.asm._emscripten_bind_b2World_SetSubStepping_1.apply(null, arguments)
        },
        hf = b._emscripten_bind_b2Vec2_op_add_1 = function () {
            return b.asm._emscripten_bind_b2Vec2_op_add_1.apply(null, arguments)
        },
        jf = b._emscripten_bind_JSDraw_DrawSegment_3 = function () {
            return b.asm._emscripten_bind_JSDraw_DrawSegment_3.apply(null, arguments)
        },
        kf = b._emscripten_bind_b2Joint_GetCollideConnected_0 = function () {
            return b.asm._emscripten_bind_b2Joint_GetCollideConnected_0.apply(null,
                arguments)
        },
        lf = b._emscripten_bind_b2MotorJoint_GetReactionTorque_1 = function () {
            return b.asm._emscripten_bind_b2MotorJoint_GetReactionTorque_1.apply(null, arguments)
        },
        mf = b._emscripten_bind_b2FrictionJointDef_get_bodyB_0 = function () {
            return b.asm._emscripten_bind_b2FrictionJointDef_get_bodyB_0.apply(null, arguments)
        },
        nf = b._emscripten_bind_b2WheelJointDef___destroy___0 = function () {
            return b.asm._emscripten_bind_b2WheelJointDef___destroy___0.apply(null, arguments)
        },
        of = b._emscripten_bind_b2BodyDef_get_gravityScale_0 =
            function () {
                return b.asm._emscripten_bind_b2BodyDef_get_gravityScale_0.apply(null, arguments)
            },
        pf = b._emscripten_bind_b2Vec3_SetZero_0 = function () {
            return b.asm._emscripten_bind_b2Vec3_SetZero_0.apply(null, arguments)
        },
        qf = b._emscripten_enum_b2JointType_e_pulleyJoint = function () {
            return b.asm._emscripten_enum_b2JointType_e_pulleyJoint.apply(null, arguments)
        },
        rf = b._emscripten_bind_b2ChainShape_get_m_nextVertex_0 = function () {
            return b.asm._emscripten_bind_b2ChainShape_get_m_nextVertex_0.apply(null, arguments)
        },
        sf = b._emscripten_bind_b2Contact_SetEnabled_1 = function () {
            return b.asm._emscripten_bind_b2Contact_SetEnabled_1.apply(null, arguments)
        },
        tf = b._emscripten_bind_b2Shape_set_m_radius_1 = function () {
            return b.asm._emscripten_bind_b2Shape_set_m_radius_1.apply(null, arguments)
        },
        uf = b._emscripten_bind_b2World_SetDebugDraw_1 = function () {
            return b.asm._emscripten_bind_b2World_SetDebugDraw_1.apply(null, arguments)
        },
        vf = b._emscripten_bind_b2ContactID_set_key_1 = function () {
            return b.asm._emscripten_bind_b2ContactID_set_key_1.apply(null,
                arguments)
        },
        Ca = b._malloc = function () {
            return b.asm._malloc.apply(null, arguments)
        },
        wf = b._emscripten_bind_b2WheelJoint_GetMaxMotorTorque_0 = function () {
            return b.asm._emscripten_bind_b2WheelJoint_GetMaxMotorTorque_0.apply(null, arguments)
        },
        xf = b._emscripten_bind_b2Vec2_Normalize_0 = function () {
            return b.asm._emscripten_bind_b2Vec2_Normalize_0.apply(null, arguments)
        },
        yf = b._emscripten_bind_b2WheelJoint_GetJointSpeed_0 = function () {
            return b.asm._emscripten_bind_b2WheelJoint_GetJointSpeed_0.apply(null, arguments)
        },
        zf =
            b._emscripten_bind_b2FrictionJointDef_set_localAnchorA_1 = function () {
                return b.asm._emscripten_bind_b2FrictionJointDef_set_localAnchorA_1.apply(null, arguments)
            },
        Af = b._emscripten_bind_b2ChainShape_set_m_vertices_1 = function () {
            return b.asm._emscripten_bind_b2ChainShape_set_m_vertices_1.apply(null, arguments)
        },
        Bf = b._emscripten_bind_JSRayCastCallback_JSRayCastCallback_0 = function () {
            return b.asm._emscripten_bind_JSRayCastCallback_JSRayCastCallback_0.apply(null, arguments)
        },
        Cf = b._emscripten_bind_b2RayCastInput_set_p2_1 =
            function () {
                return b.asm._emscripten_bind_b2RayCastInput_set_p2_1.apply(null, arguments)
            },
        Df = b._emscripten_bind_b2RevoluteJointDef_get_motorSpeed_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJointDef_get_motorSpeed_0.apply(null, arguments)
        },
        Ef = b._emscripten_bind_b2Manifold_get_pointCount_0 = function () {
            return b.asm._emscripten_bind_b2Manifold_get_pointCount_0.apply(null, arguments)
        },
        Ff = b._emscripten_bind_b2RayCastOutput_get_normal_0 = function () {
            return b.asm._emscripten_bind_b2RayCastOutput_get_normal_0.apply(null,
                arguments)
        },
        Gf = b._emscripten_bind_b2WeldJoint_GetBodyA_0 = function () {
            return b.asm._emscripten_bind_b2WeldJoint_GetBodyA_0.apply(null, arguments)
        },
        Hf = b._emscripten_enum_b2DrawFlag_e_jointBit = function () {
            return b.asm._emscripten_enum_b2DrawFlag_e_jointBit.apply(null, arguments)
        },
        If = b._emscripten_bind_b2FixtureDef_get_isSensor_0 = function () {
            return b.asm._emscripten_bind_b2FixtureDef_get_isSensor_0.apply(null, arguments)
        },
        Jf = b._emscripten_bind_b2PrismaticJointDef_Initialize_4 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_Initialize_4.apply(null,
                arguments)
        },
        Kf = b._emscripten_bind_b2PulleyJointDef_set_bodyB_1 = function () {
            return b.asm._emscripten_bind_b2PulleyJointDef_set_bodyB_1.apply(null, arguments)
        },
        Lf = b._emscripten_bind_b2WheelJoint_EnableMotor_1 = function () {
            return b.asm._emscripten_bind_b2WheelJoint_EnableMotor_1.apply(null, arguments)
        },
        Mf = b._emscripten_bind_b2RevoluteJoint_GetJointSpeed_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJoint_GetJointSpeed_0.apply(null, arguments)
        },
        Nf = b._emscripten_bind_JSDraw_DrawSolidPolygon_3 = function () {
            return b.asm._emscripten_bind_JSDraw_DrawSolidPolygon_3.apply(null,
                arguments)
        },
        Of = b._emscripten_bind_b2Rot_Set_1 = function () {
            return b.asm._emscripten_bind_b2Rot_Set_1.apply(null, arguments)
        },
        Pf = b._emscripten_bind_b2RevoluteJoint_GetJointAngle_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJoint_GetJointAngle_0.apply(null, arguments)
        },
        Qf = b._emscripten_bind_JSDraw___destroy___0 = function () {
            return b.asm._emscripten_bind_JSDraw___destroy___0.apply(null, arguments)
        },
        Rf = b._emscripten_bind_b2MouseJointDef___destroy___0 = function () {
            return b.asm._emscripten_bind_b2MouseJointDef___destroy___0.apply(null,
                arguments)
        },
        Sf = b._emscripten_bind_b2Mat33_Solve22_1 = function () {
            return b.asm._emscripten_bind_b2Mat33_Solve22_1.apply(null, arguments)
        },
        Tf = b._emscripten_bind_b2Profile_set_solvePosition_1 = function () {
            return b.asm._emscripten_bind_b2Profile_set_solvePosition_1.apply(null, arguments)
        },
        Uf = b._emscripten_bind_b2ContactFilter___destroy___0 = function () {
            return b.asm._emscripten_bind_b2ContactFilter___destroy___0.apply(null, arguments)
        },
        Vf = b._emscripten_bind_b2WheelJoint_GetLocalAnchorA_0 = function () {
            return b.asm._emscripten_bind_b2WheelJoint_GetLocalAnchorA_0.apply(null,
                arguments)
        },
        Wf = b._emscripten_bind_b2ChainShape_set_m_hasPrevVertex_1 = function () {
            return b.asm._emscripten_bind_b2ChainShape_set_m_hasPrevVertex_1.apply(null, arguments)
        },
        Xf = b._emscripten_bind_b2Joint_SetUserData_1 = function () {
            return b.asm._emscripten_bind_b2Joint_SetUserData_1.apply(null, arguments)
        },
        Yf = b._emscripten_bind_b2DistanceJoint_SetUserData_1 = function () {
            return b.asm._emscripten_bind_b2DistanceJoint_SetUserData_1.apply(null, arguments)
        },
        Zf = b._emscripten_bind_b2PrismaticJoint___destroy___0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint___destroy___0.apply(null,
                arguments)
        },
        $f = b._emscripten_bind_b2RopeJointDef_set_bodyA_1 = function () {
            return b.asm._emscripten_bind_b2RopeJointDef_set_bodyA_1.apply(null, arguments)
        },
        ag = b._emscripten_bind_b2GearJoint___destroy___0 = function () {
            return b.asm._emscripten_bind_b2GearJoint___destroy___0.apply(null, arguments)
        },
        bg = b._emscripten_bind_b2PrismaticJoint_GetJointTranslation_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint_GetJointTranslation_0.apply(null, arguments)
        },
        cg = b._emscripten_bind_b2ManifoldPoint_get_id_0 =
            function () {
                return b.asm._emscripten_bind_b2ManifoldPoint_get_id_0.apply(null, arguments)
            },
        dg = b._emscripten_bind_b2CircleShape_get_m_radius_0 = function () {
            return b.asm._emscripten_bind_b2CircleShape_get_m_radius_0.apply(null, arguments)
        },
        eg = b._emscripten_bind_b2PrismaticJoint_GetMotorSpeed_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint_GetMotorSpeed_0.apply(null, arguments)
        },
        fg = b._emscripten_bind_b2PulleyJoint_GetGroundAnchorB_0 = function () {
            return b.asm._emscripten_bind_b2PulleyJoint_GetGroundAnchorB_0.apply(null,
                arguments)
        },
        gg = b._emscripten_bind_b2Vec3_op_add_1 = function () {
            return b.asm._emscripten_bind_b2Vec3_op_add_1.apply(null, arguments)
        },
        hg = b._emscripten_bind_b2FrictionJoint_GetType_0 = function () {
            return b.asm._emscripten_bind_b2FrictionJoint_GetType_0.apply(null, arguments)
        },
        ig = b._emscripten_bind_b2MouseJoint_GetMaxForce_0 = function () {
            return b.asm._emscripten_bind_b2MouseJoint_GetMaxForce_0.apply(null, arguments)
        },
        jg = b._emscripten_bind_b2MouseJoint_SetTarget_1 = function () {
            return b.asm._emscripten_bind_b2MouseJoint_SetTarget_1.apply(null,
                arguments)
        },
        kg = b._emscripten_bind_b2MouseJointDef_get_dampingRatio_0 = function () {
            return b.asm._emscripten_bind_b2MouseJointDef_get_dampingRatio_0.apply(null, arguments)
        },
        lg = b._emscripten_bind_b2RevoluteJoint_GetMotorSpeed_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJoint_GetMotorSpeed_0.apply(null, arguments)
        },
        mg = b._emscripten_bind_b2ChainShape_set_m_type_1 = function () {
            return b.asm._emscripten_bind_b2ChainShape_set_m_type_1.apply(null, arguments)
        },
        ng = b._emscripten_bind_b2RevoluteJointDef_set_bodyB_1 =
            function () {
                return b.asm._emscripten_bind_b2RevoluteJointDef_set_bodyB_1.apply(null, arguments)
            },
        og = b._emscripten_bind_b2Rot_GetXAxis_0 = function () {
            return b.asm._emscripten_bind_b2Rot_GetXAxis_0.apply(null, arguments)
        },
        pg = b._emscripten_bind_b2Mat33_b2Mat33_0 = function () {
            return b.asm._emscripten_bind_b2Mat33_b2Mat33_0.apply(null, arguments)
        },
        qg = b._emscripten_bind_b2MouseJointDef_get_bodyB_0 = function () {
            return b.asm._emscripten_bind_b2MouseJointDef_get_bodyB_0.apply(null, arguments)
        },
        rg = b._emscripten_bind_b2Body_GetWorldVector_1 =
            function () {
                return b.asm._emscripten_bind_b2Body_GetWorldVector_1.apply(null, arguments)
            },
        sg = b._emscripten_bind_b2WeldJointDef_get_frequencyHz_0 = function () {
            return b.asm._emscripten_bind_b2WeldJointDef_get_frequencyHz_0.apply(null, arguments)
        },
        tg = b._emscripten_bind_b2GearJointDef_set_ratio_1 = function () {
            return b.asm._emscripten_bind_b2GearJointDef_set_ratio_1.apply(null, arguments)
        },
        ug = b._emscripten_bind_b2Manifold___destroy___0 = function () {
            return b.asm._emscripten_bind_b2Manifold___destroy___0.apply(null,
                arguments)
        },
        vg = b._emscripten_bind_b2PulleyJointDef_set_lengthA_1 = function () {
            return b.asm._emscripten_bind_b2PulleyJointDef_set_lengthA_1.apply(null, arguments)
        },
        wg = b._emscripten_bind_b2Contact_IsEnabled_0 = function () {
            return b.asm._emscripten_bind_b2Contact_IsEnabled_0.apply(null, arguments)
        };
    b.stackRestore = function () {
        return b.asm.stackRestore.apply(null, arguments)
    };
    var xg = b._emscripten_bind_b2World_CreateJoint_1 = function () {
        return b.asm._emscripten_bind_b2World_CreateJoint_1.apply(null, arguments)
    },
        yg = b._emscripten_bind_b2PulleyJointDef_set_ratio_1 = function () {
            return b.asm._emscripten_bind_b2PulleyJointDef_set_ratio_1.apply(null, arguments)
        },
        zg = b._emscripten_bind_b2JointEdge_set_prev_1 = function () {
            return b.asm._emscripten_bind_b2JointEdge_set_prev_1.apply(null, arguments)
        },
        Ag = b._emscripten_bind_b2PrismaticJoint_GetReactionTorque_1 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint_GetReactionTorque_1.apply(null,
                arguments)
        },
        Bg = b._emscripten_bind_b2Body_GetLocalPoint_1 = function () {
            return b.asm._emscripten_bind_b2Body_GetLocalPoint_1.apply(null, arguments)
        },
        Cg = b._emscripten_bind_b2PrismaticJoint_GetCollideConnected_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint_GetCollideConnected_0.apply(null, arguments)
        },
        Dg = b._emscripten_bind_b2DistanceJoint_IsActive_0 = function () {
            return b.asm._emscripten_bind_b2DistanceJoint_IsActive_0.apply(null, arguments)
        },
        Eg = b._emscripten_bind_b2RopeJoint_GetLimitState_0 = function () {
            return b.asm._emscripten_bind_b2RopeJoint_GetLimitState_0.apply(null,
                arguments)
        },
        Fg = b._emscripten_bind_b2Profile_get_solveTOI_0 = function () {
            return b.asm._emscripten_bind_b2Profile_get_solveTOI_0.apply(null, arguments)
        },
        Gg = b._emscripten_bind_b2Vec2_b2Vec2_0 = function () {
            return b.asm._emscripten_bind_b2Vec2_b2Vec2_0.apply(null, arguments)
        },
        Hg = b._emscripten_bind_b2DistanceJoint_GetAnchorB_0 = function () {
            return b.asm._emscripten_bind_b2DistanceJoint_GetAnchorB_0.apply(null, arguments)
        },
        Ig = b._emscripten_bind_b2WheelJointDef_get_maxMotorTorque_0 = function () {
            return b.asm._emscripten_bind_b2WheelJointDef_get_maxMotorTorque_0.apply(null,
                arguments)
        },
        Jg = b._emscripten_bind_b2Vec2_op_sub_1 = function () {
            return b.asm._emscripten_bind_b2Vec2_op_sub_1.apply(null, arguments)
        },
        Kg = b._emscripten_bind_b2CircleShape_get_m_p_0 = function () {
            return b.asm._emscripten_bind_b2CircleShape_get_m_p_0.apply(null, arguments)
        },
        Lg = b._emscripten_bind_b2ContactFeature_get_indexA_0 = function () {
            return b.asm._emscripten_bind_b2ContactFeature_get_indexA_0.apply(null, arguments)
        },
        Mg = b._emscripten_bind_b2MotorJointDef_b2MotorJointDef_0 = function () {
            return b.asm._emscripten_bind_b2MotorJointDef_b2MotorJointDef_0.apply(null,
                arguments)
        },
        Ng = b._emscripten_bind_b2RevoluteJoint_EnableLimit_1 = function () {
            return b.asm._emscripten_bind_b2RevoluteJoint_EnableLimit_1.apply(null, arguments)
        },
        Og = b._emscripten_bind_b2ContactEdge_get_next_0 = function () {
            return b.asm._emscripten_bind_b2ContactEdge_get_next_0.apply(null, arguments)
        },
        Pg = b._emscripten_bind_b2AABB_GetPerimeter_0 = function () {
            return b.asm._emscripten_bind_b2AABB_GetPerimeter_0.apply(null, arguments)
        },
        Qg = b._emscripten_bind_b2RevoluteJoint_GetCollideConnected_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJoint_GetCollideConnected_0.apply(null,
                arguments)
        },
        Rg = b._emscripten_bind_b2Mat33_get_ex_0 = function () {
            return b.asm._emscripten_bind_b2Mat33_get_ex_0.apply(null, arguments)
        },
        Sg = b._emscripten_bind_b2Body_GetPosition_0 = function () {
            return b.asm._emscripten_bind_b2Body_GetPosition_0.apply(null, arguments)
        },
        Tg = b._emscripten_bind_b2Profile___destroy___0 = function () {
            return b.asm._emscripten_bind_b2Profile___destroy___0.apply(null, arguments)
        },
        Ug = b._emscripten_bind_b2ContactEdge_get_prev_0 = function () {
            return b.asm._emscripten_bind_b2ContactEdge_get_prev_0.apply(null,
                arguments)
        },
        Vg = b._emscripten_bind_b2DistanceJoint_SetFrequency_1 = function () {
            return b.asm._emscripten_bind_b2DistanceJoint_SetFrequency_1.apply(null, arguments)
        },
        Wg = b._emscripten_bind_b2Fixture_GetBody_0 = function () {
            return b.asm._emscripten_bind_b2Fixture_GetBody_0.apply(null, arguments)
        },
        Xg = b._emscripten_bind_b2ContactImpulse_set_count_1 = function () {
            return b.asm._emscripten_bind_b2ContactImpulse_set_count_1.apply(null, arguments)
        },
        Yg = b._emscripten_bind_b2FixtureDef_set_shape_1 = function () {
            return b.asm._emscripten_bind_b2FixtureDef_set_shape_1.apply(null,
                arguments)
        },
        Zg = b._emscripten_bind_b2PulleyJointDef_get_bodyB_0 = function () {
            return b.asm._emscripten_bind_b2PulleyJointDef_get_bodyB_0.apply(null, arguments)
        },
        $g = b._emscripten_bind_b2ChainShape_GetChildCount_0 = function () {
            return b.asm._emscripten_bind_b2ChainShape_GetChildCount_0.apply(null, arguments)
        },
        ah = b._emscripten_bind_b2CircleShape_b2CircleShape_0 = function () {
            return b.asm._emscripten_bind_b2CircleShape_b2CircleShape_0.apply(null, arguments)
        },
        bh = b._emscripten_bind_b2RevoluteJoint_GetReactionTorque_1 =
            function () {
                return b.asm._emscripten_bind_b2RevoluteJoint_GetReactionTorque_1.apply(null, arguments)
            },
        ch = b._emscripten_bind_b2Fixture_SetDensity_1 = function () {
            return b.asm._emscripten_bind_b2Fixture_SetDensity_1.apply(null, arguments)
        },
        dh = b._emscripten_bind_b2ChainShape_get_m_prevVertex_0 = function () {
            return b.asm._emscripten_bind_b2ChainShape_get_m_prevVertex_0.apply(null, arguments)
        },
        eh = b._emscripten_bind_b2AABB_GetExtents_0 = function () {
            return b.asm._emscripten_bind_b2AABB_GetExtents_0.apply(null, arguments)
        },
        fh = b._emscripten_bind_b2World_ClearForces_0 = function () {
            return b.asm._emscripten_bind_b2World_ClearForces_0.apply(null, arguments)
        },
        gh = b._emscripten_bind_b2Vec3___destroy___0 = function () {
            return b.asm._emscripten_bind_b2Vec3___destroy___0.apply(null, arguments)
        },
        hh = b._emscripten_bind_b2WheelJointDef_set_userData_1 = function () {
            return b.asm._emscripten_bind_b2WheelJointDef_set_userData_1.apply(null, arguments)
        },
        ih = b._emscripten_bind_b2WeldJoint_SetFrequency_1 = function () {
            return b.asm._emscripten_bind_b2WeldJoint_SetFrequency_1.apply(null,
                arguments)
        },
        jh = b._emscripten_bind_JSContactListener_PreSolve_2 = function () {
            return b.asm._emscripten_bind_JSContactListener_PreSolve_2.apply(null, arguments)
        },
        kh = b._emscripten_bind_b2Body_SetFixedRotation_1 = function () {
            return b.asm._emscripten_bind_b2Body_SetFixedRotation_1.apply(null, arguments)
        },
        lh = b._emscripten_bind_b2RayCastOutput_set_normal_1 = function () {
            return b.asm._emscripten_bind_b2RayCastOutput_set_normal_1.apply(null, arguments)
        },
        mh = b._emscripten_bind_b2DistanceJoint_GetDampingRatio_0 = function () {
            return b.asm._emscripten_bind_b2DistanceJoint_GetDampingRatio_0.apply(null,
                arguments)
        },
        nh = b._emscripten_bind_b2RevoluteJoint_SetMaxMotorTorque_1 = function () {
            return b.asm._emscripten_bind_b2RevoluteJoint_SetMaxMotorTorque_1.apply(null, arguments)
        },
        oh = b._emscripten_bind_b2RevoluteJoint_EnableMotor_1 = function () {
            return b.asm._emscripten_bind_b2RevoluteJoint_EnableMotor_1.apply(null, arguments)
        },
        ph = b._emscripten_bind_b2Contact_GetChildIndexB_0 = function () {
            return b.asm._emscripten_bind_b2Contact_GetChildIndexB_0.apply(null, arguments)
        },
        qh = b._emscripten_bind_b2MouseJointDef_set_bodyB_1 =
            function () {
                return b.asm._emscripten_bind_b2MouseJointDef_set_bodyB_1.apply(null, arguments)
            },
        rh = b._emscripten_bind_b2CircleShape_GetType_0 = function () {
            return b.asm._emscripten_bind_b2CircleShape_GetType_0.apply(null, arguments)
        },
        sh = b._emscripten_bind_b2PolygonShape_GetType_0 = function () {
            return b.asm._emscripten_bind_b2PolygonShape_GetType_0.apply(null, arguments)
        },
        th = b._emscripten_bind_b2PrismaticJointDef_set_referenceAngle_1 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_set_referenceAngle_1.apply(null,
                arguments)
        },
        uh = b._emscripten_bind_b2RopeJointDef_get_collideConnected_0 = function () {
            return b.asm._emscripten_bind_b2RopeJointDef_get_collideConnected_0.apply(null, arguments)
        },
        vh = b._emscripten_bind_b2FixtureDef_set_filter_1 = function () {
            return b.asm._emscripten_bind_b2FixtureDef_set_filter_1.apply(null, arguments)
        },
        wh = b._emscripten_bind_b2Body_ApplyTorque_2 = function () {
            return b.asm._emscripten_bind_b2Body_ApplyTorque_2.apply(null, arguments)
        },
        xh = b._emscripten_bind_b2RevoluteJoint___destroy___0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJoint___destroy___0.apply(null,
                arguments)
        },
        yh = b._emscripten_bind_b2FrictionJointDef_get_userData_0 = function () {
            return b.asm._emscripten_bind_b2FrictionJointDef_get_userData_0.apply(null, arguments)
        },
        zh = b._emscripten_bind_b2RayCastCallback___destroy___0 = function () {
            return b.asm._emscripten_bind_b2RayCastCallback___destroy___0.apply(null, arguments)
        },
        Ah = b._emscripten_bind_b2RevoluteJointDef_set_bodyA_1 = function () {
            return b.asm._emscripten_bind_b2RevoluteJointDef_set_bodyA_1.apply(null, arguments)
        },
        Bh = b._emscripten_bind_b2MotorJoint_SetUserData_1 =
            function () {
                return b.asm._emscripten_bind_b2MotorJoint_SetUserData_1.apply(null, arguments)
            },
        Ch = b._emscripten_bind_b2PrismaticJoint_GetLocalAxisA_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint_GetLocalAxisA_0.apply(null, arguments)
        },
        Dh = b._emscripten_bind_b2MotorJoint_GetBodyB_0 = function () {
            return b.asm._emscripten_bind_b2MotorJoint_GetBodyB_0.apply(null, arguments)
        },
        Eh = b._emscripten_bind_b2Transform_Set_2 = function () {
            return b.asm._emscripten_bind_b2Transform_Set_2.apply(null, arguments)
        },
        Fh =
            b._emscripten_bind_b2MotorJoint_GetBodyA_0 = function () {
                return b.asm._emscripten_bind_b2MotorJoint_GetBodyA_0.apply(null, arguments)
            };
    b.stackAlloc = function () {
        return b.asm.stackAlloc.apply(null, arguments)
    };
    var Gh = b._emscripten_bind_b2Draw_AppendFlags_1 = function () {
        return b.asm._emscripten_bind_b2Draw_AppendFlags_1.apply(null, arguments)
    },
        Hh = b._emscripten_bind_b2EdgeShape_GetChildCount_0 = function () {
            return b.asm._emscripten_bind_b2EdgeShape_GetChildCount_0.apply(null, arguments)
        },
        Ih = b._emscripten_bind_b2Contact_ResetFriction_0 = function () {
            return b.asm._emscripten_bind_b2Contact_ResetFriction_0.apply(null, arguments)
        },
        Jh = b._emscripten_bind_b2Profile_set_solveTOI_1 = function () {
            return b.asm._emscripten_bind_b2Profile_set_solveTOI_1.apply(null,
                arguments)
        },
        Kh = b._emscripten_bind_b2PrismaticJointDef_set_type_1 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_set_type_1.apply(null, arguments)
        },
        Lh = b._emscripten_bind_b2AABB_GetCenter_0 = function () {
            return b.asm._emscripten_bind_b2AABB_GetCenter_0.apply(null, arguments)
        },
        Mh = b._emscripten_bind_b2WheelJoint_SetSpringFrequencyHz_1 = function () {
            return b.asm._emscripten_bind_b2WheelJoint_SetSpringFrequencyHz_1.apply(null, arguments)
        },
        Nh = b._emscripten_bind_b2FrictionJointDef___destroy___0 = function () {
            return b.asm._emscripten_bind_b2FrictionJointDef___destroy___0.apply(null,
                arguments)
        },
        Oh = b._emscripten_bind_b2PrismaticJoint_GetReactionForce_1 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint_GetReactionForce_1.apply(null, arguments)
        },
        Ph = b._emscripten_bind_b2Transform_b2Transform_0 = function () {
            return b.asm._emscripten_bind_b2Transform_b2Transform_0.apply(null, arguments)
        },
        Qh = b._emscripten_enum_b2LimitState_e_equalLimits = function () {
            return b.asm._emscripten_enum_b2LimitState_e_equalLimits.apply(null, arguments)
        },
        Rh = b._emscripten_bind_b2ManifoldPoint_set_normalImpulse_1 =
            function () {
                return b.asm._emscripten_bind_b2ManifoldPoint_set_normalImpulse_1.apply(null, arguments)
            },
        Sh = b._emscripten_bind_b2Body_IsFixedRotation_0 = function () {
            return b.asm._emscripten_bind_b2Body_IsFixedRotation_0.apply(null, arguments)
        },
        Th = b._emscripten_enum_b2DrawFlag_e_shapeBit = function () {
            return b.asm._emscripten_enum_b2DrawFlag_e_shapeBit.apply(null, arguments)
        },
        Uh = b._emscripten_bind_b2Contact_GetFriction_0 = function () {
            return b.asm._emscripten_bind_b2Contact_GetFriction_0.apply(null, arguments)
        },
        Vh =
            b._emscripten_bind_b2Body_GetContactList_0 = function () {
                return b.asm._emscripten_bind_b2Body_GetContactList_0.apply(null, arguments)
            },
        Wh = b._emscripten_bind_b2DistanceJointDef_set_length_1 = function () {
            return b.asm._emscripten_bind_b2DistanceJointDef_set_length_1.apply(null, arguments)
        },
        Xh = b._emscripten_bind_b2DistanceJoint_GetLocalAnchorB_0 = function () {
            return b.asm._emscripten_bind_b2DistanceJoint_GetLocalAnchorB_0.apply(null, arguments)
        },
        Yh = b._emscripten_bind_b2FrictionJoint_GetLocalAnchorB_0 = function () {
            return b.asm._emscripten_bind_b2FrictionJoint_GetLocalAnchorB_0.apply(null,
                arguments)
        },
        Zh = b._emscripten_bind_b2World_b2World_1 = function () {
            return b.asm._emscripten_bind_b2World_b2World_1.apply(null, arguments)
        },
        $h = b._emscripten_bind_b2PrismaticJoint_IsLimitEnabled_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint_IsLimitEnabled_0.apply(null, arguments)
        },
        ai = b._emscripten_bind_b2DistanceJointDef_get_type_0 = function () {
            return b.asm._emscripten_bind_b2DistanceJointDef_get_type_0.apply(null, arguments)
        },
        bi = b._emscripten_bind_b2Draw_ClearFlags_1 = function () {
            return b.asm._emscripten_bind_b2Draw_ClearFlags_1.apply(null,
                arguments)
        },
        ci = b._emscripten_bind_b2Body_SetAngularDamping_1 = function () {
            return b.asm._emscripten_bind_b2Body_SetAngularDamping_1.apply(null, arguments)
        },
        di = b._emscripten_bind_b2Body_IsActive_0 = function () {
            return b.asm._emscripten_bind_b2Body_IsActive_0.apply(null, arguments)
        },
        ei = b._emscripten_bind_b2Contact_ResetRestitution_0 = function () {
            return b.asm._emscripten_bind_b2Contact_ResetRestitution_0.apply(null, arguments)
        },
        fi = b._emscripten_bind_b2World_GetAllowSleeping_0 = function () {
            return b.asm._emscripten_bind_b2World_GetAllowSleeping_0.apply(null,
                arguments)
        },
        gi = b._emscripten_bind_b2ManifoldPoint_b2ManifoldPoint_0 = function () {
            return b.asm._emscripten_bind_b2ManifoldPoint_b2ManifoldPoint_0.apply(null, arguments)
        },
        hi = b._emscripten_bind_b2EdgeShape_set_m_type_1 = function () {
            return b.asm._emscripten_bind_b2EdgeShape_set_m_type_1.apply(null, arguments)
        },
        ii = b._emscripten_enum_b2JointType_e_unknownJoint = function () {
            return b.asm._emscripten_enum_b2JointType_e_unknownJoint.apply(null, arguments)
        },
        ji = b._emscripten_bind_b2RevoluteJointDef_set_enableMotor_1 =
            function () {
                return b.asm._emscripten_bind_b2RevoluteJointDef_set_enableMotor_1.apply(null, arguments)
            },
        ki = b._emscripten_bind_b2PulleyJoint_IsActive_0 = function () {
            return b.asm._emscripten_bind_b2PulleyJoint_IsActive_0.apply(null, arguments)
        },
        li = b._emscripten_bind_b2MouseJoint_GetNext_0 = function () {
            return b.asm._emscripten_bind_b2MouseJoint_GetNext_0.apply(null, arguments)
        },
        mi = b._emscripten_bind_b2RevoluteJoint_SetUserData_1 = function () {
            return b.asm._emscripten_bind_b2RevoluteJoint_SetUserData_1.apply(null,
                arguments)
        },
        ni = b._emscripten_bind_b2Manifold_get_localPoint_0 = function () {
            return b.asm._emscripten_bind_b2Manifold_get_localPoint_0.apply(null, arguments)
        },
        oi = b._emscripten_bind_b2PulleyJointDef_get_lengthB_0 = function () {
            return b.asm._emscripten_bind_b2PulleyJointDef_get_lengthB_0.apply(null, arguments)
        },
        pi = b._emscripten_bind_b2WeldJoint_SetUserData_1 = function () {
            return b.asm._emscripten_bind_b2WeldJoint_SetUserData_1.apply(null, arguments)
        },
        qi = b._emscripten_bind_b2ChainShape_CreateLoop_2 = function () {
            return b.asm._emscripten_bind_b2ChainShape_CreateLoop_2.apply(null,
                arguments)
        },
        ri = b._emscripten_bind_b2GearJointDef_get_joint1_0 = function () {
            return b.asm._emscripten_bind_b2GearJointDef_get_joint1_0.apply(null, arguments)
        },
        si = b._emscripten_bind_b2PrismaticJoint_GetMotorForce_1 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint_GetMotorForce_1.apply(null, arguments)
        },
        ti = b._emscripten_bind_b2Body_SetUserData_1 = function () {
            return b.asm._emscripten_bind_b2Body_SetUserData_1.apply(null, arguments)
        },
        ui = b._emscripten_bind_b2GearJoint_IsActive_0 = function () {
            return b.asm._emscripten_bind_b2GearJoint_IsActive_0.apply(null,
                arguments)
        },
        vi = b._emscripten_bind_b2EdgeShape_get_m_vertex0_0 = function () {
            return b.asm._emscripten_bind_b2EdgeShape_get_m_vertex0_0.apply(null, arguments)
        },
        wi = b._emscripten_enum_b2JointType_e_revoluteJoint = function () {
            return b.asm._emscripten_enum_b2JointType_e_revoluteJoint.apply(null, arguments)
        },
        xi = b._emscripten_bind_b2Vec2_get_x_0 = function () {
            return b.asm._emscripten_bind_b2Vec2_get_x_0.apply(null, arguments)
        },
        yi = b._emscripten_bind_b2WeldJointDef_get_collideConnected_0 = function () {
            return b.asm._emscripten_bind_b2WeldJointDef_get_collideConnected_0.apply(null,
                arguments)
        },
        zi = b._emscripten_bind_b2FrictionJoint_GetMaxTorque_0 = function () {
            return b.asm._emscripten_bind_b2FrictionJoint_GetMaxTorque_0.apply(null, arguments)
        },
        Ai = b._emscripten_bind_b2EdgeShape_RayCast_4 = function () {
            return b.asm._emscripten_bind_b2EdgeShape_RayCast_4.apply(null, arguments)
        },
        Bi = b._emscripten_bind_b2BodyDef_set_allowSleep_1 = function () {
            return b.asm._emscripten_bind_b2BodyDef_set_allowSleep_1.apply(null, arguments)
        },
        Ci = b._emscripten_bind_b2PulleyJoint_GetType_0 = function () {
            return b.asm._emscripten_bind_b2PulleyJoint_GetType_0.apply(null,
                arguments)
        },
        Di = b._emscripten_bind_b2WeldJointDef_set_localAnchorA_1 = function () {
            return b.asm._emscripten_bind_b2WeldJointDef_set_localAnchorA_1.apply(null, arguments)
        },
        Ei = b._emscripten_bind_b2Profile_set_step_1 = function () {
            return b.asm._emscripten_bind_b2Profile_set_step_1.apply(null, arguments)
        },
        Fi = b._emscripten_bind_b2ContactEdge_set_other_1 = function () {
            return b.asm._emscripten_bind_b2ContactEdge_set_other_1.apply(null, arguments)
        },
        Gi = b._emscripten_bind_b2PulleyJoint_GetCurrentLengthB_0 = function () {
            return b.asm._emscripten_bind_b2PulleyJoint_GetCurrentLengthB_0.apply(null,
                arguments)
        },
        Hi = b._emscripten_bind_b2Vec2_op_mul_1 = function () {
            return b.asm._emscripten_bind_b2Vec2_op_mul_1.apply(null, arguments)
        },
        Ii = b._emscripten_bind_b2PrismaticJointDef_get_localAnchorA_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_get_localAnchorA_0.apply(null, arguments)
        },
        Ji = b._emscripten_bind_b2EdgeShape___destroy___0 = function () {
            return b.asm._emscripten_bind_b2EdgeShape___destroy___0.apply(null, arguments)
        },
        Ki = b._emscripten_bind_b2PolygonShape_get_m_count_0 = function () {
            return b.asm._emscripten_bind_b2PolygonShape_get_m_count_0.apply(null,
                arguments)
        },
        Li = b._emscripten_bind_b2RopeJoint_GetAnchorA_0 = function () {
            return b.asm._emscripten_bind_b2RopeJoint_GetAnchorA_0.apply(null, arguments)
        },
        Mi = b._emscripten_bind_b2DistanceJointDef_get_bodyA_0 = function () {
            return b.asm._emscripten_bind_b2DistanceJointDef_get_bodyA_0.apply(null, arguments)
        },
        Ni = b._emscripten_bind_b2AABB_Combine_2 = function () {
            return b.asm._emscripten_bind_b2AABB_Combine_2.apply(null, arguments)
        },
        Oi = b._emscripten_bind_b2ManifoldPoint_set_tangentImpulse_1 = function () {
            return b.asm._emscripten_bind_b2ManifoldPoint_set_tangentImpulse_1.apply(null,
                arguments)
        },
        Pi = b._emscripten_bind_b2BodyDef_get_allowSleep_0 = function () {
            return b.asm._emscripten_bind_b2BodyDef_get_allowSleep_0.apply(null, arguments)
        },
        Qi = b._emscripten_bind_b2ContactEdge_get_other_0 = function () {
            return b.asm._emscripten_bind_b2ContactEdge_get_other_0.apply(null, arguments)
        },
        Ri = b._emscripten_bind_b2RopeJoint_GetLocalAnchorB_0 = function () {
            return b.asm._emscripten_bind_b2RopeJoint_GetLocalAnchorB_0.apply(null, arguments)
        },
        Si = b._emscripten_bind_b2PulleyJointDef___destroy___0 = function () {
            return b.asm._emscripten_bind_b2PulleyJointDef___destroy___0.apply(null,
                arguments)
        },
        Ti = b._emscripten_bind_b2MouseJoint_GetBodyB_0 = function () {
            return b.asm._emscripten_bind_b2MouseJoint_GetBodyB_0.apply(null, arguments)
        },
        Ui = b._emscripten_bind_b2PolygonShape_TestPoint_2 = function () {
            return b.asm._emscripten_bind_b2PolygonShape_TestPoint_2.apply(null, arguments)
        },
        Vi = b._emscripten_bind_b2JointEdge_get_other_0 = function () {
            return b.asm._emscripten_bind_b2JointEdge_get_other_0.apply(null, arguments)
        },
        Wi = b._emscripten_bind_b2PolygonShape_b2PolygonShape_0 = function () {
            return b.asm._emscripten_bind_b2PolygonShape_b2PolygonShape_0.apply(null,
                arguments)
        },
        Xi = b._emscripten_bind_b2PolygonShape_Set_2 = function () {
            return b.asm._emscripten_bind_b2PolygonShape_Set_2.apply(null, arguments)
        },
        Yi = b._emscripten_bind_b2GearJoint_GetReactionForce_1 = function () {
            return b.asm._emscripten_bind_b2GearJoint_GetReactionForce_1.apply(null, arguments)
        },
        Zi = b._emscripten_bind_b2DistanceJointDef_get_localAnchorA_0 = function () {
            return b.asm._emscripten_bind_b2DistanceJointDef_get_localAnchorA_0.apply(null, arguments)
        },
        $i = b._emscripten_bind_b2Fixture_SetUserData_1 = function () {
            return b.asm._emscripten_bind_b2Fixture_SetUserData_1.apply(null,
                arguments)
        },
        aj = b._emscripten_bind_b2Contact_SetTangentSpeed_1 = function () {
            return b.asm._emscripten_bind_b2Contact_SetTangentSpeed_1.apply(null, arguments)
        },
        bj = b._emscripten_bind_b2PrismaticJointDef_b2PrismaticJointDef_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_b2PrismaticJointDef_0.apply(null, arguments)
        },
        cj = b._emscripten_bind_b2BodyDef_get_active_0 = function () {
            return b.asm._emscripten_bind_b2BodyDef_get_active_0.apply(null, arguments)
        },
        dj = b._emscripten_bind_b2Body_GetAngularVelocity_0 =
            function () {
                return b.asm._emscripten_bind_b2Body_GetAngularVelocity_0.apply(null, arguments)
            },
        ej = b._emscripten_bind_b2CircleShape_set_m_p_1 = function () {
            return b.asm._emscripten_bind_b2CircleShape_set_m_p_1.apply(null, arguments)
        },
        fj = b._emscripten_bind_b2Draw___destroy___0 = function () {
            return b.asm._emscripten_bind_b2Draw___destroy___0.apply(null, arguments)
        },
        gj = b._emscripten_bind_b2WheelJointDef_Initialize_4 = function () {
            return b.asm._emscripten_bind_b2WheelJointDef_Initialize_4.apply(null, arguments)
        },
        hj =
            b._emscripten_bind_b2WeldJointDef_set_dampingRatio_1 = function () {
                return b.asm._emscripten_bind_b2WeldJointDef_set_dampingRatio_1.apply(null, arguments)
            },
        ij = b._emscripten_bind_b2ChainShape_b2ChainShape_0 = function () {
            return b.asm._emscripten_bind_b2ChainShape_b2ChainShape_0.apply(null, arguments)
        },
        jj = b._emscripten_bind_b2Joint_GetAnchorB_0 = function () {
            return b.asm._emscripten_bind_b2Joint_GetAnchorB_0.apply(null, arguments)
        },
        kj = b._emscripten_bind_b2PrismaticJointDef_get_userData_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_get_userData_0.apply(null,
                arguments)
        },
        lj = b._emscripten_bind_b2MotorJoint_GetMaxForce_0 = function () {
            return b.asm._emscripten_bind_b2MotorJoint_GetMaxForce_0.apply(null, arguments)
        },
        mj = b._emscripten_bind_b2RevoluteJoint_GetBodyA_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJoint_GetBodyA_0.apply(null, arguments)
        },
        nj = b._emscripten_bind_b2ContactID_set_cf_1 = function () {
            return b.asm._emscripten_bind_b2ContactID_set_cf_1.apply(null, arguments)
        },
        oj = b._emscripten_bind_b2Body_GetGravityScale_0 = function () {
            return b.asm._emscripten_bind_b2Body_GetGravityScale_0.apply(null,
                arguments)
        },
        pj = b._emscripten_bind_b2Vec3_Set_3 = function () {
            return b.asm._emscripten_bind_b2Vec3_Set_3.apply(null, arguments)
        },
        qj = b._emscripten_bind_b2RevoluteJointDef_set_localAnchorA_1 = function () {
            return b.asm._emscripten_bind_b2RevoluteJointDef_set_localAnchorA_1.apply(null, arguments)
        },
        rj = b._emscripten_bind_b2FrictionJointDef_set_localAnchorB_1 = function () {
            return b.asm._emscripten_bind_b2FrictionJointDef_set_localAnchorB_1.apply(null, arguments)
        },
        sj = b._emscripten_bind_b2PulleyJoint_GetNext_0 = function () {
            return b.asm._emscripten_bind_b2PulleyJoint_GetNext_0.apply(null,
                arguments)
        },
        tj = b._emscripten_bind_b2ChainShape_get_m_type_0 = function () {
            return b.asm._emscripten_bind_b2ChainShape_get_m_type_0.apply(null, arguments)
        },
        uj = b._emscripten_bind_b2PulleyJointDef_get_groundAnchorB_0 = function () {
            return b.asm._emscripten_bind_b2PulleyJointDef_get_groundAnchorB_0.apply(null, arguments)
        },
        vj = b._emscripten_bind_JSDraw_DrawTransform_1 = function () {
            return b.asm._emscripten_bind_JSDraw_DrawTransform_1.apply(null, arguments)
        },
        wj = b._emscripten_bind_b2GearJointDef_get_bodyA_0 = function () {
            return b.asm._emscripten_bind_b2GearJointDef_get_bodyA_0.apply(null,
                arguments)
        },
        xj = b._emscripten_bind_b2DistanceJointDef_set_frequencyHz_1 = function () {
            return b.asm._emscripten_bind_b2DistanceJointDef_set_frequencyHz_1.apply(null, arguments)
        },
        yj = b._emscripten_bind_b2RevoluteJointDef_get_localAnchorB_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJointDef_get_localAnchorB_0.apply(null, arguments)
        },
        zj = b._emscripten_bind_b2RevoluteJointDef_get_referenceAngle_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJointDef_get_referenceAngle_0.apply(null, arguments)
        },
        Aj =
            b._emscripten_bind_JSContactFilter___destroy___0 = function () {
                return b.asm._emscripten_bind_JSContactFilter___destroy___0.apply(null, arguments)
            },
        Bj = b._emscripten_bind_b2RevoluteJointDef_get_enableMotor_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJointDef_get_enableMotor_0.apply(null, arguments)
        },
        Cb = b._memset = function () {
            return b.asm._memset.apply(null, arguments)
        },
        Cj = b._emscripten_bind_b2PolygonShape_get_m_radius_0 = function () {
            return b.asm._emscripten_bind_b2PolygonShape_get_m_radius_0.apply(null,
                arguments)
        },
        Dj = b._emscripten_enum_b2BodyType_b2_kinematicBody = function () {
            return b.asm._emscripten_enum_b2BodyType_b2_kinematicBody.apply(null, arguments)
        },
        Ej = b._emscripten_bind_b2Rot_set_s_1 = function () {
            return b.asm._emscripten_bind_b2Rot_set_s_1.apply(null, arguments)
        },
        Fj = b._emscripten_enum_b2ManifoldType_e_faceA = function () {
            return b.asm._emscripten_enum_b2ManifoldType_e_faceA.apply(null, arguments)
        },
        Gj = b._emscripten_enum_b2ManifoldType_e_faceB = function () {
            return b.asm._emscripten_enum_b2ManifoldType_e_faceB.apply(null,
                arguments)
        },
        Hj = b._emscripten_bind_b2RevoluteJointDef_get_bodyB_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJointDef_get_bodyB_0.apply(null, arguments)
        },
        Ij = b._emscripten_bind_b2FixtureDef_b2FixtureDef_0 = function () {
            return b.asm._emscripten_bind_b2FixtureDef_b2FixtureDef_0.apply(null, arguments)
        },
        Jj = b._emscripten_bind_b2PrismaticJoint_SetUserData_1 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint_SetUserData_1.apply(null, arguments)
        },
        Kj = b._emscripten_bind_b2WorldManifold_set_points_2 =
            function () {
                return b.asm._emscripten_bind_b2WorldManifold_set_points_2.apply(null, arguments)
            },
        Lj = b._emscripten_bind_b2EdgeShape_get_m_hasVertex3_0 = function () {
            return b.asm._emscripten_bind_b2EdgeShape_get_m_hasVertex3_0.apply(null, arguments)
        },
        Mj = b._emscripten_enum_b2ShapeType_e_edge = function () {
            return b.asm._emscripten_enum_b2ShapeType_e_edge.apply(null, arguments)
        },
        Nj = b._emscripten_bind_b2RevoluteJoint_GetMaxMotorTorque_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJoint_GetMaxMotorTorque_0.apply(null,
                arguments)
        },
        Oj = b._emscripten_bind_b2BodyDef_set_active_1 = function () {
            return b.asm._emscripten_bind_b2BodyDef_set_active_1.apply(null, arguments)
        },
        Pj = b._emscripten_bind_b2EdgeShape_Set_2 = function () {
            return b.asm._emscripten_bind_b2EdgeShape_Set_2.apply(null, arguments)
        },
        Qj = b._emscripten_bind_b2FixtureDef_set_isSensor_1 = function () {
            return b.asm._emscripten_bind_b2FixtureDef_set_isSensor_1.apply(null, arguments)
        },
        Rj = b._emscripten_bind_b2Body_GetWorldPoint_1 = function () {
            return b.asm._emscripten_bind_b2Body_GetWorldPoint_1.apply(null,
                arguments)
        },
        Sj = b._emscripten_bind_b2ManifoldPoint_get_normalImpulse_0 = function () {
            return b.asm._emscripten_bind_b2ManifoldPoint_get_normalImpulse_0.apply(null, arguments)
        },
        Tj = b._emscripten_bind_JSContactFilter_ShouldCollide_2 = function () {
            return b.asm._emscripten_bind_JSContactFilter_ShouldCollide_2.apply(null, arguments)
        },
        Uj = b._emscripten_bind_b2Joint_GetReactionTorque_1 = function () {
            return b.asm._emscripten_bind_b2Joint_GetReactionTorque_1.apply(null, arguments)
        },
        Vj = b._emscripten_bind_b2RevoluteJointDef_set_type_1 =
            function () {
                return b.asm._emscripten_bind_b2RevoluteJointDef_set_type_1.apply(null, arguments)
            },
        Wj = b._emscripten_bind_b2RayCastInput_set_p1_1 = function () {
            return b.asm._emscripten_bind_b2RayCastInput_set_p1_1.apply(null, arguments)
        },
        Xj = b._emscripten_bind_b2RopeJointDef_b2RopeJointDef_0 = function () {
            return b.asm._emscripten_bind_b2RopeJointDef_b2RopeJointDef_0.apply(null, arguments)
        },
        Yj = b._emscripten_bind_b2BodyDef_get_linearDamping_0 = function () {
            return b.asm._emscripten_bind_b2BodyDef_get_linearDamping_0.apply(null,
                arguments)
        },
        Zj = b._emscripten_bind_b2World_Step_3 = function () {
            return b.asm._emscripten_bind_b2World_Step_3.apply(null, arguments)
        },
        ak = b._emscripten_bind_b2CircleShape_RayCast_4 = function () {
            return b.asm._emscripten_bind_b2CircleShape_RayCast_4.apply(null, arguments)
        },
        bk = b._emscripten_bind_b2Profile_get_step_0 = function () {
            return b.asm._emscripten_bind_b2Profile_get_step_0.apply(null, arguments)
        },
        ck = b._emscripten_bind_b2AABB_RayCast_2 = function () {
            return b.asm._emscripten_bind_b2AABB_RayCast_2.apply(null, arguments)
        },
        dk = b._emscripten_bind_b2Mat22_SetZero_0 = function () {
            return b.asm._emscripten_bind_b2Mat22_SetZero_0.apply(null, arguments)
        };
    b.setTempRet0 = function () {
        return b.asm.setTempRet0.apply(null, arguments)
    };
    var ek = b._emscripten_bind_b2DistanceJoint_GetLength_0 = function () {
        return b.asm._emscripten_bind_b2DistanceJoint_GetLength_0.apply(null, arguments)
    },
        fk = b._emscripten_bind_b2PulleyJoint_GetLengthB_0 = function () {
            return b.asm._emscripten_bind_b2PulleyJoint_GetLengthB_0.apply(null, arguments)
        },
        gk = b._emscripten_bind_b2PrismaticJoint_GetUpperLimit_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint_GetUpperLimit_0.apply(null, arguments)
        },
        hk = b._emscripten_bind_b2WorldManifold_set_separations_2 = function () {
            return b.asm._emscripten_bind_b2WorldManifold_set_separations_2.apply(null,
                arguments)
        },
        ik = b._emscripten_bind_b2WheelJoint_SetMaxMotorTorque_1 = function () {
            return b.asm._emscripten_bind_b2WheelJoint_SetMaxMotorTorque_1.apply(null, arguments)
        },
        jk = b._emscripten_bind_b2MotorJoint_GetUserData_0 = function () {
            return b.asm._emscripten_bind_b2MotorJoint_GetUserData_0.apply(null, arguments)
        },
        kk = b._emscripten_bind_b2FrictionJoint_GetReactionTorque_1 = function () {
            return b.asm._emscripten_bind_b2FrictionJoint_GetReactionTorque_1.apply(null, arguments)
        },
        lk = b._emscripten_bind_b2Shape_get_m_type_0 =
            function () {
                return b.asm._emscripten_bind_b2Shape_get_m_type_0.apply(null, arguments)
            },
        mk = b._emscripten_bind_b2MouseJoint_SetDampingRatio_1 = function () {
            return b.asm._emscripten_bind_b2MouseJoint_SetDampingRatio_1.apply(null, arguments)
        },
        nk = b._emscripten_bind_b2World_GetAutoClearForces_0 = function () {
            return b.asm._emscripten_bind_b2World_GetAutoClearForces_0.apply(null, arguments)
        },
        ok = b._emscripten_bind_b2WorldManifold_set_normal_1 = function () {
            return b.asm._emscripten_bind_b2WorldManifold_set_normal_1.apply(null,
                arguments)
        },
        pk = b._emscripten_enum_b2ShapeType_e_circle = function () {
            return b.asm._emscripten_enum_b2ShapeType_e_circle.apply(null, arguments)
        },
        qk = b._emscripten_bind_b2BodyDef_set_fixedRotation_1 = function () {
            return b.asm._emscripten_bind_b2BodyDef_set_fixedRotation_1.apply(null, arguments)
        },
        rk = b._emscripten_bind_b2Vec2_b2Vec2_2 = function () {
            return b.asm._emscripten_bind_b2Vec2_b2Vec2_2.apply(null, arguments)
        },
        sk = b._emscripten_bind_b2Manifold_get_type_0 = function () {
            return b.asm._emscripten_bind_b2Manifold_get_type_0.apply(null,
                arguments)
        },
        tk = b._emscripten_bind_b2Body_Dump_0 = function () {
            return b.asm._emscripten_bind_b2Body_Dump_0.apply(null, arguments)
        },
        uk = b._emscripten_bind_b2RevoluteJoint_GetLowerLimit_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJoint_GetLowerLimit_0.apply(null, arguments)
        },
        vk = b._emscripten_bind_b2Body_GetWorldCenter_0 = function () {
            return b.asm._emscripten_bind_b2Body_GetWorldCenter_0.apply(null, arguments)
        },
        wk = b._emscripten_bind_b2WheelJointDef_set_maxMotorTorque_1 = function () {
            return b.asm._emscripten_bind_b2WheelJointDef_set_maxMotorTorque_1.apply(null,
                arguments)
        },
        xk = b._emscripten_bind_b2BodyDef_set_linearVelocity_1 = function () {
            return b.asm._emscripten_bind_b2BodyDef_set_linearVelocity_1.apply(null, arguments)
        },
        yk = b._emscripten_bind_b2JointDef_set_collideConnected_1 = function () {
            return b.asm._emscripten_bind_b2JointDef_set_collideConnected_1.apply(null, arguments)
        },
        zk = b._emscripten_bind_b2MotorJoint___destroy___0 = function () {
            return b.asm._emscripten_bind_b2MotorJoint___destroy___0.apply(null, arguments)
        },
        Ak = b._emscripten_bind_b2Body_GetUserData_0 = function () {
            return b.asm._emscripten_bind_b2Body_GetUserData_0.apply(null,
                arguments)
        },
        Bk = b._emscripten_bind_b2Body_GetAngularDamping_0 = function () {
            return b.asm._emscripten_bind_b2Body_GetAngularDamping_0.apply(null, arguments)
        },
        Ck = b._emscripten_bind_b2Fixture_RayCast_3 = function () {
            return b.asm._emscripten_bind_b2Fixture_RayCast_3.apply(null, arguments)
        },
        Dk = b._emscripten_bind_b2JointDef_set_bodyA_1 = function () {
            return b.asm._emscripten_bind_b2JointDef_set_bodyA_1.apply(null, arguments)
        },
        Ek = b._emscripten_bind_b2GearJointDef_get_collideConnected_0 = function () {
            return b.asm._emscripten_bind_b2GearJointDef_get_collideConnected_0.apply(null,
                arguments)
        },
        Fk = b._emscripten_bind_b2RopeJointDef_get_maxLength_0 = function () {
            return b.asm._emscripten_bind_b2RopeJointDef_get_maxLength_0.apply(null, arguments)
        },
        Gk = b._emscripten_bind_b2MouseJointDef_get_bodyA_0 = function () {
            return b.asm._emscripten_bind_b2MouseJointDef_get_bodyA_0.apply(null, arguments)
        },
        Hk = b._emscripten_bind_b2Body_SetBullet_1 = function () {
            return b.asm._emscripten_bind_b2Body_SetBullet_1.apply(null, arguments)
        },
        Ik = b._emscripten_bind_b2DistanceJoint_GetType_0 = function () {
            return b.asm._emscripten_bind_b2DistanceJoint_GetType_0.apply(null,
                arguments)
        },
        Jk = b._emscripten_bind_b2FixtureDef_get_restitution_0 = function () {
            return b.asm._emscripten_bind_b2FixtureDef_get_restitution_0.apply(null, arguments)
        },
        Kk = b._emscripten_bind_b2Fixture_GetType_0 = function () {
            return b.asm._emscripten_bind_b2Fixture_GetType_0.apply(null, arguments)
        },
        Lk = b._emscripten_bind_b2WheelJointDef_set_enableMotor_1 = function () {
            return b.asm._emscripten_bind_b2WheelJointDef_set_enableMotor_1.apply(null, arguments)
        },
        Mk = b._emscripten_bind_b2RevoluteJoint_GetBodyB_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJoint_GetBodyB_0.apply(null,
                arguments)
        },
        Nk = b._emscripten_bind_b2Profile_set_solveInit_1 = function () {
            return b.asm._emscripten_bind_b2Profile_set_solveInit_1.apply(null, arguments)
        },
        Ok = b._emscripten_bind_b2RopeJointDef_set_type_1 = function () {
            return b.asm._emscripten_bind_b2RopeJointDef_set_type_1.apply(null, arguments)
        },
        Pk = b._emscripten_bind_b2PrismaticJointDef_get_bodyB_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_get_bodyB_0.apply(null, arguments)
        },
        Qk = b._emscripten_bind_b2GearJoint_GetJoint2_0 = function () {
            return b.asm._emscripten_bind_b2GearJoint_GetJoint2_0.apply(null,
                arguments)
        },
        Rk = b._emscripten_bind_b2PulleyJointDef_get_userData_0 = function () {
            return b.asm._emscripten_bind_b2PulleyJointDef_get_userData_0.apply(null, arguments)
        },
        Sk = b._emscripten_bind_b2PrismaticJointDef_set_bodyB_1 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_set_bodyB_1.apply(null, arguments)
        },
        Tk = b._emscripten_bind_b2FrictionJointDef_b2FrictionJointDef_0 = function () {
            return b.asm._emscripten_bind_b2FrictionJointDef_b2FrictionJointDef_0.apply(null, arguments)
        },
        Uk = b._emscripten_bind_b2PulleyJoint_GetCurrentLengthA_0 =
            function () {
                return b.asm._emscripten_bind_b2PulleyJoint_GetCurrentLengthA_0.apply(null, arguments)
            },
        Vk = b._emscripten_bind_b2Manifold_get_localNormal_0 = function () {
            return b.asm._emscripten_bind_b2Manifold_get_localNormal_0.apply(null, arguments)
        },
        Wk = b._emscripten_bind_b2Vec3_b2Vec3_0 = function () {
            return b.asm._emscripten_bind_b2Vec3_b2Vec3_0.apply(null, arguments)
        },
        Xk = b._emscripten_bind_b2Body_SetSleepingAllowed_1 = function () {
            return b.asm._emscripten_bind_b2Body_SetSleepingAllowed_1.apply(null, arguments)
        },
        Yk = b._emscripten_bind_b2DistanceJoint___destroy___0 = function () {
            return b.asm._emscripten_bind_b2DistanceJoint___destroy___0.apply(null, arguments)
        },
        Zk = b._emscripten_bind_b2PrismaticJoint_GetAnchorA_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint_GetAnchorA_0.apply(null, arguments)
        },
        $k = b._emscripten_bind_b2Manifold_set_pointCount_1 = function () {
            return b.asm._emscripten_bind_b2Manifold_set_pointCount_1.apply(null, arguments)
        },
        al = b._emscripten_bind_b2PrismaticJoint_IsMotorEnabled_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint_IsMotorEnabled_0.apply(null,
                arguments)
        },
        bl = b._emscripten_bind_b2WeldJoint_GetFrequency_0 = function () {
            return b.asm._emscripten_bind_b2WeldJoint_GetFrequency_0.apply(null, arguments)
        },
        cl = b._emscripten_bind_b2Joint_GetUserData_0 = function () {
            return b.asm._emscripten_bind_b2Joint_GetUserData_0.apply(null, arguments)
        },
        dl = b._emscripten_bind_b2WorldManifold_get_points_1 = function () {
            return b.asm._emscripten_bind_b2WorldManifold_get_points_1.apply(null, arguments)
        },
        el = b._emscripten_bind_b2RevoluteJointDef_get_lowerAngle_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJointDef_get_lowerAngle_0.apply(null,
                arguments)
        },
        fl = b._emscripten_bind_b2Manifold_set_type_1 = function () {
            return b.asm._emscripten_bind_b2Manifold_set_type_1.apply(null, arguments)
        },
        gl = b._emscripten_bind_b2Vec3_b2Vec3_3 = function () {
            return b.asm._emscripten_bind_b2Vec3_b2Vec3_3.apply(null, arguments)
        },
        hl = b._emscripten_bind_b2RopeJointDef_set_maxLength_1 = function () {
            return b.asm._emscripten_bind_b2RopeJointDef_set_maxLength_1.apply(null, arguments)
        },
        il = b._emscripten_bind_b2ChainShape_TestPoint_2 = function () {
            return b.asm._emscripten_bind_b2ChainShape_TestPoint_2.apply(null,
                arguments)
        },
        jl = b._emscripten_bind_b2PrismaticJoint_GetReferenceAngle_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint_GetReferenceAngle_0.apply(null, arguments)
        },
        kl = b._emscripten_bind_b2RayCastInput_get_p2_0 = function () {
            return b.asm._emscripten_bind_b2RayCastInput_get_p2_0.apply(null, arguments)
        },
        ll = b._emscripten_bind_b2BodyDef_set_angle_1 = function () {
            return b.asm._emscripten_bind_b2BodyDef_set_angle_1.apply(null, arguments)
        },
        ml = b._emscripten_bind_b2WeldJoint_GetUserData_0 = function () {
            return b.asm._emscripten_bind_b2WeldJoint_GetUserData_0.apply(null,
                arguments)
        },
        nl = b._emscripten_bind_b2WheelJointDef_get_localAnchorA_0 = function () {
            return b.asm._emscripten_bind_b2WheelJointDef_get_localAnchorA_0.apply(null, arguments)
        },
        ol = b._emscripten_bind_b2PulleyJointDef_set_type_1 = function () {
            return b.asm._emscripten_bind_b2PulleyJointDef_set_type_1.apply(null, arguments)
        },
        pl = b._emscripten_bind_b2Body_IsBullet_0 = function () {
            return b.asm._emscripten_bind_b2Body_IsBullet_0.apply(null, arguments)
        },
        ql = b._emscripten_bind_b2MotorJointDef_set_bodyA_1 = function () {
            return b.asm._emscripten_bind_b2MotorJointDef_set_bodyA_1.apply(null,
                arguments)
        },
        rl = b._emscripten_bind_b2Fixture_TestPoint_1 = function () {
            return b.asm._emscripten_bind_b2Fixture_TestPoint_1.apply(null, arguments)
        },
        sl = b._emscripten_bind_b2Mat33_GetSymInverse33_1 = function () {
            return b.asm._emscripten_bind_b2Mat33_GetSymInverse33_1.apply(null, arguments)
        },
        tl = b._emscripten_bind_JSDraw_DrawPolygon_3 = function () {
            return b.asm._emscripten_bind_JSDraw_DrawPolygon_3.apply(null, arguments)
        },
        ul = b._emscripten_bind_b2PolygonShape_ComputeMass_2 = function () {
            return b.asm._emscripten_bind_b2PolygonShape_ComputeMass_2.apply(null,
                arguments)
        },
        vl = b._emscripten_bind_b2PrismaticJoint_EnableMotor_1 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint_EnableMotor_1.apply(null, arguments)
        },
        wl = b._emscripten_bind_b2PrismaticJointDef_set_upperTranslation_1 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_set_upperTranslation_1.apply(null, arguments)
        },
        xl = b._emscripten_bind_b2MouseJoint_SetFrequency_1 = function () {
            return b.asm._emscripten_bind_b2MouseJoint_SetFrequency_1.apply(null, arguments)
        },
        yl = b._emscripten_bind_b2EdgeShape_get_m_vertex1_0 =
            function () {
                return b.asm._emscripten_bind_b2EdgeShape_get_m_vertex1_0.apply(null, arguments)
            },
        zl = b._emscripten_bind_b2BodyDef_set_awake_1 = function () {
            return b.asm._emscripten_bind_b2BodyDef_set_awake_1.apply(null, arguments)
        },
        Al = b._emscripten_bind_b2Vec2_get_y_0 = function () {
            return b.asm._emscripten_bind_b2Vec2_get_y_0.apply(null, arguments)
        },
        Bl = b._emscripten_bind_b2Filter_set_categoryBits_1 = function () {
            return b.asm._emscripten_bind_b2Filter_set_categoryBits_1.apply(null, arguments)
        },
        Cl = b._emscripten_bind_b2Body_CreateFixture_2 =
            function () {
                return b.asm._emscripten_bind_b2Body_CreateFixture_2.apply(null, arguments)
            },
        Dl = b._emscripten_bind_b2Body_SetActive_1 = function () {
            return b.asm._emscripten_bind_b2Body_SetActive_1.apply(null, arguments)
        },
        El = b._emscripten_bind_b2ContactFeature_get_indexB_0 = function () {
            return b.asm._emscripten_bind_b2ContactFeature_get_indexB_0.apply(null, arguments)
        },
        Fl = b._emscripten_bind_b2Fixture_GetUserData_0 = function () {
            return b.asm._emscripten_bind_b2Fixture_GetUserData_0.apply(null, arguments)
        },
        Gl = b._emscripten_bind_b2PolygonShape_ComputeAABB_3 =
            function () {
                return b.asm._emscripten_bind_b2PolygonShape_ComputeAABB_3.apply(null, arguments)
            },
        Hl = b._emscripten_bind_b2ContactFeature_get_typeA_0 = function () {
            return b.asm._emscripten_bind_b2ContactFeature_get_typeA_0.apply(null, arguments)
        },
        Il = b._emscripten_bind_b2MouseJointDef_set_maxForce_1 = function () {
            return b.asm._emscripten_bind_b2MouseJointDef_set_maxForce_1.apply(null, arguments)
        },
        Jl = b._emscripten_bind_b2PrismaticJoint_GetLocalAnchorA_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint_GetLocalAnchorA_0.apply(null,
                arguments)
        },
        Kl = b._emscripten_bind_b2EdgeShape_TestPoint_2 = function () {
            return b.asm._emscripten_bind_b2EdgeShape_TestPoint_2.apply(null, arguments)
        },
        Ll = b._emscripten_bind_b2WorldManifold_Initialize_5 = function () {
            return b.asm._emscripten_bind_b2WorldManifold_Initialize_5.apply(null, arguments)
        },
        Ml = b._emscripten_bind_b2PolygonShape_get_m_centroid_0 = function () {
            return b.asm._emscripten_bind_b2PolygonShape_get_m_centroid_0.apply(null, arguments)
        },
        Nl = b._emscripten_bind_b2ChainShape___destroy___0 = function () {
            return b.asm._emscripten_bind_b2ChainShape___destroy___0.apply(null,
                arguments)
        },
        Ol = b._emscripten_bind_b2GearJoint_SetUserData_1 = function () {
            return b.asm._emscripten_bind_b2GearJoint_SetUserData_1.apply(null, arguments)
        },
        Pl = b._emscripten_bind_b2Vec3_set_z_1 = function () {
            return b.asm._emscripten_bind_b2Vec3_set_z_1.apply(null, arguments)
        },
        Ql = b._emscripten_bind_b2PrismaticJointDef_set_enableLimit_1 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_set_enableLimit_1.apply(null, arguments)
        },
        Rl = b._emscripten_bind_b2DistanceJoint_GetFrequency_0 = function () {
            return b.asm._emscripten_bind_b2DistanceJoint_GetFrequency_0.apply(null,
                arguments)
        },
        Sl = b._emscripten_bind_b2PrismaticJointDef_get_collideConnected_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_get_collideConnected_0.apply(null, arguments)
        },
        Tl = b._emscripten_bind_b2Body_SetGravityScale_1 = function () {
            return b.asm._emscripten_bind_b2Body_SetGravityScale_1.apply(null, arguments)
        },
        Ul = b._emscripten_enum_b2ContactFeatureType_e_face = function () {
            return b.asm._emscripten_enum_b2ContactFeatureType_e_face.apply(null, arguments)
        },
        Vl = b._emscripten_bind_b2RevoluteJoint_GetUpperLimit_0 =
            function () {
                return b.asm._emscripten_bind_b2RevoluteJoint_GetUpperLimit_0.apply(null, arguments)
            },
        Wl = b._emscripten_bind_b2PulleyJointDef_get_lengthA_0 = function () {
            return b.asm._emscripten_bind_b2PulleyJointDef_get_lengthA_0.apply(null, arguments)
        },
        Xl = b._emscripten_bind_b2Vec3_set_x_1 = function () {
            return b.asm._emscripten_bind_b2Vec3_set_x_1.apply(null, arguments)
        },
        Yl = b._emscripten_bind_b2PulleyJointDef_get_type_0 = function () {
            return b.asm._emscripten_bind_b2PulleyJointDef_get_type_0.apply(null, arguments)
        },
        Zl = b._emscripten_bind_JSDestructionListener_SayGoodbyeJoint_1 = function () {
            return b.asm._emscripten_bind_JSDestructionListener_SayGoodbyeJoint_1.apply(null, arguments)
        },
        $l = b._emscripten_bind_b2Shape___destroy___0 = function () {
            return b.asm._emscripten_bind_b2Shape___destroy___0.apply(null, arguments)
        },
        am = b._emscripten_bind_b2Joint_GetReactionForce_1 = function () {
            return b.asm._emscripten_bind_b2Joint_GetReactionForce_1.apply(null, arguments)
        },
        bm = b._emscripten_bind_b2FixtureDef_set_friction_1 = function () {
            return b.asm._emscripten_bind_b2FixtureDef_set_friction_1.apply(null,
                arguments)
        },
        cm = b._emscripten_bind_b2ContactID___destroy___0 = function () {
            return b.asm._emscripten_bind_b2ContactID___destroy___0.apply(null, arguments)
        },
        dm = b._emscripten_bind_b2EdgeShape_get_m_hasVertex0_0 = function () {
            return b.asm._emscripten_bind_b2EdgeShape_get_m_hasVertex0_0.apply(null, arguments)
        },
        em = b._emscripten_bind_b2World_GetBodyCount_0 = function () {
            return b.asm._emscripten_bind_b2World_GetBodyCount_0.apply(null, arguments)
        },
        fm = b._emscripten_bind_b2JointEdge_get_prev_0 = function () {
            return b.asm._emscripten_bind_b2JointEdge_get_prev_0.apply(null,
                arguments)
        },
        gm = b._emscripten_bind_b2MotorJointDef_get_linearOffset_0 = function () {
            return b.asm._emscripten_bind_b2MotorJointDef_get_linearOffset_0.apply(null, arguments)
        },
        hm = b._emscripten_bind_b2MotorJointDef_Initialize_2 = function () {
            return b.asm._emscripten_bind_b2MotorJointDef_Initialize_2.apply(null, arguments)
        },
        im = b._emscripten_bind_b2PrismaticJoint_GetAnchorB_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint_GetAnchorB_0.apply(null, arguments)
        },
        jm = b._emscripten_bind_b2Body_SetLinearVelocity_1 =
            function () {
                return b.asm._emscripten_bind_b2Body_SetLinearVelocity_1.apply(null, arguments)
            },
        km = b._emscripten_enum_b2BodyType_b2_staticBody = function () {
            return b.asm._emscripten_enum_b2BodyType_b2_staticBody.apply(null, arguments)
        },
        lm = b._emscripten_bind_b2RevoluteJointDef_set_upperAngle_1 = function () {
            return b.asm._emscripten_bind_b2RevoluteJointDef_set_upperAngle_1.apply(null, arguments)
        },
        mm = b._emscripten_bind_b2RevoluteJointDef_get_type_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJointDef_get_type_0.apply(null,
                arguments)
        },
        nm = b._emscripten_bind_b2GearJointDef_get_type_0 = function () {
            return b.asm._emscripten_bind_b2GearJointDef_get_type_0.apply(null, arguments)
        },
        om = b._emscripten_bind_b2ChainShape_GetType_0 = function () {
            return b.asm._emscripten_bind_b2ChainShape_GetType_0.apply(null, arguments)
        },
        pm = b._emscripten_bind_b2RayCastInput_get_maxFraction_0 = function () {
            return b.asm._emscripten_bind_b2RayCastInput_get_maxFraction_0.apply(null, arguments)
        },
        qm = b._emscripten_bind_b2GearJoint_GetBodyA_0 = function () {
            return b.asm._emscripten_bind_b2GearJoint_GetBodyA_0.apply(null,
                arguments)
        },
        rm = b._emscripten_bind_b2Body_GetLocalVector_1 = function () {
            return b.asm._emscripten_bind_b2Body_GetLocalVector_1.apply(null, arguments)
        },
        sm = b._emscripten_bind_b2PrismaticJoint_EnableLimit_1 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint_EnableLimit_1.apply(null, arguments)
        },
        tm = b._emscripten_bind_b2FrictionJointDef_get_maxForce_0 = function () {
            return b.asm._emscripten_bind_b2FrictionJointDef_get_maxForce_0.apply(null, arguments)
        },
        um = b._emscripten_bind_b2BodyDef_set_angularVelocity_1 =
            function () {
                return b.asm._emscripten_bind_b2BodyDef_set_angularVelocity_1.apply(null, arguments)
            },
        wm = b._emscripten_bind_b2Body_SetLinearDamping_1 = function () {
            return b.asm._emscripten_bind_b2Body_SetLinearDamping_1.apply(null, arguments)
        },
        xm = b._emscripten_bind_b2WheelJoint_GetBodyB_0 = function () {
            return b.asm._emscripten_bind_b2WheelJoint_GetBodyB_0.apply(null, arguments)
        },
        ym = b._emscripten_bind_b2GearJointDef_get_joint2_0 = function () {
            return b.asm._emscripten_bind_b2GearJointDef_get_joint2_0.apply(null, arguments)
        },
        zm = b._emscripten_bind_b2PrismaticJoint_IsActive_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint_IsActive_0.apply(null, arguments)
        },
        Am = b._emscripten_bind_b2Vec3_get_z_0 = function () {
            return b.asm._emscripten_bind_b2Vec3_get_z_0.apply(null, arguments)
        },
        Bm = b._emscripten_bind_b2Filter_get_categoryBits_0 = function () {
            return b.asm._emscripten_bind_b2Filter_get_categoryBits_0.apply(null, arguments)
        },
        Cm = b._emscripten_bind_b2Color_get_r_0 = function () {
            return b.asm._emscripten_bind_b2Color_get_r_0.apply(null,
                arguments)
        },
        Dm = b._emscripten_enum_b2JointType_e_weldJoint = function () {
            return b.asm._emscripten_enum_b2JointType_e_weldJoint.apply(null, arguments)
        },
        Em = b._emscripten_bind_b2World_SetContinuousPhysics_1 = function () {
            return b.asm._emscripten_bind_b2World_SetContinuousPhysics_1.apply(null, arguments)
        },
        Fm = b._emscripten_bind_b2MouseJointDef_get_target_0 = function () {
            return b.asm._emscripten_bind_b2MouseJointDef_get_target_0.apply(null, arguments)
        },
        Gm = b._emscripten_bind_b2Body_SetTransform_2 = function () {
            return b.asm._emscripten_bind_b2Body_SetTransform_2.apply(null,
                arguments)
        },
        Hm = b._emscripten_bind_b2PulleyJointDef_set_userData_1 = function () {
            return b.asm._emscripten_bind_b2PulleyJointDef_set_userData_1.apply(null, arguments)
        },
        Im = b._emscripten_bind_b2FrictionJointDef_set_maxForce_1 = function () {
            return b.asm._emscripten_bind_b2FrictionJointDef_set_maxForce_1.apply(null, arguments)
        },
        Jm = b._emscripten_bind_b2DistanceJointDef_b2DistanceJointDef_0 = function () {
            return b.asm._emscripten_bind_b2DistanceJointDef_b2DistanceJointDef_0.apply(null, arguments)
        },
        Km = b._emscripten_bind_b2BodyDef_get_type_0 =
            function () {
                return b.asm._emscripten_bind_b2BodyDef_get_type_0.apply(null, arguments)
            },
        Lm = b._emscripten_bind_b2Mat33_GetInverse22_1 = function () {
            return b.asm._emscripten_bind_b2Mat33_GetInverse22_1.apply(null, arguments)
        },
        Mm = b._emscripten_bind_b2PulleyJoint_GetAnchorB_0 = function () {
            return b.asm._emscripten_bind_b2PulleyJoint_GetAnchorB_0.apply(null, arguments)
        },
        Nm = b._emscripten_bind_b2WheelJoint_GetReactionTorque_1 = function () {
            return b.asm._emscripten_bind_b2WheelJoint_GetReactionTorque_1.apply(null, arguments)
        },
        Om = b._emscripten_bind_b2RevoluteJointDef_b2RevoluteJointDef_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJointDef_b2RevoluteJointDef_0.apply(null, arguments)
        },
        Pm = b._emscripten_bind_b2ContactFeature_set_typeA_1 = function () {
            return b.asm._emscripten_bind_b2ContactFeature_set_typeA_1.apply(null, arguments)
        },
        Qm = b._emscripten_bind_b2Fixture_Dump_1 = function () {
            return b.asm._emscripten_bind_b2Fixture_Dump_1.apply(null, arguments)
        },
        Rm = b._emscripten_bind_b2RevoluteJointDef_get_enableLimit_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJointDef_get_enableLimit_0.apply(null,
                arguments)
        },
        Sm = b._emscripten_bind_b2Manifold_set_localPoint_1 = function () {
            return b.asm._emscripten_bind_b2Manifold_set_localPoint_1.apply(null, arguments)
        },
        Tm = b._emscripten_bind_b2JointDef_get_userData_0 = function () {
            return b.asm._emscripten_bind_b2JointDef_get_userData_0.apply(null, arguments)
        },
        Um = b._emscripten_bind_b2BodyDef_set_bullet_1 = function () {
            return b.asm._emscripten_bind_b2BodyDef_set_bullet_1.apply(null, arguments)
        },
        Vm = b._emscripten_bind_b2WorldManifold___destroy___0 = function () {
            return b.asm._emscripten_bind_b2WorldManifold___destroy___0.apply(null,
                arguments)
        },
        Wm = b._emscripten_bind_b2RayCastOutput___destroy___0 = function () {
            return b.asm._emscripten_bind_b2RayCastOutput___destroy___0.apply(null, arguments)
        },
        Xm = b._emscripten_bind_JSContactListener___destroy___0 = function () {
            return b.asm._emscripten_bind_JSContactListener___destroy___0.apply(null, arguments)
        },
        Ym = b._emscripten_bind_b2World_DrawDebugData_0 = function () {
            return b.asm._emscripten_bind_b2World_DrawDebugData_0.apply(null, arguments)
        };
    b.___cxa_can_catch = function () {
        return b.asm.___cxa_can_catch.apply(null, arguments)
    };
    var Zm = b._emscripten_bind_b2RopeJointDef_get_localAnchorA_0 = function () {
        return b.asm._emscripten_bind_b2RopeJointDef_get_localAnchorA_0.apply(null, arguments)
    },
        $m = b._emscripten_bind_b2Profile_set_solveVelocity_1 = function () {
            return b.asm._emscripten_bind_b2Profile_set_solveVelocity_1.apply(null, arguments)
        },
        an = b._emscripten_bind_b2GearJointDef_get_userData_0 = function () {
            return b.asm._emscripten_bind_b2GearJointDef_get_userData_0.apply(null, arguments)
        },
        bn = b._emscripten_bind_b2Filter_set_groupIndex_1 = function () {
            return b.asm._emscripten_bind_b2Filter_set_groupIndex_1.apply(null,
                arguments)
        },
        cn = b._emscripten_bind_b2JointDef_b2JointDef_0 = function () {
            return b.asm._emscripten_bind_b2JointDef_b2JointDef_0.apply(null, arguments)
        },
        dn = b._emscripten_bind_b2Rot_set_c_1 = function () {
            return b.asm._emscripten_bind_b2Rot_set_c_1.apply(null, arguments)
        },
        en = b._emscripten_bind_b2GearJointDef_b2GearJointDef_0 = function () {
            return b.asm._emscripten_bind_b2GearJointDef_b2GearJointDef_0.apply(null, arguments)
        },
        fn = b._emscripten_bind_b2JointDef_get_bodyB_0 = function () {
            return b.asm._emscripten_bind_b2JointDef_get_bodyB_0.apply(null,
                arguments)
        },
        gn = b._emscripten_bind_b2DistanceJoint_GetReactionForce_1 = function () {
            return b.asm._emscripten_bind_b2DistanceJoint_GetReactionForce_1.apply(null, arguments)
        },
        hn = b._emscripten_bind_b2PrismaticJoint_GetJointSpeed_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint_GetJointSpeed_0.apply(null, arguments)
        },
        jn = b._emscripten_bind_b2MouseJointDef_set_frequencyHz_1 = function () {
            return b.asm._emscripten_bind_b2MouseJointDef_set_frequencyHz_1.apply(null, arguments)
        },
        kn = b._emscripten_bind_b2PulleyJointDef_get_groundAnchorA_0 =
            function () {
                return b.asm._emscripten_bind_b2PulleyJointDef_get_groundAnchorA_0.apply(null, arguments)
            },
        ln = b._emscripten_bind_b2Joint_GetAnchorA_0 = function () {
            return b.asm._emscripten_bind_b2Joint_GetAnchorA_0.apply(null, arguments)
        },
        mn = b._emscripten_bind_b2Contact_GetRestitution_0 = function () {
            return b.asm._emscripten_bind_b2Contact_GetRestitution_0.apply(null, arguments)
        },
        nn = b._emscripten_bind_b2ContactEdge_get_contact_0 = function () {
            return b.asm._emscripten_bind_b2ContactEdge_get_contact_0.apply(null, arguments)
        },
        on = b._emscripten_bind_b2RevoluteJointDef_get_userData_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJointDef_get_userData_0.apply(null, arguments)
        },
        pn = b._emscripten_bind_b2Body_ResetMassData_0 = function () {
            return b.asm._emscripten_bind_b2Body_ResetMassData_0.apply(null, arguments)
        },
        qn = b._emscripten_bind_b2Fixture_GetAABB_1 = function () {
            return b.asm._emscripten_bind_b2Fixture_GetAABB_1.apply(null, arguments)
        },
        rn = b._emscripten_bind_b2PrismaticJointDef_set_collideConnected_1 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_set_collideConnected_1.apply(null,
                arguments)
        },
        sn = b._emscripten_bind_b2Body_GetMassData_1 = function () {
            return b.asm._emscripten_bind_b2Body_GetMassData_1.apply(null, arguments)
        },
        tn = b._emscripten_bind_b2RevoluteJointDef_get_localAnchorA_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJointDef_get_localAnchorA_0.apply(null, arguments)
        },
        un = b._emscripten_bind_b2EdgeShape_ComputeMass_2 = function () {
            return b.asm._emscripten_bind_b2EdgeShape_ComputeMass_2.apply(null, arguments)
        },
        vn = b._emscripten_bind_b2GearJointDef_get_bodyB_0 = function () {
            return b.asm._emscripten_bind_b2GearJointDef_get_bodyB_0.apply(null,
                arguments)
        },
        wn = b._emscripten_enum_b2LimitState_e_atLowerLimit = function () {
            return b.asm._emscripten_enum_b2LimitState_e_atLowerLimit.apply(null, arguments)
        },
        xn = b._emscripten_bind_b2ManifoldPoint_set_id_1 = function () {
            return b.asm._emscripten_bind_b2ManifoldPoint_set_id_1.apply(null, arguments)
        },
        yn = b._emscripten_bind_b2WheelJointDef_get_bodyB_0 = function () {
            return b.asm._emscripten_bind_b2WheelJointDef_get_bodyB_0.apply(null, arguments)
        },
        zn = b._emscripten_bind_b2WeldJoint_GetLocalAnchorB_0 = function () {
            return b.asm._emscripten_bind_b2WeldJoint_GetLocalAnchorB_0.apply(null,
                arguments)
        },
        An = b._emscripten_bind_b2RevoluteJointDef_set_localAnchorB_1 = function () {
            return b.asm._emscripten_bind_b2RevoluteJointDef_set_localAnchorB_1.apply(null, arguments)
        },
        Bn = b._emscripten_bind_b2Body_DestroyFixture_1 = function () {
            return b.asm._emscripten_bind_b2Body_DestroyFixture_1.apply(null, arguments)
        },
        Cn = b._emscripten_bind_b2Profile_set_broadphase_1 = function () {
            return b.asm._emscripten_bind_b2Profile_set_broadphase_1.apply(null, arguments)
        },
        Dn = b._emscripten_bind_b2WheelJointDef_get_localAnchorB_0 =
            function () {
                return b.asm._emscripten_bind_b2WheelJointDef_get_localAnchorB_0.apply(null, arguments)
            },
        En = b._emscripten_bind_b2ContactImpulse_get_count_0 = function () {
            return b.asm._emscripten_bind_b2ContactImpulse_get_count_0.apply(null, arguments)
        },
        Fn = b._emscripten_bind_b2World_GetJointCount_0 = function () {
            return b.asm._emscripten_bind_b2World_GetJointCount_0.apply(null, arguments)
        },
        Gn = b._emscripten_bind_b2WheelJoint_GetMotorSpeed_0 = function () {
            return b.asm._emscripten_bind_b2WheelJoint_GetMotorSpeed_0.apply(null,
                arguments)
        },
        Hn = b._emscripten_bind_b2WheelJointDef_get_dampingRatio_0 = function () {
            return b.asm._emscripten_bind_b2WheelJointDef_get_dampingRatio_0.apply(null, arguments)
        },
        In = b._emscripten_bind_b2RayCastOutput_get_fraction_0 = function () {
            return b.asm._emscripten_bind_b2RayCastOutput_get_fraction_0.apply(null, arguments)
        },
        Jn = b._emscripten_bind_b2AABB___destroy___0 = function () {
            return b.asm._emscripten_bind_b2AABB___destroy___0.apply(null, arguments)
        },
        Kn = b._emscripten_bind_b2GearJoint_SetRatio_1 = function () {
            return b.asm._emscripten_bind_b2GearJoint_SetRatio_1.apply(null,
                arguments)
        },
        Ln = b._emscripten_bind_b2Body_ApplyLinearImpulse_3 = function () {
            return b.asm._emscripten_bind_b2Body_ApplyLinearImpulse_3.apply(null, arguments)
        },
        Mn = b._emscripten_bind_b2Filter___destroy___0 = function () {
            return b.asm._emscripten_bind_b2Filter___destroy___0.apply(null, arguments)
        },
        Nn = b._emscripten_bind_b2RopeJointDef_get_userData_0 = function () {
            return b.asm._emscripten_bind_b2RopeJointDef_get_userData_0.apply(null, arguments)
        };
    b.___cxa_is_pointer_type = function () {
        return b.asm.___cxa_is_pointer_type.apply(null, arguments)
    };
    var On = b._emscripten_bind_b2BodyDef_get_fixedRotation_0 = function () {
        return b.asm._emscripten_bind_b2BodyDef_get_fixedRotation_0.apply(null, arguments)
    },
        Pn = b._emscripten_bind_b2PrismaticJointDef_set_motorSpeed_1 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_set_motorSpeed_1.apply(null, arguments)
        },
        Qn = b._emscripten_bind_b2ChainShape_SetPrevVertex_1 = function () {
            return b.asm._emscripten_bind_b2ChainShape_SetPrevVertex_1.apply(null, arguments)
        },
        Rn = b._emscripten_bind_b2MotorJoint_IsActive_0 = function () {
            return b.asm._emscripten_bind_b2MotorJoint_IsActive_0.apply(null,
                arguments)
        },
        Sn = b._emscripten_bind_b2MouseJoint_GetReactionTorque_1 = function () {
            return b.asm._emscripten_bind_b2MouseJoint_GetReactionTorque_1.apply(null, arguments)
        },
        Tn = b._emscripten_bind_b2DistanceJointDef_set_collideConnected_1 = function () {
            return b.asm._emscripten_bind_b2DistanceJointDef_set_collideConnected_1.apply(null, arguments)
        },
        Un = b._emscripten_bind_b2WheelJoint_GetUserData_0 = function () {
            return b.asm._emscripten_bind_b2WheelJoint_GetUserData_0.apply(null, arguments)
        },
        Vn = b._emscripten_bind_b2Vec3_op_sub_1 =
            function () {
                return b.asm._emscripten_bind_b2Vec3_op_sub_1.apply(null, arguments)
            },
        Wn = b._emscripten_bind_b2WheelJoint_GetNext_0 = function () {
            return b.asm._emscripten_bind_b2WheelJoint_GetNext_0.apply(null, arguments)
        },
        Xn = b._emscripten_bind_b2Shape_GetType_0 = function () {
            return b.asm._emscripten_bind_b2Shape_GetType_0.apply(null, arguments)
        },
        Yn = b._emscripten_bind_b2AABB_IsValid_0 = function () {
            return b.asm._emscripten_bind_b2AABB_IsValid_0.apply(null, arguments)
        },
        Zn = b._emscripten_bind_b2WheelJoint_GetBodyA_0 = function () {
            return b.asm._emscripten_bind_b2WheelJoint_GetBodyA_0.apply(null,
                arguments)
        },
        $n = b._emscripten_enum_b2ShapeType_e_chain = function () {
            return b.asm._emscripten_enum_b2ShapeType_e_chain.apply(null, arguments)
        },
        ao = b._emscripten_bind_b2PulleyJoint_GetLengthA_0 = function () {
            return b.asm._emscripten_bind_b2PulleyJoint_GetLengthA_0.apply(null, arguments)
        },
        bo = b._emscripten_bind_b2DistanceJointDef_get_frequencyHz_0 = function () {
            return b.asm._emscripten_bind_b2DistanceJointDef_get_frequencyHz_0.apply(null, arguments)
        },
        co = b._emscripten_bind_b2RevoluteJoint_SetMotorSpeed_1 = function () {
            return b.asm._emscripten_bind_b2RevoluteJoint_SetMotorSpeed_1.apply(null,
                arguments)
        },
        eo = b._emscripten_bind_b2World___destroy___0 = function () {
            return b.asm._emscripten_bind_b2World___destroy___0.apply(null, arguments)
        },
        fo = b._emscripten_bind_b2ChainShape_set_m_prevVertex_1 = function () {
            return b.asm._emscripten_bind_b2ChainShape_set_m_prevVertex_1.apply(null, arguments)
        },
        go = b._emscripten_bind_b2ChainShape_get_m_hasNextVertex_0 = function () {
            return b.asm._emscripten_bind_b2ChainShape_get_m_hasNextVertex_0.apply(null, arguments)
        },
        ho = b._emscripten_bind_b2ChainShape_SetNextVertex_1 = function () {
            return b.asm._emscripten_bind_b2ChainShape_SetNextVertex_1.apply(null,
                arguments)
        },
        io = b._emscripten_bind_b2Body_SetType_1 = function () {
            return b.asm._emscripten_bind_b2Body_SetType_1.apply(null, arguments)
        },
        jo = b._emscripten_bind_b2Body_GetMass_0 = function () {
            return b.asm._emscripten_bind_b2Body_GetMass_0.apply(null, arguments)
        },
        ko = b._emscripten_bind_b2Rot_b2Rot_0 = function () {
            return b.asm._emscripten_bind_b2Rot_b2Rot_0.apply(null, arguments)
        },
        lo = b._emscripten_bind_b2Rot_b2Rot_1 = function () {
            return b.asm._emscripten_bind_b2Rot_b2Rot_1.apply(null, arguments)
        },
        mo = b._emscripten_enum_b2JointType_e_distanceJoint =
            function () {
                return b.asm._emscripten_enum_b2JointType_e_distanceJoint.apply(null, arguments)
            },
        no = b._emscripten_bind_b2WheelJoint_SetSpringDampingRatio_1 = function () {
            return b.asm._emscripten_bind_b2WheelJoint_SetSpringDampingRatio_1.apply(null, arguments)
        },
        oo = b._emscripten_bind_b2MouseJoint_GetType_0 = function () {
            return b.asm._emscripten_bind_b2MouseJoint_GetType_0.apply(null, arguments)
        },
        po = b._emscripten_bind_b2MouseJoint_GetTarget_0 = function () {
            return b.asm._emscripten_bind_b2MouseJoint_GetTarget_0.apply(null,
                arguments)
        },
        qo = b._emscripten_bind_JSQueryCallback___destroy___0 = function () {
            return b.asm._emscripten_bind_JSQueryCallback___destroy___0.apply(null, arguments)
        },
        ro = b._emscripten_bind_b2Fixture_Refilter_0 = function () {
            return b.asm._emscripten_bind_b2Fixture_Refilter_0.apply(null, arguments)
        },
        so = b._emscripten_bind_b2RevoluteJointDef_set_lowerAngle_1 = function () {
            return b.asm._emscripten_bind_b2RevoluteJointDef_set_lowerAngle_1.apply(null, arguments)
        },
        to = b._emscripten_bind_b2JointEdge___destroy___0 = function () {
            return b.asm._emscripten_bind_b2JointEdge___destroy___0.apply(null,
                arguments)
        },
        uo = b._emscripten_bind_b2PulleyJoint_GetRatio_0 = function () {
            return b.asm._emscripten_bind_b2PulleyJoint_GetRatio_0.apply(null, arguments)
        },
        vo = b._emscripten_bind_JSContactListener_BeginContact_1 = function () {
            return b.asm._emscripten_bind_JSContactListener_BeginContact_1.apply(null, arguments)
        },
        wo = b._emscripten_bind_b2MotorJointDef_set_linearOffset_1 = function () {
            return b.asm._emscripten_bind_b2MotorJointDef_set_linearOffset_1.apply(null, arguments)
        },
        xo = b._emscripten_enum_b2JointType_e_motorJoint =
            function () {
                return b.asm._emscripten_enum_b2JointType_e_motorJoint.apply(null, arguments)
            },
        yo = b._emscripten_bind_b2EdgeShape_get_m_vertex2_0 = function () {
            return b.asm._emscripten_bind_b2EdgeShape_get_m_vertex2_0.apply(null, arguments)
        },
        zo = b._emscripten_bind_b2JointEdge_get_next_0 = function () {
            return b.asm._emscripten_bind_b2JointEdge_get_next_0.apply(null, arguments)
        },
        Ao = b._emscripten_bind_b2RayCastInput_set_maxFraction_1 = function () {
            return b.asm._emscripten_bind_b2RayCastInput_set_maxFraction_1.apply(null,
                arguments)
        },
        Bo = b._emscripten_bind_b2MouseJoint_GetBodyA_0 = function () {
            return b.asm._emscripten_bind_b2MouseJoint_GetBodyA_0.apply(null, arguments)
        },
        Co = b._emscripten_bind_b2BodyDef_get_awake_0 = function () {
            return b.asm._emscripten_bind_b2BodyDef_get_awake_0.apply(null, arguments)
        },
        Do = b._emscripten_bind_b2AABB_b2AABB_0 = function () {
            return b.asm._emscripten_bind_b2AABB_b2AABB_0.apply(null, arguments)
        },
        Eo = b._emscripten_bind_b2Fixture_SetFriction_1 = function () {
            return b.asm._emscripten_bind_b2Fixture_SetFriction_1.apply(null,
                arguments)
        },
        Fo = b._emscripten_enum_b2DrawFlag_e_centerOfMassBit = function () {
            return b.asm._emscripten_enum_b2DrawFlag_e_centerOfMassBit.apply(null, arguments)
        },
        Go = b._emscripten_bind_b2World_CreateBody_1 = function () {
            return b.asm._emscripten_bind_b2World_CreateBody_1.apply(null, arguments)
        },
        Ho = b._emscripten_bind_b2RopeJointDef_set_userData_1 = function () {
            return b.asm._emscripten_bind_b2RopeJointDef_set_userData_1.apply(null, arguments)
        },
        Io = b._emscripten_bind_b2WeldJoint_GetNext_0 = function () {
            return b.asm._emscripten_bind_b2WeldJoint_GetNext_0.apply(null,
                arguments)
        },
        Jo = b._emscripten_bind_b2WeldJoint_GetType_0 = function () {
            return b.asm._emscripten_bind_b2WeldJoint_GetType_0.apply(null, arguments)
        },
        Ko = b._emscripten_enum_b2ContactFeatureType_e_vertex = function () {
            return b.asm._emscripten_enum_b2ContactFeatureType_e_vertex.apply(null, arguments)
        },
        Lo = b._emscripten_bind_b2Rot___destroy___0 = function () {
            return b.asm._emscripten_bind_b2Rot___destroy___0.apply(null, arguments)
        },
        Mo = b._emscripten_bind_b2Filter_get_maskBits_0 = function () {
            return b.asm._emscripten_bind_b2Filter_get_maskBits_0.apply(null,
                arguments)
        },
        No = b._emscripten_bind_b2Mat22_get_ex_0 = function () {
            return b.asm._emscripten_bind_b2Mat22_get_ex_0.apply(null, arguments)
        },
        Oo = b._emscripten_bind_b2Body_GetFixtureList_0 = function () {
            return b.asm._emscripten_bind_b2Body_GetFixtureList_0.apply(null, arguments)
        },
        Po = b._emscripten_bind_b2PulleyJoint___destroy___0 = function () {
            return b.asm._emscripten_bind_b2PulleyJoint___destroy___0.apply(null, arguments)
        },
        Qo = b._emscripten_bind_b2MouseJointDef_set_dampingRatio_1 = function () {
            return b.asm._emscripten_bind_b2MouseJointDef_set_dampingRatio_1.apply(null,
                arguments)
        },
        Ro = b._emscripten_bind_JSRayCastCallback___destroy___0 = function () {
            return b.asm._emscripten_bind_JSRayCastCallback___destroy___0.apply(null, arguments)
        },
        So = b._emscripten_bind_b2ContactListener___destroy___0 = function () {
            return b.asm._emscripten_bind_b2ContactListener___destroy___0.apply(null, arguments)
        },
        To = b._emscripten_bind_b2PrismaticJointDef_set_localAnchorB_1 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_set_localAnchorB_1.apply(null, arguments)
        };
    b.establishStackSpace = function () {
        return b.asm.establishStackSpace.apply(null, arguments)
    };
    var Uo = b._emscripten_bind_b2FrictionJoint___destroy___0 = function () {
        return b.asm._emscripten_bind_b2FrictionJoint___destroy___0.apply(null, arguments)
    },
        Vo = b._emscripten_bind_b2WeldJoint_Dump_0 = function () {
            return b.asm._emscripten_bind_b2WeldJoint_Dump_0.apply(null, arguments)
        },
        Wo = b._emscripten_bind_b2MotorJoint_SetMaxForce_1 = function () {
            return b.asm._emscripten_bind_b2MotorJoint_SetMaxForce_1.apply(null, arguments)
        },
        Xo = b._emscripten_bind_b2MouseJoint_GetFrequency_0 = function () {
            return b.asm._emscripten_bind_b2MouseJoint_GetFrequency_0.apply(null,
                arguments)
        },
        Yo = b._emscripten_bind_b2FrictionJoint_GetLocalAnchorA_0 = function () {
            return b.asm._emscripten_bind_b2FrictionJoint_GetLocalAnchorA_0.apply(null, arguments)
        },
        Zo = b._emscripten_bind_b2RevoluteJointDef_set_collideConnected_1 = function () {
            return b.asm._emscripten_bind_b2RevoluteJointDef_set_collideConnected_1.apply(null, arguments)
        },
        $o = b._emscripten_bind_b2GearJointDef_set_collideConnected_1 = function () {
            return b.asm._emscripten_bind_b2GearJointDef_set_collideConnected_1.apply(null, arguments)
        },
        ap =
            b._emscripten_bind_b2Vec2_IsValid_0 = function () {
                return b.asm._emscripten_bind_b2Vec2_IsValid_0.apply(null, arguments)
            },
        bp = b._emscripten_bind_b2PrismaticJointDef_set_bodyA_1 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_set_bodyA_1.apply(null, arguments)
        },
        cp = b._emscripten_bind_b2World_GetWarmStarting_0 = function () {
            return b.asm._emscripten_bind_b2World_GetWarmStarting_0.apply(null, arguments)
        },
        dp = b._emscripten_bind_b2RevoluteJointDef_set_enableLimit_1 = function () {
            return b.asm._emscripten_bind_b2RevoluteJointDef_set_enableLimit_1.apply(null,
                arguments)
        },
        ep = b._emscripten_bind_b2WeldJointDef___destroy___0 = function () {
            return b.asm._emscripten_bind_b2WeldJointDef___destroy___0.apply(null, arguments)
        },
        fp = b._emscripten_bind_b2Mat22_Solve_1 = function () {
            return b.asm._emscripten_bind_b2Mat22_Solve_1.apply(null, arguments)
        },
        gp = b._emscripten_bind_b2Color_get_g_0 = function () {
            return b.asm._emscripten_bind_b2Color_get_g_0.apply(null, arguments)
        },
        hp = b._emscripten_bind_VoidPtr___destroy___0 = function () {
            return b.asm._emscripten_bind_VoidPtr___destroy___0.apply(null,
                arguments)
        },
        ip = b._emscripten_bind_b2RopeJoint_GetNext_0 = function () {
            return b.asm._emscripten_bind_b2RopeJoint_GetNext_0.apply(null, arguments)
        },
        jp = b._emscripten_bind_b2EdgeShape_get_m_type_0 = function () {
            return b.asm._emscripten_bind_b2EdgeShape_get_m_type_0.apply(null, arguments)
        },
        kp = b._emscripten_bind_b2PolygonShape_GetChildCount_0 = function () {
            return b.asm._emscripten_bind_b2PolygonShape_GetChildCount_0.apply(null, arguments)
        },
        lp = b._emscripten_bind_b2GearJointDef_get_ratio_0 = function () {
            return b.asm._emscripten_bind_b2GearJointDef_get_ratio_0.apply(null,
                arguments)
        },
        mp = b._emscripten_bind_b2Mat33_Solve33_1 = function () {
            return b.asm._emscripten_bind_b2Mat33_Solve33_1.apply(null, arguments)
        },
        np = b._emscripten_bind_b2WeldJointDef_set_userData_1 = function () {
            return b.asm._emscripten_bind_b2WeldJointDef_set_userData_1.apply(null, arguments)
        },
        op = b._emscripten_bind_b2PrismaticJoint_GetLocalAnchorB_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint_GetLocalAnchorB_0.apply(null, arguments)
        },
        pp = b._emscripten_bind_b2RevoluteJointDef___destroy___0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJointDef___destroy___0.apply(null,
                arguments)
        },
        qp = b._emscripten_bind_b2MotorJointDef_get_correctionFactor_0 = function () {
            return b.asm._emscripten_bind_b2MotorJointDef_get_correctionFactor_0.apply(null, arguments)
        },
        rp = b._emscripten_bind_b2ContactFeature_get_typeB_0 = function () {
            return b.asm._emscripten_bind_b2ContactFeature_get_typeB_0.apply(null, arguments)
        },
        sp = b._emscripten_bind_b2ContactID_get_key_0 = function () {
            return b.asm._emscripten_bind_b2ContactID_get_key_0.apply(null, arguments)
        },
        tp = b._emscripten_bind_b2MotorJoint_GetReactionForce_1 =
            function () {
                return b.asm._emscripten_bind_b2MotorJoint_GetReactionForce_1.apply(null, arguments)
            },
        up = b._emscripten_bind_b2Rot_GetAngle_0 = function () {
            return b.asm._emscripten_bind_b2Rot_GetAngle_0.apply(null, arguments)
        },
        vp = b._emscripten_bind_b2World_SetAllowSleeping_1 = function () {
            return b.asm._emscripten_bind_b2World_SetAllowSleeping_1.apply(null, arguments)
        },
        wp = b._emscripten_bind_b2RopeJoint_GetType_0 = function () {
            return b.asm._emscripten_bind_b2RopeJoint_GetType_0.apply(null, arguments)
        },
        xp = b._emscripten_bind_b2MotorJoint_SetAngularOffset_1 =
            function () {
                return b.asm._emscripten_bind_b2MotorJoint_SetAngularOffset_1.apply(null, arguments)
            },
        yp = b._emscripten_bind_b2MotorJoint_GetLinearOffset_0 = function () {
            return b.asm._emscripten_bind_b2MotorJoint_GetLinearOffset_0.apply(null, arguments)
        },
        zp = b._emscripten_bind_b2FrictionJoint_GetCollideConnected_0 = function () {
            return b.asm._emscripten_bind_b2FrictionJoint_GetCollideConnected_0.apply(null, arguments)
        },
        Ap = b._emscripten_bind_b2WheelJointDef_set_motorSpeed_1 = function () {
            return b.asm._emscripten_bind_b2WheelJointDef_set_motorSpeed_1.apply(null,
                arguments)
        },
        Bp = b._emscripten_bind_b2MotorJoint_GetAnchorA_0 = function () {
            return b.asm._emscripten_bind_b2MotorJoint_GetAnchorA_0.apply(null, arguments)
        },
        Cp = b._emscripten_bind_b2Fixture_GetDensity_0 = function () {
            return b.asm._emscripten_bind_b2Fixture_GetDensity_0.apply(null, arguments)
        },
        Dp = b._emscripten_bind_b2MouseJointDef_get_type_0 = function () {
            return b.asm._emscripten_bind_b2MouseJointDef_get_type_0.apply(null, arguments)
        },
        Ep = b._emscripten_bind_b2Vec2_Set_2 = function () {
            return b.asm._emscripten_bind_b2Vec2_Set_2.apply(null,
                arguments)
        },
        Fp = b._emscripten_bind_b2WeldJointDef_get_type_0 = function () {
            return b.asm._emscripten_bind_b2WeldJointDef_get_type_0.apply(null, arguments)
        },
        Gp = b._emscripten_bind_b2MouseJointDef_b2MouseJointDef_0 = function () {
            return b.asm._emscripten_bind_b2MouseJointDef_b2MouseJointDef_0.apply(null, arguments)
        },
        Hp = b._emscripten_bind_b2Rot_get_s_0 = function () {
            return b.asm._emscripten_bind_b2Rot_get_s_0.apply(null, arguments)
        },
        Ip = b._emscripten_bind_b2FrictionJoint_SetMaxTorque_1 = function () {
            return b.asm._emscripten_bind_b2FrictionJoint_SetMaxTorque_1.apply(null,
                arguments)
        },
        Jp = b._emscripten_bind_b2MouseJointDef_get_frequencyHz_0 = function () {
            return b.asm._emscripten_bind_b2MouseJointDef_get_frequencyHz_0.apply(null, arguments)
        },
        Kp = b._emscripten_bind_b2FrictionJoint_SetUserData_1 = function () {
            return b.asm._emscripten_bind_b2FrictionJoint_SetUserData_1.apply(null, arguments)
        },
        Lp = b._emscripten_bind_b2RayCastInput_get_p1_0 = function () {
            return b.asm._emscripten_bind_b2RayCastInput_get_p1_0.apply(null, arguments)
        },
        Mp = b._emscripten_bind_b2DistanceJointDef_get_collideConnected_0 =
            function () {
                return b.asm._emscripten_bind_b2DistanceJointDef_get_collideConnected_0.apply(null, arguments)
            },
        Np = b._emscripten_bind_b2RevoluteJointDef_set_referenceAngle_1 = function () {
            return b.asm._emscripten_bind_b2RevoluteJointDef_set_referenceAngle_1.apply(null, arguments)
        },
        Op = b._emscripten_bind_b2ContactFeature___destroy___0 = function () {
            return b.asm._emscripten_bind_b2ContactFeature___destroy___0.apply(null, arguments)
        },
        Pp = b._emscripten_bind_b2Color___destroy___0 = function () {
            return b.asm._emscripten_bind_b2Color___destroy___0.apply(null,
                arguments)
        },
        Qp = b._emscripten_bind_b2DistanceJointDef_set_bodyB_1 = function () {
            return b.asm._emscripten_bind_b2DistanceJointDef_set_bodyB_1.apply(null, arguments)
        },
        Rp = b._emscripten_bind_b2ChainShape_get_m_hasPrevVertex_0 = function () {
            return b.asm._emscripten_bind_b2ChainShape_get_m_hasPrevVertex_0.apply(null, arguments)
        },
        Sp = b._emscripten_bind_b2PulleyJointDef_b2PulleyJointDef_0 = function () {
            return b.asm._emscripten_bind_b2PulleyJointDef_b2PulleyJointDef_0.apply(null, arguments)
        },
        Tp = b._emscripten_bind_b2RevoluteJoint_GetType_0 =
            function () {
                return b.asm._emscripten_bind_b2RevoluteJoint_GetType_0.apply(null, arguments)
            },
        Up = b._emscripten_bind_b2MassData_b2MassData_0 = function () {
            return b.asm._emscripten_bind_b2MassData_b2MassData_0.apply(null, arguments)
        },
        Vp = b._emscripten_bind_b2Vec3_set_y_1 = function () {
            return b.asm._emscripten_bind_b2Vec3_set_y_1.apply(null, arguments)
        },
        Wp = b._emscripten_bind_b2BodyDef_set_angularDamping_1 = function () {
            return b.asm._emscripten_bind_b2BodyDef_set_angularDamping_1.apply(null, arguments)
        },
        Xp = b._emscripten_bind_b2AABB_Combine_1 =
            function () {
                return b.asm._emscripten_bind_b2AABB_Combine_1.apply(null, arguments)
            },
        Yp = b._emscripten_bind_b2WheelJointDef_set_bodyB_1 = function () {
            return b.asm._emscripten_bind_b2WheelJointDef_set_bodyB_1.apply(null, arguments)
        },
        Zp = b._emscripten_bind_b2PrismaticJoint_GetBodyA_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint_GetBodyA_0.apply(null, arguments)
        },
        $p = b._emscripten_bind_b2PrismaticJoint_GetMaxMotorForce_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint_GetMaxMotorForce_0.apply(null,
                arguments)
        },
        aq = b._emscripten_bind_b2RevoluteJointDef_get_upperAngle_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJointDef_get_upperAngle_0.apply(null, arguments)
        },
        bq = b._emscripten_bind_b2Body_IsSleepingAllowed_0 = function () {
            return b.asm._emscripten_bind_b2Body_IsSleepingAllowed_0.apply(null, arguments)
        },
        cq = b._emscripten_bind_b2MotorJoint_GetCorrectionFactor_0 = function () {
            return b.asm._emscripten_bind_b2MotorJoint_GetCorrectionFactor_0.apply(null, arguments)
        },
        dq = b._emscripten_bind_b2Profile_get_solve_0 =
            function () {
                return b.asm._emscripten_bind_b2Profile_get_solve_0.apply(null, arguments)
            },
        eq = b._emscripten_bind_JSDestructionListener_SayGoodbyeFixture_1 = function () {
            return b.asm._emscripten_bind_JSDestructionListener_SayGoodbyeFixture_1.apply(null, arguments)
        },
        fq = b._emscripten_bind_b2PolygonShape_GetVertexCount_0 = function () {
            return b.asm._emscripten_bind_b2PolygonShape_GetVertexCount_0.apply(null, arguments)
        },
        gq = b._emscripten_bind_b2Rot_get_c_0 = function () {
            return b.asm._emscripten_bind_b2Rot_get_c_0.apply(null,
                arguments)
        },
        hq = b._emscripten_bind_b2AABB_set_lowerBound_1 = function () {
            return b.asm._emscripten_bind_b2AABB_set_lowerBound_1.apply(null, arguments)
        },
        iq = b._emscripten_bind_b2Fixture_SetFilterData_1 = function () {
            return b.asm._emscripten_bind_b2Fixture_SetFilterData_1.apply(null, arguments)
        },
        jq = b._emscripten_bind_b2MouseJoint_SetMaxForce_1 = function () {
            return b.asm._emscripten_bind_b2MouseJoint_SetMaxForce_1.apply(null, arguments)
        },
        kq = b._emscripten_bind_b2WheelJoint_IsMotorEnabled_0 = function () {
            return b.asm._emscripten_bind_b2WheelJoint_IsMotorEnabled_0.apply(null,
                arguments)
        },
        lq = b._emscripten_bind_b2JointDef_set_userData_1 = function () {
            return b.asm._emscripten_bind_b2JointDef_set_userData_1.apply(null, arguments)
        },
        mq = b._emscripten_bind_b2ManifoldPoint_get_tangentImpulse_0 = function () {
            return b.asm._emscripten_bind_b2ManifoldPoint_get_tangentImpulse_0.apply(null, arguments)
        },
        nq = b._emscripten_bind_b2RevoluteJointDef_get_maxMotorTorque_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJointDef_get_maxMotorTorque_0.apply(null, arguments)
        },
        oq = b._emscripten_bind_b2WeldJointDef_get_dampingRatio_0 =
            function () {
                return b.asm._emscripten_bind_b2WeldJointDef_get_dampingRatio_0.apply(null, arguments)
            },
        pq = b._emscripten_bind_b2Rot_SetIdentity_0 = function () {
            return b.asm._emscripten_bind_b2Rot_SetIdentity_0.apply(null, arguments)
        },
        qq = b._emscripten_bind_b2EdgeShape_b2EdgeShape_0 = function () {
            return b.asm._emscripten_bind_b2EdgeShape_b2EdgeShape_0.apply(null, arguments)
        },
        rq = b._emscripten_bind_b2FrictionJoint_GetReactionForce_1 = function () {
            return b.asm._emscripten_bind_b2FrictionJoint_GetReactionForce_1.apply(null,
                arguments)
        },
        sq = b._emscripten_bind_b2MouseJoint_GetUserData_0 = function () {
            return b.asm._emscripten_bind_b2MouseJoint_GetUserData_0.apply(null, arguments)
        },
        tq = b._emscripten_bind_b2DistanceJointDef_set_type_1 = function () {
            return b.asm._emscripten_bind_b2DistanceJointDef_set_type_1.apply(null, arguments)
        },
        uq = b._emscripten_bind_b2WeldJoint_GetAnchorA_0 = function () {
            return b.asm._emscripten_bind_b2WeldJoint_GetAnchorA_0.apply(null, arguments)
        },
        vq = b._emscripten_bind_b2WeldJoint___destroy___0 = function () {
            return b.asm._emscripten_bind_b2WeldJoint___destroy___0.apply(null,
                arguments)
        },
        wq = b._emscripten_bind_b2Manifold_b2Manifold_0 = function () {
            return b.asm._emscripten_bind_b2Manifold_b2Manifold_0.apply(null, arguments)
        },
        xq = b._emscripten_bind_JSContactListener_PostSolve_2 = function () {
            return b.asm._emscripten_bind_JSContactListener_PostSolve_2.apply(null, arguments)
        },
        yq = b._emscripten_bind_b2PulleyJoint_GetBodyA_0 = function () {
            return b.asm._emscripten_bind_b2PulleyJoint_GetBodyA_0.apply(null, arguments)
        },
        zq = b._emscripten_bind_b2RopeJointDef_get_type_0 = function () {
            return b.asm._emscripten_bind_b2RopeJointDef_get_type_0.apply(null,
                arguments)
        },
        Aq = b._emscripten_bind_b2CircleShape_ComputeMass_2 = function () {
            return b.asm._emscripten_bind_b2CircleShape_ComputeMass_2.apply(null, arguments)
        },
        Bq = b._emscripten_bind_b2DistanceJointDef_get_localAnchorB_0 = function () {
            return b.asm._emscripten_bind_b2DistanceJointDef_get_localAnchorB_0.apply(null, arguments)
        },
        Cq = b._emscripten_bind_b2GearJointDef___destroy___0 = function () {
            return b.asm._emscripten_bind_b2GearJointDef___destroy___0.apply(null, arguments)
        },
        Dq = b._emscripten_bind_b2PulleyJointDef_set_localAnchorA_1 =
            function () {
                return b.asm._emscripten_bind_b2PulleyJointDef_set_localAnchorA_1.apply(null, arguments)
            },
        Eq = b._emscripten_enum_b2BodyType_b2_dynamicBody = function () {
            return b.asm._emscripten_enum_b2BodyType_b2_dynamicBody.apply(null, arguments)
        },
        Fq = b._emscripten_bind_b2CircleShape_TestPoint_2 = function () {
            return b.asm._emscripten_bind_b2CircleShape_TestPoint_2.apply(null, arguments)
        },
        Gq = b._emscripten_bind_b2MotorJointDef_get_maxTorque_0 = function () {
            return b.asm._emscripten_bind_b2MotorJointDef_get_maxTorque_0.apply(null,
                arguments)
        },
        Hq = b._emscripten_bind_b2Body_GetLinearVelocityFromLocalPoint_1 = function () {
            return b.asm._emscripten_bind_b2Body_GetLinearVelocityFromLocalPoint_1.apply(null, arguments)
        },
        Iq = b._emscripten_bind_b2FrictionJointDef_set_bodyB_1 = function () {
            return b.asm._emscripten_bind_b2FrictionJointDef_set_bodyB_1.apply(null, arguments)
        },
        Jq = b._emscripten_bind_b2MouseJoint_GetAnchorB_0 = function () {
            return b.asm._emscripten_bind_b2MouseJoint_GetAnchorB_0.apply(null, arguments)
        },
        Kq = b._emscripten_bind_b2RopeJointDef_get_localAnchorB_0 =
            function () {
                return b.asm._emscripten_bind_b2RopeJointDef_get_localAnchorB_0.apply(null, arguments)
            },
        Lq = b._emscripten_bind_b2GearJoint_GetBodyB_0 = function () {
            return b.asm._emscripten_bind_b2GearJoint_GetBodyB_0.apply(null, arguments)
        },
        Mq = b._emscripten_bind_b2ChainShape_Clear_0 = function () {
            return b.asm._emscripten_bind_b2ChainShape_Clear_0.apply(null, arguments)
        },
        Nq = b._emscripten_bind_b2CircleShape___destroy___0 = function () {
            return b.asm._emscripten_bind_b2CircleShape___destroy___0.apply(null, arguments)
        },
        Oq =
            b._emscripten_bind_b2MotorJoint_GetType_0 = function () {
                return b.asm._emscripten_bind_b2MotorJoint_GetType_0.apply(null, arguments)
            },
        Pq = b._emscripten_bind_b2World_GetContactCount_0 = function () {
            return b.asm._emscripten_bind_b2World_GetContactCount_0.apply(null, arguments)
        },
        Qq = b._emscripten_bind_b2Contact_SetRestitution_1 = function () {
            return b.asm._emscripten_bind_b2Contact_SetRestitution_1.apply(null, arguments)
        },
        Rq = b._emscripten_bind_b2BodyDef_get_angularDamping_0 = function () {
            return b.asm._emscripten_bind_b2BodyDef_get_angularDamping_0.apply(null,
                arguments)
        },
        Sq = b._emscripten_bind_b2EdgeShape_get_m_vertex3_0 = function () {
            return b.asm._emscripten_bind_b2EdgeShape_get_m_vertex3_0.apply(null, arguments)
        },
        Tq = b._emscripten_bind_b2MassData_set_center_1 = function () {
            return b.asm._emscripten_bind_b2MassData_set_center_1.apply(null, arguments)
        },
        Uq = b._emscripten_bind_b2Transform_SetIdentity_0 = function () {
            return b.asm._emscripten_bind_b2Transform_SetIdentity_0.apply(null, arguments)
        },
        Vq = b._emscripten_bind_b2GearJointDef_set_joint1_1 = function () {
            return b.asm._emscripten_bind_b2GearJointDef_set_joint1_1.apply(null,
                arguments)
        },
        Wq = b._emscripten_bind_b2EdgeShape_set_m_vertex2_1 = function () {
            return b.asm._emscripten_bind_b2EdgeShape_set_m_vertex2_1.apply(null, arguments)
        },
        Xq = b._emscripten_bind_b2Contact_SetFriction_1 = function () {
            return b.asm._emscripten_bind_b2Contact_SetFriction_1.apply(null, arguments)
        },
        Yq = b._emscripten_bind_b2MouseJointDef_set_collideConnected_1 = function () {
            return b.asm._emscripten_bind_b2MouseJointDef_set_collideConnected_1.apply(null, arguments)
        },
        Zq = b._emscripten_bind_b2ContactFeature_set_indexB_1 =
            function () {
                return b.asm._emscripten_bind_b2ContactFeature_set_indexB_1.apply(null, arguments)
            },
        $q = b._emscripten_bind_b2Body_GetLinearVelocityFromWorldPoint_1 = function () {
            return b.asm._emscripten_bind_b2Body_GetLinearVelocityFromWorldPoint_1.apply(null, arguments)
        },
        ar = b._emscripten_bind_b2WeldJoint_GetCollideConnected_0 = function () {
            return b.asm._emscripten_bind_b2WeldJoint_GetCollideConnected_0.apply(null, arguments)
        },
        br = b._emscripten_bind_b2Mat22_GetInverse_0 = function () {
            return b.asm._emscripten_bind_b2Mat22_GetInverse_0.apply(null,
                arguments)
        },
        cr = b._emscripten_bind_b2WheelJointDef_set_frequencyHz_1 = function () {
            return b.asm._emscripten_bind_b2WheelJointDef_set_frequencyHz_1.apply(null, arguments)
        },
        dr = b._emscripten_bind_b2World_GetSubStepping_0 = function () {
            return b.asm._emscripten_bind_b2World_GetSubStepping_0.apply(null, arguments)
        },
        er = b._emscripten_bind_b2Rot_GetYAxis_0 = function () {
            return b.asm._emscripten_bind_b2Rot_GetYAxis_0.apply(null, arguments)
        };
    b._emscripten_get_global_libc = function () {
        return b.asm._emscripten_get_global_libc.apply(null, arguments)
    };
    var fr = b._emscripten_bind_b2WheelJointDef_get_localAxisA_0 = function () {
        return b.asm._emscripten_bind_b2WheelJointDef_get_localAxisA_0.apply(null, arguments)
    },
        gr = b._emscripten_bind_b2RopeJoint_GetBodyB_0 = function () {
            return b.asm._emscripten_bind_b2RopeJoint_GetBodyB_0.apply(null, arguments)
        },
        hr = b._emscripten_bind_b2EdgeShape_GetType_0 = function () {
            return b.asm._emscripten_bind_b2EdgeShape_GetType_0.apply(null, arguments)
        },
        ir = b._emscripten_bind_b2Mat22_set_ex_1 = function () {
            return b.asm._emscripten_bind_b2Mat22_set_ex_1.apply(null,
                arguments)
        },
        jr = b._emscripten_bind_b2ManifoldPoint___destroy___0 = function () {
            return b.asm._emscripten_bind_b2ManifoldPoint___destroy___0.apply(null, arguments)
        },
        kr = b._emscripten_enum_b2JointType_e_prismaticJoint = function () {
            return b.asm._emscripten_enum_b2JointType_e_prismaticJoint.apply(null, arguments)
        },
        lr = b._emscripten_bind_b2WeldJointDef_get_referenceAngle_0 = function () {
            return b.asm._emscripten_bind_b2WeldJointDef_get_referenceAngle_0.apply(null, arguments)
        },
        mr = b._emscripten_bind_b2Vec2_Length_0 = function () {
            return b.asm._emscripten_bind_b2Vec2_Length_0.apply(null,
                arguments)
        },
        nr = b._emscripten_bind_b2Vec2_SetZero_0 = function () {
            return b.asm._emscripten_bind_b2Vec2_SetZero_0.apply(null, arguments)
        },
        or = b._emscripten_bind_b2RopeJoint___destroy___0 = function () {
            return b.asm._emscripten_bind_b2RopeJoint___destroy___0.apply(null, arguments)
        },
        pr = b._emscripten_bind_b2World_DestroyJoint_1 = function () {
            return b.asm._emscripten_bind_b2World_DestroyJoint_1.apply(null, arguments)
        },
        qr = b._emscripten_bind_b2JointDef_set_bodyB_1 = function () {
            return b.asm._emscripten_bind_b2JointDef_set_bodyB_1.apply(null,
                arguments)
        },
        rr = b._emscripten_bind_b2Mat22_Set_2 = function () {
            return b.asm._emscripten_bind_b2Mat22_Set_2.apply(null, arguments)
        },
        sr = b._emscripten_bind_b2JointEdge_set_next_1 = function () {
            return b.asm._emscripten_bind_b2JointEdge_set_next_1.apply(null, arguments)
        },
        tr = b._emscripten_bind_b2WeldJoint_GetAnchorB_0 = function () {
            return b.asm._emscripten_bind_b2WeldJoint_GetAnchorB_0.apply(null, arguments)
        },
        ur = b._emscripten_enum_b2DrawFlag_e_aabbBit = function () {
            return b.asm._emscripten_enum_b2DrawFlag_e_aabbBit.apply(null,
                arguments)
        },
        vr = b._emscripten_bind_b2EdgeShape_ComputeAABB_3 = function () {
            return b.asm._emscripten_bind_b2EdgeShape_ComputeAABB_3.apply(null, arguments)
        },
        wr = b._emscripten_bind_b2PolygonShape_set_m_centroid_1 = function () {
            return b.asm._emscripten_bind_b2PolygonShape_set_m_centroid_1.apply(null, arguments)
        },
        xr = b._emscripten_bind_b2WheelJointDef_set_collideConnected_1 = function () {
            return b.asm._emscripten_bind_b2WheelJointDef_set_collideConnected_1.apply(null, arguments)
        },
        yr = b._emscripten_bind_b2World_GetJointList_0 =
            function () {
                return b.asm._emscripten_bind_b2World_GetJointList_0.apply(null, arguments)
            },
        zr = b._emscripten_bind_b2MotorJointDef_get_type_0 = function () {
            return b.asm._emscripten_bind_b2MotorJointDef_get_type_0.apply(null, arguments)
        },
        Ar = b._emscripten_bind_b2RopeJoint_GetLocalAnchorA_0 = function () {
            return b.asm._emscripten_bind_b2RopeJoint_GetLocalAnchorA_0.apply(null, arguments)
        },
        Br = b._emscripten_bind_b2BodyDef_set_linearDamping_1 = function () {
            return b.asm._emscripten_bind_b2BodyDef_set_linearDamping_1.apply(null,
                arguments)
        },
        Cr = b._emscripten_bind_b2FrictionJoint_GetUserData_0 = function () {
            return b.asm._emscripten_bind_b2FrictionJoint_GetUserData_0.apply(null, arguments)
        },
        Dr = b._emscripten_bind_b2Shape_TestPoint_2 = function () {
            return b.asm._emscripten_bind_b2Shape_TestPoint_2.apply(null, arguments)
        },
        Er = b._emscripten_bind_b2Manifold_set_localNormal_1 = function () {
            return b.asm._emscripten_bind_b2Manifold_set_localNormal_1.apply(null, arguments)
        },
        Fr = b._emscripten_bind_b2JointDef_get_bodyA_0 = function () {
            return b.asm._emscripten_bind_b2JointDef_get_bodyA_0.apply(null,
                arguments)
        },
        Gr = b._emscripten_bind_b2Body_GetLinearDamping_0 = function () {
            return b.asm._emscripten_bind_b2Body_GetLinearDamping_0.apply(null, arguments)
        },
        Hr = b._emscripten_bind_b2WeldJointDef_set_frequencyHz_1 = function () {
            return b.asm._emscripten_bind_b2WeldJointDef_set_frequencyHz_1.apply(null, arguments)
        },
        Ir = b._emscripten_bind_b2BodyDef_set_userData_1 = function () {
            return b.asm._emscripten_bind_b2BodyDef_set_userData_1.apply(null, arguments)
        },
        Jr = b._emscripten_bind_b2PrismaticJointDef_set_enableMotor_1 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_set_enableMotor_1.apply(null,
                arguments)
        },
        Kr = b._emscripten_bind_b2Vec2_Skew_0 = function () {
            return b.asm._emscripten_bind_b2Vec2_Skew_0.apply(null, arguments)
        },
        Lr = b._emscripten_bind_b2MouseJoint_GetDampingRatio_0 = function () {
            return b.asm._emscripten_bind_b2MouseJoint_GetDampingRatio_0.apply(null, arguments)
        },
        Mr = b._emscripten_bind_b2RevoluteJoint_GetAnchorA_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJoint_GetAnchorA_0.apply(null, arguments)
        },
        Nr = b._emscripten_bind_b2ContactFeature_set_typeB_1 = function () {
            return b.asm._emscripten_bind_b2ContactFeature_set_typeB_1.apply(null,
                arguments)
        },
        Or = b._emscripten_bind_b2WheelJoint_GetAnchorA_0 = function () {
            return b.asm._emscripten_bind_b2WheelJoint_GetAnchorA_0.apply(null, arguments)
        },
        Pr = b._emscripten_bind_b2MotorJoint_GetMaxTorque_0 = function () {
            return b.asm._emscripten_bind_b2MotorJoint_GetMaxTorque_0.apply(null, arguments)
        };
    b.setThrew = function () {
        return b.asm.setThrew.apply(null, arguments)
    };
    var Qr = b._emscripten_bind_b2PrismaticJointDef_set_userData_1 = function () {
        return b.asm._emscripten_bind_b2PrismaticJointDef_set_userData_1.apply(null, arguments)
    },
        Rr = b._emscripten_bind_b2FrictionJointDef_set_type_1 = function () {
            return b.asm._emscripten_bind_b2FrictionJointDef_set_type_1.apply(null, arguments)
        },
        Sr = b._emscripten_bind_b2FrictionJointDef_Initialize_3 = function () {
            return b.asm._emscripten_bind_b2FrictionJointDef_Initialize_3.apply(null, arguments)
        },
        Nb = b._sbrk = function () {
            return b.asm._sbrk.apply(null,
                arguments)
        },
        Tr = b._emscripten_bind_b2FrictionJointDef_get_collideConnected_0 = function () {
            return b.asm._emscripten_bind_b2FrictionJointDef_get_collideConnected_0.apply(null, arguments)
        },
        Ib = b._memcpy = function () {
            return b.asm._memcpy.apply(null, arguments)
        },
        Ur = b._emscripten_bind_b2FrictionJoint_GetAnchorA_0 = function () {
            return b.asm._emscripten_bind_b2FrictionJoint_GetAnchorA_0.apply(null, arguments)
        },
        Vr = b._emscripten_enum_b2DrawFlag_e_pairBit = function () {
            return b.asm._emscripten_enum_b2DrawFlag_e_pairBit.apply(null,
                arguments)
        },
        Wr = b._emscripten_bind_b2MassData_get_I_0 = function () {
            return b.asm._emscripten_bind_b2MassData_get_I_0.apply(null, arguments)
        },
        Xr = b._emscripten_bind_b2WheelJointDef_get_motorSpeed_0 = function () {
            return b.asm._emscripten_bind_b2WheelJointDef_get_motorSpeed_0.apply(null, arguments)
        },
        Yr = b._emscripten_bind_b2Filter_set_maskBits_1 = function () {
            return b.asm._emscripten_bind_b2Filter_set_maskBits_1.apply(null, arguments)
        },
        Zr = b._emscripten_bind_b2WheelJoint_GetCollideConnected_0 = function () {
            return b.asm._emscripten_bind_b2WheelJoint_GetCollideConnected_0.apply(null,
                arguments)
        },
        $r = b._emscripten_bind_b2EdgeShape_get_m_radius_0 = function () {
            return b.asm._emscripten_bind_b2EdgeShape_get_m_radius_0.apply(null, arguments)
        },
        as = b._emscripten_bind_b2World_GetTreeHeight_0 = function () {
            return b.asm._emscripten_bind_b2World_GetTreeHeight_0.apply(null, arguments)
        },
        bs = b._emscripten_bind_b2Mat22_b2Mat22_2 = function () {
            return b.asm._emscripten_bind_b2Mat22_b2Mat22_2.apply(null, arguments)
        },
        cs = b._emscripten_bind_b2PrismaticJoint_GetNext_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint_GetNext_0.apply(null,
                arguments)
        },
        ds = b._emscripten_bind_b2Mat22_b2Mat22_0 = function () {
            return b.asm._emscripten_bind_b2Mat22_b2Mat22_0.apply(null, arguments)
        },
        es = b._emscripten_bind_b2PrismaticJointDef_get_bodyA_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_get_bodyA_0.apply(null, arguments)
        },
        gs = b._emscripten_bind_b2RopeJointDef_set_localAnchorA_1 = function () {
            return b.asm._emscripten_bind_b2RopeJointDef_set_localAnchorA_1.apply(null, arguments)
        },
        hs = b._emscripten_bind_b2ChainShape_set_m_hasNextVertex_1 = function () {
            return b.asm._emscripten_bind_b2ChainShape_set_m_hasNextVertex_1.apply(null,
                arguments)
        },
        is = b._emscripten_bind_b2Mat22_set_ey_1 = function () {
            return b.asm._emscripten_bind_b2Mat22_set_ey_1.apply(null, arguments)
        },
        js = b._emscripten_bind_b2MotorJointDef_set_angularOffset_1 = function () {
            return b.asm._emscripten_bind_b2MotorJointDef_set_angularOffset_1.apply(null, arguments)
        },
        ks = b._emscripten_bind_b2CircleShape_get_m_type_0 = function () {
            return b.asm._emscripten_bind_b2CircleShape_get_m_type_0.apply(null, arguments)
        },
        ls = b._emscripten_bind_b2Body_GetType_0 = function () {
            return b.asm._emscripten_bind_b2Body_GetType_0.apply(null,
                arguments)
        },
        ms = b._emscripten_bind_b2ContactEdge_b2ContactEdge_0 = function () {
            return b.asm._emscripten_bind_b2ContactEdge_b2ContactEdge_0.apply(null, arguments)
        },
        ns = b._emscripten_bind_b2BodyDef___destroy___0 = function () {
            return b.asm._emscripten_bind_b2BodyDef___destroy___0.apply(null, arguments)
        },
        ps = b._emscripten_bind_b2FrictionJointDef_set_maxTorque_1 = function () {
            return b.asm._emscripten_bind_b2FrictionJointDef_set_maxTorque_1.apply(null, arguments)
        },
        Qa = b._free = function () {
            return b.asm._free.apply(null, arguments)
        },
        qs = b._emscripten_bind_b2PulleyJointDef_set_groundAnchorB_1 = function () {
            return b.asm._emscripten_bind_b2PulleyJointDef_set_groundAnchorB_1.apply(null, arguments)
        },
        rs = b._emscripten_bind_b2RevoluteJointDef_get_collideConnected_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJointDef_get_collideConnected_0.apply(null, arguments)
        },
        ss = b._emscripten_bind_b2DistanceJointDef_set_bodyA_1 = function () {
            return b.asm._emscripten_bind_b2DistanceJointDef_set_bodyA_1.apply(null, arguments)
        };
    b.runPostSets = function () {
        return b.asm.runPostSets.apply(null, arguments)
    };
    var ts = b._emscripten_bind_b2RevoluteJoint_SetLimits_2 = function () {
        return b.asm._emscripten_bind_b2RevoluteJoint_SetLimits_2.apply(null, arguments)
    },
        us = b._emscripten_bind_b2WeldJointDef_set_type_1 = function () {
            return b.asm._emscripten_bind_b2WeldJointDef_set_type_1.apply(null, arguments)
        },
        vs = b._emscripten_bind_b2MotorJointDef___destroy___0 = function () {
            return b.asm._emscripten_bind_b2MotorJointDef___destroy___0.apply(null, arguments)
        },
        xs = b._emscripten_bind_b2FrictionJoint_GetNext_0 = function () {
            return b.asm._emscripten_bind_b2FrictionJoint_GetNext_0.apply(null,
                arguments)
        },
        ys = b._emscripten_bind_b2Shape_set_m_type_1 = function () {
            return b.asm._emscripten_bind_b2Shape_set_m_type_1.apply(null, arguments)
        },
        zs = b._emscripten_bind_b2WheelJoint_GetJointTranslation_0 = function () {
            return b.asm._emscripten_bind_b2WheelJoint_GetJointTranslation_0.apply(null, arguments)
        },
        As = b._emscripten_bind_b2WheelJoint_GetMotorTorque_1 = function () {
            return b.asm._emscripten_bind_b2WheelJoint_GetMotorTorque_1.apply(null, arguments)
        },
        Bs = b._emscripten_bind_b2RopeJoint_SetUserData_1 = function () {
            return b.asm._emscripten_bind_b2RopeJoint_SetUserData_1.apply(null,
                arguments)
        },
        Cs = b._emscripten_bind_b2RopeJointDef___destroy___0 = function () {
            return b.asm._emscripten_bind_b2RopeJointDef___destroy___0.apply(null, arguments)
        },
        Ds = b._emscripten_bind_b2WheelJoint_IsActive_0 = function () {
            return b.asm._emscripten_bind_b2WheelJoint_IsActive_0.apply(null, arguments)
        },
        Es = b._emscripten_bind_b2PrismaticJointDef_get_enableMotor_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_get_enableMotor_0.apply(null, arguments)
        },
        Fs = b._emscripten_bind_b2MotorJointDef_set_bodyB_1 =
            function () {
                return b.asm._emscripten_bind_b2MotorJointDef_set_bodyB_1.apply(null, arguments)
            },
        Gs = b._emscripten_bind_JSDestructionListener___destroy___0 = function () {
            return b.asm._emscripten_bind_JSDestructionListener___destroy___0.apply(null, arguments)
        },
        Hs = b._emscripten_bind_b2Transform_b2Transform_2 = function () {
            return b.asm._emscripten_bind_b2Transform_b2Transform_2.apply(null, arguments)
        },
        Is = b._emscripten_bind_b2WeldJoint_GetReactionForce_1 = function () {
            return b.asm._emscripten_bind_b2WeldJoint_GetReactionForce_1.apply(null,
                arguments)
        },
        Js = b._emscripten_bind_b2ChainShape_RayCast_4 = function () {
            return b.asm._emscripten_bind_b2ChainShape_RayCast_4.apply(null, arguments)
        },
        Ks = b._emscripten_bind_b2Vec2_set_y_1 = function () {
            return b.asm._emscripten_bind_b2Vec2_set_y_1.apply(null, arguments)
        },
        Ls = b._emscripten_bind_b2PrismaticJoint_SetMotorSpeed_1 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint_SetMotorSpeed_1.apply(null, arguments)
        },
        Ms = b._emscripten_bind_b2ContactID_get_cf_0 = function () {
            return b.asm._emscripten_bind_b2ContactID_get_cf_0.apply(null,
                arguments)
        },
        Ns = b._emscripten_bind_b2DistanceJointDef_Initialize_4 = function () {
            return b.asm._emscripten_bind_b2DistanceJointDef_Initialize_4.apply(null, arguments)
        },
        Os = b._emscripten_bind_b2ChainShape_get_m_radius_0 = function () {
            return b.asm._emscripten_bind_b2ChainShape_get_m_radius_0.apply(null, arguments)
        },
        Ps = b._emscripten_bind_b2WeldJointDef_set_localAnchorB_1 = function () {
            return b.asm._emscripten_bind_b2WeldJointDef_set_localAnchorB_1.apply(null, arguments)
        },
        Qs = b._emscripten_bind_b2ChainShape_set_m_radius_1 =
            function () {
                return b.asm._emscripten_bind_b2ChainShape_set_m_radius_1.apply(null, arguments)
            },
        Rs = b._emscripten_bind_b2DistanceJoint_GetReactionTorque_1 = function () {
            return b.asm._emscripten_bind_b2DistanceJoint_GetReactionTorque_1.apply(null, arguments)
        },
        Ss = b._emscripten_bind_b2World_Dump_0 = function () {
            return b.asm._emscripten_bind_b2World_Dump_0.apply(null, arguments)
        },
        Ts = b._emscripten_bind_b2RevoluteJoint_GetLocalAnchorB_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJoint_GetLocalAnchorB_0.apply(null,
                arguments)
        },
        Us = b._emscripten_bind_JSContactFilter_JSContactFilter_0 = function () {
            return b.asm._emscripten_bind_JSContactFilter_JSContactFilter_0.apply(null, arguments)
        },
        Vs = b._emscripten_bind_b2Profile_set_solve_1 = function () {
            return b.asm._emscripten_bind_b2Profile_set_solve_1.apply(null, arguments)
        },
        Ws = b._emscripten_bind_b2FixtureDef_set_density_1 = function () {
            return b.asm._emscripten_bind_b2FixtureDef_set_density_1.apply(null, arguments)
        },
        Xs = b._emscripten_bind_b2WeldJoint_GetDampingRatio_0 = function () {
            return b.asm._emscripten_bind_b2WeldJoint_GetDampingRatio_0.apply(null,
                arguments)
        },
        Ys = b._emscripten_bind_b2Color_get_b_0 = function () {
            return b.asm._emscripten_bind_b2Color_get_b_0.apply(null, arguments)
        },
        Zs = b._emscripten_bind_b2MouseJointDef_get_userData_0 = function () {
            return b.asm._emscripten_bind_b2MouseJointDef_get_userData_0.apply(null, arguments)
        },
        $s = b._emscripten_bind_b2CircleShape_ComputeAABB_3 = function () {
            return b.asm._emscripten_bind_b2CircleShape_ComputeAABB_3.apply(null, arguments)
        },
        at = b._emscripten_bind_b2RopeJoint_GetReactionForce_1 = function () {
            return b.asm._emscripten_bind_b2RopeJoint_GetReactionForce_1.apply(null,
                arguments)
        },
        bt = b._emscripten_bind_b2PrismaticJointDef_get_enableLimit_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_get_enableLimit_0.apply(null, arguments)
        },
        ct = b._emscripten_bind_b2ManifoldPoint_set_localPoint_1 = function () {
            return b.asm._emscripten_bind_b2ManifoldPoint_set_localPoint_1.apply(null, arguments)
        },
        dt = b._emscripten_bind_b2Fixture_GetFilterData_0 = function () {
            return b.asm._emscripten_bind_b2Fixture_GetFilterData_0.apply(null, arguments)
        },
        et = b._emscripten_bind_b2World_GetBodyList_0 =
            function () {
                return b.asm._emscripten_bind_b2World_GetBodyList_0.apply(null, arguments)
            },
        ft = b._emscripten_bind_b2Body_GetJointList_0 = function () {
            return b.asm._emscripten_bind_b2Body_GetJointList_0.apply(null, arguments)
        },
        gt = b._emscripten_bind_b2Joint_GetNext_0 = function () {
            return b.asm._emscripten_bind_b2Joint_GetNext_0.apply(null, arguments)
        },
        ht = b._emscripten_bind_b2Joint_GetType_0 = function () {
            return b.asm._emscripten_bind_b2Joint_GetType_0.apply(null, arguments)
        },
        it = b._emscripten_bind_b2World_RayCast_3 = function () {
            return b.asm._emscripten_bind_b2World_RayCast_3.apply(null,
                arguments)
        },
        jt = b._emscripten_bind_b2MassData_set_I_1 = function () {
            return b.asm._emscripten_bind_b2MassData_set_I_1.apply(null, arguments)
        },
        kt = b._emscripten_bind_b2MassData___destroy___0 = function () {
            return b.asm._emscripten_bind_b2MassData___destroy___0.apply(null, arguments)
        },
        lt = b._emscripten_bind_b2Profile_get_collide_0 = function () {
            return b.asm._emscripten_bind_b2Profile_get_collide_0.apply(null, arguments)
        },
        mt = b._emscripten_bind_b2Color_b2Color_3 = function () {
            return b.asm._emscripten_bind_b2Color_b2Color_3.apply(null,
                arguments)
        },
        nt = b._emscripten_bind_b2Color_b2Color_0 = function () {
            return b.asm._emscripten_bind_b2Color_b2Color_0.apply(null, arguments)
        },
        ot = b._emscripten_bind_b2WheelJointDef_get_frequencyHz_0 = function () {
            return b.asm._emscripten_bind_b2WheelJointDef_get_frequencyHz_0.apply(null, arguments)
        },
        pt = b._emscripten_bind_b2WeldJointDef_Initialize_3 = function () {
            return b.asm._emscripten_bind_b2WeldJointDef_Initialize_3.apply(null, arguments)
        },
        qt = b._emscripten_bind_b2RevoluteJoint_GetMotorTorque_1 = function () {
            return b.asm._emscripten_bind_b2RevoluteJoint_GetMotorTorque_1.apply(null,
                arguments)
        },
        rt = b._emscripten_enum_b2JointType_e_gearJoint = function () {
            return b.asm._emscripten_enum_b2JointType_e_gearJoint.apply(null, arguments)
        },
        st = b._emscripten_bind_b2FixtureDef_get_friction_0 = function () {
            return b.asm._emscripten_bind_b2FixtureDef_get_friction_0.apply(null, arguments)
        },
        tt = b._emscripten_bind_b2PrismaticJointDef_set_localAnchorA_1 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_set_localAnchorA_1.apply(null, arguments)
        },
        ut = b._emscripten_bind_b2Contact_GetManifold_0 = function () {
            return b.asm._emscripten_bind_b2Contact_GetManifold_0.apply(null,
                arguments)
        },
        vt = b._emscripten_bind_b2QueryCallback___destroy___0 = function () {
            return b.asm._emscripten_bind_b2QueryCallback___destroy___0.apply(null, arguments)
        },
        wt = b._emscripten_bind_b2WeldJointDef_get_localAnchorA_0 = function () {
            return b.asm._emscripten_bind_b2WeldJointDef_get_localAnchorA_0.apply(null, arguments)
        },
        xt = b._emscripten_bind_b2MouseJoint_SetUserData_1 = function () {
            return b.asm._emscripten_bind_b2MouseJoint_SetUserData_1.apply(null, arguments)
        },
        yt = b._emscripten_bind_b2MotorJointDef_set_correctionFactor_1 =
            function () {
                return b.asm._emscripten_bind_b2MotorJointDef_set_correctionFactor_1.apply(null, arguments)
            },
        zt = b._emscripten_bind_b2ChainShape_GetChildEdge_2 = function () {
            return b.asm._emscripten_bind_b2ChainShape_GetChildEdge_2.apply(null, arguments)
        },
        At = b._emscripten_enum_b2JointType_e_mouseJoint = function () {
            return b.asm._emscripten_enum_b2JointType_e_mouseJoint.apply(null, arguments)
        },
        Bt = b._emscripten_bind_b2MotorJointDef_get_angularOffset_0 = function () {
            return b.asm._emscripten_bind_b2MotorJointDef_get_angularOffset_0.apply(null,
                arguments)
        },
        Ct = b._emscripten_bind_b2WheelJoint_SetUserData_1 = function () {
            return b.asm._emscripten_bind_b2WheelJoint_SetUserData_1.apply(null, arguments)
        },
        Dt = b._emscripten_bind_b2Body_ApplyForce_3 = function () {
            return b.asm._emscripten_bind_b2Body_ApplyForce_3.apply(null, arguments)
        },
        Et = b._emscripten_bind_b2ChainShape_set_m_count_1 = function () {
            return b.asm._emscripten_bind_b2ChainShape_set_m_count_1.apply(null, arguments)
        },
        Ft = b._emscripten_bind_b2DistanceJoint_GetCollideConnected_0 = function () {
            return b.asm._emscripten_bind_b2DistanceJoint_GetCollideConnected_0.apply(null,
                arguments)
        },
        Gt = b._emscripten_bind_b2RevoluteJoint_IsMotorEnabled_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJoint_IsMotorEnabled_0.apply(null, arguments)
        },
        Ht = b._emscripten_bind_b2PolygonShape_GetVertex_1 = function () {
            return b.asm._emscripten_bind_b2PolygonShape_GetVertex_1.apply(null, arguments)
        },
        It = b._emscripten_bind_b2World_SetGravity_1 = function () {
            return b.asm._emscripten_bind_b2World_SetGravity_1.apply(null, arguments)
        },
        Jt = b._emscripten_bind_b2MouseJointDef_get_collideConnected_0 = function () {
            return b.asm._emscripten_bind_b2MouseJointDef_get_collideConnected_0.apply(null,
                arguments)
        },
        Qb = b._llvm_bswap_i32 = function () {
            return b.asm._llvm_bswap_i32.apply(null, arguments)
        },
        Kt = b._emscripten_bind_b2Fixture_SetRestitution_1 = function () {
            return b.asm._emscripten_bind_b2Fixture_SetRestitution_1.apply(null, arguments)
        },
        Lt = b._emscripten_bind_b2Body_GetTransform_0 = function () {
            return b.asm._emscripten_bind_b2Body_GetTransform_0.apply(null, arguments)
        },
        Mt = b._emscripten_enum_b2ShapeType_e_typeCount = function () {
            return b.asm._emscripten_enum_b2ShapeType_e_typeCount.apply(null, arguments)
        },
        Nt =
            b._emscripten_bind_b2Mat33_set_ex_1 = function () {
                return b.asm._emscripten_bind_b2Mat33_set_ex_1.apply(null, arguments)
            },
        Ot = b._emscripten_bind_b2PulleyJointDef_get_localAnchorB_0 = function () {
            return b.asm._emscripten_bind_b2PulleyJointDef_get_localAnchorB_0.apply(null, arguments)
        },
        Pt = b._emscripten_bind_b2RevoluteJointDef_get_bodyA_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJointDef_get_bodyA_0.apply(null, arguments)
        },
        Qt = b._emscripten_bind_b2PrismaticJoint_GetBodyB_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint_GetBodyB_0.apply(null,
                arguments)
        },
        Rt = b._emscripten_bind_b2WheelJointDef_set_bodyA_1 = function () {
            return b.asm._emscripten_bind_b2WheelJointDef_set_bodyA_1.apply(null, arguments)
        },
        St = b._emscripten_bind_b2MotorJointDef_set_maxForce_1 = function () {
            return b.asm._emscripten_bind_b2MotorJointDef_set_maxForce_1.apply(null, arguments)
        },
        Tt = b._emscripten_bind_b2BodyDef_get_angle_0 = function () {
            return b.asm._emscripten_bind_b2BodyDef_get_angle_0.apply(null, arguments)
        },
        Ut = b._emscripten_bind_b2FixtureDef_get_shape_0 = function () {
            return b.asm._emscripten_bind_b2FixtureDef_get_shape_0.apply(null,
                arguments)
        },
        Vt = b._emscripten_bind_b2Body_SetAngularVelocity_1 = function () {
            return b.asm._emscripten_bind_b2Body_SetAngularVelocity_1.apply(null, arguments)
        },
        Wt = b._emscripten_bind_b2WeldJointDef_get_userData_0 = function () {
            return b.asm._emscripten_bind_b2WeldJointDef_get_userData_0.apply(null, arguments)
        },
        Xt = b._emscripten_bind_b2FrictionJoint_SetMaxForce_1 = function () {
            return b.asm._emscripten_bind_b2FrictionJoint_SetMaxForce_1.apply(null, arguments)
        },
        Yt = b._emscripten_bind_b2Mat33_b2Mat33_3 = function () {
            return b.asm._emscripten_bind_b2Mat33_b2Mat33_3.apply(null,
                arguments)
        },
        Zt = b._emscripten_bind_b2Vec3_get_y_0 = function () {
            return b.asm._emscripten_bind_b2Vec3_get_y_0.apply(null, arguments)
        },
        $t = b._emscripten_bind_b2JointDef_get_type_0 = function () {
            return b.asm._emscripten_bind_b2JointDef_get_type_0.apply(null, arguments)
        },
        au = b._emscripten_bind_JSQueryCallback_ReportFixture_1 = function () {
            return b.asm._emscripten_bind_JSQueryCallback_ReportFixture_1.apply(null, arguments)
        },
        bu = b._emscripten_bind_b2PulleyJoint_GetCollideConnected_0 = function () {
            return b.asm._emscripten_bind_b2PulleyJoint_GetCollideConnected_0.apply(null,
                arguments)
        },
        cu = b._emscripten_bind_b2Body_CreateFixture_1 = function () {
            return b.asm._emscripten_bind_b2Body_CreateFixture_1.apply(null, arguments)
        },
        du = b._emscripten_bind_JSDraw_JSDraw_0 = function () {
            return b.asm._emscripten_bind_JSDraw_JSDraw_0.apply(null, arguments)
        },
        eu = b._emscripten_bind_b2MouseJoint_GetAnchorA_0 = function () {
            return b.asm._emscripten_bind_b2MouseJoint_GetAnchorA_0.apply(null, arguments)
        },
        fu = b._emscripten_bind_b2Transform_get_p_0 = function () {
            return b.asm._emscripten_bind_b2Transform_get_p_0.apply(null,
                arguments)
        },
        gu = b._emscripten_bind_b2WorldManifold_get_normal_0 = function () {
            return b.asm._emscripten_bind_b2WorldManifold_get_normal_0.apply(null, arguments)
        },
        hu = b._emscripten_bind_b2World_GetProfile_0 = function () {
            return b.asm._emscripten_bind_b2World_GetProfile_0.apply(null, arguments)
        },
        iu = b._emscripten_bind_b2DistanceJointDef___destroy___0 = function () {
            return b.asm._emscripten_bind_b2DistanceJointDef___destroy___0.apply(null, arguments)
        },
        ju = b._emscripten_bind_b2GearJointDef_set_bodyA_1 = function () {
            return b.asm._emscripten_bind_b2GearJointDef_set_bodyA_1.apply(null,
                arguments)
        },
        ku = b._emscripten_bind_b2JointDef_set_type_1 = function () {
            return b.asm._emscripten_bind_b2JointDef_set_type_1.apply(null, arguments)
        },
        lu = b._emscripten_bind_b2ContactEdge_set_contact_1 = function () {
            return b.asm._emscripten_bind_b2ContactEdge_set_contact_1.apply(null, arguments)
        },
        mu = b._emscripten_bind_b2MotorJointDef_get_userData_0 = function () {
            return b.asm._emscripten_bind_b2MotorJointDef_get_userData_0.apply(null, arguments)
        },
        nu = b._emscripten_bind_b2World_GetContactList_0 = function () {
            return b.asm._emscripten_bind_b2World_GetContactList_0.apply(null,
                arguments)
        },
        ou = b._emscripten_bind_b2Mat33_set_ez_1 = function () {
            return b.asm._emscripten_bind_b2Mat33_set_ez_1.apply(null, arguments)
        },
        pu = b._emscripten_bind_b2JointEdge_b2JointEdge_0 = function () {
            return b.asm._emscripten_bind_b2JointEdge_b2JointEdge_0.apply(null, arguments)
        },
        qu = b._emscripten_bind_b2FrictionJointDef_get_bodyA_0 = function () {
            return b.asm._emscripten_bind_b2FrictionJointDef_get_bodyA_0.apply(null, arguments)
        },
        ru = b._emscripten_bind_b2WheelJointDef_get_type_0 = function () {
            return b.asm._emscripten_bind_b2WheelJointDef_get_type_0.apply(null,
                arguments)
        },
        su = b._emscripten_bind_b2RevoluteJoint_GetReactionForce_1 = function () {
            return b.asm._emscripten_bind_b2RevoluteJoint_GetReactionForce_1.apply(null, arguments)
        },
        tu = b._emscripten_bind_b2PulleyJointDef_set_collideConnected_1 = function () {
            return b.asm._emscripten_bind_b2PulleyJointDef_set_collideConnected_1.apply(null, arguments)
        },
        uu = b._emscripten_bind_b2RopeJoint_GetCollideConnected_0 = function () {
            return b.asm._emscripten_bind_b2RopeJoint_GetCollideConnected_0.apply(null, arguments)
        },
        vu = b._emscripten_bind_b2GearJointDef_set_joint2_1 =
            function () {
                return b.asm._emscripten_bind_b2GearJointDef_set_joint2_1.apply(null, arguments)
            },
        wu = b._emscripten_bind_b2EdgeShape_set_m_vertex3_1 = function () {
            return b.asm._emscripten_bind_b2EdgeShape_set_m_vertex3_1.apply(null, arguments)
        },
        xu = b._emscripten_bind_b2GearJoint_GetAnchorB_0 = function () {
            return b.asm._emscripten_bind_b2GearJoint_GetAnchorB_0.apply(null, arguments)
        },
        yu = b._emscripten_bind_b2RopeJoint_IsActive_0 = function () {
            return b.asm._emscripten_bind_b2RopeJoint_IsActive_0.apply(null, arguments)
        },
        zu = b._emscripten_bind_b2Fixture_GetFriction_0 = function () {
            return b.asm._emscripten_bind_b2Fixture_GetFriction_0.apply(null, arguments)
        },
        Au = b._emscripten_bind_b2Fixture_GetNext_0 = function () {
            return b.asm._emscripten_bind_b2Fixture_GetNext_0.apply(null, arguments)
        },
        Bu = b._emscripten_bind_b2RopeJointDef_get_bodyA_0 = function () {
            return b.asm._emscripten_bind_b2RopeJointDef_get_bodyA_0.apply(null, arguments)
        },
        Cu = b._emscripten_bind_b2WeldJointDef_get_localAnchorB_0 = function () {
            return b.asm._emscripten_bind_b2WeldJointDef_get_localAnchorB_0.apply(null,
                arguments)
        },
        Du = b._emscripten_bind_b2WeldJointDef_set_referenceAngle_1 = function () {
            return b.asm._emscripten_bind_b2WeldJointDef_set_referenceAngle_1.apply(null, arguments)
        },
        Eu = b._emscripten_bind_b2DistanceJointDef_set_localAnchorB_1 = function () {
            return b.asm._emscripten_bind_b2DistanceJointDef_set_localAnchorB_1.apply(null, arguments)
        },
        Fu = b._emscripten_bind_b2Mat33_SetZero_0 = function () {
            return b.asm._emscripten_bind_b2Mat33_SetZero_0.apply(null, arguments)
        },
        Gu = b._emscripten_bind_b2MotorJointDef_get_bodyB_0 =
            function () {
                return b.asm._emscripten_bind_b2MotorJointDef_get_bodyB_0.apply(null, arguments)
            },
        Hu = b._emscripten_bind_b2WheelJointDef_b2WheelJointDef_0 = function () {
            return b.asm._emscripten_bind_b2WheelJointDef_b2WheelJointDef_0.apply(null, arguments)
        },
        Iu = b._emscripten_bind_b2PrismaticJointDef_get_localAxisA_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_get_localAxisA_0.apply(null, arguments)
        },
        Ju = b._emscripten_bind_b2Mat22_get_ey_0 = function () {
            return b.asm._emscripten_bind_b2Mat22_get_ey_0.apply(null,
                arguments)
        },
        Ku = b._emscripten_bind_b2Mat22_SetIdentity_0 = function () {
            return b.asm._emscripten_bind_b2Mat22_SetIdentity_0.apply(null, arguments)
        },
        Lu = b._emscripten_bind_b2Joint_IsActive_0 = function () {
            return b.asm._emscripten_bind_b2Joint_IsActive_0.apply(null, arguments)
        },
        Mu = b._emscripten_bind_b2PulleyJoint_GetReactionForce_1 = function () {
            return b.asm._emscripten_bind_b2PulleyJoint_GetReactionForce_1.apply(null, arguments)
        },
        Nu = b._emscripten_bind_b2Shape_get_m_radius_0 = function () {
            return b.asm._emscripten_bind_b2Shape_get_m_radius_0.apply(null,
                arguments)
        },
        Ou = b._emscripten_bind_b2Mat22_b2Mat22_4 = function () {
            return b.asm._emscripten_bind_b2Mat22_b2Mat22_4.apply(null, arguments)
        },
        Pu = b._emscripten_bind_b2PrismaticJointDef_set_localAxisA_1 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_set_localAxisA_1.apply(null, arguments)
        },
        Qu = b._emscripten_bind_b2PolygonShape_SetAsBox_4 = function () {
            return b.asm._emscripten_bind_b2PolygonShape_SetAsBox_4.apply(null, arguments)
        },
        Ru = b._emscripten_bind_b2EdgeShape_set_m_vertex1_1 = function () {
            return b.asm._emscripten_bind_b2EdgeShape_set_m_vertex1_1.apply(null,
                arguments)
        },
        Su = b._emscripten_bind_b2Body_GetWorld_0 = function () {
            return b.asm._emscripten_bind_b2Body_GetWorld_0.apply(null, arguments)
        },
        Tu = b._emscripten_enum_b2LimitState_e_inactiveLimit = function () {
            return b.asm._emscripten_enum_b2LimitState_e_inactiveLimit.apply(null, arguments)
        },
        Uu = b._emscripten_bind_b2Vec2_set_x_1 = function () {
            return b.asm._emscripten_bind_b2Vec2_set_x_1.apply(null, arguments)
        },
        Vu = b._emscripten_bind_b2Body_SetAwake_1 = function () {
            return b.asm._emscripten_bind_b2Body_SetAwake_1.apply(null,
                arguments)
        },
        Wu = b._emscripten_bind_b2WeldJoint_GetLocalAnchorA_0 = function () {
            return b.asm._emscripten_bind_b2WeldJoint_GetLocalAnchorA_0.apply(null, arguments)
        },
        Xu = b._emscripten_bind_b2Vec2___destroy___0 = function () {
            return b.asm._emscripten_bind_b2Vec2___destroy___0.apply(null, arguments)
        },
        Yu = b._emscripten_enum_b2ShapeType_e_polygon = function () {
            return b.asm._emscripten_enum_b2ShapeType_e_polygon.apply(null, arguments)
        },
        Zu = b._emscripten_bind_b2Body_GetInertia_0 = function () {
            return b.asm._emscripten_bind_b2Body_GetInertia_0.apply(null,
                arguments)
        },
        $u = b._emscripten_bind_b2PulleyJoint_GetAnchorA_0 = function () {
            return b.asm._emscripten_bind_b2PulleyJoint_GetAnchorA_0.apply(null, arguments)
        },
        av = b._emscripten_bind_b2BodyDef_get_linearVelocity_0 = function () {
            return b.asm._emscripten_bind_b2BodyDef_get_linearVelocity_0.apply(null, arguments)
        },
        bv = b._emscripten_bind_b2DistanceJointDef_get_bodyB_0 = function () {
            return b.asm._emscripten_bind_b2DistanceJointDef_get_bodyB_0.apply(null, arguments)
        },
        cv = b._emscripten_bind_b2Mat22___destroy___0 = function () {
            return b.asm._emscripten_bind_b2Mat22___destroy___0.apply(null,
                arguments)
        },
        dv = b._emscripten_bind_b2RevoluteJoint_GetNext_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJoint_GetNext_0.apply(null, arguments)
        },
        ev = b._emscripten_bind_b2WeldJointDef_get_bodyA_0 = function () {
            return b.asm._emscripten_bind_b2WeldJointDef_get_bodyA_0.apply(null, arguments)
        },
        fv = b._emscripten_bind_b2MotorJoint_GetAnchorB_0 = function () {
            return b.asm._emscripten_bind_b2MotorJoint_GetAnchorB_0.apply(null, arguments)
        },
        gv = b._emscripten_bind_b2Fixture_GetShape_0 = function () {
            return b.asm._emscripten_bind_b2Fixture_GetShape_0.apply(null,
                arguments)
        },
        hv = b._emscripten_bind_b2PulleyJoint_GetReactionTorque_1 = function () {
            return b.asm._emscripten_bind_b2PulleyJoint_GetReactionTorque_1.apply(null, arguments)
        },
        iv = b._emscripten_bind_b2Vec3_op_mul_1 = function () {
            return b.asm._emscripten_bind_b2Vec3_op_mul_1.apply(null, arguments)
        },
        jv = b._emscripten_bind_b2PolygonShape_set_m_type_1 = function () {
            return b.asm._emscripten_bind_b2PolygonShape_set_m_type_1.apply(null, arguments)
        },
        kv = b._emscripten_bind_b2WheelJoint_GetType_0 = function () {
            return b.asm._emscripten_bind_b2WheelJoint_GetType_0.apply(null,
                arguments)
        },
        lv = b._emscripten_bind_b2MotorJoint_GetAngularOffset_0 = function () {
            return b.asm._emscripten_bind_b2MotorJoint_GetAngularOffset_0.apply(null, arguments)
        },
        mv = b._emscripten_bind_b2RevoluteJoint_IsActive_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJoint_IsActive_0.apply(null, arguments)
        },
        nv = b._emscripten_bind_b2GearJoint_GetNext_0 = function () {
            return b.asm._emscripten_bind_b2GearJoint_GetNext_0.apply(null, arguments)
        },
        ov = b._emscripten_bind_b2MouseJointDef_get_maxForce_0 = function () {
            return b.asm._emscripten_bind_b2MouseJointDef_get_maxForce_0.apply(null,
                arguments)
        },
        pv = b._emscripten_bind_b2DestructionListenerWrapper___destroy___0 = function () {
            return b.asm._emscripten_bind_b2DestructionListenerWrapper___destroy___0.apply(null, arguments)
        },
        qv = b._emscripten_bind_b2PrismaticJointDef_set_maxMotorForce_1 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_set_maxMotorForce_1.apply(null, arguments)
        },
        rv = b._emscripten_bind_b2WheelJoint_GetLocalAxisA_0 = function () {
            return b.asm._emscripten_bind_b2WheelJoint_GetLocalAxisA_0.apply(null, arguments)
        },
        sv = b._emscripten_bind_b2Body_GetNext_0 =
            function () {
                return b.asm._emscripten_bind_b2Body_GetNext_0.apply(null, arguments)
            },
        tv = b._emscripten_bind_b2MouseJoint_GetReactionForce_1 = function () {
            return b.asm._emscripten_bind_b2MouseJoint_GetReactionForce_1.apply(null, arguments)
        },
        uv = b._emscripten_bind_b2RopeJoint_GetBodyA_0 = function () {
            return b.asm._emscripten_bind_b2RopeJoint_GetBodyA_0.apply(null, arguments)
        },
        vv = b._emscripten_bind_b2ContactFeature_set_indexA_1 = function () {
            return b.asm._emscripten_bind_b2ContactFeature_set_indexA_1.apply(null, arguments)
        },
        wv = b._emscripten_bind_b2Profile_get_solveInit_0 = function () {
            return b.asm._emscripten_bind_b2Profile_get_solveInit_0.apply(null, arguments)
        },
        xv = b._emscripten_bind_b2Fixture_IsSensor_0 = function () {
            return b.asm._emscripten_bind_b2Fixture_IsSensor_0.apply(null, arguments)
        },
        yv = b._emscripten_bind_b2FrictionJoint_GetAnchorB_0 = function () {
            return b.asm._emscripten_bind_b2FrictionJoint_GetAnchorB_0.apply(null, arguments)
        },
        zv = b._emscripten_bind_b2World_QueryAABB_2 = function () {
            return b.asm._emscripten_bind_b2World_QueryAABB_2.apply(null,
                arguments)
        },
        Av = b._emscripten_bind_b2Profile_set_collide_1 = function () {
            return b.asm._emscripten_bind_b2Profile_set_collide_1.apply(null, arguments)
        },
        Bv = b._emscripten_bind_b2BodyDef_get_userData_0 = function () {
            return b.asm._emscripten_bind_b2BodyDef_get_userData_0.apply(null, arguments)
        },
        Cv = b._emscripten_bind_b2MotorJoint_SetLinearOffset_1 = function () {
            return b.asm._emscripten_bind_b2MotorJoint_SetLinearOffset_1.apply(null, arguments)
        },
        Dv = b._emscripten_bind_b2FrictionJoint_GetMaxForce_0 = function () {
            return b.asm._emscripten_bind_b2FrictionJoint_GetMaxForce_0.apply(null,
                arguments)
        },
        Ev = b._emscripten_bind_b2WheelJointDef_get_userData_0 = function () {
            return b.asm._emscripten_bind_b2WheelJointDef_get_userData_0.apply(null, arguments)
        },
        Fv = b._emscripten_bind_b2RevoluteJoint_IsLimitEnabled_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJoint_IsLimitEnabled_0.apply(null, arguments)
        },
        Gv = b._emscripten_bind_b2World_SetDestructionListener_1 = function () {
            return b.asm._emscripten_bind_b2World_SetDestructionListener_1.apply(null, arguments)
        },
        Hv = b._emscripten_bind_b2RevoluteJointDef_set_maxMotorTorque_1 =
            function () {
                return b.asm._emscripten_bind_b2RevoluteJointDef_set_maxMotorTorque_1.apply(null, arguments)
            },
        Iv = b._emscripten_bind_b2WeldJointDef_set_bodyB_1 = function () {
            return b.asm._emscripten_bind_b2WeldJointDef_set_bodyB_1.apply(null, arguments)
        },
        Jv = b._emscripten_bind_b2Transform_set_p_1 = function () {
            return b.asm._emscripten_bind_b2Transform_set_p_1.apply(null, arguments)
        },
        Kv = b._emscripten_bind_b2DistanceJoint_SetLength_1 = function () {
            return b.asm._emscripten_bind_b2DistanceJoint_SetLength_1.apply(null, arguments)
        },
        Lv = b._emscripten_bind_b2ManifoldPoint_get_localPoint_0 = function () {
            return b.asm._emscripten_bind_b2ManifoldPoint_get_localPoint_0.apply(null, arguments)
        },
        Mv = b._emscripten_bind_b2JointEdge_get_joint_0 = function () {
            return b.asm._emscripten_bind_b2JointEdge_get_joint_0.apply(null, arguments)
        },
        Nv = b._emscripten_bind_b2Body_GetLocalCenter_0 = function () {
            return b.asm._emscripten_bind_b2Body_GetLocalCenter_0.apply(null, arguments)
        },
        Ov = b._emscripten_bind_b2FixtureDef___destroy___0 = function () {
            return b.asm._emscripten_bind_b2FixtureDef___destroy___0.apply(null,
                arguments)
        },
        Pv = b._emscripten_bind_b2MouseJoint___destroy___0 = function () {
            return b.asm._emscripten_bind_b2MouseJoint___destroy___0.apply(null, arguments)
        },
        Qv = b._emscripten_enum_b2JointType_e_ropeJoint = function () {
            return b.asm._emscripten_enum_b2JointType_e_ropeJoint.apply(null, arguments)
        },
        Rv = b._emscripten_bind_b2Profile_get_solveVelocity_0 = function () {
            return b.asm._emscripten_bind_b2Profile_get_solveVelocity_0.apply(null, arguments)
        },
        Sv = b._emscripten_bind_b2WeldJointDef_get_bodyB_0 = function () {
            return b.asm._emscripten_bind_b2WeldJointDef_get_bodyB_0.apply(null,
                arguments)
        },
        Tv = b._emscripten_bind_b2World_GetContinuousPhysics_0 = function () {
            return b.asm._emscripten_bind_b2World_GetContinuousPhysics_0.apply(null, arguments)
        },
        Uv = b._emscripten_bind_b2Joint_GetBodyA_0 = function () {
            return b.asm._emscripten_bind_b2Joint_GetBodyA_0.apply(null, arguments)
        },
        Vv = b._emscripten_bind_b2MotorJointDef_set_maxTorque_1 = function () {
            return b.asm._emscripten_bind_b2MotorJointDef_set_maxTorque_1.apply(null, arguments)
        },
        Wv = b._emscripten_bind_b2PulleyJointDef_Initialize_7 = function () {
            return b.asm._emscripten_bind_b2PulleyJointDef_Initialize_7.apply(null,
                arguments)
        },
        Xv = b._emscripten_bind_b2GearJointDef_set_bodyB_1 = function () {
            return b.asm._emscripten_bind_b2GearJointDef_set_bodyB_1.apply(null, arguments)
        },
        Yv = b._emscripten_bind_b2RopeJoint_GetReactionTorque_1 = function () {
            return b.asm._emscripten_bind_b2RopeJoint_GetReactionTorque_1.apply(null, arguments)
        },
        Zv = b._emscripten_bind_b2WheelJointDef_set_dampingRatio_1 = function () {
            return b.asm._emscripten_bind_b2WheelJointDef_set_dampingRatio_1.apply(null, arguments)
        },
        $v = b._emscripten_bind_b2GearJoint_GetType_0 =
            function () {
                return b.asm._emscripten_bind_b2GearJoint_GetType_0.apply(null, arguments)
            },
        aw = b._emscripten_bind_b2MotorJoint_GetNext_0 = function () {
            return b.asm._emscripten_bind_b2MotorJoint_GetNext_0.apply(null, arguments)
        },
        bw = b._emscripten_bind_b2EdgeShape_set_m_vertex0_1 = function () {
            return b.asm._emscripten_bind_b2EdgeShape_set_m_vertex0_1.apply(null, arguments)
        },
        cw = b._emscripten_bind_b2RevoluteJoint_GetAnchorB_0 = function () {
            return b.asm._emscripten_bind_b2RevoluteJoint_GetAnchorB_0.apply(null, arguments)
        },
        dw = b._emscripten_bind_b2RopeJointDef_set_localAnchorB_1 = function () {
            return b.asm._emscripten_bind_b2RopeJointDef_set_localAnchorB_1.apply(null, arguments)
        },
        ew = b._emscripten_bind_b2PrismaticJoint_GetUserData_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJoint_GetUserData_0.apply(null, arguments)
        },
        fw = b._emscripten_bind_b2GearJointDef_set_userData_1 = function () {
            return b.asm._emscripten_bind_b2GearJointDef_set_userData_1.apply(null, arguments)
        },
        gw = b._emscripten_bind_b2Fixture_SetSensor_1 = function () {
            return b.asm._emscripten_bind_b2Fixture_SetSensor_1.apply(null,
                arguments)
        },
        hw = b._emscripten_bind_b2MotorJointDef_set_collideConnected_1 = function () {
            return b.asm._emscripten_bind_b2MotorJointDef_set_collideConnected_1.apply(null, arguments)
        },
        iw = b._emscripten_bind_b2Contact_GetFixtureB_0 = function () {
            return b.asm._emscripten_bind_b2Contact_GetFixtureB_0.apply(null, arguments)
        },
        jw = b._emscripten_bind_b2ChainShape_ComputeMass_2 = function () {
            return b.asm._emscripten_bind_b2ChainShape_ComputeMass_2.apply(null, arguments)
        },
        kw = b._emscripten_bind_b2WeldJointDef_b2WeldJointDef_0 =
            function () {
                return b.asm._emscripten_bind_b2WeldJointDef_b2WeldJointDef_0.apply(null, arguments)
            },
        lw = b._emscripten_bind_b2Contact_GetChildIndexA_0 = function () {
            return b.asm._emscripten_bind_b2Contact_GetChildIndexA_0.apply(null, arguments)
        },
        mw = b._emscripten_bind_b2RopeJointDef_get_bodyB_0 = function () {
            return b.asm._emscripten_bind_b2RopeJointDef_get_bodyB_0.apply(null, arguments)
        },
        nw = b._emscripten_bind_b2BodyDef_b2BodyDef_0 = function () {
            return b.asm._emscripten_bind_b2BodyDef_b2BodyDef_0.apply(null, arguments)
        },
        ow = b._emscripten_bind_b2MassData_get_mass_0 = function () {
            return b.asm._emscripten_bind_b2MassData_get_mass_0.apply(null, arguments)
        },
        pw = b._emscripten_bind_b2WorldManifold_get_separations_1 = function () {
            return b.asm._emscripten_bind_b2WorldManifold_get_separations_1.apply(null, arguments)
        },
        qw = b._emscripten_bind_b2Joint_GetBodyB_0 = function () {
            return b.asm._emscripten_bind_b2Joint_GetBodyB_0.apply(null, arguments)
        },
        rw = b._emscripten_bind_b2Shape_GetChildCount_0 = function () {
            return b.asm._emscripten_bind_b2Shape_GetChildCount_0.apply(null,
                arguments)
        },
        sw = b._emscripten_bind_b2WheelJointDef_set_localAxisA_1 = function () {
            return b.asm._emscripten_bind_b2WheelJointDef_set_localAxisA_1.apply(null, arguments)
        },
        tw = b._emscripten_bind_b2Joint_Dump_0 = function () {
            return b.asm._emscripten_bind_b2Joint_Dump_0.apply(null, arguments)
        },
        uw = b._emscripten_bind_b2World_SetContactFilter_1 = function () {
            return b.asm._emscripten_bind_b2World_SetContactFilter_1.apply(null, arguments)
        },
        vw = b._emscripten_bind_b2RevoluteJointDef_set_motorSpeed_1 = function () {
            return b.asm._emscripten_bind_b2RevoluteJointDef_set_motorSpeed_1.apply(null,
                arguments)
        },
        ww = b._emscripten_bind_b2MotorJointDef_get_bodyA_0 = function () {
            return b.asm._emscripten_bind_b2MotorJointDef_get_bodyA_0.apply(null, arguments)
        },
        xw = b._emscripten_bind_b2WheelJointDef_get_enableMotor_0 = function () {
            return b.asm._emscripten_bind_b2WheelJointDef_get_enableMotor_0.apply(null, arguments)
        },
        yw = b._emscripten_bind_b2Vec2_LengthSquared_0 = function () {
            return b.asm._emscripten_bind_b2Vec2_LengthSquared_0.apply(null, arguments)
        },
        zw = b._emscripten_bind_b2FrictionJointDef_set_bodyA_1 = function () {
            return b.asm._emscripten_bind_b2FrictionJointDef_set_bodyA_1.apply(null,
                arguments)
        },
        Aw = b._emscripten_bind_b2WheelJoint_GetSpringFrequencyHz_0 = function () {
            return b.asm._emscripten_bind_b2WheelJoint_GetSpringFrequencyHz_0.apply(null, arguments)
        },
        Bw = b._emscripten_bind_b2ContactEdge_set_prev_1 = function () {
            return b.asm._emscripten_bind_b2ContactEdge_set_prev_1.apply(null, arguments)
        },
        Cw = b._emscripten_bind_b2Shape_ComputeMass_2 = function () {
            return b.asm._emscripten_bind_b2Shape_ComputeMass_2.apply(null, arguments)
        },
        Dw = b._emscripten_bind_b2FrictionJoint_GetBodyA_0 = function () {
            return b.asm._emscripten_bind_b2FrictionJoint_GetBodyA_0.apply(null,
                arguments)
        },
        Ew = b._emscripten_bind_b2WheelJointDef_set_localAnchorB_1 = function () {
            return b.asm._emscripten_bind_b2WheelJointDef_set_localAnchorB_1.apply(null, arguments)
        },
        Fw = b._emscripten_bind_b2Body_GetAngle_0 = function () {
            return b.asm._emscripten_bind_b2Body_GetAngle_0.apply(null, arguments)
        },
        Gw = b._emscripten_bind_b2PrismaticJointDef_get_maxMotorForce_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_get_maxMotorForce_0.apply(null, arguments)
        },
        Hw = b._emscripten_bind_b2DistanceJoint_GetBodyA_0 =
            function () {
                return b.asm._emscripten_bind_b2DistanceJoint_GetBodyA_0.apply(null, arguments)
            },
        Iw = b._emscripten_bind_b2WheelJoint_GetLocalAnchorB_0 = function () {
            return b.asm._emscripten_bind_b2WheelJoint_GetLocalAnchorB_0.apply(null, arguments)
        },
        Jw = b._emscripten_bind_b2PulleyJointDef_set_bodyA_1 = function () {
            return b.asm._emscripten_bind_b2PulleyJointDef_set_bodyA_1.apply(null, arguments)
        },
        Kw = b._emscripten_bind_b2WheelJoint_GetAnchorB_0 = function () {
            return b.asm._emscripten_bind_b2WheelJoint_GetAnchorB_0.apply(null,
                arguments)
        },
        Lw = b._emscripten_bind_b2PolygonShape_SetAsBox_2 = function () {
            return b.asm._emscripten_bind_b2PolygonShape_SetAsBox_2.apply(null, arguments)
        },
        Mw = b._emscripten_bind_b2PrismaticJointDef_get_type_0 = function () {
            return b.asm._emscripten_bind_b2PrismaticJointDef_get_type_0.apply(null, arguments)
        },
        Nw = b._emscripten_bind_b2Color_Set_3 = function () {
            return b.asm._emscripten_bind_b2Color_Set_3.apply(null, arguments)
        },
        Ow = b._emscripten_bind_b2WheelJointDef_get_bodyA_0 = function () {
            return b.asm._emscripten_bind_b2WheelJointDef_get_bodyA_0.apply(null,
                arguments)
        },
        Pw = b._emscripten_enum_b2LimitState_e_atUpperLimit = function () {
            return b.asm._emscripten_enum_b2LimitState_e_atUpperLimit.apply(null, arguments)
        },
        Qw = b._emscripten_bind_b2PulleyJointDef_set_groundAnchorA_1 = function () {
            return b.asm._emscripten_bind_b2PulleyJointDef_set_groundAnchorA_1.apply(null, arguments)
        },
        Rw = b._emscripten_bind_b2PolygonShape_get_m_type_0 = function () {
            return b.asm._emscripten_bind_b2PolygonShape_get_m_type_0.apply(null, arguments)
        },
        Sw = b._emscripten_bind_b2PrismaticJoint_SetMaxMotorForce_1 =
            function () {
                return b.asm._emscripten_bind_b2PrismaticJoint_SetMaxMotorForce_1.apply(null, arguments)
            },
        Tw = b._emscripten_bind_b2PulleyJointDef_get_collideConnected_0 = function () {
            return b.asm._emscripten_bind_b2PulleyJointDef_get_collideConnected_0.apply(null, arguments)
        },
        Uw = b._emscripten_bind_JSContactListener_JSContactListener_0 = function () {
            return b.asm._emscripten_bind_JSContactListener_JSContactListener_0.apply(null, arguments)
        },
        Vw = b._emscripten_bind_b2WheelJoint___destroy___0 = function () {
            return b.asm._emscripten_bind_b2WheelJoint___destroy___0.apply(null,
                arguments)
        },
        Ww = b._emscripten_bind_b2PolygonShape_set_m_radius_1 = function () {
            return b.asm._emscripten_bind_b2PolygonShape_set_m_radius_1.apply(null, arguments)
        },
        Xw = b._emscripten_bind_b2Fixture_GetMassData_1 = function () {
            return b.asm._emscripten_bind_b2Fixture_GetMassData_1.apply(null, arguments)
        },
        Yw = b._emscripten_bind_b2RopeJoint_SetMaxLength_1 = function () {
            return b.asm._emscripten_bind_b2RopeJoint_SetMaxLength_1.apply(null, arguments)
        };
    b.dynCall_iiii = function () {
        return b.asm.dynCall_iiii.apply(null, arguments)
    };
    b.dynCall_viifii = function () {
        return b.asm.dynCall_viifii.apply(null, arguments)
    };
    b.dynCall_viiiii = function () {
        return b.asm.dynCall_viiiii.apply(null, arguments)
    };
    b.dynCall_vi = function () {
        return b.asm.dynCall_vi.apply(null, arguments)
    };
    b.dynCall_vii = function () {
        return b.asm.dynCall_vii.apply(null, arguments)
    };
    b.dynCall_ii = function () {
        return b.asm.dynCall_ii.apply(null, arguments)
    };
    b.dynCall_fif = function () {
        return b.asm.dynCall_fif.apply(null, arguments)
    };
    b.dynCall_viii = function () {
        return b.asm.dynCall_viii.apply(null, arguments)
    };
    b.dynCall_viifi = function () {
        return b.asm.dynCall_viifi.apply(null, arguments)
    };
    b.dynCall_v = function () {
        return b.asm.dynCall_v.apply(null, arguments)
    };
    b.dynCall_viif = function () {
        return b.asm.dynCall_viif.apply(null, arguments)
    };
    b.dynCall_viiiiii = function () {
        return b.asm.dynCall_viiiiii.apply(null, arguments)
    };
    b.dynCall_iii = function () {
        return b.asm.dynCall_iii.apply(null, arguments)
    };
    b.dynCall_iiiiii = function () {
        return b.asm.dynCall_iiiiii.apply(null, arguments)
    };
    b.dynCall_fiiiif = function () {
        return b.asm.dynCall_fiiiif.apply(null, arguments)
    };
    b.dynCall_viiii = function () {
        return b.asm.dynCall_viiii.apply(null, arguments)
    };
    f.t = b.stackAlloc;
    f.L = b.stackSave;
    f.K = b.stackRestore;
    f.R = b.establishStackSpace;
    f.f = b.setTempRet0;
    f.H = b.getTempRet0;
    b.asm = Sb;
    if (zb)
        if ("function" === typeof b.locateFile ? zb = b.locateFile(zb) : b.memoryInitializerPrefixURL && (zb = b.memoryInitializerPrefixURL + zb), ea || fa) {
            var Zw = b.readBinary(zb);
            Da.set(Zw, f.i)
        } else {
            var ax = function () {
                b.readAsync(zb, $w, function () {
                    throw "could not load memory initializer " + zb;
                })
            };
            xb();
            var $w = function (a) {
                a.byteLength && (a = new Uint8Array(a));
                Da.set(a, f.i);
                b.memoryInitializerRequest && delete b.memoryInitializerRequest.response;
                yb()
            };
            if (b.memoryInitializerRequest) {
                var bx = function () {
                    var a = b.memoryInitializerRequest;
                    200 !== a.status && 0 !== a.status ? (console.warn("a problem seems to have happened with Module.memoryInitializerRequest, status: " + a.status + ", retrying " + zb), ax()) : $w(a.response)
                };
                b.memoryInitializerRequest.response ? setTimeout(bx, 0) : b.memoryInitializerRequest.addEventListener("load", bx)
            } else ax()
        }
    b.then = function (a) {
        if (b.calledRun) a(b);
        else {
            var c = b.onRuntimeInitialized;
            b.onRuntimeInitialized = function () {
                c && c();
                a(b)
            }
        }
        return b
    };

    function ja(a) {
        this.name = "ExitStatus";
        this.message = "Program terminated with exit(" + a + ")";
        this.status = a
    }
    ja.prototype = Error();
    ja.prototype.constructor = ja;
    var cx = null,
        wb = function dx() {
            b.calledRun || ex();
            b.calledRun || (wb = dx)
        };
    b.callMain = b.O = function (a) {
        function c() {
            for (var a = 0; 3 > a; a++) e.push(0)
        }
        a = a || [];
        pb || (pb = !0, hb(jb));
        var d = a.length + 1,
            e = [Ba(rb(b.thisProgram), "i8", 0)];
        c();
        for (var g = 0; g < d - 1; g += 1) e.push(Ba(rb(a[g]), "i8", 0)), c();
        e.push(0);
        e = Ba(e, "i32", 0);
        try {
            var l = b._main(d, e, 0);
            fx(l, !0)
        } catch (m) {
            m instanceof ja || ("SimulateInfiniteLoop" == m ? b.noExitRuntime = !0 : ((a = m) && "object" === typeof m && m.stack && (a = [m, m.stack]), b.h("exception thrown: " + a), b.quit(1, m)))
        } finally { }
    };

    function ex(a) {
        function c() {
            if (!b.calledRun && (b.calledRun = !0, !ra)) {
                pb || (pb = !0, hb(jb));
                hb(kb);
                if (b.onRuntimeInitialized) b.onRuntimeInitialized();
                b._main && gx && b.callMain(a);
                if (b.postRun)
                    for ("function" == typeof b.postRun && (b.postRun = [b.postRun]); b.postRun.length;) {
                        var c = b.postRun.shift();
                        ob.unshift(c)
                    }
                hb(ob)
            }
        }
        a = a || b.arguments;
        null === cx && (cx = Date.now());
        if (!(0 < tb)) {
            if (b.preRun)
                for ("function" == typeof b.preRun && (b.preRun = [b.preRun]); b.preRun.length;) qb();
            hb(ib);
            0 < tb || b.calledRun || (b.setStatus ? (b.setStatus("Running..."),
                setTimeout(function () {
                    setTimeout(function () {
                        b.setStatus("")
                    }, 1);
                    c()
                }, 1)) : c())
        }
    }
    b.run = b.run = ex;

    function fx(a, c) {
        if (!c || !b.noExitRuntime) {
            if (!b.noExitRuntime && (ra = !0, ka = void 0, hb(nb), b.onExit)) b.onExit(a);
            ea && process.exit(a);
            b.quit(a, new ja(a))
        }
    }
    b.exit = b.exit = fx;
    var hx = [];

    function ta(a) {
        if (b.onAbort) b.onAbort(a);
        void 0 !== a ? (b.print(a), b.h(a), a = JSON.stringify(a)) : a = "";
        ra = !0;
        var c = "abort(" + a + ") at " + Ra() + "\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.";
        hx && hx.forEach(function (d) {
            c = d(c, a)
        });
        throw c;
    }
    b.abort = b.abort = ta;
    if (b.preInit)
        for ("function" == typeof b.preInit && (b.preInit = [b.preInit]); 0 < b.preInit.length;) b.preInit.pop()();
    var gx = !0;
    b.noInitialRun && (gx = !1);
    b.noExitRuntime = !0;
    ex();

    function h() { }
    h.prototype = Object.create(h.prototype);
    h.prototype.constructor = h;
    h.prototype.b = h;
    h.c = {};
    b.WrapperObject = h;

    function k(a) {
        return (a || h).c
    }
    b.getCache = k;

    function n(a, c) {
        var d = k(c),
            e = d[a];
        if (e) return e;
        e = Object.create((c || h).prototype);
        e.a = a;
        return d[a] = e
    }
    b.wrapPointer = n;
    b.castObject = function (a, c) {
        return n(a.a, c)
    };
    b.NULL = n(0);
    b.destroy = function (a) {
        if (!a.__destroy__) throw "Error: Cannot destroy object. (Did you create it yourself?)";
        a.__destroy__();
        delete k(a.b)[a.a]
    };
    b.compare = function (a, c) {
        return a.a === c.a
    };
    b.getPointer = function (a) {
        return a.a
    };
    b.getClass = function (a) {
        return a.b
    };
    var ix = 0,
        jx = 0,
        kx = [],
        lx = 0;

    function mx() {
        if (lx) {
            for (var a = 0; a < kx.length; a++) b._free(kx[a]);
            kx.length = 0;
            b._free(ix);
            ix = 0;
            jx += lx;
            lx = 0
        }
        ix || (jx += 128, ix = b._malloc(jx), assert(ix))
    }

    function nx() {
        throw "cannot construct a b2DestructionListenerWrapper, no constructor in IDL";
    }
    nx.prototype = Object.create(h.prototype);
    nx.prototype.constructor = nx;
    nx.prototype.b = nx;
    nx.c = {};
    b.b2DestructionListenerWrapper = nx;
    nx.prototype.__destroy__ = function () {
        pv(this.a)
    };

    function ox() {
        throw "cannot construct a b2Draw, no constructor in IDL";
    }
    ox.prototype = Object.create(h.prototype);
    ox.prototype.constructor = ox;
    ox.prototype.b = ox;
    ox.c = {};
    b.b2Draw = ox;
    ox.prototype.SetFlags = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        ie(c, a)
    };
    ox.prototype.GetFlags = function () {
        return bc(this.a)
    };
    ox.prototype.AppendFlags = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Gh(c, a)
    };
    ox.prototype.ClearFlags = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        bi(c, a)
    };
    ox.prototype.__destroy__ = function () {
        fj(this.a)
    };

    function p() {
        throw "cannot construct a b2Joint, no constructor in IDL";
    }
    p.prototype = Object.create(h.prototype);
    p.prototype.constructor = p;
    p.prototype.b = p;
    p.c = {};
    b.b2Joint = p;
    p.prototype.GetType = function () {
        return ht(this.a)
    };
    p.prototype.GetBodyA = function () {
        return n(Uv(this.a), q)
    };
    p.prototype.GetBodyB = function () {
        return n(qw(this.a), q)
    };
    p.prototype.GetAnchorA = function () {
        return n(ln(this.a), r)
    };
    p.prototype.GetAnchorB = function () {
        return n(jj(this.a), r)
    };
    p.prototype.GetReactionForce = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return n(am(c, a), r)
    };
    p.prototype.GetReactionTorque = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return Uj(c, a)
    };
    p.prototype.GetNext = function () {
        return n(gt(this.a), p)
    };
    p.prototype.GetUserData = function () {
        return cl(this.a)
    };
    p.prototype.SetUserData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Xf(c, a)
    };
    p.prototype.IsActive = function () {
        return !!Lu(this.a)
    };
    p.prototype.GetCollideConnected = function () {
        return !!kf(this.a)
    };
    p.prototype.Dump = function () {
        tw(this.a)
    };

    function px() {
        throw "cannot construct a b2RayCastCallback, no constructor in IDL";
    }
    px.prototype = Object.create(h.prototype);
    px.prototype.constructor = px;
    px.prototype.b = px;
    px.c = {};
    b.b2RayCastCallback = px;
    px.prototype.__destroy__ = function () {
        zh(this.a)
    };

    function qx() {
        throw "cannot construct a b2ContactListener, no constructor in IDL";
    }
    qx.prototype = Object.create(h.prototype);
    qx.prototype.constructor = qx;
    qx.prototype.b = qx;
    qx.c = {};
    b.b2ContactListener = qx;
    qx.prototype.__destroy__ = function () {
        So(this.a)
    };

    function rx() {
        throw "cannot construct a b2QueryCallback, no constructor in IDL";
    }
    rx.prototype = Object.create(h.prototype);
    rx.prototype.constructor = rx;
    rx.prototype.b = rx;
    rx.c = {};
    b.b2QueryCallback = rx;
    rx.prototype.__destroy__ = function () {
        vt(this.a)
    };

    function t() {
        this.a = cn();
        k(t)[this.a] = this
    }
    t.prototype = Object.create(h.prototype);
    t.prototype.constructor = t;
    t.prototype.b = t;
    t.c = {};
    b.b2JointDef = t;
    t.prototype.get_type = function () {
        return $t(this.a)
    };
    t.prototype.set_type = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        ku(c, a)
    };
    t.prototype.get_userData = function () {
        return Tm(this.a)
    };
    t.prototype.set_userData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        lq(c, a)
    };
    t.prototype.get_bodyA = function () {
        return n(Fr(this.a), q)
    };
    t.prototype.set_bodyA = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Dk(c, a)
    };
    t.prototype.get_bodyB = function () {
        return n(fn(this.a), q)
    };
    t.prototype.set_bodyB = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        qr(c, a)
    };
    t.prototype.get_collideConnected = function () {
        return !!gd(this.a)
    };
    t.prototype.set_collideConnected = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        yk(c, a)
    };
    t.prototype.__destroy__ = function () {
        We(this.a)
    };

    function sx() {
        throw "cannot construct a b2Shape, no constructor in IDL";
    }
    sx.prototype = Object.create(h.prototype);
    sx.prototype.constructor = sx;
    sx.prototype.b = sx;
    sx.c = {};
    b.b2Shape = sx;
    sx.prototype.GetType = function () {
        return Xn(this.a)
    };
    sx.prototype.GetChildCount = function () {
        return rw(this.a)
    };
    sx.prototype.TestPoint = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        return !!Dr(d, a, c)
    };
    sx.prototype.RayCast = function (a, c, d, e) {
        var g = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        e && "object" === typeof e && (e = e.a);
        return !!bd(g, a, c, d, e)
    };
    sx.prototype.ComputeAABB = function (a, c, d) {
        var e = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        Yb(e, a, c, d)
    };
    sx.prototype.ComputeMass = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        Cw(d, a, c)
    };
    sx.prototype.get_m_type = function () {
        return lk(this.a)
    };
    sx.prototype.set_m_type = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        ys(c, a)
    };
    sx.prototype.get_m_radius = function () {
        return Nu(this.a)
    };
    sx.prototype.set_m_radius = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        tf(c, a)
    };
    sx.prototype.__destroy__ = function () {
        $l(this.a)
    };

    function tx() {
        throw "cannot construct a b2ContactFilter, no constructor in IDL";
    }
    tx.prototype = Object.create(h.prototype);
    tx.prototype.constructor = tx;
    tx.prototype.b = tx;
    tx.c = {};
    b.b2ContactFilter = tx;
    tx.prototype.__destroy__ = function () {
        Uf(this.a)
    };

    function ux() {
        this.a = Qe();
        k(ux)[this.a] = this
    }
    ux.prototype = Object.create(nx.prototype);
    ux.prototype.constructor = ux;
    ux.prototype.b = ux;
    ux.c = {};
    b.JSDestructionListener = ux;
    ux.prototype.SayGoodbyeJoint = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Zl(c, a)
    };
    ux.prototype.SayGoodbyeFixture = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        eq(c, a)
    };
    ux.prototype.__destroy__ = function () {
        Gs(this.a)
    };

    function vx() {
        throw "cannot construct a b2ContactImpulse, no constructor in IDL";
    }
    vx.prototype = Object.create(h.prototype);
    vx.prototype.constructor = vx;
    vx.prototype.b = vx;
    vx.c = {};
    b.b2ContactImpulse = vx;
    vx.prototype.get_count = function () {
        return En(this.a)
    };
    vx.prototype.set_count = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Xg(c, a)
    };
    vx.prototype.__destroy__ = function () {
        Le(this.a)
    };

    function u() {
        throw "cannot construct a b2DistanceJoint, no constructor in IDL";
    }
    u.prototype = Object.create(p.prototype);
    u.prototype.constructor = u;
    u.prototype.b = u;
    u.c = {};
    b.b2DistanceJoint = u;
    u.prototype.GetLocalAnchorA = function () {
        return n(ne(this.a), r)
    };
    u.prototype.GetLocalAnchorB = function () {
        return n(Xh(this.a), r)
    };
    u.prototype.SetLength = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Kv(c, a)
    };
    u.prototype.GetLength = function () {
        return ek(this.a)
    };
    u.prototype.SetFrequency = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Vg(c, a)
    };
    u.prototype.GetFrequency = function () {
        return Rl(this.a)
    };
    u.prototype.SetDampingRatio = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Ce(c, a)
    };
    u.prototype.GetDampingRatio = function () {
        return mh(this.a)
    };
    u.prototype.GetType = function () {
        return Ik(this.a)
    };
    u.prototype.GetBodyA = function () {
        return n(Hw(this.a), q)
    };
    u.prototype.GetBodyB = function () {
        return n(Ue(this.a), q)
    };
    u.prototype.GetAnchorA = function () {
        return n(Qc(this.a), r)
    };
    u.prototype.GetAnchorB = function () {
        return n(Hg(this.a), r)
    };
    u.prototype.GetReactionForce = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return n(gn(c, a), r)
    };
    u.prototype.GetReactionTorque = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return Rs(c, a)
    };
    u.prototype.GetNext = function () {
        return n(ke(this.a), p)
    };
    u.prototype.GetUserData = function () {
        return Kd(this.a)
    };
    u.prototype.SetUserData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Yf(c, a)
    };
    u.prototype.IsActive = function () {
        return !!Dg(this.a)
    };
    u.prototype.GetCollideConnected = function () {
        return !!Ft(this.a)
    };
    u.prototype.__destroy__ = function () {
        Yk(this.a)
    };

    function wx(a, c, d) {
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        this.a = void 0 === a ? pg() : void 0 === c ? _emscripten_bind_b2Mat33_b2Mat33_1(a) : void 0 === d ? _emscripten_bind_b2Mat33_b2Mat33_2(a, c) : Yt(a, c, d);
        k(wx)[this.a] = this
    }
    wx.prototype = Object.create(h.prototype);
    wx.prototype.constructor = wx;
    wx.prototype.b = wx;
    wx.c = {};
    b.b2Mat33 = wx;
    wx.prototype.SetZero = function () {
        Fu(this.a)
    };
    wx.prototype.Solve33 = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return n(mp(c, a), xx)
    };
    wx.prototype.Solve22 = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return n(Sf(c, a), r)
    };
    wx.prototype.GetInverse22 = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Lm(c, a)
    };
    wx.prototype.GetSymInverse33 = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        sl(c, a)
    };
    wx.prototype.get_ex = function () {
        return n(Rg(this.a), xx)
    };
    wx.prototype.set_ex = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Nt(c, a)
    };
    wx.prototype.get_ey = function () {
        return n(Ic(this.a), xx)
    };
    wx.prototype.set_ey = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Lc(c, a)
    };
    wx.prototype.get_ez = function () {
        return n(cf(this.a), xx)
    };
    wx.prototype.set_ez = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        ou(c, a)
    };
    wx.prototype.__destroy__ = function () {
        dd(this.a)
    };

    function v() {
        throw "cannot construct a b2Fixture, no constructor in IDL";
    }
    v.prototype = Object.create(h.prototype);
    v.prototype.constructor = v;
    v.prototype.b = v;
    v.c = {};
    b.b2Fixture = v;
    v.prototype.GetType = function () {
        return Kk(this.a)
    };
    v.prototype.GetShape = function () {
        return n(gv(this.a), sx)
    };
    v.prototype.SetSensor = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        gw(c, a)
    };
    v.prototype.IsSensor = function () {
        return !!xv(this.a)
    };
    v.prototype.SetFilterData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        iq(c, a)
    };
    v.prototype.GetFilterData = function () {
        return n(dt(this.a), yx)
    };
    v.prototype.Refilter = function () {
        ro(this.a)
    };
    v.prototype.GetBody = function () {
        return n(Wg(this.a), q)
    };
    v.prototype.GetNext = function () {
        return n(Au(this.a), v)
    };
    v.prototype.GetUserData = function () {
        return Fl(this.a)
    };
    v.prototype.SetUserData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        $i(c, a)
    };
    v.prototype.TestPoint = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return !!rl(c, a)
    };
    v.prototype.RayCast = function (a, c, d) {
        var e = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        return !!Ck(e, a, c, d)
    };
    v.prototype.GetMassData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Xw(c, a)
    };
    v.prototype.SetDensity = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        ch(c, a)
    };
    v.prototype.GetDensity = function () {
        return Cp(this.a)
    };
    v.prototype.GetFriction = function () {
        return zu(this.a)
    };
    v.prototype.SetFriction = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Eo(c, a)
    };
    v.prototype.GetRestitution = function () {
        return pe(this.a)
    };
    v.prototype.SetRestitution = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Kt(c, a)
    };
    v.prototype.GetAABB = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return n(qn(c, a), zx)
    };
    v.prototype.Dump = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Qm(c, a)
    };
    v.prototype.__destroy__ = function () {
        pc(this.a)
    };

    function yx() {
        this.a = Od();
        k(yx)[this.a] = this
    }
    yx.prototype = Object.create(h.prototype);
    yx.prototype.constructor = yx;
    yx.prototype.b = yx;
    yx.c = {};
    b.b2Filter = yx;
    yx.prototype.get_categoryBits = function () {
        return Bm(this.a)
    };
    yx.prototype.set_categoryBits = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Bl(c, a)
    };
    yx.prototype.get_maskBits = function () {
        return Mo(this.a)
    };
    yx.prototype.set_maskBits = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Yr(c, a)
    };
    yx.prototype.get_groupIndex = function () {
        return Ye(this.a)
    };
    yx.prototype.set_groupIndex = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        bn(c, a)
    };
    yx.prototype.__destroy__ = function () {
        Mn(this.a)
    };

    function Ax() {
        this.a = id();
        k(Ax)[this.a] = this
    }
    Ax.prototype = Object.create(rx.prototype);
    Ax.prototype.constructor = Ax;
    Ax.prototype.b = Ax;
    Ax.c = {};
    b.JSQueryCallback = Ax;
    Ax.prototype.ReportFixture = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return !!au(c, a)
    };
    Ax.prototype.__destroy__ = function () {
        qo(this.a)
    };

    function w() {
        throw "cannot construct a b2MouseJoint, no constructor in IDL";
    }
    w.prototype = Object.create(p.prototype);
    w.prototype.constructor = w;
    w.prototype.b = w;
    w.c = {};
    b.b2MouseJoint = w;
    w.prototype.SetTarget = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        jg(c, a)
    };
    w.prototype.GetTarget = function () {
        return n(po(this.a), r)
    };
    w.prototype.SetMaxForce = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        jq(c, a)
    };
    w.prototype.GetMaxForce = function () {
        return ig(this.a)
    };
    w.prototype.SetFrequency = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        xl(c, a)
    };
    w.prototype.GetFrequency = function () {
        return Xo(this.a)
    };
    w.prototype.SetDampingRatio = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        mk(c, a)
    };
    w.prototype.GetDampingRatio = function () {
        return Lr(this.a)
    };
    w.prototype.GetType = function () {
        return oo(this.a)
    };
    w.prototype.GetBodyA = function () {
        return n(Bo(this.a), q)
    };
    w.prototype.GetBodyB = function () {
        return n(Ti(this.a), q)
    };
    w.prototype.GetAnchorA = function () {
        return n(eu(this.a), r)
    };
    w.prototype.GetAnchorB = function () {
        return n(Jq(this.a), r)
    };
    w.prototype.GetReactionForce = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return n(tv(c, a), r)
    };
    w.prototype.GetReactionTorque = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return Sn(c, a)
    };
    w.prototype.GetNext = function () {
        return n(li(this.a), p)
    };
    w.prototype.GetUserData = function () {
        return sq(this.a)
    };
    w.prototype.SetUserData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        xt(c, a)
    };
    w.prototype.IsActive = function () {
        return !!$b(this.a)
    };
    w.prototype.GetCollideConnected = function () {
        return !!Jc(this.a)
    };
    w.prototype.__destroy__ = function () {
        Pv(this.a)
    };

    function Bx(a) {
        a && "object" === typeof a && (a = a.a);
        this.a = void 0 === a ? ko() : lo(a);
        k(Bx)[this.a] = this
    }
    Bx.prototype = Object.create(h.prototype);
    Bx.prototype.constructor = Bx;
    Bx.prototype.b = Bx;
    Bx.c = {};
    b.b2Rot = Bx;
    Bx.prototype.Set = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Of(c, a)
    };
    Bx.prototype.SetIdentity = function () {
        pq(this.a)
    };
    Bx.prototype.GetAngle = function () {
        return up(this.a)
    };
    Bx.prototype.GetXAxis = function () {
        return n(og(this.a), r)
    };
    Bx.prototype.GetYAxis = function () {
        return n(er(this.a), r)
    };
    Bx.prototype.get_s = function () {
        return Hp(this.a)
    };
    Bx.prototype.set_s = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Ej(c, a)
    };
    Bx.prototype.get_c = function () {
        return gq(this.a)
    };
    Bx.prototype.set_c = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        dn(c, a)
    };
    Bx.prototype.__destroy__ = function () {
        Lo(this.a)
    };

    function x() {
        throw "cannot construct a b2MotorJoint, no constructor in IDL";
    }
    x.prototype = Object.create(p.prototype);
    x.prototype.constructor = x;
    x.prototype.b = x;
    x.c = {};
    b.b2MotorJoint = x;
    x.prototype.SetLinearOffset = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Cv(c, a)
    };
    x.prototype.GetLinearOffset = function () {
        return n(yp(this.a), r)
    };
    x.prototype.SetAngularOffset = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        xp(c, a)
    };
    x.prototype.GetAngularOffset = function () {
        return lv(this.a)
    };
    x.prototype.SetMaxForce = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Wo(c, a)
    };
    x.prototype.GetMaxForce = function () {
        return lj(this.a)
    };
    x.prototype.SetMaxTorque = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        td(c, a)
    };
    x.prototype.GetMaxTorque = function () {
        return Pr(this.a)
    };
    x.prototype.SetCorrectionFactor = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Ad(c, a)
    };
    x.prototype.GetCorrectionFactor = function () {
        return cq(this.a)
    };
    x.prototype.GetType = function () {
        return Oq(this.a)
    };
    x.prototype.GetBodyA = function () {
        return n(Fh(this.a), q)
    };
    x.prototype.GetBodyB = function () {
        return n(Dh(this.a), q)
    };
    x.prototype.GetAnchorA = function () {
        return n(Bp(this.a), r)
    };
    x.prototype.GetAnchorB = function () {
        return n(fv(this.a), r)
    };
    x.prototype.GetReactionForce = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return n(tp(c, a), r)
    };
    x.prototype.GetReactionTorque = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return lf(c, a)
    };
    x.prototype.GetNext = function () {
        return n(aw(this.a), p)
    };
    x.prototype.GetUserData = function () {
        return jk(this.a)
    };
    x.prototype.SetUserData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Bh(c, a)
    };
    x.prototype.IsActive = function () {
        return !!Rn(this.a)
    };
    x.prototype.GetCollideConnected = function () {
        return !!Ae(this.a)
    };
    x.prototype.__destroy__ = function () {
        zk(this.a)
    };

    function y() {
        throw "cannot construct a b2Profile, no constructor in IDL";
    }
    y.prototype = Object.create(h.prototype);
    y.prototype.constructor = y;
    y.prototype.b = y;
    y.c = {};
    b.b2Profile = y;
    y.prototype.get_step = function () {
        return bk(this.a)
    };
    y.prototype.set_step = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Ei(c, a)
    };
    y.prototype.get_collide = function () {
        return lt(this.a)
    };
    y.prototype.set_collide = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Av(c, a)
    };
    y.prototype.get_solve = function () {
        return dq(this.a)
    };
    y.prototype.set_solve = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Vs(c, a)
    };
    y.prototype.get_solveInit = function () {
        return wv(this.a)
    };
    y.prototype.set_solveInit = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Nk(c, a)
    };
    y.prototype.get_solveVelocity = function () {
        return Rv(this.a)
    };
    y.prototype.set_solveVelocity = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        $m(c, a)
    };
    y.prototype.get_solvePosition = function () {
        return ad(this.a)
    };
    y.prototype.set_solvePosition = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Tf(c, a)
    };
    y.prototype.get_broadphase = function () {
        return Mc(this.a)
    };
    y.prototype.set_broadphase = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Cn(c, a)
    };
    y.prototype.get_solveTOI = function () {
        return Fg(this.a)
    };
    y.prototype.set_solveTOI = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Jh(c, a)
    };
    y.prototype.__destroy__ = function () {
        Tg(this.a)
    };

    function Cx() {
        throw "cannot construct a VoidPtr, no constructor in IDL";
    }
    Cx.prototype = Object.create(h.prototype);
    Cx.prototype.constructor = Cx;
    Cx.prototype.b = Cx;
    Cx.c = {};
    b.VoidPtr = Cx;
    Cx.prototype.__destroy__ = function () {
        hp(this.a)
    };

    function z() {
        this.a = nw();
        k(z)[this.a] = this
    }
    z.prototype = Object.create(h.prototype);
    z.prototype.constructor = z;
    z.prototype.b = z;
    z.c = {};
    b.b2BodyDef = z;
    z.prototype.get_type = function () {
        return Km(this.a)
    };
    z.prototype.set_type = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        vc(c, a)
    };
    z.prototype.get_position = function () {
        return n(Bc(this.a), r)
    };
    z.prototype.set_position = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        md(c, a)
    };
    z.prototype.get_angle = function () {
        return Tt(this.a)
    };
    z.prototype.set_angle = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        ll(c, a)
    };
    z.prototype.get_linearVelocity = function () {
        return n(av(this.a), r)
    };
    z.prototype.set_linearVelocity = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        xk(c, a)
    };
    z.prototype.get_angularVelocity = function () {
        return ee(this.a)
    };
    z.prototype.set_angularVelocity = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        um(c, a)
    };
    z.prototype.get_linearDamping = function () {
        return Yj(this.a)
    };
    z.prototype.set_linearDamping = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Br(c, a)
    };
    z.prototype.get_angularDamping = function () {
        return Rq(this.a)
    };
    z.prototype.set_angularDamping = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Wp(c, a)
    };
    z.prototype.get_allowSleep = function () {
        return !!Pi(this.a)
    };
    z.prototype.set_allowSleep = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Bi(c, a)
    };
    z.prototype.get_awake = function () {
        return !!Co(this.a)
    };
    z.prototype.set_awake = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        zl(c, a)
    };
    z.prototype.get_fixedRotation = function () {
        return !!On(this.a)
    };
    z.prototype.set_fixedRotation = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        qk(c, a)
    };
    z.prototype.get_bullet = function () {
        return !!af(this.a)
    };
    z.prototype.set_bullet = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Um(c, a)
    };
    z.prototype.get_active = function () {
        return !!cj(this.a)
    };
    z.prototype.set_active = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Oj(c, a)
    };
    z.prototype.get_userData = function () {
        return Bv(this.a)
    };
    z.prototype.set_userData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Ir(c, a)
    };
    z.prototype.get_gravityScale = function () {
        return of(this.a)
    };
    z.prototype.set_gravityScale = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Yd(c, a)
    };
    z.prototype.__destroy__ = function () {
        ns(this.a)
    };

    function Dx() {
        this.a = Bf();
        k(Dx)[this.a] = this
    }
    Dx.prototype = Object.create(px.prototype);
    Dx.prototype.constructor = Dx;
    Dx.prototype.b = Dx;
    Dx.c = {};
    b.JSRayCastCallback = Dx;
    Dx.prototype.ReportFixture = function (a, c, d, e) {
        var g = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        e && "object" === typeof e && (e = e.a);
        return Ke(g, a, c, d, e)
    };
    Dx.prototype.__destroy__ = function () {
        Ro(this.a)
    };

    function Ex() {
        throw "cannot construct a b2ContactFeature, no constructor in IDL";
    }
    Ex.prototype = Object.create(h.prototype);
    Ex.prototype.constructor = Ex;
    Ex.prototype.b = Ex;
    Ex.c = {};
    b.b2ContactFeature = Ex;
    Ex.prototype.get_indexA = function () {
        return Lg(this.a)
    };
    Ex.prototype.set_indexA = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        vv(c, a)
    };
    Ex.prototype.get_indexB = function () {
        return El(this.a)
    };
    Ex.prototype.set_indexB = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Zq(c, a)
    };
    Ex.prototype.get_typeA = function () {
        return Hl(this.a)
    };
    Ex.prototype.set_typeA = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Pm(c, a)
    };
    Ex.prototype.get_typeB = function () {
        return rp(this.a)
    };
    Ex.prototype.set_typeB = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Nr(c, a)
    };
    Ex.prototype.__destroy__ = function () {
        Op(this.a)
    };

    function r(a, c) {
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        this.a = void 0 === a ? Gg() : void 0 === c ? _emscripten_bind_b2Vec2_b2Vec2_1(a) : rk(a, c);
        k(r)[this.a] = this
    }
    r.prototype = Object.create(h.prototype);
    r.prototype.constructor = r;
    r.prototype.b = r;
    r.c = {};
    b.b2Vec2 = r;
    r.prototype.SetZero = function () {
        nr(this.a)
    };
    r.prototype.Set = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        Ep(d, a, c)
    };
    r.prototype.op_add = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        hf(c, a)
    };
    r.prototype.op_sub = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Jg(c, a)
    };
    r.prototype.op_mul = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Hi(c, a)
    };
    r.prototype.Length = function () {
        return mr(this.a)
    };
    r.prototype.LengthSquared = function () {
        return yw(this.a)
    };
    r.prototype.Normalize = function () {
        return xf(this.a)
    };
    r.prototype.IsValid = function () {
        return !!ap(this.a)
    };
    r.prototype.Skew = function () {
        return n(Kr(this.a), r)
    };
    r.prototype.get_x = function () {
        return xi(this.a)
    };
    r.prototype.set_x = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Uu(c, a)
    };
    r.prototype.get_y = function () {
        return Al(this.a)
    };
    r.prototype.set_y = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Ks(c, a)
    };
    r.prototype.__destroy__ = function () {
        Xu(this.a)
    };

    function xx(a, c, d) {
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        this.a = void 0 === a ? Wk() : void 0 === c ? _emscripten_bind_b2Vec3_b2Vec3_1(a) : void 0 === d ? _emscripten_bind_b2Vec3_b2Vec3_2(a, c) : gl(a, c, d);
        k(xx)[this.a] = this
    }
    xx.prototype = Object.create(h.prototype);
    xx.prototype.constructor = xx;
    xx.prototype.b = xx;
    xx.c = {};
    b.b2Vec3 = xx;
    xx.prototype.SetZero = function () {
        pf(this.a)
    };
    xx.prototype.Set = function (a, c, d) {
        var e = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        pj(e, a, c, d)
    };
    xx.prototype.op_add = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        gg(c, a)
    };
    xx.prototype.op_sub = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Vn(c, a)
    };
    xx.prototype.op_mul = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        iv(c, a)
    };
    xx.prototype.get_x = function () {
        return Xc(this.a)
    };
    xx.prototype.set_x = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Xl(c, a)
    };
    xx.prototype.get_y = function () {
        return Zt(this.a)
    };
    xx.prototype.set_y = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Vp(c, a)
    };
    xx.prototype.get_z = function () {
        return Am(this.a)
    };
    xx.prototype.set_z = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Pl(c, a)
    };
    xx.prototype.__destroy__ = function () {
        gh(this.a)
    };

    function zx() {
        this.a = Do();
        k(zx)[this.a] = this
    }
    zx.prototype = Object.create(h.prototype);
    zx.prototype.constructor = zx;
    zx.prototype.b = zx;
    zx.c = {};
    b.b2AABB = zx;
    zx.prototype.IsValid = function () {
        return !!Yn(this.a)
    };
    zx.prototype.GetCenter = function () {
        return n(Lh(this.a), r)
    };
    zx.prototype.GetExtents = function () {
        return n(eh(this.a), r)
    };
    zx.prototype.GetPerimeter = function () {
        return Pg(this.a)
    };
    zx.prototype.Combine = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        void 0 === c ? Xp(d, a) : Ni(d, a, c)
    };
    zx.prototype.Contains = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return !!je(c, a)
    };
    zx.prototype.RayCast = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        return !!ck(d, a, c)
    };
    zx.prototype.get_lowerBound = function () {
        return n(ae(this.a), r)
    };
    zx.prototype.set_lowerBound = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        hq(c, a)
    };
    zx.prototype.get_upperBound = function () {
        return n(se(this.a), r)
    };
    zx.prototype.set_upperBound = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Je(c, a)
    };
    zx.prototype.__destroy__ = function () {
        Jn(this.a)
    };

    function Fx() {
        this.a = Ij();
        k(Fx)[this.a] = this
    }
    Fx.prototype = Object.create(h.prototype);
    Fx.prototype.constructor = Fx;
    Fx.prototype.b = Fx;
    Fx.c = {};
    b.b2FixtureDef = Fx;
    Fx.prototype.get_shape = function () {
        return n(Ut(this.a), sx)
    };
    Fx.prototype.set_shape = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Yg(c, a)
    };
    Fx.prototype.get_userData = function () {
        return Jd(this.a)
    };
    Fx.prototype.set_userData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        mc(c, a)
    };
    Fx.prototype.get_friction = function () {
        return st(this.a)
    };
    Fx.prototype.set_friction = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        bm(c, a)
    };
    Fx.prototype.get_restitution = function () {
        return Jk(this.a)
    };
    Fx.prototype.set_restitution = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Gc(c, a)
    };
    Fx.prototype.get_density = function () {
        return Bd(this.a)
    };
    Fx.prototype.set_density = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Ws(c, a)
    };
    Fx.prototype.get_isSensor = function () {
        return !!If(this.a)
    };
    Fx.prototype.set_isSensor = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Qj(c, a)
    };
    Fx.prototype.get_filter = function () {
        return n(jc(this.a), yx)
    };
    Fx.prototype.set_filter = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        vh(c, a)
    };
    Fx.prototype.__destroy__ = function () {
        Ov(this.a)
    };

    function A() {
        this.a = Tk();
        k(A)[this.a] = this
    }
    A.prototype = Object.create(t.prototype);
    A.prototype.constructor = A;
    A.prototype.b = A;
    A.c = {};
    b.b2FrictionJointDef = A;
    A.prototype.Initialize = function (a, c, d) {
        var e = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        Sr(e, a, c, d)
    };
    A.prototype.get_localAnchorA = function () {
        return n(Ze(this.a), r)
    };
    A.prototype.set_localAnchorA = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        zf(c, a)
    };
    A.prototype.get_localAnchorB = function () {
        return n(Me(this.a), r)
    };
    A.prototype.set_localAnchorB = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        rj(c, a)
    };
    A.prototype.get_maxForce = function () {
        return tm(this.a)
    };
    A.prototype.set_maxForce = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Im(c, a)
    };
    A.prototype.get_maxTorque = function () {
        return hd(this.a)
    };
    A.prototype.set_maxTorque = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        ps(c, a)
    };
    A.prototype.get_type = function () {
        return kc(this.a)
    };
    A.prototype.set_type = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Rr(c, a)
    };
    A.prototype.get_userData = function () {
        return yh(this.a)
    };
    A.prototype.set_userData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Zb(c, a)
    };
    A.prototype.get_bodyA = function () {
        return n(qu(this.a), q)
    };
    A.prototype.set_bodyA = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        zw(c, a)
    };
    A.prototype.get_bodyB = function () {
        return n(mf(this.a), q)
    };
    A.prototype.set_bodyB = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Iq(c, a)
    };
    A.prototype.get_collideConnected = function () {
        return !!Tr(this.a)
    };
    A.prototype.set_collideConnected = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Ld(c, a)
    };
    A.prototype.__destroy__ = function () {
        Nh(this.a)
    };

    function Gx() {
        this.a = wq();
        k(Gx)[this.a] = this
    }
    Gx.prototype = Object.create(h.prototype);
    Gx.prototype.constructor = Gx;
    Gx.prototype.b = Gx;
    Gx.c = {};
    b.b2Manifold = Gx;
    Gx.prototype.get_localNormal = function () {
        return n(Vk(this.a), r)
    };
    Gx.prototype.set_localNormal = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Er(c, a)
    };
    Gx.prototype.get_localPoint = function () {
        return n(ni(this.a), r)
    };
    Gx.prototype.set_localPoint = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Sm(c, a)
    };
    Gx.prototype.get_type = function () {
        return sk(this.a)
    };
    Gx.prototype.set_type = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        fl(c, a)
    };
    Gx.prototype.get_pointCount = function () {
        return Ef(this.a)
    };
    Gx.prototype.set_pointCount = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        $k(c, a)
    };
    Gx.prototype.__destroy__ = function () {
        ug(this.a)
    };

    function Hx() {
        this.a = Dc();
        k(Hx)[this.a] = this
    }
    Hx.prototype = Object.create(h.prototype);
    Hx.prototype.constructor = Hx;
    Hx.prototype.b = Hx;
    Hx.c = {};
    b.b2WorldManifold = Hx;
    Hx.prototype.Initialize = function (a, c, d, e, g) {
        var l = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        e && "object" === typeof e && (e = e.a);
        g && "object" === typeof g && (g = g.a);
        Ll(l, a, c, d, e, g)
    };
    Hx.prototype.get_normal = function () {
        return n(gu(this.a), r)
    };
    Hx.prototype.set_normal = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        ok(c, a)
    };
    Hx.prototype.get_points = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return n(dl(c, a), r)
    };
    Hx.prototype.set_points = function (a, c) {
        var d = this.a;
        mx();
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        Kj(d, a, c)
    };
    Hx.prototype.get_separations = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return pw(c, a)
    };
    Hx.prototype.set_separations = function (a, c) {
        var d = this.a;
        mx();
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        hk(d, a, c)
    };
    Hx.prototype.__destroy__ = function () {
        Vm(this.a)
    };

    function B() {
        this.a = bj();
        k(B)[this.a] = this
    }
    B.prototype = Object.create(t.prototype);
    B.prototype.constructor = B;
    B.prototype.b = B;
    B.c = {};
    b.b2PrismaticJointDef = B;
    B.prototype.Initialize = function (a, c, d, e) {
        var g = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        e && "object" === typeof e && (e = e.a);
        Jf(g, a, c, d, e)
    };
    B.prototype.get_localAnchorA = function () {
        return n(Ii(this.a), r)
    };
    B.prototype.set_localAnchorA = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        tt(c, a)
    };
    B.prototype.get_localAnchorB = function () {
        return n(Fe(this.a), r)
    };
    B.prototype.set_localAnchorB = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        To(c, a)
    };
    B.prototype.get_localAxisA = function () {
        return n(Iu(this.a), r)
    };
    B.prototype.set_localAxisA = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Pu(c, a)
    };
    B.prototype.get_referenceAngle = function () {
        return ce(this.a)
    };
    B.prototype.set_referenceAngle = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        th(c, a)
    };
    B.prototype.get_enableLimit = function () {
        return !!bt(this.a)
    };
    B.prototype.set_enableLimit = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Ql(c, a)
    };
    B.prototype.get_lowerTranslation = function () {
        return Md(this.a)
    };
    B.prototype.set_lowerTranslation = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        kd(c, a)
    };
    B.prototype.get_upperTranslation = function () {
        return Dd(this.a)
    };
    B.prototype.set_upperTranslation = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        wl(c, a)
    };
    B.prototype.get_enableMotor = function () {
        return !!Es(this.a)
    };
    B.prototype.set_enableMotor = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Jr(c, a)
    };
    B.prototype.get_maxMotorForce = function () {
        return Gw(this.a)
    };
    B.prototype.set_maxMotorForce = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        qv(c, a)
    };
    B.prototype.get_motorSpeed = function () {
        return Wb(this.a)
    };
    B.prototype.set_motorSpeed = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Pn(c, a)
    };
    B.prototype.get_type = function () {
        return Mw(this.a)
    };
    B.prototype.set_type = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Kh(c, a)
    };
    B.prototype.get_userData = function () {
        return kj(this.a)
    };
    B.prototype.set_userData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Qr(c, a)
    };
    B.prototype.get_bodyA = function () {
        return n(es(this.a), q)
    };
    B.prototype.set_bodyA = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        bp(c, a)
    };
    B.prototype.get_bodyB = function () {
        return n(Pk(this.a), q)
    };
    B.prototype.set_bodyB = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Sk(c, a)
    };
    B.prototype.get_collideConnected = function () {
        return !!Sl(this.a)
    };
    B.prototype.set_collideConnected = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        rn(c, a)
    };
    B.prototype.__destroy__ = function () {
        ge(this.a)
    };

    function C(a) {
        a && "object" === typeof a && (a = a.a);
        this.a = Zh(a);
        k(C)[this.a] = this
    }
    C.prototype = Object.create(h.prototype);
    C.prototype.constructor = C;
    C.prototype.b = C;
    C.c = {};
    b.b2World = C;
    C.prototype.SetDestructionListener = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Gv(c, a)
    };
    C.prototype.SetContactFilter = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        uw(c, a)
    };
    C.prototype.SetContactListener = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        wd(c, a)
    };
    C.prototype.SetDebugDraw = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        uf(c, a)
    };
    C.prototype.CreateBody = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return n(Go(c, a), q)
    };
    C.prototype.DestroyBody = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        $c(c, a)
    };
    C.prototype.CreateJoint = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return n(xg(c, a), p)
    };
    C.prototype.DestroyJoint = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        pr(c, a)
    };
    C.prototype.Step = function (a, c, d) {
        var e = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        Zj(e, a, c, d)
    };
    C.prototype.ClearForces = function () {
        fh(this.a)
    };
    C.prototype.DrawDebugData = function () {
        Ym(this.a)
    };
    C.prototype.QueryAABB = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        zv(d, a, c)
    };
    C.prototype.RayCast = function (a, c, d) {
        var e = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        it(e, a, c, d)
    };
    C.prototype.GetBodyList = function () {
        return n(et(this.a), q)
    };
    C.prototype.GetJointList = function () {
        return n(yr(this.a), p)
    };
    C.prototype.GetContactList = function () {
        return n(nu(this.a), E)
    };
    C.prototype.SetAllowSleeping = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        vp(c, a)
    };
    C.prototype.GetAllowSleeping = function () {
        return !!fi(this.a)
    };
    C.prototype.SetWarmStarting = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        rc(c, a)
    };
    C.prototype.GetWarmStarting = function () {
        return !!cp(this.a)
    };
    C.prototype.SetContinuousPhysics = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Em(c, a)
    };
    C.prototype.GetContinuousPhysics = function () {
        return !!Tv(this.a)
    };
    C.prototype.SetSubStepping = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        gf(c, a)
    };
    C.prototype.GetSubStepping = function () {
        return !!dr(this.a)
    };
    C.prototype.GetProxyCount = function () {
        return sd(this.a)
    };
    C.prototype.GetBodyCount = function () {
        return em(this.a)
    };
    C.prototype.GetJointCount = function () {
        return Fn(this.a)
    };
    C.prototype.GetContactCount = function () {
        return Pq(this.a)
    };
    C.prototype.GetTreeHeight = function () {
        return as(this.a)
    };
    C.prototype.GetTreeBalance = function () {
        return fc(this.a)
    };
    C.prototype.GetTreeQuality = function () {
        return Xd(this.a)
    };
    C.prototype.SetGravity = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        It(c, a)
    };
    C.prototype.GetGravity = function () {
        return n(Kc(this.a), r)
    };
    C.prototype.IsLocked = function () {
        return !!ac(this.a)
    };
    C.prototype.SetAutoClearForces = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        jd(c, a)
    };
    C.prototype.GetAutoClearForces = function () {
        return !!nk(this.a)
    };
    C.prototype.GetProfile = function () {
        return n(hu(this.a), y)
    };
    C.prototype.Dump = function () {
        Ss(this.a)
    };
    C.prototype.__destroy__ = function () {
        eo(this.a)
    };

    function F() {
        throw "cannot construct a b2PrismaticJoint, no constructor in IDL";
    }
    F.prototype = Object.create(p.prototype);
    F.prototype.constructor = F;
    F.prototype.b = F;
    F.c = {};
    b.b2PrismaticJoint = F;
    F.prototype.GetLocalAnchorA = function () {
        return n(Jl(this.a), r)
    };
    F.prototype.GetLocalAnchorB = function () {
        return n(op(this.a), r)
    };
    F.prototype.GetLocalAxisA = function () {
        return n(Ch(this.a), r)
    };
    F.prototype.GetReferenceAngle = function () {
        return jl(this.a)
    };
    F.prototype.GetJointTranslation = function () {
        return bg(this.a)
    };
    F.prototype.GetJointSpeed = function () {
        return hn(this.a)
    };
    F.prototype.IsLimitEnabled = function () {
        return !!$h(this.a)
    };
    F.prototype.EnableLimit = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        sm(c, a)
    };
    F.prototype.GetLowerLimit = function () {
        return $d(this.a)
    };
    F.prototype.GetUpperLimit = function () {
        return gk(this.a)
    };
    F.prototype.SetLimits = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        Oc(d, a, c)
    };
    F.prototype.IsMotorEnabled = function () {
        return !!al(this.a)
    };
    F.prototype.EnableMotor = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        vl(c, a)
    };
    F.prototype.SetMotorSpeed = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Ls(c, a)
    };
    F.prototype.GetMotorSpeed = function () {
        return eg(this.a)
    };
    F.prototype.SetMaxMotorForce = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Sw(c, a)
    };
    F.prototype.GetMaxMotorForce = function () {
        return $p(this.a)
    };
    F.prototype.GetMotorForce = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return si(c, a)
    };
    F.prototype.GetType = function () {
        return oe(this.a)
    };
    F.prototype.GetBodyA = function () {
        return n(Zp(this.a), q)
    };
    F.prototype.GetBodyB = function () {
        return n(Qt(this.a), q)
    };
    F.prototype.GetAnchorA = function () {
        return n(Zk(this.a), r)
    };
    F.prototype.GetAnchorB = function () {
        return n(im(this.a), r)
    };
    F.prototype.GetReactionForce = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return n(Oh(c, a), r)
    };
    F.prototype.GetReactionTorque = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return Ag(c, a)
    };
    F.prototype.GetNext = function () {
        return n(cs(this.a), p)
    };
    F.prototype.GetUserData = function () {
        return ew(this.a)
    };
    F.prototype.SetUserData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Jj(c, a)
    };
    F.prototype.IsActive = function () {
        return !!zm(this.a)
    };
    F.prototype.GetCollideConnected = function () {
        return !!Cg(this.a)
    };
    F.prototype.__destroy__ = function () {
        Zf(this.a)
    };

    function Ix() {
        throw "cannot construct a b2RayCastOutput, no constructor in IDL";
    }
    Ix.prototype = Object.create(h.prototype);
    Ix.prototype.constructor = Ix;
    Ix.prototype.b = Ix;
    Ix.c = {};
    b.b2RayCastOutput = Ix;
    Ix.prototype.get_normal = function () {
        return n(Ff(this.a), r)
    };
    Ix.prototype.set_normal = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        lh(c, a)
    };
    Ix.prototype.get_fraction = function () {
        return In(this.a)
    };
    Ix.prototype.set_fraction = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Sd(c, a)
    };
    Ix.prototype.__destroy__ = function () {
        Wm(this.a)
    };

    function Jx() {
        throw "cannot construct a b2ContactID, no constructor in IDL";
    }
    Jx.prototype = Object.create(h.prototype);
    Jx.prototype.constructor = Jx;
    Jx.prototype.b = Jx;
    Jx.c = {};
    b.b2ContactID = Jx;
    Jx.prototype.get_cf = function () {
        return n(Ms(this.a), Ex)
    };
    Jx.prototype.set_cf = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        nj(c, a)
    };
    Jx.prototype.get_key = function () {
        return sp(this.a)
    };
    Jx.prototype.set_key = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        vf(c, a)
    };
    Jx.prototype.__destroy__ = function () {
        cm(this.a)
    };

    function Kx() {
        this.a = Uw();
        k(Kx)[this.a] = this
    }
    Kx.prototype = Object.create(qx.prototype);
    Kx.prototype.constructor = Kx;
    Kx.prototype.b = Kx;
    Kx.c = {};
    b.JSContactListener = Kx;
    Kx.prototype.BeginContact = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        vo(c, a)
    };
    Kx.prototype.EndContact = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Vc(c, a)
    };
    Kx.prototype.PreSolve = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        jh(d, a, c)
    };
    Kx.prototype.PostSolve = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        xq(d, a, c)
    };
    Kx.prototype.__destroy__ = function () {
        Xm(this.a)
    };

    function Lx(a, c, d, e) {
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        e && "object" === typeof e && (e = e.a);
        this.a = void 0 === a ? ds() : void 0 === c ? _emscripten_bind_b2Mat22_b2Mat22_1(a) : void 0 === d ? bs(a, c) : void 0 === e ? _emscripten_bind_b2Mat22_b2Mat22_3(a, c, d) : Ou(a, c, d, e);
        k(Lx)[this.a] = this
    }
    Lx.prototype = Object.create(h.prototype);
    Lx.prototype.constructor = Lx;
    Lx.prototype.b = Lx;
    Lx.c = {};
    b.b2Mat22 = Lx;
    Lx.prototype.Set = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        rr(d, a, c)
    };
    Lx.prototype.SetIdentity = function () {
        Ku(this.a)
    };
    Lx.prototype.SetZero = function () {
        dk(this.a)
    };
    Lx.prototype.GetInverse = function () {
        return n(br(this.a), Lx)
    };
    Lx.prototype.Solve = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return n(fp(c, a), r)
    };
    Lx.prototype.get_ex = function () {
        return n(No(this.a), r)
    };
    Lx.prototype.set_ex = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        ir(c, a)
    };
    Lx.prototype.get_ey = function () {
        return n(Ju(this.a), r)
    };
    Lx.prototype.set_ey = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        is(c, a)
    };
    Lx.prototype.__destroy__ = function () {
        cv(this.a)
    };

    function H() {
        this.a = Hu();
        k(H)[this.a] = this
    }
    H.prototype = Object.create(t.prototype);
    H.prototype.constructor = H;
    H.prototype.b = H;
    H.c = {};
    b.b2WheelJointDef = H;
    H.prototype.Initialize = function (a, c, d, e) {
        var g = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        e && "object" === typeof e && (e = e.a);
        gj(g, a, c, d, e)
    };
    H.prototype.get_localAnchorA = function () {
        return n(nl(this.a), r)
    };
    H.prototype.set_localAnchorA = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Re(c, a)
    };
    H.prototype.get_localAnchorB = function () {
        return n(Dn(this.a), r)
    };
    H.prototype.set_localAnchorB = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Ew(c, a)
    };
    H.prototype.get_localAxisA = function () {
        return n(fr(this.a), r)
    };
    H.prototype.set_localAxisA = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        sw(c, a)
    };
    H.prototype.get_enableMotor = function () {
        return !!xw(this.a)
    };
    H.prototype.set_enableMotor = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Lk(c, a)
    };
    H.prototype.get_maxMotorTorque = function () {
        return Ig(this.a)
    };
    H.prototype.set_maxMotorTorque = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        wk(c, a)
    };
    H.prototype.get_motorSpeed = function () {
        return Xr(this.a)
    };
    H.prototype.set_motorSpeed = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Ap(c, a)
    };
    H.prototype.get_frequencyHz = function () {
        return ot(this.a)
    };
    H.prototype.set_frequencyHz = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        cr(c, a)
    };
    H.prototype.get_dampingRatio = function () {
        return Hn(this.a)
    };
    H.prototype.set_dampingRatio = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Zv(c, a)
    };
    H.prototype.get_type = function () {
        return ru(this.a)
    };
    H.prototype.set_type = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Wd(c, a)
    };
    H.prototype.get_userData = function () {
        return Ev(this.a)
    };
    H.prototype.set_userData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        hh(c, a)
    };
    H.prototype.get_bodyA = function () {
        return n(Ow(this.a), q)
    };
    H.prototype.set_bodyA = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Rt(c, a)
    };
    H.prototype.get_bodyB = function () {
        return n(yn(this.a), q)
    };
    H.prototype.set_bodyB = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Yp(c, a)
    };
    H.prototype.get_collideConnected = function () {
        return !!Ec(this.a)
    };
    H.prototype.set_collideConnected = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        xr(c, a)
    };
    H.prototype.__destroy__ = function () {
        nf(this.a)
    };

    function Mx() {
        this.a = ah();
        k(Mx)[this.a] = this
    }
    Mx.prototype = Object.create(sx.prototype);
    Mx.prototype.constructor = Mx;
    Mx.prototype.b = Mx;
    Mx.c = {};
    b.b2CircleShape = Mx;
    Mx.prototype.GetType = function () {
        return rh(this.a)
    };
    Mx.prototype.GetChildCount = function () {
        return $e(this.a)
    };
    Mx.prototype.TestPoint = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        return !!Fq(d, a, c)
    };
    Mx.prototype.RayCast = function (a, c, d, e) {
        var g = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        e && "object" === typeof e && (e = e.a);
        return !!ak(g, a, c, d, e)
    };
    Mx.prototype.ComputeAABB = function (a, c, d) {
        var e = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        $s(e, a, c, d)
    };
    Mx.prototype.ComputeMass = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        Aq(d, a, c)
    };
    Mx.prototype.get_m_p = function () {
        return n(Kg(this.a), r)
    };
    Mx.prototype.set_m_p = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        ej(c, a)
    };
    Mx.prototype.get_m_type = function () {
        return ks(this.a)
    };
    Mx.prototype.set_m_type = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Ge(c, a)
    };
    Mx.prototype.get_m_radius = function () {
        return dg(this.a)
    };
    Mx.prototype.set_m_radius = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        ve(c, a)
    };
    Mx.prototype.__destroy__ = function () {
        Nq(this.a)
    };

    function I() {
        this.a = kw();
        k(I)[this.a] = this
    }
    I.prototype = Object.create(t.prototype);
    I.prototype.constructor = I;
    I.prototype.b = I;
    I.c = {};
    b.b2WeldJointDef = I;
    I.prototype.Initialize = function (a, c, d) {
        var e = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        pt(e, a, c, d)
    };
    I.prototype.get_localAnchorA = function () {
        return n(wt(this.a), r)
    };
    I.prototype.set_localAnchorA = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Di(c, a)
    };
    I.prototype.get_localAnchorB = function () {
        return n(Cu(this.a), r)
    };
    I.prototype.set_localAnchorB = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Ps(c, a)
    };
    I.prototype.get_referenceAngle = function () {
        return lr(this.a)
    };
    I.prototype.set_referenceAngle = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Du(c, a)
    };
    I.prototype.get_frequencyHz = function () {
        return sg(this.a)
    };
    I.prototype.set_frequencyHz = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Hr(c, a)
    };
    I.prototype.get_dampingRatio = function () {
        return oq(this.a)
    };
    I.prototype.set_dampingRatio = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        hj(c, a)
    };
    I.prototype.get_type = function () {
        return Fp(this.a)
    };
    I.prototype.set_type = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        us(c, a)
    };
    I.prototype.get_userData = function () {
        return Wt(this.a)
    };
    I.prototype.set_userData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        np(c, a)
    };
    I.prototype.get_bodyA = function () {
        return n(ev(this.a), q)
    };
    I.prototype.set_bodyA = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Te(c, a)
    };
    I.prototype.get_bodyB = function () {
        return n(Sv(this.a), q)
    };
    I.prototype.set_bodyB = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Iv(c, a)
    };
    I.prototype.get_collideConnected = function () {
        return !!yi(this.a)
    };
    I.prototype.set_collideConnected = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        fd(c, a)
    };
    I.prototype.__destroy__ = function () {
        ep(this.a)
    };

    function Nx() {
        this.a = Up();
        k(Nx)[this.a] = this
    }
    Nx.prototype = Object.create(h.prototype);
    Nx.prototype.constructor = Nx;
    Nx.prototype.b = Nx;
    Nx.c = {};
    b.b2MassData = Nx;
    Nx.prototype.get_mass = function () {
        return ow(this.a)
    };
    Nx.prototype.set_mass = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Wc(c, a)
    };
    Nx.prototype.get_center = function () {
        return n(df(this.a), r)
    };
    Nx.prototype.set_center = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Tq(c, a)
    };
    Nx.prototype.get_I = function () {
        return Wr(this.a)
    };
    Nx.prototype.set_I = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        jt(c, a)
    };
    Nx.prototype.__destroy__ = function () {
        kt(this.a)
    };

    function Ox() {
        throw "cannot construct a b2GearJoint, no constructor in IDL";
    }
    Ox.prototype = Object.create(p.prototype);
    Ox.prototype.constructor = Ox;
    Ox.prototype.b = Ox;
    Ox.c = {};
    b.b2GearJoint = Ox;
    Ox.prototype.GetJoint1 = function () {
        return n(rd(this.a), p)
    };
    Ox.prototype.GetJoint2 = function () {
        return n(Qk(this.a), p)
    };
    Ox.prototype.SetRatio = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Kn(c, a)
    };
    Ox.prototype.GetRatio = function () {
        return Cd(this.a)
    };
    Ox.prototype.GetType = function () {
        return $v(this.a)
    };
    Ox.prototype.GetBodyA = function () {
        return n(qm(this.a), q)
    };
    Ox.prototype.GetBodyB = function () {
        return n(Lq(this.a), q)
    };
    Ox.prototype.GetAnchorA = function () {
        return n(ud(this.a), r)
    };
    Ox.prototype.GetAnchorB = function () {
        return n(xu(this.a), r)
    };
    Ox.prototype.GetReactionForce = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return n(Yi(c, a), r)
    };
    Ox.prototype.GetReactionTorque = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return ed(c, a)
    };
    Ox.prototype.GetNext = function () {
        return n(nv(this.a), p)
    };
    Ox.prototype.GetUserData = function () {
        return ze(this.a)
    };
    Ox.prototype.SetUserData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Ol(c, a)
    };
    Ox.prototype.IsActive = function () {
        return !!ui(this.a)
    };
    Ox.prototype.GetCollideConnected = function () {
        return !!Nd(this.a)
    };
    Ox.prototype.__destroy__ = function () {
        ag(this.a)
    };

    function J() {
        throw "cannot construct a b2WeldJoint, no constructor in IDL";
    }
    J.prototype = Object.create(p.prototype);
    J.prototype.constructor = J;
    J.prototype.b = J;
    J.c = {};
    b.b2WeldJoint = J;
    J.prototype.GetLocalAnchorA = function () {
        return n(Wu(this.a), r)
    };
    J.prototype.GetLocalAnchorB = function () {
        return n(zn(this.a), r)
    };
    J.prototype.SetFrequency = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        ih(c, a)
    };
    J.prototype.GetFrequency = function () {
        return bl(this.a)
    };
    J.prototype.SetDampingRatio = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        fe(c, a)
    };
    J.prototype.GetDampingRatio = function () {
        return Xs(this.a)
    };
    J.prototype.Dump = function () {
        Vo(this.a)
    };
    J.prototype.GetType = function () {
        return Jo(this.a)
    };
    J.prototype.GetBodyA = function () {
        return n(Gf(this.a), q)
    };
    J.prototype.GetBodyB = function () {
        return n(ef(this.a), q)
    };
    J.prototype.GetAnchorA = function () {
        return n(uq(this.a), r)
    };
    J.prototype.GetAnchorB = function () {
        return n(tr(this.a), r)
    };
    J.prototype.GetReactionForce = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return n(Is(c, a), r)
    };
    J.prototype.GetReactionTorque = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return yc(c, a)
    };
    J.prototype.GetNext = function () {
        return n(Io(this.a), p)
    };
    J.prototype.GetUserData = function () {
        return ml(this.a)
    };
    J.prototype.SetUserData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        pi(c, a)
    };
    J.prototype.IsActive = function () {
        return !!tc(this.a)
    };
    J.prototype.GetCollideConnected = function () {
        return !!ar(this.a)
    };
    J.prototype.__destroy__ = function () {
        vq(this.a)
    };

    function Px() {
        this.a = pu();
        k(Px)[this.a] = this
    }
    Px.prototype = Object.create(h.prototype);
    Px.prototype.constructor = Px;
    Px.prototype.b = Px;
    Px.c = {};
    b.b2JointEdge = Px;
    Px.prototype.get_other = function () {
        return n(Vi(this.a), q)
    };
    Px.prototype.set_other = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        yd(c, a)
    };
    Px.prototype.get_joint = function () {
        return n(Mv(this.a), p)
    };
    Px.prototype.set_joint = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        oc(c, a)
    };
    Px.prototype.get_prev = function () {
        return n(fm(this.a), Px)
    };
    Px.prototype.set_prev = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        zg(c, a)
    };
    Px.prototype.get_next = function () {
        return n(zo(this.a), Px)
    };
    Px.prototype.set_next = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        sr(c, a)
    };
    Px.prototype.__destroy__ = function () {
        to(this.a)
    };

    function K() {
        this.a = Sp();
        k(K)[this.a] = this
    }
    K.prototype = Object.create(t.prototype);
    K.prototype.constructor = K;
    K.prototype.b = K;
    K.c = {};
    b.b2PulleyJointDef = K;
    K.prototype.Initialize = function (a, c, d, e, g, l, m) {
        var D = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        e && "object" === typeof e && (e = e.a);
        g && "object" === typeof g && (g = g.a);
        l && "object" === typeof l && (l = l.a);
        m && "object" === typeof m && (m = m.a);
        Wv(D, a, c, d, e, g, l, m)
    };
    K.prototype.get_groundAnchorA = function () {
        return n(kn(this.a), r)
    };
    K.prototype.set_groundAnchorA = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Qw(c, a)
    };
    K.prototype.get_groundAnchorB = function () {
        return n(uj(this.a), r)
    };
    K.prototype.set_groundAnchorB = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        qs(c, a)
    };
    K.prototype.get_localAnchorA = function () {
        return n(Pc(this.a), r)
    };
    K.prototype.set_localAnchorA = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Dq(c, a)
    };
    K.prototype.get_localAnchorB = function () {
        return n(Ot(this.a), r)
    };
    K.prototype.set_localAnchorB = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Hd(c, a)
    };
    K.prototype.get_lengthA = function () {
        return Wl(this.a)
    };
    K.prototype.set_lengthA = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        vg(c, a)
    };
    K.prototype.get_lengthB = function () {
        return oi(this.a)
    };
    K.prototype.set_lengthB = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Ne(c, a)
    };
    K.prototype.get_ratio = function () {
        return Ee(this.a)
    };
    K.prototype.set_ratio = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        yg(c, a)
    };
    K.prototype.get_type = function () {
        return Yl(this.a)
    };
    K.prototype.set_type = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        ol(c, a)
    };
    K.prototype.get_userData = function () {
        return Rk(this.a)
    };
    K.prototype.set_userData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Hm(c, a)
    };
    K.prototype.get_bodyA = function () {
        return n(Nc(this.a), q)
    };
    K.prototype.set_bodyA = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Jw(c, a)
    };
    K.prototype.get_bodyB = function () {
        return n(Zg(this.a), q)
    };
    K.prototype.set_bodyB = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Kf(c, a)
    };
    K.prototype.get_collideConnected = function () {
        return !!Tw(this.a)
    };
    K.prototype.set_collideConnected = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        tu(c, a)
    };
    K.prototype.__destroy__ = function () {
        Si(this.a)
    };

    function Qx() {
        this.a = gi();
        k(Qx)[this.a] = this
    }
    Qx.prototype = Object.create(h.prototype);
    Qx.prototype.constructor = Qx;
    Qx.prototype.b = Qx;
    Qx.c = {};
    b.b2ManifoldPoint = Qx;
    Qx.prototype.get_localPoint = function () {
        return n(Lv(this.a), r)
    };
    Qx.prototype.set_localPoint = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        ct(c, a)
    };
    Qx.prototype.get_normalImpulse = function () {
        return Sj(this.a)
    };
    Qx.prototype.set_normalImpulse = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Rh(c, a)
    };
    Qx.prototype.get_tangentImpulse = function () {
        return mq(this.a)
    };
    Qx.prototype.set_tangentImpulse = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Oi(c, a)
    };
    Qx.prototype.get_id = function () {
        return n(cg(this.a), Jx)
    };
    Qx.prototype.set_id = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        xn(c, a)
    };
    Qx.prototype.__destroy__ = function () {
        jr(this.a)
    };

    function Rx(a, c) {
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        this.a = void 0 === a ? Ph() : void 0 === c ? _emscripten_bind_b2Transform_b2Transform_1(a) : Hs(a, c);
        k(Rx)[this.a] = this
    }
    Rx.prototype = Object.create(h.prototype);
    Rx.prototype.constructor = Rx;
    Rx.prototype.b = Rx;
    Rx.c = {};
    b.b2Transform = Rx;
    Rx.prototype.SetIdentity = function () {
        Uq(this.a)
    };
    Rx.prototype.Set = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        Eh(d, a, c)
    };
    Rx.prototype.get_p = function () {
        return n(fu(this.a), r)
    };
    Rx.prototype.set_p = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Jv(c, a)
    };
    Rx.prototype.get_q = function () {
        return n(nd(this.a), Bx)
    };
    Rx.prototype.set_q = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        qe(c, a)
    };
    Rx.prototype.__destroy__ = function () {
        te(this.a)
    };

    function L() {
        this.a = ij();
        k(L)[this.a] = this
    }
    L.prototype = Object.create(sx.prototype);
    L.prototype.constructor = L;
    L.prototype.b = L;
    L.c = {};
    b.b2ChainShape = L;
    L.prototype.Clear = function () {
        Mq(this.a)
    };
    L.prototype.CreateLoop = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        qi(d, a, c)
    };
    L.prototype.CreateChain = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        Yc(d, a, c)
    };
    L.prototype.SetPrevVertex = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Qn(c, a)
    };
    L.prototype.SetNextVertex = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        ho(c, a)
    };
    L.prototype.GetChildEdge = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        zt(d, a, c)
    };
    L.prototype.GetType = function () {
        return om(this.a)
    };
    L.prototype.GetChildCount = function () {
        return $g(this.a)
    };
    L.prototype.TestPoint = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        return !!il(d, a, c)
    };
    L.prototype.RayCast = function (a, c, d, e) {
        var g = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        e && "object" === typeof e && (e = e.a);
        return !!Js(g, a, c, d, e)
    };
    L.prototype.ComputeAABB = function (a, c, d) {
        var e = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        wc(e, a, c, d)
    };
    L.prototype.ComputeMass = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        jw(d, a, c)
    };
    L.prototype.get_m_vertices = function () {
        return n(gc(this.a), r)
    };
    L.prototype.set_m_vertices = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Af(c, a)
    };
    L.prototype.get_m_count = function () {
        return Vb(this.a)
    };
    L.prototype.set_m_count = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Et(c, a)
    };
    L.prototype.get_m_prevVertex = function () {
        return n(dh(this.a), r)
    };
    L.prototype.set_m_prevVertex = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        fo(c, a)
    };
    L.prototype.get_m_nextVertex = function () {
        return n(rf(this.a), r)
    };
    L.prototype.set_m_nextVertex = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Uc(c, a)
    };
    L.prototype.get_m_hasPrevVertex = function () {
        return !!Rp(this.a)
    };
    L.prototype.set_m_hasPrevVertex = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Wf(c, a)
    };
    L.prototype.get_m_hasNextVertex = function () {
        return !!go(this.a)
    };
    L.prototype.set_m_hasNextVertex = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        hs(c, a)
    };
    L.prototype.get_m_type = function () {
        return tj(this.a)
    };
    L.prototype.set_m_type = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        mg(c, a)
    };
    L.prototype.get_m_radius = function () {
        return Os(this.a)
    };
    L.prototype.set_m_radius = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Qs(c, a)
    };
    L.prototype.__destroy__ = function () {
        Nl(this.a)
    };

    function Sx(a, c, d) {
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        this.a = void 0 === a ? nt() : void 0 === c ? _emscripten_bind_b2Color_b2Color_1(a) : void 0 === d ? _emscripten_bind_b2Color_b2Color_2(a, c) : mt(a, c, d);
        k(Sx)[this.a] = this
    }
    Sx.prototype = Object.create(h.prototype);
    Sx.prototype.constructor = Sx;
    Sx.prototype.b = Sx;
    Sx.c = {};
    b.b2Color = Sx;
    Sx.prototype.Set = function (a, c, d) {
        var e = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        Nw(e, a, c, d)
    };
    Sx.prototype.get_r = function () {
        return Cm(this.a)
    };
    Sx.prototype.set_r = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Td(c, a)
    };
    Sx.prototype.get_g = function () {
        return gp(this.a)
    };
    Sx.prototype.set_g = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        dc(c, a)
    };
    Sx.prototype.get_b = function () {
        return Ys(this.a)
    };
    Sx.prototype.set_b = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        bf(c, a)
    };
    Sx.prototype.__destroy__ = function () {
        Pp(this.a)
    };

    function M() {
        throw "cannot construct a b2RopeJoint, no constructor in IDL";
    }
    M.prototype = Object.create(p.prototype);
    M.prototype.constructor = M;
    M.prototype.b = M;
    M.c = {};
    b.b2RopeJoint = M;
    M.prototype.GetLocalAnchorA = function () {
        return n(Ar(this.a), r)
    };
    M.prototype.GetLocalAnchorB = function () {
        return n(Ri(this.a), r)
    };
    M.prototype.SetMaxLength = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Yw(c, a)
    };
    M.prototype.GetMaxLength = function () {
        return ye(this.a)
    };
    M.prototype.GetLimitState = function () {
        return Eg(this.a)
    };
    M.prototype.GetType = function () {
        return wp(this.a)
    };
    M.prototype.GetBodyA = function () {
        return n(uv(this.a), q)
    };
    M.prototype.GetBodyB = function () {
        return n(gr(this.a), q)
    };
    M.prototype.GetAnchorA = function () {
        return n(Li(this.a), r)
    };
    M.prototype.GetAnchorB = function () {
        return n(Ie(this.a), r)
    };
    M.prototype.GetReactionForce = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return n(at(c, a), r)
    };
    M.prototype.GetReactionTorque = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return Yv(c, a)
    };
    M.prototype.GetNext = function () {
        return n(ip(this.a), p)
    };
    M.prototype.GetUserData = function () {
        return Zc(this.a)
    };
    M.prototype.SetUserData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Bs(c, a)
    };
    M.prototype.IsActive = function () {
        return !!yu(this.a)
    };
    M.prototype.GetCollideConnected = function () {
        return !!uu(this.a)
    };
    M.prototype.__destroy__ = function () {
        or(this.a)
    };

    function Tx() {
        throw "cannot construct a b2RayCastInput, no constructor in IDL";
    }
    Tx.prototype = Object.create(h.prototype);
    Tx.prototype.constructor = Tx;
    Tx.prototype.b = Tx;
    Tx.c = {};
    b.b2RayCastInput = Tx;
    Tx.prototype.get_p1 = function () {
        return n(Lp(this.a), r)
    };
    Tx.prototype.set_p1 = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Wj(c, a)
    };
    Tx.prototype.get_p2 = function () {
        return n(kl(this.a), r)
    };
    Tx.prototype.set_p2 = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Cf(c, a)
    };
    Tx.prototype.get_maxFraction = function () {
        return pm(this.a)
    };
    Tx.prototype.set_maxFraction = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Ao(c, a)
    };
    Tx.prototype.__destroy__ = function () {
        Oe(this.a)
    };

    function N() {
        this.a = Wi();
        k(N)[this.a] = this
    }
    N.prototype = Object.create(sx.prototype);
    N.prototype.constructor = N;
    N.prototype.b = N;
    N.c = {};
    b.b2PolygonShape = N;
    N.prototype.Set = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        Xi(d, a, c)
    };
    N.prototype.SetAsBox = function (a, c, d, e) {
        var g = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        e && "object" === typeof e && (e = e.a);
        void 0 === d ? Lw(g, a, c) : void 0 === e ? _emscripten_bind_b2PolygonShape_SetAsBox_3(g, a, c, d) : Qu(g, a, c, d, e)
    };
    N.prototype.GetVertexCount = function () {
        return fq(this.a)
    };
    N.prototype.GetVertex = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return n(Ht(c, a), r)
    };
    N.prototype.GetType = function () {
        return sh(this.a)
    };
    N.prototype.GetChildCount = function () {
        return kp(this.a)
    };
    N.prototype.TestPoint = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        return !!Ui(d, a, c)
    };
    N.prototype.RayCast = function (a, c, d, e) {
        var g = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        e && "object" === typeof e && (e = e.a);
        return !!ec(g, a, c, d, e)
    };
    N.prototype.ComputeAABB = function (a, c, d) {
        var e = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        Gl(e, a, c, d)
    };
    N.prototype.ComputeMass = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        ul(d, a, c)
    };
    N.prototype.get_m_centroid = function () {
        return n(Ml(this.a), r)
    };
    N.prototype.set_m_centroid = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        wr(c, a)
    };
    N.prototype.get_m_count = function () {
        return Ki(this.a)
    };
    N.prototype.set_m_count = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        od(c, a)
    };
    N.prototype.get_m_type = function () {
        return Rw(this.a)
    };
    N.prototype.set_m_type = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        jv(c, a)
    };
    N.prototype.get_m_radius = function () {
        return Cj(this.a)
    };
    N.prototype.set_m_radius = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Ww(c, a)
    };
    N.prototype.__destroy__ = function () {
        re(this.a)
    };

    function O() {
        this.a = qq();
        k(O)[this.a] = this
    }
    O.prototype = Object.create(sx.prototype);
    O.prototype.constructor = O;
    O.prototype.b = O;
    O.c = {};
    b.b2EdgeShape = O;
    O.prototype.Set = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        Pj(d, a, c)
    };
    O.prototype.GetType = function () {
        return hr(this.a)
    };
    O.prototype.GetChildCount = function () {
        return Hh(this.a)
    };
    O.prototype.TestPoint = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        return !!Kl(d, a, c)
    };
    O.prototype.RayCast = function (a, c, d, e) {
        var g = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        e && "object" === typeof e && (e = e.a);
        return !!Ai(g, a, c, d, e)
    };
    O.prototype.ComputeAABB = function (a, c, d) {
        var e = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        vr(e, a, c, d)
    };
    O.prototype.ComputeMass = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        un(d, a, c)
    };
    O.prototype.get_m_vertex1 = function () {
        return n(yl(this.a), r)
    };
    O.prototype.set_m_vertex1 = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Ru(c, a)
    };
    O.prototype.get_m_vertex2 = function () {
        return n(yo(this.a), r)
    };
    O.prototype.set_m_vertex2 = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Wq(c, a)
    };
    O.prototype.get_m_vertex0 = function () {
        return n(vi(this.a), r)
    };
    O.prototype.set_m_vertex0 = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        bw(c, a)
    };
    O.prototype.get_m_vertex3 = function () {
        return n(Sq(this.a), r)
    };
    O.prototype.set_m_vertex3 = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        wu(c, a)
    };
    O.prototype.get_m_hasVertex0 = function () {
        return !!dm(this.a)
    };
    O.prototype.set_m_hasVertex0 = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        we(c, a)
    };
    O.prototype.get_m_hasVertex3 = function () {
        return !!Lj(this.a)
    };
    O.prototype.set_m_hasVertex3 = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        nc(c, a)
    };
    O.prototype.get_m_type = function () {
        return jp(this.a)
    };
    O.prototype.set_m_type = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        hi(c, a)
    };
    O.prototype.get_m_radius = function () {
        return $r(this.a)
    };
    O.prototype.set_m_radius = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        le(c, a)
    };
    O.prototype.__destroy__ = function () {
        Ji(this.a)
    };

    function Ux() {
        this.a = Us();
        k(Ux)[this.a] = this
    }
    Ux.prototype = Object.create(tx.prototype);
    Ux.prototype.constructor = Ux;
    Ux.prototype.b = Ux;
    Ux.c = {};
    b.JSContactFilter = Ux;
    Ux.prototype.ShouldCollide = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        return !!Tj(d, a, c)
    };
    Ux.prototype.__destroy__ = function () {
        Aj(this.a)
    };

    function P() {
        this.a = Om();
        k(P)[this.a] = this
    }
    P.prototype = Object.create(t.prototype);
    P.prototype.constructor = P;
    P.prototype.b = P;
    P.c = {};
    b.b2RevoluteJointDef = P;
    P.prototype.Initialize = function (a, c, d) {
        var e = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        Id(e, a, c, d)
    };
    P.prototype.get_localAnchorA = function () {
        return n(tn(this.a), r)
    };
    P.prototype.set_localAnchorA = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        qj(c, a)
    };
    P.prototype.get_localAnchorB = function () {
        return n(yj(this.a), r)
    };
    P.prototype.set_localAnchorB = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        An(c, a)
    };
    P.prototype.get_referenceAngle = function () {
        return zj(this.a)
    };
    P.prototype.set_referenceAngle = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Np(c, a)
    };
    P.prototype.get_enableLimit = function () {
        return !!Rm(this.a)
    };
    P.prototype.set_enableLimit = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        dp(c, a)
    };
    P.prototype.get_lowerAngle = function () {
        return el(this.a)
    };
    P.prototype.set_lowerAngle = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        so(c, a)
    };
    P.prototype.get_upperAngle = function () {
        return aq(this.a)
    };
    P.prototype.set_upperAngle = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        lm(c, a)
    };
    P.prototype.get_enableMotor = function () {
        return !!Bj(this.a)
    };
    P.prototype.set_enableMotor = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        ji(c, a)
    };
    P.prototype.get_motorSpeed = function () {
        return Df(this.a)
    };
    P.prototype.set_motorSpeed = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        vw(c, a)
    };
    P.prototype.get_maxMotorTorque = function () {
        return nq(this.a)
    };
    P.prototype.set_maxMotorTorque = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Hv(c, a)
    };
    P.prototype.get_type = function () {
        return mm(this.a)
    };
    P.prototype.set_type = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Vj(c, a)
    };
    P.prototype.get_userData = function () {
        return on(this.a)
    };
    P.prototype.set_userData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Cc(c, a)
    };
    P.prototype.get_bodyA = function () {
        return n(Pt(this.a), q)
    };
    P.prototype.set_bodyA = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Ah(c, a)
    };
    P.prototype.get_bodyB = function () {
        return n(Hj(this.a), q)
    };
    P.prototype.set_bodyB = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        ng(c, a)
    };
    P.prototype.get_collideConnected = function () {
        return !!rs(this.a)
    };
    P.prototype.set_collideConnected = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Zo(c, a)
    };
    P.prototype.__destroy__ = function () {
        pp(this.a)
    };

    function Vx() {
        this.a = du();
        k(Vx)[this.a] = this
    }
    Vx.prototype = Object.create(ox.prototype);
    Vx.prototype.constructor = Vx;
    Vx.prototype.b = Vx;
    Vx.c = {};
    b.JSDraw = Vx;
    Vx.prototype.DrawPolygon = function (a, c, d) {
        var e = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        tl(e, a, c, d)
    };
    Vx.prototype.DrawSolidPolygon = function (a, c, d) {
        var e = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        Nf(e, a, c, d)
    };
    Vx.prototype.DrawCircle = function (a, c, d) {
        var e = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        sc(e, a, c, d)
    };
    Vx.prototype.DrawSolidCircle = function (a, c, d, e) {
        var g = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        e && "object" === typeof e && (e = e.a);
        hc(g, a, c, d, e)
    };
    Vx.prototype.DrawSegment = function (a, c, d) {
        var e = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        jf(e, a, c, d)
    };
    Vx.prototype.DrawTransform = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        vj(c, a)
    };
    Vx.prototype.__destroy__ = function () {
        Qf(this.a)
    };

    function Q() {
        throw "cannot construct a b2WheelJoint, no constructor in IDL";
    }
    Q.prototype = Object.create(p.prototype);
    Q.prototype.constructor = Q;
    Q.prototype.b = Q;
    Q.c = {};
    b.b2WheelJoint = Q;
    Q.prototype.GetLocalAnchorA = function () {
        return n(Vf(this.a), r)
    };
    Q.prototype.GetLocalAnchorB = function () {
        return n(Iw(this.a), r)
    };
    Q.prototype.GetLocalAxisA = function () {
        return n(rv(this.a), r)
    };
    Q.prototype.GetJointTranslation = function () {
        return zs(this.a)
    };
    Q.prototype.GetJointSpeed = function () {
        return yf(this.a)
    };
    Q.prototype.IsMotorEnabled = function () {
        return !!kq(this.a)
    };
    Q.prototype.EnableMotor = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Lf(c, a)
    };
    Q.prototype.SetMotorSpeed = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        be(c, a)
    };
    Q.prototype.GetMotorSpeed = function () {
        return Gn(this.a)
    };
    Q.prototype.SetMaxMotorTorque = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        ik(c, a)
    };
    Q.prototype.GetMaxMotorTorque = function () {
        return wf(this.a)
    };
    Q.prototype.GetMotorTorque = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return As(c, a)
    };
    Q.prototype.SetSpringFrequencyHz = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Mh(c, a)
    };
    Q.prototype.GetSpringFrequencyHz = function () {
        return Aw(this.a)
    };
    Q.prototype.SetSpringDampingRatio = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        no(c, a)
    };
    Q.prototype.GetSpringDampingRatio = function () {
        return Tb(this.a)
    };
    Q.prototype.GetType = function () {
        return kv(this.a)
    };
    Q.prototype.GetBodyA = function () {
        return n(Zn(this.a), q)
    };
    Q.prototype.GetBodyB = function () {
        return n(xm(this.a), q)
    };
    Q.prototype.GetAnchorA = function () {
        return n(Or(this.a), r)
    };
    Q.prototype.GetAnchorB = function () {
        return n(Kw(this.a), r)
    };
    Q.prototype.GetReactionForce = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return n(ff(c, a), r)
    };
    Q.prototype.GetReactionTorque = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return Nm(c, a)
    };
    Q.prototype.GetNext = function () {
        return n(Wn(this.a), p)
    };
    Q.prototype.GetUserData = function () {
        return Un(this.a)
    };
    Q.prototype.SetUserData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Ct(c, a)
    };
    Q.prototype.IsActive = function () {
        return !!Ds(this.a)
    };
    Q.prototype.GetCollideConnected = function () {
        return !!Zr(this.a)
    };
    Q.prototype.__destroy__ = function () {
        Vw(this.a)
    };

    function R() {
        throw "cannot construct a b2PulleyJoint, no constructor in IDL";
    }
    R.prototype = Object.create(p.prototype);
    R.prototype.constructor = R;
    R.prototype.b = R;
    R.c = {};
    b.b2PulleyJoint = R;
    R.prototype.GetGroundAnchorA = function () {
        return n(cd(this.a), r)
    };
    R.prototype.GetGroundAnchorB = function () {
        return n(fg(this.a), r)
    };
    R.prototype.GetLengthA = function () {
        return ao(this.a)
    };
    R.prototype.GetLengthB = function () {
        return fk(this.a)
    };
    R.prototype.GetRatio = function () {
        return uo(this.a)
    };
    R.prototype.GetCurrentLengthA = function () {
        return Uk(this.a)
    };
    R.prototype.GetCurrentLengthB = function () {
        return Gi(this.a)
    };
    R.prototype.GetType = function () {
        return Ci(this.a)
    };
    R.prototype.GetBodyA = function () {
        return n(yq(this.a), q)
    };
    R.prototype.GetBodyB = function () {
        return n(Vd(this.a), q)
    };
    R.prototype.GetAnchorA = function () {
        return n($u(this.a), r)
    };
    R.prototype.GetAnchorB = function () {
        return n(Mm(this.a), r)
    };
    R.prototype.GetReactionForce = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return n(Mu(c, a), r)
    };
    R.prototype.GetReactionTorque = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return hv(c, a)
    };
    R.prototype.GetNext = function () {
        return n(sj(this.a), p)
    };
    R.prototype.GetUserData = function () {
        return xc(this.a)
    };
    R.prototype.SetUserData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Xb(c, a)
    };
    R.prototype.IsActive = function () {
        return !!ki(this.a)
    };
    R.prototype.GetCollideConnected = function () {
        return !!bu(this.a)
    };
    R.prototype.__destroy__ = function () {
        Po(this.a)
    };

    function S() {
        this.a = Gp();
        k(S)[this.a] = this
    }
    S.prototype = Object.create(t.prototype);
    S.prototype.constructor = S;
    S.prototype.b = S;
    S.c = {};
    b.b2MouseJointDef = S;
    S.prototype.get_target = function () {
        return n(Fm(this.a), r)
    };
    S.prototype.set_target = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        zd(c, a)
    };
    S.prototype.get_maxForce = function () {
        return ov(this.a)
    };
    S.prototype.set_maxForce = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Il(c, a)
    };
    S.prototype.get_frequencyHz = function () {
        return Jp(this.a)
    };
    S.prototype.set_frequencyHz = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        jn(c, a)
    };
    S.prototype.get_dampingRatio = function () {
        return kg(this.a)
    };
    S.prototype.set_dampingRatio = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Qo(c, a)
    };
    S.prototype.get_type = function () {
        return Dp(this.a)
    };
    S.prototype.set_type = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Pd(c, a)
    };
    S.prototype.get_userData = function () {
        return Zs(this.a)
    };
    S.prototype.set_userData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Fc(c, a)
    };
    S.prototype.get_bodyA = function () {
        return n(Gk(this.a), q)
    };
    S.prototype.set_bodyA = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        vd(c, a)
    };
    S.prototype.get_bodyB = function () {
        return n(qg(this.a), q)
    };
    S.prototype.set_bodyB = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        qh(c, a)
    };
    S.prototype.get_collideConnected = function () {
        return !!Jt(this.a)
    };
    S.prototype.set_collideConnected = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Yq(c, a)
    };
    S.prototype.__destroy__ = function () {
        Rf(this.a)
    };

    function E() {
        throw "cannot construct a b2Contact, no constructor in IDL";
    }
    E.prototype = Object.create(h.prototype);
    E.prototype.constructor = E;
    E.prototype.b = E;
    E.c = {};
    b.b2Contact = E;
    E.prototype.GetManifold = function () {
        return n(ut(this.a), Gx)
    };
    E.prototype.GetWorldManifold = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        xe(c, a)
    };
    E.prototype.IsTouching = function () {
        return !!he(this.a)
    };
    E.prototype.SetEnabled = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        sf(c, a)
    };
    E.prototype.IsEnabled = function () {
        return !!wg(this.a)
    };
    E.prototype.GetNext = function () {
        return n(pd(this.a), E)
    };
    E.prototype.GetFixtureA = function () {
        return n(De(this.a), v)
    };
    E.prototype.GetChildIndexA = function () {
        return lw(this.a)
    };
    E.prototype.GetFixtureB = function () {
        return n(iw(this.a), v)
    };
    E.prototype.GetChildIndexB = function () {
        return ph(this.a)
    };
    E.prototype.SetFriction = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Xq(c, a)
    };
    E.prototype.GetFriction = function () {
        return Uh(this.a)
    };
    E.prototype.ResetFriction = function () {
        Ih(this.a)
    };
    E.prototype.SetRestitution = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Qq(c, a)
    };
    E.prototype.GetRestitution = function () {
        return mn(this.a)
    };
    E.prototype.ResetRestitution = function () {
        ei(this.a)
    };
    E.prototype.SetTangentSpeed = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        aj(c, a)
    };
    E.prototype.GetTangentSpeed = function () {
        return ld(this.a)
    };

    function T() {
        this.a = Jm();
        k(T)[this.a] = this
    }
    T.prototype = Object.create(t.prototype);
    T.prototype.constructor = T;
    T.prototype.b = T;
    T.c = {};
    b.b2DistanceJointDef = T;
    T.prototype.Initialize = function (a, c, d, e) {
        var g = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        e && "object" === typeof e && (e = e.a);
        Ns(g, a, c, d, e)
    };
    T.prototype.get_localAnchorA = function () {
        return n(Zi(this.a), r)
    };
    T.prototype.set_localAnchorA = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        He(c, a)
    };
    T.prototype.get_localAnchorB = function () {
        return n(Bq(this.a), r)
    };
    T.prototype.set_localAnchorB = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Eu(c, a)
    };
    T.prototype.get_length = function () {
        return Ud(this.a)
    };
    T.prototype.set_length = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Wh(c, a)
    };
    T.prototype.get_frequencyHz = function () {
        return bo(this.a)
    };
    T.prototype.set_frequencyHz = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        xj(c, a)
    };
    T.prototype.get_dampingRatio = function () {
        return me(this.a)
    };
    T.prototype.set_dampingRatio = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Sc(c, a)
    };
    T.prototype.get_type = function () {
        return ai(this.a)
    };
    T.prototype.set_type = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        tq(c, a)
    };
    T.prototype.get_userData = function () {
        return Ac(this.a)
    };
    T.prototype.set_userData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Rc(c, a)
    };
    T.prototype.get_bodyA = function () {
        return n(Mi(this.a), q)
    };
    T.prototype.set_bodyA = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        ss(c, a)
    };
    T.prototype.get_bodyB = function () {
        return n(bv(this.a), q)
    };
    T.prototype.set_bodyB = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Qp(c, a)
    };
    T.prototype.get_collideConnected = function () {
        return !!Mp(this.a)
    };
    T.prototype.set_collideConnected = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Tn(c, a)
    };
    T.prototype.__destroy__ = function () {
        iu(this.a)
    };

    function q() {
        throw "cannot construct a b2Body, no constructor in IDL";
    }
    q.prototype = Object.create(h.prototype);
    q.prototype.constructor = q;
    q.prototype.b = q;
    q.c = {};
    b.b2Body = q;
    q.prototype.CreateFixture = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        return void 0 === c ? n(cu(d, a), v) : n(Cl(d, a, c), v)
    };
    q.prototype.DestroyFixture = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Bn(c, a)
    };
    q.prototype.SetTransform = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        Gm(d, a, c)
    };
    q.prototype.GetTransform = function () {
        return n(Lt(this.a), Rx)
    };
    q.prototype.GetPosition = function () {
        return n(Sg(this.a), r)
    };
    q.prototype.GetAngle = function () {
        return Fw(this.a)
    };
    q.prototype.GetWorldCenter = function () {
        return n(vk(this.a), r)
    };
    q.prototype.GetLocalCenter = function () {
        return n(Nv(this.a), r)
    };
    q.prototype.SetLinearVelocity = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        jm(c, a)
    };
    q.prototype.GetLinearVelocity = function () {
        return n(ue(this.a), r)
    };
    q.prototype.SetAngularVelocity = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Vt(c, a)
    };
    q.prototype.GetAngularVelocity = function () {
        return dj(this.a)
    };
    q.prototype.ApplyForce = function (a, c, d) {
        var e = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        Dt(e, a, c, d)
    };
    q.prototype.ApplyForceToCenter = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        Pe(d, a, c)
    };
    q.prototype.ApplyTorque = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        wh(d, a, c)
    };
    q.prototype.ApplyLinearImpulse = function (a, c, d) {
        var e = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        d && "object" === typeof d && (d = d.a);
        Ln(e, a, c, d)
    };
    q.prototype.ApplyAngularImpulse = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        Qd(d, a, c)
    };
    q.prototype.GetMass = function () {
        return jo(this.a)
    };
    q.prototype.GetInertia = function () {
        return Zu(this.a)
    };
    q.prototype.GetMassData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        sn(c, a)
    };
    q.prototype.SetMassData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        de(c, a)
    };
    q.prototype.ResetMassData = function () {
        pn(this.a)
    };
    q.prototype.GetWorldPoint = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return n(Rj(c, a), r)
    };
    q.prototype.GetWorldVector = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return n(rg(c, a), r)
    };
    q.prototype.GetLocalPoint = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return n(Bg(c, a), r)
    };
    q.prototype.GetLocalVector = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return n(rm(c, a), r)
    };
    q.prototype.GetLinearVelocityFromWorldPoint = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return n($q(c, a), r)
    };
    q.prototype.GetLinearVelocityFromLocalPoint = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return n(Hq(c, a), r)
    };
    q.prototype.GetLinearDamping = function () {
        return Gr(this.a)
    };
    q.prototype.SetLinearDamping = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        wm(c, a)
    };
    q.prototype.GetAngularDamping = function () {
        return Bk(this.a)
    };
    q.prototype.SetAngularDamping = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        ci(c, a)
    };
    q.prototype.GetGravityScale = function () {
        return oj(this.a)
    };
    q.prototype.SetGravityScale = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Tl(c, a)
    };
    q.prototype.SetType = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        io(c, a)
    };
    q.prototype.GetType = function () {
        return ls(this.a)
    };
    q.prototype.SetBullet = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Hk(c, a)
    };
    q.prototype.IsBullet = function () {
        return !!pl(this.a)
    };
    q.prototype.SetSleepingAllowed = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Xk(c, a)
    };
    q.prototype.IsSleepingAllowed = function () {
        return !!bq(this.a)
    };
    q.prototype.SetAwake = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Vu(c, a)
    };
    q.prototype.IsAwake = function () {
        return !!xd(this.a)
    };
    q.prototype.SetActive = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Dl(c, a)
    };
    q.prototype.IsActive = function () {
        return !!di(this.a)
    };
    q.prototype.SetFixedRotation = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        kh(c, a)
    };
    q.prototype.IsFixedRotation = function () {
        return !!Sh(this.a)
    };
    q.prototype.GetFixtureList = function () {
        return n(Oo(this.a), v)
    };
    q.prototype.GetJointList = function () {
        return n(ft(this.a), Px)
    };
    q.prototype.GetContactList = function () {
        return n(Vh(this.a), Wx)
    };
    q.prototype.GetNext = function () {
        return n(sv(this.a), q)
    };
    q.prototype.GetUserData = function () {
        return Ak(this.a)
    };
    q.prototype.SetUserData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        ti(c, a)
    };
    q.prototype.GetWorld = function () {
        return n(Su(this.a), C)
    };
    q.prototype.Dump = function () {
        tk(this.a)
    };

    function U() {
        throw "cannot construct a b2FrictionJoint, no constructor in IDL";
    }
    U.prototype = Object.create(p.prototype);
    U.prototype.constructor = U;
    U.prototype.b = U;
    U.c = {};
    b.b2FrictionJoint = U;
    U.prototype.GetLocalAnchorA = function () {
        return n(Yo(this.a), r)
    };
    U.prototype.GetLocalAnchorB = function () {
        return n(Yh(this.a), r)
    };
    U.prototype.SetMaxForce = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Xt(c, a)
    };
    U.prototype.GetMaxForce = function () {
        return Dv(this.a)
    };
    U.prototype.SetMaxTorque = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Ip(c, a)
    };
    U.prototype.GetMaxTorque = function () {
        return zi(this.a)
    };
    U.prototype.GetType = function () {
        return hg(this.a)
    };
    U.prototype.GetBodyA = function () {
        return n(Dw(this.a), q)
    };
    U.prototype.GetBodyB = function () {
        return n(Se(this.a), q)
    };
    U.prototype.GetAnchorA = function () {
        return n(Ur(this.a), r)
    };
    U.prototype.GetAnchorB = function () {
        return n(yv(this.a), r)
    };
    U.prototype.GetReactionForce = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return n(rq(c, a), r)
    };
    U.prototype.GetReactionTorque = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return kk(c, a)
    };
    U.prototype.GetNext = function () {
        return n(xs(this.a), p)
    };
    U.prototype.GetUserData = function () {
        return Cr(this.a)
    };
    U.prototype.SetUserData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Kp(c, a)
    };
    U.prototype.IsActive = function () {
        return !!cc(this.a)
    };
    U.prototype.GetCollideConnected = function () {
        return !!zp(this.a)
    };
    U.prototype.__destroy__ = function () {
        Uo(this.a)
    };

    function Xx() {
        throw "cannot construct a b2DestructionListener, no constructor in IDL";
    }
    Xx.prototype = Object.create(h.prototype);
    Xx.prototype.constructor = Xx;
    Xx.prototype.b = Xx;
    Xx.c = {};
    b.b2DestructionListener = Xx;
    Xx.prototype.__destroy__ = function () {
        uc(this.a)
    };

    function W() {
        this.a = en();
        k(W)[this.a] = this
    }
    W.prototype = Object.create(t.prototype);
    W.prototype.constructor = W;
    W.prototype.b = W;
    W.c = {};
    b.b2GearJointDef = W;
    W.prototype.get_joint1 = function () {
        return n(ri(this.a), p)
    };
    W.prototype.set_joint1 = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Vq(c, a)
    };
    W.prototype.get_joint2 = function () {
        return n(ym(this.a), p)
    };
    W.prototype.set_joint2 = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        vu(c, a)
    };
    W.prototype.get_ratio = function () {
        return lp(this.a)
    };
    W.prototype.set_ratio = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        tg(c, a)
    };
    W.prototype.get_type = function () {
        return nm(this.a)
    };
    W.prototype.set_type = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Be(c, a)
    };
    W.prototype.get_userData = function () {
        return an(this.a)
    };
    W.prototype.set_userData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        fw(c, a)
    };
    W.prototype.get_bodyA = function () {
        return n(wj(this.a), q)
    };
    W.prototype.set_bodyA = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        ju(c, a)
    };
    W.prototype.get_bodyB = function () {
        return n(vn(this.a), q)
    };
    W.prototype.set_bodyB = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Xv(c, a)
    };
    W.prototype.get_collideConnected = function () {
        return !!Ek(this.a)
    };
    W.prototype.set_collideConnected = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        $o(c, a)
    };
    W.prototype.__destroy__ = function () {
        Cq(this.a)
    };

    function X() {
        throw "cannot construct a b2RevoluteJoint, no constructor in IDL";
    }
    X.prototype = Object.create(p.prototype);
    X.prototype.constructor = X;
    X.prototype.b = X;
    X.c = {};
    b.b2RevoluteJoint = X;
    X.prototype.GetLocalAnchorA = function () {
        return n(ic(this.a), r)
    };
    X.prototype.GetLocalAnchorB = function () {
        return n(Ts(this.a), r)
    };
    X.prototype.GetReferenceAngle = function () {
        return Ed(this.a)
    };
    X.prototype.GetJointAngle = function () {
        return Pf(this.a)
    };
    X.prototype.GetJointSpeed = function () {
        return Mf(this.a)
    };
    X.prototype.IsLimitEnabled = function () {
        return !!Fv(this.a)
    };
    X.prototype.EnableLimit = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Ng(c, a)
    };
    X.prototype.GetLowerLimit = function () {
        return uk(this.a)
    };
    X.prototype.GetUpperLimit = function () {
        return Vl(this.a)
    };
    X.prototype.SetLimits = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        ts(d, a, c)
    };
    X.prototype.IsMotorEnabled = function () {
        return !!Gt(this.a)
    };
    X.prototype.EnableMotor = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        oh(c, a)
    };
    X.prototype.SetMotorSpeed = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        co(c, a)
    };
    X.prototype.GetMotorSpeed = function () {
        return lg(this.a)
    };
    X.prototype.SetMaxMotorTorque = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        nh(c, a)
    };
    X.prototype.GetMaxMotorTorque = function () {
        return Nj(this.a)
    };
    X.prototype.GetMotorTorque = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return qt(c, a)
    };
    X.prototype.GetType = function () {
        return Tp(this.a)
    };
    X.prototype.GetBodyA = function () {
        return n(mj(this.a), q)
    };
    X.prototype.GetBodyB = function () {
        return n(Mk(this.a), q)
    };
    X.prototype.GetAnchorA = function () {
        return n(Mr(this.a), r)
    };
    X.prototype.GetAnchorB = function () {
        return n(cw(this.a), r)
    };
    X.prototype.GetReactionForce = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return n(su(c, a), r)
    };
    X.prototype.GetReactionTorque = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        return bh(c, a)
    };
    X.prototype.GetNext = function () {
        return n(dv(this.a), p)
    };
    X.prototype.GetUserData = function () {
        return Hc(this.a)
    };
    X.prototype.SetUserData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        mi(c, a)
    };
    X.prototype.IsActive = function () {
        return !!mv(this.a)
    };
    X.prototype.GetCollideConnected = function () {
        return !!Qg(this.a)
    };
    X.prototype.__destroy__ = function () {
        xh(this.a)
    };

    function Wx() {
        this.a = ms();
        k(Wx)[this.a] = this
    }
    Wx.prototype = Object.create(h.prototype);
    Wx.prototype.constructor = Wx;
    Wx.prototype.b = Wx;
    Wx.c = {};
    b.b2ContactEdge = Wx;
    Wx.prototype.get_other = function () {
        return n(Qi(this.a), q)
    };
    Wx.prototype.set_other = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Fi(c, a)
    };
    Wx.prototype.get_contact = function () {
        return n(nn(this.a), E)
    };
    Wx.prototype.set_contact = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        lu(c, a)
    };
    Wx.prototype.get_prev = function () {
        return n(Ug(this.a), Wx)
    };
    Wx.prototype.set_prev = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Bw(c, a)
    };
    Wx.prototype.get_next = function () {
        return n(Og(this.a), Wx)
    };
    Wx.prototype.set_next = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Ub(c, a)
    };
    Wx.prototype.__destroy__ = function () {
        Xe(this.a)
    };

    function Y() {
        this.a = Xj();
        k(Y)[this.a] = this
    }
    Y.prototype = Object.create(t.prototype);
    Y.prototype.constructor = Y;
    Y.prototype.b = Y;
    Y.c = {};
    b.b2RopeJointDef = Y;
    Y.prototype.get_localAnchorA = function () {
        return n(Zm(this.a), r)
    };
    Y.prototype.set_localAnchorA = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        gs(c, a)
    };
    Y.prototype.get_localAnchorB = function () {
        return n(Kq(this.a), r)
    };
    Y.prototype.set_localAnchorB = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        dw(c, a)
    };
    Y.prototype.get_maxLength = function () {
        return Fk(this.a)
    };
    Y.prototype.set_maxLength = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        hl(c, a)
    };
    Y.prototype.get_type = function () {
        return zq(this.a)
    };
    Y.prototype.set_type = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Ok(c, a)
    };
    Y.prototype.get_userData = function () {
        return Nn(this.a)
    };
    Y.prototype.set_userData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Ho(c, a)
    };
    Y.prototype.get_bodyA = function () {
        return n(Bu(this.a), q)
    };
    Y.prototype.set_bodyA = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        $f(c, a)
    };
    Y.prototype.get_bodyB = function () {
        return n(mw(this.a), q)
    };
    Y.prototype.set_bodyB = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Zd(c, a)
    };
    Y.prototype.get_collideConnected = function () {
        return !!uh(this.a)
    };
    Y.prototype.set_collideConnected = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Tc(c, a)
    };
    Y.prototype.__destroy__ = function () {
        Cs(this.a)
    };

    function Z() {
        this.a = Mg();
        k(Z)[this.a] = this
    }
    Z.prototype = Object.create(t.prototype);
    Z.prototype.constructor = Z;
    Z.prototype.b = Z;
    Z.c = {};
    b.b2MotorJointDef = Z;
    Z.prototype.Initialize = function (a, c) {
        var d = this.a;
        a && "object" === typeof a && (a = a.a);
        c && "object" === typeof c && (c = c.a);
        hm(d, a, c)
    };
    Z.prototype.get_linearOffset = function () {
        return n(gm(this.a), r)
    };
    Z.prototype.set_linearOffset = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        wo(c, a)
    };
    Z.prototype.get_angularOffset = function () {
        return Bt(this.a)
    };
    Z.prototype.set_angularOffset = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        js(c, a)
    };
    Z.prototype.get_maxForce = function () {
        return zc(this.a)
    };
    Z.prototype.set_maxForce = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        St(c, a)
    };
    Z.prototype.get_maxTorque = function () {
        return Gq(this.a)
    };
    Z.prototype.set_maxTorque = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Vv(c, a)
    };
    Z.prototype.get_correctionFactor = function () {
        return qp(this.a)
    };
    Z.prototype.set_correctionFactor = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        yt(c, a)
    };
    Z.prototype.get_type = function () {
        return zr(this.a)
    };
    Z.prototype.set_type = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        lc(c, a)
    };
    Z.prototype.get_userData = function () {
        return mu(this.a)
    };
    Z.prototype.set_userData = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        qd(c, a)
    };
    Z.prototype.get_bodyA = function () {
        return n(ww(this.a), q)
    };
    Z.prototype.set_bodyA = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        ql(c, a)
    };
    Z.prototype.get_bodyB = function () {
        return n(Gu(this.a), q)
    };
    Z.prototype.set_bodyB = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        Fs(c, a)
    };
    Z.prototype.get_collideConnected = function () {
        return !!Fd(this.a)
    };
    Z.prototype.set_collideConnected = function (a) {
        var c = this.a;
        a && "object" === typeof a && (a = a.a);
        hw(c, a)
    };
    Z.prototype.__destroy__ = function () {
        vs(this.a)
    };
    (function () {
        function a() {
            b.b2Shape.e_circle = pk();
            b.b2Shape.e_edge = Mj();
            b.b2Shape.e_polygon = Yu();
            b.b2Shape.e_chain = $n();
            b.b2Shape.e_typeCount = Mt();
            b.e_unknownJoint = ii();
            b.e_revoluteJoint = wi();
            b.e_prismaticJoint = kr();
            b.e_distanceJoint = mo();
            b.e_pulleyJoint = qf();
            b.e_mouseJoint = At();
            b.e_gearJoint = rt();
            b.e_wheelJoint = Ve();
            b.e_weldJoint = Dm();
            b.e_frictionJoint = Rd();
            b.e_ropeJoint = Qv();
            b.e_motorJoint = xo();
            b.e_inactiveLimit = Tu();
            b.e_atLowerLimit = wn();
            b.e_atUpperLimit = Pw();
            b.e_equalLimits = Qh();
            b.b2Manifold.e_circles =
                Gd();
            b.b2Manifold.e_faceA = Fj();
            b.b2Manifold.e_faceB = Gj();
            b.b2_staticBody = km();
            b.b2_kinematicBody = Dj();
            b.b2_dynamicBody = Eq();
            b.b2Draw.e_shapeBit = Th();
            b.b2Draw.e_jointBit = Hf();
            b.b2Draw.e_aabbBit = ur();
            b.b2Draw.e_pairBit = Vr();
            b.b2Draw.e_centerOfMassBit = Fo();
            b.b2ContactFeature.e_vertex = Ko();
            b.b2ContactFeature.e_face = Ul()
        }
        b.calledRun ? a() : kb.unshift(a)
    })();

    return Box2D;
};