import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import OnBoarding from './Screens/OnBoarding';
import { StackParamList } from './Screens/router';
import Detail from './Screens/Detail';
import Order from './Screens/Order';

const Stack = createNativeStackNavigator<StackParamList>();

const App = ()  => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='OnBoarding'>
        <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }}/>
        <Stack.Screen name="Order" component={Order} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
