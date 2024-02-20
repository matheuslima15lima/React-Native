import styled from "styled-components"

export const ContainerCardList = styled.View`
    width:90%;
    margin: 0px auto;
    margin-bottom: 12px;
    padding:10px;
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
    gap:11px;
    background-color: #fff;
    
`

export const ViewRow = styled.View`
    width:100%;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`


export const ContentHour = styled.View`
    /* width:100px;
    height:26px; */
    
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

