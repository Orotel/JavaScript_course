function isValidPassword(password,username){
    const isValid = 0
    const Charminimum   = password.length < 8
    const ContainSpaces = password.indexOf(' ') !==-1
    const SameUserName  = password.indexOf(username) !==-1
    return !Charminimum && !ContainSpaces && !SameUserName 
}
console.log(isValidPassword('hello1333434334doLuvr', 'dogLuvr'))
