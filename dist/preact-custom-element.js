var n,
  l$2,
  u$2,
  i$2,
  r$1,
  o$1,
  e$1,
  f$2,
  c$2,
  s$2,
  a$2,
  h$2,
  p$2,
  v$2,
  d$2 = {},
  w$1 = [],
  _ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  g = Array.isArray;
function m$2(n, l) {
  for (var u in l) n[u] = l[u];
  return n;
}
function b(n) {
  n && n.parentNode && n.parentNode.removeChild(n);
}
function k$1(l, u, t) {
  var i,
    r,
    o,
    e = {};
  for (o in u) "key" == o ? i = u[o] : "ref" == o ? r = u[o] : e[o] = u[o];
  if (arguments.length > 2 && (e.children = arguments.length > 3 ? n.call(arguments, 2) : t), "function" == typeof l && null != l.defaultProps) for (o in l.defaultProps) void 0 === e[o] && (e[o] = l.defaultProps[o]);
  return x(l, e, i, r, null);
}
function x(n, t, i, r, o) {
  var e = {
    type: n,
    props: t,
    key: i,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: null == o ? ++u$2 : o,
    __i: -1,
    __u: 0
  };
  return null == o && null != l$2.vnode && l$2.vnode(e), e;
}
function S(n) {
  return n.children;
}
function C$1(n, l) {
  this.props = n, this.context = l;
}
function $(n, l) {
  if (null == l) return n.__ ? $(n.__, n.__i + 1) : null;
  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
  return "function" == typeof n.type ? $(n) : null;
}
function I(n) {
  if (n.__P && n.__d) {
    var u = n.__v,
      t = u.__e,
      i = [],
      r = [],
      o = m$2({}, u);
    o.__v = u.__v + 1, l$2.vnode && l$2.vnode(o), q(n.__P, o, u, n.__n, n.__P.namespaceURI, 32 & u.__u ? [t] : null, i, null == t ? $(u) : t, !!(32 & u.__u), r), o.__v = u.__v, o.__.__k[o.__i] = o, D$1(i, o, r), u.__e = u.__ = null, o.__e != t && P(o);
  }
}
function P(n) {
  if (null != (n = n.__) && null != n.__c) return n.__e = n.__c.base = null, n.__k.some(function (l) {
    if (null != l && null != l.__e) return n.__e = n.__c.base = l.__e;
  }), P(n);
}
function A(n) {
  (!n.__d && (n.__d = true) && i$2.push(n) && !H.__r++ || r$1 != l$2.debounceRendering) && ((r$1 = l$2.debounceRendering) || o$1)(H);
}
function H() {
  try {
    for (var n, l = 1; i$2.length;) i$2.length > l && i$2.sort(e$1), n = i$2.shift(), l = i$2.length, I(n);
  } finally {
    i$2.length = H.__r = 0;
  }
}
function L(n, l, u, t, i, r, o, e, f, c, s) {
  var a,
    h,
    p,
    v,
    y,
    _,
    g,
    m = t && t.__k || w$1,
    b = l.length;
  for (f = T(u, l, m, f, b), a = 0; a < b; a++) null != (p = u.__k[a]) && (h = -1 != p.__i && m[p.__i] || d$2, p.__i = a, _ = q(n, p, h, i, r, o, e, f, c, s), v = p.__e, p.ref && h.ref != p.ref && (h.ref && J(h.ref, null, p), s.push(p.ref, p.__c || v, p)), null == y && null != v && (y = v), (g = !!(4 & p.__u)) || h.__k === p.__k ? (f = j$1(p, f, n, g), g && h.__e && (h.__e = null)) : "function" == typeof p.type && void 0 !== _ ? f = _ : v && (f = v.nextSibling), p.__u &= -7);
  return u.__e = y, f;
}
function T(n, l, u, t, i) {
  var r,
    o,
    e,
    f,
    c,
    s = u.length,
    a = s,
    h = 0;
  for (n.__k = new Array(i), r = 0; r < i; r++) null != (o = l[r]) && "boolean" != typeof o && "function" != typeof o ? ("string" == typeof o || "number" == typeof o || "bigint" == typeof o || o.constructor == String ? o = n.__k[r] = x(null, o, null, null, null) : g(o) ? o = n.__k[r] = x(S, {
    children: o
  }, null, null, null) : void 0 === o.constructor && o.__b > 0 ? o = n.__k[r] = x(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : n.__k[r] = o, f = r + h, o.__ = n, o.__b = n.__b + 1, e = null, -1 != (c = o.__i = O(o, u, f, a)) && (a--, (e = u[c]) && (e.__u |= 2)), null == e || null == e.__v ? (-1 == c && (i > s ? h-- : i < s && h++), "function" != typeof o.type && (o.__u |= 4)) : c != f && (c == f - 1 ? h-- : c == f + 1 ? h++ : (c > f ? h-- : h++, o.__u |= 4))) : n.__k[r] = null;
  if (a) for (r = 0; r < s; r++) null != (e = u[r]) && 0 == (2 & e.__u) && (e.__e == t && (t = $(e)), K(e, e));
  return t;
}
function j$1(n, l, u, t) {
  var i, r;
  if ("function" == typeof n.type) {
    for (i = n.__k, r = 0; i && r < i.length; r++) i[r] && (i[r].__ = n, l = j$1(i[r], l, u, t));
    return l;
  }
  n.__e != l && (t && (l && n.type && !l.parentNode && (l = $(n)), u.insertBefore(n.__e, l || null)), l = n.__e);
  do {
    l = l && l.nextSibling;
  } while (null != l && 8 == l.nodeType);
  return l;
}
function O(n, l, u, t) {
  var i,
    r,
    o,
    e = n.key,
    f = n.type,
    c = l[u],
    s = null != c && 0 == (2 & c.__u);
  if (null === c && null == e || s && e == c.key && f == c.type) return u;
  if (t > (s ? 1 : 0)) for (i = u - 1, r = u + 1; i >= 0 || r < l.length;) if (null != (c = l[o = i >= 0 ? i-- : r++]) && 0 == (2 & c.__u) && e == c.key && f == c.type) return o;
  return -1;
}
function z$1(n, l, u) {
  "-" == l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || _.test(l) ? u : u + "px";
}
function N(n, l, u, t, i) {
  var r, o;
  n: if ("style" == l) {
    if ("string" == typeof u) n.style.cssText = u;else {
      if ("string" == typeof t && (n.style.cssText = t = ""), t) for (l in t) u && l in u || z$1(n.style, l, "");
      if (u) for (l in u) t && u[l] == t[l] || z$1(n.style, l, u[l]);
    }
  } else if ("o" == l[0] && "n" == l[1]) r = l != (l = l.replace(a$2, "$1")), o = l.toLowerCase(), l = o in n || "onFocusOut" == l || "onFocusIn" == l ? o.slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + r] = u, u ? t ? u[s$2] = t[s$2] : (u[s$2] = h$2, n.addEventListener(l, r ? v$2 : p$2, r)) : n.removeEventListener(l, r ? v$2 : p$2, r);else {
    if ("http://www.w3.org/2000/svg" == i) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");else if ("width" != l && "height" != l && "href" != l && "list" != l && "form" != l && "tabIndex" != l && "download" != l && "rowSpan" != l && "colSpan" != l && "role" != l && "popover" != l && l in n) try {
      n[l] = null == u ? "" : u;
      break n;
    } catch (n) {}
    "function" == typeof u || (null == u || false === u && "-" != l[4] ? n.removeAttribute(l) : n.setAttribute(l, "popover" == l && 1 == u ? "" : u));
  }
}
function V(n) {
  return function (u) {
    if (this.l) {
      var t = this.l[u.type + n];
      if (null == u[c$2]) u[c$2] = h$2++;else if (u[c$2] < t[s$2]) return;
      return t(l$2.event ? l$2.event(u) : u);
    }
  };
}
function q(n, u, t, i, r, o, e, f, c, s) {
  var a,
    h,
    p,
    v,
    y,
    d,
    _,
    k,
    x,
    M,
    $,
    I,
    P,
    A,
    H,
    T = u.type;
  if (void 0 !== u.constructor) return null;
  128 & t.__u && (c = !!(32 & t.__u), o = [f = u.__e = t.__e]), (a = l$2.__b) && a(u);
  n: if ("function" == typeof T) try {
    if (k = u.props, x = T.prototype && T.prototype.render, M = (a = T.contextType) && i[a.__c], $ = a ? M ? M.props.value : a.__ : i, t.__c ? _ = (h = u.__c = t.__c).__ = h.__E : (x ? u.__c = h = new T(k, $) : (u.__c = h = new C$1(k, $), h.constructor = T, h.render = Q), M && M.sub(h), h.state || (h.state = {}), h.__n = i, p = h.__d = !0, h.__h = [], h._sb = []), x && null == h.__s && (h.__s = h.state), x && null != T.getDerivedStateFromProps && (h.__s == h.state && (h.__s = m$2({}, h.__s)), m$2(h.__s, T.getDerivedStateFromProps(k, h.__s))), v = h.props, y = h.state, h.__v = u, p) x && null == T.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), x && null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
      if (x && null == T.getDerivedStateFromProps && k !== v && null != h.componentWillReceiveProps && h.componentWillReceiveProps(k, $), u.__v == t.__v || !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(k, h.__s, $)) {
        u.__v != t.__v && (h.props = k, h.state = h.__s, h.__d = !1), u.__e = t.__e, u.__k = t.__k, u.__k.some(function (n) {
          n && (n.__ = u);
        }), w$1.push.apply(h.__h, h._sb), h._sb = [], h.__h.length && e.push(h);
        break n;
      }
      null != h.componentWillUpdate && h.componentWillUpdate(k, h.__s, $), x && null != h.componentDidUpdate && h.__h.push(function () {
        h.componentDidUpdate(v, y, d);
      });
    }
    if (h.context = $, h.props = k, h.__P = n, h.__e = !1, I = l$2.__r, P = 0, x) h.state = h.__s, h.__d = !1, I && I(u), a = h.render(h.props, h.state, h.context), w$1.push.apply(h.__h, h._sb), h._sb = [];else do {
      h.__d = !1, I && I(u), a = h.render(h.props, h.state, h.context), h.state = h.__s;
    } while (h.__d && ++P < 25);
    h.state = h.__s, null != h.getChildContext && (i = m$2(m$2({}, i), h.getChildContext())), x && !p && null != h.getSnapshotBeforeUpdate && (d = h.getSnapshotBeforeUpdate(v, y)), A = null != a && a.type === S && null == a.key ? E(a.props.children) : a, f = L(n, g(A) ? A : [A], u, t, i, r, o, e, f, c, s), h.base = u.__e, u.__u &= -161, h.__h.length && e.push(h), _ && (h.__E = h.__ = null);
  } catch (n) {
    if (u.__v = null, c || null != o) {
      if (n.then) {
        for (u.__u |= c ? 160 : 128; f && 8 == f.nodeType && f.nextSibling;) f = f.nextSibling;
        o[o.indexOf(f)] = null, u.__e = f;
      } else {
        for (H = o.length; H--;) b(o[H]);
        B$1(u);
      }
    } else u.__e = t.__e, u.__k = t.__k, n.then || B$1(u);
    l$2.__e(n, u, t);
  } else null == o && u.__v == t.__v ? (u.__k = t.__k, u.__e = t.__e) : f = u.__e = G(t.__e, u, t, i, r, o, e, c, s);
  return (a = l$2.diffed) && a(u), 128 & u.__u ? void 0 : f;
}
function B$1(n) {
  n && (n.__c && (n.__c.__e = true), n.__k && n.__k.some(B$1));
}
function D$1(n, u, t) {
  for (var i = 0; i < t.length; i++) J(t[i], t[++i], t[++i]);
  l$2.__c && l$2.__c(u, n), n.some(function (u) {
    try {
      n = u.__h, u.__h = [], n.some(function (n) {
        n.call(u);
      });
    } catch (n) {
      l$2.__e(n, u.__v);
    }
  });
}
function E(n) {
  return "object" != typeof n || null == n || n.__b > 0 ? n : g(n) ? n.map(E) : m$2({}, n);
}
function G(u, t, i, r, o, e, f, c, s) {
  var a,
    h,
    p,
    v,
    y,
    w,
    _,
    m = i.props || d$2,
    k = t.props,
    x = t.type;
  if ("svg" == x ? o = "http://www.w3.org/2000/svg" : "math" == x ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), null != e) for (a = 0; a < e.length; a++) if ((y = e[a]) && "setAttribute" in y == !!x && (x ? y.localName == x : 3 == y.nodeType)) {
    u = y, e[a] = null;
    break;
  }
  if (null == u) {
    if (null == x) return document.createTextNode(k);
    u = document.createElementNS(o, x, k.is && k), c && (l$2.__m && l$2.__m(t, e), c = false), e = null;
  }
  if (null == x) m === k || c && u.data == k || (u.data = k);else {
    if (e = e && n.call(u.childNodes), !c && null != e) for (m = {}, a = 0; a < u.attributes.length; a++) m[(y = u.attributes[a]).name] = y.value;
    for (a in m) y = m[a], "dangerouslySetInnerHTML" == a ? p = y : "children" == a || a in k || "value" == a && "defaultValue" in k || "checked" == a && "defaultChecked" in k || N(u, a, null, y, o);
    for (a in k) y = k[a], "children" == a ? v = y : "dangerouslySetInnerHTML" == a ? h = y : "value" == a ? w = y : "checked" == a ? _ = y : c && "function" != typeof y || m[a] === y || N(u, a, y, m[a], o);
    if (h) c || p && (h.__html == p.__html || h.__html == u.innerHTML) || (u.innerHTML = h.__html), t.__k = [];else if (p && (u.innerHTML = ""), L("template" == t.type ? u.content : u, g(v) ? v : [v], t, i, r, "foreignObject" == x ? "http://www.w3.org/1999/xhtml" : o, e, f, e ? e[0] : i.__k && $(i, 0), c, s), null != e) for (a = e.length; a--;) b(e[a]);
    c || (a = "value", "progress" == x && null == w ? u.removeAttribute("value") : null != w && (w !== u[a] || "progress" == x && !w || "option" == x && w != m[a]) && N(u, a, w, m[a], o), a = "checked", null != _ && _ != u[a] && N(u, a, _, m[a], o));
  }
  return u;
}
function J(n, u, t) {
  try {
    if ("function" == typeof n) {
      var i = "function" == typeof n.__u;
      i && n.__u(), i && null == u || (n.__u = n(u));
    } else n.current = u;
  } catch (n) {
    l$2.__e(n, t);
  }
}
function K(n, u, t) {
  var i, r;
  if (l$2.unmount && l$2.unmount(n), (i = n.ref) && (i.current && i.current != n.__e || J(i, null, u)), null != (i = n.__c)) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (n) {
      l$2.__e(n, u);
    }
    i.base = i.__P = null;
  }
  if (i = n.__k) for (r = 0; r < i.length; r++) i[r] && K(i[r], u, t || "function" != typeof n.type);
  t || b(n.__e), n.__c = n.__ = n.__e = void 0;
}
function Q(n, l, u) {
  return this.constructor(n, u);
}
function R(u, t, i) {
  var r, o, e, f;
  t == document && (t = document.documentElement), l$2.__ && l$2.__(u, t), o = (r = "function" == typeof i) ? null : i && i.__k || t.__k, e = [], f = [], q(t, u = (!r && i || t).__k = k$1(S, null, [u]), o || d$2, d$2, t.namespaceURI, !r && i ? [i] : o ? null : t.firstChild ? n.call(t.childNodes) : null, e, !r && i ? i : o ? o.__e : t.firstChild, r, f), D$1(e, u, f);
}
function U(n, l) {
  R(n, l, U);
}
function W(l, u, t) {
  var i,
    r,
    o,
    e,
    f = m$2({}, l.props);
  for (o in l.type && l.type.defaultProps && (e = l.type.defaultProps), u) "key" == o ? i = u[o] : "ref" == o ? r = u[o] : f[o] = void 0 === u[o] && null != e ? e[o] : u[o];
  return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : t), x(l.type, f, i || l.key, r || l.ref, null);
}
n = w$1.slice, l$2 = {
  __e: function (n, l, u, t) {
    for (var i, r, o; l = l.__;) if ((i = l.__c) && !i.__) try {
      if ((r = i.constructor) && null != r.getDerivedStateFromError && (i.setState(r.getDerivedStateFromError(n)), o = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, t || {}), o = i.__d), o) return i.__E = i;
    } catch (l) {
      n = l;
    }
    throw n;
  }
}, u$2 = 0, C$1.prototype.setState = function (n, l) {
  var u;
  u = null != this.__s && this.__s != this.state ? this.__s : this.__s = m$2({}, this.state), "function" == typeof n && (n = n(m$2({}, u), this.props)), n && m$2(u, n), null != n && this.__v && (l && this._sb.push(l), A(this));
}, C$1.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = true, n && this.__h.push(n), A(this));
}, C$1.prototype.render = S, i$2 = [], o$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e$1 = function (n, l) {
  return n.__v.__b - l.__v.__b;
}, H.__r = 0, f$2 = Math.random().toString(8), c$2 = "__d" + f$2, s$2 = "__a" + f$2, a$2 = /(PointerCapture)$|Capture$/i, h$2 = 0, p$2 = V(false), v$2 = V(true);

