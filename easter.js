// import readline-sync module, don't touch!

const READLINE = require("readline-sync");


// Write your program below!
// First line should get user input (year) and store it in variable y.
let y = 2003;
let a = y%19;
let b = y/100;
let c = y%100;
let d = b/4;
let e = b%4;
let f = (b + 5)/25;
let g = (b - f + 1)/3;
let h = (19 * a + b - d - g + 15)%30; 
let i = c/4; 
let k = c%4;
let r = (32 + 2 * e + 2 * i - h - k) % 7;
let m = (a + 11 * h + 22 * r)/451;
let n = (h + r - 7 * m +114)/31;
let p = (h + r - 7 * m +114)%31;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(k);
console.log(r);
console.log(m);
console.log(n);
console.log(p);












