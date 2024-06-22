let usuarios = [
  {
    name: "Jaime Zapata",
    email: "correo@correo.com",
    password: "123456",
    phone: "3152001282",
  },
];
let usuario = {};

function createUser() {
  let name = document.querySelector("#r-name").value;
  let email = document.querySelector("#r-email").value;
  let password = document.querySelector("#r-password").value;
  let phone = document.querySelector("#r-phone").value;
  usuario = {
    name,
    email,
    password,
    phone,
  };
  console.log(usuario);
  usuarios.push(usuario);
  console.log(usuarios);
}

function searchUser() {
  let email = document.querySelector("#l-email").value;
  let password = document.querySelector("#l-password").value;
  let auth = usuarios.some(
    (element) => email === element.email && password === element.password
  );
  return auth;
}

function login() {
  if (searchUser()) {
    console.log("Inicio de sesión correcto..");
  } else {
    console.log("Credenciales incorrectas...");
  }
}

document.getElementById("createUser").addEventListener("click", createUser);
document.getElementById("login").addEventListener("click", login);

function showFormRegister() {
  document.getElementById("formLogin").style.display = "none";
  document.getElementById("formRegister").style.display = "block";
}
function showFormLogin() {
  document.getElementById("formLogin").style.display = "block";
  document.getElementById("formRegister").style.display = "none";
}
document
  .getElementById("showFormLogin")
  .addEventListener("click", showFormLogin);
document
  .getElementById("showFormRegister")
  .addEventListener("click", showFormRegister);

let inputs = document.querySelectorAll("input");
// let inputs = document.getElementsByTagName("input");
inputs.forEach((elemet) => {
  elemet.addEventListener("keyup", validarFormulario);
  // elemet.addEventListener("blur", validarFormulario);
});

function validarFormulario(e) {
  switch (e.target.name) {
    case "l-email":
      console.log("Input de correo de login");
      break;
  }
}
