// Return First index at which a given element can be found
// in the array,or -1 if it is not present.

// Example 1
const Beasts = ['ant','Bison','Camel','Duck','Bison']
console.log(Beasts.indexOf('Bison',1))
console.log(Beasts.indexOf('Bison','Duck'))

// Example 2- Finding all the occurrences of an element.
const indices = [];
const array =['a','b','a','c','a','d'];
const element = 'a';
let idx = array.indexOf(element);

while(idx !==-1){
    indices.push(idx);
    idx=array.indexOf(element,idx+1);
}
console.log(indices);