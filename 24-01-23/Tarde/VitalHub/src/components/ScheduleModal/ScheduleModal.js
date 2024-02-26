import { Modal } from "react-native"
import { Container } from "../Container/Style"
import { Label, LabelModal, Title, TitleBtn } from "../Title/Style"
import { ModalContent, ModalContentQuery, PacientModal } from "../CancelationModal/Style"
import { BoxInput } from "../BoxInput/Style"
import { Input } from "../Input/Style"
import { ButtonTypeQuery, ContainerButtonQuery, TextButtonQuery } from "./Style"
import { FilterAppoinment } from "../Header/Style"
import { Btn, BtnModal } from "../Button/Style"
import { LinkAccount } from "../Link/Style"
import { ContentAccountN } from "../ContentAccount/Style"


export const ScheduleModal = ({
    visible,
    setShowScheduleModal,
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
                <ModalContentQuery>
                    <Title>Agendar consulta</Title>

                    <BoxInput>
                        <LabelModal>Qual o nível da consulta</LabelModal>
                    </BoxInput>
                    <ContainerButtonQuery>
                        <ButtonTypeQuery><TextButtonQuery>Rotina</TextButtonQuery></ButtonTypeQuery>
                        <ButtonTypeQuery><TextButtonQuery>Exame</TextButtonQuery></ButtonTypeQuery>
                        <ButtonTypeQuery><TextButtonQuery>Urgência</TextButtonQuery></ButtonTypeQuery>
                    </ContainerButtonQuery>

                    <BoxInput>
                        <LabelModal>Informe a localização desejada</LabelModal>
                        <Input
                            placeholder="Informe a localização"
                        />
                    </BoxInput>

                    <BtnModal>
                        <TitleBtn>CONTINUAR</TitleBtn>
                    </BtnModal>
                    <ContentAccountN>
                        <LinkAccount onPress={()=>setShowScheduleModal(false)}>Cancelar</LinkAccount>
                    </ContentAccountN>

                </ModalContentQuery>
            </PacientModal>
        </Modal>



    )
}