import Nav from 'react-bootstrap/Nav';
import "./Todo.css";
import TodoList from "./TodoList.js";
import Task from "./Task.js";
import { useState, useRef } from 'react';
import Navbar from './Navbar';

function Todo(){

    const [todoState, setTodoState] = useState(true);
    const [todoList, setTodoList] = useState([]);
    const [useID, setUseID] = useState(0);

    return(
    <div>
        <Navbar></Navbar>

        <div className='todoBox'>
            { todoState === true? <TodoList setTodoState={setTodoState} todoList={todoList} setTodoList={setTodoList}/> : 
            <Task setTodoState={setTodoState} setTodoList={setTodoList} todoList={todoList} useID={useID} setUseID={setUseID}/> }
        </div>
    <text className='text_title'>오늘의 투다</text>
    </div>
    )
}

export default Todo;