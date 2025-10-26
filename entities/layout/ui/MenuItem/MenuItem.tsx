import { FC, ReactNode, useState } from 'react';
import { View, StyleSheet, Text, Pressable, PressableProps } from 'react-native';
import { DrawerContentComponentProps } from 'node_modules/@react-navigation/drawer/lib/typescript/src/types';

import { Colors, FontFamilies, FontSizes, Gaps } from 'shared/tokens';

export interface IMenuItem extends PressableProps {
  drawer: DrawerContentComponentProps;
  icon: ReactNode;
  text: string;
  path: string;
}

const MenuItem: FC<IMenuItem> = ({ drawer, icon, text, path, ...props }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const isActive = drawer.state.routes[drawer.state.index].name === path;

  return (
    <Pressable
      {...props}
      onPress={() => drawer.navigation.navigate(path)}
      onPressIn={() => setIsClicked(true)}
      onPressOut={() => setIsClicked(false)}
    >
      <View
        style={{
          ...s.container,
          borderColor: isActive ? Colors.primary : Colors.black,
          backgroundColor: isClicked || isActive ? Colors.violetDark : Colors.black,
        }}
      >
        {icon}

        <Text style={s.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default MenuItem;

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Gaps.g20,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRightWidth: 5,
  },
  text: { fontFamily: FontFamilies.firaSans, fontSize: FontSizes.f16, color: Colors.white },
});
