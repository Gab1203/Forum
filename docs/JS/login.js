var  email = document.querySelector('#em')
var password = document.querySelector('#pass')


function login(event){
    event.preventDefault()
    let insertedEmail =  email.value
    let insertedPassword = password.value
    console.log(insertedEmail)
    console.log(insertedPassword)

    if(insertedEmail === 'admin@gmail.com' && insertedPassword === '1234'){

        window.location.replace('index.html')
    }else{
        alert('Email ou senha incorreto!')
    }

}