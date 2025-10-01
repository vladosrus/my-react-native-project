import { FC } from 'react';
import { Animated, GestureResponderEvent, Pressable, PressableProps, Text } from 'react-native';

import s from './Button.styles';
import { Colors } from '../tokens';

interface IButton extends PressableProps {
  text: string;
}

const Button: FC<IButton> = ({ text, onPressIn, onPressOut, ...props }) => {
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
        <Text style={s.btnText}>{text}</Text>
      </Animated.View>
    </Pressable>
  );
};

export default Button;
