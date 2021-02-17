import React, { memo } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Linking,
  Platform,
  Alert,
} from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
import { Button, Card, Title } from 'react-native-paper';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { theme } from '../../common/theme';

const Profile = (props) => {
  // const dispatch = useDispatch();
  // const {
  //   _id,
  //   id,
  //   name,
  //   email,
  //   salary,
  //   phone,
  //   picture,
  //   position,
  // } = props.route.params.item;

  const { account } = useSelector((state) => state);
  const openDial = () => {
    if (Platform.OS) Linking.openURL(`tel:${account.userInfo.phone}`);
    else Linking.openURL(`telprompt:${account.userInfo.phone}`);
  };

  return (
    <View style={styles.root}>
      {/* <LinearGradient
        colors={['#32a852', '#d1f0d9']}
        style={{ height: '20%' }}
      /> */}
      <View style={{ alignItems: 'center' }}>
        <Image
          style={{
            height: 110,
            width: 110,
            borderRadius: 55,
            marginTop: 50,
          }}
          source={{
            uri: account.userInfo.avatar,
          }}
        />
      </View>
      <View style={{ alignItems: 'center', marginBottom: 10 }}>
        <Title>{account.userInfo.name}</Title>
      </View>
      <Card
        style={styles.myCard}
        onPress={() => Linking.openURL(`mailto:${account.userInfo.email}`)}>
        <View style={styles.myContent}>
          <MaterialIcons name='mail' size={32} color='#84e514' />
          <Text style={styles.myText}>{account.userInfo.email}</Text>
        </View>
      </Card>
      <Card style={styles.myCard} onPress={() => openDial()}>
        <View style={styles.myContent}>
          <Entypo name='phone' size={32} color='#84e514' />
          <Text style={styles.myText}>{account.userInfo.phone}</Text>
        </View>
      </Card>
      <Card style={styles.myCard}>
        <View style={styles.myContent}>
          <MaterialIcons name='star' size={32} color='#84e514' />
          <Text style={styles.myText}>
            {account.userInfo.birthDate.split('T')[0]}
          </Text>
        </View>
      </Card>
      <Card style={styles.myCard}>
        <View style={styles.myContent}>
          <MaterialIcons name='wc' size={32} color='#84e514' />
          <Text style={styles.myText}>
            {account.userInfo.gender == 0 ? 'Nam' : 'Nữ'}
          </Text>
        </View>
      </Card>
      <Card style={styles.myCard}>
        <View style={styles.myContent}>
          <MaterialIcons name='home' size={32} color='#84e514' />
          <Text style={styles.myText}>{account.userInfo.address}</Text>
        </View>
      </Card>

      {/* <View style={styles.modalButtonView}>
        <Button
          icon='account-edit'
          mode='contained'
          theme={themes}
          onPress={() =>
            props.navigation.navigate('Create', {
              _id,
              id,
              name,
              email,
              salary,
              phone,
              picture,
              position,
            })
          }>
          Edit
        </Button>
        <Button
          icon='delete'
          mode='contained'
          theme={themes}
          onPress={() => deleteEmployee()}>
          Cút
        </Button>
      </View> */}
      <Button
        icon='pen'
        // mode='contained'
        theme={themes}
        onPress={() => console.log('edit')}></Button>
    </View>
  );
};

const themes = {
  colors: {
    primary: theme.colors.primary,
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  myCard: {
    margin: 5,
  },
  myContent: {
    flexDirection: 'row',
    padding: 3,
  },
  myText: {
    fontSize: 18,
    marginTop: 3,
    marginLeft: 8,
    color: '#919090',
  },
  modalButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
  button: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 5,
  },
});

export default memo(Profile);
