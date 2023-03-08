import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Recipee from "./Components/Recipee";

function App() {
  
  const [first, setfirst] = useState("")
  const [button, setButton] = useState(false)
  const [data, setData] = useState("")
  
  useEffect(() => {
    fetchApi(first)
  }, [button])

  async function fetchApi(inputValue){
    const fetchedApi = await fetch(`https://www.edamam.com/api/recipes/v2?type=public&q=${inputValue}&app_id=28bede44&app_key=582edc1a66fc03ad4cc37a25e4e10540`);
    const toText = await fetchedApi.text();
    const toJson = JSON.parse(toText)

    setData(toJson.hits)
    
    // console.log(toJson);
    // console.log(toJson.hits[0].recipe.image);
  }
  
  

  return (
    <div className="App">
     <Header heading="Food Recipee App" />
     <Input first={first} setfirst={setfirst} button={button} setButton={setButton}/>
     <Recipee data={data}/>
    </div>
  );
}

export default App;