// Função para redirecionar para a URL especificada no atributo data-url do card clicado
function handleCardClick(event) {
  const card = event.currentTarget;
  const url = card.getAttribute("data-url");

  if (url) {
    window.location.href = url;
  }
}

// Adiciona o event listener a todos os cards na página
function setupCardRedirects() {
  const cards = document.querySelectorAll("section");

  cards.forEach((card) => {
    card.addEventListener("click", handleCardClick);
  });
}

// Inicializa a configuração dos redirecionamentos quando o DOM estiver completamente carregado
document.addEventListener("DOMContentLoaded", setupCardRedirects);
