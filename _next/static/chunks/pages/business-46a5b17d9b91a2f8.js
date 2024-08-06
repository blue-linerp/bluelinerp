(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [145], {
        2436: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/business", function() {
                return n(7238)
            }])
        },
        4056: function(e, t, n) {
            "use strict";
            var s = n(5250);
            n(79);
            var r = n(3159),
                o = n.n(r);
            t.Z = e => {
                let {
                    customClassName: t
                } = e;
                return (0, s.jsxs)("svg", {
                    className: "".concat(o().BackShapesHead),
                    viewBox: "0 0 800 450",
                    children: [(0, s.jsx)("defs", {
                        children: (0, s.jsx)("filter", {
                            id: "bbblurry-filter",
                            x: "-100%",
                            y: "-100%",
                            width: "400%",
                            height: "400%",
                            filterUnits: "objectBoundingBox",
                            primitiveUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: (0, s.jsx)("feGaussianBlur", {
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
                    }), (0, s.jsxs)("g", {
                        filter: "url(#bbblurry-filter)",
                        children: [(0, s.jsx)("ellipse", {
                            rx: "70.5",
                            ry: "64",
                            cx: "355.37",
                            cy: "150.67",
                            fill: "hsla(167, 72%, 60%, 1.00)"
                        }), (0, s.jsx)("ellipse", {
                            rx: "70.5",
                            ry: "64",
                            cx: "242.83",
                            cy: "74.78",
                            fill: "hsla(212, 72%, 59%, 1.00)"
                        }), (0, s.jsx)("ellipse", {
                            rx: "70.5",
                            ry: "64",
                            cx: "559.75",
                            cy: "12.75",
                            fill: "hsla(290, 87%, 47%, 1.00)"
                        }), (0, s.jsx)("ellipse", {
                            rx: "70.5",
                            ry: "64",
                            cx: "527.67",
                            cy: "142.68",
                            fill: "hsla(272, 99%, 54%, 1.00)"
                        }), (0, s.jsx)("ellipse", {
                            rx: "70.5",
                            ry: "64",
                            cx: "293.55",
                            cy: "22.68",
                            fill: "hsla(55, 94%, 54%, 1.00)"
                        }), (0, s.jsx)("ellipse", {
                            rx: "70.5",
                            ry: "64",
                            cx: "277.24",
                            cy: "123.70",
                            fill: "hsla(89, 73%, 48%, 1.00)"
                        }), (0, s.jsx)("ellipse", {
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
        7238: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __toc: function() {
                    return T
                },
                default: function() {
                    return m
                }
            });
            var s = n(5250),
                r = n(7147),
                o = n(7298),
                a = n(79),
                i = n(8320),
                l = n(3229),
                c = n.n(l);
            let g = e => {
                let {
                    name: t,
                    role: n,
                    avatarImg: r,
                    btnURL: o,
                    btnTXT: a
                } = e;
                return (0, s.jsxs)("div", {
                    className: "".concat(c().profileCard, " rounded-[20px] w-[275px] p-3"),
                    children: [(0, s.jsx)("div", {
                        className: "relative flex h-32 w-full justify-center rounded-xl bg-cover",
                        children: (0, s.jsx)("div", {
                            className: "".concat(c().profileImg, " flex h-[130px] w-[130px] items-center justify-center mt-2"),
                            children: (0, s.jsx)("img", {
                                className: "h-full w-full rounded-full",
                                src: r,
                                alt: ""
                            })
                        })
                    }), (0, s.jsxs)("div", {
                        className: "mt-6 flex flex-col items-center",
                        children: [(0, s.jsx)("h4", {
                            className: "text-xl font-bold text-navy-700 dark:text-white",
                            children: t
                        }), (0, s.jsx)("p", {
                            className: "text-sm font-normal text-gray-600",
                            children: n
                        })]
                    }), (0, s.jsx)("div", {
                        className: "mt-6 flex gap-14 md:!gap-14",
                        children: (0, s.jsx)("a", {
                            className: "transition ease-in-out delay-100 w-full text-center inline-block rounded-xl border border-purple-600 py-3 text-sm font-medium text-purple-600 hover:bg-purple-600 hover:text-white focus:outline-none focus:ring active:bg-purple-500",
                            href: o,
                            children: a
                        })
                    })]
                })
            };
            var p = e => {
                let {
                    cards: t
                } = e, [n, r] = (0, a.useState)(null), o = n ? t.filter(e => e.role === n) : t;
                return (0, s.jsxs)("div", {
                    className: "mb-16",
                    children: [(0, s.jsx)("hr", {
                        className: "mb-8 dark:nx-border-neutral-800 max-w-xl mx-auto"
                    }), (0, s.jsxs)("div", {
                        className: "".concat(c().scrollContainer, " flex md:justify-center gap-4 mb-8"),
                        children: [(0, s.jsx)("button", {
                            className: "transition ease-in-out delay-100 pt-2 pb-2 pr-4 pl-4 text-center inline-block rounded-xl border border-purple-600  text-sm font-medium text-purple-600 hover:bg-purple-600 hover:text-white focus:outline-none focus:ring active:bg-purple-500",
                            onClick: () => r(null),
                            children: "⭐ ALL"
                        }), (0, s.jsx)("button", {
                            className: "transition ease-in-out delay-100 pt-2 pb-2 pr-4 pl-4 text-center inline-block rounded-xl border border-purple-600  text-sm font-medium text-purple-600 hover:bg-purple-600 hover:text-white focus:outline-none focus:ring active:bg-purple-500",
                            onClick: () => r("ENTERTAINMENTS"),
                            children: "\uD83C\uDF89 ENTERTAINMENTS"
                        }), (0, s.jsx)("button", {
                            className: "transition ease-in-out delay-100 pt-2 pb-2 pr-4 pl-4  text-center inline-block rounded-xl border border-purple-600  text-sm font-medium text-purple-600 hover:bg-purple-600 hover:text-white focus:outline-none focus:ring active:bg-purple-500",
                            onClick: () => r("SERVICES"),
                            children: "\uD83E\uDD1D SERVICES"
                        }), (0, s.jsx)("button", {
                            className: "transition ease-in-out delay-100 pt-2 pb-2 pr-4 pl-4  text-center inline-block rounded-xl border border-purple-600  text-sm font-medium text-purple-600 hover:bg-purple-600 hover:text-white focus:outline-none focus:ring active:bg-purple-500",
                            onClick: () => r("SHOPPING"),
                            children: "\uD83C\uDFEC SHOPPING"
                        }), (0, s.jsx)("button", {
                            className: "transition ease-in-out delay-100 pt-2 pb-2 pr-4 pl-4  text-center inline-block rounded-xl border border-purple-600  text-sm font-medium text-purple-600 hover:bg-purple-600 hover:text-white focus:outline-none focus:ring active:bg-purple-500",
                            onClick: () => r("FACTORIES"),
                            children: "\uD83C\uDFED FACTORIES"
                        }), (0, s.jsx)("button", {
                            className: "transition ease-in-out delay-100 pt-2 pb-2 pr-4 pl-4  text-center inline-block rounded-xl border border-purple-600  text-sm font-medium text-purple-600 hover:bg-purple-600 hover:text-white focus:outline-none focus:ring active:bg-purple-500",
                            onClick: () => r("SPORTS"),
                            children: "\uD83C\uDFC3‍♀️ SPORTS"
                        }), (0, s.jsx)("button", {
                            className: "transition ease-in-out delay-100 pt-2 pb-2 pr-4 pl-4  text-center inline-block rounded-xl border border-purple-600  text-sm font-medium text-purple-600 hover:bg-purple-600 hover:text-white focus:outline-none focus:ring active:bg-purple-500",
                            onClick: () => r("INDUSTRIES"),
                            children: "\uD83C\uDFE2 INDUSTRIES"
                        })]
                    }), (0, s.jsx)("hr", {
                        className: "mb-4 mt-4 dark:nx-border-neutral-800 max-w-xl mx-auto"
                    }), (0, s.jsx)("div", {
                        className: "flex flex-wrap justify-center mx-auto nx-max-w-[90rem]",
                        children: o.map((e, t) => (0, s.jsx)("div", {
                            className: "m-4",
                            children: (0, s.jsx)(g, { ...e
                            })
                        }, t))
                    })]
                })
            };
            let u = [{
                name: "Airship",
                role: "ENTERTAINMENTS",
                avatarImg: "/IconsLore/business/airship.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Air Tours",
                role: "ENTERTAINMENTS",
                avatarImg: "/IconsLore/business/airtours.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Arcade",
                role: "ENTERTAINMENTS",
                avatarImg: "/IconsLore/business/arcade.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Bowling",
                role: "ENTERTAINMENTS",
                avatarImg: "/IconsLore/business/bowling.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Casino",
                role: "ENTERTAINMENTS",
                avatarImg: "/IconsLore/business/casino.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Cinema",
                role: "ENTERTAINMENTS",
                avatarImg: "/IconsLore/business/cinema.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Comedy Club",
                role: "ENTERTAINMENTS",
                avatarImg: "/IconsLore/business/comedy.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Karting",
                role: "ENTERTAINMENTS",
                avatarImg: "/IconsLore/business/karting.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Country Club",
                role: "ENTERTAINMENTS",
                avatarImg: "/IconsLore/business/countryclub.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Laser Game",
                role: "ENTERTAINMENTS",
                avatarImg: "/IconsLore/business/lasergame.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Lottery",
                role: "ENTERTAINMENTS",
                avatarImg: "/IconsLore/business/lottery.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Night Clubs",
                role: "ENTERTAINMENTS",
                avatarImg: "/IconsLore/business/nightclub.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Poker",
                role: "ENTERTAINMENTS",
                avatarImg: "/IconsLore/business/poker.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Restaurant",
                role: "ENTERTAINMENTS",
                avatarImg: "/IconsLore/business/restaurant.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Snooker",
                role: "ENTERTAINMENTS",
                avatarImg: "/IconsLore/business/Snooker.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Music Studio",
                role: "ENTERTAINMENTS",
                avatarImg: "/IconsLore/business/studiomusic.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "TV Studio",
                role: "ENTERTAINMENTS",
                avatarImg: "/IconsLore/business/studiotv.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Basket Ball",
                role: "SPORTS",
                avatarImg: "/IconsLore/business/basket.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Bikes",
                role: "SPORTS",
                avatarImg: "/IconsLore/business/bikes.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Fight Club",
                role: "SPORTS",
                avatarImg: "/IconsLore/business/fight.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Golf",
                role: "SPORTS",
                avatarImg: "/IconsLore/business/golf.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Gym",
                role: "SPORTS",
                avatarImg: "/IconsLore/business/gym.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Ping Pong",
                role: "SPORTS",
                avatarImg: "/IconsLore/business/pingpong.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Races",
                role: "SPORTS",
                avatarImg: "/IconsLore/business/races.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Skateboard",
                role: "SPORTS",
                avatarImg: "/IconsLore/business/skate.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Surf",
                role: "SPORTS",
                avatarImg: "/IconsLore/business/surf.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Tennis",
                role: "SPORTS",
                avatarImg: "/IconsLore/business/tennis.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Barber Shop",
                role: "SERVICES",
                avatarImg: "/IconsLore/business/barbershop.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Real Estate",
                role: "SERVICES",
                avatarImg: "/IconsLore/business/realestate.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Repair",
                role: "SERVICES",
                avatarImg: "/IconsLore/business/repair.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Tattoos",
                role: "SERVICES",
                avatarImg: "/IconsLore/business/tattoo.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Ammunation",
                role: "SHOPPING",
                avatarImg: "/IconsLore/business/ammunation.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Autos",
                role: "SHOPPING",
                avatarImg: "/IconsLore/business/autos.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Boats",
                role: "SHOPPING",
                avatarImg: "/IconsLore/business/boats.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Motorcycle",
                role: "SHOPPING",
                avatarImg: "/IconsLore/business/motos.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Planes",
                role: "SHOPPING",
                avatarImg: "/IconsLore/business/planes.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Clothings",
                role: "SHOPPING",
                avatarImg: "/IconsLore/business/clothing.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Electronics",
                role: "SHOPPING",
                avatarImg: "/IconsLore/business/electro.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Furnitures",
                role: "SHOPPING",
                avatarImg: "/IconsLore/business/furnitures.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Market",
                role: "SHOPPING",
                avatarImg: "/IconsLore/business/ltd.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Pets Shop",
                role: "SHOPPING",
                avatarImg: "/IconsLore/business/pets.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Brewing",
                role: "FACTORIES",
                avatarImg: "/IconsLore/business/brewing.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Bottleneck",
                role: "FACTORIES",
                avatarImg: "/IconsLore/business/drink.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Electronics",
                role: "FACTORIES",
                avatarImg: "/IconsLore/business/electronics.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Food Factory",
                role: "FACTORIES",
                avatarImg: "/IconsLore/business/food.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Sawmill",
                role: "FACTORIES",
                avatarImg: "/IconsLore/business/wood.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Metalworks",
                role: "FACTORIES",
                avatarImg: "/IconsLore/business/metal.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Humane Labs",
                role: "FACTORIES",
                avatarImg: "/IconsLore/business/humane.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Farm",
                role: "INDUSTRIES",
                avatarImg: "/IconsLore/business/farm.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Fishing",
                role: "INDUSTRIES",
                avatarImg: "/IconsLore/business/fishing.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Hunting",
                role: "INDUSTRIES",
                avatarImg: "/IconsLore/business/hunting.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Mining",
                role: "INDUSTRIES",
                avatarImg: "/IconsLore/business/mining.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }, {
                name: "Vineyard",
                role: "INDUSTRIES",
                avatarImg: "/IconsLore/business/vineyard.png",
                btnURL: "https://discord.gg/5AMJ3GEgZ8",
                btnTXT: "WEBSITE"
            }];
            var b = () => (0, s.jsx)(p, {
                    cards: u
                }),
                d = n(4056);
            let T = [];

            function I(e) {
                let t = Object.assign({
                    h1: "h1",
                    p: "p",
                    br: "br"
                }, (0, o.a)(), e.components);
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(t.h1, {
                        className: "text-33ds mb-4 mt-12 text-center text-[3.5rem] font-bold tracking-tight",
                        children: "\uD83C\uDFE2 BUSINESS"
                    }), "\n", (0, s.jsxs)(t.p, {
                        className: "mb-8 max-w-3xl m-auto p-4 text-center text-lg text-gray-500 dark:text-gray-400",
                        children: ["Explore our extensive directory and discover every business, service, and industry in town.", (0, s.jsx)(t.br, {}), "Whether you're in the market for real estate, seeking repair services, or simply curious about the local business landscape, our directory offers a panoramic view of all the commercial opportunities available to you."]
                    }), "\n", (0, s.jsx)(b, {}), "\n", (0, s.jsx)(d.Z, {
                        customClassName: "BackShapesHead"
                    }), "\n", (0, s.jsx)(i.Z, {})]
                })
            }
            var m = (0, r.j)({
                MDXContent: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        {
                            wrapper: t
                        } = Object.assign({}, (0, o.a)(), e.components);
                    return t ? (0, s.jsx)(t, { ...e,
                        children: (0, s.jsx)(I, { ...e
                        })
                    }) : I(e)
                },
                pageOpts: {
                    filePath: "pages/business.mdx",
                    route: "/business",
                    title: "Business",
                    headings: T
                },
                pageNextRoute: "/business"
            })
        },
        3159: function(e) {
            e.exports = {
                BackShapesHead: "style_BackShapesHead__UGpKn"
            }
        },
        3229: function(e) {
            e.exports = {
                profileCard: "style_profileCard__OseQS",
                profileImg: "style_profileImg__TwyNN",
                scrollContainer: "style_scrollContainer__ONvfS"
            }
        }
    },
    function(e) {
        e.O(0, [220, 801, 774, 888, 179], function() {
            return e(e.s = 2436)
        }), _N_E = e.O()
    }
]);