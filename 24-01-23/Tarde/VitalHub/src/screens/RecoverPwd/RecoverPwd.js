import { Btn } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Style"
import { Logo } from "../../components/Logo/Style"
import { Subtitle, Title, TitleBtn } from "../../components/Title/Style"



export const RecoverPwd = ()=>{
    return(
        <Container>
            <Logo
            source={require('../../../src/assets/images/VitalHub_Logo.png')}
            />

            <Title>Recuperar senha</Title>
            
            <Subtitle>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</Subtitle>


            <Input
                placeholder="Usuário ou E-mail"
            />

            <Btn>
                <TitleBtn>CONTINUAR</TitleBtn>
            </Btn>

        </Container>
    )

}