import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';

class Content extends React.Component {
  renderCategories(array) {
    return array.map((element, index) => (
      <Text key={index} style={styles.text}>
        Name: {element.name}
      </Text>
    ));
  }

  render() {
    let contactList = this.props.contacts;

    return (
      <View style={styles.content}>{this.renderCategories(contactList)}</View>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleChange: updateFriendList => dispatch(actions.update(updateFriendList))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);

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
