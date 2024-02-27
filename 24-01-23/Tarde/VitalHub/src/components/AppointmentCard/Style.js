import styled from "styled-components"

export const ContainerCardList = styled.View`
    /* width:90%; */
    width:${props => `${props.fieldWidth}%`};
    margin: 0px auto;
    margin-bottom: 12px;
    padding:${props => `${props.fieldPadding}px`};
    border-radius:5px;
    background-color:#fff;
    flex-direction:row;
    gap:10px;
    shadow-color:'black';
    shadow-opacity:0.26;
    shadow-offset:20px 20px;
    shadow-radius:10px;
    elevation:5;
    
    `

export const ContentCard = styled.View`
    width:70%;
    background-color: #fff;
    flex-direction:${props=> `${props.direction}`};
    gap:${props=> `${props.gaps}px`};

    padding-bottom:${props=>`${props.PaddingB}px`};
    padding-top:${props=>`${props.PaddingT}`}
    
    `

export const ViewRow = styled.View`
    width:100%;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;

    margin-left:${props=>`${props.MarginL}px`};
`

export const ViewRow2 = styled(ViewRow)`
    gap:16px;
    width:80%;
`
export const ViewRowRec = styled(ViewRow)`
    gap:20px;
    width:60%;
    margin-top:10px;
    margin-bottom:24px;
`


export const ContentHour = styled.View`
    width:100px;
    height:26px;
    
    border-radius: 5px;
    padding:4px 23px;
    flex-direction:row;
    gap:6px;
    background-color: ${(props)=> props.situacao == "pendente" ? "#E8FCFD" :"#F1F0F5"};
   

`

export const ButtonCard = styled.TouchableOpacity`

`

export const ButtonText= styled.Text`
    font-size:12px;
    font-family :'MontserratAlternates_500Medium';
    color: ${(props) => props.situacao== 'pendente' ? '#C81D25' : '#344F8F'};
`

