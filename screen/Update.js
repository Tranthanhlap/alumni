import { View, Text,TextInput,StyleSheet,Pressable,ScrollView } from 'react-native'
import {firebase} from '../firebase-config'
import { useNavigation } from '@react-navigation/native'
import React,{useState} from 'react' 
import { FontAwesome } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';  

const Update = ({route}) => {
    const todoRef =firebase.firestore().collection('todos');
    const [textHeading,onChangeHeadingText]=useState(route.params.item.heading);
    const [textName,onChangeNameText]=useState(route.params.item.name);
    const [textEmail,onChangeEmailText]=useState(route.params.item.email);
    const [textPhone,onChangePhoneText]=useState(route.params.item.phone);
    const [textMajors,onChangeMajorsText]=useState(route.params.item.Majors);
    const [textGraduationYear,onChangeGraduationYearText]=useState(route.params.item.GraduationYear);
    const navigation = useNavigation();

    const updateTodo = () => {
        if(textHeading && textHeading.length > 0 ){
            todoRef
            .doc(route.params.item.id)
            .update({
                heading: textHeading,
                name: textName,
                email:textEmail,
                phone:textPhone,
                Majors:textMajors,
                GraduationYear:textGraduationYear,
            }).then( () => {
                navigation.navigate('HomeAdmin')
            }).catch((error)=>{
                alert(error.message)
            })
        }
    }

  return (
    <ScrollView>
    <View>
      <View style={styles.container}>
        <View>
          <Text  style={styles.titleInput}>
            <AntDesign name="idcard" size={24} color="black" />
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeHeadingText}
            value={textHeading}
            placeholder="ID"
          />
        </View>
        <View>
          <Text  style={styles.titleInput}>
          <Ionicons name="person" size={24} color="black" />
          </Text>
          <TextInput
           style={styles.input}
          onChangeText={onChangeNameText}
          value={textName}
          placeholder="name"
      />
        </View>
        <View>
          <Text  style={styles.titleInput}>
            <MaterialIcons name="email" size={24} color="black" />
          </Text>
          <TextInput
           style={styles.input}
          onChangeText={onChangeEmailText}
          value={textEmail}
          placeholder="email"
          />
        </View>
        <View>
          <Text  style={styles.titleInput}>
          <FontAwesome name="phone" size={24} color="black" /> 
          </Text>
          <TextInput
           style={styles.input}
          onChangeText={onChangePhoneText}
          value={textPhone}
          placeholder="phone"
          />
        </View>
        <View>
          <Text  style={styles.titleInput}>
          <AntDesign name="deleteuser" size={24} color="black" /> 
          </Text>
          <TextInput
           style={styles.input}
          onChangeText={onChangeMajorsText}
          value={textMajors}
          placeholder="Majors"
          />
        </View>
        <View>
          <Text  style={styles.titleInput}>
          <FontAwesome name="graduation-cap" size={24} color="black" />  
          </Text>
          <TextInput
           style={styles.input}
          onChangeText={onChangeGraduationYearText}
          value={textGraduationYear}
          placeholder="Graduation Year"
          />
        </View>
        </View>
  
      <View style={styles.buttonAdd}>
      <Pressable
      
        onPress={()=> {updateTodo()}}
        style={styles.buttonAdd1}
      >
      <Text >
          UPDATE 
      </Text>

      </Pressable>
      </View>
    </View>
    </ScrollView>
  )
}

export default Update

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#dddd',
    padding:15,
    margin:5,
    marginHorizontal:10,
    marginBottom:10,
},
titleInput:{
  textAlign: 'left',
  padding: 20,
},
input:{
  width:'100%',
  backgroundColor: '#eee',
  borderRadius: 5,
  padding: 20,
  marginBottom:5,
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

});