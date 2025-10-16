function cadastrar() {
  const nome = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("password1").value.trim();
  const confirmarSenha = document.getElementById("password").value.trim();
  const mensagem = document.getElementById("mensagem");

  // Validação dos campos
  if (nome === "" || email === "" || senha === "" || confirmarSenha === "") {
    mensagem.textContent = "Por favor, preencha todos os campos!";
    mensagem.style.color = "red";
    return;
  }

  // Verificar se as senhas são iguais
  if (senha !== confirmarSenha) {
    mensagem.textContent = "As senhas não coincidem!";
    mensagem.style.color = "red";
    return;
  }

  // Recuperar lista de usuários do localStorage
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Verificar se já existe usuário com o mesmo email
  const usuarioExistente = usuarios.find(user => user.email === email);
  if (usuarioExistente) {
    mensagem.textContent = "Este e-mail já está cadastrado!";
    mensagem.style.color = "red";
    return;
  }

  // Criar novo usuário
  const novoUsuario = {
    nome: nome,
    email: email,
    senha: senha
  };

  // Adicionar à lista e salvar
  usuarios.push(novoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  // Mostrar sucesso
  mensagem.textContent = "Cadastro realizado com sucesso! ✅";
  mensagem.style.color = "green";

  // Redirecionar após 2s
  setTimeout(() => {
    window.location.href = "Login.html";
  }, 2000);
}