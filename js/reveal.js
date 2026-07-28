// PEPTIVA — animaciones de scroll narrativo (sin librerías)
(function () {
  // Revelado por IntersectionObserver
  const els = document.querySelectorAll("[data-reveal]");
  els.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min((i % 4) * 0.08, 0.3)}s`;
  });
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("revealed");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  els.forEach(el => io.observe(el));

  // Ken Burns suave en el hero (zoom continuo muy lento)
  const heroBg = document.querySelector(".hero-bg");
  if (heroBg) heroBg.classList.add("kenburns");

  // Parallax ligero del hero al hacer scroll
  const hero = document.querySelector(".hero");
  if (hero && heroBg && matchMedia("(prefers-reduced-motion: no-preference)").matches) {
    addEventListener("scroll", () => {
      const y = Math.min(scrollY, innerHeight);
      heroBg.style.transform = `translateY(${y * 0.25}px) scale(1.08)`;
      heroBg.style.opacity = String(1 - y / innerHeight * 0.6);
    }, { passive: true });
  }
})();
