import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { View, Platform } from 'react-native';
import "../global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <View style={{ flex: 1, backgroundColor: '#09090B' }}>
          <StatusBar style="light" />
          
          <Stack
            screenOptions={{
              headerShown: false,
              gestureEnabled: true,
              fullScreenGestureEnabled: true,
              gestureDirection: 'horizontal',
              contentStyle: { backgroundColor: '#09090B' },
              // Use platform-specific animations
              animation: Platform.select({
                ios: 'slide_from_right',
                android: 'slide_from_right', 
                default: 'slide_from_right'
              }),
              // Optimized transition config
              transitionSpec: {
                open: {
                  animation: 'spring',
                  config: {
                    stiffness: 1200,
                    damping: 100,
                    mass: 0.8,
                    overshootClamping: false,
                    restDisplacementThreshold: 0.01,
                    restSpeedThreshold: 0.01,
                  },
                },
                close: {
                  animation: 'timing',
                  config: {
                    duration: 200,
                    easing: require('react-native').Easing.out(require('react-native').Easing.ease),
                  },
                },
              },
              // Card style for iOS-like effect
              cardStyleInterpolator: Platform.select({
                ios: ({ current, next, layouts }) => {
                  const progress = current.progress;
                  const nextProgress = next?.progress;
                  
                  const translateX = progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  });

                  const overlayOpacity = progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.05],
                  });

                  const scale = nextProgress
                    ? nextProgress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 0.97],
                      })
                    : 1;

                  return {
                    cardStyle: {
                      transform: [{ translateX }, { scale }],
                    },
                    overlayStyle: {
                      opacity: overlayOpacity,
                    },
                  };
                },
                default: undefined,
              }),
            }}
          >
            <Stack.Screen 
              name="index" 
              options={{ 
                gestureEnabled: false,
              }} 
            />
            <Stack.Screen 
              name="(auth)" 
              options={{ 
                presentation: 'card',
              }} 
            />
            <Stack.Screen 
              name="(tabs)" 
              options={{ 
                gestureEnabled: false,
              }} 
            />
          </Stack>
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}