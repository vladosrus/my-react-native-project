import { View, StyleSheet, Text } from 'react-native';

import { User } from 'entities/user/model/user.interfaces';
import { Colors, FontFamilies, FontSizes, Gaps } from 'shared/tokens';
import Avatar from 'shared/Avatar';

const MenuUserProfileInfo = ({ name, surname, photo }: User) => (
  <View style={s.container}>
    <Avatar image={photo} />

    <Text style={s.name}>
      {name} {surname}
    </Text>
  </View>
);

export default MenuUserProfileInfo;

const s = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 40,
    gap: Gaps.g8,
  },
  name: {
    fontFamily: FontFamilies.firaSans,
    fontSize: FontSizes.f16,
    color: Colors.white,
  },
});
