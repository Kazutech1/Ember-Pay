import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, Flashlight, FlashlightOff } from 'lucide-react-native';

export default function QRScannerScreen() {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [torchOn, setTorchOn] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return (
      <View className="flex-1 bg-zinc-950 justify-center items-center">
        <Text className="text-white text-lg">Requesting camera permission...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View className="flex-1 bg-zinc-950 justify-center items-center p-6">
        <Text className="text-white text-lg text-center mb-4">
          Camera permission is required to scan QR codes
        </Text>
        <TouchableOpacity 
          className="bg-red-600 px-6 py-3 rounded-full"
          onPress={() => navigation.goBack()}
        >
          <Text className="text-white font-semibold">Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-zinc-950">
      <StatusBar style="light" />
      
      {/* Header */}
      <View className="absolute top-0 left-0 right-0 z-10 pt-16 px-6 flex-row items-center justify-between">
        <TouchableOpacity 
          className="w-10 h-10 bg-black/50 rounded-full items-center justify-center"
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft color="white" size={24} />
        </TouchableOpacity>
        
        <Text className="text-white text-xl font-bold">QR Scanner</Text>
        
        <View className="w-10 h-10" /> {/* Empty view for spacing */}
      </View>

      {/* Camera View */}
      <Camera
        className="flex-1"
        type={Camera.Constants.Type.back}
        flashMode={torchOn ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off}
      >
        {/* Scanner Overlay */}
        <View className="flex-1 bg-transparent justify-center items-center">
          {/* Scanner Frame */}
          <View className="w-64 h-64 border-4 border-white rounded-xl relative">
            {/* Corner markers */}
            <View className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-white rounded-tl" />
            <View className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-white rounded-tr" />
            <View className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-white rounded-bl" />
            <View className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-white rounded-br" />
          </View>
          
          {/* Instructions */}
          <View className="absolute bottom-20 left-0 right-0 items-center px-6">
            <Text className="text-white text-lg font-medium mb-2 text-center">
              Point at a QR code
            </Text>
            <Text className="text-zinc-300 text-center">
              Camera is active
            </Text>
          </View>
        </View>
      </Camera>

      {/* Flashlight Control */}
      <View className="absolute bottom-10 left-0 right-0 items-center">
        <TouchableOpacity 
          className="w-16 h-16 bg-black/50 rounded-full items-center justify-center"
          onPress={toggleTorch}
        >
          {torchOn ? (
            <FlashlightOff color="white" size={28} />
          ) : (
            <Flashlight color="white" size={28} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}