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
    <body className='container'>
      <h1 className='sheSharp'>
        SheSharp React.js Starter Page
      </h1>
      <p className='styledData'>
        {data}  
      </p>      
      <button  type='button' className='' onClick={()=>handleSubmit()}>Submit</button>
    </body>
  );
}
 
export default App;
