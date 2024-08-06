//! USUARIOS VERIFICADOS EN STORAGE
// class Usuario {
//     constructor(nombre,pass,id){
//         this.nombre = nombre
//         this.pass = pass
//         this.id = id
//     }
// }

// let yoguis_ingresados = [
    //     new Usuario ('Fiorella', 'soyfiorella', 1234),
    //     new Usuario ('Cristian', 'soycristian', 5678),
    //     new Usuario ('Jazmin', 'soyjazmin', 2486),
    //     new Usuario ('Elias', 'soyelias', 7879),
    // ]
    
    // localStorage.setItem('yoguis', JSON.stringify(yoguis_ingresados))

//! ACCEDER A LA PAGINA INICIAL SOLO CON LOS USUARIOS VERIFICADOS
let yoguis_ingresados = JSON.parse(localStorage.getItem('yoguis'))

let formulario = document.querySelector('form')
formulario.addEventListener('submit', (e)=> {
    e.preventDefault()

    let nombre = formulario[0].value
    let pass = formulario[1].value

    let yoguis = yoguis_ingresados.find((yoguis)=> {
        return yoguis.nombre == nombre && yoguis.pass == pass
    })

    if(yoguis) {
        location.href = 'yoguis.html'
    } else{
        console.log('No estas ingresado en nuestro espacio.')
    }
})