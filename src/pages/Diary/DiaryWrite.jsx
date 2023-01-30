import React, {useState, useEffect} from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import confirmBtn from "../resources/확인버튼.png";
import cancleBtn from "../resources/취소버튼.png";
import "../resources/back.css";

function DiaryWrite(){
    const [writtenDate, setWrittenDate] = useState(new Date());
    const Wrapper = styled.div`   
    width: 100vw;
    heignt: 100vh;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    `;
    
    const MainBox = styled.div`
    position: fixed;
    top: 15%;
    border-radius: 0px 0px 50px 50px;
    box-shadow: 5px 5px 20px gray;
    height: 550px;
    width: 700px;
    background-color: #fff;
    `;

    const Diary = styled.p`
        color: #88F8EA;
        font-weight: 900;
        font-size: 30pt;
        text-align: center;
        padding-top: 30px;

    `;

    const Title = styled.textarea`
        width: 440px;
        margin-left: 25px;
        margin-top: 15px;
        margin-right: 10px;
        border-top-left-radius: 16px;
        background: #88F8EA15;
        border: 1px solid #88F8EA;
        font-weight: bold;
        font-color: grey;
        height: 50px;
        font-size: 1.4rem;
        float: left;
    `;

    const WrittenDate = styled(DatePicker)`
        width: 200px;
        border-top-right-radius: 16px;
        height:50px;
        font-size:1.6rem;
        font-weight:bold;
        border: 1px solid;
        background: #88F8EA15;
        border: 1px solid #88F8EA;
        margin-top: 15px;
        text-color: grey;
    `;

    const Content = styled.textarea`
        width: 650px;
        margin-left: 25px;
        margin-top: 10px;
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
        background: #88F8EA15;
        border: 1px solid #88F8EA;
        font-weight: bold;
        font-color: grey;
        height: 250px;
        font-size: 1.4rem;
    `;
    const Button = styled.button`
    background-color: rgba(255, 255, 255,0);
    border: none;
    display: inline-block;
    margin-top: 15px;
    `;
    
    const DivButton = styled.div`
        text-align: center;
    `;

    return(
        <Wrapper>
            <MainBox>
                <Diary>Diary</Diary>
                <Title placeholder="제목을 입력하세요."></Title>
                <WrittenDate selected={writtenDate}
                      onChange={(date) => setWrittenDate(date)}
                      dateFormat="yyyy.MM.dd"
                      />
                <Content placeholder="내용을 입력하세요."></Content>
                <DivButton>
                    <Button><img alt="register" src={confirmBtn}/></Button>
                    <Button><img alt="register" src={cancleBtn}/></Button>
                </DivButton>

            </MainBox>
        </Wrapper>
    )
}

export default DiaryWrite;