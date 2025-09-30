document.querySelectorAll(".dark-toggle").forEach((darkToggle) => {
    darkToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const isDark = document.body.classList.contains("dark");

        // Atualiza todos os ícones em todos os botões
        document.querySelectorAll(".dark-toggle i").forEach((icon) => {
            icon.className = isDark ? "fas fa-sun" : "fas fa-moon";
        });

        localStorage.setItem("darkMode", isDark);
    });
});

// Aplica o modo escuro salvo no localStorage ao carregar a página
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
    document.querySelectorAll(".dark-toggle i").forEach((icon) => {
        icon.className = "fas fa-sun";
    });
}
