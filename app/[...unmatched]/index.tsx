import { Image, Text, View } from 'react-native';

import CustomLink from 'shared/CustomLink';

import s from './styles';

const UnmatchedPage = () => (
  <View style={s.pageContainer}>
    <View style={s.contentContainer}>
      <Image
        source={require('assets/illustrations/unmatchedPage.png')}
        style={s.illustration}
        resizeMode="contain"
      />

      <Text style={s.mainText}>
        Ооо... что-то пошло не так. Попробуйте вернуться на главный экран приложения
      </Text>

      <CustomLink href="/" text="На главный экран" />
    </View>
  </View>
);

export default UnmatchedPage;
