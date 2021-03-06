var cardImg = document.getElementById("card")

var interface = document.getElementById("card_actions")
interface.style.display = 'none'

var cardInfo = document.getElementById("show_info")

var controls = document.getElementById("controls")

function Card(){
    var pin = prompt("enter your pin")
    var cash = 0
    this.cardNum = (function (){
      var res = ""
      for (var i = 0; i < 16; i++){
         res += String.fromCharCode(
            Math.round(Math.random()*9)+48
         )
      }
      return res 
    })()
    this.putCash = function (sum){
        cash += isNaN(Number(sum)) ? 0 : Number(sum)
    }
    this.getCash = function (sum){
        if(prompt("enter your pin") === pin){
            if(cash < sum){
                return "Not enough cash" 
            } else {
                cash -= isNaN(Number(sum)) ? 0 : Number(sum)
                return `Take ${sum}. Current account balance: ${cash}`
            }
        } else return "Not correct pin"
    } 
    this.getInfo =  function (){
        if(prompt("enter your pin") === pin){
            return cash
        } else return "Not correct pin"
    } 
}

function createElem (tag = "div", destination = document.body, text = ""){
	var elem = destination.appendChild(document.createElement(tag))
	elem.innerHTML = text
	return elem
}


cardImg.onclick = function(event){
	event.target.style.display = 'none'
	var myCard = new Card()
	interface.style.display = 'block'
	var cardNumber = createElem ('p', cardInfo, `Your card number is: ${myCard.cardNum}`)
	var buttonInfo = createElem ('button', controls, "Show current account balance")
	var buttonPutCash = createElem ('button', controls, "Put cash")
	var buttonGetCash = createElem ('button', controls, "Get cash")
	
	var label = createElem ('label', cardInfo)
	label.setAttribute('for', "enter_amount")
	label.innerHTML = "Enter amount of money"
	label.style.visibility = 'hidden'
	var input = createElem ('input', cardInfo)
	input.type = 'number'
	input.style.visibility = 'hidden'
	input.id = "enter_amount"	
	var balance = createElem ('p', cardInfo)
	var buttonConfirm = cardInfo.insertBefore(document.createElement("button"), balance)
	buttonConfirm.innerHTML = "OK"
	buttonConfirm.style.visibility = 'hidden'
	buttonGetCash.onclick = function (event){
		input.style.visibility = 'visible'
		label.style.visibility = 'visible'
		label.innerHTML = "Enter amount of money you want to get"
		buttonConfirm.style.visibility = 'visible'
		buttonConfirm.onclick = function(event){			
			balance.innerHTML = isNaN(Number(input.value)) ? `You should enter number` : `${myCard.getCash(input.value)}`
			event.target.value = null
		}
	}	
	buttonPutCash.onclick = function (event){
		input.style.visibility = 'visible'
		label.style.visibility = 'visible'
		label.innerHTML = "Enter amount of money you want to put"
		buttonConfirm.style.visibility = 'visible'
		buttonConfirm.onclick = function(event){
			myCard.putCash(Number(input.value))			
			balance.innerHTML = isNaN(Number(input.value)) ? `You should enter number` : `Account was filled up for: ${input.value}`
			event.target.value = null
		}		
	} 
	buttonInfo.onclick = function (event){
		balance.innerHTML = `Current account balance: ${myCard.getInfo()}`
	} 
}


