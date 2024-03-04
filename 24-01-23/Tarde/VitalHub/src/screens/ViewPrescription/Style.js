import styled from "styled-components";


export const InputGrayLarge = styled.TextInput.attrs({placeholderTextColor:"#34898f"  })`

        height: ${props=> `${props.InputGrayH}px`};
        width: ${props=> `${props.InputGrayW}%`};
        border:0px solid transparent;
        background-color:#F5F3F3;
        border-radius:5px;

        padding:40px 0px 10px 20px;

`

export const ContainerTextInput = styled.View `
       width: 100%;
       height:111px;
       align-items:center;
       justify-content:center;
       border:0px solid transparent;
        background-color:#F5F3F3;
        border-radius:5px;
        flex-direction: row;
`

export const TextPhotoNull = styled.Text`
    font-size: 14px;
    font-family: 'MontserratAlternates_500Medium';
    color:#4E4B59;
`

export const ButtonPhoto = styled.TouchableOpacity`
    flex-direction: row;
    background-color:#49B3BA;
    border:0px solid transparent;
    border-radius: 5px;
    width:172px;
    height:44px;
    justify-content:center;
    align-items:center;
`