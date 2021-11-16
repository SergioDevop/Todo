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
    {
        id: 3, 
        salario: 500
    }
];

const getEmpleados = ( id, callback ) => {
    const empleado = empleados.find( e =>  e.id === id)?.name;

    if (empleado){
         callback( null, empleado);
    }
    else{
         callback(`empleado no existe ${id}`);
    }
    //return  empleado === true ? callback(empleado) : `empleado no existe ${id}`;
}

const getSalarios = ( id, callback ) => {
    const salario = salarios.find( s => s.id === id)?.salario;

    if (salario){
        callback( null, salario);
   }
   else{
        callback(`salario no existe ${id}`);
   }
    //salario === true ? callback( null, salario ) : callback(`salario con el id ${id} no existe `);

}

const id = 3;

getEmpleados(id , (err, empleado) => {

    if(err) {
        console.log('error');
        return console.log(err);
    }
    getSalarios(id , (err, salario) => {
        if(err) {
            console.log('error');
            return console.log(err);
        }
    
        
        console.log('el empleado ' + empleado + ': con salario ' + salario);
    
    })
})

