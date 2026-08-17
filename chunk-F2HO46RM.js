import {
  LightHouseService
} from "./chunk-E53G3QOB.js";
import {
  ShareOn
} from "./chunk-3HGFRMYI.js";
import {
  Contacts
} from "./chunk-I63VF2NP.js";
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
  Injectable,
  Router,
  RouterLink,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵariaProperty,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-772GF5FN.js";

// assets/data/city.json
var city_default = {
  name: "Newport Maeve",
  subtitle: "Where the Zarina River meets the Moon Sea",
  overview: "Newport Maeve is a vast industrial metropolis built where the Zarina River meets the Moon Sea, with trade, manufacturing, military logistics, and civic power moving through it at every hour. Wide boulevards carry steam carriage buses along the borders between districts, while elevated trains cut above the streets and dirigibles drift higher still, advertising to the city below or carrying people and supplies between nearby settlements. The river and sea keep Newport Maeve tied to water transport, while rail lines stretch through ravines and open plains to move heavy machines, raw materials, and finished parts across the Confederacy.",
  geography: {
    river: "Zarina River",
    sea: "Moon Sea"
  },
  mapImage: {
    src: "assets/images/map.webp",
    alt: "Illustrated map of Newport Maeve, where the Zarina River meets the Moon Sea"
  },
  districts: [
    {
      slug: "market-district",
      name: "Market District",
      summary: "The commercial heart of Newport Maeve, where every deal is struck beneath the steam-heavy sky.",
      description: "The Market District is the commercial heart of Newport Maeve, where everything from cheap trinkets to major supply contracts changes hands beneath the steam-heavy sky. By day, vendors, brokers, clerks, and factory agents crowd the streets while the towers of the city's largest corporations loom above them. By night, the stalls close, the shadows deepen, and the highest floors remain lit as powerful people bargain over the future of the city.",
      image: {
        src: "https://newportmaeve.com/assets/images/city/city-market-district.webp",
        alt: "Market District, a district of Newport Maeve"
      },
      tags: ["commercial", "dangerous"],
      displayOrder: 1
    },
    {
      slug: "industrial-district",
      name: "Industrial District",
      summary: "The engine room of Newport Maeve \u2014 loud, smoke-stained, and essential to everything the city builds.",
      description: "The Industrial District is where most of Newport Maeve earns its living, feeding the city's factories, workshops, mills, and production yards. Humans, orcs, and goblins work around booming machines in steelworks, woodworking shops, furniture plants, textile mills, and clothing manufactories, keeping the city's industry alive from dawn until night. It is the engine room of Newport Maeve, loud, crowded, smoke-stained, and essential to everything the city builds, sells, and consumes.",
      image: {
        src: "https://newportmaeve.com/assets/images/city/city-industrial-district.webp",
        alt: "Industrial District, a district of Newport Maeve"
      },
      tags: ["industrial"],
      displayOrder: 2
    },
    {
      slug: "northport-district",
      name: "NorthPort District",
      summary: "The river-facing harbor where Newport Maeve opens itself to trade, rumor, contraband, and trouble.",
      description: "NorthPort is the river-facing industrial harbor of Newport Maeve, where cargo cranes, shipyards, taverns, customs offices, and smoke-stained warehouses press against the Zarina River. Sailors, dockworkers, smugglers, merchants, and private contractors move through its streets at all hours, making it one of the city's most useful and dangerous districts. It is the place where Newport Maeve opens itself to trade, rumor, contraband, and trouble from beyond the Moon Sea.",
      image: {
        src: "https://newportmaeve.com/assets/images/city/city-northport-district.webp",
        alt: "NorthPort District, a district of Newport Maeve"
      },
      tags: ["harbor", "industrial", "dangerous"],
      displayOrder: 3
    },
    {
      slug: "living-district-b",
      name: "Living District B",
      summary: "Home to Newport Maeve's lower and middle working population, shaped by smoke, wages, and exhaustion.",
      description: "Living District B sits between NorthPort to the west and the Market District to the east, housing much of Newport Maeve's lower and middle working population. Many of its residents labor in the ports, factories, workshops, and supply yards, returning each evening to crowded streets shaped by smoke, wages, and exhaustion. Two large public parks serve as recreation grounds and part of the city's green lungs, offering rare open air in a district pressed between industry, trade, and the smog of progress.",
      image: {
        src: "https://newportmaeve.com/assets/images/city/city-living-district-b.webp",
        alt: "Living District B, a district of Newport Maeve"
      },
      tags: ["residential", "green-space"],
      displayOrder: 4
    },
    {
      slug: "living-district-a",
      name: "Living District A",
      summary: "A main residential zone stretching between the Market District and the military fort.",
      description: "Living District A stretches between the Market District to the west and the city limits near the military fort, forming one of Newport Maeve's main residential zones. Its population works largely in municipal services, industrial administration, transport, supply, and support trades, with a smaller share employed by the nearby military presence. A large public park forms another part of the city's green lungs, giving the district a rare pocket of open air against the pressure of smoke, labor, and civic routine.",
      image: {
        src: "https://newportmaeve.com/assets/images/city/city-living-district-a.webp",
        alt: "Living District A, a district of Newport Maeve"
      },
      tags: ["residential", "green-space"],
      displayOrder: 5
    },
    {
      slug: "luxury-district",
      name: "Luxury District",
      summary: "Sealed behind thick walls \u2014 a protected refuge for Newport Maeve's elite and their polished secrets.",
      description: "The Luxury District rises above Living District B, sealed behind thick walls and heavy guard, a protected refuge for Newport Maeve's elite and whoever manages to count as elite that month. Its bright beaches, cleaner water, private promenades, and modern houses offer the highest standard of comfort the city can provide. Behind its polished gates, wealth hides from the smoke, noise, and consequences that keep the rest of Newport Maeve alive.",
      image: {
        src: "https://newportmaeve.com/assets/images/city/city-luxury-district.webp",
        alt: "Luxury District, a district of Newport Maeve"
      },
      tags: ["luxury", "residential"],
      displayOrder: 6
    },
    {
      slug: "military-base",
      name: "Military Base",
      summary: "A sealed compound outside the eastern wall \u2014 the Confederacy's quiet watch over the city.",
      description: "The military base stands outside Newport Maeve, close to the eastern city wall, sealed behind high concrete walls and strict access points. It serves as regional protection, recruitment center, and training ground for the Confederacy Army, keeping a quiet watch over the city and the lands beyond it. For most citizens, it remains almost invisible in daily life, exactly as a military presence should be in peaceful times.",
      image: {
        src: "https://newportmaeve.com/assets/images/city/city-military-base.webp",
        alt: "Military Base, a district of Newport Maeve"
      },
      tags: ["military"],
      displayOrder: 7
    }
  ]
};

