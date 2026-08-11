/* ================= CONFIG ================= */
const WHATSAPP_NUMBER = "923227111052"; // +92 322 7111052
const ORDER_EMAIL = "sabahatmirza37@gmail.com";
const BRAND = "Vanguard Medical Instruments";

/* ================= PRODUCT DATA ================= */
const PRODUCTS = [
  {
    id: "VMI-GS-101", name: "Mayo Dissecting Scissors", category: "General Surgery",
    price: 2450, sku: "VMI-GS-101",
    img: "https://images.pexels.com/photos/4074689/pexels-photo-4074689.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "Heavy-duty straight scissors for cutting fascia and heavy tissue. Fully forged from surgical grade stainless steel.",
    specs: { "Material": "Stainless Steel 420", "Length": "6.75 in / 17 cm", "Finish": "Satin", "Sterilization": "Autoclave safe" }
  },
  {
    id: "VMI-GS-102", name: "Metzenbaum Scissors, Curved", category: "General Surgery",
    price: 2650, sku: "VMI-GS-102",
    img: "https://images.pexels.com/photos/7108111/pexels-photo-7108111.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "Fine curved-blade scissors designed for delicate tissue dissection with minimal trauma.",
    specs: { "Material": "Stainless Steel 420", "Length": "5.5 in / 14 cm", "Finish": "Mirror polish", "Sterilization": "Autoclave safe" }
  },
  {
    id: "VMI-CV-201", name: "DeBakey Tissue Forceps", category: "Cardiovascular",
    price: 3200, sku: "VMI-CV-201",
    img: "https://images.pexels.com/photos/28727571/pexels-photo-28727571.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "Atraumatic serrated jaws for gentle handling of vascular tissue during cardiovascular procedures.",
    specs: { "Material": "Stainless Steel 316", "Length": "7.9 in / 20 cm", "Tip": "Atraumatic", "Sterilization": "Autoclave safe" }
  },
  {
    id: "VMI-CV-202", name: "Vascular Bulldog Clamp", category: "Cardiovascular",
    price: 2900, sku: "VMI-CV-202",
    img: "https://images.pexels.com/photos/7585320/pexels-photo-7585320.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "Spring-action clamp for temporary occlusion of small to medium blood vessels.",
    specs: { "Material": "Stainless Steel 420", "Length": "2 in / 5 cm", "Jaw": "Straight, atraumatic", "Sterilization": "Autoclave safe" }
  },
  {
    id: "VMI-DN-301", name: "Dental Extraction Forceps", category: "Dental",
    price: 1950, sku: "VMI-DN-301",
    img: "https://images.pexels.com/photos/7108116/pexels-photo-7108116.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "Ergonomic forceps for secure grip and controlled extraction of upper and lower molars.",
    specs: { "Material": "Stainless Steel 420", "Style": "Universal", "Grip": "Anatomic handle", "Sterilization": "Autoclave safe" }
  },
  {
    id: "VMI-DN-302", name: "Dental Periosteal Elevator", category: "Dental",
    price: 1450, sku: "VMI-DN-302",
    img: "https://images.pexels.com/photos/7108110/pexels-photo-7108110.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "Double-ended elevator for reflecting the periosteum with precision and control.",
    specs: { "Material": "Stainless Steel 420", "Length": "6.3 in / 16 cm", "Ends": "Double-ended", "Sterilization": "Autoclave safe" }
  },
  {
    id: "VMI-OR-401", name: "Bone Holding Forceps", category: "Orthopedic",
    price: 4100, sku: "VMI-OR-401",
    img: "https://images.pexels.com/photos/13697730/pexels-photo-13697730.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "Self-centering forceps for secure reduction and stabilization of fracture fragments.",
    specs: { "Material": "Stainless Steel 420", "Length": "9 in / 23 cm", "Lock": "Ratchet lock", "Sterilization": "Autoclave safe" }
  },
  {
    id: "VMI-OR-402", name: "Orthopedic Retractor, Double-Ended", category: "Orthopedic",
    price: 2350, sku: "VMI-OR-402",
    img: "https://images.pexels.com/photos/12411911/pexels-photo-12411911.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "Robust double-ended retractor for clear exposure during orthopedic procedures.",
    specs: { "Material": "Stainless Steel 420", "Length": "9.8 in / 25 cm", "Ends": "Double-ended", "Sterilization": "Autoclave safe" }
  },
  {
    id: "VMI-ENT-501", name: "ENT Nasal Speculum", category: "ENT",
    price: 1650, sku: "VMI-ENT-501",
    img: "https://images.pexels.com/photos/19217009/pexels-photo-19217009.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "Self-retaining speculum for clear visualization during nasal examination.",
    specs: { "Material": "Stainless Steel 420", "Size": "Medium / Large", "Type": "Self-retaining", "Sterilization": "Autoclave safe" }
  },
  {
    id: "VMI-ENT-502", name: "Micro Ear Forceps", category: "ENT",
    price: 2050, sku: "VMI-ENT-502",
    img: "https://images.pexels.com/photos/28727569/pexels-photo-28727569.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "Slim-profile forceps for precise handling in confined ear canal procedures.",
    specs: { "Material": "Stainless Steel 420", "Length": "3.5 in / 9 cm", "Tip": "Cupped, fine", "Sterilization": "Autoclave safe" }
  },
  {
    id: "VMI-GY-601", name: "Gynecological Speculum", category: "Gynecology",
    price: 1850, sku: "VMI-GY-601",
    img: "https://images.pexels.com/photos/19217003/pexels-photo-19217003.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "Bivalve speculum with smooth-action screw for comfortable, controlled examination.",
    specs: { "Material": "Stainless Steel 420", "Size": "Small / Medium / Large", "Action": "Screw-lock", "Sterilization": "Autoclave safe" }
  },
  {
    id: "VMI-MI-701", name: "Micro Needle Holder", category: "Micro Instruments",
    price: 3450, sku: "VMI-MI-701",
    img: "https://images.pexels.com/photos/7108117/pexels-photo-7108117.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "Fine-tip needle holder with tungsten carbide jaw inserts for microsurgical suturing.",
    specs: { "Material": "Stainless Steel + TC insert", "Length": "5.5 in / 14 cm", "Jaw": "Tungsten carbide", "Sterilization": "Autoclave safe" }
  },
  {
    id: "VMI-SET-801", name: "General Surgery Instrument Set (12-pc)", category: "Instrument Sets",
    price: 24500, sku: "VMI-SET-801",
    img: "https://images.pexels.com/photos/7585320/pexels-photo-7585320.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "Complete 12-piece general surgery set in a sterilization-ready tray — scissors, forceps, clamps and needle holders.",
    specs: { "Pieces": "12", "Material": "Stainless Steel 420", "Tray": "Perforated, autoclavable", "Sterilization": "Autoclave safe" }
  }
];

