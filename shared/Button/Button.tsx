import {
  Text,
  Animated,
  Pressable,
  PressableProps,
  ActivityIndicator,
  GestureResponderEvent,
} from 'react-native';
import { FC } from 'react';

import { Colors } from 'shared/tokens';

import s from './Button.styles';

interface IButton extends PressableProps {
  text: string;
  isLoading?: boolean;
}

const Button: FC<IButton> = ({ text, isLoading, onPressIn, onPressOut, ...props }) => {
  const animationValue = new Animated.Value(100);
  const color = animationValue.interpolate({
    inputRange: [0, 100],
    outputRange: [Colors.primaryHover, Colors.primary],
  });

  const hoverIn = (e: GestureResponderEvent) => {
    Animated.timing(animationValue, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false,
    }).start();

    if (onPressIn) onPressIn(e);
  };

  const hoverOut = (e: GestureResponderEvent) => {
    Animated.timing(animationValue, {
      toValue: 100,
      duration: 100,
      useNativeDriver: false,
    }).start();

    if (onPressOut) onPressOut(e);
  };

  return (
    <Pressable {...props} onPressIn={hoverIn} onPressOut={hoverOut}>
      <Animated.View style={{ ...s.button, backgroundColor: color }}>
        {!isLoading && <Text style={s.btnText}>{text}</Text>}

        {isLoading && <ActivityIndicator size="large" color={Colors.white} />}
      </Animated.View>
    </Pressable>
  );
};

export default Button;
