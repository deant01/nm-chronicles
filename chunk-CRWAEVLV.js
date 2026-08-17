import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-772GF5FN.js";

// src/app/services/scroll.service.ts
var ScrollService = class _ScrollService {
  scrollTo(id, options = { behavior: "smooth", block: "start" }) {
    document.getElementById(id)?.scrollIntoView(options);
  }
  static \u0275fac = function ScrollService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScrollService, factory: _ScrollService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ScrollService
};
//# sourceMappingURL=chunk-CRWAEVLV.js.map
