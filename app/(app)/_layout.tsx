import { Slot } from 'expo-router';
import { View } from 'react-native';

import s from './styles';

const AppLayout = () => {
  return (
    <>
      <View style={s.pageContainer}>
        <Slot />
      </View>
    </>
  );
};

export default AppLayout;
