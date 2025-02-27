// Validação do formulário
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Validação básica
    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Simulação de envio (substitua por uma requisição real)
    console.log("Formulário enviado:", { nome, email, mensagem });
    alert("Mensagem enviada com sucesso!");

    // Limpa o formulário após o envio
    form.reset();
});