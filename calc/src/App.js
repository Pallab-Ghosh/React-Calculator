import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import { useState } from 'react';
import { Operators } from './components/Operators';

function App() {
  const[count,setcount]=useState('')

  const handle_click=(e)=>{
      setcount(count+e.target.textContent)
  }

  const clear=()=>{
    setcount("")
  }
 
 const onsubmission=()=>{
   try{
     setcount(eval(count).toString())
   }
   catch(err)
   {
     setcount("ERROR")
   }
 }

  return (
    <div className="App">
     <Title/>
     <form>
     <input type="text" name='screen' id='screen' value={count}/>
     </form>
    <Operators handle_click={handle_click} clear={clear} onsubmission={onsubmission}/>
    </div>
  );
}

export default App;
