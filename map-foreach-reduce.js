const nums = [1, 2, 3, 4];

const square = nums.map((num) => num *num);
console.log(square); // Output: [1, 4, 9, 16]


const sum = nums.reduce((total,num) => total + num, 0);
console.log(sum); // Output: 10


const evennums = nums.filter((num) => num % 2 === 0);
console.log(evennums); // Output: [2, 4]

const multiplied = nums.forEach((num, index) => {
    nums[index] = num * 2;
});
console.log(nums); // Output: [2, 4, 6, 8]  