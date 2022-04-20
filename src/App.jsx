import React, {useState, useEffect} from 'react'
import {supabase} from './client'

import Article from './components/Article';
import Button from './components/Button';
import Case from './components/Case';
import GameOver from './components/GameOver';

const App = () => {
  const [cases, setCases] = useState([]);
  const [gameState, setGameState] = useState(false);
  const [selected, setSelected] = useState(null);
  const [counter, setCounter] = useState(0);
  const [endGame, setEndGame] = useState(false);

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
      setEndGame(true);
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

  const finishGame = () => {
    counterHandler(false);
    setEndGame(false);
  }

  return (
    <>
      <div className=' h-6 bg-purple-500'></div>
      {!gameState && !endGame && <Article />}
      {!gameState && !endGame && <Button handler={startGame} text="Comenzar" />}
      {endGame && <GameOver counter={counter} />}
      {endGame && <Button handler={finishGame} text="Terminar" />}
      {gameState && <Case caso={selected} nextHandler={setNewCase} counterHandler={counterHandler} />}
      {gameState && <h1 className='grid place-items-center font-mono text-2xl font-extrabold'>Puntos acumulados: {counter}</h1>}
    </>
  )
}

export default App