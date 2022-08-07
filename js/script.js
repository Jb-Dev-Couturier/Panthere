window.addEventListener('scroll', function () {
  var scroll = document.querySelector('.scrollTop');
  scroll.classList.toggle('active', window.scrollY > 1000);
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
  });
}

