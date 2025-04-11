document.addEventListener("DOMContentLoaded", function () {
    const parallax = document.querySelector(".parallax-bg-v2");
  
    window.addEventListener("scroll", function () {
      if (parallax) {
        const scrollPosition = window.pageYOffset;
        // Adjust the multiplier (e.g., 0.5) for stronger/weaker parallax
        parallax.style.backgroundPositionY = -(scrollPosition - scrollPosition - scrollPosition) + "px";
      }
    });
});