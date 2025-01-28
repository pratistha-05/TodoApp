import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";


export const AddButton = () => {
    const navigation = useNavigation(); 
  return (
    <TouchableOpacity style={styles.container} 
    onPress={() => navigation.navigate("AddTodo")} >
      <Ionicons name="add-circle" size={24} color="green" />
      </TouchableOpacity>
  )
}

export default AddButton

const styles = StyleSheet.create({
    container: {
        position:"absolute",
        backgroundColor:"#3C75BE",
        padding: 10,
        borderRadius: 30,
        justifyContent:"center",
        elevation: 10,
        bottom: 20,
        right: 25,    
    }
})