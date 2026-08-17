import {
  LightHouseService
} from "./chunk-E53G3QOB.js";
import {
  ShareOn
} from "./chunk-3HGFRMYI.js";
import {
  CharacterDataService,
  Loader,
  LoaderService
} from "./chunk-VNLL7XNF.js";
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
  ActivatedRoute,
  Component,
  ContentService,
  Meta,
  Router,
  RouterLink,
  Title,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵariaProperty,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
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

// src/app/pages/character/character.ts
var _c0 = () => ["/"];
var _c1 = () => [];
function _forTrack0($index, $item) {
  return this.character()?.abilities?.indexOf($item);
}
function _forTrack1($index, $item) {
  return this.character()?.affiliations?.indexOf($item);
}
function _forTrack2($index, $item) {
  return this.character()?.traits?.indexOf($item);
}
function Character_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h1", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.template.pageEyebrow);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.character()?.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.character()?.tagline);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u201C", ctx_r0.character()?.quote, "\u201D");
  }
}
function Character_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h1", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.template.pageEyebrow);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.template.loadingTitle);
  }
}
function Character_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h1", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.template.pageEyebrow);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.template.notFoundTitle);
  }
}
function Character_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "app-loader", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("message", \u0275\u0275interpolate(ctx_r0.template.loadingTitle));
  }
}
function Character_Conditional_6_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ability_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ability_r3);
  }
}
function Character_Conditional_6_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const affiliation_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(affiliation_r4);
  }
}
function Character_Conditional_6_For_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const trait_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(trait_r5);
  }
}
function Character_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "aside", 14)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 15)(5, "div", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 15)(10, "div", 16);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 17);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 15)(15, "div", 16);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 17)(18, "ul");
    \u0275\u0275repeaterCreate(19, Character_Conditional_6_For_20_Template, 2, 1, "li", null, _forTrack0, true);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 15)(22, "div", 16);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 17);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 15)(27, "div", 16);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 17);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 15)(32, "div", 16);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 17);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 15)(37, "div", 16);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 17);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 15)(42, "div", 16);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 17)(45, "ul");
    \u0275\u0275repeaterCreate(46, Character_Conditional_6_For_47_Template, 2, 1, "li", null, _forTrack1, true);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 15)(49, "div", 16);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 17)(52, "ul");
    \u0275\u0275repeaterCreate(53, Character_Conditional_6_For_54_Template, 2, 1, "li", null, _forTrack2, true);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(55, "section", 18)(56, "p", 19);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "h2", 20);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd();
    \u0275\u0275element(60, "div", 21);
    \u0275\u0275elementStart(61, "div", 22)(62, "p");
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 23)(65, "div", 24)(66, "div", 25)(67, "div", 26)(68, "button", 27);
    \u0275\u0275listener("click", function Character_Conditional_6_Template_button_click_68_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openLightbox(ctx_r0.assetUrl(ctx_r0.character()?.images?.portrait?.src || ""), ctx_r0.character()?.images?.portrait?.alt || "Portrait"));
    });
    \u0275\u0275element(69, "img", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 29);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 25)(73, "div", 26)(74, "button", 30);
    \u0275\u0275listener("click", function Character_Conditional_6_Template_button_click_74_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openLightbox(ctx_r0.assetUrl(ctx_r0.character()?.images?.item?.src || ""), ctx_r0.character()?.images?.item?.alt || "Item image"));
    });
    \u0275\u0275element(75, "img", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 29);
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(78, "div", 32)(79, "div", 26)(80, "button", 33);
    \u0275\u0275listener("click", function Character_Conditional_6_Template_button_click_80_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openLightbox(ctx_r0.assetUrl(ctx_r0.character()?.images?.turnaround?.src || ""), ctx_r0.character()?.images?.turnaround?.alt || "Turnaround view"));
    });
    \u0275\u0275element(81, "img", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 29);
    \u0275\u0275text(83);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(84, "div", 34)(85, "button", 35);
    \u0275\u0275listener("click", function Character_Conditional_6_Template_button_click_85_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openLightbox(ctx_r0.assetUrl(ctx_r0.character()?.images?.sheet?.src || ""), ctx_r0.character()?.images?.sheet?.alt || ctx_r0.character()?.name + " full character sheet"));
    });
    \u0275\u0275text(86);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.template.profileTitle);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.template.propertyLabels.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.character()?.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.template.propertyLabels.race);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.character()?.race);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.template.propertyLabels.abilities);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.character()?.abilities ?? \u0275\u0275pureFunction0(33, _c1));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.template.propertyLabels.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.character()?.role);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.template.propertyLabels.age);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.character()?.age);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.template.propertyLabels.hair);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.character()?.appearance?.hair);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.template.propertyLabels.eyes);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.character()?.appearance?.eyes);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.template.propertyLabels.affiliations);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.character()?.affiliations ?? \u0275\u0275pureFunction0(34, _c1));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.template.propertyLabels.traits);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.character()?.traits ?? \u0275\u0275pureFunction0(35, _c1));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.template.sectionTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.character()?.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.character()?.bio);
    \u0275\u0275advance(5);
    \u0275\u0275ariaProperty("aria-label", \u0275\u0275interpolate1("Open portrait of ", ctx_r0.character()?.name));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.assetUrl(ctx_r0.character()?.images?.portrait?.src || ""), \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("alt", ctx_r0.character()?.images?.portrait?.alt || "Portrait");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.template.portraitLabel);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r0.assetUrl(ctx_r0.character()?.images?.item?.src || ""), \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("alt", ctx_r0.character()?.images?.item?.alt || "Item image");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.template.insigniaLabel);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r0.assetUrl(ctx_r0.character()?.images?.turnaround?.src || ""), \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("alt", ctx_r0.character()?.images?.turnaround?.alt || "Turnaround view");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.template.turnaroundLabel);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-full", ctx_r0.assetUrl(ctx_r0.character()?.images?.sheet?.src || ""))("data-alt", ctx_r0.character()?.images?.sheet?.alt || ctx_r0.character()?.name + " full character sheet");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.template.viewSheetLabel, " ");
  }
}
var Character = class _Character {
  lightHouseService = inject(LightHouseService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  characterDataService = inject(CharacterDataService);
  loaderService = inject(LoaderService);
  envConfig = inject(APP_ENVIRONMENT_CONFIG);
  contentService = inject(ContentService);
  assetUrl = (path) => buildAssetUrl(this.envConfig.assetBasePath, path);
  template = this.contentService.getTemplateContent().characterPage;
  character = signal(
    null,
    ...ngDevMode ? [{ debugName: "character" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = signal(
    true,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  error = signal(
    null,
    ...ngDevMode ? [{ debugName: "error" }] : (
      /* istanbul ignore next */
      []
    )
  );
  shareUrl = computed(
    () => typeof window !== "undefined" ? window.location.href : this.envConfig.canonicalUrl,
    ...ngDevMode ? [{ debugName: "shareUrl" }] : (
      /* istanbul ignore next */
      []
    )
  );
  characterName = computed(
    () => this.character()?.name ?? "",
    ...ngDevMode ? [{ debugName: "characterName" }] : (
      /* istanbul ignore next */
      []
    )
  );
  characterTagline = computed(
    () => this.character()?.tagline ?? "",
    ...ngDevMode ? [{ debugName: "characterTagline" }] : (
      /* istanbul ignore next */
      []
    )
  );
  characterQuote = computed(
    () => this.character()?.quote ?? "",
    ...ngDevMode ? [{ debugName: "characterQuote" }] : (
      /* istanbul ignore next */
      []
    )
  );
  titleService = inject(Title);
  metaService = inject(Meta);
  constructor() {
    this.loadCharacter();
  }
  openLightbox(src, alt = "", description = "") {
    console.log(`Character: openLightbox() called `);
    this.lightHouseService.show(src, alt, description);
  }
  navigateHome(event, section) {
    event.preventDefault();
    this.router.navigate([""], { state: { homeSection: section } });
  }
  async loadCharacter() {
    this.loading.set(true);
    this.error.set(null);
    this.loaderService.show("Loading character details\u2026");
    const routeCharacter = this.route.snapshot.data["character"];
    if (routeCharacter !== void 0) {
      if (routeCharacter) {
        this.character.set(routeCharacter);
        this.setCharacterMeta(routeCharacter);
      } else {
        this.error.set("Character not found.");
      }
      this.loading.set(false);
      this.loaderService.hide();
      return;
    }
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state?.character) {
      this.character.set(state.character);
      this.setCharacterMeta(state.character);
      this.loading.set(false);
      this.loaderService.hide();
      return;
    }
    const slug = this.route.snapshot.paramMap.get("id");
    if (!slug) {
      this.error.set("Character not found.");
      this.loading.set(false);
      return;
    }
    try {
      const character = await this.characterDataService.getCharacter(slug);
      if (!character) {
        this.error.set("Character not found.");
      } else {
        this.character.set(character);
        this.setCharacterMeta(character);
      }
    } catch {
      this.error.set("Unable to load character details.");
    } finally {
      this.loading.set(false);
      this.loaderService.hide();
    }
  }
  setCharacterMeta(character) {
    const title = `${character.name} | Newport Maeve Chronicles`;
    const description = character.tagline || character.quote || "Explore the characters of the Newport Maeve Chronicles.";
    const image = this.assetUrl(character.images.portrait.src || "assets/images/cover.webp");
    const url = `${this.envConfig.canonicalUrl}character/${character.slug}`;
    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: "description", content: description });
    this.metaService.updateTag({ property: "og:title", content: title });
    this.metaService.updateTag({ property: "og:description", content: description });
    this.metaService.updateTag({ property: "og:image", content: image });
    this.metaService.updateTag({ property: "og:url", content: url });
    this.metaService.updateTag({ name: "twitter:title", content: title });
    this.metaService.updateTag({ name: "twitter:description", content: description });
    this.metaService.updateTag({ name: "twitter:image", content: image });
  }
  static \u0275fac = function Character_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Character)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Character, selectors: [["app-character"]], decls: 17, vars: 14, consts: [["appScrollReveal", "is-visible", 1, "sheet-hero", "fade-up-section"], [1, "sheet-hero-inner"], [1, "sheet-body"], ["appScrollReveal", "is-visible", 1, "sheet-body", "fade-up-section"], [3, "url", "text", "mediaUrl", "mediaAlt", "pageDescription"], [1, "sheet-crosslinks"], ["data-home-section", "characters", 3, "click", "routerLink"], ["href", "https://newport-maeve.fandom.com/wiki/Newport_Maeve_Chronicles_Wiki", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Open Newport Maeve wiki in a new tab"], ["data-home-section", "listen", 3, "click", "routerLink"], [1, "sheet-eyebrow"], [1, "sheet-name"], [1, "sheet-tagline"], [1, "sheet-quote"], [3, "message"], [1, "profile-block"], [1, "profile-row"], [1, "profile-key"], [1, "profile-val"], ["appScrollReveal", "is-visible", 1, "sheet-main", "fade-up-section"], [1, "section-label"], [1, "section-title"], [1, "divider"], [1, "sheet-bio"], [1, "sheet-gallery"], [1, "gallery-row"], ["appScrollReveal", "is-visible", 1, "gallery-slot", "fade-up-section"], [1, "gallery-frame"], ["type", "button", 1, "gallery-image-button", 3, "click", "aria-label"], ["loading", "lazy", "onerror", `this.style.display='none';
                this.parentNode.classList.add('is-empty');
                this.parentNode.insertAdjacentHTML('beforeend','<span class="frame-empty">Coming soon</span>')`, 2, "cursor", "zoom-in", 3, "src"], [1, "gallery-label"], ["type", "button", "aria-label", "Open item image", 1, "gallery-image-button", 3, "click"], ["loading", "lazy", "onerror", `this.style.display='none';
              this.parentNode.classList.add('is-empty');
              this.parentNode.insertAdjacentHTML('beforeend','<span class="frame-empty">Coming soon</span>')`, 2, "cursor", "zoom-in", 3, "src"], ["appScrollReveal", "is-visible", 1, "gallery-slot", "gallery-slot--wide", "fade-up-section"], ["type", "button", "aria-label", "Open turnaround view", 1, "gallery-image-button", 3, "click"], [1, "sheet-fulllink"], ["id", "viewSheet", "type", "button", 3, "click"]], template: function Character_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1);
      \u0275\u0275conditionalCreate(2, Character_Conditional_2_Template, 8, 4)(3, Character_Conditional_3_Template, 4, 2)(4, Character_Conditional_4_Template, 4, 2);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(5, Character_Conditional_5_Template, 2, 2, "div", 2)(6, Character_Conditional_6_Template, 87, 36, "div", 3);
      \u0275\u0275elementStart(7, "section");
      \u0275\u0275element(8, "app-share-on", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "nav", 5)(10, "a", 6);
      \u0275\u0275listener("click", function Character_Template_a_click_10_listener($event) {
        return ctx.navigateHome($event, "characters");
      });
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "a", 7);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "a", 8);
      \u0275\u0275listener("click", function Character_Template_a_click_14_listener($event) {
        return ctx.navigateHome($event, "listen");
      });
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(16, "app-contacts");
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.character() ? 2 : ctx.loading() ? 3 : 4);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 5 : ctx.character() ? 6 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("url", ctx.shareUrl())("text", `Explore ${ctx.characterName()} from the Newport Maeve Chronicles.`)("mediaUrl", ctx.character()?.images?.portrait?.src || "")("mediaAlt", ctx.character()?.images?.portrait?.alt || "")("pageDescription", ctx.character()?.tagline || "");
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c0));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.template.backToCharacters);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.template.fandomWikiLabel, " ");
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(13, _c0));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.template.listenPrequel);
    }
  }, dependencies: [Contacts, Loader, ScrollRevealDirective, RouterLink, ShareOn], styles: ['@charset "UTF-8";\n\n\nsection[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.sheet-body[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 4rem 4rem 6rem;\n  display: grid;\n  grid-template-columns: 320px 1fr;\n  gap: 4rem;\n  align-items: start;\n}\n.profile-block[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  background: var(--bg-card);\n  padding: 2rem;\n  position: sticky;\n  top: 88px;\n}\n.profile-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: "Cinzel", serif;\n  font-size: 12px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  color: var(--gold);\n  margin-bottom: 1.5rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid var(--border);\n}\n.profile-row[_ngcontent-%COMP%] {\n  margin-bottom: 1.1rem;\n}\n.profile-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.profile-key[_ngcontent-%COMP%] {\n  font-family: "Cinzel", serif;\n  font-size: 9px;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  color: var(--gold-dim);\n  margin-bottom: 0.25rem;\n}\n.profile-val[_ngcontent-%COMP%] {\n  color: var(--text);\n  font-size: 1rem;\n  line-height: 1.5;\n}\n.profile-val[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.profile-val[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 1rem;\n}\n.profile-val[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0.6em;\n  width: 4px;\n  height: 4px;\n  background: var(--gold-dim);\n  transform: rotate(45deg);\n}\n.sheet-main[_ngcontent-%COMP%]   .section-label[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.sheet-bio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--text);\n  margin-bottom: 1.2rem;\n}\n.sheet-bio[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: var(--gold);\n  font-style: italic;\n}\n.sheet-gallery[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.gallery-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.gallery-row[_ngcontent-%COMP%]   .gallery-slot[_ngcontent-%COMP%] {\n  width: 48%;\n  flex: 0 0 auto;\n}\n.gallery-slot--wide[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.gallery-slot--wide[_ngcontent-%COMP%]   .gallery-frame[_ngcontent-%COMP%] {\n  aspect-ratio: 16/9;\n}\n.gallery-slot[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  background: var(--bg-card);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.gallery-frame[_ngcontent-%COMP%] {\n  aspect-ratio: 3/4;\n  background:\n    repeating-linear-gradient(\n      45deg,\n      rgba(122, 96, 48, 0.05) 0 10px,\n      transparent 10px 20px),\n    var(--bg-deep);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: zoom-in;\n  position: relative;\n}\n.gallery-frame[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.gallery-frame[_ngcontent-%COMP%]   .frame-empty[_ngcontent-%COMP%] {\n  font-family: "Cinzel", serif;\n  font-size: 10px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: var(--text-dim);\n  opacity: 0.5;\n}\n.gallery-label[_ngcontent-%COMP%] {\n  font-family: "Cinzel", serif;\n  font-size: 10px;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  color: var(--gold-dim);\n  text-align: center;\n  padding: 0.85rem;\n  border-top: 1px solid var(--border);\n}\n.sheet-fulllink[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  margin-top: 3rem;\n  border-top: 1px solid var(--border);\n  display: flex;\n  justify-content: center;\n}\n.sheet-crosslinks[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n@media (max-width: 900px) {\n  .sheet-hero[_ngcontent-%COMP%] {\n    padding: 7rem 1.5rem 3rem;\n  }\n  .sheet-body[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n    padding: 3rem 1.5rem 4rem;\n  }\n  .profile-block[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .sheet-gallery[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .gallery-row[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .gallery-frame[_ngcontent-%COMP%] {\n    max-height: 98vh;\n  }\n  .gallery-frame[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    object-position: top;\n  }\n  .sheet-nav[_ngcontent-%COMP%] {\n    padding: 0 1.5rem;\n  }\n  .sheet-crosslinks[_ngcontent-%COMP%] {\n    padding: 0 1.5rem 4rem;\n  }\n}\n@media (max-width: 600px) {\n  .gallery-row[_ngcontent-%COMP%]   .gallery-slot[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=character-4PIMTMUH.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Character, [{
    type: Component,
    args: [{ selector: "app-character", imports: [Contacts, Loader, ScrollRevealDirective, RouterLink, ShareOn], template: `<header class="sheet-hero fade-up-section" appScrollReveal="is-visible">\r
  <div class="sheet-hero-inner">\r
    @if (character()) {\r
    <p class="sheet-eyebrow">{{ template.pageEyebrow }}</p>\r
    <h1 class="sheet-name">{{ character()?.name }}</h1>\r
    <p class="sheet-tagline">{{ character()?.tagline }}</p>\r
    <div class="sheet-quote">\u201C{{ character()?.quote }}\u201D</div>\r
    } @else if (loading()) {\r
    <p class="sheet-eyebrow">{{ template.pageEyebrow }}</p>\r
    <h1 class="sheet-name">{{ template.loadingTitle }}</h1>\r
    } @else {\r
    <p class="sheet-eyebrow">{{ template.pageEyebrow }}</p>\r
    <h1 class="sheet-name">{{ template.notFoundTitle }}</h1>\r
    }\r
  </div>\r
</header>\r
\r
@if (loading()) {\r
<div class="sheet-body">\r
  <app-loader message="{{ template.loadingTitle }}"></app-loader>\r
</div>\r
} @else if (character()) {\r
<div class="sheet-body fade-up-section" appScrollReveal="is-visible">\r
  <aside class="profile-block">\r
    <h2>{{ template.profileTitle }}</h2>\r
    <div class="profile-row">\r
      <div class="profile-key">{{ template.propertyLabels.name }}</div>\r
      <div class="profile-val">{{ character()?.name }}</div>\r
    </div>\r
    <div class="profile-row">\r
      <div class="profile-key">{{ template.propertyLabels.race }}</div>\r
      <div class="profile-val">{{ character()?.race }}</div>\r
    </div>\r
    <div class="profile-row">\r
      <div class="profile-key">{{ template.propertyLabels.abilities }}</div>\r
      <div class="profile-val">\r
        <ul>\r
          @for (ability of character()?.abilities ?? [];\r
            track character()?.abilities?.indexOf(ability)) {\r
          <li>{{ ability }}</li>\r
          }\r
        </ul>\r
      </div>\r
    </div>\r
    <div class="profile-row">\r
      <div class="profile-key">{{ template.propertyLabels.role }}</div>\r
      <div class="profile-val">{{ character()?.role }}</div>\r
    </div>\r
    <div class="profile-row">\r
      <div class="profile-key">{{ template.propertyLabels.age }}</div>\r
      <div class="profile-val">{{ character()?.age }}</div>\r
    </div>\r
    <div class="profile-row">\r
      <div class="profile-key">{{ template.propertyLabels.hair }}</div>\r
      <div class="profile-val">{{ character()?.appearance?.hair }}</div>\r
    </div>\r
    <div class="profile-row">\r
      <div class="profile-key">{{ template.propertyLabels.eyes }}</div>\r
      <div class="profile-val">{{ character()?.appearance?.eyes }}</div>\r
    </div>\r
    <div class="profile-row">\r
      <div class="profile-key">{{ template.propertyLabels.affiliations }}</div>\r
      <div class="profile-val">\r
        <ul>\r
          @for (affiliation of character()?.affiliations ?? [];\r
            track character()?.affiliations?.indexOf(affiliation)) {\r
          <li>{{ affiliation }}</li>\r
          }\r
        </ul>\r
      </div>\r
    </div>\r
    <div class="profile-row">\r
      <div class="profile-key">{{ template.propertyLabels.traits }}</div>\r
      <div class="profile-val">\r
        <ul>\r
          @for (trait of character()?.traits ?? [];\r
            track character()?.traits?.indexOf(trait)) {\r
          <li>{{ trait }}</li>\r
          }\r
        </ul>\r
      </div>\r
    </div>\r
\r
  </aside>\r
\r
  <section class="sheet-main fade-up-section" appScrollReveal="is-visible">\r
    <p class="section-label">{{ template.sectionTitle }}</p>\r
    <h2 class="section-title">{{ character()?.name }}</h2>\r
    <div class="divider"></div>\r
    <div class="sheet-bio">\r
      <p>{{ character()?.bio }}</p>\r
    </div>\r
\r
    <div class="sheet-gallery">\r
      <div class="gallery-row">\r
        <div class="gallery-slot fade-up-section" appScrollReveal="is-visible">\r
          <div class="gallery-frame">\r
          <button type="button" class="gallery-image-button" aria-label="Open portrait of {{ character()?.name }}"\r
            (click)="openLightbox(assetUrl(character()?.images?.portrait?.src || ''), character()?.images?.portrait?.alt || 'Portrait')">\r
            <img [src]="assetUrl(character()?.images?.portrait?.src || '')"\r
              [attr.alt]="character()?.images?.portrait?.alt || 'Portrait'"\r
              loading="lazy"\r
              onerror="this.style.display='none';\r
                this.parentNode.classList.add('is-empty');\r
                this.parentNode.insertAdjacentHTML('beforeend','&lt;span class=&quot;frame-empty&quot;&gt;Coming soon&lt;/span&gt;')"\r
              style="cursor: zoom-in;">\r
          </button>\r
        </div>\r
          <div class="gallery-label">{{ template.portraitLabel }}</div>\r
        </div>\r
        <div class="gallery-slot fade-up-section" appScrollReveal="is-visible">\r
          <div class="gallery-frame">\r
          <button type="button" class="gallery-image-button" aria-label="Open item image"\r
            (click)="openLightbox(assetUrl(character()?.images?.item?.src || ''), character()?.images?.item?.alt || 'Item image')">\r
            <img [src]="assetUrl(character()?.images?.item?.src || '')"\r
              [attr.alt]="character()?.images?.item?.alt || 'Item image'"\r
              loading="lazy"\r
              onerror="this.style.display='none';\r
              this.parentNode.classList.add('is-empty');\r
              this.parentNode.insertAdjacentHTML('beforeend','&lt;span class=&quot;frame-empty&quot;&gt;Coming soon&lt;/span&gt;')"\r
              style="cursor: zoom-in;">\r
          </button>\r
        </div>\r
          <div class="gallery-label">{{ template.insigniaLabel }}</div>\r
        </div>\r
      </div>\r
      <div class="gallery-slot gallery-slot--wide fade-up-section" appScrollReveal="is-visible">\r
        <div class="gallery-frame">\r
          <button type="button" class="gallery-image-button" aria-label="Open turnaround view"\r
            (click)="openLightbox(assetUrl(character()?.images?.turnaround?.src || ''), character()?.images?.turnaround?.alt || 'Turnaround view')">\r
            <img [src]="assetUrl(character()?.images?.turnaround?.src || '')"\r
              [attr.alt]="character()?.images?.turnaround?.alt || 'Turnaround view'"\r
              loading="lazy"\r
              onerror="this.style.display='none';\r
              this.parentNode.classList.add('is-empty');\r
              this.parentNode.insertAdjacentHTML('beforeend','&lt;span class=&quot;frame-empty&quot;&gt;Coming soon&lt;/span&gt;')"\r
              style="cursor: zoom-in;">\r
          </button>\r
        </div>\r
        <div class="gallery-label">{{ template.turnaroundLabel }}</div>\r
      </div>\r
    </div>\r
\r
    <div class="sheet-fulllink">\r
      <button id="viewSheet" type="button"\r
        (click)="openLightbox(assetUrl(character()?.images?.sheet?.src || ''), character()?.images?.sheet?.alt || (character()?.name + ' full character sheet'))"\r
        [attr.data-full]="assetUrl(character()?.images?.sheet?.src || '')"\r
        [attr.data-alt]="character()?.images?.sheet?.alt || (character()?.name + ' full character sheet')">\r
        {{ template.viewSheetLabel }}\r
      </button>\r
    </div>\r
  </section>\r
</div>\r
}\r
<section>\r
  <app-share-on\r
    [url]="shareUrl()"\r
    [text]="\`Explore \${characterName()} from the Newport Maeve Chronicles.\`"\r
    [mediaUrl]="character()?.images?.portrait?.src || ''"\r
    [mediaAlt]="character()?.images?.portrait?.alt || ''"\r
    [pageDescription]="character()?.tagline || ''"\r
  ></app-share-on>\r
</section>\r
<nav class="sheet-crosslinks">\r
  <a [routerLink]="['/']" data-home-section="characters" (click)="navigateHome($event, 'characters')">{{ template.backToCharacters }}</a>\r
  <a href="https://newport-maeve.fandom.com/wiki/Newport_Maeve_Chronicles_Wiki" target="_blank" rel="noopener noreferrer" aria-label="Open Newport Maeve wiki in a new tab">\r
    {{ template.fandomWikiLabel }}\r
  </a>\r
  <a [routerLink]="['/']" data-home-section="listen" (click)="navigateHome($event, 'listen')">{{ template.listenPrequel }}</a>\r
</nav>\r
\r
<app-contacts></app-contacts>`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/character/character.scss */\nsection {\n  padding: 0;\n}\n.sheet-body {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 4rem 4rem 6rem;\n  display: grid;\n  grid-template-columns: 320px 1fr;\n  gap: 4rem;\n  align-items: start;\n}\n.profile-block {\n  border: 1px solid var(--border);\n  background: var(--bg-card);\n  padding: 2rem;\n  position: sticky;\n  top: 88px;\n}\n.profile-block h2 {\n  font-family: "Cinzel", serif;\n  font-size: 12px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  color: var(--gold);\n  margin-bottom: 1.5rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid var(--border);\n}\n.profile-row {\n  margin-bottom: 1.1rem;\n}\n.profile-row:last-child {\n  margin-bottom: 0;\n}\n.profile-key {\n  font-family: "Cinzel", serif;\n  font-size: 9px;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  color: var(--gold-dim);\n  margin-bottom: 0.25rem;\n}\n.profile-val {\n  color: var(--text);\n  font-size: 1rem;\n  line-height: 1.5;\n}\n.profile-val ul {\n  list-style: none;\n}\n.profile-val li {\n  position: relative;\n  padding-left: 1rem;\n}\n.profile-val li::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0.6em;\n  width: 4px;\n  height: 4px;\n  background: var(--gold-dim);\n  transform: rotate(45deg);\n}\n.sheet-main .section-label {\n  margin-top: 0;\n}\n.sheet-bio p {\n  font-size: 1.1rem;\n  color: var(--text);\n  margin-bottom: 1.2rem;\n}\n.sheet-bio em {\n  color: var(--gold);\n  font-style: italic;\n}\n.sheet-gallery {\n  margin-top: 3rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.gallery-row {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.gallery-row .gallery-slot {\n  width: 48%;\n  flex: 0 0 auto;\n}\n.gallery-slot--wide {\n  width: 100%;\n}\n.gallery-slot--wide .gallery-frame {\n  aspect-ratio: 16/9;\n}\n.gallery-slot {\n  border: 1px solid var(--border);\n  background: var(--bg-card);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.gallery-frame {\n  aspect-ratio: 3/4;\n  background:\n    repeating-linear-gradient(\n      45deg,\n      rgba(122, 96, 48, 0.05) 0 10px,\n      transparent 10px 20px),\n    var(--bg-deep);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: zoom-in;\n  position: relative;\n}\n.gallery-frame img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.gallery-frame .frame-empty {\n  font-family: "Cinzel", serif;\n  font-size: 10px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: var(--text-dim);\n  opacity: 0.5;\n}\n.gallery-label {\n  font-family: "Cinzel", serif;\n  font-size: 10px;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  color: var(--gold-dim);\n  text-align: center;\n  padding: 0.85rem;\n  border-top: 1px solid var(--border);\n}\n.sheet-fulllink button {\n  padding: 1rem 2rem;\n  margin-top: 3rem;\n  border-top: 1px solid var(--border);\n  display: flex;\n  justify-content: center;\n}\n.sheet-crosslinks {\n  justify-content: center;\n}\n@media (max-width: 900px) {\n  .sheet-hero {\n    padding: 7rem 1.5rem 3rem;\n  }\n  .sheet-body {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n    padding: 3rem 1.5rem 4rem;\n  }\n  .profile-block {\n    position: static;\n  }\n  .sheet-gallery {\n    gap: 1rem;\n  }\n  .gallery-row {\n    gap: 1rem;\n  }\n  .gallery-frame {\n    max-height: 98vh;\n  }\n  .gallery-frame img {\n    object-position: top;\n  }\n  .sheet-nav {\n    padding: 0 1.5rem;\n  }\n  .sheet-crosslinks {\n    padding: 0 1.5rem 4rem;\n  }\n}\n@media (max-width: 600px) {\n  .gallery-row .gallery-slot {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=character-4PIMTMUH.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Character, { className: "Character", filePath: "src/app/pages/character/character.ts", lineNumber: 20 });
})();
export {
  Character
};
//# sourceMappingURL=chunk-BFXXIOIR.js.map
