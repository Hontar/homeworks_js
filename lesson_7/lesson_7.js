var User = function(name = "user", email = "", photoURL = User.getAvatar()){
    this.name  = name
    this.email = email
    this.photoURL = photoURL
}

Object.defineProperties(User, {
    avatars: {
        value: [
                "https://pre00.deviantart.net/50f9/th/pre/i/2011/217/e/8/pikachu_2_by_nostalgiaattack-d45jd3i.png",
                "https://cdn.diversityavatars.com/wp-content/uploads/2018/01/Vector-Smart-Object-5.png",
                "https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-31-512.png",
                "http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-L3-icon.png",
                "https://findicons.com/files/icons/1072/face_avatars/300/i05.png",
                "http://www.iconarchive.com/download/i51043/hopstarter/halloween-avatars/Gomez.ico",
                "http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Zombie-2-icon.png",
                "https://vignette.wikia.nocookie.net/yogscast/images/8/8a/Avatar_Turps_2015.jpg"
            ]        
    }, 
    admin: {
        value: {
            photoURL: "https://i.pinimg.com/originals/3d/47/4f/3d474f82ff71595e8081f9a120892ae8.gif",
            name: "admin",
            // write: function(text){
            //     return text ?  text.split("<").join("&lt") : `Hello, I'm Admin`
            // }
        }        
    },
    getAvatar: {
        value: function() {
            return this.avatars.shift()
        } 
    }    
})


Object.defineProperties(User.prototype, {
    messageBox: {
        value: (function(){
            var box = document.body.appendChild(document.createElement("div"))
            box.style = `
                position: fixed;
                bottom: 0;
                right: 15px;
                width: 300px;
                height: 300px;
                overflow: auto;
                border: 1px solid black;
                border-radius: 5px 5px 0 0;
                padding: 10px;
                background-color: gray;
            `
            box.userAvatar = box.appendChild(document.createElement("img"))
            box.userAvatar.style.height = "50px"
            box.userName = box.appendChild(document.createElement("p"))
            box.userName.style = "display: inline-block; font-weight: bold; color: white; padding-left:10px;"
            box.message = box.appendChild(document.createElement("textarea"))
            box.message.style = "width: 100%; height: 50%;"
            box.readMessage = box.appendChild(document.createElement("p"))
            box.message.oninput = function(event){
                // event.target.value = User.admin.write()
                event.target.parentNode.querySelector('img').src = User.admin.photoURL
                event.target.parentNode.querySelector('p').innerText = User.admin.name                
            }
            box.message.onfocus = function(event){
                event.target.value = null
            }
            return box
        } )(),           
    }
})
User.prototype.write = function(text){
    id++
    this.messageBox.userAvatar.src = this.photoURL
    this.messageBox.userName.innerHTML = this.name
    this.messageBox.message.innerHTML = text.split("<").join("&lt")
    messages.push({
        author: this.name,
        message: text,
        textId: id,
        unread: true
    })
    
}
User.prototype.read = function(id){
    var currentMessage = messages.filter(x => x.textId === id)[0]
    if(currentMessage.unread){
        currentMessage.unread = false 
        this.messageBox.readMessage.innerHTML = `${this.name} прочитал сообщение: ${currentMessage.message}`
    }
}      

var messages = []

var users = []
users.push ( new User ( "Иван" ) )
users.push ( new User ( 'Alex', "alex@gmail.com" ) )
users.push ( new User ( 'Bob', "bob777@gmail.com" ) )
users.push ( new User ( 'Dima', "dima888@gmail.com" ) )
users.push ( new User ( 'Fima', "fima999@gmail.com" ) )

var id = 0
var k = 1
users.forEach ( 
    function ( user ) {        
        setTimeout ( 
            function () {
                user.write ( `Hello, I'm ${user.name}` )
            }, 2000 * k++
        )                 
    }
)


// а вот тут я не понимаю, что не так. цикл прокручивается быстро и не работает setTimeout
// по задумке рандомный пользователь читает рандомное непрочитанное сообщение

// var j = 2
// while(messages.some(
//         function (x) {
//             return x.unread === true
//         })
//     ){
//         setTimeout ( 
//             (function () {
//                 users [Math.floor (Math.random() * (users.length-1)) ].read( Math.floor(Math.random() * messages.length) + 1 )
//             })(), 3000 * j++
//         ) 
// }