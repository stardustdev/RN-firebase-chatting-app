import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '@src/utils/colors';
import firebase from '@src/utils/firebase';

const HomeScreen: React.FC<{}> = (): JSX.Element => {
  const navigation = useNavigation();

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => navigation.navigate('Login'));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello, bro</Text>
      <Button title="Logout" color={colors.darkgrey} onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff',
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20,
  },
});

export default HomeScreen;
