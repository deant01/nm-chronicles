import {
  Directive,
  ElementRef,
  Input,
  NavigationEnd,
  PLATFORM_ID,
  Renderer2,
  Router,
  __spreadProps,
  __spreadValues,
  filter,
  inject,
  input,
  isPlatformBrowser,
  setClassMetadata,
  ɵɵdefineDirective
} from "./chunk-772GF5FN.js";

// src/app/directives/scroll-reveal.directive.ts
var ScrollRevealDirective = class _ScrollRevealDirective {
  el = inject(ElementRef);
  renderer = inject(Renderer2);
  platformId = inject(PLATFORM_ID);
  router = inject(Router);
  // Class to add when element is revealed
  revealClass = input("is-visible", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "revealClass" } : (
    /* istanbul ignore next */
    {}
  )), { alias: "appScrollReveal" }));
  // How much of the element must be visible before triggering (0 - 1)
  threshold = input(
    0.1,
    ...ngDevMode ? [{ debugName: "threshold" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Only trigger once, then stop observing
  once = input(
    true,
    ...ngDevMode ? [{ debugName: "once" }] : (
      /* istanbul ignore next */
      []
    )
  );
  observer;
  navigationSubscription;
  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const element = this.el.nativeElement;
    this.observer = new IntersectionObserver((entries) => this.handleIntersect(entries), {
      root: null,
      // viewport
      threshold: this.threshold(),
      rootMargin: "0px 0px -10% 0px"
      // trigger slightly before it fully hits bottom
    });
    this.observer.observe(element);
    requestAnimationFrame(() => this.checkVisibility(element));
    this.navigationSubscription = this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      requestAnimationFrame(() => this.checkVisibility(element));
    });
  }
  isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    const intersection = {
      top: Math.max(0, rect.top),
      left: Math.max(0, rect.left),
      bottom: Math.min(window.innerHeight, rect.bottom),
      right: Math.min(window.innerWidth, rect.right)
    };
    const width = Math.max(0, intersection.right - intersection.left);
    const height = Math.max(0, intersection.bottom - intersection.top);
    const visibleArea = width * height;
    const totalArea = rect.width * rect.height;
    if (totalArea === 0) {
      return false;
    }
    return visibleArea / totalArea >= this.threshold();
  }
  handleIntersect(entries) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        this.renderer.addClass(this.el.nativeElement, this.revealClass());
        if (this.once()) {
          this.observer?.unobserve(entry.target);
        }
      } else if (!this.once()) {
        this.renderer.removeClass(this.el.nativeElement, this.revealClass());
      }
    }
  }
  checkVisibility(element) {
    if (this.isElementVisible(element)) {
      this.renderer.addClass(element, this.revealClass());
      if (this.once()) {
        this.observer?.unobserve(element);
      }
    } else if (!this.once()) {
      this.renderer.removeClass(element, this.revealClass());
    }
  }
  ngOnDestroy() {
    this.observer?.disconnect();
    this.navigationSubscription?.unsubscribe();
  }
  static \u0275fac = function ScrollRevealDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollRevealDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _ScrollRevealDirective, selectors: [["", "appScrollReveal", ""]], inputs: { revealClass: [1, "appScrollReveal", "revealClass"], threshold: [1, "threshold"], once: [1, "once"] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollRevealDirective, [{
    type: Directive,
    args: [{
      selector: "[appScrollReveal]",
      standalone: true
    }]
  }], null, { revealClass: [{ type: Input, args: [{ isSignal: true, alias: "appScrollReveal", required: false }] }], threshold: [{ type: Input, args: [{ isSignal: true, alias: "threshold", required: false }] }], once: [{ type: Input, args: [{ isSignal: true, alias: "once", required: false }] }] });
})();

export {
  ScrollRevealDirective
};
//# sourceMappingURL=chunk-OHVM3CVC.js.map
