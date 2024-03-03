const API_URL = "http://localhost:4002/decks"

type TDeck = {
   title: string
}

export async function createDeckController(title: string): Promise<TDeck> {
   const response = await fetch(API_URL, {
      method: "POST",
      body:JSON.stringify({title}),
      headers: {
         "Content-Type": "application/json"
      }
   })
   return response.json()
}