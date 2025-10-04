import { StyleSheet } from 'react-native';

import { Colors, FontFamilies, Radius } from 'shared/tokens';

const s = StyleSheet.create({
  input: {
    height: 58,
    borderRadius: Radius.r10,
    backgroundColor: Colors.violetDark,
    paddingHorizontal: 26,
    fontSize: 16,
    fontFamily: FontFamilies.firaSans,
    color: Colors.white,
  },
  eyeIcon: { position: 'absolute', right: 0, paddingHorizontal: 24, paddingVertical: 17 },
});

export default s;
