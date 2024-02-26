import { ContainerCardList, ContentCard, ViewRow } from "../AppointmentCard/Style"
import { DataUser, NomeUserBlack, UserQuery } from "../Header/Style"
import { AntDesign } from '@expo/vector-icons';

export const CardClinic = (
    {
        fieldWidth = 90,
        fieldPadding = 5,
        direction = 'row',
        gaps=100
    }
) => {
    return (
        <ContainerCardList
            fieldWidth={fieldWidth}
            fieldPadding={fieldPadding}

        >

            <ContentCard
                gaps={gaps}
                direction={direction}
                
            >
                <DataUser>
                    <NomeUserBlack>Clínica Natureh</NomeUserBlack>
                    <UserQuery>São Paulo, SP</UserQuery>
                </DataUser>
                <ViewRow>
                    <AntDesign name="star" size={24} color="#F9A620" />
                </ViewRow>

            </ContentCard>

        </ContainerCardList>
    )

}