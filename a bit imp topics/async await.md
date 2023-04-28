## Async Await 

using async the function automatically returns promises 
we use async keyword in the function definition to make the function async
```js
async sum(){

}
```
after using async we have access to another keyword that is await keyword
we add await before promises
it wait fot the statement to resolve of fail and only then other line gets executed
```js
async function getSum(){
  console.log('this is printed by sum')
}
async function getDiff(){
  console.log('this is printed by difference')
}
console.log('1')
async function asyncTest(){
  await getSum()
  await getDiff()


}
asyncTest()
```

### Error handling in async and await

we can use try catch method to handel async await errors
example
```js
async function setTimer(duration){
    setTimeout(()=>{
      console.log('timeout')
    },duration)

}
async function sum(){
  console.log('this is displayed by using sum')
}

function product(){
  console.log('this is displayed by using product')
}
async function testFunction(){
  try{
    await sum()
    await setTimer(1000)

  }catch(error){
    console.log(error)
  }

}

testFunction()
product()
```
you might think that the async function gets offload to the browser and the product will get printed first than the sum 
but thats not the case
### understanding the above code in berief
the testFunction is called first and it is an async function that uses await to wait for the sum function to complete, followed by the two setTimer functions.

When testFunction is called, it is added to the call stack and sum is called next. Since sum doesn't have any await statements or asynchronous operations, it will be executed immediately, and the message "this is displayed by using sum" will be printed to the console.

After sum completes, testFunction will continue executing and call setTimer(1000) and setTimer(2000). Since setTimer uses setTimeout to delay the execution of the callback function, it doesn't block the execution of the code. Instead, it schedules the callback to be executed after the specified duration, and the rest of the code continues executing.

After testFunction completes, it is removed from the call stack and product is called. Since product is a regular synchronous function, it will be executed immediately, and the message "this is displayed by using product" will be printed to the console.