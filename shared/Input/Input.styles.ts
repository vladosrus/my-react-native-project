import { StyleSheet } from 'react-native';
import { Colors, Radius } from '../tokens';

const s = StyleSheet.create({
  input: {
    height: 58,
    borderRadius: Radius.r10,
    backgroundColor: Colors.violetDark,
    paddingHorizontal: 26,
    fontSize: 16,
    color: Colors.white,
  },
  eyeIcon: { position: 'absolute', right: 0, paddingHorizontal: 24, paddingVertical: 17 },
});

export default s;
