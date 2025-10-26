import { FC } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { DrawerNavigationHelpers } from 'node_modules/@react-navigation/drawer/lib/typescript/src/types';

import { CrossIcon } from 'assets/icons';

interface ICloseDrawerButton {
  navigation: DrawerNavigationHelpers;
}

const CloseDrawerButton: FC<ICloseDrawerButton> = ({ navigation }) => (
  <Pressable onPress={() => navigation.closeDrawer()} style={s.button}>
    <View>
      <CrossIcon />
    </View>
  </Pressable>
);

export default CloseDrawerButton;

const s = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -5,
    right: 20,
    zIndex: 10,
  },
});
