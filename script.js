// ── Project data — add or edit projects here only ──
const projects = [
  {
    title: 'RENDEZVOUS by KAMI',
    category: 'Music Video',
    cat: 'music-video',
    year: 2024,
    role: 'Director, Cinematography',
    img: 'https://static.wixstatic.com/media/658dc8_200c08d35d5142d4a2ea9855b5eaff33~mv2.jpg',
    desc: "A music video for KAMI's track RENDEZVOUS. Add your description of this project here — the brief, your approach, and what made it memorable to work on.",
    featured: true,
  },
  {
    title: 'Unto Death',
    category: 'Short Film · Horror',
    cat: 'narrative',
    year: 2023,
    role: 'Director, Editor',
    img: 'https://static.wixstatic.com/media/658dc8_b9abf9cd848f456eaf937852cd49d084~mv2.jpg',
    desc: 'A short horror film exploring themes of mortality and dread. Add your description here.',
    featured: true,
  },
  {
    title: 'Flowers For Bridie',
    category: 'Short Film · Comedy Drama',
    cat: 'narrative',
    year: 2023,
    role: 'Director, DoP',
    img: 'https://static.wixstatic.com/media/658dc8_9555dc7dba054dbaa327f6d556dc739c~mv2.jpg',
    desc: 'A short comedy drama film. Add your description here.',
    featured: true,
  },
  {
    title: 'Second Chance',
    category: 'Short Documentary',
    cat: 'documentary',
    year: 2022,
    role: 'Director, Cinematography',
    img: 'https://static.wixstatic.com/media/658dc8_131efa03a2504e7993a08be3985f8635~mv2.jpg',
    desc: 'A short documentary. Add your description here.',
    featured: true,
  },
  {
    title: 'Jon Mckain: Alone in Romania',
    category: 'Sport Documentary',
    cat: 'documentary',
    year: 2023,
    role: 'Director, DoP, Editor',
    img: 'https://static.wixstatic.com/media/658dc8_206808ea867e4aa992a7661551cd1c3a~mv2.png',
    desc: 'A short sport documentary following Jon Mckain. Add your description here.',
    featured: true,
  },
  {
    title: 'Heartstrings by Strayfold',
    category: 'Music Video',
    cat: 'music-video',
    year: 2023,
    role: 'Director, Cinematography',
    img: 'https://static.wixstatic.com/media/658dc8_df1c1c0d27484a1dbbe68c53b9439505~mv2.jpg',
    desc: "A music video for Strayfold's Heartstrings. Add your description here.",
    featured: true,
  },
  {
    title: 'CROWD',
    category: 'Short Film · Psychological Horror',
    cat: 'narrative',
    year: 2022,
    role: 'Director, DoP',
    img: 'https://static.wixstatic.com/media/658dc8_a97e1e8d92364bf5925430e37703d0cc~mv2.png',
    desc: 'A psychological horror short. Add your description here.',
    featured: false,
  },
  {
    title: 'T42 (Table For Two)',
    category: 'Reality Web Series',
    cat: 'commercial',
    year: 2022,
    role: 'Director, Cinematography',
    img: 'https://static.wixstatic.com/media/658dc8_8b9741f8a5c44b3ea45d414f52f9463d~mv2.png',
    desc: 'A reality web series. Add your description here.',
    featured: false,
  },
  {
    title: 'Real Estate Videography',
    category: 'Commercial',
    cat: 'commercial',
    year: 2023,
    role: 'Videographer, Editor',
    img: 'https://static.wixstatic.com/media/658dc8_7a66b6e0d9834a24a79e4b57777d4fc1~mv2.jpg',
    desc: 'Real estate videography. Add your description here.',
    featured: false,
  },
  {
    title: 'LiberLive C1 — Commercial',
    category: 'Commercial',
    cat: 'commercial',
    year: 2023,
    role: 'Director, Videographer',
    img: 'https://static.wixstatic.com/media/658dc8_3dfc3822595448999c6632460d99cef0~mv2.webp',
    desc: 'Commercial content for LiberLive C1. Add your description here.',
    featured: false,
  },
];

