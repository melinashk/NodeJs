to get request in node from frontend or any other things
we need to do steps
first lets see what we need to configure
### Express
```js
const express = require('express')
app = express()
```
### body parser
body parser is used to parse the http request in node js
```js
const bodyParser= require('body-parser')
```
then  we can use the parser to specify what kind of data we will be expecting
```js
app.use(bodyparser.json())
```

we then neeed to specify a port  no we are going to listen to
```js
app.listen(3000)
```

after that done we are not gonna specify routes 
for that we use router object provided by the express framework
```js
require = express.Router()
```
using that we specify what wer have to do for certaiun routes
```js
routes.post('/route-location',(req,res,next)=>{
    //;what we want to do with the request data
    we can access the data using req.body.variablename
})
```
to export this to use this in the server we need to export the route file 
in node we can use module.exports to expoer 
```js
module.exports = router;
```
now after we export this file we can use this as a middleware
```js
app.use(locationRoutes)
```