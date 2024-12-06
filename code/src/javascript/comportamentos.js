// Adiciona listeners para cada botão de recarga
addButtonListener('recargaButton1', 'https://recarga.velosonet.com.br/');
addButtonListener('recargaButton2', 'https://recarga.velosonet.com.br/');
addButtonListener('recargaButton3', 'https://recarga.velosonet.com.br/');
addButtonListener('recargaButton4', 'https://recarga.velosonet.com.br/');

// Função para adicionar o listener de clique a um botão com um URL específico
function addButtonListener(buttonId, url) {
    const button = document.getElementById(buttonId);
    
    if (button) {
        button.addEventListener('click', function() {
            window.open(url, '_blank');
        });
    } else {
        console.error(`Botão com ID ${buttonId} não encontrado.`);
    }
}