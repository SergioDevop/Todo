const empleados = [
    {
        id: 1, 
        name: 'ser'
    },
    {
        id: 2, 
        name: 'jer'
    },
    {
        id: 3, 
        name: 'zen'
    }
];

const salarios = [
    {
        id: 1, 
        salario: 1500
    },
    {
        id: 2, 
        salario: 1000
    },
   
];

const getEmpleados = ( id ) => {
    
    return new Promise((resolve, reject) => {

        const empleado = empleados.find( e =>  e.id === id)?.name;

        (empleado) ? resolve(empleado) : reject(new Error(`no existe el empleado con el id ${id}`));       
    });
    //return promise;
    //return  empleado === true ? callback(empleado) : `empleado no existe ${id}`;
}

const getSalarios = ( id ) => {
       return new Promise((resolve, reject) => {
           const salario = salarios.find(s => s.id === id)?.salario;

            salario ? resolve(salario) : reject(new Error(`no existe el salario con el id ${id}`));
       }) 
}



const getInfoUsuarios = async(id) => {

    try {
        const empleado = await getEmpleados(id);
        const salario = await getSalarios(id);
    
        return `el empleado : ${empleado} con salario  ${salario}`;
    }
    catch (err) {
        throw (err);
    }
    
}

const id = 2;

getInfoUsuarios(id)
        .then(infoUsuarios => console.log(infoUsuarios))
        .catch(err => console.log(err));