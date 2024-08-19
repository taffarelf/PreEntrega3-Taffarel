let yoguis = [
    yogui1 = 'Fiorella',
    yogui2 = 'Cristian',
    yogui3 = 'Jazmin',
    yogui4 = 'Elias'
]
console.log(yoguis)

const clasesGrupales = [
    {id: 123, clase: 'Clase A', horario: '10 AM'},
    {id: 456, clase: 'Clase B', horario: '14PM'},
    {id: 789, clase: 'Clase C', horario: '19PM'},
    {id: 246, clase: 'Clase D', horario: '22PM'},
];
clasesGrupales.forEach((clases) => {
    console.log(`Para la ${clases.clase} el horario es ${clases.horario}.`)
})

let clasesEnVivo = console.log('Si queres estar en las clases en vivo los dias son: \n Lunes \n Miercoles \n Viernes');
let boton = document.querySelector('button')
boton.addEventListener('click', ()=> {
    console.log('Diste click para ver los horarios')
})

let horarios = document.querySelector('button')
horarios.addEventListener('click', ()=>{
    Swal.fire("Clase A: Lunes 10AM / Clase B: Miercoles 14PM / Clase C: Jueves 19PM / Clase D: Viernes 22PM");
})

class Indumentaria{
    constructor(nombre, precio, img){
        this.nombre = nombre
        this.precio = precio
        this.img = `./img/${nombre.toLowerCase()}.webp`
    }
}

let indumentaria = [
    new Indumentaria('Top', "$2500"), 
    new Indumentaria('Calza Corta', "$3500"), 
    new Indumentaria('Calza Larga', "$4500"),
    new Indumentaria('Remera oversize', "$5000"),
    new Indumentaria('Remera Comun', "$4200"),
    new Indumentaria('Conjunto Yogui', "$12500"),
]
console.log(Indumentaria)
let busqueda = document.querySelector('carrito-compras')
if (indumentaria.includes(Indumentaria)){
    console.log(`Si hay ${busqueda} en la lista`)
} else {
    console.log(`No encontramos ${busqueda} en la lista de productos disponibles.`)
}

function operacion(op){
    if (op == 'sumarA'){
        return (a,b) => a + b
    } else if (op =='sumarC'){
        return (c,d) => c + d
    } else if (op == 'sumarE'){
        return (e,f) => e + f
    }
}
let sumarA = operacion ('sumarA');
let sumarC = operacion ('sumarC');
let sumarE = operacion ('sumarE');

console.log(sumarA(2500, 3500), 'Top + Calza Corta')
console.log(sumarC(4500, 5000), 'Calza Larga + Remera Oversize')
console.log(sumarE(4200, 12500), 'Remera Comun + Conjunto Yogui')