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
    rating:4.0
},]

const betterBook = books.find(book => book.rating >= 5.0)
const LoganBookIndex = books.find(book => book.authors.indexOf('Logan lerman') !==-1)
const LoganBookInclud = books.find(book => book.authors.includes('Logan lerman'))
const LoganBookFind = books.find(book => book.title == 'Interstellar')

console.log(betterBook)
console.log(LoganBookIndex.title)
console.log(LoganBookInclud.title)
console.log(LoganBookFind.title)