// validation --->

function XX(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return `Invalid Input!`;
  }
  const total = x * y;
  return total;
}
const z = XX(2, 88);
// console.log(`XX function return ${z}.`);

function details(info) {
  if (typeof info !== "object" || !info.name || !info.age) {
    return `Provide legal information`;
  }
  return `my name is ${info.name}, my age is ${info.age}.`;
}

// console.log(details({name: "Shuvankor Hazra", age: 33}));

// ----------------------------------------------------------------

function details2(info) {
  if (typeof info !== "object") {
    return "input should be an object";
  } else if (!info.name || !info.age) {
    return "object must contain name and age property";
  } else if (typeof info.name !== "string" || typeof info.age !== "number") {
    return "name should be an string and age should be a number";
  } else if (info.age <= 0) {
    return "age should be positive number";
  }
  return `my name is ${info.name}, my age is ${info.age}.`;
}

console.log(details2({name: "Shuvankor Hazra", age: 33}));
