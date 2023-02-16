import "./Todo.css";
import add from "./add.png";
import buttonX from "./buttonX.png";
import { useCallback, useState } from "react";

function TodoList(props){

    return(
        <>
        <br/><text className='text1'>To Do List</text>
        <br/><br/>
        { props.todoList.map((data, i)=>
        <div className='List'>
        <div key={i} className='TodoList'>

            <input type="checkbox" id={i} checked={data.checked} onChange={()=>{
                <onToggle todoList={props.todoList} id={data.id}/>
            }}></input>

            <label for={i} className='todoLabel'>{data.text}</label>
            <button className='button_X' onClick={()=>{
                let copy1 = [...props.todoList];
                copy1.splice(i,1);
                props.setTodoList(copy1);
            }}>
                <img alt='buttonX' className='buttonX_img' src={buttonX}/>
            </button>
        </div>
        <br/>
        </div>
        )} 
    <button className='addBtn' onClick={()=>{
        props.setTodoState(false);
    }}><img alt='add' src={add}/></button>
    </>
    )
}

export default TodoList;

// function onToggle(props){
//     props.todoList.map((todo)=>(
//         props.id === todo.id ? { ...todo, checked: !todo.checked } : todo
//     ))
// }