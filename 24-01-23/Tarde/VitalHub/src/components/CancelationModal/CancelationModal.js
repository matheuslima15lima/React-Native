import { Modal } from "react-native"
import { Title, TitleBtn } from "../Title/Style"
import { LinkAccount } from "../Link/Style"
import { ContentAccount, ContentAccountN } from "../ContentAccount/Style"
import { ModalContent, ModalText, PacientModal } from "./Style"
import { ButtonModal } from "../Button/Style"

export const CancelationModal = ({
    visible,
    setShowModalCancel,
    BtnTop = 30,
    BtnBottom = 30,
    BtnWidth = 100,
    navigation,
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
                    <ButtonModal
                        BtnTop={BtnTop}
                        BtnBottom={BtnBottom}
                        BtnWidth={BtnWidth}
                        onPress={() => setShowModalCancel(false)}
                    >
                        <TitleBtn

                        >CONFIRMAR
                        </TitleBtn>
                    </ButtonModal>
                    <ContentAccountN>
                        <LinkAccount onPress={() => setShowModalCancel(false)}>Cancelar</LinkAccount>
                    </ContentAccountN>


                </ModalContent>
            </PacientModal>
        </Modal>
    )
}