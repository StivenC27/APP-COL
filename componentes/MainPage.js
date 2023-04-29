import { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { Icon} from "react-native-element"
import { getColInfo } from "../api/servicios"



const MainPage = (navigation) => {
    const [colInfo, setColInfo] = useState({})

    useEffect(() =>{
        async function fetchData(){
            const colData = await getColInfo()
            setColInfo(colData);
        }
        fetchData();
        navigation.setOptions({
            headerRight: () =>{
                return (
                    <Icon name='rowing' onPress={() => navigation.navigate('')}/>
                )
            }
        })
    })


    return (
        <View style ={styles.container}>
            <Text style ={styles.title}> INFORMACIÓN ACERCA DE: {colInfo.name}</Text>
            <Text style ={styles.text}> REGIONES: {colInfo.description}</Text>
            <Text style ={styles.text}> DESCRIPCIÓN: {colInfo.description}</Text>
            <Text style ={styles.text}> CAPITAL: {colInfo.stateCapital}</Text>
            <Text style ={styles.text}> SUPERFICIE: {colInfo.surface}</Text>
            <Text style ={styles.text}> POBLACIÓN: {colInfo.population}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container :{
        flex: 1,
        alignitems:'center',
        justifyContent:'center',
        backgroundColor: "black"
    },

    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },

    text:{
        fontSize: 16,
        marginVerical: 5,
    }


})


export default MainPage