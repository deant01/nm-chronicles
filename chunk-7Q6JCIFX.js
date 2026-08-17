import {
  ScrollService
} from "./chunk-CRWAEVLV.js";
import {
  Component,
  Input,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-772GF5FN.js";

// src/app/layout/shared-components/section-navigation/section-navigation.ts
var SECTIONS = [
  { id: "main", label: "Hero" },
  { id: "about", label: "Series" },
  { id: "listen", label: "Prequel" },
  { id: "characters", label: "Characters" },
  { id: "quotes", label: "Quotes" },
  { id: "map", label: "Map" },
  { id: "author", label: "Author" },
  { id: "connect", label: "Connect" }
];
var PREQUEL_SECTIONS = [
  { id: "main", label: "Hero" },
  { id: "part-1", label: "Part 1" },
  { id: "part-2", label: "Part 2" },
  { id: "part-3", label: "Part 3" },
  { id: "part-4", label: "Part 4" },
  { id: "part-5", label: "Part 5" },
  { id: "part-6", label: "Part 6" },
  { id: "part-7", label: "Part 7" },
  { id: "part-8", label: "Part 8" },
  { id: "part-9", label: "Part 9" },
  { id: "connect", label: "Connect" }
];
var SectionNavigation = class _SectionNavigation {
  isPrequel = false;
  sections = SECTIONS;
  scrollService = inject(ScrollService);
  isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
  sectionObserver;
  observedSections = /* @__PURE__ */ new Set();
  currentSection = signal(
    SECTIONS[0].id,
    ...ngDevMode ? [{ debugName: "currentSection" }] : (
      /* istanbul ignore next */
      []
    )
  );
  hasSeenContact = signal(
    false,
    ...ngDevMode ? [{ debugName: "hasSeenContact" }] : (
      /* istanbul ignore next */
      []
    )
  );
  showScrollUp = computed(
    () => this.hasSeenContact() && this.currentSection() !== "main",
    ...ngDevMode ? [{ debugName: "showScrollUp" }] : (
      /* istanbul ignore next */
      []
    )
  );
  currentSectionIndex = computed(
    () => this.sections.findIndex((section) => section.id === this.currentSection()),
    ...ngDevMode ? [{ debugName: "currentSectionIndex" }] : (
      /* istanbul ignore next */
      []
    )
  );
  currentLabel = computed(
    () => this.sections[this.currentSectionIndex()]?.label ?? "",
    ...ngDevMode ? [{ debugName: "currentLabel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  canScrollPrevious = computed(
    () => this.currentSectionIndex() > 0,
    ...ngDevMode ? [{ debugName: "canScrollPrevious" }] : (
      /* istanbul ignore next */
      []
    )
  );
  canScrollNext = computed(
    () => this.currentSectionIndex() < this.sections.length - 1,
    ...ngDevMode ? [{ debugName: "canScrollNext" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    if (this.isBrowser) {
      requestAnimationFrame(() => {
        this.createSectionObserver();
        this.checkForPendingSections();
        window.addEventListener("scroll", this.onScroll, { passive: true });
        window.addEventListener("resize", this.onScroll, { passive: true });
      });
    }
  }
  toggleScroll() {
    if (this.showScrollUp()) {
      this.scrollToPrevious();
      return;
    }
    this.scrollToNext();
  }
  buttonIcon() {
    return this.showScrollUp() ? "\u2934" : "\u2935";
  }
  buttonLabel() {
    const index = this.currentSectionIndex();
    const nextSection = this.showScrollUp() ? this.sections[index - 1] : this.sections[index + 1];
    return "Go to " + (nextSection?.label ?? (this.showScrollUp() ? "Hero" : "Contact"));
  }
  scrollToPrevious() {
    const index = this.currentSectionIndex();
    if (index <= 0) {
      return;
    }
    const targetId = this.sections[index - 1].id;
    this.scrollTo(targetId);
  }
  scrollToNext() {
    const index = this.currentSectionIndex();
    if (index >= this.sections.length - 1) {
      return;
    }
    const targetId = this.sections[index + 1].id;
    this.scrollTo(targetId);
  }
  ngOnChanges(changes) {
    if (changes["isPrequel"]) {
      this.sections = this.isPrequel ? PREQUEL_SECTIONS : SECTIONS;
      this.currentSection.set(this.sections[0].id);
      if (this.isBrowser) {
        this.sectionObserver?.disconnect();
        this.observedSections.clear();
        requestAnimationFrame(() => {
          this.createSectionObserver();
          this.checkForPendingSections();
        });
      }
    }
  }
  ngOnDestroy() {
    this.sectionObserver?.disconnect();
    if (this.isBrowser) {
      window.removeEventListener("scroll", this.onScroll);
      window.removeEventListener("resize", this.onScroll);
    }
  }
  createSectionObserver() {
    if (!this.isBrowser) {
      return;
    }
    this.sectionObserver = new IntersectionObserver((entries) => {
      const visibleSections = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visibleSections.length > 0) {
        this.currentSection.set(visibleSections[0].target.id);
      }
    }, {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0.1
    });
    for (const section of this.sections) {
      const element = document.getElementById(section.id);
      if (element) {
        this.sectionObserver.observe(element);
        this.observedSections.add(section.id);
      }
    }
  }
  checkForPendingSections() {
    if (!this.isBrowser) {
      return;
    }
    let foundSection = false;
    for (const section of this.sections) {
      if (!this.sectionObserver || this.observedSections.has(section.id)) {
        continue;
      }
      const element = document.getElementById(section.id);
      if (element) {
        this.sectionObserver.observe(element);
        this.observedSections.add(section.id);
        foundSection = true;
      }
    }
    if (foundSection) {
      this.updateCurrentSectionFromViewport();
    }
    if (this.sections.some((section) => !this.observedSections.has(section.id))) {
      requestAnimationFrame(() => this.checkForPendingSections());
    }
  }
  onScroll = () => {
    this.updateCurrentSectionFromViewport();
  };
  updateCurrentSectionFromViewport() {
    if (!this.isBrowser) {
      return;
    }
    const viewportMiddle = window.innerHeight * 0.35;
    let activeSection = this.sections[0].id;
    for (const section of this.sections) {
      const element = document.getElementById(section.id);
      if (!element) {
        continue;
      }
      const rect = element.getBoundingClientRect();
      if (rect.top <= viewportMiddle && rect.bottom > 0) {
        activeSection = section.id;
      }
    }
    this.currentSection.set(activeSection);
    this.hasSeenContact.set(activeSection === "connect" || this.hasSeenContact() && activeSection !== "main");
  }
  scrollTo(id) {
    this.scrollService.scrollTo(id, { behavior: "smooth", block: "start" });
  }
  static \u0275fac = function SectionNavigation_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SectionNavigation)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SectionNavigation, selectors: [["app-section-navigation"]], inputs: { isPrequel: "isPrequel" }, features: [\u0275\u0275NgOnChangesFeature], decls: 6, vars: 4, consts: [[1, "section-navigation"], ["type", "button", 1, "scroll-toggle", 3, "click", "title"], [1, "scroll-toggle__text"], ["aria-hidden", "true", 1, "scroll-toggle__icon"]], template: function SectionNavigation_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275domListener("click", function SectionNavigation_Template_button_click_1_listener() {
        return ctx.toggleScroll();
      });
      \u0275\u0275domElementStart(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "span", 3);
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275domProperty("title", ctx.buttonLabel());
      \u0275\u0275attribute("aria-label", ctx.buttonLabel());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.buttonLabel());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.buttonIcon());
    }
  }, styles: ['\n.section-navigation[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 1.5rem;\n  bottom: 1.5rem;\n  z-index: 20;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.scroll-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 0.85rem 1rem;\n  border-radius: 999px;\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  background: rgba(10, 10, 10, 0.94);\n  color: var(--gold);\n  font-family: "Cinzel", serif;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 0.22em;\n  cursor: pointer;\n  transition:\n    transform 0.2s ease,\n    background-color 0.2s ease,\n    box-shadow 0.2s ease;\n  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.24);\n}\n.scroll-toggle[_ngcontent-%COMP%]:hover, \n.scroll-toggle[_ngcontent-%COMP%]:focus-visible {\n  transform: translateY(-2px);\n  background: rgba(255, 255, 255, 0.08);\n}\n.scroll-toggle__text[_ngcontent-%COMP%] {\n  display: none;\n}\n.scroll-toggle__icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.6rem;\n  height: 1.6rem;\n  border-radius: 50%;\n  color: var(--gold);\n  font-size: 1.1rem;\n}\n@media (min-width: 768px) {\n  .scroll-toggle[_ngcontent-%COMP%] {\n    padding: 1rem 1.25rem;\n  }\n  .scroll-toggle__text[_ngcontent-%COMP%] {\n    display: inline;\n  }\n}\n.scroll-toggle[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--gold);\n  outline-offset: 4px;\n}\n.sr-only[_ngcontent-%COMP%] {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n.section-name[_ngcontent-%COMP%] {\n  font-size: 11px;\n  letter-spacing: 2px;\n  color: var(--gold);\n}\n/*# sourceMappingURL=section-navigation-XZHZGRJ3.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SectionNavigation, [{
    type: Component,
    args: [{ selector: "app-section-navigation", template: '<div class="section-navigation">\r\n  <button\r\n    type="button"\r\n    class="scroll-toggle"\r\n    (click)="toggleScroll()"\r\n    [attr.aria-label]="buttonLabel()"\r\n    [title]="buttonLabel()"\r\n  >\r\n    <span class="scroll-toggle__text">{{ buttonLabel() }}</span>\r\n    <span class="scroll-toggle__icon" aria-hidden="true">{{ buttonIcon() }}</span>\r\n  </button>\r\n</div>\r\n', styles: ['/* src/app/layout/shared-components/section-navigation/section-navigation.scss */\n.section-navigation {\n  position: fixed;\n  right: 1.5rem;\n  bottom: 1.5rem;\n  z-index: 20;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.scroll-toggle {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 0.85rem 1rem;\n  border-radius: 999px;\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  background: rgba(10, 10, 10, 0.94);\n  color: var(--gold);\n  font-family: "Cinzel", serif;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 0.22em;\n  cursor: pointer;\n  transition:\n    transform 0.2s ease,\n    background-color 0.2s ease,\n    box-shadow 0.2s ease;\n  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.24);\n}\n.scroll-toggle:hover,\n.scroll-toggle:focus-visible {\n  transform: translateY(-2px);\n  background: rgba(255, 255, 255, 0.08);\n}\n.scroll-toggle__text {\n  display: none;\n}\n.scroll-toggle__icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.6rem;\n  height: 1.6rem;\n  border-radius: 50%;\n  color: var(--gold);\n  font-size: 1.1rem;\n}\n@media (min-width: 768px) {\n  .scroll-toggle {\n    padding: 1rem 1.25rem;\n  }\n  .scroll-toggle__text {\n    display: inline;\n  }\n}\n.scroll-toggle:focus-visible {\n  outline: 2px solid var(--gold);\n  outline-offset: 4px;\n}\n.sr-only {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n.section-name {\n  font-size: 11px;\n  letter-spacing: 2px;\n  color: var(--gold);\n}\n/*# sourceMappingURL=section-navigation-XZHZGRJ3.css.map */\n'] }]
  }], () => [], { isPrequel: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SectionNavigation, { className: "SectionNavigation", filePath: "src/app/layout/shared-components/section-navigation/section-navigation.ts", lineNumber: 38 });
})();

export {
  SectionNavigation
};
//# sourceMappingURL=chunk-7Q6JCIFX.js.map
