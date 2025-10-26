import { View, StyleSheet, Image, Text } from 'react-native';

import { User } from 'entities/user/model/user.interfaces';
import { Colors, FontFamilies, FontSizes, Gaps } from 'shared/tokens';

import { ProfileIcon } from 'assets/icons';

const MenuUserProfileInfo = ({ name, surname, photo }: User) => (
  <View style={s.container}>
    {photo ? <Image style={s.image} source={{ uri: photo }} /> : <ProfileIcon style={s.image} />}

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
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  name: {
    fontFamily: FontFamilies.firaSans,
    fontSize: FontSizes.f16,
    color: Colors.white,
  },
});
