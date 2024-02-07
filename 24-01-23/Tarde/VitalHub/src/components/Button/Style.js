import styled from "styled-components";

export const Btn = styled.TouchableOpacity`
    background-color:#496BBA;
    width:90%;
    border: 1px solid #496BBA;
    border-radius: 5px;
    align-items:center;
    justify-content:center;
    margin-top: 30px;
    height:44px;
    /* padding:12px 8px 12px 8px; */
`

export const GoogleBtn = styled(Btn)`
    background-color: #ffff;
    border: 2px solid #496BBA;
    margin-top: 15px;
    flex-direction: row;
    gap: 20px;
`