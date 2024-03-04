import styled from "styled-components";

export const Title = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size:20px;
    color:#33303e;
    

   margin-bottom:${props => `${props.marginBo}px`};

   margin-top:${props=> `${props.marginTop}px`}
`
export const TitleBtn = styled.Text`
    font-family: 'MontserratAlternates_700Bold';
    font-size: 16px;
    color:#FFFFFF;
   

`
export const TitleQuery = styled(Title)`
    font-size:12px ;
    color:#FBFBFB;
`
export const TitleQuery2 = styled(TitleQuery)`
    
    color:#607EC5;
`
export const TitleGoogle = styled(TitleBtn)`
    color:#496BBA;
    font-size: 14px;
`

export const TextAccount = styled.Text`
    font-family: 'MontserratAlternates_500Medium';
    font-size:14px;
    color:#8C8A97;
    align-self: flex-start;
    margin-left: 20px;
    margin-top: 10px;
`

export const Subtitle = styled.Text`
    font-family: 'Quicksand_500Medium'; 
    color:#5F5C6B;
    width:90%;
    font-size: 16px;
    margin-top: 15px;
    text-align:center;
    align-self:${props=>`${props.align}`};
    margin-right:${props=>`${props.Mr}px`};
    margin-bottom:${props=>`${props.Bot}`};
    
`



export const Label = styled.Text`
    font-family: 'Quicksand_600SemiBold';
    font-size:16px;
`

export const LabelModal = styled(Label)`
    font-size:14px;
`
export const TextProfile = styled(TextAccount)`
    color:#33303E;

 
`
export const TitleHome = styled(Title)`
    color:#4E4B59;
    align-self:flex-start;
    margin-left: 22px;
`
