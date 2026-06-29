(function () {
  const video = document.querySelector('.hero-video');
  if (!video) return;

  video.addEventListener('ended', () => {
    video.style.opacity = '0';
    setTimeout(() => {
      video.currentTime = 0;
      video.play();
      video.style.opacity = '1';
    }, 600);
  });
})();
