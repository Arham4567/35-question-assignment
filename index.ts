//Q1
console.log("hello world");
console.log();

//Q2
let temp = 5;
if (temp < 20) {
  console.log("its cold today");
}
console.log();
//Q3
let apples = 10;
let remaining = apples - 3;
console.log("remaining apples", remaining);
console.log();
//Q4
let firstname = "Arham";
let lastname = "Afzal";
console.log(`${firstname} ${lastname}`);
console.log();
//Q5
let num = 5;
if (num > 3) {
  console.log("YES");
} else console.log("NO");
console.log();
//Q6
function calculateArea(radius: number): number {
  return Math.PI * radius * radius;
}
calculateArea(9);
console.log();
//Q7

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
console.log();
//Q8
const temperatures = [32, 43, 9, 56, 22];
let highest: number = temperatures[0];
for (let temp of temperatures) {
  if (temp > highest) highest = temp;
}
console.log(highest);
console.log();
//Q9
function userage(input: number) {
  if (input < 18) {
    console.log("under age");
  } else console.log("adult");
}
userage(19);
console.log();
//Q10
const numberArrays = [1, 2, 3, 4, 5, -6, -7, -8, 0, 100];

const checkNumberPositive = (numberArray: number[]) => {
  let count = 0;
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0) {
      count = count + 1;
    }
  }
  return count;
};
console.log("count", checkNumberPositive(numberArrays));
console.log();
//Q11

function wordsstartswithA(words: string[]): string[] {
  return words.filter((word) => word.toLowerCase().startsWith("a"));
}

const arr = ["Apple", "Mango", "Apricot"];
const filter = wordsstartswithA(arr);
console.log(filter);
console.log();
//Q12

const fruits = ["apple", "grapes", "banana", "melon"];
fruits.shift();
fruits.shift();
console.log(fruits);
console.log();
//Q13
function squaredno(numbers: number[]): number[] {
  return numbers.map((nmber) => nmber ** 2);
}
const arr2 = [5, 3, 6, 2, 1, 0];
const number = squaredno(arr2);
console.log(number);
console.log();
//Q14
function reversearray(array: any[]): any[] {
  const reversearray: number[] = [];
  for (let q = array.length - 1; q >= 0; q--) {
    reversearray.push(array[q]);
  }
  return reversearray;
}
const arr3 = [1, 2, 3, 4, 5, 6];
const reversedarray = reversearray(arr3);
console.log(reversedarray);
console.log();
//Q15
const scores: number[] = [10, 5, 20, 20, 4, 5, 2, 25, 1];
function logScoreComparison(scores: number[]): void {
  let maxScore = scores[0];
  let minScore = scores[0];
  let exceedCount = 0;
  let fallBelowCount = 0;

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > maxScore) {
      maxScore = scores[i];
      exceedCount++;
    } else if (scores[i] < minScore) {
      minScore = scores[i];
      fallBelowCount++;
    }
  }

  console.log(
    `Number of times score exceeded the maximum score: ${exceedCount}`
  );
  console.log(
    `Number of times score fell below the minimum score: ${fallBelowCount}`
  );
}

logScoreComparison(scores);
console.log();
//Q16
function correctarr(mixarr: any[]): any[] {
  return mixarr.filter(Boolean);
}
const anarr = ["hello", 8, null, NaN, false, 0, undefined];
console.log(correctarr(anarr));
console.log();
//Q17
const firstarray = ["apple", "guava"];
const secondarray = ["grapes", "melon"];
console.log(firstarray.concat(secondarray));
console.log();
//Q18
function sumofelements(arrayofnumbers: number[]): number {
  return arrayofnumbers.reduce((s, n) => s + n);
}
const arr4 = [2, 4, 6, 5, 3];
const sumofallelements = sumofelements(arr4);
console.log(sumofallelements);
console.log();
//Q19
const myArray: number[] = [1, 2, 3, 4, 5];
const elementToFind: number = 3;
function findElementIndex(arr: any[], element: any): number {
  const index = arr.indexOf(element);
  return index !== -1 ? index : -1;
}
const index: number = findElementIndex(myArray, elementToFind);
console.log(`Index of ${elementToFind} in the array: ${index}`);
console.log();
//Q20
const numbers: number[] = [5, 3, 9, 1, 7];
function findSmallestNumber(arr: number[]): number {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}
const smallestNumber: number = findSmallestNumber(numbers);
console.log("The smallest number is:", smallestNumber);
console.log();
//Q21
const nmbrs = [3, 5, 1, 2];
function calculateproduct(array: number[]): number {
  return array.reduce((s, n) => s * n);
}

