import { useEffect } from 'react';
import { useAtom, useSetAtom } from 'jotai';
import { View, StyleSheet, Image } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';

import CloseDrawerButton from 'features/layout/ui/CloseDrowerButton';
import MenuUserProfileInfo from 'entities/user/ui/MenuUserProfileInfo';
import MenuItem, { IMenuItem } from 'entities/layout/ui/MenuItem';
import { loadProfileAtom } from 'entities/user/model/user.state';
import { logoutAtom } from 'entities/auth/model';
import CustomLink from 'shared/CustomLink';
import { Colors, Gaps } from 'shared/tokens';

import { CrownIcon, EducationIcon, PersonIcon } from 'assets/icons';

const MENU_ITEMS_DATA: Pick<IMenuItem, 'text' | 'icon' | 'path'>[] = [
  { text: 'Профиль', icon: <PersonIcon />, path: 'profile' },
  { text: 'Курсы', icon: <EducationIcon />, path: 'index' },
  { text: 'Клуб', icon: <CrownIcon />, path: 'club' },
];

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const logout = useSetAtom(logoutAtom);
  const [{ profile }, loadProfile] = useAtom(loadProfileAtom);

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={s.scrollView}>
      <View style={s.content}>
        <CloseDrawerButton navigation={props.navigation} />
        {profile && <MenuUserProfileInfo {...profile} />}

        {MENU_ITEMS_DATA.map(itemData => (
          <MenuItem key={itemData.path} {...itemData} drawer={props} />
        ))}
      </View>

      <View style={s.footer}>
        <CustomLink text="Выход" href="/login" onPress={logout} />
        <Image source={require('assets/logo.png')} style={s.logo} resizeMode="contain" />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const s = StyleSheet.create({
  scrollView: { flex: 1, backgroundColor: Colors.black, paddingStart: 0, paddingEnd: 0 },
  content: { flex: 1 },
  footer: { alignItems: 'center', gap: Gaps.g50 },
  logo: { width: 160 },
});
