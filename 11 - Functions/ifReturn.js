function isPurple (color){
    if(color.toLowerCase() === 'purple'){
        return true;
    }
    else{
        return false;
    }
}
function containsPurple (arr){
    for (let color of arr){
        if(color ==='purple' || color ==='magenta'){
            return true
        }
    }
    return false
    
}
const test1 =containsPurple(['yellow','blue','yellow']) 
const test2 =containsPurple(['magenta','blue','yellow']) 
console.log(test1)
console.log(test2)