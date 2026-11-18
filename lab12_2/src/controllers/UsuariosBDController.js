import db from '../db/models/index.cjs';

export  const getUsuarios = async (req, res) => {
    console.log("Modelos registrados en la BD:", Object.keys(db));
    let usuarios = await db.user.findAll();
    res.json( {
        status : 'success',
        data: usuarios
    });
};

export const crearUser = async (req, res) => {
    console.log("Entra a creaUser");
    const { nombre } = req.body;
    console.log("Nombre recibido:", nombre);

    let nuevoUsuario = await db.user.create({
        "nombre": nombre
    });

    res.status(201).json( {
        status : 'success',
        data: nuevoUsuario
    })
}

// PUT: Actualizar un Usuario existente por ID
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;
  console.log (id)

   try {
        // Esperamos que se ejecute la actualización
        // usr.update devuelve un array: [filasAfectadas]
        const [filasAfectadas] = await db.user.update(
            {
                nombre: nombre,
            },
            {
                where: {
                    id: id
                }
            }
        )

        console.log(`Cantidad de filas modificadas: ${filasAfectadas}`)
        // Aquí sí retornamos la respuesta al cliente web
        return res.status(200).json({
            success: true,
            mensaje: "Registro actualizado",
            filasModificadas: filasAfectadas
        })
    } catch (err) {
        // Captura errores de conexión o restricciones de la base de datos
        console.log("Ocurrio un error al actualizar " + err)
        return res.status(500).json({ error: err.message })
    }

    
};

// DELETE: Eliminar un Usuario por ID
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  console.log( id );
  const filasEliminadas = await db.user.destroy({
            where: {
                id: id
            }
        })
  res.status(200).json({ message: `Usuario ${id} eliminado correctamente` });
}