// Zmiana motywu jasny/ciemny
document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const themeToggleText = document.getElementById('toggle-theme');
    themeToggleText.textContent = document.body.classList.contains('dark-theme') 
        ? '☀️ Tryb jasny' 
        : '🌙 Tryb ciemny';
});
