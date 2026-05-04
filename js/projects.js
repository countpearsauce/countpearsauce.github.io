const projectCards = [
    {
      title: "Local Music Player",
      tag: "Javascript/HTML/CSS",
      link: "https://github.com/cse110-fa22-group4/cse110-fa22-group4",
      description: "something"
    }
  ];

function renderCards() {
    const container = document.getElementById('card-project-container');
    if (!container) return;

    // Map over the objects and generate HTML strings
    const cardsHTML = projectCards.map(card => `
        <div class="card-project">
        <a href="${card.link}" class="card-title">${card.title}</a>
        <p class="card-tag">${card.tag}</p>
        <p class="card-description">${card.description}</p>
        </div>
    `).join(''); // Join turns the array of strings into one long HTML string

    // Inject the generated HTML into your container
    container.innerHTML = cardsHTML;
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', renderCards);