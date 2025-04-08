document.addEventListener("DOMContentLoaded", function () {  
    let lastScrollTop = 0;
  
    // On tab change scroll go to top 
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
    });
  
    // Enable smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
   
});
  
  