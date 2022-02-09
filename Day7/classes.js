// Classes

class Car{
    constructor(year, brand, color){
        this.year = year
        this.brand = brand
        this.color = color
    }
}

const mobilBaru = new Car("2020", "Toyota", "White")
const mobilLama = new Car("1990", "Ford", "Red")

console.log(mobilBaru);
console.log(mobilLama);

const cars = [
    {year: "2020", brand: "Toyota", color: "White"},
    new Car("2003", "Mini Cooper", "Red")
]




