import { useLinkProps } from '@react-navigation/native';
import React, {Component, useState} from 'react';
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

type OrderProps = {navigation: NativeStackNavigationProp<StackParamList, 'Order'>};

const Order:React.FC<OrderProps>=({navigation}) => {

        const [count, setCount] = useState(1);
      
        const handleIncrement = () => {
          setCount(count + 1);
        };
      
        const handleDecrement = () => {
          if (count > 0) {
            setCount(count - 1);
          }
        };  

    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source = {require('../assets/img/arrow-left.png')} style ={{width: 20, height: 20}}/>
                    </TouchableOpacity>
                    <Text style ={{ fontSize: 20, color: '#2F2D2C', fontWeight: 600, textAlign: 'center', marginHorizontal: 'auto' }}>Order</Text>
                </View>
                <View style={styles.optionOrder}>
                    <TouchableOpacity style ={{ backgroundColor: '#C67C4E', padding: 10, width: 160, borderStartStartRadius: 10, borderStartEndRadius: 10}}>
                        <Text style ={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Deliver</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style ={{ backgroundColor: '#F2F2F2', padding: 10, width: 160, borderEndStartRadius: 10, borderEndEndRadius: 10 }}>
                        <Text style ={{ color: '#2F2D2C', fontSize: 18, textAlign: 'center' }}>Pick Up</Text>
                    </TouchableOpacity>
                </View>
                <Text style = {{ color: '#2F2D2C', fontWeight: 'bold', fontSize: 18, marginVertical: 10 }}>Delivery Address</Text>
                <Text style = {{ color: '#2F2D2C', fontWeight: 'bold', fontSize: 16, marginBottom: 5}}> Jl. Gangnam</Text>
                <Text style = {{ color: '#808080', fontWeight: 400, fontSize: 16, marginBottom: 10}}>Kpg. Gangnam No. 620, Seoul, South Korea</Text>
                <View style= {{ flexDirection: 'row' }}>
                <TouchableOpacity style ={{ borderWidth: 2, borderColor: '#DEDEDE', borderRadius: 20, padding: 10, flexDirection: 'row', width:150, justifyContent: 'center', marginEnd: 10 }}>
                    <Image source = {require('../assets/img/edit.png')} style = {{width: 20, height: 20}}/>
                    <Text style ={{ color: '#303336', marginHorizontal: 10 }}>Edit Address</Text>
                </TouchableOpacity>
                <TouchableOpacity style ={{ borderWidth: 2, borderColor: '#DEDEDE', borderRadius: 20, padding: 10, flexDirection: 'row', width:150, justifyContent: 'center' }}>
                    <Image source = {require('../assets/img/note.png')} style = {{width: 20, height: 20}}/>
                    <Text style ={{ color: '#303336', marginHorizontal: 10 }}>Add Note</Text>
                </TouchableOpacity>
                </View>
                <View style={{ borderWidth: 1, borderColor: '#EAEAEA', width:'auto', height:1, marginTop: 20, marginEnd: 10 }}></View>
                <View style = {styles.calculate}>
                    <Image source={require('../assets/img/cappuccino.png')} style = {{width: 55, height: 55, borderRadius: 12}}/>
                    <View style= {styles.choice}>
                    <Text style = {{ color: '#2F2D2C', fontWeight: 600 }}>Cappucino</Text>
                    <Text>With Chocolate</Text>
                    </View>
                    <View style={styles.calculator}>
                        <TouchableOpacity onPress={handleDecrement} style={styles.button}>
                            <Text style={styles.buttonText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.countText}>{count}</Text>
                        <TouchableOpacity onPress={handleIncrement} style={styles.button}>
                            <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
                     </View>
                </View>
                <View style={{ borderWidth: 1, borderColor: '#EAEAEA', width:'auto', height:1, marginTop: 20, marginEnd: 10 }}></View>
                <View style={styles.discount}>
                    <Image source = {require('../assets/img/Discount.png')} style ={{width : 24, height: 24}}/>
                    <Text style ={{ fontWeight: 600, fontSize: 15, marginStart: -70, textAlign: 'center', color: '#2F2D2C'}}>1 Discount is Applied</Text>
                    <Image source = {require ('../assets/img/arrow-right.png')} style ={{ width: 24, height: 24}}/>
                </View>
                <Text style = {{ fontWeight: 600, fontSize: 18, color: '#2F2D2C', marginBottom: 10 }}>Payment Summary</Text>
                <View style = {{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                    <Text style ={{ fontSize: 14, fontWeight: 400, color: '#2F2D2C'}}>Price</Text>
                    <Text style ={{ fontSize: 14, fontWeight: 600, color: '#2F2D2C'}}>$ 4.53</Text>
                </View>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between', padding: 5}}>
                    <Text style ={{ fontSize: 14, fontWeight: 400, color: '#2F2D2C'}}>Delivery Free</Text>
                    <View><Text style ={{ fontSize: 14, fontWeight: 400, color: '#2F2D2C', textDecorationLine: 'line-through', marginStart: 160}}>$ 2.0</Text></View><Text style ={{ fontSize: 14, fontWeight: 600, color: '#2F2D2C'}}>$ 1.0</Text>
                </View>
                <View style={{ borderWidth: 1, borderColor: '#EAEAEA', width:'auto', height:1, marginTop: 20, marginEnd: 10 }}></View>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between', padding: 5, marginVertical: 10}}>
                    <Text style ={{ fontSize: 14, fontWeight: 400, color: '#2F2D2C'}}>Total Payment</Text>
                    <Text style ={{ fontSize: 14, fontWeight: 600, color: '#2F2D2C', marginStart: 160}}>$ 5.53</Text>
                </View>
            </ScrollView>
            <View style = {styles.conPayment}>
            <View style = {styles.pembayaran }>
                <Image source = {require ('../assets/img/moneys.png')} style ={{ width: 24, height: 24 }}/>
                <View style ={{ backgroundColor: '#F6F6F6', borderRadius: 15, width: 150, flexDirection: 'row', alignItems: 'center', marginEnd: 80 }}>
                <TouchableOpacity style ={{ backgroundColor: '#C67C4E', padding: 2, borderRadius: 15, width: 75, height: 25}}>
                    <Text style ={{ color: 'white', textAlign: 'center', fontSize: 14 }}>Cash</Text>
                    </TouchableOpacity>
                    <Text style = {{ color: '#2F2D2C', marginStart: 10, fontWeight: 400 }}>$ 5.53</Text>
                    </View>
                    <Image source = {require ('../assets/img/dots.png')} style = {{width: 24, height: 24}}/>
            </View>
            <TouchableOpacity style = {{ backgroundColor: '#C67C4E', borderRadius: 20, width: 'auto', height: 50, marginVertical: 10 }}>
                    <Text style ={{ color: 'white', fontWeight:400, textAlign: 'center', marginVertical: 'auto', fontSize: 15, letterSpacing: 2 }}>Order</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}

export default Order;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,
        
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: 'auto',
        marginBottom: 15,
    }, 
    optionOrder: {
        width: 'auto',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    discount:{
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#EAEAEA',
        padding: 15,
        marginVertical: 15,
        borderRadius: 20,
        width: 320,
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    calculate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10
    },
    choice: {
        marginStart: -30
    },
    calculator: {
        flexDirection: 'row'
    },
    button: {
        width: 30,
        height: 30,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: '#ddd',
      },
      buttonText: {
        fontSize: 18,
        color: '#333',
      },
      countText: {
        fontSize: 18,
        marginHorizontal: 20,
      },
      pembayaran : {
        flexDirection: 'row',
        padding: 5,
        justifyContent:'space-between',
        marginBottom: 10
    }, 
    conPayment: {
        width: 'auto',
        height: 140,
        // backgroundColor: 'pink',
        paddingVertical: 10,
        borderRadius: 20
      }
})