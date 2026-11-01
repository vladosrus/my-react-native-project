import { useEffect } from 'react';
import { Slot } from 'expo-router';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { FontFamilies } from 'shared/tokens';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [isFontsLoaded, error] = useFonts({
    [FontFamilies.firaSans]: require('assets/fonts/FiraSans-Regular.ttf'),
    [FontFamilies.firaSansSemiBold]: require('assets/fonts/FiraSans-SemiBold.ttf'),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (isFontsLoaded) SplashScreen.hideAsync();
  }, [isFontsLoaded]);

  if (!isFontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />

      <Slot />
    </SafeAreaProvider>
  );
};

export default RootLayout;
