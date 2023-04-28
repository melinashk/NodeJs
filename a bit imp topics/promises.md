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
lets create a promise which will resolve in 5 seconds
```js
const myPromise = new Promise(function(resolve){
    setTimeout(function(){
        resolve()
    }, 5000)
});
```
As you can see resolve is a function that we call for making the Promise succeed. Reject on the other hand makes a rejected Promise:

```js
const myPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        reject()
    }, 5000)
});
```
you can omit reject because it’s the second parameter. But if you intend to use reject you can’t omit resolve.

### making them work in real life things by displaying things to the user

Now, Promises don’t look so useful isn’t it? Those example print nothing to the user. Let’s add some data to the mix. Both resolved and rejected Promises can return data. Here’s an example:
```js
const myPromise = new Promise(function(resolve) {
  resolve([{ name: "Chris" }]);
});
```