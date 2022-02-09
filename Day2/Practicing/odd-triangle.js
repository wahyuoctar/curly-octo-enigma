let numberOfRows = 5;
let values = "";
let counter = 1;

for (let i = 1; i <= numberOfRows; i++) {
  for (let j = 1; j <= i; j++) {
    values += counter + " ";
    counter += 2;
  }
  console.log(values);
  values = "";
}
