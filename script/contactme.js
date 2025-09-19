<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
  // Initialize EmailJS with your public key
  (function(){
    emailjs.init("3ztDl-F3geWloKRND"); // Your public key / user ID
  })();

  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  contactForm.addEventListener('submit', function(e){
    e.preventDefault();

    // Send email using your service ID and template ID
    emailjs.sendForm('service_owytfrf', 'template_c63wtui', this)
      .then(function(){
        formStatus.textContent = "Message sent successfully!";
        formStatus.style.color = "green";
        contactForm.reset();
      }, function(error){
        formStatus.textContent = "Oops, something went wrong. Please try again.";
        formStatus.style.color = "red";
        console.error(error);
      });
  });
</script>
