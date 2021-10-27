// 2- dars vazifalari

// Darajaga ko'tarish.
// function pow(a, b) {
//     return a ** b;
// }
// console.log(pow(2,3))

// Ildiz ostiga olish

// function sqrt(a, b) {
//     return a ** (1 / b);
// }
// console.log(sqrt(8,3))

// cbrt 

// function cbrt(a) {
//     return a ** (1 / 3);
// }

// console.log(cbrt(8));

// abs

// function abs(a) {
//     return (a ** 2) ** (1 / 2);
// }
// console.log(abs(2))


// floor

// function fl(a) {
//     return  a-(a%1);
// }
// console.log(fl(9,8))

// ceil

// function yuqori(a) {
//     return (a-(a%1))+1;
// }

// console.log(yuqori(6,2))

// round

var a = 3.2;
if (a % 1 >= 0.5) {
    a= a - (a % 1) + 1;
    console.log(a);
} else {
    a = a - (a % 1);
    console.log(a)
}

