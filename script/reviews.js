/* ------------------- reviews.js ------------------- */

/* Array of book reviews */
const reviews = [
  {
    title: "The Enchanted Forest",
    author: "L. Green",
    rating: 4.25,
    preview: "A short preview of the review…",
    image: "images/book1.jpg",
    tags: ["fantasy", "cozy"],
    file: "reviews/enchanted-forest.html",
    date: "2025-09-19",
    recommended: true,
    link: "https://www.amazon.com/dp/example1?tag=youraffiliateid",
    featured: true
  },
  {
    title: "Space Love",
    author: "J. Star",
    rating: 3.75,
    preview: "Romantic space adventure with unexpected twists.",
    image: "images/book2.jpg",
    tags: ["romance", "sci-fi"],
    file: "reviews/space-love.html",
    date: "2025-09-18",
    recommended: false,
    link: "https://www.amazon.com/dp/example2?tag=youraffiliateid",
    featured: true
  },
  {
    title: "Mystery of the Cottage",
    author: "C. Willow",
    rating: 5,
    preview: "A cozy mystery full of charm and suspense.",
    image: "images/book3.jpg",
    tags: ["cozy", "mystery"],
    file: "reviews/mystery-cottage.html",
    date: "2025-09-17",
    recommended: true,
    link: "https://www.amazon.com/dp/example3?tag=youraffiliateid",
    featured: true
  }
];

/* Containers */
const reviewsContainer = document.getElementById('reviewsContainer');
const filterButtons = document.querySelectorAll('#reviewFilters button');
const sortSelect = document.getElementById('sortSelect');
const recommendFilter = document.getElementById('recommendFilter');

/* Render stars */
function renderStars(rating) {
  const stars = [];
  let remaining = rating;
  for (let i = 0; i < 5; i++) {
    if (remaining >= 1) stars.push('<span class="star full"></span>');
    else if (remaining >= 0.5) stars.push('<span class="star half"></span>');
    else if (remaining >= 0.25) stars.push('<span class="star quarter"></span>');
    else stars.push('<span class="star empty"></span>');
    remaining -= 1;
  }
  return stars.join('');
}

/* Render reviews dynamically */
function renderReviewsList(reviewsList) {
  reviewsContainer.innerHTML = '';
  reviewsList.forEach(review => {
    const card = document.createElement('div');
    card.classList.add('review-card');

    card.innerHTML = `
      <a href="${review.file}">
        ${review.image ? `<img src="${review.image}" alt="${review.title}">` : ''}
        <h3>${review.title}</h3>
        <p><em>by ${review.author}</em></p>
        <div class="star-rating">${renderStars(review.rating)}</div>
        <p>${review.preview}</p>
        <div class="review-tags">${review.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
        ${review.recommended ? '<p style="color:green;font-weight:bold;">✔ Recommended</p>' : ''}
        <p style="font-size:0.8rem;color:#555;">Posted on: ${review.date}</p>
      </a>
      ${review.link ? `<a href="${review.link}" class="book-link" target="_blank">Buy / Check it out</a>` : ''}
    `;
    reviewsContainer.appendChild(card);
  });
}

/* Apply filters & sorting */
function applyFilters(tag = 'all') {
  let filtered = reviews;

  // Tag filter
  if (tag !== 'all') filtered = filtered.filter(r => r.tags.includes(tag));

  // Recommended filter
  if (recommendFilter.checked) filtered = filtered.filter(r => r.recommended);

  // Sorting
  const sortValue = sortSelect.value;
  filtered.sort((a,b) => {
    if (sortValue === 'dateDesc') return new Date(b.date) - new Date(a.date);
    if (sortValue === 'dateAsc') return new Date(a.date) - new Date(b.date);
    if (sortValue === 'ratingDesc') return b.rating - a.rating;
    if (sortValue === 'ratingAsc') return a.rating - b.rating;
  });

  renderReviewsList(filtered);
}

/* Initial render */
applyFilters('all');

/* Tag filter buttons */
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    applyFilters(button.dataset.filter);
  });
});

/* Sort select */
sortSelect.addEventListener('change', () => {
  const activeTag = document.querySelector('#reviewFilters button.active')?.dataset.filter || 'all';
  applyFilters(activeTag);
});

/* Recommended checkbox */
recommendFilter.addEventListener('change', () => {
  const activeTag = document.querySelector('#reviewFilters button.active')?.dataset.filter || 'all';
  applyFilters(activeTag);
});
