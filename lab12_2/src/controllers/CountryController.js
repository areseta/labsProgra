import db from '../db/models/index.cjs';
// Extraes fn, col y literal desde la instancia cargada en db
const { fn, col, literal } =  db.sequelize;

/* Ir de COUNTRIES A  MOVIES */
export const getMoviesByCountry = async (req, res) => {
  console.log('/getMoviesByCountry invocado !')
  let paises = await db.country.findAll({
    where: {
      id: [138, 554, 21, 3]
    },
    order: [
      ['name', 'ASC']
    ],
    include: ['movies']
  })
  //console.log( paises )
  paises.forEach(p => {
    console.log(p.get('id'), p.get('name'))
    let peliculas = p.get('movies')
    peliculas.forEach(p => {
      console.log(p.title, ' - ', p.genres)
    });
  });
        return res.status(200).json( {
        status : 'success',
        data: paises
    });
}


/* Ir de COUNTRIES A  DIRECTORS */
export const getDirectorsByCountry = async (req, res) => {
  console.log('/getDirectorsByCountry invocado !')
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
        return res.status(200).json( {
        status : 'success',
        data: paises
    });
}

/*
Por cada pais cuantos directores y por cada director cuantas peliculas
*/
export const getCountriesWithDirectorAndMovieCounts = async (req, res) => {
  const id = req.params.id
  console.log(`Generando Reporte para el pais ${id}`)
  try {
    const resultado = await db.country.findAll({
      attributes: [
        'id',
        'name',
        // Cuenta los directores asociados al país
        [fn('COUNT', fn('DISTINCT', col('directors.id'))), 'totalDirectors']
      ],
      include: [
        {
          model: db.director, 
          attributes: [
            'id',
            'first_name',
            'last_name',
            // Subconsulta directa para contar las películas de cada director
            [
              literal(`(
                SELECT COUNT(*)
                FROM "movies" AS m
                WHERE m."directorId" = "directors"."id"
              )`),
              'totalMovies'
            ]
          ]
        }
      ],
    where: {
      id: id
    },
      // Agrupamos por el ID del país y el ID de los directores
      group: ['country.id', 'directors.id']
    });

    res.status(200).json( resultado);
  } catch (error) {
    console.error('Error al obtener el reporte:', error);
    throw error;
  }
}