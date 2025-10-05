import { Image, View } from 'react-native';

import Input from 'shared/Input';
import Button from 'shared/Button';
import CustomLink from 'shared/CustomLink';

import s from './styles';

const RestorePage = () => (
  <View style={s.contentContainer}>
    <Image source={require('assets/logo.png')} style={s.logo} resizeMode="contain" />

    <View style={s.form}>
      <Input placeholder="Новый пароль" />

      <Input isPassword placeholder="Повторите новый пароль" />

      <Button text="Восстановить пароль" />
    </View>

    <CustomLink href="/login" text="Войти" />
  </View>
);

export default RestorePage;
