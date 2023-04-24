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

