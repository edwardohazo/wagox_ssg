document.addEventListener("DOMContentLoaded", function () {   

  // Paralax image
    window.addEventListener("scroll", function() {
    const parallaxTwo = document.querySelector(".parallax-bg-review");
      
    const offset = parallaxTwo.getBoundingClientRect().top;
    parallaxTwo.style.transform = "translateY(" + (offset * 0.2) + "px)";
  
  });

});