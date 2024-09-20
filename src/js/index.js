// Função para redirecionar para a URL especificada no atributo data-url do card clicado
function handleCardClick(event) {
  const card = event.currentTarget;
  const screenWidth = window.innerWidth;

  // Redirecionar automaticamente se a tela for maior que 768px
  if (screenWidth > 768) {
    const url = card.getAttribute("data-url");
    if (url) {
      window.location.href = url;
    }
  }
}

// Função para redirecionar ao clicar no botão em dispositivos móveis
function handleButtonClick(event) {
  event.stopPropagation(); // Impede que o clique no botão acione o evento do card
  const button = event.currentTarget;
  const card = button.closest("section");
  const url = card.getAttribute("data-url");

  if (url) {
    window.location.href = url;
  }
}

// Adiciona os event listeners aos cards e botões
function setupCardRedirects() {
  const cards = document.querySelectorAll("section");
  const buttons = document.querySelectorAll(".pages-link");

  cards.forEach((card) => {
    card.addEventListener("click", handleCardClick);
  });

  buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });
}

// Inicializa a configuração dos redirecionamentos quando o DOM estiver completamente carregado
document.addEventListener("DOMContentLoaded", setupCardRedirects);
