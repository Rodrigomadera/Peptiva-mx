// Catálogo PEPTIVA — Ciencia para el bienestar femenino
// Orden: primero belleza, juventud y descanso. Precios +17% sobre PEPTINATOR MX.
const PRODUCTS = [
  { "id": "glow", "name": "GLOW", "spec": "70 mg", "price": 2829,"cat": "blend", "img": "img/vials/glow.png", "desc": "Blend de GHK-Cu, BPC-157 y TB-500 orientado a estudios de piel y regeneración general." },
  { "id": "ghk-cu", "name": "GHK-Cu (Copper)", "spec": "50 mg", "price": 429,"cat": "regeneracion", "img": "img/vials/ghk-cu.png", "desc": "Tripéptido de cobre estudiado en modelos de regeneración de piel, folículo piloso y tejido conectivo." },
  { "id": "ghk-cu-100", "name": "GHK-Cu (Copper)", "spec": "100 mg", "price": 759,"cat": "regeneracion", "img": "img/vials/ghk-cu-100.png", "desc": "Tripéptido de cobre estudiado en modelos de regeneración de piel, folículo piloso y tejido conectivo. Presentación de 100 mg." },
  { "id": "epithalon", "name": "Epithalon", "spec": "10 mg", "price": 509,"cat": "longevidad", "img": "img/vials/epithalon.png", "desc": "Tetrapéptido pineal en estudio por su relación con telomerasa y modelos de envejecimiento celular." },
  { "id": "nad", "name": "NAD+", "spec": "500 mg", "price": 1359,"cat": "longevidad", "img": "img/vials/nad.png", "desc": "Coenzima central en estudios de metabolismo celular, vías de sirtuinas y envejecimiento." },
  { "id": "klow", "name": "KLOW", "spec": "80 mg", "price": 4129,"cat": "blend", "img": "img/vials/klow.png", "desc": "Blend de GHK-Cu, BPC-157, TB-500 y KPV para modelos combinados de inflamación y regeneración." },
  { "id": "selank", "name": "Selank", "spec": "5 mg", "price": 549,"cat": "cognitivo", "img": "img/vials/selank.png", "desc": "Heptapéptido análogo de tuftsin, estudiado en modelos de ansiedad y procesos cognitivos." },
  { "id": "oxitocina-5", "name": "Oxitocina", "spec": "5 mg", "price": 639,"cat": "cognitivo", "img": "img/vials/oxitocina-5.png", "desc": "Neuropéptido natural en investigación sobre vínculo social, estado de ánimo y respuesta al estrés." },
  { "id": "oxitocina-10", "name": "Oxitocina", "spec": "10 mg", "price": 1399,"cat": "cognitivo", "img": "img/vials/oxitocina-10.png", "desc": "Neuropéptido natural en investigación sobre vínculo social, estado de ánimo y respuesta al estrés. Presentación de 10 mg." },
  { "id": "ipamorelin", "name": "Ipamorelin", "spec": "5 mg", "price": 589,"cat": "secretagogo", "img": "img/vials/ipamorelin.png", "desc": "Secretagogo de GH altamente selectivo, referente en estudios del eje GH/IGF-1." },
  { "id": "ipamorelin-10", "name": "Ipamorelin", "spec": "10 mg", "price": 909,"cat": "secretagogo", "img": "img/vials/ipamorelin-10.png", "desc": "Secretagogo de GH altamente selectivo, referente en estudios del eje GH/IGF-1. Presentación de 10 mg." },
  { "id": "bpc-157", "name": "BPC-157", "spec": "5 mg", "price": 549,"cat": "regeneracion", "img": "img/vials/bpc-157.png", "desc": "Pentadecapéptido en investigación por su papel en modelos de reparación de tejidos y tracto gastrointestinal." },
  { "id": "tb-500", "name": "TB-500 (Thymosin Beta 4)", "spec": "5 mg", "price": 1189,"cat": "regeneracion", "img": "img/vials/tb-500.png", "desc": "Fragmento de timosina beta-4 estudiado en modelos de migración celular y recuperación muscular." },
  { "id": "bpc-tb", "name": "BPC-157 + TB-500", "spec": "10 mg", "price": 2479,"cat": "regeneracion", "img": "img/vials/bpc-tb.png", "desc": "Blend combinado para modelos de recuperación y reparación tisular amplia." },
  { "id": "bpc-tb-20", "name": "BPC-157 + TB-500", "spec": "20 mg", "price": 4329,"cat": "regeneracion", "img": "img/vials/bpc-tb-20.png", "desc": "Blend combinado de BPC-157 y TB-500 para modelos de recuperación y reparación tisular amplia. Presentación de 20 mg." },
  { "id": "kpv", "name": "KPV", "spec": "5 mg", "price": 1409,"cat": "regeneracion", "img": "img/vials/kpv.png", "desc": "Tripéptido derivado de α-MSH, investigado en modelos de inflamación intestinal y dérmica." },
  { "id": "melanotan-1", "name": "Melanotan 1", "spec": "10 mg", "price": 889,"cat": "pigmentacion", "img": "img/vials/melanotan-1.png", "desc": "Análogo lineal de α-MSH en investigación sobre melanogénesis y respuesta pigmentaria." },
  { "id": "melanotan-2", "name": "Melanotan 2", "spec": "10 mg", "price": 979,"cat": "pigmentacion", "img": "img/vials/melanotan-2.png", "desc": "Análogo cíclico de α-MSH estudiado en modelos de pigmentación y melanocortina." },
  { "id": "mots-c", "name": "MOTS-c", "spec": "10 mg", "price": 1019,"cat": "metabolico", "img": "img/vials/mots-c.png", "desc": "Péptido codificado en ADN mitocondrial, en investigación sobre metabolismo, ejercicio y sensibilidad a la insulina." },
  { "id": "semax", "name": "Semax", "spec": "5 mg", "price": 539,"cat": "cognitivo", "img": "img/vials/semax.png", "desc": "Heptapéptido análogo de ACTH(4-10), investigado en modelos de atención, memoria y neuroprotección." },
  { "id": "retatrutida", "name": "Retatrutida", "spec": "10 mg", "price": 1699,"cat": "metabolico", "img": "img/vials/retatrutida.png", "desc": "Agonista triple de GIP, GLP-1 y glucagón en investigación para estudios de metabolismo energético y composición corporal." },
  { "id": "tirzepatida", "name": "Tirzepatida", "spec": "15 mg", "price": 1809,"cat": "metabolico", "img": "img/vials/tirzepatida.png", "desc": "Agonista dual de GIP y GLP-1 en investigación para estudios de metabolismo, peso y sensibilidad a la insulina." },
  { "id": "semaglutida-5", "name": "Semaglutida", "spec": "5 mg", "price": 879,"cat": "metabolico", "img": "img/vials/semaglutida-5.png", "desc": "Agonista de GLP-1 ampliamente estudiado en modelos de metabolismo energético y control glucémico." },
  { "id": "semaglutida-10", "name": "Semaglutida", "spec": "10 mg", "price": 1109,"cat": "metabolico", "img": "img/vials/semaglutida-10.png", "desc": "Agonista de GLP-1 ampliamente estudiado en modelos de metabolismo energético y control glucémico." },
  { "id": "tesamorelin", "name": "Tesamorelin", "spec": "10 mg", "price": 3149,"cat": "metabolico", "img": "img/vials/tesamorelin.png", "desc": "Análogo de GHRH investigado en estudios de composición corporal y grasa visceral." },
  { "id": "5amino1mq", "name": "5-Amino-1MQ", "spec": "10 mg", "price": 969,"cat": "metabolico", "img": "img/vials/5amino1mq.png", "desc": "Inhibidor de NNMT en investigación sobre metabolismo energético y NAD+ celular." },
  { "id": "ipa-cjc", "name": "Ipamorelin + CJC-1295 No-DAC", "spec": "10 mg", "price": 2409,"cat": "secretagogo", "img": "img/vials/ipa-cjc.png", "desc": "Blend sinérgico de dos secretagogos para estudios del eje GH/IGF-1 con pulsos fisiológicos." },
  { "id": "agua-bac", "name": "Agua Bacteriostática", "spec": "3 mL", "price": 39,"cat": "accesorio", "img": "img/vials/agua-bac.png", "note": "Diluyente para reconstitución de péptidos liofilizados", "desc": "Agua estéril con alcohol bencílico al 0.9%, estándar de laboratorio para reconstituir péptidos liofilizados. Precio de costo (≈ $2 USD)." }
];

const CATEGORIES = {
  todos: "Todos",
  metabolico: "Metabólico",
  regeneracion: "Regeneración",
  cognitivo: "Cognitivo",
  longevidad: "Longevidad",
  secretagogo: "Secretagogos",
  pigmentacion: "Pigmentación",
  blend: "Blends",
  accesorio: "Accesorios"
};

const SPECS_COMUNES = [
  "Pureza ≥99% verificada por HPLC",
  "Identidad molecular confirmada por espectrometría de masas (MS)",
  "Certificado de Análisis (COA) trazable por lote",
  "Forma: polvo liofilizado en vial sellado al vacío",
  "Almacenamiento recomendado: -20 °C, protegido de luz y humedad",
  "Para uso en investigación solamente"
];
