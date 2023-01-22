import confirmBtn from '../confirmBtn.png';
import "./LoginErrorModal.css";

export default function LoginErrorModal(props) {

    return(
        <>
        <div className='LoginErrorModal'>
            <div className='overlay'></div>
            <div className='modal-content'>
                <text className='errorMessage'><br/><br/>아이디 혹은 비밀번호가<br/>
                    일치하지 않습니다.
                </text>
                <br/>
                <button className="confirmBtn" onClick={()=>{
                    props.setModal(!props.modal)
                }}><img alt="확인" src={confirmBtn}/></button>
            </div>
        </div>
        </>
    );
}
