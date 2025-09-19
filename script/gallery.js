/* ------------------- Gallery Logic ------------------- */

let currentImageIndex = 0;

// Example gallery images array
const galleryImages = [
  'https://via.placeholder.com/300x200?text=1',
  'https://via.placeholder.com/300x200?text=2',
  'https://via.placeholder.com/300x200?text=3'
];

// Update gallery image
function showImage(index) {
  const imgElement = document.getElementById('galleryImage');
  if(imgElement) {
    imgElement.src = galleryImages[index];
    currentImageIndex = index;
  }
}

// Next image
function nextImage() {
  const nextIndex = (currentImageIndex + 1) % galleryImages.length;
  showImage(nextIndex);
}

// Previous image
function previousImage() {
  const prevIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage(prevIndex);
}

// Initialize gallery on page load
window.addEventListener('DOMContentLoaded', () => {
  showImage(currentImageIndex);
});
