import './App.css';
import {Footer} from './Components/Footer';
import Navbar from './Components/Navbar';
import {Todos} from './Components/Todos';
import React, { useState } from 'react';
import { AddTodo } from './Components/AddTodo';


function App() {
  const onDelete =(todo)=>{
    console.log('i m onDelete of todo', todo);

    setTodos(todos.filter((e)=>{
     return e!== todo;
    }))
  }

const addTodo =(title, desc)=>{
  console.log('i m adding this to do', title, desc);
  let sno;
  if(todos.length === 0){
    sno =0;
  }
else{
   sno = todos[todos.length-1].sno + 1;
}
  const myTodo={
    sno:sno,
    title:title,
    desc:desc
  }
  setTodos([...todos, myTodo]);
  console.log(myTodo);
}

  const [todos, setTodos] = useState([
  {
    sno : 1,
    title: 'React Tutorial',
    desc: 'get this job 1 done'
  },
  {
    sno : 2,
    title: 'Play cricket',
    desc: 'get this job 2 done'
  },
  {
    sno : 3,
    title: 'sleep',
    desc: 'get this job 3 done'
  },
]);


  return (
    <>
      <Navbar title={'MyTodoList'} searchBar={true}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer/>
    </>
  );
}

export default App;
