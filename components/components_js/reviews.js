document.addEventListener("DOMContentLoaded", function () {  

  if (!window.location.href.includes("/index")) {
      // Run script for this specific URL
      return;
  }
  
  // Reviews functionality
  let index = 0;
  function showNextReview() {
      const reviews = document.querySelectorAll('.review');
      reviews.forEach(r => r.classList.add('hidden'));
      index = (index + 1) % reviews.length;
      reviews[index].classList.remove('hidden');
  }
  setInterval(showNextReview, 4000);

});