import Nav from 'react-bootstrap/Nav';

function Todo(){
    return(
    <div>
        <div className='todoBox'>
            <h1>ToDoList</h1>
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