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

  Array.from(track.children).forEach((slide, i) => slide.classList.toggle('active', i === currentSlide));
  document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

document.getElementById('carouselPrev').addEventListener('click', () => goToSlide(currentSlide - 1));
document.getElementById('carouselNext').addEventListener('click', () => goToSlide(currentSlide + 1));

document.getElementById('carouselDots').addEventListener('click', e => {
  const dot = e.target.closest('.carousel-dot');
  if (dot) goToSlide(parseInt(dot.dataset.index));
});

let touchStartX = 0;
const carousel = document.getElementById('lightboxCarousel');
carousel.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
carousel.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) goToSlide(diff > 0 ? currentSlide + 1 : currentSlide - 1);
});

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

  if (slides.length === 0) {
    track.innerHTML += `<div class="carousel-slide"><img src="${project.img}" alt="${a(project.title)}"></div>`;
    slides.push('image');
  }

  totalSlides = slides.length;

  dots.innerHTML = slides.map((_, i) =>
    `<div class="carousel-dot${i === 0 ? ' active' : ''}" data-index="${i}"></div>`
  ).join('');

  const showNav = totalSlides > 1;
  document.getElementById('carouselPrev').style.display = showNav ? '' : 'none';
  document.getElementById('carouselNext').style.display = showNav ? '' : 'none';

  document.getElementById('lbCat').textContent = el.dataset.category;
  document.getElementById('lbTitle').textContent = el.dataset.title;
  document.getElementById('lbDesc').textContent = el.dataset.desc;
  document.getElementById('lbYear').textContent = el.dataset.year;
  document.getElementById('lbRole').textContent = el.dataset.role;
  const lbLink = document.getElementById('lbLink');
  if (project.link) {
    lbLink.href = project.link;
    lbLink.textContent = 'Visit Channel →';
    lbLink.style.display = '';
  } else {
    lbLink.style.display = 'none';
  }
  document.getElementById('lightboxOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
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
  document.getElementById('carouselTrack').innerHTML = '';
}

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxOverlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeLightbox(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') goToSlide(currentSlide - 1);
  if (e.key === 'ArrowRight') goToSlide(currentSlide + 1);
});
