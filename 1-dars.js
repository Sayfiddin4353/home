// 1-dars vazifalari

// Begin1

// var a = 5;
// var P = 4 * a;
// console.log(P)

// Begin2

// var a = 5;
// var S = a * a;
// console.log(S)

// Begin3

// var a = 5;
// var b = 6;
// var S = a * b;
// console.log(S)
// var P = 2 * (a + b);
// console.log(P)

// Begin4

// var d = 10;
// const pi = 3.14;
// var L = pi * d;
// console.log((L).toFixed(2));

// Begin5

// var a = 10;
// var V = a * a * a;
// var S = 6 * a * a;
// console.log(V);
// console.log(S);

// Begin6

// var a = 3;
// var b = 4;
// var c = 5;
// var V = a * b * c;
// var S = 2 * (a * b + b * c + a * c);

// console.log(V);
// console.log(S);

// Begin7

// var R = 8;
// const pi = 3.14;
// var L = pi * R * R;
// var S = pi * Math.pow(R, 2);

// console.log("Doiraning uzunligi = ", L);
// console.log("Doiraning yuzi = ", S);

// Begin8

// var a = 8;
// var b = 17;
// console.log("O'rta arifmetigi = ", (a + b) / 2);

// Begin9

// var a = 3;
// var b = 27;
// console.log("O'rta geometrigi = ", (a * b) ** (1 / 2));
// console.log("O'rta geometrigi = ", Math.pow((a * b), 1 / 2));
// console.log("O'rta geometrigi = ",Math.sqrt(a*b));

// Begin10

// var a = 5.5;
// var b = 6.5;
// console.log("Yg'indisi = ", (a + b));
// console.log("Ko'paytmasi = ", (a * b));
// console.log("1-sonning kvadrati = ", (a * a));
// console.log("2-sonning kvadrati = ", (b ** 2));

// Begin11


// var a = -5.5;
// var b = -6.5;
// console.log("Yg'indisi = ", (a + b));
// console.log("Ko'paytmasi = ", (a * b));
// console.log("1-sonning moduli = ", Math.abs(a));
// console.log("2-sonning moduli = ", Math.abs(b));

// Begin12

// var a = 3;
// var b = 4;
// var c = ((a * a) + (b * b)) ** (1 / 2);
// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// console.log("Gepotenuzasi c = ", c);
// var P = a + b + c;
// console.log("Perimetri P = " + P);

// Begin13

//  (R1 > R2)  Shartga muvofiq kiritilsin.
// var R1 = 13;
// var R2 = 10;
// const pi = 3.14;
// var S1 = pi * (R1*R1);
// var S2 = pi * (R2*R2);
// let S3 = S1 - S2;
// console.log("S3= ", S3);
// S3 = pi * (R1*R1  - R2 * R2);
// console.log('S3= ', S3);
// console.log("S1 = ", S1);
// console.log("S2 = ", S2);
// console.log("Yuzalar ayirmasi (S1-S2) = ", S3);

// Begin14

// var L = 250;
// const pi = 3.14;
// var R = L / (2 * pi);
// var S = pi * R * R;
// console.log("Doiraning radiusi R = ", R);
// console.log("Doiraning yuzi S = ", S);

// Begin15

// var S = 400;
// const pi = 3.14;
// var R = Math.sqrt(S / pi);
// console.log(R);
// R = Math.pow(S / pi, 1 / 2);
// console.log(R);
// R = (S / pi) ** (1 / 2);
// console.log(R);
// var d = 2 * R;
// console.log("Radius = ",R);
// console.log("Diametr = ",d);

// Begin16

// var x1 = 15;
// var x2 = 20;
// console.log("Ikki nuqta orasidagi masofa = ", Math.abs(x2 - x1));

// Begin17

// var A = 5;
// let B = 10;
// var C = 20;
// console.log("AC kesmaning uzunligi AC = ", Math.abs(A - B));
// console.log("BC kesmaning uzunligi BC = ", Math.abs(C - B));
// console.log("Kesmalar yig'indisi = ", Math.abs(A - B) + Math.abs(C - B));

// Begin18

// var A = 5;
// let C = 10;
// var B = 20;
// console.log("AC kesmaning uzunligi AC = ", Math.abs(C - A));
// console.log("BC kesmaning uzunligi BC = ", Math.abs(B - C));
// console.log("Kesmalar ko'paytmasi = ", Math.abs(C - A) * Math.abs(B - C));

// Begin19

// var x1 = 5;
// var x2 = 10;
// var y1 = 7;
// var y2 = 18;
// var a = x2 - x1;
// var b = y2 - y1;
// var P = 2 * (a + b);
// var S = a * b;
// console.log("To'g'ri to'rtburchakning perimetri P = ", P);
// console.log("To'g'ri to'rtburchakning yuzasi S = ", S);


// Begin20

// var x1 = 5;
// var x2 = 12;
// var y1 = 8;
// var y2 = 18;
// var a = x2 - x1;
// var b = y2 - y1;
// var c = ((a ** 2) + (b ** 2)) ** (1 / 2);
// console.log("Ikki nuqta orasidagi masofa ",c.toFixed(2))

// Begin22

// var A = 5;
// var B = 6;
// var C = A + B;
// A = C - A;
// B = C - B;
// console.log("A =", A);
// console.log("B = ", B);

// Begin23

var A = 5;
var B = 6;
var C = 7;
var Z = A + B + C;
A = Z - (A + B);
B = Z - (B + C);
C = Z - (A + B);
console.log("A = ", A);
console.log("B = ", B);
console.log("C = ", C);
