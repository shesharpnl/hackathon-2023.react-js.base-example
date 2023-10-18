import React, { useState } from 'react';
import './Styles/tableStyles.css';
import Button from './components/Button';

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();

      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
      setData('Failed to fetch data');
    }
  };

  const renderTable = () => {
    if (data) {
      return (
        <table className="table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.userId}</td>
              <td>{data.title}</td>
              <td>{data.completed ? 'Completed' : 'Incomplete'}</td>
            </tr>
          </tbody>
        </table>
      );
    }
    return null;
  };

  return (
    <div className="container">
      <h1 className="sheSharp">
        SheSharp React.js - Experience the Power of Data!
      </h1>
      <div className="card">
        <h2 className="card-title">Fetched Data</h2>
        <div className="card-content">{renderTable()}</div>
        <Button text="Fetch Data" onClick={fetchData} />
      </div>
    </div>
  );
}

export default App;
