```js

let person = {name:'ebpearls'}
const persons = new Set();
const persons1 = new WeakSet();

persons.add(person)
persons1.add(person)

person = null
```

in the above example the weakset after initialize the person to null will remove it from the heap memory.

but using set the persons set still holds the reference to the person object.