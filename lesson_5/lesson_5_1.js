var paragraph = document.body.appendChild(document.createElement("p"))
paragraph.innerText = "Click on me"
paragraph.style = `
	font-weight: 800;
	font-size = 24px;
`
var picture = document.body.appendChild(document.createElement("img"))

paragraph.onclick = function(event){		
	picture.src = "https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
	picture.style = `
		width: 300px;
		transition: all 1s;
	`
	picture.onmouseover = function(event){
		this.style.width = "500px"
	}
	picture.onmouseout = function(event){
		this.style.width = "300px"
	}
	picture.onclick = function(event){
		this.style.display = "none"
	}	
}


