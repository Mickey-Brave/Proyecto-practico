document.addEventListener("DOMContentLoaded", () => {
    const nameForm = document.getElementById("nameForm");
    const nameInput = document.getElementById("name");
    const greeting = document.getElementById("greeting");

    nameForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = nameInput.value.trim();
        if (name) {
            greeting.textContent = `Hello, ${name}! Welcome to the Image Gallery.`;
            nameForm.reset();
        }
    });

    console.log("Page loaded and ready!");
});