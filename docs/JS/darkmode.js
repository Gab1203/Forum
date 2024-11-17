// modo claro e escuro
const toggle = document.getElementById('mode-toggle');
const body = document.body;
const toggleText = document.getElementById('toggle-text');

// verifica preferência do usuário
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (prefersDarkScheme) {
    body.classList.add('dark-mode');
    toggle.checked = true;
    toggleText.textContent = "Escuro";
} else {
    body.classList.remove('dark-mode');
    toggle.checked = false;
    toggleText.textContent = "Claro";
}

toggle.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-mode');
        toggleText.textContent = "Escuro";
    } else {
        body.classList.remove('dark-mode');
        toggleText.textContent = "Claro";
    }
});
