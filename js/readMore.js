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
            bookName.innerHTML += "\n" + book.naziv;
            isbn.innerHTML += "\n" + book.isbn;
            publisher.innerHTML += "\n" + book.izdavackaKuca;
            yearOfRelease.innerHTML += "\n" + book.godinaIzdavanja;
            shortDesc.innerHTML += "\n" + book.opis;
            pages.innerHTML += "\n" + book.brojStranica;
            cover.innerHTML += "\n" + book.tipPoveza;
            letter.innerHTML += "\n" + book.pismo;
            language.innerHTML += "\n" + book.jezik;
            rating.innerHTML += "\n" + book.ocena;
            bookprice.innerHTML += "\n" + book.cena;
        }
    } 
}