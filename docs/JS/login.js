// var email = document.querySelector('#em')
// var password = document.querySelector('#pass')

// var mail = "usuario@exemplo.com"
// var senha = "12345"

// function login(event){
//     event.preventDefault()
//     let insertedEmail =  email.value
//     let insertedPassword = password.value
//     console.log(insertedEmail)
//     console.log(insertedPassword)

//     if(insertedEmail === mail && insertedPassword === senha){
//         window.location.replace('index.html');
//     } else {
//         alert('Email ou senha incorreto!');
//     }

// }

// function register(event){
//     event.preventDefault()
   
//     var mail = document.getElementById('mail')
//     var senha = document.getElementById('senha')
//     var nome = document.getElementById('nome')

//     alert('Cadastro realizado!')
// }

var email = document.querySelector('#em');
var password = document.querySelector('#pass');


var mail = "usuario@exemplo.com";
var senha = "12345";


function login(event) {
    
    event.preventDefault();

    
    let insertedEmail = email.value.trim();
    let insertedPassword = password.value.trim();

    
    console.log(insertedEmail);
    console.log(insertedPassword);

    if (insertedEmail === mail && insertedPassword === senha) {
        window.location.replace('index.html');
    } else {
        alert('Email ou senha incorreto!');
    }
}

document.getElementById('loginBtn').addEventListener('click', login);
