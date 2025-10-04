import { StyleSheet } from 'react-native';
import { Colors, FontFamilies, FontSizes, Radius } from 'shared/tokens';

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 58,
    borderRadius: Radius.r10,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: { color: Colors.white, fontSize: FontSizes.f18, fontFamily: FontFamilies.firaSans },
});

export default styles;
