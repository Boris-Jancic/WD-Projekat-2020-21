var knjige = [];
$.get( "https://knjizaraprojekat2020-21-default-rtdb.firebaseio.com/knjige.json")
.done(function( data ) {
  for (const property in data) {
      var knjiga = data[property];
      knjige.push(knjiga);
    }
    findByISBN();
});

var book;
function findByISBN(){
    var wantedISBN = localStorage.getItem("book-isbn");
    
    pictue = document.getElementById('bookPicture');
    bookName = document.getElementById('name'); 
    isbn = document.getElementById('isbn');
    publisher = document.getElementById('publisher');
    yearOfRelease = document.getElementById('yearOfRelease');
    shortDesc = document.getElementById('shortDesc')
    pages = document.getElementById('pages');
    cover = document.getElementById('cover');
    letter = document.getElementById('letter');
    language = document.getElementById('language');
    rating = document.getElementById('rating');
    bookprice = document.getElementById('bookPrice');

    for(var i=0; i<knjige.length; i++) {
        book = knjige[i];

        if(book.isbn == wantedISBN) {
            pictue.src = book.slika;
            bookName.innerHTML = book.naziv;
            isbn.innerHTML = book.isbn;
            publisher.innerHTML = book.izdavackaKuca;
            yearOfRelease.innerHTML = book.godinaIzdavanja;
            shortDesc.innerHTML = book.opis;
            pages.innerHTML = book.brojStranica;
            cover.innerHTML = book.tipPoveza;
            letter.innerHTML = book.pismo;
            language.innerHTML = book.jezik;
            rating.innerHTML = book.ocena;
            bookprice.innerHTML = book.cena;
        }
    } 
}

function hey(){
    alert("hej!");
}
