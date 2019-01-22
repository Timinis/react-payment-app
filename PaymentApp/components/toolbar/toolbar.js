import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

class Toolbar extends React.Component {
  render() {
    return (
      <View style={styles.toolbar}>
        <Icon
          name="menu"
          color="#f7f7f7"
          size={60}
          containerStyle={styles.icon}
        />
        <Text style={styles.textColor}>Toolbar Placeholder</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    flex: 0.17,
    backgroundColor: '#bf24e2',
    alignItems: 'center',
    flexDirection: 'row'
  },
  textColor: {
    flex: 9,
    color: '#f7f7f7',
    alignItems: 'center',
    fontSize: 20
  },
  icon: {
    flex: 3
  }
});

export default Toolbar;
