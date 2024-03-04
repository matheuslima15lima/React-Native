import styled from "styled-components";
import {LinearGradient} from "expo-linear-gradient"
import { Container } from "../Container/Style";

export const HeaderContainer = styled(LinearGradient).attrs({ 
colors: ['#60BFC5','#496BBA'],
start: { x: 0, y: 0 },
end: { x: 1, y: 1 },
})`
    
    height:20%;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    border-radius: 0px 0px 15px 15px;
    border-bottom:5;
    height:130px;
    width:100%;
    margin-bottom:20px;
`

export const BoxUser = styled.View`
    flex-direction:row;
    align-items:center;
    column-gap:10px;
    margin-bottom:30px;
    margin-left: 20px;
    margin-top: 34px;
    /* margin-left: 20px; */
`

export const FilterAppoinment = styled.View`
    width:90%;
    flex-direction: row;
    justify-content:space-between;
    margin-top: 38px;
    
`
export const ContainerCard = styled.View`
      height: 102px;
      width:90%;
      border: 1px solid black; 
      flex-direction:row;
      gap:10px;
      padding-left:10px;
      padding-top: 11px;
      margin-top:20px;

`

export const DataUser = styled.View`
    
    gap:6px;
`
export const IconContainer = styled.View`
        margin-right:22px;
`

export const UserDataCard = styled.View`
    flex-direction:row; 
    gap:15px;
    
`

export const UserAgeCard = styled.Text`
    font-size: 14px;
    font-family: ' Quicksand_400Regular';
    color:'#8C8A97';
`

export const UserQuery = styled.Text`
    font-size: 14px;
    font-family:'Quicksand_600SemiBold';
    color:${(props) => props.situacao == 'pendente'? '#49B3BA': '#8C8A97'};
    margin-right: ${props=> `${props.marginR}px`};
    
`
export const TextDefault = styled.Text`
    font-family: 'Quicksand_500Medium';
    font-size: 14px;
    color:#4E4B59;
    margin-bottom: 3px;
`

export const TextModalEmail = styled(TextDefault)`
    margin-top: 5px;
    color:#5F5C6B;
`

export const NomeUser = styled.Text`
    
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 16px;
    color:#FBFBFB;
`

export const NomeUserBlack = styled(NomeUser)`
    color:#33303E;
`