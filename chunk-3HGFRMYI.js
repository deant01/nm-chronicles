import {
  Component,
  DOCUMENT,
  DomSanitizer,
  Injectable,
  Input,
  NgClass,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵsanitizeHtml
} from "./chunk-772GF5FN.js";

// src/app/services/social-share.service.ts
var SocialShareService = class _SocialShareService {
  document = inject(DOCUMENT);
  buildAbsoluteUrl(path) {
    if (!path) {
      return "";
    }
    if (/^https?:\/\//.test(path)) {
      return path;
    }
    const origin = this.document?.location?.origin ?? "";
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    return `${origin}${normalizedPath}`;
  }
  canUseWebShare() {
    return typeof navigator !== "undefined" && typeof navigator.share === "function";
  }
  shareLink(url, title, text) {
    const absoluteUrl = this.buildAbsoluteUrl(url);
    const shareData = { title, text, url: absoluteUrl };
    if (this.canUseWebShare()) {
      navigator.share(shareData).catch(() => {
        this.openX(absoluteUrl, text);
      });
      return;
    }
    this.openX(absoluteUrl, text);
  }
  shareOn(platform, url, text, mediaUrl, mediaAlt, pageDescription, isLightbox) {
    const absoluteUrl = this.buildAbsoluteUrl(url);
    const shareText = pageDescription || mediaAlt || text;
    switch (platform) {
      case "x":
        this.openX(absoluteUrl, shareText);
        break;
      case "facebook":
        this.openFacebook(absoluteUrl, shareText, isLightbox);
        break;
      case "instagram":
        this.openInstagram(absoluteUrl, shareText);
        break;
      case "pinterest":
        this.openPinterest(absoluteUrl, shareText, mediaUrl);
        break;
    }
  }
  openWindow(url) {
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }
  openX(url, text) {
    const shareUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    this.openWindow(shareUrl);
  }
  openFacebook(url, quote, isLightbox) {
    const isImageShare = this.isImageUrl(url);
    const effectiveUrl = isImageShare && !isLightbox && this.document?.location?.href && this.document.location.href !== url ? this.document.location.href : url;
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(effectiveUrl)}${quote ? `&quote=${encodeURIComponent(quote)}` : ""}`;
    this.openWindow(shareUrl);
  }
  isImageUrl(url) {
    return /\.(jpe?g|png|gif|webp|avif|svg|bmp|ico|tiff?)(\?.*)?$/i.test(url);
  }
  openWhatsApp(url, text) {
    const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${text} ${url}`)}`;
    this.openWindow(shareUrl);
  }
  /**
   * Instagram has no public web intent for sharing a URL directly (unlike X/Facebook/Pinterest).
   * We fall back to the native Web Share API where available, and otherwise just
   * open instagram.com so the user can share manually.
   */
  openInstagram(url, text) {
    if (this.canUseWebShare()) {
      navigator.share({ title: "Share on Instagram", text, url }).catch(() => {
        this.openWindow("https://www.instagram.com/");
      });
      return;
    }
    this.openWindow("https://www.instagram.com/");
  }
  openPinterest(url, text, mediaUrl) {
    const params = new URLSearchParams({
      url,
      description: text
    });
    if (mediaUrl) {
      params.set("media", this.buildAbsoluteUrl(mediaUrl));
    }
    const shareUrl = `https://pinterest.com/pin/create/button/?${params.toString()}`;
    this.openWindow(shareUrl);
  }
  static \u0275fac = function SocialShareService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SocialShareService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SocialShareService, factory: _SocialShareService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SocialShareService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// node_modules/simple-icons/index.mjs
