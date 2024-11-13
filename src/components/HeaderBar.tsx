import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import ProfilePic from './ProfilePic';

interface HeaderBarProps {
  title?: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({title}) => {
  return (
    <View style={styles.HeaderContainer}>
      <Text style={styles.HeaderText}>{title}</Text>
      <View style={styles.profile}>
        <View style ={{ flexDirection: 'column' }}>
          <Text style={styles.NameText}>Amelinda Renjani</Text>
          <Text style={styles.LocationText}>Sukabumi, Indonesia</Text>
        </View>
      <ProfilePic />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    padding: SPACING.space_20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_extrabold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryOrangeHex,
  },
  NameText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDarkGreyHex,
    marginEnd: SPACING.space_15
  },
  LocationText: {
    fontFamily: FONTFAMILY.poppins_thin,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryDarkGreyHex,
    marginEnd: SPACING.space_15
  },
  profile: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
  }
});

export default HeaderBar;
