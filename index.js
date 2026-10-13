document.getElementById("formDoacao").addEventListener("submit", async function(e) {
    e.preventDefault();

    const dados = {
        nome: document.getElementById("nome").value,
        item: document.getElementById("item").value,
        quantidade: document.getElementById("quantidade").value,
        contato: document.getElementById("contato").value
    };

    // Exemplo de envio para backend (Node/PHP/Python)
    const resposta = await fetch("/api/doacoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
    });

    const resultado = await resposta.json();
    document.getElementById("mensagem").innerText = resultado.mensagem;
});
