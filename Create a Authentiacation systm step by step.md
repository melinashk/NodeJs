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
after this now let's handel the auth function for the register and login
we need to import the user from models 
and then create a async register function and check conditions
```js
exports.register = async (req,res,next) =>{
    const {username, password} = req.body;
    if (password.length < 6){
        return res.status(400).json({
            message: "Password less than 6 characters"
        })
    }
    try{
        await User.create({
            username,
            password,
        }).then(user => res.status(200).json({
            message: "user created successfully",
            user,
        }))

    }catch (err){
        res.status(401).json({
            message: "user not successfully created",
            error:error.message,
        })

    }

}
```
the above function will take out the username and password from the request and checks the condition and return response

similarly for login 
```js
exports.login= async (req,res,next) => {
    const {username, password} = req.body
    if(!username || !password){
        return res.status(400).json({
            message: "username and password not found"
        })
    }
    try{
    const user = await User.findOne({username, password})
    if(!user){
        res.status(401).json({
            message: "login not successful",
            error: "user not founnd",
        })
    }else{
        res.status(200).json({
            message: "login successgul",
            user,
        })
    }
    }catch{
        res.status(400).json({
            message: "An error occurred",
            error: error.message,

    })
    }
}
```
now we need to specify routes so that the call will get routed to the desired function 
```js
const express = require('express')

router = express.Router()

const {register,login} = require('./Auth')

router.route('/register').post(register)
router.route('/login').post(login)
module.exports = router
```
we add the route to the server code
```js
app.use("/api/auth", require("./Auth/Route"))
```