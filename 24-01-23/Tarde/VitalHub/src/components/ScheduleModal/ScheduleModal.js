import { Modal } from "react-native"
import { Container } from "../Container/Style"
import { LabelModal, Title } from "../Title/Style"
import { ModalContent, PacientModal } from "../CancelationModal/Style"
import { BoxInput } from "../BoxInput/Style"
import { Input } from "../Input/Style"


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
                <ModalContent>
                    <Title>Agendar consulta</Title>

                    <BoxInput>
                        <LabelModal>Qual o nível da consulta</LabelModal>
                        <Input
                            placeholder='Informe a localização'
                        />
                    </BoxInput>

                </ModalContent>
            </PacientModal>
        </Modal>



    )
}