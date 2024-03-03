import { Router } from "express";
import { createDeck } from '../controllers/deck.controller'


const router = Router()

router.route('/decks')
   .post(createDeck)

export default router