const CATEGORIES = [...new Set(PRODUCTS.map(p => p.category))];

/* ================= STATE ================= */
let activeCategory = "All";
let cart = []; // { id, qty }

/* ================= HELPERS ================= */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const fmt = (n) => "Rs " + n.toLocaleString("en-PK");
const waLink = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
const findProduct = (id) => PRODUCTS.find(p => p.id === id);

function toast(msg) {
  const t = $("#toast");
  $("#toastMsg").textContent = msg;
  t.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => t.classList.remove("show"), 2400);
}

/* ================= RENDER: CATEGORY LIST ================= */
function renderCategoryLists() {
  const counts = { All: PRODUCTS.length };
  CATEGORIES.forEach(c => counts[c] = PRODUCTS.filter(p => p.category === c).length);

  const items = ["All", ...CATEGORIES];

  $("#catList").innerHTML = items.map(c =>
    `<button class="cat-item ${c === activeCategory ? "active" : ""}" data-cat="${c}">
      <span>${c}</span><span class="cnt">${counts[c]}</span>
    </button>`
  ).join("");

  $("#catChips").innerHTML = items.map(c =>
    `<button class="cat-chip ${c === activeCategory ? "active" : ""}" data-cat="${c}">${c}</button>`
  ).join("");

  $("#footerCats").innerHTML = CATEGORIES.slice(0, 6).map(c =>
    `<li><a href="#products" data-cat-link="${c}">${c}</a></li>`
  ).join("");

  $$("#catList .cat-item, #catChips .cat-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.cat;
      renderCategoryLists();
      renderGrid();
    });
  });

  $$("#footerCats a").forEach(a => {
    a.addEventListener("click", () => {
      activeCategory = a.dataset.catLink;
      renderCategoryLists();
      renderGrid();
    });
  });
}

