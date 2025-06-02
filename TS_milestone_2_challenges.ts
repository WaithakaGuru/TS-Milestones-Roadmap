// Challenge 1: Sum of Positives
function sumOfPositives(numArray: number[]): number {
  let sum: number = 0;
  for (let i: number = 0; i < numArray.length; i++) {
    sum += numArray[i] > 0 ? numArray[i] : 0;
  }
  return sum;
}

// Challenge 2: Find Maximum Value
function findMax(numArray: number[]): number {
  let largest: number = numArray[0];
  for (let p: number = 0; p < numArray.length; p++)
    largest = numArray[p] > largest ? numArray[p] : largest;
  return largest;
}

// Challenge 3: Election winner
type Candidate = {
  name: string;
  votes: number;
};

function findWinner(canditates: Candidate[]): Candidate[] | Candidate {
  let winners: Candidate[] = [canditates[0]];
  for (const candi of canditates) {
    let winner: Candidate = winners[winners.length - 1];
    const { name, votes } = candi;
    if (votes > winner.votes) {
      winners = [];
      winner = candi;
      winners.push(winner);
    } else if (votes === winner.votes) winners.push(candi);
  }
  return winners.length === 1 ? winners[0] : winners;
}

// Challenge 4: Longest word
function findLongestWord(wordArray: string[]): string {
  let longest: string = wordArray[0];
  for (const word of wordArray)
    longest = word.length > longest.length ? word : longest;
  return longest;
}

// Challenge 5: Count Properties
function countProperties(obj: Object): number {
  let count: number = 0;
  for (const item in obj) count++;
  return count;
}

// Challenge 6: Filter by Length
function filterByLength(wordArray: string[], minLength: number): string[] {
  let requiredWords: string[] = [];
  for (const word of wordArray) {
    if (word.length >= minLength) requiredWords.push(word);
  }
  return requiredWords;
}

// Challenge 7: Sum of Even Numbers
function sumEvenNumbers(numArray: number[]): number {
  let sum: number = 0;
  for (const num of numArray) {
    if (num % 2 === 0) sum += num;
  }
  return sum;
}

// Challenge 8: Difference Between Sum of Even and Odd Numbers
function differenceEvenOdd(numArray: number[]): number {
  let difference: number = 0;
  for (const num of numArray) {
    if (num % 2 === 0) difference += num;
    else difference -= num;
  }
  return difference;
}

// Challenge 9: Count Truthy 
function countTruthy(obj: Object) : number {
  let truthyValuesCount : number = 0;
  for(const item of Object.values(obj)){
    if(item) truthyValuesCount ++;
  }
  return truthyValuesCount;
}

// Challenge 10: Average of Numbers

// Approach One (using reduce())
function getAvg(numArray: number[]): number {
  if (numArray.length === 0) return 0;
  return numArray.reduce((a, b) => a + b, 0) / numArray.length;
}

// Approach Two (no inbuilt func)
function findAvg(numArray: number[]): number {
  if (numArray.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  return sum / numArray.length;
}

// Challenge 11: Linear Search
function linearSearch(arr: number[] | string[], target: number | string): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// Challenge 12: Reverse Linear Search
function reverseLinearSearch(arr: number[] | string[], target: number | string): number {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// Challenge 13: Linear Search All Indices
function linearSearchAll(arr: (number | string)[], target: number | string): number[] {
  const foundAt: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) foundAt.push(i);
  }
  return foundAt;
}

// Challenge 14: Count Occurrences
function countOccurrences(stringArray: string[]): { [key: string]: number } {
  const count: { [key: string]: number } = {};
  for (let i = 0; i < stringArray.length; i++) {
    const item: string = stringArray[i];
    count.item = (count.item || 0) + 1;
  }
  return count;
}

// Challenge 15: Remove Duplicates
function removeDuplicates(arr: number[]): number[] {
  const cleanArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (!cleanArr.includes(arr[i])) cleanArr.push(arr[i]);
  }
  return cleanArr;
}

// Challenge 16: Most Frequent
function mostFrequent(arr: (number | string)[]): number | string {
  const frequencyObj: Record<string, number> = {};
  for (let i = 0; i < arr.length; i++) {
    const key = String(arr[i]);
    frequencyObj[key] = (frequencyObj[key] || 0) + 1;
  }

  let mostFrequent = Object.keys(frequencyObj)[0];
  for (const key of Object.keys(frequencyObj)) {
    if (frequencyObj[key] > frequencyObj[mostFrequent]) {
      mostFrequent = key;
    }
  }

  // Convert back to number if applicable
  const parsed = parseFloat(mostFrequent);
  return isNaN(parsed) ? mostFrequent : parsed;
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

console.log("\n  Test for counting truthy properties-values in an object");
console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null })); // 2
console.log(countTruthy({ a: 0, b: "hello", c: 45, d: 42, e: null })); // 3
console.log(countTruthy({ a: 0, b: "hello", c: 45, d: NaN, e: null })); // 2
