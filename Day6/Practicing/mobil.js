const cars =[
    {brand: "Toyota", year: "2002", colors: ["Red", "Black"]},
    {brand: "Honda", year: "2000", colors: ["Gray", "Black", "White"]},
    {brand: "Suzuki", year: "2005", colors: ["Blue", "Silver"]}
]



// for(let i = 0; i < cars.length; i++){
//     let car = cars[i]
//     let row = `${i+1}. Brand: ${car.brand} || Year: ${car.year} || Colors: `

//     for(let j = 0; j < cars[i].colors.length; j++){
//         row += `${car.colors[j]} `
//     }
//     console.log(row);

// }
let row

for(let i = 0; i < cars.length; i++){
    let car = cars[i]
    row = `${i+1}. Brand: ${car.brand} || Year: ${car.year} || Colors: ${car.colors.join(" ")}`

    console.log(row);

}

