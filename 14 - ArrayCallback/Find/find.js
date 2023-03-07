let movies = [ 
    'the fantastic Mr.Fox',
    `Castle in the sky`,
    'Mononoke Hime',
    'Spirited away',
    'The Punisher',
    'your name'
]

const movie = movies.find(m => m.includes('p'))
console.log(movie)