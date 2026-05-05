function loadFooter() {
    const currentPath = window.location.pathname;
    
    // 1. Determine if we are on the homepage (root index.html)
    const isRoot = currentPath.endsWith('index.html') || currentPath === '/' || currentPath.endsWith('/');
  
    // 2. Determine fetch path based on your folder depth
    const footerPath = isRoot ? 'components/footer.html' : '../components/footer.html';
  
    fetch(footerPath)
      .then(response => {
        if (!response.ok) throw new Error('Footer failed to load');
        return response.text();
      })
      .then(data => {
        const container = document.getElementById('footer-container');
        if (container) {
          container.innerHTML = data;
          highlightActiveLink();
        }
      })
      .catch(error => console.error('Error loading the footer:', error));
  }
  
  document.addEventListener('DOMContentLoaded', loadFooter);