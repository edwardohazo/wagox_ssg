document.addEventListener("DOMContentLoaded", function () {  

    // if (!window.location.href.includes("/about")) {
    //   // Run script for this specific URL
    //   return;
    // }

    console.log("executing services-cards-two...");

    // Services Appears with Scroll-triggered animation 
    const serviceCards = document.querySelectorAll('.service-card');
    const observerOptions = {
      threshold: 0.2
    };
      
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-x-10');
          entry.target.classList.add('opacity-100', 'translate-x-0');
        } else {
          // Reset the card back to initial position when it leaves the viewport
          entry.target.classList.add('opacity-0', 'translate-x-10');
          entry.target.classList.remove('opacity-100', 'translate-x-0');
        }
      });
    }, observerOptions);
      
    serviceCards.forEach(card => {
      observer.observe(card);
    });
   
});