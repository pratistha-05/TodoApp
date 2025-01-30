import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal, Button } from "react-native";
import { useDispatch } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons"; 
import { deleteTodo, editTodo } from "../redux/reducers/todoSlice";
import { TextInput } from "react-native-gesture-handler";

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();
  const [title,setTitle]=useState(item.title);
  const [desc,setDesc]=useState(item.desc);
  const [visible,setVisible]=useState(false);

  const deleteHandler = async()=>{
    dispatch(deleteTodo({id:item.id}))
  }

  const showModal=()=>{
    setTitle(item.title); 
    setDesc(item.desc); 
    setVisible(true);
  }

  const saveHandler=()=>{
    console.log(title,desc)
    if (title.trim() === "" || desc.trim() === "") {
      alert("Title and description cannot be empty!");
      return;
    }
    dispatch(editTodo({id:item.id,title,desc}))
    setVisible(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={showModal}>
          <Ionicons name="create-outline" size={24} color="blue" />
        </TouchableOpacity>

        <TouchableOpacity onPress={deleteHandler}>
          <Ionicons name="trash-outline" size={24} color="red" />
        </TouchableOpacity>
      </View>

      <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        />
        <TextInput
        style={styles.input}
        value={desc}
        onChangeText={setDesc}
        />
        <View style={styles.modalButtons}>
          <Button title="Save" onPress={saveHandler} />
          <Button title="Cancel" onPress={() => setVisible(false)} />
        </View>
        </View>
      </View>

      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)", 
  },
  modalContent:{
    backgroundColor:'white',
    width:'80%',
    padding:20,
    borderRadius:10
  },
  input:{
    borderRadius:2,
    padding:8,
    borderWidth:1,
    marginBottom:10,
    fontSize:18,
    borderColor:'gray'
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "50%",
  },
});
