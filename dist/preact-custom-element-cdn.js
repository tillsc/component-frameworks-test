import { options, h as h$2, hydrate, render, cloneElement, Fragment } from 'preact';

var t,
  r,
  u$1,
  i$1,
  o = 0,
  f$1 = [],
  c$1 = options,
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
  return cloneElement(e, n);
}
function d(o) {
  var r = new CustomEvent("_preact", {
    detail: {},
    bubbles: true,
    cancelable: true
  });
  this.dispatchEvent(r), this._vdom = h$2(u, i({}, this._props, {
    context: r.detail.context
  }), v(this, this._vdomComponent, o)), (this.hasAttribute("hydrate") ? hydrate : render)(this._vdom, this._root);
}
function p(t) {
  return t.replace(/-(\w)/g, function (t, e) {
    return e ? e.toUpperCase() : "";
  });
}
function h(t, e, r) {
  if (this._vdom) {
    var i = {};
    i[t] = r = null == r ? void 0 : r, i[p(t)] = r, this._vdom = cloneElement(this._vdom, i), render(this._vdom, this._root);
  }
}
function f() {
  render(this._vdom = null, this._root);
}
function m(e, n) {
  var o = this,
    a = e.useFragment,
    c = s(e, l);
  return h$2(a ? Fragment : "slot", i({}, c, {
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
    u ? i[u] = h$2(m, {
      name: u
    }, c) : r[s] = c;
  }
  var d = !(!o || !o.shadow),
    h = n ? h$2(m, {
      useFragment: !d
    }, r) : r;
  return !d && n && (e.innerHTML = ""), h$2(n || e.nodeName.toLowerCase(), i, h);
}

const styles = `:host {
  display: inline-block;
  border: 1px solid red;
  padding: 0.5em;
  min-width: 20em;
}`;
const elementName = 'preact-custom-element-cdn-empty';
const PreactCdnEmpty = ({
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
  return h$2(Fragment, null, h$2("style", null, styles), text, h$2("br", null), h$2("button", {
    onClick: ping
  }, "Ping"), lastPing && h$2("span", null, " \u2190 ", lastPing), h$2("br", null), h$2("small", {
    style: "text-align: right; display: block;"
  }, "Preact (from CDN)"));
};
c(PreactCdnEmpty, elementName, ['text'], {
  shadow: true
});
