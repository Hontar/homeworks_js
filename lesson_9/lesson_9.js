fetch("https://avatars2.githubusercontent.com/u/3"
)
    .then(result => {result.blob()
        .then(res => {
            var img = document.body.appendChild(document.createElement("img"))
            img.src = URL.createObjectURL(res)
            img.style.width = "250px"
        })

    })