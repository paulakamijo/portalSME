const linksSocialMedia = {
  github: 'paulakamijo2',
  youtube: '/c/PaulaKamijo/',
  facebook: 'paulankamijo',
  instagram: 'paulakamijo',
  twitter: 'paulakamijo'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  } /**alert(li.children[0].href)*/
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

/**ARROW FUNCTIONS
 * é uma forma contraída da função
 * function nomeDaFuncao(argumentos){Code}
 * Damos o nome de uma função anônima, pegamos o argumento
 * 
 * argumento=>{ }
 * (argumento, argumentos=>){}
 * ()=> {}    sem argumentos
 * 
 */