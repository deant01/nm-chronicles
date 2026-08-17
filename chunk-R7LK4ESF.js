import {
  InjectionToken
} from "./chunk-772GF5FN.js";

// src/app/config.ts
var normalizeAssetBasePath = (path) => {
  if (!path) {
    return "/";
  }
  return path.endsWith("/") ? path : `${path}/`;
};
var isAbsoluteUrl = (path) => path.startsWith("http://") || path.startsWith("https://");
var buildAssetUrl = (assetBasePath, assetPath) => {
  if (!assetPath) {
    return "";
  }
  if (isAbsoluteUrl(assetPath)) {
    return assetPath;
  }
  const base = normalizeAssetBasePath(assetBasePath);
  const rawPath = assetPath.trim().replace(/^\/+/, "");
  const normalizedPath = rawPath.startsWith("nm-chronicles/") ? rawPath.slice("nm-chronicles/".length) : rawPath;
  return `${base}${normalizedPath}`;
};
var APP_ENVIRONMENT_CONFIG = new InjectionToken("APP_ENVIRONMENT_CONFIG", {
  providedIn: "root",
  factory: () => {
    const isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
    if (!isBrowser) {
      return {
        environment: "production",
        assetBasePath: "/",
        canonicalUrl: "https://newportmaeve.com/",
        isBrowser: false
      };
    }
    const host = window.location.host;
    const pathname = window.location.pathname;
    const origin = window.location.origin;
    const isLocal = host.startsWith("localhost") || host.startsWith("127.0.0.1");
    const isGithubPages = pathname.startsWith("/nm-chronicles/") || host.includes("github.io");
    const isProduction = host.endsWith("newportmaeve.com");
    if (isLocal) {
      return {
        environment: "local",
        assetBasePath: "/",
        canonicalUrl: `${origin}/`,
        isBrowser: true
      };
    }
    if (isGithubPages) {
      return {
        environment: "githubPages",
        assetBasePath: "/nm-chronicles/",
        canonicalUrl: `${origin}/nm-chronicles/`,
        isBrowser: true
      };
    }
    if (isProduction) {
      return {
        environment: "production",
        assetBasePath: "/",
        canonicalUrl: "https://newportmaeve.com/",
        isBrowser: true
      };
    }
    return {
      environment: "production",
      assetBasePath: "/",
      canonicalUrl: `${origin}${pathname}`,
      isBrowser: true
    };
  }
});

export {
  buildAssetUrl,
  APP_ENVIRONMENT_CONFIG
};
//# sourceMappingURL=chunk-R7LK4ESF.js.map
