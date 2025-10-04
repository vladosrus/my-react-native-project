import { FC, useState } from 'react';
import { Pressable, TextInput, TextInputProps, View } from 'react-native';

import { Colors } from 'shared/tokens';
import { EyeClosedIcon, EyeOpenedIcon } from 'assets/icons';

import s from './Input.styles';

interface IInput extends TextInputProps {
  isPassword?: boolean;
}

const Input: FC<IInput> = ({ isPassword, ...props }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  return (
    <View>
      <TextInput
        placeholderTextColor={Colors.grey}
        style={s.input}
        secureTextEntry={isPassword && !isPasswordVisible}
        {...props}
      />

      {isPassword && (
        <Pressable onPress={() => setIsPasswordVisible(state => !state)} style={s.eyeIcon}>
          {isPasswordVisible ? <EyeOpenedIcon /> : <EyeClosedIcon />}
        </Pressable>
      )}
    </View>
  );
};

export default Input;
