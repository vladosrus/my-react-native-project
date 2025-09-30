import { FC, useEffect, useState } from 'react';
import { Animated, Text } from 'react-native';

import s from './Notification.styles';

interface INotification {
  text?: string;
}

const Notification: FC<INotification> = ({ text }) => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const animationValue = new Animated.Value(-100);

  const onEnterText = () =>
    Animated.timing(animationValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();

  useEffect(() => {
    if (!text) return;
    setIsShown(true);

    const timerId = setTimeout(() => setIsShown(false), 3000);

    return () => clearTimeout(timerId);
  }, [text]);

  if (!isShown) return null;

  return (
    <Animated.View
      style={{ ...s.container, transform: [{ translateY: animationValue }] }}
      onLayout={onEnterText}
    >
      <Text style={s.text}>{text}</Text>
    </Animated.View>
  );
};

export default Notification;
