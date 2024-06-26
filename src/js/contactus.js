// Setup Conact Us Links
import { attachSocialLinksById } from "./functions/attachSocialLinks.js";
import validateContactFroms from "./functions/validateContactForm.js";

attachSocialLinksById("contact-us-list");

const storeStatus = () => {
  const timeZone = "Europe/Brussels";
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

  const openingHours = {
    Monday: [9, 20],
    Tuesday: [9, 20],
    Wednesday: [9, 20],
    Saturday: [9, 20],
    Sunday: [9, 20],
    Friday: [9, 21],
  };

  const [startHour, endHour] = openingHours[dayOfWeek] || [];
  const isOpeningHours = startHour <= hours && hours < endHour;

  const openMsg = '<span class="open text-primary fw-bold">Open</span> come on down 🙂';
  const morningMsg = '<span class="text-danger-emphasis fw-bold">Closed</span> at this hour see you at 9:00 AM 😴';
  const tomorrowMsg = '<span class="text-danger-emphasis fw-bold">Closed</span> see you tomorrow 😴';

  let outputTime;

  if (isOpeningHours) outputTime = openMsg;
  else if (dayOfWeek === "Thursday") outputTime = tomorrowMsg;
  else if (hours < 9) outputTime = morningMsg;
  else outputTime = tomorrowMsg;

  return `It is ${outputDay}, We are ${outputTime}`;
}

const updateStatusRealtime = () => {
  document.getElementById("storestatus").innerHTML = `${storeStatus()}`;
}
updateStatusRealtime();
setInterval(updateStatusRealtime, 15000);






// JavaScript form submission
validateContactFroms('homepage-contact-form', 'info@sadiqsuperstore.com');