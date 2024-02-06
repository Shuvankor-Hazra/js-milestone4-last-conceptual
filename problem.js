// check if the number is even or odd .

const num = 6;

function checkEvenOdd(x){
    if(x % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

const result = checkEvenOdd(num);
// console.log(result);



function printName(x){
    for(let i = 0; i < x; i++){
        console.log("Shuvankor Hazra");
    }
}
printName(50);