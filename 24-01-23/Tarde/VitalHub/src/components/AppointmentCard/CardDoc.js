import { DataUser, NomeUserBlack, UserAgeCard, UserDataCard, UserQuery } from "../Header/Style"
import { ImagePacient } from "../Logo/Style"
import { AntDesign } from '@expo/vector-icons';
import { TitleBtn } from "../Title/Style";
import { ButtonCard, ButtonText, ContainerCardList, ContentCard, ContentHour, ViewRow } from "./Style";
export const CardDoc = ({
    situacao = "pendente",
    onPressCancel,
    onPressAppoiment,
    onPressShowPro,
    onPressSchedule,
    fieldWidth = 90,
    fieldPadding = 10,
    gaps=10,
    MarginL= -10,
}) => {
    return (
        <ContainerCardList
            fieldPadding={fieldPadding}
            fieldWidth={fieldWidth}>
            <ImagePacient
                source={require('../../../src/assets/images/Dr.png')}
            />

            <ContentCard
                gaps={gaps}
            >
                <DataUser>

                    <NomeUserBlack>Dr. Claudio</NomeUserBlack>

                    <UserDataCard>
                        <UserAgeCard>22 Anos</UserAgeCard>
                        <UserQuery>Rotina</UserQuery>
                    </UserDataCard>
                </DataUser>

                <ViewRow
                
                    MarginL={MarginL}
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