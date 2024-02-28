import { ContainerCardList, ContentCard, ContentHour, ViewRow } from "../AppointmentCard/Style"
import { DataUser, NomeUserBlack, UserQuery } from "../Header/Style"
import { AntDesign } from '@expo/vector-icons';
import { TextAssessment, ViewCardClinic, ViewRowStar } from "./Style";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const CardClinic = (
    {

        fieldWidth = 90,
        fieldPadding = 5,
        direction = 'row',
        gaps = 100,
        MarginL = 0,
        situacao = 'pendente',
        PaddingB = 10,
        MarginR = 20,
        nome,
    }
) => {
    return (
        <ContainerCardList
            fieldWidth={fieldWidth}
            fieldPadding={fieldPadding}

        >

            <ContentCard
                PaddingB={PaddingB}
                PaddingT={PaddingB}
                gaps={gaps}
                direction={direction}

            >
                <DataUser
                    MarginL={MarginL}
                >
                    <NomeUserBlack>{nome}</NomeUserBlack>
                    <UserQuery>São Paulo, SP</UserQuery>
                </DataUser>
                <ViewCardClinic

                >
                    <ViewRowStar
                        MarginR={MarginR}
                    >
                        <AntDesign name="star" size={24} color="#F9A620" />
                        <TextAssessment>4,5</TextAssessment>
                    </ViewRowStar>


                    <ContentHour situacao={situacao}>
                        <MaterialCommunityIcons name="calendar-outline" size={18} color="#49B3BA" />
                        <UserQuery
                            situacao={situacao}
                        >Seg-Sex</UserQuery>
                    </ContentHour>



                </ViewCardClinic>


            </ContentCard>

        </ContainerCardList>
    )

}