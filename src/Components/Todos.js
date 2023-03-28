import React from "react";
import { TodoItem } from "./TodoItem";
// import {TodoItem} from '../Components/TodoItem'

export const Todos = (props) => {
  return (
    <div className="container mb-3" style={{minHeight:'60vh'}}>
      <h3 className=" my-3">Todos List</h3>
       {props.todos.length===0?'no todos to left':
     props.todos.map((todo) => {
        return (
          <TodoItem todo={todo} key={todo.uniqeKey} onDelete={props.onDelete} /> 
        );
      })}
    </div> 
  );
};
