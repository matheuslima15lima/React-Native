import { Btn } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { ContentAccount, ContentAccountN } from "../../components/ContentAccount/Style"
import { Input } from "../../components/Input/Style"
import { LinkAccount } from "../../components/Link/Style"
import { Logo } from "../../components/Logo/Style"
import { Subtitle, Title, TitleBtn } from "../../components/Title/Style"


export const CreateAcnt = ({navigation,Top= 30})=>{
    return(
        <Container>
            <Logo
                source={require('../../../src/assets/images/VitalHub_Logo.png')}
            />

            <Title>Criar conta</Title>
            <Subtitle>Insira seu endereço de e-mail e senha para realizar seu cadastro.</Subtitle>

            <Input
                placeholder="Usuário ou E-mail"
            />
            <Input
                placeholder="Senha"
            />
            <Input
                placeholder="Confirmar senha"
            />

            <Btn
                Top={Top}
            >
                <TitleBtn>CADASTRAR</TitleBtn>
            </Btn>

            <ContentAccountN>
            <LinkAccount onPress={()=>navigation.replace("Login")}>Cancelar</LinkAccount>
            </ContentAccountN>
            
        </Container>
       
    )
}