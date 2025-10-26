import { Animated, Text } from 'react-native';
import { FC, useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import s from './Notification.styles';

interface INotification {
  text?: string | null;
}

const Notification: FC<INotification> = ({ text }) => {
  const { top } = useSafeAreaInsets();
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
      style={{ ...s.container, top: top, transform: [{ translateY: animationValue }] }}
      onLayout={onEnterText}
    >
      <Text style={s.text}>{text}</Text>
    </Animated.View>
  );
};

export default Notification;
