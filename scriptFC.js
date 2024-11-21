document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Pegando os valores dos campos do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // Validação simples para garantir que todos os campos foram preenchidos
    if (name === "" || email === "" || message === "") {
        document.getElementById("response-message").textContent = "Por favor, preencha todos os campos.";
        document.getElementById("response-message").style.color = "red";
    } else {
        // Aqui você pode fazer uma requisição AJAX para enviar os dados
        // Para simplificação, apenas mostraremos uma mensagem de sucesso
        document.getElementById("response-message").textContent = "Mensagem enviada com sucesso!";
        document.getElementById("response-message").style.color = "green";
        
        // Limpando o formulário após envio
        document.getElementById("contact-form").reset();
    }
});