### Event Loop, Queue and Async Code

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Kn5tSJEm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_800/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gid1.6.gif">

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--fqt0UJmH--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_800/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif2.1.gif">


<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--qxI9YF9R--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_800/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif3.1.gif">

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--OIG-_8dF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_800/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif4.gif">

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--uJB5zTD7--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_800/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif5.gif">



### where can the problem occur in the code

```js

fucntion trackUserHandler(){
    console.log('clcikjed')
}

button.addEventListner('click', trackUserHandler);

let result = 0;

for (let i = 0; i 100000000; i++){
    result +=i;
}
console.log(result);
```

in the code above the addEventLsitener gets passed to the browser API to get handled and the sum is running in the stack lets say on main therad.

the sum takes some time to process and we cant click the async code that is handeled by the browser
because the call stack is not empty

##### this is when the single threading gets a problem


### understanding Async code execution

 Web Workers was introduced in order to perform multi threading like behaviour in java script
web Workers canot do DOM manipulation tho
lets take a problem where we want to calculate total sum of numbers from one to 1 billion it takes a while right
and if that continues then we canot perform other problems nor any other problems will work
what is happening in this case is the main thread is locked up right nowthis is when webworkers comes in.
We can create web workers to offload cpu extensive task so that main thread wont get locked up and the web worker will handel the problem for us in parallel


### lets understand how the js engine executes the code

When you run a JavaScript program, the code is first parsed by the JavaScript engine. The parser breaks down the code into smaller pieces called tokens, which are then organized into a tree-like structure called the Abstract Syntax Tree (AST).

Once the AST is created, the engine begins executing the code. It does this by traversing the tree, starting at the top, and executing each node in turn. Each node represents a different part of the code, such as a variable declaration, function call, or loop.

During execution, the engine also creates a set of data structures called execution contexts. These contexts keep track of the variables and functions used by the code, as well as the current state of the program. Each time a new function is called, a new execution context is created and added to the stack.

The engine uses a process called Just-In-Time (JIT) compilation to optimize the code as it executes. This involves analyzing the code as it runs and optimizing frequently executed code paths. This can greatly improve the performance of the program.

Once the code has been fully executed, any remaining execution contexts are popped off the stack, and the program terminates.

## understanding the pyramid of doom

```js

function pyramidOfDoom() {
  setTimeout(() => {
    console.log(1)
    setTimeout(() => {
      console.log(2)
      setTimeout(() => {
        console.log(3)
      }, 500)
    }, 2000)
  }, 1000)
}
pyramidOfDoom()
```

here when the function gets called the first function inside the pyramid of doom gets to the browser API
and with the timeout it gets pushed to the callback queue
the callback queue then loooks something like this after the first run 

##### not exactly but something like this for a understanding
```js
    console.log(1)
    setTimeout(() => {
      console.log(2)
      setTimeout(() => {
        console.log(3)
      }, 500)
    }, 2000)
  }, 1000)
}
```
then it checks if the call stack is empty or not. if empty the console.log gets printed and other gets into the Browser API
and the process repeats.

The output will be then

output:
1
2
3

