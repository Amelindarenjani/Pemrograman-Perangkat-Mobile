import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.location}>
            <Text style={{color: '#B7B7B7', fontWeight: 400, fontSize: 13}}>
              Location
            </Text>
            <Text style={{fontWeight: 600, color: '#DDDDDD', fontSize: 14}}>
              Seoul, South Korea
            </Text>
          </View>
          <Image
            source={require('./assets/korean.jpeg')}
            style={styles.profil}
          />
        </View>
        <TextInput
          style={styles.search}
          placeholder="Search Coffee"></TextInput>
        <View style={styles.banner}>
          <Image
            source={require('./assets/coffee.png')}
            style={styles.bannercoffee}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 33,
              fontWeight: 600,
              lineHeight: 40,
              top: -85,
              left: 10,
            }}>
            Buy One Get One FREE
          </Text>
          <View style={styles.promo}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 13,
                paddingVertical: 'auto',
                fontWeight: 'bold',
              }}>
              Promo
            </Text>
          </View>
          <View style={styles.scrollmenu}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#C67C4E',
                  borderRadius: 12,
                  width: 'auto',
                  height: 35,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  marginEnd: 8,
                }}>
                <Text style={{fontWeight: 600, fontSize: 14, color: 'white'}}>
                  Cappuccino
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  borderRadius: 12,
                  width: 'auto',
                  height: 35,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  marginEnd: 8,
                }}>
                <Text style={{}}>Machiato</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  borderRadius: 12,
                  width: 'auto',
                  height: 35,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  marginEnd: 8,
                }}>
                <Text style={{}}>Latte</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  borderRadius: 12,
                  width: 'auto',
                  height: 35,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  marginEnd: 8,
                }}>
                <Text style={{}}>Americano</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={styles.cards}>
            <View style={styles.card1}>
              <Image
                source={require('./assets/cappuccino.png')}
                style={{width: 140, height: 130, borderRadius: 15}}
              />
              <Text style={styles.rating}>
                <Text style={styles.star}>★</Text> 4.8
              </Text>
              <Text
                style={{
                  fontWeight: 600,
                  color: '#2F2D2C',
                  fontSize: 16,
                  paddingTop: 5,
                  paddingStart: 5,
                  top: -15,
                }}>
                Cappuccino
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 400,
                  color: '#9B9B9B',
                  paddingStart: 5,
                  top: -15,
                }}>
                With Chocolate
              </Text>
              <Text
                style={{
                  fontWeight: 600,
                  fontSize: 18,
                  color: '#2F4B4E',
                  lineHeight: 40,
                  paddingStart: 5,
                  top: -15,
                }}>
                $4.53
              </Text>
              <View style={styles.addButton}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    textAlign: 'center',
                  }}>
                  +
                </Text>
              </View>
            </View>
            <View style={styles.card2}>
              <Image
                source={require('./assets/Machiato.png')}
                style={{width: 140, height: 130, borderRadius: 15}}
              />
              <Text style={styles.rating}>
                <Text style={styles.star}>★</Text> 4.9
              </Text>
              <Text
                style={{
                  fontWeight: 600,
                  color: '#2F2D2C',
                  fontSize: 16,
                  paddingTop: 5,
                  paddingStart: 5,
                  top: -15,
                }}>
                Machiato
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 400,
                  color: '#9B9B9B',
                  paddingStart: 5,
                  top: -15,
                }}>
                With Oat Milk
              </Text>
              <Text
                style={{
                  fontWeight: 600,
                  fontSize: 18,
                  color: '#2F4B4E',
                  lineHeight: 40,
                  paddingStart: 5,
                  top: -15,
                }}>
                $3.90
              </Text>
              <View style={styles.addButton}>
                <Text
                  style={{color: 'white', fontSize: 16, textAlign: 'center'}}>
                  +
                </Text>
              </View>
            </View>
            <View style={styles.card3}>
              <Image
                source={require('./assets/latte.png')}
                style={{width: 140, height: 130, borderRadius: 15}}
              />
              <Text style={styles.rating}>
                <Text style={styles.star}>★</Text> 4.5
              </Text>
              <Text
                style={{
                  fontWeight: 600,
                  color: '#2F2D2C',
                  fontSize: 16,
                  paddingTop: 5,
                  paddingStart: 5,
                  top: -15,
                }}>
                Latte
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 400,
                  color: '#9B9B9B',
                  paddingStart: 5,
                  top: -15,
                }}>
                With Milk
              </Text>
              <Text
                style={{
                  fontWeight: 600,
                  fontSize: 18,
                  color: '#2F4B4E',
                  lineHeight: 40,
                  paddingStart: 5,
                  top: -15,
                }}>
                $5.25
              </Text>
              <View style={styles.addButton}>
                <Text
                  style={{color: 'white', fontSize: 16, textAlign: 'center'}}>
                  +
                </Text>
              </View>
            </View>
            <View style={styles.card4}>
              <Image
                source={require('./assets/americano.png')}
                style={{width: 140, height: 130, borderRadius: 15}}
              />
              <Text style={styles.rating}>
                <Text style={styles.star}>★</Text> 4.0
              </Text>
              <Text
                style={{
                  fontWeight: 600,
                  color: '#2F2D2C',
                  fontSize: 16,
                  paddingTop: 5,
                  paddingStart: 5,
                  top: -15,
                }}>
                Americano
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 400,
                  color: '#9B9B9B',
                  paddingStart: 5,
                  top: -15,
                }}>
                Original Coffee
              </Text>
              <Text
                style={{
                  fontWeight: 600,
                  fontSize: 18,
                  color: '#2F4B4E',
                  lineHeight: 40,
                  paddingStart: 5,
                  top: -15,
                }}>
                $4.50
              </Text>
              <View style={styles.addButton}>
                <Text
                  style={{color: 'white', fontSize: 16, textAlign: 'center'}}>
                  +
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#131313',
    fontFamily: 'sora',
  },
  header: {
    flexDirection: 'row',
  },
  location: {
    fontWeight: 'bold',
    flexDirection: 'column',
  },
  profil: {
    width: 44,
    height: 44,
    borderRadius: 14,
    marginStart: 150,
  },
  search: {
    marginTop: 15,
    width: 315,
    height: 40,
    borderRadius: 16,
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  banner: {
    marginTop: 15,
  },
  bannercoffee: {
    width: 315,
    height: 140,
    borderRadius: 15,
  },
  promo: {
    width: 60,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 15,
    top: -208,
    left: 10,
  },
  scrollmenu: {
    width: 315,
    marginTop: -83,
  },
  cards: {
    paddingVertical: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card1: {
    backgroundColor: 'white',
    paddingHorizontal: 5,
    paddingBottom: 10,
    paddingTop: 5,
    width: 150,
    height: 230,
    borderRadius: 16,
    marginBottom: 15,
  },
  card2: {
    backgroundColor: 'white',
    paddingHorizontal: 5,
    paddingBottom: 10,
    paddingTop: 5,
    width: 150,
    height: 230,
    borderRadius: 16,
    marginStart: 15,
    marginBottom: 15,
  },
  card3: {
    backgroundColor: 'white',
    paddingHorizontal: 5,
    paddingBottom: 10,
    paddingTop: 5,
    width: 150,
    height: 230,
    borderRadius: 16,
    marginBottom: 15,
  },
  card4: {
    backgroundColor: 'white',
    paddingHorizontal: 5,
    paddingBottom: 10,
    paddingTop: 5,
    width: 150,
    height: 230,
    borderRadius: 16,
    marginBottom: 15,
    marginStart: 15,
  },
  addButton: {
    backgroundColor: '#C67C4E',
    padding: 5,
    borderRadius: 10,
    width: 32,
    height: 32,
    left: 100,
    top: -50,
  },
  rating: {
    color: 'white',
    fontWeight: 'bold',
    top: -125,
    left: 10,
    fontSize: 11,
  },
  star: {
    color: 'gold',
  },
});

export default App;
