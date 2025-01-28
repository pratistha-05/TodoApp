import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons"; 
import { deleteTodo } from "../redux/reducers/todoSlice";

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();

  const deleteHandler = async()=>{
    dispatch(deleteTodo({id:item.id}))
  }

  const editHandler = async()=>{
    dispatch()
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>

      <View style={styles.iconContainer}>
        {/* Edit Button */}
        <TouchableOpacity onPress={editHandler}>
          <Ionicons name="create-outline" size={24} color="blue" />
        </TouchableOpacity>

        {/* Delete Button */}
        <TouchableOpacity onPress={deleteHandler}>
          <Ionicons name="trash-outline" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 3,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  desc: {
    fontSize: 14,
    color: "gray",
  },
  iconContainer: {
    flexDirection: "row",
    gap: 15,
  },
});
