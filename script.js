const W = 'https://static.wixstatic.com/media/';

// ── Project data — add or edit projects here only ──
const projects = [
  {
    title: 'RENDEZVOUS by KAMI',
    category: 'Music Video',
    cat: 'music-video',
    year: 2024,
    role: 'Director, Cinematography',
    img: W + '658dc8_200c08d35d5142d4a2ea9855b5eaff33~mv2.jpg',
    desc: "A music video for KAMI's track RENDEZVOUS. Add your description of this project here — the brief, your approach, and what made it memorable to work on.",
    featured: true,
    video: 'https://www.youtube.com/embed/dpZlPUQcjx0',
    images: [
      W + '658dc8_e87df1115d4645a8a57913250e1d0eba~mv2.jpg',
      W + '658dc8_a4f994f080b04ed5ae20c0ad4777ebe1~mv2.jpg',
      W + '658dc8_f66d8c3af1a848aba9b19112e7acffec~mv2.jpg',
      W + '658dc8_8fede8a813a84d998723fea12754d4f4~mv2.jpg',
      W + '658dc8_8ebdc392265e485db696042709493377~mv2.jpg',
      W + '658dc8_f192e28ce7b14cc79cbd2663afe180f9~mv2.jpg',
      W + '658dc8_4ac29a571cd34fe0b994c5d44a27f36a~mv2.jpg',
      W + '658dc8_f34fc48479504d8dac40abe3e7761237~mv2.jpg',
      W + '658dc8_67b51daabbcd4515b82cf21957470bab~mv2.jpg',
      W + '658dc8_a42d9dd7f924444daf81559d46faad0d~mv2.jpg',
    ],
  },
  {
    title: 'Unto Death',
    category: 'Short Film · Horror',
    cat: 'narrative',
    year: 2023,
    role: 'Director, Editor',
    img: W + '658dc8_b9abf9cd848f456eaf937852cd49d084~mv2.jpg',
    desc: 'A short horror film exploring themes of mortality and dread. Add your description here.',
    featured: true,
    video: null,
    images: [
      W + '658dc8_5b401e5f88254ee3a66f4cf554293b63~mv2.jpg',
      W + '658dc8_6c297fd6b1bf48119129387226ed1484~mv2.jpg',
      W + '658dc8_e7430fe514384f528fdf0cda190330d5~mv2.jpg',
      W + '658dc8_1044f036c3604a6582e73bb53979542b~mv2.jpg',
      W + '658dc8_df8e9c6c0fdf43b58dfab4ca6eb6a704~mv2.jpg',
      W + '658dc8_f535cf8b1ce045e8bf201325252e0f74~mv2.jpg',
      W + '658dc8_40fd479440114ae6ab9a5d5bab75ba3d~mv2.jpg',
      W + '658dc8_be8e9ceed8754272bb11dcec01e68af7~mv2.jpg',
      W + '658dc8_825d126b6bdc4c99a579b2143a09df94~mv2.jpg',
    ],
  },
  {
    title: 'Flowers For Bridie',
    category: 'Short Film · Comedy Drama',
    cat: 'narrative',
    year: 2023,
    role: 'Director, DoP',
    img: W + '658dc8_9555dc7dba054dbaa327f6d556dc739c~mv2.jpg',
    desc: 'A short comedy drama film. Add your description here.',
    featured: true,
    video: null,
    images: [
      W + '658dc8_aa34f0c2b39946c89f06a0e35433a423~mv2.jpg',
      W + '658dc8_6bb807708eb34b83b65d79368dc245d2~mv2.jpg',
      W + '658dc8_b9c4768994454cb3a761b4cfd1d123e1~mv2.jpg',
      W + '658dc8_953ec671cb0d4126992acbaf39237f72~mv2.jpg',
      W + '658dc8_779ca0cbd2db460f994c1a5cd654cc28~mv2.jpg',
      W + '658dc8_d5dad895fa1e46caa862df92d45ca7b8~mv2.jpg',
    ],
  },
  {
    title: 'Second Chance',
    category: 'Short Documentary',
    cat: 'documentary',
    year: 2022,
    role: 'Director, Cinematography',
    img: W + '658dc8_131efa03a2504e7993a08be3985f8635~mv2.jpg',
    desc: 'A short documentary. Add your description here.',
    featured: true,
    video: null,
    images: [
      W + '658dc8_78ba2bb03c10458ba416342f8575aa5c~mv2.png',
      W + '658dc8_8344f11bcbc84317b5c40a115ae5a2ed~mv2.png',
      W + '658dc8_1552befa5b994244b3c8f99ea00c5a48~mv2.png',
      W + '658dc8_3acd79a601a84365a76357b1dc951f91~mv2.png',
      W + '658dc8_910b93700bfb4818bc225293ce939916~mv2.png',
      W + '658dc8_ad39b317dfa243ea90186acf22e0c47e~mv2.png',
      W + '658dc8_25073d653c184da9b8f0272dc9a7f691~mv2.png',
      W + '658dc8_206fc445dd9f403c95b401e9484f168a~mv2.png',
      W + '658dc8_9e5ac54bd82b44218caf207a93021f03~mv2.png',
      W + '658dc8_ce2bbf1f50e24475811ec317498314e7~mv2.png',
    ],
  },
  {
    title: 'Jon Mckain: Alone in Romania',
    category: 'Sport Documentary',
    cat: 'documentary',
    year: 2023,
    role: 'Director, DoP, Editor',
    img: W + '658dc8_206808ea867e4aa992a7661551cd1c3a~mv2.png',
    desc: 'A short sport documentary following Jon Mckain. Add your description here.',
    featured: true,
    video: null,
    images: [
      W + '658dc8_8e9eea6f11944a8da93dba7b43c94b34~mv2.png',
      W + '658dc8_9265ba654e064e75a0baa902958bebd1~mv2.png',
      W + '658dc8_a54ba46b9ab24b0499713edf38269508~mv2.png',
      W + '658dc8_a6d5cc45d42944b7afb0e7e6b1c4e6ad~mv2.png',
      W + '658dc8_f64d4800d378477e94bdb2fa5faac9eb~mv2.png',
      W + '658dc8_cbe3002b166d4d8f818f9c3cfaaa490a~mv2.png',
      W + '658dc8_db51ccc28670476fba1bb7adb53e099d~mv2.png',
      W + '658dc8_009f3c89187940a197178b20dd519f51~mv2.png',
      W + '658dc8_00a3d61301ae46f5910c315a4aac71f2~mv2.png',
    ],
  },
  {
    title: 'Heartstrings by Strayfold',
    category: 'Music Video',
    cat: 'music-video',
    year: 2023,
    role: 'Director, Cinematography',
    img: W + '658dc8_df1c1c0d27484a1dbbe68c53b9439505~mv2.jpg',
    desc: "A music video for Strayfold's Heartstrings. Add your description here.",
    featured: true,
    video: 'https://www.youtube.com/embed/cKHotWEsRY4',
    images: [
      W + '658dc8_300e31e6c9a741c8ab7158d38d701ee9~mv2.png',
      W + '658dc8_1c4306835a844dbbad78be9a6eedb417~mv2.png',
      W + '658dc8_636e28fe28534436aeb22f89d5a0867d~mv2.png',
      W + '658dc8_a1aaf4d7d67748fb8cd19b50d720f45f~mv2.png',
      W + '658dc8_b0998a79d6c04dcf86e3eb583088ad24~mv2.png',
      W + '658dc8_0a6efb914aae4cd8b722bd32499907c7~mv2.png',
      W + '658dc8_53086f5b8a3f48c1845f06e30d3fb4e7~mv2.png',
      W + '658dc8_23d7c2ce8b64434b911d9d241a90c94e~mv2.png',
      W + '658dc8_a562b1ed9f0a44cf933c6da7d1d48ecb~mv2.png',
    ],
  },
  {
    title: 'CROWD',
    category: 'Short Film · Psychological Horror',
    cat: 'narrative',
    year: 2022,
    role: 'Director, DoP',
    img: W + '658dc8_a97e1e8d92364bf5925430e37703d0cc~mv2.png',
    desc: 'A psychological horror short. Add your description here.',
    featured: false,
    video: null,
    images: [
      W + '658dc8_6e9526086d374ff3a9380a11f92b9cb9~mv2.png',
      W + '658dc8_a6bfff44209b481faed967273705abaf~mv2.png',
      W + '658dc8_23711c911a514c468fd72623b04a2f10~mv2.png',
      W + '658dc8_7a8626291d054c3e857d18a49d59b122~mv2.png',
      W + '658dc8_ca29c74bd2764e94a764c325cc8075ad~mv2.png',
      W + '658dc8_35d1004a777e441c8571b966358d0619~mv2.png',
      W + '658dc8_c4c75c91df4d4a8889e103a2c554f76b~mv2.png',
    ],
  },
  {
    title: 'T42 (Table For Two)',
    category: 'Reality Web Series',
    cat: 'commercial',
    year: 2022,
    role: 'Director, Cinematography',
    img: W + '658dc8_8b9741f8a5c44b3ea45d414f52f9463d~mv2.png',
    desc: 'A reality web series. Add your description here.',
    featured: false,
    video: null,
    images: [],
  },
  {
    title: 'Real Estate Videography',
    category: 'Commercial',
    cat: 'commercial',
    year: 2023,
    role: 'Videographer, Editor',
    img: W + '658dc8_7a66b6e0d9834a24a79e4b57777d4fc1~mv2.jpg',
    desc: 'Real estate videography. Add your description here.',
    featured: false,
    video: null,
    images: [
      W + '658dc8_7afeae077065411ca0cc3cff669504da~mv2.png',
      W + '658dc8_115e2281ce1f4c8183b59529cab72d74~mv2.png',
      W + '658dc8_59cb63f322c74a1ea95ba902a3ccd568~mv2.png',
      W + '658dc8_69c5898289bb474792126210561d68ec~mv2.png',
      W + '658dc8_2a9d41b3333146c98b45c4feccef4f62~mv2.png',
      W + '658dc8_86bbaab69306485c82097c204e9cc11a~mv2.png',
      W + '658dc8_5006690e698a43af9a86273e0334c5cb~mv2.png',
      W + '658dc8_88004a86252242a0870ab5eed571cc14~mv2.png',
      W + '658dc8_f20381f56fac46f69ba8d88d5e705b90~mv2.png',
      W + '658dc8_0e5c73a6adf54e5ca43a5788c370dfdf~mv2.png',
    ],
  },
  {
    title: 'LiberLive C1 — Commercial',
    category: 'Commercial',
    cat: 'commercial',
    year: 2023,
    role: 'Director, Videographer',
    img: W + '658dc8_3dfc3822595448999c6632460d99cef0~mv2.webp',
    desc: 'Commercial content for LiberLive C1. Add your description here.',
    featured: false,
    video: null,
    images: [],
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

// ── Carousel ──
let currentSlide = 0;
let totalSlides = 0;

function goToSlide(index) {
  const track = document.getElementById('carouselTrack');
  const carouselEl = document.getElementById('lightboxCarousel');
  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;
  currentSlide = index;

  const firstSlide = track.firstElementChild;
  const slideWidth = firstSlide ? firstSlide.offsetWidth : (carouselEl.offsetWidth - 96);
  const gapPx = parseInt(getComputedStyle(track).gap) || 16;
  const peekPx = (carouselEl.offsetWidth - slideWidth) / 2;
  track.style.transform = `translateX(${peekPx - index * (slideWidth + gapPx)}px)`;

  document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

document.getElementById('carouselPrev').addEventListener('click', () => goToSlide(currentSlide - 1));
document.getElementById('carouselNext').addEventListener('click', () => goToSlide(currentSlide + 1));

// Dot clicks
document.getElementById('carouselDots').addEventListener('click', e => {
  const dot = e.target.closest('.carousel-dot');
  if (dot) goToSlide(parseInt(dot.dataset.index));
});

// Swipe support
let touchStartX = 0;
const carousel = document.getElementById('lightboxCarousel');
carousel.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
carousel.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) goToSlide(diff > 0 ? currentSlide + 1 : currentSlide - 1);
});

