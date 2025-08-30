import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { View, Platform } from 'react-native';
import "../global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: '#09090B' }}>
      {/* // <StatusBar style="light" backgroundColor="#09090B" translucent={false} /> */}
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>

        

      <Stack
        detachInactiveScreens={true} // 👈 put it here, not inside screenOptions

        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          fullScreenGestureEnabled: true,
          gestureDirection: 'horizontal',
          contentStyle: { backgroundColor: '#09090B' },
          // Use native animations based on platform
          animation: Platform.select({
            ios: 'slide_from_right',
            android: 'slide_from_right', 
            default: 'slide_from_right'
          }),
          // Native-like transitions
          transitionSpec: {
            open: {
              animation: 'spring',
              config: {
                stiffness: 1000,
                damping: 500,
                mass: 3,
                overshootClamping: true,
                restDisplacementThreshold: 0.01,
                restSpeedThreshold: 0.01,
                useNativeDriver: true,
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 200,
                easing: require('react-native').Easing.out(require('react-native').Easing.cubic),
                useNativeDriver: true,
              },
            },
          },
          // iOS-style card interpolation
          // cardStyleInterpolator: ({ current, next, inverted, layouts: { screen } }) => {
          //   const progress = current.progress;
          //   const nextProgress = next?.progress;
            
          //   const translateX = progress.interpolate({
          //     inputRange: [0, 1],
          //     outputRange: [screen.width, 0],
          //     extrapolate: 'clamp',
          //   });

          //   const overlayOpacity = progress.interpolate({
          //     inputRange: [0, 1],
          //     outputRange: [0, 0.07],
          //     extrapolate: 'clamp',
          //   });

          //   const scale = nextProgress
          //     ? nextProgress.interpolate({
          //         inputRange: [0, 1],
          //         outputRange: [1, 0.95],
          //         extrapolate: 'clamp',
          //       })
          //     : 1;

          //   const borderRadius = nextProgress
          //     ? nextProgress.interpolate({
          //         inputRange: [0, 1],
          //         outputRange: [0, 10],
          //         extrapolate: 'clamp',
          //       })
          //     : 0;

          //   return {
          //     cardStyle: {
          //       transform: [
          //         { translateX },
          //         { scale },
          //       ],
          //       borderRadius,
          //       overflow: 'hidden',
          //     },
          //     overlayStyle: {
          //       backgroundColor: '#000',
          //       opacity: overlayOpacity,
          //     },
          //   };
          // },
          // Enhanced gesture configuration
          // gestureResponseDistance: 50,
          // gestureVelocityImpact: 0.3,
          // gestureEnabled: true,
        }}
      >
        <Stack.Screen 
          name="index" 
          options={{ 
            title: 'Welcome',
            gestureEnabled: false, // Disable swipe back on initial screen
          }} 
        />
        <Stack.Screen 
          name="(auth)" 
          options={{ 
            headerShown: false,
            presentation: 'card', // Use card presentation for auth flow
          }} 
        />
        <Stack.Screen 
          name="(tabs)" 
          options={{ 
            headerShown: false,
            gestureEnabled: false, // Disable swipe back on main app
          }} 
        />
      </Stack>
              </GestureHandlerRootView>

            </SafeAreaProvider>

    </View>
  );
}