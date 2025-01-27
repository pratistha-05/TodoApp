import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';


const CustomHeader =  ({ title, isBackButton })  => {
  return (
    <View style={styles.container}>
        <SafeAreaView/>
        <View>
      <Text>{title}</Text>
      {isBackButton && (
        <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="black" />  
        </TouchableOpacity>
      )}
      </View>
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        padding: 10
    }
})