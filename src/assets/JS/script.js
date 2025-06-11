document.addEventListener('DOMContentLoaded', () => {
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
            // Get qualities from data-player-qualities attribute, split by comma, and trim whitespace
            const playerQualities = button.dataset.playerQualities ? button.dataset.playerQualities.split(',').map(q => q.trim()) : [];

            modalPlayerName.textContent = playerName;
            modalPlayerPosition.textContent = playerPosition;
            modalPlayerPhoto.src = playerPhoto;
            modalPlayerPhoto.alt = `Foto de ${playerName}`;

            // Clear previous qualities
            modalPlayerQualities.innerHTML = '';
            // Add new qualities
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

            playerModal.style.display = 'flex'; // Show the modal
        });
    });

    // Event to close the modal when clicking the 'x' button
    closeModalButton.addEventListener('click', () => {
        playerModal.style.display = 'none';
    });

    // Event to close the modal when clicking outside the modal content
    playerModal.addEventListener('click', (event) => {
        if (event.target === playerModal) {
            playerModal.style.display = 'none';
        }
    });
});