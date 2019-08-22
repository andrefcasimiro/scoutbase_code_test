const leonardoDiCaprio = {
  name: 'Leonardo DiCaprio',
  birthday: '11/11/1974',
  country: 'USA',
}

const quentinTarantino = {
  name: 'Quentin Tarantino',
  birthday: '27/03/1963',
  country: 'USA',
}

const kateWinslet = {
  name: 'Kate Winslet',
  birthday: '05/10/1975',
  country: 'UK',
}

const jamesCameron = {
  name: 'James Cameron',
  birthday: '16/08/1954',
  country: 'Canada',
}

const jamieFoxx = {
  name: 'Jamie Foxx',
  birthday: '13/12/1967',
  country: 'USA',
}

const jakeGyllenhaal = {
  name: 'Jake Gyllenhaal',
  birthday: '19/12/1980',
  country: 'USA',
}

const richardKelly = {
  name: 'Richard Kelly',
  birthday: '28/03/1975',
  country: 'USA',
}

export const movies = [
  {
    id: 1,
    title: 'Titanic',
    year: 1997,
    rating: '78.5%',
    scoutbase_rating: '78.2%',
    actors: [
      {
        ...leonardoDiCaprio,
        directors: [
          { ...quentinTarantino },
          { ...jamesCameron },
        ]
      },
      {
        ...kateWinslet,
        directors: [
          { ...jamesCameron },
        ]
      },
    ],
  },
  {
    id: 2,
    title: 'Django Unchained',
    year: 2012,
    rating: '90.5%',
    scoutbase_rating: '88.2%',
    actors: [
      {
        ...leonardoDiCaprio,
        directors: [
          { ...quentinTarantino },
          { ...jamesCameron },
        ]
      },
      {
        ...jamieFoxx,
        directors: [
          { ...quentinTarantino },
        ]
      },
    ],
  },
  {
    id: 3,
    title: 'Donnie Darko',
    year: 2001,
    rating: '80.5%',
    scoutbase_rating: '92.5%',
    actors: [
      {
        ...jakeGyllenhaal,
        directors: [
          { ...richardKelly },
        ]
      },
    ],
  },
]
