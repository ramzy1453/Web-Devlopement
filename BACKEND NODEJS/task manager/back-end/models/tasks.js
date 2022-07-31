import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    id: {
        type: Number,
        index: true,
        unique: true,
        required: true,
        default: 1
    },
    name: {
        type: String,
        required: [true, 'Name must be provided'],
        trim: true,
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
})

export default mongoose.model('Task', taskSchema)