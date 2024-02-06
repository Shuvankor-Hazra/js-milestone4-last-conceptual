function pandaCost(singara, samucha, jilabi) {
  if (
    typeof singara !== "number" ||
    typeof samucha !== "number" ||
    typeof jilabi !== "number"
  ) {
    return "please provide valid integer number!";
  } else if (singara < 0 || samucha < 0 || jilabi < 0) {
    return "all parameters should be positive numbers!";
  } else {
    const singaraPrice = 7;
    const samuchaPrice = 10;
    const jilabiPrice = 15;
    const total =
      singara * singaraPrice + samucha * samuchaPrice + jilabi * jilabiPrice;
    return total;
  }
}
console.log(pandaCost(-10, 10, 10));
