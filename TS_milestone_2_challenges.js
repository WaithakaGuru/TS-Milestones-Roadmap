// Challenge 1: Sum of Positives
function sumOfPositives(numArray) {
  var sum = 0;
  for (var i = 0; i < numArray.length; i++) {
    sum += numArray[i] > 0 ? numArray[i] : 0;
  }
  return sum;
}
// Challenge 2: Find Maximum Value
function findMax(numArray) {
  var largest = numArray[0];
  for (var p = 0; p < numArray.length; p++)
    largest = numArray[p] > largest ? numArray[p] : largest;
  return largest;
}
function findWinner(canditates) {
  var winners = [canditates[0]];
  for (var _i = 0, canditates_1 = canditates; _i < canditates_1.length; _i++) {
    var candi = canditates_1[_i];
    var winner = winners[winners.length - 1];
    var name_1 = candi.name,
      votes = candi.votes;
    if (votes > winner.votes) {
      winners = [];
      winner = candi;
      winners.push(winner);
    } else if (votes === winner.votes) winners.push(candi);
  }
  return winners.length === 1 ? winners[0] : winners;
}
// Challenge 4: Longest word
function findLongestWord(wordArray) {
  var longest = wordArray[0];
  for (var _i = 0, wordArray_1 = wordArray; _i < wordArray_1.length; _i++) {
    var word = wordArray_1[_i];
    longest = word.length > longest.length ? word : longest;
  }
  return longest;
}
// Challenge 5: Count Properties
function countProperties(obj) {
  var count = 0;
  for (var item in obj) count++;
  return count;
}
// Challenge 6: Filter by Length
function filterByLength(wordArray, minLength) {
  var requiredWords = [];
  for (var _i = 0, wordArray_2 = wordArray; _i < wordArray_2.length; _i++) {
    var word = wordArray_2[_i];
    if (word.length >= minLength) requiredWords.push(word);
  }
  return requiredWords;
}
// Challenge 7: Sum of Even Numbers
function sumEvenNumbers(numArray) {
  var sum = 0;
  for (var _i = 0, numArray_1 = numArray; _i < numArray_1.length; _i++) {
    var num = numArray_1[_i];
    if (num % 2 === 0) sum += num;
  }
  return sum;
}
// Challenge 8: Difference Between Sum of Even and Odd Numbers
function differenceEvenOdd(numArray) {
  var difference = 0;
  for (var _i = 0, numArray_2 = numArray; _i < numArray_2.length; _i++) {
    var num = numArray_2[_i];
    if (num % 2 === 0) difference += num;
    else difference -= num;
  }
  return difference;
}
/* Testing Bay - see!!it works */
console.log(
  "  Test for Summing the positive numbers only in an array of numbers",
);
console.log(sumOfPositives([2, -4, 5, -6, 55, 0, -1])); // 62
console.log(sumOfPositives([1, -3, 5, -2, 9, -8])); // 15
console.log("\n  Test for finding the maximum number in an array of numbers");
console.log(findMax([3, 4, 5, 68, 7, 9])); // 68
console.log(findMax([33, -100, 44, 65, 71])); // 71
console.log(findMax([-1, -34, -5, -9])); // -1
console.log(
  "\n  Test for finding winner among an array of candidates-votes objects",
);
console.log(
  findWinner([
    { name: "Alice", votes: 50 },
    { name: "Bob", votes: 75 },
    { name: "Charlie", votes: 65 },
  ]),
); //  { name: 'Bob', votes: 75 }
console.log(
  findWinner([
    { name: "Alice", votes: 50 },
    { name: "Bob", votes: 75 },
    { name: "Charlie", votes: 65 },
    { name: "Billy", votes: 75 },
  ]),
); // [ { name: 'Bob', votes: 75 }, { name: 'Billy', votes: 75 } ]
console.log("\n  Test for finding longest word in an array of words");
console.log(findLongestWord(["apple", "banana", "pear", "grapefruit"])); // grapefruit
console.log("\n  Test for counting properties in an object");
console.log(countProperties({ name: "Alice", age: 25, city: "Paris" })); // 3
console.log(
  "\n  Test for Filtering words from an array if they don't attain the minLength",
);
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5)); // [ 'giraffe', 'hippo', 'elephant' ]
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 4)); // [ 'giraffe', 'hippo', 'elephant' ]
console.log("\n  Test for summing the Even numbers in an array");
console.log(sumEvenNumbers([1, 2, 4, 5, 6, 7, 89, 0, 34])); // 46
console.log(sumEvenNumbers([1, 3, 5, 7, 9, 3])); // 0
console.log(sumEvenNumbers([1, 3, 5, 7, -4, 3])); // -4
console.log(
  "\n  Test for  finding differnce between the sum of even and odd numbers in an array",
);
console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6])); // 3
console.log(differenceEvenOdd([1, -4, 3, 18, 6, 9])); // 7
