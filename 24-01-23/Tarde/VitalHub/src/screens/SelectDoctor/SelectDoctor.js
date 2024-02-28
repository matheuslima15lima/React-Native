import { useState } from "react"
import { AppoimentCard } from "../../components/AppointmentCard/AppointmentCard"
import { ContainerCardList } from "../../components/AppointmentCard/Style"
import { CardSelectDoc } from "../../components/CardSelectDoc/CardSelectDoc"
import { Container } from "../../components/Container/Style"
import { ListComponent } from "../../components/List/List"
import { ImagePacient } from "../../components/Logo/Style"
import { Title, TitleBtn } from "../../components/Title/Style"
import { Btn } from "../../components/Button/Style"
import { ContentAccountN } from "../../components/ContentAccount/Style"
import { LinkAccount } from "../../components/Link/Style"

const Medicos = [
    { id: 1, nome: "Dra Alessandra" },
    { id: 2, nome: "Dr Kumushiro" },
    { id: 3, nome: "Dr Rodrigo Santos" },

]


export const SelectDoctor = () => {

    const [selectMedico, setSelectMedico] = useState(0);
    return (
        <Container>
            <Title>Selecionar Médico</Title>
            <ListComponent
                data={Medicos}
                keyExtractor={(item) => { item.id }}
                renderItem={({ item }) => (
                    <CardSelectDoc
                        onPress={() => setSelectMedico(item.id)}
                        clickButton={item.id == selectMedico}
                        nome={item.nome}
                    />
                )
                }
            />


            <Btn><TitleBtn>CONTINUAR</TitleBtn></Btn>

            <ContentAccountN><LinkAccount>Cancelar</LinkAccount></ContentAccountN>

        </Container>
    )
}