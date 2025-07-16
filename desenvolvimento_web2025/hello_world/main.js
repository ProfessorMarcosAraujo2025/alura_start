/* alert("Olá mundo!")  */
let nomeUsuario = "";
let novoNome = document.querySelector("#nome-usuario");

while(nomeUsuario == ""){
    nomeUsuario = prompt("Qual o seu nome?");
}

if(nomeUsuario == null){
    novoNome.textContent = "seja bem vindo."
}else{
    novoNome.textContent = nomeUsuario;
}
