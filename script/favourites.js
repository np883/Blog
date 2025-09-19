/* ------------------- favourites.js ------------------- */

/* Example favourites data */
const favourites = [
  {
    month: "September 2025",
    items: [
      {
        name: "The Enchanted Forest",
        category: "Book",
        image: "images/book1.jpg",
        link: "https://www.amazon.com/dp/example1?tag=youraffiliateid"
      },
      {
        name: "Forest Green Notebook",
        category: "Stationery",
        image: "images/notebook1.jpg",
        link: "https://www.amazon.com/dp/example2?tag=youraffiliateid"
      }
    ]
  },
  {
    month: "August 2025",
    items: [
      {
        name: "Mystery of the Cottage",
        category: "Book",
        image: "images/book2.jpg",
        link: "https://www.amazon.com/dp/example3?tag=youraffiliateid"
      },
      {
        name: "Sage Green Pen Set",
        category: "Stationery",
        image: "images/pen1.jpg",
        link: "https://www.amazon.com/dp/example4?tag=youraffiliateid"
      }
    ]
  }
];

/* Containers */
const currentContainer = document.getElementById('currentFavouritesContainer');
const archiveContainer = document.getElementById('archiveFavouritesContainer');
const archiveButtonsContainer = document.getElementById('favouritesArchive');

/* Render favourites cards */
function renderFavourites(items, container) {
  container.innerHTML = '';
  items.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('favourite-card');
    card.innerHTML = `
      <a href="${item.link}" target="_blank">
        <img src="${item.image}" alt="${item.name}">
        <h4>${item.name}</h4>
        <p class="category">${item.category}</p>
      </a>
    `;
    container.appendChild(card);
  });
}

/* Render current month favourites */
renderFavourites(favourites[0].items, currentContainer);

/* Generate archive buttons */
favourites.slice(1).forEach((monthData, index) => {
  const button = document.createElement('button');
  button.textContent = monthData.month;
  button.addEventListener('click', () => {
    renderFavourites(monthData.items, archiveContainer);
  });
  archiveButtonsContainer.appendChild(button);
});
