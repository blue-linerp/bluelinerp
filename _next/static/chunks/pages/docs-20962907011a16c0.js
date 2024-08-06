(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [172], {
        4156: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/docs", function() {
                return n(8919)
            }])
        },
        5132: function(e, t) {
            "use strict";
            t.Z = {
                src: "_next/static/media/keybind.07ef652f.png",
                height: 1080,
                width: 1920,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAMFBMVEUdBzo2F1c7EGVMFnZdLYGlla8oDUQpCkxKKGxRK3pnNIx1OJGrpbSGeJaJe5m+r8L/h1coAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALElEQVR4nAXBhwEAIAzDMKeDsvn/WySQu1uBYq05BDfz5T6gHnNEb1BmbmofEhMA0cLNe+kAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 5
            }
        },
        3050: function(e, t) {
            "use strict";
            t.Z = {
                src: "_next/static/media/rules.76f7d6b1.png",
                height: 1080,
                width: 1920,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJ1BMVEUfCjw0D1koDUdeL4RMF3Y7EmQsDVGWhaVEGmtQKXm4orxvNItwN46nstd0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nB3JyQ0AIAwDsKRp6cX+8yLhrwG6exhwdHfbAOZMJoFTUusfw4v2ABCKALhox4giAAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 5
            }
        },
        8919: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FAQBox: function() {
                    return d
                },
                __toc: function() {
                    return u
                },
                default: function() {
                    return h
                }
            });
            var i = n(5250),
                r = n(7147),
                a = n(7298),
                o = {
                    src: "_next/static/media/introduction.add55023.png",
                    height: 1080,
                    width: 1920,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAPFBMVEVKGHVIMV40DldGE286EWUaBjU4IlQpDUYhCT9BKl1iVnFTKHeljbKVfKZUNmsrClWIb517eX5saGt8d31vo1efAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nAXBhwEAIAjAsKoo4B7//2qCRUiiGR+9j+0Zr++e6kYJrTGDYkuEFPUDHDQBOX/iL/QAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 5
                },
                s = n(3050),
                l = n(5132),
                c = n(6498);

            function d(e) {
                let {
                    title: t,
                    children: n
                } = e, r = Object.assign({
                    details: "details",
                    summary: "summary",
                    strong: "strong",
                    div: "div"
                }, (0, a.a)());
                return (0, i.jsxs)(r.details, {
                    open: !0,
                    className: "last-of-type:mb-0 rounded-lg bg-neutral-50 dark:bg-neutral-800 p-2 mt-4",
                    children: [(0, i.jsx)(r.summary, {
                        children: (0, i.jsx)(r.strong, {
                            className: "text-lg",
                            children: t
                        })
                    }), (0, i.jsx)(r.div, {
                        className: "nx-p-2",
                        children: n
                    })]
                })
            }
            let u = [{
                depth: 2,
                value: "Quick Start",
                id: "quick-start"
            }, {
                depth: 2,
                value: "Server FAQ",
                id: "server-faq"
            }];

            function A(e) {
                let t = Object.assign({
                    h1: "h1",
                    img: "img",
                    p: "p",
                    h2: "h2"
                }, (0, a.a)(), e.components);
                return c.oy || p("Cards", !1), c.oy.Card || p("Cards.Card", !0), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(t.h1, {
                        children: "\uD83D\uDE80 Introduction"
                    }), "\n", (0, i.jsx)("br", {}), "\n", (0, i.jsx)("figure", {
                        className: "docsImages",
                        children: (0, i.jsx)(t.img, {
                            alt: "intro",
                            placeholder: "blur",
                            src: o
                        })
                    }), "\n", (0, i.jsx)(t.p, {
                        children: "Explore our Comprehensive Documentation, designed as your all-inclusive roadmap for beginning an unparalleled journey on our exceptional server."
                    }), "\n", (0, i.jsx)(t.p, {
                        children: "This guide is meticulously curated to provide you with all the essential information, tips, and best practices you'll need to make the most out of your experience."
                    }), "\n", (0, i.jsx)(t.h2, {
                        id: "quick-start",
                        children: "Quick Start"
                    }), "\n", "\n", (0, i.jsxs)(c.oy, {
                        num: 2,
                        children: [(0, i.jsx)(c.oy.Card, {
                            image: !0,
                            arrow: !0,
                            title: "The rules",
                            href: "/docs/rules",
                            children: (0, i.jsx)(i.Fragment, {
                                children: (0, i.jsx)(t.img, {
                                    alt: "rules",
                                    placeholder: "blur",
                                    src: s.Z
                                })
                            })
                        }), (0, i.jsx)(c.oy.Card, {
                            image: !0,
                            arrow: !0,
                            title: "Keybind",
                            href: "/docs/keybind",
                            children: (0, i.jsx)(i.Fragment, {
                                children: (0, i.jsx)(t.img, {
                                    alt: "keybind",
                                    placeholder: "blur",
                                    src: l.Z
                                })
                            })
                        })]
                    }), "\n", (0, i.jsx)(t.h2, {
                        id: "server-faq",
                        children: "Server FAQ"
                    }), "\n", (0, i.jsx)(t.p, {
                        children: "Discover Frequently Asked Questions: Your Go-To Resource for Common Inquiries"
                    }), "\n", "\n", (0, i.jsx)(d, {
                        title: "What is Role Play ?",
                        children: (0, i.jsx)(t.p, {
                            children: "Role-playing (RP) is a form of interactive storytelling where participants assume the roles of characters and act out scenarios, often within a predefined setting. Role-playing usually involves players taking on the personas of fictional characters and making decisions that affect the game's storyline or environment. This can range from simple decision-making in dialogue to complex interactions that involve combat, trading, and more. The objective is to create an immersive experience where players can escape into a different reality, living out scenarios that may be entirely different from their everyday lives."
                        })
                    }), "\n", (0, i.jsx)(d, {
                        title: "How to get started in the city ?",
                        children: (0, i.jsx)(t.p, {
                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        })
                    }), "\n", (0, i.jsx)(d, {
                        title: "How to login to server ?",
                        children: (0, i.jsx)(t.p, {
                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        })
                    }), "\n", (0, i.jsx)(d, {
                        title: "What scripts are available ?",
                        children: (0, i.jsx)(t.p, {
                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        })
                    }), "\n", (0, i.jsx)(d, {
                        title: "What mapping are in game ?",
                        children: (0, i.jsx)(t.p, {
                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        })
                    })]
                })
            }

            function p(e, t) {
                throw Error("Expected " + (t ? "component" : "object") + " `" + e + "` to be defined: you likely forgot to import, pass, or provide it.")
            }
            var h = (0, r.j)({
                MDXContent: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        {
                            wrapper: t
                        } = Object.assign({}, (0, a.a)(), e.components);
                    return t ? (0, i.jsx)(t, { ...e,
                        children: (0, i.jsx)(A, { ...e
                        })
                    }) : A(e)
                },
                pageOpts: {
                    filePath: "pages/docs/index.mdx",
                    route: "/docs",
                    title: "\uD83D\uDE80 Introduction",
                    headings: u
                },
                pageNextRoute: "/docs"
            })
        },
        7147: function(e, t, n) {
            "use strict";
            n.d(t, {
                j: function() {
                    return x
                }
            });
            var i, r = n(4619),
                a = n.n(r),
                o = n(4594),
                s = n(79);
            n(7298);
            var l = n(5250),
                c = (0, s.createContext)(!1),
                d = n(1403);

            function u({
                __nextra_pageMap: e,
                __nextra_dynamic_opts: t,
                ...n
            }) {
                let {
                    context: i,
                    Layout: r
                } = function() {
                    let e = globalThis[o.eZ],
                        {
                            route: t
                        } = (0, d.useRouter)();
                    (0, s.useState)({})[1];
                    let n = e.context[t];
                    if (!n) throw Error("No content found for the current route. This is a Nextra bug.");
                    return {
                        context: n,
                        Layout: e.Layout
                    }
                }(), {
                    Content: a,
                    ...u
                } = i;
                if (e && (u.pageOpts = { ...u.pageOpts,
                        pageMap: e
                    }), t) {
                    let {
                        headings: e,
                        title: n,
                        frontMatter: i
                    } = JSON.parse(t);
                    u.pageOpts = { ...u.pageOpts,
                        headings: e,
                        title: n,
                        frontMatter: i
                    }
                }
                return (0, l.jsx)(r, { ...u,
                    pageProps: n,
                    children: (0, l.jsx)(c.Provider, {
                        value: n,
                        children: (0, l.jsx)(a, { ...n
                        })
                    })
                })
            }
            var A = n(8658),
                p = n(9199),
                h = n(439);

            function m(e) {
                return h(e.replaceAll(/[-_]/g, " "))
            }

            function g(e) {
                return !!e && "object" == typeof e && "folder" === e.type
            }

            function f(e) {
                return Object.fromEntries(Object.entries(e).map(([e, t]) => {
                    if (g(t)) {
                        let n = e.replace("/", "");
                        return [n, t.title || m(n)]
                    }
                    return [e, t || m(e)]
                }))
            }

            function x({
                pageNextRoute: e,
                pageOpts: t,
                nextraLayout: n,
                themeConfig: r,
                MDXContent: s,
                hot: l,
                pageOptsChecksum: c,
                dynamicMetaModules: d = []
            }) {
                var h;
                "undefined" == typeof window && (globalThis.__nextra_resolvePageMap = async () => {
                    if (i) return i;
                    let e = JSON.parse(JSON.stringify(m.pageMap));
                    return await Promise.all(d.map(async ([t, {
                        metaObjectKeyPath: n,
                        metaParentKeyPath: i
                    }]) => {
                        let r = await t,
                            o = await r.default(),
                            s = a()(e, n);
                        s.data = o;
                        let l = a()(e, i);
                        ! function e(t, n, i = !0) {
                            if (i) {
                                e(t, {
                                    kind: "Meta",
                                    data: n.data,
                                    locale: n.locale
                                }, !1), n.data = f(n.data);
                                return
                            }
                            for (let [i, a] of Object.entries(n.data)) {
                                if (!g(a)) {
                                    var r;
                                    if ("*" === i) continue;
                                    t.children.push({
                                        kind: "MdxPage",
                                        ...n.locale && {
                                            locale: n.locale
                                        },
                                        name: i,
                                        route: (r = t.route, p(A.join(r, i.replace(/^index$/, ""))))
                                    });
                                    continue
                                }
                                let o = i.replace("/", ""),
                                    s = {
                                        kind: "Folder",
                                        name: o,
                                        route: `${t.route}/${o}`,
                                        children: [{
                                            kind: "Meta",
                                            ...n.locale && {
                                                locale: n.locale
                                            },
                                            data: f(a.items)
                                        }]
                                    };
                                t.children.push(s), e(s, {
                                    kind: "Meta",
                                    data: a.items,
                                    locale: n.locale
                                }, !1)
                            }
                        }(l, s)
                    })), i = e
                });
                let m = globalThis[h = o.eZ] || (globalThis[h] = Object.create(null));
                return t.pageMap ? (m.pageMap = t.pageMap, m.Layout = n) : (t = { ...t,
                    pageMap: m.pageMap,
                    flexsearch: m.flexsearch
                }, r = m.themeConfig), t = {
                    frontMatter: {},
                    ...t
                }, m.route = t.route, m.context || (m.context = Object.create(null)), m.context[e] = {
                    Content: s,
                    pageOpts: t,
                    themeConfig: r
                }, u
            }
        }
    },
    function(e) {
        e.O(0, [220, 774, 888, 179], function() {
            return e(e.s = 4156)
        }), _N_E = e.O()
    }
]);