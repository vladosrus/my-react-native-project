import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import ImageUploader from 'shared/ImageUploader';
import { Gaps } from 'shared/tokens';
import Avatar from 'shared/Avatar';

const Profile = () => {
  const [image, setImage] = useState<string | null>(null);

  return (
    <View style={s.pageContainer}>
      <View style={s.photoContainer}>
        <Avatar image={image} imageStyle={s.image} />

        <ImageUploader onUpload={setImage} onError={e => console.log(e)} />
      </View>
    </View>
  );
};

export default Profile;

const s = StyleSheet.create({
  pageContainer: { padding: 30 },
  photoContainer: { flexDirection: 'row', gap: Gaps.g20, alignItems: 'center' },
  image: { marginLeft: 10 },
});
