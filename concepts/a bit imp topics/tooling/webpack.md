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


#### multiple entry point
```js
//nstead of

entry: './src/app.js'
//use

entry: {
    welcome: './src/welcome-page/welcome.js',
    about: './src/about-page/about.js',
    // etc.
}
```

Now Webpack will look up all these entry points and create one bundle per entry point - you can then link to these bundles in your respective HTML files.

we can change the mode from production(default) mode in webpack to developmental mode 
{
    mode: 'development'
}


### public path

In Webpack, the "public path" is a configuration option that determines the base path for all the assets that are loaded by the browser. This option specifies the path from which all the assets will be served, including the JavaScript files, CSS files, images, and other resources that are used by the application.

By default, the public path is set to "/", which means that all the assets are served from the root of the domain. However, you can set the public path to a different value to serve the assets from a different location. For example, if your application is hosted at https://example.com/myapp/, you would set the public path to /myapp/.

Setting the public path is important when your application is deployed to a non-root location on a web server, such as a subdirectory or a CDN. If the public path is not set correctly, the browser may not be able to find the assets that are needed to load the application, resulting in errors and broken functionality.

To set the public path in Webpack, you can use the output.publicPath configuration option in your Webpack configuration file. For example, to set the public path to "/myapp/", you would add the following code to your Webpack configuration file:

javascript

### development server
we can add a development server to the config file to reload any changes we made

to achieve that in webpack-config-js
we add a devserver
```js

devserver: {
    contentBase: 'where our root html file will be found'
}
```
and now to lauch a web pack developemental server we can add
```json
"build:dev" : "webpack-dev-server"
```
in the package.json file

we can add a devtool in webpack to debug our code in the browser during developmental phase
note that we want this to hide in the production mode so make sure you use this during developmental phase
```js
devtool: "source_map"
```
source_map string can be found in the webpack documentation in the source map section.
Depends on which source map you want to use

## Build For production

we need a different config file for production
```js
webpack.config.prod.js
```
we change the mode to 'production'
 and we need to change the devtool for production like
 'cheap-source-map` which allows us to look into the code at a certain level

now we need to update package.json to run our productiion server

```json
"build:prod": "webpack --config webpack.conifg.prod.js"
```
we can have any name in the build:prod not necessary it has to be like that but following the convention

#### clean-webpack-plugin package
this npm package helps clean different dev file generated during each build.
```js
const cleanPlugin = require('clean-webpack-plugin')
```
in webpack we can use a plugin list to say which plugins we are using

```js
plugins: [
    new CleanPlugin.CleanWebpackPlugin()
]
```