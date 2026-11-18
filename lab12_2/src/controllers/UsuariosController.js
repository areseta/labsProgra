let usuarios = [
    { id: 1, nombre :'Nombre 1'},
    { id: 2, nombre :'Nombre 2'},
    { id: 3, nombre :'Nombre 3'},
];

export const getUsuarios = (req, res) => {
    res.json( {
        status : 'success',
        data: usuarios
    });
};

export const crearUser = (req, res) => {
    const { nombre } = req.body;
    const nuevoUsuario = { id: usuarios.length + 1 , nombre};
    usuarios.push( nuevoUsuario);

    res.status(201).json( {
        status : 'success',
        data: nuevoUsuario
    })
}


// PUT: Actualizar un Usuario existente por ID
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;
  console.log (id)

  const index = usuarios.findIndex(p => p.id ==
     Number(id));
  if (index === -1) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  usuarios[index] = { ...usuarios[index], nombre };
  res.status(200).json(usuarios[index]);
};

// DELETE: Eliminar un Usuario por ID
export const deleteUser = (req, res) => {
  const { id } = req.params;
  console.log( id );
  usuarios = usuarios.filter(p => p.id !== Number(id));
  res.status(200).json({ message: `Usuario ${id} eliminado correctamente` });
}
