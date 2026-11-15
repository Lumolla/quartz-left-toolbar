import { createRequire } from 'module';
import { jsxs, jsx } from 'preact/jsx-runtime';

createRequire(import.meta.url);
var LeftToolbar_default = (() => {
  const LeftToolbar = ({ displayClass }) => {
    return /* @__PURE__ */ jsxs("div", { class: `left-icon-toolbar ${displayClass ?? ""}`, children: [
      /* @__PURE__ */ jsx("a", { href: "/", class: "toolbar-btn toolbar-home", title: "Reflection", children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
        /* @__PURE__ */ jsx("path", { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }),
        /* @__PURE__ */ jsx("polyline", { points: "9 22 9 12 15 12 15 22" })
      ] }) }),
      /* @__PURE__ */ jsxs("button", { id: "toolbar-theme-toggle", class: "toolbar-btn darkmode", title: "Dark/Light Theme", children: [
        /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "dayIcon", children: [
          /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "5" }),
          /* @__PURE__ */ jsx("line", { x1: "12", y1: "1", x2: "12", y2: "3" }),
          /* @__PURE__ */ jsx("line", { x1: "12", y1: "21", x2: "12", y2: "23" }),
          /* @__PURE__ */ jsx("line", { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }),
          /* @__PURE__ */ jsx("line", { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }),
          /* @__PURE__ */ jsx("line", { x1: "1", y1: "12", x2: "3", y2: "12" }),
          /* @__PURE__ */ jsx("line", { x1: "21", y1: "12", x2: "23", y2: "12" }),
          /* @__PURE__ */ jsx("line", { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }),
          /* @__PURE__ */ jsx("line", { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" })
        ] }),
        /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 100 100", fill: "currentColor", class: "nightIcon", children: /* @__PURE__ */ jsx("path", { d: "M96.76,66.458c-0.853-0.852-2.15-1.064-3.23-0.534c-6.063,2.991-12.858,4.571-19.655,4.571C62.022,70.495,50.88,65.88,42.5,57.5C29.043,44.043,25.658,23.536,34.076,6.47c0.532-1.08,0.318-2.379-0.534-3.23c-0.851-0.852-2.15-1.064-3.23-0.534c-4.918,2.427-9.375,5.619-13.246,9.491c-9.447,9.447-14.65,22.008-14.65,35.369c0,13.36,5.203,25.921,14.65,35.368s22.008,14.65,35.368,14.65c13.361,0,25.921-5.203,35.369-14.65c3.872-3.871,7.064-8.328,9.491-13.246C97.826,68.608,97.611,67.309,96.76,66.458z" }) })
      ] }),
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