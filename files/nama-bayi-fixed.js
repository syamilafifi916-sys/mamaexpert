// ============================================
// MAMAEXPERT — nama-bayi.js (FIXED v6)
// Filter events fixed — attach selepas build
// ============================================

function getBahasaLabel(b) {
  const map = {
    "Arab": "Arab", "Melayu": "Melayu", "Turkish": "Turkish",
    "Persian": "Persian", "Urdu": "Urdu", "Jepun": "Jepun",
    "Korea": "Korea", "Scandinavian": "Nordic", "International": "International",
  };
  return map[b] || b;
}

function getLangStyle(bahasa) {
  const styles = {
    "Arab": "background:#E8F4FF; color:#1565C0",
    "Melayu": "background:#E8F5E9; color:#2E7D32",
    "Turkish": "background:#FFF3E0; color:#E65100",
    "Persian": "background:#FCE4EC; color:#880E4F",
    "Urdu": "background:#F3E5F5; color:#4A148C",
    "Jepun": "background:#FFEBEE; color:#B71C1C",
    "Korea": "background:#E8EAF6; color:#283593",
    "Scandinavian": "background:#E3F2FD; color:#0D47A1",
    "International": "background:#F3EEFF; color:#6B21A8",
  };
  return styles[bahasa] || "background:#F5F5F5; color:#616161";
}

function buildDatabase() {
  const db = [];
  const sources = [
    [typeof namaArabLelaki !== "undefined" ? namaArabLelaki : [], "lelaki", "Arab"],
    [typeof namaArabPerempuan !== "undefined" ? namaArabPerempuan : [], "perempuan", "Arab"],
    [typeof namaMelayuLelaki !== "undefined" ? namaMelayuLelaki : [], "lelaki", "Melayu"],
    [typeof namaMelayuPerempuan !== "undefined" ? namaMelayuPerempuan : [], "perempuan", "Melayu"],
    [typeof namaTurkishLelaki !== "undefined" ? namaTurkishLelaki : [], "lelaki", "Turkish"],
    [typeof namaTurkishPerempuan !== "undefined" ? namaTurkishPerempuan : [], "perempuan", "Turkish"],
    [typeof namaPersianLelaki !== "undefined" ? namaPersianLelaki : [], "lelaki", "Persian"],
    [typeof namaPersianPerempuan !== "undefined" ? namaPersianPerempuan : [], "perempuan", "Persian"],
    [typeof namaUrduLelaki !== "undefined" ? namaUrduLelaki : [], "lelaki", "Urdu"],
    [typeof namaUrduPerempuan !== "undefined" ? namaUrduPerempuan : [], "perempuan", "Urdu"],
    [typeof namaJepunLelaki !== "undefined" ? namaJepunLelaki : [], "lelaki", "Jepun"],
    [typeof namaJepunPerempuan !== "undefined" ? namaJepunPerempuan : [], "perempuan", "Jepun"],
    [typeof namaKoreaLelaki !== "undefined" ? namaKoreaLelaki : [], "lelaki", "Korea"],
    [typeof namaKoreaPerempuan !== "undefined" ? namaKoreaPerempuan : [], "perempuan", "Korea"],
    [typeof namaScandinavianLelaki !== "undefined" ? namaScandinavianLelaki : [], "lelaki", "Scandinavian"],
    [typeof namaScandinavianPerempuan !== "undefined" ? namaScandinavianPerempuan : [], "perempuan", "Scandinavian"],
  ];
  // tambahan data-4
  (typeof namaTambahan !== "undefined" ? namaTambahan : []).forEach(n => db.push({ ...n }));
  // tambahan data-5
  (typeof namaMelayuPerempuanTambahan !== "undefined" ? namaMelayuPerempuanTambahan : []).forEach(n => db.push({ ...n }));
  // tambahan data-6
  (typeof namaMelayuLelakiTambahan !== "undefined" ? namaMelayuLelakiTambahan : []).forEach(n => db.push({ ...n }));
  (typeof namaMelayuPerempuanTambahan !== "undefined" ? namaMelayuPerempuanTambahan : []).forEach(n => db.push({ ...n }));
  (typeof namaTambahan !== "undefined" ? namaTambahan : []).forEach(n => db.push({ ...n }));

  sources.forEach(([arr, jantina, bahasa]) => {
    arr.forEach(n => db.push({ ...n, jantina, bahasa }));
  });
  const seen = new Set();
  return db.filter(n => { if (seen.has(n.nama)) return false; seen.add(n.nama); return true; });
}

// ── State ──
let namaData = [];
let filtered = [];
let displayed = 48;
let favourites = [];
let activeGender = 'all';
let activeLang = 'all';
let activeAlpha = 'all';
let searchQ = '';
let showFavOnly = false;

