### promise.all

Promise.all is a method that takes an array of Promises and returns a new Promise that resolves to an array of the resolved values of each Promise. If any Promise in the array rejects, the returned Promise will reject with the first error encountered.
```js
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // Output: [1, 2, 3]
  })
  .catch((error) => {
    console.log(error);
  });

```

### promise.,race
Promise.race is a method that takes an array of Promises and returns a new Promise that resolves or rejects as soon as one of the Promises in the array resolves or rejects.
```js
const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'Promise 1'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Promise 2'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 3000, 'Promise 3'));

Promise.race([promise1, promise2, promise3])
  .then((value) => {
    console.log(value); // Output: Promise 1
  })
  .catch((error) => {
    console.log(error);
  });
```