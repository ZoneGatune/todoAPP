import React,{ Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.numero}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#90ff90',
  }
});

export default Body;