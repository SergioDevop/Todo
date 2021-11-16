const { mostrarMenu } = require('./helpers/mensajes');

require('colors')

console.clear();

const main = async () => {
    console.log('hola gato');

    let option = '';
    do{
        option = await mostrarMenu();

        if (option !== '0') await pause();

    }while(option !== '0');
    
    
}