import { TouchableOpacity } from "react-native";
import {
  ButtonCancel,
  ButtonCard,
  ButtonText,
  ViewRow,
  ViewRow2,
  ViewRowPhoto,
} from "../../components/AppointmentCard/Style";
import { BoxInput } from "../../components/BoxInput/Style";
import { Container, Scrool } from "../../components/Container/Style";
import { ContentAccountN } from "../../components/ContentAccount/Style";
import { TextModalEmail, UserQuery } from "../../components/Header/Style";
import { LinkAccount } from "../../components/Link/Style";
import {
  Label,
  TextProfile,
  Title,
  TitleBtn,
} from "../../components/Title/Style";
import { ImageLocalQuery } from "../SeeLocalQuery/Style";
import {
  ButtonPhoto,
  ContainerTextInput,
  ImagePhoto,
  InputGrayLarge,
  Linha,
  TextPhotoNull,
} from "./Style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { CameraComponent } from "../../components/CameraComponent/CameraComponent";

export const ViewPrescription = ({
  navigation,
  WidthImage = 100,
  HeightImage = 280,
  marginTop = 20,
  WidthInput = 100,
  AlignView = "center",
  Justify = "center",
  marginR = 23,
  InputGrayH = 121,
  InputGrayW = 100,
  WidthText = 80,
  MarginL = 20,
  Align = "center",
  multiline,
  numberOfLines,
  // MarginR=50,
}) => {
  const [showPhoto, setShowPhoto] = useState(null);
  const [ShowModalPhoto, setShowModalPhoto] = useState(false);
  return (
    //scrolls sao sempre fora do container pricipal para nao quebrar o conteudo
    <Scrool>
      <Container>
        <ImageLocalQuery
          WidthImage={WidthImage}
          HeightImage={HeightImage}
          source={require("../../../src/assets/images/DrCl.png")}
        />

        <Title marginTop={marginTop}>Dr. Claudio</Title>

        <ViewRow2 AlignView={AlignView} Justify={Justify}>
          <UserQuery marginR={marginR}>Cliníco geral</UserQuery>
          <TextModalEmail>CRM-15286</TextModalEmail>
        </ViewRow2>

        <BoxInput>
          <Label>Descrição da consulta</Label>
          <InputGrayLarge
            InputGrayH={InputGrayH}
            InputGrayW={InputGrayW}
            placeholder="O paciente possuí uma infecção no
                    ouvido. Necessário repouse de 2 dias
                    e acompanhamento médico constante"
          />
        </BoxInput>
        <BoxInput>
          <Label>Diagnóstico do paciente</Label>
          <InputGrayLarge
            InputGrayH={InputGrayH}
            InputGrayW={InputGrayW}
            placeholder="Infecção no ouvido"
          />
        </BoxInput>
        <BoxInput>
          <Label>Prescrição médica</Label>
          <InputGrayLarge
            InputGrayH={InputGrayH}
            InputGrayW={InputGrayW}
            placeholder="Medicamento: Advil
                        Dosagem: 50 mg
                        Frequência: 3 vezes ao dia
                        Duração: 3 dias"
          />
        </BoxInput>

        <TouchableOpacity style={{ width: "100%", alignItems: "center" }}>
          <BoxInput>
            <Label>Exames médicos</Label>

            {showPhoto == null ? (
              <ContainerTextInput>
                <MaterialCommunityIcons
                  name="file-alert-outline"
                  size={24}
                  color="#4E4B59"
                />
                <TextPhotoNull>Nenhuma foto informada</TextPhotoNull>
              </ContainerTextInput>
            ) : (
              <ContainerTextInput>
                <ImagePhoto
                        showPhoto
                />
                
              </ContainerTextInput>
            )}
          </BoxInput>
        </TouchableOpacity>
        <ViewRowPhoto
          Align={Align}
          MarginL={MarginL}
          // MarginR={MarginR}
        >
          <ButtonPhoto onPress={() => setShowModalPhoto(true)}>
            <MaterialIcons name="add-photo-alternate" size={24} color="#fff" />
            <TitleBtn>Enviar</TitleBtn>
          </ButtonPhoto>

          <ButtonCard>
            <ButtonCancel>Cancelar</ButtonCancel>
          </ButtonCard>
        </ViewRowPhoto>

        <Linha />

        <BoxInput>
          <Label>Prescrição médica</Label>
          <InputGrayLarge
            InputGrayH={InputGrayH}
            InputGrayW={InputGrayW}
            placeholder="Resultado do exame de sangue : tudo normal"
          />
        </BoxInput>

        <ContentAccountN>
          <LinkAccount>Voltar</LinkAccount>
        </ContentAccountN>

        <CameraComponent
          navigation={navigation}
          visible={ShowModalPhoto}
          setShowModalPhoto={setShowModalPhoto}

          setShowPhoto={setShowPhoto}
        />
      </Container>
    </Scrool>
  );
};
