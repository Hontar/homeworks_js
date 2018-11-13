var tags = [
	{
		name: "div",
		class: "about_us",
		child:[
				{
					name: "p",
					text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius quam ac ante tincidunt dictum. Vivamus non mi et velit tempor sagittis. Pellentesque nisl nisl, tempor eget pharetra in, accumsan nec ligula. Integer viverra fermentum ultrices. Sed finibus, sapien et ultricies tempor, lectus metus egestas arcu, nec egestas augue erat vel velit. Integer interdum semper mauris id suscipit. Fusce lobortis congue odio quis vulputate.",
				},			
				{
					name: "img",
					alt: "our logo",
					src: "https://www.google.com.ua/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png"
				},
		]
				
	},
	{
		name: "section",
		id: "benefits",
		child:[
				{
					name: "p",
					text: "Mauris placerat erat enim, quis vestibulum urna condimentum at. Aenean vitae erat eu velit dictum malesuada. Donec vestibulum odio et imperdiet fermentum. Donec turpis quam, fermentum vitae lectus in, suscipit mattis dui. Proin eleifend mauris vitae mauris accumsan, at convallis turpis rutrum.",
				},			
				{
					name: "img",
					alt: "our logo",
					src: "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
				},
		]
	}
]

for (var tag of tags){
	var elem = document.body.appendChild(document.createElement(tag.name))
	for (var prop in tag){
		if(prop === "child"){
			for (var childElem of tag[prop]){
				var childElement = elem.appendChild(document.createElement(childElem.name))
				if ( childElem.text ) childElement.innerHTML = childElem.text
				for (var proper in childElem) {
					childElement[proper] = childElem[proper]
				}
			}			
		} else elem[prop] = tag[prop]
	} 
}

var funcs = [	
	function(event){
		event.target.style.width = "200px"
	},
	function(event){		
		event.target.style.color = "#f44336"
	},
	function(event){		
		event.target.style.backgroundColor = "#9e9e9e"
	},
	function(event){
		event.target.style.width = "500px"
	},
	function(event){
		event.stopPropagation()
		event.target.style.color = "#3f51b5"
		event.target.style.backgroundColor = "#f44336"
	},
	function(event){
		event.target.style.transform = "rotate(45deg)"
	},
]

function clickHandler (event){
	event.target.style.opacity = "0.5"
}

var myCollection = document.body.getElementsByTagName("*")

var index = 0

for (var elem of myCollection){
	elem.addEventListener("click", clickHandler)
	elem.onclick = funcs[index++]
}