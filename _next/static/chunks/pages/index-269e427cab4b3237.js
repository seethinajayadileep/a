(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        8581: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(2013)
            }])
        },
        2013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return we
                }
            });
            var i = n(5893),
                r = n(7294),
                o = n(6513),
                a = n(5417),
                s = n(131),
                c = n(3750),
                l = n(5459),
                d = n.n(l),
                u = n(4141),
                m = n(9920),
                f = n(5434),
                h = n(296);

            function p(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }

            function x() {
                var e = p(["\n  width:auto;\n  height:auto;\n  background: rgba(0, 0, 0, 0.8);\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: -100px;\n  @media (min-width:320px)  { \n    /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ \n    margin-top: 150px;\n  }\n  @media (min-width:480px)  { \n    /* smartphones, Android phones, landscape iPhone */ \n  }\n  @media (min-width:600px)  { \n    /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ \n  margin-top: -100px;\n}\n\n"]);
                return x = function() {
                    return e
                }, e
            }

            function g() {
                var e = p(["\nwidth:auto;\nheight:auto;\n  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);\n  background: #fff;\n  color: #000;\n  display: flex;\n  grid-template-columns: 1fr 1fr;\n  position: relative;\n  z-index: 10;\n  border-radius: 10px;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n"]);
                return g = function() {
                    return e
                }, e
            }

            function v() {
                var e = p(["\n  width: 100%;\n  height: 100%;\n  border-radius: 10px 0 0 10px;\n  background: #000;\n"]);
                return v = function() {
                    return e
                }, e
            }

            function y() {
                var e = p(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  line-height: 1.8;\n  color: #141414;\n  p {\n    margin-bottom: 1rem;\n  }\n  button {\n    padding: 10px 24px;\n    background: #141414;\n    color: #fff;\n    border: none;\n  }\n"]);
                return y = function() {
                    return e
                }, e
            }

            function b() {
                var e = p(["\n  cursor: pointer;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  z-index: 10;\n"]);
                return b = function() {
                    return e
                }, e
            }
            h.v0.GlobalWorkerOptions.workerSrc = "//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(h.v0.version, "/pdf.worker.js");
            var j = u.ZP.div(x()),
                w = u.ZP.div(g()),
                L = (u.ZP.img(v()), u.ZP.div(y())),
                S = (0, u.ZP)(f.FU5)(b()),
                k = function(e) {
                    var t = e.showModal,
                        n = e.setShowModal,
                        o = (0, r.useRef)(),
                        a = (0, m.useSpring)({
                            config: {
                                duration: 250
                            },
                            opacity: t ? 1 : 0,
                            transform: t ? "translateY(0%)" : "translateY(-100%)"
                        }),
                        s = (0, r.useCallback)((function(e) {
                            "Escape" === e.key && t && (n(!1), console.log("I pressed"))
                        }), [n, t]);
                    (0, r.useEffect)((function() {
                        return document.addEventListener("keydown", s),
                            function() {
                                return document.removeEventListener("keydown", s)
                            }
                    }), [s]), (0, r.useEffect)((function() {
                        console.log("MOUNTED")
                    }), []);
                    var c = (0, r.useState)(null),
                        l = c[0],
                        d = c[1];
                    return (0, i.jsx)(i.Fragment, {
                        children: t ? (0, i.jsx)(j, {
                            onClick: function(e) {
                                o.current === e.target && n(!1)
                            },
                            ref: o,
                            className: "z-[10010] block justify-center items-end -mt-16 sm:-mt-8 group font-home",
                            children: (0, i.jsx)(m.animated.div, {
                                style: a,
                                children: (0, i.jsxs)(w, {
                                    showModal: t,
                                    children: [(0, i.jsx)(L, {
                                        children: (0, i.jsx)(h.BB, {
                                            file: "/jyotika.pdf",
                                            options: {
                                                cMapUrl: "//cdn.jsdelivr.net/npm/pdfjs-dist@".concat(h.v0.version, "/cmaps/"),
                                                cMapPacked: !0
                                            },
                                            onLoadSuccess: function(e) {
                                                var t = e.numPages;
                                                d(t)
                                            },
                                            onLoadError: console.error,
                                            children: Array.from(new Array(l), (function(e, t) {
                                                return (0, i.jsx)(h.T3, {
                                                    pageNumber: t + 1
                                                }, "page_".concat(t + 1))
                                            }))
                                        })
                                    }), (0, i.jsx)(S, {
                                        "aria-label": "Close modal",
                                        onClick: function() {
                                            return n((function(e) {
                                                return !e
                                            }))
                                        }
                                    })]
                                })
                            })
                        }) : null
                    })
                };

            function N(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }

            function I() {
                var e = N(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n"]);
                return I = function() {
                    return e
                }, e
            }

            function E() {
                var e = N(["\n//   min-width: 100px;\n//   padding: 16px 32px;\n//   border-radius: 4px;\n//   border: none;\n//   background: #fff;\n//   color: #141414;\n//   font-size: 24px;\n  cursor: pointer;\n"]);
                return E = function() {
                    return e
                }, e
            }
            u.ZP.div(I());
            var P = u.ZP.button(E());

            function C() {
                var e = (0, r.useRef)(null),
                    t = (0, r.useState)(!1),
                    n = t[0],
                    o = t[1],
                    a = function(t) {
                        window.pageYOffset < 30 && e ? e.current.classList.remove("hide-scroll") : e && e.current.classList.add("hide-scroll")
                    };
                return (0, r.useEffect)((function() {
                    return window.addEventListener("scroll", a),
                        function() {
                            window.removeEventListener("scroll", a)
                        }
                }), []), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        className: "flex justify-center group font-home",
                        id: "home",
                        style: {
                            paddingTop: 150
                        },
                        children: (0, i.jsx)("div", {
                            className: "container-fluid",
                            children: (0, i.jsxs)("div", {
                                className: "",
                                style: {
                                    display: "flex"
                                },
                                children: [(0, i.jsx)("div", {
                                    className: "col-sm-12 col-md-8",
                                    children: (0, i.jsx)("div", {
                                        className: "hero-content font-home text-4xl sm:text-6xl font-bold",
                                        style: {
                                            color: "white"
                                        },
                                        children: (0, i.jsxs)("div", {
                                            className: "hero-text",
                                            children: [(0, i.jsx)("p", {
                                                style: {
                                                    marginBottom: 20
                                                },
                                                children: "I'm"
                                            }), (0, i.jsx)("h1", {
                                                style: {
                                                    marginBottom: 20
                                                },
                                                children: "USHA SRI"
                                            }), (0, i.jsx)(d(), {
                                                options: {
                                                    strings: ["Software Engineer", "Researcher","Dancer","Reels Creator"],
                                                    autoStart: !0,
                                                    loop: !0
                                                }
                                            })]
                                        })
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "d-md-block z-[9999]",
                                    children: (0, i.jsx)("div", {
                                        className: "hero-image",
                                        children: (0, i.jsx)("img", {
                                            src: "/images/bg1.png",
                                            alt: "Hero Image",
                                            width: 900,
                                            height: 900,
                                            style: {
                                                borderRadius: 300,
                                                border: "5px solid white",
                                                maxWidth: "60%"
                                            }
                                        })
                                    })
                                })]
                            })
                        })
                    }), (0, i.jsxs)("div", {
                        ref: e,
                        className: "flex items-center px-2 justify-center group-hover:scale-125 opacity-100 transition-all animate-bounce",
                        style: {
                            marginTop: 120
                        },
                        children: [(0, i.jsx)(c.Sr8, {
                            color: "white",
                            size: 35
                        }), (0, i.jsx)("h1", {
                            className: "text-white pl-2",
                            children: "SCROLL"
                        })]
                    }), (0, i.jsx)("div", {
                        className: "z-[10010] block justify-center items-end -mt-16 sm:-mt-8 group font-home",
                        children: (0, i.jsxs)("div", {
                            className: "flex items-center px-2 justify-center",
                            style: {
                                paddingTop: 100,
                                marginTop: -50,
                                marginLeft: 20
                            },
                            children: [(0, i.jsx)(P, {
                                className: "z-[10010] mt-6 self-center p-2 border-2 rounded-md font-bold cursor-pointer text-white font-home",
                                onClick: function() {
                                    o((function(e) {
                                        return !e
                                    }))
                                },
                                children: "VIEW RESUME"
                            }), (0, i.jsx)(k, {
                                showModal: n,
                                setShowModal: o
                            })]
                        })
                    })]
                })
            }
            var A = n(7735),
                T = {
                    hidden: {
                        y: 200,
                        opacity: 0
                    },
                    visible: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: .5
                        }
                    }
                },
                M = {
                    hidden: {
                        y: 100,
                        opacity: 0
                    },
                    visible: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            delay: .2,
                            duration: .5
                        }
                    }
                };

            function F() {
                var e = (0, o._)(),
                    t = (0, s.YD)(),
                    n = t.ref,
                    c = t.inView,
                    l = (0, r.useState)(!1),
                    d = l[0],
                    u = l[1];
                return (0, r.useEffect)((function() {
                    c && (e.start("visible"), u(!0)), c || d || e.start("hidden")
                }), [c, e]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(C, {}), (0, i.jsx)("section", {
                        id: "home",
                        className: "flex text-center justify-center items-center w-full mt-28 font-home mx-auto",
                        children: (0, i.jsx)(a.E.div, {
                            variants: T,
                            initial: "hidden",
                            animate: e,
                            ref: n,
                            className: "flex justify-center mx-auto border-x-0 2xl:border-x-2 bg-home w-full h-[640px] bg-cover text-white",
                            children: (0, i.jsxs)(a.E.div, {
                                variants: M,
                                initial: "hidden",
                                animate: e,
                                className: "z-[9999] justify-center flex flex-col p-3 m-2 h-fit bg-black bg-opacity-75 rounded-md",
                                children: [(0, i.jsxs)("div", {
                                    className: "flex flex-wrap self-end my-2 w-full justify-center",
                                    children: [(0, i.jsx)("a", {
                                        rel: "noreferrer",
                                        target: "_blank",
                                        href: "https://github.com/",
                                        className: "px-2 hover:scale-125 cursor-pointer transition-all",
                                        children: (0, i.jsx)(A.pZu, {
                                            color: "white",
                                            size: 30
                                        })
                                    }), (0, i.jsx)("a", {
                                        rel: "noreferrer",
                                        target: "_blank",
                                        href: "https://www.linkedin.com/",
                                        className: "px-2 hover:scale-125 cursor-pointer transition-all",
                                        children: (0, i.jsx)(A.n7M, {
                                            color: "white",
                                            size: 30
                                        })
                                    })]
                                }), (0, i.jsxs)("h1", {
                                    className: "text-2xl sm:text-3xl font-bold",
                                    style: {
                                        marginTop: 20
                                    },
                                    children: ["Fuel your rocket with courage & confidence, ", (0, i.jsx)("br", {}), " and then shoot for the Stars"]
                                })]
                            })
                        })
                    })]
                })
            }

            function R() {
                var e = (0, r.useRef)(),
                    t = (0, r.useRef)(),
                    n = function(n) {
                        if (e && t) {
                            var i = -1 * n.clientY / 100,
                                r = -1 * n.clientX / 100;
                            e.current.style.transform = "translateX(".concat(r, "px) translateY(").concat(i, "px)"), t.current.style.transform = "translateX(".concat(-r, "px) translateY(").concat(-i, "px)")
                        }
                    };
                return (0, r.useEffect)((function() {
                    return window.addEventListener("mousemove", n, !1),
                        function() {
                            window.removeEventListener("mousemove", n, !1)
                        }
                }), []), (0, i.jsx)("section", {
                    id: "about",
                    className: "my-16 w-full flex items-center justify-center",
                    children: (0, i.jsx)("div", {
                        className: "max-w-7xl text-white z-[9999]",
                        children: (0, i.jsxs)("div", {
                            className: "flex flex-col md:flex-row justify-center items-center md:items-start overflow-hidden",
                            children: [(0, i.jsx)("img", {
                                alt: "",
                                ref: e,
                                className: "order-2 md:order-1",
                                width: 280,
                                src: ""
                            }), (0, i.jsxs)("div", {
                                className: "order-1 md:order-2 ",
                                children: [(0, i.jsx)("h1", {
                                    ref: t,
                                    className: "text-center font-home p-6 md:p-12 pt-0 px-2 text-4xl sm:text-6xl font-bold",
                                    children: "ABOUT ME"
                                }), (0, i.jsx)("p", {
                                    className: "px-4 sm:px-16 pb-8 font-bold",
                                    children: "I am an extremely passionate Software Developer, Data Scientist & Researcher. I Love to work as a Software Engineer in Maang Companies.Currently, I am pursuing diploma in communication and computer networks engineering at Aditya Polytechnic College.I am also passionate about dancing and acting. I have a keen interest in the fields of software development ,data science, and love to construct thoughtful products that create a change in the world."
                             })]
                            })]
                        })
                    })
                })
            }
            var z = n(9583),
                J = n(1474),
                _ = [ {
                    name: "Javascript",
                    Icon: A.vl3,
                    color: "#ead41c"
                },, {
                    name: "Mongodb",
                    Icon: A.t$b,
                    color: "#359e40"
                }, , {
                    name: "Python",
                    Icon: A.Cul,
                    color: "#346998"
                }, {
                    name: "sql",
                    Icon: A.zKo,
                    color: "#6bb6df"
                } 
                , {
                    name: "Html",
                    Icon: A.PSn,
                    color: "#e6640a"
                }, {
                    name: "Css",
                    Icon: A.H5g,
                    color: "#2760e5"
                }, {
                    name: "Git",
                    Icon: A.zS0,
                    color: "#f24c2d"
                },  {
                    name: "C",
                    Icon: A.wVw,
                    color: "white"
                }, {
                    name: "JAVA",
                    Icon: A.LIX,
                    color: "#346998"
                }, {
                    name: "Postgresql",
                    Icon: A.u4B,
                    color: "#35b3eb"
                }],
                O = {
                    hidden: {
                        y: 100,
                        opacity: 0
                    },
                    visible: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: .8
                        }
                    }
                };

            function D() {
                var e = (0, r.useState)(!1),
                    t = e[0],
                    n = e[1],
                    c = (0, o._)(),
                    l = (0, s.YD)(),
                    d = l.ref,
                    u = l.inView,
                    m = (0, r.useRef)(),
                    f = (0, r.useRef)(),
                    h = function(e) {
                        if (f && m) {
                            var t = -1 * e.clientY / 100,
                                n = -1 * e.clientX / 100;
                            m.current.style.transform = "translateX(".concat(-n, "px) translateY(").concat(-t, "px)"), f.current.style.transform = "translateX(".concat(n, "px) translateY(").concat(t, "px)")
                        }
                    };
                return (0, r.useEffect)((function() {
                    u && (c.start("visible"), n(!0)), u || t || c.start("hidden")
                }), [c, u]), (0, r.useEffect)((function() {
                    return window.addEventListener("mousemove", h, !1),
                        function() {
                            window.removeEventListener("mousemove", h, !1)
                        }
                }), []), (0, i.jsx)("section", {
                    id: "skills",
                    className: "flex self-center w-full justify-center items-center",
                    children: (0, i.jsxs)(a.E.div, {
                        variants: O,
                        initial: "hidden",
                        animate: c,
                        className: "flex max-w-7xl w-full flex-col justify-center items-center z-[9999] mt-8",
                        children: [(0, i.jsx)("h1", {
                            ref: m,
                            className: "font-home font-bold text-4xl sm:text-6xl text-white",
                            children: "SKILLS"
                        }), (0, i.jsx)("div", {
                            ref: f,
                            children: (0, i.jsx)("div", {
                                ref: d,
                                className: "p-4 py-8 flex justify-center items-center flex-wrap max-w-3xl font-home text-white",
                                children: _.map((function(e, t) {
                                    return (0, i.jsx)(J.Z, {
                                        Icon: e.Icon,
                                        name: e.name,
                                        color: e.color
                                    }, t)
                                }))
                            })
                        })]
                    })
                })
            }
            var Y = {
                hidden: {
                    scale: 1.25,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        duration: .75
                    }
                }
            };

            function B(e) {
                var t = e.link,
                    n = e.color,
                    c = e.title,
                    l = e.description,
                    d = e.techs,
                    u = (e.gitLink, e.bgPath),
                    m = e.md,
                    f = e.index,
                    h = (0, r.useState)(!1),
                    p = h[0],
                    x = h[1],
                    g = (0, s.YD)(),
                    v = g.ref,
                    y = g.inView,
                    b = (0, o._)();
                (0, r.useEffect)((function() {
                    y && (b.start("visible"), x(!0)), y || p || b.start("hidden")
                }), [b, y]);
                var j = n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(e, t, n, i) {
                        return "#" + t + t + n + n + i + i
                    })).substring(1).match(/.{2}/g).map((function(e) {
                        return parseInt(e, 16)
                    })),
                    w = f % 2 == 0;
                return (0, i.jsxs)(a.E.div, {
                    variants: Y,
                    initial: "hidden",
                    animate: b,
                    ref: v,
                    className: "text-white flex m-3 md:m-8 relative my-8 md:my-16 text-shadow",
                    children: [(0, i.jsxs)("div", {
                        className: "".concat(w ? "order-2" : "", " rounded-sm absolute md:relative hidden md:block"),
                        children: [(0, i.jsx)("a", {
                            rel: "noreferrer",
                            target: "_blank",
                            href: t,
                            children: (0, i.jsx)("div", {
                                style: {
                                    backgroundColor: "rgb(".concat(j[0], " ").concat(j[1], " ").concat(j[2], " / var(--tw-bg-opacity))")
                                },
                                className: "absolute rounded-sm h-full w-full bg-opacity-30 hover:bg-opacity-0 transition-all"
                            })
                        }), (0, i.jsx)("img", {
                            alt: "project",
                            className: "block w-fit h-full object-cover rounded-sm",
                            src: u
                        })]
                    }), (0, i.jsxs)("div", {
                        style: m ? {
                            backgroundImage: "url(".concat(u, ")")
                        } : {
                            backgroundImage: "none"
                        },
                        className: "".concat(w ? "order-1 text-left" : "text-right", " flex flex-col relative z-[10000] md:p-0 bg-cover rounded-sm md:rounded-none"),
                        children: [(0, i.jsx)("div", {
                            style: {
                                backgroundColor: "rgb(".concat(j[0], " ").concat(j[1], " ").concat(j[2], " / var(--tw-bg-opacity))")
                            },
                            className: "p-8 h-full w-full bg-opacity-80 absolute block rounded-sm md:hidden"
                        }), (0, i.jsxs)("div", {
                            className: "z-[10001] p-8 md:p-0",
                            children: [(0, i.jsx)("p", {
                                className: "font-home font-semibold text-sm pb-2",
                                children: "Featured Project"
                            }), (0, i.jsx)("h1", {
                                className: "font-bold font-home py-2 text-lg",
                                children: c
                            }), (0, i.jsx)("div", {
                                style: m ? {
                                    backgroundColor: "inherit",
                                    padding: 0
                                } : {
                                    backgroundColor: n,
                                    padding: "24px"
                                },
                                className: "".concat(m ? "ml-0" : w ? "-mr-12" : "-ml-12", " rounded-sm flex my-2"),
                                children: (0, i.jsx)("p", {
                                    className: "font-semibold",
                                    children: l
                                })
                            }), (0, i.jsx)("div", {
                                className: "".concat(w ? "justify-start" : "justify-end", " flex flex-wrap self-end my-2 w-full"),
                                children: d.map((function(e, t) {
                                    return (0, i.jsx)("p", {
                                        className: "".concat(w ? "pr-4" : "pl-4", " font-home text-sm font-semibold"),
                                        children: e
                                    }, t)
                                }))
                            }), (0, i.jsx)("div", {
                                className: "".concat(w ? "justify-start" : "justify-end", " flex flex-wrap self-end my-2 w-full")
                            })]
                        })]
                    })]
                })
            }
            var U = {
                hidden: {
                    y: 100,
                    opacity: 0
                },
                visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: .6
                    }
                }
            };

            function W() {
                var e = (0, r.useState)(!1),
                    t = e[0],
                    n = e[1],
                    c = (0, o._)(),
                    l = (0, s.YD)(),
                    d = l.ref,
                    u = l.inView;
                return (0, r.useEffect)((function() {
                    u && (c.start("visible"), n(!0)), u || t || c.start("hidden")
                }), [u, c]), (0, i.jsx)(a.E.h1, {
                    variants: U,
                    initial: "hidden",
                    animate: c,
                    ref: d,
                    className: "text-4xl sm:text-6xl text-white font-home font-bold pb-8",
                    children: "FUTURE PROJECTS"
                })
            }
            var V = {
                hidden: {
                    y: 100,
                    opacity: 0
                },
                visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: .6
                    }
                }
            };

            function G() {
                var e = (0, r.useState)(!1),
                    t = e[0],
                    n = e[1],
                    c = (0, o._)(),
                    l = (0, s.YD)(),
                    d = l.ref,
                    u = l.inView;
                return (0, r.useEffect)((function() {
                    u && (c.start("visible"), n(!0)), u || t || c.start("hidden")
                }), [u, c]), (0, i.jsx)(a.E.h1, {
                    variants: V,
                    initial: "hidden",
                    animate: c,
                    ref: d,
                    className: "text-4xl sm:text-6xl text-white font-home font-bold pb-8",
                    children: "EXPERIENCE"
                })
            }
            var X = {
                hidden: {
                    scale: 1.25,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        duration: .75
                    }
                }
            };

            function Z(e) {
                var t = e.title,
                    n = e.description,
                    c = e.time,
                    l = e.org,
                    d = (e.md, e.index),
                    u = (0, r.useState)(!1),
                    m = u[0],
                    f = u[1],
                    h = (0, s.YD)(),
                    p = h.ref,
                    x = h.inView,
                    g = (0, o._)();
                (0, r.useEffect)((function() {
                    x && (g.start("visible"), f(!0)), x || m || g.start("hidden")
                }), [g, x]);
                var v = d % 2 == 0;
                return (0, i.jsx)(a.E.div, {
                    variants: X,
                    initial: "hidden",
                    animate: g,
                    ref: p,
                    className: "timeline-item ".concat(v ? "left" : "right", " wow slideInLeft"),
                    children: (0, i.jsxs)("div", {
                        className: "timeline-text",
                        children: [(0, i.jsx)("div", {
                            className: "timeline-date",
                            children: c
                        }), (0, i.jsx)("h2", {
                            children: t
                        }), (0, i.jsx)("h4", {
                            children: l
                        }), (0, i.jsx)("p", {
                            children: n
                        })]
                    })
                })
            }
            var H = [{
                year: "June 2021 - July 2022",
                course: "  Scored Above 80% Mark in Diploma 1st Year",
                college: "Diploma Examinations",
                desc: "I will come back to this and write something very inspiring  "
            }, {
                year: "June 2021 – July 2021",
                course: " School 2 nd Topper -In 10th Class",
                college: "High School",
                desc: "I mentored over an open source Flutter project about fitness and workout for a duration of 1 month. I solved the doubts, helped the mentees complete the project and also interacted with them. "
            }, {
                year: "July 2020 – Dec 2021",
                course: " Received 100 Subscribers For My Youtube Channel",
                college: "Youtube",
                desc: "Something Something"
            }, {
                year: "Mar 2019 - June 2020",
                course: " Got More Than 1k Followers in Moj",
                college: "Moj",
                desc: "Something Something"
            }, {
                year: "Jul 2018",
                course: " Got More Than 10k Followers In Tiktok",
                college: "TikTok",
                desc: "Something Something"
            } 
            ];

            function q(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function K(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function $(e) {
                return $ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, $(e)
            }

            function Q(e, t) {
                return !t || "object" !== te(t) && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function ee(e, t) {
                return ee = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, ee(e, t)
            }
            var te = function(e) {
                return e && "undefined" !== typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function ne(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, i = $(e);
                    if (t) {
                        var r = $(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return Q(this, n)
                }
            }
            var ie = function(e) {
                    ! function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && ee(e, t)
                    }(a, e);
                    var t, n, r, o = ne(a);

                    function a() {
                        return q(this, a), o.apply(this, arguments)
                    }
                    return t = a, n = [{
                        key: "render",
                        value: function() {
                            return (0, i.jsx)("div", {
                                style: {
                                    display: "contents",
                                    alignItems: "center",
                                    justifyCenter: "center"
                                },
                                children: H.map((function(e, t) {
                                    return (0, i.jsxs)("div", {
                                        className: "resume-container",
                                        children: [(0, i.jsx)("div", {
                                            children: (0, i.jsx)("h6", {
                                                className: "achievement-year",
                                                children: e.year
                                            })
                                        }), (0, i.jsx)("div", {
                                            children: (0, i.jsx)("h4", {
                                                className: "achievement-course",
                                                children: e.course
                                            })
                                        }), (0, i.jsx)("div", {
                                            children: (0, i.jsx)("span", {
                                                className: "achievement-college",
                                                children: e.college
                                            })
                                        })]
                                    }, "achievement_".concat(e, "_").concat(t))
                                }))
                            })
                        }
                    }], n && K(t.prototype, n), r && K(t, r), a
                }(r.Component),
                re = ie,
                oe = {
                    hidden: {
                        scale: 1.25,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            duration: .75
                        }
                    }
                };

            function ae(e) {
                var t = e.title,
                    n = e.description,
                    c = e.time,
                    l = e.org,
                    d = (e.md, e.index),
                    u = (0, r.useState)(!1),
                    m = u[0],
                    f = u[1],
                    h = (0, s.YD)(),
                    p = h.ref,
                    x = h.inView,
                    g = (0, o._)();
                (0, r.useEffect)((function() {
                    x && (g.start("visible"), f(!0)), x || m || g.start("hidden")
                }), [g, x]);
                var v = d % 2 == 0;
                return (0, i.jsx)(a.E.div, {
                    variants: oe,
                    initial: "hidden",
                    animate: g,
                    ref: p,
                    className: "timeline-item ".concat(v ? "left" : "right", " wow slideInLeft"),
                    children: (0, i.jsxs)("div", {
                        className: "timeline-text",
                        children: [(0, i.jsx)("div", {
                            className: "timeline-date",
                            children: c
                        }), (0, i.jsx)("h2", {
                            children: t
                        }), (0, i.jsx)("h4", {
                            children: l
                        }), (0, i.jsx)("p", {
                            children: n
                        })]
                    })
                })
            }
            var se = {
                hidden: {
                    y: 100,
                    opacity: 0
                },
                visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: .6
                    }
                }
            };

            function ce() {
                var e = (0, r.useState)(!1),
                    t = e[0],
                    n = e[1],
                    c = (0, o._)(),
                    l = (0, s.YD)(),
                    d = l.ref,
                    u = l.inView;
                return (0, r.useEffect)((function() {
                    u && (c.start("visible"), n(!0)), u || t || c.start("hidden")
                }), [u, c]), (0, i.jsx)(a.E.h1, {
                    variants: se,
                    initial: "hidden",
                    animate: c,
                    ref: d,
                    className: "text-4xl sm:text-6xl text-white font-home font-bold pb-8",
                    children: "EDUCATION"
                })
            }
            var le = [{
                    link: "",
                    color: "#1ed760",
                    title: "AI automated Content Management System Framework",
                    description: "React and NodeJS based artificially intelligent Content Management Service. The modules that this product encapsulates are that of a Blog Maker with markdown capabilities, a blog recommender, BlogBot a very unique blog-based chatbot, a blog summarizer, and a sentiment analyzer-based review system.",
                    techs: ["PyTorch", "Tensorflow", "Keras", "RASA NLU", "ReactJS", "NodeJS"],
                    gitLink: "",
                    bgPath: "/spotify.jpg"
                }, {
                    link: "",
                    color: "#5c16c5",
                    title: "Deep learning based real-time Sign Language detection with automated multilingual & speech translation",
                    description: "The project aims to predict words using real-time sign language detection. The model is trained on WLASL dataset and deployed using flask. The product also additionally contains word to sentence generation using NLG, text to speech for the disabled and also multi-lingual support.",
                    techs: ["PyTorch", "Tensorflow", "Keras", "RASA NLU", "gTTS", "PyGlet", "Python", "Flask"],
                    gitLink: "",
                    bgPath: "/spotify.jpg"
                }, {
                    link: "",
                    color: "#FF7A00",
                    title: "AI based Fitness Trainer with Yoga Position Detection",
                    description: "A gym trainer built with Machine Learning using Python to track user exercise and fitness behavior. Also uses OpenCV to virtually track exercise and yoga positions to see accuracy of the user's poses. Also traces and gives analysis of join angles and keeps workout plans.",
                    techs: ["PyTorch", "Tensorflow", "Keras", "RASA NLU", "ReactJS", "NodeJS", "OpenCV", "MediaPipe"],
                    gitLink: "",
                    bgPath: "/spotify.jpg"
                }, {
                    link: null,
                    color: "#007FE3",
                    title: "Real Time communication & streaming embedded Flutter App",
                    description: "A React-Node based application, embedded with Flutter Mobile Client for real time video and audio transmission. It enables users to connect with drawing boards and provides  group chat functionalities. The data storage is done with Firebase and GCP for video recordings.",
                    techs: ["Flutter", "Agora", "Google Cloud", "Firebase", "Socket.io"],
                    gitLink: "",
                    bgPath: "/spotify.jpg"
                }, {
                    link: "",
                    color: "#5c16c5",
                    title: "Caring Made Easy: Seamlessly connecting Donors to Charities",
                    description: "A charity management website built using React and Node JS, designed to bridge the gap between potential donors and impoverished people in need by setting up login portals, and also blog posts, task manager and chat server to keep the site synergistic.",
                    techs: ["ReactJS", "NodeJS", "OAuth 2.0", "JWT", "Firebase"],
                    gitLink: "",
                    bgPath: "/spotify.jpg"
                }],
                de = [{
                    time: "July 2027 - TBD",
                    title: "Upcoming Software Engineer",
                    description: "",
                    org: "At Maang Company"
                }, {
                    time: "May 2020 - Present",
                    title: "Youtube creator",
                    description: "I am Extreme Passionate on Acting.",
                    org: "Love to make reels."
                }, {
                    time: "May 2018 - Aug 2020",
                    title: "Reals Creator",
                    description: " ",
                    org: "Tik tok and Moj"
                }],
                ue = [{
                    time: "2021 - Pursuing",
                    title: "Diploma, Computer Science and Engineering, Specialization in Communication and Computer Network",
                    description: "CGPA: 9.21",
                    org: "Aditya Polytechnic College,Surampalem "
                }, {
                    time: "2019 - 2021",
                    title: "High School",
                    description: "Percentage : 92.0%",
                    org: "M.C.HIGH.SCHOOL"
                }, {
                    time: "2009 - 2019",
                    title: " School",
                    description: "CGPA : 10.0",
                    org: "Sri Chaitnaya School"
                }];

            function me() {
                var e = function(e) {
                    var t = (0, r.useState)(!1),
                        n = t[0],
                        i = t[1],
                        o = function(t) {
                            i(t < e)
                        },
                        a = (0, r.useCallback)((function() {
                            o(window.innerWidth)
                        }));
                    return (0, r.useEffect)((function() {
                        return o(window.innerWidth), window.addEventListener("resize", a, !1),
                            function() {
                                window.removeEventListener("resize", a, !1)
                            }
                    }), []), n
                }(768);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)("section", {
                        children: [(0, i.jsx)("div", {
                            id: "experience",
                            className: "experience flex justify-center items-center w-full mt-8",
                            children: (0, i.jsxs)("div", {
                                className: "max-w-7xl w-full flex flex-col justify-center items-center z-[9999] mt-14 overflow-hidden",
                                children: [(0, i.jsx)(G, {}), (0, i.jsx)("div", {
                                    className: "timeline",
                                    children: de.map((function(t, n) {
                                        return (0, i.jsx)(Z, {
                                            time: t.time,
                                            title: t.title,
                                            description: t.description,
                                            org: t.org,
                                            index: n,
                                            md: e
                                        }, n)
                                    }))
                                })]
                            })
                        }), (0, i.jsx)("section", {
                            id: "achievements",
                            className: "flex justify-center items-center w-full mt-8",
                            children: (0, i.jsxs)("div", {
                                className: "max-w-7xl w-full flex flex-col justify-center items-center z-[9999] mt-14 overflow-hidden",
                                children: [(0, i.jsx)("h2", {
                                    className: "section-heading text-4xl sm:text-6xl text-white font-home font-bold pb-8",
                                    children: "Achievements"
                                }), (0, i.jsx)("h2", {
                                    className: "section-quote text-white font-home font-bold pb-8",
                                    style: {
                                        fontSize: 18
                                    },
                                    children: "Become a Warrior with resolute determination to triumph over all obstacles that hinder the path of your ambitions"
                                }), (0, i.jsx)("hr", {}), (0, i.jsx)(re, {})]
                            })
                        })]
                    }), (0, i.jsx)("section", {
                        id: "projects",
                        className: "flex justify-center items-center w-full mt-8",
                        children: (0, i.jsxs)("div", {
                            className: "max-w-7xl w-full flex flex-col justify-center items-center z-[9999] mt-14 overflow-hidden",
                            children: [(0, i.jsx)(W, {}), le.map((function(t, n) {
                                return (0, i.jsx)(B, {
                                    link: t.link,
                                    color: t.color,
                                    title: t.title,
                                    description: t.description,
                                    techs: t.techs,
                                    gitLink: t.gitLink,
                                    bgPath: t.bgPath,
                                    index: n,
                                    md: e
                                }, n)
                            }))]
                        })
                    }), (0, i.jsx)("section", {
                        children: (0, i.jsx)("div", {
                            id: "education",
                            className: "experience flex justify-center items-center w-full mt-8",
                            children: (0, i.jsxs)("div", {
                                className: "max-w-7xl w-full flex flex-col justify-center items-center z-[9999] mt-14 overflow-hidden",
                                children: [(0, i.jsx)(ce, {}), (0, i.jsx)("div", {
                                    className: "timeline",
                                    children: ue.map((function(t, n) {
                                        return (0, i.jsx)(ae, {
                                            time: t.time,
                                            title: t.title,
                                            description: t.description,
                                            org: t.org,
                                            index: n,
                                            md: e
                                        }, n)
                                    }))
                                })]
                            })
                        })
                    })]
                })
            }
            var fe = n(4051),
                he = n.n(fe),
                pe = {
                    hidden: {
                        scale: 0,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            duration: .6
                        }
                    }
                };

            function xe() {
                var e = (0, o._)(),
                    t = (0, s.YD)(),
                    n = t.ref,
                    c = t.inView,
                    l = (0, r.useState)(!1),
                    d = l[0],
                    u = l[1];
                return (0, r.useEffect)((function() {
                    c && (e.start("visible"), u(!0)), c || d || e.start("hidden")
                }), [e, c]), (0, i.jsxs)(a.E.div, {
                    ref: n,
                    variants: pe,
                    initial: "hidden",
                    animate: e,
                    children: [(0, i.jsx)("h1", {
                        className: "font-bold text-4xl sm:text-6xl",
                        children: "Send me a message!"
                    }), (0, i.jsx)("p", {
                        className: "text-xl sm:text-2xl py-4",
                        children: "Say hello, dear astronaut!"
                    })]
                })
            }

            function ge(e, t, n, i, r, o, a) {
                try {
                    var s = e[o](a),
                        c = s.value
                } catch (l) {
                    return void n(l)
                }
                s.done ? t(c) : Promise.resolve(c).then(i, r)
            }
            var ve = {
                hidden: {
                    opacity: 0
                },
                visible: {
                    opacity: 1,
                    transition: {
                        duration: .3
                    }
                }
            };

            function ye() {
                var e = (0, r.useState)(""),
                    t = e[0],
                    n = e[1],
                    o = (0, r.useState)(""),
                    s = o[0],
                    c = o[1],
                    l = (0, r.useState)(""),
                    d = l[0],
                    u = l[1],
                    m = (0, r.useState)("idle"),
                    f = m[0],
                    h = m[1],
                    p = function() {
                        var e, n = (e = he().mark((function e(n) {
                            return he().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n.preventDefault(), !(t && s && d)) {
                                            e.next = 7;
                                            break
                                        }
                                        return h("loading"), e.next = 5, fetch("/api/email", {
                                            method: "POST",
                                            headers: {
                                                Accept: "application/json",
                                                "Content-Type": "application/json;charset=UTF-8"
                                            },
                                            body: JSON.stringify({
                                                name: t,
                                                email: s,
                                                content: d
                                            })
                                        });
                                    case 5:
                                        200 == e.sent.status ? h("success") : h("error");
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })), function() {
                            var t = this,
                                n = arguments;
                            return new Promise((function(i, r) {
                                var o = e.apply(t, n);

                                function a(e) {
                                    ge(o, i, r, a, s, "next", e)
                                }

                                function s(e) {
                                    ge(o, i, r, a, s, "throw", e)
                                }
                                a(void 0)
                            }))
                        });
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }();
                return (0, i.jsxs)("section", {
                    id: "contact",
                    className: "mt-16 w-full flex flex-col items-center justify-center p-0",
                    children: [(0, i.jsxs)("div", {
                        className: "relative max-w-7xl text-white font-home p-2 sm:p-8 mb-24 z-[9999] flex flex-col justify-center items-center text-center",
                        children: [(0, i.jsx)("img", {
                            alt: "astronaut",
                            className: "",
                            style: {
                                marginBottom: 55
                            },
                            width: 185,
                            src: "kitty.jpg"
                        }), (0, i.jsx)(xe, {}), (0, i.jsxs)("form", {
                            onSubmit: p,
                            className: "flex w-full flex-col text-black font-sans relative mt-0 sm:mt-4",
                            children: [(0, i.jsx)("input", {
                                required: !0,
                                onFocus: function() {
                                    "error" == f && h("idle")
                                },
                                value: t,
                                onChange: function(e) {
                                    return n(e.target.value)
                                },
                                className: "outline-none w-full p-2 mt-2 border-2 rounded-md",
                                type: "text",
                                placeholder: "Your name"
                            }), (0, i.jsx)("input", {
                                onFocus: function() {
                                    "error" == f && h("idle")
                                },
                                value: s,
                                onChange: function(e) {
                                    return c(e.target.value)
                                },
                                className: "outline-none w-full p-2 mt-2 border-2 rounded-md",
                                type: "email",
                                placeholder: "Your email",
                                required: !0
                            }), (0, i.jsx)("textarea", {
                                onFocus: function() {
                                    "error" == f && h("idle")
                                },
                                required: !0,
                                value: d,
                                onChange: function(e) {
                                    return u(e.target.value)
                                },
                                className: "outline-none w-full p-2 mt-2 border-2 rounded-md resize-none",
                                type: "text",
                                placeholder: 'Hi, I think we need a redesign for our products at "Company ZWY". How soon can we discuss this?'
                            }), "idle" == f ? (0, i.jsx)("input", {
                                className: "mt-6 outline-none w-2/4 self-center p-2 border-2 rounded-md font-bold cursor-pointer text-white font-home hover:bg-white hover:text-black transition-all",
                                type: "submit",
                                placeholder: "Your email"
                            }) : "loading" == f ? (0, i.jsxs)(a.E.div, {
                                variants: ve,
                                initial: "hidden",
                                animate: "visible",
                                className: "lds-ring mt-6 self-center",
                                children: [(0, i.jsx)("div", {}), (0, i.jsx)("div", {}), (0, i.jsx)("div", {}), (0, i.jsx)("div", {})]
                            }) : "success" == f ? (0, i.jsx)(a.E.div, {
                                variants: ve,
                                initial: "hidden",
                                animate: "visible",
                                className: "mt-6 self-center justify-center text-center",
                                children: (0, i.jsx)("h2", {
                                    className: "text-white font-home font-semibold text-xl sm:text-2xl",
                                    children: "Message Sent!"
                                })
                            }) : (0, i.jsx)(a.E.div, {
                                variants: ve,
                                initial: "hidden",
                                animate: "visible",
                                className: "mt-6 self-center justify-center text-center",
                                children: (0, i.jsx)("h2", {
                                    className: "text-red-600 font-home font-semibold text-lg",
                                    children: "Error, try again :)"
                                })
                            })]
                        }), (0, i.jsx)("img", {
                            alt: "astronaut",
                            className: "order-2 md:order-1",
                            style: {
                                marginTop: 85
                            },
                            width: 280,
                            src: "kitty1.jpg"
                        })]
                    }), (0, i.jsx)("svg", {
                        className: "z-[9999] -mb-[1px]",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 1440 319",
                        children: (0, i.jsx)("path", {
                            fill: "#fff",
                            fillOpacity: "1",
                            d: "M0,0L36.9,0L73.8,32L110.8,256L147.7,32L184.6,96L221.5,224L258.5,96L295.4,32L332.3,224L369.2,288L406.2,160L443.1,256L480,320L516.9,128L553.8,64L590.8,192L627.7,96L664.6,192L701.5,0L738.5,160L775.4,128L812.3,256L849.2,128L886.2,256L923.1,160L960,0L996.9,128L1033.8,192L1070.8,128L1107.7,256L1144.6,96L1181.5,256L1218.5,192L1255.4,192L1292.3,160L1329.2,32L1366.2,96L1403.1,96L1440,32L1440,320L1403.1,320L1366.2,320L1329.2,320L1292.3,320L1255.4,320L1218.5,320L1181.5,320L1144.6,320L1107.7,320L1070.8,320L1033.8,320L996.9,320L960,320L923.1,320L886.2,320L849.2,320L812.3,320L775.4,320L738.5,320L701.5,320L664.6,320L627.7,320L590.8,320L553.8,320L516.9,320L480,320L443.1,320L406.2,320L369.2,320L332.3,320L295.4,320L258.5,320L221.5,320L184.6,320L147.7,320L110.8,320L73.8,320L36.9,320L0,320Z"
                        })
                    })]
                })
            }

            function be() {
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(F, {}), (0, i.jsx)(R, {}), (0, i.jsx)(D, {}), (0, i.jsx)(me, {}), (0, i.jsx)(ye, {})]
                })
            }
            var je = n(9008);

            function we() {
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(je.default, {
                        children: [(0, i.jsx)("title", {
                            children: "USHA SRI | Developer"
                        }), (0, i.jsx)("meta", {
                            name: "viewport",
                            content: "initial-scale=1.0, width=device-width"
                        }), (0, i.jsx)("meta", {
                            name: "description",
                            content: "Yuri's portfolio. I solve problems using code (Mostly web). Engineer from Somewhere and everywhere."
                        }), (0, i.jsx)("meta", {
                            "data-react-helmet": "true",
                            name: "keywords",
                            content: "web developer, web designer, software engineer, freelancer, programmer, platform builder, MVP specialist, automation, tech, Essex, London, contractor, consultant, SaaS builder, backend specialist, TypeScript, node.js, AMQP, TCP, HTTP, websockets, flutter, mobile, react, ios, android, AWS, gcloud, mentor, docker, k8s, kubernetes, lambda, functions, PWAs, architect"
                        })]
                    }), (0, i.jsx)(be, {})]
                })
            }
        },
        4601: function() {},
        2767: function() {},
        8251: function() {},
        7677: function() {},
        7324: function() {}
    },
    function(e) {
        e.O(0, [228, 445, 13, 824, 586, 774, 888, 179], (function() {
            return t = 8581, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);