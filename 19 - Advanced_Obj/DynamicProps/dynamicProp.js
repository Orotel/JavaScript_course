const role = 'host';
const person = 'jools Holland'

// Objetivo é fazer um objeto com a key role e o value de person

const tryTeam = {
    role:person
}
// fazer isso não deu certo

const Oldteam = {}
Oldteam[role] = person;
// primeiro criar um obj vazio e depois adicionar é um jeito velho

// ================JEITO CERTO =============================
// dynamic 
const team = {
    [role]:person
}