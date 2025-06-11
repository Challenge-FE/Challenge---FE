document.addEventListener('DOMContentLoaded', () => {
    // Código existente para os modais de jogadoras
    const viewProfileButtons = document.querySelectorAll('.view-profile-btn');
    const playerModal = document.getElementById('player-modal');
    const closeModalButton = document.querySelector('.close-modal');
    const modalPlayerName = document.getElementById('modal-player-name');
    const modalPlayerPosition = document.getElementById('modal-player-position');
    const modalPlayerPhoto = document.getElementById('modal-player-photo');
    const modalPlayerQualities = document.getElementById('modal-player-qualities');

    viewProfileButtons.forEach(button => {
        button.addEventListener('click', () => {
            const playerName = button.dataset.playerName;
            const playerPosition = button.dataset.playerPosition;
            const playerPhoto = button.dataset.playerPhoto;
            const playerQualities = button.dataset.playerQualities ? button.dataset.playerQualities.split(',').map(q => q.trim()) : [];

            modalPlayerName.textContent = playerName;
            modalPlayerPosition.textContent = playerPosition;
            modalPlayerPhoto.src = playerPhoto;
            modalPlayerPhoto.alt = `Foto de ${playerName}`;

            modalPlayerQualities.innerHTML = '';
            if (playerQualities.length > 0) {
                playerQualities.forEach(quality => {
                    const listItem = document.createElement('li');
                    listItem.textContent = quality;
                    modalPlayerQualities.appendChild(listItem);
                });
            } else {
                const listItem = document.createElement('li');
                listItem.textContent = 'Nenhuma qualidade listada.';
                modalPlayerQualities.appendChild(listItem);
            }

            playerModal.style.display = 'flex';
        });
    });

    closeModalButton.addEventListener('click', () => {
        playerModal.style.display = 'none';
    });

    playerModal.addEventListener('click', (event) => {
        if (event.target === playerModal) {
            playerModal.style.display = 'none';
        }
    });

    // Código existente para cadastro de jogadoras
    const playerSignupForm = document.querySelector('.player-signup-section form');
    if (playerSignupForm) {
        playerSignupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const successMessage = document.getElementById('success-message');
            if (successMessage) successMessage.style.display = 'block';
            
            this.reset();
            
            setTimeout(() => {
                if (successMessage) successMessage.style.display = 'none';
            }, 5000);
        });
    }

    // Código existente para o modal de sucesso
    const successModal = document.getElementById('success-modal');
    if (successModal) {
        document.querySelector('#success-modal .close-modal')?.addEventListener('click', function() {
            successModal.style.display = 'none';
        });

        successModal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    }

    

    // Novo código para cadastro de clubes
    const clubRegistrationForm = document.getElementById('club-registration-form');
    if (clubRegistrationForm) {
        clubRegistrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
        });
    }
});


    // Seleciona o formulário de cadastro de clubes
    const clubForm = document.getElementById('club-registration-form');
    
    if (clubForm) {
        clubForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simula o processamento (substitua por uma chamada AJAX real na implementação)
            setTimeout(() => {
                // Mostra o modal de sucesso
                const successModal = document.getElementById('success-modal');
                if (successModal) {
                    successModal.style.display = 'flex';
                    
                    // Configura o fechamento do modal
                    const closeModal = successModal.querySelector('.close-modal');
                    if (closeModal) {
                        closeModal.addEventListener('click', () => {
                            successModal.style.display = 'none';
                        });
                    }
                    
                    // Fecha o modal ao clicar fora ou no botão "Entendido"
                    successModal.addEventListener('click', (event) => {
                        if (event.target === successModal || event.target.classList.contains('cta-button')) {
                            successModal.style.display = 'none';
                        }
                    });
                }
                
                // Limpa o formulário
                this.reset();
                
                // Rola a página para o topo do formulário (opcional)
                this.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
            }, 800); // Tempo simulado de processamento
        });
    }

    // Fechar o modal quando clicar no X (redundância para garantir funcionalidade)
    const closeModalButtons = document.querySelectorAll('.close-modal');
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                modal.style.display = 'none';
            });
        });
    });

    // Fechar o modal quando clicar fora (redundância para garantir funcionalidade)
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

 document.getElementById('poll-form').addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o envio padrão do formulário
            
            // Verifica se algum radio button foi selecionado
            const selectedOption = document.querySelector('input[name="poll"]:checked');
            
            if (selectedOption) {
                // Exibe a mensagem de sucesso
                const messageElement = document.getElementById('vote-message');
                messageElement.textContent = "Seu voto foi cadastrado com sucesso!";
                messageElement.style.display = 'block';
                
                // Opcional: Desabilita todos os radio buttons após o voto
                const radioButtons = document.querySelectorAll('input[name="poll"]');
                radioButtons.forEach(radio => {
                    radio.disabled = true;
                });
                
                // Opcional: Desabilita o botão de votar
                document.querySelector('#poll-form button').disabled = true;
            } else {
                alert("Por favor, selecione uma opção antes de votar.");
            }
        });
