import {
  ScrollRevealDirective
} from "./chunk-OHVM3CVC.js";
import {
  Component,
  ContentService,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-772GF5FN.js";

// src/app/layout/shared-components/contacts/contacts.ts
function _forTrack0($index, $item) {
  return this.content.links.indexOf($item);
}
function Contacts_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9)(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    \u0275\u0275property("href", link_r1.href, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("data-site-link", link_r1.siteLink);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(link_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(link_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(link_r1.description);
  }
}
var Contacts = class _Contacts {
  contentService = inject(ContentService);
  content = this.contentService.getHomeContent().contacts;
  static \u0275fac = function Contacts_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Contacts)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Contacts, selectors: [["app-contacts"]], decls: 15, vars: 3, consts: [["id", "connect", "appScrollReveal", "is-visible", 1, "connect-section", "fade-up-section"], [1, "connect-inner"], [1, "section-label"], [1, "section-title"], [1, "ornament"], [1, "ornament-line"], [1, "ornament-diamond"], [1, "section-lead"], [1, "links-grid"], ["target", "_blank", "rel", "noopener noreferrer", 1, "link-card", 3, "href"], [1, "link-icon"], [1, "link-label"], [1, "link-desc"]], template: function Contacts_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "p", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h2", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 4);
      \u0275\u0275element(7, "div", 5)(8, "div", 6)(9, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 7);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 8);
      \u0275\u0275repeaterCreate(13, Contacts_For_14_Template, 8, 5, "a", 9, _forTrack0, true);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.content.label);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.content.title);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.content.lead);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.content.links);
    }
  }, dependencies: [ScrollRevealDirective], styles: ['\n.connect-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      to bottom,\n      var(--bg-deep),\n      #0D0804);\n  text-align: center;\n  border-top: 1px solid var(--border);\n}\n.connect-inner[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.links-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.5rem;\n  margin-top: 3rem;\n}\n.link-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.2rem;\n  padding: 1.5rem 2rem;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  text-decoration: none;\n  color: var(--text);\n  transition:\n    border-color 0.3s,\n    transform 0.2s,\n    background 0.3s;\n  position: relative;\n  overflow: hidden;\n}\n.link-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background: var(--gold-dim);\n  transition: background 0.3s;\n}\n@media (hover: hover) {\n  .link-card[_ngcontent-%COMP%]:hover {\n    border-color: var(--gold-dim);\n    transform: translateY(-2px);\n    background: #120E0A;\n  }\n  .link-card[_ngcontent-%COMP%]:hover::before {\n    background: var(--gold);\n  }\n}\n.link-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  flex-shrink: 0;\n}\n.link-label[_ngcontent-%COMP%] {\n  font-family: "Cinzel", serif;\n  font-size: 11px;\n  letter-spacing: 3px;\n  color: var(--gold);\n  text-transform: uppercase;\n  margin-bottom: 2px;\n  transition: color 0.3s;\n}\n@media (hover: hover) {\n  .link-card[_ngcontent-%COMP%]:hover   .link-label[_ngcontent-%COMP%] {\n    color: var(--gold-light);\n  }\n}\n.link-desc[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text);\n}\n@media (max-width: 900px) {\n  .links-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=contacts-E3PI7WJL.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Contacts, [{
    type: Component,
    args: [{ selector: "app-contacts", imports: [ScrollRevealDirective], template: '<section id="connect" class="connect-section fade-up-section" appScrollReveal="is-visible">\r\n  <div class="connect-inner">\r\n    <p class="section-label">{{ content.label }}</p>\r\n    <h2 class="section-title">{{ content.title }}</h2>\r\n    <div class="ornament"><div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line"></div></div>\r\n    <p class="section-lead">{{ content.lead }}</p>\r\n    <div class="links-grid">\r\n      @for (link of content.links; track content.links.indexOf(link)) {\r\n        <a [href]="link.href" [attr.data-site-link]="link.siteLink" target="_blank" rel="noopener noreferrer" class="link-card">\r\n          <div class="link-icon">{{ link.icon }}</div>\r\n          <div><div class="link-label">{{ link.label }}</div><div class="link-desc">{{ link.description }}</div></div>\r\n        </a>\r\n      }\r\n    </div>\r\n  </div>\r\n</section>\r\n', styles: ['/* src/app/layout/shared-components/contacts/contacts.scss */\n.connect-section {\n  background:\n    linear-gradient(\n      to bottom,\n      var(--bg-deep),\n      #0D0804);\n  text-align: center;\n  border-top: 1px solid var(--border);\n}\n.connect-inner {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.links-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.5rem;\n  margin-top: 3rem;\n}\n.link-card {\n  display: flex;\n  align-items: center;\n  gap: 1.2rem;\n  padding: 1.5rem 2rem;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  text-decoration: none;\n  color: var(--text);\n  transition:\n    border-color 0.3s,\n    transform 0.2s,\n    background 0.3s;\n  position: relative;\n  overflow: hidden;\n}\n.link-card::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background: var(--gold-dim);\n  transition: background 0.3s;\n}\n@media (hover: hover) {\n  .link-card:hover {\n    border-color: var(--gold-dim);\n    transform: translateY(-2px);\n    background: #120E0A;\n  }\n  .link-card:hover::before {\n    background: var(--gold);\n  }\n}\n.link-icon {\n  font-size: 1.8rem;\n  flex-shrink: 0;\n}\n.link-label {\n  font-family: "Cinzel", serif;\n  font-size: 11px;\n  letter-spacing: 3px;\n  color: var(--gold);\n  text-transform: uppercase;\n  margin-bottom: 2px;\n  transition: color 0.3s;\n}\n@media (hover: hover) {\n  .link-card:hover .link-label {\n    color: var(--gold-light);\n  }\n}\n.link-desc {\n  font-size: 0.9rem;\n  color: var(--text);\n}\n@media (max-width: 900px) {\n  .links-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=contacts-E3PI7WJL.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Contacts, { className: "Contacts", filePath: "src/app/layout/shared-components/contacts/contacts.ts", lineNumber: 11 });
})();

export {
  Contacts
};
//# sourceMappingURL=chunk-I63VF2NP.js.map
