const books= [{
    title: 'good Omens',
    authors: ['terry pratchett','neil gaiman'],
    rating:2.0
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

const everyBadBooks = books.every (book => book.rating === 2.0)
const someBadBooks  = books.some  (book => book.rating === 2.0)

console.log(everyBadBooks)
console.log(someBadBooks)