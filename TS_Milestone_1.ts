// Challenge 1: Sum of Two Numbers
function addition(num1: number, num2: number): number {
  return num1 + num2;
}

// Challenge 2: Convert minutes into seconds
function convertMinToSecs(numberOfMinutes: number): number {
  return numberOfMinutes * 60;
}

// Challenge 3: Find Perimeter of a Rectangle
function findRectanglePerimeter(
  length: number,
  width: number,
): number | string {
  // No negative length or width
  if (length > 0 && width > 0) return 2 * length + 2 * width;
  return "Length / Width of a shape cannot be negative";
}

// Challenge 4: Check Negative
function isNegative(num: number): boolean {
  return num < 0;
}

// Challenge 5: Can Drive
function canDrive(name: string, age: number): string {
  if (age >= 18) return `${name} is old enough to drive`;
  return `${name} is not old enough to drive`;
}

// Challenge 6: Largest number
function getLargest(num1: number, num2: number, num3: number): number {
  let largest: number = num1;
  if (num2 >= num1 && num2 >= num3) largest = num2;
  else if (num3 >= num1 && num3 >= num2) largest = num3;
  return largest;
}

/* Testing Bay - testing my code */
console.log("Test for addition of Two numbers");
console.log(addition(-3, 7)); // 4
console.log(addition(45, 71)); // 116
console.log(addition(-21, -13)); // - 34

console.log("\n  Test for Coversion of Minutes to Seconds");
console.log(convertMinToSecs(72)); // 4320
console.log(convertMinToSecs(12)); // 720
console.log(convertMinToSecs(0.5)); // 30

console.log("\n Test for finding Rectangle's Perimeter");
console.log(findRectanglePerimeter(9, 6)); // 30
console.log(findRectanglePerimeter(12, 7)); // 38
console.log(findRectanglePerimeter(-3, 5)); // 'Length / Width of a shape cannot be negative'

console.log("\n  Test for checking whether a number is negative");
console.log(isNegative(12)); // false
console.log(isNegative(-3)); // true

console.log("\n  Test for checking whether user is old enough to drive");
console.log(canDrive("Jamoh", 32)); // 'Jamoh is old enough to drive'
console.log(canDrive("Puruh", 17)); // 'Puruh is not old enough to drive'
console.log(canDrive("Mwihaki", 18)); // 'Mwihaki is not old enough to drive'

console.log("\n  Test to find Largest Number among three numbers");
console.log(getLargest(1, 2, 3)); // 2
console.log(getLargest(-1, -22, -4)); // -1
console.log(getLargest(22, 23, 23)); // 23
