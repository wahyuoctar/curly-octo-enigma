// ====== FUNCTION DINAMIS ======

let fruits = ["Apel", "Mangga", "Jeruk", "Naga"];
let fruitPrices = [7000, 8000, 6000, 9000]

let books = ["LOTR", "Harry Potter", "Sherlock", "Naruto"];
let bookPrices = [10000, 30000, 40000, 50000];

function displayUsername(itemNames, itemPrices){

    for(i = 0; i < itemNames.length; i++){
    console.log(`${itemNames[i]} Rp. ${itemPrices[i].toLocaleString()}`);
    }
}


console.log(`===== BUAH =====`);
displayUsername(fruits, fruitPrices)
console.log(`\n`);
console.log(`===== BUKU =====`);
displayUsername(books, bookPrices)


// ====== ANONYMOUS FUNCTION ======

const a = function(){

    // bebas isi aoa
}

a ()

// ================================

// ====== ARROW FUNCTION ======

const b = (z, y) => z + y

console.log(b(3, 2));

// ============================