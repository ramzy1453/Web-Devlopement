import express, { json } from 'express'
import connectDB from './db-config'
import runServer from './express-server'

//async errors
import 'express-async-errors'


//security
import helmet from 'helmet'
import cors from 'cors'
import xss from 'xss-clean'
import rateLimiter from 'express-rate-limit'

//router
import jobsRouter from './routes/jobs'
import authRouter from './routes/auth'

//middlewares
import notFoundMiddleware from './middlewares/notFound'
import errorHandlerMiddleware from './middlewares/errorHandler'
import Authenticate from "./middlewares/authToken";


//app
const app = express()


//setting middlewares
app.set('trust proxy', 1)
app.use([rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100,
}), helmet(), cors(), xss()])
app.use(express.json())



//setting routes
app.get('/', (req, res) => res.send('<h1>JOBS API</h1>'))
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', [Authenticate()], jobsRouter)

app.use(notFoundMiddleware())
app.use(errorHandlerMiddleware())


//db & server connection
connectDB()
runServer(app)