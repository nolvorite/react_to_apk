import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import { TouchableOpacity, Image, Picker, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { styles } from './DefaultStyles';
import { Text, View } from './Themed';
import { StackNavigationProp } from '@react-navigation/stack';
import { AllLinks } from '../types';

var users = [
    {
      username: 'hans_marcon', 
      password: 'a password', 
      first_name: 'Hans', 
      last_name: 'Marcon', 
      email: 'hns_marcon@hotmail.com', 
      user_id: 1
    }
];





export let GuestTemplates =  {

  GuestHome: ({navigator} : {navigator: StackNavigationProp<AllLinks>}) => {
  
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Image source={require('../assets/images/TEXT ONLY.jpg')} style={styles.fullImage} />
        <Text style={styles.title}>Welcome to Big Uncle's Kitchen!</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Button onPress={() =>{ navigator.navigate('SignUp') } } title="Sign Up" />
        <Text style={styles.title}>OR</Text>
        <Button onPress={() => { navigator.navigate('LogIn') } } title="Log In" />
      </View>      
    </View>
  );
}, 

Login: ({navigator} : {navigator: StackNavigationProp<AllLinks>}) => {

  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Image source={require('../assets/images/TEXT ONLY.jpg')} style={styles.fullImage} />
        <Text style={styles.title}>Username</Text>
        <TextInput editable />
        <Text style={styles.title}>Password</Text>
        <TextInput editable secureTextEntry={true} />
        <Button onPress={() => { navigator.navigate('LogIn') } } title="Log In!" />
        <Button onPress={() => { navigator.navigate('GuestHome') } } title="Go Back" />
      </View>      
    </View>
  );
}, 

Signup: ({navigator} : {navigator: StackNavigationProp<AllLinks>}) => {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Image source={require('../assets/images/TEXT ONLY.jpg')} style={styles.fullImage} />
        <Text style={styles.title}>First Name</Text>
        <TextInput editable />
        <Text style={styles.title}>Last Name</Text>
        <TextInput editable />
        <Text style={styles.title}>Email</Text>
        <TextInput editable />
        <Text style={styles.title}>Password</Text>
        <TextInput editable secureTextEntry={true} />
        <Text style={styles.title}>Confirm Password</Text>
        <TextInput editable secureTextEntry={true} />

        <Button onPress={() => { navigator.navigate('UserHome') } } title="Go Back" />
      </View>      
    </View>
  );
} 

};


function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}