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

    margin-top: ${props=> `${props.Top}px`};

    margin-bottom:${props=> `${props.MbButton}px`};
    /* padding:12px 8px 12px 8px; */
`

export const BtnModal= styled(Btn)`
    margin-top: 143px;
`

export const GoogleBtn = styled(Btn)`
    background-color: #ffff;
    border: 2px solid #496BBA;
    margin-top: 15px;
    flex-direction: row;
    gap: 20px;
`

export const BtnQuery = styled(Btn)`
    height:35px;
    width:100px;
`

 export const BtnQWhite = styled(BtnQuery)`
    background-color:#FBFBFB;
 `

export const ButtonModal = styled(Btn)`
    margin-top: ${props=> `${props.BtnTop}px`};
    margin-bottom: ${props=> `${props.BtnBottom}px`};
    width: ${props=> `${props.BtnWidth}%`};
`

