//array para guardar cuantas veces se repite las sumas:
//2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
let arraySums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let index = 0; index < 36000; index++) {

    let num1 = getRandomInt(1, 7);
    let num2 = getRandomInt(1, 7);

    let sum = num1 + num2;

    //switch para sumar veces cuando se repite cada suma,
    switch (sum) {
        case 2:
            arraySums[0]++;
            break;
        case 3:
            arraySums[1]++;
            break;
        case 4:
            arraySums[2]++;
            break;
        case 5:
            arraySums[3]++;
            break;
        case 6:
            arraySums[4]++;
            break;
        case 7:
            arraySums[5]++;
            break;
        case 8:
            arraySums[6]++;
            break;
        case 9:
            arraySums[7]++;
            break;
        case 10:
            arraySums[8]++;
            break;
        case 11:
            arraySums[9]++;
            break;
        case 12:
            arraySums[10]++;
            break;
    }
}
let index = 2;

//mostramos el resultado,
for (let i = 0; i < arraySums.length; i++) {

    console.log(index + ": " + arraySums[i])
    index++;
}
//para generar un número aleatorio,
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}