function setResponsiveClass() {
  if (window.innerWidth < 768) {
    document.body.classList.add('mobile');
  } else {
    document.body.classList.remove('mobile');
  }
}

// Run on load and when resizing
window.addEventListener('DOMContentLoaded', setResponsiveClass);
window.addEventListener('resize', setResponsiveClass);
