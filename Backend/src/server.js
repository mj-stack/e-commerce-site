import dotenv from 'dotenv'
import { app } from "./app.js";
import connectDB from './database/database.js';

dotenv.config({path: "../.env"})
const PORT = process.env.PORT || 3000;

connectDB()
.then(() => {
  app.on('error', (err) => {
    console.log(`Unable to connect to the server`, err);
  })
  app.listen(PORT, () => {
    console.log(`Server is now listening at http://localhost:${PORT}`);
  })
}
)
.catch(err => console.log('MongoDB connection fail', err))