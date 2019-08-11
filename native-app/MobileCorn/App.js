import React from 'react';
import { StyleSheet,Button, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {

  return (
    <View style={styles.container}>
      <Text>hey its working</Text>
      <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
        />
        <Button
          onPress={() => {
            alert('You tapped the button!');
          }}
          title="Press Me"
        />
    </View>
  );
}