const required = calculateproduct(nmbrs);
console.log("Product of the given array=", required);
console.log();
//Q22
function filterbylength(array: string[], n: number): string[] {
  return array.filter((arr) => arr.length > n);
}
const a = ["apple", "guava", "banana", "grapes"];
const n = 5;
console.log(filterbylength(a, n));
console.log();
//Q23
function findDuplicates(arr: any[]): void {
  const map = new Map<any, number>();

  arr.forEach((item) => {
    if (map.has(item)) {
      map.set(item, map.get(item)! + 1);
    } else {
      map.set(item, 1);
    }
  });

  map.forEach((count, item) => {
    if (count > 1) {
      console.log(`Duplicate '${item}' found ${count} times.`);
    }
  });
}
const array = [1, 2, 3, 4, 2, 5, 6, 1, 3];
findDuplicates(array);
console.log();
//Q24
function incrementAll(arr: number[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] + 1);
  }

  return result;
}
const nmbers = [1, 2, 3, 4, 5];
const incrementedNumbers = incrementAll(nmbers);
console.log(incrementedNumbers);
console.log();
//Q25
function countOccurrences<T>(arr7: T[], tElement: T): number {
  return arr7.filter((element) => element === tElement).length;
}
const arr7 = [1, 2, 3, 4, 2, 2, 3, 1, 5];
const tElement = 2;
const occurrences = countOccurrences(arr7, tElement);
console.log(
  `The element ${tElement} appears ${occurrences} times in the array.`
);
console.log();
//Q26
function isSorted(arr: number[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}
const arr1 = [7, 8, 9, 10];
const array2 = [1, 3, 2, 4, 5];
console.log(`Array 1 is sorted "${isSorted(arr1)}"`);
console.log(`Array 2 is sorted "${isSorted(arr2)}"`);
console.log();
//Q27
function formatNames(names: string[]): string {
  const length = names.length;
  if (length === 0) {
    return "";
  } else if (length === 1) {
    return names[0];
  } else if (length === 2) {
    return names.join(" and ");
  } else {
    const lastTwoNames = names.slice(-2).join(" and ");
    const remainingNames = names.slice(0, -2).join(", ");
    return `${remainingNames}, ${lastTwoNames}`;
  }
}
const names1 = ["Alice", "Bob", "Charlie", "David"];
console.log(formatNames(names1));
console.log();
//Q28
function convertFahrenheitToCelsius(fahrenheitTemperatures: number[]): void {
  const celsiusTemperatures = fahrenheitTemperatures.map(
    (temp) => ((temp - 32) * 5) / 9
  );
  console.log("Temperatures in Celsius:");
  celsiusTemperatures.forEach((temp) => console.log(temp));
}
const fahrenheitTemperatures = [32, 68, 90, 104];
convertFahrenheitToCelsius(fahrenheitTemperatures);
console.log();
//Q29
function minMaxAverage(numbers: number[]): {
  min: number;
  max: number;
  average: number;
} {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const average = sum / numbers.length;

  return { min, max, average };
}
const numbrs = [5, 2, 8, 1, 9];
const result = minMaxAverage(numbrs);
console.log(result);
console.log();
//Q30
function swapElements<T>(arr: T[], index1: number, index2: number): void {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}
const arr8 = [1, 2, 3, 4, 5];
console.log("Before swapping:", arr8);
swapElements(arr8, 1, 3);
console.log("After swapping:", arr8);
console.log();
//Q31
function countCharacterOccurrences(str: string, char: string): number {
  return str.split(char).length - 1;
}

const inputString = "hello world";
const character = "l";
const ocurrences = countCharacterOccurrences(inputString, character);
console.log(
  `The character "${character}" appears ${ocurrences} times in the string.`
);
console.log();
//Q32
interface ToDoItem {
  task: string;
  completed: boolean;
}

const toDoList: ToDoItem[] = [
  { task: "Complete assignment", completed: false },
  { task: "Buy groceries", completed: true },
  { task: "Call mom", completed: false },
  { task: "Go for a run", completed: true },
];

function logIncompleteTasks(list: ToDoItem[]): void {
  console.log("Incomplete tasks:");
  list.forEach((item) => {
    if (!item.completed) {
      console.log(item.task);
    }
  });
}
logIncompleteTasks(toDoList);
console.log();
//Q33
function sortNumbers(arr: number[]): number[] {
  return arr.sort((a, b) => a - b);
}
const nmbs = [4, 2, 7, 1, 9, 5];
const sortedNumbers = sortNumbers(nmbs);
console.log("Sorted numbers:", sortedNumbers);
console.log();
//Q34
function reverseArray<T>(elements: T[]): T[] {
  let reversed: T[] = [];
  for (let i = elements.length - 1; i >= 0; i--) {
    reversed.push(elements[i]);
  }
  return reversed;
}
const arr9 = [1, 2, 3, 4, 5];
console.log(`"Array elements in reverse order"[${reversedarray}]`);
reverseArray(arr9);
console.log();
//Q35
function calculator(operand: number, operand2: number, operator: any): void {
  if (operator === "+") console.log("sum of numbers=", operand + operand2);
  else if (operator === "-")
    console.log("minus of numbers=", operand - operand2);
  else if (operator === "*")
    console.log("product of numbers=", operand * operand2);
  else if (operator === "/") console.log("sum of numbers=", operand / operand2);
}
calculator(7, 3, "-");
console.log();
