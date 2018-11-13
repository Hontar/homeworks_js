
function LibraryBook(title = "no author", year = "unknown", author = "unknown"){
    var title = title
    var year = year
    var author = author
    var readerName = null
    var readerDate = null
    function giveTheBook ( client ){
        readerName = client 
        readerDate = new Date().toLocaleString().split(", ")[0]
    	console.log(title)
    }
    this.getBookInfo = function(){
        console.log(`${title} ${year} ${author} Book ${readerName ? "not awailable" : "awailable"}`)
    	return !Boolean(readerName)
    }
    this.getTheBook = function(client){
        return this.getBookInfo() ? giveTheBook(client) : null
    }
    this.returnTheBook = function(){
        readerName = null
        readerData = null
    }
}

