import { useState } from "react"
import { BtnAppoiment } from "../../components/Button/BtnAppoiment"
import CalendarHome from "../../components/CalendarHome/CalendarHome"
import { Container } from "../../components/Container/Style"
import { BoxUser, DataUser, FilterAppoinment, HeaderContainer, IconContainer, NomeUser, TextDefault } from "../../components/Header/Style"
import { ImageUser } from "../../components/Logo/Style"
import { ListComponent } from "../../components/List/List"
import { CancelationModal } from "../../components/CancelationModal/CancelationModal"
import { ProfileModal } from "../../components/ProfileModal/ProfileModal"
import { AppoimentCard } from "../../components/AppointmentCard/AppointmentCard"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ButtonSchedule } from "./Style"
import { FontAwesome6 } from '@expo/vector-icons';
import { CardDoc } from "../../components/AppointmentCard/CardDoc"
import { ScheduleModal } from "../../components/ScheduleModal/ScheduleModal"
import { DoctorModal } from "../../components/ProfileModal/DoctorModal"




const Consultas = [
    { id: 1, nome: "Carlos", situacao: "pendente" },
    { id: 2, nome: "Carlos", situacao: "realizado" },
    { id: 3, nome: "Carlos", situacao: "cancelado" },
    { id: 4, nome: "Carlos", situacao: "realizado" },
    { id: 5, nome: "Carlos", situacao: "cancelado" },
]
export const HomePacient = () => {


    const [showModalDocPro, setShowModalDocPro] = useState(false);


    const [statusLista, setStatusLista] = useState("pendente")


    const [showModalCancel, setShowModalCancel] = useState(false);

    const [showModalPro, setShowModalPro] = useState(false);

    const [showScheduleModal, setShowScheduleModal] = useState(false);

    const [showModalAppointment, setShowModalAppointment] = useState(false);
    return (
        <Container>
            <HeaderContainer>
                <BoxUser>
                    <ImageUser
                        source={require('../../../src/assets/images/RichardKosta.png')}
                    />

                    <DataUser>
                        <TextDefault>Bem-Vindo</TextDefault>
                        <NomeUser>Richard Kosta</NomeUser>
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
                        <CardDoc
                            situacao={item.situacao}
                            onPressCancel={() => setShowModalCancel(true)}
                            onPressAppoiment={() => setShowModalAppointment(true)}
                            onPressShowPro={() => setShowModalPro(true)}
                            onPressImage={()=> setShowModalDocPro(true)}
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

            <ButtonSchedule
                onPress={() => setShowScheduleModal(true)}
            >
                <FontAwesome6 name="stethoscope" size={26} color="white" />
            </ButtonSchedule>

            <ScheduleModal
                visible={showScheduleModal}
                setShowScheduleModal={setShowScheduleModal}
            />
            {/* modal ver prontuario */}
            <DoctorModal 
                visible={showModalDocPro}
                setShowModalDocPro={setShowModalDocPro}
            />
        </Container>

    )
}