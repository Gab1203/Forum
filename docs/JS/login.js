var  email = document.querySelector('#em')
var password = document.querySelector('#pass')



function login(event){
    event.preventDefault()
    let insertedEmail =  email.value
    let insertedPassword = password.value
    console.log(insertedEmail)
    console.log(insertedPassword)

    if(insertedEmail === mail.value && insertedPassword === senha.value){

        window.location.replace('index.html')
    }else{
        alert('Email ou senha incorreto!')
    }

}

function register(event){
    event.preventDefault()
   
    var mail = document.getElementById('')
    var senha = document.getElementById('')
    var nome = document.getElementById('')

    alert('Cadastro realizado!')
}