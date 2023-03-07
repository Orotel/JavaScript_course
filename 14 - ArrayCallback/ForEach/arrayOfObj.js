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
books.forEach(function(book){
    console.log(book.title.toUpperCase())
})