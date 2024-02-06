// ----------------------------------------------------------------

function printDetails(name, age, address) {
  console.log(`My name is ${name}, My age is ${age}, I live in ${address}.`);
}
printDetails("Shuvankor Hazra", 33, "Bangladesh");

// ----------------------------------------------------------------

function add(a, b) {
  const total = a + b;
  return total;
}
const c = add(20, 50);
console.log(`Add function ${c} return.`);

// ----------------------------------------------------------------

// validation --->

function XX(x, y) {
    if(typeof x !== "number" || typeof y !== "number"){
        return `Invalid Input!`
    }
  const total = x * y;
  return total;
}
const z = XX(2, 88);
console.log(`XX function return ${z}.`);
