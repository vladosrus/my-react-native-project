import { StyleSheet } from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';

const s = StyleSheet.create({
  button: {
    width: '100%',
    height: 58,
    borderRadius: Radius.r10,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: { color: Colors.white, fontSize: Fonts.f18 },
});

export default s;
