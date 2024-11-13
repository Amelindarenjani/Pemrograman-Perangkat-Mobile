import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../theme/theme';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import CartScreen from '../screens/CartScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={require('../assets/img/Home.png')} style={{ width: 24, height: 24, flexDirection: 'column', tintColor: focused? COLORS.primaryOrangeHex : COLORS.primaryBlackHex}}/>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={require('../assets/img/cart.png')} style={{ width: 24, height: 24, flexDirection: 'column', tintColor: focused? COLORS.primaryOrangeHex : COLORS.primaryBlackHex}}/>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={require('../assets/img/love.png')} style={{ width: 24, height: 24, flexDirection: 'column', tintColor: focused? COLORS.primaryOrangeHex : COLORS.primaryBlackHex}}/>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="History"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Image source={require('../assets/img/history.png')} style={{ width: 24, height: 24, flexDirection: 'column', tintColor: focused? COLORS.primaryOrangeHex : COLORS.primaryBlackHex}}/>
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 60,
    position: 'absolute',
    backgroundColor: COLORS.primaryWhiteHex,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
    paddingTop: 8
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default TabNavigator;
