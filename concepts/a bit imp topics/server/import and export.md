# what is import export and why we need a devlopment server?

In JavaScript, the export statement is used to make functions, objects, or variables available to other parts of your code, typically in a different file. When you use the export statement in your code, you need to load the exported module in another file, so you can use the exported functions, objects, or variables.

To load the exported module, you need to use the import statement in the other file. The import statement is used to load and execute the exported module, so that you can access the exported functions, objects, or variables.

In order to use the import statement in a web application, you need to load the files containing the exported modules in the browser. This is where a server comes in. A server can serve the files containing the exported modules to the browser, allowing you to use the import statement to load and execute them.

Without a server, you may encounter issues like cross-origin resource sharing (CORS) errors, which prevent the browser from loading files from a different domain. In addition, loading files directly from the file system may not work due to security restrictions in modern web browsers.

By serving your files through a server, you can avoid these issues and make sure that your modules can be loaded and executed properly. The server can also provide other benefits, such as caching, compression, and HTTPS support, which can improve the performance and security of your web application.

In summary, a server is needed to export files in JavaScript because it is responsible for serving the files containing the exported modules to the browser, allowing you to use the import statement to load and execute them.

```js
export 
```
in js the export keyword makes the file accessable throughtout and to access this from another we have to import this

```js
import {what_we_want_to_import } from "./filepath"
```
we can import everything inside a file and access them using the dot notation 
like in python for example
import numpy as np
np.reshape(1,-1)

```js
import * as hello from '../filename'
```

When using the . (single dot), it refers to the current directory. So if you have a file example.js and a file helpers.js in the same directory, you can import helpers.js into example.js using the following statement:
```js
import helpers from './helpers.js';

```
In this case, the . (single dot) refers to the current directory, and ./helpers.js specifies the path to the helpers.js file relative to the current directory.

When using the .. (double dot), it refers to the parent directory. So if you have a file example.js in a directory called src, and a file helpers.js in a directory called utils that is one level up from src, you can import helpers.js into example.js using the following statement:
```js
import helpers from '../utils/helpers.js';

```
In this case, the .. (double dot) refers to the parent directory, and ../utils/helpers.js specifies the path to the helpers.js file relative to the parent directory.

In summary, the . (single dot) and .. (double dot) notation in JavaScript module imports are used to specify the relative path to the module being imported, with . referring to the current directory and .. referring to the parent directory.


### default export

we use 
```js
export default class {

}
```
without a name and if we put one the default expoet will ignore the name
to import that we use
```js
import anyname from "./path"
```
we use this without curly braces


# till now we saw static import now lets see dynamic import 


Dynamic imports in JavaScript allow you to load modules only when they are needed, which can improve the performance of your application by reducing the initial load time. In order to use dynamic imports, you need to use the import() function, which returns a promise that resolves to the module being imported.

```js
// import the module only when the function is called
async function loadModule() {
  const myModule = await import('./myModule.js');
  // use the imported module
  myModule.myFunction();
}

// call the function to load the module
loadModule();

```

# globalThis and this

globalThis in modules points to the window like we did when we had only one file

we can share variblaes and acceess them on other fil;e using globalthis

```js
globalThis.variableName = 5;
```
to access that on other file we again use the dot notation
```js
console.log(globalThis.variableName)
```
