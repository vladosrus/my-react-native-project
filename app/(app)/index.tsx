import { useSetAtom } from 'jotai';
import { Text, View } from 'react-native';

import { logoutAtom } from 'entities/auth/model';
import CustomLink from 'shared/CustomLink';
import { Colors } from 'shared/tokens';

const MyCourses = () => {
  const logout = useSetAtom(logoutAtom);

  return (
    <View>
      <Text style={{ color: Colors.white }}>Мои курсы</Text>
      <CustomLink href="/login" text="На логин" />

      <Text style={{ color: Colors.white }} onPress={() => logout()}>
        Разлогиниться
      </Text>
    </View>
  );
};

export default MyCourses;
