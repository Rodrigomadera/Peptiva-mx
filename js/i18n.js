// PEPTIVA — i18n compartido (ES base / EN)
// LANG: localStorage 'peptiva_lang' > navegador (es* -> es, resto -> en)
(function () {
  const saved = localStorage.getItem("peptiva_lang");
  const LANG = saved || ((navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en");
  window.LANG = LANG;

  const I18N = {
    es: {
      "nav.stories": "Historias",
      "nav.calc": "Calculadora",
      "nav.catalog": "Catálogo",
      "nav.quality": "Calidad",
      "nav.pay": "Pago",
      "nav.contact": "Contacto",
      "nav.order": "PEDIDO",
      "nav.shop": "TIENDA",
      "nav.back": "← Volver",
      "nav.home": "Inicio",

      "gate.kicker": "Verificación de acceso",
      "gate.slogan": "Ciencia para el bienestar femenino",
      "gate.text": 'Este sitio contiene compuestos destinados a investigación científica y está dirigido exclusivamente a <strong>mayores de 18 años</strong>.',
      "gate.question": "Confirma tu edad para continuar",
      "gate.adult": "Tengo 18 años o más",
      "gate.minor": "Soy menor de 18",
      "gate.legal": "Al entrar aceptas que todos los productos son para uso en investigación solamente. No son medicamentos, suplementos ni alimentos.",
      "gate.denied.kicker": "Acceso denegado",
      "gate.denied.title": "SITIO SOLO PARA<br>MAYORES DE EDAD",
      "gate.denied.text": "PEPTIVA es un sitio destinado exclusivamente a personas mayores de 18 años. No podemos darte acceso. Gracias por tu honestidad.",
      "gate.denied.legal": "Vuelve cuando cumplas 18 años.",
      "gate.title": "PEPTIVA | Verificación de edad",

      "hero.kicker": "Ciencia para el bienestar femenino",
      "hero.h1": 'Belleza, juventud<br>y descanso <span class="red-glow">con respaldo<br>científico</span>',
      "hero.sub": "Péptidos de investigación de grado analítico. Pureza ≥99% verificada por HPLC, identidad por espectrometría de masas y certificado de análisis en cada lote.",
      "hero.more": "Descubre más",
      "hero.catalog": "Ver catálogo",

      "legal.banner": "⚠ PARA USO EN INVESTIGACIÓN SOLAMENTE — No es medicamento, suplemento ni alimento. No destinado a consumo humano, diagnóstico ni tratamiento.",

      "stories.kicker": "Tres pilares",
      "stories.h2": "Tu bienestar, en tres historias",
      "s1.title": "Belleza",
      "s1.lead": "Tu piel es tu primera carta de presentación.",
      "s1.desc": "GHK-Cu, GLOW y KLOW: colágeno, elasticidad y folículo piloso en investigación.",
      "s1.link": "Explorar belleza →",
      "s2.title": "Juventud",
      "s2.lead": "Envejecer es natural; hacerlo bien es ciencia.",
      "s2.desc": "Epithalon, NAD+ y MOTS-c: telómeros, reparación celular y energía.",
      "s2.link": "Explorar juventud →",
      "s3.title": "Descanso",
      "s3.lead": "La calma también se estudia.",
      "s3.desc": "Selank, oxitocina e ipamorelin: estrés, ánimo y sueño profundo.",
      "s3.link": "Explorar descanso →",

      "info.kicker": "Aprende",
      "info.h2": "¿Qué es un péptido?",
      "info.p1t": "Son bloques naturales de tu cuerpo",
      "info.p1d": "Un péptido es una cadena corta de aminoácidos — los mismos componentes con los que el cuerpo construye sus proteínas.",
      "info.p2t": "Se forman como eslabones",
      "info.p2d": "Cada aminoácido se une al siguiente mediante un enlace peptídico; unas cuantas decenas forman un péptido, y cientos forman una proteína.",
      "info.p3t": "Tu cuerpo ya los usa todos los días",
      "info.p3d": "Hormonas como la insulina, enzimas y muchas señales celulares son péptidos o están hechas de ellos. No son sustancias extrañas: son mensajeros que tu biología ya reconoce.",
      "info.p4t": "Ya son parte de la medicina moderna",
      "info.p4d": "La insulina y los agonistas GLP-1 — algunos de los fármacos más recetados del mundo, desarrollados por grandes farmacéuticas — son péptidos. Es una de las clases de moléculas más estudiadas y consolidadas de la industria.",
      "info.p5t": "Por eso se investigan",
      "info.p5d": "En ciencia y medicina, los péptidos permiten estudiar procesos como regeneración, metabolismo y envejecimiento con precisión molecular.",
      "info.p6t": "Calidad verificable",
      "info.p6d": "Cada compuesto de PEPTIVA tiene pureza ≥99% confirmada por HPLC, identidad por espectrometría de masas y certificado de análisis por lote. Para uso en investigación solamente.",

      "catalog.kicker": "Catálogo completo: ",
      "catalog.h2": "Catálogo",
      "catalog.note": "*La etiqueta puede variar levemente",

      "protocol.kicker": "Nuestro proceso",
      "protocol.h2": "Protocolo de calidad",
      "pr1.t": "Síntesis y liofilización",
      "pr1.d": "Cada péptido se sintetiza bajo control de proceso y se liofiliza para preservar estabilidad durante el transporte y almacenamiento.",
      "pr2.t": "Análisis HPLC",
      "pr2.d": "Cromatografía líquida de alta resolución en cada lote. Solo se libera material con pureza igual o superior al 99%.",
      "pr3.t": "Espectrometría de masas",
      "pr3.d": "La identidad molecular se confirma por MS. Si la masa no coincide con la secuencia objetivo, el lote se destruye.",
      "pr4.t": "COA y trazabilidad",
      "pr4.d": "Todo vial incluye número de lote vinculado a su Certificado de Análisis. Puedes solicitar el COA de tu lote antes de comprar.",

      "trust.kicker": "Tu tranquilidad",
      "trust.h2": "Por qué Peptiva",
      "tr1.t": "COA verificable",
      "tr1.d": "Certificado de análisis de ejemplo disponible y verificación de lote bajo solicitud.",
      "tr2.t": "Envío nacional",
      "tr2.d": "Cobertura a las 32 entidades de México con empaque discreto y cadena de frío cuando aplica.",
      "tr3.t": "Devolución 30 días",
      "tr3.d": "Si el producto llega comprometido, lo reponemos o te devolvemos tu dinero.",
      "tr4.t": "Soporte técnico",
      "tr4.d": "Glosario técnico y acompañamiento para interpretar COA, HPLC y datos de espectrometría.",
      "coa.caption": "Análisis por lote: COA + HPLC + MS",

      "pay.kicker": "Formas de pago",
      "pay.h2": "Métodos de pago",
      "pay1.t": "Transferencia SPEI",
      "pay1.d": "Método principal. Al confirmar tu pedido por WhatsApp te compartimos la CLABE y referencia. Tu pedido se prepara en cuanto se acredita.",
      "pay1.status": "pendiente",
      "pay2.t": "Tarjeta — Link de pago*",
      "pay2.d": "Paga con tarjeta de crédito o débito mediante un link de pago seguro de MercadoPago. Lo generamos para tu pedido al confirmarlo por WhatsApp.",
      "pay2.note": "*El link de pago se genera por pedido, con tarjeta a meses según promoción de MercadoPago.",
      "pay3.t": "Efectivo — OXXO",
      "pay3.d": "Sin tarjeta ni cuenta: con el mismo link de pago de MercadoPago elige la opción <strong>efectivo</strong> y paga en cualquier OXXO con la referencia generada. Se acredita en 1-2 días hábiles.",
      "pay3.note": "El pedido se prepara al confirmarse el pago en tienda.",
      "pay4.t": "WhatsApp",
      "pay4.d": "Todo pedido se confirma por WhatsApp: revisas productos, total y método de pago directamente con nosotros antes de pagar.",

      "contact.kicker": "Hablemos",
      "contact.h2": "Contacto",
      "contact.status": "CANALES ACTIVOS — WHATSAPP · CORREO",
      "contact.body": "Pedidos, cotizaciones y solicitud de COA se atienden por WhatsApp o correo. Sitio oficial: <strong>peptiva.com.mx</strong>",
      "contact.domain": "DOMINIO",
      "contact.email": "CORREO",
      "contact.wa": "▸ Escribir por WhatsApp",
      "contact.mail": "Enviar correo",

      "footer.brand": "PEPTIVA — Ciencia para el bienestar femenino",
      "footer.legal": "Todos los compuestos se ofrecen exclusivamente para investigación científica in vitro. No están aprobados como medicamento, suplemento ni alimento, y no están destinados a consumo humano, diagnóstico ni tratamiento.",
      "footer.copy": "© 2026 PEPTIVA · Precios en MXN · Catálogo sujeto a disponibilidad de lote",

      "modal.close": "✕ CERRAR",
      "modal.features": "// CARACTERÍSTICAS",
      "modal.qty": "CANTIDAD",
      "modal.add": "▸ Agregar al pedido",
      "modal.coa": "Solicitar COA del lote",
      "modal.share": "⇗ Compartir",
      "modal.note": "// El pago se confirma por WhatsApp: transferencia SPEI o link de pago con tarjeta.",
      "modal.pending": "// PRODUCTO SIN PRECIO ASIGNADO — SOLICITA COTIZACIÓN",
      "modal.quote": "▸ Solicitar cotización",
      "modal.outnote": "// Sin existencia por el momento — escríbenos por WhatsApp para apartar del próximo lote.",
      "modal.pricetbd": "PRECIO POR CONFIRMAR",
      "stock.in": "▣ EN EXISTENCIA: {n} pza{s}",
      "stock.out": "▣ AGOTADO — REABASTECIMIENTO EN CURSO",
      "shop.tbd": "POR CONFIRMAR",
      "shop.explore": "Explora más — ver catálogo completo ↓",
      "alt.vial": "Vial de ",

      "cart.title": "Tu pedido",
      "cart.empty": "// PEDIDO VACÍO — agrega productos desde el catálogo",
      "cart.subtotal": "SUBTOTAL",
      "cart.shipping": "ENVÍO (DHL)",
      "cart.checkout": "▸ Confirmar pedido por WhatsApp",
      "cart.note": "El pago se acuerda al confirmar: SPEI, tarjeta o efectivo en OXXO.",
      "cart.state.ph": "Estado de envío…",
      "cart.max": "máx",
      "wa.header": "PEDIDO PEPTIVA",
      "wa.ship": "Envío DHL a ",
      "wa.ship.tbd": "• Envío DHL — por confirmar estado",
      "wa.subtotal": "Subtotal: ",
      "wa.total": "TOTAL CON ENVÍO: ",
      "wa.name": "Mi nombre es:",

      "calc.kicker": "Herramienta de laboratorio",
      "calc.h2": "Calculadora de reconstitución",
      "calc.product": "Producto del catálogo (precarga mg)",
      "calc.custom": "— Personalizado —",
      "calc.mg": "Péptido en el vial (mg)",
      "calc.water": "Agua bacteriostática (mL)",
      "calc.dose": "Dosis deseada",
      "calc.unit": "Unidad de dosis",
      "calc.syringe": "Tamaño de jeringa de insulina",
      "calc.save": "Guardar cálculo",
      "calc.extract": "Extraer",
      "calc.volume": "Volumen",
      "calc.conc": "Concentración",
      "calc.doses": "Dosis por vial",
      "calc.notice": "Jeringa de insulina estándar: 100 UI = 1 mL. Herramienta de referencia para laboratorio — verifica siempre tus cálculos. Solo uso en investigación.",
      "calc.saved": "Cálculos guardados",
      "calc.saved.empty": "Sin cálculos guardados.",
      "calc.saved.dose": "dosis",
      "calc.saved.in": "en",      "calc.footer.brand": "PEPTIVA — Calculadora de reconstitución",
      "calc.footer.legal": "Herramienta de referencia para investigación científica. No constituye instrucción médica ni de dosificación para uso humano.",

      "pp.chip": "✓ Pureza ≥99% (HPLC, ver COA)",
      "pp.ship": "▣ <strong>Envío DHL a todo México</strong> · Entrega estimada 2-5 días hábiles · Empaque discreto",
      "pp.add": "▸ Agregar al pedido",
      "pp.added": "✓ Agregado — ver pedido",
      "pp.wa": "Pedir por WhatsApp",
      "pp.note": "Uso exclusivo en investigación científica · Pureza verificada por HPLC",
      "pp.research": "En investigación:",
      "pp.coa": "▣ Ver COA",
      "pp.doubts": "◌ Dudas",
      "pp.share": "⇗ Compartir",
      "pp.copied": "✓ Enlace copiado",
      "pp.testi.title": "Lo que dicen nuestros clientes",
      "pp.testi.form": "Comparte tu experiencia",
      "pp.testi.name.ph": "Tu nombre (o iniciales)",
      "pp.testi.text.ph": "Cuéntanos cómo fue tu experiencia con este producto...",
      "pp.testi.send": "▸ Enviar testimonio",
      "pp.testi.ok": "✓ Gracias — tu testimonio se publicará tras validación.",
      "pp.testi.mod": "// Se publica tras revisión del equipo. Sin spam ni datos personales.",
      "pp.testi.empty": "Aún no hay testimonios publicados de este producto.<br>Sé el primero en compartir tu experiencia ↓",
      "pp.testi.empty2": "Sé el primero en compartir tu experiencia ↓",
      "pp.footer.legal": "Para uso en investigación solamente. No es medicamento, suplemento ni alimento.",
      "sitio.title": "PEPTIVA | Ciencia para el bienestar femenino — Péptidos de investigación",
      "calc.title": "Calculadora de Reconstitución | PEPTIVA"
    },

    en: {
      "nav.stories": "Stories",
      "nav.calc": "Calculator",
      "nav.catalog": "Catalog",
      "nav.quality": "Quality",
      "nav.pay": "Payment",
      "nav.contact": "Contact",
      "nav.order": "ORDER",
      "nav.shop": "SHOP",
      "nav.back": "← Back",
      "nav.home": "Home",

      "gate.kicker": "Access verification",
      "gate.slogan": "Science for women's wellness",
      "gate.text": 'This site contains compounds intended for scientific research and is directed exclusively at <strong>adults over 18</strong>.',
      "gate.question": "Confirm your age to continue",
      "gate.adult": "I am 18 or older",
      "gate.minor": "I am under 18",
      "gate.legal": "By entering you accept that all products are for research use only. They are not medicines, supplements or food.",
      "gate.denied.kicker": "Access denied",
      "gate.denied.title": "SITE FOR ADULTS<br>ONLY",
      "gate.denied.text": "PEPTIVA is a site intended exclusively for people over 18 years old. We cannot grant you access. Thank you for your honesty.",
      "gate.denied.legal": "Come back when you turn 18.",
      "gate.title": "PEPTIVA | Age verification",

      "hero.kicker": "Science for women's wellness",
      "hero.h1": 'Beauty, youth<br>and rest <span class="red-glow">backed by<br>science</span>',
      "hero.sub": "Analytical-grade research peptides. ≥99% purity verified by HPLC, identity by mass spectrometry and a certificate of analysis in every batch.",
      "hero.more": "Discover more",
      "hero.catalog": "View catalog",

      "legal.banner": "⚠ FOR RESEARCH USE ONLY — Not a medicine, supplement or food. Not intended for human consumption, diagnosis or treatment.",

      "stories.kicker": "Three pillars",
      "stories.h2": "Your wellness, in three stories",
      "s1.title": "Beauty",
      "s1.lead": "Your skin is your first introduction.",
      "s1.desc": "GHK-Cu, GLOW and KLOW: collagen, elasticity and hair follicle research.",
      "s1.link": "Explore beauty →",
      "s2.title": "Youth",
      "s2.lead": "Aging is natural; aging well is science.",
      "s2.desc": "Epithalon, NAD+ and MOTS-c: telomeres, cellular repair and energy.",
      "s2.link": "Explore youth →",
      "s3.title": "Rest",
      "s3.lead": "Calm is studied too.",
      "s3.desc": "Selank, oxytocin and ipamorelin: stress, mood and deep sleep.",
      "s3.link": "Explore rest →",

      "info.kicker": "Learn",
      "info.h2": "What is a peptide?",
      "info.p1t": "They are your body's natural building blocks",
      "info.p1d": "A peptide is a short chain of amino acids — the same components the body uses to build its proteins.",
      "info.p2t": "They form like links",
      "info.p2d": "Each amino acid bonds to the next through a peptide bond; a few dozen make a peptide, and hundreds make a protein.",
      "info.p3t": "Your body already uses them every day",
      "info.p3d": "Hormones like insulin, enzymes and many cellular signals are peptides or are made of them. They are not foreign substances: they are messengers your biology already recognizes.",
      "info.p4t": "They are already part of modern medicine",
      "info.p4d": "Insulin and GLP-1 agonists — some of the most prescribed drugs in the world, developed by major pharmaceutical companies — are peptides. It is one of the most studied and established molecule classes in the industry.",
      "info.p5t": "That is why they are researched",
      "info.p5d": "In science and medicine, peptides make it possible to study processes such as regeneration, metabolism and aging with molecular precision.",
      "info.p6t": "Verifiable quality",
      "info.p6d": "Every PEPTIVA compound has ≥99% purity confirmed by HPLC, identity by mass spectrometry and a per-batch certificate of analysis. For research use only.",

      "catalog.kicker": "Full catalog: ",
      "catalog.h2": "Catalog",
      "catalog.note": "*Label may vary slightly",

      "protocol.kicker": "Our process",
      "protocol.h2": "Quality protocol",
      "pr1.t": "Synthesis and lyophilization",
      "pr1.d": "Each peptide is synthesized under process control and lyophilized to preserve stability during transport and storage.",
      "pr2.t": "HPLC analysis",
      "pr2.d": "High-performance liquid chromatography on every batch. Only material with purity equal to or greater than 99% is released.",
      "pr3.t": "Mass spectrometry",
      "pr3.d": "Molecular identity is confirmed by MS. If the mass does not match the target sequence, the batch is destroyed.",
      "pr4.t": "COA and traceability",
      "pr4.d": "Every vial includes a batch number linked to its Certificate of Analysis. You can request your batch's COA before buying.",

      "trust.kicker": "Your peace of mind",
      "trust.h2": "Why Peptiva",
      "tr1.t": "Verifiable COA",
      "tr1.d": "Sample certificate of analysis available and batch verification upon request.",
      "tr2.t": "Nationwide shipping",
      "tr2.d": "Coverage to all 32 Mexican states with discreet packaging and cold chain when applicable.",
      "tr3.t": "30-day refund",
      "tr3.d": "If the product arrives compromised, we replace it or refund your money.",
      "tr4.t": "Technical support",
      "tr4.d": "Technical glossary and guidance to interpret COA, HPLC and spectrometry data.",
      "coa.caption": "Per-batch analysis: COA + HPLC + MS",

      "pay.kicker": "Payment options",
      "pay.h2": "Payment methods",
      "pay1.t": "SPEI transfer",
      "pay1.d": "Primary method. When you confirm your order via WhatsApp we share the CLABE and reference. Your order is prepared as soon as payment clears.",
      "pay1.status": "pending",
      "pay2.t": "Card — Payment link*",
      "pay2.d": "Pay with credit or debit card through a secure MercadoPago payment link. We generate it for your order when you confirm via WhatsApp.",
      "pay2.note": "*The payment link is generated per order, with card installments per MercadoPago promotion.",
      "pay3.t": "Cash — OXXO",
      "pay3.d": "No card or account needed: with the same MercadoPago payment link choose the <strong>cash</strong> option and pay at any OXXO with the generated reference. It clears in 1-2 business days.",
      "pay3.note": "The order is prepared once in-store payment is confirmed.",
      "pay4.t": "WhatsApp",
      "pay4.d": "Every order is confirmed via WhatsApp: you review products, total and payment method directly with us before paying.",

      "contact.kicker": "Let's talk",
      "contact.h2": "Contact",
      "contact.status": "ACTIVE CHANNELS — WHATSAPP · EMAIL",
      "contact.body": "Orders, quotes and COA requests are handled via WhatsApp or email. Official site: <strong>peptiva.com.mx</strong>",
      "contact.domain": "DOMAIN",
      "contact.email": "EMAIL",
      "contact.wa": "▸ Message on WhatsApp",
      "contact.mail": "Send email",

      "footer.brand": "PEPTIVA — Science for women's wellness",
      "footer.legal": "All compounds are offered exclusively for in vitro scientific research. They are not approved as medicine, supplement or food, and are not intended for human consumption, diagnosis or treatment.",
      "footer.copy": "© 2026 PEPTIVA · Prices in MXN · Catalog subject to batch availability",

      "modal.close": "✕ CLOSE",
      "modal.features": "// FEATURES",
      "modal.qty": "QUANTITY",
      "modal.add": "▸ Add to order",
      "modal.coa": "Request batch COA",
      "modal.share": "⇗ Share",
      "modal.note": "// Payment is confirmed via WhatsApp: SPEI transfer or card payment link.",
      "modal.pending": "// PRODUCT WITHOUT ASSIGNED PRICE — REQUEST A QUOTE",
      "modal.quote": "▸ Request a quote",
      "modal.outnote": "// Out of stock for now — message us on WhatsApp to reserve from the next batch.",
      "modal.pricetbd": "PRICE TO BE CONFIRMED",
      "stock.in": "▣ IN STOCK: {n} pc{s}",
      "stock.out": "▣ OUT OF STOCK — RESTOCK IN PROGRESS",
      "shop.tbd": "TO BE CONFIRMED",
      "shop.explore": "Explore more — view full catalog ↓",
      "alt.vial": "Vial of ",

      "cart.title": "Your order",
      "cart.empty": "// EMPTY ORDER — add products from the catalog",
      "cart.subtotal": "SUBTOTAL",
      "cart.shipping": "SHIPPING (DHL)",
      "cart.checkout": "▸ Confirm order via WhatsApp",
      "cart.note": "Payment is arranged upon confirmation: SPEI, card or cash at OXXO.",
      "cart.state.ph": "Shipping state…",
      "cart.max": "max",
      "wa.header": "PEPTIVA ORDER",
      "wa.ship": "DHL shipping to ",
      "wa.ship.tbd": "• DHL shipping — state to be confirmed",
      "wa.subtotal": "Subtotal: ",
      "wa.total": "TOTAL WITH SHIPPING: ",
      "wa.name": "My name is:",

      "calc.kicker": "Laboratory tool",
      "calc.h2": "Reconstitution calculator",
      "calc.product": "Catalog product (preloads mg)",
      "calc.custom": "— Custom —",
      "calc.mg": "Peptide in vial (mg)",
      "calc.water": "Bacteriostatic water (mL)",
      "calc.dose": "Desired dose",
      "calc.unit": "Dose unit",
      "calc.syringe": "Insulin syringe size",
      "calc.save": "Save calculation",
      "calc.extract": "Draw",
      "calc.volume": "Volume",
      "calc.conc": "Concentration",
      "calc.doses": "Doses per vial",
      "calc.notice": "Standard insulin syringe: 100 IU = 1 mL. Laboratory reference tool — always double-check your calculations. For research use only.",
      "calc.saved": "Saved calculations",
      "calc.saved.empty": "No saved calculations.",
      "calc.saved.dose": "dose",
      "calc.saved.in": "in",
      "calc.footer.brand": "PEPTIVA — Reconstitution calculator",
      "calc.footer.legal": "Reference tool for scientific research. It does not constitute medical or dosing instruction for human use.",

      "pp.chip": "✓ Purity ≥99% (HPLC, see COA)",
      "pp.ship": "▣ <strong>DHL shipping across Mexico</strong> · Estimated delivery 2-5 business days · Discreet packaging",
      "pp.add": "▸ Add to order",
      "pp.added": "✓ Added — view order",
      "pp.wa": "Order via WhatsApp",
      "pp.note": "Exclusive use in scientific research · Purity verified by HPLC",
      "pp.research": "In research:",
      "pp.coa": "▣ View COA",
      "pp.doubts": "◌ Questions",
      "pp.share": "⇗ Share",
      "pp.copied": "✓ Link copied",
      "pp.testi.title": "What our customers say",
      "pp.testi.form": "Share your experience",
      "pp.testi.name.ph": "Your name (or initials)",
      "pp.testi.text.ph": "Tell us about your experience with this product...",
      "pp.testi.send": "▸ Send testimonial",
      "pp.testi.ok": "✓ Thank you — your testimonial will be published after review.",
      "pp.testi.mod": "// Published after team review. No spam or personal data.",
      "pp.testi.empty": "No published testimonials for this product yet.<br>Be the first to share your experience ↓",
      "pp.testi.empty2": "Be the first to share your experience ↓",
      "pp.footer.legal": "For research use only. Not a medicine, supplement or food.",
      "sitio.title": "PEPTIVA | Science for women's wellness — Research peptides",
      "calc.title": "Reconstitution Calculator | PEPTIVA"
    }
  };
  window.I18N = I18N;

  window.T = function (key) {
    return (I18N[LANG] && I18N[LANG][key]) || I18N.es[key] || key;
  };

  window.setLang = function (l) {
    localStorage.setItem("peptiva_lang", l);
    location.reload();
  };

  function injectToggle() {
    const style = document.createElement("style");
    style.textContent =
      ".lang-toggle{background:none;border:1px solid var(--line,#d8cfc4);border-radius:999px;" +
      "font-family:inherit;font-size:0.68rem;letter-spacing:0.12em;color:inherit;cursor:pointer;" +
      "padding:0.25rem 0.6rem;opacity:0.75;line-height:1}" +
      ".lang-toggle:hover{opacity:1}" +
      ".lang-toggle b{font-weight:600}" +
      ".lang-toggle span{opacity:0.55}" +
      ".lang-toggle.fixed{position:fixed;top:1rem;right:1rem;z-index:200}";
    document.head.appendChild(style);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "lang-toggle mono";
    btn.setAttribute("aria-label", "Language / Idioma");
    const render = () => {
      btn.innerHTML = LANG === "es"
        ? '<span>EN</span> | <b>ES</b>'
        : '<b>EN</b> | <span>ES</span>';
    };
    render();
    btn.addEventListener("click", () => window.setLang(LANG === "es" ? "en" : "es"));

    const nav = document.querySelector(".main-nav");
    if (nav) nav.appendChild(btn);
    else { btn.classList.add("fixed"); document.body.appendChild(btn); }
  }

  function apply() {
    document.documentElement.lang = LANG === "es" ? "es-MX" : "en";
    document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = T(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = T(el.dataset.i18nHtml); });
    document.querySelectorAll("[data-i18n-ph]").forEach(el => { el.placeholder = T(el.dataset.i18nPh); });
    document.querySelectorAll("[data-i18n-title]").forEach(el => { document.title = T(el.dataset.i18nTitle); });
    injectToggle();
    document.dispatchEvent(new CustomEvent("i18n:applied"));
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", apply);
  else apply();
})();
