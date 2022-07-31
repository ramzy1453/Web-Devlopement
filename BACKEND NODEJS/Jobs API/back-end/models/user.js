import 'dotenv/config'
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide a username']
    },
    email: {
        type: String,
        required: [true, 'Please provide a email'],
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'email not valid'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [8, 'Your password must be gte to 8 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

})

UserSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

UserSchema.methods.createToken = function() {
    return jwt.sign({ userID: this._id },
        process.env.JWT_SECRET, { expiresIn: 1900 }
    )
}
UserSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}

export default mongoose.model('User', UserSchema)