// src/app/services/city-data.service.ts
var CityDataService = class _CityDataService {
  city = city_default;
  getCity() {
    return this.city;
  }
  static \u0275fac = function CityDataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CityDataService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CityDataService, factory: _CityDataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CityDataService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/pages/city/city.ts
var _c0 = () => ["/"];
function _forTrack0($index, $item) {
  return this.districts().indexOf($item);
}
function City_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 15)(1, "div", 21)(2, "button", 22);
    \u0275\u0275listener("click", function City_For_25_Template_button_click_2_listener() {
      const district_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openLightbox(ctx_r2.assetUrl(district_r2.image.src), district_r2.image.alt, district_r2.description));
    });
    \u0275\u0275element(3, "img", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 24)(5, "h3", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 26);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const district_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("id", \u0275\u0275interpolate(district_r2.slug));
    \u0275\u0275advance(2);
    \u0275\u0275ariaProperty("aria-label", \u0275\u0275interpolate1("View ", district_r2.name, " map"));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.assetUrl(district_r2.image.src), \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("alt", district_r2.image.alt);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(district_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(district_r2.description);
  }
}
var City = class _City {
  lightHouseService = inject(LightHouseService);
  cityDataService = inject(CityDataService);
  envConfig = inject(APP_ENVIRONMENT_CONFIG);
  router = inject(Router);
  contentService = inject(ContentService);
  shareUrl = computed(
    () => typeof window !== "undefined" ? window.location.href : this.envConfig.canonicalUrl,
    ...ngDevMode ? [{ debugName: "shareUrl" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pageContent = this.contentService.getTemplateContent().cityPage;
  city = signal(
    null,
    ...ngDevMode ? [{ debugName: "city" }] : (
      /* istanbul ignore next */
      []
    )
  );
  districts = computed(
    () => [...this.city()?.districts ?? []].sort((left, right) => left.displayOrder - right.displayOrder),
    ...ngDevMode ? [{ debugName: "districts" }] : (
      /* istanbul ignore next */
      []
    )
  );
  cityName = computed(
    () => this.city()?.name ?? "",
    ...ngDevMode ? [{ debugName: "cityName" }] : (
      /* istanbul ignore next */
      []
    )
  );
  citySubtitle = computed(
    () => this.city()?.subtitle ?? "",
    ...ngDevMode ? [{ debugName: "citySubtitle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  cityOverview = computed(
    () => this.city()?.overview ?? "",
    ...ngDevMode ? [{ debugName: "cityOverview" }] : (
      /* istanbul ignore next */
      []
    )
  );
  mapImageSrc = computed(
    () => this.city()?.mapImage?.src ?? "",
    ...ngDevMode ? [{ debugName: "mapImageSrc" }] : (
      /* istanbul ignore next */
      []
    )
  );
  mapImageAlt = computed(
    () => this.city()?.mapImage?.alt ?? "",
    ...ngDevMode ? [{ debugName: "mapImageAlt" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pageDescription = computed(
    () => this.city()?.overview ?? "Discover this city from the Newport Maeve Chronicles.",
    ...ngDevMode ? [{ debugName: "pageDescription" }] : (
      /* istanbul ignore next */
      []
    )
  );
  assetUrl = (path) => buildAssetUrl(this.envConfig.assetBasePath, path);
  constructor() {
    this.city.set(this.cityDataService.getCity());
  }
  openLightbox(src, alt = "", description = "") {
    this.lightHouseService.show(src, alt, description);
  }
  navigateHome(event, section) {
    event.preventDefault();
    this.router.navigate([""], { state: { homeSection: section } });
  }
  static \u0275fac = function City_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _City)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _City, selectors: [["app-city"]], decls: 36, vars: 21, consts: [["appScrollReveal", "is-visible", 1, "city-hero", "fade-up-section"], [1, "city-hero-inner"], [1, "city-eyebrow"], [1, "city-name"], [1, "city-tagline"], ["appScrollReveal", "is-visible", 1, "city-body", "fade-up-section"], [1, "section-label"], [1, "divider"], [1, "city-general"], [1, "city-fulllink"], [3, "click"], ["appScrollReveal", "is-visible", 1, "districts", "fade-up-section", 3, "threshold"], [1, "districts-label"], [1, "districts-title"], [1, "district-grid"], ["appScrollReveal", "is-visible", 1, "district-card", "fade-up-section", 3, "id"], [3, "url", "text", "mediaUrl", "mediaAlt", "pageDescription"], [1, "city-crosslinks"], ["data-home-section", "map", 3, "click", "routerLink"], ["data-home-section", "characters", 3, "click", "routerLink"], ["href", "https://newport-maeve.fandom.com/wiki/Newport_Maeve_Chronicles_Wiki", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Open Newport Maeve wiki in a new tab"], [1, "district-frame"], ["type", "button", 1, "district-image-button", 3, "click", "aria-label"], ["loading", "lazy", "onerror", `this.style.display='none';this.parentNode.classList.add('is-empty');this.parentNode.insertAdjacentHTML('beforeend','<span class="frame-empty">Coming soon</span>')`, 2, "cursor", "zoom-in", 3, "src"], [1, "district-info"], [1, "district-name"], [1, "district-desc"]], template: function City_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "p", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "section", 5)(9, "p", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "div", 7);
      \u0275\u0275elementStart(12, "div", 8)(13, "p");
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 9)(16, "button", 10);
      \u0275\u0275listener("click", function City_Template_button_click_16_listener() {
        return ctx.openLightbox(ctx.assetUrl(ctx.mapImageSrc()), ctx.mapImageAlt() || ctx.cityName() + " map", ctx.pageDescription());
      });
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "section", 11)(19, "p", 12);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "h2", 13);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 14);
      \u0275\u0275repeaterCreate(24, City_For_25_Template, 9, 8, "article", 15, _forTrack0, true);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "section");
      \u0275\u0275element(27, "app-share-on", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "nav", 17)(29, "a", 18);
      \u0275\u0275listener("click", function City_Template_a_click_29_listener($event) {
        return ctx.navigateHome($event, "map");
      });
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "a", 19);
      \u0275\u0275listener("click", function City_Template_a_click_31_listener($event) {
        return ctx.navigateHome($event, "characters");
      });
      \u0275\u0275text(32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "a", 20);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(35, "app-contacts");
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.pageContent.heroEyebrow);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.cityName());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.citySubtitle());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.pageContent.generalLabel);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.cityOverview());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.pageContent.viewMapLabel, " ");
      \u0275\u0275advance();
      \u0275\u0275property("threshold", 0);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.pageContent.districtsLabel);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.pageContent.districtsTitle);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.districts());
      \u0275\u0275advance(3);
      \u0275\u0275property("url", ctx.shareUrl())("text", `Discover ${ctx.cityName()} from the Newport Maeve Chronicles.`)("mediaUrl", ctx.mapImageSrc())("mediaAlt", ctx.mapImageAlt())("pageDescription", ctx.pageDescription());
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(19, _c0));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.pageContent.backToHome);
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(20, _c0));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.pageContent.charactersLink);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.pageContent.fandomWikiLabel);
    }
  }, dependencies: [Contacts, ScrollRevealDirective, RouterLink, ShareOn], styles: ['@charset "UTF-8";\n\n\n.city-body[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 4rem 4rem 2rem;\n}\n.city-general[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--text);\n  line-height: 1.8;\n  margin-bottom: 1.2rem;\n  max-width: 820px;\n}\n.city-general[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: var(--gold);\n  font-style: italic;\n}\n.districts[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 2rem 4rem 4rem;\n}\n.districts-label[_ngcontent-%COMP%] {\n  font-family: "Cinzel", serif;\n  font-size: 10px;\n  letter-spacing: 6px;\n  color: var(--gold-dim);\n  text-transform: uppercase;\n  margin-bottom: 0.75rem;\n}\n.districts-title[_ngcontent-%COMP%] {\n  font-family: "Cinzel", serif;\n  font-size: clamp(1.4rem, 2.5vw, 2rem);\n  color: var(--gold-light);\n  font-weight: 600;\n  margin-bottom: 2.5rem;\n}\n.district-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.district-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 3.5rem;\n  align-items: center;\n  padding: 4rem 0;\n  border-top: 1px solid var(--border);\n  scroll-margin-top: 88px;\n}\n.district-card[_ngcontent-%COMP%]:first-child {\n  border-top: none;\n}\n.district-card[_ngcontent-%COMP%]:nth-child(even)   .district-frame[_ngcontent-%COMP%] {\n  order: 2;\n}\n.district-card[_ngcontent-%COMP%]:nth-child(even)   .district-info[_ngcontent-%COMP%] {\n  order: 1;\n}\n.district-card[_ngcontent-%COMP%] {\n  transform: translateY(24px);\n  transition: opacity 0.7s ease, transform 0.7s ease;\n}\n.district-card.is-visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.district-frame[_ngcontent-%COMP%] {\n  aspect-ratio: 4/3;\n  position: relative;\n  background:\n    repeating-linear-gradient(\n      45deg,\n      rgba(122, 96, 48, 0.05) 0 10px,\n      transparent 10px 20px),\n    var(--bg-deep);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  border: 1px solid var(--border);\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);\n}\n.district-frame[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.district-frame[_ngcontent-%COMP%]   .frame-empty[_ngcontent-%COMP%] {\n  font-family: "Cinzel", serif;\n  font-size: 11px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: var(--text-dim);\n  opacity: 0.5;\n}\n.district-info[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.district-name[_ngcontent-%COMP%] {\n  font-family: "Cinzel", serif;\n  font-size: clamp(1.3rem, 2vw, 1.7rem);\n  color: var(--gold-light);\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n.district-desc[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  color: var(--text);\n  line-height: 1.75;\n}\n@media (max-width: 900px) {\n  .city-hero[_ngcontent-%COMP%] {\n    padding: 7rem 1.5rem 3rem;\n  }\n  .city-body[_ngcontent-%COMP%] {\n    padding: 3rem 1.5rem 1.5rem;\n  }\n  .districts[_ngcontent-%COMP%] {\n    padding: 1.5rem 1.5rem 3rem;\n  }\n  .district-grid[_ngcontent-%COMP%] {\n    grid-template-columns: none;\n  }\n  .district-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n    padding: 2.5rem 0;\n  }\n  .district-card[_ngcontent-%COMP%]:nth-child(even)   .district-frame[_ngcontent-%COMP%] {\n    order: 0;\n  }\n  .district-card[_ngcontent-%COMP%]:nth-child(even)   .district-info[_ngcontent-%COMP%] {\n    order: 0;\n  }\n  .city-fulllink[_ngcontent-%COMP%], \n   .city-crosslinks[_ngcontent-%COMP%] {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n  .city-nav[_ngcontent-%COMP%] {\n    padding: 0 1.5rem;\n  }\n}\n@media (max-width: 600px) {\n  .district-frame[_ngcontent-%COMP%] {\n    aspect-ratio: 4/3;\n  }\n}\n/*# sourceMappingURL=city-M6WE4YCY.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(City, [{
    type: Component,
    args: [{ selector: "app-city", imports: [Contacts, ScrollRevealDirective, RouterLink, ShareOn], template: `<header class="city-hero fade-up-section" appScrollReveal="is-visible">\r
  <div class="city-hero-inner">\r
    <p class="city-eyebrow">{{ pageContent.heroEyebrow }}</p>\r
    <h1 class="city-name">{{ cityName() }}</h1>\r
    <p class="city-tagline">{{ citySubtitle() }}</p>\r
  </div>\r
</header>\r
\r
<section class="city-body fade-up-section" appScrollReveal="is-visible">\r
  <p class="section-label">{{ pageContent.generalLabel }}</p>\r
  <div class="divider"></div>\r
  <div class="city-general">\r
    <p>{{ cityOverview() }}</p>\r
  </div>\r
</section>\r
\r
<div class="city-fulllink">\r
  <button (click)="openLightbox(assetUrl(mapImageSrc()), mapImageAlt() || (cityName() + ' map'), pageDescription())">\r
    {{pageContent.viewMapLabel}}\r
  </button>\r
</div>\r
\r
<section class="districts fade-up-section" appScrollReveal="is-visible" [threshold]="0">\r
  <p class="districts-label">{{ pageContent.districtsLabel }}</p>\r
  <h2 class="districts-title">{{ pageContent.districtsTitle }}</h2>\r
  <div class="district-grid">\r
    @for (district of districts(); track districts().indexOf(district)) {\r
    <article class="district-card fade-up-section" appScrollReveal="is-visible" id="{{ district.slug }}">\r
      <div class="district-frame">\r
        <button type="button" class="district-image-button" aria-label="View {{ district.name }} map"\r
          (click)="openLightbox(assetUrl(district.image.src), district.image.alt, district.description)">\r
          <img [src]="assetUrl(district.image.src)" [attr.alt]="district.image.alt" loading="lazy"\r
            onerror="this.style.display='none';this.parentNode.classList.add('is-empty');this.parentNode.insertAdjacentHTML('beforeend','&lt;span class=&quot;frame-empty&quot;&gt;Coming soon&lt;/span&gt;')"\r
            style="cursor: zoom-in;">\r
        </button>\r
      </div>\r
      <div class="district-info">\r
        <h3 class="district-name">{{ district.name }}</h3>\r
        <p class="district-desc">{{ district.description }}</p>\r
      </div>\r
    </article>\r
    }\r
  </div>\r
</section>\r
<section>\r
  <app-share-on\r
    [url]="shareUrl()"\r
    [text]="\`Discover \${cityName()} from the Newport Maeve Chronicles.\`"\r
    [mediaUrl]="mapImageSrc()"\r
    [mediaAlt]="mapImageAlt()"\r
    [pageDescription]="pageDescription()"\r
  ></app-share-on>\r
</section>\r
\r
<nav class="city-crosslinks">\r
  <a [routerLink]="['/']" data-home-section="map" (click)="navigateHome($event, 'map')">{{ pageContent.backToHome }}</a>\r
  <a [routerLink]="['/']" data-home-section="characters" (click)="navigateHome($event, 'characters')">{{\r
    pageContent.charactersLink }}</a>\r
  <a href="https://newport-maeve.fandom.com/wiki/Newport_Maeve_Chronicles_Wiki" target="_blank" rel="noopener noreferrer" aria-label="Open Newport Maeve wiki in a new tab">{{\r
    pageContent.fandomWikiLabel }}</a>\r
</nav>\r
\r
<app-contacts></app-contacts>`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/city/city.scss */\n.city-body {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 4rem 4rem 2rem;\n}\n.city-general p {\n  font-size: 1.1rem;\n  color: var(--text);\n  line-height: 1.8;\n  margin-bottom: 1.2rem;\n  max-width: 820px;\n}\n.city-general em {\n  color: var(--gold);\n  font-style: italic;\n}\n.districts {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 2rem 4rem 4rem;\n}\n.districts-label {\n  font-family: "Cinzel", serif;\n  font-size: 10px;\n  letter-spacing: 6px;\n  color: var(--gold-dim);\n  text-transform: uppercase;\n  margin-bottom: 0.75rem;\n}\n.districts-title {\n  font-family: "Cinzel", serif;\n  font-size: clamp(1.4rem, 2.5vw, 2rem);\n  color: var(--gold-light);\n  font-weight: 600;\n  margin-bottom: 2.5rem;\n}\n.district-grid {\n  display: flex;\n  flex-direction: column;\n}\n.district-card {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 3.5rem;\n  align-items: center;\n  padding: 4rem 0;\n  border-top: 1px solid var(--border);\n  scroll-margin-top: 88px;\n}\n.district-card:first-child {\n  border-top: none;\n}\n.district-card:nth-child(even) .district-frame {\n  order: 2;\n}\n.district-card:nth-child(even) .district-info {\n  order: 1;\n}\n.district-card {\n  transform: translateY(24px);\n  transition: opacity 0.7s ease, transform 0.7s ease;\n}\n.district-card.is-visible {\n  opacity: 1;\n  transform: translateY(0);\n}\n.district-frame {\n  aspect-ratio: 4/3;\n  position: relative;\n  background:\n    repeating-linear-gradient(\n      45deg,\n      rgba(122, 96, 48, 0.05) 0 10px,\n      transparent 10px 20px),\n    var(--bg-deep);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  border: 1px solid var(--border);\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);\n}\n.district-frame img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.district-frame .frame-empty {\n  font-family: "Cinzel", serif;\n  font-size: 11px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: var(--text-dim);\n  opacity: 0.5;\n}\n.district-info {\n  padding: 0;\n}\n.district-name {\n  font-family: "Cinzel", serif;\n  font-size: clamp(1.3rem, 2vw, 1.7rem);\n  color: var(--gold-light);\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n.district-desc {\n  font-size: 1.05rem;\n  color: var(--text);\n  line-height: 1.75;\n}\n@media (max-width: 900px) {\n  .city-hero {\n    padding: 7rem 1.5rem 3rem;\n  }\n  .city-body {\n    padding: 3rem 1.5rem 1.5rem;\n  }\n  .districts {\n    padding: 1.5rem 1.5rem 3rem;\n  }\n  .district-grid {\n    grid-template-columns: none;\n  }\n  .district-card {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n    padding: 2.5rem 0;\n  }\n  .district-card:nth-child(even) .district-frame {\n    order: 0;\n  }\n  .district-card:nth-child(even) .district-info {\n    order: 0;\n  }\n  .city-fulllink,\n  .city-crosslinks {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n  .city-nav {\n    padding: 0 1.5rem;\n  }\n}\n@media (max-width: 600px) {\n  .district-frame {\n    aspect-ratio: 4/3;\n  }\n}\n/*# sourceMappingURL=city-M6WE4YCY.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(City, { className: "City", filePath: "src/app/pages/city/city.ts", lineNumber: 17 });
})();
export {
  City
};
//# sourceMappingURL=chunk-F2HO46RM.js.map
