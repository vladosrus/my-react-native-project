import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

import { Colors } from 'shared/tokens';

const RootLayout = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: Colors.black,
            paddingTop: insets.top,
          },
        }}
      />
    </SafeAreaProvider>
  );
};

export default RootLayout;
