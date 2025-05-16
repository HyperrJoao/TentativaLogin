function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirm-password").value.trim();

  if (!username || !password || !confirmPassword) {
    alert("Preencha todos os campos.");
    return;
  }

  if (password !== confirmPassword) {
    alert("As senhas não coincidem!");
    return;
  }

  // Simula login
  document.getElementById("login-container").classList.add("hidden");
  document.getElementById("main-site").classList.remove("hidden");
}

function logout() {
  document.getElementById("main-site").classList.add("hidden");
  document.getElementById("login-container").classList.remove("hidden");

  // Limpa os campos
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("confirm-password").value = "";
}
