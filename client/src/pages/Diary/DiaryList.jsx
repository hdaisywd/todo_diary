import React, {useState} from "react";
import DiaryListItem from "./DiaryListItem";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    justify-content: center;
    padding-top: 10px;

    & > * {
        :last-child {
            border-top-left-radius: 16px;
            border-top-right-radius: 16px;
        }
        :first-child {
            border-bottom-left-radius: 16px;
            border-bottom-right-radius: 16px;
        }
    }
`;
function DiaryList({items}){
    return(
        <Wrapper>
            {
                items.map((item) =>
                    <DiaryListItem item = {item}/>
                )
            }
        </Wrapper>
    );
}

export default DiaryList;