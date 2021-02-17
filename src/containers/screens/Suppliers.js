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

export default function Suppliers({ navigation }) {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  // const [visible, setVisible] = useState(false);
  const { manufactureList } = useSelector((state) => state);

  // const showModal = () => setVisible(true);
  // const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };

  const onChangeSearch = (query) => setSearchQuery(query);

  const fetchData = () => {
    fetch(`${actionType.HOST}Manufacturer`)
      .then((res) => res.json())
      .then(async (data) => {
        // setData(data);
        dispatch({ type: actionType.GET_MANUFACTORY, payload: data.data });
        // setTimeout(() => {
        //   // setLoading(false);
        //   dispatch({ type: actionTypes.IS_LOADING, payload: false });
        // }, 1000);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderList = (item) => {
    return (
      <Card
        onPress={() => navigation.navigate('ViewProduct', { item })}
        style={styles.myCard}
        key={item.id}>
        <View style={styles.cardView}>
          {/* <Image
            style={{ height: 60, width: 60, borderRadius: 30 }}
            source={
              item.imageUrls[0]
                ? { uri: item.imageUrls[0] }
                : {
                    uri:
                      'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg',
                  }
            }
          /> */}
          <Avatar.Icon
            size={60}
            icon='warehouse'
            color='grey'
            style={{ backgroundColor: '#f4f5f6' }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.text}>{item.name}</Text>
            <View style={styles.news}>
              <Text style={styles.variant}>
                <NumberFormat
                  value={item.phone}
                  displayType={'text'}
                  format='#### ### ###'
                  renderText={(formattedValue) => <Text>{formattedValue}</Text>}
                />
              </Text>
              {/* <Text style={[styles.variant, styles.selling]}>Hoạt Động</Text> */}
            </View>
            <Text style={{ fontSize: 13, color: 'green' }}>
              {item.representative}
            </Text>
          </View>
        </View>
      </Card>
    );
  };

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

        {/* <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}>
            <FilterModal />
          </Modal>
        </Portal> */}
        {/* <Button
          mode='contained'
          style={styles.filter}
          onPress={() => {
            showModal();
          }}>
          <Ionicons name='ios-filter' size={25} />
          <Text>Filter</Text>
        </Button> */}
      </View>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={manufactureList}
          renderItem={({ item }) => {
            return renderList(item);
          }}
          keyExtractor={(item) => item.id.toString()}
          // key={(item) => +item.id}
          // onRefresh={() => fetchData()}
          // refreshing={loading}
        />
        <FAB
          onPress={() => navigation.navigate('ViewProduct')}
          style={styles.fab}
          small={false}
          theme={{ colors: { accent: theme.colors.primary } }}
          icon='plus'
        />
      </SafeAreaView>
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
  filter: {
    // display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  myCard: {
    margin: 5,
    padding: 5,
  },
  cardView: {
    flexDirection: 'row',
    padding: 6,
  },
  text: {
    fontSize: 18,
  },
  news: {
    flexDirection: 'row',
  },
  variant: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 5,
    marginRight: 5,
    color: theme.colors.primary,
    borderColor: theme.colors.primary,
    // width: '100%',
  },
  selling: {
    color: 'white',
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
