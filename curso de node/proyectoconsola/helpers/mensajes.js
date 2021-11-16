require('colors')

const mostrarMenu = () => {

    return new Promise = (resolve, reject) => {

        console.clear();
        console.log('=========================='.gray);
        console.log('seleccione opcion'.gray);
        console.log('========================== \n'.gray);

        console.log(`1 Crear tarea`);
        console.log(`2 Lidtsr tareas`);
        console.log(`3 Listaar tareas completas`);
        console.log(`4 Listar tareas pendientes`);
        console.log(`5 Completaar tareas`);
        console.log(`6 salir \n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('seleccione una opcion', (opt) => {
            readline.close();
            resolve(opt);
        });
    }
    
}


module.exports = {
    mostrarMenu
}