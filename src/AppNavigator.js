import { View, Text, Linking } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import About from './About';
import List from './List';

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
   <Tab.Navigator>
    <Tab.Screen name='Home' component={Home} options={{headerShown : true}}/>
    <Tab.Screen name='About' component={About} options={{headerShown : true}}/>
    <Tab.Screen name='List' component={List} options={{headerShown : true}}/>
   </Tab.Navigator>
  )
}

export default AppNavigator