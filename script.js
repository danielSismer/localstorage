const email = document.getElementById("email")
const password = document.getElementById("password")
const logar = document.getElementById("logar-button");
const acessos  = document.getElementById("numero-acessos") ;
const emailStorage = localStorage.getItem("email")
const passwordStorage = localStorage.getItem("password");

logar.addEventListener('click', () => {

    if (emailStorage == email.value && passwordStorage === password.value) {
        alert("Bem vindo!!!")
        acessos.innerHTML = parseInt(acessos.innerHTML) + 1;
    } else {
        alert("Usuário não encontrado")
    }

})

const buttonMode = document.getElementById("btn-mode");
let dark;

buttonMode.addEventListener("click", () => {
    dark = !dark;

    if (dark) {

        document.body.style.backgroundColor = "white";

        document.querySelector("#header").style.background = 
            "linear-gradient(to bottom, #5a3d34, #3a2822)";
        document.querySelector("#header").style.color = "#f3e2d9";

        document.querySelector("#Login").style.background =
            "linear-gradient(to bottom, #5a3d34, #3a2822)";
        document.querySelector("#Login h2").style.color = "wheat";

        document.querySelector("#acesso").style.background = 
            "linear-gradient(to bottom, #5a3d34, #3a2822)";
        document.querySelector("#acesso").style.color = "#f3e2d9";

        document.querySelectorAll("label").forEach(l => l.style.color = "#e8d2b8");

        buttonMode.style.backgroundColor = "#8b6a5b";

    } else {

        document.body.style.backgroundColor = "white";

        document.querySelector("#header").style.background = 
            "linear-gradient(to bottom, #a47864, #6b4e42)";
        document.querySelector("#header").style.color = "#f3e2d9";

        document.querySelector("#Login").style.background =
            "linear-gradient(to bottom, #a47864, #6b4e42)";
        document.querySelector("#Login h2").style.color = "wheat";

        document.querySelector("#acesso").style.background =
            "linear-gradient(to bottom, #a47864, #6b4e42)";
        document.querySelector("#acesso").style.color = "aliceblue";

        document.querySelectorAll("label").forEach(l => l.style.color = "wheat");

        buttonMode.style.backgroundColor = "#d6b2a1";
    }

});

