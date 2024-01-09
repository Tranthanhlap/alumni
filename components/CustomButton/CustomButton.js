import { View, Text,StyleSheet,Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress,text,type="PRIMARY",bgColor,fgColor}) => {
  return (
    <Pressable 
      onPress={onPress}
      style={[
        styles.container ,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} :{}
        ]}>
      <Text 
      style={[
        styles.text , 
        styles[`text_${type}`],
        fgColor ? {color : fgColor} :{}
        ]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
 container:{
  backgroundColor: '#00BFFF',
  padding: 15,
  borderRadius: 20,
  width: '100%',
  marginVertical: 5,
 },
 container_PRIMARY:{
  color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
 },
 container_SECONDARY:{
  borderColor:'#f8f8',
  borderWidth:2,
 },
 container_TERTIARY:{

 },
 text:{
    fontWeight:'bold',
    color:'#fff',
    textAlign: 'center',
 },
 text_TERTIARY:{
  color:'gray',
 },
 text_SECONDARY:{
  color:'BLUE',
 },
  });
export default CustomButton