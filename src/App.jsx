import React, {useState, useEffect} from 'react'
import {supabase} from './client'

const App = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    fetchCases();
  }, [])
  

  const fetchCases = async () => {
    const { data } = await supabase.from('cases').select();
    setCases(data);
  }

  return (
    <div>
      {cases.length > 0 && <img src={cases[0].imageSrc} />}
    </div>
  )
}

export default App