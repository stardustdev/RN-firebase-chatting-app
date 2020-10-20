import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { User } from '@src/models';
import colors from '@src/utils/colors';
import firebase from '@src/utils/firebase';

const LoginScreen: React.FC<{}> = (): JSX.Element => {
  const navigation = useNavigation();
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChangeValue = (value: string, prop: keyof User) => {
    setUser((prevUser) => ({
      ...prevUser,
      [prop]: value,
    }));
  };

  const handleLogin = () => {
    if (!user.email || !user.password) {
      Alert.alert('Enter details to login!');
    } else {
      setLoading(true);
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          setLoading(false);
          setUser({
            email: '',
            password: '',
          });
          navigation.navigate('Home');
        });
    }
  };

  return (
    <>
      {loading && (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color={colors.darkgrey} />
        </View>
      )}
      {!loading && (
        <View style={styles.container}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Email"
            value={user.email}
            onChangeText={(value: string) => handleChangeValue(value, 'email')}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            value={user.password}
            onChangeText={(value: string) =>
              handleChangeValue(value, 'password')
            }
            secureTextEntry={true}
          />
          <Button title="Login" color={colors.primary} onPress={handleLogin} />
          <Text
            style={styles.loginText}
            onPress={() => navigation.navigate('Register')}>
            Don't have account? Click here to SignUp
          </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 35,
    backgroundColor: colors.white,
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: 'center',
    borderColor: colors.grey,
    borderBottomWidth: 1,
  },
  loginText: {
    color: colors.primary,
    marginTop: 25,
    textAlign: 'center',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
});

export default LoginScreen;
