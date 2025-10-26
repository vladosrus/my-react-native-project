import { useAtomValue } from 'jotai';
import { Redirect } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Drawer } from 'expo-router/drawer';

import CustomDrawer from 'widgets/layout/ui/CustomDrawer';
import MenuButton from 'features/layout/ui/MenuButton';
import { authAtom } from 'entities/auth/model/auth.state';
import { Colors, FontFamilies, FontSizes } from 'shared/tokens';

const AppLayout = () => {
  const { access_token } = useAtomValue(authAtom);

  if (!access_token) {
    return <Redirect href="/login" />;
  }

  return (
    <Drawer
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={({ navigation }) => ({
        headerStyle: s.header,
        headerTitleStyle: s.headerTitle,
        headerTitleAlign: 'center',
        headerLeft: () => <MenuButton navigation={navigation} />,
        sceneStyle: s.scene,
      })}
    >
      <Drawer.Screen name="index" options={{ title: 'Мои курсы' }} />
      <Drawer.Screen name="course/[type]" />
      <Drawer.Screen name="profile" options={{ title: 'Профиль' }} />
      <Drawer.Screen name="club" options={{ title: 'Клуб' }} />
    </Drawer>
  );
};

export default AppLayout;

const s = StyleSheet.create({
  header: { backgroundColor: Colors.greyDark, shadowColor: Colors.greyDark },
  headerTitle: { color: Colors.white, fontFamily: FontFamilies.firaSans, fontSize: FontSizes.f20 },
  scene: { backgroundColor: Colors.black },
});
