import React, {useState} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 500px;
    margin-left: 100px;
    display: flex;
    align-items: center;
    border: 1px solid #88F8EA;
    cursor: pointer;
    background: #88F8EA15;
    :hover {
        background: #88F8EA90;
    }

`;

const TitleText = styled.div`
    font-size: 15pt;
    padding: 10px;
    float: left;
    font-weight: 1000;
    color: grey;

`;
const DateText = styled.div`
    font-size: 10pt;
    float: left;
    padding-left: 400px;
    position: fixed;
    color: grey;

`;

function DiaryListItem({item}){
    return (
        <Wrapper>
            <TitleText>{item.title}</TitleText>
            <DateText>{item.createdAt}</DateText>
        </Wrapper>
    );
}

export default DiaryListItem;