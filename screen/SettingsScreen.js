import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const SettingsScreen = ({ navigation }) => {
    return (
      <View >
        <Button title='Logout' onPress={() => navigation.navigate('SigninScreen')} />
      </View>
    )
  }

  export default SettingsScreen;