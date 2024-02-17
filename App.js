
import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import AppNavigator from './src/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Welcome User!" component={AppNavigator} />
      {/* <AppNavigator/> */}
      </Stack.Navigator>
  
    {/* <View>
      <Text>hello i ma in te app</Text>
      
    </View> */}
    </NavigationContainer>
  );
}


export default App;
