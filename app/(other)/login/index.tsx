import { Image, View } from 'react-native';

import Input from 'shared/Input';
import Button from 'shared/Button';
import CustomLink from 'shared/CustomLink';
import Notification from 'shared/Notification';

import s from './styles';

const LoginPage = () => (
  <>
    <Notification text="Неправильный логин или пароль" />

    <View style={s.contentContainer}>
      <Image source={require('assets/logo.png')} style={s.logo} resizeMode="contain" />

      <View style={s.form}>
        <Input placeholder="Email" />
        <Input isPassword placeholder="Пароль" />
        <Button text="Войти" />
      </View>

      <CustomLink href="/error" text="Восстановить пароль" />
    </View>
  </>
);

export default LoginPage;
