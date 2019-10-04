function myFunction(event) {
    event.preventDefault()
    var userInput = document.getElementById("password");
    var passwordLength = userInput.length;
    var validPasword = false;
    var userInputArray = [];


    var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ">", "<", ".", "?", "/"];
    var validSpecial = false;

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

            console.log ("specialCharacter")

        }

    }


    
}
