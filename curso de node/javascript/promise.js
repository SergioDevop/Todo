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

const id = 3;

/*getEmpleados(id)
        .then(empleado => {console.log( empleado )})
        .catch(err => {console.log( err )})



getSalarios(id)
        .then(salarios => {console.log( salarios )})
        .catch(err => {console.log( err )})*/

/*getEmpleados(id)
        .then(empleado => {

            getSalarios(id)
            .then(salario => {

                console.log('el empleadon : ' + empleado + ' : con el salario : ' + salario );

            })
            .catch(err => {console.log( err)})
        })
        .catch(err => {console.log( err )})*/


let nombre;

getEmpleados(id)
        .then( empleado => {
            nombre = empleado;
            return getSalarios(id)
        })
        .then( salario => {console.log('el empleadon : '+ nombre + ' : con el salario : '+ salario)})
        .catch(err => {console.log( err)});