try {
  const saved = localStorage.getItem('mamaexpert_favs');
  if (saved) favourites = JSON.parse(saved);
} catch(e) { favourites = []; }

// ── Build UI ──
function buildLangFilters() {
  const langs = [...new Set(namaData.map(n => n.bahasa))].sort();
  const container = document.querySelector('[data-langgroup]');
  if (!container) return;
  container.innerHTML = `<button class="filter-btn active" data-lang="all">Semua</button>` +
    langs.map(l => `<button class="filter-btn" data-lang="${l}">${getBahasaLabel(l)}</button>`).join('');
  // Attach events immediately after building
  container.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeLang = btn.dataset.lang || 'all';
      applyFilters();
    });
  });
}

function buildAlphaFilter() {
  const letters = [...new Set(namaData.map(n => n.nama[0].toUpperCase()))].sort();
  const container = document.getElementById('alphaFilter');
  if (!container) return;
  container.innerHTML = `<button class="alpha-btn active" data-alpha="all">Semua</button>` +
    letters.map(l => `<button class="alpha-btn" data-alpha="${l}">${l}</button>`).join('');
  container.querySelectorAll('.alpha-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.alpha-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeAlpha = btn.dataset.alpha || 'all';
      applyFilters();
    });
  });
}

// Gender filter — static buttons in HTML
function attachGenderFilter() {
  document.querySelectorAll('.filter-btn[data-gender]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn[data-gender]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeGender = btn.dataset.gender;
      applyFilters();
    });
  });
}

// ── Search ──
document.getElementById('searchInput').addEventListener('input', (e) => {
  searchQ = e.target.value.toLowerCase();
  document.getElementById('clearBtn').classList.toggle('hidden', !searchQ);
  applyFilters();
});

function clearSearch() {
  document.getElementById('searchInput').value = '';
  searchQ = '';
  document.getElementById('clearBtn').classList.add('hidden');
  applyFilters();
}

function clearAll() {
  clearSearch();
  activeGender = 'all'; activeLang = 'all'; activeAlpha = 'all'; showFavOnly = false;
  document.querySelectorAll('.filter-btn[data-gender]').forEach(b => b.classList.toggle('active', b.dataset.gender === 'all'));
  const langContainer = document.querySelector('[data-langgroup]');
  if (langContainer) langContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === 'all'));
  const alphaContainer = document.getElementById('alphaFilter');
  if (alphaContainer) alphaContainer.querySelectorAll('.alpha-btn').forEach(b => b.classList.toggle('active', b.dataset.alpha === 'all'));
  document.getElementById('favToggle').classList.remove('active');
  applyFilters();
}

// ── Filters ──
function applyFilters() {
  displayed = 48;
  filtered = namaData.filter(n => {
    if (activeGender !== 'all' && n.jantina !== activeGender) return false;
    if (activeLang !== 'all' && n.bahasa !== activeLang) return false;
    if (activeAlpha !== 'all' && n.nama[0].toUpperCase() !== activeAlpha) return false;
    if (searchQ && !n.nama.toLowerCase().includes(searchQ) && !n.makna.toLowerCase().includes(searchQ)) return false;
    if (showFavOnly && !favourites.includes(n.nama)) return false;
    return true;
  });
  renderGrid();
}

// ── Grid ──
function renderGrid() {
  const grid = document.getElementById('namaGrid');
  const noResult = document.getElementById('noResult');
  const loadBtn = document.getElementById('loadMoreBtn');

  document.getElementById('resultCount').textContent = `${filtered.length} nama dijumpai`;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResult.classList.remove('hidden');
    loadBtn.style.display = 'none';
    return;
  }

  // Ada nama — sorok noResult
  noResult.classList.add('hidden');
  grid.classList.remove('hidden');

  const toShow = filtered.slice(0, displayed);
  grid.innerHTML = toShow.map((n, i) => {
    const isFav = favourites.includes(n.nama);
    // Guna filtered index supaya tak ada -1
    return `<div class="nama-card ${isFav ? 'favourited' : ''}" data-fidx="${i}">
      <div class="nc-top">
        <div class="nc-gender ${n.jantina === 'lelaki' ? 'boy' : 'girl'}">${n.jantina === 'lelaki' ? '👦' : '👧'}</div>
        <button class="nc-fav" data-fidx="${i}">${isFav ? '❤️' : '🤍'}</button>
      </div>
      <div class="nc-name">${n.nama}</div>
      <span class="nc-lang" style="${getLangStyle(n.bahasa)}">${getBahasaLabel(n.bahasa)}</span>
      <div class="nc-meaning">${n.makna}</div>
    </div>`;
  }).join('');

  grid.querySelectorAll('.nama-card').forEach(card => {
    card.addEventListener('click', () => openModal(parseInt(card.dataset.fidx)));
  });
  grid.querySelectorAll('.nc-fav').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const n = filtered[parseInt(btn.dataset.fidx)];
      if (n) toggleFav(n.nama);
    });
  });

  const remaining = filtered.length - displayed;
  if (remaining > 0) {
    loadBtn.style.display = 'inline-flex';
    loadBtn.textContent = `Papar ${Math.min(remaining, 48)} nama lagi (${remaining} berbaki)`;
  } else {
    loadBtn.style.display = 'none';
  }
}

