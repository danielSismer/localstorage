const email = document.getElementById("email")
const password = document.getElementById("password")
const logar = document.getElementById("logar-button");
const acessos  = document.getElementById("numero-acessos") ;

const emailStorage = localStorage.getItem("email")
const passwordStorage = localStorage.getItem("password");

logar.addEventListener('click', () => {

    if (emailStorage == email.value && passwordStorage === password.value) {
        alert("Bem vindo!!!")
        acessos.innerHTML = acessos.innerHTML + 1;
    } else {
        alert("Usuário não encontrado")
    }

})
