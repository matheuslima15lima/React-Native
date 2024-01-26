const { View, Text, StyleSheet } = require("react-native")

const Person = ({name,age})=>{
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>Nome: {name}</Text>
            <Text>Idade: {age}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        backgroundColor:'yellow',
        margin:10,
        borderRadius:5,

    },
    text:{
        fontSize:30
    }
})


export default Person;