import React,{ Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Inicio extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Contador</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00ff00',
  }
});

export default Inicio;