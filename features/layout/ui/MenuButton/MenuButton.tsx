import { FC, useState } from 'react';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { View, StyleSheet, Pressable, PressableProps } from 'react-native';
import { ParamListBase } from 'node_modules/@react-navigation/routers/lib/typescript/src/types';

import { Colors } from 'shared/tokens';

import { MenuIcon } from 'assets/icons';

interface IMenuButton extends PressableProps {
  navigation: DrawerNavigationProp<ParamListBase, string, undefined>;
}

const MenuButton: FC<IMenuButton> = ({ navigation, ...props }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <Pressable
      {...props}
      onPressIn={() => setIsClicked(true)}
      onPressOut={() => setIsClicked(false)}
      onPress={() => navigation.toggleDrawer()}
    >
      <View
        style={{ ...s.button, backgroundColor: isClicked ? Colors.violetDark : Colors.greyDark }}
      >
        <MenuIcon />
      </View>
    </Pressable>
  );
};

export default MenuButton;

const s = StyleSheet.create({
  button: { alignItems: 'center', justifyContent: 'center', flex: 1, paddingHorizontal: 20 },
});
