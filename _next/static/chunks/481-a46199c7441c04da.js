(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [481], {
        29512: function(e, t, n) {
            "use strict";
            n.d(t, {
                iD: function() {
                    return a
                }
            });
            var r = n(67294),
                o = "createTweet",
                a = function(e) {
                    var t = r.useRef(null),
                        a = r.useState(!0),
                        i = a[0],
                        u = a[1];
                    return r.useEffect(function() {
                        var r = !0;
                        return n(5277)("https://platform.twitter.com/widgets.js", "twitter-embed", function() {
                                if (!window.twttr) {
                                    console.error("Failure to load window.twttr, aborting load");
                                    return
                                }
                                if (r) {
                                    if (!window.twttr.widgets[o]) {
                                        console.error("Method " + o + " is not present anymore in twttr.widget api");
                                        return
                                    }
                                    window.twttr.widgets[o](e.tweetId, null == t ? void 0 : t.current, e.options).then(function(t) {
                                        u(!1), e.onLoad && e.onLoad(t)
                                    })
                                }
                            }),
                            function() {
                                r = !1
                            }
                    }, []), r.createElement(r.Fragment, null, i && r.createElement(r.Fragment, null, e.placeholder), r.createElement("div", {
                        ref: t
                    }))
                }
        },
        5277: function(e, t, n) {
            var r, o;
            o = function() {
                var e, t, n = document,
                    r = n.getElementsByTagName("head")[0],
                    o = "push",
                    a = "readyState",
                    i = "onreadystatechange",
                    u = {},
                    c = {},
                    l = {},
                    s = {};

                function f(e, t) {
                    for (var n = 0, r = e.length; n < r; ++n)
                        if (!t(e[n])) return !1;
                    return 1
                }

                function d(e, t) {
                    f(e, function(e) {
                        return t(e), 1
                    })
                }

                function m(t, n, r) {
                    t = t[o] ? t : [t];
                    var a = n && n.call,
                        i = a ? n : r,
                        h = a ? t.join("") : n,
                        v = t.length;

                    function b(e) {
                        return e.call ? e() : u[e]
                    }

                    function y() {
                        if (!--v)
                            for (var e in u[h] = 1, i && i(), l) f(e.split("|"), b) && !d(l[e], b) && (l[e] = [])
                    }
                    return setTimeout(function() {
                        d(t, function t(n, r) {
                            return null === n ? y() : (r || /^https?:\/\//.test(n) || !e || (n = -1 === n.indexOf(".js") ? e + n + ".js" : e + n), s[n]) ? (h && (c[h] = 1), 2 == s[n] ? y() : setTimeout(function() {
                                t(n, !0)
                            }, 0)) : void(s[n] = 1, h && (c[h] = 1), p(n, y))
                        })
                    }, 0), m
                }

                function p(e, o) {
                    var u, c = n.createElement("script");
                    c.onload = c.onerror = c[i] = function() {
                        (!c[a] || /^c|loade/.test(c[a])) && !u && (c.onload = c[i] = null, u = 1, s[e] = 2, o())
                    }, c.async = 1, c.src = t ? e + (-1 === e.indexOf("?") ? "?" : "&") + t : e, r.insertBefore(c, r.lastChild)
                }
                return m.get = p, m.order = function(e, t, n) {
                    ! function r(o) {
                        o = e.shift(), e.length ? m(o, r) : m(o, t, n)
                    }()
                }, m.path = function(t) {
                    e = t
                }, m.urlArgs = function(e) {
                    t = e
                }, m.ready = function(e, t, n) {
                    e = e[o] ? e : [e];
                    var r, a = [];
                    return !d(e, function(e) {
                        u[e] || a[o](e)
                    }) && f(e, function(e) {
                        return u[e]
                    }) ? t() : (l[r = e.join("|")] = l[r] || [], l[r][o](t), n && n(a)), m
                }, m.done = function(e) {
                    m([null], e)
                }, m
            }, e.exports ? e.exports = o() : void 0 === (r = o.call(t, n, t, e)) || (e.exports = r)
        },
        96854: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return b
                }
            });
            var r = n(67294),
                o = n(25432),
                a = n(16914),
                i = n(33179),
                u = n(70917),
                c = n(16554),
                l = n(77030),
                s = n(7634),
                f = n(85893),
                d = (0, a.m)("div", {
                    baseStyle: {
                        boxShadow: "none",
                        backgroundClip: "padding-box",
                        cursor: "default",
                        color: "transparent",
                        pointerEvents: "none",
                        userSelect: "none",
                        "&::before, &::after, *": {
                            visibility: "hidden"
                        }
                    }
                }),
                m = (0, i.gJ)("skeleton-start-color"),
                p = (0, i.gJ)("skeleton-end-color"),
                h = (0, u.F4)({
                    from: {
                        opacity: 0
                    },
                    to: {
                        opacity: 1
                    }
                }),
                v = (0, u.F4)({
                    from: {
                        borderColor: m.reference,
                        background: m.reference
                    },
                    to: {
                        borderColor: p.reference,
                        background: p.reference
                    }
                }),
                b = (0, c.G)((e, t) => {
                    let n = { ...e,
                            fadeDuration: "number" == typeof e.fadeDuration ? e.fadeDuration : .4,
                            speed: "number" == typeof e.speed ? e.speed : .8
                        },
                        u = (0, l.mq)("Skeleton", n),
                        c = function() {
                            let e = (0, r.useRef)(!0);
                            return (0, r.useEffect)(() => {
                                e.current = !1
                            }, []), e.current
                        }(),
                        {
                            startColor: b = "",
                            endColor: y = "",
                            isLoaded: k,
                            fadeDuration: g,
                            speed: w,
                            className: x,
                            fitContent: E,
                            ..._
                        } = (0, i.Lr)(n),
                        [j, O] = (0, s.dQ)("colors", [b, y]),
                        S = function(e) {
                            let t = (0, r.useRef)();
                            return (0, r.useEffect)(() => {
                                t.current = e
                            }, [e]), t.current
                        }(k),
                        A = (0, o.cx)("chakra-skeleton", x),
                        N = { ...j && {
                                [m.variable]: j
                            },
                            ...O && {
                                [p.variable]: O
                            }
                        };
                    if (k) {
                        let e = c || S ? "none" : `${h} ${g}s`;
                        return (0, f.jsx)(a.m.div, {
                            ref: t,
                            className: A,
                            __css: {
                                animation: e
                            },
                            ..._
                        })
                    }
                    return (0, f.jsx)(d, {
                        ref: t,
                        className: A,
                        ..._,
                        __css: {
                            width: E ? "fit-content" : void 0,
                            ...u,
                            ...N,
                            _dark: { ...u._dark,
                                ...N
                            },
                            animation: `${w}s linear infinite alternate ${v}`
                        }
                    })
                });
            b.displayName = "Skeleton"
        },
        99221: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return f
                }
            });
            var r = n(96854),
                o = n(33951),
                a = n(76336),
                i = n(67294),
                u = n(48940),
                c = n(25432),
                l = n(16914),
                s = n(85893),
                f = e => {
                    let {
                        noOfLines: t = 3,
                        spacing: n = "0.5rem",
                        skeletonHeight: f = "0.5rem",
                        className: d,
                        startColor: m,
                        endColor: p,
                        isLoaded: h,
                        fadeDuration: v,
                        speed: b,
                        variant: y,
                        size: k,
                        colorScheme: g,
                        children: w,
                        ...x
                    } = e, E = function(e, t) {
                        var n;
                        let r = function(e) {
                                var t, n;
                                let r = (0, c.Kn)(e) ? e : {
                                        fallback: null != e ? e : "base"
                                    },
                                    o = (0, u.F)().__breakpoints.details.map(({
                                        minMaxQuery: e,
                                        breakpoint: t
                                    }) => ({
                                        breakpoint: t,
                                        query: e.replace("@media screen and ", "")
                                    })),
                                    l = o.map(e => e.breakpoint === r.fallback),
                                    s = (function(e, t = {}) {
                                        let {
                                            ssr: n = !0,
                                            fallback: r
                                        } = t, {
                                            getWindow: o
                                        } = (0, a.O)(), u = Array.isArray(e) ? e : [e], c = Array.isArray(r) ? r : [r];
                                        c = c.filter(e => null != e);
                                        let [l, s] = (0, i.useState)(() => u.map((e, t) => ({
                                            media: e,
                                            matches: n ? !!c[t] : o().matchMedia(e).matches
                                        })));
                                        return (0, i.useEffect)(() => {
                                            let e = o();
                                            s(u.map(t => ({
                                                media: t,
                                                matches: e.matchMedia(t).matches
                                            })));
                                            let t = u.map(t => e.matchMedia(t)),
                                                n = e => {
                                                    s(t => t.slice().map(t => t.media === e.media ? { ...t,
                                                        matches: e.matches
                                                    } : t))
                                                };
                                            return t.forEach(e => {
                                                "function" == typeof e.addListener ? e.addListener(n) : e.addEventListener("change", n)
                                            }), () => {
                                                t.forEach(e => {
                                                    "function" == typeof e.removeListener ? e.removeListener(n) : e.removeEventListener("change", n)
                                                })
                                            }
                                        }, [o]), l.map(e => e.matches)
                                    })(o.map(e => e.query), {
                                        fallback: l,
                                        ssr: r.ssr
                                    }).findIndex(e => !0 == e);
                                return null != (n = null == (t = o[s]) ? void 0 : t.breakpoint) ? n : r.fallback
                            }((0, c.Kn)(void 0) ? void 0 : {
                                fallback: "base"
                            }),
                            l = (0, u.F)();
                        if (!r) return;
                        let s = Array.from((null == (n = l.__breakpoints) ? void 0 : n.keys) || []);
                        return function(e, t, n = o.AV) {
                            let r = Object.keys(e).indexOf(t);
                            if (-1 !== r) return e[t];
                            let a = n.indexOf(t);
                            for (; a >= 0;) {
                                let t = n[a];
                                if (e.hasOwnProperty(t)) {
                                    r = a;
                                    break
                                }
                                a -= 1
                            }
                            if (-1 !== r) return e[n[r]]
                        }(Array.isArray(e) ? Object.fromEntries(Object.entries((0, o.Yq)(e, s)).map(([e, t]) => [e, t])) : e, r, s)
                    }("number" == typeof t ? [t] : t) || 3, _ = Array(E).fill(1).map((e, t) => t + 1), j = e => E > 1 && e === _.length ? "80%" : "100%", O = (0, c.cx)("chakra-skeleton__group", d);
                    return (0, s.jsx)(l.m.div, {
                        className: O,
                        ...x,
                        children: _.map((e, t) => {
                            if (h && t > 0) return null;
                            let o = h ? null : {
                                mb: e === _.length ? "0" : n,
                                width: j(e),
                                height: f
                            };
                            return (0, s.jsx)(r.O, {
                                startColor: m,
                                endColor: p,
                                isLoaded: h,
                                fadeDuration: v,
                                speed: b,
                                variant: y,
                                size: k,
                                colorScheme: g,
                                ...o,
                                children: 0 === t ? w : void 0
                            }, _.length.toString() + e)
                        })
                    })
                };
            f.displayName = "SkeletonText"
        },
        12054: function(e, t, n) {
            "use strict";
            n.d(t, {
                s: function() {
                    return a
                }
            });
            var r = n(96854),
                o = n(85893),
                a = ({
                    size: e = "2rem",
                    ...t
                }) => (0, o.jsx)(r.O, {
                    borderRadius: "full",
                    boxSize: e,
                    ...t
                });
            a.displayName = "SkeletonCircle"
        }
    }
]);