// more compact syntax
// default numbers to functions
// =======================================================//
// **OLD WAY
function multiply(x, y) {
    if (typeof y === "undefined")
        y = 1
    return x * y
}
console.log(multiply(10))

// =======================================================//

// Advanced way
function advancedMultiply(x, y) {
    y = typeof (y) === "undefined" ? 1 : y // default
    return x * y
}

// =======================================================//

//New way               (new default)
function newMultiply(x, y = 1) {
    return a * y
}
