/* =======================
   REVIEWS.JS - Book Reviews
   Dynamically renders reviews from reviews.json
   Includes stars, recommendation, tags, and filters
   ======================= */

let allReviews = [];

const container = document.getElementById("reviewsContainer");
const genreFilter = document.getElementById("genreFilter");
const ratingFilter = document.getElementById("ratingFilter");
const recommendedFilter = document.getElementById("recommendedFilter");

fetch('reviews.json')
  .then(res => res.json())
  .then(data => {
    allReviews = data;
    populateFilters();
    renderReviews();
  })
  .catch(err => console.error("Error loading reviews:", err));

/* ---------- Populate Filters ---------- */
function populateFilters() {
  const genres = [...new Set(allReviews.flatMap(r => r.tags))];
  genres.forEach(tag => {
    genreFilter.innerHTML += `<option value="${tag}">${tag}</option>`;
  });

  const ratings = [...new Set(allReviews.map(r => Math.floor(r.rating)))].sort((a,b)=>b-a);
  ratings.forEach(r => {
    ratingFilter.innerHTML += `<option value="${r}">${r}★ & up</option>`;
  });
}

/* ---------- Render Reviews ---------- */
function renderReviews() {
  container.innerHTML = "";

  let filtered = allReviews;

  // Genre filter
  const genreVal = genreFilter.value;
  if(genreVal !== "all") filtered = filtered.filter(r => r.tags.includes(genreVal));

  // Rating filter
  const ratingVal = ratingFilter.value;
  if(ratingVal !== "all") filtered = filtered.filter(r => Math.floor(r.rating) >= ratingVal);

  // Recommended filter
  if(recommendedFilter.checked) filtered = filtered.filter(r => r.recommended);

  filtered.forEach(review => {
    const reviewDiv = document.createElement("div");
    reviewDiv.classList.add("review-card");

    // Generate stars (full ★, half ☆, quarter ✬)
    let starsHTML = "";
    for (let i=0; i<5; i++){
      if(i+1 <= review.rating) starsHTML += "★";
      else if(i+0.5 <= review.rating) starsHTML += "✬"; // half star
      else starsHTML += "☆";
    }

    reviewDiv.innerHTML = `
      <h3><a href="${review.link}" target="_blank">${review.title}</a></h3>
      <p><em>${review.date}</em> ${review.recommended ? '<span class="recommend">✔ Recommended</span>' : ''}</p>
      <p class="stars">${starsHTML}</p>
      <p>${review.preview}</p>
    `;

    container.appendChild(reviewDiv);
  });
}

/* ---------- Event Listeners ---------- */
genreFilter.addEventListener("change", renderReviews);
ratingFilter.addEventListener("change", renderReviews);
recommendedFilter.addEventListener("change", renderReviews);
