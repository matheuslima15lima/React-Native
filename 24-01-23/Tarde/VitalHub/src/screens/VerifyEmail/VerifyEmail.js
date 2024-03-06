import { Btn } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { ContentAccountN } from "../../components/ContentAccount/Style"
import { InputNumber } from "../../components/Input/Style"
import { LinkAccount } from "../../components/Link/Style"
import { Logo } from "../../components/Logo/Style"
import { Subtitle, Title, TitleBtn, TitleGoogle } from "../../components/Title/Style"
import { CenterSubtitle } from "./Style"


export const VerifyEmail = ({MB=30, MT=20, MbButton=30, navigation}) => {
    return (
        <Container>
            <Logo
                source={require('../../../src/assets/images/VitalHub_Logo.png')}
            />
            <Title>Verifique seu e-mail</Title>
            <CenterSubtitle>
                <Subtitle>Digite o código de 4 dígitos enviado para </Subtitle>
            </CenterSubtitle>

            <TitleGoogle>username@email.com</TitleGoogle>

            <ContentAccountN
                MB={MB}
                MT={MT}
            >
                <InputNumber
                    placeholder="0"
                />
                <InputNumber
                    placeholder="0"
                />
                <InputNumber
                    placeholder="0"
                />
                <InputNumber
                    placeholder="0"
                />
            </ContentAccountN>

            <Btn

                onPress={()=> navigation.replace("Redefinir Senha")}
                MbButton={MbButton}
            >
                <TitleBtn>Entrar</TitleBtn>
            </Btn>
            <ContentAccountN>
                <LinkAccount>Reenviar Código</LinkAccount>
            </ContentAccountN>


        </Container>
    )
}