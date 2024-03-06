import { Btn } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Style"
import { Logo } from "../../components/Logo/Style"
import { Subtitle, Title, TitleBtn } from "../../components/Title/Style"



export const RecoverPwd = ({ Top = 20, Bot = 20, marginTop = 25, navigation }) => {
    return (
        <Container>
            <Logo
                source={require('../../../src/assets/images/VitalHub_Logo.png')}
            />

            <Title
                marginTop={marginTop}
            >Recuperar senha</Title>

            <Subtitle
                Bot={Bot}
            >Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</Subtitle>


            <Input
                placeholder="Usuário ou E-mail"
            />

            <Btn
                Top={Top}

                onPress={() => navigation.replace("Verifique seu E-mail")}

            >
                <TitleBtn>CONTINUAR</TitleBtn>
            </Btn>

        </Container>
    )

}