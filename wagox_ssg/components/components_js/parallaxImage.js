document.addEventListener("DOMContentLoaded", function () {   

  // Paralax image
    window.addEventListener("scroll", function() {
    const parallax = document.querySelector(".parallax-bg");
  
    let scrollPosition = window.pageYOffset;
  
    if (parallax) {
      parallax.style.transform = "translateY(" + (scrollPosition * 0.5) + "px)";
    }
  
  });

});




