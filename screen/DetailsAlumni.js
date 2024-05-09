import { View, Text,TextInput,StyleSheet,Pressable,Image } from 'react-native'
import {firebase} from '../firebase-config'
import { useNavigation } from '@react-navigation/native'
import React,{useState} from 'react' 
import { FontAwesome } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';  
import { Entypo } from '@expo/vector-icons';


const DetailsAlumni = ({route}) => {
    const todoRef =firebase.firestore().collection('todos');
 const navigation = useNavigation();



  return (
    <View style={styles.container}>
       <Text style={styles.profile}>
          PROFILE
      </Text>
      <View style={styles.profileImage}>
        <Image
          style={styles.pImage}
          source={require('../Image/Person-Image.jpg')}
        />
      </View>
      
      <View style={styles.FormID}>
        <View style={styles.FormIDIcon}>
        <AntDesign name="idcard" size={24} color="black" />
        </View>
        <Text style={styles.ID}>
          {route.params.item.heading}
        </Text>
      </View>
      <View style={styles.FormID}>
        <View style={styles.FormIDIcon}>
        <Ionicons name="person-circle-outline" size={24} color="black" />
        </View>
        <Text style={styles.title}>
      {route.params.item.name}
      </Text>
      </View>
      <View style={styles.FormID}>
        <View style={styles.FormIDIcon}>
        <Entypo name="mail" size={24} color="black" />
        </View>
        <Text style={styles.ditail}>
           {route.params.item.email}
        </Text>
      </View>
      <View style={styles.FormID}>
        <View style={styles.FormIDIcon}>
        <Entypo name="phone" size={24} color="black" />
        </View>
        <Text style={styles.athur}>
          {route.params.item.phone}
        </Text>
  
      </View>

    
    
    
      <View style={styles.buttonAdd}>
      <Pressable
      
      onPress={() => navigation.navigate('Home')}
        style={styles.buttonAdd1}
      >
      <Text >
          Back
      </Text>

      </Pressable>
      </View>
    </View>
  )
}

export default DetailsAlumni

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#ffffff',
    height:'100%'
},
buttonAdd:{
  alignItems:'center',
  justifyContent: 'center',
},
buttonAdd1:{
  height:47,
  borderRadius:5,
  backgroundColor: '#788eec',
  width:'50%',
  alignItems:'center',
  justifyContent: 'center',
  
},
ID:{
  color:'red',
  margin:10,
  fontSize:20,

},
title:{
  fontSize:20,
  fontWeight:"bold",
  textAlign:'center',
  margin:10,
},
ditail:{
  fontSize:15,
  padding:15,
  textAlign:'center'

},
athur:{
  margin:10,
  fontWeight:"400",
  textAlign:'right'
},
profile:{
  padding:20,
  textAlign:'center',
  fontSize:20,
},
profileImage:{
  justifyContent: 'center',
  alignItems: 'center',
},
pImage:{
  width:100,
  height:120,
},
FormID:{
  backgroundColor:'#f0f0f0',
  paddingLeft:50,
  paddingRight:50,
  margin:20,
  flexDirection:'row',
  borderRadius:30,
},
FormIDIcon:{
  margin:10,
},

});