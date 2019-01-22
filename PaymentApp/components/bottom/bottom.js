import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

class Bottom extends React.Component {
  render() {
    return (
      <View style={styles.bottom}>
        <View style={styles.icon}>
          <Icon name="dashboard" color="#bf24e2" size={60} />
          <Text>Dashboard</Text>
        </View>
        <View style={styles.icon}>
          <Icon name="account-circle" color="#bf24e2" size={60} />
          <Text>Friends List</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  icon: {
    flex: 1,
    alignItems: 'center'
  }
});

export default Bottom;
