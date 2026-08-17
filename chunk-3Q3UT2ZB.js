import {
  SectionNavigation
} from "./chunk-7Q6JCIFX.js";
import {
  Contacts
} from "./chunk-I63VF2NP.js";
import {
  ViewChangeService
} from "./chunk-KZ3ZP3I5.js";
import {
  ScrollService
} from "./chunk-CRWAEVLV.js";
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
  NgComponentOutlet,
  Router,
  RouterLink,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreadContextLet,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-772GF5FN.js";

// src/app/layout/shared-components/hero/hero.ts
var _c0 = () => ["/prequel"];
var Hero = class _Hero {
  scrollService = inject(ScrollService);
  contentService = inject(ContentService);
  envConfig = inject(APP_ENVIRONMENT_CONFIG);
  content = this.contentService.getHomeContent().hero;
  assetUrl = (path) => buildAssetUrl(this.envConfig.assetBasePath, path);
  scrollTo(id) {
    this.scrollService.scrollTo(id);
  }
  static \u0275fac = function Hero_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Hero)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Hero, selectors: [["app-hero"]], decls: 21, vars: 13, consts: [["appScrollReveal", "is-visible", 1, "hero", "fade-up-section"], ["loading", "eager", "width", "6482", "height", "13541", "decoding", "async", "fetchpriority", "high", 1, "hero-bg", 3, "src", "alt"], [1, "hero-overlay"], [1, "hero-content"], [1, "hero-eyebrow"], [1, "hero-title"], [1, "hero-subtitle"], [1, "hero-cta", 3, "click"], [1, "hero-cta", 3, "routerLink"], [1, "scroll-hint", 3, "click"], ["width", "16", "height", "20", "viewBox", "0 0 16 20", "fill", "none", "stroke-width", "1.5"], ["d", "M8 2v12M3 11l5 5 5-5"]], template: function Hero_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275element(1, "img", 1)(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "p", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1", 5);
      \u0275\u0275text(7);
      \u0275\u0275element(8, "br");
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 6);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 7);
      \u0275\u0275listener("click", function Hero_Template_button_click_12_listener() {
        return ctx.scrollTo(ctx.content.ctaTarget);
      });
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "a", 8);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "button", 9);
      \u0275\u0275listener("click", function Hero_Template_button_click_16_listener() {
        return ctx.scrollTo(ctx.content.scrollTarget);
      });
      \u0275\u0275elementStart(17, "span");
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 10);
      \u0275\u0275element(20, "path", 11);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("src", ctx.assetUrl(ctx.content.heroImage.src), \u0275\u0275sanitizeUrl)("alt", ctx.content.heroImage.alt);
      \u0275\u0275attribute("srcset", ctx.assetUrl(ctx.content.heroImage.src) + " 1x")("sizes", "(max-width: 900px) 100vw, 418px");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.content.eyebrow);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.content.titleLine1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.content.titleLine2);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.content.subtitle);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.content.ctaLabel);
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c0));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.content.ctaPrequal);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.content.scrollHint);
    }
  }, dependencies: [ScrollRevealDirective, RouterLink], styles: ['\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100vh;\n  min-height: 600px;\n  display: flex;\n  align-items: flex-end;\n  overflow: hidden;\n}\n.hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: top;\n  z-index: -1;\n  transform: scale(1.05);\n  animation: _ngcontent-%COMP%_heroZoom 20s ease-out forwards;\n}\n@keyframes _ngcontent-%COMP%_heroZoom {\n  from {\n    transform: scale(1.05);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n.hero-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(8, 8, 8, 0.2) 0%,\n      rgba(8, 8, 8, 0.1) 40%,\n      rgba(8, 8, 8, 0.7) 70%,\n      rgb(8, 8, 8) 100%);\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  top: 1rem;\n  z-index: 2;\n  width: 100%;\n  padding: 0 4rem 6rem;\n  animation: _ngcontent-%COMP%_heroFade 2s ease-out forwards;\n}\n@keyframes _ngcontent-%COMP%_heroFade {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.hero-eyebrow[_ngcontent-%COMP%] {\n  font-family: "Cinzel", serif;\n  font-size: 11px;\n  letter-spacing: 6px;\n  color: var(--gold-light);\n  text-transform: uppercase;\n  margin-bottom: 1rem;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-family: "Cinzel", serif;\n  font-size: clamp(2.4rem, 6vw, 5.5rem);\n  font-weight: 700;\n  color: var(--gold-light);\n  line-height: 1.05;\n  text-shadow: 0 4px 40px rgba(0, 0, 0, 0.9);\n  margin-bottom: 0.5rem;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-family: "Crimson Text", serif;\n  font-style: italic;\n  font-size: clamp(1.1rem, 2vw, 1.5rem);\n  color: var(--gold);\n  margin-bottom: 2.5rem;\n}\n.hero-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-family: "Cinzel", serif;\n  font-size: 12px;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  color: var(--bg-deep);\n  background: var(--gold);\n  padding: 14px 32px;\n  text-decoration: none;\n  transition: background 0.3s, transform 0.2s;\n  clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);\n}\n@media (hover: hover) {\n  .hero-cta[_ngcontent-%COMP%]:hover {\n    background: var(--gold-light);\n    transform: translateY(-2px);\n  }\n}\n.scroll-hint[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  bottom: 2rem;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  opacity: 0.9;\n  animation: _ngcontent-%COMP%_bounce 2s infinite;\n}\n.scroll-hint[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: "Cinzel", serif;\n  font-size: 9px;\n  letter-spacing: 3px;\n  color: var(--gold-light);\n}\n.scroll-hint[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  stroke: var(--gold-light);\n}\n@keyframes _ngcontent-%COMP%_bounce {\n  0%, 100% {\n    transform: translateX(-50%) translateY(0);\n  }\n  50% {\n    transform: translateX(-50%) translateY(6px);\n  }\n}\n@media (max-width: 900px) {\n  .hero-content[_ngcontent-%COMP%] {\n    padding: 0 1.5rem 4rem;\n  }\n}\n/*# sourceMappingURL=hero-FHAQKNJM.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Hero, [{
    type: Component,
    args: [{ selector: "app-hero", imports: [ScrollRevealDirective, RouterLink], template: `<section class="hero fade-up-section" appScrollReveal="is-visible">\r
    <img class="hero-bg" loading="eager" [src]="assetUrl(content.heroImage.src)" [alt]="content.heroImage.alt" width="6482" height="13541" decoding="async" fetchpriority="high"\r
      [attr.srcset]="assetUrl(content.heroImage.src) + ' 1x'"\r
      [attr.sizes]="'(max-width: 900px) 100vw, 418px'">\r
    <div class="hero-overlay"></div>\r
    <div class="hero-content">\r
        <p class="hero-eyebrow">{{ content.eyebrow }}</p>\r
        <h1 class="hero-title">{{ content.titleLine1 }}<br>{{ content.titleLine2 }}</h1>\r
        <p class="hero-subtitle">{{ content.subtitle }}</p>\r
        <button class="hero-cta" (click)="scrollTo(content.ctaTarget)">{{ content.ctaLabel }}</button>\r
        <a class="hero-cta" [routerLink]="['/prequel']">{{ content.ctaPrequal }}</a>\r
    </div>\r
    <button class="scroll-hint" (click)="scrollTo(content.scrollTarget)">\r
        <span>{{ content.scrollHint }}</span>\r
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" stroke-width="1.5">\r
            <path d="M8 2v12M3 11l5 5 5-5" />\r
        </svg>\r
    </button>\r
</section>`, styles: ['/* src/app/layout/shared-components/hero/hero.scss */\n.hero {\n  position: relative;\n  height: 100vh;\n  min-height: 600px;\n  display: flex;\n  align-items: flex-end;\n  overflow: hidden;\n}\n.hero-bg {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: top;\n  z-index: -1;\n  transform: scale(1.05);\n  animation: heroZoom 20s ease-out forwards;\n}\n@keyframes heroZoom {\n  from {\n    transform: scale(1.05);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n.hero-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(8, 8, 8, 0.2) 0%,\n      rgba(8, 8, 8, 0.1) 40%,\n      rgba(8, 8, 8, 0.7) 70%,\n      rgb(8, 8, 8) 100%);\n}\n.hero-content {\n  position: relative;\n  top: 1rem;\n  z-index: 2;\n  width: 100%;\n  padding: 0 4rem 6rem;\n  animation: heroFade 2s ease-out forwards;\n}\n@keyframes heroFade {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.hero-eyebrow {\n  font-family: "Cinzel", serif;\n  font-size: 11px;\n  letter-spacing: 6px;\n  color: var(--gold-light);\n  text-transform: uppercase;\n  margin-bottom: 1rem;\n}\n.hero-title {\n  font-family: "Cinzel", serif;\n  font-size: clamp(2.4rem, 6vw, 5.5rem);\n  font-weight: 700;\n  color: var(--gold-light);\n  line-height: 1.05;\n  text-shadow: 0 4px 40px rgba(0, 0, 0, 0.9);\n  margin-bottom: 0.5rem;\n}\n.hero-subtitle {\n  font-family: "Crimson Text", serif;\n  font-style: italic;\n  font-size: clamp(1.1rem, 2vw, 1.5rem);\n  color: var(--gold);\n  margin-bottom: 2.5rem;\n}\n.hero-cta {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-family: "Cinzel", serif;\n  font-size: 12px;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  color: var(--bg-deep);\n  background: var(--gold);\n  padding: 14px 32px;\n  text-decoration: none;\n  transition: background 0.3s, transform 0.2s;\n  clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);\n}\n@media (hover: hover) {\n  .hero-cta:hover {\n    background: var(--gold-light);\n    transform: translateY(-2px);\n  }\n}\n.scroll-hint {\n  position: absolute;\n  z-index: 2;\n  bottom: 2rem;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  opacity: 0.9;\n  animation: bounce 2s infinite;\n}\n.scroll-hint span {\n  font-family: "Cinzel", serif;\n  font-size: 9px;\n  letter-spacing: 3px;\n  color: var(--gold-light);\n}\n.scroll-hint svg {\n  stroke: var(--gold-light);\n}\n@keyframes bounce {\n  0%, 100% {\n    transform: translateX(-50%) translateY(0);\n  }\n  50% {\n    transform: translateX(-50%) translateY(6px);\n  }\n}\n@media (max-width: 900px) {\n  .hero-content {\n    padding: 0 1.5rem 4rem;\n  }\n}\n/*# sourceMappingURL=hero-FHAQKNJM.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Hero, { className: "Hero", filePath: "src/app/layout/shared-components/hero/hero.ts", lineNumber: 14 });
})();

// src/app/pages/home/home.ts
function Home_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 0);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const about_r1 = \u0275\u0275readContextLet(0);
    \u0275\u0275property("ngComponentOutlet", about_r1);
  }
}
function Home_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1, "Loading the story...");
    \u0275\u0275elementEnd();
  }
}
function Home_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 0);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const prequal_r2 = \u0275\u0275readContextLet(1);
    \u0275\u0275property("ngComponentOutlet", prequal_r2);
  }
}
function Home_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1, "Loading the trailer...");
    \u0275\u0275elementEnd();
  }
}
function Home_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 0);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const characters_r3 = \u0275\u0275readContextLet(2);
    \u0275\u0275property("ngComponentOutlet", characters_r3);
  }
}
function Home_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1, "Loading characters...");
    \u0275\u0275elementEnd();
  }
}
function Home_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 0);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const quotations_r4 = \u0275\u0275readContextLet(3);
    \u0275\u0275property("ngComponentOutlet", quotations_r4);
  }
}
function Home_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1, "Loading quotes...");
    \u0275\u0275elementEnd();
  }
}
function Home_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 0);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const city_r5 = \u0275\u0275readContextLet(4);
    \u0275\u0275property("ngComponentOutlet", city_r5);
  }
}
function Home_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1, "Loading the city map...");
    \u0275\u0275elementEnd();
  }
}
function Home_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 0);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const author_r6 = \u0275\u0275readContextLet(5);
    \u0275\u0275property("ngComponentOutlet", author_r6);
  }
}
function Home_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1, "Loading the author section...");
    \u0275\u0275elementEnd();
  }
}
var Home = class _Home {
  viewChangeService = inject(ViewChangeService);
  router = inject(Router);
  scrollService = inject(ScrollService);
  isDesktopFlag = signal(
    this.viewChangeService.isDesktop(),
    ...ngDevMode ? [{ debugName: "isDesktopFlag" }] : (
      /* istanbul ignore next */
      []
    )
  );
  aboutComponent = signal(
    null,
    ...ngDevMode ? [{ debugName: "aboutComponent" }] : (
      /* istanbul ignore next */
      []
    )
  );
  prequalComponent = signal(
    null,
    ...ngDevMode ? [{ debugName: "prequalComponent" }] : (
      /* istanbul ignore next */
      []
    )
  );
  charactersComponent = signal(
    null,
    ...ngDevMode ? [{ debugName: "charactersComponent" }] : (
      /* istanbul ignore next */
      []
    )
  );
  quotationsComponent = signal(
    null,
    ...ngDevMode ? [{ debugName: "quotationsComponent" }] : (
      /* istanbul ignore next */
      []
    )
  );
  cityComponent = signal(
    null,
    ...ngDevMode ? [{ debugName: "cityComponent" }] : (
      /* istanbul ignore next */
      []
    )
  );
  authorComponent = signal(
    null,
    ...ngDevMode ? [{ debugName: "authorComponent" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
  constructor() {
    effect(() => {
      this.isDesktopFlag.set(this.viewChangeService.isDesktop());
    });
    if (this.isBrowser) {
      const navigationState = this.router.getCurrentNavigation()?.extras.state;
      const stateFromHistory = history.state?.homeSection;
      const homeSection = navigationState?.homeSection ?? stateFromHistory;
      const originSection = this.inferHomeSectionFromNavigation(this.router.getCurrentNavigation());
      const sectionToScroll = homeSection ?? originSection;
      if (sectionToScroll) {
        this.scrollToHomeSectionWhenReady(sectionToScroll);
      }
      this.deferLoadHomeSections();
    }
  }
  inferHomeSectionFromNavigation(navigation) {
    if (!navigation?.previousNavigation) {
      return null;
    }
    const previousUrl = navigation.previousNavigation.finalUrl?.toString() ?? navigation.previousNavigation.extractedUrl?.toString();
    if (!previousUrl) {
      return null;
    }
    if (previousUrl.includes("/city")) {
      return "map";
    }
    if (previousUrl.includes("/character")) {
      return "characters";
    }
    return null;
  }
  scrollToHomeSectionWhenReady(section) {
    const maxRetries = 20;
    let retries = 0;
    const attemptScroll = () => {
      retries += 1;
      const element = document.getElementById(section);
      if (element) {
        this.scrollService.scrollTo(section);
        window.history.replaceState({}, "");
        return;
      }
      if (retries < maxRetries) {
        requestAnimationFrame(attemptScroll);
      }
    };
    requestAnimationFrame(attemptScroll);
  }
  deferLoadHomeSections() {
    const loadSections = async () => {
      const results = await Promise.allSettled([
        import("./chunk-F5X5JJNE.js"),
        import("./chunk-KWCBMFYK.js"),
        import("./chunk-NSVE6I4K.js"),
        import("./chunk-AFPV7UCM.js"),
        import("./chunk-WBTX2IBZ.js"),
        import("./chunk-IZ6KWBHM.js")
      ]);
      if (results[0].status === "fulfilled") {
        this.aboutComponent.set(results[0].value.About);
      } else {
        console.error("Failed to load about section", results[0].reason);
      }
      if (results[1].status === "fulfilled") {
        this.prequalComponent.set(results[1].value.Prequal);
      } else {
        console.error("Failed to load prequal section", results[1].reason);
      }
      if (results[2].status === "fulfilled") {
        this.charactersComponent.set(results[2].value.Characters);
      } else {
        console.error("Failed to load characters section", results[2].reason);
      }
      if (results[3].status === "fulfilled") {
        this.quotationsComponent.set(results[3].value.Quotations);
      } else {
        console.error("Failed to load quotations section", results[3].reason);
      }
      if (results[4].status === "fulfilled") {
        this.cityComponent.set(results[4].value.City);
      } else {
        console.error("Failed to load city section", results[4].reason);
      }
      if (results[5].status === "fulfilled") {
        this.authorComponent.set(results[5].value.Author);
      } else {
        console.error("Failed to load author section", results[5].reason);
      }
    };
    const globalWindow = window;
    if ("requestIdleCallback" in globalWindow && typeof globalWindow.requestIdleCallback === "function") {
      globalWindow.requestIdleCallback(loadSections, { timeout: 2e3 });
    } else {
      globalWindow.addEventListener("load", () => void loadSections(), { once: true, passive: true });
      setTimeout(() => void loadSections(), 2e3);
    }
  }
  static \u0275fac = function Home_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Home)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Home, selectors: [["app-home"]], decls: 21, vars: 12, consts: [[3, "ngComponentOutlet"], [1, "section-placeholder"]], template: function Home_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275declareLet(0)(1)(2)(3)(4)(5);
      \u0275\u0275element(6, "app-hero")(7, "app-section-navigation");
      \u0275\u0275conditionalCreate(8, Home_Conditional_8_Template, 1, 1, "ng-container", 0)(9, Home_Conditional_9_Template, 2, 0, "div", 1);
      \u0275\u0275conditionalCreate(10, Home_Conditional_10_Template, 1, 1, "ng-container", 0)(11, Home_Conditional_11_Template, 2, 0, "div", 1);
      \u0275\u0275conditionalCreate(12, Home_Conditional_12_Template, 1, 1, "ng-container", 0)(13, Home_Conditional_13_Template, 2, 0, "div", 1);
      \u0275\u0275conditionalCreate(14, Home_Conditional_14_Template, 1, 1, "ng-container", 0)(15, Home_Conditional_15_Template, 2, 0, "div", 1);
      \u0275\u0275conditionalCreate(16, Home_Conditional_16_Template, 1, 1, "ng-container", 0)(17, Home_Conditional_17_Template, 2, 0, "div", 1);
      \u0275\u0275conditionalCreate(18, Home_Conditional_18_Template, 1, 1, "ng-container", 0)(19, Home_Conditional_19_Template, 2, 0, "div", 1);
      \u0275\u0275element(20, "app-contacts");
    }
    if (rf & 2) {
      const about_r7 = \u0275\u0275storeLet(ctx.aboutComponent());
      \u0275\u0275advance();
      const prequal_r8 = \u0275\u0275storeLet(ctx.prequalComponent());
      \u0275\u0275advance();
      const characters_r9 = \u0275\u0275storeLet(ctx.charactersComponent());
      \u0275\u0275advance();
      const quotations_r10 = \u0275\u0275storeLet(ctx.quotationsComponent());
      \u0275\u0275advance();
      const city_r11 = \u0275\u0275storeLet(ctx.cityComponent());
      \u0275\u0275advance();
      const author_r12 = \u0275\u0275storeLet(ctx.authorComponent());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(about_r7 ? 8 : 9);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(prequal_r8 ? 10 : 11);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(characters_r9 ? 12 : 13);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(quotations_r10 ? 14 : 15);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(city_r11 ? 16 : 17);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(author_r12 ? 18 : 19);
    }
  }, dependencies: [
    Hero,
    Contacts,
    SectionNavigation,
    NgComponentOutlet
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Home, [{
    type: Component,
    args: [{ selector: "app-home", imports: [
      Hero,
      Contacts,
      SectionNavigation,
      NgComponentOutlet
    ], template: '@let about = aboutComponent();\r\n@let prequal = prequalComponent();\r\n@let characters = charactersComponent();\r\n@let quotations = quotationsComponent();\r\n@let city = cityComponent();\r\n@let author = authorComponent();\r\n<app-hero></app-hero>\r\n<app-section-navigation></app-section-navigation>\r\n@if (about) {\r\n  <ng-container [ngComponentOutlet]="about"></ng-container>\r\n} @else {\r\n  <div class="section-placeholder">Loading the story...</div>\r\n}\r\n\r\n@if (prequal) {\r\n  <ng-container [ngComponentOutlet]="prequal"></ng-container>\r\n} @else {\r\n  <div class="section-placeholder">Loading the trailer...</div>\r\n}\r\n\r\n@if (characters) {\r\n  <ng-container [ngComponentOutlet]="characters"></ng-container>\r\n} @else {\r\n  <div class="section-placeholder">Loading characters...</div>\r\n}\r\n@if (quotations) {\r\n  <ng-container [ngComponentOutlet]="quotations"></ng-container>\r\n} @else {\r\n  <div class="section-placeholder">Loading quotes...</div>\r\n}\r\n\r\n@if (city) {\r\n  <ng-container [ngComponentOutlet]="city"></ng-container>\r\n} @else {\r\n  <div class="section-placeholder">Loading the city map...</div>\r\n}\r\n\r\n@if (author) {\r\n  <ng-container [ngComponentOutlet]="author"></ng-container>\r\n} @else {\r\n  <div class="section-placeholder">Loading the author section...</div>\r\n}\r\n\r\n<app-contacts></app-contacts>' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Home, { className: "Home", filePath: "src/app/pages/home/home.ts", lineNumber: 22 });
})();
export {
  Home
};
//# sourceMappingURL=chunk-3Q3UT2ZB.js.map
