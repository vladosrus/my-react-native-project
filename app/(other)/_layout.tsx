import { Slot } from 'expo-router';
import { View } from 'react-native';

import s from './styles';

const OtherLayout = () => {
  return (
    <View style={s.pageContainer}>
      <Slot />
    </View>
  );
};

export default OtherLayout;
