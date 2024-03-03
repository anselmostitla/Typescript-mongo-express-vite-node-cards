import mongoose from "mongoose";

const schema = mongoose.Schema

const deckSchema = new schema({
   title: String
})

export default mongoose.model("Deck", deckSchema) 