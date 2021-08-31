/*
Truthy:
true,
any number (positive or negative) without 0 but '0' is true
any string without empty string (single whitespace is also truthy)
'false'
[]
{}
anything else that is not falsy will be truthy



--------------------------------------------------
Falsy:
false,
0
empty string
undefined
null
NaN





*/
// const x = false;
// if(x){
//     console.log('variable is truthy');
// }
// else{
//     console.log('variable is falsy')
// }

// const y = true;
// if(y){
//     console.log('variable is truthy');
// }
// else{
//     console.log('variable is falsy')
// }

// const y = 4;
// if(y){
//     console.log('variable is truthy');
// }
// else{
//     console.log('variable is falsy')
// }

// const y = 0;
// if(y){
//     console.log('variable is truthy');
// }
// else{
//     console.log('variable is falsy')
// }

// const y = '0';
// if(y){
//     console.log('variable is truthy');
// }
// else{
//     console.log('variable is falsy')
// }

// const y = -2;
// if(y){
//     console.log('variable is truthy');
// }
// else{
//     console.log('variable is falsy')
// }

// let y = NaN;
// console.log(y)
// if(y){
//     console.log('variable is truthy');
// }
// else{
//     console.log('variable is falsy')
// }

let y = {};
console.log(y)
if(y){
    console.log('variable is truthy');
}
else{
    console.log('variable is falsy')
}