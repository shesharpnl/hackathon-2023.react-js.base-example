import React from 'react'
import Button from './Button'
import { useEffect,useState } from 'react';
function Home() {
    const [data, setData] = useState("initial data");

  useEffect(() => {
    console.log("useEffect");
    async function fetchData() {
      const response = await fetch("data.json");
      const data = await response.json();
      setData(data.data[0].job_name);
      return data;
    }
    fetchData();
  }, []);

  async function handleSubmit() {
    console.log("submit");
    const response = await fetch("data.json");
    const data = await response.json();
    console.log("submit");
    setData(data.data[0].tag_categories[0]);
    return data;
  }
  return (
    <div>
        <main className="container1">
        <h1 className="sheSharp">
          SheSharp React.js - Check out this JSON data!
        </h1>
        <p className="styledData">{data}</p>
        <Button text="Click me!" handleClick={() => handleSubmit()} />
      </main>
      <div className="container"></div>
    </div>
  )
}

export default Home
