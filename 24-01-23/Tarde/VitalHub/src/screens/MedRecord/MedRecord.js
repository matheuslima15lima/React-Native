import { Container } from "../../components/Container/Style"
import { ProfileImg } from "../../components/Logo/Style"
import { Title } from "../../components/Title/Style"


export const MedicalRecord = ()=>{
    return(
        <Container>

        
        <ProfileImg
        source={require('../../../src/assets/images/Profile.png')}
        >

        </ProfileImg>

        <Title>Richard Kosta</Title>
        </Container>
    )
}