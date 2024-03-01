import styled from "styled-components";

export const ContainerQueryData = styled.View`
    align-self:flex-start;
    margin-top:28px;
    margin-bottom: ${Props => `${Props.MarginB}px`};
`

export const TextData = styled.Text`
    font-family: 'Quicksand_500Medium';
    font-size: 14px;
    color:#4E4B59;

`

export const ContainerScheduleData = styled.View`
        align-self: center;
        align-items:center;
        width:80%;
        justify-content:center;
        margin-left:${Props => `${Props.Ml}px`}
`

