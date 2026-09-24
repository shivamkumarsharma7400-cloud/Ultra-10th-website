(() => {
  "use strict";
  const config = window.ULTRA_CONFIG || {};
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#mobile-nav");
  const closeMenu = () => {
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
  };
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    menu.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });
  menu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !menu.hidden) { closeMenu(); toggle.focus(); }
  });
  window.matchMedia("(min-width: 961px)").addEventListener("change", event => { if (event.matches) closeMenu(); });
  document.querySelector("[data-year]").textContent = String(new Date().getFullYear());

  let playStoreUrl;
  try {
    const url = new URL(config.playStoreUrl);
    if (url.protocol === "https:" && url.hostname === "play.google.com" && url.pathname === "/store/apps/details" && url.searchParams.get("id")) playStoreUrl = url.href;
  } catch { /* An unpublished app intentionally has no store URL. */ }
  if (playStoreUrl) {
    document.querySelectorAll("[data-install], a[href='#get-app'].button").forEach(link => {
      link.href = playStoreUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.setAttribute("aria-label", "Install Ultra 10th from Google Play (opens in a new tab)");
    });
    document.querySelector("[data-release-label]").textContent = "Available on Google Play";
    document.querySelector("#app-status").hidden = true;
  } else {
    document.querySelector("[data-install]").addEventListener("click", event => {
      event.preventDefault();
      const status = document.querySelector("#app-status");
      status.focus({ preventScroll: true });
      status.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "nearest" });
    });
  }
  try {
    const url = new URL(config.youtubeUrl);
    if (url.protocol === "https:" && ["youtube.com", "www.youtube.com"].includes(url.hostname)) {
      document.querySelectorAll("[data-youtube]").forEach(link => { link.href = url.href; });
    }
  } catch { /* Preserve the known channel link. */ }
  ["resources", "faq"].forEach(name => {
    const group = [...document.querySelectorAll(`details[name="${name}"]`)];
    group.forEach(item => item.addEventListener("toggle", () => {
      if (item.open) group.forEach(other => { if (other !== item) other.open = false; });
    }));
  });
})();
