const mongoose = require('mongoose');
const dotenv = require();

async function connectDB(){
    dotenv.config();

    const URI = process.env.MONGO_URI;
    if(!URI){
        throw new Error('MONGO_URI not set in env');
    }

    try{
        await mongoose.connect(URI, {
            useNewUrlParser : true,
            useUnifiedTopology : true,
        });

        console.log('mongoDB connected successfully');
    } catch(err) {
        console.log('mongoDB connection error: ',err);
        process.exit(1);
    }
}

module.exports = connectDB;