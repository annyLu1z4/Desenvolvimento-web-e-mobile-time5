// Seleciona o formulário
const form = document.querySelector(".contact-form form");

// Captura o envio do formulário
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o reload da página

  // Pega valores dos campos
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const assunto = document.getElementById("assunto").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  // Valida se todos os campos foram preenchidos
  if (!nome || !email || !assunto || !mensagem) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  // Regex simples para validar e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, insira um e-mail válido!");
    return;
  }

  // Exibe mensagem de sucesso
  alert(`Obrigado, ${nome} 🌟! Sua mensagem sobre "${assunto}" foi enviada com sucesso.`);

  // Limpa o formulário
  form.reset();
});