import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from '../screen/HomeScreen';
import DetailsScreen from '../screen/DetailsScreen';
import SettingsScreen from '../screen/SettingsScreen';
import HomeScreenAdmin from '../screen/HomeScreenAdmin';
import DetailsScreenAdmin from '../screen/DetailsScreenAdmin';
import SettingsScreenAdmin from '../screen/SettingsScreenAdmin';
import SigninAdmin from '../screen/SigninAdmin';
import SigninScreen from '../screen/SigninScreen';
import SignUpScreen from '../screen/SignUpScreen';
import Update from '../screen/Update';
import DetailsEvent from '../screen/DetailsEvent';
import EventUpdate from '../screen/EventUpdate';
import DetailsAlumni from '../screen/DetailsAlumni';
import InputEventAdmin from '../screen/InputEventAdmin';
import EventAlumniDetail from '../screen/EventAlumniDetail';




//Screen names
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";
const homeNameAdmin = "HomeAdmin";
const detailsNameAdmin = "DetailsAdmin";
const settingsNameAdmin = "SettingsAdmin";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// const MainContainer = () => {
function Tabb() {
  return (

      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />

      </Tab.Navigator>
  );
}
function TabbAdmin() {
  return (

      <Tab.Navigator
        initialRouteName={homeNameAdmin}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeNameAdmin) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsNameAdmin) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === settingsNameAdmin) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeNameAdmin} component={HomeScreenAdmin} />
        <Tab.Screen name={detailsNameAdmin} component={DetailsScreenAdmin} />
        <Tab.Screen name={settingsNameAdmin} component={SettingsScreenAdmin} />

      </Tab.Navigator>
  );
}
function SettingsScreenLogOut(){
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <Button title='Logout' onPress={() => navigation.navigate('SigninScreen')} />
    </View>
  )
}



export default function MainContainer() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown:false }}>
      <Stack.Screen name="SigninScreen" component={SigninScreen}/>
      <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
      <Stack.Screen name="SigninAdmin" component={SigninAdmin}/>
      <Stack.Screen name='tabb' component={Tabb} />
      <Stack.Screen name='tabbAdmin' component={TabbAdmin} />
      <Tab.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="Update" component={Update}/>
      <Stack.Screen name="DetailsEvent" component={DetailsEvent}/>
      <Stack.Screen name="EventUpdate" component={EventUpdate}/>
      <Stack.Screen name="DetailsAlumni" component={DetailsAlumni}/>
      <Stack.Screen name="InputEventAdmin" component={InputEventAdmin}/>
      <Stack.Screen name="EventAlumniDetail" component={EventAlumniDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
