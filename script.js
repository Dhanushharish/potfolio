function showSmallVideo(videoPath) {
  const overlay = document.getElementById('videoOverlay');
  const video = document.getElementById('smallVideo');
  
  video.querySelector('source').src = videoPath;
  video.load();
  overlay.style.display = 'flex';
  video.play();
  document.body.classList.add('no-scroll');
}

document.getElementById('closeVideo').addEventListener('click', () => {
  const overlay = document.getElementById('videoOverlay');
  const video = document.getElementById('smallVideo');

  video.pause();
  video.currentTime = 0;
  overlay.style.display = 'none';
  document.body.classList.remove('no-scroll');
});

document.querySelectorAll('.demo-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const videoPath = btn.getAttribute('data-video');
    showSmallVideo(videoPath);
  });
});


















// Form and scroll behavior
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    form.reset();
  });

  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    section.classList.add("pre-animate");
    observer.observe(section);
  });
});
