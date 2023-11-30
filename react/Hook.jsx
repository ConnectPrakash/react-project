/*
hooks: 
    => any function that starts with "use" is called a hook.
    => they are special functions that are only available while React is rendering 
    */
   //To create a counter where the value is increased as a function of time or at the click of a bottom
import React, { useState } from 'react';

function Hook(props) {
    const [counter, setcounter] = useState(0);
    console.log(counter);
     return (
       <div>
           hI
       </div>
     )
   }
   
export default Hook;
   
/* Exersice :
     create a varianle called cnter and initialize th value to 1

     let counter =1:
     let refresh =() => {
      ReactDOM.createRoot(document.getElementById('root')).render(<App counter={counter}/>);
     }

     setInterval(() =>{
          refresh();
          counter += 1;
     },1000);
     */


