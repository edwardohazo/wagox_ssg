document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
  
    // Header show and hide toggle effect
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
  
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            socials.classList.remove("socials-left");
            socials.classList.add("socials-right"); 
        } else {
            // Scrolling up
            socials.classList.remove("socials-right"); 
            socials.classList.add("socials-left");
        }
  
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
    });
  
  });
  
  
  