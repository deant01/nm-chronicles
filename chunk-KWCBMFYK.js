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
  DomSanitizer,
  RouterLink,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-772GF5FN.js";

// src/app/layout/shared-components/prequal/prequal.ts
var _c0 = () => ["/prequel"];
function Prequal_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.iframeSrc(), \u0275\u0275sanitizeResourceUrl)("title", ctx_r0.content.iframeTitle);
  }
}
function Prequal_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "img", 12);
    \u0275\u0275elementStart(1, "button", 13);
    \u0275\u0275listener("click", function Prequal_Conditional_16_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadPlayer());
    });
    \u0275\u0275elementStart(2, "div", 14);
    \u0275\u0275text(3, "\u25B6");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.assetUrl("assets/images/youtube-placeholder.webp"), \u0275\u0275sanitizeUrl)("alt", ctx_r0.content.iframeTitle);
  }
}
var Prequal = class _Prequal {
  contentService = inject(ContentService);
  sanitizer = inject(DomSanitizer);
  content = this.contentService.getHomeContent().prequal;
  isPlayerReady = signal(
    false,
    ...ngDevMode ? [{ debugName: "isPlayerReady" }] : (
      /* istanbul ignore next */
      []
    )
  );
  iframeSrc = signal(
    null,
    ...ngDevMode ? [{ debugName: "iframeSrc" }] : (
      /* istanbul ignore next */
      []
    )
  );
  envConfig = inject(APP_ENVIRONMENT_CONFIG);
  assetUrl = (path) => buildAssetUrl(this.envConfig.assetBasePath, path);
  loadPlayer() {
    if (!this.isPlayerReady()) {
      this.iframeSrc.set(this.sanitizer.bypassSecurityTrustResourceUrl(this.content.iframeSrc));
      this.isPlayerReady.set(true);
    }
  }
  static \u0275fac = function Prequal_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Prequal)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Prequal, selectors: [["app-prequal"]], decls: 21, vars: 10, consts: [["id", "listen", "appScrollReveal", "is-visible", 1, "listen-section", "fade-up-section"], [1, "listen-inner"], [1, "section-label"], [1, "section-title"], [1, "ornament"], [1, "ornament-line"], [1, "ornament-diamond"], [1, "section-lead"], [1, "yt-embed"], ["data-site-link", "youtube-embed", "allow", "autoplay", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", "", "loading", "lazy", 3, "src", "title"], ["data-site-link", "youtube", "target", "_blank", "rel", "noopener noreferrer", 1, "yt-link", 3, "href"], ["data-site-link", "youtube", 1, "yt-link", 3, "routerLink"], ["width", "100%", "height", "100%", "loading", "lazy", 3, "src", "alt"], ["type", "button", "aria-label", "Load trailer video", 1, "yt-load-button", 3, "click"], [1, "yt-load-icon"]], template: function Prequal_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "p", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h2", 3);
      \u0275\u0275text(5);
      \u0275\u0275element(6, "br");
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 4);
      \u0275\u0275element(9, "div", 5)(10, "div", 6)(11, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 7);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 8);
      \u0275\u0275conditionalCreate(15, Prequal_Conditional_15_Template, 1, 2, "iframe", 9)(16, Prequal_Conditional_16_Template, 4, 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "a", 10);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "a", 11);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.content.label);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.content.titleLine1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.content.titleLine2);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.content.lead);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isPlayerReady() ? 15 : 16);
      \u0275\u0275advance(2);
      \u0275\u0275property("href", ctx.content.linkHref, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.content.linkText);
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c0));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.content.ctaPrequal);
    }
  }, dependencies: [ScrollRevealDirective, RouterLink], styles: ['\n.listen-section[_ngcontent-%COMP%] {\n  text-align: center;\n  background:\n    linear-gradient(\n      to bottom,\n      var(--bg-deep),\n      #100A08,\n      var(--bg-deep));\n  border-top: 1px solid var(--border);\n  border-bottom: 1px solid var(--border);\n}\n.listen-inner[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 auto;\n}\n.yt-embed[_ngcontent-%COMP%] {\n  margin: 2.5rem auto;\n  position: relative;\n  height: 395px;\n  overflow: hidden;\n  border: 1px solid var(--border);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8), 0 0 0 1px var(--gold-dim);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.yt-embed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  position: absolute;\n  z-index: -1;\n}\n.yt-embed[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.yt-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-family: "Cinzel", serif;\n  font-size: 11px;\n  letter-spacing: 3px;\n  color: var(--gold);\n  border: 1px solid var(--gold-dim);\n  padding: 12px 28px;\n  text-decoration: none;\n  text-transform: uppercase;\n  transition: all 0.3s;\n}\n.yt-link[_ngcontent-%COMP%]:hover {\n  background: rgba(201, 168, 76, 0.1);\n}\n.yt-load-button[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-family: "Cinzel", serif;\n  font-size: 15px;\n  letter-spacing: 3px;\n  color: var(--gold);\n  border: 1px solid var(--crimson);\n  background: var(--crimson);\n  padding: 12px 28px;\n  border-radius: 4px;\n  transition: all 0.3s;\n  margin: auto;\n}\n/*# sourceMappingURL=prequal-KYQ4MYPJ.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Prequal, [{
    type: Component,
    args: [{ selector: "app-prequal", imports: [ScrollRevealDirective, RouterLink], template: `<section id="listen" class="listen-section fade-up-section" appScrollReveal="is-visible">\r
  <div class="listen-inner">\r
    <p class="section-label">{{ content.label }}</p>\r
    <h2 class="section-title">{{ content.titleLine1 }}<br>{{ content.titleLine2 }}</h2>\r
    <div class="ornament"><div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line"></div></div>\r
    <p class="section-lead">{{ content.lead }}</p>\r
    <div class="yt-embed">\r
      @if (isPlayerReady()) {\r
        <iframe data-site-link="youtube-embed" allow="autoplay" [src]="iframeSrc()" [title]="content.iframeTitle" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>\r
      } @else {\r
        <img [src]="assetUrl('assets/images/youtube-placeholder.webp')" [alt]="content.iframeTitle" width="100%" height="100%" loading="lazy">\r
        <button type="button" class="yt-load-button" (click)="loadPlayer()" aria-label="Load trailer video">\r
          <div class="yt-load-icon">\u25B6</div>\r
        </button>\r
      }\r
    </div>\r
    <a [href]="content.linkHref" data-site-link="youtube" target="_blank" rel="noopener noreferrer" class="yt-link">{{ content.linkText }}</a>\r
    <a [routerLink]="['/prequel']" data-site-link="youtube" class="yt-link">{{ content.ctaPrequal }}</a>\r
  \r
  </div>\r
</section>`, styles: ['/* src/app/layout/shared-components/prequal/prequal.scss */\n.listen-section {\n  text-align: center;\n  background:\n    linear-gradient(\n      to bottom,\n      var(--bg-deep),\n      #100A08,\n      var(--bg-deep));\n  border-top: 1px solid var(--border);\n  border-bottom: 1px solid var(--border);\n}\n.listen-inner {\n  max-width: 700px;\n  margin: 0 auto;\n}\n.yt-embed {\n  margin: 2.5rem auto;\n  position: relative;\n  height: 395px;\n  overflow: hidden;\n  border: 1px solid var(--border);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8), 0 0 0 1px var(--gold-dim);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.yt-embed img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  position: absolute;\n  z-index: -1;\n}\n.yt-embed iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.yt-link {\n  display: inline-block;\n  font-family: "Cinzel", serif;\n  font-size: 11px;\n  letter-spacing: 3px;\n  color: var(--gold);\n  border: 1px solid var(--gold-dim);\n  padding: 12px 28px;\n  text-decoration: none;\n  text-transform: uppercase;\n  transition: all 0.3s;\n}\n.yt-link:hover {\n  background: rgba(201, 168, 76, 0.1);\n}\n.yt-load-button {\n  display: inline-block;\n  font-family: "Cinzel", serif;\n  font-size: 15px;\n  letter-spacing: 3px;\n  color: var(--gold);\n  border: 1px solid var(--crimson);\n  background: var(--crimson);\n  padding: 12px 28px;\n  border-radius: 4px;\n  transition: all 0.3s;\n  margin: auto;\n}\n/*# sourceMappingURL=prequal-KYQ4MYPJ.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Prequal, { className: "Prequal", filePath: "src/app/layout/shared-components/prequal/prequal.ts", lineNumber: 14 });
})();
export {
  Prequal
};
//# sourceMappingURL=chunk-KWCBMFYK.js.map
