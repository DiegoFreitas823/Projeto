function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

 // pegar a Tag img
const img = document.querySelector("#profile img")

    // Substituir a imagem
    if (html.classList.contains('light')) {
        //Se estiver em light mode, adicionar a imagem light
        img.setAttribute('src', './assets/avatar-light.png')
    } else {
        //Se estiver sem light mode, manter imagem normal
        img.setAttribute('src', './assets/avatar.png')
      
    }
}



