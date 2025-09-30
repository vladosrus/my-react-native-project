import { Dimensions, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../tokens';

const s = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.error,
  },
  text: { color: Colors.white, fontSize: Fonts.f16, textAlign: 'center' },
});

export default s;
