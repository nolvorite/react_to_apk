import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { GuestHomeScreen } from '../screens/GuestHomeScreen';
import { AllLinks } from '../types';

const BottomTab = createBottomTabNavigator<AllLinks>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <></>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const UniversalStack = createStackNavigator<AllLinks>();

function UniversalNavigator() {
  return (
    <UniversalStack.Navigator>
      <UniversalStack.Screen
        name="GuestHome"
        component={GuestHomeScreen.GuestHome}
        options={{ headerTitle: 'Guest Home' }}
      />y
    </UniversalStack.Navigator>
  );
}