/* ================= RENDER: PRODUCT GRID ================= */
function renderGrid() {
  const list = activeCategory === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === activeCategory);
  $("#productGrid").innerHTML = list.map(p => `
    <div class="product-card" data-id="${p.id}">
      <div class="product-media" data-open="${p.id}">
        <span class="sku-tag">${p.sku}</span>
        <img src="${p.img}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-body">
        <span class="product-cat">${p.category}</span>
        <h3>${p.name}</h3>
        <p class="desc">${p.desc}</p>
        <div class="product-foot">
          <div class="price">${fmt(p.price)} <span>/ unit</span></div>
        </div>
        <div class="product-btns">
          <button class="btn btn-ghost btn-sm" data-addcart="${p.id}">Add to Cart</button>
          <button class="btn btn-primary btn-sm" data-buynow="${p.id}">Buy Now</button>
        </div>
      </div>
    </div>
  `).join("");

  $$("[data-open]").forEach(el => el.addEventListener("click", () => openModal(el.dataset.open)));
  $$("[data-addcart]").forEach(el => el.addEventListener("click", (e) => {
    e.stopPropagation();
    addToCart(el.dataset.addcart);
    toast("Added to cart");
  }));
  $$("[data-buynow]").forEach(el => el.addEventListener("click", (e) => {
    e.stopPropagation();
    addToCart(el.dataset.buynow);
    openCart();
  }));
}

/* ================= PRODUCT MODAL ================= */
function openModal(id) {
  const p = findProduct(id);
  if (!p) return;
  $("#modalImg").src = p.img;
  $("#modalImg").alt = p.name;
  $("#modalCat").textContent = p.category;
  $("#modalName").textContent = p.name;
  $("#modalDesc").textContent = p.desc;
  $("#modalPrice").innerHTML = `${fmt(p.price)} <span style="font-size:12px;color:var(--slate-500);font-weight:400;">/ unit</span>`;
  $("#modalSpecs").innerHTML = Object.entries(p.specs).map(([k, v]) => `<li><b>${k}</b><span>${v}</span></li>`).join("");

  $("#modalAddCart").onclick = () => { addToCart(p.id); toast("Added to cart"); };
  $("#modalBuyNow").onclick = () => { addToCart(p.id); closeModal(); openCart(); };
  $("#modalContactBtn").href = waLink(`Hi ${BRAND}, I wanna know more about it — ${p.name} (${p.sku}).`);

  $("#productModal").classList.add("show");
  $("#overlay").classList.add("show");
}
function closeModal() {
  $("#productModal").classList.remove("show");
  if (!$("#cartDrawer").classList.contains("show")) $("#overlay").classList.remove("show");
}

/* ================= CART ================= */
function addToCart(id) {
  const row = cart.find(c => c.id === id);
  if (row) row.qty += 1;
  else cart.push({ id, qty: 1 });
  renderCart();
}
function changeQty(id, delta) {
  const row = cart.find(c => c.id === id);
  if (!row) return;
  row.qty += delta;
  if (row.qty <= 0) cart = cart.filter(c => c.id !== id);
  renderCart();
}
function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  renderCart();
}
function cartTotal() {
  return cart.reduce((sum, c) => sum + findProduct(c.id).price * c.qty, 0);
}
function cartCount() {
  return cart.reduce((sum, c) => sum + c.qty, 0);
}

