let books = ["LOTR", "Harry Potter", "Sherlock", "Naruto", "One Piece", "Doraemon",
"The Hobbit", "Bleach", "Test"]

let searchText = "Naruto"
let resultIndex

for(let i = 0; i < books.length; i++){
    if(books[i] == searchText){
        resultIndex = i
        break
    }
}

// Untuk ngurutin sesuai abjad
books.sort()
console.log(books);

// Pemisah kalimat pada kalimat
