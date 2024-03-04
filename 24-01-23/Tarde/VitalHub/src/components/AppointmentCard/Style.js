import styled, { css } from "styled-components"

export const ContainerCardList = styled.TouchableOpacity`
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
    ${props=> props.clickButton ? css`border:2px solid #496BBA` : css`border:transparent`};
    `

export const ContentCard = styled.View`
    width:${props=> `${props.ContentCardWidth}%`};
    justify-content: ${props => `${props.Justify}`};
    padding: 15px;

    background-color: #fff;
    flex-direction:${props=> `${props.direction}`};
    /* gap:${props=> `${props.gaps}px`}; */

    padding-bottom:${props=>`${props.PaddingB}px`};
    padding-top:${props=>`${props.PaddingT}`};
    /* border: 2px solid pink; */
    `

export const ViewRow = styled.View`
    width:100%;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    align-self: ${props=> `${props.Align}`};
    margin-right:${props=>`${props.MarginR}px`};
    /* border:2px solid blue; */
    margin-left:${props=> `${props.MarginL}px`};
`

export const ViewRow2 = styled(ViewRow)`
    gap:3px;
    width:80%;
    align-items:${props=> `${props.AlignView}`};
    justify-content:${props=> `${props.Justify}`};

    /* border:2px solid red; */
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
   height:${props=>`${props.H}px`};
   width:${props=>`${props.W}px`};
   align-items:${props=>`${props.Align}`};

`

export const ButtonCard = styled.TouchableOpacity`
        /* border:2px solid red; */
`

export const ButtonText= styled.Text`
    font-size:12px;
    font-family :'MontserratAlternates_500Medium';
    color: ${(props) => props.situacao== 'pendente' ? '#C81D25' : '#344F8F'};
    
`

