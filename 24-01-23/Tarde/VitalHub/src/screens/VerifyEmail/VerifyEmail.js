import { Btn } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import {  ContentAccountN } from "../../components/ContentAccount/Style"
import { InputNumber } from "../../components/Input/Style"
import { LinkAccount } from "../../components/Link/Style"
import { Logo } from "../../components/Logo/Style"
import { Subtitle, Title, TitleBtn, TitleGoogle } from "../../components/Title/Style"


export const VerifyEmail = ()=>{
    return(
        <Container>
             <Logo
            source={require('../../../src/assets/images/VitalHub_Logo.png')}
            />
            <Title>Verifique seu e-mail</Title>
            <Subtitle>Digite o código de 4 dígitos enviado para </Subtitle>
            <TitleGoogle>username@email.com</TitleGoogle>

            <ContentAccountN>
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

            <Btn>
                <TitleBtn>Entrar</TitleBtn>
            </Btn>
            <ContentAccountN>
                <LinkAccount>Reenviar Código</LinkAccount>
            </ContentAccountN>
            
            
        </Container>
    )
}