const Mongoose = require('mongoose')

const connectionDb = "mongodb+srv://manish:nothing@cluster0.p3ua7wa.mongodb.net/?retryWrites=true&w=majority"

const connectDb = Mongoose.connect(connectionDb,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('database connection successful')
}).catch(err =>{
    console.log('failed to coneect to database',err)
})

module.exports = connectDb
