import { create } from "domain";


export class fire {

    name = document.addEventListener('nome');
    email = document.addEventListener('email');
    senha = document.addEventListener('senha');
    urlImagem = document.addEventListener('urlImagem');
     

    

} 

addbutton.addEventListener ('click', function (){

    create(name.value, email.value, senha.value, urlImagem.value)

});

function create (name, email, senha, urlImagem) {

    var data = {
        name: name,
        email: email,
        senha: senha,
        urlImagem
    };

        return firebase.database().ref().child(users).push(data);

}