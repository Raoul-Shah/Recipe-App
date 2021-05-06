import React, {useEffect, useState} from "react";
import './App.css';

const App = () => {

  const APP_ID = "380a166b";
  const APP_KEY = "92f547c381bc4b2238927bb5b53aadd3";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  useEffect( () => {

  }, []);

  const getRecipes = async () => {
    const response = await fetch
  }

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
      {/* <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1> */}
    </div>
  );
}

export default App;