// ── Lightbox ──
function openLightbox(el) {
  const project = projects.find(p => p.title === el.dataset.title);
  const track = document.getElementById('carouselTrack');
  const dots = document.getElementById('carouselDots');
  track.innerHTML = '';
  dots.innerHTML = '';

  const slides = [];

  if (project.video) {
    track.innerHTML += `<div class="carousel-slide"><iframe src="${project.video}" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>`;
    slides.push('video');
  }

  (project.images || []).forEach(imgUrl => {
    track.innerHTML += `<div class="carousel-slide"><img src="${imgUrl}" alt="${a(project.title)}"></div>`;
    slides.push('image');
  });

  // Fallback: just show thumbnail if nothing else
  if (slides.length === 0) {
    track.innerHTML += `<div class="carousel-slide"><img src="${project.img}" alt="${a(project.title)}"></div>`;
    slides.push('image');
  }

  totalSlides = slides.length;

  dots.innerHTML = slides.map((_, i) =>
    `<div class="carousel-dot${i === 0 ? ' active' : ''}" data-index="${i}"></div>`
  ).join('');

  // Show/hide nav buttons
  const showNav = totalSlides > 1;
  document.getElementById('carouselPrev').style.display = showNav ? '' : 'none';
  document.getElementById('carouselNext').style.display = showNav ? '' : 'none';

  document.getElementById('lbCat').textContent = el.dataset.category;
  document.getElementById('lbTitle').textContent = el.dataset.title;
  document.getElementById('lbDesc').textContent = el.dataset.desc;
  document.getElementById('lbYear').textContent = el.dataset.year;
  document.getElementById('lbRole').textContent = el.dataset.role;
  document.getElementById('lightboxOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  // Defer so the overlay is laid out before reading offsetWidth
  requestAnimationFrame(() => goToSlide(0));
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
  // Stop any playing video by clearing the track
  document.getElementById('carouselTrack').innerHTML = '';
}

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxOverlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeLightbox(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') goToSlide(currentSlide - 1);
  if (e.key === 'ArrowRight') goToSlide(currentSlide + 1);
});
