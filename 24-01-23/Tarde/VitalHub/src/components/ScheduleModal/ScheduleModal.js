import { Modal } from "react-native"
import { Container } from "../Container/Style"
import { LabelModal, Title } from "../Title/Style"
import { ModalContent, ModalContentQuery, PacientModal } from "../CancelationModal/Style"
import { BoxInput } from "../BoxInput/Style"
import { Input } from "../Input/Style"
import { ButtonTypeQuery, ContainerButtonQuery, TextButtonQuery } from "./Style"
import { FilterAppoinment } from "../Header/Style"


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

                </ModalContentQuery>
            </PacientModal>
        </Modal>



    )
}