// Conditions
const benar=true
const salah=false

const password="passwor"

// Jika Password > 8 = Strong Password
// Jika Password = 8 = Medium Password
// Jika Password < 8 = Weak Password

if (password.length > 8)  {
    console.log("Strong Password!");
} else if (6 < password.length && password.length <= 8) {
    console.log("Medium Password!");
} else {
    console.log("Weak Password");}
