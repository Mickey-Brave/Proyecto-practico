document.addEventListener("DOMContentLoaded", () => {
    const nameForm = document.getElementById("nameForm");
    const nameInput = document.getElementById("name");
    const greeting = document.getElementById("greeting");
    const formContainer = document.querySelector(".form_container"); 

    nameForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = nameInput.value.trim();
        if (name) {
            greeting.textContent = `Hola, ${name}! Bienvenido a la Galeria de Imagenes.`;
            nameForm.reset();
            formContainer.style.display = "none";
        }
    });

    console.log("Page loaded and ready!");
});