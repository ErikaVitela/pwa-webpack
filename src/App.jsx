import { useState } from "react";
import "./App.css"
import "./App.scss"
import logo from "./flower-icon.svg";
import Data from './data.csv';
import yaml from './data.yaml';
import json from './data.json5';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

function App() {
    const [name, setName] = useState("");
    return (
      <div className="app">
        <h1>
          Bienvenido <img src={logo} width="25" alt="Wildflower logo" ></img>
        </h1>
        <div>
          <label htmlFor="name">Nombre de usuario: </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div><input type="submit" value="Submit" /></div>
      </div>
    );
  };
  
  export default App;

  console.log(Data);
  console.log(yaml.title); 
  console.log(json.owner.name); 

  