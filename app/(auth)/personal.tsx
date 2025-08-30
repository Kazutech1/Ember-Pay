import { Text, View, TouchableOpacity, TextInput, ScrollView } from "react-native";
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

export default function PersonalInfo() {
  const [formData, setFormData] = useState({
    dateOfBirth: "",
    phoneNumber: "",
    address: "",
    city: "",
    zipCode: "",
    country: "United States"
  });
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 2;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Setup complete");
      // Navigate to main app
      router.push("/(tabs)/home");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      router.back();
    }
  };

  const renderStep1 = () => (
    <View className="space-y-6">
      <View>
        <Text className="text-zinc-300 text-sm font-medium mb-2">Date of Birth</Text>
        <TextInput
          value={formData.dateOfBirth}
          onChangeText={(value) => handleInputChange('dateOfBirth', value)}
          placeholder="MM/DD/YYYY"
          placeholderTextColor="#71717A"
          className="bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-4 text-white text-base"
        />
      </View>

      <View>
        <Text className="text-zinc-300 text-sm font-medium mb-2">Phone Number</Text>
        <TextInput
          value={formData.phoneNumber}
          onChangeText={(value) => handleInputChange('phoneNumber', value)}
          placeholder="+1 (555) 123-4567"
          placeholderTextColor="#71717A"
          keyboardType="phone-pad"
          className="bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-4 text-white text-base"
        />
      </View>

      <View className="bg-zinc-900/40 border border-zinc-700 rounded-xl p-4 my-3">
        <View className="flex-row items-start">
          <View className="w-6 h-6 bg-blue-600/20 rounded-full items-center justify-center mr-3 mt-1">
            <Text className="text-blue-400 text-xs">ℹ</Text>
          </View>
          <View className="flex-1">
            <Text className="text-zinc-300 text-sm font-medium mb-1">Why we need this information</Text>
            <Text className="text-zinc-400 text-xs leading-4">
              This information helps us verify your identity and comply with financial regulations to keep your account secure.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );

  const renderStep2 = () => (
    <View className="space-y-6">
      <View>
        <Text className="text-zinc-300 text-sm font-medium mb-2">Street Address</Text>
        <TextInput
          value={formData.address}
          onChangeText={(value) => handleInputChange('address', value)}
          placeholder="123 Main Street"
          placeholderTextColor="#71717A"
          className="bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-4 text-white text-base"
        />
      </View>

      <View className="flex-row space-x-4">
        <View className="flex-1">
          <Text className="text-zinc-300 text-sm font-medium mb-2">City</Text>
          <TextInput
            value={formData.city}
            onChangeText={(value) => handleInputChange('city', value)}
            placeholder="New York"
            placeholderTextColor="#71717A"
            className="bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-4 text-white text-base"
          />
        </View>

        <View className="w-24">
          <Text className="text-zinc-300 text-sm font-medium mb-2 mx-2">ZIP Code</Text>
          <TextInput
            value={formData.zipCode}
            onChangeText={(value) => handleInputChange('zipCode', value)}
            placeholder="10001"
            placeholderTextColor="#71717A"
            keyboardType="number-pad"
            className="bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-4 text-white mx-2 text-base"
          />
        </View>
      </View>

      <View>
        <Text className="text-zinc-300 text-sm font-medium mb-2">Country</Text>
        <TouchableOpacity className="bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-4 flex-row items-center justify-between">
          <Text className="text-white text-base">{formData.country}</Text>
          <Text className="text-zinc-400">▼</Text>
        </TouchableOpacity>
      </View>

      <View className="bg-green-900/20 border border-green-700 rounded-xl p-4 my-3">
        <View className="flex-row items-start">
          <View className="w-6 h-6 bg-green-600/20 rounded-full items-center justify-center mr-3 mt-1">
            <Text className="text-green-400 text-xs">✓</Text>
          </View>
          <View className="flex-1">
            <Text className="text-green-300 text-sm font-medium mb-1">Almost done!</Text>
            <Text className="text-green-400 text-xs leading-4">
              Your information is encrypted and stored securely. We'll never share it with third parties.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-zinc-950">
      {/* Background */}
      <View className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-neutral-900 to-stone-900" />
      
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-6 pt-16 pb-8">
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

          {/* Progress Indicator */}
          <View className="mb-8">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-zinc-400 text-sm">Step {currentStep} of {totalSteps}</Text>
              <Text className="text-zinc-400 text-sm">{Math.round((currentStep / totalSteps) * 100)}% complete</Text>
            </View>
            <View className="w-full h-2 bg-zinc-800 rounded-full">
              <View 
                className="h-2 bg-red-600 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </View>
          </View>

          {/* Content */}
          <View className="mb-8">
            <Text className="text-white text-3xl font-bold mb-2">
              {currentStep === 1 ? "Personal Details" : "Address Information"}
            </Text>
            <Text className="text-zinc-400 text-lg">
              {currentStep === 1 
                ? "Help us verify your identity" 
                : "Complete your profile setup"
              }
            </Text>
          </View>

          {/* Form Steps */}
          <View className="mb-8">
            {currentStep === 1 ? renderStep1() : renderStep2()}
          </View>

          {/* Action Buttons */}
          <View className="space-y-4">
            <TouchableOpacity
              onPress={handleContinue}
              className="bg-red-600 rounded-xl py-4 active:scale-98"
              style={{
                shadowColor: '#DC2626',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                elevation: 8,
              }}
            >
              <Text className="text-white text-lg font-semibold text-center">
                {currentStep === totalSteps ? "Complete Setup" : "Continue"}
              </Text>
            </TouchableOpacity>

            {/* {currentStep === 1 && (
              <TouchableOpacity>
                <Text className="text-zinc-500 text-center text-sm">
                  Skip for now
                </Text>
              </TouchableOpacity>
            )} */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}