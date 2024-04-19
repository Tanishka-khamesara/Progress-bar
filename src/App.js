import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [msg, setMsg] = useState("Loading....");

  useEffect(() => {
    let inter = setInterval(() => {
      if (number < 100) {
        setNumber((prev) => prev + 1);
      } else {
        clearInterval(inter);
        setMsg("Completed😎");
      }
    }, 300);
    return ()=> clearInterval(inter);
  },[number])

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <div className="container">
        <div className="bar" style={{ width: `${number}%`, backgroundColor: "green" }}></div>
      </div>
      <p>{msg}</p>
    </div>
  );
}

export default App;
