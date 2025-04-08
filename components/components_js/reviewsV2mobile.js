document.addEventListener("DOMContentLoaded", function () {  
    console.log("executing reviews mobile");
  
    // Reviews - v2
    const slider = document.getElementById('review-slider-mobile');
    const totalSlides = parseInt(slider.getAttribute('data-total-slides'));  // Total number of slides
    let currentIndex = 0;
    let autoSlideInterval;
  
    function moveToNextSlide() {
      currentIndex++;
      if (currentIndex >= totalSlides) {
        currentIndex = 0;
      }
      slider.style.transform = `translateX(-${(currentIndex * 100)}%)`;  // Adjust slide width
    }
  
    function startAutoSlide() {
      autoSlideInterval = setInterval(moveToNextSlide, 3000); // 3 seconds per slide
    }
  
    function stopAutoSlide() {
      clearInterval(autoSlideInterval);
    }
  
    // Start the slider
    startAutoSlide();
  
    // Pause the slider on hover
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);
  
    // Read More functionality
    document.querySelectorAll('.read-more-btn-mobile').forEach(button => {
      button.addEventListener('click', function () {
        const reviewText = this.previousElementSibling;
        if (reviewText.classList.contains('clamp-3')) {
          reviewText.classList.remove('clamp-3');
          reviewText.classList.add('expanded');
          this.textContent = 'Read Less';
        } else {
          reviewText.classList.add('clamp-3');
          reviewText.classList.remove('expanded');
          this.textContent = 'Read More';
        }
      });
    });
    
});