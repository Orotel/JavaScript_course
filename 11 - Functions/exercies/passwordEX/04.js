function isValidPassword (password,username){
    if(
        password.length <8 ||
        password.indexOf(' ') !==-1 ||
        password.indexOf(username) !=-1
    ){
        return false;
    }
    return true
}
console.log(isValidPassword('dogLuvr123!', 'dogLuvr'))