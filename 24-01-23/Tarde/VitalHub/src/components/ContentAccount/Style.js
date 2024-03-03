import styled from "styled-components";

export const ContentAccount = styled.View`
    flex-direction: row;
    align-items:flex-start;
    align-self: flex-start;
    margin-top:30px;

`
export const ContentAccountN = styled(ContentAccount)`
    align-items:center;
    align-self: center;
    justify-content:center;
    gap:20px;
    margin-bottom: ${Props=> `${Props.MB}px`};
    margin-top: ${Props=>`${Props.MT}px`}
`

export const ContentAccountCenter = styled.View`
    align-self: center;
 
`

export const ContentProfille = styled.View`
border: 1px solid white;
border-radius: 5px;
width: 80%;
height: 100px;
position: relative;
top:230px;
left:10%;
background-color:white;
align-items:center;
justify-content:center;
text-align:center;
margin-bottom: 30px;

shadow-color:'black';
    shadow-opacity:0.26;
    shadow-offset:20px 20px;
    shadow-radius:10px;
    elevation:5;
`



