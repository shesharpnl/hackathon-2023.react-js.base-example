import React from 'react';
import './App.css';
import Button from './components/Button';
import Header from './components/Header'
import { useEffect } from 'react';
import { useState } from 'react';
 


function App() {
  const [data, setData] = useState('initial data');

  useEffect(() => {
    console.log('useEffect');
    async function fetchData() {
      const response = await fetch('data.json');
      const data = await response.json();
      setData(data.data[0].job_name);
      return data;
    }
    fetchData();
  }, []);

  async function handleSubmit() {
    console.log('submit');
    const response = await fetch('data.json');
    const data = await response.json();
     console.log('submit');
     setData(data.data[0].tag_categories[0]);
     return data;
   }
  return (
    <>
    <Header />
    <main className='container'>
      <h1 className='sheSharp'>
        SheSharp React.js - Check out this JSON data!
      </h1>
      <p className='styledData'>
        {data}  
      </p>
      <Button text='Click me!' handleClick={()=>handleSubmit()}/>      
    </main>
    </>
  );
}
 
export default App;
