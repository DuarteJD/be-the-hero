import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

export default Routes = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Incidents" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Incidents" component={Incidents} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}