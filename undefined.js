/*
Undefined:
1. variable value not assigned
2. function but didn't write return anything
3. just wrote return but didn't return anything
4. parameter that is not passed
5. property that doesn't exist in an object
6. accessing array element out of range
7. accessing deleting array element
8. explicitly set value to undefined

*/
// let first;
// console.log(first);

function math(x,y){
    const sum = x + y;
}
console.log(math(2,54));

// function add(x,y){
//     const sum = x + y;
//     return;
// }
// console.log(add(34,3));

function add(x,y){
    const sum = x + y;
    if(x>34){
        return;
    }
}
console.log(add(34,3));

function double(a,b){
    const result = a * 5;
    console.log(b);
    return result;
}
double(34);

const fifth = {name: 'Masum', age: 21, location: 'Bangladesh'}
console.log(fifth.surname)

const six = [23,323,54,567,34];
// console.log(six[8]);

delete six[2];
console.log(six[2]);

const seven = undefined;
console.log(seven)

const obj = {name: 'john', work: null};
console.log(obj.work);
