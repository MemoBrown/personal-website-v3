// ------------------------------------frase cambiando en hero
let words = ['desarrollo sitios web', 'soy apasionado por la tecnología', 'me encantan los animales'],
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

// --------------------------------scrollup
// Variables
var buttonUp = document.querySelector('a[href="#up"]');
var easings = {
    linear(t) {
        return t;
    },
    easeInQuad(t) {
        return t * t;
    },
    easeOutQuad(t) {
        return t * (2 - t);
    },
    easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic(t) {
        return t * t * t;
    },
    easeOutCubic(t) {
        return (--t) * t * t + 1;
    },
    easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart(t) {
        return t * t * t * t;
    },
    easeOutQuart(t) {
        return 1 - (--t) * t * t * t;
    },
    easeInOutQuart(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
    },
    easeInQuint(t) {
        return t * t * t * t * t;
    },
    easeOutQuint(t) {
        return 1 + (--t) * t * t * t * t;
    },
    easeInOutQuint(t) {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
    }
};

// Functions
/**
 * Animated scroll to up
 */
function scrollUp(duration, easing) {
    let start = window.pageYOffset;
    let startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
    let documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;

    if ('requestAnimationFrame' in window === false) {
        window.scroll(0, 0);
        return;
    }
    // Animation
    function scroll() {
        let now = 'now' in window.performance ? performance.now() : new Date().getTime();
        let time = Math.min(1, ((now - startTime) / duration));
        let timeFunction = easings[easing](time);
        window.scroll(0, Math.ceil((timeFunction * (0 - start)) + start));
        if (window.pageYOffset === 0) {
            return;
        }
        requestAnimationFrame(scroll);
    }
    // Move
    scroll();
}

/**
 * Show and hide button
 */
function isVisibled() {
    var heightHide = parseInt(buttonUp.getAttribute('height-hide')) || 100;
    if (document.body.scrollTop > heightHide || document.documentElement.scrollTop > heightHide) {
        buttonUp.classList.remove('simplescrollup__button--hide');
        buttonUp.classList.add('simplescrollup__button--show');
    } else {
        // Hide
        buttonUp.classList.remove('simplescrollup__button--show');
        buttonUp.classList.add('simplescrollup__button--hide');
    }
}

// Events

// Click button
buttonUp.addEventListener('click', function() {
    // Get attributes
    let duration = parseInt(buttonUp.getAttribute('duration')) || 1000;
    let easing = buttonUp.getAttribute('easing') || 'easeInOutQuad';
    // Run
    scrollUp(duration, easing);
});

// Auto show and hide button
window.addEventListener('scroll', isVisibled);