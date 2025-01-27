import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AddButton from '../components/AddButton'
import { TextInput } from 'react-native-gesture-handler'
import SubmitButton from '../components/SubmitButton'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/reducers/todoSlice'



const AddTodo = ({navigation}) => {
    const dispatch = useDispatch()
    const [value,setValue]=useState('')
    const [desc,setDesc]=useState('')

    const onSubmit = async()=>{
        if(value.trim()=="" || desc.trim()==""){
           Alert.alert("please enter something to add as todo")
           return;
        }
        dispatch(addTodo({title:value,desc:desc}));
        navigation.goBack();
       }

  return (
    <View>
      <TextInput
      value={value}
      placeholder='Enter the todo'
      onChange={setValue}
      style={styles.input}/>

    <TextInput
      value={desc}
      numberOfLines={4}
      placeholder='Enter the Description of todo'
      onChange={setDesc}
      style={[styles.input, styles.minHeight]}/>

    <SubmitButton title="ADD" onPress={onSubmit}/>
    </View>
  )
}

export default AddTodo

const styles = StyleSheet.create({
    input:{
        borderRadius:5,
        borderWidth:1,
        padding:10,
        margin:10,
        fontSize: 18,
        borderColor:"black" 
    },
    minHeight:{
        minHeight:120
    }
})