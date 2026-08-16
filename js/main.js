// PEPTINATOR MX — render del catálogo, filtros y ficha de producto (modal)
// i18n: strings visibles vía T() según window.LANG (js/i18n.js)
(function () {
  const T = window.T || (k => k);
  const EN = window.LANG === "en";
  const CATNAMES = EN && typeof CATEGORIES_EN !== "undefined" ? CATEGORIES_EN : CATEGORIES;
  const SPECS = EN && typeof SPECS_COMUNES_EN !== "undefined" ? SPECS_COMUNES_EN : SPECS_COMUNES;

  const grid = document.getElementById("product-grid");
  const filtersEl = document.getElementById("filters");
  const countEl = document.getElementById("product-count");
  const modal = document.getElementById("product-modal");
  const modalBody = document.getElementById("modal-body");

  const fmt = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0
  });

  let currentProduct = null;
  let qty = 1;

  /* ---------- Tarjetas del catálogo ---------- */
  function cardHTML(p) {
    const price = p.price === null
      ? `<span class="card-price pending">${T("shop.tbd")}</span>`
      : `<span class="card-price">${fmt.format(p.price)}</span>`;
    const noteTxt = EN && p.note_en ? p.note_en : p.note;
    const note = noteTxt ? `<p class="card-note">${noteTxt}</p>` : "";
    return `
      <article class="card" data-cat="${p.cat}" data-id="${p.id}" tabindex="0"
               role="button" aria-label="Ver ficha de ${p.name}">
        <div class="card-img">
          <span class="card-tag">${CATNAMES[p.cat] || p.cat}</span>
          <img src="${p.img}" alt="${T("alt.vial")}${p.name} ${p.spec}" loading="lazy">
        </div>
        <div class="card-body">
          <h3 class="card-name">${p.name}</h3>
          <p class="card-spec">${p.spec}</p>
          ${note}
          <div class="card-meta">
            <span class="card-purity">≥99% HPLC · COA</span>
            ${price}
          </div>
        </div>
      </article>`;
  }

  let catActual = "todos";

  function render(cat) {
    catActual = cat;
    const list = cat === "todos" ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
    grid.innerHTML = list.map(cardHTML).join("");
    countEl.textContent = list.length;
  }

  // Stock remoto actualizado (Google Sheets): redibujar disponibilidad
  document.addEventListener("stock:updated", () => render(catActual));

  function renderFilters() {
    const cats = ["todos", ...new Set(PRODUCTS.map(p => p.cat))];
    filtersEl.innerHTML = cats.map((c, i) =>
      `<button class="filter-btn${i === 0 ? " active" : ""}" role="tab" data-cat="${c}">${CATNAMES[c] || c}</button>`
    ).join("");
  }

  filtersEl.addEventListener("click", e => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    filtersEl.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    render(btn.dataset.cat);
  });

  /* ---------- Ficha de producto (modal) ---------- */
  function totalHTML() {
    if (!currentProduct || currentProduct.price === null) {
      return `<span class="modal-total pending">${T("modal.pricetbd")}</span>`;
    }
    return `<span class="modal-total">${fmt.format(currentProduct.price * qty)}</span>`;
  }

  function refreshQty() {
    const q = document.getElementById("qty-value");
    const t = document.getElementById("modal-total-wrap");
    if (q) q.textContent = qty;
    if (t) t.innerHTML = totalHTML();
  }

  function modalHTML(p) {
    const specs = SPECS.map(s => `<li>${s}</li>`).join("");
    const desc = EN && p.desc_en ? p.desc_en : p.desc;
    const stock = typeof stockDe === "function" ? stockDe(p.id) : 0;
    const stockLinea = stock > 0
      ? `<p class="mono stock-linea">${T("stock.in").replace("{n}", stock).replace("{s}", stock === 1 ? "" : "s")}</p>`
      : `<p class="mono stock-linea agotado">${T("stock.out")}</p>`;
    const buyBlock = p.price === null
      ? `<div class="modal-buy">
           <p class="mono buy-pending">${T("modal.pending")}</p>
           <button class="btn btn-primary" data-action="pedir">${T("modal.quote")}</button>
         </div>`
      : stock <= 0
      ? `<div class="modal-buy">
           ${stockLinea}
           <p class="mono buy-note">${T("modal.outnote")}</p>
         </div>`
      : `<div class="modal-buy">
           ${stockLinea}
           <div class="qty-row">
             <span class="mono qty-label">${T("modal.qty")}</span>
             <div class="qty-ctrl mono">
               <button type="button" data-action="menos" aria-label="Quitar uno">−</button>
               <span id="qty-value">${qty}</span>
               <button type="button" data-action="mas" aria-label="Agregar uno">+</button>
             </div>
             <div class="total-wrap mono" id="modal-total-wrap">${totalHTML()}</div>
           </div>
           <div class="buy-actions">
             <button class="btn btn-primary" data-action="agregar">${T("modal.add")}</button>
             <button class="btn btn-ghost" data-action="coa">${T("modal.coa")}</button>
             <button class="btn btn-ghost" data-action="compartir">${T("modal.share")}</button>
           </div>
           <p class="mono buy-note">${T("modal.note")}</p>
         </div>`;
    return `
      <div class="modal-grid">
        <div class="modal-img">
          <img src="${p.img}" alt="${T("alt.vial")}${p.name} ${p.spec}">
          <span class="card-tag">${CATNAMES[p.cat] || p.cat}</span>
        </div>
        <div class="modal-info">
          <h3 class="modal-name">${p.name}</h3>
          <p class="mono modal-spec">CONTENIDO: ${p.spec} · LIOFILIZADO</p>
          <p class="modal-desc">${desc}</p>
          <h4 class="mono modal-sub">${T("modal.features")}</h4>
          <ul class="modal-specs">${specs}</ul>
          ${buyBlock}
        </div>
      </div>`;
  }

  function openModal(p) {
    currentProduct = p;
    qty = 1;
    modalBody.innerHTML = modalHTML(p);
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
    currentProduct = null;
  }

  /* ---------- Eventos ---------- */
  grid.addEventListener("click", e => {
    const card = e.target.closest(".card");
    if (!card) return;
    const p = PRODUCTS.find(x => x.id === card.dataset.id);
    if (p) window.location.href = "productos/" + p.id + ".html";
  });

  grid.addEventListener("keydown", e => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest(".card");
    if (!card) return;
    e.preventDefault();
    const p = PRODUCTS.find(x => x.id === card.dataset.id);
    if (p) window.location.href = "productos/" + p.id + ".html";
  });

  modal.addEventListener("click", e => {
    if (e.target.closest(".modal-close") || e.target === modal) {
      closeModal();
      return;
    }
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const action = btn.dataset.action;
    if (action === "mas") {
      const max = currentProduct && typeof stockDe === "function" ? stockDe(currentProduct.id) : 99;
      qty = Math.min(qty + 1, max);
      refreshQty();
    }
    if (action === "menos") { qty = Math.max(qty - 1, 1); refreshQty(); }
    if (action === "agregar") {
      if (window.PeptinatorCart && currentProduct) {
        window.PeptinatorCart.add(currentProduct.id, qty);
        closeModal();
        window.PeptinatorCart.open();
      }
    }
    if (action === "compartir") {
      const url = location.origin + location.pathname.replace(/[^/]*$/, "") + "productos/" + currentProduct.id + ".html";
      const texto = "PEPTIVA - " + currentProduct.name + " " + currentProduct.spec;
      if (navigator.share) {
        navigator.share({ title: texto, text: texto, url: url }).catch(() => {});
      } else {
        window.open("https://wa.me/?text=" + encodeURIComponent(texto + " " + url), "_blank", "noopener");
      }
    }
    if (action === "coa") {
      closeModal();
      document.getElementById("contacto").scrollIntoView({ behavior: "smooth" });
    }
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
  });


  // Pilares temáticos (belleza / juventud / descanso) vía hash #catalogo-<pilar>
  const PILARES = {
    belleza:  ["glow", "klow", "ghk-cu", "ghk-cu-100", "melanotan-1", "melanotan-2"],
    juventud: ["epithalon", "nad", "mots-c", "5amino1mq"],
    descanso: ["selank", "oxitocina-5", "oxitocina-10", "ipamorelin", "ipamorelin-10"]
  };

  function aplicarPilar(nombre, sinScroll) {
    const ids = PILARES[nombre];
    if (!ids) return;
    const list = PRODUCTS.filter(p => ids.includes(p.id));
    grid.innerHTML = list.map(cardHTML).join("")
      + `<div class="explora-mas"><button type="button" id="explora-mas-btn">${T("shop.explore")}</button></div>`;
    countEl.textContent = list.length;
    catActual = "pilar:" + nombre;
    if (!sinScroll) document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
    filtersEl.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    document.getElementById("explora-mas-btn").addEventListener("click", () => {
      catActual = "todos";
      render("todos");
      filtersEl.querySelectorAll(".filter-btn").forEach(b => b.classList.toggle("active", b.dataset.cat === "todos"));
      document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
    });
  }

  function checkHash() {
    const m = location.hash.match(/^#catalogo-(\w+)/);
    if (m && PILARES[m[1]]) aplicarPilar(m[1]);
  }
  window.addEventListener("hashchange", checkHash);
  checkHash();

  // Traducciones aplicadas: re-render del contenido dinámico según LANG
  document.addEventListener("i18n:applied", () => {
    renderFilters();
    if (catActual.startsWith("pilar:")) aplicarPilar(catActual.slice(6), true);
    else render(catActual);
  });

  renderFilters();
  render("todos");
})();
