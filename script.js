// Theme toggle functionality
document.querySelector('#toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const themeButton = document.querySelector('#toggle-theme');
    if (document.body.classList.contains('dark-mode')) {
        themeButton.textContent = '🌞 Tryb jasny';
    } else {
        themeButton.textContent = '🌙 Tryb ciemny';
    }
});


