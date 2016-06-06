!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
        : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length
            , n = pt.type(e);
        return "function" === n || pt.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    function r(e, t, n) {
        if (pt.isFunction(t))
            return pt.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return pt.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (Ct.test(t))
                return pt.filter(t, e, n);
            t = pt.filter(t, e)
        }
        return pt.grep(e, function(e) {
            return pt.inArray(e, t) > -1 !== n
        })
    }
    function i(e, t) {
        do
            e = e[t];
        while (e && 1 !== e.nodeType);return e
    }
    function o(e) {
        var t = {};
        return pt.each(e.match(Dt) || [], function(e, n) {
            t[n] = !0
        }),
            t
    }
    function a() {
        rt.addEventListener ? (rt.removeEventListener("DOMContentLoaded", s),
            e.removeEventListener("load", s)) : (rt.detachEvent("onreadystatechange", s),
            e.detachEvent("onload", s))
    }
    function s() {
        (rt.addEventListener || "load" === e.event.type || "complete" === rt.readyState) && (a(),
            pt.ready())
    }
    function u(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(_t, "-$1").toLowerCase();
            if (n = e.getAttribute(r),
                "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null  : +n + "" === n ? +n : qt.test(n) ? pt.parseJSON(n) : n
                } catch (i) {}
                pt.data(e, t, n)
            } else
                n = void 0
        }
        return n
    }
    function l(e) {
        var t;
        for (t in e)
            if (("data" !== t || !pt.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function c(e, t, n, r) {
        if (Ht(e)) {
            var i, o, a = pt.expando, s = e.nodeType, u = s ? pt.cache : e, l = s ? e[a] : e[a] && a;
            if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t)
                return l || (l = s ? e[a] = nt.pop() || pt.guid++ : a),
                u[l] || (u[l] = s ? {} : {
                    toJSON: pt.noop
                }),
                "object" != typeof t && "function" != typeof t || (r ? u[l] = pt.extend(u[l], t) : u[l].data = pt.extend(u[l].data, t)),
                    o = u[l],
                r || (o.data || (o.data = {}),
                    o = o.data),
                void 0 !== n && (o[pt.camelCase(t)] = n),
                    "string" == typeof t ? (i = o[t],
                    null  == i && (i = o[pt.camelCase(t)])) : i = o,
                    i
        }
    }
    function d(e, t, n) {
        if (Ht(e)) {
            var r, i, o = e.nodeType, a = o ? pt.cache : e, s = o ? e[pt.expando] : pt.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    pt.isArray(t) ? t = t.concat(pt.map(t, pt.camelCase)) : t in r ? t = [t] : (t = pt.camelCase(t),
                        t = t in r ? [t] : t.split(" ")),
                        i = t.length;
                    for (; i--; )
                        delete r[t[i]];
                    if (n ? !l(r) : !pt.isEmptyObject(r))
                        return
                }
                (n || (delete a[s].data,
                    l(a[s]))) && (o ? pt.cleanData([e], !0) : dt.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
            }
        }
    }
    function f(e, t, n, r) {
        var i, o = 1, a = 20, s = r ? function() {
            return r.cur()
        }
            : function() {
            return pt.css(e, t, "")
        }
            , u = s(), l = n && n[3] || (pt.cssNumber[t] ? "" : "px"), c = (pt.cssNumber[t] || "px" !== l && +u) && Mt.exec(pt.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3],
                n = n || [],
                c = +u || 1;
            do
                o = o || ".5",
                    c /= o,
                    pt.style(e, t, c + l);
            while (o !== (o = s() / u) && 1 !== o && --a)
        }
        return n && (c = +c || +u || 0,
            i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
            r.start = c,
            r.end = i)),
            i
    }
    function p(e) {
        var t = zt.split("|")
            , n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length; )
                n.createElement(t.pop());
        return n
    }
    function h(e, t) {
        var n, r, i = 0, o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [],
                     n = e.childNodes || e; null  != (r = n[i]); i++)
                !t || pt.nodeName(r, t) ? o.push(r) : pt.merge(o, h(r, t));
        return void 0 === t || t && pt.nodeName(e, t) ? pt.merge([e], o) : o
    }
    function g(e, t) {
        for (var n, r = 0; null  != (n = e[r]); r++)
            pt._data(n, "globalEval", !t || pt._data(t[r], "globalEval"))
    }
    function m(e) {
        Bt.test(e.type) && (e.defaultChecked = e.checked)
    }
    function v(e, t, n, r, i) {
        for (var o, a, s, u, l, c, d, f = e.length, v = p(t), y = [], x = 0; f > x; x++)
            if (a = e[x],
                a || 0 === a)
                if ("object" === pt.type(a))
                    pt.merge(y, a.nodeType ? [a] : a);
                else if (Ut.test(a)) {
                    for (u = u || v.appendChild(t.createElement("div")),
                             l = (Wt.exec(a) || ["", ""])[1].toLowerCase(),
                             d = Xt[l] || Xt._default,
                             u.innerHTML = d[1] + pt.htmlPrefilter(a) + d[2],
                             o = d[0]; o--; )
                        u = u.lastChild;
                    if (!dt.leadingWhitespace && $t.test(a) && y.push(t.createTextNode($t.exec(a)[0])),
                            !dt.tbody)
                        for (a = "table" !== l || Vt.test(a) ? "<table>" !== d[1] || Vt.test(a) ? 0 : u : u.firstChild,
                                 o = a && a.childNodes.length; o--; )
                            pt.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
                    for (pt.merge(y, u.childNodes),
                             u.textContent = ""; u.firstChild; )
                        u.removeChild(u.firstChild);
                    u = v.lastChild
                } else
                    y.push(t.createTextNode(a));
        for (u && v.removeChild(u),
             dt.appendChecked || pt.grep(h(y, "input"), m),
                 x = 0; a = y[x++]; )
            if (r && pt.inArray(a, r) > -1)
                i && i.push(a);
            else if (s = pt.contains(a.ownerDocument, a),
                    u = h(v.appendChild(a), "script"),
                s && g(u),
                    n)
                for (o = 0; a = u[o++]; )
                    It.test(a.type || "") && n.push(a);
        return u = null ,
            v
    }
    function y() {
        return !0
    }
    function x() {
        return !1
    }
    function b() {
        try {
            return rt.activeElement
        } catch (e) {}
    }
    function w(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n,
                n = void 0);
            for (s in t)
                w(e, s, n, r, t[s], o);
            return e
        }
        if (null  == r && null  == i ? (i = n,
                r = n = void 0) : null  == i && ("string" == typeof n ? (i = r,
                r = void 0) : (i = r,
                r = n,
                n = void 0)),
            i === !1)
            i = x;
        else if (!i)
            return e;
        return 1 === o && (a = i,
            i = function(e) {
                return pt().off(e),
                    a.apply(this, arguments)
            }
            ,
            i.guid = a.guid || (a.guid = pt.guid++)),
            e.each(function() {
                pt.event.add(this, t, i, r, n)
            })
    }
    function T(e, t) {
        return pt.nodeName(e, "table") && pt.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function C(e) {
        return e.type = (null  !== pt.find.attr(e, "type")) + "/" + e.type,
            e
    }
    function E(e) {
        var t = on.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
            e
    }
    function N(e, t) {
        if (1 === t.nodeType && pt.hasData(e)) {
            var n, r, i, o = pt._data(e), a = pt._data(t, o), s = o.events;
            if (s) {
                delete a.handle,
                    a.events = {};
                for (n in s)
                    for (r = 0,
                             i = s[n].length; i > r; r++)
                        pt.event.add(t, n, s[n][r])
            }
            a.data && (a.data = pt.extend({}, a.data))
        }
    }
    function k(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(),
                !dt.noCloneEvent && t[pt.expando]) {
                i = pt._data(t);
                for (r in i.events)
                    pt.removeEvent(t, r, i.handle);
                t.removeAttribute(pt.expando)
            }
            "script" === n && t.text !== e.text ? (C(t).text = e.text,
                E(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
            dt.html5Clone && e.innerHTML && !pt.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Bt.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }
    function S(e, t, n, r) {
        t = ot.apply([], t);
        var i, o, a, s, u, l, c = 0, d = e.length, f = d - 1, p = t[0], g = pt.isFunction(p);
        if (g || d > 1 && "string" == typeof p && !dt.checkClone && rn.test(p))
            return e.each(function(i) {
                var o = e.eq(i);
                g && (t[0] = p.call(this, i, o.html())),
                    S(o, t, n, r)
            });
        if (d && (l = v(t, e[0].ownerDocument, !1, e, r),
                i = l.firstChild,
            1 === l.childNodes.length && (l = i),
            i || r)) {
            for (s = pt.map(h(l, "script"), C),
                     a = s.length; d > c; c++)
                o = l,
                c !== f && (o = pt.clone(o, !0, !0),
                a && pt.merge(s, h(o, "script"))),
                    n.call(e[c], o, c);
            if (a)
                for (u = s[s.length - 1].ownerDocument,
                         pt.map(s, E),
                         c = 0; a > c; c++)
                    o = s[c],
                    It.test(o.type || "") && !pt._data(o, "globalEval") && pt.contains(u, o) && (o.src ? pt._evalUrl && pt._evalUrl(o.src) : pt.globalEval((o.text || o.textContent || o.innerHTML || "").replace(an, "")));
            l = i = null
        }
        return e
    }
    function A(e, t, n) {
        for (var r, i = t ? pt.filter(t, e) : e, o = 0; null  != (r = i[o]); o++)
            n || 1 !== r.nodeType || pt.cleanData(h(r)),
            r.parentNode && (n && pt.contains(r.ownerDocument, r) && g(h(r, "script")),
                r.parentNode.removeChild(r));
        return e
    }
    function D(e, t) {
        var n = pt(t.createElement(e)).appendTo(t.body)
            , r = pt.css(n[0], "display");
        return n.detach(),
            r
    }
    function j(e) {
        var t = rt
            , n = cn[e];
        return n || (n = D(e, t),
        "none" !== n && n || (ln = (ln || pt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
            t = (ln[0].contentWindow || ln[0].contentDocument).document,
            t.write(),
            t.close(),
            n = D(e, t),
            ln.detach()),
            cn[e] = n),
            n
    }
    function L(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function H(e) {
        if (e in Nn)
            return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = En.length; n--; )
            if (e = En[n] + t,
                e in Nn)
                return e
    }
    function q(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++)
            r = e[a],
            r.style && (o[a] = pt._data(r, "olddisplay"),
                n = r.style.display,
                t ? (o[a] || "none" !== n || (r.style.display = ""),
                "" === r.style.display && Rt(r) && (o[a] = pt._data(r, "olddisplay", j(r.nodeName)))) : (i = Rt(r),
                (n && "none" !== n || !i) && pt._data(r, "olddisplay", i ? n : pt.css(r, "display"))));
        for (a = 0; s > a; a++)
            r = e[a],
            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    function _(e, t, n) {
        var r = wn.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function F(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)
            "margin" === n && (a += pt.css(e, n + Ot[o], !0, i)),
                r ? ("content" === n && (a -= pt.css(e, "padding" + Ot[o], !0, i)),
                "margin" !== n && (a -= pt.css(e, "border" + Ot[o] + "Width", !0, i))) : (a += pt.css(e, "padding" + Ot[o], !0, i),
                "padding" !== n && (a += pt.css(e, "border" + Ot[o] + "Width", !0, i)));
        return a
    }
    function M(t, n, r) {
        var i = !0
            , o = "width" === n ? t.offsetWidth : t.offsetHeight
            , a = gn(t)
            , s = dt.boxSizing && "border-box" === pt.css(t, "boxSizing", !1, a);
        if (rt.msFullscreenElement && e.top !== e && t.getClientRects().length && (o = Math.round(100 * t.getBoundingClientRect()[n])),
            0 >= o || null  == o) {
            if (o = mn(t, n, a),
                (0 > o || null  == o) && (o = t.style[n]),
                    fn.test(o))
                return o;
            i = s && (dt.boxSizingReliable() || o === t.style[n]),
                o = parseFloat(o) || 0
        }
        return o + F(t, n, r || (s ? "border" : "content"), i, a) + "px"
    }
    function O(e, t, n, r, i) {
        return new O.prototype.init(e,t,n,r,i)
    }
    function R() {
        return e.setTimeout(function() {
            kn = void 0
        }),
            kn = pt.now()
    }
    function P(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)
            n = Ot[i],
                r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
            r
    }
    function B(e, t, n) {
        for (var r, i = ($.tweeners[t] || []).concat($.tweeners["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function W(e, t, n) {
        var r, i, o, a, s, u, l, c, d = this, f = {}, p = e.style, h = e.nodeType && Rt(e), g = pt._data(e, "fxshow");
        n.queue || (s = pt._queueHooks(e, "fx"),
        null  == s.unqueued && (s.unqueued = 0,
                u = s.empty.fire,
                s.empty.fire = function() {
                    s.unqueued || u()
                }
        ),
            s.unqueued++,
            d.always(function() {
                d.always(function() {
                    s.unqueued--,
                    pt.queue(e, "fx").length || s.empty.fire()
                })
            })),
        1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
            l = pt.css(e, "display"),
            c = "none" === l ? pt._data(e, "olddisplay") || j(e.nodeName) : l,
        "inline" === c && "none" === pt.css(e, "float") && (dt.inlineBlockNeedsLayout && "inline" !== j(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        n.overflow && (p.overflow = "hidden",
        dt.shrinkWrapBlocks() || d.always(function() {
            p.overflow = n.overflow[0],
                p.overflowX = n.overflow[1],
                p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r],
                    An.exec(i)) {
                if (delete t[r],
                        o = o || "toggle" === i,
                    i === (h ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r])
                        continue;h = !0
                }
                f[r] = g && g[r] || pt.style(e, r)
            } else
                l = void 0;
        if (pt.isEmptyObject(f))
            "inline" === ("none" === l ? j(e.nodeName) : l) && (p.display = l);
        else {
            g ? "hidden" in g && (h = g.hidden) : g = pt._data(e, "fxshow", {}),
            o && (g.hidden = !h),
                h ? pt(e).show() : d.done(function() {
                    pt(e).hide()
                }),
                d.done(function() {
                    var t;
                    pt._removeData(e, "fxshow");
                    for (t in f)
                        pt.style(e, t, f[t])
                });
            for (r in f)
                a = B(h ? g[r] : 0, r, d),
                r in g || (g[r] = a.start,
                h && (a.end = a.start,
                    a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function I(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = pt.camelCase(n),
                    i = t[r],
                    o = e[n],
                pt.isArray(o) && (i = o[1],
                    o = e[n] = o[0]),
                n !== r && (e[r] = o,
                    delete e[n]),
                    a = pt.cssHooks[r],
                a && "expand" in a) {
                o = a.expand(o),
                    delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n],
                        t[n] = i)
            } else
                t[r] = i
    }
    function $(e, t, n) {
        var r, i, o = 0, a = $.prefilters.length, s = pt.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (i)
                return !1;
            for (var t = kn || R(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++)
                l.tweens[a].run(o);
            return s.notifyWith(e, [l, o, n]),
                1 > o && u ? n : (s.resolveWith(e, [l]),
                    !1)
        }
            , l = s.promise({
            elem: e,
            props: pt.extend({}, t),
            opts: pt.extend(!0, {
                specialEasing: {},
                easing: pt.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: kn || R(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = pt.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                    r
            },
            stop: function(t) {
                var n = 0
                    , r = t ? l.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; r > n; n++)
                    l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [l, 1, 0]),
                    s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]),
                    this
            }
        }), c = l.props;
        for (I(c, l.opts.specialEasing); a > o; o++)
            if (r = $.prefilters[o].call(l, e, c, l.opts))
                return pt.isFunction(r.stop) && (pt._queueHooks(l.elem, l.opts.queue).stop = pt.proxy(r.stop, r)),
                    r;
        return pt.map(c, B, l),
        pt.isFunction(l.opts.start) && l.opts.start.call(e, l),
            pt.fx.timer(pt.extend(u, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function z(e) {
        return pt.attr(e, "class") || ""
    }
    function X(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
                t = "*");
            var r, i = 0, o = t.toLowerCase().match(Dt) || [];
            if (pt.isFunction(n))
                for (; r = o[i++]; )
                    "+" === r.charAt(0) ? (r = r.slice(1) || "*",
                        (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function U(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0,
                pt.each(e[s] || [], function(e, s) {
                    var l = s(t, n, r);
                    return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                        i(l),
                        !1)
                }),
                u
        }
        var o = {}
            , a = e === Zn;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function V(e, t) {
        var n, r, i = pt.ajaxSettings.flatOptions || {};
        for (r in t)
            void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && pt.extend(!0, e, n),
            e
    }
    function Y(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
            u.shift(),
            void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (a in s)
                if (s[a] && s[a].test(i)) {
                    u.unshift(a);
                    break
                }
        if (u[0] in n)
            o = u[0];
        else {
            for (a in n) {
                if (!u[0] || e.converters[a + " " + u[0]]) {
                    o = a;
                    break
                }
                r || (r = a)
            }
            o = o || r
        }
        return o ? (o !== u[0] && u.unshift(o),
            n[o]) : void 0
    }
    function J(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters)
                l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                    u = o,
                    o = c.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (a = l[u + " " + o] || l["* " + o],
                            !a)
                        for (i in l)
                            if (s = i.split(" "),
                                s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0],
                                    c.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && e["throws"])
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (d) {
                                return {
                                    state: "parsererror",
                                    error: a ? d : "No conversion from " + u + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function G(e) {
        return e.style && e.style.display || pt.css(e, "display")
    }
    function Q(e) {
        for (; e && 1 === e.nodeType; ) {
            if ("none" === G(e) || "hidden" === e.type)
                return !0;
            e = e.parentNode
        }
        return !1
    }
    function K(e, t, n, r) {
        var i;
        if (pt.isArray(t))
            pt.each(t, function(t, i) {
                n || ir.test(e) ? r(e, i) : K(e + "[" + ("object" == typeof i && null  != i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== pt.type(t))
            r(e, t);
        else
            for (i in t)
                K(e + "[" + i + "]", t[i], n, r)
    }
    function Z() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function et() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function tt(e) {
        return pt.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var nt = []
        , rt = e.document
        , it = nt.slice
        , ot = nt.concat
        , at = nt.push
        , st = nt.indexOf
        , ut = {}
        , lt = ut.toString
        , ct = ut.hasOwnProperty
        , dt = {}
        , ft = "1.12.3"
        , pt = function(e, t) {
            return new pt.fn.init(e,t)
        }
        , ht = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
        , gt = /^-ms-/
        , mt = /-([\da-z])/gi
        , vt = function(e, t) {
            return t.toUpperCase()
        }
        ;
    pt.fn = pt.prototype = {
        jquery: ft,
        constructor: pt,
        selector: "",
        length: 0,
        toArray: function() {
            return it.call(this)
        },
        get: function(e) {
            return null  != e ? 0 > e ? this[e + this.length] : this[e] : it.call(this)
        },
        pushStack: function(e) {
            var t = pt.merge(this.constructor(), e);
            return t.prevObject = this,
                t.context = this.context,
                t
        },
        each: function(e) {
            return pt.each(this, e)
        },
        map: function(e) {
            return this.pushStack(pt.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(it.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
                , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: at,
        sort: nt.sort,
        splice: nt.splice
    },
        pt.extend = pt.fn.extend = function() {
            var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
            for ("boolean" == typeof a && (l = a,
                a = arguments[s] || {},
                s++),
                 "object" == typeof a || pt.isFunction(a) || (a = {}),
                 s === u && (a = this,
                     s--); u > s; s++)
                if (null  != (i = arguments[s]))
                    for (r in i)
                        e = a[r],
                            n = i[r],
                        a !== n && (l && n && (pt.isPlainObject(n) || (t = pt.isArray(n))) ? (t ? (t = !1,
                            o = e && pt.isArray(e) ? e : []) : o = e && pt.isPlainObject(e) ? e : {},
                            a[r] = pt.extend(l, o, n)) : void 0 !== n && (a[r] = n));
            return a
        }
        ,
        pt.extend({
            expando: "jQuery" + (ft + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === pt.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === pt.type(e)
            }
            ,
            isWindow: function(e) {
                return null  != e && e == e.window
            },
            isNumeric: function(e) {
                var t = e && e.toString();
                return !pt.isArray(e) && t - parseFloat(t) + 1 >= 0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== pt.type(e) || e.nodeType || pt.isWindow(e))
                    return !1;
                try {
                    if (e.constructor && !ct.call(e, "constructor") && !ct.call(e.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (n) {
                    return !1
                }
                if (!dt.ownFirst)
                    for (t in e)
                        return ct.call(e, t);
                for (t in e)
                    ;
                return void 0 === t || ct.call(e, t)
            },
            type: function(e) {
                return null  == e ? e + "" : "object" == typeof e || "function" == typeof e ? ut[lt.call(e)] || "object" : typeof e
            },
            globalEval: function(t) {
                t && pt.trim(t) && (e.execScript || function(t) {
                        e.eval.call(e, t)
                    }
                )(t)
            },
            camelCase: function(e) {
                return e.replace(gt, "ms-").replace(mt, vt)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var r, i = 0;
                if (n(e))
                    for (r = e.length; r > i && t.call(e[i], i, e[i]) !== !1; i++)
                        ;
                else
                    for (i in e)
                        if (t.call(e[i], i, e[i]) === !1)
                            break;
                return e
            },
            trim: function(e) {
                return null  == e ? "" : (e + "").replace(ht, "")
            },
            makeArray: function(e, t) {
                var r = t || [];
                return null  != e && (n(Object(e)) ? pt.merge(r, "string" == typeof e ? [e] : e) : at.call(r, e)),
                    r
            },
            inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (st)
                        return st.call(t, e, n);
                    for (r = t.length,
                             n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                        if (n in t && t[n] === e)
                            return n
                }
                return -1
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; n > r; )
                    e[i++] = t[r++];
                if (n !== n)
                    for (; void 0 !== t[r]; )
                        e[i++] = t[r++];
                return e.length = i,
                    e
            },
            grep: function(e, t, n) {
                for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++)
                    r = !t(e[o], o),
                    r !== s && i.push(e[o]);
                return i
            },
            map: function(e, t, r) {
                var i, o, a = 0, s = [];
                if (n(e))
                    for (i = e.length; i > a; a++)
                        o = t(e[a], a, r),
                        null  != o && s.push(o);
                else
                    for (a in e)
                        o = t(e[a], a, r),
                        null  != o && s.push(o);
                return ot.apply([], s)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, r, i;
                return "string" == typeof t && (i = e[t],
                    t = e,
                    e = i),
                    pt.isFunction(e) ? (n = it.call(arguments, 2),
                        r = function() {
                            return e.apply(t || this, n.concat(it.call(arguments)))
                        }
                        ,
                        r.guid = e.guid = e.guid || pt.guid++,
                        r) : void 0
            },
            now: function() {
                return +new Date
            },
            support: dt
        }),
    "function" == typeof Symbol && (pt.fn[Symbol.iterator] = nt[Symbol.iterator]),
        pt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            ut["[object " + t + "]"] = t.toLowerCase()
        });
    var yt = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, l, d, p, h = t && t.ownerDocument, g = t ? t.nodeType : 9;
            if (n = n || [],
                "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g)
                return n;
            if (!r && ((t ? t.ownerDocument || t : B) !== H && L(t),
                    t = t || H,
                    _)) {
                if (11 !== g && (l = vt.exec(e)))
                    if (i = l[1]) {
                        if (9 === g) {
                            if (!(a = t.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                    n
                        } else if (h && (a = h.getElementById(i)) && R(t, a) && a.id === i)
                            return n.push(a),
                                n
                    } else {
                        if (l[2])
                            return K.apply(n, t.getElementsByTagName(e)),
                                n;
                        if ((i = l[3]) && w.getElementsByClassName && t.getElementsByClassName)
                            return K.apply(n, t.getElementsByClassName(i)),
                                n
                    }
                if (!(!w.qsa || X[e + " "] || F && F.test(e))) {
                    if (1 !== g)
                        h = t,
                            p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(xt, "\\$&") : t.setAttribute("id", s = P),
                                 d = N(e),
                                 o = d.length,
                                 u = ft.test(s) ? "#" + s : "[id='" + s + "']"; o--; )
                            d[o] = u + " " + f(d[o]);
                        p = d.join(","),
                            h = yt.test(e) && c(t.parentNode) || t
                    }
                    if (p)
                        try {
                            return K.apply(n, h.querySelectorAll(p)),
                                n
                        } catch (m) {} finally {
                            s === P && t.removeAttribute("id")
                        }
                }
            }
            return S(e.replace(st, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()],
                    e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[P] = !0,
                e
        }
        function i(e) {
            var t = H.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                    t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                T.attrHandle[n[r]] = t
        }
        function a(e, t) {
            var n = t && e
                , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function l(e) {
            return r(function(t) {
                return t = +t,
                    r(function(n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--; )
                            n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
            })
        }
        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function d() {}
        function f(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++)
                r += e[t].value;
            return r
        }
        function p(e, t, n) {
            var r = t.dir
                , i = n && "parentNode" === r
                , o = I++;
            return t.first ? function(t, n, o) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || i)
                        return e(t, n, o)
            }
                : function(t, n, a) {
                var s, u, l, c = [W, o];
                if (a) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || i) && e(t, n, a))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || i) {
                            if (l = t[P] || (t[P] = {}),
                                    u = l[t.uniqueID] || (l[t.uniqueID] = {}),
                                (s = u[r]) && s[0] === W && s[1] === o)
                                return c[2] = s[2];
                            if (u[r] = c,
                                    c[2] = e(t, n, a))
                                return !0
                        }
            }
        }
        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; )
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
                : e[0]
        }
        function g(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++)
                t(e, n[i], r);
            return r
        }
        function m(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null  != t; u > s; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function v(e, t, n, i, o, a) {
            return i && !i[P] && (i = v(i)),
            o && !o[P] && (o = v(o, a)),
                r(function(r, a, s, u) {
                    var l, c, d, f = [], p = [], h = a.length, v = r || g(t || "*", s.nodeType ? [s] : s, []), y = !e || !r && t ? v : m(v, f, e, s, u), x = n ? o || (r ? e : h || i) ? [] : a : y;
                    if (n && n(y, x, s, u),
                            i)
                        for (l = m(x, p),
                                 i(l, [], s, u),
                                 c = l.length; c--; )
                            (d = l[c]) && (x[p[c]] = !(y[p[c]] = d));
                    if (r) {
                        if (o || e) {
                            if (o) {
                                for (l = [],
                                         c = x.length; c--; )
                                    (d = x[c]) && l.push(y[c] = d);
                                o(null , x = [], l, u)
                            }
                            for (c = x.length; c--; )
                                (d = x[c]) && (l = o ? et(r, d) : f[c]) > -1 && (r[l] = !(a[l] = d))
                        }
                    } else
                        x = m(x === a ? x.splice(h, x.length) : x),
                            o ? o(null , a, x, u) : K.apply(a, x)
                })
        }
        function y(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, u = p(function(e) {
                return e === t
            }, a, !0), l = p(function(e) {
                return et(t, e) > -1
            }, a, !0), c = [function(e, n, r) {
                var i = !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                return t = null ,
                    i
            }
            ]; i > s; s++)
                if (n = T.relative[e[s].type])
                    c = [p(h(c), n)];
                else {
                    if (n = T.filter[e[s].type].apply(null , e[s].matches),
                            n[P]) {
                        for (r = ++s; i > r && !T.relative[e[r].type]; r++)
                            ;
                        return v(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(st, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && f(e))
                    }
                    c.push(n)
                }
            return h(c)
        }
        function x(e, n) {
            var i = n.length > 0
                , o = e.length > 0
                , a = function(r, a, s, u, l) {
                    var c, d, f, p = 0, h = "0", g = r && [], v = [], y = A, x = r || o && T.find.TAG("*", l), b = W += null  == y ? 1 : Math.random() || .1, w = x.length;
                    for (l && (A = a === H || a || l); h !== w && null  != (c = x[h]); h++) {
                        if (o && c) {
                            for (d = 0,
                                 a || c.ownerDocument === H || (L(c),
                                     s = !_); f = e[d++]; )
                                if (f(c, a || H, s)) {
                                    u.push(c);
                                    break
                                }
                            l && (W = b)
                        }
                        i && ((c = !f && c) && p--,
                        r && g.push(c))
                    }
                    if (p += h,
                        i && h !== p) {
                        for (d = 0; f = n[d++]; )
                            f(g, v, a, s);
                        if (r) {
                            if (p > 0)
                                for (; h--; )
                                    g[h] || v[h] || (v[h] = G.call(u));
                            v = m(v)
                        }
                        K.apply(u, v),
                        l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (W = b,
                        A = y),
                        g
                }
                ;
            return i ? r(a) : a
        }
        var b, w, T, C, E, N, k, S, A, D, j, L, H, q, _, F, M, O, R, P = "sizzle" + 1 * new Date, B = e.document, W = 0, I = 0, $ = n(), z = n(), X = n(), U = function(e, t) {
                return e === t && (j = !0),
                    0
            }
            , V = 1 << 31, Y = {}.hasOwnProperty, J = [], G = J.pop, Q = J.push, K = J.push, Z = J.slice, et = function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t)
                        return n;
                return -1
            }
            , tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", nt = "[\\x20\\t\\r\\n\\f]", rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", it = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + nt + "*\\]", ot = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)", at = new RegExp(nt + "+","g"), st = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$","g"), ut = new RegExp("^" + nt + "*," + nt + "*"), lt = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"), ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]","g"), dt = new RegExp(ot), ft = new RegExp("^" + rt + "$"), pt = {
                ID: new RegExp("^#(" + rt + ")"),
                CLASS: new RegExp("^\\.(" + rt + ")"),
                TAG: new RegExp("^(" + rt + "|[*])"),
                ATTR: new RegExp("^" + it),
                PSEUDO: new RegExp("^" + ot),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)","i"),
                bool: new RegExp("^(?:" + tt + ")$","i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)","i")
            }, ht = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, mt = /^[^{]+\{\s*\[native \w/, vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, yt = /[+~]/, xt = /'|\\/g, bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)","ig"), wt = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            }
            , Tt = function() {
                L()
            }
            ;
        try {
            K.apply(J = Z.call(B.childNodes), B.childNodes),
                J[B.childNodes.length].nodeType
        } catch (Ct) {
            K = {
                apply: J.length ? function(e, t) {
                    Q.apply(e, Z.call(t))
                }
                    : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        w = t.support = {},
            E = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }
            ,
            L = t.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : B;
                return r !== H && 9 === r.nodeType && r.documentElement ? (H = r,
                    q = H.documentElement,
                    _ = !E(H),
                (n = H.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Tt, !1) : n.attachEvent && n.attachEvent("onunload", Tt)),
                    w.attributes = i(function(e) {
                        return e.className = "i",
                            !e.getAttribute("className")
                    }),
                    w.getElementsByTagName = i(function(e) {
                        return e.appendChild(H.createComment("")),
                            !e.getElementsByTagName("*").length
                    }),
                    w.getElementsByClassName = mt.test(H.getElementsByClassName),
                    w.getById = i(function(e) {
                        return q.appendChild(e).id = P,
                        !H.getElementsByName || !H.getElementsByName(P).length
                    }),
                    w.getById ? (T.find.ID = function(e, t) {
                            if ("undefined" != typeof t.getElementById && _) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }
                            ,
                            T.filter.ID = function(e) {
                                var t = e.replace(bt, wt);
                                return function(e) {
                                    return e.getAttribute("id") === t
                                }
                            }
                    ) : (delete T.find.ID,
                            T.filter.ID = function(e) {
                                var t = e.replace(bt, wt);
                                return function(e) {
                                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                    return n && n.value === t
                                }
                            }
                    ),
                    T.find.TAG = w.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                    }
                        : function(e, t) {
                        var n, r = [], i = 0, o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[i++]; )
                                1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }
                    ,
                    T.find.CLASS = w.getElementsByClassName && function(e, t) {
                            return "undefined" != typeof t.getElementsByClassName && _ ? t.getElementsByClassName(e) : void 0
                        }
                    ,
                    M = [],
                    F = [],
                (w.qsa = mt.test(H.querySelectorAll)) && (i(function(e) {
                    q.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + nt + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || F.push("\\[" + nt + "*(?:value|" + tt + ")"),
                    e.querySelectorAll("[id~=" + P + "-]").length || F.push("~="),
                    e.querySelectorAll(":checked").length || F.push(":checked"),
                    e.querySelectorAll("a#" + P + "+*").length || F.push(".#.+[+~]")
                }),
                    i(function(e) {
                        var t = H.createElement("input");
                        t.setAttribute("type", "hidden"),
                            e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length && F.push("name" + nt + "*[*^$|!~]?="),
                        e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"),
                            e.querySelectorAll("*,:x"),
                            F.push(",.*:")
                    })),
                (w.matchesSelector = mt.test(O = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function(e) {
                    w.disconnectedMatch = O.call(e, "div"),
                        O.call(e, "[s!='']:x"),
                        M.push("!=", ot)
                }),
                    F = F.length && new RegExp(F.join("|")),
                    M = M.length && new RegExp(M.join("|")),
                    t = mt.test(q.compareDocumentPosition),
                    R = t || mt.test(q.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e
                            , r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    }
                        : function(e, t) {
                        if (t)
                            for (; t = t.parentNode; )
                                if (t === e)
                                    return !0;
                        return !1
                    }
                    ,
                    U = t ? function(e, t) {
                        if (e === t)
                            return j = !0,
                                0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                            1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === H || e.ownerDocument === B && R(B, e) ? -1 : t === H || t.ownerDocument === B && R(B, t) ? 1 : D ? et(D, e) - et(D, t) : 0 : 4 & n ? -1 : 1)
                    }
                        : function(e, t) {
                        if (e === t)
                            return j = !0,
                                0;
                        var n, r = 0, i = e.parentNode, o = t.parentNode, s = [e], u = [t];
                        if (!i || !o)
                            return e === H ? -1 : t === H ? 1 : i ? -1 : o ? 1 : D ? et(D, e) - et(D, t) : 0;
                        if (i === o)
                            return a(e, t);
                        for (n = e; n = n.parentNode; )
                            s.unshift(n);
                        for (n = t; n = n.parentNode; )
                            u.unshift(n);
                        for (; s[r] === u[r]; )
                            r++;
                        return r ? a(s[r], u[r]) : s[r] === B ? -1 : u[r] === B ? 1 : 0
                    }
                    ,
                    H) : H
            }
            ,
            t.matches = function(e, n) {
                return t(e, null , null , n)
            }
            ,
            t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== H && L(e),
                        n = n.replace(ct, "='$1']"),
                        !(!w.matchesSelector || !_ || X[n + " "] || M && M.test(n) || F && F.test(n)))
                    try {
                        var r = O.call(e, n);
                        if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return r
                    } catch (i) {}
                return t(n, H, null , [e]).length > 0
            }
            ,
            t.contains = function(e, t) {
                return (e.ownerDocument || e) !== H && L(e),
                    R(e, t)
            }
            ,
            t.attr = function(e, t) {
                (e.ownerDocument || e) !== H && L(e);
                var n = T.attrHandle[t.toLowerCase()]
                    , r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !_) : void 0;
                return void 0 !== r ? r : w.attributes || !_ ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }
            ,
            t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            t.uniqueSort = function(e) {
                var t, n = [], r = 0, i = 0;
                if (j = !w.detectDuplicates,
                        D = !w.sortStable && e.slice(0),
                        e.sort(U),
                        j) {
                    for (; t = e[i++]; )
                        t === e[i] && (r = n.push(i));
                    for (; r--; )
                        e.splice(n[r], 1)
                }
                return D = null ,
                    e
            }
            ,
            C = t.getText = function(e) {
                var t, n = "", r = 0, i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += C(e)
                    } else if (3 === i || 4 === i)
                        return e.nodeValue
                } else
                    for (; t = e[r++]; )
                        n += C(t);
                return n
            }
            ,
            T = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: pt,
                attrHandle: {},
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
                        return e[1] = e[1].replace(bt, wt),
                            e[3] = (e[3] || e[4] || e[5] || "").replace(bt, wt),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                            e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return pt.CHILD.test(e[0]) ? null  : (e[3] ? e[2] = e[4] || e[5] || "" : n && dt.test(n) && (t = N(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                            e[2] = n.slice(0, t)),
                            e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(bt, wt).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        }
                            : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = $[e + " "];
                        return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && $(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                    },
                    ATTR: function(e, n, r) {
                        return function(i) {
                            var o = t.attr(i, e);
                            return null  == o ? "!=" === n : n ? (o += "",
                                "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(at, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3)
                            , a = "last" !== e.slice(-4)
                            , s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        }
                            : function(t, n, u) {
                            var l, c, d, f, p, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !u && !s, x = !1;
                            if (m) {
                                if (o) {
                                    for (; g; ) {
                                        for (f = t; f = f[g]; )
                                            if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)
                                                return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? m.firstChild : m.lastChild],
                                    a && y) {
                                    for (f = m,
                                             d = f[P] || (f[P] = {}),
                                             c = d[f.uniqueID] || (d[f.uniqueID] = {}),
                                             l = c[e] || [],
                                             p = l[0] === W && l[1],
                                             x = p && l[2],
                                             f = p && m.childNodes[p]; f = ++p && f && f[g] || (x = p = 0) || h.pop(); )
                                        if (1 === f.nodeType && ++x && f === t) {
                                            c[e] = [W, p, x];
                                            break
                                        }
                                } else if (y && (f = t,
                                        d = f[P] || (f[P] = {}),
                                        c = d[f.uniqueID] || (d[f.uniqueID] = {}),
                                        l = c[e] || [],
                                        p = l[0] === W && l[1],
                                        x = p),
                                    x === !1)
                                    for (; (f = ++p && f && f[g] || (x = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++x || (y && (d = f[P] || (f[P] = {}),
                                        c = d[f.uniqueID] || (d[f.uniqueID] = {}),
                                        c[e] = [W, x]),
                                    f !== t)); )
                                        ;
                                return x -= i,
                                x === r || x % r === 0 && x / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[P] ? o(n) : o.length > 1 ? (i = [e, e, "", n],
                                T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                                    for (var r, i = o(e, n), a = i.length; a--; )
                                        r = et(e, i[a]),
                                            e[r] = !(t[r] = i[a])
                                }) : function(e) {
                                    return o(e, 0, i)
                                }
                        ) : o
                    }
                },
                pseudos: {
                    not: r(function(e) {
                        var t = []
                            , n = []
                            , i = k(e.replace(st, "$1"));
                        return i[P] ? r(function(e, t, n, r) {
                            for (var o, a = i(e, null , r, []), s = e.length; s--; )
                                (o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, r, o) {
                            return t[0] = e,
                                i(t, null , o, n),
                                t[0] = null ,
                                !n.pop()
                        }
                    }),
                    has: r(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: r(function(e) {
                        return e = e.replace(bt, wt),
                            function(t) {
                                return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                            }
                    }),
                    lang: r(function(e) {
                        return ft.test(e || "") || t.error("unsupported lang: " + e),
                            e = e.replace(bt, wt).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                        return n = n.toLowerCase(),
                                        n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === q
                    },
                    focus: function(e) {
                        return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !T.pseudos.empty(e)
                    },
                    header: function(e) {
                        return gt.test(e.nodeName)
                    },
                    input: function(e) {
                        return ht.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null  == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: l(function() {
                        return [0]
                    }),
                    last: l(function(e, t) {
                        return [t - 1]
                    }),
                    eq: l(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: l(function(e, t) {
                        for (var n = 0; t > n; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: l(function(e, t) {
                        for (var n = 1; t > n; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: l(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0; )
                            e.push(r);
                        return e
                    }),
                    gt: l(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; ++r < t; )
                            e.push(r);
                        return e
                    })
                }
            },
            T.pseudos.nth = T.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            T.pseudos[b] = s(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            T.pseudos[b] = u(b);
        return d.prototype = T.filters = T.pseudos,
            T.setFilters = new d,
            N = t.tokenize = function(e, n) {
                var r, i, o, a, s, u, l, c = z[e + " "];
                if (c)
                    return n ? 0 : c.slice(0);
                for (s = e,
                         u = [],
                         l = T.preFilter; s; ) {
                    r && !(i = ut.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                        u.push(o = [])),
                        r = !1,
                    (i = lt.exec(s)) && (r = i.shift(),
                        o.push({
                            value: r,
                            type: i[0].replace(st, " ")
                        }),
                        s = s.slice(r.length));
                    for (a in T.filter)
                        !(i = pt[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(),
                            o.push({
                                value: r,
                                type: a,
                                matches: i
                            }),
                            s = s.slice(r.length));
                    if (!r)
                        break
                }
                return n ? s.length : s ? t.error(e) : z(e, u).slice(0)
            }
            ,
            k = t.compile = function(e, t) {
                var n, r = [], i = [], o = X[e + " "];
                if (!o) {
                    for (t || (t = N(e)),
                             n = t.length; n--; )
                        o = y(t[n]),
                            o[P] ? r.push(o) : i.push(o);
                    o = X(e, x(i, r)),
                        o.selector = e
                }
                return o
            }
            ,
            S = t.select = function(e, t, n, r) {
                var i, o, a, s, u, l = "function" == typeof e && e, d = !r && N(e = l.selector || e);
                if (n = n || [],
                    1 === d.length) {
                    if (o = d[0] = d[0].slice(0),
                        o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && _ && T.relative[o[1].type]) {
                        if (t = (T.find.ID(a.matches[0].replace(bt, wt), t) || [])[0],
                                !t)
                            return n;
                        l && (t = t.parentNode),
                            e = e.slice(o.shift().value.length)
                    }
                    for (i = pt.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i],
                        !T.relative[s = a.type]); )
                        if ((u = T.find[s]) && (r = u(a.matches[0].replace(bt, wt), yt.test(o[0].type) && c(t.parentNode) || t))) {
                            if (o.splice(i, 1),
                                    e = r.length && f(o),
                                    !e)
                                return K.apply(n, r),
                                    n;
                            break
                        }
                }
                return (l || k(e, d))(r, t, !_, n, !t || yt.test(e) && c(t.parentNode) || t),
                    n
            }
            ,
            w.sortStable = P.split("").sort(U).join("") === P,
            w.detectDuplicates = !!j,
            L(),
            w.sortDetached = i(function(e) {
                return 1 & e.compareDocumentPosition(H.createElement("div"))
            }),
        i(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        w.attributes && i(function(e) {
            return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        i(function(e) {
            return null  == e.getAttribute("disabled")
        }) || o(tt, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
            t
    }(e);
    pt.find = yt,
        pt.expr = yt.selectors,
        pt.expr[":"] = pt.expr.pseudos,
        pt.uniqueSort = pt.unique = yt.uniqueSort,
        pt.text = yt.getText,
        pt.isXMLDoc = yt.isXML,
        pt.contains = yt.contains;
    var xt = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && pt(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
        , bt = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
        , wt = pt.expr.match.needsContext
        , Tt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
        , Ct = /^.[^:#\[\.,]*$/;
    pt.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? pt.find.matchesSelector(r, e) ? [r] : [] : pt.find.matches(e, pt.grep(t, function(e) {
                return 1 === e.nodeType
            }))
    }
        ,
        pt.fn.extend({
            find: function(e) {
                var t, n = [], r = this, i = r.length;
                if ("string" != typeof e)
                    return this.pushStack(pt(e).filter(function() {
                        for (t = 0; i > t; t++)
                            if (pt.contains(r[t], this))
                                return !0
                    }));
                for (t = 0; i > t; t++)
                    pt.find(e, r[t], n);
                return n = this.pushStack(i > 1 ? pt.unique(n) : n),
                    n.selector = this.selector ? this.selector + " " + e : e,
                    n
            },
            filter: function(e) {
                return this.pushStack(r(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(r(this, e || [], !0))
            },
            is: function(e) {
                return !!r(this, "string" == typeof e && wt.test(e) ? pt(e) : e || [], !1).length
            }
        });
    var Et, Nt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, kt = pt.fn.init = function(e, t, n) {
            var r, i;
            if (!e)
                return this;
            if (n = n || Et,
                "string" == typeof e) {
                if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null , e, null ] : Nt.exec(e),
                    !r || !r[1] && t)
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof pt ? t[0] : t,
                            pt.merge(this, pt.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : rt, !0)),
                        Tt.test(r[1]) && pt.isPlainObject(t))
                        for (r in t)
                            pt.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                if (i = rt.getElementById(r[2]),
                    i && i.parentNode) {
                    if (i.id !== r[2])
                        return Et.find(e);
                    this.length = 1,
                        this[0] = i
                }
                return this.context = rt,
                    this.selector = e,
                    this
            }
            return e.nodeType ? (this.context = this[0] = e,
                this.length = 1,
                this) : pt.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(pt) : (void 0 !== e.selector && (this.selector = e.selector,
                this.context = e.context),
                pt.makeArray(e, this))
        }
        ;
    kt.prototype = pt.fn,
        Et = pt(rt);
    var St = /^(?:parents|prev(?:Until|All))/
        , At = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    pt.fn.extend({
        has: function(e) {
            var t, n = pt(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (pt.contains(this, n[t]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = wt.test(e) || "string" != typeof e ? pt(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && pt.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? pt.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? pt.inArray(this[0], pt(e)) : pt.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(pt.uniqueSort(pt.merge(this.get(), pt(e, t))))
        },
        addBack: function(e) {
            return this.add(null  == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
        pt.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return xt(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return xt(e, "parentNode", n)
            },
            next: function(e) {
                return i(e, "nextSibling")
            },
            prev: function(e) {
                return i(e, "previousSibling")
            },
            nextAll: function(e) {
                return xt(e, "nextSibling")
            },
            prevAll: function(e) {
                return xt(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return xt(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return xt(e, "previousSibling", n)
            },
            siblings: function(e) {
                return bt((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return bt(e.firstChild)
            },
            contents: function(e) {
                return pt.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : pt.merge([], e.childNodes)
            }
        }, function(e, t) {
            pt.fn[e] = function(n, r) {
                var i = pt.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (i = pt.filter(r, i)),
                this.length > 1 && (At[e] || (i = pt.uniqueSort(i)),
                St.test(e) && (i = i.reverse())),
                    this.pushStack(i)
            }
        });
    var Dt = /\S+/g;
    pt.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : pt.extend({}, e);
        var t, n, r, i, a = [], s = [], u = -1, l = function() {
            for (i = e.once,
                     r = t = !0; s.length; u = -1)
                for (n = s.shift(); ++u < a.length; )
                    a[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = a.length,
                        n = !1);
            e.memory || (n = !1),
                t = !1,
            i && (a = n ? [] : "")
        }
            , c = {
            add: function() {
                return a && (n && !t && (u = a.length - 1,
                    s.push(n)),
                    function r(t) {
                        pt.each(t, function(t, n) {
                            pt.isFunction(n) ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== pt.type(n) && r(n)
                        })
                    }(arguments),
                n && !t && l()),
                    this
            },
            remove: function() {
                return pt.each(arguments, function(e, t) {
                    for (var n; (n = pt.inArray(t, a, n)) > -1; )
                        a.splice(n, 1),
                        u >= n && u--
                }),
                    this
            },
            has: function(e) {
                return e ? pt.inArray(e, a) > -1 : a.length > 0
            },
            empty: function() {
                return a && (a = []),
                    this
            },
            disable: function() {
                return i = s = [],
                    a = n = "",
                    this
            },
            disabled: function() {
                return !a
            },
            lock: function() {
                return i = !0,
                n || c.disable(),
                    this
            },
            locked: function() {
                return !!i
            },
            fireWith: function(e, n) {
                return i || (n = n || [],
                    n = [e, n.slice ? n.slice() : n],
                    s.push(n),
                t || l()),
                    this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                    this
            },
            fired: function() {
                return !!r
            }
        };
        return c
    }
        ,
        pt.extend({
            Deferred: function(e) {
                var t = [["resolve", "done", pt.Callbacks("once memory"), "resolved"], ["reject", "fail", pt.Callbacks("once memory"), "rejected"], ["notify", "progress", pt.Callbacks("memory")]]
                    , n = "pending"
                    , r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments),
                            this
                    },
                    then: function() {
                        var e = arguments;
                        return pt.Deferred(function(n) {
                            pt.each(t, function(t, o) {
                                var a = pt.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && pt.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }),
                                e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null  != e ? pt.extend(e, r) : r
                    }
                }
                    , i = {};
                return r.pipe = r.then,
                    pt.each(t, function(e, o) {
                        var a = o[2]
                            , s = o[3];
                        r[o[1]] = a.add,
                        s && a.add(function() {
                            n = s
                        }, t[1 ^ e][2].disable, t[2][2].lock),
                            i[o[0]] = function() {
                                return i[o[0] + "With"](this === i ? r : this, arguments),
                                    this
                            }
                            ,
                            i[o[0] + "With"] = a.fireWith
                    }),
                    r.promise(i),
                e && e.call(i, i),
                    i
            },
            when: function(e) {
                var t, n, r, i = 0, o = it.call(arguments), a = o.length, s = 1 !== a || e && pt.isFunction(e.promise) ? a : 0, u = 1 === s ? e : pt.Deferred(), l = function(e, n, r) {
                        return function(i) {
                            n[e] = this,
                                r[e] = arguments.length > 1 ? it.call(arguments) : i,
                                r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                        }
                    }
                    ;
                if (a > 1)
                    for (t = new Array(a),
                             n = new Array(a),
                             r = new Array(a); a > i; i++)
                        o[i] && pt.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, t)).done(l(i, r, o)).fail(u.reject) : --s;
                return s || u.resolveWith(r, o),
                    u.promise()
            }
        });
    var jt;
    pt.fn.ready = function(e) {
        return pt.ready.promise().done(e),
            this
    }
        ,
        pt.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? pt.readyWait++ : pt.ready(!0)
            },
            ready: function(e) {
                (e === !0 ? --pt.readyWait : pt.isReady) || (pt.isReady = !0,
                e !== !0 && --pt.readyWait > 0 || (jt.resolveWith(rt, [pt]),
                pt.fn.triggerHandler && (pt(rt).triggerHandler("ready"),
                    pt(rt).off("ready"))))
            }
        }),
        pt.ready.promise = function(t) {
            if (!jt)
                if (jt = pt.Deferred(),
                    "complete" === rt.readyState || "loading" !== rt.readyState && !rt.documentElement.doScroll)
                    e.setTimeout(pt.ready);
                else if (rt.addEventListener)
                    rt.addEventListener("DOMContentLoaded", s),
                        e.addEventListener("load", s);
                else {
                    rt.attachEvent("onreadystatechange", s),
                        e.attachEvent("onload", s);
                    var n = !1;
                    try {
                        n = null  == e.frameElement && rt.documentElement
                    } catch (r) {}
                    n && n.doScroll && !function i() {
                        if (!pt.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (t) {
                                return e.setTimeout(i, 50)
                            }
                            a(),
                                pt.ready()
                        }
                    }()
                }
            return jt.promise(t)
        }
        ,
        pt.ready.promise();
    var Lt;
    for (Lt in pt(dt))
        break;
    dt.ownFirst = "0" === Lt,
        dt.inlineBlockNeedsLayout = !1,
        pt(function() {
            var e, t, n, r;
            n = rt.getElementsByTagName("body")[0],
            n && n.style && (t = rt.createElement("div"),
                r = rt.createElement("div"),
                r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                n.appendChild(r).appendChild(t),
            "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
                dt.inlineBlockNeedsLayout = e = 3 === t.offsetWidth,
            e && (n.style.zoom = 1)),
                n.removeChild(r))
        }),
        function() {
            var e = rt.createElement("div");
            dt.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                dt.deleteExpando = !1
            }
            e = null
        }();
    var Ht = function(e) {
        var t = pt.noData[(e.nodeName + " ").toLowerCase()]
            , n = +e.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
    }
        , qt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
        , _t = /([A-Z])/g;
    pt.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? pt.cache[e[pt.expando]] : e[pt.expando],
            !!e && !l(e)
        },
        data: function(e, t, n) {
            return c(e, t, n)
        },
        removeData: function(e, t) {
            return d(e, t)
        },
        _data: function(e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return d(e, t, !0)
        }
    }),
        pt.fn.extend({
            data: function(e, t) {
                var n, r, i, o = this[0], a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = pt.data(o),
                        1 === o.nodeType && !pt._data(o, "parsedAttrs"))) {
                        for (n = a.length; n--; )
                            a[n] && (r = a[n].name,
                            0 === r.indexOf("data-") && (r = pt.camelCase(r.slice(5)),
                                u(o, r, i[r])));
                        pt._data(o, "parsedAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function() {
                    pt.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    pt.data(this, e, t)
                }) : o ? u(o, e, pt.data(o, e)) : void 0
            },
            removeData: function(e) {
                return this.each(function() {
                    pt.removeData(this, e)
                })
            }
        }),
        pt.extend({
            queue: function(e, t, n) {
                var r;
                return e ? (t = (t || "fx") + "queue",
                    r = pt._data(e, t),
                n && (!r || pt.isArray(n) ? r = pt._data(e, t, pt.makeArray(n)) : r.push(n)),
                r || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = pt.queue(e, t)
                    , r = n.length
                    , i = n.shift()
                    , o = pt._queueHooks(e, t)
                    , a = function() {
                        pt.dequeue(e, t)
                    }
                    ;
                "inprogress" === i && (i = n.shift(),
                    r--),
                i && ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    i.call(e, a, o)),
                !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return pt._data(e, n) || pt._data(e, n, {
                        empty: pt.Callbacks("once memory").add(function() {
                            pt._removeData(e, t + "queue"),
                                pt._removeData(e, n)
                        })
                    })
            }
        }),
        pt.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e,
                    e = "fx",
                    n--),
                    arguments.length < n ? pt.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = pt.queue(this, e, t);
                        pt._queueHooks(this, e),
                        "fx" === e && "inprogress" !== n[0] && pt.dequeue(this, e)
                    })
            },
            dequeue: function(e) {
                return this.each(function() {
                    pt.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1, i = pt.Deferred(), o = this, a = this.length, s = function() {
                        --r || i.resolveWith(o, [o])
                    }
                    ;
                for ("string" != typeof e && (t = e,
                    e = void 0),
                         e = e || "fx"; a--; )
                    n = pt._data(o[a], e + "queueHooks"),
                    n && n.empty && (r++,
                        n.empty.add(s));
                return s(),
                    i.promise(t)
            }
        }),
        function() {
            var e;
            dt.shrinkWrapBlocks = function() {
                if (null  != e)
                    return e;
                e = !1;
                var t, n, r;
                return n = rt.getElementsByTagName("body")[0],
                    n && n.style ? (t = rt.createElement("div"),
                        r = rt.createElement("div"),
                        r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                        n.appendChild(r).appendChild(t),
                    "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                        t.appendChild(rt.createElement("div")).style.width = "5px",
                        e = 3 !== t.offsetWidth),
                        n.removeChild(r),
                        e) : void 0
            }
        }();
    var Ft = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
        , Mt = new RegExp("^(?:([+-])=|)(" + Ft + ")([a-z%]*)$","i")
        , Ot = ["Top", "Right", "Bottom", "Left"]
        , Rt = function(e, t) {
        return e = t || e,
        "none" === pt.css(e, "display") || !pt.contains(e.ownerDocument, e)
    }
        , Pt = function(e, t, n, r, i, o, a) {
        var s = 0
            , u = e.length
            , l = null  == n;
        if ("object" === pt.type(n)) {
            i = !0;
            for (s in n)
                Pt(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0,
            pt.isFunction(r) || (a = !0),
            l && (a ? (t.call(e, r),
                t = null ) : (l = t,
                    t = function(e, t, n) {
                        return l.call(pt(e), n)
                    }
            )),
                t))
            for (; u > s; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
        , Bt = /^(?:checkbox|radio)$/i
        , Wt = /<([\w:-]+)/
        , It = /^$|\/(?:java|ecma)script/i
        , $t = /^\s+/
        , zt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    !function() {
        var e = rt.createElement("div")
            , t = rt.createDocumentFragment()
            , n = rt.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
            dt.leadingWhitespace = 3 === e.firstChild.nodeType,
            dt.tbody = !e.getElementsByTagName("tbody").length,
            dt.htmlSerialize = !!e.getElementsByTagName("link").length,
            dt.html5Clone = "<:nav></:nav>" !== rt.createElement("nav").cloneNode(!0).outerHTML,
            n.type = "checkbox",
            n.checked = !0,
            t.appendChild(n),
            dt.appendChecked = n.checked,
            e.innerHTML = "<textarea>x</textarea>",
            dt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue,
            t.appendChild(e),
            n = rt.createElement("input"),
            n.setAttribute("type", "radio"),
            n.setAttribute("checked", "checked"),
            n.setAttribute("name", "t"),
            e.appendChild(n),
            dt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
            dt.noCloneEvent = !!e.addEventListener,
            e[pt.expando] = 1,
            dt.attributes = !e.getAttribute(pt.expando)
    }();
    var Xt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: dt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Xt.optgroup = Xt.option,
        Xt.tbody = Xt.tfoot = Xt.colgroup = Xt.caption = Xt.thead,
        Xt.th = Xt.td;
    var Ut = /<|&#?\w+;/
        , Vt = /<tbody/i;
    !function() {
        var t, n, r = rt.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            n = "on" + t,
            (dt[t] = n in e) || (r.setAttribute(n, "t"),
                dt[t] = r.attributes[n].expando === !1);
        r = null
    }();
    var Yt = /^(?:input|select|textarea)$/i
        , Jt = /^key/
        , Gt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
        , Qt = /^(?:focusinfocus|focusoutblur)$/
        , Kt = /^([^.]*)(?:\.(.+)|)/;
    pt.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, d, f, p, h, g, m = pt._data(e);
            if (m) {
                for (n.handler && (u = n,
                    n = u.handler,
                    i = u.selector),
                     n.guid || (n.guid = pt.guid++),
                     (a = m.events) || (a = m.events = {}),
                     (c = m.handle) || (c = m.handle = function(e) {
                         return "undefined" == typeof pt || e && pt.event.triggered === e.type ? void 0 : pt.event.dispatch.apply(c.elem, arguments)
                     }
                         ,
                         c.elem = e),
                         t = (t || "").match(Dt) || [""],
                         s = t.length; s--; )
                    o = Kt.exec(t[s]) || [],
                        p = g = o[1],
                        h = (o[2] || "").split(".").sort(),
                    p && (l = pt.event.special[p] || {},
                        p = (i ? l.delegateType : l.bindType) || p,
                        l = pt.event.special[p] || {},
                        d = pt.extend({
                            type: p,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && pt.expr.match.needsContext.test(i),
                            namespace: h.join(".")
                        }, u),
                    (f = a[p]) || (f = a[p] = [],
                        f.delegateCount = 0,
                    l.setup && l.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))),
                    l.add && (l.add.call(e, d),
                    d.handler.guid || (d.handler.guid = n.guid)),
                        i ? f.splice(f.delegateCount++, 0, d) : f.push(d),
                        pt.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, d, f, p, h, g, m = pt.hasData(e) && pt._data(e);
            if (m && (c = m.events)) {
                for (t = (t || "").match(Dt) || [""],
                         l = t.length; l--; )
                    if (s = Kt.exec(t[l]) || [],
                            p = g = s[1],
                            h = (s[2] || "").split(".").sort(),
                            p) {
                        for (d = pt.event.special[p] || {},
                                 p = (r ? d.delegateType : d.bindType) || p,
                                 f = c[p] || [],
                                 s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                 u = o = f.length; o--; )
                            a = f[o],
                            !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1),
                            a.selector && f.delegateCount--,
                            d.remove && d.remove.call(e, a));
                        u && !f.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || pt.removeEvent(e, p, m.handle),
                            delete c[p])
                    } else
                        for (p in c)
                            pt.event.remove(e, p + t[l], n, r, !0);
                pt.isEmptyObject(c) && (delete m.handle,
                    pt._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, a, s, u, l, c, d, f = [r || rt], p = ct.call(t, "type") ? t.type : t, h = ct.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = r = r || rt,
                3 !== r.nodeType && 8 !== r.nodeType && !Qt.test(p + pt.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."),
                    p = h.shift(),
                    h.sort()),
                    a = p.indexOf(":") < 0 && "on" + p,
                    t = t[pt.expando] ? t : new pt.Event(p,"object" == typeof t && t),
                    t.isTrigger = i ? 2 : 3,
                    t.namespace = h.join("."),
                    t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null ,
                    t.result = void 0,
                t.target || (t.target = r),
                    n = null  == n ? [t] : pt.makeArray(n, [t]),
                    l = pt.event.special[p] || {},
                i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
                if (!i && !l.noBubble && !pt.isWindow(r)) {
                    for (u = l.delegateType || p,
                         Qt.test(u + p) || (s = s.parentNode); s; s = s.parentNode)
                        f.push(s),
                            c = s;
                    c === (r.ownerDocument || rt) && f.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0; (s = f[d++]) && !t.isPropagationStopped(); )
                    t.type = d > 1 ? u : l.bindType || p,
                        o = (pt._data(s, "events") || {})[t.type] && pt._data(s, "handle"),
                    o && o.apply(s, n),
                        o = a && s[a],
                    o && o.apply && Ht(s) && (t.result = o.apply(s, n),
                    t.result === !1 && t.preventDefault());
                if (t.type = p,
                    !i && !t.isDefaultPrevented() && (!l._default || l._default.apply(f.pop(), n) === !1) && Ht(r) && a && r[p] && !pt.isWindow(r)) {
                    c = r[a],
                    c && (r[a] = null ),
                        pt.event.triggered = p;
                    try {
                        r[p]()
                    } catch (g) {}
                    pt.event.triggered = void 0,
                    c && (r[a] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = pt.event.fix(e);
            var t, n, r, i, o, a = [], s = it.call(arguments), u = (pt._data(this, "events") || {})[e.type] || [], l = pt.event.special[e.type] || {};
            if (s[0] = e,
                    e.delegateTarget = this,
                !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (a = pt.event.handlers.call(this, e, u),
                         t = 0; (i = a[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = i.elem,
                             n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                        e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o,
                            e.data = o.data,
                            r = ((pt.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s),
                        void 0 !== r && (e.result = r) === !1 && (e.preventDefault(),
                            e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e),
                    e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [], s = t.delegateCount, u = e.target;
            if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (r = [],
                                 n = 0; s > n; n++)
                            o = t[n],
                                i = o.selector + " ",
                            void 0 === r[i] && (r[i] = o.needsContext ? pt(i, this).index(u) > -1 : pt.find(i, this, null , [u]).length),
                            r[i] && r.push(o);
                        r.length && a.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }),
                a
        },
        fix: function(e) {
            if (e[pt.expando])
                return e;
            var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Gt.test(i) ? this.mouseHooks : Jt.test(i) ? this.keyHooks : {}),
                     r = a.props ? this.props.concat(a.props) : this.props,
                     e = new pt.Event(o),
                     t = r.length; t--; )
                n = r[t],
                    e[n] = o[n];
            return e.target || (e.target = o.srcElement || rt),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
                e.metaKey = !!e.metaKey,
                a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null  == e.which && (e.which = null  != t.charCode ? t.charCode : t.keyCode),
                    e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button, a = t.fromElement;
                return null  == e.pageX && null  != t.clientX && (r = e.target.ownerDocument || rt,
                    i = r.documentElement,
                    n = r.body,
                    e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0),
                    e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)),
                !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a),
                e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                    e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== b() && this.focus)
                        try {
                            return this.focus(),
                                !1
                        } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === b() && this.blur ? (this.blur(),
                        !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return pt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                        !1) : void 0
                },
                _default: function(e) {
                    return pt.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n) {
            var r = pt.extend(new pt.Event, n, {
                type: e,
                isSimulated: !0
            });
            pt.event.trigger(r, null , t),
            r.isDefaultPrevented() && n.preventDefault()
        }
    },
        pt.removeEvent = rt.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }
            : function(e, t, n) {
            var r = "on" + t;
            e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null ),
                e.detachEvent(r, n))
        }
        ,
        pt.Event = function(e, t) {
            return this instanceof pt.Event ? (e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? y : x) : this.type = e,
            t && pt.extend(this, t),
                this.timeStamp = e && e.timeStamp || pt.now(),
                void (this[pt.expando] = !0)) : new pt.Event(e,t)
        }
        ,
        pt.Event.prototype = {
            constructor: pt.Event,
            isDefaultPrevented: x,
            isPropagationStopped: x,
            isImmediatePropagationStopped: x,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = y,
                e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = y,
                e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(),
                    e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = y,
                e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
                    this.stopPropagation()
            }
        },
        pt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            pt.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this, i = e.relatedTarget, o = e.handleObj;
                    return i && (i === r || pt.contains(r, i)) || (e.type = o.origType,
                        n = o.handler.apply(this, arguments),
                        e.type = t),
                        n
                }
            }
        }),
    dt.submit || (pt.event.special.submit = {
        setup: function() {
            return pt.nodeName(this, "form") ? !1 : void pt.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target
                    , n = pt.nodeName(t, "input") || pt.nodeName(t, "button") ? pt.prop(t, "form") : void 0;
                n && !pt._data(n, "submit") && (pt.event.add(n, "submit._submit", function(e) {
                    e._submitBubble = !0
                }),
                    pt._data(n, "submit", !0))
            })
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble,
            this.parentNode && !e.isTrigger && pt.event.simulate("submit", this.parentNode, e))
        },
        teardown: function() {
            return pt.nodeName(this, "form") ? !1 : void pt.event.remove(this, "._submit")
        }
    }),
    dt.change || (pt.event.special.change = {
        setup: function() {
            return Yt.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (pt.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }),
                pt.event.add(this, "click._change", function(e) {
                    this._justChanged && !e.isTrigger && (this._justChanged = !1),
                        pt.event.simulate("change", this, e)
                })),
                !1) : void pt.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Yt.test(t.nodeName) && !pt._data(t, "change") && (pt.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || pt.event.simulate("change", this.parentNode, e)
                }),
                    pt._data(t, "change", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return pt.event.remove(this, "._change"),
                !Yt.test(this.nodeName)
        }
    }),
    dt.focusin || pt.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
                pt.event.simulate(t, e.target, pt.event.fix(e))
            }
            ;
        pt.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                    , i = pt._data(r, t);
                i || r.addEventListener(e, n, !0),
                    pt._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                    , i = pt._data(r, t) - 1;
                i ? pt._data(r, t, i) : (r.removeEventListener(e, n, !0),
                    pt._removeData(r, t))
            }
        }
    }),
        pt.fn.extend({
            on: function(e, t, n, r) {
                return w(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return w(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return r = e.handleObj,
                        pt(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                        this;
                if ("object" == typeof e) {
                    for (i in e)
                        this.off(i, t, e[i]);
                    return this
                }
                return t !== !1 && "function" != typeof t || (n = t,
                    t = void 0),
                n === !1 && (n = x),
                    this.each(function() {
                        pt.event.remove(this, e, n, t)
                    })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    pt.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? pt.event.trigger(e, t, n, !0) : void 0
            }
        });
    var Zt = / jQuery\d+="(?:null|\d+)"/g
        , en = new RegExp("<(?:" + zt + ")[\\s/>]","i")
        , tn = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
        , nn = /<script|<style|<link/i
        , rn = /checked\s*(?:[^=]|=\s*.checked.)/i
        , on = /^true\/(.*)/
        , an = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
        , sn = p(rt)
        , un = sn.appendChild(rt.createElement("div"));
    pt.extend({
        htmlPrefilter: function(e) {
            return e.replace(tn, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u = pt.contains(e.ownerDocument, e);
            if (dt.html5Clone || pt.isXMLDoc(e) || !en.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (un.innerHTML = e.outerHTML,
                    un.removeChild(o = un.firstChild)),
                    !(dt.noCloneEvent && dt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pt.isXMLDoc(e)))
                for (r = h(o),
                         s = h(e),
                         a = 0; null  != (i = s[a]); ++a)
                    r[a] && k(i, r[a]);
            if (t)
                if (n)
                    for (s = s || h(e),
                             r = r || h(o),
                             a = 0; null  != (i = s[a]); a++)
                        N(i, r[a]);
                else
                    N(e, o);
            return r = h(o, "script"),
            r.length > 0 && g(r, !u && h(e, "script")),
                r = s = i = null ,
                o
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = pt.expando, u = pt.cache, l = dt.attributes, c = pt.event.special; null  != (n = e[a]); a++)
                if ((t || Ht(n)) && (i = n[s],
                        o = i && u[i])) {
                    if (o.events)
                        for (r in o.events)
                            c[r] ? pt.event.remove(n, r) : pt.removeEvent(n, r, o.handle);
                    u[i] && (delete u[i],
                        l || "undefined" == typeof n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s),
                        nt.push(i))
                }
        }
    }),
        pt.fn.extend({
            domManip: S,
            detach: function(e) {
                return A(this, e, !0)
            },
            remove: function(e) {
                return A(this, e)
            },
            text: function(e) {
                return Pt(this, function(e) {
                    return void 0 === e ? pt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || rt).createTextNode(e))
                }, null , e, arguments.length)
            },
            append: function() {
                return S(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = T(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return S(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = T(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return S(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return S(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null  != (e = this[t]); t++) {
                    for (1 === e.nodeType && pt.cleanData(h(e, !1)); e.firstChild; )
                        e.removeChild(e.firstChild);
                    e.options && pt.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null  == e ? !1 : e,
                    t = null  == t ? e : t,
                    this.map(function() {
                        return pt.clone(this, e, t)
                    })
            },
            html: function(e) {
                return Pt(this, function(e) {
                    var t = this[0] || {}
                        , n = 0
                        , r = this.length;
                    if (void 0 === e)
                        return 1 === t.nodeType ? t.innerHTML.replace(Zt, "") : void 0;
                    if (!("string" != typeof e || nn.test(e) || !dt.htmlSerialize && en.test(e) || !dt.leadingWhitespace && $t.test(e) || Xt[(Wt.exec(e) || ["", ""])[1].toLowerCase()])) {
                        e = pt.htmlPrefilter(e);
                        try {
                            for (; r > n; n++)
                                t = this[n] || {},
                                1 === t.nodeType && (pt.cleanData(h(t, !1)),
                                    t.innerHTML = e);
                            t = 0
                        } catch (i) {}
                    }
                    t && this.empty().append(e)
                }, null , e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return S(this, arguments, function(t) {
                    var n = this.parentNode;
                    pt.inArray(this, e) < 0 && (pt.cleanData(h(this)),
                    n && n.replaceChild(t, this))
                }, e)
            }
        }),
        pt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            pt.fn[e] = function(e) {
                for (var n, r = 0, i = [], o = pt(e), a = o.length - 1; a >= r; r++)
                    n = r === a ? this : this.clone(!0),
                        pt(o[r])[t](n),
                        at.apply(i, n.get());
                return this.pushStack(i)
            }
        });
    var ln, cn = {
        HTML: "block",
        BODY: "block"
    }, dn = /^margin/, fn = new RegExp("^(" + Ft + ")(?!px)[a-z%]+$","i"), pn = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
                e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)
            e.style[o] = a[o];
        return i
    }
        , hn = rt.documentElement;
    !function() {
        function t() {
            var t, c, d = rt.documentElement;
            d.appendChild(u),
                l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                n = i = s = !1,
                r = a = !0,
            e.getComputedStyle && (c = e.getComputedStyle(l),
                n = "1%" !== (c || {}).top,
                s = "2px" === (c || {}).marginLeft,
                i = "4px" === (c || {
                        width: "4px"
                    }).width,
                l.style.marginRight = "50%",
                r = "4px" === (c || {
                        marginRight: "4px"
                    }).marginRight,
                t = l.appendChild(rt.createElement("div")),
                t.style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                t.style.marginRight = t.style.width = "0",
                l.style.width = "1px",
                a = !parseFloat((e.getComputedStyle(t) || {}).marginRight),
                l.removeChild(t)),
                l.style.display = "none",
                o = 0 === l.getClientRects().length,
            o && (l.style.display = "",
                l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                t = l.getElementsByTagName("td"),
                t[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                o = 0 === t[0].offsetHeight,
            o && (t[0].style.display = "",
                t[1].style.display = "none",
                o = 0 === t[0].offsetHeight)),
                d.removeChild(u)
        }
        var n, r, i, o, a, s, u = rt.createElement("div"), l = rt.createElement("div");
        l.style && (l.style.cssText = "float:left;opacity:.5",
            dt.opacity = "0.5" === l.style.opacity,
            dt.cssFloat = !!l.style.cssFloat,
            l.style.backgroundClip = "content-box",
            l.cloneNode(!0).style.backgroundClip = "",
            dt.clearCloneStyle = "content-box" === l.style.backgroundClip,
            u = rt.createElement("div"),
            u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
            l.innerHTML = "",
            u.appendChild(l),
            dt.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing,
            pt.extend(dt, {
                reliableHiddenOffsets: function() {
                    return null  == n && t(),
                        o
                },
                boxSizingReliable: function() {
                    return null  == n && t(),
                        i
                },
                pixelMarginRight: function() {
                    return null  == n && t(),
                        r
                },
                pixelPosition: function() {
                    return null  == n && t(),
                        n
                },
                reliableMarginRight: function() {
                    return null  == n && t(),
                        a
                },
                reliableMarginLeft: function() {
                    return null  == n && t(),
                        s
                }
            }))
    }();
    var gn, mn, vn = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (gn = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e),
                n.getComputedStyle(t)
        }
            ,
            mn = function(e, t, n) {
                var r, i, o, a, s = e.style;
                return n = n || gn(e),
                    a = n ? n.getPropertyValue(t) || n[t] : void 0,
                "" !== a && void 0 !== a || pt.contains(e.ownerDocument, e) || (a = pt.style(e, t)),
                n && !dt.pixelMarginRight() && fn.test(a) && dn.test(t) && (r = s.width,
                    i = s.minWidth,
                    o = s.maxWidth,
                    s.minWidth = s.maxWidth = s.width = a,
                    a = n.width,
                    s.width = r,
                    s.minWidth = i,
                    s.maxWidth = o),
                    void 0 === a ? a : a + ""
            }
    ) : hn.currentStyle && (gn = function(e) {
            return e.currentStyle
        }
            ,
            mn = function(e, t, n) {
                var r, i, o, a, s = e.style;
                return n = n || gn(e),
                    a = n ? n[t] : void 0,
                null  == a && s && s[t] && (a = s[t]),
                fn.test(a) && !vn.test(t) && (r = s.left,
                    i = e.runtimeStyle,
                    o = i && i.left,
                o && (i.left = e.currentStyle.left),
                    s.left = "fontSize" === t ? "1em" : a,
                    a = s.pixelLeft + "px",
                    s.left = r,
                o && (i.left = o)),
                    void 0 === a ? a : a + "" || "auto"
            }
    );
    var yn = /alpha\([^)]*\)/i
        , xn = /opacity\s*=\s*([^)]*)/i
        , bn = /^(none|table(?!-c[ea]).+)/
        , wn = new RegExp("^(" + Ft + ")(.*)$","i")
        , Tn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
        , Cn = {
        letterSpacing: "0",
        fontWeight: "400"
    }
        , En = ["Webkit", "O", "Moz", "ms"]
        , Nn = rt.createElement("div").style;
    pt.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = mn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": dt.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = pt.camelCase(t), u = e.style;
                if (t = pt.cssProps[s] || (pt.cssProps[s] = H(s) || s),
                        a = pt.cssHooks[t] || pt.cssHooks[s],
                    void 0 === n)
                    return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                if (o = typeof n,
                    "string" === o && (i = Mt.exec(n)) && i[1] && (n = f(e, t, i),
                        o = "number"),
                    null  != n && n === n && ("number" === o && (n += i && i[3] || (pt.cssNumber[s] ? "" : "px")),
                    dt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                        !(a && "set" in a && void 0 === (n = a.set(e, n, r)))))
                    try {
                        u[t] = n
                    } catch (l) {}
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = pt.camelCase(t);
            return t = pt.cssProps[s] || (pt.cssProps[s] = H(s) || s),
                a = pt.cssHooks[t] || pt.cssHooks[s],
            a && "get" in a && (o = a.get(e, !0, n)),
            void 0 === o && (o = mn(e, t, r)),
            "normal" === o && t in Cn && (o = Cn[t]),
                "" === n || n ? (i = parseFloat(o),
                    n === !0 || isFinite(i) ? i || 0 : o) : o
        }
    }),
        pt.each(["height", "width"], function(e, t) {
            pt.cssHooks[t] = {
                get: function(e, n, r) {
                    return n ? bn.test(pt.css(e, "display")) && 0 === e.offsetWidth ? pn(e, Tn, function() {
                        return M(e, t, r)
                    }) : M(e, t, r) : void 0
                },
                set: function(e, n, r) {
                    var i = r && gn(e);
                    return _(e, n, r ? F(e, t, r, dt.boxSizing && "border-box" === pt.css(e, "boxSizing", !1, i), i) : 0)
                }
            }
        }),
    dt.opacity || (pt.cssHooks.opacity = {
        get: function(e, t) {
            return xn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
                , r = e.currentStyle
                , i = pt.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
                , o = r && r.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === pt.trim(o.replace(yn, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === t || r && !r.filter) || (n.filter = yn.test(o) ? o.replace(yn, i) : o + " " + i)
        }
    }),
        pt.cssHooks.marginRight = L(dt.reliableMarginRight, function(e, t) {
            return t ? pn(e, {
                display: "inline-block"
            }, mn, [e, "marginRight"]) : void 0
        }),
        pt.cssHooks.marginLeft = L(dt.reliableMarginLeft, function(e, t) {
            return t ? (parseFloat(mn(e, "marginLeft")) || (pt.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - pn(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            }) : 0)) + "px" : void 0
        }),
        pt.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            pt.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)
                        i[e + Ot[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            },
            dn.test(e) || (pt.cssHooks[e + t].set = _)
        }),
        pt.fn.extend({
            css: function(e, t) {
                return Pt(this, function(e, t, n) {
                    var r, i, o = {}, a = 0;
                    if (pt.isArray(t)) {
                        for (r = gn(e),
                                 i = t.length; i > a; a++)
                            o[t[a]] = pt.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? pt.style(e, t, n) : pt.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return q(this, !0)
            },
            hide: function() {
                return q(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Rt(this) ? pt(this).show() : pt(this).hide()
                })
            }
        }),
        pt.Tween = O,
        O.prototype = {
            constructor: O,
            init: function(e, t, n, r, i, o) {
                this.elem = e,
                    this.prop = n,
                    this.easing = i || pt.easing._default,
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = r,
                    this.unit = o || (pt.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = O.propHooks[this.prop];
                return e && e.get ? e.get(this) : O.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = O.propHooks[this.prop];
                return this.pos = t = this.options.duration ? pt.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
                    this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : O.propHooks._default.set(this),
                    this
            }
        },
        O.prototype.init.prototype = O.prototype,
        O.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null  != e.elem[e.prop] && null  == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pt.css(e.elem, e.prop, ""),
                        t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    pt.fx.step[e.prop] ? pt.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null  == e.elem.style[pt.cssProps[e.prop]] && !pt.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pt.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        },
        O.propHooks.scrollTop = O.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        pt.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        pt.fx = O.prototype.init,
        pt.fx.step = {};
    var kn, Sn, An = /^(?:toggle|show|hide)$/, Dn = /queueHooks$/;
    pt.Animation = pt.extend($, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return f(n.elem, e, Mt.exec(t), n),
                    n
            }
            ]
        },
        tweener: function(e, t) {
            pt.isFunction(e) ? (t = e,
                e = ["*"]) : e = e.match(Dt);
            for (var n, r = 0, i = e.length; i > r; r++)
                n = e[r],
                    $.tweeners[n] = $.tweeners[n] || [],
                    $.tweeners[n].unshift(t)
        },
        prefilters: [W],
        prefilter: function(e, t) {
            t ? $.prefilters.unshift(e) : $.prefilters.push(e)
        }
    }),
        pt.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? pt.extend({}, e) : {
                complete: n || !n && t || pt.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !pt.isFunction(t) && t
            };
            return r.duration = pt.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in pt.fx.speeds ? pt.fx.speeds[r.duration] : pt.fx.speeds._default,
            null  != r.queue && r.queue !== !0 || (r.queue = "fx"),
                r.old = r.complete,
                r.complete = function() {
                    pt.isFunction(r.old) && r.old.call(this),
                    r.queue && pt.dequeue(this, r.queue)
                }
                ,
                r
        }
        ,
        pt.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(Rt).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = pt.isEmptyObject(e)
                    , o = pt.speed(t, n, r)
                    , a = function() {
                        var t = $(this, pt.extend({}, e), o);
                        (i || pt._data(this, "finish")) && t.stop(!0)
                    }
                    ;
                return a.finish = a,
                    i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                        var t = e.stop;
                        delete e.stop,
                            t(n)
                    }
                    ;
                return "string" != typeof e && (n = t,
                    t = e,
                    e = void 0),
                t && e !== !1 && this.queue(e || "fx", []),
                    this.each(function() {
                        var t = !0
                            , i = null  != e && e + "queueHooks"
                            , o = pt.timers
                            , a = pt._data(this);
                        if (i)
                            a[i] && a[i].stop && r(a[i]);
                        else
                            for (i in a)
                                a[i] && a[i].stop && Dn.test(i) && r(a[i]);
                        for (i = o.length; i--; )
                            o[i].elem !== this || null  != e && o[i].queue !== e || (o[i].anim.stop(n),
                                t = !1,
                                o.splice(i, 1));
                        !t && n || pt.dequeue(this, e)
                    })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"),
                    this.each(function() {
                        var t, n = pt._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = pt.timers, a = r ? r.length : 0;
                        for (n.finish = !0,
                                 pt.queue(this, e, []),
                             i && i.stop && i.stop.call(this, !0),
                                 t = o.length; t--; )
                            o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                                o.splice(t, 1));
                        for (t = 0; a > t; t++)
                            r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
            }
        }),
        pt.each(["toggle", "show", "hide"], function(e, t) {
            var n = pt.fn[t];
            pt.fn[t] = function(e, r, i) {
                return null  == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, r, i)
            }
        }),
        pt.each({
            slideDown: P("show"),
            slideUp: P("hide"),
            slideToggle: P("toggle"),
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
            pt.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }),
        pt.timers = [],
        pt.fx.tick = function() {
            var e, t = pt.timers, n = 0;
            for (kn = pt.now(); n < t.length; n++)
                e = t[n],
                e() || t[n] !== e || t.splice(n--, 1);
            t.length || pt.fx.stop(),
                kn = void 0
        }
        ,
        pt.fx.timer = function(e) {
            pt.timers.push(e),
                e() ? pt.fx.start() : pt.timers.pop()
        }
        ,
        pt.fx.interval = 13,
        pt.fx.start = function() {
            Sn || (Sn = e.setInterval(pt.fx.tick, pt.fx.interval))
        }
        ,
        pt.fx.stop = function() {
            e.clearInterval(Sn),
                Sn = null
        }
        ,
        pt.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        pt.fn.delay = function(t, n) {
            return t = pt.fx ? pt.fx.speeds[t] || t : t,
                n = n || "fx",
                this.queue(n, function(n, r) {
                    var i = e.setTimeout(n, t);
                    r.stop = function() {
                        e.clearTimeout(i)
                    }
                })
        }
        ,
        function() {
            var e, t = rt.createElement("input"), n = rt.createElement("div"), r = rt.createElement("select"), i = r.appendChild(rt.createElement("option"));
            n = rt.createElement("div"),
                n.setAttribute("className", "t"),
                n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                e = n.getElementsByTagName("a")[0],
                t.setAttribute("type", "checkbox"),
                n.appendChild(t),
                e = n.getElementsByTagName("a")[0],
                e.style.cssText = "top:1px",
                dt.getSetAttribute = "t" !== n.className,
                dt.style = /top/.test(e.getAttribute("style")),
                dt.hrefNormalized = "/a" === e.getAttribute("href"),
                dt.checkOn = !!t.value,
                dt.optSelected = i.selected,
                dt.enctype = !!rt.createElement("form").enctype,
                r.disabled = !0,
                dt.optDisabled = !i.disabled,
                t = rt.createElement("input"),
                t.setAttribute("value", ""),
                dt.input = "" === t.getAttribute("value"),
                t.value = "t",
                t.setAttribute("type", "radio"),
                dt.radioValue = "t" === t.value
        }();
    var jn = /\r/g
        , Ln = /[\x20\t\r\n\f]+/g;
    pt.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = pt.isFunction(e),
                this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, pt(this).val()) : e,
                        null  == i ? i = "" : "number" == typeof i ? i += "" : pt.isArray(i) && (i = pt.map(i, function(e) {
                            return null  == e ? "" : e + ""
                        })),
                        t = pt.valHooks[this.type] || pt.valHooks[this.nodeName.toLowerCase()],
                    t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                })) : i ? (t = pt.valHooks[i.type] || pt.valHooks[i.nodeName.toLowerCase()],
                t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value,
                    "string" == typeof n ? n.replace(jn, "") : null  == n ? "" : n)) : void 0
        }
    }),
        pt.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = pt.find.attr(e, "value");
                        return null  != t ? t : pt.trim(pt.text(e)).replace(Ln, " ")
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null  : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
                            if (n = r[u],
                                    !(!n.selected && u !== i || (dt.optDisabled ? n.disabled : null  !== n.getAttribute("disabled")) || n.parentNode.disabled && pt.nodeName(n.parentNode, "optgroup"))) {
                                if (t = pt(n).val(),
                                        o)
                                    return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, r, i = e.options, o = pt.makeArray(t), a = i.length; a--; )
                            if (r = i[a],
                                pt.inArray(pt.valHooks.option.get(r), o) > -1)
                                try {
                                    r.selected = n = !0
                                } catch (s) {
                                    r.scrollHeight
                                }
                            else
                                r.selected = !1;
                        return n || (e.selectedIndex = -1),
                            i
                    }
                }
            }
        }),
        pt.each(["radio", "checkbox"], function() {
            pt.valHooks[this] = {
                set: function(e, t) {
                    return pt.isArray(t) ? e.checked = pt.inArray(pt(e).val(), t) > -1 : void 0
                }
            },
            dt.checkOn || (pt.valHooks[this].get = function(e) {
                    return null  === e.getAttribute("value") ? "on" : e.value
                }
            )
        });
    var Hn, qn, _n = pt.expr.attrHandle, Fn = /^(?:checked|selected)$/i, Mn = dt.getSetAttribute, On = dt.input;
    pt.fn.extend({
        attr: function(e, t) {
            return Pt(this, pt.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                pt.removeAttr(this, e)
            })
        }
    }),
        pt.extend({
            attr: function(e, t, n) {
                var r, i, o = e.nodeType;
                return 3 !== o && 8 !== o && 2 !== o ? "undefined" == typeof e.getAttribute ? pt.prop(e, t, n) : (1 === o && pt.isXMLDoc(e) || (t = t.toLowerCase(),
                    i = pt.attrHooks[t] || (pt.expr.match.bool.test(t) ? qn : Hn)),
                    void 0 !== n ? null  === n ? void pt.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                        n) : i && "get" in i && null  !== (r = i.get(e, t)) ? r : (r = pt.find.attr(e, t),
                        null  == r ? void 0 : r)) : void 0
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!dt.radioValue && "radio" === t && pt.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                                t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r, i = 0, o = t && t.match(Dt);
                if (o && 1 === e.nodeType)
                    for (; n = o[i++]; )
                        r = pt.propFix[n] || n,
                            pt.expr.match.bool.test(n) ? On && Mn || !Fn.test(n) ? e[r] = !1 : e[pt.camelCase("default-" + n)] = e[r] = !1 : pt.attr(e, n, ""),
                            e.removeAttribute(Mn ? n : r)
            }
        }),
        qn = {
            set: function(e, t, n) {
                return t === !1 ? pt.removeAttr(e, n) : On && Mn || !Fn.test(n) ? e.setAttribute(!Mn && pt.propFix[n] || n, n) : e[pt.camelCase("default-" + n)] = e[n] = !0,
                    n
            }
        },
        pt.each(pt.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = _n[t] || pt.find.attr;
            _n[t] = On && Mn || !Fn.test(t) ? function(e, t, r) {
                var i, o;
                return r || (o = _n[t],
                    _n[t] = i,
                    i = null  != n(e, t, r) ? t.toLowerCase() : null ,
                    _n[t] = o),
                    i
            }
                : function(e, t, n) {
                return n ? void 0 : e[pt.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }),
    On && Mn || (pt.attrHooks.value = {
        set: function(e, t, n) {
            return pt.nodeName(e, "input") ? void (e.defaultValue = t) : Hn && Hn.set(e, t, n)
        }
    }),
    Mn || (Hn = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)),
                r.value = t += "",
                "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    },
        _n.id = _n.name = _n.coords = function(e, t, n) {
            var r;
            return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
        }
        ,
        pt.valHooks.button = {
            get: function(e, t) {
                var n = e.getAttributeNode(t);
                return n && n.specified ? n.value : void 0
            },
            set: Hn.set
        },
        pt.attrHooks.contenteditable = {
            set: function(e, t, n) {
                Hn.set(e, "" === t ? !1 : t, n)
            }
        },
        pt.each(["width", "height"], function(e, t) {
            pt.attrHooks[t] = {
                set: function(e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"),
                        n) : void 0
                }
            }
        })),
    dt.style || (pt.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Rn = /^(?:input|select|textarea|button|object)$/i
        , Pn = /^(?:a|area)$/i;
    pt.fn.extend({
        prop: function(e, t) {
            return Pt(this, pt.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = pt.propFix[e] || e,
                this.each(function() {
                    try {
                        this[e] = void 0,
                            delete this[e]
                    } catch (t) {}
                })
        }
    }),
        pt.extend({
            prop: function(e, t, n) {
                var r, i, o = e.nodeType;
                return 3 !== o && 8 !== o && 2 !== o ? (1 === o && pt.isXMLDoc(e) || (t = pt.propFix[t] || t,
                    i = pt.propHooks[t]),
                    void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null  !== (r = i.get(e, t)) ? r : e[t]) : void 0
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = pt.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Rn.test(e.nodeName) || Pn.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }),
    dt.hrefNormalized || pt.each(["href", "src"], function(e, t) {
        pt.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    dt.optSelected || (pt.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
                null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
        pt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            pt.propFix[this.toLowerCase()] = this
        }),
    dt.enctype || (pt.propFix.enctype = "encoding");
    var Bn = /[\t\r\n\f]/g;
    pt.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (pt.isFunction(e))
                return this.each(function(t) {
                    pt(this).addClass(e.call(this, t, z(this)))
                });
            if ("string" == typeof e && e)
                for (t = e.match(Dt) || []; n = this[u++]; )
                    if (i = z(n),
                            r = 1 === n.nodeType && (" " + i + " ").replace(Bn, " ")) {
                        for (a = 0; o = t[a++]; )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        s = pt.trim(r),
                        i !== s && pt.attr(n, "class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (pt.isFunction(e))
                return this.each(function(t) {
                    pt(this).removeClass(e.call(this, t, z(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Dt) || []; n = this[u++]; )
                    if (i = z(n),
                            r = 1 === n.nodeType && (" " + i + " ").replace(Bn, " ")) {
                        for (a = 0; o = t[a++]; )
                            for (; r.indexOf(" " + o + " ") > -1; )
                                r = r.replace(" " + o + " ", " ");
                        s = pt.trim(r),
                        i !== s && pt.attr(n, "class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(pt.isFunction(e) ? function(n) {
                    pt(this).toggleClass(e.call(this, n, z(this), t), t)
                }
                    : function() {
                    var t, r, i, o;
                    if ("string" === n)
                        for (r = 0,
                                 i = pt(this),
                                 o = e.match(Dt) || []; t = o[r++]; )
                            i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else
                        void 0 !== e && "boolean" !== n || (t = z(this),
                        t && pt._data(this, "__className__", t),
                            pt.attr(this, "class", t || e === !1 ? "" : pt._data(this, "__className__") || ""))
                }
            )
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && (" " + z(n) + " ").replace(Bn, " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    }),
        pt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            pt.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null , e, n) : this.trigger(t)
            }
        }),
        pt.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        });
    var Wn = e.location
        , In = pt.now()
        , $n = /\?/
        , zn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    pt.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse)
            return e.JSON.parse(t + "");
        var n, r = null , i = pt.trim(t + "");
        return i && !pt.trim(i.replace(zn, function(e, t, i, o) {
            return n && t && (r = 0),
                0 === r ? e : (n = i || t,
                    r += !o - !i,
                    "")
        })) ? Function("return " + i)() : pt.error("Invalid JSON: " + t)
    }
        ,
        pt.parseXML = function(t) {
            var n, r;
            if (!t || "string" != typeof t)
                return null ;
            try {
                e.DOMParser ? (r = new e.DOMParser,
                    n = r.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"),
                    n.async = "false",
                    n.loadXML(t))
            } catch (i) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pt.error("Invalid XML: " + t),
                n
        }
    ;
    var Xn = /#.*$/
        , Un = /([?&])_=[^&]*/
        , Vn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
        , Yn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
        , Jn = /^(?:GET|HEAD)$/
        , Gn = /^\/\//
        , Qn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
        , Kn = {}
        , Zn = {}
        , er = "*/".concat("*")
        , tr = Wn.href
        , nr = Qn.exec(tr.toLowerCase()) || [];
    pt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: tr,
            type: "GET",
            isLocal: Yn.test(nr[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": er,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": pt.parseJSON,
                "text xml": pt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? V(V(e, pt.ajaxSettings), t) : V(pt.ajaxSettings, e)
        },
        ajaxPrefilter: X(Kn),
        ajaxTransport: X(Zn),
        ajax: function(t, n) {
            function r(t, n, r, i) {
                var o, d, y, x, w, C = n;
                2 !== b && (b = 2,
                u && e.clearTimeout(u),
                    c = void 0,
                    s = i || "",
                    T.readyState = t > 0 ? 4 : 0,
                    o = t >= 200 && 300 > t || 304 === t,
                r && (x = Y(f, T, r)),
                    x = J(f, x, T, o),
                    o ? (f.ifModified && (w = T.getResponseHeader("Last-Modified"),
                    w && (pt.lastModified[a] = w),
                        w = T.getResponseHeader("etag"),
                    w && (pt.etag[a] = w)),
                        204 === t || "HEAD" === f.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state,
                            d = x.data,
                            y = x.error,
                            o = !y)) : (y = C,
                    !t && C || (C = "error",
                    0 > t && (t = 0))),
                    T.status = t,
                    T.statusText = (n || C) + "",
                    o ? g.resolveWith(p, [d, C, T]) : g.rejectWith(p, [T, C, y]),
                    T.statusCode(v),
                    v = void 0,
                l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [T, f, o ? d : y]),
                    m.fireWith(p, [T, C]),
                l && (h.trigger("ajaxComplete", [T, f]),
                --pt.active || pt.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t,
                t = void 0),
                n = n || {};
            var i, o, a, s, u, l, c, d, f = pt.ajaxSetup({}, n), p = f.context || f, h = f.context && (p.nodeType || p.jquery) ? pt(p) : pt.event, g = pt.Deferred(), m = pt.Callbacks("once memory"), v = f.statusCode || {}, y = {}, x = {}, b = 0, w = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === b) {
                        if (!d)
                            for (d = {}; t = Vn.exec(s); )
                                d[t[1].toLowerCase()] = t[2];
                        t = d[e.toLowerCase()]
                    }
                    return null  == t ? null  : t
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? s : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return b || (e = x[n] = x[n] || e,
                        y[e] = t),
                        this
                },
                overrideMimeType: function(e) {
                    return b || (f.mimeType = e),
                        this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > b)
                            for (t in e)
                                v[t] = [v[t], e[t]];
                        else
                            T.always(e[T.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || w;
                    return c && c.abort(t),
                        r(0, t),
                        this
                }
            };
            if (g.promise(T).complete = m.add,
                    T.success = T.done,
                    T.error = T.fail,
                    f.url = ((t || f.url || tr) + "").replace(Xn, "").replace(Gn, nr[1] + "//"),
                    f.type = n.method || n.type || f.method || f.type,
                    f.dataTypes = pt.trim(f.dataType || "*").toLowerCase().match(Dt) || [""],
                null  == f.crossDomain && (i = Qn.exec(f.url.toLowerCase()),
                    f.crossDomain = !(!i || i[1] === nr[1] && i[2] === nr[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (nr[3] || ("http:" === nr[1] ? "80" : "443")))),
                f.data && f.processData && "string" != typeof f.data && (f.data = pt.param(f.data, f.traditional)),
                    U(Kn, f, n, T),
                2 === b)
                return T;
            l = pt.event && f.global,
            l && 0 === pt.active++ && pt.event.trigger("ajaxStart"),
                f.type = f.type.toUpperCase(),
                f.hasContent = !Jn.test(f.type),
                a = f.url,
            f.hasContent || (f.data && (a = f.url += ($n.test(a) ? "&" : "?") + f.data,
                delete f.data),
            f.cache === !1 && (f.url = Un.test(a) ? a.replace(Un, "$1_=" + In++) : a + ($n.test(a) ? "&" : "?") + "_=" + In++)),
            f.ifModified && (pt.lastModified[a] && T.setRequestHeader("If-Modified-Since", pt.lastModified[a]),
            pt.etag[a] && T.setRequestHeader("If-None-Match", pt.etag[a])),
            (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", f.contentType),
                T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + er + "; q=0.01" : "") : f.accepts["*"]);
            for (o in f.headers)
                T.setRequestHeader(o, f.headers[o]);
            if (f.beforeSend && (f.beforeSend.call(p, T, f) === !1 || 2 === b))
                return T.abort();
            w = "abort";
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            })
                T[o](f[o]);
            if (c = U(Zn, f, n, T)) {
                if (T.readyState = 1,
                    l && h.trigger("ajaxSend", [T, f]),
                    2 === b)
                    return T;
                f.async && f.timeout > 0 && (u = e.setTimeout(function() {
                    T.abort("timeout")
                }, f.timeout));
                try {
                    b = 1,
                        c.send(y, r)
                } catch (C) {
                    if (!(2 > b))
                        throw C;
                    r(-1, C)
                }
            } else
                r(-1, "No Transport");
            return T
        },
        getJSON: function(e, t, n) {
            return pt.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return pt.get(e, void 0, t, "script")
        }
    }),
        pt.each(["get", "post"], function(e, t) {
            pt[t] = function(e, n, r, i) {
                return pt.isFunction(n) && (i = i || r,
                    r = n,
                    n = void 0),
                    pt.ajax(pt.extend({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    }, pt.isPlainObject(e) && e))
            }
        }),
        pt._evalUrl = function(e) {
            return pt.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        }
        ,
        pt.fn.extend({
            wrapAll: function(e) {
                if (pt.isFunction(e))
                    return this.each(function(t) {
                        pt(this).wrapAll(e.call(this, t))
                    });
                if (this[0]) {
                    var t = pt(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]),
                        t.map(function() {
                            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                                e = e.firstChild;
                            return e
                        }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return this.each(pt.isFunction(e) ? function(t) {
                        pt(this).wrapInner(e.call(this, t))
                    }
                        : function() {
                        var t = pt(this)
                            , n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    }
                )
            },
            wrap: function(e) {
                var t = pt.isFunction(e);
                return this.each(function(n) {
                    pt(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    pt.nodeName(this, "body") || pt(this).replaceWith(this.childNodes)
                }).end()
            }
        }),
        pt.expr.filters.hidden = function(e) {
            return dt.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : Q(e)
        }
        ,
        pt.expr.filters.visible = function(e) {
            return !pt.expr.filters.hidden(e)
        }
    ;
    var rr = /%20/g
        , ir = /\[\]$/
        , or = /\r?\n/g
        , ar = /^(?:submit|button|image|reset|file)$/i
        , sr = /^(?:input|select|textarea|keygen)/i;
    pt.param = function(e, t) {
        var n, r = [], i = function(e, t) {
                t = pt.isFunction(t) ? t() : null  == t ? "" : t,
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            }
            ;
        if (void 0 === t && (t = pt.ajaxSettings && pt.ajaxSettings.traditional),
            pt.isArray(e) || e.jquery && !pt.isPlainObject(e))
            pt.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                K(n, e[n], t, i);
        return r.join("&").replace(rr, "+")
    }
        ,
        pt.fn.extend({
            serialize: function() {
                return pt.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = pt.prop(this, "elements");
                    return e ? pt.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !pt(this).is(":disabled") && sr.test(this.nodeName) && !ar.test(e) && (this.checked || !Bt.test(e))
                }).map(function(e, t) {
                    var n = pt(this).val();
                    return null  == n ? null  : pt.isArray(n) ? pt.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(or, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(or, "\r\n")
                    }
                }).get()
            }
        }),
        pt.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
            return this.isLocal ? et() : rt.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || et()
        }
            : Z;
    var ur = 0
        , lr = {}
        , cr = pt.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in lr)
            lr[e](void 0, !0)
    }),
        dt.cors = !!cr && "withCredentials" in cr,
        cr = dt.ajax = !!cr,
    cr && pt.ajaxTransport(function(t) {
        if (!t.crossDomain || dt.cors) {
            var n;
            return {
                send: function(r, i) {
                    var o, a = t.xhr(), s = ++ur;
                    if (a.open(t.type, t.url, t.async, t.username, t.password),
                            t.xhrFields)
                        for (o in t.xhrFields)
                            a[o] = t.xhrFields[o];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                    t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (o in r)
                        void 0 !== r[o] && a.setRequestHeader(o, r[o] + "");
                    a.send(t.hasContent && t.data || null ),
                        n = function(e, r) {
                            var o, u, l;
                            if (n && (r || 4 === a.readyState))
                                if (delete lr[s],
                                        n = void 0,
                                        a.onreadystatechange = pt.noop,
                                        r)
                                    4 !== a.readyState && a.abort();
                                else {
                                    l = {},
                                        o = a.status,
                                    "string" == typeof a.responseText && (l.text = a.responseText);
                                    try {
                                        u = a.statusText
                                    } catch (c) {
                                        u = ""
                                    }
                                    o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = l.text ? 200 : 404
                                }
                            l && i(o, u, l, a.getAllResponseHeaders())
                        }
                        ,
                        t.async ? 4 === a.readyState ? e.setTimeout(n) : a.onreadystatechange = lr[s] = n : n()
                },
                abort: function() {
                    n && n(void 0, !0)
                }
            }
        }
    }),
        pt.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return pt.globalEval(e),
                        e
                }
            }
        }),
        pt.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET",
                e.global = !1)
        }),
        pt.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n = rt.head || pt("head")[0] || rt.documentElement;
                return {
                    send: function(r, i) {
                        t = rt.createElement("script"),
                            t.async = !0,
                        e.scriptCharset && (t.charset = e.scriptCharset),
                            t.src = e.url,
                            t.onload = t.onreadystatechange = function(e, n) {
                                (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null ,
                                t.parentNode && t.parentNode.removeChild(t),
                                    t = null ,
                                n || i(200, "success"))
                            }
                            ,
                            n.insertBefore(t, n.firstChild)
                    },
                    abort: function() {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        });
    var dr = []
        , fr = /(=)\?(?=&|$)|\?\?/;
    pt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = dr.pop() || pt.expando + "_" + In++;
            return this[e] = !0,
                e
        }
    }),
        pt.ajaxPrefilter("json jsonp", function(t, n, r) {
            var i, o, a, s = t.jsonp !== !1 && (fr.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && fr.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = pt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                s ? t[s] = t[s].replace(fr, "$1" + i) : t.jsonp !== !1 && (t.url += ($n.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                t.converters["script json"] = function() {
                    return a || pt.error(i + " was not called"),
                        a[0]
                }
                ,
                t.dataTypes[0] = "json",
                o = e[i],
                e[i] = function() {
                    a = arguments
                }
                ,
                r.always(function() {
                    void 0 === o ? pt(e).removeProp(i) : e[i] = o,
                    t[i] && (t.jsonpCallback = n.jsonpCallback,
                        dr.push(i)),
                    a && pt.isFunction(o) && o(a[0]),
                        a = o = void 0
                }),
                "script") : void 0
        }),
        pt.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e)
                return null ;
            "boolean" == typeof t && (n = t,
                t = !1),
                t = t || rt;
            var r = Tt.exec(e)
                , i = !n && [];
            return r ? [t.createElement(r[1])] : (r = v([e], t, i),
            i && i.length && pt(i).remove(),
                pt.merge([], r.childNodes))
        }
    ;
    var pr = pt.fn.load;
    pt.fn.load = function(e, t, n) {
        if ("string" != typeof e && pr)
            return pr.apply(this, arguments);
        var r, i, o, a = this, s = e.indexOf(" ");
        return s > -1 && (r = pt.trim(e.slice(s, e.length)),
            e = e.slice(0, s)),
            pt.isFunction(t) ? (n = t,
                t = void 0) : t && "object" == typeof t && (i = "POST"),
        a.length > 0 && pt.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
                a.html(r ? pt("<div>").append(pt.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
                a.each(function() {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }
        ),
            this
    }
        ,
        pt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            pt.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        pt.expr.filters.animated = function(e) {
            return pt.grep(pt.timers, function(t) {
                return e === t.elem
            }).length
        }
        ,
        pt.offset = {
            setOffset: function(e, t, n) {
                var r, i, o, a, s, u, l, c = pt.css(e, "position"), d = pt(e), f = {};
                "static" === c && (e.style.position = "relative"),
                    s = d.offset(),
                    o = pt.css(e, "top"),
                    u = pt.css(e, "left"),
                    l = ("absolute" === c || "fixed" === c) && pt.inArray("auto", [o, u]) > -1,
                    l ? (r = d.position(),
                        a = r.top,
                        i = r.left) : (a = parseFloat(o) || 0,
                        i = parseFloat(u) || 0),
                pt.isFunction(t) && (t = t.call(e, n, pt.extend({}, s))),
                null  != t.top && (f.top = t.top - s.top + a),
                null  != t.left && (f.left = t.left - s.left + i),
                    "using" in t ? t.using.call(e, f) : d.css(f)
            }
        },
        pt.fn.extend({
            offset: function(e) {
                if (arguments.length)
                    return void 0 === e ? this : this.each(function(t) {
                        pt.offset.setOffset(this, e, t)
                    });
                var t, n, r = {
                    top: 0,
                    left: 0
                }, i = this[0], o = i && i.ownerDocument;
                return o ? (t = o.documentElement,
                    pt.contains(t, i) ? ("undefined" != typeof i.getBoundingClientRect && (r = i.getBoundingClientRect()),
                        n = tt(o),
                    {
                        top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                        left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                    }) : r) : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                        top: 0,
                        left: 0
                    }, r = this[0];
                    return "fixed" === pt.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(),
                        t = this.offset(),
                    pt.nodeName(e[0], "html") || (n = e.offset()),
                        n.top += pt.css(e[0], "borderTopWidth", !0),
                        n.left += pt.css(e[0], "borderLeftWidth", !0)),
                    {
                        top: t.top - n.top - pt.css(r, "marginTop", !0),
                        left: t.left - n.left - pt.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && !pt.nodeName(e, "html") && "static" === pt.css(e, "position"); )
                        e = e.offsetParent;
                    return e || hn
                })
            }
        }),
        pt.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = /Y/.test(t);
            pt.fn[e] = function(r) {
                return Pt(this, function(e, r, i) {
                    var o = tt(e);
                    return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void (o ? o.scrollTo(n ? pt(o).scrollLeft() : i, n ? i : pt(o).scrollTop()) : e[r] = i)
                }, e, r, arguments.length, null )
            }
        }),
        pt.each(["top", "left"], function(e, t) {
            pt.cssHooks[t] = L(dt.pixelPosition, function(e, n) {
                return n ? (n = mn(e, t),
                    fn.test(n) ? pt(e).position()[t] + "px" : n) : void 0
            })
        }),
        pt.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            pt.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, r) {
                pt.fn[r] = function(r, i) {
                    var o = arguments.length && (n || "boolean" != typeof r)
                        , a = n || (r === !0 || i === !0 ? "margin" : "border");
                    return Pt(this, function(t, n, r) {
                        var i;
                        return pt.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                            Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? pt.css(t, n, a) : pt.style(t, n, r, a)
                    }, t, o ? r : void 0, o, null )
                }
            })
        }),
        pt.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null , t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null , t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }),
        pt.fn.size = function() {
            return this.length
        }
        ,
        pt.fn.andSelf = pt.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return pt
    });
    var hr = e.jQuery
        , gr = e.$;
    return pt.noConflict = function(t) {
        return e.$ === pt && (e.$ = gr),
        t && e.jQuery === pt && (e.jQuery = hr),
            pt
    }
        ,
    t || (e.jQuery = e.$ = pt),
        pt
});
;"object" != typeof JSON && (JSON = {}),
    function() {
        "use strict";
        function f(t) {
            return 10 > t ? "0" + t : t
        }
        function this_value() {
            return this.valueOf()
        }
        function quote(t) {
            return rx_escapable.lastIndex = 0,
                rx_escapable.test(t) ? '"' + t.replace(rx_escapable, function(t) {
                    var e = meta[t];
                    return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + t + '"'
        }
        function str(t, e) {
            var r, n, o, u, f, a = gap, i = e[t];
            switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(t)),
            "function" == typeof rep && (i = rep.call(e, t, i)),
                typeof i) {
                case "string":
                    return quote(i);
                case "number":
                    return isFinite(i) ? String(i) : "null";
                case "boolean":
                case "null":
                    return String(i);
                case "object":
                    if (!i)
                        return "null";
                    if (gap += indent,
                            f = [],
                        "[object Array]" === Object.prototype.toString.apply(i)) {
                        for (u = i.length,
                                 r = 0; u > r; r += 1)
                            f[r] = str(r, i) || "null";
                        return o = 0 === f.length ? "[]" : gap ? "[\n" + gap + f.join(",\n" + gap) + "\n" + a + "]" : "[" + f.join(",") + "]",
                            gap = a,
                            o
                    }
                    if (rep && "object" == typeof rep)
                        for (u = rep.length,
                                 r = 0; u > r; r += 1)
                            "string" == typeof rep[r] && (n = rep[r],
                                o = str(n, i),
                            o && f.push(quote(n) + (gap ? ": " : ":") + o));
                    else
                        for (n in i)
                            Object.prototype.hasOwnProperty.call(i, n) && (o = str(n, i),
                            o && f.push(quote(n) + (gap ? ": " : ":") + o));
                    return o = 0 === f.length ? "{}" : gap ? "{\n" + gap + f.join(",\n" + gap) + "\n" + a + "}" : "{" + f.join(",") + "}",
                        gap = a,
                        o
            }
        }
        var rx_one = /^[\],:{}\s]*$/
            , rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g
            , rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g
            , rx_four = /(?:^|:|,)(?:\s*\[)+/g
            , rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g
            , rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }
            ,
            Boolean.prototype.toJSON = this_value,
            Number.prototype.toJSON = this_value,
            String.prototype.toJSON = this_value);
        var gap, indent, meta, rep;
        "function" != typeof JSON.stringify && (meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
                JSON.stringify = function(t, e, r) {
                    var n;
                    if (gap = "",
                            indent = "",
                        "number" == typeof r)
                        for (n = 0; r > n; n += 1)
                            indent += " ";
                    else
                        "string" == typeof r && (indent = r);
                    if (rep = e,
                        e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length))
                        throw new Error("JSON.stringify");
                    return str("", {
                        "": t
                    })
                }
        ),
        "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
                function walk(t, e) {
                    var r, n, o = t[e];
                    if (o && "object" == typeof o)
                        for (r in o)
                            Object.prototype.hasOwnProperty.call(o, r) && (n = walk(o, r),
                                void 0 !== n ? o[r] = n : delete o[r]);
                    return reviver.call(t, e, o)
                }
                var j;
                if (text = String(text),
                        rx_dangerous.lastIndex = 0,
                    rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function(t) {
                        return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                    })),
                        rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, "")))
                    return j = eval("(" + text + ")"),
                        "function" == typeof reviver ? walk({
                            "": j
                        }, "") : j;
                throw new SyntaxError("JSON.parse")
            }
        )
    }();
