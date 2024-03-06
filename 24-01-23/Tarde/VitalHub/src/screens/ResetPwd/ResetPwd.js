import { Btn } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { ContentAccountN } from "../../components/ContentAccount/Style"
import { Input } from "../../components/Input/Style"
import { Logo } from "../../components/Logo/Style"
import { Subtitle, Title, TitleBtn } from "../../components/Title/Style"


export const ResetPwd = ({Top=30, navigation})=>{
    return(
       <Container>
           <Logo
                source={require('../../../src/assets/images/VitalHub_Logo.png')}
            />

            <Title>Redefinir senha</Title>
            <Subtitle>Insira e confirme a sua nova senha</Subtitle>
            <Input
                placeholder="Nova Senha"
            />
            <Input
                placeholder="Confirmar nova senha"
            />

            <Btn
                Top={Top}
                onPress={()=> navigation.replace("Login")}
            >
                <TitleBtn>CONFIRMAR NOVA SENHA</TitleBtn>
            </Btn>
            
           
       </Container>
    )
}