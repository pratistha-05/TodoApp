import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import CustomHeader from '../components/CustomHeader'
import AddButton from '../components/AddButton'
import { FlatList } from 'react-native-gesture-handler'
import TodoItem from '../components/TodoItem'

const TodoScreen = () => {
  const data = useSelector((state)=>state.todo.data)
  console.log(data)

  return (
    <View style={styles.container}>
      <FlatList
      data={data}
      renderItem={({ item }) => (
        <TodoItem item={item} />
      )}
        ListEmptyComponent={<View>
          <Text>no list found</Text>
        </View>
        }
        initialNumToRender={10}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}  
        />
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