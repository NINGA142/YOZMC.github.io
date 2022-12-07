function load()
{
  localStorage.setItem('menu', 'close')
}
function open_menu()
{
  let btni1 = document.querySelector('.menu-icon div:nth-child(1)');
  let btni2 = document.querySelector('.menu-icon div:nth-child(2)');
  let btni3 = document.querySelector('.menu-icon div:nth-child(3)');
  let btn = document.querySelector('.menu-icon');
  let menu = document.querySelector('.menu');
  
  let menuS = localStorage.getItem('menu')
  
  if (menuS == 'close') {
  btni1.style.background='#91DCFF';
  btni2.style.background='#91DCFF';
  btni3.style.background='#91DCFF';
  menu.style.display='block';
  setTimeout(function(){menu.style.opacity='1';}, 10)
  localStorage.setItem('menu', 'open')
  }else if (menuS == 'open') {
    btni1.style.background = '#FFF';
    btni2.style.background = '#FFF';
    btni3.style.background = '#FFF';
    menu.style.opacity = '0';
    setTimeout(function() {menu.style.display = 'none';}, 500)
    localStorage.setItem('menu', 'close')
  }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
}
setInterval(function(){plusSlides(1)}, 4000)
