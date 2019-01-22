import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.content}>
        <Text style={styles.text}>Home Placeholder</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 5,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    flex: 1,
    fontSize: 20
  }
});

export default Home;
