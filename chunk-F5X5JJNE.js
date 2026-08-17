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
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-772GF5FN.js";

// src/app/layout/shared-components/about/about.ts
function _forTrack0($index, $item) {
  return this.content.paragraphs.indexOf($item);
}
function _forTrack1($index, $item) {
  return this.content.stats.indexOf($item);
}
function About_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p", 6);
  }
  if (rf & 2) {
    const paragraph_r1 = ctx.$implicit;
    \u0275\u0275property("innerHTML", paragraph_r1, \u0275\u0275sanitizeHtml);
  }
}
function About_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r2.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r2.label);
  }
}
var About = class _About {
  contentService = inject(ContentService);
  content = this.contentService.getHomeContent().about;
  envConfig = inject(APP_ENVIRONMENT_CONFIG);
  assetUrl = (path) => buildAssetUrl(this.envConfig.assetBasePath, path);
  static \u0275fac = function About_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _About)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _About, selectors: [["app-about"]], decls: 17, vars: 6, consts: [["id", "about", "appScrollReveal", "is-visible", 1, "fade-up-section"], [1, "about"], [1, "about-text"], [1, "section-label"], [1, "section-title"], [1, "divider"], [3, "innerHTML"], [1, "stat-grid"], [1, "stat"], [1, "about-img-wrap"], ["width", "4829", "height", "3269", "decoding", "async", "sizes", "(max-width: 900px) 100vw, 387px", 3, "src", "alt"], [1, "stat-num"], [1, "stat-label"]], template: function About_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 4);
      \u0275\u0275text(6);
      \u0275\u0275element(7, "br");
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "div", 5);
      \u0275\u0275repeaterCreate(10, About_For_11_Template, 1, 1, "p", 6, _forTrack0, true);
      \u0275\u0275elementStart(12, "div", 7);
      \u0275\u0275repeaterCreate(13, About_For_14_Template, 5, 2, "div", 8, _forTrack1, true);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 9);
      \u0275\u0275element(16, "img", 10);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.content.label);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.content.titleLine1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.content.titleLine2);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.content.paragraphs);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.content.stats);
      \u0275\u0275advance(3);
      \u0275\u0275property("src", ctx.assetUrl(ctx.content.image?.src || ""), \u0275\u0275sanitizeUrl)("alt", ctx.content.image?.alt || "");
      \u0275\u0275attribute("srcset", ctx.assetUrl(ctx.content.image?.src || "") + " 1x");
    }
  }, dependencies: [ScrollRevealDirective], styles: ['\n.about[_ngcontent-%COMP%] {\n  background: var(--bg-section);\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 5rem;\n  align-items: center;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.about-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text);\n  margin-bottom: 1.2rem;\n  font-size: 1.05rem;\n}\n.about-img-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: 1px solid var(--border);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);\n}\n.about-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  filter: brightness(0.9);\n}\n.stat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n  margin-top: 2rem;\n}\n.stat[_ngcontent-%COMP%] {\n  border-left: 2px solid var(--gold-dim);\n  padding-left: 1rem;\n}\n.stat-num[_ngcontent-%COMP%] {\n  font-family: "Cinzel", serif;\n  font-size: 2rem;\n  color: var(--gold);\n  line-height: 1;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-dim);\n  letter-spacing: 1px;\n}\n@media (max-width: 900px) {\n  .about[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n  .about-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 100vh;\n    object-position: 0% 10%;\n  }\n}\n/*# sourceMappingURL=about-HEWMVCG6.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(About, [{
    type: Component,
    args: [{ selector: "app-about", imports: [ScrollRevealDirective], template: `<section id="about" class="fade-up-section" appScrollReveal="is-visible">\r
  <div class="about">\r
    <div class="about-text">\r
      <p class="section-label">{{ content.label }}</p>\r
      <h2 class="section-title">{{ content.titleLine1 }}<br>{{ content.titleLine2 }}</h2>\r
      <div class="divider"></div>\r
      @for (paragraph of content.paragraphs; track content.paragraphs.indexOf(paragraph)) {\r
        <p [innerHTML]="paragraph"></p>\r
      }\r
      <div class="stat-grid">\r
        @for (stat of content.stats; track content.stats.indexOf(stat)) {\r
          <div class="stat">\r
            <div class="stat-num">{{ stat.value }}</div>\r
            <div class="stat-label">{{ stat.label }}</div>\r
          </div>\r
        }\r
      </div>\r
    </div>\r
    <div class="about-img-wrap">\r
      <img [src]="assetUrl(content.image?.src || '')" [alt]="content.image?.alt || ''" width="4829" height="3269" decoding="async"\r
        [attr.srcset]="assetUrl(content.image?.src || '') + ' 1x'"\r
        sizes="(max-width: 900px) 100vw, 387px">\r
    </div>\r
  </div>\r
</section>`, styles: ['/* src/app/layout/shared-components/about/about.scss */\n.about {\n  background: var(--bg-section);\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 5rem;\n  align-items: center;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.about-text p {\n  color: var(--text);\n  margin-bottom: 1.2rem;\n  font-size: 1.05rem;\n}\n.about-img-wrap {\n  width: 100%;\n  height: 100%;\n  border: 1px solid var(--border);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);\n}\n.about-img-wrap img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  filter: brightness(0.9);\n}\n.stat-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n  margin-top: 2rem;\n}\n.stat {\n  border-left: 2px solid var(--gold-dim);\n  padding-left: 1rem;\n}\n.stat-num {\n  font-family: "Cinzel", serif;\n  font-size: 2rem;\n  color: var(--gold);\n  line-height: 1;\n}\n.stat-label {\n  font-size: 0.8rem;\n  color: var(--text-dim);\n  letter-spacing: 1px;\n}\n@media (max-width: 900px) {\n  .about {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n  .about-img-wrap img {\n    max-height: 100vh;\n    object-position: 0% 10%;\n  }\n}\n/*# sourceMappingURL=about-HEWMVCG6.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(About, { className: "About", filePath: "src/app/layout/shared-components/about/about.ts", lineNumber: 12 });
})();
export {
  About
};
//# sourceMappingURL=chunk-F5X5JJNE.js.map
