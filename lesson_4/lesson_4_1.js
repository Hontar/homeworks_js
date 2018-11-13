function HandBag(name = "Mary"){
    var items = []
    var masterName = name
    this.showItem = function(){
        masterName === prompt("What is your name?") ? 
        console.log(items) : console.log("That's not your business")
    }
    this.addItem = function(newItems){
        if(!newItems) return "There's nothing to add"
        if (masterName !== prompt("What is your name?") ) return "You are not allowed"
        if (typeof newItems === 'object'){
            for(var elem in newItems){
                items.push(newItems[elem])
            }
        } else items.push(newItems)
        console.log(items)
    }
    this.deleteItem = function(oddItem){
        if(!oddItem) return "There's nothing to remove"
        if (masterName !== prompt("What is your name?") ) return "That's not your business"
        items.splice(items.indexOf(oddItem),1)
        console.log(items)
    }
}

var myBag = new HandBag()

myBag.showItem()

myBag.addItem()

myBag.addItem(5)

myBag.addItem(["mirror", true])

myBag.addItem({name: "lipstick", beauty: "earrings"})

myBag.deleteItem('lipstick')