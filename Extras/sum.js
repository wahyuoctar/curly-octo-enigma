// Sum the lowest number of the array
// with the highest number of the array

// input: [7, 2, -2, 4, 9, 3, 1]
// output: 7
// explanation: 9 is the highest, -2 is the lowest
//              9 + (-2) = 7


let numbers = [7, 2, -2, 4, 9, 3, 1]
let highestNumber = 0
let lowestNumber = 0


// Angka Max
for(let i = 0; i < numbers.length; i++)
{
    if(numbers[i] > highestNumber){
        highestNumber = numbers[i]
    }
}

for(let j = 0; j < numbers.length; j++)
{
    if(numbers[j] < lowestNumber){
        lowestNumber = numbers[j]
    }
}

console.log(`Angka Terendah = ${lowestNumber}`);
console.log(`Angka Tertinggi = ${highestNumber}`);
console.log(`Jumlah = ${lowestNumber + highestNumber}`);