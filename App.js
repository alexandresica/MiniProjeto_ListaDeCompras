import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen'
import AddItemScreen from './src/screens/AddItemScreen'

const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Adicionar" component={AddItemScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    );
}