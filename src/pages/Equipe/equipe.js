// Seleciona todos os membros da equipe
const teamMembers = document.querySelectorAll('.team-member');
const overlay = document.getElementById('overlay');
const overlayContent = document.querySelector('.overlay-content');
const overlayImg = document.getElementById('overlayImg');
const overlayName = document.getElementById('overlayName');
const overlayRole = document.getElementById('overlayRole');
const overlayDescription = document.getElementById('overlayDescription');
const closeBtn = document.getElementById('closeBtn');


// Função para abrir o modal com animação suave
teamMembers.forEach(member => {
  member.addEventListener('click', () => {
    // Define os dados do membro selecionado no modal
    overlayImg.src = member.getAttribute('data-img');
    overlayName.textContent = member.getAttribute('data-name');
    overlayRole.textContent = member.getAttribute('data-role');
    overlayDescription.textContent = member.getAttribute('data-description');

    // Exibe o overlay com um atraso para a animação
    overlay.classList.add('active');
    
    // Adiciona uma pequena animação de crescimento suave ao conteúdo do modal
    setTimeout(() => {
      overlayContent.style.transform = 'scale(1)';
      overlayContent.style.opacity = '1';
    }, 100); // Um pequeno delay para suavizar a transição
  });
});

// Função para fechar o modal com animação suave
closeBtn.addEventListener('click', () => {
  // Primeiro reduz o conteúdo antes de fechar o modal
  overlayContent.style.transform = 'scale(0.9)';
  overlayContent.style.opacity = '0';

  // Depois de um pequeno atraso, fecha o overlay completamente
  setTimeout(() => {
    overlay.classList.remove('active');
  }, 300); // Tempo suficiente para a animação ser concluída
});

// Fecha o modal ao clicar fora do conteúdo com animação suave
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlayContent.style.transform = "scale(0.9)";
    overlayContent.style.opacity = "0";

    setTimeout(() => {
      overlay.classList.remove("active");
    }, 300);
  }
});