let template = document.querySelector('template')
let contenido = template.content
let copia = contenido.cloneNode(true)

copia.querySelector('h5').innerText = 'Top'
copia.querySelector('p').innerText = 'Precio 3500'

copia.querySelector('button').addEventListener('click',()=> {
    console.log('Le diste click')
})

document.body.appendChild(copia)

