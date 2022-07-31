import express from 'express'
import dotenv from 'dotenv'
import { connect_db } from './db.config'
import notFound from './middlewares/notFound'
import tasksRouter from './routes/tasks'
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware'

//envirenement variable
dotenv.config()

//app server
const app = express()



//middlewares
app.use(express.json())


//routes
app.use('/api/v1/tasks', tasksRouter)
app.use(notFound())
app.use(errorHandlerMiddleware())



//start server
try {
    app.listen(process.env.PORT, console.log(`Run in the PORT ${process.env.PORT}`))
} catch (e) {
    console.log('Error in running server : ' + e)
}


//db connection
connect_db()