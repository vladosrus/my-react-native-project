import { Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { Colors } from 'shared/tokens';
import CustomLink from 'shared/CustomLink';

const CoursePage = () => {
  const { type } = useLocalSearchParams();

  return (
    <View>
      <Text style={{ color: Colors.white }}>{type}</Text>
      <CustomLink href="/login" text="На логин" />
    </View>
  );
};

export default CoursePage;
