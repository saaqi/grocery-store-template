function storeStatus() {
  const timeZone = "America/New_York";
  const now = new Date();
  const localTime = new Date(
    now.toLocaleString("en-US", {
      timeZone: timeZone
    })
  );
  // Days ---------------------------
  const options = { weekday: "long" };
  const formattedTime = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: timeZone,
  });
  const orangeCityDayToday = new Intl.DateTimeFormat("en-US", options).format(localTime);
  const outputDay = `${orangeCityDayToday} ${formattedTime}`;

  // Time --------------------------
  const hours = localTime.getHours();
  const dayOfWeek = localTime.toLocaleString("en-US", {
    timeZone,
    weekday: "long",
  });
  const isOpeningHours =
    (dayOfWeek === "Sunday" && hours >= 9 && hours < 17) ||
    (dayOfWeek !== "Sunday" && hours >= 8 && hours < 19);

  const outputTime = isOpeningHours
    ? '<span class="open text-success fw-bold">Open</span> come on down'
    : '<span class="closed text-danger fw-bold">Closed</span> see you tomorrow :)';

  return `${outputDay}, We are ${outputTime}`;
}

function updateStatusRealtime() {
  document.getElementById("storestatus").innerHTML =
    `${storeStatus()}`;
}
updateStatusRealtime();
setInterval(updateStatusRealtime, 15000);




// JavaScript form validation
const form = document.getElementById("homepage-contact-form");

form.addEventListener("submit", function (event) {
  const nameInput = document.getElementById("contact-form-name");
  const emailInput = document.getElementById("contact-form-email");
  const messageInput = document.getElementById("contact-form-message");

  let isValid = true;

  // Validate name input
  if (nameInput.value === "") {
    isValid = false;
    nameInput.setCustomValidity("Please enter your name.");
  } else {
    nameInput.setCustomValidity("");
  }

  // Validate email input
  if (emailInput.value === "") {
    isValid = false;
    emailInput.setCustomValidity("Please enter your email address.");
  } else if (!emailInput.checkValidity()) {
    isValid = false;
    emailInput.setCustomValidity("Please enter a valid email address.");
  } else {
    emailInput.setCustomValidity("");
  }

  // Validate message input
  if (messageInput.value === "") {
    isValid = false;
    messageInput.setCustomValidity("Please enter a message.");
  } else {
    messageInput.setCustomValidity("");
  }

  // Submit form if all inputs are valid
  if (!isValid) {
    event.preventDefault();
  }
});

// JavaScript form submission
form.addEventListener("submit", function (event) {
  const nameInput = document.getElementById("contact-form-name");
  const emailInput = document.getElementById("contact-form-email");
  const messageInput = document.getElementById("contact-form-message");
  const receiveEmail = "fazaldinsons@gmail.com";
  const emailButton = document.querySelector("button.form-submit-button");

  // Compose email message
  const subject = `[Contact-Form] ${nameInput.value}`;
  const body = `${messageInput.value}\n\n${nameInput.value}\n${emailInput.value}`;

  // Open default email app and fill in appropriate fields
  const mailtoUrl = `mailto:${encodeURIComponent(
    receiveEmail
  )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  // Open Email client on click
  window.open(mailtoUrl);

  // Prevent default form submission
  event.preventDefault();
});
