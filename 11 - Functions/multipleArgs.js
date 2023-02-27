function square (num){
    console.log(num*num)
}  

function sum(a,b){
    console.log(a+b)
}

function divide(a,b){
    console.log(a/b)
}

function findLargest (x,y){
    if  (x>y){
        console.log(`o numero ${x} é maior`)
    }if (x<y){
        console.log(`o numero ${y} é maior`)
    }
    if  (x===y){
        console.log(`os numeros ${x} e e ${y} são iguais`)
    }
}
findLargest(40,1)