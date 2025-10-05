import { router } from 'expo-router';
import { Image, View } from 'react-native';
import { useAtom, useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';

import { authAtom, loginAtom, LoginRequest } from 'entities/auth/model';
import Notification from 'shared/Notification';
import CustomLink from 'shared/CustomLink';
import Button from 'shared/Button';
import Input from 'shared/Input';

import s from './styles';

const LoginPage = () => {
  const setAuth = useSetAtom(authAtom);
  const [{ access_token, isLoading, error }, login] = useAtom(loginAtom);
  const [formState, setFormState] = useState<LoginRequest>({ email: '', password: '' });

  const formSubmit = () => {
    if (!formState.email) {
      setAuth({ access_token: null, isLoading: false, error: 'Укажите пароль' });
      return;
    }
    if (!formState.password) {
      setAuth({ access_token: null, isLoading: false, error: 'Укажите пароль' });
      return;
    }

    login(formState);
  };

  useEffect(() => {
    if (access_token) router.replace('/');
  }, [access_token]);

  return (
    <>
      <Notification text={error} />

      <View style={s.contentContainer}>
        <Image source={require('assets/logo.png')} style={s.logo} resizeMode="contain" />

        <View style={s.form}>
          <Input
            placeholder="Email"
            onChangeText={text => setFormState(state => ({ ...state, email: text }))}
          />

          <Input
            isPassword
            placeholder="Пароль"
            onChangeText={text => setFormState(state => ({ ...state, password: text }))}
          />

          <Button text="Войти" onPress={formSubmit} isLoading={isLoading} />
        </View>

        <CustomLink href="/restore" text="Восстановить пароль" />
      </View>
    </>
  );
};

export default LoginPage;
