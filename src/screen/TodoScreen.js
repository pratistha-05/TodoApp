import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import CustomHeader from '../components/CustomHeader'
import AddButton from '../components/AddButton'
import { FlatList } from 'react-native-gesture-handler'

const TodoScreen = () => {
  const data = useSelector((state)=>state.todo.data)
  console.log(data)

const renderTodoItem=(item)=>{
return(
<View>
  <Text>{item.title}</Text>
</View>
);
}

  return (
    <View style={styles.container}>
      <FlatList
      data={data}
      renderItem={renderTodoItem}
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