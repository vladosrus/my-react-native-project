import { Image, View } from 'react-native';

import Input from 'shared/Input';
import Button from 'shared/Button';
import CustomLink from 'shared/CustomLink';

import s from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const RestorePage = () => (
  <SafeAreaView style={{ ...s.pageContainer }}>
    <View style={s.contentContainer}>
      <Image source={require('assets/logo.png')} style={s.logo} resizeMode="contain" />

      <View style={s.form}>
        <Input isPassword placeholder="Новый пароль" />

        <Input isPassword placeholder="Повторите новый пароль" />

        <Button text="Восстановить пароль" />
      </View>

      <CustomLink href="/login" text="Войти" />
    </View>
  </SafeAreaView>
);

export default RestorePage;
