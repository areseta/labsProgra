import db from '../db/models/index.cjs';

export const getDirectorsWithMovies = async (req, res) => {
  console.log('/getDirectorsWithMovies invocado !')
  let directores = await db.director.findAll({
    where: {
      id: [1, 2, 3]
    },
    include: ['movies']
  })
  //console.log( directores )
  directores.forEach(p => {
    console.log(p.get('id'), p.get('first_name'), p.get('last_name'))
    let peliculas = p.get('movies')
    peliculas.forEach(p => {
      console.log(p.title, ' - ', p.genres)
    });
  });
  
  return res.status(200).json({
    status: 'success',
    data: directores
  });

}

