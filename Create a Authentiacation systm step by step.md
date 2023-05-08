## creating a auth from scratch using node express and mongo

First lets think about what we might need
we need a server and a database 
we use mongo db as a database 

create a folder named of your choice and create 3 files
```js
server.js
db.js
user.js
```
the server.js will handel server files and db.js database and user.js user models

```js
npm install mongoose
```
then on db.js we import mongodb 
```js
const Mongoose = require('mongoose')
```
lets iniatilize a database in this case a local mongo db database
```js
const localDb = "mongodb://localhost:27017/role_auth"

```
connection to that database
useNewUrlParser and useUnifiedTopology cause other are depricated
```js
const connectDb = async () => {
        await Mongoose.connect(localDb,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('connection to database success')
}
```
after connecting to that database we export the connection to use it in our server
```js
module.exports = connectDb
```
after this we need to create a user schema
using Mongoose.Schema
exampple of schema is given below
```js
const Mongoose = require('mongoose')
const userSchema = new Mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    role: {
        type: String,
        default: "Basic",
        required: true,
    }
})
```
after schema we need to create a user model and export the model
```js
const User= Mongoose.model('User',userSchema)
module.exports = User
```

now we add a middleware to parse data that comes to our listening port
```js
app.use(express.json())
```
