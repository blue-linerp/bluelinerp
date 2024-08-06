(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [736], {
        6780: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/groups", function() {
                return s(8233)
            }])
        },
        4056: function(e, t, s) {
            "use strict";
            var n = s(5250);
            s(79);
            var r = s(3159),
                a = s.n(r);
            t.Z = e => {
                let {
                    customClassName: t
                } = e;
                return (0, n.jsxs)("svg", {
                    className: "".concat(a().BackShapesHead),
                    viewBox: "0 0 800 450",
                    children: [(0, n.jsx)("defs", {
                        children: (0, n.jsx)("filter", {
                            id: "bbblurry-filter",
                            x: "-100%",
                            y: "-100%",
                            width: "400%",
                            height: "400%",
                            filterUnits: "objectBoundingBox",
                            primitiveUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: (0, n.jsx)("feGaussianBlur", {
                                stdDeviation: "78",
                                x: "0%",
                                y: "0%",
                                width: "100%",
                                height: "100%",
                                in: "SourceGraphic",
                                edgeMode: "none",
                                result: "blur"
                            })
                        })
                    }), (0, n.jsxs)("g", {
                        filter: "url(#bbblurry-filter)",
                        children: [(0, n.jsx)("ellipse", {
                            rx: "70.5",
                            ry: "64",
                            cx: "355.37",
                            cy: "150.67",
                            fill: "hsla(167, 72%, 60%, 1.00)"
                        }), (0, n.jsx)("ellipse", {
                            rx: "70.5",
                            ry: "64",
                            cx: "242.83",
                            cy: "74.78",
                            fill: "hsla(212, 72%, 59%, 1.00)"
                        }), (0, n.jsx)("ellipse", {
                            rx: "70.5",
                            ry: "64",
                            cx: "559.75",
                            cy: "12.75",
                            fill: "hsla(290, 87%, 47%, 1.00)"
                        }), (0, n.jsx)("ellipse", {
                            rx: "70.5",
                            ry: "64",
                            cx: "527.67",
                            cy: "142.68",
                            fill: "hsla(272, 99%, 54%, 1.00)"
                        }), (0, n.jsx)("ellipse", {
                            rx: "70.5",
                            ry: "64",
                            cx: "293.55",
                            cy: "22.68",
                            fill: "hsla(55, 94%, 54%, 1.00)"
                        }), (0, n.jsx)("ellipse", {
                            rx: "70.5",
                            ry: "64",
                            cx: "277.24",
                            cy: "123.70",
                            fill: "hsla(89, 73%, 48%, 1.00)"
                        }), (0, n.jsx)("ellipse", {
                            rx: "70.5",
                            ry: "64",
                            cx: "427.43",
                            cy: "145.35",
                            fill: "hsl(325, 100%, 63%)"
                        })]
                    })]
                })
            }
        },
        510: function(e, t, s) {
            "use strict";
            var n = s(5250);
            s(79);
            var r = s(3617),
                a = s.n(r);
            t.Z = e => {
                let {
                    name: t,
                    role: s,
                    bannerImg: r,
                    avatarImg: l,
                    btnURL: o,
                    btnTXT: i
                } = e;
                return (0, n.jsxs)("div", {
                    className: "".concat(a().profileCard, " rounded-[20px] w-[275px] p-3"),
                    children: [(0, n.jsxs)("div", {
                        className: "relative flex h-32 w-full justify-center rounded-xl bg-cover",
                        children: [(0, n.jsx)("img", {
                            src: r,
                            className: "".concat(a().bannerImg, ' absolute flex h-22 w-full justify-center rounded-xl bg-cover" alt="bannerImg')
                        }), (0, n.jsx)("div", {
                            className: "".concat(a().profileImg, " absolute -bottom-3 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px]"),
                            children: (0, n.jsx)("img", {
                                className: "h-full w-full rounded-full",
                                src: l,
                                alt: ""
                            })
                        })]
                    }), (0, n.jsxs)("div", {
                        className: "mt-6 flex flex-col items-center",
                        children: [(0, n.jsx)("h4", {
                            className: "text-xl font-bold text-navy-700 dark:text-white",
                            children: t
                        }), (0, n.jsx)("p", {
                            className: "text-sm font-normal text-gray-600",
                            children: s
                        })]
                    }), (0, n.jsx)("div", {
                        className: "mt-6 flex gap-14 md:!gap-14",
                        children: (0, n.jsx)("a", {
                            className: "transition ease-in-out delay-100 w-full text-center inline-block rounded-xl border border-purple-600 py-3 text-sm font-medium text-purple-600 hover:bg-purple-600 hover:text-white focus:outline-none focus:ring active:bg-purple-500",
                            href: o,
                            children: i
                        })
                    })]
                })
            }
        },
        8233: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                __toc: function() {
                    return h
                },
                default: function() {
                    return f
                }
            });
            var n = s(5250),
                r = s(7147),
                a = s(7298);
            s(829), s(9556), s(79), s(510);
            var l = s(2626),
                o = s.n(l),
                i = s(8320),
                c = s(8929),
                x = s.n(c),
                g = e => {
                    let {
                        name: t,
                        role: s,
                        bannerImg: r,
                        btnURL: a,
                        btnTXT: l
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: "".concat(x().profileCard, " rounded-[20px] w-[275px] p-3"),
                        children: [(0, n.jsx)("div", {
                            className: "relative flex h-32 w-full justify-center rounded-xl bg-cover",
                            children: (0, n.jsx)("img", {
                                src: r,
                                className: "".concat(x().bannerImg, ' absolute flex h-22 w-full justify-center rounded-xl bg-cover" alt="bannerImg')
                            })
                        }), (0, n.jsxs)("div", {
                            className: "mt-6 flex flex-col items-center",
                            children: [(0, n.jsx)("h4", {
                                className: "text-xl font-bold text-navy-700 dark:text-white",
                                children: t
                            }), (0, n.jsx)("p", {
                                className: "text-sm font-normal text-gray-600",
                                children: s
                            })]
                        }), (0, n.jsx)("div", {
                            className: "mt-6 flex gap-14 md:!gap-14",
                            children: (0, n.jsx)("a", {
                                className: "transition ease-in-out delay-100 w-full text-center inline-block rounded-xl border border-purple-600 py-3 text-sm font-medium text-purple-600 hover:bg-purple-600 hover:text-white focus:outline-none focus:ring active:bg-purple-500",
                                href: a,
                                children: l
                            })
                        })]
                    })
                },
                d = s(4056),
                p = s(5032),
                u = s.n(p),
                m = e => {
                    let {
                        customClassName: t
                    } = e;
                    return (0, n.jsxs)("svg", {
                        className: "".concat(u().BackShapesFoot, " ").concat(t),
                        viewBox: "0 0 800 450",
                        children: [(0, n.jsx)("defs", {
                            children: (0, n.jsx)("filter", {
                                id: "bbblurry-filter",
                                x: "-100%",
                                y: "-100%",
                                width: "400%",
                                height: "400%",
                                filterUnits: "objectBoundingBox",
                                primitiveUnits: "userSpaceOnUse",
                                colorInterpolationFilters: "sRGB",
                                children: (0, n.jsx)("feGaussianBlur", {
                                    stdDeviation: "78",
                                    x: "0%",
                                    y: "0%",
                                    width: "100%",
                                    height: "100%",
                                    in: "SourceGraphic",
                                    edgeMode: "none",
                                    result: "blur"
                                })
                            })
                        }), (0, n.jsxs)("g", {
                            filter: "url(#bbblurry-filter)",
                            children: [(0, n.jsx)("ellipse", {
                                rx: "70.5",
                                ry: "64",
                                cx: "355.37",
                                cy: "150.67",
                                fill: "hsla(167, 72%, 60%, 1.00)"
                            }), (0, n.jsx)("ellipse", {
                                rx: "70.5",
                                ry: "64",
                                cx: "242.83",
                                cy: "74.78",
                                fill: "hsla(212, 72%, 59%, 1.00)"
                            }), (0, n.jsx)("ellipse", {
                                rx: "70.5",
                                ry: "64",
                                cx: "559.75",
                                cy: "12.75",
                                fill: "hsla(290, 87%, 47%, 1.00)"
                            }), (0, n.jsx)("ellipse", {
                                rx: "70.5",
                                ry: "64",
                                cx: "527.67",
                                cy: "142.68",
                                fill: "hsla(272, 99%, 54%, 1.00)"
                            }), (0, n.jsx)("ellipse", {
                                rx: "70.5",
                                ry: "64",
                                cx: "293.55",
                                cy: "22.68",
                                fill: "hsla(55, 94%, 54%, 1.00)"
                            }), (0, n.jsx)("ellipse", {
                                rx: "70.5",
                                ry: "64",
                                cx: "277.24",
                                cy: "123.70",
                                fill: "hsla(89, 73%, 48%, 1.00)"
                            }), (0, n.jsx)("ellipse", {
                                rx: "70.5",
                                ry: "64",
                                cx: "427.43",
                                cy: "145.35",
                                fill: "hsl(325, 100%, 63%)"
                            })]
                        })]
                    })
                };
            let h = [];

            function b(e) {
                let t = Object.assign({
                    h1: "h1",
                    p: "p",
                    hr: "hr",
                    h2: "h2"
                }, (0, a.a)(), e.components);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(t.h1, {
                        className: "text-33ds mb-4 mt-12 text-center text-[3.5rem] font-bold tracking-tight",
                        children: "\uD83C\uDFF4‍☠️ GROUPS"
                    }), "\n", (0, n.jsx)(t.p, {
                        className: "mb-8 max-w-3xl m-auto p-4 text-center text-lg text-gray-500 dark:text-gray-400",
                        children: "Delve into our extensive directory and discover every groups in the city."
                    }), "\n", (0, n.jsx)(t.hr, {
                        className: "mb-4 mt-4 dark:nx-border-neutral-800 max-w-[50vw] mx-auto"
                    }), "\n", (0, n.jsx)(t.h2, {
                        className: "text-center text-[2.5rem] font-bold tracking-tight gradientText",
                        children: " Los Santos"
                    }), "\n", (0, n.jsx)(t.p, {
                        className: "mb-8 max-w-3xl m-auto text-center text-lg text-gray-500 dark:text-gray-400",
                        children: "Los Santos Groups"
                    }), "\n", (0, n.jsxs)("div", {
                        className: o().cardMagicContainer,
                        children: [(0, n.jsx)(g, {
                            name: "Triads",
                            role: "Los Santos Gang",
                            bannerImg: "/IconsLore/groups/gang-triads.jpg",
                            btnURL: "https://discord.gg/5AMJ3GEgZ8",
                            btnTXT: "JOIN"
                        }), (0, n.jsx)(g, {
                            name: "Ballas",
                            role: "Los Santos Gang",
                            bannerImg: "/IconsLore/groups/gang-ballas.jpg",
                            btnURL: "https://discord.gg/5AMJ3GEgZ8",
                            btnTXT: "JOIN"
                        }), (0, n.jsx)(g, {
                            name: "Families",
                            role: "Los Santos Gang",
                            bannerImg: "/IconsLore/groups/gang-families.jpg",
                            btnURL: "https://discord.gg/5AMJ3GEgZ8",
                            btnTXT: "JOIN"
                        }), (0, n.jsx)(g, {
                            name: "Marabunta",
                            role: "Los Santos Gang",
                            bannerImg: "/IconsLore/groups/gang-marabunta.jpg",
                            btnURL: "https://discord.gg/5AMJ3GEgZ8",
                            btnTXT: "JOIN"
                        }), (0, n.jsx)(g, {
                            name: "Los Vagos",
                            role: "Los Santos Gang",
                            bannerImg: "/IconsLore/groups/gang-vagos.jpg",
                            btnURL: "https://discord.gg/5AMJ3GEgZ8",
                            btnTXT: "JOIN"
                        }), (0, n.jsx)(g, {
                            name: "Los Aztecas",
                            role: "Los Santos Gang",
                            bannerImg: "/IconsLore/groups/gang-aztecas.jpg",
                            btnURL: "https://discord.gg/5AMJ3GEgZ8",
                            btnTXT: "JOIN"
                        }), (0, n.jsx)(g, {
                            name: "Fooliganz",
                            role: "Los Santos Gang",
                            bannerImg: "/IconsLore/groups/gang-fooliganz.jpg",
                            btnURL: "https://discord.gg/5AMJ3GEgZ8",
                            btnTXT: "JOIN"
                        })]
                    }), "\n", (0, n.jsx)(t.hr, {
                        className: "mb-4 mt-4 dark:nx-border-neutral-800 max-w-[50vw] mx-auto"
                    }), "\n", (0, n.jsx)(t.h2, {
                        className: "text-center text-[2.5rem] font-bold tracking-tight gradientText",
                        children: " Blaine County"
                    }), "\n", (0, n.jsx)(t.p, {
                        className: "mb-8 max-w-3xl m-auto text-center text-lg text-gray-500 dark:text-gray-400",
                        children: "Blaine County Groups"
                    }), "\n", (0, n.jsxs)("div", {
                        className: o().cardMagicContainer,
                        children: [(0, n.jsx)(g, {
                            name: "The Altruist",
                            role: "Blaine County Gang",
                            bannerImg: "/IconsLore/groups/gang-altruist.jpg",
                            btnURL: "https://discord.gg/5AMJ3GEgZ8",
                            btnTXT: "JOIN"
                        }), (0, n.jsx)(g, {
                            name: "O'Neil",
                            role: "Blaine County Gang",
                            bannerImg: "/IconsLore/groups/gang-oneil.jpg",
                            btnURL: "https://discord.gg/5AMJ3GEgZ8",
                            btnTXT: "JOIN"
                        }), (0, n.jsx)(g, {
                            name: "Hippies",
                            role: "Blaine County Gang",
                            bannerImg: "/IconsLore/groups/gang-hippies.jpg",
                            btnURL: "https://discord.gg/5AMJ3GEgZ8",
                            btnTXT: "JOIN"
                        })]
                    }), "\n", (0, n.jsx)(t.hr, {
                        className: "mb-4 mt-4 dark:nx-border-neutral-800 max-w-[50vw] mx-auto"
                    }), "\n", (0, n.jsx)(t.h2, {
                        className: "text-center text-[2.5rem] font-bold tracking-tight gradientText",
                        children: "San Andreas MC"
                    }), "\n", (0, n.jsx)(t.p, {
                        className: "mb-8 max-w-3xl m-auto text-center text-lg text-gray-500 dark:text-gray-400",
                        children: "The Motors Club of San Andreas"
                    }), "\n", (0, n.jsxs)("div", {
                        className: o().cardMagicContainer,
                        children: [(0, n.jsx)(g, {
                            name: "The LOST MC",
                            role: "Motors Club",
                            bannerImg: "/IconsLore/groups/mc-lost.jpg",
                            btnURL: "https://discord.gg/5AMJ3GEgZ8",
                            btnTXT: "JOIN"
                        }), (0, n.jsx)(g, {
                            name: "Mayans MC",
                            role: "Motors Club",
                            bannerImg: "/IconsLore/groups/mc-mayans.jpg",
                            btnURL: "https://discord.gg/5AMJ3GEgZ8",
                            btnTXT: "JOIN"
                        }), (0, n.jsx)(g, {
                            name: "SOA MC",
                            role: "Motors Club",
                            bannerImg: "/IconsLore/groups/mc-soa.jpg",
                            btnURL: "https://discord.gg/5AMJ3GEgZ8",
                            btnTXT: "JOIN"
                        })]
                    }), "\n", (0, n.jsx)(d.Z, {
                        customClassName: "BackShapesHead"
                    }), "\n", (0, n.jsx)(m, {
                        customClassName: "BackShapesFoot"
                    }), "\n", (0, n.jsx)(i.Z, {})]
                })
            }
            var f = (0, r.j)({
                MDXContent: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        {
                            wrapper: t
                        } = Object.assign({}, (0, a.a)(), e.components);
                    return t ? (0, n.jsx)(t, { ...e,
                        children: (0, n.jsx)(b, { ...e
                        })
                    }) : b(e)
                },
                pageOpts: {
                    filePath: "pages/groups.mdx",
                    route: "/groups",
                    title: "Groups",
                    headings: h
                },
                pageNextRoute: "/groups"
            })
        },
        5032: function(e) {
            e.exports = {
                BackShapesFoot: "style_BackShapesFoot__5Q7bo"
            }
        },
        3159: function(e) {
            e.exports = {
                BackShapesHead: "style_BackShapesHead__UGpKn"
            }
        },
        3617: function(e) {
            e.exports = {
                profileCard: "style_profileCard__C_wUO",
                profileImg: "style_profileImg__zF3ii"
            }
        },
        8929: function(e) {
            e.exports = {
                profileCard: "style_profileCard__742Ed",
                profileImg: "style_profileImg__52Wmr"
            }
        },
        2626: function(e) {
            e.exports = {
                file: "index_file__Rm6gb",
                active: "index_active__ztTy1",
                comparison: "index_comparison__QqYCf",
                optimization: "index_optimization__H9vSV",
                cta: "index_cta__d4aLZ",
                cardMagicContainer: "index_cardMagicContainer__Ikn4t"
            }
        }
    },
    function(e) {
        e.O(0, [220, 801, 774, 888, 179], function() {
            return e(e.s = 6780)
        }), _N_E = e.O()
    }
]);