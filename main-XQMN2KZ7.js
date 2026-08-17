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
  ViewChangeService
} from "./chunk-KZ3ZP3I5.js";
import {
  ScrollService
} from "./chunk-CRWAEVLV.js";
import "./chunk-R7LK4ESF.js";
import {
  Component,
  ContentService,
  DOCUMENT,
  DestroyRef,
  Injectable,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterLink,
  RouterOutlet,
  RuntimeError,
  __spreadValues,
  assertInInjectionContext,
  assertNotInReactiveContext,
  bootstrapApplication,
  computed,
  effect,
  filter,
  inject,
  map,
  provideBrowserGlobalErrorListeners,
  provideClientHydration,
  provideRouter,
  setClassMetadata,
  signal,
  startWith,
  withInMemoryScrolling,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
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
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-772GF5FN.js";

// src/app/guards/close-lighthouse.guard.ts
var closeLightHouseGuard = () => {
  const lightHouseService = inject(LightHouseService);
  if (lightHouseService.isOpen()) {
    lightHouseService.hide();
    return false;
  }
  return true;
};

// src/app/services/character-resolver.service.ts
var CharacterResolver = class _CharacterResolver {
  characterDataService = inject(CharacterDataService);
  async resolve(route, state) {
    const slug = route.paramMap.get("id");
    return slug ? this.characterDataService.getCharacter(slug) : null;
  }
  static \u0275fac = function CharacterResolver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CharacterResolver)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CharacterResolver, factory: _CharacterResolver.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CharacterResolver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-3Q3UT2ZB.js").then((m) => m.Home)
  },
  {
    path: "character/:id",
    loadComponent: () => import("./chunk-BFXXIOIR.js").then((m) => m.Character),
    canDeactivate: [closeLightHouseGuard],
    resolve: {
      character: CharacterResolver
    }
  },
  {
    path: "city",
    loadComponent: () => import("./chunk-F2HO46RM.js").then((m) => m.City),
    canDeactivate: [closeLightHouseGuard]
  },
  {
    path: "prequel",
    loadComponent: () => import("./chunk-NWH4GB7Y.js").then((m) => m.PrequalPage),
    canDeactivate: [closeLightHouseGuard]
  },
  {
    path: "**",
    redirectTo: ""
  }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: "top",
      anchorScrolling: "enabled"
    })),
    provideClientHydration()
  ]
};

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
/**
 * @license Angular v22.0.4
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
function toSignal(source, options) {
  typeof ngDevMode !== "undefined" && ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
  const requiresCleanup = !options?.manualCleanup;
  if (ngDevMode && requiresCleanup && !options?.injector) {
    assertInInjectionContext(toSignal);
  }
  const cleanupRef = requiresCleanup ? options?.injector?.get(DestroyRef) ?? inject(DestroyRef) : null;
  const equal = makeToSignalEqual(options?.equal);
  let state;
  if (options?.requireSync) {
    state = signal({
      kind: 0
    }, __spreadValues({
      equal
    }, ngDevMode ? createDebugNameObject(options?.debugName, "state") : void 0));
  } else {
    state = signal({
      kind: 1,
      value: options?.initialValue
    }, __spreadValues({
      equal
    }, ngDevMode ? createDebugNameObject(options?.debugName, "state") : void 0));
  }
  let destroyUnregisterFn;
  const sub = source.subscribe({
    next: (value) => state.set({
      kind: 1,
      value
    }),
    error: (error) => {
      state.set({
        kind: 2,
        error
      });
      destroyUnregisterFn?.();
    },
    complete: () => {
      destroyUnregisterFn?.();
    }
  });
  if (options?.requireSync && state().kind === 0) {
    throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
  }
  destroyUnregisterFn = cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  return computed(() => {
    const current = state();
    switch (current.kind) {
      case 1:
        return current.value;
      case 2:
        throw current.error;
      case 0:
        throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
    }
  }, __spreadValues({
    equal: options?.equal
  }, ngDevMode ? createDebugNameObject(options?.debugName, "source") : void 0));
}
function makeToSignalEqual(userEquality = Object.is) {
  return (a, b) => a.kind === 1 && b.kind === 1 && userEquality(a.value, b.value);
}
function createDebugNameObject(toSignalDebugName, internalSignalDebugName) {
  return {
    debugName: `toSignal${toSignalDebugName ? "#" + toSignalDebugName : ""}.${internalSignalDebugName}`
  };
}

// src/app/layout/header/header.ts
var _c0 = () => ["/"];
function Header_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275listener("click", function Header_Conditional_2_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goHome($event, ctx_r1.homeBackSection()));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275attribute("data-home-section", ctx_r1.homeBackSection());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.header.logo);
  }
}
function Header_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275listener("click", function Header_Conditional_3_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollTo("main"));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.header.logo);
  }
}
function Header_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 7);
    \u0275\u0275listener("click", function Header_Conditional_9_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goHome($event, ctx_r1.homeBackSection()));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275attribute("data-home-section", ctx_r1.homeBackSection());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.header.backToHome);
  }
}
function Header_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 8);
    \u0275\u0275listener("click", function Header_Conditional_10_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollTo("about"));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "li")(4, "a", 8);
    \u0275\u0275listener("click", function Header_Conditional_10_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollTo("listen"));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "li")(7, "a", 8);
    \u0275\u0275listener("click", function Header_Conditional_10_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollTo("characters"));
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "li")(10, "a", 8);
    \u0275\u0275listener("click", function Header_Conditional_10_Template_a_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollTo("quotes"));
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "li")(13, "a", 8);
    \u0275\u0275listener("click", function Header_Conditional_10_Template_a_click_13_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollTo("map"));
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "li")(16, "a", 8);
    \u0275\u0275listener("click", function Header_Conditional_10_Template_a_click_16_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollTo("author"));
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "li")(19, "a", 8);
    \u0275\u0275listener("click", function Header_Conditional_10_Template_a_click_19_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollTo("connect"));
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.header.about);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.header.listen);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.header.characters);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.header.quotes);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.header.city);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.header.author);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.header.connect);
  }
}
function Header_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 10);
    \u0275\u0275listener("click", function Header_Conditional_11_Conditional_2_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goHome($event, ctx_r1.homeBackSection()));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275attribute("data-home-section", ctx_r1.homeBackSection());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.header.backToHome);
  }
}
function Header_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 8);
    \u0275\u0275listener("click", function Header_Conditional_11_Conditional_3_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.scrollTo("about"));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "li")(4, "a", 8);
    \u0275\u0275listener("click", function Header_Conditional_11_Conditional_3_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.scrollTo("listen"));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "li")(7, "a", 8);
    \u0275\u0275listener("click", function Header_Conditional_11_Conditional_3_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.scrollTo("characters"));
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "li")(10, "a", 8);
    \u0275\u0275listener("click", function Header_Conditional_11_Conditional_3_Template_a_click_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.scrollTo("quotes"));
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "li")(13, "a", 8);
    \u0275\u0275listener("click", function Header_Conditional_11_Conditional_3_Template_a_click_13_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.scrollTo("map"));
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "li")(16, "a", 8);
    \u0275\u0275listener("click", function Header_Conditional_11_Conditional_3_Template_a_click_16_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.scrollTo("author"));
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "li")(19, "a", 8);
    \u0275\u0275listener("click", function Header_Conditional_11_Conditional_3_Template_a_click_19_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.scrollTo("connect"));
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.header.about);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.header.listen);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.header.characters);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.header.quotes);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.header.city);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.header.author);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.header.connect);
  }
}
function Header_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "ul", 9);
    \u0275\u0275conditionalCreate(2, Header_Conditional_11_Conditional_2_Template, 3, 4, "li")(3, Header_Conditional_11_Conditional_3_Template, 21, 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isPage() ? 2 : 3);
  }
}
var Header = class _Header {
  router = inject(Router);
  scrollService = inject(ScrollService);
  viewChangeService = inject(ViewChangeService);
  contentService = inject(ContentService);
  header = this.contentService.getTemplateContent().header;
  isPage = computed(
    () => (this.currentUrl()?.includes("city") || this.currentUrl()?.includes("character") || this.currentUrl()?.includes("prequel")) ?? false,
    ...ngDevMode ? [{ debugName: "isPage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  homeBackSection = computed(
    () => {
      const url = this.currentUrl() ?? "";
      if (url.includes("/city")) {
        return "map";
      }
      if (url.includes("/character")) {
        return "characters";
      }
      return null;
    },
    ...ngDevMode ? [{ debugName: "homeBackSection" }] : (
      /* istanbul ignore next */
      []
    )
  );
  menuOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "menuOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  currentUrl = toSignal(this.router.events.pipe(
    filter((e) => e instanceof NavigationEnd),
    map((e) => e.urlAfterRedirects),
    startWith(this.router.url)
    // captures initial load
  ));
  constructor() {
    effect(() => {
      if (this.viewChangeService.isDesktop()) {
        this.closeMenu();
      }
    });
    effect(() => {
      this.currentUrl();
      this.closeMenu();
    });
  }
  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }
  closeMenu() {
    this.menuOpen.set(false);
  }
  goHome(event, section) {
    event.preventDefault();
    this.router.navigate([""], { state: section ? { homeSection: section } : {} });
    this.closeMenu();
  }
  scrollTo(id) {
    this.scrollService.scrollTo(id);
    this.closeMenu();
  }
  static \u0275fac = function Header_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Header)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Header, selectors: [["app-header"]], decls: 12, vars: 4, consts: [[1, "nav-logo", 3, "routerLink"], [1, "nav-logo"], ["type", "button", "aria-label", "Toggle menu", "aria-controls", "mobile-menu", 1, "hamburger", 3, "click"], ["aria-label", "Primary site navigation", 1, "nav-links"], ["id", "mobile-menu", 1, "mobile-menu"], [1, "nav-logo", 3, "click", "routerLink"], [1, "nav-logo", 3, "click"], [1, "nav-back", 3, "click", "routerLink"], ["type", "button", 3, "click"], ["aria-label", "Mobile navigation"], [3, "click", "routerLink"]], template: function Header_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header")(1, "nav");
      \u0275\u0275conditionalCreate(2, Header_Conditional_2_Template, 2, 4, "a", 0)(3, Header_Conditional_3_Template, 2, 1, "a", 1);
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function Header_Template_button_click_4_listener() {
        return ctx.toggleMenu();
      });
      \u0275\u0275element(5, "span")(6, "span")(7, "span");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "ul", 3);
      \u0275\u0275conditionalCreate(9, Header_Conditional_9_Template, 3, 4, "li")(10, Header_Conditional_10_Template, 21, 7);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(11, Header_Conditional_11_Template, 4, 1, "div", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isPage() ? 2 : 3);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-expanded", ctx.menuOpen());
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.isPage() ? 9 : 10);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.menuOpen() ? 11 : -1);
    }
  }, dependencies: [RouterLink], styles: ['\nnav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 3rem;\n  height: 64px;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(8, 8, 8, 0.97) 0%,\n      rgba(8, 8, 8, 0) 100%);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.nav-logo[_ngcontent-%COMP%] {\n  font-family: "Cinzel", serif;\n  font-size: 13px;\n  letter-spacing: 4px;\n  color: var(--gold);\n  text-transform: uppercase;\n  text-decoration: none;\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2.5rem;\n  list-style: none;\n}\n.nav-links[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: "Cinzel", serif;\n  font-size: 11px;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  color: var(--gold);\n  text-decoration: none;\n  transition: color 0.3s;\n  font-weight: 600;\n  cursor: pointer;\n}\n@media (hover: hover) {\n  .nav-links[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n   .nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: var(--gold-light);\n  }\n}\n.mobile-menu[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 900px) {\n  nav[_ngcontent-%COMP%] {\n    padding: 0 1.5rem;\n  }\n  .nav-links[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hamburger[_ngcontent-%COMP%] {\n    display: inline-flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 28px;\n    height: 22px;\n    border: none;\n    background: transparent;\n    cursor: pointer;\n    padding: 0;\n  }\n  .hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block;\n    height: 2px;\n    border-radius: 999px;\n    background: var(--text-dim);\n    transition: transform 0.3s ease, opacity 0.3s ease;\n  }\n  .mobile-menu[_ngcontent-%COMP%] {\n    display: block;\n    position: absolute;\n    max-height: 80vh;\n    overflow-y: auto;\n    top: 64px;\n    right: 1.5rem;\n    width: calc(100vw - 3rem);\n    background: rgba(8, 8, 8, 0.96);\n    border: 1px solid rgba(255, 255, 255, 0.08);\n    border-radius: 12px;\n    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);\n    padding: 1rem;\n    -webkit-backdrop-filter: blur(12px);\n    backdrop-filter: blur(12px);\n    scrollbar-width: thin;\n    scrollbar-color: var(--gold) transparent;\n  }\n  .mobile-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: grid;\n    gap: 0.8rem;\n  }\n  .mobile-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n   .mobile-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    text-align: left;\n    font-family: "Cinzel", serif;\n    font-size: 11px;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n    color: var(--text-dim);\n    background: none;\n    border: none;\n    padding: 0.75rem 0;\n    text-decoration: none;\n    transition: color 0.2s ease;\n    cursor: pointer;\n  }\n}\n@media (max-width: 900px) and (hover: hover) {\n  .mobile-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n   .mobile-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: var(--gold-light);\n  }\n}\n/*# sourceMappingURL=header-QNXYPBJS.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Header, [{
    type: Component,
    args: [{ selector: "app-header", imports: [RouterLink], template: `<header>\r
    <nav>\r
        @if (isPage()) {\r
        <a [routerLink]="['/']" class="nav-logo" [attr.data-home-section]="homeBackSection()"\r
            (click)="goHome($event, homeBackSection())">{{ header.logo }}</a>\r
        } @else {\r
        <a (click)="scrollTo('main')" class="nav-logo">{{ header.logo }}</a>\r
        }\r
\r
        <button class="hamburger" type="button" aria-label="Toggle menu" aria-controls="mobile-menu" [attr.aria-expanded]="menuOpen()"\r
            (click)="toggleMenu()">\r
            <span></span>\r
            <span></span>\r
            <span></span>\r
        </button>\r
\r
        <ul class="nav-links" aria-label="Primary site navigation">\r
            @if (isPage()) {\r
            <li><a [routerLink]="['/']" class="nav-back" [attr.data-home-section]="homeBackSection()"\r
                (click)="goHome($event, homeBackSection())">{{ header.backToHome }}</a></li>\r
            } @else {\r
            <li><a type="button" (click)="scrollTo('about')">{{ header.about }}</a></li>\r
            <li><a type="button" (click)="scrollTo('listen')">{{ header.listen }}</a></li>\r
            <li><a type="button" (click)="scrollTo('characters')">{{ header.characters }}</a></li>\r
            <li><a type="button" (click)="scrollTo('quotes')">{{ header.quotes }}</a></li>\r
            <li><a type="button" (click)="scrollTo('map')">{{ header.city }}</a></li>\r
            <li><a type="button" (click)="scrollTo('author')">{{ header.author }}</a></li>\r
            <li><a type="button" (click)="scrollTo('connect')">{{ header.connect }}</a></li>\r
            }\r
        </ul>\r
\r
        @if (menuOpen()) {\r
        <div class="mobile-menu" id="mobile-menu">\r
            <ul aria-label="Mobile navigation">\r
                @if (isPage()) {\r
                <li><a [routerLink]="['/']" [attr.data-home-section]="homeBackSection()"\r
                        (click)="goHome($event, homeBackSection())">{{ header.backToHome }}</a></li>\r
                } @else {\r
                <li><a type="button" (click)="scrollTo('about')">{{ header.about }}</a></li>\r
                <li><a type="button" (click)="scrollTo('listen')">{{ header.listen }}</a></li>\r
                <li><a type="button" (click)="scrollTo('characters')">{{ header.characters }}</a></li>\r
                <li><a type="button" (click)="scrollTo('quotes')">{{ header.quotes }}</a></li>\r
                <li><a type="button" (click)="scrollTo('map')">{{ header.city }}</a></li>\r
                <li><a type="button" (click)="scrollTo('author')">{{ header.author }}</a></li>\r
                <li><a type="button" (click)="scrollTo('connect')">{{ header.connect }}</a></li>\r
                }\r
            </ul>\r
        </div>\r
        }\r
    </nav>\r
</header>`, styles: ['/* src/app/layout/header/header.scss */\nnav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 3rem;\n  height: 64px;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(8, 8, 8, 0.97) 0%,\n      rgba(8, 8, 8, 0) 100%);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.nav-logo {\n  font-family: "Cinzel", serif;\n  font-size: 13px;\n  letter-spacing: 4px;\n  color: var(--gold);\n  text-transform: uppercase;\n  text-decoration: none;\n}\n.nav-links {\n  display: flex;\n  gap: 2.5rem;\n  list-style: none;\n}\n.nav-links button,\n.nav-links a {\n  font-family: "Cinzel", serif;\n  font-size: 11px;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  color: var(--gold);\n  text-decoration: none;\n  transition: color 0.3s;\n  font-weight: 600;\n  cursor: pointer;\n}\n@media (hover: hover) {\n  .nav-links button:hover,\n  .nav-links a:hover {\n    color: var(--gold-light);\n  }\n}\n.mobile-menu {\n  display: none;\n}\n@media (max-width: 900px) {\n  nav {\n    padding: 0 1.5rem;\n  }\n  .nav-links {\n    display: none;\n  }\n  .hamburger {\n    display: inline-flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 28px;\n    height: 22px;\n    border: none;\n    background: transparent;\n    cursor: pointer;\n    padding: 0;\n  }\n  .hamburger span {\n    display: block;\n    height: 2px;\n    border-radius: 999px;\n    background: var(--text-dim);\n    transition: transform 0.3s ease, opacity 0.3s ease;\n  }\n  .mobile-menu {\n    display: block;\n    position: absolute;\n    max-height: 80vh;\n    overflow-y: auto;\n    top: 64px;\n    right: 1.5rem;\n    width: calc(100vw - 3rem);\n    background: rgba(8, 8, 8, 0.96);\n    border: 1px solid rgba(255, 255, 255, 0.08);\n    border-radius: 12px;\n    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);\n    padding: 1rem;\n    -webkit-backdrop-filter: blur(12px);\n    backdrop-filter: blur(12px);\n    scrollbar-width: thin;\n    scrollbar-color: var(--gold) transparent;\n  }\n  .mobile-menu ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: grid;\n    gap: 0.8rem;\n  }\n  .mobile-menu li button,\n  .mobile-menu li a {\n    display: block;\n    width: 100%;\n    text-align: left;\n    font-family: "Cinzel", serif;\n    font-size: 11px;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n    color: var(--text-dim);\n    background: none;\n    border: none;\n    padding: 0.75rem 0;\n    text-decoration: none;\n    transition: color 0.2s ease;\n    cursor: pointer;\n  }\n}\n@media (max-width: 900px) and (hover: hover) {\n  .mobile-menu li button:hover,\n  .mobile-menu li a:hover {\n    color: var(--gold-light);\n  }\n}\n/*# sourceMappingURL=header-QNXYPBJS.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Header, { className: "Header", filePath: "src/app/layout/header/header.ts", lineNumber: 15 });
})();

// src/app/layout/footer/footer.ts
var Footer = class _Footer {
  contentService = inject(ContentService);
  footer = this.contentService.getTemplateContent().footer;
  static \u0275fac = function Footer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Footer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Footer, selectors: [["app-footer"]], decls: 15, vars: 5, consts: [[1, "footer-logo"], [1, "footer-sub"], [1, "footer-credit"], [1, "footer-copy"], ["href", "https://www.linkedin.com/in/georgi-brankovanov", "target", "_blank", "rel", "noopener noreferrer"], [1, "footer-development"]], template: function Footer_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "footer")(1, "div")(2, "div", 0);
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "div", 1);
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "div", 2);
      \u0275\u0275text(7);
      \u0275\u0275domElement(8, "br");
      \u0275\u0275domElementStart(9, "span", 3);
      \u0275\u0275text(10);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(11, "br");
      \u0275\u0275domElementStart(12, "a", 4)(13, "span", 5);
      \u0275\u0275text(14);
      \u0275\u0275domElementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.footer.logo);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.footer.subtitle);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.footer.credit);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.footer.copy);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.footer.development);
    }
  }, styles: ['\nfooter[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border);\n  padding: 3rem 4rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 12rem;\n  background: #050505;\n}\n.footer-logo[_ngcontent-%COMP%] {\n  font-family: "Cinzel", serif;\n  font-size: 16px;\n  color: #E8C97A;\n  letter-spacing: 3px;\n}\n.footer-sub[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #D4C9B0;\n  letter-spacing: 2px;\n  margin-top: 4px;\n}\n.footer-credit[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #D4C9B0;\n  text-align: right;\n}\n.footer-credit[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.footer-copy[_ngcontent-%COMP%], \n.footer-development[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: #BDB0A0;\n}\n.footer-development[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n@media (max-width: 900px) {\n  footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    text-align: center;\n  }\n  .footer-credit[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=footer-IERQMF67.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Footer, [{
    type: Component,
    args: [{ selector: "app-footer", imports: [], template: '<footer>\r\n    <div>\r\n        <div class="footer-logo">{{ footer.logo }}</div>\r\n        <div class="footer-sub">{{ footer.subtitle }}</div>\r\n    </div>\r\n    <div class="footer-credit">{{ footer.credit }}<br>\r\n      <span class="footer-copy">{{ footer.copy }}</span><br>\r\n      <a href="https://www.linkedin.com/in/georgi-brankovanov" target="_blank" rel="noopener noreferrer">\r\n        <span class="footer-development">{{ footer.development }}</span>\r\n      </a>\r\n    </div>\r\n</footer>', styles: ['/* src/app/layout/footer/footer.scss */\nfooter {\n  border-top: 1px solid var(--border);\n  padding: 3rem 4rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 12rem;\n  background: #050505;\n}\n.footer-logo {\n  font-family: "Cinzel", serif;\n  font-size: 16px;\n  color: #E8C97A;\n  letter-spacing: 3px;\n}\n.footer-sub {\n  font-size: 0.8rem;\n  color: #D4C9B0;\n  letter-spacing: 2px;\n  margin-top: 4px;\n}\n.footer-credit {\n  font-size: 0.82rem;\n  color: #D4C9B0;\n  text-align: right;\n}\n.footer-credit a {\n  text-decoration: none;\n}\n.footer-copy,\n.footer-development {\n  display: block;\n  font-size: 0.75rem;\n  color: #BDB0A0;\n}\n.footer-development {\n  margin-top: 0.25rem;\n}\n@media (max-width: 900px) {\n  footer {\n    flex-direction: column;\n    gap: 1rem;\n    text-align: center;\n  }\n  .footer-credit {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=footer-IERQMF67.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Footer, { className: "Footer", filePath: "src/app/layout/footer/footer.ts", lineNumber: 10 });
})();

// src/app/layout/shared-components/light-house/light-house.ts
function LightHouse_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "img", 6);
    \u0275\u0275listener("click", function LightHouse_Conditional_5_Template_img_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.src(), \u0275\u0275sanitizeUrl)("alt", ctx_r0.alt() || "Image preview");
  }
}
var LightHouse = class _LightHouse {
  document = inject(DOCUMENT);
  lightHouseService = inject(LightHouseService);
  previouslyFocusedElement = signal(
    null,
    ...ngDevMode ? [{ debugName: "previouslyFocusedElement" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isOpen = this.lightHouseService.isOpen;
  src = this.lightHouseService.src;
  alt = this.lightHouseService.alt;
  description = this.lightHouseService.description;
  constructor() {
    effect(() => {
      const isOpen = this.isOpen();
      if (isOpen) {
        this.previouslyFocusedElement.set(this.document?.activeElement);
        this.document?.addEventListener("keydown", this.onKeydown, true);
        const dialog = this.document?.getElementById("lightbox-dialog");
        dialog?.focus();
      } else {
        this.document?.removeEventListener("keydown", this.onKeydown, true);
        this.previouslyFocusedElement()?.focus?.();
      }
    });
  }
  close(event) {
    event?.stopPropagation();
    this.lightHouseService.hide();
  }
  onKeydown = (event) => {
    if (event.key === "Escape" && this.isOpen()) {
      event.preventDefault();
      this.close();
    }
  };
  static \u0275fac = function LightHouse_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LightHouse)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LightHouse, selectors: [["app-light-house"]], decls: 8, vars: 10, consts: [["role", "dialog", "aria-modal", "true", 1, "lightbox", 3, "click"], [1, "lightbox-controls"], [3, "url", "text", "mediaUrl", "mediaAlt", "pageDescription", "isLightbox"], ["type", "button", "aria-label", "Close", 1, "lightbox-close", 3, "click"], [3, "src", "alt"], [1, "lightbox-hint"], [3, "click", "src", "alt"]], template: function LightHouse_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function LightHouse_Template_div_click_0_listener() {
        return ctx.close();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275element(2, "app-share-on", 2);
      \u0275\u0275elementStart(3, "button", 3);
      \u0275\u0275listener("click", function LightHouse_Template_button_click_3_listener($event) {
        return ctx.close($event);
      });
      \u0275\u0275text(4, "\xD7");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(5, LightHouse_Conditional_5_Template, 1, 2, "img", 4);
      \u0275\u0275elementStart(6, "span", 5);
      \u0275\u0275text(7, "Click outside or \xD7 to close");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("open", ctx.isOpen());
      \u0275\u0275attribute("aria-hidden", !ctx.isOpen());
      \u0275\u0275advance(2);
      \u0275\u0275property("url", ctx.src())("text", ctx.description() || ctx.alt() || "Share this image from the Newport Maeve Chronicles.")("mediaUrl", ctx.src())("mediaAlt", ctx.alt())("pageDescription", ctx.description() || ctx.alt())("isLightbox", true);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isOpen() ? 5 : -1);
    }
  }, dependencies: [ShareOn], styles: ['\n.lightbox[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  background: rgba(4, 4, 4, 0.94);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  padding: 4vh 4vw;\n  cursor: zoom-out;\n  animation: _ngcontent-%COMP%_lbFade 0.25s ease-out;\n}\n.lightbox.open[_ngcontent-%COMP%] {\n  display: flex;\n}\n@keyframes _ngcontent-%COMP%_lbFade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.lightbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 75vh;\n  object-fit: contain;\n  border: 1px solid var(--gold-dim);\n  box-shadow: 0 0 80px rgba(0, 0, 0, 0.9);\n  cursor: default;\n}\n.lightbox-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1.4rem;\n  right: 1.4rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 0.5rem;\n}\n.lightbox-close[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "Cinzel", serif;\n  font-size: 1.7rem;\n  color: var(--gold);\n  background: rgba(8, 8, 8, 0.6);\n  border: 1px solid var(--gold-dim);\n  cursor: pointer;\n  transition: background 0.2s, color 0.2s;\n  line-height: 1;\n}\n@media (hover: hover) {\n  .lightbox-close[_ngcontent-%COMP%]:hover {\n    background: var(--gold);\n    color: var(--bg-deep);\n  }\n}\n.lightbox-hint[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1.4rem;\n  left: 50%;\n  transform: translateX(-50%);\n  font-family: "Cinzel", serif;\n  font-size: 9px;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  color: var(--text-dim);\n}\n/*# sourceMappingURL=light-house-VOENTO7B.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LightHouse, [{
    type: Component,
    args: [{ selector: "app-light-house", imports: [ShareOn], template: `<div class="lightbox" [class.open]="isOpen()" [attr.aria-hidden]="!isOpen()" role="dialog" aria-modal="true"\r
  (click)="close()">\r
\r
  <div class="lightbox-controls">\r
    <app-share-on\r
      [url]="src()"\r
      [text]="description() || alt() || 'Share this image from the Newport Maeve Chronicles.'"\r
      [mediaUrl]="src()"\r
      [mediaAlt]="alt()"\r
      [pageDescription]="description() || alt()"\r
      [isLightbox]="true"\r
    ></app-share-on>\r
    <button type="button" class="lightbox-close" aria-label="Close" (click)="close($event)">&times;</button>\r
  </div>\r
\r
  @if (isOpen()) {\r
  <img [src]="src()" [alt]="alt() || 'Image preview'" (click)="$event.stopPropagation()">\r
  }\r
  <span class="lightbox-hint">Click outside or &times; to close</span>\r
</div>`, styles: ['/* src/app/layout/shared-components/light-house/light-house.scss */\n.lightbox {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  background: rgba(4, 4, 4, 0.94);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  padding: 4vh 4vw;\n  cursor: zoom-out;\n  animation: lbFade 0.25s ease-out;\n}\n.lightbox.open {\n  display: flex;\n}\n@keyframes lbFade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.lightbox img {\n  max-width: 100%;\n  max-height: 75vh;\n  object-fit: contain;\n  border: 1px solid var(--gold-dim);\n  box-shadow: 0 0 80px rgba(0, 0, 0, 0.9);\n  cursor: default;\n}\n.lightbox-controls {\n  position: absolute;\n  top: 1.4rem;\n  right: 1.4rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 0.5rem;\n}\n.lightbox-close {\n  width: 44px;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "Cinzel", serif;\n  font-size: 1.7rem;\n  color: var(--gold);\n  background: rgba(8, 8, 8, 0.6);\n  border: 1px solid var(--gold-dim);\n  cursor: pointer;\n  transition: background 0.2s, color 0.2s;\n  line-height: 1;\n}\n@media (hover: hover) {\n  .lightbox-close:hover {\n    background: var(--gold);\n    color: var(--bg-deep);\n  }\n}\n.lightbox-hint {\n  position: absolute;\n  bottom: 1.4rem;\n  left: 50%;\n  transform: translateX(-50%);\n  font-family: "Cinzel", serif;\n  font-size: 9px;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  color: var(--text-dim);\n}\n/*# sourceMappingURL=light-house-VOENTO7B.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LightHouse, { className: "LightHouse", filePath: "src/app/layout/shared-components/light-house/light-house.ts", lineNumber: 12 });
})();

// src/app/services/cookie-consent.service.ts
var COOKIE_CONSENT_KEY = "nm-chronicles-cookie-consent";
var CookieConsentService = class _CookieConsentService {
  consentState = signal(
    null,
    ...ngDevMode ? [{ debugName: "consentState" }] : (
      /* istanbul ignore next */
      []
    )
  );
  consent = this.consentState;
  hasDecision = computed(
    () => this.consent() !== null,
    ...ngDevMode ? [{ debugName: "hasDecision" }] : (
      /* istanbul ignore next */
      []
    )
  );
  analyticsAllowed = computed(
    () => this.consent() === "accepted",
    ...ngDevMode ? [{ debugName: "analyticsAllowed" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    if (typeof window === "undefined" || typeof window.localStorage === "undefined") {
      return;
    }
    const stored = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored === "accepted" || stored === "declined") {
      this.consentState.set(stored);
    }
  }
  accept() {
    this.setConsent("accepted");
  }
  decline() {
    this.setConsent("declined");
  }
  setConsent(decision) {
    this.consentState.set(decision);
    if (typeof window !== "undefined" && typeof window.localStorage !== "undefined") {
      window.localStorage.setItem(COOKIE_CONSENT_KEY, decision);
    }
  }
  static \u0275fac = function CookieConsentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CookieConsentService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CookieConsentService, factory: _CookieConsentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CookieConsentService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/layout/shared-components/cookie-consent/cookie-consent.ts
function CookieConsent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
    \u0275\u0275text(4, " We use Google Analytics and Microsoft Clarity to improve the site experience. Accept cookies to enable analytics, or decline to continue without tracking. ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(5, "div", 4)(6, "button", 5);
    \u0275\u0275domListener("click", function CookieConsent_Conditional_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.accept());
    });
    \u0275\u0275text(7, " Accept ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "button", 6);
    \u0275\u0275domListener("click", function CookieConsent_Conditional_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.decline());
    });
    \u0275\u0275text(9, " Decline ");
    \u0275\u0275domElementEnd()()()();
  }
}
var CookieConsent = class _CookieConsent {
  consentService = inject(CookieConsentService);
  hasDecision = this.consentService.hasDecision;
  accept() {
    this.consentService.accept();
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  }
  decline() {
    this.consentService.decline();
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  }
  static \u0275fac = function CookieConsent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CookieConsent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CookieConsent, selectors: [["app-cookie-consent"]], decls: 1, vars: 1, consts: [["role", "dialog", "aria-live", "polite", "aria-label", "Cookie consent banner", 1, "cookie-consent"], [1, "cookie-consent__panel"], [1, "cookie-consent__copy"], [1, "cookie-consent__message"], [1, "cookie-consent__actions"], ["type", "button", 1, "cookie-consent__button", "cookie-consent__button--accept", 3, "click"], ["type", "button", 1, "cookie-consent__button", "cookie-consent__button--decline", 3, "click"]], template: function CookieConsent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, CookieConsent_Conditional_0_Template, 10, 0, "section", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.hasDecision() ? 0 : -1);
    }
  }, styles: ["\n.cookie-consent[_ngcontent-%COMP%] {\n  position: fixed;\n  inset-inline: 0;\n  bottom: 0;\n  z-index: 9998;\n  display: grid;\n  place-items: center;\n  padding: 1rem;\n  pointer-events: none;\n}\n.cookie-consent__panel[_ngcontent-%COMP%] {\n  width: min(100%, 88rem);\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n  padding: 1rem 1.25rem;\n  border-radius: 1.25rem;\n  background: rgba(11, 9, 8, 0.96);\n  color: var(--text);\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.4);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  pointer-events: auto;\n}\n.cookie-consent__copy[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.cookie-consent__message[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  color: var(--text);\n  font-size: 0.95rem;\n}\n.cookie-consent__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  justify-content: flex-end;\n}\n.cookie-consent__button[_ngcontent-%COMP%] {\n  padding: 0.9rem 1.25rem;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 999px;\n  background: transparent;\n  color: var(--text);\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background 180ms ease,\n    border-color 180ms ease,\n    color 180ms ease;\n}\n.cookie-consent__button[_ngcontent-%COMP%]:hover, \n.cookie-consent__button[_ngcontent-%COMP%]:focus-visible {\n  border-color: rgba(255, 255, 255, 0.35);\n  outline: none;\n}\n.cookie-consent__button--accept[_ngcontent-%COMP%] {\n  background: rgba(201, 168, 76, 0.15);\n  color: var(--gold);\n  border-color: rgba(201, 168, 76, 0.4);\n}\n.cookie-consent__button--accept[_ngcontent-%COMP%]:hover, \n.cookie-consent__button--accept[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(201, 168, 76, 0.22);\n}\n.cookie-consent__button--decline[_ngcontent-%COMP%] {\n  color: var(--text);\n}\n@media (max-width: 720px) {\n  .cookie-consent__panel[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    align-items: stretch;\n  }\n  .cookie-consent__actions[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n}\n/*# sourceMappingURL=cookie-consent-F2CSCPL4.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CookieConsent, [{
    type: Component,
    args: [{ selector: "app-cookie-consent", template: '@if (!hasDecision()) {\r\n  <section class="cookie-consent" role="dialog" aria-live="polite" aria-label="Cookie consent banner">\r\n    <div class="cookie-consent__panel">\r\n      <div class="cookie-consent__copy">\r\n        <p class="cookie-consent__message">\r\n          We use Google Analytics and Microsoft Clarity to improve the site experience. Accept cookies to enable analytics, or decline to continue without tracking.\r\n        </p>\r\n      </div>\r\n      <div class="cookie-consent__actions">\r\n        <button type="button" class="cookie-consent__button cookie-consent__button--accept" (click)="accept()">\r\n          Accept\r\n        </button>\r\n        <button type="button" class="cookie-consent__button cookie-consent__button--decline" (click)="decline()">\r\n          Decline\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </section>\r\n}\r\n', styles: ["/* src/app/layout/shared-components/cookie-consent/cookie-consent.scss */\n.cookie-consent {\n  position: fixed;\n  inset-inline: 0;\n  bottom: 0;\n  z-index: 9998;\n  display: grid;\n  place-items: center;\n  padding: 1rem;\n  pointer-events: none;\n}\n.cookie-consent__panel {\n  width: min(100%, 88rem);\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n  padding: 1rem 1.25rem;\n  border-radius: 1.25rem;\n  background: rgba(11, 9, 8, 0.96);\n  color: var(--text);\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.4);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  pointer-events: auto;\n}\n.cookie-consent__copy {\n  min-width: 0;\n}\n.cookie-consent__message {\n  line-height: 1.6;\n  color: var(--text);\n  font-size: 0.95rem;\n}\n.cookie-consent__actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  justify-content: flex-end;\n}\n.cookie-consent__button {\n  padding: 0.9rem 1.25rem;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 999px;\n  background: transparent;\n  color: var(--text);\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background 180ms ease,\n    border-color 180ms ease,\n    color 180ms ease;\n}\n.cookie-consent__button:hover,\n.cookie-consent__button:focus-visible {\n  border-color: rgba(255, 255, 255, 0.35);\n  outline: none;\n}\n.cookie-consent__button--accept {\n  background: rgba(201, 168, 76, 0.15);\n  color: var(--gold);\n  border-color: rgba(201, 168, 76, 0.4);\n}\n.cookie-consent__button--accept:hover,\n.cookie-consent__button--accept:focus-visible {\n  background: rgba(201, 168, 76, 0.22);\n}\n.cookie-consent__button--decline {\n  color: var(--text);\n}\n@media (max-width: 720px) {\n  .cookie-consent__panel {\n    grid-template-columns: 1fr;\n    align-items: stretch;\n  }\n  .cookie-consent__actions {\n    justify-content: stretch;\n  }\n}\n/*# sourceMappingURL=cookie-consent-F2CSCPL4.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CookieConsent, { className: "CookieConsent", filePath: "src/app/layout/shared-components/cookie-consent/cookie-consent.ts", lineNumber: 9 });
})();

// src/app/analytics.service.ts
var AnalyticsService = class _AnalyticsService {
  initialized = false;
  googleAnalyticsId = null;
  clarityId = null;
  async init() {
    if (this.initialized || typeof window === "undefined") {
      return;
    }
    const config = await this.loadConfig();
    if (!config?.googleAnalyticsId) {
      return;
    }
    this.googleAnalyticsId = config.googleAnalyticsId;
    this.clarityId = config.clarityId || null;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function() {
      window.dataLayer?.push(arguments);
    };
    const existingGtagScript = document.querySelector(`script[src="https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(config.googleAnalyticsId)}"]`);
    if (!existingGtagScript) {
      const gtagScript = document.createElement("script");
      gtagScript.async = true;
      gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(config.googleAnalyticsId)}`;
      document.head.appendChild(gtagScript);
    }
    window.gtag("js", /* @__PURE__ */ new Date());
    window.gtag("config", config.googleAnalyticsId, { send_page_view: false });
    if (this.clarityId) {
      this.insertClarityScript(this.clarityId);
    }
    this.initialized = true;
  }
  shutdown() {
    if (typeof window === "undefined") {
      return;
    }
    if (this.googleAnalyticsId) {
      window[`ga-disable-${this.googleAnalyticsId}`] = true;
    }
    const scriptUrl = this.googleAnalyticsId ? `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(this.googleAnalyticsId)}` : null;
    if (scriptUrl) {
      const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);
      existingScript?.remove();
    }
    if (typeof window.gtag === "function") {
      delete window.gtag;
    }
    if (window.dataLayer) {
      window.dataLayer = [];
    }
    if (this.clarityId) {
      const clarityScript = document.querySelector(`script[src="https://www.clarity.ms/tag/${encodeURIComponent(this.clarityId)}"]`);
      clarityScript?.remove();
      const clarityInterface = window["clarity"];
      if (typeof clarityInterface !== "undefined") {
        delete window["clarity"];
      }
    }
    this.initialized = false;
    this.googleAnalyticsId = null;
    this.clarityId = null;
  }
  sendPageView(url, title) {
    if (typeof window === "undefined" || !this.initialized || typeof window.gtag !== "function") {
      return;
    }
    window.gtag("event", "page_view", {
      page_path: url,
      page_location: window.location.href,
      page_title: title
    });
  }
  insertClarityScript(clarityId) {
    const existingScript = document.querySelector(`script[src="https://www.clarity.ms/tag/${encodeURIComponent(clarityId)}"]`);
    if (existingScript) {
      return;
    }
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.text = `
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/${encodeURIComponent(clarityId)}";
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${encodeURIComponent(clarityId)}");
    `;
    document.head.appendChild(script);
  }
  async loadConfig() {
    try {
      const baseHref = document.querySelector("base")?.getAttribute("href") ?? "/";
      const baseUrl = `${window.location.origin}${baseHref}`;
      const url = new URL("analytics-config.json", baseUrl).toString();
      const response = await fetch(url);
      if (!response.ok) {
        return null;
      }
      const data = await response.json();
      return {
        googleAnalyticsId: typeof data.googleAnalyticsId === "string" ? data.googleAnalyticsId : "",
        clarityId: typeof data.clarityId === "string" ? data.clarityId : void 0
      };
    } catch {
      return null;
    }
  }
  static \u0275fac = function AnalyticsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnalyticsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AnalyticsService, factory: _AnalyticsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnalyticsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/app.ts
function App_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loader", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("message", ctx_r0.loadingMessage());
  }
}
var App = class _App {
  router = inject(Router);
  loaderService = inject(LoaderService);
  consentService = inject(CookieConsentService);
  analyticsService = inject(AnalyticsService);
  loading = this.loaderService.active;
  loadingMessage = this.loaderService.message;
  analyticsAllowed = this.consentService.analyticsAllowed;
  title = signal(
    "nm-chronicles",
    ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    if (typeof document !== "undefined") {
      effect(() => {
        document.body.classList.toggle("loader-active", this.loading());
      });
      effect(() => {
        if (this.analyticsAllowed()) {
          const globalWindow = window;
          if (typeof globalWindow.requestIdleCallback === "function") {
            globalWindow.requestIdleCallback(() => void this.analyticsService.init(), { timeout: 3e3 });
          } else {
            globalWindow.addEventListener("load", () => void this.analyticsService.init(), { once: true, passive: true });
            setTimeout(() => void this.analyticsService.init(), 3e3);
          }
        } else {
          this.analyticsService.shutdown();
        }
      });
    }
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loaderService.show("Loading page\u2026");
      }
      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.loaderService.hide();
      }
      if (event instanceof NavigationEnd) {
        this.sendPageView(event.urlAfterRedirects);
      }
    });
  }
  sendPageView(url) {
    if (typeof window === "undefined" || typeof window.gtag !== "function") {
      return;
    }
    window.gtag("event", "page_view", {
      page_path: url,
      page_location: window.location.href,
      page_title: document.title
    });
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 7, vars: 1, consts: [["id", "main", 1, "main"], [3, "message"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-header");
      \u0275\u0275elementStart(1, "main", 0);
      \u0275\u0275conditionalCreate(2, App_Conditional_2_Template, 1, 1, "app-loader", 1);
      \u0275\u0275element(3, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "app-footer")(5, "app-light-house")(6, "app-cookie-consent");
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 2 : -1);
    }
  }, dependencies: [RouterOutlet, Header, Footer, LightHouse, Loader, CookieConsent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, Header, Footer, LightHouse, Loader, CookieConsent], template: '<app-header></app-header>\r\n<main id="main" class="main">\r\n  @if (loading()) {\r\n    <app-loader [message]="loadingMessage()"></app-loader>\r\n  }\r\n  <router-outlet></router-outlet>\r\n</main>\r\n<app-footer></app-footer>\r\n<app-light-house></app-light-house>\r\n<app-cookie-consent></app-cookie-consent>' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 18 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main-XQMN2KZ7.js.map
