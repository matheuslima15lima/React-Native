import { StyleSheet, Text, View } from "react-native";


export const Jogos =({name, date}) =>{
    return(
        <View style = {styles.container}>
            <Text style = {styles.text1}>Nome: {name}</Text>
            <Text style = {styles.text2}>Lançamento: {date}</Text>
        </View>
    );
   
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        padding:10,
        margin:10,
        marginTop:100,
        borderRadius:5,

    },
    text1:{
        color:'white',
        fontFamily:'JetBrainsMono_100Thin',
        fontSize:15
    },
    text2:{
        fontFamily:'CuteFont_400Regular',
        fontSize:20
    }
})