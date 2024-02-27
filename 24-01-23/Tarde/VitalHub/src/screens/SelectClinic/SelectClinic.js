import { CardClinic } from "../../components/CardClinic/CardClinic"
import { Container } from "../../components/Container/Style"
import { Title } from "../../components/Title/Style"


export const SelectClinic = (
    
    {
        margin=35,
    
    
    
    }
    
    
    )=>{
    const clinicas = [
        {
            id: 0,
            nome: 'Clinic'
        }
    ]
        
    return(
        <Container>
            <Title margin={margin}>Selecionar clínica</Title>

            <CardClinic 
                Nome={clinicas[0].nome}
            />
            <CardClinic />
            <CardClinic />
            <CardClinic />
            <CardClinic />
            <CardClinic />
            <CardClinic />
        </Container>

       
    )
}