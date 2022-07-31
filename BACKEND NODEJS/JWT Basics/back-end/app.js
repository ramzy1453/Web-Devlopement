import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
    //async errors
import 'express-async-errors'


import notFoundMiddleware from './middlewares/notFound'
import errorMiddleware from './middlewares/errorHandlerMiddleware'

import publicRouter from './routes/public'
import privateRouter from './routes/private'
import loginRouter from './routes/auth'

//middlewares
app.use(express.json())






//routes
app.get('/', (req, res) => {
    res.send('<h1>JWT</h1>')
})

app.use('/public', publicRouter)
app.use('/private', privateRouter)
app.use('/login', loginRouter)

app.use(notFoundMiddleware())
app.use(errorMiddleware())







//server listening
const PORT = process.env.PORT || 8000
try {
    app.listen(PORT, console.log(`server running on ${PORT}`))
} catch (error) {
    console.error(error)
}