
import { BtnQWhite, BtnQuery } from "../../components/Button/Style"
import CalendarHome from "../../components/CalendarHome/CalendarHome"
import { Container } from "../../components/Container/Style"
import { BoxUser, DataUser, HeaderContainer, NomeUser, TextDefault } from "../../components/Header/Style"
import { ImageBell, ImageUser } from "../../components/Logo/Style"
import { TitleBtn, TitleHome, TitleQuery, TitleQuery2 } from "../../components/Title/Style"


export const Home = () => {
    return (

        <Container>
            <HeaderContainer>
                <BoxUser>
                    <ImageUser
                        source={require('../../../src/assets/images/Medico.png')}
                    />

                    <DataUser>
                        <TextDefault>Bem-Vindo</TextDefault>
                        <NomeUser>Dr.Claudio</NomeUser>
                    </DataUser>
                </BoxUser>

                <DataUser>
                    <ImageBell
                        source={require('../../../src/assets/images/Group-94.png')}
                    />
                </DataUser>

            </HeaderContainer>
            
            <CalendarHome/>

            <BoxUser>
                <BtnQuery>
                    <TitleQuery>Agendadas</TitleQuery>
                </BtnQuery>

                <BtnQWhite>
                    <TitleQuery2>Realizadas</TitleQuery2>
                </BtnQWhite>
                <BtnQWhite>
                    <TitleQuery2>Canceladas</TitleQuery2>
                </BtnQWhite>
            </BoxUser>



        </Container>
    )
}