import { Modal } from "react-native"
import { ModalContent, PacientModal } from "../components/CancelationModal/Style"
import { Label, Subtitle, Title, TitleBtn } from "../components/Title/Style"
import { ContainerQueryData, ContainerScheduleData, TextData } from "./Style"
import { BoxInput } from "../components/BoxInput/Style"
import { Btn } from "../components/Button/Style"
import { ContentAccountN } from "../components/ContentAccount/Style"
import { LinkAccount } from "../components/Link/Style"
import { CenterSubtitle } from "../screens/VerifyEmail/Style"


export const QueryModal = ({
    visible,
    setShowModalQuery,
    AlignBox = 'baseline',
    MarginB = 30,
    Ml = 40,
    align='center',
    Mr=40,
    ...rest
}) => {
    return (
        <Modal
            {...rest}
            visible={visible}
            transparent={true}
            animation="fade"
        >

            <PacientModal>
                <ModalContent>


                    <Title>
                        Agendar consulta
                    </Title>

                    <ContainerScheduleData
                        Ml={Ml}
                    >
                        
                            <Subtitle
                                align={align}
                                Mr={Mr}
                            >Consulte os dados selecionados para a sua consulta</Subtitle>
                        

                    </ContainerScheduleData>


                    <ContainerQueryData>

                        <Label>Data da consulta</Label>
                        <TextData>1 de Novembro de 2023</TextData>



                    </ContainerQueryData>

                    <ContainerQueryData>
                        <Label>Data da consulta</Label>
                        <TextData>1 de Novembro de 2023</TextData>
                    </ContainerQueryData>

                    <ContainerQueryData>
                        <Label>Médico(a) da consulta</Label>
                        <TextData>Dra Alessandra</TextData>
                        <TextData>Demartologa, Esteticista</TextData>
                    </ContainerQueryData>

                    <ContainerQueryData>
                        <Label>Local da consulta</Label>
                        <TextData>São Paulo, SP</TextData>
                    </ContainerQueryData>

                    <ContainerQueryData
                        MarginB={MarginB}
                    >
                        <Label>Tipo da consulta</Label>
                        <TextData>Rotina</TextData>
                    </ContainerQueryData>

                    <Btn>
                        <TitleBtn>CONFIRMAR</TitleBtn>
                    </Btn>

                    <ContentAccountN>
                        <LinkAccount
                            onPress={() => setShowModalQuery(false)}>Cancelar</LinkAccount>
                    </ContentAccountN>
                </ModalContent>
            </PacientModal>

        </Modal>
    )
} 