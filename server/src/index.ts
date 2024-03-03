import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'

import connect from './db/init'
import deckRouter from './routes/deck.route'

const app = express()
app.use(express.json())
app.use(cors({origin:"*"})) 

app.use('/', deckRouter)




const PORT = process.env.PORT
app.listen(PORT, async() => {
   await connect()
   console.log(`Server running on port ${PORT}`) 
})