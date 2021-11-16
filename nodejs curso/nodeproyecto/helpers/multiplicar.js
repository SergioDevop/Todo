const fs = require('fs');


const crearArchivo = async ( base, listar) => {

    

        //const number = 5;
        let value = '';
        for(let i = 1; i <= 10; i++){

            value += `La multiplicacion de ${base} * ${i} = ${base * i} \n`;
               
       }
       console.log(value);
         fs.writeFileSync(`Tabla del ${base}.txt ` , value);

        return `Tabla del ${base}.txt `;
         

    
}

module.exports = {
    crearArchivo
}