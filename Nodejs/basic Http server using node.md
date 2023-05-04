### http server usign nodejs

#### steps

Create Server using http module and add a listener
Do the necessary entry check for the request
Extract request method type
Writing handler for Http GET request
Writing handler for Http POST request
Writing handler for Http PUT request
Writing handler for Http DELETE request

### 1.create server using http module and add a listener

```js
const http = require('http')
const server = http.createServer(requestListener);

server.listen(8000);
```
the above code will create a http server and listen to port 8000

the createServer takes requestListener function as a argument now lets see what it looks like

```js
const requestListener = function(req,res){
    //the code goes here
}
```

### 2. do necessary entry check for the rtequest

now lets say we want our server to accpet the REST API. and we want our
content-type : application/jsopn
Accept : application/json
We will be using req object to get headers details and check the required values.
```js
const REQUIRED_CONTENT_TYPE = 'application/json';
const ACCEPT_ENCODING_1 = 'application/json';
const ACCEPT_ENCODING_2 = '*/*';

const entryCheck = function (req) {
  const contentType = req.headers["content-type"];
  if (!contentType.includes(REQUIRED_CONTENT_TYPE)) {
    throw new Error("Sorry we only support content type as json format.");
  }
  
  const accept = req.headers["accept"];
  if (!(accept.includes(ACCEPT_ENCODING_1) ||
accept.includes(ACCEPT_ENCODING_2))) {
    throw new Error("Sorry we only support accept json format.");
  }
}
```
the req.headers method helps access the headers of the request received

the req.includes method checks if the parameter exists in the request

