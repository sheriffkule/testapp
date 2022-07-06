import React from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.prvi}>Ovaj text je na prvom mestu.</Text>
        <View>
          <Text style={styles.prvidodatak}>ovo je dodatak na prvi.</Text>
        </View>
      </View>
      <View>
        <Text style={styles.drugi}>Ovo je drugi text.</Text>
      </View>
      <View>
        <Text style={styles.treci}>Zdravo Micule!</Text>
      </View>
      <View>
        <Text style={styles.cetvrti}>I na kraju evo ga i CETVRTI!!!</Text>
      </View>
      <Button
        style={styles.roundedButton}
        title="Klikni"
        onPress={() => {
          Alert.alert('Bravo, pritisnuo si dugme, bas si sjajan!');
          <Text style={styles.buttonText}>continue</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  prvi: {
    marginHorizontal: 70,
    margin: 20,
    padding: 15,
    borderWidth: 10,
    borderColor: '#7f007f',
    backgroundColor: '#000000',
    textAlign: 'center',
    textAlignVertical: 'center',
    textDecorationColor: 'aqua',
    color: 'lightgreen',
  },
  drugi: {
    marginHorizontal: 50,
    margin: 20,
    padding: 20,
    borderWidth: 10,
    borderColor: 'yellowgreen',
    backgroundColor: '#000000',
    textAlign: 'center',
    textAlignVertical: 'center',
    textTransform: 'capitalize',
    color: 'olivedrab',
  },
  treci: {
    marginHorizontal: 30,
    margin: 20,
    padding: 25,
    borderWidth: 10,
    borderColor: '#236868',
    backgroundColor: '#000000',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'green',
    fontSize: 20,
  },
  cetvrti: {
    marginHorizontal: 10,
    margin: 20,
    padding: 30,
    borderWidth: 10,
    borderBottomColor: 'indigo',
    borderTopColor: 'aqua',
    borderLeftColor: 'blue',
    borderRightColor: 'blue',
    backgroundColor: '#000000',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'darkgreen',
  },
  buttonText: {
    color: 'limegreen',
  },
  prvidodatak: {
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 25,
    fontFamily: 'monospace',
    fontStyle: 'italic',
    color: 'teal',
    alignSelf: 'center',
  },
});
