const darkToggle = document.getElementById("dark-toggle");
if (darkToggle) {
    darkToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const isDark = document.body.classList.contains("dark");

        const icon = darkToggle.querySelector('i');
        if (icon) {
            icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        }
        localStorage.setItem("darkMode", isDark);
    });

    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark");
        darkToggle.querySelector('i').className = 'fas fa-sun';
    }
}