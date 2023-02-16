import confirmBtn from '../page/confirmBtn.png';
import "./AddErrorModal.css";

export default function AddErrorModal(props) {

    return(
        <>
        <div className='AddErrorModal'>
            <div className='overlay'></div>
            <div className='modal-content'>
                <text className='errorMessage'><br/><br/>TASK를 추가하시겠습니까?<br/>
                </text>
                <br/>
                <button className="confirmBtn" onClick={()=>{
                    props.setAddState(!props.addState)
                }}><img alt="확인" src={confirmBtn} onClick={()=>{
                    props.setTodoList(props.copy);
                    props.setTodoState(true)
                }}/></button>
            </div>
        </div>
        </>
    );
}