import { useState } from "react"
import { BtnAppoiment } from "../../components/Button/BtnAppoiment"
import CalendarHome from "../../components/CalendarHome/CalendarHome"
import { Container } from "../../components/Container/Style"
import { BoxUser, DataUser, FilterAppoinment, HeaderContainer, NomeUser, TextDefault } from "../../components/Header/Style"
import { ImageBell, ImageUser } from "../../components/Logo/Style"
import { ListComponent } from "../../components/List/List"
import { CancelationModal } from "../../components/CancelationModal/CancelationModal"
import { ProfileModal } from "../../components/ProfileModal/ProfileModal"
import { AppoimentCard } from "../../components/AppointmentCard/AppointmentCard"




const Consultas = [
    { id: 1, nome: "Carlos", situacao: "pendente" },
    { id: 2, nome: "Carlos", situacao: "realizado" },
    { id: 3, nome: "Carlos", situacao: "cancelado" },
    { id: 4, nome: "Carlos", situacao: "realizado" },
    { id: 5, nome: "Carlos", situacao: "cancelado" },
]
export const HomePacient = ()=>{

    const [statusLista, setStatusLista] = useState("pendente")


    const [showModalCancel, setShowModalCancel] = useState(false);

    const [showModalPro, setShowModalPro] = useState(false);

    const [showModalAppointment,setShowModalAppointment] = useState(false);
    return(
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
                    onPressCancel={()=>setShowModalCancel(true)}
                    onPressAppoiment={()=> setShowModalAppointment(true)}
                    onPressShowPro={()=>setShowModalPro(true)}
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
            /> 
        {/* modal ver prontuario */}
    </Container>

    )
}