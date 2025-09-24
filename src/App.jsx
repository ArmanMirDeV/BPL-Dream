import { Suspense, useState } from 'react'

import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/AvailablePlayers/SelectedPlayers/SelectedPlayers'
import Navbar from './components/Navbar/Navbar'


const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json()
}


 const playersPromise = fetchPlayers();

function App() {
 

  const [availableBalance, setAvailableBalance] = useState(999879);

  const [toggle, setToggle] = useState(true)

  return (
    <>

      <Navbar availableBalance={availableBalance} ></Navbar>
      <div className=' max-w-[1200px] mx-auto flex justify-between items-center ' >
        <h1 className=' font-bold text-2xl ' >Available Players</h1>

        <div className=' font-bold ' >
          <button onClick={() => setToggle(true)} className={`' py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle===true?"bg-[#E7FE29] text-black":"" } `} >Available</button>

          <button onClick={() => setToggle(false)} className={`py-3 px-4 border-1 border-gray-400 rounded-r-2xl border-l-0 ${toggle===false?"bg-[#E7FE29] text-black":""} `} >Selected <span>0</span> </button>
        </div>

      </div>

      {
        toggle === true ? 

        <Suspense fallback={<span className="loading loading-dots loading-xl ml-[50%] "></span>}>
          <AvailablePlayers availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise} ></AvailablePlayers>
        </Suspense> : 
        
        <SelectedPlayers></SelectedPlayers>
      }







    </>
  )
}

export default App
