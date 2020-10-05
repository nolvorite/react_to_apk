import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { GuestTemplates } from '../components/GuestHome' ;
import { TouchableOpacity, Image, Picker, TextInput, Button, Alert, Text } from 'react-native';
import { styles } from '../components/DefaultStyles';
import { AllLinks } from '../types';

import { StackNavigationProp } from '@react-navigation/stack';

var loggedInUser = {};

const foodItems = [
    //{item_id: '' ,item_name: '' ,description: '' , price: '' , img_src: '' },
    {item_id: 1 , item_name: 'Bagnet' ,description: 'Crispy and Juicy Bagnet for only $19.' , price: 19 ,img_src: require('../assets/images/Bagnet.jpg')},
    {item_id: 2 , item_name: 'Sisig' ,description: 'Sisig for only $14.' , price: 19 ,img_src: require('../assets/images/sisig-recipe.jpg')},
    {item_id: 3 , item_name: 'Chicken Feet' ,description: 'Chicken Feet for only $9.' , price: 19 ,img_src: require('../assets/images/chickenfeet-640.jpg')}
];

const itemsInQueue = new Array();

function addItem(itemId: Number){
    let items = itemsInQueue;
    var wasFound = false;
    var objectInQ = new Object();
    for(var i =0; i < itemsInQueue.length; i++){
        var dt = itemsInQueue[i];
        if(dt.item_id === itemId){
          wasFound = true;
          objectInQ = dt;
        }
    }
    if(!wasFound){
      itemsInQueue.push(foodItems.filter(function(element,index,array){ element.item_id === itemId }));
    }else{
        Alert.alert("You have already added this item to your cart.");
    }
}

export let UserHomeScreen = { 
  
    UserHome: ({navigator} : {navigator: StackNavigationProp<AllLinks>}) => { //this will be the default screen for non-logged users
      return (
        <View style={styles.container}>   
          <Image source={require('../assets/images/TEXT ONLY.png')} style={styles.fullImage} />
                <View style={styles.topMenu}>
                    <Button title="Cart" onPress={() => navigator.navigate('Cart')} />
                    <Button title="Log Out" onPress={() => {}} />
                </View>
                {foodItems.map((food) => {
                    return (<>
                    <Image source={food.img_src} style={styles.fullImage}></Image>
                    <Text style={styles.title}>{food.item_name}</Text>
                    <Text style={styles.getStartedText}>{food.description}</Text>
                    <Button title="Add Item" onPress={() => addItem(food.item_id)} />
                    </>)})
                }
        </View>
      );
    },
    Help: ({navigator} : {navigator: StackNavigationProp<AllLinks>}) => { //this will be the default screen for non-logged users
      return (
        <View style={styles.container}>   
          
        </View>
      );
    },
    Cart: ({navigator} : {navigator: StackNavigationProp<AllLinks>}) => { //this will be the default screen for non-logged users
      return (
        <View style={styles.container}>   
          {foodItems.map((food) => {
              return (<>
                  <Image source={food.img_src} style={styles.fullImage}></Image>
                  <Text style={styles.title}>{food.item_name}</Text>
                  <Text style={styles.getStartedText}>{food.price}</Text>
                  <Button title="Remove Item" onPress={() => {}} />
              </>)})
          }
          <Text>Total: 'total amount'</Text>
          <Text><Button title="Finish Ordering" onPress={() => { navigator.navigate("Checkout"); }} /></Text>
        </View>
      );
    },
    Checkout: ({navigator} : {navigator: StackNavigationProp<AllLinks>}) => { //this will be the default screen for non-logged users
      return (
        <View style={styles.container}>   
           {itemsInQueue.map((food) => {
                    var foodImg = food.img_src;
                    return (<>
                    <Image source={foodImg} style={styles.fullImage}></Image>
                    <Text style={styles.title}>${food.price}</Text>
                    <Button title="Remove" onPress={() => {}} />
                    </>)})
                }
                <Text style={styles.title}>$55</Text>
                <Button title="Payment Method" onPress={() => { navigator.navigate("Payment") }} />
        </View>
      );
    },
    Delivery: ({navigator} : {navigator: StackNavigationProp<AllLinks>}) => { //this will be the default screen for non-logged users
      return (
        <View style={styles.container}>   

        </View>
      );
    },
    DriverOrders: ({navigator} : {navigator: StackNavigationProp<AllLinks>}) => { //this will be the default screen for non-logged users
      return (
        <View style={styles.container}>   
        
        </View>
      );
    },
    Payment: ({navigator} : {navigator: StackNavigationProp<AllLinks>}) => { //this will be the default screen for non-logged users
      return (
        <View style={styles.container}>   
          <Button title="Back to Menu" onPress={() => { navigator.navigate("UserHome") }} />    
        </View>
      );
    },
};
