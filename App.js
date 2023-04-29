
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet} from 'react-native';
import BarraNavegacion from './componentes/BarraNavegacion';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <BarraNavegacion/>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
