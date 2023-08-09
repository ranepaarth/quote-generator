import "./App.css";
import React from "react";
import axios from "axios";
import { useState } from "react";

function App() {

  const [advice,setAdvice] = useState('');

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const {advice} = response.data.slip;
        setAdvice(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  

  return (
    <>
      <div className="container">
        <div className="quote-container">
          <h1>{advice}</h1>
          <button className="quote-btn" onClick={fetchAdvice}>
            <span>Random Quote</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
