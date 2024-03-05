import { Image, Text } from "react-native"
import { Container } from "../../components/Container/Style"
import { Logo } from "../../components/Logo/Style"
import { TextAccount, Title, TitleBtn, TitleGoogle } from "../../components/Title/Style"
import { Input } from "../../components/Input/Style"
import { Link, LinkAccount } from "../../components/Link/Style"
import { Btn, GoogleBtn } from "../../components/Button/Style"
import { AntDesign } from '@expo/vector-icons';
import { ContentAccount } from "../../components/ContentAccount/Style"
export const Login = ({navigation})=>{

    async function Login(){
        navigation.navigate("Main")
    }
    return(
        <Container>
            <Logo
                source={require('../../../src/assets/images/VitalHub_Logo.png')}
            />
             <Title>Entrar ou criar conta</Title>

             <Input
                placeholder="Usuário ou Email"
             />

            <Input
                  placeholder="Senha"
            />

            <Link>Esqueceu a senha?</Link>

            <Btn onPress={e => Login()}>
                <TitleBtn>ENTRAR</TitleBtn>
            </Btn>

            <GoogleBtn>
                
            <AntDesign name="google" size={20} color="#496BBA" />
                <TitleGoogle>Entrar com Google</TitleGoogle>
                
            </GoogleBtn>

            <ContentAccount>
                <TextAccount>Nao tem conta?</TextAccount>
                <LinkAccount onPress={()=> navigation.replace("Cadastro")}>Crie uma conta agora!</LinkAccount>
            </ContentAccount>
            
            
            {/* 
           
            
           

            <LinkMedium>Esqueceu sua senha?</LinkMedium>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <ButtonTitleGoogle>Entrar com Google</ButtonTitleGoogle>
                <ContentAccount>
                    <TextAccount>Não tem conta? Crie uma agora!</TextAccount>
                </ContentAccount>
            </ButtonGoogle> */}
        </Container>
    )
}