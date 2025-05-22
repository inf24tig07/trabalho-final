function verificarFormulario() {
    
    const nome = document.getElementById("fname").value.trim();
    const email = document.getElementById("femail").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const checkboxes = document.querySelectorAll('input[name="metodo"]:checked');

    
    if (nome !== "" && email !== "" && mensagem !== "" && checkboxes.length > 0) {
        
        alert("Obrigado pela sua resposta!");
        document.getElementById("fname").value = "";
        document.getElementById("femail").value = "";
        document.getElementById("mensagem").value = "";
        document.getElementById("contador").textContent = "0 / 200 palavras";
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });

    } else {
        
        alert("Por favor preencha todos os campos!");
    }
}


function contarpalavras() {
    
    const mensagem = document.getElementById("mensagem");
    const contador = document.getElementById("contador");

    // Adiciona um evento que reage sempre que o utilizador escreve na caixa de mensagem
    mensagem.addEventListener("input", () => {
        // Divide o texto em palavras, ignorando espaços vazios
        const palavras = mensagem.value.trim().split(/\s+/).filter(p => p.length > 0);

        // Se ultrapassar 200 palavras → corta o texto para as primeiras 200 palavras
        if (palavras.length > 200) {
            mensagem.value = palavras.slice(0, 200).join(' ');
        }

        // Atualiza o texto do contador (mostra número actual de palavras / 200 máximo)
        contador.textContent = `${Math.min(palavras.length, 200)} / 200 palavras`;
    });
}







