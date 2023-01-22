import Nav from 'react-bootstrap/Nav';
import "./Todo.css";

function Todo(){
    return(
    <div>
        <div className='todoBox'>
            <text className='text1'>To Do List</text>
            { [1,2,3].map((data, i)=>
            <div key={i} className='checkList'>
                <input type="text"></input>
                <input type="checkbox"></input>    
                <button>X</button>
            </div>
            )
            } 
        <button>ADD</button>  
        </div>
    </div>
    )
}

export default Todo;