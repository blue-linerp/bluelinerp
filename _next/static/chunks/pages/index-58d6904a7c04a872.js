(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        950: function(e, s, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return a(3413)
            }])
        },
        3413: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                __toc: function() {
                    return U
                },
                default: function() {
                    return J
                }
            });
            var l = a(5250),
                r = a(7147),
                t = a(7298);
            a(829), a(9556);
            var c = a(79),
                n = a(2626),
                i = a.n(n);
            a(6498);
            var o = a(3237),
                d = a.n(o),
                x = () => {
                    let [e, s] = (0, c.useState)(0);
                    (0, c.useEffect)(() => {
                        let e = () => s(window.pageYOffset);
                        return window.addEventListener("scroll", e), () => {
                            window.removeEventListener("scroll", e)
                        }
                    }, []);
                    let a = s => "translateY(-".concat(e * s, "px)");
                    return (0, l.jsx)("div", {
                        children: (0, l.jsxs)("div", {
                            className: d().parallaxContainer,
                            children: [(0, l.jsx)("div", {
                                className: d().parallaxLayer,
                                style: {
                                    transform: a(.3)
                                },
                                children: (0, l.jsx)("img", {
                                    src: "assets/0.png",
                                    alt: "parallax-0"
                                })
                            }), (0, l.jsx)("div", {
                                className: d().parallaxLayer,
                                style: {
                                    transform: a(.7),
                                    opacity: Math.min(1, .4 + .003 * e)
                                },
                                children: (0, l.jsx)("img", {
                                    src: "assets/1-new2.png",
                                    alt: "parallax-1"
                                })
                            }), (0, l.jsx)("div", {
                                className: d().parallaxLayer,
                                style: {
                                    transform: a(.4)
                                },
                                children: (0, l.jsx)("img", {
                                    src: "assets/2.png",
                                    alt: "parallax-2"
                                })
                            }), (0, l.jsx)("div", {
                                className: d().parallaxLayer,
                                style: {
                                    transform: a(.5)
                                },
                                children: (0, l.jsx)("img", {
                                    src: "assets/3.png",
                                    alt: "parallax-3"
                                })
                            })]
                        })
                    })
                },
                m = a(2382),
                g = a.n(m);
            let h = (e, s) => Math.floor(Math.random() * (s - e)) + e,
                f = e => [...e].sort(() => .5 - Math.random()),
                p = [{
                    icon: "/IconsLore/city/sagov.png"
                }, {
                    icon: "/IconsLore/city/sapr.png"
                }, {
                    icon: "/IconsLore/city/noose.png"
                }, {
                    icon: "/IconsLore/city/iaa.png"
                }, {
                    icon: "/IconsLore/city/sadf.png"
                }, {
                    icon: "/IconsLore/city/fib.png"
                }, {
                    icon: "/IconsLore/city/doj.png"
                }, {
                    icon: "/IconsLore/city/bbsp.png"
                }, {
                    icon: "/IconsLore/city/bcgov.png"
                }, {
                    icon: "/IconsLore/city/bcsd.png"
                }, {
                    icon: "/IconsLore/city/bcfd.png"
                }, {
                    icon: "/IconsLore/city/bcmc.png"
                }, {
                    icon: "/IconsLore/city/lsgov.png"
                }, {
                    icon: "/IconsLore/city/lsfd.png"
                }, {
                    icon: "/IconsLore/city/lspd.png"
                }, {
                    icon: "/IconsLore/city/lsmc.png"
                }],
                v = e => {
                    let {
                        children: s,
                        duration: a,
                        reverse: r
                    } = e;
                    return (0, l.jsx)("div", {
                        className: g()["loop-slider"],
                        style: {
                            "--duration": "".concat(a, "ms"),
                            "--direction": r ? "reverse" : "normal"
                        },
                        children: (0, l.jsxs)("div", {
                            className: g().inner,
                            children: [s, s, s, s]
                        })
                    })
                },
                u = e => {
                    let {
                        icon: s
                    } = e;
                    return (0, l.jsx)("div", {
                        className: g().tag,
                        children: (0, l.jsx)("img", {
                            src: s,
                            alt: "logo"
                        })
                    })
                };
            var j = () => {
                    let [e, s] = (0, c.useState)([]);
                    return (0, c.useEffect)(() => {
                        s([void 0].map(() => h(1e4, 2e4)))
                    }, []), (0, l.jsxs)("div", {
                        className: g().tagslide,
                        children: [(0, l.jsx)("div", {
                            className: g()["tag-list"],
                            children: e.map((e, s) => (0, l.jsx)(v, {
                                duration: e,
                                reverse: s % 2 == 0,
                                children: f(p).slice(0, 10).map(e => {
                                    let {
                                        icon: s
                                    } = e;
                                    return (0, l.jsx)(u, {
                                        icon: s
                                    })
                                })
                            }, s))
                        }), (0, l.jsx)("div", {
                            className: g().fade
                        })]
                    })
                },
                y = a(3260),
                _ = a.n(y);
            let w = e => {
                let {
                    coverImg: s,
                    characterImg: a,
                    text: r,
                    href: t
                } = e;
                return (0, l.jsx)("a", {
                    href: t,
                    target: "_blank",
                    className: _().gvcard,
                    style: {
                        "--bg-img": s
                    },
                    children: (0, l.jsxs)("div", {
                        className: _().gvcard,
                        children: [(0, l.jsx)("div", {
                            className: _().gvWrapper,
                            children: (0, l.jsx)("div", {
                                className: _().coverImage,
                                style: {
                                    backgroundImage: "url(".concat(s, ")")
                                }
                            })
                        }), (0, l.jsx)("img", {
                            src: a,
                            className: _().character,
                            alt: "character"
                        }), (0, l.jsx)("div", {
                            className: _().cardBottom,
                            children: (0, l.jsx)("h2", {
                                children: r
                            })
                        })]
                    })
                })
            };
            var N = a(2443),
                b = a.n(N);
            let S = (e, s) => Math.floor(Math.random() * (s - e)) + e,
                k = e => [...e].sort(() => .5 - Math.random()),
                L = ["FiveM", "BCSO", "SanAndreas", "LosSantos", "BlaineCounty", "LSFD", "BCFD", "Server", "Pillbox", "EMS", "LSPD", "RolePlay"],
                I = e => {
                    let {
                        children: s,
                        duration: a,
                        reverse: r
                    } = e;
                    return (0, l.jsx)("div", {
                        className: b()["loop-slider"],
                        style: {
                            "--duration": "".concat(a, "ms"),
                            "--direction": r ? "reverse" : "normal"
                        },
                        children: (0, l.jsxs)("div", {
                            className: b().inner,
                            children: [s, s, s, s]
                        })
                    })
                },
                P = e => {
                    let {
                        text: s
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: b().tag,
                        children: [(0, l.jsx)("span", {
                            children: "#"
                        }), " ", s]
                    })
                };
            var C = () => {
                    let [e, s] = (0, c.useState)([]);
                    return (0, c.useEffect)(() => {
                        s([void 0].map(() => S(1e4, 2e4)))
                    }, []), (0, l.jsxs)("div", {
                        className: b().tagslidetext,
                        children: [(0, l.jsx)("div", {
                            className: b()["tag-list"],
                            children: e.map((e, s) => (0, l.jsx)(I, {
                                duration: e,
                                reverse: s % 2 == 0,
                                children: k(L).slice(0, 10).map(e => (0, l.jsx)(P, {
                                    text: e
                                }, e))
                            }, s))
                        }), (0, l.jsx)("div", {
                            className: b().fade
                        })]
                    })
                },
                M = a(2782),
                B = a.n(M),
                E = e => {
                    let {
                        customClassName: s
                    } = e;
                    return (0, l.jsxs)("svg", {
                        className: "".concat(B().backsvgTop, " ").concat(s),
                        viewBox: "0 0 800 450",
                        children: [(0, l.jsx)("defs", {
                            children: (0, l.jsx)("filter", {
                                id: "bbblurry-filter",
                                x: "-100%",
                                y: "-100%",
                                width: "400%",
                                height: "400%",
                                filterUnits: "objectBoundingBox",
                                primitiveUnits: "userSpaceOnUse",
                                colorInterpolationFilters: "sRGB",
                                children: (0, l.jsx)("feGaussianBlur", {
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
                        }), (0, l.jsxs)("g", {
                            filter: "url(#bbblurry-filter)",
                            children: [(0, l.jsx)("ellipse", {
                                rx: "70.5",
                                ry: "64",
                                cx: "355.37",
                                cy: "150.67",
                                fill: "hsla(167, 72%, 60%, 1.00)"
                            }), (0, l.jsx)("ellipse", {
                                rx: "70.5",
                                ry: "64",
                                cx: "242.83",
                                cy: "74.78",
                                fill: "hsla(212, 72%, 59%, 1.00)"
                            }), (0, l.jsx)("ellipse", {
                                rx: "70.5",
                                ry: "64",
                                cx: "559.75",
                                cy: "12.75",
                                fill: "hsla(290, 87%, 47%, 1.00)"
                            }), (0, l.jsx)("ellipse", {
                                rx: "70.5",
                                ry: "64",
                                cx: "527.67",
                                cy: "142.68",
                                fill: "hsla(272, 99%, 54%, 1.00)"
                            }), (0, l.jsx)("ellipse", {
                                rx: "70.5",
                                ry: "64",
                                cx: "293.55",
                                cy: "22.68",
                                fill: "hsla(55, 94%, 54%, 1.00)"
                            }), (0, l.jsx)("ellipse", {
                                rx: "70.5",
                                ry: "64",
                                cx: "277.24",
                                cy: "123.70",
                                fill: "hsla(89, 73%, 48%, 1.00)"
                            }), (0, l.jsx)("ellipse", {
                                rx: "70.5",
                                ry: "64",
                                cx: "427.43",
                                cy: "145.35",
                                fill: "hsl(325, 100%, 63%)"
                            })]
                        })]
                    })
                },
                R = a(1091),
                T = a.n(R),
                O = e => {
                    let {
                        customClassName: s
                    } = e;
                    return (0, l.jsxs)("svg", {
                        className: "".concat(T().backsvgCenter, " ").concat(s),
                        viewBox: "0 0 800 800",
                        children: [(0, l.jsx)("defs", {
                            children: (0, l.jsx)("filter", {
                                id: "bbblurry-filter",
                                x: "-100%",
                                y: "-100%",
                                width: "400%",
                                height: "400%",
                                filterUnits: "objectBoundingBox",
                                primitiveUnits: "userSpaceOnUse",
                                colorInterpolationFilters: "sRGB",
                                children: (0, l.jsx)("feGaussianBlur", {
                                    stdDeviation: "45",
                                    x: "0%",
                                    y: "0%",
                                    width: "100%",
                                    height: "100%",
                                    in: "SourceGraphic",
                                    edgeMode: "none",
                                    result: "blur"
                                })
                            })
                        }), (0, l.jsxs)("g", {
                            filter: "url(#bbblurry-filter)",
                            children: [(0, l.jsx)("ellipse", {
                                rx: "35.5",
                                ry: "43",
                                cx: "379.16",
                                cy: "280.64",
                                fill: "hsl(37, 99%, 67%)"
                            }), (0, l.jsx)("ellipse", {
                                rx: "35.5",
                                ry: "43",
                                cx: "432.37",
                                cy: "160.81",
                                fill: "hsl(316, 73%, 52%)"
                            }), (0, l.jsx)("ellipse", {
                                rx: "35.5",
                                ry: "43",
                                cx: "334.28",
                                cy: "179.57",
                                fill: "hsl(185, 100%, 57%)"
                            }), (0, l.jsx)("ellipse", {
                                rx: "35.5",
                                ry: "43",
                                cx: "490.96",
                                cy: "246.37",
                                fill: "hsl(11, 100%, 65%)"
                            }), (0, l.jsx)("ellipse", {
                                rx: "35.5",
                                ry: "43",
                                cx: "667.51",
                                cy: "180.46",
                                fill: "hsl(325, 100%, 63%)"
                            })]
                        })]
                    })
                },
                F = a(1612),
                D = a.n(F),
                z = () => (0, l.jsx)("section", {
                    className: "nx-mx-auto nx-flex max-w-[74rem] nx-justify-center nx-py-12 nx-text-gray-600 dark:nx-text-gray-400 md:nx-justify-start",
                    children: (0, l.jsxs)("div", {
                        className: "container mx-auto flex px-5 py-24 md:flex-row flex-col items-center",
                        children: [(0, l.jsx)("div", {
                            className: "lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10",
                            children: (0, l.jsx)("img", {
                                className: "".concat(D().imagegif, " object-cover object-center rounded"),
                                alt: "hero",
                                src: "/assets/home.gif"
                            })
                        }), (0, l.jsxs)("div", {
                            className: "lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center",
                            children: [(0, l.jsx)("h2", {
                                className: "mb-8 sm:text-4xl dark:nx-text-gray-200 text-[2.5rem] font-bold tracking-tight",
                                children: "The best RP Server"
                            }), (0, l.jsxs)("p", {
                                className: "mb-8 leading-relaxed",
                                children: ["Experience role play gaming like never before on what is unequivocally the best server available out there. Our platform is engineered to perfection, offering a seamless blend of performance, interactivity, and customization. Join ", (0, l.jsx)("span", {
                                    className: "YourServerText",
                                    children: "YourServer"
                                }), " today ! "]
                            }), (0, l.jsx)("div", {
                                className: D().frvgsBtn,
                                children: (0, l.jsx)("a", {
                                    href: "https://frvgs.com",
                                    children: "JOIN NOW !"
                                })
                            })]
                        })]
                    })
                }),
                G = a(2835),
                W = a.n(G),
                Y = () => (0, l.jsx)("section", {
                    className: "nx-mx-auto nx-flex max-w-[74rem] nx-justify-center nx-text-gray-600 dark:nx-text-gray-400 md:nx-justify-start",
                    children: (0, l.jsx)("div", {
                        className: "container px-5 py-24 mx-auto",
                        children: (0, l.jsxs)("div", {
                            className: "flex flex-wrap -m-2",
                            children: [(0, l.jsx)("div", {
                                className: "p-2 lg:w-1/3 md:w-1/2 w-full",
                                children: (0, l.jsxs)("div", {
                                    className: "".concat(W().frvgsShadow, " ").concat(W().frvgsPill, " h-full flex p-4 rounded-lg"),
                                    children: [(0, l.jsx)("img", {
                                        alt: "team",
                                        className: "".concat(W().frvgsShadow1, " rounded-xl w-16 h-16 flex-shrink-0 mr-4 p-0.5"),
                                        src: "/assets/slots.svg"
                                    }), (0, l.jsxs)("div", {
                                        className: "flex-grow",
                                        children: [(0, l.jsx)("h2", {
                                            className: "title-font font-medium",
                                            children: "2048 Slot"
                                        }), (0, l.jsx)("p", {
                                            className: "text-gray-600",
                                            children: "Concurrent Players"
                                        })]
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "p-2 lg:w-1/3 md:w-1/2 w-full",
                                children: (0, l.jsxs)("div", {
                                    className: "".concat(W().frvgsShadow, " ").concat(W().frvgsPill, " h-full flex p-4 rounded-lg"),
                                    children: [(0, l.jsx)("img", {
                                        alt: "team",
                                        className: "".concat(W().frvgsShadow1, " rounded-xl w-16 h-16 flex-shrink-0 mr-4 p-0.5"),
                                        src: "/assets/clothes.svg"
                                    }), (0, l.jsxs)("div", {
                                        className: "flex-grow",
                                        children: [(0, l.jsx)("h2", {
                                            className: "title-font font-medium",
                                            children: "Unique Clothes"
                                        }), (0, l.jsx)("p", {
                                            className: "text-gray-600",
                                            children: "Creator designed clothes"
                                        })]
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "p-2 lg:w-1/3 md:w-1/2 w-full",
                                children: (0, l.jsxs)("div", {
                                    className: "".concat(W().frvgsShadow, " ").concat(W().frvgsPill, " h-full flex p-4 rounded-lg"),
                                    children: [(0, l.jsx)("img", {
                                        alt: "team",
                                        className: "".concat(W().frvgsShadow1, " rounded-xl w-16 h-16 flex-shrink-0 mr-4 p-0.5"),
                                        src: "/assets/scripts.svg"
                                    }), (0, l.jsxs)("div", {
                                        className: "flex-grow",
                                        children: [(0, l.jsx)("h2", {
                                            className: "title-font font-medium",
                                            children: "Exclusive Scripts"
                                        }), (0, l.jsx)("p", {
                                            className: "text-gray-600",
                                            children: "Server exclusive scripts"
                                        })]
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "p-2 lg:w-1/3 md:w-1/2 w-full",
                                children: (0, l.jsxs)("div", {
                                    className: "".concat(W().frvgsShadow, " ").concat(W().frvgsPill, " h-full flex p-4 rounded-lg"),
                                    children: [(0, l.jsx)("img", {
                                        alt: "team",
                                        className: "".concat(W().frvgsShadow1, " rounded-xl w-16 h-16 flex-shrink-0 mr-4 p-0.5"),
                                        src: "/assets/economy.svg"
                                    }), (0, l.jsxs)("div", {
                                        className: "flex-grow",
                                        children: [(0, l.jsx)("h2", {
                                            className: "title-font font-medium",
                                            children: "Realistic Economy"
                                        }), (0, l.jsx)("p", {
                                            className: "text-gray-600",
                                            children: "Fully balanced economy"
                                        })]
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "p-2 lg:w-1/3 md:w-1/2 w-full",
                                children: (0, l.jsxs)("div", {
                                    className: "".concat(W().frvgsShadow, " ").concat(W().frvgsPill, " h-full flex p-4 rounded-lg"),
                                    children: [(0, l.jsx)("img", {
                                        alt: "team",
                                        className: "".concat(W().frvgsShadow1, " rounded-xl w-16 h-16 flex-shrink-0 mr-4 p-0.5"),
                                        src: "/assets/fps.svg"
                                    }), (0, l.jsxs)("div", {
                                        className: "flex-grow",
                                        children: [(0, l.jsx)("h2", {
                                            className: "title-font font-medium",
                                            children: "FPS Optimised"
                                        }), (0, l.jsx)("p", {
                                            className: "text-gray-600",
                                            children: "+160 FPS optimisation"
                                        })]
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "p-2 lg:w-1/3 md:w-1/2 w-full",
                                children: (0, l.jsxs)("div", {
                                    className: "".concat(W().frvgsShadow, " ").concat(W().frvgsPill, " h-full flex p-4 rounded-lg"),
                                    children: [(0, l.jsx)("img", {
                                        alt: "team",
                                        className: "".concat(W().frvgsShadow1, " rounded-xl w-16 h-16 flex-shrink-0 mr-4 p-0.5"),
                                        src: "/assets/vehicles.svg"
                                    }), (0, l.jsxs)("div", {
                                        className: "flex-grow",
                                        children: [(0, l.jsx)("h2", {
                                            className: "title-font font-medium",
                                            children: "Custom Vehicles"
                                        }), (0, l.jsx)("p", {
                                            className: "text-gray-600",
                                            children: "+300 planes, cars and boats"
                                        })]
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "p-2 lg:w-1/3 md:w-1/2 w-full",
                                children: (0, l.jsxs)("div", {
                                    className: "".concat(W().frvgsShadow, " ").concat(W().frvgsPill, "  h-full flex p-4 rounded-lg"),
                                    children: [(0, l.jsx)("img", {
                                        alt: "team",
                                        className: "".concat(W().frvgsShadow1, " rounded-xl w-16 h-16 flex-shrink-0 mr-4 p-0.5"),
                                        src: "/assets/homes.svg"
                                    }), (0, l.jsxs)("div", {
                                        className: "flex-grow",
                                        children: [(0, l.jsx)("h2", {
                                            className: "title-font font-medium",
                                            children: "Homes"
                                        }), (0, l.jsx)("p", {
                                            className: "text-gray-600",
                                            children: "Home customisation"
                                        })]
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "p-2 lg:w-1/3 md:w-1/2 w-full",
                                children: (0, l.jsxs)("div", {
                                    className: "".concat(W().frvgsShadow, " ").concat(W().frvgsPill, " h-full flex p-4 rounded-lg"),
                                    children: [(0, l.jsx)("img", {
                                        alt: "team",
                                        className: "".concat(W().frvgsShadow1, " rounded-xl w-16 h-16 flex-shrink-0 mr-4 p-0.5"),
                                        src: "/assets/mappings.svg"
                                    }), (0, l.jsxs)("div", {
                                        className: "flex-grow",
                                        children: [(0, l.jsx)("h2", {
                                            className: "title-font font-medium",
                                            children: "Custom Map"
                                        }), (0, l.jsx)("p", {
                                            className: "text-gray-600",
                                            children: "Exclusive mapping for RP"
                                        })]
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "p-2 lg:w-1/3 md:w-1/2 w-full",
                                children: (0, l.jsxs)("div", {
                                    className: "".concat(W().frvgsShadow, " ").concat(W().frvgsPill, " h-full flex p-4 rounded-lg"),
                                    children: [(0, l.jsx)("img", {
                                        alt: "team",
                                        className: "".concat(W().frvgsShadow1, " rounded-xl w-16 h-16 flex-shrink-0 mr-4 p-0.5"),
                                        src: "/assets/business.svg"
                                    }), (0, l.jsxs)("div", {
                                        className: "flex-grow",
                                        children: [(0, l.jsx)("h2", {
                                            className: "title-font font-medium",
                                            children: "Businesses"
                                        }), (0, l.jsx)("p", {
                                            className: "text-gray-600",
                                            children: "Create your own business"
                                        })]
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "p-2 lg:w-1/3 md:w-1/2 w-full",
                                children: (0, l.jsxs)("div", {
                                    className: "".concat(W().frvgsShadow, " ").concat(W().frvgsPill, " h-full flex p-4 rounded-lg"),
                                    children: [(0, l.jsx)("img", {
                                        alt: "team",
                                        className: "".concat(W().frvgsShadow1, " rounded-xl w-16 h-16 flex-shrink-0 mr-4 p-0.5"),
                                        src: "/assets/phone.svg"
                                    }), (0, l.jsxs)("div", {
                                        className: "flex-grow",
                                        children: [(0, l.jsx)("h2", {
                                            className: "title-font font-medium",
                                            children: "Smartphone"
                                        }), (0, l.jsx)("p", {
                                            className: "text-gray-600",
                                            children: "Realistic smartphone"
                                        })]
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "p-2 lg:w-1/3 md:w-1/2 w-full",
                                children: (0, l.jsxs)("div", {
                                    className: "".concat(W().frvgsShadow, " ").concat(W().frvgsPill, " h-full flex p-4 rounded-lg"),
                                    children: [(0, l.jsx)("img", {
                                        alt: "team",
                                        className: "".concat(W().frvgsShadow1, " rounded-xl w-16 h-16 flex-shrink-0 mr-4 p-0.5"),
                                        src: "/assets/rewards.svg"
                                    }), (0, l.jsxs)("div", {
                                        className: "flex-grow",
                                        children: [(0, l.jsx)("h2", {
                                            className: "title-font font-medium",
                                            children: "Rewards"
                                        }), (0, l.jsx)("p", {
                                            className: "text-gray-600",
                                            children: "Daily users rewars"
                                        })]
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "p-2 lg:w-1/3 md:w-1/2 w-full",
                                children: (0, l.jsxs)("div", {
                                    className: "".concat(W().frvgsShadow, " ").concat(W().frvgsPill, " h-full flex p-4 rounded-lg"),
                                    children: [(0, l.jsx)("img", {
                                        alt: "team",
                                        className: "".concat(W().frvgsShadow1, " rounded-xl w-16 h-16 flex-shrink-0 mr-4 p-0.5"),
                                        src: "/assets/star.svg"
                                    }), (0, l.jsxs)("div", {
                                        className: "flex-grow",
                                        children: [(0, l.jsx)("h2", {
                                            className: "title-font font-medium",
                                            children: "Community"
                                        }), (0, l.jsx)("p", {
                                            className: "text-gray-600",
                                            children: "Awesome community"
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                }),
                A = a(8320);
            let U = [];

            function V(e) {
                let s = Object.assign({
                    h1: "h1",
                    p: "p",
                    span: "span",
                    br: "br",
                    h2: "h2"
                }, (0, t.a)(), e.components);
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(x, {}), "\n", (0, l.jsx)(s.h1, {
                        className: "mb-4 text-center text-[2rem] md:text-[3.5rem] font-bold tracking-tight gradientText",
                        children: "Welcome to your World"
                    }), "\n", (0, l.jsxs)(s.p, {
                        className: "mb-16 max-w-3xl m-auto p-4 text-center text-lg text-gray-500 dark:text-gray-400",
                        children: ["Step into the world of ", (0, l.jsx)(s.span, {
                            className: "YourServerText",
                            children: "YourServer"
                        }), " Role Play, where we focus on delivering an unparalleled player experience. Our server offer a balanced economic system, advanced anti-cheat measures, an engaged staff team, and a wide array of job and character options, all designed to provide a more immersive role play experience.", (0, l.jsx)(s.br, {}), "It isn't just a game, it's a sandbox of possibilities. Here, you're free to socialize, make allies, and assume any identity that suits you."]
                    }), "\n", (0, l.jsx)(E, {
                        customClassName: "backsvgTop"
                    }), "\n", (0, l.jsx)(O, {
                        customClassName: "backsvgCenter"
                    }), "\n", (0, l.jsxs)("div", {
                        className: i().cardMagicContainer,
                        children: [(0, l.jsx)(w, {
                            coverImg: "/assets/coverMap.png",
                            characterImg: "assets/characterMap.png",
                            text: "Web Map",
                            href: "/"
                        }), (0, l.jsx)(w, {
                            coverImg: "/assets/coverCity.png",
                            characterImg: "assets/characterCity.png",
                            text: "City Services",
                            href: "/"
                        }), (0, l.jsx)(w, {
                            coverImg: "/assets/coverDocs.png",
                            characterImg: "assets/characterDocs.png",
                            text: "Server Docs",
                            href: "/"
                        })]
                    }), "\n", (0, l.jsx)("div", {
                        className: "mt-20"
                    }), "\n", (0, l.jsx)(s.h2, {
                        className: "mt-16 text-center text-[3.5rem] font-bold tracking-tight gradientText",
                        children: "Exclusive Features"
                    }), "\n", (0, l.jsxs)(s.p, {
                        className: "max-w-3xl m-auto p-4 text-center text-lg text-gray-500 dark:text-gray-400",
                        children: ["Embark on an unmatched gaming adventure with our server's extensive feature set.", (0, l.jsx)(s.br, {}), "Tailor your character's appearance with one-of-a-kind clothing, navigate a meticulously crafted economic landscape, and engage with game-enhancing exclusive scripts.", (0, l.jsx)(s.br, {}), "Stay engaged with daily rewards, become part of an awesome community, and enjoy the freedom to customize your journey with a variety of custom vehicles and job roles."]
                    }), "\n", (0, l.jsx)(Y, {}), "\n", (0, l.jsx)(C, {}), "\n", (0, l.jsx)(j, {}), "\n", (0, l.jsx)(C, {}), "\n", (0, l.jsx)(z, {}), "\n", (0, l.jsx)(A.Z, {})]
                })
            }
            var J = (0, r.j)({
                MDXContent: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        {
                            wrapper: s
                        } = Object.assign({}, (0, t.a)(), e.components);
                    return s ? (0, l.jsx)(s, { ...e,
                        children: (0, l.jsx)(V, { ...e
                        })
                    }) : V(e)
                },
                pageOpts: {
                    filePath: "pages/index.mdx",
                    route: "/",
                    frontMatter: {
                        title: "Blue Line RP | Home"
                    },
                    title: "Blue Line RP | Home",
                    headings: U
                },
                pageNextRoute: "/"
            })
        },
        1091: function(e) {
            e.exports = {
                backsvgCenter: "style_backsvgCenter__Iddzs"
            }
        },
        2782: function(e) {
            e.exports = {
                backsvgTop: "style_backsvgTop___8VO_"
            }
        },
        3260: function(e) {
            e.exports = {
                gvcard: "style_gvcard__RTPKv",
                coverImage: "style_coverImage__L3x3N",
                coverAnim: "style_coverAnim__lQOTX",
                gvWrapper: "style_gvWrapper__0UKjL",
                wrapper: "style_wrapper__DYunz",
                character: "style_character__VQwsY",
                cardBottom: "style_cardBottom__I6iyt"
            }
        },
        1612: function(e) {
            e.exports = {
                imagegif: "style_imagegif__L0r57",
                frvgsBtn: "style_frvgsBtn__wSPfw"
            }
        },
        3237: function(e) {
            e.exports = {
                parallaxContainer: "style_parallaxContainer__giR4y",
                parallaxLayer: "style_parallaxLayer__5zvRK",
                coveringLayer: "style_coveringLayer__xF9il",
                logoLayer: "style_logoLayer__GM0HF",
                charLayer: "style_charLayer__3Gri2",
                parallaxEnd: "style_parallaxEnd__cYIT3"
            }
        },
        2835: function(e) {
            e.exports = {
                frvgsBlur: "style_frvgsBlur__1Mn_s",
                frvgsShadow1: "style_frvgsShadow1__jsyaA",
                frvgsPill: "style_frvgsPill__cpMP_",
                frvgsShadow: "style_frvgsShadow__amf_t"
            }
        },
        2382: function(e) {
            e.exports = {
                tagslide: "style_tagslide__5LsNJ",
                "tag-list": "style_tag-list__DM2Qy",
                "loop-slider": "style_loop-slider__JB_bV",
                inner: "style_inner__Tx6o6",
                loop: "style_loop__8NoJ9",
                tag: "style_tag__90z2c",
                fade: "style_fade__uQlqo"
            }
        },
        2443: function(e) {
            e.exports = {
                tagslidetext: "style_tagslidetext__1PA9i",
                "tag-list": "style_tag-list__DW1aC",
                "loop-slider": "style_loop-slider__3J6cR",
                inner: "style_inner__06Sv3",
                loop: "style_loop__Ec3Au",
                tag: "style_tag__Eh13k",
                fade: "style_fade__vXrAR"
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
            return e(e.s = 950)
        }), _N_E = e.O()
    }
]);