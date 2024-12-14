// Tryb ciemny/jasny
const toggleThemeButton = document.getElementById("toggle-theme");

toggleThemeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleThemeButton.textContent = "☀️ Tryb jasny";
    } else {
        toggleThemeButton.textContent = "🌙 Tryb ciemny";
    }
});
