import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { GuestTemplates } from '../components/GuestHome';
import {GuestHomeScreen} from '../screens/GuestHomeScreen';
import {UserHomeScreen} from '../screens/UserHomeScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { AllLinks } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<AllLinks>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="GuestHome">
      <Stack.Screen name="GuestHome" component={GuestHomeScreen.GuestHome} options={{ title: 'Guest Home' }} />
      <Stack.Screen name="LogIn" component={GuestHomeScreen.LogIn} options={{ title: 'Log In' }} />
      <Stack.Screen name="SignUp" component={GuestHomeScreen.Signup} options={{ title: 'Sign Up' }} />
      <Stack.Screen name="UserHome" component={UserHomeScreen.UserHome} options={{ title: 'User Home' }} />
      <Stack.Screen name="Help" component={UserHomeScreen.Help} options={{ title: 'Help' }} />
      <Stack.Screen name="Cart" component={UserHomeScreen.Cart} options={{ title: 'Cart' }} />
      <Stack.Screen name="Checkout" component={UserHomeScreen.Checkout} options={{ title: 'Checkout' }} />
      <Stack.Screen name="Delivery" component={UserHomeScreen.Delivery} options={{ title: 'Delivery' }} />
      <Stack.Screen name="DriverOrders" component={UserHomeScreen.DriverOrders} options={{ title: 'Driver Orders' }} />
      <Stack.Screen name="Payment" component={UserHomeScreen.Payment} options={{ title: 'Payment' }} />
    </Stack.Navigator>
  );
}
