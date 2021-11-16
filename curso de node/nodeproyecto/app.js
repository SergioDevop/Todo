const { crearArchivo } = require("./helpers/multiplicar");

const base = 5;


crearArchivo(base)
            .then(nombreArchibo => console.log(nombreArchibo , 'Archivo creado'))
            .catch(err => console.log(err, 'Archivo'));