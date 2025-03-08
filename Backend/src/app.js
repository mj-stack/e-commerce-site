import express from 'express'
import userDetailsRouter from './routes/user.routes.js'

const app = express();

// Routes
app.use("/", userDetailsRouter)
app.use(express.urlencoded())

export {app}