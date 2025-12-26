(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [718], {
        9008: function(e, t, n) {
            e.exports = n(7828)
        },
        33951: function(e, t, n) {
            "use strict";
            n.d(t, {
                AV: function() {
                    return o
                },
                XQ: function() {
                    return i
                },
                Yq: function() {
                    return a
                }
            });
            var r = n(25432),
                o = Object.freeze(["base", "sm", "md", "lg", "xl", "2xl"]);

            function i(e, t) {
                return Array.isArray(e) ? e.map(e => null === e ? null : t(e)) : (0, r.Kn)(e) ? Object.keys(e).reduce((n, r) => (n[r] = t(e[r]), n), {}) : null != e ? t(e) : null
            }

            function a(e, t = o) {
                let n = {};
                return e.forEach((e, r) => {
                    let o = t[r];
                    null != e && (n[o] = e)
                }), n
            }
        },
        89993: function(e, t, n) {
            "use strict";
            n.d(t, {
                h: function() {
                    return s
                }
            });
            var r = n(93108),
                o = n(16554),
                i = n(67294),
                a = n(85893),
                s = (0, o.G)((e, t) => {
                    let {
                        icon: n,
                        children: o,
                        isRound: s,
                        "aria-label": u,
                        ...l
                    } = e, c = n || o, f = (0, i.isValidElement)(c) ? (0, i.cloneElement)(c, {
                        "aria-hidden": !0,
                        focusable: !1
                    }) : null;
                    return (0, a.jsx)(r.z, {
                        padding: "0",
                        borderRadius: s ? "full" : void 0,
                        ref: t,
                        "aria-label": u,
                        ...l,
                        children: f
                    })
                });
            s.displayName = "IconButton"
        },
        78522: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return r
                },
                i: function() {
                    return o
                }
            });
            var [r, o] = (0, n(55227).k)({
                strict: !1,
                name: "ButtonGroupContext"
            })
        },
        93108: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return h
                }
            });
            var r = n(67294),
                o = n(78522),
                i = n(16914),
                a = n(25432),
                s = n(85893);

            function u(e) {
                let {
                    children: t,
                    className: n,
                    ...o
                } = e, u = (0, r.isValidElement)(t) ? (0, r.cloneElement)(t, {
                    "aria-hidden": !0,
                    focusable: !1
                }) : t, l = (0, a.cx)("chakra-button__icon", n);
                return (0, s.jsx)(i.m.span, {
                    display: "inline-flex",
                    alignSelf: "center",
                    flexShrink: 0,
                    ...o,
                    className: l,
                    children: u
                })
            }
            u.displayName = "ButtonIcon";
            var l = n(81136);

            function c(e) {
                let {
                    label: t,
                    placement: n,
                    spacing: o = "0.5rem",
                    children: u = (0, s.jsx)(l.$, {
                        color: "currentColor",
                        width: "1em",
                        height: "1em"
                    }),
                    className: c,
                    __css: f,
                    ...d
                } = e, p = (0, a.cx)("chakra-button__spinner", c), m = "start" === n ? "marginEnd" : "marginStart", h = (0, r.useMemo)(() => ({
                    display: "flex",
                    alignItems: "center",
                    position: t ? "relative" : "absolute",
                    [m]: t ? o : 0,
                    fontSize: "1em",
                    lineHeight: "normal",
                    ...f
                }), [f, t, m, o]);
                return (0, s.jsx)(i.m.div, {
                    className: p,
                    ...d,
                    __css: h,
                    children: u
                })
            }
            c.displayName = "ButtonSpinner";
            var f = n(81103),
                d = n(16554),
                p = n(77030),
                m = n(33179),
                h = (0, d.G)((e, t) => {
                    let n = (0, o.i)(),
                        u = (0, p.mq)("Button", { ...n,
                            ...e
                        }),
                        {
                            isDisabled: l = null == n ? void 0 : n.isDisabled,
                            isLoading: d,
                            isActive: h,
                            children: v,
                            leftIcon: y,
                            rightIcon: b,
                            loadingText: x,
                            iconSpacing: w = "0.5rem",
                            type: O,
                            spinner: k,
                            spinnerPlacement: j = "start",
                            className: E,
                            as: S,
                            ...D
                        } = (0, m.Lr)(e),
                        C = (0, r.useMemo)(() => {
                            let e = { ...null == u ? void 0 : u._focus,
                                zIndex: 1
                            };
                            return {
                                display: "inline-flex",
                                appearance: "none",
                                alignItems: "center",
                                justifyContent: "center",
                                userSelect: "none",
                                position: "relative",
                                whiteSpace: "nowrap",
                                verticalAlign: "middle",
                                outline: "none",
                                ...u,
                                ...!!n && {
                                    _focus: e
                                }
                            }
                        }, [u, n]),
                        {
                            ref: L,
                            type: N
                        } = function(e) {
                            let [t, n] = (0, r.useState)(!e);
                            return {
                                ref: (0, r.useCallback)(e => {
                                    e && n("BUTTON" === e.tagName)
                                }, []),
                                type: t ? "button" : void 0
                            }
                        }(S),
                        A = {
                            rightIcon: b,
                            leftIcon: y,
                            iconSpacing: w,
                            children: v
                        };
                    return (0, s.jsxs)(i.m.button, {
                        ref: (0, f.qq)(t, L),
                        as: S,
                        type: null != O ? O : N,
                        "data-active": (0, a.PB)(h),
                        "data-loading": (0, a.PB)(d),
                        __css: C,
                        className: (0, a.cx)("chakra-button", E),
                        ...D,
                        disabled: l || d,
                        children: [d && "start" === j && (0, s.jsx)(c, {
                            className: "chakra-button__spinner--start",
                            label: x,
                            placement: "start",
                            spacing: w,
                            children: k
                        }), d ? x || (0, s.jsx)(i.m.span, {
                            opacity: 0,
                            children: (0, s.jsx)(g, { ...A
                            })
                        }) : (0, s.jsx)(g, { ...A
                        }), d && "end" === j && (0, s.jsx)(c, {
                            className: "chakra-button__spinner--end",
                            label: x,
                            placement: "end",
                            spacing: w,
                            children: k
                        })]
                    })
                });

            function g(e) {
                let {
                    leftIcon: t,
                    rightIcon: n,
                    children: r,
                    iconSpacing: o
                } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [t && (0, s.jsx)(u, {
                        marginEnd: o,
                        children: t
                    }), r, n && (0, s.jsx)(u, {
                        marginStart: o,
                        children: n
                    })]
                })
            }
            h.displayName = "Button"
        },
        61735: function(e, t, n) {
            "use strict";

            function r(e) {
                var t;
                if (!(null != e && "object" == typeof e && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE)) return !1;
                let n = null != (t = e.ownerDocument.defaultView) ? t : window;
                return e instanceof n.HTMLElement
            }
            n.d(t, {
                Re: function() {
                    return r
                }
            })
        },
        24027: function(e, t, n) {
            "use strict";
            n.d(t, {
                I: function() {
                    return s
                }
            });
            var r = n(36948),
                o = n(16554),
                i = n(67294),
                a = n(85893);

            function s(e) {
                let {
                    viewBox: t = "0 0 24 24",
                    d: n,
                    displayName: s,
                    defaultProps: u = {}
                } = e, l = i.Children.toArray(e.path), c = (0, o.G)((e, o) => (0, a.jsx)(r.J, {
                    ref: o,
                    viewBox: t,
                    ...u,
                    ...e,
                    children: l.length ? l : (0, a.jsx)("path", {
                        fill: "currentColor",
                        d: n
                    })
                }));
                return c.displayName = s, c
            }
        },
        27766: function(e, t, n) {
            "use strict";
            n.d(t, {
                h: function() {
                    return o
                }
            });
            var r = n(85893);
            let o = (0, n(24027).I)({
                displayName: "InfoOutlineIcon",
                path: (0, r.jsxs)("g", {
                    fill: "currentColor",
                    stroke: "currentColor",
                    strokeLinecap: "square",
                    strokeWidth: "2",
                    children: [(0, r.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        fill: "none",
                        r: "11",
                        stroke: "currentColor"
                    }), (0, r.jsx)("line", {
                        fill: "none",
                        x1: "11.959",
                        x2: "11.959",
                        y1: "11",
                        y2: "17"
                    }), (0, r.jsx)("circle", {
                        cx: "11.959",
                        cy: "7",
                        r: "1",
                        stroke: "none"
                    })]
                })
            })
        },
        6089: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return c
                }
            });
            var r = n(16554),
                o = n(85893),
                i = (0, r.G)(function(e, t) {
                    let {
                        htmlWidth: n,
                        htmlHeight: r,
                        alt: i,
                        ...a
                    } = e;
                    return (0, o.jsx)("img", {
                        width: n,
                        height: r,
                        ref: t,
                        alt: i,
                        ...a
                    })
                });
            i.displayName = "NativeImage";
            var a = n(26245),
                s = n(67294),
                u = (e, t) => "loaded" !== e && "beforeLoadOrError" === t || "failed" === e && "onError" === t,
                l = n(16914),
                c = (0, r.G)(function(e, t) {
                    let {
                        fallbackSrc: n,
                        fallback: r,
                        src: c,
                        srcSet: f,
                        align: d,
                        fit: p,
                        loading: m,
                        ignoreFallback: h,
                        crossOrigin: g,
                        fallbackStrategy: v = "beforeLoadOrError",
                        referrerPolicy: y,
                        ...b
                    } = e, x = void 0 !== n || void 0 !== r, w = null != m || h || !x, O = u(function(e) {
                        let {
                            loading: t,
                            src: n,
                            srcSet: r,
                            onLoad: o,
                            onError: i,
                            crossOrigin: u,
                            sizes: l,
                            ignoreFallback: c
                        } = e, [f, d] = (0, s.useState)("pending");
                        (0, s.useEffect)(() => {
                            d(n ? "loading" : "pending")
                        }, [n]);
                        let p = (0, s.useRef)(),
                            m = (0, s.useCallback)(() => {
                                if (!n) return;
                                h();
                                let e = new Image;
                                e.src = n, u && (e.crossOrigin = u), r && (e.srcset = r), l && (e.sizes = l), t && (e.loading = t), e.onload = e => {
                                    h(), d("loaded"), null == o || o(e)
                                }, e.onerror = e => {
                                    h(), d("failed"), null == i || i(e)
                                }, p.current = e
                            }, [n, u, r, l, o, i, t]),
                            h = () => {
                                p.current && (p.current.onload = null, p.current.onerror = null, p.current = null)
                            };
                        return (0, a.G)(() => {
                            if (!c) return "loading" === f && m(), () => {
                                h()
                            }
                        }, [f, m, c]), c ? "loaded" : f
                    }({ ...e,
                        crossOrigin: g,
                        ignoreFallback: w
                    }), v), k = {
                        ref: t,
                        objectFit: p,
                        objectPosition: d,
                        ...w ? b : function(e, t = []) {
                            let n = Object.assign({}, e);
                            for (let e of t) e in n && delete n[e];
                            return n
                        }(b, ["onError", "onLoad"])
                    };
                    return O ? r || (0, o.jsx)(l.m.img, {
                        as: i,
                        className: "chakra-image__placeholder",
                        src: n,
                        ...k
                    }) : (0, o.jsx)(l.m.img, {
                        as: i,
                        src: c,
                        srcSet: f,
                        crossOrigin: g,
                        loading: m,
                        referrerPolicy: y,
                        className: "chakra-image",
                        ...k
                    })
                });
            c.displayName = "Image"
        },
        71293: function(e, t, n) {
            "use strict";
            n.d(t, {
                x: function() {
                    return c
                }
            });
            var r = n(16554),
                o = n(77030),
                i = n(33179),
                a = n(16914),
                s = n(25432),
                u = n(87052),
                l = n(85893),
                c = (0, r.G)(function(e, t) {
                    let n = (0, o.mq)("Text", e),
                        {
                            className: r,
                            align: c,
                            decoration: f,
                            casing: d,
                            ...p
                        } = (0, i.Lr)(e),
                        m = (0, u.o)({
                            textAlign: e.align,
                            textDecoration: e.decoration,
                            textTransform: e.casing
                        });
                    return (0, l.jsx)(a.m.p, {
                        ref: t,
                        className: (0, s.cx)("chakra-text", e.className),
                        ...m,
                        ...p,
                        __css: n
                    })
                });
            c.displayName = "Text"
        },
        34292: function(e, t, n) {
            "use strict";
            n.d(t, {
                U: function() {
                    return a
                }
            });
            var r = n(55281),
                o = n(16554),
                i = n(85893),
                a = (0, o.G)((e, t) => (0, i.jsx)(r.K, {
                    align: "center",
                    ...e,
                    direction: "row",
                    ref: t
                }));
            a.displayName = "HStack"
        },
        32883: function(e, t, n) {
            "use strict";
            n.d(t, {
                r: function() {
                    return l
                }
            });
            var r = n(16554),
                o = n(77030),
                i = n(33179),
                a = n(16914),
                s = n(25432),
                u = n(85893),
                l = (0, r.G)(function(e, t) {
                    let n = (0, o.mq)("Link", e),
                        {
                            className: r,
                            isExternal: l,
                            ...c
                        } = (0, i.Lr)(e);
                    return (0, u.jsx)(a.m.a, {
                        target: l ? "_blank" : void 0,
                        rel: l ? "noopener" : void 0,
                        ref: t,
                        className: (0, s.cx)("chakra-link", r),
                        ...c,
                        __css: n
                    })
                });
            l.displayName = "Link"
        },
        93717: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return a
                }
            });
            var r = n(16554),
                o = n(16914),
                i = n(85893),
                a = (0, r.G)(function(e, t) {
                    let {
                        direction: n,
                        align: r,
                        justify: a,
                        wrap: s,
                        basis: u,
                        grow: l,
                        shrink: c,
                        ...f
                    } = e;
                    return (0, i.jsx)(o.m.div, {
                        ref: t,
                        __css: {
                            display: "flex",
                            flexDirection: n,
                            alignItems: r,
                            justifyContent: a,
                            flexWrap: s,
                            flexBasis: u,
                            flexGrow: l,
                            flexShrink: c
                        },
                        ...f
                    })
                });
            a.displayName = "Flex"
        },
        48783: function(e, t, n) {
            "use strict";
            n.d(t, {
                g: function() {
                    return a
                }
            });
            var r = n(55281),
                o = n(16554),
                i = n(85893),
                a = (0, o.G)((e, t) => (0, i.jsx)(r.K, {
                    align: "center",
                    ...e,
                    direction: "column",
                    ref: t
                }));
            a.displayName = "VStack"
        },
        57747: function(e, t, n) {
            "use strict";
            n.d(t, {
                xu: function() {
                    return a
                }
            });
            var r = n(16914),
                o = n(16554),
                i = n(85893),
                a = (0, r.m)("div");
            a.displayName = "Box";
            var s = (0, o.G)(function(e, t) {
                let {
                    size: n,
                    centerContent: r = !0,
                    ...o
                } = e;
                return (0, i.jsx)(a, {
                    ref: t,
                    boxSize: n,
                    __css: { ...r ? {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        } : {},
                        flexShrink: 0,
                        flexGrow: 0
                    },
                    ...o
                })
            });
            s.displayName = "Square", (0, o.G)(function(e, t) {
                let {
                    size: n,
                    ...r
                } = e;
                return (0, i.jsx)(s, {
                    size: n,
                    ref: t,
                    borderRadius: "9999px",
                    ...r
                })
            }).displayName = "Circle"
        },
        55281: function(e, t, n) {
            "use strict";
            n.d(t, {
                K: function() {
                    return f
                }
            });
            var r = n(16914),
                o = n(85893),
                i = e => (0, o.jsx)(r.m.div, {
                    className: "chakra-stack__item",
                    ...e,
                    __css: {
                        display: "inline-block",
                        flex: "0 0 auto",
                        minWidth: 0,
                        ...e.__css
                    }
                });
            i.displayName = "StackItem";
            var a = n(33951),
                s = n(92495),
                u = n(25432),
                l = n(16554),
                c = n(67294),
                f = (0, l.G)((e, t) => {
                    let {
                        isInline: n,
                        direction: l,
                        align: f,
                        justify: d,
                        spacing: p = "0.5rem",
                        wrap: m,
                        children: h,
                        divider: g,
                        className: v,
                        shouldWrapChildren: y,
                        ...b
                    } = e, x = n ? "row" : null != l ? l : "column", w = (0, c.useMemo)(() => (function(e) {
                        let {
                            spacing: t,
                            direction: n
                        } = e, r = {
                            column: {
                                my: t,
                                mx: 0,
                                borderLeftWidth: 0,
                                borderBottomWidth: "1px"
                            },
                            "column-reverse": {
                                my: t,
                                mx: 0,
                                borderLeftWidth: 0,
                                borderBottomWidth: "1px"
                            },
                            row: {
                                mx: t,
                                my: 0,
                                borderLeftWidth: "1px",
                                borderBottomWidth: 0
                            },
                            "row-reverse": {
                                mx: t,
                                my: 0,
                                borderLeftWidth: "1px",
                                borderBottomWidth: 0
                            }
                        };
                        return {
                            "&": (0, a.XQ)(n, e => r[e])
                        }
                    })({
                        spacing: p,
                        direction: x
                    }), [p, x]), O = !!g, k = !y && !O, j = (0, c.useMemo)(() => {
                        let e = (0, s.W)(h);
                        return k ? e : e.map((t, n) => {
                            let r = void 0 !== t.key ? t.key : n,
                                a = n + 1 === e.length,
                                s = (0, o.jsx)(i, {
                                    children: t
                                }, r),
                                u = y ? s : t;
                            if (!O) return u;
                            let l = (0, c.cloneElement)(g, {
                                __css: w
                            });
                            return (0, o.jsxs)(c.Fragment, {
                                children: [u, a ? null : l]
                            }, r)
                        })
                    }, [g, w, O, k, y, h]), E = (0, u.cx)("chakra-stack", v);
                    return (0, o.jsx)(r.m.div, {
                        ref: t,
                        display: "flex",
                        alignItems: f,
                        justifyContent: d,
                        flexDirection: x,
                        flexWrap: m,
                        gap: O ? void 0 : p,
                        className: E,
                        ...b,
                        children: j
                    })
                });
            f.displayName = "Stack"
        },
        87052: function(e, t, n) {
            "use strict";

            function r(e) {
                let t = Object.assign({}, e);
                for (let e in t) void 0 === t[e] && delete t[e];
                return t
            }
            n.d(t, {
                o: function() {
                    return r
                }
            })
        },
        92495: function(e, t, n) {
            "use strict";
            n.d(t, {
                W: function() {
                    return o
                }
            });
            var r = n(67294);

            function o(e) {
                return r.Children.toArray(e).filter(e => (0, r.isValidElement)(e))
            }
        },
        81103: function(e, t, n) {
            "use strict";
            n.d(t, {
                lq: function() {
                    return o
                },
                qq: function() {
                    return i
                }
            });
            var r = n(67294);

            function o(...e) {
                return t => {
                    e.forEach(e => {
                        ! function(e, t) {
                            if (null != e) {
                                if ("function" == typeof e) {
                                    e(t);
                                    return
                                }
                                try {
                                    e.current = t
                                } catch (n) {
                                    throw Error(`Cannot assign value '${t}' to ref '${e}'`)
                                }
                            }
                        }(e, t)
                    })
                }
            }

            function i(...e) {
                return (0, r.useMemo)(() => o(...e), e)
            }
        },
        7963: function(e, t, n) {
            "use strict";
            n.d(t, {
                p: function() {
                    return s
                }
            });
            var r = n(21089),
                o = n(3988),
                i = n(7634),
                a = n(67294);

            function s(e) {
                let {
                    theme: t
                } = (0, i.uP)(), n = (0, r.OX)();
                return (0, a.useMemo)(() => (0, o.Cj)(t.direction, { ...n,
                    ...e
                }), [e, t.direction, n])
            }
        },
        59477: function(e, t, n) {
            "use strict";
            n.d(t, {
                u: function() {
                    return e$
                }
            });
            var r, o, i, a, s, u = {
                    exit: {
                        scale: .85,
                        opacity: 0,
                        transition: {
                            opacity: {
                                duration: .15,
                                easings: "easeInOut"
                            },
                            scale: {
                                duration: .2,
                                easings: "easeInOut"
                            }
                        }
                    },
                    enter: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            opacity: {
                                easings: "easeOut",
                                duration: .2
                            },
                            scale: {
                                duration: .2,
                                ease: [.175, .885, .4, 1.1]
                            }
                        }
                    }
                },
                l = n(61735),
                c = (e, t) => ({
                    var: e,
                    varRef: t ? `var(${e}, ${t})` : `var(${e})`
                }),
                f = {
                    arrowShadowColor: c("--popper-arrow-shadow-color"),
                    arrowSize: c("--popper-arrow-size", "8px"),
                    arrowSizeHalf: c("--popper-arrow-size-half"),
                    arrowBg: c("--popper-arrow-bg"),
                    transformOrigin: c("--popper-transform-origin"),
                    arrowOffset: c("--popper-arrow-offset")
                },
                d = {
                    top: "bottom center",
                    "top-start": "bottom left",
                    "top-end": "bottom right",
                    bottom: "top center",
                    "bottom-start": "top left",
                    "bottom-end": "top right",
                    left: "right center",
                    "left-start": "right top",
                    "left-end": "right bottom",
                    right: "left center",
                    "right-start": "left top",
                    "right-end": "left bottom"
                },
                p = e => d[e],
                m = {
                    scroll: !0,
                    resize: !0
                },
                h = {
                    name: "matchWidth",
                    enabled: !0,
                    phase: "beforeWrite",
                    requires: ["computeStyles"],
                    fn: ({
                        state: e
                    }) => {
                        e.styles.popper.width = `${e.rects.reference.width}px`
                    },
                    effect: ({
                        state: e
                    }) => () => {
                        let t = e.elements.reference;
                        e.elements.popper.style.width = `${t.offsetWidth}px`
                    }
                },
                g = {
                    name: "transformOrigin",
                    enabled: !0,
                    phase: "write",
                    fn: ({
                        state: e
                    }) => {
                        v(e)
                    },
                    effect: ({
                        state: e
                    }) => () => {
                        v(e)
                    }
                },
                v = e => {
                    e.elements.popper.style.setProperty(f.transformOrigin.var, p(e.placement))
                },
                y = {
                    name: "positionArrow",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: ({
                        state: e
                    }) => {
                        b(e)
                    }
                },
                b = e => {
                    var t;
                    if (!e.placement) return;
                    let n = x(e.placement);
                    if ((null == (t = e.elements) ? void 0 : t.arrow) && n) {
                        Object.assign(e.elements.arrow.style, {
                            [n.property]: n.value,
                            width: f.arrowSize.varRef,
                            height: f.arrowSize.varRef,
                            zIndex: -1
                        });
                        let t = {
                            [f.arrowSizeHalf.var]: `calc(${f.arrowSize.varRef} / 2 - 1px)`,
                            [f.arrowOffset.var]: `calc(${f.arrowSizeHalf.varRef} * -1)`
                        };
                        for (let n in t) e.elements.arrow.style.setProperty(n, t[n])
                    }
                },
                x = e => e.startsWith("top") ? {
                    property: "bottom",
                    value: f.arrowOffset.varRef
                } : e.startsWith("bottom") ? {
                    property: "top",
                    value: f.arrowOffset.varRef
                } : e.startsWith("left") ? {
                    property: "right",
                    value: f.arrowOffset.varRef
                } : e.startsWith("right") ? {
                    property: "left",
                    value: f.arrowOffset.varRef
                } : void 0,
                w = {
                    name: "innerArrow",
                    enabled: !0,
                    phase: "main",
                    requires: ["arrow"],
                    fn: ({
                        state: e
                    }) => {
                        O(e)
                    },
                    effect: ({
                        state: e
                    }) => () => {
                        O(e)
                    }
                },
                O = e => {
                    var t;
                    if (!e.elements.arrow) return;
                    let n = e.elements.arrow.querySelector("[data-popper-arrow-inner]");
                    if (!n) return;
                    let r = (t = e.placement).includes("top") ? "1px 1px 0px 0 var(--popper-arrow-shadow-color)" : t.includes("bottom") ? "-1px -1px 0px 0 var(--popper-arrow-shadow-color)" : t.includes("right") ? "-1px 1px 0px 0 var(--popper-arrow-shadow-color)" : t.includes("left") ? "1px -1px 0px 0 var(--popper-arrow-shadow-color)" : void 0;
                    r && n.style.setProperty("--popper-arrow-default-shadow", r), Object.assign(n.style, {
                        transform: "rotate(45deg)",
                        background: f.arrowBg.varRef,
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        zIndex: "inherit",
                        boxShadow: "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"
                    })
                },
                k = {
                    "start-start": {
                        ltr: "left-start",
                        rtl: "right-start"
                    },
                    "start-end": {
                        ltr: "left-end",
                        rtl: "right-end"
                    },
                    "end-start": {
                        ltr: "right-start",
                        rtl: "left-start"
                    },
                    "end-end": {
                        ltr: "right-end",
                        rtl: "left-end"
                    },
                    start: {
                        ltr: "left",
                        rtl: "right"
                    },
                    end: {
                        ltr: "right",
                        rtl: "left"
                    }
                },
                j = {
                    "auto-start": "auto-end",
                    "auto-end": "auto-start",
                    "top-start": "top-end",
                    "top-end": "top-start",
                    "bottom-start": "bottom-end",
                    "bottom-end": "bottom-start"
                },
                E = n(81103);

            function S(e) {
                if (null == e) return window;
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return t && t.defaultView || window
                }
                return e
            }

            function D(e) {
                var t = S(e).Element;
                return e instanceof t || e instanceof Element
            }

            function C(e) {
                var t = S(e).HTMLElement;
                return e instanceof t || e instanceof HTMLElement
            }

            function L(e) {
                if ("undefined" == typeof ShadowRoot) return !1;
                var t = S(e).ShadowRoot;
                return e instanceof t || e instanceof ShadowRoot
            }
            var N = Math.max,
                A = Math.min,
                I = Math.round;

            function P() {
                var e = navigator.userAgentData;
                return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
                    return e.brand + "/" + e.version
                }).join(" ") : navigator.userAgent
            }

            function _() {
                return !/^((?!chrome|android).)*safari/i.test(P())
            }

            function T(e, t, n) {
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                var r = e.getBoundingClientRect(),
                    o = 1,
                    i = 1;
                t && C(e) && (o = e.offsetWidth > 0 && I(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && I(r.height) / e.offsetHeight || 1);
                var a = (D(e) ? S(e) : window).visualViewport,
                    s = !_() && n,
                    u = (r.left + (s && a ? a.offsetLeft : 0)) / o,
                    l = (r.top + (s && a ? a.offsetTop : 0)) / i,
                    c = r.width / o,
                    f = r.height / i;
                return {
                    width: c,
                    height: f,
                    top: l,
                    right: u + c,
                    bottom: l + f,
                    left: u,
                    x: u,
                    y: l
                }
            }

            function W(e) {
                var t = S(e);
                return {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function M(e) {
                return e ? (e.nodeName || "").toLowerCase() : null
            }

            function R(e) {
                return ((D(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function B(e) {
                return T(R(e)).left + W(e).scrollLeft
            }

            function z(e) {
                return S(e).getComputedStyle(e)
            }

            function q(e) {
                var t = z(e),
                    n = t.overflow,
                    r = t.overflowX,
                    o = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + o + r)
            }

            function H(e) {
                var t = T(e),
                    n = e.offsetWidth,
                    r = e.offsetHeight;
                return 1 >= Math.abs(t.width - n) && (n = t.width), 1 >= Math.abs(t.height - r) && (r = t.height), {
                    x: e.offsetLeft,
                    y: e.offsetTop,
                    width: n,
                    height: r
                }
            }

            function F(e) {
                return "html" === M(e) ? e : e.assignedSlot || e.parentNode || (L(e) ? e.host : null) || R(e)
            }

            function V(e, t) {
                void 0 === t && (t = []);
                var n, r = function e(t) {
                        return ["html", "body", "#document"].indexOf(M(t)) >= 0 ? t.ownerDocument.body : C(t) && q(t) ? t : e(F(t))
                    }(e),
                    o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    i = S(r),
                    a = o ? [i].concat(i.visualViewport || [], q(r) ? r : []) : r,
                    s = t.concat(a);
                return o ? s : s.concat(V(F(a)))
            }

            function $(e) {
                return C(e) && "fixed" !== z(e).position ? e.offsetParent : null
            }

            function G(e) {
                for (var t = S(e), n = $(e); n && ["table", "td", "th"].indexOf(M(n)) >= 0 && "static" === z(n).position;) n = $(n);
                return n && ("html" === M(n) || "body" === M(n) && "static" === z(n).position) ? t : n || function(e) {
                    var t = /firefox/i.test(P());
                    if (/Trident/i.test(P()) && C(e) && "fixed" === z(e).position) return null;
                    var n = F(e);
                    for (L(n) && (n = n.host); C(n) && 0 > ["html", "body"].indexOf(M(n));) {
                        var r = z(n);
                        if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
                        n = n.parentNode
                    }
                    return null
                }(e) || t
            }
            var U = "bottom",
                X = "right",
                K = "left",
                Y = "auto",
                J = ["top", U, X, K],
                Q = "start",
                Z = "viewport",
                ee = "popper",
                et = J.reduce(function(e, t) {
                    return e.concat([t + "-" + Q, t + "-end"])
                }, []),
                en = [].concat(J, [Y]).reduce(function(e, t) {
                    return e.concat([t, t + "-" + Q, t + "-end"])
                }, []),
                er = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"],
                eo = {
                    placement: "bottom",
                    modifiers: [],
                    strategy: "absolute"
                };

            function ei() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return !t.some(function(e) {
                    return !(e && "function" == typeof e.getBoundingClientRect)
                })
            }
            var ea = {
                passive: !0
            };

            function es(e) {
                return e.split("-")[0]
            }

            function eu(e) {
                return e.split("-")[1]
            }

            function el(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
            }

            function ec(e) {
                var t, n = e.reference,
                    r = e.element,
                    o = e.placement,
                    i = o ? es(o) : null,
                    a = o ? eu(o) : null,
                    s = n.x + n.width / 2 - r.width / 2,
                    u = n.y + n.height / 2 - r.height / 2;
                switch (i) {
                    case "top":
                        t = {
                            x: s,
                            y: n.y - r.height
                        };
                        break;
                    case U:
                        t = {
                            x: s,
                            y: n.y + n.height
                        };
                        break;
                    case X:
                        t = {
                            x: n.x + n.width,
                            y: u
                        };
                        break;
                    case K:
                        t = {
                            x: n.x - r.width,
                            y: u
                        };
                        break;
                    default:
                        t = {
                            x: n.x,
                            y: n.y
                        }
                }
                var l = i ? el(i) : null;
                if (null != l) {
                    var c = "y" === l ? "height" : "width";
                    switch (a) {
                        case Q:
                            t[l] = t[l] - (n[c] / 2 - r[c] / 2);
                            break;
                        case "end":
                            t[l] = t[l] + (n[c] / 2 - r[c] / 2)
                    }
                }
                return t
            }
            var ef = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            };

            function ed(e) {
                var t, n, r, o, i, a, s, u = e.popper,
                    l = e.popperRect,
                    c = e.placement,
                    f = e.variation,
                    d = e.offsets,
                    p = e.position,
                    m = e.gpuAcceleration,
                    h = e.adaptive,
                    g = e.roundOffsets,
                    v = e.isFixed,
                    y = d.x,
                    b = void 0 === y ? 0 : y,
                    x = d.y,
                    w = void 0 === x ? 0 : x,
                    O = "function" == typeof g ? g({
                        x: b,
                        y: w
                    }) : {
                        x: b,
                        y: w
                    };
                b = O.x, w = O.y;
                var k = d.hasOwnProperty("x"),
                    j = d.hasOwnProperty("y"),
                    E = K,
                    D = "top",
                    C = window;
                if (h) {
                    var L = G(u),
                        N = "clientHeight",
                        A = "clientWidth";
                    L === S(u) && "static" !== z(L = R(u)).position && "absolute" === p && (N = "scrollHeight", A = "scrollWidth"), ("top" === c || (c === K || c === X) && "end" === f) && (D = U, w -= (v && L === C && C.visualViewport ? C.visualViewport.height : L[N]) - l.height, w *= m ? 1 : -1), (c === K || ("top" === c || c === U) && "end" === f) && (E = X, b -= (v && L === C && C.visualViewport ? C.visualViewport.width : L[A]) - l.width, b *= m ? 1 : -1)
                }
                var P = Object.assign({
                        position: p
                    }, h && ef),
                    _ = !0 === g ? (t = {
                        x: b,
                        y: w
                    }, n = S(u), r = t.x, o = t.y, {
                        x: I(r * (i = n.devicePixelRatio || 1)) / i || 0,
                        y: I(o * i) / i || 0
                    }) : {
                        x: b,
                        y: w
                    };
                return (b = _.x, w = _.y, m) ? Object.assign({}, P, ((s = {})[D] = j ? "0" : "", s[E] = k ? "0" : "", s.transform = 1 >= (C.devicePixelRatio || 1) ? "translate(" + b + "px, " + w + "px)" : "translate3d(" + b + "px, " + w + "px, 0)", s)) : Object.assign({}, P, ((a = {})[D] = j ? w + "px" : "", a[E] = k ? b + "px" : "", a.transform = "", a))
            }
            var ep = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };

            function em(e) {
                return e.replace(/left|right|bottom|top/g, function(e) {
                    return ep[e]
                })
            }
            var eh = {
                start: "end",
                end: "start"
            };

            function eg(e) {
                return e.replace(/start|end/g, function(e) {
                    return eh[e]
                })
            }

            function ev(e, t) {
                var n = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && L(n)) {
                    var r = t;
                    do {
                        if (r && e.isSameNode(r)) return !0;
                        r = r.parentNode || r.host
                    } while (r)
                }
                return !1
            }

            function ey(e) {
                return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                })
            }

            function eb(e, t, n) {
                var r, o, i, a, s, u, l, c, f, d;
                return t === Z ? ey(function(e, t) {
                    var n = S(e),
                        r = R(e),
                        o = n.visualViewport,
                        i = r.clientWidth,
                        a = r.clientHeight,
                        s = 0,
                        u = 0;
                    if (o) {
                        i = o.width, a = o.height;
                        var l = _();
                        (l || !l && "fixed" === t) && (s = o.offsetLeft, u = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: a,
                        x: s + B(e),
                        y: u
                    }
                }(e, n)) : D(t) ? ((r = T(t, !1, "fixed" === n)).top = r.top + t.clientTop, r.left = r.left + t.clientLeft, r.bottom = r.top + t.clientHeight, r.right = r.left + t.clientWidth, r.width = t.clientWidth, r.height = t.clientHeight, r.x = r.left, r.y = r.top, r) : ey((o = R(e), a = R(o), s = W(o), u = null == (i = o.ownerDocument) ? void 0 : i.body, l = N(a.scrollWidth, a.clientWidth, u ? u.scrollWidth : 0, u ? u.clientWidth : 0), c = N(a.scrollHeight, a.clientHeight, u ? u.scrollHeight : 0, u ? u.clientHeight : 0), f = -s.scrollLeft + B(o), d = -s.scrollTop, "rtl" === z(u || a).direction && (f += N(a.clientWidth, u ? u.clientWidth : 0) - l), {
                    width: l,
                    height: c,
                    x: f,
                    y: d
                }))
            }

            function ex() {
                return {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            }

            function ew(e) {
                return Object.assign({}, ex(), e)
            }

            function eO(e, t) {
                return t.reduce(function(t, n) {
                    return t[n] = e, t
                }, {})
            }

            function ek(e, t) {
                void 0 === t && (t = {});
                var n, r, o, i, a, s, u, l, c = t,
                    f = c.placement,
                    d = void 0 === f ? e.placement : f,
                    p = c.strategy,
                    m = void 0 === p ? e.strategy : p,
                    h = c.boundary,
                    g = c.rootBoundary,
                    v = c.elementContext,
                    y = void 0 === v ? ee : v,
                    b = c.altBoundary,
                    x = c.padding,
                    w = void 0 === x ? 0 : x,
                    O = ew("number" != typeof w ? w : eO(w, J)),
                    k = e.rects.popper,
                    j = e.elements[void 0 !== b && b ? y === ee ? "reference" : ee : y],
                    E = (n = D(j) ? j : j.contextElement || R(e.elements.popper), r = void 0 === h ? "clippingParents" : h, o = void 0 === g ? Z : g, u = (s = [].concat("clippingParents" === r ? (i = V(F(n)), D(a = ["absolute", "fixed"].indexOf(z(n).position) >= 0 && C(n) ? G(n) : n) ? i.filter(function(e) {
                        return D(e) && ev(e, a) && "body" !== M(e)
                    }) : []) : [].concat(r), [o]))[0], (l = s.reduce(function(e, t) {
                        var r = eb(n, t, m);
                        return e.top = N(r.top, e.top), e.right = A(r.right, e.right), e.bottom = A(r.bottom, e.bottom), e.left = N(r.left, e.left), e
                    }, eb(n, u, m))).width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l),
                    S = T(e.elements.reference),
                    L = ec({
                        reference: S,
                        element: k,
                        strategy: "absolute",
                        placement: d
                    }),
                    I = ey(Object.assign({}, k, L)),
                    P = y === ee ? I : S,
                    _ = {
                        top: E.top - P.top + O.top,
                        bottom: P.bottom - E.bottom + O.bottom,
                        left: E.left - P.left + O.left,
                        right: P.right - E.right + O.right
                    },
                    W = e.modifiersData.offset;
                if (y === ee && W) {
                    var B = W[d];
                    Object.keys(_).forEach(function(e) {
                        var t = [X, U].indexOf(e) >= 0 ? 1 : -1,
                            n = ["top", U].indexOf(e) >= 0 ? "y" : "x";
                        _[e] += B[n] * t
                    })
                }
                return _
            }

            function ej(e, t, n) {
                return N(e, A(t, n))
            }

            function eE(e, t, n) {
                return void 0 === n && (n = {
                    x: 0,
                    y: 0
                }), {
                    top: e.top - t.height - n.y,
                    right: e.right - t.width + n.x,
                    bottom: e.bottom - t.height + n.y,
                    left: e.left - t.width - n.x
                }
            }

            function eS(e) {
                return ["top", X, U, K].some(function(t) {
                    return e[t] >= 0
                })
            }
            var eD = (i = void 0 === (o = (r = {
                    defaultModifiers: [{
                        name: "eventListeners",
                        enabled: !0,
                        phase: "write",
                        fn: function() {},
                        effect: function(e) {
                            var t = e.state,
                                n = e.instance,
                                r = e.options,
                                o = r.scroll,
                                i = void 0 === o || o,
                                a = r.resize,
                                s = void 0 === a || a,
                                u = S(t.elements.popper),
                                l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                            return i && l.forEach(function(e) {
                                    e.addEventListener("scroll", n.update, ea)
                                }), s && u.addEventListener("resize", n.update, ea),
                                function() {
                                    i && l.forEach(function(e) {
                                        e.removeEventListener("scroll", n.update, ea)
                                    }), s && u.removeEventListener("resize", n.update, ea)
                                }
                        },
                        data: {}
                    }, {
                        name: "popperOffsets",
                        enabled: !0,
                        phase: "read",
                        fn: function(e) {
                            var t = e.state,
                                n = e.name;
                            t.modifiersData[n] = ec({
                                reference: t.rects.reference,
                                element: t.rects.popper,
                                strategy: "absolute",
                                placement: t.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "computeStyles",
                        enabled: !0,
                        phase: "beforeWrite",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = n.gpuAcceleration,
                                o = n.adaptive,
                                i = n.roundOffsets,
                                a = void 0 === i || i,
                                s = {
                                    placement: es(t.placement),
                                    variation: eu(t.placement),
                                    popper: t.elements.popper,
                                    popperRect: t.rects.popper,
                                    gpuAcceleration: void 0 === r || r,
                                    isFixed: "fixed" === t.options.strategy
                                };
                            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, ed(Object.assign({}, s, {
                                offsets: t.modifiersData.popperOffsets,
                                position: t.options.strategy,
                                adaptive: void 0 === o || o,
                                roundOffsets: a
                            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, ed(Object.assign({}, s, {
                                offsets: t.modifiersData.arrow,
                                position: "absolute",
                                adaptive: !1,
                                roundOffsets: a
                            })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-placement": t.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "applyStyles",
                        enabled: !0,
                        phase: "write",
                        fn: function(e) {
                            var t = e.state;
                            Object.keys(t.elements).forEach(function(e) {
                                var n = t.styles[e] || {},
                                    r = t.attributes[e] || {},
                                    o = t.elements[e];
                                C(o) && M(o) && (Object.assign(o.style, n), Object.keys(r).forEach(function(e) {
                                    var t = r[e];
                                    !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
                                }))
                            })
                        },
                        effect: function(e) {
                            var t = e.state,
                                n = {
                                    popper: {
                                        position: t.options.strategy,
                                        left: "0",
                                        top: "0",
                                        margin: "0"
                                    },
                                    arrow: {
                                        position: "absolute"
                                    },
                                    reference: {}
                                };
                            return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                                function() {
                                    Object.keys(t.elements).forEach(function(e) {
                                        var r = t.elements[e],
                                            o = t.attributes[e] || {},
                                            i = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function(e, t) {
                                                return e[t] = "", e
                                            }, {});
                                        C(r) && M(r) && (Object.assign(r.style, i), Object.keys(o).forEach(function(e) {
                                            r.removeAttribute(e)
                                        }))
                                    })
                                }
                        },
                        requires: ["computeStyles"]
                    }, {
                        name: "offset",
                        enabled: !0,
                        phase: "main",
                        requires: ["popperOffsets"],
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name,
                                o = n.offset,
                                i = void 0 === o ? [0, 0] : o,
                                a = en.reduce(function(e, n) {
                                    var r, o, a, s, u, l;
                                    return e[n] = (r = t.rects, a = [K, "top"].indexOf(o = es(n)) >= 0 ? -1 : 1, u = (s = "function" == typeof i ? i(Object.assign({}, r, {
                                        placement: n
                                    })) : i)[0], l = s[1], u = u || 0, l = (l || 0) * a, [K, X].indexOf(o) >= 0 ? {
                                        x: l,
                                        y: u
                                    } : {
                                        x: u,
                                        y: l
                                    }), e
                                }, {}),
                                s = a[t.placement],
                                u = s.x,
                                l = s.y;
                            null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = a
                        }
                    }, {
                        name: "flip",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name;
                            if (!t.modifiersData[r]._skip) {
                                for (var o = n.mainAxis, i = void 0 === o || o, a = n.altAxis, s = void 0 === a || a, u = n.fallbackPlacements, l = n.padding, c = n.boundary, f = n.rootBoundary, d = n.altBoundary, p = n.flipVariations, m = void 0 === p || p, h = n.allowedAutoPlacements, g = t.options.placement, v = es(g) === g, y = u || (v || !m ? [em(g)] : function(e) {
                                        if (es(e) === Y) return [];
                                        var t = em(e);
                                        return [eg(e), t, eg(t)]
                                    }(g)), b = [g].concat(y).reduce(function(e, n) {
                                        var r, o, i, a, s, u, d, p, g, v, y, b;
                                        return e.concat(es(n) === Y ? (o = (r = {
                                            placement: n,
                                            boundary: c,
                                            rootBoundary: f,
                                            padding: l,
                                            flipVariations: m,
                                            allowedAutoPlacements: h
                                        }).placement, i = r.boundary, a = r.rootBoundary, s = r.padding, u = r.flipVariations, p = void 0 === (d = r.allowedAutoPlacements) ? en : d, 0 === (y = (v = (g = eu(o)) ? u ? et : et.filter(function(e) {
                                            return eu(e) === g
                                        }) : J).filter(function(e) {
                                            return p.indexOf(e) >= 0
                                        })).length && (y = v), Object.keys(b = y.reduce(function(e, n) {
                                            return e[n] = ek(t, {
                                                placement: n,
                                                boundary: i,
                                                rootBoundary: a,
                                                padding: s
                                            })[es(n)], e
                                        }, {})).sort(function(e, t) {
                                            return b[e] - b[t]
                                        })) : n)
                                    }, []), x = t.rects.reference, w = t.rects.popper, O = new Map, k = !0, j = b[0], E = 0; E < b.length; E++) {
                                    var S = b[E],
                                        D = es(S),
                                        C = eu(S) === Q,
                                        L = ["top", U].indexOf(D) >= 0,
                                        N = L ? "width" : "height",
                                        A = ek(t, {
                                            placement: S,
                                            boundary: c,
                                            rootBoundary: f,
                                            altBoundary: d,
                                            padding: l
                                        }),
                                        I = L ? C ? X : K : C ? U : "top";
                                    x[N] > w[N] && (I = em(I));
                                    var P = em(I),
                                        _ = [];
                                    if (i && _.push(A[D] <= 0), s && _.push(A[I] <= 0, A[P] <= 0), _.every(function(e) {
                                            return e
                                        })) {
                                        j = S, k = !1;
                                        break
                                    }
                                    O.set(S, _)
                                }
                                if (k)
                                    for (var T = m ? 3 : 1, W = function(e) {
                                            var t = b.find(function(t) {
                                                var n = O.get(t);
                                                if (n) return n.slice(0, e).every(function(e) {
                                                    return e
                                                })
                                            });
                                            if (t) return j = t, "break"
                                        }, M = T; M > 0 && "break" !== W(M); M--);
                                t.placement !== j && (t.modifiersData[r]._skip = !0, t.placement = j, t.reset = !0)
                            }
                        },
                        requiresIfExists: ["offset"],
                        data: {
                            _skip: !1
                        }
                    }, {
                        name: "preventOverflow",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name,
                                o = n.mainAxis,
                                i = n.altAxis,
                                a = n.boundary,
                                s = n.rootBoundary,
                                u = n.altBoundary,
                                l = n.padding,
                                c = n.tether,
                                f = void 0 === c || c,
                                d = n.tetherOffset,
                                p = void 0 === d ? 0 : d,
                                m = ek(t, {
                                    boundary: a,
                                    rootBoundary: s,
                                    padding: l,
                                    altBoundary: u
                                }),
                                h = es(t.placement),
                                g = eu(t.placement),
                                v = !g,
                                y = el(h),
                                b = "x" === y ? "y" : "x",
                                x = t.modifiersData.popperOffsets,
                                w = t.rects.reference,
                                O = t.rects.popper,
                                k = "function" == typeof p ? p(Object.assign({}, t.rects, {
                                    placement: t.placement
                                })) : p,
                                j = "number" == typeof k ? {
                                    mainAxis: k,
                                    altAxis: k
                                } : Object.assign({
                                    mainAxis: 0,
                                    altAxis: 0
                                }, k),
                                E = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                                S = {
                                    x: 0,
                                    y: 0
                                };
                            if (x) {
                                if (void 0 === o || o) {
                                    var D, C = "y" === y ? "top" : K,
                                        L = "y" === y ? U : X,
                                        I = "y" === y ? "height" : "width",
                                        P = x[y],
                                        _ = P + m[C],
                                        T = P - m[L],
                                        W = f ? -O[I] / 2 : 0,
                                        M = g === Q ? w[I] : O[I],
                                        R = g === Q ? -O[I] : -w[I],
                                        B = t.elements.arrow,
                                        z = f && B ? H(B) : {
                                            width: 0,
                                            height: 0
                                        },
                                        q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ex(),
                                        F = q[C],
                                        V = q[L],
                                        $ = ej(0, w[I], z[I]),
                                        Y = v ? w[I] / 2 - W - $ - F - j.mainAxis : M - $ - F - j.mainAxis,
                                        J = v ? -w[I] / 2 + W + $ + V + j.mainAxis : R + $ + V + j.mainAxis,
                                        Z = t.elements.arrow && G(t.elements.arrow),
                                        ee = Z ? "y" === y ? Z.clientTop || 0 : Z.clientLeft || 0 : 0,
                                        et = null != (D = null == E ? void 0 : E[y]) ? D : 0,
                                        en = ej(f ? A(_, P + Y - et - ee) : _, P, f ? N(T, P + J - et) : T);
                                    x[y] = en, S[y] = en - P
                                }
                                if (void 0 !== i && i) {
                                    var er, eo, ei = "x" === y ? "top" : K,
                                        ea = "x" === y ? U : X,
                                        ec = x[b],
                                        ef = "y" === b ? "height" : "width",
                                        ed = ec + m[ei],
                                        ep = ec - m[ea],
                                        em = -1 !== ["top", K].indexOf(h),
                                        eh = null != (eo = null == E ? void 0 : E[b]) ? eo : 0,
                                        eg = em ? ed : ec - w[ef] - O[ef] - eh + j.altAxis,
                                        ev = em ? ec + w[ef] + O[ef] - eh - j.altAxis : ep,
                                        ey = f && em ? (er = ej(eg, ec, ev)) > ev ? ev : er : ej(f ? eg : ed, ec, f ? ev : ep);
                                    x[b] = ey, S[b] = ey - ec
                                }
                                t.modifiersData[r] = S
                            }
                        },
                        requiresIfExists: ["offset"]
                    }, {
                        name: "arrow",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t, n, r = e.state,
                                o = e.name,
                                i = e.options,
                                a = r.elements.arrow,
                                s = r.modifiersData.popperOffsets,
                                u = es(r.placement),
                                l = el(u),
                                c = [K, X].indexOf(u) >= 0 ? "height" : "width";
                            if (a && s) {
                                var f = ew("number" != typeof(t = "function" == typeof(t = i.padding) ? t(Object.assign({}, r.rects, {
                                        placement: r.placement
                                    })) : t) ? t : eO(t, J)),
                                    d = H(a),
                                    p = "y" === l ? "top" : K,
                                    m = "y" === l ? U : X,
                                    h = r.rects.reference[c] + r.rects.reference[l] - s[l] - r.rects.popper[c],
                                    g = s[l] - r.rects.reference[l],
                                    v = G(a),
                                    y = v ? "y" === l ? v.clientHeight || 0 : v.clientWidth || 0 : 0,
                                    b = f[p],
                                    x = y - d[c] - f[m],
                                    w = y / 2 - d[c] / 2 + (h / 2 - g / 2),
                                    O = ej(b, w, x);
                                r.modifiersData[o] = ((n = {})[l] = O, n.centerOffset = O - w, n)
                            }
                        },
                        effect: function(e) {
                            var t = e.state,
                                n = e.options.element,
                                r = void 0 === n ? "[data-popper-arrow]" : n;
                            null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && ev(t.elements.popper, r) && (t.elements.arrow = r)
                        },
                        requires: ["popperOffsets"],
                        requiresIfExists: ["preventOverflow"]
                    }, {
                        name: "hide",
                        enabled: !0,
                        phase: "main",
                        requiresIfExists: ["preventOverflow"],
                        fn: function(e) {
                            var t = e.state,
                                n = e.name,
                                r = t.rects.reference,
                                o = t.rects.popper,
                                i = t.modifiersData.preventOverflow,
                                a = ek(t, {
                                    elementContext: "reference"
                                }),
                                s = ek(t, {
                                    altBoundary: !0
                                }),
                                u = eE(a, r),
                                l = eE(s, o, i),
                                c = eS(u),
                                f = eS(l);
                            t.modifiersData[n] = {
                                referenceClippingOffsets: u,
                                popperEscapeOffsets: l,
                                isReferenceHidden: c,
                                hasPopperEscaped: f
                            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-reference-hidden": c,
                                "data-popper-escaped": f
                            })
                        }
                    }]
                }).defaultModifiers) ? [] : o, s = void 0 === (a = r.defaultOptions) ? eo : a, function(e, t, n) {
                    void 0 === n && (n = s);
                    var r, o, a = {
                            placement: "bottom",
                            orderedModifiers: [],
                            options: Object.assign({}, eo, s),
                            modifiersData: {},
                            elements: {
                                reference: e,
                                popper: t
                            },
                            attributes: {},
                            styles: {}
                        },
                        u = [],
                        l = !1,
                        c = {
                            state: a,
                            setOptions: function(n) {
                                var r, o, l, d, p, m = "function" == typeof n ? n(a.options) : n;
                                f(), a.options = Object.assign({}, s, a.options, m), a.scrollParents = {
                                    reference: D(e) ? V(e) : e.contextElement ? V(e.contextElement) : [],
                                    popper: V(t)
                                };
                                var h = (o = Object.keys(r = [].concat(i, a.options.modifiers).reduce(function(e, t) {
                                    var n = e[t.name];
                                    return e[t.name] = n ? Object.assign({}, n, t, {
                                        options: Object.assign({}, n.options, t.options),
                                        data: Object.assign({}, n.data, t.data)
                                    }) : t, e
                                }, {})).map(function(e) {
                                    return r[e]
                                }), l = new Map, d = new Set, p = [], o.forEach(function(e) {
                                    l.set(e.name, e)
                                }), o.forEach(function(e) {
                                    d.has(e.name) || function e(t) {
                                        d.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function(t) {
                                            if (!d.has(t)) {
                                                var n = l.get(t);
                                                n && e(n)
                                            }
                                        }), p.push(t)
                                    }(e)
                                }), er.reduce(function(e, t) {
                                    return e.concat(p.filter(function(e) {
                                        return e.phase === t
                                    }))
                                }, []));
                                return a.orderedModifiers = h.filter(function(e) {
                                    return e.enabled
                                }), a.orderedModifiers.forEach(function(e) {
                                    var t = e.name,
                                        n = e.options,
                                        r = e.effect;
                                    if ("function" == typeof r) {
                                        var o = r({
                                            state: a,
                                            name: t,
                                            instance: c,
                                            options: void 0 === n ? {} : n
                                        });
                                        u.push(o || function() {})
                                    }
                                }), c.update()
                            },
                            forceUpdate: function() {
                                if (!l) {
                                    var e, t, n, r, o, i, s, u, f, d, p, m, h = a.elements,
                                        g = h.reference,
                                        v = h.popper;
                                    if (ei(g, v)) {
                                        a.rects = {
                                            reference: (t = G(v), n = "fixed" === a.options.strategy, r = C(t), u = C(t) && (i = I((o = t.getBoundingClientRect()).width) / t.offsetWidth || 1, s = I(o.height) / t.offsetHeight || 1, 1 !== i || 1 !== s), f = R(t), d = T(g, u, n), p = {
                                                scrollLeft: 0,
                                                scrollTop: 0
                                            }, m = {
                                                x: 0,
                                                y: 0
                                            }, (r || !r && !n) && (("body" !== M(t) || q(f)) && (p = (e = t) !== S(e) && C(e) ? {
                                                scrollLeft: e.scrollLeft,
                                                scrollTop: e.scrollTop
                                            } : W(e)), C(t) ? (m = T(t, !0), m.x += t.clientLeft, m.y += t.clientTop) : f && (m.x = B(f))), {
                                                x: d.left + p.scrollLeft - m.x,
                                                y: d.top + p.scrollTop - m.y,
                                                width: d.width,
                                                height: d.height
                                            }),
                                            popper: H(v)
                                        }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function(e) {
                                            return a.modifiersData[e.name] = Object.assign({}, e.data)
                                        });
                                        for (var y = 0; y < a.orderedModifiers.length; y++) {
                                            if (!0 === a.reset) {
                                                a.reset = !1, y = -1;
                                                continue
                                            }
                                            var b = a.orderedModifiers[y],
                                                x = b.fn,
                                                w = b.options,
                                                O = void 0 === w ? {} : w,
                                                k = b.name;
                                            "function" == typeof x && (a = x({
                                                state: a,
                                                options: O,
                                                name: k,
                                                instance: c
                                            }) || a)
                                        }
                                    }
                                }
                            },
                            update: (r = function() {
                                return new Promise(function(e) {
                                    c.forceUpdate(), e(a)
                                })
                            }, function() {
                                return o || (o = new Promise(function(e) {
                                    Promise.resolve().then(function() {
                                        o = void 0, e(r())
                                    })
                                })), o
                            }),
                            destroy: function() {
                                f(), l = !0
                            }
                        };
                    if (!ei(e, t)) return c;

                    function f() {
                        u.forEach(function(e) {
                            return e()
                        }), u = []
                    }
                    return c.setOptions(n).then(function(e) {
                        !l && n.onFirstUpdate && n.onFirstUpdate(e)
                    }), c
                }),
                eC = n(67294),
                eL = n(35155);

            function eN(e, t, n, r) {
                let o = (0, eL.W)(n);
                return (0, eC.useEffect)(() => {
                    let i = "function" == typeof e ? e() : null != e ? e : document;
                    if (n && i) return i.addEventListener(t, o, r), () => {
                        i.removeEventListener(t, o, r)
                    }
                }, [t, e, r, o, n]), () => {
                    let n = "function" == typeof e ? e() : null != e ? e : document;
                    null == n || n.removeEventListener(t, o, r)
                }
            }
            var eA = n(25432),
                eI = e => {
                    var t;
                    return (null == (t = e.current) ? void 0 : t.ownerDocument) || document
                },
                eP = e => {
                    var t, n;
                    return (null == (n = null == (t = e.current) ? void 0 : t.ownerDocument) ? void 0 : n.defaultView) || window
                },
                e_ = "chakra-ui:close-tooltip",
                eT = n(1702),
                eW = n(16914),
                eM = n(16554),
                eR = n(77030),
                eB = n(33179),
                ez = n(48940),
                eq = n(24662),
                eH = n(13114),
                eF = n(85893),
                eV = (0, eW.m)(eq.E.div),
                e$ = (0, eM.G)((e, t) => {
                    var n, r;
                    let o;
                    let i = (0, eR.mq)("Tooltip", e),
                        a = (0, eB.Lr)(e),
                        s = (0, ez.F)(),
                        {
                            children: c,
                            label: d,
                            shouldWrapChildren: p,
                            "aria-label": v,
                            hasArrow: b,
                            bg: x,
                            portalProps: O,
                            background: S,
                            backgroundColor: D,
                            bgColor: C,
                            motionProps: L,
                            ...N
                        } = a,
                        A = null != (r = null != (n = null != S ? S : D) ? n : x) ? r : C;
                    if (A) {
                        i.bg = A;
                        let e = (0, eB.K1)(s, "colors", A);
                        i[f.arrowBg.var] = e
                    }
                    let I = function(e = {}) {
                        let {
                            openDelay: t = 0,
                            closeDelay: n = 0,
                            closeOnClick: r = !0,
                            closeOnMouseDown: o,
                            closeOnScroll: i,
                            closeOnPointerDown: a = o,
                            closeOnEsc: s = !0,
                            onOpen: u,
                            onClose: c,
                            placement: d,
                            id: p,
                            isOpen: v,
                            defaultIsOpen: b,
                            arrowSize: x = 10,
                            arrowShadowColor: O,
                            arrowPadding: S,
                            modifiers: D,
                            isDisabled: C,
                            gutter: L,
                            offset: N,
                            direction: A,
                            ...I
                        } = e, {
                            isOpen: P,
                            onOpen: _,
                            onClose: T
                        } = function(e = {}) {
                            let {
                                onClose: t,
                                onOpen: n,
                                isOpen: r,
                                id: o
                            } = e, i = (0, eL.W)(n), a = (0, eL.W)(t), [s, u] = (0, eC.useState)(e.defaultIsOpen || !1), l = void 0 !== r ? r : s, c = void 0 !== r, f = (0, eC.useId)(), d = null != o ? o : `disclosure-${f}`, p = (0, eC.useCallback)(() => {
                                c || u(!1), null == a || a()
                            }, [c, a]), m = (0, eC.useCallback)(() => {
                                c || u(!0), null == i || i()
                            }, [c, i]), h = (0, eC.useCallback)(() => {
                                l ? p() : m()
                            }, [l, m, p]);
                            return {
                                isOpen: l,
                                onOpen: m,
                                onClose: p,
                                onToggle: h,
                                isControlled: c,
                                getButtonProps: function(e = {}) {
                                    return { ...e,
                                        "aria-expanded": l,
                                        "aria-controls": d,
                                        onClick(t) {
                                            var n;
                                            null == (n = e.onClick) || n.call(e, t), h()
                                        }
                                    }
                                },
                                getDisclosureProps: function(e = {}) {
                                    return { ...e,
                                        hidden: !l,
                                        id: d
                                    }
                                }
                            }
                        }({
                            isOpen: v,
                            defaultIsOpen: b,
                            onOpen: u,
                            onClose: c
                        }), {
                            referenceRef: W,
                            getPopperProps: M,
                            getArrowInnerProps: R,
                            getArrowProps: B
                        } = function(e = {}) {
                            let {
                                enabled: t = !0,
                                modifiers: n,
                                placement: r = "bottom",
                                strategy: o = "absolute",
                                arrowPadding: i = 8,
                                eventListeners: a = !0,
                                offset: s,
                                gutter: u = 8,
                                flip: l = !0,
                                boundary: c = "clippingParents",
                                preventOverflow: d = !0,
                                matchWidth: p,
                                direction: v = "ltr"
                            } = e, b = (0, eC.useRef)(null), x = (0, eC.useRef)(null), O = (0, eC.useRef)(null), S = function(e, t = "ltr") {
                                var n, r;
                                let o = (null == (n = k[e]) ? void 0 : n[t]) || e;
                                return "ltr" === t ? o : null != (r = j[e]) ? r : o
                            }(r, v), D = (0, eC.useRef)(() => {}), C = (0, eC.useCallback)(() => {
                                var e;
                                t && b.current && x.current && (null == (e = D.current) || e.call(D), O.current = eD(b.current, x.current, {
                                    placement: S,
                                    modifiers: [w, y, g, { ...h,
                                        enabled: !!p
                                    }, {
                                        name: "eventListeners",
                                        ..."object" == typeof a ? {
                                            enabled: !0,
                                            options: { ...m,
                                                ...a
                                            }
                                        } : {
                                            enabled: a,
                                            options: m
                                        }
                                    }, {
                                        name: "arrow",
                                        options: {
                                            padding: i
                                        }
                                    }, {
                                        name: "offset",
                                        options: {
                                            offset: null != s ? s : [0, u]
                                        }
                                    }, {
                                        name: "flip",
                                        enabled: !!l,
                                        options: {
                                            padding: 8
                                        }
                                    }, {
                                        name: "preventOverflow",
                                        enabled: !!d,
                                        options: {
                                            boundary: c
                                        }
                                    }, ...null != n ? n : []],
                                    strategy: o
                                }), O.current.forceUpdate(), D.current = O.current.destroy)
                            }, [S, t, n, p, a, i, s, u, l, d, c, o]);
                            (0, eC.useEffect)(() => () => {
                                var e;
                                b.current || x.current || (null == (e = O.current) || e.destroy(), O.current = null)
                            }, []);
                            let L = (0, eC.useCallback)(e => {
                                    b.current = e, C()
                                }, [C]),
                                N = (0, eC.useCallback)((e = {}, t = null) => ({ ...e,
                                    ref: (0, E.lq)(L, t)
                                }), [L]),
                                A = (0, eC.useCallback)(e => {
                                    x.current = e, C()
                                }, [C]),
                                I = (0, eC.useCallback)((e = {}, t = null) => ({ ...e,
                                    ref: (0, E.lq)(A, t),
                                    style: { ...e.style,
                                        position: o,
                                        minWidth: p ? void 0 : "max-content",
                                        inset: "0 auto auto 0"
                                    }
                                }), [o, A, p]),
                                P = (0, eC.useCallback)((e = {}, t = null) => {
                                    let {
                                        size: n,
                                        shadowColor: r,
                                        bg: o,
                                        style: i,
                                        ...a
                                    } = e;
                                    return { ...a,
                                        ref: t,
                                        "data-popper-arrow": "",
                                        style: function(e) {
                                            let {
                                                size: t,
                                                shadowColor: n,
                                                bg: r,
                                                style: o
                                            } = e, i = { ...o,
                                                position: "absolute"
                                            };
                                            return t && (i["--popper-arrow-size"] = t), n && (i["--popper-arrow-shadow-color"] = n), r && (i["--popper-arrow-bg"] = r), i
                                        }(e)
                                    }
                                }, []),
                                _ = (0, eC.useCallback)((e = {}, t = null) => ({ ...e,
                                    ref: t,
                                    "data-popper-arrow-inner": ""
                                }), []);
                            return {
                                update() {
                                    var e;
                                    null == (e = O.current) || e.update()
                                },
                                forceUpdate() {
                                    var e;
                                    null == (e = O.current) || e.forceUpdate()
                                },
                                transformOrigin: f.transformOrigin.varRef,
                                referenceRef: L,
                                popperRef: A,
                                getPopperProps: I,
                                getArrowProps: P,
                                getArrowInnerProps: _,
                                getReferenceProps: N
                            }
                        }({
                            enabled: P,
                            placement: d,
                            arrowPadding: S,
                            modifiers: D,
                            gutter: L,
                            offset: N,
                            direction: A
                        }), z = (0, eC.useId)(), q = `tooltip-${null!=p?p:z}`, H = (0, eC.useRef)(null), F = (0, eC.useRef)(), V = (0, eC.useCallback)(() => {
                            F.current && (clearTimeout(F.current), F.current = void 0)
                        }, []), $ = (0, eC.useRef)(), G = (0, eC.useCallback)(() => {
                            $.current && (clearTimeout($.current), $.current = void 0)
                        }, []), U = (0, eC.useCallback)(() => {
                            G(), T()
                        }, [T, G]), X = ((0, eC.useEffect)(() => {
                            let e = eI(H);
                            return e.addEventListener(e_, U), () => e.removeEventListener(e_, U)
                        }, [U, H]), () => {
                            let e = eI(H),
                                t = eP(H);
                            e.dispatchEvent(new t.CustomEvent(e_))
                        }), K = (0, eC.useCallback)(() => {
                            if (!C && !F.current) {
                                P && X();
                                let e = eP(H);
                                F.current = e.setTimeout(_, t)
                            }
                        }, [X, C, P, _, t]), Y = (0, eC.useCallback)(() => {
                            V();
                            let e = eP(H);
                            $.current = e.setTimeout(U, n)
                        }, [n, U, V]), J = (0, eC.useCallback)(() => {
                            P && r && Y()
                        }, [r, Y, P]), Q = (0, eC.useCallback)(() => {
                            P && a && Y()
                        }, [a, Y, P]), Z = (0, eC.useCallback)(e => {
                            P && "Escape" === e.key && Y()
                        }, [P, Y]);
                        eN(() => eI(H), "keydown", s ? Z : void 0), eN(() => {
                            if (!i) return null;
                            let e = H.current;
                            if (!e) return null;
                            let t = function e(t) {
                                return ["html", "body", "#document"].includes(t.localName) ? t.ownerDocument.body : (0, l.Re)(t) && function(e) {
                                    let {
                                        overflow: t,
                                        overflowX: n,
                                        overflowY: r
                                    } = (e.ownerDocument.defaultView || window).getComputedStyle(e);
                                    return /auto|scroll|overlay|hidden/.test(t + r + n)
                                }(t) ? t : e("html" === t.localName ? t : t.assignedSlot || t.parentElement || t.ownerDocument.documentElement)
                            }(e);
                            return "body" === t.localName ? eP(H) : t
                        }, "scroll", () => {
                            P && i && U()
                        }, {
                            passive: !0,
                            capture: !0
                        }), (0, eC.useEffect)(() => {
                            C && (V(), P && T())
                        }, [C, P, T, V]), (0, eC.useEffect)(() => () => {
                            V(), G()
                        }, [V, G]), eN(() => H.current, "pointerleave", Y);
                        let ee = (0, eC.useCallback)((e = {}, t = null) => ({ ...e,
                                ref: (0, E.lq)(H, t, W),
                                onPointerEnter: (0, eA.v0)(e.onPointerEnter, e => {
                                    "touch" !== e.pointerType && K()
                                }),
                                onClick: (0, eA.v0)(e.onClick, J),
                                onPointerDown: (0, eA.v0)(e.onPointerDown, Q),
                                onFocus: (0, eA.v0)(e.onFocus, K),
                                onBlur: (0, eA.v0)(e.onBlur, Y),
                                "aria-describedby": P ? q : void 0
                            }), [K, Y, Q, P, q, J, W]),
                            et = (0, eC.useCallback)((e = {}, t = null) => M({ ...e,
                                style: { ...e.style,
                                    [f.arrowSize.var]: x ? `${x}px` : void 0,
                                    [f.arrowShadowColor.var]: O
                                }
                            }, t), [M, x, O]);
                        return {
                            isOpen: P,
                            show: K,
                            hide: Y,
                            getTriggerProps: ee,
                            getTooltipProps: (0, eC.useCallback)((e = {}, t = null) => {
                                let n = { ...e.style,
                                    position: "relative",
                                    transformOrigin: f.transformOrigin.varRef
                                };
                                return {
                                    ref: t,
                                    ...I,
                                    ...e,
                                    id: q,
                                    role: "tooltip",
                                    style: n
                                }
                            }, [I, q]),
                            getTooltipPositionerProps: et,
                            getArrowProps: B,
                            getArrowInnerProps: R
                        }
                    }({ ...N,
                        direction: s.direction
                    });
                    if ("string" == typeof c || p) o = (0, eF.jsx)(eW.m.span, {
                        display: "inline-block",
                        tabIndex: 0,
                        ...I.getTriggerProps(),
                        children: c
                    });
                    else {
                        let e = eC.Children.only(c);
                        o = (0, eC.cloneElement)(e, I.getTriggerProps(e.props, e.ref))
                    }
                    let P = !!v,
                        _ = I.getTooltipProps({}, t),
                        T = P ? function(e, t = []) {
                            let n = Object.assign({}, e);
                            for (let e of t) e in n && delete n[e];
                            return n
                        }(_, ["role", "id"]) : _,
                        W = function(e, t) {
                            let n = {};
                            for (let r of t) r in e && (n[r] = e[r]);
                            return n
                        }(_, ["role", "id"]);
                    return d ? (0, eF.jsxs)(eF.Fragment, {
                        children: [o, (0, eF.jsx)(eH.M, {
                            children: I.isOpen && (0, eF.jsx)(eT.h, { ...O,
                                children: (0, eF.jsx)(eW.m.div, { ...I.getTooltipPositionerProps(),
                                    __css: {
                                        zIndex: i.zIndex,
                                        pointerEvents: "none"
                                    },
                                    children: (0, eF.jsxs)(eV, {
                                        variants: u,
                                        initial: "exit",
                                        animate: "enter",
                                        exit: "exit",
                                        ...L,
                                        ...T,
                                        __css: i,
                                        children: [d, P && (0, eF.jsx)(eW.m.span, {
                                            srOnly: !0,
                                            ...W,
                                            children: v
                                        }), b && (0, eF.jsx)(eW.m.div, {
                                            "data-popper-arrow": !0,
                                            className: "chakra-tooltip__arrow-wrapper",
                                            children: (0, eF.jsx)(eW.m.div, {
                                                "data-popper-arrow-inner": !0,
                                                className: "chakra-tooltip__arrow",
                                                __css: {
                                                    bg: i.bg
                                                }
                                            })
                                        })]
                                    })
                                })
                            })
                        })]
                    }) : (0, eF.jsx)(eF.Fragment, {
                        children: c
                    })
                });
            e$.displayName = "Tooltip"
        },
        89382: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return E
                }
            });
            var r = n(67294);

            function o(e) {
                return "[object Object]" === Object.prototype.toString.call(e) || Array.isArray(e)
            }

            function i(e, t) {
                let n = Object.keys(e),
                    r = Object.keys(t);
                return n.length === r.length && JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && n.every(n => {
                    let r = e[n],
                        a = t[n];
                    return "function" == typeof r ? `${r}` == `${a}` : o(r) && o(a) ? i(r, a) : r === a
                })
            }

            function a(e) {
                return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map(e => e.options)
            }

            function s(e) {
                return "number" == typeof e
            }

            function u(e) {
                return "string" == typeof e
            }

            function l(e) {
                return "boolean" == typeof e
            }

            function c(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function f(e) {
                return Math.abs(e)
            }

            function d(e) {
                return Math.sign(e)
            }

            function p(e) {
                return v(e).map(Number)
            }

            function m(e) {
                return e[h(e)]
            }

            function h(e) {
                return Math.max(0, e.length - 1)
            }

            function g(e, t = 0) {
                return Array.from(Array(e), (e, n) => t + n)
            }

            function v(e) {
                return Object.keys(e)
            }

            function y(e, t) {
                return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
            }

            function b() {
                let e = [],
                    t = {
                        add: function(n, r, o, i = {
                            passive: !0
                        }) {
                            let a;
                            return "addEventListener" in n ? (n.addEventListener(r, o, i), a = () => n.removeEventListener(r, o, i)) : (n.addListener(o), a = () => n.removeListener(o)), e.push(a), t
                        },
                        clear: function() {
                            e = e.filter(e => e())
                        }
                    };
                return t
            }

            function x(e = 0, t = 0) {
                let n = f(e - t);

                function r(n) {
                    return n < e || n > t
                }
                return {
                    length: n,
                    max: t,
                    min: e,
                    constrain: function(n) {
                        return r(n) ? n < e ? e : t : n
                    },
                    reachedAny: r,
                    reachedMax: function(e) {
                        return e > t
                    },
                    reachedMin: function(t) {
                        return t < e
                    },
                    removeOffset: function(e) {
                        return n ? e - n * Math.ceil((e - t) / n) : e
                    }
                }
            }

            function w(e) {
                let t = e;

                function n(e) {
                    return s(e) ? e : e.get()
                }
                return {
                    get: function() {
                        return t
                    },
                    set: function(e) {
                        t = n(e)
                    },
                    add: function(e) {
                        t += n(e)
                    },
                    subtract: function(e) {
                        t -= n(e)
                    }
                }
            }

            function O(e, t) {
                let n = "x" === e.scroll ? function(e) {
                        return `translate3d(${e}px,0px,0px)`
                    } : function(e) {
                        return `translate3d(0px,${e}px,0px)`
                    },
                    r = t.style,
                    o = !1;
                return {
                    clear: function() {
                        o || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"))
                    },
                    to: function(t) {
                        o || (r.transform = n(e.direction(t)))
                    },
                    toggleActive: function(e) {
                        o = !e
                    }
                }
            }
            let k = {
                align: "center",
                axis: "x",
                container: null,
                slides: null,
                containScroll: "trimSnaps",
                direction: "ltr",
                slidesToScroll: 1,
                inViewThreshold: 0,
                breakpoints: {},
                dragFree: !1,
                dragThreshold: 10,
                loop: !1,
                skipSnaps: !1,
                duration: 25,
                startIndex: 0,
                active: !0,
                watchDrag: !0,
                watchResize: !0,
                watchSlides: !0,
                watchFocus: !0
            };

            function j(e, t, n) {
                let r, o, i, a, E;
                let S = e.ownerDocument,
                    D = S.defaultView,
                    C = function(e) {
                        function t(e, t) {
                            return function e(t, n) {
                                return [t, n].reduce((t, n) => (v(n).forEach(r => {
                                    let o = t[r],
                                        i = n[r],
                                        a = c(o) && c(i);
                                    t[r] = a ? e(o, i) : i
                                }), t), {})
                            }(e, t || {})
                        }
                        return {
                            mergeOptions: t,
                            optionsAtMedia: function(n) {
                                let r = n.breakpoints || {},
                                    o = v(r).filter(t => e.matchMedia(t).matches).map(e => r[e]).reduce((e, n) => t(e, n), {});
                                return t(n, o)
                            },
                            optionsMediaQueries: function(t) {
                                return t.map(e => v(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia)
                            }
                        }
                    }(D),
                    L = (E = [], {
                        init: function(e, t) {
                            return (E = t.filter(({
                                options: e
                            }) => !1 !== C.optionsAtMedia(e).active)).forEach(t => t.init(e, C)), t.reduce((e, t) => Object.assign(e, {
                                [t.name]: t
                            }), {})
                        },
                        destroy: function() {
                            E = E.filter(e => e.destroy())
                        }
                    }),
                    N = b(),
                    A = function() {
                        let e, t = {},
                            n = {
                                init: function(t) {
                                    e = t
                                },
                                emit: function(r) {
                                    return (t[r] || []).forEach(t => t(e, r)), n
                                },
                                off: function(e, r) {
                                    return t[e] = (t[e] || []).filter(e => e !== r), n
                                },
                                on: function(e, r) {
                                    return t[e] = (t[e] || []).concat([r]), n
                                },
                                clear: function() {
                                    t = {}
                                }
                            };
                        return n
                    }(),
                    {
                        mergeOptions: I,
                        optionsAtMedia: P,
                        optionsMediaQueries: _
                    } = C,
                    {
                        on: T,
                        off: W,
                        emit: M
                    } = A,
                    R = !1,
                    B = I(k, j.globalOptions),
                    z = I(B),
                    q = [];

                function H(t, n) {
                    !R && (z = P(B = I(B, t)), q = n || q, function() {
                        let {
                            container: t,
                            slides: n
                        } = z;
                        i = (u(t) ? e.querySelector(t) : t) || e.children[0];
                        let r = u(n) ? i.querySelectorAll(n) : n;
                        a = [].slice.call(r || i.children)
                    }(), r = function t(n) {
                        let r = function(e, t, n, r, o, i, a) {
                            let c, k;
                            let {
                                align: j,
                                axis: E,
                                direction: S,
                                startIndex: D,
                                loop: C,
                                duration: L,
                                dragFree: N,
                                dragThreshold: A,
                                inViewThreshold: I,
                                slidesToScroll: P,
                                skipSnaps: _,
                                containScroll: T,
                                watchResize: W,
                                watchSlides: M,
                                watchDrag: R,
                                watchFocus: B
                            } = i, z = {
                                measure: function(e) {
                                    let {
                                        offsetTop: t,
                                        offsetLeft: n,
                                        offsetWidth: r,
                                        offsetHeight: o
                                    } = e;
                                    return {
                                        top: t,
                                        right: n + r,
                                        bottom: t + o,
                                        left: n,
                                        width: r,
                                        height: o
                                    }
                                }
                            }, q = z.measure(t), H = n.map(z.measure), F = function(e, t) {
                                let n = "rtl" === t,
                                    r = "y" === e,
                                    o = !r && n ? -1 : 1;
                                return {
                                    scroll: r ? "y" : "x",
                                    cross: r ? "x" : "y",
                                    startEdge: r ? "top" : n ? "right" : "left",
                                    endEdge: r ? "bottom" : n ? "left" : "right",
                                    measureSize: function(e) {
                                        let {
                                            height: t,
                                            width: n
                                        } = e;
                                        return r ? t : n
                                    },
                                    direction: function(e) {
                                        return e * o
                                    }
                                }
                            }(E, S), V = F.measureSize(q), $ = {
                                measure: function(e) {
                                    return e / 100 * V
                                }
                            }, G = function(e, t) {
                                let n = {
                                    start: function() {
                                        return 0
                                    },
                                    center: function(e) {
                                        return (t - e) / 2
                                    },
                                    end: function(e) {
                                        return t - e
                                    }
                                };
                                return {
                                    measure: function(r, o) {
                                        return u(e) ? n[e](r) : e(t, r, o)
                                    }
                                }
                            }(j, V), U = !C && !!T, {
                                slideSizes: X,
                                slideSizesWithGaps: K,
                                startGap: Y,
                                endGap: J
                            } = function(e, t, n, r, o, i) {
                                let {
                                    measureSize: a,
                                    startEdge: s,
                                    endEdge: u
                                } = e, l = n[0] && o, c = function() {
                                    if (!l) return 0;
                                    let e = n[0];
                                    return f(t[s] - e[s])
                                }(), d = l ? parseFloat(i.getComputedStyle(m(r)).getPropertyValue(`margin-${u}`)) : 0, p = n.map(a), g = n.map((e, t, n) => {
                                    let r = t === h(n);
                                    return t ? r ? p[t] + d : n[t + 1][s] - e[s] : p[t] + c
                                }).map(f);
                                return {
                                    slideSizes: p,
                                    slideSizesWithGaps: g,
                                    startGap: c,
                                    endGap: d
                                }
                            }(F, q, H, n, C || !!T, o), Q = function(e, t, n, r, o, i, a, u, l) {
                                let {
                                    startEdge: c,
                                    endEdge: d,
                                    direction: g
                                } = e, v = s(n);
                                return {
                                    groupSlides: function(e) {
                                        return v ? p(e).filter(e => e % n == 0).map(t => e.slice(t, t + n)) : e.length ? p(e).reduce((n, s, l) => {
                                            let p = m(n) || 0,
                                                v = s === h(e),
                                                y = o[c] - i[p][c],
                                                b = o[c] - i[s][d],
                                                x = r || 0 !== p ? 0 : g(a),
                                                w = f(b - (!r && v ? g(u) : 0) - (y + x));
                                            return l && w > t + 2 && n.push(s), v && n.push(e.length), n
                                        }, []).map((t, n, r) => {
                                            let o = Math.max(r[n - 1] || 0);
                                            return e.slice(o, t)
                                        }) : []
                                    }
                                }
                            }(F, V, P, C, q, H, Y, J, 0), {
                                snaps: Z,
                                snapsAligned: ee
                            } = function(e, t, n, r, o) {
                                let {
                                    startEdge: i,
                                    endEdge: a
                                } = e, {
                                    groupSlides: s
                                } = o, u = s(r).map(e => m(e)[a] - e[0][i]).map(f).map(t.measure), l = r.map(e => n[i] - e[i]).map(e => -f(e)), c = s(l).map(e => e[0]).map((e, t) => e + u[t]);
                                return {
                                    snaps: l,
                                    snapsAligned: c
                                }
                            }(F, G, q, H, Q), et = -m(Z) + m(K), {
                                snapsContained: en,
                                scrollContainLimit: er
                            } = function(e, t, n, r, o) {
                                let i = x(-t + e, 0),
                                    a = n.map((e, t) => {
                                        let {
                                            min: r,
                                            max: o
                                        } = i, a = i.constrain(e), s = t === h(n);
                                        return t ? s || 1 > f(r - a) ? r : 1 > f(o - a) ? o : a : o
                                    }).map(e => parseFloat(e.toFixed(3))),
                                    s = function() {
                                        let e = a[0],
                                            t = m(a);
                                        return x(a.lastIndexOf(e), a.indexOf(t) + 1)
                                    }();
                                return {
                                    snapsContained: function() {
                                        if (t <= e + 2) return [i.max];
                                        if ("keepSnaps" === r) return a;
                                        let {
                                            min: n,
                                            max: o
                                        } = s;
                                        return a.slice(n, o)
                                    }(),
                                    scrollContainLimit: s
                                }
                            }(V, et, ee, T, 0), eo = U ? en : ee, {
                                limit: ei
                            } = function(e, t, n) {
                                let r = t[0];
                                return {
                                    limit: x(n ? r - e : m(t), r)
                                }
                            }(et, eo, C), ea = function e(t, n, r) {
                                let {
                                    constrain: o
                                } = x(0, t), i = t + 1, a = s(n);

                                function s(e) {
                                    return r ? f((i + e) % i) : o(e)
                                }

                                function u() {
                                    return e(t, a, r)
                                }
                                let l = {
                                    get: function() {
                                        return a
                                    },
                                    set: function(e) {
                                        return a = s(e), l
                                    },
                                    add: function(e) {
                                        return u().set(a + e)
                                    },
                                    clone: u
                                };
                                return l
                            }(h(eo), D, C), es = ea.clone(), eu = p(n), el = ({
                                dragHandler: e,
                                scrollBody: t,
                                scrollBounds: n,
                                options: {
                                    loop: r
                                }
                            }, o) => {
                                r || n.constrain(e.pointerDown()), t.seek(o)
                            }, ec = ({
                                scrollBody: e,
                                translate: t,
                                location: n,
                                offsetLocation: r,
                                scrollLooper: o,
                                slideLooper: i,
                                dragHandler: a,
                                animation: s,
                                eventHandler: u,
                                scrollBounds: l,
                                options: {
                                    loop: c
                                }
                            }, f) => {
                                let d = e.settled(),
                                    p = !l.shouldConstrain(),
                                    m = c ? d : d && p;
                                m && !a.pointerDown() && (s.stop(), u.emit("settle")), m || u.emit("scroll");
                                let h = n.get() * f + em.get() * (1 - f);
                                r.set(h), c && (o.loop(e.direction()), i.loop()), t.to(r.get())
                            }, ef = function(e, t, n, r) {
                                let o = b(),
                                    i = 1e3 / 60,
                                    a = null,
                                    s = 0,
                                    u = 0;

                                function l(e) {
                                    if (!u) return;
                                    a || (a = e);
                                    let o = e - a;
                                    for (a = e, s += o; s >= i;) n(i), s -= i;
                                    r(s / i), u && t.requestAnimationFrame(l)
                                }

                                function c() {
                                    t.cancelAnimationFrame(u), a = null, s = 0, u = 0
                                }
                                return {
                                    init: function() {
                                        o.add(e, "visibilitychange", () => {
                                            e.hidden && (a = null, s = 0)
                                        })
                                    },
                                    destroy: function() {
                                        c(), o.clear()
                                    },
                                    start: function() {
                                        u || (u = t.requestAnimationFrame(l))
                                    },
                                    stop: c,
                                    update: () => n(i),
                                    render: r
                                }
                            }(r, o, e => el(eE, e), e => ec(eE, e)), ed = eo[ea.get()], ep = w(ed), em = w(ed), eh = w(ed), eg = w(ed), ev = function(e, t, n, r, o, i) {
                                let a = 0,
                                    s = 0,
                                    u = o,
                                    l = .68,
                                    c = e.get(),
                                    p = 0;

                                function m(e) {
                                    return u = e, g
                                }

                                function h(e) {
                                    return l = e, g
                                }
                                let g = {
                                    direction: function() {
                                        return s
                                    },
                                    duration: function() {
                                        return u
                                    },
                                    velocity: function() {
                                        return a
                                    },
                                    seek: function(t) {
                                        let o = t / 1e3,
                                            i = u * o,
                                            f = r.get() - e.get(),
                                            m = 0;
                                        return u ? (n.set(e), a += f / i, a *= l, c += a, e.add(a * o), m = c - p) : (a = 0, n.set(r), e.set(r), m = f), s = d(m), p = c, g
                                    },
                                    settled: function() {
                                        return .001 > f(r.get() - t.get())
                                    },
                                    useBaseFriction: function() {
                                        return h(.68)
                                    },
                                    useBaseDuration: function() {
                                        return m(o)
                                    },
                                    useFriction: h,
                                    useDuration: m
                                };
                                return g
                            }(ep, eh, em, eg, L, 0), ey = function(e, t, n, r, o) {
                                let {
                                    reachedAny: i,
                                    removeOffset: a,
                                    constrain: s
                                } = r;

                                function u(e) {
                                    return e.concat().sort((e, t) => f(e) - f(t))[0]
                                }

                                function l(t, r) {
                                    let o = [t, t + n, t - n];
                                    if (!e) return t;
                                    if (!r) return u(o);
                                    let i = o.filter(e => d(e) === r);
                                    return i.length ? u(i) : m(o) - n
                                }
                                return {
                                    byDistance: function(n, r) {
                                        let u = o.get() + n,
                                            {
                                                index: c,
                                                distance: d
                                            } = function(n) {
                                                let r = e ? a(n) : s(n),
                                                    {
                                                        index: o
                                                    } = t.map((e, t) => ({
                                                        diff: l(e - r, 0),
                                                        index: t
                                                    })).sort((e, t) => f(e.diff) - f(t.diff))[0];
                                                return {
                                                    index: o,
                                                    distance: r
                                                }
                                            }(u),
                                            p = !e && i(u);
                                        if (!r || p) return {
                                            index: c,
                                            distance: n
                                        };
                                        let m = n + l(t[c] - d, 0);
                                        return {
                                            index: c,
                                            distance: m
                                        }
                                    },
                                    byIndex: function(e, n) {
                                        let r = l(t[e] - o.get(), n);
                                        return {
                                            index: e,
                                            distance: r
                                        }
                                    },
                                    shortcut: l
                                }
                            }(C, eo, et, ei, eg), eb = function(e, t, n, r, o, i, a) {
                                function s(o) {
                                    let s = o.distance,
                                        u = o.index !== t.get();
                                    i.add(s), s && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), u && (n.set(t.get()), t.set(o.index), a.emit("select"))
                                }
                                return {
                                    distance: function(e, t) {
                                        s(o.byDistance(e, t))
                                    },
                                    index: function(e, n) {
                                        let r = t.clone().set(e);
                                        s(o.byIndex(r.get(), n))
                                    }
                                }
                            }(ef, ea, es, ev, ey, eg, a), ex = function(e) {
                                let {
                                    max: t,
                                    length: n
                                } = e;
                                return {
                                    get: function(e) {
                                        return n ? -((e - t) / n) : 0
                                    }
                                }
                            }(ei), ew = b(), eO = function(e, t, n, r) {
                                let o;
                                let i = {},
                                    a = null,
                                    s = null,
                                    u = !1;
                                return {
                                    init: function() {
                                        return;
                                        o = new IntersectionObserver(e => {
                                            u || (e.forEach(e => {
                                                i[t.indexOf(e.target)] = e
                                            }), a = null, s = null, n.emit("slidesInView"))
                                        }, {
                                            root: e.parentElement,
                                            threshold: r
                                        }), t.forEach(e => o.observe(e))
                                    },
                                    destroy: function() {
                                        o && o.disconnect(), u = !0
                                    },
                                    get: function(e = !0) {
                                        return;
                                        if (e && a) return a;
                                        if (!e && s) return s;
                                        let t = v(i).reduce((t, n) => {
                                            let r = parseInt(n),
                                                {
                                                    isIntersecting: o
                                                } = i[r];
                                            return (e && o || !e && !o) && t.push(r), t
                                        }, []);
                                        return e && (a = t), e || (s = t), t
                                    }
                                }
                            }(t, n, a, I), {
                                slideRegistry: ek
                            } = function(e, t, n, r, o, i) {
                                let {
                                    groupSlides: a
                                } = o, {
                                    min: s,
                                    max: u
                                } = r;
                                return {
                                    slideRegistry: function() {
                                        let r = a(i);
                                        return 1 === n.length ? [i] : e && "keepSnaps" !== t ? r.slice(s, u).map((e, t, n) => {
                                            let r = t === h(n);
                                            return t ? r ? g(h(i) - m(n)[0] + 1, m(n)[0]) : e : g(m(n[0]) + 1)
                                        }) : r
                                    }()
                                }
                            }(U, T, eo, er, Q, eu), ej = function(e, t, n, r, o, i, a, u) {
                                let c = {
                                        passive: !0,
                                        capture: !0
                                    },
                                    f = 0;

                                function d(e) {
                                    "Tab" === e.code && (f = new Date().getTime())
                                }
                                return {
                                    init: function(p) {
                                        u && (i.add(document, "keydown", d, !1), t.forEach((t, d) => {
                                            i.add(t, "focus", t => {
                                                (l(u) || u(p, t)) && function(t) {
                                                    if (new Date().getTime() - f > 10) return;
                                                    a.emit("slideFocusStart"), e.scrollLeft = 0;
                                                    let i = n.findIndex(e => e.includes(t));
                                                    s(i) && (o.useDuration(0), r.index(i, 0), a.emit("slideFocus"))
                                                }(d)
                                            }, c)
                                        }))
                                    }
                                }
                            }(e, n, ek, eb, ev, ew, a, B), eE = {
                                ownerDocument: r,
                                ownerWindow: o,
                                eventHandler: a,
                                containerRect: q,
                                slideRects: H,
                                animation: ef,
                                axis: F,
                                dragHandler: function(e, t, n, r, o, i, a, s, u, c, p, m, h, g, v, w, O, k, j) {
                                    let {
                                        cross: E,
                                        direction: S
                                    } = e, D = ["INPUT", "SELECT", "TEXTAREA"], C = {
                                        passive: !1
                                    }, L = b(), N = b(), A = x(50, 225).constrain(g.measure(20)), I = {
                                        mouse: 300,
                                        touch: 400
                                    }, P = {
                                        mouse: 500,
                                        touch: 600
                                    }, _ = v ? 43 : 25, T = !1, W = 0, M = 0, R = !1, B = !1, z = !1, q = !1;

                                    function H(e) {
                                        if (!y(e, r) && e.touches.length >= 2) return F(e);
                                        let t = i.readPoint(e),
                                            n = i.readPoint(e, E),
                                            a = f(t - W),
                                            u = f(n - M);
                                        if (!B && !q && (!e.cancelable || !(B = a > u))) return F(e);
                                        let l = i.pointerMove(e);
                                        a > w && (z = !0), c.useFriction(.3).useDuration(.75), s.start(), o.add(S(l)), e.preventDefault()
                                    }

                                    function F(e) {
                                        let t = p.byDistance(0, !1).index !== m.get(),
                                            n = i.pointerUp(e) * (v ? P : I)[q ? "mouse" : "touch"],
                                            r = function(e, t) {
                                                let n = m.add(-1 * d(e)),
                                                    r = p.byDistance(e, !v).distance;
                                                return v || f(e) < A ? r : O && t?.5 * r : p.byIndex(n.get(), 0).distance
                                            }(S(n), t),
                                            o = function(e, t) {
                                                var n, r;
                                                if (0 === e || 0 === t || f(e) <= f(t)) return 0;
                                                let o = (n = f(e), r = f(t), f(n - r));
                                                return f(o / e)
                                            }(n, r);
                                        B = !1, R = !1, N.clear(), c.useDuration(_ - 10 * o).useFriction(.68 + o / 50), u.distance(r, !v), q = !1, h.emit("pointerUp")
                                    }

                                    function V(e) {
                                        z && (e.stopPropagation(), e.preventDefault(), z = !1)
                                    }
                                    return {
                                        init: function(e) {
                                            j && L.add(t, "dragstart", e => e.preventDefault(), C).add(t, "touchmove", () => void 0, C).add(t, "touchend", () => void 0).add(t, "touchstart", s).add(t, "mousedown", s).add(t, "touchcancel", F).add(t, "contextmenu", F).add(t, "click", V, !0);

                                            function s(s) {
                                                (l(j) || j(e, s)) && function(e) {
                                                    let s = y(e, r);
                                                    q = s, z = v && s && !e.buttons && T, T = f(o.get() - a.get()) >= 2, s && 0 !== e.button || function(e) {
                                                        let t = e.nodeName || "";
                                                        return D.includes(t)
                                                    }(e.target) || (R = !0, i.pointerDown(e), c.useFriction(0).useDuration(0), o.set(a), function() {
                                                        let e = q ? n : t;
                                                        N.add(e, "touchmove", H, C).add(e, "touchend", F).add(e, "mousemove", H, C).add(e, "mouseup", F)
                                                    }(), W = i.readPoint(e), M = i.readPoint(e, E), h.emit("pointerDown"))
                                                }(s)
                                            }
                                        },
                                        destroy: function() {
                                            L.clear(), N.clear()
                                        },
                                        pointerDown: function() {
                                            return R
                                        }
                                    }
                                }(F, e, r, o, eg, function(e, t) {
                                    let n, r;

                                    function o(e) {
                                        return e.timeStamp
                                    }

                                    function i(n, r) {
                                        let o = r || e.scroll,
                                            i = `client${"x"===o?"X":"Y"}`;
                                        return (y(n, t) ? n : n.touches[0])[i]
                                    }
                                    return {
                                        pointerDown: function(e) {
                                            return n = e, r = e, i(e)
                                        },
                                        pointerMove: function(e) {
                                            let t = i(e) - i(r),
                                                a = o(e) - o(n) > 170;
                                            return r = e, a && (n = e), t
                                        },
                                        pointerUp: function(e) {
                                            if (!n || !r) return 0;
                                            let t = i(r) - i(n),
                                                a = o(e) - o(n),
                                                s = o(e) - o(r) > 170,
                                                u = t / a;
                                            return a && !s && f(u) > .1 ? u : 0
                                        },
                                        readPoint: i
                                    }
                                }(F, o), ep, ef, eb, ev, ey, ea, a, $, N, A, _, 0, R),
                                eventStore: ew,
                                percentOfView: $,
                                index: ea,
                                indexPrevious: es,
                                limit: ei,
                                location: ep,
                                offsetLocation: eh,
                                previousLocation: em,
                                options: i,
                                resizeHandler: function(e, t, n, r, o, i, a) {
                                    let s, u;
                                    let c = [e].concat(r),
                                        d = [],
                                        p = !1;

                                    function m(e) {
                                        return o.measureSize(a.measure(e))
                                    }
                                    return {
                                        init: function(o) {
                                            return;
                                            i && (u = m(e), d = r.map(m), s = new ResizeObserver(n => {
                                                (l(i) || i(o, n)) && function(n) {
                                                    for (let i of n) {
                                                        if (p) return;
                                                        let n = i.target === e,
                                                            a = r.indexOf(i.target),
                                                            s = n ? u : d[a];
                                                        if (f(m(n ? e : r[a]) - s) >= .5) {
                                                            o.reInit(), t.emit("resize");
                                                            break
                                                        }
                                                    }
                                                }(n)
                                            }), n.requestAnimationFrame(() => {
                                                c.forEach(e => s.observe(e))
                                            }))
                                        },
                                        destroy: function() {
                                            p = !0, s && s.disconnect()
                                        }
                                    }
                                }(t, a, o, n, F, W, z),
                                scrollBody: ev,
                                scrollBounds: function(e, t, n, r, o) {
                                    let i = o.measure(10),
                                        a = o.measure(50),
                                        s = x(.1, .99),
                                        u = !1;

                                    function l() {
                                        return !!(!u && e.reachedAny(n.get()) && e.reachedAny(t.get()))
                                    }
                                    return {
                                        shouldConstrain: l,
                                        constrain: function(o) {
                                            if (!l()) return;
                                            let u = e.reachedMin(t.get()) ? "min" : "max",
                                                c = f(e[u] - t.get()),
                                                d = n.get() - t.get(),
                                                p = s.constrain(c / a);
                                            n.subtract(d * p), !o && f(d) < i && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction())
                                        },
                                        toggleActive: function(e) {
                                            u = !e
                                        }
                                    }
                                }(ei, eh, eg, ev, $),
                                scrollLooper: function(e, t, n, r) {
                                    let {
                                        reachedMin: o,
                                        reachedMax: i
                                    } = x(t.min + .1, t.max + .1);
                                    return {
                                        loop: function(t) {
                                            if (!(1 === t ? i(n.get()) : -1 === t && o(n.get()))) return;
                                            let a = -1 * t * e;
                                            r.forEach(e => e.add(a))
                                        }
                                    }
                                }(et, ei, eh, [ep, eh, em, eg]),
                                scrollProgress: ex,
                                scrollSnapList: eo.map(ex.get),
                                scrollSnaps: eo,
                                scrollTarget: ey,
                                scrollTo: eb,
                                slideLooper: function(e, t, n, r, o, i, a, s, u) {
                                    let l = p(o),
                                        c = m(d(p(o).reverse(), a[0]), n, !1).concat(m(d(l, t - a[0] - 1), -n, !0));

                                    function f(e, t) {
                                        return e.reduce((e, t) => e - o[t], t)
                                    }

                                    function d(e, t) {
                                        return e.reduce((e, n) => f(e, t) > 0 ? e.concat([n]) : e, [])
                                    }

                                    function m(o, a, l) {
                                        let c = i.map((e, n) => ({
                                            start: e - r[n] + .5 + a,
                                            end: e + t - .5 + a
                                        }));
                                        return o.map(t => {
                                            let r = l ? 0 : -n,
                                                o = l ? n : 0,
                                                i = c[t][l ? "end" : "start"];
                                            return {
                                                index: t,
                                                loopPoint: i,
                                                slideLocation: w(-1),
                                                translate: O(e, u[t]),
                                                target: () => s.get() > i ? r : o
                                            }
                                        })
                                    }
                                    return {
                                        canLoop: function() {
                                            return c.every(({
                                                index: e
                                            }) => .1 >= f(l.filter(t => t !== e), t))
                                        },
                                        clear: function() {
                                            c.forEach(e => e.translate.clear())
                                        },
                                        loop: function() {
                                            c.forEach(e => {
                                                let {
                                                    target: t,
                                                    translate: n,
                                                    slideLocation: r
                                                } = e, o = t();
                                                o !== r.get() && (n.to(o), r.set(o))
                                            })
                                        },
                                        loopPoints: c
                                    }
                                }(F, V, et, X, K, Z, eo, eh, n),
                                slideFocus: ej,
                                slidesHandler: (k = !1, {
                                    init: function(e) {
                                        M && (c = new MutationObserver(t => {
                                            !k && (l(M) || M(e, t)) && function(t) {
                                                for (let n of t)
                                                    if ("childList" === n.type) {
                                                        e.reInit(), a.emit("slidesChanged");
                                                        break
                                                    }
                                            }(t)
                                        })).observe(t, {
                                            childList: !0
                                        })
                                    },
                                    destroy: function() {
                                        c && c.disconnect(), k = !0
                                    }
                                }),
                                slidesInView: eO,
                                slideIndexes: eu,
                                slideRegistry: ek,
                                slidesToScroll: Q,
                                target: eg,
                                translate: O(F, t)
                            };
                            return eE
                        }(e, i, a, S, D, n, A);
                        return n.loop && !r.slideLooper.canLoop() ? t(Object.assign({}, n, {
                            loop: !1
                        })) : r
                    }(z), _([B, ...q.map(({
                        options: e
                    }) => e)]).forEach(e => N.add(e, "change", F)), z.active && (r.translate.to(r.location.get()), r.animation.init(), r.slidesInView.init(), r.slideFocus.init(U), r.eventHandler.init(U), r.resizeHandler.init(U), r.slidesHandler.init(U), r.options.loop && r.slideLooper.loop(), i.offsetParent && a.length && r.dragHandler.init(U), o = L.init(U, q)))
                }

                function F(e, t) {
                    let n = G();
                    V(), H(I({
                        startIndex: n
                    }, e), t), A.emit("reInit")
                }

                function V() {
                    r.dragHandler.destroy(), r.eventStore.clear(), r.translate.clear(), r.slideLooper.clear(), r.resizeHandler.destroy(), r.slidesHandler.destroy(), r.slidesInView.destroy(), r.animation.destroy(), L.destroy(), N.clear()
                }

                function $(e, t, n) {
                    z.active && !R && (r.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : z.duration), r.scrollTo.index(e, n || 0))
                }

                function G() {
                    return r.index.get()
                }
                let U = {
                    canScrollNext: function() {
                        return r.index.add(1).get() !== G()
                    },
                    canScrollPrev: function() {
                        return r.index.add(-1).get() !== G()
                    },
                    containerNode: function() {
                        return i
                    },
                    internalEngine: function() {
                        return r
                    },
                    destroy: function() {
                        R || (R = !0, N.clear(), V(), A.emit("destroy"), A.clear())
                    },
                    off: W,
                    on: T,
                    emit: M,
                    plugins: function() {
                        return o
                    },
                    previousScrollSnap: function() {
                        return r.indexPrevious.get()
                    },
                    reInit: F,
                    rootNode: function() {
                        return e
                    },
                    scrollNext: function(e) {
                        $(r.index.add(1).get(), e, -1)
                    },
                    scrollPrev: function(e) {
                        $(r.index.add(-1).get(), e, 1)
                    },
                    scrollProgress: function() {
                        return r.scrollProgress.get(r.location.get())
                    },
                    scrollSnapList: function() {
                        return r.scrollSnapList
                    },
                    scrollTo: $,
                    selectedScrollSnap: G,
                    slideNodes: function() {
                        return a
                    },
                    slidesInView: function() {
                        return r.slidesInView.get()
                    },
                    slidesNotInView: function() {
                        return r.slidesInView.get(!1)
                    }
                };
                return H(t, n), setTimeout(() => A.emit("init"), 0), U
            }

            function E(e = {}, t = []) {
                let n = (0, r.useRef)(e),
                    o = (0, r.useRef)(t),
                    [s, u] = (0, r.useState)(),
                    [l, c] = (0, r.useState)(),
                    f = (0, r.useCallback)(() => {
                        s && s.reInit(n.current, o.current)
                    }, [s]);
                return (0, r.useEffect)(() => {
                    i(n.current, e) || (n.current = e, f())
                }, [e, f]), (0, r.useEffect)(() => {
                    ! function(e, t) {
                        if (e.length !== t.length) return !1;
                        let n = a(e),
                            r = a(t);
                        return n.every((e, t) => i(e, r[t]))
                    }(o.current, t) && (o.current = t, f())
                }, [t, f]), (0, r.useEffect)(() => {
                    if ("undefined" != typeof window && window.document && window.document.createElement && l) {
                        j.globalOptions = E.globalOptions;
                        let e = j(l, n.current, o.current);
                        return u(e), () => e.destroy()
                    }
                    u(void 0)
                }, [l, u]), [c, s]
            }
            j.globalOptions = void 0, E.globalOptions = void 0
        }
    }
]);