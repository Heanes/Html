var require, define;
!function(r) {
    function e(r, e) {
        var u = a[r] || (a[r] = []);
        u.push(e);
        var o = n[r] || {}
            , p = o.pkg ? i[o.pkg].url : o.url || r;
        if (!(p in f)) {
            f[p] = !0;
            var s = document.createElement("script");
            s.type = "text/javascript",
                s.src = p,
                t.appendChild(s)
        }
    }
    var n, i, t = document.getElementsByTagName("head")[0], a = {}, u = {}, o = {}, f = {};
    define = function(r, e) {
        u[r] = e;
        var n = a[r];
        if (n) {
            for (var i = n.length - 1; i >= 0; --i)
                n[i]();
            delete a[r]
        }
    }
        ,
        require = function(r) {
            r = require.alias(r);
            var e = o[r];
            if (e)
                return e.exports;
            var n = u[r];
            if (!n)
                throw Error("Cannot find module `" + r + "`");
            e = o[r] = {
                exports: {}
            };
            var i = "function" == typeof n ? n.apply(e, [require, e.exports, e]) : n;
            return i && (e.exports = i),
                e.exports
        }
        ,
        require.async = function(i, t) {
            function a(r) {
                for (var i = r.length - 1; i >= 0; --i) {
                    var t = r[i];
                    if (!(t in u || t in p)) {
                        p[t] = !0,
                            s++,
                            e(t, o);
                        var f = n[t];
                        f && "deps" in f && a(f.deps)
                    }
                }
            }
            function o() {
                if (0 == s--) {
                    var e, n, a = [];
                    for (e = 0,
                             n = i.length; n > e; ++e)
                        a[e] = require(i[e]);
                    t && t.apply(r, a)
                }
            }
            "string" == typeof i && (i = [i]);
            for (var f = i.length - 1; f >= 0; --f)
                i[f] = require.alias(i[f]);
            var p = {}
                , s = 0;
            a(i),
                o()
        }
        ,
        require.resourceMap = function(r) {
            n = r.res || {},
                i = r.pkg || {}
        }
        ,
        require.alias = function(r) {
            return r
        }
        ,
        define.amd = {
            jQuery: !0,
            version: "1.0.0"
        }
}(this);
