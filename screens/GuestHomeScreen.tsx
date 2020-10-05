import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { GuestTemplates } from '../components/GuestHome' ;
import { TouchableOpacity, Image, Picker, TextInput, Button, Alert, Text } from 'react-native';
import { styles } from '../components/DefaultStyles';
import { AllLinks } from '../types';

import { StackNavigationProp } from '@react-navigation/stack';

export let GuestHomeScreen = { 
  
    GuestHome: ({navigator} : {navigator: StackNavigationProp<AllLinks>}) => { //this will be the default screen for non-logged users

      return (
        <View style={styles.container}>   
          <Image source={require('../assets/images/TEXT ONLY.png')} style={styles.fullImage} />
          <Text style={styles.title}>Welcome to Big Uncle's Kitchen!</Text>
          <View style={styles.separator} />
          <Button onPress={() =>{ navigator.navigate('SignUp') } } title="Sign Up" />
          <Text style={styles.title}>OR</Text>
          <Button onPress={() => { navigator.navigate('LogIn') } } title="Log In" />
        </View>
      );
    },
    LogIn: ({navigator} : {navigator: StackNavigationProp<AllLinks>}) => { //this will be the default screen for non-logged users
      return (
        <View style={styles.container}>
          <Image source={require('../assets/images/TEXT ONLY.png')} style={styles.fullImage} />
          <Text style={styles.title}>Username</Text>
          <TextInput editable />
          <Text style={styles.title}>Password</Text>
          <TextInput editable secureTextEntry={true} />
          <Button onPress={() => { navigator.navigate('LogIn') } } title="Log In!" />
          <Button onPress={() => { navigator.navigate('GuestHome') } } title="Go Back" />
        </View>
      );
    },
    Signup: ({navigator} : {navigator: StackNavigationProp<AllLinks> }) => { //this will be the default screen for non-logged users
      return (
        <View style={styles.container}>
        <Image source={require('../assets/images/TEXT ONLY.png')} style={styles.fullImage} />
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
      );
    },
};
