import CalendarComponent from "../../components/Calendar/CalendarComponent"
import { Container } from "../../components/Container/Style"
import { InputSelect } from "../../components/InputSelect/InputSelect"
import { Title } from "../../components/Title/Style"

export const SelectDate = ()=>{
    return(
        <Container>
            <Title>Selecionar Data</Title>

            <CalendarComponent/>
            <InputSelect/>
        </Container>
    )
}