import React, {useState, useEffect} from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import confirmBtn from "../resources/확인버튼.png";
import cancelBtn from "../resources/취소버튼.png";
import "../resources/back.css";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";


function DiaryWrite(){
    const navigate = useNavigate();
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
    const DateDiv = styled.div`
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

    const TextLogo = styled.text`
    position: fixed;
    color: #6EE9FA;
    font-size: 25px;
    font-weight: bold;
    right: 10px;
    bottom: 10px;
    `;

    return(
        <Wrapper>
            <MainBox>
                <Diary>Diary</Diary>
                <Title placeholder="제목을 입력하세요."></Title>
                <DateDiv>
                    <WrittenDate selected={writtenDate}
                        onChange={(date) => setWrittenDate(date)}
                        dateFormat="yyyy.MM.dd"
                        />
                </DateDiv>
                <Content placeholder="내용을 입력하세요."></Content>
                <DivButton>
                    <Button type="submit"><img alt="confirm" src={confirmBtn}/></Button>
                    <Button onClick={() => {
                            navigate("/diary");
                        }}><img alt="cancel" src={cancelBtn}/></Button>
                </DivButton>

            </MainBox>
            <TextLogo>오늘의 투다</TextLogo>
        </Wrapper>
    )
}

export default DiaryWrite;