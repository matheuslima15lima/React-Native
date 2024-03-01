import styled from "styled-components";

export const BoxInput = styled.View`
    width:90%;
   margin-bottom: 24px;
   margin-top:40px;
    align-items:${props=>`${props.AlignBox}`};

`



export const BoxContainer = styled(BoxInput)`
    width:50%;
    
`
