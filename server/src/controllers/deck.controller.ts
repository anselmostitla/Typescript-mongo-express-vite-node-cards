import { Request, Response } from 'express'
import Deck from '../models/deck.model'

export const createDeck = async(req: Request, res:Response) => {
   const { title } = req.body
   const newDeck = await Deck.create({title})
   res.status(200).json(newDeck)
}