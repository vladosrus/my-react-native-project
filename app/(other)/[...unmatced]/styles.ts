import { StyleSheet } from 'react-native';

import { Colors, FontFamilies, FontSizes, Gaps } from 'shared/tokens';

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black,
  },
  contentContainer: { width: '100%', paddingHorizontal: 35, gap: Gaps.g50, alignItems: 'center' },
  illustration: { width: 204, height: 282 },
  mainText: {
    color: Colors.white,
    textAlign: 'center',
    fontFamily: FontFamilies.firaSans,
    fontSize: FontSizes.f18,
  },
  link: { color: Colors.link, fontFamily: FontFamilies.firaSans, fontSize: FontSizes.f18 },
});

export default styles;
