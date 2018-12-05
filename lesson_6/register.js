var inputName = document.querySelector ( "#name" )
var email = document.querySelector ( "#email" )
var password = document.querySelector ( "#password" )
var btnReg = document.querySelector ( "#registration" )
var btnSignIn = document.querySelector ( "#signIn" )
var form = document.querySelector ( "#form_fields" )
var btnSubmit = document.querySelector ( "#submit" )
var title = document.querySelector ( "#title" )
title.innerHTML = "BOOK YOUR PLACE RIGHT NOW"


var users = []
form.style.display = "none"

function clearFields(){
    inputName.value = null
    email.value = null
    password.value = null
    form.style.display = "none"
}


function register (event){
    form.style.display = "block"   
    inputName.style.display = "block"
    title.innerHTML = "Registration"
    title.status = 0
}

function signIn (event){    
    form.style.display = "block"
    inputName.style.display = "none"  
    title.innerHTML = "Sign in"
    title.status = 1
}

function testData(){
    if(!email.value || !password.value) return
    var userKey = Sha256.hash (email.value + password.value)
    var presence = users.some(function(x){
                    return x.key === userKey
                })
    
    if(title.status === 0){
        if(!presence){
            console.log(inputName.value)
            users.push({
                key: userKey,
                name: inputName.value,
                email: email.value
            })
            title.innerHTML = `Registration of new user ${inputName.value} was succeessful`
            clearFields()
        } else {
            clearFields()
            title.innerHTML = `User ${inputName.value} already exists`
        }

    } else {
        if(presence){
            var currentUserName = users.filter(
                function(x){
                    return x.key === userKey
                }
            )[0].name
            clearFields()
            title.innerHTML = `Hello ${currentUserName}!`
            var newWin = window.open()
            var p = newWin.document.body.appendChild(
                newWin.document.createElement("p")
            )
            p.style = `
                font-size: 50px;
            `
            p.innerText = `Hello ${currentUserName}!`
            setTimeout(function (){newWin.close()}, 10000)
        } else {
            clearFields()
            title.innerHTML = `You are not registered yet.`
        }
    }    
}


