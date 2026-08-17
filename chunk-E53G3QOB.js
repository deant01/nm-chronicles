import {
  DOCUMENT,
  Injectable,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-772GF5FN.js";

// src/app/layout/shared-components/light-house/light-house.service.ts
var LightHouseService = class _LightHouseService {
  document = inject(DOCUMENT);
  isOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "isOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  src = signal(
    "",
    ...ngDevMode ? [{ debugName: "src" }] : (
      /* istanbul ignore next */
      []
    )
  );
  alt = signal(
    "",
    ...ngDevMode ? [{ debugName: "alt" }] : (
      /* istanbul ignore next */
      []
    )
  );
  description = signal(
    "",
    ...ngDevMode ? [{ debugName: "description" }] : (
      /* istanbul ignore next */
      []
    )
  );
  show(src, alt = "", description = "") {
    this.src.set(src);
    this.alt.set(alt);
    this.description.set(description);
    this.isOpen.set(true);
    if (this.document?.body) {
      this.document.body.style.overflow = "hidden";
    }
    console.log(`LightHouseService: show() called`);
  }
  hide() {
    this.isOpen.set(false);
    if (this.document?.body) {
      this.document.body.style.overflow = "";
    }
    console.log(`LightHouseService: hide() called`);
  }
  static \u0275fac = function LightHouseService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LightHouseService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LightHouseService, factory: _LightHouseService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LightHouseService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  LightHouseService
};
//# sourceMappingURL=chunk-E53G3QOB.js.map
