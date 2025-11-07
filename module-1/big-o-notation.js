console.time("Loop Execution Time");

const arr1 = [];
const arr2 = [];

for (let i = 0; i < 300000; i++) {
  if (i < 150000) {
    arr1.push(i);
  }

  arr2.push(i);
}

console.log(arr1.length);
console.log(arr2.length);

console.timeEnd("Loop Execution Time");

console.time("Map 1 Execution Time");
const firstList = arr1.map((n) => ({ id: n }));
console.timeEnd("Map 1 Execution Time");

console.time("Map 2 Execution Time");
const secondList = arr2.map((n) => ({ id: n }));
console.timeEnd("Map 2 Execution Time");

console.time("Find 1 Execution Time");
// const find1 = firstList.find((n) => n.id === 100000);
// const find1 = firstList[100000]
console.timeEnd("Find 1 Execution Time");

console.time("Find 2 Execution Time");
// const find2 = secondList.find((n) => n.id === 250000);
// const find2 = secondList[250000]
console.timeEnd("Find 2 Execution Time");

// TODO: Watch and practice 8,9,10
