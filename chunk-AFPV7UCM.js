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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-772GF5FN.js";

// src/app/layout/shared-components/quotations/quotations.ts
var _forTrack0 = ($index, $item) => $item.text;
function Quotations_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "blockquote", 7)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "cite");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const quote_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(quote_r1.text);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(quote_r1.cite);
  }
}
var Quotations = class _Quotations {
  contentService = inject(ContentService);
  content = this.contentService.getHomeContent().quotations;
  static \u0275fac = function Quotations_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Quotations)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Quotations, selectors: [["app-quotations"]], decls: 12, vars: 2, consts: [["id", "quotes", "appScrollReveal", "is-visible", 1, "quotes-section", "fade-up-section"], [1, "quotes-inner"], [1, "section-label"], [1, "section-title"], [1, "ornament"], [1, "ornament-line"], [1, "ornament-diamond"], [1, "pull-quote"]], template: function Quotations_Template(rf, ctx) {
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
      \u0275\u0275repeaterCreate(10, Quotations_For_11_Template, 5, 2, "blockquote", 7, _forTrack0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.content.label);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.content.title);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.content.quotes);
    }
  }, dependencies: [ScrollRevealDirective], styles: ['\n.quotes-section[_ngcontent-%COMP%] {\n  background: var(--bg-deep);\n  text-align: center;\n}\n.quotes-inner[_ngcontent-%COMP%] {\n  max-width: 820px;\n  margin: 0 auto;\n}\n.pull-quote[_ngcontent-%COMP%] {\n  margin: 2.5rem 0;\n  position: relative;\n  padding: 0 1rem;\n}\n.pull-quote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: "Crimson Text", serif;\n  font-style: italic;\n  font-size: clamp(1.1rem, 1.8vw, 1.4rem);\n  color: var(--text);\n  line-height: 1.6;\n}\n.pull-quote[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.85rem;\n  font-family: "Cinzel", serif;\n  font-style: normal;\n  font-size: 11px;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  color: var(--gold-light);\n}\n/*# sourceMappingURL=quotations-PT3FPD7V.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Quotations, [{
    type: Component,
    args: [{ selector: "app-quotations", imports: [ScrollRevealDirective], template: '<section id="quotes" class="quotes-section fade-up-section" appScrollReveal="is-visible">\r\n  <div class="quotes-inner">\r\n    <p class="section-label">{{ content.label }}</p>\r\n    <h2 class="section-title">{{ content.title }}</h2>\r\n    <div class="ornament"><div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line"></div></div>\r\n      @for (quote of content.quotes; track quote.text) {\r\n      <blockquote class="pull-quote">\r\n        <p>{{ quote.text }}</p>\r\n        <cite>{{ quote.cite }}</cite>\r\n      </blockquote>\r\n      }\r\n  </div>\r\n</section>', styles: ['/* src/app/layout/shared-components/quotations/quotations.scss */\n.quotes-section {\n  background: var(--bg-deep);\n  text-align: center;\n}\n.quotes-inner {\n  max-width: 820px;\n  margin: 0 auto;\n}\n.pull-quote {\n  margin: 2.5rem 0;\n  position: relative;\n  padding: 0 1rem;\n}\n.pull-quote p {\n  font-family: "Crimson Text", serif;\n  font-style: italic;\n  font-size: clamp(1.1rem, 1.8vw, 1.4rem);\n  color: var(--text);\n  line-height: 1.6;\n}\n.pull-quote cite {\n  display: block;\n  margin-top: 0.85rem;\n  font-family: "Cinzel", serif;\n  font-style: normal;\n  font-size: 11px;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  color: var(--gold-light);\n}\n/*# sourceMappingURL=quotations-PT3FPD7V.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Quotations, { className: "Quotations", filePath: "src/app/layout/shared-components/quotations/quotations.ts", lineNumber: 11 });
})();
export {
  Quotations
};
//# sourceMappingURL=chunk-AFPV7UCM.js.map
