/* ------------------- gallery.js ------------------- */
/* Controls the gallery modal image navigation */

let currentImageIndex = 0;

/* Array of gallery images */
const galleryImages = [
  'images/gallery1.jpg',
  'images/gallery2.jpg',
  'images/gallery3.jpg'
];

/* Display a specific image in the gallery */
function showImage(index) {
  const imgElement = document.getElementById('galleryImage');
  if (imgElement) {
    imgElement.src = galleryImages[index];
    currentImageIndex = index;
  }
}

/* Navigate to the next image */
function nextImage() {
  const nextIndex = (currentImageIndex + 1) % galleryImages.length;
  showImage(nextIndex);
}

/* Navigate to the previous image */
function previousImage() {
  const prevIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage(prevIndex);
}

/* Initialize gallery on page load */
window.addEventListener('DOMContentLoaded', () => {
  showImage(currentImageIndex);
});
