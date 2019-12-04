// Khaled Tetbirt
// Ce programme valide l'entree de 2 mots de passe
// et s'occupe de gerer les modifications apportees
// a l'interface web selon chaque cas.

// validation1 sert a valider le mot de passe initial
// (1 maj, 1min, 1 chiffre, entre 5 et 10 lettres, et la
// premiere lettre differente de la derniere).

var validation1 = function(firstPassword) {
    var password = firstPassword;
    if(password.length <= 10 && password.length >= 5) {
        for(var i = 0; i < password.length; i++) {
            if (password.charAt(i) >= "a" && password.charAt(i) <= "z") {
                for(var n = 0; n < password.length; n++) {
                    if(password.charAt(n) >= "A" && password.charAt(n) <= "Z") {
                        for(var s = 0; s < password.length; s++) {
                            if(password.charAt(s) >= "0" && password.charAt(s) <= "9") {
                                if(password.charAt(0) !== password.charAt(password.length -1)) {
                                    return(true);
                                }
                            }
                        }
                    }

                }
            }
        }
    }
    return(false);
};

// validation sert a apporter des modifications
// a l'interface web selon chaque cas.

var validationPassword = function () {
    var mdp1 = document.getElementById("mdp1");
    var mdp1text = document.getElementById("mdp1").value;
    var mdp2 = document.getElementById("mdp2");
    var message1 = document.getElementById("message1");
    var message2 = document.getElementById("message2");

    if(validation1(mdp1text)) {
        if(mdp1.value == mdp2.value) {
            message2.innerHTML = "";
            message1.innerHTML = "";
        }
        else {
            message1.innerHTML = "";
            message2.innerHTML = "Password doesn't match.";
        }
    }
    else {
        mdp2.value = "";
        message1.innerHTML = "Password doesn't meet requirements.";
        message2.innerHTML = "";
    }
};

var validationEmail = function () {
    var email1 = document.getElementById("email1");
    var email2 = document.getElementById("email2");
    if(email1.value !== email2.value) {
        messageEmail2.innerHTML = "Email adress doesn't match.";
        return(false);
    }
    else {
        messageEmail2.innerHTML="";
        return(true);
    }
};