;!function() {
    function n(n, t) {
        var o = new RegExp("(^|&|\\?|#)" + String(t).replace(new RegExp("([.*+?^=!:${}()|[\\]/\\\\])","g"), "\\$1") + "=([^&#]*)(&|$|#)","")
            , e = n.match(o);
        return e ? e[2] : null
    }
    function t(t) {
        var o, e = "";
        return (t = t || "") ? (r ? (e = n(t, "from"),
            e = e || "",
            o = e.split("_"),
            e = o[1] ? o[1] : e) : e = n(t, "channel"),
            /^\d{7}[a-zA-Z]$/.test(e) ? e : "") : e
    }
    function o() {}
    {
        var e = 1
            , i = 11
            , a = function(n) {
            var t = 4;
            return /iPhone/.test(n) ? t = 6 : /iPad/.test(n) ? t = 5 : /Android/.test(n) && (t = 7),
                t
        }(navigator.userAgent)
            , r = !!/miti/i.test(window.navigator.userAgent);
        (new Date).getTime()
    }
    if (o.prototype = {
            logConf: {},
            init: function(n, t) {
                var o = this;
                n && (setTimeout(function() {
                    o.autoPv(n)
                }, 10),
                t && (o.addLogConf(t),
                    o._initAutoLog(n)))
            },
            addLogConf: function(n) {
                $.extend(this.logConf, n || {})
            },
            _initAutoLog: function(n) {
                var t = this
                    , o = 4 === a ? "mousedown" : "tap";
                $("body").on(o, ".gklog", function(o) {
                    var e = $(o.currentTarget).attr("data-gklog")
                        , i = ""
                        , a = $(o.currentTarget);
                    e && t.logConf[e] && ("list" == t.logConf[e] && (i = $(".gklog").filter("[data-gklog='" + e + "']").index(a) || 0),
                        t.sendLog(n, {
                            lt: "al",
                            atype: "list" == t.logConf[e] ? "list" : "auto",
                            aindex: i,
                            aname: e,
                            auiname: n + "." + e
                        }))
                })
            },
            autoPv: function(n) {
                this._send("pv", {}, n)
            },
            log: function(n) {
                var t = new Image
                    , o = "wap_log_" + Math.floor(2147483648 * Math.random()).toString(36);
                window[o] = t,
                    t.onload = t.onerror = t.onabort = function() {
                        t.onload = t.onerror = t.onabort = null ,
                            window[o] = null ,
                            t = null
                    }
                    ,
                    t.src = n
            },
            _send: function(n, o, r, d, c, u) {
                var l = c || e
                    , g = d || i
                    , f = r || 1e5
                    , s = u || a
                    , p = []
                    , w = (new Date).getTime();
                if (o = o || {},
                        !f)
                    return !1;
                if ("pv" !== n && "click" !== n && "ad" !== n)
                    return !1;
                if ("click" !== n || f) {
                    if ("pv" === n ? p = ["http://ctj.wenku.baidu.com/pv.gif?pid=" + l + "&bid=" + g + "&fr=" + s + "&act_id=" + f] : "click" === n ? p = ["http://ctj.wenku.baidu.com/click.gif?pid=" + l + "&bid=" + g + "&fr=" + s + "&act_id=" + f] : "ad" === n && (p = ["http://ctj.wenku.baidu.com/ad.gif?pid=" + l + "&bid=" + g + "&fr=" + s]),
                            p = p.concat(["url=" + encodeURIComponent(location.href), "t=" + w, "refer=" + (document.referrer ? encodeURIComponent(document.referrer) : ""), "_channel=" + t(location.href), "_path=" + location.pathname]),
                            o)
                        for (var h in o)
                            p.push(h + "=" + encodeURIComponent(o[h]));
                    this.log(p.join("&"))
                }
            },
            sendLog: function(n, t) {
                return n ? (t = t || {},
                    void this._send("click", t, n)) : !1
            },
            send: function() {
                this.sendLog.apply(this, arguments)
            },
            bindXlog: function() {
                var n = this
                    , t = 4 === a ? "mousedown" : "tap";
                $("body").on(t, ".log-xsend", function(t) {
                    var o = $(t.currentTarget).attr("data-logxsend");
                    o && (o = JSON.parse(o) || {},
                        n._send("click", o.options || {}, o.act_id || ""),
                        setTimeout(function() {
                            var n = $(t.currentTarget).attr("data-href")
                                , o = $(t.currentTarget).attr("target");
                            o && "_blank" == o ? window.open(n) : window.location = n
                        }, 100))
                })
            }
        },
            !window.GKLOG) {
        var d = new o;
        d.bindXlog(),
            window.GKLOG = d
    }
}();
