// JavaScript form validation
import "bootstrap/js/dist/alert.js";

const validateContactFroms = formId => {

  const contactForm = document.getElementById(formId);
  if (contactForm) {

    const nameInput = document.querySelector('#' + formId + ' #contact-form-name');
    const emailInput = document.querySelector('#' + formId + ' #contact-form-email');
    const messageInput = document.querySelector('#' + formId + ' #contact-form-message');
    // const button = document.querySelector('#' + formId + ' #form-submit-button');

    const validateEmail = (email) => {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    }

    // Error Alerts
    const alertPlaceholder = document.querySelector('#' + formId + ' #errorAlerts');
    const appendAlert = (message, type) => {
      // Keps styles .alert-danger for postcss
      alertPlaceholder.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
          `<div>${message}</div>`,
          '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
      ].join('')
    }

    const validateForm = () => {
      if (nameInput.value.trim() === '') {
        appendAlert('Please enter your name', 'danger');
        return false;
      }
      if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
        // alert('Please enter a valid email address.');
        appendAlert('Please enter a valid email address.', 'danger');
        return false;
      }
      if (messageInput.value.trim() === '') {
        appendAlert('Please enter a message.', 'danger');
        return false;
      }
      return true;
    }

    contactForm.addEventListener("submit", function (event) {
      // Prevent default form submission
      event.preventDefault();

      // Remove previous alerts
      const alertDismiss = this.querySelectorAll('#' + formId + ' #errorAlerts > *');
      if (alertDismiss) {
        alertDismiss.forEach(e => {
          e.remove();
        });
      };

      if (!validateForm()) {
        return false;
      }

      else {
        const receiveEmail = "fazaldinsons@gmail.com";
        // Compose email message
        const subject = `[Contact-Form] ${nameInput.value}`;
        const body = `${messageInput.value}\n\n${nameInput.value}\n${emailInput.value}`;
        // Open default email app and fill in appropriate fields
        const mailtoUrl = `mailto:${encodeURIComponent(
          receiveEmail
        )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        // Open Email client on click
        window.open(mailtoUrl);
      }
    });
  }
}

export default validateContactFroms;