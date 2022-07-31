import mongoose from 'mongoose'
import 'dotenv/config'

// Connect MongoDB
const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, (err) => {
        if (!err) {
            console.log('MongoDB Connection Succeeded.')
        } else {
            console.log('Error in DB connection: ' + err)
        }
    });
}

export default connectDB