const arr = [1, [2, [3, [4,[5],[6,7],[8,9]]]]];

const result = arr.flat(Infinity);

console.log(result); // [1, 2, 3, 4]


const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);