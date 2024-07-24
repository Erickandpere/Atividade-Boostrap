
//localStorage.clear() - Apagar dados

const campoLogin = document.getElementById("username");
const campoSenha = document.getElementById("password");
const campoNovoLogin = document.getElementById("newusername");
const campoNovaSenha = document.getElementById("newpassword");
const campoRepSenha = document.getElementById("reppassword");
const modalTextoDois = document.getElementById("modalTexto");
const modalFechar = document.getElementById("FecharModal");

function logar(){
    let login = campoLogin.value;
    let senha = campoSenha.value; 
    let mensagem = "Usuário ou senha incorreta!";
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));
if (usuarios == null) {
    mensagem = "Nenhum usuário cadastrado até o momento";
} else {
    for (let usuario of usuarios) {
        if (usuario.login == login && usuario.senha == senha) {
            mensagem = "Parabéns, você logou!";
            localStorage.setItem("logado", JSON.stringify(usuario));
            
            break;
        }
    }
    
}
modal(mensagem)
}
function cadastrar(){
    if (campoNovaSenha.value == campoRepSenha.value) {
        const usuario = {
            login: campoNovoLogin.value,
            senha: campoNovaSenha.value
        };
        let usuarios = JSON.parse(localStorage.getItem("usuarios"));
        if (usuarios == null) {
            usuarios = [];
        }
       if(existe(usuario,usuarios)){
        modal("Esse login já foi cadastrado, realize um cadastro com nome diferente")
       }else{
    
        usuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        modal("Usuário cadastrado com sucesso!");   
       }
    } else{
        modal("As senhas são diferentes!");
    }
    
}
function existe(usuario,banco){
    for(let verificado of banco){
        if(verificado.login == usuario.login){
        return true;
    }
 }
 return false;
}

function modal(modalTexto){
    modalTextoDois.innerHTML=modalTexto
    document.getElementById("modalContainer").style.display="block"

}
function fechar(){
document.getElementById("modalContainer").style.display="none"
}