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
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-772GF5FN.js";

// src/app/layout/shared-components/author/author.ts
var Author = class _Author {
  envConfig = inject(APP_ENVIRONMENT_CONFIG);
  contentService = inject(ContentService);
  content = this.contentService.getHomeContent().author;
  authorImageSrc = buildAssetUrl(this.envConfig.assetBasePath, "assets/images/architect.webp");
  static \u0275fac = function Author_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Author)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Author, selectors: [["app-author"]], decls: 12, vars: 7, consts: [["id", "author", "appScrollReveal", "is-visible", 1, "author-section", "fade-up-section"], [1, "author-grid"], [1, "about-img-wrap"], ["width", "10781", "height", "3289", 1, "desktop-image", 3, "src", "alt"], [1, "author-text"], [1, "section-label"], [1, "section-title"], [1, "divider"], ["width", "10781", "height", "3289", 1, "mobile-image", 3, "src", "alt"], [3, "innerHTML"]], template: function Author_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "p", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "div", 7)(10, "img", 8)(11, "p", 9);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("src", ctx.authorImageSrc, \u0275\u0275sanitizeUrl)("alt", ctx.content.imageAlt);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.content.label);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.content.title);
      \u0275\u0275advance(2);
      \u0275\u0275property("src", ctx.authorImageSrc, \u0275\u0275sanitizeUrl)("alt", ctx.content.imageAlt);
      \u0275\u0275advance();
      \u0275\u0275property("innerHTML", ctx.content.description, \u0275\u0275sanitizeHtml);
    }
  }, dependencies: [ScrollRevealDirective], styles: ["\n.author-section[_ngcontent-%COMP%] {\n  background: var(--bg-section);\n}\n.author-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 5rem;\n  align-items: top;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  max-height: 90vh;\n  object-fit: cover;\n  object-position: center;\n}\nimg.desktop-image[_ngcontent-%COMP%] {\n  display: block;\n}\nimg.mobile-image[_ngcontent-%COMP%] {\n  display: none;\n}\n.author-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text);\n  margin-bottom: 1.2rem;\n  font-size: 1.05rem;\n}\n.author-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: var(--gold);\n  font-style: italic;\n}\n@media (max-width: 900px) {\n  .author-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n  img.desktop-image[_ngcontent-%COMP%] {\n    display: none;\n  }\n  img.mobile-image[_ngcontent-%COMP%] {\n    display: block;\n    margin: 1.5rem 0;\n  }\n}\n/*# sourceMappingURL=author-74KKX6NT.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Author, [{
    type: Component,
    args: [{ selector: "app-author", imports: [ScrollRevealDirective], template: '<section id="author" class="author-section fade-up-section" appScrollReveal="is-visible">\r\n  <div class="author-grid">\r\n    <div class="about-img-wrap">\r\n      <img class="desktop-image" [src]="authorImageSrc" [alt]="content.imageAlt" width="10781" height="3289">\r\n    </div>\r\n    <div class="author-text">\r\n      <p class="section-label">{{ content.label }}</p>\r\n      <h2 class="section-title">{{ content.title }}</h2>\r\n      <div class="divider"></div>\r\n      <img class="mobile-image" [src]="authorImageSrc" [alt]="content.imageAlt" width="10781" height="3289">\r\n      <p [innerHTML]="content.description"></p>\r\n    </div>\r\n  </div>\r\n</section>', styles: ["/* src/app/layout/shared-components/author/author.scss */\n.author-section {\n  background: var(--bg-section);\n}\n.author-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 5rem;\n  align-items: top;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nimg {\n  width: 100%;\n  height: auto;\n  max-height: 90vh;\n  object-fit: cover;\n  object-position: center;\n}\nimg.desktop-image {\n  display: block;\n}\nimg.mobile-image {\n  display: none;\n}\n.author-text p {\n  color: var(--text);\n  margin-bottom: 1.2rem;\n  font-size: 1.05rem;\n}\n.author-text p em {\n  color: var(--gold);\n  font-style: italic;\n}\n@media (max-width: 900px) {\n  .author-grid {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n  img.desktop-image {\n    display: none;\n  }\n  img.mobile-image {\n    display: block;\n    margin: 1.5rem 0;\n  }\n}\n/*# sourceMappingURL=author-74KKX6NT.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Author, { className: "Author", filePath: "src/app/layout/shared-components/author/author.ts", lineNumber: 12 });
})();
export {
  Author
};
//# sourceMappingURL=chunk-IZ6KWBHM.js.map
