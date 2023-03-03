let animals = ['bear', 'panda', 'tiger']
for (var i = 0; i < animals.length; i++) {
    console.log(i, animals[i])
}
console.log(i)// como assim eu tenho o valor de i mesmo fora do loop ?


function doubleArr(arr) {
    const duplicateArr = []
    for (let number of arr) {
        let double = number * 2
        duplicateArr.push(double)

    }
console.log(duplicateArr)
}
doubleArr([1,3,5])