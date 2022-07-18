import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App()
{
  const[data, setData]=useState(null)
  function getData(val)
  {
    setData(val.target.value)
  }
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo"/>
      <p> You type "{data}", Correct?</p>
      <input type="text" onChange={getData}/>
    </div>
  );
}

export default App;