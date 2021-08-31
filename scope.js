
// var diye korle blockscope hoy na
// var holo hoisting
// let and const holo blockscope
// kono kicu variable diye na likhle ota global hoye jai,
// j kono jaiga theke ota k call kore jai, so avoit it

const num = 56;
function add(first, second){
    console.log(first)
    const result = first + second;
    if(result >54){
        // var name = 'Happy';
        // console.log(name);

        //not recomended
        name = 'happy';
    }
    // console.log(result);
    // console.log(num);
    return result;
    // not allowed
    // console.log(result);
    // console.log(num)
}
const sum = add(34,23);
console.log(num)

// not allowed
// console.log(sum);
// console.log(result)
console.log(name);

// avoid var , always use let and const
for(var i = 1; i <= 10; i++){

}
console.log(i)

for(let x = 0; x < 20; x++){
    //correct
    // console.log(x)
}

console.log(x);