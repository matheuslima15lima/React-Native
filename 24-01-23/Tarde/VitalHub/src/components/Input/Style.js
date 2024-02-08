import styled from "styled-components";

export const Input = styled.TextInput.attrs({placeholderTextColor:"#34898f"})`
    width:90%;
    border:2px solid #49b3ba;
    padding:16px;
    margin-top: 15px;
    height:53px;
    border-radius: 5px;

    font-size:14px;
    font-family: ' MontserratAlternates_600SemiBold';
    color:#34898f;
`

export const InputNumber = styled(Input)`
    width: 65px;
    height:62px;
    font-size: 30px;
    font-family: 'Quicksand_600SemiBold';
    text-align: center;
   
       
`
