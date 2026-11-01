import { FC } from 'react';
import { StyleSheet, Image, StyleProp, ImageStyle } from 'react-native';

import { ProfileIcon } from 'assets/icons';

interface IAvatar {
  image?: string | null;
  imageStyle?: StyleProp<ImageStyle>;
}

const Avatar: FC<IAvatar> = ({ image, imageStyle }) => (
  <>
    {image ? (
      <Image style={[s.image, imageStyle]} source={{ uri: image }} />
    ) : (
      <ProfileIcon style={[s.image, imageStyle]} />
    )}
  </>
);

export default Avatar;

const s = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});
