const books= [{
    title: 'good Omens',
    authors: ['terry pratchett','neil gaiman'],
    rating:4.25
},{
    title: 'The Perks Of Being A Wallflower',
    authors: ['Logan lerman','emma watson'],
    rating:5.0
},{
    title: '500 days of summer',
    authors: ['Joseph Gordon','neil gaimanzooey deschanel'],
    rating:4.75
},{
    title: 'Interstellar',
    authors: ['Mathew mcConauld','Jessica Chastain'],
    rating:4.25
},]

// Criei uma loja de livros e quero elencar os livros que tem uma avaliação boa.

const goodBooks = books.filter(book => book.rating > 4.20)
console.log(goodBooks)
