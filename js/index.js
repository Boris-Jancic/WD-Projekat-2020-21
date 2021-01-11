var firebaseUrl = 'https://knjizaraprojekat2020-21-default-rtdb.firebaseio.com/korisnici.json';

var korisnici = [];
$.get( "https://knjizaraprojekat2020-21-default-rtdb.firebaseio.com/korisnici.json")
  .done(function( data ) {
    for (const property in data) {
        var korisnik = data[property];
        korisnici.push(korisnik);
      }
  });
  
var knjige = [];
$.get( "https://knjizaraprojekat2020-21-default-rtdb.firebaseio.com/knjige.json")
.done(function( data ) {
  for (const property in data) {
      var knjiga = data[property];
      knjige.push(knjiga);
    }
});

function checkLogin(){
  var username = document.getElementById('txtLUsername').value;
  var password = document.getElementById('txtLPassword').value;
      
  var mistakeStr = "";
  var mistakeBool = true;
  
  if (username == "") {
      mistakeStr += "- Username is left blank \n";
      mistakeBool = false;
  }
  if (password == "") {
      mistakeStr += "- Password is left blank \n";
  }

  if(mistakeBool == false) {
    alert(mistakeStr);
    document.getElementById('txtLUsername').value = "";
    document.getElementById('txtLPassword').value = "";
  } else {
    var success = false;
    
    for(var i=0; i<korisnici.length; i++) {
      var user = korisnici[i];

      if(user.username == username && user.password == password) {
        alert(user.username + ' succesfully logged in.');

        document.getElementById('loginBtn').style.visibility = 'hidden';
        document.getElementById('registerBtn').style.visibility = 'hidden';
        success = true;
        break;
      }
    } 
    if (!success) {
      alert('Neispravni login podaci.');
      document.getElementById('txtLUsername').value = "";
      document.getElementById('txtLPassword').value = "";
    }
  }
}

function checkRegister(){
  var name = document.getElementById('txtRName').value;
  var email = document.getElementById('txtREmail').value;
  var password = document.getElementById('txtRPassword').value;
      
  var mistakeStr = "";
  var mistakeBool = true;
  if (name == "") {
      mistakeStr += "-Niste uneli ime \n";
      mistakeBool = false;
  }
  if (email == "") {
      mistakeStr += "-Niste uneli email \n";
      mistakeBool = false;
  }
  if (password == "") {
      mistakeStr += "-Niste uneli sifru \n";
  }

  if(mistakeBool == false) {
    alert(mistakeStr);
  } else {
      alert("Svi podaci su uneti !");
  }
}

function passISBN(bookISBN){
  var isbn = bookISBN;
  localStorage.setItem("book-isbn", isbn);
}