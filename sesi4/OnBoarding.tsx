// In App.js in a new project
import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {StackParamList} from './router';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type OnBoardingProps=NativeStackScreenProps<StackParamList, 'OnBoarding'>;

const OnBoarding:React.FC<OnBoardingProps>=({navigation}) => {
    return (
        <View style={styles.container}>
        <ScrollView>
        <Image source={require('../assets/img/welcome-image.png')}
        style={styles.hero}/>
        <View style={styles.article}>
            <Text style={{ color: 'white', fontWeight: 600, fontSize: 32, lineHeight: 40, textAlign: 'center', paddingVertical: 7, paddingHorizontal: 30}}>Coffee so good, your taste buds will love it.</Text>
            <Text style={{ fontSize: 14, fontWeight: 400, color: '#A9A9A9', lineHeight: 25, textAlign: 'center', paddingHorizontal: 25 }}>The best grain, the finest roast, the powerful flavor</Text>
            <TouchableOpacity onPress={() =>navigation.navigate('Home')} style={{ backgroundColor: '#C67C4E', width: 315, height: 62, borderRadius: 15, padding: 7, marginVertical: 8, marginHorizontal: 'auto' }}>
                <Text style={{ color: 'white', fontWeight: 600, fontSize: 16, textAlign: 'center', marginVertical: 'auto' }}>Get Started</Text></TouchableOpacity>
        </View>
        </ScrollView>
        
    </View>
    )
}
   

export default OnBoarding;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flexDirection: 'row',
        padding: 3
    },
    hero: {
        width: 500,
        height: 720,
        top: -175,
        left: -75,
        marginBottom: 0
    },
    article:{
        padding: 3,
        top: -240
    }
})