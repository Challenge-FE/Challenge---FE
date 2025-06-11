document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica do Modal para jogadoras.html --- 
    // Array com os dados das jogadoras
    const players = [ 
        { 
            id: 1, 
            name: "Ana Silva", 
            position: "Atacante", 
            // Caminho da imagem corrigido (relativo à localização de script.js em src/JS/)
            photo: "../src/assets/imgs/player1.png", 
            bio: "Finalização precisa e velocidade são minhas maiores qualidades. Buscando um novo desafio.", 
            qualities: ["Velocidade", "Finalização", "Drible", "Posicionamento"] 
        }, 
        { 
            id: 2, 
            name: "Beatriz Costa", 
            position: "Meio-Campo", 
            // Caminho da imagem corrigido
            photo: "..//src/assets/imgs/player2.png", 
            bio: "Visão de jogo e passes decisivos. Experiência em campeonatos estaduais e nacionais.", 
            qualities: ["Visão de Jogo", "Passe Longo", "Controle de Bola", "Inteligência Tática"] 
        }, 
        { 
            id: 3, 
            name: "Carla Mendes", 
            position: "Zagueira", 
            // Caminho da imagem corrigido
            photo: "../src/assets/imgs/player3.png", 
            bio: "Liderança em campo e forte na marcação. Capitã por 3 temporadas no último clube.", 
            qualities: ["Marcação", "Liderança", "Jogo Aéreo", "Desarme"] 
        }, 
        { 
            id: 4, 
            name: "Daniela Rocha", 
            position: "Goleira", 
            // Caminho da imagem corrigido
            photo: "../src/assets/imgs/player4.png", 
            bio: "Ótimos reflexos e segurança no gol. Especialista em defender pênaltis.", 
            qualities: ["Reflexos", "Posicionamento", "Jogo com os Pés", "Defesa de Pênaltis"] 
        } 
    ]; 

    // Seleciona os elementos do modal e botões
    const modal = document.getElementById('player-modal'); 
    const viewProfileButtons = document.querySelectorAll('.view-profile-btn'); 
    const closeModalButton = document.querySelector('.close-modal'); 

    // Verifica se os elementos do modal existem na página atual (jogadoras.html)
    if (modal && viewProfileButtons.length > 0 && closeModalButton) { 
        viewProfileButtons.forEach(button => { 
            button.addEventListener('click', (e) => { 
                e.preventDefault(); // Previne o comportamento padrão do link
                const playerId = parseInt(button.dataset.playerId, 10); // Obtém o ID da jogadora do atributo data-player-id
                const player = players.find(p => p.id === playerId); // Encontra a jogadora correspondente no array
                
                if (player) { 
                    // Preenche o modal com as informações da jogadora
                    document.getElementById('modal-player-photo').src = player.photo; 
                    document.getElementById('modal-player-name').textContent = player.name; 
                    document.getElementById('modal-player-position').textContent = player.position; 
                    
                    const qualitiesList = document.getElementById('modal-player-qualities'); 
                    qualitiesList.innerHTML = ''; // Limpa as qualidades anteriores
                    // Adiciona as qualidades como itens de lista
                    player.qualities.forEach(quality => { 
                        const li = document.createElement('li'); 
                        li.textContent = quality; 
                        qualitiesList.appendChild(li); 
                    }); 
                    
                    modal.style.display = 'flex'; // Exibe o modal
                } 
            }); 
        }); 

        // Função para fechar o modal
        const closeTheModal = () => { 
            modal.style.display = 'none'; 
        } 

        // Adiciona listeners para fechar o modal
        closeModalButton.addEventListener('click', closeTheModal); 
        window.addEventListener('click', (e) => { 
            if (e.target === modal) { // Se o clique for fora do conteúdo do modal
                closeTheModal(); 
            } 
        }); 
    } 

    // --- Lógica "Leia Mais" para noticias.html --- 
    const readMoreLinks = document.querySelectorAll('.read-more'); 
    // Verifica se os links "Leia Mais" existem na página atual (noticias.html)
    if (readMoreLinks.length > 0) {
        readMoreLinks.forEach(link => { 
            link.addEventListener('click', (e) => { 
                e.preventDefault(); // Previne o comportamento padrão do link
                const content = link.closest('.news-content'); // Encontra o elemento pai do conteúdo da notícia
                
                content.classList.toggle('expanded'); // Alterna a classe 'expanded'
                
                // Altera o texto do botão "Leia Mais"/"Leia Menos"
                if(content.classList.contains('expanded')) { 
                    link.textContent = 'Leia menos'; 
                } else { 
                    link.textContent = 'Leia mais'; 
                } 
            }); 
        }); 
    }

    // --- Lógica da Enquete para comunidade.html --- 
    const pollForm = document.getElementById('poll-form'); 
    // Verifica se o formulário da enquete existe na página atual (comunidade.html)
    if (pollForm) { 
        pollForm.addEventListener('submit', (e) => { 
            e.preventDefault(); // Previne o envio padrão do formulário
            const voteMessage = document.getElementById('vote-message'); 
            const submitButton = pollForm.querySelector('button[type="submit"]'); 
            const radioButtons = pollForm.querySelectorAll('input[type="radio"]'); 

            const selectedOption = pollForm.querySelector('input[name="poll"]:checked'); 

            if (!selectedOption) { 
                alert('Por favor, selecione uma opção para votar.'); // Alerta se nenhuma opção for selecionada
                return; 
            } 

            // Exibe mensagem de sucesso e desabilita o formulário
            if (voteMessage && submitButton) { 
                voteMessage.textContent = 'Seu voto foi registrado com sucesso!'; 
                voteMessage.style.display = 'block'; 
                submitButton.disabled = true; // Desabilita o botão de enviar
                submitButton.style.backgroundColor = '#aaa'; // Altera o estilo do botão
                submitButton.style.cursor = 'not-allowed'; // Altera o cursor do botão
                radioButtons.forEach(radio => radio.disabled = true); // Desabilita as opções de rádio
            } 
        }); 
    } 
});