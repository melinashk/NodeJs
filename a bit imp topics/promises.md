## promises

constructing a promise
```js
const promise = new Promise();
```
promise takes a function as an argument and that function is executed right away when the object is created
that function takes 2 argument and each argument is itself a function

resolve and reject
```js
const setTimer = duration => {
    const promise = new Promise((resolve,reject ) => {
        setTimeout(() => {
            resolve();
        },duration);
        return promise;
    });
}
setTimer(2000).then(data => {
    console.log(data,posData);
})
```
