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

We can use.then to invoke when the promise is resolve or .catch when the promise reject
here is an example of a code that checks if if duration matches a crietria if not throws reject

```js

const setTimer = (duration) => {
  const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{

      if (duration !== 1000){
      resolve();
      }else{
        reject();
      }

    },duration)
  });
  return promise;
}

setTimer(1000).then(() =>{
  console.log('hello world')
}).catch(() =>{
  console.log('rejected')
})
setTimer(3000).then(() =>{
  console.log('hello world1')
})
```
if you are reading this file you already know and understand basics so no need to describle it all :).


we can throw an error like this if the promise didnot resolved. then takes 2 parameters first one when the promise resolve and second whent the promise reject
```js
setTimer(1000).then(() =>{
  console.log('hello world1')
}, () => {
  console.log('error caught')
})
```

```js
somePromiseCreatingCode()
    .then(firstResult => {
        return 'done with first promise';
    })
    .catch(err => {
        // would handle any errors thrown before
        // implicitly returns a new promise - just like then()
    })
    .finally(() => {
        // the promise is settled now - finally() will NOT return a new promise!
        // you can do final cleanup work here
    });
```