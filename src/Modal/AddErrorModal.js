import confirmBtn from '../page/confirmBtn.png';
import "./AddErrorModal.css";

export default function AddErrorModal(props) {

    return(
        <>
        <div className='AddErrorModal'>
            <div className='overlay_1'></div>
            <div className='modal_content'>
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
