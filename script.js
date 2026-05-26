/* =========================
   PORTFOLIO JAVASCRIPT
========================= */

console.log("Portfolio JavaScript Loaded Successfully");

/* =========================
   SELECT DOM ELEMENTS
========================= */

const darkModeButton = document.getElementById("dark-mode-button");
const contactForm = document.querySelector(".contact-form");
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const userMessage = document.getElementById("user-message");
const skillItems = document.querySelectorAll(".skill-item");
const projectCards = document.querySelectorAll(".project-card");

/* =========================
   REUSABLE FUNCTIONS
========================= */

// Show Error Message
function showError(input, message) {
    removeMessage(input);
    const error = document.createElement("small");
    error.className = "error-message";
    error.style.color = "red";
    error.style.display = "block";
    error.style.marginTop = "5px";
    error.textContent = message;
    input.parentElement.appendChild(error);
    input.style.borderColor = "red";
}

// Show Success Border
function showSuccess(input) {
    removeMessage(input);
    input.style.borderColor = "green";
}

// Remove Existing Messages
function removeMessage(input) {

    const existingMessage =
        input.parentElement.querySelector(".error-message");

    if (existingMessage) {
        existingMessage.remove();
    }
}

/* =========================
   FORM VALIDATION
========================= */

function validateEmail(email) {

    const emailPattern =
        /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    return emailPattern.test(email);
}

function validateForm(event) {

    event.preventDefault();

    let isValid = true;

    // NAME VALIDATION
    if (userName.value.trim() === "") {

        showError(userName, "Name is required");
        isValid = false;
    } else {
        showSuccess(userName);
    }

    // EMAIL VALIDATION
    if (!validateEmail(userEmail.value)) {

        showError(
            userEmail,
            "Enter a valid email address"
        );
        isValid = false;
    } else {
        showSuccess(userEmail);
    }

    // MESSAGE VALIDATION
    if (userMessage.value.trim().length < 10) {

        showError(
            userMessage,
            "Message must be at least 10 characters"
        );

        isValid = false;

    } else {
        showSuccess(userMessage);
    }

    // SUCCESS
    if (isValid) {

        alert("Message Sent Successfully!");

        contactForm.reset();

        // Reset border colors
        userName.style.borderColor = "";
        userEmail.style.borderColor = "";
        userMessage.style.borderColor = "";
    }
}

/* =========================
   EVENT LISTENERS
========================= */

// Form Submit
contactForm.addEventListener(
    "submit",
    validateForm
);

// Real-Time Validation
userName.addEventListener("input", () => {

    if (userName.value.trim() !== "") {
        showSuccess(userName);
    }
});

userEmail.addEventListener("input", () => {

    if (validateEmail(userEmail.value)) {
        showSuccess(userEmail);
    }
});

userMessage.addEventListener("input", () => {

    if (userMessage.value.trim().length >= 10) {
        showSuccess(userMessage);
    }
});

/* =========================
   DARK MODE TOGGLE
========================= */

function enableDarkMode() {

    document.body.classList.add("dark-mode");

    localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {

    document.body.classList.remove("dark-mode");

    localStorage.setItem("darkMode", "disabled");
}

darkModeButton.addEventListener("click", () => {

    if (
        document.body.classList.contains("dark-mode")
    ) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

// Load Saved Dark Mode
if (
    localStorage.getItem("darkMode") === "enabled"
) {
    enableDarkMode();
}
/* =========================
   INTERACTIVE FEATURE #1
   SKILL HOVER EFFECT
========================= */

skillItems.forEach((skill) => {
    skill.addEventListener("mouseover", () => {

        skill.style.transform = "scale(1.1)";
    });


    skill.addEventListener("mouseout", () => {

        skill.style.transform = "scale(1)";
    });
});

/* =========================
   INTERACTIVE FEATURE #2
   PROJECT CARD CLICK EFFECT
========================= */

projectCards.forEach((card) => {

    card.addEventListener("click", () => {

        card.style.border =
            "2px solid #8018ac";

        card.style.transition =
            "0.3s";
    });
});

/* =========================
   INTERACTIVE FEATURE #3
   DYNAMIC GREETING
========================= */

function showGreeting() {
    const currentHour =
        new Date().getHours();
    let greetingText = "";

    if (currentHour < 12) {
        greetingText = "Good Morning ☀️";
    } else if (currentHour < 18) {
        greetingText = "Good Afternoon 🌤️";
    } else {

        greetingText = "Good Evening 🌙";
    }

    const greeting = document.createElement("h2");

    greeting.textContent = greetingText;
    greeting.style.textAlign = "center";
    greeting.style.marginBottom = "40px";
    greeting.style.marginTop = "20px";
    greeting.style.color = "#8018ac";

    const aboutSection =
        document.getElementById("about-section");
    aboutSection.before(greeting);
}

showGreeting();

/* =========================
   SMOOTH SCROLL EFFECT
========================= */

const navLinks =
    document.querySelectorAll(
        '.navigation-item a'
    );

navLinks.forEach((link) => {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const targetId =
            this.getAttribute("href");

        const targetSection =
            document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});