const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
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

connectDB()

//module.exports = connectDB;