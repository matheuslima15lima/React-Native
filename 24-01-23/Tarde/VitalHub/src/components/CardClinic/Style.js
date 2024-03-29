import styled from "styled-components";

export const ViewCardClinic = styled.View`
       
       width:40%;

        gap:10px;

        align-items:flex-end;


`
export const ViewRowStar = styled.View`
        flex-direction:row;
        margin-left: 20px;
        padding-right: ${props=>`${props.PadR}px`};
`

export const TextAssessment = styled.Text`
    font-size:14px;
    font-family: 'Quicksand_600SemiBold';
    color:#F9A620;
`