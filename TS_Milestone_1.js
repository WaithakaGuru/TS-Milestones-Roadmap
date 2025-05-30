// Challenge 1: Sum of Two Numbers
function addition(num1, num2) {
  return num1 + num2;
}
// Challenge 2: Convert minutes into seconds
function convertMinToSecs(numberOfMinutes) {
  return numberOfMinutes * 60;
}
// Challenge 3: Find Perimeter of a Rectangle
function findRectanglePerimeter(length, width) {
  // No negative length or width
  if (length > 0 && width > 0) return 2 * length + 2 * width;
  return "Length / Width of a shape cannot be negative";
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
