const links = document.querySelectorAll('.header-menu a')

function ativarLink(link){
  const url = location.href
  const href = link.href
  if(url.includes(href)){
    link.classList.add('ativo')
  }
}

links.forEach(ativarLink)


const parametros = new URLSearchParams(location.search) 

function ativarProduto(parametros){
  const elemento = document.getElementById(parametros)
  if(elemento){
    elemento.checked = true
  }
}

parametros.forEach(ativarProduto)

// perguntas frequente

const perguntas = document.querySelectorAll('.perguntas button')

function ativarPergunta(ev){
  const pergunta = ev.currentTarget
  const control = pergunta.getAttribute('aria-controls')
  const resposta = document.getElementById(control)
  
  resposta.classList.toggle("ativa")
  const ativa = resposta.classList.contains('ativa')
  pergunta.setAttribute('aria-expanded', 'true')
}

function eventosPerguntas(pergunta){
  pergunta.addEventListener('click', ativarPergunta)
}
perguntas.forEach(eventosPerguntas)
console.log(perguntas)


// galeria 

const galeria = document.querySelectorAll('.bicicleta-imagens img')
const galeriaContainer = document.querySelector('.bicicleta-imagens')

function trocarImagem(ev){
  const img = ev.currentTarget
  const media = matchMedia('(min-width: 1000px)').matches
  if(media){
    galeriaContainer.prepend(img)
  }
}

function eventosGaleria(img){
  img.addEventListener('click', trocarImagem)
}

galeria.forEach(eventosGaleria)


// Animation
if(window.SimpleAnime){
  new SimpleAnime()
}