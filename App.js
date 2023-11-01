import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import Todos from './components/Todos'
import DisplayTodos from './components/DisplayTodos';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Todos />
<DisplayTodos/>
      </View>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
