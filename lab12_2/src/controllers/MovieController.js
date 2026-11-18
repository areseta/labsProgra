import db  from '../db/models/index.cjs';

/* Ir de MOVIES A  COUNTRY y DIRECTOR */
export const getMoviesWithCountryAndDirector = async (req, res) => {
  console.log('/getMoviesWithCountryAndDirector invocado !')
  let peliculas = await db.movie.findAll({
    where: {
      id: [1,2,3,4]
    },
    order: [
      ['title', 'ASC']
    ],
    include: ['pais','directores']
  })
  console.log( peliculas )
  peliculas.forEach(p => {
    console.log(p.get('id'), p.get('title'))
    console.log("PAIS : " , p.get('pais').name)
    console.log("DIRECTOR : " , p.get('directores').first_name, p.get('directores').last_name)

  });

    return res.status(200).json({
    status: 'success',
    data: peliculas
  });
}

/* Ir de COUNTRIES A  DIRECTORS */
export const getCountriesWithDirectors = async (req, res) => {
  console.log('/getCountriesWithDirectors invocado !')
  let paises = await db.country.findAll({
    where: {
      id: [138, 554, 21, 3]
    },
    order: [
      ['name', 'ASC']
    ],
    include: ['directors']
  })
  //console.log( paises )
  paises.forEach(p => {
    console.log(p.get('id'), p.get('name'))
    let directores = p.get('directors')
    directores.forEach(p => {
      console.log(p.first_name, p.last_name, ' - ', p.gender)
    });
  })
    return res.status(200).json({
    status: 'success',
    data: paises
  });

}

/* OBtener datos de una pelicula*/
export const getMovieById =  async(req,res) => {
  const id = req.params.id
  console.log(`Buscando la data de la pelicula ${id}`)
  const resultado = await db.movie.findOne({
    where: { id: id } ,
    include: [ 'directores' ]
  });

  res.status(200).json( resultado) ;

}
