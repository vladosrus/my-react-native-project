import { Image, StyleSheet, Text, View } from 'react-native';

import Input from '../shared/Input';
import Button from '../shared/Button';
import { Colors, Gaps } from '../shared/tokens';
import Notification from '../shared/Notification';

const App = () => (
  <View style={s.pageContainer}>
    <Notification text="Неправильный логин или пароль" />

    <View style={s.contentContainer}>
      <Image source={require('../assets/logo.png')} style={s.logo} resizeMode="contain" />

      <View style={s.form}>
        <Input placeholder="Email" />
        <Input isPassword placeholder="Пароль" />
        <Button text="Войти" />
      </View>

      <Text style={{ color: Colors.link }}>Восстановить пароль</Text>
    </View>
  </View>
);

export default App;

const s = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black,
  },
  logo: { width: 220 },
  contentContainer: {
    width: '100%',
    paddingHorizontal: 55,
    gap: Gaps.g50,
    alignItems: 'center',
  },
  form: { gap: Gaps.g16, alignSelf: 'stretch' },
});
