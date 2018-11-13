var users = {
    14587: {
        name: "Ivan",
        email: "ivan78@gmail.com"
    },
    28419: {
        name: "Georg",
        email: "georg.klep@gmail.com"
    },
    41457: {
        name: "Stephan",
        email: "stephan.borg@gmail.com"
    }
}
var posts = {
    7891451: {
        author: 14587,
        text: "Imagine we can encapsulate these secondary responsibilities in functions"
    },
    7891452: {
        author: 28419,
        text: `В конструкторе ключевое слово super используется как функция, вызывающая родительский конструктор. 
            Её необходимо вызвать до первого обращения к ключевому слову this в теле конструктора. 
            Ключевое слово super также может быть использовано для вызова функций родительского объекта`
    },
    7891453: {
        author: 28419,
        text: `DOM не обрабатывает или не вынуждает проверять пространство имен как таковое. 
            Префикс пространства имен, когда он связан с конкретным узлом, не может быть изменен`
    },
    7891454: {
        author: 14587,
        text: "Ключевое слово super используется для вызова функций, принадлежащих родителю объекта"
    }
}
var comments = {
    91078454: {
        postId: 7891451,
        author: 28419,
        text: `The static String.fromCharCode() method returns a string created 
            from the specified sequence of UTF-16 code units`
    },
    91078455: {
        postId: 7891451,
        author: 41457,
        text: `HTML элемент <template> — это механизм для отложенного рендера клиентского контента, 
            который не отображается во время загрузки, но может быть инициализирован при помощи JavaScript`
    },
    91078457: {
        postId: 7891452,
        author: 41457,
        text: "Глобальный объект String является конструктором строк, или, последовательностей символов"
    },
    91078458: {
        postId: 7891452,
        author: 14587,
        text: `The Element.namespaceURI read-only property returns the namespace URI of the element, 
            or null if the element is not in a namespace`
    }
}

function getCurrentPostComments ( postId ) {    
    var resComment = []
    for (var comment in comments){
        comments[comment].postId === postId ? resComment.push(comments[comment]) : null
    }
    for (var comment of resComment){
        comment.author = users[comment.author].name
        delete comment.postId
    }
    return resComment
}
console.log ( getCurrentPostComments ( 7891451 ) )


var handBag = {
    content: [],
    addItem: function(item){
        this.content.push(item)
    },
    removeItem: function(item){
        var ind = this.content.indexOf(item)
        ind > 0 ? this.content.splice(ind, 1) : null
    }
}

handBag.addItem("necklace")
handBag.addItem("mirror")
handBag.removeItem("necklace")

function LibraryBook(title = "no author", year = "unknown", author = "unknown"){
    var title = title
    var year = year
    var author = author
    var readerName = null
    var readerData = null
    function giveTheBook ( client ){
        var readerName = client 
        var readerData = new Date().toLocaleString().split(", ")[0]
        console.log(title)
    }  
    this.getBookInfo = function(){
        console.log(`${title} ${year} ${author} Book ${readerName ? "not awailable" : "awailable"}`)
        return !Boolean(readerName)
    } 
    this.getTheBook = function ( client ) {
        return this.getBookInfo() ? giveTheBook(client) : null
        // if(readerName) {
        //     giveTheBook(client)
        //     return bookTitle
        // } else return null
    }
    this.returnBook = function() {
        readerName = null
        readerData = null
    }
}

var myBook = new LibraryBook ("Idiot", "1992")
myBook.getBookInfo()
myBook.getTheBook("Mary")
myBook.returnBook()
myBook.getTheBook()


