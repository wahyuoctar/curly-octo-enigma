const product = {
    productName: "LOTR",
    price: 20000,
    quantity: 0

}

const newProduct = {
    ...product,
    author: "Seto"
}

console.log(newProduct);

//Spread Operator berfungsi untuk membuka kurung pada object atau array
//Sehingga hanya mengambil isi nya