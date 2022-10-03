import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Amplify from 'aws-amplify';
import awsconfig from 'aws-amplify';
import {Authenticator} from 'aws-amplify-react-native';

Amplify.configure(awsconfig);

console.disableYellowBox = true;

export default function App() {
  return (
    <View style={styles.container}>
      <Authenticator>
        <Text>Home</Text>
      </Authenticator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
