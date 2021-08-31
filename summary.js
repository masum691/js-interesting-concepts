
// data type
// primitive
const x = 'Masum';
const y = 23;
const m = true;
// undefined
// null

//non primitive
//object

// js er array ak doroner object
const nums = [45,23,65];
console.log(typeof nums)

// check array
// Array.isArray(nums);

function triple(x , y , z){
    x.age = 34;
    y = 23;
    z = 25;
}
const numOne = 34;
const numTwo = 65;
const numThree = 89;
triple(numOne, numTwo, numThree);
console.log(numOne,numTwo, numThree)
// console.log(typeof triple);
console.log(triple.length);
console.log(typeof null);


const charecter = {name: 'karim', age: 23};
triple(charecter);
console.log(charecter);
