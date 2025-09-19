/* =======================
   FAVOURITES.JS
   Dynamically renders current + archive favourites from favourites.json
   Includes category filter, month filter, and sorting
   ======================= */

let currentFavourites = [];
let favouritesArchive = [];

const currentContainer = document.getElementById("currentFavourites");
const archiveContainer = document.getElementById("favouritesArchive");

/* Filters */
const currentCatFilter = document.getElementById("currentCategoryFilter");
const currentSort = document.getElementById("currentSort");
const archiveCatFilter = document.getElementById("archiveCategoryFilter");
const archiveMonthFilter = document.getElementById("archiveMonthFilter");

fetch('favourites.json')
  .then(res => res.json())
  .then(data => {
    currentFavourites = data.current;
    favouritesArchive = data.archive;

    populateFilters();
    filterAndRender();
  })
  .catch(err => console.error("Error loading favourites:", err));

/* ---------- Populate Filters ---------- */
function populateFilters() {
  // Current favourites categories
  const currentCategories = [...new Set(currentFavourites.map(f => f.category))];
  currentCategories.forEach(cat => currentCatFilter.innerHTML += `<option value="${cat}">${cat}</option>`);

  // Archive categories
  const archiveCategories = [...new Set(favouritesArchive.map(f => f.category))];
  archiveCategories.forEach(cat => archiveCatFilter.innerHTML += `<option value="${cat}">${cat}</option>`);

  // Archive months
  const months = [...new Set(favouritesArchive.map(f => f.month))];
  months.forEach(m => archiveMonthFilter.innerHTML += `<option value="${m}">${m}</option>`);
}

/* ---------- Render Function ---------- */
function renderFavourites(container, items) {
  container.innerHTML = "";
  items.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("favourite-card");
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h4>${item.name}</h4>
      <p>${item.category}${item.month ? ' - ' + item.month : ''}</p>
      <a href="${item.link}" target="_blank">View / Buy</a>
    `;
    container.appendChild(div);
  });
}

/* ---------- Filter & Sort ---------- */
function filterAndRender() {
  // Current
  let filteredCurrent = currentFavourites.filter(f => currentCatFilter.value === "all" || f.category === currentCatFilter.value);
  if(currentSort.value === "nameAsc") filteredCurrent.sort((a,b)=>a.name.localeCompare(b.name));
  else if(currentSort.value === "nameDesc") filteredCurrent.sort((a,b)=>b.name.localeCompare(a.name));
  renderFavourites(currentContainer, filteredCurrent);

  // Archive
  let filteredArchive = favouritesArchive.filter(f =>
    (archiveCatFilter.value === "all" || f.category === archiveCatFilter.value) &&
    (archiveMonthFilter.value === "all" || f.month === archiveMonthFilter.value)
  );
  renderFavourites(archiveContainer, filteredArchive);
}

/* ---------- Event Listeners ---------- */
[currentCatFilter, currentSort, archiveCatFilter, archiveMonthFilter].forEach(el => {
  el.addEventListener("change", filterAndRender);
});
