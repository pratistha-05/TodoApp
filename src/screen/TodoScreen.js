import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import CustomHeader from '../components/CustomHeader'
import AddButton from '../components/AddButton'

const TodoScreen = () => {
  const data = useSelector((state)=>state.todo.data)
  console.log(data)
  return (
    <View style={styles.container}>
      <CustomHeader title="todo" isBackButton={true}/>
      <AddButton/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        flex: 1
    }
})
export default TodoScreen