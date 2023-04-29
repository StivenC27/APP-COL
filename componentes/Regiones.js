import react, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { getRegionesCol } from '../api/servicios';

const Regiones = () => {
        const [regionesColombia, setRegionesCol] = useState ([]);

        useEffect(() => {
            async function fetchData(){
                const regionesColombia = await getRegionesCol();
                setRegionesCol(regionesColombia);
            }
            fetchData();
        },[]);

    return(
        <View style = {style.container}>

        <Text style = {style.title}> REGIONES DE COLOMBIA </Text>
        {regionesColombia.map(region => (
          <text key = {region.id} style = {styles.text}>{region.name}</text>
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


export default Regiones;





