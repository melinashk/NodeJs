Generally, this refers to the "thing" which called a function (if used inside of a function). That can be the global context, an object or some bound data/ object (e.g. when the browser binds this to the button that triggered a click event).


this in Global Context (i.e. outside of any function)

```js
function something(){...}
console.log(this)

//logs globle object outside of function

```


this in a Function (non-Arrow) - Called in the global context
```js
function something() { 
    console.log(this);
}
 
something(); // logs global object (window in browser) in non-strict mode, undefined in strict mode
```
this in an Arrow-Function - Called in the global context
```js
const something = () => { 
    console.log(this);
}
 
something(); // logs global object (window in browser) - ALWAYS (also in strict mode)!

```

this in a Method (non-Arrow) - Called on an object

```js
const person = { 
    name: 'Max',
    greet: function() { // or use method shorthand: greet() { ... }
        console.log(this.name);
    }
};
 
person.greet(); // logs 'Max', "this" refers to the person object

```

this in a Method (Arrow Function) - Called on an object
```js
const person = { 
    name: 'Max',
    greet: () => {
        console.log(this.name);
    }
};
 
person.greet(); // logs nothing (or some global name on window object), "this" refers to global (window) object, even in strict mode
```
this can refer to unexpected things if you call it on some other object, e.g.:

```js
const person = { 
    name: 'Max',
    greet() {
        console.log(this.name);
    }
};
 
const anotherPerson = { name: 'Manuel' }; // does NOT have a built-in greet method!
 
anotherPerson.sayHi = person.greet; // greet is NOT called here, it's just assigned to a new property/ method on the "anotherPerson" object
 
anotherPerson.sayHi(); // logs 'Manuel' because method is called on "anotherPerson"

```




If in doubt, a console.log(this); can always help you find out what this is referring to at the moment!
