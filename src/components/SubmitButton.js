import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SubmitButton = ({title,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default SubmitButton

const styles = StyleSheet.create({
    container:{
      alignSelf:'center',
        width:'30%',
        backgroundColor:"#3C75BE",
        padding:8,
        margin:10,
        justifyContent: 'center',
        paddingHorizontal: 40,
        alignItems:'center',
        borderRadius: 50
    },
    text:{
        fontSize:14,
        fontWeight: 600,
        color:"white"
    }
})