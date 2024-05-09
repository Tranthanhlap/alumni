import { View, Text,TextInput,StyleSheet,Pressable,Image,ScrollView } from 'react-native'
import {firebase} from '../firebase-config'
import { useNavigation } from '@react-navigation/native'
import React,{useState} from 'react' 
import { FontAwesome } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';  

const EventAlumniDetail = ({route}) => {
    const todoRef =firebase.firestore().collection('eventAlumni');
 const navigation = useNavigation();



  return (
    <View>
    <ScrollView>
    <View>

<View style={styles.titleday}>
  <View style={styles.Iconday}>
    <AntDesign  name="back" size={24} color="black"
    onPress={() => navigation.navigate('DetailsAdmin')} />
  </View>
    <Text style={styles.day}>
      {route.params.item.heading}
    </Text>
</View>
<View style={styles.profileImage}>
  <Image
    style={styles.pImage}
    source={require('../Image/logoEvent1.jpg')}
  />
</View>

<Text style={styles.title}>
{route.params.item.name}
</Text>
<Text style={styles.ditail}>
{route.params.item.email}
</Text>

<Text style={styles.athur}>
written by:{route.params.item.phone}
</Text>

<View style={styles.buttonAdd}>

</View>
</View>
    </ScrollView>
    </View>
  )
}

export default EventAlumniDetail

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#dddd',
    padding:15,
    margin:5,
    marginHorizontal:10,
    marginBottom:10,
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
day:{
  color:'red',
  margin:10,
  padding:20,
  alignItems:'center',
  justifyContent: 'center',
},
title:{
  fontSize:30,
  fontWeight:"bold",
  textAlign:'center',
  margin:20,
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
titleday:{
  flexDirection: 'row'
},
Iconday:{
  padding:20,
},
profileImage:{
  justifyContent: 'center',
  alignItems: 'center',
},
pImage:{
  width:100,
  height:120,
},

});