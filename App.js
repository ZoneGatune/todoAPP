import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import  Inicio  from './Inicio';
import Body from './Body';
import Final from './Final';

class App extends React.Component {

    constructor() {
      super();
      this.state = {
        numero:2
      }
    }

    aumentar = () => {
      this.setState({
        numero:this.state.numero + 1
      })

    }

    disminuir = () => {
      this.setState({
        numero:this.state.numero -1
      })

    }

  render() {

   

    return (
      <View style={styles.container}>
        <Inicio name = { this.props.name }/>
        <Body numero = { this.state.numero }/> 
       {/* <Final sumar={this.aumentar }  restar={this.disminuir} />     */}
      {/*  <View style={styles.cajaTres}>
          <Button
            title="Aumentar"
            onPress={() => {
              this.aumentar();
            }}
          />
          <Button
            title="Disminuir"
            onPress={() => {
              this.disminuir();
            }}
          />
        </View>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
});

export default App;
