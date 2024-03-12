//react-native-maps
//reactnativemapsdirections
//expo-location

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { mapskey } from "../../utils/mapsKey";

import {
  requestForegroundPermissionsAsync, // Solicito a permissao de localizacao
  getCurrentPositionAsync, //Captura a localizacao atual
  watchPositionAsync, //Captura em tempos a localizacao
  LocationAccuracy,
} from "expo-location";

import MapViewDirections from "react-native-maps-directions";

import { useEffect, useState, useRef } from "react";
import { ActivityIndicator, View } from "react-native";
import { LocalContainer } from "./Style";

export const MapComponent = () => {
  const mapReference = useRef(null);
  const [finalPosition, setPosition] = useState({
    latitude: -23.7141,
    longitude: -46.4137,
  });

  const [initialPosition, setInicialPosition] = useState(null);

  async function CapturarLocalizacao() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();

      setInicialPosition(currentPosition);

      console.log(initialPosition);
    }
  }

  async function RecarregarVisualizacaoMapa() {
    if (mapReference.current && initialPosition) {
      await mapReference.current.fitToCoordinates(
        [
          {
            latitude: initialPosition.coords.latitude,
            longitude: initialPosition.coords.longitude,
          },
          {
            latitude: finalPosition.latitude,
            longitude: finalPosition.longitude,
          },
        ],

        {
          edgePadding: { top: 60, right: 60, bottom: 60, left: 60 },
          animated: true,
        }
      );
    }
  }

  useEffect(() => {
    CapturarLocalizacao();

    watchPositionAsync(
      {
        accuracy: LocationAccuracy.High,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      async (response) => {
        await setInicialPosition(response);

        mapReference.current?.animateCamera({
          pitch: 60,
          center: response.coords,
        });
      }
    );
  }, [1000]);

  useEffect(() => {
    RecarregarVisualizacaoMapa();
  }, [initialPosition]);

  return (
    <>
      {initialPosition != null ? (
        <MapView
          ref={mapReference}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: initialPosition.coords.latitude,
            longitude: initialPosition.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          
        //   style={styles.map}
          customMapStyle={grayMapStyle}
        >
          {/* Criando um marcador no mapa */}
          <Marker
            coordinate={{
              latitude: initialPosition.coords.latitude,
              longitude: initialPosition.coords.longitude,
            }}
            title="Exemplo de local"
            description="Qualquer lugar do meu mapa"
            pinColor="blue"
          />

          {/* <Marker
            coordinate={{
              latitude: -23.7141,
              longitude: -46.4137,
            }}
            title="Exemplo de local"
            description="Qualquer lugar do meu mapa"
            pinColor="red"
          /> */}

          {/* <MapViewDirections
            origin={initialPosition.coords}
            destination={{
              latitude: -23.7141,
              longitude: -46.4137,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            apikey={mapskey}
            strokeWidth={5}
            strokeColor="#496BBA"
          /> */}
        </MapView>

      ) : (
        <>
          <Text>localizacao nao encontrada</Text>
          <ActivityIndicator />
        </>
      )}
    </>
  );
};

// const styles = StyleSheet.create({
   
  
//     map:{
//         width:'100%',
//         height:324
//     }
//   });
