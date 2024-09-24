// Seleciona o modal
const modal = document.getElementById("infoModal");
const compoundName = document.getElementById("compoundName");
const compoundType = document.getElementById("compoundType");
const compoundState = document.querySelector(".modal > p"); // O parágrafo no modal para o estado do composto

// Função para abrir o modal
function openModal(name, type) {
  compoundName.textContent = name;
  compoundType.textContent = type;
  modal.classList.add("show"); // Adiciona a classe para animação
  modal.style.display = "block";
}

// Função que adiciona os eventos para compostos apenas em telas menores que 769px
function applyModalBehavior() {
  // Remove os event listeners existentes para evitar duplicação
  const compounds = document.querySelectorAll(".compound");
  compounds.forEach((compound) => {
    compound.removeEventListener("click", handleCompoundClick);
  });

  if (window.innerWidth < 769) {
    compounds.forEach((compound) => {
      compound.addEventListener("click", handleCompoundClick);
    });
  }
}

// Função de clique nos compostos
function handleCompoundClick() {
  const name = this.getAttribute("data-name");
  const type = this.getAttribute("data-type");
  const state = this.getAttribute("data-state"); // Pega o estado diretamente do atributo

  // Abre o modal com as informações do composto
  openModal(name, type);

  // Calcula a posição do modal acima do composto
  const rect = this.getBoundingClientRect();
  const modalHeight = modal.offsetHeight; // Altura do modal
  const modalWidth = modal.offsetWidth; // Largura do modal
  const offset = 10; // Espaçamento acima do elemento

  // Define a posição do modal
  const centerX = rect.left + rect.width / 2 - modalWidth / 2; // Centraliza horizontalmente
  let modalTop = rect.top + window.scrollY - modalHeight - offset; // Posição vertical inicial

  // Verifica se o modal ultrapassa o topo da janela
  if (modalTop < 0) {
    modalTop = rect.bottom + window.scrollY + offset; // Mova o modal para baixo do elemento
  }

  // Ajusta a posição horizontal se o modal ultrapassa as bordas da tela
  if (centerX < 0) {
    modal.style.left = "0px"; // Ajusta para o lado esquerdo da tela
  } else if (centerX + modalWidth > window.innerWidth) {
    modal.style.left = `${window.innerWidth - modalWidth}px`; // Ajusta para o lado direito da tela
  } else {
    modal.style.left = `${centerX + window.scrollX}px`; // Ajusta a posição horizontal normal
  }

  modal.style.top = `${modalTop}px`; // Ajusta a posição vertical
}

// Fecha o modal quando o usuário clica no "x"
const span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.classList.remove("show"); // Remove a classe da animação
  setTimeout(() => (modal.style.display = "none"), 300); // Aguarda a animação terminar antes de esconder
  compoundState.classList.remove("solid", "aqueous");
};

// Fecha o modal quando o usuário clica fora do modal
window.onclick = function (event) {
  if (event.target === modal) {
    modal.classList.remove("show"); // Remove a classe da animação
    setTimeout(() => (modal.style.display = "none"), 300); // Aguarda a animação terminar antes de esconder
  }
};

// Executa a função quando a página é carregada e sempre que a janela é redimensionada
window.addEventListener("load", applyModalBehavior);
window.addEventListener("resize", applyModalBehavior);
