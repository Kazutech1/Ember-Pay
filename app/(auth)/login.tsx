import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { Svg, Path, Defs, LinearGradient, Stop, Circle } from "react-native-svg";
import { router } from "expo-router";
import { useState } from "react";

const ModernEmberIcon = ({ size = 60 }) => (
  <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <Defs>
      <LinearGradient id="darkEmberGradient" x1="0%" y1="100%" x2="0%" y2="0%">
        <Stop offset="0%" stopColor="#8B0000" />
        <Stop offset="25%" stopColor="#B91C1C" />
        <Stop offset="50%" stopColor="#DC2626" />
        <Stop offset="75%" stopColor="#EF4444" />
        <Stop offset="100%" stopColor="#F87171" />
      </LinearGradient>
    </Defs>
    
    <Circle cx="50" cy="50" r="35" fill="url(#darkEmberGradient)" opacity="0.2" />
    <Path
      d="M50 15 L45 25 Q40 30, 35 40 Q30 50, 32 60 Q35 70, 42 75 Q50 80, 50 80 Q58 75, 65 70 Q70 60, 68 50 Q65 40, 60 30 Q55 25, 50 15 Z"
      fill="url(#darkEmberGradient)"
    />
  </Svg>
);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login pressed");
    // Handle login logic
    router.push("/(auth)/personal");
  };

  const handleSignUp = () => {
    router.push("/(auth)/signup");
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <View className="flex-1 bg-zinc-950">
      {/* Background */}
      <View className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-neutral-900 to-stone-900" />
      
      <View className="flex-1 px-6 pt-16">
        {/* Header */}
        <View className="flex-row items-center justify-between mb-8">
          <TouchableOpacity 
            onPress={handleBack}
            className="w-10 h-10 bg-zinc-800 rounded-xl items-center justify-center"
          >
            <Text className="text-white text-lg">←</Text>
          </TouchableOpacity>
          
          <View className="flex-row items-center">
            <ModernEmberIcon size={40} />
            <Text className="text-white text-xl font-bold ml-2">EMBER PAY</Text>
          </View>
          
          <View className="w-10" />
        </View>

        {/* Welcome Text */}
        <View className="mb-8">
          <Text className="text-white text-3xl font-bold mb-2">Welcome Back</Text>
          <Text className="text-zinc-400 text-lg">Sign in to your account</Text>
        </View>

        {/* Form */}
        <View className="space-y-6 mb-8">
          {/* Email Input */}
          <View>
            <Text className="text-zinc-300 text-sm font-medium mb-2">Email Address</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              placeholderTextColor="#71717A"
              keyboardType="email-address"
              autoCapitalize="none"
              className="bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-4 text-white text-base"
            />
          </View>

          {/* Password Input */}
          <View>
            <Text className="text-zinc-300 text-sm font-medium mb-2">Password</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              placeholderTextColor="#71717A"
              secureTextEntry
              className="bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-4 text-white text-base"
            />
          </View>

          {/* Forgot Password */}
          <TouchableOpacity className="self-end">
            <Text className="text-red-500 text-sm font-medium">Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          onPress={handleLogin}
          className="bg-red-600 rounded-xl py-4 mb-6 active:scale-98"
          style={{
            shadowColor: '#DC2626',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 8,
          }}
        >
          <Text className="text-white text-lg font-semibold text-center">
            Sign In
          </Text>
        </TouchableOpacity>

        {/* Divider */}
        <View className="flex-row items-center mb-6">
          <View className="flex-1 h-px bg-zinc-700" />
          <Text className="text-zinc-500 text-sm mx-4">or</Text>
          <View className="flex-1 h-px bg-zinc-700" />
        </View>

        {/* Social Login Options */}
        <View className="space-y-4 mb-8">
          <TouchableOpacity className="bg-zinc-900 border border-zinc-700 rounded-xl py-4  my-3 flex-row items-center justify-center">
            <Text className="text-white font-medium">Continue with Google</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="bg-zinc-900 border border-zinc-700 rounded-xl py-4 flex-row items-center justify-center">
            <Text className="text-white font-medium">Continue with Apple</Text>
          </TouchableOpacity>
        </View>

        {/* Sign Up Link */}
        <View className="flex-row justify-center items-center mt-auto mb-8">
          <Text className="text-zinc-500 text-base">Don't have an account? </Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text className="text-red-500 font-semibold text-base">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}