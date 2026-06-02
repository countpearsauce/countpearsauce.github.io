function loadNavbar() {
  const currentPath = window.location.pathname;
  
  // 1. Determine if we are on the homepage (root index.html)
  const isRoot = currentPath.endsWith('index.html') || currentPath === '/' || currentPath.endsWith('/');

  // 2. Determine fetch path based on your folder depth
  const navbarPath = isRoot ? 'components/navbar.html' : '../components/navbar.html';

  fetch(navbarPath)
    .then(response => {
      if (!response.ok) throw new Error('Navbar failed to load');
      return response.text();
    })
    .then(data => {
      const container = document.getElementById('navbar-container');
      if (container) {
        container.innerHTML = data;
        highlightActiveLink();
      }
    })
    .catch(error => console.error('Error loading the navbar:', error));
}

function highlightActiveLink() {
  const currentPath = window.location.pathname;
  // Get all anchor tags inside your navbar
  const navLinks = document.querySelectorAll('.navbar a');

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');

    // 3. Highlight the active link if the paths match
    if (linkHref && (currentPath === linkHref || currentPath.endsWith(linkHref) || currentPath == "" || (currentPath.endsWith("index.html") && linkHref == "/"))) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
      console.log(`Active link identified: ${linkHref}`);
    }
  });
}

document.addEventListener('DOMContentLoaded', loadNavbar);