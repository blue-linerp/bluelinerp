(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        2775: function(module, __unused_webpack_exports, __webpack_require__) {
            module = __webpack_require__.nmd(module),
                function _f(self) {
                    "use strict";
                    let Y;
                    try {
                        module && (self = module)
                    } catch (e) {}

                    function u(ee) {
                        return void 0 === ee || ee
                    }

                    function aa(ee) {
                        let et = Array(ee);
                        for (let en = 0; en < ee; en++) et[en] = v();
                        return et
                    }

                    function v() {
                        return Object.create(null)
                    }

                    function ba(ee, et) {
                        return et.length - ee.length
                    }

                    function x(ee) {
                        return "string" == typeof ee
                    }

                    function C(ee) {
                        return "object" == typeof ee
                    }

                    function D(ee) {
                        return "function" == typeof ee
                    }

                    function ca(ee, et) {
                        var en = da;
                        if (ee && (et && (ee = E(ee, et)), this.H && (ee = E(ee, this.H)), this.J && 1 < ee.length && (ee = E(ee, this.J)), en || "" === en) && (ee = ee.split(en), this.filter)) {
                            et = this.filter, en = ee.length;
                            let er = [];
                            for (let ei = 0, es = 0; ei < en; ei++) {
                                let en = ee[ei];
                                en && !et[en] && (er[es++] = en)
                            }
                            ee = er
                        }
                        return ee
                    }
                    self._factory = _f;
                    let da = /[\p{Z}\p{S}\p{P}\p{C}]+/u,
                        ea = /[\u0300-\u036f]/g;

                    function fa(ee, et) {
                        let en = Object.keys(ee),
                            er = en.length,
                            ei = [],
                            es = "",
                            eo = 0;
                        for (let eu = 0, ec, ed; eu < er; eu++)(ed = ee[ec = en[eu]]) ? (ei[eo++] = F(et ? "(?!\\b)" + ec + "(\\b|_)" : ec), ei[eo++] = ed) : es += (es ? "|" : "") + ec;
                        return es && (ei[eo++] = F(et ? "(?!\\b)(" + es + ")(\\b|_)" : "(" + es + ")"), ei[eo] = ""), ei
                    }

                    function E(ee, et) {
                        for (let en = 0, er = et.length; en < er && (ee = ee.replace(et[en], et[en + 1])); en += 2);
                        return ee
                    }

                    function F(ee) {
                        return RegExp(ee, "g")
                    }

                    function ha(ee) {
                        let et = "",
                            en = "";
                        for (let er = 0, ei = ee.length, es; er < ei; er++)(es = ee[er]) !== en && (et += en = es);
                        return et
                    }
                    var t, ja = {
                        encode: ia,
                        F: !1,
                        G: ""
                    };

                    function ia(ee) {
                        return ca.call(this, ("" + ee).toLowerCase(), !1)
                    }
                    let ka = {},
                        G = {};

                    function la(ee) {
                        I(ee, "add"), I(ee, "append"), I(ee, "search"), I(ee, "update"), I(ee, "remove")
                    }

                    function I(ee, et) {
                        ee[et + "Async"] = function() {
                            let ee;
                            let en = this,
                                er = arguments;
                            var ei = er[er.length - 1];
                            return D(ei) && (ee = ei, delete er[er.length - 1]), ei = new Promise(function(ee) {
                                setTimeout(function() {
                                    en.async = !0;
                                    let ei = en[et].apply(en, er);
                                    en.async = !1, ee(ei)
                                })
                            }), ee ? (ei.then(ee), this) : ei
                        }
                    }

                    function ma(ee, et, en, er) {
                        let ei = ee.length,
                            es = [],
                            eo, eu, ec = 0;
                        er && (er = []);
                        for (let ed = ei - 1; 0 <= ed; ed--) {
                            let ep = ee[ed],
                                eh = ep.length,
                                ef = v(),
                                em = !eo;
                            for (let ee = 0; ee < eh; ee++) {
                                let eh = ep[ee],
                                    ex = eh.length;
                                if (ex)
                                    for (let ee = 0, ep, eg; ee < ex; ee++)
                                        if (eg = eh[ee], eo) {
                                            if (eo[eg]) {
                                                if (!ed) {
                                                    if (en) en--;
                                                    else if (es[ec++] = eg, ec === et) return es
                                                }(ed || er) && (ef[eg] = 1), em = !0
                                            }
                                            if (er && (ep = (eu[eg] || 0) + 1, eu[eg] = ep, ep < ei)) {
                                                let ee = er[ep - 2] || (er[ep - 2] = []);
                                                ee[ee.length] = eg
                                            }
                                        } else ef[eg] = 1
                            }
                            if (er) eo || (eu = ef);
                            else if (!em) return [];
                            eo = ef
                        }
                        if (er)
                            for (let ee = er.length - 1, ei, eu; 0 <= ee; ee--) {
                                eu = (ei = er[ee]).length;
                                for (let ee = 0, er; ee < eu; ee++)
                                    if (!eo[er = ei[ee]]) {
                                        if (en) en--;
                                        else if (es[ec++] = er, ec === et) return es;
                                        eo[er] = 1
                                    }
                            }
                        return es
                    }

                    function na(ee, et) {
                        let en = v(),
                            er = v(),
                            ei = [];
                        for (let et = 0; et < ee.length; et++) en[ee[et]] = 1;
                        for (let ee = 0, es; ee < et.length; ee++) {
                            es = et[ee];
                            for (let ee = 0, et; ee < es.length; ee++) en[et = es[ee]] && !er[et] && (er[et] = 1, ei[ei.length] = et)
                        }
                        return ei
                    }

                    function J(ee) {
                        this.l = !0 !== ee && ee, this.cache = v(), this.h = []
                    }

                    function oa(ee, et, en) {
                        C(ee) && (ee = ee.query);
                        let er = this.cache.get(ee);
                        return er || (er = this.search(ee, et, en), this.cache.set(ee, er)), er
                    }
                    J.prototype.set = function(ee, et) {
                        if (!this.cache[ee]) {
                            var en = this.h.length;
                            for (en === this.l ? delete this.cache[this.h[en - 1]] : en++, --en; 0 < en; en--) this.h[en] = this.h[en - 1];
                            this.h[0] = ee
                        }
                        this.cache[ee] = et
                    }, J.prototype.get = function(ee) {
                        let et = this.cache[ee];
                        if (this.l && et && (ee = this.h.indexOf(ee))) {
                            let et = this.h[ee - 1];
                            this.h[ee - 1] = this.h[ee], this.h[ee] = et
                        }
                        return et
                    };
                    let qa = {
                        memory: {
                            charset: "latin:extra",
                            D: 3,
                            B: 4,
                            m: !1
                        },
                        performance: {
                            D: 3,
                            B: 3,
                            s: !1,
                            context: {
                                depth: 2,
                                D: 1
                            }
                        },
                        match: {
                            charset: "latin:extra",
                            G: "reverse"
                        },
                        score: {
                            charset: "latin:advanced",
                            D: 20,
                            B: 3,
                            context: {
                                depth: 3,
                                D: 9
                            }
                        },
                        default: {}
                    };

                    function ra(ee, et, en, er, ei, es, eo) {
                        setTimeout(function() {
                            let eu = ee(en ? en + "." + er : er, JSON.stringify(eo));
                            eu && eu.then ? eu.then(function() {
                                et.export(ee, et, en, ei, es + 1)
                            }) : et.export(ee, et, en, ei, es + 1)
                        })
                    }

                    function K(ee, et) {
                        if (!(this instanceof K)) return new K(ee);
                        if (ee) {
                            x(ee) ? ee = qa[ee] : (en = ee.preset) && (ee = Object.assign({}, en[en], ee)), en = ee.charset;
                            var en, er = ee.lang;
                            x(en) && (-1 === en.indexOf(":") && (en += ":default"), en = G[en]), x(er) && (er = ka[er])
                        } else ee = {};
                        let ei, es, eo = ee.context || {};
                        if (this.encode = ee.encode || en && en.encode || ia, this.register = et || v(), this.D = ei = ee.resolution || 9, this.G = et = en && en.G || ee.tokenize || "strict", this.depth = "strict" === et && eo.depth, this.l = u(eo.bidirectional), this.s = es = u(ee.optimize), this.m = u(ee.fastupdate), this.B = ee.minlength || 1, this.C = ee.boost, this.map = es ? aa(ei) : v(), this.A = ei = eo.resolution || 1, this.h = es ? aa(ei) : v(), this.F = en && en.F || ee.rtl, this.H = (et = ee.matcher || er && er.H) && fa(et, !1), this.J = (et = ee.stemmer || er && er.J) && fa(et, !0), en = et = ee.filter || er && er.filter) {
                            en = et, er = v();
                            for (let ee = 0, et = en.length; ee < et; ee++) er[en[ee]] = 1;
                            en = er
                        }
                        this.filter = en, this.cache = (et = ee.cache) && new J(et)
                    }

                    function L(ee, et, en, er, ei) {
                        return en && 1 < ee ? et + (er || 0) <= ee ? en + (ei || 0) : (ee - 1) / (et + (er || 0)) * (en + (ei || 0)) + 1 | 0 : 0
                    }

                    function M(ee, et, en, er, ei, es, eo) {
                        let eu = eo ? ee.h : ee.map;
                        (!et[en] || eo && !et[en][eo]) && (ee.s && (eu = eu[er]), eo ? ((et = et[en] || (et[en] = v()))[eo] = 1, eu = eu[eo] || (eu[eo] = v())) : et[en] = 1, eu = eu[en] || (eu[en] = []), ee.s || (eu = eu[er] || (eu[er] = [])), es && eu.includes(ei) || (eu[eu.length] = ei, ee.m && ((ee = ee.register[ei] || (ee.register[ei] = []))[ee.length] = eu)))
                    }

                    function sa(ee, et, en, er, ei, es, eo, eu) {
                        let ec = [],
                            ed = eu ? ee.h : ee.map;
                        if (ee.s || (ed = ua(ed, eo, eu, ee.l)), ed) {
                            let en = 0,
                                ep = Math.min(ed.length, eu ? ee.A : ee.D);
                            for (let et = 0, eh = 0, ef, em; et < ep && (!(ef = ed[et]) || (ee.s && (ef = ua(ef, eo, eu, ee.l)), ei && ef && es && ((em = ef.length) <= ei ? (ei -= em, ef = null) : (ef = ef.slice(ei), ei = 0)), !ef || (ec[en++] = ef, !es || !((eh += ef.length) >= er)))); et++);
                            if (en) return es ? ta(ec, er, 0) : void(et[et.length] = ec)
                        }
                        return !en && ec
                    }

                    function ta(ee, et, en) {
                        return ee = 1 === ee.length ? ee[0] : [].concat.apply([], ee), en || ee.length > et ? ee.slice(en, en + et) : ee
                    }

                    function ua(ee, et, en, er) {
                        return ee = en ? (ee = ee[(er = er && et > en) ? et : en]) && ee[er ? en : et] : ee[et]
                    }

                    function N(ee, et, en, er, ei) {
                        let es = 0;
                        if (ee.constructor === Array) {
                            if (ei) - 1 !== (et = ee.indexOf(et)) ? 1 < ee.length && (ee.splice(et, 1), es++) : es++;
                            else {
                                ei = Math.min(ee.length, en);
                                for (let eo = 0, eu; eo < ei; eo++)(eu = ee[eo]) && (es = N(eu, et, en, er, ei), er || es || delete ee[eo])
                            }
                        } else
                            for (let eo in ee)(es = N(ee[eo], et, en, er, ei)) || delete ee[eo];
                        return es
                    }

                    function va(ee) {
                        ee = ee.data;
                        var et = self._index;
                        let en = ee.args;
                        var er = ee.task;
                        "init" === er ? (er = ee.options || {}, ee = ee.factory, et = er.encode, er.cache = !1, et && 0 === et.indexOf("function") && (er.encode = Function("return " + et)()), ee ? (Function("return " + ee)()(self), self._index = new self.FlexSearch.Index(er), delete self.FlexSearch) : self._index = new K(er)) : (ee = ee.id, et = et[er].apply(et, en), postMessage("search" === er ? {
                            id: ee,
                            msg: et
                        } : {
                            id: ee
                        }))
                    }
                    t = K.prototype, t.append = function(ee, et) {
                        return this.add(ee, et, !0)
                    }, t.add = function(ee, et, en, er) {
                        if (et && (ee || 0 === ee)) {
                            if (!er && !en && this.register[ee]) return this.update(ee, et);
                            if (er = (et = this.encode(et)).length) {
                                let ed = v(),
                                    ep = v(),
                                    eh = this.depth,
                                    ef = this.D;
                                for (let em = 0; em < er; em++) {
                                    let ex = et[this.F ? er - 1 - em : em];
                                    var ei = ex.length;
                                    if (ex && ei >= this.B && (eh || !ep[ex])) {
                                        var es = L(ef, er, em),
                                            eo = "";
                                        switch (this.G) {
                                            case "full":
                                                if (2 < ei) {
                                                    for (es = 0; es < ei; es++)
                                                        for (var eu = ei; eu > es; eu--)
                                                            if (eu - es >= this.B) {
                                                                var ec = L(ef, er, em, ei, es);
                                                                M(this, ep, eo = ex.substring(es, eu), ec, ee, en)
                                                            }
                                                    break
                                                }
                                            case "reverse":
                                                if (1 < ei) {
                                                    for (eu = ei - 1; 0 < eu; eu--)(eo = ex[eu] + eo).length >= this.B && M(this, ep, eo, L(ef, er, em, ei, eu), ee, en);
                                                    eo = ""
                                                }
                                            case "forward":
                                                if (1 < ei) {
                                                    for (eu = 0; eu < ei; eu++)(eo += ex[eu]).length >= this.B && M(this, ep, eo, es, ee, en);
                                                    break
                                                }
                                            default:
                                                if (this.C && (es = Math.min(es / this.C(et, ex, em) | 0, ef - 1)), M(this, ep, ex, es, ee, en), eh && 1 < er && em < er - 1) {
                                                    for (ei = v(), eo = this.A, es = ex, eu = Math.min(eh + 1, er - em), ei[es] = 1, ec = 1; ec < eu; ec++)
                                                        if ((ex = et[this.F ? er - 1 - em - ec : em + ec]) && ex.length >= this.B && !ei[ex]) {
                                                            ei[ex] = 1;
                                                            let et = this.l && ex > es;
                                                            M(this, ed, et ? es : ex, L(eo + (er / 2 > eo ? 0 : 1), er, em, eu - 1, ec - 1), ee, en, et ? ex : es)
                                                        }
                                                }
                                        }
                                    }
                                }
                                this.m || (this.register[ee] = 1)
                            }
                        }
                        return this
                    }, t.search = function(ee, et, en) {
                        let er, ei, es;
                        en || (!et && C(ee) ? ee = (en = ee).query : C(et) && (en = et));
                        let eo = [],
                            eu, ec, ed = 0;
                        if (en) {
                            ee = en.query || ee, et = en.limit, ed = en.offset || 0;
                            var ep = en.context;
                            ec = en.suggest
                        }
                        if (ee && 1 < (eu = (ee = this.encode("" + ee)).length)) {
                            en = v();
                            var eh = [];
                            for (let et = 0, er = 0, ei; et < eu; et++)
                                if ((ei = ee[et]) && ei.length >= this.B && !en[ei]) {
                                    if (!this.s && !ec && !this.map[ei]) return eo;
                                    eh[er++] = ei, en[ei] = 1
                                }
                            eu = (ee = eh).length
                        }
                        if (!eu) return eo;
                        for (et || (et = 100), ep = this.depth && 1 < eu && !1 !== ep, en = 0, ep ? (er = ee[0], en = 1) : 1 < eu && ee.sort(ba); en < eu; en++) {
                            if (es = ee[en], ep ? (ei = sa(this, eo, ec, et, ed, 2 === eu, es, er), ec && !1 === ei && eo.length || (er = es)) : ei = sa(this, eo, ec, et, ed, 1 === eu, es), ei) return ei;
                            if (ec && en === eu - 1) {
                                if (!(eh = eo.length)) {
                                    if (ep) {
                                        ep = 0, en = -1;
                                        continue
                                    }
                                    return eo
                                }
                                if (1 === eh) return ta(eo[0], et, ed)
                            }
                        }
                        return ma(eo, et, ed, ec)
                    }, t.contain = function(ee) {
                        return !!this.register[ee]
                    }, t.update = function(ee, et) {
                        return this.remove(ee).add(ee, et)
                    }, t.remove = function(ee, et) {
                        let en = this.register[ee];
                        if (en) {
                            if (this.m)
                                for (let et = 0, er; et < en.length; et++)(er = en[et]).splice(er.indexOf(ee), 1);
                            else N(this.map, ee, this.D, this.s), this.depth && N(this.h, ee, this.A, this.s);
                            if (et || delete this.register[ee], this.cache) {
                                et = this.cache;
                                for (let en = 0, er; en < et.h.length; en++) er = et.h[en], et.cache[er].includes(ee) && (et.h.splice(en--, 1), delete et.cache[er])
                            }
                        }
                        return this
                    }, t.searchCache = oa, t.export = function(ee, et, en, er, ei) {
                        let es, eo;
                        switch (ei || (ei = 0)) {
                            case 0:
                                if (es = "reg", this.m)
                                    for (let ee in eo = v(), this.register) eo[ee] = 1;
                                else eo = this.register;
                                break;
                            case 1:
                                es = "cfg", eo = {
                                    doc: 0,
                                    opt: this.s ? 1 : 0
                                };
                                break;
                            case 2:
                                es = "map", eo = this.map;
                                break;
                            case 3:
                                es = "ctx", eo = this.h;
                                break;
                            default:
                                return
                        }
                        return ra(ee, et || this, en, es, er, ei, eo), !0
                    }, t.import = function(ee, et) {
                        if (et) switch (x(et) && (et = JSON.parse(et)), ee) {
                            case "cfg":
                                this.s = !!et.opt;
                                break;
                            case "reg":
                                this.m = !1, this.register = et;
                                break;
                            case "map":
                                this.map = et;
                                break;
                            case "ctx":
                                this.h = et
                        }
                    }, la(K.prototype);
                    let wa = 0;

                    function O(ee) {
                        var et;
                        if (!(this instanceof O)) return new O(ee);
                        ee ? D(et = ee.encode) && (ee.encode = et.toString()) : ee = {}, (et = (self || window)._factory) && (et = et.toString());
                        let en = "undefined" == typeof window && self.exports,
                            er = this;
                        this.o = xa(et, en, ee.worker), this.h = v(), this.o && (en ? this.o.on("message", function(ee) {
                            er.h[ee.id](ee.msg), delete er.h[ee.id]
                        }) : this.o.onmessage = function(ee) {
                            ee = ee.data, er.h[ee.id](ee.msg), delete er.h[ee.id]
                        }, this.o.postMessage({
                            task: "init",
                            factory: et,
                            options: ee
                        }))
                    }

                    function P(ee) {
                        O.prototype[ee] = O.prototype[ee + "Async"] = function() {
                            let et;
                            let en = this,
                                er = [].slice.call(arguments);
                            var ei = er[er.length - 1];
                            return D(ei) && (et = ei, er.splice(er.length - 1, 1)), ei = new Promise(function(et) {
                                setTimeout(function() {
                                    en.h[++wa] = et, en.o.postMessage({
                                        task: ee,
                                        id: wa,
                                        args: er
                                    })
                                })
                            }), et ? (ei.then(et), this) : ei
                        }
                    }

                    function xa(a, b, c) {
                        let d;
                        try {
                            d = b ? eval('new (require("worker_threads")["Worker"])("../dist/node/node.js")') : a ? new Worker(URL.createObjectURL(new Blob(["onmessage=" + va.toString()], {
                                type: "text/javascript"
                            }))) : new Worker(x(c) ? c : "worker/worker.js", {
                                type: "module"
                            })
                        } catch (e) {}
                        return d
                    }

                    function Q(ee) {
                        if (!(this instanceof Q)) return new Q(ee);
                        var et, en = ee.document || ee.doc || ee;
                        this.K = [], this.h = [], this.A = [], this.register = v(), this.key = (et = en.key || en.id) && S(et, this.A) || "id", this.m = u(ee.fastupdate), this.C = (et = en.store) && !0 !== et && [], this.store = et && v(), this.I = (et = en.tag) && S(et, this.A), this.l = et && v(), this.cache = (et = ee.cache) && new J(et), ee.cache = !1, this.o = ee.worker, this.async = !1, et = v();
                        let er = en.index || en.field || en;
                        x(er) && (er = [er]);
                        for (let en = 0, ei, es; en < er.length; en++) x(ei = er[en]) || (es = ei, ei = ei.field), es = C(es) ? Object.assign({}, ee, es) : ee, this.o && (et[ei] = new O(es), et[ei].o || (this.o = !1)), this.o || (et[ei] = new K(es, this.register)), this.K[en] = S(ei, this.A), this.h[en] = ei;
                        if (this.C)
                            for (x(ee = en.store) && (ee = [ee]), en = 0; en < ee.length; en++) this.C[en] = S(ee[en], this.A);
                        this.index = et
                    }

                    function S(ee, et) {
                        let en = ee.split(":"),
                            er = 0;
                        for (let ei = 0; ei < en.length; ei++) 0 <= (ee = en[ei]).indexOf("[]") && (ee = ee.substring(0, ee.length - 2)) && (et[er] = !0), ee && (en[er++] = ee);
                        return er < en.length && (en.length = er), 1 < er ? en : en[0]
                    }

                    function T(ee, et) {
                        if (x(et)) ee = ee[et];
                        else
                            for (let en = 0; ee && en < et.length; en++) ee = ee[et[en]];
                        return ee
                    }

                    function U(ee, et, en, er, ei) {
                        if (ee = ee[ei], er === en.length - 1) et[ei] = ee;
                        else if (ee) {
                            if (ee.constructor === Array)
                                for (et = et[ei] = Array(ee.length), ei = 0; ei < ee.length; ei++) U(ee, et, en, er, ei);
                            else et = et[ei] || (et[ei] = v()), ei = en[++er], U(ee, et, en, er, ei)
                        }
                    }

                    function V(ee, et, en, er, ei, es, eo, eu) {
                        if (ee = ee[eo]) {
                            if (er === et.length - 1) {
                                if (ee.constructor === Array) {
                                    if (en[er]) {
                                        for (et = 0; et < ee.length; et++) ei.add(es, ee[et], !0, !0);
                                        return
                                    }
                                    ee = ee.join(" ")
                                }
                                ei.add(es, ee, eu, !0)
                            } else if (ee.constructor === Array)
                                for (eo = 0; eo < ee.length; eo++) V(ee, et, en, er, ei, es, eo, eu);
                            else eo = et[++er], V(ee, et, en, er, ei, es, eo, eu)
                        }
                    }

                    function ya(ee, et, en, er) {
                        let ei = this.l[ee],
                            es = ei && ei.length - en;
                        if (es && 0 < es) return (es > et || en) && (ei = ei.slice(en, en + et)), er && (ei = za.call(this, ei)), {
                            tag: ee,
                            result: ei
                        }
                    }

                    function za(ee) {
                        let et = Array(ee.length);
                        for (let en = 0, er; en < ee.length; en++) er = ee[en], et[en] = {
                            id: er,
                            doc: this.store[er]
                        };
                        return et
                    }
                    P("add"), P("append"), P("search"), P("update"), P("remove"), t = Q.prototype, t.add = function(ee, et, en) {
                        if (C(ee) && (ee = T(et = ee, this.key)), et && (ee || 0 === ee)) {
                            if (!en && this.register[ee]) return this.update(ee, et);
                            for (let er = 0, ei, es; er < this.h.length; er++) es = this.h[er], x(ei = this.K[er]) && (ei = [ei]), V(et, ei, this.A, 0, this.index[es], ee, ei[0], en);
                            if (this.I) {
                                let er = T(et, this.I),
                                    ei = v();
                                x(er) && (er = [er]);
                                for (let et = 0, es, eo; et < er.length; et++)
                                    if (!ei[es = er[et]] && (ei[es] = 1, eo = this.l[es] || (this.l[es] = []), !en || !eo.includes(ee)) && (eo[eo.length] = ee, this.m)) {
                                        let et = this.register[ee] || (this.register[ee] = []);
                                        et[et.length] = eo
                                    }
                            }
                            if (this.store && (!en || !this.store[ee])) {
                                let en;
                                if (this.C) {
                                    en = v();
                                    for (let ee = 0, er; ee < this.C.length; ee++) x(er = this.C[ee]) ? en[er] = et[er] : U(et, en, er, 0, er[0])
                                }
                                this.store[ee] = en || et
                            }
                        }
                        return this
                    }, t.append = function(ee, et) {
                        return this.add(ee, et, !0)
                    }, t.update = function(ee, et) {
                        return this.remove(ee).add(ee, et)
                    }, t.remove = function(ee) {
                        if (C(ee) && (ee = T(ee, this.key)), this.register[ee]) {
                            for (var et = 0; et < this.h.length && (this.index[this.h[et]].remove(ee, !this.o), !this.m); et++);
                            if (this.I && !this.m)
                                for (let en in this.l) {
                                    et = this.l[en];
                                    let er = et.indexOf(ee); - 1 !== er && (1 < et.length ? et.splice(er, 1) : delete this.l[en])
                                }
                            this.store && delete this.store[ee], delete this.register[ee]
                        }
                        return this
                    }, t.search = function(ee, et, en, er) {
                        en || (!et && C(ee) ? (en = ee, ee = "") : C(et) && (en = et, et = 0));
                        let ei = [],
                            es = [],
                            eo, eu, ec, ed, ep, eh, ef = 0;
                        if (en) {
                            if (en.constructor === Array) ec = en, en = null;
                            else {
                                if (ee = en.query || ee, ec = (eo = en.pluck) || en.index || en.field, ed = en.tag, eu = this.store && en.enrich, ep = "and" === en.bool, et = en.limit || et || 100, eh = en.offset || 0, ed && (x(ed) && (ed = [ed]), !ee)) {
                                    for (let ee = 0, en; ee < ed.length; ee++)(en = ya.call(this, ed[ee], et, eh, eu)) && (ei[ei.length] = en, ef++);
                                    return ef ? ei : []
                                }
                                x(ec) && (ec = [ec])
                            }
                        }
                        ec || (ec = this.h), ep = ep && (1 < ec.length || ed && 1 < ed.length);
                        let em = !er && (this.o || this.async) && [];
                        for (let eo = 0, eu, ex, eg; eo < ec.length; eo++) {
                            let ev;
                            if (x(ex = ec[eo]) || (ex = (ev = ex).field, ee = ev.query || ee, et = ev.limit || et), em) em[eo] = this.index[ex].searchAsync(ee, et, ev || en);
                            else {
                                if (eg = (eu = er ? er[eo] : this.index[ex].search(ee, et, ev || en)) && eu.length, ed && eg) {
                                    let ee = [],
                                        en = 0;
                                    ep && (ee[0] = [eu]);
                                    for (let et = 0, er, ei; et < ed.length; et++) er = ed[et], (eg = (ei = this.l[er]) && ei.length) && (en++, ee[ee.length] = ep ? [ei] : ei);
                                    en && (eg = (eu = ep ? ma(ee, et || 100, eh || 0) : na(eu, ee)).length)
                                }
                                if (eg) es[ef] = ex, ei[ef++] = eu;
                                else if (ep) return []
                            }
                        }
                        if (em) {
                            let er = this;
                            return new Promise(function(ei) {
                                Promise.all(em).then(function(es) {
                                    ei(er.search(ee, et, en, es))
                                })
                            })
                        }
                        if (!ef) return [];
                        if (eo && (!eu || !this.store)) return ei[0];
                        for (let ee = 0, et; ee < es.length; ee++) {
                            if ((et = ei[ee]).length && eu && (et = za.call(this, et)), eo) return et;
                            ei[ee] = {
                                field: es[ee],
                                result: et
                            }
                        }
                        return ei
                    }, t.contain = function(ee) {
                        return !!this.register[ee]
                    }, t.get = function(ee) {
                        return this.store[ee]
                    }, t.set = function(ee, et) {
                        return this.store[ee] = et, this
                    }, t.searchCache = oa, t.export = function(ee, et, en, er, ei) {
                        if (ei || (ei = 0), er || (er = 0), er < this.h.length) {
                            let en = this.h[er],
                                es = this.index[en];
                            et = this, setTimeout(function() {
                                es.export(ee, et, ei ? en : "", er, ei++) || (er++, ei = 1, et.export(ee, et, en, er, ei))
                            })
                        } else {
                            let et, es;
                            switch (ei) {
                                case 1:
                                    et = "tag", es = this.l;
                                    break;
                                case 2:
                                    et = "store", es = this.store;
                                    break;
                                default:
                                    return
                            }
                            ra(ee, this, en, et, er, ei, es)
                        }
                    }, t.import = function(ee, et) {
                        if (et) switch (x(et) && (et = JSON.parse(et)), ee) {
                            case "tag":
                                this.l = et;
                                break;
                            case "reg":
                                this.m = !1, this.register = et;
                                for (let ee = 0, en; ee < this.h.length; ee++)(en = this.index[this.h[ee]]).register = et, en.m = !1;
                                break;
                            case "store":
                                this.store = et;
                                break;
                            default:
                                ee = ee.split(".");
                                let en = ee[0];
                                ee = ee[1], en && ee && this.index[en].import(ee, et)
                        }
                    }, la(Q.prototype);
                    var Ba = {
                        encode: Aa,
                        F: !1,
                        G: ""
                    };
                    let Ca = [F("[\xe0\xe1\xe2\xe3\xe4\xe5]"), "a", F("[\xe8\xe9\xea\xeb]"), "e", F("[\xec\xed\xee\xef]"), "i", F("[\xf2\xf3\xf4\xf5\xf6ő]"), "o", F("[\xf9\xfa\xfb\xfcű]"), "u", F("[\xfdŷ\xff]"), "y", F("\xf1"), "n", F("[\xe7c]"), "k", F("\xdf"), "s", F(" & "), " and "];

                    function Aa(ee) {
                        var et = ee = "" + ee;
                        return et.normalize && (et = et.normalize("NFD").replace(ea, "")), ca.call(this, et.toLowerCase(), !ee.normalize && Ca)
                    }
                    var Ea = {
                        encode: Da,
                        F: !1,
                        G: "strict"
                    };
                    let Fa = /[^a-z0-9]+/,
                        Ga = {
                            b: "p",
                            v: "f",
                            w: "f",
                            z: "s",
                            x: "s",
                            ß: "s",
                            d: "t",
                            n: "m",
                            c: "k",
                            g: "k",
                            j: "k",
                            q: "k",
                            i: "e",
                            y: "e",
                            u: "o"
                        };

                    function Da(ee) {
                        ee = Aa.call(this, ee).join(" ");
                        let et = [];
                        if (ee) {
                            let en = ee.split(Fa),
                                er = en.length;
                            for (let ei = 0, es, eo = 0; ei < er; ei++)
                                if ((ee = en[ei]) && (!this.filter || !this.filter[ee])) {
                                    let en = Ga[es = ee[0]] || es,
                                        er = en;
                                    for (let et = 1; et < ee.length; et++) {
                                        es = ee[et];
                                        let ei = Ga[es] || es;
                                        ei && ei !== er && (en += ei, er = ei)
                                    }
                                    et[eo++] = en
                                }
                        }
                        return et
                    }
                    var Ia = {
                        encode: Ha,
                        F: !1,
                        G: ""
                    };
                    let Ja = [F("ae"), "a", F("oe"), "o", F("sh"), "s", F("th"), "t", F("ph"), "f", F("pf"), "f", F("(?![aeo])h(?![aeo])"), "", F("(?!^[aeo])h(?!^[aeo])"), ""];

                    function Ha(ee, et) {
                        return ee && (2 < (ee = Da.call(this, ee).join(" ")).length && (ee = E(ee, Ja)), et || (1 < ee.length && (ee = ha(ee)), ee && (ee = ee.split(" ")))), ee || []
                    }
                    var La = {
                        encode: Ka,
                        F: !1,
                        G: ""
                    };
                    let Ma = F("(?!\\b)[aeo]");

                    function Ka(ee) {
                        return ee && (1 < (ee = Ha.call(this, ee, !0)).length && (ee = ee.replace(Ma, "")), 1 < ee.length && (ee = ha(ee)), ee && (ee = ee.split(" "))), ee || []
                    }
                    G["latin:default"] = ja, G["latin:simple"] = Ba, G["latin:balance"] = Ea, G["latin:advanced"] = Ia, G["latin:extra"] = La;
                    let W = self,
                        Z = {
                            Index: K,
                            Document: Q,
                            Worker: O,
                            registerCharset: function(ee, et) {
                                G[ee] = et
                            },
                            registerLanguage: function(ee, et) {
                                ka[ee] = et
                            }
                        };
                    (Y = W.define) && Y.amd ? Y([], function() {
                        return Z
                    }) : W.exports ? W.exports = Z : W.FlexSearch = Z
                }(this)
        },
        9745: function() {
            ! function(ee, et) {
                et()
            }(0, function() {
                "use strict";

                function ee(ee) {
                    var et = !0,
                        en = !1,
                        er = null,
                        ei = {
                            text: !0,
                            search: !0,
                            url: !0,
                            tel: !0,
                            email: !0,
                            password: !0,
                            number: !0,
                            date: !0,
                            month: !0,
                            week: !0,
                            time: !0,
                            datetime: !0,
                            "datetime-local": !0
                        };

                    function es(ee) {
                        return !!ee && ee !== document && "HTML" !== ee.nodeName && "BODY" !== ee.nodeName && "classList" in ee && "contains" in ee.classList
                    }

                    function eo(ee) {
                        var et = ee.type,
                            en = ee.tagName;
                        return "INPUT" === en && !!ei[et] && !ee.readOnly || "TEXTAREA" === en && !ee.readOnly || !!ee.isContentEditable
                    }

                    function eu(ee) {
                        ee.classList.contains("focus-visible") || (ee.classList.add("focus-visible"), ee.setAttribute("data-focus-visible-added", ""))
                    }

                    function ec(ee) {
                        ee.hasAttribute("data-focus-visible-added") && (ee.classList.remove("focus-visible"), ee.removeAttribute("data-focus-visible-added"))
                    }

                    function ed(en) {
                        en.metaKey || en.altKey || en.ctrlKey || (es(ee.activeElement) && eu(ee.activeElement), et = !0)
                    }

                    function ep(ee) {
                        et = !1
                    }

                    function eh(ee) {
                        es(ee.target) && (et || eo(ee.target)) && eu(ee.target)
                    }

                    function ef(ee) {
                        es(ee.target) && (ee.target.classList.contains("focus-visible") || ee.target.hasAttribute("data-focus-visible-added")) && (en = !0, window.clearTimeout(er), er = window.setTimeout(function() {
                            en = !1
                        }, 100), ec(ee.target))
                    }

                    function em(ee) {
                        "hidden" === document.visibilityState && (en && (et = !0), ex())
                    }

                    function ex() {
                        document.addEventListener("mousemove", ev), document.addEventListener("mousedown", ev), document.addEventListener("mouseup", ev), document.addEventListener("pointermove", ev), document.addEventListener("pointerdown", ev), document.addEventListener("pointerup", ev), document.addEventListener("touchmove", ev), document.addEventListener("touchstart", ev), document.addEventListener("touchend", ev)
                    }

                    function eg() {
                        document.removeEventListener("mousemove", ev), document.removeEventListener("mousedown", ev), document.removeEventListener("mouseup", ev), document.removeEventListener("pointermove", ev), document.removeEventListener("pointerdown", ev), document.removeEventListener("pointerup", ev), document.removeEventListener("touchmove", ev), document.removeEventListener("touchstart", ev), document.removeEventListener("touchend", ev)
                    }

                    function ev(ee) {
                        ee.target.nodeName && "html" === ee.target.nodeName.toLowerCase() || (et = !1, eg())
                    }
                    document.addEventListener("keydown", ed, !0), document.addEventListener("mousedown", ep, !0), document.addEventListener("pointerdown", ep, !0), document.addEventListener("touchstart", ep, !0), document.addEventListener("visibilitychange", em, !0), ex(), ee.addEventListener("focus", eh, !0), ee.addEventListener("blur", ef, !0), ee.nodeType === Node.DOCUMENT_FRAGMENT_NODE && ee.host ? ee.host.setAttribute("data-js-focus-visible", "") : ee.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"), document.documentElement.setAttribute("data-js-focus-visible", ""))
                }
                if ("undefined" != typeof window && "undefined" != typeof document) {
                    var et;
                    window.applyFocusVisiblePolyfill = ee;
                    try {
                        et = new CustomEvent("focus-visible-polyfill-ready")
                    } catch (ee) {
                        (et = document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready", !1, !1, {})
                    }
                    window.dispatchEvent(et)
                }
                "undefined" != typeof document && ee(document)
            })
        },
        2211: function(ee, et, en) {
            "use strict";
            var er = en(2343),
                ei = en(4511);

            function es(ee) {
                var et = er(ee);
                return et.token = "", "x-oauth-basic" === et.password ? et.token = et.user : "x-token-auth" === et.user && (et.token = et.password), ei(et.protocols) || 0 === et.protocols.length && ei(ee) ? et.protocol = "ssh" : et.protocols.length ? et.protocol = et.protocols[0] : (et.protocol = "file", et.protocols = ["file"]), et.href = et.href.replace(/\/$/, ""), et
            }
            ee.exports = es
        },
        8505: function(ee, et, en) {
            "use strict";
            var er = en(2211);

            function ei(ee) {
                if ("string" != typeof ee) throw Error("The url must be a string.");
                /^([a-z\d-]{1,39})\/([-\.\w]{1,100})$/i.test(ee) && (ee = "https://github.com/" + ee);
                var et = er(ee),
                    en = et.resource.split("."),
                    es = null;
                switch (et.toString = function(ee) {
                    return ei.stringify(this, ee)
                }, et.source = en.length > 2 ? en.slice(1 - en.length).join(".") : et.source = et.resource, et.git_suffix = /\.git$/.test(et.pathname), et.name = decodeURIComponent((et.pathname || et.href).replace(/(^\/)|(\/$)/g, "").replace(/\.git$/, "")), et.owner = decodeURIComponent(et.user), et.source) {
                    case "git.cloudforge.com":
                        et.owner = et.user, et.organization = en[0], et.source = "cloudforge.com";
                        break;
                    case "visualstudio.com":
                        if ("vs-ssh.visualstudio.com" === et.resource) {
                            4 === (es = et.name.split("/")).length && (et.organization = es[1], et.owner = es[2], et.name = es[3], et.full_name = es[2] + "/" + es[3]);
                            break
                        }
                        2 === (es = et.name.split("/")).length ? (et.owner = es[1], et.name = es[1], et.full_name = "_git/" + et.name) : 3 === es.length ? (et.name = es[2], "DefaultCollection" === es[0] ? (et.owner = es[2], et.organization = es[0], et.full_name = et.organization + "/_git/" + et.name) : (et.owner = es[0], et.full_name = et.owner + "/_git/" + et.name)) : 4 === es.length && (et.organization = es[0], et.owner = es[1], et.name = es[3], et.full_name = et.organization + "/" + et.owner + "/_git/" + et.name);
                        break;
                    case "dev.azure.com":
                    case "azure.com":
                        if ("ssh.dev.azure.com" === et.resource) {
                            4 === (es = et.name.split("/")).length && (et.organization = es[1], et.owner = es[2], et.name = es[3]);
                            break
                        }
                        5 === (es = et.name.split("/")).length ? (et.organization = es[0], et.owner = es[1], et.name = es[4], et.full_name = "_git/" + et.name) : 3 === es.length ? (et.name = es[2], "DefaultCollection" === es[0] ? (et.owner = es[2], et.organization = es[0], et.full_name = et.organization + "/_git/" + et.name) : (et.owner = es[0], et.full_name = et.owner + "/_git/" + et.name)) : 4 === es.length && (et.organization = es[0], et.owner = es[1], et.name = es[3], et.full_name = et.organization + "/" + et.owner + "/_git/" + et.name), et.query && et.query.path && (et.filepath = et.query.path.replace(/^\/+/g, "")), et.query && et.query.version && (et.ref = et.query.version.replace(/^GB/, ""));
                        break;
                    default:
                        var eo = (es = et.name.split("/")).length - 1;
                        if (es.length >= 2) {
                            var eu = es.indexOf("-", 2),
                                ec = es.indexOf("blob", 2),
                                ed = es.indexOf("tree", 2),
                                ep = es.indexOf("commit", 2),
                                eh = es.indexOf("src", 2),
                                ef = es.indexOf("raw", 2),
                                em = es.indexOf("edit", 2);
                            eo = eu > 0 ? eu - 1 : ec > 0 ? ec - 1 : ed > 0 ? ed - 1 : ep > 0 ? ep - 1 : eh > 0 ? eh - 1 : ef > 0 ? ef - 1 : em > 0 ? em - 1 : eo, et.owner = es.slice(0, eo).join("/"), et.name = es[eo], ep && (et.commit = es[eo + 2])
                        }
                        et.ref = "", et.filepathtype = "", et.filepath = "";
                        var ex = es.length > eo && "-" === es[eo + 1] ? eo + 1 : eo;
                        es.length > ex + 2 && ["raw", "src", "blob", "tree", "edit"].indexOf(es[ex + 1]) >= 0 && (et.filepathtype = es[ex + 1], et.ref = es[ex + 2], es.length > ex + 3 && (et.filepath = es.slice(ex + 3).join("/"))), et.organization = et.owner
                }!et.full_name && (et.full_name = et.owner, et.name && (et.full_name && (et.full_name += "/"), et.full_name += et.name)), et.owner.startsWith("scm/") && (et.source = "bitbucket-server", et.owner = et.owner.replace("scm/", ""), et.organization = et.owner, et.full_name = et.owner + "/" + et.name);
                var eg = /(projects|users)\/(.*?)\/repos\/(.*?)((\/.*$)|$)/.exec(et.pathname);
                return null != eg && (et.source = "bitbucket-server", "users" === eg[1] ? et.owner = "~" + eg[2] : et.owner = eg[2], et.organization = et.owner, et.name = eg[3], (es = eg[4].split("/")).length > 1 && (["raw", "browse"].indexOf(es[1]) >= 0 ? (et.filepathtype = es[1], es.length > 2 && (et.filepath = es.slice(2).join("/"))) : "commits" === es[1] && es.length > 2 && (et.commit = es[2])), et.full_name = et.owner + "/" + et.name, et.query.at ? et.ref = et.query.at : et.ref = ""), et
            }
            /*!
             * buildToken
             * Builds OAuth token prefix (helper function)
             *
             * @name buildToken
             * @function
             * @param {GitUrl} obj The parsed Git url object.
             * @return {String} token prefix
             */
            function es(ee) {
                return "bitbucket.org" === ee.source ? "x-token-auth:" + ee.token + "@" : ee.token + "@"
            }

            function eo(ee) {
                return "bitbucket-server" === ee.source ? "scm/" + ee.full_name : "" + ee.full_name
            }
            ei.stringify = function(ee, et) {
                et = et || (ee.protocols && ee.protocols.length ? ee.protocols.join("+") : ee.protocol);
                var en = ee.port ? ":" + ee.port : "",
                    er = ee.user || "git",
                    ei = ee.git_suffix ? ".git" : "";
                switch (et) {
                    case "ssh":
                        if (en) return "ssh://" + er + "@" + ee.resource + en + "/" + ee.full_name + ei;
                        return er + "@" + ee.resource + ":" + ee.full_name + ei;
                    case "git+ssh":
                    case "ssh+git":
                    case "ftp":
                    case "ftps":
                        return et + "://" + er + "@" + ee.resource + en + "/" + ee.full_name + ei;
                    case "http":
                    case "https":
                        return et + "://" + (ee.token ? es(ee) : ee.user && (ee.protocols.includes("http") || ee.protocols.includes("https")) ? ee.user + "@" : "") + ee.resource + en + "/" + eo(ee) + ei;
                    default:
                        return ee.href
                }
            }, ee.exports = ei
        },
        3067: function() {
            ! function() {
                "use strict";
                if ("object" == typeof window) {
                    if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
                        "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                            get: function() {
                                return this.intersectionRatio > 0
                            }
                        });
                        return
                    }
                    var ee = function(ee) {
                            for (var et = ee, en = ei(et); en;) en = ei(et = en.ownerDocument);
                            return et
                        }(window.document),
                        et = [],
                        en = null,
                        er = null;
                    eo.prototype.THROTTLE_TIMEOUT = 100, eo.prototype.POLL_INTERVAL = null, eo.prototype.USE_MUTATION_OBSERVER = !0, eo._setupCrossOriginUpdater = function() {
                        return en || (en = function(ee, en) {
                            er = ee && en ? eg(ee, en) : em(), et.forEach(function(ee) {
                                ee._checkForIntersections()
                            })
                        }), en
                    }, eo._resetCrossOriginUpdater = function() {
                        en = null, er = null
                    }, eo.prototype.observe = function(ee) {
                        if (!this._observationTargets.some(function(et) {
                                return et.element == ee
                            })) {
                            if (!(ee && 1 == ee.nodeType)) throw Error("target must be an Element");
                            this._registerInstance(), this._observationTargets.push({
                                element: ee,
                                entry: null
                            }), this._monitorIntersections(ee.ownerDocument), this._checkForIntersections()
                        }
                    }, eo.prototype.unobserve = function(ee) {
                        this._observationTargets = this._observationTargets.filter(function(et) {
                            return et.element != ee
                        }), this._unmonitorIntersections(ee.ownerDocument), 0 == this._observationTargets.length && this._unregisterInstance()
                    }, eo.prototype.disconnect = function() {
                        this._observationTargets = [], this._unmonitorAllIntersections(), this._unregisterInstance()
                    }, eo.prototype.takeRecords = function() {
                        var ee = this._queuedEntries.slice();
                        return this._queuedEntries = [], ee
                    }, eo.prototype._initThresholds = function(ee) {
                        var et = ee || [0];
                        return Array.isArray(et) || (et = [et]), et.sort().filter(function(ee, et, en) {
                            if ("number" != typeof ee || isNaN(ee) || ee < 0 || ee > 1) throw Error("threshold must be a number between 0 and 1 inclusively");
                            return ee !== en[et - 1]
                        })
                    }, eo.prototype._parseRootMargin = function(ee) {
                        var et = (ee || "0px").split(/\s+/).map(function(ee) {
                            var et = /^(-?\d*\.?\d+)(px|%)$/.exec(ee);
                            if (!et) throw Error("rootMargin must be specified in pixels or percent");
                            return {
                                value: parseFloat(et[1]),
                                unit: et[2]
                            }
                        });
                        return et[1] = et[1] || et[0], et[2] = et[2] || et[0], et[3] = et[3] || et[1], et
                    }, eo.prototype._monitorIntersections = function(et) {
                        var en = et.defaultView;
                        if (en && -1 == this._monitoringDocuments.indexOf(et)) {
                            var er = this._checkForIntersections,
                                es = null,
                                eo = null;
                            if (this.POLL_INTERVAL ? es = en.setInterval(er, this.POLL_INTERVAL) : (ed(en, "resize", er, !0), ed(et, "scroll", er, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in en && (eo = new en.MutationObserver(er)).observe(et, {
                                    attributes: !0,
                                    childList: !0,
                                    characterData: !0,
                                    subtree: !0
                                })), this._monitoringDocuments.push(et), this._monitoringUnsubscribes.push(function() {
                                    var ee = et.defaultView;
                                    ee && (es && ee.clearInterval(es), ep(ee, "resize", er, !0)), ep(et, "scroll", er, !0), eo && eo.disconnect()
                                }), et != (this.root && (this.root.ownerDocument || this.root) || ee)) {
                                var eu = ei(et);
                                eu && this._monitorIntersections(eu.ownerDocument)
                            }
                        }
                    }, eo.prototype._unmonitorIntersections = function(et) {
                        var en = this._monitoringDocuments.indexOf(et);
                        if (-1 != en) {
                            var er = this.root && (this.root.ownerDocument || this.root) || ee;
                            if (!this._observationTargets.some(function(ee) {
                                    var en = ee.element.ownerDocument;
                                    if (en == et) return !0;
                                    for (; en && en != er;) {
                                        var es = ei(en);
                                        if ((en = es && es.ownerDocument) == et) return !0
                                    }
                                    return !1
                                })) {
                                var es = this._monitoringUnsubscribes[en];
                                if (this._monitoringDocuments.splice(en, 1), this._monitoringUnsubscribes.splice(en, 1), es(), et != er) {
                                    var eo = ei(et);
                                    eo && this._unmonitorIntersections(eo.ownerDocument)
                                }
                            }
                        }
                    }, eo.prototype._unmonitorAllIntersections = function() {
                        var ee = this._monitoringUnsubscribes.slice(0);
                        this._monitoringDocuments.length = 0, this._monitoringUnsubscribes.length = 0;
                        for (var et = 0; et < ee.length; et++) ee[et]()
                    }, eo.prototype._checkForIntersections = function() {
                        if (this.root || !en || er) {
                            var ee = this._rootIsInDom(),
                                et = ee ? this._getRootRect() : em();
                            this._observationTargets.forEach(function(er) {
                                var ei = er.element,
                                    eo = ef(ei),
                                    ec = this._rootContainsTarget(ei),
                                    ed = er.entry,
                                    ep = ee && ec && this._computeTargetAndRootIntersection(ei, eo, et),
                                    eh = null;
                                this._rootContainsTarget(ei) ? (!en || this.root) && (eh = et) : eh = em();
                                var ex = er.entry = new es({
                                    time: eu(),
                                    target: ei,
                                    boundingClientRect: eo,
                                    rootBounds: eh,
                                    intersectionRect: ep
                                });
                                ed ? ee && ec ? this._hasCrossedThreshold(ed, ex) && this._queuedEntries.push(ex) : ed && ed.isIntersecting && this._queuedEntries.push(ex) : this._queuedEntries.push(ex)
                            }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                        }
                    }, eo.prototype._computeTargetAndRootIntersection = function(et, ei, es) {
                        if ("none" != window.getComputedStyle(et).display) {
                            for (var eo = ei, eu = ey(et), ec = !1; !ec && eu;) {
                                var ed = null,
                                    ep = 1 == eu.nodeType ? window.getComputedStyle(eu) : {};
                                if ("none" == ep.display) return null;
                                if (eu == this.root || 9 == eu.nodeType) {
                                    if (ec = !0, eu == this.root || eu == ee) en && !this.root ? er && (0 != er.width || 0 != er.height) ? ed = er : (eu = null, ed = null, eo = null) : ed = es;
                                    else {
                                        var em = ey(eu),
                                            ex = em && ef(em),
                                            ev = em && this._computeTargetAndRootIntersection(em, ex, es);
                                        ex && ev ? (eu = em, ed = eg(ex, ev)) : (eu = null, eo = null)
                                    }
                                } else {
                                    var eb = eu.ownerDocument;
                                    eu != eb.body && eu != eb.documentElement && "visible" != ep.overflow && (ed = ef(eu))
                                }
                                if (ed && (eo = eh(ed, eo)), !eo) break;
                                eu = eu && ey(eu)
                            }
                            return eo
                        }
                    }, eo.prototype._getRootRect = function() {
                        var et;
                        if (this.root && !eb(this.root)) et = ef(this.root);
                        else {
                            var en = eb(this.root) ? this.root : ee,
                                er = en.documentElement,
                                ei = en.body;
                            et = {
                                top: 0,
                                left: 0,
                                right: er.clientWidth || ei.clientWidth,
                                width: er.clientWidth || ei.clientWidth,
                                bottom: er.clientHeight || ei.clientHeight,
                                height: er.clientHeight || ei.clientHeight
                            }
                        }
                        return this._expandRectByRootMargin(et)
                    }, eo.prototype._expandRectByRootMargin = function(ee) {
                        var et = this._rootMarginValues.map(function(et, en) {
                                return "px" == et.unit ? et.value : et.value * (en % 2 ? ee.width : ee.height) / 100
                            }),
                            en = {
                                top: ee.top - et[0],
                                right: ee.right + et[1],
                                bottom: ee.bottom + et[2],
                                left: ee.left - et[3]
                            };
                        return en.width = en.right - en.left, en.height = en.bottom - en.top, en
                    }, eo.prototype._hasCrossedThreshold = function(ee, et) {
                        var en = ee && ee.isIntersecting ? ee.intersectionRatio || 0 : -1,
                            er = et.isIntersecting ? et.intersectionRatio || 0 : -1;
                        if (en !== er)
                            for (var ei = 0; ei < this.thresholds.length; ei++) {
                                var es = this.thresholds[ei];
                                if (es == en || es == er || es < en != es < er) return !0
                            }
                    }, eo.prototype._rootIsInDom = function() {
                        return !this.root || ev(ee, this.root)
                    }, eo.prototype._rootContainsTarget = function(et) {
                        var en = this.root && (this.root.ownerDocument || this.root) || ee;
                        return ev(en, et) && (!this.root || en == et.ownerDocument)
                    }, eo.prototype._registerInstance = function() {
                        0 > et.indexOf(this) && et.push(this)
                    }, eo.prototype._unregisterInstance = function() {
                        var ee = et.indexOf(this); - 1 != ee && et.splice(ee, 1)
                    }, window.IntersectionObserver = eo, window.IntersectionObserverEntry = es
                }

                function ei(ee) {
                    try {
                        return ee.defaultView && ee.defaultView.frameElement || null
                    } catch (ee) {
                        return null
                    }
                }

                function es(ee) {
                    this.time = ee.time, this.target = ee.target, this.rootBounds = ex(ee.rootBounds), this.boundingClientRect = ex(ee.boundingClientRect), this.intersectionRect = ex(ee.intersectionRect || em()), this.isIntersecting = !!ee.intersectionRect;
                    var et = this.boundingClientRect,
                        en = et.width * et.height,
                        er = this.intersectionRect,
                        ei = er.width * er.height;
                    en ? this.intersectionRatio = Number((ei / en).toFixed(4)) : this.intersectionRatio = this.isIntersecting ? 1 : 0
                }

                function eo(ee, et) {
                    var en = et || {};
                    if ("function" != typeof ee) throw Error("callback must be a function");
                    if (en.root && 1 != en.root.nodeType && 9 != en.root.nodeType) throw Error("root must be a Document or Element");
                    this._checkForIntersections = ec(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this._callback = ee, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(en.rootMargin), this.thresholds = this._initThresholds(en.threshold), this.root = en.root || null, this.rootMargin = this._rootMarginValues.map(function(ee) {
                        return ee.value + ee.unit
                    }).join(" "), this._monitoringDocuments = [], this._monitoringUnsubscribes = []
                }

                function eu() {
                    return window.performance && performance.now && performance.now()
                }

                function ec(ee, et) {
                    var en = null;
                    return function() {
                        en || (en = setTimeout(function() {
                            ee(), en = null
                        }, et))
                    }
                }

                function ed(ee, et, en, er) {
                    "function" == typeof ee.addEventListener ? ee.addEventListener(et, en, er || !1) : "function" == typeof ee.attachEvent && ee.attachEvent("on" + et, en)
                }

                function ep(ee, et, en, er) {
                    "function" == typeof ee.removeEventListener ? ee.removeEventListener(et, en, er || !1) : "function" == typeof ee.detachEvent && ee.detachEvent("on" + et, en)
                }

                function eh(ee, et) {
                    var en = Math.max(ee.top, et.top),
                        er = Math.min(ee.bottom, et.bottom),
                        ei = Math.max(ee.left, et.left),
                        es = Math.min(ee.right, et.right),
                        eo = es - ei,
                        eu = er - en;
                    return eo >= 0 && eu >= 0 && {
                        top: en,
                        bottom: er,
                        left: ei,
                        right: es,
                        width: eo,
                        height: eu
                    } || null
                }

                function ef(ee) {
                    var et;
                    try {
                        et = ee.getBoundingClientRect()
                    } catch (ee) {}
                    return et ? (et.width && et.height || (et = {
                        top: et.top,
                        right: et.right,
                        bottom: et.bottom,
                        left: et.left,
                        width: et.right - et.left,
                        height: et.bottom - et.top
                    }), et) : em()
                }

                function em() {
                    return {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }
                }

                function ex(ee) {
                    return !ee || "x" in ee ? ee : {
                        top: ee.top,
                        y: ee.top,
                        bottom: ee.bottom,
                        left: ee.left,
                        x: ee.left,
                        right: ee.right,
                        width: ee.width,
                        height: ee.height
                    }
                }

                function eg(ee, et) {
                    var en = et.top - ee.top,
                        er = et.left - ee.left;
                    return {
                        top: en,
                        left: er,
                        height: et.height,
                        width: et.width,
                        bottom: en + et.height,
                        right: er + et.width
                    }
                }

                function ev(ee, et) {
                    for (var en = et; en;) {
                        if (en == ee) return !0;
                        en = ey(en)
                    }
                    return !1
                }

                function ey(et) {
                    var en = et.parentNode;
                    return 9 == et.nodeType && et != ee ? ei(et) : (en && en.assignedSlot && (en = en.assignedSlot.parentNode), en && 11 == en.nodeType && en.host) ? en.host : en
                }

                function eb(ee) {
                    return ee && 9 === ee.nodeType
                }
            }()
        },
        4511: function(ee, et, en) {
            "use strict";
            var er = en(3155);

            function ei(ee) {
                if (Array.isArray(ee)) return -1 !== ee.indexOf("ssh") || -1 !== ee.indexOf("rsync");
                if ("string" != typeof ee) return !1;
                var et = er(ee);
                if (ee = ee.substring(ee.indexOf("://") + 3), ei(et)) return !0;
                var en = RegExp(".([a-zA-Z\\d]+):(\\d+)/");
                return !ee.match(en) && ee.indexOf("@") < ee.indexOf(":")
            }
            ee.exports = ei
        },
        4120: function(ee, et, en) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return en(6302)
            }])
        },
        6056: function(ee, et) {
            "use strict";
            var en;
            Object.defineProperty(et, "__esModule", {
                    value: !0
                }),
                function(ee, et) {
                    for (var en in et) Object.defineProperty(ee, en, {
                        enumerable: !0,
                        get: et[en]
                    })
                }(et, {
                    PrefetchKind: function() {
                        return en
                    },
                    ACTION_REFRESH: function() {
                        return er
                    },
                    ACTION_NAVIGATE: function() {
                        return ei
                    },
                    ACTION_RESTORE: function() {
                        return es
                    },
                    ACTION_SERVER_PATCH: function() {
                        return eo
                    },
                    ACTION_PREFETCH: function() {
                        return eu
                    },
                    ACTION_FAST_REFRESH: function() {
                        return ec
                    },
                    ACTION_SERVER_ACTION: function() {
                        return ed
                    }
                });
            let er = "refresh",
                ei = "navigate",
                es = "restore",
                eo = "server-patch",
                eu = "prefetch",
                ec = "fast-refresh",
                ed = "server-action";
            ! function(ee) {
                ee.AUTO = "auto", ee.FULL = "full", ee.TEMPORARY = "temporary"
            }(en || (en = {})), ("function" == typeof et.default || "object" == typeof et.default && null !== et.default) && void 0 === et.default.__esModule && (Object.defineProperty(et.default, "__esModule", {
                value: !0
            }), Object.assign(et.default, et), ee.exports = et.default)
        },
        2786: function(ee, et) {
            "use strict";

            function en(ee, et, en, er) {
                return !1
            }
            Object.defineProperty(et, "__esModule", {
                value: !0
            }), Object.defineProperty(et, "getDomainLocale", {
                enumerable: !0,
                get: function() {
                    return en
                }
            }), ("function" == typeof et.default || "object" == typeof et.default && null !== et.default) && void 0 === et.default.__esModule && (Object.defineProperty(et.default, "__esModule", {
                value: !0
            }), Object.assign(et.default, et), ee.exports = et.default)
        },
        8335: function(ee, et, en) {
            "use strict";
            Object.defineProperty(et, "__esModule", {
                value: !0
            }), Object.defineProperty(et, "Image", {
                enumerable: !0,
                get: function() {
                    return eg
                }
            });
            let er = en(4838),
                ei = en(5542),
                es = ei._(en(79)),
                eo = er._(en(4637)),
                eu = en(9467),
                ec = en(9423),
                ed = en(7870);
            en(8936);
            let ep = er._(en(5532)),
                eh = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !0
                };

            function ef(ee, et, en, er, ei, es) {
                let eo = null == ee ? void 0 : ee.src;
                if (!ee || ee["data-loaded-src"] === eo) return;
                ee["data-loaded-src"] = eo;
                let eu = "decode" in ee ? ee.decode() : Promise.resolve();
                eu.catch(() => {}).then(() => {
                    if (ee.parentElement && ee.isConnected) {
                        if ("blur" === et && ei(!0), null == en ? void 0 : en.current) {
                            let et = new Event("load");
                            Object.defineProperty(et, "target", {
                                writable: !1,
                                value: ee
                            });
                            let er = !1,
                                ei = !1;
                            en.current({ ...et,
                                nativeEvent: et,
                                currentTarget: ee,
                                target: ee,
                                isDefaultPrevented: () => er,
                                isPropagationStopped: () => ei,
                                persist: () => {},
                                preventDefault: () => {
                                    er = !0, et.preventDefault()
                                },
                                stopPropagation: () => {
                                    ei = !0, et.stopPropagation()
                                }
                            })
                        }(null == er ? void 0 : er.current) && er.current(ee)
                    }
                })
            }

            function em(ee) {
                let [et, en] = es.version.split("."), er = parseInt(et, 10), ei = parseInt(en, 10);
                return er > 18 || 18 === er && ei >= 3 ? {
                    fetchPriority: ee
                } : {
                    fetchpriority: ee
                }
            }
            let ex = (0, es.forwardRef)((ee, et) => {
                    let {
                        src: en,
                        srcSet: er,
                        sizes: ei,
                        height: eo,
                        width: eu,
                        decoding: ec,
                        className: ed,
                        style: ep,
                        fetchPriority: eh,
                        placeholder: ex,
                        loading: eg,
                        unoptimized: ev,
                        fill: ey,
                        onLoadRef: eb,
                        onLoadingCompleteRef: e_,
                        setBlurComplete: ew,
                        setShowAltText: ek,
                        onLoad: ej,
                        onError: eE,
                        ...eT
                    } = ee;
                    return es.default.createElement("img", { ...eT,
                        ...em(eh),
                        loading: eg,
                        width: eu,
                        height: eo,
                        decoding: ec,
                        "data-nimg": ey ? "fill" : "1",
                        className: ed,
                        style: ep,
                        sizes: ei,
                        srcSet: er,
                        src: en,
                        ref: (0, es.useCallback)(ee => {
                            et && ("function" == typeof et ? et(ee) : "object" == typeof et && (et.current = ee)), ee && (eE && (ee.src = ee.src), ee.complete && ef(ee, ex, eb, e_, ew, ev))
                        }, [en, ex, eb, e_, ew, eE, ev, et]),
                        onLoad: ee => {
                            let et = ee.currentTarget;
                            ef(et, ex, eb, e_, ew, ev)
                        },
                        onError: ee => {
                            ek(!0), "blur" === ex && ew(!0), eE && eE(ee)
                        }
                    })
                }),
                eg = (0, es.forwardRef)((ee, et) => {
                    let en = (0, es.useContext)(ed.ImageConfigContext),
                        er = (0, es.useMemo)(() => {
                            let ee = eh || en || ec.imageConfigDefault,
                                et = [...ee.deviceSizes, ...ee.imageSizes].sort((ee, et) => ee - et),
                                er = ee.deviceSizes.sort((ee, et) => ee - et);
                            return { ...ee,
                                allSizes: et,
                                deviceSizes: er
                            }
                        }, [en]),
                        {
                            onLoad: ei,
                            onLoadingComplete: ef
                        } = ee,
                        eg = (0, es.useRef)(ei);
                    (0, es.useEffect)(() => {
                        eg.current = ei
                    }, [ei]);
                    let ev = (0, es.useRef)(ef);
                    (0, es.useEffect)(() => {
                        ev.current = ef
                    }, [ef]);
                    let [ey, eb] = (0, es.useState)(!1), [e_, ew] = (0, es.useState)(!1), {
                        props: ek,
                        meta: ej
                    } = (0, eu.getImgProps)(ee, {
                        defaultLoader: ep.default,
                        imgConf: er,
                        blurComplete: ey,
                        showAltText: e_
                    });
                    return es.default.createElement(es.default.Fragment, null, es.default.createElement(ex, { ...ek,
                        unoptimized: ej.unoptimized,
                        placeholder: ej.placeholder,
                        fill: ej.fill,
                        onLoadRef: eg,
                        onLoadingCompleteRef: ev,
                        setBlurComplete: eb,
                        setShowAltText: ew,
                        ref: et
                    }), ej.priority ? es.default.createElement(eo.default, null, es.default.createElement("link", {
                        key: "__nimg-" + ek.src + ek.srcSet + ek.sizes,
                        rel: "preload",
                        as: "image",
                        href: ek.srcSet ? void 0 : ek.src,
                        imageSrcSet: ek.srcSet,
                        imageSizes: ek.sizes,
                        crossOrigin: ek.crossOrigin,
                        referrerPolicy: ek.referrerPolicy,
                        ...em(ek.fetchPriority)
                    })) : null)
                });
            ("function" == typeof et.default || "object" == typeof et.default && null !== et.default) && void 0 === et.default.__esModule && (Object.defineProperty(et.default, "__esModule", {
                value: !0
            }), Object.assign(et.default, et), ee.exports = et.default)
        },
        2543: function(ee, et, en) {
            "use strict";
            Object.defineProperty(et, "__esModule", {
                value: !0
            }), Object.defineProperty(et, "default", {
                enumerable: !0,
                get: function() {
                    return ej
                }
            });
            let er = en(4838),
                ei = er._(en(79)),
                es = en(8888),
                eo = en(4420),
                eu = en(2559),
                ec = en(6459),
                ed = en(6312),
                ep = en(7096),
                eh = en(6793),
                ef = en(906),
                em = en(2786),
                ex = en(2271),
                eg = en(6056),
                ev = new Set;

            function ey(ee, et, en, er, ei, es) {
                if (!es && !(0, eo.isLocalURL)(et)) return;
                if (!er.bypassPrefetchedCheck) {
                    let ei = void 0 !== er.locale ? er.locale : "locale" in ee ? ee.locale : void 0,
                        es = et + "%" + en + "%" + ei;
                    if (ev.has(es)) return;
                    ev.add(es)
                }
                let eu = es ? ee.prefetch(et, ei) : ee.prefetch(et, en, er);
                Promise.resolve(eu).catch(ee => {})
            }

            function eb(ee) {
                let et = ee.currentTarget,
                    en = et.getAttribute("target");
                return en && "_self" !== en || ee.metaKey || ee.ctrlKey || ee.shiftKey || ee.altKey || ee.nativeEvent && 2 === ee.nativeEvent.which
            }

            function e_(ee, et, en, er, es, eu, ec, ed, ep, eh) {
                let {
                    nodeName: ef
                } = ee.currentTarget, em = "A" === ef.toUpperCase();
                if (em && (eb(ee) || !ep && !(0, eo.isLocalURL)(en))) return;
                ee.preventDefault();
                let ex = () => {
                    "beforePopState" in et ? et[es ? "replace" : "push"](en, er, {
                        shallow: eu,
                        locale: ed,
                        scroll: ec
                    }) : et[es ? "replace" : "push"](er || en, {
                        forceOptimisticNavigation: !eh
                    })
                };
                ep ? ei.default.startTransition(ex) : ex()
            }

            function ew(ee) {
                return "string" == typeof ee ? ee : (0, eu.formatUrl)(ee)
            }
            let ek = ei.default.forwardRef(function(ee, et) {
                    let en, er;
                    let {
                        href: eo,
                        as: eu,
                        children: ev,
                        prefetch: eb = null,
                        passHref: ek,
                        replace: ej,
                        shallow: eE,
                        scroll: eT,
                        locale: eO,
                        onClick: eC,
                        onMouseEnter: eN,
                        onTouchStart: eS,
                        legacyBehavior: eR = !1,
                        ...eI
                    } = ee;
                    en = ev, eR && ("string" == typeof en || "number" == typeof en) && (en = ei.default.createElement("a", null, en));
                    let eA = ei.default.useContext(ep.RouterContext),
                        eP = ei.default.useContext(eh.AppRouterContext),
                        eZ = null != eA ? eA : eP,
                        eL = !eA,
                        eD = !1 !== eb,
                        eM = null === eb ? eg.PrefetchKind.AUTO : eg.PrefetchKind.FULL,
                        {
                            href: ez,
                            as: eF
                        } = ei.default.useMemo(() => {
                            if (!eA) {
                                let ee = ew(eo);
                                return {
                                    href: ee,
                                    as: eu ? ew(eu) : ee
                                }
                            }
                            let [ee, et] = (0, es.resolveHref)(eA, eo, !0);
                            return {
                                href: ee,
                                as: eu ? (0, es.resolveHref)(eA, eu) : et || ee
                            }
                        }, [eA, eo, eu]),
                        e$ = ei.default.useRef(ez),
                        eU = ei.default.useRef(eF);
                    eR && (er = ei.default.Children.only(en));
                    let eW = eR ? er && "object" == typeof er && er.ref : et,
                        [eV, eH, eB] = (0, ef.useIntersection)({
                            rootMargin: "200px"
                        }),
                        eG = ei.default.useCallback(ee => {
                            (eU.current !== eF || e$.current !== ez) && (eB(), eU.current = eF, e$.current = ez), eV(ee), eW && ("function" == typeof eW ? eW(ee) : "object" == typeof eW && (eW.current = ee))
                        }, [eF, eW, ez, eB, eV]);
                    ei.default.useEffect(() => {
                        eZ && eH && eD && ey(eZ, ez, eF, {
                            locale: eO
                        }, {
                            kind: eM
                        }, eL)
                    }, [eF, ez, eH, eO, eD, null == eA ? void 0 : eA.locale, eZ, eL, eM]);
                    let eK = {
                        ref: eG,
                        onClick(ee) {
                            eR || "function" != typeof eC || eC(ee), eR && er.props && "function" == typeof er.props.onClick && er.props.onClick(ee), eZ && !ee.defaultPrevented && e_(ee, eZ, ez, eF, ej, eE, eT, eO, eL, eD)
                        },
                        onMouseEnter(ee) {
                            eR || "function" != typeof eN || eN(ee), eR && er.props && "function" == typeof er.props.onMouseEnter && er.props.onMouseEnter(ee), eZ && (eD || !eL) && ey(eZ, ez, eF, {
                                locale: eO,
                                priority: !0,
                                bypassPrefetchedCheck: !0
                            }, {
                                kind: eM
                            }, eL)
                        },
                        onTouchStart(ee) {
                            eR || "function" != typeof eS || eS(ee), eR && er.props && "function" == typeof er.props.onTouchStart && er.props.onTouchStart(ee), eZ && (eD || !eL) && ey(eZ, ez, eF, {
                                locale: eO,
                                priority: !0,
                                bypassPrefetchedCheck: !0
                            }, {
                                kind: eM
                            }, eL)
                        }
                    };
                    if ((0, ec.isAbsoluteUrl)(eF)) eK.href = eF;
                    else if (!eR || ek || "a" === er.type && !("href" in er.props)) {
                        let ee = void 0 !== eO ? eO : null == eA ? void 0 : eA.locale,
                            et = (null == eA ? void 0 : eA.isLocaleDomain) && (0, em.getDomainLocale)(eF, ee, null == eA ? void 0 : eA.locales, null == eA ? void 0 : eA.domainLocales);
                        eK.href = et || (0, ex.addBasePath)((0, ed.addLocale)(eF, ee, null == eA ? void 0 : eA.defaultLocale))
                    }
                    return eR ? ei.default.cloneElement(er, eK) : ei.default.createElement("a", { ...eI,
                        ...eK
                    }, en)
                }),
                ej = ek;
            ("function" == typeof et.default || "object" == typeof et.default && null !== et.default) && void 0 === et.default.__esModule && (Object.defineProperty(et.default, "__esModule", {
                value: !0
            }), Object.assign(et.default, et), ee.exports = et.default)
        },
        906: function(ee, et, en) {
            "use strict";
            Object.defineProperty(et, "__esModule", {
                value: !0
            }), Object.defineProperty(et, "useIntersection", {
                enumerable: !0,
                get: function() {
                    return ep
                }
            });
            let er = en(79),
                ei = en(7390),
                es = "function" == typeof IntersectionObserver,
                eo = new Map,
                eu = [];

            function ec(ee) {
                let et;
                let en = {
                        root: ee.root || null,
                        margin: ee.rootMargin || ""
                    },
                    er = eu.find(ee => ee.root === en.root && ee.margin === en.margin);
                if (er && (et = eo.get(er))) return et;
                let ei = new Map,
                    es = new IntersectionObserver(ee => {
                        ee.forEach(ee => {
                            let et = ei.get(ee.target),
                                en = ee.isIntersecting || ee.intersectionRatio > 0;
                            et && en && et(en)
                        })
                    }, ee);
                return et = {
                    id: en,
                    observer: es,
                    elements: ei
                }, eu.push(en), eo.set(en, et), et
            }

            function ed(ee, et, en) {
                let {
                    id: er,
                    observer: ei,
                    elements: es
                } = ec(en);
                return es.set(ee, et), ei.observe(ee),
                    function() {
                        if (es.delete(ee), ei.unobserve(ee), 0 === es.size) {
                            ei.disconnect(), eo.delete(er);
                            let ee = eu.findIndex(ee => ee.root === er.root && ee.margin === er.margin);
                            ee > -1 && eu.splice(ee, 1)
                        }
                    }
            }

            function ep(ee) {
                let {
                    rootRef: et,
                    rootMargin: en,
                    disabled: eo
                } = ee, eu = eo || !es, [ec, ep] = (0, er.useState)(!1), eh = (0, er.useRef)(null), ef = (0, er.useCallback)(ee => {
                    eh.current = ee
                }, []);
                (0, er.useEffect)(() => {
                    if (es) {
                        if (eu || ec) return;
                        let ee = eh.current;
                        if (ee && ee.tagName) {
                            let er = ed(ee, ee => ee && ep(ee), {
                                root: null == et ? void 0 : et.current,
                                rootMargin: en
                            });
                            return er
                        }
                    } else if (!ec) {
                        let ee = (0, ei.requestIdleCallback)(() => ep(!0));
                        return () => (0, ei.cancelIdleCallback)(ee)
                    }
                }, [eu, en, et, ec, eh.current]);
                let em = (0, er.useCallback)(() => {
                    ep(!1)
                }, []);
                return [ef, ec, em]
            }("function" == typeof et.default || "object" == typeof et.default && null !== et.default) && void 0 === et.default.__esModule && (Object.defineProperty(et.default, "__esModule", {
                value: !0
            }), Object.assign(et.default, et), ee.exports = et.default)
        },
        9467: function(ee, et, en) {
            "use strict";
            Object.defineProperty(et, "__esModule", {
                value: !0
            }), Object.defineProperty(et, "getImgProps", {
                enumerable: !0,
                get: function() {
                    return ef
                }
            }), en(8936);
            let er = en(8585),
                ei = en(9423),
                es = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !0
                };

            function eo(ee) {
                return void 0 !== ee.default
            }

            function eu(ee) {
                return void 0 !== ee.src
            }

            function ec(ee) {
                return "object" == typeof ee && (eo(ee) || eu(ee))
            }

            function ed(ee) {
                return void 0 === ee ? ee : "number" == typeof ee ? Number.isFinite(ee) ? ee : NaN : "string" == typeof ee && /^[0-9]+$/.test(ee) ? parseInt(ee, 10) : NaN
            }

            function ep(ee, et, en) {
                let {
                    deviceSizes: er,
                    allSizes: ei
                } = ee;
                if (en) {
                    let ee = /(^|\s)(1?\d?\d)vw/g,
                        et = [];
                    for (let er; er = ee.exec(en); er) et.push(parseInt(er[2]));
                    if (et.length) {
                        let ee = .01 * Math.min(...et);
                        return {
                            widths: ei.filter(et => et >= er[0] * ee),
                            kind: "w"
                        }
                    }
                    return {
                        widths: ei,
                        kind: "w"
                    }
                }
                if ("number" != typeof et) return {
                    widths: er,
                    kind: "w"
                };
                let es = [...new Set([et, 2 * et].map(ee => ei.find(et => et >= ee) || ei[ei.length - 1]))];
                return {
                    widths: es,
                    kind: "x"
                }
            }

            function eh(ee) {
                let {
                    config: et,
                    src: en,
                    unoptimized: er,
                    width: ei,
                    quality: es,
                    sizes: eo,
                    loader: eu
                } = ee;
                if (er) return {
                    src: en,
                    srcSet: void 0,
                    sizes: void 0
                };
                let {
                    widths: ec,
                    kind: ed
                } = ep(et, ei, eo), eh = ec.length - 1;
                return {
                    sizes: eo || "w" !== ed ? eo : "100vw",
                    srcSet: ec.map((ee, er) => eu({
                        config: et,
                        src: en,
                        quality: es,
                        width: ee
                    }) + " " + ("w" === ed ? ee : er + 1) + ed).join(", "),
                    src: eu({
                        config: et,
                        src: en,
                        quality: es,
                        width: ec[eh]
                    })
                }
            }

            function ef(ee, et) {
                let en, eu, ep, {
                        src: ef,
                        sizes: em,
                        unoptimized: ex = !1,
                        priority: eg = !1,
                        loading: ev,
                        className: ey,
                        quality: eb,
                        width: e_,
                        height: ew,
                        fill: ek = !1,
                        style: ej,
                        onLoad: eE,
                        onLoadingComplete: eT,
                        placeholder: eO = "empty",
                        blurDataURL: eC,
                        fetchPriority: eN,
                        layout: eS,
                        objectFit: eR,
                        objectPosition: eI,
                        lazyBoundary: eA,
                        lazyRoot: eP,
                        ...eZ
                    } = ee,
                    {
                        imgConf: eL,
                        showAltText: eD,
                        blurComplete: eM,
                        defaultLoader: ez
                    } = et,
                    eF = eL || es || ei.imageConfigDefault;
                if ("allSizes" in eF) en = eF;
                else {
                    let ee = [...eF.deviceSizes, ...eF.imageSizes].sort((ee, et) => ee - et),
                        et = eF.deviceSizes.sort((ee, et) => ee - et);
                    en = { ...eF,
                        allSizes: ee,
                        deviceSizes: et
                    }
                }
                let e$ = eZ.loader || ez;
                delete eZ.loader, delete eZ.srcSet;
                let eU = "__next_img_default" in e$;
                if (eU) {
                    if ("custom" === en.loader) throw Error('Image with src "' + ef + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                } else {
                    let ee = e$;
                    e$ = et => {
                        let {
                            config: en,
                            ...er
                        } = et;
                        return ee(er)
                    }
                }
                if (eS) {
                    "fill" === eS && (ek = !0);
                    let ee = {
                            intrinsic: {
                                maxWidth: "100%",
                                height: "auto"
                            },
                            responsive: {
                                width: "100%",
                                height: "auto"
                            }
                        },
                        et = {
                            responsive: "100vw",
                            fill: "100vw"
                        },
                        en = ee[eS];
                    en && (ej = { ...ej,
                        ...en
                    });
                    let er = et[eS];
                    er && !em && (em = er)
                }
                let eW = "",
                    eV = ed(e_),
                    eH = ed(ew);
                if (ec(ef)) {
                    let ee = eo(ef) ? ef.default : ef;
                    if (!ee.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(ee));
                    if (!ee.height || !ee.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(ee));
                    if (eu = ee.blurWidth, ep = ee.blurHeight, eC = eC || ee.blurDataURL, eW = ee.src, !ek) {
                        if (eV || eH) {
                            if (eV && !eH) {
                                let et = eV / ee.width;
                                eH = Math.round(ee.height * et)
                            } else if (!eV && eH) {
                                let et = eH / ee.height;
                                eV = Math.round(ee.width * et)
                            }
                        } else eV = ee.width, eH = ee.height
                    }
                }
                let eB = !eg && ("lazy" === ev || void 0 === ev);
                (!(ef = "string" == typeof ef ? ef : eW) || ef.startsWith("data:") || ef.startsWith("blob:")) && (ex = !0, eB = !1), en.unoptimized && (ex = !0), eU && ef.endsWith(".svg") && !en.dangerouslyAllowSVG && (ex = !0), eg && (eN = "high");
                let eG = ed(eb),
                    eK = Object.assign(ek ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: eR,
                        objectPosition: eI
                    } : {}, eD ? {} : {
                        color: "transparent"
                    }, ej),
                    eq = "blur" === eO && eC && !eM ? {
                        backgroundSize: eK.objectFit || "cover",
                        backgroundPosition: eK.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: 'url("data:image/svg+xml;charset=utf-8,' + (0, er.getImageBlurSvg)({
                            widthInt: eV,
                            heightInt: eH,
                            blurWidth: eu,
                            blurHeight: ep,
                            blurDataURL: eC,
                            objectFit: eK.objectFit
                        }) + '")'
                    } : {},
                    eY = eh({
                        config: en,
                        src: ef,
                        unoptimized: ex,
                        width: eV,
                        quality: eG,
                        sizes: em,
                        loader: e$
                    }),
                    eQ = { ...eZ,
                        loading: eB ? "lazy" : ev,
                        fetchPriority: eN,
                        width: eV,
                        height: eH,
                        decoding: "async",
                        className: ey,
                        style: { ...eK,
                            ...eq
                        },
                        sizes: eY.sizes,
                        srcSet: eY.srcSet,
                        src: eY.src
                    },
                    eJ = {
                        unoptimized: ex,
                        priority: eg,
                        placeholder: eO,
                        fill: ek
                    };
                return {
                    props: eQ,
                    meta: eJ
                }
            }
        },
        8585: function(ee, et) {
            "use strict";

            function en(ee) {
                let {
                    widthInt: et,
                    heightInt: en,
                    blurWidth: er,
                    blurHeight: ei,
                    blurDataURL: es,
                    objectFit: eo
                } = ee, eu = er && ei ? "1" : "20", ec = er || et, ed = ei || en, ep = es.startsWith("data:image/jpeg") ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%" : "";
                if (ec && ed) return "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 " + ec + " " + ed + "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" + eu + "'/%3E" + ep + "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='" + es + "'/%3E%3C/svg%3E";
                let eh = "contain" === eo ? "xMidYMid" : "cover" === eo ? "xMidYMid slice" : "none";
                return "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='" + eh + "' x='0' y='0' height='100%25' width='100%25' href='" + es + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(et, "__esModule", {
                value: !0
            }), Object.defineProperty(et, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return en
                }
            })
        },
        3962: function(ee, et, en) {
            "use strict";
            Object.defineProperty(et, "__esModule", {
                    value: !0
                }),
                function(ee, et) {
                    for (var en in et) Object.defineProperty(ee, en, {
                        enumerable: !0,
                        get: et[en]
                    })
                }(et, {
                    default: function() {
                        return ed
                    },
                    unstable_getImgProps: function() {
                        return ec
                    }
                });
            let er = en(4838),
                ei = en(9467),
                es = en(8936),
                eo = en(8335),
                eu = er._(en(5532)),
                ec = ee => {
                    (0, es.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
                    let {
                        props: et
                    } = (0, ei.getImgProps)(ee, {
                        defaultLoader: eu.default
                    });
                    for (let [ee, en] of Object.entries(et)) void 0 === en && delete et[ee];
                    return {
                        props: et
                    }
                },
                ed = eo.Image
        },
        5532: function(ee, et) {
            "use strict";

            function en(ee) {
                let {
                    config: et,
                    src: en,
                    width: er,
                    quality: ei
                } = ee;
                return et.path + "?url=" + encodeURIComponent(en) + "&w=" + er + "&q=" + (ei || 75)
            }
            Object.defineProperty(et, "__esModule", {
                value: !0
            }), Object.defineProperty(et, "default", {
                enumerable: !0,
                get: function() {
                    return er
                }
            }), en.__next_img_default = !0;
            let er = en
        },
        6302: function(ee, et, en) {
            "use strict";
            en.r(et), en.d(et, {
                __toc: function() {
                    return ef
                },
                default: function() {
                    return ex
                }
            });
            var er, ei, es = en(5250),
                eo = en(1266),
                eu = en(1403);
            let ec = (0, es.jsx)("img", {
                    height: "100",
                    className: "ylogo",
                    alt: "logo",
                    src: "/logo.png"
                }),
                ed = {
                    chat: {
                        link: "https://discord.gg/5AMJ3GEgZ8"
                    },
                    fivem: {
                        link: "https://cfx.re/join/bld3ab/"
                    },
                    youtube: {
                        link: "https://youtube.com/"
                    },
                    docsRepositoryBase: "https://github.com/",
                    useNextSeoProps() {
                        let {
                            asPath: ee
                        } = (0, eu.useRouter)();
                        if ("/" !== ee) return {
                            titleTemplate: "%s – BLRP"
                        }
                    },
                    logo: ec,
                    head: function() {
                        let {
                            title: ee
                        } = (0, eo.ZR)(), {
                            route: et
                        } = (0, eu.useRouter)(), en = "/" !== et && ee ? "https://frvgs.com/api/og?title=".concat(ee) : "https://frvgs.com/og.jpeg";
                        return (0, es.jsxs)(es.Fragment, {
                            children: [(0, es.jsx)("meta", {
                                name: "msapplication-TileColor",
                                content: "#fff"
                            }), (0, es.jsx)("meta", {
                                name: "theme-color",
                                content: "#fff"
                            }), (0, es.jsx)("meta", {
                                name: "viewport",
                                content: "width=device-width, initial-scale=1.0"
                            }), (0, es.jsx)("meta", {
                                httpEquiv: "Content-Language",
                                content: "en"
                            }), (0, es.jsx)("meta", {
                                name: "description",
                                content: "FRVGS RP Server"
                            }), (0, es.jsx)("meta", {
                                name: "og:description",
                                content: "FRVGS RP Server"
                            }), (0, es.jsx)("meta", {
                                name: "twitter:card",
                                content: "summary_large_image"
                            }), (0, es.jsx)("meta", {
                                name: "twitter:image",
                                content: en
                            }), (0, es.jsx)("meta", {
                                name: "twitter:site:domain",
                                content: "frvgs.com"
                            }), (0, es.jsx)("meta", {
                                name: "twitter:url",
                                content: "https://frvgs.com"
                            }), (0, es.jsx)("meta", {
                                name: "og:title",
                                content: ee ? ee + " – BLRP" : "FiveM"
                            }), (0, es.jsx)("meta", {
                                name: "og:image",
                                content: en
                            }), (0, es.jsx)("meta", {
                                name: "apple-mobile-web-app-title",
                                content: "FRVGS"
                            }), (0, es.jsx)("link", {
                                rel: "icon",
                                href: "/favicon.svg",
                                type: "image/svg+xml"
                            }), (0, es.jsx)("link", {
                                rel: "icon",
                                href: "/favicon.png",
                                type: "image/png"
                            }), (0, es.jsx)("link", {
                                rel: "icon",
                                href: "/favicon-dark.png",
                                type: "image/svg+xml",
                                media: "(prefers-color-scheme: dark)"
                            }), (0, es.jsx)("link", {
                                rel: "icon",
                                href: "/favicon-dark.png",
                                type: "image/png",
                                media: "(prefers-color-scheme: dark)"
                            })]
                        })
                    },
                    sidebar: {
                        titleComponent(ee) {
                            let {
                                title: et,
                                type: en
                            } = ee;
                            return "separator" === en ? (0, es.jsx)("span", {
                                className: "cursor-default",
                                children: et
                            }) : (0, es.jsx)(es.Fragment, {
                                children: et
                            })
                        },
                        defaultMenuCollapseLevel: 1,
                        toggleButton: !0
                    },
                    toc: {
                        backToTop: !0
                    },
                    primaryHue: {
                        dark: 274,
                        light: 274
                    }
                };
            var ep = ed;
            en(7735), en(3589), en(5966);
            let eh = function(ee) {
                    let {
                        Component: et,
                        pageProps: en
                    } = ee;
                    return (0, es.jsx)(et, { ...en
                    })
                },
                ef = [];

            function em(ee) {
                return (0, es.jsx)(es.Fragment, {})
            }
            var ex = function() {
                let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (0, es.jsx)(eh, { ...ee,
                    children: (0, es.jsx)(em, { ...ee
                    })
                })
            };
            let eg = (er = globalThis)[ei = Symbol.for("__nextra_internal__")] || (er[ei] = Object.create(null));
            eg.Layout = eo.ZP, eg.pageMap = [{
                kind: "MdxPage",
                name: "404",
                route: "/404"
            }, {
                kind: "Meta",
                data: {
                    404: {
                        type: "page",
                        theme: {
                            timestamp: !1,
                            typesetting: "article"
                        },
                        title: "404"
                    },
                    index: {
                        type: "page",
                        title: "Home",
                        display: "hidden",
                        theme: {
                            layout: "raw"
                        }
                    },
                    docs: {
                        type: "page",
                        title: "\uD83D\uDCDA Server Docs"
                    },
                    business: {
                        type: "page",
                        title: "\uD83C\uDFE2 Business",
                        theme: {
                            typesetting: "article",
                            layout: "raw"
                        }
                    },
                    city: {
                        type: "page",
                        title: "\uD83C\uDFDB Public Service",
                        theme: {
                            typesetting: "article",
                            layout: "raw"
                        }
                    },
                    groups: {
                        title: "\uD83C\uDFF4‍☠️ Groups",
                        type: "page",
                        theme: {
                            layout: "raw"
                        }
                    },
                    webmap: {
                        title: "\uD83D\uDDFA Web Map",
                        type: "page"
                    }
                }
            }, {
                kind: "MdxPage",
                name: "business",
                route: "/business"
            }, {
                kind: "MdxPage",
                name: "city",
                route: "/city"
            }, {
                kind: "Folder",
                name: "docs",
                route: "/docs",
                children: [{
                    kind: "Meta",
                    data: {
                        index: "\uD83D\uDE80 Introduction",
                        "-- Server": {
                            type: "separator",
                            title: "Server"
                        },
                        rules: "\uD83D\uDCDC Rules",
                        definitions: "\uD83D\uDCD8 Glossary",
                        login: "\uD83C\uDF0D Login",
                        keybind: "\uD83D\uDD24 Keybind",
                        "-- Scripts": {
                            type: "separator",
                            title: "Scripts"
                        },
                        economie: "\uD83D\uDCC8 Economy",
                        banking: "\uD83C\uDFDB Banking",
                        menus: "\uD83D\uDDB1 Menus & UI",
                        phone: "\uD83D\uDCF1 Smartphone",
                        marketplace: "\uD83D\uDED2 Marketplace",
                        business: "\uD83C\uDFEC Business",
                        darkside: "\uD83C\uDFF4‍☠️ Darkside",
                        "-- Jobs": {
                            type: "separator",
                            title: "Jobs"
                        },
                        medic: "\uD83D\uDC69‍⚕ Medic",
                        police: "\uD83D\uDC6E‍♀ Police Man",
                        entrepreneur: "\uD83D\uDC68‍\uD83D\uDCBC Entrepreneur",
                        firefighter: "\uD83D\uDC69\uD83C\uDFFD‍\uD83D\uDE92 Fire Fighter",
                        farmer: "\uD83D\uDC69\uD83C\uDFFD‍\uD83C\uDF3E Farmer",
                        layer: "\uD83D\uDC69\uD83C\uDFFD‍✈️ Layer",
                        mechanics: "\uD83D\uDC69\uD83C\uDFFD‍\uD83D\uDD27 Mechanics"
                    }
                }, {
                    kind: "MdxPage",
                    name: "definitions",
                    route: "/docs/definitions"
                }, {
                    kind: "MdxPage",
                    name: "index",
                    route: "/docs"
                }, {
                    kind: "MdxPage",
                    name: "keybind",
                    route: "/docs/keybind"
                }, {
                    kind: "MdxPage",
                    name: "login",
                    route: "/docs/login"
                }, {
                    kind: "MdxPage",
                    name: "rules",
                    route: "/docs/rules"
                }]
            }, {
                kind: "MdxPage",
                name: "groups",
                route: "/groups"
            }, {
                kind: "MdxPage",
                name: "index",
                route: "/",
                frontMatter: {
                    title: "FRVGS RP Website"
                }
            }, {
                kind: "MdxPage",
                name: "webmap",
                route: "/webmap",
                frontMatter: {
                    title: "RP WebMap"
                }
            }], eg.flexsearch = {
                codeblocks: !1
            }, eg.themeConfig = ep
        },
        7735: function() {},
        3589: function() {},
        5966: function() {},
        8658: function(ee) {
            var et = "/";
            ! function() {
                "use strict";
                var en = {
                        114: function(ee) {
                            function et(ee) {
                                if ("string" != typeof ee) throw TypeError("Path must be a string. Received " + JSON.stringify(ee))
                            }

                            function en(ee, et) {
                                for (var en, er = "", ei = 0, es = -1, eo = 0, eu = 0; eu <= ee.length; ++eu) {
                                    if (eu < ee.length) en = ee.charCodeAt(eu);
                                    else if (47 === en) break;
                                    else en = 47;
                                    if (47 === en) {
                                        if (es === eu - 1 || 1 === eo);
                                        else if (es !== eu - 1 && 2 === eo) {
                                            if (er.length < 2 || 2 !== ei || 46 !== er.charCodeAt(er.length - 1) || 46 !== er.charCodeAt(er.length - 2)) {
                                                if (er.length > 2) {
                                                    var ec = er.lastIndexOf("/");
                                                    if (ec !== er.length - 1) {
                                                        -1 === ec ? (er = "", ei = 0) : ei = (er = er.slice(0, ec)).length - 1 - er.lastIndexOf("/"), es = eu, eo = 0;
                                                        continue
                                                    }
                                                } else if (2 === er.length || 1 === er.length) {
                                                    er = "", ei = 0, es = eu, eo = 0;
                                                    continue
                                                }
                                            }
                                            et && (er.length > 0 ? er += "/.." : er = "..", ei = 2)
                                        } else er.length > 0 ? er += "/" + ee.slice(es + 1, eu) : er = ee.slice(es + 1, eu), ei = eu - es - 1;
                                        es = eu, eo = 0
                                    } else 46 === en && -1 !== eo ? ++eo : eo = -1
                                }
                                return er
                            }

                            function er(ee, et) {
                                var en = et.dir || et.root,
                                    er = et.base || (et.name || "") + (et.ext || "");
                                return en ? en === et.root ? en + er : en + ee + er : er
                            }
                            var ei = {
                                resolve: function() {
                                    for (var ee, er, ei = "", es = !1, eo = arguments.length - 1; eo >= -1 && !es; eo--) eo >= 0 ? er = arguments[eo] : (void 0 === ee && (ee = ""), er = ee), et(er), 0 !== er.length && (ei = er + "/" + ei, es = 47 === er.charCodeAt(0));
                                    return (ei = en(ei, !es), es) ? ei.length > 0 ? "/" + ei : "/" : ei.length > 0 ? ei : "."
                                },
                                normalize: function(ee) {
                                    if (et(ee), 0 === ee.length) return ".";
                                    var er = 47 === ee.charCodeAt(0),
                                        ei = 47 === ee.charCodeAt(ee.length - 1);
                                    return (0 !== (ee = en(ee, !er)).length || er || (ee = "."), ee.length > 0 && ei && (ee += "/"), er) ? "/" + ee : ee
                                },
                                isAbsolute: function(ee) {
                                    return et(ee), ee.length > 0 && 47 === ee.charCodeAt(0)
                                },
                                join: function() {
                                    if (0 == arguments.length) return ".";
                                    for (var ee, en = 0; en < arguments.length; ++en) {
                                        var er = arguments[en];
                                        et(er), er.length > 0 && (void 0 === ee ? ee = er : ee += "/" + er)
                                    }
                                    return void 0 === ee ? "." : ei.normalize(ee)
                                },
                                relative: function(ee, en) {
                                    if (et(ee), et(en), ee === en || (ee = ei.resolve(ee)) === (en = ei.resolve(en))) return "";
                                    for (var er = 1; er < ee.length && 47 === ee.charCodeAt(er); ++er);
                                    for (var es = ee.length, eo = es - er, eu = 1; eu < en.length && 47 === en.charCodeAt(eu); ++eu);
                                    for (var ec = en.length - eu, ed = eo < ec ? eo : ec, ep = -1, eh = 0; eh <= ed; ++eh) {
                                        if (eh === ed) {
                                            if (ec > ed) {
                                                if (47 === en.charCodeAt(eu + eh)) return en.slice(eu + eh + 1);
                                                if (0 === eh) return en.slice(eu + eh)
                                            } else eo > ed && (47 === ee.charCodeAt(er + eh) ? ep = eh : 0 === eh && (ep = 0));
                                            break
                                        }
                                        var ef = ee.charCodeAt(er + eh);
                                        if (ef !== en.charCodeAt(eu + eh)) break;
                                        47 === ef && (ep = eh)
                                    }
                                    var em = "";
                                    for (eh = er + ep + 1; eh <= es; ++eh)(eh === es || 47 === ee.charCodeAt(eh)) && (0 === em.length ? em += ".." : em += "/..");
                                    return em.length > 0 ? em + en.slice(eu + ep) : (eu += ep, 47 === en.charCodeAt(eu) && ++eu, en.slice(eu))
                                },
                                _makeLong: function(ee) {
                                    return ee
                                },
                                dirname: function(ee) {
                                    if (et(ee), 0 === ee.length) return ".";
                                    for (var en = ee.charCodeAt(0), er = 47 === en, ei = -1, es = !0, eo = ee.length - 1; eo >= 1; --eo)
                                        if (47 === (en = ee.charCodeAt(eo))) {
                                            if (!es) {
                                                ei = eo;
                                                break
                                            }
                                        } else es = !1;
                                    return -1 === ei ? er ? "/" : "." : er && 1 === ei ? "//" : ee.slice(0, ei)
                                },
                                basename: function(ee, en) {
                                    if (void 0 !== en && "string" != typeof en) throw TypeError('"ext" argument must be a string');
                                    et(ee);
                                    var er, ei = 0,
                                        es = -1,
                                        eo = !0;
                                    if (void 0 !== en && en.length > 0 && en.length <= ee.length) {
                                        if (en.length === ee.length && en === ee) return "";
                                        var eu = en.length - 1,
                                            ec = -1;
                                        for (er = ee.length - 1; er >= 0; --er) {
                                            var ed = ee.charCodeAt(er);
                                            if (47 === ed) {
                                                if (!eo) {
                                                    ei = er + 1;
                                                    break
                                                }
                                            } else -1 === ec && (eo = !1, ec = er + 1), eu >= 0 && (ed === en.charCodeAt(eu) ? -1 == --eu && (es = er) : (eu = -1, es = ec))
                                        }
                                        return ei === es ? es = ec : -1 === es && (es = ee.length), ee.slice(ei, es)
                                    }
                                    for (er = ee.length - 1; er >= 0; --er)
                                        if (47 === ee.charCodeAt(er)) {
                                            if (!eo) {
                                                ei = er + 1;
                                                break
                                            }
                                        } else -1 === es && (eo = !1, es = er + 1);
                                    return -1 === es ? "" : ee.slice(ei, es)
                                },
                                extname: function(ee) {
                                    et(ee);
                                    for (var en = -1, er = 0, ei = -1, es = !0, eo = 0, eu = ee.length - 1; eu >= 0; --eu) {
                                        var ec = ee.charCodeAt(eu);
                                        if (47 === ec) {
                                            if (!es) {
                                                er = eu + 1;
                                                break
                                            }
                                            continue
                                        } - 1 === ei && (es = !1, ei = eu + 1), 46 === ec ? -1 === en ? en = eu : 1 !== eo && (eo = 1) : -1 !== en && (eo = -1)
                                    }
                                    return -1 === en || -1 === ei || 0 === eo || 1 === eo && en === ei - 1 && en === er + 1 ? "" : ee.slice(en, ei)
                                },
                                format: function(ee) {
                                    if (null === ee || "object" != typeof ee) throw TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof ee);
                                    return er("/", ee)
                                },
                                parse: function(ee) {
                                    et(ee);
                                    var en, er = {
                                        root: "",
                                        dir: "",
                                        base: "",
                                        ext: "",
                                        name: ""
                                    };
                                    if (0 === ee.length) return er;
                                    var ei = ee.charCodeAt(0),
                                        es = 47 === ei;
                                    es ? (er.root = "/", en = 1) : en = 0;
                                    for (var eo = -1, eu = 0, ec = -1, ed = !0, ep = ee.length - 1, eh = 0; ep >= en; --ep) {
                                        if (47 === (ei = ee.charCodeAt(ep))) {
                                            if (!ed) {
                                                eu = ep + 1;
                                                break
                                            }
                                            continue
                                        } - 1 === ec && (ed = !1, ec = ep + 1), 46 === ei ? -1 === eo ? eo = ep : 1 !== eh && (eh = 1) : -1 !== eo && (eh = -1)
                                    }
                                    return -1 === eo || -1 === ec || 0 === eh || 1 === eh && eo === ec - 1 && eo === eu + 1 ? -1 !== ec && (0 === eu && es ? er.base = er.name = ee.slice(1, ec) : er.base = er.name = ee.slice(eu, ec)) : (0 === eu && es ? (er.name = ee.slice(1, eo), er.base = ee.slice(1, ec)) : (er.name = ee.slice(eu, eo), er.base = ee.slice(eu, ec)), er.ext = ee.slice(eo, ec)), eu > 0 ? er.dir = ee.slice(0, eu - 1) : es && (er.dir = "/"), er
                                },
                                sep: "/",
                                delimiter: ":",
                                win32: null,
                                posix: null
                            };
                            ei.posix = ei, ee.exports = ei
                        }
                    },
                    er = {};

                function ei(ee) {
                    var et = er[ee];
                    if (void 0 !== et) return et.exports;
                    var es = er[ee] = {
                            exports: {}
                        },
                        eo = !0;
                    try {
                        en[ee](es, es.exports, ei), eo = !1
                    } finally {
                        eo && delete er[ee]
                    }
                    return es.exports
                }
                ei.ab = et + "/";
                var es = ei(114);
                ee.exports = es
            }()
        },
        8110: function(ee, et, en) {
            ee.exports = en(4637)
        },
        829: function(ee, et, en) {
            ee.exports = en(3962)
        },
        9556: function(ee, et, en) {
            ee.exports = en(2543)
        },
        1403: function(ee, et, en) {
            ee.exports = en(8331)
        },
        2513: function(ee, et, en) {
            "use strict";
            var er = en(3155);

            function ei(ee) {
                var et = {
                    protocols: [],
                    protocol: null,
                    port: null,
                    resource: "",
                    host: "",
                    user: "",
                    password: "",
                    pathname: "",
                    hash: "",
                    search: "",
                    href: ee,
                    query: {},
                    parse_failed: !1
                };
                try {
                    var en = new URL(ee);
                    et.protocols = er(en), et.protocol = et.protocols[0], et.port = en.port, et.resource = en.hostname, et.host = en.host, et.user = en.username || "", et.password = en.password || "", et.pathname = en.pathname, et.hash = en.hash.slice(1), et.search = en.search.slice(1), et.href = en.href, et.query = Object.fromEntries(en.searchParams)
                } catch (en) {
                    et.protocols = ["file"], et.protocol = et.protocols[0], et.port = "", et.resource = "", et.user = "", et.pathname = "", et.hash = "", et.search = "", et.href = ee, et.query = {}, et.parse_failed = !0
                }
                return et
            }
            ee.exports = ei
        },
        2343: function(ee, et, en) {
            "use strict";
            var er = function(ee) {
                return ee && "object" == typeof ee && "default" in ee ? ee : {
                    default: ee
                }
            }(en(2513));
            let ei = "text/plain",
                es = "us-ascii",
                eo = (ee, et) => et.some(et => et instanceof RegExp ? et.test(ee) : et === ee),
                eu = (ee, {
                    stripHash: et
                }) => {
                    let en = /^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(ee);
                    if (!en) throw Error(`Invalid URL: ${ee}`);
                    let {
                        type: er,
                        data: eo,
                        hash: eu
                    } = en.groups, ec = er.split(";");
                    eu = et ? "" : eu;
                    let ed = !1;
                    "base64" === ec[ec.length - 1] && (ec.pop(), ed = !0);
                    let ep = (ec.shift() || "").toLowerCase(),
                        eh = ec.map(ee => {
                            let [et, en = ""] = ee.split("=").map(ee => ee.trim());
                            return "charset" === et && (en = en.toLowerCase()) === es ? "" : `${et}${en?`=${en}`:""}`
                        }).filter(Boolean),
                        ef = [...eh];
                    return ed && ef.push("base64"), (ef.length > 0 || ep && ep !== ei) && ef.unshift(ep), `data:${ef.join(";")},${ed?eo.trim():eo}${eu?`#${eu}`:""}`
                };

            function ec(ee, et) {
                if (et = {
                        defaultProtocol: "http:",
                        normalizeProtocol: !0,
                        forceHttp: !1,
                        forceHttps: !1,
                        stripAuthentication: !0,
                        stripHash: !1,
                        stripTextFragment: !0,
                        stripWWW: !0,
                        removeQueryParameters: [/^utm_\w+/i],
                        removeTrailingSlash: !0,
                        removeSingleSlash: !0,
                        removeDirectoryIndex: !1,
                        sortQueryParameters: !0,
                        ...et
                    }, ee = ee.trim(), /^data:/i.test(ee)) return eu(ee, et);
                if (/^view-source:/i.test(ee)) throw Error("`view-source:` is not supported as it is a non-standard protocol");
                let en = ee.startsWith("//"),
                    er = !en && /^\.*\//.test(ee);
                er || (ee = ee.replace(/^(?!(?:\w+:)?\/\/)|^\/\//, et.defaultProtocol));
                let ei = new URL(ee);
                if (et.forceHttp && et.forceHttps) throw Error("The `forceHttp` and `forceHttps` options cannot be used together");
                if (et.forceHttp && "https:" === ei.protocol && (ei.protocol = "http:"), et.forceHttps && "http:" === ei.protocol && (ei.protocol = "https:"), et.stripAuthentication && (ei.username = "", ei.password = ""), et.stripHash ? ei.hash = "" : et.stripTextFragment && (ei.hash = ei.hash.replace(/#?:~:text.*?$/i, "")), ei.pathname) {
                    let ee = /\b[a-z][a-z\d+\-.]{1,50}:\/\//g,
                        et = 0,
                        en = "";
                    for (;;) {
                        let er = ee.exec(ei.pathname);
                        if (!er) break;
                        let es = er[0],
                            eo = er.index,
                            eu = ei.pathname.slice(et, eo);
                        en += eu.replace(/\/{2,}/g, "/") + es, et = eo + es.length
                    }
                    let er = ei.pathname.slice(et, ei.pathname.length);
                    en += er.replace(/\/{2,}/g, "/"), ei.pathname = en
                }
                if (ei.pathname) try {
                    ei.pathname = decodeURI(ei.pathname)
                } catch {}
                if (!0 === et.removeDirectoryIndex && (et.removeDirectoryIndex = [/^index\.[a-z]+$/]), Array.isArray(et.removeDirectoryIndex) && et.removeDirectoryIndex.length > 0) {
                    let ee = ei.pathname.split("/"),
                        en = ee[ee.length - 1];
                    eo(en, et.removeDirectoryIndex) && (ee = ee.slice(0, -1), ei.pathname = ee.slice(1).join("/") + "/")
                }
                if (ei.hostname && (ei.hostname = ei.hostname.replace(/\.$/, ""), et.stripWWW && /^www\.(?!www\.)[a-z\-\d]{1,63}\.[a-z.\-\d]{2,63}$/.test(ei.hostname) && (ei.hostname = ei.hostname.replace(/^www\./, ""))), Array.isArray(et.removeQueryParameters))
                    for (let ee of [...ei.searchParams.keys()]) eo(ee, et.removeQueryParameters) && ei.searchParams.delete(ee);
                if (!0 === et.removeQueryParameters && (ei.search = ""), et.sortQueryParameters) {
                    ei.searchParams.sort();
                    try {
                        ei.search = decodeURIComponent(ei.search)
                    } catch {}
                }
                et.removeTrailingSlash && (ei.pathname = ei.pathname.replace(/\/$/, ""));
                let es = ee;
                return ee = ei.toString(), et.removeSingleSlash || "/" !== ei.pathname || es.endsWith("/") || "" !== ei.hash || (ee = ee.replace(/\/$/, "")), (et.removeTrailingSlash || "/" === ei.pathname) && "" === ei.hash && et.removeSingleSlash && (ee = ee.replace(/\/$/, "")), en && !et.normalizeProtocol && (ee = ee.replace(/^http:\/\//, "//")), et.stripProtocol && (ee = ee.replace(/^(?:https?:)?\/\//, "")), ee
            }
            let ed = (ee, et = !1) => {
                let en = /^(?:([a-z_][a-z0-9_-]{0,31})@|https?:\/\/)([\w\.\-@]+)[\/:]([\~,\.\w,\-,\_,\/]+?(?:\.git|\/)?)$/,
                    ei = et => {
                        let en = Error(et);
                        throw en.subject_url = ee, en
                    };
                "string" == typeof ee && ee.trim() || ei("Invalid url."), ee.length > ed.MAX_INPUT_LENGTH && ei("Input exceeds maximum length. If needed, change the value of parseUrl.MAX_INPUT_LENGTH."), et && ("object" != typeof et && (et = {
                    stripHash: !1
                }), ee = ec(ee, et));
                let es = er.default(ee);
                if (es.parse_failed) {
                    let ee = es.href.match(en);
                    ee ? (es.protocols = ["ssh"], es.protocol = "ssh", es.resource = ee[2], es.host = ee[2], es.user = ee[1], es.pathname = `/${ee[3]}`, es.parse_failed = !1) : ei("URL parsing failed.")
                }
                return es
            };
            ed.MAX_INPUT_LENGTH = 2048, ee.exports = ed
        },
        4675: function(ee) {
            var et, en, er, ei = ee.exports = {};

            function es() {
                throw Error("setTimeout has not been defined")
            }

            function eo() {
                throw Error("clearTimeout has not been defined")
            }

            function eu(ee) {
                if (et === setTimeout) return setTimeout(ee, 0);
                if ((et === es || !et) && setTimeout) return et = setTimeout, setTimeout(ee, 0);
                try {
                    return et(ee, 0)
                } catch (en) {
                    try {
                        return et.call(null, ee, 0)
                    } catch (en) {
                        return et.call(this, ee, 0)
                    }
                }
            }

            function ec(ee) {
                if (en === clearTimeout) return clearTimeout(ee);
                if ((en === eo || !en) && clearTimeout) return en = clearTimeout, clearTimeout(ee);
                try {
                    return en(ee)
                } catch (et) {
                    try {
                        return en.call(null, ee)
                    } catch (et) {
                        return en.call(this, ee)
                    }
                }
            }! function() {
                try {
                    et = "function" == typeof setTimeout ? setTimeout : es
                } catch (ee) {
                    et = es
                }
                try {
                    en = "function" == typeof clearTimeout ? clearTimeout : eo
                } catch (ee) {
                    en = eo
                }
            }();
            var ed = [],
                ep = !1,
                eh = -1;

            function ef() {
                ep && er && (ep = !1, er.length ? ed = er.concat(ed) : eh = -1, ed.length && em())
            }

            function em() {
                if (!ep) {
                    var ee = eu(ef);
                    ep = !0;
                    for (var et = ed.length; et;) {
                        for (er = ed, ed = []; ++eh < et;) er && er[eh].run();
                        eh = -1, et = ed.length
                    }
                    er = null, ep = !1, ec(ee)
                }
            }

            function ex(ee, et) {
                this.fun = ee, this.array = et
            }

            function eg() {}
            ei.nextTick = function(ee) {
                var et = Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var en = 1; en < arguments.length; en++) et[en - 1] = arguments[en];
                ed.push(new ex(ee, et)), 1 !== ed.length || ep || eu(em)
            }, ex.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, ei.title = "browser", ei.browser = !0, ei.env = {}, ei.argv = [], ei.version = "", ei.versions = {}, ei.on = eg, ei.addListener = eg, ei.once = eg, ei.off = eg, ei.removeListener = eg, ei.removeAllListeners = eg, ei.emit = eg, ei.prependListener = eg, ei.prependOnceListener = eg, ei.listeners = function(ee) {
                return []
            }, ei.binding = function(ee) {
                throw Error("process.binding is not supported")
            }, ei.cwd = function() {
                return "/"
            }, ei.chdir = function(ee) {
                throw Error("process.chdir is not supported")
            }, ei.umask = function() {
                return 0
            }
        },
        3155: function(ee) {
            "use strict";
            ee.exports = function(ee, et) {
                !0 === et && (et = 0);
                var en = "";
                if ("string" == typeof ee) try {
                    en = new URL(ee).protocol
                } catch (ee) {} else ee && ee.constructor === URL && (en = ee.protocol);
                var er = en.split(/\:|\+/).filter(Boolean);
                return "number" == typeof et ? er[et] : er
            }
        },
        5454: function(ee) {
            var et = {
                    À: "A",
                    Á: "A",
                    Â: "A",
                    Ã: "A",
                    Ä: "A",
                    Å: "A",
                    Ấ: "A",
                    Ắ: "A",
                    Ẳ: "A",
                    Ẵ: "A",
                    Ặ: "A",
                    Æ: "AE",
                    Ầ: "A",
                    Ằ: "A",
                    Ȃ: "A",
                    Ç: "C",
                    Ḉ: "C",
                    È: "E",
                    É: "E",
                    Ê: "E",
                    Ë: "E",
                    Ế: "E",
                    Ḗ: "E",
                    Ề: "E",
                    Ḕ: "E",
                    Ḝ: "E",
                    Ȇ: "E",
                    Ì: "I",
                    Í: "I",
                    Î: "I",
                    Ï: "I",
                    Ḯ: "I",
                    Ȋ: "I",
                    Ð: "D",
                    Ñ: "N",
                    Ò: "O",
                    Ó: "O",
                    Ô: "O",
                    Õ: "O",
                    Ö: "O",
                    Ø: "O",
                    Ố: "O",
                    Ṍ: "O",
                    Ṓ: "O",
                    Ȏ: "O",
                    Ù: "U",
                    Ú: "U",
                    Û: "U",
                    Ü: "U",
                    Ý: "Y",
                    à: "a",
                    á: "a",
                    â: "a",
                    ã: "a",
                    ä: "a",
                    å: "a",
                    ấ: "a",
                    ắ: "a",
                    ẳ: "a",
                    ẵ: "a",
                    ặ: "a",
                    æ: "ae",
                    ầ: "a",
                    ằ: "a",
                    ȃ: "a",
                    ç: "c",
                    ḉ: "c",
                    è: "e",
                    é: "e",
                    ê: "e",
                    ë: "e",
                    ế: "e",
                    ḗ: "e",
                    ề: "e",
                    ḕ: "e",
                    ḝ: "e",
                    ȇ: "e",
                    ì: "i",
                    í: "i",
                    î: "i",
                    ï: "i",
                    ḯ: "i",
                    ȋ: "i",
                    ð: "d",
                    ñ: "n",
                    ò: "o",
                    ó: "o",
                    ô: "o",
                    õ: "o",
                    ö: "o",
                    ø: "o",
                    ố: "o",
                    ṍ: "o",
                    ṓ: "o",
                    ȏ: "o",
                    ù: "u",
                    ú: "u",
                    û: "u",
                    ü: "u",
                    ý: "y",
                    ÿ: "y",
                    Ā: "A",
                    ā: "a",
                    Ă: "A",
                    ă: "a",
                    Ą: "A",
                    ą: "a",
                    Ć: "C",
                    ć: "c",
                    Ĉ: "C",
                    ĉ: "c",
                    Ċ: "C",
                    ċ: "c",
                    Č: "C",
                    č: "c",
                    C̆: "C",
                    c̆: "c",
                    Ď: "D",
                    ď: "d",
                    Đ: "D",
                    đ: "d",
                    Ē: "E",
                    ē: "e",
                    Ĕ: "E",
                    ĕ: "e",
                    Ė: "E",
                    ė: "e",
                    Ę: "E",
                    ę: "e",
                    Ě: "E",
                    ě: "e",
                    Ĝ: "G",
                    Ǵ: "G",
                    ĝ: "g",
                    ǵ: "g",
                    Ğ: "G",
                    ğ: "g",
                    Ġ: "G",
                    ġ: "g",
                    Ģ: "G",
                    ģ: "g",
                    Ĥ: "H",
                    ĥ: "h",
                    Ħ: "H",
                    ħ: "h",
                    Ḫ: "H",
                    ḫ: "h",
                    Ĩ: "I",
                    ĩ: "i",
                    Ī: "I",
                    ī: "i",
                    Ĭ: "I",
                    ĭ: "i",
                    Į: "I",
                    į: "i",
                    İ: "I",
                    ı: "i",
                    Ĳ: "IJ",
                    ĳ: "ij",
                    Ĵ: "J",
                    ĵ: "j",
                    Ķ: "K",
                    ķ: "k",
                    Ḱ: "K",
                    ḱ: "k",
                    K̆: "K",
                    k̆: "k",
                    Ĺ: "L",
                    ĺ: "l",
                    Ļ: "L",
                    ļ: "l",
                    Ľ: "L",
                    ľ: "l",
                    Ŀ: "L",
                    ŀ: "l",
                    Ł: "l",
                    ł: "l",
                    Ḿ: "M",
                    ḿ: "m",
                    M̆: "M",
                    m̆: "m",
                    Ń: "N",
                    ń: "n",
                    Ņ: "N",
                    ņ: "n",
                    Ň: "N",
                    ň: "n",
                    ŉ: "n",
                    N̆: "N",
                    n̆: "n",
                    Ō: "O",
                    ō: "o",
                    Ŏ: "O",
                    ŏ: "o",
                    Ő: "O",
                    ő: "o",
                    Œ: "OE",
                    œ: "oe",
                    P̆: "P",
                    p̆: "p",
                    Ŕ: "R",
                    ŕ: "r",
                    Ŗ: "R",
                    ŗ: "r",
                    Ř: "R",
                    ř: "r",
                    R̆: "R",
                    r̆: "r",
                    Ȓ: "R",
                    ȓ: "r",
                    Ś: "S",
                    ś: "s",
                    Ŝ: "S",
                    ŝ: "s",
                    Ş: "S",
                    Ș: "S",
                    ș: "s",
                    ş: "s",
                    Š: "S",
                    š: "s",
                    Ţ: "T",
                    ţ: "t",
                    ț: "t",
                    Ț: "T",
                    Ť: "T",
                    ť: "t",
                    Ŧ: "T",
                    ŧ: "t",
                    T̆: "T",
                    t̆: "t",
                    Ũ: "U",
                    ũ: "u",
                    Ū: "U",
                    ū: "u",
                    Ŭ: "U",
                    ŭ: "u",
                    Ů: "U",
                    ů: "u",
                    Ű: "U",
                    ű: "u",
                    Ų: "U",
                    ų: "u",
                    Ȗ: "U",
                    ȗ: "u",
                    V̆: "V",
                    v̆: "v",
                    Ŵ: "W",
                    ŵ: "w",
                    Ẃ: "W",
                    ẃ: "w",
                    X̆: "X",
                    x̆: "x",
                    Ŷ: "Y",
                    ŷ: "y",
                    Ÿ: "Y",
                    Y̆: "Y",
                    y̆: "y",
                    Ź: "Z",
                    ź: "z",
                    Ż: "Z",
                    ż: "z",
                    Ž: "Z",
                    ž: "z",
                    ſ: "s",
                    ƒ: "f",
                    Ơ: "O",
                    ơ: "o",
                    Ư: "U",
                    ư: "u",
                    Ǎ: "A",
                    ǎ: "a",
                    Ǐ: "I",
                    ǐ: "i",
                    Ǒ: "O",
                    ǒ: "o",
                    Ǔ: "U",
                    ǔ: "u",
                    Ǖ: "U",
                    ǖ: "u",
                    Ǘ: "U",
                    ǘ: "u",
                    Ǚ: "U",
                    ǚ: "u",
                    Ǜ: "U",
                    ǜ: "u",
                    Ứ: "U",
                    ứ: "u",
                    Ṹ: "U",
                    ṹ: "u",
                    Ǻ: "A",
                    ǻ: "a",
                    Ǽ: "AE",
                    ǽ: "ae",
                    Ǿ: "O",
                    ǿ: "o",
                    Þ: "TH",
                    þ: "th",
                    Ṕ: "P",
                    ṕ: "p",
                    Ṥ: "S",
                    ṥ: "s",
                    X́: "X",
                    x́: "x",
                    Ѓ: "Г",
                    ѓ: "г",
                    Ќ: "К",
                    ќ: "к",
                    A̋: "A",
                    a̋: "a",
                    E̋: "E",
                    e̋: "e",
                    I̋: "I",
                    i̋: "i",
                    Ǹ: "N",
                    ǹ: "n",
                    Ồ: "O",
                    ồ: "o",
                    Ṑ: "O",
                    ṑ: "o",
                    Ừ: "U",
                    ừ: "u",
                    Ẁ: "W",
                    ẁ: "w",
                    Ỳ: "Y",
                    ỳ: "y",
                    Ȁ: "A",
                    ȁ: "a",
                    Ȅ: "E",
                    ȅ: "e",
                    Ȉ: "I",
                    ȉ: "i",
                    Ȍ: "O",
                    ȍ: "o",
                    Ȑ: "R",
                    ȑ: "r",
                    Ȕ: "U",
                    ȕ: "u",
                    B̌: "B",
                    b̌: "b",
                    Č̣: "C",
                    č̣: "c",
                    Ê̌: "E",
                    ê̌: "e",
                    F̌: "F",
                    f̌: "f",
                    Ǧ: "G",
                    ǧ: "g",
                    Ȟ: "H",
                    ȟ: "h",
                    J̌: "J",
                    ǰ: "j",
                    Ǩ: "K",
                    ǩ: "k",
                    M̌: "M",
                    m̌: "m",
                    P̌: "P",
                    p̌: "p",
                    Q̌: "Q",
                    q̌: "q",
                    Ř̩: "R",
                    ř̩: "r",
                    Ṧ: "S",
                    ṧ: "s",
                    V̌: "V",
                    v̌: "v",
                    W̌: "W",
                    w̌: "w",
                    X̌: "X",
                    x̌: "x",
                    Y̌: "Y",
                    y̌: "y",
                    A̧: "A",
                    a̧: "a",
                    B̧: "B",
                    b̧: "b",
                    Ḑ: "D",
                    ḑ: "d",
                    Ȩ: "E",
                    ȩ: "e",
                    Ɛ̧: "E",
                    ɛ̧: "e",
                    Ḩ: "H",
                    ḩ: "h",
                    I̧: "I",
                    i̧: "i",
                    Ɨ̧: "I",
                    ɨ̧: "i",
                    M̧: "M",
                    m̧: "m",
                    O̧: "O",
                    o̧: "o",
                    Q̧: "Q",
                    q̧: "q",
                    U̧: "U",
                    u̧: "u",
                    X̧: "X",
                    x̧: "x",
                    Z̧: "Z",
                    z̧: "z"
                },
                en = Object.keys(et).join("|"),
                er = RegExp(en, "g"),
                ei = RegExp(en, ""),
                es = function(ee) {
                    return ee.replace(er, function(ee) {
                        return et[ee]
                    })
                },
                eo = function(ee) {
                    return !!ee.match(ei)
                };
            ee.exports = es, ee.exports.has = eo, ee.exports.remove = es
        },
        1266: function(ee, et, en) {
            "use strict";
            en.d(et, {
                AO: function() {
                    return uE
                },
                ZP: function() {
                    return co
                },
                ZR: function() {
                    return lX
                }
            });
            var er, ei, es, eo, eu, ec, ed, ep, eh, ef, em, ex, eg, ev, ey, eb, e_, ew, ek, ej = en(1403),
                eE = en(79);
            en(9745);
            var eT = en(3230);

            function eO() {
                let [ee, et] = (0, eE.useState)(!1);
                return (0, eE.useEffect)(() => {
                    et(!0)
                }, []), ee
            }
            var eC = en(4594),
                eN = "https://nextra.vercel.app",
                eS = () => {
                    let {
                        locale: ee = eC.ZW,
                        asPath: et,
                        route: en
                    } = (0, ej.useRouter)();
                    return (0, eE.useMemo)(() => {
                        let er = eC.hV.has(en) ? en : et,
                            {
                                pathname: ei
                            } = new URL(er, eN),
                            es = ee ? ei.replace(RegExp(`\\.${ee}(\\/|$)`), "$1") : ei;
                        return es.replace(/\.html$/, "").replace(/\/index(\/|$)/, "$1").replace(/\/$/, "") || "/"
                    }, [et, ee, en])
                },
                eR = en(7298),
                eI = en(1382);
            ! function(ee) {
                function et(ee) {}

                function en(ee) {
                    throw Error()
                }

                function er(ee, et = " | ") {
                    return ee.map(ee => "string" == typeof ee ? `'${ee}'` : ee).join(et)
                }
                ee.assertEqual = ee => ee, ee.assertIs = et, ee.assertNever = en, ee.arrayToEnum = ee => {
                    let et = {};
                    for (let en of ee) et[en] = en;
                    return et
                }, ee.getValidEnumValues = et => {
                    let en = ee.objectKeys(et).filter(ee => "number" != typeof et[et[ee]]),
                        er = {};
                    for (let ee of en) er[ee] = et[ee];
                    return ee.objectValues(er)
                }, ee.objectValues = et => ee.objectKeys(et).map(function(ee) {
                    return et[ee]
                }), ee.objectKeys = "function" == typeof Object.keys ? ee => Object.keys(ee) : ee => {
                    let et = [];
                    for (let en in ee) Object.prototype.hasOwnProperty.call(ee, en) && et.push(en);
                    return et
                }, ee.find = (ee, et) => {
                    for (let en of ee)
                        if (et(en)) return en
                }, ee.isInteger = "function" == typeof Number.isInteger ? ee => Number.isInteger(ee) : ee => "number" == typeof ee && isFinite(ee) && Math.floor(ee) === ee, ee.joinValues = er, ee.jsonStringifyReplacer = (ee, et) => "bigint" == typeof et ? et.toString() : et
            }(em || (em = {}));
            let eA = em.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
                eP = ee => {
                    let et = typeof ee;
                    switch (et) {
                        case "undefined":
                            return eA.undefined;
                        case "string":
                            return eA.string;
                        case "number":
                            return isNaN(ee) ? eA.nan : eA.number;
                        case "boolean":
                            return eA.boolean;
                        case "function":
                            return eA.function;
                        case "bigint":
                            return eA.bigint;
                        case "symbol":
                            return eA.symbol;
                        case "object":
                            if (Array.isArray(ee)) return eA.array;
                            if (null === ee) return eA.null;
                            if (ee.then && "function" == typeof ee.then && ee.catch && "function" == typeof ee.catch) return eA.promise;
                            if ("undefined" != typeof Map && ee instanceof Map) return eA.map;
                            if ("undefined" != typeof Set && ee instanceof Set) return eA.set;
                            if ("undefined" != typeof Date && ee instanceof Date) return eA.date;
                            return eA.object;
                        default:
                            return eA.unknown
                    }
                },
                eZ = em.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]),
                eL = ee => {
                    let et = JSON.stringify(ee, null, 2);
                    return et.replace(/"([^"]+)":/g, "$1:")
                };
            class eD extends Error {
                constructor(ee) {
                    super(), this.issues = [], this.addIssue = ee => {
                        this.issues = [...this.issues, ee]
                    }, this.addIssues = (ee = []) => {
                        this.issues = [...this.issues, ...ee]
                    };
                    let et = new.target.prototype;
                    Object.setPrototypeOf ? Object.setPrototypeOf(this, et) : this.__proto__ = et, this.name = "ZodError", this.issues = ee
                }
                get errors() {
                    return this.issues
                }
                format(ee) {
                    let et = ee || function(ee) {
                            return ee.message
                        },
                        en = {
                            _errors: []
                        },
                        er = ee => {
                            for (let ei of ee.issues)
                                if ("invalid_union" === ei.code) ei.unionErrors.map(er);
                                else if ("invalid_return_type" === ei.code) er(ei.returnTypeError);
                            else if ("invalid_arguments" === ei.code) er(ei.argumentsError);
                            else if (0 === ei.path.length) en._errors.push(et(ei));
                            else {
                                let ee = en,
                                    er = 0;
                                for (; er < ei.path.length;) {
                                    let en = ei.path[er],
                                        es = er === ei.path.length - 1;
                                    es ? (ee[en] = ee[en] || {
                                        _errors: []
                                    }, ee[en]._errors.push(et(ei))) : ee[en] = ee[en] || {
                                        _errors: []
                                    }, ee = ee[en], er++
                                }
                            }
                        };
                    return er(this), en
                }
                toString() {
                    return this.message
                }
                get message() {
                    return JSON.stringify(this.issues, em.jsonStringifyReplacer, 2)
                }
                get isEmpty() {
                    return 0 === this.issues.length
                }
                flatten(ee = ee => ee.message) {
                    let et = {},
                        en = [];
                    for (let er of this.issues) er.path.length > 0 ? (et[er.path[0]] = et[er.path[0]] || [], et[er.path[0]].push(ee(er))) : en.push(ee(er));
                    return {
                        formErrors: en,
                        fieldErrors: et
                    }
                }
                get formErrors() {
                    return this.flatten()
                }
            }
            eD.create = ee => {
                let et = new eD(ee);
                return et
            };
            let eM = (ee, et) => {
                    let en;
                    switch (ee.code) {
                        case eZ.invalid_type:
                            en = ee.received === eA.undefined ? "Required" : `Expected ${ee.expected}, received ${ee.received}`;
                            break;
                        case eZ.invalid_literal:
                            en = `Invalid literal value, expected ${JSON.stringify(ee.expected,em.jsonStringifyReplacer)}`;
                            break;
                        case eZ.unrecognized_keys:
                            en = `Unrecognized key(s) in object: ${em.joinValues(ee.keys,", ")}`;
                            break;
                        case eZ.invalid_union:
                            en = "Invalid input";
                            break;
                        case eZ.invalid_union_discriminator:
                            en = `Invalid discriminator value. Expected ${em.joinValues(ee.options)}`;
                            break;
                        case eZ.invalid_enum_value:
                            en = `Invalid enum value. Expected ${em.joinValues(ee.options)}, received '${ee.received}'`;
                            break;
                        case eZ.invalid_arguments:
                            en = "Invalid function arguments";
                            break;
                        case eZ.invalid_return_type:
                            en = "Invalid function return type";
                            break;
                        case eZ.invalid_date:
                            en = "Invalid date";
                            break;
                        case eZ.invalid_string:
                            "object" == typeof ee.validation ? "startsWith" in ee.validation ? en = `Invalid input: must start with "${ee.validation.startsWith}"` : "endsWith" in ee.validation ? en = `Invalid input: must end with "${ee.validation.endsWith}"` : em.assertNever(ee.validation) : en = "regex" !== ee.validation ? `Invalid ${ee.validation}` : "Invalid";
                            break;
                        case eZ.too_small:
                            en = "array" === ee.type ? `Array must contain ${ee.exact?"exactly":ee.inclusive?"at least":"more than"} ${ee.minimum} element(s)` : "string" === ee.type ? `String must contain ${ee.exact?"exactly":ee.inclusive?"at least":"over"} ${ee.minimum} character(s)` : "number" === ee.type ? `Number must be ${ee.exact?"exactly equal to ":ee.inclusive?"greater than or equal to ":"greater than "}${ee.minimum}` : "date" === ee.type ? `Date must be ${ee.exact?"exactly equal to ":ee.inclusive?"greater than or equal to ":"greater than "}${new Date(ee.minimum)}` : "Invalid input";
                            break;
                        case eZ.too_big:
                            en = "array" === ee.type ? `Array must contain ${ee.exact?"exactly":ee.inclusive?"at most":"less than"} ${ee.maximum} element(s)` : "string" === ee.type ? `String must contain ${ee.exact?"exactly":ee.inclusive?"at most":"under"} ${ee.maximum} character(s)` : "number" === ee.type ? `Number must be ${ee.exact?"exactly":ee.inclusive?"less than or equal to":"less than"} ${ee.maximum}` : "date" === ee.type ? `Date must be ${ee.exact?"exactly":ee.inclusive?"smaller than or equal to":"smaller than"} ${new Date(ee.maximum)}` : "Invalid input";
                            break;
                        case eZ.custom:
                            en = "Invalid input";
                            break;
                        case eZ.invalid_intersection_types:
                            en = "Intersection results could not be merged";
                            break;
                        case eZ.not_multiple_of:
                            en = `Number must be a multiple of ${ee.multipleOf}`;
                            break;
                        case eZ.not_finite:
                            en = "Number must be finite";
                            break;
                        default:
                            en = et.defaultError, em.assertNever(ee)
                    }
                    return {
                        message: en
                    }
                },
                ez = eM;

            function eF(ee) {
                ez = ee
            }

            function e$() {
                return ez
            }
            let eU = ee => {
                    let {
                        data: et,
                        path: en,
                        errorMaps: er,
                        issueData: ei
                    } = ee, es = [...en, ...ei.path || []], eo = { ...ei,
                        path: es
                    }, eu = "", ec = er.filter(ee => !!ee).slice().reverse();
                    for (let ee of ec) eu = ee(eo, {
                        data: et,
                        defaultError: eu
                    }).message;
                    return { ...ei,
                        path: es,
                        message: ei.message || eu
                    }
                },
                eW = [];

            function eV(ee, et) {
                let en = eU({
                    issueData: et,
                    data: ee.data,
                    path: ee.path,
                    errorMaps: [ee.common.contextualErrorMap, ee.schemaErrorMap, e$(), eM].filter(ee => !!ee)
                });
                ee.common.issues.push(en)
            }
            class eH {
                constructor() {
                    this.value = "valid"
                }
                dirty() {
                    "valid" === this.value && (this.value = "dirty")
                }
                abort() {
                    "aborted" !== this.value && (this.value = "aborted")
                }
                static mergeArray(ee, et) {
                    let en = [];
                    for (let er of et) {
                        if ("aborted" === er.status) return eB;
                        "dirty" === er.status && ee.dirty(), en.push(er.value)
                    }
                    return {
                        status: ee.value,
                        value: en
                    }
                }
                static async mergeObjectAsync(ee, et) {
                    let en = [];
                    for (let ee of et) en.push({
                        key: await ee.key,
                        value: await ee.value
                    });
                    return eH.mergeObjectSync(ee, en)
                }
                static mergeObjectSync(ee, et) {
                    let en = {};
                    for (let er of et) {
                        let {
                            key: et,
                            value: ei
                        } = er;
                        if ("aborted" === et.status || "aborted" === ei.status) return eB;
                        "dirty" === et.status && ee.dirty(), "dirty" === ei.status && ee.dirty(), (void 0 !== ei.value || er.alwaysSet) && (en[et.value] = ei.value)
                    }
                    return {
                        status: ee.value,
                        value: en
                    }
                }
            }
            let eB = Object.freeze({
                    status: "aborted"
                }),
                eG = ee => ({
                    status: "dirty",
                    value: ee
                }),
                eK = ee => ({
                    status: "valid",
                    value: ee
                }),
                eq = ee => "aborted" === ee.status,
                eY = ee => "dirty" === ee.status,
                eQ = ee => "valid" === ee.status,
                eJ = ee => ee instanceof Promise;
            ! function(ee) {
                ee.errToObj = ee => "string" == typeof ee ? {
                    message: ee
                } : ee || {}, ee.toString = ee => "string" == typeof ee ? ee : null == ee ? void 0 : ee.message
            }(ex || (ex = {}));
            class eX {
                constructor(ee, et, en, er) {
                    this.parent = ee, this.data = et, this._path = en, this._key = er
                }
                get path() {
                    return this._path.concat(this._key)
                }
            }
            let e0 = (ee, et) => {
                if (eQ(et)) return {
                    success: !0,
                    data: et.value
                }; {
                    if (!ee.common.issues.length) throw Error("Validation failed but no issues detected.");
                    let et = new eD(ee.common.issues);
                    return {
                        success: !1,
                        error: et
                    }
                }
            };

            function e1(ee) {
                if (!ee) return {};
                let {
                    errorMap: et,
                    invalid_type_error: en,
                    required_error: er,
                    description: ei
                } = ee;
                if (et && (en || er)) throw Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
                if (et) return {
                    errorMap: et,
                    description: ei
                };
                let es = (ee, et) => "invalid_type" !== ee.code ? {
                    message: et.defaultError
                } : void 0 === et.data ? {
                    message: null != er ? er : et.defaultError
                } : {
                    message: null != en ? en : et.defaultError
                };
                return {
                    errorMap: es,
                    description: ei
                }
            }
            class e2 {
                constructor(ee) {
                    this.spa = this.safeParseAsync, this._def = ee, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
                }
                get description() {
                    return this._def.description
                }
                _getType(ee) {
                    return eP(ee.data)
                }
                _getOrReturnCtx(ee, et) {
                    return et || {
                        common: ee.parent.common,
                        data: ee.data,
                        parsedType: eP(ee.data),
                        schemaErrorMap: this._def.errorMap,
                        path: ee.path,
                        parent: ee.parent
                    }
                }
                _processInputParams(ee) {
                    return {
                        status: new eH,
                        ctx: {
                            common: ee.parent.common,
                            data: ee.data,
                            parsedType: eP(ee.data),
                            schemaErrorMap: this._def.errorMap,
                            path: ee.path,
                            parent: ee.parent
                        }
                    }
                }
                _parseSync(ee) {
                    let et = this._parse(ee);
                    if (eJ(et)) throw Error("Synchronous parse encountered promise.");
                    return et
                }
                _parseAsync(ee) {
                    let et = this._parse(ee);
                    return Promise.resolve(et)
                }
                parse(ee, et) {
                    let en = this.safeParse(ee, et);
                    if (en.success) return en.data;
                    throw en.error
                }
                safeParse(ee, et) {
                    var en;
                    let er = {
                            common: {
                                issues: [],
                                async: null !== (en = null == et ? void 0 : et.async) && void 0 !== en && en,
                                contextualErrorMap: null == et ? void 0 : et.errorMap
                            },
                            path: (null == et ? void 0 : et.path) || [],
                            schemaErrorMap: this._def.errorMap,
                            parent: null,
                            data: ee,
                            parsedType: eP(ee)
                        },
                        ei = this._parseSync({
                            data: ee,
                            path: er.path,
                            parent: er
                        });
                    return e0(er, ei)
                }
                async parseAsync(ee, et) {
                    let en = await this.safeParseAsync(ee, et);
                    if (en.success) return en.data;
                    throw en.error
                }
                async safeParseAsync(ee, et) {
                    let en = {
                            common: {
                                issues: [],
                                contextualErrorMap: null == et ? void 0 : et.errorMap,
                                async: !0
                            },
                            path: (null == et ? void 0 : et.path) || [],
                            schemaErrorMap: this._def.errorMap,
                            parent: null,
                            data: ee,
                            parsedType: eP(ee)
                        },
                        er = this._parse({
                            data: ee,
                            path: en.path,
                            parent: en
                        }),
                        ei = await (eJ(er) ? er : Promise.resolve(er));
                    return e0(en, ei)
                }
                refine(ee, et) {
                    let en = ee => "string" == typeof et || void 0 === et ? {
                        message: et
                    } : "function" == typeof et ? et(ee) : et;
                    return this._refinement((et, er) => {
                        let ei = ee(et),
                            es = () => er.addIssue({
                                code: eZ.custom,
                                ...en(et)
                            });
                        return "undefined" != typeof Promise && ei instanceof Promise ? ei.then(ee => !!ee || (es(), !1)) : !!ei || (es(), !1)
                    })
                }
                refinement(ee, et) {
                    return this._refinement((en, er) => !!ee(en) || (er.addIssue("function" == typeof et ? et(en, er) : et), !1))
                }
                _refinement(ee) {
                    return new tR({
                        schema: this,
                        typeName: ev.ZodEffects,
                        effect: {
                            type: "refinement",
                            refinement: ee
                        }
                    })
                }
                superRefine(ee) {
                    return this._refinement(ee)
                }
                optional() {
                    return tI.create(this)
                }
                nullable() {
                    return tA.create(this)
                }
                nullish() {
                    return this.optional().nullable()
                }
                array() {
                    return td.create(this)
                }
                promise() {
                    return tS.create(this)
                }
                or(ee) {
                    return tm.create([this, ee])
                }
                and(ee) {
                    return ty.create(this, ee)
                }
                transform(ee) {
                    return new tR({
                        schema: this,
                        typeName: ev.ZodEffects,
                        effect: {
                            type: "transform",
                            transform: ee
                        }
                    })
                }
                default (ee) {
                    let et = "function" == typeof ee ? ee : () => ee;
                    return new tP({
                        innerType: this,
                        defaultValue: et,
                        typeName: ev.ZodDefault
                    })
                }
                brand() {
                    return new tM({
                        typeName: ev.ZodBranded,
                        type: this,
                        ...e1(void 0)
                    })
                } catch (ee) {
                    let et = "function" == typeof ee ? ee : () => ee;
                    return new tZ({
                        innerType: this,
                        defaultValue: et,
                        typeName: ev.ZodCatch
                    })
                }
                describe(ee) {
                    let et = this.constructor;
                    return new et({ ...this._def,
                        description: ee
                    })
                }
                pipe(ee) {
                    return tz.create(this, ee)
                }
                isOptional() {
                    return this.safeParse(void 0).success
                }
                isNullable() {
                    return this.safeParse(null).success
                }
            }
            let e4 = /^c[^\s-]{8,}$/i,
                e3 = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,
                e5 = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                e8 = ee => ee.precision ? ee.offset ? RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${ee.precision}}(([+-]\\d{2}:\\d{2})|Z)$`) : RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${ee.precision}}Z$`) : 0 === ee.precision ? ee.offset ? RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}:\\d{2})|Z)$") : RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : ee.offset ? RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}:\\d{2})|Z)$") : RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
            class e6 extends e2 {
                constructor() {
                    super(...arguments), this._regex = (ee, et, en) => this.refinement(et => ee.test(et), {
                        validation: et,
                        code: eZ.invalid_string,
                        ...ex.errToObj(en)
                    }), this.nonempty = ee => this.min(1, ex.errToObj(ee)), this.trim = () => new e6({ ...this._def,
                        checks: [...this._def.checks, {
                            kind: "trim"
                        }]
                    })
                }
                _parse(ee) {
                    let et;
                    this._def.coerce && (ee.data = String(ee.data));
                    let en = this._getType(ee);
                    if (en !== eA.string) {
                        let et = this._getOrReturnCtx(ee);
                        return eV(et, {
                            code: eZ.invalid_type,
                            expected: eA.string,
                            received: et.parsedType
                        }), eB
                    }
                    let er = new eH;
                    for (let en of this._def.checks)
                        if ("min" === en.kind) ee.data.length < en.value && (eV(et = this._getOrReturnCtx(ee, et), {
                            code: eZ.too_small,
                            minimum: en.value,
                            type: "string",
                            inclusive: !0,
                            exact: !1,
                            message: en.message
                        }), er.dirty());
                        else if ("max" === en.kind) ee.data.length > en.value && (eV(et = this._getOrReturnCtx(ee, et), {
                        code: eZ.too_big,
                        maximum: en.value,
                        type: "string",
                        inclusive: !0,
                        exact: !1,
                        message: en.message
                    }), er.dirty());
                    else if ("length" === en.kind) {
                        let ei = ee.data.length > en.value,
                            es = ee.data.length < en.value;
                        (ei || es) && (et = this._getOrReturnCtx(ee, et), ei ? eV(et, {
                            code: eZ.too_big,
                            maximum: en.value,
                            type: "string",
                            inclusive: !0,
                            exact: !0,
                            message: en.message
                        }) : es && eV(et, {
                            code: eZ.too_small,
                            minimum: en.value,
                            type: "string",
                            inclusive: !0,
                            exact: !0,
                            message: en.message
                        }), er.dirty())
                    } else if ("email" === en.kind) e5.test(ee.data) || (eV(et = this._getOrReturnCtx(ee, et), {
                        validation: "email",
                        code: eZ.invalid_string,
                        message: en.message
                    }), er.dirty());
                    else if ("uuid" === en.kind) e3.test(ee.data) || (eV(et = this._getOrReturnCtx(ee, et), {
                        validation: "uuid",
                        code: eZ.invalid_string,
                        message: en.message
                    }), er.dirty());
                    else if ("cuid" === en.kind) e4.test(ee.data) || (eV(et = this._getOrReturnCtx(ee, et), {
                        validation: "cuid",
                        code: eZ.invalid_string,
                        message: en.message
                    }), er.dirty());
                    else if ("url" === en.kind) try {
                        new URL(ee.data)
                    } catch (ei) {
                        eV(et = this._getOrReturnCtx(ee, et), {
                            validation: "url",
                            code: eZ.invalid_string,
                            message: en.message
                        }), er.dirty()
                    } else if ("regex" === en.kind) {
                        en.regex.lastIndex = 0;
                        let ei = en.regex.test(ee.data);
                        ei || (eV(et = this._getOrReturnCtx(ee, et), {
                            validation: "regex",
                            code: eZ.invalid_string,
                            message: en.message
                        }), er.dirty())
                    } else if ("trim" === en.kind) ee.data = ee.data.trim();
                    else if ("startsWith" === en.kind) ee.data.startsWith(en.value) || (eV(et = this._getOrReturnCtx(ee, et), {
                        code: eZ.invalid_string,
                        validation: {
                            startsWith: en.value
                        },
                        message: en.message
                    }), er.dirty());
                    else if ("endsWith" === en.kind) ee.data.endsWith(en.value) || (eV(et = this._getOrReturnCtx(ee, et), {
                        code: eZ.invalid_string,
                        validation: {
                            endsWith: en.value
                        },
                        message: en.message
                    }), er.dirty());
                    else if ("datetime" === en.kind) {
                        let ei = e8(en);
                        ei.test(ee.data) || (eV(et = this._getOrReturnCtx(ee, et), {
                            code: eZ.invalid_string,
                            validation: "datetime",
                            message: en.message
                        }), er.dirty())
                    } else em.assertNever(en);
                    return {
                        status: er.value,
                        value: ee.data
                    }
                }
                _addCheck(ee) {
                    return new e6({ ...this._def,
                        checks: [...this._def.checks, ee]
                    })
                }
                email(ee) {
                    return this._addCheck({
                        kind: "email",
                        ...ex.errToObj(ee)
                    })
                }
                url(ee) {
                    return this._addCheck({
                        kind: "url",
                        ...ex.errToObj(ee)
                    })
                }
                uuid(ee) {
                    return this._addCheck({
                        kind: "uuid",
                        ...ex.errToObj(ee)
                    })
                }
                cuid(ee) {
                    return this._addCheck({
                        kind: "cuid",
                        ...ex.errToObj(ee)
                    })
                }
                datetime(ee) {
                    var et;
                    return "string" == typeof ee ? this._addCheck({
                        kind: "datetime",
                        precision: null,
                        offset: !1,
                        message: ee
                    }) : this._addCheck({
                        kind: "datetime",
                        precision: void 0 === (null == ee ? void 0 : ee.precision) ? null : null == ee ? void 0 : ee.precision,
                        offset: null !== (et = null == ee ? void 0 : ee.offset) && void 0 !== et && et,
                        ...ex.errToObj(null == ee ? void 0 : ee.message)
                    })
                }
                regex(ee, et) {
                    return this._addCheck({
                        kind: "regex",
                        regex: ee,
                        ...ex.errToObj(et)
                    })
                }
                startsWith(ee, et) {
                    return this._addCheck({
                        kind: "startsWith",
                        value: ee,
                        ...ex.errToObj(et)
                    })
                }
                endsWith(ee, et) {
                    return this._addCheck({
                        kind: "endsWith",
                        value: ee,
                        ...ex.errToObj(et)
                    })
                }
                min(ee, et) {
                    return this._addCheck({
                        kind: "min",
                        value: ee,
                        ...ex.errToObj(et)
                    })
                }
                max(ee, et) {
                    return this._addCheck({
                        kind: "max",
                        value: ee,
                        ...ex.errToObj(et)
                    })
                }
                length(ee, et) {
                    return this._addCheck({
                        kind: "length",
                        value: ee,
                        ...ex.errToObj(et)
                    })
                }
                get isDatetime() {
                    return !!this._def.checks.find(ee => "datetime" === ee.kind)
                }
                get isEmail() {
                    return !!this._def.checks.find(ee => "email" === ee.kind)
                }
                get isURL() {
                    return !!this._def.checks.find(ee => "url" === ee.kind)
                }
                get isUUID() {
                    return !!this._def.checks.find(ee => "uuid" === ee.kind)
                }
                get isCUID() {
                    return !!this._def.checks.find(ee => "cuid" === ee.kind)
                }
                get minLength() {
                    let ee = null;
                    for (let et of this._def.checks) "min" === et.kind && (null === ee || et.value > ee) && (ee = et.value);
                    return ee
                }
                get maxLength() {
                    let ee = null;
                    for (let et of this._def.checks) "max" === et.kind && (null === ee || et.value < ee) && (ee = et.value);
                    return ee
                }
            }

            function e9(ee, et) {
                let en = (ee.toString().split(".")[1] || "").length,
                    er = (et.toString().split(".")[1] || "").length,
                    ei = en > er ? en : er,
                    es = parseInt(ee.toFixed(ei).replace(".", "")),
                    eo = parseInt(et.toFixed(ei).replace(".", ""));
                return es % eo / Math.pow(10, ei)
            }
            e6.create = ee => {
                var et;
                return new e6({
                    checks: [],
                    typeName: ev.ZodString,
                    coerce: null !== (et = null == ee ? void 0 : ee.coerce) && void 0 !== et && et,
                    ...e1(ee)
                })
            };
            class e7 extends e2 {
                constructor() {
                    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
                }
                _parse(ee) {
                    let et;
                    this._def.coerce && (ee.data = Number(ee.data));
                    let en = this._getType(ee);
                    if (en !== eA.number) {
                        let et = this._getOrReturnCtx(ee);
                        return eV(et, {
                            code: eZ.invalid_type,
                            expected: eA.number,
                            received: et.parsedType
                        }), eB
                    }
                    let er = new eH;
                    for (let en of this._def.checks)
                        if ("int" === en.kind) em.isInteger(ee.data) || (eV(et = this._getOrReturnCtx(ee, et), {
                            code: eZ.invalid_type,
                            expected: "integer",
                            received: "float",
                            message: en.message
                        }), er.dirty());
                        else if ("min" === en.kind) {
                        let ei = en.inclusive ? ee.data < en.value : ee.data <= en.value;
                        ei && (eV(et = this._getOrReturnCtx(ee, et), {
                            code: eZ.too_small,
                            minimum: en.value,
                            type: "number",
                            inclusive: en.inclusive,
                            exact: !1,
                            message: en.message
                        }), er.dirty())
                    } else if ("max" === en.kind) {
                        let ei = en.inclusive ? ee.data > en.value : ee.data >= en.value;
                        ei && (eV(et = this._getOrReturnCtx(ee, et), {
                            code: eZ.too_big,
                            maximum: en.value,
                            type: "number",
                            inclusive: en.inclusive,
                            exact: !1,
                            message: en.message
                        }), er.dirty())
                    } else "multipleOf" === en.kind ? 0 !== e9(ee.data, en.value) && (eV(et = this._getOrReturnCtx(ee, et), {
                        code: eZ.not_multiple_of,
                        multipleOf: en.value,
                        message: en.message
                    }), er.dirty()) : "finite" === en.kind ? Number.isFinite(ee.data) || (eV(et = this._getOrReturnCtx(ee, et), {
                        code: eZ.not_finite,
                        message: en.message
                    }), er.dirty()) : em.assertNever(en);
                    return {
                        status: er.value,
                        value: ee.data
                    }
                }
                gte(ee, et) {
                    return this.setLimit("min", ee, !0, ex.toString(et))
                }
                gt(ee, et) {
                    return this.setLimit("min", ee, !1, ex.toString(et))
                }
                lte(ee, et) {
                    return this.setLimit("max", ee, !0, ex.toString(et))
                }
                lt(ee, et) {
                    return this.setLimit("max", ee, !1, ex.toString(et))
                }
                setLimit(ee, et, en, er) {
                    return new e7({ ...this._def,
                        checks: [...this._def.checks, {
                            kind: ee,
                            value: et,
                            inclusive: en,
                            message: ex.toString(er)
                        }]
                    })
                }
                _addCheck(ee) {
                    return new e7({ ...this._def,
                        checks: [...this._def.checks, ee]
                    })
                }
                int(ee) {
                    return this._addCheck({
                        kind: "int",
                        message: ex.toString(ee)
                    })
                }
                positive(ee) {
                    return this._addCheck({
                        kind: "min",
                        value: 0,
                        inclusive: !1,
                        message: ex.toString(ee)
                    })
                }
                negative(ee) {
                    return this._addCheck({
                        kind: "max",
                        value: 0,
                        inclusive: !1,
                        message: ex.toString(ee)
                    })
                }
                nonpositive(ee) {
                    return this._addCheck({
                        kind: "max",
                        value: 0,
                        inclusive: !0,
                        message: ex.toString(ee)
                    })
                }
                nonnegative(ee) {
                    return this._addCheck({
                        kind: "min",
                        value: 0,
                        inclusive: !0,
                        message: ex.toString(ee)
                    })
                }
                multipleOf(ee, et) {
                    return this._addCheck({
                        kind: "multipleOf",
                        value: ee,
                        message: ex.toString(et)
                    })
                }
                finite(ee) {
                    return this._addCheck({
                        kind: "finite",
                        message: ex.toString(ee)
                    })
                }
                get minValue() {
                    let ee = null;
                    for (let et of this._def.checks) "min" === et.kind && (null === ee || et.value > ee) && (ee = et.value);
                    return ee
                }
                get maxValue() {
                    let ee = null;
                    for (let et of this._def.checks) "max" === et.kind && (null === ee || et.value < ee) && (ee = et.value);
                    return ee
                }
                get isInt() {
                    return !!this._def.checks.find(ee => "int" === ee.kind)
                }
            }
            e7.create = ee => new e7({
                checks: [],
                typeName: ev.ZodNumber,
                coerce: (null == ee ? void 0 : ee.coerce) || !1,
                ...e1(ee)
            });
            class te extends e2 {
                _parse(ee) {
                    this._def.coerce && (ee.data = BigInt(ee.data));
                    let et = this._getType(ee);
                    if (et !== eA.bigint) {
                        let et = this._getOrReturnCtx(ee);
                        return eV(et, {
                            code: eZ.invalid_type,
                            expected: eA.bigint,
                            received: et.parsedType
                        }), eB
                    }
                    return eK(ee.data)
                }
            }
            te.create = ee => {
                var et;
                return new te({
                    typeName: ev.ZodBigInt,
                    coerce: null !== (et = null == ee ? void 0 : ee.coerce) && void 0 !== et && et,
                    ...e1(ee)
                })
            };
            class tt extends e2 {
                _parse(ee) {
                    this._def.coerce && (ee.data = !!ee.data);
                    let et = this._getType(ee);
                    if (et !== eA.boolean) {
                        let et = this._getOrReturnCtx(ee);
                        return eV(et, {
                            code: eZ.invalid_type,
                            expected: eA.boolean,
                            received: et.parsedType
                        }), eB
                    }
                    return eK(ee.data)
                }
            }
            tt.create = ee => new tt({
                typeName: ev.ZodBoolean,
                coerce: (null == ee ? void 0 : ee.coerce) || !1,
                ...e1(ee)
            });
            class tn extends e2 {
                _parse(ee) {
                    let et;
                    this._def.coerce && (ee.data = new Date(ee.data));
                    let en = this._getType(ee);
                    if (en !== eA.date) {
                        let et = this._getOrReturnCtx(ee);
                        return eV(et, {
                            code: eZ.invalid_type,
                            expected: eA.date,
                            received: et.parsedType
                        }), eB
                    }
                    if (isNaN(ee.data.getTime())) {
                        let et = this._getOrReturnCtx(ee);
                        return eV(et, {
                            code: eZ.invalid_date
                        }), eB
                    }
                    let er = new eH;
                    for (let en of this._def.checks) "min" === en.kind ? ee.data.getTime() < en.value && (eV(et = this._getOrReturnCtx(ee, et), {
                        code: eZ.too_small,
                        message: en.message,
                        inclusive: !0,
                        exact: !1,
                        minimum: en.value,
                        type: "date"
                    }), er.dirty()) : "max" === en.kind ? ee.data.getTime() > en.value && (eV(et = this._getOrReturnCtx(ee, et), {
                        code: eZ.too_big,
                        message: en.message,
                        inclusive: !0,
                        exact: !1,
                        maximum: en.value,
                        type: "date"
                    }), er.dirty()) : em.assertNever(en);
                    return {
                        status: er.value,
                        value: new Date(ee.data.getTime())
                    }
                }
                _addCheck(ee) {
                    return new tn({ ...this._def,
                        checks: [...this._def.checks, ee]
                    })
                }
                min(ee, et) {
                    return this._addCheck({
                        kind: "min",
                        value: ee.getTime(),
                        message: ex.toString(et)
                    })
                }
                max(ee, et) {
                    return this._addCheck({
                        kind: "max",
                        value: ee.getTime(),
                        message: ex.toString(et)
                    })
                }
                get minDate() {
                    let ee = null;
                    for (let et of this._def.checks) "min" === et.kind && (null === ee || et.value > ee) && (ee = et.value);
                    return null != ee ? new Date(ee) : null
                }
                get maxDate() {
                    let ee = null;
                    for (let et of this._def.checks) "max" === et.kind && (null === ee || et.value < ee) && (ee = et.value);
                    return null != ee ? new Date(ee) : null
                }
            }
            tn.create = ee => new tn({
                checks: [],
                coerce: (null == ee ? void 0 : ee.coerce) || !1,
                typeName: ev.ZodDate,
                ...e1(ee)
            });
            class tr extends e2 {
                _parse(ee) {
                    let et = this._getType(ee);
                    if (et !== eA.symbol) {
                        let et = this._getOrReturnCtx(ee);
                        return eV(et, {
                            code: eZ.invalid_type,
                            expected: eA.symbol,
                            received: et.parsedType
                        }), eB
                    }
                    return eK(ee.data)
                }
            }
            tr.create = ee => new tr({
                typeName: ev.ZodSymbol,
                ...e1(ee)
            });
            class ti extends e2 {
                _parse(ee) {
                    let et = this._getType(ee);
                    if (et !== eA.undefined) {
                        let et = this._getOrReturnCtx(ee);
                        return eV(et, {
                            code: eZ.invalid_type,
                            expected: eA.undefined,
                            received: et.parsedType
                        }), eB
                    }
                    return eK(ee.data)
                }
            }
            ti.create = ee => new ti({
                typeName: ev.ZodUndefined,
                ...e1(ee)
            });
            class ts extends e2 {
                _parse(ee) {
                    let et = this._getType(ee);
                    if (et !== eA.null) {
                        let et = this._getOrReturnCtx(ee);
                        return eV(et, {
                            code: eZ.invalid_type,
                            expected: eA.null,
                            received: et.parsedType
                        }), eB
                    }
                    return eK(ee.data)
                }
            }
            ts.create = ee => new ts({
                typeName: ev.ZodNull,
                ...e1(ee)
            });
            class to extends e2 {
                constructor() {
                    super(...arguments), this._any = !0
                }
                _parse(ee) {
                    return eK(ee.data)
                }
            }
            to.create = ee => new to({
                typeName: ev.ZodAny,
                ...e1(ee)
            });
            class tl extends e2 {
                constructor() {
                    super(...arguments), this._unknown = !0
                }
                _parse(ee) {
                    return eK(ee.data)
                }
            }
            tl.create = ee => new tl({
                typeName: ev.ZodUnknown,
                ...e1(ee)
            });
            class tu extends e2 {
                _parse(ee) {
                    let et = this._getOrReturnCtx(ee);
                    return eV(et, {
                        code: eZ.invalid_type,
                        expected: eA.never,
                        received: et.parsedType
                    }), eB
                }
            }
            tu.create = ee => new tu({
                typeName: ev.ZodNever,
                ...e1(ee)
            });
            class tc extends e2 {
                _parse(ee) {
                    let et = this._getType(ee);
                    if (et !== eA.undefined) {
                        let et = this._getOrReturnCtx(ee);
                        return eV(et, {
                            code: eZ.invalid_type,
                            expected: eA.void,
                            received: et.parsedType
                        }), eB
                    }
                    return eK(ee.data)
                }
            }
            tc.create = ee => new tc({
                typeName: ev.ZodVoid,
                ...e1(ee)
            });
            class td extends e2 {
                _parse(ee) {
                    let {
                        ctx: et,
                        status: en
                    } = this._processInputParams(ee), er = this._def;
                    if (et.parsedType !== eA.array) return eV(et, {
                        code: eZ.invalid_type,
                        expected: eA.array,
                        received: et.parsedType
                    }), eB;
                    if (null !== er.exactLength) {
                        let ee = et.data.length > er.exactLength.value,
                            ei = et.data.length < er.exactLength.value;
                        (ee || ei) && (eV(et, {
                            code: ee ? eZ.too_big : eZ.too_small,
                            minimum: ei ? er.exactLength.value : void 0,
                            maximum: ee ? er.exactLength.value : void 0,
                            type: "array",
                            inclusive: !0,
                            exact: !0,
                            message: er.exactLength.message
                        }), en.dirty())
                    }
                    if (null !== er.minLength && et.data.length < er.minLength.value && (eV(et, {
                            code: eZ.too_small,
                            minimum: er.minLength.value,
                            type: "array",
                            inclusive: !0,
                            exact: !1,
                            message: er.minLength.message
                        }), en.dirty()), null !== er.maxLength && et.data.length > er.maxLength.value && (eV(et, {
                            code: eZ.too_big,
                            maximum: er.maxLength.value,
                            type: "array",
                            inclusive: !0,
                            exact: !1,
                            message: er.maxLength.message
                        }), en.dirty()), et.common.async) return Promise.all(et.data.map((ee, en) => er.type._parseAsync(new eX(et, ee, et.path, en)))).then(ee => eH.mergeArray(en, ee));
                    let ei = et.data.map((ee, en) => er.type._parseSync(new eX(et, ee, et.path, en)));
                    return eH.mergeArray(en, ei)
                }
                get element() {
                    return this._def.type
                }
                min(ee, et) {
                    return new td({ ...this._def,
                        minLength: {
                            value: ee,
                            message: ex.toString(et)
                        }
                    })
                }
                max(ee, et) {
                    return new td({ ...this._def,
                        maxLength: {
                            value: ee,
                            message: ex.toString(et)
                        }
                    })
                }
                length(ee, et) {
                    return new td({ ...this._def,
                        exactLength: {
                            value: ee,
                            message: ex.toString(et)
                        }
                    })
                }
                nonempty(ee) {
                    return this.min(1, ee)
                }
            }
            td.create = (ee, et) => new td({
                    type: ee,
                    minLength: null,
                    maxLength: null,
                    exactLength: null,
                    typeName: ev.ZodArray,
                    ...e1(et)
                }),
                function(ee) {
                    ee.mergeShapes = (ee, et) => ({ ...ee,
                        ...et
                    })
                }(eg || (eg = {}));
            let tp = ee => et => new tf({ ...ee,
                shape: () => ({ ...ee.shape(),
                    ...et
                })
            });

            function th(ee) {
                if (ee instanceof tf) {
                    let et = {};
                    for (let en in ee.shape) {
                        let er = ee.shape[en];
                        et[en] = tI.create(th(er))
                    }
                    return new tf({ ...ee._def,
                        shape: () => et
                    })
                }
                return ee instanceof td ? td.create(th(ee.element)) : ee instanceof tI ? tI.create(th(ee.unwrap())) : ee instanceof tA ? tA.create(th(ee.unwrap())) : ee instanceof tb ? tb.create(ee.items.map(ee => th(ee))) : ee
            }
            class tf extends e2 {
                constructor() {
                    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = tp(this._def), this.extend = tp(this._def)
                }
                _getCached() {
                    if (null !== this._cached) return this._cached;
                    let ee = this._def.shape(),
                        et = em.objectKeys(ee);
                    return this._cached = {
                        shape: ee,
                        keys: et
                    }
                }
                _parse(ee) {
                    let et = this._getType(ee);
                    if (et !== eA.object) {
                        let et = this._getOrReturnCtx(ee);
                        return eV(et, {
                            code: eZ.invalid_type,
                            expected: eA.object,
                            received: et.parsedType
                        }), eB
                    }
                    let {
                        status: en,
                        ctx: er
                    } = this._processInputParams(ee), {
                        shape: ei,
                        keys: es
                    } = this._getCached(), eo = [];
                    if (!(this._def.catchall instanceof tu && "strip" === this._def.unknownKeys))
                        for (let ee in er.data) es.includes(ee) || eo.push(ee);
                    let eu = [];
                    for (let ee of es) {
                        let et = ei[ee],
                            en = er.data[ee];
                        eu.push({
                            key: {
                                status: "valid",
                                value: ee
                            },
                            value: et._parse(new eX(er, en, er.path, ee)),
                            alwaysSet: ee in er.data
                        })
                    }
                    if (this._def.catchall instanceof tu) {
                        let ee = this._def.unknownKeys;
                        if ("passthrough" === ee)
                            for (let ee of eo) eu.push({
                                key: {
                                    status: "valid",
                                    value: ee
                                },
                                value: {
                                    status: "valid",
                                    value: er.data[ee]
                                }
                            });
                        else if ("strict" === ee) eo.length > 0 && (eV(er, {
                            code: eZ.unrecognized_keys,
                            keys: eo
                        }), en.dirty());
                        else if ("strip" === ee);
                        else throw Error("Internal ZodObject error: invalid unknownKeys value.")
                    } else {
                        let ee = this._def.catchall;
                        for (let et of eo) {
                            let en = er.data[et];
                            eu.push({
                                key: {
                                    status: "valid",
                                    value: et
                                },
                                value: ee._parse(new eX(er, en, er.path, et)),
                                alwaysSet: et in er.data
                            })
                        }
                    }
                    return er.common.async ? Promise.resolve().then(async () => {
                        let ee = [];
                        for (let et of eu) {
                            let en = await et.key;
                            ee.push({
                                key: en,
                                value: await et.value,
                                alwaysSet: et.alwaysSet
                            })
                        }
                        return ee
                    }).then(ee => eH.mergeObjectSync(en, ee)) : eH.mergeObjectSync(en, eu)
                }
                get shape() {
                    return this._def.shape()
                }
                strict(ee) {
                    return ex.errToObj, new tf({ ...this._def,
                        unknownKeys: "strict",
                        ...void 0 !== ee ? {
                            errorMap: (et, en) => {
                                var er, ei, es, eo;
                                let eu = null !== (es = null === (ei = (er = this._def).errorMap) || void 0 === ei ? void 0 : ei.call(er, et, en).message) && void 0 !== es ? es : en.defaultError;
                                return "unrecognized_keys" === et.code ? {
                                    message: null !== (eo = ex.errToObj(ee).message) && void 0 !== eo ? eo : eu
                                } : {
                                    message: eu
                                }
                            }
                        } : {}
                    })
                }
                strip() {
                    return new tf({ ...this._def,
                        unknownKeys: "strip"
                    })
                }
                passthrough() {
                    return new tf({ ...this._def,
                        unknownKeys: "passthrough"
                    })
                }
                setKey(ee, et) {
                    return this.augment({
                        [ee]: et
                    })
                }
                merge(ee) {
                    let et = new tf({
                        unknownKeys: ee._def.unknownKeys,
                        catchall: ee._def.catchall,
                        shape: () => eg.mergeShapes(this._def.shape(), ee._def.shape()),
                        typeName: ev.ZodObject
                    });
                    return et
                }
                catchall(ee) {
                    return new tf({ ...this._def,
                        catchall: ee
                    })
                }
                pick(ee) {
                    let et = {};
                    return em.objectKeys(ee).map(ee => {
                        this.shape[ee] && (et[ee] = this.shape[ee])
                    }), new tf({ ...this._def,
                        shape: () => et
                    })
                }
                omit(ee) {
                    let et = {};
                    return em.objectKeys(this.shape).map(en => {
                        -1 === em.objectKeys(ee).indexOf(en) && (et[en] = this.shape[en])
                    }), new tf({ ...this._def,
                        shape: () => et
                    })
                }
                deepPartial() {
                    return th(this)
                }
                partial(ee) {
                    let et = {};
                    if (ee) em.objectKeys(this.shape).map(en => {
                        -1 === em.objectKeys(ee).indexOf(en) ? et[en] = this.shape[en] : et[en] = this.shape[en].optional()
                    });
                    else
                        for (let ee in this.shape) {
                            let en = this.shape[ee];
                            et[ee] = en.optional()
                        }
                    return new tf({ ...this._def,
                        shape: () => et
                    })
                }
                required(ee) {
                    let et = {};
                    if (ee) em.objectKeys(this.shape).map(en => {
                        if (-1 === em.objectKeys(ee).indexOf(en)) et[en] = this.shape[en];
                        else {
                            let ee = this.shape[en],
                                er = ee;
                            for (; er instanceof tI;) er = er._def.innerType;
                            et[en] = er
                        }
                    });
                    else
                        for (let ee in this.shape) {
                            let en = this.shape[ee],
                                er = en;
                            for (; er instanceof tI;) er = er._def.innerType;
                            et[ee] = er
                        }
                    return new tf({ ...this._def,
                        shape: () => et
                    })
                }
                keyof() {
                    return tO(em.objectKeys(this.shape))
                }
            }
            tf.create = (ee, et) => new tf({
                shape: () => ee,
                unknownKeys: "strip",
                catchall: tu.create(),
                typeName: ev.ZodObject,
                ...e1(et)
            }), tf.strictCreate = (ee, et) => new tf({
                shape: () => ee,
                unknownKeys: "strict",
                catchall: tu.create(),
                typeName: ev.ZodObject,
                ...e1(et)
            }), tf.lazycreate = (ee, et) => new tf({
                shape: ee,
                unknownKeys: "strip",
                catchall: tu.create(),
                typeName: ev.ZodObject,
                ...e1(et)
            });
            class tm extends e2 {
                _parse(ee) {
                    let {
                        ctx: et
                    } = this._processInputParams(ee), en = this._def.options;

                    function er(ee) {
                        for (let et of ee)
                            if ("valid" === et.result.status) return et.result;
                        for (let en of ee)
                            if ("dirty" === en.result.status) return et.common.issues.push(...en.ctx.common.issues), en.result;
                        let en = ee.map(ee => new eD(ee.ctx.common.issues));
                        return eV(et, {
                            code: eZ.invalid_union,
                            unionErrors: en
                        }), eB
                    }
                    if (et.common.async) return Promise.all(en.map(async ee => {
                        let en = { ...et,
                            common: { ...et.common,
                                issues: []
                            },
                            parent: null
                        };
                        return {
                            result: await ee._parseAsync({
                                data: et.data,
                                path: et.path,
                                parent: en
                            }),
                            ctx: en
                        }
                    })).then(er); {
                        let ee;
                        let er = [];
                        for (let ei of en) {
                            let en = { ...et,
                                    common: { ...et.common,
                                        issues: []
                                    },
                                    parent: null
                                },
                                es = ei._parseSync({
                                    data: et.data,
                                    path: et.path,
                                    parent: en
                                });
                            if ("valid" === es.status) return es;
                            "dirty" !== es.status || ee || (ee = {
                                result: es,
                                ctx: en
                            }), en.common.issues.length && er.push(en.common.issues)
                        }
                        if (ee) return et.common.issues.push(...ee.ctx.common.issues), ee.result;
                        let ei = er.map(ee => new eD(ee));
                        return eV(et, {
                            code: eZ.invalid_union,
                            unionErrors: ei
                        }), eB
                    }
                }
                get options() {
                    return this._def.options
                }
            }
            tm.create = (ee, et) => new tm({
                options: ee,
                typeName: ev.ZodUnion,
                ...e1(et)
            });
            let tx = ee => {
                if (ee instanceof tE) return tx(ee.schema);
                if (ee instanceof tR) return tx(ee.innerType());
                if (ee instanceof tT) return [ee.value];
                if (ee instanceof tC) return ee.options;
                if (ee instanceof tN) return Object.keys(ee.enum);
                if (ee instanceof tP) return tx(ee._def.innerType);
                if (ee instanceof ti) return [void 0];
                else if (ee instanceof ts) return [null];
                else return null
            };
            class tg extends e2 {
                _parse(ee) {
                    let {
                        ctx: et
                    } = this._processInputParams(ee);
                    if (et.parsedType !== eA.object) return eV(et, {
                        code: eZ.invalid_type,
                        expected: eA.object,
                        received: et.parsedType
                    }), eB;
                    let en = this.discriminator,
                        er = et.data[en],
                        ei = this.optionsMap.get(er);
                    return ei ? et.common.async ? ei._parseAsync({
                        data: et.data,
                        path: et.path,
                        parent: et
                    }) : ei._parseSync({
                        data: et.data,
                        path: et.path,
                        parent: et
                    }) : (eV(et, {
                        code: eZ.invalid_union_discriminator,
                        options: Array.from(this.optionsMap.keys()),
                        path: [en]
                    }), eB)
                }
                get discriminator() {
                    return this._def.discriminator
                }
                get options() {
                    return this._def.options
                }
                get optionsMap() {
                    return this._def.optionsMap
                }
                static create(ee, et, en) {
                    let er = new Map;
                    for (let en of et) {
                        let et = tx(en.shape[ee]);
                        if (!et) throw Error(`A discriminator value for key \`${ee}\` could not be extracted from all schema options`);
                        for (let ei of et) {
                            if (er.has(ei)) throw Error(`Discriminator property ${String(ee)} has duplicate value ${String(ei)}`);
                            er.set(ei, en)
                        }
                    }
                    return new tg({
                        typeName: ev.ZodDiscriminatedUnion,
                        discriminator: ee,
                        options: et,
                        optionsMap: er,
                        ...e1(en)
                    })
                }
            }

            function tv(ee, et) {
                let en = eP(ee),
                    er = eP(et);
                if (ee === et) return {
                    valid: !0,
                    data: ee
                };
                if (en === eA.object && er === eA.object) {
                    let en = em.objectKeys(et),
                        er = em.objectKeys(ee).filter(ee => -1 !== en.indexOf(ee)),
                        ei = { ...ee,
                            ...et
                        };
                    for (let en of er) {
                        let er = tv(ee[en], et[en]);
                        if (!er.valid) return {
                            valid: !1
                        };
                        ei[en] = er.data
                    }
                    return {
                        valid: !0,
                        data: ei
                    }
                }
                if (en === eA.array && er === eA.array) {
                    if (ee.length !== et.length) return {
                        valid: !1
                    };
                    let en = [];
                    for (let er = 0; er < ee.length; er++) {
                        let ei = ee[er],
                            es = et[er],
                            eo = tv(ei, es);
                        if (!eo.valid) return {
                            valid: !1
                        };
                        en.push(eo.data)
                    }
                    return {
                        valid: !0,
                        data: en
                    }
                }
                return en === eA.date && er === eA.date && +ee == +et ? {
                    valid: !0,
                    data: ee
                } : {
                    valid: !1
                }
            }
            class ty extends e2 {
                _parse(ee) {
                    let {
                        status: et,
                        ctx: en
                    } = this._processInputParams(ee), er = (ee, er) => {
                        if (eq(ee) || eq(er)) return eB;
                        let ei = tv(ee.value, er.value);
                        return ei.valid ? ((eY(ee) || eY(er)) && et.dirty(), {
                            status: et.value,
                            value: ei.data
                        }) : (eV(en, {
                            code: eZ.invalid_intersection_types
                        }), eB)
                    };
                    return en.common.async ? Promise.all([this._def.left._parseAsync({
                        data: en.data,
                        path: en.path,
                        parent: en
                    }), this._def.right._parseAsync({
                        data: en.data,
                        path: en.path,
                        parent: en
                    })]).then(([ee, et]) => er(ee, et)) : er(this._def.left._parseSync({
                        data: en.data,
                        path: en.path,
                        parent: en
                    }), this._def.right._parseSync({
                        data: en.data,
                        path: en.path,
                        parent: en
                    }))
                }
            }
            ty.create = (ee, et, en) => new ty({
                left: ee,
                right: et,
                typeName: ev.ZodIntersection,
                ...e1(en)
            });
            class tb extends e2 {
                _parse(ee) {
                    let {
                        status: et,
                        ctx: en
                    } = this._processInputParams(ee);
                    if (en.parsedType !== eA.array) return eV(en, {
                        code: eZ.invalid_type,
                        expected: eA.array,
                        received: en.parsedType
                    }), eB;
                    if (en.data.length < this._def.items.length) return eV(en, {
                        code: eZ.too_small,
                        minimum: this._def.items.length,
                        inclusive: !0,
                        exact: !1,
                        type: "array"
                    }), eB;
                    let er = this._def.rest;
                    !er && en.data.length > this._def.items.length && (eV(en, {
                        code: eZ.too_big,
                        maximum: this._def.items.length,
                        inclusive: !0,
                        exact: !1,
                        type: "array"
                    }), et.dirty());
                    let ei = en.data.map((ee, et) => {
                        let er = this._def.items[et] || this._def.rest;
                        return er ? er._parse(new eX(en, ee, en.path, et)) : null
                    }).filter(ee => !!ee);
                    return en.common.async ? Promise.all(ei).then(ee => eH.mergeArray(et, ee)) : eH.mergeArray(et, ei)
                }
                get items() {
                    return this._def.items
                }
                rest(ee) {
                    return new tb({ ...this._def,
                        rest: ee
                    })
                }
            }
            tb.create = (ee, et) => {
                if (!Array.isArray(ee)) throw Error("You must pass an array of schemas to z.tuple([ ... ])");
                return new tb({
                    items: ee,
                    typeName: ev.ZodTuple,
                    rest: null,
                    ...e1(et)
                })
            };
            class t_ extends e2 {
                get keySchema() {
                    return this._def.keyType
                }
                get valueSchema() {
                    return this._def.valueType
                }
                _parse(ee) {
                    let {
                        status: et,
                        ctx: en
                    } = this._processInputParams(ee);
                    if (en.parsedType !== eA.object) return eV(en, {
                        code: eZ.invalid_type,
                        expected: eA.object,
                        received: en.parsedType
                    }), eB;
                    let er = [],
                        ei = this._def.keyType,
                        es = this._def.valueType;
                    for (let ee in en.data) er.push({
                        key: ei._parse(new eX(en, ee, en.path, ee)),
                        value: es._parse(new eX(en, en.data[ee], en.path, ee))
                    });
                    return en.common.async ? eH.mergeObjectAsync(et, er) : eH.mergeObjectSync(et, er)
                }
                get element() {
                    return this._def.valueType
                }
                static create(ee, et, en) {
                    return new t_(et instanceof e2 ? {
                        keyType: ee,
                        valueType: et,
                        typeName: ev.ZodRecord,
                        ...e1(en)
                    } : {
                        keyType: e6.create(),
                        valueType: ee,
                        typeName: ev.ZodRecord,
                        ...e1(et)
                    })
                }
            }
            class tw extends e2 {
                _parse(ee) {
                    let {
                        status: et,
                        ctx: en
                    } = this._processInputParams(ee);
                    if (en.parsedType !== eA.map) return eV(en, {
                        code: eZ.invalid_type,
                        expected: eA.map,
                        received: en.parsedType
                    }), eB;
                    let er = this._def.keyType,
                        ei = this._def.valueType,
                        es = [...en.data.entries()].map(([ee, et], es) => ({
                            key: er._parse(new eX(en, ee, en.path, [es, "key"])),
                            value: ei._parse(new eX(en, et, en.path, [es, "value"]))
                        }));
                    if (en.common.async) {
                        let ee = new Map;
                        return Promise.resolve().then(async () => {
                            for (let en of es) {
                                let er = await en.key,
                                    ei = await en.value;
                                if ("aborted" === er.status || "aborted" === ei.status) return eB;
                                ("dirty" === er.status || "dirty" === ei.status) && et.dirty(), ee.set(er.value, ei.value)
                            }
                            return {
                                status: et.value,
                                value: ee
                            }
                        })
                    } {
                        let ee = new Map;
                        for (let en of es) {
                            let er = en.key,
                                ei = en.value;
                            if ("aborted" === er.status || "aborted" === ei.status) return eB;
                            ("dirty" === er.status || "dirty" === ei.status) && et.dirty(), ee.set(er.value, ei.value)
                        }
                        return {
                            status: et.value,
                            value: ee
                        }
                    }
                }
            }
            tw.create = (ee, et, en) => new tw({
                valueType: et,
                keyType: ee,
                typeName: ev.ZodMap,
                ...e1(en)
            });
            class tk extends e2 {
                _parse(ee) {
                    let {
                        status: et,
                        ctx: en
                    } = this._processInputParams(ee);
                    if (en.parsedType !== eA.set) return eV(en, {
                        code: eZ.invalid_type,
                        expected: eA.set,
                        received: en.parsedType
                    }), eB;
                    let er = this._def;
                    null !== er.minSize && en.data.size < er.minSize.value && (eV(en, {
                        code: eZ.too_small,
                        minimum: er.minSize.value,
                        type: "set",
                        inclusive: !0,
                        exact: !1,
                        message: er.minSize.message
                    }), et.dirty()), null !== er.maxSize && en.data.size > er.maxSize.value && (eV(en, {
                        code: eZ.too_big,
                        maximum: er.maxSize.value,
                        type: "set",
                        inclusive: !0,
                        exact: !1,
                        message: er.maxSize.message
                    }), et.dirty());
                    let ei = this._def.valueType;

                    function es(ee) {
                        let en = new Set;
                        for (let er of ee) {
                            if ("aborted" === er.status) return eB;
                            "dirty" === er.status && et.dirty(), en.add(er.value)
                        }
                        return {
                            status: et.value,
                            value: en
                        }
                    }
                    let eo = [...en.data.values()].map((ee, et) => ei._parse(new eX(en, ee, en.path, et)));
                    return en.common.async ? Promise.all(eo).then(ee => es(ee)) : es(eo)
                }
                min(ee, et) {
                    return new tk({ ...this._def,
                        minSize: {
                            value: ee,
                            message: ex.toString(et)
                        }
                    })
                }
                max(ee, et) {
                    return new tk({ ...this._def,
                        maxSize: {
                            value: ee,
                            message: ex.toString(et)
                        }
                    })
                }
                size(ee, et) {
                    return this.min(ee, et).max(ee, et)
                }
                nonempty(ee) {
                    return this.min(1, ee)
                }
            }
            tk.create = (ee, et) => new tk({
                valueType: ee,
                minSize: null,
                maxSize: null,
                typeName: ev.ZodSet,
                ...e1(et)
            });
            class tj extends e2 {
                constructor() {
                    super(...arguments), this.validate = this.implement
                }
                _parse(ee) {
                    let {
                        ctx: et
                    } = this._processInputParams(ee);
                    if (et.parsedType !== eA.function) return eV(et, {
                        code: eZ.invalid_type,
                        expected: eA.function,
                        received: et.parsedType
                    }), eB;

                    function en(ee, en) {
                        return eU({
                            data: ee,
                            path: et.path,
                            errorMaps: [et.common.contextualErrorMap, et.schemaErrorMap, e$(), eM].filter(ee => !!ee),
                            issueData: {
                                code: eZ.invalid_arguments,
                                argumentsError: en
                            }
                        })
                    }

                    function er(ee, en) {
                        return eU({
                            data: ee,
                            path: et.path,
                            errorMaps: [et.common.contextualErrorMap, et.schemaErrorMap, e$(), eM].filter(ee => !!ee),
                            issueData: {
                                code: eZ.invalid_return_type,
                                returnTypeError: en
                            }
                        })
                    }
                    let ei = {
                            errorMap: et.common.contextualErrorMap
                        },
                        es = et.data;
                    return this._def.returns instanceof tS ? eK(async (...ee) => {
                        let et = new eD([]),
                            eo = await this._def.args.parseAsync(ee, ei).catch(er => {
                                throw et.addIssue(en(ee, er)), et
                            }),
                            eu = await es(...eo),
                            ec = await this._def.returns._def.type.parseAsync(eu, ei).catch(ee => {
                                throw et.addIssue(er(eu, ee)), et
                            });
                        return ec
                    }) : eK((...ee) => {
                        let et = this._def.args.safeParse(ee, ei);
                        if (!et.success) throw new eD([en(ee, et.error)]);
                        let eo = es(...et.data),
                            eu = this._def.returns.safeParse(eo, ei);
                        if (!eu.success) throw new eD([er(eo, eu.error)]);
                        return eu.data
                    })
                }
                parameters() {
                    return this._def.args
                }
                returnType() {
                    return this._def.returns
                }
                args(...ee) {
                    return new tj({ ...this._def,
                        args: tb.create(ee).rest(tl.create())
                    })
                }
                returns(ee) {
                    return new tj({ ...this._def,
                        returns: ee
                    })
                }
                implement(ee) {
                    let et = this.parse(ee);
                    return et
                }
                strictImplement(ee) {
                    let et = this.parse(ee);
                    return et
                }
                static create(ee, et, en) {
                    return new tj({
                        args: ee || tb.create([]).rest(tl.create()),
                        returns: et || tl.create(),
                        typeName: ev.ZodFunction,
                        ...e1(en)
                    })
                }
            }
            class tE extends e2 {
                get schema() {
                    return this._def.getter()
                }
                _parse(ee) {
                    let {
                        ctx: et
                    } = this._processInputParams(ee), en = this._def.getter();
                    return en._parse({
                        data: et.data,
                        path: et.path,
                        parent: et
                    })
                }
            }
            tE.create = (ee, et) => new tE({
                getter: ee,
                typeName: ev.ZodLazy,
                ...e1(et)
            });
            class tT extends e2 {
                _parse(ee) {
                    if (ee.data !== this._def.value) {
                        let et = this._getOrReturnCtx(ee);
                        return eV(et, {
                            code: eZ.invalid_literal,
                            expected: this._def.value
                        }), eB
                    }
                    return {
                        status: "valid",
                        value: ee.data
                    }
                }
                get value() {
                    return this._def.value
                }
            }

            function tO(ee, et) {
                return new tC({
                    values: ee,
                    typeName: ev.ZodEnum,
                    ...e1(et)
                })
            }
            tT.create = (ee, et) => new tT({
                value: ee,
                typeName: ev.ZodLiteral,
                ...e1(et)
            });
            class tC extends e2 {
                _parse(ee) {
                    if ("string" != typeof ee.data) {
                        let et = this._getOrReturnCtx(ee),
                            en = this._def.values;
                        return eV(et, {
                            expected: em.joinValues(en),
                            received: et.parsedType,
                            code: eZ.invalid_type
                        }), eB
                    }
                    if (-1 === this._def.values.indexOf(ee.data)) {
                        let et = this._getOrReturnCtx(ee),
                            en = this._def.values;
                        return eV(et, {
                            received: et.data,
                            code: eZ.invalid_enum_value,
                            options: en
                        }), eB
                    }
                    return eK(ee.data)
                }
                get options() {
                    return this._def.values
                }
                get enum() {
                    let ee = {};
                    for (let et of this._def.values) ee[et] = et;
                    return ee
                }
                get Values() {
                    let ee = {};
                    for (let et of this._def.values) ee[et] = et;
                    return ee
                }
                get Enum() {
                    let ee = {};
                    for (let et of this._def.values) ee[et] = et;
                    return ee
                }
            }
            tC.create = tO;
            class tN extends e2 {
                _parse(ee) {
                    let et = em.getValidEnumValues(this._def.values),
                        en = this._getOrReturnCtx(ee);
                    if (en.parsedType !== eA.string && en.parsedType !== eA.number) {
                        let ee = em.objectValues(et);
                        return eV(en, {
                            expected: em.joinValues(ee),
                            received: en.parsedType,
                            code: eZ.invalid_type
                        }), eB
                    }
                    if (-1 === et.indexOf(ee.data)) {
                        let ee = em.objectValues(et);
                        return eV(en, {
                            received: en.data,
                            code: eZ.invalid_enum_value,
                            options: ee
                        }), eB
                    }
                    return eK(ee.data)
                }
                get enum() {
                    return this._def.values
                }
            }
            tN.create = (ee, et) => new tN({
                values: ee,
                typeName: ev.ZodNativeEnum,
                ...e1(et)
            });
            class tS extends e2 {
                _parse(ee) {
                    let {
                        ctx: et
                    } = this._processInputParams(ee);
                    if (et.parsedType !== eA.promise && !1 === et.common.async) return eV(et, {
                        code: eZ.invalid_type,
                        expected: eA.promise,
                        received: et.parsedType
                    }), eB;
                    let en = et.parsedType === eA.promise ? et.data : Promise.resolve(et.data);
                    return eK(en.then(ee => this._def.type.parseAsync(ee, {
                        path: et.path,
                        errorMap: et.common.contextualErrorMap
                    })))
                }
            }
            tS.create = (ee, et) => new tS({
                type: ee,
                typeName: ev.ZodPromise,
                ...e1(et)
            });
            class tR extends e2 {
                innerType() {
                    return this._def.schema
                }
                sourceType() {
                    return this._def.schema._def.typeName === ev.ZodEffects ? this._def.schema.sourceType() : this._def.schema
                }
                _parse(ee) {
                    let {
                        status: et,
                        ctx: en
                    } = this._processInputParams(ee), er = this._def.effect || null;
                    if ("preprocess" === er.type) {
                        let ee = er.transform(en.data);
                        return en.common.async ? Promise.resolve(ee).then(ee => this._def.schema._parseAsync({
                            data: ee,
                            path: en.path,
                            parent: en
                        })) : this._def.schema._parseSync({
                            data: ee,
                            path: en.path,
                            parent: en
                        })
                    }
                    let ei = {
                        addIssue: ee => {
                            eV(en, ee), ee.fatal ? et.abort() : et.dirty()
                        },
                        get path() {
                            return en.path
                        }
                    };
                    if (ei.addIssue = ei.addIssue.bind(ei), "refinement" === er.type) {
                        let ee = ee => {
                            let et = er.refinement(ee, ei);
                            if (en.common.async) return Promise.resolve(et);
                            if (et instanceof Promise) throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                            return ee
                        };
                        if (!1 !== en.common.async) return this._def.schema._parseAsync({
                            data: en.data,
                            path: en.path,
                            parent: en
                        }).then(en => "aborted" === en.status ? eB : ("dirty" === en.status && et.dirty(), ee(en.value).then(() => ({
                            status: et.value,
                            value: en.value
                        })))); {
                            let er = this._def.schema._parseSync({
                                data: en.data,
                                path: en.path,
                                parent: en
                            });
                            return "aborted" === er.status ? eB : ("dirty" === er.status && et.dirty(), ee(er.value), {
                                status: et.value,
                                value: er.value
                            })
                        }
                    }
                    if ("transform" === er.type) {
                        if (!1 !== en.common.async) return this._def.schema._parseAsync({
                            data: en.data,
                            path: en.path,
                            parent: en
                        }).then(ee => eQ(ee) ? Promise.resolve(er.transform(ee.value, ei)).then(ee => ({
                            status: et.value,
                            value: ee
                        })) : ee); {
                            let ee = this._def.schema._parseSync({
                                data: en.data,
                                path: en.path,
                                parent: en
                            });
                            if (!eQ(ee)) return ee;
                            let es = er.transform(ee.value, ei);
                            if (es instanceof Promise) throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                            return {
                                status: et.value,
                                value: es
                            }
                        }
                    }
                    em.assertNever(er)
                }
            }
            tR.create = (ee, et, en) => new tR({
                schema: ee,
                typeName: ev.ZodEffects,
                effect: et,
                ...e1(en)
            }), tR.createWithPreprocess = (ee, et, en) => new tR({
                schema: et,
                effect: {
                    type: "preprocess",
                    transform: ee
                },
                typeName: ev.ZodEffects,
                ...e1(en)
            });
            class tI extends e2 {
                _parse(ee) {
                    let et = this._getType(ee);
                    return et === eA.undefined ? eK(void 0) : this._def.innerType._parse(ee)
                }
                unwrap() {
                    return this._def.innerType
                }
            }
            tI.create = (ee, et) => new tI({
                innerType: ee,
                typeName: ev.ZodOptional,
                ...e1(et)
            });
            class tA extends e2 {
                _parse(ee) {
                    let et = this._getType(ee);
                    return et === eA.null ? eK(null) : this._def.innerType._parse(ee)
                }
                unwrap() {
                    return this._def.innerType
                }
            }
            tA.create = (ee, et) => new tA({
                innerType: ee,
                typeName: ev.ZodNullable,
                ...e1(et)
            });
            class tP extends e2 {
                _parse(ee) {
                    let {
                        ctx: et
                    } = this._processInputParams(ee), en = et.data;
                    return et.parsedType === eA.undefined && (en = this._def.defaultValue()), this._def.innerType._parse({
                        data: en,
                        path: et.path,
                        parent: et
                    })
                }
                removeDefault() {
                    return this._def.innerType
                }
            }
            tP.create = (ee, et) => new tP({
                innerType: ee,
                typeName: ev.ZodDefault,
                defaultValue: "function" == typeof et.default ? et.default : () => et.default,
                ...e1(et)
            });
            class tZ extends e2 {
                _parse(ee) {
                    let {
                        ctx: et
                    } = this._processInputParams(ee), en = this._def.innerType._parse({
                        data: et.data,
                        path: et.path,
                        parent: et
                    });
                    return eJ(en) ? en.then(ee => ({
                        status: "valid",
                        value: "valid" === ee.status ? ee.value : this._def.defaultValue()
                    })) : {
                        status: "valid",
                        value: "valid" === en.status ? en.value : this._def.defaultValue()
                    }
                }
                removeDefault() {
                    return this._def.innerType
                }
            }
            tZ.create = (ee, et) => new tZ({
                innerType: ee,
                typeName: ev.ZodCatch,
                defaultValue: "function" == typeof et.default ? et.default : () => et.default,
                ...e1(et)
            });
            class tL extends e2 {
                _parse(ee) {
                    let et = this._getType(ee);
                    if (et !== eA.nan) {
                        let et = this._getOrReturnCtx(ee);
                        return eV(et, {
                            code: eZ.invalid_type,
                            expected: eA.nan,
                            received: et.parsedType
                        }), eB
                    }
                    return {
                        status: "valid",
                        value: ee.data
                    }
                }
            }
            tL.create = ee => new tL({
                typeName: ev.ZodNaN,
                ...e1(ee)
            });
            let tD = Symbol("zod_brand");
            class tM extends e2 {
                _parse(ee) {
                    let {
                        ctx: et
                    } = this._processInputParams(ee), en = et.data;
                    return this._def.type._parse({
                        data: en,
                        path: et.path,
                        parent: et
                    })
                }
                unwrap() {
                    return this._def.type
                }
            }
            class tz extends e2 {
                _parse(ee) {
                    let {
                        status: et,
                        ctx: en
                    } = this._processInputParams(ee);
                    if (en.common.async) {
                        let ee = async () => {
                            let ee = await this._def.in._parseAsync({
                                data: en.data,
                                path: en.path,
                                parent: en
                            });
                            return "aborted" === ee.status ? eB : "dirty" === ee.status ? (et.dirty(), eG(ee.value)) : this._def.out._parseAsync({
                                data: ee.value,
                                path: en.path,
                                parent: en
                            })
                        };
                        return ee()
                    } {
                        let ee = this._def.in._parseSync({
                            data: en.data,
                            path: en.path,
                            parent: en
                        });
                        return "aborted" === ee.status ? eB : "dirty" === ee.status ? (et.dirty(), {
                            status: "dirty",
                            value: ee.value
                        }) : this._def.out._parseSync({
                            data: ee.value,
                            path: en.path,
                            parent: en
                        })
                    }
                }
                static create(ee, et) {
                    return new tz({ in: ee,
                        out: et,
                        typeName: ev.ZodPipeline
                    })
                }
            }
            let tF = (ee, et = {}, en) => ee ? to.create().superRefine((er, ei) => {
                    if (!ee(er)) {
                        let ee = "function" == typeof et ? et(er) : et,
                            es = "string" == typeof ee ? {
                                message: ee
                            } : ee;
                        ei.addIssue({
                            code: "custom",
                            ...es,
                            fatal: en
                        })
                    }
                }) : to.create(),
                t$ = {
                    object: tf.lazycreate
                };
            ! function(ee) {
                ee.ZodString = "ZodString", ee.ZodNumber = "ZodNumber", ee.ZodNaN = "ZodNaN", ee.ZodBigInt = "ZodBigInt", ee.ZodBoolean = "ZodBoolean", ee.ZodDate = "ZodDate", ee.ZodSymbol = "ZodSymbol", ee.ZodUndefined = "ZodUndefined", ee.ZodNull = "ZodNull", ee.ZodAny = "ZodAny", ee.ZodUnknown = "ZodUnknown", ee.ZodNever = "ZodNever", ee.ZodVoid = "ZodVoid", ee.ZodArray = "ZodArray", ee.ZodObject = "ZodObject", ee.ZodUnion = "ZodUnion", ee.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", ee.ZodIntersection = "ZodIntersection", ee.ZodTuple = "ZodTuple", ee.ZodRecord = "ZodRecord", ee.ZodMap = "ZodMap", ee.ZodSet = "ZodSet", ee.ZodFunction = "ZodFunction", ee.ZodLazy = "ZodLazy", ee.ZodLiteral = "ZodLiteral", ee.ZodEnum = "ZodEnum", ee.ZodEffects = "ZodEffects", ee.ZodNativeEnum = "ZodNativeEnum", ee.ZodOptional = "ZodOptional", ee.ZodNullable = "ZodNullable", ee.ZodDefault = "ZodDefault", ee.ZodCatch = "ZodCatch", ee.ZodPromise = "ZodPromise", ee.ZodBranded = "ZodBranded", ee.ZodPipeline = "ZodPipeline"
            }(ev || (ev = {}));
            let tU = (ee, et = {
                    message: `Input not instance of ${ee.name}`
                }) => tF(et => et instanceof ee, et, !0),
                tW = e6.create,
                tV = e7.create,
                tH = tL.create,
                tB = te.create,
                tG = tt.create,
                tK = tn.create,
                tq = tr.create,
                tY = ti.create,
                tQ = ts.create,
                tJ = to.create,
                tX = tl.create,
                t0 = tu.create,
                t1 = tc.create,
                t2 = td.create,
                t4 = tf.create,
                t3 = tf.strictCreate,
                t5 = tm.create,
                t8 = tg.create,
                t6 = ty.create,
                t9 = tb.create,
                t7 = t_.create,
                nt = tw.create,
                nn = tk.create,
                nr = tj.create,
                ni = tE.create,
                ns = tT.create,
                no = tC.create,
                nl = tN.create,
                nu = tS.create,
                nc = tR.create,
                nd = tI.create,
                np = tA.create,
                nh = tR.createWithPreprocess,
                nf = tz.create,
                nm = () => tW().optional(),
                nx = () => tV().optional(),
                ng = () => tG().optional(),
                nv = {
                    string: ee => e6.create({ ...ee,
                        coerce: !0
                    }),
                    number: ee => e7.create({ ...ee,
                        coerce: !0
                    }),
                    boolean: ee => tt.create({ ...ee,
                        coerce: !0
                    }),
                    bigint: ee => te.create({ ...ee,
                        coerce: !0
                    }),
                    date: ee => tn.create({ ...ee,
                        coerce: !0
                    })
                },
                ny = eB;
            var nb = Object.freeze({
                    __proto__: null,
                    defaultErrorMap: eM,
                    setErrorMap: eF,
                    getErrorMap: e$,
                    makeIssue: eU,
                    EMPTY_PATH: eW,
                    addIssueToContext: eV,
                    ParseStatus: eH,
                    INVALID: eB,
                    DIRTY: eG,
                    OK: eK,
                    isAborted: eq,
                    isDirty: eY,
                    isValid: eQ,
                    isAsync: eJ,
                    get util() {
                        return em
                    },
                    ZodParsedType: eA,
                    getParsedType: eP,
                    ZodType: e2,
                    ZodString: e6,
                    ZodNumber: e7,
                    ZodBigInt: te,
                    ZodBoolean: tt,
                    ZodDate: tn,
                    ZodSymbol: tr,
                    ZodUndefined: ti,
                    ZodNull: ts,
                    ZodAny: to,
                    ZodUnknown: tl,
                    ZodNever: tu,
                    ZodVoid: tc,
                    ZodArray: td,
                    get objectUtil() {
                        return eg
                    },
                    ZodObject: tf,
                    ZodUnion: tm,
                    ZodDiscriminatedUnion: tg,
                    ZodIntersection: ty,
                    ZodTuple: tb,
                    ZodRecord: t_,
                    ZodMap: tw,
                    ZodSet: tk,
                    ZodFunction: tj,
                    ZodLazy: tE,
                    ZodLiteral: tT,
                    ZodEnum: tC,
                    ZodNativeEnum: tN,
                    ZodPromise: tS,
                    ZodEffects: tR,
                    ZodTransformer: tR,
                    ZodOptional: tI,
                    ZodNullable: tA,
                    ZodDefault: tP,
                    ZodCatch: tZ,
                    ZodNaN: tL,
                    BRAND: tD,
                    ZodBranded: tM,
                    ZodPipeline: tz,
                    custom: tF,
                    Schema: e2,
                    ZodSchema: e2,
                    late: t$,
                    get ZodFirstPartyTypeKind() {
                        return ev
                    },
                    coerce: nv,
                    any: tJ,
                    array: t2,
                    bigint: tB,
                    boolean: tG,
                    date: tK,
                    discriminatedUnion: t8,
                    effect: nc,
                    enum: no,
                    function: nr,
                    instanceof: tU,
                    intersection: t6,
                    lazy: ni,
                    literal: ns,
                    map: nt,
                    nan: tH,
                    nativeEnum: nl,
                    never: t0,
                    null: tQ,
                    nullable: np,
                    number: tV,
                    object: t4,
                    oboolean: ng,
                    onumber: nx,
                    optional: nd,
                    ostring: nm,
                    pipeline: nf,
                    preprocess: nh,
                    promise: nu,
                    record: t7,
                    set: nn,
                    strictObject: t3,
                    string: tW,
                    symbol: tq,
                    transformer: nc,
                    tuple: t9,
                    undefined: tY,
                    union: t5,
                    unknown: tX,
                    void: t1,
                    NEVER: ny,
                    ZodIssueCode: eZ,
                    quotelessJson: eL,
                    ZodError: eD
                }),
                n_ = en(9556),
                nw = en.n(n_);
            en(3067);
            var nk = en(5250);
            let nj = ["light", "dark"],
                nE = "(prefers-color-scheme: dark)",
                nT = "undefined" == typeof window,
                nO = (0, eE.createContext)(void 0),
                nC = {
                    setTheme: ee => {},
                    themes: []
                },
                nN = () => {
                    var ee;
                    return null !== (ee = (0, eE.useContext)(nO)) && void 0 !== ee ? ee : nC
                },
                nS = ee => (0, eE.useContext)(nO) ? eE.createElement(eE.Fragment, null, ee.children) : eE.createElement(nI, ee),
                nR = ["light", "dark"],
                nI = ({
                    forcedTheme: ee,
                    disableTransitionOnChange: et = !1,
                    enableSystem: en = !0,
                    enableColorScheme: er = !0,
                    storageKey: ei = "theme",
                    themes: es = nR,
                    defaultTheme: eo = en ? "system" : "light",
                    attribute: eu = "data-theme",
                    value: ec,
                    children: ed,
                    nonce: ep
                }) => {
                    let [eh, ef] = (0, eE.useState)(() => nP(ei, eo)), [em, ex] = (0, eE.useState)(() => nP(ei)), eg = ec ? Object.values(ec) : es, ev = (0, eE.useCallback)(ee => {
                        let ei = ee;
                        if (!ei) return;
                        "system" === ee && en && (ei = nL());
                        let es = ec ? ec[ei] : ei,
                            ed = et ? nZ() : null,
                            ep = document.documentElement;
                        if ("class" === eu ? (ep.classList.remove(...eg), es && ep.classList.add(es)) : es ? ep.setAttribute(eu, es) : ep.removeAttribute(eu), er) {
                            let ee = nj.includes(eo) ? eo : null,
                                et = nj.includes(ei) ? ei : ee;
                            ep.style.colorScheme = et
                        }
                        null == ed || ed()
                    }, []), ey = (0, eE.useCallback)(ee => {
                        ef(ee);
                        try {
                            localStorage.setItem(ei, ee)
                        } catch (ee) {}
                    }, [ee]), eb = (0, eE.useCallback)(et => {
                        let er = nL(et);
                        ex(er), "system" === eh && en && !ee && ev("system")
                    }, [eh, ee]);
                    (0, eE.useEffect)(() => {
                        let ee = window.matchMedia(nE);
                        return ee.addListener(eb), eb(ee), () => ee.removeListener(eb)
                    }, [eb]), (0, eE.useEffect)(() => {
                        let ee = ee => {
                            ee.key === ei && ey(ee.newValue || eo)
                        };
                        return window.addEventListener("storage", ee), () => window.removeEventListener("storage", ee)
                    }, [ey]), (0, eE.useEffect)(() => {
                        ev(null != ee ? ee : eh)
                    }, [ee, eh]);
                    let e_ = (0, eE.useMemo)(() => ({
                        theme: eh,
                        setTheme: ey,
                        forcedTheme: ee,
                        resolvedTheme: "system" === eh ? em : eh,
                        themes: en ? [...es, "system"] : es,
                        systemTheme: en ? em : void 0
                    }), [eh, ey, ee, em, en, es]);
                    return eE.createElement(nO.Provider, {
                        value: e_
                    }, eE.createElement(nA, {
                        forcedTheme: ee,
                        disableTransitionOnChange: et,
                        enableSystem: en,
                        enableColorScheme: er,
                        storageKey: ei,
                        themes: es,
                        defaultTheme: eo,
                        attribute: eu,
                        value: ec,
                        children: ed,
                        attrs: eg,
                        nonce: ep
                    }), ed)
                },
                nA = (0, eE.memo)(({
                    forcedTheme: ee,
                    storageKey: et,
                    attribute: en,
                    enableSystem: er,
                    enableColorScheme: ei,
                    defaultTheme: es,
                    value: eo,
                    attrs: eu,
                    nonce: ec
                }) => {
                    let ed = "system" === es,
                        ep = "class" === en ? `var d=document.documentElement,c=d.classList;c.remove(${eu.map(ee=>`'${ee}'`).join(",")});` : `var d=document.documentElement,n='${en}',s='setAttribute';`,
                        eh = ei ? nj.includes(es) && es ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${es}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "",
                        ef = (ee, et = !1, er = !0) => {
                            let es = eo ? eo[ee] : ee,
                                eu = et ? ee + "|| ''" : `'${es}'`,
                                ec = "";
                            return ei && er && !et && nj.includes(ee) && (ec += `d.style.colorScheme = '${ee}';`), "class" === en ? ec += et || es ? `c.add(${eu})` : "null" : es && (ec += `d[s](n,${eu})`), ec
                        },
                        em = ee ? `!function(){${ep}${ef(ee)}}()` : er ? `!function(){try{${ep}var e=localStorage.getItem('${et}');if('system'===e||(!e&&${ed})){var t='${nE}',m=window.matchMedia(t);if(m.media!==t||m.matches){${ef("dark")}}else{${ef("light")}}}else if(e){${eo?`var x=${JSON.stringify(eo)};`:""}${ef(eo?"x[e]":"e",!0)}}${ed?"":"else{"+ef(es,!1,!1)+"}"}${eh}}catch(e){}}()` : `!function(){try{${ep}var e=localStorage.getItem('${et}');if(e){${eo?`var x=${JSON.stringify(eo)};`:""}${ef(eo?"x[e]":"e",!0)}}else{${ef(es,!1,!1)};}${eh}}catch(t){}}();`;
                    return eE.createElement("script", {
                        nonce: ec,
                        dangerouslySetInnerHTML: {
                            __html: em
                        }
                    })
                }, () => !0),
                nP = (ee, et) => {
                    let en;
                    if (!nT) {
                        try {
                            en = localStorage.getItem(ee) || void 0
                        } catch (ee) {}
                        return en || et
                    }
                },
                nZ = () => {
                    let ee = document.createElement("style");
                    return ee.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(ee), () => {
                        window.getComputedStyle(document.body), setTimeout(() => {
                            document.head.removeChild(ee)
                        }, 1)
                    }
                },
                nL = ee => (ee || (ee = window.matchMedia(nE)), ee.matches ? "dark" : "light");
            ! function(ee) {
                function et(ee) {}

                function en(ee) {
                    throw Error()
                }

                function er(ee, et = " | ") {
                    return ee.map(ee => "string" == typeof ee ? `'${ee}'` : ee).join(et)
                }
                ee.assertEqual = ee => ee, ee.assertIs = et, ee.assertNever = en, ee.arrayToEnum = ee => {
                    let et = {};
                    for (let en of ee) et[en] = en;
                    return et
                }, ee.getValidEnumValues = et => {
                    let en = ee.objectKeys(et).filter(ee => "number" != typeof et[et[ee]]),
                        er = {};
                    for (let ee of en) er[ee] = et[ee];
                    return ee.objectValues(er)
                }, ee.objectValues = et => ee.objectKeys(et).map(function(ee) {
                    return et[ee]
                }), ee.objectKeys = "function" == typeof Object.keys ? ee => Object.keys(ee) : ee => {
                    let et = [];
                    for (let en in ee) Object.prototype.hasOwnProperty.call(ee, en) && et.push(en);
                    return et
                }, ee.find = (ee, et) => {
                    for (let en of ee)
                        if (et(en)) return en
                }, ee.isInteger = "function" == typeof Number.isInteger ? ee => Number.isInteger(ee) : ee => "number" == typeof ee && isFinite(ee) && Math.floor(ee) === ee, ee.joinValues = er, ee.jsonStringifyReplacer = (ee, et) => "bigint" == typeof et ? et.toString() : et
            }(ey || (ey = {})),
            function(ee) {
                ee.mergeShapes = (ee, et) => ({ ...ee,
                    ...et
                })
            }(eb || (eb = {}));
            let nD = ey.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
                nM = ee => {
                    let et = typeof ee;
                    switch (et) {
                        case "undefined":
                            return nD.undefined;
                        case "string":
                            return nD.string;
                        case "number":
                            return isNaN(ee) ? nD.nan : nD.number;
                        case "boolean":
                            return nD.boolean;
                        case "function":
                            return nD.function;
                        case "bigint":
                            return nD.bigint;
                        case "symbol":
                            return nD.symbol;
                        case "object":
                            if (Array.isArray(ee)) return nD.array;
                            if (null === ee) return nD.null;
                            if (ee.then && "function" == typeof ee.then && ee.catch && "function" == typeof ee.catch) return nD.promise;
                            if ("undefined" != typeof Map && ee instanceof Map) return nD.map;
                            if ("undefined" != typeof Set && ee instanceof Set) return nD.set;
                            if ("undefined" != typeof Date && ee instanceof Date) return nD.date;
                            return nD.object;
                        default:
                            return nD.unknown
                    }
                },
                nz = ey.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]),
                nF = ee => {
                    let et = JSON.stringify(ee, null, 2);
                    return et.replace(/"([^"]+)":/g, "$1:")
                };
            class n$ extends Error {
                constructor(ee) {
                    super(), this.issues = [], this.addIssue = ee => {
                        this.issues = [...this.issues, ee]
                    }, this.addIssues = (ee = []) => {
                        this.issues = [...this.issues, ...ee]
                    };
                    let et = new.target.prototype;
                    Object.setPrototypeOf ? Object.setPrototypeOf(this, et) : this.__proto__ = et, this.name = "ZodError", this.issues = ee
                }
                get errors() {
                    return this.issues
                }
                format(ee) {
                    let et = ee || function(ee) {
                            return ee.message
                        },
                        en = {
                            _errors: []
                        },
                        er = ee => {
                            for (let ei of ee.issues)
                                if ("invalid_union" === ei.code) ei.unionErrors.map(er);
                                else if ("invalid_return_type" === ei.code) er(ei.returnTypeError);
                            else if ("invalid_arguments" === ei.code) er(ei.argumentsError);
                            else if (0 === ei.path.length) en._errors.push(et(ei));
                            else {
                                let ee = en,
                                    er = 0;
                                for (; er < ei.path.length;) {
                                    let en = ei.path[er],
                                        es = er === ei.path.length - 1;
                                    es ? (ee[en] = ee[en] || {
                                        _errors: []
                                    }, ee[en]._errors.push(et(ei))) : ee[en] = ee[en] || {
                                        _errors: []
                                    }, ee = ee[en], er++
                                }
                            }
                        };
                    return er(this), en
                }
                toString() {
                    return this.message
                }
                get message() {
                    return JSON.stringify(this.issues, ey.jsonStringifyReplacer, 2)
                }
                get isEmpty() {
                    return 0 === this.issues.length
                }
                flatten(ee = ee => ee.message) {
                    let et = {},
                        en = [];
                    for (let er of this.issues) er.path.length > 0 ? (et[er.path[0]] = et[er.path[0]] || [], et[er.path[0]].push(ee(er))) : en.push(ee(er));
                    return {
                        formErrors: en,
                        fieldErrors: et
                    }
                }
                get formErrors() {
                    return this.flatten()
                }
            }
            n$.create = ee => {
                let et = new n$(ee);
                return et
            };
            let nU = (ee, et) => {
                    let en;
                    switch (ee.code) {
                        case nz.invalid_type:
                            en = ee.received === nD.undefined ? "Required" : `Expected ${ee.expected}, received ${ee.received}`;
                            break;
                        case nz.invalid_literal:
                            en = `Invalid literal value, expected ${JSON.stringify(ee.expected,ey.jsonStringifyReplacer)}`;
                            break;
                        case nz.unrecognized_keys:
                            en = `Unrecognized key(s) in object: ${ey.joinValues(ee.keys,", ")}`;
                            break;
                        case nz.invalid_union:
                            en = "Invalid input";
                            break;
                        case nz.invalid_union_discriminator:
                            en = `Invalid discriminator value. Expected ${ey.joinValues(ee.options)}`;
                            break;
                        case nz.invalid_enum_value:
                            en = `Invalid enum value. Expected ${ey.joinValues(ee.options)}, received '${ee.received}'`;
                            break;
                        case nz.invalid_arguments:
                            en = "Invalid function arguments";
                            break;
                        case nz.invalid_return_type:
                            en = "Invalid function return type";
                            break;
                        case nz.invalid_date:
                            en = "Invalid date";
                            break;
                        case nz.invalid_string:
                            "object" == typeof ee.validation ? "includes" in ee.validation ? (en = `Invalid input: must include "${ee.validation.includes}"`, "number" == typeof ee.validation.position && (en = `${en} at one or more positions greater than or equal to ${ee.validation.position}`)) : "startsWith" in ee.validation ? en = `Invalid input: must start with "${ee.validation.startsWith}"` : "endsWith" in ee.validation ? en = `Invalid input: must end with "${ee.validation.endsWith}"` : ey.assertNever(ee.validation) : en = "regex" !== ee.validation ? `Invalid ${ee.validation}` : "Invalid";
                            break;
                        case nz.too_small:
                            en = "array" === ee.type ? `Array must contain ${ee.exact?"exactly":ee.inclusive?"at least":"more than"} ${ee.minimum} element(s)` : "string" === ee.type ? `String must contain ${ee.exact?"exactly":ee.inclusive?"at least":"over"} ${ee.minimum} character(s)` : "number" === ee.type ? `Number must be ${ee.exact?"exactly equal to ":ee.inclusive?"greater than or equal to ":"greater than "}${ee.minimum}` : "date" === ee.type ? `Date must be ${ee.exact?"exactly equal to ":ee.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(ee.minimum))}` : "Invalid input";
                            break;
                        case nz.too_big:
                            en = "array" === ee.type ? `Array must contain ${ee.exact?"exactly":ee.inclusive?"at most":"less than"} ${ee.maximum} element(s)` : "string" === ee.type ? `String must contain ${ee.exact?"exactly":ee.inclusive?"at most":"under"} ${ee.maximum} character(s)` : "number" === ee.type ? `Number must be ${ee.exact?"exactly":ee.inclusive?"less than or equal to":"less than"} ${ee.maximum}` : "bigint" === ee.type ? `BigInt must be ${ee.exact?"exactly":ee.inclusive?"less than or equal to":"less than"} ${ee.maximum}` : "date" === ee.type ? `Date must be ${ee.exact?"exactly":ee.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(ee.maximum))}` : "Invalid input";
                            break;
                        case nz.custom:
                            en = "Invalid input";
                            break;
                        case nz.invalid_intersection_types:
                            en = "Intersection results could not be merged";
                            break;
                        case nz.not_multiple_of:
                            en = `Number must be a multiple of ${ee.multipleOf}`;
                            break;
                        case nz.not_finite:
                            en = "Number must be finite";
                            break;
                        default:
                            en = et.defaultError, ey.assertNever(ee)
                    }
                    return {
                        message: en
                    }
                },
                nW = nU;

            function nV(ee) {
                nW = ee
            }

            function nH() {
                return nW
            }
            let nB = ee => {
                    let {
                        data: et,
                        path: en,
                        errorMaps: er,
                        issueData: ei
                    } = ee, es = [...en, ...ei.path || []], eo = { ...ei,
                        path: es
                    }, eu = "", ec = er.filter(ee => !!ee).slice().reverse();
                    for (let ee of ec) eu = ee(eo, {
                        data: et,
                        defaultError: eu
                    }).message;
                    return { ...ei,
                        path: es,
                        message: ei.message || eu
                    }
                },
                nG = [];

            function nK(ee, et) {
                let en = nB({
                    issueData: et,
                    data: ee.data,
                    path: ee.path,
                    errorMaps: [ee.common.contextualErrorMap, ee.schemaErrorMap, nH(), nU].filter(ee => !!ee)
                });
                ee.common.issues.push(en)
            }
            class nq {
                constructor() {
                    this.value = "valid"
                }
                dirty() {
                    "valid" === this.value && (this.value = "dirty")
                }
                abort() {
                    "aborted" !== this.value && (this.value = "aborted")
                }
                static mergeArray(ee, et) {
                    let en = [];
                    for (let er of et) {
                        if ("aborted" === er.status) return nY;
                        "dirty" === er.status && ee.dirty(), en.push(er.value)
                    }
                    return {
                        status: ee.value,
                        value: en
                    }
                }
                static async mergeObjectAsync(ee, et) {
                    let en = [];
                    for (let ee of et) en.push({
                        key: await ee.key,
                        value: await ee.value
                    });
                    return nq.mergeObjectSync(ee, en)
                }
                static mergeObjectSync(ee, et) {
                    let en = {};
                    for (let er of et) {
                        let {
                            key: et,
                            value: ei
                        } = er;
                        if ("aborted" === et.status || "aborted" === ei.status) return nY;
                        "dirty" === et.status && ee.dirty(), "dirty" === ei.status && ee.dirty(), "__proto__" !== et.value && (void 0 !== ei.value || er.alwaysSet) && (en[et.value] = ei.value)
                    }
                    return {
                        status: ee.value,
                        value: en
                    }
                }
            }
            let nY = Object.freeze({
                    status: "aborted"
                }),
                nQ = ee => ({
                    status: "dirty",
                    value: ee
                }),
                nJ = ee => ({
                    status: "valid",
                    value: ee
                }),
                nX = ee => "aborted" === ee.status,
                n0 = ee => "dirty" === ee.status,
                n1 = ee => "valid" === ee.status,
                n2 = ee => "undefined" != typeof Promise && ee instanceof Promise;
            ! function(ee) {
                ee.errToObj = ee => "string" == typeof ee ? {
                    message: ee
                } : ee || {}, ee.toString = ee => "string" == typeof ee ? ee : null == ee ? void 0 : ee.message
            }(e_ || (e_ = {}));
            class n4 {
                constructor(ee, et, en, er) {
                    this._cachedPath = [], this.parent = ee, this.data = et, this._path = en, this._key = er
                }
                get path() {
                    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
                }
            }
            let n3 = (ee, et) => {
                if (n1(et)) return {
                    success: !0,
                    data: et.value
                };
                if (!ee.common.issues.length) throw Error("Validation failed but no issues detected.");
                return {
                    success: !1,
                    get error() {
                        if (this._error) return this._error;
                        let et = new n$(ee.common.issues);
                        return this._error = et, this._error
                    }
                }
            };

            function n5(ee) {
                if (!ee) return {};
                let {
                    errorMap: et,
                    invalid_type_error: en,
                    required_error: er,
                    description: ei
                } = ee;
                if (et && (en || er)) throw Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
                if (et) return {
                    errorMap: et,
                    description: ei
                };
                let es = (ee, et) => "invalid_type" !== ee.code ? {
                    message: et.defaultError
                } : void 0 === et.data ? {
                    message: null != er ? er : et.defaultError
                } : {
                    message: null != en ? en : et.defaultError
                };
                return {
                    errorMap: es,
                    description: ei
                }
            }
            class n8 {
                constructor(ee) {
                    this.spa = this.safeParseAsync, this._def = ee, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
                }
                get description() {
                    return this._def.description
                }
                _getType(ee) {
                    return nM(ee.data)
                }
                _getOrReturnCtx(ee, et) {
                    return et || {
                        common: ee.parent.common,
                        data: ee.data,
                        parsedType: nM(ee.data),
                        schemaErrorMap: this._def.errorMap,
                        path: ee.path,
                        parent: ee.parent
                    }
                }
                _processInputParams(ee) {
                    return {
                        status: new nq,
                        ctx: {
                            common: ee.parent.common,
                            data: ee.data,
                            parsedType: nM(ee.data),
                            schemaErrorMap: this._def.errorMap,
                            path: ee.path,
                            parent: ee.parent
                        }
                    }
                }
                _parseSync(ee) {
                    let et = this._parse(ee);
                    if (n2(et)) throw Error("Synchronous parse encountered promise.");
                    return et
                }
                _parseAsync(ee) {
                    let et = this._parse(ee);
                    return Promise.resolve(et)
                }
                parse(ee, et) {
                    let en = this.safeParse(ee, et);
                    if (en.success) return en.data;
                    throw en.error
                }
                safeParse(ee, et) {
                    var en;
                    let er = {
                            common: {
                                issues: [],
                                async: null !== (en = null == et ? void 0 : et.async) && void 0 !== en && en,
                                contextualErrorMap: null == et ? void 0 : et.errorMap
                            },
                            path: (null == et ? void 0 : et.path) || [],
                            schemaErrorMap: this._def.errorMap,
                            parent: null,
                            data: ee,
                            parsedType: nM(ee)
                        },
                        ei = this._parseSync({
                            data: ee,
                            path: er.path,
                            parent: er
                        });
                    return n3(er, ei)
                }
                async parseAsync(ee, et) {
                    let en = await this.safeParseAsync(ee, et);
                    if (en.success) return en.data;
                    throw en.error
                }
                async safeParseAsync(ee, et) {
                    let en = {
                            common: {
                                issues: [],
                                contextualErrorMap: null == et ? void 0 : et.errorMap,
                                async: !0
                            },
                            path: (null == et ? void 0 : et.path) || [],
                            schemaErrorMap: this._def.errorMap,
                            parent: null,
                            data: ee,
                            parsedType: nM(ee)
                        },
                        er = this._parse({
                            data: ee,
                            path: en.path,
                            parent: en
                        }),
                        ei = await (n2(er) ? er : Promise.resolve(er));
                    return n3(en, ei)
                }
                refine(ee, et) {
                    let en = ee => "string" == typeof et || void 0 === et ? {
                        message: et
                    } : "function" == typeof et ? et(ee) : et;
                    return this._refinement((et, er) => {
                        let ei = ee(et),
                            es = () => er.addIssue({
                                code: nz.custom,
                                ...en(et)
                            });
                        return "undefined" != typeof Promise && ei instanceof Promise ? ei.then(ee => !!ee || (es(), !1)) : !!ei || (es(), !1)
                    })
                }
                refinement(ee, et) {
                    return this._refinement((en, er) => !!ee(en) || (er.addIssue("function" == typeof et ? et(en, er) : et), !1))
                }
                _refinement(ee) {
                    return new r$({
                        schema: this,
                        typeName: ew.ZodEffects,
                        effect: {
                            type: "refinement",
                            refinement: ee
                        }
                    })
                }
                superRefine(ee) {
                    return this._refinement(ee)
                }
                optional() {
                    return rU.create(this, this._def)
                }
                nullable() {
                    return rW.create(this, this._def)
                }
                nullish() {
                    return this.nullable().optional()
                }
                array() {
                    return rw.create(this, this._def)
                }
                promise() {
                    return rF.create(this, this._def)
                }
                or(ee) {
                    return rE.create([this, ee], this._def)
                }
                and(ee) {
                    return rN.create(this, ee, this._def)
                }
                transform(ee) {
                    return new r$({ ...n5(this._def),
                        schema: this,
                        typeName: ew.ZodEffects,
                        effect: {
                            type: "transform",
                            transform: ee
                        }
                    })
                }
                default (ee) {
                    let et = "function" == typeof ee ? ee : () => ee;
                    return new rV({ ...n5(this._def),
                        innerType: this,
                        defaultValue: et,
                        typeName: ew.ZodDefault
                    })
                }
                brand() {
                    return new rK({
                        typeName: ew.ZodBranded,
                        type: this,
                        ...n5(this._def)
                    })
                } catch (ee) {
                    let et = "function" == typeof ee ? ee : () => ee;
                    return new rH({ ...n5(this._def),
                        innerType: this,
                        catchValue: et,
                        typeName: ew.ZodCatch
                    })
                }
                describe(ee) {
                    let et = this.constructor;
                    return new et({ ...this._def,
                        description: ee
                    })
                }
                pipe(ee) {
                    return rq.create(this, ee)
                }
                readonly() {
                    return rY.create(this)
                }
                isOptional() {
                    return this.safeParse(void 0).success
                }
                isNullable() {
                    return this.safeParse(null).success
                }
            }
            let n6 = /^c[^\s-]{8,}$/i,
                n9 = /^[a-z][a-z0-9]*$/,
                n7 = /[0-9A-HJKMNP-TV-Z]{26}/,
                rt = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
                rn = /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
                rr = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,
                ri = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
                rs = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
                ro = ee => ee.precision ? ee.offset ? RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${ee.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${ee.precision}}Z$`) : 0 === ee.precision ? ee.offset ? RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : ee.offset ? RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");

            function rl(ee, et) {
                return !!(("v4" === et || !et) && ri.test(ee) || ("v6" === et || !et) && rs.test(ee))
            }
            class ru extends n8 {
                constructor() {
                    super(...arguments), this._regex = (ee, et, en) => this.refinement(et => ee.test(et), {
                        validation: et,
                        code: nz.invalid_string,
                        ...e_.errToObj(en)
                    }), this.nonempty = ee => this.min(1, e_.errToObj(ee)), this.trim = () => new ru({ ...this._def,
                        checks: [...this._def.checks, {
                            kind: "trim"
                        }]
                    }), this.toLowerCase = () => new ru({ ...this._def,
                        checks: [...this._def.checks, {
                            kind: "toLowerCase"
                        }]
                    }), this.toUpperCase = () => new ru({ ...this._def,
                        checks: [...this._def.checks, {
                            kind: "toUpperCase"
                        }]
                    })
                }
                _parse(ee) {
                    let et;
                    this._def.coerce && (ee.data = String(ee.data));
                    let en = this._getType(ee);
                    if (en !== nD.string) {
                        let et = this._getOrReturnCtx(ee);
                        return nK(et, {
                            code: nz.invalid_type,
                            expected: nD.string,
                            received: et.parsedType
                        }), nY
                    }
                    let er = new nq;
                    for (let en of this._def.checks)
                        if ("min" === en.kind) ee.data.length < en.value && (nK(et = this._getOrReturnCtx(ee, et), {
                            code: nz.too_small,
                            minimum: en.value,
                            type: "string",
                            inclusive: !0,
                            exact: !1,
                            message: en.message
                        }), er.dirty());
                        else if ("max" === en.kind) ee.data.length > en.value && (nK(et = this._getOrReturnCtx(ee, et), {
                        code: nz.too_big,
                        maximum: en.value,
                        type: "string",
                        inclusive: !0,
                        exact: !1,
                        message: en.message
                    }), er.dirty());
                    else if ("length" === en.kind) {
                        let ei = ee.data.length > en.value,
                            es = ee.data.length < en.value;
                        (ei || es) && (et = this._getOrReturnCtx(ee, et), ei ? nK(et, {
                            code: nz.too_big,
                            maximum: en.value,
                            type: "string",
                            inclusive: !0,
                            exact: !0,
                            message: en.message
                        }) : es && nK(et, {
                            code: nz.too_small,
                            minimum: en.value,
                            type: "string",
                            inclusive: !0,
                            exact: !0,
                            message: en.message
                        }), er.dirty())
                    } else if ("email" === en.kind) rn.test(ee.data) || (nK(et = this._getOrReturnCtx(ee, et), {
                        validation: "email",
                        code: nz.invalid_string,
                        message: en.message
                    }), er.dirty());
                    else if ("emoji" === en.kind) rr.test(ee.data) || (nK(et = this._getOrReturnCtx(ee, et), {
                        validation: "emoji",
                        code: nz.invalid_string,
                        message: en.message
                    }), er.dirty());
                    else if ("uuid" === en.kind) rt.test(ee.data) || (nK(et = this._getOrReturnCtx(ee, et), {
                        validation: "uuid",
                        code: nz.invalid_string,
                        message: en.message
                    }), er.dirty());
                    else if ("cuid" === en.kind) n6.test(ee.data) || (nK(et = this._getOrReturnCtx(ee, et), {
                        validation: "cuid",
                        code: nz.invalid_string,
                        message: en.message
                    }), er.dirty());
                    else if ("cuid2" === en.kind) n9.test(ee.data) || (nK(et = this._getOrReturnCtx(ee, et), {
                        validation: "cuid2",
                        code: nz.invalid_string,
                        message: en.message
                    }), er.dirty());
                    else if ("ulid" === en.kind) n7.test(ee.data) || (nK(et = this._getOrReturnCtx(ee, et), {
                        validation: "ulid",
                        code: nz.invalid_string,
                        message: en.message
                    }), er.dirty());
                    else if ("url" === en.kind) try {
                        new URL(ee.data)
                    } catch (ei) {
                        nK(et = this._getOrReturnCtx(ee, et), {
                            validation: "url",
                            code: nz.invalid_string,
                            message: en.message
                        }), er.dirty()
                    } else if ("regex" === en.kind) {
                        en.regex.lastIndex = 0;
                        let ei = en.regex.test(ee.data);
                        ei || (nK(et = this._getOrReturnCtx(ee, et), {
                            validation: "regex",
                            code: nz.invalid_string,
                            message: en.message
                        }), er.dirty())
                    } else if ("trim" === en.kind) ee.data = ee.data.trim();
                    else if ("includes" === en.kind) ee.data.includes(en.value, en.position) || (nK(et = this._getOrReturnCtx(ee, et), {
                        code: nz.invalid_string,
                        validation: {
                            includes: en.value,
                            position: en.position
                        },
                        message: en.message
                    }), er.dirty());
                    else if ("toLowerCase" === en.kind) ee.data = ee.data.toLowerCase();
                    else if ("toUpperCase" === en.kind) ee.data = ee.data.toUpperCase();
                    else if ("startsWith" === en.kind) ee.data.startsWith(en.value) || (nK(et = this._getOrReturnCtx(ee, et), {
                        code: nz.invalid_string,
                        validation: {
                            startsWith: en.value
                        },
                        message: en.message
                    }), er.dirty());
                    else if ("endsWith" === en.kind) ee.data.endsWith(en.value) || (nK(et = this._getOrReturnCtx(ee, et), {
                        code: nz.invalid_string,
                        validation: {
                            endsWith: en.value
                        },
                        message: en.message
                    }), er.dirty());
                    else if ("datetime" === en.kind) {
                        let ei = ro(en);
                        ei.test(ee.data) || (nK(et = this._getOrReturnCtx(ee, et), {
                            code: nz.invalid_string,
                            validation: "datetime",
                            message: en.message
                        }), er.dirty())
                    } else "ip" === en.kind ? rl(ee.data, en.version) || (nK(et = this._getOrReturnCtx(ee, et), {
                        validation: "ip",
                        code: nz.invalid_string,
                        message: en.message
                    }), er.dirty()) : ey.assertNever(en);
                    return {
                        status: er.value,
                        value: ee.data
                    }
                }
                _addCheck(ee) {
                    return new ru({ ...this._def,
                        checks: [...this._def.checks, ee]
                    })
                }
                email(ee) {
                    return this._addCheck({
                        kind: "email",
                        ...e_.errToObj(ee)
                    })
                }
                url(ee) {
                    return this._addCheck({
                        kind: "url",
                        ...e_.errToObj(ee)
                    })
                }
                emoji(ee) {
                    return this._addCheck({
                        kind: "emoji",
                        ...e_.errToObj(ee)
                    })
                }
                uuid(ee) {
                    return this._addCheck({
                        kind: "uuid",
                        ...e_.errToObj(ee)
                    })
                }
                cuid(ee) {
                    return this._addCheck({
                        kind: "cuid",
                        ...e_.errToObj(ee)
                    })
                }
                cuid2(ee) {
                    return this._addCheck({
                        kind: "cuid2",
                        ...e_.errToObj(ee)
                    })
                }
                ulid(ee) {
                    return this._addCheck({
                        kind: "ulid",
                        ...e_.errToObj(ee)
                    })
                }
                ip(ee) {
                    return this._addCheck({
                        kind: "ip",
                        ...e_.errToObj(ee)
                    })
                }
                datetime(ee) {
                    var et;
                    return "string" == typeof ee ? this._addCheck({
                        kind: "datetime",
                        precision: null,
                        offset: !1,
                        message: ee
                    }) : this._addCheck({
                        kind: "datetime",
                        precision: void 0 === (null == ee ? void 0 : ee.precision) ? null : null == ee ? void 0 : ee.precision,
                        offset: null !== (et = null == ee ? void 0 : ee.offset) && void 0 !== et && et,
                        ...e_.errToObj(null == ee ? void 0 : ee.message)
                    })
                }
                regex(ee, et) {
                    return this._addCheck({
                        kind: "regex",
                        regex: ee,
                        ...e_.errToObj(et)
                    })
                }
                includes(ee, et) {
                    return this._addCheck({
                        kind: "includes",
                        value: ee,
                        position: null == et ? void 0 : et.position,
                        ...e_.errToObj(null == et ? void 0 : et.message)
                    })
                }
                startsWith(ee, et) {
                    return this._addCheck({
                        kind: "startsWith",
                        value: ee,
                        ...e_.errToObj(et)
                    })
                }
                endsWith(ee, et) {
                    return this._addCheck({
                        kind: "endsWith",
                        value: ee,
                        ...e_.errToObj(et)
                    })
                }
                min(ee, et) {
                    return this._addCheck({
                        kind: "min",
                        value: ee,
                        ...e_.errToObj(et)
                    })
                }
                max(ee, et) {
                    return this._addCheck({
                        kind: "max",
                        value: ee,
                        ...e_.errToObj(et)
                    })
                }
                length(ee, et) {
                    return this._addCheck({
                        kind: "length",
                        value: ee,
                        ...e_.errToObj(et)
                    })
                }
                get isDatetime() {
                    return !!this._def.checks.find(ee => "datetime" === ee.kind)
                }
                get isEmail() {
                    return !!this._def.checks.find(ee => "email" === ee.kind)
                }
                get isURL() {
                    return !!this._def.checks.find(ee => "url" === ee.kind)
                }
                get isEmoji() {
                    return !!this._def.checks.find(ee => "emoji" === ee.kind)
                }
                get isUUID() {
                    return !!this._def.checks.find(ee => "uuid" === ee.kind)
                }
                get isCUID() {
                    return !!this._def.checks.find(ee => "cuid" === ee.kind)
                }
                get isCUID2() {
                    return !!this._def.checks.find(ee => "cuid2" === ee.kind)
                }
                get isULID() {
                    return !!this._def.checks.find(ee => "ulid" === ee.kind)
                }
                get isIP() {
                    return !!this._def.checks.find(ee => "ip" === ee.kind)
                }
                get minLength() {
                    let ee = null;
                    for (let et of this._def.checks) "min" === et.kind && (null === ee || et.value > ee) && (ee = et.value);
                    return ee
                }
                get maxLength() {
                    let ee = null;
                    for (let et of this._def.checks) "max" === et.kind && (null === ee || et.value < ee) && (ee = et.value);
                    return ee
                }
            }

            function rc(ee, et) {
                let en = (ee.toString().split(".")[1] || "").length,
                    er = (et.toString().split(".")[1] || "").length,
                    ei = en > er ? en : er,
                    es = parseInt(ee.toFixed(ei).replace(".", "")),
                    eo = parseInt(et.toFixed(ei).replace(".", ""));
                return es % eo / Math.pow(10, ei)
            }
            ru.create = ee => {
                var et;
                return new ru({
                    checks: [],
                    typeName: ew.ZodString,
                    coerce: null !== (et = null == ee ? void 0 : ee.coerce) && void 0 !== et && et,
                    ...n5(ee)
                })
            };
            class rd extends n8 {
                constructor() {
                    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
                }
                _parse(ee) {
                    let et;
                    this._def.coerce && (ee.data = Number(ee.data));
                    let en = this._getType(ee);
                    if (en !== nD.number) {
                        let et = this._getOrReturnCtx(ee);
                        return nK(et, {
                            code: nz.invalid_type,
                            expected: nD.number,
                            received: et.parsedType
                        }), nY
                    }
                    let er = new nq;
                    for (let en of this._def.checks)
                        if ("int" === en.kind) ey.isInteger(ee.data) || (nK(et = this._getOrReturnCtx(ee, et), {
                            code: nz.invalid_type,
                            expected: "integer",
                            received: "float",
                            message: en.message
                        }), er.dirty());
                        else if ("min" === en.kind) {
                        let ei = en.inclusive ? ee.data < en.value : ee.data <= en.value;
                        ei && (nK(et = this._getOrReturnCtx(ee, et), {
                            code: nz.too_small,
                            minimum: en.value,
                            type: "number",
                            inclusive: en.inclusive,
                            exact: !1,
                            message: en.message
                        }), er.dirty())
                    } else if ("max" === en.kind) {
                        let ei = en.inclusive ? ee.data > en.value : ee.data >= en.value;
                        ei && (nK(et = this._getOrReturnCtx(ee, et), {
                            code: nz.too_big,
                            maximum: en.value,
                            type: "number",
                            inclusive: en.inclusive,
                            exact: !1,
                            message: en.message
                        }), er.dirty())
                    } else "multipleOf" === en.kind ? 0 !== rc(ee.data, en.value) && (nK(et = this._getOrReturnCtx(ee, et), {
                        code: nz.not_multiple_of,
                        multipleOf: en.value,
                        message: en.message
                    }), er.dirty()) : "finite" === en.kind ? Number.isFinite(ee.data) || (nK(et = this._getOrReturnCtx(ee, et), {
                        code: nz.not_finite,
                        message: en.message
                    }), er.dirty()) : ey.assertNever(en);
                    return {
                        status: er.value,
                        value: ee.data
                    }
                }
                gte(ee, et) {
                    return this.setLimit("min", ee, !0, e_.toString(et))
                }
                gt(ee, et) {
                    return this.setLimit("min", ee, !1, e_.toString(et))
                }
                lte(ee, et) {
                    return this.setLimit("max", ee, !0, e_.toString(et))
                }
                lt(ee, et) {
                    return this.setLimit("max", ee, !1, e_.toString(et))
                }
                setLimit(ee, et, en, er) {
                    return new rd({ ...this._def,
                        checks: [...this._def.checks, {
                            kind: ee,
                            value: et,
                            inclusive: en,
                            message: e_.toString(er)
                        }]
                    })
                }
                _addCheck(ee) {
                    return new rd({ ...this._def,
                        checks: [...this._def.checks, ee]
                    })
                }
                int(ee) {
                    return this._addCheck({
                        kind: "int",
                        message: e_.toString(ee)
                    })
                }
                positive(ee) {
                    return this._addCheck({
                        kind: "min",
                        value: 0,
                        inclusive: !1,
                        message: e_.toString(ee)
                    })
                }
                negative(ee) {
                    return this._addCheck({
                        kind: "max",
                        value: 0,
                        inclusive: !1,
                        message: e_.toString(ee)
                    })
                }
                nonpositive(ee) {
                    return this._addCheck({
                        kind: "max",
                        value: 0,
                        inclusive: !0,
                        message: e_.toString(ee)
                    })
                }
                nonnegative(ee) {
                    return this._addCheck({
                        kind: "min",
                        value: 0,
                        inclusive: !0,
                        message: e_.toString(ee)
                    })
                }
                multipleOf(ee, et) {
                    return this._addCheck({
                        kind: "multipleOf",
                        value: ee,
                        message: e_.toString(et)
                    })
                }
                finite(ee) {
                    return this._addCheck({
                        kind: "finite",
                        message: e_.toString(ee)
                    })
                }
                safe(ee) {
                    return this._addCheck({
                        kind: "min",
                        inclusive: !0,
                        value: Number.MIN_SAFE_INTEGER,
                        message: e_.toString(ee)
                    })._addCheck({
                        kind: "max",
                        inclusive: !0,
                        value: Number.MAX_SAFE_INTEGER,
                        message: e_.toString(ee)
                    })
                }
                get minValue() {
                    let ee = null;
                    for (let et of this._def.checks) "min" === et.kind && (null === ee || et.value > ee) && (ee = et.value);
                    return ee
                }
                get maxValue() {
                    let ee = null;
                    for (let et of this._def.checks) "max" === et.kind && (null === ee || et.value < ee) && (ee = et.value);
                    return ee
                }
                get isInt() {
                    return !!this._def.checks.find(ee => "int" === ee.kind || "multipleOf" === ee.kind && ey.isInteger(ee.value))
                }
                get isFinite() {
                    let ee = null,
                        et = null;
                    for (let en of this._def.checks) {
                        if ("finite" === en.kind || "int" === en.kind || "multipleOf" === en.kind) return !0;
                        "min" === en.kind ? (null === et || en.value > et) && (et = en.value) : "max" === en.kind && (null === ee || en.value < ee) && (ee = en.value)
                    }
                    return Number.isFinite(et) && Number.isFinite(ee)
                }
            }
            rd.create = ee => new rd({
                checks: [],
                typeName: ew.ZodNumber,
                coerce: (null == ee ? void 0 : ee.coerce) || !1,
                ...n5(ee)
            });
            class rp extends n8 {
                constructor() {
                    super(...arguments), this.min = this.gte, this.max = this.lte
                }
                _parse(ee) {
                    let et;
                    this._def.coerce && (ee.data = BigInt(ee.data));
                    let en = this._getType(ee);
                    if (en !== nD.bigint) {
                        let et = this._getOrReturnCtx(ee);
                        return nK(et, {
                            code: nz.invalid_type,
                            expected: nD.bigint,
                            received: et.parsedType
                        }), nY
                    }
                    let er = new nq;
                    for (let en of this._def.checks)
                        if ("min" === en.kind) {
                            let ei = en.inclusive ? ee.data < en.value : ee.data <= en.value;
                            ei && (nK(et = this._getOrReturnCtx(ee, et), {
                                code: nz.too_small,
                                type: "bigint",
                                minimum: en.value,
                                inclusive: en.inclusive,
                                message: en.message
                            }), er.dirty())
                        } else if ("max" === en.kind) {
                        let ei = en.inclusive ? ee.data > en.value : ee.data >= en.value;
                        ei && (nK(et = this._getOrReturnCtx(ee, et), {
                            code: nz.too_big,
                            type: "bigint",
                            maximum: en.value,
                            inclusive: en.inclusive,
                            message: en.message
                        }), er.dirty())
                    } else "multipleOf" === en.kind ? ee.data % en.value !== BigInt(0) && (nK(et = this._getOrReturnCtx(ee, et), {
                        code: nz.not_multiple_of,
                        multipleOf: en.value,
                        message: en.message
                    }), er.dirty()) : ey.assertNever(en);
                    return {
                        status: er.value,
                        value: ee.data
                    }
                }
                gte(ee, et) {
                    return this.setLimit("min", ee, !0, e_.toString(et))
                }
                gt(ee, et) {
                    return this.setLimit("min", ee, !1, e_.toString(et))
                }
                lte(ee, et) {
                    return this.setLimit("max", ee, !0, e_.toString(et))
                }
                lt(ee, et) {
                    return this.setLimit("max", ee, !1, e_.toString(et))
                }
                setLimit(ee, et, en, er) {
                    return new rp({ ...this._def,
                        checks: [...this._def.checks, {
                            kind: ee,
                            value: et,
                            inclusive: en,
                            message: e_.toString(er)
                        }]
                    })
                }
                _addCheck(ee) {
                    return new rp({ ...this._def,
                        checks: [...this._def.checks, ee]
                    })
                }
                positive(ee) {
                    return this._addCheck({
                        kind: "min",
                        value: BigInt(0),
                        inclusive: !1,
                        message: e_.toString(ee)
                    })
                }
                negative(ee) {
                    return this._addCheck({
                        kind: "max",
                        value: BigInt(0),
                        inclusive: !1,
                        message: e_.toString(ee)
                    })
                }
                nonpositive(ee) {
                    return this._addCheck({
                        kind: "max",
                        value: BigInt(0),
                        inclusive: !0,
                        message: e_.toString(ee)
                    })
                }
                nonnegative(ee) {
                    return this._addCheck({
                        kind: "min",
                        value: BigInt(0),
                        inclusive: !0,
                        message: e_.toString(ee)
                    })
                }
                multipleOf(ee, et) {
                    return this._addCheck({
                        kind: "multipleOf",
                        value: ee,
                        message: e_.toString(et)
                    })
                }
                get minValue() {
                    let ee = null;
                    for (let et of this._def.checks) "min" === et.kind && (null === ee || et.value > ee) && (ee = et.value);
                    return ee
                }
                get maxValue() {
                    let ee = null;
                    for (let et of this._def.checks) "max" === et.kind && (null === ee || et.value < ee) && (ee = et.value);
                    return ee
                }
            }
            rp.create = ee => {
                var et;
                return new rp({
                    checks: [],
                    typeName: ew.ZodBigInt,
                    coerce: null !== (et = null == ee ? void 0 : ee.coerce) && void 0 !== et && et,
                    ...n5(ee)
                })
            };
            class rh extends n8 {
                _parse(ee) {
                    this._def.coerce && (ee.data = !!ee.data);
                    let et = this._getType(ee);
                    if (et !== nD.boolean) {
                        let et = this._getOrReturnCtx(ee);
                        return nK(et, {
                            code: nz.invalid_type,
                            expected: nD.boolean,
                            received: et.parsedType
                        }), nY
                    }
                    return nJ(ee.data)
                }
            }
            rh.create = ee => new rh({
                typeName: ew.ZodBoolean,
                coerce: (null == ee ? void 0 : ee.coerce) || !1,
                ...n5(ee)
            });
            class rf extends n8 {
                _parse(ee) {
                    let et;
                    this._def.coerce && (ee.data = new Date(ee.data));
                    let en = this._getType(ee);
                    if (en !== nD.date) {
                        let et = this._getOrReturnCtx(ee);
                        return nK(et, {
                            code: nz.invalid_type,
                            expected: nD.date,
                            received: et.parsedType
                        }), nY
                    }
                    if (isNaN(ee.data.getTime())) {
                        let et = this._getOrReturnCtx(ee);
                        return nK(et, {
                            code: nz.invalid_date
                        }), nY
                    }
                    let er = new nq;
                    for (let en of this._def.checks) "min" === en.kind ? ee.data.getTime() < en.value && (nK(et = this._getOrReturnCtx(ee, et), {
                        code: nz.too_small,
                        message: en.message,
                        inclusive: !0,
                        exact: !1,
                        minimum: en.value,
                        type: "date"
                    }), er.dirty()) : "max" === en.kind ? ee.data.getTime() > en.value && (nK(et = this._getOrReturnCtx(ee, et), {
                        code: nz.too_big,
                        message: en.message,
                        inclusive: !0,
                        exact: !1,
                        maximum: en.value,
                        type: "date"
                    }), er.dirty()) : ey.assertNever(en);
                    return {
                        status: er.value,
                        value: new Date(ee.data.getTime())
                    }
                }
                _addCheck(ee) {
                    return new rf({ ...this._def,
                        checks: [...this._def.checks, ee]
                    })
                }
                min(ee, et) {
                    return this._addCheck({
                        kind: "min",
                        value: ee.getTime(),
                        message: e_.toString(et)
                    })
                }
                max(ee, et) {
                    return this._addCheck({
                        kind: "max",
                        value: ee.getTime(),
                        message: e_.toString(et)
                    })
                }
                get minDate() {
                    let ee = null;
                    for (let et of this._def.checks) "min" === et.kind && (null === ee || et.value > ee) && (ee = et.value);
                    return null != ee ? new Date(ee) : null
                }
                get maxDate() {
                    let ee = null;
                    for (let et of this._def.checks) "max" === et.kind && (null === ee || et.value < ee) && (ee = et.value);
                    return null != ee ? new Date(ee) : null
                }
            }
            rf.create = ee => new rf({
                checks: [],
                coerce: (null == ee ? void 0 : ee.coerce) || !1,
                typeName: ew.ZodDate,
                ...n5(ee)
            });
            class rm extends n8 {
                _parse(ee) {
                    let et = this._getType(ee);
                    if (et !== nD.symbol) {
                        let et = this._getOrReturnCtx(ee);
                        return nK(et, {
                            code: nz.invalid_type,
                            expected: nD.symbol,
                            received: et.parsedType
                        }), nY
                    }
                    return nJ(ee.data)
                }
            }
            rm.create = ee => new rm({
                typeName: ew.ZodSymbol,
                ...n5(ee)
            });
            class rx extends n8 {
                _parse(ee) {
                    let et = this._getType(ee);
                    if (et !== nD.undefined) {
                        let et = this._getOrReturnCtx(ee);
                        return nK(et, {
                            code: nz.invalid_type,
                            expected: nD.undefined,
                            received: et.parsedType
                        }), nY
                    }
                    return nJ(ee.data)
                }
            }
            rx.create = ee => new rx({
                typeName: ew.ZodUndefined,
                ...n5(ee)
            });
            class rg extends n8 {
                _parse(ee) {
                    let et = this._getType(ee);
                    if (et !== nD.null) {
                        let et = this._getOrReturnCtx(ee);
                        return nK(et, {
                            code: nz.invalid_type,
                            expected: nD.null,
                            received: et.parsedType
                        }), nY
                    }
                    return nJ(ee.data)
                }
            }
            rg.create = ee => new rg({
                typeName: ew.ZodNull,
                ...n5(ee)
            });
            class rv extends n8 {
                constructor() {
                    super(...arguments), this._any = !0
                }
                _parse(ee) {
                    return nJ(ee.data)
                }
            }
            rv.create = ee => new rv({
                typeName: ew.ZodAny,
                ...n5(ee)
            });
            class ry extends n8 {
                constructor() {
                    super(...arguments), this._unknown = !0
                }
                _parse(ee) {
                    return nJ(ee.data)
                }
            }
            ry.create = ee => new ry({
                typeName: ew.ZodUnknown,
                ...n5(ee)
            });
            class rb extends n8 {
                _parse(ee) {
                    let et = this._getOrReturnCtx(ee);
                    return nK(et, {
                        code: nz.invalid_type,
                        expected: nD.never,
                        received: et.parsedType
                    }), nY
                }
            }
            rb.create = ee => new rb({
                typeName: ew.ZodNever,
                ...n5(ee)
            });
            class r_ extends n8 {
                _parse(ee) {
                    let et = this._getType(ee);
                    if (et !== nD.undefined) {
                        let et = this._getOrReturnCtx(ee);
                        return nK(et, {
                            code: nz.invalid_type,
                            expected: nD.void,
                            received: et.parsedType
                        }), nY
                    }
                    return nJ(ee.data)
                }
            }
            r_.create = ee => new r_({
                typeName: ew.ZodVoid,
                ...n5(ee)
            });
            class rw extends n8 {
                _parse(ee) {
                    let {
                        ctx: et,
                        status: en
                    } = this._processInputParams(ee), er = this._def;
                    if (et.parsedType !== nD.array) return nK(et, {
                        code: nz.invalid_type,
                        expected: nD.array,
                        received: et.parsedType
                    }), nY;
                    if (null !== er.exactLength) {
                        let ee = et.data.length > er.exactLength.value,
                            ei = et.data.length < er.exactLength.value;
                        (ee || ei) && (nK(et, {
                            code: ee ? nz.too_big : nz.too_small,
                            minimum: ei ? er.exactLength.value : void 0,
                            maximum: ee ? er.exactLength.value : void 0,
                            type: "array",
                            inclusive: !0,
                            exact: !0,
                            message: er.exactLength.message
                        }), en.dirty())
                    }
                    if (null !== er.minLength && et.data.length < er.minLength.value && (nK(et, {
                            code: nz.too_small,
                            minimum: er.minLength.value,
                            type: "array",
                            inclusive: !0,
                            exact: !1,
                            message: er.minLength.message
                        }), en.dirty()), null !== er.maxLength && et.data.length > er.maxLength.value && (nK(et, {
                            code: nz.too_big,
                            maximum: er.maxLength.value,
                            type: "array",
                            inclusive: !0,
                            exact: !1,
                            message: er.maxLength.message
                        }), en.dirty()), et.common.async) return Promise.all([...et.data].map((ee, en) => er.type._parseAsync(new n4(et, ee, et.path, en)))).then(ee => nq.mergeArray(en, ee));
                    let ei = [...et.data].map((ee, en) => er.type._parseSync(new n4(et, ee, et.path, en)));
                    return nq.mergeArray(en, ei)
                }
                get element() {
                    return this._def.type
                }
                min(ee, et) {
                    return new rw({ ...this._def,
                        minLength: {
                            value: ee,
                            message: e_.toString(et)
                        }
                    })
                }
                max(ee, et) {
                    return new rw({ ...this._def,
                        maxLength: {
                            value: ee,
                            message: e_.toString(et)
                        }
                    })
                }
                length(ee, et) {
                    return new rw({ ...this._def,
                        exactLength: {
                            value: ee,
                            message: e_.toString(et)
                        }
                    })
                }
                nonempty(ee) {
                    return this.min(1, ee)
                }
            }

            function rk(ee) {
                if (ee instanceof rj) {
                    let et = {};
                    for (let en in ee.shape) {
                        let er = ee.shape[en];
                        et[en] = rU.create(rk(er))
                    }
                    return new rj({ ...ee._def,
                        shape: () => et
                    })
                }
                return ee instanceof rw ? new rw({ ...ee._def,
                    type: rk(ee.element)
                }) : ee instanceof rU ? rU.create(rk(ee.unwrap())) : ee instanceof rW ? rW.create(rk(ee.unwrap())) : ee instanceof rS ? rS.create(ee.items.map(ee => rk(ee))) : ee
            }
            rw.create = (ee, et) => new rw({
                type: ee,
                minLength: null,
                maxLength: null,
                exactLength: null,
                typeName: ew.ZodArray,
                ...n5(et)
            });
            class rj extends n8 {
                constructor() {
                    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
                }
                _getCached() {
                    if (null !== this._cached) return this._cached;
                    let ee = this._def.shape(),
                        et = ey.objectKeys(ee);
                    return this._cached = {
                        shape: ee,
                        keys: et
                    }
                }
                _parse(ee) {
                    let et = this._getType(ee);
                    if (et !== nD.object) {
                        let et = this._getOrReturnCtx(ee);
                        return nK(et, {
                            code: nz.invalid_type,
                            expected: nD.object,
                            received: et.parsedType
                        }), nY
                    }
                    let {
                        status: en,
                        ctx: er
                    } = this._processInputParams(ee), {
                        shape: ei,
                        keys: es
                    } = this._getCached(), eo = [];
                    if (!(this._def.catchall instanceof rb && "strip" === this._def.unknownKeys))
                        for (let ee in er.data) es.includes(ee) || eo.push(ee);
                    let eu = [];
                    for (let ee of es) {
                        let et = ei[ee],
                            en = er.data[ee];
                        eu.push({
                            key: {
                                status: "valid",
                                value: ee
                            },
                            value: et._parse(new n4(er, en, er.path, ee)),
                            alwaysSet: ee in er.data
                        })
                    }
                    if (this._def.catchall instanceof rb) {
                        let ee = this._def.unknownKeys;
                        if ("passthrough" === ee)
                            for (let ee of eo) eu.push({
                                key: {
                                    status: "valid",
                                    value: ee
                                },
                                value: {
                                    status: "valid",
                                    value: er.data[ee]
                                }
                            });
                        else if ("strict" === ee) eo.length > 0 && (nK(er, {
                            code: nz.unrecognized_keys,
                            keys: eo
                        }), en.dirty());
                        else if ("strip" === ee);
                        else throw Error("Internal ZodObject error: invalid unknownKeys value.")
                    } else {
                        let ee = this._def.catchall;
                        for (let et of eo) {
                            let en = er.data[et];
                            eu.push({
                                key: {
                                    status: "valid",
                                    value: et
                                },
                                value: ee._parse(new n4(er, en, er.path, et)),
                                alwaysSet: et in er.data
                            })
                        }
                    }
                    return er.common.async ? Promise.resolve().then(async () => {
                        let ee = [];
                        for (let et of eu) {
                            let en = await et.key;
                            ee.push({
                                key: en,
                                value: await et.value,
                                alwaysSet: et.alwaysSet
                            })
                        }
                        return ee
                    }).then(ee => nq.mergeObjectSync(en, ee)) : nq.mergeObjectSync(en, eu)
                }
                get shape() {
                    return this._def.shape()
                }
                strict(ee) {
                    return e_.errToObj, new rj({ ...this._def,
                        unknownKeys: "strict",
                        ...void 0 !== ee ? {
                            errorMap: (et, en) => {
                                var er, ei, es, eo;
                                let eu = null !== (es = null === (ei = (er = this._def).errorMap) || void 0 === ei ? void 0 : ei.call(er, et, en).message) && void 0 !== es ? es : en.defaultError;
                                return "unrecognized_keys" === et.code ? {
                                    message: null !== (eo = e_.errToObj(ee).message) && void 0 !== eo ? eo : eu
                                } : {
                                    message: eu
                                }
                            }
                        } : {}
                    })
                }
                strip() {
                    return new rj({ ...this._def,
                        unknownKeys: "strip"
                    })
                }
                passthrough() {
                    return new rj({ ...this._def,
                        unknownKeys: "passthrough"
                    })
                }
                extend(ee) {
                    return new rj({ ...this._def,
                        shape: () => ({ ...this._def.shape(),
                            ...ee
                        })
                    })
                }
                merge(ee) {
                    let et = new rj({
                        unknownKeys: ee._def.unknownKeys,
                        catchall: ee._def.catchall,
                        shape: () => ({ ...this._def.shape(),
                            ...ee._def.shape()
                        }),
                        typeName: ew.ZodObject
                    });
                    return et
                }
                setKey(ee, et) {
                    return this.augment({
                        [ee]: et
                    })
                }
                catchall(ee) {
                    return new rj({ ...this._def,
                        catchall: ee
                    })
                }
                pick(ee) {
                    let et = {};
                    return ey.objectKeys(ee).forEach(en => {
                        ee[en] && this.shape[en] && (et[en] = this.shape[en])
                    }), new rj({ ...this._def,
                        shape: () => et
                    })
                }
                omit(ee) {
                    let et = {};
                    return ey.objectKeys(this.shape).forEach(en => {
                        ee[en] || (et[en] = this.shape[en])
                    }), new rj({ ...this._def,
                        shape: () => et
                    })
                }
                deepPartial() {
                    return rk(this)
                }
                partial(ee) {
                    let et = {};
                    return ey.objectKeys(this.shape).forEach(en => {
                        let er = this.shape[en];
                        ee && !ee[en] ? et[en] = er : et[en] = er.optional()
                    }), new rj({ ...this._def,
                        shape: () => et
                    })
                }
                required(ee) {
                    let et = {};
                    return ey.objectKeys(this.shape).forEach(en => {
                        if (ee && !ee[en]) et[en] = this.shape[en];
                        else {
                            let ee = this.shape[en],
                                er = ee;
                            for (; er instanceof rU;) er = er._def.innerType;
                            et[en] = er
                        }
                    }), new rj({ ...this._def,
                        shape: () => et
                    })
                }
                keyof() {
                    return rD(ey.objectKeys(this.shape))
                }
            }
            rj.create = (ee, et) => new rj({
                shape: () => ee,
                unknownKeys: "strip",
                catchall: rb.create(),
                typeName: ew.ZodObject,
                ...n5(et)
            }), rj.strictCreate = (ee, et) => new rj({
                shape: () => ee,
                unknownKeys: "strict",
                catchall: rb.create(),
                typeName: ew.ZodObject,
                ...n5(et)
            }), rj.lazycreate = (ee, et) => new rj({
                shape: ee,
                unknownKeys: "strip",
                catchall: rb.create(),
                typeName: ew.ZodObject,
                ...n5(et)
            });
            class rE extends n8 {
                _parse(ee) {
                    let {
                        ctx: et
                    } = this._processInputParams(ee), en = this._def.options;

                    function er(ee) {
                        for (let et of ee)
                            if ("valid" === et.result.status) return et.result;
                        for (let en of ee)
                            if ("dirty" === en.result.status) return et.common.issues.push(...en.ctx.common.issues), en.result;
                        let en = ee.map(ee => new n$(ee.ctx.common.issues));
                        return nK(et, {
                            code: nz.invalid_union,
                            unionErrors: en
                        }), nY
                    }
                    if (et.common.async) return Promise.all(en.map(async ee => {
                        let en = { ...et,
                            common: { ...et.common,
                                issues: []
                            },
                            parent: null
                        };
                        return {
                            result: await ee._parseAsync({
                                data: et.data,
                                path: et.path,
                                parent: en
                            }),
                            ctx: en
                        }
                    })).then(er); {
                        let ee;
                        let er = [];
                        for (let ei of en) {
                            let en = { ...et,
                                    common: { ...et.common,
                                        issues: []
                                    },
                                    parent: null
                                },
                                es = ei._parseSync({
                                    data: et.data,
                                    path: et.path,
                                    parent: en
                                });
                            if ("valid" === es.status) return es;
                            "dirty" !== es.status || ee || (ee = {
                                result: es,
                                ctx: en
                            }), en.common.issues.length && er.push(en.common.issues)
                        }
                        if (ee) return et.common.issues.push(...ee.ctx.common.issues), ee.result;
                        let ei = er.map(ee => new n$(ee));
                        return nK(et, {
                            code: nz.invalid_union,
                            unionErrors: ei
                        }), nY
                    }
                }
                get options() {
                    return this._def.options
                }
            }
            rE.create = (ee, et) => new rE({
                options: ee,
                typeName: ew.ZodUnion,
                ...n5(et)
            });
            let rT = ee => {
                if (ee instanceof rZ) return rT(ee.schema);
                if (ee instanceof r$) return rT(ee.innerType());
                if (ee instanceof rL) return [ee.value];
                if (ee instanceof rM) return ee.options;
                if (ee instanceof rz) return Object.keys(ee.enum);
                if (ee instanceof rV) return rT(ee._def.innerType);
                if (ee instanceof rx) return [void 0];
                else if (ee instanceof rg) return [null];
                else return null
            };
            class rO extends n8 {
                _parse(ee) {
                    let {
                        ctx: et
                    } = this._processInputParams(ee);
                    if (et.parsedType !== nD.object) return nK(et, {
                        code: nz.invalid_type,
                        expected: nD.object,
                        received: et.parsedType
                    }), nY;
                    let en = this.discriminator,
                        er = et.data[en],
                        ei = this.optionsMap.get(er);
                    return ei ? et.common.async ? ei._parseAsync({
                        data: et.data,
                        path: et.path,
                        parent: et
                    }) : ei._parseSync({
                        data: et.data,
                        path: et.path,
                        parent: et
                    }) : (nK(et, {
                        code: nz.invalid_union_discriminator,
                        options: Array.from(this.optionsMap.keys()),
                        path: [en]
                    }), nY)
                }
                get discriminator() {
                    return this._def.discriminator
                }
                get options() {
                    return this._def.options
                }
                get optionsMap() {
                    return this._def.optionsMap
                }
                static create(ee, et, en) {
                    let er = new Map;
                    for (let en of et) {
                        let et = rT(en.shape[ee]);
                        if (!et) throw Error(`A discriminator value for key \`${ee}\` could not be extracted from all schema options`);
                        for (let ei of et) {
                            if (er.has(ei)) throw Error(`Discriminator property ${String(ee)} has duplicate value ${String(ei)}`);
                            er.set(ei, en)
                        }
                    }
                    return new rO({
                        typeName: ew.ZodDiscriminatedUnion,
                        discriminator: ee,
                        options: et,
                        optionsMap: er,
                        ...n5(en)
                    })
                }
            }

            function rC(ee, et) {
                let en = nM(ee),
                    er = nM(et);
                if (ee === et) return {
                    valid: !0,
                    data: ee
                };
                if (en === nD.object && er === nD.object) {
                    let en = ey.objectKeys(et),
                        er = ey.objectKeys(ee).filter(ee => -1 !== en.indexOf(ee)),
                        ei = { ...ee,
                            ...et
                        };
                    for (let en of er) {
                        let er = rC(ee[en], et[en]);
                        if (!er.valid) return {
                            valid: !1
                        };
                        ei[en] = er.data
                    }
                    return {
                        valid: !0,
                        data: ei
                    }
                }
                if (en === nD.array && er === nD.array) {
                    if (ee.length !== et.length) return {
                        valid: !1
                    };
                    let en = [];
                    for (let er = 0; er < ee.length; er++) {
                        let ei = ee[er],
                            es = et[er],
                            eo = rC(ei, es);
                        if (!eo.valid) return {
                            valid: !1
                        };
                        en.push(eo.data)
                    }
                    return {
                        valid: !0,
                        data: en
                    }
                }
                return en === nD.date && er === nD.date && +ee == +et ? {
                    valid: !0,
                    data: ee
                } : {
                    valid: !1
                }
            }
            class rN extends n8 {
                _parse(ee) {
                    let {
                        status: et,
                        ctx: en
                    } = this._processInputParams(ee), er = (ee, er) => {
                        if (nX(ee) || nX(er)) return nY;
                        let ei = rC(ee.value, er.value);
                        return ei.valid ? ((n0(ee) || n0(er)) && et.dirty(), {
                            status: et.value,
                            value: ei.data
                        }) : (nK(en, {
                            code: nz.invalid_intersection_types
                        }), nY)
                    };
                    return en.common.async ? Promise.all([this._def.left._parseAsync({
                        data: en.data,
                        path: en.path,
                        parent: en
                    }), this._def.right._parseAsync({
                        data: en.data,
                        path: en.path,
                        parent: en
                    })]).then(([ee, et]) => er(ee, et)) : er(this._def.left._parseSync({
                        data: en.data,
                        path: en.path,
                        parent: en
                    }), this._def.right._parseSync({
                        data: en.data,
                        path: en.path,
                        parent: en
                    }))
                }
            }
            rN.create = (ee, et, en) => new rN({
                left: ee,
                right: et,
                typeName: ew.ZodIntersection,
                ...n5(en)
            });
            class rS extends n8 {
                _parse(ee) {
                    let {
                        status: et,
                        ctx: en
                    } = this._processInputParams(ee);
                    if (en.parsedType !== nD.array) return nK(en, {
                        code: nz.invalid_type,
                        expected: nD.array,
                        received: en.parsedType
                    }), nY;
                    if (en.data.length < this._def.items.length) return nK(en, {
                        code: nz.too_small,
                        minimum: this._def.items.length,
                        inclusive: !0,
                        exact: !1,
                        type: "array"
                    }), nY;
                    let er = this._def.rest;
                    !er && en.data.length > this._def.items.length && (nK(en, {
                        code: nz.too_big,
                        maximum: this._def.items.length,
                        inclusive: !0,
                        exact: !1,
                        type: "array"
                    }), et.dirty());
                    let ei = [...en.data].map((ee, et) => {
                        let er = this._def.items[et] || this._def.rest;
                        return er ? er._parse(new n4(en, ee, en.path, et)) : null
                    }).filter(ee => !!ee);
                    return en.common.async ? Promise.all(ei).then(ee => nq.mergeArray(et, ee)) : nq.mergeArray(et, ei)
                }
                get items() {
                    return this._def.items
                }
                rest(ee) {
                    return new rS({ ...this._def,
                        rest: ee
                    })
                }
            }
            rS.create = (ee, et) => {
                if (!Array.isArray(ee)) throw Error("You must pass an array of schemas to z.tuple([ ... ])");
                return new rS({
                    items: ee,
                    typeName: ew.ZodTuple,
                    rest: null,
                    ...n5(et)
                })
            };
            class rR extends n8 {
                get keySchema() {
                    return this._def.keyType
                }
                get valueSchema() {
                    return this._def.valueType
                }
                _parse(ee) {
                    let {
                        status: et,
                        ctx: en
                    } = this._processInputParams(ee);
                    if (en.parsedType !== nD.object) return nK(en, {
                        code: nz.invalid_type,
                        expected: nD.object,
                        received: en.parsedType
                    }), nY;
                    let er = [],
                        ei = this._def.keyType,
                        es = this._def.valueType;
                    for (let ee in en.data) er.push({
                        key: ei._parse(new n4(en, ee, en.path, ee)),
                        value: es._parse(new n4(en, en.data[ee], en.path, ee))
                    });
                    return en.common.async ? nq.mergeObjectAsync(et, er) : nq.mergeObjectSync(et, er)
                }
                get element() {
                    return this._def.valueType
                }
                static create(ee, et, en) {
                    return new rR(et instanceof n8 ? {
                        keyType: ee,
                        valueType: et,
                        typeName: ew.ZodRecord,
                        ...n5(en)
                    } : {
                        keyType: ru.create(),
                        valueType: ee,
                        typeName: ew.ZodRecord,
                        ...n5(et)
                    })
                }
            }
            class rI extends n8 {
                get keySchema() {
                    return this._def.keyType
                }
                get valueSchema() {
                    return this._def.valueType
                }
                _parse(ee) {
                    let {
                        status: et,
                        ctx: en
                    } = this._processInputParams(ee);
                    if (en.parsedType !== nD.map) return nK(en, {
                        code: nz.invalid_type,
                        expected: nD.map,
                        received: en.parsedType
                    }), nY;
                    let er = this._def.keyType,
                        ei = this._def.valueType,
                        es = [...en.data.entries()].map(([ee, et], es) => ({
                            key: er._parse(new n4(en, ee, en.path, [es, "key"])),
                            value: ei._parse(new n4(en, et, en.path, [es, "value"]))
                        }));
                    if (en.common.async) {
                        let ee = new Map;
                        return Promise.resolve().then(async () => {
                            for (let en of es) {
                                let er = await en.key,
                                    ei = await en.value;
                                if ("aborted" === er.status || "aborted" === ei.status) return nY;
                                ("dirty" === er.status || "dirty" === ei.status) && et.dirty(), ee.set(er.value, ei.value)
                            }
                            return {
                                status: et.value,
                                value: ee
                            }
                        })
                    } {
                        let ee = new Map;
                        for (let en of es) {
                            let er = en.key,
                                ei = en.value;
                            if ("aborted" === er.status || "aborted" === ei.status) return nY;
                            ("dirty" === er.status || "dirty" === ei.status) && et.dirty(), ee.set(er.value, ei.value)
                        }
                        return {
                            status: et.value,
                            value: ee
                        }
                    }
                }
            }
            rI.create = (ee, et, en) => new rI({
                valueType: et,
                keyType: ee,
                typeName: ew.ZodMap,
                ...n5(en)
            });
            class rA extends n8 {
                _parse(ee) {
                    let {
                        status: et,
                        ctx: en
                    } = this._processInputParams(ee);
                    if (en.parsedType !== nD.set) return nK(en, {
                        code: nz.invalid_type,
                        expected: nD.set,
                        received: en.parsedType
                    }), nY;
                    let er = this._def;
                    null !== er.minSize && en.data.size < er.minSize.value && (nK(en, {
                        code: nz.too_small,
                        minimum: er.minSize.value,
                        type: "set",
                        inclusive: !0,
                        exact: !1,
                        message: er.minSize.message
                    }), et.dirty()), null !== er.maxSize && en.data.size > er.maxSize.value && (nK(en, {
                        code: nz.too_big,
                        maximum: er.maxSize.value,
                        type: "set",
                        inclusive: !0,
                        exact: !1,
                        message: er.maxSize.message
                    }), et.dirty());
                    let ei = this._def.valueType;

                    function es(ee) {
                        let en = new Set;
                        for (let er of ee) {
                            if ("aborted" === er.status) return nY;
                            "dirty" === er.status && et.dirty(), en.add(er.value)
                        }
                        return {
                            status: et.value,
                            value: en
                        }
                    }
                    let eo = [...en.data.values()].map((ee, et) => ei._parse(new n4(en, ee, en.path, et)));
                    return en.common.async ? Promise.all(eo).then(ee => es(ee)) : es(eo)
                }
                min(ee, et) {
                    return new rA({ ...this._def,
                        minSize: {
                            value: ee,
                            message: e_.toString(et)
                        }
                    })
                }
                max(ee, et) {
                    return new rA({ ...this._def,
                        maxSize: {
                            value: ee,
                            message: e_.toString(et)
                        }
                    })
                }
                size(ee, et) {
                    return this.min(ee, et).max(ee, et)
                }
                nonempty(ee) {
                    return this.min(1, ee)
                }
            }
            rA.create = (ee, et) => new rA({
                valueType: ee,
                minSize: null,
                maxSize: null,
                typeName: ew.ZodSet,
                ...n5(et)
            });
            class rP extends n8 {
                constructor() {
                    super(...arguments), this.validate = this.implement
                }
                _parse(ee) {
                    let {
                        ctx: et
                    } = this._processInputParams(ee);
                    if (et.parsedType !== nD.function) return nK(et, {
                        code: nz.invalid_type,
                        expected: nD.function,
                        received: et.parsedType
                    }), nY;

                    function en(ee, en) {
                        return nB({
                            data: ee,
                            path: et.path,
                            errorMaps: [et.common.contextualErrorMap, et.schemaErrorMap, nH(), nU].filter(ee => !!ee),
                            issueData: {
                                code: nz.invalid_arguments,
                                argumentsError: en
                            }
                        })
                    }

                    function er(ee, en) {
                        return nB({
                            data: ee,
                            path: et.path,
                            errorMaps: [et.common.contextualErrorMap, et.schemaErrorMap, nH(), nU].filter(ee => !!ee),
                            issueData: {
                                code: nz.invalid_return_type,
                                returnTypeError: en
                            }
                        })
                    }
                    let ei = {
                            errorMap: et.common.contextualErrorMap
                        },
                        es = et.data;
                    if (this._def.returns instanceof rF) {
                        let ee = this;
                        return nJ(async function(...et) {
                            let eo = new n$([]),
                                eu = await ee._def.args.parseAsync(et, ei).catch(ee => {
                                    throw eo.addIssue(en(et, ee)), eo
                                }),
                                ec = await Reflect.apply(es, this, eu),
                                ed = await ee._def.returns._def.type.parseAsync(ec, ei).catch(ee => {
                                    throw eo.addIssue(er(ec, ee)), eo
                                });
                            return ed
                        })
                    } {
                        let ee = this;
                        return nJ(function(...et) {
                            let eo = ee._def.args.safeParse(et, ei);
                            if (!eo.success) throw new n$([en(et, eo.error)]);
                            let eu = Reflect.apply(es, this, eo.data),
                                ec = ee._def.returns.safeParse(eu, ei);
                            if (!ec.success) throw new n$([er(eu, ec.error)]);
                            return ec.data
                        })
                    }
                }
                parameters() {
                    return this._def.args
                }
                returnType() {
                    return this._def.returns
                }
                args(...ee) {
                    return new rP({ ...this._def,
                        args: rS.create(ee).rest(ry.create())
                    })
                }
                returns(ee) {
                    return new rP({ ...this._def,
                        returns: ee
                    })
                }
                implement(ee) {
                    let et = this.parse(ee);
                    return et
                }
                strictImplement(ee) {
                    let et = this.parse(ee);
                    return et
                }
                static create(ee, et, en) {
                    return new rP({
                        args: ee || rS.create([]).rest(ry.create()),
                        returns: et || ry.create(),
                        typeName: ew.ZodFunction,
                        ...n5(en)
                    })
                }
            }
            class rZ extends n8 {
                get schema() {
                    return this._def.getter()
                }
                _parse(ee) {
                    let {
                        ctx: et
                    } = this._processInputParams(ee), en = this._def.getter();
                    return en._parse({
                        data: et.data,
                        path: et.path,
                        parent: et
                    })
                }
            }
            rZ.create = (ee, et) => new rZ({
                getter: ee,
                typeName: ew.ZodLazy,
                ...n5(et)
            });
            class rL extends n8 {
                _parse(ee) {
                    if (ee.data !== this._def.value) {
                        let et = this._getOrReturnCtx(ee);
                        return nK(et, {
                            received: et.data,
                            code: nz.invalid_literal,
                            expected: this._def.value
                        }), nY
                    }
                    return {
                        status: "valid",
                        value: ee.data
                    }
                }
                get value() {
                    return this._def.value
                }
            }

            function rD(ee, et) {
                return new rM({
                    values: ee,
                    typeName: ew.ZodEnum,
                    ...n5(et)
                })
            }
            rL.create = (ee, et) => new rL({
                value: ee,
                typeName: ew.ZodLiteral,
                ...n5(et)
            });
            class rM extends n8 {
                _parse(ee) {
                    if ("string" != typeof ee.data) {
                        let et = this._getOrReturnCtx(ee),
                            en = this._def.values;
                        return nK(et, {
                            expected: ey.joinValues(en),
                            received: et.parsedType,
                            code: nz.invalid_type
                        }), nY
                    }
                    if (-1 === this._def.values.indexOf(ee.data)) {
                        let et = this._getOrReturnCtx(ee),
                            en = this._def.values;
                        return nK(et, {
                            received: et.data,
                            code: nz.invalid_enum_value,
                            options: en
                        }), nY
                    }
                    return nJ(ee.data)
                }
                get options() {
                    return this._def.values
                }
                get enum() {
                    let ee = {};
                    for (let et of this._def.values) ee[et] = et;
                    return ee
                }
                get Values() {
                    let ee = {};
                    for (let et of this._def.values) ee[et] = et;
                    return ee
                }
                get Enum() {
                    let ee = {};
                    for (let et of this._def.values) ee[et] = et;
                    return ee
                }
                extract(ee) {
                    return rM.create(ee)
                }
                exclude(ee) {
                    return rM.create(this.options.filter(et => !ee.includes(et)))
                }
            }
            rM.create = rD;
            class rz extends n8 {
                _parse(ee) {
                    let et = ey.getValidEnumValues(this._def.values),
                        en = this._getOrReturnCtx(ee);
                    if (en.parsedType !== nD.string && en.parsedType !== nD.number) {
                        let ee = ey.objectValues(et);
                        return nK(en, {
                            expected: ey.joinValues(ee),
                            received: en.parsedType,
                            code: nz.invalid_type
                        }), nY
                    }
                    if (-1 === et.indexOf(ee.data)) {
                        let ee = ey.objectValues(et);
                        return nK(en, {
                            received: en.data,
                            code: nz.invalid_enum_value,
                            options: ee
                        }), nY
                    }
                    return nJ(ee.data)
                }
                get enum() {
                    return this._def.values
                }
            }
            rz.create = (ee, et) => new rz({
                values: ee,
                typeName: ew.ZodNativeEnum,
                ...n5(et)
            });
            class rF extends n8 {
                unwrap() {
                    return this._def.type
                }
                _parse(ee) {
                    let {
                        ctx: et
                    } = this._processInputParams(ee);
                    if (et.parsedType !== nD.promise && !1 === et.common.async) return nK(et, {
                        code: nz.invalid_type,
                        expected: nD.promise,
                        received: et.parsedType
                    }), nY;
                    let en = et.parsedType === nD.promise ? et.data : Promise.resolve(et.data);
                    return nJ(en.then(ee => this._def.type.parseAsync(ee, {
                        path: et.path,
                        errorMap: et.common.contextualErrorMap
                    })))
                }
            }
            rF.create = (ee, et) => new rF({
                type: ee,
                typeName: ew.ZodPromise,
                ...n5(et)
            });
            class r$ extends n8 {
                innerType() {
                    return this._def.schema
                }
                sourceType() {
                    return this._def.schema._def.typeName === ew.ZodEffects ? this._def.schema.sourceType() : this._def.schema
                }
                _parse(ee) {
                    let {
                        status: et,
                        ctx: en
                    } = this._processInputParams(ee), er = this._def.effect || null, ei = {
                        addIssue: ee => {
                            nK(en, ee), ee.fatal ? et.abort() : et.dirty()
                        },
                        get path() {
                            return en.path
                        }
                    };
                    if (ei.addIssue = ei.addIssue.bind(ei), "preprocess" === er.type) {
                        let ee = er.transform(en.data, ei);
                        return en.common.issues.length ? {
                            status: "dirty",
                            value: en.data
                        } : en.common.async ? Promise.resolve(ee).then(ee => this._def.schema._parseAsync({
                            data: ee,
                            path: en.path,
                            parent: en
                        })) : this._def.schema._parseSync({
                            data: ee,
                            path: en.path,
                            parent: en
                        })
                    }
                    if ("refinement" === er.type) {
                        let ee = ee => {
                            let et = er.refinement(ee, ei);
                            if (en.common.async) return Promise.resolve(et);
                            if (et instanceof Promise) throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                            return ee
                        };
                        if (!1 !== en.common.async) return this._def.schema._parseAsync({
                            data: en.data,
                            path: en.path,
                            parent: en
                        }).then(en => "aborted" === en.status ? nY : ("dirty" === en.status && et.dirty(), ee(en.value).then(() => ({
                            status: et.value,
                            value: en.value
                        })))); {
                            let er = this._def.schema._parseSync({
                                data: en.data,
                                path: en.path,
                                parent: en
                            });
                            return "aborted" === er.status ? nY : ("dirty" === er.status && et.dirty(), ee(er.value), {
                                status: et.value,
                                value: er.value
                            })
                        }
                    }
                    if ("transform" === er.type) {
                        if (!1 !== en.common.async) return this._def.schema._parseAsync({
                            data: en.data,
                            path: en.path,
                            parent: en
                        }).then(ee => n1(ee) ? Promise.resolve(er.transform(ee.value, ei)).then(ee => ({
                            status: et.value,
                            value: ee
                        })) : ee); {
                            let ee = this._def.schema._parseSync({
                                data: en.data,
                                path: en.path,
                                parent: en
                            });
                            if (!n1(ee)) return ee;
                            let es = er.transform(ee.value, ei);
                            if (es instanceof Promise) throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                            return {
                                status: et.value,
                                value: es
                            }
                        }
                    }
                    ey.assertNever(er)
                }
            }
            r$.create = (ee, et, en) => new r$({
                schema: ee,
                typeName: ew.ZodEffects,
                effect: et,
                ...n5(en)
            }), r$.createWithPreprocess = (ee, et, en) => new r$({
                schema: et,
                effect: {
                    type: "preprocess",
                    transform: ee
                },
                typeName: ew.ZodEffects,
                ...n5(en)
            });
            class rU extends n8 {
                _parse(ee) {
                    let et = this._getType(ee);
                    return et === nD.undefined ? nJ(void 0) : this._def.innerType._parse(ee)
                }
                unwrap() {
                    return this._def.innerType
                }
            }
            rU.create = (ee, et) => new rU({
                innerType: ee,
                typeName: ew.ZodOptional,
                ...n5(et)
            });
            class rW extends n8 {
                _parse(ee) {
                    let et = this._getType(ee);
                    return et === nD.null ? nJ(null) : this._def.innerType._parse(ee)
                }
                unwrap() {
                    return this._def.innerType
                }
            }
            rW.create = (ee, et) => new rW({
                innerType: ee,
                typeName: ew.ZodNullable,
                ...n5(et)
            });
            class rV extends n8 {
                _parse(ee) {
                    let {
                        ctx: et
                    } = this._processInputParams(ee), en = et.data;
                    return et.parsedType === nD.undefined && (en = this._def.defaultValue()), this._def.innerType._parse({
                        data: en,
                        path: et.path,
                        parent: et
                    })
                }
                removeDefault() {
                    return this._def.innerType
                }
            }
            rV.create = (ee, et) => new rV({
                innerType: ee,
                typeName: ew.ZodDefault,
                defaultValue: "function" == typeof et.default ? et.default : () => et.default,
                ...n5(et)
            });
            class rH extends n8 {
                _parse(ee) {
                    let {
                        ctx: et
                    } = this._processInputParams(ee), en = { ...et,
                        common: { ...et.common,
                            issues: []
                        }
                    }, er = this._def.innerType._parse({
                        data: en.data,
                        path: en.path,
                        parent: { ...en
                        }
                    });
                    return n2(er) ? er.then(ee => ({
                        status: "valid",
                        value: "valid" === ee.status ? ee.value : this._def.catchValue({
                            get error() {
                                return new n$(en.common.issues)
                            },
                            input: en.data
                        })
                    })) : {
                        status: "valid",
                        value: "valid" === er.status ? er.value : this._def.catchValue({
                            get error() {
                                return new n$(en.common.issues)
                            },
                            input: en.data
                        })
                    }
                }
                removeCatch() {
                    return this._def.innerType
                }
            }
            rH.create = (ee, et) => new rH({
                innerType: ee,
                typeName: ew.ZodCatch,
                catchValue: "function" == typeof et.catch ? et.catch : () => et.catch,
                ...n5(et)
            });
            class rB extends n8 {
                _parse(ee) {
                    let et = this._getType(ee);
                    if (et !== nD.nan) {
                        let et = this._getOrReturnCtx(ee);
                        return nK(et, {
                            code: nz.invalid_type,
                            expected: nD.nan,
                            received: et.parsedType
                        }), nY
                    }
                    return {
                        status: "valid",
                        value: ee.data
                    }
                }
            }
            rB.create = ee => new rB({
                typeName: ew.ZodNaN,
                ...n5(ee)
            });
            let rG = Symbol("zod_brand");
            class rK extends n8 {
                _parse(ee) {
                    let {
                        ctx: et
                    } = this._processInputParams(ee), en = et.data;
                    return this._def.type._parse({
                        data: en,
                        path: et.path,
                        parent: et
                    })
                }
                unwrap() {
                    return this._def.type
                }
            }
            class rq extends n8 {
                _parse(ee) {
                    let {
                        status: et,
                        ctx: en
                    } = this._processInputParams(ee);
                    if (en.common.async) {
                        let ee = async () => {
                            let ee = await this._def.in._parseAsync({
                                data: en.data,
                                path: en.path,
                                parent: en
                            });
                            return "aborted" === ee.status ? nY : "dirty" === ee.status ? (et.dirty(), nQ(ee.value)) : this._def.out._parseAsync({
                                data: ee.value,
                                path: en.path,
                                parent: en
                            })
                        };
                        return ee()
                    } {
                        let ee = this._def.in._parseSync({
                            data: en.data,
                            path: en.path,
                            parent: en
                        });
                        return "aborted" === ee.status ? nY : "dirty" === ee.status ? (et.dirty(), {
                            status: "dirty",
                            value: ee.value
                        }) : this._def.out._parseSync({
                            data: ee.value,
                            path: en.path,
                            parent: en
                        })
                    }
                }
                static create(ee, et) {
                    return new rq({ in: ee,
                        out: et,
                        typeName: ew.ZodPipeline
                    })
                }
            }
            class rY extends n8 {
                _parse(ee) {
                    let et = this._def.innerType._parse(ee);
                    return n1(et) && (et.value = Object.freeze(et.value)), et
                }
            }
            rY.create = (ee, et) => new rY({
                innerType: ee,
                typeName: ew.ZodReadonly,
                ...n5(et)
            });
            let rQ = (ee, et = {}, en) => ee ? rv.create().superRefine((er, ei) => {
                    var es, eo;
                    if (!ee(er)) {
                        let ee = "function" == typeof et ? et(er) : "string" == typeof et ? {
                                message: et
                            } : et,
                            eu = null === (eo = null !== (es = ee.fatal) && void 0 !== es ? es : en) || void 0 === eo || eo,
                            ec = "string" == typeof ee ? {
                                message: ee
                            } : ee;
                        ei.addIssue({
                            code: "custom",
                            ...ec,
                            fatal: eu
                        })
                    }
                }) : rv.create(),
                rJ = {
                    object: rj.lazycreate
                };
            ! function(ee) {
                ee.ZodString = "ZodString", ee.ZodNumber = "ZodNumber", ee.ZodNaN = "ZodNaN", ee.ZodBigInt = "ZodBigInt", ee.ZodBoolean = "ZodBoolean", ee.ZodDate = "ZodDate", ee.ZodSymbol = "ZodSymbol", ee.ZodUndefined = "ZodUndefined", ee.ZodNull = "ZodNull", ee.ZodAny = "ZodAny", ee.ZodUnknown = "ZodUnknown", ee.ZodNever = "ZodNever", ee.ZodVoid = "ZodVoid", ee.ZodArray = "ZodArray", ee.ZodObject = "ZodObject", ee.ZodUnion = "ZodUnion", ee.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", ee.ZodIntersection = "ZodIntersection", ee.ZodTuple = "ZodTuple", ee.ZodRecord = "ZodRecord", ee.ZodMap = "ZodMap", ee.ZodSet = "ZodSet", ee.ZodFunction = "ZodFunction", ee.ZodLazy = "ZodLazy", ee.ZodLiteral = "ZodLiteral", ee.ZodEnum = "ZodEnum", ee.ZodEffects = "ZodEffects", ee.ZodNativeEnum = "ZodNativeEnum", ee.ZodOptional = "ZodOptional", ee.ZodNullable = "ZodNullable", ee.ZodDefault = "ZodDefault", ee.ZodCatch = "ZodCatch", ee.ZodPromise = "ZodPromise", ee.ZodBranded = "ZodBranded", ee.ZodPipeline = "ZodPipeline", ee.ZodReadonly = "ZodReadonly"
            }(ew || (ew = {}));
            let rX = (ee, et = {
                    message: `Input not instance of ${ee.name}`
                }) => rQ(et => et instanceof ee, et),
                r0 = ru.create,
                r1 = rd.create,
                r2 = rB.create,
                r4 = rp.create,
                r3 = rh.create,
                r5 = rf.create,
                r8 = rm.create,
                r6 = rx.create,
                r9 = rg.create,
                r7 = rv.create,
                at = ry.create,
                an = rb.create,
                ar = r_.create,
                ai = rw.create,
                ao = rj.create,
                al = rj.strictCreate,
                au = rE.create,
                ac = rO.create,
                ad = rN.create,
                ap = rS.create,
                ah = rR.create,
                af = rI.create,
                am = rA.create,
                ax = rP.create,
                ag = rZ.create,
                av = rL.create,
                ay = rM.create,
                ab = rz.create,
                a_ = rF.create,
                aw = r$.create,
                ak = rU.create,
                aj = rW.create,
                aE = r$.createWithPreprocess,
                aT = rq.create,
                aO = () => r0().optional(),
                aC = () => r1().optional(),
                aN = () => r3().optional(),
                aS = {
                    string: ee => ru.create({ ...ee,
                        coerce: !0
                    }),
                    number: ee => rd.create({ ...ee,
                        coerce: !0
                    }),
                    boolean: ee => rh.create({ ...ee,
                        coerce: !0
                    }),
                    bigint: ee => rp.create({ ...ee,
                        coerce: !0
                    }),
                    date: ee => rf.create({ ...ee,
                        coerce: !0
                    })
                },
                aR = nY;
            var aI = Object.freeze({
                    __proto__: null,
                    defaultErrorMap: nU,
                    setErrorMap: nV,
                    getErrorMap: nH,
                    makeIssue: nB,
                    EMPTY_PATH: nG,
                    addIssueToContext: nK,
                    ParseStatus: nq,
                    INVALID: nY,
                    DIRTY: nQ,
                    OK: nJ,
                    isAborted: nX,
                    isDirty: n0,
                    isValid: n1,
                    isAsync: n2,
                    get util() {
                        return ey
                    },
                    get objectUtil() {
                        return eb
                    },
                    ZodParsedType: nD,
                    getParsedType: nM,
                    ZodType: n8,
                    ZodString: ru,
                    ZodNumber: rd,
                    ZodBigInt: rp,
                    ZodBoolean: rh,
                    ZodDate: rf,
                    ZodSymbol: rm,
                    ZodUndefined: rx,
                    ZodNull: rg,
                    ZodAny: rv,
                    ZodUnknown: ry,
                    ZodNever: rb,
                    ZodVoid: r_,
                    ZodArray: rw,
                    ZodObject: rj,
                    ZodUnion: rE,
                    ZodDiscriminatedUnion: rO,
                    ZodIntersection: rN,
                    ZodTuple: rS,
                    ZodRecord: rR,
                    ZodMap: rI,
                    ZodSet: rA,
                    ZodFunction: rP,
                    ZodLazy: rZ,
                    ZodLiteral: rL,
                    ZodEnum: rM,
                    ZodNativeEnum: rz,
                    ZodPromise: rF,
                    ZodEffects: r$,
                    ZodTransformer: r$,
                    ZodOptional: rU,
                    ZodNullable: rW,
                    ZodDefault: rV,
                    ZodCatch: rH,
                    ZodNaN: rB,
                    BRAND: rG,
                    ZodBranded: rK,
                    ZodPipeline: rq,
                    ZodReadonly: rY,
                    custom: rQ,
                    Schema: n8,
                    ZodSchema: n8,
                    late: rJ,
                    get ZodFirstPartyTypeKind() {
                        return ew
                    },
                    coerce: aS,
                    any: r7,
                    array: ai,
                    bigint: r4,
                    boolean: r3,
                    date: r5,
                    discriminatedUnion: ac,
                    effect: aw,
                    enum: ay,
                    function: ax,
                    instanceof: rX,
                    intersection: ad,
                    lazy: ag,
                    literal: av,
                    map: af,
                    nan: r2,
                    nativeEnum: ab,
                    never: an,
                    null: r9,
                    nullable: aj,
                    number: r1,
                    object: ao,
                    oboolean: aN,
                    onumber: aC,
                    optional: ak,
                    ostring: aO,
                    pipeline: aT,
                    preprocess: aE,
                    promise: a_,
                    record: ah,
                    set: am,
                    strictObject: al,
                    string: r0,
                    symbol: r8,
                    transformer: aw,
                    tuple: ap,
                    undefined: r6,
                    union: au,
                    unknown: at,
                    void: ar,
                    NEVER: aR,
                    ZodIssueCode: nz,
                    quotelessJson: nF,
                    ZodError: n$
                }),
                aA = {
                    breadcrumb: !0,
                    collapsed: !1,
                    footer: !1,
                    layout: "default",
                    navbar: !0,
                    pagination: !0,
                    sidebar: !0,
                    timestamp: !0,
                    toc: !0,
                    typesetting: "default"
                },
                aP = aI.strictObject({
                    breadcrumb: aI.boolean(),
                    collapsed: aI.boolean(),
                    footer: aI.boolean(),
                    layout: aI.enum(["default", "full", "raw"]),
                    navbar: aI.boolean(),
                    pagination: aI.boolean(),
                    sidebar: aI.boolean(),
                    timestamp: aI.boolean(),
                    toc: aI.boolean(),
                    typesetting: aI.enum(["default", "article"])
                }),
                aZ = aI.enum(["normal", "hidden", "children"]),
                aL = aI.string(),
                aD = aI.strictObject({
                    href: aI.string(),
                    newWindow: aI.boolean(),
                    title: aL
                }),
                aM = aI.strictObject({
                    display: aZ.optional(),
                    items: aI.record(aD.partial({
                        href: !0,
                        newWindow: !0
                    })),
                    title: aL,
                    type: aI.literal("menu")
                }),
                az = aI.strictObject({
                    title: aL,
                    type: aI.literal("separator")
                }),
                aF = aD.extend({
                    display: aZ,
                    theme: aP,
                    title: aL,
                    type: aI.enum(["page", "doc"])
                }).deepPartial();

            function a$(ee = {}, et) {
                "string" == typeof ee && (ee = {
                    title: ee
                });
                let en = Object.assign({}, et.theme, ee.theme);
                return Object.assign({}, et, ee, {
                    theme: en
                })
            }

            function aU(ee) {
                for (let et of ee) {
                    if (et.route) return et.route;
                    if (et.children) {
                        let ee = aU(et.children);
                        if (ee) return ee
                    }
                }
            }

            function aW({
                list: ee,
                locale: et,
                defaultLocale: en,
                route: er,
                docsRoot: ei = "",
                underCurrentDocsRoot: es = !1,
                pageThemeContext: eo = aA
            }) {
                let eu, ec;
                for (let en of ee)
                    if ("Meta" === en.kind) {
                        if (en.locale === et) {
                            eu = en.data;
                            break
                        }
                        eu || (eu = en.data)
                    }
                let ed = eu || {},
                    ep = Object.keys(ed);
                for (let ee of ep) "string" == typeof ed[ee] && (ed[ee] = {
                    title: ed[ee]
                });
                let eh = [],
                    ef = [],
                    em = [],
                    ex = [],
                    eg = [],
                    ev = 0,
                    ey = eo,
                    eb = [],
                    e_ = -1,
                    ew = ed["*"] || {};
                delete ew.title, delete ew.href;
                let ek = ee.filter(ee => "Meta" !== ee.kind && !ee.name.startsWith("_") && (!("locale" in ee) || !ee.locale || [et, en].includes(ee.locale))).sort((ee, et) => {
                    let en = ep.indexOf(ee.name),
                        er = ep.indexOf(et.name);
                    return -1 === en && -1 === er ? ee.name < et.name ? -1 : 1 : -1 === en ? 1 : -1 === er ? -1 : en - er
                }).flatMap(ee => {
                    let et;
                    let en = [],
                        er = ep.indexOf(ee.name);
                    if (-1 !== er) {
                        for (let ee = e_ + 1; ee < er; ee++) {
                            let et = ep[ee];
                            "*" !== et && en.push({
                                name: et,
                                route: "",
                                ...ed[et]
                            })
                        }
                        e_ = er, et = { ...ed[ee.name],
                            ...ee
                        }
                    }
                    return en.push(et || ee), en
                });
                for (let ee = e_ + 1; ee < ep.length; ee++) {
                    let et = ep[ee];
                    "*" !== et && ek.push({
                        name: et,
                        route: "#",
                        ...ed[et]
                    })
                }
                for (let ee = 0; ee < ek.length; ee++) {
                    let eu = ek[ee];
                    if (ee + 1 < ek.length && eu.name === ek[ee + 1].name) {
                        ek[ee + 1] = { ...ek[ee + 1],
                            withIndexPage: !0
                        }, eu.children && !ek[ee + 1].children && (ek[ee + 1].children = eu.children);
                        continue
                    }
                    let ep = a$(ed[eu.name], ew),
                        {
                            display: e_,
                            type: ej = "doc"
                        } = ep,
                        eE = { ...eo,
                            ...ep.theme
                        },
                        eT = er.startsWith(ei),
                        eO = eu.children && aW({
                            list: eu.children,
                            locale: et,
                            defaultLocale: en,
                            route: er,
                            docsRoot: "page" === ej || "menu" === ej ? eu.route : ei,
                            underCurrentDocsRoot: es || eT,
                            pageThemeContext: eE
                        }),
                        eN = ep.title || "separator" !== ej && eu.name,
                        eS = () => ({ ...eu,
                            type: ej,
                            ...eN && {
                                title: eN
                            },
                            ...e_ && {
                                display: e_
                            },
                            ...eO && {
                                children: []
                            }
                        }),
                        eR = eS(),
                        eI = eS(),
                        eA = eS();
                    if (eI.isUnderCurrentDocsTree = eT, "separator" === ej && (eR.isUnderCurrentDocsTree = eT), eu.route === er) switch (eb = [eR], ec = ej, ey = { ...ey,
                        ...eE
                    }, ej) {
                        case "page":
                        case "menu":
                            ev = eg.length;
                            break;
                        case "doc":
                            ev = ex.length
                    }
                    if (!("hidden" === e_ && "Folder" !== eR.kind || eC.hV.has(eu.route))) {
                        if (eO) {
                            if (void 0 !== eO.activeIndex && void 0 !== eO.activeType) {
                                switch (ey = eO.activeThemeContext, ec = eO.activeType, eb = [eR, ...eO.activePath], ec) {
                                    case "page":
                                    case "menu":
                                        ev = eg.length + eO.activeIndex;
                                        break;
                                    case "doc":
                                        ev = ex.length + eO.activeIndex
                                }
                                eu.withIndexPage && "doc" === ej && ev++
                            }
                            switch (ej) {
                                case "page":
                                case "menu":
                                    eA.children.push(...eO.directories), em.push(...eO.docsDirectories), eO.flatDirectories.length ? (eA.firstChildRoute = aU(eO.flatDirectories), eg.push(eA)) : eA.withIndexPage && eg.push(eA);
                                    break;
                                case "doc":
                                    Array.isArray(eI.children) && eI.children.push(...eO.docsDirectories), eR.withIndexPage && "children" !== e_ && ex.push(eI)
                            }
                            ef.push(...eO.flatDirectories), ex.push(...eO.flatDocsDirectories), Array.isArray(eR.children) && eR.children.push(...eO.directories)
                        } else switch (ef.push(eR), ej) {
                            case "page":
                            case "menu":
                                eg.push(eA);
                                break;
                            case "doc":
                                ex.push(eI)
                        }
                        switch ("doc" === ej && "children" === e_ ? eI.children && (eh.push(...eI.children), em.push(...eI.children)) : eh.push(eR), ej) {
                            case "page":
                            case "menu":
                                em.push(eA);
                                break;
                            case "doc":
                                "children" !== e_ && em.push(eI);
                                break;
                            case "separator":
                                em.push(eR)
                        }
                    }
                }
                return {
                    activeType: ec,
                    activeIndex: ev,
                    activeThemeContext: ey,
                    activePath: eb,
                    directories: eh,
                    flatDirectories: ef,
                    docsDirectories: em,
                    flatDocsDirectories: ex,
                    topLevelNavbarItems: eg
                }
            }
            aI.string().or(aM).or(az).or(aF);
            var aV = en(8505),
                aH = en.n(aV);

            function aB(ee) {
                if (null == ee) return window;
                if ("[object Window]" !== ee.toString()) {
                    var et = ee.ownerDocument;
                    return et && et.defaultView || window
                }
                return ee
            }

            function aG(ee) {
                var et = aB(ee).Element;
                return ee instanceof et || ee instanceof Element
            }

            function aK(ee) {
                var et = aB(ee).HTMLElement;
                return ee instanceof et || ee instanceof HTMLElement
            }

            function aq(ee) {
                if ("undefined" == typeof ShadowRoot) return !1;
                var et = aB(ee).ShadowRoot;
                return ee instanceof et || ee instanceof ShadowRoot
            }
            var aY = Math.max,
                aQ = Math.min,
                aJ = Math.round;

            function aX() {
                var ee = navigator.userAgentData;
                return null != ee && ee.brands ? ee.brands.map(function(ee) {
                    return ee.brand + "/" + ee.version
                }).join(" ") : navigator.userAgent
            }

            function a0() {
                return !/^((?!chrome|android).)*safari/i.test(aX())
            }

            function a1(ee, et, en) {
                void 0 === et && (et = !1), void 0 === en && (en = !1);
                var er = ee.getBoundingClientRect(),
                    ei = 1,
                    es = 1;
                et && aK(ee) && (ei = ee.offsetWidth > 0 && aJ(er.width) / ee.offsetWidth || 1, es = ee.offsetHeight > 0 && aJ(er.height) / ee.offsetHeight || 1);
                var eo = (aG(ee) ? aB(ee) : window).visualViewport,
                    eu = !a0() && en,
                    ec = (er.left + (eu && eo ? eo.offsetLeft : 0)) / ei,
                    ed = (er.top + (eu && eo ? eo.offsetTop : 0)) / es,
                    ep = er.width / ei,
                    eh = er.height / es;
                return {
                    width: ep,
                    height: eh,
                    top: ed,
                    right: ec + ep,
                    bottom: ed + eh,
                    left: ec,
                    x: ec,
                    y: ed
                }
            }

            function a2(ee) {
                var et = aB(ee);
                return {
                    scrollLeft: et.pageXOffset,
                    scrollTop: et.pageYOffset
                }
            }

            function a4(ee) {
                return {
                    scrollLeft: ee.scrollLeft,
                    scrollTop: ee.scrollTop
                }
            }

            function a3(ee) {
                return ee !== aB(ee) && aK(ee) ? a4(ee) : a2(ee)
            }

            function a5(ee) {
                return ee ? (ee.nodeName || "").toLowerCase() : null
            }

            function a8(ee) {
                return ((aG(ee) ? ee.ownerDocument : ee.document) || window.document).documentElement
            }

            function a6(ee) {
                return a1(a8(ee)).left + a2(ee).scrollLeft
            }

            function a9(ee) {
                return aB(ee).getComputedStyle(ee)
            }

            function a7(ee) {
                var et = a9(ee),
                    en = et.overflow,
                    er = et.overflowX,
                    ei = et.overflowY;
                return /auto|scroll|overlay|hidden/.test(en + ei + er)
            }

            function it(ee) {
                var et = ee.getBoundingClientRect(),
                    en = aJ(et.width) / ee.offsetWidth || 1,
                    er = aJ(et.height) / ee.offsetHeight || 1;
                return 1 !== en || 1 !== er
            }

            function ir(ee, et, en) {
                void 0 === en && (en = !1);
                var er = aK(et),
                    ei = aK(et) && it(et),
                    es = a8(et),
                    eo = a1(ee, ei, en),
                    eu = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    ec = {
                        x: 0,
                        y: 0
                    };
                return (er || !er && !en) && (("body" !== a5(et) || a7(es)) && (eu = a3(et)), aK(et) ? (ec = a1(et, !0), ec.x += et.clientLeft, ec.y += et.clientTop) : es && (ec.x = a6(es))), {
                    x: eo.left + eu.scrollLeft - ec.x,
                    y: eo.top + eu.scrollTop - ec.y,
                    width: eo.width,
                    height: eo.height
                }
            }

            function ii(ee) {
                var et = a1(ee),
                    en = ee.offsetWidth,
                    er = ee.offsetHeight;
                return 1 >= Math.abs(et.width - en) && (en = et.width), 1 >= Math.abs(et.height - er) && (er = et.height), {
                    x: ee.offsetLeft,
                    y: ee.offsetTop,
                    width: en,
                    height: er
                }
            }

            function is(ee) {
                return "html" === a5(ee) ? ee : ee.assignedSlot || ee.parentNode || (aq(ee) ? ee.host : null) || a8(ee)
            }

            function io(ee) {
                return ["html", "body", "#document"].indexOf(a5(ee)) >= 0 ? ee.ownerDocument.body : aK(ee) && a7(ee) ? ee : io(is(ee))
            }

            function il(ee, et) {
                void 0 === et && (et = []);
                var en, er = io(ee),
                    ei = er === (null == (en = ee.ownerDocument) ? void 0 : en.body),
                    es = aB(er),
                    eo = ei ? [es].concat(es.visualViewport || [], a7(er) ? er : []) : er,
                    eu = et.concat(eo);
                return ei ? eu : eu.concat(il(is(eo)))
            }

            function iu(ee) {
                return ["table", "td", "th"].indexOf(a5(ee)) >= 0
            }

            function ic(ee) {
                return aK(ee) && "fixed" !== a9(ee).position ? ee.offsetParent : null
            }

            function ih(ee) {
                var et = /firefox/i.test(aX());
                if (/Trident/i.test(aX()) && aK(ee) && "fixed" === a9(ee).position) return null;
                var en = is(ee);
                for (aq(en) && (en = en.host); aK(en) && 0 > ["html", "body"].indexOf(a5(en));) {
                    var er = a9(en);
                    if ("none" !== er.transform || "none" !== er.perspective || "paint" === er.contain || -1 !== ["transform", "perspective"].indexOf(er.willChange) || et && "filter" === er.willChange || et && er.filter && "none" !== er.filter) return en;
                    en = en.parentNode
                }
                return null
            }

            function im(ee) {
                for (var et = aB(ee), en = ic(ee); en && iu(en) && "static" === a9(en).position;) en = ic(en);
                return en && ("html" === a5(en) || "body" === a5(en) && "static" === a9(en).position) ? et : en || ih(ee) || et
            }
            var ix = "top",
                ig = "bottom",
                iv = "right",
                iy = "left",
                ib = "auto",
                i_ = [ix, ig, iv, iy],
                iw = "start",
                ik = "end",
                ij = "clippingParents",
                iE = "viewport",
                iT = "popper",
                iO = "reference",
                iC = i_.reduce(function(ee, et) {
                    return ee.concat([et + "-" + iw, et + "-" + ik])
                }, []),
                iN = [].concat(i_, [ib]).reduce(function(ee, et) {
                    return ee.concat([et, et + "-" + iw, et + "-" + ik])
                }, []),
                iS = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

            function iR(ee) {
                var et = new Map,
                    en = new Set,
                    er = [];

                function ei(ee) {
                    en.add(ee.name), [].concat(ee.requires || [], ee.requiresIfExists || []).forEach(function(ee) {
                        if (!en.has(ee)) {
                            var er = et.get(ee);
                            er && ei(er)
                        }
                    }), er.push(ee)
                }
                return ee.forEach(function(ee) {
                    et.set(ee.name, ee)
                }), ee.forEach(function(ee) {
                    en.has(ee.name) || ei(ee)
                }), er
            }

            function iI(ee) {
                var et = iR(ee);
                return iS.reduce(function(ee, en) {
                    return ee.concat(et.filter(function(ee) {
                        return ee.phase === en
                    }))
                }, [])
            }

            function iA(ee) {
                var et;
                return function() {
                    return et || (et = new Promise(function(en) {
                        Promise.resolve().then(function() {
                            et = void 0, en(ee())
                        })
                    })), et
                }
            }

            function iP(ee) {
                var et = ee.reduce(function(ee, et) {
                    var en = ee[et.name];
                    return ee[et.name] = en ? Object.assign({}, en, et, {
                        options: Object.assign({}, en.options, et.options),
                        data: Object.assign({}, en.data, et.data)
                    }) : et, ee
                }, {});
                return Object.keys(et).map(function(ee) {
                    return et[ee]
                })
            }
            var iZ = {
                placement: "bottom",
                modifiers: [],
                strategy: "absolute"
            };

            function iL() {
                for (var ee = arguments.length, et = Array(ee), en = 0; en < ee; en++) et[en] = arguments[en];
                return !et.some(function(ee) {
                    return !(ee && "function" == typeof ee.getBoundingClientRect)
                })
            }
            var iD = {
                passive: !0
            };

            function iM(ee) {
                return ee.split("-")[0]
            }

            function iz(ee) {
                return ee.split("-")[1]
            }

            function iF(ee) {
                return ["top", "bottom"].indexOf(ee) >= 0 ? "x" : "y"
            }

            function i$(ee) {
                var et, en = ee.reference,
                    er = ee.element,
                    ei = ee.placement,
                    es = ei ? iM(ei) : null,
                    eo = ei ? iz(ei) : null,
                    eu = en.x + en.width / 2 - er.width / 2,
                    ec = en.y + en.height / 2 - er.height / 2;
                switch (es) {
                    case ix:
                        et = {
                            x: eu,
                            y: en.y - er.height
                        };
                        break;
                    case ig:
                        et = {
                            x: eu,
                            y: en.y + en.height
                        };
                        break;
                    case iv:
                        et = {
                            x: en.x + en.width,
                            y: ec
                        };
                        break;
                    case iy:
                        et = {
                            x: en.x - er.width,
                            y: ec
                        };
                        break;
                    default:
                        et = {
                            x: en.x,
                            y: en.y
                        }
                }
                var ed = es ? iF(es) : null;
                if (null != ed) {
                    var ep = "y" === ed ? "height" : "width";
                    switch (eo) {
                        case iw:
                            et[ed] = et[ed] - (en[ep] / 2 - er[ep] / 2);
                            break;
                        case ik:
                            et[ed] = et[ed] + (en[ep] / 2 - er[ep] / 2)
                    }
                }
                return et
            }
            var iU = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            };

            function iW(ee) {
                var et = ee.x,
                    en = ee.y,
                    er = window.devicePixelRatio || 1;
                return {
                    x: aJ(et * er) / er || 0,
                    y: aJ(en * er) / er || 0
                }
            }

            function iV(ee) {
                var et, en, er = ee.popper,
                    ei = ee.popperRect,
                    es = ee.placement,
                    eo = ee.variation,
                    eu = ee.offsets,
                    ec = ee.position,
                    ed = ee.gpuAcceleration,
                    ep = ee.adaptive,
                    eh = ee.roundOffsets,
                    ef = ee.isFixed,
                    em = eu.x,
                    ex = void 0 === em ? 0 : em,
                    eg = eu.y,
                    ev = void 0 === eg ? 0 : eg,
                    ey = "function" == typeof eh ? eh({
                        x: ex,
                        y: ev
                    }) : {
                        x: ex,
                        y: ev
                    };
                ex = ey.x, ev = ey.y;
                var eb = eu.hasOwnProperty("x"),
                    e_ = eu.hasOwnProperty("y"),
                    ew = iy,
                    ek = ix,
                    ej = window;
                if (ep) {
                    var eE = im(er),
                        eT = "clientHeight",
                        eO = "clientWidth";
                    eE === aB(er) && "static" !== a9(eE = a8(er)).position && "absolute" === ec && (eT = "scrollHeight", eO = "scrollWidth"), (es === ix || (es === iy || es === iv) && eo === ik) && (ek = ig, ev -= (ef && eE === ej && ej.visualViewport ? ej.visualViewport.height : eE[eT]) - ei.height, ev *= ed ? 1 : -1), (es === iy || (es === ix || es === ig) && eo === ik) && (ew = iv, ex -= (ef && eE === ej && ej.visualViewport ? ej.visualViewport.width : eE[eO]) - ei.width, ex *= ed ? 1 : -1)
                }
                var eC = Object.assign({
                        position: ec
                    }, ep && iU),
                    eN = !0 === eh ? iW({
                        x: ex,
                        y: ev
                    }) : {
                        x: ex,
                        y: ev
                    };
                return (ex = eN.x, ev = eN.y, ed) ? Object.assign({}, eC, ((en = {})[ek] = e_ ? "0" : "", en[ew] = eb ? "0" : "", en.transform = 1 >= (ej.devicePixelRatio || 1) ? "translate(" + ex + "px, " + ev + "px)" : "translate3d(" + ex + "px, " + ev + "px, 0)", en)) : Object.assign({}, eC, ((et = {})[ek] = e_ ? ev + "px" : "", et[ew] = eb ? ex + "px" : "", et.transform = "", et))
            }

            function iH(ee, et, en) {
                var er = iM(ee),
                    ei = [iy, ix].indexOf(er) >= 0 ? -1 : 1,
                    es = "function" == typeof en ? en(Object.assign({}, et, {
                        placement: ee
                    })) : en,
                    eo = es[0],
                    eu = es[1];
                return eo = eo || 0, eu = (eu || 0) * ei, [iy, iv].indexOf(er) >= 0 ? {
                    x: eu,
                    y: eo
                } : {
                    x: eo,
                    y: eu
                }
            }
            var iB = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };

            function iG(ee) {
                return ee.replace(/left|right|bottom|top/g, function(ee) {
                    return iB[ee]
                })
            }
            var iK = {
                start: "end",
                end: "start"
            };

            function iq(ee) {
                return ee.replace(/start|end/g, function(ee) {
                    return iK[ee]
                })
            }

            function iY(ee, et) {
                var en = aB(ee),
                    er = a8(ee),
                    ei = en.visualViewport,
                    es = er.clientWidth,
                    eo = er.clientHeight,
                    eu = 0,
                    ec = 0;
                if (ei) {
                    es = ei.width, eo = ei.height;
                    var ed = a0();
                    (ed || !ed && "fixed" === et) && (eu = ei.offsetLeft, ec = ei.offsetTop)
                }
                return {
                    width: es,
                    height: eo,
                    x: eu + a6(ee),
                    y: ec
                }
            }

            function iQ(ee) {
                var et, en = a8(ee),
                    er = a2(ee),
                    ei = null == (et = ee.ownerDocument) ? void 0 : et.body,
                    es = aY(en.scrollWidth, en.clientWidth, ei ? ei.scrollWidth : 0, ei ? ei.clientWidth : 0),
                    eo = aY(en.scrollHeight, en.clientHeight, ei ? ei.scrollHeight : 0, ei ? ei.clientHeight : 0),
                    eu = -er.scrollLeft + a6(ee),
                    ec = -er.scrollTop;
                return "rtl" === a9(ei || en).direction && (eu += aY(en.clientWidth, ei ? ei.clientWidth : 0) - es), {
                    width: es,
                    height: eo,
                    x: eu,
                    y: ec
                }
            }

            function iJ(ee, et) {
                var en = et.getRootNode && et.getRootNode();
                if (ee.contains(et)) return !0;
                if (en && aq(en)) {
                    var er = et;
                    do {
                        if (er && ee.isSameNode(er)) return !0;
                        er = er.parentNode || er.host
                    } while (er)
                }
                return !1
            }

            function iX(ee) {
                return Object.assign({}, ee, {
                    left: ee.x,
                    top: ee.y,
                    right: ee.x + ee.width,
                    bottom: ee.y + ee.height
                })
            }

            function i0(ee, et) {
                var en = a1(ee, !1, "fixed" === et);
                return en.top = en.top + ee.clientTop, en.left = en.left + ee.clientLeft, en.bottom = en.top + ee.clientHeight, en.right = en.left + ee.clientWidth, en.width = ee.clientWidth, en.height = ee.clientHeight, en.x = en.left, en.y = en.top, en
            }

            function i1(ee, et, en) {
                return et === iE ? iX(iY(ee, en)) : aG(et) ? i0(et, en) : iX(iQ(a8(ee)))
            }

            function i2(ee) {
                var et = il(is(ee)),
                    en = ["absolute", "fixed"].indexOf(a9(ee).position) >= 0 && aK(ee) ? im(ee) : ee;
                return aG(en) ? et.filter(function(ee) {
                    return aG(ee) && iJ(ee, en) && "body" !== a5(ee)
                }) : []
            }

            function i4(ee, et, en, er) {
                var ei = [].concat("clippingParents" === et ? i2(ee) : [].concat(et), [en]),
                    es = ei[0],
                    eo = ei.reduce(function(et, en) {
                        var ei = i1(ee, en, er);
                        return et.top = aY(ei.top, et.top), et.right = aQ(ei.right, et.right), et.bottom = aQ(ei.bottom, et.bottom), et.left = aY(ei.left, et.left), et
                    }, i1(ee, es, er));
                return eo.width = eo.right - eo.left, eo.height = eo.bottom - eo.top, eo.x = eo.left, eo.y = eo.top, eo
            }

            function i3() {
                return {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            }

            function i5(ee) {
                return Object.assign({}, i3(), ee)
            }

            function i8(ee, et) {
                return et.reduce(function(et, en) {
                    return et[en] = ee, et
                }, {})
            }

            function i6(ee, et) {
                void 0 === et && (et = {});
                var en = et,
                    er = en.placement,
                    ei = void 0 === er ? ee.placement : er,
                    es = en.strategy,
                    eo = void 0 === es ? ee.strategy : es,
                    eu = en.boundary,
                    ec = void 0 === eu ? ij : eu,
                    ed = en.rootBoundary,
                    ep = void 0 === ed ? iE : ed,
                    eh = en.elementContext,
                    ef = void 0 === eh ? iT : eh,
                    em = en.altBoundary,
                    ex = void 0 !== em && em,
                    eg = en.padding,
                    ev = void 0 === eg ? 0 : eg,
                    ey = i5("number" != typeof ev ? ev : i8(ev, i_)),
                    eb = ef === iT ? iO : iT,
                    e_ = ee.rects.popper,
                    ew = ee.elements[ex ? eb : ef],
                    ek = i4(aG(ew) ? ew : ew.contextElement || a8(ee.elements.popper), ec, ep, eo),
                    ej = a1(ee.elements.reference),
                    eE = i$({
                        reference: ej,
                        element: e_,
                        strategy: "absolute",
                        placement: ei
                    }),
                    eT = iX(Object.assign({}, e_, eE)),
                    eO = ef === iT ? eT : ej,
                    eC = {
                        top: ek.top - eO.top + ey.top,
                        bottom: eO.bottom - ek.bottom + ey.bottom,
                        left: ek.left - eO.left + ey.left,
                        right: eO.right - ek.right + ey.right
                    },
                    eN = ee.modifiersData.offset;
                if (ef === iT && eN) {
                    var eS = eN[ei];
                    Object.keys(eC).forEach(function(ee) {
                        var et = [iv, ig].indexOf(ee) >= 0 ? 1 : -1,
                            en = [ix, ig].indexOf(ee) >= 0 ? "y" : "x";
                        eC[ee] += eS[en] * et
                    })
                }
                return eC
            }

            function i9(ee, et) {
                void 0 === et && (et = {});
                var en = et,
                    er = en.placement,
                    ei = en.boundary,
                    es = en.rootBoundary,
                    eo = en.padding,
                    eu = en.flipVariations,
                    ec = en.allowedAutoPlacements,
                    ed = void 0 === ec ? iN : ec,
                    ep = iz(er),
                    eh = ep ? eu ? iC : iC.filter(function(ee) {
                        return iz(ee) === ep
                    }) : i_,
                    ef = eh.filter(function(ee) {
                        return ed.indexOf(ee) >= 0
                    });
                0 === ef.length && (ef = eh);
                var em = ef.reduce(function(et, en) {
                    return et[en] = i6(ee, {
                        placement: en,
                        boundary: ei,
                        rootBoundary: es,
                        padding: eo
                    })[iM(en)], et
                }, {});
                return Object.keys(em).sort(function(ee, et) {
                    return em[ee] - em[et]
                })
            }

            function i7(ee) {
                if (iM(ee) === ib) return [];
                var et = iG(ee);
                return [iq(ee), et, iq(et)]
            }

            function st(ee) {
                return "x" === ee ? "y" : "x"
            }

            function sn(ee, et, en) {
                return aY(ee, aQ(et, en))
            }

            function sr(ee, et, en) {
                var er = sn(ee, et, en);
                return er > en ? en : er
            }
            var si = function(ee, et) {
                return i5("number" != typeof(ee = "function" == typeof ee ? ee(Object.assign({}, et.rects, {
                    placement: et.placement
                })) : ee) ? ee : i8(ee, i_))
            };

            function ss(ee, et, en) {
                return void 0 === en && (en = {
                    x: 0,
                    y: 0
                }), {
                    top: ee.top - et.height - en.y,
                    right: ee.right - et.width + en.x,
                    bottom: ee.bottom - et.height + en.y,
                    left: ee.left - et.width - en.x
                }
            }

            function so(ee) {
                return [ix, iv, ig, iy].some(function(et) {
                    return ee[et] >= 0
                })
            }
            var sl = function(ee) {
                    void 0 === ee && (ee = {});
                    var et = ee,
                        en = et.defaultModifiers,
                        er = void 0 === en ? [] : en,
                        ei = et.defaultOptions,
                        es = void 0 === ei ? iZ : ei;
                    return function(ee, et, en) {
                        void 0 === en && (en = es);
                        var ei = {
                                placement: "bottom",
                                orderedModifiers: [],
                                options: Object.assign({}, iZ, es),
                                modifiersData: {},
                                elements: {
                                    reference: ee,
                                    popper: et
                                },
                                attributes: {},
                                styles: {}
                            },
                            eo = [],
                            eu = !1,
                            ec = {
                                state: ei,
                                setOptions: function(en) {
                                    var eo = "function" == typeof en ? en(ei.options) : en;
                                    ep(), ei.options = Object.assign({}, es, ei.options, eo), ei.scrollParents = {
                                        reference: aG(ee) ? il(ee) : ee.contextElement ? il(ee.contextElement) : [],
                                        popper: il(et)
                                    };
                                    var eu = iI(iP([].concat(er, ei.options.modifiers)));
                                    return ei.orderedModifiers = eu.filter(function(ee) {
                                        return ee.enabled
                                    }), ed(), ec.update()
                                },
                                forceUpdate: function() {
                                    if (!eu) {
                                        var ee = ei.elements,
                                            et = ee.reference,
                                            en = ee.popper;
                                        if (iL(et, en)) {
                                            ei.rects = {
                                                reference: ir(et, im(en), "fixed" === ei.options.strategy),
                                                popper: ii(en)
                                            }, ei.reset = !1, ei.placement = ei.options.placement, ei.orderedModifiers.forEach(function(ee) {
                                                return ei.modifiersData[ee.name] = Object.assign({}, ee.data)
                                            });
                                            for (var er = 0; er < ei.orderedModifiers.length; er++) {
                                                if (!0 === ei.reset) {
                                                    ei.reset = !1, er = -1;
                                                    continue
                                                }
                                                var es = ei.orderedModifiers[er],
                                                    eo = es.fn,
                                                    ed = es.options,
                                                    ep = void 0 === ed ? {} : ed,
                                                    eh = es.name;
                                                "function" == typeof eo && (ei = eo({
                                                    state: ei,
                                                    options: ep,
                                                    name: eh,
                                                    instance: ec
                                                }) || ei)
                                            }
                                        }
                                    }
                                },
                                update: iA(function() {
                                    return new Promise(function(ee) {
                                        ec.forceUpdate(), ee(ei)
                                    })
                                }),
                                destroy: function() {
                                    ep(), eu = !0
                                }
                            };
                        if (!iL(ee, et)) return ec;

                        function ed() {
                            ei.orderedModifiers.forEach(function(ee) {
                                var et = ee.name,
                                    en = ee.options,
                                    er = void 0 === en ? {} : en,
                                    es = ee.effect;
                                if ("function" == typeof es) {
                                    var eu = es({
                                            state: ei,
                                            name: et,
                                            instance: ec,
                                            options: er
                                        }),
                                        ed = function() {};
                                    eo.push(eu || ed)
                                }
                            })
                        }

                        function ep() {
                            eo.forEach(function(ee) {
                                return ee()
                            }), eo = []
                        }
                        return ec.setOptions(en).then(function(ee) {
                            !eu && en.onFirstUpdate && en.onFirstUpdate(ee)
                        }), ec
                    }
                }({
                    defaultModifiers: [{
                        name: "eventListeners",
                        enabled: !0,
                        phase: "write",
                        fn: function() {},
                        effect: function(ee) {
                            var et = ee.state,
                                en = ee.instance,
                                er = ee.options,
                                ei = er.scroll,
                                es = void 0 === ei || ei,
                                eo = er.resize,
                                eu = void 0 === eo || eo,
                                ec = aB(et.elements.popper),
                                ed = [].concat(et.scrollParents.reference, et.scrollParents.popper);
                            return es && ed.forEach(function(ee) {
                                    ee.addEventListener("scroll", en.update, iD)
                                }), eu && ec.addEventListener("resize", en.update, iD),
                                function() {
                                    es && ed.forEach(function(ee) {
                                        ee.removeEventListener("scroll", en.update, iD)
                                    }), eu && ec.removeEventListener("resize", en.update, iD)
                                }
                        },
                        data: {}
                    }, {
                        name: "popperOffsets",
                        enabled: !0,
                        phase: "read",
                        fn: function(ee) {
                            var et = ee.state,
                                en = ee.name;
                            et.modifiersData[en] = i$({
                                reference: et.rects.reference,
                                element: et.rects.popper,
                                strategy: "absolute",
                                placement: et.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "computeStyles",
                        enabled: !0,
                        phase: "beforeWrite",
                        fn: function(ee) {
                            var et = ee.state,
                                en = ee.options,
                                er = en.gpuAcceleration,
                                ei = void 0 === er || er,
                                es = en.adaptive,
                                eo = void 0 === es || es,
                                eu = en.roundOffsets,
                                ec = void 0 === eu || eu,
                                ed = {
                                    placement: iM(et.placement),
                                    variation: iz(et.placement),
                                    popper: et.elements.popper,
                                    popperRect: et.rects.popper,
                                    gpuAcceleration: ei,
                                    isFixed: "fixed" === et.options.strategy
                                };
                            null != et.modifiersData.popperOffsets && (et.styles.popper = Object.assign({}, et.styles.popper, iV(Object.assign({}, ed, {
                                offsets: et.modifiersData.popperOffsets,
                                position: et.options.strategy,
                                adaptive: eo,
                                roundOffsets: ec
                            })))), null != et.modifiersData.arrow && (et.styles.arrow = Object.assign({}, et.styles.arrow, iV(Object.assign({}, ed, {
                                offsets: et.modifiersData.arrow,
                                position: "absolute",
                                adaptive: !1,
                                roundOffsets: ec
                            })))), et.attributes.popper = Object.assign({}, et.attributes.popper, {
                                "data-popper-placement": et.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "applyStyles",
                        enabled: !0,
                        phase: "write",
                        fn: function(ee) {
                            var et = ee.state;
                            Object.keys(et.elements).forEach(function(ee) {
                                var en = et.styles[ee] || {},
                                    er = et.attributes[ee] || {},
                                    ei = et.elements[ee];
                                aK(ei) && a5(ei) && (Object.assign(ei.style, en), Object.keys(er).forEach(function(ee) {
                                    var et = er[ee];
                                    !1 === et ? ei.removeAttribute(ee) : ei.setAttribute(ee, !0 === et ? "" : et)
                                }))
                            })
                        },
                        effect: function(ee) {
                            var et = ee.state,
                                en = {
                                    popper: {
                                        position: et.options.strategy,
                                        left: "0",
                                        top: "0",
                                        margin: "0"
                                    },
                                    arrow: {
                                        position: "absolute"
                                    },
                                    reference: {}
                                };
                            return Object.assign(et.elements.popper.style, en.popper), et.styles = en, et.elements.arrow && Object.assign(et.elements.arrow.style, en.arrow),
                                function() {
                                    Object.keys(et.elements).forEach(function(ee) {
                                        var er = et.elements[ee],
                                            ei = et.attributes[ee] || {},
                                            es = Object.keys(et.styles.hasOwnProperty(ee) ? et.styles[ee] : en[ee]).reduce(function(ee, et) {
                                                return ee[et] = "", ee
                                            }, {});
                                        aK(er) && a5(er) && (Object.assign(er.style, es), Object.keys(ei).forEach(function(ee) {
                                            er.removeAttribute(ee)
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
                        fn: function(ee) {
                            var et = ee.state,
                                en = ee.options,
                                er = ee.name,
                                ei = en.offset,
                                es = void 0 === ei ? [0, 0] : ei,
                                eo = iN.reduce(function(ee, en) {
                                    return ee[en] = iH(en, et.rects, es), ee
                                }, {}),
                                eu = eo[et.placement],
                                ec = eu.x,
                                ed = eu.y;
                            null != et.modifiersData.popperOffsets && (et.modifiersData.popperOffsets.x += ec, et.modifiersData.popperOffsets.y += ed), et.modifiersData[er] = eo
                        }
                    }, {
                        name: "flip",
                        enabled: !0,
                        phase: "main",
                        fn: function(ee) {
                            var et = ee.state,
                                en = ee.options,
                                er = ee.name;
                            if (!et.modifiersData[er]._skip) {
                                for (var ei = en.mainAxis, es = void 0 === ei || ei, eo = en.altAxis, eu = void 0 === eo || eo, ec = en.fallbackPlacements, ed = en.padding, ep = en.boundary, eh = en.rootBoundary, ef = en.altBoundary, em = en.flipVariations, ex = void 0 === em || em, eg = en.allowedAutoPlacements, ev = et.options.placement, ey = iM(ev) === ev, eb = ec || (ey || !ex ? [iG(ev)] : i7(ev)), e_ = [ev].concat(eb).reduce(function(ee, en) {
                                        return ee.concat(iM(en) === ib ? i9(et, {
                                            placement: en,
                                            boundary: ep,
                                            rootBoundary: eh,
                                            padding: ed,
                                            flipVariations: ex,
                                            allowedAutoPlacements: eg
                                        }) : en)
                                    }, []), ew = et.rects.reference, ek = et.rects.popper, ej = new Map, eE = !0, eT = e_[0], eO = 0; eO < e_.length; eO++) {
                                    var eC = e_[eO],
                                        eN = iM(eC),
                                        eS = iz(eC) === iw,
                                        eR = [ix, ig].indexOf(eN) >= 0,
                                        eI = eR ? "width" : "height",
                                        eA = i6(et, {
                                            placement: eC,
                                            boundary: ep,
                                            rootBoundary: eh,
                                            altBoundary: ef,
                                            padding: ed
                                        }),
                                        eP = eR ? eS ? iv : iy : eS ? ig : ix;
                                    ew[eI] > ek[eI] && (eP = iG(eP));
                                    var eZ = iG(eP),
                                        eL = [];
                                    if (es && eL.push(eA[eN] <= 0), eu && eL.push(eA[eP] <= 0, eA[eZ] <= 0), eL.every(function(ee) {
                                            return ee
                                        })) {
                                        eT = eC, eE = !1;
                                        break
                                    }
                                    ej.set(eC, eL)
                                }
                                if (eE)
                                    for (var eD = ex ? 3 : 1, eM = function(ee) {
                                            var et = e_.find(function(et) {
                                                var en = ej.get(et);
                                                if (en) return en.slice(0, ee).every(function(ee) {
                                                    return ee
                                                })
                                            });
                                            if (et) return eT = et, "break"
                                        }, ez = eD; ez > 0 && "break" !== eM(ez); ez--);
                                et.placement !== eT && (et.modifiersData[er]._skip = !0, et.placement = eT, et.reset = !0)
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
                        fn: function(ee) {
                            var et = ee.state,
                                en = ee.options,
                                er = ee.name,
                                ei = en.mainAxis,
                                es = void 0 === ei || ei,
                                eo = en.altAxis,
                                eu = void 0 !== eo && eo,
                                ec = en.boundary,
                                ed = en.rootBoundary,
                                ep = en.altBoundary,
                                eh = en.padding,
                                ef = en.tether,
                                em = void 0 === ef || ef,
                                ex = en.tetherOffset,
                                eg = void 0 === ex ? 0 : ex,
                                ev = i6(et, {
                                    boundary: ec,
                                    rootBoundary: ed,
                                    padding: eh,
                                    altBoundary: ep
                                }),
                                ey = iM(et.placement),
                                eb = iz(et.placement),
                                e_ = !eb,
                                ew = iF(ey),
                                ek = st(ew),
                                ej = et.modifiersData.popperOffsets,
                                eE = et.rects.reference,
                                eT = et.rects.popper,
                                eO = "function" == typeof eg ? eg(Object.assign({}, et.rects, {
                                    placement: et.placement
                                })) : eg,
                                eC = "number" == typeof eO ? {
                                    mainAxis: eO,
                                    altAxis: eO
                                } : Object.assign({
                                    mainAxis: 0,
                                    altAxis: 0
                                }, eO),
                                eN = et.modifiersData.offset ? et.modifiersData.offset[et.placement] : null,
                                eS = {
                                    x: 0,
                                    y: 0
                                };
                            if (ej) {
                                if (es) {
                                    var eR, eI = "y" === ew ? ix : iy,
                                        eA = "y" === ew ? ig : iv,
                                        eP = "y" === ew ? "height" : "width",
                                        eZ = ej[ew],
                                        eL = eZ + ev[eI],
                                        eD = eZ - ev[eA],
                                        eM = em ? -eT[eP] / 2 : 0,
                                        ez = eb === iw ? eE[eP] : eT[eP],
                                        eF = eb === iw ? -eT[eP] : -eE[eP],
                                        e$ = et.elements.arrow,
                                        eU = em && e$ ? ii(e$) : {
                                            width: 0,
                                            height: 0
                                        },
                                        eW = et.modifiersData["arrow#persistent"] ? et.modifiersData["arrow#persistent"].padding : i3(),
                                        eV = eW[eI],
                                        eH = eW[eA],
                                        eB = sn(0, eE[eP], eU[eP]),
                                        eG = e_ ? eE[eP] / 2 - eM - eB - eV - eC.mainAxis : ez - eB - eV - eC.mainAxis,
                                        eK = e_ ? -eE[eP] / 2 + eM + eB + eH + eC.mainAxis : eF + eB + eH + eC.mainAxis,
                                        eq = et.elements.arrow && im(et.elements.arrow),
                                        eY = eq ? "y" === ew ? eq.clientTop || 0 : eq.clientLeft || 0 : 0,
                                        eQ = null != (eR = null == eN ? void 0 : eN[ew]) ? eR : 0,
                                        eJ = eZ + eG - eQ - eY,
                                        eX = eZ + eK - eQ,
                                        e0 = sn(em ? aQ(eL, eJ) : eL, eZ, em ? aY(eD, eX) : eD);
                                    ej[ew] = e0, eS[ew] = e0 - eZ
                                }
                                if (eu) {
                                    var e1, e2 = "x" === ew ? ix : iy,
                                        e4 = "x" === ew ? ig : iv,
                                        e3 = ej[ek],
                                        e5 = "y" === ek ? "height" : "width",
                                        e8 = e3 + ev[e2],
                                        e6 = e3 - ev[e4],
                                        e9 = -1 !== [ix, iy].indexOf(ey),
                                        e7 = null != (e1 = null == eN ? void 0 : eN[ek]) ? e1 : 0,
                                        te = e9 ? e8 : e3 - eE[e5] - eT[e5] - e7 + eC.altAxis,
                                        tt = e9 ? e3 + eE[e5] + eT[e5] - e7 - eC.altAxis : e6,
                                        tn = em && e9 ? sr(te, e3, tt) : sn(em ? te : e8, e3, em ? tt : e6);
                                    ej[ek] = tn, eS[ek] = tn - e3
                                }
                                et.modifiersData[er] = eS
                            }
                        },
                        requiresIfExists: ["offset"]
                    }, {
                        name: "arrow",
                        enabled: !0,
                        phase: "main",
                        fn: function(ee) {
                            var et, en = ee.state,
                                er = ee.name,
                                ei = ee.options,
                                es = en.elements.arrow,
                                eo = en.modifiersData.popperOffsets,
                                eu = iM(en.placement),
                                ec = iF(eu),
                                ed = [iy, iv].indexOf(eu) >= 0 ? "height" : "width";
                            if (es && eo) {
                                var ep = si(ei.padding, en),
                                    eh = ii(es),
                                    ef = "y" === ec ? ix : iy,
                                    em = "y" === ec ? ig : iv,
                                    ex = en.rects.reference[ed] + en.rects.reference[ec] - eo[ec] - en.rects.popper[ed],
                                    eg = eo[ec] - en.rects.reference[ec],
                                    ev = im(es),
                                    ey = ev ? "y" === ec ? ev.clientHeight || 0 : ev.clientWidth || 0 : 0,
                                    eb = ex / 2 - eg / 2,
                                    e_ = ep[ef],
                                    ew = ey - eh[ed] - ep[em],
                                    ek = ey / 2 - eh[ed] / 2 + eb,
                                    ej = sn(e_, ek, ew),
                                    eE = ec;
                                en.modifiersData[er] = ((et = {})[eE] = ej, et.centerOffset = ej - ek, et)
                            }
                        },
                        effect: function(ee) {
                            var et = ee.state,
                                en = ee.options.element,
                                er = void 0 === en ? "[data-popper-arrow]" : en;
                            null != er && ("string" != typeof er || (er = et.elements.popper.querySelector(er))) && iJ(et.elements.popper, er) && (et.elements.arrow = er)
                        },
                        requires: ["popperOffsets"],
                        requiresIfExists: ["preventOverflow"]
                    }, {
                        name: "hide",
                        enabled: !0,
                        phase: "main",
                        requiresIfExists: ["preventOverflow"],
                        fn: function(ee) {
                            var et = ee.state,
                                en = ee.name,
                                er = et.rects.reference,
                                ei = et.rects.popper,
                                es = et.modifiersData.preventOverflow,
                                eo = i6(et, {
                                    elementContext: "reference"
                                }),
                                eu = i6(et, {
                                    altBoundary: !0
                                }),
                                ec = ss(eo, er),
                                ed = ss(eu, ei, es),
                                ep = so(ec),
                                eh = so(ed);
                            et.modifiersData[en] = {
                                referenceClippingOffsets: ec,
                                popperEscapeOffsets: ed,
                                isReferenceHidden: ep,
                                hasPopperEscaped: eh
                            }, et.attributes.popper = Object.assign({}, et.attributes.popper, {
                                "data-popper-reference-hidden": ep,
                                "data-popper-escaped": eh
                            })
                        }
                    }]
                }),
                su = en(2775),
                sc = en.n(su);

            function sd(ee) {
                if ("string" != typeof ee) throw TypeError("Expected a string");
                return ee.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
            }
            var sp = en(9107);
            let sh = (0, eE.createContext)(null);
            sh.displayName = "OpenClosedContext";
            var sf = ((er = sf || {})[er.Open = 0] = "Open", er[er.Closed = 1] = "Closed", er);

            function sm() {
                return (0, eE.useContext)(sh)
            }

            function sx({
                value: ee,
                children: et
            }) {
                return eE.createElement(sh.Provider, {
                    value: ee
                }, et)
            }
            var sg = en(5761),
                sv = en(1223);

            function sy() {
                let ee = (0, eE.useRef)(!1);
                return (0, sv.e)(() => (ee.current = !0, () => {
                    ee.current = !1
                }), []), ee
            }
            var sb = en(4512),
                s_ = en(1276),
                sw = en(3921);

            function sk(ee) {
                let et = {
                    called: !1
                };
                return (...en) => {
                    if (!et.called) return et.called = !0, ee(...en)
                }
            }
            var sj = en(8961);

            function sE(ee, ...et) {
                ee && et.length > 0 && ee.classList.add(...et)
            }

            function sT(ee, ...et) {
                ee && et.length > 0 && ee.classList.remove(...et)
            }

            function sO(ee, et) {
                let en = (0, sj.k)();
                if (!ee) return en.dispose;
                let {
                    transitionDuration: er,
                    transitionDelay: ei
                } = getComputedStyle(ee), [es, eo] = [er, ei].map(ee => {
                    let [et = 0] = ee.split(",").filter(Boolean).map(ee => ee.includes("ms") ? parseFloat(ee) : 1e3 * parseFloat(ee)).sort((ee, et) => et - ee);
                    return et
                });
                if (es + eo !== 0) {
                    let er = en.addEventListener(ee, "transitionend", ee => {
                        ee.target === ee.currentTarget && (et(), er())
                    })
                } else et();
                return en.add(() => et()), en.dispose
            }

            function sC(ee, et, en, er) {
                let ei = en ? "enter" : "leave",
                    es = (0, sj.k)(),
                    eo = void 0 !== er ? sk(er) : () => {};
                "enter" === ei && (ee.removeAttribute("hidden"), ee.style.display = "");
                let eu = (0, sg.E)(ei, {
                        enter: () => et.enter,
                        leave: () => et.leave
                    }),
                    ec = (0, sg.E)(ei, {
                        enter: () => et.enterTo,
                        leave: () => et.leaveTo
                    }),
                    ed = (0, sg.E)(ei, {
                        enter: () => et.enterFrom,
                        leave: () => et.leaveFrom
                    });
                return sT(ee, ...et.enter, ...et.enterTo, ...et.enterFrom, ...et.leave, ...et.leaveFrom, ...et.leaveTo, ...et.entered), sE(ee, ...eu, ...ed), es.nextFrame(() => {
                    sT(ee, ...ed), sE(ee, ...ec), sO(ee, () => (sT(ee, ...eu), sE(ee, ...et.entered), eo()))
                }), es.dispose
            }

            function sN() {
                let [ee] = (0, eE.useState)(sj.k);
                return (0, eE.useEffect)(() => () => ee.dispose(), [ee]), ee
            }

            function sS({
                container: ee,
                direction: et,
                classes: en,
                onStart: er,
                onStop: ei
            }) {
                let es = sy(),
                    eo = sN(),
                    eu = (0, sb.E)(et);
                (0, sv.e)(() => {
                    let et = (0, sj.k)();
                    eo.add(et.dispose);
                    let ec = ee.current;
                    if (ec && "idle" !== eu.current && es.current) return et.dispose(), er.current(eu.current), et.add(sC(ec, en.current, "enter" === eu.current, () => {
                        et.dispose(), ei.current(eu.current)
                    })), et.dispose
                }, [et])
            }
            var sR = en(7258),
                sI = en(9628),
                sA = en(9195);

            function sP(ee = "") {
                return ee.split(" ").filter(ee => ee.trim().length > 1)
            }
            let sZ = (0, eE.createContext)(null);
            sZ.displayName = "TransitionContext";
            var sL = ((ei = sL || {}).Visible = "visible", ei.Hidden = "hidden", ei);

            function sD() {
                let ee = (0, eE.useContext)(sZ);
                if (null === ee) throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                return ee
            }

            function sM() {
                let ee = (0, eE.useContext)(sz);
                if (null === ee) throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                return ee
            }
            let sz = (0, eE.createContext)(null);

            function sF(ee) {
                return "children" in ee ? sF(ee.children) : ee.current.filter(({
                    el: ee
                }) => null !== ee.current).filter(({
                    state: ee
                }) => "visible" === ee).length > 0
            }

            function s$(ee, et) {
                let en = (0, sb.E)(ee),
                    er = (0, eE.useRef)([]),
                    ei = sy(),
                    es = sN(),
                    eo = (0, sR.z)((ee, et = sp.l4.Hidden) => {
                        let eo = er.current.findIndex(({
                            el: et
                        }) => et === ee); - 1 !== eo && ((0, sg.E)(et, {
                            [sp.l4.Unmount]() {
                                er.current.splice(eo, 1)
                            },
                            [sp.l4.Hidden]() {
                                er.current[eo].state = "hidden"
                            }
                        }), es.microTask(() => {
                            var ee;
                            !sF(er) && ei.current && (null == (ee = en.current) || ee.call(en))
                        }))
                    }),
                    eu = (0, sR.z)(ee => {
                        let et = er.current.find(({
                            el: et
                        }) => et === ee);
                        return et ? "visible" !== et.state && (et.state = "visible") : er.current.push({
                            el: ee,
                            state: "visible"
                        }), () => eo(ee, sp.l4.Unmount)
                    }),
                    ec = (0, eE.useRef)([]),
                    ed = (0, eE.useRef)(Promise.resolve()),
                    ep = (0, eE.useRef)({
                        enter: [],
                        leave: [],
                        idle: []
                    }),
                    eh = (0, sR.z)((ee, en, er) => {
                        ec.current.splice(0), et && (et.chains.current[en] = et.chains.current[en].filter(([et]) => et !== ee)), null == et || et.chains.current[en].push([ee, new Promise(ee => {
                            ec.current.push(ee)
                        })]), null == et || et.chains.current[en].push([ee, new Promise(ee => {
                            Promise.all(ep.current[en].map(([ee, et]) => et)).then(() => ee())
                        })]), "enter" === en ? ed.current = ed.current.then(() => null == et ? void 0 : et.wait.current).then(() => er(en)) : er(en)
                    }),
                    ef = (0, sR.z)((ee, et, en) => {
                        Promise.all(ep.current[et].splice(0).map(([ee, et]) => et)).then(() => {
                            var ee;
                            null == (ee = ec.current.shift()) || ee()
                        }).then(() => en(et))
                    });
                return (0, eE.useMemo)(() => ({
                    children: er,
                    register: eu,
                    unregister: eo,
                    onStart: eh,
                    onStop: ef,
                    wait: ed,
                    chains: ep
                }), [eu, eo, er, eh, ef, ep, ed])
            }

            function sU() {}
            sz.displayName = "NestingContext";
            let sW = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

            function sV(ee) {
                var et;
                let en = {};
                for (let er of sW) en[er] = null != (et = ee[er]) ? et : sU;
                return en
            }

            function sH(ee) {
                let et = (0, eE.useRef)(sV(ee));
                return (0, eE.useEffect)(() => {
                    et.current = sV(ee)
                }, [ee]), et
            }
            let sB = "div",
                sG = sp.AN.RenderStrategy,
                sK = (0, sp.yV)(function(ee, et) {
                    let {
                        beforeEnter: en,
                        afterEnter: er,
                        beforeLeave: ei,
                        afterLeave: es,
                        enter: eo,
                        enterFrom: eu,
                        enterTo: ec,
                        entered: ed,
                        leave: ep,
                        leaveFrom: eh,
                        leaveTo: ef,
                        ...em
                    } = ee, ex = (0, eE.useRef)(null), eg = (0, sw.T)(ex, et), ev = em.unmount ? sp.l4.Unmount : sp.l4.Hidden, {
                        show: ey,
                        appear: eb,
                        initial: e_
                    } = sD(), [ew, ek] = (0, eE.useState)(ey ? "visible" : "hidden"), ej = sM(), {
                        register: eT,
                        unregister: eO
                    } = ej, eC = (0, eE.useRef)(null);
                    (0, eE.useEffect)(() => eT(ex), [eT, ex]), (0, eE.useEffect)(() => {
                        if (ev === sp.l4.Hidden && ex.current) {
                            if (ey && "visible" !== ew) {
                                ek("visible");
                                return
                            }
                            return (0, sg.E)(ew, {
                                hidden: () => eO(ex),
                                visible: () => eT(ex)
                            })
                        }
                    }, [ew, ex, eT, eO, ey, ev]);
                    let eN = (0, sb.E)({
                            enter: sP(eo),
                            enterFrom: sP(eu),
                            enterTo: sP(ec),
                            entered: sP(ed),
                            leave: sP(ep),
                            leaveFrom: sP(eh),
                            leaveTo: sP(ef)
                        }),
                        eS = sH({
                            beforeEnter: en,
                            afterEnter: er,
                            beforeLeave: ei,
                            afterLeave: es
                        }),
                        eR = (0, s_.H)();
                    (0, eE.useEffect)(() => {
                        if (eR && "visible" === ew && null === ex.current) throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")
                    }, [ex, ew, eR]);
                    let eI = e_ && !eb,
                        eA = !eR || eI || eC.current === ey ? "idle" : ey ? "enter" : "leave",
                        eP = (0, sR.z)(ee => (0, sg.E)(ee, {
                            enter: () => eS.current.beforeEnter(),
                            leave: () => eS.current.beforeLeave(),
                            idle: () => {}
                        })),
                        eZ = (0, sR.z)(ee => (0, sg.E)(ee, {
                            enter: () => eS.current.afterEnter(),
                            leave: () => eS.current.afterLeave(),
                            idle: () => {}
                        })),
                        eL = s$(() => {
                            ek("hidden"), eO(ex)
                        }, ej);
                    sS({
                        container: ex,
                        classes: eN,
                        direction: eA,
                        onStart: (0, sb.E)(ee => {
                            eL.onStart(ex, ee, eP)
                        }),
                        onStop: (0, sb.E)(ee => {
                            eL.onStop(ex, ee, eZ), "leave" !== ee || sF(eL) || (ek("hidden"), eO(ex))
                        })
                    }), (0, eE.useEffect)(() => {
                        eI && (ev === sp.l4.Hidden ? eC.current = null : eC.current = ey)
                    }, [ey, eI, ew]);
                    let eD = em,
                        eM = {
                            ref: eg
                        };
                    return eb && ey && sA.O.isServer && (eD = { ...eD,
                        className: (0, sI.A)(em.className, ...eN.current.enter, ...eN.current.enterFrom)
                    }), eE.createElement(sz.Provider, {
                        value: eL
                    }, eE.createElement(sx, {
                        value: (0, sg.E)(ew, {
                            visible: sf.Open,
                            hidden: sf.Closed
                        })
                    }, (0, sp.sY)({
                        ourProps: eM,
                        theirProps: eD,
                        defaultTag: sB,
                        features: sG,
                        visible: "visible" === ew,
                        name: "Transition.Child"
                    })))
                }),
                sq = (0, sp.yV)(function(ee, et) {
                    let {
                        show: en,
                        appear: er = !1,
                        unmount: ei,
                        ...es
                    } = ee, eo = (0, eE.useRef)(null), eu = (0, sw.T)(eo, et);
                    (0, s_.H)();
                    let ec = sm();
                    if (void 0 === en && null !== ec && (en = (0, sg.E)(ec, {
                            [sf.Open]: !0,
                            [sf.Closed]: !1
                        })), ![!0, !1].includes(en)) throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
                    let [ed, ep] = (0, eE.useState)(en ? "visible" : "hidden"), eh = s$(() => {
                        ep("hidden")
                    }), [ef, em] = (0, eE.useState)(!0), ex = (0, eE.useRef)([en]);
                    (0, sv.e)(() => {
                        !1 !== ef && ex.current[ex.current.length - 1] !== en && (ex.current.push(en), em(!1))
                    }, [ex, en]);
                    let eg = (0, eE.useMemo)(() => ({
                        show: en,
                        appear: er,
                        initial: ef
                    }), [en, er, ef]);
                    (0, eE.useEffect)(() => {
                        if (en) ep("visible");
                        else if (sF(eh)) {
                            let ee = eo.current;
                            if (!ee) return;
                            let et = ee.getBoundingClientRect();
                            0 === et.x && 0 === et.y && 0 === et.width && 0 === et.height && ep("hidden")
                        } else ep("hidden")
                    }, [en, eh]);
                    let ev = {
                        unmount: ei
                    };
                    return eE.createElement(sz.Provider, {
                        value: eh
                    }, eE.createElement(sZ.Provider, {
                        value: eg
                    }, (0, sp.sY)({
                        ourProps: { ...ev,
                            as: eE.Fragment,
                            children: eE.createElement(sK, {
                                ref: eu,
                                ...ev,
                                ...es
                            })
                        },
                        theirProps: {},
                        defaultTag: eE.Fragment,
                        features: sG,
                        visible: "visible" === ed,
                        name: "Transition"
                    })))
                }),
                sY = (0, sp.yV)(function(ee, et) {
                    let en = null !== (0, eE.useContext)(sZ),
                        er = null !== sm();
                    return eE.createElement(eE.Fragment, null, !en && er ? eE.createElement(sq, {
                        ref: et,
                        ...ee
                    }) : eE.createElement(sK, {
                        ref: et,
                        ...ee
                    }))
                }),
                sQ = Object.assign(sq, {
                    Child: sY,
                    Root: sq
                });
            var sJ = en(8110),
                sX = en.n(sJ);

            function s0() {
                return (s0 = Object.assign ? Object.assign.bind() : function(ee) {
                    for (var et = 1; et < arguments.length; et++) {
                        var en = arguments[et];
                        for (var er in en) Object.prototype.hasOwnProperty.call(en, er) && (ee[er] = en[er])
                    }
                    return ee
                }).apply(this, arguments)
            }

            function s1(ee, et) {
                if (null == ee) return {};
                var en, er, ei = {},
                    es = Object.keys(ee);
                for (er = 0; er < es.length; er++) en = es[er], et.indexOf(en) >= 0 || (ei[en] = ee[en]);
                return ei
            }
            var s2 = ["keyOverride"],
                s4 = ["crossOrigin"],
                s3 = {
                    templateTitle: "",
                    noindex: !1,
                    nofollow: !1,
                    defaultOpenGraphImageWidth: 0,
                    defaultOpenGraphImageHeight: 0,
                    defaultOpenGraphVideoWidth: 0,
                    defaultOpenGraphVideoHeight: 0
                },
                s5 = function(ee, et, en) {
                    void 0 === et && (et = []);
                    var er = void 0 === en ? {} : en,
                        ei = er.defaultWidth,
                        es = er.defaultHeight;
                    return et.reduce(function(et, en, er) {
                        return et.push(eE.createElement("meta", {
                            key: "og:" + ee + ":0" + er,
                            property: "og:" + ee,
                            content: en.url
                        })), en.alt && et.push(eE.createElement("meta", {
                            key: "og:" + ee + ":alt0" + er,
                            property: "og:" + ee + ":alt",
                            content: en.alt
                        })), en.secureUrl && et.push(eE.createElement("meta", {
                            key: "og:" + ee + ":secure_url0" + er,
                            property: "og:" + ee + ":secure_url",
                            content: en.secureUrl.toString()
                        })), en.type && et.push(eE.createElement("meta", {
                            key: "og:" + ee + ":type0" + er,
                            property: "og:" + ee + ":type",
                            content: en.type.toString()
                        })), en.width ? et.push(eE.createElement("meta", {
                            key: "og:" + ee + ":width0" + er,
                            property: "og:" + ee + ":width",
                            content: en.width.toString()
                        })) : ei && et.push(eE.createElement("meta", {
                            key: "og:" + ee + ":width0" + er,
                            property: "og:" + ee + ":width",
                            content: ei.toString()
                        })), en.height ? et.push(eE.createElement("meta", {
                            key: "og:" + ee + ":height" + er,
                            property: "og:" + ee + ":height",
                            content: en.height.toString()
                        })) : es && et.push(eE.createElement("meta", {
                            key: "og:" + ee + ":height" + er,
                            property: "og:" + ee + ":height",
                            content: es.toString()
                        })), et
                    }, [])
                },
                s8 = function(ee) {
                    var et, en, er, ei, es, eo = [];
                    ee.titleTemplate && (s3.templateTitle = ee.titleTemplate);
                    var eu = "";
                    ee.title ? (eu = ee.title, s3.templateTitle && (eu = s3.templateTitle.replace(/%s/g, function() {
                        return eu
                    }))) : ee.defaultTitle && (eu = ee.defaultTitle), eu && eo.push(eE.createElement("title", {
                        key: "title"
                    }, eu));
                    var ec = void 0 === ee.noindex ? s3.noindex || ee.dangerouslySetAllPagesToNoIndex : ee.noindex,
                        ed = void 0 === ee.nofollow ? s3.nofollow || ee.dangerouslySetAllPagesToNoFollow : ee.nofollow,
                        ep = "";
                    if (ee.robotsProps) {
                        var eh = ee.robotsProps,
                            ef = eh.nosnippet,
                            em = eh.maxSnippet,
                            ex = eh.maxImagePreview,
                            eg = eh.maxVideoPreview,
                            ev = eh.noarchive,
                            ey = eh.noimageindex,
                            eb = eh.notranslate,
                            e_ = eh.unavailableAfter;
                        ep = (ef ? ",nosnippet" : "") + (em ? ",max-snippet:" + em : "") + (ex ? ",max-image-preview:" + ex : "") + (ev ? ",noarchive" : "") + (e_ ? ",unavailable_after:" + e_ : "") + (ey ? ",noimageindex" : "") + (eg ? ",max-video-preview:" + eg : "") + (eb ? ",notranslate" : "")
                    }
                    if (ec || ed ? (ee.dangerouslySetAllPagesToNoIndex && (s3.noindex = !0), ee.dangerouslySetAllPagesToNoFollow && (s3.nofollow = !0), eo.push(eE.createElement("meta", {
                            key: "robots",
                            name: "robots",
                            content: (ec ? "noindex" : "index") + "," + (ed ? "nofollow" : "follow") + ep
                        }))) : eo.push(eE.createElement("meta", {
                            key: "robots",
                            name: "robots",
                            content: "index,follow" + ep
                        })), ee.description && eo.push(eE.createElement("meta", {
                            key: "description",
                            name: "description",
                            content: ee.description
                        })), ee.themeColor && eo.push(eE.createElement("meta", {
                            key: "theme-color",
                            name: "theme-color",
                            content: ee.themeColor
                        })), ee.mobileAlternate && eo.push(eE.createElement("link", {
                            rel: "alternate",
                            key: "mobileAlternate",
                            media: ee.mobileAlternate.media,
                            href: ee.mobileAlternate.href
                        })), ee.languageAlternates && ee.languageAlternates.length > 0 && ee.languageAlternates.forEach(function(ee) {
                            eo.push(eE.createElement("link", {
                                rel: "alternate",
                                key: "languageAlternate-" + ee.hrefLang,
                                hrefLang: ee.hrefLang,
                                href: ee.href
                            }))
                        }), ee.twitter && (ee.twitter.cardType && eo.push(eE.createElement("meta", {
                            key: "twitter:card",
                            name: "twitter:card",
                            content: ee.twitter.cardType
                        })), ee.twitter.site && eo.push(eE.createElement("meta", {
                            key: "twitter:site",
                            name: "twitter:site",
                            content: ee.twitter.site
                        })), ee.twitter.handle && eo.push(eE.createElement("meta", {
                            key: "twitter:creator",
                            name: "twitter:creator",
                            content: ee.twitter.handle
                        }))), ee.facebook && ee.facebook.appId && eo.push(eE.createElement("meta", {
                            key: "fb:app_id",
                            property: "fb:app_id",
                            content: ee.facebook.appId
                        })), (null != (et = ee.openGraph) && et.title || eu) && eo.push(eE.createElement("meta", {
                            key: "og:title",
                            property: "og:title",
                            content: (null == (ei = ee.openGraph) ? void 0 : ei.title) || eu
                        })), (null != (en = ee.openGraph) && en.description || ee.description) && eo.push(eE.createElement("meta", {
                            key: "og:description",
                            property: "og:description",
                            content: (null == (es = ee.openGraph) ? void 0 : es.description) || ee.description
                        })), ee.openGraph) {
                        if ((ee.openGraph.url || ee.canonical) && eo.push(eE.createElement("meta", {
                                key: "og:url",
                                property: "og:url",
                                content: ee.openGraph.url || ee.canonical
                            })), ee.openGraph.type) {
                            var ew = ee.openGraph.type.toLowerCase();
                            eo.push(eE.createElement("meta", {
                                key: "og:type",
                                property: "og:type",
                                content: ew
                            })), "profile" === ew && ee.openGraph.profile ? (ee.openGraph.profile.firstName && eo.push(eE.createElement("meta", {
                                key: "profile:first_name",
                                property: "profile:first_name",
                                content: ee.openGraph.profile.firstName
                            })), ee.openGraph.profile.lastName && eo.push(eE.createElement("meta", {
                                key: "profile:last_name",
                                property: "profile:last_name",
                                content: ee.openGraph.profile.lastName
                            })), ee.openGraph.profile.username && eo.push(eE.createElement("meta", {
                                key: "profile:username",
                                property: "profile:username",
                                content: ee.openGraph.profile.username
                            })), ee.openGraph.profile.gender && eo.push(eE.createElement("meta", {
                                key: "profile:gender",
                                property: "profile:gender",
                                content: ee.openGraph.profile.gender
                            }))) : "book" === ew && ee.openGraph.book ? (ee.openGraph.book.authors && ee.openGraph.book.authors.length && ee.openGraph.book.authors.forEach(function(ee, et) {
                                eo.push(eE.createElement("meta", {
                                    key: "book:author:0" + et,
                                    property: "book:author",
                                    content: ee
                                }))
                            }), ee.openGraph.book.isbn && eo.push(eE.createElement("meta", {
                                key: "book:isbn",
                                property: "book:isbn",
                                content: ee.openGraph.book.isbn
                            })), ee.openGraph.book.releaseDate && eo.push(eE.createElement("meta", {
                                key: "book:release_date",
                                property: "book:release_date",
                                content: ee.openGraph.book.releaseDate
                            })), ee.openGraph.book.tags && ee.openGraph.book.tags.length && ee.openGraph.book.tags.forEach(function(ee, et) {
                                eo.push(eE.createElement("meta", {
                                    key: "book:tag:0" + et,
                                    property: "book:tag",
                                    content: ee
                                }))
                            })) : "article" === ew && ee.openGraph.article ? (ee.openGraph.article.publishedTime && eo.push(eE.createElement("meta", {
                                key: "article:published_time",
                                property: "article:published_time",
                                content: ee.openGraph.article.publishedTime
                            })), ee.openGraph.article.modifiedTime && eo.push(eE.createElement("meta", {
                                key: "article:modified_time",
                                property: "article:modified_time",
                                content: ee.openGraph.article.modifiedTime
                            })), ee.openGraph.article.expirationTime && eo.push(eE.createElement("meta", {
                                key: "article:expiration_time",
                                property: "article:expiration_time",
                                content: ee.openGraph.article.expirationTime
                            })), ee.openGraph.article.authors && ee.openGraph.article.authors.length && ee.openGraph.article.authors.forEach(function(ee, et) {
                                eo.push(eE.createElement("meta", {
                                    key: "article:author:0" + et,
                                    property: "article:author",
                                    content: ee
                                }))
                            }), ee.openGraph.article.section && eo.push(eE.createElement("meta", {
                                key: "article:section",
                                property: "article:section",
                                content: ee.openGraph.article.section
                            })), ee.openGraph.article.tags && ee.openGraph.article.tags.length && ee.openGraph.article.tags.forEach(function(ee, et) {
                                eo.push(eE.createElement("meta", {
                                    key: "article:tag:0" + et,
                                    property: "article:tag",
                                    content: ee
                                }))
                            })) : ("video.movie" === ew || "video.episode" === ew || "video.tv_show" === ew || "video.other" === ew) && ee.openGraph.video && (ee.openGraph.video.actors && ee.openGraph.video.actors.length && ee.openGraph.video.actors.forEach(function(ee, et) {
                                ee.profile && eo.push(eE.createElement("meta", {
                                    key: "video:actor:0" + et,
                                    property: "video:actor",
                                    content: ee.profile
                                })), ee.role && eo.push(eE.createElement("meta", {
                                    key: "video:actor:role:0" + et,
                                    property: "video:actor:role",
                                    content: ee.role
                                }))
                            }), ee.openGraph.video.directors && ee.openGraph.video.directors.length && ee.openGraph.video.directors.forEach(function(ee, et) {
                                eo.push(eE.createElement("meta", {
                                    key: "video:director:0" + et,
                                    property: "video:director",
                                    content: ee
                                }))
                            }), ee.openGraph.video.writers && ee.openGraph.video.writers.length && ee.openGraph.video.writers.forEach(function(ee, et) {
                                eo.push(eE.createElement("meta", {
                                    key: "video:writer:0" + et,
                                    property: "video:writer",
                                    content: ee
                                }))
                            }), ee.openGraph.video.duration && eo.push(eE.createElement("meta", {
                                key: "video:duration",
                                property: "video:duration",
                                content: ee.openGraph.video.duration.toString()
                            })), ee.openGraph.video.releaseDate && eo.push(eE.createElement("meta", {
                                key: "video:release_date",
                                property: "video:release_date",
                                content: ee.openGraph.video.releaseDate
                            })), ee.openGraph.video.tags && ee.openGraph.video.tags.length && ee.openGraph.video.tags.forEach(function(ee, et) {
                                eo.push(eE.createElement("meta", {
                                    key: "video:tag:0" + et,
                                    property: "video:tag",
                                    content: ee
                                }))
                            }), ee.openGraph.video.series && eo.push(eE.createElement("meta", {
                                key: "video:series",
                                property: "video:series",
                                content: ee.openGraph.video.series
                            })))
                        }
                        ee.defaultOpenGraphImageWidth && (s3.defaultOpenGraphImageWidth = ee.defaultOpenGraphImageWidth), ee.defaultOpenGraphImageHeight && (s3.defaultOpenGraphImageHeight = ee.defaultOpenGraphImageHeight), ee.openGraph.images && ee.openGraph.images.length && eo.push.apply(eo, s5("image", ee.openGraph.images, {
                            defaultWidth: s3.defaultOpenGraphImageWidth,
                            defaultHeight: s3.defaultOpenGraphImageHeight
                        })), ee.defaultOpenGraphVideoWidth && (s3.defaultOpenGraphVideoWidth = ee.defaultOpenGraphVideoWidth), ee.defaultOpenGraphVideoHeight && (s3.defaultOpenGraphVideoHeight = ee.defaultOpenGraphVideoHeight), ee.openGraph.videos && ee.openGraph.videos.length && eo.push.apply(eo, s5("video", ee.openGraph.videos, {
                            defaultWidth: s3.defaultOpenGraphVideoWidth,
                            defaultHeight: s3.defaultOpenGraphVideoHeight
                        })), ee.openGraph.audio && eo.push.apply(eo, s5("audio", ee.openGraph.audio)), ee.openGraph.locale && eo.push(eE.createElement("meta", {
                            key: "og:locale",
                            property: "og:locale",
                            content: ee.openGraph.locale
                        })), (ee.openGraph.siteName || ee.openGraph.site_name) && eo.push(eE.createElement("meta", {
                            key: "og:site_name",
                            property: "og:site_name",
                            content: ee.openGraph.siteName || ee.openGraph.site_name
                        }))
                    }
                    return ee.canonical && eo.push(eE.createElement("link", {
                        rel: "canonical",
                        href: ee.canonical,
                        key: "canonical"
                    })), ee.additionalMetaTags && ee.additionalMetaTags.length > 0 && ee.additionalMetaTags.forEach(function(ee) {
                        var et, en, er = ee.keyOverride,
                            ei = s1(ee, s2);
                        eo.push(eE.createElement("meta", s0({
                            key: "meta:" + (null != (et = null != (en = null != er ? er : ei.name) ? en : ei.property) ? et : ei.httpEquiv)
                        }, ei)))
                    }), null != (er = ee.additionalLinkTags) && er.length && ee.additionalLinkTags.forEach(function(ee) {
                        var et, en = ee.crossOrigin,
                            er = s1(ee, s4),
                            ei = "anonymous" === en || "use-credentials" === en || "" === en ? en : void 0;
                        eo.push(eE.createElement("link", s0({
                            key: "link" + (null != (et = er.keyOverride) ? et : er.href) + er.rel
                        }, er, {
                            crossOrigin: ei
                        })))
                    }), eo
                },
                s6 = function(ee) {
                    return eE.createElement(sX(), null, s8(ee))
                },
                s9 = function(ee) {
                    var et = ee.title,
                        en = ee.themeColor,
                        er = ee.noindex,
                        ei = ee.nofollow,
                        es = ee.robotsProps,
                        eo = ee.description,
                        eu = ee.canonical,
                        ec = ee.openGraph,
                        ed = ee.facebook,
                        ep = ee.twitter,
                        eh = ee.additionalMetaTags,
                        ef = ee.titleTemplate,
                        em = ee.defaultTitle,
                        ex = ee.mobileAlternate,
                        eg = ee.languageAlternates,
                        ev = ee.additionalLinkTags;
                    return eE.createElement(eE.Fragment, null, eE.createElement(s6, {
                        title: et,
                        themeColor: en,
                        noindex: er,
                        nofollow: ei,
                        robotsProps: es,
                        description: eo,
                        canonical: eu,
                        facebook: ed,
                        openGraph: ec,
                        additionalMetaTags: eh,
                        twitter: ep,
                        titleTemplate: ef,
                        defaultTitle: em,
                        mobileAlternate: ex,
                        languageAlternates: eg,
                        additionalLinkTags: ev
                    }))
                };
            RegExp("[" + Object.keys(Object.freeze({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&apos;"
            })).join("") + "]", "g");
            var s7 = en(2271),
                ot = en(1253);

            function on(ee, et) {
                let [en, er] = (0, eE.useState)(ee), ei = (0, sb.E)(ee);
                return (0, sv.e)(() => er(ei.current), [ei, er, ...et]), en
            }
            var or = en(578);

            function oi(ee) {
                throw Error("Unexpected object: " + ee)
            }
            var os = ((es = os || {})[es.First = 0] = "First", es[es.Previous = 1] = "Previous", es[es.Next = 2] = "Next", es[es.Last = 3] = "Last", es[es.Specific = 4] = "Specific", es[es.Nothing = 5] = "Nothing", es);

            function oo(ee, et) {
                let en = et.resolveItems();
                if (en.length <= 0) return null;
                let er = et.resolveActiveIndex(),
                    ei = null != er ? er : -1,
                    es = (() => {
                        switch (ee.focus) {
                            case 0:
                                return en.findIndex(ee => !et.resolveDisabled(ee));
                            case 1:
                                {
                                    let ee = en.slice().reverse().findIndex((ee, en, er) => (-1 === ei || !(er.length - en - 1 >= ei)) && !et.resolveDisabled(ee));
                                    return -1 === ee ? ee : en.length - 1 - ee
                                }
                            case 2:
                                return en.findIndex((ee, en) => !(en <= ei) && !et.resolveDisabled(ee));
                            case 3:
                                {
                                    let ee = en.slice().reverse().findIndex(ee => !et.resolveDisabled(ee));
                                    return -1 === ee ? ee : en.length - 1 - ee
                                }
                            case 4:
                                return en.findIndex(en => et.resolveId(en) === ee.id);
                            case 5:
                                return null;
                            default:
                                oi(ee)
                        }
                    })();
                return -1 === es ? er : es
            }

            function ol(ee) {
                let et = ee.parentElement,
                    en = null;
                for (; et && !(et instanceof HTMLFieldSetElement);) et instanceof HTMLLegendElement && (en = et), et = et.parentElement;
                let er = (null == et ? void 0 : et.getAttribute("disabled")) === "";
                return !(er && ou(en)) && er
            }

            function ou(ee) {
                if (!ee) return !1;
                let et = ee.previousElementSibling;
                for (; null !== et;) {
                    if (et instanceof HTMLLegendElement) return !1;
                    et = et.previousElementSibling
                }
                return !0
            }
            var oc = en(5661),
                od = en(8669);

            function op(ee, et, en) {
                let er = (0, sb.E)(et);
                (0, eE.useEffect)(() => {
                    function et(ee) {
                        er.current(ee)
                    }
                    return document.addEventListener(ee, et, en), () => document.removeEventListener(ee, et, en)
                }, [ee, en])
            }

            function oh(ee, et, en = !0) {
                let er = (0, eE.useRef)(!1);

                function ei(en, ei) {
                    if (!er.current || en.defaultPrevented) return;
                    let es = function ee(et) {
                            return "function" == typeof et ? ee(et()) : Array.isArray(et) || et instanceof Set ? et : [et]
                        }(ee),
                        eo = ei(en);
                    if (null !== eo && eo.getRootNode().contains(eo)) {
                        for (let ee of es) {
                            if (null === ee) continue;
                            let et = ee instanceof HTMLElement ? ee : ee.current;
                            if (null != et && et.contains(eo) || en.composed && en.composedPath().includes(et)) return
                        }
                        return (0, oc.sP)(eo, oc.tJ.Loose) || -1 === eo.tabIndex || en.preventDefault(), et(en, eo)
                    }
                }(0, eE.useEffect)(() => {
                    requestAnimationFrame(() => {
                        er.current = en
                    })
                }, [en]);
                let es = (0, eE.useRef)(null);
                op("mousedown", ee => {
                    var et, en;
                    er.current && (es.current = (null == (en = null == (et = ee.composedPath) ? void 0 : et.call(ee)) ? void 0 : en[0]) || ee.target)
                }, !0), op("click", ee => {
                    es.current && (ei(ee, () => es.current), es.current = null)
                }, !0), op("blur", ee => ei(ee, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
            }
            var of = en(7899);

            function om(ee = {}, et = null, en = []) {
                for (let [er, ei] of Object.entries(ee)) og(en, ox(et, er), ei);
                return en
            }

            function ox(ee, et) {
                return ee ? ee + "[" + et + "]" : et
            }

            function og(ee, et, en) {
                if (Array.isArray(en))
                    for (let [er, ei] of en.entries()) og(ee, ox(et, er.toString()), ei);
                else en instanceof Date ? ee.push([et, en.toISOString()]) : "boolean" == typeof en ? ee.push([et, en ? "1" : "0"]) : "string" == typeof en ? ee.push([et, en]) : "number" == typeof en ? ee.push([et, `${en}`]) : null == en ? ee.push([et, ""]) : om(en, et, ee)
            }
            var ov = en(8694);

            function oy(ee, et, en) {
                let [er, ei] = (0, eE.useState)(en), es = void 0 !== ee, eo = (0, eE.useRef)(es), eu = (0, eE.useRef)(!1), ec = (0, eE.useRef)(!1);
                return !es || eo.current || eu.current ? es || !eo.current || ec.current || (ec.current = !0, eo.current = es, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")) : (eu.current = !0, eo.current = es, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")), [es ? ee : er, (0, sR.z)(ee => (es || ei(ee), null == et ? void 0 : et(ee)))]
            }

            function ob(ee) {
                return [ee.screenX, ee.screenY]
            }

            function o_() {
                let ee = (0, eE.useRef)([-1, -1]);
                return {
                    wasMoved(et) {
                        let en = ob(et);
                        return (ee.current[0] !== en[0] || ee.current[1] !== en[1]) && (ee.current = en, !0)
                    },
                    update(et) {
                        ee.current = ob(et)
                    }
                }
            }
            var ow = ((eo = ow || {})[eo.Open = 0] = "Open", eo[eo.Closed = 1] = "Closed", eo),
                ok = ((eu = ok || {})[eu.Single = 0] = "Single", eu[eu.Multi = 1] = "Multi", eu),
                oj = ((ec = oj || {})[ec.Pointer = 0] = "Pointer", ec[ec.Other = 1] = "Other", ec),
                oE = ((ed = oE || {})[ed.OpenListbox = 0] = "OpenListbox", ed[ed.CloseListbox = 1] = "CloseListbox", ed[ed.GoToOption = 2] = "GoToOption", ed[ed.Search = 3] = "Search", ed[ed.ClearSearch = 4] = "ClearSearch", ed[ed.RegisterOption = 5] = "RegisterOption", ed[ed.UnregisterOption = 6] = "UnregisterOption", ed[ed.RegisterLabel = 7] = "RegisterLabel", ed);

            function oT(ee, et = ee => ee) {
                let en = null !== ee.activeOptionIndex ? ee.options[ee.activeOptionIndex] : null,
                    er = (0, oc.z2)(et(ee.options.slice()), ee => ee.dataRef.current.domRef.current),
                    ei = en ? er.indexOf(en) : null;
                return -1 === ei && (ei = null), {
                    options: er,
                    activeOptionIndex: ei
                }
            }
            let oO = {
                    1: ee => ee.dataRef.current.disabled || 1 === ee.listboxState ? ee : { ...ee,
                        activeOptionIndex: null,
                        listboxState: 1
                    },
                    0(ee) {
                        if (ee.dataRef.current.disabled || 0 === ee.listboxState) return ee;
                        let et = ee.activeOptionIndex,
                            {
                                isSelected: en
                            } = ee.dataRef.current,
                            er = ee.options.findIndex(ee => en(ee.dataRef.current.value));
                        return -1 !== er && (et = er), { ...ee,
                            listboxState: 0,
                            activeOptionIndex: et
                        }
                    },
                    2(ee, et) {
                        var en;
                        if (ee.dataRef.current.disabled || 1 === ee.listboxState) return ee;
                        let er = oT(ee),
                            ei = oo(et, {
                                resolveItems: () => er.options,
                                resolveActiveIndex: () => er.activeOptionIndex,
                                resolveId: ee => ee.id,
                                resolveDisabled: ee => ee.dataRef.current.disabled
                            });
                        return { ...ee,
                            ...er,
                            searchQuery: "",
                            activeOptionIndex: ei,
                            activationTrigger: null != (en = et.trigger) ? en : 1
                        }
                    },
                    3: (ee, et) => {
                        if (ee.dataRef.current.disabled || 1 === ee.listboxState) return ee;
                        let en = "" !== ee.searchQuery ? 0 : 1,
                            er = ee.searchQuery + et.value.toLowerCase(),
                            ei = (null !== ee.activeOptionIndex ? ee.options.slice(ee.activeOptionIndex + en).concat(ee.options.slice(0, ee.activeOptionIndex + en)) : ee.options).find(ee => {
                                var et;
                                return !ee.dataRef.current.disabled && (null == (et = ee.dataRef.current.textValue) ? void 0 : et.startsWith(er))
                            }),
                            es = ei ? ee.options.indexOf(ei) : -1;
                        return -1 === es || es === ee.activeOptionIndex ? { ...ee,
                            searchQuery: er
                        } : { ...ee,
                            searchQuery: er,
                            activeOptionIndex: es,
                            activationTrigger: 1
                        }
                    },
                    4: ee => ee.dataRef.current.disabled || 1 === ee.listboxState || "" === ee.searchQuery ? ee : { ...ee,
                        searchQuery: ""
                    },
                    5: (ee, et) => {
                        let en = {
                                id: et.id,
                                dataRef: et.dataRef
                            },
                            er = oT(ee, ee => [...ee, en]);
                        return null === ee.activeOptionIndex && ee.dataRef.current.isSelected(et.dataRef.current.value) && (er.activeOptionIndex = er.options.indexOf(en)), { ...ee,
                            ...er
                        }
                    },
                    6: (ee, et) => {
                        let en = oT(ee, ee => {
                            let en = ee.findIndex(ee => ee.id === et.id);
                            return -1 !== en && ee.splice(en, 1), ee
                        });
                        return { ...ee,
                            ...en,
                            activationTrigger: 1
                        }
                    },
                    7: (ee, et) => ({ ...ee,
                        labelId: et.id
                    })
                },
                oC = (0, eE.createContext)(null);

            function oN(ee) {
                let et = (0, eE.useContext)(oC);
                if (null === et) {
                    let et = Error(`<${ee} /> is missing a parent <Listbox /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(et, oN), et
                }
                return et
            }
            oC.displayName = "ListboxActionsContext";
            let oS = (0, eE.createContext)(null);

            function oR(ee) {
                let et = (0, eE.useContext)(oS);
                if (null === et) {
                    let et = Error(`<${ee} /> is missing a parent <Listbox /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(et, oR), et
                }
                return et
            }

            function oI(ee, et) {
                return (0, sg.E)(et.type, oO, ee, et)
            }
            oS.displayName = "ListboxDataContext";
            let oA = eE.Fragment,
                oP = (0, sp.yV)(function(ee, et) {
                    let {
                        value: en,
                        defaultValue: er,
                        name: ei,
                        onChange: es,
                        by: eo = (ee, et) => ee === et,
                        disabled: eu = !1,
                        horizontal: ec = !1,
                        multiple: ed = !1,
                        ...ep
                    } = ee, eh = ec ? "horizontal" : "vertical", ef = (0, sw.T)(et), [em = ed ? [] : void 0, ex] = oy(en, es, er), [eg, ev] = (0, eE.useReducer)(oI, {
                        dataRef: (0, eE.createRef)(),
                        listboxState: 1,
                        options: [],
                        searchQuery: "",
                        labelId: null,
                        activeOptionIndex: null,
                        activationTrigger: 1
                    }), ey = (0, eE.useRef)({
                        static: !1,
                        hold: !1
                    }), eb = (0, eE.useRef)(null), e_ = (0, eE.useRef)(null), ew = (0, eE.useRef)(null), ek = (0, sR.z)("string" == typeof eo ? (ee, et) => {
                        let en = eo;
                        return (null == ee ? void 0 : ee[en]) === (null == et ? void 0 : et[en])
                    } : eo), ej = (0, eE.useCallback)(ee => (0, sg.E)(eT.mode, {
                        1: () => em.some(et => ek(et, ee)),
                        0: () => ek(em, ee)
                    }), [em]), eT = (0, eE.useMemo)(() => ({ ...eg,
                        value: em,
                        disabled: eu,
                        mode: ed ? 1 : 0,
                        orientation: eh,
                        compare: ek,
                        isSelected: ej,
                        optionsPropsRef: ey,
                        labelRef: eb,
                        buttonRef: e_,
                        optionsRef: ew
                    }), [em, eu, ed, eg]);
                    (0, sv.e)(() => {
                        eg.dataRef.current = eT
                    }, [eT]), oh([eT.buttonRef, eT.optionsRef], (ee, et) => {
                        var en;
                        ev({
                            type: 1
                        }), (0, oc.sP)(et, oc.tJ.Loose) || (ee.preventDefault(), null == (en = eT.buttonRef.current) || en.focus())
                    }, 0 === eT.listboxState);
                    let eO = (0, eE.useMemo)(() => ({
                            open: 0 === eT.listboxState,
                            disabled: eu,
                            value: em
                        }), [eT, eu, em]),
                        eC = (0, sR.z)(ee => {
                            let et = eT.options.find(et => et.id === ee);
                            et && eZ(et.dataRef.current.value)
                        }),
                        eN = (0, sR.z)(() => {
                            if (null !== eT.activeOptionIndex) {
                                let {
                                    dataRef: ee,
                                    id: et
                                } = eT.options[eT.activeOptionIndex];
                                eZ(ee.current.value), ev({
                                    type: 2,
                                    focus: os.Specific,
                                    id: et
                                })
                            }
                        }),
                        eS = (0, sR.z)(() => ev({
                            type: 0
                        })),
                        eR = (0, sR.z)(() => ev({
                            type: 1
                        })),
                        eI = (0, sR.z)((ee, et, en) => ee === os.Specific ? ev({
                            type: 2,
                            focus: os.Specific,
                            id: et,
                            trigger: en
                        }) : ev({
                            type: 2,
                            focus: ee,
                            trigger: en
                        })),
                        eA = (0, sR.z)((ee, et) => (ev({
                            type: 5,
                            id: ee,
                            dataRef: et
                        }), () => ev({
                            type: 6,
                            id: ee
                        }))),
                        eP = (0, sR.z)(ee => (ev({
                            type: 7,
                            id: ee
                        }), () => ev({
                            type: 7,
                            id: null
                        }))),
                        eZ = (0, sR.z)(ee => (0, sg.E)(eT.mode, {
                            0: () => null == ex ? void 0 : ex(ee),
                            1() {
                                let et = eT.value.slice(),
                                    en = et.findIndex(et => ek(et, ee));
                                return -1 === en ? et.push(ee) : et.splice(en, 1), null == ex ? void 0 : ex(et)
                            }
                        })),
                        eL = (0, sR.z)(ee => ev({
                            type: 3,
                            value: ee
                        })),
                        eD = (0, sR.z)(() => ev({
                            type: 4
                        })),
                        eM = (0, eE.useMemo)(() => ({
                            onChange: eZ,
                            registerOption: eA,
                            registerLabel: eP,
                            goToOption: eI,
                            closeListbox: eR,
                            openListbox: eS,
                            selectActiveOption: eN,
                            selectOption: eC,
                            search: eL,
                            clearSearch: eD
                        }), []),
                        ez = {
                            ref: ef
                        },
                        eF = (0, eE.useRef)(null),
                        e$ = sN();
                    return (0, eE.useEffect)(() => {
                        eF.current && void 0 !== er && e$.addEventListener(eF.current, "reset", () => {
                            eZ(er)
                        })
                    }, [eF, eZ]), eE.createElement(oC.Provider, {
                        value: eM
                    }, eE.createElement(oS.Provider, {
                        value: eT
                    }, eE.createElement(sx, {
                        value: (0, sg.E)(eT.listboxState, {
                            0: sf.Open,
                            1: sf.Closed
                        })
                    }, null != ei && null != em && om({
                        [ei]: em
                    }).map(([ee, et], en) => eE.createElement( of ._, {
                        features: of .A.Hidden,
                        ref: 0 === en ? ee => {
                            var et;
                            eF.current = null != (et = null == ee ? void 0 : ee.closest("form")) ? et : null
                        } : void 0,
                        ...(0, sp.oA)({
                            key: ee,
                            as: "input",
                            type: "hidden",
                            hidden: !0,
                            readOnly: !0,
                            name: ee,
                            value: et
                        })
                    })), (0, sp.sY)({
                        ourProps: ez,
                        theirProps: ep,
                        slot: eO,
                        defaultTag: oA,
                        name: "Listbox"
                    }))))
                }),
                oZ = "button",
                oL = (0, sp.yV)(function(ee, et) {
                    var en;
                    let er = (0, ot.M)(),
                        {
                            id: ei = `headlessui-listbox-button-${er}`,
                            ...es
                        } = ee,
                        eo = oR("Listbox.Button"),
                        eu = oN("Listbox.Button"),
                        ec = (0, sw.T)(eo.buttonRef, et),
                        ed = sN(),
                        ep = (0, sR.z)(ee => {
                            switch (ee.key) {
                                case or.R.Space:
                                case or.R.Enter:
                                case or.R.ArrowDown:
                                    ee.preventDefault(), eu.openListbox(), ed.nextFrame(() => {
                                        eo.value || eu.goToOption(os.First)
                                    });
                                    break;
                                case or.R.ArrowUp:
                                    ee.preventDefault(), eu.openListbox(), ed.nextFrame(() => {
                                        eo.value || eu.goToOption(os.Last)
                                    })
                            }
                        }),
                        eh = (0, sR.z)(ee => {
                            ee.key === or.R.Space && ee.preventDefault()
                        }),
                        ef = (0, sR.z)(ee => {
                            if (ol(ee.currentTarget)) return ee.preventDefault();
                            0 === eo.listboxState ? (eu.closeListbox(), ed.nextFrame(() => {
                                var ee;
                                return null == (ee = eo.buttonRef.current) ? void 0 : ee.focus({
                                    preventScroll: !0
                                })
                            })) : (ee.preventDefault(), eu.openListbox())
                        }),
                        em = on(() => {
                            if (eo.labelId) return [eo.labelId, ei].join(" ")
                        }, [eo.labelId, ei]),
                        ex = (0, eE.useMemo)(() => ({
                            open: 0 === eo.listboxState,
                            disabled: eo.disabled,
                            value: eo.value
                        }), [eo]),
                        eg = {
                            ref: ec,
                            id: ei,
                            type: (0, od.f)(ee, eo.buttonRef),
                            "aria-haspopup": "listbox",
                            "aria-controls": null == (en = eo.optionsRef.current) ? void 0 : en.id,
                            "aria-expanded": eo.disabled ? void 0 : 0 === eo.listboxState,
                            "aria-labelledby": em,
                            disabled: eo.disabled,
                            onKeyDown: ep,
                            onKeyUp: eh,
                            onClick: ef
                        };
                    return (0, sp.sY)({
                        ourProps: eg,
                        theirProps: es,
                        slot: ex,
                        defaultTag: oZ,
                        name: "Listbox.Button"
                    })
                }),
                oD = "label",
                oM = (0, sp.yV)(function(ee, et) {
                    let en = (0, ot.M)(),
                        {
                            id: er = `headlessui-listbox-label-${en}`,
                            ...ei
                        } = ee,
                        es = oR("Listbox.Label"),
                        eo = oN("Listbox.Label"),
                        eu = (0, sw.T)(es.labelRef, et);
                    (0, sv.e)(() => eo.registerLabel(er), [er]);
                    let ec = (0, sR.z)(() => {
                            var ee;
                            return null == (ee = es.buttonRef.current) ? void 0 : ee.focus({
                                preventScroll: !0
                            })
                        }),
                        ed = (0, eE.useMemo)(() => ({
                            open: 0 === es.listboxState,
                            disabled: es.disabled
                        }), [es]);
                    return (0, sp.sY)({
                        ourProps: {
                            ref: eu,
                            id: er,
                            onClick: ec
                        },
                        theirProps: ei,
                        slot: ed,
                        defaultTag: oD,
                        name: "Listbox.Label"
                    })
                }),
                oz = "ul",
                oF = sp.AN.RenderStrategy | sp.AN.Static,
                o$ = (0, sp.yV)(function(ee, et) {
                    var en;
                    let er = (0, ot.M)(),
                        {
                            id: ei = `headlessui-listbox-options-${er}`,
                            ...es
                        } = ee,
                        eo = oR("Listbox.Options"),
                        eu = oN("Listbox.Options"),
                        ec = (0, sw.T)(eo.optionsRef, et),
                        ed = sN(),
                        ep = sN(),
                        eh = sm(),
                        ef = null !== eh ? eh === sf.Open : 0 === eo.listboxState;
                    (0, eE.useEffect)(() => {
                        var ee;
                        let et = eo.optionsRef.current;
                        et && 0 === eo.listboxState && et !== (null == (ee = (0, ov.r)(et)) ? void 0 : ee.activeElement) && et.focus({
                            preventScroll: !0
                        })
                    }, [eo.listboxState, eo.optionsRef]);
                    let em = (0, sR.z)(ee => {
                            switch (ep.dispose(), ee.key) {
                                case or.R.Space:
                                    if ("" !== eo.searchQuery) return ee.preventDefault(), ee.stopPropagation(), eu.search(ee.key);
                                case or.R.Enter:
                                    if (ee.preventDefault(), ee.stopPropagation(), null !== eo.activeOptionIndex) {
                                        let {
                                            dataRef: ee
                                        } = eo.options[eo.activeOptionIndex];
                                        eu.onChange(ee.current.value)
                                    }
                                    0 === eo.mode && (eu.closeListbox(), (0, sj.k)().nextFrame(() => {
                                        var ee;
                                        return null == (ee = eo.buttonRef.current) ? void 0 : ee.focus({
                                            preventScroll: !0
                                        })
                                    }));
                                    break;
                                case (0, sg.E)(eo.orientation, {
                                    vertical: or.R.ArrowDown,
                                    horizontal: or.R.ArrowRight
                                }):
                                    return ee.preventDefault(), ee.stopPropagation(), eu.goToOption(os.Next);
                                case (0, sg.E)(eo.orientation, {
                                    vertical: or.R.ArrowUp,
                                    horizontal: or.R.ArrowLeft
                                }):
                                    return ee.preventDefault(), ee.stopPropagation(), eu.goToOption(os.Previous);
                                case or.R.Home:
                                case or.R.PageUp:
                                    return ee.preventDefault(), ee.stopPropagation(), eu.goToOption(os.First);
                                case or.R.End:
                                case or.R.PageDown:
                                    return ee.preventDefault(), ee.stopPropagation(), eu.goToOption(os.Last);
                                case or.R.Escape:
                                    return ee.preventDefault(), ee.stopPropagation(), eu.closeListbox(), ed.nextFrame(() => {
                                        var ee;
                                        return null == (ee = eo.buttonRef.current) ? void 0 : ee.focus({
                                            preventScroll: !0
                                        })
                                    });
                                case or.R.Tab:
                                    ee.preventDefault(), ee.stopPropagation();
                                    break;
                                default:
                                    1 === ee.key.length && (eu.search(ee.key), ep.setTimeout(() => eu.clearSearch(), 350))
                            }
                        }),
                        ex = on(() => {
                            var ee, et, en;
                            return null != (en = null == (ee = eo.labelRef.current) ? void 0 : ee.id) ? en : null == (et = eo.buttonRef.current) ? void 0 : et.id
                        }, [eo.labelRef.current, eo.buttonRef.current]),
                        eg = (0, eE.useMemo)(() => ({
                            open: 0 === eo.listboxState
                        }), [eo]),
                        ev = {
                            "aria-activedescendant": null === eo.activeOptionIndex || null == (en = eo.options[eo.activeOptionIndex]) ? void 0 : en.id,
                            "aria-multiselectable": 1 === eo.mode || void 0,
                            "aria-labelledby": ex,
                            "aria-orientation": eo.orientation,
                            id: ei,
                            onKeyDown: em,
                            role: "listbox",
                            tabIndex: 0,
                            ref: ec
                        };
                    return (0, sp.sY)({
                        ourProps: ev,
                        theirProps: es,
                        slot: eg,
                        defaultTag: oz,
                        features: oF,
                        visible: ef,
                        name: "Listbox.Options"
                    })
                }),
                oU = "li",
                oW = Object.assign(oP, {
                    Button: oL,
                    Label: oM,
                    Options: o$,
                    Option: (0, sp.yV)(function(ee, et) {
                        let en = (0, ot.M)(),
                            {
                                id: er = `headlessui-listbox-option-${en}`,
                                disabled: ei = !1,
                                value: es,
                                ...eo
                            } = ee,
                            eu = oR("Listbox.Option"),
                            ec = oN("Listbox.Option"),
                            ed = null !== eu.activeOptionIndex && eu.options[eu.activeOptionIndex].id === er,
                            ep = eu.isSelected(es),
                            eh = (0, eE.useRef)(null),
                            ef = (0, sb.E)({
                                disabled: ei,
                                value: es,
                                domRef: eh,
                                get textValue() {
                                    var em, ex;
                                    return null == (ex = null == (em = eh.current) ? void 0 : em.textContent) ? void 0 : ex.toLowerCase()
                                }
                            }),
                            eg = (0, sw.T)(et, eh);
                        (0, sv.e)(() => {
                            if (0 !== eu.listboxState || !ed || 0 === eu.activationTrigger) return;
                            let ee = (0, sj.k)();
                            return ee.requestAnimationFrame(() => {
                                var ee, et;
                                null == (et = null == (ee = eh.current) ? void 0 : ee.scrollIntoView) || et.call(ee, {
                                    block: "nearest"
                                })
                            }), ee.dispose
                        }, [eh, ed, eu.listboxState, eu.activationTrigger, eu.activeOptionIndex]), (0, sv.e)(() => ec.registerOption(er, ef), [ef, er]);
                        let ev = (0, sR.z)(ee => {
                                if (ei) return ee.preventDefault();
                                ec.onChange(es), 0 === eu.mode && (ec.closeListbox(), (0, sj.k)().nextFrame(() => {
                                    var ee;
                                    return null == (ee = eu.buttonRef.current) ? void 0 : ee.focus({
                                        preventScroll: !0
                                    })
                                }))
                            }),
                            ey = (0, sR.z)(() => {
                                if (ei) return ec.goToOption(os.Nothing);
                                ec.goToOption(os.Specific, er)
                            }),
                            eb = o_(),
                            e_ = (0, sR.z)(ee => eb.update(ee)),
                            ew = (0, sR.z)(ee => {
                                !eb.wasMoved(ee) || ei || ed || ec.goToOption(os.Specific, er, 0)
                            }),
                            ek = (0, sR.z)(ee => {
                                eb.wasMoved(ee) && !ei && ed && ec.goToOption(os.Nothing)
                            }),
                            ej = (0, eE.useMemo)(() => ({
                                active: ed,
                                selected: ep,
                                disabled: ei
                            }), [ed, ep, ei]);
                        return (0, sp.sY)({
                            ourProps: {
                                id: er,
                                ref: eg,
                                role: "option",
                                tabIndex: !0 === ei ? void 0 : -1,
                                "aria-disabled": !0 === ei || void 0,
                                "aria-selected": ep,
                                disabled: void 0,
                                onClick: ev,
                                onFocus: ey,
                                onPointerEnter: e_,
                                onMouseEnter: e_,
                                onPointerMove: ew,
                                onMouseMove: ew,
                                onPointerLeave: ek,
                                onMouseLeave: ek
                            },
                            theirProps: eo,
                            slot: ej,
                            defaultTag: oU,
                            name: "Listbox.Option"
                        })
                    })
                });
            var oV = en(9581);

            function oH({
                container: ee,
                accept: et,
                walk: en,
                enabled: er = !0
            }) {
                let ei = (0, eE.useRef)(et),
                    es = (0, eE.useRef)(en);
                (0, eE.useEffect)(() => {
                    ei.current = et, es.current = en
                }, [et, en]), (0, sv.e)(() => {
                    if (!ee || !er) return;
                    let et = (0, ov.r)(ee);
                    if (!et) return;
                    let en = ei.current,
                        eo = es.current,
                        eu = Object.assign(ee => en(ee), {
                            acceptNode: en
                        }),
                        ec = et.createTreeWalker(ee, NodeFilter.SHOW_ELEMENT, eu, !1);
                    for (; ec.nextNode();) eo(ec.currentNode)
                }, [ee, er, ei, es])
            }

            function oB(...ee) {
                return (0, eE.useMemo)(() => (0, ov.r)(...ee), [...ee])
            }
            var oG = ((ep = oG || {})[ep.Open = 0] = "Open", ep[ep.Closed = 1] = "Closed", ep),
                oK = ((eh = oK || {})[eh.Pointer = 0] = "Pointer", eh[eh.Other = 1] = "Other", eh),
                oq = ((ef = oq || {})[ef.OpenMenu = 0] = "OpenMenu", ef[ef.CloseMenu = 1] = "CloseMenu", ef[ef.GoToItem = 2] = "GoToItem", ef[ef.Search = 3] = "Search", ef[ef.ClearSearch = 4] = "ClearSearch", ef[ef.RegisterItem = 5] = "RegisterItem", ef[ef.UnregisterItem = 6] = "UnregisterItem", ef);

            function oY(ee, et = ee => ee) {
                let en = null !== ee.activeItemIndex ? ee.items[ee.activeItemIndex] : null,
                    er = (0, oc.z2)(et(ee.items.slice()), ee => ee.dataRef.current.domRef.current),
                    ei = en ? er.indexOf(en) : null;
                return -1 === ei && (ei = null), {
                    items: er,
                    activeItemIndex: ei
                }
            }
            let oQ = {
                    1: ee => 1 === ee.menuState ? ee : { ...ee,
                        activeItemIndex: null,
                        menuState: 1
                    },
                    0: ee => 0 === ee.menuState ? ee : { ...ee,
                        menuState: 0
                    },
                    2: (ee, et) => {
                        var en;
                        let er = oY(ee),
                            ei = oo(et, {
                                resolveItems: () => er.items,
                                resolveActiveIndex: () => er.activeItemIndex,
                                resolveId: ee => ee.id,
                                resolveDisabled: ee => ee.dataRef.current.disabled
                            });
                        return { ...ee,
                            ...er,
                            searchQuery: "",
                            activeItemIndex: ei,
                            activationTrigger: null != (en = et.trigger) ? en : 1
                        }
                    },
                    3: (ee, et) => {
                        let en = "" !== ee.searchQuery ? 0 : 1,
                            er = ee.searchQuery + et.value.toLowerCase(),
                            ei = (null !== ee.activeItemIndex ? ee.items.slice(ee.activeItemIndex + en).concat(ee.items.slice(0, ee.activeItemIndex + en)) : ee.items).find(ee => {
                                var et;
                                return (null == (et = ee.dataRef.current.textValue) ? void 0 : et.startsWith(er)) && !ee.dataRef.current.disabled
                            }),
                            es = ei ? ee.items.indexOf(ei) : -1;
                        return -1 === es || es === ee.activeItemIndex ? { ...ee,
                            searchQuery: er
                        } : { ...ee,
                            searchQuery: er,
                            activeItemIndex: es,
                            activationTrigger: 1
                        }
                    },
                    4: ee => "" === ee.searchQuery ? ee : { ...ee,
                        searchQuery: "",
                        searchActiveItemIndex: null
                    },
                    5: (ee, et) => {
                        let en = oY(ee, ee => [...ee, {
                            id: et.id,
                            dataRef: et.dataRef
                        }]);
                        return { ...ee,
                            ...en
                        }
                    },
                    6: (ee, et) => {
                        let en = oY(ee, ee => {
                            let en = ee.findIndex(ee => ee.id === et.id);
                            return -1 !== en && ee.splice(en, 1), ee
                        });
                        return { ...ee,
                            ...en,
                            activationTrigger: 1
                        }
                    }
                },
                oJ = (0, eE.createContext)(null);

            function oX(ee) {
                let et = (0, eE.useContext)(oJ);
                if (null === et) {
                    let et = Error(`<${ee} /> is missing a parent <Menu /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(et, oX), et
                }
                return et
            }

            function o0(ee, et) {
                return (0, sg.E)(et.type, oQ, ee, et)
            }
            oJ.displayName = "MenuContext";
            let o1 = eE.Fragment,
                o2 = (0, sp.yV)(function(ee, et) {
                    let en = (0, eE.useReducer)(o0, {
                            menuState: 1,
                            buttonRef: (0, eE.createRef)(),
                            itemsRef: (0, eE.createRef)(),
                            items: [],
                            searchQuery: "",
                            activeItemIndex: null,
                            activationTrigger: 1
                        }),
                        [{
                            menuState: er,
                            itemsRef: ei,
                            buttonRef: es
                        }, eo] = en,
                        eu = (0, sw.T)(et);
                    oh([es, ei], (ee, et) => {
                        var en;
                        eo({
                            type: 1
                        }), (0, oc.sP)(et, oc.tJ.Loose) || (ee.preventDefault(), null == (en = es.current) || en.focus())
                    }, 0 === er);
                    let ec = (0, sR.z)(() => {
                            eo({
                                type: 1
                            })
                        }),
                        ed = (0, eE.useMemo)(() => ({
                            open: 0 === er,
                            close: ec
                        }), [er, ec]),
                        ep = ee,
                        eh = {
                            ref: eu
                        };
                    return eE.createElement(oJ.Provider, {
                        value: en
                    }, eE.createElement(sx, {
                        value: (0, sg.E)(er, {
                            0: sf.Open,
                            1: sf.Closed
                        })
                    }, (0, sp.sY)({
                        ourProps: eh,
                        theirProps: ep,
                        slot: ed,
                        defaultTag: o1,
                        name: "Menu"
                    })))
                }),
                o4 = "button",
                o3 = (0, sp.yV)(function(ee, et) {
                    var en;
                    let er = (0, ot.M)(),
                        {
                            id: ei = `headlessui-menu-button-${er}`,
                            ...es
                        } = ee,
                        [eo, eu] = oX("Menu.Button"),
                        ec = (0, sw.T)(eo.buttonRef, et),
                        ed = sN(),
                        ep = (0, sR.z)(ee => {
                            switch (ee.key) {
                                case or.R.Space:
                                case or.R.Enter:
                                case or.R.ArrowDown:
                                    ee.preventDefault(), ee.stopPropagation(), eu({
                                        type: 0
                                    }), ed.nextFrame(() => eu({
                                        type: 2,
                                        focus: os.First
                                    }));
                                    break;
                                case or.R.ArrowUp:
                                    ee.preventDefault(), ee.stopPropagation(), eu({
                                        type: 0
                                    }), ed.nextFrame(() => eu({
                                        type: 2,
                                        focus: os.Last
                                    }))
                            }
                        }),
                        eh = (0, sR.z)(ee => {
                            ee.key === or.R.Space && ee.preventDefault()
                        }),
                        ef = (0, sR.z)(et => {
                            if (ol(et.currentTarget)) return et.preventDefault();
                            ee.disabled || (0 === eo.menuState ? (eu({
                                type: 1
                            }), ed.nextFrame(() => {
                                var ee;
                                return null == (ee = eo.buttonRef.current) ? void 0 : ee.focus({
                                    preventScroll: !0
                                })
                            })) : (et.preventDefault(), eu({
                                type: 0
                            })))
                        }),
                        em = (0, eE.useMemo)(() => ({
                            open: 0 === eo.menuState
                        }), [eo]),
                        ex = {
                            ref: ec,
                            id: ei,
                            type: (0, od.f)(ee, eo.buttonRef),
                            "aria-haspopup": "menu",
                            "aria-controls": null == (en = eo.itemsRef.current) ? void 0 : en.id,
                            "aria-expanded": ee.disabled ? void 0 : 0 === eo.menuState,
                            onKeyDown: ep,
                            onKeyUp: eh,
                            onClick: ef
                        };
                    return (0, sp.sY)({
                        ourProps: ex,
                        theirProps: es,
                        slot: em,
                        defaultTag: o4,
                        name: "Menu.Button"
                    })
                }),
                o5 = "div",
                o8 = sp.AN.RenderStrategy | sp.AN.Static,
                o6 = (0, sp.yV)(function(ee, et) {
                    var en, er;
                    let ei = (0, ot.M)(),
                        {
                            id: es = `headlessui-menu-items-${ei}`,
                            ...eo
                        } = ee,
                        [eu, ec] = oX("Menu.Items"),
                        ed = (0, sw.T)(eu.itemsRef, et),
                        ep = oB(eu.itemsRef),
                        eh = sN(),
                        ef = sm(),
                        em = null !== ef ? ef === sf.Open : 0 === eu.menuState;
                    (0, eE.useEffect)(() => {
                        let ee = eu.itemsRef.current;
                        ee && 0 === eu.menuState && ee !== (null == ep ? void 0 : ep.activeElement) && ee.focus({
                            preventScroll: !0
                        })
                    }, [eu.menuState, eu.itemsRef, ep]), oH({
                        container: eu.itemsRef.current,
                        enabled: 0 === eu.menuState,
                        accept: ee => "menuitem" === ee.getAttribute("role") ? NodeFilter.FILTER_REJECT : ee.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT,
                        walk(ee) {
                            ee.setAttribute("role", "none")
                        }
                    });
                    let ex = (0, sR.z)(ee => {
                            var et, en;
                            switch (eh.dispose(), ee.key) {
                                case or.R.Space:
                                    if ("" !== eu.searchQuery) return ee.preventDefault(), ee.stopPropagation(), ec({
                                        type: 3,
                                        value: ee.key
                                    });
                                case or.R.Enter:
                                    if (ee.preventDefault(), ee.stopPropagation(), ec({
                                            type: 1
                                        }), null !== eu.activeItemIndex) {
                                        let {
                                            dataRef: ee
                                        } = eu.items[eu.activeItemIndex];
                                        null == (en = null == (et = ee.current) ? void 0 : et.domRef.current) || en.click()
                                    }(0, oc.wI)(eu.buttonRef.current);
                                    break;
                                case or.R.ArrowDown:
                                    return ee.preventDefault(), ee.stopPropagation(), ec({
                                        type: 2,
                                        focus: os.Next
                                    });
                                case or.R.ArrowUp:
                                    return ee.preventDefault(), ee.stopPropagation(), ec({
                                        type: 2,
                                        focus: os.Previous
                                    });
                                case or.R.Home:
                                case or.R.PageUp:
                                    return ee.preventDefault(), ee.stopPropagation(), ec({
                                        type: 2,
                                        focus: os.First
                                    });
                                case or.R.End:
                                case or.R.PageDown:
                                    return ee.preventDefault(), ee.stopPropagation(), ec({
                                        type: 2,
                                        focus: os.Last
                                    });
                                case or.R.Escape:
                                    ee.preventDefault(), ee.stopPropagation(), ec({
                                        type: 1
                                    }), (0, sj.k)().nextFrame(() => {
                                        var ee;
                                        return null == (ee = eu.buttonRef.current) ? void 0 : ee.focus({
                                            preventScroll: !0
                                        })
                                    });
                                    break;
                                case or.R.Tab:
                                    ee.preventDefault(), ee.stopPropagation(), ec({
                                        type: 1
                                    }), (0, sj.k)().nextFrame(() => {
                                        (0, oc.EO)(eu.buttonRef.current, ee.shiftKey ? oc.TO.Previous : oc.TO.Next)
                                    });
                                    break;
                                default:
                                    1 === ee.key.length && (ec({
                                        type: 3,
                                        value: ee.key
                                    }), eh.setTimeout(() => ec({
                                        type: 4
                                    }), 350))
                            }
                        }),
                        eg = (0, sR.z)(ee => {
                            ee.key === or.R.Space && ee.preventDefault()
                        }),
                        ev = (0, eE.useMemo)(() => ({
                            open: 0 === eu.menuState
                        }), [eu]),
                        ey = {
                            "aria-activedescendant": null === eu.activeItemIndex || null == (en = eu.items[eu.activeItemIndex]) ? void 0 : en.id,
                            "aria-labelledby": null == (er = eu.buttonRef.current) ? void 0 : er.id,
                            id: es,
                            onKeyDown: ex,
                            onKeyUp: eg,
                            role: "menu",
                            tabIndex: 0,
                            ref: ed
                        };
                    return (0, sp.sY)({
                        ourProps: ey,
                        theirProps: eo,
                        slot: ev,
                        defaultTag: o5,
                        features: o8,
                        visible: em,
                        name: "Menu.Items"
                    })
                }),
                o9 = eE.Fragment,
                o7 = Object.assign(o2, {
                    Button: o3,
                    Items: o6,
                    Item: (0, sp.yV)(function(ee, et) {
                        let en = (0, ot.M)(),
                            {
                                id: er = `headlessui-menu-item-${en}`,
                                disabled: ei = !1,
                                ...es
                            } = ee,
                            [eo, eu] = oX("Menu.Item"),
                            ec = null !== eo.activeItemIndex && eo.items[eo.activeItemIndex].id === er,
                            ed = (0, eE.useRef)(null),
                            ep = (0, sw.T)(et, ed);
                        (0, sv.e)(() => {
                            if (0 !== eo.menuState || !ec || 0 === eo.activationTrigger) return;
                            let ee = (0, sj.k)();
                            return ee.requestAnimationFrame(() => {
                                var ee, et;
                                null == (et = null == (ee = ed.current) ? void 0 : ee.scrollIntoView) || et.call(ee, {
                                    block: "nearest"
                                })
                            }), ee.dispose
                        }, [ed, ec, eo.menuState, eo.activationTrigger, eo.activeItemIndex]);
                        let eh = (0, eE.useRef)({
                            disabled: ei,
                            domRef: ed
                        });
                        (0, sv.e)(() => {
                            eh.current.disabled = ei
                        }, [eh, ei]), (0, sv.e)(() => {
                            var ee, et;
                            eh.current.textValue = null == (et = null == (ee = ed.current) ? void 0 : ee.textContent) ? void 0 : et.toLowerCase()
                        }, [eh, ed]), (0, sv.e)(() => (eu({
                            type: 5,
                            id: er,
                            dataRef: eh
                        }), () => eu({
                            type: 6,
                            id: er
                        })), [eh, er]);
                        let ef = (0, sR.z)(() => {
                                eu({
                                    type: 1
                                })
                            }),
                            em = (0, sR.z)(ee => {
                                if (ei) return ee.preventDefault();
                                eu({
                                    type: 1
                                }), (0, oc.wI)(eo.buttonRef.current)
                            }),
                            ex = (0, sR.z)(() => {
                                if (ei) return eu({
                                    type: 2,
                                    focus: os.Nothing
                                });
                                eu({
                                    type: 2,
                                    focus: os.Specific,
                                    id: er
                                })
                            }),
                            eg = o_(),
                            ev = (0, sR.z)(ee => eg.update(ee)),
                            ey = (0, sR.z)(ee => {
                                !eg.wasMoved(ee) || ei || ec || eu({
                                    type: 2,
                                    focus: os.Specific,
                                    id: er,
                                    trigger: 0
                                })
                            }),
                            eb = (0, sR.z)(ee => {
                                eg.wasMoved(ee) && !ei && ec && eu({
                                    type: 2,
                                    focus: os.Nothing
                                })
                            }),
                            e_ = (0, eE.useMemo)(() => ({
                                active: ec,
                                disabled: ei,
                                close: ef
                            }), [ec, ei, ef]);
                        return (0, sp.sY)({
                            ourProps: {
                                id: er,
                                ref: ep,
                                role: "menuitem",
                                tabIndex: !0 === ei ? void 0 : -1,
                                "aria-disabled": !0 === ei || void 0,
                                disabled: void 0,
                                onClick: em,
                                onFocus: ex,
                                onPointerEnter: ev,
                                onMouseEnter: ev,
                                onPointerMove: ey,
                                onMouseMove: ey,
                                onPointerLeave: eb,
                                onMouseLeave: eb
                            },
                            theirProps: es,
                            slot: e_,
                            defaultTag: o9,
                            name: "Menu.Item"
                        })
                    })
                }),
                lt = ee => "object" == typeof ee && null != ee && 1 === ee.nodeType,
                ln = (ee, et) => (!et || "hidden" !== ee) && "visible" !== ee && "clip" !== ee,
                lr = (ee, et) => {
                    if (ee.clientHeight < ee.scrollHeight || ee.clientWidth < ee.scrollWidth) {
                        let en = getComputedStyle(ee, null);
                        return ln(en.overflowY, et) || ln(en.overflowX, et) || (ee => {
                            let et = (ee => {
                                if (!ee.ownerDocument || !ee.ownerDocument.defaultView) return null;
                                try {
                                    return ee.ownerDocument.defaultView.frameElement
                                } catch (ee) {
                                    return null
                                }
                            })(ee);
                            return !!et && (et.clientHeight < ee.scrollHeight || et.clientWidth < ee.scrollWidth)
                        })(ee)
                    }
                    return !1
                },
                li = (ee, et, en, er, ei, es, eo, eu) => es < ee && eo > et || es > ee && eo < et ? 0 : es <= ee && eu <= en || eo >= et && eu >= en ? es - ee - er : eo > et && eu < en || es < ee && eu > en ? eo - et + ei : 0,
                ls = ee => {
                    let et = ee.parentElement;
                    return null == et ? ee.getRootNode().host || null : et
                };
            var lo = (ee, et) => {
                var en, er, ei, es, eo, eu;
                if ("undefined" == typeof document) return [];
                let {
                    scrollMode: ec,
                    block: ed,
                    inline: ep,
                    boundary: eh,
                    skipOverflowHiddenElements: ef
                } = et, em = "function" == typeof eh ? eh : ee => ee !== eh;
                if (!lt(ee)) throw TypeError("Invalid target");
                let ex = document.scrollingElement || document.documentElement,
                    eg = [],
                    ev = ee;
                for (; lt(ev) && em(ev);) {
                    if ((ev = ls(ev)) === ex) {
                        eg.push(ev);
                        break
                    }
                    null != ev && ev === document.body && lr(ev) && !lr(document.documentElement) || null != ev && lr(ev, ef) && eg.push(ev)
                }
                let ey = null != (er = null == (en = window.visualViewport) ? void 0 : en.width) ? er : innerWidth,
                    eb = null != (es = null == (ei = window.visualViewport) ? void 0 : ei.height) ? es : innerHeight,
                    e_ = null != (eo = window.scrollX) ? eo : pageXOffset,
                    ew = null != (eu = window.scrollY) ? eu : pageYOffset,
                    {
                        height: ek,
                        width: ej,
                        top: eE,
                        right: eT,
                        bottom: eO,
                        left: eC
                    } = ee.getBoundingClientRect(),
                    eN = "start" === ed || "nearest" === ed ? eE : "end" === ed ? eO : eE + ek / 2,
                    eS = "center" === ep ? eC + ej / 2 : "end" === ep ? eT : eC,
                    eR = [];
                for (let ee = 0; ee < eg.length; ee++) {
                    let et = eg[ee],
                        {
                            height: en,
                            width: er,
                            top: ei,
                            right: es,
                            bottom: eo,
                            left: eu
                        } = et.getBoundingClientRect();
                    if ("if-needed" === ec && eE >= 0 && eC >= 0 && eO <= eb && eT <= ey && eE >= ei && eO <= eo && eC >= eu && eT <= es) break;
                    let eh = getComputedStyle(et),
                        ef = parseInt(eh.borderLeftWidth, 10),
                        em = parseInt(eh.borderTopWidth, 10),
                        ev = parseInt(eh.borderRightWidth, 10),
                        eI = parseInt(eh.borderBottomWidth, 10),
                        eA = 0,
                        eP = 0,
                        eZ = "offsetWidth" in et ? et.offsetWidth - et.clientWidth - ef - ev : 0,
                        eL = "offsetHeight" in et ? et.offsetHeight - et.clientHeight - em - eI : 0,
                        eD = "offsetWidth" in et ? 0 === et.offsetWidth ? 0 : er / et.offsetWidth : 0,
                        eM = "offsetHeight" in et ? 0 === et.offsetHeight ? 0 : en / et.offsetHeight : 0;
                    if (ex === et) eA = "start" === ed ? eN : "end" === ed ? eN - eb : "nearest" === ed ? li(ew, ew + eb, eb, em, eI, ew + eN, ew + eN + ek, ek) : eN - eb / 2, eP = "start" === ep ? eS : "center" === ep ? eS - ey / 2 : "end" === ep ? eS - ey : li(e_, e_ + ey, ey, ef, ev, e_ + eS, e_ + eS + ej, ej), eA = Math.max(0, eA + ew), eP = Math.max(0, eP + e_);
                    else {
                        eA = "start" === ed ? eN - ei - em : "end" === ed ? eN - eo + eI + eL : "nearest" === ed ? li(ei, eo, en, em, eI + eL, eN, eN + ek, ek) : eN - (ei + en / 2) + eL / 2, eP = "start" === ep ? eS - eu - ef : "center" === ep ? eS - (eu + er / 2) + eZ / 2 : "end" === ep ? eS - es + ev + eZ : li(eu, es, er, ef, ev + eZ, eS, eS + ej, ej);
                        let {
                            scrollLeft: ee,
                            scrollTop: ec
                        } = et;
                        eA = Math.max(0, Math.min(ec + eA / eM, et.scrollHeight - en / eM + eL)), eP = Math.max(0, Math.min(ee + eP / eD, et.scrollWidth - er / eD + eZ)), eN += ec - eA, eS += ee - eP
                    }
                    eR.push({
                        el: et,
                        top: eA,
                        left: eP
                    })
                }
                return eR
            };
            let ll = ee => {
                var er;
                return !1 === ee ? {
                    block: "end",
                    inline: "nearest"
                } : (er = ee, er === Object(er) && 0 !== Object.keys(er).length) ? ee : {
                    block: "start",
                    inline: "nearest"
                }
            };

            function lu(ee, et) {
                var er;
                let en = ee.isConnected || ee.ownerDocument.documentElement.contains(ee);
                if ("object" == typeof(er = et) && "function" == typeof er.behavior) return et.behavior(en ? lo(ee, et) : []);
                if (!en) return;
                let ei = ll(et),
                    es = lo(ee, ei),
                    eo = "scrollBehavior" in document.body.style;
                es.forEach(ee => {
                    let {
                        el: et,
                        top: en,
                        left: er
                    } = ee;
                    et.scroll && eo ? et.scroll({
                        top: en,
                        left: er,
                        behavior: ei.behavior
                    }) : (et.scrollTop = en, et.scrollLeft = er)
                })
            }

            function lc() {
                return (lc = Object.assign ? Object.assign.bind() : function(ee) {
                    for (var et = 1; et < arguments.length; et++) {
                        var en = arguments[et];
                        for (var er in en) Object.prototype.hasOwnProperty.call(en, er) && (ee[er] = en[er])
                    }
                    return ee
                }).apply(this, arguments)
            }
            var ld = en(5454),
                lp = en.n(ld),
                lh = {
                    CASE_SENSITIVE_EQUAL: 7,
                    EQUAL: 6,
                    STARTS_WITH: 5,
                    WORD_STARTS_WITH: 4,
                    CONTAINS: 3,
                    ACRONYM: 2,
                    MATCHES: 1,
                    NO_MATCH: 0
                };
            lm.rankings = lh;
            var lf = function(ee, et) {
                return String(ee.rankedValue).localeCompare(String(et.rankedValue))
            };

            function lm(ee, et, en) {
                void 0 === en && (en = {});
                var er = en,
                    ei = er.keys,
                    es = er.threshold,
                    eo = void 0 === es ? lh.MATCHES : es,
                    eu = er.baseSort,
                    ec = void 0 === eu ? lf : eu,
                    ed = er.sorter;
                return (void 0 === ed ? function(ee) {
                    return ee.sort(function(ee, et) {
                        return lb(ee, et, ec)
                    })
                } : ed)(ee.reduce(ep, [])).map(function(ee) {
                    return ee.item
                });

                function ep(ee, er, es) {
                    var eu = lx(er, ei, et, en),
                        ec = eu.rank,
                        ed = eu.keyThreshold;
                    return ec >= (void 0 === ed ? eo : ed) && ee.push(lc({}, eu, {
                        item: er,
                        index: es
                    })), ee
                }
            }

            function lx(ee, et, en, er) {
                if (!et) {
                    var ei = ee;
                    return {
                        rankedValue: ei,
                        rank: lg(ei, en, er),
                        keyIndex: -1,
                        keyThreshold: er.threshold
                    }
                }
                return lj(ee, et).reduce(function(ee, et, ei) {
                    var es = ee.rank,
                        eo = ee.rankedValue,
                        eu = ee.keyIndex,
                        ec = ee.keyThreshold,
                        ed = et.itemValue,
                        ep = et.attributes,
                        eh = lg(ed, en, er),
                        ef = eo,
                        em = ep.minRanking,
                        ex = ep.maxRanking,
                        eg = ep.threshold;
                    return eh < em && eh >= lh.MATCHES ? eh = em : eh > ex && (eh = ex), eh > es && (es = eh, eu = ei, ec = eg, ef = ed), {
                        rankedValue: ef,
                        rank: es,
                        keyIndex: eu,
                        keyThreshold: ec
                    }
                }, {
                    rankedValue: ee,
                    rank: lh.NO_MATCH,
                    keyIndex: -1,
                    keyThreshold: er.threshold
                })
            }

            function lg(ee, et, en) {
                return (ee = l_(ee, en), (et = l_(et, en)).length > ee.length) ? lh.NO_MATCH : ee === et ? lh.CASE_SENSITIVE_EQUAL : (ee = ee.toLowerCase()) === (et = et.toLowerCase()) ? lh.EQUAL : ee.startsWith(et) ? lh.STARTS_WITH : ee.includes(" " + et) ? lh.WORD_STARTS_WITH : ee.includes(et) ? lh.CONTAINS : 1 === et.length ? lh.NO_MATCH : lv(ee).includes(et) ? lh.ACRONYM : ly(ee, et)
            }

            function lv(ee) {
                var et = "";
                return ee.split(" ").forEach(function(ee) {
                    ee.split("-").forEach(function(ee) {
                        et += ee.substr(0, 1)
                    })
                }), et
            }

            function ly(ee, et) {
                var en = 0,
                    er = 0;

                function ei(ee, et, er) {
                    for (var ei = er, es = et.length; ei < es; ei++)
                        if (et[ei] === ee) return en += 1, ei + 1;
                    return -1
                }

                function es(ee) {
                    var er = 1 / ee,
                        ei = en / et.length;
                    return lh.MATCHES + ei * er
                }
                var eo = ei(et[0], ee, 0);
                if (eo < 0) return lh.NO_MATCH;
                er = eo;
                for (var eu = 1, ec = et.length; eu < ec; eu++)
                    if (!((er = ei(et[eu], ee, er)) > -1)) return lh.NO_MATCH;
                return es(er - eo)
            }

            function lb(ee, et, en) {
                var er = -1,
                    ei = 1,
                    es = ee.rank,
                    eo = ee.keyIndex,
                    eu = et.rank,
                    ec = et.keyIndex;
                return es !== eu ? es > eu ? er : ei : eo === ec ? en(ee, et) : eo < ec ? er : ei
            }

            function l_(ee, et) {
                return ee = "" + ee, et.keepDiacritics || (ee = lp()(ee)), ee
            }

            function lw(ee, et) {
                var en;
                if ("object" == typeof et && (et = et.key), "function" == typeof et) en = et(ee);
                else if (null == ee) en = null;
                else if (Object.hasOwnProperty.call(ee, et)) en = ee[et];
                else {
                    if (et.includes(".")) return lk(et, ee);
                    en = null
                }
                return null == en ? [] : Array.isArray(en) ? en : [String(en)]
            }

            function lk(ee, et) {
                for (var en = ee.split("."), er = [et], ei = 0, es = en.length; ei < es; ei++) {
                    for (var eo = en[ei], eu = [], ec = 0, ed = er.length; ec < ed; ec++) {
                        var ep = er[ec];
                        if (null != ep) {
                            if (Object.hasOwnProperty.call(ep, eo)) {
                                var eh = ep[eo];
                                null != eh && eu.push(eh)
                            } else "*" === eo && (eu = eu.concat(ep))
                        }
                    }
                    er = eu
                }
                if (Array.isArray(er[0])) {
                    var ef = [];
                    return ef.concat.apply(ef, er)
                }
                return er
            }

            function lj(ee, et) {
                for (var en = [], er = 0, ei = et.length; er < ei; er++)
                    for (var es = et[er], eo = lT(es), eu = lw(ee, es), ec = 0, ed = eu.length; ec < ed; ec++) en.push({
                        itemValue: eu[ec],
                        attributes: eo
                    });
                return en
            }
            var lE = {
                maxRanking: 1 / 0,
                minRanking: -1 / 0
            };

            function lT(ee) {
                return "string" == typeof ee ? lE : lc({}, lE, ee)
            }
            var lO = en(6498),
                lC = Object.defineProperty,
                lN = Object.defineProperties,
                lS = Object.getOwnPropertyDescriptors,
                lR = Object.getOwnPropertySymbols,
                lI = Object.prototype.hasOwnProperty,
                lA = Object.prototype.propertyIsEnumerable,
                lP = (ee, et, en) => et in ee ? lC(ee, et, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: en
                }) : ee[et] = en,
                lZ = (ee, et) => {
                    for (var en in et || (et = {})) lI.call(et, en) && lP(ee, en, et[en]);
                    if (lR)
                        for (var en of lR(et)) lA.call(et, en) && lP(ee, en, et[en]);
                    return ee
                },
                lL = (ee, et) => lN(ee, lS(et)),
                lD = (ee, et) => {
                    var en = {};
                    for (var er in ee) lI.call(ee, er) && 0 > et.indexOf(er) && (en[er] = ee[er]);
                    if (null != ee && lR)
                        for (var er of lR(ee)) 0 > et.indexOf(er) && lA.call(ee, er) && (en[er] = ee[er]);
                    return en
                },
                lM = (ee, et, en) => new Promise((er, ei) => {
                    var es = ee => {
                            try {
                                eu(en.next(ee))
                            } catch (ee) {
                                ei(ee)
                            }
                        },
                        eo = ee => {
                            try {
                                eu(en.throw(ee))
                            } catch (ee) {
                                ei(ee)
                            }
                        },
                        eu = ee => ee.done ? er(ee.value) : Promise.resolve(ee.value).then(es, eo);
                    eu((en = en.apply(ee, et)).next())
                }),
                lz = (0, eE.createContext)({}),
                lF = (0, eE.createContext)(ee => ee),
                l$ = (0, eE.createContext)(null),
                lU = new WeakMap,
                lW = (0, eE.createContext)(lU),
                lV = () => (0, eE.useContext)(lz),
                lH = () => (0, eE.useContext)(lF),
                lB = () => (0, eE.useContext)(l$),
                lG = () => (0, eE.useContext)(lW),
                lK = ({
                    children: ee
                }) => {
                    let [et, en] = (0, eE.useState)({}), er = (0, eE.useRef)(null);
                    return uK && !er.current && (er.current = new IntersectionObserver(ee => {
                        en(et => {
                            let en = lZ({}, et);
                            for (let et of ee)
                                if ((null == et ? void 0 : et.rootBounds) && lU.has(et.target)) {
                                    let [ee, er] = lU.get(et.target), ei = et.boundingClientRect.y + et.boundingClientRect.height <= et.rootBounds.y + et.rootBounds.height, es = et.intersectionRatio > 0;
                                    en[ee] = {
                                        index: er,
                                        aboveHalfViewport: ei,
                                        insideHalfViewport: es
                                    }
                                }
                            let er = "",
                                ei = 1 / 0,
                                es = -1;
                            for (let ee in en) en[ee].isActive = !1, en[ee].insideHalfViewport && en[ee].index < ei && (ei = en[ee].index, er = ee), ei === 1 / 0 && en[ee].aboveHalfViewport && en[ee].index > es && (es = en[ee].index, er = ee);
                            return en[er] && (en[er].isActive = !0), en
                        })
                    }, {
                        rootMargin: "0px 0px -50%",
                        threshold: [0, 1]
                    })), (0, nk.jsx)(lz.Provider, {
                        value: et,
                        children: (0, nk.jsx)(lF.Provider, {
                            value: en,
                            children: (0, nk.jsx)(lW.Provider, {
                                value: lU,
                                children: (0, nk.jsx)(l$.Provider, {
                                    value: er.current,
                                    children: ee
                                })
                            })
                        })
                    })
                },
                lq = (0, eE.createContext)({
                    menu: !1,
                    setMenu: () => !1
                }),
                lY = () => (0, eE.useContext)(lq),
                lQ = lq.Provider,
                lJ = (0, eE.createContext)(lZ({
                    title: "",
                    frontMatter: {}
                }, u2));

            function lX() {
                return (0, eE.useContext)(lJ)
            }
            var l0 = ({
                    children: ee,
                    value: {
                        themeConfig: et,
                        pageOpts: en
                    }
                }) => {
                    let [er, ei] = (0, eE.useState)(!1);
                    ek || (ek = lZ(lZ({}, u2), Object.fromEntries(Object.entries(et).map(([ee, et]) => [ee, et && "object" == typeof et && u4.includes(ee) ? lZ(lZ({}, u2[ee]), et) : et]))));
                    let es = lL(lZ(lL(lZ({}, ek), {
                            flexsearch: en.flexsearch
                        }), "boolean" == typeof en.newNextLinkBehavior && {
                            newNextLinkBehavior: en.newNextLinkBehavior
                        }), {
                            title: en.title,
                            frontMatter: en.frontMatter
                        }),
                        {
                            nextThemes: eo
                        } = es;
                    return (0, nk.jsx)(nS, {
                        attribute: "class",
                        disableTransitionOnChange: !0,
                        defaultTheme: eo.defaultTheme,
                        storageKey: eo.storageKey,
                        forcedTheme: eo.forcedTheme,
                        children: (0, nk.jsx)(lJ.Provider, {
                            value: es,
                            children: (0, nk.jsx)(lQ, {
                                value: {
                                    menu: er,
                                    setMenu: ei
                                },
                                children: ee
                            })
                        })
                    })
                },
                l1 = (0, eE.createContext)(ee => ee),
                l2 = () => (0, eE.useContext)(l1),
                l4 = l1.Provider,
                l3 = Number("13.4.8".split(".")[0]),
                l5 = (0, eE.forwardRef)(function(ee, et) {
                    var en = ee,
                        {
                            href: er = "",
                            children: ei,
                            newWindow: es
                        } = en,
                        eo = lD(en, ["href", "children", "newWindow"]);
                    let eu = lX();
                    return es ? (0, nk.jsxs)("a", lL(lZ({
                        ref: et,
                        href: er,
                        target: "_blank",
                        rel: "noreferrer"
                    }, eo), {
                        children: [ei, (0, nk.jsx)("span", {
                            className: "nx-sr-only nx-select-none",
                            children: " (opens in a new tab)"
                        })]
                    })) : er ? l3 > 12 || eu.newNextLinkBehavior ? (0, nk.jsx)(nw(), lL(lZ({
                        ref: et,
                        href: er
                    }, eo), {
                        children: ei
                    })) : (0, nk.jsx)(nw(), {
                        href: er,
                        passHref: !0,
                        children: (0, nk.jsx)("a", lL(lZ({
                            ref: et
                        }, eo), {
                            children: ei
                        }))
                    }) : (0, nk.jsx)("a", lL(lZ({
                        ref: et
                    }, eo), {
                        children: ei
                    }))
                });
            l5.displayName = "Anchor";
            var l8 = ({
                repository: ee = "",
                title: et,
                labels: en
            }) => {
                let er = aH()(ee);
                if (!er) throw Error("Invalid `docsRepositoryBase` URL!");
                return er.resource.includes("gitlab") ? `${er.protocol}://${er.resource}/${er.owner}/${er.name}/-/issues/new?issue[title]=${encodeURIComponent(et)}${en?`&issue[description]=/label${encodeURIComponent(` ~${en}
`)}`:""}` : er.resource.includes("github") ? `${er.protocol}://${er.resource}/${er.owner}/${er.name}/issues/new?title=${encodeURIComponent(et)}&labels=${en||""}` : "#"
            };

            function l6(ee, et) {
                return ee ? "function" != typeof ee ? ee : (0, nk.jsx)(ee, lZ({}, et)) : null
            }

            function l9(ee, et = {}) {
                let en = "function" == typeof ee ? ee(et) : ee;
                return en || ""
            }

            function l7(ee) {
                let et = (0, eE.useRef)(null),
                    en = (0, eE.useRef)(null),
                    er = (0, eE.useRef)(),
                    ei = (0, eE.useCallback)(() => {
                        var ei;
                        et.current && en.current && (null == (ei = er.current) || ei.call(er), er.current = sl(et.current, en.current, ee).destroy)
                    }, [et, en, er, ee]);
                return (0, eE.useMemo)(() => [ee => {
                    et.current = ee, ei()
                }, ee => {
                    en.current = ee, ei()
                }], [et, en, ei])
            }

            function ut(ee = "") {
                let et = lX(),
                    en = aH()(et.docsRepositoryBase || "");
                if (!en) throw Error("Invalid `docsRepositoryBase` URL!");
                return `${en.href}/${ee}`
            }

            function un() {
                let {
                    banner: ee
                } = lX();
                if (!ee.text) return null;
                let et = `try{if(localStorage.getItem(${JSON.stringify(ee.key)})==='0'){document.body.classList.add('nextra-banner-hidden')}}catch(e){}`;
                return (0, nk.jsxs)(nk.Fragment, {
                    children: [(0, nk.jsx)("script", {
                        dangerouslySetInnerHTML: {
                            __html: et
                        }
                    }), (0, nk.jsxs)("div", {
                        className: (0, eT.Z)("nextra-banner-container nx-sticky nx-top-0 nx-z-20 nx-flex nx-items-center md:nx-relative", "nx-h-[var(--frvgs-banner-height)] [body.nextra-banner-hidden_&]:nx-hidden", "nx-text-slate-50 dark:nx-text-white nx-bg-neutral-900 dark:nx-bg-[linear-gradient(1deg,#383838,#212121)]", "nx-px-2 ltr:nx-pl-10 rtl:nx-pr-10 print:nx-hidden"),
                        children: [(0, nk.jsx)("div", {
                            className: "nx-w-full nx-truncate nx-px-4 nx-text-center nx-font-medium nx-text-sm",
                            children: l6(ee.text)
                        }), ee.dismissible && (0, nk.jsx)("button", {
                            type: "button",
                            "aria-label": "Dismiss banner",
                            className: "nx-w-8 nx-h-8 nx-opacity-80 hover:nx-opacity-100",
                            onClick: () => {
                                try {
                                    localStorage.setItem(ee.key, "0")
                                } catch (ee) {}
                                document.body.classList.add("nextra-banner-hidden")
                            },
                            children: (0, nk.jsx)(eI.b0, {
                                className: "nx-mx-auto nx-h-4 nx-w-4"
                            })
                        })]
                    })]
                })
            }

            function ur({
                activePath: ee
            }) {
                return (0, nk.jsx)("div", {
                    className: "nextra-breadcrumb nx-mt-1.5 nx-flex nx-items-center nx-gap-1 nx-overflow-hidden nx-text-sm nx-text-gray-500 dark:nx-text-gray-400 contrast-more:nx-text-current",
                    children: ee.map((et, en) => {
                        let er = !et.children || et.withIndexPage,
                            ei = en === ee.length - 1;
                        return (0, nk.jsxs)(eE.Fragment, {
                            children: [en > 0 && (0, nk.jsx)(eI.LZ, {
                                className: "nx-w-3.5 nx-shrink-0"
                            }), (0, nk.jsx)("div", {
                                className: (0, eT.Z)("nx-whitespace-nowrap nx-transition-colors", ei ? "nx-font-medium nx-text-gray-700 contrast-more:nx-font-bold contrast-more:nx-text-current dark:nx-text-gray-100 contrast-more:dark:nx-text-current" : ["nx-min-w-[24px] nx-overflow-hidden nx-text-ellipsis", er && "hover:nx-text-gray-900 dark:hover:nx-text-gray-100"]),
                                title: et.title,
                                children: er && !ei ? (0, nk.jsx)(l5, {
                                    href: et.route,
                                    children: et.title
                                }) : et.title
                            })]
                        }, et.route + et.name)
                    })
                })
            }

            function ui({
                children: ee,
                className: et,
                isOpen: en,
                horizontal: er = !1
            }) {
                let ei = (0, eE.useRef)(null),
                    es = (0, eE.useRef)(null),
                    eo = (0, eE.useRef)(0),
                    eu = (0, eE.useRef)(en),
                    ec = (0, eE.useRef)(!0);
                return (0, eE.useEffect)(() => {
                    let ee = ei.current,
                        et = es.current,
                        eu = eo.current;
                    eu && clearTimeout(eu), !ec.current && ee && et && (ee.classList.toggle("nx-duration-500", !en), ee.classList.toggle("nx-duration-300", en), er ? (et.style.width = `${et.clientWidth}px`, ee.style.width = `${et.clientWidth}px`) : ee.style.height = `${et.clientHeight}px`, en ? eo.current = window.setTimeout(() => {
                        ee.style.removeProperty("height")
                    }, 300) : setTimeout(() => {
                        er ? ee.style.width = "0px" : ee.style.height = "0px"
                    }, 0))
                }, [er, en]), (0, eE.useEffect)(() => {
                    ec.current = !1
                }, []), (0, nk.jsx)("div", {
                    ref: ei,
                    className: "nx-transform-gpu nx-overflow-hidden nx-transition-all nx-ease-in-out motion-reduce:nx-transition-none",
                    style: eu.current || er ? void 0 : {
                        height: 0
                    },
                    children: (0, nk.jsx)("div", {
                        ref: es,
                        className: (0, eT.Z)("nx-transition-opacity nx-duration-500 nx-ease-in-out motion-reduce:nx-transition-none", en ? "nx-opacity-100" : "nx-opacity-0", et),
                        children: ee
                    })
                })
            }
            var us = (0, eE.memo)(function({
                    value: ee,
                    match: et
                }) {
                    let en;
                    if (!ee) return null;
                    let er = ee.split(""),
                        ei = sd(et.trim()),
                        es = RegExp(ei.replaceAll(" ", "|"), "ig"),
                        eo = 0,
                        eu = [];
                    for (;
                        (en = es.exec(ee)) && 0 !== es.lastIndex;) {
                        let ee = er.splice(0, en.index - eo).join(""),
                            et = er.splice(0, es.lastIndex - en.index).join("");
                        eu.push(ee, (0, nk.jsx)("span", {
                            className: "nx-text-primary-600",
                            children: et
                        }, en.index)), eo = es.lastIndex
                    }
                    return (0, nk.jsxs)(nk.Fragment, {
                        children: [eu, er.join("")]
                    })
                }),
                uo = (0, eE.forwardRef)((ee, et) => {
                    var en = ee,
                        {
                            className: er,
                            suffix: ei
                        } = en,
                        es = lD(en, ["className", "suffix"]);
                    return (0, nk.jsxs)("div", {
                        className: "nx-relative nx-flex nx-items-center nx-text-gray-900 contrast-more:nx-text-gray-800 dark:nx-text-gray-300 contrast-more:dark:nx-text-gray-300",
                        children: [(0, nk.jsx)("input", lZ({
                            ref: et,
                            spellCheck: !1,
                            className: (0, eT.Z)(er, "nx-block nx-w-full nx-appearance-none nx-rounded-lg nx-px-3 nx-py-2 nx-transition-colors", "nx-text-base nx-leading-tight md:nx-text-sm", "nx-bg-black/[.05] dark:nx-bg-gray-50/10", "focus:nx-bg-white dark:focus:nx-bg-dark", "placeholder:nx-text-gray-500 dark:placeholder:nx-text-gray-400", "contrast-more:nx-border contrast-more:nx-border-current")
                        }, es)), ei]
                    })
                });
            uo.displayName = "Input";
            var ul = ["input", "select", "button", "textarea"];

            function uu({
                className: ee,
                overlayClassName: et,
                value: en,
                onChange: er,
                onActive: ei,
                loading: es,
                error: eo,
                results: eu
            }) {
                let [ec, ed] = (0, eE.useState)(!1), ep = lX(), [eh, ef] = (0, eE.useState)(0), em = (0, ej.useRouter)(), {
                    setMenu: ex
                } = lY(), eg = (0, eE.useRef)(null), ev = (0, eE.useRef)(null), [ey, eb] = (0, eE.useState)(!1), [e_, ew] = (0, eE.useState)(!0);
                (0, eE.useEffect)(() => {
                    ef(0)
                }, [en]), (0, eE.useEffect)(() => {
                    let ee = ee => {
                        let et = document.activeElement,
                            en = null == et ? void 0 : et.tagName.toLowerCase();
                        !eg.current || !en || ul.includes(en) || null != et && et.isContentEditable || ("/" === ee.key || "k" === ee.key && (ee.metaKey || ee.ctrlKey) ? (ee.preventDefault(), eg.current.focus()) : "Escape" === ee.key && (ed(!1), eg.current.blur()))
                    };
                    return window.addEventListener("keydown", ee), () => {
                        window.removeEventListener("keydown", ee)
                    }
                }, []);
                let ek = (0, eE.useCallback)(() => {
                        var ee;
                        null == (ee = eg.current) || ee.blur(), er(""), ed(!1), ex(!1)
                    }, [er, ex]),
                    eC = (0, eE.useCallback)(ee => {
                        let {
                            index: et
                        } = ee.currentTarget.dataset;
                        ef(Number(et))
                    }, []),
                    eN = (0, eE.useCallback)(function(ee) {
                        var et, en, er;
                        switch (ee.key) {
                            case "ArrowDown":
                                if (eh + 1 < eu.length) {
                                    let en = null == (et = ev.current) ? void 0 : et.querySelector(`li:nth-of-type(${eh+2}) > a`);
                                    en && (ee.preventDefault(), eC({
                                        currentTarget: en
                                    }), en.focus())
                                }
                                break;
                            case "ArrowUp":
                                if (eh - 1 >= 0) {
                                    let et = null == (en = ev.current) ? void 0 : en.querySelector(`li:nth-of-type(${eh}) > a`);
                                    et && (ee.preventDefault(), eC({
                                        currentTarget: et
                                    }), et.focus())
                                }
                                break;
                            case "Enter":
                                {
                                    let ee = eu[eh];ee && e_ && (em.push(ee.route), ek());
                                    break
                                }
                            case "Escape":
                                ed(!1), null == (er = eg.current) || er.blur()
                        }
                    }, [eh, eu, em, ek, eC, e_]),
                    eS = eO(),
                    eR = ec && !!en,
                    eA = (0, nk.jsx)(sQ, {
                        show: eS && (!ec || !!en),
                        as: eE.Fragment,
                        enter: "nx-transition-opacity",
                        enterFrom: "nx-opacity-0",
                        enterTo: "nx-opacity-100",
                        leave: "nx-transition-opacity",
                        leaveFrom: "nx-opacity-100",
                        leaveTo: "nx-opacity-0",
                        children: (0, nk.jsx)("kbd", {
                            className: (0, eT.Z)("nx-absolute nx-my-1.5 nx-select-none ltr:nx-right-1.5 rtl:nx-left-1.5", "nx-h-5 nx-rounded nx-bg-white nx-px-1.5 nx-font-mono nx-text-[10px] nx-font-medium nx-text-gray-500", "nx-border dark:nx-border-gray-100/20 dark:nx-bg-dark/50", "contrast-more:nx-border-current contrast-more:nx-text-current contrast-more:dark:nx-border-current", "nx-items-center nx-gap-1 nx-transition-opacity", en ? "nx-z-20 nx-flex nx-cursor-pointer hover:nx-opacity-70" : "nx-pointer-events-none nx-hidden sm:nx-flex"),
                            title: en ? "Clear" : void 0,
                            onClick: () => {
                                er("")
                            },
                            children: en && ey ? "ESC" : eS && (navigator.userAgent.includes("Macintosh") ? (0, nk.jsxs)(nk.Fragment, {
                                children: [(0, nk.jsx)("span", {
                                    className: "nx-text-xs",
                                    children: "⌘"
                                }), "K"]
                            }) : "CTRL K")
                        })
                    }),
                    eP = (0, eE.useCallback)(ee => {
                        ew("compositionend" === ee.type)
                    }, []);
                return (0, nk.jsxs)("div", {
                    className: (0, eT.Z)("nextra-search nx-relative md:nx-w-64", ee),
                    children: [eR && (0, nk.jsx)("div", {
                        className: "nx-fixed nx-inset-0 nx-z-10",
                        onClick: () => ed(!1)
                    }), (0, nk.jsx)(uo, {
                        ref: eg,
                        value: en,
                        onChange: ee => {
                            let {
                                value: et
                            } = ee.target;
                            er(et), ed(!!et)
                        },
                        onFocus: () => {
                            null == ei || ei(!0), eb(!0)
                        },
                        onBlur: () => {
                            eb(!1)
                        },
                        onCompositionStart: eP,
                        onCompositionEnd: eP,
                        type: "search",
                        placeholder: l9(ep.search.placeholder),
                        onKeyDown: eN,
                        suffix: eA
                    }), (0, nk.jsx)(sQ, {
                        show: eR,
                        as: sQ.Child,
                        leave: "nx-transition-opacity nx-duration-100",
                        leaveFrom: "nx-opacity-100",
                        leaveTo: "nx-opacity-0",
                        children: (0, nk.jsx)("ul", {
                            className: (0, eT.Z)("nextra-scrollbar", "nx-border nx-border-gray-200 nx-bg-white nx-text-gray-100 dark:nx-border-neutral-800 dark:nx-bg-neutral-900", "nx-absolute nx-top-full nx-z-20 nx-mt-2 nx-overflow-auto nx-overscroll-contain nx-rounded-xl nx-py-2.5 nx-shadow-xl", "nx-max-h-[min(calc(50vh-11rem-env(safe-area-inset-bottom)),400px)]", "md:nx-max-h-[min(calc(100vh-5rem-env(safe-area-inset-bottom)),400px)]", "nx-inset-x-0 ltr:md:nx-left-auto rtl:md:nx-right-auto", "contrast-more:nx-border contrast-more:nx-border-gray-900 contrast-more:dark:nx-border-gray-50", et),
                            ref: ev,
                            style: {
                                transition: "max-height .2s ease"
                            },
                            children: eo ? (0, nk.jsxs)("span", {
                                className: "nx-flex nx-select-none nx-justify-center nx-gap-2 nx-p-8 nx-text-center nx-text-sm nx-text-red-500",
                                children: [(0, nk.jsx)(eI.AV, {
                                    className: "nx-h-5 nx-w-5"
                                }), l9(ep.search.error)]
                            }) : es ? (0, nk.jsxs)("span", {
                                className: "nx-flex nx-select-none nx-justify-center nx-gap-2 nx-p-8 nx-text-center nx-text-sm nx-text-gray-400",
                                children: [(0, nk.jsx)(eI.L4, {
                                    className: "nx-h-5 nx-w-5 nx-animate-spin"
                                }), l6(ep.search.loading)]
                            }) : eu.length > 0 ? eu.map(({
                                route: ee,
                                prefix: et,
                                children: en,
                                id: er
                            }, ei) => (0, nk.jsxs)(eE.Fragment, {
                                children: [et, (0, nk.jsx)("li", {
                                    className: (0, eT.Z)("nx-mx-2.5 nx-break-words nx-rounded-md", "contrast-more:nx-border", ei === eh ? "nx-bg-primary-500/10 nx-text-primary-600 contrast-more:nx-border-primary-500" : "nx-text-gray-800 contrast-more:nx-border-transparent dark:nx-text-gray-300"),
                                    children: (0, nk.jsx)(l5, {
                                        className: "nx-block nx-scroll-m-12 nx-px-2.5 nx-py-2",
                                        href: ee,
                                        "data-index": ei,
                                        onFocus: eC,
                                        onMouseMove: eC,
                                        onClick: ek,
                                        onKeyDown: eN,
                                        children: en
                                    })
                                })]
                            }, er)) : l6(ep.search.emptyResult)
                        })
                    })]
                })
            }
            var uc = {},
                ud = new Map,
                up = (ee, et) => {
                    let en = ee + "@" + et;
                    if (ud.has(en)) return ud.get(en);
                    let er = uh(ee, et);
                    return ud.set(en, er), er
                },
                uh = (ee, et) => lM(void 0, null, function*() {
                    let en = yield fetch(`${ee}/_next/static/chunks/nextra-data-${et}.json`), er = yield en.json(), ei = new(sc()).Document({
                        cache: 100,
                        tokenize: "full",
                        document: {
                            id: "id",
                            index: "content",
                            store: ["title"]
                        },
                        context: {
                            resolution: 9,
                            depth: 2,
                            bidirectional: !0
                        }
                    }), es = new(sc()).Document({
                        cache: 100,
                        tokenize: "full",
                        document: {
                            id: "id",
                            index: "content",
                            tag: "pageId",
                            store: ["title", "content", "url", "display"]
                        },
                        context: {
                            resolution: 9,
                            depth: 2,
                            bidirectional: !0
                        }
                    }), eo = 0;
                    for (let [ee, et] of Object.entries(er)) {
                        let en = "";
                        for (let [er, ei] of (++eo, Object.entries(et.data))) {
                            let [eu, ec] = er.split("#"), ed = ee + (eu ? "#" + eu : ""), ep = ec || et.title, eh = ei.split("\n");
                            es.add(lZ({
                                id: ed,
                                url: ed,
                                title: ep,
                                pageId: `page_${eo}`,
                                content: ep
                            }, eh[0] && {
                                display: eh[0]
                            }));
                            for (let ee = 0; ee < eh.length; ee++) es.add({
                                id: `${ed}_${ee}`,
                                url: ed,
                                title: ep,
                                pageId: `page_${eo}`,
                                content: eh[ee]
                            });
                            en += ` ${ep} ${ei}`
                        }
                        ei.add({
                            id: eo,
                            title: et.title,
                            content: en
                        })
                    }
                    uc[et] = [ei, es]
                });

            function uf({
                className: ee
            }) {
                let {
                    locale: et = uG,
                    basePath: en
                } = (0, ej.useRouter)(), [er, ei] = (0, eE.useState)(!1), [es, eo] = (0, eE.useState)(!1), [eu, ec] = (0, eE.useState)([]), [ed, ep] = (0, eE.useState)(""), eh = ee => {
                    var en, er;
                    if (!ee) return;
                    let [ei, es] = uc[et], eo = (null == (en = ei.search(ee, 5, {
                        enrich: !0,
                        suggest: !0
                    })[0]) ? void 0 : en.result) || [], eu = [], ed = {};
                    for (let et = 0; et < eo.length; et++) {
                        let en = eo[et];
                        ed[et] = 0;
                        let ei = (null == (er = es.search(ee, 5, {
                                enrich: !0,
                                suggest: !0,
                                tag: `page_${en.id}`
                            })[0]) ? void 0 : er.result) || [],
                            ec = !0,
                            ep = {};
                        for (let er = 0; er < ei.length; er++) {
                            let {
                                doc: es
                            } = ei[er], eo = void 0 !== es.display;
                            eo && ed[et]++;
                            let {
                                url: eh,
                                title: ef
                            } = es, em = es.display || es.content;
                            ep[eh + "@" + em] || (ep[eh + "@" + em] = !0, eu.push({
                                _page_rk: et,
                                _section_rk: er,
                                route: eh,
                                prefix: ec && (0, nk.jsx)("div", {
                                    className: (0, eT.Z)("nx-mx-2.5 nx-mb-2 nx-mt-6 nx-select-none nx-border-b nx-border-black/10 nx-px-2.5 nx-pb-1.5 nx-text-xs nx-font-semibold nx-uppercase nx-text-gray-500 first:nx-mt-0 dark:nx-border-white/20 dark:nx-text-gray-300", "contrast-more:nx-border-gray-600 contrast-more:nx-text-gray-900 contrast-more:dark:nx-border-gray-50 contrast-more:dark:nx-text-gray-50"),
                                    children: en.doc.title
                                }),
                                children: (0, nk.jsxs)(nk.Fragment, {
                                    children: [(0, nk.jsx)("div", {
                                        className: "nx-text-base nx-font-semibold nx-leading-5",
                                        children: (0, nk.jsx)(us, {
                                            match: ee,
                                            value: ef
                                        })
                                    }), em && (0, nk.jsx)("div", {
                                        className: "excerpt nx-mt-1 nx-text-sm nx-leading-[1.35rem] nx-text-gray-600 dark:nx-text-gray-400 contrast-more:dark:nx-text-gray-50",
                                        children: (0, nk.jsx)(us, {
                                            match: ee,
                                            value: em
                                        })
                                    })]
                                })
                            }), ec = !1)
                        }
                    }
                    ec(eu.sort((ee, et) => ee._page_rk === et._page_rk ? ee._section_rk - et._section_rk : ed[ee._page_rk] !== ed[et._page_rk] ? ed[et._page_rk] - ed[ee._page_rk] : ee._page_rk - et._page_rk).map(ee => ({
                        id: `${ee._page_rk}_${ee._section_rk}`,
                        route: ee.route,
                        prefix: ee.prefix,
                        children: ee.children
                    })))
                }, ef = (0, eE.useCallback)(ee => lM(this, null, function*() {
                    if (ee && !uc[et]) {
                        ei(!0);
                        try {
                            yield up(en, et)
                        } catch (ee) {
                            eo(!0)
                        }
                        ei(!1)
                    }
                }), [et, en]), em = ee => lM(this, null, function*() {
                    if (ep(ee), !er) {
                        if (!uc[et]) {
                            ei(!0);
                            try {
                                yield up(en, et)
                            } catch (ee) {
                                eo(!0)
                            }
                            ei(!1)
                        }
                        eh(ee)
                    }
                });
                return (0, nk.jsx)(uu, {
                    loading: er,
                    error: es,
                    value: ed,
                    onChange: em,
                    onActive: ef,
                    className: ee,
                    overlayClassName: "nx-w-screen nx-min-h-[100px] nx-max-w-[min(calc(100vw-2rem),calc(100%+20rem))]",
                    results: eu
                })
            }

            function um({
                menu: ee
            }) {
                let et = lX();
                return (0, nk.jsxs)("footer", {
                    className: "nx-bg-gray-100 nx-pb-[env(safe-area-inset-bottom)] dark:nx-bg-neutral-900 print:nx-bg-transparent",
                    children: [(0, nk.jsx)("hr", {
                        className: "dark:nx-border-neutral-800"
                    }), (0, nk.jsx)("div", {
                        className: (0, eT.Z)("nx-mx-auto nx-flex nx-max-w-[90rem] nx-justify-center nx-py-12 nx-text-gray-600 dark:nx-text-gray-400 md:nx-justify-start", "nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]"),
                        children: l6(et.footer.text)
                    })]
                })
            }

            function ux() {
                var ee;
                let et = lX(),
                    {
                        resolvedTheme: en
                    } = nN(),
                    er = eO(),
                    ei = "function" == typeof et.head ? et.head({}) : et.head,
                    es = et.primaryHue,
                    {
                        dark: eo,
                        light: eu
                    } = "number" == typeof es ? {
                        dark: es,
                        light: es
                    } : es,
                    ec = et.frontMatter;
                return (0, nk.jsxs)(nk.Fragment, {
                    children: [(0, nk.jsx)(s9, lZ({
                        title: et.title,
                        description: ec.description,
                        canonical: ec.canonical,
                        openGraph: ec.openGraph
                    }, null == (ee = et.useNextSeoProps) ? void 0 : ee.call(et))), (0, nk.jsxs)(sX(), {
                        children: [et.faviconGlyph ? (0, nk.jsx)("link", {
                            rel: "icon",
                            href: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50' y='.9em' font-size='90' text-anchor='middle'>${et.faviconGlyph}</text><style>text{font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";fill:black}@media(prefers-color-scheme:dark){text{fill:white}}</style></svg>`
                        }) : null, er ? (0, nk.jsx)("meta", {
                            name: "theme-color",
                            content: "dark" === en ? "#111" : "#fff"
                        }) : (0, nk.jsxs)(nk.Fragment, {
                            children: [(0, nk.jsx)("meta", {
                                name: "theme-color",
                                content: "#fff",
                                media: "(prefers-color-scheme: light)"
                            }), (0, nk.jsx)("meta", {
                                name: "theme-color",
                                content: "#111",
                                media: "(prefers-color-scheme: dark)"
                            })]
                        }), (0, nk.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1.0, viewport-fit=cover"
                        }), (0, nk.jsx)("style", {
                            children: `
        :root {
          --frvgs-primary-hue: ${eu}deg;
          --frvgs-navbar-height: 4rem;
          --frvgs-menu-height: 3.75rem;
          --frvgs-banner-height: 2.5rem;
        }
        
        .dark {
          --frvgs-primary-hue: ${eo}deg;
        }
      `
                        }), ei]
                    })]
                })
            }

            function ug({
                options: ee,
                selected: et,
                onChange: en,
                title: er,
                className: ei
            }) {
                let [es, eo] = l7({
                    strategy: "fixed",
                    placement: "top-start",
                    modifiers: [{
                        name: "offset",
                        options: {
                            offset: [0, 10]
                        }
                    }, {
                        name: "sameWidth",
                        enabled: !0,
                        fn({
                            state: ee
                        }) {
                            ee.styles.popper.minWidth = `${ee.rects.reference.width}px`
                        },
                        phase: "beforeWrite",
                        requires: ["computeStyles"]
                    }]
                });
                return (0, nk.jsx)(oW, {
                    value: et,
                    onChange: en,
                    children: ({
                        open: en
                    }) => (0, nk.jsxs)(oW.Button, {
                        ref: es,
                        title: er,
                        className: (0, eT.Z)("nx-h-custom nx-bg-themeswitch dark:nx-bg-themeswitch nx-rounded-lg nx-px-2 nx-py-custom nx-transition-colors contrast-more:nx-border contrast-more:nx-border-current nx-text-left nx-text-xs nx-font-medium nx-text-gray-600 dark:nx-text-gray-400 mr-2", en ? "nx-text-gray-900 dark:nx-text-gray-50" : "hover:nx-bg-themeswitch dark:hover:nx-bg-themeswitch hover:nx-text-gray-900 dark:hover:nx-text-gray-50", ei),
                        children: [et.name, (0, nk.jsx)(uv, {
                            children: (0, nk.jsx)(sQ, {
                                ref: eo,
                                show: en,
                                as: oW.Options,
                                className: "nx-z-20 nx-max-h-64 nx-overflow-auto nx-rounded-md nx-ring-1 nx-ring-black/5 nx-bg-white nx-py-1 nx-text-sm nx-shadow-lg dark:nx-ring-white/20 dark:nx-bg-neutral-800",
                                leave: "nx-transition-opacity",
                                leaveFrom: "nx-opacity-100",
                                leaveTo: "nx-opacity-0",
                                children: ee.map(ee => (0, nk.jsxs)(oW.Option, {
                                    value: ee,
                                    className: ({
                                        active: ee
                                    }) => (0, eT.Z)(ee ? "nx-bg-primary-50 nx-text-primary-600 dark:nx-bg-primary-500/10" : "nx-text-gray-800 dark:nx-text-gray-100", "nx-relative nx-cursor-pointer nx-whitespace-nowrap nx-py-1.5", "nx-transition-colors ltr:nx-pl-3 ltr:nx-pr-9 rtl:nx-pr-3 rtl:nx-pl-9"),
                                    children: [ee.name, ee.key === et.key && (0, nk.jsx)("span", {
                                        className: "nx-absolute nx-inset-y-0 nx-flex nx-items-center ltr:nx-right-3 rtl:nx-left-3",
                                        children: (0, nk.jsx)(eI.nQ, {})
                                    })]
                                }, ee.key))
                            })
                        })]
                    })
                })
            }

            function uv(ee) {
                let et = eO();
                return et ? (0, oV.createPortal)(ee.children, document.body) : null
            }

            function uy({
                lite: ee,
                className: et
            }) {
                let en = lX(),
                    {
                        locale: er,
                        asPath: ei
                    } = (0, ej.useRouter)(),
                    es = en.i18n;
                if (!es.length) return null;
                let eo = es.find(ee => er === ee.locale);
                return (0, nk.jsx)(ug, {
                    title: "Change language",
                    className: et,
                    onChange: ee => {
                        let et = new Date(Date.now() + 31536e6);
                        document.cookie = `NEXT_LOCALE=${ee.key}; expires=${et.toUTCString()}; path=/`, location.href = (0, s7.addBasePath)(ei)
                    },
                    selected: {
                        key: (null == eo ? void 0 : eo.locale) || "",
                        name: (0, nk.jsxs)("span", {
                            className: "",
                            children: [(0, nk.jsx)(eI.n9, {}), (0, nk.jsx)("span", {
                                className: ee ? "nx-hidden" : "",
                                children: null == eo ? void 0 : eo.text
                            })]
                        })
                    },
                    options: es.map(ee => ({
                        key: ee.locale,
                        name: ee.text
                    }))
                })
            }
            var ub = {
                    link: (0, eT.Z)("nx-flex nx-max-w-[50%] nx-items-center nx-gap-1 nx-py-4 nx-text-base nx-font-medium nx-text-gray-600 nx-transition-colors [word-break:break-word] hover:nx-text-primary-600 dark:nx-text-gray-300 md:nx-text-lg"),
                    icon: (0, eT.Z)("nx-inline nx-h-5 nx-shrink-0")
                },
                u_ = ({
                    flatDirectories: ee,
                    currentIndex: et
                }) => {
                    let en = lX(),
                        er = en.navigation,
                        ei = "boolean" == typeof er ? {
                            prev: er,
                            next: er
                        } : er,
                        es = ei.prev && ee[et - 1],
                        eo = ei.next && ee[et + 1];
                    return (es && !es.isUnderCurrentDocsTree && (es = !1), eo && !eo.isUnderCurrentDocsTree && (eo = !1), es || eo) ? (0, nk.jsxs)("div", {
                        className: (0, eT.Z)("nx-mb-8 nx-flex nx-items-center nx-border-t nx-pt-8 dark:nx-border-neutral-800", "contrast-more:nx-border-neutral-400 dark:contrast-more:nx-border-neutral-400", "print:nx-hidden"),
                        children: [es && (0, nk.jsxs)(l5, {
                            href: es.route,
                            title: es.title,
                            className: (0, eT.Z)(ub.link, "ltr:nx-pr-4 rtl:nx-pl-4"),
                            children: [(0, nk.jsx)(eI.LZ, {
                                className: (0, eT.Z)(ub.icon, "ltr:nx-rotate-180")
                            }), es.title]
                        }), eo && (0, nk.jsxs)(l5, {
                            href: eo.route,
                            title: eo.title,
                            className: (0, eT.Z)(ub.link, "ltr:nx-ml-auto ltr:nx-pl-4 ltr:nx-text-right rtl:nx-mr-auto rtl:nx-pr-4 rtl:nx-text-left"),
                            children: [eo.title, (0, nk.jsx)(eI.LZ, {
                                className: (0, eT.Z)(ub.icon, "rtl:nx-rotate-180")
                            })]
                        })]
                    }) : null
                },
                uw = {
                    link: (0, eT.Z)("nx-text-sm contrast-more:nx-text-gray-700 contrast-more:dark:nx-text-gray-100"),
                    active: (0, eT.Z)("nx-font-medium nx-subpixel-antialiased"),
                    inactive: (0, eT.Z)("nx-text-gray-600 hover:nx-text-gray-800 dark:nx-text-gray-400 dark:hover:nx-text-gray-200")
                };

            function uk({
                className: ee,
                menu: et,
                children: en
            }) {
                let {
                    items: er
                } = et, ei = Object.fromEntries((et.children || []).map(ee => [ee.name, ee]));
                return (0, nk.jsx)("div", {
                    className: "nx-relative nx-inline-block",
                    children: (0, nk.jsxs)(o7, {
                        children: [(0, nk.jsx)(o7.Button, {
                            className: (0, eT.Z)(ee, "-nx-ml-2 nx-hidden nx-items-center nx-whitespace-nowrap nx-rounded nx-p-2 md:nx-inline-flex", uw.inactive),
                            children: en
                        }), (0, nk.jsx)(sQ, {
                            leave: "nx-transition-opacity",
                            leaveFrom: "nx-opacity-100",
                            leaveTo: "nx-opacity-0",
                            children: (0, nk.jsx)(o7.Items, {
                                className: "nx-absolute nx-right-0 nx-z-20 nx-mt-1 nx-max-h-64 nx-min-w-full nx-overflow-auto nx-rounded-md nx-ring-1 nx-ring-black/5 nx-bg-white nx-py-1 nx-text-sm nx-shadow-lg dark:nx-ring-white/20 dark:nx-bg-neutral-800",
                                tabIndex: 0,
                                children: Object.entries(er || {}).map(([ee, en]) => {
                                    var er;
                                    return (0, nk.jsx)(o7.Item, {
                                        children: (0, nk.jsx)(l5, {
                                            href: en.href || (null == (er = ei[ee]) ? void 0 : er.route) || et.route + "/" + ee,
                                            className: (0, eT.Z)("nx-relative nx-hidden nx-w-full nx-select-none nx-whitespace-nowrap nx-text-gray-600 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 md:nx-inline-block", "nx-py-1.5 nx-transition-colors ltr:nx-pl-3 ltr:nx-pr-9 rtl:nx-pr-3 rtl:nx-pl-9"),
                                            newWindow: en.newWindow,
                                            children: en.title || ee
                                        })
                                    }, ee)
                                })
                            })
                        })]
                    })
                })
            }

            function uj({
                flatDirectories: ee,
                items: et
            }) {
                let en = lX(),
                    er = eS(),
                    {
                        menu: ei,
                        setMenu: es
                    } = lY();
                return (0, nk.jsxs)("div", {
                    className: "nextra-nav-container nx-sticky nx-top-0 nx-z-20 nx-w-full nx-bg-transparent print:nx-hidden",
                    children: [(0, nk.jsx)("div", {
                        className: (0, eT.Z)("nextra-nav-container-blur", "nx-pointer-events-none nx-absolute nx-z-[-1] nx-h-full nx-w-full nx-bg-white dark:nx-bg-dark", "nx-shadow-[0_2px_4px_rgba(0,0,0,.02),0_1px_0_rgba(0,0,0,.06)] dark:nx-shadow-[0_-1px_0_rgba(255,255,255,.1)_inset]", "contrast-more:nx-shadow-[0_0_0_1px_#000] contrast-more:dark:nx-shadow-[0_0_0_1px_#fff]")
                    }), (0, nk.jsxs)("nav", {
                        className: "nx-mx-auto nx-flex nx-h-[var(--frvgs-navbar-height)] nx-max-w-[90rem] nx-items-center nx-justify-end nx-gap-2 nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]",
                        children: [en.logoLink ? (0, nk.jsx)(l5, {
                            href: "string" == typeof en.logoLink ? en.logoLink : "/",
                            className: "nx-flex nx-items-center hover:nx-opacity-75 ltr:nx-mr-auto rtl:nx-ml-auto",
                            children: l6(en.logo)
                        }) : (0, nk.jsx)("div", {
                            className: "nx-flex nx-items-center ltr:nx-mr-auto rtl:nx-ml-auto",
                            children: l6(en.logo)
                        }), et.map(ee => {
                            if ("hidden" === ee.display) return null;
                            if ("menu" === ee.type) {
                                let et = ee;
                                return (0, nk.jsxs)(uk, {
                                    className: (0, eT.Z)(uw.link, "nx-flex nx-gap-1", uw.inactive),
                                    menu: et,
                                    children: [et.title, (0, nk.jsx)(eI.LZ, {
                                        className: "nx-h-[18px] nx-min-w-[18px] nx-rounded-sm nx-p-0.5",
                                        pathClassName: "nx-origin-center nx-transition-transform nx-rotate-90"
                                    })]
                                }, et.title)
                            }
                            let et = ee,
                                en = et.href || et.route || "#";
                            et.children && (en = (et.withIndexPage ? et.route : et.firstChildRoute) || en);
                            let ei = et.route === er || er.startsWith(et.route + "/");
                            return (0, nk.jsxs)(l5, {
                                href: en,
                                className: (0, eT.Z)(uw.link, "nx-relative -nx-ml-2 nx-hidden nx-whitespace-nowrap nx-p-2 md:nx-inline-block", !ei || et.newWindow ? uw.inactive : uw.active),
                                newWindow: et.newWindow,
                                "aria-current": !et.newWindow && ei,
                                children: [(0, nk.jsx)("span", {
                                    className: "nx-absolute nx-inset-x-0 nx-text-center nxNavTxt",
                                    children: et.title
                                }), (0, nk.jsx)("span", {
                                    className: "nx-invisible nx-font-medium",
                                    children: et.title
                                })]
                            }, en)
                        }), l6(en.search.component, {
                            directories: ee,
                            className: "nx-hidden md:nx-inline-block mx-min-w-[200px]"
                        }), en.fivem.link ? (0, nk.jsx)(l5, {
                            className: "dark:hover:nx-bg-fivem hover:nx-bg-fivem nx-text-current nx-bg-black/[.05] dark:nx-bg-gray-50/10 nx-rounded-lg nx-px-2 nx-py-custom nx-transition-colors contrast-more:nx-border contrast-more:nx-border-current",
                            href: en.fivem.link,
                            newWindow: !0,
                            children: l6(en.fivem.icon)
                        }) : null, en.project.link ? (0, nk.jsx)(l5, {
                            className: "hidden md:block dark:hover:nx-bg-github hover:nx-bg-github nx-text-current nx-bg-black/[.05] dark:nx-bg-gray-50/10 nx-rounded-lg nx-px-2 nx-py-custom nx-transition-colors contrast-more:nx-border contrast-more:nx-border-current",
                            href: en.project.link,
                            newWindow: !0,
                            children: l6(en.project.icon)
                        }) : null, en.chat.link ? (0, nk.jsx)(l5, {
                            className: "dark:hover:nx-bg-discord hover:nx-bg-discord nx-text-current nx-bg-black/[.05] dark:nx-bg-gray-50/10 nx-rounded-lg nx-px-2 nx-py-custom nx-transition-colors contrast-more:nx-border contrast-more:nx-border-current",
                            href: en.chat.link,
                            newWindow: !0,
                            children: l6(en.chat.icon)
                        }) : null, en.youtube.link ? (0, nk.jsx)(l5, {
                            className: "hidden md:block dark:hover:nx-bg-youtube hover:nx-bg-youtube nx-text-current nx-bg-black/[.05] dark:nx-bg-gray-50/10 nx-rounded-lg nx-px-2 nx-py-custom nx-transition-colors contrast-more:nx-border contrast-more:nx-border-current",
                            href: en.youtube.link,
                            newWindow: !0,
                            children: l6(en.youtube.icon)
                        }) : null, (0, nk.jsxs)("div", {
                            children: [(0, nk.jsx)(uy, {}), en.darkMode && l6(en.themeSwitch.component)]
                        }), l6(en.navbar.extraContent), (0, nk.jsx)("button", {
                            type: "button",
                            "aria-label": "Menu",
                            className: "nextra-hamburger -nx-mr-2 nx-rounded nx-p-2 active:nx-bg-gray-400/20 md:nx-hidden",
                            onClick: () => es(!ei),
                            children: (0, nk.jsx)(eI.Oq, {
                                className: (0, eT.Z)({
                                    open: ei
                                })
                            })
                        })]
                    })]
                })
            }

            function uE() {
                let ee = lX(),
                    et = eO(),
                    {
                        asPath: en
                    } = (0, ej.useRouter)(),
                    {
                        content: er,
                        labels: ei
                    } = ee.notFound;
                return er ? (0, nk.jsx)("p", {
                    className: "nx-text-center",
                    children: (0, nk.jsx)(l5, {
                        href: l8({
                            repository: ee.docsRepositoryBase,
                            title: `Found broken \`${et?en:""}\` link. Please fix!`,
                            labels: ei
                        }),
                        newWindow: !0,
                        className: "nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]",
                        children: l6(er)
                    })
                }) : null
            }
            var uT = Object.create(null),
                uO = (0, eE.createContext)(null),
                uC = (0, eE.createContext)(null),
                uN = (0, eE.createContext)(0),
                uS = (0, eE.memo)(function(ee) {
                    let et = (0, eE.useContext)(uN);
                    return (0, nk.jsx)(uN.Provider, {
                        value: et + 1,
                        children: (0, nk.jsx)(uI, lZ({}, ee))
                    })
                }),
                uR = {
                    link: (0, eT.Z)("nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word]", "nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border"),
                    inactive: (0, eT.Z)("nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900", "dark:nx-text-neutral-400 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50", "contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50", "contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50"),
                    active: (0, eT.Z)("nx-bg-primary-100 nx-font-semibold nx-text-primary-800 dark:nx-bg-primary-400/10 dark:nx-text-primary-600", "contrast-more:nx-border-primary-500 contrast-more:dark:nx-border-primary-500"),
                    list: (0, eT.Z)("nx-flex nx-flex-col nx-gap-1"),
                    border: (0, eT.Z)("nx-relative before:nx-absolute before:nx-inset-y-1", 'before:nx-w-px before:nx-bg-gray-200 before:nx-content-[""] dark:before:nx-bg-neutral-800', "ltr:nx-pl-3 ltr:before:nx-left-0 rtl:nx-pr-3 rtl:before:nx-right-0")
                };

            function uI({
                item: ee,
                anchors: et
            }) {
                let en = eS(),
                    [er] = en.split("#"),
                    ei = [er, er + "/"].includes(ee.route + "/"),
                    es = ei || er.startsWith(ee.route + "/"),
                    eo = (0, eE.useContext)(uO),
                    eu = !!(null == eo ? void 0 : eo.startsWith(ee.route + "/")),
                    ec = (0, eE.useContext)(uN),
                    {
                        setMenu: ed
                    } = lY(),
                    ep = lX(),
                    {
                        theme: eh
                    } = ee,
                    ef = void 0 === uT[ee.route] ? ei || es || eu || (eh && "collapsed" in eh ? !eh.collapsed : ec < ep.sidebar.defaultMenuCollapseLevel) : uT[ee.route] || eu,
                    em = (0, eE.useState)({})[1];
                if ((0, eE.useEffect)(() => {
                        let et = () => {
                                (es || eu) && (uT[ee.route] = !0)
                            },
                            en = () => {
                                es && eu ? uT[ee.route] = !0 : delete uT[ee.route]
                            };
                        ep.sidebar.autoCollapse ? en() : et()
                    }, [es, eu, ee.route, ep.sidebar.autoCollapse]), "menu" === ee.type) {
                    let et = ee,
                        en = Object.fromEntries((et.children || []).map(ee => [ee.name, ee]));
                    ee.children = Object.entries(et.items || {}).map(([ee, er]) => {
                        let ei = en[ee] || lL(lZ({
                            name: ee
                        }, "locale" in et && {
                            locale: et.locale
                        }), {
                            route: et.route + "/" + ee
                        });
                        return lZ(lZ({}, ei), er)
                    })
                }
                let ex = "withIndexPage" in ee && ee.withIndexPage,
                    eg = ex ? l5 : "button";
                return (0, nk.jsxs)("li", {
                    className: (0, eT.Z)({
                        open: ef,
                        active: ei
                    }),
                    children: [(0, nk.jsxs)(eg, {
                        href: ex ? ee.route : void 0,
                        className: (0, eT.Z)("nx-items-center nx-justify-between nx-gap-2", !ex && "nx-text-left nx-w-full", uR.link, ei ? uR.active : uR.inactive),
                        onClick: et => {
                            let en = ["svg", "path"].includes(et.target.tagName.toLowerCase());
                            if (en && et.preventDefault(), ex) {
                                ei || en ? uT[ee.route] = !ef : (uT[ee.route] = !0, ed(!1)), em({});
                                return
                            }
                            ei || (uT[ee.route] = !ef, em({}))
                        },
                        children: [l6(ep.sidebar.titleComponent, {
                            title: ee.title,
                            type: ee.type,
                            route: ee.route
                        }), (0, nk.jsx)(eI.LZ, {
                            className: "nx-h-[18px] nx-min-w-[18px] nx-rounded-sm nx-p-0.5 hover:nx-bg-gray-800/5 dark:hover:nx-bg-gray-100/5",
                            pathClassName: (0, eT.Z)("nx-origin-center nx-transition-transform rtl:-nx-rotate-180", ef && "ltr:nx-rotate-90 rtl:nx-rotate-[-270deg]")
                        })]
                    }), (0, nk.jsx)(ui, {
                        className: "ltr:nx-pr-0 rtl:nx-pl-0 nx-pt-1",
                        isOpen: ef,
                        children: Array.isArray(ee.children) ? (0, nk.jsx)(uZ, {
                            className: (0, eT.Z)(uR.border, "ltr:nx-ml-3 rtl:nx-mr-3"),
                            directories: ee.children,
                            base: ee.route,
                            anchors: et
                        }) : null
                    })]
                })
            }

            function uA({
                title: ee
            }) {
                let et = lX();
                return (0, nk.jsx)("li", {
                    className: (0, eT.Z)("[word-break:break-word]", ee ? "nx-mt-5 nx-mb-2 nx-px-2 nx-py-1.5 nx-text-sm nx-font-semibold nx-text-gray-900 first:nx-mt-0 dark:nx-text-gray-100" : "nx-my-4"),
                    children: ee ? l6(et.sidebar.titleComponent, {
                        title: ee,
                        type: "separator",
                        route: ""
                    }) : (0, nk.jsx)("hr", {
                        className: "nx-mx-2 nx-border-t nx-border-gray-200 dark:nx-border-primary-100/10"
                    })
                })
            }

            function uP({
                item: ee,
                anchors: et
            }) {
                let en = eS(),
                    er = (0, eE.useContext)(uC),
                    ei = ee.route && [en, en + "/"].includes(ee.route + "/"),
                    es = lV(),
                    {
                        setMenu: eo
                    } = lY(),
                    eu = lX();
                return "separator" === ee.type ? (0, nk.jsx)(uA, {
                    title: ee.title
                }) : (0, nk.jsxs)("li", {
                    className: (0, eT.Z)(uR.list, {
                        active: ei
                    }),
                    children: [(0, nk.jsx)(l5, {
                        href: ee.href || ee.route,
                        newWindow: ee.newWindow,
                        className: (0, eT.Z)(uR.link, ei ? uR.active : uR.inactive),
                        onClick: () => {
                            eo(!1)
                        },
                        onFocus: () => {
                            null == er || er(ee.route)
                        },
                        onBlur: () => {
                            null == er || er(null)
                        },
                        children: l6(eu.sidebar.titleComponent, {
                            title: ee.title,
                            type: ee.type,
                            route: ee.route
                        })
                    }), ei && et.length > 0 && (0, nk.jsx)("ul", {
                        className: (0, eT.Z)(uR.list, uR.border, "ltr:nx-ml-3 rtl:nx-mr-3"),
                        children: et.map(({
                            id: ee,
                            value: et
                        }) => {
                            var en;
                            return (0, nk.jsx)("li", {
                                children: (0, nk.jsx)("a", {
                                    href: `#${ee}`,
                                    className: (0, eT.Z)(uR.link, 'nx-flex nx-gap-2 before:nx-opacity-25 before:nx-content-["#"]', (null == (en = es[ee]) ? void 0 : en.isActive) ? uR.active : uR.inactive),
                                    onClick: () => {
                                        eo(!1)
                                    },
                                    children: et
                                })
                            }, ee)
                        })
                    })]
                })
            }

            function uZ({
                directories: ee,
                anchors: et,
                className: en,
                onlyCurrentDocs: er
            }) {
                return (0, nk.jsx)("ul", {
                    className: (0, eT.Z)(uR.list, en),
                    children: ee.map(ee => !er || ee.isUnderCurrentDocsTree ? "menu" === ee.type || ee.children && (ee.children.length || !ee.withIndexPage) ? (0, nk.jsx)(uS, {
                        item: ee,
                        anchors: et
                    }, ee.name) : (0, nk.jsx)(uP, {
                        item: ee,
                        anchors: et
                    }, ee.name) : null)
                })
            }

            function uL({
                docsDirectories: ee,
                flatDirectories: et,
                fullDirectories: en,
                asPopover: er = !1,
                headings: ei,
                includePlaceholder: es
            }) {
                let eo = lX(),
                    {
                        menu: eu,
                        setMenu: ec
                    } = lY(),
                    ed = (0, ej.useRouter)(),
                    [ep, eh] = (0, eE.useState)(null),
                    [ef, em] = (0, eE.useState)(!0),
                    [ex, eg] = (0, eE.useState)(!1),
                    ev = (0, eE.useMemo)(() => ei.filter(ee => 2 === ee.depth), [ei]),
                    ey = (0, eE.useRef)(null),
                    eb = (0, eE.useRef)(null),
                    e_ = eO();
                (0, eE.useEffect)(() => {
                    eu ? document.body.classList.add("nx-overflow-hidden", "md:nx-overflow-auto") : document.body.classList.remove("nx-overflow-hidden", "md:nx-overflow-auto")
                }, [eu]), (0, eE.useEffect)(() => {
                    var ee;
                    let et = null == (ee = ey.current) ? void 0 : ee.querySelector("li.active");
                    if (et && (window.innerWidth > 767 || eu)) {
                        let ee = () => {
                            lu(et, {
                                block: "center",
                                inline: "center",
                                scrollMode: "always",
                                boundary: eb.current
                            })
                        };
                        eu ? setTimeout(ee, 300) : ee()
                    }
                }, [eu]), (0, eE.useEffect)(() => {
                    ec(!1)
                }, [ed.asPath, ec]);
                let ew = eo.i18n.length > 0,
                    ek = eo.darkMode || ew;
                return (0, nk.jsxs)(nk.Fragment, {
                    children: [es && er ? (0, nk.jsx)("div", {
                        className: "max-xl:nx-hidden nx-h-0 nx-w-64 nx-shrink-0"
                    }) : null, (0, nk.jsx)("div", {
                        className: (0, eT.Z)("motion-reduce:nx-transition-none [transition:background-color_1.5s_ease]", eu ? "nx-fixed nx-inset-0 nx-z-10 nx-bg-black/80 dark:nx-bg-black/60" : "nx-bg-transparent"),
                        onClick: () => ec(!1)
                    }), (0, nk.jsxs)("aside", {
                        className: (0, eT.Z)("nextra-sidebar-container nx-flex nx-flex-col", "md:nx-top-16 md:nx-shrink-0 motion-reduce:nx-transform-none", "nx-transform-gpu nx-transition-all nx-ease-in-out", "print:nx-hidden", ef ? "md:nx-w-64" : "md:nx-w-20", er ? "md:nx-hidden" : "md:nx-sticky md:nx-self-start", eu ? "max-md:[transform:translate3d(0,0,0)]" : "max-md:[transform:translate3d(0,-100%,0)]"),
                        ref: eb,
                        children: [(0, nk.jsx)("div", {
                            className: "nx-px-4 nx-pt-4 md:nx-hidden",
                            children: l6(eo.search.component, {
                                directories: et
                            })
                        }), (0, nk.jsx)(uO.Provider, {
                            value: ep,
                            children: (0, nk.jsx)(uC.Provider, {
                                value: ee => {
                                    eh(ee)
                                },
                                children: (0, nk.jsxs)("div", {
                                    className: (0, eT.Z)("nx-overflow-y-auto nx-overflow-x-hidden", "nx-p-4 nx-grow md:nx-h-[calc(100vh-var(--frvgs-navbar-height)-var(--frvgs-menu-height))]", ef ? "nextra-scrollbar" : "no-scrollbar"),
                                    ref: ey,
                                    children: [(!er || !ef) && (0, nk.jsx)(ui, {
                                        isOpen: ef,
                                        horizontal: !0,
                                        children: (0, nk.jsx)(uZ, {
                                            className: "nextra-menu-desktop max-md:nx-hidden",
                                            directories: ee,
                                            anchors: eo.toc.float ? [] : ev,
                                            onlyCurrentDocs: !0
                                        })
                                    }), e_ && window.innerWidth < 768 && (0, nk.jsx)(uZ, {
                                        className: "nextra-menu-mobile md:nx-hidden",
                                        directories: en,
                                        anchors: ev
                                    })]
                                })
                            })
                        }), ek && (0, nk.jsx)("div", {
                            className: (0, eT.Z)("nx-sticky nx-bottom-0", "nx-bg-white dark:nx-bg-dark", "nx-mx-4 nx-py-4 nx-shadow-[0_-12px_16px_#fff]", "nx-flex nx-items-center nx-gap-2", "dark:nx-border-neutral-800 dark:nx-shadow-[0_-12px_16px_#111]", "contrast-more:nx-border-neutral-400 contrast-more:nx-shadow-none contrast-more:dark:nx-shadow-none", ef ? (0, eT.Z)(ew && "nx-justify-end", "nx-border-t") : "nx-py-4 nx-flex-wrap nx-justify-center"),
                            "data-toggle-animation": ex ? ef ? "show" : "hide" : "off",
                            children: eo.sidebar.toggleButton && (0, nk.jsx)("button", {
                                title: ef ? "Hide sidebar" : "Show sidebar",
                                className: "max-md:nx-hidden nx-h-7 nx-rounded-md nx-transition-colors nx-text-gray-600 dark:nx-text-gray-400 nx-px-2 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50",
                                onClick: () => {
                                    em(!ef), eg(!0)
                                },
                                children: (0, nk.jsx)(eI.Qq, {
                                    isOpen: ef
                                })
                            })
                        })]
                    })]
                })
            }
            var uD = "reach-skip-nav",
                uM = "Skip to content";
            (0, eE.forwardRef)(function(ee, et) {
                var en = ee,
                    {
                        className: er,
                        id: ei,
                        label: es = uM,
                        styled: eo
                    } = en,
                    eu = lD(en, ["className", "id", "label", "styled"]);
                let ec = void 0 === er ? eo ? (0, eT.Z)("nx-sr-only", "focus:nx-not-sr-only focus:nx-fixed focus:nx-z-50 focus:nx-m-3 focus:nx-ml-4 focus:nx-h-[calc(var(--frvgs-navbar-height)-1.5rem)] focus:nx-rounded-lg focus:nx-border focus:nx-px-3 focus:nx-py-2 focus:nx-align-middle focus:nx-text-sm focus:nx-font-bold", "focus:nx-text-gray-900 focus:dark:nx-text-gray-100", "focus:nx-bg-white focus:dark:nx-bg-neutral-900", "focus:nx-border-neutral-400 focus:dark:nx-border-neutral-800") : "" : er;
                return (0, nk.jsx)("a", lL(lZ({}, eu), {
                    ref: et,
                    href: `#${ei||uD}`,
                    className: ec,
                    "data-reach-skip-link": "",
                    children: es
                }))
            }).displayName = "SkipNavLink";
            var uz = (0, eE.forwardRef)(function(ee, et) {
                var en = ee,
                    {
                        id: er
                    } = en,
                    ei = lD(en, ["id"]);
                return (0, nk.jsx)("div", lL(lZ({}, ei), {
                    ref: et,
                    id: er || uD
                }))
            });
            uz.displayName = "SkipNavContent";
            var uF = nb.strictObject({
                light: nb.string(),
                dark: nb.string(),
                system: nb.string()
            });

            function u$({
                lite: ee,
                className: et
            }) {
                let {
                    setTheme: en,
                    resolvedTheme: er,
                    theme: ei = ""
                } = nN(), es = eO(), eo = lX().themeSwitch, eu = es && "dark" === er ? eI.kL : eI.NW, ec = "function" == typeof eo.useOptions ? eo.useOptions() : eo.useOptions;
                return (0, nk.jsx)(ug, {
                    className: et,
                    title: "Change theme",
                    options: [{
                        key: "light",
                        name: ec.light
                    }, {
                        key: "dark",
                        name: ec.dark
                    }, {
                        key: "system",
                        name: ec.system
                    }],
                    onChange: ee => {
                        en(ee.key)
                    },
                    selected: {
                        key: ei,
                        name: (0, nk.jsx)("div", {
                            className: "nx-flex nx-items-center nx-gap-2 nx-capitalize",
                            children: (0, nk.jsx)(eu, {})
                        })
                    }
                })
            }

            function uU() {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            }

            function uW({
                className: ee
            }) {
                let et = (0, eE.useRef)(null);
                return (0, eE.useEffect)(() => {
                    function ee() {
                        var ee;
                        let {
                            scrollTop: en
                        } = document.documentElement;
                        null == (ee = et.current) || ee.classList.toggle("nx-opacity-0", en < 300)
                    }
                    return window.addEventListener("scroll", ee), () => {
                        window.removeEventListener("scroll", ee)
                    }
                }, []), (0, nk.jsxs)("button", {
                    ref: et,
                    "aria-hidden": "true",
                    onClick: uU,
                    className: (0, eT.Z)("nx-flex nx-items-center nx-gap-1.5 nx-transition nx-opacity-0", ee),
                    children: ["Scroll to top", (0, nk.jsx)(eI.LZ, {
                        className: "-nx-rotate-90 nx-w-3.5 nx-h-3.5 nx-border nx-rounded-full nx-border-current"
                    })]
                })
            }
            var uV = (0, eT.Z)("nx-text-xs nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100", "contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50");

            function uH({
                headings: ee,
                filePath: et
            }) {
                var en;
                let er = lV(),
                    ei = lX(),
                    es = (0, eE.useRef)(null),
                    eo = (0, eE.useMemo)(() => ee.filter(ee => ee.depth > 1), [ee]),
                    eu = eo.length > 0,
                    ec = !!ei.toc.extraContent,
                    ed = null == (en = Object.entries(er).find(([, {
                        isActive: ee
                    }]) => ee)) ? void 0 : en[0];
                return (0, eE.useEffect)(() => {
                    var ee;
                    if (!ed) return;
                    let et = null == (ee = es.current) ? void 0 : ee.querySelector(`li > a[href="#${ed}"]`);
                    et && lu(et, {
                        behavior: "smooth",
                        block: "center",
                        inline: "center",
                        scrollMode: "always",
                        boundary: es.current
                    })
                }, [ed]), (0, nk.jsxs)("div", {
                    ref: es,
                    className: (0, eT.Z)("nextra-scrollbar nx-sticky nx-top-16 nx-overflow-y-auto nx-pr-4 nx-pt-6 nx-text-sm [hyphens:auto]", "nx-max-h-[calc(100vh-var(--frvgs-navbar-height)-env(safe-area-inset-bottom))] ltr:-nx-mr-4 rtl:-nx-ml-4"),
                    children: [eu && (0, nk.jsxs)(nk.Fragment, {
                        children: [(0, nk.jsx)("p", {
                            className: "nx-mb-4 nx-font-semibold nx-tracking-tight",
                            children: l6(ei.toc.title)
                        }), (0, nk.jsx)("ul", {
                            children: eo.map(({
                                id: ee,
                                value: et,
                                depth: en
                            }) => {
                                var es, eo, eu, ec;
                                return (0, nk.jsx)("li", {
                                    className: "nx-my-2 nx-scroll-my-6 nx-scroll-py-6",
                                    children: (0, nk.jsx)("a", {
                                        href: `#${ee}`,
                                        className: (0, eT.Z)({
                                            2: "nx-font-semibold",
                                            3: "ltr:nx-pl-4 rtl:nx-pr-4",
                                            4: "ltr:nx-pl-8 rtl:nx-pr-8",
                                            5: "ltr:nx-pl-12 rtl:nx-pr-12",
                                            6: "ltr:nx-pl-16 rtl:nx-pr-16"
                                        }[en], "nx-inline-block", (null == (es = er[ee]) ? void 0 : es.isActive) ? "nx-text-primary-600 nx-subpixel-antialiased contrast-more:!nx-text-primary-600" : "nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-300", "contrast-more:nx-text-gray-900 contrast-more:nx-underline contrast-more:dark:nx-text-gray-50 nx-w-full nx-break-words"),
                                        children: null != (ec = null == (eu = (eo = ei.toc).headingComponent) ? void 0 : eu.call(eo, {
                                            id: ee,
                                            children: et
                                        })) ? ec : et
                                    })
                                }, ee)
                            })
                        })]
                    }), ec && (0, nk.jsxs)("div", {
                        className: (0, eT.Z)(eu && "nx-mt-8 nx-border-t nx-bg-white nx-pt-8 nx-shadow-[0_-12px_16px_white] dark:nx-bg-dark dark:nx-shadow-[0_-12px_16px_#111]", "nx-sticky nx-bottom-0 nx-flex nx-flex-col nx-items-start nx-gap-2 nx-pb-8 dark:nx-border-neutral-800", "contrast-more:nx-border-t contrast-more:nx-border-neutral-400 contrast-more:nx-shadow-none contrast-more:dark:nx-border-neutral-400"),
                        children: [l6(ei.toc.extraContent), ei.toc.backToTop && (0, nk.jsx)(uW, {
                            className: uV
                        })]
                    })]
                })
            }

            function uB({
                className: ee,
                directories: et
            }) {
                let [en, er] = (0, eE.useState)(""), ei = (0, eE.useMemo)(() => en ? lm(et, en, {
                    keys: ["title"]
                }).map(({
                    route: ee,
                    title: et
                }) => ({
                    id: ee + et,
                    route: ee,
                    children: (0, nk.jsx)(us, {
                        value: et,
                        match: en
                    })
                })) : [], [en, et]);
                return (0, nk.jsx)(uu, {
                    value: en,
                    onChange: er,
                    className: ee,
                    overlayClassName: "nx-w-full",
                    results: ei
                })
            }
            var uG = "en-US",
                uK = "undefined" != typeof window;

            function uq(ee) {
                return null == ee || "string" == typeof ee || uY(ee) || (0, eE.isValidElement)(ee)
            }

            function uY(ee) {
                return "function" == typeof ee
            }
            var uQ = nb.array(nb.strictObject({
                    direction: nb.enum(["ltr", "rtl"]).optional(),
                    locale: nb.string(),
                    text: nb.string()
                })),
                uJ = [uq, {
                    message: "Must be React.ReactNode or React.FC"
                }],
                uX = [uY, {
                    message: "Must be React.FC"
                }];
            nb.strictObject({
                banner: nb.strictObject({
                    dismissible: nb.boolean(),
                    key: nb.string(),
                    text: nb.custom(...uJ).optional()
                }),
                chat: nb.strictObject({
                    icon: nb.custom(...uJ),
                    link: nb.string().startsWith("https://").optional()
                }),
                components: nb.record(nb.custom(...uX)).optional(),
                darkMode: nb.boolean(),
                direction: nb.enum(["ltr", "rtl"]),
                docsRepositoryBase: nb.string().startsWith("https://"),
                editLink: nb.strictObject({
                    component: nb.custom(...uX),
                    text: nb.custom(...uJ)
                }),
                faviconGlyph: nb.string().optional(),
                feedback: nb.strictObject({
                    content: nb.custom(...uJ),
                    labels: nb.string(),
                    useLink: nb.function().returns(nb.string())
                }),
                footer: nb.strictObject({
                    component: nb.custom(...uJ),
                    text: nb.custom(...uJ)
                }),
                gitTimestamp: nb.custom(...uJ),
                head: nb.custom(...uJ),
                i18n: uQ,
                logo: nb.custom(...uJ),
                logoLink: nb.boolean().or(nb.string()),
                main: nb.custom(...uX).optional(),
                navbar: nb.strictObject({
                    component: nb.custom(...uJ),
                    extraContent: nb.custom(...uJ).optional()
                }),
                navigation: nb.boolean().or(nb.strictObject({
                    next: nb.boolean(),
                    prev: nb.boolean()
                })),
                nextThemes: nb.strictObject({
                    defaultTheme: nb.string(),
                    forcedTheme: nb.string().optional(),
                    storageKey: nb.string()
                }),
                notFound: nb.strictObject({
                    content: nb.custom(...uJ),
                    labels: nb.string()
                }),
                primaryHue: nb.number().or(nb.strictObject({
                    dark: nb.number(),
                    light: nb.number()
                })),
                project: nb.strictObject({
                    icon: nb.custom(...uJ),
                    link: nb.string().startsWith("https://").optional()
                }),
                fivem: nb.strictObject({
                    icon: nb.custom(...uJ),
                    link: nb.string().startsWith("https://").optional()
                }),
                youtube: nb.strictObject({
                    icon: nb.custom(...uJ),
                    link: nb.string().startsWith("https://").optional()
                }),
                search: nb.strictObject({
                    component: nb.custom(...uJ),
                    emptyResult: nb.custom(...uJ),
                    error: nb.string().or(nb.function().returns(nb.string())),
                    loading: nb.custom(...uJ),
                    placeholder: nb.string().or(nb.function().returns(nb.string()))
                }),
                serverSideError: nb.strictObject({
                    content: nb.custom(...uJ),
                    labels: nb.string()
                }),
                sidebar: nb.strictObject({
                    autoCollapse: nb.boolean().optional(),
                    defaultMenuCollapseLevel: nb.number().min(1).int(),
                    titleComponent: nb.custom(...uJ),
                    toggleButton: nb.boolean()
                }),
                themeSwitch: nb.strictObject({
                    component: nb.custom(...uJ),
                    useOptions: uF.or(nb.function().returns(uF))
                }),
                toc: nb.strictObject({
                    backToTop: nb.boolean(),
                    component: nb.custom(...uJ),
                    extraContent: nb.custom(...uJ),
                    float: nb.boolean(),
                    headingComponent: nb.custom(...uX).optional(),
                    title: nb.custom(...uJ)
                }),
                useNextSeoProps: nb.custom(uY)
            }).deepPartial().extend({
                i18n: uQ.optional()
            });
            var u0 = {
                    "en-US": "Loading",
                    fr: "Сhargement",
                    ru: "Загрузка",
                    "zh-CN": "正在加载"
                },
                u1 = {
                    "en-US": "Search",
                    fr: "Rechercher",
                    ru: "Поиск документации",
                    "zh-CN": "搜索文档"
                },
                u2 = {
                    banner: {
                        dismissible: !0,
                        key: "nextra-banner"
                    },
                    chat: {
                        icon: (0, nk.jsxs)(nk.Fragment, {
                            children: [(0, nk.jsx)(eI.D7, {}), (0, nk.jsx)("span", {
                                className: "nx-sr-only",
                                children: "Discord"
                            })]
                        })
                    },
                    fivem: {
                        icon: (0, nk.jsxs)(nk.Fragment, {
                            children: [(0, nk.jsx)(eI.WD, {}), (0, nk.jsx)("span", {
                                className: "nx-sr-only",
                                children: "FiveM"
                            })]
                        })
                    },
                    youtube: {
                        icon: (0, nk.jsxs)(nk.Fragment, {
                            children: [(0, nk.jsx)(eI.LK, {}), (0, nk.jsx)("span", {
                                className: "nx-sr-only",
                                children: "Youtube"
                            })]
                        })
                    },
                    darkMode: !0,
                    direction: "ltr",
                    docsRepositoryBase: "https://github.com/shuding",
                    editLink: {
                        component: function({
                            className: ee,
                            filePath: et,
                            children: en
                        }) {
                            let er = ut(et);
                            return er ? (0, nk.jsx)(l5, {
                                className: ee,
                                href: er,
                                children: en
                            }) : null
                        },
                        text: "Edit this page"
                    },
                    feedback: {
                        content: "Question? Give us feedback →",
                        labels: "feedback",
                        useLink() {
                            let ee = lX();
                            return l8({
                                labels: ee.feedback.labels,
                                repository: ee.docsRepositoryBase,
                                title: `Feedback for \u201C${ee.title}\u201D`
                            })
                        }
                    },
                    footer: {
                        component: um,
                        text: `MIT ${new Date().getFullYear()} \xa9 Nextra.`
                    },
                    head: (0, nk.jsxs)(nk.Fragment, {
                        children: [(0, nk.jsx)("meta", {
                            name: "msapplication-TileColor",
                            content: "#fff"
                        }), (0, nk.jsx)("meta", {
                            httpEquiv: "Content-Language",
                            content: "en"
                        }), (0, nk.jsx)("meta", {
                            name: "description",
                            content: "Nextra: the next docs builder"
                        }), (0, nk.jsx)("meta", {
                            name: "twitter:card",
                            content: "summary_large_image"
                        }), (0, nk.jsx)("meta", {
                            name: "twitter:site",
                            content: "@shuding_"
                        }), (0, nk.jsx)("meta", {
                            property: "og:title",
                            content: "Nextra: the next docs builder"
                        }), (0, nk.jsx)("meta", {
                            property: "og:description",
                            content: "Nextra: the next docs builder"
                        }), (0, nk.jsx)("meta", {
                            name: "apple-mobile-web-app-title",
                            content: "Nextra"
                        })]
                    }),
                    i18n: [],
                    logo: (0, nk.jsxs)(nk.Fragment, {
                        children: [(0, nk.jsx)("span", {
                            className: "nx-font-extrabold",
                            children: "Nextra"
                        }), (0, nk.jsx)("span", {
                            className: "nx-ml-2 nx-hidden nx-font-normal nx-text-gray-600 md:nx-inline",
                            children: "The Next Docs Builder"
                        })]
                    }),
                    logoLink: !0,
                    navbar: {
                        component: uj
                    },
                    navigation: !0,
                    nextThemes: {
                        defaultTheme: "system",
                        storageKey: "theme"
                    },
                    notFound: {
                        content: "Submit an issue about broken link →",
                        labels: "bug"
                    },
                    primaryHue: {
                        dark: 204,
                        light: 212
                    },
                    project: {
                        icon: (0, nk.jsxs)(nk.Fragment, {
                            children: [(0, nk.jsx)(eI.fy, {}), (0, nk.jsx)("span", {
                                className: "nx-sr-only",
                                children: "GitHub"
                            })]
                        })
                    },
                    search: {
                        component: function({
                            className: ee,
                            directories: et
                        }) {
                            let en = lX();
                            return en.flexsearch ? (0, nk.jsx)(uf, {
                                className: ee
                            }) : (0, nk.jsx)(uB, {
                                className: ee,
                                directories: et
                            })
                        },
                        emptyResult: (0, nk.jsx)("span", {
                            className: "nx-block nx-select-none nx-p-8 nx-text-center nx-text-sm nx-text-gray-400",
                            children: "No results found."
                        }),
                        error: "Failed to load search index.",
                        loading: function() {
                            let {
                                locale: ee,
                                defaultLocale: et = uG
                            } = (0, ej.useRouter)(), en = ee && u0[ee] || u0[et];
                            return (0, nk.jsxs)(nk.Fragment, {
                                children: [en, "…"]
                            })
                        },
                        placeholder: function() {
                            let {
                                locale: ee,
                                defaultLocale: et = uG
                            } = (0, ej.useRouter)(), en = ee && u1[ee] || u1[et];
                            return `${en}\u2026`
                        }
                    },
                    serverSideError: {
                        content: "Submit an issue about error in url →",
                        labels: "bug"
                    },
                    sidebar: {
                        defaultMenuCollapseLevel: 2,
                        titleComponent: ({
                            title: ee
                        }) => (0, nk.jsx)(nk.Fragment, {
                            children: ee
                        }),
                        toggleButton: !1
                    },
                    themeSwitch: {
                        component: u$,
                        useOptions() {
                            let {
                                locale: ee
                            } = (0, ej.useRouter)();
                            return "zh-CN" === ee ? {
                                dark: "深色主题",
                                light: "浅色主题",
                                system: "系统默认"
                            } : {
                                dark: "Dark",
                                light: "Light",
                                system: "System"
                            }
                        }
                    },
                    toc: {
                        backToTop: !1,
                        component: uH,
                        float: !0,
                        title: "On This Page"
                    },
                    useNextSeoProps: () => ({
                        titleTemplate: "%s – Nextra"
                    })
                },
                u4 = Object.entries(u2).map(([ee, et]) => {
                    let en = et && "object" == typeof et && !Array.isArray(et) && !(0, eE.isValidElement)(et);
                    if (en) return ee
                }).filter(Boolean);
            if (uK) {
                let ee;
                let et = () => {
                    document.body.classList.add("resizing"), clearTimeout(ee), ee = setTimeout(() => {
                        document.body.classList.remove("resizing")
                    }, 200)
                };
                window.addEventListener("resize", et)
            }

            function u3(ee) {
                var et = ee,
                    {
                        tag: en,
                        context: er,
                        children: ei,
                        id: es,
                        className: eo
                    } = et,
                    eu = lD(et, ["tag", "context", "children", "id", "className"]);
                let ec = lH(),
                    ed = lG(),
                    ep = lB(),
                    eh = (0, eE.useRef)(null);
                return (0, eE.useEffect)(() => {
                    if (!es) return;
                    let ee = eh.current;
                    if (ee) return ed.set(ee, [es, er.index += 1]), null == ep || ep.observe(ee), () => {
                        null == ep || ep.disconnect(), ed.delete(ee), ec(ee => {
                            let et = lZ({}, ee);
                            return delete et[es], et
                        })
                    }
                }, [es, er, ed, ep, ec]), (0, nk.jsxs)(en, lL(lZ({
                    className: "sr-only" === eo ? "nx-sr-only" : (0, eT.Z)("nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100", {
                        h2: "nx-mt-10 nx-border-b nx-pb-1 nx-text-3xl nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400",
                        h3: "nx-mt-8 nx-text-2xl",
                        h4: "nx-mt-8 nx-text-xl",
                        h5: "nx-mt-8 nx-text-lg",
                        h6: "nx-mt-8 nx-text-base"
                    }[en])
                }, eu), {
                    children: [ei, es && (0, nk.jsx)("a", {
                        href: `#${es}`,
                        id: es,
                        className: "subheading-anchor",
                        "aria-label": "Permalink for this section",
                        ref: eh
                    })]
                }))
            }
            var u5 = ee => {
                    let et = null,
                        en = [];
                    return eE.Children.forEach(ee, (ee, er) => {
                        var ei;
                        if (ee && ee.type === u6) {
                            et || (et = ee);
                            return
                        }
                        let es = ee;
                        if (!et && ee && "object" == typeof ee && ee.type !== u8 && "props" in ee && ee.props) {
                            let en = u5(ee.props.children);
                            et = en[0], es = (0, eE.cloneElement)(ee, lL(lZ({}, ee.props), {
                                children: (null == (ei = en[1]) ? void 0 : ei.length) ? en[1] : void 0,
                                key: er
                            }))
                        }
                        en.push(es)
                    }), [et, en]
                },
                u8 = ee => {
                    var et = ee,
                        {
                            children: en
                        } = et,
                        er = lD(et, ["children"]);
                    let [ei, es] = (0, eE.useState)(!1), [eo, eu] = u5(en), [ec, ed] = (0, eE.useState)(!1);
                    return (0, eE.useEffect)(() => {
                        if (ei) ed(!0);
                        else {
                            let ee = setTimeout(() => ed(ei), 500);
                            return () => clearTimeout(ee)
                        }
                    }, [ei]), (0, nk.jsxs)("details", lL(lZ(lL(lZ({}, er), {
                        open: ec
                    }), ei && {
                        "data-expanded": !0
                    }), {
                        children: [(0, nk.jsx)(l4, {
                            value: es,
                            children: eo
                        }), (0, nk.jsx)(ui, {
                            isOpen: ei,
                            children: eu
                        })]
                    }))
                },
                u6 = ee => {
                    let et = l2();
                    return (0, nk.jsx)("summary", lL(lZ({
                        className: (0, eT.Z)("nx-flex nx-items-center nx-cursor-pointer nx-list-none nx-p-1 nx-transition-colors hover:nx-bg-gray-100 dark:hover:nx-bg-neutral-800", "before:nx-mr-1 before:nx-inline-block before:nx-transition-transform before:nx-content-[''] dark:before:nx-invert before:nx-shrink-0", "rtl:before:nx-rotate-180 [[data-expanded]>&]:before:nx-rotate-90")
                    }, ee), {
                        onClick: ee => {
                            ee.preventDefault(), et(ee => !ee)
                        }
                    }))
                },
                u9 = /https?:\/\//,
                u7 = ee => {
                    var et = ee,
                        {
                            href: en = "",
                            className: er
                        } = et,
                        ei = lD(et, ["href", "className"]);
                    return (0, nk.jsx)(l5, lZ({
                        href: en,
                        newWindow: u9.test(en),
                        className: (0, eT.Z)("nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]", er)
                    }, ei))
                },
                ct = ee => {
                    var et = ee,
                        {
                            href: en = ""
                        } = et,
                        er = lD(et, ["href"]);
                    return (0, nk.jsx)(l5, lZ({
                        href: en,
                        newWindow: u9.test(en)
                    }, er))
                },
                cn = ({
                    isRawLayout: ee,
                    components: et
                }) => {
                    if (ee) return {
                        a: ct
                    };
                    let en = {
                        index: 0
                    };
                    return lZ({
                        h1: ee => (0, nk.jsx)("h1", lZ({
                            className: "nx-mt-2 nx-text-4xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100"
                        }, ee)),
                        h2: ee => (0, nk.jsx)(u3, lZ({
                            tag: "h2",
                            context: en
                        }, ee)),
                        h3: ee => (0, nk.jsx)(u3, lZ({
                            tag: "h3",
                            context: en
                        }, ee)),
                        h4: ee => (0, nk.jsx)(u3, lZ({
                            tag: "h4",
                            context: en
                        }, ee)),
                        h5: ee => (0, nk.jsx)(u3, lZ({
                            tag: "h5",
                            context: en
                        }, ee)),
                        h6: ee => (0, nk.jsx)(u3, lZ({
                            tag: "h6",
                            context: en
                        }, ee)),
                        ul: ee => (0, nk.jsx)("ul", lZ({
                            className: "nx-mt-6 nx-list-disc first:nx-mt-0 ltr:nx-ml-6 rtl:nx-mr-6"
                        }, ee)),
                        ol: ee => (0, nk.jsx)("ol", lZ({
                            className: "nx-mt-6 nx-list-decimal first:nx-mt-0 ltr:nx-ml-6 rtl:nx-mr-6"
                        }, ee)),
                        li: ee => (0, nk.jsx)("li", lZ({
                            className: "nx-my-2"
                        }, ee)),
                        blockquote: ee => (0, nk.jsx)("blockquote", lZ({
                            className: (0, eT.Z)("nx-mt-6 nx-border-gray-300 nx-italic nx-text-gray-700 dark:nx-border-gray-700 dark:nx-text-gray-400", "first:nx-mt-0 ltr:nx-border-l-2 ltr:nx-pl-6 rtl:nx-border-r-2 rtl:nx-pr-6")
                        }, ee)),
                        hr: ee => (0, nk.jsx)("hr", lZ({
                            className: "nx-my-8 nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400"
                        }, ee)),
                        a: u7,
                        table: ee => (0, nk.jsx)(lO.iA, lZ({
                            className: "nextra-scrollbar nx-mt-6 nx-p-0 first:nx-mt-0"
                        }, ee)),
                        p: ee => (0, nk.jsx)("p", lZ({
                            className: "nx-mt-6 nx-leading-7 first:nx-mt-0"
                        }, ee)),
                        tr: lO.Tr,
                        th: lO.Th,
                        td: lO.Td,
                        details: u8,
                        summary: u6,
                        pre: lO.SU,
                        code: lO.EK
                    }, et)
                },
                cr = {
                    toc: (0, eT.Z)("nextra-toc nx-order-last nx-hidden nx-w-64 nx-shrink-0 xl:nx-block print:nx-hidden"),
                    main: (0, eT.Z)("nx-w-full nx-break-words")
                },
                ci = ({
                    themeContext: ee,
                    breadcrumb: et,
                    timestamp: en,
                    navigation: er,
                    children: ei
                }) => {
                    var es;
                    let eo = lX(),
                        eu = eO();
                    if ("raw" === ee.layout) return (0, nk.jsx)("div", {
                        className: cr.main,
                        children: ei
                    });
                    let ec = ee.timestamp && eo.gitTimestamp && en ? new Date(en) : null,
                        ed = eu && ec ? (0, nk.jsx)("div", {
                            className: "nx-mt-12 nx-mb-8 nx-block nx-text-xs nx-text-gray-500 ltr:nx-text-right rtl:nx-text-left dark:nx-text-gray-400",
                            children: l6(eo.gitTimestamp, {
                                timestamp: ec
                            })
                        }) : (0, nk.jsx)("div", {
                            className: "nx-mt-16"
                        }),
                        ep = (0, nk.jsxs)(nk.Fragment, {
                            children: [ei, ed, er]
                        }),
                        eh = (null == (es = eo.main) ? void 0 : es.call(eo, {
                            children: ep
                        })) || ep;
                    return "full" === ee.layout ? (0, nk.jsx)("article", {
                        className: (0, eT.Z)(cr.main, "nextra-content nx-min-h-[calc(100vh-var(--frvgs-navbar-height))]"),
                        children: eh
                    }) : (0, nk.jsx)("article", {
                        className: (0, eT.Z)(cr.main, "nextra-content nx-flex nx-min-h-[calc(100vh-var(--frvgs-navbar-height))] nx-min-w-0 nx-justify-center nx-pb-8 nx-pr-[calc(env(safe-area-inset-right)-1.5rem)]", "article" === ee.typesetting && "nextra-body-typesetting-article"),
                        children: (0, nk.jsxs)("main", {
                            className: "nx-w-full nx-min-w-0 nx-max-w-6xl nx-px-6 nx-pt-4 md:nx-px-12",
                            children: [et, eh]
                        })
                    })
                },
                cs = ({
                    filePath: ee,
                    pageMap: et,
                    frontMatter: en,
                    headings: er,
                    timestamp: ei,
                    children: es
                }) => {
                    let eo = lX(),
                        {
                            locale: eu = uG,
                            defaultLocale: ec
                        } = (0, ej.useRouter)(),
                        ed = eS(),
                        {
                            activeType: ep,
                            activeIndex: eh,
                            activeThemeContext: ef,
                            activePath: em,
                            topLevelNavbarItems: ex,
                            docsDirectories: eg,
                            flatDirectories: ev,
                            flatDocsDirectories: ey,
                            directories: eb
                        } = (0, eE.useMemo)(() => aW({
                            list: et,
                            locale: eu,
                            defaultLocale: ec,
                            route: ed
                        }), [et, eu, ec, ed]),
                        e_ = lZ(lZ({}, ef), en),
                        ew = !e_.sidebar || "raw" === e_.layout || "page" === ep,
                        ek = "page" !== ep && e_.toc && "default" === e_.layout ? (0, nk.jsx)("nav", {
                            className: (0, eT.Z)(cr.toc, "nx-px-4"),
                            "aria-label": "table of contents",
                            children: l6(eo.toc.component, {
                                headings: eo.toc.float ? er : [],
                                filePath: ee
                            })
                        }) : "full" !== e_.layout && "raw" !== e_.layout && (0, nk.jsx)("nav", {
                            className: cr.toc,
                            "aria-label": "table of contents"
                        }),
                        eO = eo.i18n.find(ee => ee.locale === eu),
                        eC = eO ? "rtl" === eO.direction : "rtl" === eo.direction,
                        eN = eC ? "rtl" : "ltr";
                    return (0, nk.jsxs)("div", {
                        dir: eN,
                        children: [(0, nk.jsx)("script", {
                            dangerouslySetInnerHTML: {
                                __html: `document.documentElement.setAttribute('dir','${eN}')`
                            }
                        }), (0, nk.jsx)(ux, {}), (0, nk.jsx)(un, {}), e_.navbar && l6(eo.navbar.component, {
                            flatDirectories: ev,
                            items: ex
                        }), (0, nk.jsx)("div", {
                            className: (0, eT.Z)("nx-mx-auto nx-flex", "raw" !== e_.layout && "nx-max-w-[90rem]"),
                            children: (0, nk.jsxs)(lK, {
                                children: [(0, nk.jsx)(uL, {
                                    docsDirectories: eg,
                                    flatDirectories: ev,
                                    fullDirectories: eb,
                                    headings: er,
                                    asPopover: ew,
                                    includePlaceholder: "default" === e_.layout
                                }), ek, (0, nk.jsx)(uz, {}), (0, nk.jsx)(ci, {
                                    themeContext: e_,
                                    breadcrumb: "page" !== ep && e_.breadcrumb ? (0, nk.jsx)(ur, {
                                        activePath: em
                                    }) : null,
                                    timestamp: ei,
                                    navigation: "page" !== ep && e_.pagination ? (0, nk.jsx)(u_, {
                                        flatDirectories: ey,
                                        currentIndex: eh
                                    }) : null,
                                    children: (0, nk.jsx)(eR.Z, {
                                        components: cn({
                                            isRawLayout: "raw" === e_.layout,
                                            components: eo.components
                                        }),
                                        children: es
                                    })
                                })]
                            })
                        }), e_.footer && l6(eo.footer.component, {
                            menu: ew
                        })]
                    })
                };

            function co(ee) {
                var et = ee,
                    {
                        children: en
                    } = et,
                    er = lD(et, ["children"]);
                return (0, nk.jsx)(l0, {
                    value: er,
                    children: (0, nk.jsx)(cs, lL(lZ({}, er.pageOpts), {
                        children: en
                    }))
                })
            }
        },
        6498: function(ee, et, en) {
            "use strict";
            en.d(et, {
                oy: function() {
                    return te
                },
                EK: function() {
                    return ef
                },
                SU: function() {
                    return em
                },
                iA: function() {
                    return e4
                },
                Td: function() {
                    return e2
                },
                Th: function() {
                    return e3
                },
                Tr: function() {
                    return e5
                }
            });
            var er, ei, es, eo = en(3230),
                eu = en(5250),
                ec = ({
                    children: ee,
                    className: et,
                    ...en
                }) => (0, eu.jsx)("button", {
                    className: (0, eo.Z)("nextra-button nx-transition-all active:nx-opacity-50", "nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5", "dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50", et),
                    ...en,
                    children: ee
                }),
                ed = en(1382);
            ed.AV, (0, eo.Z)("nx-border-orange-100 nx-bg-orange-50 nx-text-orange-800 dark:nx-border-orange-400/30 dark:nx-bg-orange-400/20 dark:nx-text-orange-300"), (0, eo.Z)("nx-border-red-200 nx-bg-red-100 nx-text-red-900 dark:nx-border-red-200/30 dark:nx-bg-red-900/30 dark:nx-text-red-200"), (0, eo.Z)("nx-border-blue-200 nx-bg-blue-100 nx-text-blue-900 dark:nx-border-blue-200/30 dark:nx-bg-blue-900/30 dark:nx-text-blue-200"), (0, eo.Z)("nx-border-yellow-100 nx-bg-yellow-50 nx-text-yellow-900 dark:nx-border-yellow-200/30 dark:nx-bg-yellow-700/30 dark:nx-text-yellow-200");
            var ep = en(79),
                eh = ({
                    getValue: ee,
                    ...et
                }) => {
                    let [en, er] = (0, ep.useState)(!1);
                    (0, ep.useEffect)(() => {
                        if (!en) return;
                        let ee = setTimeout(() => {
                            er(!1)
                        }, 2e3);
                        return () => {
                            clearTimeout(ee)
                        }
                    }, [en]);
                    let ei = (0, ep.useCallback)(async () => {
                            er(!0), navigator ? .clipboard || console.error("Access to clipboard rejected!");
                            try {
                                await navigator.clipboard.writeText(ee())
                            } catch {
                                console.error("Failed to copy!")
                            }
                        }, [ee]),
                        es = en ? ed.nQ : ed.TI;
                    return (0, eu.jsx)(ec, {
                        onClick: ei,
                        title: "Copy code",
                        tabIndex: 0,
                        ...et,
                        children: (0, eu.jsx)(es, {
                            className: "nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4"
                        })
                    })
                },
                ef = ({
                    children: ee,
                    className: et,
                    ...en
                }) => {
                    let er = "data-line-numbers" in en;
                    return (0, eu.jsx)("code", {
                        className: (0, eo.Z)("nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em]", "dark:nx-border-white/10 dark:nx-bg-white/10", er && "[counter-reset:line]", et),
                        dir: "ltr",
                        ...en,
                        children: ee
                    })
                },
                em = ({
                    children: ee,
                    className: et,
                    hasCopyCode: en,
                    filename: er,
                    ...ei
                }) => {
                    let es = (0, ep.useRef)(null),
                        ef = (0, ep.useCallback)(() => {
                            let ee = document.documentElement.dataset,
                                et = "nextraWordWrap" in ee;
                            et ? delete ee.nextraWordWrap : ee.nextraWordWrap = ""
                        }, []);
                    return (0, eu.jsxs)("div", {
                        className: "nextra-code-block nx-relative nx-mt-6 first:nx-mt-0",
                        children: [er && (0, eu.jsx)("div", {
                            className: "nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200",
                            children: er
                        }), (0, eu.jsx)("pre", {
                            className: (0, eo.Z)("nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]", "contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40", er ? "nx-pt-12 nx-pb-4" : "nx-py-4", et),
                            ref: es,
                            ...ei,
                            children: ee
                        }), (0, eu.jsxs)("div", {
                            className: (0, eo.Z)("nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100", "nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0", er ? "nx-top-8" : "nx-top-0"),
                            children: [(0, eu.jsx)(ec, {
                                onClick: ef,
                                className: "md:nx-hidden",
                                title: "Toggle word wrap",
                                children: (0, eu.jsx)(ed.NK, {
                                    className: "nx-pointer-events-none nx-h-4 nx-w-4"
                                })
                            }), en && (0, eu.jsx)(eh, {
                                getValue: () => es.current ? .querySelector("code") ? .textContent || ""
                            })]
                        })]
                    })
                },
                ex = en(9107),
                eg = en(1253),
                ev = en(5761),
                ey = en(578),
                eb = en(5661),
                e_ = en(1223),
                ew = en(3921),
                ek = en(8669),
                ej = en(4512),
                eE = en(7899);

            function eT({
                onFocus: ee
            }) {
                let [et, en] = (0, ep.useState)(!0);
                return et ? ep.createElement(eE._, {
                    as: "button",
                    type: "button",
                    features: eE.A.Focusable,
                    onFocus: et => {
                        et.preventDefault();
                        let er, ei = 50;

                        function es() {
                            if (ei-- <= 0) {
                                er && cancelAnimationFrame(er);
                                return
                            }
                            if (ee()) {
                                en(!1), cancelAnimationFrame(er);
                                return
                            }
                            er = requestAnimationFrame(es)
                        }
                        er = requestAnimationFrame(es)
                    }
                }) : null
            }
            var eO = en(7258),
                eC = en(2745),
                eN = en(8694);
            let eS = ep.createContext(null);

            function eR() {
                return {
                    groups: new Map,
                    get(ee, et) {
                        var en;
                        let er = this.groups.get(ee);
                        er || (er = new Map, this.groups.set(ee, er));
                        let ei = null != (en = er.get(et)) ? en : 0;

                        function es() {
                            let ee = er.get(et);
                            ee > 1 ? er.set(et, ee - 1) : er.delete(et)
                        }
                        return er.set(et, ei + 1), [Array.from(er.keys()).indexOf(et), es]
                    }
                }
            }

            function eI({
                children: ee
            }) {
                let et = ep.useRef(eR());
                return ep.createElement(eS.Provider, {
                    value: et
                }, ee)
            }

            function eA(ee) {
                let et = ep.useContext(eS);
                if (!et) throw Error("You must wrap your component in a <StableCollection>");
                let en = eP(),
                    [er, ei] = et.current.get(ee, en);
                return ep.useEffect(() => ei, []), er
            }

            function eP() {
                var ee, et, en;
                let er = null != (en = null == (et = null == (ee = ep.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) ? void 0 : ee.ReactCurrentOwner) ? void 0 : et.current) ? en : null;
                if (!er) return Symbol();
                let ei = [],
                    es = er;
                for (; es;) ei.push(es.index), es = es.return;
                return "$." + ei.join(".")
            }
            var eZ = ((er = eZ || {})[er.Forwards = 0] = "Forwards", er[er.Backwards = 1] = "Backwards", er),
                eL = ((ei = eL || {})[ei.Less = -1] = "Less", ei[ei.Equal = 0] = "Equal", ei[ei.Greater = 1] = "Greater", ei),
                eD = ((es = eD || {})[es.SetSelectedIndex = 0] = "SetSelectedIndex", es[es.RegisterTab = 1] = "RegisterTab", es[es.UnregisterTab = 2] = "UnregisterTab", es[es.RegisterPanel = 3] = "RegisterPanel", es[es.UnregisterPanel = 4] = "UnregisterPanel", es);
            let eM = {
                    0(ee, et) {
                        var en;
                        let er = (0, eb.z2)(ee.tabs, ee => ee.current),
                            ei = (0, eb.z2)(ee.panels, ee => ee.current),
                            es = er.filter(ee => {
                                var et;
                                return !(null != (et = ee.current) && et.hasAttribute("disabled"))
                            }),
                            eo = { ...ee,
                                tabs: er,
                                panels: ei
                            };
                        if (et.index < 0 || et.index > er.length - 1) {
                            let en = (0, ev.E)(Math.sign(et.index - ee.selectedIndex), {
                                [-1]: () => 1,
                                0: () => (0, ev.E)(Math.sign(et.index), {
                                    [-1]: () => 0,
                                    0: () => 0,
                                    1: () => 1
                                }),
                                1: () => 0
                            });
                            return 0 === es.length ? eo : { ...eo,
                                selectedIndex: (0, ev.E)(en, {
                                    0: () => er.indexOf(es[0]),
                                    1: () => er.indexOf(es[es.length - 1])
                                })
                            }
                        }
                        let eu = er.slice(0, et.index),
                            ec = [...er.slice(et.index), ...eu].find(ee => es.includes(ee));
                        if (!ec) return eo;
                        let ed = null != (en = er.indexOf(ec)) ? en : ee.selectedIndex;
                        return -1 === ed && (ed = ee.selectedIndex), { ...eo,
                            selectedIndex: ed
                        }
                    },
                    1(ee, et) {
                        var en;
                        if (ee.tabs.includes(et.tab)) return ee;
                        let er = ee.tabs[ee.selectedIndex],
                            ei = (0, eb.z2)([...ee.tabs, et.tab], ee => ee.current),
                            es = null != (en = ei.indexOf(er)) ? en : ee.selectedIndex;
                        return -1 === es && (es = ee.selectedIndex), { ...ee,
                            tabs: ei,
                            selectedIndex: es
                        }
                    },
                    2: (ee, et) => ({ ...ee,
                        tabs: ee.tabs.filter(ee => ee !== et.tab)
                    }),
                    3: (ee, et) => ee.panels.includes(et.panel) ? ee : { ...ee,
                        panels: (0, eb.z2)([...ee.panels, et.panel], ee => ee.current)
                    },
                    4: (ee, et) => ({ ...ee,
                        panels: ee.panels.filter(ee => ee !== et.panel)
                    })
                },
                ez = (0, ep.createContext)(null);

            function eF(ee) {
                let et = (0, ep.useContext)(ez);
                if (null === et) {
                    let et = Error(`<${ee} /> is missing a parent <Tab.Group /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(et, eF), et
                }
                return et
            }
            ez.displayName = "TabsDataContext";
            let e$ = (0, ep.createContext)(null);

            function eU(ee) {
                let et = (0, ep.useContext)(e$);
                if (null === et) {
                    let et = Error(`<${ee} /> is missing a parent <Tab.Group /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(et, eU), et
                }
                return et
            }

            function eW(ee, et) {
                return (0, ev.E)(et.type, eM, ee, et)
            }
            e$.displayName = "TabsActionsContext";
            let eV = ep.Fragment,
                eH = (0, ex.yV)(function(ee, et) {
                    let {
                        defaultIndex: en = 0,
                        vertical: er = !1,
                        manual: ei = !1,
                        onChange: es,
                        selectedIndex: eo = null,
                        ...eu
                    } = ee, ec = er ? "vertical" : "horizontal", ed = ei ? "manual" : "auto", eh = null !== eo, ef = (0, ew.T)(et), [em, eg] = (0, ep.useReducer)(eW, {
                        selectedIndex: null != eo ? eo : en,
                        tabs: [],
                        panels: []
                    }), ev = (0, ep.useMemo)(() => ({
                        selectedIndex: em.selectedIndex
                    }), [em.selectedIndex]), ey = (0, ej.E)(es || (() => {})), ek = (0, ej.E)(em.tabs), eE = (0, ep.useMemo)(() => ({
                        orientation: ec,
                        activation: ed,
                        ...em
                    }), [ec, ed, em]), eC = (0, eO.z)(ee => (eg({
                        type: 1,
                        tab: ee
                    }), () => eg({
                        type: 2,
                        tab: ee
                    }))), eN = (0, eO.z)(ee => (eg({
                        type: 3,
                        panel: ee
                    }), () => eg({
                        type: 4,
                        panel: ee
                    }))), eS = (0, eO.z)(ee => {
                        eR.current !== ee && ey.current(ee), eh || eg({
                            type: 0,
                            index: ee
                        })
                    }), eR = (0, ej.E)(eh ? ee.selectedIndex : em.selectedIndex), eA = (0, ep.useMemo)(() => ({
                        registerTab: eC,
                        registerPanel: eN,
                        change: eS
                    }), []);
                    (0, e_.e)(() => {
                        eg({
                            type: 0,
                            index: null != eo ? eo : en
                        })
                    }, [eo]), (0, e_.e)(() => {
                        if (void 0 === eR.current || em.tabs.length <= 0) return;
                        let ee = (0, eb.z2)(em.tabs, ee => ee.current);
                        ee.some((ee, et) => em.tabs[et] !== ee) && eS(ee.indexOf(em.tabs[eR.current]))
                    });
                    let eP = {
                        ref: ef
                    };
                    return ep.createElement(eI, null, ep.createElement(e$.Provider, {
                        value: eA
                    }, ep.createElement(ez.Provider, {
                        value: eE
                    }, eE.tabs.length <= 0 && ep.createElement(eT, {
                        onFocus: () => {
                            var ee, et;
                            for (let en of ek.current)
                                if ((null == (ee = en.current) ? void 0 : ee.tabIndex) === 0) return null == (et = en.current) || et.focus(), !0;
                            return !1
                        }
                    }), (0, ex.sY)({
                        ourProps: eP,
                        theirProps: eu,
                        slot: ev,
                        defaultTag: eV,
                        name: "Tabs"
                    }))))
                }),
                eB = "div",
                eG = (0, ex.yV)(function(ee, et) {
                    let {
                        orientation: en,
                        selectedIndex: er
                    } = eF("Tab.List"), ei = (0, ew.T)(et);
                    return (0, ex.sY)({
                        ourProps: {
                            ref: ei,
                            role: "tablist",
                            "aria-orientation": en
                        },
                        theirProps: ee,
                        slot: {
                            selectedIndex: er
                        },
                        defaultTag: eB,
                        name: "Tabs.List"
                    })
                }),
                eK = "button",
                eq = (0, ex.yV)(function(ee, et) {
                    var en, er;
                    let ei = (0, eg.M)(),
                        {
                            id: es = `headlessui-tabs-tab-${ei}`,
                            ...eo
                        } = ee,
                        {
                            orientation: eu,
                            activation: ec,
                            selectedIndex: ed,
                            tabs: eh,
                            panels: ef
                        } = eF("Tab"),
                        em = eU("Tab"),
                        ej = eF("Tab"),
                        eE = (0, ep.useRef)(null),
                        eT = (0, ew.T)(eE, et);
                    (0, e_.e)(() => em.registerTab(eE), [em, eE]);
                    let eS = eA("tabs"),
                        eR = eh.indexOf(eE); - 1 === eR && (eR = eS);
                    let eI = eR === ed,
                        eP = (0, eO.z)(ee => {
                            var et;
                            let en = ee();
                            if (en === eb.fE.Success && "auto" === ec) {
                                let ee = null == (et = (0, eN.r)(eE)) ? void 0 : et.activeElement,
                                    en = ej.tabs.findIndex(et => et.current === ee); - 1 !== en && em.change(en)
                            }
                            return en
                        }),
                        eZ = (0, eO.z)(ee => {
                            let et = eh.map(ee => ee.current).filter(Boolean);
                            if (ee.key === ey.R.Space || ee.key === ey.R.Enter) {
                                ee.preventDefault(), ee.stopPropagation(), em.change(eR);
                                return
                            }
                            switch (ee.key) {
                                case ey.R.Home:
                                case ey.R.PageUp:
                                    return ee.preventDefault(), ee.stopPropagation(), eP(() => (0, eb.jA)(et, eb.TO.First));
                                case ey.R.End:
                                case ey.R.PageDown:
                                    return ee.preventDefault(), ee.stopPropagation(), eP(() => (0, eb.jA)(et, eb.TO.Last))
                            }
                            if (eP(() => (0, ev.E)(eu, {
                                    vertical: () => ee.key === ey.R.ArrowUp ? (0, eb.jA)(et, eb.TO.Previous | eb.TO.WrapAround) : ee.key === ey.R.ArrowDown ? (0, eb.jA)(et, eb.TO.Next | eb.TO.WrapAround) : eb.fE.Error,
                                    horizontal: () => ee.key === ey.R.ArrowLeft ? (0, eb.jA)(et, eb.TO.Previous | eb.TO.WrapAround) : ee.key === ey.R.ArrowRight ? (0, eb.jA)(et, eb.TO.Next | eb.TO.WrapAround) : eb.fE.Error
                                })) === eb.fE.Success) return ee.preventDefault()
                        }),
                        eL = (0, ep.useRef)(!1),
                        eD = (0, eO.z)(() => {
                            var ee;
                            eL.current || (eL.current = !0, null == (ee = eE.current) || ee.focus(), em.change(eR), (0, eC.Y)(() => {
                                eL.current = !1
                            }))
                        }),
                        eM = (0, eO.z)(ee => {
                            ee.preventDefault()
                        }),
                        ez = (0, ep.useMemo)(() => ({
                            selected: eI
                        }), [eI]),
                        e$ = {
                            ref: eT,
                            onKeyDown: eZ,
                            onMouseDown: eM,
                            onClick: eD,
                            id: es,
                            role: "tab",
                            type: (0, ek.f)(ee, eE),
                            "aria-controls": null == (er = null == (en = ef[eR]) ? void 0 : en.current) ? void 0 : er.id,
                            "aria-selected": eI,
                            tabIndex: eI ? 0 : -1
                        };
                    return (0, ex.sY)({
                        ourProps: e$,
                        theirProps: eo,
                        slot: ez,
                        defaultTag: eK,
                        name: "Tabs.Tab"
                    })
                }),
                eY = "div",
                eQ = (0, ex.yV)(function(ee, et) {
                    let {
                        selectedIndex: en
                    } = eF("Tab.Panels"), er = (0, ew.T)(et), ei = (0, ep.useMemo)(() => ({
                        selectedIndex: en
                    }), [en]);
                    return (0, ex.sY)({
                        ourProps: {
                            ref: er
                        },
                        theirProps: ee,
                        slot: ei,
                        defaultTag: eY,
                        name: "Tabs.Panels"
                    })
                }),
                eJ = "div",
                eX = ex.AN.RenderStrategy | ex.AN.Static,
                e0 = Object.assign(eq, {
                    Group: eH,
                    List: eG,
                    Panels: eQ,
                    Panel: (0, ex.yV)(function(ee, et) {
                        var en, er, ei, es;
                        let eo = (0, eg.M)(),
                            {
                                id: eu = `headlessui-tabs-panel-${eo}`,
                                tabIndex: ec = 0,
                                ...ed
                            } = ee,
                            {
                                selectedIndex: eh,
                                tabs: ef,
                                panels: em
                            } = eF("Tab.Panel"),
                            ev = eU("Tab.Panel"),
                            ey = (0, ep.useRef)(null),
                            eb = (0, ew.T)(ey, et);
                        (0, e_.e)(() => ev.registerPanel(ey), [ev, ey]);
                        let ek = eA("panels"),
                            ej = em.indexOf(ey); - 1 === ej && (ej = ek);
                        let eT = ej === eh,
                            eO = (0, ep.useMemo)(() => ({
                                selected: eT
                            }), [eT]),
                            eC = {
                                ref: eb,
                                id: eu,
                                role: "tabpanel",
                                "aria-labelledby": null == (er = null == (en = ef[ej]) ? void 0 : en.current) ? void 0 : er.id,
                                tabIndex: eT ? ec : -1
                            };
                        return eT || null != (ei = ed.unmount) && !ei || null != (es = ed.static) && es ? (0, ex.sY)({
                            ourProps: eC,
                            theirProps: ed,
                            slot: eO,
                            defaultTag: eJ,
                            features: eX,
                            visible: eT,
                            name: "Tabs.Panel"
                        }) : ep.createElement(eE._, {
                            as: "span",
                            ...eC
                        })
                    })
                });

            function e1(ee) {
                return !!ee && "object" == typeof ee && "label" in ee
            }
            Object.assign(function({
                items: ee,
                selectedIndex: et,
                defaultIndex: en = 0,
                onChange: er,
                children: ei,
                storageKey: es
            }) {
                let [ec, ed] = (0, ep.useState)(en);
                (0, ep.useEffect)(() => {
                    void 0 !== et && ed(et)
                }, [et]), (0, ep.useEffect)(() => {
                    if (!es) return;

                    function ee(ee) {
                        ee.key === es && ed(Number(ee.newValue))
                    }
                    let et = Number(localStorage.getItem(es));
                    return ed(Number.isNaN(et) ? 0 : et), window.addEventListener("storage", ee), () => {
                        window.removeEventListener("storage", ee)
                    }
                }, []);
                let eh = (0, ep.useCallback)(ee => {
                    if (es) {
                        let et = String(ee);
                        localStorage.setItem(es, et), window.dispatchEvent(new StorageEvent("storage", {
                            key: es,
                            newValue: et
                        }));
                        return
                    }
                    ed(ee), er ? .(ee)
                }, []);
                return (0, eu.jsxs)(e0.Group, {
                    selectedIndex: ec,
                    defaultIndex: en,
                    onChange: eh,
                    children: [(0, eu.jsx)("div", {
                        className: "nextra-scrollbar nx-overflow-x-auto nx-overflow-y-hidden nx-overscroll-x-contain",
                        children: (0, eu.jsx)(e0.List, {
                            className: "nx-mt-4 nx-flex nx-w-max nx-min-w-full nx-border-b nx-border-gray-200 nx-pb-px dark:nx-border-neutral-800",
                            children: ee.map((ee, et) => {
                                let en = e1(ee) && ee.disabled;
                                return (0, eu.jsx)(e0, {
                                    disabled: en,
                                    className: ({
                                        selected: ee
                                    }) => (0, eo.Z)("nx-mr-2 nx-rounded-t nx-p-2 nx-font-medium nx-leading-5 nx-transition-colors", "-nx-mb-0.5 nx-select-none nx-border-b-2", ee ? "nx-border-primary-500 nx-text-primary-600" : "nx-border-transparent nx-text-gray-600 hover:nx-border-gray-200 hover:nx-text-black dark:nx-text-gray-200 dark:hover:nx-border-neutral-800 dark:hover:nx-text-white", en && "nx-pointer-events-none nx-text-gray-400 dark:nx-text-neutral-600"),
                                    children: e1(ee) ? ee.label : ee
                                }, et)
                            })
                        })
                    }), (0, eu.jsx)(e0.Panels, {
                        children: ei
                    })]
                })
            }, {
                displayName: "Tabs",
                Tab: function({
                    children: ee,
                    ...et
                }) {
                    return (0, eu.jsx)(e0.Panel, { ...et,
                        className: "nx-rounded nx-pt-6",
                        children: ee
                    })
                }
            });
            var e2 = ({
                    className: ee = "",
                    ...et
                }) => (0, eu.jsx)("td", {
                    className: (0, eo.Z)("nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 dark:nx-border-gray-600", ee),
                    ...et
                }),
                e4 = ({
                    className: ee = "",
                    ...et
                }) => (0, eu.jsx)("table", {
                    className: (0, eo.Z)("nx-block nx-overflow-x-scroll", ee),
                    ...et
                }),
                e3 = ({
                    className: ee = "",
                    ...et
                }) => (0, eu.jsx)("th", {
                    className: (0, eo.Z)("nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 nx-font-semibold dark:nx-border-gray-600", ee),
                    ...et
                }),
                e5 = ({
                    className: ee = "",
                    ...et
                }) => (0, eu.jsx)("tr", {
                    className: (0, eo.Z)("nx-m-0 nx-border-t nx-border-gray-300 nx-p-0 dark:nx-border-gray-600", "even:nx-bg-gray-100 even:dark:nx-bg-gray-600/20", ee),
                    ...et
                }),
                e8 = en(9556),
                e6 = en.n(e8),
                e9 = {
                    cards: (0, eo.Z)("nextra-cards nx-mt-4 nx-gap-4 nx-grid", "nx-not-prose"),
                    card: (0, eo.Z)("nextra-card nx-group nx-flex nx-flex-col nx-justify-start nx-overflow-hidden nx-rounded-lg nx-border nx-border-gray-200", "nx-text-current nx-no-underline dark:nx-shadow-none", "hover:nx-shadow-gray-100 dark:hover:nx-shadow-none nx-shadow-gray-100", "active:nx-shadow-sm active:nx-shadow-gray-200", "nx-transition-all nx-duration-200 hover:nx-border-gray-300"),
                    title: (0, eo.Z)("nx-flex nx-font-semibold nx-items-start nx-gap-2 nx-p-4 nx-text-gray-700 hover:nx-text-gray-900")
                },
                e7 = (0, eu.jsx)("span", {
                    className: "nx-transition-transform nx-duration-75 group-hover:nx-translate-x-[2px]",
                    children: "→"
                }),
                te = Object.assign(function({
                    children: ee,
                    num: et = 3,
                    className: en,
                    style: er,
                    ...ei
                }) {
                    return (0, eu.jsx)("div", {
                        className: (0, eo.Z)(e9.cards, en),
                        ...ei,
                        style: { ...er,
                            "--rows": et
                        },
                        children: ee
                    })
                }, {
                    displayName: "Cards",
                    Card: function({
                        children: ee,
                        title: et,
                        icon: en,
                        image: er,
                        arrow: ei,
                        href: es,
                        ...ec
                    }) {
                        let ed = ei ? e7 : null;
                        return er ? (0, eu.jsxs)(e6(), {
                            href: es,
                            className: (0, eo.Z)(e9.card, "nx-bg-gray-100 nx-shadow dark:nx-border-neutral-700 dark:nx-bg-neutral-800 dark:nx-text-gray-50 hover:nx-shadow-lg dark:hover:nx-border-neutral-500 dark:hover:nx-bg-neutral-700"),
                            ...ec,
                            children: [ee, (0, eu.jsxs)("span", {
                                className: (0, eo.Z)(e9.title, "dark:nx-text-gray-300 dark:hover:nx-text-gray-100"),
                                children: [en, (0, eu.jsxs)("span", {
                                    className: "nx-flex nx-gap-1",
                                    children: [et, ed]
                                })]
                            })]
                        }) : (0, eu.jsx)(e6(), {
                            href: es,
                            className: (0, eo.Z)(e9.card, "nx-bg-transparent nx-shadow-sm dark:nx-border-neutral-800 hover:nx-bg-slate-50 hover:nx-shadow-md dark:hover:nx-border-neutral-700 dark:hover:nx-bg-neutral-900"),
                            ...ec,
                            children: (0, eu.jsxs)("span", {
                                className: (0, eo.Z)(e9.title, "dark:nx-text-neutral-200 dark:hover:nx-text-neutral-50 nx-flex nx-items-center"),
                                children: [en, et, ed]
                            })
                        })
                    }
                }),
                tt = (0, ep.createContext)(0);

            function tn() {
                return (0, ep.useContext)(tt)
            }

            function tr({
                children: ee
            }) {
                return (0, eu.jsx)("div", {
                    className: (0, eo.Z)("nextra-filetree nx-mt-6 nx-select-none nx-text-sm nx-text-gray-800 dark:nx-text-gray-300", "nx-not-prose"),
                    children: (0, eu.jsx)("div", {
                        className: "nx-inline-block nx-rounded-lg nx-border nx-px-4 nx-py-2 dark:nx-border-neutral-800",
                        children: ee
                    })
                })
            }

            function ti() {
                let ee = tn();
                return (0, eu.jsx)(eu.Fragment, {
                    children: Array.from({
                        length: ee
                    }, (ee, et) => (0, eu.jsx)("span", {
                        className: "nx-w-5"
                    }, et))
                })
            }
            var ts = (0, ep.memo)(({
                label: ee,
                name: et,
                open: en,
                children: er,
                defaultOpen: ei = !1,
                onToggle: es
            }) => {
                let eo = tn(),
                    [ec, ed] = (0, ep.useState)(ei),
                    eh = (0, ep.useCallback)(() => {
                        es ? .(!ec), ed(!ec)
                    }, [ec, es]),
                    ef = void 0 === en ? ec : en;
                return (0, eu.jsxs)("li", {
                    className: "nx-flex nx-list-none nx-flex-col",
                    children: [(0, eu.jsxs)("button", {
                        onClick: eh,
                        title: et,
                        className: "nx-inline-flex nx-cursor-pointer nx-items-center nx-py-1 hover:nx-opacity-60",
                        children: [(0, eu.jsx)(ti, {}), (0, eu.jsx)("svg", {
                            width: "1em",
                            height: "1em",
                            viewBox: "0 0 24 24",
                            children: (0, eu.jsx)("path", {
                                fill: "none",
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: ef ? "M5 19a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2 2h4a2 2 0 0 1 2 2v1M5 19h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2Z" : "M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2Z"
                            })
                        }), (0, eu.jsx)("span", {
                            className: "nx-ml-1",
                            children: ee ? ? et
                        })]
                    }), ef && (0, eu.jsx)("ul", {
                        children: (0, eu.jsx)(tt.Provider, {
                            value: eo + 1,
                            children: er
                        })
                    })]
                })
            });
            ts.displayName = "Folder";
            var to = (0, ep.memo)(({
                label: ee,
                name: et,
                active: en
            }) => (0, eu.jsx)("li", {
                className: (0, eo.Z)("nx-flex nx-list-none", en && "nx-text-primary-600 contrast-more:nx-underline"),
                children: (0, eu.jsxs)("span", {
                    className: "nx-inline-flex nx-cursor-default nx-items-center nx-py-1",
                    children: [(0, eu.jsx)(ti, {}), (0, eu.jsx)("svg", {
                        width: "1em",
                        height: "1em",
                        viewBox: "0 0 24 24",
                        children: (0, eu.jsx)("path", {
                            fill: "none",
                            stroke: "currentColor",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z"
                        })
                    }), (0, eu.jsx)("span", {
                        className: "nx-ml-1",
                        children: ee ? ? et
                    })]
                })
            }));
            to.displayName = "File", Object.assign(tr, {
                Folder: ts,
                File: to
            })
        },
        1382: function(ee, et, en) {
            "use strict";
            en.d(et, {
                LZ: function() {
                    return ei
                },
                nQ: function() {
                    return es
                },
                TI: function() {
                    return eo
                },
                D7: function() {
                    return eu
                },
                Qq: function() {
                    return ec
                },
                WD: function() {
                    return ep
                },
                fy: function() {
                    return ed
                },
                n9: function() {
                    return ef
                },
                AV: function() {
                    return em
                },
                Oq: function() {
                    return ex
                },
                kL: function() {
                    return eg
                },
                L4: function() {
                    return ev
                },
                NW: function() {
                    return ey
                },
                NK: function() {
                    return eb
                },
                b0: function() {
                    return e_
                },
                LK: function() {
                    return eh
                }
            });
            var er = en(5250);

            function ei({
                pathClassName: ee,
                ...et
            }) {
                return (0, er.jsx)("svg", {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    ...et,
                    children: (0, er.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M9 5l7 7-7 7",
                        className: ee
                    })
                })
            }

            function es(ee) {
                return (0, er.jsx)("svg", {
                    viewBox: "0 0 20 20",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ...ee,
                    children: (0, er.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                        clipRule: "evenodd"
                    })
                })
            }

            function eo(ee) {
                return (0, er.jsxs)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    stroke: "currentColor",
                    ...ee,
                    children: [(0, er.jsx)("rect", {
                        x: "9",
                        y: "9",
                        width: "13",
                        height: "13",
                        rx: "2",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, er.jsx)("path", {
                        d: "M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                })
            }

            function eu(ee) {
                return (0, er.jsxs)("svg", {
                    width: "24",
                    height: "24",
                    fill: "currentColor",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    ...ee,
                    children: [(0, er.jsx)("title", {
                        children: "Discord"
                    }), (0, er.jsx)("path", {
                        d: "M17.43,7.01c-1-.46-2.07-.8-3.19-.99-.02,0-.04,0-.05,.02-.14,.24-.29,.56-.4,.82-1.2-.18-2.4-.18-3.58,0-.11-.26-.26-.57-.4-.82-.01-.02-.03-.03-.05-.02-1.12,.19-2.19,.53-3.19,.99,0,0-.02,0-.02,.02-2.03,3.03-2.59,5.99-2.31,8.92,0,.01,0,.03,.02,.04,1.34,.98,2.64,1.58,3.91,1.98,.02,0,.04,0,.05-.02,.3-.41,.57-.85,.8-1.3,.01-.03,0-.06-.03-.07-.43-.16-.83-.36-1.22-.58-.03-.02-.03-.06,0-.08,.08-.06,.16-.13,.24-.19,.01-.01,.03-.01,.05,0,2.56,1.17,5.34,1.17,7.87,0,.02,0,.04,0,.05,0,.08,.06,.16,.13,.24,.19,.03,.02,.03,.07,0,.08-.39,.23-.8,.42-1.22,.58-.03,.01-.04,.04-.03,.07,.24,.46,.5,.89,.8,1.3,.01,.02,.03,.02,.05,.02,1.28-.4,2.58-.99,3.92-1.98,.01,0,.02-.02,.02-.04,.33-3.38-.55-6.31-2.32-8.92,0,0-.01-.01-.02-.02Zm-8.03,7.16c-.77,0-1.41-.71-1.41-1.58s.62-1.58,1.41-1.58,1.42,.71,1.41,1.58c0,.87-.62,1.58-1.41,1.58Zm5.21,0c-.77,0-1.41-.71-1.41-1.58s.62-1.58,1.41-1.58,1.42,.71,1.41,1.58c0,.87-.62,1.58-1.41,1.58Z"
                    })]
                })
            }

            function ec({
                isOpen: ee,
                ...et
            }) {
                return (0, er.jsxs)("svg", {
                    height: "12",
                    width: "12",
                    viewBox: "0 0 16 16",
                    fill: "currentColor",
                    ...et,
                    children: [(0, er.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M4.177 7.823l2.396-2.396A.25.25 0 017 5.604v4.792a.25.25 0 01-.427.177L4.177 8.177a.25.25 0 010-.354z",
                        className: ee ? "" : "nx-origin-[35%] nx-rotate-180"
                    }), (0, er.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zm1.75-.25a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25H9.5v-13H1.75zm12.5 13H11v-13h3.25a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25z"
                    })]
                })
            }

            function ed(ee) {
                return (0, er.jsxs)("svg", {
                    width: "24",
                    height: "24",
                    fill: "currentColor",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    ...ee,
                    children: [(0, er.jsx)("title", {
                        children: "GitHub"
                    }), (0, er.jsx)("path", {
                        d: "M12,3.86c-4.45-.05-8.09,3.52-8.14,7.97,.02,3.46,2.26,6.52,5.57,7.57,.41,.07,.56-.17,.56-.38v-1.35c-2.26,.48-2.75-1.07-2.75-1.07-.15-.49-.47-.9-.9-1.17-.74-.49,.06-.48,.06-.48,.52,.07,.98,.37,1.24,.82,.48,.83,1.53,1.12,2.37,.66,.04-.41,.22-.78,.52-1.07-1.81-.2-3.7-.88-3.7-3.94-.02-.8,.28-1.57,.82-2.15-.25-.68-.22-1.44,.08-2.1,0,0,.69-.21,2.22,.81,1.33-.36,2.74-.36,4.07,0,1.55-1.03,2.22-.81,2.22-.81,.3,.66,.33,1.42,.08,2.1,.56,.57,.87,1.34,.87,2.14,0,3.06-1.91,3.74-3.7,3.94,.4,.39,.6,.93,.56,1.48v2.18c0,.26,.15,.47,.56,.38,3.29-1.06,5.53-4.11,5.55-7.56-.05-4.45-3.69-8.02-8.14-7.97"
                    })]
                })
            }

            function ep(ee) {
                return (0, er.jsxs)("svg", {
                    width: "24",
                    height: "24",
                    fill: "currentColor",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    ...ee,
                    children: [(0, er.jsx)("title", {
                        children: "FiveM"
                    }), (0, er.jsx)("polygon", {
                        points: "6.69 15.52 10.95 11.32 8.85 19.4 5.28 19.4 6.69 15.52"
                    }), (0, er.jsx)("polygon", {
                        points: "14.04 5.58 8.11 11.32 8.85 9.35 13.73 4.66 14.04 5.58"
                    }), (0, er.jsx)("polygon", {
                        points: "7.62 12.93 11.63 8.85 11.63 9.53 7.31 13.79 7.62 12.93"
                    }), (0, er.jsx)("polygon", {
                        points: "18.72 19.4 15.15 19.4 12.37 9.9 14.84 7.74 18.72 19.4"
                    }), (0, er.jsx)("polygon", {
                        points: "14.47 6.76 12.12 9.04 12 8.48 14.22 6.26 14.47 6.76"
                    }), (0, er.jsx)("polygon", {
                        points: "13.42 4.6 9.22 8.54 10.58 4.6 13.42 4.6"
                    })]
                })
            }

            function eh(ee) {
                return (0, er.jsxs)("svg", {
                    width: "24",
                    height: "24",
                    fill: "currentColor",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    ...ee,
                    children: [(0, er.jsx)("title", {
                        children: "Youtube"
                    }), (0, er.jsx)("path", {
                        d: "M12.1,5.95h.1c.88,0,5.37,.04,6.58,.36,.74,.2,1.32,.78,1.52,1.53,.11,.41,.19,.95,.24,1.51v.11s.03,.28,.03,.28v.11c.08,.98,.09,1.9,.09,2.11v.08c0,.21-.01,1.19-.09,2.22v.11s-.02,.11-.02,.11c-.05,.62-.13,1.23-.25,1.68-.2,.74-.78,1.33-1.52,1.53-1.25,.34-5.99,.36-6.65,.36h-.15c-.33,0-1.71,0-3.15-.06h-.18s-.09-.01-.09-.01h-.18s-.18-.02-.18-.02c-1.19-.05-2.33-.14-2.86-.28-.74-.2-1.32-.78-1.52-1.53-.12-.45-.2-1.06-.25-1.68v-.11s-.02-.11-.02-.11c-.05-.73-.08-1.46-.09-2.19v-.13c0-.23,.01-1.03,.07-1.91v-.11s.01-.06,.01-.06v-.11s.03-.28,.03-.28v-.11c.06-.56,.14-1.1,.25-1.51,.2-.74,.78-1.33,1.52-1.53,.52-.14,1.66-.23,2.86-.28h.18s.19-.01,.19-.01h.09s.18-.01,.18-.01c1.02-.03,2.05-.05,3.07-.05h.21Zm-1.78,3.45v5.18l4.47-2.59-4.47-2.59Z"
                    })]
                })
            }

            function ef(ee) {
                return (0, er.jsx)("svg", {
                    viewBox: "2 2 16 16",
                    width: "12",
                    height: "12",
                    fill: "currentColor",
                    ...ee,
                    children: (0, er.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z",
                        clipRule: "evenodd"
                    })
                })
            }

            function em(ee) {
                return (0, er.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    width: "20",
                    height: "20",
                    ...ee,
                    children: (0, er.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    })
                })
            }

            function ex(ee) {
                return (0, er.jsxs)("svg", {
                    fill: "none",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    ...ee,
                    children: [(0, er.jsx)("g", {
                        children: (0, er.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M4 6h16"
                        })
                    }), (0, er.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M4 12h16"
                    }), (0, er.jsx)("g", {
                        children: (0, er.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M4 18h16"
                        })
                    })]
                })
            }

            function eg(ee) {
                return (0, er.jsx)("svg", {
                    fill: "none",
                    viewBox: "2 2 20 20",
                    width: "12",
                    height: "12",
                    stroke: "currentColor",
                    ...ee,
                    children: (0, er.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        fill: "currentColor",
                        d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    })
                })
            }

            function ev(ee) {
                return (0, er.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    width: "24",
                    height: "24",
                    ...ee,
                    children: [(0, er.jsx)("circle", {
                        className: "nx-opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4"
                    }), (0, er.jsx)("path", {
                        className: "nx-opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    })]
                })
            }

            function ey(ee) {
                return (0, er.jsx)("svg", {
                    fill: "none",
                    viewBox: "3 3 18 18",
                    width: "12",
                    height: "12",
                    stroke: "currentColor",
                    ...ee,
                    children: (0, er.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        fill: "currentColor",
                        d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    })
                })
            }

            function eb(ee) {
                return (0, er.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    width: "24",
                    height: "24",
                    ...ee,
                    children: (0, er.jsx)("path", {
                        fill: "currentColor",
                        d: "M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
                    })
                })
            }

            function e_(ee) {
                return (0, er.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    ...ee,
                    children: (0, er.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                        clipRule: "evenodd"
                    })
                })
            }
        },
        7298: function(ee, et, en) {
            "use strict";
            en.d(et, {
                Z: function() {
                    return eu
                },
                a: function() {
                    return eh
                }
            });
            var er = en(79);
            let ei = er.createContext({});

            function es(ee) {
                let et = er.useContext(ei);
                return er.useMemo(() => "function" == typeof ee ? ee(et) : { ...et,
                    ...ee
                }, [et, ee])
            }
            let eo = {};

            function eu({
                components: ee,
                children: et,
                disableParentContext: en
            }) {
                let eu;
                return eu = en ? "function" == typeof ee ? ee({}) : ee || eo : es(ee), er.createElement(ei.Provider, {
                    value: eu
                }, et)
            }
            var ec = en(829),
                ed = en.n(ec),
                ep = {
                    img: ee => (0, er.createElement)("object" == typeof ee.src ? ed() : "img", ee)
                },
                eh = ee => es({ ...ep,
                    ...ee
                })
        },
        578: function(ee, et, en) {
            "use strict";
            en.d(et, {
                R: function() {
                    return ei
                }
            });
            var er, ei = ((er = ei || {}).Space = " ", er.Enter = "Enter", er.Escape = "Escape", er.Backspace = "Backspace", er.Delete = "Delete", er.ArrowLeft = "ArrowLeft", er.ArrowUp = "ArrowUp", er.ArrowRight = "ArrowRight", er.ArrowDown = "ArrowDown", er.Home = "Home", er.End = "End", er.PageUp = "PageUp", er.PageDown = "PageDown", er.Tab = "Tab", er)
        },
        7258: function(ee, et, en) {
            "use strict";
            en.d(et, {
                z: function() {
                    return es
                }
            });
            var er = en(79),
                ei = en(4512);
            let es = function(ee) {
                let et = (0, ei.E)(ee);
                return er.useCallback((...ee) => et.current(...ee), [et])
            }
        },
        1253: function(ee, et, en) {
            "use strict";
            en.d(et, {
                M: function() {
                    return ec
                }
            });
            var er, ei = en(79),
                es = en(1223),
                eo = en(1276),
                eu = en(9195);
            let ec = null != (er = ei.useId) ? er : function() {
                let ee = (0, eo.H)(),
                    [et, en] = ei.useState(ee ? () => eu.O.nextId() : null);
                return (0, es.e)(() => {
                    null === et && en(eu.O.nextId())
                }, [et]), null != et ? "" + et : void 0
            }
        },
        1223: function(ee, et, en) {
            "use strict";
            en.d(et, {
                e: function() {
                    return es
                }
            });
            var er = en(79),
                ei = en(9195);
            let es = (ee, et) => {
                ei.O.isServer ? (0, er.useEffect)(ee, et) : (0, er.useLayoutEffect)(ee, et)
            }
        },
        4512: function(ee, et, en) {
            "use strict";
            en.d(et, {
                E: function() {
                    return es
                }
            });
            var er = en(79),
                ei = en(1223);

            function es(ee) {
                let et = (0, er.useRef)(ee);
                return (0, ei.e)(() => {
                    et.current = ee
                }, [ee]), et
            }
        },
        8669: function(ee, et, en) {
            "use strict";
            en.d(et, {
                f: function() {
                    return eo
                }
            });
            var er = en(79),
                ei = en(1223);

            function es(ee) {
                var et;
                if (ee.type) return ee.type;
                let en = null != (et = ee.as) ? et : "button";
                if ("string" == typeof en && "button" === en.toLowerCase()) return "button"
            }

            function eo(ee, et) {
                let [en, eo] = (0, er.useState)(() => es(ee));
                return (0, ei.e)(() => {
                    eo(es(ee))
                }, [ee.type, ee.as]), (0, ei.e)(() => {
                    en || !et.current || et.current instanceof HTMLButtonElement && !et.current.hasAttribute("type") && eo("button")
                }, [en, et]), en
            }
        },
        1276: function(ee, et, en) {
            "use strict";
            en.d(et, {
                H: function() {
                    return es
                }
            });
            var er = en(79),
                ei = en(9195);

            function es() {
                let [ee, et] = (0, er.useState)(ei.O.isHandoffComplete);
                return ee && !1 === ei.O.isHandoffComplete && et(!1), (0, er.useEffect)(() => {
                    !0 !== ee && et(!0)
                }, [ee]), (0, er.useEffect)(() => ei.O.handoff(), []), ee
            }
        },
        3921: function(ee, et, en) {
            "use strict";
            en.d(et, {
                T: function() {
                    return eo
                }
            });
            var er = en(79),
                ei = en(7258);
            let es = Symbol();

            function eo(...ee) {
                let et = (0, er.useRef)(ee);
                (0, er.useEffect)(() => {
                    et.current = ee
                }, [ee]);
                let en = (0, ei.z)(ee => {
                    for (let en of et.current) null != en && ("function" == typeof en ? en(ee) : en.current = ee)
                });
                return ee.every(ee => null == ee || (null == ee ? void 0 : ee[es])) ? void 0 : en
            }
        },
        7899: function(ee, et, en) {
            "use strict";
            en.d(et, {
                A: function() {
                    return eo
                },
                _: function() {
                    return eu
                }
            });
            var er, ei = en(9107);
            let es = "div";
            var eo = ((er = eo || {})[er.None = 1] = "None", er[er.Focusable = 2] = "Focusable", er[er.Hidden = 4] = "Hidden", er);
            let eu = (0, ei.yV)(function(ee, et) {
                let {
                    features: en = 1,
                    ...er
                } = ee, eo = {
                    ref: et,
                    "aria-hidden": (2 & en) == 2 || void 0,
                    style: {
                        position: "fixed",
                        top: 1,
                        left: 1,
                        width: 1,
                        height: 0,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        borderWidth: "0",
                        ...(4 & en) == 4 && (2 & en) != 2 && {
                            display: "none"
                        }
                    }
                };
                return (0, ei.sY)({
                    ourProps: eo,
                    theirProps: er,
                    slot: {},
                    defaultTag: es,
                    name: "Hidden"
                })
            })
        },
        9628: function(ee, et, en) {
            "use strict";

            function er(...ee) {
                return ee.filter(Boolean).join(" ")
            }
            en.d(et, {
                A: function() {
                    return er
                }
            })
        },
        8961: function(ee, et, en) {
            "use strict";
            en.d(et, {
                k: function() {
                    return ei
                }
            });
            var er = en(2745);

            function ei() {
                let ee = [],
                    et = [],
                    en = {
                        enqueue(ee) {
                            et.push(ee)
                        },
                        addEventListener: (ee, et, er, ei) => (ee.addEventListener(et, er, ei), en.add(() => ee.removeEventListener(et, er, ei))),
                        requestAnimationFrame(...ee) {
                            let et = requestAnimationFrame(...ee);
                            return en.add(() => cancelAnimationFrame(et))
                        },
                        nextFrame: (...ee) => en.requestAnimationFrame(() => en.requestAnimationFrame(...ee)),
                        setTimeout(...ee) {
                            let et = setTimeout(...ee);
                            return en.add(() => clearTimeout(et))
                        },
                        microTask(...ee) {
                            let et = {
                                current: !0
                            };
                            return (0, er.Y)(() => {
                                et.current && ee[0]()
                            }), en.add(() => {
                                et.current = !1
                            })
                        },
                        add: et => (ee.push(et), () => {
                            let en = ee.indexOf(et);
                            if (en >= 0) {
                                let [et] = ee.splice(en, 1);
                                et()
                            }
                        }),
                        dispose() {
                            for (let et of ee.splice(0)) et()
                        },
                        async workQueue() {
                            for (let ee of et.splice(0)) await ee()
                        },
                        style(ee, et, en) {
                            let er = ee.style.getPropertyValue(et);
                            return Object.assign(ee.style, {
                                [et]: en
                            }), this.add(() => {
                                Object.assign(ee.style, {
                                    [et]: er
                                })
                            })
                        }
                    };
                return en
            }
        },
        9195: function(ee, et, en) {
            "use strict";
            en.d(et, {
                O: function() {
                    return eu
                }
            });
            var er = Object.defineProperty,
                ei = (ee, et, en) => et in ee ? er(ee, et, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: en
                }) : ee[et] = en,
                es = (ee, et, en) => (ei(ee, "symbol" != typeof et ? et + "" : et, en), en);
            class eo {
                constructor() {
                    es(this, "current", this.detect()), es(this, "handoffState", "pending"), es(this, "currentId", 0)
                }
                set(ee) {
                    this.current !== ee && (this.handoffState = "pending", this.currentId = 0, this.current = ee)
                }
                reset() {
                    this.set(this.detect())
                }
                nextId() {
                    return ++this.currentId
                }
                get isServer() {
                    return "server" === this.current
                }
                get isClient() {
                    return "client" === this.current
                }
                detect() {
                    return "undefined" == typeof window || "undefined" == typeof document ? "server" : "client"
                }
                handoff() {
                    "pending" === this.handoffState && (this.handoffState = "complete")
                }
                get isHandoffComplete() {
                    return "complete" === this.handoffState
                }
            }
            let eu = new eo
        },
        5661: function(ee, et, en) {
            "use strict";
            en.d(et, {
                EO: function() {
                    return ej
                },
                TO: function() {
                    return eh
                },
                fE: function() {
                    return ef
                },
                jA: function() {
                    return eE
                },
                sP: function() {
                    return ev
                },
                tJ: function() {
                    return eg
                },
                wI: function() {
                    return ey
                },
                z2: function() {
                    return ek
                }
            });
            var er, ei, es, eo, eu = en(8961),
                ec = en(5761),
                ed = en(8694);
            let ep = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(ee => `${ee}:not([tabindex='-1'])`).join(",");
            var eh = ((er = eh || {})[er.First = 1] = "First", er[er.Previous = 2] = "Previous", er[er.Next = 4] = "Next", er[er.Last = 8] = "Last", er[er.WrapAround = 16] = "WrapAround", er[er.NoScroll = 32] = "NoScroll", er),
                ef = ((ei = ef || {})[ei.Error = 0] = "Error", ei[ei.Overflow = 1] = "Overflow", ei[ei.Success = 2] = "Success", ei[ei.Underflow = 3] = "Underflow", ei),
                em = ((es = em || {})[es.Previous = -1] = "Previous", es[es.Next = 1] = "Next", es);

            function ex(ee = document.body) {
                return null == ee ? [] : Array.from(ee.querySelectorAll(ep)).sort((ee, et) => Math.sign((ee.tabIndex || Number.MAX_SAFE_INTEGER) - (et.tabIndex || Number.MAX_SAFE_INTEGER)))
            }
            var eg = ((eo = eg || {})[eo.Strict = 0] = "Strict", eo[eo.Loose = 1] = "Loose", eo);

            function ev(ee, et = 0) {
                var en;
                return ee !== (null == (en = (0, ed.r)(ee)) ? void 0 : en.body) && (0, ec.E)(et, {
                    0: () => ee.matches(ep),
                    1() {
                        let et = ee;
                        for (; null !== et;) {
                            if (et.matches(ep)) return !0;
                            et = et.parentElement
                        }
                        return !1
                    }
                })
            }

            function ey(ee) {
                let et = (0, ed.r)(ee);
                (0, eu.k)().nextFrame(() => {
                    et && !ev(et.activeElement, 0) && eb(ee)
                })
            }

            function eb(ee) {
                null == ee || ee.focus({
                    preventScroll: !0
                })
            }
            let e_ = "textarea,input";

            function ew(ee) {
                var et, en;
                return null != (en = null == (et = null == ee ? void 0 : ee.matches) ? void 0 : et.call(ee, e_)) && en
            }

            function ek(ee, et = ee => ee) {
                return ee.slice().sort((ee, en) => {
                    let er = et(ee),
                        ei = et(en);
                    if (null === er || null === ei) return 0;
                    let es = er.compareDocumentPosition(ei);
                    return es & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : es & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
                })
            }

            function ej(ee, et) {
                return eE(ex(), et, {
                    relativeTo: ee
                })
            }

            function eE(ee, et, {
                sorted: en = !0,
                relativeTo: er = null,
                skipElements: ei = []
            } = {}) {
                let es = Array.isArray(ee) ? ee.length > 0 ? ee[0].ownerDocument : document : ee.ownerDocument,
                    eo = Array.isArray(ee) ? en ? ek(ee) : ee : ex(ee);
                ei.length > 0 && eo.length > 1 && (eo = eo.filter(ee => !ei.includes(ee))), er = null != er ? er : es.activeElement;
                let eu = (() => {
                        if (5 & et) return 1;
                        if (10 & et) return -1;
                        throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    ec = (() => {
                        if (1 & et) return 0;
                        if (2 & et) return Math.max(0, eo.indexOf(er)) - 1;
                        if (4 & et) return Math.max(0, eo.indexOf(er)) + 1;
                        if (8 & et) return eo.length - 1;
                        throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    ed = 32 & et ? {
                        preventScroll: !0
                    } : {},
                    ep = 0,
                    eh = eo.length,
                    ef;
                do {
                    if (ep >= eh || ep + eh <= 0) return 0;
                    let ee = ec + ep;
                    if (16 & et) ee = (ee + eh) % eh;
                    else {
                        if (ee < 0) return 3;
                        if (ee >= eh) return 1
                    }
                    null == (ef = eo[ee]) || ef.focus(ed), ep += eu
                } while (ef !== es.activeElement);
                return 6 & et && ew(ef) && ef.select(), ef.hasAttribute("tabindex") || ef.setAttribute("tabindex", "0"), 2
            }
        },
        5761: function(ee, et, en) {
            "use strict";

            function er(ee, et, ...en) {
                if (ee in et) {
                    let er = et[ee];
                    return "function" == typeof er ? er(...en) : er
                }
                let ei = Error(`Tried to handle "${ee}" but there is no handler defined. Only defined handlers are: ${Object.keys(et).map(ee=>`"${ee}"`).join(", ")}.`);
                throw Error.captureStackTrace && Error.captureStackTrace(ei, er), ei
            }
            en.d(et, {
                E: function() {
                    return er
                }
            })
        },
        2745: function(ee, et, en) {
            "use strict";

            function er(ee) {
                "function" == typeof queueMicrotask ? queueMicrotask(ee) : Promise.resolve().then(ee).catch(ee => setTimeout(() => {
                    throw ee
                }))
            }
            en.d(et, {
                Y: function() {
                    return er
                }
            })
        },
        8694: function(ee, et, en) {
            "use strict";
            en.d(et, {
                r: function() {
                    return ei
                }
            });
            var er = en(9195);

            function ei(ee) {
                return er.O.isServer ? null : ee instanceof Node ? ee.ownerDocument : null != ee && ee.hasOwnProperty("current") && ee.current instanceof Node ? ee.current.ownerDocument : document
            }
        },
        9107: function(ee, et, en) {
            "use strict";
            en.d(et, {
                AN: function() {
                    return ec
                },
                l4: function() {
                    return ed
                },
                oA: function() {
                    return eg
                },
                sY: function() {
                    return ep
                },
                yV: function() {
                    return ex
                }
            });
            var er, ei, es = en(79),
                eo = en(9628),
                eu = en(5761),
                ec = ((er = ec || {})[er.None = 0] = "None", er[er.RenderStrategy = 1] = "RenderStrategy", er[er.Static = 2] = "Static", er),
                ed = ((ei = ed || {})[ei.Unmount = 0] = "Unmount", ei[ei.Hidden = 1] = "Hidden", ei);

            function ep({
                ourProps: ee,
                theirProps: et,
                slot: en,
                defaultTag: er,
                features: ei,
                visible: es = !0,
                name: eo
            }) {
                let ec = em(et, ee);
                if (es) return eh(ec, en, er, eo);
                let ed = null != ei ? ei : 0;
                if (2 & ed) {
                    let {
                        static: ee = !1,
                        ...et
                    } = ec;
                    if (ee) return eh(et, en, er, eo)
                }
                if (1 & ed) {
                    let {
                        unmount: ee = !0,
                        ...et
                    } = ec;
                    return (0, eu.E)(ee ? 0 : 1, {
                        0: () => null,
                        1: () => eh({ ...et,
                            hidden: !0,
                            style: {
                                display: "none"
                            }
                        }, en, er, eo)
                    })
                }
                return eh(ec, en, er, eo)
            }

            function eh(ee, et = {}, en, er) {
                var ei;
                let {
                    as: eu = en,
                    children: ec,
                    refName: ed = "ref",
                    ...ep
                } = ev(ee, ["unmount", "static"]), eh = void 0 !== ee.ref ? {
                    [ed]: ee.ref
                } : {}, ex = "function" == typeof ec ? ec(et) : ec;
                ep.className && "function" == typeof ep.className && (ep.className = ep.className(et));
                let ey = {};
                if (et) {
                    let ee = !1,
                        en = [];
                    for (let [er, ei] of Object.entries(et)) "boolean" == typeof ei && (ee = !0), !0 === ei && en.push(er);
                    ee && (ey["data-headlessui-state"] = en.join(" "))
                }
                if (eu === es.Fragment && Object.keys(eg(ep)).length > 0) {
                    if (!(0, es.isValidElement)(ex) || Array.isArray(ex) && ex.length > 1) throw Error(['Passing props on "Fragment"!', "", `The current component <${er} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(ep).map(ee => `  - ${ee}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(ee => `  - ${ee}`).join(`
`)].join(`
`));
                    let ee = (0, eo.A)(null == (ei = ex.props) ? void 0 : ei.className, ep.className),
                        et = ee ? {
                            className: ee
                        } : {};
                    return (0, es.cloneElement)(ex, Object.assign({}, em(ex.props, eg(ev(ep, ["ref"]))), ey, eh, ef(ex.ref, eh.ref), et))
                }
                return (0, es.createElement)(eu, Object.assign({}, ev(ep, ["ref"]), eu !== es.Fragment && eh, eu !== es.Fragment && ey), ex)
            }

            function ef(...ee) {
                return {
                    ref: ee.every(ee => null == ee) ? void 0 : et => {
                        for (let en of ee) null != en && ("function" == typeof en ? en(et) : en.current = et)
                    }
                }
            }

            function em(...ee) {
                var et;
                if (0 === ee.length) return {};
                if (1 === ee.length) return ee[0];
                let en = {},
                    er = {};
                for (let ei of ee)
                    for (let ee in ei) ee.startsWith("on") && "function" == typeof ei[ee] ? (null != (et = er[ee]) || (er[ee] = []), er[ee].push(ei[ee])) : en[ee] = ei[ee];
                if (en.disabled || en["aria-disabled"]) return Object.assign(en, Object.fromEntries(Object.keys(er).map(ee => [ee, void 0])));
                for (let ee in er) Object.assign(en, {
                    [ee](et, ...en) {
                        for (let ei of er[ee]) {
                            if ((et instanceof Event || (null == et ? void 0 : et.nativeEvent) instanceof Event) && et.defaultPrevented) return;
                            ei(et, ...en)
                        }
                    }
                });
                return en
            }

            function ex(ee) {
                var et;
                return Object.assign((0, es.forwardRef)(ee), {
                    displayName: null != (et = ee.displayName) ? et : ee.name
                })
            }

            function eg(ee) {
                let et = Object.assign({}, ee);
                for (let ee in et) void 0 === et[ee] && delete et[ee];
                return et
            }

            function ev(ee, et = []) {
                let en = Object.assign({}, ee);
                for (let ee of et) ee in en && delete en[ee];
                return en
            }
        },
        3230: function(ee, et, en) {
            "use strict";

            function er(ee) {
                var et, en, ei = "";
                if ("string" == typeof ee || "number" == typeof ee) ei += ee;
                else if ("object" == typeof ee) {
                    if (Array.isArray(ee))
                        for (et = 0; et < ee.length; et++) ee[et] && (en = er(ee[et])) && (ei && (ei += " "), ei += en);
                    else
                        for (et in ee) ee[et] && (ei && (ei += " "), ei += et)
                }
                return ei
            }

            function ei() {
                for (var ee, et, en = 0, ei = ""; en < arguments.length;)(ee = arguments[en++]) && (et = er(ee)) && (ei && (ei += " "), ei += et);
                return ei
            }
            et.Z = ei
        },
        4594: function(ee, et, en) {
            "use strict";
            en.d(et, {
                ZW: function() {
                    return es
                },
                eZ: function() {
                    return eu
                },
                hV: function() {
                    return ec
                }
            });
            var er = en(8658),
                ei = en(4675),
                es = "en-US",
                eo = ei.cwd();
            er.join(eo, "public");
            var eu = Symbol.for("__nextra_internal__"),
                ec = new Set(["/404", "/500"])
        }
    },
    function(ee) {
        var et = function(et) {
            return ee(ee.s = et)
        };
        ee.O(0, [774, 179], function() {
            return et(4120), et(8331)
        }), _N_E = ee.O()
    }
]);