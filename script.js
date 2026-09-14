const serviceButton = document.getElementById("serviceButton");
const colorButton = document.getElementById("colorButton");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

function scrollToServices() {
    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });
}

function changeTheme() {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        colorButton.textContent = "Light Theme";
    } else {
        colorButton.textContent = "Dark Theme";
    }
}

serviceButton.addEventListener("click", scrollToServices);

colorButton.addEventListener("click", changeTheme);

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent =
        "Thanks, " + name + "! Your message has been received.";

    contactForm.reset();
});