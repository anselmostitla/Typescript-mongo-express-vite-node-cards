import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const MONGO_USER = process.env.MONGO_USER
const MONGO_PASSWORD = process.env.MONGO_PASSWORD
const mongo_url=`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@deck0.7bk0aq8.mongodb.net/decks?retryWrites=true&w=majority&appName=Deck0`

const connect = async() => {
   await mongoose.connect(mongo_url)
   console.log("data base connected...")  
}

export default connect  