var c = '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>';
var t = '</title><path d="';
var a = '"/></svg>';
var siFacebook = { title: "Facebook", slug: "facebook", get svg() {
  return c + "Facebook" + t + this.path + a;
}, path: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z", source: "https://about.meta.com/brand/resources/facebook/logo", hex: "0866FF", guidelines: "https://about.meta.com/brand/resources/facebook/logo" };
var siInstagram = { title: "Instagram", slug: "instagram", get svg() {
  return c + "Instagram" + t + this.path + a;
}, path: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077", source: "https://about.meta.com/brand/resources/instagram", hex: "FF0069", guidelines: "https://about.meta.com/brand/resources/instagram" };
var siPinterest = { title: "Pinterest", slug: "pinterest", get svg() {
  return c + "Pinterest" + t + this.path + a;
}, path: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z", source: "https://business.pinterest.com/en/brand-guidelines", hex: "BD081C", guidelines: "https://business.pinterest.com/en/brand-guidelines" };
var siX = { title: "X", slug: "x", get svg() {
  return c + "X" + t + this.path + a;
}, path: "M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z", source: "https://x.com", hex: "000000", guidelines: "https://about.x.com/en/who-we-are/brand-toolkit" };

// src/app/layout/shared-components/share-on/share-on.ts
var _c0 = (a0, a1) => ({ "lightbox-share-actions": a0, "prequal-share-actions": a1 });
var ShareOn = class _ShareOn {
  socialShareService = inject(SocialShareService);
  sanitizer = inject(DomSanitizer);
  url = "";
  text = "";
  mediaUrl = "";
  mediaAlt = "";
  pageDescription = "";
  isLightbox = false;
  isPrequal = false;
  facebookIcon = this.iconSvg(siFacebook);
  xIcon = this.iconSvg(siX);
  instagramIcon = this.iconSvg(siInstagram);
  pinterestIcon = this.iconSvg(siPinterest);
  shareOn(platform) {
    const defaultUrl = typeof window !== "undefined" ? window.location.href : "";
    let url = this.url || defaultUrl;
    if (this.isLightbox) {
      if (platform !== "x" && this.mediaUrl) {
        url = this.mediaUrl;
      } else {
        url = defaultUrl;
      }
    }
    const text = this.text || this.pageDescription || this.mediaAlt || "Share this from the Newport Maeve Chronicles.";
    this.socialShareService.shareOn(platform, url, text, this.mediaUrl, this.mediaAlt, this.pageDescription, this.isLightbox);
  }
  iconSvg(icon) {
    return this.sanitizer.bypassSecurityTrustHtml(icon.svg.replace("<svg ", '<svg fill="currentColor" '));
  }
  static \u0275fac = function ShareOn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShareOn)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShareOn, selectors: [["app-share-on"]], inputs: { url: "url", text: "text", mediaUrl: "mediaUrl", mediaAlt: "mediaAlt", pageDescription: "pageDescription", isLightbox: "isLightbox", isPrequal: "isPrequal" }, decls: 9, vars: 10, consts: [[3, "ngClass"], ["type", "button", "aria-label", "Facebook", 1, "share-action", 3, "click"], [1, "social-icon", 3, "innerHTML"], ["type", "button", "aria-label", "Share on X", 1, "share-action", 3, "click"], ["type", "button", "aria-label", "Share on Instagram", 1, "share-action", 3, "click"], ["type", "button", "aria-label", "Share on Pinterest", 1, "share-action", 3, "click"]], template: function ShareOn_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function ShareOn_Template_button_click_1_listener() {
        return ctx.shareOn("facebook");
      });
      \u0275\u0275element(2, "span", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "button", 3);
      \u0275\u0275listener("click", function ShareOn_Template_button_click_3_listener() {
        return ctx.shareOn("x");
      });
      \u0275\u0275element(4, "span", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 4);
      \u0275\u0275listener("click", function ShareOn_Template_button_click_5_listener() {
        return ctx.shareOn("instagram");
      });
      \u0275\u0275element(6, "span", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 5);
      \u0275\u0275listener("click", function ShareOn_Template_button_click_7_listener() {
        return ctx.shareOn("pinterest");
      });
      \u0275\u0275element(8, "span", 2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("share-actions", true);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(7, _c0, ctx.isLightbox, ctx.isPrequal));
      \u0275\u0275advance(2);
      \u0275\u0275property("innerHTML", ctx.facebookIcon, \u0275\u0275sanitizeHtml);
      \u0275\u0275advance(2);
      \u0275\u0275property("innerHTML", ctx.xIcon, \u0275\u0275sanitizeHtml);
      \u0275\u0275advance(2);
      \u0275\u0275property("innerHTML", ctx.instagramIcon, \u0275\u0275sanitizeHtml);
      \u0275\u0275advance(2);
      \u0275\u0275property("innerHTML", ctx.pinterestIcon, \u0275\u0275sanitizeHtml);
    }
  }, dependencies: [NgClass], styles: ['\n.share-actions[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 1rem;\n  right: 0.5rem;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  display: grid;\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.share-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  padding: 0.85rem 1rem;\n  border: 1px solid var(--border);\n  background: transparent;\n  -webkit-backdrop-filter: blur(1.5px);\n  backdrop-filter: blur(1.5px);\n  color: var(--gold);\n  font-family: "Cinzel", serif;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  cursor: pointer;\n}\n.social-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  display: inline-flex;\n}\n.social-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.lightbox-share-actions[_ngcontent-%COMP%] {\n  position: unset;\n  bottom: unset;\n  display: flex;\n  flex-direction: row;\n  gap: 0.45rem;\n}\n.prequal-share-actions[_ngcontent-%COMP%] {\n  bottom: 6rem;\n}\n@media (hover: hover) {\n  .share-action[_ngcontent-%COMP%]:hover {\n    background: var(--gold-light);\n    color: var(--bg-deep);\n  }\n}\n/*# sourceMappingURL=share-on-W2YCZ5GM.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShareOn, [{
    type: Component,
    args: [{ selector: "app-share-on", standalone: true, imports: [NgClass], template: `<div [class.share-actions]="true" [ngClass]="{'lightbox-share-actions':  isLightbox, 'prequal-share-actions': isPrequal}">\r
  <button type="button" class="share-action" aria-label="Facebook" (click)="shareOn('facebook')">\r
    <span class="social-icon" [innerHTML]="facebookIcon"></span>\r
  </button>\r
  <button type="button" class="share-action" aria-label="Share on X" (click)="shareOn('x')">\r
    <span class="social-icon" [innerHTML]="xIcon"></span>\r
  </button>\r
  <button type="button" class="share-action" aria-label="Share on Instagram" (click)="shareOn('instagram')">\r
    <span class="social-icon" [innerHTML]="instagramIcon"></span>\r
  </button>\r
  <button type="button" class="share-action" aria-label="Share on Pinterest" (click)="shareOn('pinterest')">\r
    <span class="social-icon" [innerHTML]="pinterestIcon"></span>\r
  </button>\r
</div>\r
`, styles: ['/* src/app/layout/shared-components/share-on/share-on.scss */\n.share-actions {\n  position: fixed;\n  bottom: 1rem;\n  right: 0.5rem;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  display: grid;\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.share-action {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  padding: 0.85rem 1rem;\n  border: 1px solid var(--border);\n  background: transparent;\n  -webkit-backdrop-filter: blur(1.5px);\n  backdrop-filter: blur(1.5px);\n  color: var(--gold);\n  font-family: "Cinzel", serif;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  cursor: pointer;\n}\n.social-icon {\n  width: 1rem;\n  height: 1rem;\n  display: inline-flex;\n}\n.social-icon svg {\n  width: 100%;\n  height: 100%;\n}\n.lightbox-share-actions {\n  position: unset;\n  bottom: unset;\n  display: flex;\n  flex-direction: row;\n  gap: 0.45rem;\n}\n.prequal-share-actions {\n  bottom: 6rem;\n}\n@media (hover: hover) {\n  .share-action:hover {\n    background: var(--gold-light);\n    color: var(--bg-deep);\n  }\n}\n/*# sourceMappingURL=share-on-W2YCZ5GM.css.map */\n'] }]
  }], null, { url: [{
    type: Input
  }], text: [{
    type: Input
  }], mediaUrl: [{
    type: Input
  }], mediaAlt: [{
    type: Input
  }], pageDescription: [{
    type: Input
  }], isLightbox: [{
    type: Input
  }], isPrequal: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShareOn, { className: "ShareOn", filePath: "src/app/layout/shared-components/share-on/share-on.ts", lineNumber: 13 });
})();

export {
  ShareOn
};
//# sourceMappingURL=chunk-3HGFRMYI.js.map
