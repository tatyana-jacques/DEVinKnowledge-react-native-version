import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import List from "./src/List/List"
import Registration from "./src/Registration/Registration"
import Video from "./src/Video/Video"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen 
        name = "List" 
        component = {List}
        options = {{
          headerShown: false
        }}
        />
        <Stack.Screen 
        name = "Registration" 
        component = {Registration}
        options = {{
          headerShown: false
        }}
        />
        <Stack.Screen 
        name = "Video" 
        component = {Video}
        options = {{
          headerShown: false
        }}
        />


      </Stack.Navigator>
    </NavigationContainer>
   
  )
}

