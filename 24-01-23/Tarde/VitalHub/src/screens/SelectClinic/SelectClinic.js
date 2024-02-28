import { useState } from "react"
import { CardClinic } from "../../components/CardClinic/CardClinic"
import { Container } from "../../components/Container/Style"
import { Title, TitleBtn } from "../../components/Title/Style"
import { ListComponent } from "../../components/List/List"
import { ContentAccountN } from "../../components/ContentAccount/Style"

const clinicas = [
    {
        id: 0,
        nome: 'Clínica Natureh'
    },
    {
        id: 1,
        nome: 'Clinic'
    },
    {
        id: 2,
        nome: 'Clinic'
    },
    {
        id: 3,
        nome: 'Clinic'
    }
]
export const SelectClinic = (
    
    {
        margin=35,
    
    
    
    }
    
    
    )=>{
 

    const [statusLista, setStatusLista] = useState("bla");
        
    return(
        <Container>
            <Title margin={margin}>Selecionar clínica</Title>

            <ListComponent
                data={clinicas}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) =>
                     (
                        <CardClinic
                            nome={item.nome}
                           
                        />
                    )
                }
                showsVerticalScrollIndicator={false}

            />

            <Btn><TitleBtn>CONTINUAR</TitleBtn></Btn>

            <ContentAccountN><LinkAccount>Cancelar</LinkAccount></ContentAccountN>
        </Container>

       
    )
}