// ── Escape strings for HTML attributes ──
function a(str) {
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function attrs(p) {
  return `data-cat="${p.cat}" data-title="${a(p.title)}" data-category="${a(p.category)}" data-year="${p.year}" data-role="${a(p.role)}" data-desc="${a(p.desc)}"`;
}

// ── Render featured grid ──
function renderFeatured() {
  document.getElementById('portfolioGrid').innerHTML = projects
    .filter(p => p.featured)
    .map(p => `
      <div class="work-item" ${attrs(p)}>
        <div class="work-thumb">
          <img src="${p.img}" alt="${a(p.title)}">
          <div class="work-overlay"><span class="work-category">${p.category}</span><h3 class="work-title">${p.title}</h3></div>
        </div>
      </div>`).join('');
}

// ── Render archive grid ──
function renderArchiveGrid() {
  document.getElementById('archiveGrid').innerHTML = projects
    .map(p => `
      <div class="grid-item" ${attrs(p)}>
        <div class="grid-thumb">
          <img src="${p.img}" alt="${a(p.title)}">
          <div class="grid-overlay"><div class="grid-cat">${p.category}</div><div class="grid-title">${p.title}</div></div>
        </div>
      </div>`).join('');
}

// ── Render archive list ──
function renderArchiveList() {
  document.getElementById('archiveList').innerHTML = projects
    .map(p => `
      <div class="list-item" ${attrs(p)}>
        <div class="list-thumb"><img src="${p.img}" alt="${a(p.title)}"></div>
        <div><div class="list-title">${p.title}</div><div class="list-cat">${p.category}</div></div>
        <div class="list-year">${p.year}</div>
        <div class="list-role">${p.role}</div>
        <div class="list-arrow">→</div>
      </div>`).join('');
}

// ── Init renders ──
renderFeatured();
renderArchiveGrid();
renderArchiveList();

// ── Navbar scroll ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 50));

// ── Archive toggle ──
const archiveSection = document.getElementById('archive');
const archiveToggleBtn = document.getElementById('archiveToggleBtn');
archiveToggleBtn.addEventListener('click', () => {
  const isOpen = archiveSection.classList.toggle('visible');
  archiveToggleBtn.childNodes.forEach(n => {
    if (n.nodeType === 3) n.textContent = n.textContent.trim() === 'View All Work' ? 'Collapse' : 'View All Work';
  });
  if (isOpen) setTimeout(() => archiveSection.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
});

// ── Archive filters & view toggle ──
let currentView = 'grid';
let currentFilter = 'all';
const gridEl = document.getElementById('archiveGrid');
const listEl = document.getElementById('archiveList');
const noResults = document.getElementById('noResults');

function applyFilter() {
  document.querySelectorAll('.grid-item, .list-item').forEach(item =>
    item.classList.toggle('filtered-out', currentFilter !== 'all' && item.dataset.cat !== currentFilter)
  );
  const sel = currentView === 'grid'
    ? '#archiveGrid .grid-item:not(.filtered-out)'
    : '#archiveList .list-item:not(.filtered-out)';
  noResults.classList.toggle('visible', document.querySelectorAll(sel).length === 0);
}

document.querySelectorAll('#archiveFilters .filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#archiveFilters .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    applyFilter();
  });
});

document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentView = btn.dataset.view;
    gridEl.classList.toggle('hidden', currentView === 'list');
    listEl.classList.toggle('visible', currentView === 'list');
    applyFilter();
  });
});

// ── Lightbox — use event delegation since cards are rendered dynamically ──
function openLightbox(el) {
  document.getElementById('lbCat').textContent = el.dataset.category;
  document.getElementById('lbTitle').textContent = el.dataset.title;
  document.getElementById('lbDesc').textContent = el.dataset.desc;
  document.getElementById('lbYear').textContent = el.dataset.year;
  document.getElementById('lbRole').textContent = el.dataset.role;
  document.getElementById('lightboxOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

document.getElementById('portfolioGrid').addEventListener('click', e => {
  const item = e.target.closest('.work-item');
  if (item) openLightbox(item);
});
document.getElementById('archiveGrid').addEventListener('click', e => {
  const item = e.target.closest('.grid-item');
  if (item) openLightbox(item);
});
document.getElementById('archiveList').addEventListener('click', e => {
  const item = e.target.closest('.list-item');
  if (item) openLightbox(item);
});

function closeLightbox() {
  document.getElementById('lightboxOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxOverlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
