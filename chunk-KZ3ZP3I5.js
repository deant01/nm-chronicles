import {
  BehaviorSubject,
  Injectable,
  computed,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-772GF5FN.js";

// src/app/services/view-change.service.ts
var ViewChangeService = class _ViewChangeService {
  isBrowser = typeof window !== "undefined" && typeof window.matchMedia === "function";
  mediaQuery = this.isBrowser ? window.matchMedia("(min-width: 901px)") : null;
  viewModeSubject = new BehaviorSubject(this.getInitialViewMode());
  viewMode$ = this.viewModeSubject.asObservable();
  isDesktop = signal(
    this.viewModeSubject.value === "desktop",
    ...ngDevMode ? [{ debugName: "isDesktop" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isMobile = computed(
    () => !this.isDesktop(),
    ...ngDevMode ? [{ debugName: "isMobile" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    if (this.mediaQuery) {
      const listener = (event) => this.onMediaQueryChange(event.matches);
      if (typeof this.mediaQuery.addEventListener === "function") {
        this.mediaQuery.addEventListener("change", listener);
      } else {
        this.mediaQuery.addListener(listener);
      }
    }
  }
  getInitialViewMode() {
    return this.isBrowser && this.mediaQuery?.matches ? "desktop" : "mobile";
  }
  onMediaQueryChange(isDesktop) {
    const nextMode = isDesktop ? "desktop" : "mobile";
    this.isDesktop.set(isDesktop);
    this.viewModeSubject.next(nextMode);
  }
  static \u0275fac = function ViewChangeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewChangeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewChangeService, factory: _ViewChangeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewChangeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  ViewChangeService
};
//# sourceMappingURL=chunk-KZ3ZP3I5.js.map
