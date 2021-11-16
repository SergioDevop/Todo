setTimeout( () => {

})

const getUserById = ( id , callback ) => {
    const user = await = {
        id,
        nombre: 'pepe'
    }
    setTimeout( () => {
        callback( user );
    }, 1000)
}

getUserById( 18, (usuario) => { 
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());

});