var t,
  r,
  u$1,
  i$1,
  o = 0,
  f$1 = [],
  c$1 = l$2,
  e = c$1.__b,
  a$1 = c$1.__r,
  v$1 = c$1.diffed,
  l$1 = c$1.__c,
  m$1 = c$1.unmount,
  s$1 = c$1.__;
function p$1(n, t) {
  c$1.__h && c$1.__h(r, n, o || t), o = 0;
  var u = r.__H || (r.__H = {
    __: [],
    __h: []
  });
  return n >= u.__.length && u.__.push({}), u.__[n];
}
function d$1(n) {
  return o = 1, h$1(D, n);
}
function h$1(n, u, i) {
  var o = p$1(t++, 2);
  if (o.t = n, !o.__c && (o.__ = [D(void 0, u), function (n) {
    var t = o.__N ? o.__N[0] : o.__[0],
      r = o.t(t, n);
    t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
  }], o.__c = r, !r.__f)) {
    var f = function (n, t, r) {
      if (!o.__c.__H) return true;
      var u = o.__c.__H.__.filter(function (n) {
        return n.__c;
      });
      if (u.every(function (n) {
        return !n.__N;
      })) return !c || c.call(this, n, t, r);
      var i = o.__c.props !== n;
      return u.some(function (n) {
        if (n.__N) {
          var t = n.__[0];
          n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = true);
        }
      }), c && c.call(this, n, t, r) || i;
    };
    r.__f = true;
    var c = r.shouldComponentUpdate,
      e = r.componentWillUpdate;
    r.componentWillUpdate = function (n, t, r) {
      if (this.__e) {
        var u = c;
        c = void 0, f(n, t, r), c = u;
      }
      e && e.call(this, n, t, r);
    }, r.shouldComponentUpdate = f;
  }
  return o.__N || o.__;
}
function y(n, u) {
  var i = p$1(t++, 3);
  !c$1.__s && C(i.__H, u) && (i.__ = n, i.u = u, r.__H.__h.push(i));
}
function j() {
  for (var n; n = f$1.shift();) {
    var t = n.__H;
    if (n.__P && t) try {
      t.__h.some(z), t.__h.some(B), t.__h = [];
    } catch (r) {
      t.__h = [], c$1.__e(r, n.__v);
    }
  }
}
c$1.__b = function (n) {
  r = null, e && e(n);
}, c$1.__ = function (n, t) {
  n && t.__k && t.__k.__m && (n.__m = t.__k.__m), s$1 && s$1(n, t);
}, c$1.__r = function (n) {
  a$1 && a$1(n), t = 0;
  var i = (r = n.__c).__H;
  i && (u$1 === r ? (i.__h = [], r.__h = [], i.__.some(function (n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (i.__h.some(z), i.__h.some(B), i.__h = [], t = 0)), u$1 = r;
}, c$1.diffed = function (n) {
  v$1 && v$1(n);
  var t = n.__c;
  t && t.__H && (t.__H.__h.length && (1 !== f$1.push(t) && i$1 === c$1.requestAnimationFrame || ((i$1 = c$1.requestAnimationFrame) || w)(j)), t.__H.__.some(function (n) {
    n.u && (n.__H = n.u), n.u = void 0;
  })), u$1 = r = null;
}, c$1.__c = function (n, t) {
  t.some(function (n) {
    try {
      n.__h.some(z), n.__h = n.__h.filter(function (n) {
        return !n.__ || B(n);
      });
    } catch (r) {
      t.some(function (n) {
        n.__h && (n.__h = []);
      }), t = [], c$1.__e(r, n.__v);
    }
  }), l$1 && l$1(n, t);
}, c$1.unmount = function (n) {
  m$1 && m$1(n);
  var t,
    r = n.__c;
  r && r.__H && (r.__H.__.some(function (n) {
    try {
      z(n);
    } catch (n) {
      t = n;
    }
  }), r.__H = void 0, t && c$1.__e(t, r.__v));
};
var k = "function" == typeof requestAnimationFrame;
function w(n) {
  var t,
    r = function () {
      clearTimeout(u), k && cancelAnimationFrame(t), setTimeout(n);
    },
    u = setTimeout(r, 35);
  k && (t = requestAnimationFrame(r));
}
function z(n) {
  var t = r,
    u = n.__c;
  "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function B(n) {
  var t = r;
  n.__c = n.__(), r = t;
}
function C(n, t) {
  return !n || n.length !== t.length || t.some(function (t, r) {
    return t !== n[r];
  });
}
function D(n, t) {
  return "function" == typeof t ? t(n) : t;
}

function i() {
  return i = Object.assign ? Object.assign.bind() : function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, i.apply(this, arguments);
}
function s(t, e) {
  if (null == t) return {};
  var n,
    o,
    r = {},
    i = Object.keys(t);
  for (o = 0; o < i.length; o++) e.indexOf(n = i[o]) >= 0 || (r[n] = t[n]);
  return r;
}
var a = ["context", "children"],
  l = ["useFragment"];
function c(t, e, n, o) {
  function r() {
    var e,
      n = Reflect.construct(HTMLElement, [], r);
    return n._vdomComponent = t, o && o.shadow ? (n._root = n.attachShadow({
      mode: o.mode || "open",
      serializable: null != (e = o.serializable) && e
    }), o.adoptedStyleSheets && (n._root.adoptedStyleSheets = o.adoptedStyleSheets)) : n._root = n, n;
  }
  return (r.prototype = Object.create(HTMLElement.prototype)).constructor = r, r.prototype.connectedCallback = function () {
    d.call(this, o);
  }, r.prototype.attributeChangedCallback = h, r.prototype.disconnectedCallback = f, n = n || t.observedAttributes || Object.keys(t.propTypes || {}), r.observedAttributes = n, t.formAssociated && (r.formAssociated = true), n.forEach(function (t) {
    Object.defineProperty(r.prototype, t, {
      get: function () {
        return this._vdom ? this._vdom.props[t] : this._props[t];
      },
      set: function (e) {
        this._vdom ? this.attributeChangedCallback(t, null, e) : (this._props || (this._props = {}), this._props[t] = e);
        var n = typeof e;
        null != e && "string" !== n && "boolean" !== n && "number" !== n || this.setAttribute(t, e);
      }
    });
  }), customElements.define(e, r), r;
}
function u(t) {
  this.getChildContext = function () {
    return t.context;
  };
  var e = t.children,
    n = s(t, a);
  return W(e, n);
}
function d(o) {
  var r = new CustomEvent("_preact", {
    detail: {},
    bubbles: true,
    cancelable: true
  });
  this.dispatchEvent(r), this._vdom = k$1(u, i({}, this._props, {
    context: r.detail.context
  }), v(this, this._vdomComponent, o)), (this.hasAttribute("hydrate") ? U : R)(this._vdom, this._root);
}
function p(t) {
  return t.replace(/-(\w)/g, function (t, e) {
    return e ? e.toUpperCase() : "";
  });
}
function h(t, e, r) {
  if (this._vdom) {
    var i = {};
    i[t] = r = null == r ? void 0 : r, i[p(t)] = r, this._vdom = W(this._vdom, i), R(this._vdom, this._root);
  }
}
function f() {
  R(this._vdom = null, this._root);
}
function m(e, n) {
  var o = this,
    a = e.useFragment,
    c = s(e, l);
  return k$1(a ? S : "slot", i({}, c, {
    ref: function (t) {
      t ? (o.ref = t, o._listener || (o._listener = function (t) {
        t.stopPropagation(), t.detail.context = n;
      }, t.addEventListener("_preact", o._listener))) : o.ref.removeEventListener("_preact", o._listener);
    }
  }));
}
function v(e, n, o) {
  if (3 === e.nodeType) return e.data;
  if (1 !== e.nodeType) return null;
  var r = [],
    i = {},
    s = 0,
    a = e.attributes,
    l = e.childNodes;
  for (s = a.length; s--;) "slot" !== a[s].name && (i[a[s].name] = a[s].value, i[p(a[s].name)] = a[s].value);
  for (s = l.length; s--;) {
    var c = v(l[s], null, o),
      u = l[s].slot;
    u ? i[u] = k$1(m, {
      name: u
    }, c) : r[s] = c;
  }
  var d = !(!o || !o.shadow),
    h = n ? k$1(m, {
      useFragment: !d
    }, r) : r;
  return !d && n && (e.innerHTML = ""), k$1(n || e.nodeName.toLowerCase(), i, h);
}

const version = "10.29.1";

const elementName = 'preact-custom-element-empty';
const styles = `:host  {
  display: inline-block;
  border: 1px solid red;
  padding: 0.5em;
  min-width: 20em;
}`;
const PreactCustomElementEmpty = ({
  text
}) => {
  const [lastPing, setLastPing] = d$1(null);
  y(() => {
    const handler = e => setLastPing(e.detail);
    window.addEventListener('framework-ping', handler);
    return () => window.removeEventListener('framework-ping', handler);
  }, []);
  const ping = () => window.dispatchEvent(new CustomEvent('framework-ping', {
    detail: elementName,
    bubbles: true,
    composed: true
  }));
  return k$1(S, null, k$1("style", null, styles), text, k$1("br", null), k$1("button", {
    onClick: ping
  }, "Ping"), lastPing && k$1("span", null, " \u2190 ", lastPing), k$1("br", null), k$1("small", {
    style: "text-align: right; display: block;"
  }, "Preact ", version));
};
c(PreactCustomElementEmpty, elementName, ['text'], {
  shadow: true
});
