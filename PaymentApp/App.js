import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import createStore from './store/index.js';
import { TabNavigator } from 'react-navigation';
import Toolbar from './components/toolbar/toolbar.js';
import Content from './components/content/content.js';

// import Bottom from './components/bottom/bottom.js';

const store = createStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Toolbar />
          <Content />
          {/* <Bottom /> */}
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
