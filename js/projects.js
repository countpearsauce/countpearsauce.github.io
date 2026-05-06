const projectCards = [
    {
      title: "Local Music Player",
      tag: "Javascript/HTML/CSS",
      link: "https://github.com/cse110-fa22-group4/cse110-fa22-group4",
      description: "Led a team of 9 to build an offline electron-based application with full music player functionality in just 5 weeks."
    },
    {
        title: "Full-Stack Q&A Forum Application",
        tag: "Javascript/SQL",
        link: "https://github.com/leo3friedman/cse-210-group-project",
        description: "Collaborately designed and developed a full-stack forum application in just 5 weeks. Main SQL contributor."
    },
    {
        title: "Personal Website",
        tag: "HTML/CSS",
        link: "https://countpearsauce.github.io/index.html",
        description: "Designed and deployed a personal portfolio website to showcase projects and technical skills."
    },
    {
        title: "Raytracer",
        tag: "C++",
        link: "",
        description: "Built a raytracer from scratch, implementing core computer graphics concepts."
    },
    {
        title: "2D Racing Game",
        tag: "Java",
        link: "https://github.com/countpearsauce/CombatRacing",
        description: "Video game with simulated physics where you race against another player or the computer."
    },
    {
        title: "Sustainable Garden Demo",
        tag: "Unity/C#/HTML",
        link: "https://syn100-wi23-team-6.github.io/Sustainable-Cookies/play.html",
        description: "An education tool incorporating real world knowledge to teach sustainable gardening."
    }
  ];

let visibleCount = 3; // How many items to show initially
const increment = 5;    // How many items to add on click

function renderCards() {
    const container = document.getElementById('card-project-container');
    if (!container) return;

    const button = document.getElementById('show-more-btn');

    // Slice the array to get only the visible items
    const visibleCards = projectCards.slice(0, visibleCount);

    // Map over the objects and generate HTML strings
    const cardsHTML = visibleCards.map(card => `
        <div class="card-project">
            <p class="card-tag"> ${card.link == "" ? `<span ` : `<a href=`}${card.link ? `${card.link}` : ''} target="_blank" class="card-title">${card.title}${card.link ? `</a>` : `</span>`}     (${card.tag})</p>
            <p class="card-description">${card.description}</p>
        </div>
    `).join(''); // Join turns the array of strings into one long HTML string

    // Change text when all items are loaded
    if (visibleCount >= projectCards.length)
        button.innerText = "Show less";
    else {
        button.innerText = "Show more";
    }

    // Inject the generated HTML into your container
    container.innerHTML = cardsHTML;
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', renderCards);

// Attach event listener to the "Show More" button
document.getElementById('show-more-btn').addEventListener('click', () => {
    if (visibleCount < projectCards.length)
        visibleCount += increment; // Increase visible count
    else
        visibleCount = 3;
    renderCards();             // Re-render the updated list
});