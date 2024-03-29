import { StyleSheet, View } from "react-native";
import RNPickerSelect from 'react-native-picker-select'

import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { MaterialIcons } from '@expo/vector-icons';

import { AntDesign } from '@expo/vector-icons';
import CalendarComponent from "../Calendar/CalendarComponent";


export const InputSelect = () => {
  const pickerStyles = {
    inputIOS: style.pickerInput,
    inputAndroid: style.pickerInput,
    placeholder: { color: '#34898F', },
  };
  const placeholder = {
    label: 'Selecionar horário',
    value: null,
    color: '#34898F',
  };

  return (
    <View style={{ width: '90%', flex:1 ,}}>

        
      <RNPickerSelect
        useNativeAndroidPickerStyle={false}
        style={style}
        Icon={() => {
          return <MaterialIcons name="keyboard-arrow-down" size={22} color="#34898F" />
        }}
        placeholder={{
          label: 'Selecione um valor',
          value: null,
          color: '#34898F'
        }}
        onValueChange={(value) => console.log(value)}
        items={[
          { label: "JavaScript", value: "JavaScript" },
          { label: "TypeScript", value: "TypeScript" },
          { label: "Python", value: "Python" },
          { label: "Java", value: "Java" },
          { label: "C++", value: "C++" },
          { label: "C", value: "C" },
          { label: "C#", value: "C#" },
        ]}
      />
    </View>
  )
}

const style = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: '#60BFC5',
    borderRadius: 5,
    color: '#34898F',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'MontserratAlternates_600SemiBold'
  },
  inputAndroid: {
    marginBottom: "30px",
    fontSize: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: '#60BFC5',
    borderRadius: 5,
    color: '#34898F',
    alignItems: 'center',
    justifyContent: 'center',

    fontFamily: 'MontserratAlternates_600SemiBold'
  },
  iconContainer: {
    // top: '25%',
    marginRight: 10
  },
  placeholder: {
    color: '#34898F',
  }
})
