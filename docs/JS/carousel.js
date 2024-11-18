// const gap = 16;

// const carousel = document.getElementById("carousel"),
//   content = document.getElementById("content"),
//   next = document.getElementById("next"),
//   prev = document.getElementById("prev");

// next.addEventListener("click", e => {
//   carousel.scrollBy(width + gap, 0);
//   if (carousel.scrollWidth !== 0) {
//     prev.style.display = "flex";
//   }
//   if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
//     next.style.display = "none";
//   }
// });
// prev.addEventListener("click", e => {
//   carousel.scrollBy(-(width + gap), 0);
//   if (carousel.scrollLeft - width - gap <= 0) {
//     prev.style.display = "none";
//   }
//   if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
//     next.style.display = "flex";
//   }
// });

// let width = carousel.offsetWidth;
// window.addEventListener("resize", e => (width = carousel.offsetWidth));
const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

let width = carousel.offsetWidth;  // Definindo a largura inicial

// Atualizando a largura do carrossel ao redimensionar a janela
window.addEventListener("resize", () => {
  width = carousel.offsetWidth;
});

// Função para atualizar os botões de navegação
function updateNavButtons() {
  if (carousel.scrollLeft <= 0) {
    prev.style.display = "none";  // Esconder o botão "anterior" no início
  } else {
    prev.style.display = "flex";  // Mostrar o botão "anterior"
  }

  if (carousel.scrollLeft + width >= content.scrollWidth) {
    next.style.display = "none";  // Esconder o botão "próximo" no final
  } else {
    next.style.display = "flex";  // Mostrar o botão "próximo"
  }
}

// Navegação para a direita
next.addEventListener("click", () => {
  carousel.scrollBy(width + 20, 0);  // Ajuste a rolagem à direita
  updateNavButtons();  // Atualiza os botões após a rolagem
});

// Navegação para a esquerda
prev.addEventListener("click", () => {
  carousel.scrollBy(-(width + 20), 0);  // Ajuste a rolagem à esquerda
  updateNavButtons();  // Atualiza os botões após a rolagem
});

// Inicializa os botões de navegação
updateNavButtons();
