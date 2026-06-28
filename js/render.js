function a(str) {
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function attrs(p) {
  return `data-cat="${p.cat}" data-title="${a(p.title)}" data-category="${a(p.category)}" data-year="${p.year}" data-role="${a(p.role)}" data-desc="${a(p.desc)}"`;
}

function renderFeatured() {
  document.getElementById('portfolioGrid').innerHTML = projects
    .filter(p => p.featured)
    .slice(0, 6)
    .map(p => `
      <div class="work-item" ${attrs(p)}>
        <div class="work-thumb">
          <img src="${p.img}" alt="${a(p.title)}">
          <div class="work-overlay"><span class="work-category">${p.category}</span><h3 class="work-title">${p.title}</h3></div>
        </div>
      </div>`).join('');
}

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

renderFeatured();
renderArchiveGrid();
renderArchiveList();
