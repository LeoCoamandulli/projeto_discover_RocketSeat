function toggleMode() {
  const html = document.documentElement
  //if(ReportBody.classList.contains('light')){
  //html.classList.remove('light')
  //}else{
  //html.classList.add('light')
  html.classList.toggle("light")

  //pegar a tag imagem
  const img = document.querySelector("#profile img")
  //pegar a tag 
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se light mode, adicionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se não, manter imagem
    img.setAttribute("src", "./assets/avatar.png")
  }
}
