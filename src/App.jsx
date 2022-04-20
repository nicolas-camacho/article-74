import React, {useState, useEffect} from 'react'
import {supabase} from './client'

import Article from './components/Article';
import Button from './components/Button';
import Case from './components/Case';

const App = () => {
  const [cases, setCases] = useState([]);
  const [gameState, setGameState] = useState(false);
  const [selected, setSelected] = useState(null);
  const [counter, setCounter] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    fetchCases();
  }, []);
  

  const fetchCases = async () => {
    const { data } = await supabase.from('cases').select();
    setCases(data);
  }

  const startGame = () => {
    setNewCase();
    setGameState(true);
  }

  const setNewCase = () => {
    let randomIndex = Math.floor(Math.random() * (cases.length - 1));
    if(cases.length < 1) {
      setGameState(false);
      fetchCases();
      counterHandler(false)
    } else {
      setSelected(cases[randomIndex]);
      let newCases = cases.filter((_, index) => index != randomIndex);
      setCases(newCases);
    }
  }

  const counterHandler = (value) => {
    if (value === true) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  }

  return (
    <>
      <div className=' h-8 bg-purple-500'></div>
      {!gameState && <Article />}
      {!gameState && <Button handler={startGame} text="Comenzar" />}
      {gameState && <Case caso={selected} nextHandler={setNewCase} counterHandler={counterHandler} />}
      {gameState && <h1 className='grid place-items-center font-mono text-2xl font-extrabold'>Puntos acumulados: {counter}</h1>}
    </>
  )
}

export default App