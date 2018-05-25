import React from 'react';
import { StyleSheet, Text,View } from 'react-native';
import { Image} from 'react-native';

export default class App extends React.Component {
  render() {
    let pic = {
   uri: 'https://qph.ec.quoracdn.net/main-thumb-25038726-200-yucgwgnfbtrgkhbckwhrizkmjjaijdkl.jpeg'
 };
    return (
   <View style={styles.container}>

   <Text>
 Hola Alonso
 </Text>
      <Image
                style={{width: 250, height: 200}}
                source={pic}
            />


</View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
