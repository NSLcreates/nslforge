(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [26489], {

        /***/
        564722: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var TPb = function(a) {
                        var b = ["rgb(255, 255, 255)", "rgb(13, 18, 22)"];
                        try {
                            const c = __c.is(a),
                                d = c instanceof __c.js ? c.Kp() : c;
                            return __c.Xq(b, e => {
                                e = __c.is(e);
                                e = e instanceof __c.js ? __c.DG(e, d) : e;
                                return Math.abs(__c.ys(e, d))
                            })
                        } catch (c) {
                            if (c instanceof Error && c.message === `unrecognized color: ${b[0]}`) return b[0];
                            throw c;
                        }
                    },
                    UPb = function(a) {
                        return a.trim().split(/\s+/, 2).map(b => __c.Cr(b)[0]).join("")
                    },
                    XPb = function(a = "") {
                        a = VPb(a);
                        a = Math.floor(a() * WPb.length);
                        return WPb[a]
                    },
                    YPb = __webpack_require__(875604),
                    ZPb =
                    YPb.memo,
                    $Pb = YPb.useId;
                var VPb = __webpack_require__(503216);
                var aQb = __webpack_require__(443763),
                    qZ = aQb.jsx,
                    bQb = aQb.jsxs;
                var cQb = __webpack_require__,
                    dQb = cQb(993864),
                    rZ = cQb.n_x(dQb)();
                __c.eQb = {
                    xxsmall: 2,
                    xsmall: 3,
                    small: 4,
                    medium: 5,
                    large: 6,
                    xlarge: 8,
                    xxlarge: 10,
                    xxxlarge: 20
                };
                var WPb = ["rgb(0, 126, 182)", "rgb(248, 72, 86)", "rgb(251, 190, 40)", "rgb(68, 133, 25)", "rgb(125, 42, 232)"].map(a => {
                    try {
                        return __c.ks(__c.as(a))
                    } catch (b) {
                        return "#8e8e8e"
                    }
                });
                var fQb = ZPb(a => {
                    const {
                        name: b,
                        borderColor: c,
                        backgroundColor: d,
                        rR: e,
                        role: f,
                        ariaLabel: g,
                        className: h,
                        style: k,
                        shape: l = "circle",
                        ...m
                    } = a;
                    if (d) {
                        a = __c.is(d);
                        var n = a instanceof __c.js ? __c.ls(a) : __c.ks(a)
                    } else n = e ? XPb(e) : "#8e8e8e";
                    var p = $Pb();
                    switch (l) {
                        case "circle":
                            a = qZ("defs", {
                                children: qZ("clipPath", {
                                    id: p,
                                    children: qZ("circle", {
                                        id: `${p}-path`,
                                        cx: "50%",
                                        cy: "50%",
                                        r: "50%"
                                    })
                                })
                            });
                            break;
                        case "square":
                            a = qZ("defs", {
                                children: qZ("clipPath", {
                                    id: p,
                                    children: qZ("rect", {
                                        id: `${p}-path`,
                                        width: "100%",
                                        height: "100%"
                                    })
                                })
                            });
                            break;
                        default:
                            throw new __c.E(l);
                    }
                    switch (l) {
                        case "circle":
                            p = qZ("circle", {
                                cx: "50%",
                                cy: "50%",
                                fill: n,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${p})`,
                                stroke: c,
                                className: rZ("yCT70Q", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        case "square":
                            p = qZ("rect", {
                                width: "100%",
                                height: "100%",
                                fill: n,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${p})`,
                                stroke: c,
                                className: rZ("cUFFRA", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        default:
                            throw new __c.E(l);
                    }
                    n = TPb(n);
                    return qZ("span", {
                        role: f,
                        "aria-label": g,
                        className: rZ("VaW8_A", {
                            cUFFRA: l === "square"
                        }),
                        style: {
                            "--pDK9Gw": n
                        },
                        ...m,
                        children: bQb("svg", {
                            className: h,
                            style: k,
                            children: [a, p, qZ("text", {
                                x: "50%",
                                y: "50%",
                                "aria-hidden": "true",
                                textAnchor: "middle",
                                fill: n,
                                fontWeight: "500",
                                fontSize: "50%",
                                dominantBaseline: "central",
                                letterSpacing: "0.01rem",
                                dy: "-0.04em",
                                children: UPb(b).toUpperCase()
                            })]
                        })
                    })
                });
                var gQb = __webpack_require__.p + "images/5c0e58707f218438bf0f73d47db2ce50.svg";
                var hQb = ({
                    borderColor: a,
                    OVa: b,
                    ariaLabel: c,
                    className: d,
                    style: e,
                    role: f,
                    ...g
                }) => qZ("span", {
                    className: rZ(d, {
                        JwH6AA: a,
                        QJpRHw: !a
                    }),
                    style: {
                        backgroundImage: `url(${b})`,
                        borderColor: a && `${a}`,
                        ...e
                    },
                    role: f,
                    "aria-label": f === "img" ? c : void 0,
                    ...g
                });
                __c.iQb = ({
                    name: a,
                    y7a: b,
                    ariaLabel: c,
                    rR: d,
                    backgroundColor: e,
                    borderColor: f,
                    Lq: g,
                    className: h,
                    style: k,
                    shape: l = "circle",
                    ...m
                }) => {
                    h = rZ("n8XGZg", "f4qJng fs-hide", h, {
                        P3N3Pw: l === "square"
                    });
                    b = b || "presentation";
                    return g ? qZ(hQb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        OVa: g,
                        ariaLabel: c,
                        role: b,
                        ...m
                    }) : a ? qZ(fQb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        name: a,
                        shape: l,
                        rR: d,
                        backgroundColor: e,
                        role: b,
                        ariaLabel: c,
                        ...m
                    }) : qZ(hQb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        OVa: gQb,
                        ariaLabel: c,
                        role: b,
                        ...m
                    })
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/332f74dcc3c1468a.js.map