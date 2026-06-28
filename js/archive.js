const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 50));

const archiveSection = document.getElementById('archive');
const archiveToggleBtn = document.getElementById('archiveToggleBtn');
archiveToggleBtn.addEventListener('click', () => {
  const isOpen = archiveSection.classList.toggle('visible');
  archiveToggleBtn.childNodes.forEach(n => {
    if (n.nodeType === 3) n.textContent = n.textContent.trim() === 'View All Work' ? 'Collapse' : 'View All Work';
  });
  if (isOpen) setTimeout(() => archiveSection.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
});

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
