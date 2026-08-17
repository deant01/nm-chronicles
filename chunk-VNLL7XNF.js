import {
  APP_ENVIRONMENT_CONFIG,
  buildAssetUrl
} from "./chunk-R7LK4ESF.js";
import {
  Component,
  Injectable,
  Input,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵstyleProp,
  ɵɵtext
} from "./chunk-772GF5FN.js";

// src/app/services/character-data.service.ts
var CHARACTER_DATA_FILE = "assets/data/characters.json";
var CharacterDataService = class _CharacterDataService {
  envConfig = inject(APP_ENVIRONMENT_CONFIG);
  characterDataUrl = buildAssetUrl(this.envConfig.assetBasePath, CHARACTER_DATA_FILE);
  cache = null;
  async getCharacters() {
    if (this.cache) {
      return this.cache;
    }
    const response = await fetch(this.characterDataUrl);
    if (!response.ok) {
      throw new Error(`Failed to load character data: ${response.statusText}`);
    }
    this.cache = await response.json();
    return this.cache ?? [];
  }
  async getCharacter(slug) {
    const characters = await this.getCharacters();
    return characters.find((character) => character.slug === slug) ?? null;
  }
  static \u0275fac = function CharacterDataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CharacterDataService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CharacterDataService, factory: _CharacterDataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CharacterDataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/layout/shared-components/loader/loader.ts
var Loader = class _Loader {
  message = "Loading\u2026";
  inline = false;
  color = "var(--gold)";
  spinnerColor = "var(--gold-light)";
  static \u0275fac = function Loader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Loader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Loader, selectors: [["app-loader"]], hostAttrs: [1, "loader"], hostVars: 6, hostBindings: function Loader_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("--loader-color", ctx.color)("--loader-spinner-color", ctx.spinnerColor);
      \u0275\u0275classProp("loader--inline", ctx.inline);
    }
  }, inputs: { message: "message", inline: "inline", color: "color", spinnerColor: "spinnerColor" }, decls: 3, vars: 1, consts: [["role", "status", "aria-live", "polite", 1, "loader__inner"], [1, "loader__message"]], template: function Loader_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "span", 1);
      \u0275\u0275text(2, "NM");
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.message);
    }
  }, styles: ["\n.loader[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 10001;\n  display: grid;\n  place-items: center;\n  width: 100vw;\n  height: 100vh;\n  padding: 0;\n  background: rgba(0, 0, 0, 0.92);\n  color: var(--loader-color, var(--gold));\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n.loader--inline[_ngcontent-%COMP%] {\n  position: static;\n  inset: auto;\n  width: auto;\n  height: auto;\n  min-height: 0;\n  padding: 0;\n  background: transparent;\n  z-index: auto;\n}\n.loader__inner[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 1.25rem;\n  border-radius: 1rem;\n  background: black;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 9999;\n}\n.loader__inner[_ngcontent-%COMP%]   .loader__message[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  font-weight: 500;\n  color: var(--loader-color, var(--gold));\n  animation: _ngcontent-%COMP%_spinner 5s linear infinite;\n  margin: auto;\n}\n@keyframes _ngcontent-%COMP%_spinner {\n  to {\n    transform: rotateY(360deg);\n  }\n}\n/*# sourceMappingURL=loader-PYD6N6RG.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Loader, [{
    type: Component,
    args: [{ standalone: true, selector: "app-loader", host: {
      class: "loader",
      "[class.loader--inline]": "inline",
      "[style.--loader-color]": "color",
      "[style.--loader-spinner-color]": "spinnerColor"
    }, template: '<div class="loader__inner" role="status" aria-live="polite">\r\n  <span class="loader__message" aria-label="{{message}}">NM</span>\r\n</div>\r\n', styles: ["/* src/app/layout/shared-components/loader/loader.scss */\n.loader {\n  position: fixed;\n  inset: 0;\n  z-index: 10001;\n  display: grid;\n  place-items: center;\n  width: 100vw;\n  height: 100vh;\n  padding: 0;\n  background: rgba(0, 0, 0, 0.92);\n  color: var(--loader-color, var(--gold));\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n.loader--inline {\n  position: static;\n  inset: auto;\n  width: auto;\n  height: auto;\n  min-height: 0;\n  padding: 0;\n  background: transparent;\n  z-index: auto;\n}\n.loader__inner {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 1.25rem;\n  border-radius: 1rem;\n  background: black;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 9999;\n}\n.loader__inner .loader__message {\n  font-size: 5rem;\n  font-weight: 500;\n  color: var(--loader-color, var(--gold));\n  animation: spinner 5s linear infinite;\n  margin: auto;\n}\n@keyframes spinner {\n  to {\n    transform: rotateY(360deg);\n  }\n}\n/*# sourceMappingURL=loader-PYD6N6RG.css.map */\n"] }]
  }], null, { message: [{
    type: Input
  }], inline: [{
    type: Input
  }], color: [{
    type: Input
  }], spinnerColor: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Loader, { className: "Loader", filePath: "src/app/layout/shared-components/loader/loader.ts", lineNumber: 15 });
})();

// src/app/services/loader.service.ts
var LoaderService = class _LoaderService {
  countState = signal(
    0,
    ...ngDevMode ? [{ debugName: "countState" }] : (
      /* istanbul ignore next */
      []
    )
  );
  messageState = signal(
    "Loading\u2026",
    ...ngDevMode ? [{ debugName: "messageState" }] : (
      /* istanbul ignore next */
      []
    )
  );
  delayedHideState = signal(
    false,
    ...ngDevMode ? [{ debugName: "delayedHideState" }] : (
      /* istanbul ignore next */
      []
    )
  );
  hideTimer = null;
  active = computed(
    () => this.countState() > 0 || this.delayedHideState(),
    ...ngDevMode ? [{ debugName: "active" }] : (
      /* istanbul ignore next */
      []
    )
  );
  message = computed(
    () => this.messageState(),
    ...ngDevMode ? [{ debugName: "message" }] : (
      /* istanbul ignore next */
      []
    )
  );
  show(message) {
    if (message) {
      this.messageState.set(message);
    }
    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
      this.hideTimer = null;
      this.delayedHideState.set(false);
    }
    this.countState.update((value) => value + 1);
  }
  hide() {
    this.countState.update((value) => Math.max(0, value - 1));
    if (this.countState() === 0) {
      this.delayedHideState.set(true);
      if (this.hideTimer) {
        clearTimeout(this.hideTimer);
      }
      this.hideTimer = setTimeout(() => {
        if (this.countState() === 0) {
          this.delayedHideState.set(false);
        }
        this.hideTimer = null;
      }, 500);
    }
  }
  toggle(isLoading, message) {
    if (isLoading) {
      this.show(message);
    } else {
      this.hide();
    }
  }
  static \u0275fac = function LoaderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoaderService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LoaderService, factory: _LoaderService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  CharacterDataService,
  Loader,
  LoaderService
};
//# sourceMappingURL=chunk-VNLL7XNF.js.map
