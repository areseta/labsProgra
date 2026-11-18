import db from '../db/models/index.cjs';

/* Ir de COUNTRIES A  DIRECTORS */
export const country_directors = async (req, res) => {
  console.log('/country_directors invocado !')
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

    return res.json( {
        status : 'success',
        data: paises
    });

}

/* Ir a DIRECTORS */
export const directors= async (req, res) => {
    console.log('/directors invocado !')
    let directores = await db.director.findAll( {
      where: {
        id : [1,2,3]
      },
    } )


      return res.json( {
        status : 'success',
        data: directores
    });
}