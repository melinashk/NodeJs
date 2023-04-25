### prototype

let us have a following code

```js
let myObj ={}
function Cat(){}
let kitty = new Cat()


```

in the code above we have a object called myobj which is a new object instance of a class or a constructor function we call in js

and the constructor function or the class anyting we call in js. have a prototype called object prototype

object prototype- it then holds the things we can do to the object like
.add
.create and manymore and that is finally linked to null 

this is the prototype chain 
<img src = "/assets/prototype.png">

```js
//if we check 
myObj.Constructor.prototype === myObj.__proto___
```
the above code is true as __porto__ can directly used to access the prototype of the object 

```js
kitty.__proto__.__proto__ === object.prototype
```
this also yield true cause kitty can see in the figure

some examples

```js
const o = {
  a: 1,
  b: 2,
  // __proto__ sets the [[Prototype]]. It's specified here
  // as another object literal.
  __proto__: {
    b: 3,
    c: 4,
    __proto__: {
      d: 5,
    },
  },
};


```

```js
const parent = {
  value: 2,
  method() {
    return this.value + 1;
  },
};

console.log(parent.method()); // 3
// When calling parent.method in this case, 'this' refers to parent

// child is an object that inherits from parent
const child = {
  __proto__: parent,
};
console.log(child.method());

````

