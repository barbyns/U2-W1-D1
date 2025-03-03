const start = function() {
    // Imposta l'anno corrente nel footer
    const span = document.getElementById("year");
    if (span) {
        span.innerText = new Date().getFullYear();
    }

    // Aggiunge un listener per cambiare il colore dei link al passaggio del mouse
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("mouseover", function() {
            this.style.color = "yellow";
        });
        link.addEventListener("mouseout", function() {
            this.style.color = "white";
        });
    });

    // Toggle del menu su mobile
    const nav = document.querySelector("nav ul");
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "☰ Menu";
    toggleButton.classList.add("menu-toggle");
    document.querySelector("header").insertBefore(toggleButton, nav);

    toggleButton.addEventListener("click", function() {
        nav.classList.toggle("active");
    });
};

// Avvia lo script quando la pagina è completamente caricata
window.addEventListener("DOMContentLoaded", start);
