import { Icon } from "react-native-element"
import MainPage from "./MainPage"
import Regiones from "./Regiones";
import Ciudades from "./Ciudades";
import Departamentos from "./Departamentos";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNavigator()


function BarraNavegacion(){
    return(
        <Tab.Navigator>
            <Tab.Screen 
            name = "Home"
            componente ={MainPage}
            option={{
                TabBarIcon:({size}) => (
                    <Icon name = "House" type = "font-awesome" color="#093e12" size ={size}/>

                )
            }}></Tab.Screen>

           <Tab.Screen
           name = "Regiones"
           componente ={Regiones}
           option={{
               TabBarIcon:({size}) => (
                   <Icon name = "globe" type = "font-awesome" color="#093e12" size ={size}/>
                ),
            }}/>

            <Tab.Screen
            name = "Ciudades"
            componente ={Ciudades}
            option={{
                TabBarIcon:({size}) => (
                    <Icon name = "city" type =  "font-awesome" color="#093e12" size ={size}/>
                )
            }}></Tab.Screen>

            <Tab.Screen
            name = "Departamentos"
            componente ={Departamentos}
            option={{
                TabBarIcon:({size}) => (
                    <Icon name = "map" type =  "font-awesome" color="#093e12" size ={size}/>
                )
            }}></Tab.Screen>
        </Tab.Navigator>
    )

}
export default BarraNavegacion