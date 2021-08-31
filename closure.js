
// function stopWatch(){
//     let counter = 0;
//     return function(){
//         counter++;
//         return counter;
//     }
// }

function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}
let clockOne = stopWatch();
console.log(clockOne());
console.log(clockOne());
console.log(clockOne());
console.log(clockOne());