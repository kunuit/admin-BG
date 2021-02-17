import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
// import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStore } from 'redux';
import { Provider, useSelector } from 'react-redux';
import { reducer } from './src/reducers/auth.reducers';

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
} from './src/containers/pages';
import Products from './src/containers/screens/Products';
import Profile from './src/containers/screens/Profile';
import Orders from './src/containers/screens/Orders';
import Stocks from './src/containers/screens/Stocks';
import Suppliers from './src/containers/screens/Suppliers';
import Icon from 'react-native-vector-icons/Ionicons';
import ViewProduct from './src/containers/screens/ViewProduct';

const Router = createStackNavigator();
const Tab = createBottomTabNavigator();
const TabTop = createMaterialTopTabNavigator();
const store = createStore(reducer);

function ProductTab() {
  return (
    <TabTop.Navigator tabBar={() => null}>
      <TabTop.Screen name='ListProduct' component={Products} />
      <TabTop.Screen name='ViewProduct' component={ViewProduct} />
      {/* <TabTop.Screen name='Account' component={AccountScreen} /> */}
    </TabTop.Navigator>
  );
}

function Dashboard() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: { fontSize: 12 },
        style: {
          backgroundColor: '#75777b',
          // height: 75,
          // alignItems: 'center',
        },
        showIcon: true,
        showLabel: false,
      }}>
      <Tab.Screen
        name='Products'
        component={ProductTab}
        showIcon={true}
        options={{
          tabBarIcon: ({ focused, tintColor }) => (
            <Icon
              name='layers'
              size={20}
              color={focused ? '#ED768D' : '#f4f5f6'}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Suppliers'
        component={Suppliers}
        options={{
          tabBarIcon: ({ focused, tintColor }) => (
            <Icon
              name='business'
              size={20}
              color={focused ? 'black' : '#f4f5f6'}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Stocks'
        component={Stocks}
        showIcon={true}
        options={{
          tabBarIcon: ({ focused, tintColor }) => (
            <Icon
              name='library'
              size={20}
              color={focused ? '#19bd13' : '#f4f5f6'}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Orders'
        component={Orders}
        showIcon={true}
        options={{
          tabBarIcon: ({ focused, tintColor }) => (
            <Icon
              name='ios-cart'
              size={20}
              color={focused ? 'black' : '#f4f5f6'}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        showIcon={true}
        options={{
          tabBarIcon: ({ focused, tintColor }) => (
            <Icon
              name='walk'
              size={20}
              color={focused ? '#ED768D' : '#f4f5f6'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  const { userToken } = useSelector((state) => state);
  return (
    <View style={styles.container}>
      <Router.Navigator initialRouteName='HomeScreen' headerMode='none'>
        {!userToken ? (
          <>
            <Router.Screen name='HomeScreen' component={HomeScreen} />
            <Router.Screen name='LoginScreen' component={LoginScreen} />
            <Router.Screen
              name='ForgotPasswordScreen'
              component={ForgotPasswordScreen}
            />
            <Router.Screen name='RegisterScreen' component={RegisterScreen} />
          </>
        ) : (
          <>
            <Router.Screen name='Dashboard' component={Dashboard} />
          </>
        )}
      </Router.Navigator>
    </View>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f5f6',
    paddingTop: Constants.statusBarHeight,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
