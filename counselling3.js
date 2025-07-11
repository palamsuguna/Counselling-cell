document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const response = document.getElementById('formResponse');
  response.textContent = "✅ Thank you for contacting us! We'll respond shortly.";
  response.style.color = "green";
  this.reset();
});
