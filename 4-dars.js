// function sum() {
//   const b = '03.1400';
//   const c = b.replace('0', '');
//   return c.slice(0, 4);
// }

// console.log(sum());

// 2-misol

// function sum() {
//   const b = '230.000';
//     return b.slice(0, 3);
// }

// console.log(sum());

// 3-misol

// function sum() {
//   const b = '00402';
 
//   return b.slice(2, 5);
// }

// console.log(sum());

// 4-misol

// function sum() {
//   const b = '30';
 
//     return Number(b);
// }

// console.log(sum().toString());

// symbolli masalalar

sym = ['@', 4, '@', '@'];
function bool(arr) {
    
    for (i = 0; i < bool.length - 1; i++) {
        if (arr[i] !== arr[i + 1]) {
            return false;
        }
    }
    return true;
}
bool(sym);
console.log(bool(sym));



// // 4-misol

// const Test = (a) => {
//     a = "SheWalksToTheBeach";

// }