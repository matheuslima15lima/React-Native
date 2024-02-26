import { CardClinic } from "../../components/CardClinic/CardClinic"
import { Container } from "../../components/Container/Style"
import { Title } from "../../components/Title/Style"


export const SelectClinic = ({margin=35})=>{
    return(
        <Container>
            <Title margin={margin}>Selecionar clínica</Title>

            <CardClinic />
        </Container>

       
    )
}