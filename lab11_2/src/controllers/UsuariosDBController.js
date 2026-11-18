/*
Este JS trae la data desde una BD
Responde a peticiones
*/

import db from '../db/models/index.cjs';

/*
LEer todos los registros de la tabla users
*/
export const getUsuarios = async (req, res) => {
    let usuarios = await db.user.findAll();
    
    res.status(200).json( {
            status: "success",
            data : usuarios
        });
 }

 /*
 Inserta un usuario en la tabla
 */
export const createUser = async (req,res) => {
    console.log("Entra a createUser");
    const { nombre } = req.body; 
    console.log(`Valor recibido : ${nombre}`);

    let nuevoUsuario = await db.user.create( 
        {
            "nombre" : nombre
        }
    );

     res.status(201).json( {
        status : "success",
        data : nuevoUsuario
    } )

}

/* metodo para actualizar un elemento */
export const updateUser = async ( req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    console.log( id );

    try {
        const [filasAfectadas] = await db.user.update(
            {
                nombre : nombre
            },
            {
                where : {
                    id : id
                }
            }
        )
        console.log(`Cantidad de filas afectadas ${filasAfectadas}`);

        res.status(200).json( {
            success : true,
            mensaje : "Registro actualizado",
            filasActualizadas : filasAfectadas 
        });

    } catch (err) {
        console.log(`Ocurrio un error al actualizar ${id}`);
        return res.status(500).json( { error: err } )
    }
}


/* Eliminar un elemento */
export const deleteUser = async (req, res) => {
    const { id } = req.params;

    const filasEliminadas = await db.user.destroy( {
        where : {
            id : id
        }
    })
    res.status(200).json(`Usuario con ID ${id} eliminado`);
}