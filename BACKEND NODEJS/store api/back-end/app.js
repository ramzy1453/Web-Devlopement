import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()

//async errors
import 'express-async-errors'


import notFoundMiddleware from './middlewares/notFound'
import errorMiddleware from './middlewares/errorHandlerMiddleware'
import { connect_db } from './db.config'

import productRouter from './routes/products'

//middlewares
app.use(express.json())


const string = '42 42 42'

console.log(
    string.match(/^(\d+)\s/)
)

//db connection
connect_db()







//routes
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1>')
})

app.use('/api/v1/products', productRouter)


app.use(notFoundMiddleware())
app.use(errorMiddleware())







//server listening
const PORT = process.env.PORT || 8000
try {
    app.listen(PORT, console.log(`server running on ${PORT}`))
} catch (error) {
    console.error(error)
}