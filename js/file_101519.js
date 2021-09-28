function dd(e) {
    console.log(e)
}

function tooltip(e, t, i, n, s, r) {
    var o, a;
    if (n = n || "focus", s = s || "blur", r = r || {
            my: "bottom center",
            at: "top center"
        }, App.General.is_mobile() && $("form.form").length) {
        var l = {};
        r.adjust = {}, l.full = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, l.form = $("form.form").width(), l.field = e.width() / 2, l.half = (l.full - l.form) / 2, l.one = l.form / 2 - l.field, l.two = l.half / 2, l.diff = l.one > l.two ? l.one - l.two : 0, l.diff = l.diff > l.field ? l.field : l.diff, r.adjust.x = l.diff
    }
    return "select-one" === e.prop("type") && (t = !1), a = "show" === t && n, o = {
        content: {
            text: i
        },
        position: r,
        style: {
            classes: "qtip-tipsy"
        },
        show: a,
        hide: s,
        events: {}
    }, e.qtip("destroy"), e.qtip(o), e
}

function isNumberKey(e) {
    var t = !1;
    try {
        var i = e.which ? e.which : e.keyCode;
        (i >= 48 && i <= 57 || i >= 96 && i <= 105) && (t = !0)
    } catch (e) {}
    return t
}

function ajax_json(e, t, i, n, s, r) {
    t = t || "post", i = i || !1, n = n || {}, s = s || function() {}, r = r || function() {}, $.ajax({
        url: e,
        method: t,
        async: i,
        dataType: "json",
        data: n,
        beforeSend: s,
        success: r
    })
}

function input_mask(e, t) {
    var i, n, s, r;
    switch (t) {
        case "phone":
            i = ["(", /[1-9]/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/], n = !0, s = !0;
            break;
        case "zip":
            i = [/\d/, /\d/, /\d/, /\d/, /\d/], n = !1, s = !1;
            break;
        case "birthdate":
            i = [/\d/, /\d/, " ", "/", " ", /\d/, /\d/, " ", "/", " ", /\d/, /\d/, /\d/, /\d/], n = !0, s = !0;
            break;
        case "dob":
            i = [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/], n = !0, s = !0
    }
    e.each(function() {
        void 0 !== (r = jQuery(this).get(0)) && vanillaTextMask.maskInput({
            inputElement: r,
            mask: i,
            guide: n,
            keepCharPositions: s
        })
    })
}

function trim_mask(e) {
    return e = e.replace(" ", ""), e = e.replace("_", "")
}

function k(e, t) {
    return void 0 !== e[t] ? e[t] : ""
}

function array_filter(e, t, i) {
    var n, s, r = [];
    s = new RegExp(e, t);
    for (n in i) s.test(i[n]) && r.push(i[n]);
    return !!r.length && r
}

function submit_to_tztleads(e) {
    var t = document.getElementById(e + "_modal"),
        i = document.getElementById(e + "_close"),
        n = {
            moo: "Mutual of Omaha",
            aetna: "aetna",
            humana: "Humana"
        },
        s = {
            submit_lead: e
        };
    dataLayer.push({
        event: "BrandedLinkClick",
        carrier: n[e]
    }), ajax_json(".", !1, !0, s, null, function(t) {
        dataLayer.push({
            event: "BrandedLinkResponse",
            carrier: n[e],
            success: t.success,
            leadId: t.LeadId,
            error: t.errors
        })
    }), t.style.display = "block", i.onclick = function() {
        t.style.display = "none"
    }, window.onclick = function(e) {
        e.target === t && (t.style.display = "none")
    }
}! function(e, t) {
    function i(e) {
        var t = e.length,
            i = le.type(e);
        return !le.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === i || "function" !== i && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)))
    }

    function n(e) {
        var t = ke[e] = {};
        return le.each(e.match(ue) || [], function(e, i) {
            t[i] = !0
        }), t
    }

    function s(e, i, n, s) {
        if (le.acceptData(e)) {
            var r, o, a = le.expando,
                l = "string" == typeof i,
                c = e.nodeType,
                u = c ? le.cache : e,
                d = c ? e[a] : e[a] && a;
            if (d && u[d] && (s || u[d].data) || !l || n !== t) return d || (c ? e[a] = d = K.pop() || le.guid++ : d = a), u[d] || (u[d] = {}, c || (u[d].toJSON = le.noop)), ("object" == typeof i || "function" == typeof i) && (s ? u[d] = le.extend(u[d], i) : u[d].data = le.extend(u[d].data, i)), r = u[d], s || (r.data || (r.data = {}), r = r.data), n !== t && (r[le.camelCase(i)] = n), l ? null == (o = r[i]) && (o = r[le.camelCase(i)]) : o = r, o
        }
    }

    function r(e, t, i) {
        if (le.acceptData(e)) {
            var n, s, r, o = e.nodeType,
                l = o ? le.cache : e,
                c = o ? e[le.expando] : le.expando;
            if (l[c]) {
                if (t && (r = i ? l[c] : l[c].data)) {
                    le.isArray(t) ? t = t.concat(le.map(t, le.camelCase)) : t in r ? t = [t] : (t = le.camelCase(t), t = t in r ? [t] : t.split(" "));
                    for (n = 0, s = t.length; s > n; n++) delete r[t[n]];
                    if (!(i ? a : le.isEmptyObject)(r)) return
                }(i || (delete l[c].data, a(l[c]))) && (o ? le.cleanData([e], !0) : le.support.deleteExpando || l != l.window ? delete l[c] : l[c] = null)
            }
        }
    }

    function o(e, i, n) {
        if (n === t && 1 === e.nodeType) {
            var s = "data-" + i.replace(Te, "-$1").toLowerCase();
            if ("string" == typeof(n = e.getAttribute(s))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ce.test(n) ? le.parseJSON(n) : n)
                } catch (e) {}
                le.data(e, i, n)
            } else n = t
        }
        return n
    }

    function a(e) {
        var t;
        for (t in e)
            if (("data" !== t || !le.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function l() {
        return !0
    }

    function c() {
        return !1
    }

    function u(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);
        return e
    }

    function d(e, t, i) {
        if (t = t || 0, le.isFunction(t)) return le.grep(e, function(e, n) {
            return !!t.call(e, n, e) === i
        });
        if (t.nodeType) return le.grep(e, function(e) {
            return e === t === i
        });
        if ("string" == typeof t) {
            var n = le.grep(e, function(e) {
                return 1 === e.nodeType
            });
            if (Ie.test(t)) return le.filter(t, n, !i);
            t = le.filter(t, n)
        }
        return le.grep(e, function(e) {
            return le.inArray(e, t) >= 0 === i
        })
    }

    function p(e) {
        var t = Be.split("|"),
            i = e.createDocumentFragment();
        if (i.createElement)
            for (; t.length;) i.createElement(t.pop());
        return i
    }

    function h(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function f(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e
    }

    function m(e) {
        var t = st.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function g(e, t) {
        for (var i, n = 0; null != (i = e[n]); n++) le._data(i, "globalEval", !t || le._data(t[n], "globalEval"))
    }

    function v(e, t) {
        if (1 === t.nodeType && le.hasData(e)) {
            var i, n, s, r = le._data(e),
                o = le._data(t, r),
                a = r.events;
            if (a) {
                delete o.handle, o.events = {};
                for (i in a)
                    for (n = 0, s = a[i].length; s > n; n++) le.event.add(t, i, a[i][n])
            }
            o.data && (o.data = le.extend({}, o.data))
        }
    }

    function y(e, t) {
        var i, n, s;
        if (1 === t.nodeType) {
            if (i = t.nodeName.toLowerCase(), !le.support.noCloneEvent && t[le.expando]) {
                s = le._data(t);
                for (n in s.events) le.removeEvent(t, n, s.handle);
                t.removeAttribute(le.expando)
            }
            "script" === i && t.text !== e.text ? (f(t).text = e.text, m(t)) : "object" === i ? (t.parentNode && (t.outerHTML = e.outerHTML), le.support.html5Clone && e.innerHTML && !le.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === i && tt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === i ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === i || "textarea" === i) && (t.defaultValue = e.defaultValue)
        }
    }

    function b(e, i) {
        var n, s, r = 0,
            o = typeof e.getElementsByTagName !== Z ? e.getElementsByTagName(i || "*") : typeof e.querySelectorAll !== Z ? e.querySelectorAll(i || "*") : t;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (s = n[r]); r++) !i || le.nodeName(s, i) ? o.push(s) : le.merge(o, b(s, i));
        return i === t || i && le.nodeName(e, i) ? le.merge([e], o) : o
    }

    function w(e) {
        tt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function x(e, t) {
        if (t in e) return t;
        for (var i = t.charAt(0).toUpperCase() + t.slice(1), n = t, s = Ct.length; s--;)
            if ((t = Ct[s] + i) in e) return t;
        return n
    }

    function _(e, t) {
        return e = t || e, "none" === le.css(e, "display") || !le.contains(e.ownerDocument, e)
    }

    function k(e, t) {
        for (var i, n, s, r = [], o = 0, a = e.length; a > o; o++) n = e[o], n.style && (r[o] = le._data(n, "olddisplay"), i = n.style.display, t ? (r[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && _(n) && (r[o] = le._data(n, "olddisplay", $(n.nodeName)))) : r[o] || (s = _(n), (i && "none" !== i || !s) && le._data(n, "olddisplay", s ? i : le.css(n, "display"))));
        for (o = 0; a > o; o++) n = e[o], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[o] || "" : "none"));
        return e
    }

    function C(e, t, i) {
        var n = vt.exec(t);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
    }

    function T(e, t, i, n, s) {
        for (var r = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > r; r += 2) "margin" === i && (o += le.css(e, i + kt[r], !0, s)), n ? ("content" === i && (o -= le.css(e, "padding" + kt[r], !0, s)), "margin" !== i && (o -= le.css(e, "border" + kt[r] + "Width", !0, s))) : (o += le.css(e, "padding" + kt[r], !0, s), "padding" !== i && (o += le.css(e, "border" + kt[r] + "Width", !0, s)));
        return o
    }

    function S(e, t, i) {
        var n = !0,
            s = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = ut(e),
            o = le.support.boxSizing && "border-box" === le.css(e, "boxSizing", !1, r);
        if (0 >= s || null == s) {
            if (s = dt(e, t, r), (0 > s || null == s) && (s = e.style[t]), yt.test(s)) return s;
            n = o && (le.support.boxSizingReliable || s === e.style[t]), s = parseFloat(s) || 0
        }
        return s + T(e, t, i || (o ? "border" : "content"), n, r) + "px"
    }

    function $(e) {
        var t = G,
            i = wt[e];
        return i || (i = A(e, t), "none" !== i && i || (ct = (ct || le("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (ct[0].contentWindow || ct[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), i = A(e, t), ct.detach()), wt[e] = i), i
    }

    function A(e, t) {
        var i = le(t.createElement(e)).appendTo(t.body),
            n = le.css(i[0], "display");
        return i.remove(), n
    }

    function F(e, t, i, n) {
        var s;
        if (le.isArray(t)) le.each(t, function(t, s) {
            i || St.test(e) ? n(e, s) : F(e + "[" + ("object" == typeof s ? t : "") + "]", s, i, n)
        });
        else if (i || "object" !== le.type(t)) n(e, t);
        else
            for (s in t) F(e + "[" + s + "]", t[s], i, n)
    }

    function P(e) {
        return function(t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, s = 0,
                r = t.toLowerCase().match(ue) || [];
            if (le.isFunction(i))
                for (; n = r[s++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function M(e, i, n, s) {
        function r(l) {
            var c;
            return o[l] = !0, le.each(e[l] || [], function(e, l) {
                var u = l(i, n, s);
                return "string" != typeof u || a || o[u] ? a ? !(c = u) : t : (i.dataTypes.unshift(u), r(u), !1)
            }), c
        }
        var o = {},
            a = e === It;
        return r(i.dataTypes[0]) || !o["*"] && r("*")
    }

    function D(e, i) {
        var n, s, r = le.ajaxSettings.flatOptions || {};
        for (s in i) i[s] !== t && ((r[s] ? e : n || (n = {}))[s] = i[s]);
        return n && le.extend(!0, e, n), e
    }

    function O(e, i, n) {
        var s, r, o, a, l = e.contents,
            c = e.dataTypes,
            u = e.responseFields;
        for (a in u) a in n && (i[u[a]] = n[a]);
        for (;
            "*" === c[0];) c.shift(), r === t && (r = e.mimeType || i.getResponseHeader("Content-Type"));
        if (r)
            for (a in l)
                if (l[a] && l[a].test(r)) {
                    c.unshift(a);
                    break
                }
        if (c[0] in n) o = c[0];
        else {
            for (a in n) {
                if (!c[0] || e.converters[a + " " + c[0]]) {
                    o = a;
                    break
                }
                s || (s = a)
            }
            o = o || s
        }
        return o ? (o !== c[0] && c.unshift(o), n[o]) : t
    }

    function E(e, t) {
        var i, n, s, r, o = {},
            a = 0,
            l = e.dataTypes.slice(),
            c = l[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), l[1])
            for (s in e.converters) o[s.toLowerCase()] = e.converters[s];
        for (; n = l[++a];)
            if ("*" !== n) {
                if ("*" !== c && c !== n) {
                    if (!(s = o[c + " " + n] || o["* " + n]))
                        for (i in o)
                            if (r = i.split(" "), r[1] === n && (s = o[c + " " + r[0]] || o["* " + r[0]])) {
                                !0 === s ? s = o[i] : !0 !== o[i] && (n = r[0], l.splice(a--, 0, n));
                                break
                            }
                    if (!0 !== s)
                        if (s && e.throws) t = s(t);
                        else try {
                            t = s(t)
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: s ? e : "No conversion from " + c + " to " + n
                            }
                        }
                }
                c = n
            }
        return {
            state: "success",
            data: t
        }
    }

    function N() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }

    function j() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function L() {
        return setTimeout(function() {
            Qt = t
        }), Qt = le.now()
    }

    function q(e, t) {
        le.each(t, function(t, i) {
            for (var n = (ni[t] || []).concat(ni["*"]), s = 0, r = n.length; r > s; s++)
                if (n[s].call(e, t, i)) return
        })
    }

    function z(e, t, i) {
        var n, s, r = 0,
            o = ii.length,
            a = le.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var t = Qt || L(), i = Math.max(0, c.startTime + c.duration - t), n = i / c.duration || 0, r = 1 - n, o = 0, l = c.tweens.length; l > o; o++) c.tweens[o].run(r);
                return a.notifyWith(e, [c, r, i]), 1 > r && l ? i : (a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: le.extend({}, t),
                opts: le.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: Qt || L(),
                duration: i.duration,
                tweens: [],
                createTween: function(t, i) {
                    var n = le.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(t) {
                    var i = 0,
                        n = t ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; n > i; i++) c.tweens[i].run(1);
                    return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (H(u, c.opts.specialEasing); o > r; r++)
            if (n = ii[r].call(c, e, u, c.opts)) return n;
        return q(c, u), le.isFunction(c.opts.start) && c.opts.start.call(e, c), le.fx.timer(le.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function H(e, t) {
        var i, n, s, r, o;
        for (s in e)
            if (n = le.camelCase(s), r = t[n], i = e[s], le.isArray(i) && (r = i[1], i = e[s] = i[0]), s !== n && (e[n] = i, delete e[s]), (o = le.cssHooks[n]) && "expand" in o) {
                i = o.expand(i), delete e[n];
                for (s in i) s in e || (e[s] = i[s], t[s] = r)
            } else t[n] = r
    }

    function W(e, t, i) {
        var n, s, r, o, a, l, c, u, d, p = this,
            h = e.style,
            f = {},
            m = [],
            g = e.nodeType && _(e);
        i.queue || (u = le._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, d = u.empty.fire, u.empty.fire = function() {
            u.unqueued || d()
        }), u.unqueued++, p.always(function() {
            p.always(function() {
                u.unqueued--, le.queue(e, "fx").length || u.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === le.css(e, "display") && "none" === le.css(e, "float") && (le.support.inlineBlockNeedsLayout && "inline" !== $(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), i.overflow && (h.overflow = "hidden", le.support.shrinkWrapBlocks || p.always(function() {
            h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
        }));
        for (s in t)
            if (o = t[s], Kt.exec(o)) {
                if (delete t[s], l = l || "toggle" === o, o === (g ? "hide" : "show")) continue;
                m.push(s)
            }
        if (r = m.length) {
            a = le._data(e, "fxshow") || le._data(e, "fxshow", {}), "hidden" in a && (g = a.hidden), l && (a.hidden = !g), g ? le(e).show() : p.done(function() {
                le(e).hide()
            }), p.done(function() {
                var t;
                le._removeData(e, "fxshow");
                for (t in f) le.style(e, t, f[t])
            });
            for (s = 0; r > s; s++) n = m[s], c = p.createTween(n, g ? a[n] : 0), f[n] = a[n] || le.style(e, n), n in a || (a[n] = c.start, g && (c.end = c.start, c.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function Y(e, t, i, n, s) {
        return new Y.prototype.init(e, t, i, n, s)
    }

    function I(e, t) {
        var i, n = {
                height: e
            },
            s = 0;
        for (t = t ? 1 : 0; 4 > s; s += 2 - t) i = kt[s], n["margin" + i] = n["padding" + i] = e;
        return t && (n.opacity = n.width = e), n
    }

    function V(e) {
        return le.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var R, B, Z = typeof t,
        G = e.document,
        U = e.location,
        X = e.jQuery,
        Q = e.$,
        J = {},
        K = [],
        ee = "1.9.1",
        te = K.concat,
        ie = K.push,
        ne = K.slice,
        se = K.indexOf,
        re = J.toString,
        oe = J.hasOwnProperty,
        ae = ee.trim,
        le = function(e, t) {
            return new le.fn.init(e, t, B)
        },
        ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ue = /\S+/g,
        de = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        pe = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        he = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        fe = /^[\],:{}\s]*$/,
        me = /(?:^|:|,)(?:\s*\[)+/g,
        ge = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        ve = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        ye = /^-ms-/,
        be = /-([\da-z])/gi,
        we = function(e, t) {
            return t.toUpperCase()
        },
        xe = function(e) {
            (G.addEventListener || "load" === e.type || "complete" === G.readyState) && (_e(), le.ready())
        },
        _e = function() {
            G.addEventListener ? (G.removeEventListener("DOMContentLoaded", xe, !1), e.removeEventListener("load", xe, !1)) : (G.detachEvent("onreadystatechange", xe), e.detachEvent("onload", xe))
        };
    le.fn = le.prototype = {
        jquery: ee,
        constructor: le,
        init: function(e, i, n) {
            var s, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (!(s = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : pe.exec(e)) || !s[1] && i) return !i || i.jquery ? (i || n).find(e) : this.constructor(i).find(e);
                if (s[1]) {
                    if (i = i instanceof le ? i[0] : i, le.merge(this, le.parseHTML(s[1], i && i.nodeType ? i.ownerDocument || i : G, !0)), he.test(s[1]) && le.isPlainObject(i))
                        for (s in i) le.isFunction(this[s]) ? this[s](i[s]) : this.attr(s, i[s]);
                    return this
                }
                if ((r = G.getElementById(s[2])) && r.parentNode) {
                    if (r.id !== s[2]) return n.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = G, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : le.isFunction(e) ? n.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), le.makeArray(e, this))
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return ne.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = le.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return le.each(this, e, t)
        },
        ready: function(e) {
            return le.ready.promise().done(e), this
        },
        slice: function() {
            return this.pushStack(ne.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                i = +e + (0 > e ? t : 0);
            return this.pushStack(i >= 0 && t > i ? [this[i]] : [])
        },
        map: function(e) {
            return this.pushStack(le.map(this, function(t, i) {
                return e.call(t, i, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: ie,
        sort: [].sort,
        splice: [].splice
    }, le.fn.init.prototype = le.fn, le.extend = le.fn.extend = function() {
        var e, i, n, s, r, o, a = arguments[0] || {},
            l = 1,
            c = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[1] || {}, l = 2), "object" == typeof a || le.isFunction(a) || (a = {}), c === l && (a = this, --l); c > l; l++)
            if (null != (r = arguments[l]))
                for (s in r) e = a[s], n = r[s], a !== n && (u && n && (le.isPlainObject(n) || (i = le.isArray(n))) ? (i ? (i = !1, o = e && le.isArray(e) ? e : []) : o = e && le.isPlainObject(e) ? e : {}, a[s] = le.extend(u, o, n)) : n !== t && (a[s] = n));
        return a
    }, le.extend({
        noConflict: function(t) {
            return e.$ === le && (e.$ = Q), t && e.jQuery === le && (e.jQuery = X), le
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? le.readyWait++ : le.ready(!0)
        },
        ready: function(e) {
            if (!0 === e ? !--le.readyWait : !le.isReady) {
                if (!G.body) return setTimeout(le.ready);
                le.isReady = !0, !0 !== e && --le.readyWait > 0 || (R.resolveWith(G, [le]), le.fn.trigger && le(G).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === le.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === le.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? J[re.call(e)] || "object" : typeof e
        },
        isPlainObject: function(e) {
            if (!e || "object" !== le.type(e) || e.nodeType || le.isWindow(e)) return !1;
            try {
                if (e.constructor && !oe.call(e, "constructor") && !oe.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            var i;
            for (i in e);
            return i === t || oe.call(e, i)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, i) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (i = t, t = !1), t = t || G;
            var n = he.exec(e),
                s = !i && [];
            return n ? [t.createElement(n[1])] : (n = le.buildFragment([e], t, s), s && le(s).remove(), le.merge([], n.childNodes))
        },
        parseJSON: function(i) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(i) : null === i ? i : "string" == typeof i && (i = le.trim(i)) && fe.test(i.replace(ge, "@").replace(ve, "]").replace(me, "")) ? Function("return " + i)() : (le.error("Invalid JSON: " + i), t)
        },
        parseXML: function(i) {
            var n, s;
            if (!i || "string" != typeof i) return null;
            try {
                e.DOMParser ? (s = new DOMParser, n = s.parseFromString(i, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(i))
            } catch (e) {
                n = t
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || le.error("Invalid XML: " + i), n
        },
        noop: function() {},
        globalEval: function(t) {
            t && le.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(ye, "ms-").replace(be, we)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var s = 0,
                r = e.length,
                o = i(e);
            if (n) {
                if (o)
                    for (; r > s && !1 !== t.apply(e[s], n); s++);
                else
                    for (s in e)
                        if (!1 === t.apply(e[s], n)) break
            } else if (o)
                for (; r > s && !1 !== t.call(e[s], s, e[s]); s++);
            else
                for (s in e)
                    if (!1 === t.call(e[s], s, e[s])) break; return e
        },
        trim: ae && !ae.call("\ufeffÂ ") ? function(e) {
            return null == e ? "" : ae.call(e)
        } : function(e) {
            return null == e ? "" : (e + "").replace(de, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? le.merge(n, "string" == typeof e ? [e] : e) : ie.call(n, e)), n
        },
        inArray: function(e, t, i) {
            var n;
            if (t) {
                if (se) return se.call(t, e, i);
                for (n = t.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                    if (i in t && t[i] === e) return i
            }
            return -1
        },
        merge: function(e, i) {
            var n = i.length,
                s = e.length,
                r = 0;
            if ("number" == typeof n)
                for (; n > r; r++) e[s++] = i[r];
            else
                for (; i[r] !== t;) e[s++] = i[r++];
            return e.length = s, e
        },
        grep: function(e, t, i) {
            var n, s = [],
                r = 0,
                o = e.length;
            for (i = !!i; o > r; r++) n = !!t(e[r], r), i !== n && s.push(e[r]);
            return s
        },
        map: function(e, t, n) {
            var s, r = 0,
                o = e.length,
                a = i(e),
                l = [];
            if (a)
                for (; o > r; r++) null != (s = t(e[r], r, n)) && (l[l.length] = s);
            else
                for (r in e) null != (s = t(e[r], r, n)) && (l[l.length] = s);
            return te.apply([], l)
        },
        guid: 1,
        proxy: function(e, i) {
            var n, s, r;
            return "string" == typeof i && (r = e[i], i = e, e = r), le.isFunction(e) ? (n = ne.call(arguments, 2), s = function() {
                return e.apply(i || this, n.concat(ne.call(arguments)))
            }, s.guid = e.guid = e.guid || le.guid++, s) : t
        },
        access: function(e, i, n, s, r, o, a) {
            var l = 0,
                c = e.length,
                u = null == n;
            if ("object" === le.type(n)) {
                r = !0;
                for (l in n) le.access(e, i, l, n[l], !0, o, a)
            } else if (s !== t && (r = !0, le.isFunction(s) || (a = !0), u && (a ? (i.call(e, s), i = null) : (u = i, i = function(e, t, i) {
                    return u.call(le(e), i)
                })), i))
                for (; c > l; l++) i(e[l], n, a ? s : s.call(e[l], l, i(e[l], n)));
            return r ? e : u ? i.call(e) : c ? i(e[0], n) : o
        },
        now: function() {
            return (new Date).getTime()
        }
    }), le.ready.promise = function(t) {
        if (!R)
            if (R = le.Deferred(), "complete" === G.readyState) setTimeout(le.ready);
            else if (G.addEventListener) G.addEventListener("DOMContentLoaded", xe, !1), e.addEventListener("load", xe, !1);
        else {
            G.attachEvent("onreadystatechange", xe), e.attachEvent("onload", xe);
            var i = !1;
            try {
                i = null == e.frameElement && G.documentElement
            } catch (e) {}
            i && i.doScroll && function e() {
                if (!le.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (t) {
                        return setTimeout(e, 50)
                    }
                    _e(), le.ready()
                }
            }()
        }
        return R.promise(t)
    }, le.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        J["[object " + t + "]"] = t.toLowerCase()
    }), B = le(G);
    var ke = {};
    le.Callbacks = function(e) {
        e = "string" == typeof e ? ke[e] || n(e) : le.extend({}, e);
        var i, s, r, o, a, l, c = [],
            u = !e.once && [],
            d = function(t) {
                for (s = e.memory && t, r = !0, a = l || 0, l = 0, o = c.length, i = !0; c && o > a; a++)
                    if (!1 === c[a].apply(t[0], t[1]) && e.stopOnFalse) {
                        s = !1;
                        break
                    }
                i = !1, c && (u ? u.length && d(u.shift()) : s ? c = [] : p.disable())
            },
            p = {
                add: function() {
                    if (c) {
                        var t = c.length;
                        (function t(i) {
                            le.each(i, function(i, n) {
                                var s = le.type(n);
                                "function" === s ? e.unique && p.has(n) || c.push(n) : n && n.length && "string" !== s && t(n)
                            })
                        })(arguments), i ? o = c.length : s && (l = t, d(s))
                    }
                    return this
                },
                remove: function() {
                    return c && le.each(arguments, function(e, t) {
                        for (var n;
                            (n = le.inArray(t, c, n)) > -1;) c.splice(n, 1), i && (o >= n && o--, a >= n && a--)
                    }), this
                },
                has: function(e) {
                    return e ? le.inArray(e, c) > -1 : !(!c || !c.length)
                },
                empty: function() {
                    return c = [], this
                },
                disable: function() {
                    return c = u = s = t, this
                },
                disabled: function() {
                    return !c
                },
                lock: function() {
                    return u = t, s || p.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], !c || r && !u || (i ? u.push(t) : d(t)), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return p
    }, le.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", le.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", le.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", le.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return le.Deferred(function(i) {
                            le.each(t, function(t, r) {
                                var o = r[0],
                                    a = le.isFunction(e[t]) && e[t];
                                s[r[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && le.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o + "With"](this === n ? i.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? le.extend(e, n) : n
                    }
                },
                s = {};
            return n.pipe = n.then, le.each(t, function(e, r) {
                var o = r[2],
                    a = r[3];
                n[r[1]] = o.add, a && o.add(function() {
                    i = a
                }, t[1 ^ e][2].disable, t[2][2].lock), s[r[0]] = function() {
                    return s[r[0] + "With"](this === s ? n : this, arguments), this
                }, s[r[0] + "With"] = o.fireWith
            }), n.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var t, i, n, s = 0,
                r = ne.call(arguments),
                o = r.length,
                a = 1 !== o || e && le.isFunction(e.promise) ? o : 0,
                l = 1 === a ? e : le.Deferred(),
                c = function(e, i, n) {
                    return function(s) {
                        i[e] = this, n[e] = arguments.length > 1 ? ne.call(arguments) : s, n === t ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (o > 1)
                for (t = Array(o), i = Array(o), n = Array(o); o > s; s++) r[s] && le.isFunction(r[s].promise) ? r[s].promise().done(c(s, n, r)).fail(l.reject).progress(c(s, i, t)) : --a;
            return a || l.resolveWith(n, r), l.promise()
        }
    }), le.support = function() {
        var t, i, n, s, r, o, a, l, c, u, d = G.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = d.getElementsByTagName("*"), n = d.getElementsByTagName("a")[0], !i || !n || !i.length) return {};
        r = G.createElement("select"), a = r.appendChild(G.createElement("option")), s = d.getElementsByTagName("input")[0], n.style.cssText = "top:1px;float:left;opacity:.5", t = {
            getSetAttribute: "t" !== d.className,
            leadingWhitespace: 3 === d.firstChild.nodeType,
            tbody: !d.getElementsByTagName("tbody").length,
            htmlSerialize: !!d.getElementsByTagName("link").length,
            style: /top/.test(n.getAttribute("style")),
            hrefNormalized: "/a" === n.getAttribute("href"),
            opacity: /^0.5/.test(n.style.opacity),
            cssFloat: !!n.style.cssFloat,
            checkOn: !!s.value,
            optSelected: a.selected,
            enctype: !!G.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === G.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, s.checked = !0, t.noCloneChecked = s.cloneNode(!0).checked, r.disabled = !0, t.optDisabled = !a.disabled;
        try {
            delete d.test
        } catch (e) {
            t.deleteExpando = !1
        }
        s = G.createElement("input"), s.setAttribute("value", ""), t.input = "" === s.getAttribute("value"), s.value = "t", s.setAttribute("type", "radio"), t.radioValue = "t" === s.value, s.setAttribute("checked", "t"), s.setAttribute("name", "t"), o = G.createDocumentFragment(), o.appendChild(s), t.appendChecked = s.checked, t.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (u in {
                submit: !0,
                change: !0,
                focusin: !0
            }) d.setAttribute(l = "on" + u, "t"), t[u + "Bubbles"] = l in e || !1 === d.attributes[l].expando;
        return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, le(function() {
            var i, n, s, r = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                o = G.getElementsByTagName("body")[0];
            o && (i = G.createElement("div"), i.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", o.appendChild(i).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = d.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === s[0].offsetHeight, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === s[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== o.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width, n = d.appendChild(G.createElement("div")), n.style.cssText = d.style.cssText = r, n.style.marginRight = n.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(n, null) || {}).marginRight)), typeof d.style.zoom !== Z && (d.innerHTML = "", d.style.cssText = r + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (o.style.zoom = 1)), o.removeChild(i), i = d = s = n = null)
        }), i = r = o = a = n = s = null, t
    }();
    var Ce = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        Te = /([A-Z])/g;
    le.extend({
        cache: {},
        expando: "jQuery" + (ee + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? le.cache[e[le.expando]] : e[le.expando]) && !a(e)
        },
        data: function(e, t, i) {
            return s(e, t, i)
        },
        removeData: function(e, t) {
            return r(e, t)
        },
        _data: function(e, t, i) {
            return s(e, t, i, !0)
        },
        _removeData: function(e, t) {
            return r(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && le.noData[e.nodeName.toLowerCase()];
            return !t || !0 !== t && e.getAttribute("classid") === t
        }
    }), le.fn.extend({
        data: function(e, i) {
            var n, s, r = this[0],
                a = 0,
                l = null;
            if (e === t) {
                if (this.length && (l = le.data(r), 1 === r.nodeType && !le._data(r, "parsedAttrs"))) {
                    for (n = r.attributes; n.length > a; a++) s = n[a].name, s.indexOf("data-") || (s = le.camelCase(s.slice(5)), o(r, s, l[s]));
                    le._data(r, "parsedAttrs", !0)
                }
                return l
            }
            return "object" == typeof e ? this.each(function() {
                le.data(this, e)
            }) : le.access(this, function(i) {
                return i === t ? r ? o(r, e, le.data(r, e)) : null : (this.each(function() {
                    le.data(this, e, i)
                }), t)
            }, null, i, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                le.removeData(this, e)
            })
        }
    }), le.extend({
        queue: function(e, i, n) {
            var s;
            return e ? (i = (i || "fx") + "queue", s = le._data(e, i), n && (!s || le.isArray(n) ? s = le._data(e, i, le.makeArray(n)) : s.push(n)), s || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = le.queue(e, t),
                n = i.length,
                s = i.shift(),
                r = le._queueHooks(e, t),
                o = function() {
                    le.dequeue(e, t)
                };
            "inprogress" === s && (s = i.shift(), n--), r.cur = s, s && ("fx" === t && i.unshift("inprogress"), delete r.stop, s.call(e, o, r)), !n && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return le._data(e, i) || le._data(e, i, {
                empty: le.Callbacks("once memory").add(function() {
                    le._removeData(e, t + "queue"), le._removeData(e, i)
                })
            })
        }
    }), le.fn.extend({
        queue: function(e, i) {
            var n = 2;
            return "string" != typeof e && (i = e, e = "fx", n--), n > arguments.length ? le.queue(this[0], e) : i === t ? this : this.each(function() {
                var t = le.queue(this, e, i);
                le._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && le.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                le.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = le.fx ? le.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, i) {
                var n = setTimeout(t, e);
                i.stop = function() {
                    clearTimeout(n)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, i) {
            var n, s = 1,
                r = le.Deferred(),
                o = this,
                a = this.length,
                l = function() {
                    --s || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (i = e, e = t), e = e || "fx"; a--;)(n = le._data(o[a], e + "queueHooks")) && n.empty && (s++, n.empty.add(l));
            return l(), r.promise(i)
        }
    });
    var Se, $e, Ae = /[\t\r\n]/g,
        Fe = /\r/g,
        Pe = /^(?:input|select|textarea|button|object)$/i,
        Me = /^(?:a|area)$/i,
        De = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        Oe = /^(?:checked|selected)$/i,
        Ee = le.support.getSetAttribute,
        Ne = le.support.input;
    le.fn.extend({
        attr: function(e, t) {
            return le.access(this, le.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                le.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return le.access(this, le.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = le.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (e) {}
            })
        },
        addClass: function(e) {
            var t, i, n, s, r, o = 0,
                a = this.length,
                l = "string" == typeof e && e;
            if (le.isFunction(e)) return this.each(function(t) {
                le(this).addClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(ue) || []; a > o; o++)
                    if (i = this[o], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ae, " ") : " ")) {
                        for (r = 0; s = t[r++];) 0 > n.indexOf(" " + s + " ") && (n += s + " ");
                        i.className = le.trim(n)
                    }
            return this
        },
        removeClass: function(e) {
            var t, i, n, s, r, o = 0,
                a = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (le.isFunction(e)) return this.each(function(t) {
                le(this).removeClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(ue) || []; a > o; o++)
                    if (i = this[o], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ae, " ") : "")) {
                        for (r = 0; s = t[r++];)
                            for (; n.indexOf(" " + s + " ") >= 0;) n = n.replace(" " + s + " ", " ");
                        i.className = e ? le.trim(n) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var i = typeof e,
                n = "boolean" == typeof t;
            return le.isFunction(e) ? this.each(function(i) {
                le(this).toggleClass(e.call(this, i, this.className, t), t)
            }) : this.each(function() {
                if ("string" === i)
                    for (var s, r = 0, o = le(this), a = t, l = e.match(ue) || []; s = l[r++];) a = n ? a : !o.hasClass(s), o[a ? "addClass" : "removeClass"](s);
                else(i === Z || "boolean" === i) && (this.className && le._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : le._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", i = 0, n = this.length; n > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Ae, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var i, n, s, r = this[0];
            return arguments.length ? (s = le.isFunction(e), this.each(function(i) {
                var r, o = le(this);
                1 === this.nodeType && (r = s ? e.call(this, i, o.val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : le.isArray(r) && (r = le.map(r, function(e) {
                    return null == e ? "" : e + ""
                })), (n = le.valHooks[this.type] || le.valHooks[this.nodeName.toLowerCase()]) && "set" in n && n.set(this, r, "value") !== t || (this.value = r))
            })) : r ? (n = le.valHooks[r.type] || le.valHooks[r.nodeName.toLowerCase()], n && "get" in n && (i = n.get(r, "value")) !== t ? i : (i = r.value, "string" == typeof i ? i.replace(Fe, "") : null == i ? "" : i)) : void 0
        }
    }), le.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    for (var t, i, n = e.options, s = e.selectedIndex, r = "select-one" === e.type || 0 > s, o = r ? null : [], a = r ? s + 1 : n.length, l = 0 > s ? a : r ? s : 0; a > l; l++)
                        if (i = n[l], !(!i.selected && l !== s || (le.support.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && le.nodeName(i.parentNode, "optgroup"))) {
                            if (t = le(i).val(), r) return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    var i = le.makeArray(t);
                    return le(e).find("option").each(function() {
                        this.selected = le.inArray(le(this).val(), i) >= 0
                    }), i.length || (e.selectedIndex = -1), i
                }
            }
        },
        attr: function(e, i, n) {
            var s, r, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === Z ? le.prop(e, i, n) : (r = 1 !== a || !le.isXMLDoc(e), r && (i = i.toLowerCase(), s = le.attrHooks[i] || (De.test(i) ? $e : Se)), n === t ? s && r && "get" in s && null !== (o = s.get(e, i)) ? o : (typeof e.getAttribute !== Z && (o = e.getAttribute(i)), null == o ? t : o) : null !== n ? s && r && "set" in s && (o = s.set(e, n, i)) !== t ? o : (e.setAttribute(i, n + ""), n) : (le.removeAttr(e, i), t))
        },
        removeAttr: function(e, t) {
            var i, n, s = 0,
                r = t && t.match(ue);
            if (r && 1 === e.nodeType)
                for (; i = r[s++];) n = le.propFix[i] || i, De.test(i) ? !Ee && Oe.test(i) ? e[le.camelCase("default-" + i)] = e[n] = !1 : e[n] = !1 : le.attr(e, i, ""), e.removeAttribute(Ee ? i : n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!le.support.radioValue && "radio" === t && le.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            for: "htmlFor",
            class: "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, i, n) {
            var s, r, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !le.isXMLDoc(e), o && (i = le.propFix[i] || i, r = le.propHooks[i]), n !== t ? r && "set" in r && (s = r.set(e, n, i)) !== t ? s : e[i] = n : r && "get" in r && null !== (s = r.get(e, i)) ? s : e[i]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var i = e.getAttributeNode("tabindex");
                    return i && i.specified ? parseInt(i.value, 10) : Pe.test(e.nodeName) || Me.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), $e = {
        get: function(e, i) {
            var n = le.prop(e, i),
                s = "boolean" == typeof n && e.getAttribute(i),
                r = "boolean" == typeof n ? Ne && Ee ? null != s : Oe.test(i) ? e[le.camelCase("default-" + i)] : !!s : e.getAttributeNode(i);
            return r && !1 !== r.value ? i.toLowerCase() : t
        },
        set: function(e, t, i) {
            return !1 === t ? le.removeAttr(e, i) : Ne && Ee || !Oe.test(i) ? e.setAttribute(!Ee && le.propFix[i] || i, i) : e[le.camelCase("default-" + i)] = e[i] = !0, i
        }
    }, Ne && Ee || (le.attrHooks.value = {
        get: function(e, i) {
            var n = e.getAttributeNode(i);
            return le.nodeName(e, "input") ? e.defaultValue : n && n.specified ? n.value : t
        },
        set: function(e, i, n) {
            return le.nodeName(e, "input") ? (e.defaultValue = i, t) : Se && Se.set(e, i, n)
        }
    }), Ee || (Se = le.valHooks.button = {
        get: function(e, i) {
            var n = e.getAttributeNode(i);
            return n && ("id" === i || "name" === i || "coords" === i ? "" !== n.value : n.specified) ? n.value : t
        },
        set: function(e, i, n) {
            var s = e.getAttributeNode(n);
            return s || e.setAttributeNode(s = e.ownerDocument.createAttribute(n)), s.value = i += "", "value" === n || i === e.getAttribute(n) ? i : t
        }
    }, le.attrHooks.contenteditable = {
        get: Se.get,
        set: function(e, t, i) {
            Se.set(e, "" !== t && t, i)
        }
    }, le.each(["width", "height"], function(e, i) {
        le.attrHooks[i] = le.extend(le.attrHooks[i], {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(i, "auto"), n) : t
            }
        })
    })), le.support.hrefNormalized || (le.each(["href", "src", "width", "height"], function(e, i) {
        le.attrHooks[i] = le.extend(le.attrHooks[i], {
            get: function(e) {
                var n = e.getAttribute(i, 2);
                return null == n ? t : n
            }
        })
    }), le.each(["href", "src"], function(e, t) {
        le.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    })), le.support.style || (le.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), le.support.optSelected || (le.propHooks.selected = le.extend(le.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), le.support.enctype || (le.propFix.enctype = "encoding"), le.support.checkOn || le.each(["radio", "checkbox"], function() {
        le.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), le.each(["radio", "checkbox"], function() {
        le.valHooks[this] = le.extend(le.valHooks[this], {
            set: function(e, i) {
                return le.isArray(i) ? e.checked = le.inArray(le(e).val(), i) >= 0 : t
            }
        })
    });
    var je = /^(?:input|select|textarea)$/i,
        Le = /^key/,
        qe = /^(?:mouse|contextmenu)|click/,
        ze = /^(?:focusinfocus|focusoutblur)$/,
        He = /^([^.]*)(?:\.(.+)|)$/;
    le.event = {
            global: {},
            add: function(e, i, n, s, r) {
                var o, a, l, c, u, d, p, h, f, m, g, v = le._data(e);
                if (v) {
                    for (n.handler && (c = n, n = c.handler, r = c.selector), n.guid || (n.guid = le.guid++), (a = v.events) || (a = v.events = {}), (d = v.handle) || (d = v.handle = function(e) {
                            return typeof le === Z || e && le.event.triggered === e.type ? t : le.event.dispatch.apply(d.elem, arguments)
                        }, d.elem = e), i = (i || "").match(ue) || [""], l = i.length; l--;) o = He.exec(i[l]) || [], f = g = o[1], m = (o[2] || "").split(".").sort(), u = le.event.special[f] || {}, f = (r ? u.delegateType : u.bindType) || f, u = le.event.special[f] || {}, p = le.extend({
                        type: f,
                        origType: g,
                        data: s,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && le.expr.match.needsContext.test(r),
                        namespace: m.join(".")
                    }, c), (h = a[f]) || (h = a[f] = [], h.delegateCount = 0, u.setup && !1 !== u.setup.call(e, s, m, d) || (e.addEventListener ? e.addEventListener(f, d, !1) : e.attachEvent && e.attachEvent("on" + f, d))), u.add && (u.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, p) : h.push(p), le.event.global[f] = !0;
                    e = null
                }
            },
            remove: function(e, t, i, n, s) {
                var r, o, a, l, c, u, d, p, h, f, m, g = le.hasData(e) && le._data(e);
                if (g && (u = g.events)) {
                    for (t = (t || "").match(ue) || [""], c = t.length; c--;)
                        if (a = He.exec(t[c]) || [], h = m = a[1], f = (a[2] || "").split(".").sort(), h) {
                            for (d = le.event.special[h] || {}, h = (n ? d.delegateType : d.bindType) || h, p = u[h] || [], a = a[2] && RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;) o = p[r], !s && m !== o.origType || i && i.guid !== o.guid || a && !a.test(o.namespace) || n && n !== o.selector && ("**" !== n || !o.selector) || (p.splice(r, 1), o.selector && p.delegateCount--, d.remove && d.remove.call(e, o));
                            l && !p.length && (d.teardown && !1 !== d.teardown.call(e, f, g.handle) || le.removeEvent(e, h, g.handle), delete u[h])
                        } else
                            for (h in u) le.event.remove(e, h + t[c], i, n, !0);
                    le.isEmptyObject(u) && (delete g.handle, le._removeData(e, "events"))
                }
            },
            trigger: function(i, n, s, r) {
                var o, a, l, c, u, d, p, h = [s || G],
                    f = oe.call(i, "type") ? i.type : i,
                    m = oe.call(i, "namespace") ? i.namespace.split(".") : [];
                if (l = d = s = s || G, 3 !== s.nodeType && 8 !== s.nodeType && !ze.test(f + le.event.triggered) && (f.indexOf(".") >= 0 && (m = f.split("."), f = m.shift(), m.sort()), a = 0 > f.indexOf(":") && "on" + f, i = i[le.expando] ? i : new le.Event(f, "object" == typeof i && i), i.isTrigger = !0, i.namespace = m.join("."), i.namespace_re = i.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, i.result = t, i.target || (i.target = s), n = null == n ? [i] : le.makeArray(n, [i]), u = le.event.special[f] || {}, r || !u.trigger || !1 !== u.trigger.apply(s, n))) {
                    if (!r && !u.noBubble && !le.isWindow(s)) {
                        for (c = u.delegateType || f, ze.test(c + f) || (l = l.parentNode); l; l = l.parentNode) h.push(l), d = l;
                        d === (s.ownerDocument || G) && h.push(d.defaultView || d.parentWindow || e)
                    }
                    for (p = 0;
                        (l = h[p++]) && !i.isPropagationStopped();) i.type = p > 1 ? c : u.bindType || f, o = (le._data(l, "events") || {})[i.type] && le._data(l, "handle"), o && o.apply(l, n), (o = a && l[a]) && le.acceptData(l) && o.apply && !1 === o.apply(l, n) && i.preventDefault();
                    if (i.type = f, !(r || i.isDefaultPrevented() || u._default && !1 !== u._default.apply(s.ownerDocument, n) || "click" === f && le.nodeName(s, "a") || !le.acceptData(s) || !a || !s[f] || le.isWindow(s))) {
                        d = s[a], d && (s[a] = null), le.event.triggered = f;
                        try {
                            s[f]()
                        } catch (e) {}
                        le.event.triggered = t, d && (s[a] = d)
                    }
                    return i.result
                }
            },
            dispatch: function(e) {
                e = le.event.fix(e);
                var i, n, s, r, o, a = [],
                    l = ne.call(arguments),
                    c = (le._data(this, "events") || {})[e.type] || [],
                    u = le.event.special[e.type] || {};
                if (l[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                    for (a = le.event.handlers.call(this, e, c), i = 0;
                        (r = a[i++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = r.elem, o = 0;
                            (s = r.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(s.namespace)) && (e.handleObj = s, e.data = s.data, (n = ((le.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l)) !== t && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, i) {
                var n, s, r, o, a = [],
                    l = i.delegateCount,
                    c = e.target;
                if (l && c.nodeType && (!e.button || "click" !== e.type))
                    for (; c != this; c = c.parentNode || this)
                        if (1 === c.nodeType && (!0 !== c.disabled || "click" !== e.type)) {
                            for (r = [], o = 0; l > o; o++) s = i[o], n = s.selector + " ", r[n] === t && (r[n] = s.needsContext ? le(n, this).index(c) >= 0 : le.find(n, this, null, [c]).length), r[n] && r.push(s);
                            r.length && a.push({
                                elem: c,
                                handlers: r
                            })
                        }
                return i.length > l && a.push({
                    elem: this,
                    handlers: i.slice(l)
                }), a
            },
            fix: function(e) {
                if (e[le.expando]) return e;
                var t, i, n, s = e.type,
                    r = e,
                    o = this.fixHooks[s];
                for (o || (this.fixHooks[s] = o = qe.test(s) ? this.mouseHooks : Le.test(s) ? this.keyHooks : {}), n = o.props ? this.props.concat(o.props) : this.props, e = new le.Event(r), t = n.length; t--;) i = n[t], e[i] = r[i];
                return e.target || (e.target = r.srcElement || G), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, r) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, i) {
                    var n, s, r, o = i.button,
                        a = i.fromElement;
                    return null == e.pageX && null != i.clientX && (s = e.target.ownerDocument || G, r = s.documentElement, n = s.body, e.pageX = i.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = i.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? i.toElement : a), e.which || o === t || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    trigger: function() {
                        return le.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                    }
                },
                focus: {
                    trigger: function() {
                        if (this !== G.activeElement && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === G.activeElement && this.blur ? (this.blur(), !1) : t
                    },
                    delegateType: "focusout"
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== t && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, i, n) {
                var s = le.extend(new le.Event, i, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                n ? le.event.trigger(s, null, t) : le.event.dispatch.call(t, s), s.isDefaultPrevented() && i.preventDefault()
            }
        }, le.removeEvent = G.removeEventListener ? function(e, t, i) {
            e.removeEventListener && e.removeEventListener(t, i, !1)
        } : function(e, t, i) {
            var n = "on" + t;
            e.detachEvent && (typeof e[n] === Z && (e[n] = null), e.detachEvent(n, i))
        }, le.Event = function(e, i) {
            return this instanceof le.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? l : c) : this.type = e, i && le.extend(this, i), this.timeStamp = e && e.timeStamp || le.now(), this[le.expando] = !0, t) : new le.Event(e, i)
        }, le.Event.prototype = {
            isDefaultPrevented: c,
            isPropagationStopped: c,
            isImmediatePropagationStopped: c,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = l, this.stopPropagation()
            }
        }, le.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            le.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var i, n = this,
                        s = e.relatedTarget,
                        r = e.handleObj;
                    return (!s || s !== n && !le.contains(n, s)) && (e.type = r.origType, i = r.handler.apply(this, arguments), e.type = t), i
                }
            }
        }), le.support.submitBubbles || (le.event.special.submit = {
            setup: function() {
                return !le.nodeName(this, "form") && (le.event.add(this, "click._submit keypress._submit", function(e) {
                    var i = e.target,
                        n = le.nodeName(i, "input") || le.nodeName(i, "button") ? i.form : t;
                    n && !le._data(n, "submitBubbles") && (le.event.add(n, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), le._data(n, "submitBubbles", !0))
                }), t)
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && le.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return !le.nodeName(this, "form") && (le.event.remove(this, "._submit"), t)
            }
        }), le.support.changeBubbles || (le.event.special.change = {
            setup: function() {
                return je.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (le.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), le.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), le.event.simulate("change", this, e, !0)
                })), !1) : (le.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    je.test(t.nodeName) && !le._data(t, "changeBubbles") && (le.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || le.event.simulate("change", this.parentNode, e, !0)
                    }), le._data(t, "changeBubbles", !0))
                }), t)
            },
            handle: function(e) {
                var i = e.target;
                return this !== i || e.isSimulated || e.isTrigger || "radio" !== i.type && "checkbox" !== i.type ? e.handleObj.handler.apply(this, arguments) : t
            },
            teardown: function() {
                return le.event.remove(this, "._change"), !je.test(this.nodeName)
            }
        }), le.support.focusinBubbles || le.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var i = 0,
                n = function(e) {
                    le.event.simulate(t, e.target, le.event.fix(e), !0)
                };
            le.event.special[t] = {
                setup: function() {
                    0 == i++ && G.addEventListener(e, n, !0)
                },
                teardown: function() {
                    0 == --i && G.removeEventListener(e, n, !0)
                }
            }
        }), le.fn.extend({
            on: function(e, i, n, s, r) {
                var o, a;
                if ("object" == typeof e) {
                    "string" != typeof i && (n = n || i, i = t);
                    for (o in e) this.on(o, i, n, e[o], r);
                    return this
                }
                if (null == n && null == s ? (s = i, n = i = t) : null == s && ("string" == typeof i ? (s = n, n = t) : (s = n, n = i, i = t)), !1 === s) s = c;
                else if (!s) return this;
                return 1 === r && (a = s, s = function(e) {
                    return le().off(e), a.apply(this, arguments)
                }, s.guid = a.guid || (a.guid = le.guid++)), this.each(function() {
                    le.event.add(this, e, s, n, i)
                })
            },
            one: function(e, t, i, n) {
                return this.on(e, t, i, n, 1)
            },
            off: function(e, i, n) {
                var s, r;
                if (e && e.preventDefault && e.handleObj) return s = e.handleObj, le(e.delegateTarget).off(s.namespace ? s.origType + "." + s.namespace : s.origType, s.selector, s.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, i, e[r]);
                    return this
                }
                return (!1 === i || "function" == typeof i) && (n = i, i = t), !1 === n && (n = c), this.each(function() {
                    le.event.remove(this, e, n, i)
                })
            },
            bind: function(e, t, i) {
                return this.on(e, null, t, i)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, i, n) {
                return this.on(t, e, i, n)
            },
            undelegate: function(e, t, i) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
            },
            trigger: function(e, t) {
                return this.each(function() {
                    le.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, i) {
                var n = this[0];
                return n ? le.event.trigger(e, i, n, !0) : t
            }
        }),
        function(e, t) {
            function i(e) {
                return de.test(e + "")
            }

            function n() {
                var e, t = [];
                return e = function(i, n) {
                    return t.push(i += " ") > _.cacheLength && delete e[t.shift()], e[i] = n
                }
            }

            function s(e) {
                return e[L] = !0, e
            }

            function r(e) {
                var t = F.createElement("div");
                try {
                    return e(t)
                } catch (e) {
                    return !1
                } finally {
                    t = null
                }
            }

            function o(e, t, i, n) {
                var s, r, o, a, l, d, p, h, f, m;
                if ((t ? t.ownerDocument || t : q) !== F && A(t), t = t || F, i = i || [], !e || "string" != typeof e) return i;
                if (1 !== (a = t.nodeType) && 9 !== a) return [];
                if (!M && !n) {
                    if (s = pe.exec(e))
                        if (o = s[1]) {
                            if (9 === a) {
                                if (!(r = t.getElementById(o)) || !r.parentNode) return i;
                                if (r.id === o) return i.push(r), i
                            } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(o)) && N(t, r) && r.id === o) return i.push(r), i
                        } else {
                            if (s[2]) return U.apply(i, X.call(t.getElementsByTagName(e), 0)), i;
                            if ((o = s[3]) && z.getByClassName && t.getElementsByClassName) return U.apply(i, X.call(t.getElementsByClassName(o), 0)), i
                        }
                    if (z.qsa && !D.test(e)) {
                        if (p = !0, h = L, f = t, m = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                            for (d = c(e), (p = t.getAttribute("id")) ? h = p.replace(me, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", l = d.length; l--;) d[l] = h + u(d[l]);
                            f = ue.test(e) && t.parentNode || t, m = d.join(",")
                        }
                        if (m) try {
                            return U.apply(i, X.call(f.querySelectorAll(m), 0)), i
                        } catch (e) {} finally {
                            p || t.removeAttribute("id")
                        }
                    }
                }
                return y(e.replace(ne, "$1"), t, i, n)
            }

            function a(e, t) {
                var i = t && e,
                    n = i && (~t.sourceIndex || B) - (~e.sourceIndex || B);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === t) return -1;
                return e ? 1 : -1
            }

            function l(e) {
                return s(function(t) {
                    return t = +t, s(function(i, n) {
                        for (var s, r = e([], i.length, t), o = r.length; o--;) i[s = r[o]] && (i[s] = !(n[s] = i[s]))
                    })
                })
            }

            function c(e, t) {
                var i, n, s, r, a, l, c, u = I[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (a = e, l = [], c = _.preFilter; a;) {
                    (!i || (n = se.exec(a))) && (n && (a = a.slice(n[0].length) || a), l.push(s = [])), i = !1, (n = re.exec(a)) && (i = n.shift(), s.push({
                        value: i,
                        type: n[0].replace(ne, " ")
                    }), a = a.slice(i.length));
                    for (r in _.filter) !(n = ce[r].exec(a)) || c[r] && !(n = c[r](n)) || (i = n.shift(), s.push({
                        value: i,
                        type: r,
                        matches: n
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return t ? a.length : a ? o.error(e) : I(e, l).slice(0)
            }

            function u(e) {
                for (var t = 0, i = e.length, n = ""; i > t; t++) n += e[t].value;
                return n
            }

            function d(e, t, i) {
                var n = t.dir,
                    s = i && "parentNode" === n,
                    r = W++;
                return t.first ? function(t, i, r) {
                    for (; t = t[n];)
                        if (1 === t.nodeType || s) return e(t, i, r)
                } : function(t, i, o) {
                    var a, l, c, u = H + " " + r;
                    if (o) {
                        for (; t = t[n];)
                            if ((1 === t.nodeType || s) && e(t, i, o)) return !0
                    } else
                        for (; t = t[n];)
                            if (1 === t.nodeType || s)
                                if (c = t[L] || (t[L] = {}), (l = c[n]) && l[0] === u) {
                                    if (!0 === (a = l[1]) || a === x) return !0 === a
                                } else if (l = c[n] = [u], l[1] = e(t, i, o) || x, !0 === l[1]) return !0
                }
            }

            function p(e) {
                return e.length > 1 ? function(t, i, n) {
                    for (var s = e.length; s--;)
                        if (!e[s](t, i, n)) return !1;
                    return !0
                } : e[0]
            }

            function h(e, t, i, n, s) {
                for (var r, o = [], a = 0, l = e.length, c = null != t; l > a; a++)(r = e[a]) && (!i || i(r, n, s)) && (o.push(r), c && t.push(a));
                return o
            }

            function f(e, t, i, n, r, o) {
                return n && !n[L] && (n = f(n)), r && !r[L] && (r = f(r, o)), s(function(s, o, a, l) {
                    var c, u, d, p = [],
                        f = [],
                        m = o.length,
                        g = s || v(t || "*", a.nodeType ? [a] : a, []),
                        y = !e || !s && t ? g : h(g, p, e, a, l),
                        b = i ? r || (s ? e : m || n) ? [] : o : y;
                    if (i && i(y, b, a, l), n)
                        for (c = h(b, f), n(c, [], a, l), u = c.length; u--;)(d = c[u]) && (b[f[u]] = !(y[f[u]] = d));
                    if (s) {
                        if (r || e) {
                            if (r) {
                                for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                                r(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(d = b[u]) && (c = r ? Q.call(s, d) : p[u]) > -1 && (s[c] = !(o[c] = d))
                        }
                    } else b = h(b === o ? b.splice(m, b.length) : b), r ? r(null, o, b, l) : U.apply(o, b)
                })
            }

            function m(e) {
                for (var t, i, n, s = e.length, r = _.relative[e[0].type], o = r || _.relative[" "], a = r ? 1 : 0, l = d(function(e) {
                        return e === t
                    }, o, !0), c = d(function(e) {
                        return Q.call(t, e) > -1
                    }, o, !0), h = [function(e, i, n) {
                        return !r && (n || i !== $) || ((t = i).nodeType ? l(e, i, n) : c(e, i, n))
                    }]; s > a; a++)
                    if (i = _.relative[e[a].type]) h = [d(p(h), i)];
                    else {
                        if (i = _.filter[e[a].type].apply(null, e[a].matches), i[L]) {
                            for (n = ++a; s > n && !_.relative[e[n].type]; n++);
                            return f(a > 1 && p(h), a > 1 && u(e.slice(0, a - 1)).replace(ne, "$1"), i, n > a && m(e.slice(a, n)), s > n && m(e = e.slice(n)), s > n && u(e))
                        }
                        h.push(i)
                    }
                return p(h)
            }

            function g(e, t) {
                var i = 0,
                    n = t.length > 0,
                    r = e.length > 0,
                    a = function(s, a, l, c, u) {
                        var d, p, f, m = [],
                            g = 0,
                            v = "0",
                            y = s && [],
                            b = null != u,
                            w = $,
                            k = s || r && _.find.TAG("*", u && a.parentNode || a),
                            C = H += null == w ? 1 : Math.random() || .1;
                        for (b && ($ = a !== F && a, x = i); null != (d = k[v]); v++) {
                            if (r && d) {
                                for (p = 0; f = e[p++];)
                                    if (f(d, a, l)) {
                                        c.push(d);
                                        break
                                    }
                                b && (H = C, x = ++i)
                            }
                            n && ((d = !f && d) && g--, s && y.push(d))
                        }
                        if (g += v, n && v !== g) {
                            for (p = 0; f = t[p++];) f(y, m, a, l);
                            if (s) {
                                if (g > 0)
                                    for (; v--;) y[v] || m[v] || (m[v] = G.call(c));
                                m = h(m)
                            }
                            U.apply(c, m), b && !s && m.length > 0 && g + t.length > 1 && o.uniqueSort(c)
                        }
                        return b && (H = C, $ = w), y
                    };
                return n ? s(a) : a
            }

            function v(e, t, i) {
                for (var n = 0, s = t.length; s > n; n++) o(e, t[n], i);
                return i
            }

            function y(e, t, i, n) {
                var s, r, o, a, l, d = c(e);
                if (!n && 1 === d.length) {
                    if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (o = r[0]).type && 9 === t.nodeType && !M && _.relative[r[1].type]) {
                        if (!(t = _.find.ID(o.matches[0].replace(ve, ye), t)[0])) return i;
                        e = e.slice(r.shift().value.length)
                    }
                    for (s = ce.needsContext.test(e) ? 0 : r.length; s-- && (o = r[s], !_.relative[a = o.type]);)
                        if ((l = _.find[a]) && (n = l(o.matches[0].replace(ve, ye), ue.test(r[0].type) && t.parentNode || t))) {
                            if (r.splice(s, 1), !(e = n.length && u(r))) return U.apply(i, X.call(n, 0)), i;
                            break
                        }
                }
                return T(e, d)(n, t, M, i, ue.test(e)), i
            }

            function b() {}
            var w, x, _, k, C, T, S, $, A, F, P, M, D, O, E, N, j, L = "sizzle" + -new Date,
                q = e.document,
                z = {},
                H = 0,
                W = 0,
                Y = n(),
                I = n(),
                V = n(),
                R = typeof t,
                B = 1 << 31,
                Z = [],
                G = Z.pop,
                U = Z.push,
                X = Z.slice,
                Q = Z.indexOf || function(e) {
                    for (var t = 0, i = this.length; i > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                J = "[\\x20\\t\\r\\n\\f]",
                K = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ee = K.replace("w", "w#"),
                te = "\\[" + J + "*(" + K + ")" + J + "*(?:([*^$|!~]?=)" + J + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ee + ")|)|)" + J + "*\\]",
                ie = ":(" + K + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + te.replace(3, 8) + ")*)|.*)\\)|)",
                ne = RegExp("^" + J + "+|((?:^|[^\\\\])(?:\\\\.)*)" + J + "+$", "g"),
                se = RegExp("^" + J + "*," + J + "*"),
                re = RegExp("^" + J + "*([\\x20\\t\\r\\n\\f>+~])" + J + "*"),
                oe = RegExp(ie),
                ae = RegExp("^" + ee + "$"),
                ce = {
                    ID: RegExp("^#(" + K + ")"),
                    CLASS: RegExp("^\\.(" + K + ")"),
                    NAME: RegExp("^\\[name=['\"]?(" + K + ")['\"]?\\]"),
                    TAG: RegExp("^(" + K.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + te),
                    PSEUDO: RegExp("^" + ie),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + J + "*(even|odd|(([+-]|)(\\d*)n|)" + J + "*(?:([+-]|)" + J + "*(\\d+)|))" + J + "*\\)|)", "i"),
                    needsContext: RegExp("^" + J + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + J + "*((?:-\\d)?\\d*)" + J + "*\\)|)(?=[^-]|$)", "i")
                },
                ue = /[\x20\t\r\n\f]*[+~]/,
                de = /^[^{]+\{\s*\[native code/,
                pe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                he = /^(?:input|select|textarea|button)$/i,
                fe = /^h\d$/i,
                me = /'|\\/g,
                ge = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                ve = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                ye = function(e, t) {
                    var i = "0x" + t - 65536;
                    return i !== i ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
                };
            try {
                X.call(q.documentElement.childNodes, 0)[0].nodeType
            } catch (e) {
                X = function(e) {
                    for (var t, i = []; t = this[e++];) i.push(t);
                    return i
                }
            }
            C = o.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, A = o.setDocument = function(e) {
                var n = e ? e.ownerDocument || e : q;
                return n !== F && 9 === n.nodeType && n.documentElement ? (F = n, P = n.documentElement, M = C(n), z.tagNameNoComments = r(function(e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), z.attributes = r(function(e) {
                    e.innerHTML = "<select></select>";
                    var t = typeof e.lastChild.getAttribute("multiple");
                    return "boolean" !== t && "string" !== t
                }), z.getByClassName = r(function(e) {
                    return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !(!e.getElementsByClassName || !e.getElementsByClassName("e").length) && (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length)
                }), z.getByName = r(function(e) {
                    e.id = L + 0, e.innerHTML = "<a name='" + L + "'></a><div name='" + L + "'></div>", P.insertBefore(e, P.firstChild);
                    var t = n.getElementsByName && n.getElementsByName(L).length === 2 + n.getElementsByName(L + 0).length;
                    return z.getIdNotName = !n.getElementById(L), P.removeChild(e), t
                }), _.attrHandle = r(function(e) {
                    return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== R && "#" === e.firstChild.getAttribute("href")
                }) ? {} : {
                    href: function(e) {
                        return e.getAttribute("href", 2)
                    },
                    type: function(e) {
                        return e.getAttribute("type")
                    }
                }, z.getIdNotName ? (_.find.ID = function(e, t) {
                    if (typeof t.getElementById !== R && !M) {
                        var i = t.getElementById(e);
                        return i && i.parentNode ? [i] : []
                    }
                }, _.filter.ID = function(e) {
                    var t = e.replace(ve, ye);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (_.find.ID = function(e, i) {
                    if (typeof i.getElementById !== R && !M) {
                        var n = i.getElementById(e);
                        return n ? n.id === e || typeof n.getAttributeNode !== R && n.getAttributeNode("id").value === e ? [n] : t : []
                    }
                }, _.filter.ID = function(e) {
                    var t = e.replace(ve, ye);
                    return function(e) {
                        var i = typeof e.getAttributeNode !== R && e.getAttributeNode("id");
                        return i && i.value === t
                    }
                }), _.find.TAG = z.tagNameNoComments ? function(e, i) {
                    return typeof i.getElementsByTagName !== R ? i.getElementsByTagName(e) : t
                } : function(e, t) {
                    var i, n = [],
                        s = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; i = r[s++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return r
                }, _.find.NAME = z.getByName && function(e, i) {
                    return typeof i.getElementsByName !== R ? i.getElementsByName(name) : t
                }, _.find.CLASS = z.getByClassName && function(e, i) {
                    return typeof i.getElementsByClassName === R || M ? t : i.getElementsByClassName(e)
                }, O = [], D = [":focus"], (z.qsa = i(n.querySelectorAll)) && (r(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || D.push("\\[" + J + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || D.push(":checked")
                }), r(function(e) {
                    e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && D.push("[*^$]=" + J + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), D.push(",.*:")
                })), (z.matchesSelector = i(E = P.matchesSelector || P.mozMatchesSelector || P.webkitMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && r(function(e) {
                    z.disconnectedMatch = E.call(e, "div"), E.call(e, "[s!='']:x"), O.push("!=", ie)
                }), D = RegExp(D.join("|")), O = RegExp(O.join("|")), N = i(P.contains) || P.compareDocumentPosition ? function(e, t) {
                    var i = 9 === e.nodeType ? e.documentElement : e,
                        n = t && t.parentNode;
                    return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, j = P.compareDocumentPosition ? function(e, t) {
                    var i;
                    return e === t ? (S = !0, 0) : (i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & i || e.parentNode && 11 === e.parentNode.nodeType ? e === n || N(q, e) ? -1 : t === n || N(q, t) ? 1 : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : function(e, t) {
                    var i, s = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        l = [e],
                        c = [t];
                    if (e === t) return S = !0, 0;
                    if (!r || !o) return e === n ? -1 : t === n ? 1 : r ? -1 : o ? 1 : 0;
                    if (r === o) return a(e, t);
                    for (i = e; i = i.parentNode;) l.unshift(i);
                    for (i = t; i = i.parentNode;) c.unshift(i);
                    for (; l[s] === c[s];) s++;
                    return s ? a(l[s], c[s]) : l[s] === q ? -1 : c[s] === q ? 1 : 0
                }, S = !1, [0, 0].sort(j), z.detectDuplicates = S, F) : F
            }, o.matches = function(e, t) {
                return o(e, null, null, t)
            }, o.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== F && A(e), t = t.replace(ge, "='$1']"), !(!z.matchesSelector || M || O && O.test(t) || D.test(t))) try {
                    var i = E.call(e, t);
                    if (i || z.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {}
                return o(t, F, null, [e]).length > 0
            }, o.contains = function(e, t) {
                return (e.ownerDocument || e) !== F && A(e), N(e, t)
            }, o.attr = function(e, t) {
                var i;
                return (e.ownerDocument || e) !== F && A(e), M || (t = t.toLowerCase()), (i = _.attrHandle[t]) ? i(e) : M || z.attributes ? e.getAttribute(t) : ((i = e.getAttributeNode(t)) || e.getAttribute(t)) && !0 === e[t] ? t : i && i.specified ? i.value : null
            }, o.error = function(e) {
                throw Error("Syntax error, unrecognized expression: " + e)
            }, o.uniqueSort = function(e) {
                var t, i = [],
                    n = 1,
                    s = 0;
                if (S = !z.detectDuplicates, e.sort(j), S) {
                    for (; t = e[n]; n++) t === e[n - 1] && (s = i.push(n));
                    for (; s--;) e.splice(i[s], 1)
                }
                return e
            }, k = o.getText = function(e) {
                var t, i = "",
                    n = 0,
                    s = e.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) i += k(e)
                    } else if (3 === s || 4 === s) return e.nodeValue
                } else
                    for (; t = e[n]; n++) i += k(t);
                return i
            }, _ = o.selectors = {
                cacheLength: 50,
                createPseudo: s,
                match: ce,
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ve, ye), e[3] = (e[4] || e[5] || "").replace(ve, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || o.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && o.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, i = !e[5] && e[2];
                        return ce.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : i && oe.test(i) && (t = c(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        return "*" === e ? function() {
                            return !0
                        } : (e = e.replace(ve, ye).toLowerCase(), function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        })
                    },
                    CLASS: function(e) {
                        var t = Y[e + " "];
                        return t || (t = RegExp("(^|" + J + ")" + e + "(" + J + "|$)")) && Y(e, function(e) {
                            return t.test(e.className || typeof e.getAttribute !== R && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, i) {
                        return function(n) {
                            var s = o.attr(n, e);
                            return null == s ? "!=" === t : !t || (s += "", "=" === t ? s === i : "!=" === t ? s !== i : "^=" === t ? i && 0 === s.indexOf(i) : "*=" === t ? i && s.indexOf(i) > -1 : "$=" === t ? i && s.slice(-i.length) === i : "~=" === t ? (" " + s + " ").indexOf(i) > -1 : "|=" === t && (s === i || s.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, i, n, s) {
                        var r = "nth" !== e.slice(0, 3),
                            o = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === n && 0 === s ? function(e) {
                            return !!e.parentNode
                        } : function(t, i, l) {
                            var c, u, d, p, h, f, m = r !== o ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = a && t.nodeName.toLowerCase(),
                                y = !l && !a;
                            if (g) {
                                if (r) {
                                    for (; m;) {
                                        for (d = t; d = d[m];)
                                            if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        f = m = "only" === e && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [o ? g.firstChild : g.lastChild], o && y) {
                                    for (u = g[L] || (g[L] = {}), c = u[e] || [], h = c[0] === H && c[1], p = c[0] === H && c[2], d = h && g.childNodes[h]; d = ++h && d && d[m] || (p = h = 0) || f.pop();)
                                        if (1 === d.nodeType && ++p && d === t) {
                                            u[e] = [H, h, p];
                                            break
                                        }
                                } else if (y && (c = (t[L] || (t[L] = {}))[e]) && c[0] === H) p = c[1];
                                else
                                    for (;
                                        (d = ++h && d && d[m] || (p = h = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p || (y && ((d[L] || (d[L] = {}))[e] = [H, p]), d !== t)););
                                return (p -= s) === n || 0 == p % n && p / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var i, n = _.pseudos[e] || _.setFilters[e.toLowerCase()] || o.error("unsupported pseudo: " + e);
                        return n[L] ? n(t) : n.length > 1 ? (i = [e, e, "", t], _.setFilters.hasOwnProperty(e.toLowerCase()) ? s(function(e, i) {
                            for (var s, r = n(e, t), o = r.length; o--;) s = Q.call(e, r[o]), e[s] = !(i[s] = r[o])
                        }) : function(e) {
                            return n(e, 0, i)
                        }) : n
                    }
                },
                pseudos: {
                    not: s(function(e) {
                        var t = [],
                            i = [],
                            n = T(e.replace(ne, "$1"));
                        return n[L] ? s(function(e, t, i, s) {
                            for (var r, o = n(e, null, s, []), a = e.length; a--;)(r = o[a]) && (e[a] = !(t[a] = r))
                        }) : function(e, s, r) {
                            return t[0] = e, n(t, null, r, i), !i.pop()
                        }
                    }),
                    has: s(function(e) {
                        return function(t) {
                            return o(e, t).length > 0
                        }
                    }),
                    contains: s(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                        }
                    }),
                    lang: s(function(e) {
                        return ae.test(e || "") || o.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(),
                            function(t) {
                                var i;
                                do {
                                    if (i = M ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var i = e.location && e.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === P
                    },
                    focus: function(e) {
                        return e === F.activeElement && (!F.hasFocus || F.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !_.pseudos.empty(e)
                    },
                    header: function(e) {
                        return fe.test(e.nodeName)
                    },
                    input: function(e) {
                        return he.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                    },
                    first: l(function() {
                        return [0]
                    }),
                    last: l(function(e, t) {
                        return [t - 1]
                    }),
                    eq: l(function(e, t, i) {
                        return [0 > i ? i + t : i]
                    }),
                    even: l(function(e, t) {
                        for (var i = 0; t > i; i += 2) e.push(i);
                        return e
                    }),
                    odd: l(function(e, t) {
                        for (var i = 1; t > i; i += 2) e.push(i);
                        return e
                    }),
                    lt: l(function(e, t, i) {
                        for (var n = 0 > i ? i + t : i; --n >= 0;) e.push(n);
                        return e
                    }),
                    gt: l(function(e, t, i) {
                        for (var n = 0 > i ? i + t : i; t > ++n;) e.push(n);
                        return e
                    })
                }
            };
            for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) _.pseudos[w] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(w);
            for (w in {
                    submit: !0,
                    reset: !0
                }) _.pseudos[w] = function(e) {
                return function(t) {
                    var i = t.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && t.type === e
                }
            }(w);
            T = o.compile = function(e, t) {
                    var i, n = [],
                        s = [],
                        r = V[e + " "];
                    if (!r) {
                        for (t || (t = c(e)), i = t.length; i--;) r = m(t[i]), r[L] ? n.push(r) : s.push(r);
                        r = V(e, g(s, n))
                    }
                    return r
                }, _.pseudos.nth = _.pseudos.eq,
                _.filters = b.prototype = _.pseudos, _.setFilters = new b, A(), o.attr = le.attr, le.find = o, le.expr = o.selectors, le.expr[":"] = le.expr.pseudos, le.unique = o.uniqueSort, le.text = o.getText, le.isXMLDoc = o.isXML, le.contains = o.contains
        }(e);
    var We = /Until$/,
        Ye = /^(?:parents|prev(?:Until|All))/,
        Ie = /^.[^:#\[\.,]*$/,
        Ve = le.expr.match.needsContext,
        Re = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    le.fn.extend({
        find: function(e) {
            var t, i, n, s = this.length;
            if ("string" != typeof e) return n = this, this.pushStack(le(e).filter(function() {
                for (t = 0; s > t; t++)
                    if (le.contains(n[t], this)) return !0
            }));
            for (i = [], t = 0; s > t; t++) le.find(e, this[t], i);
            return i = this.pushStack(s > 1 ? le.unique(i) : i), i.selector = (this.selector ? this.selector + " " : "") + e, i
        },
        has: function(e) {
            var t, i = le(e, this),
                n = i.length;
            return this.filter(function() {
                for (t = 0; n > t; t++)
                    if (le.contains(this, i[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(d(this, e, !1))
        },
        filter: function(e) {
            return this.pushStack(d(this, e, !0))
        },
        is: function(e) {
            return !!e && ("string" == typeof e ? Ve.test(e) ? le(e, this.context).index(this[0]) >= 0 : le.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            for (var i, n = 0, s = this.length, r = [], o = Ve.test(e) || "string" != typeof e ? le(e, t || this.context) : 0; s > n; n++)
                for (i = this[n]; i && i.ownerDocument && i !== t && 11 !== i.nodeType;) {
                    if (o ? o.index(i) > -1 : le.find.matchesSelector(i, e)) {
                        r.push(i);
                        break
                    }
                    i = i.parentNode
                }
            return this.pushStack(r.length > 1 ? le.unique(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? le.inArray(this[0], le(e)) : le.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var i = "string" == typeof e ? le(e, t) : le.makeArray(e && e.nodeType ? [e] : e),
                n = le.merge(this.get(), i);
            return this.pushStack(le.unique(n))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), le.fn.andSelf = le.fn.addBack, le.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return le.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return le.dir(e, "parentNode", i)
        },
        next: function(e) {
            return u(e, "nextSibling")
        },
        prev: function(e) {
            return u(e, "previousSibling")
        },
        nextAll: function(e) {
            return le.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return le.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return le.dir(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return le.dir(e, "previousSibling", i)
        },
        siblings: function(e) {
            return le.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return le.sibling(e.firstChild)
        },
        contents: function(e) {
            return le.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : le.merge([], e.childNodes)
        }
    }, function(e, t) {
        le.fn[e] = function(i, n) {
            var s = le.map(this, t, i);
            return We.test(e) || (n = i), n && "string" == typeof n && (s = le.filter(n, s)), s = this.length > 1 && !Re[e] ? le.unique(s) : s, this.length > 1 && Ye.test(e) && (s = s.reverse()), this.pushStack(s)
        }
    }), le.extend({
        filter: function(e, t, i) {
            return i && (e = ":not(" + e + ")"), 1 === t.length ? le.find.matchesSelector(t[0], e) ? [t[0]] : [] : le.find.matches(e, t)
        },
        dir: function(e, i, n) {
            for (var s = [], r = e[i]; r && 9 !== r.nodeType && (n === t || 1 !== r.nodeType || !le(r).is(n));) 1 === r.nodeType && s.push(r), r = r[i];
            return s
        },
        sibling: function(e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        }
    });
    var Be = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ze = / jQuery\d+="(?:null|\d+)"/g,
        Ge = RegExp("<(?:" + Be + ")[\\s/>]", "i"),
        Ue = /^\s+/,
        Xe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Qe = /<([\w:]+)/,
        Je = /<tbody/i,
        Ke = /<|&#?\w+;/,
        et = /<(?:script|style|link)/i,
        tt = /^(?:checkbox|radio)$/i,
        it = /checked\s*(?:[^=]|=\s*.checked.)/i,
        nt = /^$|\/(?:java|ecma)script/i,
        st = /^true\/(.*)/,
        rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ot = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: le.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        at = p(G),
        lt = at.appendChild(G.createElement("div"));
    ot.optgroup = ot.option, ot.tbody = ot.tfoot = ot.colgroup = ot.caption = ot.thead, ot.th = ot.td, le.fn.extend({
        text: function(e) {
            return le.access(this, function(e) {
                return e === t ? le.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function(e) {
            if (le.isFunction(e)) return this.each(function(t) {
                le(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = le(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return le.isFunction(e) ? this.each(function(t) {
                le(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = le(this),
                    i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = le.isFunction(e);
            return this.each(function(i) {
                le(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                le.nodeName(this, "body") || le(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function() {
            return this.domManip(arguments, !1, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, !1, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var i, n = 0; null != (i = this[n]); n++)(!e || le.filter(e, [i]).length > 0) && (t || 1 !== i.nodeType || le.cleanData(b(i)), i.parentNode && (t && le.contains(i.ownerDocument, i) && g(b(i, "script")), i.parentNode.removeChild(i)));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && le.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && le.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return le.clone(this, e, t)
            })
        },
        html: function(e) {
            return le.access(this, function(e) {
                var i = this[0] || {},
                    n = 0,
                    s = this.length;
                if (e === t) return 1 === i.nodeType ? i.innerHTML.replace(Ze, "") : t;
                if (!("string" != typeof e || et.test(e) || !le.support.htmlSerialize && Ge.test(e) || !le.support.leadingWhitespace && Ue.test(e) || ot[(Qe.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Xe, "<$1></$2>");
                    try {
                        for (; s > n; n++) i = this[n] || {}, 1 === i.nodeType && (le.cleanData(b(i, !1)), i.innerHTML = e);
                        i = 0
                    } catch (e) {}
                }
                i && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function(e) {
            return le.isFunction(e) || "string" == typeof e || (e = le(e).not(this).detach()), this.domManip([e], !0, function(e) {
                var t = this.nextSibling,
                    i = this.parentNode;
                i && (le(this).remove(), i.insertBefore(e, t))
            })
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, i, n) {
            e = te.apply([], e);
            var s, r, o, a, l, c, u = 0,
                d = this.length,
                p = this,
                g = d - 1,
                v = e[0],
                y = le.isFunction(v);
            if (y || !(1 >= d || "string" != typeof v || le.support.checkClone) && it.test(v)) return this.each(function(s) {
                var r = p.eq(s);
                y && (e[0] = v.call(this, s, i ? r.html() : t)), r.domManip(e, i, n)
            });
            if (d && (c = le.buildFragment(e, this[0].ownerDocument, !1, this), s = c.firstChild, 1 === c.childNodes.length && (c = s), s)) {
                for (i = i && le.nodeName(s, "tr"), a = le.map(b(c, "script"), f), o = a.length; d > u; u++) r = c, u !== g && (r = le.clone(r, !0, !0), o && le.merge(a, b(r, "script"))), n.call(i && le.nodeName(this[u], "table") ? h(this[u], "tbody") : this[u], r, u);
                if (o)
                    for (l = a[a.length - 1].ownerDocument, le.map(a, m), u = 0; o > u; u++) r = a[u], nt.test(r.type || "") && !le._data(r, "globalEval") && le.contains(l, r) && (r.src ? le.ajax({
                        url: r.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        throws: !0
                    }) : le.globalEval((r.text || r.textContent || r.innerHTML || "").replace(rt, "")));
                c = s = null
            }
            return this
        }
    }), le.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        le.fn[e] = function(e) {
            for (var i, n = 0, s = [], r = le(e), o = r.length - 1; o >= n; n++) i = n === o ? this : this.clone(!0), le(r[n])[t](i), ie.apply(s, i.get());
            return this.pushStack(s)
        }
    }), le.extend({
        clone: function(e, t, i) {
            var n, s, r, o, a, l = le.contains(e.ownerDocument, e);
            if (le.support.html5Clone || le.isXMLDoc(e) || !Ge.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (lt.innerHTML = e.outerHTML, lt.removeChild(r = lt.firstChild)), !(le.support.noCloneEvent && le.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || le.isXMLDoc(e)))
                for (n = b(r), a = b(e), o = 0; null != (s = a[o]); ++o) n[o] && y(s, n[o]);
            if (t)
                if (i)
                    for (a = a || b(e), n = n || b(r), o = 0; null != (s = a[o]); o++) v(s, n[o]);
                else v(e, r);
            return n = b(r, "script"), n.length > 0 && g(n, !l && b(e, "script")), n = a = s = null, r
        },
        buildFragment: function(e, t, i, n) {
            for (var s, r, o, a, l, c, u, d = e.length, h = p(t), f = [], m = 0; d > m; m++)
                if ((r = e[m]) || 0 === r)
                    if ("object" === le.type(r)) le.merge(f, r.nodeType ? [r] : r);
                    else if (Ke.test(r)) {
                for (a = a || h.appendChild(t.createElement("div")), l = (Qe.exec(r) || ["", ""])[1].toLowerCase(), u = ot[l] || ot._default, a.innerHTML = u[1] + r.replace(Xe, "<$1></$2>") + u[2], s = u[0]; s--;) a = a.lastChild;
                if (!le.support.leadingWhitespace && Ue.test(r) && f.push(t.createTextNode(Ue.exec(r)[0])), !le.support.tbody)
                    for (r = "table" !== l || Je.test(r) ? "<table>" !== u[1] || Je.test(r) ? 0 : a : a.firstChild, s = r && r.childNodes.length; s--;) le.nodeName(c = r.childNodes[s], "tbody") && !c.childNodes.length && r.removeChild(c);
                for (le.merge(f, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = h.lastChild
            } else f.push(t.createTextNode(r));
            for (a && h.removeChild(a), le.support.appendChecked || le.grep(b(f, "input"), w), m = 0; r = f[m++];)
                if ((!n || -1 === le.inArray(r, n)) && (o = le.contains(r.ownerDocument, r), a = b(h.appendChild(r), "script"), o && g(a), i))
                    for (s = 0; r = a[s++];) nt.test(r.type || "") && i.push(r);
            return a = null, h
        },
        cleanData: function(e, t) {
            for (var i, n, s, r, o = 0, a = le.expando, l = le.cache, c = le.support.deleteExpando, u = le.event.special; null != (i = e[o]); o++)
                if ((t || le.acceptData(i)) && (s = i[a], r = s && l[s])) {
                    if (r.events)
                        for (n in r.events) u[n] ? le.event.remove(i, n) : le.removeEvent(i, n, r.handle);
                    l[s] && (delete l[s], c ? delete i[a] : typeof i.removeAttribute !== Z ? i.removeAttribute(a) : i[a] = null, K.push(s))
                }
        }
    });
    var ct, ut, dt, pt = /alpha\([^)]*\)/i,
        ht = /opacity\s*=\s*([^)]*)/,
        ft = /^(top|right|bottom|left)$/,
        mt = /^(none|table(?!-c[ea]).+)/,
        gt = /^margin/,
        vt = RegExp("^(" + ce + ")(.*)$", "i"),
        yt = RegExp("^(" + ce + ")(?!px)[a-z%]+$", "i"),
        bt = RegExp("^([+-])=(" + ce + ")", "i"),
        wt = {
            BODY: "block"
        },
        xt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        _t = {
            letterSpacing: 0,
            fontWeight: 400
        },
        kt = ["Top", "Right", "Bottom", "Left"],
        Ct = ["Webkit", "O", "Moz", "ms"];
    le.fn.extend({
        css: function(e, i) {
            return le.access(this, function(e, i, n) {
                var s, r, o = {},
                    a = 0;
                if (le.isArray(i)) {
                    for (r = ut(e), s = i.length; s > a; a++) o[i[a]] = le.css(e, i[a], !1, r);
                    return o
                }
                return n !== t ? le.style(e, i, n) : le.css(e, i)
            }, e, i, arguments.length > 1)
        },
        show: function() {
            return k(this, !0)
        },
        hide: function() {
            return k(this)
        },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() {
                (t ? e : _(this)) ? le(this).show(): le(this).hide()
            })
        }
    }), le.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = dt(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: le.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, i, n, s) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, l = le.camelCase(i),
                    c = e.style;
                if (i = le.cssProps[l] || (le.cssProps[l] = x(c, l)), a = le.cssHooks[i] || le.cssHooks[l], n === t) return a && "get" in a && (r = a.get(e, !1, s)) !== t ? r : c[i];
                if (o = typeof n, "string" === o && (r = bt.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(le.css(e, i)), o = "number"), !(null == n || "number" === o && isNaN(n) || ("number" !== o || le.cssNumber[l] || (n += "px"), le.support.clearCloneStyle || "" !== n || 0 !== i.indexOf("background") || (c[i] = "inherit"), a && "set" in a && (n = a.set(e, n, s)) === t))) try {
                    c[i] = n
                } catch (e) {}
            }
        },
        css: function(e, i, n, s) {
            var r, o, a, l = le.camelCase(i);
            return i = le.cssProps[l] || (le.cssProps[l] = x(e.style, l)), a = le.cssHooks[i] || le.cssHooks[l], a && "get" in a && (o = a.get(e, !0, n)), o === t && (o = dt(e, i, s)), "normal" === o && i in _t && (o = _t[i]), "" === n || n ? (r = parseFloat(o), !0 === n || le.isNumeric(r) ? r || 0 : o) : o
        },
        swap: function(e, t, i, n) {
            var s, r, o = {};
            for (r in t) o[r] = e.style[r], e.style[r] = t[r];
            s = i.apply(e, n || []);
            for (r in t) e.style[r] = o[r];
            return s
        }
    }), e.getComputedStyle ? (ut = function(t) {
        return e.getComputedStyle(t, null)
    }, dt = function(e, i, n) {
        var s, r, o, a = n || ut(e),
            l = a ? a.getPropertyValue(i) || a[i] : t,
            c = e.style;
        return a && ("" !== l || le.contains(e.ownerDocument, e) || (l = le.style(e, i)), yt.test(l) && gt.test(i) && (s = c.width, r = c.minWidth, o = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = a.width, c.width = s, c.minWidth = r, c.maxWidth = o)), l
    }) : G.documentElement.currentStyle && (ut = function(e) {
        return e.currentStyle
    }, dt = function(e, i, n) {
        var s, r, o, a = n || ut(e),
            l = a ? a[i] : t,
            c = e.style;
        return null == l && c && c[i] && (l = c[i]), yt.test(l) && !ft.test(i) && (s = c.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), c.left = "fontSize" === i ? "1em" : l, l = c.pixelLeft + "px", c.left = s, o && (r.left = o)), "" === l ? "auto" : l
    }), le.each(["height", "width"], function(e, i) {
        le.cssHooks[i] = {
            get: function(e, n, s) {
                return n ? 0 === e.offsetWidth && mt.test(le.css(e, "display")) ? le.swap(e, xt, function() {
                    return S(e, i, s)
                }) : S(e, i, s) : t
            },
            set: function(e, t, n) {
                var s = n && ut(e);
                return C(e, t, n ? T(e, i, n, le.support.boxSizing && "border-box" === le.css(e, "boxSizing", !1, s), s) : 0)
            }
        }
    }), le.support.opacity || (le.cssHooks.opacity = {
        get: function(e, t) {
            return ht.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var i = e.style,
                n = e.currentStyle,
                s = le.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                r = n && n.filter || i.filter || "";
            i.zoom = 1, (t >= 1 || "" === t) && "" === le.trim(r.replace(pt, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === t || n && !n.filter) || (i.filter = pt.test(r) ? r.replace(pt, s) : r + " " + s)
        }
    }), le(function() {
        le.support.reliableMarginRight || (le.cssHooks.marginRight = {
            get: function(e, i) {
                return i ? le.swap(e, {
                    display: "inline-block"
                }, dt, [e, "marginRight"]) : t
            }
        }), !le.support.pixelPosition && le.fn.position && le.each(["top", "left"], function(e, i) {
            le.cssHooks[i] = {
                get: function(e, n) {
                    return n ? (n = dt(e, i), yt.test(n) ? le(e).position()[i] + "px" : n) : t
                }
            }
        })
    }), le.expr && le.expr.filters && (le.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !le.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || le.css(e, "display"))
    }, le.expr.filters.visible = function(e) {
        return !le.expr.filters.hidden(e)
    }), le.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        le.cssHooks[e + t] = {
            expand: function(i) {
                for (var n = 0, s = {}, r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) s[e + kt[n] + t] = r[n] || r[n - 2] || r[0];
                return s
            }
        }, gt.test(e) || (le.cssHooks[e + t].set = C)
    });
    var Tt = /%20/g,
        St = /\[\]$/,
        $t = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Ft = /^(?:input|select|textarea|keygen)/i;
    le.fn.extend({
        serialize: function() {
            return le.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = le.prop(this, "elements");
                return e ? le.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !le(this).is(":disabled") && Ft.test(this.nodeName) && !At.test(e) && (this.checked || !tt.test(e))
            }).map(function(e, t) {
                var i = le(this).val();
                return null == i ? null : le.isArray(i) ? le.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace($t, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace($t, "\r\n")
                }
            }).get()
        }
    }), le.param = function(e, i) {
        var n, s = [],
            r = function(e, t) {
                t = le.isFunction(t) ? t() : null == t ? "" : t, s[s.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (i === t && (i = le.ajaxSettings && le.ajaxSettings.traditional), le.isArray(e) || e.jquery && !le.isPlainObject(e)) le.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) F(n, e[n], i, r);
        return s.join("&").replace(Tt, "+")
    }, le.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        le.fn[t] = function(e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }), le.fn.hover = function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    };
    var Pt, Mt, Dt = le.now(),
        Ot = /\?/,
        Et = /#.*$/,
        Nt = /([?&])_=[^&]*/,
        jt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Lt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        qt = /^(?:GET|HEAD)$/,
        zt = /^\/\//,
        Ht = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Wt = le.fn.load,
        Yt = {},
        It = {},
        Vt = "*/".concat("*");
    try {
        Mt = U.href
    } catch (e) {
        Mt = G.createElement("a"), Mt.href = "", Mt = Mt.href
    }
    Pt = Ht.exec(Mt.toLowerCase()) || [], le.fn.load = function(e, i, n) {
        if ("string" != typeof e && Wt) return Wt.apply(this, arguments);
        var s, r, o, a = this,
            l = e.indexOf(" ");
        return l >= 0 && (s = e.slice(l, e.length), e = e.slice(0, l)), le.isFunction(i) ? (n = i, i = t) : i && "object" == typeof i && (o = "POST"), a.length > 0 && le.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: i
        }).done(function(e) {
            r = arguments, a.html(s ? le("<div>").append(le.parseHTML(e)).find(s) : e)
        }).complete(n && function(e, t) {
            a.each(n, r || [e.responseText, t, e])
        }), this
    }, le.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        le.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), le.each(["get", "post"], function(e, i) {
        le[i] = function(e, n, s, r) {
            return le.isFunction(n) && (r = r || s, s = n, n = t), le.ajax({
                url: e,
                type: i,
                dataType: r,
                data: n,
                success: s
            })
        }
    }), le.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Mt,
            type: "GET",
            isLocal: Lt.test(Pt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Vt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": le.parseJSON,
                "text xml": le.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? D(D(e, le.ajaxSettings), t) : D(le.ajaxSettings, e)
        },
        ajaxPrefilter: P(Yt),
        ajaxTransport: P(It),
        ajax: function(e, i) {
            function n(e, i, n, s) {
                var r, d, y, b, x, k = i;
                2 !== w && (w = 2, l && clearTimeout(l), u = t, a = s || "", _.readyState = e > 0 ? 4 : 0, n && (b = O(p, _, n)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (x = _.getResponseHeader("Last-Modified"), x && (le.lastModified[o] = x), (x = _.getResponseHeader("etag")) && (le.etag[o] = x)), 204 === e ? (r = !0, k = "nocontent") : 304 === e ? (r = !0, k = "notmodified") : (r = E(p, b), k = r.state, d = r.data, y = r.error, r = !y)) : (y = k, (e || !k) && (k = "error", 0 > e && (e = 0))), _.status = e, _.statusText = (i || k) + "", r ? m.resolveWith(h, [d, k, _]) : m.rejectWith(h, [_, k, y]), _.statusCode(v), v = t, c && f.trigger(r ? "ajaxSuccess" : "ajaxError", [_, p, r ? d : y]), g.fireWith(h, [_, k]), c && (f.trigger("ajaxComplete", [_, p]), --le.active || le.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (i = e, e = t), i = i || {};
            var s, r, o, a, l, c, u, d, p = le.ajaxSetup({}, i),
                h = p.context || p,
                f = p.context && (h.nodeType || h.jquery) ? le(h) : le.event,
                m = le.Deferred(),
                g = le.Callbacks("once memory"),
                v = p.statusCode || {},
                y = {},
                b = {},
                w = 0,
                x = "canceled",
                _ = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === w) {
                            if (!d)
                                for (d = {}; t = jt.exec(a);) d[t[1].toLowerCase()] = t[2];
                            t = d[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var i = e.toLowerCase();
                        return w || (e = b[i] = b[i] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return w || (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > w)
                                for (t in e) v[t] = [v[t], e[t]];
                            else _.always(e[_.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return u && u.abort(t), n(0, t), this
                    }
                };
            if (m.promise(_).complete = g.add, _.success = _.done, _.error = _.fail, p.url = ((e || p.url || Mt) + "").replace(Et, "").replace(zt, Pt[1] + "//"), p.type = i.method || i.type || p.method || p.type, p.dataTypes = le.trim(p.dataType || "*").toLowerCase().match(ue) || [""], null == p.crossDomain && (s = Ht.exec(p.url.toLowerCase()), p.crossDomain = !(!s || s[1] === Pt[1] && s[2] === Pt[2] && (s[3] || ("http:" === s[1] ? 80 : 443)) == (Pt[3] || ("http:" === Pt[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = le.param(p.data, p.traditional)), M(Yt, p, i, _), 2 === w) return _;
            c = p.global, c && 0 == le.active++ && le.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !qt.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (Ot.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = Nt.test(o) ? o.replace(Nt, "$1_=" + Dt++) : o + (Ot.test(o) ? "&" : "?") + "_=" + Dt++)), p.ifModified && (le.lastModified[o] && _.setRequestHeader("If-Modified-Since", le.lastModified[o]), le.etag[o] && _.setRequestHeader("If-None-Match", le.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || i.contentType) && _.setRequestHeader("Content-Type", p.contentType), _.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Vt + "; q=0.01" : "") : p.accepts["*"]);
            for (r in p.headers) _.setRequestHeader(r, p.headers[r]);
            if (p.beforeSend && (!1 === p.beforeSend.call(h, _, p) || 2 === w)) return _.abort();
            x = "abort";
            for (r in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) _[r](p[r]);
            if (u = M(It, p, i, _)) {
                _.readyState = 1, c && f.trigger("ajaxSend", [_, p]), p.async && p.timeout > 0 && (l = setTimeout(function() {
                    _.abort("timeout")
                }, p.timeout));
                try {
                    w = 1, u.send(y, n)
                } catch (e) {
                    if (!(2 > w)) throw e;
                    n(-1, e)
                }
            } else n(-1, "No Transport");
            return _
        },
        getScript: function(e, i) {
            return le.get(e, t, i, "script")
        },
        getJSON: function(e, t, i) {
            return le.get(e, t, i, "json")
        }
    }), le.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return le.globalEval(e), e
            }
        }
    }), le.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), le.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var i, n = G.head || le("head")[0] || G.documentElement;
            return {
                send: function(t, s) {
                    i = G.createElement("script"), i.async = !0, e.scriptCharset && (i.charset = e.scriptCharset), i.src = e.url, i.onload = i.onreadystatechange = function(e, t) {
                        (t || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, t || s(200, "success"))
                    }, n.insertBefore(i, n.firstChild)
                },
                abort: function() {
                    i && i.onload(t, !0)
                }
            }
        }
    });
    var Rt = [],
        Bt = /(=)\?(?=&|$)|\?\?/;
    le.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Rt.pop() || le.expando + "_" + Dt++;
            return this[e] = !0, e
        }
    }), le.ajaxPrefilter("json jsonp", function(i, n, s) {
        var r, o, a, l = !1 !== i.jsonp && (Bt.test(i.url) ? "url" : "string" == typeof i.data && !(i.contentType || "").indexOf("application/x-www-form-urlencoded") && Bt.test(i.data) && "data");
        return l || "jsonp" === i.dataTypes[0] ? (r = i.jsonpCallback = le.isFunction(i.jsonpCallback) ? i.jsonpCallback() : i.jsonpCallback, l ? i[l] = i[l].replace(Bt, "$1" + r) : !1 !== i.jsonp && (i.url += (Ot.test(i.url) ? "&" : "?") + i.jsonp + "=" + r), i.converters["script json"] = function() {
            return a || le.error(r + " was not called"), a[0]
        }, i.dataTypes[0] = "json", o = e[r], e[r] = function() {
            a = arguments
        }, s.always(function() {
            e[r] = o, i[r] && (i.jsonpCallback = n.jsonpCallback, Rt.push(r)), a && le.isFunction(o) && o(a[0]), a = o = t
        }), "script") : t
    });
    var Zt, Gt, Ut = 0,
        Xt = e.ActiveXObject && function() {
            var e;
            for (e in Zt) Zt[e](t, !0)
        };
    le.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && N() || j()
    } : N, Gt = le.ajaxSettings.xhr(), le.support.cors = !!Gt && "withCredentials" in Gt, (Gt = le.support.ajax = !!Gt) && le.ajaxTransport(function(i) {
        if (!i.crossDomain || le.support.cors) {
            var n;
            return {
                send: function(s, r) {
                    var o, a, l = i.xhr();
                    if (i.username ? l.open(i.type, i.url, i.async, i.username, i.password) : l.open(i.type, i.url, i.async), i.xhrFields)
                        for (a in i.xhrFields) l[a] = i.xhrFields[a];
                    i.mimeType && l.overrideMimeType && l.overrideMimeType(i.mimeType), i.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (a in s) l.setRequestHeader(a, s[a])
                    } catch (e) {}
                    l.send(i.hasContent && i.data || null), n = function(e, s) {
                        var a, c, u, d;
                        try {
                            if (n && (s || 4 === l.readyState))
                                if (n = t, o && (l.onreadystatechange = le.noop, Xt && delete Zt[o]), s) 4 !== l.readyState && l.abort();
                                else {
                                    d = {}, a = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (d.text = l.responseText);
                                    try {
                                        u = l.statusText
                                    } catch (e) {
                                        u = ""
                                    }
                                    a || !i.isLocal || i.crossDomain ? 1223 === a && (a = 204) : a = d.text ? 200 : 404
                                }
                        } catch (e) {
                            s || r(-1, e)
                        }
                        d && r(a, u, d, c)
                    }, i.async ? 4 === l.readyState ? setTimeout(n) : (o = ++Ut, Xt && (Zt || (Zt = {}, le(e).unload(Xt)), Zt[o] = n), l.onreadystatechange = n) : n()
                },
                abort: function() {
                    n && n(t, !0)
                }
            }
        }
    });
    var Qt, Jt, Kt = /^(?:toggle|show|hide)$/,
        ei = RegExp("^(?:([+-])=|)(" + ce + ")([a-z%]*)$", "i"),
        ti = /queueHooks$/,
        ii = [W],
        ni = {
            "*": [function(e, t) {
                var i, n, s = this.createTween(e, t),
                    r = ei.exec(t),
                    o = s.cur(),
                    a = +o || 0,
                    l = 1,
                    c = 20;
                if (r) {
                    if (i = +r[2], "px" !== (n = r[3] || (le.cssNumber[e] ? "" : "px")) && a) {
                        a = le.css(s.elem, e, !0) || i || 1;
                        do {
                            l = l || ".5", a /= l, le.style(s.elem, e, a + n)
                        } while (l !== (l = s.cur() / o) && 1 !== l && --c)
                    }
                    s.unit = n, s.start = a, s.end = r[1] ? a + (r[1] + 1) * i : i
                }
                return s
            }]
        };
    le.Animation = le.extend(z, {
        tweener: function(e, t) {
            le.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var i, n = 0, s = e.length; s > n; n++) i = e[n], ni[i] = ni[i] || [], ni[i].unshift(t)
        },
        prefilter: function(e, t) {
            t ? ii.unshift(e) : ii.push(e)
        }
    }), le.Tween = Y, Y.prototype = {
        constructor: Y,
        init: function(e, t, i, n, s, r) {
            this.elem = e, this.prop = i, this.easing = s || "swing", this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = r || (le.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = Y.propHooks[this.prop];
            return e && e.get ? e.get(this) : Y.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = Y.propHooks[this.prop];
            return this.pos = t = this.options.duration ? le.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Y.propHooks._default.set(this), this
        }
    }, Y.prototype.init.prototype = Y.prototype, Y.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = le.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                le.fx.step[e.prop] ? le.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[le.cssProps[e.prop]] || le.cssHooks[e.prop]) ? le.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Y.propHooks.scrollTop = Y.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, le.each(["toggle", "show", "hide"], function(e, t) {
        var i = le.fn[t];
        le.fn[t] = function(e, n, s) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(I(t, !0), e, n, s)
        }
    }), le.fn.extend({
        fadeTo: function(e, t, i, n) {
            return this.filter(_).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, i, n)
        },
        animate: function(e, t, i, n) {
            var s = le.isEmptyObject(e),
                r = le.speed(t, i, n),
                o = function() {
                    var t = z(this, le.extend({}, e), r);
                    o.finish = function() {
                        t.stop(!0)
                    }, (s || le._data(this, "finish")) && t.stop(!0)
                };
            return o.finish = o, s || !1 === r.queue ? this.each(o) : this.queue(r.queue, o)
        },
        stop: function(e, i, n) {
            var s = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = i, i = e, e = t), i && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    i = null != e && e + "queueHooks",
                    r = le.timers,
                    o = le._data(this);
                if (i) o[i] && o[i].stop && s(o[i]);
                else
                    for (i in o) o[i] && o[i].stop && ti.test(i) && s(o[i]);
                for (i = r.length; i--;) r[i].elem !== this || null != e && r[i].queue !== e || (r[i].anim.stop(n), t = !1, r.splice(i, 1));
                (t || !n) && le.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, i = le._data(this),
                    n = i[e + "queue"],
                    s = i[e + "queueHooks"],
                    r = le.timers,
                    o = n ? n.length : 0;
                for (i.finish = !0, le.queue(this, e, []), s && s.cur && s.cur.finish && s.cur.finish.call(this), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; o > t; t++) n[t] && n[t].finish && n[t].finish.call(this);
                delete i.finish
            })
        }
    }), le.each({
        slideDown: I("show"),
        slideUp: I("hide"),
        slideToggle: I("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        le.fn[e] = function(e, i, n) {
            return this.animate(t, e, i, n)
        }
    }), le.speed = function(e, t, i) {
        var n = e && "object" == typeof e ? le.extend({}, e) : {
            complete: i || !i && t || le.isFunction(e) && e,
            duration: e,
            easing: i && t || t && !le.isFunction(t) && t
        };
        return n.duration = le.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in le.fx.speeds ? le.fx.speeds[n.duration] : le.fx.speeds._default, (null == n.queue || !0 === n.queue) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            le.isFunction(n.old) && n.old.call(this), n.queue && le.dequeue(this, n.queue)
        }, n
    }, le.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, le.timers = [], le.fx = Y.prototype.init, le.fx.tick = function() {
        var e, i = le.timers,
            n = 0;
        for (Qt = le.now(); i.length > n; n++)(e = i[n])() || i[n] !== e || i.splice(n--, 1);
        i.length || le.fx.stop(), Qt = t
    }, le.fx.timer = function(e) {
        e() && le.timers.push(e) && le.fx.start()
    }, le.fx.interval = 13, le.fx.start = function() {
        Jt || (Jt = setInterval(le.fx.tick, le.fx.interval))
    }, le.fx.stop = function() {
        clearInterval(Jt), Jt = null
    }, le.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, le.fx.step = {}, le.expr && le.expr.filters && (le.expr.filters.animated = function(e) {
        return le.grep(le.timers, function(t) {
            return e === t.elem
        }).length
    }), le.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            le.offset.setOffset(this, e, t)
        });
        var i, n, s = {
                top: 0,
                left: 0
            },
            r = this[0],
            o = r && r.ownerDocument;
        return o ? (i = o.documentElement, le.contains(i, r) ? (typeof r.getBoundingClientRect !== Z && (s = r.getBoundingClientRect()), n = V(o), {
            top: s.top + (n.pageYOffset || i.scrollTop) - (i.clientTop || 0),
            left: s.left + (n.pageXOffset || i.scrollLeft) - (i.clientLeft || 0)
        }) : s) : void 0
    }, le.offset = {
        setOffset: function(e, t, i) {
            var n = le.css(e, "position");
            "static" === n && (e.style.position = "relative");
            var s, r, o = le(e),
                a = o.offset(),
                l = le.css(e, "top"),
                c = le.css(e, "left"),
                u = ("absolute" === n || "fixed" === n) && le.inArray("auto", [l, c]) > -1,
                d = {},
                p = {};
            u ? (p = o.position(), s = p.top, r = p.left) : (s = parseFloat(l) || 0, r = parseFloat(c) || 0), le.isFunction(t) && (t = t.call(e, i, a)), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : o.css(d)
        }
    }, le.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, i = {
                        top: 0,
                        left: 0
                    },
                    n = this[0];
                return "fixed" === le.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), le.nodeName(e[0], "html") || (i = e.offset()), i.top += le.css(e[0], "borderTopWidth", !0), i.left += le.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - le.css(n, "marginTop", !0),
                    left: t.left - i.left - le.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || G.documentElement; e && !le.nodeName(e, "html") && "static" === le.css(e, "position");) e = e.offsetParent;
                return e || G.documentElement
            })
        }
    }), le.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, i) {
        var n = /Y/.test(i);
        le.fn[e] = function(s) {
            return le.access(this, function(e, s, r) {
                var o = V(e);
                return r === t ? o ? i in o ? o[i] : o.document.documentElement[s] : e[s] : (o ? o.scrollTo(n ? le(o).scrollLeft() : r, n ? r : le(o).scrollTop()) : e[s] = r, t)
            }, e, s, arguments.length, null)
        }
    }), le.each({
        Height: "height",
        Width: "width"
    }, function(e, i) {
        le.each({
            padding: "inner" + e,
            content: i,
            "": "outer" + e
        }, function(n, s) {
            le.fn[s] = function(s, r) {
                var o = arguments.length && (n || "boolean" != typeof s),
                    a = n || (!0 === s || !0 === r ? "margin" : "border");
                return le.access(this, function(i, n, s) {
                    var r;
                    return le.isWindow(i) ? i.document.documentElement["client" + e] : 9 === i.nodeType ? (r = i.documentElement, Math.max(i.body["scroll" + e], r["scroll" + e], i.body["offset" + e], r["offset" + e], r["client" + e])) : s === t ? le.css(i, n, a) : le.style(i, n, s, a)
                }, i, o ? s : t, o, null)
            }
        })
    }), e.jQuery = e.$ = le, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return le
    })
}(window),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.approve = t()
}(this, function() {
    "use strict";

    function e() {
        this.scheme = "", this.valid = !1
    }

    function t(e) {
        this.strength = e, this.points = 0, this.isMinimum = !1, this.hasLower = !1, this.hasUpper = !1, this.hasNumber = !1, this.hasSpecial = !1, this.isBonus = !1, this.percent = 0, this.valid = !1, this.errors = []
    }
    var i = {
            message: "{title} is not a valid credit card number",
            schemes: [{
                regex: /^(5610|560221|560222|560223|560224|560225)/,
                scheme: "Australian Bank Card"
            }, {
                regex: /^(2014|2149)/,
                scheme: "Diner's Club"
            }, {
                regex: /^36/,
                scheme: "Diner's Club International"
            }, {
                regex: /^(30[0-5]|36|38|54|55|2014|2149)/,
                scheme: "Diner's Club / Carte Blanche"
            }, {
                regex: /^35(2[89]|[3-8][0-9])/,
                scheme: "Japanese Credit Bureau"
            }, {
                regex: /^(5018|5020|5038|6304|6759|676[1-3])/,
                scheme: "Maestro"
            }, {
                regex: /^5[1-5]/,
                scheme: "Mastercard"
            }, {
                regex: /^(6304|670[69]|6771)/,
                scheme: "Laser"
            }, {
                regex: /^(6334|6767)/,
                scheme: "Solo (Paymentech)"
            }, {
                regex: /^(6011|622|64|65)/,
                scheme: "Discover"
            }, {
                regex: /^3[47]/,
                scheme: "American Express"
            }, {
                regex: /^(4026|417500|4508|4844|491(3|7))/,
                scheme: "Visa Electron"
            }, {
                regex: /^(4)/,
                scheme: "Visa"
            }],
            _getScheme: function(e) {
                e = ("" + e).replace(/\D/g, "");
                for (var t = this.schemes.length; t--;)
                    if (this.schemes[t].regex.test(e)) return this.schemes[t].scheme
            },
            validate: function(t) {
                t = ("" + t).replace(/\D/g, "");
                var i, n = new e,
                    s = t.length,
                    r = 0,
                    o = 1;
                if (s < 12) return !1;
                for (; s--;) i = t.charAt(s) * o, r += i - 9 * (i > 9), o ^= 3;
                return n.valid = r % 10 == 0 && r > 0, n.scheme = this._getScheme(t), n
            }
        },
        n = {
            minimum: 8,
            minimumBonus: 10,
            strengths: {
                0: "Very Weak",
                1: "Weak",
                2: "Better",
                3: "Almost",
                4: "Acceptable",
                5: "Strong",
                6: "Very Strong"
            },
            message: "{title} did not pass the strength test.",
            expects: ["min", "bonus"],
            errors: {
                isMinimum: "{title} must be at least {min} characters",
                hasLower: "{title} must have at least 1 lower case character",
                hasUpper: "{title} must have at least 1 upper case character",
                hasNumber: "{title} must have at least 1 number",
                hasSpecial: "{title} must have at least 1 special character"
            },
            _getScore: function(e) {
                var i = new t(this.strengths[0]);
                return e.length > this.minimumBonus ? (i.points += 2, i.isBonus = !0, i.isMinimum = !0) : e.length > this.minimum ? (i.points++, i.isMinimum = !0) : (i.points = 1, i.isMinimum = !1), i.hasLower = null !== e.match(/[a-z]/), i.isMinimum && i.hasLower && i.points++, i.hasUpper = null !== e.match(/[A-Z]/), i.isMinimum && i.hasUpper && i.points++, i.hasNumber = null !== e.match(/\d+/), i.isMinimum && i.hasNumber && i.points++, i.hasSpecial = null !== e.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/), i.isMinimum && i.hasSpecial && i.points++, i.percent = Math.ceil(i.points / 6 * 100), i
            },
            _getStrength: function(e) {
                var t = this._getScore(e);
                return t.strength = this.strengths[t.points], t.isMinimum || t.errors.push(this.errors.isMinimum), t.hasLower || t.errors.push(this.errors.hasLower), t.hasUpper || t.errors.push(this.errors.hasUpper), t.hasSpecial || t.errors.push(this.errors.hasSpecial), t.hasNumber || t.errors.push(this.errors.hasNumber), t.points > 4 && (t.valid = !0), t
            },
            validate: function(e, t) {
                if (this.minimum = t.min || this.minimum, this.minimumBonus = t.bonus || this.minimumBonus, t.hasOwnProperty("config") && t.config.hasOwnProperty("messages"))
                    for (var i in t.config.messages) t.config.messages.hasOwnProperty(i) && (this.errors[i] = t.config.messages[i]);
                return this._getStrength(e)
            }
        },
        s = function() {
            this.approved = !0, this.errors = [], this.failed = [], this.each = function(e) {
                for (var t = e && e.constructor && e.call && e.apply, i = this.errors.length; i--;) t && e(this.errors[i])
            }, this.filter = function(e, t) {
                var i = t && t.constructor && t.call && t.apply,
                    n = 0;
                if (this.hasOwnProperty(e))
                    for (n = this[e].errors.length; n--;) i && t(this[e].errors[n])
            }
        };
    return {
        tests: {
            required: {
                validate: function(e) {
                    return !!e
                },
                message: "{title} is required",
                expects: !1
            },
            email: {
                regex: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
                validate: function(e) {
                    return this.regex.test(e)
                },
                message: "{title} must be a valid email address",
                expects: !1
            },
            url: {
                regex: /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i,
                validate: function(e) {
                    return this.regex.test(e)
                },
                message: "{title} must be a valid web address",
                expects: !1
            },
            alphaNumeric: {
                regex: /^[A-Za-z0-9]+$/i,
                validate: function(e) {
                    return this.regex.test(e)
                },
                message: "{title} may only contain [A-Za-z] and [0-9]",
                expects: !1
            },
            numeric: {
                regex: /^-?[0-9]+$/,
                validate: function(e) {
                    return this.regex.test(e)
                },
                message: "{title} may only contain [0-9]",
                expects: !1
            },
            alpha: {
                regex: /^[A-Za-z]+$/,
                validate: function(e) {
                    return this.regex.test(e)
                },
                message: "{title} may only contain [A-Za-z]",
                expects: !1
            },
            decimal: {
                regex: /^\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*$/,
                validate: function(e) {
                    return this.regex.test(e)
                },
                message: "{title} must be a valid decimal",
                expects: !1
            },
            currency: {
                regex: /^\s*(\+|-)?((\d+(\.\d\d)?)|(\.\d\d))\s*$/,
                validate: function(e) {
                    return this.regex.test(e)
                },
                message: "{title} must be a valid currency value",
                expects: !1
            },
            ip: {
                regex: {
                    ipv4: /^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/,
                    ipv4Cidr: /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))$/,
                    ipv6: /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,
                    ipv6Cidr: /^s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:)))(%.+)?s*(\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8]))?$/
                },
                validate: function(e) {
                    return this.regex.ipv4.test(e) || this.regex.ipv6.test(e) || this.regex.ipv4Cidr.test(e) || this.regex.ipv6Cidr.test(e)
                },
                message: "{title} must be a valid IP address",
                expects: !1
            },
            min: {
                validate: function(e, t) {
                    return "string" == typeof e && e.length >= t.min
                },
                message: "{title} must be a minimum of {min} characters",
                expects: ["min"]
            },
            max: {
                validate: function(e, t) {
                    return "string" == typeof e && e.length <= t.max
                },
                message: "{title} must be a maximum of {max} characters",
                expects: ["max"]
            },
            range: {
                validate: function(e, t) {
                    return "string" == typeof e ? e.length >= t.min && e.length <= t.max : "number" == typeof e && e >= t.min && e <= t.max
                },
                message: "{title} must be a minimum of {min} and a maximum of {max} characters",
                expects: ["min", "max"]
            },
            equal: {
                validate: function(e, t) {
                    return "" + e == "" + t.value
                },
                message: "{title} must be equal to {field}",
                expects: ["value", "field"]
            },
            format: {
                validate: function(e, t) {
                    if ("[object RegExp]" === Object.prototype.toString.call(t.regex)) return t.regex.test(e);
                    throw "approve.value(): [format] - regex is not a valid regular expression."
                },
                message: "{title} did not pass the [{regex}] test",
                expects: ["regex"]
            },
            time: {
                regex: /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/,
                validate: function(e) {
                    return this.regex.test(e)
                },
                message: "{title} is not a valid time",
                expects: !1
            },
            date: {
                formats: {
                    ymd: /^(?:\2)(?:[0-9]{2})?[0-9]{2}([\/-])(1[0-2]|0?[1-9])([\/-])(3[01]|[12][0-9]|0?[1-9])$/,
                    dmy: /^(3[01]|[12][0-9]|0?[1-9])([\/-])(1[0-2]|0?[1-9])([\/-])(?:[0-9]{2})?[0-9]{2}$/
                },
                validate: function(e, t) {
                    return this.formats[t.format].test(e)
                },
                message: "{title} is not a valid date",
                expects: ["format"]
            },
            truthy: {
                regex: /^(?:1|t(?:rue)?|y(?:es)?|ok(?:ay)?)$/i,
                validate: function(e) {
                    return this.regex.test(e)
                },
                message: "{title} is not valid",
                expects: !1
            },
            falsy: {
                regex: /^(?:1|t(?:rue)?|y(?:es)?|ok(?:ay)?)$/i,
                validate: function(e) {
                    return !this.regex.test(e)
                },
                message: "{title} is not valid",
                expects: !1
            },
            cc: i,
            strength: n
        },
        _format: function(e, t) {
            return t = "object" == typeof t ? t : Array.prototype.slice.call(arguments, 1), e.replace(/\{\{|\}\}|\{(\w+)\}/g, function(e, i) {
                return "{{" === e ? "{" : "}}" === e ? "}" : t[i]
            }).trim()
        },
        _isRule: function(e) {
            return ["title", "stop", "ignoreNull"].indexOf(e) < 0
        },
        _start: function(e, t) {
            var i = new s,
                n = "",
                r = !1,
                o = !1;
            t.hasOwnProperty("title") && (n = t.title), t.hasOwnProperty("stop") && (r = t.stop), t.hasOwnProperty("ignoreNull") && (o = t.ignoreNull);
            for (var a in t) {
                if (r && !i.approved) break;
                if (t.hasOwnProperty(a) && this._isRule(a)) {
                    var l = t[a];
                    if (!this.tests.hasOwnProperty(a)) throw "approve.value(): " + a + " test not defined.";
                    var c = {
                        constraint: l,
                        rule: a,
                        title: n,
                        test: this.tests[a],
                        value: e,
                        ignoreNull: o
                    };
                    this._test(c, i)
                }
            }
            return i
        },
        _test: function(e, t) {
            if (!e.hasOwnProperty("ignoreNull") || e.value || !e.ignoreNull) {
                var i = this._getArgs(e),
                    n = e.test.validate(e.value, i);
                if (t[e.rule] = {
                        approved: !0,
                        errors: []
                    }, "object" == typeof n) {
                    if (t.approved = !!n.valid && t.approved, t[e.rule].approved = n.valid, n.hasOwnProperty("errors")) {
                        var s = this._formatMessages(n.errors, e);
                        t.errors = t.errors.concat(s), t[e.rule].errors = s
                    }
                    for (var r in n) n.hasOwnProperty(r) && !t.hasOwnProperty(r) && (t[e.rule][r] = n[r])
                } else {
                    if ("boolean" != typeof n) throw "approve.value(): " + e.rule + " returned an invalid value";
                    t.approved = !!n && t.approved, t[e.rule].approved = n
                }
                if (!t.approved) {
                    var o = this._formatMessage(e);
                    t.errors.push(o), t[e.rule].errors.push(o)
                }
                n.valid || t.failed.push(e.rule)
            }
        },
        _eachExpected: function(e, t) {
            if (Array.isArray(e.test.expects))
                for (var i = e.test.expects.length, n = i; n--;) t(e.test.expects[n], i)
        },
        _getArgs: function(e) {
            var t = {};
            return this._eachExpected(e, function(i, n) {
                if (e.constraint.hasOwnProperty(i)) t[i] = e.constraint[i];
                else {
                    if (!(n <= 1) || !/^[A-Za-z0-9]+$/i.test(e.constraint) && "[object RegExp]" !== toString.call(e.constraint)) throw "approve.value(): " + e.rule + " expects the " + i + " parameter.";
                    t[i] = e.constraint
                }
            }), e.constraint.hasOwnProperty("config") && (t.config = e.constraint.config), t
        },
        _getFormat: function(e) {
            var t = {};
            return this._eachExpected(e, function(i) {
                e.constraint.hasOwnProperty(i) && (t[i] = e.constraint[i]), /^[A-Za-z0-9]+$/i.test(e.constraint) && (t[i] = e.constraint)
            }), t.title = e.title, t
        },
        _formatMessages: function(e, t) {
            for (var i = this._getFormat(t), n = e.length; n--;) e[n] = this._format(e[n], i);
            return e
        },
        _formatMessage: function(e) {
            var t, i = this._getFormat(e);
            return e.constraint.hasOwnProperty("message") ? (t = e.constraint.message, this._format(t, i)) : (t = e.test.message, this._format(t, i))
        },
        value: function(e, t) {
            if ("object" != typeof t) throw "approve.value(value, rules): rules is not a valid object.";
            return this._start(e, t)
        },
        addTest: function(e, t) {
            if ("object" != typeof e) throw "approve.addTest(obj, name): obj is not a valid object.";
            try {
                this.tests.hasOwnProperty(t) || (this.tests[t] = e)
            } catch (e) {
                throw "approve.addTest(): " + e.message
            }
        }
    }
}),
function(e) {
    "use strict";

    function t(e) {
        var t = e.length,
            n = i.type(e);
        return "function" !== n && !i.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }
    if (!e.jQuery) {
        var i = function(e, t) {
            return new i.fn.init(e, t)
        };
        i.isWindow = function(e) {
            return e && e === e.window
        }, i.type = function(e) {
            return e ? "object" == typeof e || "function" == typeof e ? s[o.call(e)] || "object" : typeof e : e + ""
        }, i.isArray = Array.isArray || function(e) {
            return "array" === i.type(e)
        }, i.isPlainObject = function(e) {
            var t;
            if (!e || "object" !== i.type(e) || e.nodeType || i.isWindow(e)) return !1;
            try {
                if (e.constructor && !r.call(e, "constructor") && !r.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            for (t in e);
            return void 0 === t || r.call(e, t)
        }, i.each = function(e, i, n) {
            var s = 0,
                r = e.length,
                o = t(e);
            if (n) {
                if (o)
                    for (; s < r && !1 !== i.apply(e[s], n); s++);
                else
                    for (s in e)
                        if (e.hasOwnProperty(s) && !1 === i.apply(e[s], n)) break
            } else if (o)
                for (; s < r && !1 !== i.call(e[s], s, e[s]); s++);
            else
                for (s in e)
                    if (e.hasOwnProperty(s) && !1 === i.call(e[s], s, e[s])) break; return e
        }, i.data = function(e, t, s) {
            if (void 0 === s) {
                var r = e[i.expando],
                    o = r && n[r];
                if (void 0 === t) return o;
                if (o && t in o) return o[t]
            } else if (void 0 !== t) {
                var a = e[i.expando] || (e[i.expando] = ++i.uuid);
                return n[a] = n[a] || {}, n[a][t] = s, s
            }
        }, i.removeData = function(e, t) {
            var s = e[i.expando],
                r = s && n[s];
            r && (t ? i.each(t, function(e, t) {
                delete r[t]
            }) : delete n[s])
        }, i.extend = function() {
            var e, t, n, s, r, o, a = arguments[0] || {},
                l = 1,
                c = arguments.length,
                u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[l] || {}, l++), "object" != typeof a && "function" !== i.type(a) && (a = {}), l === c && (a = this, l--); l < c; l++)
                if (r = arguments[l])
                    for (s in r) r.hasOwnProperty(s) && (e = a[s], n = r[s], a !== n && (u && n && (i.isPlainObject(n) || (t = i.isArray(n))) ? (t ? (t = !1, o = e && i.isArray(e) ? e : []) : o = e && i.isPlainObject(e) ? e : {}, a[s] = i.extend(u, o, n)) : void 0 !== n && (a[s] = n)));
            return a
        }, i.queue = function(e, n, s) {
            if (e) {
                n = (n || "fx") + "queue";
                var r = i.data(e, n);
                return s ? (!r || i.isArray(s) ? r = i.data(e, n, function(e, i) {
                    var n = i || [];
                    return e && (t(Object(e)) ? function(e, t) {
                        for (var i = +t.length, n = 0, s = e.length; n < i;) e[s++] = t[n++];
                        if (i !== i)
                            for (; void 0 !== t[n];) e[s++] = t[n++];
                        e.length = s
                    }(n, "string" == typeof e ? [e] : e) : [].push.call(n, e)), n
                }(s)) : r.push(s), r) : r || []
            }
        }, i.dequeue = function(e, t) {
            i.each(e.nodeType ? [e] : e, function(e, n) {
                t = t || "fx";
                var s = i.queue(n, t),
                    r = s.shift();
                "inprogress" === r && (r = s.shift()), r && ("fx" === t && s.unshift("inprogress"), r.call(n, function() {
                    i.dequeue(n, t)
                }))
            })
        }, i.fn = i.prototype = {
            init: function(e) {
                if (e.nodeType) return this[0] = e, this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                var e = this[0],
                    t = function(e) {
                        for (var t = e.offsetParent; t && "html" !== t.nodeName.toLowerCase() && t.style && "static" === t.style.position.toLowerCase();) t = t.offsetParent;
                        return t || document
                    }(e),
                    n = this.offset(),
                    s = /^(?:body|html)$/i.test(t.nodeName) ? {
                        top: 0,
                        left: 0
                    } : i(t).offset();
                return n.top -= parseFloat(e.style.marginTop) || 0, n.left -= parseFloat(e.style.marginLeft) || 0, t.style && (s.top += parseFloat(t.style.borderTopWidth) || 0, s.left += parseFloat(t.style.borderLeftWidth) || 0), {
                    top: n.top - s.top,
                    left: n.left - s.left
                }
            }
        };
        var n = {};
        i.expando = "velocity" + (new Date).getTime(), i.uuid = 0;
        for (var s = {}, r = s.hasOwnProperty, o = s.toString, a = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < a.length; l++) s["[object " + a[l] + "]"] = a[l].toLowerCase();
        i.fn.init.prototype = i.fn, e.Velocity = {
            Utilities: i
        }
    }
}(window),
function(e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function() {
    "use strict";
    return function(e, t, i, n) {
        function s(e) {
            for (var t = -1, i = e ? e.length : 0, n = []; ++t < i;) {
                var s = e[t];
                s && n.push(s)
            }
            return n
        }

        function r(e) {
            return w.isWrapped(e) ? e = y.call(e) : w.isNode(e) && (e = [e]), e
        }

        function o(e) {
            var t = f.data(e, "velocity");
            return null === t ? n : t
        }

        function a(e, t) {
            var i = o(e);
            i && i.delayTimer && !i.delayPaused && (i.delayRemaining = i.delay - t + i.delayBegin, i.delayPaused = !0, clearTimeout(i.delayTimer.setTimeout))
        }

        function l(e, t) {
            var i = o(e);
            i && i.delayTimer && i.delayPaused && (i.delayPaused = !1, i.delayTimer.setTimeout = setTimeout(i.delayTimer.next, i.delayRemaining))
        }

        function c(e) {
            return function(t) {
                return Math.round(t * e) * (1 / e)
            }
        }

        function u(e, i, n, s) {
            function r(e, t) {
                return 1 - 3 * t + 3 * e
            }

            function o(e, t) {
                return 3 * t - 6 * e
            }

            function a(e) {
                return 3 * e
            }

            function l(e, t, i) {
                return ((r(t, i) * e + o(t, i)) * e + a(t)) * e
            }

            function c(e, t, i) {
                return 3 * r(t, i) * e * e + 2 * o(t, i) * e + a(t)
            }

            function u(t, i) {
                for (var s = 0; s < m; ++s) {
                    var r = c(i, e, n);
                    if (0 === r) return i;
                    i -= (l(i, e, n) - t) / r
                }
                return i
            }

            function d() {
                for (var t = 0; t < b; ++t) k[t] = l(t * w, e, n)
            }

            function p(t, i, s) {
                var r, o, a = 0;
                do {
                    o = i + (s - i) / 2, r = l(o, e, n) - t, r > 0 ? s = o : i = o
                } while (Math.abs(r) > v && ++a < y);
                return o
            }

            function h(t) {
                for (var i = 0, s = 1, r = b - 1; s !== r && k[s] <= t; ++s) i += w;
                --s;
                var o = (t - k[s]) / (k[s + 1] - k[s]),
                    a = i + o * w,
                    l = c(a, e, n);
                return l >= g ? u(t, a) : 0 === l ? a : p(t, i, i + w)
            }

            function f() {
                C = !0, e === i && n === s || d()
            }
            var m = 4,
                g = .001,
                v = 1e-7,
                y = 10,
                b = 11,
                w = 1 / (b - 1),
                x = "Float32Array" in t;
            if (4 !== arguments.length) return !1;
            for (var _ = 0; _ < 4; ++_)
                if ("number" != typeof arguments[_] || isNaN(arguments[_]) || !isFinite(arguments[_])) return !1;
            e = Math.min(e, 1), n = Math.min(n, 1), e = Math.max(e, 0), n = Math.max(n, 0);
            var k = x ? new Float32Array(b) : new Array(b),
                C = !1,
                T = function(t) {
                    return C || f(), e === i && n === s ? t : 0 === t ? 0 : 1 === t ? 1 : l(h(t), i, s)
                };
            T.getControlPoints = function() {
                return [{
                    x: e,
                    y: i
                }, {
                    x: n,
                    y: s
                }]
            };
            var S = "generateBezier(" + [e, i, n, s] + ")";
            return T.toString = function() {
                return S
            }, T
        }

        function d(e, t) {
            var i = e;
            return w.isString(e) ? C.Easings[e] || (i = !1) : i = w.isArray(e) && 1 === e.length ? c.apply(null, e) : w.isArray(e) && 2 === e.length ? T.apply(null, e.concat([t])) : !(!w.isArray(e) || 4 !== e.length) && u.apply(null, e), !1 === i && (i = C.Easings[C.defaults.easing] ? C.defaults.easing : k), i
        }

        function p(e) {
            if (e) {
                var t = C.timestamp && !0 !== e ? e : v.now(),
                    i = C.State.calls.length;
                i > 1e4 && (C.State.calls = s(C.State.calls), i = C.State.calls.length);
                for (var r = 0; r < i; r++)
                    if (C.State.calls[r]) {
                        var a = C.State.calls[r],
                            l = a[0],
                            c = a[2],
                            u = a[3],
                            d = !u,
                            g = null,
                            y = a[5],
                            b = a[6];
                        if (u || (u = C.State.calls[r][3] = t - 16), y) {
                            if (!0 !== y.resume) continue;
                            u = a[3] = Math.round(t - b - 16), a[5] = null
                        }
                        b = a[6] = t - u;
                        for (var x = Math.min(b / c.duration, 1), _ = 0, k = l.length; _ < k; _++) {
                            var T = l[_],
                                $ = T.element;
                            if (o($)) {
                                var F = !1;
                                if (c.display !== n && null !== c.display && "none" !== c.display) {
                                    if ("flex" === c.display) {
                                        var P = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        f.each(P, function(e, t) {
                                            S.setPropertyValue($, "display", t)
                                        })
                                    }
                                    S.setPropertyValue($, "display", c.display)
                                }
                                c.visibility !== n && "hidden" !== c.visibility && S.setPropertyValue($, "visibility", c.visibility);
                                for (var M in T)
                                    if (T.hasOwnProperty(M) && "element" !== M) {
                                        var D, O = T[M],
                                            E = w.isString(O.easing) ? C.Easings[O.easing] : O.easing;
                                        if (w.isString(O.pattern)) {
                                            var N = 1 === x ? function(e, t, i) {
                                                var n = O.endValue[t];
                                                return i ? Math.round(n) : n
                                            } : function(e, t, i) {
                                                var n = O.startValue[t],
                                                    s = O.endValue[t] - n,
                                                    r = n + s * E(x, c, s);
                                                return i ? Math.round(r) : r
                                            };
                                            D = O.pattern.replace(/{(\d+)(!)?}/g, N)
                                        } else if (1 === x) D = O.endValue;
                                        else {
                                            var j = O.endValue - O.startValue;
                                            D = O.startValue + j * E(x, c, j)
                                        }
                                        if (!d && D === O.currentValue) continue;
                                        if (O.currentValue = D, "tween" === M) g = D;
                                        else {
                                            var L;
                                            if (S.Hooks.registered[M]) {
                                                L = S.Hooks.getRoot(M);
                                                var q = o($).rootPropertyValueCache[L];
                                                q && (O.rootPropertyValue = q)
                                            }
                                            var z = S.setPropertyValue($, M, O.currentValue + (m < 9 && 0 === parseFloat(D) ? "" : O.unitType), O.rootPropertyValue, O.scrollData);
                                            S.Hooks.registered[M] && (S.Normalizations.registered[L] ? o($).rootPropertyValueCache[L] = S.Normalizations.registered[L]("extract", null, z[1]) : o($).rootPropertyValueCache[L] = z[1]), "transform" === z[0] && (F = !0)
                                        }
                                    }
                                c.mobileHA && o($).transformCache.translate3d === n && (o($).transformCache.translate3d = "(0px, 0px, 0px)", F = !0), F && S.flushTransformCache($)
                            }
                        }
                        c.display !== n && "none" !== c.display && (C.State.calls[r][2].display = !1), c.visibility !== n && "hidden" !== c.visibility && (C.State.calls[r][2].visibility = !1), c.progress && c.progress.call(a[1], a[1], x, Math.max(0, u + c.duration - t), u, g), 1 === x && h(r)
                    }
            }
            C.State.isTicking && A(p)
        }

        function h(e, t) {
            if (!C.State.calls[e]) return !1;
            for (var i = C.State.calls[e][0], s = C.State.calls[e][1], r = C.State.calls[e][2], a = C.State.calls[e][4], l = !1, c = 0, u = i.length; c < u; c++) {
                var d = i[c].element;
                t || r.loop || ("none" === r.display && S.setPropertyValue(d, "display", r.display), "hidden" === r.visibility && S.setPropertyValue(d, "visibility", r.visibility));
                var p = o(d);
                if (!0 !== r.loop && (f.queue(d)[1] === n || !/\.velocityQueueEntryFlag/i.test(f.queue(d)[1])) && p) {
                    p.isAnimating = !1, p.rootPropertyValueCache = {};
                    var h = !1;
                    f.each(S.Lists.transforms3D, function(e, t) {
                        var i = /^scale/.test(t) ? 1 : 0,
                            s = p.transformCache[t];
                        p.transformCache[t] !== n && new RegExp("^\\(" + i + "[^.]").test(s) && (h = !0, delete p.transformCache[t])
                    }), r.mobileHA && (h = !0, delete p.transformCache.translate3d), h && S.flushTransformCache(d), S.Values.removeClass(d, "velocity-animating")
                }
                if (!t && r.complete && !r.loop && c === u - 1) try {
                    r.complete.call(s, s)
                } catch (e) {
                    setTimeout(function() {
                        throw e
                    }, 1)
                }
                a && !0 !== r.loop && a(s), p && !0 === r.loop && !t && (f.each(p.tweensContainer, function(e, t) {
                    if (/^rotate/.test(e) && (parseFloat(t.startValue) - parseFloat(t.endValue)) % 360 == 0) {
                        var i = t.startValue;
                        t.startValue = t.endValue, t.endValue = i
                    }
                    /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                }), C(d, "reverse", {
                    loop: !0,
                    delay: r.delay
                })), !1 !== r.queue && f.dequeue(d, r.queue)
            }
            C.State.calls[e] = !1;
            for (var m = 0, g = C.State.calls.length; m < g; m++)
                if (!1 !== C.State.calls[m]) {
                    l = !0;
                    break
                }!1 === l && (C.State.isTicking = !1, delete C.State.calls, C.State.calls = [])
        }
        var f, m = function() {
                if (i.documentMode) return i.documentMode;
                for (var e = 7; e > 4; e--) {
                    var t = i.createElement("div");
                    if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return t = null, e
                }
                return n
            }(),
            g = function() {
                var e = 0;
                return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                    var i, n = (new Date).getTime();
                    return i = Math.max(0, 16 - (n - e)), e = n + i, setTimeout(function() {
                        t(n + i)
                    }, i)
                }
            }(),
            v = function() {
                var e = t.performance || {};
                if ("function" != typeof e.now) {
                    var i = e.timing && e.timing.navigationStart ? e.timing.navigationStart : (new Date).getTime();
                    e.now = function() {
                        return (new Date).getTime() - i
                    }
                }
                return e
            }(),
            y = function() {
                var e = Array.prototype.slice;
                try {
                    return e.call(i.documentElement), e
                } catch (t) {
                    return function(t, i) {
                        var n = this.length;
                        if ("number" != typeof t && (t = 0), "number" != typeof i && (i = n), this.slice) return e.call(this, t, i);
                        var s, r = [],
                            o = t >= 0 ? t : Math.max(0, n + t),
                            a = i < 0 ? n + i : Math.min(i, n),
                            l = a - o;
                        if (l > 0)
                            if (r = new Array(l), this.charAt)
                                for (s = 0; s < l; s++) r[s] = this.charAt(o + s);
                            else
                                for (s = 0; s < l; s++) r[s] = this[o + s];
                        return r
                    }
                }
            }(),
            b = function() {
                return Array.prototype.includes ? function(e, t) {
                    return e.includes(t)
                } : Array.prototype.indexOf ? function(e, t) {
                    return e.indexOf(t) >= 0
                } : function(e, t) {
                    for (var i = 0; i < e.length; i++)
                        if (e[i] === t) return !0;
                    return !1
                }
            },
            w = {
                isNumber: function(e) {
                    return "number" == typeof e
                },
                isString: function(e) {
                    return "string" == typeof e
                },
                isArray: Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                isFunction: function(e) {
                    return "[object Function]" === Object.prototype.toString.call(e)
                },
                isNode: function(e) {
                    return e && e.nodeType
                },
                isWrapped: function(e) {
                    return e && e !== t && w.isNumber(e.length) && !w.isString(e) && !w.isFunction(e) && !w.isNode(e) && (0 === e.length || w.isNode(e[0]))
                },
                isSVG: function(e) {
                    return t.SVGElement && e instanceof t.SVGElement
                },
                isEmptyObject: function(e) {
                    for (var t in e)
                        if (e.hasOwnProperty(t)) return !1;
                    return !0
                }
            },
            x = !1;
        if (e.fn && e.fn.jquery ? (f = e, x = !0) : f = t.Velocity.Utilities, m <= 8 && !x) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (m <= 7) return void(jQuery.fn.velocity = jQuery.fn.animate);
        var _ = 400,
            k = "swing",
            C = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t.navigator.userAgent),
                    isAndroid: /Android/i.test(t.navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(t.navigator.userAgent),
                    isChrome: t.chrome,
                    isFirefox: /Firefox/i.test(t.navigator.userAgent),
                    prefixElement: i.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: [],
                    delayedElements: {
                        count: 0
                    }
                },
                CSS: {},
                Utilities: f,
                Redirects: {},
                Easings: {},
                Promise: t.Promise,
                defaults: {
                    queue: "",
                    duration: _,
                    easing: k,
                    begin: n,
                    complete: n,
                    progress: n,
                    display: n,
                    visibility: n,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0,
                    promiseRejectEmpty: !0
                },
                init: function(e) {
                    f.data(e, "velocity", {
                        isSVG: w.isSVG(e),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    })
                },
                hook: null,
                mock: !1,
                version: {
                    major: 1,
                    minor: 5,
                    patch: 2
                },
                debug: !1,
                timestamp: !0,
                pauseAll: function(e) {
                    var t = (new Date).getTime();
                    f.each(C.State.calls, function(t, i) {
                        if (i) {
                            if (e !== n && (i[2].queue !== e || !1 === i[2].queue)) return !0;
                            i[5] = {
                                resume: !1
                            }
                        }
                    }), f.each(C.State.delayedElements, function(e, i) {
                        i && a(i, t)
                    })
                },
                resumeAll: function(e) {
                    var t = (new Date).getTime();
                    f.each(C.State.calls, function(t, i) {
                        if (i) {
                            if (e !== n && (i[2].queue !== e || !1 === i[2].queue)) return !0;
                            i[5] && (i[5].resume = !0)
                        }
                    }), f.each(C.State.delayedElements, function(e, i) {
                        i && l(i, t)
                    })
                }
            };
        t.pageYOffset !== n ? (C.State.scrollAnchor = t, C.State.scrollPropertyLeft = "pageXOffset", C.State.scrollPropertyTop = "pageYOffset") : (C.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, C.State.scrollPropertyLeft = "scrollLeft", C.State.scrollPropertyTop = "scrollTop");
        var T = function() {
            function e(e) {
                return -e.tension * e.x - e.friction * e.v
            }

            function t(t, i, n) {
                var s = {
                    x: t.x + n.dx * i,
                    v: t.v + n.dv * i,
                    tension: t.tension,
                    friction: t.friction
                };
                return {
                    dx: s.v,
                    dv: e(s)
                }
            }

            function i(i, n) {
                var s = {
                        dx: i.v,
                        dv: e(i)
                    },
                    r = t(i, .5 * n, s),
                    o = t(i, .5 * n, r),
                    a = t(i, n, o),
                    l = 1 / 6 * (s.dx + 2 * (r.dx + o.dx) + a.dx),
                    c = 1 / 6 * (s.dv + 2 * (r.dv + o.dv) + a.dv);
                return i.x = i.x + l * n, i.v = i.v + c * n, i
            }
            return function e(t, n, s) {
                var r, o, a, l = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    },
                    c = [0],
                    u = 0;
                for (t = parseFloat(t) || 500, n = parseFloat(n) || 20, s = s || null, l.tension = t, l.friction = n, r = null !== s, r ? (u = e(t, n), o = u / s * .016) : o = .016;;)
                    if (a = i(a || l, o), c.push(1 + a.x), u += 16, !(Math.abs(a.x) > 1e-4 && Math.abs(a.v) > 1e-4)) break;
                return r ? function(e) {
                    return c[e * (c.length - 1) | 0]
                } : u
            }
        }();
        C.Easings = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            spring: function(e) {
                return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
            }
        }, f.each([
            ["ease", [.25, .1, .25, 1]],
            ["ease-in", [.42, 0, 1, 1]],
            ["ease-out", [0, 0, .58, 1]],
            ["ease-in-out", [.42, 0, .58, 1]],
            ["easeInSine", [.47, 0, .745, .715]],
            ["easeOutSine", [.39, .575, .565, 1]],
            ["easeInOutSine", [.445, .05, .55, .95]],
            ["easeInQuad", [.55, .085, .68, .53]],
            ["easeOutQuad", [.25, .46, .45, .94]],
            ["easeInOutQuad", [.455, .03, .515, .955]],
            ["easeInCubic", [.55, .055, .675, .19]],
            ["easeOutCubic", [.215, .61, .355, 1]],
            ["easeInOutCubic", [.645, .045, .355, 1]],
            ["easeInQuart", [.895, .03, .685, .22]],
            ["easeOutQuart", [.165, .84, .44, 1]],
            ["easeInOutQuart", [.77, 0, .175, 1]],
            ["easeInQuint", [.755, .05, .855, .06]],
            ["easeOutQuint", [.23, 1, .32, 1]],
            ["easeInOutQuint", [.86, 0, .07, 1]],
            ["easeInExpo", [.95, .05, .795, .035]],
            ["easeOutExpo", [.19, 1, .22, 1]],
            ["easeInOutExpo", [1, 0, 0, 1]],
            ["easeInCirc", [.6, .04, .98, .335]],
            ["easeOutCirc", [.075, .82, .165, 1]],
            ["easeInOutCirc", [.785, .135, .15, .86]]
        ], function(e, t) {
            C.Easings[t[0]] = u.apply(null, t[1])
        });
        var S = C.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
                units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
                colorNames: {
                    aliceblue: "240,248,255",
                    antiquewhite: "250,235,215",
                    aquamarine: "127,255,212",
                    aqua: "0,255,255",
                    azure: "240,255,255",
                    beige: "245,245,220",
                    bisque: "255,228,196",
                    black: "0,0,0",
                    blanchedalmond: "255,235,205",
                    blueviolet: "138,43,226",
                    blue: "0,0,255",
                    brown: "165,42,42",
                    burlywood: "222,184,135",
                    cadetblue: "95,158,160",
                    chartreuse: "127,255,0",
                    chocolate: "210,105,30",
                    coral: "255,127,80",
                    cornflowerblue: "100,149,237",
                    cornsilk: "255,248,220",
                    crimson: "220,20,60",
                    cyan: "0,255,255",
                    darkblue: "0,0,139",
                    darkcyan: "0,139,139",
                    darkgoldenrod: "184,134,11",
                    darkgray: "169,169,169",
                    darkgrey: "169,169,169",
                    darkgreen: "0,100,0",
                    darkkhaki: "189,183,107",
                    darkmagenta: "139,0,139",
                    darkolivegreen: "85,107,47",
                    darkorange: "255,140,0",
                    darkorchid: "153,50,204",
                    darkred: "139,0,0",
                    darksalmon: "233,150,122",
                    darkseagreen: "143,188,143",
                    darkslateblue: "72,61,139",
                    darkslategray: "47,79,79",
                    darkturquoise: "0,206,209",
                    darkviolet: "148,0,211",
                    deeppink: "255,20,147",
                    deepskyblue: "0,191,255",
                    dimgray: "105,105,105",
                    dimgrey: "105,105,105",
                    dodgerblue: "30,144,255",
                    firebrick: "178,34,34",
                    floralwhite: "255,250,240",
                    forestgreen: "34,139,34",
                    fuchsia: "255,0,255",
                    gainsboro: "220,220,220",
                    ghostwhite: "248,248,255",
                    gold: "255,215,0",
                    goldenrod: "218,165,32",
                    gray: "128,128,128",
                    grey: "128,128,128",
                    greenyellow: "173,255,47",
                    green: "0,128,0",
                    honeydew: "240,255,240",
                    hotpink: "255,105,180",
                    indianred: "205,92,92",
                    indigo: "75,0,130",
                    ivory: "255,255,240",
                    khaki: "240,230,140",
                    lavenderblush: "255,240,245",
                    lavender: "230,230,250",
                    lawngreen: "124,252,0",
                    lemonchiffon: "255,250,205",
                    lightblue: "173,216,230",
                    lightcoral: "240,128,128",
                    lightcyan: "224,255,255",
                    lightgoldenrodyellow: "250,250,210",
                    lightgray: "211,211,211",
                    lightgrey: "211,211,211",
                    lightgreen: "144,238,144",
                    lightpink: "255,182,193",
                    lightsalmon: "255,160,122",
                    lightseagreen: "32,178,170",
                    lightskyblue: "135,206,250",
                    lightslategray: "119,136,153",
                    lightsteelblue: "176,196,222",
                    lightyellow: "255,255,224",
                    limegreen: "50,205,50",
                    lime: "0,255,0",
                    linen: "250,240,230",
                    magenta: "255,0,255",
                    maroon: "128,0,0",
                    mediumaquamarine: "102,205,170",
                    mediumblue: "0,0,205",
                    mediumorchid: "186,85,211",
                    mediumpurple: "147,112,219",
                    mediumseagreen: "60,179,113",
                    mediumslateblue: "123,104,238",
                    mediumspringgreen: "0,250,154",
                    mediumturquoise: "72,209,204",
                    mediumvioletred: "199,21,133",
                    midnightblue: "25,25,112",
                    mintcream: "245,255,250",
                    mistyrose: "255,228,225",
                    moccasin: "255,228,181",
                    navajowhite: "255,222,173",
                    navy: "0,0,128",
                    oldlace: "253,245,230",
                    olivedrab: "107,142,35",
                    olive: "128,128,0",
                    orangered: "255,69,0",
                    orange: "255,165,0",
                    orchid: "218,112,214",
                    palegoldenrod: "238,232,170",
                    palegreen: "152,251,152",
                    paleturquoise: "175,238,238",
                    palevioletred: "219,112,147",
                    papayawhip: "255,239,213",
                    peachpuff: "255,218,185",
                    peru: "205,133,63",
                    pink: "255,192,203",
                    plum: "221,160,221",
                    powderblue: "176,224,230",
                    purple: "128,0,128",
                    red: "255,0,0",
                    rosybrown: "188,143,143",
                    royalblue: "65,105,225",
                    saddlebrown: "139,69,19",
                    salmon: "250,128,114",
                    sandybrown: "244,164,96",
                    seagreen: "46,139,87",
                    seashell: "255,245,238",
                    sienna: "160,82,45",
                    silver: "192,192,192",
                    skyblue: "135,206,235",
                    slateblue: "106,90,205",
                    slategray: "112,128,144",
                    snow: "255,250,250",
                    springgreen: "0,255,127",
                    steelblue: "70,130,180",
                    tan: "210,180,140",
                    teal: "0,128,128",
                    thistle: "216,191,216",
                    tomato: "255,99,71",
                    turquoise: "64,224,208",
                    violet: "238,130,238",
                    wheat: "245,222,179",
                    whitesmoke: "245,245,245",
                    white: "255,255,255",
                    yellowgreen: "154,205,50",
                    yellow: "255,255,0"
                }
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                },
                registered: {},
                register: function() {
                    for (var e = 0; e < S.Lists.colors.length; e++) {
                        var t = "color" === S.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                        S.Hooks.templates[S.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                    }
                    var i, n, s;
                    if (m)
                        for (i in S.Hooks.templates)
                            if (S.Hooks.templates.hasOwnProperty(i)) {
                                n = S.Hooks.templates[i], s = n[0].split(" ");
                                var r = n[1].match(S.RegEx.valueSplit);
                                "Color" === s[0] && (s.push(s.shift()), r.push(r.shift()), S.Hooks.templates[i] = [s.join(" "), r.join(" ")])
                            }
                    for (i in S.Hooks.templates)
                        if (S.Hooks.templates.hasOwnProperty(i)) {
                            n = S.Hooks.templates[i], s = n[0].split(" ");
                            for (var o in s)
                                if (s.hasOwnProperty(o)) {
                                    var a = i + s[o],
                                        l = o;
                                    S.Hooks.registered[a] = [i, l]
                                }
                        }
                },
                getRoot: function(e) {
                    var t = S.Hooks.registered[e];
                    return t ? t[0] : e
                },
                getUnit: function(e, t) {
                    var i = (e.substr(t || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                    return i && b(S.Lists.units, i) ? i : ""
                },
                fixColors: function(e) {
                    return e.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function(e, t, i) {
                        return S.Lists.colorNames.hasOwnProperty(i) ? (t || "rgba(") + S.Lists.colorNames[i] + (t ? "" : ",1)") : t + i
                    })
                },
                cleanRootPropertyValue: function(e, t) {
                    return S.RegEx.valueUnwrap.test(t) && (t = t.match(S.RegEx.valueUnwrap)[1]), S.Values.isCSSNullValue(t) && (t = S.Hooks.templates[e][1]), t
                },
                extractValue: function(e, t) {
                    var i = S.Hooks.registered[e];
                    if (i) {
                        var n = i[0],
                            s = i[1];
                        return t = S.Hooks.cleanRootPropertyValue(n, t), t.toString().match(S.RegEx.valueSplit)[s]
                    }
                    return t
                },
                injectValue: function(e, t, i) {
                    var n = S.Hooks.registered[e];
                    if (n) {
                        var s, r = n[0],
                            o = n[1];
                        return i = S.Hooks.cleanRootPropertyValue(r, i), s = i.toString().match(S.RegEx.valueSplit), s[o] = t, s.join(" ")
                    }
                    return i
                }
            },
            Normalizations: {
                registered: {
                    clip: function(e, t, i) {
                        switch (e) {
                            case "name":
                                return "clip";
                            case "extract":
                                var n;
                                return S.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : (n = i.toString().match(S.RegEx.valueUnwrap), n = n ? n[1].replace(/,(\s+)?/g, " ") : i), n;
                            case "inject":
                                return "rect(" + i + ")"
                        }
                    },
                    blur: function(e, t, i) {
                        switch (e) {
                            case "name":
                                return C.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var n = parseFloat(i);
                                if (!n && 0 !== n) {
                                    var s = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    n = s ? s[1] : 0
                                }
                                return n;
                            case "inject":
                                return parseFloat(i) ? "blur(" + i + ")" : "none"
                        }
                    },
                    opacity: function(e, t, i) {
                        if (m <= 8) switch (e) {
                            case "name":
                                return "filter";
                            case "extract":
                                var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                return i = n ? n[1] / 100 : 1;
                            case "inject":
                                return t.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                        } else switch (e) {
                            case "name":
                                return "opacity";
                            case "extract":
                            case "inject":
                                return i
                        }
                    }
                },
                register: function() {
                    function e(e, t, i) {
                        if ("border-box" === S.getPropertyValue(t, "boxSizing").toString().toLowerCase() === (i || !1)) {
                            var n, s, r = 0,
                                o = "width" === e ? ["Left", "Right"] : ["Top", "Bottom"],
                                a = ["padding" + o[0], "padding" + o[1], "border" + o[0] + "Width", "border" + o[1] + "Width"];
                            for (n = 0; n < a.length; n++) s = parseFloat(S.getPropertyValue(t, a[n])), isNaN(s) || (r += s);
                            return i ? -r : r
                        }
                        return 0
                    }

                    function t(t, i) {
                        return function(n, s, r) {
                            switch (n) {
                                case "name":
                                    return t;
                                case "extract":
                                    return parseFloat(r) + e(t, s, i);
                                case "inject":
                                    return parseFloat(r) - e(t, s, i) + "px"
                            }
                        }
                    }
                    m && !(m > 9) || C.State.isGingerbread || (S.Lists.transformsBase = S.Lists.transformsBase.concat(S.Lists.transforms3D));
                    for (var i = 0; i < S.Lists.transformsBase.length; i++) ! function() {
                        var e = S.Lists.transformsBase[i];
                        S.Normalizations.registered[e] = function(t, i, s) {
                            switch (t) {
                                case "name":
                                    return "transform";
                                case "extract":
                                    return o(i) === n || o(i).transformCache[e] === n ? /^scale/i.test(e) ? 1 : 0 : o(i).transformCache[e].replace(/[()]/g, "");
                                case "inject":
                                    var r = !1;
                                    switch (e.substr(0, e.length - 1)) {
                                        case "translate":
                                            r = !/(%|px|em|rem|vw|vh|\d)$/i.test(s);
                                            break;
                                        case "scal":
                                        case "scale":
                                            C.State.isAndroid && o(i).transformCache[e] === n && s < 1 && (s = 1), r = !/(\d)$/i.test(s);
                                            break;
                                        case "skew":
                                        case "rotate":
                                            r = !/(deg|\d)$/i.test(s)
                                    }
                                    return r || (o(i).transformCache[e] = "(" + s + ")"), o(i).transformCache[e]
                            }
                        }
                    }();
                    for (var s = 0; s < S.Lists.colors.length; s++) ! function() {
                        var e = S.Lists.colors[s];
                        S.Normalizations.registered[e] = function(t, i, s) {
                            switch (t) {
                                case "name":
                                    return e;
                                case "extract":
                                    var r;
                                    if (S.RegEx.wrappedValueAlreadyExtracted.test(s)) r = s;
                                    else {
                                        var o, a = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(s) ? o = a[s] !== n ? a[s] : a.black : S.RegEx.isHex.test(s) ? o = "rgb(" + S.Values.hexToRgb(s).join(" ") + ")" : /^rgba?\(/i.test(s) || (o = a.black), r = (o || s).toString().match(S.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return (!m || m > 8) && 3 === r.split(" ").length && (r += " 1"), r;
                                case "inject":
                                    return /^rgb/.test(s) ? s : (m <= 8 ? 4 === s.split(" ").length && (s = s.split(/\s+/).slice(0, 3).join(" ")) : 3 === s.split(" ").length && (s += " 1"), (m <= 8 ? "rgb" : "rgba") + "(" + s.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")")
                            }
                        }
                    }();
                    S.Normalizations.registered.innerWidth = t("width", !0), S.Normalizations.registered.innerHeight = t("height", !0), S.Normalizations.registered.outerWidth = t("width"), S.Normalizations.registered.outerHeight = t("height")
                }
            },
            Names: {
                camelCase: function(e) {
                    return e.replace(/-(\w)/g, function(e, t) {
                        return t.toUpperCase()
                    })
                },
                SVGAttribute: function(e) {
                    var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (m || C.State.isAndroid && !C.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                },
                prefixCheck: function(e) {
                    if (C.State.prefixMatches[e]) return [C.State.prefixMatches[e], !0];
                    for (var t = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = t.length; i < n; i++) {
                        var s;
                        if (s = 0 === i ? e : t[i] + e.replace(/^\w/, function(e) {
                                return e.toUpperCase()
                            }), w.isString(C.State.prefixElement.style[s])) return C.State.prefixMatches[e] = s, [s, !0]
                    }
                    return [e, !1]
                }
            },
            Values: {
                hexToRgb: function(e) {
                    var t, i = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return e = e.replace(i, function(e, t, i, n) {
                        return t + t + i + i + n + n
                    }), t = n.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                },
                isCSSNullValue: function(e) {
                    return !e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                },
                getUnitType: function(e) {
                    return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                },
                getDisplayType: function(e) {
                    var t = e && e.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                },
                addClass: function(e, t) {
                    if (e)
                        if (e.classList) e.classList.add(t);
                        else if (w.isString(e.className)) e.className += (e.className.length ? " " : "") + t;
                    else {
                        var i = e.getAttribute(m <= 7 ? "className" : "class") || "";
                        e.setAttribute("class", i + (i ? " " : "") + t)
                    }
                },
                removeClass: function(e, t) {
                    if (e)
                        if (e.classList) e.classList.remove(t);
                        else if (w.isString(e.className)) e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                    else {
                        var i = e.getAttribute(m <= 7 ? "className" : "class") || "";
                        e.setAttribute("class", i.replace(new RegExp("(^|s)" + t.split(" ").join("|") + "(s|$)", "gi"), " "))
                    }
                }
            },
            getPropertyValue: function(e, i, s, r) {
                function a(e, i) {
                    var s = 0;
                    if (m <= 8) s = f.css(e, i);
                    else {
                        var l = !1;
                        /^(width|height)$/.test(i) && 0 === S.getPropertyValue(e, "display") && (l = !0, S.setPropertyValue(e, "display", S.Values.getDisplayType(e)));
                        var c = function() {
                            l && S.setPropertyValue(e, "display", "none")
                        };
                        if (!r) {
                            if ("height" === i && "border-box" !== S.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var u = e.offsetHeight - (parseFloat(S.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingBottom")) || 0);
                                return c(), u
                            }
                            if ("width" === i && "border-box" !== S.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var d = e.offsetWidth - (parseFloat(S.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingRight")) || 0);
                                return c(), d
                            }
                        }
                        var p;
                        p = o(e) === n ? t.getComputedStyle(e, null) : o(e).computedStyle ? o(e).computedStyle : o(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === i && (i = "borderTopColor"), s = 9 === m && "filter" === i ? p.getPropertyValue(i) : p[i], "" !== s && null !== s || (s = e.style[i]), c()
                    }
                    if ("auto" === s && /^(top|right|bottom|left)$/i.test(i)) {
                        var h = a(e, "position");
                        ("fixed" === h || "absolute" === h && /top|left/i.test(i)) && (s = f(e).position()[i] + "px")
                    }
                    return s
                }
                var l;
                if (S.Hooks.registered[i]) {
                    var c = i,
                        u = S.Hooks.getRoot(c);
                    s === n && (s = S.getPropertyValue(e, S.Names.prefixCheck(u)[0])), S.Normalizations.registered[u] && (s = S.Normalizations.registered[u]("extract", e, s)), l = S.Hooks.extractValue(c, s)
                } else if (S.Normalizations.registered[i]) {
                    var d, p;
                    d = S.Normalizations.registered[i]("name", e), "transform" !== d && (p = a(e, S.Names.prefixCheck(d)[0]), S.Values.isCSSNullValue(p) && S.Hooks.templates[i] && (p = S.Hooks.templates[i][1])), l = S.Normalizations.registered[i]("extract", e, p)
                }
                if (!/^[\d-]/.test(l)) {
                    var h = o(e);
                    if (h && h.isSVG && S.Names.SVGAttribute(i))
                        if (/^(height|width)$/i.test(i)) try {
                            l = e.getBBox()[i]
                        } catch (e) {
                            l = 0
                        } else l = e.getAttribute(i);
                        else l = a(e, S.Names.prefixCheck(i)[0])
                }
                return S.Values.isCSSNullValue(l) && (l = 0), C.debug >= 2 && console.log("Get " + i + ": " + l), l
            },
            setPropertyValue: function(e, i, n, s, r) {
                var a = i;
                if ("scroll" === i) r.container ? r.container["scroll" + r.direction] = n : "Left" === r.direction ? t.scrollTo(n, r.alternateValue) : t.scrollTo(r.alternateValue, n);
                else if (S.Normalizations.registered[i] && "transform" === S.Normalizations.registered[i]("name", e)) S.Normalizations.registered[i]("inject", e, n), a = "transform", n = o(e).transformCache[i];
                else {
                    if (S.Hooks.registered[i]) {
                        var l = i,
                            c = S.Hooks.getRoot(i);
                        s = s || S.getPropertyValue(e, c), n = S.Hooks.injectValue(l, n, s), i = c
                    }
                    if (S.Normalizations.registered[i] && (n = S.Normalizations.registered[i]("inject", e, n), i = S.Normalizations.registered[i]("name", e)), a = S.Names.prefixCheck(i)[0], m <= 8) try {
                        e.style[a] = n
                    } catch (e) {
                        C.debug && console.log("Browser does not support [" + n + "] for [" + a + "]")
                    } else {
                        var u = o(e);
                        u && u.isSVG && S.Names.SVGAttribute(i) ? e.setAttribute(i, n) : e.style[a] = n
                    }
                    C.debug >= 2 && console.log("Set " + i + " (" + a + "): " + n)
                }
                return [a, n]
            },
            flushTransformCache: function(e) {
                var t = "",
                    i = o(e);
                if ((m || C.State.isAndroid && !C.State.isChrome) && i && i.isSVG) {
                    var n = function(t) {
                            return parseFloat(S.getPropertyValue(e, t))
                        },
                        s = {
                            translate: [n("translateX"), n("translateY")],
                            skewX: [n("skewX")],
                            skewY: [n("skewY")],
                            scale: 1 !== n("scale") ? [n("scale"), n("scale")] : [n("scaleX"), n("scaleY")],
                            rotate: [n("rotateZ"), 0, 0]
                        };
                    f.each(o(e).transformCache, function(e) {
                        /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), s[e] && (t += e + "(" + s[e].join(" ") + ") ", delete s[e])
                    })
                } else {
                    var r, a;
                    f.each(o(e).transformCache, function(i) {
                        if (r = o(e).transformCache[i], "transformPerspective" === i) return a = r, !0;
                        9 === m && "rotateZ" === i && (i = "rotate"), t += i + r + " "
                    }), a && (t = "perspective" + a + " " + t)
                }
                S.setPropertyValue(e, "transform", t)
            }
        };
        S.Hooks.register(), S.Normalizations.register(), C.hook = function(e, t, i) {
            var s;
            return e = r(e), f.each(e, function(e, r) {
                if (o(r) === n && C.init(r), i === n) s === n && (s = S.getPropertyValue(r, t));
                else {
                    var a = S.setPropertyValue(r, t, i);
                    "transform" === a[0] && C.CSS.flushTransformCache(r), s = a
                }
            }), s
        };
        var $ = function() {
            function e() {
                return u ? T.promise || null : m
            }

            function s(e, s) {
                function r(r) {
                    var u, h;
                    if (l.begin && 0 === F) try {
                        l.begin.call(v, v)
                    } catch (e) {
                        setTimeout(function() {
                            throw e
                        }, 1)
                    }
                    if ("scroll" === D) {
                        var m, g, _, k = /^x$/i.test(l.axis) ? "Left" : "Top",
                            $ = parseFloat(l.offset) || 0;
                        l.container ? w.isWrapped(l.container) || w.isNode(l.container) ? (l.container = l.container[0] || l.container, m = l.container["scroll" + k], _ = m + f(e).position()[k.toLowerCase()] + $) : l.container = null : (m = C.State.scrollAnchor[C.State["scrollProperty" + k]], g = C.State.scrollAnchor[C.State["scrollProperty" + ("Left" === k ? "Top" : "Left")]], _ = f(e).offset()[k.toLowerCase()] + $), c = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: m,
                                currentValue: m,
                                endValue: _,
                                unitType: "",
                                easing: l.easing,
                                scrollData: {
                                    container: l.container,
                                    direction: k,
                                    alternateValue: g
                                }
                            },
                            element: e
                        }, C.debug && console.log("tweensContainer (scroll): ", c.scroll, e)
                    } else if ("reverse" === D) {
                        if (!(u = o(e))) return;
                        if (!u.tweensContainer) return void f.dequeue(e, l.queue);
                        "none" === u.opts.display && (u.opts.display = "auto"), "hidden" === u.opts.visibility && (u.opts.visibility = "visible"), u.opts.loop = !1, u.opts.begin = null, u.opts.complete = null, x.easing || delete l.easing, x.duration || delete l.duration, l = f.extend({}, u.opts, l), h = f.extend(!0, {}, u ? u.tweensContainer : null);
                        for (var P in h)
                            if (h.hasOwnProperty(P) && "element" !== P) {
                                var M = h[P].startValue;
                                h[P].startValue = h[P].currentValue = h[P].endValue, h[P].endValue = M, w.isEmptyObject(x) || (h[P].easing = l.easing), C.debug && console.log("reverse tweensContainer (" + P + "): " + JSON.stringify(h[P]), e)
                            }
                        c = h
                    } else if ("start" === D) {
                        u = o(e), u && u.tweensContainer && !0 === u.isAnimating && (h = u.tweensContainer);
                        var O = function(s, r) {
                            var o, d = S.Hooks.getRoot(s),
                                p = !1,
                                m = r[0],
                                g = r[1],
                                v = r[2];
                            if (!(u && u.isSVG || "tween" === d || !1 !== S.Names.prefixCheck(d)[1] || S.Normalizations.registered[d] !== n)) return void(C.debug && console.log("Skipping [" + d + "] due to a lack of browser support."));
                            (l.display !== n && null !== l.display && "none" !== l.display || l.visibility !== n && "hidden" !== l.visibility) && /opacity|filter/.test(s) && !v && 0 !== m && (v = 0), l._cacheValues && h && h[s] ? (v === n && (v = h[s].endValue + h[s].unitType), p = u.rootPropertyValueCache[d]) : S.Hooks.registered[s] ? v === n ? (p = S.getPropertyValue(e, d), v = S.getPropertyValue(e, s, p)) : p = S.Hooks.templates[d][1] : v === n && (v = S.getPropertyValue(e, s));
                            var y, b, x, _ = !1,
                                k = function(e, t) {
                                    var i, n;
                                    return n = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                                        return i = e, ""
                                    }), i || (i = S.Values.getUnitType(e)), [n, i]
                                };
                            if (v !== m && w.isString(v) && w.isString(m)) {
                                o = "";
                                var T = 0,
                                    $ = 0,
                                    A = [],
                                    F = [],
                                    P = 0,
                                    M = 0,
                                    D = 0;
                                for (v = S.Hooks.fixColors(v), m = S.Hooks.fixColors(m); T < v.length && $ < m.length;) {
                                    var O = v[T],
                                        E = m[$];
                                    if (/[\d\.-]/.test(O) && /[\d\.-]/.test(E)) {
                                        for (var N = O, j = E, L = ".", z = "."; ++T < v.length;) {
                                            if ((O = v[T]) === L) L = "..";
                                            else if (!/\d/.test(O)) break;
                                            N += O
                                        }
                                        for (; ++$ < m.length;) {
                                            if ((E = m[$]) === z) z = "..";
                                            else if (!/\d/.test(E)) break;
                                            j += E
                                        }
                                        var H = S.Hooks.getUnit(v, T),
                                            W = S.Hooks.getUnit(m, $);
                                        if (T += H.length, $ += W.length, H === W) N === j ? o += N + H : (o += "{" + A.length + (M ? "!" : "") + "}" + H, A.push(parseFloat(N)), F.push(parseFloat(j)));
                                        else {
                                            var Y = parseFloat(N),
                                                I = parseFloat(j);
                                            o += (P < 5 ? "calc" : "") + "(" + (Y ? "{" + A.length + (M ? "!" : "") + "}" : "0") + H + " + " + (I ? "{" + (A.length + (Y ? 1 : 0)) + (M ? "!" : "") + "}" : "0") + W + ")", Y && (A.push(Y), F.push(0)), I && (A.push(0), F.push(I))
                                        }
                                    } else {
                                        if (O !== E) {
                                            P = 0;
                                            break
                                        }
                                        o += O, T++, $++, 0 === P && "c" === O || 1 === P && "a" === O || 2 === P && "l" === O || 3 === P && "c" === O || P >= 4 && "(" === O ? P++ : (P && P < 5 || P >= 4 && ")" === O && --P < 5) && (P = 0), 0 === M && "r" === O || 1 === M && "g" === O || 2 === M && "b" === O || 3 === M && "a" === O || M >= 3 && "(" === O ? (3 === M && "a" === O && (D = 1), M++) : D && "," === O ? ++D > 3 && (M = D = 0) : (D && M < (D ? 5 : 4) || M >= (D ? 4 : 3) && ")" === O && --M < (D ? 5 : 4)) && (M = D = 0)
                                    }
                                }
                                T === v.length && $ === m.length || (C.debug && console.error('Trying to pattern match mis-matched strings ["' + m + '", "' + v + '"]'), o = n), o && (A.length ? (C.debug && console.log('Pattern found "' + o + '" -> ', A, F, "[" + v + "," + m + "]"), v = A, m = F, b = x = "") : o = n)
                            }
                            o || (y = k(s, v), v = y[0], x = y[1], y = k(s, m), m = y[0].replace(/^([+-\/*])=/, function(e, t) {
                                return _ = t, ""
                            }), b = y[1], v = parseFloat(v) || 0, m = parseFloat(m) || 0, "%" === b && (/^(fontSize|lineHeight)$/.test(s) ? (m /= 100, b = "em") : /^scale/.test(s) ? (m /= 100, b = "") : /(Red|Green|Blue)$/i.test(s) && (m = m / 100 * 255, b = "")));
                            if (/[\/*]/.test(_)) b = x;
                            else if (x !== b && 0 !== v)
                                if (0 === m) b = x;
                                else {
                                    a = a || function() {
                                        var n = {
                                                myParent: e.parentNode || i.body,
                                                position: S.getPropertyValue(e, "position"),
                                                fontSize: S.getPropertyValue(e, "fontSize")
                                            },
                                            s = n.position === q.lastPosition && n.myParent === q.lastParent,
                                            r = n.fontSize === q.lastFontSize;
                                        q.lastParent = n.myParent, q.lastPosition = n.position, q.lastFontSize = n.fontSize;
                                        var o = {};
                                        if (r && s) o.emToPx = q.lastEmToPx, o.percentToPxWidth = q.lastPercentToPxWidth, o.percentToPxHeight = q.lastPercentToPxHeight;
                                        else {
                                            var a = u && u.isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                                            C.init(a), n.myParent.appendChild(a), f.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                                C.CSS.setPropertyValue(a, t, "hidden")
                                            }), C.CSS.setPropertyValue(a, "position", n.position), C.CSS.setPropertyValue(a, "fontSize", n.fontSize), C.CSS.setPropertyValue(a, "boxSizing", "content-box"), f.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                                C.CSS.setPropertyValue(a, t, "100%")
                                            }), C.CSS.setPropertyValue(a, "paddingLeft", "100em"), o.percentToPxWidth = q.lastPercentToPxWidth = (parseFloat(S.getPropertyValue(a, "width", null, !0)) || 1) / 100, o.percentToPxHeight = q.lastPercentToPxHeight = (parseFloat(S.getPropertyValue(a, "height", null, !0)) || 1) / 100, o.emToPx = q.lastEmToPx = (parseFloat(S.getPropertyValue(a, "paddingLeft")) || 1) / 100, n.myParent.removeChild(a)
                                        }
                                        return null === q.remToPx && (q.remToPx = parseFloat(S.getPropertyValue(i.body, "fontSize")) || 16), null === q.vwToPx && (q.vwToPx = parseFloat(t.innerWidth) / 100, q.vhToPx = parseFloat(t.innerHeight) / 100), o.remToPx = q.remToPx, o.vwToPx = q.vwToPx, o.vhToPx = q.vhToPx, C.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(o), e), o
                                    }();
                                    var V = /margin|padding|left|right|width|text|word|letter/i.test(s) || /X$/.test(s) || "x" === s ? "x" : "y";
                                    switch (x) {
                                        case "%":
                                            v *= "x" === V ? a.percentToPxWidth : a.percentToPxHeight;
                                            break;
                                        case "px":
                                            break;
                                        default:
                                            v *= a[x + "ToPx"]
                                    }
                                    switch (b) {
                                        case "%":
                                            v *= 1 / ("x" === V ? a.percentToPxWidth : a.percentToPxHeight);
                                            break;
                                        case "px":
                                            break;
                                        default:
                                            v *= 1 / a[b + "ToPx"]
                                    }
                                }
                            switch (_) {
                                case "+":
                                    m = v + m;
                                    break;
                                case "-":
                                    m = v - m;
                                    break;
                                case "*":
                                    m *= v;
                                    break;
                                case "/":
                                    m = v / m
                            }
                            c[s] = {
                                rootPropertyValue: p,
                                startValue: v,
                                currentValue: v,
                                endValue: m,
                                unitType: b,
                                easing: g
                            }, o && (c[s].pattern = o), C.debug && console.log("tweensContainer (" + s + "): " + JSON.stringify(c[s]), e)
                        };
                        for (var E in y)
                            if (y.hasOwnProperty(E)) {
                                var N = S.Names.camelCase(E),
                                    j = function(t, i) {
                                        var n, r, o;
                                        return w.isFunction(t) && (t = t.call(e, s, A)), w.isArray(t) ? (n = t[0], !w.isArray(t[1]) && /^[\d-]/.test(t[1]) || w.isFunction(t[1]) || S.RegEx.isHex.test(t[1]) ? o = t[1] : w.isString(t[1]) && !S.RegEx.isHex.test(t[1]) && C.Easings[t[1]] || w.isArray(t[1]) ? (r = i ? t[1] : d(t[1], l.duration), o = t[2]) : o = t[1] || t[2]) : n = t, i || (r = r || l.easing), w.isFunction(n) && (n = n.call(e, s, A)), w.isFunction(o) && (o = o.call(e, s, A)), [n || 0, r, o]
                                    }(y[E]);
                                if (b(S.Lists.colors, N)) {
                                    var L = j[0],
                                        H = j[1],
                                        W = j[2];
                                    if (S.RegEx.isHex.test(L)) {
                                        for (var Y = ["Red", "Green", "Blue"], I = S.Values.hexToRgb(L), V = W ? S.Values.hexToRgb(W) : n, R = 0; R < Y.length; R++) {
                                            var B = [I[R]];
                                            H && B.push(H), V !== n && B.push(V[R]), O(N + Y[R], B)
                                        }
                                        continue
                                    }
                                }
                                O(N, j)
                            }
                        c.element = e
                    }
                    c.element && (S.Values.addClass(e, "velocity-animating"), z.push(c), u = o(e), u && ("" === l.queue && (u.tweensContainer = c, u.opts = l), u.isAnimating = !0), F === A - 1 ? (C.State.calls.push([z, v, l, null, T.resolver, null, 0]), !1 === C.State.isTicking && (C.State.isTicking = !0, p())) : F++)
                }
                var a, l = f.extend({}, C.defaults, x),
                    c = {};
                switch (o(e) === n && C.init(e), parseFloat(l.delay) && !1 !== l.queue && f.queue(e, l.queue, function(t, i) {
                    if (!0 === i) return !0;
                    C.velocityQueueEntryFlag = !0;
                    var n = C.State.delayedElements.count++;
                    C.State.delayedElements[n] = e;
                    var s = function(e) {
                        return function() {
                            C.State.delayedElements[e] = !1, t()
                        }
                    }(n);
                    o(e).delayBegin = (new Date).getTime(), o(e).delay = parseFloat(l.delay), o(e).delayTimer = {
                        setTimeout: setTimeout(t, parseFloat(l.delay)),
                        next: s
                    }
                }), l.duration.toString().toLowerCase()) {
                    case "fast":
                        l.duration = 200;
                        break;
                    case "normal":
                        l.duration = _;
                        break;
                    case "slow":
                        l.duration = 600;
                        break;
                    default:
                        l.duration = parseFloat(l.duration) || 1
                }
                if (!1 !== C.mock && (!0 === C.mock ? l.duration = l.delay = 1 : (l.duration *= parseFloat(C.mock) || 1, l.delay *= parseFloat(C.mock) || 1)), l.easing = d(l.easing, l.duration), l.begin && !w.isFunction(l.begin) && (l.begin = null), l.progress && !w.isFunction(l.progress) && (l.progress = null), l.complete && !w.isFunction(l.complete) && (l.complete = null), l.display !== n && null !== l.display && (l.display = l.display.toString().toLowerCase(), "auto" === l.display && (l.display = C.CSS.Values.getDisplayType(e))), l.visibility !== n && null !== l.visibility && (l.visibility = l.visibility.toString().toLowerCase()), l.mobileHA = l.mobileHA && C.State.isMobile && !C.State.isGingerbread, !1 === l.queue)
                    if (l.delay) {
                        var u = C.State.delayedElements.count++;
                        C.State.delayedElements[u] = e;
                        var h = function(e) {
                            return function() {
                                C.State.delayedElements[e] = !1, r()
                            }
                        }(u);
                        o(e).delayBegin = (new Date).getTime(), o(e).delay = parseFloat(l.delay), o(e).delayTimer = {
                            setTimeout: setTimeout(r, parseFloat(l.delay)),
                            next: h
                        }
                    } else r();
                else f.queue(e, l.queue, function(e, t) {
                    if (!0 === t) return T.promise && T.resolver(v), !0;
                    C.velocityQueueEntryFlag = !0, r(e)
                });
                "" !== l.queue && "fx" !== l.queue || "inprogress" === f.queue(e)[0] || f.dequeue(e)
            }
            var c, u, m, g, v, y, x, k = arguments[0] && (arguments[0].p || f.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || w.isString(arguments[0].properties));
            w.isWrapped(this) ? (u = !1, g = 0, v = this, m = this) : (u = !0, g = 1, v = k ? arguments[0].elements || arguments[0].e : arguments[0]);
            var T = {
                promise: null,
                resolver: null,
                rejecter: null
            };
            if (u && C.Promise && (T.promise = new C.Promise(function(e, t) {
                    T.resolver = e, T.rejecter = t
                })), k ? (y = arguments[0].properties || arguments[0].p, x = arguments[0].options || arguments[0].o) : (y = arguments[g], x = arguments[g + 1]), !(v = r(v))) return void(T.promise && (y && x && !1 === x.promiseRejectEmpty ? T.resolver() : T.rejecter()));
            var A = v.length,
                F = 0;
            if (!/^(stop|finish|finishAll|pause|resume)$/i.test(y) && !f.isPlainObject(x)) {
                var P = g + 1;
                x = {};
                for (var M = P; M < arguments.length; M++) w.isArray(arguments[M]) || !/^(fast|normal|slow)$/i.test(arguments[M]) && !/^\d/.test(arguments[M]) ? w.isString(arguments[M]) || w.isArray(arguments[M]) ? x.easing = arguments[M] : w.isFunction(arguments[M]) && (x.complete = arguments[M]) : x.duration = arguments[M]
            }
            var D;
            switch (y) {
                case "scroll":
                    D = "scroll";
                    break;
                case "reverse":
                    D = "reverse";
                    break;
                case "pause":
                    var O = (new Date).getTime();
                    return f.each(v, function(e, t) {
                        a(t, O)
                    }), f.each(C.State.calls, function(e, t) {
                        var i = !1;
                        t && f.each(t[1], function(e, s) {
                            var r = x === n ? "" : x;
                            return !0 !== r && t[2].queue !== r && (x !== n || !1 !== t[2].queue) || (f.each(v, function(e, n) {
                                if (n === s) return t[5] = {
                                    resume: !1
                                }, i = !0, !1
                            }), !i && void 0)
                        })
                    }), e();
                case "resume":
                    return f.each(v, function(e, t) {
                        l(t, O)
                    }), f.each(C.State.calls, function(e, t) {
                        var i = !1;
                        t && f.each(t[1], function(e, s) {
                            var r = x === n ? "" : x;
                            return !0 !== r && t[2].queue !== r && (x !== n || !1 !== t[2].queue) || (!t[5] || (f.each(v, function(e, n) {
                                if (n === s) return t[5].resume = !0, i = !0, !1
                            }), !i && void 0))
                        })
                    }), e();
                case "finish":
                case "finishAll":
                case "stop":
                    f.each(v, function(e, t) {
                        o(t) && o(t).delayTimer && (clearTimeout(o(t).delayTimer.setTimeout), o(t).delayTimer.next && o(t).delayTimer.next(), delete o(t).delayTimer), "finishAll" !== y || !0 !== x && !w.isString(x) || (f.each(f.queue(t, w.isString(x) ? x : ""), function(e, t) {
                            w.isFunction(t) && t()
                        }), f.queue(t, w.isString(x) ? x : "", []))
                    });
                    var E = [];
                    return f.each(C.State.calls, function(e, t) {
                        t && f.each(t[1], function(i, s) {
                            var r = x === n ? "" : x;
                            if (!0 !== r && t[2].queue !== r && (x !== n || !1 !== t[2].queue)) return !0;
                            f.each(v, function(i, n) {
                                if (n === s)
                                    if ((!0 === x || w.isString(x)) && (f.each(f.queue(n, w.isString(x) ? x : ""), function(e, t) {
                                            w.isFunction(t) && t(null, !0)
                                        }), f.queue(n, w.isString(x) ? x : "", [])), "stop" === y) {
                                        var a = o(n);
                                        a && a.tweensContainer && (!0 === r || "" === r) && f.each(a.tweensContainer, function(e, t) {
                                            t.endValue = t.currentValue
                                        }), E.push(e)
                                    } else "finish" !== y && "finishAll" !== y || (t[2].duration = 1)
                            })
                        })
                    }), "stop" === y && (f.each(E, function(e, t) {
                        h(t, !0)
                    }), T.promise && T.resolver(v)), e();
                default:
                    if (!f.isPlainObject(y) || w.isEmptyObject(y)) {
                        if (w.isString(y) && C.Redirects[y]) {
                            c = f.extend({}, x);
                            var N = c.duration,
                                j = c.delay || 0;
                            return !0 === c.backwards && (v = f.extend(!0, [], v).reverse()), f.each(v, function(e, t) {
                                parseFloat(c.stagger) ? c.delay = j + parseFloat(c.stagger) * e : w.isFunction(c.stagger) && (c.delay = j + c.stagger.call(t, e, A)), c.drag && (c.duration = parseFloat(N) || (/^(callout|transition)/.test(y) ? 1e3 : _), c.duration = Math.max(c.duration * (c.backwards ? 1 - e / A : (e + 1) / A), .75 * c.duration, 200)), C.Redirects[y].call(t, t, c || {}, e, A, v, T.promise ? T : n)
                            }), e()
                        }
                        var L = "Velocity: First argument (" + y + ") was not a property map, a known action, or a registered redirect. Aborting.";
                        return T.promise ? T.rejecter(new Error(L)) : t.console && console.log(L), e()
                    }
                    D = "start"
            }
            var q = {
                    lastParent: null,
                    lastPosition: null,
                    lastFontSize: null,
                    lastPercentToPxWidth: null,
                    lastPercentToPxHeight: null,
                    lastEmToPx: null,
                    remToPx: null,
                    vwToPx: null,
                    vhToPx: null
                },
                z = [];
            f.each(v, function(e, t) {
                w.isNode(t) && s(t, e)
            }), c = f.extend({}, C.defaults, x), c.loop = parseInt(c.loop, 10);
            var H = 2 * c.loop - 1;
            if (c.loop)
                for (var W = 0; W < H; W++) {
                    var Y = {
                        delay: c.delay,
                        progress: c.progress
                    };
                    W === H - 1 && (Y.display = c.display, Y.visibility = c.visibility, Y.complete = c.complete), $(v, "reverse", Y)
                }
            return e()
        };
        C = f.extend($, C), C.animate = $;
        var A = t.requestAnimationFrame || g;
        if (!C.State.isMobile && i.hidden !== n) {
            var F = function() {
                i.hidden ? (A = function(e) {
                    return setTimeout(function() {
                        e(!0)
                    }, 16)
                }, p()) : A = t.requestAnimationFrame || g
            };
            F(), i.addEventListener("visibilitychange", F)
        }
        return e.Velocity = C, e !== t && (e.fn.velocity = $, e.fn.velocity.defaults = C.defaults), f.each(["Down", "Up"], function(e, t) {
            C.Redirects["slide" + t] = function(e, i, s, r, o, a) {
                var l = f.extend({}, i),
                    c = l.begin,
                    u = l.complete,
                    d = {},
                    p = {
                        height: "",
                        marginTop: "",
                        marginBottom: "",
                        paddingTop: "",
                        paddingBottom: ""
                    };
                l.display === n && (l.display = "Down" === t ? "inline" === C.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
                    0 === s && c && c.call(o, o);
                    for (var i in p)
                        if (p.hasOwnProperty(i)) {
                            d[i] = e.style[i];
                            var n = S.getPropertyValue(e, i);
                            p[i] = "Down" === t ? [n, 0] : [0, n]
                        }
                    d.overflow = e.style.overflow, e.style.overflow = "hidden"
                }, l.complete = function() {
                    for (var t in d) d.hasOwnProperty(t) && (e.style[t] = d[t]);
                    s === r - 1 && (u && u.call(o, o), a && a.resolver(o))
                }, C(e, p, l)
            }
        }), f.each(["In", "Out"], function(e, t) {
            C.Redirects["fade" + t] = function(e, i, s, r, o, a) {
                var l = f.extend({}, i),
                    c = l.complete,
                    u = {
                        opacity: "In" === t ? 1 : 0
                    };
                0 !== s && (l.begin = null), l.complete = s !== r - 1 ? null : function() {
                    c && c.call(o, o), a && a.resolver(o)
                }, l.display === n && (l.display = "In" === t ? "auto" : "none"), C(this, u, l)
            }
        }), C
    }(window.jQuery || window.Zepto || window, window, window ? window.document : void 0)
}),
function(e, t, i) {
    ! function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : jQuery && !jQuery.fn.qtip && e(jQuery)
    }(function(n) {
        "use strict";

        function s(e, t, i, s) {
            this.id = i, this.target = e, this.tooltip = M, this.elements = {
                target: e
            }, this._id = Y + "-" + i, this.timers = {
                img: {}
            }, this.options = t, this.plugins = {}, this.cache = {
                event: {},
                target: n(),
                disabled: P,
                attr: s,
                onTooltip: P,
                lastClass: ""
            }, this.rendered = this.destroyed = this.disabled = this.waiting = this.hiddenDuringWait = this.positioning = this.triggering = P
        }

        function r(e) {
            return e === M || "object" !== n.type(e)
        }

        function o(e) {
            return !(n.isFunction(e) || e && e.attr || e.length || "object" === n.type(e) && (e.jquery || e.then))
        }

        function a(e) {
            var t, i, s, a;
            return r(e) ? P : (r(e.metadata) && (e.metadata = {
                type: e.metadata
            }), "content" in e && (t = e.content, r(t) || t.jquery || t.done ? t = e.content = {
                text: i = o(t) ? P : t
            } : i = t.text, "ajax" in t && (s = t.ajax, a = s && s.once !== P, delete t.ajax, t.text = function(e, t) {
                var r = i || n(this).attr(t.options.content.attr) || "Loading...",
                    o = n.ajax(n.extend({}, s, {
                        context: t
                    })).then(s.success, M, s.error).then(function(e) {
                        return e && a && t.set("content.text", e), e
                    }, function(e, i, n) {
                        t.destroyed || 0 === e.status || t.set("content.text", i + ": " + n)
                    });
                return a ? r : (t.set("content.text", r), o)
            }), "title" in t && (n.isPlainObject(t.title) && (t.button = t.title.button, t.title = t.title.text), o(t.title || P) && (t.title = P))), "position" in e && r(e.position) && (e.position = {
                my: e.position,
                at: e.position
            }), "show" in e && r(e.show) && (e.show = e.show.jquery ? {
                target: e.show
            } : e.show === F ? {
                ready: F
            } : {
                event: e.show
            }), "hide" in e && r(e.hide) && (e.hide = e.hide.jquery ? {
                target: e.hide
            } : {
                event: e.hide
            }), "style" in e && r(e.style) && (e.style = {
                classes: e.style
            }), n.each(W, function() {
                this.sanitize && this.sanitize(e)
            }), e)
        }

        function l(e, t) {
            for (var i, n = 0, s = e, r = t.split("."); s = s[r[n++]];) n < r.length && (i = s);
            return [i || e, r.pop()]
        }

        function c(e, t) {
            var i, n, s;
            for (i in this.checks)
                for (n in this.checks[i])(s = new RegExp(n, "i").exec(e)) && (t.push(s), ("builtin" === i || this.plugins[i]) && this.checks[i][n].apply(this.plugins[i] || this, t))
        }

        function u(e) {
            return R.concat("").join(e ? "-" + e + " " : " ")
        }

        function d(e, t) {
            if (t > 0) return setTimeout(n.proxy(e, this), t);
            e.call(this)
        }

        function p(e) {
            this.tooltip.hasClass(J) || (clearTimeout(this.timers.show), clearTimeout(this.timers.hide), this.timers.show = d.call(this, function() {
                this.toggle(F, e)
            }, this.options.show.delay))
        }

        function h(e) {
            if (!this.tooltip.hasClass(J) && !this.destroyed) {
                var t = n(e.relatedTarget),
                    i = t.closest(B)[0] === this.tooltip[0],
                    s = t[0] === this.options.show.target[0];
                if (clearTimeout(this.timers.show), clearTimeout(this.timers.hide), this !== t[0] && "mouse" === this.options.position.target && i || this.options.hide.fixed && /mouse(out|leave|move)/.test(e.type) && (i || s)) try {
                    e.preventDefault(), e.stopImmediatePropagation()
                } catch (e) {} else this.timers.hide = d.call(this, function() {
                    this.toggle(P, e)
                }, this.options.hide.delay, this)
            }
        }

        function f(e) {
            !this.tooltip.hasClass(J) && this.options.hide.inactive && (clearTimeout(this.timers.inactive), this.timers.inactive = d.call(this, function() {
                this.hide(e)
            }, this.options.hide.inactive))
        }

        function m(e) {
            this.rendered && this.tooltip[0].offsetWidth > 0 && this.reposition(e)
        }

        function g(e, i, s) {
            n(t.body).delegate(e, (i.split ? i : i.join("." + Y + " ")) + "." + Y, function() {
                var e = C.api[n.attr(this, V)];
                e && !e.disabled && s.apply(e, arguments)
            })
        }

        function v(e, i, r) {
            var o, l, c, u, d, p = n(t.body),
                h = e[0] === t ? p : e,
                f = e.metadata ? e.metadata(r.metadata) : M,
                m = "html5" === r.metadata.type && f ? f[r.metadata.name] : M,
                g = e.data(r.metadata.name || "qtipopts");
            try {
                g = "string" == typeof g ? n.parseJSON(g) : g
            } catch (e) {}
            if (u = n.extend(F, {}, C.defaults, r, "object" == typeof g ? a(g) : M, a(m || f)), l = u.position, u.id = i, "boolean" == typeof u.content.text) {
                if (c = e.attr(u.content.attr), u.content.attr === P || !c) return P;
                u.content.text = c
            }
            if (l.container.length || (l.container = p), l.target === P && (l.target = h), u.show.target === P && (u.show.target = h), u.show.solo === F && (u.show.solo = l.container.closest("body")), u.hide.target === P && (u.hide.target = h), u.position.viewport === F && (u.position.viewport = l.container), l.container = l.container.eq(0), l.at = new S(l.at, F), l.my = new S(l.my), e.data(Y))
                if (u.overwrite) e.qtip("destroy", !0);
                else if (u.overwrite === P) return P;
            return e.attr(I, i), u.suppress && (d = e.attr("title")) && e.removeAttr("title").attr(K, d).attr("title", ""), o = new s(e, u, i, !!c), e.data(Y, o), o
        }

        function y(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }

        function b(e, t) {
            var n, s, r = t.charAt(0).toUpperCase() + t.slice(1),
                o = (t + " " + ue.join(r + " ") + r).split(" "),
                a = 0;
            if (ce[t]) return e.css(ce[t]);
            for (; n = o[a++];)
                if ((s = e.css(n)) !== i) return ce[t] = n, s
        }

        function w(e, t) {
            return Math.ceil(parseFloat(b(e, t)))
        }

        function x(e, t) {
            this._ns = "tip", this.options = t, this.offset = t.offset, this.size = [t.width, t.height], this.init(this.qtip = e)
        }

        function _(e, t) {
            this.options = t, this._ns = "-modal", this.init(this.qtip = e)
        }

        function k(e, t) {
            this._ns = "ie6", this.init(this.qtip = e)
        }
        var C, T, S, $, A, F = !0,
            P = !1,
            M = null,
            D = "x",
            O = "y",
            E = "width",
            N = "top",
            j = "left",
            L = "right",
            q = "center",
            z = "flipinvert",
            H = "shift",
            W = {},
            Y = "qtip",
            I = "data-hasqtip",
            V = "data-qtip-id",
            R = ["ui-widget", "ui-tooltip"],
            B = "." + Y,
            Z = "click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),
            G = Y + "-fixed",
            U = Y + "-default",
            X = Y + "-focus",
            Q = Y + "-hover",
            J = Y + "-disabled",
            K = "oldtitle",
            ee = {
                ie: function() {
                    for (var e = 4, i = t.createElement("div");
                        (i.innerHTML = "\x3c!--[if gt IE " + e + "]><i></i><![endif]--\x3e") && i.getElementsByTagName("i")[0]; e += 1);
                    return e > 4 ? e : NaN
                }(),
                iOS: parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) || P
            };
        T = s.prototype, T._when = function(e) {
            return n.when.apply(n, e)
        }, T.render = function(e) {
            if (this.rendered || this.destroyed) return this;
            var t = this,
                i = this.options,
                s = this.cache,
                r = this.elements,
                o = i.content.text,
                a = i.content.title,
                l = i.content.button,
                c = i.position,
                u = (this._id, []);
            return n.attr(this.target[0], "aria-describedby", this._id), s.posClass = this._createPosClass((this.position = {
                my: c.my,
                at: c.at
            }).my), this.tooltip = r.tooltip = n("<div/>", {
                id: this._id,
                class: [Y, U, i.style.classes, s.posClass].join(" "),
                width: i.style.width || "",
                height: i.style.height || "",
                tracking: "mouse" === c.target && c.adjust.mouse,
                role: "alert",
                "aria-live": "polite",
                "aria-atomic": P,
                "aria-describedby": this._id + "-content",
                "aria-hidden": F
            }).toggleClass(J, this.disabled).attr(V, this.id).data(Y, this).appendTo(c.container).append(r.content = n("<div />", {
                class: Y + "-content",
                id: this._id + "-content",
                "aria-atomic": F
            })), this.rendered = -1, this.positioning = F, a && (this._createTitle(), n.isFunction(a) || u.push(this._updateTitle(a, P))), l && this._createButton(), n.isFunction(o) || u.push(this._updateContent(o, P)), this.rendered = F, this._setWidget(), n.each(W, function(e) {
                var i;
                "render" === this.initialize && (i = this(t)) && (t.plugins[e] = i)
            }), this._unassignEvents(), this._assignEvents(), this._when(u).then(function() {
                t._trigger("render"), t.positioning = P, t.hiddenDuringWait || !i.show.ready && !e || t.toggle(F, s.event, P), t.hiddenDuringWait = P
            }), C.api[this.id] = this, this
        }, T.destroy = function(e) {
            function t() {
                if (!this.destroyed) {
                    this.destroyed = F;
                    var e, t = this.target,
                        i = t.attr(K);
                    this.rendered && this.tooltip.stop(1, 0).find("*").remove().end().remove(), n.each(this.plugins, function(e) {
                        this.destroy && this.destroy()
                    });
                    for (e in this.timers) clearTimeout(this.timers[e]);
                    t.removeData(Y).removeAttr(V).removeAttr(I).removeAttr("aria-describedby"), this.options.suppress && i && t.attr("title", i).removeAttr(K), this._unassignEvents(), this.options = this.elements = this.cache = this.timers = this.plugins = this.mouse = M, delete C.api[this.id]
                }
            }
            return this.destroyed ? this.target : (e === F && "hide" !== this.triggering || !this.rendered ? t.call(this) : (this.tooltip.one("tooltiphidden", n.proxy(t, this)), !this.triggering && this.hide()), this.target)
        }, $ = T.checks = {
            builtin: {
                "^id$": function(e, t, i, s) {
                    var r = i === F ? C.nextid : i,
                        o = Y + "-" + r;
                    r !== P && r.length > 0 && !n("#" + o).length ? (this._id = o, this.rendered && (this.tooltip[0].id = this._id, this.elements.content[0].id = this._id + "-content", this.elements.title[0].id = this._id + "-title")) : e[t] = s
                },
                "^prerender": function(e, t, i) {
                    i && !this.rendered && this.render(this.options.show.ready)
                },
                "^content.text$": function(e, t, i) {
                    this._updateContent(i)
                },
                "^content.attr$": function(e, t, i, n) {
                    this.options.content.text === this.target.attr(n) && this._updateContent(this.target.attr(i))
                },
                "^content.title$": function(e, t, i) {
                    if (!i) return this._removeTitle();
                    i && !this.elements.title && this._createTitle(), this._updateTitle(i)
                },
                "^content.button$": function(e, t, i) {
                    this._updateButton(i)
                },
                "^content.title.(text|button)$": function(e, t, i) {
                    this.set("content." + t, i)
                },
                "^position.(my|at)$": function(e, t, i) {
                    "string" == typeof i && (this.position[t] = e[t] = new S(i, "at" === t))
                },
                "^position.container$": function(e, t, i) {
                    this.rendered && this.tooltip.appendTo(i)
                },
                "^show.ready$": function(e, t, i) {
                    i && (!this.rendered && this.render(F) || this.toggle(F))
                },
                "^style.classes$": function(e, t, i, n) {
                    this.rendered && this.tooltip.removeClass(n).addClass(i)
                },
                "^style.(width|height)": function(e, t, i) {
                    this.rendered && this.tooltip.css(t, i)
                },
                "^style.widget|content.title": function() {
                    this.rendered && this._setWidget()
                },
                "^style.def": function(e, t, i) {
                    this.rendered && this.tooltip.toggleClass(U, !!i)
                },
                "^events.(render|show|move|hide|focus|blur)$": function(e, t, i) {
                    this.rendered && this.tooltip[(n.isFunction(i) ? "" : "un") + "bind"]("tooltip" + t, i)
                },
                "^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)": function() {
                    if (this.rendered) {
                        var e = this.options.position;
                        this.tooltip.attr("tracking", "mouse" === e.target && e.adjust.mouse), this._unassignEvents(), this._assignEvents()
                    }
                }
            }
        }, T.get = function(e) {
            if (this.destroyed) return this;
            var t = l(this.options, e.toLowerCase()),
                i = t[0][t[1]];
            return i.precedance ? i.string() : i
        };
        var te = /^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i,
            ie = /^prerender|show\.ready/i;
        T.set = function(e, t) {
            if (this.destroyed) return this;
            var i, s = this.rendered,
                r = P,
                o = this.options;
            this.checks;
            return "string" == typeof e ? (i = e, e = {}, e[i] = t) : e = n.extend({}, e), n.each(e, function(t, i) {
                if (s && ie.test(t)) return void delete e[t];
                var a, c = l(o, t.toLowerCase());
                a = c[0][c[1]], c[0][c[1]] = i && i.nodeType ? n(i) : i, r = te.test(t) || r, e[t] = [c[0], c[1], i, a]
            }), a(o), this.positioning = F, n.each(e, n.proxy(c, this)), this.positioning = P, this.rendered && this.tooltip[0].offsetWidth > 0 && r && this.reposition("mouse" === o.position.target ? M : this.cache.event), this
        }, T._update = function(e, t, i) {
            var s = this,
                r = this.cache;
            return this.rendered && e ? (n.isFunction(e) && (e = e.call(this.elements.target, r.event, this) || ""), n.isFunction(e.then) ? (r.waiting = F, e.then(function(e) {
                return r.waiting = P, s._update(e, t)
            }, M, function(e) {
                return s._update(e, t)
            })) : e === P || !e && "" !== e ? P : (e.jquery && e.length > 0 ? t.empty().append(e.css({
                display: "block",
                visibility: "visible"
            })) : t.html(e), this._waitForContent(t).then(function(e) {
                s.rendered && s.tooltip[0].offsetWidth > 0 && s.reposition(r.event, !e.length)
            }))) : P
        }, T._waitForContent = function(e) {
            var t = this.cache;
            return t.waiting = F, (n.fn.imagesLoaded ? e.imagesLoaded() : n.Deferred().resolve([])).done(function() {
                t.waiting = P
            }).promise()
        }, T._updateContent = function(e, t) {
            this._update(e, this.elements.content, t)
        }, T._updateTitle = function(e, t) {
            this._update(e, this.elements.title, t) === P && this._removeTitle(P)
        }, T._createTitle = function() {
            var e = this.elements,
                t = this._id + "-title";
            e.titlebar && this._removeTitle(), e.titlebar = n("<div />", {
                class: Y + "-titlebar " + (this.options.style.widget ? u("header") : "")
            }).append(e.title = n("<div />", {
                id: t,
                class: Y + "-title",
                "aria-atomic": F
            })).insertBefore(e.content).delegate(".qtip-close", "mousedown keydown mouseup keyup mouseout", function(e) {
                n(this).toggleClass("ui-state-active ui-state-focus", "down" === e.type.substr(-4))
            }).delegate(".qtip-close", "mouseover mouseout", function(e) {
                n(this).toggleClass("ui-state-hover", "mouseover" === e.type)
            }), this.options.content.button && this._createButton()
        }, T._removeTitle = function(e) {
            var t = this.elements;
            t.title && (t.titlebar.remove(), t.titlebar = t.title = t.button = M, e !== P && this.reposition())
        }, T._createPosClass = function(e) {
            return Y + "-pos-" + (e || this.options.position.my).abbrev()
        }, T.reposition = function(i, s) {
            if (!this.rendered || this.positioning || this.destroyed) return this;
            this.positioning = F;
            var r, o, a, l, c = this.cache,
                u = this.tooltip,
                d = this.options.position,
                p = d.target,
                h = d.my,
                f = d.at,
                m = d.viewport,
                g = d.container,
                v = d.adjust,
                y = v.method.split(" "),
                b = u.outerWidth(P),
                w = u.outerHeight(P),
                x = 0,
                _ = 0,
                k = u.css("position"),
                C = {
                    left: 0,
                    top: 0
                },
                T = u[0].offsetWidth > 0,
                S = i && "scroll" === i.type,
                $ = n(e),
                A = g[0].ownerDocument,
                M = this.mouse;
            if (n.isArray(p) && 2 === p.length) f = {
                x: j,
                y: N
            }, C = {
                left: p[0],
                top: p[1]
            };
            else if ("mouse" === p) f = {
                x: j,
                y: N
            }, (!v.mouse || this.options.hide.distance) && c.origin && c.origin.pageX ? i = c.origin : !i || i && ("resize" === i.type || "scroll" === i.type) ? i = c.event : M && M.pageX && (i = M), "static" !== k && (C = g.offset()), A.body.offsetWidth !== (e.innerWidth || A.documentElement.clientWidth) && (o = n(t.body).offset()), C = {
                left: i.pageX - C.left + (o && o.left || 0),
                top: i.pageY - C.top + (o && o.top || 0)
            }, v.mouse && S && M && (C.left -= (M.scrollX || 0) - $.scrollLeft(), C.top -= (M.scrollY || 0) - $.scrollTop());
            else {
                if ("event" === p ? i && i.target && "scroll" !== i.type && "resize" !== i.type ? c.target = n(i.target) : i.target || (c.target = this.elements.target) : "event" !== p && (c.target = n(p.jquery ? p : this.elements.target)), p = c.target, p = n(p).eq(0), 0 === p.length) return this;
                p[0] === t || p[0] === e ? (x = ee.iOS ? e.innerWidth : p.width(), _ = ee.iOS ? e.innerHeight : p.height(), p[0] === e && (C = {
                    top: (m || p).scrollTop(),
                    left: (m || p).scrollLeft()
                })) : W.imagemap && p.is("area") ? r = W.imagemap(this, p, f, W.viewport ? y : P) : W.svg && p && p[0].ownerSVGElement ? r = W.svg(this, p, f, W.viewport ? y : P) : (x = p.outerWidth(P), _ = p.outerHeight(P), C = p.offset()), r && (x = r.width, _ = r.height, o = r.offset, C = r.position), C = this.reposition.offset(p, C, g), (ee.iOS > 3.1 && ee.iOS < 4.1 || ee.iOS >= 4.3 && ee.iOS < 4.33 || !ee.iOS && "fixed" === k) && (C.left -= $.scrollLeft(), C.top -= $.scrollTop()), (!r || r && r.adjustable !== P) && (C.left += f.x === L ? x : f.x === q ? x / 2 : 0, C.top += "bottom" === f.y ? _ : f.y === q ? _ / 2 : 0)
            }
            return C.left += v.x + (h.x === L ? -b : h.x === q ? -b / 2 : 0), C.top += v.y + ("bottom" === h.y ? -w : h.y === q ? -w / 2 : 0), W.viewport ? (a = C.adjusted = W.viewport(this, C, d, x, _, b, w), o && a.left && (C.left += o.left), o && a.top && (C.top += o.top), a.my && (this.position.my = a.my)) : C.adjusted = {
                left: 0,
                top: 0
            }, c.posClass !== (l = this._createPosClass(this.position.my)) && u.removeClass(c.posClass).addClass(c.posClass = l), this._trigger("move", [C, m.elem || m], i) ? (delete C.adjusted, s === P || !T || isNaN(C.left) || isNaN(C.top) || "mouse" === p || !n.isFunction(d.effect) ? u.css(C) : n.isFunction(d.effect) && (d.effect.call(u, this, n.extend({}, C)), u.queue(function(e) {
                n(this).css({
                    opacity: "",
                    height: ""
                }), ee.ie && this.style.removeAttribute("filter"), e()
            })), this.positioning = P, this) : this
        }, T.reposition.offset = function(e, i, s) {
            function r(e, t) {
                i.left += t * e.scrollLeft(), i.top += t * e.scrollTop()
            }
            if (!s[0]) return i;
            var o, a, l, c, u = n(e[0].ownerDocument),
                d = !!ee.ie && "CSS1Compat" !== t.compatMode,
                p = s[0];
            do {
                "static" !== (a = n.css(p, "position")) && ("fixed" === a ? (l = p.getBoundingClientRect(), r(u, -1)) : (l = n(p).position(), l.left += parseFloat(n.css(p, "borderLeftWidth")) || 0, l.top += parseFloat(n.css(p, "borderTopWidth")) || 0), i.left -= l.left + (parseFloat(n.css(p, "marginLeft")) || 0), i.top -= l.top + (parseFloat(n.css(p, "marginTop")) || 0), o || "hidden" === (c = n.css(p, "overflow")) || "visible" === c || (o = n(p)))
            } while (p = p.offsetParent);
            return o && (o[0] !== u[0] || d) && r(o, 1), i
        };
        var ne = (S = T.reposition.Corner = function(e, t) {
            e = ("" + e).replace(/([A-Z])/, " $1").replace(/middle/gi, q).toLowerCase(), this.x = (e.match(/left|right/i) || e.match(/center/) || ["inherit"])[0].toLowerCase(), this.y = (e.match(/top|bottom|center/i) || ["inherit"])[0].toLowerCase(), this.forceY = !!t;
            var i = e.charAt(0);
            this.precedance = "t" === i || "b" === i ? O : D
        }).prototype;
        ne.invert = function(e, t) {
            this[e] = this[e] === j ? L : this[e] === L ? j : t || this[e]
        }, ne.string = function(e) {
            var t = this.x,
                i = this.y,
                n = t !== i ? "center" === t || "center" !== i && (this.precedance === O || this.forceY) ? [i, t] : [t, i] : [t];
            return !1 !== e ? n.join(" ") : n
        }, ne.abbrev = function() {
            var e = this.string(!1);
            return e[0].charAt(0) + (e[1] && e[1].charAt(0) || "")
        }, ne.clone = function() {
            return new S(this.string(), this.forceY)
        }, T.toggle = function(e, i) {
            var s = this.cache,
                r = this.options,
                o = this.tooltip;
            if (i) {
                if (/over|enter/.test(i.type) && s.event && /out|leave/.test(s.event.type) && r.show.target.add(i.target).length === r.show.target.length && o.has(i.relatedTarget).length) return this;
                s.event = n.event.fix(i)
            }
            if (this.waiting && !e && (this.hiddenDuringWait = F), !this.rendered) return e ? this.render(1) : this;
            if (this.destroyed || this.disabled) return this;
            var a, l, c, u = e ? "show" : "hide",
                d = this.options[u],
                p = (this.options[e ? "hide" : "show"], this.options.position),
                h = this.options.content,
                f = this.tooltip.css("width"),
                m = this.tooltip.is(":visible"),
                g = e || 1 === d.target.length,
                v = !i || d.target.length < 2 || s.target[0] === i.target;
            return (typeof e).search("boolean|number") && (e = !m), a = !o.is(":animated") && m === e && v, l = a ? M : !!this._trigger(u, [90]), this.destroyed ? this : (l !== P && e && this.focus(i), !l || a ? this : (n.attr(o[0], "aria-hidden", !e), e ? (this.mouse && (s.origin = n.event.fix(this.mouse)), n.isFunction(h.text) && this._updateContent(h.text, P), n.isFunction(h.title) && this._updateTitle(h.title, P), !A && "mouse" === p.target && p.adjust.mouse && (n(t).bind("mousemove." + Y, this._storeMouse), A = F), f || o.css("width", o.outerWidth(P)), this.reposition(i, arguments[2]), f || o.css("width", ""), d.solo && ("string" == typeof d.solo ? n(d.solo) : n(B, d.solo)).not(o).not(d.target).qtip("hide", n.Event("tooltipsolo"))) : (clearTimeout(this.timers.show), delete s.origin, A && !n(B + '[tracking="true"]:visible', d.solo).not(o).length && (n(t).unbind("mousemove." + Y), A = P), this.blur(i)), c = n.proxy(function() {
                e ? (ee.ie && o[0].style.removeAttribute("filter"), o.css("overflow", ""), "string" == typeof d.autofocus && n(this.options.show.autofocus, o).focus(), this.options.show.target.trigger("qtip-" + this.id + "-inactive")) : o.css({
                    display: "",
                    visibility: "",
                    opacity: "",
                    left: "",
                    top: ""
                }), this._trigger(e ? "visible" : "hidden")
            }, this), d.effect === P || g === P ? (o[u](), c()) : n.isFunction(d.effect) ? (o.stop(1, 1), d.effect.call(o, this), o.queue("fx", function(e) {
                c(), e()
            })) : o.fadeTo(90, e ? 1 : 0, c), e && d.target.trigger("qtip-" + this.id + "-inactive"), this))
        }, T.show = function(e) {
            return this.toggle(F, e)
        }, T.hide = function(e) {
            return this.toggle(P, e)
        }, T.focus = function(e) {
            if (!this.rendered || this.destroyed) return this;
            var t = n(B),
                i = this.tooltip,
                s = parseInt(i[0].style.zIndex, 10),
                r = C.zindex + t.length;
            return i.hasClass(X) || this._trigger("focus", [r], e) && (s !== r && (t.each(function() {
                this.style.zIndex > s && (this.style.zIndex = this.style.zIndex - 1)
            }), t.filter("." + X).qtip("blur", e)), i.addClass(X)[0].style.zIndex = r), this
        }, T.blur = function(e) {
            return !this.rendered || this.destroyed ? this : (this.tooltip.removeClass(X), this._trigger("blur", [this.tooltip.css("zIndex")], e), this)
        }, T.disable = function(e) {
            return this.destroyed ? this : ("toggle" === e ? e = !(this.rendered ? this.tooltip.hasClass(J) : this.disabled) : "boolean" != typeof e && (e = F), this.rendered && this.tooltip.toggleClass(J, e).attr("aria-disabled", e), this.disabled = !!e, this)
        }, T.enable = function() {
            return this.disable(P)
        }, T._createButton = function() {
            var e = this,
                t = this.elements,
                i = t.tooltip,
                s = this.options.content.button,
                r = "string" == typeof s,
                o = r ? s : "Close tooltip";
            t.button && t.button.remove(), s.jquery ? t.button = s : t.button = n("<a />", {
                class: "qtip-close " + (this.options.style.widget ? "" : Y + "-icon"),
                title: o,
                "aria-label": o
            }).prepend(n("<span />", {
                class: "ui-icon ui-icon-close",
                html: "&times;"
            })), t.button.appendTo(t.titlebar || i).attr("role", "button").click(function(t) {
                return i.hasClass(J) || e.hide(t), P
            })
        }, T._updateButton = function(e) {
            if (!this.rendered) return P;
            var t = this.elements.button;
            e ? this._createButton() : t.remove()
        }, T._setWidget = function() {
            var e = this.options.style.widget,
                t = this.elements,
                i = t.tooltip,
                n = i.hasClass(J);
            i.removeClass(J), J = e ? "ui-state-disabled" : "qtip-disabled", i.toggleClass(J, n), i.toggleClass("ui-helper-reset " + u(), e).toggleClass(U, this.options.style.def && !e), t.content && t.content.toggleClass(u("content"), e), t.titlebar && t.titlebar.toggleClass(u("header"), e), t.button && t.button.toggleClass(Y + "-icon", !e)
        }, T._storeMouse = function(e) {
            return (this.mouse = n.event.fix(e)).type = "mousemove", this
        }, T._bind = function(e, t, i, s, r) {
            if (e && i && t.length) {
                var o = "." + this._id + (s ? "-" + s : "");
                return n(e).bind((t.split ? t : t.join(o + " ")) + o, n.proxy(i, r || this)), this
            }
        }, T._unbind = function(e, t) {
            return e && n(e).unbind("." + this._id + (t ? "-" + t : "")), this
        }, T._trigger = function(e, t, i) {
            var s = n.Event("tooltip" + e);
            return s.originalEvent = i && n.extend({}, i) || this.cache.event || M, this.triggering = e, this.tooltip.trigger(s, [this].concat(t || [])), this.triggering = P, !s.isDefaultPrevented()
        }, T._bindEvents = function(e, t, i, s, r, o) {
            var a = i.filter(s).add(s.filter(i)),
                l = [];
            a.length && (n.each(t, function(t, i) {
                var s = n.inArray(i, e);
                s > -1 && l.push(e.splice(s, 1)[0])
            }), l.length && (this._bind(a, l, function(e) {
                (!!this.rendered && this.tooltip[0].offsetWidth > 0 ? o : r).call(this, e)
            }), i = i.not(a), s = s.not(a))), this._bind(i, e, r), this._bind(s, t, o)
        }, T._assignInitialEvents = function(e) {
            function t(e) {
                if (this.disabled || this.destroyed) return P;
                this.cache.event = e && n.event.fix(e), this.cache.target = e && n(e.target), clearTimeout(this.timers.show), this.timers.show = d.call(this, function() {
                    this.render("object" == typeof e || i.show.ready)
                }, i.prerender ? 0 : i.show.delay)
            }
            var i = this.options,
                s = i.show.target,
                r = i.hide.target,
                o = i.show.event ? n.trim("" + i.show.event).split(" ") : [],
                a = i.hide.event ? n.trim("" + i.hide.event).split(" ") : [];
            this._bind(this.elements.target, ["remove", "removeqtip"], function(e) {
                this.destroy(!0)
            }, "destroy"), /mouse(over|enter)/i.test(i.show.event) && !/mouse(out|leave)/i.test(i.hide.event) && a.push("mouseleave"), this._bind(s, "mousemove", function(e) {
                this._storeMouse(e), this.cache.onTarget = F
            }), this._bindEvents(o, a, s, r, t, function() {
                if (!this.timers) return P;
                clearTimeout(this.timers.show)
            }), (i.show.ready || i.prerender) && t.call(this, e)
        }, T._assignEvents = function() {
            var i = this,
                s = this.options,
                r = s.position,
                o = this.tooltip,
                a = s.show.target,
                l = s.hide.target,
                c = r.container,
                u = r.viewport,
                d = n(t),
                g = (n(t.body), n(e)),
                v = s.show.event ? n.trim("" + s.show.event).split(" ") : [],
                y = s.hide.event ? n.trim("" + s.hide.event).split(" ") : [];
            n.each(s.events, function(e, t) {
                i._bind(o, "toggle" === e ? ["tooltipshow", "tooltiphide"] : ["tooltip" + e], t, null, o)
            }), /mouse(out|leave)/i.test(s.hide.event) && "window" === s.hide.leave && this._bind(d, ["mouseout", "blur"], function(e) {
                /select|option/.test(e.target.nodeName) || e.relatedTarget || this.hide(e)
            }), s.hide.fixed ? l = l.add(o.addClass(G)) : /mouse(over|enter)/i.test(s.show.event) && this._bind(l, "mouseleave", function() {
                clearTimeout(this.timers.show)
            }), ("" + s.hide.event).indexOf("unfocus") > -1 && this._bind(c.closest("html"), ["mousedown", "touchstart"], function(e) {
                var t = n(e.target),
                    i = this.rendered && !this.tooltip.hasClass(J) && this.tooltip[0].offsetWidth > 0,
                    s = t.parents(B).filter(this.tooltip[0]).length > 0;
                t[0] === this.target[0] || t[0] === this.tooltip[0] || s || this.target.has(t[0]).length || !i || this.hide(e)
            }), "number" == typeof s.hide.inactive && (this._bind(a, "qtip-" + this.id + "-inactive", f, "inactive"), this._bind(l.add(o), C.inactiveEvents, f)), this._bindEvents(v, y, a, l, p, h), this._bind(a.add(o), "mousemove", function(e) {
                if ("number" == typeof s.hide.distance) {
                    var t = this.cache.origin || {},
                        i = this.options.hide.distance,
                        n = Math.abs;
                    (n(e.pageX - t.pageX) >= i || n(e.pageY - t.pageY) >= i) && this.hide(e)
                }
                this._storeMouse(e)
            }), "mouse" === r.target && r.adjust.mouse && (s.hide.event && this._bind(a, ["mouseenter", "mouseleave"], function(e) {
                if (!this.cache) return P;
                this.cache.onTarget = "mouseenter" === e.type
            }), this._bind(d, "mousemove", function(e) {
                this.rendered && this.cache.onTarget && !this.tooltip.hasClass(J) && this.tooltip[0].offsetWidth > 0 && this.reposition(e)
            })), (r.adjust.resize || u.length) && this._bind(n.event.special.resize ? u : g, "resize", m), r.adjust.scroll && this._bind(g.add(r.container), "scroll", m)
        }, T._unassignEvents = function() {
            var i = this.options,
                s = i.show.target,
                r = i.hide.target,
                o = n.grep([this.elements.target[0], this.rendered && this.tooltip[0], i.position.container[0], i.position.viewport[0], i.position.container.closest("html")[0], e, t], function(e) {
                    return "object" == typeof e
                });
            s && s.toArray && (o = o.concat(s.toArray())), r && r.toArray && (o = o.concat(r.toArray())), this._unbind(o)._unbind(o, "destroy")._unbind(o, "inactive")
        }, n(function() {
            g(B, ["mouseenter", "mouseleave"], function(e) {
                var t = "mouseenter" === e.type,
                    i = n(e.currentTarget),
                    s = n(e.relatedTarget || e.target),
                    r = this.options;
                t ? (this.focus(e), i.hasClass(G) && !i.hasClass(J) && clearTimeout(this.timers.hide)) : "mouse" === r.position.target && r.position.adjust.mouse && r.hide.event && r.show.target && !s.closest(r.show.target[0]).length && this.hide(e), i.toggleClass(Q, t)
            }), g("[" + V + "]", Z, f)
        }), C = n.fn.qtip = function(e, t, s) {
            var r = ("" + e).toLowerCase(),
                o = M,
                l = n.makeArray(arguments).slice(1),
                c = l[l.length - 1],
                u = this[0] ? n.data(this[0], Y) : M;
            return !arguments.length && u || "api" === r ? u : "string" == typeof e ? (this.each(function() {
                var e = n.data(this, Y);
                if (!e) return F;
                if (c && c.timeStamp && (e.cache.event = c), !t || "option" !== r && "options" !== r) e[r] && e[r].apply(e, l);
                else {
                    if (s === i && !n.isPlainObject(t)) return o = e.get(t), P;
                    e.set(t, s)
                }
            }), o !== M ? o : this) : "object" != typeof e && arguments.length ? void 0 : (u = a(n.extend(F, {}, e)), this.each(function(e) {
                var t, i;
                if (i = n.isArray(u.id) ? u.id[e] : u.id, i = !i || i === P || i.length < 1 || C.api[i] ? C.nextid++ : i, (t = v(n(this), i, u)) === P) return F;
                C.api[i] = t, n.each(W, function() {
                    "initialize" === this.initialize && this(t)
                }), t._assignInitialEvents(c)
            }))
        }, n.qtip = s, C.api = {}, n.each({
            attr: function(e, t) {
                if (this.length) {
                    var i = this[0],
                        s = n.data(i, "qtip");
                    if ("title" === e && s && "object" == typeof s && s.options.suppress) return arguments.length < 2 ? n.attr(i, K) : (s && "title" === s.options.content.attr && s.cache.attr && s.set("content.text", t), this.attr(K, t))
                }
                return n.fn.attr_replacedByqTip.apply(this, arguments)
            },
            clone: function(e) {
                var t = (n([]), n.fn.clone_replacedByqTip.apply(this, arguments));
                return e || t.filter("[" + K + "]").attr("title", function() {
                    return n.attr(this, K)
                }).removeAttr(K), t
            }
        }, function(e, t) {
            if (!t || n.fn[e + "_replacedByqTip"]) return F;
            var i = n.fn[e + "_replacedByqTip"] = n.fn[e];
            n.fn[e] = function() {
                return t.apply(this, arguments) || i.apply(this, arguments)
            }
        }), n.ui || (n.cleanData_replacedByqTip = n.cleanData, n.cleanData = function(e) {
            for (var t, i = 0;
                (t = n(e[i])).length; i++)
                if (t.attr(I)) try {
                    t.triggerHandler("removeqtip")
                } catch (e) {}
                n.cleanData_replacedByqTip.apply(this, arguments)
        }), C.version = "2.2.1", C.nextid = 0, C.inactiveEvents = Z, C.zindex = 15e3, C.defaults = {
            prerender: P,
            id: P,
            overwrite: F,
            suppress: F,
            content: {
                text: F,
                attr: "title",
                title: P,
                button: P
            },
            position: {
                my: "top left",
                at: "bottom right",
                target: P,
                container: P,
                viewport: P,
                adjust: {
                    x: 0,
                    y: 0,
                    mouse: F,
                    scroll: F,
                    resize: F,
                    method: "flipinvert flipinvert"
                },
                effect: function(e, t, i) {
                    n(this).animate(t, {
                        duration: 200,
                        queue: P
                    })
                }
            },
            show: {
                target: P,
                event: "mouseenter",
                effect: F,
                delay: 90,
                solo: P,
                ready: P,
                autofocus: P
            },
            hide: {
                target: P,
                event: "mouseleave",
                effect: F,
                delay: 0,
                fixed: P,
                inactive: P,
                leave: "window",
                distance: P
            },
            style: {
                classes: "",
                widget: P,
                width: P,
                height: P,
                def: F
            },
            events: {
                render: M,
                move: M,
                show: M,
                hide: M,
                toggle: M,
                visible: M,
                hidden: M,
                focus: M,
                blur: M
            }
        };
        var se, re = "margin",
            oe = "background-color",
            ae = !!t.createElement("canvas").getContext,
            le = /rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,
            ce = {},
            ue = ["Webkit", "O", "Moz", "ms"];
        if (ae) var de = e.devicePixelRatio || 1,
            pe = function() {
                var e = t.createElement("canvas").getContext("2d");
                return e.backingStorePixelRatio || e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || 1
            }(),
            he = de / pe;
        else var fe = function(e, t, i) {
            return "<qtipvml:" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" ' + (t || "") + ' style="behavior: url(#default#VML); ' + (i || "") + '" />'
        };
        n.extend(x.prototype, {
            init: function(e) {
                var t, i;
                i = this.element = e.elements.tip = n("<div />", {
                    class: Y + "-tip"
                }).prependTo(e.tooltip), ae ? (t = n("<canvas />").appendTo(this.element)[0].getContext("2d"), t.lineJoin = "miter", t.miterLimit = 1e5, t.save()) : (t = fe("shape", 'coordorigin="0,0"', "position:absolute;"), this.element.html(t + t), e._bind(n("*", i).add(i), ["click", "mousedown"], function(e) {
                    e.stopPropagation()
                }, this._ns)), e._bind(e.tooltip, "tooltipmove", this.reposition, this._ns, this), this.create()
            },
            _swapDimensions: function() {
                this.size[0] = this.options.height, this.size[1] = this.options.width
            },
            _resetDimensions: function() {
                this.size[0] = this.options.width, this.size[1] = this.options.height
            },
            _useTitle: function(e) {
                var t = this.qtip.elements.titlebar;
                return t && (e.y === N || e.y === q && this.element.position().top + this.size[1] / 2 + this.options.offset < t.outerHeight(F))
            },
            _parseCorner: function(e) {
                var t = this.qtip.options.position.my;
                return e === P || t === P ? e = P : e === F ? e = new S(t.string()) : e.string || (e = new S(e), e.fixed = F), e
            },
            _parseWidth: function(e, t, i) {
                var n = this.qtip.elements,
                    s = "border" + y(t) + "Width";
                return (i ? w(i, s) : w(n.content, s) || w(this._useTitle(e) && n.titlebar || n.content, s) || w(n.tooltip, s)) || 0
            },
            _parseRadius: function(e) {
                var t = this.qtip.elements,
                    i = "border" + y(e.y) + y(e.x) + "Radius";
                return ee.ie < 9 ? 0 : w(this._useTitle(e) && t.titlebar || t.content, i) || w(t.tooltip, i) || 0
            },
            _invalidColour: function(e, t, i) {
                var n = e.css(t);
                return !n || i && n === e.css(i) || le.test(n) ? P : n
            },
            _parseColours: function(e) {
                var t = this.qtip.elements,
                    i = this.element.css("cssText", ""),
                    s = "border" + y(e[e.precedance]) + y("color"),
                    r = this._useTitle(e) && t.titlebar || t.content,
                    o = this._invalidColour,
                    a = [];
                return a[0] = o(i, oe) || o(r, oe) || o(t.content, oe) || o(t.tooltip, oe) || i.css(oe), a[1] = o(i, s, "color") || o(r, s, "color") || o(t.content, s, "color") || o(t.tooltip, s, "color") || t.tooltip.css(s), n("*", i).add(i).css("cssText", oe + ":transparent !important;border:0 !important;"), a
            },
            _calculateSize: function(e) {
                var t, i, n, s = e.precedance === O,
                    r = this.options.width,
                    o = this.options.height,
                    a = "c" === e.abbrev(),
                    l = (s ? r : o) * (a ? .5 : 1),
                    c = Math.pow,
                    u = Math.round,
                    d = Math.sqrt(c(l, 2) + c(o, 2)),
                    p = [this.border / l * d, this.border / o * d];
                return p[2] = Math.sqrt(c(p[0], 2) - c(this.border, 2)), p[3] = Math.sqrt(c(p[1], 2) - c(this.border, 2)), t = d + p[2] + p[3] + (a ? 0 : p[0]), i = t / d, n = [u(i * r), u(i * o)], s ? n : n.reverse()
            },
            _calculateTip: function(e, t, i) {
                i = i || 1, t = t || this.size;
                var n = t[0] * i,
                    s = t[1] * i,
                    r = Math.ceil(n / 2),
                    o = Math.ceil(s / 2),
                    a = {
                        br: [0, 0, n, s, n, 0],
                        bl: [0, 0, n, 0, 0, s],
                        tr: [0, s, n, 0, n, s],
                        tl: [0, 0, 0, s, n, s],
                        tc: [0, s, r, 0, n, s],
                        bc: [0, 0, n, 0, r, s],
                        rc: [0, 0, n, o, 0, s],
                        lc: [n, 0, n, s, 0, o]
                    };
                return a.lt = a.br, a.rt = a.bl, a.lb = a.tr, a.rb = a.tl, a[e.abbrev()]
            },
            _drawCoords: function(e, t) {
                e.beginPath(), e.moveTo(t[0], t[1]), e.lineTo(t[2], t[3]), e.lineTo(t[4], t[5]), e.closePath()
            },
            create: function() {
                var e = this.corner = (ae || ee.ie) && this._parseCorner(this.options.corner);
                return (this.enabled = !!this.corner && "c" !== this.corner.abbrev()) && (this.qtip.cache.corner = e.clone(), this.update()), this.element.toggle(this.enabled), this.corner
            },
            update: function(t, i) {
                if (!this.enabled) return this;
                var s, r, o, a, l, c, u, d, p = this.qtip.elements,
                    h = this.element,
                    f = h.children(),
                    m = this.options,
                    g = this.size,
                    v = m.mimic,
                    y = Math.round;
                t || (t = this.qtip.cache.corner || this.corner), v === P ? v = t : (v = new S(v), v.precedance = t.precedance, "inherit" === v.x ? v.x = t.x : "inherit" === v.y ? v.y = t.y : v.x === v.y && (v[t.precedance] = t[t.precedance])), r = v.precedance, t.precedance === D ? this._swapDimensions() : this._resetDimensions(), s = this.color = this._parseColours(t), "transparent" !== s[1] ? (d = this.border = this._parseWidth(t, t[t.precedance]), m.border && d < 1 && !le.test(s[1]) && (s[0] = s[1]), this.border = d = m.border !== F ? m.border : d) : this.border = d = 0, u = this.size = this._calculateSize(t), h.css({
                    width: u[0],
                    height: u[1],
                    lineHeight: u[1] + "px"
                }), c = t.precedance === O ? [y(v.x === j ? d : v.x === L ? u[0] - g[0] - d : (u[0] - g[0]) / 2), y(v.y === N ? u[1] - g[1] : 0)] : [y(v.x === j ? u[0] - g[0] : 0), y(v.y === N ? d : "bottom" === v.y ? u[1] - g[1] - d : (u[1] - g[1]) / 2)], ae ? (o = f[0].getContext("2d"), o.restore(), o.save(), o.clearRect(0, 0, 6e3, 6e3), a = this._calculateTip(v, g, he), l = this._calculateTip(v, this.size, he), f.attr(E, u[0] * he).attr("height", u[1] * he), f.css(E, u[0]).css("height", u[1]), this._drawCoords(o, l), o.fillStyle = s[1], o.fill(), o.translate(c[0] * he, c[1] * he), this._drawCoords(o, a), o.fillStyle = s[0], o.fill()) : (a = this._calculateTip(v), a = "m" + a[0] + "," + a[1] + " l" + a[2] + "," + a[3] + " " + a[4] + "," + a[5] + " xe", c[2] = d && /^(r|b)/i.test(t.string()) ? 8 === ee.ie ? 2 : 1 : 0, f.css({
                    coordsize: u[0] + d + " " + (u[1] + d),
                    antialias: "" + (v.string().indexOf(q) > -1),
                    left: c[0] - c[2] * Number(r === D),
                    top: c[1] - c[2] * Number(r === O),
                    width: u[0] + d,
                    height: u[1] + d
                }).each(function(e) {
                    var t = n(this);
                    t[t.prop ? "prop" : "attr"]({
                        coordsize: u[0] + d + " " + (u[1] + d),
                        path: a,
                        fillcolor: s[0],
                        filled: !!e,
                        stroked: !e
                    }).toggle(!(!d && !e)), !e && t.html(fe("stroke", 'weight="' + 2 * d + 'px" color="' + s[1] + '" miterlimit="1000" joinstyle="miter"'))
                })), e.opera && setTimeout(function() {
                    p.tip.css({
                        display: "inline-block",
                        visibility: "visible"
                    })
                }, 1), i !== P && this.calculate(t, u)
            },
            calculate: function(e, t) {
                if (!this.enabled) return P;
                var i, s, r = this,
                    o = this.qtip.elements,
                    a = this.element,
                    l = this.options.offset,
                    c = (o.tooltip.hasClass("ui-widget"), {});
                return e = e || this.corner, i = e.precedance, t = t || this._calculateSize(e), s = [e.x, e.y], i === D && s.reverse(), n.each(s, function(n, s) {
                    var a, u, d;
                    s === q ? (a = i === O ? j : N, c[a] = "50%", c[re + "-" + a] = -Math.round(t[i === O ? 0 : 1] / 2) + l) : (a = r._parseWidth(e, s, o.tooltip), u = r._parseWidth(e, s, o.content), d = r._parseRadius(e), c[s] = Math.max(-r.border, n ? u : l + (d > a ? d : -a)))
                }), c[e[i]] -= t[i === D ? 0 : 1], a.css({
                    margin: "",
                    top: "",
                    bottom: "",
                    left: "",
                    right: ""
                }).css(c), c
            },
            reposition: function(e, t, n, s) {
                function r(e, t, i, n, s) {
                    e === H && u.precedance === t && d[n] && u[i] !== q ? u.precedance = u.precedance === D ? O : D : e !== H && d[n] && (u[t] = u[t] === q ? d[n] > 0 ? n : s : u[t] === n ? s : n)
                }

                function o(e, t, s) {
                    u[e] === q ? g[re + "-" + t] = m[e] = a[re + "-" + t] - d[t] : (l = a[s] !== i ? [d[t], -a[t]] : [-d[t], a[t]], (m[e] = Math.max(l[0], l[1])) > l[0] && (n[t] -= d[t], m[t] = P), g[a[s] !== i ? s : t] = m[e])
                }
                if (this.enabled) {
                    var a, l, c = t.cache,
                        u = this.corner.clone(),
                        d = n.adjusted,
                        p = t.options.position.adjust.method.split(" "),
                        h = p[0],
                        f = p[1] || p[0],
                        m = {
                            left: P,
                            top: P,
                            x: 0,
                            y: 0
                        },
                        g = {};
                    this.corner.fixed !== F && (r(h, D, O, j, L), r(f, O, D, N, "bottom"), u.string() === c.corner.string() && c.cornerTop === d.top && c.cornerLeft === d.left || this.update(u, P)), a = this.calculate(u), a.right !== i && (a.left = -a.right), a.bottom !== i && (a.top = -a.bottom), a.user = this.offset, (m.left = h === H && !!d.left) && o(D, j, L), (m.top = f === H && !!d.top) && o(O, N, "bottom"), this.element.css(g).toggle(!(m.x && m.y || u.x === q && m.y || u.y === q && m.x)), n.left -= a.left.charAt ? a.user : h !== H || m.top || !m.left && !m.top ? a.left + this.border : 0, n.top -= a.top.charAt ? a.user : f !== H || m.left || !m.left && !m.top ? a.top + this.border : 0, c.cornerLeft = d.left, c.cornerTop = d.top, c.corner = u.clone()
                }
            },
            destroy: function() {
                this.qtip._unbind(this.qtip.tooltip, this._ns), this.qtip.elements.tip && this.qtip.elements.tip.find("*").remove().end().remove()
            }
        }), se = W.tip = function(e) {
            return new x(e, e.options.style.tip)
        }, se.initialize = "render", se.sanitize = function(e) {
            if (e.style && "tip" in e.style) {
                var t = e.style.tip;
                "object" != typeof t && (t = e.style.tip = {
                    corner: t
                }), /string|boolean/i.test(typeof t.corner) || (t.corner = F)
            }
        }, $.tip = {
            "^position.my|style.tip.(corner|mimic|border)$": function() {
                this.create(), this.qtip.reposition()
            },
            "^style.tip.(height|width)$": function(e) {
                this.size = [e.width, e.height], this.update(), this.qtip.reposition()
            },
            "^content.title|style.(classes|widget)$": function() {
                this.update()
            }
        }, n.extend(F, C.defaults, {
            style: {
                tip: {
                    corner: F,
                    mimic: P,
                    width: 6,
                    height: 6,
                    border: F,
                    offset: 0
                }
            }
        });
        var me, ge;
        ge = function() {
            function e(e) {
                if (n.expr[":"].focusable) return n.expr[":"].focusable;
                var t, i, s, r = !isNaN(n.attr(e, "tabindex")),
                    o = e.nodeName && e.nodeName.toLowerCase();
                return "area" === o ? (t = e.parentNode, i = t.name, !(!e.href || !i || "map" !== t.nodeName.toLowerCase()) && (!!(s = n("img[usemap=#" + i + "]")[0]) && s.is(":visible"))) : /input|select|textarea|button|object/.test(o) ? !e.disabled : "a" === o ? e.href || r : r
            }

            function i(e) {
                u.length < 1 && e.length ? e.not("body").blur() : u.first().focus()
            }

            function s(e) {
                if (l.is(":visible")) {
                    var t, s = n(e.target),
                        a = r.tooltip,
                        c = s.closest(B);
                    t = c.length < 1 ? P : parseInt(c[0].style.zIndex, 10) > parseInt(a[0].style.zIndex, 10), t || s.closest(B)[0] === a[0] || i(s), o = e.target === u[u.length - 1]
                }
            }
            var r, o, a, l, c = this,
                u = {};
            n.extend(c, {
                init: function() {
                    return l = c.elem = n("<div />", {
                        id: "qtip-overlay",
                        html: "<div></div>",
                        mousedown: function() {
                            return P
                        }
                    }).hide(), n(t.body).bind("focusin.qtip-modal", s), n(t).bind("keydown.qtip-modal", function(e) {
                        r && r.options.show.modal.escape && 27 === e.keyCode && r.hide(e)
                    }), l.bind("click.qtip-modal", function(e) {
                        r && r.options.show.modal.blur && r.hide(e)
                    }), c
                },
                update: function(t) {
                    r = t, u = t.options.show.modal.stealfocus !== P ? t.tooltip.find("*").filter(function() {
                        return e(this)
                    }) : []
                },
                toggle: function(e, s, o) {
                    var u = (n(t.body), e.tooltip),
                        d = e.options.show.modal,
                        p = d.effect,
                        h = s ? "show" : "hide",
                        f = l.is(":visible"),
                        m = n(".qtip-modal").filter(":visible:not(:animated)").not(u);
                    return c.update(e), s && d.stealfocus !== P && i(n(":focus")), l.toggleClass("blurs", d.blur), s && l.appendTo(t.body), l.is(":animated") && f === s && a !== P || !s && m.length ? c : (l.stop(F, P), n.isFunction(p) ? p.call(l, s) : p === P ? l[h]() : l.fadeTo(parseInt(o, 10) || 90, s ? 1 : 0, function() {
                        s || l.hide()
                    }), s || l.queue(function(e) {
                        l.css({
                            left: "",
                            top: ""
                        }), n(".qtip-modal").length || l.detach(), e()
                    }), a = s, r.destroyed && (r = M), c)
                }
            }), c.init()
        }, ge = new ge, n.extend(_.prototype, {
            init: function(e) {
                var t = e.tooltip;
                if (!this.options.on) return this;
                e.elements.overlay = ge.elem, t.addClass("qtip-modal").css("z-index", C.modal_zindex + n(".qtip-modal").length), e._bind(t, ["tooltipshow", "tooltiphide"], function(e, i, s) {
                    var r = e.originalEvent;
                    if (e.target === t[0])
                        if (r && "tooltiphide" === e.type && /mouse(leave|enter)/.test(r.type) && n(r.relatedTarget).closest(ge.elem[0]).length) try {
                            e.preventDefault()
                        } catch (e) {} else(!r || r && "tooltipsolo" !== r.type) && this.toggle(e, "tooltipshow" === e.type, s)
                }, this._ns, this), e._bind(t, "tooltipfocus", function(e, i) {
                    if (!e.isDefaultPrevented() && e.target === t[0]) {
                        var s = n(".qtip-modal"),
                            r = C.modal_zindex + s.length,
                            o = parseInt(t[0].style.zIndex, 10);
                        ge.elem[0].style.zIndex = r - 1, s.each(function() {
                            this.style.zIndex > o && (this.style.zIndex -= 1)
                        }), s.filter("." + X).qtip("blur", e.originalEvent), t.addClass(X)[0].style.zIndex = r, ge.update(i);
                        try {
                            e.preventDefault()
                        } catch (e) {}
                    }
                }, this._ns, this), e._bind(t, "tooltiphide", function(e) {
                    e.target === t[0] && n(".qtip-modal").filter(":visible").not(t).last().qtip("focus", e)
                }, this._ns, this)
            },
            toggle: function(e, t, i) {
                if (e && e.isDefaultPrevented()) return this;
                ge.toggle(this.qtip, !!t, i)
            },
            destroy: function() {
                this.qtip.tooltip.removeClass("qtip-modal"), this.qtip._unbind(this.qtip.tooltip, this._ns), ge.toggle(this.qtip, P), delete this.qtip.elements.overlay
            }
        }), me = W.modal = function(e) {
            return new _(e, e.options.show.modal)
        }, me.sanitize = function(e) {
            e.show && ("object" != typeof e.show.modal ? e.show.modal = {
                on: !!e.show.modal
            } : void 0 === e.show.modal.on && (e.show.modal.on = F))
        }, C.modal_zindex = C.zindex - 200, me.initialize = "render", $.modal = {
            "^show.modal.(on|blur)$": function() {
                this.destroy(), this.init(), this.qtip.elems.overlay.toggle(this.qtip.tooltip[0].offsetWidth > 0)
            }
        }, n.extend(F, C.defaults, {
            show: {
                modal: {
                    on: P,
                    effect: F,
                    blur: F,
                    stealfocus: F,
                    escape: F
                }
            }
        }), W.viewport = function(i, n, s, r, o, a, l) {
            function c(e, t, i, s, r, o, a, l, c) {
                var u = n[r],
                    y = w[e],
                    b = x[e],
                    _ = i === H,
                    k = y === r ? c : y === o ? -c : -c / 2,
                    C = b === r ? l : b === o ? -l : -l / 2,
                    T = g[r] + v[r] - (h ? 0 : p[r]),
                    S = T - u,
                    $ = u + c - (a === E ? f : m) - T,
                    A = k - (w.precedance === e || y === w[t] ? C : 0) - (b === q ? l / 2 : 0);
                return _ ? (A = (y === r ? 1 : -1) * k, n[r] += S > 0 ? S : $ > 0 ? -$ : 0, n[r] = Math.max(-p[r] + v[r], u - A, Math.min(Math.max(-p[r] + v[r] + (a === E ? f : m), u + A), n[r], "center" === y ? u - k : 1e9))) : (s *= i === z ? 2 : 0, S > 0 && (y !== r || $ > 0) ? (n[r] -= A + s, d.invert(e, r)) : $ > 0 && (y !== o || S > 0) && (n[r] -= (y === q ? -A : A) + s, d.invert(e, o)), n[r] < g && -n[r] > $ && (n[r] = u, d = w.clone())), n[r] - u
            }
            var u, d, p, h, f, m, g, v, y = s.target,
                b = i.elements.tooltip,
                w = s.my,
                x = s.at,
                _ = s.adjust,
                k = _.method.split(" "),
                C = k[0],
                T = k[1] || k[0],
                S = s.viewport,
                $ = s.container,
                A = (i.cache, {
                    left: 0,
                    top: 0
                });
            return S.jquery && y[0] !== e && y[0] !== t.body && "none" !== _.method ? (p = $.offset() || A, h = "static" === $.css("position"), u = "fixed" === b.css("position"), f = S[0] === e ? S.width() : S.outerWidth(P), m = S[0] === e ? S.height() : S.outerHeight(P), g = {
                left: u ? 0 : S.scrollLeft(),
                top: u ? 0 : S.scrollTop()
            }, v = S.offset() || A, "shift" === C && "shift" === T || (d = w.clone()), A = {
                left: "none" !== C ? c(D, O, C, _.x, j, L, E, r, a) : 0,
                top: "none" !== T ? c(O, D, T, _.y, N, "bottom", "height", o, l) : 0,
                my: d
            }) : A
        }, W.polys = {
            polygon: function(e, t) {
                var i, n, s, r = {
                        width: 0,
                        height: 0,
                        position: {
                            top: 1e10,
                            right: 0,
                            bottom: 0,
                            left: 1e10
                        },
                        adjustable: P
                    },
                    o = 0,
                    a = [],
                    l = 1,
                    c = 1,
                    u = 0,
                    d = 0;
                for (o = e.length; o--;) i = [parseInt(e[--o], 10), parseInt(e[o + 1], 10)], i[0] > r.position.right && (r.position.right = i[0]), i[0] < r.position.left && (r.position.left = i[0]), i[1] > r.position.bottom && (r.position.bottom = i[1]), i[1] < r.position.top && (r.position.top = i[1]), a.push(i);
                if (n = r.width = Math.abs(r.position.right - r.position.left), s = r.height = Math.abs(r.position.bottom - r.position.top), "c" === t.abbrev()) r.position = {
                    left: r.position.left + r.width / 2,
                    top: r.position.top + r.height / 2
                };
                else {
                    for (; n > 0 && s > 0 && l > 0 && c > 0;)
                        for (n = Math.floor(n / 2), s = Math.floor(s / 2), t.x === j ? l = n : t.x === L ? l = r.width - n : l += Math.floor(n / 2), t.y === N ? c = s : "bottom" === t.y ? c = r.height - s : c += Math.floor(s / 2), o = a.length; o-- && !(a.length < 2);) u = a[o][0] - r.position.left, d = a[o][1] - r.position.top, (t.x === j && u >= l || t.x === L && u <= l || t.x === q && (u < l || u > r.width - l) || t.y === N && d >= c || "bottom" === t.y && d <= c || t.y === q && (d < c || d > r.height - c)) && a.splice(o, 1);
                    r.position = {
                        left: a[0][0],
                        top: a[0][1]
                    }
                }
                return r
            },
            rect: function(e, t, i, n) {
                return {
                    width: Math.abs(i - e),
                    height: Math.abs(n - t),
                    position: {
                        left: Math.min(e, i),
                        top: Math.min(t, n)
                    }
                }
            },
            _angles: {
                tc: 1.5,
                tr: 7 / 4,
                tl: 5 / 4,
                bc: .5,
                br: .25,
                bl: .75,
                rc: 2,
                lc: 1,
                c: 0
            },
            ellipse: function(e, t, i, n, s) {
                var r = W.polys._angles[s.abbrev()],
                    o = 0 === r ? 0 : i * Math.cos(r * Math.PI),
                    a = n * Math.sin(r * Math.PI);
                return {
                    width: 2 * i - Math.abs(o),
                    height: 2 * n - Math.abs(a),
                    position: {
                        left: e + o,
                        top: t + a
                    },
                    adjustable: P
                }
            },
            circle: function(e, t, i, n) {
                return W.polys.ellipse(e, t, i, i, n)
            }
        }, W.svg = function(e, i, s) {
            for (var r, o, a, l, c, u, d, p, h, f = (n(t), i[0]), m = n(f.ownerSVGElement), g = f.ownerDocument, v = (parseInt(i.css("stroke-width"), 10) || 0) / 2; !f.getBBox;) f = f.parentNode;
            if (!f.getBBox || !f.parentNode) return P;
            switch (f.nodeName) {
                case "ellipse":
                case "circle":
                    p = W.polys.ellipse(f.cx.baseVal.value, f.cy.baseVal.value, (f.rx || f.r).baseVal.value + v, (f.ry || f.r).baseVal.value + v, s);
                    break;
                case "line":
                case "polygon":
                case "polyline":
                    for (d = f.points || [{
                            x: f.x1.baseVal.value,
                            y: f.y1.baseVal.value
                        }, {
                            x: f.x2.baseVal.value,
                            y: f.y2.baseVal.value
                        }], p = [], u = -1, l = d.numberOfItems || d.length; ++u < l;) c = d.getItem ? d.getItem(u) : d[u], p.push.apply(p, [c.x, c.y]);
                    p = W.polys.polygon(p, s);
                    break;
                default:
                    p = f.getBBox(), p = {
                        width: p.width,
                        height: p.height,
                        position: {
                            left: p.x,
                            top: p.y
                        }
                    }
            }
            return h = p.position, m = m[0], m.createSVGPoint && (o = f.getScreenCTM(), d = m.createSVGPoint(), d.x = h.left, d.y = h.top, a = d.matrixTransform(o), h.left = a.x, h.top = a.y), g !== t && "mouse" !== e.position.target && (r = n((g.defaultView || g.parentWindow).frameElement).offset()) && (h.left += r.left, h.top += r.top), g = n(g), h.left += g.scrollLeft(), h.top += g.scrollTop(), p
        }, W.imagemap = function(e, t, i, s) {
            t.jquery || (t = n(t));
            var r, o, a, l, c, u = (t.attr("shape") || "rect").toLowerCase().replace("poly", "polygon"),
                d = n('img[usemap="#' + t.parent("map").attr("name") + '"]'),
                p = n.trim(t.attr("coords")),
                h = p.replace(/,$/, "").split(",");
            if (!d.length) return P;
            if ("polygon" === u) l = W.polys.polygon(h, i);
            else {
                if (!W.polys[u]) return P;
                for (a = -1, c = h.length, o = []; ++a < c;) o.push(parseInt(h[a], 10));
                l = W.polys[u].apply(this, o.concat(i))
            }
            return r = d.offset(), r.left += Math.ceil((d.outerWidth(P) - d.width()) / 2), r.top += Math.ceil((d.outerHeight(P) - d.height()) / 2), l.position.left += r.left, l.position.top += r.top, l
        };
        var ve;
        n.extend(k.prototype, {
            _scroll: function() {
                var t = this.qtip.elements.overlay;
                t && (t[0].style.top = n(e).scrollTop() + "px")
            },
            init: function(i) {
                var s = i.tooltip;
                n("select, object").length < 1 && (this.bgiframe = i.elements.bgiframe = n('<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>').appendTo(s), i._bind(s, "tooltipmove", this.adjustBGIFrame, this._ns, this)), this.redrawContainer = n("<div/>", {
                    id: Y + "-rcontainer"
                }).appendTo(t.body), i.elements.overlay && i.elements.overlay.addClass("qtipmodal-ie6fix") && (i._bind(e, ["scroll", "resize"], this._scroll, this._ns, this), i._bind(s, ["tooltipshow"], this._scroll, this._ns, this)), this.redraw()
            },
            adjustBGIFrame: function() {
                var e, t, i = this.qtip.tooltip,
                    n = {
                        height: i.outerHeight(P),
                        width: i.outerWidth(P)
                    },
                    s = this.qtip.plugins.tip,
                    r = this.qtip.elements.tip;
                t = parseInt(i.css("borderLeftWidth"), 10) || 0, t = {
                    left: -t,
                    top: -t
                }, s && r && (e = "x" === s.corner.precedance ? [E, j] : ["height", N], t[e[1]] -= r[e[0]]()), this.bgiframe.css(t).css(n)
            },
            redraw: function() {
                if (this.qtip.rendered < 1 || this.drawing) return this;
                var e, t, i, n, s = this.qtip.tooltip,
                    r = this.qtip.options.style,
                    o = this.qtip.options.position.container;
                return this.qtip.drawing = 1, r.height && s.css("height", r.height), r.width ? s.css(E, r.width) : (s.css(E, "").appendTo(this.redrawContainer), t = s.width(), t % 2 < 1 && (t += 1), i = s.css("maxWidth") || "", n = s.css("minWidth") || "", e = (i + n).indexOf("%") > -1 ? o.width() / 100 : 0, i = (i.indexOf("%") > -1 ? e : 1) * parseInt(i, 10) || t, n = (n.indexOf("%") > -1 ? e : 1) * parseInt(n, 10) || 0, t = i + n ? Math.min(Math.max(t, n), i) : t, s.css(E, Math.round(t)).appendTo(o)), this.drawing = 0, this
            },
            destroy: function() {
                this.bgiframe && this.bgiframe.remove(), this.qtip._unbind([e, this.qtip.tooltip], this._ns)
            }
        }), ve = W.ie6 = function(e) {
            return 6 === ee.ie ? new k(e) : P
        }, ve.initialize = "render", $.ie6 = {
            "^content|style$": function() {
                this.redraw()
            }
        }
    })
}(window, document),
function(e, t, i) {
    "use strict";
    var n = function(e, t, i) {
            i = s.extend({}, s.options, i);
            var r, o, a = s.runValidations(e, t, i);
            for (r in a)
                for (o in a[r])
                    if (s.isPromise(a[r][o])) throw new Error("Use validate.async if you want support for promises");
            return n.processValidationResults(a, i)
        },
        s = n;
    s.extend = function(e) {
        return [].slice.call(arguments, 1).forEach(function(t) {
            for (var i in t) e[i] = t[i]
        }), e
    }, s.extend(n, {
        version: {
            major: 0,
            minor: 11,
            patch: 1,
            metadata: null,
            toString: function() {
                var e = s.format("%{major}.%{minor}.%{patch}", s.version);
                return s.isEmpty(s.version.metadata) || (e += "+" + s.version.metadata), e
            }
        },
        Promise: "undefined" != typeof Promise ? Promise : null,
        EMPTY_STRING_REGEXP: /^\s*$/,
        runValidations: function(e, t, i) {
            var n, r, o, a, l, c, u, d = [];
            (s.isDomElement(e) || s.isJqueryElement(e)) && (e = s.collectFormValues(e));
            for (n in t) {
                o = s.getDeepObjectValue(e, n), a = s.result(t[n], o, e, n, i, t);
                for (r in a) {
                    if (!(l = s.validators[r])) throw u = s.format("Unknown validator %{name}", {
                        name: r
                    }), new Error(u);
                    c = a[r], (c = s.result(c, o, e, n, i, t)) && d.push({
                        attribute: n,
                        value: o,
                        validator: r,
                        globalOptions: i,
                        attributes: e,
                        options: c,
                        error: l.call(l, o, c, n, e, i)
                    })
                }
            }
            return d
        },
        processValidationResults: function(e, t) {
            e = s.pruneEmptyErrors(e, t), e = s.expandMultipleErrors(e, t), e = s.convertErrorMessages(e, t);
            var i = t.format || "grouped";
            if ("function" != typeof s.formatters[i]) throw new Error(s.format("Unknown format %{format}", t));
            return e = s.formatters[i](e), s.isEmpty(e) ? void 0 : e
        },
        async: function(e, t, i) {
            i = s.extend({}, s.async.options, i);
            var n = i.wrapErrors || function(e) {
                return e
            };
            !1 !== i.cleanAttributes && (e = s.cleanAttributes(e, t));
            var r = s.runValidations(e, t, i);
            return new s.Promise(function(o, a) {
                s.waitForResults(r).then(function() {
                    var l = s.processValidationResults(r, i);
                    l ? a(new n(l, i, e, t)) : o(e)
                }, function(e) {
                    a(e)
                })
            })
        },
        single: function(e, t, i) {
            return i = s.extend({}, s.single.options, i, {
                format: "flat",
                fullMessages: !1
            }), s({
                single: e
            }, {
                single: t
            }, i)
        },
        waitForResults: function(e) {
            return e.reduce(function(e, t) {
                return s.isPromise(t.error) ? e.then(function() {
                    return t.error.then(function(e) {
                        t.error = e || null
                    })
                }) : e
            }, new s.Promise(function(e) {
                e()
            }))
        },
        result: function(e) {
            var t = [].slice.call(arguments, 1);
            return "function" == typeof e && (e = e.apply(null, t)), e
        },
        isNumber: function(e) {
            return "number" == typeof e && !isNaN(e)
        },
        isFunction: function(e) {
            return "function" == typeof e
        },
        isInteger: function(e) {
            return s.isNumber(e) && e % 1 == 0
        },
        isBoolean: function(e) {
            return "boolean" == typeof e
        },
        isObject: function(e) {
            return e === Object(e)
        },
        isDate: function(e) {
            return e instanceof Date
        },
        isDefined: function(e) {
            return null !== e && void 0 !== e
        },
        isPromise: function(e) {
            return !!e && s.isFunction(e.then)
        },
        isJqueryElement: function(e) {
            return e && s.isString(e.jquery)
        },
        isDomElement: function(e) {
            return !!(e && e.querySelectorAll && e.querySelector) && (!(!s.isObject(document) || e !== document) || ("object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName))
        },
        isEmpty: function(e) {
            var t;
            if (!s.isDefined(e)) return !0;
            if (s.isFunction(e)) return !1;
            if (s.isString(e)) return s.EMPTY_STRING_REGEXP.test(e);
            if (s.isArray(e)) return 0 === e.length;
            if (s.isDate(e)) return !1;
            if (s.isObject(e)) {
                for (t in e) return !1;
                return !0
            }
            return !1
        },
        format: s.extend(function(e, t) {
            return s.isString(e) ? e.replace(s.format.FORMAT_REGEXP, function(e, i, n) {
                return "%" === i ? "%{" + n + "}" : String(t[n])
            }) : e
        }, {
            FORMAT_REGEXP: /(%?)%\{([^\}]+)\}/g
        }),
        prettify: function(e) {
            return s.isNumber(e) ? 100 * e % 1 == 0 ? "" + e : parseFloat(Math.round(100 * e) / 100).toFixed(2) : s.isArray(e) ? e.map(function(e) {
                return s.prettify(e)
            }).join(", ") : s.isObject(e) ? e.toString() : (e = "" + e, e.replace(/([^\s])\.([^\s])/g, "$1 $2").replace(/\\+/g, "").replace(/[_-]/g, " ").replace(/([a-z])([A-Z])/g, function(e, t, i) {
                return t + " " + i.toLowerCase()
            }).toLowerCase())
        },
        stringifyValue: function(e) {
            return s.prettify(e)
        },
        isString: function(e) {
            return "string" == typeof e
        },
        isArray: function(e) {
            return "[object Array]" === {}.toString.call(e)
        },
        isHash: function(e) {
            return s.isObject(e) && !s.isArray(e) && !s.isFunction(e)
        },
        contains: function(e, t) {
            return !!s.isDefined(e) && (s.isArray(e) ? -1 !== e.indexOf(t) : t in e)
        },
        unique: function(e) {
            return s.isArray(e) ? e.filter(function(e, t, i) {
                return i.indexOf(e) == t
            }) : e
        },
        forEachKeyInKeypath: function(e, t, i) {
            if (s.isString(t)) {
                var n, r = "",
                    o = !1;
                for (n = 0; n < t.length; ++n) switch (t[n]) {
                    case ".":
                        o ? (o = !1, r += ".") : (e = i(e, r, !1), r = "");
                        break;
                    case "\\":
                        o ? (o = !1, r += "\\") : o = !0;
                        break;
                    default:
                        o = !1, r += t[n]
                }
                return i(e, r, !0)
            }
        },
        getDeepObjectValue: function(e, t) {
            return s.isObject(e) ? s.forEachKeyInKeypath(e, t, function(e, t) {
                return s.isObject(e) ? e[t] : void 0
            }) : void 0
        },
        collectFormValues: function(e, t) {
            var i, n, r, o, a, l, c = {};
            if (s.isJqueryElement(e) && (e = e[0]), !e) return c;
            for (t = t || {}, o = e.querySelectorAll("input[name], textarea[name]"), i = 0; i < o.length; ++i) r = o.item(i), s.isDefined(r.getAttribute("data-ignored")) || (l = s.sanitizeFormValue(r.value, t), "number" === r.type ? l = l ? +l : null : "checkbox" === r.type ? r.attributes.value ? r.checked || (l = c[r.name] || null) : l = r.checked : "radio" === r.type && (r.checked || (l = c[r.name] || null)), c[r.name] = l);
            for (o = e.querySelectorAll("select[name]"), i = 0; i < o.length; ++i) {
                if (r = o.item(i), r.multiple) {
                    l = [];
                    for (n in r.options) a = r.options[n], a.selected && l.push(s.sanitizeFormValue(a.value, t))
                } else l = s.sanitizeFormValue(r.options[r.selectedIndex].value, t);
                c[r.name] = l
            }
            return c
        },
        sanitizeFormValue: function(e, t) {
            return t.trim && s.isString(e) && (e = e.trim()), !1 !== t.nullify && "" === e ? null : e
        },
        capitalize: function(e) {
            return s.isString(e) ? e[0].toUpperCase() + e.slice(1) : e
        },
        pruneEmptyErrors: function(e) {
            return e.filter(function(e) {
                return !s.isEmpty(e.error)
            })
        },
        expandMultipleErrors: function(e) {
            var t = [];
            return e.forEach(function(e) {
                s.isArray(e.error) ? e.error.forEach(function(i) {
                    t.push(s.extend({}, e, {
                        error: i
                    }))
                }) : t.push(e)
            }), t
        },
        convertErrorMessages: function(e, t) {
            t = t || {};
            var i = [];
            return e.forEach(function(e) {
                var n = s.result(e.error, e.value, e.attribute, e.options, e.attributes, e.globalOptions);
                return s.isString(n) ? ("^" === n[0] ? n = n.slice(1) : !1 !== t.fullMessages && (n = s.capitalize(s.prettify(e.attribute)) + " " + n), n = n.replace(/\\\^/g, "^"), n = s.format(n, {
                    value: s.stringifyValue(e.value)
                }), void i.push(s.extend({}, e, {
                    error: n
                }))) : void i.push(e)
            }), i
        },
        groupErrorsByAttribute: function(e) {
            var t = {};
            return e.forEach(function(e) {
                var i = t[e.attribute];
                i ? i.push(e) : t[e.attribute] = [e]
            }), t
        },
        flattenErrorsToArray: function(e) {
            return e.map(function(e) {
                return e.error
            }).filter(function(e, t, i) {
                return i.indexOf(e) === t
            })
        },
        cleanAttributes: function(e, t) {
            function i(e, t, i) {
                return s.isObject(e[t]) ? e[t] : e[t] = !!i || {}
            }

            function n(e, t) {
                if (!s.isObject(e)) return e;
                var i, r, o = s.extend({}, e);
                for (r in e) i = t[r], s.isObject(i) ? o[r] = n(o[r], i) : i || delete o[r];
                return o
            }
            return s.isObject(t) && s.isObject(e) ? (t = function(e) {
                var t, n = {};
                for (t in e) e[t] && s.forEachKeyInKeypath(n, t, i);
                return n
            }(t), n(e, t)) : {}
        },
        exposeModule: function(e, t, i, n, s) {
            i ? (n && n.exports && (i = n.exports = e), i.validate = e) : (t.validate = e, e.isFunction(s) && s.amd && s([], function() {
                return e
            }))
        },
        warn: function(e) {
            "undefined" != typeof console && console.warn && console.warn("[validate.js] " + e)
        },
        error: function(e) {
            "undefined" != typeof console && console.error && console.error("[validate.js] " + e)
        }
    }), n.validators = {
        presence: function(e, t) {
            return t = s.extend({}, this.options, t), (t.allowEmpty ? !s.isDefined(e) : s.isEmpty(e)) ? t.message || this.message || "can't be blank" : void 0
        },
        length: function(e, t, i) {
            if (s.isDefined(e)) {
                t = s.extend({}, this.options, t);
                var n, r = t.is,
                    o = t.maximum,
                    a = t.minimum,
                    l = t.tokenizer || function(e) {
                        return e
                    },
                    c = [];
                e = l(e);
                var u = e.length;
                return s.isNumber(u) ? (s.isNumber(r) && u !== r && (n = t.wrongLength || this.wrongLength || "is the wrong length (should be %{count} characters)", c.push(s.format(n, {
                    count: r
                }))), s.isNumber(a) && a > u && (n = t.tooShort || this.tooShort || "is too short (minimum is %{count} characters)", c.push(s.format(n, {
                    count: a
                }))), s.isNumber(o) && u > o && (n = t.tooLong || this.tooLong || "is too long (maximum is %{count} characters)", c.push(s.format(n, {
                    count: o
                }))), c.length > 0 ? t.message || c : void 0) : (s.error(s.format("Attribute %{attr} has a non numeric value for `length`", {
                    attr: i
                })), t.message || this.notValid || "has an incorrect length")
            }
        },
        numericality: function(e, t) {
            if (s.isDefined(e)) {
                t = s.extend({}, this.options, t);
                var i, n, r = [],
                    o = {
                        greaterThan: function(e, t) {
                            return e > t
                        },
                        greaterThanOrEqualTo: function(e, t) {
                            return e >= t
                        },
                        equalTo: function(e, t) {
                            return e === t
                        },
                        lessThan: function(e, t) {
                            return t > e
                        },
                        lessThanOrEqualTo: function(e, t) {
                            return t >= e
                        },
                        divisibleBy: function(e, t) {
                            return e % t == 0
                        }
                    };
                if (s.isString(e) && t.strict) {
                    var a = "^(0|[1-9]\\d*)";
                    if (t.onlyInteger || (a += "(\\.\\d+)?"), a += "$", !new RegExp(a).test(e)) return t.message || t.notValid || this.notValid || this.message || "must be a valid number"
                }
                if (!0 !== t.noStrings && s.isString(e) && !s.isEmpty(e) && (e = +e), !s.isNumber(e)) return t.message || t.notValid || this.notValid || this.message || "is not a number";
                if (t.onlyInteger && !s.isInteger(e)) return t.message || t.notInteger || this.notInteger || this.message || "must be an integer";
                for (i in o)
                    if (n = t[i], s.isNumber(n) && !o[i](e, n)) {
                        var l = "not" + s.capitalize(i),
                            c = t[l] || this[l] || this.message || "must be %{type} %{count}";
                        r.push(s.format(c, {
                            count: n,
                            type: s.prettify(i)
                        }))
                    }
                return t.odd && e % 2 != 1 && r.push(t.notOdd || this.notOdd || this.message || "must be odd"), t.even && e % 2 != 0 && r.push(t.notEven || this.notEven || this.message || "must be even"), r.length ? t.message || r : void 0
            }
        },
        datetime: s.extend(function(e, t) {
            if (!s.isFunction(this.parse) || !s.isFunction(this.format)) throw new Error("Both the parse and format functions needs to be set to use the datetime/date validator");
            if (s.isDefined(e)) {
                t = s.extend({}, this.options, t);
                var i, n = [],
                    r = t.earliest ? this.parse(t.earliest, t) : NaN,
                    o = t.latest ? this.parse(t.latest, t) : NaN;
                return e = this.parse(e, t), isNaN(e) || t.dateOnly && e % 864e5 != 0 ? (i = t.notValid || t.message || this.notValid || "must be a valid date", s.format(i, {
                    value: arguments[0]
                })) : (!isNaN(r) && r > e && (i = t.tooEarly || t.message || this.tooEarly || "must be no earlier than %{date}", i = s.format(i, {
                    value: this.format(e, t),
                    date: this.format(r, t)
                }), n.push(i)), !isNaN(o) && e > o && (i = t.tooLate || t.message || this.tooLate || "must be no later than %{date}", i = s.format(i, {
                    date: this.format(o, t),
                    value: this.format(e, t)
                }), n.push(i)), n.length ? s.unique(n) : void 0)
            }
        }, {
            parse: null,
            format: null
        }),
        date: function(e, t) {
            return t = s.extend({}, t, {
                dateOnly: !0
            }), s.validators.datetime.call(s.validators.datetime, e, t)
        },
        format: function(e, t) {
            (s.isString(t) || t instanceof RegExp) && (t = {
                pattern: t
            }), t = s.extend({}, this.options, t);
            var i, n = t.message || this.message || "is invalid",
                r = t.pattern;
            return s.isDefined(e) ? s.isString(e) ? (s.isString(r) && (r = new RegExp(t.pattern, t.flags)), i = r.exec(e), i && i[0].length == e.length ? void 0 : n) : n : void 0
        },
        inclusion: function(e, t) {
            if (s.isDefined(e) && (s.isArray(t) && (t = {
                    within: t
                }), t = s.extend({}, this.options, t), !s.contains(t.within, e))) {
                var i = t.message || this.message || "^%{value} is not included in the list";
                return s.format(i, {
                    value: e
                })
            }
        },
        exclusion: function(e, t) {
            if (s.isDefined(e) && (s.isArray(t) && (t = {
                    within: t
                }), t = s.extend({}, this.options, t), s.contains(t.within, e))) {
                var i = t.message || this.message || "^%{value} is restricted";
                return s.format(i, {
                    value: e
                })
            }
        },
        email: s.extend(function(e, t) {
            t = s.extend({}, this.options, t);
            var i = t.message || this.message || "is not a valid email";
            if (s.isDefined(e)) return s.isString(e) && this.PATTERN.exec(e) ? void 0 : i
        }, {
            PATTERN: /^[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i
        }),
        equality: function(e, t, i, n) {
            if (s.isDefined(e)) {
                s.isString(t) && (t = {
                    attribute: t
                }), t = s.extend({}, this.options, t);
                var r = t.message || this.message || "is not equal to %{attribute}";
                if (s.isEmpty(t.attribute) || !s.isString(t.attribute)) throw new Error("The attribute must be a non empty string");
                var o = s.getDeepObjectValue(n, t.attribute);
                return (t.comparator || function(e, t) {
                    return e === t
                })(e, o, t, i, n) ? void 0 : s.format(r, {
                    attribute: s.prettify(t.attribute)
                })
            }
        },
        url: function(e, t) {
            if (s.isDefined(e)) {
                t = s.extend({}, this.options, t);
                var i = t.message || this.message || "is not a valid url",
                    n = t.schemes || this.schemes || ["http", "https"],
                    r = t.allowLocal || this.allowLocal || !1;
                if (!s.isString(e)) return i;
                var o = "^(?:(?:" + n.join("|") + ")://)(?:\\S+(?::\\S*)?@)?(?:",
                    a = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
                r ? a += "?" : o += "(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})", o += "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" + a + ")(?::\\d{2,5})?(?:[/?#]\\S*)?$";
                return new RegExp(o, "i").exec(e) ? void 0 : i
            }
        }
    }, n.formatters = {
        detailed: function(e) {
            return e
        },
        flat: s.flattenErrorsToArray,
        grouped: function(e) {
            var t;
            e = s.groupErrorsByAttribute(e);
            for (t in e) e[t] = s.flattenErrorsToArray(e[t]);
            return e
        },
        constraint: function(e) {
            var t;
            e = s.groupErrorsByAttribute(e);
            for (t in e) e[t] = e[t].map(function(e) {
                return e.validator
            }).sort();
            return e
        }
    }, n.exposeModule(n, this, e, t, i)
}.call(this, "undefined" != typeof exports ? exports : null, "undefined" != typeof module ? module : null, "undefined" != typeof define ? define : null),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(e) {
        "use strict";
        var t = window.Slick || {};
        (t = function() {
            var t = 0;
            return function(i, n) {
                var s, r = this;
                r.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: e(i),
                    appendDots: e(i),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(t, i) {
                        return e('<button type="button" />').text(i + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, r.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(i), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, s = e(i).data("slick") || {}, r.options = e.extend({}, r.defaults, n, s), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = t++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
            }
        }()).prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, t.prototype.addSlide = t.prototype.slickAdd = function(t, i, n) {
            var s = this;
            if ("boolean" == typeof i) n = i, i = null;
            else if (i < 0 || i >= s.slideCount) return !1;
            s.unload(), "number" == typeof i ? 0 === i && 0 === s.$slides.length ? e(t).appendTo(s.$slideTrack) : n ? e(t).insertBefore(s.$slides.eq(i)) : e(t).insertAfter(s.$slides.eq(i)) : !0 === n ? e(t).prependTo(s.$slideTrack) : e(t).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(t, i) {
                e(i).attr("data-slick-index", t)
            }), s.$slidesCache = s.$slides, s.reinit()
        }, t.prototype.animateHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({
                    height: t
                }, e.options.speed)
            }
        }, t.prototype.animateSlide = function(t, i) {
            var n = {},
                s = this;
            s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (t = -t), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
                left: t
            }, s.options.speed, s.options.easing, i) : s.$slideTrack.animate({
                top: t
            }, s.options.speed, s.options.easing, i) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), e({
                animStart: s.currentLeft
            }).animate({
                animStart: t
            }, {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function(e) {
                    e = Math.ceil(e), !1 === s.options.vertical ? (n[s.animType] = "translate(" + e + "px, 0px)", s.$slideTrack.css(n)) : (n[s.animType] = "translate(0px," + e + "px)", s.$slideTrack.css(n))
                },
                complete: function() {
                    i && i.call()
                }
            })) : (s.applyTransition(), t = Math.ceil(t), !1 === s.options.vertical ? n[s.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[s.animType] = "translate3d(0px," + t + "px, 0px)", s.$slideTrack.css(n), i && setTimeout(function() {
                s.disableTransition(), i.call()
            }, s.options.speed))
        }, t.prototype.getNavTarget = function() {
            var t = this,
                i = t.options.asNavFor;
            return i && null !== i && (i = e(i).not(t.$slider)), i
        }, t.prototype.asNavFor = function(t) {
            var i = this.getNavTarget();
            null !== i && "object" == typeof i && i.each(function() {
                var i = e(this).slick("getSlick");
                i.unslicked || i.slideHandler(t, !0)
            })
        }, t.prototype.applyTransition = function(e) {
            var t = this,
                i = {};
            !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
        }, t.prototype.autoPlay = function() {
            var e = this;
            e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, t.prototype.autoPlayClear = function() {
            var e = this;
            e.autoPlayTimer && clearInterval(e.autoPlayTimer)
        }, t.prototype.autoPlayIterator = function() {
            var e = this,
                t = e.currentSlide + e.options.slidesToScroll;
            e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
        }, t.prototype.buildArrows = function() {
            var t = this;
            !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, t.prototype.buildDots = function() {
            var t, i, n = this;
            if (!0 === n.options.dots) {
                for (n.$slider.addClass("slick-dotted"), i = e("<ul />").addClass(n.options.dotsClass), t = 0; t <= n.getDotCount(); t += 1) i.append(e("<li />").append(n.options.customPaging.call(this, n, t)));
                n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
            }
        }, t.prototype.buildOut = function() {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
                e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
            }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
        }, t.prototype.buildRows = function() {
            var e, t, i, n, s, r, o, a = this;
            if (n = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
                for (o = a.options.slidesPerRow * a.options.rows, s = Math.ceil(r.length / o), e = 0; e < s; e++) {
                    var l = document.createElement("div");
                    for (t = 0; t < a.options.rows; t++) {
                        var c = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var u = e * o + (t * a.options.slidesPerRow + i);
                            r.get(u) && c.appendChild(r.get(u))
                        }
                        l.appendChild(c)
                    }
                    n.appendChild(l)
                }
                a.$slider.empty().append(n), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, t.prototype.checkResponsive = function(t, i) {
            var n, s, r, o = this,
                a = !1,
                l = o.$slider.width(),
                c = window.innerWidth || e(window).width();
            if ("window" === o.respondTo ? r = c : "slider" === o.respondTo ? r = l : "min" === o.respondTo && (r = Math.min(c, l)), o.options.responsive && o.options.responsive.length && null !== o.options.responsive) {
                s = null;
                for (n in o.breakpoints) o.breakpoints.hasOwnProperty(n) && (!1 === o.originalSettings.mobileFirst ? r < o.breakpoints[n] && (s = o.breakpoints[n]) : r > o.breakpoints[n] && (s = o.breakpoints[n]));
                null !== s ? null !== o.activeBreakpoint ? (s !== o.activeBreakpoint || i) && (o.activeBreakpoint = s, "unslick" === o.breakpointSettings[s] ? o.unslick(s) : (o.options = e.extend({}, o.originalSettings, o.breakpointSettings[s]), !0 === t && (o.currentSlide = o.options.initialSlide), o.refresh(t)), a = s) : (o.activeBreakpoint = s, "unslick" === o.breakpointSettings[s] ? o.unslick(s) : (o.options = e.extend({}, o.originalSettings, o.breakpointSettings[s]), !0 === t && (o.currentSlide = o.options.initialSlide), o.refresh(t)), a = s) : null !== o.activeBreakpoint && (o.activeBreakpoint = null, o.options = o.originalSettings, !0 === t && (o.currentSlide = o.options.initialSlide), o.refresh(t), a = s), t || !1 === a || o.$slider.trigger("breakpoint", [o, a])
            }
        }, t.prototype.changeSlide = function(t, i) {
            var n, s, r, o = this,
                a = e(t.currentTarget);
            switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), r = o.slideCount % o.options.slidesToScroll != 0, n = r ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, t.data.message) {
                case "previous":
                    s = 0 === n ? o.options.slidesToScroll : o.options.slidesToShow - n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - s, !1, i);
                    break;
                case "next":
                    s = 0 === n ? o.options.slidesToScroll : n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + s, !1, i);
                    break;
                case "index":
                    var l = 0 === t.data.index ? 0 : t.data.index || a.index() * o.options.slidesToScroll;
                    o.slideHandler(o.checkNavigable(l), !1, i), a.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, t.prototype.checkNavigable = function(e) {
            var t, i;
            if (t = this.getNavigableIndexes(), i = 0, e > t[t.length - 1]) e = t[t.length - 1];
            else
                for (var n in t) {
                    if (e < t[n]) {
                        e = i;
                        break
                    }
                    i = t[n]
                }
            return e
        }, t.prototype.cleanUpEvents = function() {
            var t = this;
            t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.cleanUpSlideEvents = function() {
            var t = this;
            t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.cleanUpRows = function() {
            var e, t = this;
            t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
        }, t.prototype.clickHandler = function(e) {
            !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, t.prototype.destroy = function(t) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                e(this).attr("style", e(this).data("originalStyling"))
            }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
        }, t.prototype.disableTransition = function(e) {
            var t = this,
                i = {};
            i[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
        }, t.prototype.fadeSlide = function(e, t) {
            var i = this;
            !1 === i.cssTransitions ? (i.$slides.eq(e).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(e).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), t && setTimeout(function() {
                i.disableTransition(e), t.call()
            }, i.options.speed))
        }, t.prototype.fadeSlideOut = function(e) {
            var t = this;
            !1 === t.cssTransitions ? t.$slides.eq(e).animate({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }))
        }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
            var t = this;
            null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, t.prototype.focusHandler = function() {
            var t = this;
            t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(i) {
                i.stopImmediatePropagation();
                var n = e(this);
                setTimeout(function() {
                    t.options.pauseOnFocus && (t.focussed = n.is(":focus"), t.autoPlay())
                }, 0)
            })
        }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }, t.prototype.getDotCount = function() {
            var e = this,
                t = 0,
                i = 0,
                n = 0;
            if (!0 === e.options.infinite)
                if (e.slideCount <= e.options.slidesToShow) ++n;
                else
                    for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else if (!0 === e.options.centerMode) n = e.slideCount;
            else if (e.options.asNavFor)
                for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
            return n - 1
        }, t.prototype.getLeft = function(e) {
            var t, i, n, s, r = this,
                o = 0;
            return r.slideOffset = 0, i = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, s = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? s = -1.5 : 1 === r.options.slidesToShow && (s = -2)), o = i * r.options.slidesToShow * s), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, o = (r.options.slidesToShow - (e - r.slideCount)) * i * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, o = r.slideCount % r.options.slidesToScroll * i * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, o = (e + r.options.slidesToShow - r.slideCount) * i), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, o = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * i * -1 + o, !0 === r.options.variableWidth && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === r.options.centerMode && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (r.$list.width() - n.outerWidth()) / 2)), t
        }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
            return this.options[e]
        }, t.prototype.getNavigableIndexes = function() {
            var e, t = this,
                i = 0,
                n = 0,
                s = [];
            for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e;) s.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return s
        }, t.prototype.getSlick = function() {
            return this
        }, t.prototype.getSlideCount = function() {
            var t, i, n = this;
            return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function(s, r) {
                if (r.offsetLeft - i + e(r).outerWidth() / 2 > -1 * n.swipeLeft) return t = r, !1
            }), Math.abs(e(t).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
        }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, t)
        }, t.prototype.init = function(t) {
            var i = this;
            e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), t && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
        }, t.prototype.initADA = function() {
            var t = this,
                i = Math.ceil(t.slideCount / t.options.slidesToShow),
                n = t.getNavigableIndexes().filter(function(e) {
                    return e >= 0 && e < t.slideCount
                });
            t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
                var s = n.indexOf(i);
                e(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + t.instanceUid + i,
                    tabindex: -1
                }), -1 !== s && e(this).attr({
                    "aria-describedby": "slick-slide-control" + t.instanceUid + s
                })
            }), t.$dots.attr("role", "tablist").find("li").each(function(s) {
                var r = n[s];
                e(this).attr({
                    role: "presentation"
                }), e(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + t.instanceUid + s,
                    "aria-controls": "slick-slide" + t.instanceUid + r,
                    "aria-label": s + 1 + " of " + i,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            }).eq(t.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end());
            for (var s = t.currentSlide, r = s + t.options.slidesToShow; s < r; s++) t.$slides.eq(s).attr("tabindex", 0);
            t.activateADA()
        }, t.prototype.initArrowEvents = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
        }, t.prototype.initDotEvents = function() {
            var t = this;
            !0 === t.options.dots && (e("li", t.$dots).on("click.slick", {
                message: "index"
            }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.initSlideEvents = function() {
            var t = this;
            t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
        }, t.prototype.initializeEvents = function() {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
        }, t.prototype.initUI = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
        }, t.prototype.keyHandler = function(e) {
            var t = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "next" : "previous"
                }
            }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "previous" : "next"
                }
            }))
        }, t.prototype.lazyLoad = function() {
            function t(t) {
                e("img[data-lazy]", t).each(function() {
                    var t = e(this),
                        i = e(this).attr("data-lazy"),
                        n = e(this).attr("data-srcset"),
                        s = e(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                        o = document.createElement("img");
                    o.onload = function() {
                        t.animate({
                            opacity: 0
                        }, 100, function() {
                            n && (t.attr("srcset", n), s && t.attr("sizes", s)), t.attr("src", i).animate({
                                opacity: 1
                            }, 200, function() {
                                t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            }), r.$slider.trigger("lazyLoaded", [r, t, i])
                        })
                    }, o.onerror = function() {
                        t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, i])
                    }, o.src = i
                })
            }
            var i, n, s, r = this;
            if (!0 === r.options.centerMode ? !0 === r.options.infinite ? s = (n = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (n = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), s = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (n = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, s = Math.ceil(n + r.options.slidesToShow), !0 === r.options.fade && (n > 0 && n--, s <= r.slideCount && s++)), i = r.$slider.find(".slick-slide").slice(n, s), "anticipated" === r.options.lazyLoad)
                for (var o = n - 1, a = s, l = r.$slider.find(".slick-slide"), c = 0; c < r.options.slidesToScroll; c++) o < 0 && (o = r.slideCount - 1), i = (i = i.add(l.eq(o))).add(l.eq(a)), o--, a++;
            t(i), r.slideCount <= r.options.slidesToShow ? t(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? t(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && t(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
        }, t.prototype.loadSlider = function() {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, t.prototype.next = t.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, t.prototype.orientationChange = function() {
            var e = this;
            e.checkResponsive(), e.setPosition()
        }, t.prototype.pause = t.prototype.slickPause = function() {
            var e = this;
            e.autoPlayClear(), e.paused = !0
        }, t.prototype.play = t.prototype.slickPlay = function() {
            var e = this;
            e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
        }, t.prototype.postSlide = function(t) {
            var i = this;
            i.unslicked || (i.$slider.trigger("afterChange", [i, t]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && e(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
        }, t.prototype.prev = t.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, t.prototype.preventDefault = function(e) {
            e.preventDefault()
        }, t.prototype.progressiveLazyLoad = function(t) {
            t = t || 1;
            var i, n, s, r, o, a = this,
                l = e("img[data-lazy]", a.$slider);
            l.length ? (i = l.first(), n = i.attr("data-lazy"), s = i.attr("data-srcset"), r = i.attr("data-sizes") || a.$slider.attr("data-sizes"), (o = document.createElement("img")).onload = function() {
                s && (i.attr("srcset", s), r && i.attr("sizes", r)), i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, n]), a.progressiveLazyLoad()
            }, o.onerror = function() {
                t < 3 ? setTimeout(function() {
                    a.progressiveLazyLoad(t + 1)
                }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, n]), a.progressiveLazyLoad())
            }, o.src = n) : a.$slider.trigger("allImagesLoaded", [a])
        }, t.prototype.refresh = function(t) {
            var i, n, s = this;
            n = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > n && (s.currentSlide = n), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), i = s.currentSlide, s.destroy(!0), e.extend(s, s.initials, {
                currentSlide: i
            }), s.init(), t || s.changeSlide({
                data: {
                    message: "index",
                    index: i
                }
            }, !1)
        }, t.prototype.registerBreakpoints = function() {
            var t, i, n, s = this,
                r = s.options.responsive || null;
            if ("array" === e.type(r) && r.length) {
                s.respondTo = s.options.respondTo || "window";
                for (t in r)
                    if (n = s.breakpoints.length - 1, r.hasOwnProperty(t)) {
                        for (i = r[t].breakpoint; n >= 0;) s.breakpoints[n] && s.breakpoints[n] === i && s.breakpoints.splice(n, 1), n--;
                        s.breakpoints.push(i), s.breakpointSettings[i] = r[t].settings
                    }
                s.breakpoints.sort(function(e, t) {
                    return s.options.mobileFirst ? e - t : t - e
                })
            }
        }, t.prototype.reinit = function() {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
        }, t.prototype.resize = function() {
            var t = this;
            e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
            }, 50))
        }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
            var n = this;
            if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : n.slideCount - 1 : !0 === t ? --e : e, n.slideCount < 1 || e < 0 || e > n.slideCount - 1) return !1;
            n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
        }, t.prototype.setCSS = function(e) {
            var t, i, n = this,
                s = {};
            !0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", s[n.positionProp] = e, !1 === n.transformsEnabled ? n.$slideTrack.css(s) : (s = {}, !1 === n.cssTransitions ? (s[n.animType] = "translate(" + t + ", " + i + ")", n.$slideTrack.css(s)) : (s[n.animType] = "translate3d(" + t + ", " + i + ", 0px)", n.$slideTrack.css(s)))
        }, t.prototype.setDimensions = function() {
            var e = this;
            !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
        }, t.prototype.setFade = function() {
            var t, i = this;
            i.$slides.each(function(n, s) {
                t = i.slideWidth * n * -1, !0 === i.options.rtl ? e(s).css({
                    position: "relative",
                    right: t,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                }) : e(s).css({
                    position: "relative",
                    left: t,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                })
            }), i.$slides.eq(i.currentSlide).css({
                zIndex: i.options.zIndex - 1,
                opacity: 1
            })
        }, t.prototype.setHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", t)
            }
        }, t.prototype.setOption = t.prototype.slickSetOption = function() {
            var t, i, n, s, r, o = this,
                a = !1;
            if ("object" === e.type(arguments[0]) ? (n = arguments[0], a = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (n = arguments[0], s = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) o.options[n] = s;
            else if ("multiple" === r) e.each(n, function(e, t) {
                o.options[e] = t
            });
            else if ("responsive" === r)
                for (i in s)
                    if ("array" !== e.type(o.options.responsive)) o.options.responsive = [s[i]];
                    else {
                        for (t = o.options.responsive.length - 1; t >= 0;) o.options.responsive[t].breakpoint === s[i].breakpoint && o.options.responsive.splice(t, 1), t--;
                        o.options.responsive.push(s[i])
                    }
            a && (o.unload(), o.reinit())
        }, t.prototype.setPosition = function() {
            var e = this;
            e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, t.prototype.setProps = function() {
            var e = this,
                t = document.body.style;
            e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
        }, t.prototype.setSlideClasses = function(e) {
            var t, i, n, s, r = this;
            if (i = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode) {
                var o = r.options.slidesToShow % 2 == 0 ? 1 : 0;
                t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + o, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = r.options.slidesToShow + e, i.slice(n - t + 1 + o, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")
            } else e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (s = r.slideCount % r.options.slidesToShow, n = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? i.slice(n - (r.options.slidesToShow - s), n + s).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
        }, t.prototype.setupInfinite = function() {
            var t, i, n, s = this;
            if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (i = null, s.slideCount > s.options.slidesToShow)) {
                for (n = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, t = s.slideCount; t > s.slideCount - n; t -= 1) i = t - 1, e(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
                for (t = 0; t < n + s.slideCount; t += 1) i = t, e(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
                s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    e(this).attr("id", "")
                })
            }
        }, t.prototype.interrupt = function(e) {
            var t = this;
            e || t.autoPlay(), t.interrupted = e
        }, t.prototype.selectHandler = function(t) {
            var i = this,
                n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                s = parseInt(n.attr("data-slick-index"));
            s || (s = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(s, !1, !0) : i.slideHandler(s)
        }, t.prototype.slideHandler = function(e, t, i) {
            var n, s, r, o, a, l = null,
                c = this;
            if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e))
                if (!1 === t && c.asNavFor(e), n = e, l = c.getLeft(n), o = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? o : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(o, function() {
                    c.postSlide(n)
                }) : c.postSlide(n));
                else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(o, function() {
                c.postSlide(n)
            }) : c.postSlide(n));
            else {
                if (c.options.autoplay && clearInterval(c.autoPlayTimer), s = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, s]), r = c.currentSlide, c.currentSlide = s, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(r), c.fadeSlide(s, function() {
                    c.postSlide(s)
                })) : c.postSlide(s), void c.animateHeight();
                !0 !== i ? c.animateSlide(l, function() {
                    c.postSlide(s)
                }) : c.postSlide(s)
            }
        }, t.prototype.startLoad = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, t.prototype.swipeDirection = function() {
            var e, t, i, n, s = this;
            return e = s.touchObject.startX - s.touchObject.curX, t = s.touchObject.startY - s.touchObject.curY, i = Math.atan2(t, e), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 ? !1 === s.options.rtl ? "left" : "right" : n <= 360 && n >= 315 ? !1 === s.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
        }, t.prototype.swipeEnd = function(e) {
            var t, i, n = this;
            if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1, !1;
            if (n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
            if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                switch (i = n.swipeDirection()) {
                    case "left":
                    case "down":
                        t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
                }
                "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
            } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
        }, t.prototype.swipeHandler = function(e) {
            var t = this;
            if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;
                case "move":
                    t.swipeMove(e);
                    break;
                case "end":
                    t.swipeEnd(e)
            }
        }, t.prototype.swipeMove = function(e) {
            var t, i, n, s, r, o, a = this;
            return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), o = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && o > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = o), i = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), s = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (s = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + n * s : a.swipeLeft = t + n * (a.$list.height() / a.listWidth) * s, !0 === a.options.verticalSwiping && (a.swipeLeft = t + n * s), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
        }, t.prototype.swipeStart = function(e) {
            var t, i = this;
            if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
            void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, i.dragging = !0
        }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, t.prototype.unload = function() {
            var t = this;
            e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, t.prototype.unslick = function(e) {
            var t = this;
            t.$slider.trigger("unslick", [t, e]), t.destroy()
        }, t.prototype.updateArrows = function() {
            var e = this;
            Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, t.prototype.updateDots = function() {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
        }, t.prototype.visibility = function() {
            var e = this;
            e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
        }, e.fn.slick = function() {
            var e, i, n = this,
                s = arguments[0],
                r = Array.prototype.slice.call(arguments, 1),
                o = n.length;
            for (e = 0; e < o; e++)
                if ("object" == typeof s || void 0 === s ? n[e].slick = new t(n[e], s) : i = n[e].slick[s].apply(n[e].slick, r), void 0 !== i) return i;
            return n
        }
    }),
    function(e) {
        e.fn.cardtable = function(t) {
            var i = this,
                n = {
                    headIndex: 0
                },
                s = e.extend({}, n, t);
            return t && t.headIndex ? t.headIndex : 0, i.each(function() {
                var t = e(this);
                if (!t.hasClass("stacktable")) {
                    var i = e(this).prop("class"),
                        n = e("<div></div>");
                    void 0 !== s.myClass && n.addClass(s.myClass);
                    var r, o, a, l, c, u = "";
                    t.addClass("stacktable large-only"), r = t.find(">caption").clone(), o = t.find(">thead>tr,>tbody>tr,>tfoot>tr,>tr").eq(0), t.siblings().filter(".small-only").remove(), t.find(">tbody>tr").each(function() {
                        a = "", l = "", c = e(this).prop("class"), e(this).find(">td,>th").each(function(t) {
                            "" !== e(this).html() && (l += '<tr class="' + c + '">', o.find(">td,>th").eq(t).html() ? l += '<td class="st-key">' + o.find(">td,>th").eq(t).html() + "</td>" : l += '<td class="st-key"></td>', l += '<td class="st-val ' + e(this).prop("class") + '">' + e(this).html() + "</td>", l += "</tr>")
                        }), u += '<table class=" ' + i + ' stacktable small-only"><tbody>' + a + l + "</tbody></table>"
                    }), t.find(">tfoot>tr>td").each(function(t, n) {
                        "" !== e.trim(e(n).text()) && (u += '<table class="' + i + ' stacktable small-only"><tbody><tr><td>' + e(n).html() + "</td></tr></tbody></table>")
                    }), n.prepend(r), n.append(e(u)), t.before(n)
                }
            })
        }, e.fn.stacktable = function(t) {
            var i, n = this,
                s = {
                    headIndex: 0,
                    displayHeader: !0
                },
                r = e.extend({}, s, t);
            return i = t && t.headIndex ? t.headIndex : 0, n.each(function() {
                var t = e(this).prop("class"),
                    n = e('<table class="' + t + ' stacktable small-only"><tbody></tbody></table>');
                void 0 !== r.myClass && n.addClass(r.myClass);
                var s, o, a, l, c, u, d, p = "";
                s = e(this), s.addClass("stacktable large-only"), o = s.find(">caption").clone(), a = s.find(">thead>tr,>tbody>tr,>tfoot>tr").eq(0), d = void 0 === s.data("display-header") ? r.displayHeader : s.data("display-header"), s.find(">tbody>tr, >thead>tr").each(function(t) {
                    l = "", c = "", u = e(this).prop("class"), 0 === t ? d && (p += '<tr class=" ' + u + ' "><th class="st-head-row st-head-row-main" colspan="2">' + e(this).find(">th,>td").eq(i).html() + "</th></tr>") : (e(this).find(">td,>th").each(function(t) {
                        t === i ? l = '<tr class="' + u + '"><th class="st-head-row" colspan="2">' + e(this).html() + "</th></tr>" : "" !== e(this).html() && (c += '<tr class="' + u + '">', a.find(">td,>th").eq(t).html() ? c += '<td class="st-key">' + a.find(">td,>th").eq(t).html() + "</td>" : c += '<td class="st-key"></td>', c += '<td class="st-val ' + e(this).prop("class") + '">' + e(this).html() + "</td>", c += "</tr>")
                    }), p += l + c)
                }), n.prepend(o), n.append(e(p)), s.before(n)
            })
        }, e.fn.stackcolumns = function(t) {
            var i = this,
                n = {},
                s = e.extend({}, n, t);
            return i.each(function() {
                var t = e(this),
                    i = t.find(">caption").clone(),
                    n = t.find(">thead>tr,>tbody>tr,>tfoot>tr").eq(0).find(">td,>th").length;
                if (!(n < 3)) {
                    var r = e('<table class="stacktable small-only"></table>');
                    void 0 !== s.myClass && r.addClass(s.myClass), t.addClass("stacktable large-only");
                    for (var o = e("<tbody></tbody>"), a = 1; a < n;) t.find(">thead>tr,>tbody>tr,>tfoot>tr").each(function(t) {
                        var i = e("<tr></tr>");
                        0 === t && i.addClass("st-head-row st-head-row-main");
                        var n = e(this).find(">td,>th").eq(0).clone().addClass("st-key"),
                            s = a;
                        if (e(this).find("*[colspan]").length) {
                            var r = 0;
                            e(this).find(">td,>th").each(function() {
                                var t = e(this).attr("colspan");
                                if (t ? (t = parseInt(t, 10), s -= t - 1, r + t > a && (s += r + t - a - 1), r += t) : r++, r > a) return !1
                            })
                        }
                        var l = e(this).find(">td,>th").eq(s).clone().addClass("st-val").removeAttr("colspan");
                        i.append(n, l), o.append(i)
                    }), ++a;
                    r.append(e(o)), r.prepend(i), t.before(r)
                }
            })
        }
    }(jQuery),
    function(e) {
        "use strict";
        var t = null,
            i = null,
            n = [],
            s = !1,
            r = !1,
            o = function(t) {
                t = e.extend({}, {
                    fadingDuration: t && t.fadeSpeed || 0,
                    containerMargin: 5,
                    displayContainerInside: "window"
                }, t), this.each(function() {
                    var i = e(this).addClass("simpleselected"),
                        n = e('<div class="simpleselect"></div>'),
                        r = e('<div class="placeholder"></div>').appendTo(n),
                        o = e('<div class="options"></div>').appendTo(n),
                        a = i.attr("id");
                    a && n.attr("id", "simpleselect_" + a), i.off("change"), i.attr("size", 2);
                    var l = {
                        select: i,
                        selectOptions: null,
                        simpleselect: n,
                        ssPlaceholder: r,
                        ssOptionsContainer: o,
                        ssOptionsContainerHeight: null,
                        ssOptions: null,
                        canBeClosed: !0,
                        isActive: !1,
                        isScrollable: !1,
                        isDisabled: !1,
                        options: t
                    };
                    n.data("simpleselect", l).on({
                        mousedown: function() {
                            l.canBeClosed = !1
                        },
                        click: function(t) {
                            var i = e(t.target);
                            i.hasClass("placeholder") ? b.setActive.call(l) : i.hasClass("option") && (s = !0, f.call(l, i), b.setInactive.call(l))
                        },
                        mouseup: function() {
                            l.canBeClosed = !0
                        },
                        mouseover: function(t) {
                            var i = e(t.target);
                            i.hasClass("option") && p.call(l, i)
                        }
                    }), i.data("simpleselect", l).on({
                        keydown: function(e) {
                            13 == e.keyCode && b.setInactive.call(l)
                        },
                        focus: function() {
                            s || b.setActive.call(l)
                        },
                        blur: function() {
                            l.canBeClosed && b.setInactive.call(l)
                        },
                        change: function(e, t) {
                            t || e.stopImmediatePropagation();
                            var i = h.call(l);
                            p.call(l, i, !0)
                        },
                        click: function(e) {
                            e.stopPropagation()
                        }
                    }), i.after(n);
                    var c = e('<div class="hidden_select_container"></div>');
                    i.after(c).appendTo(c), u.call(l), d.call(l), b.updatePresentationDependentVariables.call(l)
                })
            },
            a = function() {
                t = e(window).height()
            },
            l = function(e) {
                n.push(e)
            },
            c = function(t) {
                n = e.grep(n, function(e) {
                    return e !== t
                })
            },
            u = function() {
                this.selectOptions = this.select.find("option");
                var t = "",
                    i = function(e) {
                        t += '<div class="option">' + e.text() + "</div>"
                    },
                    n = function(n) {
                        t += '<div class="optgroup">';
                        var r = n.attr("label");
                        r && (t += '<div class="optgroup-label">' + s(r) + "</div>"), n.children("option").each(function() {
                            i(e(this))
                        }), t += "</div>"
                    },
                    s = function(e) {
                        return e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                    },
                    r = !1;
                this.select.children("optgroup, option").each(function() {
                    var t = e(this);
                    t.is("optgroup") ? (n(t), r = !0) : i(t)
                }), this.ssOptions = this.ssOptionsContainer.html(t).find(".option"), this.ssPlaceholder.text(h.call(this).text())
            },
            d = function() {
                this.isDisabled = this.select.prop("disabled"), this.simpleselect[this.isDisabled ? "addClass" : "removeClass"]("disabled")
            },
            p = function(e, t) {
                if (this.ssOptions.removeClass("active"), e.addClass("active"), t && this.isScrollable) {
                    var i, n = e.position(),
                        s = this.ssOptionsContainer.scrollTop(),
                        r = n.top,
                        o = this.ssOptionsContainer.height() - (n.top + e.outerHeight());
                    r < 0 ? i = s + r : o < 0 && (i = s - o), this.ssOptionsContainer.scrollTop(i)
                }
            },
            h = function() {
                var t = m.call(this),
                    i = t.length ? this.selectOptions.index(t) : 0;
                return e(this.ssOptions[i])
            },
            f = function(t) {
                var i = e(this.selectOptions[this.ssOptions.index(t)]);
                this.select.val(i.val())
            },
            m = function() {
                return this.selectOptions.filter(":selected").first()
            },
            g = function() {
                this.ssOptionsContainer.css({
                    height: "auto",
                    "overflow-y": "visible"
                })
            },
            v = function() {
                this.ssOptionsContainer.hide(), this.ssOptionsContainer[0].offsetHeight, this.ssOptionsContainer.show()
            },
            y = function(n) {
                g.call(this);
                var s, r, o, a, l, c, u, d = "window" == this.options.displayContainerInside,
                    p = e.proxy(function() {
                        s = n.position(), r = this.ssPlaceholderOffset.top - this.options.containerMargin - (d ? e(window).scrollTop() : 0), o = (d ? t : i) - r - this.ssPlaceholderHeight - 2 * this.options.containerMargin, a = r - s.top, l = o - (this.ssOptionsContainerOuterHeight - s.top - this.ssPlaceholderHeight), c = a < 0 ? Math.abs(a) : 0, u = l < 0 ? Math.abs(l) : 0
                    }, this);
                p();
                var h = this.isScrollable;
                if (this.isScrollable = a < 0 || l < 0, this.isScrollable) {
                    this.ssOptionsContainer.css({
                        height: "auto",
                        "overflow-y": "scroll"
                    }), this.ssOptionsContainer.height() != this.ssOptionsContainerHeight && (v.call(this), b.updatePresentationDependentVariables.call(this, "ssOptionsContainer", !1), p());
                    var f = this.ssOptionsContainer.height() - c - u;
                    this.ssOptionsContainer.css({
                        top: -(s.top - c)
                    }).height(f).scrollTop(c)
                } else this.ssOptionsContainer.css({
                    top: -s.top
                }), h && v.call(this)
            },
            b = {
                updatePresentationDependentVariables: function(e, t) {
                    e && "ssPlaceholder" != e || (this.ssPlaceholderOffset = this.ssPlaceholder.offset(), this.ssPlaceholderHeight = this.ssPlaceholder.outerHeight()), e && "ssOptionsContainer" != e || (!1 !== t && g.call(this), this.ssOptionsContainerOuterHeight = this.ssOptionsContainer.outerHeight(!0), this.ssOptionsContainerHeight = this.ssOptionsContainer.height())
                },
                refreshContents: function() {
                    u.call(this), b.updatePresentationDependentVariables.call(this)
                },
                refreshState: function() {
                    d.call(this)
                },
                disable: function() {
                    this.select.prop("disabled", !0), b.refreshState.call(this)
                },
                enable: function() {
                    this.select.prop("disabled", !1), b.refreshState.call(this)
                },
                setActive: function() {
                    if (!this.isActive && !this.isDisabled && this.ssOptions.length) {
                        this.lastValue = this.select.val(), this.simpleselect.addClass("active"), this.isActive = !0, l.call(this, this.simpleselect);
                        var t = h.call(this);
                        p.call(this, t), i = e(document).height(), this.ssOptionsContainer.fadeTo(0, 0).fadeTo(this.options.fadingDuration, 1), this.select.is(":focus") || this.select.focus(), y.call(this, t), r = !0
                    }
                },
                setInactive: function() {
                    if (this.isActive) {
                        this.simpleselect.removeClass("active"), this.isActive = !1, c.call(this, this.simpleselect), this.ssOptionsContainer.fadeOut(this.options.fadingDuration), this.select.is(":focus") && this.select.blur();
                        var e = this.select.val();
                        this.lastValue != e && (this.ssPlaceholder.text(m.call(this).text()), this.select.trigger("change", [!0]))
                    }
                }
            };
        e.fn.simpleselect = function(t) {
            if (b[t]) {
                var i = Array.prototype.slice.call(arguments, 1);
                this.each(function() {
                    b[t].apply(e(this).data("simpleselect"), i)
                })
            } else o.apply(this, arguments);
            return this
        }, e(document).ready(function() {
            a(), e(window).on("resize.simpleselect", function() {
                a()
            }), e(document).on("click.simpleselect keyup.simpleselect", function(e) {
                if ("click" == e.type && (setTimeout(function() {
                        s = !1
                    }, 0), r)) return void(r = !1);
                if ("click" == e.type || "keyup" == e.type && 27 == e.keyCode) {
                    var t = n.length;
                    if (t)
                        for (var i = n.slice(0), o = 0; o < t; o++) i[o].simpleselect("setInactive")
                }
            })
        })
    }(jQuery),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : jQuery && !jQuery.fn.hoverIntent && e(jQuery)
    }(function(e) {
        "use strict";
        var t, i, n = {
                interval: 100,
                sensitivity: 6,
                timeout: 0
            },
            s = 0,
            r = function(e) {
                t = e.pageX, i = e.pageY
            },
            o = function(e, n, s, a) {
                if (Math.sqrt((s.pX - t) * (s.pX - t) + (s.pY - i) * (s.pY - i)) < a.sensitivity) return n.off(s.event, r), delete s.timeoutId, s.isActive = !0, e.pageX = t, e.pageY = i, delete s.pX, delete s.pY, a.over.apply(n[0], [e]);
                s.pX = t, s.pY = i, s.timeoutId = setTimeout(function() {
                    o(e, n, s, a)
                }, a.interval)
            },
            a = function(e, t, i, n) {
                return delete t.data("hoverIntent")[i.id], n.apply(t[0], [e])
            };
        e.fn.hoverIntent = function(t, i, l) {
            var c = s++,
                u = e.extend({}, n);
            e.isPlainObject(t) ? (u = e.extend(u, t), e.isFunction(u.out) || (u.out = u.over)) : u = e.isFunction(i) ? e.extend(u, {
                over: t,
                out: i,
                selector: l
            }) : e.extend(u, {
                over: t,
                out: t,
                selector: i
            });
            var d = function(t) {
                var i = e.extend({}, t),
                    n = e(this),
                    s = n.data("hoverIntent");
                s || n.data("hoverIntent", s = {});
                var l = s[c];
                l || (s[c] = l = {
                    id: c
                }), l.timeoutId && (l.timeoutId = clearTimeout(l.timeoutId));
                var d = l.event = "mousemove.hoverIntent.hoverIntent" + c;
                if ("mouseenter" === t.type) {
                    if (l.isActive) return;
                    l.pX = i.pageX, l.pY = i.pageY, n.off(d, r).on(d, r), l.timeoutId = setTimeout(function() {
                        o(i, n, l, u)
                    }, u.interval)
                } else {
                    if (!l.isActive) return;
                    n.off(d, r), l.timeoutId = setTimeout(function() {
                        a(i, n, l, u.out)
                    }, u.timeout)
                }
            };
            return this.on({
                "mouseenter.hoverIntent": d,
                "mouseleave.hoverIntent": d
            }, u.selector)
        }
    }),
    function(e) {
        var t = function(t, i, s, r) {
                if (e(t).length > 0) {
                    var o = e(t).offset().top;
                    i = r ? i : 0, e("." + n.settings.className + "__focused-section").removeClass(n.settings.className + "__focused-section"), e(t).addClass(n.settings.className + "__focused-section"), e("html:not(:animated),body:not(:animated)").animate({
                        scrollTop: o - s
                    }, i)
                }
            },
            i = function() {
                return window.location.hash
            },
            n = {
                classes: {
                    loading: "sn-loading",
                    failed: "sn-failed",
                    success: "sn-active"
                },
                defaults: {
                    sections: "h2",
                    subSections: !1,
                    sectionElem: "section",
                    className: "scroll-nav",
                    showHeadline: !0,
                    headlineText: "Scroll To",
                    showTopLink: !0,
                    topLinkText: "Top",
                    fixedMargin: 40,
                    scrollOffset: 40,
                    animated: !0,
                    speed: 500,
                    insertLocation: "insertBefore",
                    arrowKeys: !1,
                    scrollToHash: !0,
                    onInit: null,
                    onRender: null,
                    onDestroy: null,
                    onResetPos: null
                },
                _set_body_class: function(t) {
                    var i = e("body");
                    "loading" === t ? i.addClass(n.classes.loading) : "success" === t ? i.removeClass(n.classes.loading).addClass(n.classes.success) : i.removeClass(n.classes.loading).addClass(n.classes.failed)
                },
                _find_sections: function(t) {
                    var i = n.settings.sections,
                        s = [];
                    if (n.settings.showTopLink) {
                        var r = t.children().first();
                        r.is(i) || s.push(r.nextUntil(i).addBack())
                    }
                    t.find(i).each(function() {
                        s.push(e(this).nextUntil(i).addBack())
                    }), n.sections = {
                        raw: s
                    }
                },
                _setup_sections: function(t) {
                    var i = [];
                    e(t).each(function(t) {
                        var s = [],
                            r = e(this),
                            o = "scrollNav-" + (t + 1),
                            a = n.settings.showTopLink && function() {
                                return 0 === t
                            }() && function() {
                                return !r.eq(0).is(n.settings.sections)
                            }() ? n.settings.topLinkText : r.filter(n.settings.sections).text();
                        if (r.wrapAll("<" + n.settings.sectionElem + ' id="' + o + '" class="' + n.settings.className + '__section" />'), n.settings.subSections) {
                            var l = r.filter(n.settings.subSections);
                            l.length > 0 && l.each(function(t) {
                                var i = o + "-" + (t + 1),
                                    a = e(this).text();
                                r.filter(e(this).nextUntil(l).addBack()).wrapAll('<div id="' + i + '" class="' + n.settings.className + '__sub-section" />'), s.push({
                                    id: i,
                                    text: a
                                })
                            })
                        }
                        i.push({
                            id: o,
                            text: a,
                            sub_sections: s
                        })
                    }), n.sections.data = i
                },
                _tear_down_sections: function(t) {
                    e(t).each(function() {
                        var t = this.sub_sections;
                        e("#" + this.id).children().unwrap(), t.length > 0 && e(t).each(function() {
                            e("#" + this.id).children().unwrap()
                        })
                    })
                },
                _setup_nav: function(t) {
                    var i = e("<span />", {
                            class: n.settings.className + "__heading",
                            text: n.settings.headlineText
                        }),
                        s = e("<div />", {
                            class: n.settings.className + "__wrapper"
                        }),
                        r = e("<nav />", {
                            class: n.settings.className,
                            role: "navigation"
                        }),
                        o = e("<ol />", {
                            class: n.settings.className + "__list"
                        });
                    e.each(t, function(t) {
                        var i, s = 0 === t ? e("<li />", {
                                class: n.settings.className + "__item " + n.settings.className + "__item--active active"
                            }) : e("<li />", {
                                class: n.settings.className + "__item"
                            }),
                            r = e("<a />", {
                                href: "#" + this.id,
                                class: n.settings.className + "__link",
                                text: this.text
                            });
                        this.sub_sections.length > 0 && (s.addClass("is-parent-item"), i = e("<ol />", {
                            class: n.settings.className + "__sub-list"
                        }), e.each(this.sub_sections, function() {
                            var t = e("<li />", {
                                    class: n.settings.className + "__sub-item"
                                }),
                                s = e("<a />", {
                                    href: "#" + this.id,
                                    class: n.settings.className + "__sub-link",
                                    text: this.text
                                });
                            i.append(t.append(s))
                        })), o.append(s.append(r).append(i))
                    }), n.settings.showHeadline ? r.append(s.append(i).append(o)) : r.append(s.append(o)), n.nav = r
                },
                _insert_nav: function() {
                    var e = n.settings.insertLocation,
                        t = n.settings.insertTarget;
                    n.nav[e](t)
                },
                _setup_pos: function() {
                    var t = n.nav,
                        i = e(window).height(),
                        s = t.offset().top,
                        r = function(t) {
                            var i = e("#" + t.id),
                                n = i.height();
                            t.top_offset = i.offset().top, t.bottom_offset = t.top_offset + n
                        };
                    e.each(n.sections.data, function() {
                        r(this), e.each(this.sub_sections, function() {
                            r(this)
                        })
                    }), n.dims = {
                        vp_height: i,
                        nav_offset: s
                    }
                },
                _check_pos: function() {
                    var t = n.nav,
                        i = e(window).scrollTop(),
                        s = i + n.settings.scrollOffset,
                        r = i + n.dims.vp_height - n.settings.scrollOffset,
                        o = [],
                        a = [];
                    i > n.dims.nav_offset - n.settings.fixedMargin ? t.addClass("fixed") : t.removeClass("fixed");
                    var l = function(e) {
                        return e.top_offset >= s && e.top_offset <= r || e.bottom_offset > s && e.bottom_offset < r || e.top_offset < s && e.bottom_offset > r
                    };
                    e.each(n.sections.data, function() {
                        l(this) && o.push(this), e.each(this.sub_sections, function() {
                            l(this) && a.push(this)
                        })
                    }), t.find("." + n.settings.className + "__item").removeClass(n.settings.className + "__item--active").removeClass("active").removeClass("in-view"), t.find("." + n.settings.className + "__sub-item").removeClass(n.settings.className + "__sub-item--active").removeClass("active").removeClass("in-view"), e.each(o, function(e) {
                        0 === e ? t.find('a[href="#' + this.id + '"]').parents("." + n.settings.className + "__item").addClass(n.settings.className + "__item--active").addClass("active").addClass("in-view") : t.find('a[href="#' + this.id + '"]').parents("." + n.settings.className + "__item").addClass("in-view")
                    }), n.sections.active = o, e.each(a, function(e) {
                        0 === e ? t.find('a[href="#' + this.id + '"]').parents("." + n.settings.className + "__sub-item").addClass(n.settings.className + "__sub-item--active").addClass("active").addClass("in-view") : t.find('a[href="#' + this.id + '"]').parents("." + n.settings.className + "__sub-item").addClass("in-view")
                    })
                },
                _init_scroll_listener: function() {
                    e(window).on("scroll.scrollNav", function() {
                        n._check_pos()
                    })
                },
                _rm_scroll_listeners: function() {
                    e(window).off("scroll.scrollNav")
                },
                _init_resize_listener: function() {
                    e(window).on("resize.scrollNav", function() {
                        n._setup_pos(), n._check_pos()
                    })
                },
                _rm_resize_listener: function() {
                    e(window).off("resize.scrollNav")
                },
                _init_click_listener: function() {
                    e("." + n.settings.className).find("a").on("click.scrollNav", function(i) {
                        i.preventDefault();
                        var s = e(this).attr("href"),
                            r = n.settings.speed,
                            o = n.settings.scrollOffset,
                            a = n.settings.animated;
                        t(s, r, o, a)
                    })
                },
                _rm_click_listener: function() {
                    e("." + n.settings.className).find("a").off("click.scrollNav")
                },
                _init_keyboard_listener: function(i) {
                    n.settings.arrowKeys && e(document).on("keydown.scrollNav", function(e) {
                        if (40 === e.keyCode || 38 === e.keyCode) {
                            var s = function(e) {
                                var t = 0,
                                    s = i.length;
                                for (t; t < s; t++)
                                    if (i[t].id === n.sections.active[0].id) {
                                        var r = 40 === e ? t + 1 : t - 1,
                                            o = void 0 === i[r] ? void 0 : i[r].id;
                                        return o
                                    }
                            }(e.keyCode);
                            if (void 0 !== s) {
                                e.preventDefault();
                                var r = "#" + s,
                                    o = n.settings.speed,
                                    a = n.settings.scrollOffset,
                                    l = n.settings.animated;
                                t(r, o, a, l)
                            }
                        }
                    })
                },
                _rm_keyboard_listener: function() {
                    e(document).off("keydown.scrollNav")
                },
                init: function(s) {
                    return this.each(function() {
                        var r = e(this);
                        n.settings = e.extend({}, n.defaults, s), n.settings.insertTarget = n.settings.insertTarget ? e(n.settings.insertTarget) : r, r.length > 0 ? (n.settings.onInit && n.settings.onInit.call(this), n._set_body_class("loading"), n._find_sections(r), r.find(n.settings.sections).length > 0 ? (n._setup_sections(n.sections.raw), n._setup_nav(n.sections.data), n.settings.insertTarget.length > 0 ? (n._insert_nav(), n._setup_pos(), n._check_pos(), n._init_scroll_listener(), n._init_resize_listener(), n._init_click_listener(), n._init_keyboard_listener(n.sections.data), n._set_body_class("success"), n.settings.scrollToHash && t(i()), n.settings.onRender && n.settings.onRender.call(this)) : (console.log('Build failed, scrollNav could not find "' + n.settings.insertTarget + '"'), n._set_body_class("failed"))) : (console.log('Build failed, scrollNav could not find any "' + n.settings.sections + 's" inside of "' + r.selector + '"'), n._set_body_class("failed"))) : (console.log('Build failed, scrollNav could not find "' + r.selector + '"'), n._set_body_class("failed"))
                    })
                },
                destroy: function() {
                    return this.each(function() {
                        n._rm_scroll_listeners(), n._rm_resize_listener(), n._rm_click_listener(), n._rm_keyboard_listener(), e("body").removeClass("sn-loading sn-active sn-failed"), e("." + n.settings.className).remove(), n._tear_down_sections(n.sections.data), n.settings.onDestroy && n.settings.onDestroy.call(this), n.settings = [], n.sections = void 0
                    })
                },
                resetPos: function() {
                    n._setup_pos(), n._check_pos(), n.settings.onResetPos && n.settings.onResetPos.call(this)
                }
            };
        e.fn.scrollNav = function() {
            var t, i = arguments[0];
            if (n[i]) i = n[i], t = Array.prototype.slice.call(arguments, 1);
            else {
                if ("object" != typeof i && i) return e.error("Method " + i + " does not exist in the scrollNav plugin"), this;
                i = n.init, t = arguments
            }
            return i.apply(this, t)
        }
    }(jQuery),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
    }(this, function() {
        "use strict";

        function e() {
            return Sn.apply(null, arguments)
        }

        function t(e) {
            return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
        }

        function i(e) {
            return null != e && "[object Object]" === Object.prototype.toString.call(e)
        }

        function n(e) {
            if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
            var t;
            for (t in e)
                if (e.hasOwnProperty(t)) return !1;
            return !0
        }

        function s(e) {
            return void 0 === e
        }

        function r(e) {
            return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
        }

        function o(e) {
            return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
        }

        function a(e, t) {
            var i, n = [];
            for (i = 0; i < e.length; ++i) n.push(t(e[i], i));
            return n
        }

        function l(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }

        function c(e, t) {
            for (var i in t) l(t, i) && (e[i] = t[i]);
            return l(t, "toString") && (e.toString = t.toString), l(t, "valueOf") && (e.valueOf = t.valueOf), e
        }

        function u(e, t, i, n) {
            return kt(e, t, i, n, !0).utc()
        }

        function d() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1,
                parsedDateParts: [],
                meridiem: null,
                rfc2822: !1,
                weekdayMismatch: !1
            }
        }

        function p(e) {
            return null == e._pf && (e._pf = d()), e._pf
        }

        function h(e) {
            if (null == e._isValid) {
                var t = p(e),
                    i = $n.call(t.parsedDateParts, function(e) {
                        return null != e
                    }),
                    n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && i);
                if (e._strict && (n = n && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return n;
                e._isValid = n
            }
            return e._isValid
        }

        function f(e) {
            var t = u(NaN);
            return null != e ? c(p(t), e) : p(t).userInvalidated = !0, t
        }

        function m(e, t) {
            var i, n, r;
            if (s(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), s(t._i) || (e._i = t._i), s(t._f) || (e._f = t._f), s(t._l) || (e._l = t._l), s(t._strict) || (e._strict = t._strict), s(t._tzm) || (e._tzm = t._tzm), s(t._isUTC) || (e._isUTC = t._isUTC), s(t._offset) || (e._offset = t._offset), s(t._pf) || (e._pf = p(t)), s(t._locale) || (e._locale = t._locale), An.length > 0)
                for (i = 0; i < An.length; i++) n = An[i], r = t[n], s(r) || (e[n] = r);
            return e
        }

        function g(t) {
            m(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === Fn && (Fn = !0, e.updateOffset(this), Fn = !1)
        }

        function v(e) {
            return e instanceof g || null != e && null != e._isAMomentObject
        }

        function y(e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
        }

        function b(e) {
            var t = +e,
                i = 0;
            return 0 !== t && isFinite(t) && (i = y(t)), i
        }

        function w(e, t, i) {
            var n, s = Math.min(e.length, t.length),
                r = Math.abs(e.length - t.length),
                o = 0;
            for (n = 0; n < s; n++)(i && e[n] !== t[n] || !i && b(e[n]) !== b(t[n])) && o++;
            return o + r
        }

        function x(t) {
            !1 === e.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
        }

        function _(t, i) {
            var n = !0;
            return c(function() {
                if (null != e.deprecationHandler && e.deprecationHandler(null, t), n) {
                    for (var s, r = [], o = 0; o < arguments.length; o++) {
                        if (s = "", "object" == typeof arguments[o]) {
                            s += "\n[" + o + "] ";
                            for (var a in arguments[0]) s += a + ": " + arguments[0][a] + ", ";
                            s = s.slice(0, -2)
                        } else s = arguments[o];
                        r.push(s)
                    }
                    x(t + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack), n = !1
                }
                return i.apply(this, arguments)
            }, i)
        }

        function k(t, i) {
            null != e.deprecationHandler && e.deprecationHandler(t, i), Pn[t] || (x(i), Pn[t] = !0)
        }

        function C(e) {
            return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
        }

        function T(e) {
            var t, i;
            for (i in e) t = e[i], C(t) ? this[i] = t : this["_" + i] = t;
            this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
        }

        function S(e, t) {
            var n, s = c({}, e);
            for (n in t) l(t, n) && (i(e[n]) && i(t[n]) ? (s[n] = {}, c(s[n], e[n]), c(s[n], t[n])) : null != t[n] ? s[n] = t[n] : delete s[n]);
            for (n in e) l(e, n) && !l(t, n) && i(e[n]) && (s[n] = c({}, s[n]));
            return s
        }

        function $(e) {
            null != e && this.set(e)
        }

        function A(e, t, i) {
            var n = this._calendar[e] || this._calendar.sameElse;
            return C(n) ? n.call(t, i) : n
        }

        function F(e) {
            var t = this._longDateFormat[e],
                i = this._longDateFormat[e.toUpperCase()];
            return t || !i ? t : (this._longDateFormat[e] = i.replace(/MMMM|MM|DD|dddd/g, function(e) {
                return e.slice(1)
            }), this._longDateFormat[e])
        }

        function P() {
            return this._invalidDate
        }

        function M(e) {
            return this._ordinal.replace("%d", e)
        }

        function D(e, t, i, n) {
            var s = this._relativeTime[i];
            return C(s) ? s(e, t, i, n) : s.replace(/%d/i, e)
        }

        function O(e, t) {
            var i = this._relativeTime[e > 0 ? "future" : "past"];
            return C(i) ? i(t) : i.replace(/%s/i, t)
        }

        function E(e, t) {
            var i = e.toLowerCase();
            jn[i] = jn[i + "s"] = jn[t] = e
        }

        function N(e) {
            return "string" == typeof e ? jn[e] || jn[e.toLowerCase()] : void 0
        }

        function j(e) {
            var t, i, n = {};
            for (i in e) l(e, i) && (t = N(i)) && (n[t] = e[i]);
            return n
        }

        function L(e, t) {
            Ln[e] = t
        }

        function q(e) {
            var t = [];
            for (var i in e) t.push({
                unit: i,
                priority: Ln[i]
            });
            return t.sort(function(e, t) {
                return e.priority - t.priority
            }), t
        }

        function z(e, t, i) {
            var n = "" + Math.abs(e),
                s = t - n.length;
            return (e >= 0 ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + n
        }

        function H(e, t, i, n) {
            var s = n;
            "string" == typeof n && (s = function() {
                return this[n]()
            }), e && (Wn[e] = s), t && (Wn[t[0]] = function() {
                return z(s.apply(this, arguments), t[1], t[2])
            }), i && (Wn[i] = function() {
                return this.localeData().ordinal(s.apply(this, arguments), e)
            })
        }

        function W(e) {
            return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
        }

        function Y(e) {
            var t, i, n = e.match(qn);
            for (t = 0, i = n.length; t < i; t++) Wn[n[t]] ? n[t] = Wn[n[t]] : n[t] = W(n[t]);
            return function(t) {
                var s, r = "";
                for (s = 0; s < i; s++) r += C(n[s]) ? n[s].call(t, e) : n[s];
                return r
            }
        }

        function I(e, t) {
            return e.isValid() ? (t = V(t, e.localeData()), Hn[t] = Hn[t] || Y(t), Hn[t](e)) : e.localeData().invalidDate()
        }

        function V(e, t) {
            function i(e) {
                return t.longDateFormat(e) || e
            }
            var n = 5;
            for (zn.lastIndex = 0; n >= 0 && zn.test(e);) e = e.replace(zn, i), zn.lastIndex = 0, n -= 1;
            return e
        }

        function R(e, t, i) {
            rs[e] = C(t) ? t : function(e, n) {
                return e && i ? i : t
            }
        }

        function B(e, t) {
            return l(rs, e) ? rs[e](t._strict, t._locale) : new RegExp(Z(e))
        }

        function Z(e) {
            return G(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, i, n, s) {
                return t || i || n || s
            }))
        }

        function G(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function U(e, t) {
            var i, n = t;
            for ("string" == typeof e && (e = [e]), r(t) && (n = function(e, i) {
                    i[t] = b(e)
                }), i = 0; i < e.length; i++) os[e[i]] = n
        }

        function X(e, t) {
            U(e, function(e, i, n, s) {
                n._w = n._w || {}, t(e, n._w, n, s)
            })
        }

        function Q(e, t, i) {
            null != t && l(os, e) && os[e](t, i._a, i, e)
        }

        function J(e) {
            return K(e) ? 366 : 365
        }

        function K(e) {
            return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
        }

        function ee() {
            return K(this.year())
        }

        function te(t, i) {
            return function(n) {
                return null != n ? (ne(this, t, n), e.updateOffset(this, i), this) : ie(this, t)
            }
        }

        function ie(e, t) {
            return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
        }

        function ne(e, t, i) {
            e.isValid() && !isNaN(i) && ("FullYear" === t && K(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](i, e.month(), ae(i, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](i))
        }

        function se(e) {
            return e = N(e), C(this[e]) ? this[e]() : this
        }

        function re(e, t) {
            if ("object" == typeof e) {
                e = j(e);
                for (var i = q(e), n = 0; n < i.length; n++) this[i[n].unit](e[i[n].unit])
            } else if (e = N(e), C(this[e])) return this[e](t);
            return this
        }

        function oe(e, t) {
            return (e % t + t) % t
        }

        function ae(e, t) {
            if (isNaN(e) || isNaN(t)) return NaN;
            var i = oe(t, 12);
            return e += (t - i) / 12, 1 === i ? K(e) ? 29 : 28 : 31 - i % 7 % 2
        }

        function le(e, i) {
            return e ? t(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || ys).test(i) ? "format" : "standalone"][e.month()] : t(this._months) ? this._months : this._months.standalone
        }

        function ce(e, i) {
            return e ? t(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[ys.test(i) ? "format" : "standalone"][e.month()] : t(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
        }

        function ue(e, t, i) {
            var n, s, r, o = e.toLocaleLowerCase();
            if (!this._monthsParse)
                for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) r = u([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(r, "").toLocaleLowerCase();
            return i ? "MMM" === t ? (s = gs.call(this._shortMonthsParse, o), -1 !== s ? s : null) : (s = gs.call(this._longMonthsParse, o), -1 !== s ? s : null) : "MMM" === t ? -1 !== (s = gs.call(this._shortMonthsParse, o)) ? s : (s = gs.call(this._longMonthsParse, o), -1 !== s ? s : null) : -1 !== (s = gs.call(this._longMonthsParse, o)) ? s : (s = gs.call(this._shortMonthsParse, o), -1 !== s ? s : null)
        }

        function de(e, t, i) {
            var n, s, r;
            if (this._monthsParseExact) return ue.call(this, e, t, i);
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
                if (s = u([2e3, n]), i && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), i || this._monthsParse[n] || (r = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[n] = new RegExp(r.replace(".", ""), "i")), i && "MMMM" === t && this._longMonthsParse[n].test(e)) return n;
                if (i && "MMM" === t && this._shortMonthsParse[n].test(e)) return n;
                if (!i && this._monthsParse[n].test(e)) return n
            }
        }

        function pe(e, t) {
            var i;
            if (!e.isValid()) return e;
            if ("string" == typeof t)
                if (/^\d+$/.test(t)) t = b(t);
                else if (t = e.localeData().monthsParse(t), !r(t)) return e;
            return i = Math.min(e.date(), ae(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, i), e
        }

        function he(t) {
            return null != t ? (pe(this, t), e.updateOffset(this, !0), this) : ie(this, "Month")
        }

        function fe() {
            return ae(this.year(), this.month())
        }

        function me(e) {
            return this._monthsParseExact ? (l(this, "_monthsRegex") || ve.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = xs), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
        }

        function ge(e) {
            return this._monthsParseExact ? (l(this, "_monthsRegex") || ve.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = _s), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
        }

        function ve() {
            function e(e, t) {
                return t.length - e.length
            }
            var t, i, n = [],
                s = [],
                r = [];
            for (t = 0; t < 12; t++) i = u([2e3, t]), n.push(this.monthsShort(i, "")), s.push(this.months(i, "")), r.push(this.months(i, "")), r.push(this.monthsShort(i, ""));
            for (n.sort(e), s.sort(e), r.sort(e), t = 0; t < 12; t++) n[t] = G(n[t]), s[t] = G(s[t]);
            for (t = 0; t < 24; t++) r[t] = G(r[t]);
            this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
        }

        function ye(e, t, i, n, s, r, o) {
            var a = new Date(e, t, i, n, s, r, o);
            return e < 100 && e >= 0 && isFinite(a.getFullYear()) && a.setFullYear(e), a
        }

        function be(e) {
            var t = new Date(Date.UTC.apply(null, arguments));
            return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
        }

        function we(e, t, i) {
            var n = 7 + t - i;
            return -(7 + be(e, 0, n).getUTCDay() - t) % 7 + n - 1
        }

        function xe(e, t, i, n, s) {
            var r, o, a = (7 + i - n) % 7,
                l = we(e, n, s),
                c = 1 + 7 * (t - 1) + a + l;
            return c <= 0 ? (r = e - 1, o = J(r) + c) : c > J(e) ? (r = e + 1, o = c - J(e)) : (r = e, o = c), {
                year: r,
                dayOfYear: o
            }
        }

        function _e(e, t, i) {
            var n, s, r = we(e.year(), t, i),
                o = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
            return o < 1 ? (s = e.year() - 1, n = o + ke(s, t, i)) : o > ke(e.year(), t, i) ? (n = o - ke(e.year(), t, i), s = e.year() + 1) : (s = e.year(), n = o), {
                week: n,
                year: s
            }
        }

        function ke(e, t, i) {
            var n = we(e, t, i),
                s = we(e + 1, t, i);
            return (J(e) - n + s) / 7
        }

        function Ce(e) {
            return _e(e, this._week.dow, this._week.doy).week
        }

        function Te() {
            return this._week.dow
        }

        function Se() {
            return this._week.doy
        }

        function $e(e) {
            var t = this.localeData().week(this);
            return null == e ? t : this.add(7 * (e - t), "d")
        }

        function Ae(e) {
            var t = _e(this, 1, 4).week;
            return null == e ? t : this.add(7 * (e - t), "d")
        }

        function Fe(e, t) {
            return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(e, 10)
        }

        function Pe(e, t) {
            return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
        }

        function Me(e, i) {
            return e ? t(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(i) ? "format" : "standalone"][e.day()] : t(this._weekdays) ? this._weekdays : this._weekdays.standalone
        }

        function De(e) {
            return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
        }

        function Oe(e) {
            return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
        }

        function Ee(e, t, i) {
            var n, s, r, o = e.toLocaleLowerCase();
            if (!this._weekdaysParse)
                for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) r = u([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(r, "").toLocaleLowerCase();
            return i ? "dddd" === t ? (s = gs.call(this._weekdaysParse, o), -1 !== s ? s : null) : "ddd" === t ? (s = gs.call(this._shortWeekdaysParse, o), -1 !== s ? s : null) : (s = gs.call(this._minWeekdaysParse, o), -1 !== s ? s : null) : "dddd" === t ? -1 !== (s = gs.call(this._weekdaysParse, o)) ? s : -1 !== (s = gs.call(this._shortWeekdaysParse, o)) ? s : (s = gs.call(this._minWeekdaysParse, o), -1 !== s ? s : null) : "ddd" === t ? -1 !== (s = gs.call(this._shortWeekdaysParse, o)) ? s : -1 !== (s = gs.call(this._weekdaysParse, o)) ? s : (s = gs.call(this._minWeekdaysParse, o), -1 !== s ? s : null) : -1 !== (s = gs.call(this._minWeekdaysParse, o)) ? s : -1 !== (s = gs.call(this._weekdaysParse, o)) ? s : (s = gs.call(this._shortWeekdaysParse, o), -1 !== s ? s : null)
        }

        function Ne(e, t, i) {
            var n, s, r;
            if (this._weekdaysParseExact) return Ee.call(this, e, t, i);
            for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
                if (s = u([2e3, 1]).day(n), i && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(s, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[n] || (r = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[n] = new RegExp(r.replace(".", ""), "i")), i && "dddd" === t && this._fullWeekdaysParse[n].test(e)) return n;
                if (i && "ddd" === t && this._shortWeekdaysParse[n].test(e)) return n;
                if (i && "dd" === t && this._minWeekdaysParse[n].test(e)) return n;
                if (!i && this._weekdaysParse[n].test(e)) return n
            }
        }

        function je(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != e ? (e = Fe(e, this.localeData()), this.add(e - t, "d")) : t
        }

        function Le(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, "d")
        }

        function qe(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            if (null != e) {
                var t = Pe(e, this.localeData());
                return this.day(this.day() % 7 ? t : t - 7)
            }
            return this.day() || 7
        }

        function ze(e) {
            return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Ye.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = $s), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
        }

        function He(e) {
            return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Ye.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = As), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        }

        function We(e) {
            return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Ye.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Fs), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        }

        function Ye() {
            function e(e, t) {
                return t.length - e.length
            }
            var t, i, n, s, r, o = [],
                a = [],
                l = [],
                c = [];
            for (t = 0; t < 7; t++) i = u([2e3, 1]).day(t), n = this.weekdaysMin(i, ""), s = this.weekdaysShort(i, ""), r = this.weekdays(i, ""), o.push(n), a.push(s), l.push(r), c.push(n), c.push(s), c.push(r);
            for (o.sort(e), a.sort(e), l.sort(e), c.sort(e), t = 0; t < 7; t++) a[t] = G(a[t]), l[t] = G(l[t]), c[t] = G(c[t]);
            this._weekdaysRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")
        }

        function Ie() {
            return this.hours() % 12 || 12
        }

        function Ve() {
            return this.hours() || 24
        }

        function Re(e, t) {
            H(e, 0, 0, function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), t)
            })
        }

        function Be(e, t) {
            return t._meridiemParse
        }

        function Ze(e) {
            return "p" === (e + "").toLowerCase().charAt(0)
        }

        function Ge(e, t, i) {
            return e > 11 ? i ? "pm" : "PM" : i ? "am" : "AM"
        }

        function Ue(e) {
            return e ? e.toLowerCase().replace("_", "-") : e
        }

        function Xe(e) {
            for (var t, i, n, s, r = 0; r < e.length;) {
                for (s = Ue(e[r]).split("-"), t = s.length, i = Ue(e[r + 1]), i = i ? i.split("-") : null; t > 0;) {
                    if (n = Qe(s.slice(0, t).join("-"))) return n;
                    if (i && i.length >= t && w(s, i, !0) >= t - 1) break;
                    t--
                }
                r++
            }
            return Ps
        }

        function Qe(e) {
            var t = null;
            if (!Es[e] && "undefined" != typeof module && module && module.exports) try {
                t = Ps._abbr;
                require("./locale/" + e), Je(t)
            } catch (e) {}
            return Es[e]
        }

        function Je(e, t) {
            var i;
            return e && (i = s(t) ? tt(e) : Ke(e, t), i ? Ps = i : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), Ps._abbr
        }

        function Ke(e, t) {
            if (null !== t) {
                var i, n = Os;
                if (t.abbr = e,
                    null != Es[e]) k("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = Es[e]._config;
                else if (null != t.parentLocale)
                    if (null != Es[t.parentLocale]) n = Es[t.parentLocale]._config;
                    else {
                        if (null == (i = Qe(t.parentLocale))) return Ns[t.parentLocale] || (Ns[t.parentLocale] = []), Ns[t.parentLocale].push({
                            name: e,
                            config: t
                        }), null;
                        n = i._config
                    }
                return Es[e] = new $(S(n, t)), Ns[e] && Ns[e].forEach(function(e) {
                    Ke(e.name, e.config)
                }), Je(e), Es[e]
            }
            return delete Es[e], null
        }

        function et(e, t) {
            if (null != t) {
                var i, n, s = Os;
                n = Qe(e), null != n && (s = n._config), t = S(s, t), i = new $(t), i.parentLocale = Es[e], Es[e] = i, Je(e)
            } else null != Es[e] && (null != Es[e].parentLocale ? Es[e] = Es[e].parentLocale : null != Es[e] && delete Es[e]);
            return Es[e]
        }

        function tt(e) {
            var i;
            if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Ps;
            if (!t(e)) {
                if (i = Qe(e)) return i;
                e = [e]
            }
            return Xe(e)
        }

        function it() {
            return Mn(Es)
        }

        function nt(e) {
            var t, i = e._a;
            return i && -2 === p(e).overflow && (t = i[ls] < 0 || i[ls] > 11 ? ls : i[cs] < 1 || i[cs] > ae(i[as], i[ls]) ? cs : i[us] < 0 || i[us] > 24 || 24 === i[us] && (0 !== i[ds] || 0 !== i[ps] || 0 !== i[hs]) ? us : i[ds] < 0 || i[ds] > 59 ? ds : i[ps] < 0 || i[ps] > 59 ? ps : i[hs] < 0 || i[hs] > 999 ? hs : -1, p(e)._overflowDayOfYear && (t < as || t > cs) && (t = cs), p(e)._overflowWeeks && -1 === t && (t = fs), p(e)._overflowWeekday && -1 === t && (t = ms), p(e).overflow = t), e
        }

        function st(e, t, i) {
            return null != e ? e : null != t ? t : i
        }

        function rt(t) {
            var i = new Date(e.now());
            return t._useUTC ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()] : [i.getFullYear(), i.getMonth(), i.getDate()]
        }

        function ot(e) {
            var t, i, n, s, r, o = [];
            if (!e._d) {
                for (n = rt(e), e._w && null == e._a[cs] && null == e._a[ls] && at(e), null != e._dayOfYear && (r = st(e._a[as], n[as]), (e._dayOfYear > J(r) || 0 === e._dayOfYear) && (p(e)._overflowDayOfYear = !0), i = be(r, 0, e._dayOfYear), e._a[ls] = i.getUTCMonth(), e._a[cs] = i.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = o[t] = n[t];
                for (; t < 7; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                24 === e._a[us] && 0 === e._a[ds] && 0 === e._a[ps] && 0 === e._a[hs] && (e._nextDay = !0, e._a[us] = 0), e._d = (e._useUTC ? be : ye).apply(null, o), s = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[us] = 24), e._w && void 0 !== e._w.d && e._w.d !== s && (p(e).weekdayMismatch = !0)
            }
        }

        function at(e) {
            var t, i, n, s, r, o, a, l;
            if (t = e._w, null != t.GG || null != t.W || null != t.E) r = 1, o = 4, i = st(t.GG, e._a[as], _e(Ct(), 1, 4).year), n = st(t.W, 1), ((s = st(t.E, 1)) < 1 || s > 7) && (l = !0);
            else {
                r = e._locale._week.dow, o = e._locale._week.doy;
                var c = _e(Ct(), r, o);
                i = st(t.gg, e._a[as], c.year), n = st(t.w, c.week), null != t.d ? ((s = t.d) < 0 || s > 6) && (l = !0) : null != t.e ? (s = t.e + r, (t.e < 0 || t.e > 6) && (l = !0)) : s = r
            }
            n < 1 || n > ke(i, r, o) ? p(e)._overflowWeeks = !0 : null != l ? p(e)._overflowWeekday = !0 : (a = xe(i, n, s, r, o), e._a[as] = a.year, e._dayOfYear = a.dayOfYear)
        }

        function lt(e) {
            var t, i, n, s, r, o, a = e._i,
                l = js.exec(a) || Ls.exec(a);
            if (l) {
                for (p(e).iso = !0, t = 0, i = zs.length; t < i; t++)
                    if (zs[t][1].exec(l[1])) {
                        s = zs[t][0], n = !1 !== zs[t][2];
                        break
                    }
                if (null == s) return void(e._isValid = !1);
                if (l[3]) {
                    for (t = 0, i = Hs.length; t < i; t++)
                        if (Hs[t][1].exec(l[3])) {
                            r = (l[2] || " ") + Hs[t][0];
                            break
                        }
                    if (null == r) return void(e._isValid = !1)
                }
                if (!n && null != r) return void(e._isValid = !1);
                if (l[4]) {
                    if (!qs.exec(l[4])) return void(e._isValid = !1);
                    o = "Z"
                }
                e._f = s + (r || "") + (o || ""), gt(e)
            } else e._isValid = !1
        }

        function ct(e, t, i, n, s, r) {
            var o = [ut(e), ws.indexOf(t), parseInt(i, 10), parseInt(n, 10), parseInt(s, 10)];
            return r && o.push(parseInt(r, 10)), o
        }

        function ut(e) {
            var t = parseInt(e, 10);
            return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
        }

        function dt(e) {
            return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
        }

        function pt(e, t, i) {
            if (e) {
                if (Ts.indexOf(e) !== new Date(t[0], t[1], t[2]).getDay()) return p(i).weekdayMismatch = !0, i._isValid = !1, !1
            }
            return !0
        }

        function ht(e, t, i) {
            if (e) return Is[e];
            if (t) return 0;
            var n = parseInt(i, 10),
                s = n % 100;
            return (n - s) / 100 * 60 + s
        }

        function ft(e) {
            var t = Ys.exec(dt(e._i));
            if (t) {
                var i = ct(t[4], t[3], t[2], t[5], t[6], t[7]);
                if (!pt(t[1], i, e)) return;
                e._a = i, e._tzm = ht(t[8], t[9], t[10]), e._d = be.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), p(e).rfc2822 = !0
            } else e._isValid = !1
        }

        function mt(t) {
            var i = Ws.exec(t._i);
            if (null !== i) return void(t._d = new Date(+i[1]));
            lt(t), !1 === t._isValid && (delete t._isValid, ft(t), !1 === t._isValid && (delete t._isValid, e.createFromInputFallback(t)))
        }

        function gt(t) {
            if (t._f === e.ISO_8601) return void lt(t);
            if (t._f === e.RFC_2822) return void ft(t);
            t._a = [], p(t).empty = !0;
            var i, n, s, r, o, a = "" + t._i,
                l = a.length,
                c = 0;
            for (s = V(t._f, t._locale).match(qn) || [], i = 0; i < s.length; i++) r = s[i], n = (a.match(B(r, t)) || [])[0], n && (o = a.substr(0, a.indexOf(n)), o.length > 0 && p(t).unusedInput.push(o), a = a.slice(a.indexOf(n) + n.length), c += n.length), Wn[r] ? (n ? p(t).empty = !1 : p(t).unusedTokens.push(r), Q(r, n, t)) : t._strict && !n && p(t).unusedTokens.push(r);
            p(t).charsLeftOver = l - c, a.length > 0 && p(t).unusedInput.push(a), t._a[us] <= 12 && !0 === p(t).bigHour && t._a[us] > 0 && (p(t).bigHour = void 0), p(t).parsedDateParts = t._a.slice(0), p(t).meridiem = t._meridiem, t._a[us] = vt(t._locale, t._a[us], t._meridiem), ot(t), nt(t)
        }

        function vt(e, t, i) {
            var n;
            return null == i ? t : null != e.meridiemHour ? e.meridiemHour(t, i) : null != e.isPM ? (n = e.isPM(i), n && t < 12 && (t += 12), n || 12 !== t || (t = 0), t) : t
        }

        function yt(e) {
            var t, i, n, s, r;
            if (0 === e._f.length) return p(e).invalidFormat = !0, void(e._d = new Date(NaN));
            for (s = 0; s < e._f.length; s++) r = 0, t = m({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[s], gt(t), h(t) && (r += p(t).charsLeftOver, r += 10 * p(t).unusedTokens.length, p(t).score = r, (null == n || r < n) && (n = r, i = t));
            c(e, i || t)
        }

        function bt(e) {
            if (!e._d) {
                var t = j(e._i);
                e._a = a([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                    return e && parseInt(e, 10)
                }), ot(e)
            }
        }

        function wt(e) {
            var t = new g(nt(xt(e)));
            return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
        }

        function xt(e) {
            var i = e._i,
                n = e._f;
            return e._locale = e._locale || tt(e._l), null === i || void 0 === n && "" === i ? f({
                nullInput: !0
            }) : ("string" == typeof i && (e._i = i = e._locale.preparse(i)), v(i) ? new g(nt(i)) : (o(i) ? e._d = i : t(n) ? yt(e) : n ? gt(e) : _t(e), h(e) || (e._d = null), e))
        }

        function _t(n) {
            var l = n._i;
            s(l) ? n._d = new Date(e.now()) : o(l) ? n._d = new Date(l.valueOf()) : "string" == typeof l ? mt(n) : t(l) ? (n._a = a(l.slice(0), function(e) {
                return parseInt(e, 10)
            }), ot(n)) : i(l) ? bt(n) : r(l) ? n._d = new Date(l) : e.createFromInputFallback(n)
        }

        function kt(e, s, r, o, a) {
            var l = {};
            return !0 !== r && !1 !== r || (o = r, r = void 0), (i(e) && n(e) || t(e) && 0 === e.length) && (e = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = a, l._l = r, l._i = e, l._f = s, l._strict = o, wt(l)
        }

        function Ct(e, t, i, n) {
            return kt(e, t, i, n, !1)
        }

        function Tt(e, i) {
            var n, s;
            if (1 === i.length && t(i[0]) && (i = i[0]), !i.length) return Ct();
            for (n = i[0], s = 1; s < i.length; ++s) i[s].isValid() && !i[s][e](n) || (n = i[s]);
            return n
        }

        function St() {
            return Tt("isBefore", [].slice.call(arguments, 0))
        }

        function $t() {
            return Tt("isAfter", [].slice.call(arguments, 0))
        }

        function At(e) {
            for (var t in e)
                if (-1 === gs.call(Zs, t) || null != e[t] && isNaN(e[t])) return !1;
            for (var i = !1, n = 0; n < Zs.length; ++n)
                if (e[Zs[n]]) {
                    if (i) return !1;
                    parseFloat(e[Zs[n]]) !== b(e[Zs[n]]) && (i = !0)
                }
            return !0
        }

        function Ft() {
            return this._isValid
        }

        function Pt() {
            return Ut(NaN)
        }

        function Mt(e) {
            var t = j(e),
                i = t.year || 0,
                n = t.quarter || 0,
                s = t.month || 0,
                r = t.week || 0,
                o = t.day || 0,
                a = t.hour || 0,
                l = t.minute || 0,
                c = t.second || 0,
                u = t.millisecond || 0;
            this._isValid = At(t), this._milliseconds = +u + 1e3 * c + 6e4 * l + 1e3 * a * 60 * 60, this._days = +o + 7 * r, this._months = +s + 3 * n + 12 * i, this._data = {}, this._locale = tt(), this._bubble()
        }

        function Dt(e) {
            return e instanceof Mt
        }

        function Ot(e) {
            return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
        }

        function Et(e, t) {
            H(e, 0, 0, function() {
                var e = this.utcOffset(),
                    i = "+";
                return e < 0 && (e = -e, i = "-"), i + z(~~(e / 60), 2) + t + z(~~e % 60, 2)
            })
        }

        function Nt(e, t) {
            var i = (t || "").match(e);
            if (null === i) return null;
            var n = i[i.length - 1] || [],
                s = (n + "").match(Gs) || ["-", 0, 0],
                r = 60 * s[1] + b(s[2]);
            return 0 === r ? 0 : "+" === s[0] ? r : -r
        }

        function jt(t, i) {
            var n, s;
            return i._isUTC ? (n = i.clone(), s = (v(t) || o(t) ? t.valueOf() : Ct(t).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + s), e.updateOffset(n, !1), n) : Ct(t).local()
        }

        function Lt(e) {
            return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
        }

        function qt(t, i, n) {
            var s, r = this._offset || 0;
            if (!this.isValid()) return null != t ? this : NaN;
            if (null != t) {
                if ("string" == typeof t) {
                    if (null === (t = Nt(is, t))) return this
                } else Math.abs(t) < 16 && !n && (t *= 60);
                return !this._isUTC && i && (s = Lt(this)), this._offset = t, this._isUTC = !0, null != s && this.add(s, "m"), r !== t && (!i || this._changeInProgress ? ei(this, Ut(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, e.updateOffset(this, !0), this._changeInProgress = null)), this
            }
            return this._isUTC ? r : Lt(this)
        }

        function zt(e, t) {
            return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
        }

        function Ht(e) {
            return this.utcOffset(0, e)
        }

        function Wt(e) {
            return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Lt(this), "m")), this
        }

        function Yt() {
            if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
            else if ("string" == typeof this._i) {
                var e = Nt(ts, this._i);
                null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
            }
            return this
        }

        function It(e) {
            return !!this.isValid() && (e = e ? Ct(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
        }

        function Vt() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }

        function Rt() {
            if (!s(this._isDSTShifted)) return this._isDSTShifted;
            var e = {};
            if (m(e, this), e = xt(e), e._a) {
                var t = e._isUTC ? u(e._a) : Ct(e._a);
                this._isDSTShifted = this.isValid() && w(e._a, t.toArray()) > 0
            } else this._isDSTShifted = !1;
            return this._isDSTShifted
        }

        function Bt() {
            return !!this.isValid() && !this._isUTC
        }

        function Zt() {
            return !!this.isValid() && this._isUTC
        }

        function Gt() {
            return !!this.isValid() && (this._isUTC && 0 === this._offset)
        }

        function Ut(e, t) {
            var i, n, s, o = e,
                a = null;
            return Dt(e) ? o = {
                ms: e._milliseconds,
                d: e._days,
                M: e._months
            } : r(e) ? (o = {}, t ? o[t] = e : o.milliseconds = e) : (a = Us.exec(e)) ? (i = "-" === a[1] ? -1 : 1, o = {
                y: 0,
                d: b(a[cs]) * i,
                h: b(a[us]) * i,
                m: b(a[ds]) * i,
                s: b(a[ps]) * i,
                ms: b(Ot(1e3 * a[hs])) * i
            }) : (a = Xs.exec(e)) ? (i = "-" === a[1] ? -1 : (a[1], 1), o = {
                y: Xt(a[2], i),
                M: Xt(a[3], i),
                w: Xt(a[4], i),
                d: Xt(a[5], i),
                h: Xt(a[6], i),
                m: Xt(a[7], i),
                s: Xt(a[8], i)
            }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (s = Jt(Ct(o.from), Ct(o.to)), o = {}, o.ms = s.milliseconds, o.M = s.months), n = new Mt(o), Dt(e) && l(e, "_locale") && (n._locale = e._locale), n
        }

        function Xt(e, t) {
            var i = e && parseFloat(e.replace(",", "."));
            return (isNaN(i) ? 0 : i) * t
        }

        function Qt(e, t) {
            var i = {
                milliseconds: 0,
                months: 0
            };
            return i.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(i.months, "M").isAfter(t) && --i.months, i.milliseconds = +t - +e.clone().add(i.months, "M"), i
        }

        function Jt(e, t) {
            var i;
            return e.isValid() && t.isValid() ? (t = jt(t, e), e.isBefore(t) ? i = Qt(e, t) : (i = Qt(t, e), i.milliseconds = -i.milliseconds, i.months = -i.months), i) : {
                milliseconds: 0,
                months: 0
            }
        }

        function Kt(e, t) {
            return function(i, n) {
                var s, r;
                return null === n || isNaN(+n) || (k(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = i, i = n, n = r), i = "string" == typeof i ? +i : i, s = Ut(i, n), ei(this, s, e), this
            }
        }

        function ei(t, i, n, s) {
            var r = i._milliseconds,
                o = Ot(i._days),
                a = Ot(i._months);
            t.isValid() && (s = null == s || s, a && pe(t, ie(t, "Month") + a * n), o && ne(t, "Date", ie(t, "Date") + o * n), r && t._d.setTime(t._d.valueOf() + r * n), s && e.updateOffset(t, o || a))
        }

        function ti(e, t) {
            var i = e.diff(t, "days", !0);
            return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse"
        }

        function ii(t, i) {
            var n = t || Ct(),
                s = jt(n, this).startOf("day"),
                r = e.calendarFormat(this, s) || "sameElse",
                o = i && (C(i[r]) ? i[r].call(this, n) : i[r]);
            return this.format(o || this.localeData().calendar(r, this, Ct(n)))
        }

        function ni() {
            return new g(this)
        }

        function si(e, t) {
            var i = v(e) ? e : Ct(e);
            return !(!this.isValid() || !i.isValid()) && (t = N(s(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(t).valueOf())
        }

        function ri(e, t) {
            var i = v(e) ? e : Ct(e);
            return !(!this.isValid() || !i.isValid()) && (t = N(s(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() < i.valueOf() : this.clone().endOf(t).valueOf() < i.valueOf())
        }

        function oi(e, t, i, n) {
            return n = n || "()", ("(" === n[0] ? this.isAfter(e, i) : !this.isBefore(e, i)) && (")" === n[1] ? this.isBefore(t, i) : !this.isAfter(t, i))
        }

        function ai(e, t) {
            var i, n = v(e) ? e : Ct(e);
            return !(!this.isValid() || !n.isValid()) && (t = N(t || "millisecond"), "millisecond" === t ? this.valueOf() === n.valueOf() : (i = n.valueOf(), this.clone().startOf(t).valueOf() <= i && i <= this.clone().endOf(t).valueOf()))
        }

        function li(e, t) {
            return this.isSame(e, t) || this.isAfter(e, t)
        }

        function ci(e, t) {
            return this.isSame(e, t) || this.isBefore(e, t)
        }

        function ui(e, t, i) {
            var n, s, r;
            if (!this.isValid()) return NaN;
            if (n = jt(e, this), !n.isValid()) return NaN;
            switch (s = 6e4 * (n.utcOffset() - this.utcOffset()), t = N(t)) {
                case "year":
                    r = di(this, n) / 12;
                    break;
                case "month":
                    r = di(this, n);
                    break;
                case "quarter":
                    r = di(this, n) / 3;
                    break;
                case "second":
                    r = (this - n) / 1e3;
                    break;
                case "minute":
                    r = (this - n) / 6e4;
                    break;
                case "hour":
                    r = (this - n) / 36e5;
                    break;
                case "day":
                    r = (this - n - s) / 864e5;
                    break;
                case "week":
                    r = (this - n - s) / 6048e5;
                    break;
                default:
                    r = this - n
            }
            return i ? r : y(r)
        }

        function di(e, t) {
            var i, n, s = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                r = e.clone().add(s, "months");
            return t - r < 0 ? (i = e.clone().add(s - 1, "months"), n = (t - r) / (r - i)) : (i = e.clone().add(s + 1, "months"), n = (t - r) / (i - r)), -(s + n) || 0
        }

        function pi() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }

        function hi(e) {
            if (!this.isValid()) return null;
            var t = !0 !== e,
                i = t ? this.clone().utc() : this;
            return i.year() < 0 || i.year() > 9999 ? I(i, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : C(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", I(i, "Z")) : I(i, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
        }

        function fi() {
            if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
            var e = "moment",
                t = "";
            this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
            var i = "[" + e + '("]',
                n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                s = t + '[")]';
            return this.format(i + n + "-MM-DD[T]HH:mm:ss.SSS" + s)
        }

        function mi(t) {
            t || (t = this.isUtc() ? e.defaultFormatUtc : e.defaultFormat);
            var i = I(this, t);
            return this.localeData().postformat(i)
        }

        function gi(e, t) {
            return this.isValid() && (v(e) && e.isValid() || Ct(e).isValid()) ? Ut({
                to: this,
                from: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }

        function vi(e) {
            return this.from(Ct(), e)
        }

        function yi(e, t) {
            return this.isValid() && (v(e) && e.isValid() || Ct(e).isValid()) ? Ut({
                from: this,
                to: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }

        function bi(e) {
            return this.to(Ct(), e)
        }

        function wi(e) {
            var t;
            return void 0 === e ? this._locale._abbr : (t = tt(e), null != t && (this._locale = t), this)
        }

        function xi() {
            return this._locale
        }

        function _i(e) {
            switch (e = N(e)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                case "date":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
        }

        function ki(e) {
            return void 0 === (e = N(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
        }

        function Ci() {
            return this._d.valueOf() - 6e4 * (this._offset || 0)
        }

        function Ti() {
            return Math.floor(this.valueOf() / 1e3)
        }

        function Si() {
            return new Date(this.valueOf())
        }

        function $i() {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
        }

        function Ai() {
            var e = this;
            return {
                years: e.year(),
                months: e.month(),
                date: e.date(),
                hours: e.hours(),
                minutes: e.minutes(),
                seconds: e.seconds(),
                milliseconds: e.milliseconds()
            }
        }

        function Fi() {
            return this.isValid() ? this.toISOString() : null
        }

        function Pi() {
            return h(this)
        }

        function Mi() {
            return c({}, p(this))
        }

        function Di() {
            return p(this).overflow
        }

        function Oi() {
            return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict
            }
        }

        function Ei(e, t) {
            H(0, [e, e.length], 0, t)
        }

        function Ni(e) {
            return zi.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
        }

        function ji(e) {
            return zi.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
        }

        function Li() {
            return ke(this.year(), 1, 4)
        }

        function qi() {
            var e = this.localeData()._week;
            return ke(this.year(), e.dow, e.doy)
        }

        function zi(e, t, i, n, s) {
            var r;
            return null == e ? _e(this, n, s).year : (r = ke(e, n, s), t > r && (t = r), Hi.call(this, e, t, i, n, s))
        }

        function Hi(e, t, i, n, s) {
            var r = xe(e, t, i, n, s),
                o = be(r.year, 0, r.dayOfYear);
            return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
        }

        function Wi(e) {
            return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
        }

        function Yi(e) {
            var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == e ? t : this.add(e - t, "d")
        }

        function Ii(e, t) {
            t[hs] = b(1e3 * ("0." + e))
        }

        function Vi() {
            return this._isUTC ? "UTC" : ""
        }

        function Ri() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }

        function Bi(e) {
            return Ct(1e3 * e)
        }

        function Zi() {
            return Ct.apply(null, arguments).parseZone()
        }

        function Gi(e) {
            return e
        }

        function Ui(e, t, i, n) {
            var s = tt(),
                r = u().set(n, t);
            return s[i](r, e)
        }

        function Xi(e, t, i) {
            if (r(e) && (t = e, e = void 0), e = e || "", null != t) return Ui(e, t, i, "month");
            var n, s = [];
            for (n = 0; n < 12; n++) s[n] = Ui(e, n, i, "month");
            return s
        }

        function Qi(e, t, i, n) {
            "boolean" == typeof e ? (r(t) && (i = t, t = void 0), t = t || "") : (t = e, i = t, e = !1, r(t) && (i = t, t = void 0), t = t || "");
            var s = tt(),
                o = e ? s._week.dow : 0;
            if (null != i) return Ui(t, (i + o) % 7, n, "day");
            var a, l = [];
            for (a = 0; a < 7; a++) l[a] = Ui(t, (a + o) % 7, n, "day");
            return l
        }

        function Ji(e, t) {
            return Xi(e, t, "months")
        }

        function Ki(e, t) {
            return Xi(e, t, "monthsShort")
        }

        function en(e, t, i) {
            return Qi(e, t, i, "weekdays")
        }

        function tn(e, t, i) {
            return Qi(e, t, i, "weekdaysShort")
        }

        function nn(e, t, i) {
            return Qi(e, t, i, "weekdaysMin")
        }

        function sn() {
            var e = this._data;
            return this._milliseconds = ar(this._milliseconds), this._days = ar(this._days), this._months = ar(this._months), e.milliseconds = ar(e.milliseconds), e.seconds = ar(e.seconds), e.minutes = ar(e.minutes), e.hours = ar(e.hours), e.months = ar(e.months), e.years = ar(e.years), this
        }

        function rn(e, t, i, n) {
            var s = Ut(t, i);
            return e._milliseconds += n * s._milliseconds, e._days += n * s._days, e._months += n * s._months, e._bubble()
        }

        function on(e, t) {
            return rn(this, e, t, 1)
        }

        function an(e, t) {
            return rn(this, e, t, -1)
        }

        function ln(e) {
            return e < 0 ? Math.floor(e) : Math.ceil(e)
        }

        function cn() {
            var e, t, i, n, s, r = this._milliseconds,
                o = this._days,
                a = this._months,
                l = this._data;
            return r >= 0 && o >= 0 && a >= 0 || r <= 0 && o <= 0 && a <= 0 || (r += 864e5 * ln(dn(a) + o), o = 0, a = 0), l.milliseconds = r % 1e3, e = y(r / 1e3), l.seconds = e % 60, t = y(e / 60), l.minutes = t % 60, i = y(t / 60), l.hours = i % 24, o += y(i / 24), s = y(un(o)), a += s, o -= ln(dn(s)), n = y(a / 12), a %= 12, l.days = o, l.months = a, l.years = n, this
        }

        function un(e) {
            return 4800 * e / 146097
        }

        function dn(e) {
            return 146097 * e / 4800
        }

        function pn(e) {
            if (!this.isValid()) return NaN;
            var t, i, n = this._milliseconds;
            if ("month" === (e = N(e)) || "year" === e) return t = this._days + n / 864e5, i = this._months + un(t), "month" === e ? i : i / 12;
            switch (t = this._days + Math.round(dn(this._months)), e) {
                case "week":
                    return t / 7 + n / 6048e5;
                case "day":
                    return t + n / 864e5;
                case "hour":
                    return 24 * t + n / 36e5;
                case "minute":
                    return 1440 * t + n / 6e4;
                case "second":
                    return 86400 * t + n / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * t) + n;
                default:
                    throw new Error("Unknown unit " + e)
            }
        }

        function hn() {
            return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * b(this._months / 12) : NaN
        }

        function fn(e) {
            return function() {
                return this.as(e)
            }
        }

        function mn() {
            return Ut(this)
        }

        function gn(e) {
            return e = N(e), this.isValid() ? this[e + "s"]() : NaN
        }

        function vn(e) {
            return function() {
                return this.isValid() ? this._data[e] : NaN
            }
        }

        function yn() {
            return y(this.days() / 7)
        }

        function bn(e, t, i, n, s) {
            return s.relativeTime(t || 1, !!i, e, n)
        }

        function wn(e, t, i) {
            var n = Ut(e).abs(),
                s = kr(n.as("s")),
                r = kr(n.as("m")),
                o = kr(n.as("h")),
                a = kr(n.as("d")),
                l = kr(n.as("M")),
                c = kr(n.as("y")),
                u = s <= Cr.ss && ["s", s] || s < Cr.s && ["ss", s] || r <= 1 && ["m"] || r < Cr.m && ["mm", r] || o <= 1 && ["h"] || o < Cr.h && ["hh", o] || a <= 1 && ["d"] || a < Cr.d && ["dd", a] || l <= 1 && ["M"] || l < Cr.M && ["MM", l] || c <= 1 && ["y"] || ["yy", c];
            return u[2] = t, u[3] = +e > 0, u[4] = i, bn.apply(null, u)
        }

        function xn(e) {
            return void 0 === e ? kr : "function" == typeof e && (kr = e, !0)
        }

        function _n(e, t) {
            return void 0 !== Cr[e] && (void 0 === t ? Cr[e] : (Cr[e] = t, "s" === e && (Cr.ss = t - 1), !0))
        }

        function kn(e) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var t = this.localeData(),
                i = wn(this, !e, t);
            return e && (i = t.pastFuture(+this, i)), t.postformat(i)
        }

        function Cn(e) {
            return (e > 0) - (e < 0) || +e
        }

        function Tn() {
            if (!this.isValid()) return this.localeData().invalidDate();
            var e, t, i, n = Tr(this._milliseconds) / 1e3,
                s = Tr(this._days),
                r = Tr(this._months);
            e = y(n / 60), t = y(e / 60), n %= 60, e %= 60, i = y(r / 12), r %= 12;
            var o = i,
                a = r,
                l = s,
                c = t,
                u = e,
                d = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
                p = this.asSeconds();
            if (!p) return "P0D";
            var h = p < 0 ? "-" : "",
                f = Cn(this._months) !== Cn(p) ? "-" : "",
                m = Cn(this._days) !== Cn(p) ? "-" : "",
                g = Cn(this._milliseconds) !== Cn(p) ? "-" : "";
            return h + "P" + (o ? f + o + "Y" : "") + (a ? f + a + "M" : "") + (l ? m + l + "D" : "") + (c || u || d ? "T" : "") + (c ? g + c + "H" : "") + (u ? g + u + "M" : "") + (d ? g + d + "S" : "")
        }
        var Sn, $n;
        $n = Array.prototype.some ? Array.prototype.some : function(e) {
            for (var t = Object(this), i = t.length >>> 0, n = 0; n < i; n++)
                if (n in t && e.call(this, t[n], n, t)) return !0;
            return !1
        };
        var An = e.momentProperties = [],
            Fn = !1,
            Pn = {};
        e.suppressDeprecationWarnings = !1, e.deprecationHandler = null;
        var Mn;
        Mn = Object.keys ? Object.keys : function(e) {
            var t, i = [];
            for (t in e) l(e, t) && i.push(t);
            return i
        };
        var Dn = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            On = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            En = /\d{1,2}/,
            Nn = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            jn = {},
            Ln = {},
            qn = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            zn = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            Hn = {},
            Wn = {},
            Yn = /\d/,
            In = /\d\d/,
            Vn = /\d{3}/,
            Rn = /\d{4}/,
            Bn = /[+-]?\d{6}/,
            Zn = /\d\d?/,
            Gn = /\d\d\d\d?/,
            Un = /\d\d\d\d\d\d?/,
            Xn = /\d{1,3}/,
            Qn = /\d{1,4}/,
            Jn = /[+-]?\d{1,6}/,
            Kn = /\d+/,
            es = /[+-]?\d+/,
            ts = /Z|[+-]\d\d:?\d\d/gi,
            is = /Z|[+-]\d\d(?::?\d\d)?/gi,
            ns = /[+-]?\d+(\.\d{1,3})?/,
            ss = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
            rs = {},
            os = {},
            as = 0,
            ls = 1,
            cs = 2,
            us = 3,
            ds = 4,
            ps = 5,
            hs = 6,
            fs = 7,
            ms = 8;
        H("Y", 0, 0, function() {
            var e = this.year();
            return e <= 9999 ? "" + e : "+" + e
        }), H(0, ["YY", 2], 0, function() {
            return this.year() % 100
        }), H(0, ["YYYY", 4], 0, "year"), H(0, ["YYYYY", 5], 0, "year"), H(0, ["YYYYYY", 6, !0], 0, "year"), E("year", "y"), L("year", 1), R("Y", es), R("YY", Zn, In), R("YYYY", Qn, Rn), R("YYYYY", Jn, Bn), R("YYYYYY", Jn, Bn), U(["YYYYY", "YYYYYY"], as), U("YYYY", function(t, i) {
            i[as] = 2 === t.length ? e.parseTwoDigitYear(t) : b(t)
        }), U("YY", function(t, i) {
            i[as] = e.parseTwoDigitYear(t)
        }), U("Y", function(e, t) {
            t[as] = parseInt(e, 10)
        }), e.parseTwoDigitYear = function(e) {
            return b(e) + (b(e) > 68 ? 1900 : 2e3)
        };
        var gs, vs = te("FullYear", !0);
        gs = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
            var t;
            for (t = 0; t < this.length; ++t)
                if (this[t] === e) return t;
            return -1
        }, H("M", ["MM", 2], "Mo", function() {
            return this.month() + 1
        }), H("MMM", 0, 0, function(e) {
            return this.localeData().monthsShort(this, e)
        }), H("MMMM", 0, 0, function(e) {
            return this.localeData().months(this, e)
        }), E("month", "M"), L("month", 8), R("M", Zn), R("MM", Zn, In), R("MMM", function(e, t) {
            return t.monthsShortRegex(e)
        }), R("MMMM", function(e, t) {
            return t.monthsRegex(e)
        }), U(["M", "MM"], function(e, t) {
            t[ls] = b(e) - 1
        }), U(["MMM", "MMMM"], function(e, t, i, n) {
            var s = i._locale.monthsParse(e, n, i._strict);
            null != s ? t[ls] = s : p(i).invalidMonth = e
        });
        var ys = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            bs = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            ws = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            xs = ss,
            _s = ss;
        H("w", ["ww", 2], "wo", "week"), H("W", ["WW", 2], "Wo", "isoWeek"), E("week", "w"), E("isoWeek", "W"), L("week", 5), L("isoWeek", 5), R("w", Zn), R("ww", Zn, In), R("W", Zn), R("WW", Zn, In), X(["w", "ww", "W", "WW"], function(e, t, i, n) {
            t[n.substr(0, 1)] = b(e)
        });
        var ks = {
            dow: 0,
            doy: 6
        };
        H("d", 0, "do", "day"), H("dd", 0, 0, function(e) {
            return this.localeData().weekdaysMin(this, e)
        }), H("ddd", 0, 0, function(e) {
            return this.localeData().weekdaysShort(this, e)
        }), H("dddd", 0, 0, function(e) {
            return this.localeData().weekdays(this, e)
        }), H("e", 0, 0, "weekday"), H("E", 0, 0, "isoWeekday"), E("day", "d"), E("weekday", "e"), E("isoWeekday", "E"), L("day", 11), L("weekday", 11), L("isoWeekday", 11), R("d", Zn), R("e", Zn), R("E", Zn), R("dd", function(e, t) {
            return t.weekdaysMinRegex(e)
        }), R("ddd", function(e, t) {
            return t.weekdaysShortRegex(e)
        }), R("dddd", function(e, t) {
            return t.weekdaysRegex(e)
        }), X(["dd", "ddd", "dddd"], function(e, t, i, n) {
            var s = i._locale.weekdaysParse(e, n, i._strict);
            null != s ? t.d = s : p(i).invalidWeekday = e
        }), X(["d", "e", "E"], function(e, t, i, n) {
            t[n] = b(e)
        });
        var Cs = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            Ts = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            Ss = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            $s = ss,
            As = ss,
            Fs = ss;
        H("H", ["HH", 2], 0, "hour"), H("h", ["hh", 2], 0, Ie), H("k", ["kk", 2], 0, Ve), H("hmm", 0, 0, function() {
            return "" + Ie.apply(this) + z(this.minutes(), 2)
        }), H("hmmss", 0, 0, function() {
            return "" + Ie.apply(this) + z(this.minutes(), 2) + z(this.seconds(), 2)
        }), H("Hmm", 0, 0, function() {
            return "" + this.hours() + z(this.minutes(), 2)
        }), H("Hmmss", 0, 0, function() {
            return "" + this.hours() + z(this.minutes(), 2) + z(this.seconds(), 2)
        }), Re("a", !0), Re("A", !1), E("hour", "h"), L("hour", 13), R("a", Be), R("A", Be), R("H", Zn), R("h", Zn), R("k", Zn), R("HH", Zn, In), R("hh", Zn, In), R("kk", Zn, In), R("hmm", Gn), R("hmmss", Un), R("Hmm", Gn), R("Hmmss", Un), U(["H", "HH"], us), U(["k", "kk"], function(e, t, i) {
            var n = b(e);
            t[us] = 24 === n ? 0 : n
        }), U(["a", "A"], function(e, t, i) {
            i._isPm = i._locale.isPM(e), i._meridiem = e
        }), U(["h", "hh"], function(e, t, i) {
            t[us] = b(e), p(i).bigHour = !0
        }), U("hmm", function(e, t, i) {
            var n = e.length - 2;
            t[us] = b(e.substr(0, n)), t[ds] = b(e.substr(n)), p(i).bigHour = !0
        }), U("hmmss", function(e, t, i) {
            var n = e.length - 4,
                s = e.length - 2;
            t[us] = b(e.substr(0, n)), t[ds] = b(e.substr(n, 2)), t[ps] = b(e.substr(s)), p(i).bigHour = !0
        }), U("Hmm", function(e, t, i) {
            var n = e.length - 2;
            t[us] = b(e.substr(0, n)), t[ds] = b(e.substr(n))
        }), U("Hmmss", function(e, t, i) {
            var n = e.length - 4,
                s = e.length - 2;
            t[us] = b(e.substr(0, n)), t[ds] = b(e.substr(n, 2)), t[ps] = b(e.substr(s))
        });
        var Ps, Ms = /[ap]\.?m?\.?/i,
            Ds = te("Hours", !0),
            Os = {
                calendar: Dn,
                longDateFormat: On,
                invalidDate: "Invalid date",
                ordinal: "%d",
                dayOfMonthOrdinalParse: En,
                relativeTime: Nn,
                months: bs,
                monthsShort: ws,
                week: ks,
                weekdays: Cs,
                weekdaysMin: Ss,
                weekdaysShort: Ts,
                meridiemParse: Ms
            },
            Es = {},
            Ns = {},
            js = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            Ls = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            qs = /Z|[+-]\d\d(?::?\d\d)?/,
            zs = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                ["YYYY-DDD", /\d{4}-\d{3}/],
                ["YYYY-MM", /\d{4}-\d\d/, !1],
                ["YYYYYYMMDD", /[+-]\d{10}/],
                ["YYYYMMDD", /\d{8}/],
                ["GGGG[W]WWE", /\d{4}W\d{3}/],
                ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                ["YYYYDDD", /\d{7}/]
            ],
            Hs = [
                ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                ["HH:mm", /\d\d:\d\d/],
                ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                ["HHmmss", /\d\d\d\d\d\d/],
                ["HHmm", /\d\d\d\d/],
                ["HH", /\d\d/]
            ],
            Ws = /^\/?Date\((\-?\d+)/i,
            Ys = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
            Is = {
                UT: 0,
                GMT: 0,
                EDT: -240,
                EST: -300,
                CDT: -300,
                CST: -360,
                MDT: -360,
                MST: -420,
                PDT: -420,
                PST: -480
            };
        e.createFromInputFallback = _("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
            e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
        }), e.ISO_8601 = function() {}, e.RFC_2822 = function() {};
        var Vs = _("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var e = Ct.apply(null, arguments);
                return this.isValid() && e.isValid() ? e < this ? this : e : f()
            }),
            Rs = _("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var e = Ct.apply(null, arguments);
                return this.isValid() && e.isValid() ? e > this ? this : e : f()
            }),
            Bs = function() {
                return Date.now ? Date.now() : +new Date
            },
            Zs = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
        Et("Z", ":"), Et("ZZ", ""), R("Z", is), R("ZZ", is), U(["Z", "ZZ"], function(e, t, i) {
            i._useUTC = !0, i._tzm = Nt(is, e)
        });
        var Gs = /([\+\-]|\d\d)/gi;
        e.updateOffset = function() {};
        var Us = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
            Xs = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
        Ut.fn = Mt.prototype, Ut.invalid = Pt;
        var Qs = Kt(1, "add"),
            Js = Kt(-1, "subtract");
        e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", e.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        var Ks = _("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
            return void 0 === e ? this.localeData() : this.locale(e)
        });
        H(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100
        }), H(0, ["GG", 2], 0, function() {
            return this.isoWeekYear() % 100
        }), Ei("gggg", "weekYear"), Ei("ggggg", "weekYear"), Ei("GGGG", "isoWeekYear"), Ei("GGGGG", "isoWeekYear"), E("weekYear", "gg"), E("isoWeekYear", "GG"), L("weekYear", 1), L("isoWeekYear", 1), R("G", es), R("g", es), R("GG", Zn, In), R("gg", Zn, In), R("GGGG", Qn, Rn), R("gggg", Qn, Rn), R("GGGGG", Jn, Bn), R("ggggg", Jn, Bn), X(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, i, n) {
            t[n.substr(0, 2)] = b(e)
        }), X(["gg", "GG"], function(t, i, n, s) {
            i[s] = e.parseTwoDigitYear(t)
        }), H("Q", 0, "Qo", "quarter"), E("quarter", "Q"), L("quarter", 7), R("Q", Yn), U("Q", function(e, t) {
            t[ls] = 3 * (b(e) - 1)
        }), H("D", ["DD", 2], "Do", "date"), E("date", "D"), L("date", 9), R("D", Zn), R("DD", Zn, In), R("Do", function(e, t) {
            return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
        }), U(["D", "DD"], cs), U("Do", function(e, t) {
            t[cs] = b(e.match(Zn)[0])
        });
        var er = te("Date", !0);
        H("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), E("dayOfYear", "DDD"), L("dayOfYear", 4), R("DDD", Xn), R("DDDD", Vn), U(["DDD", "DDDD"], function(e, t, i) {
            i._dayOfYear = b(e)
        }), H("m", ["mm", 2], 0, "minute"), E("minute", "m"), L("minute", 14), R("m", Zn), R("mm", Zn, In), U(["m", "mm"], ds);
        var tr = te("Minutes", !1);
        H("s", ["ss", 2], 0, "second"), E("second", "s"), L("second", 15), R("s", Zn), R("ss", Zn, In), U(["s", "ss"], ps);
        var ir = te("Seconds", !1);
        H("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }), H(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
        }), H(0, ["SSS", 3], 0, "millisecond"), H(0, ["SSSS", 4], 0, function() {
            return 10 * this.millisecond()
        }), H(0, ["SSSSS", 5], 0, function() {
            return 100 * this.millisecond()
        }), H(0, ["SSSSSS", 6], 0, function() {
            return 1e3 * this.millisecond()
        }), H(0, ["SSSSSSS", 7], 0, function() {
            return 1e4 * this.millisecond()
        }), H(0, ["SSSSSSSS", 8], 0, function() {
            return 1e5 * this.millisecond()
        }), H(0, ["SSSSSSSSS", 9], 0, function() {
            return 1e6 * this.millisecond()
        }), E("millisecond", "ms"), L("millisecond", 16), R("S", Xn, Yn), R("SS", Xn, In), R("SSS", Xn, Vn);
        var nr;
        for (nr = "SSSS"; nr.length <= 9; nr += "S") R(nr, Kn);
        for (nr = "S"; nr.length <= 9; nr += "S") U(nr, Ii);
        var sr = te("Milliseconds", !1);
        H("z", 0, 0, "zoneAbbr"), H("zz", 0, 0, "zoneName");
        var rr = g.prototype;
        rr.add = Qs, rr.calendar = ii, rr.clone = ni, rr.diff = ui, rr.endOf = ki, rr.format = mi, rr.from = gi, rr.fromNow = vi, rr.to = yi, rr.toNow = bi, rr.get = se, rr.invalidAt = Di, rr.isAfter = si, rr.isBefore = ri, rr.isBetween = oi, rr.isSame = ai, rr.isSameOrAfter = li, rr.isSameOrBefore = ci, rr.isValid = Pi, rr.lang = Ks, rr.locale = wi, rr.localeData = xi, rr.max = Rs, rr.min = Vs, rr.parsingFlags = Mi, rr.set = re, rr.startOf = _i, rr.subtract = Js, rr.toArray = $i, rr.toObject = Ai, rr.toDate = Si, rr.toISOString = hi, rr.inspect = fi, rr.toJSON = Fi, rr.toString = pi, rr.unix = Ti, rr.valueOf = Ci, rr.creationData = Oi, rr.year = vs, rr.isLeapYear = ee,
            rr.weekYear = Ni, rr.isoWeekYear = ji, rr.quarter = rr.quarters = Wi, rr.month = he, rr.daysInMonth = fe, rr.week = rr.weeks = $e, rr.isoWeek = rr.isoWeeks = Ae, rr.weeksInYear = qi, rr.isoWeeksInYear = Li, rr.date = er, rr.day = rr.days = je, rr.weekday = Le, rr.isoWeekday = qe, rr.dayOfYear = Yi, rr.hour = rr.hours = Ds, rr.minute = rr.minutes = tr, rr.second = rr.seconds = ir, rr.millisecond = rr.milliseconds = sr, rr.utcOffset = qt, rr.utc = Ht, rr.local = Wt, rr.parseZone = Yt, rr.hasAlignedHourOffset = It, rr.isDST = Vt, rr.isLocal = Bt, rr.isUtcOffset = Zt, rr.isUtc = Gt, rr.isUTC = Gt, rr.zoneAbbr = Vi, rr.zoneName = Ri, rr.dates = _("dates accessor is deprecated. Use date instead.", er), rr.months = _("months accessor is deprecated. Use month instead", he), rr.years = _("years accessor is deprecated. Use year instead", vs), rr.zone = _("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", zt), rr.isDSTShifted = _("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Rt);
        var or = $.prototype;
        or.calendar = A, or.longDateFormat = F, or.invalidDate = P, or.ordinal = M, or.preparse = Gi, or.postformat = Gi, or.relativeTime = D, or.pastFuture = O, or.set = T, or.months = le, or.monthsShort = ce, or.monthsParse = de, or.monthsRegex = ge, or.monthsShortRegex = me, or.week = Ce, or.firstDayOfYear = Se, or.firstDayOfWeek = Te, or.weekdays = Me, or.weekdaysMin = Oe, or.weekdaysShort = De, or.weekdaysParse = Ne, or.weekdaysRegex = ze, or.weekdaysShortRegex = He, or.weekdaysMinRegex = We, or.isPM = Ze, or.meridiem = Ge, Je("en", {
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 === b(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            }
        }), e.lang = _("moment.lang is deprecated. Use moment.locale instead.", Je), e.langData = _("moment.langData is deprecated. Use moment.localeData instead.", tt);
        var ar = Math.abs,
            lr = fn("ms"),
            cr = fn("s"),
            ur = fn("m"),
            dr = fn("h"),
            pr = fn("d"),
            hr = fn("w"),
            fr = fn("M"),
            mr = fn("y"),
            gr = vn("milliseconds"),
            vr = vn("seconds"),
            yr = vn("minutes"),
            br = vn("hours"),
            wr = vn("days"),
            xr = vn("months"),
            _r = vn("years"),
            kr = Math.round,
            Cr = {
                ss: 44,
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            },
            Tr = Math.abs,
            Sr = Mt.prototype;
        return Sr.isValid = Ft, Sr.abs = sn, Sr.add = on, Sr.subtract = an, Sr.as = pn, Sr.asMilliseconds = lr, Sr.asSeconds = cr, Sr.asMinutes = ur, Sr.asHours = dr, Sr.asDays = pr, Sr.asWeeks = hr, Sr.asMonths = fr, Sr.asYears = mr, Sr.valueOf = hn, Sr._bubble = cn, Sr.clone = mn, Sr.get = gn, Sr.milliseconds = gr, Sr.seconds = vr, Sr.minutes = yr, Sr.hours = br, Sr.days = wr, Sr.weeks = yn, Sr.months = xr, Sr.years = _r, Sr.humanize = kn, Sr.toISOString = Tn, Sr.toString = Tn, Sr.toJSON = Tn, Sr.locale = wi, Sr.localeData = xi, Sr.toIsoString = _("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Tn), Sr.lang = Ks, H("X", 0, 0, "unix"), H("x", 0, 0, "valueOf"), R("x", es), R("X", ns), U("X", function(e, t, i) {
                i._d = new Date(1e3 * parseFloat(e, 10))
            }), U("x", function(e, t, i) {
                i._d = new Date(b(e))
            }), e.version = "2.22.2",
            function(e) {
                Sn = e
            }(Ct), e.fn = rr, e.min = St, e.max = $t, e.now = Bs, e.utc = u, e.unix = Bi, e.months = Ji, e.isDate = o, e.locale = Je, e.invalid = f, e.duration = Ut, e.isMoment = v, e.weekdays = en, e.parseZone = Zi, e.localeData = tt, e.isDuration = Dt, e.monthsShort = Ki, e.weekdaysMin = nn, e.defineLocale = Ke, e.updateLocale = et, e.locales = it, e.weekdaysShort = tn, e.normalizeUnits = N, e.relativeTimeRounding = xn, e.relativeTimeThreshold = _n, e.calendarFormat = ti, e.prototype = rr, e.HTML5_FMT = {
                DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                DATE: "YYYY-MM-DD",
                TIME: "HH:mm",
                TIME_SECONDS: "HH:mm:ss",
                TIME_MS: "HH:mm:ss.SSS",
                WEEK: "YYYY-[W]WW",
                MONTH: "YYYY-MM"
            }, e
    }),
    function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.vanillaTextMask = t() : e.vanillaTextMask = t()
    }(this, function() {
        return function(e) {
            function t(n) {
                if (i[n]) return i[n].exports;
                var s = i[n] = {
                    exports: {},
                    id: n,
                    loaded: !1
                };
                return e[n].call(s.exports, s, s.exports, t), s.loaded = !0, s.exports
            }
            var i = {};
            return t.m = e, t.c = i, t.p = "", t(0)
        }([function(e, t, i) {
            "use strict";

            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function s(e) {
                var t = e.inputElement,
                    i = (0, a.default)(e),
                    n = function(e) {
                        var t = e.target.value;
                        return i.update(t)
                    };
                return t.addEventListener("input", n), i.update(t.value), {
                    textMaskInputElement: i,
                    destroy: function() {
                        t.removeEventListener("input", n)
                    }
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.conformToMask = void 0, t.maskInput = s;
            var r = i(2);
            Object.defineProperty(t, "conformToMask", {
                enumerable: !0,
                get: function() {
                    return n(r).default
                }
            });
            var o = i(5),
                a = n(o);
            t.default = s
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.placeholderChar = "_", t.strFunction = "function"
        }, function(e, t, i) {
            "use strict";

            function n() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (!(0, r.isArray)(t)) {
                    if ((void 0 === t ? "undefined" : s(t)) !== o.strFunction) throw new Error("Text-mask:conformToMask; The mask property must be an array.");
                    t = t(e, i), t = (0, r.processCaretTraps)(t).maskWithoutCaretTraps
                }
                var n = i.guide,
                    c = void 0 === n || n,
                    u = i.previousConformedValue,
                    d = void 0 === u ? l : u,
                    p = i.placeholderChar,
                    h = void 0 === p ? o.placeholderChar : p,
                    f = i.placeholder,
                    m = void 0 === f ? (0, r.convertMaskToPlaceholder)(t, h) : f,
                    g = i.currentCaretPosition,
                    v = i.keepCharPositions,
                    y = !1 === c && void 0 !== d,
                    b = e.length,
                    w = d.length,
                    x = m.length,
                    _ = t.length,
                    k = b - w,
                    C = k > 0,
                    T = g + (C ? -k : 0),
                    S = T + Math.abs(k);
                if (!0 === v && !C) {
                    for (var $ = l, A = T; A < S; A++) m[A] === h && ($ += h);
                    e = e.slice(0, T) + $ + e.slice(T, b)
                }
                for (var F = e.split(l).map(function(e, t) {
                        return {
                            char: e,
                            isNew: t >= T && t < S
                        }
                    }), P = b - 1; P >= 0; P--) {
                    var M = F[P].char;
                    if (M !== h) {
                        M === m[P >= T && w === _ ? P - k : P] && F.splice(P, 1)
                    }
                }
                var D = l,
                    O = !1;
                e: for (var E = 0; E < x; E++) {
                    var N = m[E];
                    if (N === h) {
                        if (F.length > 0)
                            for (; F.length > 0;) {
                                var j = F.shift(),
                                    L = j.char,
                                    q = j.isNew;
                                if (L === h && !0 !== y) {
                                    D += h;
                                    continue e
                                }
                                if (t[E].test(L)) {
                                    if (!0 === v && !1 !== q && d !== l && !1 !== c && C) {
                                        for (var z = F.length, H = null, W = 0; W < z; W++) {
                                            var Y = F[W];
                                            if (Y.char !== h && !1 === Y.isNew) break;
                                            if (Y.char === h) {
                                                H = W;
                                                break
                                            }
                                        }
                                        null !== H ? (D += L, F.splice(H, 1)) : E--
                                    } else D += L;
                                    continue e
                                }
                                O = !0
                            }!1 === y && (D += m.substr(E, x));
                        break
                    }
                    D += N
                }
                if (y && !1 === C) {
                    for (var I = null, V = 0; V < D.length; V++) m[V] === h && (I = V);
                    D = null !== I ? D.substr(0, I + 1) : l
                }
                return {
                    conformedValue: D,
                    meta: {
                        someCharsRejected: O
                    }
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            t.default = n;
            var r = i(3),
                o = i(1),
                a = [],
                l = ""
        }, function(e, t, i) {
            "use strict";

            function n() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.placeholderChar;
                if (!s(e)) throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");
                if (-1 !== e.indexOf(t)) throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\nThe placeholder character that was received is: " + JSON.stringify(t) + "\n\nThe mask that was received is: " + JSON.stringify(e));
                return e.map(function(e) {
                    return e instanceof RegExp ? t : e
                }).join("")
            }

            function s(e) {
                return Array.isArray && Array.isArray(e) || e instanceof Array
            }

            function r(e) {
                return "string" == typeof e || e instanceof String
            }

            function o(e) {
                return "number" == typeof e && void 0 === e.length && !isNaN(e)
            }

            function a(e) {
                for (var t = [], i = void 0; - 1 !== (i = e.indexOf(u));) t.push(i), e.splice(i, 1);
                return {
                    maskWithoutCaretTraps: e,
                    indexes: t
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.convertMaskToPlaceholder = n, t.isArray = s, t.isString = r, t.isNumber = o, t.processCaretTraps = a;
            var l = i(1),
                c = [],
                u = "[]"
        }, function(e, t) {
            "use strict";

            function i(e) {
                var t = e.previousConformedValue,
                    i = void 0 === t ? s : t,
                    r = e.previousPlaceholder,
                    o = void 0 === r ? s : r,
                    a = e.currentCaretPosition,
                    l = void 0 === a ? 0 : a,
                    c = e.conformedValue,
                    u = e.rawValue,
                    d = e.placeholderChar,
                    p = e.placeholder,
                    h = e.indexesOfPipedChars,
                    f = void 0 === h ? n : h,
                    m = e.caretTrapIndexes,
                    g = void 0 === m ? n : m;
                if (0 === l || !u.length) return 0;
                var v = u.length,
                    y = i.length,
                    b = p.length,
                    w = c.length,
                    x = v - y,
                    _ = x > 0,
                    k = 0 === y;
                if (x > 1 && !_ && !k) return l;
                var C = _ && (i === c || c === p),
                    T = 0,
                    S = void 0,
                    $ = void 0;
                if (C) T = l - x;
                else {
                    var A = c.toLowerCase(),
                        F = u.toLowerCase(),
                        P = F.substr(0, l).split(s),
                        M = P.filter(function(e) {
                            return -1 !== A.indexOf(e)
                        });
                    $ = M[M.length - 1];
                    var D = o.substr(0, M.length).split(s).filter(function(e) {
                            return e !== d
                        }).length,
                        O = p.substr(0, M.length).split(s).filter(function(e) {
                            return e !== d
                        }).length,
                        E = O !== D,
                        N = void 0 !== o[M.length - 1] && void 0 !== p[M.length - 2] && o[M.length - 1] !== d && o[M.length - 1] !== p[M.length - 1] && o[M.length - 1] === p[M.length - 2];
                    !_ && (E || N) && D > 0 && p.indexOf($) > -1 && void 0 !== u[l] && (S = !0, $ = u[l]);
                    for (var j = f.map(function(e) {
                            return A[e]
                        }), L = j.filter(function(e) {
                            return e === $
                        }).length, q = M.filter(function(e) {
                            return e === $
                        }).length, z = p.substr(0, p.indexOf(d)).split(s).filter(function(e, t) {
                            return e === $ && u[t] !== e
                        }).length, H = z + q + L + (S ? 1 : 0), W = 0, Y = 0; Y < w; Y++) {
                        var I = A[Y];
                        if (T = Y + 1, I === $ && W++, W >= H) break
                    }
                }
                if (_) {
                    for (var V = T, R = T; R <= b; R++)
                        if (p[R] === d && (V = R), p[R] === d || -1 !== g.indexOf(R) || R === b) return V
                } else if (S) {
                    for (var B = T - 1; B >= 0; B--)
                        if (c[B] === $ || -1 !== g.indexOf(B) || 0 === B) return B
                } else
                    for (var Z = T; Z >= 0; Z--)
                        if (p[Z - 1] === d || -1 !== g.indexOf(Z) || 0 === Z) return Z
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = i;
            var n = [],
                s = ""
        }, function(e, t, i) {
            "use strict";

            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function s(e) {
                var t = {
                    previousConformedValue: void 0,
                    previousPlaceholder: void 0
                };
                return {
                    state: t,
                    update: function(i) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
                            s = n.inputElement,
                            c = n.mask,
                            d = n.guide,
                            g = n.pipe,
                            y = n.placeholderChar,
                            b = void 0 === y ? f.placeholderChar : y,
                            w = n.keepCharPositions,
                            x = void 0 !== w && w,
                            _ = n.showMask,
                            k = void 0 !== _ && _;
                        if (void 0 === i && (i = s.value), i !== t.previousConformedValue) {
                            (void 0 === c ? "undefined" : l(c)) === v && void 0 !== c.pipe && void 0 !== c.mask && (g = c.pipe, c = c.mask);
                            var C = void 0,
                                T = void 0;
                            if (c instanceof Array && (C = (0, h.convertMaskToPlaceholder)(c, b)), !1 !== c) {
                                var S = o(i),
                                    $ = s.selectionEnd,
                                    A = t.previousConformedValue,
                                    F = t.previousPlaceholder,
                                    P = void 0;
                                if ((void 0 === c ? "undefined" : l(c)) === f.strFunction) {
                                    if (!1 === (T = c(S, {
                                            currentCaretPosition: $,
                                            previousConformedValue: A,
                                            placeholderChar: b
                                        }))) return;
                                    var M = (0, h.processCaretTraps)(T),
                                        D = M.maskWithoutCaretTraps,
                                        O = M.indexes;
                                    T = D, P = O, C = (0, h.convertMaskToPlaceholder)(T, b)
                                } else T = c;
                                var E = {
                                        previousConformedValue: A,
                                        guide: d,
                                        placeholderChar: b,
                                        pipe: g,
                                        placeholder: C,
                                        currentCaretPosition: $,
                                        keepCharPositions: x
                                    },
                                    N = (0, p.default)(S, T, E),
                                    j = N.conformedValue,
                                    L = (void 0 === g ? "undefined" : l(g)) === f.strFunction,
                                    q = {};
                                L && (q = g(j, a({
                                    rawValue: S
                                }, E)), !1 === q ? q = {
                                    value: A,
                                    rejected: !0
                                } : (0, h.isString)(q) && (q = {
                                    value: q
                                }));
                                var z = L ? q.value : j,
                                    H = (0, u.default)({
                                        previousConformedValue: A,
                                        previousPlaceholder: F,
                                        conformedValue: z,
                                        placeholder: C,
                                        rawValue: S,
                                        currentCaretPosition: $,
                                        placeholderChar: b,
                                        indexesOfPipedChars: q.indexesOfPipedChars,
                                        caretTrapIndexes: P
                                    }),
                                    W = z === C && 0 === H,
                                    Y = k ? C : m,
                                    I = W ? Y : z;
                                t.previousConformedValue = I, t.previousPlaceholder = C, s.value !== I && (s.value = I, r(s, H))
                            }
                        }
                    }
                }
            }

            function r(e, t) {
                document.activeElement === e && (y ? b(function() {
                    return e.setSelectionRange(t, t, g)
                }, 0) : e.setSelectionRange(t, t, g))
            }

            function o(e) {
                if ((0, h.isString)(e)) return e;
                if ((0, h.isNumber)(e)) return String(e);
                if (void 0 === e || null === e) return m;
                throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n " + JSON.stringify(e))
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                    }
                    return e
                },
                l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
            t.default = s;
            var c = i(4),
                u = n(c),
                d = i(2),
                p = n(d),
                h = i(3),
                f = i(1),
                m = "",
                g = "none",
                v = "object",
                y = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
                b = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : setTimeout
        }])
    }),
    function(e) {
        function t() {
            var e, t;
            for (e = 0; e < this.length; e++) t = this[e], i(t) || (n(t), a(t))
        }

        function i(e) {
            var t = e.value,
                i = e.$$currentValue;
            return !t && !i || t === i
        }

        function n(e) {
            e.$$currentValue = e.value
        }

        function s(e, t) {
            function i(e) {
                var i = e.target;
                t(i)
            }
            c.addEventListener(e, i, !0)
        }

        function r(e) {
            for (; e;) {
                if ("FORM" === e.nodeName) return l(e);
                e = e.parentNode
            }
            return l()
        }

        function o(e, t) {
            if (e.forEach) return e.forEach(t);
            var i;
            for (i = 0; i < e.length; i++) t(e[i])
        }

        function a(t) {
            var i = e.document,
                n = i.createEvent("HTMLEvents");
            n.initEvent("change", !0, !0), t.dispatchEvent(n)
        }
        var l = e.jQuery || e.angular.element,
            c = e.document.documentElement,
            u = l(c);
        s("change", n),
            function(t) {
                var i = e.jQuery || e.angular.element,
                    n = i.prototype,
                    s = n.val;
                n.val = function(e) {
                    var i = s.apply(this, arguments);
                    return arguments.length > 0 && o(this, function(i) {
                        t(i, e)
                    }), i
                }
            }(n), l.prototype.checkAndTriggerAutoFillEvent = t, s("blur", function(t) {
                e.setTimeout(function() {
                    r(t).find("input").checkAndTriggerAutoFillEvent()
                }, 20)
            }), e.document.addEventListener("DOMContentLoaded", function() {
                e.setTimeout(function() {
                    u.find("input").checkAndTriggerAutoFillEvent()
                }, 200)
            }, !1)
    }(window), "function" != typeof Object.create && (Object.create = function(e) {
        function t() {}
        return t.prototype = e, new t
    }),
    function(e, t, i) {
        "use strict";
        var n = {
            calcHeight: function(e, t) {
                var n, s, r = this,
                    o = 0,
                    a = new Array,
                    l = 0;
                i.each(e, function() {
                    for (l++, s = i(this), i(s).outerHeight("auto"), a.push(s), o = o < s.outerHeight() ? s.outerHeight() : o, n = 0; n < a.length; n++) a[n].outerHeight(o);
                    l == i(e).length && "function" == typeof t && t(r)
                })
            },
            equalHeight: function() {
                var n = this,
                    s = e.innerWidth || t.documentElement.clientWidth || t.body.clientWidth,
                    r = new Array,
                    o = n.settings.element.parent().siblings(),
                    a = n.settings.queryWidth;
                r.push(n.settings.container), i.each(o, function() {
                    r.push(i(this))
                }), null != a ? s >= a ? (0 == n.settings.isSticky && (n.settings.element.addClass("ds-sticky"), n.settings.isSticky = !0), n.calcHeight(r, n.setLength)) : (i.each(r, function() {
                    i(this).removeAttr("style")
                }), n.settings.element.removeAttr("style").removeClass("ds-sticky"), n.settings.isSticky = !1) : (0 == n.settings.isSticky && (n.settings.element.addClass("ds-sticky"), n.settings.isSticky = !0), n.calcHeight(r, n.setLength))
            },
            makeSticky: function() {
                var t, n = this,
                    s = n.settings.container,
                    r = n.settings.element,
                    o = (n.settings.stickyHeader, i(e).scrollTop()),
                    a = n.settings.width,
                    l = n.settings.length,
                    c = n.settings.offset;
                null === a && (a = s.width()), t = null != n.settings.stickyHeader ? n.settings.stickyHeader.outerHeight() + 30 : 30, void 0 !== c && 1 == n.settings.isSticky && (o <= c ? r.css({
                    bottom: "auto",
                    position: "relative",
                    top: "auto",
                    width: a
                }) : o >= l ? r.css({
                    bottom: "0",
                    position: "absolute",
                    top: "auto",
                    width: a
                }) : r.css({
                    bottom: "auto",
                    position: "fixed",
                    top: t,
                    width: a
                }))
            },
            init: function(e, t) {
                var n = this,
                    s = i(e);
                s.hasClass("ds-sticky") || (s.parent().css("min-height", 1), n.setOptions(e, t), n.runFunctions())
            },
            runFunctions: function() {
                var t = this,
                    n = /Android|webOS|iPhone|iPod|BlackBerry/i;
                i(e).load(function() {
                    n.test(navigator.userAgent) || t.equalHeight()
                }), i(e).resize(function() {
                    n.test(navigator.userAgent) || t.equalHeight()
                })
            },
            setLength: function(t) {
                var n, s, r = t.settings.container,
                    o = t.settings.element,
                    a = t.settings.stickyHeader;
                void 0 !== r.offset() && (null != a ? (n = r.outerHeight() - o.outerHeight() + r.offset().top - a.outerHeight() - 30, s = r.offset().top - a.outerHeight() - 30) : (n = r.outerHeight() - o.outerHeight() + r.offset().top - 30, s = r.offset().top - 30), t.settings.length = n, t.settings.offset = s), t.makeSticky(), i(e).scroll(function() {
                    t.makeSticky()
                })
            },
            setOptions: function(e, t) {
                var n = this,
                    s = i(e);
                n.defaults = {
                    container: s.parent(),
                    element: s,
                    isSticky: !1,
                    length: null,
                    offset: null,
                    queryWidth: null,
                    stickyHeader: null,
                    width: null
                }, n.settings = i.extend({}, n.defaults, t)
            }
        };
        i.fn.dsStickySidebar = function(e) {
            return this.each(function() {
                Object.create(n).init(this, e)
            })
        }
    }(window, document, jQuery),
    function() {
        if ($(".general-page-content table").hasClass("responsive-table")) {
            for (var e = [], t = document.querySelectorAll(".desktopTable"), i = document.querySelectorAll("tbody.custom-tbody"), n = 0; n < t.length; n++) {
                e[n] = [];
                for (var s, r = 0; s = t[n].rows[0].cells[r]; r++) {
                    var o = s;
                    e[n].push(o.textContent.replace(/\r?\n|\r/, ""))
                }
            }
            if (0 !== e.length)
                for (var a, l = 0; a = i[l]; l++) {
                    t[l].className = "desktopTable", i[l].className = "desktopTable";
                    var c = (document.createElement("table"), document.createElement("tbody"));
                    c.className = "mobileTable";
                    for (var n = 0; n < e[0].length; n++) {
                        row = a.rows[n];
                        var u = document.createElement("tr"),
                            d = u.insertCell();
                        e[l][n] && (d.innerHTML = e[l][n], d.className = "headerMobile", c.appendChild(u));
                        for (var p = a.rows, h = 0; h < p.length; h++) {
                            var u = document.createElement("tr"),
                                d = u.insertCell();
                            p[h].cells[n] && h < 5 && (d.innerHTML = p[h].cells[n].innerHTML, c.appendChild(u))
                        }
                    }
                    i[l].parentNode.insertBefore(c, i[l].nextSibling)
                }
        }
    }(), "function" != typeof Object.create && (Object.create = function(e) {
        function t() {}
        return t.prototype = e, new t
    }),
    function(e, t, i) {
        "use strict";
        var n = {
            afterSlide: function() {
                var e = this;
                e.animating = !1, e.setStructure(), e.swipeLeftPosition = null, !0 === e.settings.autoplay && e.autoplay()
            },
            animateSlide: function(e, t) {
                var n = this;
                !1 === n.transformsEnabled ? n.slideContainer.animate({
                    left: e
                }, n.settings.speed, n.settings.easing, t) : !1 === n.transitionsEnabled ? i({
                    animationPosition: n.currentLeftPosition
                }).animate({
                    animationPosition: e
                }, {
                    duration: n.settings.speed,
                    easing: n.settings.easing,
                    step: function(e) {
                        e = Math.ceil(e), n.slideContainer.css(n.animationType, "translate( " + e + "px, 0px )")
                    },
                    complete: function() {
                        t && t()
                    }
                }) : (n.applyTransition(), e = Math.ceil(e), n.slideContainer.css(n.animationType, "translate3d( " + e + "px, 0px, 0px )"), t && setTimeout(function() {
                    n.removeTransition(), t()
                }, n.settings.speed))
            },
            applyTransition: function(e) {
                var t = this;
                !1 === t.settings.fade ? t.slideContainer.css(t.transitionType, t.transformType + " " + t.settings.speed + "ms " + t.settings.easing) : t.slides.eq(e).css(t.transitionType, "opacity " + t.settings.speed + "ms " + t.settings.easing)
            },
            autoplay: function() {
                var e, t = this;
                t.autoplayTimer && clearInterval(t.autoplayTimer), t.slideCount > 1 && (t.autoplayTimer = setInterval(function() {
                    e = t.currentSlide + 1, t.slideAction(e, t)
                }, t.settings.autoplaySpeed))
            },
            build: function() {
                var e = this;
                e.slides = e.slider.children(e.settings.slide + ":not(.ds-copy)").addClass("ds-slide"), e.slideCount = e.slides.length, e.slides.each(function(e, t) {
                    i(t).attr("data-ds-index", e)
                }), e.slider.addClass("ds-slider"), e.slideCount > 0 && (e.slideContainer = e.slides.wrapAll('<div class="ds-container" />').parent()), e.outerContainer = e.slideContainer.wrap('<div class="ds-outer-container" />').parent(), e.slideContainer.css("opacity", 0), e.setInfinite(), e.setArrows(), e.setDots(), e.updateDots(), e.setSlideClasses(e.currentSlide)
            },
            changeSlide: function(e) {
                var t, n = e.data.dsObject,
                    s = i(e.currentTarget);
                if (s.is("a") && e.preventDefault(), s.is("li") || (s = s.closest("li")), "prev" === e.data.type) n.slideCount > 1 && n.slideAction(n.currentSlide - 1, n);
                else if ("next" === e.data.type) n.slideCount > 1 && n.slideAction(n.currentSlide + 1, n);
                else {
                    if ("index" !== e.data.type) return;
                    t = s.index(), n.slideAction(t, n)
                }
            },
            fadeAction: function(e, t, i) {
                var n = this;
                !1 === n.transitionsEnabled ? n.slides.eq(e).animate({
                    opacity: 0,
                    zIndex: -1
                }, n.settings.speed, n.settings.easing) : (n.applyTransition(e), n.slides.eq(e).css({
                    opacity: 0,
                    zIndex: -1
                })), !1 === n.transitionsEnabled ? (n.slides.eq(t).css({
                    zIndex: 1
                }), n.slides.eq(t).animate({
                    opacity: 1
                }, n.settings.speed, n.settings.easing, i)) : (n.applyTransition(t), n.slides.eq(t).css({
                    opacity: 1,
                    zIndex: 1
                }), i && setTimeout(function() {
                    n.removeTransition(t), i()
                }, n.settings.speed))
            },
            getLeftPosition: function(e) {
                var t = this;
                return t.slideOffset = 0, !0 === t.settings.infinite ? t.slideCount > 1 && (t.slideOffset = -1 * t.slideWidth) : e + 1 > t.slideCount && (t.slideOffset = (e + 1 - t.slideCount) * t.slideWidth), t.slideCount <= 1 && (t.slideOffset = 0), e * t.slideWidth * -1 + t.slideOffset
            },
            init: function(e, t) {
                var n = this,
                    s = i(e);
                s.hasClass("ds-initialized") || (s.addClass("ds-initialized"), n.setOptions(e, t), n.build(), n.setProperties(), n.loadSlider(), n.initEvents(), !0 === n.settings.autoplay && (console.log("playing"), n.paused = !1, n.autoplay()))
            },
            initEvents: function() {
                var t = this;
                !0 === t.settings.arrows && t.slideCount > 1 && (t.prevArrow.off("click").on("click", {
                    type: "prev",
                    dsObject: t
                }, t.changeSlide), t.nextArrow.off("click").on("click", {
                    type: "next",
                    dsObject: t
                }, t.changeSlide)), !0 === t.settings.dots && t.slideCount > 1 && i("li", t.dots).on("click", {
                    type: "index",
                    dsObject: t
                }, t.changeSlide), !0 === t.settings.autoplay && !0 === t.settings.pauseOnHover && (t.outerContainer.on("mouseenter", {
                    type: "pause",
                    dsObject: t
                }, t.pauseResume), t.outerContainer.on("mouseleave", {
                    type: "resume",
                    dsObject: t
                }, t.pauseResume)), t.outerContainer.on("touchstart mousedown", {
                    action: "start",
                    dsObject: t
                }, t.swipeAction), t.outerContainer.on("touchmove mousemove", {
                    action: "move",
                    dsObject: t
                }, t.swipeAction), t.outerContainer.on("touchend mouseup", {
                    action: "end",
                    dsObject: t
                }, t.swipeAction), t.outerContainer.on("touchcancel mouseleave", {
                    action: "end",
                    dsObject: t
                }, t.swipeAction), i(e).resize(function() {
                    t.setStructure()
                }), i(e).on("orientationchange", function() {
                    t.setStructure()
                })
            },
            loadSlider: function() {
                var e = this;
                !0 === e.settings.arrows && e.slideCount > 1 && (e.prevArrow.hide(), e.nextArrow.hide()), !0 === e.settings.dots && e.slideCount > 1 && e.dots.hide(), e.slider.addClass("ds-loading"), e.setStructure(), e.slideContainer.css({
                    opacity: 1
                }), e.slider.removeClass("ds-loading"), !0 === e.settings.arrows && e.slideCount > 1 && (e.prevArrow.show(), e.nextArrow.show()), !0 === e.settings.dots && e.slideCount > 1 && e.dots.show()
            },
            pauseResume: function(e) {
                var t = e.data.dsObject;
                "pause" === e.data.type ? (t.paused = !0, t.autoplayTimer && clearInterval(t.autoplayTimer)) : (t.paused = !1, t.autoplay())
            },
            removeTransition: function(e) {
                var t = this;
                !1 === t.settings.fade ? t.slideContainer.css(t.transitionType, "") : t.slides.eq(e).css(t.transitionType, "")
            },
            setArrows: function() {
                var e = this;
                !0 === e.settings.arrows && (e.prevArrow = i(e.settings.prevArrow).addClass("ds-arrow"), e.nextArrow = i(e.settings.nextArrow).addClass("ds-arrow"), e.slideCount > 1 && (e.isHtml.test(e.settings.prevArrow) ? e.prevArrow.prependTo(e.settings.appendArrows) : console.log("prevArrow parameter isn't HTML"), e.isHtml.test(e.settings.nextArrow) ? e.nextArrow.appendTo(e.settings.appendArrows) : console.log("nextArrow parameter isn't HTML"), !0 !== e.settings.infinite && e.prevArrow.addClass("ds-disabled")))
            },
            setCssPosition: function(e) {
                var t, i = this;
                t = Math.ceil(e), i.slideContainer.css(i.animationType, "translate3d( " + t + "px, 0px, 0px )")
            },
            setDots: function() {
                var e, t, n = this;
                if (!0 === n.settings.dots && n.slideCount > 1) {
                    for (n.slider.addClass("ds-has-dots"), e = i("<ul />").addClass("ds-dots"), t = 0; t < n.slideCount; t += 1) e.append(i("<li />").append('<button type="button" />'));
                    n.dots = e.appendTo(n.settings.appendDots), n.dots.find("li").first().addClass("ds-active")
                }
            },
            setFade: function() {
                var e, t = this;
                t.slides.each(function(n, s) {
                    e = t.slideWidth * n * -1, i(s).css({
                        position: "relative",
                        left: e,
                        top: 0,
                        zIndex: -1,
                        opacity: 0
                    })
                }), t.slides.eq(t.currentSlide).css({
                    zIndex: 1,
                    opacity: 1
                })
            },
            setInfinite: function() {
                var e, t = this,
                    n = null;
                if (!0 === t.settings.infinite && !1 === t.settings.fade) {
                    for (e = t.slideCount; e > t.slideCount - 1; e -= 1) n = e - 1, i(t.slides[n]).clone(!0).attr("id", "").attr("data-ds-index", n - t.slideCount).prependTo(t.slideContainer).addClass("ds-copy");
                    for (e = 0; e < 1; e += 1) n = e, i(t.slides[n]).clone(!0).attr("id", "").attr("data-ds-index", n + t.slideCount).appendTo(t.slideContainer).addClass("ds-copy");
                    t.slideContainer.find(".ds-copy").find("[id]").each(function() {
                        i(this).attr("id", "")
                    })
                }
            },
            setOptions: function(e, t) {
                var n = this,
                    s = i(e),
                    r = s.children();
                n.defaults = {
                    arrows: !1,
                    appendArrows: s,
                    appendDots: s,
                    prevArrow: '<div class="ds-prev">Prev</div>',
                    nextArrow: '<div class="ds-next">Next</div>',
                    autoplay: !1,
                    autoplaySpeed: 4e3,
                    dots: !0,
                    easing: "linear",
                    fade: !1,
                    infinite: !0,
                    pauseOnHover: !0,
                    slide: "." + i(r[0]).attr("class"),
                    speed: 400
                }, n.initials = {
                    animating: !1,
                    animationType: !1,
                    autoplayTimer: null,
                    dragging: !1,
                    currentLeftPosition: null,
                    currentSlide: 0,
                    dots: null,
                    outerContainer: null,
                    outerContainerWidth: null,
                    nextArrow: null,
                    paused: !0,
                    prevArrow: null,
                    slideContainer: null,
                    slideCount: null,
                    slider: s,
                    slides: null,
                    slideOffset: 0,
                    slideWidth: null,
                    swipeLeftPosition: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    transformType: null,
                    transitionsEnabled: !1,
                    transitionType: null
                }, n.isHtml = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.settings = i.extend({}, n.defaults, t), i.extend(n, n.initials)
            },
            setProperties: function() {
                var e = this,
                    i = t.body.style;
                void 0 === i.WebkitTransition && void 0 === i.MozTransition && void 0 === i.msTransition || (e.transitionsEnabled = !0), void 0 !== i.OTransform && (e.animationType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === i.perspectiveProperty && void 0 === i.webkitPerspective && (e.animationType = !1)), void 0 !== i.MozTransform && (e.animationType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === i.perspectiveProperty && void 0 === i.MozPerspective && (e.animationType = !1)), void 0 !== i.webkitTransform && (e.animationType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === i.perspectiveProperty && void 0 === i.webkitPerspective && (e.animationType = !1)), void 0 !== i.msTransform && (e.animationType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition"), void 0 !== i.transform && (e.animationType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = null !== e.animationType && !1 !== e.animationType
            },
            setSlideClasses: function(e) {
                var t, i, n = this;
                t = n.slider.find(".ds-slide").removeClass("ds-active ds-current"), n.slides.eq(e).addClass("ds-current"), e >= 0 && e <= n.slideCount - 1 ? n.slides.eq(e).addClass("ds-active") : t.length <= 1 ? t.addClass("ds-active") : (i = !0 === n.settings.infinite ? e + 1 : e, n.slideCount - e < 1 ? t.eq(i - 1).addClass("ds-active") : t.eq(i).addClass("ds-active"))
            },
            setStructure: function() {
                var e = this;
                e.outerContainerWidth = e.outerContainer.width(), e.slideWidth = e.outerContainerWidth, e.slideContainer.width(e.slideWidth * e.slideContainer.children(".ds-slide").length), e.slideContainer.children(".ds-slide").width(e.slideWidth), !1 === e.settings.fade ? e.setCssPosition(e.getLeftPosition(e.currentSlide)) : e.setFade()
            },
            slideAction: function(e, t) {
                var i, n, s, r, o = null;
                if (!(!0 === t.settings.fade && t.currentSlide === e || t.slideCount <= 1)) return i = e, o = t.getLeftPosition(i), r = t.getLeftPosition(t.currentSlide), t.currentLeftPosition = null === t.swipeLeftPosition ? r : t.swipeLeftPosition, !1 === t.settings.infinite && (i < 0 || i >= t.slideCount) ? void(!1 === t.settings.fade && (i = t.currentSlide, t.animateSlide(r, function() {
                    t.afterSlide(i)
                }))) : (!0 === t.settings.autoplay && clearInterval(t.autoplayTimer), n = i < 0 ? t.slideCount + i : i >= t.slideCount ? i - t.slideCount : i, t.animating = !0, s = t.currentSlide, t.currentSlide = n, t.setSlideClasses(t.currentSlide), t.updateDots(), t.updateArrows(), !0 === t.settings.fade ? void t.fadeAction(s, n, function() {
                    t.afterSlide(n)
                }) : void t.animateSlide(o, function() {
                    t.afterSlide(n)
                }))
            },
            swipeAction: function(e) {
                var t = e.data.dsObject;
                if (t.touchObject.minSwipe = t.outerContainerWidth / 5, "start" === e.data.action) {
                    var i;
                    if (t.slideCount <= 1) return t.touchObject = {}, !1;
                    void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (i = e.originalEvent.touches[0]), void 0 !== i ? (t.touchObject.currentX = i.pageX, t.touchObject.startX = t.touchObject.currentX) : (t.touchObject.currentX = e.clientX, t.touchObject.startX = t.touchObject.currentX), t.dragging = !0
                } else if ("move" === e.data.action) {
                    var i, n, s, r;
                    if (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (i = e.originalEvent.touches[0]), !t.dragging) return !1;
                    if (n = t.getLeftPosition(t.currentSlide), t.touchObject.currentX = void 0 !== i ? i.pageX : e.clientX, t.touchObject.swipeLength = Math.round(t.touchObject.currentX - t.touchObject.startX), s = t.swipeDirection(), r = t.touchObject.swipeLength, !1 === t.settings.infinite && (0 === t.currentSlide && "right" === s || t.currentSlide >= t.slideCount && "left" === s) && (r = .35 * t.touchObject.swipeLength), t.swipeLeftPosition = n + r, !0 === t.settings.fade) return !1;
                    if (!0 === t.animating) return t.swipeLeftPosition = null, !1;
                    t.setCssPosition(t.swipeLeftPosition)
                } else if ("end" === e.data.action) {
                    var o, a, l, r;
                    if (t.dragging = !1, void 0 === t.touchObject.currentX) return !1;
                    l = t.touchObject.currentX > t.touchObject.startX ? 1 : -1, r = t.touchObject.swipeLength * l, r >= t.touchObject.minSwipe ? (a = t.swipeDirection(), "left" === a ? o = t.currentSlide + 1 : "right" === a && (o = t.currentSlide - 1), "vertical" !== a && (t.slideAction(o, t), t.touchObject = {})) : t.touchObject.startX !== t.touchObject.currentX && (t.slideAction(t.currentSlide, t), t.touchObject = {})
                }
            },
            swipeDirection: function() {
                var e = this;
                return e.touchObject.startX > -1 && e.touchObject.currentX > -1 ? e.touchObject.startX > e.touchObject.currentX ? "left" : "right" : "vertical"
            },
            updateArrows: function() {
                var e = this;
                !0 === e.settings.arrows && e.slideCount > 1 && !e.settings.infinite && (e.prevArrow.removeClass("ds-disabled"), e.nextArrow.removeClass("ds-disabled"), 0 === e.currentSlide ? (e.prevArrow.addClass("ds-disabled"), e.nextArrow.removeClass("ds-disabled")) : e.currentSlide >= e.slideCount - 1 && (e.nextArrow.addClass("ds-disabled"), e.prevArrow.removeClass("ds-disabled")))
            },
            updateDots: function() {
                var e = this;
                null !== e.dots && (e.dots.find("li").removeClass("ds-active"), e.dots.find("li").eq(Math.floor(e.currentSlide)).addClass("ds-active"))
            }
        };
        i.fn.dsSlider = function(e) {
            return this.each(function() {
                Object.create(n).init(this, e)
            })
        }
    }(window, document, jQuery);
var App = {};
App.General = {
        modal_callback: !1,
        run: function(e) {
            var t, i;
            for (t in e) i = e[t], "function" == typeof App.General[i] && App.General[i]()
        },
        events: function() {
            $(document).on("click", ".lightbox, .lightbox .close", App.General.modal_close)
        },
        admin_links: function() {
            var e = 150;
            $(".screen-reader-shortcut").each(function() {
                $(this).attr("tabindex", e), e++
            })
        },
        phone_links: function() {
            $('a[href^="tel:"]').each(function() {
                var e = $(this).prop("href"),
                    t = e.replace("tel:", ""),
                    i = t.substr(0, 2);
                "1-" !== i && (t = "1-" + t), i = t.substr(0, 1), "+" !== i && (t = "+" + t), $(this).removeAttr("target"), $(this).prop("href", "tel:" + t)
            }), App.General.is_mobile() || $('a[href^="tel:"]').css("cursor", "default").on("click", function(e) {
                return e.preventDefault(), !1
            })
        },
        active_state: function() {
            var e = $(".map-states__graphic .st0");
            e.closest("a.anchor-state").addClass("disable-click").on("click", function(e) {
                return e.preventDefault(), !1
            }), e.hasClass("selected") && $(".st0.selected").addClass("enable-click")
        },
        hide_keyboard: function(e) {
            e.attr("readonly", "readonly"), e.is("textarea") && e.attr("disabled", "true"), setTimeout(function() {
                e.removeAttr("readonly"), e.is("textarea") && e.removeAttr("disabled")
            }, 100)
        },
        modal: function(e, t, i) {
            var n = $(e),
                s = $(".lightbox"),
                r = $("body"),
                o = $("html");
            n.length && ("function" == typeof t && t(), s.length || (s = $("<div />", {
                class: "lightbox"
            }).appendTo(r)), s.html(n.html()).show(), o.css("overflow", "scroll"), r.css("overflow", "hidden"), App.General.after_callback = i)
        },
        modal_close: function(e) {
            e.preventDefault(), e.stopPropagation(), $(".lightbox").remove(), $("html, body").css("overflow", "inherit"), "function" == typeof App.General.after_callback && App.General.after_callback()
        },
        newsletter: function() {
            $(".newsletter_box").hide(), $("form", ".medicare-guide-section").on("submit", function(e) {
                e.preventDefault();
                var t = $("[name=email]", this),
                    i = t.val(),
                    n = $("[type=submit]", this),
                    s = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
                return !i || i && !s.test(i) ? (tooltip(t, "show", "Please enter your email."), t.focus(), !1) : (tooltip(t, "hide"), n.prop("disabled", !0), $.ajax({
                    url: $(this).attr("action"),
                    method: "post",
                    async: !0,
                    dataType: "json",
                    data: $(this).serialize(),
                    complete: function() {
                        t.val(""), n.prop("disabled", !1), App.General.modal(".newsletter_box")
                    }
                }), !0)
            })
        },
        scrollnav: function() {
            var e = 20,
                t = 20,
                i = App.General.is_mobile() && !App.General.is_tablet();
            i && (e = 50, t = 40), $(".post__article").scrollNav({
                sections: "h2",
                subSections: !0,
                sectionElem: "section",
                className: "scroll-nav",
                showHeadline: !0,
                headlineText: "In This Article:",
                showTopLink: !1,
                fixedMargin: t,
                scrollOffset: e,
                fixOffset: i,
                animated: !0,
                speed: 500
            }), i && $(".scroll-nav__heading, .scroll-nav__link").on("click", function() {
                $(".scroll-nav__heading").toggleClass("icon-active"), $(".scroll-nav__list").slideToggle()
            })
        },
        scrollTo: function(e, t, i, n, s) {
            var r;
            t = t || 2500, i = i || 0, n = n || "linear", s = s || function() {}, r = App.General.is_mobile() ? 70 + i : 5 + i, $("html, body").stop().animate({
                scrollTop: $(e).offset().top - r
            }, t, n, s)
        },
        scroll_map: function() {
            var e;
            e = App.General.is_mobile() ? 50 : 20, $(".map-states__graphic a").on("click", function(t) {
                var i = $(this);
                $("html, body").stop().animate({
                    scrollTop: $(i.attr("xlink:href")).offset().top - e
                }, 500), t.preventDefault()
            })
        },
        equal_height: function() {
            var e = function() {
                var e, t = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                e = function(e, t) {
                    var i, n, s = 0,
                        r = 0,
                        o = [],
                        a = 0,
                        l = 0;
                    $(e).each(function() {
                        if (l++, n = $(this), n.outerHeight("auto"), a = n.offset().top, r !== a) {
                            for (i = 0; i < o.length; i++) o[i].outerHeight(s);
                            o.length = 0, r = a, s = n.outerHeight(), o.push(n)
                        } else o.push(n), s = s < n.outerHeight() ? n.outerHeight() : s;
                        for (i = 0; i < o.length; i++) o[i].outerHeight(s);
                        l === $(e).length && "function" == typeof t && t()
                    })
                }, t >= 480 ? e(".explore-navigation .explore-option", function() {
                    $(".explore-navigation .explore-option").addClass("vertical-align")
                }) : $(".explore-navigation .explore-option").removeAttr("style").removeClass("vertical-align"), t >= 650 ? (e(".explore-section .explore-box .top"), e(".explore-section .explore-box .inner-wrapper", function() {
                    $(".explore-section .explore-box .inner-wrapper").addClass("vertical-align")
                })) : ($(".explore-section .explore-box .top").removeAttr("style"), $(".explore-section .explore-box .inner-wrapper").removeAttr("style").removeClass("vertical-align")), t >= 1e3 ? e(".featured-section .featured-inner-wrapper h4") : $(".featured-section .featured-inner-wrapper h4").removeAttr("style"), t >= 1250 ? e(".why-section .testimonial") : $(".why-section .testimonial").removeAttr("style"), e(".author .author-inner", function() {
                    $(".author .author-inner").addClass("vertical-align")
                })
            };
            e(), $(window).load(function() {
                e()
            }), $(window).resize(function() {
                e()
            })
        },
        hover_effect: function() {
            var e = [$(".button"), $(".submit-wrapper"), $(".explore-section .explore-box"), $(".featured-section .featured-article"), $(".superfooter-col"), $(".post"), $(".sticky-header .quotes-cta")],
                t = function(e) {
                    e.removeClass("hover-out").addClass("hover-in")
                },
                i = function(e) {
                    e.removeClass("hover-in").addClass("hover-out"), setTimeout(function() {
                        e.removeClass("hover-out")
                    }, 250)
                };
            $.each(e, function(e, n) {
                n.bind("touchstart", function() {
                    t($(this))
                }).bind("touchend", function() {
                    i($(this))
                }), n.hoverIntent({
                    over: function() {
                        t($(this))
                    },
                    out: function() {
                        i($(this))
                    },
                    interval: 50
                })
            })
        },
        ua_regex: function(e) {
            return e.test(navigator.userAgent)
        },
        is_ios: function() {
            return App.General.ua_regex(/iPod|iPhone|iPad/i)
        },
        is_mobile: function() {
            return App.General.ua_regex(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i)
        },
        is_ipad: function() {
            return App.General.ua_regex(/iPad/i)
        },
        is_tablet: function() {
            return App.General.ua_regex(/Tablet|iPad/i)
        },
        menu_toggle: function() {
            $("body").on("click", ".menu-toggle-container, .canvas-cover", function() {
                $("body").toggleClass("nav-open")
            })
        },
        open_enrollment: function() {
            if (!window.location.pathname.match("/(form|thank-you|drip-form)/")) {
                var e, t, i, n, s = moment().year(),
                    r = s + "-10-15 00:00:00",
                    o = s + "-12-07 24:00:00",
                    a = "days";
                moment().isBefore(r) && moment().isBefore(o) ? (t = moment(r).format("MM/DD/YYYY") + " 00:00:00", i = moment(t).subtract(2, "months").format("MM/DD/YYYY") + " 00:00:00", n = moment(t).diff(moment(), "days"), n <= 1 && (n = 1, a = "day"), moment().isAfter(i) && ($("body").addClass("before-open-enrollment"), $(".open-enrollment-banner .days").html(n + " " + a))) : moment().isAfter(r) && moment().isBefore(o) ? (t = moment(o).format("MM/DD/YYYY") + " 00:00:00", n = moment(t).diff(moment(), "days"), 1 === n && (n = 1, a = "day"), $("body").addClass("current-open-enrollment"), $(".open-enrollment-banner .days").html(n + " " + a)) : moment().isAfter(r) && moment().isAfter(o) && (e = s + 1, r = e + "-10-15 00:00:00", t = moment(r).format("MM/DD/YYYY") + " 00:00:00", i = moment(t).subtract(2, "months").format("MM/DD/YYYY") + " 00:00:00", n = moment(t).diff(moment(), "days"), 1 === n && (n = 1, a = "day"), moment().isAfter(i) && ($("body").addClass("before-open-enrollment"), $(".open-enrollment-banner .days").html(n + " " + a)))
            }
        },
        responsive_table: function() {
            $("table").stacktable()
        },
        scroll_trigger: function() {
            var e = function() {
                var e = {
                    testimonials: {
                        element: $(".why-section .testimonial-wrapper")
                    },
                    table: {
                        element: $(".how-ms-works-section .ms-table")
                    },
                    featuredArticles: {
                        element: $(".featured-section .col")
                    }
                };
                Object.keys(e).forEach(function(t) {
                    var i, n = e[t].element;
                    n.length > 0 && n.each(function() {
                        i = $(this).offset().top - $(window).height() + 200, $(window).scrollTop() >= i ? $(this).addClass("triggered") : $(this).removeClass("triggered")
                    })
                })
            };
            e(), $(window).scroll(function() {
                e()
            })
        },
        footer_disclaimer: function() {
            var e = $(".footer-bottom span.show-more"),
                t = $(".footer-bottom .more");
            e.on("click", function(i) {
                i.preventDefault(), e.toggleClass("less"), t.toggleClass("open"), t.hasClass("open") ? t.velocity("finish").velocity("slideDown", {
                    display: "block",
                    duration: 250,
                    easing: "easeInOut"
                }) : t.velocity("finish").velocity("slideUp", {
                    display: "none",
                    duration: 250,
                    easing: "easeInOut"
                })
            })
        },
        simple_select: function() {
            $("select#states").simpleselect().on("change", function() {
                var e = $(this).val();
                $("html, body").stop().animate({
                    scrollTop: $(e).offset().top - 50
                }, 500)
            })
        },
        slick_slider: function() {
            var e, t = $(".testimonials"),
                i = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            e = function() {
                i >= 1250 && t.hasClass("slick-initialized") ? t.slick("unslick") : i < 1250 && !t.hasClass("slick-initialized") && t.slick({
                    adaptiveHeight: !0,
                    arrows: !0,
                    dots: !1,
                    easing: "easeInOutQuart",
                    nextArrow: '<i class="fa fa-chevron-right"></i>',
                    prevArrow: '<i class="fa fa-chevron-left"></i>',
                    speed: 400
                })
            }, e(), $(window).resize(function() {
                i = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, e()
            })
        },
        smooth_scroll: function() {
            if ($('a[href^="#"]').on("click", function(e) {
                    e.preventDefault();
                    var t = $(this).attr("href");
                    $(t).velocity("scroll", {
                        duration: 800,
                        easing: "ease-in-out"
                    })
                }), window.location.hash) {
                var e = window.location.hash,
                    t = $(e);
                window.scrollTo(0, 0), t.velocity("scroll", {
                    duration: 800,
                    easing: "ease-in-out"
                })
            }
        },
        sticky_header: function() {
            var e, t = $(".sticky-header"),
                i = function() {
                    e = $(window).scrollTop(), e >= 400 ? t.addClass("show") : t.removeClass("show")
                };
            i(), $(window).scroll(function() {
                i()
            })
        },
        sticky_sidebar: function() {
            App.General.is_mobile() ? $(".scroll-nav__wrapper").dsStickySidebar() : $(".scroll-nav__wrapper").dsStickySidebar({
                stickyHeader: $(".header"),
                queryWidth: 1250
            }), $(".sidebar").dsStickySidebar({
                stickyHeader: $(".sticky-header"),
                queryWidth: 1250
            })
        },
        swipe_effect: function() {
            var e = function() {
                var e = $(".explore-box .top-wrapper").outerWidth();
                $(".explore-box .top-hover-inner").each(function() {
                    $(this).css("width", e)
                })
            };
            e(), $(window).load(function() {
                e()
            }), $(window).resize(function() {
                e()
            })
        },
        wisepops_dynamic_tfn: function() {
            var e = new MutationObserver(function(e) {
                    function t(e) {
                        return 0 === e.href.indexOf("tel:")
                    }

                    function i(e, t) {
                        var i = [];
                        for (var n in e) i.push(n);
                        return i.sort(function(i, n) {
                            return "desc" === t ? e[n] - e[i] : e[i] - e[n]
                        })
                    }
                    e.forEach(function(e) {
                        if (-1 !== e.target.style.cssText.indexOf("visible")) {
                            for (var n = "", s = Array.prototype.slice.call(document.links), r = s.filter(t), o = [], a = 0; a < r.length; a++) {
                                var l = r[a].href.replace(/[^0-9]/g, "");
                                l = "1" === l[0] ? l : "1" + l, o[l] = o[l] ? o[l] + 1 : 1
                            }
                            n = i(o, "desc")[0], n = n.replace(/[^0-9]/g, ""), n = "1" === n[0] ? n : "1" + n, n = n.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, "$1-$2-$3-$4"), 0 !== $("#wisepop-content").length && ($("#wisepop-content").find("a").attr("href", "tel:+" + n), $("#wisepop-content").find("a").html($("#wisepop-content").find("a").html().replace(/<b>(.+)<\/b>/, "<b>" + n + "</b>")))
                        }
                    })
                }),
                t = setInterval(function() {
                    if (/loaded|complete/.test(document.readyState)) try {
                        var i = $('div[id^="wisepop-modal"]');
                        e.observe(i[0], {
                            attributes: !0,
                            attributeFilter: ["style"]
                        }), document.result_dynamic_tfn = 1
                    } catch (e) {
                        document.result_dynamic_tfn = 0
                    }
                    1 === document.result_dynamic_tfn && clearInterval(t)
                }, 100)
        },
        thank_you: function() {
            function e() {
                var e = {
                    update_connectme_click_lead: !0
                };
                dataLayer.push({
                    event: "ConnectMe_Click"
                }), ajax_json(".", !1, !0, e, null, function(e) {
                    dataLayer.push({
                        event: "ConnectMe_Lead_Update",
                        status: e.status,
                        leadId: e.LeadId,
                        error: e.errors
                    })
                })
            }
            if ($("#connectme").length > 0) {
                var t = $('div[class="connectme"]');
                new MutationObserver(function(i) {
                    i.forEach(function(i) {
                        "childList" === i.type && (t = $('a[id^="g3cm_btn"]'), t[0].onclick = e)
                    })
                }).observe(t[0], {
                    attributes: !0,
                    childList: !0,
                    subtree: !0
                })
            }
        },
        plan_quiz: function() {
            function e(e) {
                var t = parseFloat(100 / n) * e;
                t = t.toFixed(), $(".quiz-progress-bar").css("width", t + "%")
            }
            var t, i, n, s = 1;
            n = $(".plan__quiz-content").find(".question").length, $(".quiz-progress").append("<span class='quiz-total'>" + n + " questions </span>"), $(".quiz-button").on("click", function() {
                $(".quiz-progress .quiz-total").remove(), $(".question:eq(0)").show(), $(this).parents(".intro").hide(), $(".quiz-progress-bar").text(s + "/" + n), e(s)
            });
            var r = 0,
                o = 0,
                a = 0,
                l = 0,
                c = 0,
                u = 0;
            $("input:radio[name=planAnswer]").on("click", function() {
                switch (t = $(this).parents(".question"), i = $(this).parents(".question").next(), i.show(), t.hide(), ++s, s <= n && (e(s), $(".quiz-progress-bar").text(s + "/" + n)), $(this).val()) {
                    case "answer1":
                        o++, a++, l++, c++, u++;
                        break;
                    case "answer2":
                        r++;
                        break;
                    case "answer3":
                        a++, c++;
                        break;
                    case "answer4":
                        r++, o++, l++, u++;
                        break;
                    case "answer5":
                        r++, a++, l++, c++, u++;
                        break;
                    case "answer6":
                        r++, o++;
                        break;
                    case "answer7":
                        a++, l++, c++, u++;
                        break;
                    case "answer8":
                        r++, o++;
                        break;
                    case "answer9":
                        c++, u++;
                        break;
                    default:
                        r++, o++, a++, l++
                }
                var d = Math.max(r, o, a, l, c, u);
                s === n + 1 && (u === d ? $("#plan-g").show() : c === d ? $("#plan-f").show() : l === d ? $("#plan-d").show() : a === d ? $("#plan-c").show() : o === d ? $("#plan-b").show() : r === d && $("#plan-a").show())
            })
        }
    }, App.Zip = {
        context: !1,
        submit: !1,
        footprint: !1,
        processing: !1,
        validate: !0,
        state: "",
        zip: 0,
        class_name: "error",
        method: "async",
        zip_incorrect: "Please enter a valid ZIP code.",
        zip_footprint: "Sorry, this product is not available in your state.",
        zip_required: "We need your ZIP code to find plans in your area.",
        set_process: function(e) {
            App.Zip.processing = e
        },
        is_active_zip: function(e, t, i, n) {
            var s = {
                error: !0
            };
            return i || (i = function() {
                return App.Zip.set_process(!0), !0
            }), n || (n = function(e) {
                return App.Zip.set_process(!1), e
            }), (e = $.trim(e)) ? (ajax_json(".", !1, t, {
                check_zip: e
            }, i, n), s) : s
        },
        async: function(e, t, i) {
            return App.Zip.is_active_zip(e, !0, t, i)
        },
        sync: function(e, t, i) {
            return App.Zip.is_active_zip(e, !1, t, i)
        },
        progress: function() {
            return $("[type=submit]", App.Zip.context).prop("disabled", !0), !0
        },
        form_scroll: function(e, t) {
            var i = $(".general-page-content.form-container").offset().top - 70;
            $("html, body").animate({
                scrollTop: i
            }, t)
        },
        city_state: function(e) {
            "" === e && (App.Zip.submit = !1), $(".city-state").html(e), e ? $(".city-state").show() : $(".city-state").hide()
        },
        success: function(e) {
            var t = $("[name=zip]", App.Zip.context);
            if (t.qtip("destroy"), e.error && (e.not_approved ? tooltip(t, "show", App.Zip.zip_footprint) : e.out_of_footprint ? tooltip(t, "show", App.Zip.zip_footprint) : (t.addClass(App.Zip.class_name), $("[type=submit]", App.Zip.context).prop("disabled", !1), tooltip(t, "show", App.Zip.zip_incorrect), t.focus(), App.Zip.submit = !1)), !e.error) {
                $("[name=city]", App.Zip.context).val(e.city), $("[name=state]", App.Zip.context).val(e.state), t.removeClass(App.Zip.class_name);
                App.Zip.context[0].action = "/form";
                if ($("#isCarrier").val()) return App.Zip.submit = !1, $("#zipform").val(App.Zip.zip), App.Zip.form_scroll(".general-page-content.form-container"), $("input[name='zip']").trigger("change"), $("[name=city]").val(e.city), $("[name=state]").val(e.state), !1;
                App.Zip.submit = !0
            }
            App.Zip.set_process(!1)
        },
        form_success: function(e) {
            var t, i, n, s, r = $("[name=zip]", App.Zip.context);
            if (App.Zip.footprint = !1, e.error) e.not_approved || e.out_of_footprint ? (App.Zip.footprint = !0, App.Zip.state = e.state, n = App.Zip.zip_footprint, i = !0) : n = App.Zip.zip_incorrect, tooltip(r, "show", n, !1, !1), r.qtip("show"), r.addClass(App.Zip.class_name), r.focus(), App.Zip.submit = !1, $("select[name=state]", App.Zip.context).val("");
            else {
                i = !0;
                try {
                    s = $("select[name=state]", App.Zip.context), $("button", s.closest(".btn-group")).removeClass(App.Zip.class_name), s.val(e.state)
                } catch (e) {}
                App.Zip.state = e.state, App.Zip.submit = !0, App.Form.validate_form("zip")
            }
            App.Zip.validate = !1, i && (t = e.city + ", " + e.state, $("[name=city]", App.Zip.context).val(e.city), $("[name=state]", App.Zip.context).val(e.state)), App.Zip.city_state(t), App.Zip.set_process(!1)
        },
        init: function() {
            $("[name=zip]", ".widget-zipcode-box").prop("autocomplete", "off"), $("#zip-code").prop("autocomplete", "off"), $("select[name=state]", App.Zip.context).on("change", function() {
                var e = $(this).val();
                App.Zip.zip && e !== App.Zip.state && $("#zip-code").val("")
            }), $("[name=zip]").on("blur keyup input change", function(e) {
                var t, i = $.trim($(this).val());
                switch (i.length) {
                    case 5:
                        t = isNumberKey(e) && "keyup" === e.type || "keyup" !== e.type, t && !App.Zip.processing && App.Zip.validate && (App.Zip.zip = i, "function" == typeof App.Zip[App.Zip.method] && App.Zip[App.Zip.method](App.Zip.zip, !1, App.Zip.form_success));
                        break;
                    case 4:
                        App.Zip.validate = !0, App.Zip.submit = !1, App.Form.validate_form("zip");
                        break;
                    default:
                        App.Zip.city_state(), App.Zip.validate = !0, App.Zip.submit = !1;
                        try {
                            $("select[name=state]", App.Zip.context).selectpicker("val", "")
                        } catch (e) {
                            $("select[name=state]", App.Zip.context).val("")
                        }
                }
            }), $("[name=zip]", ".widget-zipcode-box").on("focus", function(e) {
                $(this).qtip("show"), App.Zip.context = $(this).closest("form")
            }), $("[name=zip]", ".widget-zipcode-box").on("keyup", function(e) {
                $("[type=submit]", ".widget-zipcode-box").prop("disabled", !1)
            }), $(".widget-zipcode-box").on("submit", function(e) {
                var t = $("[name=zip]", $(this));
                return App.Zip.context = $(this), App.Zip.zip = $.trim(t.val()), App.Zip.zip && 5 === App.Zip.zip.length ? (t.addClass(App.Zip.class_name), App.Zip.sync(App.Zip.zip, App.Zip.progress, App.Zip.success), App.Zip.submit ? dataLayer.push({
                    event: "zipCodeSubmitted",
                    zip: App.Zip.zip
                }) : e.preventDefault(), App.Zip.submit) : (tooltip(t, "show", App.Zip.zip_required, "focus"), t.addClass(App.Zip.class_name).focus(), e.preventDefault(), !1)
            })
        }
    }, App.Form = {
        errors: !1,
        new_errors: !0,
        error: "error",
        step: 1,
        focus: 1,
        cache: {},
        is_dripform: function() {
            return $("form.drip-form").length
        },
        init: function() {
            App.Form.autocomplete(), App.Form.masks(), App.Form.events(), App.Form.zip(), App.Form.tabindex(), $("form.drip-form").length && (App.Form.drip_create(), App.Form.track_steps())
        },
        validate: {
            message: {
                approve: "",
                range: "{title} must be between {min} and {max} characters long"
            },
            approve: function(e) {
                var t;
                void 0 === e.attr.min && (e.attr.min = 2), void 0 === e.attr.max && (e.attr.max = 100), void 0 === e.attr.message && (e.attr.message = App.Form.validate.message.range);
                try {
                    t = approve.value(e.value, {
                        title: e.attr.title,
                        range: {
                            min: e.attr.min,
                            max: e.attr.max,
                            message: e.attr.message
                        }
                    })
                } catch (e) {
                    t = {
                        approved: "",
                        errors: e
                    }
                }
                return App.Form.validate.message.approve = t.errors, t.approved
            },
            regex: function(e) {
                return e.regex.test(e.value)
            },
            parse_fullname: function(e) {
                var t, i, n, s, r, o;
                return t = ["mr", "mrs", "ms", "dr"], i = ["ii", "iii", "iv", "jr", "sr", "phd", "md", "jnr", "snr", "junior", "senior"], n = e.replace(/[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Å Ã™ÃšÃ›ÃœÃÅ¸ÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Å¡Ã¹ÃºÃ»Ã¼Ã½Ã¿Ã¾\s]/g, "").replace(/\s+/g, " "), n = $.trim(n).split(" ").filter(function(e, t) {
                    return e.length > 1
                }), s = n.length - 1, n.length > 1 && (r = array_filter(n[0].toLowerCase(), "g", t) ? k(n, 1) : k(n, 0), o = array_filter(n[s].toLowerCase(), "g", i) ? k(n, s - 1) : k(n, s)), o = s && r !== o ? o : "", {
                    full: e,
                    part: n,
                    first: r,
                    last: o
                }
            },
            fullname: function(e) {
                var t, i;
                return e.regex = /[`~0123456789!@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/gi, e.value && (t = e.value, e.value = App.Form.validate.approve(e), e.value ? (i = App.Form.validate.parse_fullname(t), $("#firstname").val(i.first), $("#lastname").val(i.last), i.first && i.last || (e.value = !1), e.value && e.regex.test(t) && (e.value = !1, e.tooltip = e.attr.error_char)) : e.errors = App.Form.validate.message.approve), e.regex = "", e
            },
            firstname: function(e) {
                return App.Form.validate.fullname(e)
            },
            lastname: function(e) {
                return e.value && (e.value = App.Form.validate.approve(e), e.value || (e.errors = App.Form.validate.message.approve)), e
            },
            address: function(e) {
                return e.value && (e.value = App.Form.validate.approve(e), e.value || (e.errors = App.Form.validate.message.approve)), e
            },
            state: function(e) {
                return e.group = $("button", e.focus.closest(".btn-group")), e
            },
            zip: function(e) {
                return App.Zip.footprint && (e.tooltip = e.attr.footprint), e.value = App.Zip.submit, App.Zip.processing && (e.value = !0), e
            },
            birthdate: function(e) {
                return e.regex = /^(0[1-9]|1[012])[\/](0[1-9]|[12][0-9]|3[01])[\/](19|20)\d\d+$/, e.value = trim_mask(e.value), e.value && !App.Form.validate.regex(e) && (e.value = !1, e.tooltip = e.attr.error_valid), e.value && !App.Form.validate_age(e.value) && (e.value = !1, e.tooltip = e.attr.error_age), e
            },
            gender: function(e) {
                var t = $("[name=" + e.name + "]:checked", App.Zip.context);
                return e.qtip = $(".radio-row", App.Zip.context), e.group = $(".radio-row", App.Zip.context), e.focus = $(".radio-box", e.group).first(), e.value = t.length ? t.val() : null, e.toolshow = !App.Form.errors, e
            },
            phone: function(e) {
                return e.regex = /^\(\d{3}\) \d{3}-\d{4}$/i, e
            },
            email: function(e) {
                return e.regex = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/, e
            }
        },
        validate_form: function(e) {
            var t, i, n, s, r;
            return App.Form.new_errors && (App.Form.errors = !1), e = e || !1, s = {
                tooltip: "",
                error: "",
                toolshow: !1,
                toolhide: !1,
                position: !1
            }, n = {
                firstname: {
                    max: 50,
                    title: "Full Name",
                    error: "Please enter your full name.",
                    error_char: "Please only enter letters for your full name."
                },
                gender: {
                    error: "Please select an option."
                },
                birthdate: {
                    error_age: "This product is not available for your age.",
                    error: "We need your date of birth to check if youâ€™re eligible for a plan.",
                    error_valid: "Please enter a valid date (MM/DD/YYYY)."
                },
                address: {
                    min: 6,
                    max: 40,
                    error: "We need your street address for an accurate quote.",
                    message: "Street address must be between 6 and 40 characters long."
                },
                zip: {
                    footprint: "Sorry, this product is not available in your state.",
                    error: "We need your ZIP code to find plans in your area."
                },
                phone: {
                    error: "We need your phone number to call you with your free quote.",
                    error_valid: "Please enter a valid phone number."
                },
                email: {
                    error: "Please enter your email address.",
                    error_valid: "Please enter a valid email address."
                }
            }, $.each(n, function(n, o) {
                s.name = n, $.each(s, function(e, t) {
                    void 0 === o[e] && (o[e] = t)
                }), e && e.name !== o.name || (i = $("[name=" + o.name + "]", App.Zip.context), i.length && (t = {
                    method: n,
                    attr: o,
                    current: e,
                    name: o.name,
                    qtip: i,
                    focus: i,
                    group: i,
                    value: $.trim(i.val()),
                    tooltip: o.error,
                    toolshow: o.toolshow,
                    toolhide: o.toolhide,
                    position: o.position,
                    border: !0,
                    error: !1,
                    errors: "",
                    regex: ""
                }, "function" == typeof App.Form.validate[t.method] && (t = App.Form.validate[t.method](t)), t.error && (App.Form.errors = t.error), t.value && t.regex && !App.Form.validate.regex(t) && (t.value = 0, void 0 !== t.attr.error_valid && (t.tooltip = t.attr.error_valid)), t.errors && (t.tooltip = t.errors), (!App.Form.is_dripform() || App.Form.is_dripform() && !App.General.is_mobile()) && (r = t.value ? "hide" : "show", tooltip(t.qtip, r, t.tooltip, t.toolshow, t.toolhide, t.position)), t.value ? t.border && t.group.removeClass(App.Form.error) : (!App.Form.errors && t.focus && (App.General.is_mobile() && !App.General.is_ipad() && App.General.scrollTo(t.focus, 100, 50), t.focus && (!App.Form.is_dripform() || App.Form.is_dripform() && !App.General.is_mobile()) && t.focus.focus()), App.General.is_mobile() && App.Form.is_dripform() && tooltip(t.qtip, "show", t.tooltip, !0, "focus", t.position), t.border && t.group.addClass(App.Form.error), App.Form.errors = !0)))
            }), App.Form.errors
        },
        validate_form_madlibsfullform: function(e) {
            var t, i, n, s, r;
            return App.Form.new_errors && (App.Form.errors = !1), e = e || !1, s = {
                tooltip: "",
                error: "",
                toolshow: !1,
                toolhide: !1,
                position: !1
            }, n = {
                fullname: {
                    max: 50,
                    title: "Full Name",
                    error: "Please enter your full name.",
                    error_char: "Please only enter letters for your full name."
                },
                sex: {
                    error: "Please select an option."
                },
                birthdate: {
                    error_age: "This product is not available for your age.",
                    error: "We need your date of birth to check if youâ€™re eligible for a plan.",
                    error_valid: "Please enter a valid date (MM/DD/YYYY)."
                },
                address: {
                    min: 6,
                    max: 40,
                    error: "We need your street address for an accurate quote.",
                    message: "Street address must be between 6 and 40 characters long."
                },
                zip: {
                    footprint: "Sorry, this product is not available in your state.",
                    error: "We need your ZIP code to find plans in your area."
                },
                email: {
                    error: "Please enter your email address.",
                    error_valid: "Please enter a valid email address."
                },
                phone: {
                    error: "We need your phone number to call you with your free quote.",
                    error_valid: "Please enter a valid phone number."
                }
            }, $.each(n, function(n, o) {
                s.name = n, $.each(s, function(e, t) {
                    void 0 === o[e] && (o[e] = t)
                }), e && e.name !== o.name || (i = $("[name=" + o.name + "]", App.Zip.context), i.length && (t = {
                    method: n,
                    attr: o,
                    current: e,
                    name: o.name,
                    qtip: i,
                    focus: i,
                    group: i,
                    value: $.trim(i.val()),
                    tooltip: o.error,
                    toolshow: o.toolshow,
                    toolhide: o.toolhide,
                    position: o.position,
                    border: !0,
                    error: !1,
                    errors: "",
                    regex: ""
                }, "birthdate" === t.name && (t.value = t.value.replace(/\s/g, "")), "function" == typeof App.Form.validate[t.method] && (t = App.Form.validate[t.method](t)), t.error && (App.Form.errors = t.error), t.value && t.regex && !App.Form.validate.regex(t) && (t.value = 0, void 0 !== t.attr.error_valid && (t.tooltip = t.attr.error_valid)), t.errors && (t.tooltip = t.errors), (!App.Form.is_dripform() || App.Form.is_dripform() && !App.General.is_mobile()) && (r = t.value ? "hide" : "show", tooltip(t.qtip, r, t.tooltip, t.toolshow, t.toolhide, t.position)), t.value ? (t.border && t.group.removeClass(App.Form.error), "sex" === t.name && "female" !== t.value && "male" !== t.value && $("#sex").addClass("error")) : (i.removeClass("success"), !App.Form.errors && t.focus && (App.General.is_mobile() && !App.General.is_ipad() && App.General.scrollTo(t.focus, 100, 50), t.focus && (!App.Form.is_dripform() || App.Form.is_dripform() && !App.General.is_mobile()) && t.focus.focus()), App.General.is_mobile() && App.Form.is_dripform() && tooltip(t.qtip, "show", t.tooltip, !0, "focus", t.position), t.border && t.group.addClass(App.Form.error), App.Form.errors = !0)))
            }), App.Form.errors
        },
        validate_form_madlibsdripform: function(e) {
            var t, i, n, s, r;
            return App.Form.new_errors && (App.Form.errors = !1), e = e || !1, s = {
                tooltip: "",
                error: "",
                toolshow: !1,
                toolhide: !1,
                position: !1
            }, n = {
                firstname: {
                    max: 50,
                    title: "Full Name",
                    error: "Please enter your full name, including first and last name.",
                    error_char: "Please only enter letters for your full name."
                },
                gender: {
                    error: "Please select an option."
                },
                birthdate: {
                    error_age: "This product is not available for your age.",
                    error: "We need your date of birth to check if youâ€™re eligible for a plan.",
                    error_valid: "Please enter a valid date (MM/DD/YYYY)."
                },
                address: {
                    min: 6,
                    max: 40,
                    error: "We need your street address for an accurate quote.",
                    message: "Street address must be between 6 and 40 characters long."
                },
                zip: {
                    footprint: "Sorry, this product is not available in your state.",
                    error: "We need your ZIP code to find plans in your area."
                },
                phone: {
                    error: "We need your phone number to call you with your free quote.",
                    error_valid: "Please enter a valid phone number."
                },
                email: {
                    error: "Please enter your email address.",
                    error_valid: "Please enter a valid email address."
                }
            }, $.each(n, function(n, o) {
                s.name = n, $.each(s, function(e, t) {
                    void 0 === o[e] && (o[e] = t)
                }), e && e.name !== o.name || (i = $("[name=" + o.name + "]", App.Zip.context), i.length && (t = {
                    method: n,
                    attr: o,
                    current: e,
                    name: o.name,
                    qtip: i,
                    focus: i,
                    group: i,
                    value: $.trim(i.val()),
                    tooltip: o.error,
                    toolshow: o.toolshow,
                    toolhide: o.toolhide,
                    position: o.position,
                    border: !0,
                    error: !1,
                    errors: "",
                    regex: ""
                }, "function" == typeof App.Form.validate[t.method] && (t = App.Form.validate[t.method](t)), t.error && (App.Form.errors = t.error), t.value && t.regex && !App.Form.validate.regex(t) && (t.value = 0, void 0 !== t.attr.error_valid && (t.tooltip = t.attr.error_valid)), t.errors && (t.tooltip = t.errors), (!App.Form.is_dripform() || App.Form.is_dripform() && !App.General.is_mobile()) && (r = t.value ? "hide" : "show", tooltip(t.qtip, r, t.tooltip, t.toolshow, t.toolhide, t.position)), t.value ? t.border && t.group.removeClass(App.Form.error) : (!App.Form.errors && t.focus && (App.General.is_mobile() && !App.General.is_ipad() && App.General.scrollTo(t.focus, 100, 50), t.focus && (!App.Form.is_dripform() || App.Form.is_dripform() && !App.General.is_mobile()) && t.focus.focus()), App.General.is_mobile() && App.Form.is_dripform() && tooltip(t.qtip, "show", t.tooltip, !0, "focus", t.position), t.border && t.group.addClass(App.Form.error), App.Form.errors = !0)))
            }), App.Form.errors
        },
        validate_date: function(e, t, i) {
            try {
                var n = new Date(i, e - 1, t, 0, 0, 0, 0),
                    s = n.getMonth() + 1,
                    r = n.getDate(),
                    o = n.getYear() + 1900;
                if (s === e && o === i && r === t) return !0
            } catch (e) {}
            return !1
        },
        validate_age_detail: function(e) {
            var t, i, n, s, r, o, a, l, c, u, d;
            return e = e.split("/"), e[0] = parseInt(e[0]), e[1] = parseInt(e[1]), e[2] = parseInt(e[2]), !!App.Form.validate_date(e[0], e[1], e[2]) && (t = new Date, i = new Date(e[2], e[0] - 1, e[1]), o = t.getFullYear(), a = t.getMonth(), l = t.getDate(), c = i.getFullYear(), u = i.getMonth(), d = i.getDate(), n = o - c, a >= u ? s = a - u : (n--, s = 12 + a - u), l >= d ? r = l - l : (s--, r = 31 + l - l, s < 0 && (s = 11, n--)), {
                years: n,
                months: s,
                days: r
            })
        },
        birthdate_blur: function() {
            App.General.hide_keyboard($("[name=birthdate]", App.Zip.context))
        },
        birthdate_focus: function() {
            $("form.drip-form").length || $("[name=birthdate]", App.Zip.context).focus()
        },
        validate_age: function(e) {
            var t = App.Form.validate_age_detail(e);
            return !1 !== t && (!(t.years < 64) || (window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                event: "under64ModalShown"
            }), App.General.modal(".under_age_box", App.Form.birthdate_blur, App.Form.birthdate_focus)))
        },
        input_set_focus: function(e) {
            var t = App.Form.focus + ("next" === e ? 1 : -1),
                i = $(".set-" + App.Form.step, App.Zip.context),
                n = $("[tabindex=" + t + "]", i);
            return n.length && n.focus(), !!n.is(":visible")
        },
        input_focus: function() {
            App.Zip.context = $(this).closest("form"), App.Form.focus = $(this).prop("tabindex")
        },
        input_change: function(e) {
            var t = $(this).attr("name");
            if (!$(this).val()) return !0;
            App.Form.validate_form({
                name: t,
                event: e,
                element: $(this)
            })
        },
        input_blur: function() {
            var e = $(this).prop("name"),
                t = $(this).val();
            void 0 === App.Form.cache[e] && (App.Form.cache[e] = ""), App.Form.cache[e] !== t && $(this).trigger("change"), App.Form.cache[e] = t
        },
        drip_input_blur: function(e) {
            if (App.General.is_mobile()) {
                if (App.General.is_ios()) return e.preventDefault(), e.stopPropagation(), !1;
                var t = $(this).attr("name");
                App.Form.validate_form({
                    name: t,
                    event: e,
                    element: $(this)
                })
            }
        },
        input_tab: function(e) {
            var t = e.keyCode || e.which;
            return !$("form.drip-form").length || 9 !== t || (e.shiftKey ? (App.Form.input_set_focus("prev") || App.Form.drip_navigate("prev"), !1) : (App.Form.input_set_focus("next") || App.Form.drip_navigate("next"), App.Form.step = 5 === App.Form.step ? 4 : App.Form.step, !1))
        },
        submit: function(e) {
            var t, i;
            return App.Zip.context = $(this), $(this).hasClass("drip-form") ? (i = App.Form.step, t = App.Form.drip_navigate("next"), t = !(t && 4 === i)) : t = App.Form.validate_form(), !1 === t ? ($("input[type=submit]", this).prop("disabled", !0), App.Form.is_dripform() && !App.Form.leadSubmitted && (dataLayer.push({
                event: "DripFormStage",
                formSection: "Lead Submitted"
            }), App.Form.leadSubmitted = !0), !0) : (e.preventDefault(), !1)
        },
        set_listing: function(e, t) {
            $("[name=listing]").val(e), $("[name=message_id]").val(t)
        },
        cla_success: function(e) {
            var t = e.Provider,
                i = e.MessageId,
                n = "";
            switch (App.Form.set_listing("", ""), t) {
                case "BrokersWeb":
                    n = "bw";
                    break;
                case "QuoteLab":
                    n = "ql";
                    break;
                case "Surehits":
                    n = "sh";
                    break;
                case "WebJuice":
                    n = "wj"
            }
            n && App.Form.set_listing(n, i)
        },
        cla: function() {
            try {
                ajax_json(".", !1, !0, {
                    check_cla: !0,
                    vertical: cla_api_data.vertical,
                    domain: cla_api_data.domain,
                    placement: cla_api_data.placement,
                    src: cla_api_data.src,
                    q_publisher: cla_api_data.q_publisher,
                    q_network: cla_api_data.q_network,
                    q_creative: cla_api_data.q_creative,
                    q_criteria: cla_api_data.q_criteria,
                    q_keyword: cla_api_data.q_keyword,
                    q_query: cla_api_data.q_query,
                    q_placement: cla_api_data.q_placement,
                    q_matchtype: cla_api_data.q_matchtype,
                    q_adposition: cla_api_data.q_adposition,
                    q_device: cla_api_data.q_device,
                    q_devicemodel: cla_api_data.q_devicemodel,
                    test: cla_api_data.test
                }, !1, App.Form.cla_success)
            } catch (e) {}
        },
        disallow_numbers: function(e) {
            return !(8 !== e.which && 13 !== e.which && 32 !== e.which && !isNaN(String.fromCharCode(e.which)))
        },
        under_age_location: function() {
            window.location.href = "//www.medicareadvantage.com/?src=tz_ma_ms_underage&afid=412242&tfn=ODAwLTI5OC0yMTA2"
        },
        under_age_phone: function(e) {
            e.stopPropagation(), App.General.is_mobile() || e.preventDefault()
        },
        radio_select: function(e) {
            var t = e.keyCode || e.which;
            if (e.preventDefault(), "string" == typeof e.type && "keyup" === e.type && 13 !== t) return !1;
            var i = $(this).closest("form"),
                n = $(this).attr("data-value");
            return $(this).closest(".radio-row").removeClass(App.Form.error), $("input[data-value=" + n + "]", i).trigger("click"), $(".selected", ".radio-row").each(function() {
                $(this).removeClass("selected")
            }), $(this).hasClass("selected") || $(this).addClass("selected"), tooltip($(".radio-row", i), "hide", ""), $("form.drip-form").length && App.Form.drip_navigate("next"), !1
        },
        drip_fields: function() {
            var e, t, i, n = ["gender", "firstname", "birthdate", "address", "zip", "phone", "email"],
                s = $(".set-" + App.Form.step + ".active");
            App.Form.new_errors = !1, App.Form.errors = !1, App.Zip.method = "sync";
            for (i in n) s.find("[name=" + n[i] + "]").length && (e = App.Form.validate_form({
                name: n[i]
            }), t = t || e);
            return !t
        },
        form_submit_madlibsfullform: function(e) {
            var t = ($("#fullname").val().split(" "), $("#birthdate").val());
            if (App.Zip.context = $(this).closest("form"), !1 === App.Form.validate_form_madlibsfullform()) {
                var i = $("#birthdate").val().replace(/\s/g, "").split("/");
                return $("#dmonth").val(i[0]), $("#dday").val(i[1]), $("#dyear").val(i[2]), $("#gender").val($("#sex").val()), $(this).prop("disabled", !0), $("#birthdate").val(t.replace(/\s/g, "")), void $(".madlibs-fullform").submit()
            }
            e.preventDefault()
        },
        form_submit_madlibsdripform: function(e) {
            $("#fullname").val().split(" "), $("#dob").val();
            if (App.Zip.context = $(this).closest("form"), !1 === App.Form.validate_form_madlibsdripform()) {
                var t = $("#dob").val().split("/");
                return $("#dmonth").val(t[0]), $("#dday").val(t[1]), $("#dyear").val(t[2]), $("#gender").val($("#sex").val()), $(this).prop("disabled", !0), void $(".madlibs-dripform").submit()
            }
            e.preventDefault()
        },
        drip_button: function(e) {
            e.preventDefault();
            var t = $(this).attr("data-button");
            return App.Form.drip_navigate(t)
        },
        drip_left: function(e, t) {
            var i, n;
            return i = App.Form.step - 1, n = [
                [0, 1, 2, 3],
                [-1, 0, 1, 2],
                [-2, -1, 0, 1],
                [-3, -2, -1, 0]
            ], (void 0 !== n[i][e] ? n[i][e] : 0) * t
        },
        drip_navigate: function(e) {
            var t, i, n, s;
            return t = $(".form-fields-wrapper").width(), i = !0, "next" === e ? (i = App.Form.drip_fields()) && App.Form.step + 1 <= 5 && App.Form.step++ : App.Form.step > 1 && App.Form.step--, !!i && (5 === App.Form.step || (4 === App.Form.step ? $(".disclaimer").show() : $(".disclaimer").hide(), $(".form-fields-set").each(function() {
                $(this).removeClass("active")
            }), $(".set-" + App.Form.step).addClass("active"), $(".progress-bar .step").css("width", 25 * App.Form.step + "%"), $(".form-fields-wrapper").children().each(function(e) {
                s = App.Form.drip_left(e, t), $(this).velocity({
                    left: s
                }, {
                    duration: 250,
                    easing: "easeInOut"
                })
            }), App.General.is_mobile() || setTimeout(function() {
                n = $("[tabindex]", ".set-" + App.Form.step), n = "next" === e ? n.first() : n.last(), n.focus()
            }, 300), "next" === e && App.Form.track_steps(), !0))
        },
        drip_attr: function(e, t, i) {
            var n;
            e.css("width", t + "px"), i.each(function(e) {
                n = App.Form.drip_left(e, t), $(this).css({
                    display: "block",
                    left: n + "px",
                    position: "absolute",
                    top: 0
                })
            })
        },
        drip_create: function() {
            var e, t, i;
            $(".set-" + App.Form.step).addClass("active"), $(".disclaimer").hide(), e = $(".form-fields-wrapper"), t = e.width(), i = e.children(), App.Form.drip_attr(e, t, i)
        },
        drip_resize: function() {
            var e = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, $(".form-fields-wrapper")),
                t = e.width(),
                i = e.children();
            e.removeAttr("style"), t = e.width(), App.Form.drip_attr(e, t, i)
        },
        masks: function() {
            input_mask($(".mask-phone"), "phone"), input_mask($(".mask-birth"), "birthdate"), input_mask($(".mask-dob"), "dob"), input_mask($(".mask-zip"), "zip")
        },
        events: function() {
            function e(e) {
                var t = parseFloat(100 / n) * e;
                t = t.toFixed(), $(".progress-bar").css("width", t + "%")
            }
            $(".page-template-home .form input[name='firstname'], .page-template-advertorial .form input[name='firstname']").attr("placeholder", "FirstName LastName"), $(".page-template-home .form input[name='birthdate'], .page-template-advertorial .form input[name='birthdate']").attr("placeholder", "__/__/____"), $(".page-template-home .form input[name='phone'], .page-template-advertorial .form input[name='phone']").attr("placeholder", "(___) ___-____");
            var t, i, n, s = $("input[type!=hidden]", ".form"),
                r = 1;
            n = $("fieldset").length, e(r), $("#fullname").on("change", function(e) {
                    e.preventDefault(), /[0-9]/g.test($(this).val()) && $(this).val($(this).val().replace(/[0-9]/g, "").trim())
                }), $(".radio-box", ".form").on("click keyup", App.Form.radio_select), $("[name=firstname], [name=lastname]", ".form").on("keypress", App.Form.disallow_numbers), $("input[type!=hidden]", ".drip-form").on("blur", App.Form.drip_input_blur), $("a[data-button]", ".drip-form").on("click", App.Form.drip_button), $(".form").on("submit", App.Form.submit),
                $(".btn-submit-madlibsfullform").on("click", App.Form.form_submit_madlibsfullform), $("#fullname").keypress(function(e) {
                    var t = e.charCode;
                    t >= 65 && t <= 122 || 32 === t || 0 === t || e.preventDefault()
                }), $("#madlibs-full-form input[name=zip]").length && 5 === $("#madlibs-full-form input[name=zip]").val().length && $("#madlibs-full-form input[name=zip]").addClass("success"), $("#madlibs-drip-form input[name=zip]").length && 5 === $("#madlibs-drip-form input[name=zip]").val().length && $("#madlibs-drip-form input[name=zip]").addClass("success"), s.on("blur", App.Form.input_blur), s.on("focus", App.Form.input_focus), s.on("keydown", App.Form.input_tab), $("#madlibs-full-form input[name=fullname], #madlibs-drip-form input[name=fullname]").on("blur", function() {
                    tooltip($(this), "hide", "");
                    var e, t, i;
                    if (i = /[`~0123456789!@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/gi, e = $(this).val()) {
                        var n = $("#fullname").val().split(" ");
                        if ("" === e) return tooltip($(this), "show", "Please enter your full name, including first and last name.", !0, "focus"), void $(this).addClass("error");
                        1 === n.length && (tooltip($(this), "show", "Please enter your full name, including first and last name.", !0, "focus"), $(this).addClass("error")), t = App.Form.validate.parse_fullname(e), $("#firstname").val(t.first), $("#lastname").val(t.last), t.first && t.last ? $(this).addClass("success") : (tooltip($(this), "show", "Please enter your full name, including first and last name.", !0, "focus"), $(this).addClass("error")), e && i.test(e) && (tooltip($(this), "show", "Please enter your full name, including first and last name.", !0, "focus"), $(this).addClass("error"))
                    } else tooltip($(this), "show", "Please enter your full name, including first and last name.", !0, "focus"), $(this).addClass("error")
                }), $("#madlibs-full-form input[name=fullname], #madlibs-drip-form input[name=fullname]").keydown(function(e) {
                    tooltip($(this), "hide", ""), $(this).removeClass("error");
                    var t, i;
                    if (t = $(this).val(), 9 === e.which || 13 === e.which) {
                        var n = $("#fullname").val().split(" ");
                        if ("" === t) return tooltip($(this), "show", "Please enter your full name, including first and last name.", !0, "focus"), void $(this).addClass("error");
                        1 === n.length && (tooltip($(this), "show", "Please enter your full name, including first and last name.", !0, "focus"), $(this).addClass("error")), i = App.Form.validate.parse_fullname(t), $("#firstname").val(i.first), $("#lastname").val(i.last), i.first && i.last ? 13 === e.which ? $("#madlibs-full-form").length ? $("#birthdate").focus() : $("#dob").focus() : $(this).next("input").focus() : (tooltip($(this), "show", "Please enter your full name, including first and last name.", !0, "focus"), $(this).addClass("error"))
                    }
                }), $("#madlibs-full-form #sex, #madlibs-drip-form #sex").on("change", function() {
                    $("#gender").val($("#sex").val()), tooltip($(this), "hide", ""), $(this).removeClass("success"), $(this).removeClass("error"), "0" === $(this).val() ? (tooltip($(this), "show", "Please choose an option.", !0, "focus"), $(this).addClass("error")) : $(this).addClass("success")
                }), $("#madlibs-full-form input[name=birthdate]").on("focus", function() {
                    "0" === $("#sex").val() ? (tooltip($("#sex"), "show", "We need your date of birth to check if youâ€™re eligible for a plan.", !0, "focus"), $("#sex").addClass("error")) : $("#sex").addClass("success")
                }), $("#madlibs-full-form input[name=birthdate], #madlibs-drip-form input[name=dob]").on("blur", function() {
                    tooltip($(this), "hide", ""), $(this).removeClass("error");
                    var e, t;
                    return e = /^(0[1-9]|1[012])[\/](0[1-9]|[12][0-9]|3[01])[\/](19|20)\d\d+$/, (t = $(this).val().replace(/\s/g, "")) && !e.test(t) ? (tooltip($(this), "show", "We need your date of birth to check if youâ€™re eligible for a plan.", !0, "focus"), void $(this).addClass("error")) : t ? void(t && !App.Form.validate_age(t) ? (tooltip($(this), "show", "We need your date of birth to check if youâ€™re eligible for a plan.", !0, "focus"), $(this).addClass("error")) : $(this).addClass("success")) : (tooltip($(this), "show", "We need your date of birth to check if youâ€™re eligible for a plan.", !0, "focus"), void $(this).addClass("error"))
                }), $("#madlibs-full-form input[name=address], #madlibs-drip-form input[name=address]").on("blur", function() {
                    tooltip($(this), "hide", ""), $(this).removeClass("error");
                    var e;
                    e = trim_mask($(this).val()), e || (tooltip($(this), "show", "We need your street address for an accurate quote.", !0, "focus"), $(this).addClass("error")), e && e.length > 5 ? $(this).addClass("success") : (tooltip($(this), "show", "We need your street address for an accurate quote.", !0, "focus"), $(this).addClass("error"))
                }), $("#madlibs-full-form input[id=zip-code], #madlibs-drip-form input[id=zip-code]").on("blur", function() {
                    tooltip($(this), "hide", ""), $(this).removeClass("error");
                    var e;
                    e = trim_mask($(this).val()), e || (tooltip($(this), "show", "We need your ZIP code to find plans in your area.", !0, "focus"), $(this).addClass("error")), e && 5 === e.length ? $(this).addClass("success") : (tooltip($(this), "show", "We need your ZIP code to find plans in your area.", !0, "focus"), $(this).addClass("error"))
                }), $("#madlibs-full-form input[name=email], #madlibs-drip-form input[name=email]").on("blur", function() {
                    tooltip($(this), "hide", ""), $(this).removeClass("error");
                    var e, t;
                    e = trim_mask($(this).val()), t = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/, e && t.test(e) ? $(this).addClass("success") : (tooltip($(this), "show", "Please enter your email address.", !0, "focus"), $(this).addClass("error"))
                }), $("#madlibs-full-form input[id=zip-code], #madlibs-drip-form input[id=zip-code]").on("blur", function() {
                    tooltip($(this), "hide", ""), $(this).removeClass("error");
                    var e;
                    e = trim_mask($(this).val()), e || (tooltip($(this), "show", "We need your ZIP code to find plans in your area.", !0, "focus"), $(this).addClass("error")), e && 5 === e.length ? $(this).addClass("success") : (tooltip($(this), "show", "We need your ZIP code to find plans in your area.", !0, "focus"), $(this).addClass("error"))
                }), $("#madlibs-full-form input[name=phone], #madlibs-drip-form input[name=phone]").on("blur", function() {
                    tooltip($(this), "hide", ""), $(this).removeClass("error");
                    var e;
                    e = trim_mask($(this).val()), e || (tooltip($(this), "show", "We need your phone number to call you with your free quote.", !0, "focus"), $(this).addClass("error")), e && 13 === e.length ? $(this).addClass("success") : (tooltip($(this), "show", "We need your phone number to call you with your free quote.", !0, "focus"), $(this).addClass("error"))
                }), $("#madlibs-drip-form button[id=dripform-submit-dsk]").on("click", function() {
                    var e = $("#email").val(),
                        t = $("#phone").val();
                    if ("" === e) tooltip($("#email"), "show", "Please enter your email address.", !0, "focus"), !0, "" === t ? ($("#email").addClass("error"), $("#phone").addClass("error")) : $("#email").addClass("error"), $("#email").focus();
                    else if ("" === t) !0, tooltip($("#email"), "hide", ""), tooltip($("#phone"), "show", "We need your phone number to call you with your free quote.", !0, "focus"), $("#email").removeClass("error"), $("#email").addClass("success"), $("#phone").addClass("error");
                    else {
                        var i = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
                            n = /^\(\d{3}\) \d{3}-\d{4}$/i;
                        if (tooltip($("#email"), "hide", ""), $("#email").removeClass("error"), $("#email").addClass("success"), !e || !i.test(e)) return $("#email").removeClass("success"), $("#email").addClass("error"), void tooltip($("#email"), "show", "Please enter your email address.", !0, "focus");
                        if (tooltip($("#phone"), "hide", ""), $("#phone").removeClass("error"), $("#phone").addClass("success"), !t || !n.test(t)) return $("#phone").removeClass("success"), $("#phone").addClass("error"), void tooltip($("#phone"), "show", "We need your phone number to call you with your free quote.", !0, "focus");
                        var s = $("#dob").val().replace(/\s/g, "").split("/");
                        $("#dmonth").val(s[0]), $("#dday").val(s[1]), $("#dyear").val(s[2]), $("#madlibs-drip-form").submit()
                    }
                }), $("#madlibs-drip-form input[name=fullname]").keydown(function(e) {
                    $(this).removeClass("has-error");
                    if (9 === e.which || 13 === e.which) {
                        if ("" === $(this).val()) return tooltip($(this), "show", "Please enter your full name.", !0, "focus"), $(this).addClass("error"), void e.preventDefault();
                        1 === $("#fullname").val().split(" ").length && (tooltip($(this), "show", "Please enter your full name.", !0, "focus"), $(this).addClass("error"));
                        var t = App.Form.validate.parse_fullname($(this).val());
                        t.first && t.last ? ($("#firstname").val(t.first), $("#lastname").val(t.last), $(this).removeClass("error"), $(this).addClass("success"), tooltip($(this), "hide", ""), $(this).next("input").focus()) : (tooltip($(this), "show", "Please enter your full name.", !0, "focus"), $(this).addClass("error"), e.preventDefault())
                    }
                }), $("#madlibs-drip-form input[name=dob]").keydown(function(n) {
                    var s = !1,
                        o = $(this).val(),
                        a = $(this).val().replace(/\s/g, ""),
                        l = /^(0[1-9]|1[012])[\/](0[1-9]|[12][0-9]|3[01])[\/](19|20)\d\d+$/;
                    if (9 === n.which || 13 === n.which)
                        if (a && l.test(a)) {
                            $(this).removeClass("error"), $(this).addClass("success"), tooltip($(this), "hide", "");
                            var c = App.Form.validate_age_detail(o);
                            !1 === c && ($(this).removeClass("success"), $(this).addClass("error"), s = !0), c.years < 64 && ($(this).removeClass("success"), $(this).addClass("error"), s = !0), s || (13 === n.which ? ($("#address").focus(), $(this).next("input").focus()) : $(this).next("input").focus(), t = $(this).parents("fieldset"), i = $(this).parents("fieldset").next(), i.show(), t.hide(), e(++r))
                        } else tooltip($(this), "show", "We need your date of birth to check if youâ€™re eligible for a plan.", !0, "focus"), $(this).addClass("error"), n.preventDefault()
                }), $("#madlibs-drip-form input[name=address]").keydown(function(e) {
                    9 !== e.which && 13 !== e.which || ($(this).val().length > 5 ? ($(this).removeClass("error"), $(this).addClass("success"), tooltip($(this), "hide", ""), 13 === e.which ? $("#zip-code").focus() : $(this).next("input").focus()) : (tooltip($(this), "show", "We need your street address for an accurate quote.", !0, "focus"), $(this).addClass("error"), e.preventDefault()))
                }), $("#madlibs-drip-form input[name=zip]").keydown(function(n) {
                    9 !== n.which && 13 !== n.which || (5 === $(this).val().length ? ($(this).removeClass("error"), $(this).addClass("success"), tooltip($(this), "hide", ""), $(this).next("input").focus(), t = $(this).parents("fieldset"), i = $(this).parents("fieldset").next(), i.show(), t.hide(), e(++r)) : (tooltip($(this), "show", "We need your ZIP code to find plans in your area.", !0, "focus"), $(this).addClass("error"), n.preventDefault()))
                }), $("#madlibs-drip-form input[name=email]").keydown(function(e) {
                    if (9 === e.which || 13 === e.which) {
                        tooltip($(this), "hide", ""), $(this).removeClass("error");
                        var t, i;
                        t = trim_mask($(this).val()), i = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/, t && i.test(t) ? ($(this).addClass("success"), 13 === e.which ? $("#phone").focus() : $(this).next("input").focus(), $(this).next("input").focus()) : (tooltip($(this), "show", "Please enter your email address.", !0, "focus"), $(this).addClass("error"), e.preventDefault())
                    }
                }), $("#madlibs-drip-form input[name=phone]").keydown(function(e) {
                    var t = /^\(\d{3}\) \d{3}-\d{4}$/i,
                        i = $(this).val();
                    if (9 === e.which || 13 === e.which)
                        if (i && t.test(i)) {
                            var n = $("#dob").val().replace(/\s/g, "").split("/");
                            $("#dmonth").val(n[0]), $("#dday").val(n[1]), $("#dyear").val(n[2]), $(this).removeClass("error"), $(this).addClass("success"), tooltip($(this), "hide", ""), $("#madlibs-drip-form").submit()
                        } else tooltip($(this), "show", "We need your phone number to call you with your free quote.", !0, "focus"), $(this).addClass("error"), e.preventDefault()
                }), $(".drip-next").click(function() {
                    var n = !1;
                    switch ($(this).closest("button").attr("id")) {
                        case "drip-button-1":
                            var s = $("#sex option:selected").text();
                            "Male" !== s && "Female" !== s ? (tooltip($("#sex"), "show", "Please choose an option.", !0, "focus"), $("#sex").addClass("error"), n = !0) : (tooltip($("#sex"), "hide", ""), $("#sex").removeClass("error"), $("#sex").addClass("success"));
                            break;
                        case "drip-button-2":
                            $("#fullname").removeClass("error"), $("#dob").removeClass("error");
                            var o = $("#fullname").val(),
                                a = $("#dob").val(),
                                l = App.Form.validate_age_detail(a);
                            if ("" === o) tooltip($("#fullname"), "show", "Please enter your full name.", !0, "focus"), n = !0, "" === a ? ($("#fullname").addClass("error"), $("#dob").addClass("error")) : ($("#fullname").addClass("error"), !1 === l && $("#dob").addClass("error"), l.years < 64 && $("#dob").addClass("error"));
                            else if ("" === a) $("#dob").removeClass("success"), $("#dob").addClass("error"), n = !0, 1 === o.split(" ").length ? (tooltip($("#fullname"), "show", "Please enter your full name.", !0, "focus"), $("#fullname").addClass("error"), n = !0) : (tooltip($("#fullname"), "hide", ""), $("#fullname").removeClass("error"), $("#fullname").addClass("success"), tooltip($("#dob"), "show", "We need your date of birth to check if youâ€™re eligible for a plan.", !0, "focus"), $("#dob").addClass("error"));
                            else {
                                var c = $("#dob").val().replace(/\s/g, ""),
                                    u = /^(0[1-9]|1[012])[\/](0[1-9]|[12][0-9]|3[01])[\/](19|20)\d\d+$/;
                                1 === o.split(" ").length && (tooltip($("#fullname"), "show", "Please enter your full name.", !0, "focus"), $("#fullname").addClass("error"), n = !0), "" === c && ($("#dob").addClass("error"), n = !0), c && !u.test(c) && ($("#dob").removeClass("success"), $("#dob").addClass("error"), tooltip($("#dob"), "show", "We need your date of birth to check if youâ€™re eligible for a plan.", !0, "focus"), n = !0), !1 === l && (n = !0, $("#dob").addClass("error")), l.years < 64 && (n = !0, $("#dob").addClass("error"));
                                var d = App.Form.validate.parse_fullname($("#fullname").val());
                                $("#firstname").val(d.first), $("#lastname").val(d.last), a = c.split("/"), $("#dmonth").val(a[0]), $("#dday").val(a[1]), $("#dyear").val(a[2]), n || (tooltip($("#fullname"), "hide", ""), $("#fullname").removeClass("error"), $("#fullname").addClass("success"), tooltip($("#dob"), "hide", ""), $("#dob").removeClass("error"), $("#dob").addClass("success"))
                            }
                            break;
                        case "drip-button-3":
                            var p = $("#address").val(),
                                h = $("#zip-code").val();
                            "" === p || p.length < 6 ? (tooltip($("#address"), "show", "We need your street address for an accurate quote.", !0, "focus"), n = !0, 5 !== h.length ? ($("#address").addClass("error"), $("#zip-code").addClass("error")) : $("#address").addClass("error")) : 5 !== h.length ? (n = !0, tooltip($("#address"), "hide", ""), tooltip($("#zip-code"), "show", "We need your ZIP code to find plans in your area.", !0, "focus"), $("#address").removeClass("error"), $("#address").addClass("success"), $("#zip-code").addClass("error")) : (tooltip($("#address"), "hide", ""), $("#address").removeClass("error"), $("#address").addClass("success"), tooltip($("#zip-code"), "hide", ""), $("#zip-code").removeClass("error"), $("#zip-code").addClass("success"))
                    }
                    n || (t = $(this).parents("fieldset"), i = $(this).parents("fieldset").next(), i.show(), t.hide(), e(++r))
                }), $(".drip-previous").click(function() {
                    t = $(this).parents("fieldset"), i = $(this).parents("fieldset").prev(), i.show(), t.hide(), e(--r), tooltip($(".form-control"), "hide", "")
                }), $(document).on("keydown", App.Form.input_tab), $(document).on("click", ".under_age .under_age__phone", App.Form.under_age_phone), $(document).on("click", ".under_age .redirect", App.Form.under_age_location), $(".drip-form").length && ($(window).on("resize", App.Form.drip_resize), App.General.is_ios() && ($("input, textarea").on("focus", function() {
                    $("input, textarea").not(this).attr("readonly", "readonly")
                }), $("input, textarea").on("blur", function() {
                    $("input, textarea").removeAttr("readonly")
                })))
        },
        zip: function() {
            $("[name=zip]", ".form").each(function() {
                $(this).val() && ($(".city-state", $(this).closest("form")).show(), App.Zip.submit = !0)
            })
        },
        tabindex: function() {
            var e = 1;
            $("[tabindex]").each(function() {
                $(this).prop("tabindex", e), e++
            })
        },
        autocomplete: function() {
            $(".form").prop("autocomplete", "off"), $("input[type!=hidden]", ".form").each(function() {
                $(this).prop("autocomplete", "off")
            })
        },
        contact_guide: function() {
            $(".contact_guide").on("submit", function() {
                var e = $("[name=your_email]", this),
                    t = e.val(),
                    i = {};
                return App.Form.validate.email(i), t && i.regex && !i.regex.test(t) && (t = 0), t ? (e.removeClass(App.Form.error), !0) : (e.addClass(App.Form.error).focus(), !1)
            })
        },
        track_steps: function() {
            var e = document.querySelectorAll(".form-fields-set.active"),
                t = "";
            e.length > 0 && (e = e[0], e.className.match("set-1") ? t = "Form Landing" : e.className.match("set-2") ? t = "Personal Details" : e.className.match("set-3") ? t = "Address" : e.className.match("set-4") && (t = "Phone Number"), "" !== t && dataLayer.push({
                event: "DripFormStage",
                formSection: t
            }))
        }
    },
    function(e) {
        var t = {
                common: {
                    init: function() {
                        var e = ["equal_height", "hover_effect", "menu_toggle", "scroll_trigger", "footer_disclaimer", "simple_select", "smooth_scroll", "sticky_header", "scrollnav", "sticky_sidebar", "phone_links", "newsletter", "admin_links", "scroll_map", "events", "active_state", "slick_slider", "wisepops_dynamic_tfn", "plan_quiz"];
                        document.location.href.indexOf("/thank-you") >= 0 && e.push("thank_you"), App.General.run(e), App.Form.init(), App.Zip.init()
                    }
                },
                home: {},
                single: {
                    init: function() {
                        App.General.run(["responsiveTable"])
                    }
                }
            },
            i = {
                fire: function(e, i, n) {
                    var s, r = t;
                    i = void 0 === i ? "init" : i, s = "" !== e, s = s && r[e], (s = s && "function" == typeof r[e][i]) && r[e][i](n)
                },
                loadEvents: function() {
                    i.fire("common"), e.each(document.body.className.replace(/-/g, "_").split(/\s+/), function(e, t) {
                        i.fire(t), i.fire(t, "finalize")
                    }), i.fire("common", "finalize")
                }
            };
        e(document).ready(i.loadEvents)
    }(jQuery);
//# sourceMappingURL=main.js.map

scroll_trigger: function() {
    var e = function() {
        var e = {
            testimonials: {
                element: $(".why-section .testimonial-wrapper")
            }
                Object.keys(e).forEach(function(t) {
            var i, n = e[t].element;
            n.length > 0 && n.each(function() {
                i = $(this).offset().top - $(window).height() + 200, $(window).scrollTop() >= i ? $(this).addClass("triggered") : $(this).removeClass("triggered")
            })
        })
    };
    e(), $(window).scroll(function() {
        e()
    })
},
slick_slider: function() {
    var e, t = $(".testimonials"),
        i = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    e = function() {
        i >= 1250 && t.hasClass("slick-initialized") ? t.slick("unslick") : i < 1250 && !t.hasClass("slick-initialized") && t.slick({
            adaptiveHeight: !0,
            arrows: !0,
            dots: !1,
            easing: "easeInOutQuart",
            nextArrow: '<i class="fa fa-chevron-right"></i>',
            prevArrow: '<i class="fa fa-chevron-left"></i>',
            speed: 400
        })
    }, e(), $(window).resize(function() {
        i = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, e()
    })
},