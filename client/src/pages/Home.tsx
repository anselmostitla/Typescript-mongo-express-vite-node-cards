import { useState } from "react";

export const Home = () => {
   const [title, setTitle] = useState("");
   function createDeck(e: React.FormEvent){
      e.preventDefault()
      console.log(title)
   }
  return (
    <div className="flex justify-center py-5">
      <form action="" className="flex space-x-3 items-center" onSubmit={createDeck}>
        <label htmlFor="">Deck title</label>
        <input
          type="text"
          className="bg-slate-100 rounded-lg px-2 py-5 border "
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="bg-green-500 rounded px-2 py-5 text-white">
          Create deck
        </button>
      </form>
    </div>
  );
};
