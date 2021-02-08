import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';

export default function App() {

  const [input, setInput] = useState('');
  const [number, setNumber] = useState('');
  const [text, setText] = useState('');
  const [count, setCount] = React.useState(0);

  const randomNumber = () => {
    setNumber(Math.floor(Math.random() * 100) + 1)
    setCount(0);
  }

  const buttonPressed = () => {

    if (input == number) {
      Alert.alert('You guessed the number in ' + (count+1) + ' guesses');
    }
    else if (input < number) {
      setCount(count+1)
      setText("Your guess " + input + " is too low")
    }
    else if (input > number) {
      setCount(count+1)
      setText("Your guess " + input + " is too high")
    }
  }

  return (
    <View style={styles.container}>
      
      <Button
        title= "START GAME"
        onPress={randomNumber}
      />
    
      <Text
        style={styles.text}
      >Guess a number between 1 - 100</Text>

      <TextInput
        style={styles.input}
        onChangeText= {text => setInput(text)}
        value={input}
        />

      <Button
        title= "MAKE GUESS"
        onPress={buttonPressed}
      />

      <Text
        style={styles.text}
      >{text}</Text>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },

  input: {
    height: 40,
    width: 50,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 20,
  }
});
