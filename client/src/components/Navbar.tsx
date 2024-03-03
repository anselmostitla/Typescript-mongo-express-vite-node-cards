import { Link } from "react-router-dom"

export const Navbar = () => {
   return(
      <div className="flex justify-between px-5 py-7 shadow-lg">
         <Link to={'/'}>Logo</Link>
         <div>Decks</div>
         <div>login</div>
      </div>
   )
}

