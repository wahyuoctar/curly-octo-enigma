// array
const books = [
  "LOTR", // 0
  "Harry Potter", // 1
  "Sherlock", // 2
  "Naruto", // 3
  "One Piece", // 4
  "Doraemon", // 5
];

// untuk tambah data
books.push("The Hobbit");
books.push("Bleach");
books.push("Test");

// untuk modify data
// books[3] = "Boruto";

console.log(books[3]);

// for (let i = 0; i < books.length; i++) {
//   console.log(books[i]);
// }

// console.log(books[0]);

// console.log(books[books.length - 1]);

// ==== duplicate indexOf ====
let searchText = "One Piece";
let resultIndex;

for (let i = 0; i < books.length; i++) {
  if (books[i] == searchText) {
    resultIndex = i;
    break;
  }
}

const numbers = [1, 3, 4, 17, 21, 13, 2, 8, 40];

// cara hapus
// numbers.splice(3, 2);

// numbers.pop();

// console.log(numbers);

const sentence = "Halo selamat datang di rumah saya";

const words = sentence.split("a");

console.log(words);
