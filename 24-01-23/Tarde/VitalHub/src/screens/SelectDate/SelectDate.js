import { useState } from "react"

import { Btn } from "../../components/Button/Style"
import {CalendarComponent} from "../../components/Calendar/CalendarComponent"
import { Container } from "../../components/Container/Style"
import { ContentAccountN } from "../../components/ContentAccount/Style"
import { InputSelect } from "../../components/InputSelect/InputSelect"
import { LinkAccount } from "../../components/Link/Style"
import { Subtitle, Title, TitleBtn } from "../../components/Title/Style"
import { QueryModal } from "../../components/QueryModal/QueryModal"

export const SelectDate = ({
    navigation,
    align='flex-start',
    Top=10,
    MbButton= 20,
}) => {

    const [showModalQuery, setShowModalQuery] = useState(false);
    return (
        <Container>
            <Title>Selecionar Data</Title>

            <CalendarComponent />
            
                <Subtitle
                align={align}
                >Selecione um valor</Subtitle>
            

            <InputSelect
                
            />

            <Btn

                MbButton={MbButton}
                onPress={()=> setShowModalQuery(true)}
                Top={Top}
            >
                <TitleBtn>CONFIRMAR</TitleBtn>
            </Btn>

            <ContentAccountN>
            <LinkAccount>Cancelar</LinkAccount>
            </ContentAccountN>

            <QueryModal
                navigation={navigation}
                visible={showModalQuery}
                setShowModalQuery={setShowModalQuery}

            />
        </Container>
    )
}