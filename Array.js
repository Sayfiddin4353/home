// 1-masala

// var fruit = ['apple', 12, 'Ananas', 'Orange', 'Banana'];
// var count = 0;
// var a = fruit.join('');
// console.log(a);
// for (i = 0; i < a.length; i++){
//     if (a[i] == 'a' || a[i] == 'A') {

//         count++;
//     }
// }

// console.log(count, 'ta a harfi bor');

// 2-masala

// var number = [10, 5, 11, 'apple', 2, 3, 4, 5, 6];
// var sum = 0;

// let rest = number.filter((value) => {
//     return typeof value ==='number'
// });
// // console.log(rest)

// for (i = 0; i < rest.length; i++){
//     sum = sum + rest[i];
// }
// console.log(sum);

// 3-masala

// var number = [10, 5, 11, 'apple', 2, 3, 4, 5, 6];

// var a = 0;
// var b = 0;
//    let rest = number.filter((value) => {
//     return typeof value ==='number'
//    });
// rest = rest.sort((a, b) => a - b);
// console.log(rest);

// a = rest[1];
// b = rest[rest.length - 2];

// console.log("Eng kichigining bitta kattasi = ", a);
// console.log("Eng kattasining bitta kichigi = ", b);

// 4-masala

// var number = [10, 5, 11, 2, 3, 4, 5, 6];
// juft = number.filter((value, index) => index % 2 == 0);
// toq = number.filter((value, index) => index % 2 == 1);
// sum = 0;
// console.log(juft);
// console.log(toq);
// console.log(juft.reduce((a, b) => a + b));
// console.log(toq.reduce((a, b) => a + b));


// var number = [10, 5, 11, 2, 3, 4, 5, 6];
// var juft = [];
// var toq = [];
// for (i = 0; i < number.length; i++){
//     if (i % 2 == 0) {
//         juft.push(number[i]);
//     } else {
//         toq .push(number[i]);
//     }
    
// }
// console.log(juft);
// console.log(toq);

// Array elementlarini teskarisiga chiqarish.

// var number = [10, 5, 11, 2, 3, 4, 5, 6];
// let newar = [];
// for (i = number.length-1; i >= 0; i--){
//      newar.push(number[i]);
// }
// console.log(newar);

// Filter ni metoddan foydalanmay chiqarish

// Number uchun
// var number = [10, 5, 11, 'string ','salom',2, 3, 4, 5, 6];
// var newar = [];
// for (i = 0; i < number.length; i++){
//     if (  number[i]>=6 ) {
//         newar.push(number[i]);
//     }
// }
// console.log(number)
// console.log(newar)

// funksiyadan foydalanish
var number = [10, 5, 11, 'string ','salom',2, 3, 4, 5, 6];

// const sarala = (array) => {
// var newar = [];
// for (i = 0; i < array.length; i++){
//     if (  array[i]>=6 ) {
//         newar.push(array[i]);
//     }
// }
//     return newar
// }

// console.log(sarala(number))

// String uchun

// var fruit = ['apple',  'Ananas', 'Orange', 'Banana'];
// var newfruit = [];
// for (i = 0; i < fruit.length; i++){
//     if ( fruit[i] ===  fruit[i].toUpperCase()) {
//         newfruit.push(fruit[i]);
//     }
// }
// console.log(newfruit);
// console.log(string);


