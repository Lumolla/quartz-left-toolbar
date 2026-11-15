import { createRequire } from 'module';
import { jsxs, jsx } from 'preact/jsx-runtime';

createRequire(import.meta.url);
var LeftToolbar_default = (() => {
  const LeftToolbar = ({ displayClass }) => {
    return /* @__PURE__ */ jsxs("div", { class: `left-icon-toolbar ${displayClass ?? ""}`, children: [
      /* @__PURE__ */ jsx("a", { href: "/", class: "toolbar-btn toolbar-home", title: "Home", children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
        /* @__PURE__ */ jsx("path", { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }),
        /* @__PURE__ */ jsx("polyline", { points: "9 22 9 12 15 12 15 22" })
      ] }) }),
      /* @__PURE__ */ jsx("button", { id: "toolbar-theme-toggle", class: "toolbar-btn", title: "Toggle Theme", children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "5" }),
        /* @__PURE__ */ jsx("line", { x1: "12", y1: "1", x2: "12", y2: "3" }),
        /* @__PURE__ */ jsx("line", { x1: "12", y1: "21", x2: "12", y2: "23" }),
        /* @__PURE__ */ jsx("line", { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }),
        /* @__PURE__ */ jsx("line", { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }),
        /* @__PURE__ */ jsx("line", { x1: "1", y1: "12", x2: "3", y2: "12" }),
        /* @__PURE__ */ jsx("line", { x1: "21", y1: "12", x2: "23", y2: "12" }),
        /* @__PURE__ */ jsx("line", { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }),
        /* @__PURE__ */ jsx("line", { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { class: "toolbar-divider" }),
      /* @__PURE__ */ jsxs("div", { class: "toolbar-ratings", children: [
        /* @__PURE__ */ jsxs("label", { class: "rating-toggle", title: "Safe", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", id: "filter-safe", checked: true }),
          /* @__PURE__ */ jsx("span", { class: "rating-dot safe" })
        ] }),
        /* @__PURE__ */ jsxs("label", { class: "rating-toggle", title: "Suggestive", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", id: "filter-suggestive" }),
          /* @__PURE__ */ jsx("span", { class: "rating-dot suggestive" })
        ] }),
        /* @__PURE__ */ jsxs("label", { class: "rating-toggle", title: "Questionable", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", id: "filter-questionable" }),
          /* @__PURE__ */ jsx("span", { class: "rating-dot questionable" })
        ] }),
        /* @__PURE__ */ jsxs("label", { class: "rating-toggle", title: "Explicit", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", id: "filter-explicit" }),
          /* @__PURE__ */ jsx("span", { class: "rating-dot explicit" })
        ] })
      ] })
    ] });
  };
  return LeftToolbar;
});

export { LeftToolbar_default as LeftToolbar };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map