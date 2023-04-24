## Array

### creating array

normal creation:
```JS
const numbers = [1,2,3];
```


using a 'new' key word

```JS
const a = new Array();
output:  empty array

const b = new Array(1,5);
// we see an array of numbers 1 and 5

const c= new Array(5);
// unexpected behaviour occurs i.e array of length 5 is created
```

using the array from method
```

let myArray = Array.from('hello');
console.log(myArray); // Output: ['h', 'e', 'l', 'l', 'o']
```

Using the Array.of() method:
```JS
let myArray = Array.of(1, 2, 3);
console.log(myArray); // Output: [1, 2, 3]

```

Using the spread operator:
```Js
let myArray1 = [1, 2, 3];
let myArray2 = [...myArray1, 4, 5];
console.log(myArray2); // Output: [1, 2, 3, 4, 5]


```

Using the Array.fill() method:

```JS
let myArray = new Array(3).fill(0);
console.log(myArray); // Output: [0, 0, 0]


```

### Sets


creating new set
```JS
const ids = new Set();

// or 

const ids = new Set([1,2,3])
```
we cant use index to access values


```js
console.log(ids[1])
```
output undefined

one value can be store one time in a set
no duplication allowed

we can use things like 

```js
.has()
.add()
.entries() // to display the entries
```

### Maps

```js


const person1 = {name : 'Max'};
const person2 = {name: 'manuel'};


const personData= new Map([[person1 ,[{date: 'yesterdsay, price :10'}]]])

console.log(personData)
```


The map is created using the Map() constructor function and passing an array with one item as an argument. The item is itself an array with two items: the first is person1 object and the second is an array with one object {date: 'yesterdsay', price :10} as its value.

Finally, the code logs the personData map to the console using console.log(personData).

```js
Map(1) { { name: 'Max' } => [ { date: 'yesterdsay, price :10' } ] }
```
the above is the console.log output of the code
in the output it is shown that

The output Map(1) { { name: 'Max' } => [ { date: 'yesterdsay, price :10' } ] } is a representation of a Map object in JavaScript.

In this case, the Map object has one key-value pair, where the key is an object { name: 'Max' } and the value is an array [{ date: 'yesterdsay, price :10' }].

So, this Map object maps the object { name: 'Max' } to an array with one object { date: 'yesterdsay, price :10' }.

The notation => in the output is used to indicate the mapping between the key and the value in the Map object.