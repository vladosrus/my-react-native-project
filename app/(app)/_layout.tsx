import { View } from 'react-native';
import { useAtomValue } from 'jotai';
import { Redirect, Slot } from 'expo-router';

import { authAtom } from 'entities/auth/model/auth.state';

import s from './styles';

const AppLayout = () => {
  const { access_token } = useAtomValue(authAtom);

  if (!access_token) {
    return <Redirect href="/login" />;
  }

  return (
    <>
      <View style={s.pageContainer}>
        <Slot />
      </View>
    </>
  );
};

export default AppLayout;
