document.addEventListener("DOMContentLoaded", function () {

  // Function to load reusable components
  function loadComponent(file, elementId) {
    fetch(file)
      .then((response) => response.text())
      .then((data) => {  
          document.getElementById(elementId).innerHTML = data;   
      })
      .catch((error) => {
        console.error(`Error loading ${file}:`, error);
      });
  }

  // Load carousel
  loadComponent("../assets/src/components/example-component.html", "element-example-id");

});

