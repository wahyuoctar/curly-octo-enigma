const buku = {
    title: "Harry Potter",
    author: {
        name: "J.K. Rowling",
        age: 50,
        nationality: "Inggris"
    },
    pages: 658,
    yearReleased: "2001",
    alternativeTitles: ["Sang Penyihir", "The Wizard"]
}


// //dot notation
// console.log(buku.alternativeTitles);

// //bracket notation
// console.log(buku["author"]);

// //mengubah isi properti
// buku.pages = 720

// //menghapus properti
// // delete buku.title



// // Object destructuring

// let {yearReleased, title, pages} = buku

// console.log(yearReleased);
// console.log(title);
// console.log(pages);

//menambah object
buku.push(baju)

console.log(buku);