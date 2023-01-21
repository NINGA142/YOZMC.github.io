let slideIndex = 1;
showSlides(slideIndex);
var num = '1'
function plusSlides(n) {
  showSlides(slideIndex += n);
  num=1
}

function currentSlide(n) {
  showSlides(slideIndex = n);
   num=1
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
  dots[slideIndex - 1].className += " active";

  var path = slides[slideIndex - 1].src
  var BK = document.getElementById('bk');
  BK.style.backgroundImage = "url('" + path + "')"
}
setInterval(function(){prog()}, 1)
function prog()
{
  num++
  let prog = document.getElementById('prog');
  prog.value=num;
  if (num > 980) {
    plusSlides(1)
  }
}