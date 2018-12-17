async function getUsersList(since){
    var usersList = await fetch(`https://api.github.com/users?since=${since}`)
        .then(response => response.json())
    return usersList
}

async function getUsersRepo ( user ) {    
    var userRepos = await fetch ( user.repos_url )
        .then ( response => response.json() )
    return userRepos
}
async function putDataOnPage (users) {
    for (var user of users ){
        document.body.appendChild(
            document.createElement("p")).innerText = user.login
        document.body.appendChild(
            document.createElement("img")).src = user.avatar_url
        await getUsersRepo(user).then ( repos => { 
            var rep = ""
            for (var elem in repos)
                rep += `${repos[elem].name}; `;
            document.body.appendChild(
                    document.createElement("p")).innerText = rep
                
        })
    }
}

getUsersList(250).then(
    users => putDataOnPage (users)
)


