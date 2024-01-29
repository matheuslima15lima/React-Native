const { View, Text, StyleSheet } = require("react-native")

const Person = ({name,age})=>{
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>Nome: {name}</Text>
            <Text style = {styles.text2}>Idade: {age}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        backgroundColor:'yellow',
        padding:10,
        margin:10,
        marginTop:100,
        borderRadius:5,

    },
    text:{
        fontFamily:'Poppins_300Light',
        fontSize:10
    },
    text2:{
        fontFamily:'CuteFont_400Regular',
        fontSize:20
    }
})


export default Person;