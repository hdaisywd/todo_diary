import "./Task.css";
import btnADD from "./btn_ADD.png";
import btnCANCLE from "./btn_CANCLE.png";
import { useState } from "react";
import AddErrorModal from "../Modal/AddErrorModal.js";
import AddModal from "../Modal/AddModal.js";

function Task(props){

    let copy;
    let todoData;
    const [addErrorState, setAddErrorState] = useState(false);
    const [addState, setAddState] = useState(false);

    return(
        <div className="TASK">
            <br/><text className="text_Task">TASK</text>
            <div className="taskInputBox">
                <input type="text" placeholder="TASK를 입력하세요." className="taskInput" onChange={(e)=>{
                    if(e.target.value !== null){
                        todoData = e.target.value;
                        copy = [...props.todoList];
                        copy.push({id:0, text:todoData, checked:true})
                        // copy.push(todoData);
                    }                          
                }}></input>
            </div>
            <button className='btnADD' onClick={()=>{
                /*input에 입력O --> 추가
                input에 입력X --> 입력하라고 팝업창 띄우기*/
                if (todoData) {
                    setAddState(!addState)
                    props.setTodoList(copy);
                    props.setTodoState(true)
                }
                else {
                    setAddErrorState(!addErrorState); }       
            }}><img alt='btnADD' src={btnADD} className='imgADD'/></button>        
            <button className='btnCANCLE' onClick={()=>{
                props.setTodoState(true)
            }}><img alt='btnCANCLE' src={btnCANCLE} className='imgCANCLE'/></button>   
        {addErrorState === true ? <AddErrorModal addErrorState={addErrorState} setAddErrorState={setAddErrorState}/> : null}
        {/* {addState === true ? <AddModal addState={addState} setAddState={setAddState} copy={copy} setTodoList={props.setTodoList} setTodoState={props.setTodoState} todoData={todoData}/> : null} */}
        </div>
    )
}

export default Task;