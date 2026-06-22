// ── Navbar scroll ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 50));

// ── Archive toggle ──
const archiveSection = document.getElementById('archive');
const archiveToggleBtn = document.getElementById('archiveToggleBtn');
archiveToggleBtn.addEventListener('click', () => {
  const isOpen = archiveSection.classList.toggle('visible');
  archiveToggleBtn.childNodes.forEach(n => { if (n.nodeType === 3) n.textContent = n.textContent.trim() === 'View All Work' ? 'Collapse' : 'View All Work'; });
  if (isOpen) {
    setTimeout(() => archiveSection.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  }
});

// ── Archive filters ──
let currentView = 'grid';
let currentFilter = 'all';
const gridEl = document.getElementById('archiveGrid');
const listEl = document.getElementById('archiveList');
const noResults = document.getElementById('noResults');

function updateCount() {
  const sel = currentView === 'grid' ? '#archiveGrid .grid-item:not(.filtered-out)' : '#archiveList .list-item:not(.filtered-out)';
  const visible = document.querySelectorAll(sel).length;
  noResults.classList.toggle('visible', visible === 0);
}

document.querySelectorAll('#archiveFilters .filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#archiveFilters .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    document.querySelectorAll('.grid-item, .list-item').forEach(item =>
      item.classList.toggle('filtered-out', currentFilter !== 'all' && item.dataset.cat !== currentFilter)
    );
    updateCount();
  });
});

document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentView = btn.dataset.view;
    gridEl.classList.toggle('hidden', currentView === 'list');
    listEl.classList.toggle('visible', currentView === 'list');
    updateCount();
  });
});

// ── Lightbox ──
function openLightbox(el) {
  document.getElementById('lbCat').textContent = el.dataset.category;
  document.getElementById('lbTitle').textContent = el.dataset.title;
  document.getElementById('lbDesc').textContent = el.dataset.desc;
  document.getElementById('lbYear').textContent = el.dataset.year;
  document.getElementById('lbRole').textContent = el.dataset.role;
  document.getElementById('lightboxOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

document.querySelectorAll('.work-item').forEach(item => item.addEventListener('click', () => openLightbox(item)));
document.querySelectorAll('.grid-item, .list-item').forEach(item => item.addEventListener('click', () => openLightbox(item)));

function closeLightbox() {
  document.getElementById('lightboxOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxOverlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
