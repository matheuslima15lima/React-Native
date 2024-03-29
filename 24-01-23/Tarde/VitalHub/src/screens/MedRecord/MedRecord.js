import { ViewRow2, ViewRowRec } from "../../components/AppointmentCard/Style"
import { BoxInput, } from "../../components/BoxInput/Style"
import { Btn, BtnGray } from "../../components/Button/Style"
import { Container, ContainerInput, ContainerInputs, Scrool } from "../../components/Container/Style"
import { ContentAccountN } from "../../components/ContentAccount/Style"
import { TextModalEmail, UserQuery } from "../../components/Header/Style"
import { Input, LargeInput } from "../../components/Input/Style"
import { LinkAccount } from "../../components/Link/Style"
import { ProfileImg } from "../../components/Logo/Style"
import { Label, Subtitle, Title, TitleBtn } from "../../components/Title/Style"


export const MedicalRecord = ({
    navigation,
    Top= 30,
    MbButton = 10
}) => {
    return (
        <Scrool
            showsVerticalScrollIndicator={false}
        >

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
                    <Label>Descrição</Label>
                    <LargeInput
                        placeholder="Descrição"
                    />
                </BoxInput>


                <BoxInput>
                    <Label>Diagnóstico do paciente</Label>
                    <Input
                        placeholder="Diagnóstico"
                    />
                </BoxInput>

                <BoxInput>
                    <Label>Prescrição médica</Label>
                    <LargeInput
                        placeholder="Prescrição médica"
                    />
                </BoxInput>

                <Btn>
                    <TitleBtn>SALVAR</TitleBtn>
                </Btn>

                <BtnGray
                    onPress={()=> navigation.replace("Edit")}
                    Top={Top}
                    MbButton={MbButton}
                >
                <TitleBtn>EDITAR</TitleBtn>
                </BtnGray>
                <ContentAccountN>
                    <LinkAccount>Cancelar</LinkAccount>
                </ContentAccountN>
              
            </Container>
        </Scrool>
    )
}