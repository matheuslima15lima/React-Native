import { ButtonTabsStyle, ButtonTextStyle } from "./BtnListAppoiment"

export const BtnAppoiment = ({
    textButton,
    clickButton= false,
    onPress
})=>{
    return(
        <ButtonTabsStyle clickButton={clickButton} onPress={onPress}>
                <ButtonTextStyle clickButton={clickButton}>{textButton}</ButtonTextStyle>
        </ButtonTabsStyle>
    )
}