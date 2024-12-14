// Funkcja zmiany trybu ciemnego/ jasnego
document.querySelector('#toggle-theme').addEventListener('click', function() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Zmiana tekstu przycisku
    const themeButton = document.querySelector('#toggle-theme');
    if (body.classList.contains('dark-mode')) {
        themeButton.textContent = '🌞 Tryb jasny';
    } else {
        themeButton.textContent = '🌙 Tryb ciemny';
    }
});




