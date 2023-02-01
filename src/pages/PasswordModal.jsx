import confirmBtn from './resources/confirmBtn.png';
import styled from 'styled-components';


function PasswordModal(props) {

    const Overlay = styled.div`
    background: rgba(49,49,49,0.8);
    width: 101vw;
    height: 101vh;
    left: -140%;
    top: -18%;
    position: fixed;
    `;

    const ModalContent = styled.div`
    text-align: center;
    background-color: #fff;
    padding: 14px 28px;
    border-radius:20px;
    width: 400px;
    min-width: 400px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    `;

    const ErrorMsg = styled.text`
    font-weight: bold;
    text-align: center;
    align-items: center;
    font-size:24px;
    color: rgb(150, 150, 150);
    `;

    const ConfirmBtn = styled.button`
    background-color: white;
    border-color: white;
    border-style: solid;
    `;
    return(
        <div className='PasswordModal'>
            <Overlay></Overlay>
            <ModalContent>
                <ErrorMsg className='errorMessage'><br/>비밀번호를 확인해주세요.<br/>
                </ErrorMsg>
                <br/>
                <ConfirmBtn className="confirmBtn" onClick={()=>{
                    props.setModal(!props.modal)
                }}><img alt="확인" src={confirmBtn}/></ConfirmBtn>
            </ModalContent>
        </div>
    );
}

export default PasswordModal;