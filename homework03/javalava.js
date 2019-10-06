function myFunction(event) {
    event.preventDefault()
    var userInput = document.getElementById("password");
    var passwordLength = userInput.length;
    var validPasword = false;
    var validSpecial = false;
    var vailidLowercase = false;
    var validUppercase = false;
    var validNumbers = false;
    var userInputArray = [];
    var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ">", "<", ".", "?", "/"];
    var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ">", "<", ".", "?", "/"];
    var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    var generateAll = [passwordLength] + [specialCharacter] + [lowercase] + [uppercase] + [numbers]



    console.log(generateAll)




    for (var i = 0; i < specialCharacter.length; i++) {
        userInputArray.push(specialCharacter[i])
    }

    if (passwordLength >= 8 && passwordLength <= 128) {
        validPassword = true

        console.log("passwordLength")
    }

    for (var i = 0; i < specialCharacter.length; i++) {

        if (userInputArray.indexOf(specialCharacter[i]) > -1) {
            validSpecial = true;

            console.log("specialCharacter")

        }

    }



}
