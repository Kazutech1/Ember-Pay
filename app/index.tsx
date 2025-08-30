import { Text, View, TouchableOpacity } from "react-native";
import { Svg, Path, Defs, LinearGradient, Stop, Circle } from "react-native-svg";
import { router } from "expo-router";

const ModernEmberIcon = ({ size = 100 }) => (
  <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <Defs>
      <LinearGradient id="darkEmberGradient" x1="0%" y1="100%" x2="0%" y2="0%">
        <Stop offset="0%" stopColor="#8B0000" />
        <Stop offset="25%" stopColor="#B91C1C" />
        <Stop offset="50%" stopColor="#DC2626" />
        <Stop offset="75%" stopColor="#EF4444" />
        <Stop offset="100%" stopColor="#F87171" />
      </LinearGradient>
      <LinearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <Stop offset="0%" stopColor="#DC2626" stopOpacity="0.8" />
        <Stop offset="100%" stopColor="#7C2D12" stopOpacity="0.3" />
      </LinearGradient>
    </Defs>
    
    <Circle cx="50" cy="50" r="45" fill="url(#glowGradient)" opacity="0.4" />
    <Path
      d="M50 10 L45 20 Q40 25, 35 35 Q30 45, 32 55 Q35 65, 42 72 Q50 78, 50 78 Q58 72, 65 65 Q70 55, 68 45 Q65 35, 60 25 Q55 20, 50 10 Z"
      fill="url(#darkEmberGradient)"
    />
    <Path
      d="M50 18 Q47 25, 44 32 Q40 40, 42 48 Q45 56, 50 62 Q55 56, 58 48 Q60 40, 56 32 Q53 25, 50 18 Z"
      fill="#DC2626"
      opacity="0.9"
    />
    <Path
      d="M50 25 Q48 30, 46 35 Q44 40, 46 45 Q48 50, 50 52 Q52 50, 54 45 Q56 40, 54 35 Q52 30, 50 25 Z"
      fill="#EF4444"
    />
    <Path d="M25 40 L27 38 L29 40 L27 42 Z" fill="#DC2626" opacity="0.8" />
    <Path d="M75 30 L77 28 L79 30 L77 32 Z" fill="#B91C1C" opacity="0.7" />
    <Path d="M20 55 L22 53 L24 55 L22 57 Z" fill="#EF4444" opacity="0.6" />
    <Path d="M78 50 L80 48 L82 50 L80 52 Z" fill="#F87171" opacity="0.5" />
  </Svg>
);

export default function OnboardingScreen() {
  const handleGetStarted = () => {
    router.push('/(auth)/signup');    
  };

  const handleSignIn = () => {
    router.push('/(auth)/login');
  };

  return (
    <View className="flex-1 bg-zinc-950">
      {/* Modern gradient background */}
      <View className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-neutral-900 to-stone-900" />
      
      {/* Subtle grid pattern overlay */}
      <View className="absolute inset-0 opacity-5">
        <View className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
      </View>
      
      <View className="flex-1 justify-between px-6 pt-16 pb-8">
        {/* Header Section */}
        <View className="flex-1 justify-center items-center">
          {/* Icon with glow effect */}
          <View className="items-center mb-8">
            <View className="relative">
              <ModernEmberIcon size={120} />
              {/* Glow rings */}
              <View className="absolute inset-0 rounded-full border border-red-500/20 scale-125" />
              <View className="absolute inset-0 rounded-full border border-red-600/10 scale-150" />
            </View>
          </View>
          
          {/* Brand Name - Modern Typography */}
          <View className="items-center mb-12">
            <Text className="text-white text-6xl font-black tracking-tight mb-1">
              EMBER
            </Text>
            <View className="flex-row items-center">
              <View className="h-px bg-red-600 w-8 mr-3" />
              <Text className="text-red-500 text-xl font-light tracking-[0.5em]">
                PAY
              </Text>
              <View className="h-px bg-red-600 w-8 ml-3" />
            </View>
          </View>
          
          {/* Value Proposition */}
          <View className="items-center px-8">
            <Text className="text-zinc-300 text-xl text-center font-light leading-7 mb-2">
              The future of payments
            </Text>
            <Text className="text-white text-lg text-center font-medium">
              Powered by blockchain technology
            </Text>
          </View>
        </View>
        
        {/* Bottom Section */}
        <View className="space-y-6">
          {/* Feature highlights with modern cards */}
          <View className="space-y-4 mb-8">
            <View className="bg-zinc-900/60 backdrop-blur border border-zinc-800 rounded-2xl p-4 flex-row items-center">
              <View className="w-10 h-10 bg-red-600/20 rounded-xl items-center justify-center mr-4">
                <View className="w-4 h-4 bg-red-500 rounded" />
              </View>
              <View className="flex-1">
                <Text className="text-white font-semibold text-base">Instant Transfers</Text>
                <Text className="text-zinc-400 text-sm">Send crypto in seconds</Text>
              </View>
            </View>
            
            <View className="bg-zinc-900/60 backdrop-blur border border-zinc-800 rounded-2xl my-3 p-4 flex-row items-center">
              <View className="w-10 h-10 bg-red-600/20 rounded-xl items-center justify-center mr-4">
                <View className="w-4 h-4 bg-red-500 rounded-full" />
              </View>
              <View className="flex-1">
                <Text className="text-white font-semibold text-base">Bank-Level Security</Text>
                <Text className="text-zinc-400 text-sm">Military-grade encryption</Text>
              </View>
            </View>
          </View>
          
          {/* CTA Button */}
          <TouchableOpacity
            onPress={handleGetStarted}
            className="bg-red-600 rounded-xl py-4 my-5 active:scale-98"
            style={{
              shadowColor: '#DC2626',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 8,
            }}
          >
            <Text className="text-white text-lg font-semibold text-center">
              Get Started
            </Text>
          </TouchableOpacity>
          
          {/* Sign in link */}
          <View className="flex-row justify-center items-center">
            <Text className="text-zinc-500 text-sm">Already have an account?</Text>
            <TouchableOpacity className="ml-2" onPress={handleSignIn}>
              <Text className="text-red-500 font-semibold text-sm">Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}