// Soal No 2 Code Wars
// Input = "Abcd", Output = "A-Bb-Ccc-Dddd"

function accum(str) {
    let letters = str.split('');
    let result = [];
    for (var i = 0; i < letters.length; i++) {
      result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
    }
    return result.join('-');
  }




// Binary to Number

const binaryArrayToNumber = arr => {
    let result = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 1){
            result += 2**((arr.length - 1) - i)
        }
        else {result += 0}
    }
    return result
  };



//   Find Missing Letter

function findMissingLetter(array)
{
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  let missingLetter = ""

  
  for(let i = alphabet.indexOf(array[0]); i <= alphabet.indexOf(array[array.length - 1]); i++){
    for(let j = 0; j < array.length; j++){
        if(array[j] == alphabet[i]){
            i++
        }
        else if(array[j] !== alphabet[i]){
            return missingLetter = alphabet[i]}
    }
}

return missingLetter;
  
}

// Soal No 3, sum nilai yg bisa habis dibagi 3 atau 5 yg dibawah nilai 1000

function solution(number){
let sum = 0
for(let i = 0; i < number; i++){
    if(sum % 3 == 0 && sum & 5 == 0){
        i++
    }
    else if(i % 3 == 0 || i % 5 == 0){
        sum += i
    }
}
  return sum
}

// Soal No 4, Jika jumlah huruf X dan O sama banyak, booleannya true

function XO(str) {
    let x = 0
    let o = 0

    for (var i = 0; i < str.length; i++) { 
        if (str[i].toLowerCase() === "x") {
            x++;
        } else if (str[i].toLowerCase() === "o") {
            o++;
        }
    }
    return x === o;

}

// Soal No 5, Sortir

// function longest(s1, s2) {
//     let lupa = ""
//     let sentences = ""
//     let abcResult = ""
//     if(s1 === s2){
//       return abcResult = s1
//     }
//     else{
//       sentences = (s1 + s2).split("")
//       lupa = s1 + s2
//       sentences.sort()
//       for(let i = 0; i < sentences.length; i++)
      
    

//     return abcResult
//   }

  

  // Soal No 6, Angka Romawi

  function solution(number){
  if(number < 1){
    return ""
  }
  if(number >= 1000){
    return "M" + solution(number - 1000)
  }
  if(number >= 900 && number < 1000){
    return "CM" + solution(number - 900)
  }
  if(number >= 500 && number < 900){
    return "D" + solution(number - 500)    
  }
  if(number >= 400 && number < 500){
    return "CD" + solution(number - 400)
  }
  if(number >= 100 && number < 400){
    return "C" + solution(number - 100)    
  }
  if(number >=90 && number < 100){
    return "XC" + solution(number - 90)
  }
  if(number >= 50 && number < 90){
    return "L" + solution(number - 50)   
  }
  if(number >= 40 && number < 50){
    return "XL" + solution(number - 40)
  }
  if(number >= 10 && number < 40){
    return "X" + solution(number - 10)   
  }
  if(number >= 9 && number < 10){
    return "IX" + solution(number - 9)
  }
  if(number >= 5 && number < 9){
    return "V" + solution(number - 5)
  }
  if(number >= 4 && number < 5){
    return "IV" + solution(number - 4)
  }
  if(number >= 1 && number < 4){
    return "I" + solution(number - 1)
  }
  }

// Soal No 7, Create Phone Number
// Cara Yuyu
  function createPhoneNumber(numbers){
    let phoneCode = ""
    let phoneNumberCode
    let phoneIdentity = ""
    let phoneLastFourNumbers = ""

    for(let i = 0; i < numbers.length; i++){
      if(i == 0 || i == 1 || i == 2){
        phoneCode += String(numbers[i])
        phoneNumberCode = `(${phoneCode})`
      }
      else if(i == 3 || i == 4 || i == 5)
      {phoneIdentity += String(numbers[i])}
      else{phoneLastFourNumbers += String(numbers[i])}
    }

    return `(${phoneCode}) ${phoneIdentity}-${phoneLastFourNumbers}`
  }

  // // Cara Orang
  // function createPhoneNumber(numbers){
  //   var format = "(xxx) xxx-xxxx";
    
  //   for(var i = 0; i < numbers.length; i++)
  //   {
  //     format = format.replace('x', numbers[i]);
  //   }
    
  //   return format;
  // }

  function queueTime(customers, n) {
    var w = new Array(n).fill(0);
    for (let t of customers) {
      let idx = w.indexOf(Math.min(...w));
      w[idx] += t;
      
    }
    return Math.max(...w);
  }


  // Soal No 8, Anagram

  function anagrams(word, words) {
    let splitWord = word.split("")
    let result = []
    for(let i = 0; i < words.length; i++)
    if(word.length !== words[i].length){false}
    else{
      let splitWords = words[i].split("")
      for(let j = 0; j < splitWords.length; j++){
        if(splitWord.indexOf(word[j]) == true){
          result.push(splitWords[j])
        }
      }
    } return result
  }

  // Soal No 9, Unique Item

  var uniqueInOrder=function(iterable){
    const resultArr = []

    for(let i = 0; i < iterable.length; i++){
      if(iterable[i] !== iterable[i-1]){
        resultArr.push(iterable[i])
      }
    }
    return resultArr;
  
  }

  // Soal No 10, Compass

  function dirReduc(arr){
    const compass = []
    for(let i = 0; i < arr.length; i++){
      // const south = arr[i].includes("SOUTH")
      // const north = arr[i].includes("NORTH")
      // const east = arr[i].includes("EAST")
      // const west = arr[i].includes("WEST")
      if(arr[i] == "NORTH" && compass.indexOf("SOUTH") == -1){
        compass.push(arr[i])
        i++
      }
      else if(arr[i] == "NORTH" && compass.indexOf("SOUTH")){
        compass.splice(compass.indexOf("SOUTH"), 1)
        i++
      }
      else if(arr[i] == "SOUTH" && compass.indexOf("NORTH") == -1){
        compass.push(arr[i])
        i++
      }
      else if(arr[i] == "SOUTH" && compass.indexOf("NORTH")){
        compass.splice(indexOf("NORTH"), 1)
        i++
      }
      else{return}
  } 
    return compass
  }
  console.log(dirReduc(["NORTH", "SOUTH", "NORTH", "SOUTH"]));