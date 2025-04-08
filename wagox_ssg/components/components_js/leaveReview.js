document.addEventListener("DOMContentLoaded", function () {  

    // Review button - Using Intersection Observer API to detect when the section is in view
    const observerTwo = new IntersectionObserver((entries, observerTwo) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the animation class when the section is in view
          entry.target.classList.add('animate-fadeInUp');
          observerTwo.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5  // Trigger the animation when 50% of the element is in view
    });
  
    // Target the section to observe
    const target = document.getElementById('review-content');
    observerTwo.observe(target);
  
});