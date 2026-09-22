(function () {
  const config = window.SITE_CONFIG;
  if (!config) return;

  const icons = {
    heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/></svg>',
    spark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z"/><path d="m18.5 14 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z"/></svg>',
    message: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/><path d="M8 9h8M8 13h5"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4C12 4 5 7 5 14c0 3 2 5 5 5 7 0 10-7 10-15Z"/><path d="M4 21c2-6 6-9 12-12"/></svg>'
  };

  document.querySelectorAll("[data-professional-name]").forEach(el => el.textContent = config.professional.name);
  document.querySelectorAll("[data-professional-role]").forEach(el => el.textContent = config.professional.role);
  document.getElementById("professional-bio").innerHTML = config.professional.bio.map(text => `<p>${text}</p>`).join("");
  document.getElementById("current-year").textContent = new Date().getFullYear();

  document.getElementById("treatment-list").innerHTML = config.treatments.map(item => `
    <article class="treatment-card reveal">
      <div class="card-top"><span>${item.number}</span><i aria-hidden="true">↗</i></div>
      <h3>${item.title}</h3><p>${item.text}</p>
    </article>`).join("");

  document.getElementById("steps-list").innerHTML = config.steps.map((item, index) => `
    <li class="step reveal"><span>${String(index + 1).padStart(2, "0")}</span><div><h3>${item.title}</h3><p>${item.text}</p></div></li>`).join("");

  document.getElementById("difference-list").innerHTML = config.differences.map(item => `
    <article class="difference-card reveal"><div class="difference-icon">${icons[item.icon] || icons.spark}</div><h3>${item.title}</h3><p>${item.text}</p></article>`).join("");

  document.getElementById("faq-list").innerHTML = config.faq.map((item, index) => `
    <details class="faq-item reveal" ${index === 0 ? "open" : ""}><summary><span>${item.question}</span><i aria-hidden="true"></i></summary><p>${item.answer}</p></details>`).join("");

  const whatsapp = config.professional.whatsapp.replace(/\D/g, "");
  const whatsAppUrl = whatsapp ? `https://wa.me/${whatsapp}?text=${encodeURIComponent(config.professional.whatsappMessage)}` : "";
  document.querySelectorAll(".js-whatsapp").forEach(link => {
    if (whatsAppUrl) {
      link.href = whatsAppUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.href = "#contato";
      link.addEventListener("click", () => {
        const status = document.getElementById("contact-status");
        status.hidden = false;
      });
    }
  });

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");
  toggle.setAttribute("aria-expanded", "false");
  nav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
    document.body.classList.toggle("menu-open", !open);
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }));

  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 20);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
  }
})();
