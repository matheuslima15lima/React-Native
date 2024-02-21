import { Modal } from "react-native"
import { Title, TitleBtn } from "../Title/Style"
import { LinkAccount } from "../Link/Style"
import { ContentAccount, ContentAccountN } from "../ContentAccount/Style"
import { ModalContent, ModalText, PacientModal } from "./Style"
import { ButtonModal } from "../Button/Style"

export const CancelationModal = ({
    visible,
    setShowModalCancel,
    ...rest
}) => {
    return (
        <Modal {...rest}
            visible={visible}
            transparent={true}
            animation="fade"
        >
            {/* Container */}
            <PacientModal>

                <ModalContent>
                    <Title>Cancelar consulta</Title>
                    <ModalText>
                        Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?
                    </ModalText>
                    <ButtonModal>
                        <TitleBtn>Confirmar</TitleBtn>
                    </ButtonModal>
                    <ContentAccountN>
                        <LinkAccount onPress={()=> setShowModalCancel(false)}>Cancelar</LinkAccount>
                    </ContentAccountN>
                        
                    
                        
                   

                </ModalContent>
            </PacientModal>
        </Modal>
    )
}