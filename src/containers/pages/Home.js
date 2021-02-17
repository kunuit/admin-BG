import React, { memo } from 'react';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { Text } from 'react-native';
import { theme } from '../../common/theme';
// import Paragraph from '../components/Paragraph';
// import { Navigation } from '../types';

// type Props = {
//   navigation: Navigation;
// };

const HomeScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Admin - BG</Header>

    <Text style={{ textAlign: 'center' }}>
      The easiest way to start with your amazing application.
    </Text>
    <Button
      mode='contained'
      style={{ backgroundColor: theme.colors.primary }}
      onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    <Button
      mode='outlined'
      color={theme.colors.primary}
      onPress={() => navigation.navigate('RegisterScreen')}>
      Sign Up
    </Button>
  </Background>
);

export default memo(HomeScreen);
