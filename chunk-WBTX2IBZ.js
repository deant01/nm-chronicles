import {
  APP_ENVIRONMENT_CONFIG,
  buildAssetUrl
} from "./chunk-R7LK4ESF.js";
import {
  ScrollRevealDirective
} from "./chunk-OHVM3CVC.js";
import {
  Component,
  ContentService,
  RouterLink,
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
  ɵɵpureFunction0,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-772GF5FN.js";

// src/app/layout/shared-components/city/city.ts
var _c0 = () => ["/city"];
var City = class _City {
  envConfig = inject(APP_ENVIRONMENT_CONFIG);
  contentService = inject(ContentService);
  content = this.contentService.getHomeContent().city;
  assetUrl = (path) => buildAssetUrl(this.envConfig.assetBasePath, path);
  static \u0275fac = function City_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _City)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _City, selectors: [["app-city"]], decls: 20, vars: 12, consts: [["id", "map", "appScrollReveal", "is-visible", 1, "map-section", "fade-up-section"], [1, "map-header"], [1, "section-label"], [1, "section-title"], [1, "ornament"], [1, "ornament-line"], [1, "ornament-diamond"], [1, "section-lead"], [1, "map-container"], [1, "map-link", 3, "routerLink"], ["loading", "lazy", "width", "100%", "height", "100%", 3, "src", "alt"], [1, "map-link-hint"], [1, "map-caption"], [1, "map-caption-link", 3, "routerLink"]], template: function City_Template(rf, ctx) {
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
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8)(13, "a", 9);
      \u0275\u0275element(14, "img", 10);
      \u0275\u0275elementStart(15, "span", 11);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "p", 12)(18, "a", 13);
      \u0275\u0275text(19);
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
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c0));
      \u0275\u0275attribute("aria-label", ctx.content.ariaLabel);
      \u0275\u0275advance();
      \u0275\u0275property("src", ctx.assetUrl("assets/images/map.webp"), \u0275\u0275sanitizeUrl)("alt", ctx.content.imageAlt);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.content.linkHint);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(11, _c0));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.content.captionText);
    }
  }, dependencies: [RouterLink, ScrollRevealDirective], styles: ['\n.map-section[_ngcontent-%COMP%] {\n  background: var(--bg-deep);\n  text-align: center;\n}\n.map-header[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto 3rem;\n}\n.map-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  position: relative;\n  border: 1px solid var(--border);\n  box-shadow: 0 0 60px rgba(0, 0, 0, 0.8), 0 0 0 1px var(--gold-dim);\n  overflow: hidden;\n}\n.map-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  transition: transform 0.4s ease;\n  cursor: pointer;\n}\n@media (hover: hover) {\n  .map-container[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n    transform: scale(1.02);\n  }\n}\n.map-caption[_ngcontent-%COMP%] {\n  font-family: "Cinzel", serif;\n  font-size: 11px;\n  letter-spacing: 4px;\n  color: var(--gold-light);\n  margin-top: 1.5rem;\n  text-transform: uppercase;\n}\n.map-link[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  cursor: pointer;\n}\n.map-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n.map-link-hint[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1.25rem;\n  right: 1.25rem;\n  font-family: "Cinzel", serif;\n  font-size: 11px;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  color: var(--gold-light);\n  background: rgba(8, 8, 8, 0.78);\n  border: 1px solid var(--gold-dim);\n  padding: 10px 18px;\n  opacity: 0;\n  transform: translateY(8px);\n  transition: opacity 0.35s ease, transform 0.35s ease;\n  pointer-events: none;\n}\n.map-container[_ngcontent-%COMP%]:hover   .map-link-hint[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.map-caption-link[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n.map-caption-link[_ngcontent-%COMP%]:hover {\n  color: var(--gold);\n}\n/*# sourceMappingURL=city-J7AJIPHC.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(City, [{
    type: Component,
    args: [{ selector: "app-city", imports: [RouterLink, ScrollRevealDirective], template: `<section id="map" class="map-section fade-up-section" appScrollReveal="is-visible">\r
  <div class="map-header">\r
    <p class="section-label">{{ content.label }}</p>\r
    <h2 class="section-title">{{ content.title }}</h2>\r
    <div class="ornament"><div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line"></div></div>\r
    <p class="section-lead">{{ content.lead }}</p>\r
  </div>\r
  <div class="map-container">\r
    <a [routerLink]="['/city']" class="map-link" [attr.aria-label]="content.ariaLabel">\r
      <img [src]="assetUrl('assets/images/map.webp')" [alt]="content.imageAlt" loading="lazy" width="100%" height="100%">\r
      <span class="map-link-hint">{{ content.linkHint }}</span>\r
    </a>\r
  </div>\r
  <p class="map-caption">\r
    <a [routerLink]="['/city']" class="map-caption-link">{{ content.captionText }}</a>\r
</p>\r
</section>`, styles: ['/* src/app/layout/shared-components/city/city.scss */\n.map-section {\n  background: var(--bg-deep);\n  text-align: center;\n}\n.map-header {\n  max-width: 600px;\n  margin: 0 auto 3rem;\n}\n.map-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  position: relative;\n  border: 1px solid var(--border);\n  box-shadow: 0 0 60px rgba(0, 0, 0, 0.8), 0 0 0 1px var(--gold-dim);\n  overflow: hidden;\n}\n.map-container img {\n  width: 100%;\n  display: block;\n  transition: transform 0.4s ease;\n  cursor: pointer;\n}\n@media (hover: hover) {\n  .map-container:hover img {\n    transform: scale(1.02);\n  }\n}\n.map-caption {\n  font-family: "Cinzel", serif;\n  font-size: 11px;\n  letter-spacing: 4px;\n  color: var(--gold-light);\n  margin-top: 1.5rem;\n  text-transform: uppercase;\n}\n.map-link {\n  display: block;\n  position: relative;\n  cursor: pointer;\n}\n.map-link img {\n  width: 100%;\n  display: block;\n}\n.map-link-hint {\n  position: absolute;\n  bottom: 1.25rem;\n  right: 1.25rem;\n  font-family: "Cinzel", serif;\n  font-size: 11px;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  color: var(--gold-light);\n  background: rgba(8, 8, 8, 0.78);\n  border: 1px solid var(--gold-dim);\n  padding: 10px 18px;\n  opacity: 0;\n  transform: translateY(8px);\n  transition: opacity 0.35s ease, transform 0.35s ease;\n  pointer-events: none;\n}\n.map-container:hover .map-link-hint {\n  opacity: 1;\n  transform: translateY(0);\n}\n.map-caption-link {\n  color: inherit;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n.map-caption-link:hover {\n  color: var(--gold);\n}\n/*# sourceMappingURL=city-J7AJIPHC.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(City, { className: "City", filePath: "src/app/layout/shared-components/city/city.ts", lineNumber: 13 });
})();
export {
  City
};
//# sourceMappingURL=chunk-WBTX2IBZ.js.map
