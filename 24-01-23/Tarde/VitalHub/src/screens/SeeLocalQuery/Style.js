import styled from "styled-components";

export const ImageLocalQuery = styled.Image`
        width:${props=>`${props.WidthImage}%`};
        height:${props=> `${props.HeightImage}px`};
`