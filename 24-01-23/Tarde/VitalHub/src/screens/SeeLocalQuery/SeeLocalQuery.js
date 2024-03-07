
import { BoxContainer, BoxInput } from "../../components/BoxInput/Style"
import { Container, ContainerInput } from "../../components/Container/Style"
import { ContentAccountN } from "../../components/ContentAccount/Style"
import { InputProfile, InputSmaller } from "../../components/Input/Style"
import { LinkAccount } from "../../components/Link/Style"
import { Label, Subtitle, TextProfile, Title } from "../../components/Title/Style"
import { CenterSubtitle } from "../VerifyEmail/Style"
import { ImageLocalQuery } from "./Style"


export const SeeLocalQuery = ({
    navigation,
    WidthImage = 100,
    HeightImage = 324,
    marginTop = 30,
    WidthInput=100,

}) => {
    return (
        <Container>
            <ImageLocalQuery

                WidthImage={WidthImage}
                HeightImage={HeightImage}
                source={require('../../../src/assets/images/image1.png')}
            />

            <Title
                marginTop={marginTop}

            >Clínica Natureh</Title>

            <CenterSubtitle>
                <Subtitle>São Paulo, SP</Subtitle>
            </CenterSubtitle>


            <BoxInput>
                <Label>Endereço</Label>
                <InputProfile
                    WidthInput={WidthInput}
                ><TextProfile>Rua Vicenso Silva, 987</TextProfile></InputProfile>
            </BoxInput>


            <ContainerInput>
                <BoxContainer>
                    <Label>Número</Label>
                    <InputSmaller>
                        <TextProfile>587</TextProfile>
                    </InputSmaller>
                </BoxContainer>

                <BoxContainer>
                    <Label>Cidade</Label>
                    <InputSmaller>
                        <TextProfile>Moema-SP</TextProfile>
                    </InputSmaller>
                </BoxContainer>
            </ContainerInput>

            <ContentAccountN>
                    <LinkAccount
                        onPress={() => navigation.replace("Main")}>Voltar</LinkAccount>
                </ContentAccountN>
        </Container>
    )
}