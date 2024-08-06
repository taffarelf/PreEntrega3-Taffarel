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