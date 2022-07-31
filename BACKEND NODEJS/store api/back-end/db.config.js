import mongoose from "mongoose"

export const connect_db = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('db connected')
    } catch (error) {
        console.error(error)
    }
}