// recommended syntax
const math ={
    add(x,y){
        return x+y;
    },
    multiply(x,y){
        return x*y
    }
}
// arrow syntax
const arrowMath= {
    sum:(x,y) => x+y,
    mul:(x,y) => x*y,
    print:() => console.log('hellow')
}