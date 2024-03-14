//react-native-maps
//reactnativemapsdirections
//expo-location

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { mapskey } from "../../utils/mapsKey";
// import FontAwesome from '@expo/vector-icons/fontAwesome'
import {
  requestForegroundPermissionsAsync, // Solicito a permissao de localizacao
  getCurrentPositionAsync, //Captura a localizacao atual
  watchPositionAsync, //Captura em tempos a localizacao
  LocationAccuracy,
} from "expo-location";

import MapViewDirections from "react-native-maps-directions";

import { useEffect, useState, useRef } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { LocalContainer } from "./Style";

export const MapComponent = () => {
  // const [dark,setDark] = useState(false)
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
        customMapStyle={dark}
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
          // customMapStyle={grayMapStyle}
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

// const grayMapStyle = [
//   {
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#E1E0E7",
//       },
//     ],
//   },
//   {
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         saturation: -5,
//       },
//       {
//         lightness: -5,
//       },
//     ],
//   },
//   {
//     elementType: "labels.icon",
//     stylers: [
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#FBFBFB",
//       },
//     ],
//   },
//   {
//     elementType: "labels.text.stroke",
//     stylers: [
//       {
//         color: "#33303E",
//       },
//     ],
//   },
//   {
//     featureType: "administrative",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#fbfbfb",
//       },
//     ],
//   },
//   {
//     featureType: "administrative.country",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#fbfbfb",
//       },
//     ],
//   },
//   {
//     featureType: "administrative.land_parcel",
//     stylers: [
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "administrative.locality",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#fbfbfb",
//       },
//     ],
//   },
//   {
//     featureType: "poi",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#fbfbfb",
//       },
//     ],
//   },
//   {
//     featureType: "poi.business",
//     stylers: [
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "poi.park",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#66DA9F",
//       },
//     ],
//   },
//   {
//     featureType: "poi.park",
//     elementType: "labels.text",
//     stylers: [
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "poi.park",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#fbfbfb",
//       },
//     ],
//   },
//   {
//     featureType: "poi.park",
//     elementType: "labels.text.stroke",
//     stylers: [
//       {
//         color: "#1B1B1B",
//       },
//     ],
//   },
//   {
//     featureType: "road",
//     stylers: [
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "road",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         color: "#C6C5CE",
//       },
//     ],
//   },
//   {
//     featureType: "road",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#FBFBFB",
//       },
//     ],
//   },
//   {
//     featureType: "road.arterial",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#ACABB7",
//       },
//     ],
//   },
//   {
//     featureType: "road.highway",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#8C8A97",
//       },
//     ],
//   },
//   {
//     featureType: "road.highway.controlled_access",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#8C8A97",
//       },
//     ],
//   },
//   {
//     featureType: "road.local",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#fbfbfb",
//       },
//     ],
//   },
//   {
//     featureType: "transit",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#fbfbfb",
//       },
//     ],
//   },
//   {
//     featureType: "water",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#8EA5D9",
//       },
//     ],
//   },
//   {
//     featureType: "water",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#fbfbfb",
//       },
//     ],
//   },
// ];

const styles = StyleSheet.create({
   
  
    map:{
        width:'100%',
        height:324
    }
  });
