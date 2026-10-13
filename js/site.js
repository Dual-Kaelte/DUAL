/* Navigation and manual galleries work without any external dependencies. */
(() => {
  "use strict";
  document.documentElement.classList.add("js");
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("hauptnavigation");
  if (toggle && nav) {
    const setOpen = (open, restoreFocus = false) => {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.querySelector(".menu-label").textContent = open
        ? "Schließen"
        : "Menü";
      if (restoreFocus) toggle.focus();
    };
    toggle.addEventListener("click", () =>
      setOpen(toggle.getAttribute("aria-expanded") !== "true"),
    );
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", (event) => {
      if (
        event.key === "Escape" &&
        toggle.getAttribute("aria-expanded") === "true"
      )
        setOpen(false, true);
    });
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".site-header")) setOpen(false);
    });
    window
      .matchMedia("(min-width: 761px)")
      .addEventListener("change", () => setOpen(false));
  }
  document
    .querySelectorAll(".product-gallery")
    .forEach((gallery, galleryIndex) => {
      const slides = [...gallery.querySelectorAll(".hero-slide")];
      const controls = gallery.querySelector(".gallery-controls");
      if (!slides.length || !controls) return;
      const buttons = [];
      const select = (index) => {
        slides.forEach((slide, i) => {
          slide.classList.toggle("active", i === index);
          slide.hidden = i !== index;
          buttons[i].setAttribute("aria-pressed", String(i === index));
        });
      };
      slides.forEach((slide, index) => {
        slide.id = `galerie-${galleryIndex + 1}-modell-${index + 1}`;
        const button = document.createElement("button");
        button.type = "button";
        button.className = "gallery-button";
        button.textContent = String(index + 1);
        button.setAttribute(
          "aria-label",
          `Modell mit ${index + 1} ${index === 0 ? "Modul" : "Modulen"} anzeigen`,
        );
        button.setAttribute("aria-controls", slide.id);
        button.addEventListener("click", () => select(index));
        button.addEventListener("keydown", (event) => {
          if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key))
            return;
          event.preventDefault();
          const next =
            event.key === "Home"
              ? 0
              : event.key === "End"
                ? slides.length - 1
                : (index +
                    (event.key === "ArrowRight" ? 1 : -1) +
                    slides.length) %
                  slides.length;
          select(next);
          buttons[next].focus();
        });
        buttons.push(button);
        controls.append(button);
      });
      select(0);
    });
  if (
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(".feature-card, .approach-list > div")
      .forEach((element) => {
        // Never hide anything already visible on initial load.
        if (element.getBoundingClientRect().top > window.innerHeight) {
          element.classList.add("reveal-ready");
          observer.observe(element);
        }
      });
  }
})();
