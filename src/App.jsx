import React, {useState, useEffect} from 'react'
import {supabase} from './client'

import Article from './components/Article';
import Button from './components/Button';
import Case from './components/Case';

const App = () => {
  const [cases, setCases] = useState([]);
  const [gameState, setGameState] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetchCases();
  }, []);
  

  const fetchCases = async () => {
    const { data } = await supabase.from('cases').select();
    setCases(data);
  }

  const startGame = () => {
    setGameState(true);
  }

  const selectionHandler = (selection) => {
    console.log("Selecciono: ", selection);
  }

  return (
    <>
      <div className=' h-8 bg-purple-500'></div>
      {!gameState && <Article />}
      {!gameState && <Button handler={startGame} text="Comenzar" />}
      {gameState && <Case caso={cases[0]} handler={selectionHandler} />}
      {gameState && <h1 className='grid place-items-center font-mono text-2xl font-extrabold'>Puntos acumulados: {0}</h1>}
    </>
  )
}

export default App