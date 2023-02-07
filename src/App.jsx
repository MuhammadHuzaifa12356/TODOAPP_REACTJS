import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
   const[arr,setarr]=useState([]);
   const[text,setText]=useState("");
   console.log(arr);
    let add=()=>{
      arr.push(text);
      setarr([...arr]);    
    }

    let delte=()=>{
      arr.pop(text);
       setarr([...arr]);
       
    }
    let edit=(e)=>{
       arr.map((x,i)=>{
        if(arr[i]!=e){
          arr[i]=e;
          setarr([...arr]);
        }
       })
      
    }
    let deleteall=()=>{
      while(arr.length>0){
        arr.pop(text);
       setarr([...arr]);
      }
    }
  return (
    
    <body>
      
      <div className="head">
        <h1>TODO APP</h1>
        <h3>Made By M.Huzaifa</h3>
     </div>
    
     <div className="appstart">
       <div> <input type="text" placeholder='Enter Your Task Here !' onChange={(e)=>{
        setText(e.target.value);
       }}/>
       
       <button className='addbtn' onClick={add
             }>ADD
            </button>
      <button className='delbtn' onClick={deleteall}>Delete_All</button>
       </div>

       <div >
       <ol>
        {
          arr.map((x,i)=>{
            return (
                <li key={i}>
                  {x}
                  <button className='editbtn' onClick={(a)=>{
                    a=prompt("Enter New Task");
                    edit(a);
                  }}>Edit</button>
                  <button className='del' onClick={delte}>Delete</button>
                </li>
            );
          })
        }
       </ol>
          
       </div>
    
         
     </div>
    </body>
     
  );
}

export default App;
