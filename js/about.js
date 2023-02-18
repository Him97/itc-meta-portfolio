const form = document.querySelector('form');
const submitButton = document.querySelector('#submit');

form.addEventListener('input', function() {
  if (form.checkValidity()) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', '');
  }
});