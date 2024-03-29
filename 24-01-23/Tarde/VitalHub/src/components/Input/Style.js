import styled from "styled-components";

export const Input = styled.TextInput.attrs({placeholderTextColor:"#34898f"  })`
    width:90%;
    border:2px solid #49b3ba;
    padding:16px;
    margin-top: 15px;
    height:53px;
    border-radius: 5px;
    font-family: ' MontserratAlternates_600SemiBold';
    font-size:14px;
   
    color:#34898f;
`

export const LargeInput = styled(Input)`
    height:121px;
    padding-bottom:80px;
`

export const InputNumber = styled(Input)`
    width: 65px;
    height:62px;
    font-size: 30px;
    font-family: 'Quicksand_600SemiBold';
    text-align: center;
   
       
`
export const InputProfile = styled(Input)`
    border:2px solid #F5F3F3;
    border-radius:5px;
    margin-top:0px;
    background-color:#F5F3F3;
    width: ${props => `${props.WidthInput}%`};
    
`
export const InputSmaller = styled(InputProfile)`
    width:70%;
    margin-bottom: 0px;
`
