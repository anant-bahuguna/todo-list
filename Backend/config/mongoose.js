const mongoose = require('mongoose')
const config = require("config");
const db = config.get("mongoURI");

// mongoose.connect('mongodb://127.0.0.1:27017/todoList',{
//     useNewUrlParser:true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify:false
// })

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });

        console.log("MongoDB connected....");
    } catch (err) {
        console.log("MongoDb Error: ", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;