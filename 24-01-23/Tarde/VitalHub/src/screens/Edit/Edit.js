import { ViewRowRec } from "../../components/AppointmentCard/Style"
import { BoxInput } from "../../components/BoxInput/Style"
import { Btn } from "../../components/Button/Style"
import { Container, Scrool } from "../../components/Container/Style"
import { ContentAccountN } from "../../components/ContentAccount/Style"
import { TextModalEmail, UserQuery } from "../../components/Header/Style"
import { LinkAccount } from "../../components/Link/Style"
import { ProfileImg } from "../../components/Logo/Style"
import { Label, Title, TitleBtn } from "../../components/Title/Style"
import { InputGrayLarge } from "../ViewPrescription/Style"

export const Edit = (
    {
        navigation,
        InputGrayH = 121,
        InputGrayW = 100,
        Top = 20,
        MbButton = 10

    }) => {
    return (
        <Scrool>
            <Container>
                <ProfileImg
                    source={require('../../../src/assets/images/Profile.png')}
                >

                </ProfileImg>

                <Title>Richard Kosta</Title>

                <ViewRowRec>
                    <UserQuery>22 Anos</UserQuery>
                    <TextModalEmail>richard.kosta@gmail.com</TextModalEmail>
                </ViewRowRec>


                <BoxInput>
                    <Label>Descrição da consulta</Label>
                    <InputGrayLarge

                        InputGrayH={InputGrayH}
                        InputGrayW={InputGrayW}



                        placeholder="O paciente possuí uma infecção no
                    ouvido. Necessário repouse de 2 dias
                    e acompanhamento médico constante"

                    />




                </BoxInput>
                <BoxInput>
                    <Label>Diagnóstico do paciente</Label>
                    <InputGrayLarge
                        InputGrayH={InputGrayH}
                        InputGrayW={InputGrayW}



                        placeholder="Infecção no ouvido"

                    />




                </BoxInput>
                <BoxInput>
                    <Label>Prescrição médica</Label>
                    <InputGrayLarge
                        InputGrayH={InputGrayH}
                        InputGrayW={InputGrayW}

                        placeholder="Medicamento: Advil
                        Dosagem: 50 mg
                        Frequência: 3 vezes ao dia
                        Duração: 3 dias"

                    />
                </BoxInput>

                <Btn

                    onPress={() => navigation.replace("Prontuario")}
                    Top={Top}
                    MbButton={MbButton}
                >
                    <TitleBtn>SALVAR</TitleBtn>
                </Btn>

                <Btn


                    onPress={()=> navigation.replace("Prontuario")}
                    MbButton={MbButton}
                >
                    <TitleBtn>Editar</TitleBtn>
                </Btn>

                <ContentAccountN>
                    <LinkAccount onPress={()=> navigation.replace("Main")}>Cancelar</LinkAccount>
                </ContentAccountN>
            </Container>
        </Scrool>

    )
}