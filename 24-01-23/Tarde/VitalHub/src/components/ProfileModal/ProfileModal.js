import { Modal } from "react-native"
import { ButtonModal } from "../Button/Style"
import { ModalContent, ModalText, PacientModal } from "../CancelationModal/Style"
import { Title, TitleBtn } from "../Title/Style"
import { ContentAccountN } from "../ContentAccount/Style"
import { LinkAccount } from "../Link/Style"
import { ImageQuery } from "./Style"
import { UserQuery } from "../Header/Style"

export const ProfileModal = ({
    visible,
    setShowModalPro,
    ...rest
}) => {
    return (
        <Modal {...rest}
            visible={visible}
            transparent={true}
            animation="fade"
        >

            <PacientModal>
                <ModalContent>

                    <ImageQuery
                        source={require('../../../src/assets/images/Pacient.png')}
                    />

                    <Title>
                        Nicole Sarga
                    </Title>

                    <UserQuery>22 Anos</UserQuery>
                    <ButtonModal>
                        <TitleBtn>Inserir Prontuário</TitleBtn>
                    </ButtonModal>

                    <ContentAccountN>
                        <LinkAccount >Cancelar</LinkAccount>
                    </ContentAccountN>

                </ModalContent>
            </PacientModal>

        </Modal>
    )
}