function loadMore() { displayed += 48; renderGrid(); }

// ── Favourites ──
function toggleFav(nama) {
  const idx = favourites.indexOf(nama);
  if (idx === -1) favourites.push(nama);
  else favourites.splice(idx, 1);
  try { localStorage.setItem('mamaexpert_favs', JSON.stringify(favourites)); } catch(e) {}
  document.getElementById('favCount').textContent = favourites.length;
  renderGrid();
}

function toggleFavView() {
  showFavOnly = !showFavOnly;
  document.getElementById('favToggle').classList.toggle('active', showFavOnly);
  applyFilters();
}

// ── Modal ──
function openModal(idx) {
  const n = namaData[idx];
  if (!n) return;
  const isFav = favourites.includes(n.nama);
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-gender-icon">${n.jantina === 'lelaki' ? '👦' : '👧'}</div>
    <div class="modal-name">${n.nama}</div>
    <span class="modal-lang-badge" style="${getLangStyle(n.bahasa)}">${getBahasaLabel(n.bahasa)} &middot; ${n.jantina === 'lelaki' ? 'Lelaki' : 'Perempuan'}</span>
    <div class="modal-section"><div class="modal-section-label">Makna</div><div class="modal-section-val">${n.makna}</div></div>
    <div class="modal-section"><div class="modal-section-label">Asal usul</div><div class="modal-section-val">${n.asal}</div></div>
    <div class="modal-actions">
      <button class="btn ${isFav ? 'btn-primary' : 'btn-ghost'} modal-fav-btn" id="mFavBtn">${isFav ? '❤️ Tersimpan' : '🤍 Simpan'}</button>
      <button class="btn btn-ghost" id="mShareBtn">📤 Kongsi</button>
    </div>`;
  document.getElementById('mFavBtn').onclick = () => {
    toggleFav(n.nama);
    const nowFav = favourites.includes(n.nama);
    const btn = document.getElementById('mFavBtn');
    if (btn) { btn.className = `btn ${nowFav ? 'btn-primary' : 'btn-ghost'} modal-fav-btn`; btn.textContent = nowFav ? '❤️ Tersimpan' : '🤍 Simpan'; }
  };
  document.getElementById('mShareBtn').onclick = () => {
    const text = `Nama bayi: ${n.nama}\nMakna: ${n.makna}\n\nCari nama bayi di MamaExpert!`;
    if (navigator.share) navigator.share({ title: n.nama, text });
    else { try { navigator.clipboard.writeText(text); alert('Disalin! Paste ke WhatsApp.'); } catch(e) { alert(text); } }
  };
  document.getElementById('modalOverlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.add('hidden');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── Popular ──
function buildPopular() {
  const rc = i => i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
  const makeList = (list, id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = list.map((n, i) =>
      `<div class="popular-item" data-idx="${namaData.indexOf(n)}">
        <div class="pop-rank ${rc(i)}">${i+1}</div>
        <div class="pop-info"><div class="pop-name">${n.nama}</div><div class="pop-meaning">${n.makna.substring(0,45)}...</div></div>
      </div>`).join('');
    el.querySelectorAll('.popular-item').forEach(item => {
      item.addEventListener('click', () => openModal(parseInt(item.dataset.idx)));
    });
  };
  makeList(namaData.filter(n => n.jantina === 'lelaki' && n.popular).slice(0, 8), 'popularLelaki');
  makeList(namaData.filter(n => n.jantina === 'perempuan' && n.popular).slice(0, 8), 'popularPerempuan');
}

// ── INIT ──
namaData = buildDatabase();
filtered = [...namaData];
buildLangFilters();   // build + attach lang events
buildAlphaFilter();   // build + attach alpha events
attachGenderFilter(); // attach gender events
buildPopular();
document.getElementById('favCount').textContent = favourites.length;
document.getElementById('resultCount').textContent = `${namaData.length}+ nama tersedia`;
applyFilters();

console.log(`MamaExpert: ${namaData.length} nama dimuatkan`);
