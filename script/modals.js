/* ------------------- modals.js ------------------- */
/* Handles opening and closing modal popups on the homepage */

/**
 * Open a modal by its ID
 * @param {string} modalId - The ID of the modal to open
 */
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.style.display = 'block';
}

/**
 * Close a modal by its ID
 * @param {string} modalId - The ID of the modal to close
 */
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.style.display = 'none';
}

/* Close modal when clicking outside of the modal content */
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};
