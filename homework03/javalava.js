
var howManyChar = prompt("how many characters do you want.(8-128)");
howManyChar = parseInt(howManyChar);
checkNumbers(howManyChar);
var specialChar = confirm("do you want special characters?");
var numberChar = confirm("do you want numbers?");
var upperCaseLetter = confirm("do you want upper case letter?");
var lowerCaseLetter = confirm("do you want lower case letter?");
var thisIsThePassword = "";
var passwordCharacters = [];
var password = {
    special : ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"],
    number : ["0","1","2","3","4","5","6","7","8","9"],
    upperLetters : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    lowerLetters : ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
}
// add the character to the "character bank" or "word bank" if it is true
if(specialChar){
    passwordCharacters = passwordCharacters.concat(password.special);
}
if(numberChar){
    passwordCharacters = passwordCharacters.concat(password.number);
}
if(lowerCaseLetter){
    passwordCharacters = passwordCharacters.concat(password.upperLetters);
}
if(upperCaseLetter){
    passwordCharacters = passwordCharacters.concat(password.lowerLetters);
}

// this function keeps asking for the right numbers 8-128 char
function checkNumbers(x){
    x = parseInt(x);
    for(i = 0; i < 10; i++){
        if(x < 129 && x > 7){
            i = 10;
        }
        else{
            x = prompt("please enter how many characters do you want.(8-128 characters only)");
        }
    }
}
// when button click display the password
function displayPassword(){
    document.getElementById("generate").innerHTML = thisIsThePassword;
}
// this makes the password
function creatPassword(){
    for(i = 0; i < howManyChar; i++){
        var randNumber = Math.floor(Math.random() * passwordCharacters.length);
        thisIsThePassword = thisIsThePassword + passwordCharacters[randNumber];
    }
}
// starts when button is clicked
function run(){
    thisIsThePassword = "";
    creatPassword();
    displayPassword();
}

// copy to clipbroad
function copyPassword(){
    var input = document.getElementById("password");
    input.select();
    var result = document.execCommand('copy');
    return result;
}