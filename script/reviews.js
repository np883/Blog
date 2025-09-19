/* ------------------- reviews.js ------------------- */

/* Array of book reviews – each review links to its own page */
const reviews = [
  {
    title: "The Enchanted Forest",
    author: "L. Green",
    rating: 4.25,
    preview: "A short preview of the review…", // preview for homepage
    image: "images/book1.jpg",
    tags: ["fantasy", "cozy"],
    file: "reviews/enchanted-forest.html"  // full review page
  },
  {
    title: "Space Love",
    author: "J. Star",
    rating: 3.75,
    preview: "Romantic space adventure with unexpected twists.",
    image: "images/book2.jpg",
    tags: ["romance", "sci-fi"],
    file: "reviews/space-love.html"
  },
  {
    title: "Mystery of the Cottage",
    author: "C. Willow",
    rating: 5,
    preview: "A cozy mystery full of charm and suspense.",
    image: "images/book3.jpg",
    tags: ["cozy", "mystery"],
    file: "reviews/mystery-cottage.html"
  }
];

/* Containers */
const reviewsContainer = document.getElementById('reviewsContainer');
const filterButtons = document.querySelectorAll('#reviewFilters button');

/* Render stars – full, half, quarter */
function renderStars(rating) {
  const stars = [];
  let remaining = rating;
  for (let i = 0; i < 5; i++) {
    if (remaining >= 1) {
      stars.push('<span class="star full"></span>');
      remaining -= 1;
    } else if (remaining >= 0.5) {
      stars.push('<span class="star half"></span>');
      remaining -= 0.5;
    } else if (remaining >= 0.25) {
      stars.push('<span class="star quarter"></span>');
      remaining -= 0.25;
    } else {
      stars.push('<span class="star empty"></span>');
    }
  }
  return stars.join('');
}

/* Render review cards with clickable link to full page */
function renderReviews(filteredReviews) {
  reviewsContainer.innerHTML = '';
  filteredReviews.forEach(review => {
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
      </a>
    `;

    reviewsContainer.appendChild(card);
  });
}

/* Initial render: show all reviews */
renderReviews(reviews);

/* Filter functionality */
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    // Highlight active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    if (filter === 'all') {
      renderReviews(reviews);
    } else {
      const filtered = reviews.filter(r => r.tags.includes(filter));
      renderReviews(filtered);
    }
  });
});
