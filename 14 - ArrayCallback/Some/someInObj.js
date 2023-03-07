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
    authors: 'Joseph Gordon',
    rating:4.75
},{
    title: 'Interstellar',
    authors: ['Mathew mcConauld','Jessica Chastain']['chistopher nollan'],
    rating:4.25
},]
// se algum tiver ja esta o suficiente
const any2Authors = books.some (book => book.authors.length === 2 )
// se todos tiverem 
const all2Authors = books.every(book => book.authors.length === 2 )

console.log(any2Authors)
console.log(all2Authors)