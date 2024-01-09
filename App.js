import react from 'react';
import { StyleSheet, Text,SafeAreaView } from 'react-native';
import HomeScreen from './screen/HomeScreen';
import DetailScreen from './screen/DetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import MainContainer from './navigation/MainContainer';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <MainContainer/>
    
     {/* <Navigation/> */}
     {/* <LogOut/> */}
     {/* <DetailScreen/> */}
     {/* <HomeScreen/> */}
     {/* <Homepage/> */}

    </SafeAreaView>    
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F9FBFC'
  },
});
