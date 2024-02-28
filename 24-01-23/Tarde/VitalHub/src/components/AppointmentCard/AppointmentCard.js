import { DataUser, NomeUserBlack, UserAgeCard, UserDataCard, UserQuery } from "../Header/Style"
import { ImagePacient } from "../Logo/Style"
import { AntDesign } from '@expo/vector-icons';
import { TitleBtn } from "../Title/Style";
import { ButtonCard, ButtonText, ContainerCardList, ContentCard, ContentHour, ViewRow } from "./Style";
export const AppoimentCard = ({
    situacao = "pendente",
    onPressCancel,
    onPressAppoiment,
    onPressShowPro,
    fieldWidth=90,
    fieldPadding=10,
    gaps=10,
    MarginL=-70,
}) => {
    return (
        <ContainerCardList 
        fieldPadding={fieldPadding}
        fieldWidth={fieldWidth}
        >
            <ImagePacient
                source={require('../../../src/assets/images/Rectangle 414.png')}
            />

            <ContentCard
                gaps={gaps}
            >
                <DataUser>

                    <NomeUserBlack>Nicole Sarga</NomeUserBlack>

                    <UserDataCard>
                        <UserAgeCard>22 Anos</UserAgeCard>
                        <UserQuery>Rotina</UserQuery>
                    </UserDataCard>
                </DataUser>

                <ViewRow
                    
                >
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
                                <ButtonCard onPress={onPressCancel}>
                                    <ButtonText situacao={situacao}>Cancelar</ButtonText>
                                </ButtonCard>
                            ) :
                                (
                                    <ButtonCard onPress={onPressShowPro}>
                                        <ButtonText situacao={situacao}>Ver prontuario</ButtonText>
                                    </ButtonCard>
                                )
                    }

                </ViewRow>
            </ContentCard>
        </ContainerCardList>
    )
}