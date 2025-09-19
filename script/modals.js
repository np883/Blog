/* ------------------- Modal Logic ------------------- */

// Open a modal by ID
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if(modal) modal.style.display = 'block';
}

// Close a modal by ID
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if(modal) modal.style.display = 'none';
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if(event.target === modal) modal.style.display = 'none';
  });
}
