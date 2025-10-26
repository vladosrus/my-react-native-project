import { StyleSheet } from 'react-native';

import { Colors, Gaps } from 'shared/tokens';

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black,
  },
  logo: { width: 220 },
  contentContainer: {
    width: '100%',
    paddingHorizontal: 55,
    gap: Gaps.g50,
    alignItems: 'center',
  },
  form: { gap: Gaps.g16, alignSelf: 'stretch' },
});

export default styles;
