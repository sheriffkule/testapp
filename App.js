import React from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.inputContainer1} />
        <View style={styles.inputContainer2} />
        <View style={styles.inputContainer3} />
      </View>
      <View>
        <Text style={styles.prvi}>Ovaj text je na prvom mestu.</Text>
        <Text style={styles.prvidodatak}>
          Ovo je dodatak na prvi. I tu sad ja nesto pisem, kuckam, kojestarije
          neke... I jos neke baljezgarije da napisem da bi bilo nesto texta za
          obradu.
        </Text>
      </View>
      <View>
        <Text style={styles.drugi}>Ovo je drugi text.</Text>
      </View>
      <View>
        <Text style={styles.treci}>Zdravo Micule!!!</Text>
      </View>
      <View>
        <Text style={styles.cetvrti}>I na kraju evo ga i CETVRTI!!!</Text>
      </View>
      <Button
        style={styles.roundedButton}
        title="Klikni me, oujeee!!!"
        onPress={() => {
          StyleSheet, Text, View, Button, Alert
          Alert.alert('Bravo, pritisnuo si dugme, bas si fantastican!!');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: 'darkblue',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    alignSelf: 'flex-start',
  },

  prvi: {
    marginHorizontal: 50,
    margin: 1,
    padding: 15,
    borderWidth: 10,
    borderColor: '#7f007f',
    backgroundColor: '#000000',
    borderRadius: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 15,
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
    fontSize: 18,
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
    fontSize: 20,
    color: 'darkgreen',
  },
  prvidodatak: {
    fontSize: 20,
    fontFamily: 'serif',
    fontStyle: 'italic',
    color: 'aqua',
    alignSelf: 'center',
  },
  inputContainer1: {
    flex: 0.01,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
    margin: 10,
    width: 100,
    borderWidth: 3,
    borderColor: 'yellowgreen',
  },
  inputContainer2: {
    flex: 0.01,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
    margin: 10,
    width: 100,
    borderWidth: 3,
    borderColor: 'olive',
  },
  inputContainer3: {
    flex: 0.01,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'flex-end',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
    margin: 10,
    width: 100,
    borderWidth: 3,
    borderColor: 'orange',
  },
});
