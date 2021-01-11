function validateBookInput() {
    var name = document.getElementById("nameInput").value;
    var isbn = document.getElementById("isbnInput").value;
    var publishingHouse = document.getElementById("publishingHouseInput").value;
    var author = document.getElementById("authorInput").value;
    var shortDesc = document.getElementById("shortDesc").value;
    var publishingDateInput = document.getElementById("publishingDateInput").value;
    var pages = document.getElementById("pagesInput").value;
    var cover = document.getElementById("coverTypeInput").value;
    var letter = document.getElementById("letterInput").value;
    var language = document.getElementById("languagueInput").value;
    var price = document.getElementById("priceInput").value;
    
    var mistakeStr = "";
    var mistakeBool = true;
    if (name == "") {
        mistakeStr += "-Niste uneli ime \n";
        mistakeBool = false;
    }
    if (isbn == "") {
        mistakeStr += "-Niste uneli isbn \n";
        mistakeBool = false;
    }
    if (publishingHouse == "") {
        mistakeStr += "-Niste uneli autorsku kucu \n";
        mistakeBool = false;
    }
    if (author == "") {
        mistakeStr += "-Niste uneli autora \n";
        mistakeBool = false;
    }
    if (shortDesc == "") {
        mistakeStr += "-Niste uneli opis \n";
        mistakeBool = false;
    }
    if (publishingDateInput == "") {
        mistakeStr += "-Niste izabrali datum \n";
        mistakeBool = false;
    }
    if (pages == "") {
        mistakeStr += "-Niste uneli broj strana \n";
        mistakeBool = false;
    }
    if (cover == "") {
        mistakeStr += "-Niste uneli tip korice \n";
        mistakeBool = false;
    }
    if (letter == "") {
        mistakeStr += "-Niste uneli pismo \n";
        mistakeBool = false;
    }
    if (language == "") {
        mistakeStr += "-Niste uneli jezik \n";
        mistakeBool = false;
    }
    if (price == "") {
        mistakeStr += "-Niste uneli cenu \n";
        mistakeBool = false;
    }

    if(mistakeBool == false) {
        alert(mistakeStr);
    } else {
        alert("Svi podaci su uneti !");
    }
  }

function validateUserInput() {
    var username = document.getElementById("UsernameInput").value;
    var password = document.getElementById("PasswordInput").value;
    var email = document.getElementById("emailInput").value;
    var name = document.getElementById("NameInput").value;
    var lastname = document.getElementById("lastNameInput").value;
    var address = document.getElementById("addressInput").value;
    var dateOfBirth = document.getElementById("dateOfBirthInput").value;
    var phone = document.getElementById("phoneNumberInput").value;

    var mistakeStr = "";
    var mistakeBool = true;

    if (username == "") {
        mistakeStr += "- Username is blank \n";
        mistakeBool = false;
    }
    if (password == "") {
        mistakeStr += "- Password is blank \n";
        mistakeBool = false;
    }
    if (email == "") {
        mistakeStr += "- Email is blank \n";
        mistakeBool = false;
    }
    if (name == "") {
        mistakeStr += "- Name is blank \n";
        mistakeBool = false;
    }
    if (lastname == "") {
        mistakeStr += "- Last name is blank \n";
        mistakeBool = false;
    }
    if (address == "") {
        mistakeStr += "- Address is blank \n";
        mistakeBool = false;
    }
    if (dateOfBirth == "") {
        mistakeStr += "- Date of birth is blank \n";
        mistakeBool = false;
    }
    if (phone == "") {
        mistakeStr += "- Phone is blank \n";
        mistakeBool = false;
    }

    if(mistakeBool == false) {
        alert(mistakeStr);
    } else {
        alert("All required fields are filled !");
    }
}