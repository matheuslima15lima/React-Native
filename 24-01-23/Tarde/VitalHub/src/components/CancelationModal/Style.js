import styled from "styled-components/native";

export const PacientModal = styled.View`
    flex:1;
    align-items:center;
    justify-content:center;
    background-color:rgba(0,0,0,0.60);
`

export const ModalContent = styled.View`
    padding:30px 30px 10px;
    width:90%;
    border-radius: 10px;
    background-color:#fff;
    align-items:center;
`
export const ModalContentQuery = styled(ModalContent)`
    width:100%;
`
export const ModalText = styled.Text`
    width:270px;
    font-size:16px;
    color:#5f5c6b;
    line-height:22px;
    text-align:center;
    margin-top: 10px;
    font-family:'Quicksand_500Medium'
`