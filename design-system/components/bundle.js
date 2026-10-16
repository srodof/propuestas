/* @ds-bundle: {"format": 4, "namespace": "Swiitch", "components": [{"name": "Button"}, {"name": "FormSubmitButton"}, {"name": "WhatsAppButton"}, {"name": "NavBar"}, {"name": "Footer"}, {"name": "ServiceTile"}, {"name": "MethodologyIconBlock"}, {"name": "PortraitImage"}, {"name": "SectionSurfaceLight"}, {"name": "SectionCTAPhoto"}, {"name": "FormInput"}, {"name": "Icon"}, {"name": "SocialIcon"}, {"name": "ReportHeader"}, {"name": "KpiCard"}, {"name": "Delta"}, {"name": "InsightPanel"}, {"name": "Pill"}, {"name": "BarMeter"}, {"name": "FunnelStep"}, {"name": "AdCard"}, {"name": "ReportTable"}]} */
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // src/react-shim.js
  var require_react_shim = __commonJS({
    "src/react-shim.js"(exports, module) {
      module.exports = window.React;
    }
  });

  // src/index.jsx
  var import_react = __toESM(require_react_shim());

  // src/social-paths.json
  var social_paths_default = { facebook: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z", instagram: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z", linkedin: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", tiktok: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z", whatsapp: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" };

  // src/index.jsx
  var cx = (...a) => a.filter(Boolean).join(" ");
  var PATHS = {
    "chevron-right": '<path d="M9 6l6 6-6 6"/>',
    "check": '<polyline points="20 6 9 17 4 12"/>',
    "x": '<path d="M18 6L6 18M6 6l12 12"/>',
    "menu": '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
    "mail": '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 6l10 7 10-7"/>',
    "phone": '<path d="M4 4c0 9 7 16 16 16l1-4-5-2-2 2c-3-1-6-4-7-7l2-2-2-5z"/>',
    "map-pin": '<path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    "message-circle": '<path d="M4 12a8 8 0 1 1 3.5 6.6L4 20l1.2-3.6A7.96 7.96 0 0 1 4 12z"/>',
    "search": '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/>',
    "users": '<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6"/><circle cx="17" cy="9" r="3"/><path d="M14 14.5c2.7.3 5 2.5 5 5.5"/>',
    "target": '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    "bar-chart": '<line x1="6" y1="20" x2="6" y2="12"/><line x1="12" y1="20" x2="12" y2="6"/><line x1="18" y1="20" x2="18" y2="15"/>',
    "trending-up": '<polyline points="3 17 9 11 13 15 21 6"/><polyline points="15 6 21 6 21 12"/>',
    "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>'
  };
  function Icon({ name, size = 20, color = "currentColor", strokeWidth = 2, style, title }) {
    const d = PATHS[name];
    if (!d) return null;
    return /* @__PURE__ */ import_react.default.createElement(
      "svg",
      {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        style,
        role: title ? "img" : void 0,
        "aria-label": title,
        "aria-hidden": title ? void 0 : true,
        dangerouslySetInnerHTML: { __html: (title ? "<title>" + title + "</title>" : "") + d }
      }
    );
  }
  Icon.AVAILABLE = Object.keys(PATHS);
  function SocialIcon({ network, size = 20, color = "currentColor", style, title }) {
    const d = social_paths_default[network];
    if (!d) return null;
    return /* @__PURE__ */ import_react.default.createElement(
      "svg",
      {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
        style,
        role: "img",
        "aria-label": title || network
      },
      /* @__PURE__ */ import_react.default.createElement("path", { d })
    );
  }
  SocialIcon.AVAILABLE = Object.keys(social_paths_default);
  function Button({ children = "Ver m\xE1s", variant = "primary", href, onClick, disabled = false, showIcon = true, type }) {
    const slider = variant === "slider-cta";
    const cls = cx("sw-btn", slider && "sw-btn--slider");
    const icon = showIcon ? /* @__PURE__ */ import_react.default.createElement(Icon, { name: "chevron-right", size: slider ? 16 : 14 }) : null;
    if (href && !disabled) return /* @__PURE__ */ import_react.default.createElement("a", { className: cls, href, onClick }, icon, children);
    return /* @__PURE__ */ import_react.default.createElement("button", { type: type || "button", className: cls, onClick, disabled }, icon, children);
  }
  var NAV_ITEMS = ["Acerca de SWIITCH", "Marketing Digital", "Comunicaci\xF3n", "Publicidad", "Transformaci\xF3n Digital", "Contacto"];
  function NavBar({ variant = "transparent", items = NAV_ITEMS, logo, logoOnPhoto, logoAlt = "SWIITCH", homeHref = "#" }) {
    const [open, setOpen] = (0, import_react.useState)(false);
    const solid = variant === "solid";
    const src = solid ? logo : logoOnPhoto || logo;
    return /* @__PURE__ */ import_react.default.createElement("nav", { className: cx("sw-nav", solid && "sw-nav--solid", open && "sw-nav--open"), "aria-label": "Principal" }, /* @__PURE__ */ import_react.default.createElement("a", { href: homeHref, className: "sw-nav__brand" }, src ? /* @__PURE__ */ import_react.default.createElement("img", { src, alt: logoAlt, height: 34, style: { display: "block", height: 34, width: "auto" } }) : /* @__PURE__ */ import_react.default.createElement("span", { className: "sw-nav__word" }, "SWIITCH")), /* @__PURE__ */ import_react.default.createElement("div", { className: "sw-nav__links" }, items.map((it) => /* @__PURE__ */ import_react.default.createElement("a", { key: it, href: "#" }, it))), /* @__PURE__ */ import_react.default.createElement("button", { className: "sw-nav__menu", type: "button", "aria-label": "Men\xFA", "aria-expanded": open, onClick: () => setOpen(!open) }, /* @__PURE__ */ import_react.default.createElement(Icon, { name: open ? "x" : "menu", size: 24 })));
  }
  function ServiceTile({ image, title = "Servicios de Marketing Digital", href = "#" }) {
    return /* @__PURE__ */ import_react.default.createElement("div", { style: { background: "var(--surface)", display: "flex", flexDirection: "column" } }, /* @__PURE__ */ import_react.default.createElement("div", { role: image ? "img" : void 0, "aria-label": image ? title : void 0, style: {
      width: "100%",
      aspectRatio: "4 / 3",
      borderRadius: "var(--radius-none)",
      background: image ? "url(" + image + ") center / cover" : "var(--photo-placeholder)"
    } }), /* @__PURE__ */ import_react.default.createElement("div", { style: { padding: 24, display: "flex", flexDirection: "column", alignItems: "center", gap: 14, textAlign: "center" } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { font: "700 21px/1.6 var(--font-sans)", color: "var(--heading)" } }, title), /* @__PURE__ */ import_react.default.createElement(Button, { variant: "primary", href }, "Ver m\xE1s")));
  }
  function MethodologyIconBlock({ icon = "target", title = "An\xE1lisis", description = "Investigamos a fondo tu marca y su contexto para identificar oportunidades reales." }) {
    return /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 18, maxWidth: 260 } }, /* @__PURE__ */ import_react.default.createElement(Icon, { name: icon, size: 80, color: "var(--primary)", strokeWidth: 1.5 }), /* @__PURE__ */ import_react.default.createElement("div", { style: { font: "700 21px/1.6 var(--font-sans)", color: "var(--heading)" } }, title), /* @__PURE__ */ import_react.default.createElement("div", { style: { font: "400 16px/1.8 var(--font-sans)", color: "var(--body)", textAlign: "justify" } }, description));
  }
  function PortraitImage({ image, size = 320, alt = "" }) {
    return /* @__PURE__ */ import_react.default.createElement("div", { role: image ? "img" : void 0, "aria-label": image ? alt : void 0, style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-circle)",
      overflow: "hidden",
      background: image ? "url(" + image + ") center / cover" : "var(--photo-placeholder)"
    } });
  }
  function SectionSurfaceLight({ children }) {
    return /* @__PURE__ */ import_react.default.createElement("section", { style: {
      background: "var(--surface-alt)",
      color: "var(--heading)",
      padding: "5% 5%",
      minHeight: "30vh",
      boxSizing: "border-box"
    } }, children);
  }
  function SectionCTAPhoto({ image, eyebrow = "Consultor\xEDa en Transformaci\xF3n Digital", title = "Prep\xE1rate para lo que se viene", body, buttonLabel = "Ver m\xE1s", buttonHref = "#", height = "50vh", navSlot }) {
    return /* @__PURE__ */ import_react.default.createElement("section", { style: {
      position: "relative",
      minHeight: height,
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      background: image ? "url(" + image + ") center / cover" : "var(--surface-footer)"
    } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { position: "absolute", inset: 0, background: "var(--overlay-dark)" } }), navSlot && /* @__PURE__ */ import_react.default.createElement("div", { style: { position: "relative", zIndex: 2 } }, navSlot), /* @__PURE__ */ import_react.default.createElement("div", { style: { position: "relative", flex: 1, display: "flex", alignItems: "center", padding: "40px 5%", boxSizing: "border-box" } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 18, maxWidth: 640 } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { alignSelf: "flex-start", background: "var(--primary)", color: "var(--on-primary)", font: "700 13px/1.4 var(--font-sans)", padding: "4px 12px", borderRadius: "var(--radius-xs)" } }, eyebrow), /* @__PURE__ */ import_react.default.createElement("h2", { style: { margin: 0, font: "400 48px/1.2 var(--font-display)", color: "var(--heading-on-photo)" } }, title), body && /* @__PURE__ */ import_react.default.createElement("div", { style: { font: "400 18px/1.6 var(--font-sans)", color: "var(--body-on-dark)" } }, body), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement(Button, { variant: "primary", href: buttonHref }, buttonLabel)))));
  }
  var uid = 0;
  function FormInput({ label = "Nombre", type = "text", required = true, placeholder = "", id, name }) {
    const [auto] = (0, import_react.useState)(() => "sw-f" + ++uid);
    const fid = id || auto;
    return /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8, font: "400 16px/1.2 var(--font-sans)" } }, /* @__PURE__ */ import_react.default.createElement("label", { htmlFor: fid, style: { font: "700 16px/1.2 var(--font-sans)", color: "var(--heading)" } }, label, required && /* @__PURE__ */ import_react.default.createElement("span", { style: { color: "var(--primary)" }, "aria-hidden": "true" }, " *")), type === "textarea" ? /* @__PURE__ */ import_react.default.createElement("textarea", { id: fid, name, className: "sw-input", placeholder, required, rows: 4, style: { padding: "10px 14px", resize: "vertical" } }) : /* @__PURE__ */ import_react.default.createElement("input", { id: fid, name, className: "sw-input", type, placeholder, required, style: { height: "var(--space-form-field-height)", padding: "0 14px" } }));
  }
  function FormSubmitButton({ label = "Enviar", disabled = false }) {
    return /* @__PURE__ */ import_react.default.createElement("button", { type: "submit", className: "sw-btn sw-btn--submit", disabled }, label);
  }
  var COLUMNS = [
    { title: "Marketing Digital", links: ["Social Media Marketing", "Marketing de Influencers", "Dise\xF1o y Desarrollo Web", "Consultor\xEDa de Marketing Digital"] },
    { title: "Transformaci\xF3n Digital", links: ["Consultor\xEDa de Transformaci\xF3n Digital", "Consultor\xEDa e Implementaci\xF3n de CRM"] },
    { title: "Comunicaci\xF3n", links: ["Comunicaci\xF3n Corporativa", "Organizaci\xF3n de Eventos Corporativos", "Relaciones P\xFAblicas"] }
  ];
  function Footer({ logo, logoAlt = "SWIITCH" }) {
    const row = { display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, lineHeight: 1.6, color: "var(--body-on-dark)" };
    const label = { fontSize: 12, fontWeight: 700, color: "var(--body-on-dark)", textTransform: "uppercase", marginBottom: 6 };
    return /* @__PURE__ */ import_react.default.createElement("footer", { className: "sw-on-dark", style: { background: "var(--surface-footer)", color: "var(--body-on-dark)", padding: "64px 5% 32px", font: "400 13px/1.6 var(--font-sans)" } }, /* @__PURE__ */ import_react.default.createElement("div", { className: "sw-footer__grid" }, /* @__PURE__ */ import_react.default.createElement("div", null, logo ? /* @__PURE__ */ import_react.default.createElement("img", { src: logo, alt: logoAlt, style: { display: "block", height: 40, width: "auto", marginBottom: 20 } }) : /* @__PURE__ */ import_react.default.createElement("div", { style: { font: "400 22px/1 var(--font-display)", color: "var(--primary)", marginBottom: 20 } }, "SWIITCH"), /* @__PURE__ */ import_react.default.createElement("div", { style: label }, "Bolivia"), /* @__PURE__ */ import_react.default.createElement("div", { style: { ...row, marginBottom: 12 } }, /* @__PURE__ */ import_react.default.createElement(Icon, { name: "map-pin", size: 15, color: "var(--primary)", style: { marginTop: 3, flexShrink: 0 } }), "Manzana 40 Piso 9, Torre 2, Santa Cruz de la Sierra, Bolivia"), /* @__PURE__ */ import_react.default.createElement("div", { style: { ...row, alignItems: "center", marginBottom: 20 } }, /* @__PURE__ */ import_react.default.createElement(Icon, { name: "phone", size: 15, color: "var(--primary)" }), " (+591) 755 30006"), /* @__PURE__ */ import_react.default.createElement("div", { style: label }, "USA"), /* @__PURE__ */ import_react.default.createElement("div", { style: { ...row, marginBottom: 20 } }, /* @__PURE__ */ import_react.default.createElement(Icon, { name: "map-pin", size: 15, color: "var(--primary)", style: { marginTop: 3, flexShrink: 0 } }), "1900 N Bayshore Dr, Miami, FL 33132, USA"), /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", gap: 14 } }, ["facebook", "instagram", "linkedin", "tiktok"].map((n) => /* @__PURE__ */ import_react.default.createElement("a", { key: n, href: "#", className: "sw-social", "aria-label": n }, /* @__PURE__ */ import_react.default.createElement(SocialIcon, { network: n, size: 18, color: "currentColor" }))))), COLUMNS.map((col) => /* @__PURE__ */ import_react.default.createElement("div", { key: col.title }, /* @__PURE__ */ import_react.default.createElement("div", { style: { font: "700 19px/1.6 var(--font-sans)", color: "var(--body-on-dark)", margin: "0 0 16px" } }, col.title), col.links.map((l) => /* @__PURE__ */ import_react.default.createElement("a", { key: l, href: "#", className: "sw-link-dark" }, l))))), /* @__PURE__ */ import_react.default.createElement("div", { style: { marginTop: 40, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.1)", fontSize: 12, color: "rgba(255,255,255,0.6)" } }, "\xA9 2026 SWIITCH."));
  }
  function WhatsAppButton({ href = "#", tooltip = "\xBFNecesitas ayuda? Conversemos" }) {
    return /* @__PURE__ */ import_react.default.createElement("a", { className: "sw-fab", href, title: tooltip, "aria-label": tooltip }, /* @__PURE__ */ import_react.default.createElement(SocialIcon, { network: "whatsapp", size: 28, color: "currentColor" }));
  }
  var TONE = { good: "var(--delta-good)", bad: "var(--delta-bad)", neutral: "var(--muted)" };
  function Delta({ value, direction = "up", tone = "good", label }) {
    const col = TONE[tone] || TONE.neutral;
    const words = direction === "up" ? "sube" : direction === "down" ? "baja" : "sin cambio";
    return /* @__PURE__ */ import_react.default.createElement("span", { style: { display: "inline-flex", alignItems: "center", gap: 4, font: "700 11px/1.2 var(--font-sans)", color: col, whiteSpace: "nowrap" } }, direction === "flat" ? /* @__PURE__ */ import_react.default.createElement("span", { "aria-hidden": "true" }, "\u2013") : /* @__PURE__ */ import_react.default.createElement("svg", { width: "8", height: "8", viewBox: "0 0 8 8", "aria-hidden": "true", fill: col }, direction === "up" ? /* @__PURE__ */ import_react.default.createElement("polygon", { points: "4,0.5 7.5,7 0.5,7" }) : /* @__PURE__ */ import_react.default.createElement("polygon", { points: "0.5,1 7.5,1 4,7.5" })), value, /* @__PURE__ */ import_react.default.createElement("span", { style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" } }, label ? label + " " : "", words));
  }
  function KpiCard({ label = "Inversi\xF3n", value = "$240,00", deltas = [] }) {
    return /* @__PURE__ */ import_react.default.createElement("div", { style: { background: "var(--surface)", borderRadius: "var(--radius-sm)", padding: "14px 16px", display: "flex", flexDirection: "column", gap: 6, minWidth: 0 } }, /* @__PURE__ */ import_react.default.createElement("div", { className: "sw-rlabel" }, label), /* @__PURE__ */ import_react.default.createElement("div", { style: { font: "700 32px/1.1 var(--font-sans)", color: "var(--ink)" } }, value), deltas.length > 0 && /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", gap: 20, borderTop: "1px solid var(--hairline-soft)", paddingTop: 8, marginTop: 4 } }, deltas.map((d) => /* @__PURE__ */ import_react.default.createElement("div", { key: d.label, style: { display: "flex", flexDirection: "column", gap: 2 } }, /* @__PURE__ */ import_react.default.createElement("span", { className: "sw-rlabel", style: { fontWeight: 400 } }, d.label), /* @__PURE__ */ import_react.default.createElement(Delta, { value: d.value, direction: d.direction, tone: d.tone, label: d.label })))));
  }
  function ReportHeader({ title = "Pauta en TikTok", eyebrow = "Reporte mensual", subtitle, period = "Septiembre 2026", comparison, page, total, logo, logoAlt = "SWIITCH" }) {
    const pad = (n) => n == null ? "" : String(n).padStart(2, "0");
    return /* @__PURE__ */ import_react.default.createElement("header", { style: { display: "flex", alignItems: "center", gap: 20, background: "var(--surface)", padding: "16px 24px" } }, logo ? /* @__PURE__ */ import_react.default.createElement("img", { src: logo, alt: logoAlt, style: { height: 22, width: "auto", display: "block" } }) : /* @__PURE__ */ import_react.default.createElement("span", { style: { font: "400 20px/1 var(--font-display)", color: "var(--primary)" } }, "SWIITCH"), /* @__PURE__ */ import_react.default.createElement("span", { "aria-hidden": "true", style: { alignSelf: "stretch", width: 1, background: "var(--hairline-soft)" } }), /* @__PURE__ */ import_react.default.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ import_react.default.createElement("div", { className: "sw-rlabel", style: { fontWeight: 400 } }, eyebrow), /* @__PURE__ */ import_react.default.createElement("h1", { style: { margin: "2px 0 0", font: "700 22px/1.2 var(--font-sans)", color: "var(--heading)" } }, title), subtitle && /* @__PURE__ */ import_react.default.createElement("div", { style: { font: "400 12px/1.4 var(--font-sans)", color: "var(--muted)", marginTop: 2 } }, subtitle)), /* @__PURE__ */ import_react.default.createElement("div", { style: { textAlign: "right" } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { font: "700 12px/1.3 var(--font-sans)", color: "var(--heading)" } }, period), comparison && /* @__PURE__ */ import_react.default.createElement("div", { style: { font: "400 11px/1.3 var(--font-sans)", color: "var(--muted)" } }, comparison)), page != null && /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("span", { "aria-hidden": "true", style: { alignSelf: "stretch", width: 1, background: "var(--hairline-soft)" } }), /* @__PURE__ */ import_react.default.createElement("div", { style: { font: "400 11px/1 var(--font-sans)", color: "var(--muted)", whiteSpace: "nowrap" } }, /* @__PURE__ */ import_react.default.createElement("span", { style: { font: "700 22px/1 var(--font-sans)", color: "var(--primary)" } }, pad(page)), total != null ? " / " + pad(total) : "")));
  }
  function InsightPanel({ label = "Lectura", figure, highlight, children }) {
    return /* @__PURE__ */ import_react.default.createElement("aside", { style: { background: "var(--panel)", borderRadius: "var(--radius-sm)", padding: "14px 16px", display: "flex", flexDirection: "column", gap: 6 } }, /* @__PURE__ */ import_react.default.createElement("div", { className: "sw-rlabel" }, label), figure && /* @__PURE__ */ import_react.default.createElement("div", { style: { font: "700 36px/1.1 var(--font-sans)", color: "var(--primary-active)" } }, figure), highlight && /* @__PURE__ */ import_react.default.createElement("div", { style: { font: "700 13px/1.5 var(--font-sans)", color: "var(--heading)" } }, highlight), children && /* @__PURE__ */ import_react.default.createElement("div", { style: { font: "400 12px/1.6 var(--font-sans)", color: "var(--muted)" } }, children));
  }
  function Pill({ children, tone = "neutral" }) {
    const t = {
      primary: { background: "var(--primary-active)", color: "var(--on-primary)", border: "1px solid var(--primary-active)" },
      neutral: { background: "var(--panel)", color: "var(--heading)", border: "1px solid var(--panel)" },
      outline: { background: "var(--surface)", color: "var(--primary-active)", border: "1px solid var(--primary-active)" },
      white: { background: "var(--surface)", color: "var(--heading)", border: "1px solid var(--surface)" }
    }[tone];
    return /* @__PURE__ */ import_react.default.createElement("span", { style: { display: "inline-block", borderRadius: "var(--radius-full)", padding: "2px 10px", font: "700 10px/1.5 var(--font-sans)", whiteSpace: "nowrap", ...t } }, children);
  }
  function BarMeter({ label, display, percent = 0, tone = "mid", note }) {
    const fill = { primary: "var(--primary)", dark: "var(--chart-dark)", mid: "var(--chart-mid)" }[tone];
    const p = Math.max(0, Math.min(100, percent));
    return /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "150px 1fr 70px 40px", alignItems: "center", gap: 12, font: "400 12px/1.3 var(--font-sans)", color: "var(--heading)" } }, /* @__PURE__ */ import_react.default.createElement("span", null, label), /* @__PURE__ */ import_react.default.createElement("div", { role: "meter", "aria-label": label, "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": p, style: { height: 8, borderRadius: "var(--radius-full)", background: "var(--chart-track)", overflow: "hidden" } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { width: p + "%", height: "100%", background: fill } })), /* @__PURE__ */ import_react.default.createElement("span", { style: { font: "700 12px/1.3 var(--font-sans)", textAlign: "right" } }, display), /* @__PURE__ */ import_react.default.createElement("span", { style: { color: "var(--muted)", textAlign: "right" } }, note));
  }
  function FunnelStep({ label, value, width = 100, tone = "panel", note }) {
    const bg = { panel: "var(--panel)", mid: "var(--chart-track)", primary: "var(--primary)" }[tone];
    const fg = tone === "primary" ? "var(--ink)" : "var(--heading)";
    return /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 4 } }, note && /* @__PURE__ */ import_react.default.createElement("div", { style: { font: "400 10px/1.2 var(--font-sans)", color: "var(--muted)" } }, note), /* @__PURE__ */ import_react.default.createElement("div", { style: { width: width + "%", background: bg, color: fg, borderRadius: "var(--radius-xs)", padding: "8px 12px", display: "flex", justifyContent: "space-between", font: "700 12px/1.3 var(--font-sans)", boxSizing: "border-box" } }, /* @__PURE__ */ import_react.default.createElement("span", null, label), /* @__PURE__ */ import_react.default.createElement("span", null, value)));
  }
  function AdCard({ image, rank = 1, format = "Video", title = "C\xF3mo hablar en familia sobre la previsi\xF3n", metrics = [], action, actionTone = "primary" }) {
    return /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6, minWidth: 0 } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { position: "relative", aspectRatio: "9 / 14", borderRadius: "var(--radius-sm)", overflow: "hidden", background: image ? "url(" + image + ") center / cover" : "var(--chart-track)" } }, /* @__PURE__ */ import_react.default.createElement("span", { style: { position: "absolute", top: 8, left: 8, width: 22, height: 22, borderRadius: "var(--radius-full)", display: "inline-flex", alignItems: "center", justifyContent: "center", font: "700 11px/1 var(--font-sans)", background: rank === 1 ? "var(--primary-active)" : "var(--chart-dark)", color: "var(--on-primary)" } }, rank), /* @__PURE__ */ import_react.default.createElement("span", { style: { position: "absolute", top: 8, right: 8 } }, /* @__PURE__ */ import_react.default.createElement(Pill, { tone: "white" }, format))), /* @__PURE__ */ import_react.default.createElement("div", { style: { font: "700 11px/1.4 var(--font-sans)", color: "var(--heading)" } }, title), /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", gap: 16 } }, metrics.map((m) => /* @__PURE__ */ import_react.default.createElement("div", { key: m.label, style: { display: "flex", flexDirection: "column" } }, /* @__PURE__ */ import_react.default.createElement("span", { className: "sw-rlabel", style: { fontWeight: 400 } }, m.label), /* @__PURE__ */ import_react.default.createElement("span", { style: { font: "700 14px/1.3 var(--font-sans)", color: "var(--ink)" } }, m.value)))), action && /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement(Pill, { tone: actionTone }, action)));
  }
  function ReportTable({ columns = [], rows = [] }) {
    return /* @__PURE__ */ import_react.default.createElement("table", { style: { width: "100%", borderCollapse: "collapse", font: "400 12px/1.4 var(--font-sans)", color: "var(--heading)" } }, /* @__PURE__ */ import_react.default.createElement("thead", null, /* @__PURE__ */ import_react.default.createElement("tr", null, columns.map((c) => /* @__PURE__ */ import_react.default.createElement("th", { key: c.key, scope: "col", className: "sw-rlabel", style: { textAlign: c.align || "left", padding: "4px 8px", borderBottom: "2px solid var(--heading)" } }, c.label)))), /* @__PURE__ */ import_react.default.createElement("tbody", null, rows.map((r, i) => /* @__PURE__ */ import_react.default.createElement("tr", { key: i, style: { borderBottom: "1px solid var(--hairline-soft)" } }, columns.map((c, j) => /* @__PURE__ */ import_react.default.createElement("td", { key: c.key, style: { textAlign: c.align || "left", padding: "9px 8px", fontWeight: j === 0 || r._strong ? 700 : 400, color: "var(--heading)" } }, r[c.key]))))));
  }
  if (typeof window !== "undefined") {
    window.Swiitch = { Button, NavBar, ServiceTile, MethodologyIconBlock, PortraitImage, SectionSurfaceLight, SectionCTAPhoto, FormInput, FormSubmitButton, Footer, WhatsAppButton, Icon, SocialIcon, Delta, KpiCard, ReportHeader, InsightPanel, Pill, BarMeter, FunnelStep, AdCard, ReportTable };
  }
})();
