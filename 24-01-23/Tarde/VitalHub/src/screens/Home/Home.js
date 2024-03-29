
import { useState } from "react"
import { BtnQWhite, BtnQuery } from "../../components/Button/Style"
import CalendarHome from "../../components/CalendarHome/CalendarHome"
import { Container } from "../../components/Container/Style"
import { BoxUser, ContainerCard, DataUser, FilterAppoinment, HeaderContainer, IconContainer, NomeUser, NomeUserBlack, TextDefault, UserAgeCard, UserDataCard, UserNameCard, UserQuery } from "../../components/Header/Style"
import { BtnImage, ImagePacient, ImageUser } from "../../components/Logo/Style"
import { TitleQuery, TitleQuery2 } from "../../components/Title/Style"
import { BtnAppoiment } from "../../components/Button/BtnAppoiment"
import { ListComponent } from "../../components/List/List"
import { AppoimentCard } from "../../components/AppointmentCard/AppointmentCard"
import { CancelationModal } from "../../components/CancelationModal/CancelationModal"
import { ProfileModal } from "../../components/ProfileModal/ProfileModal"
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Consultas = [
    { id: 1, nome: "Carlos", situacao: "pendente" },
    { id: 2, nome: "Carlos", situacao: "realizado" },
    { id: 3, nome: "Carlos", situacao: "cancelado" },
    { id: 4, nome: "Carlos", situacao: "realizado" },
    { id: 5, nome: "Carlos", situacao: "cancelado" },
]
export const Home = ({navigation}) => {


    //state para o estado da lista(cards)
    const [statusLista, setStatusLista] = useState("pendente")

    //state para a exibicao dos modais

    const [showModalCancel, setShowModalCancel] = useState(false);

    const [showModalPro, setShowModalPro] = useState(false);

    const [showModalAppointment, setShowModalAppointment] = useState(false);
    return (

        <Container>
            <HeaderContainer>
                <BoxUser
                        
                >   
                    <BtnImage onPress={()=> navigation.replace("PerfilM")}>
                    <ImageUser
                        source={require('../../../src/assets/images/Medico.png')}
                    />
                    </BtnImage>

                    <DataUser>
                        <TextDefault>Bem-Vindo</TextDefault>
                        <NomeUser>Dr.Claudio</NomeUser>
                    </DataUser>
                </BoxUser>

                <IconContainer>

                    <MaterialCommunityIcons name="bell" size={24} color="white" />

                </IconContainer>

            </HeaderContainer>

            <CalendarHome />

            <FilterAppoinment>
                <BtnAppoiment
                    textButton={"Agendadas"}
                    clickButton={statusLista === "pendente"}
                    onPress={() => setStatusLista("pendente")}
                />
                <BtnAppoiment
                    textButton={"Realizadas"}
                    clickButton={statusLista === "realizado"}
                    onPress={() => setStatusLista("realizado")}
                />
                <BtnAppoiment
                    textButton={"Canceladas"}
                    clickButton={statusLista === "cancelado"}
                    onPress={() => setStatusLista("cancelado")}
                />
            </FilterAppoinment>

            <ListComponent
                data={Consultas}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) =>
                    statusLista == item.situacao && (
                        <AppoimentCard
                            navigation={navigation}
                            situacao={item.situacao}
                            onPressCancel={() => setShowModalCancel(true)}
                            onPressAppoiment={() => setShowModalAppointment(true)}
                            onPressShowPro={() => setShowModalPro(true)}
                        />
                    )
                }
                showsVerticalScrollIndicator={false}

            />
            {/* modal cancelar */}
            <CancelationModal
                visible={showModalCancel}
                setShowModalCancel={setShowModalCancel}
            />

            <ProfileModal
                visible={showModalPro}
                setShowModalPro={setShowModalPro}
                navigation={navigation}
            />
            {/* modal ver prontuario */}
        </Container>
    )
}