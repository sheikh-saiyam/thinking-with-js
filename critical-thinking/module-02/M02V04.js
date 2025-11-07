//* Some

// const numbers = [1, 5, 3, 7, 5];
//// const hasEven = numbers.some((n) => n % 2 !== 0);
// console.log({ hasEven });

//// const currentUser = ["user", "admin"];
//// const featureAccessUser = ["admin", "manager"];
//// const canAccess = currentUser.some((role) => featureAccessUser.includes(role));
// console.log({ canAccess });

//* Array.from()

//// const arr = Array.from([1, 2, 3], (value) => value * value);
// console.log({ arr });

const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step
  );

console.log(range(1, 25, 1));
