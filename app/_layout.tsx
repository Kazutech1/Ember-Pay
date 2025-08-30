import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import "../global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: '#09090B' }}>
        <StatusBar style="light" />
        
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#09090B' },
            // Faster animation settings
            animation: 'fade',
            animationDuration: 150,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            gestureResponseDistance: 25, // Smaller distance to trigger navigation
            gestureVelocityImpact: 0.9, // More sensitive to swipe velocity
          }}
        >
          <Stack.Screen 
            name="index" 
            options={{
              animation: 'fade',
              animationDuration: 100,
            }} 
          />
          <Stack.Screen 
            name="(auth)" 
            options={{
              animation: 'slide_from_right',
              animationDuration: 180,
            }} 
          />
          <Stack.Screen 
            name="(tabs)" 
            options={{
              animation: 'fade',
              animationDuration: 120,
            }} 
          />
        </Stack>
      </View>
    </SafeAreaProvider>
  );
}