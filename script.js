// WHITESTONE WEBSITE JAVASCRIPT

// Mobile navigation
const navigation = document.querySelector(".navigation");
const header = document.querySelector(".header");

// Create mobile menu button
const menuButton = document.createElement("button");

menuButton.textContent = "☰";
menuButton.classList.add("menu-button");
menuButton.setAttribute("aria-label", "Toggle navigation");

header.insertBefore(menuButton, navigation);

menuButton.addEventListener("click", function() {
  navigation.classList.toggle("active");
});

// Close navigation after clicking a link
const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    navigation.classList.remove("active");
  });
});

// WhatsApp booking function
function bookOnWhatsApp() {
  
const phoneNumber = "2348093600009";
  
  const message =
    "Hello Whitestone Event Place, I would like to make an enquiry about booking a venue for my event. Please provide more information.";
  
  const whatsappURL =
    "https://wa.me/" + phoneNumber +
    "?text=" + encodeURIComponent(message);
  
  window.open(whatsappURL, "_blank");
  
}

// Footer year
const copyright = document.querySelector(".copyright");

if (copyright) {
  copyright.textContent =
    "© " + new Date().getFullYear() +
    " Whitestone Event Place Demo. Portfolio concept.";
}
// BOOKING FORM TO WHATSAPP

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("fullName").value;
        const phone = document.getElementById("phone").value;
        const eventType = document.getElementById("eventType").value;
        const eventDate = document.getElementById("eventDate").value;
        const message = document.getElementById("message").value;

const whatsappNumber = "2348093600009";

        const text = 
            "Hello Whitestone Event Place!\n\n" +
            "I would like to make a booking enquiry.\n\n" +
            "Name: " + name + "\n" +
            "Phone: " + phone + "\n" +
            "Event: " + eventType + "\n" +
            "Event Date: " + eventDate + "\n" +
            "Message: " + message;


        const url = "https://wa.me/" + whatsappNumber +
            "?text=" + encodeURIComponent(text);

        window.open(url, "_blank");
    });
}
// PREVENT PAST BOOKING DATES

const eventDateInput = document.getElementById("eventDate");

if (eventDateInput) {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    const minimumDate = `${year}-${month}-${day}`;

    eventDateInput.setAttribute("min", minimumDate);
}