import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Picker,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Button,
  Modal,
  Portal,
  Searchbar,
  Provider,
  Snackbar,
  Card,
  FAB,
  Avatar,
} from 'react-native-paper';
import NumberFormat from 'react-number-format';
// import { Icon } from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../common/theme';
import FilterModal from '../../components/Filter.modal';
import * as actionType from '../../constants/auth.constants';
import { useDispatch, useSelector } from 'react-redux';

export default function Orders({ navigation }) {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [visible, setVisible] = useState(false);
  const { manufactureList } = useSelector((state) => state);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Provider>
      <View style={styles.searchBar}>
        <Searchbar
          placeholder='Search'
          style={styles.search}
          onChangeText={onChangeSearch}
          // theme={theme.colors.primary}
          iconColor={theme.colors.primary}
          value={searchQuery}
        />
      </View>
      <FAB
        onPress={() => navigation.navigate('ViewProduct')}
        style={styles.fab}
        small={false}
        theme={{ colors: { accent: theme.colors.primary } }}
        icon='plus'
      />
    </Provider>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    // display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  search: {
    width: '50%',
    margin: 5,
    borderRadius: 15,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: theme.colors.primary,
    backgroundColor: '#f5f6f7',
    elevation: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
