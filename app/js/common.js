document.addEventListener('DOMContentLoaded', function () {
  // loader
  setTimeout(function () {
    document.querySelector('body').classList.remove('loaded');
  }, 400);

 
});

var rellax = new Rellax('.rellax');

new WOW().init();
