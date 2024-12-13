import {
  extendTailwindMerge,
  twMerge
} from "./chunk-IQPYEVPQ.js";
import "./chunk-256EKJAK.js";

// node_modules/tailwind-variants/dist/chunk-JXBJZR5A.js
var l = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e;
var u = (e) => !e || typeof e != "object" || Object.keys(e).length === 0;
var x = (e, o) => JSON.stringify(e) === JSON.stringify(o);
function i(e, o) {
  e.forEach(function(r) {
    Array.isArray(r) ? i(r, o) : o.push(r);
  });
}
function y(e) {
  let o = [];
  return i(e, o), o;
}
var a = (...e) => y(e).filter(Boolean);
var p = (e, o) => {
  let r = {}, c = Object.keys(e), f = Object.keys(o);
  for (let t of c) if (f.includes(t)) {
    let s = e[t], n = o[t];
    typeof s == "object" && typeof n == "object" ? r[t] = p(s, n) : Array.isArray(s) || Array.isArray(n) ? r[t] = a(n, s) : r[t] = n + " " + s;
  } else r[t] = e[t];
  for (let t of f) c.includes(t) || (r[t] = o[t]);
  return r;
};
var g = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();

// node_modules/tailwind-variants/dist/index.js
var ie = { twMerge: true, twMergeConfig: {}, responsiveVariants: false };
var _ = (s) => s || void 0;
var M = (...s) => _(y(s).filter(Boolean).join(" "));
var R = null;
var v = {};
var q = false;
var j = (...s) => (b$1) => b$1.twMerge ? ((!R || q) && (q = false, R = u(v) ? twMerge : extendTailwindMerge({ ...v, extend: { theme: v.theme, classGroups: v.classGroups, conflictingClassGroupModifiers: v.conflictingClassGroupModifiers, conflictingClassGroups: v.conflictingClassGroups, ...v.extend } })), _(R(M(s)))) : M(s);
var Z = (s, b) => {
  for (let e in b) s.hasOwnProperty(e) ? s[e] = M(s[e], b[e]) : s[e] = b[e];
  return s;
};
var ce = (s, b$1) => {
  let { extend: e = null, slots: N = {}, variants: F = {}, compoundVariants: U = [], compoundSlots: C = [], defaultVariants: W = {} } = s, m = { ...ie, ...b$1 }, S = e != null && e.base ? M(e.base, s == null ? void 0 : s.base) : s == null ? void 0 : s.base, g$1 = e != null && e.variants && !u(e.variants) ? p(F, e.variants) : F, A = e != null && e.defaultVariants && !u(e.defaultVariants) ? { ...e.defaultVariants, ...W } : W;
  !u(m.twMergeConfig) && !x(m.twMergeConfig, v) && (q = true, v = m.twMergeConfig);
  let O = u(e == null ? void 0 : e.slots), $ = u(N) ? {} : { base: M(s == null ? void 0 : s.base, O && (e == null ? void 0 : e.base)), ...N }, w = O ? $ : Z({ ...e == null ? void 0 : e.slots }, u($) ? { base: s == null ? void 0 : s.base } : $), h$1 = u(e == null ? void 0 : e.compoundVariants) ? U : a(e == null ? void 0 : e.compoundVariants, U), V = (f) => {
    if (u(g$1) && u(N) && O) return j(S, f == null ? void 0 : f.class, f == null ? void 0 : f.className)(m);
    if (h$1 && !Array.isArray(h$1)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof h$1}`);
    if (C && !Array.isArray(C)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof C}`);
    let K = (t, n, a2 = [], i2) => {
      let r = a2;
      if (typeof n == "string") r = r.concat(g(n).split(" ").map((o) => `${t}:${o}`));
      else if (Array.isArray(n)) r = r.concat(n.reduce((o, c) => o.concat(`${t}:${c}`), []));
      else if (typeof n == "object" && typeof i2 == "string") {
        for (let o in n) if (n.hasOwnProperty(o) && o === i2) {
          let c = n[o];
          if (c && typeof c == "string") {
            let l2 = g(c);
            r[i2] ? r[i2] = r[i2].concat(l2.split(" ").map((u2) => `${t}:${u2}`)) : r[i2] = l2.split(" ").map((u2) => `${t}:${u2}`);
          } else Array.isArray(c) && c.length > 0 && (r[i2] = c.reduce((l2, u2) => l2.concat(`${t}:${u2}`), []));
        }
      }
      return r;
    }, z = (t, n = g$1, a$1 = null, i2 = null) => {
      var J;
      let r = n[t];
      if (!r || u(r)) return null;
      let o = (J = i2 == null ? void 0 : i2[t]) != null ? J : f == null ? void 0 : f[t];
      if (o === null) return null;
      let c = l(o), l2 = Array.isArray(m.responsiveVariants) && m.responsiveVariants.length > 0 || m.responsiveVariants === true, u2 = A == null ? void 0 : A[t], d = [];
      if (typeof c == "object" && l2) for (let [T, L] of Object.entries(c)) {
        let ne = r[L];
        if (T === "initial") {
          u2 = L;
          continue;
        }
        Array.isArray(m.responsiveVariants) && !m.responsiveVariants.includes(T) || (d = K(T, ne, d, a$1));
      }
      let ae = c != null && typeof c != "object" ? c : l(u2), k = r[ae || "false"];
      return typeof d == "object" && typeof a$1 == "string" && d[a$1] ? Z(d, k) : d.length > 0 ? (d.push(k), d) : k;
    }, P = () => g$1 ? Object.keys(g$1).map((t) => z(t, g$1)) : null, p2 = (t, n) => {
      if (!g$1 || typeof g$1 != "object") return null;
      let a2 = new Array();
      for (let i2 in g$1) {
        let r = z(i2, g$1, t, n), o = t === "base" && typeof r == "string" ? r : r && r[t];
        o && (a2[a2.length] = o);
      }
      return a2;
    }, D = {};
    for (let t in f) f[t] !== void 0 && (D[t] = f[t]);
    let H = (t, n) => {
      var i2;
      let a2 = typeof (f == null ? void 0 : f[t]) == "object" ? { [t]: (i2 = f[t]) == null ? void 0 : i2.initial } : {};
      return { ...A, ...D, ...a2, ...n };
    }, I = (t = [], n) => {
      let a2 = [];
      for (let { class: i2, className: r, ...o } of t) {
        let c = true;
        for (let [l2, u2] of Object.entries(o)) {
          let d = H(l2, n);
          if (Array.isArray(u2)) {
            if (!u2.includes(d[l2])) {
              c = false;
              break;
            }
          } else if (d[l2] !== u2) {
            c = false;
            break;
          }
        }
        c && (i2 && a2.push(i2), r && a2.push(r));
      }
      return a2;
    }, ee = (t) => {
      let n = I(h$1, t);
      if (!Array.isArray(n)) return n;
      let a2 = {};
      for (let i2 of n) if (typeof i2 == "string" && (a2.base = j(a2.base, i2)(m)), typeof i2 == "object") for (let [r, o] of Object.entries(i2)) a2[r] = j(a2[r], o)(m);
      return a2;
    }, te = (t) => {
      if (C.length < 1) return null;
      let n = {};
      for (let { slots: a2 = [], class: i2, className: r, ...o } of C) {
        if (!u(o)) {
          let c = true;
          for (let l2 of Object.keys(o)) {
            let u2 = H(l2, t)[l2];
            if (u2 === void 0 || (Array.isArray(o[l2]) ? !o[l2].includes(u2) : o[l2] !== u2)) {
              c = false;
              break;
            }
          }
          if (!c) continue;
        }
        for (let c of a2) n[c] = n[c] || [], n[c].push([i2, r]);
      }
      return n;
    };
    if (!u(N) || !O) {
      let t = {};
      if (typeof w == "object" && !u(w)) for (let n of Object.keys(w)) t[n] = (a2) => {
        var i2, r;
        return j(w[n], p2(n, a2), ((i2 = ee(a2)) != null ? i2 : [])[n], ((r = te(a2)) != null ? r : [])[n], a2 == null ? void 0 : a2.class, a2 == null ? void 0 : a2.className)(m);
      };
      return t;
    }
    return j(S, P(), I(h$1), f == null ? void 0 : f.class, f == null ? void 0 : f.className)(m);
  }, x2 = () => {
    if (!(!g$1 || typeof g$1 != "object")) return Object.keys(g$1);
  };
  return V.variantKeys = x2(), V.extend = e, V.base = S, V.slots = w, V.variants = g$1, V.defaultVariants = A, V.compoundSlots = C, V.compoundVariants = h$1, V;
};
var le = (s) => (b, e) => ce(b, e ? p(s, e) : s);
export {
  j as cn,
  M as cnBase,
  le as createTV,
  ie as defaultConfig,
  ce as tv,
  _ as voidEmpty
};
//# sourceMappingURL=tailwind-variants.js.map
