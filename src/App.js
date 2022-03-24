
import React,{useState} from "react";

import "./App.css"
import TodoList from "./TodoList";
function App (){

// state variable

const[inputList,  setInputList]= useState("");
const[items,setItems]=useState([])



const itemEvents=(e)=>{
  setInputList(e.target.value)
}


const listOfItems=()=>{
setItems((items)=>{
  return[...items,inputList]
})
setInputList("");
}



  return (
<div>
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>ToDo List</h1>
          <br/>
          <input type="text" placeholder="Add Items" value={inputList} onChange={itemEvents}/>
          <button onClick={listOfItems}>+</button>
          <ol>
           { items.map((val)=>{
              return <TodoList  text={val}/>
            })}
          </ol>
      </div>
      
      </div> 
  </div>          /*main div ending */



  );
}

export default App



