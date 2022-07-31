import mongoose from "mongoose"

export const connect_db = async() => {
    mongoose.connect(process.env.mongo_uri)
        .then(() => console.log('db connected'))
        .catch(e => console.log('error is : ' + e))
}