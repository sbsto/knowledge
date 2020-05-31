import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODB_URL!, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

console.log("mongoose connection is: ", mongoose.connection.readyState);