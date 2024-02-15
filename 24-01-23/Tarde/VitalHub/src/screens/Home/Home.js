import { BtnQuery } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { BoxUser, DataUser, HeaderContainer, NomeUser, TextDefault } from "../../components/Header/Style"
import { ImageBell, ImageUser } from "../../components/Logo/Style"
import { TitleBtn, TitleHome, TitleQuery } from "../../components/Title/Style"


export const Home = ()=>{
    return(
    
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
        <TitleHome>Novembro 2023</TitleHome>

        {/* <BtnQuery><TitleQuery>Agendar</TitleQuery></BtnQuery> */}
       </Container>
    )
}