import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  View,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { theme } from '../../common/theme';
// import * as ImagePicker from 'expo-image-picker';
// import * as Permissions from 'expo-permissions';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { LinearGradient } from 'expo-linear-gradient';
// import * as actionTypes from '../constants/action.constants';
// import { useDispatch, useSelector } from 'react-redux';

export default function ViewProduct({ navigation, route }) {
  const getDetails = (type) => {
    if (route.params) {
      const { name, phone, email, position, picture, salary } = route.params;
      switch (type) {
        case 'name':
          return name;
        case 'phone':
          return phone;
        case 'position':
          return position;
        case 'email':
          return email;
        case 'picture':
          return picture;
        case 'salary':
          return salary + '';
      }
    }
    return '';
  };

  const [name, setName] = useState(getDetails('name'));
  const [phone, setPhone] = useState(getDetails('phone'));
  const [email, setEmail] = useState(getDetails('email'));
  const [position, setPosition] = useState(getDetails('position'));
  const [picture, setPicture] = useState(getDetails('picture'));
  const [salary, setSalary] = useState(getDetails('salary'));
  const [modal, setModal] = useState(false);
  const [enableShift, setEnableShift] = useState(false);

  return (
    <View style={styles.root}>
      <KeyboardAvoidingView
        behavior='height'
        style={{ flex: 1 }}
        enabled={enableShift}>
        <TextInput
          label='Name'
          style={styles.inputStyle}
          theme={{ color: theme.colors.primary }}
          mode='outlined'
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          label='Position'
          style={styles.inputStyle}
          theme={{ color: theme.colors.primary }}
          mode='outlined'
          value={position}
          onChangeText={(text) => setPosition(text)}
        />
        <TextInput
          label='Salary'
          style={styles.inputStyle}
          theme={{ color: theme.colors.primary }}
          mode='outlined'
          keyboardType='numeric'
          value={salary}
          onChangeText={(text) => setSalary(text)}
        />
        <TextInput
          label='Email'
          style={styles.inputStyle}
          theme={{ color: theme.colors.primary }}
          onFocus={() => setEnableShift(true)}
          mode='outlined'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          label='Phone'
          style={styles.inputStyle}
          theme={{ color: theme.colors.primary }}
          mode='outlined'
          keyboardType='phone-pad'
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />

        <Button
          icon='upload'
          style={styles.inputStyle}
          mode='contained'
          theme={{ color: theme.colors.primary }}
          onPress={() => setModal(true)}>
          Upload image
        </Button>

        <View style={styles.buttonView}>
          <Button
            icon='cancel'
            style={styles.inputStyle}
            mode='contained'
            theme={{ color: theme.colors.primary }}
            onPress={() => console.log('pressed')}>
            Cancel
          </Button>
          <Button
            icon='content-save'
            style={styles.inputStyle}
            mode='contained'
            theme={{ color: theme.colors.primary }}
            onPress={() => submitData()}>
            {route.params ? 'Update' : 'Save'}
          </Button>
        </View>

        <Modal
          animationType='slide'
          transparent={true}
          visible={modal}
          onRequestClose={() => setModal(false)}>
          <View style={styles.modalView}>
            <View style={styles.modalButtonView}>
              <Button
                icon='camera'
                mode='contained'
                theme={{ color: theme.colors.primary }}
                onPress={() => pickFromCamera()}>
                Camera
              </Button>
              <Button
                icon='image-area'
                mode='contained'
                theme={{ color: theme.colors.primary }}
                onPress={() => pickFromGallery()}>
                Gallery
              </Button>
            </View>
            <Button
              theme={{ color: theme.colors.primary }}
              onPress={() => setModal(false)}>
              Cancel
            </Button>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  inputStyle: {
    margin: 5,
  },
  buttonView: {
    position: 'absolute',
    width: '100%',
    bottom: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 4,
  },
  modalView: {
    position: 'absolute',
    bottom: 2,
    width: '100%',
    backgroundColor: '#010521',
  },
  modalButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
});
