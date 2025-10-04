import { Text, View } from 'react-native';

import { Colors } from 'shared/tokens';
import CustomLink from 'shared/CustomLink';

const MyCourses = () => (
  <View>
    <Text style={{ color: Colors.white }}>Мои курсы</Text>
    <CustomLink href="/login" text="На логин" />
  </View>
);

export default MyCourses;
