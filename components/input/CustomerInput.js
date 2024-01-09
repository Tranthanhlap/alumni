import { View, Text,TextInput,StyleSheet } from 'react-native'
import React from 'react'

const CustomerInput = ({value,setvalue,placeholder,secureTextEntry}) => {
  return (
    <View style={styles.container}>
     <TextInput 
        value={value}
        onChangeText={setvalue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
     />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      padding: 15,
      borderRadius: 20,
      width: '100%',
      marginVertical: 5,
    },
    input:{
    }
  });

export default CustomerInput