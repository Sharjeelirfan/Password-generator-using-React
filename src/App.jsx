import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [rangeVal, setRengeVal] = useState(8);
  let [pass, setPass] = useState("");
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [charAllowed, setCharAllowed] = useState(false);
  let [copyPassword , setCopyPass] = useState(false)

  let handleNumberAllowed = (event) =>{
    setNumberAllowed(event.target.checked) 
  }
  let handleCharAllowed = (event) =>{
    setCharAllowed(event.target.checked)
    // console.log(charAllowed);
    
  }
  let handleRange = (event) => {
    setRengeVal(event.target.value);
  };

  let createPass = () => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "1234567890"
    if(charAllowed) str += "!#@*&%$"

    let generatedPass = ""
    for (let i = 1; i <= rangeVal; i++) {
      
      let char = Math.floor(Math.random() * str.length )
      generatedPass += str[char]
      setPass(generatedPass)
    }
  };

  useEffect(() =>{
    createPass()
  } ,[rangeVal , numberAllowed , charAllowed])

  let copyPass = () =>{
    window.navigator.clipboard.writeText(pass)
    setCopyPass(true)

    setTimeout(() => {
      setCopyPass(false)
      
    }, 2000);
  }
  // createPass()
  // console.log(pass);
  
  // createPass()

  return (
    <>
      <div id="main">
        <h1>Password Generator</h1>
        <div id="top">
          <input id="showData" value={pass} readOnly />
          <button id="copyBtn" onClick={copyPass}>
            {copyPassword ? "Copied" : "Copy"}{" "}
          </button>
        </div>
        <div id="bottom">
          <input
            value={rangeVal}
            id="rangeinp"
            onChange={handleRange}
            type="range"
            min={6}
            max={20}
            // maxLength={20}
          />
          <p>{rangeVal}</p>
          <input
            id="checkNum"
            onChange={handleNumberAllowed}
            type="checkbox"
            defaultChecked={numberAllowed}
          />{" "}
          <label id="labelForCheckNum" htmlFor="checkNum">
            Numbers
          </label>
          <input
            id="checkCharac"
            type="checkbox"
            onChange={handleCharAllowed}
            defaultChecked={charAllowed}
          />{" "}
          <label id="labelForCheckCharac" htmlFor="checkCharac">
            Characters
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
