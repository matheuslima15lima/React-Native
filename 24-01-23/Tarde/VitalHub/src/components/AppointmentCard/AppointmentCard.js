import { DataUser, NomeUserBlack, UserAgeCard, UserDataCard, UserQuery } from "../Header/Style"
import { ImagePacient } from "../Logo/Style"
import { AntDesign } from '@expo/vector-icons';
import { TitleBtn } from "../Title/Style";
import { ButtonCard, ButtonText, ContainerCardList, ContentCard, ContentHour, ViewRow } from "./Style";
export const AppoimentCard = ({
    situacao = "pendente",
    onPressCancel,
    onPressAppoiment
}) => {
    return (
        <ContainerCardList>
            <ImagePacient
                source={require('../../../src/assets/images/Rectangle 414.png')}
            />

            <ContentCard>
                <DataUser>

                    <NomeUserBlack>Nicole Sarga</NomeUserBlack>

                    <UserDataCard>
                        <UserAgeCard>22 Anos</UserAgeCard>
                        <UserQuery>Rotina</UserQuery>
                    </UserDataCard>
                </DataUser>

                <ViewRow>
                    <ContentHour situacao={situacao}>
                        <AntDesign name="clockcircle" size={24} color={situacao == "pendente" ? "#49B3BA" : "#8C8A97"} />

                        <UserQuery situacao={situacao}>14:00</UserQuery>
                    </ContentHour>

                    {/* Valida e mostra o tipo de botao conforme a situacao da consulta */}
                    {
                        situacao == 'cancelado' ? (
                            <></>
                        ) :
                            situacao == "pendente" ? (
                                <ButtonCard>
                                    <ButtonText situacao={situacao}>Cancelar</ButtonText>
                                </ButtonCard>
                            ) :
                                (
                                    <ButtonCard>
                                        <ButtonText situacao={situacao}>Ver prontuario</ButtonText>
                                    </ButtonCard>
                                )
                    }

                </ViewRow>
            </ContentCard>
        </ContainerCardList>
    )
}