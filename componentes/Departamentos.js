import react, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { getDeptCol } from '../api/servicios';

const Departamentos = () => {
        const [departamentosColombia, setDeptCol] = useState ([]);

        useEffect(() => {
            async function fetchData(){
                const departamentosColombia = await getDeptCol();
                setDeptCol(departamentosColombia);
            }
            fetchData();
        },[]);

    return(
        <View style = {style.container}>

        <Text style = {style.title}> DEPARTAMENTOS DE COLOMBIA </Text>
        {departamentosColombia.map(Department => (
          <text key = {Department.id} style = {styles.text}>{Department.name}</text>
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
  export default Departamentos;