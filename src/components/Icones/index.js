import react from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from "@expo/vector-icons";
import styles from '../Icones/style';


 function HomeScreen() {
  return (
    <View>
        <Text>Home!</Text>
    </View>
  );
}

function Search() {
    return(
        <View>
          <Text>Search!</Text>
        </View>
      );
}

function Chat() {
    return(
        <View>
        </View>
      );
}

function Profile() {
    return(
        <View>
          <Text>Profile!</Text>
        </View>
      );
}

function Settings() {
    return(
        <View>
          <Text>Settings!</Text>
        </View>
      );
}

const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <NavigationContainer>
        <ul>
        <Ionicons name="home" size={50} style={styles.ionhome}/>
        <Ionicons name="search" size={50} style={styles.ionsearch}/>
        <Ionicons name="chatbox-outline" size={50} style={styles.ionchat}/> 
        <Ionicons name="person-circle-outline" size={50} style={styles.ionprofile}/>
        <Ionicons name="settings" size={50} style={styles.ionsettings}/>
        </ul>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Search" component={Search}/>
      <Tab.Screen name="Chat" component={Chat}/>
      <Tab.Screen name="Profile" component={Profile}/>
      <Tab.Screen name="Settings" component={Settings}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}


