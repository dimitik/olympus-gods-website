const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const langSwitch = document.querySelector(".lang-switch");
const LANG_KEY = "olympus-lang";

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    });
  });
}

if (langSwitch) {
  const destLang = langSwitch.getAttribute("hreflang");

  langSwitch.addEventListener("click", (event) => {
    try {
      if (destLang) localStorage.setItem(LANG_KEY, destLang);
    } catch (_) {
      /* storage may be blocked */
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    event.preventDefault();
    document.documentElement.classList.add("is-lang-leaving");
    window.setTimeout(() => {
      window.location.href = langSwitch.href;
    }, 180);
  });
}
