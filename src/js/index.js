// ------------------------------------frase cambiando en hero
let words = ['desarrollo sitios web', 'soy apasionado por la tecnología', 'soy amante de los animales'],
wordWrapper = document.getElementById('word'),
wordWrapperContent = wordWrapper.innerHTML,
addingWord = false,
counter = 1;

setInterval(function(){

  if(wordWrapperContent.length > 0 && !addingWord ) {
    wordWrapper.innerHTML = wordWrapperContent.slice(0, -1);
    wordWrapperContent = wordWrapper.innerHTML;
  } else {
    addingWord = true;
  }

  if( addingWord ){
    if( wordWrapperContent.length < words[counter].length  ) {
      wordWrapper.innerHTML = words[counter].slice(0, wordWrapperContent.length + 1);
      wordWrapperContent = wordWrapper.innerHTML;
    } else {
      if( counter < words.length) {
        counter ++
      }
      addingWord = false;
    }
  }

  if( counter == words.length) {
    counter = 0;
  }

}, 120);

// --------------------------------------------------------------carrusel
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}