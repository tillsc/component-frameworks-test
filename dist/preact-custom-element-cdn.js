import { h as h$1, hydrate, render, cloneElement, Fragment } from 'preact';

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
  this.dispatchEvent(r), this._vdom = h$1(u, i({}, this._props, {
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
  return h$1(a ? Fragment : "slot", i({}, c, {
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
    u ? i[u] = h$1(m, {
      name: u
    }, c) : r[s] = c;
  }
  var d = !(!o || !o.shadow),
    h = n ? h$1(m, {
      useFragment: !d
    }, r) : r;
  return !d && n && (e.innerHTML = ""), h$1(n || e.nodeName.toLowerCase(), i, h);
}

const styles = `:host {
  display: inline-block;
  border: 1px solid red;
  padding: 0.5em;
}`;
const PreactCdnEmpty = ({
  text
}) => h$1(Fragment, null, h$1("style", null, styles), text, h$1("br", null), h$1("small", null, "Preact (from CDN)"));
c(PreactCdnEmpty, 'preact-custom-element-cdn-empty', ['text'], {
  shadow: true
});
