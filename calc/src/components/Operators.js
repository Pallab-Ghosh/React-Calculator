import React from 'react'
import './Style.css'


export const Operators = ({handle_click,clear,onsubmission}) => {
  return (
    <div>
    <table>
    <thead>
    <tr>
    <th><button onClick={handle_click}>(</button></th> 
    <th><button onClick={handle_click} >)</button></th>
    <th><button onClick={clear}>C</button></th>   
    <th><button onClick={handle_click} className="sign">%</button></th>    
    </tr>
<tr>

 <th><button onClick={handle_click}>7</button></th>        
 <th><button onClick={handle_click}>8</button></th>      
 <th><button onClick={handle_click}>9</button></th>        
 <th><button onClick={handle_click} className="sign">*</button></th>       
</tr>

<tr>
<th><button onClick={handle_click}>4</button></th>           
<th><button onClick={handle_click}>5</button></th>     
<th><button onClick={handle_click}>6</button></th>      
<th><button onClick={handle_click} className="sign">-</button></th>      
</tr>

<tr>
 <th><button onClick={handle_click}>1</button></th>    
 <th><button onClick={handle_click}>2</button></th>   
 <th><button onClick={handle_click}>3</button></th>      
 <th><button onClick={handle_click} className ="sign">+</button></th>    
</tr>

<tr>
<th><button onClick={handle_click}>0</button></th>    
<th><button onClick={handle_click}className="sign">.</button></th>     
<th> <button  onClick={handle_click}className="sign">/</button></th>    
<th><button onClick={onsubmission} className ="sign">=</button></th>     
</tr>
</thead>
   
</table>n
    </div>
  )
}