function renderCart() {
  const badge = $("#cartBadge");
  const count = cartCount();
  badge.style.display = count > 0 ? "flex" : "none";
  badge.textContent = count;

  if (cart.length === 0) {
    $("#cartBody").innerHTML = `<div class="cart-empty">Your cart is empty.<br>Browse the catalog and add instruments you need.</div>`;
    $("#cartFoot").style.display = "none";
    return;
  }

  $("#cartBody").innerHTML = cart.map(c => {
    const p = findProduct(c.id);
    return `
      <div class="cart-row">
        <img src="${p.img}" alt="${p.name}">
        <div class="cart-row-info">
          <div class="nm">${p.name}</div>
          <div class="pr">${fmt(p.price)} × ${c.qty} = ${fmt(p.price * c.qty)}</div>
          <div class="qty-box">
            <button data-qty-minus="${p.id}">−</button>
            <span>${c.qty}</span>
            <button data-qty-plus="${p.id}">+</button>
            <span class="remove-link" data-remove="${p.id}">Remove</span>
          </div>
        </div>
      </div>`;
  }).join("");

  $("#cartFoot").style.display = "block";
  $("#cartTotal").textContent = fmt(cartTotal());

  $$("[data-qty-minus]").forEach(b => b.addEventListener("click", () => changeQty(b.dataset.qtyMinus, -1)));
  $$("[data-qty-plus]").forEach(b => b.addEventListener("click", () => changeQty(b.dataset.qtyPlus, 1)));
  $$("[data-remove]").forEach(b => b.addEventListener("click", () => removeFromCart(b.dataset.remove)));

  updateCheckoutLinks();
}

function orderSummaryText() {
  const lines = cart.map(c => {
    const p = findProduct(c.id);
    return `• ${p.name} (${p.sku}) × ${c.qty} — ${fmt(p.price * c.qty)}`;
  });
  return `Hi ${BRAND}, I'd like to place an order:\n\n${lines.join("\n")}\n\nTotal: ${fmt(cartTotal())}\n\nPlease confirm availability and delivery details. Thank you.`;
}

function updateCheckoutLinks() {
  $("#checkoutWaBtn").href = waLink(orderSummaryText());
  const subject = encodeURIComponent(`New Order — ${BRAND} Website`);
  const body = encodeURIComponent(orderSummaryText());
  $("#checkoutEmailBtn").href = `mailto:${ORDER_EMAIL}?subject=${subject}&body=${body}`;
}

/* ================= DRAWER OPEN/CLOSE ================= */
function openCart() {
  $("#cartDrawer").classList.add("show");
  $("#overlay").classList.add("show");
}
function closeCart() {
  $("#cartDrawer").classList.remove("show");
  if (!$("#productModal").classList.contains("show")) $("#overlay").classList.remove("show");
}

/* ================= INIT / EVENTS ================= */
document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();

  renderCategoryLists();
  renderGrid();
  renderCart();

  // generic contact / quote links
  const genericMsg = `Hi ${BRAND}, I wanna know more about it.`;
  $("#quoteBtn").href = waLink(genericMsg);
  $("#heroQuoteBtn").href = waLink(genericMsg);
  $("#contactWaBtn").href = waLink(genericMsg);
  $("#fabWaBtn").href = waLink(genericMsg);

  // nav
  $("#hamburgerBtn").addEventListener("click", () => $("#navLinks").classList.toggle("show"));
  $$("#navLinks a").forEach(a => a.addEventListener("click", () => $("#navLinks").classList.remove("show")));

  // cart drawer
  $("#cartBtn").addEventListener("click", openCart);
  $("#closeCart").addEventListener("click", closeCart);
  $("#overlay").addEventListener("click", () => { closeCart(); closeModal(); });
  $("#closeModal").addEventListener("click", closeModal);

  // contact form
  $("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("#cName").value.trim();
    const email = $("#cEmail").value.trim();
    const phone = $("#cPhone").value.trim();
    const msg = $("#cMsg").value.trim();
    const subject = encodeURIComponent(`Website Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${msg}`);
    window.location.href = `mailto:${ORDER_EMAIL}?subject=${subject}&body=${body}`;
    toast("Opening your email app…");
  });

  $("#formWaBtn").addEventListener("click", (e) => {
    const name = $("#cName").value.trim();
    const msg = $("#cMsg").value.trim() || "I wanna know more about it.";
    const text = `Hi ${BRAND}, my name is ${name || "..."}. ${msg}`;
    $("#formWaBtn").href = waLink(text);
  });

  // escape key closes overlays
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closeCart(); closeModal(); }
  });
});
