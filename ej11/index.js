

for (let index = 0; index < 36000; index++) {
    
    let num1 = getRandomInt(1, 7);
let num2 = getRandomInt(1, 7);

let sum = num1 + num2;
    
}

//para generar un número aleatorio,
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }