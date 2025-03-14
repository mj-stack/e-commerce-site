import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`)
    console.log('Connected with DB')
  } catch (error) {
    console.log('Error connecting with database', error)
  }
}

export default connectDB