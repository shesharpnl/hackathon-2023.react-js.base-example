import React from 'react';
import './App.css';
import Button from './components/Button';
import { useEffect } from 'react';
import { useState } from 'react';
 


function App() {
  const [data, setData] = useState('initial data');

  useEffect(() => {
    console.log('useEffect');
    async function fetchData() {
      const response = await fetch('data.json');
      const data = await response.json();
      setData(data.one);
      return data;
    }
    fetchData();
  }, []);

  async function handleSubmit() {
    console.log('submit');
    const response = await fetch('data.json');
    const data = await response.json();
     console.log('submit');
     setData(data.two);
     return data;
   }

  return (
    <main>
    <p className='shesharp'>
      Cleaned up React App
    </p>
    <p className='shesharp'>
      {data}
    </p>      
    <button  type='button' onClick={()=>handleSubmit()}>Submit</button>

    </main>
  );
}
 
export default App;
