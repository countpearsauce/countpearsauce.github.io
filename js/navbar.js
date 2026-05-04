// Function to load the navbar
function loadNavbar() {
    fetch('../components/navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar-container').innerHTML = data;
      })
      .catch(error => console.error('Error loading the navbar:', error));
  }
  
  // Run the function when the page loads
  window.onload = loadNavbar;