/*
Data types:
Primitive data types (akta value thakbe)
1. number
2. string
3. boolean
4. undefined
5. null
6. symbol

Non-primitive data types (onk gula value thakbe)
7. object
*/

let a = 'Json';
let b = a;
// console.log(a, b);
a = 'react';
// console.log(a, b);

const x = {phone: 'samsung'}
const y = x;
console.log(x, y)
// x.phone = 'realme';
y.phone = 'Realme';
console.log(x, y);
