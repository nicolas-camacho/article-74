import React, {useState, useEffect} from 'react'
import {supabase} from './client'

import Article from './components/Article';
import Button from './components/Button';

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

  return (
    <>
      <div className=' h-8 bg-purple-500'></div>
      {!gameState && <Article />}
      {!gameState && <Button handler={startGame} />}
    </>
  )
}

export default App