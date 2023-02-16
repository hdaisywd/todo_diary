import React from 'react'
import styled from 'styled-components';
import "../resources/back.css";
import DatePicker from "react-datepicker";
import editBtn from "../resources/수정버튼.png";
import delBtn from "../resources/삭제버튼.png";
function DiaryView() {

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
    background-color:#fff;
    `;

    const Diary = styled.p`
        color: #88F8EA;
        font-weight: 900;
        font-size: 30pt;
        text-align: center;
        padding-top: 30px;
    `;

    const Title = styled.div`
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

    const Content = styled.div`
    width: 650px;
    margin-left: 25px;
    margin-top: 90px;
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

    const DateDiv = styled.div`
        float: left;
    `;

    const TextLogo = styled.text`
    position: fixed;
    color: #6EE9FA;
    font-size: 25px;
    font-weight: bold;
    right: 10px;
    bottom: 10px;
    `;
    return (
    <Wrapper>
        <MainBox>
            <Diary>Diary</Diary><Title></Title>
            <DateDiv><WrittenDate></WrittenDate></DateDiv>
            <Content></Content>
            <DivButton>
                <Button><img alt="register" src={editBtn}/></Button>
                <Button><img alt="register" src={delBtn}/></Button>
            </DivButton>
        </MainBox>
        <TextLogo>오늘의 투다</TextLogo>
    </Wrapper>
    )
}

export default DiaryView;