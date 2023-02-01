import React, {useState, useEffect} from "react";
import styled from "styled-components";
import DiaryList from "./DiaryList";
import addBtn from "../resources/추가 버튼.png";
import { useNavigate } from "react-router-dom";
import "../resources/back.css";
import Navbar from "../../page/Navbar";

function DiaryMain(){

    const Wrapper = styled.div`   
    width: 100vw;
    heignt: 100vh;
    display: flex;
    flex-direction: column;
    position: fixed;
    align-items: center;
    justify-content: center;
    `;
    
    const MainBox = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0px 0px 50px 50px;
    box-shadow: 5px 5px 20px gray;
    height: 550px;
    width: 700px;
    background-color:#fff;
    `;

    const Diary = styled.p`
        color: #88F8EA;
        font-weight: 900;
        font-size: 45px;
        text-align: center;
        padding-top: 30px;
    `;

    const List = styled.div`
    width: 100%;
    max-width: 720px;
    `;

    const Button = styled.button`
    background-color: rgba(255, 255, 255,0);
    border: none;
    position: fixed;
    right: 5%;
    `;

    const TextLogo = styled.text`
    position: fixed;
    color: #6EE9FA;
    font-size: 25px;
    font-weight: bold;
    right: 10px;
    bottom: 10px;
    `;

    const list = [
        {id: 1, title: "오늘 일기를 썼다1", createdAt: "2023.01.10"},
        {id: 2, title: "오늘 일기를 썼다2", createdAt: "2023.01.12"},
        {id: 3, title: "오늘 일기를 썼다3", createdAt: "2023.01.12"},
        {id: 4, title: "오늘 일기를 썼다4", createdAt: "2023.01.13"},
        {id: 5, title: "오늘 일기를 썼다5", createdAt: "2023.01.20"},
        {id: 6, title: "오늘 일기를 썼다6", createdAt: "2023.01.27"},
    ]
    const navigate = useNavigate();

    return (
        <>
        <Navbar></Navbar>

            <Wrapper>
                <MainBox>
                    <Diary>Diary</Diary>
                    <List>
                        <DiaryList items={list}/><br/>
                        <Button onClick={() => {
                            navigate("/diary-write");
                        }}><img alt="register" src={addBtn}/></Button>
                    </List>
                </MainBox>
                
            </Wrapper>
            <TextLogo>오늘의 투다</TextLogo>

        </>
    );
}

export default DiaryMain;