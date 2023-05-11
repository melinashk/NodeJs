const express = require('express')
const cors = require('cors')
const connectDb = require('./models/dbConnection')
const bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.json())
const loginRouter = require('./routes/loginRoute');
const register = require('./routes/signupRoute')

app.use(cors())

const PORT = 5000
try{
    app.listen(PORT, ()=>{
        console.log(`listening to server on port ${PORT}`)
    })

} catch(err){
    console.log(err)
}
app.use('/',loginRouter)
app.use('/',registerRouter)
connectDb