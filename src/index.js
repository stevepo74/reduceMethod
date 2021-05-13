//.reduce

const scores = [3, 5, 6, 7];

//syntax:
// scores.reduce((accumulator, currentValue) => accumulator + currentValue)

const total = scores.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(total);
