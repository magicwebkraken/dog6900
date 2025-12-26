(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        48312: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return s(10121)
            }])
        },
        55509: function(e, t, s) {
            "use strict";
            var n = s(85893),
                i = s(57747),
                a = s(12054),
                c = s(99221),
                l = s(67294),
                o = s(29512),
                r = s(85387);
            t.Z = e => {
                let {
                    url: t,
                    handleLoad: s,
                    maxH: h
                } = e, [m, _] = (0, l.useState)(!1), d = (0, l.useCallback)(() => (0, r.EQ)(t), [t]);
                return (0, n.jsx)(n.Fragment, {
                    children: "" !== d() && (0, n.jsxs)(i.xu, {
                        overflowY: "auto",
                        maxH: h,
                        w: "100%",
                        children: [!1 === m && (0, n.jsxs)(i.xu, {
                            bg: "#fff",
                            p: "20px",
                            borderRadius: 20,
                            children: [(0, n.jsx)(a.s, {
                                size: "10"
                            }), (0, n.jsx)(c.N, {
                                mt: "4",
                                noOfLines: 4,
                                spacing: "4",
                                skeletonHeight: "2"
                            })]
                        }), (0, n.jsx)(o.iD, {
                            tweetId: d(),
                            onLoad: () => {
                                _(!0), s && s()
                            },
                            options: {
                                hide_thread: !0,
                                maxheight: 420,
                                align: "center",
                                dnt: !0
                            }
                        })]
                    })
                })
            }
        },
        85387: function(e, t, s) {
            "use strict";
            s.d(t, {
                EQ: function() {
                    return a
                },
                b1: function() {
                    return n
                }
            });
            let n = (e, t) => new RegExp("https://(twitter|x).com/".concat(e, "/status/[0-9]+")).test(t),
                i = e => e.match(/^(?:https?:\/\/)?(?:x\.com|twitter\.com)\/([^/]+)\/status\/(\d+)$/),
                a = e => {
                    let t = i(e);
                    return t ? t[2] : ""
                }
        },
        10121: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return es
                }
            });
            var n = s(85893),
                i = s(9008),
                a = s.n(i),
                c = s(57747),
                l = s(67294);
            let o = e => {
                let {
                    page: t
                } = e;
                return (0, n.jsx)(c.xu, {
                    children: t
                })
            };
            var r = () => {
                    let e = "0xcomingsoon";
                    return {
                        metaTitle: "$DOG6900",
                        metaDescription: "$DOG6900-First Ethereum Moonshot coin.",
                        isMaintenance: !0,
                        siteOrigin: window.location.origin,
                        raydiumSite: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=".concat(e),
                        ctanAddress: e
                    }
                },
                h = s(6089),
                m = s(61055),
                _ = s(4169),
                d = s(99875),
                x = s(34292),
                j = s(32883),
                g = s(48783),
                u = s(71293),
                p = s(93108),
                b = s(58454),
                k = s(36884),
                N = s.n(k),
                f = e => {
                    let {
                        isConnectModalOpen: t,
                        closeConnectModal: s
                    } = e, {
                        authenticated: i,
                        user: a,
                        unlinkWallet: o
                    } = (0, m.h)(), {
                        createWallet: r
                    } = (0, b.u)(), {
                        linkWallet: h
                    } = (0, d.j6)(), _ = (0, l.useMemo)(() => null == a ? void 0 : a.linkedAccounts.some(e => "wallet" === e.type && "solana" === e.chainType && "privy" === e.walletClientType), [a]), j = (0, l.useMemo)(() => null == a ? void 0 : a.linkedAccounts.some(e => "wallet" === e.type && "solana" === e.chainType && "privy" !== e.walletClientType), [a]);
                    return (0, n.jsx)(n.Fragment, {
                        children: t && i && a && (0, n.jsx)("div", {
                            className: N().modal,
                            children: (0, n.jsxs)(c.xu, {
                                borderRadius: "20px",
                                background: "#ffffc7",
                                minH: 530,
                                h: "auto",
                                padding: "30px 30px 10px",
                                children: [(0, n.jsx)("button", {
                                    className: N().close_btn,
                                    onClick: s,
                                    children: (0, n.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "34",
                                        height: "34",
                                        viewBox: "0 0 34 34",
                                        fill: "none",
                                        children: (0, n.jsx)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M22.6274 11.3136C23.018 11.7041 23.018 12.3373 22.6274 12.7278L18.3848 16.9704L22.6274 21.2131C23.018 21.6036 23.018 22.2368 22.6274 22.6273C22.2369 23.0178 21.6037 23.0178 21.2132 22.6273L16.9706 18.3847L12.7279 22.6273C12.3374 23.0178 11.7043 23.0178 11.3137 22.6273C10.9232 22.2368 10.9232 21.6036 11.3137 21.2131L15.5564 16.9704L11.3137 12.7278C10.9232 12.3373 10.9232 11.7041 11.3137 11.3136C11.7043 10.9231 12.3374 10.9231 12.7279 11.3136L16.9706 15.5562L21.2132 11.3136C21.6037 10.9231 22.2369 10.9231 22.6274 11.3136Z",
                                            fill: "#141517"
                                        })
                                    })
                                }), (0, n.jsxs)(g.g, {
                                    spacing: 4,
                                    children: [a.linkedAccounts.map((e, t) => "wallet" === e.type ? (0, n.jsx)(c.xu, {
                                        children: (0, n.jsxs)(x.U, {
                                            children: [(0, n.jsx)(u.x, {
                                                children: e.chainType
                                            }), (0, n.jsx)(u.x, {
                                                children: e.address
                                            }), "embedded" !== e.connectorType && (0, n.jsx)(p.z, {
                                                onClick: () => o(e.address),
                                                children: "unlink"
                                            })]
                                        })
                                    }, t) : "email" === e.type ? (0, n.jsx)(c.xu, {
                                        children: (0, n.jsxs)(x.U, {
                                            children: [(0, n.jsx)(u.x, {
                                                children: "Email"
                                            }), (0, n.jsx)(u.x, {
                                                children: e.address
                                            })]
                                        })
                                    }, t) : "twitter_oauth" === e.type ? (0, n.jsx)(c.xu, {
                                        children: (0, n.jsxs)(x.U, {
                                            children: [(0, n.jsx)(u.x, {
                                                children: "Twitter"
                                            }), (0, n.jsx)(u.x, {
                                                children: e.username
                                            })]
                                        })
                                    }, t) : (0, n.jsx)(c.xu, {}, t)), (0, n.jsx)(c.xu, {
                                        children: (0, n.jsxs)(x.U, {
                                            children: [(0, n.jsx)(u.x, {
                                                children: "Privy Solana Wallet:"
                                            }), (0, n.jsx)(u.x, {
                                                children: _ ? "Connected" : (0, n.jsx)(p.z, {
                                                    onClick: () => {
                                                        r()
                                                    },
                                                    children: "Connect"
                                                })
                                            })]
                                        })
                                    }), (0, n.jsx)(c.xu, {
                                        children: (0, n.jsxs)(x.U, {
                                            children: [(0, n.jsx)(u.x, {
                                                children: "external Solana Wallet:"
                                            }), (0, n.jsx)(u.x, {
                                                children: j ? "Connected" : (0, n.jsx)(p.z, {
                                                    onClick: () => {
                                                        h()
                                                    },
                                                    children: "Connect"
                                                })
                                            })]
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                };
            let w = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                    return "".concat(e.slice(0, t), "...").concat(e.slice(-1 * t))
                },
                C = async (e, t) => fetch("/api/balance?address=".concat(t.address), {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer ".concat(e),
                        "Content-Type": "application/json"
                    }
                }).then(e => e.json()).then(e => e),
                v = (e, t) => Math.floor(e * t) / t;
            var E = () => ({
                    generateShortAddress: w,
                    getBalance: C,
                    orgFloor: v
                }),
                F = e => {
                    let {
                        setIsWalletModalOpen: t,
                        toggleMenu: s,
                        login: i,
                        currentWallet: a,
                        balances: c
                    } = e, {
                        authenticated: o
                    } = (0, m.h)(), [_, d] = (0, l.useState)(!1), {
                        isMaintenance: g,
                        raydiumSite: u
                    } = r(), {
                        generateShortAddress: p,
                        orgFloor: b
                    } = E(), k = (0, l.useMemo)(() => a ? p(a.address, 6) : "", [a, p]), w = (0, l.useMemo)(() => c.CTAN ? b(c.CTAN, 1e3) : 0, [c.CTAN, b]);
                    return (0, n.jsx)("div", {
                        className: N().con_head,
                        children: (0, n.jsxs)("div", {
                            className: N().wrapper,
                            children: [(0, n.jsx)("p", {
                                children: "DOG6900☆︎Coin Portal"
                            }), g ? (0, n.jsxs)(x.U, {
                                spacing: 4,
                                children: [(0, n.jsx)(j.r, {
                                    href: u,
                                    isExternal: !0,
                                    children: (0, n.jsx)(h.E, {
                                        borderRadius: "full",
                                        src: "/images/Buy-button.png"
                                    })
                                }), (0, n.jsx)("button", {
                                    className: N().unit_btn_01,
                                    style: {
                                        cursor: "not-allowed"
                                    },
                                    disabled: !0,
                                    children: "\uD83D\uDC5BCOMING SOON!\uD83D\uDC5B"
                                })]
                            }) : (0, n.jsx)(n.Fragment, {
                                children: o ? (0, n.jsx)(n.Fragment, {
                                    children: (0, n.jsxs)("div", {
                                        className: N().login_box,
                                        children: [(0, n.jsx)(f, {
                                            isConnectModalOpen: _,
                                            closeConnectModal: () => d(!1)
                                        }), (0, n.jsxs)("div", {
                                            className: N().unit_btn_03,
                                            onClick: () => d(!0),
                                            children: [(0, n.jsx)(h.E, {
                                                src: "/images/icon1.png",
                                                alt: "",
                                                width: 22,
                                                height: 22,
                                                objectFit: "contain"
                                            }), "Solana Mainnet"]
                                        }), (0, n.jsxs)("div", {
                                            onClick: () => t(!0),
                                            className: "".concat(N().sol_box, " ").concat(N().unit_flex),
                                            children: [(0, n.jsxs)("span", {
                                                className: N().fs12,
                                                children: [w, " ", (0, n.jsx)("span", {
                                                    className: N().fs10,
                                                    children: "CTAN"
                                                })]
                                            }), (0, n.jsx)("span", {
                                                className: N().yellow,
                                                children: k
                                            })]
                                        })]
                                    })
                                }) : (0, n.jsxs)(x.U, {
                                    spacing: 4,
                                    children: [(0, n.jsx)(j.r, {
                                        href: u,
                                        isExternal: !0,
                                        children: (0, n.jsx)(h.E, {
                                            borderRadius: "full",
                                            src: "/images/Buy-button.png"
                                        })
                                    }), (0, n.jsx)("button", {
                                        className: N().unit_btn_01,
                                        onClick: i,
                                        children: "\uD83D\uDC5B CONNECT WALLET \uD83D\uDC5B"
                                    })]
                                })
                            }), (0, n.jsx)("div", {
                                className: N().sp_block,
                                children: (0, n.jsx)("button", {
                                    className: N().hamburger,
                                    onClick: s,
                                    children: (0, n.jsx)(h.E, {
                                        src: "/images/sp_nav_icon.png",
                                        alt: "",
                                        width: 21,
                                        height: 21,
                                        objectFit: "contain"
                                    })
                                })
                            })]
                        })
                    })
                },
                D = e => {
                    let {
                        isBgmModalOpen: t,
                        handleSoundToggle: s
                    } = e;
                    return (0, n.jsx)(n.Fragment, {
                        children: t && (0, n.jsx)("div", {
                            className: N().modal,
                            children: (0, n.jsxs)("div", {
                                className: N().modalContent,
                                children: [(0, n.jsx)("h2", {
                                    className: N().title,
                                    children: "CONTINUE WITH AMAZING MUSIC?"
                                }), (0, n.jsx)("button", {
                                    className: N().soundBtn,
                                    onClick: () => s(!0),
                                    children: "\uD83C\uDFB5 YES OFC \uD83C\uDFB5"
                                }), (0, n.jsx)("button", {
                                    className: N().soundBtn,
                                    onClick: () => s(!1),
                                    children: "\uD83D\uDE45‍♀️ MAKE IT STOP \uD83D\uDE45‍♀️"
                                }), ]
                            })
                        })
                    })
                },
                y = s(55509),
                S = s(85387),
                T = e => {
                    let {
                        isPostModalOpen: t,
                        handleSubmitPostModal: s,
                        closeModal: i
                    } = e, [a, o] = (0, l.useState)(""), [r, h] = (0, l.useState)(!1), [_, d] = (0, l.useState)(!1), {
                        user: x
                    } = (0, m.h)(), j = (0, l.useCallback)(e => {
                        var t;
                        let s = (null == x ? void 0 : null === (t = x.twitter) || void 0 === t ? void 0 : t.username) || "";
                        if ("" === s) {
                            h(!1);
                            return
                        }
                        h((0, S.b1)(s, e))
                    }, [x]);
                    return (0, l.useEffect)(() => {
                        t && (o(""), d(!1))
                    }, [t]), (0, l.useEffect)(() => {
                        j(a)
                    }, [a, j]), (0, n.jsx)(n.Fragment, {
                        children: t && (0, n.jsx)("div", {
                            className: "".concat(N().modal, " ").concat(N().post_modal),
                            children: (0, n.jsxs)("div", {
                                className: "".concat(N().modalContent, " ").concat(N().modalContent2),
                                children: [(0, n.jsx)("button", {
                                    className: N().close_btn,
                                    onClick: i,
                                    children: (0, n.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "34",
                                        height: "34",
                                        viewBox: "0 0 34 34",
                                        fill: "none",
                                        children: (0, n.jsx)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M22.6274 11.3136C23.018 11.7041 23.018 12.3373 22.6274 12.7278L18.3848 16.9704L22.6274 21.2131C23.018 21.6036 23.018 22.2368 22.6274 22.6273C22.2369 23.0178 21.6037 23.0178 21.2132 22.6273L16.9706 18.3847L12.7279 22.6273C12.3374 23.0178 11.7043 23.0178 11.3137 22.6273C10.9232 22.2368 10.9232 21.6036 11.3137 21.2131L15.5564 16.9704L11.3137 12.7278C10.9232 12.3373 10.9232 11.7041 11.3137 11.3136C11.7043 10.9231 12.3374 10.9231 12.7279 11.3136L16.9706 15.5562L21.2132 11.3136C21.6037 10.9231 22.2369 10.9231 22.6274 11.3136Z",
                                            fill: "#141517"
                                        })
                                    })
                                }), (0, n.jsxs)(g.g, {
                                    w: "100%",
                                    children: [(0, n.jsx)(c.xu, {
                                        children: (0, n.jsxs)("h2", {
                                            className: N().title,
                                            children: ["Do you want to give him milk?", (0, n.jsx)("br", {}), "↓Tweet URL↓"]
                                        })
                                    }), (0, n.jsx)(c.xu, {
                                        children: (0, n.jsx)("input", {
                                            type: "text",
                                            placeholder: "https://x.com/kabosumama/status/1849085265446576457",
                                            onChange: e => o(e.target.value)
                                        })
                                    }), (0, n.jsx)(p.z, {
                                        onClick: () => {
                                            r && (d(!0), s(a))
                                        },
                                        disabled: !r,
                                        fontSize: "16px",
                                        h: "30px",
                                        isLoading: _,
                                        children: "Give"
                                    }), r && a && (0, n.jsx)(c.xu, {
                                        w: "85%",
                                        children: (0, n.jsx)(y.Z, {
                                            url: a
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                },
                A = s(7963),
                M = e => {
                    let {
                        balances: t
                    } = e, {
                        orgFloor: s
                    } = E(), i = (0, l.useMemo)(() => ({
                        SOL: t.SOL ? s(t.SOL, 1e3) : 0,
                        CTAN: t.CTAN ? s(t.CTAN, 1e3) : 0,
                        USDT: t.USDT ? s(t.USDT, 1e3) : 0
                    }), [t, s]);
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("h2", {
                            className: N().title,
                            children: "Balance"
                        }), (0, n.jsxs)("div", {
                            className: "".concat(N().chakra_stack_wrap, " ").concat(N().css_ms4ur1),
                            children: [(0, n.jsxs)("div", {
                                className: "".concat(N().chakra_stack, " ").concat(N().unit_flex),
                                children: [(0, n.jsx)(h.E, {
                                    src: "https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png",
                                    alt: "",
                                    width: 40,
                                    height: 40,
                                    objectFit: "contain",
                                    borderRadius: "full"
                                }), (0, n.jsxs)("div", {
                                    className: "".concat(N().chakra_stack_inner, " ").concat(N().css_cactb4),
                                    children: [(0, n.jsx)("p", {
                                        className: "".concat(N().chakra_text, " ").concat(N().css_ljbvy9),
                                        children: "SOL"
                                    }), (0, n.jsx)("p", {
                                        className: "".concat(N().chakra_text, " ").concat(N().fs10),
                                        children: "Solana"
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "".concat(N().chakra_stack_inner, " ").concat(N().css_6nqv0h),
                                    children: (0, n.jsx)("p", {
                                        className: "".concat(N().chakra_text, " ").concat(N().css_17o9whs),
                                        children: i.SOL
                                    })
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "".concat(N().chakra_stack, " ").concat(N().unit_flex),
                                children: [(0, n.jsx)(h.E, {
                                    src: "https://wsrv.nl/?w=48&h=48&url=https://ipfs.io/ipfs/QmNavbEVC4rmUEjaCsqszPruDMq3vhU75U6d3e1GnmsFKi",
                                    alt: "",
                                    width: 40,
                                    height: 40,
                                    objectFit: "contain"
                                }), (0, n.jsxs)("div", {
                                    className: "".concat(N().chakra_stack_inner, " ").concat(N().css_cactb4),
                                    children: [(0, n.jsx)("p", {
                                        className: "".concat(N().chakra_text, " ").concat(N().css_ljbvy9),
                                        children: "CTAN"
                                    }), (0, n.jsx)("p", {
                                        className: "".concat(N().chakra_text, " ").concat(N().fs10),
                                        children: "CTAN☆COIN"
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "".concat(N().chakra_stack_inner, " ").concat(N().css_6nqv0h),
                                    children: (0, n.jsx)("p", {
                                        className: "".concat(N().chakra_text, " ").concat(N().css_17o9whs),
                                        children: i.CTAN
                                    })
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "".concat(N().chakra_stack, " ").concat(N().unit_flex),
                                children: [(0, n.jsx)(h.E, {
                                    src: "/images/w_icon6.svg",
                                    alt: "",
                                    width: 40,
                                    height: 40,
                                    objectFit: "contain"
                                }), (0, n.jsxs)("div", {
                                    className: "".concat(N().chakra_stack_inner, " ").concat(N().css_cactb4),
                                    children: [(0, n.jsx)("p", {
                                        className: "".concat(N().chakra_text, " ").concat(N().css_ljbvy9),
                                        children: "USDT"
                                    }), (0, n.jsx)("p", {
                                        className: "".concat(N().chakra_text, " ").concat(N().fs10),
                                        children: "Tether USD"
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "".concat(N().chakra_stack_inner, " ").concat(N().css_6nqv0h),
                                    children: (0, n.jsx)("p", {
                                        className: "".concat(N().chakra_text, " ").concat(N().css_17o9whs),
                                        children: i.USDT
                                    })
                                })]
                            })]
                        })]
                    })
                },
                O = e => {
                    let {
                        isWalletModalOpen: t,
                        closeWalletModal: s,
                        currentWallet: i,
                        balances: a
                    } = e, {
                        authenticated: c,
                        logout: l,
                        user: o
                    } = (0, m.h)(), {
                        generateShortAddress: r
                    } = E(), _ = (0, A.p)(), d = async () => {
                        if (o && i) try {
                            await navigator.clipboard.writeText(i.address), _({
                                title: "Copied to clipboard",
                                status: "success",
                                duration: 2e3,
                                isClosable: !0
                            })
                        } catch (e) {
                            console.error(e)
                        }
                    };
                    return (0, n.jsx)(n.Fragment, {
                        children: t && c && (0, n.jsx)("div", {
                            className: N().modal,
                            children: (0, n.jsxs)("div", {
                                className: N().modalContentWallet,
                                children: [(0, n.jsx)("button", {
                                    className: N().close_btn,
                                    onClick: s,
                                    children: (0, n.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "34",
                                        height: "34",
                                        viewBox: "0 0 34 34",
                                        fill: "none",
                                        children: (0, n.jsx)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M22.6274 11.3136C23.018 11.7041 23.018 12.3373 22.6274 12.7278L18.3848 16.9704L22.6274 21.2131C23.018 21.6036 23.018 22.2368 22.6274 22.6273C22.2369 23.0178 21.6037 23.0178 21.2132 22.6273L16.9706 18.3847L12.7279 22.6273C12.3374 23.0178 11.7043 23.0178 11.3137 22.6273C10.9232 22.2368 10.9232 21.6036 11.3137 21.2131L15.5564 16.9704L11.3137 12.7278C10.9232 12.3373 10.9232 11.7041 11.3137 11.3136C11.7043 10.9231 12.3374 10.9231 12.7279 11.3136L16.9706 15.5562L21.2132 11.3136C21.6037 10.9231 22.2369 10.9231 22.6274 11.3136Z",
                                            fill: "#141517"
                                        })
                                    })
                                }), (0, n.jsx)("h2", {
                                    className: N().title,
                                    children: "Wallet"
                                }), (0, n.jsxs)("div", {
                                    className: "".concat(N().unit_flex, " ").concat(N().address, " ").concat(N().left),
                                    children: [(0, n.jsx)("h3", {
                                        className: N().title,
                                        children: "Address"
                                    }), (0, n.jsx)("a", {
                                        href: "https://solscan.io/account/".concat(null == i ? void 0 : i.address),
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: (0, n.jsx)(h.E, {
                                            src: "/images/w_icon1.svg",
                                            alt: "",
                                            width: 31,
                                            height: 25,
                                            objectFit: "contain"
                                        })
                                    })]
                                }), (0, n.jsxs)("p", {
                                    className: "".concat(N().unit_flex, " ").concat(N().number, " ").concat(N().left),
                                    children: [i ? r(null == i ? void 0 : i.address) : "", (0, n.jsx)("a", {
                                        onClick: () => d(),
                                        children: (0, n.jsx)(h.E, {
                                            src: "/images/w_icon2.svg",
                                            alt: "",
                                            width: 29,
                                            height: 26,
                                            objectFit: "contain"
                                        })
                                    })]
                                }), o && o.email && (0, n.jsxs)("p", {
                                    className: "".concat(N().unit_flex, " ").concat(N().mail, " ").concat(N().left),
                                    children: [(0, n.jsx)(h.E, {
                                        src: "/images/w_icon3.svg",
                                        alt: "",
                                        width: 29,
                                        height: 26,
                                        objectFit: "contain"
                                    }), o.email.address]
                                }), (0, n.jsxs)("div", {
                                    className: "".concat(N().unit_flex, " ").concat(N().btn_box),
                                    children: [(0, n.jsx)("a", {
                                        href: "#",
                                        className: N().unit_btn_04,
                                        children: "Send"
                                    }), (0, n.jsx)("a", {
                                        href: "#",
                                        className: N().unit_btn_04,
                                        children: "Deposit"
                                    })]
                                }), (0, n.jsx)(M, {
                                    balances: a
                                }), (0, n.jsxs)("button", {
                                    className: N().logout,
                                    onClick: () => {
                                        l(), s()
                                    },
                                    type: "button",
                                    children: [(0, n.jsx)("span", {
                                        className: N().icon,
                                        children: (0, n.jsxs)("svg", {
                                            viewBox: "0 0 24 24",
                                            focusable: "false",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            "aria-hidden": "true",
                                            children: [(0, n.jsx)("path", {
                                                d: "M22.829 9.172 18.95 5.293a1 1 0 0 0-1.414 1.414l3.879 3.879a2.057 2.057 0 0 1 .3.39c-.015 0-.027-.008-.042-.008L5.989 11a1 1 0 0 0 0 2l15.678-.032c.028 0 .051-.014.078-.016a2 2 0 0 1-.334.462l-3.879 3.879a1 1 0 1 0 1.414 1.414l3.879-3.879a4 4 0 0 0 0-5.656Z"
                                            }), (0, n.jsx)("path", {
                                                d: "M7 22H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h2a1 1 0 0 0 0-2H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h2a1 1 0 0 0 0-2Z"
                                            })]
                                        })
                                    }), "Disconnect"]
                                })]
                            })
                        })
                    })
                },
                L = e => {
                    let {
                        isWelcomeModalOpen: t,
                        closeModal: s
                    } = e, [i, a] = (0, l.useState)(1);
                    return (0, l.useEffect)(() => {
                        a(1)
                    }, [t]), (0, l.useEffect)(() => {
                        let e = document.querySelector(".".concat(N().modalContent));
                        e && e.scrollTo(0, 0)
                    }, [i]), (0, n.jsx)(n.Fragment, {
                        children: t && i > 0 && (0, n.jsx)("div", {
                            className: "".concat(N().modal, " ").concat(N().step_modal),
                            children: (0, n.jsxs)("div", {
                                className: N().modalContent,
                                children: [1 === i && (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsxs)("h2", {
                                        className: N().title1,
                                        children: ["Give Chiitan ", (0, n.jsx)("span", {
                                            children: "“Tenage☆Milk”"
                                        }), (0, n.jsx)("br", {}), " and get ", (0, n.jsx)("span", {
                                            children: "Chiitan☆Coin!"
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: N().txt_box,
                                        children: [(0, n.jsx)("p", {
                                            children: "Post a meme image or video of Chiitan to X and put the URL of your post in the “Tenage Milk Box” and the fairy will ingest the milk☆."
                                        }), (0, n.jsx)("div", {
                                            className: N().milk_img,
                                            children: (0, n.jsx)(h.E, {
                                                src: "/images/side_banner7.gif",
                                                alt: "",
                                                width: 429,
                                                height: 201,
                                                objectFit: "contain"
                                            })
                                        }), (0, n.jsxs)("p", {
                                            children: ["If the ingested “Tenage Milk” is tasty, Chiitan☆Coin will be dropped to", " ", (0, n.jsx)("span", {
                                                className: N().red,
                                                children: "your Solana address!"
                                            })]
                                        })]
                                    })]
                                }), 2 === i && (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)("span", {
                                        className: N().number,
                                        children: "1"
                                    }), (0, n.jsxs)("div", {
                                        className: N().txt_box2,
                                        children: [(0, n.jsx)("h2", {
                                            className: N().title2,
                                            children: (0, n.jsxs)("span", {
                                                className: N().blue,
                                                children: ["Create Meme images and videos using ", (0, n.jsx)("br", {}), (0, n.jsx)("span", {
                                                    className: N().red,
                                                    children: " Chiitan materials!"
                                                })]
                                            })
                                        }), (0, n.jsx)(h.E, {
                                            src: "/images/side_banner1.gif",
                                            alt: "",
                                            width: 320,
                                            height: 230,
                                            objectFit: "contain"
                                        }), (0, n.jsx)("p", {
                                            children: "↑↑↑ Click on this banner on the screen to download as much material as you like! ↑↑↑"
                                        })]
                                    })]
                                }), 3 === i && (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)("span", {
                                        className: N().number,
                                        children: "2"
                                    }), (0, n.jsxs)("div", {
                                        className: N().txt_box,
                                        children: [(0, n.jsx)("h2", {
                                            className: N().title2,
                                            children: (0, n.jsxs)("span", {
                                                className: N().blue,
                                                children: ["Let's post it on ", (0, n.jsx)("span", {
                                                    className: N().red,
                                                    children: "your X!"
                                                })]
                                            })
                                        }), (0, n.jsx)(h.E, {
                                            src: "/images/sample2.png",
                                            alt: "",
                                            width: 245,
                                            height: 283,
                                            objectFit: "contain"
                                        }), (0, n.jsx)("p", {
                                            children: "You can post as many times as you like, just be sure to copy the URL of your post after you submit it!"
                                        })]
                                    })]
                                }), 4 === i && (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)("span", {
                                        className: N().number,
                                        children: "3"
                                    }), (0, n.jsxs)("div", {
                                        className: N().txt_box2,
                                        children: [(0, n.jsx)("h2", {
                                            className: N().title2,
                                            children: (0, n.jsxs)("span", {
                                                className: N().blue,
                                                children: ["Put the URL of your submission in the", " ", (0, n.jsx)("span", {
                                                    className: N().red,
                                                    children: "“Tenage Milk Box”!"
                                                })]
                                            })
                                        }), (0, n.jsx)("div", {
                                            className: N().milk_img,
                                            children: (0, n.jsx)(h.E, {
                                                src: "/images/side_banner7.gif",
                                                alt: "",
                                                width: 429,
                                                height: 201,
                                                objectFit: "contain"
                                            })
                                        }), (0, n.jsx)("a", {
                                            href: "#",
                                            className: N().unit_btn_02,
                                            children: "\uD83C\uDF7C Throw milk at them \uD83C\uDF7C"
                                        }), (0, n.jsx)("p", {
                                            children: "“ Throw milk at them” Press the button to complete!"
                                        })]
                                    })]
                                }), (0, n.jsx)("button", {
                                    className: N().soundBtn,
                                    onClick: () => {
                                        i < 4 ? a(i + 1) : s()
                                    },
                                    children: 4 === i ? "OK\uD83D\uDE46‍♀️" : "NEXT\uD83D\uDC49"
                                })]
                            })
                        })
                    })
                },
                B = e => {
                    let {
                        menuOpen: t,
                        handleSoundToggle: s,
                        isSoundOn: i,
                        setIsWalletModalOpen: a
                    } = e, {
                        authenticated: c
                    } = (0, m.h)(), {
                        isMaintenance: l
                    } = r();
                    return (0, n.jsx)("div", {
                        className: "".concat(N().side_bar, " ").concat(t ? N().menuOpen : ""),
                        children: (0, n.jsxs)("div", {
                            className: N().sp_bg,
                            children: [(0, n.jsx)("span", {
                                className: N().logo,
                                children: (0, n.jsx)(h.E, {
                                    src: "/images/logo.png",
                                    alt: "",
                                    width: 207,
                                    height: 66,
                                    objectFit: "contain"
                                })
                            }), (0, n.jsxs)("ul", {
                                className: N().menu,
                                children: [!l && c && (0, n.jsx)("li", {
                                    children: (0, n.jsx)("a", {
                                        onClick: () => a(!0),
                                        children: "\uD83D\uDC5B Solana Wallet"
                                    })
                                }), (0, n.jsx)("li", {
                                    children: (0, n.jsx)("a", {
                                        href: "https://www.dextools.io/app/en/ether/pair-explorer/0xcomingsoon?t=1729775383853",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "\uD83D\uDCF1 Dextools"
                                    })
                                }), (0, n.jsx)("li", {
                                    children: (0, n.jsx)("a", {
                                        href: "https://x.com/dog6900eth",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "\uD83D\uDCB0 Official X"
                                    })
                                }), (0, n.jsx)("li", {
                                    children: (0, n.jsx)("a", {
                                        href: "https://t.me/dog6900portal",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "\uD83D\uDC65 Official TG"
                                    })
                                })]
                            }), (0, n.jsx)("div", {
                                className: N().bottom,
                                children: (0, n.jsx)("div", {
                                    className: N().sound_box,
                                    children: (0, n.jsxs)("div", {
                                        className: N().inner,
                                        children: [(0, n.jsx)("p", {
                                            className: N().title,
                                            children: "\uD83C\uDFB5 MUSIC? \uD83C\uDFB5"
                                        }), (0, n.jsxs)("div", {
                                            className: N().unit_flex,
                                            children: [(0, n.jsx)("button", {
                                                onClick: () => s(!0),
                                                disabled: i,
                                                className: "".concat(N().soundBtn, " ").concat(i ? N().active : ""),
                                                children: "ON"
                                            }), (0, n.jsx)("button", {
                                                onClick: () => s(!1),
                                                disabled: !i,
                                                className: "".concat(N().soundBtn, " ").concat(i ? "" : N().active),
                                                children: "OFF"
                                            })]
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                },
                U = () => {
                    let {
                        ctanAddress: e
                    } = r(), t = (0, A.p)(), s = async () => {
                        await navigator.clipboard.writeText(e), t({
                            title: "Copied to clipboard",
                            status: "success",
                            duration: 2e3,
                            isClosable: !0
                        })
                    };
                    return (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)("section", {
                            className: N().sec_contract,
                            children: [(0, n.jsx)("h2", {
                                className: N().title,
                                children: "Contract Address (on Ethereum)"
                            }), (0, n.jsxs)("div", {
                                className: N().copy,
                                children: [e, (0, n.jsx)("a", {
                                    onClick: () => s(),
                                    children: (0, n.jsx)(h.E, {
                                        src: "/images/w_icon7.svg",
                                        alt: "contract address",
                                        width: 26,
                                        height: 26,
                                        objectFit: "contain"
                                    })
                                })]
                            })]
                        })
                    })
                },
                I = () => (0, n.jsx)("section", {
                    className: N().sec_x,
                    children: (0, n.jsxs)("div", {
                        className: N().maintenance_box,
                        style: {
                            textAlign: "center",
                            cursor: "not-allowed"
                        },
                    
                    })
                }),
                R = () => (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)("section", {
                        className: N().sec_meme,
                        children: [(0, n.jsx)("div", {
                            className: "".concat(N().title_box, " ").concat(N().unit_flex, " ").concat(N().center),
                            children: (0, n.jsxs)(x.U, {
                                children: [(0, n.jsx)(c.xu, {
                                    children: (0, n.jsx)(x.U, {
                                        children: (0, n.jsx)(h.E, {
                                            src: "/images/icon1.gif",
                                            alt: "",
                                            width: 46,
                                            height: 46,
                                            objectFit: "contain"
                                        })
                                    })
                                }), (0, n.jsx)(c.xu, {
                                    children: (0, n.jsx)(g.g, {
                                        spacing: "0",
                                        children: (0, n.jsx)(u.x, {
                                            textAlign: "center",
                                            color: "#fff500",
                                            fontSize: "clamp(16px, 1.6vw, 24px)",
                                            children: "Memes from the DOG6900 ☆ Coin Community"
                                        })
                                    })
                                }), (0, n.jsx)(c.xu, {
                                    children: (0, n.jsx)(x.U, {
                                        children: (0, n.jsx)(h.E, {
                                            src: "/images/icon1.gif",
                                            alt: "",
                                            width: 46,
                                            height: 46,
                                            objectFit: "contain"
                                        })
                                    })
                                })]
                            })
                        }), (0, n.jsx)("ul", {
                            className: "".concat(N().meme_list, " ").concat(N().unit_flex, " ").concat(N().left),
                            children: [{
                                img: "/images/meme/GX5ZthcXsAAq6-u.jpg",
                                link: "https://x.com/kabosumama/status/1849085265446576457"
                            }, {
                                img: "/images/meme/GXKj19KbYAAEDLd.jpg",
                                link: "https://x.com/kabosumama/status/1849085265446576457"
                            }, {
                                img: "/images/meme/GX43FfSaUAEfBIz.jpg",
                                link: "https://x.com/kabosumama/status/1849085265446576457"
                            }, {
                                img: "/images/meme/GX6gp_jaUAEzLMC.jpg",
                                link: "https://x.com/kabosumama/status/1849085265446576457"
                            }, {
                                img: "/images/meme/GXQwV44bgAEk5TF.jpg",
                                link: "https://x.com/kabosumama/status/1849085265446576457"
                            }, {
                                img: "/images/meme/GXkVsE2awAAzf64.jpg",
                                link: "https://x.com/kabosumama/status/1849085265446576457"
                            }, {
                                img: "/images/meme/GYIfVyRbAAAOOyJ.jpg",
                                link: "https://x.com/kabosumama/status/1849085265446576457"
                            }, {
                                img: "/images/meme/GYOkHckakAMY_bY.jpg",
                                link: "https://x.com/kabosumama/status/1849085265446576457"
                            }, {
                                img: "/images/meme/GXVNlLHakAAAJ9v.jpg",
                                link: "https://x.com/kabosumama/status/1849085265446576457"
                            }, {
                                img: "/images/meme/GXlI-ZiaYAAO41-.jpg",
                                link: "https://x.com/kabosumama/status/1849085265446576457"
                            }].map((e, t) => (0, n.jsx)("li", {
                                children: (0, n.jsx)("a", {
                                    href: e.link,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: (0, n.jsx)(h.E, {
                                        src: e.img,
                                        alt: "",
                                        width: 232,
                                        height: 165,
                                        objectFit: "contain"
                                    })
                                })
                            }, t))
                        }), (0, n.jsx)(h.E, {
                            src: "/images/pallet.png",
                            alt: "",
                            width: 712,
                            height: 92,
                            objectFit: "contain"
                        })]
                    })
                }),
                G = () => (0, n.jsxs)("section", {
                    className: N().sec_site,
                    children: [(0, n.jsxs)("div", {
                        className: "".concat(N().title_box, " ").concat(N().unit_flex, " ").concat(N().center),
                        children: [(0, n.jsxs)("h2", {
                            className: N().title,
                            children: [(0, n.jsx)("span", {
                                className: N().marker,
                                children: "Make Memes "
                            }), (0, n.jsx)("span", {
                                className: N().red,
                                children: "On These Sites!"
                            })]
                        }), (0, n.jsx)(h.E, {
                            src: "/images/icon2.gif",
                            alt: "",
                            width: 66,
                            height: 66,
                            objectFit: "contain",
                            className: N().icon
                        })]
                    }), (0, n.jsx)("ul", {
                        className: "".concat(N().site_list, " ").concat(N().unit_flex, " ").concat(N().left),
                        children: [{
                            img: "/images/meme-site/kapwing.webp",
                            link: "https://www.kapwing.com/meme-maker"
                        }, {
                            img: "/images/meme-site/imageresizer.png",
                            link: "https://imageresizer.com/meme-generator"
                        }, {
                            img: "/images/meme-site/supermeme.png",
                            link: "https://www.supermeme.ai/"
                        }, {
                            img: "/images/meme-site/textstudio.png",
                            link: "https://www.textstudio.com/logo/meme-font-generator-934"
                        }, {
                            img: "/images/meme-site/vlipsy.png",
                            link: "https://vlipsy.com/"
                        }, {
                            img: "/images/meme-site/greenscreenmemes.jpg",
                            link: "https://greenscreenmemes.com/"
                        }].map((e, t) => (0, n.jsx)("li", {
                            children: (0, n.jsx)("a", {
                                href: e.link,
                                target: "_blank",
                                rel: "noreferrer",
                                children: (0, n.jsx)(h.E, {
                                    src: e.img,
                                    alt: "",
                                    width: 232,
                                    height: 165,
                                    objectFit: "contain"
                                })
                            })
                        }, t))
                    })]
                }),
                z = e => {
                    let {
                        setIsWelcomeModalOpen: t,
                        login: s
                    } = e;
                    return (0, n.jsxs)("section", {
                        className: N().sec_x,
                        children: [(0, n.jsx)("h2", {
                            className: "".concat(N().title, " ").concat(N().txt_center),
                            children: (0, n.jsxs)("span", {
                                className: N().marker,
                                children: ["Give Chiitan ", (0, n.jsx)("span", {
                                    className: N().red,
                                    children: "“Tenage☆Milk”"
                                }), " and", (0, n.jsx)("br", {}), " get ", (0, n.jsx)("span", {
                                    className: N().red,
                                    children: "Chiitan☆Coin!"
                                })]
                            })
                        }), (0, n.jsx)("button", {
                            className: N().unit_btn_02,
                            onClick: s,
                            children: "\uD83D\uDC5B CONNECT WALLET \uD83D\uDC5B"
                        }), (0, n.jsx)("div", {
                            className: "".concat(N().more_link, " ").concat(N().txt_center),
                            children: (0, n.jsx)("a", {
                                onClick: () => t(!0),
                                children: "\uD83D\uDC40❓ See description again"
                            })
                        }), (0, n.jsx)("span", {
                            className: N().icon1,
                            children: (0, n.jsx)(h.E, {
                                src: "/images/login_chiitan.png",
                                alt: "",
                                width: 182,
                                height: 233,
                                objectFit: "contain"
                            })
                        }), (0, n.jsx)("span", {
                            className: N().icon2,
                            children: (0, n.jsx)(h.E, {
                                src: "/images/login_chiitan.png",
                                alt: "",
                                width: 182,
                                height: 233,
                                objectFit: "contain"
                            })
                        })]
                    })
                },
                W = () => {
                    let [e, t] = l.useState(0), {
                        raydiumSite: s
                    } = r(), i = s => {
                        s.classList.contains(N().banner5_inimg_random) || t(e + 1)
                    }, a = () => {
                        let e = Math.floor(Math.random() * (window.innerWidth - 284)),
                            t = Math.floor(Math.random() * (window.innerHeight - 271));
                        return {
                            left: "".concat(e, "px"),
                            top: "".concat(t, "px")
                        }
                    };
                    return (0, n.jsxs)("div", {
                        className: N().banner_inner,
                        children: [(0, n.jsx)(j.r, {
                            href: s,
                            isExternal: !0,
                            children: (0, n.jsx)(h.E, {
                                src: "/images/Buy-CTAN.gif",
                                alt: "BUY $CTAN",
                                width: 250,
                                objectFit: "contain"
                            })
                        }), (0, n.jsx)(h.E, {
                            src: "/images/side_banner2.gif",
                            alt: "",
                            width: 250,
                            height: 500,
                            objectFit: "contain"
                        }), (0, n.jsx)(h.E, {
                            src: "/images/ten-age_milk.gif",
                            alt: "",
                            width: 250,
                            height: 165,
                            objectFit: "contain"
                        }), (0, n.jsx)(h.E, {
                            src: "/images/side_banner3.gif",
                            alt: "",
                            width: 250,
                            height: 180,
                            objectFit: "contain"
                        }), (0, n.jsx)(h.E, {
                            src: "/images/side_banner4.gif",
                            alt: "",
                            width: 250,
                            height: 500,
                            objectFit: "contain"
                        }), (0, n.jsxs)("div", {
                            onClick: e => i(e.target),
                            className: N().banner5_inner,
                            children: [(0, n.jsx)(h.E, {
                                src: "/images/side_banner5.png",
                                alt: "side_banner5",
                                width: 284,
                                height: 271,
                                objectFit: "contain"
                            }), [...Array(Math.min(e, 5))].map((e, t) => (0, n.jsx)(h.E, {
                                src: "/images/side_banner5_in.png",
                                alt: "side_banner5_in-".concat(t),
                                width: 284,
                                height: 271,
                                objectFit: "contain",
                                className: N().banner5_inimg
                            }, t)), [...Array(Math.max(0, e - 5))].map((e, t) => {
                                let s = a();
                                return (0, n.jsx)(h.E, {
                                    src: "/images/side_banner5_in.png",
                                    alt: "side_banner5_in-random-".concat(t + 5),
                                    width: 284,
                                    height: 271,
                                    objectFit: "contain",
                                    style: {
                                        position: "absolute",
                                        ...s
                                    },
                                    className: N().banner5_inimg_random
                                }, t + 5)
                            })]
                        }), (0, n.jsx)(h.E, {
                            src: "/images/side_banner6.gif",
                            alt: "",
                            width: 279,
                            height: 235,
                            objectFit: "contain"
                        })]
                    })
                },
                X = s(27766),
                P = s(59477),
                Z = s(89993),
                q = () => (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)("section", {
                        className: N().sec_token,
                        children: (0, n.jsxs)("div", {
                            className: N().sec_token_inner,
                            children: [(0, n.jsx)("h2", {
                                className: N().title,
                                children: (0, n.jsx)(h.E, {
                                    src: "/images/tokenomics.png",
                                    alt: "TOKENOMICS",
                                    width: 407,
                                    height: 44,
                                    objectFit: "contain"
                                })
                            }), (0, n.jsxs)("p", {
                                children: ["Total Supply: ", (0, n.jsx)("br", {}), (0, n.jsx)("span", {
                                    className: N().big_txt,
                                    children: "1B DOG6900"
                                }), (0, n.jsx)("br", {}), (0, n.jsx)("span", {
                                    className: N().more_txt,
                                    children: "(Buy/sell tax: 0%, Ownership: renounced)"
                                })]
                            }), (0, n.jsxs)("div", {
                                className: N().unit_flex,
                                children: [(0, n.jsx)("span", {
                                    className: N().red,
                                    children: "LP LOCK"
                                })]
                            }), (0, n.jsx)(h.E, {
                                src: "/images/graph.png",
                                alt: "",
                                width: 500,
                                height: 33,
                                objectFit: "contain"
                            })]
                        })
                    })
                }),
                H = s(93717),
                Y = s(89382),
                V = e => {
                    let {
                        urlList: t
                    } = e, [s, i] = (0, Y.Z)({
                        loop: !0
                    });
                    return (0, n.jsx)(n.Fragment, {
                        children: t.length > 0 && (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsxs)(c.xu, {
                                pos: "relative",
                                children: [(0, n.jsx)(c.xu, {
                                    onClick: () => {
                                        i && i.canScrollNext() && i.scrollNext()
                                    },
                                    pos: "absolute",
                                    left: "0",
                                    top: "calc(50% - 15px)",
                                    zIndex: "2",
                                    children: (0, n.jsx)(h.E, {
                                        src: "/images/arrow_l.png",
                                        alt: "",
                                        width: 35,
                                        height: 35,
                                        objectFit: "contain"
                                    })
                                }), (0, n.jsx)(c.xu, {
                                    overflow: "hidden",
                                    maxW: "100%",
                                    p: 0,
                                    ref: s,
                                    children: (0, n.jsx)(H.k, {
                                        h: "auto",
                                        py: [0, 5, 5],
                                        children: t.map((e, t) => (0, n.jsx)(H.k, {
                                            direction: {
                                                base: "column",
                                                md: "row"
                                            },
                                            justifyContent: "center",
                                            position: "relative",
                                            flex: "0 0 40%",
                                            mx: [1, 2, 3],
                                            children: (0, n.jsx)(y.Z, {
                                                url: e,
                                                maxH: "420px"
                                            })
                                        }, t))
                                    })
                                }), (0, n.jsx)(c.xu, {
                                    onClick: () => {
                                        i && i.canScrollPrev() && i.scrollPrev()
                                    },
                                    pos: "absolute",
                                    right: "0",
                                    top: "calc(50% - 15px)",
                                    zIndex: "2",
                                    children: (0, n.jsx)(h.E, {
                                        src: "/images/arrow_r.png",
                                        alt: "",
                                        width: 35,
                                        height: 35,
                                        objectFit: "contain"
                                    })
                                })]
                            })
                        })
                    })
                },
                J = e => {
                    let {
                        setIsWelcomeModalOpen: t,
                        linkTwitter: s
                    } = e;
                    return (0, n.jsxs)("section", {
                        className: N().sec_x,
                        children: [(0, n.jsx)("span", {
                            className: N().icon,
                            children: (0, n.jsx)(h.E, {
                                src: "/images/login_chiitan.png",
                                alt: "",
                                width: 182,
                                height: 233,
                                objectFit: "contain"
                            })
                        }), (0, n.jsxs)("div", {
                            className: N().login_box,
                            children: [(0, n.jsx)(h.E, {
                                src: "/images/login_frame.png",
                                alt: "",
                                width: 690,
                                height: 346,
                                objectFit: "contain",
                                className: N().pc_block
                            }), (0, n.jsx)(h.E, {
                                src: "/images/login_frame_sp.png",
                                alt: "",
                                width: 301,
                                height: 282,
                                objectFit: "contain",
                                className: N().sp_block
                            }), (0, n.jsx)("button", {
                                className: N().login_btn,
                                onClick: s,
                                children: "\uD83D\uDC49 Login&Tweet \uD83D\uDC48"
                            })]
                        }), (0, n.jsx)("div", {
                            className: "".concat(N().more_link, " ").concat(N().txt_right),
                            children: (0, n.jsx)("a", {
                                onClick: () => t(!0),
                                children: "\uD83D\uDC40❓ See description again"
                            })
                        })]
                    })
                },
                Q = e => {
                    let {
                        isPosted: t
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: t ? "".concat(N().postComplete, " ").concat(N().animateImage) : N().milk_img,
                        children: [(0, n.jsx)(h.E, {
                            src: "/images/side_banner7.gif",
                            alt: "",
                            width: 478,
                            height: 314,
                            objectFit: "contain"
                        }), t && (0, n.jsxs)("div", {
                            className: "".concat(N().milk_anime, " ").concat(N().unit_flex),
                            children: [(0, n.jsxs)("div", {
                                className: N().milk_left,
                                children: [(0, n.jsx)(h.E, {
                                    src: "/images/milk1.png",
                                    alt: "milk1",
                                    width: 106,
                                    height: 105,
                                    objectFit: "contain"
                                }), (0, n.jsx)(h.E, {
                                    src: "/images/milk2.png",
                                    alt: "milk2",
                                    width: 38,
                                    height: 37,
                                    objectFit: "contain"
                                }), (0, n.jsx)(h.E, {
                                    src: "/images/milk3.png",
                                    alt: "milk3",
                                    width: 75,
                                    height: 74,
                                    objectFit: "contain"
                                })]
                            }), (0, n.jsxs)("div", {
                                className: N().milk_right,
                                children: [(0, n.jsx)(h.E, {
                                    src: "/images/milk4.png",
                                    alt: "milk4",
                                    width: 39,
                                    height: 38,
                                    objectFit: "contain"
                                }), (0, n.jsx)(h.E, {
                                    src: "/images/milk5.png",
                                    alt: "milk5",
                                    width: 101,
                                    height: 100,
                                    objectFit: "contain"
                                }), (0, n.jsx)(h.E, {
                                    src: "/images/milk6.png",
                                    alt: "milk6",
                                    width: 50,
                                    height: 50,
                                    objectFit: "contain"
                                })]
                            })]
                        })]
                    })
                },
                K = e => {
                    let {
                        hasPosted: t,
                        setIsPostModalOpen: s,
                        myTweets: i
                    } = e, {
                        user: a,
                        unlinkTwitter: c
                    } = (0, m.h)();
                    return (0, n.jsxs)("section", {
                        className: N().sec_x,
                        children: [(0, n.jsx)("h2", {
                            className: "".concat(N().title, " ").concat(N().txt_center),
                            children: (0, n.jsxs)("span", {
                                className: N().marker,
                                children: ["Put the URL of your submission in the ", (0, n.jsx)("br", {}), (0, n.jsx)("span", {
                                    className: N().red,
                                    children: "“Tenage Milk Box”!"
                                })]
                            })
                        }), (0, n.jsx)(Q, {
                            isPosted: t
                        }), (0, n.jsx)("button", {
                            className: N().unit_btn_02,
                            onClick: () => s(!0),
                            children: "\uD83C\uDF7C Throw milk at them \uD83C\uDF7C"
                        }), (0, n.jsxs)("div", {
                            className: "".concat(N().x_link, " ").concat(N().unit_flex, " ").concat(N().center),
                            children: [(0, n.jsxs)("span", {
                                className: N().x_account,
                                children: [(0, n.jsx)(h.E, {
                                    src: "/images/icon2.png",
                                    alt: "",
                                    width: 16,
                                    height: 16,
                                    objectFit: "contain"
                                }), a && a.twitter && (0, n.jsxs)("span", {
                                    children: ["@", a.twitter.username]
                                })]
                            }), (0, n.jsx)("a", {
                                onClick: () => a && a.twitter && c(a.twitter.subject),
                                children: "X unlinkage"
                            })]
                        }), i.length > 0 && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)("h3", {
                                className: N().sub_title,
                                children: (0, n.jsx)(h.E, {
                                    src: "/images/thankyou.png",
                                    alt: "",
                                    width: 562,
                                    height: 48,
                                    objectFit: "contain"
                                })
                            }), (0, n.jsx)(V, {
                                urlList: i
                            })]
                        })]
                    })
                };
            let $ = "first-ctan-visit";
            var ee = () => {
                let {
                    ready: e,
                    authenticated: t,
                    user: s,
                    getAccessToken: i
                } = (0, m.h)(), {
                    isMaintenance: a,
                    raydiumSite: o
                } = r(), x = e => fetch(e).then(e => e.json()), [j, g] = (0, l.useState)([]), [u, p] = (0, l.useState)([]), [b, k] = (0, l.useState)(!0), [f, w] = (0, l.useState)(null), [C, v] = (0, l.useState)({
                    SOL: 0,
                    USDT: 0,
                    CTAN: 0
                }), [y, S] = (0, l.useState)(a), [A, M] = (0, l.useState)(!1), [X, P] = (0, l.useState)(null), [Z, H] = (0, l.useState)(!1), [Y, Q] = (0, l.useState)(!1), [ee, et] = (0, l.useState)(!1), [es, en] = (0, l.useState)(!1), {
                    login: ei
                } = (0, _.n)(), {
                    linkTwitter: ea
                } = (0, d.j6)(), {
                    linkWallet: ec
                } = (0, d.j6)({
                    onSuccess: async e => {
                        ej(e)
                    }
                }), {
                    getBalance: el
                } = E(), [eo, er] = (0, l.useState)(!1), eh = location.origin, em = async e => {
                    if (!eh || !t) return;
                    let n = await i();
                    n && s && s.twitter && await fetch("".concat(eh, "/api/post/save"), {
                        method: "post",
                        headers: {
                            Authorization: "Bearer ".concat(n),
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            url: e
                        })
                    }).then(() => {
                        Q(!1), en(!0), eg()
                    }).catch(() => {
                        alert("投稿に失敗しました")
                    })
                }, e_ = (0, l.useCallback)(() => {
                    a ? (H(!1), k(!1), S(!0)) : (localStorage.setItem($, o), H(!1), b && (k(!1), S(!0)))
                }, [b, a, o]), ed = (0, l.useCallback)(e => {
                    M(e), e ? X && X.play() : X && (X.pause(), X.currentTime = 0), S(!1)
                }, [X]), ex = (0, l.useCallback)(() => {
                    if (!X) {
                        let e = new Audio("./music/nyan_cat.mp3");
                        e.loop = !0, e.volume = .3, e.load(), e.onplay = () => {
                            ed(!0)
                        }, e.onpause = () => {
                            ed(!1)
                        }, P(e)
                    }
                }, [X, ed]);
                (0, l.useEffect)(() => {
                    es && setTimeout(() => {
                        en(!1)
                    }, 5e3)
                }, [es]), (0, l.useMemo)(() => {
                    g([]), eh && !a && x("".concat(eh, "/api/post/list")).then(e => {
                        g(e)
                    })
                }, [eh, a]);
                let ej = (0, l.useCallback)(e => e && 0 !== e.linkedAccounts.length && e.linkedAccounts.find(e => "wallet" === e.type && "solana" === e.chainType) || null, []),
                    eg = (0, l.useCallback)(async () => {
                        if (!eh || !s || !s.twitter) return;
                        let e = await i();
                        e && (p([]), p(await fetch("".concat(eh, "/api/post/self?page=1"), {
                            method: "GET",
                            headers: {
                                Authorization: "Bearer ".concat(e),
                                "Content-Type": "application/json"
                            }
                        }).then(e => e.json())))
                    }, [eh, i, s]),
                    eu = (0, l.useCallback)(async () => {
                        if (!eh || !f) return;
                        let e = await i();
                        e && v(await el(e, f))
                    }, [eh, f, i, el]);
                return (0, l.useMemo)(() => {
                    ex()
                }, [ex]), (0, l.useEffect)(() => {
                    s && s.twitter && eg()
                }, [eg, s]), (0, l.useEffect)(() => {
                    if (!s) return;
                    let e = ej(s);
                    e ? w(e) : ec()
                }, [s, ej, ec]), (0, l.useEffect)(() => {
                    f && eu()
                }, [f, eu]), (0, l.useEffect)(() => {
                    localStorage.getItem($) !== o && !1 === a ? H(!0) : e_()
                }, [e_, a, o]), (0, n.jsxs)("main", {
                    className: N().col2,
                    children: [(0, n.jsx)(L, {
                        isWelcomeModalOpen: Z,
                        closeModal: e_
                    }), (0, n.jsx)(D, {
                        isBgmModalOpen: y,
                        handleSoundToggle: ed
                    }), (0, n.jsx)(T, {
                        isPostModalOpen: Y,
                        handleSubmitPostModal: em,
                        closeModal: () => Q(!1)
                    }), (0, n.jsx)(O, {
                        isWalletModalOpen: ee,
                        closeWalletModal: () => et(!1),
                        currentWallet: f,
                        balances: C
                    }), (0, n.jsx)(B, {
                        menuOpen: eo,
                        handleSoundToggle: ed,
                        isSoundOn: A,
                        setIsWalletModalOpen: et
                    }), (0, n.jsxs)("div", {
                        className: N().contents,
                        children: [(0, n.jsx)(F, {
                            setIsWalletModalOpen: et,
                            toggleMenu: () => {
                                er(!eo)
                            },
                            login: ei,
                            currentWallet: f,
                            balances: C
                        }), (0, n.jsxs)("section", {
                            className: N().con_main,
                            children: [(0, n.jsxs)("h1", {
                                className: N().mv,
                                children: [(0, n.jsx)(h.E, {
                                    src: "/images/mv.gif",
                                    alt: "",
                                    width: 1046,
                                    height: 250,
                                    objectFit: "contain",
                                    className: N().pc_block
                                }), (0, n.jsx)(h.E, {
                                    src: "/images/mv_sp.gif",
                                    alt: "",
                                    width: 320,
                                    height: 207,
                                    objectFit: "contain",
                                    className: N().sp_block
                                })]
                            }), (0, n.jsxs)("div", {
                                className: N().con_col2,
                                children: [(0, n.jsxs)("div", {
                                    className: N().coin_inner,
                                    children: [(0, n.jsx)(c.xu, {
                                        pt: 2,
                                        pb: 8,
                                        children: (0, n.jsx)(h.E, {
                                            src: "/images/mv_text.png"
                                        })
                                    }), (0, n.jsx)(U, {}), (0, n.jsx)(q, {}), a ? (0, n.jsx)(I, {}) : (0, n.jsxs)(n.Fragment, {
                                        children: [!t && e && (0, n.jsx)(z, {
                                            setIsWelcomeModalOpen: H,
                                            login: ei
                                        }), t && s && !s.twitter && (0, n.jsx)(J, {
                                            setIsWelcomeModalOpen: H,
                                            linkTwitter: ea
                                        }), t && s && s.twitter && (0, n.jsx)(K, {
                                            hasPosted: es,
                                            setIsPostModalOpen: Q,
                                            myTweets: u
                                        }), j.length > 0 && (0, n.jsxs)("section", {
                                            className: N().sec_xlist,
                                            children: [(0, n.jsx)("h2", {
                                                className: N().title,
                                                children: (0, n.jsx)("span", {
                                                    className: N().marker,
                                                    children: "☆Milk tweets from everyone☆"
                                                })
                                            }), (0, n.jsx)(V, {
                                                urlList: j
                                            })]
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "".concat(N().banner_box, " ").concat(N().sp_block, " ").concat(N().banner_box1),
                                        children: [(0, n.jsx)(h.E, {
                                            src: "/images/side_banner1.gif",
                                            alt: "",
                                            width: 160,
                                            height: 116,
                                            objectFit: "contain"
                                        }), (0, n.jsx)(h.E, {
                                            src: "/images/side_banner2_sp.gif",
                                            alt: "",
                                            width: 160,
                                            height: 116,
                                            objectFit: "contain"
                                        })]
                                    }), (0, n.jsx)(R, {}), (0, n.jsxs)("div", {
                                        className: "".concat(N().banner_box, " ").concat(N().sp_block, " ").concat(N().banner_box2),
                                        children: [(0, n.jsx)(h.E, {
                                            src: "/images/side_banner3.gif",
                                            alt: "",
                                            width: 160,
                                            height: 116,
                                            objectFit: "contain"
                                        }), (0, n.jsx)(h.E, {
                                            src: "/images/side_banner4_sp.gif",
                                            alt: "",
                                            width: 160,
                                            height: 116,
                                            objectFit: "contain"
                                        })]
                                    }), (0, n.jsx)("section", {
                                        className: N().sec_mememade,
                                        children: (0, n.jsxs)("div", {
                                            className: N().unit_flex,
                                            children: [(0, n.jsxs)("figure", {
                                                className: N().img,
                                                children: [(0, n.jsx)(h.E, {
                                                    src: "/images/desktop.png",
                                                    alt: "",
                                                    width: 338,
                                                    height: 305,
                                                    objectFit: "contain"
                                                }), (0, n.jsx)("span", {
                                                    className: N().monitor,
                                                    children: (0, n.jsx)(h.E, {
                                                        src: "/images/side_banner1.gif",
                                                        alt: "",
                                                        width: 234,
                                                        height: 168,
                                                        objectFit: "contain"
                                                    })
                                                })]
                                            }), (0, n.jsxs)("div", {
                                                className: N().txt_box,
                                                children: [(0, n.jsx)("h2", {
                                                    className: N().title,
                                                    children: "Get DOG6900 Meme Assets Here!☆"
                                                }), (0, n.jsx)("div", {
                                                    className: N().block,
                                                    children: (0, n.jsx)("a", {
                                                        href: "https://drive.google.com/drive/folders/12OChAC1PFjCqS0ES5pDb5f-0muGwpx6j?usp=sharing",
                                                        className: N().click_btn,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: "\uD83D\uDC49 Download \uD83D\uDC48"
                                                    })
                                                }), (0, n.jsx)]
                                            })]
                                        })
                                    }), (0, n.jsx)(G, {}), (0, n.jsxs)("div", {
                                        className: "".concat(N().banner_box, " ").concat(N().sp_block, " ").concat(N().banner_box3),
                                        children: [(0, n.jsx)(h.E, {
                                            src: "/images/side_banner5_sp.png",
                                            alt: "",
                                            width: 139,
                                            height: 129,
                                            objectFit: "contain"
                                        }), (0, n.jsx)(h.E, {
                                            src: "/images/side_banner6.gif",
                                            alt: "",
                                            width: 126,
                                            height: 108,
                                            objectFit: "contain"
                                        })]
                                    })]
                                }), (0, n.jsx)(W, {})]
                            })]
                        })]
                    })]
                })
            };
            let et = () => {
                let {
                    metaTitle: e,
                    metaDescription: t,
                    siteOrigin: s
                } = r();
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(a(), {
                        children: [(0, n.jsx)("title", {
                            children: e
                        }), (0, n.jsx)("meta", {
                            name: "description",
                            content: t
                        }), (0, n.jsx)("meta", {
                            property: "og:title",
                            content: e
                        }), (0, n.jsx)("meta", {
                            property: "og:description",
                            content: t
                        }), (0, n.jsx)("meta", {
                            property: "og:url",
                            content: s
                        }),  (0, n.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }), (0, n.jsx)("meta", {
                            name: "twitter:card",
                            content: "summary_large_image"
                        })]
                    }), (0, n.jsx)(ee, {})]
                })
            };
            et.getLayout = e => (0, n.jsx)(o, {
                page: e
            });
            var es = et
        },
        36884: function(e) {
            e.exports = {
                col2: "home_col2__JFSVq",
                mv: "home_mv__RSohV",
                side_bar: "home_side_bar__xGepm",
                sp_bg: "home_sp_bg__DrS09",
                bottom: "home_bottom__SKJ2R",
                sound_box: "home_sound_box__CS4kA",
                inner: "home_inner___SgAh",
                title: "home_title__zsVL2",
                unit_flex: "home_unit_flex__vFuvn",
                active: "home_active__S0jaV",
                lung_box: "home_lung_box__fx2DS",
                logo: "home_logo__fwoF8",
                menu: "home_menu__D_mg9",
                menuOpen: "home_menuOpen__DpEQ_",
                contents: "home_contents__Pl0_r",
                con_head: "home_con_head__gDYbw",
                wrapper: "home_wrapper__1fR66",
                unit_btn_01: "home_unit_btn_01__xujXn",
                sp_block: "home_sp_block__R1ZSA",
                hamburger: "home_hamburger__r3QI2",
                login_box: "home_login_box__UcBPP",
                sol_box: "home_sol_box__QiJwe",
                fs12: "home_fs12__C2IRE",
                fs10: "home_fs10__98Eo7",
                yellow: "home_yellow__i0jsb",
                con_main: "home_con_main___hJfM",
                banner_box: "home_banner_box__YV_Oe",
                banner_box1: "home_banner_box1__cpceO",
                banner_box2: "home_banner_box2__T9_kV",
                banner_box3: "home_banner_box3__qKmQm",
                con_col2: "home_con_col2__vuwl_",
                coin_inner: "home_coin_inner__ZRa4Y",
                sec_x: "home_sec_x__dUeeJ",
                marker: "home_marker__5_TTX",
                red: "home_red__5RtJu",
                unit_btn_02: "home_unit_btn_02__53gns",
                icon1: "home_icon1__Gt1NF",
                icon2: "home_icon2__GzVdG",
                icon: "home_icon__LRheF",
                pc_block: "home_pc_block__Hmqrd",
                maintenance_box: "home_maintenance_box__R3FGK",
                login_btn: "home_login_btn__JqMFI",
                more_link: "home_more_link__qZmA_",
                milk_img: "home_milk_img__dUIz4",
                postComplete: "home_postComplete__X4tFx",
                hurueru: "home_hurueru__YW0SV",
                x_link: "home_x_link__t_xJb",
                x_account: "home_x_account__hwafv",
                sub_title: "home_sub_title___2GqQ",
                milk_anime: "home_milk_anime__kp6_U",
                fadeIn: "home_fadeIn__uLm0f",
                milk_left: "home_milk_left__b22Bv",
                milk_right: "home_milk_right__QhGhM",
                rotation: "home_rotation__exsl2",
                carousel_wrapper: "home_carousel_wrapper__D0B2G",
                sec_xlist: "home_sec_xlist__3R_TH",
                sec_meme: "home_sec_meme__u3YaU",
                title_box: "home_title_box__DHujc",
                meme_list: "home_meme_list__JQ5bv",
                sec_mememade: "home_sec_mememade__QrA2_",
                img: "home_img__VT9xF",
                monitor: "home_monitor__OAr1P",
                txt_box: "home_txt_box__t4Zag",
                block: "home_block___H34T",
                click_btn: "home_click_btn__sZBW0",
                sec_site: "home_sec_site__r1dnc",
                site_list: "home_site_list__4A3ic",
                sec_contract: "home_sec_contract__9jJm4",
                copy: "home_copy__ihYjf",
                sec_token: "home_sec_token__luUQF",
                sec_token_inner: "home_sec_token_inner__xcESN",
                big_txt: "home_big_txt__IQRza",
                more_txt: "home_more_txt__EhMtj",
                green: "home_green__NlW0h",
                blue: "home_blue__9ksGz",
                banner_inner: "home_banner_inner__shO8f",
                banner5_inner: "home_banner5_inner__BXqNU",
                banner5_inimg: "home_banner5_inimg__brraU",
                banner5_inimg_random: "home_banner5_inimg_random__mGhZu",
                modal: "home_modal__3ElKc",
                modalContent: "home_modalContent__El1Fh",
                soundBtn: "home_soundBtn__n3KWs",
                bgIcon: "home_bgIcon__tv1pd",
                step_modal: "home_step_modal__PycAz",
                number: "home_number__EdK6u",
                title1: "home_title1__p_uGZ",
                title2: "home_title2__32WAX",
                txt_box2: "home_txt_box2__5qyOO",
                txt_box3: "home_txt_box3__6N5fj",
                txt_box4: "home_txt_box4__ffqs3",
                post_modal: "home_post_modal__mqztU",
                modalContent2: "home_modalContent2__YTRZZ",
                close_btn: "home_close_btn__k9NIF",
                modalContentWallet: "home_modalContentWallet__7OjN5",
                address: "home_address__1RmRQ",
                mail: "home_mail__Zw1DU",
                btn_box: "home_btn_box__K8xjD",
                chakra_stack_wrap: "home_chakra_stack_wrap__4Lwes",
                chakra_stack: "home_chakra_stack__He4hu",
                chakra_stack_inner: "home_chakra_stack_inner__glmUp",
                logout: "home_logout__y_Y2W",
                unit_btn_03: "home_unit_btn_03__SZxUm",
                unit_btn_04: "home_unit_btn_04__q6MOe",
                left: "home_left__6NXtE",
                right: "home_right__IgIrz",
                center: "home_center__XHu39",
                txt_right: "home_txt_right__PgJob",
                txt_left: "home_txt_left__ttxRs",
                txt_center: "home_txt_center__vm9z_"
            }
        }
    },
    function(e) {
        e.O(0, [481, 718, 888, 774, 179], function() {
            return e(e.s = 48312)
        }), _N_E = e.O()
    }
]);