import { BoxContainer, BoxInput } from "../../components/BoxInput/Style"
import { Btn } from "../../components/Button/Style"
import { Container, ContainerInput, Scrool } from "../../components/Container/Style"
import { ContentAccountCenter, ContentAccountN, ContentProfille } from "../../components/ContentAccount/Style"
import { InputProfile, InputSmaller } from "../../components/Input/Style"
import { LinkProfile } from "../../components/Link/Style"
import { ProfileImg } from "../../components/Logo/Style"
import { Label, TextAccount, TextProfile, Title, TitleBtn } from "../../components/Title/Style"


export const Profile = () => {
    return (
        <Scrool>
        <Container>
            <ProfileImg
            source={require('../../../src/assets/images/Profile.png')}>
                

                <ContentProfille>
                    <Title>Richard Kosta</Title>
                    <ContentAccountCenter><LinkProfile>richard.kosta@gmail.com</LinkProfile></ContentAccountCenter>
                    
                </ContentProfille>

               

            </ProfileImg>

            <BoxInput>
                    <Label>Data de nascimento:</Label>
                    <InputProfile><TextProfile>04/05/1999</TextProfile></InputProfile>
            </BoxInput>

            <BoxInput>
                    <Label>CPF</Label>
                    <InputProfile><TextProfile>859********</TextProfile></InputProfile>
            </BoxInput>

            <BoxInput>
                    <Label>Endereço</Label>
                    <InputProfile><TextProfile>Rua Vicenso Silva, 987</TextProfile></InputProfile>
            </BoxInput>

            <ContainerInput>
                <BoxContainer>
                    <Label>Cep</Label>
                    <InputSmaller>
                        <TextProfile>06548-909</TextProfile>
                    </InputSmaller>
                </BoxContainer>

                <BoxContainer>
                    <Label>Cidade</Label>
                    <InputSmaller>
                        <TextProfile>Moema-SP</TextProfile>
                    </InputSmaller>
                </BoxContainer>
            </ContainerInput>

            <Btn><TitleBtn>SALVAR</TitleBtn></Btn>

            <Btn><TitleBtn>EDITAR</TitleBtn></Btn>
        </Container>
        </Scrool>
    )
}