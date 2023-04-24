### objects in js

creating objects
```js

const person ={
    name : "Max",
    age: 30,
    hobbies : ['sports', 'cooking'],
    greet: function() {
        alert("hello ")
    }
}

```

addming an item to the object
avoid usinng constant while addming modifying 

use let...

lets say we want to addd isAdmin : true to the object above

we can do this by
```js
person.isAdmin = true;
person.age = 31; // we can ovewrite also
```
this will add the isAdmin:true to the object person above
so we know to add item in an object 
we use 
```js
object.key = value
```
#### deleting objects
```js
delete person.age;
//this will delete age property from person object
```
other way is to useundefine but we donnot use this(not recommended) as the propoery is not deleted
```js
person.age = undefined;
```
using null also the property stays
```js
person.age = null
```

we can wrap keynames in quotations 
```js
"keyname" : value

```
now how to access that if that has white space in betweeen
so the answer is we cant access that

the only way we can access is 

```js
person["keyname"];
```
we can use positive number as a key
```js
1.5: 'hello'
/// to access this
person[1.5]
```

if we use numbers as keys they will get sorted in asc order


we can use square brackets to add a keyname same as a variable name

example
```js
const userChosenKeyName = 'level'

person = {
    name: 'EB pearls',
    [userChosenKeyName]: '....',
}
// js will not take this as keyname instead it will seatch a variable with that name
```

### spread syntax(...)


 in the below example we use a spread operator to copy the key and values from person1 to person2 but on the below example the array which is nested in the hobbies is not copied.
 ```js

 person1 ={
  name : 'Eb',
  age :30,
  hobbies: ['cooking','guitar']
}

person2 = {...person1, age :29}
person1.hobbies.pop()
console.log(person1)

console.log(person2)

 ```

  to make a copy of the array we need another spread operator assigned to array to copy.
```js
person1 ={
  name : 'Eb',
  age :30,
  hobbies: ['cooking','guitar']
}

person2 = {...person1, age :29, hobbies: [...person1.hobbies]}
person1.hobbies.pop()
console.log(person1)

console.log(person2)

```