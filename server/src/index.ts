import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connect from './db/init'

const app = express()
app.use(express.json())




const PORT = process.env.PORT
app.listen(PORT, async() => {
   await connect()
   console.log(`Server running on port ${PORT}`) 
})