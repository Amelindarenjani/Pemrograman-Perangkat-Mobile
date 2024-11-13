import React, {useRef, useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
} from 'react-native';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import {FlatList} from 'react-native';
import ProductCard from '../components/ProductCard';
import {Dimensions} from 'react-native';

const getCategoriesFromData = (data: any) => {
  let temp: any = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] == undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name]++;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
};

const getProductList = (category: string, data: any) => {
  if (category == 'All') {
    return data;
  } else {
    let productlist = data.filter((item: any) => item.name == category);
    return productlist;
  }
};

const HomeScreen = ({navigation}: any) => {
  const ProductList = useStore((state: any) => state.ProductList);
  const PackageList = useStore((state: any) => state.PackageList);
  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const [categories, setCategories] = useState(
    getCategoriesFromData(ProductList),
  );
  const [searchText, setSearchText] = useState('');
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedProduct, setSortedProduct] = useState(
    getProductList(categoryIndex.category, ProductList),
  );

  const ListRef: any = useRef<FlatList>();
  const tabBarHeight = useBottomTabBarHeight();

  const searchProduct = (search: string) => {
    if (search != '') {
      ListRef?.current?.scrollToOffset({
        animated: true,
        offset: 0,
      });
      setCategoryIndex({index: 0, category: categories[0]});
      setSortedProduct([
        ...ProductList.filter((item: any) =>
          item.name.toLowerCase().includes(search.toLowerCase()),
        ),
      ]);
    }
  };

  const resetSearchProduct = () => {
    ListRef?.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
    setCategoryIndex({index: 0, category: categories[0]});
    setSortedProduct([...ProductList]);
    setSearchText('');
  };

  const ProductCardAddToCart = ({
    id,
    index,
    name,
    fungsi,
    imagelink_square,
    special_ingredient,
    type,
    prices,
  }: any) => {
    addToCart({
      id,
      index,
      name,
      fungsi,
      imagelink_square,
      special_ingredient,
      type,
      prices,
    });
    calculateCartPrice();
    ToastAndroid.showWithGravity(
      `${name} is Added to Cart`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        {/* App Header */}
        <HeaderBar title='Home'/>

        <Text style={styles.ScreenTitle}>
          Beauty starts here. {'\n'}Find the best product for you
        </Text>

        {/* Search Input */}

        <View style={styles.InputContainerComponent}>
          <TouchableOpacity
            onPress={() => {
              searchProduct(searchText);
            }}>
          </TouchableOpacity>
          <TextInput
            placeholder="Find your product..."
            value={searchText}
            onChangeText={text => {
              setSearchText(text);
              searchProduct(text);
            }}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.TextInputContainer}
          />
          {searchText.length > 0 ? (
            <TouchableOpacity
              onPress={() => {
                resetSearchProduct();
              }}>
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>

        {/* Category Scroller */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CategoryScrollViewStyle}>
          {categories.map((data, index) => (
            <View
              key={index.toString()}
              style={styles.CategoryScrollViewContainer}>
              <TouchableOpacity
                style={styles.CategoryScrollViewItem}
                onPress={() => {
                  ListRef?.current?.scrollToOffset({
                    animated: true,
                    offset: 0,
                  });
                  setCategoryIndex({index: index, category: categories[index]});
                  setSortedProduct([
                    ...getProductList(categories[index], ProductList),
                  ]);
                }}>
                <Text
                  style={[
                    styles.CategoryText,
                    categoryIndex.index == index
                      ? {color: COLORS.primaryOrangeHex}
                      : {},
                  ]}>
                  {data}
                </Text>
                {categoryIndex.index == index ? (
                  <View style={styles.ActiveCategory} />
                ) : (
                  <></>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Product Flatlist */}

        <FlatList
          ref={ListRef}
          horizontal
          ListEmptyComponent={
            <View style={styles.EmptyListContainer}>
              <Text style={styles.CategoryText}>No Product Available</Text>
            </View>
          }
          showsHorizontalScrollIndicator={false}
          data={sortedProduct}
          contentContainerStyle={styles.FlatListContainer}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push('Details', {
                    index: item.index,
                    id: item.id,
                    type: item.type,
                  });
                }}>
                <ProductCard
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  fungsi={item.fungsi}
                  imagelink_square={item.imagelink_square}
                  name={item.name}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item.prices[2]}
                  buttonPressHandler={ProductCardAddToCart}
                />
              </TouchableOpacity>
            );
          }}
        />

        <Text style={styles.ProductPackageTitle}>Package</Text>

        {/* Package Flatlist */}

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={PackageList}
          contentContainerStyle={[
            styles.FlatListContainer,
            {marginBottom: tabBarHeight},
          ]}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push('Details', {
                    index: item.index,
                    id: item.id,
                    type: item.type,
                  });
                }}>
                <ProductCard
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  fungsi={item.fungsi}
                  imagelink_square={item.imagelink_square}
                  name={item.name}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item.prices[2]}
                  buttonPressHandler={ProductCardAddToCart}
                />
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryWhiteHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScreenTitle: {
    fontSize: FONTSIZE.size_24,
    fontFamily: FONTFAMILY.poppins_extrabold,
    color: COLORS.primaryLightGreyHex,
    paddingLeft: SPACING.space_20,
  },
  InputContainerComponent: {
    flexDirection: 'row',
    margin: SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.pastelLightGrey,
    alignItems: 'center',
  },
  InputIcon: {
    marginHorizontal: SPACING.space_20,
  },
  TextInputContainer: {
    flex: 1,
    height: SPACING.space_20 * 2.5,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDarkGreyHex,
    paddingHorizontal: 15
  },
  CategoryScrollViewStyle: {
    paddingHorizontal: SPACING.space_15,
    marginBottom: SPACING.space_20,
  },
  CategoryScrollViewContainer: {
    paddingHorizontal: SPACING.space_10,
  },
  CategoryScrollViewItem: {
    alignItems: 'center',
  },
  CategoryText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLightGreyHex,
    marginBottom: SPACING.space_4,
  },
  ActiveCategory: {
    height: SPACING.space_10,
    width: SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryOrangeHex,
  },
  FlatListContainer: {
    gap: SPACING.space_16,
    paddingHorizontal: SPACING.space_20,
  },
  EmptyListContainer: {
    width: Dimensions.get('window').width - SPACING.space_30 * 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.space_36 * 3.6,
  },
  ProductPackageTitle: {
    fontSize: FONTSIZE.size_18,
    marginLeft: SPACING.space_20,
    marginVertical: SPACING.space_12,
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.secondaryBlackRGBA,
  },
});

export default HomeScreen;
