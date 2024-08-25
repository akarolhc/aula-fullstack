document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("meuForm");
  const email = document.getElementById("mail");
  const nome = document.getElementById('nome');
  const senha = document.getElementById('senha');
  const error = document.querySelector(".error");

  form.addEventListener("submit", function (event) {
      error.innerHTML = "";
      let isValid = true;

      if (!email.validity.valid) {
          error.innerHTML += "Insira um email válido";
          error.className = "error active";
          isValid = false;
      }

      if (nome.value.trim() === "") {
          error.innerHTML += "Insira um nome válido";
          error.className = "error active";
          isValid = false;
      }

      if (senha.value.length < 6) {
          error.innerHTML += "A senha deve ter pelo menos 6 caracteres";
          error.className = "error active";
          isValid = false;
      }

      if (!isValid) {
          event.preventDefault();
      }
  });
});
