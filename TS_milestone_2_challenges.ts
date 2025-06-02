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
