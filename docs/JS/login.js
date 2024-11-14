var  email = document.querySelector('#em')
var password = document.querySelector('#pass')


function login(){
    let insertedEmail =  email.value
    let insertedPassword = password.value
    console.log(insertedEmail)
    console.log(insertedPassword)

    if(insertedEmail == 'admin@gmail.com' && insertedPassword == '1234'){

        window.location.replace('//gab1203.github.io/Forum/')
    }else{
        alert('Email ou senha incorreto!')
    }

}