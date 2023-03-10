const runner = {
    first:'ennia',
    last:'kipchoge',
    country:'kenya',
    title:'Elder of the order of the golden heart of kenya'

}

const {first,last ,...others} = runner
// salvar first e last em uma var e o resto em others
console.log(first,last)
console.log(others)