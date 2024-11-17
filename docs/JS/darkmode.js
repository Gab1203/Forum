// modo claro e escuro
const toggle = document.getElementById('mode-toggle');
const body = document.body;
const toggleText = document.getElementById('toggle-text');

// verifica a preferência do usuário ao carregar a página
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (prefersDarkScheme) {
    body.classList.add('dark-mode');
    toggle.checked = true;
    toggleText.textContent = "DARK MODE";
} else {
    body.classList.remove('dark-mode');
    toggle.checked = false;
    toggleText.textContent = "WHITE MODE";
}

toggle.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-mode');
        toggleText.textContent = "DARK MODE";
    } else {
        body.classList.remove('dark-mode');
        toggleText.textContent = "WHITE MODE";
    }
});
