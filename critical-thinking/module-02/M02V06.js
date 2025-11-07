//* Generate a lookup table

//? Input
const arr = [
  { id: "p-101", title: "Intro to SQL", author: "Alex" },
  { id: "p-102", title: "Data Structures in JS", author: "Beth" },
  { id: "p-103", title: "Understanding Reduce", author: "Chris" },
  { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];

const postsArray = Array.from({ length: 1000 })
  .fill(arr)
  .flatMap((innerArr, index) =>
    innerArr.map((item) => ({ ...item, id: `${item.id}-${index}` }))
  );

//? Output
// {
//   "p-101": { "id": "p-101", "title": "Intro to SQL", "author": "Alex" },
//   "p-102": { "id": "p-102", "title": "Data Structures in JS", "author": "Beth" },
//   "p-103": { "id": "p-103", "title": "Understanding Reduce", "author": "Chris" },
//   "p-104": { "id": "p-104", "title": "CSS Grid Tricks", "author": "Alex" }
// }

console.time("lookupTable");
const data = postsArray.map((i) => {
  return { [i.id]: i };
});

console.log(data.slice(0, 1));
console.timeEnd("lookupTable");

console.time("lookupTableReduce");
const lookupTable = postsArray.reduce((acc, post) => {
  acc[post.id] = post;
  return acc;
}, {});

console.log(lookupTable[0]);
console.timeEnd("lookupTableReduce");
