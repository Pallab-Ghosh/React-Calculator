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


  return (
    <div className="App">
     <Title/>
     <form>
     <input type="text" name='screen' id='screen' value={count}/>
     </form>
    
    </div>
  );
}

export default App;
