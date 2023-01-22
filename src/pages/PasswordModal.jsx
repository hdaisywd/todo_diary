import confirmBtn from './resources/confirmBtn.png';
import "./PasswordModal.css";

export default function PasswordModal(props) {

    return(
        <div className='PasswordModal'>
            <div className='overlay'></div>
            <div className='modal-content'>
                <text className='errorMessage'><br/><br/>비밀번호를<br/>
                    확인해주세요.
                </text>
                <br/>
                <button className="confirmBtn" onClick={()=>{
                    props.setModal(!props.modal)
                }}><img alt="확인" src={confirmBtn}/></button>
            </div>
        </div>
    );
}