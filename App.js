import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Ovaj text je na prvom mestu</Text>
      </View>
      <View>
        <Text style={styles.nesto}>Zdravo Micule!</Text>
      </View>
      <View>
        <Text style={styles.drugi}> ovo je drugi</Text>
      </View>
      <View>
        <Text style={styles.cetvrti}>CETVRTI!!!</Text>
      </View>

      <Button title="Tap me!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#000054',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 20,
    padding: 25,
    borderWidth: 10,
    borderColor: '#7f007f',
    backgroundColor: '#000000',
  },
  nesto: {
    margin: 10,
    padding: 50,
    borderWidth: 7,
    borderColor: '#236868',
    backgroundColor: '#000000',
  },
  drugi: {
    margin: 20,
    padding: 25,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#000000',
  },
  cetvrti: {
    margin: 20,
    padding: 35,
    borderWidth: 2,
    borderColor: 'grey',
    backgroundColor: '#000000',
  },
});
