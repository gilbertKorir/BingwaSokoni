import React, {useCallback} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Offers, Others, Blaze, Minutes, DataBundles} from './screens';
import * as SplashScreen from "expo-splash-screen";

const Stack = createStackNavigator();
export default function App() {
  const onLayoutRootView = useCallback(async ()=>{
      await SplashScreen.hideAsync();
  },[]);

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Offers" component={Offers} options={{ headerShown: false }}/>
        <Stack.Screen name="Data Offers" component={DataBundles} options={{ headerShown: true }}/>
        <Stack.Screen name="Minutes Deals" component={Minutes} options={{ headerShown: true }}/>
        <Stack.Screen name="Others Deals" component={Others} options={{ headerShown: true }}/>
        <Stack.Screen name="Blaze Bundles" component={Blaze} options={{ headerShown: true }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


