class Product{
    constructor(productName, price){
        this.productName = productName
        this.price = price
        this.qty = 0
    }

    calculateTotalPrice () {
        return this.price * this.qty
    }
}

class Book extends Product{
    constructor(productName, price, author, pages){
        //Super ini contructor nya dari Product
        super(productName, price)
        this.author = author
        this.pages = pages
    }

    //Nimpa Method sebelumnya
    calculateTotalPrice(){

    }
}


console.log(new Book("LOTR", 200000, "Wahyu", 290));