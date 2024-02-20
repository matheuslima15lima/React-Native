
import { useState } from "react"
import { BtnQWhite, BtnQuery } from "../../components/Button/Style"
import CalendarHome from "../../components/CalendarHome/CalendarHome"
import { Container } from "../../components/Container/Style"
import { BoxUser, ContainerCard, DataUser, FilterAppoinment, HeaderContainer, NomeUser, NomeUserBlack, TextDefault, UserAgeCard, UserDataCard, UserNameCard, UserQuery } from "../../components/Header/Style"
import { ImageBell, ImagePacient, ImageUser } from "../../components/Logo/Style"
import { TitleQuery, TitleQuery2 } from "../../components/Title/Style"
import { BtnAppoiment } from "../../components/Button/BtnAppoiment"
import { ListComponent } from "../../components/List/List"
import { AppoimentCard } from "../../components/AppointmentCard/AppointmentCard"

const Consultas = [
    { id: 1, nome: "Carlos", situacao: "pendente" },
    { id: 2, nome: "Carlos", situacao: "realizado" },
    { id: 3, nome: "Carlos", situacao: "cancelado" },
    { id: 4, nome: "Carlos", situacao: "realizado" },
    { id: 5, nome: "Carlos", situacao: "cancelado" },
]
export const Home = () => {
    const [statusLista, setStatusLista] = useState("pendente")
    return (

        <Container>
            <HeaderContainer>
                <BoxUser>
                    <ImageUser
                        source={require('../../../src/assets/images/Medico.png')}
                    />

                    <DataUser>
                        <TextDefault>Bem-Vindo</TextDefault>
                        <NomeUser>Dr.Claudio</NomeUser>
                    </DataUser>
                </BoxUser>

                <DataUser>
                    <ImageBell
                        source={require('../../../src/assets/images/Group-94.png')}
                    />


                </DataUser>

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
                        situacao={item.situacao}
                        />
                    )
                }


            />

            {/* <ContainerCard>
                <ImagePacient
                    source={require('../../../src/assets/images/Rectangle 414.png')}
                />
                <DataUser>
                    <NomeUserBlack>Niccole Sarga</NomeUserBlack>
                    <UserDataCard>
                            <UserAgeCard>22 Anos</UserAgeCard>

                            <UserQuery>Rotina</UserQuery>
                    </UserDataCard>
                </DataUser>

               <ContentHour><DataUser><UserAgeCard>14:00</UserAgeCard></DataUser></ContentHour>
            </ContainerCard> */}

        </Container>
    )
}