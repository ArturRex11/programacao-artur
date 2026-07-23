function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //if (html.classList.contains("light")) {
  // html.classList.remove("light")
  //} else {
  // html.classList.add("light")
  // }

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "https://github.com/ArturRex11.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/unnamed.jpg")
  }

  if (html.classList.contains("light")) {
    img.setAttribute("alt", "foto do gmail do Artur")
  } else {
    img.setAttribute("alt", "foto do github do Artur")
  }
}
