import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TodoScreen from "./src/screen/TodoScreen";
import AddTodo from "./src/screen/AddTodo";
import { persistor, store } from "./src/redux/store";

const Stack = createStackNavigator();  

const App = () => {
  return (
    <Provider store={store}>  {/* Wrap with Redux Provider */}
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="TodoApp">
            <Stack.Screen name="TodoApp" component={TodoScreen} />
            <Stack.Screen name="AddTodo" component={AddTodo} />
          </Stack.Navigator>
        </NavigationContainer>
        </PersistGate>
        </Provider>
    );
};

export default App;
