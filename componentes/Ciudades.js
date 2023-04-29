import react, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { getCityCol } from '../api/servicios';

const Ciudades = () => {
        const [ciudadesColombia, setCityCol] = useState ([]);

        useEffect(() => {
            async function fetchData(){
                const ciudadesColombia = await getCityCol();
                setCityCol(ciudadesColombia);
            }
            fetchData();
        },[]);

    return(
        <View style = {style.container}>

        <Text style = {style.title}> CIUDADES DE COLOMBIA </Text>
        {ciudadesColombia.map(City => (
          <text key = {City.id} style = {styles.text}>{City.name}</text>
        ))}
        
       </View>
    );
  };  
  
  const styles = StyleSheet.create({
   

    container :{
        flex: 1,
        alignitems:'center',
        justifyContent:'center',
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

  });
  export default Ciudades;