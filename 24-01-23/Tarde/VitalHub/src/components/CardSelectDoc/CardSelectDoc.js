import { ContainerCardList } from '../AppointmentCard/Style'
import { DataUser, NomeUserBlack, UserAgeCard, UserDataCard, UserQuery } from '../Header/Style'
import { ImagePacient } from '../Logo/Style'



export const CardSelectDoc = ({

    fieldWidth = 90,
    fieldPadding = 10,
    nome,
    onPress,
    clickButton
}) => {
    return (
        <ContainerCardList
            fieldPadding={fieldPadding}
            fieldWidth={fieldWidth}
            onPress={onPress}
            clickButton={clickButton}
        >
            <ImagePacient
                source={require('../../../src/assets/images/Dr.png')}
            />


            <DataUser>

                <NomeUserBlack>{nome}</NomeUserBlack>

                <UserDataCard>
                    
                <UserQuery>Cirurgião, cardiologista</UserQuery>
                    
                    
                </UserDataCard>
            </DataUser>
        </ContainerCardList>
    )

}