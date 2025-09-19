// Toggle Hobbies Section
function toggleHobbies() {
  const hobbiesSection = document.getElementById('hobbies');
  if (hobbiesSection.style.display === 'none') {
    hobbiesSection.style.display = 'block';
  } else {
    hobbiesSection.style.display = 'none';
  }
}

// Gallery Functionality
const images = [
  'https://via.placeholder.com/200?text=1',
  'https://via.placeholder.com/200?text=2',
  'https://via.placeholder.com/200?text=3'
];
let currentIndex = 0;
function showImage(index) {
  document.getElementById('galleryImage').src = images[index];
}
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}
function previousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  alert(`Thank you, ${name}! Your message has been sent.\n\nEmail: ${email}\nMessage: ${message}`);
  contactForm.reset();
});
