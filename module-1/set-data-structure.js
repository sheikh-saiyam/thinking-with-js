const arr = Array.from({ length: 100000 }, (_, i) => i);

// O(n^2)

console.time("Brute Force Execution Time");

const removeDuplicates = (arr) => {
  const newArr = [];

  arr.forEach((element) => {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });

  return newArr.length;
};

console.log(removeDuplicates(arr));
console.timeEnd("Brute Force Execution Time");

// O(n)

console.time("Set Execution Time");

const removeDuplicatesSet = (arr) => {
  const set = new Set(arr);
  return Array.from(set).length;
};

console.log(removeDuplicatesSet(arr));
console.timeEnd("Set Execution Time");

