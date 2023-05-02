### webpack

Webpack is a popular module bundler for JavaScript applications. It allows you to manage and bundle different modules and assets such as JavaScript, CSS, and images, into a single file or multiple files that can be loaded by a web browser.

Webpack is useful for several reasons. Firstly, it can help to optimize your application's performance by reducing the number of HTTP requests that are required to load your application. By bundling your modules together, you can reduce the number of network requests that your application needs to make to load all of its assets.

Secondly, Webpack can also help you to organize and manage your code. With Webpack, you can easily break your code into multiple modules and use features like code splitting to dynamically load modules as they are needed. This can help to improve the maintainability and scalability of your codebase.

### installing webpack using npm
```js
npm install --save-dev webpack webpack-cli
```

### using webpack
we can use the webpack.config.js file to specify what the webpack does to
```js
module.export = {
    entry: 'path to the entry point ot our project'
    output: {
        filename: 'filename of the output file',
        path: path.resolve(__dirname,'path1','pathn')

    }
}
```
we can add a build script called webapck under package.json under the script section.
```js
"scripts":{
    "test":"dadsad",
    "build": "webpack"

}
```
in webpack we use the import  in a bit bit different way
```js
path = require('path');
```
and when we use webpack we need to remove .js extension import statement form the files
