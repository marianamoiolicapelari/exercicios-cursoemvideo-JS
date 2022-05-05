function carregar() {
  var ola = document.getElementById('ola')
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  var min = data.getMinutes()
  
  msg.innerHTML = `Agora são ${hora}:${min}`
  if (hora >= 6 && hora < 12) {
    ola.innerHTML = `Bom dia!`
    img.src = 'manhã.png'
    document.body.style.background = '#907A48'
  } else if (hora >= 12 && hora <= 18) {
    ola.innerHTML = `Boa tarde!`
    img.src = 'tarde.png'
    document.body.style.background = '#356CC9'
  } else if (hora >= 19 && hora < 24) {
    ola.innerHTML = `Boa noite!`
    img.src = 'noite.png'
    document.body.style.background = '#12292F'
  } else {
    ola.innerHTML = `Boa madrugada!`
    img.src = 'madrugada.png'
    document.body.style.background = '#284888'

  }
}