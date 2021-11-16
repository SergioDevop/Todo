const deadpoll =  {
    nombre: 'nombre',
    apellidos: 'apellidos',
    getNombre() { 
        return `${this.nombre} ${this.apellidos}`;
    }
}
/*
const nombre = deadpoll.nombre;
const apellidos = deadpoll.apellidos;
*/
const {nombre,apellidos} = deadpoll;

function imprmirHeroes({nombre,apellidos}) {
    console.log(nombre,apellidos);
}

console.log(nombre,apellidos);

const heroes = ['ser', 'ben', 'batman'];

const [s1, s2, s3] = heroes;
console.log(s1,s2,s3);