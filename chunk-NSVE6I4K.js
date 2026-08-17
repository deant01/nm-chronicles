import {
  CharacterDataService,
  Loader,
  LoaderService
} from "./chunk-VNLL7XNF.js";
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
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-772GF5FN.js";

// src/app/layout/shared-components/characters/characters.ts
var _c0 = (a0) => ["/character", a0];
var _c1 = (a0) => ({ character: a0 });
var _forTrack0 = ($index, $item) => $item.slug;
function Characters_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loader", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("message", ctx_r0.content.loadingMessage);
  }
}
function Characters_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function Characters_Conditional_15_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 13)(1, "div", 14);
    \u0275\u0275element(2, "img", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16)(4, "div", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 19);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const character_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, character_r2.slug))("state", \u0275\u0275pureFunction1(11, _c1, character_r2));
    \u0275\u0275attribute("aria-label", "View details for " + character_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("alt", \u0275\u0275interpolate(character_r2.images.portrait.alt))("src", ctx_r0.assetUrl(character_r2.images.portrait.src), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(character_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(character_r2.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(character_r2.quote);
  }
}
function Characters_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, Characters_Conditional_15_For_1_Template, 10, 13, "a", 13, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.characters());
  }
}
var Characters = class _Characters {
  characterDataService = inject(CharacterDataService);
  contentService = inject(ContentService);
  envConfig = inject(APP_ENVIRONMENT_CONFIG);
  loaderService = inject(LoaderService);
  content = this.contentService.getHomeContent().characters;
  characters = signal(
    [],
    ...ngDevMode ? [{ debugName: "characters" }] : (
      /* istanbul ignore next */
      []
    )
  );
  assetUrl = (path) => buildAssetUrl(this.envConfig.assetBasePath, path);
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
  constructor() {
    this.loadCharacters();
  }
  async loadCharacters() {
    this.loading.set(true);
    this.error.set(null);
    this.loaderService.show(this.content.loadingMessage);
    try {
      const value = await this.characterDataService.getCharacters();
      this.characters.set(value);
    } catch {
      this.error.set(this.content.errorMessage);
    } finally {
      this.loading.set(false);
      this.loaderService.hide();
    }
  }
  static \u0275fac = function Characters_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Characters)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Characters, selectors: [["app-characters"]], decls: 20, vars: 7, consts: [["id", "characters", "appScrollReveal", "is-visible", 1, "characters-section", "fade-up-section"], [1, "characters-header"], [1, "section-label"], [1, "section-title"], [1, "ornament"], [1, "ornament-line"], [1, "ornament-diamond"], [1, "section-lead"], [1, "char-grid"], [3, "message"], [1, "error-state"], [1, "char-footnote"], ["data-site-link", "fandomWiki", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Open Newport Maeve wiki in a new tab", 3, "href"], ["appScrollReveal", "is-visible", 1, "char-card", "fade-up-section", 3, "routerLink", "state"], [1, "char-frame"], ["loading", "lazy", 3, "src", "alt"], [1, "char-card-overlay"], [1, "char-card-name"], [1, "char-card-role"], [1, "char-card-quote"]], template: function Characters_Template(rf, ctx) {
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
      \u0275\u0275elementStart(12, "div", 8);
      \u0275\u0275conditionalCreate(13, Characters_Conditional_13_Template, 1, 1, "app-loader", 9)(14, Characters_Conditional_14_Template, 2, 1, "div", 10)(15, Characters_Conditional_15_Template, 2, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p", 11);
      \u0275\u0275text(17);
      \u0275\u0275elementStart(18, "a", 12);
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
      \u0275\u0275conditional(ctx.loading() ? 13 : ctx.error() ? 14 : 15);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", ctx.content.footnoteText, " ");
      \u0275\u0275advance();
      \u0275\u0275property("href", ctx.content.wikiLinkHref, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.content.wikiLinkText);
    }
  }, dependencies: [RouterLink, Loader, ScrollRevealDirective], styles: ['@charset "UTF-8";\n\n\n.characters-section[_ngcontent-%COMP%] {\n  background: var(--bg-section);\n  max-width: 100%;\n}\n.characters-header[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 600px;\n  margin: 0 auto 4rem;\n}\n.char-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n  max-width: 1100px;\n  margin: 0 auto;\n  min-height: calc(min(100vw, 1100px) / 3 * 1.3333333333 * 2);\n}\n.char-card[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  color: inherit;\n  position: relative;\n  cursor: pointer;\n  border: 1px solid var(--border);\n  background: var(--bg-card);\n  overflow: hidden;\n  transition:\n    transform 0.3s ease,\n    border-color 0.3s ease,\n    box-shadow 0.3s ease;\n}\n.char-frame[_ngcontent-%COMP%] {\n  aspect-ratio: 3/4;\n  height: 100%;\n  position: relative;\n  background:\n    repeating-linear-gradient(\n      45deg,\n      rgba(122, 96, 48, 0.05) 0 10px,\n      transparent 10px 20px),\n    var(--bg-deep);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.char-frame[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center top;\n  transition: transform 0.6s ease, filter 0.6s ease;\n  filter: brightness(0.72) saturate(0.85);\n}\n.char-frame[_ngcontent-%COMP%]   .frame-empty[_ngcontent-%COMP%] {\n  font-family: "Cinzel", serif;\n  font-size: 10px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: var(--text-dim);\n  opacity: 0.5;\n}\n.char-card-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.95) 0%,\n      rgba(0, 0, 0, 0.35) 45%,\n      transparent 75%);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 1.5rem;\n  transition: opacity 0.3s;\n  pointer-events: none;\n}\n.char-card-name[_ngcontent-%COMP%] {\n  font-family: "Cinzel", serif;\n  font-size: 1.1rem;\n  color: var(--gold-light);\n  font-weight: 600;\n  margin-bottom: 2px;\n}\n.char-card-role[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text);\n  letter-spacing: 1px;\n  font-style: italic;\n  margin-bottom: 0.6rem;\n}\n.char-card-quote[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--text);\n  font-style: italic;\n  line-height: 1.4;\n  opacity: 0;\n  transform: translateY(8px);\n  transition: opacity 0.4s, transform 0.4s;\n  border-left: 2px solid var(--crimson);\n  padding-left: 0.6rem;\n}\n@media (hover: hover) {\n  .char-card[_ngcontent-%COMP%]:hover {\n    transform: translateY(-4px);\n    border-color: var(--gold-dim);\n    box-shadow: 0 14px 40px rgba(0, 0, 0, 0.7), 0 0 0 1px var(--gold-dim);\n  }\n  .char-card[_ngcontent-%COMP%]:hover   .char-frame[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    transform: scale(1.05);\n    filter: brightness(0.95) saturate(1);\n  }\n  .char-card[_ngcontent-%COMP%]:hover   .char-card-quote[_ngcontent-%COMP%] {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.char-card[_ngcontent-%COMP%]::after {\n  content: "\\2197";\n  position: absolute;\n  top: 0.8rem;\n  right: 0.9rem;\n  font-size: 1.1rem;\n  color: var(--gold-light);\n  opacity: 0;\n  transition: opacity 0.3s;\n  text-shadow: 0 0 8px rgba(0, 0, 0, 0.9);\n  pointer-events: none;\n  z-index: 2;\n}\n@media (hover: hover) {\n  .char-card[_ngcontent-%COMP%]:hover::after {\n    opacity: 0.9;\n  }\n}\n.char-footnote[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2.5rem;\n  font-size: 0.85rem;\n  color: var(--text-dim);\n  font-style: italic;\n  letter-spacing: 1px;\n}\n.char-footnote[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--gold-dim);\n  text-decoration: none;\n}\n@media (max-width: 900px) {\n  .char-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 1.2rem;\n    min-height: calc(min(100vw, 1100px) / 2 * 1.3333333333 * 3);\n  }\n}\n@media (max-width: 600px) {\n  .char-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.2rem;\n    min-height: auto;\n  }\n}\n.char-index[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  list-style: none;\n  max-width: 700px;\n  margin: 0 auto;\n  padding: 0;\n  text-align: left;\n}\n.char-index[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.9rem 0;\n  border-bottom: 1px solid var(--border);\n  color: var(--text-dim);\n}\n.char-index[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.char-index[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: "Cinzel", serif;\n  font-size: 1rem;\n  letter-spacing: 1px;\n  color: var(--gold-light);\n  text-decoration: none;\n  transition: color 0.3s;\n}\n.char-index[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--gold);\n}\n/*# sourceMappingURL=characters-CTHP467L.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Characters, [{
    type: Component,
    args: [{ selector: "app-characters", imports: [RouterLink, Loader, ScrollRevealDirective], template: `<section id="characters" class="characters-section fade-up-section" appScrollReveal="is-visible">\r
    <div class="characters-header">\r
        <p class="section-label">{{ content.label }}</p>\r
        <h2 class="section-title">{{ content.title }}</h2>\r
        <div class="ornament">\r
            <div class="ornament-line"></div>\r
            <div class="ornament-diamond"></div>\r
            <div class="ornament-line"></div>\r
        </div>\r
        <p class="section-lead">{{ content.lead }}</p>\r
    </div>\r
    <div class="char-grid">\r
      @if (loading()) {\r
        <app-loader [message]="content.loadingMessage"></app-loader>\r
      } @else if (error()) {\r
        <div class="error-state">{{ error() }}</div>\r
      } @else {\r
        @for (character of characters(); track character.slug) {\r
          <a class="char-card fade-up-section" appScrollReveal="is-visible"\r
            [routerLink]="['/character', character.slug]"\r
            [state]="{ character }"\r
            [attr.aria-label]="'View details for ' + character.name">\r
            <div class="char-frame">\r
              <img [src]="assetUrl(character.images.portrait.src)"\r
                alt="{{ character.images.portrait.alt }}"\r
                loading="lazy">\r
            </div>\r
            <div class="char-card-overlay"> \r
              <div class="char-card-name">{{ character.name }}</div>\r
              <div class="char-card-role">{{ character.role }}</div>\r
              <div class="char-card-quote">{{ character.quote }}</div>\r
            </div>\r
          </a>\r
        }\r
      }\r
    </div>\r
    <p class="char-footnote">{{ content.footnoteText }}\r
        <a [href]="content.wikiLinkHref" data-site-link="fandomWiki"\r
            target="_blank" rel="noopener noreferrer" aria-label="Open Newport Maeve wiki in a new tab">{{ content.wikiLinkText }}</a></p>\r
</section>`, styles: ['@charset "UTF-8";\n\n/* src/app/layout/shared-components/characters/characters.scss */\n.characters-section {\n  background: var(--bg-section);\n  max-width: 100%;\n}\n.characters-header {\n  text-align: center;\n  max-width: 600px;\n  margin: 0 auto 4rem;\n}\n.char-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n  max-width: 1100px;\n  margin: 0 auto;\n  min-height: calc(min(100vw, 1100px) / 3 * 1.3333333333 * 2);\n}\n.char-card {\n  display: block;\n  text-decoration: none;\n  color: inherit;\n  position: relative;\n  cursor: pointer;\n  border: 1px solid var(--border);\n  background: var(--bg-card);\n  overflow: hidden;\n  transition:\n    transform 0.3s ease,\n    border-color 0.3s ease,\n    box-shadow 0.3s ease;\n}\n.char-frame {\n  aspect-ratio: 3/4;\n  height: 100%;\n  position: relative;\n  background:\n    repeating-linear-gradient(\n      45deg,\n      rgba(122, 96, 48, 0.05) 0 10px,\n      transparent 10px 20px),\n    var(--bg-deep);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.char-frame img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center top;\n  transition: transform 0.6s ease, filter 0.6s ease;\n  filter: brightness(0.72) saturate(0.85);\n}\n.char-frame .frame-empty {\n  font-family: "Cinzel", serif;\n  font-size: 10px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: var(--text-dim);\n  opacity: 0.5;\n}\n.char-card-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.95) 0%,\n      rgba(0, 0, 0, 0.35) 45%,\n      transparent 75%);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 1.5rem;\n  transition: opacity 0.3s;\n  pointer-events: none;\n}\n.char-card-name {\n  font-family: "Cinzel", serif;\n  font-size: 1.1rem;\n  color: var(--gold-light);\n  font-weight: 600;\n  margin-bottom: 2px;\n}\n.char-card-role {\n  font-size: 0.8rem;\n  color: var(--text);\n  letter-spacing: 1px;\n  font-style: italic;\n  margin-bottom: 0.6rem;\n}\n.char-card-quote {\n  font-size: 0.82rem;\n  color: var(--text);\n  font-style: italic;\n  line-height: 1.4;\n  opacity: 0;\n  transform: translateY(8px);\n  transition: opacity 0.4s, transform 0.4s;\n  border-left: 2px solid var(--crimson);\n  padding-left: 0.6rem;\n}\n@media (hover: hover) {\n  .char-card:hover {\n    transform: translateY(-4px);\n    border-color: var(--gold-dim);\n    box-shadow: 0 14px 40px rgba(0, 0, 0, 0.7), 0 0 0 1px var(--gold-dim);\n  }\n  .char-card:hover .char-frame img {\n    transform: scale(1.05);\n    filter: brightness(0.95) saturate(1);\n  }\n  .char-card:hover .char-card-quote {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.char-card::after {\n  content: "\\2197";\n  position: absolute;\n  top: 0.8rem;\n  right: 0.9rem;\n  font-size: 1.1rem;\n  color: var(--gold-light);\n  opacity: 0;\n  transition: opacity 0.3s;\n  text-shadow: 0 0 8px rgba(0, 0, 0, 0.9);\n  pointer-events: none;\n  z-index: 2;\n}\n@media (hover: hover) {\n  .char-card:hover::after {\n    opacity: 0.9;\n  }\n}\n.char-footnote {\n  text-align: center;\n  margin-top: 2.5rem;\n  font-size: 0.85rem;\n  color: var(--text-dim);\n  font-style: italic;\n  letter-spacing: 1px;\n}\n.char-footnote a {\n  color: var(--gold-dim);\n  text-decoration: none;\n}\n@media (max-width: 900px) {\n  .char-grid {\n    grid-template-columns: 1fr 1fr;\n    gap: 1.2rem;\n    min-height: calc(min(100vw, 1100px) / 2 * 1.3333333333 * 3);\n  }\n}\n@media (max-width: 600px) {\n  .char-grid {\n    grid-template-columns: 1fr;\n    gap: 1.2rem;\n    min-height: auto;\n  }\n}\n.char-index {\n  grid-column: 1/-1;\n  list-style: none;\n  max-width: 700px;\n  margin: 0 auto;\n  padding: 0;\n  text-align: left;\n}\n.char-index li {\n  padding: 0.9rem 0;\n  border-bottom: 1px solid var(--border);\n  color: var(--text-dim);\n}\n.char-index li:last-child {\n  border-bottom: none;\n}\n.char-index a {\n  font-family: "Cinzel", serif;\n  font-size: 1rem;\n  letter-spacing: 1px;\n  color: var(--gold-light);\n  text-decoration: none;\n  transition: color 0.3s;\n}\n.char-index a:hover {\n  color: var(--gold);\n}\n/*# sourceMappingURL=characters-CTHP467L.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Characters, { className: "Characters", filePath: "src/app/layout/shared-components/characters/characters.ts", lineNumber: 16 });
})();
export {
  Characters
};
//# sourceMappingURL=chunk-NSVE6I4K.js.map
