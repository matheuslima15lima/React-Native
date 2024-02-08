import { Container } from "../../components/Container/Style"
import { ContentAccountCenter, ContentAccountN, ContentProfille } from "../../components/ContentAccount/Style"
import { LinkProfile } from "../../components/Link/Style"
import { ProfileImg } from "../../components/Logo/Style"
import { Title } from "../../components/Title/Style"


export const Profile = () => {
    return (
        <Container>
            <ProfileImg
            source={require('../../../src/assets/images/Profile.png')}>
                

                <ContentProfille>
                    <Title>Richard Kosta</Title>
                    <LinkProfile>richard.kosta@gmail.com</LinkProfile>
                </ContentProfille>



            </ProfileImg>



        </Container>

    )
}