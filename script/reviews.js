/* ------------------- reviews.js ------------------- */
/* Book Reviews Array */
const reviews = [
  {
    title: "The Enchanted Forest",
    author: "L. Green",
    rating: 4.25,
    review: "A short preview of the review...",
    image: "images/book1.jpg",
    tags: ["fantasy", "cozy"],
    file: "reviews/enchanted-forest.html"  // Points to individual review
  },
  {
    title: "Space Love",
    author: "J. Star",
    rating: 3.75,
    review: "Romantic space adventure with unexpected twists.",
    image: "images/book2.jpg",
    tags: ["romance", "sci-fi"],
    file: "reviews/space-love.html"
  }
];

/* Container for reviews */
const reviewsContainer = document.getElementById('reviewsContainer');
const filterButtons = document.querySelectorAll('#reviewFilters button');

/* Function to render stars (supports full, half, quarter stars) */
function renderStars(rating) {
  let html = '';
  let remaining = rating;
  for (let i = 0; i < 5; i++) {
    if (remaining >= 1) {
      html += '<i class="fas fa-star"></i>'; // full star
      remaining -= 1;
    } else if (remaining >= 0.5) {
      html += '<i class="fas fa-star-half-alt"></i>'; // half star
      remaining -= 0.5;
    } else if (remaining >= 0.25) {
      html += '<i class="fas fa-star-quarter"></i>'; // quarter star (custom)
      remaining = 0;
    } else {
      html += '<i class="far fa-star"></i>'; // empty star
    }
  }
  return html;
}

/* Function to render reviews */
function renderReviews(filteredReviews) {
  reviewsContainer.innerHTML = '';
  filteredReviews.forEach(review => {
    const card = document.createElement('div');
    card.classList.add('review-card');
    card.innerHTML = `
      ${review.image ? `<img src="${review.image}" alt="${review.title}">` : ''}
      <h3>${review.title}</h3>
      <p><em>by ${review.author}</em></p>
      <div class="star-rating">${renderStars(review.rating)}</div>
      <p>${review.review}</p>
      <div class="review-tags">${review.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
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
