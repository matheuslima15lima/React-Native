import styled from "styled-components";

export const BtnIncrement = styled.TouchableOpacity`
     border-Width:1px;
    border-Radius:5px;
    background-Color: blue;
    width: 100px;
    height:30px;
`
export const BtnDecrement = styled(BtnIncrement)`
    background-color:red;
`