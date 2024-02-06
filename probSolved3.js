function picnicBudget(participants) {
  if (typeof participants !== "number" || participants < 0) {
    return "Participants should be a valid positive number";
  } else {
    let first100Cost = 0;
    let second100Cost = 0;
    let remainingCost = 0;
    let totalCost = 0;
    if (participants <= 100) {
      first100Cost = participants * 5000;
      return first100Cost;
    } else if (participants <= 200) {
      first100Cost = 5000 * 100;
      second100Cost = (participants - 100) * 4000;
      total = first100Cost + second100Cost;
      return total;
    } else {
      first100Cost = 5000 * 100;
      second100Cost = 4000 * 100;
      remainingCost = (participants - 200) * 3000;
      total = first100Cost + second100Cost + remainingCost;
      return total;
    }
  }
}
console.log(picnicBudget(201));
