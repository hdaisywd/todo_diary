import confirmBtn from '../page/confirmBtn.png';
import "./LoginErrorModal.css";

export default function AddErrorModal(props) {

    return(
        <>
        <div className='AddErrorModal'>
            <div className='overlay'></div>
            <div className='modal-content'>
                <text className='errorMessage'><br/><br/>TASK를 입력해주세요.<br/>
                </text>
                <br/>
                <button className="confirmBtn" onClick={()=>{
                    props.setAddErrorState(!props.addErrorState)
                }}><img alt="확인" src={confirmBtn}/></button>
            </div>
        </div>
        </>
    );
}
