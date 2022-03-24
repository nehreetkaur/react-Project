import React from 'react';


const TodoList=(props)=>{

const deleteItems=()=>{
    console.log("deleted");
}


    return(

   <div className='todo_style'>
       <i className="fa fa-times"
          aria-hidden="true" 
          onClick={deleteItems}
          />
          <li>{props.text}</li>
   </div>




    );
}

export default TodoList;