/*
Este JS simula la existencia de datos 
Responde a peticiones
*/

let usuarios = [
    { id: 1 , nombre: "Nombre 1"},
    { id: 2 , nombre: "Nombre 2"},
    { id: 3 , nombre: "Nombre 3"},
    { id: 4 , nombre: "Nombre 4"}
 ]

 /* 
 Este metodo devuelve la lista de usuarios 
 Utiliza el Verbo HTTP GET 
 */
 export const getUsuarios = (req, res) => {
        res.status(200).json( {
            status: "success",
            data : usuarios
        });
 }

 /*
 Un metodo que acepte un nuevo usuario
 Usa el verbo HTTP POST
 */
export const crearUsuario = (req, res) => {
    const { nombre } = req.body;
    const nuevoUsuario = { id: usuarios.length + 1 , nombre: nombre}
    usuarios.push(nuevoUsuario);

    res.status(201).json( {
        status : "success",
        data : nuevoUsuario
    } )
}

/* metodo para actualizar un elemento */
export const updateUser = ( req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    console.log( id );

    const index = usuarios.findIndex( p => p.id == Number(id) );
    if ( index === -1 ) {
        return res.status(404).json( { "msg" : "Elemento No existe"})
    }

    usuarios[index] = { ...usuarios[index], nombre };
    res.status(200).json(usuarios[index]);
}

/* Eliminar un elemento */
export const deleteUser = (req, res) => {
    const { id } = req.params;
    usuarios = usuarios.filter( p => p.id != Number(id) );
    res.status(200).json(`Usuario con ID ${id} eliminado`);
}