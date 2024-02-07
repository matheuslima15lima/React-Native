import { Container } from "../../components/Container/Style"
import { Logo } from "../../components/Logo/Style"
import { Subtitle, Title } from "../../components/Title/Style"



export const RecoverPwd = ()=>{
    return(
        <Container>
            <Logo
            source={require('../../../src/assets/images/VitalHub_Logo.png')}
            />

            <Title>Recuperar senha</Title>

            <Subtitle>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</Subtitle>
        </Container>
    )

}