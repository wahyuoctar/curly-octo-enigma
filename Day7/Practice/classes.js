//Classes


class Book {
    constructor(productName, price){
        this.productName = productName
        this.price = price
        this.qty = 3
        this.bought = 0
    }

    calculateTotalPrice = () => {
        return this.price * this.qty
    }
    toString = () => {
        return `${this.productName} || Rp. ${this.price.toLocaleString()} x ${this.qty} = Rp. ${this.calculateTotalPrice().toLocaleString()}`
    
    }
}


const books = [
    new Book("LOTR", 10000),
    new Book("Harry", 8000),
    new Book("Avatar", 7000)
]

// console.log(books);
// console.log(books[1].price);
const bukuBaru = new Book("One Piece", 10000)

console.log(bukuBaru.toString());
